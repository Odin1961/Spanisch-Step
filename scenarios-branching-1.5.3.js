const ES_BRANCHING_SCENARIOS_153 = [
  {
    "id": "branch153_restaurant_event",
    "topic": "Restaurant",
    "title": "Besonderes Restaurantessen",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "How can I help you with the reservation type?",
        "de": "Wie kann ich Ihnen beim Thema „reservation type“ helfen?",
        "answers": [
          {
            "text": "I need to discuss the reservation type.",
            "next": "routeA"
          },
          {
            "text": "I have a problem with the reservation type.",
            "next": "routeB"
          }
        ]
      },
      "routeA": {
        "bot": "Could you give me more information about the guest number?",
        "de": "Könnten Sie mehr Informationen zu „guest number“ geben?",
        "answers": [
          {
            "text": "Yes, the main point is the guest number.",
            "next": "optionA"
          },
          {
            "text": "Could you explain the available options for the guest number?",
            "next": "optionB"
          }
        ]
      },
      "routeB": {
        "bot": "What exactly is wrong with the guest number?",
        "de": "Was genau stimmt bei „guest number“ nicht?",
        "answers": [
          {
            "text": "The guest number is different from what I expected.",
            "next": "optionA"
          },
          {
            "text": "I need an alternative for the guest number.",
            "next": "optionB"
          }
        ]
      },
      "optionA": {
        "bot": "Would the menu choice be an acceptable solution?",
        "de": "Wäre „menu choice“ eine akzeptable Lösung?",
        "answers": [
          {
            "text": "Yes, please proceed with the menu choice.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare another option with the menu choice.",
            "next": "confirmB"
          }
        ]
      },
      "optionB": {
        "bot": "We can offer another arrangement for the menu choice.",
        "de": "Wir können eine andere Lösung für „menu choice“ anbieten.",
        "answers": [
          {
            "text": "That alternative for the menu choice sounds better.",
            "next": "confirmA"
          },
          {
            "text": "The original menu choice is fine after all.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How would you like us to confirm the payment?",
        "de": "Wie sollen wir „payment“ bestätigen?",
        "answers": [
          {
            "text": "Please confirm the payment by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the payment would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you need any further details about the payment?",
        "de": "Benötigen Sie weitere Einzelheiten zu „payment“?",
        "answers": [
          {
            "text": "No, the payment is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the payment once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has been arranged and recorded.",
        "de": "Danke. Alles wurde organisiert und festgehalten.",
        "answers": []
      }
    }
  },
  {
    "id": "branch153_hotel_extension",
    "topic": "Hotel",
    "title": "Aufenthalt verlängern",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "How can I help you with the current booking?",
        "de": "Wie kann ich Ihnen beim Thema „current booking“ helfen?",
        "answers": [
          {
            "text": "I need to discuss the current booking.",
            "next": "routeA"
          },
          {
            "text": "I have a problem with the current booking.",
            "next": "routeB"
          }
        ]
      },
      "routeA": {
        "bot": "Could you give me more information about the extra nights?",
        "de": "Könnten Sie mehr Informationen zu „extra nights“ geben?",
        "answers": [
          {
            "text": "Yes, the main point is the extra nights.",
            "next": "optionA"
          },
          {
            "text": "Could you explain the available options for the extra nights?",
            "next": "optionB"
          }
        ]
      },
      "routeB": {
        "bot": "What exactly is wrong with the extra nights?",
        "de": "Was genau stimmt bei „extra nights“ nicht?",
        "answers": [
          {
            "text": "The extra nights is different from what I expected.",
            "next": "optionA"
          },
          {
            "text": "I need an alternative for the extra nights.",
            "next": "optionB"
          }
        ]
      },
      "optionA": {
        "bot": "Would the room availability be an acceptable solution?",
        "de": "Wäre „room availability“ eine akzeptable Lösung?",
        "answers": [
          {
            "text": "Yes, please proceed with the room availability.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare another option with the room availability.",
            "next": "confirmB"
          }
        ]
      },
      "optionB": {
        "bot": "We can offer another arrangement for the room availability.",
        "de": "Wir können eine andere Lösung für „room availability“ anbieten.",
        "answers": [
          {
            "text": "That alternative for the room availability sounds better.",
            "next": "confirmA"
          },
          {
            "text": "The original room availability is fine after all.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How would you like us to confirm the updated invoice?",
        "de": "Wie sollen wir „updated invoice“ bestätigen?",
        "answers": [
          {
            "text": "Please confirm the updated invoice by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the updated invoice would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you need any further details about the updated invoice?",
        "de": "Benötigen Sie weitere Einzelheiten zu „updated invoice“?",
        "answers": [
          {
            "text": "No, the updated invoice is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the updated invoice once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has been arranged and recorded.",
        "de": "Danke. Alles wurde organisiert und festgehalten.",
        "answers": []
      }
    }
  },
  {
    "id": "branch153_airport_upgrade",
    "topic": "Flughafen",
    "title": "Sitzplatz-Upgrade",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "How can I help you with the current seat?",
        "de": "Wie kann ich Ihnen beim Thema „current seat“ helfen?",
        "answers": [
          {
            "text": "I need to discuss the current seat.",
            "next": "routeA"
          },
          {
            "text": "I have a problem with the current seat.",
            "next": "routeB"
          }
        ]
      },
      "routeA": {
        "bot": "Could you give me more information about the upgrade option?",
        "de": "Könnten Sie mehr Informationen zu „upgrade option“ geben?",
        "answers": [
          {
            "text": "Yes, the main point is the upgrade option.",
            "next": "optionA"
          },
          {
            "text": "Could you explain the available options for the upgrade option?",
            "next": "optionB"
          }
        ]
      },
      "routeB": {
        "bot": "What exactly is wrong with the upgrade option?",
        "de": "Was genau stimmt bei „upgrade option“ nicht?",
        "answers": [
          {
            "text": "The upgrade option is different from what I expected.",
            "next": "optionA"
          },
          {
            "text": "I need an alternative for the upgrade option.",
            "next": "optionB"
          }
        ]
      },
      "optionA": {
        "bot": "Would the additional cost be an acceptable solution?",
        "de": "Wäre „additional cost“ eine akzeptable Lösung?",
        "answers": [
          {
            "text": "Yes, please proceed with the additional cost.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare another option with the additional cost.",
            "next": "confirmB"
          }
        ]
      },
      "optionB": {
        "bot": "We can offer another arrangement for the additional cost.",
        "de": "Wir können eine andere Lösung für „additional cost“ anbieten.",
        "answers": [
          {
            "text": "That alternative for the additional cost sounds better.",
            "next": "confirmA"
          },
          {
            "text": "The original additional cost is fine after all.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How would you like us to confirm the new boarding pass?",
        "de": "Wie sollen wir „new boarding pass“ bestätigen?",
        "answers": [
          {
            "text": "Please confirm the new boarding pass by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the new boarding pass would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you need any further details about the new boarding pass?",
        "de": "Benötigen Sie weitere Einzelheiten zu „new boarding pass“?",
        "answers": [
          {
            "text": "No, the new boarding pass is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the new boarding pass once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has been arranged and recorded.",
        "de": "Danke. Alles wurde organisiert und festgehalten.",
        "answers": []
      }
    }
  },
  {
    "id": "branch153_train_cancelled",
    "topic": "Bahnhof",
    "title": "Zugausfall",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "How can I help you with the cancelled service?",
        "de": "Wie kann ich Ihnen beim Thema „cancelled service“ helfen?",
        "answers": [
          {
            "text": "I need to discuss the cancelled service.",
            "next": "routeA"
          },
          {
            "text": "I have a problem with the cancelled service.",
            "next": "routeB"
          }
        ]
      },
      "routeA": {
        "bot": "Could you give me more information about the alternative route?",
        "de": "Könnten Sie mehr Informationen zu „alternative route“ geben?",
        "answers": [
          {
            "text": "Yes, the main point is the alternative route.",
            "next": "optionA"
          },
          {
            "text": "Could you explain the available options for the alternative route?",
            "next": "optionB"
          }
        ]
      },
      "routeB": {
        "bot": "What exactly is wrong with the alternative route?",
        "de": "Was genau stimmt bei „alternative route“ nicht?",
        "answers": [
          {
            "text": "The alternative route is different from what I expected.",
            "next": "optionA"
          },
          {
            "text": "I need an alternative for the alternative route.",
            "next": "optionB"
          }
        ]
      },
      "optionA": {
        "bot": "Would the ticket validity be an acceptable solution?",
        "de": "Wäre „ticket validity“ eine akzeptable Lösung?",
        "answers": [
          {
            "text": "Yes, please proceed with the ticket validity.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare another option with the ticket validity.",
            "next": "confirmB"
          }
        ]
      },
      "optionB": {
        "bot": "We can offer another arrangement for the ticket validity.",
        "de": "Wir können eine andere Lösung für „ticket validity“ anbieten.",
        "answers": [
          {
            "text": "That alternative for the ticket validity sounds better.",
            "next": "confirmA"
          },
          {
            "text": "The original ticket validity is fine after all.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How would you like us to confirm the arrival time?",
        "de": "Wie sollen wir „arrival time“ bestätigen?",
        "answers": [
          {
            "text": "Please confirm the arrival time by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the arrival time would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you need any further details about the arrival time?",
        "de": "Benötigen Sie weitere Einzelheiten zu „arrival time“?",
        "answers": [
          {
            "text": "No, the arrival time is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the arrival time once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has been arranged and recorded.",
        "de": "Danke. Alles wurde organisiert und festgehalten.",
        "answers": []
      }
    }
  },
  {
    "id": "branch153_taxi_pickup",
    "topic": "Taxi",
    "title": "Abholung organisieren",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "How can I help you with the pickup location?",
        "de": "Wie kann ich Ihnen beim Thema „pickup location“ helfen?",
        "answers": [
          {
            "text": "I need to discuss the pickup location.",
            "next": "routeA"
          },
          {
            "text": "I have a problem with the pickup location.",
            "next": "routeB"
          }
        ]
      },
      "routeA": {
        "bot": "Could you give me more information about the arrival time?",
        "de": "Könnten Sie mehr Informationen zu „arrival time“ geben?",
        "answers": [
          {
            "text": "Yes, the main point is the arrival time.",
            "next": "optionA"
          },
          {
            "text": "Could you explain the available options for the arrival time?",
            "next": "optionB"
          }
        ]
      },
      "routeB": {
        "bot": "What exactly is wrong with the arrival time?",
        "de": "Was genau stimmt bei „arrival time“ nicht?",
        "answers": [
          {
            "text": "The arrival time is different from what I expected.",
            "next": "optionA"
          },
          {
            "text": "I need an alternative for the arrival time.",
            "next": "optionB"
          }
        ]
      },
      "optionA": {
        "bot": "Would the luggage amount be an acceptable solution?",
        "de": "Wäre „luggage amount“ eine akzeptable Lösung?",
        "answers": [
          {
            "text": "Yes, please proceed with the luggage amount.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare another option with the luggage amount.",
            "next": "confirmB"
          }
        ]
      },
      "optionB": {
        "bot": "We can offer another arrangement for the luggage amount.",
        "de": "Wir können eine andere Lösung für „luggage amount“ anbieten.",
        "answers": [
          {
            "text": "That alternative for the luggage amount sounds better.",
            "next": "confirmA"
          },
          {
            "text": "The original luggage amount is fine after all.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How would you like us to confirm the contact number?",
        "de": "Wie sollen wir „contact number“ bestätigen?",
        "answers": [
          {
            "text": "Please confirm the contact number by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the contact number would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you need any further details about the contact number?",
        "de": "Benötigen Sie weitere Einzelheiten zu „contact number“?",
        "answers": [
          {
            "text": "No, the contact number is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the contact number once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has been arranged and recorded.",
        "de": "Danke. Alles wurde organisiert und festgehalten.",
        "answers": []
      }
    }
  },
  {
    "id": "branch153_rental_extension",
    "topic": "Autovermietung",
    "title": "Mietwagen verlängern",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "How can I help you with the rental agreement?",
        "de": "Wie kann ich Ihnen beim Thema „rental agreement“ helfen?",
        "answers": [
          {
            "text": "I need to discuss the rental agreement.",
            "next": "routeA"
          },
          {
            "text": "I have a problem with the rental agreement.",
            "next": "routeB"
          }
        ]
      },
      "routeA": {
        "bot": "Could you give me more information about the new return date?",
        "de": "Könnten Sie mehr Informationen zu „new return date“ geben?",
        "answers": [
          {
            "text": "Yes, the main point is the new return date.",
            "next": "optionA"
          },
          {
            "text": "Could you explain the available options for the new return date?",
            "next": "optionB"
          }
        ]
      },
      "routeB": {
        "bot": "What exactly is wrong with the new return date?",
        "de": "Was genau stimmt bei „new return date“ nicht?",
        "answers": [
          {
            "text": "The new return date is different from what I expected.",
            "next": "optionA"
          },
          {
            "text": "I need an alternative for the new return date.",
            "next": "optionB"
          }
        ]
      },
      "optionA": {
        "bot": "Would the additional charge be an acceptable solution?",
        "de": "Wäre „additional charge“ eine akzeptable Lösung?",
        "answers": [
          {
            "text": "Yes, please proceed with the additional charge.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare another option with the additional charge.",
            "next": "confirmB"
          }
        ]
      },
      "optionB": {
        "bot": "We can offer another arrangement for the additional charge.",
        "de": "Wir können eine andere Lösung für „additional charge“ anbieten.",
        "answers": [
          {
            "text": "That alternative for the additional charge sounds better.",
            "next": "confirmA"
          },
          {
            "text": "The original additional charge is fine after all.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How would you like us to confirm the email confirmation?",
        "de": "Wie sollen wir „email confirmation“ bestätigen?",
        "answers": [
          {
            "text": "Please confirm the email confirmation by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the email confirmation would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you need any further details about the email confirmation?",
        "de": "Benötigen Sie weitere Einzelheiten zu „email confirmation“?",
        "answers": [
          {
            "text": "No, the email confirmation is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the email confirmation once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has been arranged and recorded.",
        "de": "Danke. Alles wurde organisiert und festgehalten.",
        "answers": []
      }
    }
  },
  {
    "id": "branch153_shopping_collection",
    "topic": "Einkaufen",
    "title": "Onlinebestellung abholen",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "How can I help you with the order number?",
        "de": "Wie kann ich Ihnen beim Thema „order number“ helfen?",
        "answers": [
          {
            "text": "I need to discuss the order number.",
            "next": "routeA"
          },
          {
            "text": "I have a problem with the order number.",
            "next": "routeB"
          }
        ]
      },
      "routeA": {
        "bot": "Could you give me more information about the collection code?",
        "de": "Könnten Sie mehr Informationen zu „collection code“ geben?",
        "answers": [
          {
            "text": "Yes, the main point is the collection code.",
            "next": "optionA"
          },
          {
            "text": "Could you explain the available options for the collection code?",
            "next": "optionB"
          }
        ]
      },
      "routeB": {
        "bot": "What exactly is wrong with the collection code?",
        "de": "Was genau stimmt bei „collection code“ nicht?",
        "answers": [
          {
            "text": "The collection code is different from what I expected.",
            "next": "optionA"
          },
          {
            "text": "I need an alternative for the collection code.",
            "next": "optionB"
          }
        ]
      },
      "optionA": {
        "bot": "Would the item check be an acceptable solution?",
        "de": "Wäre „item check“ eine akzeptable Lösung?",
        "answers": [
          {
            "text": "Yes, please proceed with the item check.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare another option with the item check.",
            "next": "confirmB"
          }
        ]
      },
      "optionB": {
        "bot": "We can offer another arrangement for the item check.",
        "de": "Wir können eine andere Lösung für „item check“ anbieten.",
        "answers": [
          {
            "text": "That alternative for the item check sounds better.",
            "next": "confirmA"
          },
          {
            "text": "The original item check is fine after all.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How would you like us to confirm the receipt?",
        "de": "Wie sollen wir „receipt“ bestätigen?",
        "answers": [
          {
            "text": "Please confirm the receipt by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the receipt would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you need any further details about the receipt?",
        "de": "Benötigen Sie weitere Einzelheiten zu „receipt“?",
        "answers": [
          {
            "text": "No, the receipt is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the receipt once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has been arranged and recorded.",
        "de": "Danke. Alles wurde organisiert und festgehalten.",
        "answers": []
      }
    }
  },
  {
    "id": "branch153_doctor_followup",
    "topic": "Gesundheit",
    "title": "Folgetermin",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "How can I help you with the current symptoms?",
        "de": "Wie kann ich Ihnen beim Thema „current symptoms“ helfen?",
        "answers": [
          {
            "text": "I need to discuss the current symptoms.",
            "next": "routeA"
          },
          {
            "text": "I have a problem with the current symptoms.",
            "next": "routeB"
          }
        ]
      },
      "routeA": {
        "bot": "Could you give me more information about the treatment response?",
        "de": "Könnten Sie mehr Informationen zu „treatment response“ geben?",
        "answers": [
          {
            "text": "Yes, the main point is the treatment response.",
            "next": "optionA"
          },
          {
            "text": "Could you explain the available options for the treatment response?",
            "next": "optionB"
          }
        ]
      },
      "routeB": {
        "bot": "What exactly is wrong with the treatment response?",
        "de": "Was genau stimmt bei „treatment response“ nicht?",
        "answers": [
          {
            "text": "The treatment response is different from what I expected.",
            "next": "optionA"
          },
          {
            "text": "I need an alternative for the treatment response.",
            "next": "optionB"
          }
        ]
      },
      "optionA": {
        "bot": "Would the next examination be an acceptable solution?",
        "de": "Wäre „next examination“ eine akzeptable Lösung?",
        "answers": [
          {
            "text": "Yes, please proceed with the next examination.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare another option with the next examination.",
            "next": "confirmB"
          }
        ]
      },
      "optionB": {
        "bot": "We can offer another arrangement for the next examination.",
        "de": "Wir können eine andere Lösung für „next examination“ anbieten.",
        "answers": [
          {
            "text": "That alternative for the next examination sounds better.",
            "next": "confirmA"
          },
          {
            "text": "The original next examination is fine after all.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How would you like us to confirm the new appointment?",
        "de": "Wie sollen wir „new appointment“ bestätigen?",
        "answers": [
          {
            "text": "Please confirm the new appointment by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the new appointment would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you need any further details about the new appointment?",
        "de": "Benötigen Sie weitere Einzelheiten zu „new appointment“?",
        "answers": [
          {
            "text": "No, the new appointment is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the new appointment once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has been arranged and recorded.",
        "de": "Danke. Alles wurde organisiert und festgehalten.",
        "answers": []
      }
    }
  },
  {
    "id": "branch153_pharmacy_prescription",
    "topic": "Apotheke",
    "title": "Rezept einlösen",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "How can I help you with the prescription details?",
        "de": "Wie kann ich Ihnen beim Thema „prescription details“ helfen?",
        "answers": [
          {
            "text": "I need to discuss the prescription details.",
            "next": "routeA"
          },
          {
            "text": "I have a problem with the prescription details.",
            "next": "routeB"
          }
        ]
      },
      "routeA": {
        "bot": "Could you give me more information about the medicine availability?",
        "de": "Könnten Sie mehr Informationen zu „medicine availability“ geben?",
        "answers": [
          {
            "text": "Yes, the main point is the medicine availability.",
            "next": "optionA"
          },
          {
            "text": "Could you explain the available options for the medicine availability?",
            "next": "optionB"
          }
        ]
      },
      "routeB": {
        "bot": "What exactly is wrong with the medicine availability?",
        "de": "Was genau stimmt bei „medicine availability“ nicht?",
        "answers": [
          {
            "text": "The medicine availability is different from what I expected.",
            "next": "optionA"
          },
          {
            "text": "I need an alternative for the medicine availability.",
            "next": "optionB"
          }
        ]
      },
      "optionA": {
        "bot": "Would the dosage advice be an acceptable solution?",
        "de": "Wäre „dosage advice“ eine akzeptable Lösung?",
        "answers": [
          {
            "text": "Yes, please proceed with the dosage advice.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare another option with the dosage advice.",
            "next": "confirmB"
          }
        ]
      },
      "optionB": {
        "bot": "We can offer another arrangement for the dosage advice.",
        "de": "Wir können eine andere Lösung für „dosage advice“ anbieten.",
        "answers": [
          {
            "text": "That alternative for the dosage advice sounds better.",
            "next": "confirmA"
          },
          {
            "text": "The original dosage advice is fine after all.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How would you like us to confirm the collection time?",
        "de": "Wie sollen wir „collection time“ bestätigen?",
        "answers": [
          {
            "text": "Please confirm the collection time by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the collection time would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you need any further details about the collection time?",
        "de": "Benötigen Sie weitere Einzelheiten zu „collection time“?",
        "answers": [
          {
            "text": "No, the collection time is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the collection time once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has been arranged and recorded.",
        "de": "Danke. Alles wurde organisiert und festgehalten.",
        "answers": []
      }
    }
  },
  {
    "id": "branch153_work_scope",
    "topic": "Beruf",
    "title": "Projektumfang ändern",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "How can I help you with the requested change?",
        "de": "Wie kann ich Ihnen beim Thema „requested change“ helfen?",
        "answers": [
          {
            "text": "I need to discuss the requested change.",
            "next": "routeA"
          },
          {
            "text": "I have a problem with the requested change.",
            "next": "routeB"
          }
        ]
      },
      "routeA": {
        "bot": "Could you give me more information about the budget impact?",
        "de": "Könnten Sie mehr Informationen zu „budget impact“ geben?",
        "answers": [
          {
            "text": "Yes, the main point is the budget impact.",
            "next": "optionA"
          },
          {
            "text": "Could you explain the available options for the budget impact?",
            "next": "optionB"
          }
        ]
      },
      "routeB": {
        "bot": "What exactly is wrong with the budget impact?",
        "de": "Was genau stimmt bei „budget impact“ nicht?",
        "answers": [
          {
            "text": "The budget impact is different from what I expected.",
            "next": "optionA"
          },
          {
            "text": "I need an alternative for the budget impact.",
            "next": "optionB"
          }
        ]
      },
      "optionA": {
        "bot": "Would the revised scope be an acceptable solution?",
        "de": "Wäre „revised scope“ eine akzeptable Lösung?",
        "answers": [
          {
            "text": "Yes, please proceed with the revised scope.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare another option with the revised scope.",
            "next": "confirmB"
          }
        ]
      },
      "optionB": {
        "bot": "We can offer another arrangement for the revised scope.",
        "de": "Wir können eine andere Lösung für „revised scope“ anbieten.",
        "answers": [
          {
            "text": "That alternative for the revised scope sounds better.",
            "next": "confirmA"
          },
          {
            "text": "The original revised scope is fine after all.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How would you like us to confirm the approval?",
        "de": "Wie sollen wir „approval“ bestätigen?",
        "answers": [
          {
            "text": "Please confirm the approval by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the approval would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you need any further details about the approval?",
        "de": "Benötigen Sie weitere Einzelheiten zu „approval“?",
        "answers": [
          {
            "text": "No, the approval is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the approval once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has been arranged and recorded.",
        "de": "Danke. Alles wurde organisiert und festgehalten.",
        "answers": []
      }
    }
  },
  {
    "id": "branch153_phone_callback",
    "topic": "Telefon",
    "title": "Rückruf organisieren",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "How can I help you with the reason for call?",
        "de": "Wie kann ich Ihnen beim Thema „reason for call“ helfen?",
        "answers": [
          {
            "text": "I need to discuss the reason for call.",
            "next": "routeA"
          },
          {
            "text": "I have a problem with the reason for call.",
            "next": "routeB"
          }
        ]
      },
      "routeA": {
        "bot": "Could you give me more information about the available colleague?",
        "de": "Könnten Sie mehr Informationen zu „available colleague“ geben?",
        "answers": [
          {
            "text": "Yes, the main point is the available colleague.",
            "next": "optionA"
          },
          {
            "text": "Could you explain the available options for the available colleague?",
            "next": "optionB"
          }
        ]
      },
      "routeB": {
        "bot": "What exactly is wrong with the available colleague?",
        "de": "Was genau stimmt bei „available colleague“ nicht?",
        "answers": [
          {
            "text": "The available colleague is different from what I expected.",
            "next": "optionA"
          },
          {
            "text": "I need an alternative for the available colleague.",
            "next": "optionB"
          }
        ]
      },
      "optionA": {
        "bot": "Would the callback time be an acceptable solution?",
        "de": "Wäre „callback time“ eine akzeptable Lösung?",
        "answers": [
          {
            "text": "Yes, please proceed with the callback time.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare another option with the callback time.",
            "next": "confirmB"
          }
        ]
      },
      "optionB": {
        "bot": "We can offer another arrangement for the callback time.",
        "de": "Wir können eine andere Lösung für „callback time“ anbieten.",
        "answers": [
          {
            "text": "That alternative for the callback time sounds better.",
            "next": "confirmA"
          },
          {
            "text": "The original callback time is fine after all.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How would you like us to confirm the confirmation?",
        "de": "Wie sollen wir „confirmation“ bestätigen?",
        "answers": [
          {
            "text": "Please confirm the confirmation by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the confirmation would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you need any further details about the confirmation?",
        "de": "Benötigen Sie weitere Einzelheiten zu „confirmation“?",
        "answers": [
          {
            "text": "No, the confirmation is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the confirmation once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has been arranged and recorded.",
        "de": "Danke. Alles wurde organisiert und festgehalten.",
        "answers": []
      }
    }
  },
  {
    "id": "branch153_bank_transfer",
    "topic": "Bank",
    "title": "Überweisung prüfen",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "How can I help you with the transaction date?",
        "de": "Wie kann ich Ihnen beim Thema „transaction date“ helfen?",
        "answers": [
          {
            "text": "I need to discuss the transaction date.",
            "next": "routeA"
          },
          {
            "text": "I have a problem with the transaction date.",
            "next": "routeB"
          }
        ]
      },
      "routeA": {
        "bot": "Could you give me more information about the recipient details?",
        "de": "Könnten Sie mehr Informationen zu „recipient details“ geben?",
        "answers": [
          {
            "text": "Yes, the main point is the recipient details.",
            "next": "optionA"
          },
          {
            "text": "Could you explain the available options for the recipient details?",
            "next": "optionB"
          }
        ]
      },
      "routeB": {
        "bot": "What exactly is wrong with the recipient details?",
        "de": "Was genau stimmt bei „recipient details“ nicht?",
        "answers": [
          {
            "text": "The recipient details is different from what I expected.",
            "next": "optionA"
          },
          {
            "text": "I need an alternative for the recipient details.",
            "next": "optionB"
          }
        ]
      },
      "optionA": {
        "bot": "Would the payment status be an acceptable solution?",
        "de": "Wäre „payment status“ eine akzeptable Lösung?",
        "answers": [
          {
            "text": "Yes, please proceed with the payment status.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare another option with the payment status.",
            "next": "confirmB"
          }
        ]
      },
      "optionB": {
        "bot": "We can offer another arrangement for the payment status.",
        "de": "Wir können eine andere Lösung für „payment status“ anbieten.",
        "answers": [
          {
            "text": "That alternative for the payment status sounds better.",
            "next": "confirmA"
          },
          {
            "text": "The original payment status is fine after all.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How would you like us to confirm the reference number?",
        "de": "Wie sollen wir „reference number“ bestätigen?",
        "answers": [
          {
            "text": "Please confirm the reference number by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the reference number would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you need any further details about the reference number?",
        "de": "Benötigen Sie weitere Einzelheiten zu „reference number“?",
        "answers": [
          {
            "text": "No, the reference number is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the reference number once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has been arranged and recorded.",
        "de": "Danke. Alles wurde organisiert und festgehalten.",
        "answers": []
      }
    }
  },
  {
    "id": "branch153_post_tracking",
    "topic": "Post",
    "title": "Paket verfolgen",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "How can I help you with the tracking number?",
        "de": "Wie kann ich Ihnen beim Thema „tracking number“ helfen?",
        "answers": [
          {
            "text": "I need to discuss the tracking number.",
            "next": "routeA"
          },
          {
            "text": "I have a problem with the tracking number.",
            "next": "routeB"
          }
        ]
      },
      "routeA": {
        "bot": "Could you give me more information about the last scan?",
        "de": "Könnten Sie mehr Informationen zu „last scan“ geben?",
        "answers": [
          {
            "text": "Yes, the main point is the last scan.",
            "next": "optionA"
          },
          {
            "text": "Could you explain the available options for the last scan?",
            "next": "optionB"
          }
        ]
      },
      "routeB": {
        "bot": "What exactly is wrong with the last scan?",
        "de": "Was genau stimmt bei „last scan“ nicht?",
        "answers": [
          {
            "text": "The last scan is different from what I expected.",
            "next": "optionA"
          },
          {
            "text": "I need an alternative for the last scan.",
            "next": "optionB"
          }
        ]
      },
      "optionA": {
        "bot": "Would the delivery estimate be an acceptable solution?",
        "de": "Wäre „delivery estimate“ eine akzeptable Lösung?",
        "answers": [
          {
            "text": "Yes, please proceed with the delivery estimate.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare another option with the delivery estimate.",
            "next": "confirmB"
          }
        ]
      },
      "optionB": {
        "bot": "We can offer another arrangement for the delivery estimate.",
        "de": "Wir können eine andere Lösung für „delivery estimate“ anbieten.",
        "answers": [
          {
            "text": "That alternative for the delivery estimate sounds better.",
            "next": "confirmA"
          },
          {
            "text": "The original delivery estimate is fine after all.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How would you like us to confirm the investigation?",
        "de": "Wie sollen wir „investigation“ bestätigen?",
        "answers": [
          {
            "text": "Please confirm the investigation by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the investigation would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you need any further details about the investigation?",
        "de": "Benötigen Sie weitere Einzelheiten zu „investigation“?",
        "answers": [
          {
            "text": "No, the investigation is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the investigation once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has been arranged and recorded.",
        "de": "Danke. Alles wurde organisiert und festgehalten.",
        "answers": []
      }
    }
  },
  {
    "id": "branch153_museum_access",
    "topic": "Museum",
    "title": "Barrierefreier Besuch",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "How can I help you with the access need?",
        "de": "Wie kann ich Ihnen beim Thema „access need“ helfen?",
        "answers": [
          {
            "text": "I need to discuss the access need.",
            "next": "routeA"
          },
          {
            "text": "I have a problem with the access need.",
            "next": "routeB"
          }
        ]
      },
      "routeA": {
        "bot": "Could you give me more information about the entrance route?",
        "de": "Könnten Sie mehr Informationen zu „entrance route“ geben?",
        "answers": [
          {
            "text": "Yes, the main point is the entrance route.",
            "next": "optionA"
          },
          {
            "text": "Could you explain the available options for the entrance route?",
            "next": "optionB"
          }
        ]
      },
      "routeB": {
        "bot": "What exactly is wrong with the entrance route?",
        "de": "Was genau stimmt bei „entrance route“ nicht?",
        "answers": [
          {
            "text": "The entrance route is different from what I expected.",
            "next": "optionA"
          },
          {
            "text": "I need an alternative for the entrance route.",
            "next": "optionB"
          }
        ]
      },
      "optionA": {
        "bot": "Would the lift access be an acceptable solution?",
        "de": "Wäre „lift access“ eine akzeptable Lösung?",
        "answers": [
          {
            "text": "Yes, please proceed with the lift access.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare another option with the lift access.",
            "next": "confirmB"
          }
        ]
      },
      "optionB": {
        "bot": "We can offer another arrangement for the lift access.",
        "de": "Wir können eine andere Lösung für „lift access“ anbieten.",
        "answers": [
          {
            "text": "That alternative for the lift access sounds better.",
            "next": "confirmA"
          },
          {
            "text": "The original lift access is fine after all.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How would you like us to confirm the reserved equipment?",
        "de": "Wie sollen wir „reserved equipment“ bestätigen?",
        "answers": [
          {
            "text": "Please confirm the reserved equipment by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the reserved equipment would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you need any further details about the reserved equipment?",
        "de": "Benötigen Sie weitere Einzelheiten zu „reserved equipment“?",
        "answers": [
          {
            "text": "No, the reserved equipment is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the reserved equipment once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has been arranged and recorded.",
        "de": "Danke. Alles wurde organisiert und festgehalten.",
        "answers": []
      }
    }
  },
  {
    "id": "branch153_camping_facilities",
    "topic": "Camping",
    "title": "Camping-Einrichtungen",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "How can I help you with the pitch type?",
        "de": "Wie kann ich Ihnen beim Thema „pitch type“ helfen?",
        "answers": [
          {
            "text": "I need to discuss the pitch type.",
            "next": "routeA"
          },
          {
            "text": "I have a problem with the pitch type.",
            "next": "routeB"
          }
        ]
      },
      "routeA": {
        "bot": "Could you give me more information about the electricity?",
        "de": "Könnten Sie mehr Informationen zu „electricity“ geben?",
        "answers": [
          {
            "text": "Yes, the main point is the electricity.",
            "next": "optionA"
          },
          {
            "text": "Could you explain the available options for the electricity?",
            "next": "optionB"
          }
        ]
      },
      "routeB": {
        "bot": "What exactly is wrong with the electricity?",
        "de": "Was genau stimmt bei „electricity“ nicht?",
        "answers": [
          {
            "text": "The electricity is different from what I expected.",
            "next": "optionA"
          },
          {
            "text": "I need an alternative for the electricity.",
            "next": "optionB"
          }
        ]
      },
      "optionA": {
        "bot": "Would the shower access be an acceptable solution?",
        "de": "Wäre „shower access“ eine akzeptable Lösung?",
        "answers": [
          {
            "text": "Yes, please proceed with the shower access.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare another option with the shower access.",
            "next": "confirmB"
          }
        ]
      },
      "optionB": {
        "bot": "We can offer another arrangement for the shower access.",
        "de": "Wir können eine andere Lösung für „shower access“ anbieten.",
        "answers": [
          {
            "text": "That alternative for the shower access sounds better.",
            "next": "confirmA"
          },
          {
            "text": "The original shower access is fine after all.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How would you like us to confirm the quiet hours?",
        "de": "Wie sollen wir „quiet hours“ bestätigen?",
        "answers": [
          {
            "text": "Please confirm the quiet hours by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the quiet hours would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you need any further details about the quiet hours?",
        "de": "Benötigen Sie weitere Einzelheiten zu „quiet hours“?",
        "answers": [
          {
            "text": "No, the quiet hours is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the quiet hours once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has been arranged and recorded.",
        "de": "Danke. Alles wurde organisiert und festgehalten.",
        "answers": []
      }
    }
  },
  {
    "id": "branch153_university_course",
    "topic": "Bildung",
    "title": "Kurs wechseln",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "How can I help you with the current course?",
        "de": "Wie kann ich Ihnen beim Thema „current course“ helfen?",
        "answers": [
          {
            "text": "I need to discuss the current course.",
            "next": "routeA"
          },
          {
            "text": "I have a problem with the current course.",
            "next": "routeB"
          }
        ]
      },
      "routeA": {
        "bot": "Could you give me more information about the preferred schedule?",
        "de": "Könnten Sie mehr Informationen zu „preferred schedule“ geben?",
        "answers": [
          {
            "text": "Yes, the main point is the preferred schedule.",
            "next": "optionA"
          },
          {
            "text": "Could you explain the available options for the preferred schedule?",
            "next": "optionB"
          }
        ]
      },
      "routeB": {
        "bot": "What exactly is wrong with the preferred schedule?",
        "de": "Was genau stimmt bei „preferred schedule“ nicht?",
        "answers": [
          {
            "text": "The preferred schedule is different from what I expected.",
            "next": "optionA"
          },
          {
            "text": "I need an alternative for the preferred schedule.",
            "next": "optionB"
          }
        ]
      },
      "optionA": {
        "bot": "Would the available group be an acceptable solution?",
        "de": "Wäre „available group“ eine akzeptable Lösung?",
        "answers": [
          {
            "text": "Yes, please proceed with the available group.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare another option with the available group.",
            "next": "confirmB"
          }
        ]
      },
      "optionB": {
        "bot": "We can offer another arrangement for the available group.",
        "de": "Wir können eine andere Lösung für „available group“ anbieten.",
        "answers": [
          {
            "text": "That alternative for the available group sounds better.",
            "next": "confirmA"
          },
          {
            "text": "The original available group is fine after all.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How would you like us to confirm the registration update?",
        "de": "Wie sollen wir „registration update“ bestätigen?",
        "answers": [
          {
            "text": "Please confirm the registration update by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the registration update would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you need any further details about the registration update?",
        "de": "Benötigen Sie weitere Einzelheiten zu „registration update“?",
        "answers": [
          {
            "text": "No, the registration update is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the registration update once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has been arranged and recorded.",
        "de": "Danke. Alles wurde organisiert und festgehalten.",
        "answers": []
      }
    }
  },
  {
    "id": "branch153_sport_class",
    "topic": "Sport",
    "title": "Fitnesskurs wählen",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "How can I help you with the fitness goal?",
        "de": "Wie kann ich Ihnen beim Thema „fitness goal“ helfen?",
        "answers": [
          {
            "text": "I need to discuss the fitness goal.",
            "next": "routeA"
          },
          {
            "text": "I have a problem with the fitness goal.",
            "next": "routeB"
          }
        ]
      },
      "routeA": {
        "bot": "Could you give me more information about the class level?",
        "de": "Könnten Sie mehr Informationen zu „class level“ geben?",
        "answers": [
          {
            "text": "Yes, the main point is the class level.",
            "next": "optionA"
          },
          {
            "text": "Could you explain the available options for the class level?",
            "next": "optionB"
          }
        ]
      },
      "routeB": {
        "bot": "What exactly is wrong with the class level?",
        "de": "Was genau stimmt bei „class level“ nicht?",
        "answers": [
          {
            "text": "The class level is different from what I expected.",
            "next": "optionA"
          },
          {
            "text": "I need an alternative for the class level.",
            "next": "optionB"
          }
        ]
      },
      "optionA": {
        "bot": "Would the available time be an acceptable solution?",
        "de": "Wäre „available time“ eine akzeptable Lösung?",
        "answers": [
          {
            "text": "Yes, please proceed with the available time.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare another option with the available time.",
            "next": "confirmB"
          }
        ]
      },
      "optionB": {
        "bot": "We can offer another arrangement for the available time.",
        "de": "Wir können eine andere Lösung für „available time“ anbieten.",
        "answers": [
          {
            "text": "That alternative for the available time sounds better.",
            "next": "confirmA"
          },
          {
            "text": "The original available time is fine after all.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How would you like us to confirm the trial session?",
        "de": "Wie sollen wir „trial session“ bestätigen?",
        "answers": [
          {
            "text": "Please confirm the trial session by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the trial session would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you need any further details about the trial session?",
        "de": "Benötigen Sie weitere Einzelheiten zu „trial session“?",
        "answers": [
          {
            "text": "No, the trial session is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the trial session once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has been arranged and recorded.",
        "de": "Danke. Alles wurde organisiert und festgehalten.",
        "answers": []
      }
    }
  },
  {
    "id": "branch153_neighbour_repair",
    "topic": "Wohnen",
    "title": "Hausreparatur",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "How can I help you with the reported problem?",
        "de": "Wie kann ich Ihnen beim Thema „reported problem“ helfen?",
        "answers": [
          {
            "text": "I need to discuss the reported problem.",
            "next": "routeA"
          },
          {
            "text": "I have a problem with the reported problem.",
            "next": "routeB"
          }
        ]
      },
      "routeA": {
        "bot": "Could you give me more information about the repair urgency?",
        "de": "Könnten Sie mehr Informationen zu „repair urgency“ geben?",
        "answers": [
          {
            "text": "Yes, the main point is the repair urgency.",
            "next": "optionA"
          },
          {
            "text": "Could you explain the available options for the repair urgency?",
            "next": "optionB"
          }
        ]
      },
      "routeB": {
        "bot": "What exactly is wrong with the repair urgency?",
        "de": "Was genau stimmt bei „repair urgency“ nicht?",
        "answers": [
          {
            "text": "The repair urgency is different from what I expected.",
            "next": "optionA"
          },
          {
            "text": "I need an alternative for the repair urgency.",
            "next": "optionB"
          }
        ]
      },
      "optionA": {
        "bot": "Would the appointment window be an acceptable solution?",
        "de": "Wäre „appointment window“ eine akzeptable Lösung?",
        "answers": [
          {
            "text": "Yes, please proceed with the appointment window.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare another option with the appointment window.",
            "next": "confirmB"
          }
        ]
      },
      "optionB": {
        "bot": "We can offer another arrangement for the appointment window.",
        "de": "Wir können eine andere Lösung für „appointment window“ anbieten.",
        "answers": [
          {
            "text": "That alternative for the appointment window sounds better.",
            "next": "confirmA"
          },
          {
            "text": "The original appointment window is fine after all.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How would you like us to confirm the building manager?",
        "de": "Wie sollen wir „building manager“ bestätigen?",
        "answers": [
          {
            "text": "Please confirm the building manager by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the building manager would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you need any further details about the building manager?",
        "de": "Benötigen Sie weitere Einzelheiten zu „building manager“?",
        "answers": [
          {
            "text": "No, the building manager is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the building manager once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has been arranged and recorded.",
        "de": "Danke. Alles wurde organisiert und festgehalten.",
        "answers": []
      }
    }
  },
  {
    "id": "branch153_internet_plan",
    "topic": "Internet",
    "title": "Internettarif ändern",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "How can I help you with the current plan?",
        "de": "Wie kann ich Ihnen beim Thema „current plan“ helfen?",
        "answers": [
          {
            "text": "I need to discuss the current plan.",
            "next": "routeA"
          },
          {
            "text": "I have a problem with the current plan.",
            "next": "routeB"
          }
        ]
      },
      "routeA": {
        "bot": "Could you give me more information about the speed requirement?",
        "de": "Könnten Sie mehr Informationen zu „speed requirement“ geben?",
        "answers": [
          {
            "text": "Yes, the main point is the speed requirement.",
            "next": "optionA"
          },
          {
            "text": "Could you explain the available options for the speed requirement?",
            "next": "optionB"
          }
        ]
      },
      "routeB": {
        "bot": "What exactly is wrong with the speed requirement?",
        "de": "Was genau stimmt bei „speed requirement“ nicht?",
        "answers": [
          {
            "text": "The speed requirement is different from what I expected.",
            "next": "optionA"
          },
          {
            "text": "I need an alternative for the speed requirement.",
            "next": "optionB"
          }
        ]
      },
      "optionA": {
        "bot": "Would the monthly price be an acceptable solution?",
        "de": "Wäre „monthly price“ eine akzeptable Lösung?",
        "answers": [
          {
            "text": "Yes, please proceed with the monthly price.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare another option with the monthly price.",
            "next": "confirmB"
          }
        ]
      },
      "optionB": {
        "bot": "We can offer another arrangement for the monthly price.",
        "de": "Wir können eine andere Lösung für „monthly price“ anbieten.",
        "answers": [
          {
            "text": "That alternative for the monthly price sounds better.",
            "next": "confirmA"
          },
          {
            "text": "The original monthly price is fine after all.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How would you like us to confirm the contract term?",
        "de": "Wie sollen wir „contract term“ bestätigen?",
        "answers": [
          {
            "text": "Please confirm the contract term by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the contract term would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you need any further details about the contract term?",
        "de": "Benötigen Sie weitere Einzelheiten zu „contract term“?",
        "answers": [
          {
            "text": "No, the contract term is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the contract term once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has been arranged and recorded.",
        "de": "Danke. Alles wurde organisiert und festgehalten.",
        "answers": []
      }
    }
  },
  {
    "id": "branch153_environment_project",
    "topic": "Umwelt",
    "title": "Umweltprojekt planen",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "How can I help you with the main issue?",
        "de": "Wie kann ich Ihnen beim Thema „main issue“ helfen?",
        "answers": [
          {
            "text": "I need to discuss the main issue.",
            "next": "routeA"
          },
          {
            "text": "I have a problem with the main issue.",
            "next": "routeB"
          }
        ]
      },
      "routeA": {
        "bot": "Could you give me more information about the community action?",
        "de": "Könnten Sie mehr Informationen zu „community action“ geben?",
        "answers": [
          {
            "text": "Yes, the main point is the community action.",
            "next": "optionA"
          },
          {
            "text": "Could you explain the available options for the community action?",
            "next": "optionB"
          }
        ]
      },
      "routeB": {
        "bot": "What exactly is wrong with the community action?",
        "de": "Was genau stimmt bei „community action“ nicht?",
        "answers": [
          {
            "text": "The community action is different from what I expected.",
            "next": "optionA"
          },
          {
            "text": "I need an alternative for the community action.",
            "next": "optionB"
          }
        ]
      },
      "optionA": {
        "bot": "Would the available budget be an acceptable solution?",
        "de": "Wäre „available budget“ eine akzeptable Lösung?",
        "answers": [
          {
            "text": "Yes, please proceed with the available budget.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare another option with the available budget.",
            "next": "confirmB"
          }
        ]
      },
      "optionB": {
        "bot": "We can offer another arrangement for the available budget.",
        "de": "Wir können eine andere Lösung für „available budget“ anbieten.",
        "answers": [
          {
            "text": "That alternative for the available budget sounds better.",
            "next": "confirmA"
          },
          {
            "text": "The original available budget is fine after all.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How would you like us to confirm the target date?",
        "de": "Wie sollen wir „target date“ bestätigen?",
        "answers": [
          {
            "text": "Please confirm the target date by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the target date would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you need any further details about the target date?",
        "de": "Benötigen Sie weitere Einzelheiten zu „target date“?",
        "answers": [
          {
            "text": "No, the target date is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the target date once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has been arranged and recorded.",
        "de": "Danke. Alles wurde organisiert und festgehalten.",
        "answers": []
      }
    }
  },
  {
    "id": "branch153_smalltalk_travel",
    "topic": "Small Talk",
    "title": "Über Reisen sprechen",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "How can I help you with the recent trip?",
        "de": "Wie kann ich Ihnen beim Thema „recent trip“ helfen?",
        "answers": [
          {
            "text": "I need to discuss the recent trip.",
            "next": "routeA"
          },
          {
            "text": "I have a problem with the recent trip.",
            "next": "routeB"
          }
        ]
      },
      "routeA": {
        "bot": "Could you give me more information about the favourite place?",
        "de": "Könnten Sie mehr Informationen zu „favourite place“ geben?",
        "answers": [
          {
            "text": "Yes, the main point is the favourite place.",
            "next": "optionA"
          },
          {
            "text": "Could you explain the available options for the favourite place?",
            "next": "optionB"
          }
        ]
      },
      "routeB": {
        "bot": "What exactly is wrong with the favourite place?",
        "de": "Was genau stimmt bei „favourite place“ nicht?",
        "answers": [
          {
            "text": "The favourite place is different from what I expected.",
            "next": "optionA"
          },
          {
            "text": "I need an alternative for the favourite place.",
            "next": "optionB"
          }
        ]
      },
      "optionA": {
        "bot": "Would the future destination be an acceptable solution?",
        "de": "Wäre „future destination“ eine akzeptable Lösung?",
        "answers": [
          {
            "text": "Yes, please proceed with the future destination.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare another option with the future destination.",
            "next": "confirmB"
          }
        ]
      },
      "optionB": {
        "bot": "We can offer another arrangement for the future destination.",
        "de": "Wir können eine andere Lösung für „future destination“ anbieten.",
        "answers": [
          {
            "text": "That alternative for the future destination sounds better.",
            "next": "confirmA"
          },
          {
            "text": "The original future destination is fine after all.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How would you like us to confirm the travel advice?",
        "de": "Wie sollen wir „travel advice“ bestätigen?",
        "answers": [
          {
            "text": "Please confirm the travel advice by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the travel advice would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you need any further details about the travel advice?",
        "de": "Benötigen Sie weitere Einzelheiten zu „travel advice“?",
        "answers": [
          {
            "text": "No, the travel advice is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the travel advice once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has been arranged and recorded.",
        "de": "Danke. Alles wurde organisiert und festgehalten.",
        "answers": []
      }
    }
  },
  {
    "id": "branch153_language_practice",
    "topic": "Englischlernen",
    "title": "Sprachtraining planen",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "How can I help you with the weakest skill?",
        "de": "Wie kann ich Ihnen beim Thema „weakest skill“ helfen?",
        "answers": [
          {
            "text": "I need to discuss the weakest skill.",
            "next": "routeA"
          },
          {
            "text": "I have a problem with the weakest skill.",
            "next": "routeB"
          }
        ]
      },
      "routeA": {
        "bot": "Could you give me more information about the practice method?",
        "de": "Könnten Sie mehr Informationen zu „practice method“ geben?",
        "answers": [
          {
            "text": "Yes, the main point is the practice method.",
            "next": "optionA"
          },
          {
            "text": "Could you explain the available options for the practice method?",
            "next": "optionB"
          }
        ]
      },
      "routeB": {
        "bot": "What exactly is wrong with the practice method?",
        "de": "Was genau stimmt bei „practice method“ nicht?",
        "answers": [
          {
            "text": "The practice method is different from what I expected.",
            "next": "optionA"
          },
          {
            "text": "I need an alternative for the practice method.",
            "next": "optionB"
          }
        ]
      },
      "optionA": {
        "bot": "Would the weekly frequency be an acceptable solution?",
        "de": "Wäre „weekly frequency“ eine akzeptable Lösung?",
        "answers": [
          {
            "text": "Yes, please proceed with the weekly frequency.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare another option with the weekly frequency.",
            "next": "confirmB"
          }
        ]
      },
      "optionB": {
        "bot": "We can offer another arrangement for the weekly frequency.",
        "de": "Wir können eine andere Lösung für „weekly frequency“ anbieten.",
        "answers": [
          {
            "text": "That alternative for the weekly frequency sounds better.",
            "next": "confirmA"
          },
          {
            "text": "The original weekly frequency is fine after all.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How would you like us to confirm the progress review?",
        "de": "Wie sollen wir „progress review“ bestätigen?",
        "answers": [
          {
            "text": "Please confirm the progress review by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the progress review would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you need any further details about the progress review?",
        "de": "Benötigen Sie weitere Einzelheiten zu „progress review“?",
        "answers": [
          {
            "text": "No, the progress review is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the progress review once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has been arranged and recorded.",
        "de": "Danke. Alles wurde organisiert und festgehalten.",
        "answers": []
      }
    }
  },
  {
    "id": "branch153_business_presentation",
    "topic": "Beruf",
    "title": "Präsentation vorbereiten",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "How can I help you with the main message?",
        "de": "Wie kann ich Ihnen beim Thema „main message“ helfen?",
        "answers": [
          {
            "text": "I need to discuss the main message.",
            "next": "routeA"
          },
          {
            "text": "I have a problem with the main message.",
            "next": "routeB"
          }
        ]
      },
      "routeA": {
        "bot": "Could you give me more information about the slide structure?",
        "de": "Könnten Sie mehr Informationen zu „slide structure“ geben?",
        "answers": [
          {
            "text": "Yes, the main point is the slide structure.",
            "next": "optionA"
          },
          {
            "text": "Could you explain the available options for the slide structure?",
            "next": "optionB"
          }
        ]
      },
      "routeB": {
        "bot": "What exactly is wrong with the slide structure?",
        "de": "Was genau stimmt bei „slide structure“ nicht?",
        "answers": [
          {
            "text": "The slide structure is different from what I expected.",
            "next": "optionA"
          },
          {
            "text": "I need an alternative for the slide structure.",
            "next": "optionB"
          }
        ]
      },
      "optionA": {
        "bot": "Would the difficult question be an acceptable solution?",
        "de": "Wäre „difficult question“ eine akzeptable Lösung?",
        "answers": [
          {
            "text": "Yes, please proceed with the difficult question.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare another option with the difficult question.",
            "next": "confirmB"
          }
        ]
      },
      "optionB": {
        "bot": "We can offer another arrangement for the difficult question.",
        "de": "Wir können eine andere Lösung für „difficult question“ anbieten.",
        "answers": [
          {
            "text": "That alternative for the difficult question sounds better.",
            "next": "confirmA"
          },
          {
            "text": "The original difficult question is fine after all.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How would you like us to confirm the final rehearsal?",
        "de": "Wie sollen wir „final rehearsal“ bestätigen?",
        "answers": [
          {
            "text": "Please confirm the final rehearsal by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the final rehearsal would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you need any further details about the final rehearsal?",
        "de": "Benötigen Sie weitere Einzelheiten zu „final rehearsal“?",
        "answers": [
          {
            "text": "No, the final rehearsal is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the final rehearsal once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has been arranged and recorded.",
        "de": "Danke. Alles wurde organisiert und festgehalten.",
        "answers": []
      }
    }
  },
  {
    "id": "branch153_medical_referral",
    "topic": "Gesundheit",
    "title": "Facharzttermin",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "How can I help you with the referral reason?",
        "de": "Wie kann ich Ihnen beim Thema „referral reason“ helfen?",
        "answers": [
          {
            "text": "I need to discuss the referral reason.",
            "next": "routeA"
          },
          {
            "text": "I have a problem with the referral reason.",
            "next": "routeB"
          }
        ]
      },
      "routeA": {
        "bot": "Could you give me more information about the available specialist?",
        "de": "Könnten Sie mehr Informationen zu „available specialist“ geben?",
        "answers": [
          {
            "text": "Yes, the main point is the available specialist.",
            "next": "optionA"
          },
          {
            "text": "Could you explain the available options for the available specialist?",
            "next": "optionB"
          }
        ]
      },
      "routeB": {
        "bot": "What exactly is wrong with the available specialist?",
        "de": "Was genau stimmt bei „available specialist“ nicht?",
        "answers": [
          {
            "text": "The available specialist is different from what I expected.",
            "next": "optionA"
          },
          {
            "text": "I need an alternative for the available specialist.",
            "next": "optionB"
          }
        ]
      },
      "optionA": {
        "bot": "Would the test requirement be an acceptable solution?",
        "de": "Wäre „test requirement“ eine akzeptable Lösung?",
        "answers": [
          {
            "text": "Yes, please proceed with the test requirement.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare another option with the test requirement.",
            "next": "confirmB"
          }
        ]
      },
      "optionB": {
        "bot": "We can offer another arrangement for the test requirement.",
        "de": "Wir können eine andere Lösung für „test requirement“ anbieten.",
        "answers": [
          {
            "text": "That alternative for the test requirement sounds better.",
            "next": "confirmA"
          },
          {
            "text": "The original test requirement is fine after all.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How would you like us to confirm the appointment confirmation?",
        "de": "Wie sollen wir „appointment confirmation“ bestätigen?",
        "answers": [
          {
            "text": "Please confirm the appointment confirmation by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the appointment confirmation would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you need any further details about the appointment confirmation?",
        "de": "Benötigen Sie weitere Einzelheiten zu „appointment confirmation“?",
        "answers": [
          {
            "text": "No, the appointment confirmation is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the appointment confirmation once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has been arranged and recorded.",
        "de": "Danke. Alles wurde organisiert und festgehalten.",
        "answers": []
      }
    }
  },
  {
    "id": "branch153_event_catering",
    "topic": "Freizeit",
    "title": "Catering organisieren",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "How can I help you with the event type?",
        "de": "Wie kann ich Ihnen beim Thema „event type“ helfen?",
        "answers": [
          {
            "text": "I need to discuss the event type.",
            "next": "routeA"
          },
          {
            "text": "I have a problem with the event type.",
            "next": "routeB"
          }
        ]
      },
      "routeA": {
        "bot": "Could you give me more information about the guest number?",
        "de": "Könnten Sie mehr Informationen zu „guest number“ geben?",
        "answers": [
          {
            "text": "Yes, the main point is the guest number.",
            "next": "optionA"
          },
          {
            "text": "Could you explain the available options for the guest number?",
            "next": "optionB"
          }
        ]
      },
      "routeB": {
        "bot": "What exactly is wrong with the guest number?",
        "de": "Was genau stimmt bei „guest number“ nicht?",
        "answers": [
          {
            "text": "The guest number is different from what I expected.",
            "next": "optionA"
          },
          {
            "text": "I need an alternative for the guest number.",
            "next": "optionB"
          }
        ]
      },
      "optionA": {
        "bot": "Would the dietary needs be an acceptable solution?",
        "de": "Wäre „dietary needs“ eine akzeptable Lösung?",
        "answers": [
          {
            "text": "Yes, please proceed with the dietary needs.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare another option with the dietary needs.",
            "next": "confirmB"
          }
        ]
      },
      "optionB": {
        "bot": "We can offer another arrangement for the dietary needs.",
        "de": "Wir können eine andere Lösung für „dietary needs“ anbieten.",
        "answers": [
          {
            "text": "That alternative for the dietary needs sounds better.",
            "next": "confirmA"
          },
          {
            "text": "The original dietary needs is fine after all.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How would you like us to confirm the final price?",
        "de": "Wie sollen wir „final price“ bestätigen?",
        "answers": [
          {
            "text": "Please confirm the final price by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the final price would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you need any further details about the final price?",
        "de": "Benötigen Sie weitere Einzelheiten zu „final price“?",
        "answers": [
          {
            "text": "No, the final price is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the final price once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has been arranged and recorded.",
        "de": "Danke. Alles wurde organisiert und festgehalten.",
        "answers": []
      }
    }
  }
];
ES_BRANCHING_SCENARIOS_151.push(...ES_BRANCHING_SCENARIOS_153);
