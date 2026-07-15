const CoachEngine = {
  key:"englishStepCoachV3",

  load(){
    try{
      return JSON.parse(localStorage.getItem(this.key)) || {
        recent:[],
        counts:{vocab:0,grammar:0,dialogue:0,translation:0}
      };
    }catch{
      return {recent:[],counts:{vocab:0,grammar:0,dialogue:0,translation:0}};
    }
  },

  save(state){
    localStorage.setItem(this.key,JSON.stringify(state));
  },

  next(profile){
    const state=this.load();
    const due=VocabularyEngine.stats(profile.level).due;
    const grammar=GrammarEngine.stats(profile.level);

    let mode;
    if(due>0){
      mode="vocab";
    }else if(grammar.mastered<Math.max(1,Math.floor(grammar.total/3))){
      mode="grammar";
    }else{
      const cycle=["dialogue","vocab","translation","grammar","dialogue","vocab"];
      mode=cycle[(state.counts.dialogue+state.counts.vocab+state.counts.translation+state.counts.grammar)%cycle.length];
    }

    if(state.recent.length && state.recent[state.recent.length-1]===mode){
      mode=mode==="dialogue"?"vocab":"dialogue";
    }

    state.recent.push(mode);
    state.recent=state.recent.slice(-4);
    state.counts[mode]=(state.counts[mode]||0)+1;
    this.save(state);
    return mode;
  },

  stats(){
    return this.load().counts;
  },

  reset(){
    localStorage.removeItem(this.key);
  }
};
