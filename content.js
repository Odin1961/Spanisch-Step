const ES_CONTENT = {
  vocabulary: [
    {id:"coffee",en:"coffee",de:"Kaffee",topic:"Restaurant",level:"A1",example:"I would like a coffee, please."},
    {id:"tea",en:"tea",de:"Tee",topic:"Restaurant",level:"A1",example:"Would you like tea or coffee?"},
    {id:"water",en:"water",de:"Wasser",topic:"Restaurant",level:"A1",example:"Could I have some water?"},
    {id:"bread",en:"bread",de:"Brot",topic:"Restaurant",level:"A1",example:"The bread is fresh."},
    {id:"menu",en:"menu",de:"Speisekarte",topic:"Restaurant",level:"A1",example:"Could I see the menu?"},
    {id:"bill",en:"bill",de:"Rechnung",topic:"Restaurant",level:"A1",example:"Could I have the bill, please?"},
    {id:"receipt",en:"receipt",de:"Quittung",topic:"Restaurant",level:"A2",example:"Would you like a receipt?"},
    {id:"waiter",en:"waiter",de:"Kellner",topic:"Restaurant",level:"A1",example:"The waiter is very friendly."},
    {id:"table",en:"table",de:"Tisch",topic:"Restaurant",level:"A1",example:"We booked a table for two."},
    {id:"reservation",en:"reservation",de:"Reservierung",topic:"Restaurant",level:"A2",example:"I have a reservation."},
    {id:"room",en:"room",de:"Zimmer",topic:"Hotel",level:"A1",example:"The room is on the second floor."},
    {id:"key",en:"key",de:"Schl\u00fcssel",topic:"Hotel",level:"A1",example:"Here is your room key."},
    {id:"breakfast",en:"breakfast",de:"Fr\u00fchst\u00fcck",topic:"Hotel",level:"A1",example:"Breakfast is from seven to ten."},
    {id:"reception",en:"reception",de:"Rezeption",topic:"Hotel",level:"A2",example:"Please ask at reception."},
    {id:"lift",en:"lift",de:"Aufzug",topic:"Hotel",level:"A2",example:"The lift is on your left."},
    {id:"towel",en:"towel",de:"Handtuch",topic:"Hotel",level:"A2",example:"Could I have another towel?"},
    {id:"passport",en:"passport",de:"Reisepass",topic:"Reisen",level:"A1",example:"Please show me your passport."},
    {id:"ticket",en:"ticket",de:"Fahrkarte",topic:"Reisen",level:"A1",example:"I need a return ticket."},
    {id:"train",en:"train",de:"Zug",topic:"Reisen",level:"A1",example:"The train is late."},
    {id:"station",en:"station",de:"Bahnhof",topic:"Reisen",level:"A1",example:"Where is the station?"},
    {id:"platform",en:"platform",de:"Gleis",topic:"Reisen",level:"A2",example:"The train leaves from platform four."},
    {id:"airport",en:"airport",de:"Flughafen",topic:"Reisen",level:"A1",example:"The airport is outside the city."},
    {id:"plane",en:"plane",de:"Flugzeug",topic:"Reisen",level:"A1",example:"The plane leaves at noon."},
    {id:"luggage",en:"luggage",de:"Gep\u00e4ck",topic:"Reisen",level:"A2",example:"Where can I leave my luggage?"},
    {id:"departure",en:"departure",de:"Abflug",topic:"Reisen",level:"A2",example:"The departure is at eight."},
    {id:"arrival",en:"arrival",de:"Ankunft",topic:"Reisen",level:"A2",example:"The arrival time has changed."},
    {id:"street",en:"street",de:"Stra\u00dfe",topic:"Reisen",level:"A1",example:"Turn left at the next street."},
    {id:"left",en:"left",de:"links",topic:"Reisen",level:"A1",example:"The bank is on the left."},
    {id:"right",en:"right",de:"rechts",topic:"Reisen",level:"A1",example:"Turn right after the bridge."},
    {id:"straight",en:"straight",de:"geradeaus",topic:"Reisen",level:"A2",example:"Go straight for two hundred metres."},
    {id:"shop",en:"shop",de:"Gesch\u00e4ft",topic:"Einkaufen",level:"A1",example:"The shop closes at six."},
    {id:"price",en:"price",de:"Preis",topic:"Einkaufen",level:"A1",example:"What is the price?"},
    {id:"cheap",en:"cheap",de:"billig",topic:"Einkaufen",level:"A1",example:"This shirt is quite cheap."},
    {id:"expensive",en:"expensive",de:"teuer",topic:"Einkaufen",level:"A1",example:"That jacket is too expensive."},
    {id:"cash",en:"cash",de:"Bargeld",topic:"Einkaufen",level:"A1",example:"Can I pay in cash?"},
    {id:"card",en:"card",de:"Karte",topic:"Einkaufen",level:"A1",example:"Can I pay by card?"},
    {id:"size",en:"size",de:"Gr\u00f6\u00dfe",topic:"Einkaufen",level:"A2",example:"Do you have a larger size?"},
    {id:"change",en:"change",de:"Wechselgeld",topic:"Einkaufen",level:"A2",example:"Here is your change."},
    {id:"friend",en:"friend",de:"Freund",topic:"Small Talk",level:"A1",example:"My friend lives in London."},
    {id:"family",en:"family",de:"Familie",topic:"Small Talk",level:"A1",example:"I have a small family."},
    {id:"holiday",en:"holiday",de:"Urlaub",topic:"Small Talk",level:"A2",example:"Where did you go on holiday?"},
    {id:"weather",en:"weather",de:"Wetter",topic:"Small Talk",level:"A1",example:"The weather is lovely today."},
    {id:"weekend",en:"weekend",de:"Wochenende",topic:"Small Talk",level:"A1",example:"What are you doing this weekend?"},
    {id:"hobby",en:"hobby",de:"Hobby",topic:"Small Talk",level:"A1",example:"What is your favourite hobby?"},
    {id:"music",en:"music",de:"Musik",topic:"Freizeit",level:"A1",example:"I listen to music every day."},
    {id:"book",en:"book",de:"Buch",topic:"Freizeit",level:"A1",example:"This book is interesting."},
    {id:"film",en:"film",de:"Film",topic:"Freizeit",level:"A1",example:"We watched a film yesterday."},
    {id:"walk",en:"walk",de:"Spaziergang",topic:"Freizeit",level:"A1",example:"Let's go for a walk."},
    {id:"museum",en:"museum",de:"Museum",topic:"Freizeit",level:"A1",example:"The museum opens at ten."},
    {id:"sport",en:"sport",de:"Sport",topic:"Freizeit",level:"A1",example:"Do you like sport?"},
    {id:"today",en:"today",de:"heute",topic:"Alltag",level:"A1",example:"I am busy today."},
    {id:"tomorrow",en:"tomorrow",de:"morgen",topic:"Alltag",level:"A1",example:"See you tomorrow."},
    {id:"yesterday",en:"yesterday",de:"gestern",topic:"Alltag",level:"A1",example:"I was tired yesterday."},
    {id:"morning",en:"morning",de:"Morgen",topic:"Alltag",level:"A1",example:"I get up early in the morning."},
    {id:"evening",en:"evening",de:"Abend",topic:"Alltag",level:"A1",example:"We meet in the evening."},
    {id:"usually",en:"usually",de:"gew\u00f6hnlich",topic:"Alltag",level:"A2",example:"I usually walk to work."},
    {id:"sometimes",en:"sometimes",de:"manchmal",topic:"Alltag",level:"A2",example:"I sometimes cook at home."},
    {id:"always",en:"always",de:"immer",topic:"Alltag",level:"A1",example:"She is always friendly."},
    {id:"never",en:"never",de:"nie",topic:"Alltag",level:"A1",example:"I never drink coffee at night."},
    {id:"happy",en:"happy",de:"gl\u00fccklich",topic:"Gef\u00fchle",level:"A1",example:"I am happy today."},
    {id:"tired",en:"tired",de:"m\u00fcde",topic:"Gef\u00fchle",level:"A1",example:"I am very tired."},
    {id:"hungry",en:"hungry",de:"hungrig",topic:"Gef\u00fchle",level:"A1",example:"I am hungry."},
    {id:"thirsty",en:"thirsty",de:"durstig",topic:"Gef\u00fchle",level:"A1",example:"I am thirsty."},
    {id:"worried",en:"worried",de:"besorgt",topic:"Gef\u00fchle",level:"A2",example:"I am worried about the test."},
    {id:"excited",en:"excited",de:"aufgeregt",topic:"Gef\u00fchle",level:"A2",example:"We are excited about the trip."},
    {id:"doctor",en:"doctor",de:"Arzt",topic:"Gesundheit",level:"A1",example:"I need to see a doctor."},
    {id:"medicine",en:"medicine",de:"Medikament",topic:"Gesundheit",level:"A2",example:"Take this medicine twice a day."},
    {id:"pain",en:"pain",de:"Schmerz",topic:"Gesundheit",level:"A2",example:"I have a pain in my back."},
    {id:"headache",en:"headache",de:"Kopfschmerzen",topic:"Gesundheit",level:"A2",example:"I have a bad headache."},
    {id:"appointment",en:"appointment",de:"Termin",topic:"Gesundheit",level:"A2",example:"I have a doctor's appointment."},
    {id:"pharmacy",en:"pharmacy",de:"Apotheke",topic:"Gesundheit",level:"A2",example:"Is there a pharmacy nearby?"},
    {id:"help",en:"help",de:"Hilfe",topic:"Notfall",level:"A1",example:"Can you help me?"},
    {id:"police",en:"police",de:"Polizei",topic:"Notfall",level:"A1",example:"Call the police."},
    {id:"danger",en:"danger",de:"Gefahr",topic:"Notfall",level:"A2",example:"There is no danger."},
    {id:"lost",en:"lost",de:"verloren",topic:"Notfall",level:"A2",example:"I have lost my wallet."},
    {id:"phone",en:"phone",de:"Telefon",topic:"Alltag",level:"A1",example:"My phone is in my bag."},
    {id:"computer",en:"computer",de:"Computer",topic:"Beruf",level:"A1",example:"The computer is very slow."},
    {id:"meeting",en:"meeting",de:"Besprechung",topic:"Beruf",level:"A2",example:"The meeting starts at nine."},
    {id:"office",en:"office",de:"B\u00fcro",topic:"Beruf",level:"A1",example:"She works in an office."},
    {id:"email",en:"email",de:"E-Mail",topic:"Beruf",level:"A1",example:"I sent you an email."},
    {id:"colleague",en:"colleague",de:"Kollege",topic:"Beruf",level:"A2",example:"My colleague is on holiday."},
    {id:"deadline",en:"deadline",de:"Abgabetermin",topic:"Beruf",level:"B1",example:"The deadline is next Friday."},
    {id:"project",en:"project",de:"Projekt",topic:"Beruf",level:"A2",example:"The project is almost finished."},
    {id:"open",en:"open",de:"\u00f6ffnen",topic:"Alltag",level:"A1",example:"Please open the window."},
    {id:"close",en:"close",de:"schlie\u00dfen",topic:"Alltag",level:"A1",example:"Please close the door."},
    {id:"buy",en:"buy",de:"kaufen",topic:"Alltag",level:"A1",example:"I want to buy a new coat."},
    {id:"sell",en:"sell",de:"verkaufen",topic:"Alltag",level:"A2",example:"They sell fresh fruit."},
    {id:"need",en:"need",de:"brauchen",topic:"Alltag",level:"A1",example:"I need some help."},
    {id:"want",en:"want",de:"wollen",topic:"Alltag",level:"A1",example:"I want a cup of tea."},
    {id:"know",en:"know",de:"wissen",topic:"Alltag",level:"A1",example:"I do not know the answer."},
    {id:"understand",en:"understand",de:"verstehen",topic:"Alltag",level:"A1",example:"I understand the question."},
    {id:"speak",en:"speak",de:"sprechen",topic:"Alltag",level:"A1",example:"Do you speak English?"},
    {id:"listen",en:"listen",de:"zuh\u00f6ren",topic:"Alltag",level:"A1",example:"Please listen carefully."},
    {id:"learn",en:"learn",de:"lernen",topic:"Alltag",level:"A1",example:"I want to learn English."},
    {id:"thank you",en:"thank you",de:"danke",topic:"Small Talk",level:"A1",example:"Thank you for your help."},
    {id:"please",en:"please",de:"bitte",topic:"Small Talk",level:"A1",example:"A coffee, please."},
    {id:"sorry",en:"sorry",de:"Entschuldigung",topic:"Small Talk",level:"A1",example:"I am sorry."},
    {id:"welcome",en:"welcome",de:"willkommen",topic:"Small Talk",level:"A1",example:"Welcome to our hotel."},
    {id:"friendly",en:"friendly",de:"freundlich",topic:"Small Talk",level:"A2",example:"The staff were very friendly."},
    {id:"reliable",en:"reliable",de:"zuverl\u00e4ssig",topic:"Beruf",level:"B2",example:"She is a reliable colleague."}
  ],
  grammar: [
    {id:"be",level:"A1",title:"to be",prompt:"I ___ from Germany.",answer:"am",choices:["am","is","are","be"]},
    {id:"present3",level:"A2",title:"Simple Present",prompt:"She ___ to work every day.",answer:"goes",choices:["go","goes","going","gone"]},
    {id:"past",level:"A2",title:"Simple Past",prompt:"Yesterday, I ___ a book.",answer:"read",choices:["read","reads","reading","am read"]},
    {id:"since",level:"B1",title:"Present Perfect",prompt:"I have lived here ___ 2020.",answer:"since",choices:["for","since","during","from"]}
  ],
  dialogues: [
    {id:"cafe1",topic:"Restaurant",level:"A1",bot:"Good morning. What would you like to drink?",de:"Guten Morgen. Was möchten Sie trinken?",answers:["I would like a coffee, please.","Can I have some tea, please?"]},
    {id:"hotel1",topic:"Hotel",level:"A2",bot:"Hello. Do you have a reservation?",de:"Hallo. Haben Sie eine Reservierung?",answers:["Yes, I have a reservation.","No. Do you have a free room?"]},
    {id:"travel1",topic:"Reisen",level:"A2",bot:"Where would you like to go?",de:"Wohin möchten Sie fahren?",answers:["To the city centre, please.","To the main station, please."]}
  ]
};


