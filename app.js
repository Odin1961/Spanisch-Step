const Store={
  key:"espanolStepProfile01",
  load(){try{return JSON.parse(localStorage.getItem(this.key))||null}catch{return null}},
  save(v){localStorage.setItem(this.key,JSON.stringify(v))}
};

let profile=Store.load()||{
  name:"Fred",level:"A2",accent:"es-ES",subtitles:true,speed:.85,
  points:0,answered:0,correct:0,dialogs:0,vocabTopic:"Alle",grammarTopic:"Alle",lastMode:"vocab"
};

AppStability.sanitizeProfile(profile);
profile.pronunciationTopic=profile.pronunciationTopic||"Alle";
profile.pronunciationAttempts=profile.pronunciationAttempts||0;
profile.pronunciationTotalScore=profile.pronunciationTotalScore||0;
profile.coachMinutes=profile.coachMinutes||15;

let route="home";
let currentQuestion=null;
let dialogueState={topic:null,step:0,usedIntros:{},usedBots:{},history:[]};
let coachSession={active:false,answered:0,correct:0,points:0,startedAt:0};

const root=document.getElementById("viewRoot");
const title=document.getElementById("pageTitle");
const levelPill=document.getElementById("levelPill");

let saveTimer=null;

function save(){
  clearTimeout(saveTimer);
  saveTimer=setTimeout(()=>{
    AppStability.safe(()=>{
      AppStability.sanitizeProfile(profile);
      Store.save(profile);
    },"save-profile");
  },60);
}

function saveNow(){
  clearTimeout(saveTimer);
  AppStability.safe(()=>{
    AppStability.sanitizeProfile(profile);
    Store.save(profile);
  },"save-profile-now");
}


const SpeechController={
  queue:[],
  active:false,
  generation:0,
  currentUtterance:null,
  voices:[],

  init(){
    if(!this.supported())return;

    const loadVoices=()=>{
      this.voices=window.speechSynthesis.getVoices() || [];
    };

    loadVoices();
    window.speechSynthesis.onvoiceschanged=loadVoices;

    document.addEventListener("visibilitychange",()=>{
      if(
        document.visibilityState==="visible" &&
        window.speechSynthesis &&
        window.speechSynthesis.paused
      ){
        try{window.speechSynthesis.resume()}catch{}
      }
    });
  },

  supported(){
    return Boolean(
      window.speechSynthesis &&
      typeof window.SpeechSynthesisUtterance==="function"
    );
  },

  locale(){
    return profile.accent==="es-MX" ? "es-MX" : "es-ES";
  },

  chooseVoice(){
    if(!this.supported())return null;

    const locale=this.locale();
    const voices=this.voices.length
      ? this.voices
      : (window.speechSynthesis.getVoices() || []);

    const exact=voices.find(v=>
      String(v.lang).toLowerCase()===locale.toLowerCase()
    );
    if(exact)return exact;

    if(locale==="es-MX"){
      const latin=voices.find(v=>
        /^es-(mx|us|419|ar|co|cl|pe|ve)/i.test(String(v.lang))
      );
      if(latin)return latin;
    }

    return voices.find(v=>/^es/i.test(String(v.lang))) || null;
  },

  splitText(text){
    const clean=String(text || "").replace(/\s+/g," ").trim();
    if(!clean)return [];

    const sentences=clean.match(/[^.!?;:]+[.!?;:]*/g) || [clean];
    const chunks=[];

    for(const sentence of sentences){
      const value=sentence.trim();
      if(!value)continue;

      if(value.length<=180){
        chunks.push(value);
        continue;
      }

      const words=value.split(/\s+/);
      let current="";

      for(const word of words){
        const candidate=current ? current+" "+word : word;
        if(candidate.length>150 && current){
          chunks.push(current);
          current=word;
        }else{
          current=candidate;
        }
      }

      if(current)chunks.push(current);
    }

    return chunks;
  },

  estimateDuration(text){
    const words=String(text || "").trim().split(/\s+/).filter(Boolean).length;
    const rate=Math.max(.55,Math.min(1.15,Number(profile.speed)||.85));
    return Math.max(2400,Math.min(32000,(words*520)/rate+1800));
  },

  speak(text,options={}){
    return new Promise(resolve=>{
      const chunks=this.splitText(text);

      if(!chunks.length || !this.supported()){
        resolve();
        return;
      }

      if(options.interrupt)this.stop();

      this.queue.push({
        chunks,
        index:0,
        generation:this.generation,
        resolve,
        locale:this.locale(),
        rate:Math.max(.55,Math.min(1.15,Number(profile.speed)||.85))
      });

      this.process();
    });
  },

  process(){
    if(this.active || !this.queue.length)return;

    const item=this.queue[0];

    if(item.generation!==this.generation){
      this.queue.shift();
      item.resolve();
      this.process();
      return;
    }

    if(item.index>=item.chunks.length){
      this.queue.shift();
      item.resolve();
      this.process();
      return;
    }

    this.active=true;
    this.speakChunk(item);
  },

  speakChunk(item){
    const text=item.chunks[item.index];
    const utterance=new SpeechSynthesisUtterance(text);

    utterance.lang=item.locale;
    utterance.rate=item.rate;
    utterance.pitch=1;
    utterance.volume=1;

    const voice=this.chooseVoice();
    if(voice)utterance.voice=voice;

    let finished=false;
    let fallbackTimer;
    let resumeTimer;

    const finish=()=>{
      if(finished)return;
      finished=true;
      clearTimeout(fallbackTimer);
      clearInterval(resumeTimer);

      if(this.currentUtterance===utterance){
        this.currentUtterance=null;
      }

      this.active=false;

      if(item.generation!==this.generation){
        if(this.queue[0]===item){
          this.queue.shift();
          item.resolve();
        }
        this.process();
        return;
      }

      item.index++;
      this.process();
    };

    utterance.onend=finish;
    utterance.onerror=event=>{
      if(
        item.generation!==this.generation ||
        event.error==="canceled" ||
        event.error==="interrupted"
      ){
        finish();
      }else{
        setTimeout(finish,250);
      }
    };

    fallbackTimer=setTimeout(finish,this.estimateDuration(text));

    resumeTimer=setInterval(()=>{
      try{
        if(
          item.generation===this.generation &&
          window.speechSynthesis &&
          window.speechSynthesis.speaking &&
          window.speechSynthesis.paused
        ){
          window.speechSynthesis.resume();
        }
      }catch{}
    },900);

    this.currentUtterance=utterance;

    try{
      window.speechSynthesis.resume();
      window.speechSynthesis.speak(utterance);
    }catch{
      finish();
    }
  },

  stop(){
    this.generation++;

    const pending=this.queue.splice(0);
    for(const item of pending){
      try{item.resolve()}catch{}
    }

    try{
      window.speechSynthesis.cancel();
    }catch{}

    this.currentUtterance=null;
    this.active=false;
  },

  test(){
    const sample=this.locale()==="es-MX"
      ? "Hola. Esta es la voz de Español Step para Latinoamérica."
      : "Hola. Esta es la voz de Español Step para España.";
    return this.speak(sample,{interrupt:true});
  },

  status(){
    return {
      supported:this.supported(),
      active:this.active,
      queued:this.queue.length,
      locale:this.locale(),
      voice:this.chooseVoice()?.name || null
    };
  }
};

SpeechController.init();

function speak(text,options){
  return SpeechController.speak(text,options);
}

window.addEventListener("beforeunload",saveNow);

function stopActiveTraining(){
  try{
    if(typeof SpeechController!=="undefined"){
      SpeechController.stop();
    }
  }catch{}

  try{
    if(typeof stopPronunciationRecognition==="function"){
      stopPronunciationRecognition();
    }
  }catch{}

  try{
    if(
      typeof continuousDialogue!=="undefined" &&
      continuousDialogue &&
      continuousDialogue.active
    ){
      continuousDialogue.active=false;
      continuousDialogue.token=(continuousDialogue.token||0)+1;
    }
  }catch{}

  try{
    if(typeof pronunciationListening!=="undefined"){
      pronunciationListening=false;
    }
  }catch{}
}

function nav(to){
  const validRoutes=["home","coach","free","progress","settings"];
  const target=validRoutes.includes(to)?to:"home";

  try{
    stopActiveTraining();
  }catch(error){
    console.warn("Laufendes Training konnte nicht vollständig beendet werden.",error);
  }

  route=target;

  document.querySelectorAll(".nav-btn").forEach(button=>{
    button.classList.toggle("active",button.dataset.route===target);
  });

  try{
    render();
  }catch(error){
    AppStability.record(error,`navigation:${target}`);
    route="home";
    homeView();
  }
}

