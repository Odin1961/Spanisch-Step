const CoachEngine={
  key:"espanolStepCoach19",
  defaultDailyMinutes:15,

  emptyState(){
    return {
      recent:[],
      counts:{
        vocab:0,
        grammar:0,
        dialogue:0,
        pronunciation:0,
        translation:0
      },
      performance:{
        vocab:{correct:0,wrong:0,totalScore:0,scoreAttempts:0},
        grammar:{correct:0,wrong:0,totalScore:0,scoreAttempts:0},
        dialogue:{correct:0,wrong:0,totalScore:0,scoreAttempts:0},
        pronunciation:{correct:0,wrong:0,totalScore:0,scoreAttempts:0},
        translation:{correct:0,wrong:0,totalScore:0,scoreAttempts:0}
      },
      dailyMinutes:this.defaultDailyMinutes,
      sessions:[],
      activePlan:null,
      lastStudyDate:null,
      streakDays:0,
      completedDays:0
    };
  },

  load(){
    try{
      const saved=JSON.parse(localStorage.getItem(this.key));
      const base=this.emptyState();

      if(!saved)return base;

      return {
        ...base,
        ...saved,
        counts:{...base.counts,...(saved.counts||{})},
        performance:{
          vocab:{...base.performance.vocab,...(saved.performance?.vocab||{})},
          grammar:{...base.performance.grammar,...(saved.performance?.grammar||{})},
          dialogue:{...base.performance.dialogue,...(saved.performance?.dialogue||{})},
          pronunciation:{...base.performance.pronunciation,...(saved.performance?.pronunciation||{})},
          translation:{...base.performance.translation,...(saved.performance?.translation||{})}
        }
      };
    }catch{
      return this.emptyState();
    }
  },

  save(state){
    localStorage.setItem(this.key,JSON.stringify(state));
  },

  dateKey(date=new Date()){
    const year=date.getFullYear();
    const month=String(date.getMonth()+1).padStart(2,"0");
    const day=String(date.getDate()).padStart(2,"0");
    return `${year}-${month}-${day}`;
  },

  updateStreak(state){
    const today=this.dateKey();
    if(state.lastStudyDate===today)return;

    const yesterday=new Date();
    yesterday.setDate(yesterday.getDate()-1);
    const yesterdayKey=this.dateKey(yesterday);

    state.streakDays=state.lastStudyDate===yesterdayKey
      ? (state.streakDays||0)+1
      : 1;

    state.lastStudyDate=today;
  },

  accuracy(mode,state=this.load()){
    const row=state.performance[mode]||{correct:0,wrong:0};
    const total=row.correct+row.wrong;
    return total?Math.round(row.correct/total*100):0;
  },

  averageScore(mode,state=this.load()){
    const row=state.performance[mode]||{};
    return row.scoreAttempts
      ? Math.round(row.totalScore/row.scoreAttempts)
      : 0;
  },

  recencyPenalty(mode,state=this.load()){
    const recent=(state.recent||[]).slice(-5);
    let penalty=0;

    recent.forEach((entry,index)=>{
      if(entry===mode){
        penalty+=(index===recent.length-1?25:8);
      }
    });

    return penalty;
  },

  weaknesses(profile){
    const state=this.load();
    const vocab=VocabularyEngine.stats(profile.level);
    const grammar=GrammarEngine.stats(profile.level);
    const pronunciation=PronunciationEngine.stats(profile.level);
    const grammarTopics=GrammarEngine.topicStats(profile.level);

    const weakestGrammar=grammarTopics
      .filter(topic=>topic.practiced>0)
      .sort((a,b)=>{
        const score=row=>
          (100-row.accuracy)+
          (row.total-row.mastered)*2+
          Math.max(0,row.wrong-row.correct)*3;
        return score(b)-score(a);
      })[0]||null;

    const dialogueAccuracy=this.accuracy("dialogue",state);
    const translationAccuracy=this.accuracy("translation",state);
    const pronunciationAverage=pronunciation.average||this.averageScore("pronunciation",state);

    const rows=[
      {
        mode:"vocab",
        label:"Vokabeln",
        score:
          vocab.due*6+
          vocab.difficult*4+
          Math.max(0,75-this.accuracy("vocab",state))-
          this.recencyPenalty("vocab",state),
        detail:vocab.due
          ? `${vocab.due} Wiederholungen sind fällig`
          : `${vocab.difficult} schwierige Wörter`,
        urgency:vocab.due>0?3:vocab.difficult>0?2:1
      },
      {
        mode:"grammar",
        label:"Grammatik",
        score:
          grammar.difficult*5+
          Math.max(0,80-grammar.accuracy)+
          (weakestGrammar?Math.max(0,70-weakestGrammar.accuracy):0)-
          this.recencyPenalty("grammar",state),
        detail:weakestGrammar
          ? `Schwerpunkt: ${weakestGrammar.topic} (${weakestGrammar.accuracy}% richtig)`
          : `${grammar.difficult} schwierige Aufgaben`,
        urgency:grammar.difficult>10?3:grammar.difficult>0?2:1
      },
      {
        mode:"pronunciation",
        label:"Aussprache",
        score:
          (pronunciation.practiced?Math.max(0,88-pronunciationAverage):78)-
          this.recencyPenalty("pronunciation",state),
        detail:pronunciation.practiced
          ? `Durchschnitt bisher: ${pronunciationAverage}%`
          : "Aussprache wurde noch nicht trainiert",
        urgency:pronunciation.practiced?2:3
      },
      {
        mode:"dialogue",
        label:"Gespräche",
        score:
          Math.max(28,78-(state.counts.dialogue||0)*2)+
          Math.max(0,70-dialogueAccuracy)-
          this.recencyPenalty("dialogue",state),
        detail:(state.counts.dialogue||0)
          ? `${state.counts.dialogue} Gesprächsrunden · ${dialogueAccuracy}% sicher`
          : "Freies Sprechen wurde noch nicht trainiert",
        urgency:(state.counts.dialogue||0)<3?3:2
      },
      {
        mode:"translation",
        label:"Übersetzen",
        score:
          Math.max(20,82-translationAccuracy)+
          Math.max(0,10-(state.counts.translation||0))-
          this.recencyPenalty("translation",state),
        detail:(state.counts.translation||0)
          ? `${translationAccuracy}% Trefferquote`
          : "Übersetzungen wurden noch nicht trainiert",
        urgency:(state.counts.translation||0)<3?2:1
      }
    ];

    return rows.sort((a,b)=>{
      if(b.urgency!==a.urgency)return b.urgency-a.urgency;
      return b.score-a.score;
    });
  },

  recommendations(profile){
    return this.weaknesses(profile).slice(0,4).map(item=>{
      const map={
        vocab:{
          title:"Vokabeln gezielt wiederholen",
          action:"Fällige und schwierige Wörter trainieren"
        },
        grammar:{
          title:"Grammatikschwerpunkt festigen",
          action:"Schwache Themen mit Erklärungen wiederholen"
        },
        pronunciation:{
          title:"Aussprache verbessern",
          action:"Sätze aufnehmen und Wortauswertung nutzen"
        },
        dialogue:{
          title:"Aktiv Spanisch sprechen",
          action:"Ein längeres Gespräch bis zum Ende führen"
        },
        translation:{
          title:"Sätze selbst formulieren",
          action:"Übersetzungen für Satzbau und Wortschatz nutzen"
        }
      }[item.mode];

      return {
        mode:item.mode,
        title:map.title,
        text:`${item.detail}. ${map.action}.`,
        urgency:item.urgency,
        score:item.score
      };
    });
  },

  modeQuota(minutes){
    if(minutes<=5)return 3;
    if(minutes<=10)return 5;
    if(minutes<=15)return 7;
    if(minutes<=20)return 9;
    if(minutes<=30)return 12;
    return 16;
  },

  buildPlan(profile,minutes=null){
    const state=this.load();
    const duration=Math.max(
      5,
      Math.min(60,Number(minutes)||state.dailyMinutes||this.defaultDailyMinutes)
    );

    const taskCount=this.modeQuota(duration);
    const weaknesses=this.weaknesses(profile);
    const required=["vocab","grammar","pronunciation","dialogue"];
    const tasks=[];

    for(const mode of required){
      if(tasks.length<taskCount)tasks.push(mode);
    }

    const weighted=[];
    weaknesses.forEach((entry,index)=>{
      const base=Math.max(1,6-index);
      const bonus=entry.urgency===3?3:entry.urgency===2?1:0;
      for(let i=0;i<base+bonus;i++)weighted.push(entry.mode);
    });

    let cursor=0;
    while(tasks.length<taskCount){
      const candidate=weighted[cursor%weighted.length]||"vocab";
      const last=tasks[tasks.length-1];
      const beforeLast=tasks[tasks.length-2];

      if(candidate===last && candidate===beforeLast){
        const alternative=weaknesses
          .map(entry=>entry.mode)
          .find(mode=>mode!==last) || "dialogue";
        tasks.push(alternative);
      }else{
        tasks.push(candidate);
      }

      cursor++;
    }

    const reordered=[];
    const remaining=[...tasks];

    while(remaining.length){
      const last=reordered[reordered.length-1];
      let index=remaining.findIndex(mode=>mode!==last);
      if(index<0)index=0;
      reordered.push(remaining.splice(index,1)[0]);
    }

    const plan={
      id:`plan-${Date.now()}`,
      date:this.dateKey(),
      minutes:duration,
      tasks:reordered,
      cursor:0,
      completed:0,
      correct:0,
      points:0,
      startedAt:0,
      focus:weaknesses.slice(0,3).map(item=>item.mode)
    };

    state.dailyMinutes=duration;
    state.activePlan=plan;
    this.save(state);
    return plan;
  },

  getPlan(profile){
    const state=this.load();
    const plan=state.activePlan;

    if(
      !plan ||
      plan.date!==this.dateKey() ||
      !Array.isArray(plan.tasks) ||
      !plan.tasks.length
    ){
      return this.buildPlan(profile,state.dailyMinutes);
    }

    return plan;
  },

  startPlan(profile,minutes=null){
    const state=this.load();
    let plan=minutes
      ? this.buildPlan(profile,minutes)
      : this.getPlan(profile);

    if(plan.cursor>=plan.tasks.length){
      plan=this.buildPlan(profile,minutes||state.dailyMinutes);
    }

    plan.startedAt=Date.now();
    state.activePlan=plan;
    this.updateStreak(state);
    this.save(state);
    return plan;
  },

  next(profile){
    const state=this.load();
    let plan=this.getPlan(profile);

    if(plan.cursor>=plan.tasks.length){
      plan=this.buildPlan(profile,state.dailyMinutes);
    }

    let mode=plan.tasks[plan.cursor]||"vocab";
    const recent=(state.recent||[]).slice(-2);

    if(recent.includes(mode)){
      const swapIndex=plan.tasks.findIndex(
        (entry,index)=>index>plan.cursor && !recent.includes(entry)
      );

      if(swapIndex>plan.cursor){
        const nextMode=plan.tasks[swapIndex];
        plan.tasks[swapIndex]=mode;
        mode=nextMode;
      }
    }

    plan.cursor++;
    state.activePlan=plan;
    state.recent=[...(state.recent||[]),mode].slice(-8);
    state.counts[mode]=(state.counts[mode]||0)+1;
    this.save(state);

    return mode;
  },

  record(mode,correct,score=null){
    const state=this.load();
    const row=state.performance[mode]||{
      correct:0,wrong:0,totalScore:0,scoreAttempts:0
    };

    if(correct)row.correct++;
    else row.wrong++;

    if(score!==null && Number.isFinite(Number(score))){
      row.totalScore=(row.totalScore||0)+Number(score);
      row.scoreAttempts=(row.scoreAttempts||0)+1;
    }

    state.performance[mode]=row;

    if(state.activePlan){
      state.activePlan.completed=(state.activePlan.completed||0)+1;
      if(correct)state.activePlan.correct=(state.activePlan.correct||0)+1;
      state.activePlan.points=(state.activePlan.points||0)+(correct?10:3);
    }

    this.updateStreak(state);
    this.save(state);
  },

  finishSession(summary={}){
    const state=this.load();
    const plan=state.activePlan||{};
    const taskCount=Array.isArray(plan.tasks)?plan.tasks.length:0;
    const completed=Math.min(Number(plan.completed)||0,taskCount);
    const finished=taskCount>0 && completed>=taskCount;

    const session={
      date:this.dateKey(),
      minutes:Number(summary.minutes)||0,
      answered:Number(summary.answered)||0,
      correct:Number(summary.correct)||0,
      points:Number(summary.points)||0,
      planCompleted:completed,
      taskCount,
      finished
    };

    state.sessions=[session,...(state.sessions||[])].slice(0,90);
    if(finished)state.completedDays=(state.completedDays||0)+1;

    state.activePlan={
      ...plan,
      startedAt:0
    };

    this.updateStreak(state);
    this.save(state);
    return session;
  },

  weeklySummary(){
    const state=this.load();
    const lastSeven=(state.sessions||[]).slice(0,7);
    const answered=lastSeven.reduce((sum,row)=>sum+(row.answered||0),0);
    const correct=lastSeven.reduce((sum,row)=>sum+(row.correct||0),0);
    const minutes=lastSeven.reduce((sum,row)=>sum+(row.minutes||0),0);

    return {
      sessions:lastSeven.length,
      answered,
      minutes,
      accuracy:answered?Math.round(correct/answered*100):0
    };
  },

  stats(){
    const state=this.load();
    return {
      ...state.counts,
      streakDays:state.streakDays||0,
      dailyMinutes:state.dailyMinutes||this.defaultDailyMinutes,
      sessions:(state.sessions||[]).length,
      completedDays:state.completedDays||0
    };
  },

  reset(){
    localStorage.removeItem(this.key);
  }
};
