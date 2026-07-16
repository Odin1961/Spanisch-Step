const ES_BRANCHING_SCENARIOS_152 = [
  {
    "id": "branch152_restaurant_change",
    "topic": "Restaurant",
    "title": "Reservierung ändern",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "How can I help you with the reservation time?",
        "de": "Wie kann ich Ihnen beim Thema „reservation time“ helfen?",
        "answers": [
          {
            "text": "I need help with the reservation time.",
            "next": "details"
          },
          {
            "text": "I have a question about the reservation time.",
            "next": "problem"
          }
        ]
      },
      "details": {
        "bot": "Could you provide more information about the guest count?",
        "de": "Könnten Sie mehr Informationen zu „guest count“ geben?",
        "answers": [
          {
            "text": "Yes, the main detail is the guest count.",
            "next": "optionA"
          },
          {
            "text": "Could you explain the options for the guest count?",
            "next": "optionB"
          }
        ]
      },
      "problem": {
        "bot": "What exactly is the problem with the guest count?",
        "de": "Was genau ist das Problem bei „guest count“?",
        "answers": [
          {
            "text": "The guest count is not correct.",
            "next": "optionA"
          },
          {
            "text": "I need another option for the guest count.",
            "next": "optionB"
          }
        ]
      },
      "optionA": {
        "bot": "We can arrange the available table.",
        "de": "Wir können „available table“ organisieren.",
        "answers": [
          {
            "text": "Please arrange the available table.",
            "next": "confirm"
          },
          {
            "text": "Could you explain the available table first?",
            "next": "confirm"
          }
        ]
      },
      "optionB": {
        "bot": "An alternative is the available table.",
        "de": "Eine Alternative ist „available table“.",
        "answers": [
          {
            "text": "The available table sounds suitable.",
            "next": "confirm"
          },
          {
            "text": "I would like to compare the available table.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "How should we handle the confirmation?",
        "de": "Wie sollen wir mit „confirmation“ umgehen?",
        "answers": [
          {
            "text": "Please confirm the confirmation by email.",
            "next": "end"
          },
          {
            "text": "A written note about the confirmation is enough.",
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
    "id": "branch152_hotel_late",
    "topic": "Hotel",
    "title": "Späte Ankunft",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "How can I help you with the arrival time?",
        "de": "Wie kann ich Ihnen beim Thema „arrival time“ helfen?",
        "answers": [
          {
            "text": "I need help with the arrival time.",
            "next": "details"
          },
          {
            "text": "I have a question about the arrival time.",
            "next": "problem"
          }
        ]
      },
      "details": {
        "bot": "Could you provide more information about the booking reference?",
        "de": "Könnten Sie mehr Informationen zu „booking reference“ geben?",
        "answers": [
          {
            "text": "Yes, the main detail is the booking reference.",
            "next": "optionA"
          },
          {
            "text": "Could you explain the options for the booking reference?",
            "next": "optionB"
          }
        ]
      },
      "problem": {
        "bot": "What exactly is the problem with the booking reference?",
        "de": "Was genau ist das Problem bei „booking reference“?",
        "answers": [
          {
            "text": "The booking reference is not correct.",
            "next": "optionA"
          },
          {
            "text": "I need another option for the booking reference.",
            "next": "optionB"
          }
        ]
      },
      "optionA": {
        "bot": "We can arrange the late check-in.",
        "de": "Wir können „late check-in“ organisieren.",
        "answers": [
          {
            "text": "Please arrange the late check-in.",
            "next": "confirm"
          },
          {
            "text": "Could you explain the late check-in first?",
            "next": "confirm"
          }
        ]
      },
      "optionB": {
        "bot": "An alternative is the late check-in.",
        "de": "Eine Alternative ist „late check-in“.",
        "answers": [
          {
            "text": "The late check-in sounds suitable.",
            "next": "confirm"
          },
          {
            "text": "I would like to compare the late check-in.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "How should we handle the room key?",
        "de": "Wie sollen wir mit „room key“ umgehen?",
        "answers": [
          {
            "text": "Please confirm the room key by email.",
            "next": "end"
          },
          {
            "text": "A written note about the room key is enough.",
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
    "id": "branch152_airport_lost",
    "topic": "Flughafen",
    "title": "Gepäck vermisst",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "How can I help you with the baggage receipt?",
        "de": "Wie kann ich Ihnen beim Thema „baggage receipt“ helfen?",
        "answers": [
          {
            "text": "I need help with the baggage receipt.",
            "next": "details"
          },
          {
            "text": "I have a question about the baggage receipt.",
            "next": "problem"
          }
        ]
      },
      "details": {
        "bot": "Could you provide more information about the suitcase description?",
        "de": "Könnten Sie mehr Informationen zu „suitcase description“ geben?",
        "answers": [
          {
            "text": "Yes, the main detail is the suitcase description.",
            "next": "optionA"
          },
          {
            "text": "Could you explain the options for the suitcase description?",
            "next": "optionB"
          }
        ]
      },
      "problem": {
        "bot": "What exactly is the problem with the suitcase description?",
        "de": "Was genau ist das Problem bei „suitcase description“?",
        "answers": [
          {
            "text": "The suitcase description is not correct.",
            "next": "optionA"
          },
          {
            "text": "I need another option for the suitcase description.",
            "next": "optionB"
          }
        ]
      },
      "optionA": {
        "bot": "We can arrange the delivery address.",
        "de": "Wir können „delivery address“ organisieren.",
        "answers": [
          {
            "text": "Please arrange the delivery address.",
            "next": "confirm"
          },
          {
            "text": "Could you explain the delivery address first?",
            "next": "confirm"
          }
        ]
      },
      "optionB": {
        "bot": "An alternative is the delivery address.",
        "de": "Eine Alternative ist „delivery address“.",
        "answers": [
          {
            "text": "The delivery address sounds suitable.",
            "next": "confirm"
          },
          {
            "text": "I would like to compare the delivery address.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "How should we handle the case number?",
        "de": "Wie sollen wir mit „case number“ umgehen?",
        "answers": [
          {
            "text": "Please confirm the case number by email.",
            "next": "end"
          },
          {
            "text": "A written note about the case number is enough.",
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
    "id": "branch152_train_missed",
    "topic": "Bahnhof",
    "title": "Anschluss verpasst",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "How can I help you with the original train?",
        "de": "Wie kann ich Ihnen beim Thema „original train“ helfen?",
        "answers": [
          {
            "text": "I need help with the original train.",
            "next": "details"
          },
          {
            "text": "I have a question about the original train.",
            "next": "problem"
          }
        ]
      },
      "details": {
        "bot": "Could you provide more information about the next connection?",
        "de": "Könnten Sie mehr Informationen zu „next connection“ geben?",
        "answers": [
          {
            "text": "Yes, the main detail is the next connection.",
            "next": "optionA"
          },
          {
            "text": "Could you explain the options for the next connection?",
            "next": "optionB"
          }
        ]
      },
      "problem": {
        "bot": "What exactly is the problem with the next connection?",
        "de": "Was genau ist das Problem bei „next connection“?",
        "answers": [
          {
            "text": "The next connection is not correct.",
            "next": "optionA"
          },
          {
            "text": "I need another option for the next connection.",
            "next": "optionB"
          }
        ]
      },
      "optionA": {
        "bot": "We can arrange the ticket validity.",
        "de": "Wir können „ticket validity“ organisieren.",
        "answers": [
          {
            "text": "Please arrange the ticket validity.",
            "next": "confirm"
          },
          {
            "text": "Could you explain the ticket validity first?",
            "next": "confirm"
          }
        ]
      },
      "optionB": {
        "bot": "An alternative is the ticket validity.",
        "de": "Eine Alternative ist „ticket validity“.",
        "answers": [
          {
            "text": "The ticket validity sounds suitable.",
            "next": "confirm"
          },
          {
            "text": "I would like to compare the ticket validity.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "How should we handle the platform?",
        "de": "Wie sollen wir mit „platform“ umgehen?",
        "answers": [
          {
            "text": "Please confirm the platform by email.",
            "next": "end"
          },
          {
            "text": "A written note about the platform is enough.",
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
    "id": "branch152_taxi_route",
    "topic": "Taxi",
    "title": "Alternative Route",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "How can I help you with the destination?",
        "de": "Wie kann ich Ihnen beim Thema „destination“ helfen?",
        "answers": [
          {
            "text": "I need help with the destination.",
            "next": "details"
          },
          {
            "text": "I have a question about the destination.",
            "next": "problem"
          }
        ]
      },
      "details": {
        "bot": "Could you provide more information about the traffic delay?",
        "de": "Könnten Sie mehr Informationen zu „traffic delay“ geben?",
        "answers": [
          {
            "text": "Yes, the main detail is the traffic delay.",
            "next": "optionA"
          },
          {
            "text": "Could you explain the options for the traffic delay?",
            "next": "optionB"
          }
        ]
      },
      "problem": {
        "bot": "What exactly is the problem with the traffic delay?",
        "de": "Was genau ist das Problem bei „traffic delay“?",
        "answers": [
          {
            "text": "The traffic delay is not correct.",
            "next": "optionA"
          },
          {
            "text": "I need another option for the traffic delay.",
            "next": "optionB"
          }
        ]
      },
      "optionA": {
        "bot": "We can arrange the alternative route.",
        "de": "Wir können „alternative route“ organisieren.",
        "answers": [
          {
            "text": "Please arrange the alternative route.",
            "next": "confirm"
          },
          {
            "text": "Could you explain the alternative route first?",
            "next": "confirm"
          }
        ]
      },
      "optionB": {
        "bot": "An alternative is the alternative route.",
        "de": "Eine Alternative ist „alternative route“.",
        "answers": [
          {
            "text": "The alternative route sounds suitable.",
            "next": "confirm"
          },
          {
            "text": "I would like to compare the alternative route.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "How should we handle the estimated fare?",
        "de": "Wie sollen wir mit „estimated fare“ umgehen?",
        "answers": [
          {
            "text": "Please confirm the estimated fare by email.",
            "next": "end"
          },
          {
            "text": "A written note about the estimated fare is enough.",
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
    "id": "branch152_car_damage",
    "topic": "Autovermietung",
    "title": "Vorschaden melden",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "How can I help you with the damage location?",
        "de": "Wie kann ich Ihnen beim Thema „damage location“ helfen?",
        "answers": [
          {
            "text": "I need help with the damage location.",
            "next": "details"
          },
          {
            "text": "I have a question about the damage location.",
            "next": "problem"
          }
        ]
      },
      "details": {
        "bot": "Could you provide more information about the photo evidence?",
        "de": "Könnten Sie mehr Informationen zu „photo evidence“ geben?",
        "answers": [
          {
            "text": "Yes, the main detail is the photo evidence.",
            "next": "optionA"
          },
          {
            "text": "Could you explain the options for the photo evidence?",
            "next": "optionB"
          }
        ]
      },
      "problem": {
        "bot": "What exactly is the problem with the photo evidence?",
        "de": "Was genau ist das Problem bei „photo evidence“?",
        "answers": [
          {
            "text": "The photo evidence is not correct.",
            "next": "optionA"
          },
          {
            "text": "I need another option for the photo evidence.",
            "next": "optionB"
          }
        ]
      },
      "optionA": {
        "bot": "We can arrange the rental record.",
        "de": "Wir können „rental record“ organisieren.",
        "answers": [
          {
            "text": "Please arrange the rental record.",
            "next": "confirm"
          },
          {
            "text": "Could you explain the rental record first?",
            "next": "confirm"
          }
        ]
      },
      "optionB": {
        "bot": "An alternative is the rental record.",
        "de": "Eine Alternative ist „rental record“.",
        "answers": [
          {
            "text": "The rental record sounds suitable.",
            "next": "confirm"
          },
          {
            "text": "I would like to compare the rental record.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "How should we handle the charge confirmation?",
        "de": "Wie sollen wir mit „charge confirmation“ umgehen?",
        "answers": [
          {
            "text": "Please confirm the charge confirmation by email.",
            "next": "end"
          },
          {
            "text": "A written note about the charge confirmation is enough.",
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
    "id": "branch152_shop_return",
    "topic": "Einkaufen",
    "title": "Ware zurückgeben",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "How can I help you with the purchase receipt?",
        "de": "Wie kann ich Ihnen beim Thema „purchase receipt“ helfen?",
        "answers": [
          {
            "text": "I need help with the purchase receipt.",
            "next": "details"
          },
          {
            "text": "I have a question about the purchase receipt.",
            "next": "problem"
          }
        ]
      },
      "details": {
        "bot": "Could you provide more information about the return reason?",
        "de": "Könnten Sie mehr Informationen zu „return reason“ geben?",
        "answers": [
          {
            "text": "Yes, the main detail is the return reason.",
            "next": "optionA"
          },
          {
            "text": "Could you explain the options for the return reason?",
            "next": "optionB"
          }
        ]
      },
      "problem": {
        "bot": "What exactly is the problem with the return reason?",
        "de": "Was genau ist das Problem bei „return reason“?",
        "answers": [
          {
            "text": "The return reason is not correct.",
            "next": "optionA"
          },
          {
            "text": "I need another option for the return reason.",
            "next": "optionB"
          }
        ]
      },
      "optionA": {
        "bot": "We can arrange the refund option.",
        "de": "Wir können „refund option“ organisieren.",
        "answers": [
          {
            "text": "Please arrange the refund option.",
            "next": "confirm"
          },
          {
            "text": "Could you explain the refund option first?",
            "next": "confirm"
          }
        ]
      },
      "optionB": {
        "bot": "An alternative is the refund option.",
        "de": "Eine Alternative ist „refund option“.",
        "answers": [
          {
            "text": "The refund option sounds suitable.",
            "next": "confirm"
          },
          {
            "text": "I would like to compare the refund option.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "How should we handle the processing time?",
        "de": "Wie sollen wir mit „processing time“ umgehen?",
        "answers": [
          {
            "text": "Please confirm the processing time by email.",
            "next": "end"
          },
          {
            "text": "A written note about the processing time is enough.",
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
    "id": "branch152_doctor_followup",
    "topic": "Gesundheit",
    "title": "Nachuntersuchung",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "How can I help you with the current symptoms?",
        "de": "Wie kann ich Ihnen beim Thema „current symptoms“ helfen?",
        "answers": [
          {
            "text": "I need help with the current symptoms.",
            "next": "details"
          },
          {
            "text": "I have a question about the current symptoms.",
            "next": "problem"
          }
        ]
      },
      "details": {
        "bot": "Could you provide more information about the medicine use?",
        "de": "Könnten Sie mehr Informationen zu „medicine use“ geben?",
        "answers": [
          {
            "text": "Yes, the main detail is the medicine use.",
            "next": "optionA"
          },
          {
            "text": "Could you explain the options for the medicine use?",
            "next": "optionB"
          }
        ]
      },
      "problem": {
        "bot": "What exactly is the problem with the medicine use?",
        "de": "Was genau ist das Problem bei „medicine use“?",
        "answers": [
          {
            "text": "The medicine use is not correct.",
            "next": "optionA"
          },
          {
            "text": "I need another option for the medicine use.",
            "next": "optionB"
          }
        ]
      },
      "optionA": {
        "bot": "We can arrange the side effects.",
        "de": "Wir können „side effects“ organisieren.",
        "answers": [
          {
            "text": "Please arrange the side effects.",
            "next": "confirm"
          },
          {
            "text": "Could you explain the side effects first?",
            "next": "confirm"
          }
        ]
      },
      "optionB": {
        "bot": "An alternative is the side effects.",
        "de": "Eine Alternative ist „side effects“.",
        "answers": [
          {
            "text": "The side effects sounds suitable.",
            "next": "confirm"
          },
          {
            "text": "I would like to compare the side effects.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "How should we handle the next appointment?",
        "de": "Wie sollen wir mit „next appointment“ umgehen?",
        "answers": [
          {
            "text": "Please confirm the next appointment by email.",
            "next": "end"
          },
          {
            "text": "A written note about the next appointment is enough.",
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
    "id": "branch152_pharmacy_effect",
    "topic": "Apotheke",
    "title": "Nebenwirkung klären",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "How can I help you with the medicine name?",
        "de": "Wie kann ich Ihnen beim Thema „medicine name“ helfen?",
        "answers": [
          {
            "text": "I need help with the medicine name.",
            "next": "details"
          },
          {
            "text": "I have a question about the medicine name.",
            "next": "problem"
          }
        ]
      },
      "details": {
        "bot": "Could you provide more information about the reported symptom?",
        "de": "Könnten Sie mehr Informationen zu „reported symptom“ geben?",
        "answers": [
          {
            "text": "Yes, the main detail is the reported symptom.",
            "next": "optionA"
          },
          {
            "text": "Could you explain the options for the reported symptom?",
            "next": "optionB"
          }
        ]
      },
      "problem": {
        "bot": "What exactly is the problem with the reported symptom?",
        "de": "Was genau ist das Problem bei „reported symptom“?",
        "answers": [
          {
            "text": "The reported symptom is not correct.",
            "next": "optionA"
          },
          {
            "text": "I need another option for the reported symptom.",
            "next": "optionB"
          }
        ]
      },
      "optionA": {
        "bot": "We can arrange the safe action.",
        "de": "Wir können „safe action“ organisieren.",
        "answers": [
          {
            "text": "Please arrange the safe action.",
            "next": "confirm"
          },
          {
            "text": "Could you explain the safe action first?",
            "next": "confirm"
          }
        ]
      },
      "optionB": {
        "bot": "An alternative is the safe action.",
        "de": "Eine Alternative ist „safe action“.",
        "answers": [
          {
            "text": "The safe action sounds suitable.",
            "next": "confirm"
          },
          {
            "text": "I would like to compare the safe action.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "How should we handle the doctor contact?",
        "de": "Wie sollen wir mit „doctor contact“ umgehen?",
        "answers": [
          {
            "text": "Please confirm the doctor contact by email.",
            "next": "end"
          },
          {
            "text": "A written note about the doctor contact is enough.",
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
    "id": "branch152_work_presentation",
    "topic": "Beruf",
    "title": "Präsentation prüfen",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "How can I help you with the presentation topic?",
        "de": "Wie kann ich Ihnen beim Thema „presentation topic“ helfen?",
        "answers": [
          {
            "text": "I need help with the presentation topic.",
            "next": "details"
          },
          {
            "text": "I have a question about the presentation topic.",
            "next": "problem"
          }
        ]
      },
      "details": {
        "bot": "Could you provide more information about the feedback area?",
        "de": "Könnten Sie mehr Informationen zu „feedback area“ geben?",
        "answers": [
          {
            "text": "Yes, the main detail is the feedback area.",
            "next": "optionA"
          },
          {
            "text": "Could you explain the options for the feedback area?",
            "next": "optionB"
          }
        ]
      },
      "problem": {
        "bot": "What exactly is the problem with the feedback area?",
        "de": "Was genau ist das Problem bei „feedback area“?",
        "answers": [
          {
            "text": "The feedback area is not correct.",
            "next": "optionA"
          },
          {
            "text": "I need another option for the feedback area.",
            "next": "optionB"
          }
        ]
      },
      "optionA": {
        "bot": "We can arrange the revision deadline.",
        "de": "Wir können „revision deadline“ organisieren.",
        "answers": [
          {
            "text": "Please arrange the revision deadline.",
            "next": "confirm"
          },
          {
            "text": "Could you explain the revision deadline first?",
            "next": "confirm"
          }
        ]
      },
      "optionB": {
        "bot": "An alternative is the revision deadline.",
        "de": "Eine Alternative ist „revision deadline“.",
        "answers": [
          {
            "text": "The revision deadline sounds suitable.",
            "next": "confirm"
          },
          {
            "text": "I would like to compare the revision deadline.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "How should we handle the final review?",
        "de": "Wie sollen wir mit „final review“ umgehen?",
        "answers": [
          {
            "text": "Please confirm the final review by email.",
            "next": "end"
          },
          {
            "text": "A written note about the final review is enough.",
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
    "id": "branch152_work_interview",
    "topic": "Beruf",
    "title": "Bewerbungsgespräch",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "How can I help you with the work experience?",
        "de": "Wie kann ich Ihnen beim Thema „work experience“ helfen?",
        "answers": [
          {
            "text": "I need help with the work experience.",
            "next": "details"
          },
          {
            "text": "I have a question about the work experience.",
            "next": "problem"
          }
        ]
      },
      "details": {
        "bot": "Could you provide more information about the main strength?",
        "de": "Könnten Sie mehr Informationen zu „main strength“ geben?",
        "answers": [
          {
            "text": "Yes, the main detail is the main strength.",
            "next": "optionA"
          },
          {
            "text": "Could you explain the options for the main strength?",
            "next": "optionB"
          }
        ]
      },
      "problem": {
        "bot": "What exactly is the problem with the main strength?",
        "de": "Was genau ist das Problem bei „main strength“?",
        "answers": [
          {
            "text": "The main strength is not correct.",
            "next": "optionA"
          },
          {
            "text": "I need another option for the main strength.",
            "next": "optionB"
          }
        ]
      },
      "optionA": {
        "bot": "We can arrange the role interest.",
        "de": "Wir können „role interest“ organisieren.",
        "answers": [
          {
            "text": "Please arrange the role interest.",
            "next": "confirm"
          },
          {
            "text": "Could you explain the role interest first?",
            "next": "confirm"
          }
        ]
      },
      "optionB": {
        "bot": "An alternative is the role interest.",
        "de": "Eine Alternative ist „role interest“.",
        "answers": [
          {
            "text": "The role interest sounds suitable.",
            "next": "confirm"
          },
          {
            "text": "I would like to compare the role interest.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "How should we handle the next step?",
        "de": "Wie sollen wir mit „next step“ umgehen?",
        "answers": [
          {
            "text": "Please confirm the next step by email.",
            "next": "end"
          },
          {
            "text": "A written note about the next step is enough.",
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
    "id": "branch152_phone_reschedule",
    "topic": "Telefon",
    "title": "Termin verschieben",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "How can I help you with the current appointment?",
        "de": "Wie kann ich Ihnen beim Thema „current appointment“ helfen?",
        "answers": [
          {
            "text": "I need help with the current appointment.",
            "next": "details"
          },
          {
            "text": "I have a question about the current appointment.",
            "next": "problem"
          }
        ]
      },
      "details": {
        "bot": "Could you provide more information about the preferred day?",
        "de": "Könnten Sie mehr Informationen zu „preferred day“ geben?",
        "answers": [
          {
            "text": "Yes, the main detail is the preferred day.",
            "next": "optionA"
          },
          {
            "text": "Could you explain the options for the preferred day?",
            "next": "optionB"
          }
        ]
      },
      "problem": {
        "bot": "What exactly is the problem with the preferred day?",
        "de": "Was genau ist das Problem bei „preferred day“?",
        "answers": [
          {
            "text": "The preferred day is not correct.",
            "next": "optionA"
          },
          {
            "text": "I need another option for the preferred day.",
            "next": "optionB"
          }
        ]
      },
      "optionA": {
        "bot": "We can arrange the available slot.",
        "de": "Wir können „available slot“ organisieren.",
        "answers": [
          {
            "text": "Please arrange the available slot.",
            "next": "confirm"
          },
          {
            "text": "Could you explain the available slot first?",
            "next": "confirm"
          }
        ]
      },
      "optionB": {
        "bot": "An alternative is the available slot.",
        "de": "Eine Alternative ist „available slot“.",
        "answers": [
          {
            "text": "The available slot sounds suitable.",
            "next": "confirm"
          },
          {
            "text": "I would like to compare the available slot.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "How should we handle the confirmation?",
        "de": "Wie sollen wir mit „confirmation“ umgehen?",
        "answers": [
          {
            "text": "Please confirm the confirmation by email.",
            "next": "end"
          },
          {
            "text": "A written note about the confirmation is enough.",
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
    "id": "branch152_bank_card",
    "topic": "Bank",
    "title": "Kartenproblem",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "How can I help you with the card status?",
        "de": "Wie kann ich Ihnen beim Thema „card status“ helfen?",
        "answers": [
          {
            "text": "I need help with the card status.",
            "next": "details"
          },
          {
            "text": "I have a question about the card status.",
            "next": "problem"
          }
        ]
      },
      "details": {
        "bot": "Could you provide more information about the last transaction?",
        "de": "Könnten Sie mehr Informationen zu „last transaction“ geben?",
        "answers": [
          {
            "text": "Yes, the main detail is the last transaction.",
            "next": "optionA"
          },
          {
            "text": "Could you explain the options for the last transaction?",
            "next": "optionB"
          }
        ]
      },
      "problem": {
        "bot": "What exactly is the problem with the last transaction?",
        "de": "Was genau ist das Problem bei „last transaction“?",
        "answers": [
          {
            "text": "The last transaction is not correct.",
            "next": "optionA"
          },
          {
            "text": "I need another option for the last transaction.",
            "next": "optionB"
          }
        ]
      },
      "optionA": {
        "bot": "We can arrange the replacement card.",
        "de": "Wir können „replacement card“ organisieren.",
        "answers": [
          {
            "text": "Please arrange the replacement card.",
            "next": "confirm"
          },
          {
            "text": "Could you explain the replacement card first?",
            "next": "confirm"
          }
        ]
      },
      "optionB": {
        "bot": "An alternative is the replacement card.",
        "de": "Eine Alternative ist „replacement card“.",
        "answers": [
          {
            "text": "The replacement card sounds suitable.",
            "next": "confirm"
          },
          {
            "text": "I would like to compare the replacement card.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "How should we handle the delivery time?",
        "de": "Wie sollen wir mit „delivery time“ umgehen?",
        "answers": [
          {
            "text": "Please confirm the delivery time by email.",
            "next": "end"
          },
          {
            "text": "A written note about the delivery time is enough.",
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
    "id": "branch152_post_delay",
    "topic": "Post",
    "title": "Paket verspätet",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "How can I help you with the tracking number?",
        "de": "Wie kann ich Ihnen beim Thema „tracking number“ helfen?",
        "answers": [
          {
            "text": "I need help with the tracking number.",
            "next": "details"
          },
          {
            "text": "I have a question about the tracking number.",
            "next": "problem"
          }
        ]
      },
      "details": {
        "bot": "Could you provide more information about the last location?",
        "de": "Könnten Sie mehr Informationen zu „last location“ geben?",
        "answers": [
          {
            "text": "Yes, the main detail is the last location.",
            "next": "optionA"
          },
          {
            "text": "Could you explain the options for the last location?",
            "next": "optionB"
          }
        ]
      },
      "problem": {
        "bot": "What exactly is the problem with the last location?",
        "de": "Was genau ist das Problem bei „last location“?",
        "answers": [
          {
            "text": "The last location is not correct.",
            "next": "optionA"
          },
          {
            "text": "I need another option for the last location.",
            "next": "optionB"
          }
        ]
      },
      "optionA": {
        "bot": "We can arrange the new delivery date.",
        "de": "Wir können „new delivery date“ organisieren.",
        "answers": [
          {
            "text": "Please arrange the new delivery date.",
            "next": "confirm"
          },
          {
            "text": "Could you explain the new delivery date first?",
            "next": "confirm"
          }
        ]
      },
      "optionB": {
        "bot": "An alternative is the new delivery date.",
        "de": "Eine Alternative ist „new delivery date“.",
        "answers": [
          {
            "text": "The new delivery date sounds suitable.",
            "next": "confirm"
          },
          {
            "text": "I would like to compare the new delivery date.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "How should we handle the notification?",
        "de": "Wie sollen wir mit „notification“ umgehen?",
        "answers": [
          {
            "text": "Please confirm the notification by email.",
            "next": "end"
          },
          {
            "text": "A written note about the notification is enough.",
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
    "id": "branch152_museum_tour",
    "topic": "Museum",
    "title": "Führung buchen",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "How can I help you with the tour language?",
        "de": "Wie kann ich Ihnen beim Thema „tour language“ helfen?",
        "answers": [
          {
            "text": "I need help with the tour language.",
            "next": "details"
          },
          {
            "text": "I have a question about the tour language.",
            "next": "problem"
          }
        ]
      },
      "details": {
        "bot": "Could you provide more information about the start time?",
        "de": "Könnten Sie mehr Informationen zu „start time“ geben?",
        "answers": [
          {
            "text": "Yes, the main detail is the start time.",
            "next": "optionA"
          },
          {
            "text": "Could you explain the options for the start time?",
            "next": "optionB"
          }
        ]
      },
      "problem": {
        "bot": "What exactly is the problem with the start time?",
        "de": "Was genau ist das Problem bei „start time“?",
        "answers": [
          {
            "text": "The start time is not correct.",
            "next": "optionA"
          },
          {
            "text": "I need another option for the start time.",
            "next": "optionB"
          }
        ]
      },
      "optionA": {
        "bot": "We can arrange the ticket inclusion.",
        "de": "Wir können „ticket inclusion“ organisieren.",
        "answers": [
          {
            "text": "Please arrange the ticket inclusion.",
            "next": "confirm"
          },
          {
            "text": "Could you explain the ticket inclusion first?",
            "next": "confirm"
          }
        ]
      },
      "optionB": {
        "bot": "An alternative is the ticket inclusion.",
        "de": "Eine Alternative ist „ticket inclusion“.",
        "answers": [
          {
            "text": "The ticket inclusion sounds suitable.",
            "next": "confirm"
          },
          {
            "text": "I would like to compare the ticket inclusion.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "How should we handle the meeting point?",
        "de": "Wie sollen wir mit „meeting point“ umgehen?",
        "answers": [
          {
            "text": "Please confirm the meeting point by email.",
            "next": "end"
          },
          {
            "text": "A written note about the meeting point is enough.",
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
    "id": "branch152_camping_weather",
    "topic": "Camping",
    "title": "Wetterwarnung",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "How can I help you with the current pitch?",
        "de": "Wie kann ich Ihnen beim Thema „current pitch“ helfen?",
        "answers": [
          {
            "text": "I need help with the current pitch.",
            "next": "details"
          },
          {
            "text": "I have a question about the current pitch.",
            "next": "problem"
          }
        ]
      },
      "details": {
        "bot": "Could you provide more information about the weather risk?",
        "de": "Könnten Sie mehr Informationen zu „weather risk“ geben?",
        "answers": [
          {
            "text": "Yes, the main detail is the weather risk.",
            "next": "optionA"
          },
          {
            "text": "Could you explain the options for the weather risk?",
            "next": "optionB"
          }
        ]
      },
      "problem": {
        "bot": "What exactly is the problem with the weather risk?",
        "de": "Was genau ist das Problem bei „weather risk“?",
        "answers": [
          {
            "text": "The weather risk is not correct.",
            "next": "optionA"
          },
          {
            "text": "I need another option for the weather risk.",
            "next": "optionB"
          }
        ]
      },
      "optionA": {
        "bot": "We can arrange the safer area.",
        "de": "Wir können „safer area“ organisieren.",
        "answers": [
          {
            "text": "Please arrange the safer area.",
            "next": "confirm"
          },
          {
            "text": "Could you explain the safer area first?",
            "next": "confirm"
          }
        ]
      },
      "optionB": {
        "bot": "An alternative is the safer area.",
        "de": "Eine Alternative ist „safer area“.",
        "answers": [
          {
            "text": "The safer area sounds suitable.",
            "next": "confirm"
          },
          {
            "text": "I would like to compare the safer area.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "How should we handle the staff assistance?",
        "de": "Wie sollen wir mit „staff assistance“ umgehen?",
        "answers": [
          {
            "text": "Please confirm the staff assistance by email.",
            "next": "end"
          },
          {
            "text": "A written note about the staff assistance is enough.",
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
    "id": "branch152_university_enrol",
    "topic": "Bildung",
    "title": "Kurs einschreiben",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "How can I help you with the course choice?",
        "de": "Wie kann ich Ihnen beim Thema „course choice“ helfen?",
        "answers": [
          {
            "text": "I need help with the course choice.",
            "next": "details"
          },
          {
            "text": "I have a question about the course choice.",
            "next": "problem"
          }
        ]
      },
      "details": {
        "bot": "Could you provide more information about the placement test?",
        "de": "Könnten Sie mehr Informationen zu „placement test“ geben?",
        "answers": [
          {
            "text": "Yes, the main detail is the placement test.",
            "next": "optionA"
          },
          {
            "text": "Could you explain the options for the placement test?",
            "next": "optionB"
          }
        ]
      },
      "problem": {
        "bot": "What exactly is the problem with the placement test?",
        "de": "Was genau ist das Problem bei „placement test“?",
        "answers": [
          {
            "text": "The placement test is not correct.",
            "next": "optionA"
          },
          {
            "text": "I need another option for the placement test.",
            "next": "optionB"
          }
        ]
      },
      "optionA": {
        "bot": "We can arrange the registration fee.",
        "de": "Wir können „registration fee“ organisieren.",
        "answers": [
          {
            "text": "Please arrange the registration fee.",
            "next": "confirm"
          },
          {
            "text": "Could you explain the registration fee first?",
            "next": "confirm"
          }
        ]
      },
      "optionB": {
        "bot": "An alternative is the registration fee.",
        "de": "Eine Alternative ist „registration fee“.",
        "answers": [
          {
            "text": "The registration fee sounds suitable.",
            "next": "confirm"
          },
          {
            "text": "I would like to compare the registration fee.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "How should we handle the start date?",
        "de": "Wie sollen wir mit „start date“ umgehen?",
        "answers": [
          {
            "text": "Please confirm the start date by email.",
            "next": "end"
          },
          {
            "text": "A written note about the start date is enough.",
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
    "id": "branch152_sport_member",
    "topic": "Sport",
    "title": "Mitgliedschaft wählen",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "How can I help you with the training goal?",
        "de": "Wie kann ich Ihnen beim Thema „training goal“ helfen?",
        "answers": [
          {
            "text": "I need help with the training goal.",
            "next": "details"
          },
          {
            "text": "I have a question about the training goal.",
            "next": "problem"
          }
        ]
      },
      "details": {
        "bot": "Could you provide more information about the membership term?",
        "de": "Könnten Sie mehr Informationen zu „membership term“ geben?",
        "answers": [
          {
            "text": "Yes, the main detail is the membership term.",
            "next": "optionA"
          },
          {
            "text": "Could you explain the options for the membership term?",
            "next": "optionB"
          }
        ]
      },
      "problem": {
        "bot": "What exactly is the problem with the membership term?",
        "de": "Was genau ist das Problem bei „membership term“?",
        "answers": [
          {
            "text": "The membership term is not correct.",
            "next": "optionA"
          },
          {
            "text": "I need another option for the membership term.",
            "next": "optionB"
          }
        ]
      },
      "optionA": {
        "bot": "We can arrange the included classes.",
        "de": "Wir können „included classes“ organisieren.",
        "answers": [
          {
            "text": "Please arrange the included classes.",
            "next": "confirm"
          },
          {
            "text": "Could you explain the included classes first?",
            "next": "confirm"
          }
        ]
      },
      "optionB": {
        "bot": "An alternative is the included classes.",
        "de": "Eine Alternative ist „included classes“.",
        "answers": [
          {
            "text": "The included classes sounds suitable.",
            "next": "confirm"
          },
          {
            "text": "I would like to compare the included classes.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "How should we handle the trial session?",
        "de": "Wie sollen wir mit „trial session“ umgehen?",
        "answers": [
          {
            "text": "Please confirm the trial session by email.",
            "next": "end"
          },
          {
            "text": "A written note about the trial session is enough.",
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
    "id": "branch152_neighbour_noise",
    "topic": "Wohnen",
    "title": "Lärm ansprechen",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "How can I help you with the noise source?",
        "de": "Wie kann ich Ihnen beim Thema „noise source“ helfen?",
        "answers": [
          {
            "text": "I need help with the noise source.",
            "next": "details"
          },
          {
            "text": "I have a question about the noise source.",
            "next": "problem"
          }
        ]
      },
      "details": {
        "bot": "Could you provide more information about the quiet hours?",
        "de": "Könnten Sie mehr Informationen zu „quiet hours“ geben?",
        "answers": [
          {
            "text": "Yes, the main detail is the quiet hours.",
            "next": "optionA"
          },
          {
            "text": "Could you explain the options for the quiet hours?",
            "next": "optionB"
          }
        ]
      },
      "problem": {
        "bot": "What exactly is the problem with the quiet hours?",
        "de": "Was genau ist das Problem bei „quiet hours“?",
        "answers": [
          {
            "text": "The quiet hours is not correct.",
            "next": "optionA"
          },
          {
            "text": "I need another option for the quiet hours.",
            "next": "optionB"
          }
        ]
      },
      "optionA": {
        "bot": "We can arrange the possible solution.",
        "de": "Wir können „possible solution“ organisieren.",
        "answers": [
          {
            "text": "Please arrange the possible solution.",
            "next": "confirm"
          },
          {
            "text": "Could you explain the possible solution first?",
            "next": "confirm"
          }
        ]
      },
      "optionB": {
        "bot": "An alternative is the possible solution.",
        "de": "Eine Alternative ist „possible solution“.",
        "answers": [
          {
            "text": "The possible solution sounds suitable.",
            "next": "confirm"
          },
          {
            "text": "I would like to compare the possible solution.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "How should we handle the agreement?",
        "de": "Wie sollen wir mit „agreement“ umgehen?",
        "answers": [
          {
            "text": "Please confirm the agreement by email.",
            "next": "end"
          },
          {
            "text": "A written note about the agreement is enough.",
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
    "id": "branch152_weather_plan",
    "topic": "Wetter",
    "title": "Ausflug planen",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "How can I help you with the forecast?",
        "de": "Wie kann ich Ihnen beim Thema „forecast“ helfen?",
        "answers": [
          {
            "text": "I need help with the forecast.",
            "next": "details"
          },
          {
            "text": "I have a question about the forecast.",
            "next": "problem"
          }
        ]
      },
      "details": {
        "bot": "Could you provide more information about the morning conditions?",
        "de": "Könnten Sie mehr Informationen zu „morning conditions“ geben?",
        "answers": [
          {
            "text": "Yes, the main detail is the morning conditions.",
            "next": "optionA"
          },
          {
            "text": "Could you explain the options for the morning conditions?",
            "next": "optionB"
          }
        ]
      },
      "problem": {
        "bot": "What exactly is the problem with the morning conditions?",
        "de": "Was genau ist das Problem bei „morning conditions“?",
        "answers": [
          {
            "text": "The morning conditions is not correct.",
            "next": "optionA"
          },
          {
            "text": "I need another option for the morning conditions.",
            "next": "optionB"
          }
        ]
      },
      "optionA": {
        "bot": "We can arrange the alternative time.",
        "de": "Wir können „alternative time“ organisieren.",
        "answers": [
          {
            "text": "Please arrange the alternative time.",
            "next": "confirm"
          },
          {
            "text": "Could you explain the alternative time first?",
            "next": "confirm"
          }
        ]
      },
      "optionB": {
        "bot": "An alternative is the alternative time.",
        "de": "Eine Alternative ist „alternative time“.",
        "answers": [
          {
            "text": "The alternative time sounds suitable.",
            "next": "confirm"
          },
          {
            "text": "I would like to compare the alternative time.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "How should we handle the clothing advice?",
        "de": "Wie sollen wir mit „clothing advice“ umgehen?",
        "answers": [
          {
            "text": "Please confirm the clothing advice by email.",
            "next": "end"
          },
          {
            "text": "A written note about the clothing advice is enough.",
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
    "id": "branch152_online_account",
    "topic": "Internet",
    "title": "Onlinekonto entsperren",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "How can I help you with the login problem?",
        "de": "Wie kann ich Ihnen beim Thema „login problem“ helfen?",
        "answers": [
          {
            "text": "I need help with the login problem.",
            "next": "details"
          },
          {
            "text": "I have a question about the login problem.",
            "next": "problem"
          }
        ]
      },
      "details": {
        "bot": "Could you provide more information about the verification method?",
        "de": "Könnten Sie mehr Informationen zu „verification method“ geben?",
        "answers": [
          {
            "text": "Yes, the main detail is the verification method.",
            "next": "optionA"
          },
          {
            "text": "Could you explain the options for the verification method?",
            "next": "optionB"
          }
        ]
      },
      "problem": {
        "bot": "What exactly is the problem with the verification method?",
        "de": "Was genau ist das Problem bei „verification method“?",
        "answers": [
          {
            "text": "The verification method is not correct.",
            "next": "optionA"
          },
          {
            "text": "I need another option for the verification method.",
            "next": "optionB"
          }
        ]
      },
      "optionA": {
        "bot": "We can arrange the new password.",
        "de": "Wir können „new password“ organisieren.",
        "answers": [
          {
            "text": "Please arrange the new password.",
            "next": "confirm"
          },
          {
            "text": "Could you explain the new password first?",
            "next": "confirm"
          }
        ]
      },
      "optionB": {
        "bot": "An alternative is the new password.",
        "de": "Eine Alternative ist „new password“.",
        "answers": [
          {
            "text": "The new password sounds suitable.",
            "next": "confirm"
          },
          {
            "text": "I would like to compare the new password.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "How should we handle the security check?",
        "de": "Wie sollen wir mit „security check“ umgehen?",
        "answers": [
          {
            "text": "Please confirm the security check by email.",
            "next": "end"
          },
          {
            "text": "A written note about the security check is enough.",
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
    "id": "branch152_delivery_wrong",
    "topic": "Einkaufen",
    "title": "Falsche Lieferung",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "How can I help you with the order number?",
        "de": "Wie kann ich Ihnen beim Thema „order number“ helfen?",
        "answers": [
          {
            "text": "I need help with the order number.",
            "next": "details"
          },
          {
            "text": "I have a question about the order number.",
            "next": "problem"
          }
        ]
      },
      "details": {
        "bot": "Could you provide more information about the wrong item?",
        "de": "Könnten Sie mehr Informationen zu „wrong item“ geben?",
        "answers": [
          {
            "text": "Yes, the main detail is the wrong item.",
            "next": "optionA"
          },
          {
            "text": "Could you explain the options for the wrong item?",
            "next": "optionB"
          }
        ]
      },
      "problem": {
        "bot": "What exactly is the problem with the wrong item?",
        "de": "Was genau ist das Problem bei „wrong item“?",
        "answers": [
          {
            "text": "The wrong item is not correct.",
            "next": "optionA"
          },
          {
            "text": "I need another option for the wrong item.",
            "next": "optionB"
          }
        ]
      },
      "optionA": {
        "bot": "We can arrange the replacement delivery.",
        "de": "Wir können „replacement delivery“ organisieren.",
        "answers": [
          {
            "text": "Please arrange the replacement delivery.",
            "next": "confirm"
          },
          {
            "text": "Could you explain the replacement delivery first?",
            "next": "confirm"
          }
        ]
      },
      "optionB": {
        "bot": "An alternative is the replacement delivery.",
        "de": "Eine Alternative ist „replacement delivery“.",
        "answers": [
          {
            "text": "The replacement delivery sounds suitable.",
            "next": "confirm"
          },
          {
            "text": "I would like to compare the replacement delivery.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "How should we handle the return label?",
        "de": "Wie sollen wir mit „return label“ umgehen?",
        "answers": [
          {
            "text": "Please confirm the return label by email.",
            "next": "end"
          },
          {
            "text": "A written note about the return label is enough.",
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
    "id": "branch152_tourist_info",
    "topic": "Reisen",
    "title": "Ausflug empfehlen",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "How can I help you with the length of stay?",
        "de": "Wie kann ich Ihnen beim Thema „length of stay“ helfen?",
        "answers": [
          {
            "text": "I need help with the length of stay.",
            "next": "details"
          },
          {
            "text": "I have a question about the length of stay.",
            "next": "problem"
          }
        ]
      },
      "details": {
        "bot": "Could you provide more information about the main interest?",
        "de": "Könnten Sie mehr Informationen zu „main interest“ geben?",
        "answers": [
          {
            "text": "Yes, the main detail is the main interest.",
            "next": "optionA"
          },
          {
            "text": "Could you explain the options for the main interest?",
            "next": "optionB"
          }
        ]
      },
      "problem": {
        "bot": "What exactly is the problem with the main interest?",
        "de": "Was genau ist das Problem bei „main interest“?",
        "answers": [
          {
            "text": "The main interest is not correct.",
            "next": "optionA"
          },
          {
            "text": "I need another option for the main interest.",
            "next": "optionB"
          }
        ]
      },
      "optionA": {
        "bot": "We can arrange the recommended attraction.",
        "de": "Wir können „recommended attraction“ organisieren.",
        "answers": [
          {
            "text": "Please arrange the recommended attraction.",
            "next": "confirm"
          },
          {
            "text": "Could you explain the recommended attraction first?",
            "next": "confirm"
          }
        ]
      },
      "optionB": {
        "bot": "An alternative is the recommended attraction.",
        "de": "Eine Alternative ist „recommended attraction“.",
        "answers": [
          {
            "text": "The recommended attraction sounds suitable.",
            "next": "confirm"
          },
          {
            "text": "I would like to compare the recommended attraction.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "How should we handle the booking?",
        "de": "Wie sollen wir mit „booking“ umgehen?",
        "answers": [
          {
            "text": "Please confirm the booking by email.",
            "next": "end"
          },
          {
            "text": "A written note about the booking is enough.",
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
    "id": "branch152_restaurant_allergy",
    "topic": "Restaurant",
    "title": "Allergie erklären",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "How can I help you with the allergy type?",
        "de": "Wie kann ich Ihnen beim Thema „allergy type“ helfen?",
        "answers": [
          {
            "text": "I need help with the allergy type.",
            "next": "details"
          },
          {
            "text": "I have a question about the allergy type.",
            "next": "problem"
          }
        ]
      },
      "details": {
        "bot": "Could you provide more information about the severity?",
        "de": "Könnten Sie mehr Informationen zu „severity“ geben?",
        "answers": [
          {
            "text": "Yes, the main detail is the severity.",
            "next": "optionA"
          },
          {
            "text": "Could you explain the options for the severity?",
            "next": "optionB"
          }
        ]
      },
      "problem": {
        "bot": "What exactly is the problem with the severity?",
        "de": "Was genau ist das Problem bei „severity“?",
        "answers": [
          {
            "text": "The severity is not correct.",
            "next": "optionA"
          },
          {
            "text": "I need another option for the severity.",
            "next": "optionB"
          }
        ]
      },
      "optionA": {
        "bot": "We can arrange the safe meal.",
        "de": "Wir können „safe meal“ organisieren.",
        "answers": [
          {
            "text": "Please arrange the safe meal.",
            "next": "confirm"
          },
          {
            "text": "Could you explain the safe meal first?",
            "next": "confirm"
          }
        ]
      },
      "optionB": {
        "bot": "An alternative is the safe meal.",
        "de": "Eine Alternative ist „safe meal“.",
        "answers": [
          {
            "text": "The safe meal sounds suitable.",
            "next": "confirm"
          },
          {
            "text": "I would like to compare the safe meal.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "How should we handle the kitchen confirmation?",
        "de": "Wie sollen wir mit „kitchen confirmation“ umgehen?",
        "answers": [
          {
            "text": "Please confirm the kitchen confirmation by email.",
            "next": "end"
          },
          {
            "text": "A written note about the kitchen confirmation is enough.",
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
    "id": "branch152_hotel_taxi",
    "topic": "Hotel",
    "title": "Taxi bestellen",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "How can I help you with the pickup time?",
        "de": "Wie kann ich Ihnen beim Thema „pickup time“ helfen?",
        "answers": [
          {
            "text": "I need help with the pickup time.",
            "next": "details"
          },
          {
            "text": "I have a question about the pickup time.",
            "next": "problem"
          }
        ]
      },
      "details": {
        "bot": "Could you provide more information about the destination?",
        "de": "Könnten Sie mehr Informationen zu „destination“ geben?",
        "answers": [
          {
            "text": "Yes, the main detail is the destination.",
            "next": "optionA"
          },
          {
            "text": "Could you explain the options for the destination?",
            "next": "optionB"
          }
        ]
      },
      "problem": {
        "bot": "What exactly is the problem with the destination?",
        "de": "Was genau ist das Problem bei „destination“?",
        "answers": [
          {
            "text": "The destination is not correct.",
            "next": "optionA"
          },
          {
            "text": "I need another option for the destination.",
            "next": "optionB"
          }
        ]
      },
      "optionA": {
        "bot": "We can arrange the luggage amount.",
        "de": "Wir können „luggage amount“ organisieren.",
        "answers": [
          {
            "text": "Please arrange the luggage amount.",
            "next": "confirm"
          },
          {
            "text": "Could you explain the luggage amount first?",
            "next": "confirm"
          }
        ]
      },
      "optionB": {
        "bot": "An alternative is the luggage amount.",
        "de": "Eine Alternative ist „luggage amount“.",
        "answers": [
          {
            "text": "The luggage amount sounds suitable.",
            "next": "confirm"
          },
          {
            "text": "I would like to compare the luggage amount.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "How should we handle the booking confirmation?",
        "de": "Wie sollen wir mit „booking confirmation“ umgehen?",
        "answers": [
          {
            "text": "Please confirm the booking confirmation by email.",
            "next": "end"
          },
          {
            "text": "A written note about the booking confirmation is enough.",
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
ES_BRANCHING_SCENARIOS_151.push(...ES_BRANCHING_SCENARIOS_152);
