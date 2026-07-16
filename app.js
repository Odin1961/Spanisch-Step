const Store={
  key:"englishStepProfileSolid",
  load(){try{return JSON.parse(localStorage.getItem(this.key))||null}catch{return null}},
  save(v){localStorage.setItem(this.key,JSON.stringify(v))}
};

let profile=Store.load()||{
  name:"Fred",level:"A2",accent:"en-GB",subtitles:true,speed:.85,
  points:0,answered:0,correct:0,dialogs:0,vocabTopic:"Alle",grammarTopic:"Alle",lastMode:"vocab"
};

let route="home";
let currentQuestion=null;
let dialogueState={topic:null,step:0,usedIntros:{},usedBots:{},history:[]};
let coachSession={active:false,answered:0,correct:0,points:0,startedAt:0};

const root=document.getElementById("viewRoot");
const title=document.getElementById("pageTitle");
const levelPill=document.getElementById("levelPill");

function save(){Store.save(profile);levelPill.textContent=profile.level}

const SpeechController={
  queue:[],active:false,generation:0,current:null,voices:[],
  init(){
    if(!this.supported())return;
    const loadVoices=()=>{this.voices=window.speechSynthesis.getVoices()||[]};
    loadVoices();
    window.speechSynthesis.addEventListener("voiceschanged",loadVoices);
    document.addEventListener("visibilitychange",()=>{
      if(document.visibilityState==="visible"&&window.speechSynthesis.paused){
        try{window.speechSynthesis.resume()}catch{}
      }
    });
  },
  supported(){return Boolean(window.speechSynthesis&&typeof window.SpeechSynthesisUtterance==="function")},
  locale(){return profile.accent==="en-US"?"en-US":"en-GB"},
  chooseVoice(){
    if(!this.supported())return null;
    const locale=this.locale(),voices=this.voices.length?this.voices:(window.speechSynthesis.getVoices()||[]);
    return voices.find(v=>String(v.lang).toLowerCase()===locale.toLowerCase())||voices.find(v=>/^en/i.test(String(v.lang)))||null;
  },
  splitText(text){
    const clean=String(text||"").replace(/\s+/g," ").trim();
    if(!clean)return [];
    const parts=clean.match(/[^.!?;:]+[.!?;:]*/g)||[clean],chunks=[];
    for(const part of parts){
      const value=part.trim();
      if(!value)continue;
      if(value.length<=180){chunks.push(value);continue}
      let current="";
      for(const word of value.split(/\s+/)){
        const candidate=current?current+" "+word:word;
        if(candidate.length>150&&current){chunks.push(current);current=word}else current=candidate;
      }
      if(current)chunks.push(current);
    }
    return chunks;
  },
  estimate(text){const words=String(text||"").trim().split(/\s+/).filter(Boolean).length,rate=Math.max(.55,Math.min(1.15,Number(profile.speed)||.85));return Math.max(2400,Math.min(32000,(words*520)/rate+1800))},
  speak(text,{interrupt=false}={}){
    return new Promise(resolve=>{
      const chunks=this.splitText(text);
      if(!chunks.length||!this.supported()){resolve();return}
      if(interrupt)this.stop();
      this.queue.push({chunks,index:0,generation:this.generation,resolve,locale:this.locale(),rate:Math.max(.55,Math.min(1.15,Number(profile.speed)||.85))});
      this.process();
    });
  },
  process(){
    if(this.active||!this.queue.length)return;
    const item=this.queue[0];
    if(item.generation!==this.generation||item.index>=item.chunks.length){this.queue.shift();item.resolve();this.process();return}
    this.active=true;
    const u=new SpeechSynthesisUtterance(item.chunks[item.index]);
    u.lang=item.locale;u.rate=item.rate;u.pitch=1;u.volume=1;
    const voice=this.chooseVoice();if(voice)u.voice=voice;
    let finished=false;
    const finish=()=>{
      if(finished)return;finished=true;clearTimeout(fallback);clearInterval(resumeTimer);
      if(this.current===u)this.current=null;
      this.active=false;
      if(item.generation!==this.generation){if(this.queue[0]===item){this.queue.shift();item.resolve()}}
      else item.index++;
      this.process();
    };
    u.onend=finish;u.onerror=()=>setTimeout(finish,250);
    const fallback=setTimeout(finish,this.estimate(item.chunks[item.index]));
    const resumeTimer=setInterval(()=>{if(item.generation===this.generation&&window.speechSynthesis.speaking&&window.speechSynthesis.paused)window.speechSynthesis.resume()},900);
    this.current=u;
    try{window.speechSynthesis.resume();window.speechSynthesis.speak(u)}catch{finish()}
  },
  stop(){
    this.generation++;
    for(const item of this.queue.splice(0)){try{item.resolve()}catch{}}
    try{window.speechSynthesis.cancel()}catch{}
    this.current=null;this.active=false;
  }
};
SpeechController.init();
function speak(text,options){return SpeechController.speak(text,options)}
function nav(to){
  route=to;
  document.querySelectorAll(".nav-btn").forEach(b=>b.classList.toggle("active",b.dataset.route===to));
  render();
}