function homeView(){
  title.textContent="Start";
  const vs=VocabularyEngine.stats(profile.level);
  root.innerHTML=`
    <section class="card hero">
      <h2>Hallo ${profile.name} 👋</h2>
      <p>Schön, dass du wieder da bist. Lerne Spanisch mit dem Coach oder trainiere gezielt einen Bereich.</p>
      <div class="stack">
        <button class="primary" id="homeCoach">▶ Mit Coach lernen</button>
        <button class="secondary" id="homeFree">📚 Freies Training</button>
      </div>
    </section>

    <section class="card">
      <h2>Vokabelstand</h2>
      <div class="stats">
        <div class="stat"><strong>${vs.seen}</strong><span>gesehen</span></div>
        <div class="stat"><strong>${vs.mastered}</strong><span>sicher</span></div>
        <div class="stat"><strong>${vs.due}</strong><span>heute fällig</span></div>
      </div>
    </section>

    <section class="card">
      <h2>Gesamtfortschritt</h2>
      <div class="stats">
        <div class="stat"><strong>${profile.points}</strong><span>Punkte</span></div>
        <div class="stat"><strong>${profile.answered}</strong><span>Aufgaben</span></div>
        <div class="stat"><strong>${profile.dialogs}</strong><span>Gespräche</span></div>
      </div>
    </section>`;

  document.getElementById("homeCoach").onclick=()=>nav("coach");
  document.getElementById("homeFree").onclick=()=>nav("free");
}

function freeView(){
  title.textContent="Freies Training";
  root.innerHTML=`
    <section class="card">
      <h2>Was möchtest du üben?</h2>
      <div class="grid">
        <button class="tile" data-mode="vocab"><span class="icon">📖</span>Vokabeln</button>
        <button class="tile" data-mode="grammar"><span class="icon">✏️</span>Grammatik</button>
        <button class="tile" data-mode="dialogue"><span class="icon">💬</span>Gespräche</button>
        <button class="tile" data-mode="pronunciation"><span class="icon">🎙️</span>Aussprache</button>
        <button class="tile" data-mode="translation"><span class="icon">🔄</span>Übersetzungen</button>
      </div>
    </section>`;
  document.querySelectorAll("[data-mode]").forEach(b=>b.onclick=()=>startMode(b.dataset.mode));
}

function progressView(){
  title.textContent="Fortschritt";
  const accuracy=profile.answered?Math.round(profile.correct/profile.answered*100):0;
  const vs=VocabularyEngine.stats(profile.level);

  root.innerHTML=`
    <section class="card">
      <h2>Dein Lernstand</h2>
      <div class="stats">
        <div class="stat"><strong>${profile.points}</strong><span>Punkte</span></div>
        <div class="stat"><strong>${accuracy}%</strong><span>Trefferquote</span></div>
        <div class="stat"><strong>${profile.level}</strong><span>Niveau</span></div>
      </div>
    </section>

    <section class="card">
      <h2>Vokabeln</h2>
      <div class="stats">
        <div class="stat"><strong>${vs.seen}/${vs.total}</strong><span>bearbeitet</span></div>
        <div class="stat"><strong>${vs.mastered}</strong><span>sicher</span></div>
        <div class="stat"><strong>${vs.due}</strong><span>fällig</span></div>
      </div>
    </section>

    <section class="card">
      <h2>Aussprache</h2>
      <div class="stats">
        <div class="stat"><strong>${PronunciationEngine.stats(profile.level).practiced}</strong><span>geübt</span></div>
        <div class="stat"><strong>${PronunciationEngine.stats(profile.level).mastered}</strong><span>sicher</span></div>
        <div class="stat"><strong>${PronunciationEngine.stats(profile.level).average}%</strong><span>Durchschnitt</span></div>
      </div>
    </section>

    <section class="card">
      <h2>Lerncoach</h2>
      <div class="stats">
        <div class="stat"><strong>${CoachEngine.stats().streakDays}</strong><span>Tage in Folge</span></div>
        <div class="stat"><strong>${CoachEngine.stats().sessions}</strong><span>Lerneinheiten</span></div>
        <div class="stat"><strong>${CoachEngine.stats().dailyMinutes}</strong><span>Minuten täglich</span></div>
      </div>
    </section>

    <section class="card">
      <h2>Grammatik</h2>
      <div class="stats">
        <div class="stat"><strong>${GrammarEngine.stats(profile.level).practiced}</strong><span>geübt</span></div>
        <div class="stat"><strong>${GrammarEngine.stats(profile.level).mastered}</strong><span>sicher</span></div>
        <div class="stat"><strong>${GrammarEngine.stats(profile.level).total}</strong><span>verfügbar</span></div>
      </div>
    </section>`;
}

function settingsView(){
  title.textContent="Einstellungen";
  root.innerHTML=`
    <section class="card">
      <label>Name<input id="setName" value="${profile.name}"></label>
      <label>Niveau<select id="setLevel">
        ${["A1","A2","B1","B2"].map(x=>
          `<option ${x===profile.level?"selected":""}>${x}</option>`
        ).join("")}
      </select></label>
      <label>Spanisch<select id="setAccent">
        <option value="es-ES" ${profile.accent==="es-ES"?"selected":""}>
          Spanien
        </option>
        <option value="es-MX" ${profile.accent==="es-MX"?"selected":""}>
          Lateinamerika
        </option>
      </select></label>
      <label>Sprechgeschwindigkeit
        <input id="setSpeed" type="range" min=".55" max="1.15"
          step=".1" value="${profile.speed}">
      </label>
      <label>
        <input id="setSubs" type="checkbox" ${profile.subtitles?"checked":""}>
        Deutsche Untertitel
      </label>
      <button class="secondary" id="testVoice">Spanische Stimme testen</button>
      <button class="secondary" id="runDiagnostics">Funktionsprüfung</button>
      <button class="secondary" id="runRuntimeHealth">Startprüfung</button>
      <button class="secondary" id="recoverTrainingState">Sitzung zurücksetzen</button>
      <button class="primary" id="saveSettings">Speichern</button>
    </section>`;

  document.getElementById("testVoice").onclick=()=>SpeechController.test();

  document.getElementById("runRuntimeHealth").onclick=()=>{
    RuntimeHealth.show();
  };

  document.getElementById("recoverTrainingState").onclick=()=>{
    if(confirm(
      "Nur laufende Sitzungen zurücksetzen? Der Lernfortschritt bleibt erhalten."
    )){
      RuntimeHealth.recover();
      settingsView();
    }
  };

  document.getElementById("runDiagnostics").onclick=()=>{
    const report=AppStability.validateContent();
    const ok=
      report.invalidVocabulary===0 &&
      report.invalidBranching===0 &&
      report.invalidQuality===0 &&
      report.invalidGrammar===0;

    alert(
      `${ok?"Prüfung erfolgreich":"Prüfung mit Auffälligkeiten"}\n\n`+
      `Vokabeln: ${report.vocabulary}\n`+
      `Verzweigte Gespräche: ${report.branching}\n`+
      `Freie Gespräche: ${report.quality}\n`+
      `Grammatikaufgaben: ${report.grammar}\n\n`+
      `Ungültige Einträge: ${
        report.invalidVocabulary+
        report.invalidBranching+
        report.invalidQuality+
        report.invalidGrammar
      }`
    );
  };

  document.getElementById("saveSettings").onclick=()=>{
    profile.name=document.getElementById("setName").value.trim()||"Fred";
    profile.level=document.getElementById("setLevel").value;
    profile.accent=document.getElementById("setAccent").value;
    profile.speed=Number(document.getElementById("setSpeed").value);
    profile.subtitles=document.getElementById("setSubs").checked;
    VocabularyEngine.resetSession();
    GrammarEngine.resetSession();
    save();
    nav("home");
  };
}

