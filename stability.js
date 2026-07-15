const AppStability={
  version:"1.7",
  errorKey:"espanolStepErrors17",
  started:false,
  navigationLock:false,

  record(error,context="unknown"){
    const entry={
      time:new Date().toISOString(),
      context,
      message:String(error?.message||error||"Unbekannter Fehler"),
      stack:String(error?.stack||"").slice(0,2000)
    };

    try{
      const list=JSON.parse(localStorage.getItem(this.errorKey))||[];
      list.unshift(entry);
      localStorage.setItem(this.errorKey,JSON.stringify(list.slice(0,30)));
    }catch{}

    console.error(`[Español Step ${this.version}] ${context}`,error);
  },

  safe(action,context="action"){
    try{
      return action();
    }catch(error){
      this.record(error,context);
      this.showRecovery(context);
      return null;
    }
  },

  async safeAsync(action,context="async-action"){
    try{
      return await action();
    }catch(error){
      this.record(error,context);
      this.showRecovery(context);
      return null;
    }
  },

  showRecovery(context){
    try{
      SpeechController?.stop?.();
      stopPronunciationRecognition?.();
    }catch{}

    const rootElement=document.getElementById("app")||window.root;
    if(!rootElement)return;

    rootElement.innerHTML=`
      <section class="card">
        <h2>Dieser Bereich wurde sicher angehalten</h2>
        <p>
          Beim Laden von <strong>${context}</strong> ist ein Fehler aufgetreten.
          Dein Lernstand wurde nicht gelöscht.
        </p>
        <div class="row">
          <button class="primary" id="stabilityHome">Zur Startseite</button>
          <button class="secondary" id="stabilityRetry">Erneut versuchen</button>
        </div>
      </section>`;

    document.getElementById("stabilityHome").onclick=()=>location.reload();
    document.getElementById("stabilityRetry").onclick=()=>location.reload();
  },

  validateContent(){
    const report={
      vocabulary:0,
      branching:0,
      quality:0,
      grammar:0,
      invalidVocabulary:0,
      invalidBranching:0,
      invalidQuality:0,
      invalidGrammar:0
    };

    const vocabulary=ES_CONTENT?.vocabulary||[];
    report.vocabulary=vocabulary.length;
    report.invalidVocabulary=vocabulary.filter(item=>
      !item?.id || !item?.en || !item?.de || !item?.level
    ).length;

    const branching=ES_BRANCHING_SCENARIOS_151||[];
    report.branching=branching.length;
    report.invalidBranching=branching.filter(item=>
      !item?.id || !item?.start || !item?.nodes?.[item.start]
    ).length;

    const quality=ES_QUALITY_SCENARIOS||[];
    report.quality=quality.length;
    report.invalidQuality=quality.filter(item=>
      !item?.id || !Array.isArray(item?.steps) || !item.steps.length
    ).length;

    const grammar=Object.values(ES_GRAMMAR||{}).flat();
    report.grammar=grammar.length;
    report.invalidGrammar=grammar.filter(item=>
      !item?.id ||
      !item?.prompt ||
      !item?.answer ||
      !Array.isArray(item?.choices) ||
      !item.choices.includes(item.answer)
    ).length;

    return report;
  },

  sanitizeProfile(profile){
    const allowedLevels=["A1","A2","B1","B2"];
    if(!allowedLevels.includes(profile.level))profile.level="A1";
    if(!["es-ES","es-MX"].includes(profile.accent))profile.accent="es-ES";

    profile.speed=Math.max(
      .55,
      Math.min(1.15,Number(profile.speed)||.85)
    );

    profile.points=Math.max(0,Number(profile.points)||0);
    profile.answered=Math.max(0,Number(profile.answered)||0);
    profile.correct=Math.max(0,Number(profile.correct)||0);
    profile.dialogs=Math.max(0,Number(profile.dialogs)||0);
    profile.coachMinutes=Math.max(
      5,
      Math.min(60,Number(profile.coachMinutes)||15)
    );

    return profile;
  },

  repairStorage(){
    const keys=[
      "espanolStepProfile01",
      "espanolStepVocabulary13",
      "espanolStepGrammar14",
      "espanolStepPronunciation15",
      "espanolStepCoach16"
    ];

    for(const key of keys){
      const value=localStorage.getItem(key);
      if(value===null)continue;

      try{
        JSON.parse(value);
      }catch(error){
        this.record(error,`storage:${key}`);
        localStorage.removeItem(key);
      }
    }
  },

  init(){
    if(this.started)return;
    this.started=true;

    this.repairStorage();

    window.addEventListener("error",event=>{
      this.record(event.error||event.message,"window-error");
    });

    window.addEventListener("unhandledrejection",event=>{
      this.record(event.reason,"unhandled-promise");
    });

    window.addEventListener("beforeunload",()=>{
      try{
        SpeechController?.stop?.();
        stopPronunciationRecognition?.();
      }catch{}
    });

    window.addEventListener("online",()=>{
      document.body.classList.remove("offline-mode");
    });

    window.addEventListener("offline",()=>{
      document.body.classList.add("offline-mode");
    });

    if(!navigator.onLine){
      document.body.classList.add("offline-mode");
    }
  }
};

AppStability.init();