document.querySelectorAll(".nav-btn").forEach(b=>b.addEventListener("click",()=>nav(b.dataset.route)));

function homeView(){
  title.textContent="Start";
  const vs=VocabularyEngine.stats(profile.level);
  root.innerHTML=`
    <section class="card hero">
      <h2>Hallo ${profile.name} 👋</h2>
      <p>Schön, dass du wieder da bist. Lerne mit dem Coach oder trainiere gezielt einen Bereich.</p>
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
        ${["A1","A2","B1","B2"].map(x=>`<option ${x===profile.level?"selected":""}>${x}</option>`).join("")}
      </select></label>
      <label>Englisch<select id="setAccent">
        <option value="en-GB" ${profile.accent==="en-GB"?"selected":""}>Britisch</option>
        <option value="en-US" ${profile.accent==="en-US"?"selected":""}>Amerikanisch</option>
      </select></label>
      <label>Sprechgeschwindigkeit<input id="setSpeed" type="range" min=".55" max="1.15" step=".1" value="${profile.speed}"></label>
      <label><input id="setSubs" type="checkbox" ${profile.subtitles?"checked":""}> Deutsche Untertitel</label>
      <button class="primary" id="saveSettings">Speichern</button>
    </section>`;

  document.getElementById("saveSettings").onclick=()=>{
    profile.name=document.getElementById("setName").value.trim()||"Fred";
    profile.level=document.getElementById("setLevel").value;
    profile.accent=document.getElementById("setAccent").value;
    profile.speed=Number(document.getElementById("setSpeed").value);
    profile.subtitles=document.getElementById("setSubs").checked;
    save();
    nav("home");
  };
}

function coachView(){
  title.textContent="Coach";
  const stats=CoachEngine.stats();
  root.innerHTML=`
    <section class="card hero">
      <h2>Mit Coach lernen</h2>
      <p>Der Coach verbindet Vokabeln, Grammatik, Gespräche und Übersetzungen zu einem fortlaufenden Lernfluss.</p>
      <div class="stats">
        <div class="stat"><strong>${stats.vocab||0}</strong><span>Vokabelrunden</span></div>
        <div class="stat"><strong>${stats.grammar||0}</strong><span>Grammatikrunden</span></div>
        <div class="stat"><strong>${stats.dialogue||0}</strong><span>Dialogrunden</span></div>
      </div>
      <button class="primary" id="coachStart">▶ Lernen beginnen</button>
    </section>`;
  document.getElementById("coachStart").onclick=startCoachSession;
}

function startCoachSession(){
  coachSession={active:true,answered:0,correct:0,points:0,startedAt:Date.now()};
  startMode(CoachEngine.next(profile),true);
}