function coachView(){
  title.textContent="Coach";

  const stats=CoachEngine.stats();
  const plan=CoachEngine.getPlan(profile);
  const recommendations=CoachEngine.recommendations(profile);
  const weaknesses=CoachEngine.weaknesses(profile);
  const weekly=CoachEngine.weeklySummary();
  const progress=plan.tasks.length
    ? Math.round(plan.cursor/plan.tasks.length*100)
    : 0;

  const labels={
    vocab:"Vokabeln",
    grammar:"Grammatik",
    dialogue:"Gespräch",
    pronunciation:"Aussprache",
    translation:"Übersetzung"
  };

  root.innerHTML=`
    <section class="card hero">
      <h2>Dein persönlicher Lerncoach</h2>
      <p>
        Der Tagesplan wird aus deinem tatsächlichen Lernstand,
        deinen Fehlern und den zuletzt trainierten Bereichen erstellt.
      </p>

      <div class="stats">
        <div class="stat"><strong>${stats.streakDays}</strong><span>Tage in Folge</span></div>
        <div class="stat"><strong>${plan.minutes}</strong><span>Minuten heute</span></div>
        <div class="stat"><strong>${progress}%</strong><span>Tagesplan</span></div>
        <div class="stat"><strong>${stats.completedDays}</strong><span>Pläne beendet</span></div>
      </div>

      <label>Tägliche Lernzeit
        <select id="coachMinutes">
          ${[5,10,15,20,30,45].map(minutes=>`
            <option value="${minutes}" ${minutes===plan.minutes?"selected":""}>
              ${minutes} Minuten
            </option>`).join("")}
        </select>
      </label>

      <div class="row">
        <button class="primary" id="coachStart">▶ Tagesplan starten</button>
        <button class="secondary" id="coachRebuild">Plan neu berechnen</button>
      </div>
    </section>

    <section class="card">
      <h2>Heutiger Plan</h2>
      <p class="muted small">
        Schwerpunkt:
        ${plan.focus?.map(mode=>labels[mode]||mode).join(", ")||"ausgewogen"}
      </p>
      <div class="coach-plan">
        ${plan.tasks.map((mode,index)=>`
          <div class="coach-plan-item ${
            index<plan.cursor?"done":index===plan.cursor?"current":""
          }">
            <span>${index<plan.cursor?"✓":index+1}</span>
            <strong>${labels[mode]||mode}</strong>
          </div>`).join("")}
      </div>
    </section>

    <section class="card">
      <h2>Empfehlungen</h2>
      <div class="grid">
        ${recommendations.map(item=>`
          <button class="tile" data-coach-recommend="${item.mode}">
            <strong>${item.title}</strong>
            <span class="muted small">${item.text}</span>
            <span class="badge">
              ${item.urgency===3?"jetzt":item.urgency===2?"bald":"ergänzend"}
            </span>
          </button>`).join("")}
      </div>
    </section>

    <section class="card">
      <h2>Aktuelle Lernschwerpunkte</h2>
      ${weaknesses.slice(0,5).map(item=>`
        <div class="coach-weakness">
          <div>
            <strong>${item.label}</strong>
            <div class="muted small">${item.detail}</div>
          </div>
          <span class="badge">${Math.max(0,Math.round(item.score))}</span>
        </div>`).join("")}
    </section>

    <section class="card">
      <h2>Letzte Lerneinheiten</h2>
      <div class="stats">
        <div class="stat"><strong>${weekly.sessions}</strong><span>Sitzungen</span></div>
        <div class="stat"><strong>${weekly.minutes}</strong><span>Minuten</span></div>
        <div class="stat"><strong>${weekly.answered}</strong><span>Aufgaben</span></div>
        <div class="stat"><strong>${weekly.accuracy}%</strong><span>Trefferquote</span></div>
      </div>
    </section>`;

  document.getElementById("coachStart").onclick=()=>{
    const minutes=Number(document.getElementById("coachMinutes").value);
    profile.coachMinutes=minutes;
    save();
    startCoachSession(minutes);
  };

  document.getElementById("coachRebuild").onclick=()=>{
    const minutes=Number(document.getElementById("coachMinutes").value);
    profile.coachMinutes=minutes;
    CoachEngine.buildPlan(profile,minutes);
    save();
    coachView();
  };

  document.querySelectorAll("[data-coach-recommend]").forEach(button=>{
    button.onclick=()=>{
      coachSession={
        active:true,
        answered:0,
        correct:0,
        points:0,
        startedAt:Date.now()
      };
      startMode(button.dataset.coachRecommend,true);
    };
  });
}

function coachHeader(){
  if(!coachSession.active) return "";
  return `
    <div class="coach-strip">
      <span>Coach · ${coachSession.answered} Aufgaben</span>
      <button id="stopCoachBtn" class="coach-stop">Heute beenden</button>
    </div>`;
}

function bindCoachStop(){
  const stop=document.getElementById("stopCoachBtn");
  if(stop) stop.onclick=stopCoachSession;
}

function startMode(mode,fromCoach=false){
  const validModes=[
    "vocab","grammar","dialogue","pronunciation","translation"
  ];

  if(!validModes.includes(mode)){
    AppStability.record(
      new Error(`Unbekannter Trainingsmodus: ${mode}`),
      "start-mode"
    );
    mode="vocab";
  }

  if(fromCoach)coachSession.active=true;
  profile.lastMode=mode;
  save();

  if(mode==="vocab"){
    return fromCoach?vocabQuestion():vocabStart();
  }

  if(mode==="grammar"){
    return fromCoach?grammarQuestion():grammarStart();
  }

  if(mode==="dialogue"){
    if(fromCoach){
      const scenarios=ES_BRANCHING_SCENARIOS_151||[];
      const scenario=scenarios[Math.floor(Math.random()*scenarios.length)];
      if(scenario){
        return startContinuousDialogue("branch",scenario.id,"Alle");
      }
    }
    return dialogueQuestion();
  }

  if(mode==="pronunciation"){
    return fromCoach?pronunciationQuestion():pronunciationStart();
  }

  return translationQuestion();
}

function startCoachSession(minutes=null){
  const plan=CoachEngine.startPlan(
    profile,
    minutes||profile.coachMinutes||15
  );

  coachSession={
    active:true,
    answered:0,
    correct:0,
    points:0,
    startedAt:Date.now(),
    planId:plan.id
  };

  continueCoach();
}

function continueCoach(){
  if(!coachSession.active)return;

  const mode=CoachEngine.next(profile);
  if(!mode){
    stopCoachSession();
    return;
  }

  startMode(mode,true);
}

function stopCoachSession(){
  if(!coachSession.active){
    coachView();
    return;
  }

  const minutes=Math.max(
    1,
    Math.round(
      (Date.now()-(coachSession.startedAt||Date.now()))/60000
    )
  );
  const answered=coachSession.answered||0;
  const correct=coachSession.correct||0;
  const points=coachSession.points||0;
  const accuracy=answered
    ? Math.round(correct/answered*100)
    : 0;

  CoachEngine.finishSession({
    minutes,
    answered,
    correct,
    points
  });

  coachSession.active=false;
  saveNow();

  title.textContent="Coach";
  root.innerHTML=`
    <section class="card">
      <h2>Lerneinheit abgeschlossen</h2>
      <div class="stats">
        <div class="stat"><strong>${answered}</strong><span>Aufgaben</span></div>
        <div class="stat"><strong>${correct}</strong><span>richtig</span></div>
        <div class="stat"><strong>${accuracy}%</strong><span>Trefferquote</span></div>
        <div class="stat"><strong>${points}</strong><span>Punkte</span></div>
      </div>
      <div class="row">
        <button class="primary" id="coachContinueSession">Weiterlernen</button>
        <button class="secondary" id="coachOverview">Coach-Übersicht</button>
        <button class="secondary" id="coachHome">Startseite</button>
      </div>
    </section>`;

  document.getElementById("coachContinueSession").onclick=()=>{
    startCoachSession();
  };
  document.getElementById("coachOverview").onclick=coachView;
  document.getElementById("coachHome").onclick=()=>nav("home");
}

function resultView(ok,correct,nextMode){
  profile.answered++;
  if(ok){profile.correct++;profile.points+=10}
  if(coachSession.active){
    coachSession.answered++;
    if(ok) coachSession.correct++;
    coachSession.points+=ok?10:3;
    CoachEngine.record(
      nextMode||profile.lastMode||"vocab",
      ok
    );
  }
  save();

  const box=document.getElementById("feedback");
  box.className="feedback "+(ok?"ok":"no");
  box.textContent=ok?"Richtig! Sehr gut.":"Noch nicht ganz. Richtig ist: "+correct;

  document.getElementById("nextBtn").classList.remove("hidden");
  document.getElementById("nextBtn").textContent=coachSession.active?"Im Coach weiter":"Weiter";
  document.getElementById("nextBtn").onclick=()=>{
    if(coachSession.active) continueCoach();
    else if((nextMode||profile.lastMode)==="vocab") vocabQuestion();
    else if((nextMode||profile.lastMode)==="grammar") grammarQuestion();
    else startMode(nextMode||profile.lastMode||"vocab");
  };
}

let vocabularyAnswerLocked=false;

function vocabStart(){
  title.textContent="Vokabeln";
  const topics=VocabularyEngine.topics(profile.level);
  root.innerHTML=`
    <section class="card">
      <h2>Vokabeltrainer</h2>
      <label>Thema
        <select id="vocabTopic">
          ${topics.map(t=>`<option ${t===profile.vocabTopic?"selected":""}>${t}</option>`).join("")}
        </select>
      </label>
      <p class="muted">Fällige Wörter kommen zuerst. Neue Wörter werden schrittweise eingeführt.</p>
      <button class="primary" id="startVocabNow">Training starten</button>
    </section>`;

  document.getElementById("startVocabNow").onclick=()=>{
    profile.vocabTopic=document.getElementById("vocabTopic").value;
    VocabularyEngine.resetSession(profile.level,profile.vocabTopic);
    save();
    vocabQuestion();
  };
}

