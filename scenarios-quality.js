const ES_QUALITY_SCENARIOS = [
  {
    "id": "restaurant_reservation",
    "topic": "Restaurant",
    "title": "Einen Tisch reservieren",
    "level": "A2",
    "steps": [
      {
        "bot": "Good evening. How can I help you?",
        "de": "Guten Abend. Wie kann ich Ihnen helfen?",
        "answers": [
          "I would like to book a table for two.",
          "Do you have a table available tonight?"
        ]
      },
      {
        "bot": "Certainly. What time would you like to come?",
        "de": "Natürlich. Um wie viel Uhr möchten Sie kommen?",
        "answers": [
          "At seven thirty, please.",
          "Around eight o'clock, if possible."
        ]
      },
      {
        "bot": "Would you prefer a table inside or outside?",
        "de": "Möchten Sie lieber drinnen oder draußen sitzen?",
        "answers": [
          "Inside, please.",
          "Outside would be lovely."
        ]
      },
      {
        "bot": "May I have your name, please?",
        "de": "Darf ich bitte Ihren Namen haben?",
        "answers": [
          "The reservation is under Hofmann.",
          "My name is Fred Hofmann."
        ]
      },
      {
        "bot": "Thank you. Your table is reserved for seven thirty.",
        "de": "Danke. Ihr Tisch ist für halb acht reserviert.",
        "answers": [
          "Thank you very much.",
          "Perfect. See you this evening."
        ]
      }
    ]
  },
  {
    "id": "restaurant_order",
    "topic": "Restaurant",
    "title": "Im Restaurant bestellen",
    "level": "A2",
    "steps": [
      {
        "bot": "Are you ready to order?",
        "de": "Sind Sie bereit zu bestellen?",
        "answers": [
          "Yes, I would like the soup to start.",
          "Could I have a few more minutes, please?"
        ]
      },
      {
        "bot": "Of course. Would you like something to drink?",
        "de": "Natürlich. Möchten Sie etwas trinken?",
        "answers": [
          "A glass of still water, please.",
          "I would like a cup of tea."
        ]
      },
      {
        "bot": "What would you like for your main course?",
        "de": "Was möchten Sie als Hauptgericht?",
        "answers": [
          "I would like the grilled fish.",
          "Could you recommend something vegetarian?"
        ]
      },
      {
        "bot": "Would you like any side dishes?",
        "de": "Möchten Sie Beilagen dazu?",
        "answers": [
          "Yes, some vegetables, please.",
          "No, thank you."
        ]
      },
      {
        "bot": "Certainly. I will bring your order shortly.",
        "de": "Natürlich. Ich bringe Ihre Bestellung gleich.",
        "answers": [
          "Thank you.",
          "That sounds good."
        ]
      }
    ]
  },
  {
    "id": "restaurant_problem",
    "topic": "Restaurant",
    "title": "Ein Problem mit dem Essen",
    "level": "B1",
    "steps": [
      {
        "bot": "Is everything all right with your meal?",
        "de": "Ist mit Ihrem Essen alles in Ordnung?",
        "answers": [
          "I'm afraid the soup is cold.",
          "The steak is too well done."
        ]
      },
      {
        "bot": "I'm sorry about that. Would you like a replacement?",
        "de": "Das tut mir leid. Möchten Sie Ersatz?",
        "answers": [
          "Yes, please.",
          "Could you warm it up, please?"
        ]
      },
      {
        "bot": "Certainly. I will take it back to the kitchen.",
        "de": "Natürlich. Ich bringe es zurück in die Küche.",
        "answers": [
          "Thank you for your help.",
          "I appreciate that."
        ]
      },
      {
        "bot": "Would you like anything while you wait?",
        "de": "Möchten Sie etwas, während Sie warten?",
        "answers": [
          "Some water would be nice.",
          "No, thank you."
        ]
      },
      {
        "bot": "Your new meal will be ready in a few minutes.",
        "de": "Ihr neues Essen ist in wenigen Minuten fertig.",
        "answers": [
          "Thank you.",
          "That's fine."
        ]
      }
    ]
  },
  {
    "id": "hotel_checkin",
    "topic": "Hotel",
    "title": "Im Hotel einchecken",
    "level": "A2",
    "steps": [
      {
        "bot": "Good afternoon. Do you have a reservation?",
        "de": "Guten Tag. Haben Sie eine Reservierung?",
        "answers": [
          "Yes, it is under Hofmann.",
          "No. Do you have any rooms available?"
        ]
      },
      {
        "bot": "May I see your passport, please?",
        "de": "Darf ich bitte Ihren Reisepass sehen?",
        "answers": [
          "Yes, of course.",
          "Here you are."
        ]
      },
      {
        "bot": "You are staying for three nights, correct?",
        "de": "Sie bleiben drei Nächte, richtig?",
        "answers": [
          "Yes, that's correct.",
          "Actually, I would like to stay four nights."
        ]
      },
      {
        "bot": "Breakfast is served from seven to ten.",
        "de": "Frühstück gibt es von sieben bis zehn.",
        "answers": [
          "Thank you. Where is the breakfast room?",
          "Is breakfast included?"
        ]
      },
      {
        "bot": "Here is your key. Your room is on the third floor.",
        "de": "Hier ist Ihr Schlüssel. Ihr Zimmer ist im dritten Stock.",
        "answers": [
          "Thank you very much.",
          "Where is the lift?"
        ]
      }
    ]
  },
  {
    "id": "hotel_problem",
    "topic": "Hotel",
    "title": "Ein Problem im Hotel melden",
    "level": "B1",
    "steps": [
      {
        "bot": "Reception. How can I help you?",
        "de": "Rezeption. Wie kann ich Ihnen helfen?",
        "answers": [
          "The shower in my room is not working.",
          "There is a problem with the heating."
        ]
      },
      {
        "bot": "I'm sorry to hear that. What room are you in?",
        "de": "Das tut mir leid. In welchem Zimmer sind Sie?",
        "answers": [
          "I'm in room 312.",
          "Room 204."
        ]
      },
      {
        "bot": "We can send someone to check it.",
        "de": "Wir können jemanden schicken, um es zu prüfen.",
        "answers": [
          "That would be helpful.",
          "How long will it take?"
        ]
      },
      {
        "bot": "It should take about twenty minutes.",
        "de": "Es sollte etwa zwanzig Minuten dauern.",
        "answers": [
          "That's fine.",
          "Could I wait in the lobby?"
        ]
      },
      {
        "bot": "Of course. We apologise for the inconvenience.",
        "de": "Natürlich. Wir entschuldigen uns für die Unannehmlichkeiten.",
        "answers": [
          "Thank you for your help.",
          "I appreciate it."
        ]
      }
    ]
  },
  {
    "id": "hotel_checkout",
    "topic": "Hotel",
    "title": "Aus dem Hotel auschecken",
    "level": "A2",
    "steps": [
      {
        "bot": "Good morning. Are you checking out?",
        "de": "Guten Morgen. Möchten Sie auschecken?",
        "answers": [
          "Yes, please.",
          "Yes, room 315."
        ]
      },
      {
        "bot": "Did you use anything from the minibar?",
        "de": "Haben Sie etwas aus der Minibar genommen?",
        "answers": [
          "No, I didn't.",
          "Yes, one bottle of water."
        ]
      },
      {
        "bot": "Here is your final bill.",
        "de": "Hier ist Ihre Abschlussrechnung.",
        "answers": [
          "Can I pay by card?",
          "Could I see the bill, please?"
        ]
      },
      {
        "bot": "Would you like a printed receipt?",
        "de": "Möchten Sie eine gedruckte Quittung?",
        "answers": [
          "Yes, please.",
          "No, an email is fine."
        ]
      },
      {
        "bot": "Thank you for staying with us.",
        "de": "Danke, dass Sie bei uns waren.",
        "answers": [
          "Thank you. I enjoyed my stay.",
          "Goodbye."
        ]
      }
    ]
  },
  {
    "id": "airport_checkin",
    "topic": "Flughafen",
    "title": "Am Flughafen einchecken",
    "level": "A2",
    "steps": [
      {
        "bot": "Good morning. Where are you flying today?",
        "de": "Guten Morgen. Wohin fliegen Sie heute?",
        "answers": [
          "I'm flying to London.",
          "To Dublin."
        ]
      },
      {
        "bot": "May I see your passport and booking confirmation?",
        "de": "Darf ich Ihren Reisepass und Ihre Buchungsbestätigung sehen?",
        "answers": [
          "Here you are.",
          "Yes, of course."
        ]
      },
      {
        "bot": "Do you have any luggage to check in?",
        "de": "Haben Sie Gepäck zum Aufgeben?",
        "answers": [
          "Yes, one suitcase.",
          "No, only hand luggage."
        ]
      },
      {
        "bot": "Would you like a window or an aisle seat?",
        "de": "Möchten Sie einen Fenster- oder Gangplatz?",
        "answers": [
          "A window seat, please.",
          "An aisle seat, please."
        ]
      },
      {
        "bot": "Your gate is B12. Boarding starts at ten fifteen.",
        "de": "Ihr Gate ist B12. Das Boarding beginnt um 10:15 Uhr.",
        "answers": [
          "Thank you.",
          "Where is gate B12?"
        ]
      }
    ]
  },
  {
    "id": "airport_delay",
    "topic": "Flughafen",
    "title": "Bei Flugverspätung nachfragen",
    "level": "B1",
    "steps": [
      {
        "bot": "How can I help you?",
        "de": "Wie kann ich Ihnen helfen?",
        "answers": [
          "My flight has been delayed.",
          "I would like some information about flight BA214."
        ]
      },
      {
        "bot": "The flight is currently delayed by two hours.",
        "de": "Der Flug hat derzeit zwei Stunden Verspätung.",
        "answers": [
          "Do you know the reason?",
          "When will boarding begin?"
        ]
      },
      {
        "bot": "The delay is due to bad weather.",
        "de": "Die Verspätung liegt am schlechten Wetter.",
        "answers": [
          "Will I miss my connection?",
          "Is there another flight available?"
        ]
      },
      {
        "bot": "We can rebook you if necessary.",
        "de": "Wir können Sie bei Bedarf umbuchen.",
        "answers": [
          "Please check my options.",
          "I would prefer the next available flight."
        ]
      },
      {
        "bot": "I have found a seat on the evening flight.",
        "de": "Ich habe einen Platz auf dem Abendflug gefunden.",
        "answers": [
          "That works for me.",
          "Thank you for arranging that."
        ]
      }
    ]
  },
  {
    "id": "train_ticket",
    "topic": "Bahnhof",
    "title": "Eine Fahrkarte kaufen",
    "level": "A2",
    "steps": [
      {
        "bot": "Where would you like to go?",
        "de": "Wohin möchten Sie fahren?",
        "answers": [
          "I would like to go to Oxford.",
          "To the city centre, please."
        ]
      },
      {
        "bot": "Would you like a single or a return ticket?",
        "de": "Möchten Sie eine einfache Fahrt oder Hin- und Rückfahrt?",
        "answers": [
          "A return ticket, please.",
          "A single ticket, please."
        ]
      },
      {
        "bot": "What time would you like to travel?",
        "de": "Wann möchten Sie reisen?",
        "answers": [
          "This afternoon.",
          "As soon as possible."
        ]
      },
      {
        "bot": "The next train leaves at 2:40 from platform five.",
        "de": "Der nächste Zug fährt um 14:40 Uhr von Gleis fünf.",
        "answers": [
          "Thank you. Is it direct?",
          "How long does the journey take?"
        ]
      },
      {
        "bot": "The journey takes about fifty minutes.",
        "de": "Die Fahrt dauert etwa fünfzig Minuten.",
        "answers": [
          "Thank you very much.",
          "That's perfect."
        ]
      }
    ]
  },
  {
    "id": "train_connection",
    "topic": "Bahnhof",
    "title": "Nach einer Verbindung fragen",
    "level": "B1",
    "steps": [
      {
        "bot": "Can I help you?",
        "de": "Kann ich Ihnen helfen?",
        "answers": [
          "I need to get to Cambridge.",
          "Could you help me find the best connection?"
        ]
      },
      {
        "bot": "There is a train at eleven, but you need to change once.",
        "de": "Es gibt einen Zug um elf, aber Sie müssen einmal umsteigen.",
        "answers": [
          "Where do I need to change?",
          "How long is the connection time?"
        ]
      },
      {
        "bot": "You change at Peterborough.",
        "de": "Sie steigen in Peterborough um.",
        "answers": [
          "Which platform do I need there?",
          "Is the connection easy to find?"
        ]
      },
      {
        "bot": "You will have twelve minutes to change trains.",
        "de": "Sie haben zwölf Minuten zum Umsteigen.",
        "answers": [
          "That should be enough.",
          "What happens if the first train is late?"
        ]
      },
      {
        "bot": "The staff can help you if there is a delay.",
        "de": "Das Personal kann Ihnen bei einer Verspätung helfen.",
        "answers": [
          "Thank you for the information.",
          "That's reassuring."
        ]
      }
    ]
  },
  {
    "id": "shopping_size",
    "topic": "Einkaufen",
    "title": "Nach einer anderen Größe fragen",
    "level": "A2",
    "steps": [
      {
        "bot": "Can I help you with anything?",
        "de": "Kann ich Ihnen helfen?",
        "answers": [
          "Yes, do you have this in a larger size?",
          "I'm looking for a blue shirt."
        ]
      },
      {
        "bot": "What size do you need?",
        "de": "Welche Größe brauchen Sie?",
        "answers": [
          "A medium, please.",
          "Size 42."
        ]
      },
      {
        "bot": "Let me check in the stockroom.",
        "de": "Ich schaue im Lager nach.",
        "answers": [
          "Thank you.",
          "I'll wait here."
        ]
      },
      {
        "bot": "We have it in medium, but only in black.",
        "de": "Wir haben es in Medium, aber nur in Schwarz.",
        "answers": [
          "Black is fine.",
          "Do you have a similar one in blue?"
        ]
      },
      {
        "bot": "You can try it on in the changing room.",
        "de": "Sie können es in der Umkleidekabine anprobieren.",
        "answers": [
          "Thank you.",
          "Where is the changing room?"
        ]
      }
    ]
  },
  {
    "id": "shopping_return",
    "topic": "Einkaufen",
    "title": "Etwas zurückgeben",
    "level": "B1",
    "steps": [
      {
        "bot": "How can I help you?",
        "de": "Wie kann ich Ihnen helfen?",
        "answers": [
          "I would like to return this jacket.",
          "There is a problem with this item."
        ]
      },
      {
        "bot": "Do you have the receipt?",
        "de": "Haben Sie den Kassenbon?",
        "answers": [
          "Yes, here it is.",
          "I only have the card statement."
        ]
      },
      {
        "bot": "What is wrong with the jacket?",
        "de": "Was stimmt mit der Jacke nicht?",
        "answers": [
          "The zip is broken.",
          "It is the wrong size."
        ]
      },
      {
        "bot": "Would you like a refund or an exchange?",
        "de": "Möchten Sie eine Rückerstattung oder einen Umtausch?",
        "answers": [
          "A refund, please.",
          "I would like to exchange it."
        ]
      },
      {
        "bot": "The refund will go back to your card.",
        "de": "Die Rückerstattung geht auf Ihre Karte zurück.",
        "answers": [
          "Thank you.",
          "How long will that take?"
        ]
      }
    ]
  },
  {
    "id": "doctor_symptoms",
    "topic": "Arzt",
    "title": "Beschwerden beim Arzt erklären",
    "level": "A2",
    "steps": [
      {
        "bot": "What seems to be the problem?",
        "de": "Was fehlt Ihnen?",
        "answers": [
          "I have a bad headache.",
          "I have been coughing for three days."
        ]
      },
      {
        "bot": "Do you have a temperature?",
        "de": "Haben Sie Fieber?",
        "answers": [
          "Yes, a little.",
          "No, I don't think so."
        ]
      },
      {
        "bot": "How long have you felt like this?",
        "de": "Seit wann fühlen Sie sich so?",
        "answers": [
          "Since Monday.",
          "For about three days."
        ]
      },
      {
        "bot": "Are you taking any medication?",
        "de": "Nehmen Sie Medikamente?",
        "answers": [
          "No, I'm not.",
          "Only a painkiller."
        ]
      },
      {
        "bot": "I will examine you now.",
        "de": "Ich werde Sie jetzt untersuchen.",
        "answers": [
          "All right.",
          "Thank you, doctor."
        ]
      }
    ]
  },
  {
    "id": "pharmacy_medicine",
    "topic": "Apotheke",
    "title": "In der Apotheke",
    "level": "A2",
    "steps": [
      {
        "bot": "How can I help you?",
        "de": "Wie kann ich Ihnen helfen?",
        "answers": [
          "I need something for a headache.",
          "Do you have anything for a cold?"
        ]
      },
      {
        "bot": "Do you have any allergies?",
        "de": "Haben Sie Allergien?",
        "answers": [
          "No, I don't.",
          "Yes, I am allergic to penicillin."
        ]
      },
      {
        "bot": "How long have you had the symptoms?",
        "de": "Seit wann haben Sie die Beschwerden?",
        "answers": [
          "Since yesterday.",
          "For about a week."
        ]
      },
      {
        "bot": "Take one tablet every six hours.",
        "de": "Nehmen Sie alle sechs Stunden eine Tablette.",
        "answers": [
          "Should I take it with food?",
          "Are there any side effects?"
        ]
      },
      {
        "bot": "Do not take more than four tablets a day.",
        "de": "Nehmen Sie nicht mehr als vier Tabletten pro Tag.",
        "answers": [
          "Thank you for the advice.",
          "I understand."
        ]
      }
    ]
  },
  {
    "id": "work_meeting",
    "topic": "Beruf",
    "title": "Ein Meeting planen",
    "level": "B1",
    "steps": [
      {
        "bot": "When would you like to hold the meeting?",
        "de": "Wann möchten Sie das Meeting abhalten?",
        "answers": [
          "Friday morning would be best.",
          "Could we schedule it for Monday afternoon?"
        ]
      },
      {
        "bot": "Who needs to attend?",
        "de": "Wer muss teilnehmen?",
        "answers": [
          "The project team and the manager.",
          "Only the sales department."
        ]
      },
      {
        "bot": "How long should we allow?",
        "de": "Wie viel Zeit sollen wir einplanen?",
        "answers": [
          "About one hour.",
          "Ninety minutes should be enough."
        ]
      },
      {
        "bot": "Would you like me to book a meeting room?",
        "de": "Soll ich einen Besprechungsraum buchen?",
        "answers": [
          "Yes, please.",
          "A video call would be better."
        ]
      },
      {
        "bot": "I will send the invitation today.",
        "de": "Ich werde die Einladung heute senden.",
        "answers": [
          "Thank you.",
          "Please include the agenda."
        ]
      }
    ]
  },
  {
    "id": "work_deadline",
    "topic": "Beruf",
    "title": "Über eine Frist sprechen",
    "level": "B1",
    "steps": [
      {
        "bot": "Will the report be ready by Friday?",
        "de": "Wird der Bericht bis Freitag fertig sein?",
        "answers": [
          "I may need one more day.",
          "Yes, we are on schedule."
        ]
      },
      {
        "bot": "What is causing the delay?",
        "de": "Was verursacht die Verzögerung?",
        "answers": [
          "We are waiting for the final figures.",
          "The client requested several changes."
        ]
      },
      {
        "bot": "Can part of the work be completed earlier?",
        "de": "Kann ein Teil der Arbeit früher fertiggestellt werden?",
        "answers": [
          "Yes, I can send the first section tomorrow.",
          "I need to check with the team."
        ]
      },
      {
        "bot": "Please keep me updated.",
        "de": "Bitte halten Sie mich auf dem Laufenden.",
        "answers": [
          "Of course.",
          "I will send an update this afternoon."
        ]
      },
      {
        "bot": "Thank you for letting me know.",
        "de": "Danke für die Information.",
        "answers": [
          "You're welcome.",
          "Thank you for your understanding."
        ]
      }
    ]
  },
  {
    "id": "phone_message",
    "topic": "Telefon",
    "title": "Eine Nachricht hinterlassen",
    "level": "A2",
    "steps": [
      {
        "bot": "Good morning. Brown and Company. How can I help?",
        "de": "Guten Morgen. Brown and Company. Wie kann ich helfen?",
        "answers": [
          "Could I speak to Mr Brown, please?",
          "I'm calling about an appointment."
        ]
      },
      {
        "bot": "I'm afraid he is in a meeting.",
        "de": "Leider ist er in einer Besprechung.",
        "answers": [
          "Could I leave a message?",
          "When will he be available?"
        ]
      },
      {
        "bot": "Certainly. What would you like me to tell him?",
        "de": "Natürlich. Was soll ich ihm ausrichten?",
        "answers": [
          "Please ask him to call me back.",
          "Please tell him the meeting has changed."
        ]
      },
      {
        "bot": "May I have your phone number?",
        "de": "Darf ich Ihre Telefonnummer haben?",
        "answers": [
          "Yes, it's 0172 555 410.",
          "He already has my number."
        ]
      },
      {
        "bot": "I will pass on the message.",
        "de": "Ich werde die Nachricht weitergeben.",
        "answers": [
          "Thank you very much.",
          "That's very helpful."
        ]
      }
    ]
  },
  {
    "id": "smalltalk_weather",
    "topic": "Small Talk",
    "title": "Über das Wetter sprechen",
    "level": "A2",
    "steps": [
      {
        "bot": "Lovely weather today, isn't it?",
        "de": "Schönes Wetter heute, nicht wahr?",
        "answers": [
          "Yes, it's much warmer than yesterday.",
          "Yes, the sunshine is wonderful."
        ]
      },
      {
        "bot": "Do you think it will stay like this?",
        "de": "Glauben Sie, dass es so bleibt?",
        "answers": [
          "I hope so.",
          "The forecast says it may rain later."
        ]
      },
      {
        "bot": "Are you planning to go out?",
        "de": "Planen Sie, rauszugehen?",
        "answers": [
          "Yes, I'm going for a walk.",
          "I might visit the park."
        ]
      },
      {
        "bot": "That sounds nice. Do you come here often?",
        "de": "Das klingt schön. Kommen Sie oft hierher?",
        "answers": [
          "Yes, almost every weekend.",
          "No, this is my first time."
        ]
      },
      {
        "bot": "Enjoy the rest of your day.",
        "de": "Genießen Sie den Rest des Tages.",
        "answers": [
          "Thank you. You too.",
          "It was nice talking to you."
        ]
      }
    ]
  },
  {
    "id": "smalltalk_hobbies",
    "topic": "Small Talk",
    "title": "Über Hobbys sprechen",
    "level": "A2",
    "steps": [
      {
        "bot": "What do you like to do in your free time?",
        "de": "Was machen Sie gerne in Ihrer Freizeit?",
        "answers": [
          "I enjoy reading and listening to music.",
          "I like hiking and photography."
        ]
      },
      {
        "bot": "How often do you do that?",
        "de": "Wie oft machen Sie das?",
        "answers": [
          "Almost every weekend.",
          "Whenever I have enough time."
        ]
      },
      {
        "bot": "How did you become interested in it?",
        "de": "Wie sind Sie darauf gekommen?",
        "answers": [
          "A friend introduced me to it.",
          "I started when I was younger."
        ]
      },
      {
        "bot": "Do you prefer doing it alone or with others?",
        "de": "Machen Sie es lieber allein oder mit anderen?",
        "answers": [
          "Usually with friends.",
          "I often prefer doing it alone."
        ]
      },
      {
        "bot": "That sounds very interesting.",
        "de": "Das klingt sehr interessant.",
        "answers": [
          "Thank you.",
          "Yes, I really enjoy it."
        ]
      }
    ]
  },
  {
    "id": "car_rental",
    "topic": "Autovermietung",
    "title": "Einen Mietwagen abholen",
    "level": "B1",
    "steps": [
      {
        "bot": "Do you have a reservation?",
        "de": "Haben Sie eine Reservierung?",
        "answers": [
          "Yes, it is under Hofmann.",
          "No, but I would like to rent a car."
        ]
      },
      {
        "bot": "May I see your driving licence and passport?",
        "de": "Darf ich Ihren Führerschein und Reisepass sehen?",
        "answers": [
          "Here you are.",
          "Yes, of course."
        ]
      },
      {
        "bot": "Would you prefer a manual or an automatic car?",
        "de": "Möchten Sie einen Schalt- oder Automatikwagen?",
        "answers": [
          "An automatic, please.",
          "A manual car is fine."
        ]
      },
      {
        "bot": "Would you like full insurance?",
        "de": "Möchten Sie eine Vollversicherung?",
        "answers": [
          "Yes, please.",
          "What does the basic insurance cover?"
        ]
      },
      {
        "bot": "Please return the car with a full tank.",
        "de": "Bitte geben Sie das Auto vollgetankt zurück.",
        "answers": [
          "I understand.",
          "Where is the nearest petrol station?"
        ]
      }
    ]
  },
  {
    "id": "bank_exchange",
    "topic": "Bank",
    "title": "Geld wechseln",
    "level": "B1",
    "steps": [
      {
        "bot": "How can I help you?",
        "de": "Wie kann ich Ihnen helfen?",
        "answers": [
          "I would like to exchange some euros.",
          "What is today's exchange rate?"
        ]
      },
      {
        "bot": "Which currency do you need?",
        "de": "Welche Währung brauchen Sie?",
        "answers": [
          "British pounds, please.",
          "US dollars."
        ]
      },
      {
        "bot": "How much would you like to exchange?",
        "de": "Wie viel möchten Sie wechseln?",
        "answers": [
          "Two hundred euros.",
          "About five hundred euros."
        ]
      },
      {
        "bot": "There is a small service charge.",
        "de": "Es gibt eine kleine Servicegebühr.",
        "answers": [
          "How much is the charge?",
          "That's fine."
        ]
      },
      {
        "bot": "Here is your money and receipt.",
        "de": "Hier sind Ihr Geld und Ihre Quittung.",
        "answers": [
          "Thank you.",
          "Could you count it again, please?"
        ]
      }
    ]
  },
  {
    "id": "post_parcel",
    "topic": "Post",
    "title": "Ein Paket verschicken",
    "level": "A2",
    "steps": [
      {
        "bot": "Where would you like to send the parcel?",
        "de": "Wohin möchten Sie das Paket schicken?",
        "answers": [
          "To Germany, please.",
          "To London."
        ]
      },
      {
        "bot": "What is inside the parcel?",
        "de": "Was ist im Paket?",
        "answers": [
          "Some clothes and books.",
          "A birthday present."
        ]
      },
      {
        "bot": "Would you like standard or express delivery?",
        "de": "Möchten Sie Standard- oder Expressversand?",
        "answers": [
          "Standard delivery is fine.",
          "Express delivery, please."
        ]
      },
      {
        "bot": "Would you like tracking?",
        "de": "Möchten Sie eine Sendungsverfolgung?",
        "answers": [
          "Yes, please.",
          "No, thank you."
        ]
      },
      {
        "bot": "Here is your receipt and tracking number.",
        "de": "Hier sind Ihre Quittung und Sendungsnummer.",
        "answers": [
          "Thank you.",
          "When should it arrive?"
        ]
      }
    ]
  },
  {
    "id": "museum_ticket",
    "topic": "Museum",
    "title": "Ein Museum besuchen",
    "level": "A2",
    "steps": [
      {
        "bot": "How many tickets would you like?",
        "de": "Wie viele Eintrittskarten möchten Sie?",
        "answers": [
          "Two adult tickets, please.",
          "One ticket, please."
        ]
      },
      {
        "bot": "Would you like an audio guide?",
        "de": "Möchten Sie einen Audioguide?",
        "answers": [
          "Yes, in German, please.",
          "No, thank you."
        ]
      },
      {
        "bot": "The special exhibition is on the first floor.",
        "de": "Die Sonderausstellung ist im ersten Stock.",
        "answers": [
          "Is it included in the ticket?",
          "What is the exhibition about?"
        ]
      },
      {
        "bot": "Photography is allowed without flash.",
        "de": "Fotografieren ist ohne Blitz erlaubt.",
        "answers": [
          "Thank you for telling me.",
          "Can I take photos in every room?"
        ]
      },
      {
        "bot": "The museum closes at six.",
        "de": "Das Museum schließt um sechs.",
        "answers": [
          "Thank you.",
          "That gives us plenty of time."
        ]
      }
    ]
  },
  {
    "id": "camping_booking",
    "topic": "Camping",
    "title": "Einen Campingplatz buchen",
    "level": "B1",
    "steps": [
      {
        "bot": "How many nights would you like to stay?",
        "de": "Wie viele Nächte möchten Sie bleiben?",
        "answers": [
          "Three nights, please.",
          "From Friday to Monday."
        ]
      },
      {
        "bot": "Are you bringing a tent or a camper van?",
        "de": "Bringen Sie ein Zelt oder ein Wohnmobil mit?",
        "answers": [
          "A small tent.",
          "A camper van."
        ]
      },
      {
        "bot": "Would you like electricity?",
        "de": "Möchten Sie Strom?",
        "answers": [
          "Yes, please.",
          "No, we don't need it."
        ]
      },
      {
        "bot": "The showers are near reception.",
        "de": "Die Duschen sind in der Nähe der Rezeption.",
        "answers": [
          "Thank you. Are they open all night?",
          "Is hot water included?"
        ]
      },
      {
        "bot": "Please keep noise to a minimum after ten.",
        "de": "Bitte vermeiden Sie nach zehn Uhr Lärm.",
        "answers": [
          "Of course.",
          "We understand."
        ]
      }
    ]
  },
  {
    "id": "university_course",
    "topic": "Universität",
    "title": "Nach einem Kurs fragen",
    "level": "B1",
    "steps": [
      {
        "bot": "Which course are you interested in?",
        "de": "Für welchen Kurs interessieren Sie sich?",
        "answers": [
          "The English evening course.",
          "The business communication course."
        ]
      },
      {
        "bot": "Have you studied the subject before?",
        "de": "Haben Sie das Fach schon einmal gelernt?",
        "answers": [
          "Yes, for two years.",
          "Only a little."
        ]
      },
      {
        "bot": "The course starts next month.",
        "de": "Der Kurs beginnt nächsten Monat.",
        "answers": [
          "How often does it take place?",
          "What day does it start?"
        ]
      },
      {
        "bot": "There are two lessons each week.",
        "de": "Es gibt zwei Unterrichtsstunden pro Woche.",
        "answers": [
          "That sounds suitable.",
          "How long is each lesson?"
        ]
      },
      {
        "bot": "Would you like to register today?",
        "de": "Möchten Sie sich heute anmelden?",
        "answers": [
          "Yes, please.",
          "I would like some time to think."
        ]
      }
    ]
  },
  {
    "id": "sport_ticket",
    "topic": "Sport",
    "title": "Ein Sportticket kaufen",
    "level": "A2",
    "steps": [
      {
        "bot": "Which match would you like tickets for?",
        "de": "Für welches Spiel möchten Sie Karten?",
        "answers": [
          "The Saturday match, please.",
          "The evening game."
        ]
      },
      {
        "bot": "How many tickets do you need?",
        "de": "Wie viele Karten brauchen Sie?",
        "answers": [
          "Two tickets, please.",
          "Just one."
        ]
      },
      {
        "bot": "Would you like seats near the front?",
        "de": "Möchten Sie Plätze weiter vorne?",
        "answers": [
          "Yes, if possible.",
          "No, cheaper seats are fine."
        ]
      },
      {
        "bot": "The match starts at seven.",
        "de": "Das Spiel beginnt um sieben.",
        "answers": [
          "What time do the gates open?",
          "How long does the match usually last?"
        ]
      },
      {
        "bot": "Here are your tickets.",
        "de": "Hier sind Ihre Karten.",
        "answers": [
          "Thank you.",
          "Great, we're looking forward to it."
        ]
      }
    ]
  }
];