function stopCoachSession(){
  coachSession.active=false;
  const minutes=Math.max(1,Math.round((Date.now()-coachSession.startedAt)/60000));
  title.textContent="Coach";
  root.innerHTML=`
    <section class="card">
      <h2>Für heute beendet</h2>
      <p>Du hast ${coachSession.answered} Aufgaben in etwa ${minutes} Minute${minutes===1?"":"n"} bearbeitet.</p>
      <div class="stats">
        <div class="stat"><strong>${coachSession.correct}</strong><span>richtig</span></div>
        <div class="stat"><strong>${coachSession.points}</strong><span>Punkte</span></div>
        <div class="stat"><strong>${coachSession.answered}</strong><span>Aufgaben</span></div>
      </div>
      <button class="primary" id="coachContinue">Weiterlernen</button>
      <button class="secondary" id="coachHome">Zur Übersicht</button>
    </section>`;
  document.getElementById("coachContinue").onclick=startCoachSession;
  document.getElementById("coachHome").onclick=()=>nav("home");
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
  if(fromCoach) coachSession.active=true;
  profile.lastMode=mode;
  save();
  if(mode==="vocab") return vocabStart();
  if(mode==="grammar") return grammarStart();
  if(mode==="dialogue") return dialogueQuestion();
  return translationQuestion();
}

function resultView(ok,correct,nextMode){
  profile.answered++;
  if(ok){profile.correct++;profile.points+=10}
  if(coachSession.active){
    coachSession.answered++;
    if(ok) coachSession.correct++;
    if(ok) coachSession.points+=10;
  }
  save();

  const box=document.getElementById("feedback");
  box.className="feedback "+(ok?"ok":"no");
  box.textContent=ok?"Richtig! Sehr gut.":"Noch nicht ganz. Richtig ist: "+correct;

  document.getElementById("nextBtn").classList.remove("hidden");
  document.getElementById("nextBtn").textContent=coachSession.active?"Im Coach weiter":"Weiter";
  document.getElementById("nextBtn").onclick=()=>{
    if(coachSession.active) startMode(CoachEngine.next(profile),true);
    else if((nextMode||profile.lastMode)==="vocab") vocabQuestion();
    else if((nextMode||profile.lastMode)==="grammar") grammarQuestion();
    else startMode(nextMode||profile.lastMode||"vocab");
  };
}

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
      const ok=a===currentQuestion.item.de;
      VocabularyEngine.mark(currentQuestion.item.id,ok);
      resultView(ok,currentQuestion.item.de,"vocab");
      document.querySelectorAll(".choice").forEach(x=>x.disabled=true);
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

function grammarQuestion(){
  title.textContent="Grammatik";
  let q=GrammarEngine.pick(profile.level,profile.grammarTopic||"Alle");
  if(!q){profile.grammarTopic="Alle";save();q=GrammarEngine.pick(profile.level,"Alle")}
  if(!q){root.innerHTML=`<section class="card"><h2>Keine Grammatikaufgaben gefunden</h2><button class="primary" id="grammarBack">Zurück</button></section>`;document.getElementById("grammarBack").onclick=grammarStart;return}
  const state=GrammarEngine.getState(q.id);

  root.innerHTML=`${coachHeader()}
    <section class="card">
      <span class="badge">${q.topic}</span>
      <div class="question">${q.prompt}</div>
      <p class="muted">${q.explanation}</p>
      <div class="badge">Lernstufe ${state.mastery}/5</div>

      <div class="grid" id="answerGrid"></div>
      <div id="feedback"></div>

      <div class="row">
        <button class="secondary" id="changeGrammarTopic">Thema ändern</button>
        <button class="primary hidden" id="nextBtn">Weiter</button>
      </div>
    </section>
      <div class="row" style="margin-top:14px">
        <button class="secondary" id="openGrammarCoach">Grammatik-Coach</button>
      </div>`;
  setTimeout(()=>{const b=document.getElementById("openGrammarCoach");if(b)b.onclick=grammarCoachView;},0);


  bindCoachStop();
  document.getElementById("changeGrammarTopic").onclick=grammarStart;

  [...q.choices].sort(()=>Math.random()-.5).forEach(a=>{
    const b=document.createElement("button");
    b.className="choice";
    b.textContent=a;

    b.onclick=()=>{
      const ok=a===q.answer;
      GrammarEngine.mark(q.id,ok);
      if(typeof GrammarErrorTracker!=="undefined") GrammarErrorTracker.record({...q,level:profile.level},ok);
      resultView(ok,q.answer,"grammar");
      document.querySelectorAll(".choice").forEach(x=>x.disabled=true);
    };

    document.getElementById("answerGrid").appendChild(b);
  });
}