function vocabQuestion(){
  vocabularyAnswerLocked=false;
  title.textContent="Vokabeln";
  try{currentQuestion=VocabularyEngine.makeQuestion(profile.level,profile.vocabTopic||"Alle")}catch(error){
    root.innerHTML=`<section class="card"><h2>Keine Vokabeln gefunden</h2><p>${error.message}</p><button class="primary" id="backVocab">Thema wählen</button></section>`;
    document.getElementById("backVocab").onclick=vocabStart;return;
  }
  const s=VocabularyEngine.getState(currentQuestion.item.id);

  root.innerHTML=`${coachHeader()}
    <section class="card word-card">
      <div class="muted small">${currentQuestion.item.topic} · ${currentQuestion.item.level}</div>
      <div class="word">${currentQuestion.item.en}</div>
      <div class="meta">${currentQuestion.item.example}</div>
      <div class="badge">Lernstufe ${Math.min(5,s.repetitions||0)}/5</div>
      <button class="secondary" id="speakWord">🔊 Anhören</button>
    </section>

    <section class="card">
      <div class="grid" id="answerGrid"></div>
      <div id="feedback"></div>
      <div class="row">
        <button class="secondary" id="changeTopicBtn">Thema ändern</button>
        <button class="primary hidden" id="nextBtn">Weiter</button>
      </div>
    </section>`;

  bindCoachStop();
  document.getElementById("speakWord").onclick=()=>speak(currentQuestion.item.en,{interrupt:true});
  document.getElementById("changeTopicBtn").onclick=vocabStart;

  currentQuestion.answers.forEach(a=>{
    const b=document.createElement("button");
    b.className="choice";
    b.textContent=a;
    b.onclick=()=>{
      if(vocabularyAnswerLocked)return;
      vocabularyAnswerLocked=true;

      const ok=a===currentQuestion.item.de;
      VocabularyEngine.mark(currentQuestion.item.id,ok);
      document.querySelectorAll(".choice").forEach(x=>x.disabled=true);
      resultView(ok,currentQuestion.item.de,"vocab");
    };
    document.getElementById("answerGrid").appendChild(b);
  });
}

function grammarStart(){
  title.textContent="Grammatik";
  const topics=GrammarEngine.topics(profile.level);
  const stats=GrammarEngine.stats(profile.level);

  root.innerHTML=`
    <section class="card">
      <h2>Grammatiktrainer</h2>
      <div class="stats">
        <div class="stat"><strong>${stats.practiced}</strong><span>geübt</span></div>
        <div class="stat"><strong>${stats.mastered}</strong><span>sicher</span></div>
        <div class="stat"><strong>${stats.total}</strong><span>verfügbar</span></div>
      </div>

      <label>Thema
        <select id="grammarTopic">
          ${topics.map(t=>`<option ${t===profile.grammarTopic?"selected":""}>${t}</option>`).join("")}
        </select>
      </label>

      <p class="muted">Unsichere Regeln werden automatisch häufiger ausgewählt.</p>
      <button class="primary" id="startGrammarNow">Training starten</button>
    </section>`;

  document.getElementById("startGrammarNow").onclick=()=>{
    profile.grammarTopic=document.getElementById("grammarTopic").value;
    GrammarEngine.resetSession(profile.level,profile.grammarTopic);
    save();
    grammarQuestion();
  };
}

let grammarAnswerLocked=false;
let currentGrammarItem=null;

function grammarQuestion(){
  grammarAnswerLocked=false;
  title.textContent="Grammatiktrainer";

  const availableTopics=GrammarEngine.topics(profile.level);
  if(!availableTopics.includes(profile.grammarTopic||"Alle")){
    profile.grammarTopic="Alle"
  }

  const stats=GrammarEngine.stats(
    profile.level,
    profile.grammarTopic||"Alle"
  );

  const item=GrammarEngine.next(
    profile.level,
    profile.grammarTopic||"Alle"
  );

  if(!item){
    root.innerHTML=`${coachHeader()}
      <section class="card">
        <h2>Grammatiktrainer</h2>
        <p>Für diese Auswahl sind keine gültigen Aufgaben verfügbar.</p>
        <button class="primary" id="grammarHome">Zur Übersicht</button>
      </section>`;
    bindCoachStop();
    document.getElementById("grammarHome").onclick=()=>nav("free");
    return
  }

  currentGrammarItem=item;

  root.innerHTML=`${coachHeader()}
    <section class="card">
      <div class="stats">
        <div class="stat"><strong>${stats.practiced}</strong><span>geübt</span></div>
        <div class="stat"><strong>${stats.mastered}</strong><span>sicher</span></div>
        <div class="stat"><strong>${stats.difficult}</strong><span>schwierig</span></div>
        <div class="stat"><strong>${stats.accuracy}%</strong><span>richtig</span></div>
      </div>

      <label>Thema
        <select id="grammarTopic">
          ${availableTopics.map(topic=>`
            <option ${topic===(profile.grammarTopic||"Alle")?"selected":""}>
              ${topic}
            </option>`).join("")}
        </select>
      </label>

      <div class="question">${item.prompt}</div>
      <div class="muted small">${item.level} · ${item.topic||"Allgemein"}</div>
      <div id="grammarAnswerGrid" class="grid"></div>
      <div id="grammarFeedback"></div>
    </section>`;

  bindCoachStop();

  document.getElementById("grammarTopic").onchange=()=>{
    profile.grammarTopic=document.getElementById("grammarTopic").value;
    GrammarEngine.resetSession(profile.level,profile.grammarTopic);
    save();
    grammarQuestion()
  };

  const grid=document.getElementById("grammarAnswerGrid");

  GrammarEngine.shuffle(item.choices).forEach(choice=>{
    const button=document.createElement("button");
    button.className="choice";
    button.textContent=choice;
    button.onclick=()=>answerGrammar(choice);
    grid.appendChild(button)
  })
}

function answerGrammar(choice){
  if(grammarAnswerLocked||!currentGrammarItem)return;
  grammarAnswerLocked=true;

  const correct=choice===currentGrammarItem.answer;
  GrammarEngine.update(currentGrammarItem,correct);

  if(typeof GrammarErrorTracker!=="undefined"){
    GrammarErrorTracker.record(currentGrammarItem,correct)
  }

  profile.answered++;
  if(correct){
    profile.correct++;
    profile.points+=10
  }else{
    profile.points=Math.max(0,profile.points-2)
  }

  if(coachSession.active){
    coachSession.answered++;
    if(correct)coachSession.correct++;
    coachSession.points+=correct?10:3;
    CoachEngine.record("grammar",correct)
  }
  save();

  document.querySelectorAll("#grammarAnswerGrid .choice").forEach(button=>{
    button.disabled=true;
    if(button.textContent===currentGrammarItem.answer){
      button.classList.add("correct")
    }else if(button.textContent===choice){
      button.classList.add("wrong")
    }
  });

  document.getElementById("grammarFeedback").innerHTML=`
    <div class="feedback ${correct?"ok":"bad"}">
      <strong>${correct?"Richtig":"Noch nicht richtig"}</strong>
      <p>Richtige Antwort: <b>${currentGrammarItem.answer}</b></p>
      <p>${currentGrammarItem.explanation||
        "Diese Form passt grammatisch in den Satz."}</p>
    </div>
    <div class="row">
      <button class="primary" id="nextGrammar">Weiter</button>
      <button class="secondary" id="grammarProgress">Themenfortschritt</button>
    </div>`;

  document.getElementById("nextGrammar").onclick=()=>{
    if(coachSession.active)continueCoach();
    else grammarQuestion()
  };
  document.getElementById("grammarProgress").onclick=grammarTopicProgress
}

function grammarTopicProgress(){
  title.textContent="Grammatikfortschritt";
  const rows=GrammarEngine.topicStats(profile.level);

  root.innerHTML=`
    <section class="card">
      <div class="row">
        <button class="secondary" id="grammarProgressBack">← Zurück</button>
      </div>
      <h2>Fortschritt nach Thema</h2>
      <div class="grid">
        ${rows.map(row=>`
          <button class="tile"
            data-grammar-progress="${encodeURIComponent(row.topic)}">
            <strong>${row.topic}</strong>
            <span class="muted small">
              ${row.practiced}/${row.total} geübt ·
              ${row.mastered} sicher · ${row.accuracy}% richtig
            </span>
          </button>`).join("")}
      </div>
    </section>`;

  document.getElementById("grammarProgressBack").onclick=grammarQuestion;

  document.querySelectorAll("[data-grammar-progress]").forEach(button=>{
    button.onclick=()=>{
      profile.grammarTopic=decodeURIComponent(
        button.dataset.grammarProgress
      );
      GrammarEngine.resetSession(profile.level,profile.grammarTopic);
      save();
      grammarQuestion()
    }
  })
}

