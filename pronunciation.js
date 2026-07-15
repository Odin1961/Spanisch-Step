const PronunciationEngine={
  storageKey:"espanolStepPronunciation15",
  sessionKey:"espanolStepPronunciationSession15",

  recognitionClass(){
    return window.SpeechRecognition || window.webkitSpeechRecognition || null;
  },

  supported(){
    return Boolean(this.recognitionClass());
  },

  locale(){
    return profile.accent==="es-MX" ? "es-MX" : "es-ES";
  },

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

  normalize(text){
    return String(text || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g,"")
      .toLocaleLowerCase("es")
      .replace(/[¿?¡!.,;:()[\]{}"“”«»]/g," ")
      .replace(/\s+/g," ")
      .trim();
  },

  words(text){
    const value=this.normalize(text);
    return value ? value.split(" ") : [];
  },

  distance(a,b){
    const left=Array.isArray(a)?a:this.words(a);
    const right=Array.isArray(b)?b:this.words(b);
    const rows=left.length+1;
    const cols=right.length+1;
    const matrix=Array.from({length:rows},()=>Array(cols).fill(0));

    for(let i=0;i<rows;i++)matrix[i][0]=i;
    for(let j=0;j<cols;j++)matrix[0][j]=j;

    for(let i=1;i<rows;i++){
      for(let j=1;j<cols;j++){
        const cost=left[i-1]===right[j-1]?0:1;
        matrix[i][j]=Math.min(
          matrix[i-1][j]+1,
          matrix[i][j-1]+1,
          matrix[i-1][j-1]+cost
        );
      }
    }

    return matrix[left.length][right.length];
  },

  align(targetText,spokenText){
    const target=this.words(targetText);
    const spoken=this.words(spokenText);
    const rows=target.length+1;
    const cols=spoken.length+1;
    const matrix=Array.from({length:rows},()=>Array(cols).fill(0));
    const move=Array.from({length:rows},()=>Array(cols).fill(""));

    for(let i=1;i<rows;i++){
      matrix[i][0]=i;
      move[i][0]="missing";
    }
    for(let j=1;j<cols;j++){
      matrix[0][j]=j;
      move[0][j]="extra";
    }

    for(let i=1;i<rows;i++){
      for(let j=1;j<cols;j++){
        const equal=target[i-1]===spoken[j-1];
        const choices=[
          {value:matrix[i-1][j-1]+(equal?0:1),type:equal?"correct":"changed"},
          {value:matrix[i-1][j]+1,type:"missing"},
          {value:matrix[i][j-1]+1,type:"extra"}
        ].sort((a,b)=>a.value-b.value);

        matrix[i][j]=choices[0].value;
        move[i][j]=choices[0].type;
      }
    }

    const result=[];
    let i=target.length;
    let j=spoken.length;

    while(i>0 || j>0){
      const type=move[i][j];

      if(type==="correct" || type==="changed"){
        result.push({
          target:target[i-1],
          spoken:spoken[j-1],
          type
        });
        i--;
        j--;
      }else if(type==="missing"){
        result.push({
          target:target[i-1],
          spoken:"",
          type
        });
        i--;
      }else{
        result.push({
          target:"",
          spoken:spoken[j-1],
          type:"extra"
        });
        j--;
      }
    }

    return result.reverse();
  },

  evaluate(target,spoken,confidence=0){
    const targetWords=this.words(target);
    const spokenWords=this.words(spoken);
    const alignment=this.align(target,spoken);

    const correct=alignment.filter(item=>item.type==="correct").length;
    const changed=alignment.filter(item=>item.type==="changed").length;
    const missing=alignment.filter(item=>item.type==="missing").length;
    const extra=alignment.filter(item=>item.type==="extra").length;
    const denominator=Math.max(1,targetWords.length);
    const wordAccuracy=Math.max(
      0,
      Math.round((correct-(extra*0.35))/denominator*100)
    );
    const similarity=Math.max(
      0,
      Math.round(
        (1-this.distance(targetWords,spokenWords)/
          Math.max(1,targetWords.length,spokenWords.length))*100
      )
    );
    const confidenceScore=confidence
      ? Math.round(Math.max(0,Math.min(1,confidence))*100)
      : similarity;

    const score=Math.max(
      0,
      Math.min(
        100,
        Math.round(wordAccuracy*0.65+similarity*0.25+confidenceScore*0.10)
      )
    );

    return {
      score,
      correct,
      changed,
      missing,
      extra,
      wordAccuracy,
      similarity,
      confidence:confidenceScore,
      alignment,
      spoken:String(spoken || "").trim()
    };
  },

  stateFor(id){
    const all=this.load();
    return all[id] || {
      attempts:0,
      bestScore:0,
      lastScore:0,
      totalScore:0,
      mastered:false,
      lastSeen:0
    };
  },

  record(item,result){
    const all=this.load();
    const state=all[item.id] || this.stateFor(item.id);

    state.attempts++;
    state.lastScore=result.score;
    state.bestScore=Math.max(state.bestScore,result.score);
    state.totalScore+=result.score;
    state.mastered=state.bestScore>=85;
    state.lastSeen=Date.now();

    all[item.id]=state;
    this.save(all);
    return state;
  },

  phrases(level,topic="Alle"){
    const order=["A1","A2","B1","B2"];
    const max=Math.max(0,order.indexOf(level));
    const seen=new Set();
    const result=[];

    for(const item of (ES_CONTENT.vocabulary || [])){
      if(!item || !item.id || order.indexOf(item.level)>max)continue;
      if(topic!=="Alle" && item.topic!==topic)continue;

      const candidates=[
        item.example,
        item.en && String(item.en).split(/\s+/).length>=3 ? item.en : null
      ].filter(Boolean);

      for(const phrase of candidates){
        const normalized=this.normalize(phrase);
        const wordCount=this.words(phrase).length;

        if(wordCount<2 || wordCount>18 || seen.has(normalized))continue;
        seen.add(normalized);

        result.push({
          id:`pron-${item.id}-${result.length}`,
          text:String(phrase).trim(),
          de:item.de,
          topic:item.topic,
          level:item.level,
          sourceId:item.id
        });
      }
    }

    return result;
  },

  topics(level){
    return [
      "Alle",
      ...new Set(this.phrases(level).map(item=>item.topic).filter(Boolean))
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

  readSession(){
    try{
      return JSON.parse(sessionStorage.getItem(this.sessionKey)) || {};
    }catch{
      return {};
    }
  },

  saveSession(session){
    sessionStorage.setItem(this.sessionKey,JSON.stringify(session));
  },

  resetSession(){
    sessionStorage.removeItem(this.sessionKey);
  },

  next(level,topic="Alle"){
    const list=this.phrases(level,topic);
    if(!list.length)return null;

    const byId=new Map(list.map(item=>[item.id,item]));
    const session=this.readSession();
    session.queue=(session.queue || []).filter(id=>byId.has(id));
    session.recent=(session.recent || []).filter(id=>byId.has(id)).slice(-15);

    if(!session.queue.length){
      const weak=[];
      const newItems=[];
      const secure=[];

      for(const item of list){
        const state=this.stateFor(item.id);
        if(!state.attempts)newItems.push(item);
        else if(state.bestScore<85)weak.push(item);
        else secure.push(item);
      }

      session.queue=[
        ...this.shuffle(weak),
        ...this.shuffle(newItems),
        ...this.shuffle(secure)
      ].map(item=>item.id);
    }

    const recent=new Set(session.recent);
    let index=session.queue.findIndex(id=>!recent.has(id));
    if(index<0)index=0;

    const [id]=session.queue.splice(index,1);
    session.recent=[...session.recent,id].slice(-15);
    this.saveSession(session);

    return byId.get(id) || list[0];
  },

  stats(level,topic="Alle"){
    const list=this.phrases(level,topic);
    let practiced=0;
    let mastered=0;
    let totalScore=0;
    let attempts=0;

    for(const item of list){
      const state=this.stateFor(item.id);
      if(state.attempts){
        practiced++;
        totalScore+=state.totalScore;
        attempts+=state.attempts;
      }
      if(state.mastered)mastered++;
    }

    return {
      total:list.length,
      practiced,
      mastered,
      average:attempts?Math.round(totalScore/attempts):0
    };
  }
};
