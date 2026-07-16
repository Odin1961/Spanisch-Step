const ES_BRANCHING_SCENARIOS_151 = [
  {
    "id": "branch_restaurant_full",
    "topic": "Restaurant",
    "title": "Ein vollständiger Restaurantbesuch",
    "level": "A2-B1",
    "start": "arrival",
    "nodes": {
      "arrival": {
        "bot": "Good evening. Do you have a reservation?",
        "de": "Guten Abend. Haben Sie eine Reservierung?",
        "answers": [
          {
            "text": "Yes, it is under Hofmann.",
            "next": "seat"
          },
          {
            "text": "No. Do you have a table for two?",
            "next": "walkin"
          }
        ]
      },
      "walkin": {
        "bot": "We have one table available near the window.",
        "de": "Wir haben einen Tisch am Fenster frei.",
        "answers": [
          {
            "text": "That would be perfect.",
            "next": "seat"
          },
          {
            "text": "Do you have a quieter table?",
            "next": "quiet"
          }
        ]
      },
      "quiet": {
        "bot": "Yes, there is a quiet table at the back.",
        "de": "Ja, hinten gibt es einen ruhigen Tisch.",
        "answers": [
          {
            "text": "We would prefer that one.",
            "next": "seat"
          },
          {
            "text": "The window table is fine after all.",
            "next": "seat"
          }
        ]
      },
      "seat": {
        "bot": "Here are the menus. Would you like something to drink?",
        "de": "Hier sind die Speisekarten. Möchten Sie etwas trinken?",
        "answers": [
          {
            "text": "A bottle of still water, please.",
            "next": "order"
          },
          {
            "text": "Could we see the wine list?",
            "next": "wine"
          }
        ]
      },
      "wine": {
        "bot": "Certainly. Do you prefer red or white wine?",
        "de": "Natürlich. Bevorzugen Sie Rot- oder Weißwein?",
        "answers": [
          {
            "text": "A dry white wine, please.",
            "next": "order"
          },
          {
            "text": "Just water for now, thank you.",
            "next": "order"
          }
        ]
      },
      "order": {
        "bot": "Are you ready to order?",
        "de": "Sind Sie bereit zu bestellen?",
        "answers": [
          {
            "text": "Yes, I would like the soup and the grilled fish.",
            "next": "diet"
          },
          {
            "text": "Could you recommend a vegetarian main course?",
            "next": "recommend"
          }
        ]
      },
      "recommend": {
        "bot": "The vegetable curry is very popular.",
        "de": "Das Gemüsecurry ist sehr beliebt.",
        "answers": [
          {
            "text": "I'll have that, please.",
            "next": "diet"
          },
          {
            "text": "Does it contain dairy products?",
            "next": "diet"
          }
        ]
      },
      "diet": {
        "bot": "Do you have any allergies or dietary requirements?",
        "de": "Haben Sie Allergien oder besondere Ernährungsanforderungen?",
        "answers": [
          {
            "text": "No, I don't.",
            "next": "dessert"
          },
          {
            "text": "Yes, I am allergic to nuts.",
            "next": "allergy"
          }
        ]
      },
      "allergy": {
        "bot": "Thank you for telling me. I will inform the kitchen.",
        "de": "Danke für den Hinweis. Ich informiere die Küche.",
        "answers": [
          {
            "text": "Thank you for taking care.",
            "next": "dessert"
          },
          {
            "text": "Could you also check the dessert menu?",
            "next": "dessert"
          }
        ]
      },
      "dessert": {
        "bot": "Would you like dessert or coffee?",
        "de": "Möchten Sie ein Dessert oder Kaffee?",
        "answers": [
          {
            "text": "A coffee, please.",
            "next": "bill"
          },
          {
            "text": "No, thank you. Could we have the bill?",
            "next": "bill"
          }
        ]
      },
      "bill": {
        "bot": "Certainly. Would you like to pay together or separately?",
        "de": "Natürlich. Möchten Sie zusammen oder getrennt bezahlen?",
        "answers": [
          {
            "text": "Together, please.",
            "next": "end"
          },
          {
            "text": "Separately, please.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Have a lovely evening.",
        "de": "Danke. Einen schönen Abend noch.",
        "answers": []
      }
    }
  },
  {
    "id": "branch_hotel_stay",
    "topic": "Hotel",
    "title": "Hotelaufenthalt mit Zimmerproblem",
    "level": "A2-B1",
    "start": "checkin",
    "nodes": {
      "checkin": {
        "bot": "Welcome. May I have your booking reference?",
        "de": "Willkommen. Darf ich Ihre Buchungsnummer haben?",
        "answers": [
          {
            "text": "Yes, here it is.",
            "next": "room"
          },
          {
            "text": "I only have the confirmation email.",
            "next": "email"
          }
        ]
      },
      "email": {
        "bot": "That's fine. Could you show me the email?",
        "de": "Das ist in Ordnung. Können Sie mir die E-Mail zeigen?",
        "answers": [
          {
            "text": "Of course. Here it is.",
            "next": "room"
          },
          {
            "text": "The internet is not working. Can you search by my name?",
            "next": "room"
          }
        ]
      },
      "room": {
        "bot": "Your room is on the fourth floor. Breakfast is included.",
        "de": "Ihr Zimmer ist im vierten Stock. Frühstück ist inklusive.",
        "answers": [
          {
            "text": "Thank you. Where is the lift?",
            "next": "problem"
          },
          {
            "text": "What time is breakfast served?",
            "next": "problem"
          }
        ]
      },
      "problem": {
        "bot": "Please contact reception if you need anything.",
        "de": "Bitte kontaktieren Sie die Rezeption, wenn Sie etwas brauchen.",
        "answers": [
          {
            "text": "Thank you.",
            "next": "shower"
          },
          {
            "text": "I will.",
            "next": "shower"
          }
        ]
      },
      "shower": {
        "bot": "Reception. How can I help you?",
        "de": "Rezeption. Wie kann ich Ihnen helfen?",
        "answers": [
          {
            "text": "The shower in my room is not working.",
            "next": "repair"
          },
          {
            "text": "There is no hot water in my room.",
            "next": "repair"
          }
        ]
      },
      "repair": {
        "bot": "I'm sorry. We can send a technician immediately.",
        "de": "Das tut mir leid. Wir können sofort einen Techniker schicken.",
        "answers": [
          {
            "text": "How long will it take?",
            "next": "wait"
          },
          {
            "text": "Could I move to another room?",
            "next": "move"
          }
        ]
      },
      "wait": {
        "bot": "The technician should arrive within twenty minutes.",
        "de": "Der Techniker sollte innerhalb von zwanzig Minuten kommen.",
        "answers": [
          {
            "text": "That's fine.",
            "next": "checkout"
          },
          {
            "text": "Please call me when the technician arrives.",
            "next": "checkout"
          }
        ]
      },
      "move": {
        "bot": "We have another room available on the same floor.",
        "de": "Wir haben ein anderes Zimmer auf derselben Etage frei.",
        "answers": [
          {
            "text": "I would like to move, please.",
            "next": "checkout"
          },
          {
            "text": "I will wait for the technician instead.",
            "next": "checkout"
          }
        ]
      },
      "checkout": {
        "bot": "Good morning. Are you checking out?",
        "de": "Guten Morgen. Möchten Sie auschecken?",
        "answers": [
          {
            "text": "Yes, please.",
            "next": "compensation"
          },
          {
            "text": "Yes. Could I see the final bill?",
            "next": "compensation"
          }
        ]
      },
      "compensation": {
        "bot": "We have removed one night's parking charge because of the problem.",
        "de": "Wegen des Problems haben wir eine Parkgebühr erlassen.",
        "answers": [
          {
            "text": "Thank you. I appreciate that.",
            "next": "end"
          },
          {
            "text": "Thank you for resolving it.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you for staying with us.",
        "de": "Danke, dass Sie bei uns waren.",
        "answers": []
      }
    }
  },
  {
    "id": "branch_airport_delay",
    "topic": "Flughafen",
    "title": "Flugverspätung und Umbuchung",
    "level": "B1",
    "start": "delay",
    "nodes": {
      "delay": {
        "bot": "Flight BA214 is delayed by three hours.",
        "de": "Flug BA214 hat drei Stunden Verspätung.",
        "answers": [
          {
            "text": "Will I miss my connection?",
            "next": "connection"
          },
          {
            "text": "What caused the delay?",
            "next": "reason"
          }
        ]
      },
      "reason": {
        "bot": "The delay is due to a technical inspection.",
        "de": "Die Verspätung liegt an einer technischen Überprüfung.",
        "answers": [
          {
            "text": "When will you have another update?",
            "next": "connection"
          },
          {
            "text": "Is the flight likely to be cancelled?",
            "next": "connection"
          }
        ]
      },
      "connection": {
        "bot": "Your connection leaves before this flight is expected to arrive.",
        "de": "Ihre Anschlussverbindung startet voraussichtlich vorher.",
        "answers": [
          {
            "text": "Can you rebook me?",
            "next": "options"
          },
          {
            "text": "Is there another route?",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "We can offer an evening flight or a flight tomorrow morning.",
        "de": "Wir können einen Abendflug oder einen Flug morgen früh anbieten.",
        "answers": [
          {
            "text": "I prefer the evening flight.",
            "next": "evening"
          },
          {
            "text": "I would rather fly tomorrow morning.",
            "next": "hotel"
          }
        ]
      },
      "evening": {
        "bot": "The evening flight has one seat available.",
        "de": "Auf dem Abendflug ist noch ein Platz frei.",
        "answers": [
          {
            "text": "Please book it for me.",
            "next": "voucher"
          },
          {
            "text": "Does it include checked luggage?",
            "next": "voucher"
          }
        ]
      },
      "hotel": {
        "bot": "We can provide a hotel and airport transfer.",
        "de": "Wir können ein Hotel und Transfer bereitstellen.",
        "answers": [
          {
            "text": "That would be suitable.",
            "next": "voucher"
          },
          {
            "text": "Is breakfast included?",
            "next": "voucher"
          }
        ]
      },
      "voucher": {
        "bot": "You will also receive a meal voucher.",
        "de": "Sie erhalten außerdem einen Essensgutschein.",
        "answers": [
          {
            "text": "Where can I use it?",
            "next": "confirm"
          },
          {
            "text": "Thank you.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "Your new booking confirmation has been sent by email.",
        "de": "Ihre neue Buchungsbestätigung wurde per E-Mail gesendet.",
        "answers": [
          {
            "text": "I have received it.",
            "next": "end"
          },
          {
            "text": "Could you print it as well?",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Everything is arranged. We apologise for the disruption.",
        "de": "Alles ist organisiert. Wir entschuldigen uns für die Störung.",
        "answers": []
      }
    }
  },
  {
    "id": "branch_doctor_visit",
    "topic": "Gesundheit",
    "title": "Arztbesuch mit Untersuchung",
    "level": "A2-B1",
    "start": "symptoms",
    "nodes": {
      "symptoms": {
        "bot": "What symptoms have you been experiencing?",
        "de": "Welche Beschwerden haben Sie?",
        "answers": [
          {
            "text": "I have had a cough and fever for three days.",
            "next": "duration"
          },
          {
            "text": "I have a severe sore throat.",
            "next": "duration"
          }
        ]
      },
      "duration": {
        "bot": "Have the symptoms become worse?",
        "de": "Sind die Beschwerden schlimmer geworden?",
        "answers": [
          {
            "text": "Yes, especially at night.",
            "next": "medicine"
          },
          {
            "text": "No, but they are not improving.",
            "next": "medicine"
          }
        ]
      },
      "medicine": {
        "bot": "Are you taking any medication?",
        "de": "Nehmen Sie Medikamente?",
        "answers": [
          {
            "text": "Only a painkiller.",
            "next": "exam"
          },
          {
            "text": "No, nothing at the moment.",
            "next": "exam"
          }
        ]
      },
      "exam": {
        "bot": "I will listen to your chest and check your temperature.",
        "de": "Ich höre Ihre Lunge ab und messe Ihre Temperatur.",
        "answers": [
          {
            "text": "All right.",
            "next": "result"
          },
          {
            "text": "Is there anything I should do?",
            "next": "result"
          }
        ]
      },
      "result": {
        "bot": "Your chest sounds clear, but you have a high temperature.",
        "de": "Ihre Lunge klingt frei, aber Sie haben hohes Fieber.",
        "answers": [
          {
            "text": "Do I need antibiotics?",
            "next": "advice"
          },
          {
            "text": "What treatment do you recommend?",
            "next": "advice"
          }
        ]
      },
      "advice": {
        "bot": "Rest, drink plenty of fluids and take this medicine for the fever.",
        "de": "Ruhen Sie sich aus, trinken Sie viel und nehmen Sie dieses Medikament.",
        "answers": [
          {
            "text": "How often should I take it?",
            "next": "dose"
          },
          {
            "text": "Are there any side effects?",
            "next": "dose"
          }
        ]
      },
      "dose": {
        "bot": "Take one tablet every six hours with food.",
        "de": "Nehmen Sie alle sechs Stunden eine Tablette mit Essen.",
        "answers": [
          {
            "text": "I understand.",
            "next": "follow"
          },
          {
            "text": "What should I do if the fever continues?",
            "next": "follow"
          }
        ]
      },
      "follow": {
        "bot": "Contact us again if you are not better within three days.",
        "de": "Kontaktieren Sie uns erneut, wenn es in drei Tagen nicht besser ist.",
        "answers": [
          {
            "text": "Thank you, doctor.",
            "next": "end"
          },
          {
            "text": "I will do that.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Take care and get plenty of rest.",
        "de": "Gute Besserung und ruhen Sie sich aus.",
        "answers": []
      }
    }
  },
  {
    "id": "branch_job_interview",
    "topic": "Beruf",
    "title": "Ausführliches Vorstellungsgespräch",
    "level": "B1-B2",
    "start": "intro",
    "nodes": {
      "intro": {
        "bot": "Could you briefly introduce yourself?",
        "de": "Könnten Sie sich kurz vorstellen?",
        "answers": [
          {
            "text": "I have five years of experience in customer service.",
            "next": "interest"
          },
          {
            "text": "I currently work as a project coordinator.",
            "next": "interest"
          }
        ]
      },
      "interest": {
        "bot": "Why are you interested in this role?",
        "de": "Warum interessieren Sie sich für diese Stelle?",
        "answers": [
          {
            "text": "It matches my experience and offers more responsibility.",
            "next": "strength"
          },
          {
            "text": "I am interested in the international work.",
            "next": "strength"
          }
        ]
      },
      "strength": {
        "bot": "What would you say is your greatest strength?",
        "de": "Was ist Ihre größte Stärke?",
        "answers": [
          {
            "text": "I am reliable and well organised.",
            "next": "example"
          },
          {
            "text": "I communicate clearly and solve problems calmly.",
            "next": "example"
          }
        ]
      },
      "example": {
        "bot": "Can you give an example?",
        "de": "Können Sie ein Beispiel nennen?",
        "answers": [
          {
            "text": "I helped my team deliver a difficult project on time.",
            "next": "weakness"
          },
          {
            "text": "I resolved a serious complaint for an important client.",
            "next": "weakness"
          }
        ]
      },
      "weakness": {
        "bot": "What area would you like to improve?",
        "de": "In welchem Bereich möchten Sie sich verbessern?",
        "answers": [
          {
            "text": "I would like to improve my presentation skills.",
            "next": "pressure"
          },
          {
            "text": "I sometimes take on too many tasks.",
            "next": "pressure"
          }
        ]
      },
      "pressure": {
        "bot": "How do you work under pressure?",
        "de": "Wie arbeiten Sie unter Druck?",
        "answers": [
          {
            "text": "I prioritise tasks and communicate early.",
            "next": "future"
          },
          {
            "text": "I stay calm and focus on the next practical step.",
            "next": "future"
          }
        ]
      },
      "future": {
        "bot": "Where do you see yourself in three years?",
        "de": "Wo sehen Sie sich in drei Jahren?",
        "answers": [
          {
            "text": "I would like to lead larger projects.",
            "next": "questions"
          },
          {
            "text": "I hope to develop into a specialist role.",
            "next": "questions"
          }
        ]
      },
      "questions": {
        "bot": "Do you have any questions for us?",
        "de": "Haben Sie Fragen an uns?",
        "answers": [
          {
            "text": "What does a typical day look like?",
            "next": "end"
          },
          {
            "text": "What training opportunities are available?",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. We will contact you next week.",
        "de": "Danke. Wir melden uns nächste Woche.",
        "answers": []
      }
    }
  },
  {
    "id": "branch_bank_account",
    "topic": "Bank",
    "title": "Ein Bankkonto eröffnen",
    "level": "A2-B1",
    "start": "n1",
    "nodes": {
      "n1": {
        "bot": "How can I help you with open an account?",
        "de": "Wie kann ich Ihnen bei „open an account“ helfen?",
        "answers": [
          {
            "text": "I need help with open an account.",
            "next": "n2"
          },
          {
            "text": "I have a question about open an account.",
            "next": "n2"
          }
        ]
      },
      "n2": {
        "bot": "Could you provide more information about identity document?",
        "de": "Könnten Sie mehr Informationen zu „identity document“ geben?",
        "answers": [
          {
            "text": "Yes, here are the details about identity document.",
            "next": "n3"
          },
          {
            "text": "Could you explain what you need for identity document?",
            "next": "n3"
          }
        ]
      },
      "n3": {
        "bot": "Would the following option work: monthly fee?",
        "de": "Würde folgende Option passen: „monthly fee“?",
        "answers": [
          {
            "text": "Yes, monthly fee would work.",
            "next": "n4"
          },
          {
            "text": "I would prefer another option for monthly fee.",
            "next": "alt"
          }
        ]
      },
      "alt": {
        "bot": "We can offer an alternative arrangement for monthly fee.",
        "de": "Wir können eine Alternative für „monthly fee“ anbieten.",
        "answers": [
          {
            "text": "That sounds better.",
            "next": "n4"
          },
          {
            "text": "The original option is fine after all.",
            "next": "n4"
          }
        ]
      },
      "n4": {
        "bot": "How would you like to handle bank card?",
        "de": "Wie möchten Sie mit „bank card“ umgehen?",
        "answers": [
          {
            "text": "Please proceed with bank card.",
            "next": "end"
          },
          {
            "text": "Could you confirm bank card in writing?",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has been arranged.",
        "de": "Danke. Alles wurde organisiert.",
        "answers": []
      }
    }
  },
  {
    "id": "branch_car_rental",
    "topic": "Autovermietung",
    "title": "Mietwagen mit Versicherung",
    "level": "A2-B1",
    "start": "n1",
    "nodes": {
      "n1": {
        "bot": "How can I help you with rental booking?",
        "de": "Wie kann ich Ihnen bei „rental booking“ helfen?",
        "answers": [
          {
            "text": "I need help with rental booking.",
            "next": "n2"
          },
          {
            "text": "I have a question about rental booking.",
            "next": "n2"
          }
        ]
      },
      "n2": {
        "bot": "Could you provide more information about driving licence?",
        "de": "Könnten Sie mehr Informationen zu „driving licence“ geben?",
        "answers": [
          {
            "text": "Yes, here are the details about driving licence.",
            "next": "n3"
          },
          {
            "text": "Could you explain what you need for driving licence?",
            "next": "n3"
          }
        ]
      },
      "n3": {
        "bot": "Would the following option work: insurance option?",
        "de": "Würde folgende Option passen: „insurance option“?",
        "answers": [
          {
            "text": "Yes, insurance option would work.",
            "next": "n4"
          },
          {
            "text": "I would prefer another option for insurance option.",
            "next": "alt"
          }
        ]
      },
      "alt": {
        "bot": "We can offer an alternative arrangement for insurance option.",
        "de": "Wir können eine Alternative für „insurance option“ anbieten.",
        "answers": [
          {
            "text": "That sounds better.",
            "next": "n4"
          },
          {
            "text": "The original option is fine after all.",
            "next": "n4"
          }
        ]
      },
      "n4": {
        "bot": "How would you like to handle return conditions?",
        "de": "Wie möchten Sie mit „return conditions“ umgehen?",
        "answers": [
          {
            "text": "Please proceed with return conditions.",
            "next": "end"
          },
          {
            "text": "Could you confirm return conditions in writing?",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has been arranged.",
        "de": "Danke. Alles wurde organisiert.",
        "answers": []
      }
    }
  },
  {
    "id": "branch_post_parcel",
    "topic": "Post",
    "title": "Internationales Paket",
    "level": "A2-B1",
    "start": "n1",
    "nodes": {
      "n1": {
        "bot": "How can I help you with destination country?",
        "de": "Wie kann ich Ihnen bei „destination country“ helfen?",
        "answers": [
          {
            "text": "I need help with destination country.",
            "next": "n2"
          },
          {
            "text": "I have a question about destination country.",
            "next": "n2"
          }
        ]
      },
      "n2": {
        "bot": "Could you provide more information about parcel contents?",
        "de": "Könnten Sie mehr Informationen zu „parcel contents“ geben?",
        "answers": [
          {
            "text": "Yes, here are the details about parcel contents.",
            "next": "n3"
          },
          {
            "text": "Could you explain what you need for parcel contents?",
            "next": "n3"
          }
        ]
      },
      "n3": {
        "bot": "Would the following option work: delivery option?",
        "de": "Würde folgende Option passen: „delivery option“?",
        "answers": [
          {
            "text": "Yes, delivery option would work.",
            "next": "n4"
          },
          {
            "text": "I would prefer another option for delivery option.",
            "next": "alt"
          }
        ]
      },
      "alt": {
        "bot": "We can offer an alternative arrangement for delivery option.",
        "de": "Wir können eine Alternative für „delivery option“ anbieten.",
        "answers": [
          {
            "text": "That sounds better.",
            "next": "n4"
          },
          {
            "text": "The original option is fine after all.",
            "next": "n4"
          }
        ]
      },
      "n4": {
        "bot": "How would you like to handle tracking number?",
        "de": "Wie möchten Sie mit „tracking number“ umgehen?",
        "answers": [
          {
            "text": "Please proceed with tracking number.",
            "next": "end"
          },
          {
            "text": "Could you confirm tracking number in writing?",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has been arranged.",
        "de": "Danke. Alles wurde organisiert.",
        "answers": []
      }
    }
  },
  {
    "id": "branch_pharmacy",
    "topic": "Apotheke",
    "title": "Medikament beraten lassen",
    "level": "A2-B1",
    "start": "n1",
    "nodes": {
      "n1": {
        "bot": "How can I help you with main symptom?",
        "de": "Wie kann ich Ihnen bei „main symptom“ helfen?",
        "answers": [
          {
            "text": "I need help with main symptom.",
            "next": "n2"
          },
          {
            "text": "I have a question about main symptom.",
            "next": "n2"
          }
        ]
      },
      "n2": {
        "bot": "Could you provide more information about allergy information?",
        "de": "Könnten Sie mehr Informationen zu „allergy information“ geben?",
        "answers": [
          {
            "text": "Yes, here are the details about allergy information.",
            "next": "n3"
          },
          {
            "text": "Could you explain what you need for allergy information?",
            "next": "n3"
          }
        ]
      },
      "n3": {
        "bot": "Would the following option work: recommended medicine?",
        "de": "Würde folgende Option passen: „recommended medicine“?",
        "answers": [
          {
            "text": "Yes, recommended medicine would work.",
            "next": "n4"
          },
          {
            "text": "I would prefer another option for recommended medicine.",
            "next": "alt"
          }
        ]
      },
      "alt": {
        "bot": "We can offer an alternative arrangement for recommended medicine.",
        "de": "Wir können eine Alternative für „recommended medicine“ anbieten.",
        "answers": [
          {
            "text": "That sounds better.",
            "next": "n4"
          },
          {
            "text": "The original option is fine after all.",
            "next": "n4"
          }
        ]
      },
      "n4": {
        "bot": "How would you like to handle dosage?",
        "de": "Wie möchten Sie mit „dosage“ umgehen?",
        "answers": [
          {
            "text": "Please proceed with dosage.",
            "next": "end"
          },
          {
            "text": "Could you confirm dosage in writing?",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has been arranged.",
        "de": "Danke. Alles wurde organisiert.",
        "answers": []
      }
    }
  },
  {
    "id": "branch_customer_complaint",
    "topic": "Kundenservice",
    "title": "Komplexe Beschwerde",
    "level": "A2-B1",
    "start": "n1",
    "nodes": {
      "n1": {
        "bot": "How can I help you with original order?",
        "de": "Wie kann ich Ihnen bei „original order“ helfen?",
        "answers": [
          {
            "text": "I need help with original order.",
            "next": "n2"
          },
          {
            "text": "I have a question about original order.",
            "next": "n2"
          }
        ]
      },
      "n2": {
        "bot": "Could you provide more information about service failure?",
        "de": "Könnten Sie mehr Informationen zu „service failure“ geben?",
        "answers": [
          {
            "text": "Yes, here are the details about service failure.",
            "next": "n3"
          },
          {
            "text": "Could you explain what you need for service failure?",
            "next": "n3"
          }
        ]
      },
      "n3": {
        "bot": "Would the following option work: preferred solution?",
        "de": "Würde folgende Option passen: „preferred solution“?",
        "answers": [
          {
            "text": "Yes, preferred solution would work.",
            "next": "n4"
          },
          {
            "text": "I would prefer another option for preferred solution.",
            "next": "alt"
          }
        ]
      },
      "alt": {
        "bot": "We can offer an alternative arrangement for preferred solution.",
        "de": "Wir können eine Alternative für „preferred solution“ anbieten.",
        "answers": [
          {
            "text": "That sounds better.",
            "next": "n4"
          },
          {
            "text": "The original option is fine after all.",
            "next": "n4"
          }
        ]
      },
      "n4": {
        "bot": "How would you like to handle written confirmation?",
        "de": "Wie möchten Sie mit „written confirmation“ umgehen?",
        "answers": [
          {
            "text": "Please proceed with written confirmation.",
            "next": "end"
          },
          {
            "text": "Could you confirm written confirmation in writing?",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has been arranged.",
        "de": "Danke. Alles wurde organisiert.",
        "answers": []
      }
    }
  },
  {
    "id": "branch_university",
    "topic": "Bildung",
    "title": "Universitätskurs wählen",
    "level": "A2-B1",
    "start": "n1",
    "nodes": {
      "n1": {
        "bot": "How can I help you with course interest?",
        "de": "Wie kann ich Ihnen bei „course interest“ helfen?",
        "answers": [
          {
            "text": "I need help with course interest.",
            "next": "n2"
          },
          {
            "text": "I have a question about course interest.",
            "next": "n2"
          }
        ]
      },
      "n2": {
        "bot": "Could you provide more information about entry requirement?",
        "de": "Könnten Sie mehr Informationen zu „entry requirement“ geben?",
        "answers": [
          {
            "text": "Yes, here are the details about entry requirement.",
            "next": "n3"
          },
          {
            "text": "Could you explain what you need for entry requirement?",
            "next": "n3"
          }
        ]
      },
      "n3": {
        "bot": "Would the following option work: class schedule?",
        "de": "Würde folgende Option passen: „class schedule“?",
        "answers": [
          {
            "text": "Yes, class schedule would work.",
            "next": "n4"
          },
          {
            "text": "I would prefer another option for class schedule.",
            "next": "alt"
          }
        ]
      },
      "alt": {
        "bot": "We can offer an alternative arrangement for class schedule.",
        "de": "Wir können eine Alternative für „class schedule“ anbieten.",
        "answers": [
          {
            "text": "That sounds better.",
            "next": "n4"
          },
          {
            "text": "The original option is fine after all.",
            "next": "n4"
          }
        ]
      },
      "n4": {
        "bot": "How would you like to handle registration?",
        "de": "Wie möchten Sie mit „registration“ umgehen?",
        "answers": [
          {
            "text": "Please proceed with registration.",
            "next": "end"
          },
          {
            "text": "Could you confirm registration in writing?",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has been arranged.",
        "de": "Danke. Alles wurde organisiert.",
        "answers": []
      }
    }
  },
  {
    "id": "branch_taxi",
    "topic": "Taxi",
    "title": "Taxifahrt mit Umleitung",
    "level": "A2-B1",
    "start": "n1",
    "nodes": {
      "n1": {
        "bot": "How can I help you with destination?",
        "de": "Wie kann ich Ihnen bei „destination“ helfen?",
        "answers": [
          {
            "text": "I need help with destination.",
            "next": "n2"
          },
          {
            "text": "I have a question about destination.",
            "next": "n2"
          }
        ]
      },
      "n2": {
        "bot": "Could you provide more information about traffic problem?",
        "de": "Könnten Sie mehr Informationen zu „traffic problem“ geben?",
        "answers": [
          {
            "text": "Yes, here are the details about traffic problem.",
            "next": "n3"
          },
          {
            "text": "Could you explain what you need for traffic problem?",
            "next": "n3"
          }
        ]
      },
      "n3": {
        "bot": "Would the following option work: alternative route?",
        "de": "Würde folgende Option passen: „alternative route“?",
        "answers": [
          {
            "text": "Yes, alternative route would work.",
            "next": "n4"
          },
          {
            "text": "I would prefer another option for alternative route.",
            "next": "alt"
          }
        ]
      },
      "alt": {
        "bot": "We can offer an alternative arrangement for alternative route.",
        "de": "Wir können eine Alternative für „alternative route“ anbieten.",
        "answers": [
          {
            "text": "That sounds better.",
            "next": "n4"
          },
          {
            "text": "The original option is fine after all.",
            "next": "n4"
          }
        ]
      },
      "n4": {
        "bot": "How would you like to handle payment?",
        "de": "Wie möchten Sie mit „payment“ umgehen?",
        "answers": [
          {
            "text": "Please proceed with payment.",
            "next": "end"
          },
          {
            "text": "Could you confirm payment in writing?",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has been arranged.",
        "de": "Danke. Alles wurde organisiert.",
        "answers": []
      }
    }
  },
  {
    "id": "branch_museum",
    "topic": "Museum",
    "title": "Museum mit Führung",
    "level": "A2-B1",
    "start": "n1",
    "nodes": {
      "n1": {
        "bot": "How can I help you with ticket choice?",
        "de": "Wie kann ich Ihnen bei „ticket choice“ helfen?",
        "answers": [
          {
            "text": "I need help with ticket choice.",
            "next": "n2"
          },
          {
            "text": "I have a question about ticket choice.",
            "next": "n2"
          }
        ]
      },
      "n2": {
        "bot": "Could you provide more information about special exhibition?",
        "de": "Könnten Sie mehr Informationen zu „special exhibition“ geben?",
        "answers": [
          {
            "text": "Yes, here are the details about special exhibition.",
            "next": "n3"
          },
          {
            "text": "Could you explain what you need for special exhibition?",
            "next": "n3"
          }
        ]
      },
      "n3": {
        "bot": "Would the following option work: guided tour?",
        "de": "Würde folgende Option passen: „guided tour“?",
        "answers": [
          {
            "text": "Yes, guided tour would work.",
            "next": "n4"
          },
          {
            "text": "I would prefer another option for guided tour.",
            "next": "alt"
          }
        ]
      },
      "alt": {
        "bot": "We can offer an alternative arrangement for guided tour.",
        "de": "Wir können eine Alternative für „guided tour“ anbieten.",
        "answers": [
          {
            "text": "That sounds better.",
            "next": "n4"
          },
          {
            "text": "The original option is fine after all.",
            "next": "n4"
          }
        ]
      },
      "n4": {
        "bot": "How would you like to handle audio guide?",
        "de": "Wie möchten Sie mit „audio guide“ umgehen?",
        "answers": [
          {
            "text": "Please proceed with audio guide.",
            "next": "end"
          },
          {
            "text": "Could you confirm audio guide in writing?",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has been arranged.",
        "de": "Danke. Alles wurde organisiert.",
        "answers": []
      }
    }
  },
  {
    "id": "branch_apartment",
    "topic": "Wohnen",
    "title": "Ferienwohnung und Hausregeln",
    "level": "A2-B1",
    "start": "n1",
    "nodes": {
      "n1": {
        "bot": "How can I help you with arrival time?",
        "de": "Wie kann ich Ihnen bei „arrival time“ helfen?",
        "answers": [
          {
            "text": "I need help with arrival time.",
            "next": "n2"
          },
          {
            "text": "I have a question about arrival time.",
            "next": "n2"
          }
        ]
      },
      "n2": {
        "bot": "Could you provide more information about key collection?",
        "de": "Könnten Sie mehr Informationen zu „key collection“ geben?",
        "answers": [
          {
            "text": "Yes, here are the details about key collection.",
            "next": "n3"
          },
          {
            "text": "Could you explain what you need for key collection?",
            "next": "n3"
          }
        ]
      },
      "n3": {
        "bot": "Would the following option work: house rules?",
        "de": "Würde folgende Option passen: „house rules“?",
        "answers": [
          {
            "text": "Yes, house rules would work.",
            "next": "n4"
          },
          {
            "text": "I would prefer another option for house rules.",
            "next": "alt"
          }
        ]
      },
      "alt": {
        "bot": "We can offer an alternative arrangement for house rules.",
        "de": "Wir können eine Alternative für „house rules“ anbieten.",
        "answers": [
          {
            "text": "That sounds better.",
            "next": "n4"
          },
          {
            "text": "The original option is fine after all.",
            "next": "n4"
          }
        ]
      },
      "n4": {
        "bot": "How would you like to handle checkout?",
        "de": "Wie möchten Sie mit „checkout“ umgehen?",
        "answers": [
          {
            "text": "Please proceed with checkout.",
            "next": "end"
          },
          {
            "text": "Could you confirm checkout in writing?",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has been arranged.",
        "de": "Danke. Alles wurde organisiert.",
        "answers": []
      }
    }
  },
  {
    "id": "branch_phone",
    "topic": "Telefon",
    "title": "Geschäftliches Telefonat",
    "level": "A2-B1",
    "start": "n1",
    "nodes": {
      "n1": {
        "bot": "How can I help you with person requested?",
        "de": "Wie kann ich Ihnen bei „person requested“ helfen?",
        "answers": [
          {
            "text": "I need help with person requested.",
            "next": "n2"
          },
          {
            "text": "I have a question about person requested.",
            "next": "n2"
          }
        ]
      },
      "n2": {
        "bot": "Could you provide more information about reason for call?",
        "de": "Könnten Sie mehr Informationen zu „reason for call“ geben?",
        "answers": [
          {
            "text": "Yes, here are the details about reason for call.",
            "next": "n3"
          },
          {
            "text": "Could you explain what you need for reason for call?",
            "next": "n3"
          }
        ]
      },
      "n3": {
        "bot": "Would the following option work: message?",
        "de": "Würde folgende Option passen: „message“?",
        "answers": [
          {
            "text": "Yes, message would work.",
            "next": "n4"
          },
          {
            "text": "I would prefer another option for message.",
            "next": "alt"
          }
        ]
      },
      "alt": {
        "bot": "We can offer an alternative arrangement for message.",
        "de": "Wir können eine Alternative für „message“ anbieten.",
        "answers": [
          {
            "text": "That sounds better.",
            "next": "n4"
          },
          {
            "text": "The original option is fine after all.",
            "next": "n4"
          }
        ]
      },
      "n4": {
        "bot": "How would you like to handle callback time?",
        "de": "Wie möchten Sie mit „callback time“ umgehen?",
        "answers": [
          {
            "text": "Please proceed with callback time.",
            "next": "end"
          },
          {
            "text": "Could you confirm callback time in writing?",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has been arranged.",
        "de": "Danke. Alles wurde organisiert.",
        "answers": []
      }
    }
  },
  {
    "id": "branch_online_account",
    "topic": "Digital",
    "title": "Onlinekonto wiederherstellen",
    "level": "A2-B1",
    "start": "n1",
    "nodes": {
      "n1": {
        "bot": "How can I help you with login problem?",
        "de": "Wie kann ich Ihnen bei „login problem“ helfen?",
        "answers": [
          {
            "text": "I need help with login problem.",
            "next": "n2"
          },
          {
            "text": "I have a question about login problem.",
            "next": "n2"
          }
        ]
      },
      "n2": {
        "bot": "Could you provide more information about verification code?",
        "de": "Könnten Sie mehr Informationen zu „verification code“ geben?",
        "answers": [
          {
            "text": "Yes, here are the details about verification code.",
            "next": "n3"
          },
          {
            "text": "Could you explain what you need for verification code?",
            "next": "n3"
          }
        ]
      },
      "n3": {
        "bot": "Would the following option work: new password?",
        "de": "Würde folgende Option passen: „new password“?",
        "answers": [
          {
            "text": "Yes, new password would work.",
            "next": "n4"
          },
          {
            "text": "I would prefer another option for new password.",
            "next": "alt"
          }
        ]
      },
      "alt": {
        "bot": "We can offer an alternative arrangement for new password.",
        "de": "Wir können eine Alternative für „new password“ anbieten.",
        "answers": [
          {
            "text": "That sounds better.",
            "next": "n4"
          },
          {
            "text": "The original option is fine after all.",
            "next": "n4"
          }
        ]
      },
      "n4": {
        "bot": "How would you like to handle security settings?",
        "de": "Wie möchten Sie mit „security settings“ umgehen?",
        "answers": [
          {
            "text": "Please proceed with security settings.",
            "next": "end"
          },
          {
            "text": "Could you confirm security settings in writing?",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has been arranged.",
        "de": "Danke. Alles wurde organisiert.",
        "answers": []
      }
    }
  },
  {
    "id": "branch_insurance",
    "topic": "Versicherung",
    "title": "Reiseversicherung abschließen",
    "level": "A2-B1",
    "start": "n1",
    "nodes": {
      "n1": {
        "bot": "How can I help you with destination?",
        "de": "Wie kann ich Ihnen bei „destination“ helfen?",
        "answers": [
          {
            "text": "I need help with destination.",
            "next": "n2"
          },
          {
            "text": "I have a question about destination.",
            "next": "n2"
          }
        ]
      },
      "n2": {
        "bot": "Could you provide more information about coverage needed?",
        "de": "Könnten Sie mehr Informationen zu „coverage needed“ geben?",
        "answers": [
          {
            "text": "Yes, here are the details about coverage needed.",
            "next": "n3"
          },
          {
            "text": "Could you explain what you need for coverage needed?",
            "next": "n3"
          }
        ]
      },
      "n3": {
        "bot": "Would the following option work: deductible?",
        "de": "Würde folgende Option passen: „deductible“?",
        "answers": [
          {
            "text": "Yes, deductible would work.",
            "next": "n4"
          },
          {
            "text": "I would prefer another option for deductible.",
            "next": "alt"
          }
        ]
      },
      "alt": {
        "bot": "We can offer an alternative arrangement for deductible.",
        "de": "Wir können eine Alternative für „deductible“ anbieten.",
        "answers": [
          {
            "text": "That sounds better.",
            "next": "n4"
          },
          {
            "text": "The original option is fine after all.",
            "next": "n4"
          }
        ]
      },
      "n4": {
        "bot": "How would you like to handle policy confirmation?",
        "de": "Wie möchten Sie mit „policy confirmation“ umgehen?",
        "answers": [
          {
            "text": "Please proceed with policy confirmation.",
            "next": "end"
          },
          {
            "text": "Could you confirm policy confirmation in writing?",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has been arranged.",
        "de": "Danke. Alles wurde organisiert.",
        "answers": []
      }
    }
  },
  {
    "id": "branch_train",
    "topic": "Bahnhof",
    "title": "Zugreise mit Umstieg",
    "level": "A2-B1",
    "start": "n1",
    "nodes": {
      "n1": {
        "bot": "How can I help you with destination?",
        "de": "Wie kann ich Ihnen bei „destination“ helfen?",
        "answers": [
          {
            "text": "I need help with destination.",
            "next": "n2"
          },
          {
            "text": "I have a question about destination.",
            "next": "n2"
          }
        ]
      },
      "n2": {
        "bot": "Could you provide more information about ticket type?",
        "de": "Könnten Sie mehr Informationen zu „ticket type“ geben?",
        "answers": [
          {
            "text": "Yes, here are the details about ticket type.",
            "next": "n3"
          },
          {
            "text": "Could you explain what you need for ticket type?",
            "next": "n3"
          }
        ]
      },
      "n3": {
        "bot": "Would the following option work: connection station?",
        "de": "Würde folgende Option passen: „connection station“?",
        "answers": [
          {
            "text": "Yes, connection station would work.",
            "next": "n4"
          },
          {
            "text": "I would prefer another option for connection station.",
            "next": "alt"
          }
        ]
      },
      "alt": {
        "bot": "We can offer an alternative arrangement for connection station.",
        "de": "Wir können eine Alternative für „connection station“ anbieten.",
        "answers": [
          {
            "text": "That sounds better.",
            "next": "n4"
          },
          {
            "text": "The original option is fine after all.",
            "next": "n4"
          }
        ]
      },
      "n4": {
        "bot": "How would you like to handle platform?",
        "de": "Wie möchten Sie mit „platform“ umgehen?",
        "answers": [
          {
            "text": "Please proceed with platform.",
            "next": "end"
          },
          {
            "text": "Could you confirm platform in writing?",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has been arranged.",
        "de": "Danke. Alles wurde organisiert.",
        "answers": []
      }
    }
  },
  {
    "id": "branch_shopping",
    "topic": "Einkaufen",
    "title": "Kleidung kaufen und umtauschen",
    "level": "A2-B1",
    "start": "n1",
    "nodes": {
      "n1": {
        "bot": "How can I help you with size needed?",
        "de": "Wie kann ich Ihnen bei „size needed“ helfen?",
        "answers": [
          {
            "text": "I need help with size needed.",
            "next": "n2"
          },
          {
            "text": "I have a question about size needed.",
            "next": "n2"
          }
        ]
      },
      "n2": {
        "bot": "Could you provide more information about colour choice?",
        "de": "Könnten Sie mehr Informationen zu „colour choice“ geben?",
        "answers": [
          {
            "text": "Yes, here are the details about colour choice.",
            "next": "n3"
          },
          {
            "text": "Could you explain what you need for colour choice?",
            "next": "n3"
          }
        ]
      },
      "n3": {
        "bot": "Would the following option work: fitting room?",
        "de": "Würde folgende Option passen: „fitting room“?",
        "answers": [
          {
            "text": "Yes, fitting room would work.",
            "next": "n4"
          },
          {
            "text": "I would prefer another option for fitting room.",
            "next": "alt"
          }
        ]
      },
      "alt": {
        "bot": "We can offer an alternative arrangement for fitting room.",
        "de": "Wir können eine Alternative für „fitting room“ anbieten.",
        "answers": [
          {
            "text": "That sounds better.",
            "next": "n4"
          },
          {
            "text": "The original option is fine after all.",
            "next": "n4"
          }
        ]
      },
      "n4": {
        "bot": "How would you like to handle return policy?",
        "de": "Wie möchten Sie mit „return policy“ umgehen?",
        "answers": [
          {
            "text": "Please proceed with return policy.",
            "next": "end"
          },
          {
            "text": "Could you confirm return policy in writing?",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has been arranged.",
        "de": "Danke. Alles wurde organisiert.",
        "answers": []
      }
    }
  },
  {
    "id": "branch_camping",
    "topic": "Camping",
    "title": "Campingplatz und Wetter",
    "level": "A2-B1",
    "start": "n1",
    "nodes": {
      "n1": {
        "bot": "How can I help you with pitch type?",
        "de": "Wie kann ich Ihnen bei „pitch type“ helfen?",
        "answers": [
          {
            "text": "I need help with pitch type.",
            "next": "n2"
          },
          {
            "text": "I have a question about pitch type.",
            "next": "n2"
          }
        ]
      },
      "n2": {
        "bot": "Could you provide more information about electricity?",
        "de": "Könnten Sie mehr Informationen zu „electricity“ geben?",
        "answers": [
          {
            "text": "Yes, here are the details about electricity.",
            "next": "n3"
          },
          {
            "text": "Could you explain what you need for electricity?",
            "next": "n3"
          }
        ]
      },
      "n3": {
        "bot": "Would the following option work: weather warning?",
        "de": "Würde folgende Option passen: „weather warning“?",
        "answers": [
          {
            "text": "Yes, weather warning would work.",
            "next": "n4"
          },
          {
            "text": "I would prefer another option for weather warning.",
            "next": "alt"
          }
        ]
      },
      "alt": {
        "bot": "We can offer an alternative arrangement for weather warning.",
        "de": "Wir können eine Alternative für „weather warning“ anbieten.",
        "answers": [
          {
            "text": "That sounds better.",
            "next": "n4"
          },
          {
            "text": "The original option is fine after all.",
            "next": "n4"
          }
        ]
      },
      "n4": {
        "bot": "How would you like to handle safer location?",
        "de": "Wie möchten Sie mit „safer location“ umgehen?",
        "answers": [
          {
            "text": "Please proceed with safer location.",
            "next": "end"
          },
          {
            "text": "Could you confirm safer location in writing?",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has been arranged.",
        "de": "Danke. Alles wurde organisiert.",
        "answers": []
      }
    }
  },
  {
    "id": "branch_smalltalk",
    "topic": "Small Talk",
    "title": "Längeres Kennenlernen",
    "level": "A2-B1",
    "start": "n1",
    "nodes": {
      "n1": {
        "bot": "How can I help you with place of origin?",
        "de": "Wie kann ich Ihnen bei „place of origin“ helfen?",
        "answers": [
          {
            "text": "I need help with place of origin.",
            "next": "n2"
          },
          {
            "text": "I have a question about place of origin.",
            "next": "n2"
          }
        ]
      },
      "n2": {
        "bot": "Could you provide more information about hobbies?",
        "de": "Könnten Sie mehr Informationen zu „hobbies“ geben?",
        "answers": [
          {
            "text": "Yes, here are the details about hobbies.",
            "next": "n3"
          },
          {
            "text": "Could you explain what you need for hobbies?",
            "next": "n3"
          }
        ]
      },
      "n3": {
        "bot": "Would the following option work: travel experience?",
        "de": "Würde folgende Option passen: „travel experience“?",
        "answers": [
          {
            "text": "Yes, travel experience would work.",
            "next": "n4"
          },
          {
            "text": "I would prefer another option for travel experience.",
            "next": "alt"
          }
        ]
      },
      "alt": {
        "bot": "We can offer an alternative arrangement for travel experience.",
        "de": "Wir können eine Alternative für „travel experience“ anbieten.",
        "answers": [
          {
            "text": "That sounds better.",
            "next": "n4"
          },
          {
            "text": "The original option is fine after all.",
            "next": "n4"
          }
        ]
      },
      "n4": {
        "bot": "How would you like to handle future plans?",
        "de": "Wie möchten Sie mit „future plans“ umgehen?",
        "answers": [
          {
            "text": "Please proceed with future plans.",
            "next": "end"
          },
          {
            "text": "Could you confirm future plans in writing?",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has been arranged.",
        "de": "Danke. Alles wurde organisiert.",
        "answers": []
      }
    }
  },
  {
    "id": "branch_work_meeting",
    "topic": "Beruf",
    "title": "Projektmeeting",
    "level": "A2-B1",
    "start": "n1",
    "nodes": {
      "n1": {
        "bot": "How can I help you with current status?",
        "de": "Wie kann ich Ihnen bei „current status“ helfen?",
        "answers": [
          {
            "text": "I need help with current status.",
            "next": "n2"
          },
          {
            "text": "I have a question about current status.",
            "next": "n2"
          }
        ]
      },
      "n2": {
        "bot": "Could you provide more information about main risk?",
        "de": "Könnten Sie mehr Informationen zu „main risk“ geben?",
        "answers": [
          {
            "text": "Yes, here are the details about main risk.",
            "next": "n3"
          },
          {
            "text": "Could you explain what you need for main risk?",
            "next": "n3"
          }
        ]
      },
      "n3": {
        "bot": "Would the following option work: resource need?",
        "de": "Würde folgende Option passen: „resource need“?",
        "answers": [
          {
            "text": "Yes, resource need would work.",
            "next": "n4"
          },
          {
            "text": "I would prefer another option for resource need.",
            "next": "alt"
          }
        ]
      },
      "alt": {
        "bot": "We can offer an alternative arrangement for resource need.",
        "de": "Wir können eine Alternative für „resource need“ anbieten.",
        "answers": [
          {
            "text": "That sounds better.",
            "next": "n4"
          },
          {
            "text": "The original option is fine after all.",
            "next": "n4"
          }
        ]
      },
      "n4": {
        "bot": "How would you like to handle next deadline?",
        "de": "Wie möchten Sie mit „next deadline“ umgehen?",
        "answers": [
          {
            "text": "Please proceed with next deadline.",
            "next": "end"
          },
          {
            "text": "Could you confirm next deadline in writing?",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has been arranged.",
        "de": "Danke. Alles wurde organisiert.",
        "answers": []
      }
    }
  },
  {
    "id": "branch_city_help",
    "topic": "Reisen",
    "title": "Touristeninformation",
    "level": "A2-B1",
    "start": "n1",
    "nodes": {
      "n1": {
        "bot": "How can I help you with length of stay?",
        "de": "Wie kann ich Ihnen bei „length of stay“ helfen?",
        "answers": [
          {
            "text": "I need help with length of stay.",
            "next": "n2"
          },
          {
            "text": "I have a question about length of stay.",
            "next": "n2"
          }
        ]
      },
      "n2": {
        "bot": "Could you provide more information about interests?",
        "de": "Könnten Sie mehr Informationen zu „interests“ geben?",
        "answers": [
          {
            "text": "Yes, here are the details about interests.",
            "next": "n3"
          },
          {
            "text": "Could you explain what you need for interests?",
            "next": "n3"
          }
        ]
      },
      "n3": {
        "bot": "Would the following option work: recommended route?",
        "de": "Würde folgende Option passen: „recommended route“?",
        "answers": [
          {
            "text": "Yes, recommended route would work.",
            "next": "n4"
          },
          {
            "text": "I would prefer another option for recommended route.",
            "next": "alt"
          }
        ]
      },
      "alt": {
        "bot": "We can offer an alternative arrangement for recommended route.",
        "de": "Wir können eine Alternative für „recommended route“ anbieten.",
        "answers": [
          {
            "text": "That sounds better.",
            "next": "n4"
          },
          {
            "text": "The original option is fine after all.",
            "next": "n4"
          }
        ]
      },
      "n4": {
        "bot": "How would you like to handle tour booking?",
        "de": "Wie möchten Sie mit „tour booking“ umgehen?",
        "answers": [
          {
            "text": "Please proceed with tour booking.",
            "next": "end"
          },
          {
            "text": "Could you confirm tour booking in writing?",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has been arranged.",
        "de": "Danke. Alles wurde organisiert.",
        "answers": []
      }
    }
  },
  {
    "id": "branch_hospital",
    "topic": "Gesundheit",
    "title": "Krankenhausaufnahme",
    "level": "A2-B1",
    "start": "n1",
    "nodes": {
      "n1": {
        "bot": "How can I help you with reason for visit?",
        "de": "Wie kann ich Ihnen bei „reason for visit“ helfen?",
        "answers": [
          {
            "text": "I need help with reason for visit.",
            "next": "n2"
          },
          {
            "text": "I have a question about reason for visit.",
            "next": "n2"
          }
        ]
      },
      "n2": {
        "bot": "Could you provide more information about medical history?",
        "de": "Könnten Sie mehr Informationen zu „medical history“ geben?",
        "answers": [
          {
            "text": "Yes, here are the details about medical history.",
            "next": "n3"
          },
          {
            "text": "Could you explain what you need for medical history?",
            "next": "n3"
          }
        ]
      },
      "n3": {
        "bot": "Would the following option work: test plan?",
        "de": "Würde folgende Option passen: „test plan“?",
        "answers": [
          {
            "text": "Yes, test plan would work.",
            "next": "n4"
          },
          {
            "text": "I would prefer another option for test plan.",
            "next": "alt"
          }
        ]
      },
      "alt": {
        "bot": "We can offer an alternative arrangement for test plan.",
        "de": "Wir können eine Alternative für „test plan“ anbieten.",
        "answers": [
          {
            "text": "That sounds better.",
            "next": "n4"
          },
          {
            "text": "The original option is fine after all.",
            "next": "n4"
          }
        ]
      },
      "n4": {
        "bot": "How would you like to handle discharge?",
        "de": "Wie möchten Sie mit „discharge“ umgehen?",
        "answers": [
          {
            "text": "Please proceed with discharge.",
            "next": "end"
          },
          {
            "text": "Could you confirm discharge in writing?",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has been arranged.",
        "de": "Danke. Alles wurde organisiert.",
        "answers": []
      }
    }
  },
  {
    "id": "branch_environment",
    "topic": "Umwelt",
    "title": "Nachhaltigkeitsprojekt",
    "level": "A2-B1",
    "start": "n1",
    "nodes": {
      "n1": {
        "bot": "How can I help you with current problem?",
        "de": "Wie kann ich Ihnen bei „current problem“ helfen?",
        "answers": [
          {
            "text": "I need help with current problem.",
            "next": "n2"
          },
          {
            "text": "I have a question about current problem.",
            "next": "n2"
          }
        ]
      },
      "n2": {
        "bot": "Could you provide more information about community action?",
        "de": "Könnten Sie mehr Informationen zu „community action“ geben?",
        "answers": [
          {
            "text": "Yes, here are the details about community action.",
            "next": "n3"
          },
          {
            "text": "Could you explain what you need for community action?",
            "next": "n3"
          }
        ]
      },
      "n3": {
        "bot": "Would the following option work: available funding?",
        "de": "Würde folgende Option passen: „available funding“?",
        "answers": [
          {
            "text": "Yes, available funding would work.",
            "next": "n4"
          },
          {
            "text": "I would prefer another option for available funding.",
            "next": "alt"
          }
        ]
      },
      "alt": {
        "bot": "We can offer an alternative arrangement for available funding.",
        "de": "Wir können eine Alternative für „available funding“ anbieten.",
        "answers": [
          {
            "text": "That sounds better.",
            "next": "n4"
          },
          {
            "text": "The original option is fine after all.",
            "next": "n4"
          }
        ]
      },
      "n4": {
        "bot": "How would you like to handle target date?",
        "de": "Wie möchten Sie mit „target date“ umgehen?",
        "answers": [
          {
            "text": "Please proceed with target date.",
            "next": "end"
          },
          {
            "text": "Could you confirm target date in writing?",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has been arranged.",
        "de": "Danke. Alles wurde organisiert.",
        "answers": []
      }
    }
  }
];