function dialogueQuestion(){
  SpeechController.stop();title.textContent="Gespräche";
  root.innerHTML=`<section class="card"><h2>Gesprächstraining</h2><div class="row"><button class="primary" id="branchTab">Verzweigte Gespräche</button><button class="secondary" id="classicTab">Weitere Gespräche</button></div><div id="dialogueLibrary" style="margin-top:14px"></div></section>`;
  document.getElementById("branchTab").onclick=renderBranchLibrary;document.getElementById("classicTab").onclick=renderClassicLibrary;renderBranchLibrary()
}
function renderBranchLibrary(){renderDialogueLibrary("branch")}
function renderClassicLibrary(){renderDialogueLibrary("quality")}
function renderDialogueLibrary(type){const list=type==="branch"?(ES_BRANCHING_SCENARIOS_151||[]):(ES_QUALITY_SCENARIOS||[]),topics=["Alle",...new Set(list.map(s=>s.topic).filter(Boolean))].sort(),prefix=type==="branch"?"branch":"quality";document.getElementById("dialogueLibrary").innerHTML=`<p class="muted">Das Gespräch wechselt automatisch in neue Situationen und läuft weiter, bis du es selbst beendest.</p><label>Thema<select id="dialogueTopic">${topics.map(t=>`<option>${t}</option>`).join("")}</select></label><div id="dialogueGrid" class="grid" style="margin-top:12px"></div>`;const draw=()=>{const topic=document.getElementById("dialogueTopic").value,visible=list.filter(s=>topic==="Alle"||s.topic===topic);document.getElementById("dialogueGrid").innerHTML=visible.map(s=>`<button class="tile" data-dialogue="${s.id}"><span class="icon">${type==="branch"?"🗣️":"💬"}</span><strong>${s.title}</strong><span class="muted small">${s.topic} · ${s.level}</span></button>`).join("");document.querySelectorAll("[data-dialogue]").forEach(b=>b.onclick=()=>startContinuousDialogue(type,b.dataset.dialogue,topic))};document.getElementById("dialogueTopic").onchange=draw;draw()}
let continuousDialogue={active:false,token:0,type:null,scenario:null,node:null,step:0,topic:"Alle",completed:0,recentIds:[],lastSpoken:""};
function dialogueCollection(type){return type==="branch"?(ES_BRANCHING_SCENARIOS_151||[]):(ES_QUALITY_SCENARIOS||[])}
function findDialogue(type,id){return dialogueCollection(type).find(s=>s.id===id)||null}
function chooseNextDialogue(){const list=dialogueCollection(continuousDialogue.type),recent=new Set(continuousDialogue.recentIds.slice(-15)),topic=continuousDialogue.topic;let pool=list.filter(s=>s.id!==continuousDialogue.scenario.id&&!recent.has(s.id)&&(topic==="Alle"||s.topic===topic));if(!pool.length)pool=list.filter(s=>s.id!==continuousDialogue.scenario.id&&(topic==="Alle"||s.topic===topic));if(!pool.length)pool=list.filter(s=>s.id!==continuousDialogue.scenario.id);return pool[Math.floor(Math.random()*pool.length)]||list[0]||null}
function renderDialogueShell(){root.innerHTML=`<section class="card"><div class="row"><button class="secondary" id="dialogueBack">← Gespräche</button><button class="secondary" id="dialogueRepeat">🔊 Wiederholen</button><button class="secondary" id="dialogueEnd">Gespräch beenden</button></div><div id="continuousChat" class="chat"></div><div id="continuousAnswers" class="grid" style="margin-top:12px"></div><label id="freeAnswerLabel" class="hidden">Eigene Antwort<input id="continuousFree" placeholder="Tippen oder diktieren"></label><button class="primary hidden" id="continuousSend">Antwort senden</button><p id="continuousStatus" class="muted small">Das Gespräch läuft, bis du es beendest.</p></section>`;document.getElementById("dialogueBack").onclick=()=>{stopContinuousDialogue(false);dialogueQuestion()};document.getElementById("dialogueRepeat").onclick=()=>speak(continuousDialogue.lastSpoken,{interrupt:true});document.getElementById("dialogueEnd").onclick=()=>stopContinuousDialogue(true);const input=document.getElementById("continuousFree"),send=document.getElementById("continuousSend");send.onclick=()=>{const v=input.value.trim();if(v)submitContinuousAnswer(v,null)};input.onkeydown=e=>{if(e.key==="Enter"){e.preventDefault();const v=input.value.trim();if(v)submitContinuousAnswer(v,null)}}}
function startContinuousDialogue(type,id,topic="Alle"){const scenario=findDialogue(type,id);if(!scenario)return dialogueQuestion();SpeechController.stop();continuousDialogue={active:true,token:continuousDialogue.token+1,type,scenario,node:type==="branch"?scenario.start:null,step:0,topic:topic||"Alle",completed:0,recentIds:[scenario.id],lastSpoken:""};title.textContent=scenario.title;renderDialogueShell();renderContinuousTurn()}
function addContinuousMessage(text,who,de=""){const chat=document.getElementById("continuousChat");if(!chat)return;const box=document.createElement("div");box.className="msg "+who;box.append(document.createTextNode(text));if(profile.subtitles&&de){const sub=document.createElement("span");sub.className="sub";sub.textContent=de;box.appendChild(sub)}chat.appendChild(box);chat.scrollTop=chat.scrollHeight}
function renderAnswerButtons(answers){const c=document.getElementById("continuousAnswers");if(!c)return;c.innerHTML="";for(const a of answers){const text=typeof a==="string"?a:a.text,next=typeof a==="string"?null:a.next,b=document.createElement("button");b.className="choice";b.textContent=text;b.onclick=()=>submitContinuousAnswer(text,next);c.appendChild(b)}}
function renderContinuousTurn(){if(!continuousDialogue.active)return;const scenario=continuousDialogue.scenario;let bot="",de="",answers=[];if(continuousDialogue.type==="branch"){const node=scenario.nodes&&scenario.nodes[continuousDialogue.node];if(!node){continueWithNextDialogue();return}bot=node.bot||"";de=node.de||"";answers=Array.isArray(node.answers)?node.answers:[]}else{const step=scenario.steps&&scenario.steps[continuousDialogue.step];if(!step){continueWithNextDialogue();return}bot=step.bot||"";de=step.de||"";answers=Array.isArray(step.answers)?step.answers:[]}continuousDialogue.lastSpoken=bot;addContinuousMessage(bot,"bot",de);if(!answers.length){speak(bot,{interrupt:false}).finally(()=>{if(continuousDialogue.active)continueWithNextDialogue()});return}renderAnswerButtons(answers);const free=continuousDialogue.type==="quality";document.getElementById("freeAnswerLabel").classList.toggle("hidden",!free);document.getElementById("continuousSend").classList.toggle("hidden",!free);document.getElementById("continuousStatus").textContent=`Fortlaufendes Gespräch · ${continuousDialogue.completed} Situationen abgeschlossen`;speak(bot,{interrupt:false})}
async function submitContinuousAnswer(text,next){if(!continuousDialogue.active)return;const token=continuousDialogue.token,c=document.getElementById("continuousAnswers");if(c){c.querySelectorAll("button").forEach(b=>b.disabled=true);c.innerHTML=""}const input=document.getElementById("continuousFree");if(input)input.value="";addContinuousMessage(text,"me","");profile.points+=10;profile.answered++;profile.correct++;save();await speak(text,{interrupt:false});if(!continuousDialogue.active||token!==continuousDialogue.token)return;if(continuousDialogue.type==="branch")continuousDialogue.node=next;else continuousDialogue.step++;renderContinuousTurn()}
function continueWithNextDialogue(){if(!continuousDialogue.active)return;const next=chooseNextDialogue();if(!next){stopContinuousDialogue(true);return}continuousDialogue.completed++;continuousDialogue.recentIds=[...continuousDialogue.recentIds,next.id].slice(-30);continuousDialogue.scenario=next;continuousDialogue.node=continuousDialogue.type==="branch"?next.start:null;continuousDialogue.step=0;const chat=document.getElementById("continuousChat");if(chat){const d=document.createElement("div");d.className="muted small";d.style.margin="18px 0 8px";d.textContent=`Neue Situation: ${next.title}`;chat.appendChild(d);chat.scrollTop=chat.scrollHeight}title.textContent=next.title;renderContinuousTurn()}
function stopContinuousDialogue(showSummary=true){if(!continuousDialogue.active){SpeechController.stop();return}continuousDialogue.active=false;continuousDialogue.token++;SpeechController.stop();if(!showSummary)return;profile.dialogs++;save();const c=document.getElementById("continuousAnswers");if(c)c.innerHTML=`<button class="primary" id="newContinuousDialogue">Neues Gespräch</button><button class="secondary" id="continuousLibrary">Zur Gesprächsauswahl</button>`;const status=document.getElementById("continuousStatus");if(status)status.textContent=`Gespräch beendet · ${continuousDialogue.completed} Situationen abgeschlossen`;const free=document.getElementById("freeAnswerLabel"),send=document.getElementById("continuousSend");if(free)free.classList.add("hidden");if(send)send.classList.add("hidden");const n=document.getElementById("newContinuousDialogue"),l=document.getElementById("continuousLibrary");if(n)n.onclick=()=>{const list=dialogueCollection(continuousDialogue.type),next=list[Math.floor(Math.random()*list.length)];if(next)startContinuousDialogue(continuousDialogue.type,next.id,continuousDialogue.topic)};if(l)l.onclick=dialogueQuestion}