const DialogueFlow={
  topicPrompts:{
    "Reisen":[
      ["¿Qué es lo más importante para usted durante el viaje?","Was ist Ihnen auf der Reise besonders wichtig?"],
      ["¿Ha tenido una experiencia parecida antes?","Hatten Sie schon einmal eine ähnliche Erfahrung?"],
      ["¿Qué alternativa aceptaría si su primera opción no estuviera disponible?","Welche Alternative würden Sie akzeptieren?"]
    ],
    "Hotel":[
      ["¿Qué solución concreta espera del hotel?","Welche konkrete Lösung erwarten Sie vom Hotel?"],
      ["¿Cuándo notó el problema por primera vez?","Wann haben Sie das Problem zuerst bemerkt?"],
      ["¿Desea que informemos también a la dirección?","Möchten Sie, dass wir auch die Leitung informieren?"]
    ],
    "Restaurant":[
      ["¿Tiene alguna preferencia o restricción adicional?","Haben Sie weitere Vorlieben oder Einschränkungen?"],
      ["¿Qué opción le parecería más adecuada?","Welche Option wäre für Sie am geeignetsten?"],
      ["¿Desea confirmar el pedido antes de enviarlo a cocina?","Möchten Sie die Bestellung vorher bestätigen?"]
    ],
    "Gesundheit":[
      ["¿Desde cuándo tiene estas molestias?","Seit wann haben Sie diese Beschwerden?"],
      ["¿Ha cambiado algo recientemente?","Hat sich kürzlich etwas verändert?"],
      ["¿Qué información necesita antes de decidir?","Welche Information brauchen Sie vor Ihrer Entscheidung?"]
    ],
    "Beruf":[
      ["¿Cuál es el objetivo principal de la conversación?","Was ist das Hauptziel des Gesprächs?"],
      ["¿Qué riesgo debemos considerar primero?","Welches Risiko müssen wir zuerst berücksichtigen?"],
      ["¿Quién debería asumir el siguiente paso?","Wer sollte den nächsten Schritt übernehmen?"]
    ],
    "Kundenservice":[
      ["¿Qué solución considera satisfactoria?","Welche Lösung wäre für Sie zufriedenstellend?"],
      ["¿Puede facilitarme el número de referencia?","Können Sie mir die Referenznummer nennen?"],
      ["¿Desea recibir una actualización del estado?","Möchten Sie eine Statusaktualisierung erhalten?"]
    ],
    "Einkaufen":[
      ["¿Qué característica del producto es más importante?","Welche Produkteigenschaft ist am wichtigsten?"],
      ["¿Prefiere una sustitución o un reembolso?","Bevorzugen Sie Ersatz oder Rückerstattung?"],
      ["¿Cuándo necesita recibir el producto?","Wann benötigen Sie das Produkt?"]
    ],
    "Digital":[
      ["¿Qué mensaje aparece exactamente?","Welche Meldung erscheint genau?"],
      ["¿Ha probado ya alguna solución?","Haben Sie bereits eine Lösung versucht?"],
      ["¿En qué dispositivo ocurre el problema?","Auf welchem Gerät tritt das Problem auf?"]
    ],
    "Bildung":[
      ["¿Qué aspecto le resulta más difícil?","Welcher Aspekt fällt Ihnen am schwersten?"],
      ["¿Cómo prefiere practicar este tema?","Wie möchten Sie dieses Thema üben?"],
      ["¿Qué objetivo quiere alcanzar esta semana?","Welches Ziel möchten Sie diese Woche erreichen?"]
    ]
  },

  genericPrompts:[
    ["¿Puede explicarlo con un poco más de detalle?","Können Sie das etwas genauer erklären?"],
    ["¿Qué resultado espera exactamente?","Welches Ergebnis erwarten Sie genau?"],
    ["¿Qué opción prefiere y por qué?","Welche Option bevorzugen Sie und warum?"],
    ["¿Hay algún detalle que todavía no hemos mencionado?","Gibt es noch ein Detail, das wir nicht erwähnt haben?"],
    ["¿Qué debería ocurrir a continuación?","Was sollte als Nächstes geschehen?"],
    ["¿Está de acuerdo con esta propuesta?","Sind Sie mit diesem Vorschlag einverstanden?"]
  ],

  acknowledgements:[
    ["Entiendo. Gracias por explicarlo.","Ich verstehe. Danke für die Erklärung."],
    ["De acuerdo. Eso aclara bastante la situación.","In Ordnung. Das klärt die Situation deutlich."],
    ["Comprendo su punto de vista.","Ich verstehe Ihren Standpunkt."],
    ["Perfecto, ahora tengo una imagen más clara.","Perfekt, jetzt habe ich ein klareres Bild."]
  ],

  connectors:[
    "Además",
    "Por otra parte",
    "En ese caso",
    "Antes de continuar",
    "Para confirmar"
  ],

  normalizeTopic(topic){
    const value=String(topic||"");
    if(/hotel/i.test(value))return "Hotel";
    if(/restaurant/i.test(value))return "Restaurant";
    if(/gesund|medizin|salud/i.test(value))return "Gesundheit";
    if(/beruf|arbeit|projekt|führung|vertrieb|personal/i.test(value))return "Beruf";
    if(/kunden|reklamation|service/i.test(value))return "Kundenservice";
    if(/einkauf|shopping|kaufen/i.test(value))return "Einkaufen";
    if(/digital|technik|cyber|support/i.test(value))return "Digital";
    if(/bildung|lernen|spanisch|grammatik/i.test(value))return "Bildung";
    if(/reise|flug|mobil|orientierung/i.test(value))return "Reisen";
    return value;
  },

  choose(items,avoid=""){
    if(!items.length)return null;
    const pool=items.filter(item=>item[0]!==avoid);
    return (pool.length?pool:items)[Math.floor(Math.random()*(pool.length?pool:items).length)];
  },

  followUp(topic,lastBot="",turn=0){
    const normalized=this.normalizeTopic(topic);
    const specific=this.topicPrompts[normalized]||[];
    const candidates=[...specific,...this.genericPrompts];
    const chosen=this.choose(candidates,lastBot) || this.genericPrompts[0];
    const connector=this.connectors[turn%this.connectors.length];
    return {
      bot:`${connector}, ${chosen[0].charAt(0).toLowerCase()}${chosen[0].slice(1)}`,
      de:chosen[1]
    };
  },

  acknowledgement(last=""){
    return this.choose(this.acknowledgements,last)||this.acknowledgements[0];
  },

  suggestedAnswers(topic,turn){
    const normalized=this.normalizeTopic(topic);
    const common=[
      "Sí, puedo explicarlo con más detalle.",
      "Prefiero comparar las opciones primero.",
      "La solución más importante para mí es una confirmación clara.",
      "Necesito un poco más de información antes de decidir."
    ];

    const topicAnswers={
      Reisen:[
        "Prefiero una alternativa flexible.",
        "La hora de llegada es muy importante para mí.",
        "Quiero evitar costes adicionales."
      ],
      Hotel:[
        "Quiero una habitación tranquila y una solución rápida.",
        "Prefiero hablar con la dirección.",
        "Una compensación razonable sería suficiente."
      ],
      Restaurant:[
        "Necesito una opción segura para mi dieta.",
        "Prefiero confirmar los ingredientes.",
        "Quiero cambiar el plato."
      ],
      Gesundheit:[
        "Los síntomas empezaron hace varios días.",
        "Necesito entender los riesgos del tratamiento.",
        "Quiero pedir una cita de control."
      ],
      Beruf:[
        "El plazo es el riesgo principal.",
        "Necesitamos definir responsabilidades claras.",
        "Propongo revisar el plan esta semana."
      ],
      Kundenservice:[
        "Prefiero una sustitución inmediata.",
        "Quiero recibir una confirmación por escrito.",
        "Necesito una actualización del caso."
      ],
      Digital:[
        "El problema ocurre en mi teléfono.",
        "Ya he reiniciado el dispositivo.",
        "Aparece un mensaje de error."
      ],
      Bildung:[
        "La gramática es lo más difícil para mí.",
        "Quiero practicar con ejemplos reales.",
        "Mi objetivo es hablar con más fluidez."
      ]
    };

    const pool=[...(topicAnswers[normalized]||[]),...common];
    const offset=turn%pool.length;
    return [pool[offset],pool[(offset+2)%pool.length],pool[(offset+4)%pool.length]];
  }
};

function dialogueQuestion(){
  SpeechController.stop();
  title.textContent="Gespräche";

  root.innerHTML=`
    <section class="card">
      <h2>Gesprächstraining</h2>
      <div class="row">
        <button class="primary" id="branchTab">Geführte Gespräche</button>
        <button class="secondary" id="classicTab">Freie Gespräche</button>
      </div>
      <div id="dialogueLibrary" style="margin-top:14px"></div>
    </section>`;

  document.getElementById("branchTab").onclick=()=>{
    document.getElementById("branchTab").className="primary";
    document.getElementById("classicTab").className="secondary";
    renderDialogueLibrary("branch");
  };

  document.getElementById("classicTab").onclick=()=>{
    document.getElementById("branchTab").className="secondary";
    document.getElementById("classicTab").className="primary";
    renderDialogueLibrary("quality");
  };

  renderDialogueLibrary("branch");
}