const ES_DIALOGUES = {
  Restaurant: {
    title: "Restaurant",
    intro: [
      {en:"Good evening. Do you have a reservation?", de:"Guten Abend. Haben Sie eine Reservierung?"},
      {en:"Welcome. Would you like a table inside or outside?", de:"Willkommen. Möchten Sie drinnen oder draußen sitzen?"},
      {en:"Good evening. How many people are in your party?", de:"Guten Abend. Für wie viele Personen?"}
    ],
    steps: [
      {
        bot:[
          {en:"Here is the menu. Would you like something to drink first?",de:"Hier ist die Speisekarte. Möchten Sie zuerst etwas trinken?"},
          {en:"Can I bring you something to drink?",de:"Kann ich Ihnen etwas zu trinken bringen?"}
        ],
        replies:[
          {en:"I would like a glass of water, please.",de:"Ich hätte gerne ein Glas Wasser, bitte.",tags:["water"]},
          {en:"A coffee, please.",de:"Einen Kaffee, bitte.",tags:["coffee"]},
          {en:"Could I have some tea, please?",de:"Könnte ich bitte einen Tee bekommen?",tags:["tea"]}
        ]
      },
      {
        bot:[
          {en:"Are you ready to order?",de:"Sind Sie bereit zu bestellen?"},
          {en:"Would you like to hear today's special?",de:"Möchten Sie das Tagesgericht hören?"}
        ],
        replies:[
          {en:"Yes, I would like the soup and the fish.",de:"Ja, ich hätte gerne die Suppe und den Fisch.",tags:["menu"]},
          {en:"Could I have a few more minutes, please?",de:"Könnte ich bitte noch ein paar Minuten haben?",tags:["menu"]},
          {en:"What do you recommend?",de:"Was empfehlen Sie?",tags:["menu"]}
        ]
      },
      {
        bot:[
          {en:"Would you like anything else?",de:"Möchten Sie noch etwas?"},
          {en:"Would you like dessert or coffee?",de:"Möchten Sie ein Dessert oder Kaffee?"}
        ],
        replies:[
          {en:"No, thank you. Could I have the bill, please?",de:"Nein, danke. Könnte ich bitte die Rechnung bekommen?",tags:["bill"]},
          {en:"Yes, I would like a coffee.",de:"Ja, ich hätte gerne einen Kaffee.",tags:["coffee"]},
          {en:"Could I see the dessert menu?",de:"Könnte ich die Dessertkarte sehen?",tags:["menu"]}
        ]
      },
      {
        bot:[
          {en:"Certainly. Would you like to pay by cash or card?",de:"Natürlich. Möchten Sie bar oder mit Karte bezahlen?"},
          {en:"Here is your bill. Do you need a receipt?",de:"Hier ist Ihre Rechnung. Brauchen Sie eine Quittung?"}
        ],
        replies:[
          {en:"By card, please.",de:"Mit Karte, bitte.",tags:["card"]},
          {en:"I will pay in cash.",de:"Ich bezahle bar.",tags:["cash"]},
          {en:"Yes, I would like a receipt, please.",de:"Ja, ich hätte gerne eine Quittung, bitte.",tags:["receipt"]}
        ]
      }
    ]
  },

  Hotel: {
    title: "Hotel",
    intro: [
      {en:"Welcome to the Grand Hotel. How can I help you?",de:"Willkommen im Grand Hotel. Wie kann ich Ihnen helfen?"},
      {en:"Good afternoon. Do you have a reservation?",de:"Guten Tag. Haben Sie eine Reservierung?"},
      {en:"Hello. Are you checking in?",de:"Hallo. Möchten Sie einchecken?"}
    ],
    steps: [
      {
        bot:[
          {en:"May I have your name and passport, please?",de:"Darf ich bitte Ihren Namen und Reisepass haben?"},
          {en:"Could you show me your passport, please?",de:"Könnten Sie mir bitte Ihren Reisepass zeigen?"}
        ],
        replies:[
          {en:"Yes, of course. Here is my passport.",de:"Ja, natürlich. Hier ist mein Reisepass.",tags:["passport"]},
          {en:"The reservation is under Hofmann.",de:"Die Reservierung läuft auf den Namen Hofmann.",tags:["reservation"]}
        ]
      },
      {
        bot:[
          {en:"Your room is on the third floor.",de:"Ihr Zimmer ist im dritten Stock."},
          {en:"Here is your room key.",de:"Hier ist Ihr Zimmerschlüssel."}
        ],
        replies:[
          {en:"Thank you. Where is the lift?",de:"Danke. Wo ist der Aufzug?",tags:["lift"]},
          {en:"Thank you. What time is breakfast?",de:"Danke. Wann gibt es Frühstück?",tags:["breakfast"]}
        ]
      },
      {
        bot:[
          {en:"Breakfast is from seven to ten.",de:"Frühstück gibt es von sieben bis zehn."},
          {en:"The lift is just around the corner.",de:"Der Aufzug ist gleich um die Ecke."}
        ],
        replies:[
          {en:"Thank you very much.",de:"Vielen Dank.",tags:["breakfast"]},
          {en:"Could I have another towel later?",de:"Könnte ich später ein weiteres Handtuch bekommen?",tags:["towel"]}
        ]
      }
    ]
  },

  Reisen: {
    title: "Reisen",
    intro: [
      {en:"Hello. Where would you like to go?",de:"Hallo. Wohin möchten Sie fahren?"},
      {en:"Good morning. Can I help you with a ticket?",de:"Guten Morgen. Kann ich Ihnen mit einer Fahrkarte helfen?"},
      {en:"Where are you travelling today?",de:"Wohin reisen Sie heute?"}
    ],
    steps: [
      {
        bot:[
          {en:"Would you like a single or a return ticket?",de:"Möchten Sie eine einfache Fahrt oder Hin- und Rückfahrt?"},
          {en:"What time would you like to travel?",de:"Wann möchten Sie reisen?"}
        ],
        replies:[
          {en:"A return ticket, please.",de:"Eine Hin- und Rückfahrkarte, bitte.",tags:["ticket"]},
          {en:"I would like to travel this afternoon.",de:"Ich möchte heute Nachmittag reisen.",tags:["ticket"]}
        ]
      },
      {
        bot:[
          {en:"The next train leaves at three thirty.",de:"Der nächste Zug fährt um halb vier."},
          {en:"Your train leaves from platform six.",de:"Ihr Zug fährt von Gleis sechs ab."}
        ],
        replies:[
          {en:"Thank you. Where is platform six?",de:"Danke. Wo ist Gleis sechs?",tags:["platform"]},
          {en:"Is the train on time?",de:"Ist der Zug pünktlich?",tags:["train"]}
        ]
      },
      {
        bot:[
          {en:"Go straight and then turn left.",de:"Gehen Sie geradeaus und biegen Sie dann links ab."},
          {en:"Yes, the train is on time.",de:"Ja, der Zug ist pünktlich."}
        ],
        replies:[
          {en:"Thank you for your help.",de:"Danke für Ihre Hilfe.",tags:["left","help"]},
          {en:"Great, thank you.",de:"Großartig, danke.",tags:["train"]}
        ]
      }
    ]
  },

  SmallTalk: {
    title: "Small Talk",
    intro: [
      {en:"Hi! How are you today?",de:"Hallo! Wie geht es Ihnen heute?"},
      {en:"Hello. Nice weather today, isn't it?",de:"Hallo. Schönes Wetter heute, nicht wahr?"},
      {en:"Hi. Is this your first time here?",de:"Hallo. Sind Sie zum ersten Mal hier?"}
    ],
    steps: [
      {
        bot:[
          {en:"What do you like to do in your free time?",de:"Was machen Sie gerne in Ihrer Freizeit?"},
          {en:"Do you have any hobbies?",de:"Haben Sie Hobbys?"}
        ],
        replies:[
          {en:"I like reading and listening to music.",de:"Ich lese gerne und höre Musik.",tags:["book","music"]},
          {en:"I enjoy sport and going for walks.",de:"Ich mag Sport und gehe gerne spazieren.",tags:["sport","walk"]}
        ]
      },
      {
        bot:[
          {en:"That sounds interesting. Do you travel often?",de:"Das klingt interessant. Reisen Sie oft?"},
          {en:"What did you do last weekend?",de:"Was haben Sie letztes Wochenende gemacht?"}
        ],
        replies:[
          {en:"Yes, I like travelling very much.",de:"Ja, ich reise sehr gerne.",tags:["holiday"]},
          {en:"I visited a museum and watched a film.",de:"Ich habe ein Museum besucht und einen Film gesehen.",tags:["museum","film"]}
        ]
      },
      {
        bot:[
          {en:"It was nice talking to you.",de:"Es war schön, mit Ihnen zu sprechen."},
          {en:"I hope you have a lovely day.",de:"Ich wünsche Ihnen einen schönen Tag."}
        ],
        replies:[
          {en:"It was nice talking to you too.",de:"Es war auch schön, mit Ihnen zu sprechen.",tags:["friendly"]},
          {en:"Thank you. You too!",de:"Danke. Ihnen auch!",tags:["thank you"]}
        ]
      }
    ]
  }
};