function grammarCoachView(){
  title.textContent="Grammatik-Coach";
  const summary=GrammarCoach.summary(profile.level);

  root.innerHTML=`
    <section class="card">
      <h2>Dein Grammatik-Coach</h2>
      <p class="muted">Die Aufgaben werden automatisch nach deinen schwächsten Themen ausgewählt.</p>

      <div class="stats-grid">
        <div class="stat"><strong>${summary.sessions}</strong><span>Sitzungen</span></div>
        <div class="stat"><strong>${summary.answered}</strong><span>Antworten</span></div>
        <div class="stat"><strong>${summary.accuracy}%</strong><span>Trefferquote</span></div>
      </div>

      <h3>Empfehlungen</h3>
      <div class="grid">
        ${summary.recommendations.map(r=>`<div class="tile"><strong>${r}</strong></div>`).join("")}
      </div>

      <h3 style="margin-top:18px">Schwächste Themen</h3>
      <div class="grid">
        ${summary.weakest.length
          ? summary.weakest.map(x=>`
            <div class="tile">
              <strong>${x.topic}</strong>
              <span class="muted small">${Math.round(x.rate*100)}% richtig · ${x.total} Aufgaben</span>
            </div>`).join("")
          : `<div class="tile"><strong>Noch keine Auswertung vorhanden.</strong></div>`
        }
      </div>

      <div class="row" style="margin-top:18px">
        <button class="primary" id="startGrammarCoach">Coach-Sitzung starten</button>
        <button class="secondary" id="openGrammarPractice">Normale Grammatik</button>
      </div>
    </section>`;

  document.getElementById("startGrammarCoach").onclick=startGrammarCoachSession;
  document.getElementById("openGrammarPractice").onclick=grammarQuestion;
}

