const VocabularyEngine = {
  key: "englishStepVocabularySM2",
  sessionKey: "englishStepVocabularySessionV1644",

  load(){
    try{return JSON.parse(localStorage.getItem(this.key)) || {}}catch{return {}}
  },

  save(data){
    localStorage.setItem(this.key, JSON.stringify(data))
  },

  getState(id){
    const all=this.load();
    return all[id] || {
      repetitions:0,
      intervalDays:0,
      ease:2.5,
      due:0,
      correct:0,
      wrong:0,
      seen:false,
      last:0
    }
  },

  rate(id,quality){
    const all=this.load();
    const s=all[id] || this.getState(id);
    s.seen=true;
    s.last=Date.now();

    if(quality<3){
      s.repetitions=0;
      s.intervalDays=0;
      s.wrong++;
      s.due=Date.now()+10*60*1000;
    }else{
      s.correct++;
      if(s.repetitions===0)s.intervalDays=1;
      else if(s.repetitions===1)s.intervalDays=3;
      else s.intervalDays=Math.max(1,Math.round(s.intervalDays*s.ease));
      s.repetitions++;
      s.ease=Math.max(
        1.3,
        s.ease+(0.1-(5-quality)*(0.08+(5-quality)*0.02))
      );
      s.due=Date.now()+s.intervalDays*86400000;
    }

    all[id]=s;
    this.save(all);
    return s
  },

  mark(id,correct){
    return this.rate(id,correct?4:1)
  },

  allowed(level,topic="Alle"){
    const levels=["A1","A2","B1","B2"];
    const max=Math.max(0,levels.indexOf(level));
    const seenIds=new Set();
    const seenPairs=new Set();

    return (ES_CONTENT.vocabulary || []).filter(v=>{
      if(!v || !v.id || !v.en || !v.de)return false;
      if(seenIds.has(v.id))return false;
      if(levels.indexOf(v.level)>max)return false;
      if(topic!=="Alle" && v.topic!==topic)return false;

      const pair=[
        String(v.en).trim().toLocaleLowerCase(),
        String(v.de).trim().toLocaleLowerCase()
      ].join("|");

      if(seenPairs.has(pair))return false;
      seenIds.add(v.id);
      seenPairs.add(pair);
      return true
    })
  },

  topics(level){
    return [
      "Alle",
      ...new Set(this.allowed(level).map(v=>v.topic).filter(Boolean))
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

  buildQueue(level,topic){
    const pool=this.allowed(level,topic);
    const now=Date.now();

    const due=[];
    const newItems=[];
    const weak=[];
    const remaining=[];

    for(const item of pool){
      const state=this.getState(item.id);
      if(state.seen && state.due<=now)due.push(item);
      else if(!state.seen)newItems.push(item);
      else if(state.wrong>state.correct || state.repetitions<3)weak.push(item);
      else remaining.push(item)
    }

    // Interleave categories so neither due nor weak words dominate the session.
    const queues=[
      this.shuffle(due),
      this.shuffle(newItems),
      this.shuffle(weak),
      this.shuffle(remaining)
    ];
    const result=[];
    const used=new Set();

    while(queues.some(q=>q.length)){
      for(const queue of queues){
        const item=queue.shift();
        if(item && !used.has(item.id)){
          used.add(item.id);
          result.push(item.id)
        }
      }
    }

    return result
  },

  pick(level,topic="Alle"){
    const pool=this.allowed(level,topic);
    if(!pool.length)return null;

    const byId=new Map(pool.map(v=>[v.id,v]));
    const data=this.readSession();
    const key=this.context(level,topic);
    const state=data[key] || {queue:[],lastIds:[]};

    state.queue=(state.queue || []).filter(id=>byId.has(id));

    if(!state.queue.length){
      state.queue=this.buildQueue(level,topic)
    }

    // Prevent immediate and near-immediate repetition even after rebuilding.
    const recent=new Set((state.lastIds || []).slice(-12));
    let index=state.queue.findIndex(id=>!recent.has(id));
    if(index<0)index=0;

    const [id]=state.queue.splice(index,1);
    state.lastIds=[...(state.lastIds || []),id].slice(-30);
    data[key]=state;
    this.writeSession(data);

    return byId.get(id) || pool[0]
  },

  makeQuestion(level,topic="Alle"){
    const item=this.pick(level,topic);
    if(!item){
      throw new Error("Keine Vokabeln für diese Auswahl verfügbar.")
    }

    const alternatives=this.shuffle(
      this.allowed(level,topic).filter(v=>
        v.id!==item.id &&
        String(v.de).trim().toLocaleLowerCase()!==
          String(item.de).trim().toLocaleLowerCase()
      )
    );

    const answers=[item.de];
    const used=new Set([String(item.de).trim().toLocaleLowerCase()]);

    for(const alternative of alternatives){
      const value=String(alternative.de).trim();
      const key=value.toLocaleLowerCase();
      if(!used.has(key)){
        used.add(key);
        answers.push(value)
      }
      if(answers.length===4)break
    }

    // Fallback across all levels only for distractors.
    if(answers.length<4){
      for(const alternative of this.shuffle(ES_CONTENT.vocabulary || [])){
        if(!alternative || !alternative.de)continue;
        const value=String(alternative.de).trim();
        const key=value.toLocaleLowerCase();
        if(!used.has(key)){
          used.add(key);
          answers.push(value)
        }
        if(answers.length===4)break
      }
    }

    return {item,answers:this.shuffle(answers)}
  },

  dueWords(level,topic="Alle"){
    const now=Date.now();
    return this.allowed(level,topic)
      .filter(v=>{
        const s=this.getState(v.id);
        return s.seen && s.due<=now
      })
      .sort((a,b)=>this.getState(a.id).due-this.getState(b.id).due)
  },

  stats(level){
    const list=this.allowed(level);
    const seen=list.filter(v=>this.getState(v.id).seen);
    const mastered=seen.filter(v=>{
      const s=this.getState(v.id);
      return s.repetitions>=4 && s.ease>=2.1
    });
    return {
      total:list.length,
      seen:seen.length,
      mastered:mastered.length,
      due:this.dueWords(level).length
    }
  }
};
