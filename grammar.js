const GrammarEngine={
  storageKey:"espanolStepGrammar14",
  sessionKey:"espanolStepGrammarSession14",

  load(){
    try{return JSON.parse(localStorage.getItem(this.storageKey))||{}}
    catch{return {}}
  },

  save(data){
    localStorage.setItem(this.storageKey,JSON.stringify(data))
  },

  allForLevel(level){
    const order=["A1","A2","B1","B2"];
    const max=Math.max(0,order.indexOf(level));
    const ids=new Set();

    return order
      .filter((_,index)=>index<=max)
      .flatMap(current=>(ES_GRAMMAR[current]||[]).map(item=>({
        ...item,
        level:item.level||current
      })))
      .filter(item=>{
        if(
          !item || !item.id || !item.prompt || !item.answer ||
          !Array.isArray(item.choices) || item.choices.length<2
        )return false;
        if(!item.choices.includes(item.answer))return false;
        if(ids.has(item.id))return false;
        ids.add(item.id);
        return true
      })
  },

  stateFor(id){
    const all=this.load();
    return all[id]||{
      correct:0,wrong:0,streak:0,mastery:0,
      lastSeen:0,due:0,intervalDays:0,topic:null
    }
  },

  update(item,correct){
    const all=this.load();
    const state=all[item.id]||this.stateFor(item.id);
    const now=Date.now();

    state.lastSeen=now;
    state.topic=item.topic||"Allgemein";

    if(correct){
      state.correct++;
      state.streak++;
      state.mastery=Math.min(5,state.mastery+1);
      state.intervalDays=[0,1,3,7,14,30][state.mastery]||30;
      state.due=now+state.intervalDays*86400000
    }else{
      state.wrong++;
      state.streak=0;
      state.mastery=Math.max(0,state.mastery-1);
      state.intervalDays=0;
      state.due=now+10*60*1000
    }

    all[item.id]=state;
    this.save(all);
    return state
  },

  mark(id,correct){
    const item=this.allForLevel("B2").find(entry=>entry.id===id);
    return item?this.update(item,correct):null
  },

  topics(level){
    return [
      "Alle",
      ...new Set(this.allForLevel(level).map(item=>item.topic).filter(Boolean))
    ].sort()
  },

  shuffle(items){
    const result=[...items];
    for(let i=result.length-1;i>0;i--){
      const j=Math.floor(Math.random()*(i+1));
      [result[i],result[j]]=[result[j],result[i]]
    }
    return result
  },

  readSessions(){
    try{return JSON.parse(sessionStorage.getItem(this.sessionKey))||{}}
    catch{return {}}
  },

  writeSessions(data){
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
    const sessions=this.readSessions();
    delete sessions[this.context(level,topic||"Alle")];
    this.writeSessions(sessions)
  },

  pool(level,topic="Alle"){
    const all=this.allForLevel(level);
    if(topic==="Alle")return all;
    const filtered=all.filter(item=>item.topic===topic);
    return filtered.length?filtered:all
  },

  priority(item){
    const state=this.stateFor(item.id);
    const attempts=state.correct+state.wrong;
    const now=Date.now();

    if(attempts===0)return 80;
    if(state.due<=now)return 100+state.wrong*8;
    if(state.wrong>state.correct)return 75+state.wrong*6;
    if(state.mastery<3)return 55;
    return Math.max(5,30-state.streak)
  },

  buildQueue(level,topic){
    const groups={due:[],newItems:[],weak:[],learning:[],stable:[]};
    const now=Date.now();

    for(const item of this.pool(level,topic)){
      const state=this.stateFor(item.id);
      const attempts=state.correct+state.wrong;

      if(attempts>0&&state.due<=now)groups.due.push(item);
      else if(attempts===0)groups.newItems.push(item);
      else if(state.wrong>state.correct)groups.weak.push(item);
      else if(state.mastery<3)groups.learning.push(item);
      else groups.stable.push(item)
    }

    for(const key of Object.keys(groups)){
      groups[key]=this.shuffle(groups[key]).sort(
        (a,b)=>this.priority(b)-this.priority(a)
      )
    }

    const result=[];
    const used=new Set();
    const order=["due","newItems","weak","learning","due","newItems","stable"];

    while(Object.values(groups).some(group=>group.length)){
      for(const key of order){
        const item=groups[key].shift();
        if(item&&!used.has(item.id)){
          used.add(item.id);
          result.push(item.id)
        }
      }
    }
    return result
  },

  next(level,topic="Alle"){
    const items=this.pool(level,topic);
    if(!items.length)return null;

    const byId=new Map(items.map(item=>[item.id,item]));
    const sessions=this.readSessions();
    const effectiveTopic=topic!=="Alle"&&items.some(i=>i.topic===topic)
      ?topic:"Alle";
    const key=this.context(level,effectiveTopic);
    const state=sessions[key]||{queue:[],recentIds:[],answered:0};

    state.queue=(state.queue||[]).filter(id=>byId.has(id));
    if(!state.queue.length)state.queue=this.buildQueue(level,effectiveTopic);

    const recent=new Set((state.recentIds||[]).slice(-15));
    let index=state.queue.findIndex(id=>!recent.has(id));
    if(index<0)index=0;

    const [id]=state.queue.splice(index,1);
    state.recentIds=[...(state.recentIds||[]),id].slice(-30);
    state.answered=(state.answered||0)+1;
    sessions[key]=state;
    this.writeSessions(sessions);

    return byId.get(id)||items[0]
  },

  difficultItems(level,topic="Alle",limit=20){
    return this.pool(level,topic)
      .map(item=>({item,state:this.stateFor(item.id)}))
      .filter(entry=>
        entry.state.correct+entry.state.wrong>0 &&
        (entry.state.wrong>entry.state.correct||entry.state.mastery<3)
      )
      .sort((a,b)=>{
        const score=e=>e.state.wrong*6-e.state.correct+
          (3-e.state.mastery)*4;
        return score(b)-score(a)
      })
      .slice(0,limit)
      .map(entry=>entry.item)
  },

  topicStats(level){
    const map=new Map();

    for(const item of this.allForLevel(level)){
      const topic=item.topic||"Allgemein";
      if(!map.has(topic)){
        map.set(topic,{
          topic,total:0,practiced:0,correct:0,wrong:0,mastered:0
        })
      }

      const row=map.get(topic);
      const state=this.stateFor(item.id);
      row.total++;
      row.correct+=state.correct;
      row.wrong+=state.wrong;
      if(state.correct+state.wrong>0)row.practiced++;
      if(state.mastery>=4)row.mastered++
    }

    return [...map.values()].map(row=>({
      ...row,
      accuracy:row.correct+row.wrong
        ?Math.round(row.correct/(row.correct+row.wrong)*100):0
    })).sort((a,b)=>{
      const weakness=row=>(row.total-row.mastered)+row.wrong-row.correct;
      return weakness(b)-weakness(a)
    })
  },

  stats(level,topic="Alle"){
    const items=this.pool(level,topic);
    let practiced=0,mastered=0,correct=0,wrong=0;

    for(const item of items){
      const state=this.stateFor(item.id);
      correct+=state.correct;
      wrong+=state.wrong;
      if(state.correct+state.wrong>0)practiced++;
      if(state.mastery>=4)mastered++
    }

    return {
      total:items.length,
      practiced,
      mastered,
      difficult:this.difficultItems(level,topic,9999).length,
      accuracy:correct+wrong?Math.round(correct/(correct+wrong)*100):0
    }
  }
};