let grammarCoachState={
  item:null,
  answered:0,
  correct:0,
  target:10
};

function startGrammarCoachSession(){
  GrammarCoach.startSession();
  grammarCoachState={
    item:null,
    answered:0,
    correct:0,
    target:10
  };
  renderGrammarCoachQuestion();
}

function renderGrammarCoachQuestion(){
  title.textContent="Grammatik-Coach";

  if(grammarCoachState.answered>=grammarCoachState.target){
    const rate=Math.round(
      grammarCoachState.correct/grammarCoachState.target*100
    );

    root.innerHTML=`
      <section class="card">
        <h2>Sitzung abgeschlossen</h2>
        <div class="stats-grid">
          <div class="stat"><strong>${grammarCoachState.target}</strong><span>Aufgaben</span></div>
          <div class="stat"><strong>${grammarCoachState.correct}</strong><span>Richtig</span></div>
          <div class="stat"><strong>${rate}%</strong><span>Trefferquote</span></div>
        </div>
        <div class="row" style="margin-top:18px">
          <button class="primary" id="coachAgain">Neue Sitzung</button>
          <button class="secondary" id="coachSummary">Auswertung</button>
        </div>
      </section>`;

    document.getElementById("coachAgain").onclick=startGrammarCoachSession;
    document.getElementById("coachSummary").onclick=grammarCoachView;
    return;
  }

  const item=GrammarCoach.pick(profile.level);
  grammarCoachState.item=item;

  root.innerHTML=`
    <section class="card">
      <div class="row">
        <button class="secondary" id="coachBack">← Auswertung</button>
        <span class="muted small">
          Aufgabe ${grammarCoachState.answered+1} von ${grammarCoachState.target}
        </span>
      </div>

      <h2>${item.topic}</h2>
      <p class="muted">${item.explanation}</p>
      <div class="question">${item.prompt}</div>
      <div id="grammarCoachAnswers" class="grid"></div>
      <div id="grammarCoachFeedback"></div>
    </section>`;

  document.getElementById("coachBack").onclick=grammarCoachView;

  const answers=document.getElementById("grammarCoachAnswers");
  [...item.choices].sort(()=>Math.random()-.5).forEach(choice=>{
    const button=document.createElement("button");
    button.className="choice";
    button.textContent=choice;
    button.onclick=()=>answerGrammarCoach(choice);
    answers.appendChild(button);
  });
}

