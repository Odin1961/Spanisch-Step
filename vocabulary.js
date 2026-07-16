const VocabularyEngine={
  storageKey:"espanolStepVocabulary13",
  sessionKey:"espanolStepVocabularySession13",

  load(){
    try{
      return JSON.parse(localStorage.getItem(this.storageKey)) || {};
    }catch{
      return {};
    }
  },

  save(data){
    localStorage.setItem(this.storageKey,JSON.stringify(data));
  },

  getState(id){return this.stateFor(id)},

  stateFor(id){
    const all=this.load();
    return all[id] || {
      seen:false,
      correct:0,
      wrong:0,
      repetitions:0,
      intervalDays:0,
      ease:2.5,
      due:0,
      lastSeen:0,
      streak:0,
      lapses:0
    };
  },

  update(id,quality){
    const all=this.load();
    const state=all[id] || this.stateFor(id);
    const now=Date.now();

    state.seen=true;
    state.lastSeen=now;

    if(quality<3){
      state.wrong++;
      state.lapses++;
      state.streak=0;
      state.repetitions=0;
      state.intervalDays=0;
      state.due=now+10*60*1000;
      state.ease=Math.max(1.3,state.ease-0.2);
    }else{
      state.correct++;
      state.streak++;
      state.repetitions++;

      if(state.repetitions===1){
        state.intervalDays=1;
      }else if(state.repetitions===2){
        state.intervalDays=3;
      }else{
        state.intervalDays=Math.max(
          1,
          Math.round(state.intervalDays*state.ease)
        );
      }

      state.ease=Math.max(
        1.3,
        state.ease+(0.1-(5-quality)*(0.08+(5-quality)*0.02))
      );

      state.due=now+state.intervalDays*86400000;
    }

    all[id]=state;
    this.save(all);
    return state;
  },

  mark(id,correct){
    return this.update(id,correct?4:1);
  },

  allowed(level,topic="Alle"){
    const order=["A1","A2","B1","B2"];
    const max=Math.max(0,order.indexOf(level));
    const seenIds=new Set();
    const seenPairs=new Set();

    return (ES_CONTENT.vocabulary || []).filter(item=>{
      if(!item || !item.id || !item.en || !item.de)return false;
      if(order.indexOf(item.level)>max)return false;
      if(topic!=="Alle" && item.topic!==topic)return false;
      if(seenIds.has(item.id))return false;

      const pair=[
        String(item.en).trim().toLocaleLowerCase(),
        String(item.de).trim().toLocaleLowerCase()
      ].join("|");

      if(seenPairs.has(pair))return false;

      seenIds.add(item.id);
      seenPairs.add(pair);
      return true;
    });
  },

  topics(level){
    return [
      "Alle",
      ...new Set(this.allowed(level).map(item=>item.topic).filter(Boolean))
    ].sort();
  },

  shuffle(items){
    const result=[...items];

    for(let i=result.length-1;i>0;i--){
      const j=Math.floor(Math.random()*(i+1));
      [result[i],result[j]]=[result[j],result[i]];
    }

    return result;
  },

  readSessions(){
    try{
      return JSON.parse(sessionStorage.getItem(this.sessionKey)) || {};
    }catch{
      return {};
    }
  },

  writeSessions(data){
    sessionStorage.setItem(this.sessionKey,JSON.stringify(data));
  },

  context(level,topic){
    return `${level}::${topic}`;
  },

  resetSession(level=null,topic=null){
    if(!level){
      sessionStorage.removeItem(this.sessionKey);
      return;
    }

    const sessions=this.readSessions();
    delete sessions[this.context(level,topic || "Alle")];
    this.writeSessions(sessions);
  },

  priority(item){
    const state=this.stateFor(item.id);
    const now=Date.now();

    if(!state.seen)return 80;
    if(state.due<=now)return 100+(state.wrong*6)+(state.lapses*8);
    if(state.wrong>state.correct)return 70+(state.wrong*5);
    if(state.repetitions<3)return 55;
    return Math.max(5,25-state.streak);
  },

  buildQueue(level,topic){
    const pool=this.allowed(level,topic);
    const groups={
      due:[],
      newItems:[],
      weak:[],
      learning:[],
      stable:[]
    };
    const now=Date.now();

    for(const item of pool){
      const state=this.stateFor(item.id);

      if(state.seen && state.due<=now){
        groups.due.push(item);
      }else if(!state.seen){
        groups.newItems.push(item);
      }else if(state.wrong>state.correct || state.lapses>=2){
        groups.weak.push(item);
      }else if(state.repetitions<3){
        groups.learning.push(item);
      }else{
        groups.stable.push(item);
      }
    }

    for(const key of Object.keys(groups)){
      groups[key]=this.shuffle(groups[key]).sort(
        (a,b)=>this.priority(b)-this.priority(a)
      );
    }

    const result=[];
    const used=new Set();
    const order=[
      "due","newItems","weak","learning",
      "due","newItems","stable"
    ];

    while(Object.values(groups).some(group=>group.length)){
      for(const key of order){
        const item=groups[key].shift();

        if(item && !used.has(item.id)){
          used.add(item.id);
          result.push(item.id);
        }
      }
    }

    return result;
  },

  next(level,topic="Alle"){
    const pool=this.allowed(level,topic);
    if(!pool.length)return null;

    const byId=new Map(pool.map(item=>[item.id,item]));
    const sessions=this.readSessions();
    const key=this.context(level,topic);

    const state=sessions[key] || {
      queue:[],
      recentIds:[],
      answered:0
    };

    state.queue=(state.queue || []).filter(id=>byId.has(id));

    if(!state.queue.length){
      state.queue=this.buildQueue(level,topic);
    }

    const recent=new Set((state.recentIds || []).slice(-20));
    let index=state.queue.findIndex(id=>!recent.has(id));

    if(index<0)index=0;

    const [id]=state.queue.splice(index,1);

    state.recentIds=[
      ...(state.recentIds || []),
      id
    ].slice(-40);

    state.answered=(state.answered || 0)+1;
    sessions[key]=state;
    this.writeSessions(sessions);

    return byId.get(id) || pool[0];
  },

  makeQuestion(level,topic="Alle"){
    const item=this.next(level,topic);

    if(!item){
      throw new Error("Keine Vokabeln für diese Auswahl verfügbar.");
    }

    const alternatives=this.shuffle(
      this.allowed(level,topic).filter(other=>
        other.id!==item.id &&
        String(other.de).trim().toLocaleLowerCase()!==
          String(item.de).trim().toLocaleLowerCase()
      )
    );

    const answers=[item.de];
    const used=new Set([
      String(item.de).trim().toLocaleLowerCase()
    ]);

    for(const alternative of alternatives){
      const value=String(alternative.de).trim();
      const key=value.toLocaleLowerCase();

      if(!used.has(key)){
        used.add(key);
        answers.push(value);
      }

      if(answers.length===4)break;
    }

    if(answers.length<4){
      for(const alternative of this.shuffle(ES_CONTENT.vocabulary || [])){
        if(!alternative || !alternative.de)continue;

        const value=String(alternative.de).trim();
        const key=value.toLocaleLowerCase();

        if(!used.has(key)){
          used.add(key);
          answers.push(value);
        }

        if(answers.length===4)break;
      }
    }

    return {
      item,
      answers:this.shuffle(answers)
    };
  },

  difficultWords(level,topic="Alle",limit=20){
    return this.allowed(level,topic)
      .map(item=>({item,state:this.stateFor(item.id)}))
      .filter(entry=>
        entry.state.seen &&
        (
          entry.state.wrong>entry.state.correct ||
          entry.state.lapses>0 ||
          entry.state.repetitions<3
        )
      )
      .sort((a,b)=>{
        const scoreA=
          a.state.wrong*5+
          a.state.lapses*8-
          a.state.correct;
        const scoreB=
          b.state.wrong*5+
          b.state.lapses*8-
          b.state.correct;
        return scoreB-scoreA;
      })
      .slice(0,limit)
      .map(entry=>entry.item);
  },

  dueWords(level,topic="Alle"){
    const now=Date.now();

    return this.allowed(level,topic)
      .filter(item=>{
        const state=this.stateFor(item.id);
        return state.seen && state.due<=now;
      })
      .sort((a,b)=>this.stateFor(a.id).due-this.stateFor(b.id).due);
  },

  stats(level,topic="Alle"){
    const list=this.allowed(level,topic);
    const seen=list.filter(item=>this.stateFor(item.id).seen);
    const mastered=seen.filter(item=>{
      const state=this.stateFor(item.id);
      return (
        state.repetitions>=4 &&
        state.ease>=2.1 &&
        state.wrong<=state.correct
      );
    });

    return {
      total:list.length,
      seen:seen.length,
      mastered:mastered.length,
      due:this.dueWords(level,topic).length,
      difficult:this.difficultWords(level,topic,9999).length
    };
  }
};
