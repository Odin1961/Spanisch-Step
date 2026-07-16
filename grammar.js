const GrammarEngine = {
  key:"englishStepGrammarV1",
  sessionKey:"englishStepGrammarSessionV1644",

  load(){
    try{return JSON.parse(localStorage.getItem(this.key)) || {}}catch{return {}}
  },

  save(data){
    localStorage.setItem(this.key,JSON.stringify(data))
  },

  allForLevel(level){
    const order=["A1","A2","B1","B2"];
    const max=Math.max(0,order.indexOf(level));
    const ids=new Set();

    return order
      .filter((_,index)=>index<=max)
      .flatMap(l=>(ES_GRAMMAR[l] || []).map(item=>({...item,level:l})))
      .filter(item=>{
        if(
          !item ||
          !item.id ||
          !item.prompt ||
          !item.answer ||
          !Array.isArray(item.choices) ||
          item.choices.length<2
        )return false;
        if(ids.has(item.id))return false;
        ids.add(item.id);
        return item.choices.includes(item.answer)
      })
  },

  getState(id){
    const all=this.load();
    return all[id] || {correct:0,wrong:0,last:0,mastery:0}
  },

  mark(id,correct){
    const all=this.load();
    const s=all[id] || {correct:0,wrong:0,last:0,mastery:0};
    s.last=Date.now();

    if(correct){
      s.correct++;
      s.mastery=Math.min(5,s.mastery+1)
    }else{
      s.wrong++;
      s.mastery=Math.max(0,s.mastery-1)
    }

    all[id]=s;
    this.save(all);
    return s
  },

  topics(level){
    return [
      "Alle",
      ...new Set(this.allForLevel(level).map(x=>x.topic).filter(Boolean))
    ].sort()
  },

  shuffle(list){
    const result=[...list];
    for(let i=result.length-1;i>0;i--){
      const j=Math.floor(Math.random()*(i+1));
      [result[i],result[j]]=[result[j],result[i]]
    }
    return result
  },

  readSession(){
    try{
      return JSON.parse(sessionStorage.getItem(this.sessionKey)) || {}
    }catch{
      return {}
    }
  },

  writeSession(data){
    sessionStorage.setItem(this.sessionKey,JSON.stringify(data))
  },

  context(level,topic){
    return `${level}::${topic}`
  },

  resetSession(level=null,topic=null){
    if(!level){
      sessionStorage.removeItem(this.sessionKey);
      return
    }
    const data=this.readSession();
    delete data[this.context(level,topic||"Alle")];
    this.writeSession(data)
  },

  buildQueue(pool){
    // Weak items appear earlier, but every valid task appears once before
    // the queue is rebuilt.
    const grouped=[[],[],[],[],[],[]];

    for(const item of pool){
      const state=this.getState(item.id);
      const bucket=Math.max(0,Math.min(5,state.mastery || 0));
      grouped[bucket].push(item)
    }

    return grouped
      .flatMap(group=>this.shuffle(group))
      .map(item=>item.id)
  },

  pick(level,topic="Alle"){
    let pool=this.allForLevel(level);

    if(topic!=="Alle"){
      const filtered=pool.filter(x=>x.topic===topic);
      if(filtered.length)pool=filtered;
      else topic="Alle"
    }

    if(!pool.length)return null;

    const byId=new Map(pool.map(x=>[x.id,x]));
    const data=this.readSession();
    const key=this.context(level,topic);
    const state=data[key] || {queue:[],lastIds:[]};

    state.queue=(state.queue || []).filter(id=>byId.has(id));
    if(!state.queue.length){
      state.queue=this.buildQueue(pool)
    }

    const recent=new Set((state.lastIds || []).slice(-10));
    let index=state.queue.findIndex(id=>!recent.has(id));
    if(index<0)index=0;

    const [id]=state.queue.splice(index,1);
    state.lastIds=[...(state.lastIds || []),id].slice(-25);
    data[key]=state;
    this.writeSession(data);

    return byId.get(id) || pool[0]
  },

  stats(level){
    const all=this.allForLevel(level);
    const practiced=all.filter(item=>{
      const s=this.getState(item.id);
      return s.correct+s.wrong>0
    });
    return {
      total:all.length,
      practiced:practiced.length,
      mastered:all.filter(item=>this.getState(item.id).mastery>=4).length
    }
  }
};
