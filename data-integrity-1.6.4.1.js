const EnglishStepIntegrity = {
  dedupeById(list){
    const seen=new Set();
    return list.filter(item=>item && item.id && !seen.has(item.id) && seen.add(item.id));
  },
  run(){
    if(typeof ES_CONTENT!=="undefined" && Array.isArray(ES_CONTENT.vocabulary)){
      ES_CONTENT.vocabulary=this.dedupeById(ES_CONTENT.vocabulary);
    }
    if(typeof ES_BRANCHING_SCENARIOS_151!=="undefined"){
      const clean=this.dedupeById(ES_BRANCHING_SCENARIOS_151);
      ES_BRANCHING_SCENARIOS_151.splice(0,ES_BRANCHING_SCENARIOS_151.length,...clean);
    }
    if(typeof ES_QUALITY_SCENARIOS!=="undefined"){
      const clean=this.dedupeById(ES_QUALITY_SCENARIOS);
      ES_QUALITY_SCENARIOS.splice(0,ES_QUALITY_SCENARIOS.length,...clean);
    }
  }
};
EnglishStepIntegrity.run();