function renderDialogueLibrary(type){
  const list=type==="branch"
    ? (ES_BRANCHING_SCENARIOS_151||[])
    : (ES_QUALITY_SCENARIOS||[]);
  const topics=["Alle",...new Set(list.map(item=>item.topic).filter(Boolean))].sort();

  document.getElementById("dialogueLibrary").innerHTML=`
    <p class="muted">
      Gespräche werden nach dem eigentlichen Szenario mit natürlichen
      Rückfragen fortgesetzt. Sie enden nur über „Gespräch beenden“.
    </p>
    <label>Thema
      <select id="dialogueTopic">
        ${topics.map(topic=>`<option>${topic}</option>`).join("")}
      </select>
    </label>
    <div id="dialogueGrid" class="grid" style="margin-top:12px"></div>`;

  const draw=()=>{
    const topic=document.getElementById("dialogueTopic").value;
    const visible=list.filter(item=>topic==="Alle"||item.topic===topic);

    document.getElementById("dialogueGrid").innerHTML=visible.map(item=>`
      <button class="tile" data-dialogue="${item.id}">
        <span class="icon">${type==="branch"?"🗣️":"💬"}</span>
        <strong>${item.title}</strong>
        <span class="muted small">${item.topic} · ${item.level}</span>
      </button>`).join("");

    document.querySelectorAll("[data-dialogue]").forEach(button=>{
      button.onclick=()=>startContinuousDialogue(
        type,
        button.dataset.dialogue,
        topic
      );
    });
  };

  document.getElementById("dialogueTopic").onchange=draw;
  draw();
}

let continuousDialogue={
  active:false,
  token:0,
  type:null,
  scenario:null,
  node:null,
  step:0,
  topic:"Alle",
  completed:0,
  turn:0,
  extensionTurn:0,
  phase:"scenario",
  recentIds:[],
  lastSpoken:"",
  lastAcknowledgement:"",
  userHistory:[],
  botHistory:[]
};

function dialogueCollection(type){
  return type==="branch"
    ? (ES_BRANCHING_SCENARIOS_151||[])
    : (ES_QUALITY_SCENARIOS||[]);
}

function findDialogue(type,id){
  return dialogueCollection(type).find(item=>item.id===id)||null;
}

function chooseNextDialogue(){
  const list=dialogueCollection(continuousDialogue.type);
  const recent=new Set(continuousDialogue.recentIds.slice(-25));
  const topic=continuousDialogue.topic;

  let pool=list.filter(item=>
    item.id!==continuousDialogue.scenario.id &&
    !recent.has(item.id) &&
    (topic==="Alle"||item.topic===topic)
  );

  if(!pool.length){
    pool=list.filter(item=>
      item.id!==continuousDialogue.scenario.id &&
      (topic==="Alle"||item.topic===topic)
    );
  }

  if(!pool.length){
    pool=list.filter(item=>item.id!==continuousDialogue.scenario.id);
  }

  return pool[Math.floor(Math.random()*pool.length)]||list[0]||null;
}

function renderDialogueShell(){
  root.innerHTML=`
    <section class="card">
      <div class="row">
        <button class="secondary" id="dialogueBack">← Gespräche</button>
        <button class="secondary" id="dialogueRepeat">🔊 Wiederholen</button>
        <button class="secondary" id="dialogueEnd">Gespräch beenden</button>
      </div>

      <div class="dialogue-progress">
        <span id="dialoguePhase">Situation</span>
        <span id="dialogueTurnCount">0 Gesprächsrunden</span>
      </div>

      <div id="continuousChat" class="chat"></div>
      <div id="continuousAnswers" class="grid" style="margin-top:12px"></div>

      <label id="freeAnswerLabel">
        Eigene Antwort
        <input id="continuousFree"
          placeholder="Spanische Antwort eingeben oder eine Antwort auswählen">
      </label>
      <button class="primary" id="continuousSend">Antwort senden</button>

      <p id="continuousStatus" class="muted small">
        Das Gespräch läuft, bis du es selbst beendest.
      </p>
    </section>`;

  document.getElementById("dialogueBack").onclick=()=>{
    stopContinuousDialogue(false);
    dialogueQuestion();
  };

  document.getElementById("dialogueRepeat").onclick=()=>{
    if(continuousDialogue.lastSpoken){
      speak(continuousDialogue.lastSpoken,{interrupt:true});
    }
  };

  document.getElementById("dialogueEnd").onclick=()=>stopContinuousDialogue(true);

  const input=document.getElementById("continuousFree");
  const send=document.getElementById("continuousSend");

  send.onclick=()=>{
    const value=input.value.trim();
    if(value)submitContinuousAnswer(value,null);
  };

  input.onkeydown=event=>{
    if(event.key==="Enter"){
      event.preventDefault();
      const value=input.value.trim();
      if(value)submitContinuousAnswer(value,null);
    }
  };
}

function startContinuousDialogue(type,id,topic="Alle"){
  const scenario=findDialogue(type,id);
  if(!scenario){
    dialogueQuestion();
    return;
  }

  SpeechController.stop();

  continuousDialogue={
    active:true,
    token:continuousDialogue.token+1,
    type,
    scenario,
    node:type==="branch"?scenario.start:null,
    step:0,
    topic:topic||"Alle",
    completed:0,
    turn:0,
    extensionTurn:0,
    phase:"scenario",
    recentIds:[scenario.id],
    lastSpoken:"",
    lastAcknowledgement:"",
    userHistory:[],
    botHistory:[]
  };

  title.textContent=scenario.title;
  renderDialogueShell();
  renderContinuousTurn();
}

function addContinuousMessage(text,who,de=""){
  const chat=document.getElementById("continuousChat");
  if(!chat)return;

  const box=document.createElement("div");
  box.className="msg "+who;
  box.append(document.createTextNode(text));

  if(profile.subtitles && de){
    const subtitle=document.createElement("span");
    subtitle.className="sub";
    subtitle.textContent=de;
    box.appendChild(subtitle);
  }

  chat.appendChild(box);
  chat.scrollTop=chat.scrollHeight;

  if(who==="bot"){
    continuousDialogue.botHistory.push(text);
    continuousDialogue.botHistory=continuousDialogue.botHistory.slice(-30);
  }else{
    continuousDialogue.userHistory.push(text);
    continuousDialogue.userHistory=continuousDialogue.userHistory.slice(-30);
  }
}

function renderAnswerButtons(answers){
  const container=document.getElementById("continuousAnswers");
  if(!container)return;

  container.innerHTML="";

  for(const answer of answers){
    const text=typeof answer==="string"?answer:answer.text;
    const next=typeof answer==="string"?null:answer.next;

    const button=document.createElement("button");
    button.className="choice";
    button.textContent=text;
    button.onclick=()=>submitContinuousAnswer(text,next);
    container.appendChild(button);
  }
}

function updateDialogueIndicators(){
  const phase=document.getElementById("dialoguePhase");
  const count=document.getElementById("dialogueTurnCount");
  const status=document.getElementById("continuousStatus");

  if(phase){
    phase.textContent=continuousDialogue.phase==="scenario"
      ? "Szenario"
      : "Freie Vertiefung";
  }

  if(count){
    count.textContent=`${continuousDialogue.turn} Gesprächsrunden`;
  }

  if(status){
    status.textContent=
      `${continuousDialogue.completed} Situationen abgeschlossen · `+
      `Gespräch läuft bis zum manuellen Beenden`;
  }
}

function currentScenarioTurn(){
  const scenario=continuousDialogue.scenario;

  if(continuousDialogue.type==="branch"){
    const node=scenario.nodes&&scenario.nodes[continuousDialogue.node];
    if(!node)return null;
    return {
      bot:node.bot||"",
      de:node.de||"",
      answers:Array.isArray(node.answers)?node.answers:[]
    };
  }

  const step=scenario.steps&&scenario.steps[continuousDialogue.step];
  if(!step)return null;

  return {
    bot:step.bot||"",
    de:step.de||"",
    answers:Array.isArray(step.answers)?step.answers:[]
  };
}

function extensionTurn(){
  const follow=DialogueFlow.followUp(
    continuousDialogue.scenario.topic,
    continuousDialogue.lastSpoken,
    continuousDialogue.extensionTurn
  );

  return {
    bot:follow.bot,
    de:follow.de,
    answers:DialogueFlow.suggestedAnswers(
      continuousDialogue.scenario.topic,
      continuousDialogue.extensionTurn
    )
  };
}

