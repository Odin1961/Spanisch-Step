const GrammarErrorTracker = {
  key: "englishStepGrammarTopicStats",

  load(){
    try{return JSON.parse(localStorage.getItem(this.key)) || {}}catch{return {}}
  },

  save(data){
    localStorage.setItem(this.key, JSON.stringify(data))
  },

  record(item, correct){
    const data=this.load();
    const key=`${item.level||profile.level}:${item.topic||"Allgemein"}`;
    const stat=data[key] || {correct:0,wrong:0,total:0,last:0};
    stat.total++;
    stat.last=Date.now();
    if(correct) stat.correct++;
    else stat.wrong++;
    data[key]=stat;
    this.save(data);
  },

  weakest(level){
    const data=this.load();
    return Object.entries(data)
      .filter(([key])=>key.startsWith(level+":"))
      .map(([key,value])=>({
        topic:key.split(":").slice(1).join(":"),
        ...value,
        rate:value.total ? value.correct/value.total : 0
      }))
      .sort((a,b)=>a.rate-b.rate || b.wrong-a.wrong);
  },

  summary(level){
    const list=this.weakest(level);
    return {
      weakest:list.slice(0,3),
      practiced:list.reduce((sum,x)=>sum+x.total,0),
      correct:list.reduce((sum,x)=>sum+x.correct,0)
    }
  },

  reset(){
    localStorage.removeItem(this.key)
  }
};
