const RuntimeHealth={
  version:"2.1",
  key:"espanolStepRuntimeHealth21",
  lastReport:null,

  checkFunction(name){
    return typeof window[name]==="function";
  },

  storageAvailable(){
    try{
      const key="__es_test__";
      localStorage.setItem(key,"1");
      localStorage.removeItem(key);
      return true;
    }catch{
      return false;
    }
  },

  run(){
    const content=AppStability.validateContent();
    const functions=[
      "homeView","freeView","coachView","progressView","settingsView",
      "vocabQuestion","grammarQuestion","dialogueQuestion",
      "pronunciationStart","translationQuestion","render"
    ];

    const report={
      version:this.version,
      time:new Date().toISOString(),
      storage:this.storageAvailable(),
      serviceWorker:"serviceWorker" in navigator,
      speech:Boolean(window.speechSynthesis),
      recognition:PronunciationEngine.supported(),
      functions:Object.fromEntries(
        functions.map(name=>[name,this.checkFunction(name)])
      ),
      content,
      valid:true
    };

    report.valid=
      report.storage &&
      Object.values(report.functions).every(Boolean) &&
      content.invalidVocabulary===0 &&
      content.invalidBranching===0 &&
      content.invalidQuality===0 &&
      content.invalidGrammar===0;

    this.lastReport=report;

    try{
      localStorage.setItem(this.key,JSON.stringify(report));
    }catch{}

    return report;
  },

  recover(){
    try{SpeechController.stop()}catch{}
    try{stopPronunciationRecognition?.()}catch{}
    try{saveNow?.()}catch{}

    VocabularyEngine.resetSession();
    GrammarEngine.resetSession();
    PronunciationEngine.resetSession();

    route="home";
    render();
  },

  show(){
    const report=this.run();
    const missing=Object.entries(report.functions)
      .filter(([,available])=>!available)
      .map(([name])=>name);

    alert(
      `${report.valid?"Startprüfung erfolgreich":"Startprüfung mit Fehlern"}\n\n`+
      `Speicher: ${report.storage?"bereit":"nicht verfügbar"}\n`+
      `Offline-PWA: ${report.serviceWorker?"verfügbar":"nicht verfügbar"}\n`+
      `Sprachausgabe: ${report.speech?"verfügbar":"nicht verfügbar"}\n`+
      `Spracherkennung: ${report.recognition?"verfügbar":"nicht verfügbar"}\n\n`+
      `Vokabeln: ${report.content.vocabulary}\n`+
      `Geführte Gespräche: ${report.content.branching}\n`+
      `Freie Gespräche: ${report.content.quality}\n`+
      `Grammatik: ${report.content.grammar}\n`+
      `Fehlende Funktionen: ${missing.length?missing.join(", "):"keine"}`
    );
  },

  init(){
    const report=this.run();

    if(!report.valid){
      console.warn("Español Step startete mit Auffälligkeiten.",report);
    }

    window.addEventListener("pageshow",event=>{
      if(event.persisted){
        try{
          SpeechController.stop();
          stopPronunciationRecognition?.();
          render();
        }catch(error){
          AppStability.record(error,"pageshow-recovery");
        }
      }
    });
  }
};

RuntimeHealth.init();
