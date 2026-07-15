const AppPolish={
  version:"2.0",
  lastInteraction:Date.now(),

  init(){
    ["pointerdown","keydown","touchstart"].forEach(name=>{
      document.addEventListener(name,()=>{
        this.lastInteraction=Date.now();
      },{passive:true});
    });

    document.addEventListener("keydown",event=>{
      if(event.altKey&&event.key==="1"){event.preventDefault();nav("home")}
      if(event.altKey&&event.key==="2"){event.preventDefault();nav("free")}
      if(event.altKey&&event.key==="3"){event.preventDefault();nav("coach")}
      if(event.altKey&&event.key==="4"){event.preventDefault();nav("progress")}
      if(event.key==="Escape"){
        try{
          SpeechController.stop();
          stopPronunciationRecognition?.();
        }catch{}
      }
    });

    try{
      const media=window.matchMedia("(prefers-reduced-motion: reduce)");
      document.body.classList.toggle("reduced-motion",media.matches);
      media.addEventListener?.("change",event=>{
        document.body.classList.toggle("reduced-motion",event.matches);
      });
    }catch{}

    document.addEventListener("click",event=>{
      const button=event.target.closest("button");
      if(!button||button.disabled)return;
      button.classList.add("button-pressed");
      setTimeout(()=>button.classList.remove("button-pressed"),160);
    });

    this.defer(()=>{
      try{
        VocabularyEngine.allowed(profile.level,"Alle").slice(0,30);
        GrammarEngine.allForLevel(profile.level).slice(0,30);
        PronunciationEngine.phrases(profile.level,"Alle").slice(0,30);
      }catch(error){
        AppStability.record(error,"prewarm");
      }
    });
  },

  defer(task){
    if("requestIdleCallback" in window){
      requestIdleCallback(()=>task(),{timeout:1200});
    }else{
      setTimeout(task,120);
    }
  },

  diagnostics(){
    return {
      version:this.version,
      online:navigator.onLine,
      speech:Boolean(window.speechSynthesis),
      recognition:PronunciationEngine.supported(),
      content:AppStability.validateContent()
    };
  }
};

AppPolish.init();