function answerGrammarCoach(choice){
  const item=grammarCoachState.item;
  const correct=choice===item.answer;

  grammarCoachState.answered++;
  if(correct) grammarCoachState.correct++;

  if(typeof GrammarErrorTracker!=="undefined"){
    GrammarErrorTracker.record(
      {...item,level:profile.level},
      correct
    );
  }

  GrammarCoach.record(
    {...item,level:profile.level},
    correct
  );

  profile.answered++;
  if(correct){
    profile.correct++;
    profile.points+=15;
  }else{
    profile.points+=3;
  }
  save();

  document.getElementById("grammarCoachAnswers").innerHTML="";
  document.getElementById("grammarCoachFeedback").innerHTML=`
    <div class="feedback ${correct?"ok":"bad"}">
      <strong>${correct?"Richtig":"Noch nicht richtig"}</strong>
      <p>Richtige Antwort: <b>${item.answer}</b></p>
      <p>${item.explanation}</p>
    </div>
    <button class="primary" id="nextGrammarCoach">Weiter</button>`;

  document.getElementById("nextGrammarCoach").onclick=renderGrammarCoachQuestion;
}

function translationQuestion(){
  title.textContent="Übersetzung";
  const q=VocabularyEngine.makeQuestion(profile.level,profile.vocabTopic||"Alle").item;

  root.innerHTML=`${coachHeader()}
    <section class="card">
      <div class="question">Übersetze: „${q.de}“</div>
      <input id="translationInput" placeholder="Englische Antwort">
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
  levelPill.textContent=profile.level;
  if(route==="home")homeView();
  else if(route==="coach")coachView();
  else if(route==="free")freeView();
  else if(route==="progress")progressView();
  else settingsView();
}

save();
render();

if("serviceWorker" in navigator && location.protocol.startsWith("http")){navigator.serviceWorker.register("./service-worker.js").then(r=>r.update().catch(()=>{})).catch(()=>{})}