function renderContinuousTurn(){
  if(!continuousDialogue.active)return;

  let turn=null;

  if(continuousDialogue.phase==="scenario"){
    turn=currentScenarioTurn();

    if(!turn){
      continuousDialogue.phase="extension";
      continuousDialogue.extensionTurn=0;
      turn=extensionTurn();
    }
  }else{
    turn=extensionTurn();
  }

  continuousDialogue.lastSpoken=turn.bot;
  addContinuousMessage(turn.bot,"bot",turn.de);
  renderAnswerButtons(turn.answers);
  updateDialogueIndicators();
  speak(turn.bot,{interrupt:false});
}

async function submitContinuousAnswer(text,next){
  if(!continuousDialogue.active)return;

  const token=continuousDialogue.token;
  const answers=document.getElementById("continuousAnswers");

  if(answers){
    answers.querySelectorAll("button").forEach(button=>button.disabled=true);
    answers.innerHTML="";
  }

  const input=document.getElementById("continuousFree");
  if(input)input.value="";

  addContinuousMessage(text,"me","");
  continuousDialogue.turn++;

  profile.points+=10;
  profile.answered++;
  profile.correct++;
  save();

  await speak(text,{interrupt:false});

  if(!continuousDialogue.active||token!==continuousDialogue.token)return;

  const acknowledgement=DialogueFlow.acknowledgement(
    continuousDialogue.lastAcknowledgement
  );
  continuousDialogue.lastAcknowledgement=acknowledgement[0];

  addContinuousMessage(acknowledgement[0],"bot",acknowledgement[1]);
  continuousDialogue.lastSpoken=acknowledgement[0];
  await speak(acknowledgement[0],{interrupt:false});

  if(!continuousDialogue.active||token!==continuousDialogue.token)return;

  if(continuousDialogue.phase==="scenario"){
    if(continuousDialogue.type==="branch"){
      continuousDialogue.node=next;
    }else{
      continuousDialogue.step++;
    }
  }else{
    continuousDialogue.extensionTurn++;

    // Nach mehreren freien Rückfragen wird eine neue, thematisch passende
    // Situation begonnen. Das Gespräch selbst läuft weiter.
    if(continuousDialogue.extensionTurn>=5){
      continueWithNextDialogue();
      return;
    }
  }

  renderContinuousTurn();
}

function continueWithNextDialogue(){
  if(!continuousDialogue.active)return;

  const next=chooseNextDialogue();
  if(!next){
    stopContinuousDialogue(true);
    return;
  }

  continuousDialogue.completed++;
  continuousDialogue.recentIds=[
    ...continuousDialogue.recentIds,
    next.id
  ].slice(-40);

  continuousDialogue.scenario=next;
  continuousDialogue.node=
    continuousDialogue.type==="branch"?next.start:null;
  continuousDialogue.step=0;
  continuousDialogue.extensionTurn=0;
  continuousDialogue.phase="scenario";

  const chat=document.getElementById("continuousChat");
  if(chat){
    const divider=document.createElement("div");
    divider.className="dialogue-divider";
    divider.textContent=`Neue Situation: ${next.title}`;
    chat.appendChild(divider);
    chat.scrollTop=chat.scrollHeight;
  }

  title.textContent=next.title;
  renderContinuousTurn();
}

function stopContinuousDialogue(showSummary=true){
  if(!continuousDialogue.active){
    SpeechController.stop();
    return;
  }

  continuousDialogue.active=false;
  continuousDialogue.token++;
  SpeechController.stop();

  if(!showSummary)return;

  profile.dialogs++;
  save();

  const answers=document.getElementById("continuousAnswers");
  const status=document.getElementById("continuousStatus");
  const input=document.getElementById("continuousFree");
  const send=document.getElementById("continuousSend");

  if(input)input.disabled=true;
  if(send)send.disabled=true;

  if(status){
    status.textContent=
      `Gespräch beendet · ${continuousDialogue.turn} Gesprächsrunden · `+
      `${continuousDialogue.completed} Situationen abgeschlossen`;
  }

  if(answers){
    answers.innerHTML=`
      <button class="primary" id="newContinuousDialogue">Neues Gespräch</button>
      <button class="secondary" id="continuousLibrary">Zur Gesprächsauswahl</button>`;

    document.getElementById("newContinuousDialogue").onclick=()=>{
      const list=dialogueCollection(continuousDialogue.type);
      const next=list[Math.floor(Math.random()*list.length)];
      if(next){
        startContinuousDialogue(
          continuousDialogue.type,
          next.id,
          continuousDialogue.topic
        );
      }
    };

    document.getElementById("continuousLibrary").onclick=dialogueQuestion;
  }
}


let currentPronunciationItem=null;
let pronunciationRecognition=null;
let pronunciationListening=false;
let pronunciationFinalText="";
let pronunciationInterimText="";
let pronunciationConfidence=0;

function pronunciationStart(){
  title.textContent="Aussprache";
  const topics=PronunciationEngine.topics(profile.level);
  const stats=PronunciationEngine.stats(profile.level);

  root.innerHTML=`
    <section class="card">
      <h2>Aussprachetrainer</h2>
      <div class="stats">
        <div class="stat"><strong>${stats.practiced}</strong><span>geübt</span></div>
        <div class="stat"><strong>${stats.mastered}</strong><span>sicher</span></div>
        <div class="stat"><strong>${stats.average}%</strong><span>Durchschnitt</span></div>
      </div>

      <label>Thema
        <select id="pronunciationTopic">
          ${topics.map(topic=>`
            <option ${topic===(profile.pronunciationTopic||"Alle")?"selected":""}>
              ${topic}
            </option>`).join("")}
        </select>
      </label>

      <p class="muted">
        Höre den Satz an, sprich ihn vollständig nach und erhalte eine
        Wort-für-Wort-Auswertung.
      </p>

      ${PronunciationEngine.supported()
        ? '<button class="primary" id="startPronunciation">Training starten</button>'
        : `<div class="feedback no">
             Die Spracherkennung ist in diesem Browser nicht verfügbar.
             Chrome oder Edge auf Android beziehungsweise Desktop unterstützen
             diese Funktion meistens.
           </div>`}
    </section>`;

  const startButton=document.getElementById("startPronunciation");
  if(startButton){
    startButton.onclick=()=>{
      profile.pronunciationTopic=
        document.getElementById("pronunciationTopic").value;
      PronunciationEngine.resetSession();
      save();
      pronunciationQuestion();
    };
  }
}

function pronunciationQuestion(){
  stopPronunciationRecognition();
  title.textContent="Aussprache";

  const previousPronunciationId=currentPronunciationItem?.id||null;
  let nextPronunciationItem=PronunciationEngine.next(
    profile.level,
    profile.pronunciationTopic||"Alle"
  );

  if(
    nextPronunciationItem &&
    previousPronunciationId &&
    nextPronunciationItem.id===previousPronunciationId
  ){
    const alternative=PronunciationEngine.next(
      profile.level,
      profile.pronunciationTopic||"Alle"
    );
    if(alternative)nextPronunciationItem=alternative;
  }

  currentPronunciationItem=nextPronunciationItem;

  if(!currentPronunciationItem){
    root.innerHTML=`
      <section class="card">
        <h2>Keine Sätze gefunden</h2>
        <button class="primary" id="pronunciationBack">Thema wählen</button>
      </section>`;
    document.getElementById("pronunciationBack").onclick=pronunciationStart;
    return;
  }

  const state=PronunciationEngine.stateFor(currentPronunciationItem.id);

  root.innerHTML=`
    <section class="card">
      <div class="muted small">
        ${currentPronunciationItem.topic} · ${currentPronunciationItem.level}
      </div>
      <h2 id="pronunciationTarget">${currentPronunciationItem.text}</h2>
      ${profile.subtitles
        ? `<p class="muted">${currentPronunciationItem.de||""}</p>`
        : ""}
      <div class="badge">
        Bester Wert: ${state.bestScore||0}%
      </div>

      <div class="row">
        <button class="secondary" id="pronunciationListen">🔊 Anhören</button>
        <button class="primary" id="pronunciationRecord">🎙️ Aufnahme starten</button>
        <button class="secondary hidden" id="pronunciationStop">■ Aufnahme beenden</button>
      </div>

      <div id="pronunciationLive" class="feedback hidden"></div>
      <div id="pronunciationResult"></div>

      <div class="row">
        <button class="secondary" id="pronunciationChangeTopic">Thema ändern</button>
        <button class="primary hidden" id="pronunciationNext">Nächster Satz</button>
      </div>
    </section>`;

  document.getElementById("pronunciationListen").onclick=()=>speak(
    currentPronunciationItem.text,
    {interrupt:true}
  );
  document.getElementById("pronunciationRecord").onclick=startPronunciationRecognition;
  document.getElementById("pronunciationStop").onclick=stopPronunciationRecognition;
  document.getElementById("pronunciationChangeTopic").onclick=()=>{
    stopPronunciationRecognition();
    pronunciationStart();
  };
  document.getElementById("pronunciationNext").onclick=()=>{
    stopPronunciationRecognition();
    pronunciationFinalText="";
    pronunciationInterimText="";
    pronunciationConfidence=0;
    pronunciationQuestion();
  };
}

