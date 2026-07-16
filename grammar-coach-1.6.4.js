const GrammarCoach = {
  key: "englishStepGrammarCoach164",

  load(){
    try{
      return JSON.parse(localStorage.getItem(this.key)) || {
        sessions:0,
        answered:0,
        correct:0,
        recentTopics:[],
        recommendations:[]
      };
    }catch{
      return {
        sessions:0,
        answered:0,
        correct:0,
        recentTopics:[],
        recommendations:[]
      };
    }
  },

  save(data){
    localStorage.setItem(this.key, JSON.stringify(data));
  },

  allItems(level){
    return (ES_GRAMMAR[level] || []).map(item => ({
      ...item,
      level
    }));
  },

  topicStats(level){
    if(typeof GrammarErrorTracker === "undefined"){
      return [];
    }
    return GrammarErrorTracker.weakest(level);
  },

  itemScore(item, level){
    const stats=this.topicStats(level);
    const topicStat=stats.find(x=>x.topic===item.topic);
    let score=1;

    if(topicStat){
      score += topicStat.wrong * 4;
      score += Math.max(0, 1-topicStat.rate) * 10;
      score += Math.max(0, 5-topicStat.total);
    }else{
      score += 7;
    }

    const state=this.load();
    if(state.recentTopics.includes(item.topic)){
      score *= 0.65;
    }

    return Math.max(0.1,score);
  },

  pick(level){
    const items=this.allItems(level);
    if(!items.length) return null;

    const weighted=items.map(item=>({
      item,
      weight:this.itemScore(item,level)
    }));

    const total=weighted.reduce((sum,x)=>sum+x.weight,0);
    let random=Math.random()*total;

    for(const entry of weighted){
      random-=entry.weight;
      if(random<=0) return entry.item;
    }

    return weighted[weighted.length-1].item;
  },

  record(item,correct){
    const state=this.load();
    state.answered++;
    if(correct) state.correct++;

    state.recentTopics.push(item.topic || "Allgemein");
    state.recentTopics=state.recentTopics.slice(-5);

    state.recommendations=this.recommendations(item.level || profile.level);
    this.save(state);
  },

  startSession(){
    const state=this.load();
    state.sessions++;
    this.save(state);
  },

  recommendations(level){
    const weakest=this.topicStats(level).slice(0,3);

    if(!weakest.length){
      return [
        "Bearbeite zunächst einige Grammatikaufgaben.",
        "Der Coach erkennt danach automatisch deine schwächsten Themen."
      ];
    }

    return weakest.map((x,index)=>{
      const accuracy=Math.round(x.rate*100);
      if(index===0){
        return `Priorität: ${x.topic} – bisher ${accuracy}% richtig.`;
      }
      return `Wiederholen: ${x.topic} – bisher ${accuracy}% richtig.`;
    });
  },

  summary(level){
    const state=this.load();
    const weakest=this.topicStats(level).slice(0,5);
    const accuracy=state.answered
      ? Math.round(state.correct/state.answered*100)
      : 0;

    return {
      sessions:state.sessions,
      answered:state.answered,
      correct:state.correct,
      accuracy,
      weakest,
      recommendations:this.recommendations(level)
    };
  },

  reset(){
    localStorage.removeItem(this.key);
  }
};