const ES_GRAMMAR = {
  A1: [
    {
      id:"a1_be_1",
      topic:"to be",
      explanation:"Mit I verwendet man am, mit he/she/it is und mit you/we/they are.",
      prompt:"I ___ from Germany.",
      answer:"am",
      choices:["am","is","are","be"]
    },
    {
      id:"a1_be_2",
      topic:"to be",
      explanation:"He, she und it stehen mit is.",
      prompt:"She ___ very friendly.",
      answer:"is",
      choices:["am","is","are","be"]
    },
    {
      id:"a1_have_1",
      topic:"have / has",
      explanation:"Mit he, she und it verwendet man has.",
      prompt:"He ___ a reservation.",
      answer:"has",
      choices:["have","has","having","had"]
    },
    {
      id:"a1_present_1",
      topic:"Simple Present",
      explanation:"Bei I, you, we und they bleibt das Verb in der Grundform.",
      prompt:"They ___ in London.",
      answer:"live",
      choices:["live","lives","living","lived"]
    },
    {
      id:"a1_question_1",
      topic:"Fragen",
      explanation:"Fragen im Simple Present beginnen häufig mit do oder does.",
      prompt:"___ you speak English?",
      answer:"Do",
      choices:["Do","Does","Are","Is"]
    }
  ],

  A2: [
    {
      id:"a2_present_1",
      topic:"Simple Present",
      explanation:"Bei he, she und it bekommt das Verb meistens ein -s.",
      prompt:"She ___ to work every day.",
      answer:"goes",
      choices:["go","goes","going","gone"]
    },
    {
      id:"a2_past_1",
      topic:"Simple Past",
      explanation:"Das Simple Past beschreibt abgeschlossene Handlungen in der Vergangenheit.",
      prompt:"Yesterday, I ___ a book.",
      answer:"read",
      choices:["read","reads","reading","am read"]
    },
    {
      id:"a2_past_2",
      topic:"Simple Past",
      explanation:"Die Vergangenheitsform von go ist went.",
      prompt:"We ___ to the museum yesterday.",
      answer:"went",
      choices:["go","went","gone","going"]
    },
    {
      id:"a2_some_1",
      topic:"some / any",
      explanation:"In bejahten Sätzen verwendet man häufig some.",
      prompt:"I would like ___ water.",
      answer:"some",
      choices:["some","any","many","few"]
    },
    {
      id:"a2_any_1",
      topic:"some / any",
      explanation:"In Fragen und Verneinungen verwendet man häufig any.",
      prompt:"Do you have ___ free rooms?",
      answer:"any",
      choices:["some","any","much","little"]
    },
    {
      id:"a2_modal_1",
      topic:"Höfliche Fragen",
      explanation:"Could I ...? ist eine höfliche Form, um etwas zu erbitten.",
      prompt:"___ I have the bill, please?",
      answer:"Could",
      choices:["Could","Must","Did","Have"]
    }
  ],

  B1: [
    {
      id:"b1_since_1",
      topic:"Present Perfect",
      explanation:"Since steht vor einem Zeitpunkt, for vor einer Zeitdauer.",
      prompt:"I have lived here ___ 2020.",
      answer:"since",
      choices:["for","since","during","from"]
    },
    {
      id:"b1_for_1",
      topic:"Present Perfect",
      explanation:"For steht vor einer Zeitdauer.",
      prompt:"I have worked here ___ three years.",
      answer:"for",
      choices:["for","since","during","from"]
    },
    {
      id:"b1_conditional_1",
      topic:"First Conditional",
      explanation:"Im First Conditional steht im if-Satz Simple Present und im Hauptsatz will.",
      prompt:"If it rains, we ___ at home.",
      answer:"will stay",
      choices:["stay","stayed","will stay","staying"]
    },
    {
      id:"b1_relative_1",
      topic:"Relativsätze",
      explanation:"Who bezieht sich auf Personen, which auf Dinge.",
      prompt:"The woman ___ works here is very friendly.",
      answer:"who",
      choices:["who","which","where","what"]
    }
  ],

  B2: [
    {
      id:"b2_futureperfect_1",
      topic:"Future Perfect",
      explanation:"Das Future Perfect beschreibt etwas, das zu einem zukünftigen Zeitpunkt abgeschlossen sein wird.",
      prompt:"By next year, I ___ the course.",
      answer:"will have finished",
      choices:["finish","will finish","will have finished","finished"]
    },
    {
      id:"b2_passive_1",
      topic:"Passive",
      explanation:"Im Passiv steht eine Form von be plus Partizip.",
      prompt:"The meeting ___ yesterday.",
      answer:"was cancelled",
      choices:["cancelled","was cancelled","has cancel","is cancelling"]
    },
    {
      id:"b2_reported_1",
      topic:"Reported Speech",
      explanation:"In der indirekten Rede wird die Zeitform häufig zurückgesetzt.",
      prompt:"She said that she ___ tired.",
      answer:"was",
      choices:["is","was","has","will be"]
    }
  ]
};