function createPronunciationRecognition(){
  const Recognition=PronunciationEngine.recognitionClass();
  if(!Recognition)return null;

  const recognition=new Recognition();
  recognition.lang=PronunciationEngine.locale();
  recognition.continuous=false;
  recognition.interimResults=true;
  recognition.maxAlternatives=3;

  recognition.onstart=()=>{
    pronunciationListening=true;
    pronunciationFinalText="";
    pronunciationInterimText="";
    pronunciationConfidence=0;
    updatePronunciationControls();
    showPronunciationLive("Ich höre zu …","ok");
  };

  recognition.onresult=event=>{
    let finalText="";
    let interimText="";
    let bestConfidence=0;

    for(let i=event.resultIndex;i<event.results.length;i++){
      const result=event.results[i];
      const transcript=result[0]?.transcript||"";
      const confidence=Number(result[0]?.confidence)||0;

      if(result.isFinal){
        finalText+=(finalText?" ":"")+transcript;
        bestConfidence=Math.max(bestConfidence,confidence);
      }else{
        interimText+=(interimText?" ":"")+transcript;
      }
    }

    if(finalText){
      pronunciationFinalText=(
        pronunciationFinalText+" "+finalText
      ).trim();
    }
    pronunciationInterimText=interimText;
    pronunciationConfidence=Math.max(
      pronunciationConfidence,
      bestConfidence
    );

    showPronunciationLive(
      pronunciationFinalText ||
      pronunciationInterimText ||
      "Ich höre zu …",
      "ok"
    );
  };

  recognition.onerror=event=>{
    pronunciationListening=false;
    updatePronunciationControls();

    const messages={
      "not-allowed":"Mikrofonzugriff wurde nicht erlaubt.",
      "audio-capture":"Es wurde kein Mikrofon gefunden.",
      "no-speech":"Es wurde keine Sprache erkannt.",
      "network":"Die Spracherkennung konnte keine Verbindung herstellen.",
      "aborted":"Die Aufnahme wurde beendet."
    };

    showPronunciationLive(
      messages[event.error]||"Die Aufnahme konnte nicht ausgewertet werden.",
      "no"
    );
  };

  recognition.onend=()=>{
    pronunciationListening=false;
    updatePronunciationControls();

    if(pronunciationFinalText.trim()){
      evaluatePronunciationRecording();
    }else if(
      pronunciationInterimText.trim() &&
      !pronunciationFinalText.trim()
    ){
      pronunciationFinalText=pronunciationInterimText.trim();
      evaluatePronunciationRecording();
    }
  };

  return recognition;
}

function startPronunciationRecognition(){
  if(pronunciationListening)return;

  SpeechController.stop();
  pronunciationRecognition=createPronunciationRecognition();

  if(!pronunciationRecognition){
    showPronunciationLive(
      "Die Spracherkennung ist in diesem Browser nicht verfügbar.",
      "no"
    );
    return;
  }

  document.getElementById("pronunciationResult").innerHTML="";
  document.getElementById("pronunciationNext").classList.add("hidden");

  try{
    pronunciationRecognition.start();
  }catch(error){
    showPronunciationLive(
      "Die Aufnahme konnte nicht gestartet werden. Bitte erneut versuchen.",
      "no"
    );
  }
}

function stopPronunciationRecognition(){
  if(pronunciationRecognition){
    try{
      if(pronunciationListening)pronunciationRecognition.stop();
      else pronunciationRecognition.abort();
    }catch{}
  }
  pronunciationRecognition=null;
  pronunciationListening=false;
  updatePronunciationControls();
}

function updatePronunciationControls(){
  const start=document.getElementById("pronunciationRecord");
  const stop=document.getElementById("pronunciationStop");

  if(start){
    start.disabled=pronunciationListening;
    start.classList.toggle("hidden",pronunciationListening);
  }
  if(stop){
    stop.classList.toggle("hidden",!pronunciationListening);
  }
}

function showPronunciationLive(text,type=""){
  const box=document.getElementById("pronunciationLive");
  if(!box)return;

  box.className=`feedback ${type}`.trim();
  box.textContent=text;
}

function pronunciationWordHtml(result){
  return result.alignment.map(item=>{
    if(item.type==="correct"){
      return `<span class="pron-word correct" title="richtig">${item.target}</span>`;
    }
    if(item.type==="changed"){
      return `<span class="pron-word wrong" title="gesprochen: ${item.spoken}">
        ${item.target}
      </span>`;
    }
    if(item.type==="missing"){
      return `<span class="pron-word wrong" title="nicht erkannt">${item.target}</span>`;
    }
    return `<span class="pron-word extra" title="zusätzlich gesprochen">
      +${item.spoken}
    </span>`;
  }).join(" ");
}

function evaluatePronunciationRecording(){
  if(!currentPronunciationItem)return;

  const result=PronunciationEngine.evaluate(
    currentPronunciationItem.text,
    pronunciationFinalText,
    pronunciationConfidence
  );

  PronunciationEngine.record(currentPronunciationItem,result);

  profile.answered++;
  if(result.score>=75)profile.correct++;
  profile.points+=result.score>=85?15:result.score>=65?8:3;

  profile.pronunciationAttempts=(profile.pronunciationAttempts||0)+1;
  profile.pronunciationTotalScore=
    (profile.pronunciationTotalScore||0)+result.score;
  save();

  const grade=result.score>=85
    ? "Sehr gut"
    : result.score>=70
      ? "Gut"
      : result.score>=50
        ? "Weiter üben"
        : "Noch einmal langsam versuchen";

  document.getElementById("pronunciationLive").classList.add("hidden");
  document.getElementById("pronunciationResult").innerHTML=`
    <div class="feedback ${result.score>=70?"ok":"no"}">
      <div class="stats">
        <div class="stat"><strong>${result.score}%</strong><span>Gesamt</span></div>
        <div class="stat"><strong>${result.wordAccuracy}%</strong><span>Wörter</span></div>
        <div class="stat"><strong>${result.correct}</strong><span>richtig</span></div>
      </div>
      <h3>${grade}</h3>
      <p><strong>Erkannt:</strong> ${result.spoken}</p>
      <div class="pronunciation-words">
        ${pronunciationWordHtml(result)}
      </div>
      <p class="muted small">
        Grün = erkannt · Rot = fehlt oder verändert · Grau = zusätzlich
      </p>
      <div class="row">
        <button class="secondary" id="pronunciationRepeatTarget">
          🔊 Sollsatz wiederholen
        </button>
        <button class="secondary" id="pronunciationRetry">
          🎙️ Noch einmal sprechen
        </button>
      </div>
    </div>`;

  document.getElementById("pronunciationRepeatTarget").onclick=()=>speak(
    currentPronunciationItem.text,
    {interrupt:true}
  );
  document.getElementById("pronunciationRetry").onclick=startPronunciationRecognition;
  const nextPronunciationButton=document.getElementById("pronunciationNext");
  nextPronunciationButton.disabled=false;
  nextPronunciationButton.classList.remove("hidden");
}


function translationQuestion(){
  title.textContent="Übersetzung";
  const q=VocabularyEngine.makeQuestion(profile.level,profile.vocabTopic||"Alle").item;

  root.innerHTML=`${coachHeader()}
    <section class="card">
      <div class="question">Übersetze: „${q.de}“</div>
      <input id="translationInput" placeholder="Spanische Antwort">
      <div id="feedback"></div>
      <button class="primary" id="checkTranslation">Antwort prüfen</button>
      <button class="primary hidden" id="nextBtn">Weiter</button>
    </section>`;

  bindCoachStop();
  document.getElementById("checkTranslation").onclick=()=>{
    const v=document.getElementById("translationInput").value.trim().toLowerCase();
    resultView(v===q.en.toLowerCase(),q.en,"translation");
    document.getElementById("checkTranslation").disabled=true;
  };
}

function render(){
  return AppStability.safe(()=>{

  levelPill.textContent=profile.level;
  if(route==="home")homeView();
  else if(route==="coach")coachView();
  else if(route==="free")freeView();
  else if(route==="progress")progressView();
  else settingsView();

  },`render:${route}`);
}

save();
render();

if("serviceWorker" in navigator && location.protocol.startsWith("http")){navigator.serviceWorker.register("./service-worker.js").then(r=>r.update().catch(()=>{})).catch(()=>{})}


document.addEventListener("visibilitychange",()=>{
  if(document.visibilityState==="hidden"){
    try{saveNow()}catch{}
  }
});


document.addEventListener("click",event=>{
  const navButton=event.target.closest(".nav-btn");
  if(!navButton)return;

  event.preventDefault();
  nav(navButton.dataset.route||"home");
});
