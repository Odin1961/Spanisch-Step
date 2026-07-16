const ES_BRANCHING_SCENARIOS_155 = [
  {
    "id": "branch155_restaurant_catering",
    "topic": "Restaurant",
    "title": "Catering für eine Feier",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Could you tell me what you need regarding the event type?",
        "de": "Könnten Sie sagen, was Sie bezüglich „event type“ benötigen?",
        "answers": [
          {
            "text": "I would like to arrange the event type.",
            "next": "detailA"
          },
          {
            "text": "I need to change something about the event type.",
            "next": "detailB"
          }
        ]
      },
      "detailA": {
        "bot": "What details can you provide about the guest number?",
        "de": "Welche Einzelheiten können Sie zu „guest number“ nennen?",
        "answers": [
          {
            "text": "The guest number is already confirmed.",
            "next": "solutionA"
          },
          {
            "text": "I need advice about the guest number.",
            "next": "solutionB"
          }
        ]
      },
      "detailB": {
        "bot": "What would you like to change about the guest number?",
        "de": "Was möchten Sie bei „guest number“ ändern?",
        "answers": [
          {
            "text": "I need a different option for the guest number.",
            "next": "solutionB"
          },
          {
            "text": "The current guest number is no longer suitable.",
            "next": "solutionA"
          }
        ]
      },
      "solutionA": {
        "bot": "We can proceed with the menu selection.",
        "de": "Wir können mit „menu selection“ fortfahren.",
        "answers": [
          {
            "text": "Please proceed with the menu selection.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the menu selection in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "solutionB": {
        "bot": "An alternative would be the menu selection.",
        "de": "Eine Alternative wäre „menu selection“.",
        "answers": [
          {
            "text": "That menu selection sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the menu selection with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How should we handle the delivery time?",
        "de": "Wie sollen wir mit „delivery time“ umgehen?",
        "answers": [
          {
            "text": "Please confirm the delivery time by email.",
            "next": "end"
          },
          {
            "text": "A written note about the delivery time would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you need any further information about the delivery time?",
        "de": "Benötigen Sie weitere Informationen zu „delivery time“?",
        "answers": [
          {
            "text": "No, the delivery time is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the delivery time once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. The arrangement has been completed.",
        "de": "Danke. Die Vereinbarung wurde abgeschlossen.",
        "answers": []
      }
    }
  },
  {
    "id": "branch155_hotel_business_guest",
    "topic": "Hotel",
    "title": "Geschäftsgast im Hotel",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Could you tell me what you need regarding the company booking?",
        "de": "Könnten Sie sagen, was Sie bezüglich „company booking“ benötigen?",
        "answers": [
          {
            "text": "I would like to arrange the company booking.",
            "next": "detailA"
          },
          {
            "text": "I need to change something about the company booking.",
            "next": "detailB"
          }
        ]
      },
      "detailA": {
        "bot": "What details can you provide about the invoice address?",
        "de": "Welche Einzelheiten können Sie zu „invoice address“ nennen?",
        "answers": [
          {
            "text": "The invoice address is already confirmed.",
            "next": "solutionA"
          },
          {
            "text": "I need advice about the invoice address.",
            "next": "solutionB"
          }
        ]
      },
      "detailB": {
        "bot": "What would you like to change about the invoice address?",
        "de": "Was möchten Sie bei „invoice address“ ändern?",
        "answers": [
          {
            "text": "I need a different option for the invoice address.",
            "next": "solutionB"
          },
          {
            "text": "The current invoice address is no longer suitable.",
            "next": "solutionA"
          }
        ]
      },
      "solutionA": {
        "bot": "We can proceed with the meeting facilities.",
        "de": "Wir können mit „meeting facilities“ fortfahren.",
        "answers": [
          {
            "text": "Please proceed with the meeting facilities.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the meeting facilities in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "solutionB": {
        "bot": "An alternative would be the meeting facilities.",
        "de": "Eine Alternative wäre „meeting facilities“.",
        "answers": [
          {
            "text": "That meeting facilities sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the meeting facilities with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How should we handle the late checkout?",
        "de": "Wie sollen wir mit „late checkout“ umgehen?",
        "answers": [
          {
            "text": "Please confirm the late checkout by email.",
            "next": "end"
          },
          {
            "text": "A written note about the late checkout would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you need any further information about the late checkout?",
        "de": "Benötigen Sie weitere Informationen zu „late checkout“?",
        "answers": [
          {
            "text": "No, the late checkout is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the late checkout once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. The arrangement has been completed.",
        "de": "Danke. Die Vereinbarung wurde abgeschlossen.",
        "answers": []
      }
    }
  },
  {
    "id": "branch155_airport_special_assistance",
    "topic": "Flughafen",
    "title": "Besondere Hilfe am Flughafen",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Could you tell me what you need regarding the assistance need?",
        "de": "Könnten Sie sagen, was Sie bezüglich „assistance need“ benötigen?",
        "answers": [
          {
            "text": "I would like to arrange the assistance need.",
            "next": "detailA"
          },
          {
            "text": "I need to change something about the assistance need.",
            "next": "detailB"
          }
        ]
      },
      "detailA": {
        "bot": "What details can you provide about the boarding support?",
        "de": "Welche Einzelheiten können Sie zu „boarding support“ nennen?",
        "answers": [
          {
            "text": "The boarding support is already confirmed.",
            "next": "solutionA"
          },
          {
            "text": "I need advice about the boarding support.",
            "next": "solutionB"
          }
        ]
      },
      "detailB": {
        "bot": "What would you like to change about the boarding support?",
        "de": "Was möchten Sie bei „boarding support“ ändern?",
        "answers": [
          {
            "text": "I need a different option for the boarding support.",
            "next": "solutionB"
          },
          {
            "text": "The current boarding support is no longer suitable.",
            "next": "solutionA"
          }
        ]
      },
      "solutionA": {
        "bot": "We can proceed with the seat arrangement.",
        "de": "Wir können mit „seat arrangement“ fortfahren.",
        "answers": [
          {
            "text": "Please proceed with the seat arrangement.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the seat arrangement in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "solutionB": {
        "bot": "An alternative would be the seat arrangement.",
        "de": "Eine Alternative wäre „seat arrangement“.",
        "answers": [
          {
            "text": "That seat arrangement sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the seat arrangement with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How should we handle the arrival assistance?",
        "de": "Wie sollen wir mit „arrival assistance“ umgehen?",
        "answers": [
          {
            "text": "Please confirm the arrival assistance by email.",
            "next": "end"
          },
          {
            "text": "A written note about the arrival assistance would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you need any further information about the arrival assistance?",
        "de": "Benötigen Sie weitere Informationen zu „arrival assistance“?",
        "answers": [
          {
            "text": "No, the arrival assistance is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the arrival assistance once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. The arrangement has been completed.",
        "de": "Danke. Die Vereinbarung wurde abgeschlossen.",
        "answers": []
      }
    }
  },
  {
    "id": "branch155_train_bicycle",
    "topic": "Bahnhof",
    "title": "Fahrrad im Zug mitnehmen",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Could you tell me what you need regarding the bicycle reservation?",
        "de": "Könnten Sie sagen, was Sie bezüglich „bicycle reservation“ benötigen?",
        "answers": [
          {
            "text": "I would like to arrange the bicycle reservation.",
            "next": "detailA"
          },
          {
            "text": "I need to change something about the bicycle reservation.",
            "next": "detailB"
          }
        ]
      },
      "detailA": {
        "bot": "What details can you provide about the train connection?",
        "de": "Welche Einzelheiten können Sie zu „train connection“ nennen?",
        "answers": [
          {
            "text": "The train connection is already confirmed.",
            "next": "solutionA"
          },
          {
            "text": "I need advice about the train connection.",
            "next": "solutionB"
          }
        ]
      },
      "detailB": {
        "bot": "What would you like to change about the train connection?",
        "de": "Was möchten Sie bei „train connection“ ändern?",
        "answers": [
          {
            "text": "I need a different option for the train connection.",
            "next": "solutionB"
          },
          {
            "text": "The current train connection is no longer suitable.",
            "next": "solutionA"
          }
        ]
      },
      "solutionA": {
        "bot": "We can proceed with the storage area.",
        "de": "Wir können mit „storage area“ fortfahren.",
        "answers": [
          {
            "text": "Please proceed with the storage area.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the storage area in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "solutionB": {
        "bot": "An alternative would be the storage area.",
        "de": "Eine Alternative wäre „storage area“.",
        "answers": [
          {
            "text": "That storage area sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the storage area with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How should we handle the ticket confirmation?",
        "de": "Wie sollen wir mit „ticket confirmation“ umgehen?",
        "answers": [
          {
            "text": "Please confirm the ticket confirmation by email.",
            "next": "end"
          },
          {
            "text": "A written note about the ticket confirmation would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you need any further information about the ticket confirmation?",
        "de": "Benötigen Sie weitere Informationen zu „ticket confirmation“?",
        "answers": [
          {
            "text": "No, the ticket confirmation is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the ticket confirmation once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. The arrangement has been completed.",
        "de": "Danke. Die Vereinbarung wurde abgeschlossen.",
        "answers": []
      }
    }
  },
  {
    "id": "branch155_taxi_multiple_stops",
    "topic": "Taxi",
    "title": "Taxifahrt mit mehreren Stopps",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Could you tell me what you need regarding the first stop?",
        "de": "Könnten Sie sagen, was Sie bezüglich „first stop“ benötigen?",
        "answers": [
          {
            "text": "I would like to arrange the first stop.",
            "next": "detailA"
          },
          {
            "text": "I need to change something about the first stop.",
            "next": "detailB"
          }
        ]
      },
      "detailA": {
        "bot": "What details can you provide about the second destination?",
        "de": "Welche Einzelheiten können Sie zu „second destination“ nennen?",
        "answers": [
          {
            "text": "The second destination is already confirmed.",
            "next": "solutionA"
          },
          {
            "text": "I need advice about the second destination.",
            "next": "solutionB"
          }
        ]
      },
      "detailB": {
        "bot": "What would you like to change about the second destination?",
        "de": "Was möchten Sie bei „second destination“ ändern?",
        "answers": [
          {
            "text": "I need a different option for the second destination.",
            "next": "solutionB"
          },
          {
            "text": "The current second destination is no longer suitable.",
            "next": "solutionA"
          }
        ]
      },
      "solutionA": {
        "bot": "We can proceed with the waiting time.",
        "de": "Wir können mit „waiting time“ fortfahren.",
        "answers": [
          {
            "text": "Please proceed with the waiting time.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the waiting time in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "solutionB": {
        "bot": "An alternative would be the waiting time.",
        "de": "Eine Alternative wäre „waiting time“.",
        "answers": [
          {
            "text": "That waiting time sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the waiting time with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How should we handle the final fare?",
        "de": "Wie sollen wir mit „final fare“ umgehen?",
        "answers": [
          {
            "text": "Please confirm the final fare by email.",
            "next": "end"
          },
          {
            "text": "A written note about the final fare would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you need any further information about the final fare?",
        "de": "Benötigen Sie weitere Informationen zu „final fare“?",
        "answers": [
          {
            "text": "No, the final fare is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the final fare once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. The arrangement has been completed.",
        "de": "Danke. Die Vereinbarung wurde abgeschlossen.",
        "answers": []
      }
    }
  },
  {
    "id": "branch155_rental_cross_border",
    "topic": "Autovermietung",
    "title": "Grenzübertritt mit Mietwagen",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Could you tell me what you need regarding the destination country?",
        "de": "Könnten Sie sagen, was Sie bezüglich „destination country“ benötigen?",
        "answers": [
          {
            "text": "I would like to arrange the destination country.",
            "next": "detailA"
          },
          {
            "text": "I need to change something about the destination country.",
            "next": "detailB"
          }
        ]
      },
      "detailA": {
        "bot": "What details can you provide about the insurance validity?",
        "de": "Welche Einzelheiten können Sie zu „insurance validity“ nennen?",
        "answers": [
          {
            "text": "The insurance validity is already confirmed.",
            "next": "solutionA"
          },
          {
            "text": "I need advice about the insurance validity.",
            "next": "solutionB"
          }
        ]
      },
      "detailB": {
        "bot": "What would you like to change about the insurance validity?",
        "de": "Was möchten Sie bei „insurance validity“ ändern?",
        "answers": [
          {
            "text": "I need a different option for the insurance validity.",
            "next": "solutionB"
          },
          {
            "text": "The current insurance validity is no longer suitable.",
            "next": "solutionA"
          }
        ]
      },
      "solutionA": {
        "bot": "We can proceed with the additional documents.",
        "de": "Wir können mit „additional documents“ fortfahren.",
        "answers": [
          {
            "text": "Please proceed with the additional documents.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the additional documents in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "solutionB": {
        "bot": "An alternative would be the additional documents.",
        "de": "Eine Alternative wäre „additional documents“.",
        "answers": [
          {
            "text": "That additional documents sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the additional documents with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How should we handle the written permission?",
        "de": "Wie sollen wir mit „written permission“ umgehen?",
        "answers": [
          {
            "text": "Please confirm the written permission by email.",
            "next": "end"
          },
          {
            "text": "A written note about the written permission would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you need any further information about the written permission?",
        "de": "Benötigen Sie weitere Informationen zu „written permission“?",
        "answers": [
          {
            "text": "No, the written permission is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the written permission once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. The arrangement has been completed.",
        "de": "Danke. Die Vereinbarung wurde abgeschlossen.",
        "answers": []
      }
    }
  },
  {
    "id": "branch155_shopping_custom_order",
    "topic": "Einkaufen",
    "title": "Sonderbestellung",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Could you tell me what you need regarding the product specification?",
        "de": "Könnten Sie sagen, was Sie bezüglich „product specification“ benötigen?",
        "answers": [
          {
            "text": "I would like to arrange the product specification.",
            "next": "detailA"
          },
          {
            "text": "I need to change something about the product specification.",
            "next": "detailB"
          }
        ]
      },
      "detailA": {
        "bot": "What details can you provide about the available options?",
        "de": "Welche Einzelheiten können Sie zu „available options“ nennen?",
        "answers": [
          {
            "text": "The available options is already confirmed.",
            "next": "solutionA"
          },
          {
            "text": "I need advice about the available options.",
            "next": "solutionB"
          }
        ]
      },
      "detailB": {
        "bot": "What would you like to change about the available options?",
        "de": "Was möchten Sie bei „available options“ ändern?",
        "answers": [
          {
            "text": "I need a different option for the available options.",
            "next": "solutionB"
          },
          {
            "text": "The current available options is no longer suitable.",
            "next": "solutionA"
          }
        ]
      },
      "solutionA": {
        "bot": "We can proceed with the delivery estimate.",
        "de": "Wir können mit „delivery estimate“ fortfahren.",
        "answers": [
          {
            "text": "Please proceed with the delivery estimate.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the delivery estimate in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "solutionB": {
        "bot": "An alternative would be the delivery estimate.",
        "de": "Eine Alternative wäre „delivery estimate“.",
        "answers": [
          {
            "text": "That delivery estimate sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the delivery estimate with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How should we handle the deposit?",
        "de": "Wie sollen wir mit „deposit“ umgehen?",
        "answers": [
          {
            "text": "Please confirm the deposit by email.",
            "next": "end"
          },
          {
            "text": "A written note about the deposit would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you need any further information about the deposit?",
        "de": "Benötigen Sie weitere Informationen zu „deposit“?",
        "answers": [
          {
            "text": "No, the deposit is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the deposit once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. The arrangement has been completed.",
        "de": "Danke. Die Vereinbarung wurde abgeschlossen.",
        "answers": []
      }
    }
  },
  {
    "id": "branch155_doctor_chronic_condition",
    "topic": "Gesundheit",
    "title": "Chronische Beschwerden besprechen",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Could you tell me what you need regarding the current condition?",
        "de": "Könnten Sie sagen, was Sie bezüglich „current condition“ benötigen?",
        "answers": [
          {
            "text": "I would like to arrange the current condition.",
            "next": "detailA"
          },
          {
            "text": "I need to change something about the current condition.",
            "next": "detailB"
          }
        ]
      },
      "detailA": {
        "bot": "What details can you provide about the recent change?",
        "de": "Welche Einzelheiten können Sie zu „recent change“ nennen?",
        "answers": [
          {
            "text": "The recent change is already confirmed.",
            "next": "solutionA"
          },
          {
            "text": "I need advice about the recent change.",
            "next": "solutionB"
          }
        ]
      },
      "detailB": {
        "bot": "What would you like to change about the recent change?",
        "de": "Was möchten Sie bei „recent change“ ändern?",
        "answers": [
          {
            "text": "I need a different option for the recent change.",
            "next": "solutionB"
          },
          {
            "text": "The current recent change is no longer suitable.",
            "next": "solutionA"
          }
        ]
      },
      "solutionA": {
        "bot": "We can proceed with the treatment adjustment.",
        "de": "Wir können mit „treatment adjustment“ fortfahren.",
        "answers": [
          {
            "text": "Please proceed with the treatment adjustment.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the treatment adjustment in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "solutionB": {
        "bot": "An alternative would be the treatment adjustment.",
        "de": "Eine Alternative wäre „treatment adjustment“.",
        "answers": [
          {
            "text": "That treatment adjustment sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the treatment adjustment with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How should we handle the follow-up plan?",
        "de": "Wie sollen wir mit „follow-up plan“ umgehen?",
        "answers": [
          {
            "text": "Please confirm the follow-up plan by email.",
            "next": "end"
          },
          {
            "text": "A written note about the follow-up plan would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you need any further information about the follow-up plan?",
        "de": "Benötigen Sie weitere Informationen zu „follow-up plan“?",
        "answers": [
          {
            "text": "No, the follow-up plan is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the follow-up plan once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. The arrangement has been completed.",
        "de": "Danke. Die Vereinbarung wurde abgeschlossen.",
        "answers": []
      }
    }
  },
  {
    "id": "branch155_pharmacy_interaction",
    "topic": "Apotheke",
    "title": "Wechselwirkungen prüfen",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Could you tell me what you need regarding the current medicine?",
        "de": "Könnten Sie sagen, was Sie bezüglich „current medicine“ benötigen?",
        "answers": [
          {
            "text": "I would like to arrange the current medicine.",
            "next": "detailA"
          },
          {
            "text": "I need to change something about the current medicine.",
            "next": "detailB"
          }
        ]
      },
      "detailA": {
        "bot": "What details can you provide about the new prescription?",
        "de": "Welche Einzelheiten können Sie zu „new prescription“ nennen?",
        "answers": [
          {
            "text": "The new prescription is already confirmed.",
            "next": "solutionA"
          },
          {
            "text": "I need advice about the new prescription.",
            "next": "solutionB"
          }
        ]
      },
      "detailB": {
        "bot": "What would you like to change about the new prescription?",
        "de": "Was möchten Sie bei „new prescription“ ändern?",
        "answers": [
          {
            "text": "I need a different option for the new prescription.",
            "next": "solutionB"
          },
          {
            "text": "The current new prescription is no longer suitable.",
            "next": "solutionA"
          }
        ]
      },
      "solutionA": {
        "bot": "We can proceed with the possible interaction.",
        "de": "Wir können mit „possible interaction“ fortfahren.",
        "answers": [
          {
            "text": "Please proceed with the possible interaction.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the possible interaction in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "solutionB": {
        "bot": "An alternative would be the possible interaction.",
        "de": "Eine Alternative wäre „possible interaction“.",
        "answers": [
          {
            "text": "That possible interaction sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the possible interaction with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How should we handle the safe dosage?",
        "de": "Wie sollen wir mit „safe dosage“ umgehen?",
        "answers": [
          {
            "text": "Please confirm the safe dosage by email.",
            "next": "end"
          },
          {
            "text": "A written note about the safe dosage would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you need any further information about the safe dosage?",
        "de": "Benötigen Sie weitere Informationen zu „safe dosage“?",
        "answers": [
          {
            "text": "No, the safe dosage is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the safe dosage once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. The arrangement has been completed.",
        "de": "Danke. Die Vereinbarung wurde abgeschlossen.",
        "answers": []
      }
    }
  },
  {
    "id": "branch155_work_budget_review",
    "topic": "Beruf",
    "title": "Budget überprüfen",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Could you tell me what you need regarding the current spend?",
        "de": "Könnten Sie sagen, was Sie bezüglich „current spend“ benötigen?",
        "answers": [
          {
            "text": "I would like to arrange the current spend.",
            "next": "detailA"
          },
          {
            "text": "I need to change something about the current spend.",
            "next": "detailB"
          }
        ]
      },
      "detailA": {
        "bot": "What details can you provide about the forecast variance?",
        "de": "Welche Einzelheiten können Sie zu „forecast variance“ nennen?",
        "answers": [
          {
            "text": "The forecast variance is already confirmed.",
            "next": "solutionA"
          },
          {
            "text": "I need advice about the forecast variance.",
            "next": "solutionB"
          }
        ]
      },
      "detailB": {
        "bot": "What would you like to change about the forecast variance?",
        "de": "Was möchten Sie bei „forecast variance“ ändern?",
        "answers": [
          {
            "text": "I need a different option for the forecast variance.",
            "next": "solutionB"
          },
          {
            "text": "The current forecast variance is no longer suitable.",
            "next": "solutionA"
          }
        ]
      },
      "solutionA": {
        "bot": "We can proceed with the cost-saving option.",
        "de": "Wir können mit „cost-saving option“ fortfahren.",
        "answers": [
          {
            "text": "Please proceed with the cost-saving option.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the cost-saving option in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "solutionB": {
        "bot": "An alternative would be the cost-saving option.",
        "de": "Eine Alternative wäre „cost-saving option“.",
        "answers": [
          {
            "text": "That cost-saving option sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the cost-saving option with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How should we handle the approval?",
        "de": "Wie sollen wir mit „approval“ umgehen?",
        "answers": [
          {
            "text": "Please confirm the approval by email.",
            "next": "end"
          },
          {
            "text": "A written note about the approval would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you need any further information about the approval?",
        "de": "Benötigen Sie weitere Informationen zu „approval“?",
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
        "bot": "Thank you. The arrangement has been completed.",
        "de": "Danke. Die Vereinbarung wurde abgeschlossen.",
        "answers": []
      }
    }
  },
  {
    "id": "branch155_phone_service_booking",
    "topic": "Telefon",
    "title": "Servicetermin buchen",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Could you tell me what you need regarding the service type?",
        "de": "Könnten Sie sagen, was Sie bezüglich „service type“ benötigen?",
        "answers": [
          {
            "text": "I would like to arrange the service type.",
            "next": "detailA"
          },
          {
            "text": "I need to change something about the service type.",
            "next": "detailB"
          }
        ]
      },
      "detailA": {
        "bot": "What details can you provide about the available date?",
        "de": "Welche Einzelheiten können Sie zu „available date“ nennen?",
        "answers": [
          {
            "text": "The available date is already confirmed.",
            "next": "solutionA"
          },
          {
            "text": "I need advice about the available date.",
            "next": "solutionB"
          }
        ]
      },
      "detailB": {
        "bot": "What would you like to change about the available date?",
        "de": "Was möchten Sie bei „available date“ ändern?",
        "answers": [
          {
            "text": "I need a different option for the available date.",
            "next": "solutionB"
          },
          {
            "text": "The current available date is no longer suitable.",
            "next": "solutionA"
          }
        ]
      },
      "solutionA": {
        "bot": "We can proceed with the arrival window.",
        "de": "Wir können mit „arrival window“ fortfahren.",
        "answers": [
          {
            "text": "Please proceed with the arrival window.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the arrival window in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "solutionB": {
        "bot": "An alternative would be the arrival window.",
        "de": "Eine Alternative wäre „arrival window“.",
        "answers": [
          {
            "text": "That arrival window sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the arrival window with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How should we handle the confirmation?",
        "de": "Wie sollen wir mit „confirmation“ umgehen?",
        "answers": [
          {
            "text": "Please confirm the confirmation by email.",
            "next": "end"
          },
          {
            "text": "A written note about the confirmation would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you need any further information about the confirmation?",
        "de": "Benötigen Sie weitere Informationen zu „confirmation“?",
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
        "bot": "Thank you. The arrangement has been completed.",
        "de": "Danke. Die Vereinbarung wurde abgeschlossen.",
        "answers": []
      }
    }
  },
  {
    "id": "branch155_bank_savings",
    "topic": "Bank",
    "title": "Sparkonto eröffnen",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Could you tell me what you need regarding the savings goal?",
        "de": "Könnten Sie sagen, was Sie bezüglich „savings goal“ benötigen?",
        "answers": [
          {
            "text": "I would like to arrange the savings goal.",
            "next": "detailA"
          },
          {
            "text": "I need to change something about the savings goal.",
            "next": "detailB"
          }
        ]
      },
      "detailA": {
        "bot": "What details can you provide about the interest rate?",
        "de": "Welche Einzelheiten können Sie zu „interest rate“ nennen?",
        "answers": [
          {
            "text": "The interest rate is already confirmed.",
            "next": "solutionA"
          },
          {
            "text": "I need advice about the interest rate.",
            "next": "solutionB"
          }
        ]
      },
      "detailB": {
        "bot": "What would you like to change about the interest rate?",
        "de": "Was möchten Sie bei „interest rate“ ändern?",
        "answers": [
          {
            "text": "I need a different option for the interest rate.",
            "next": "solutionB"
          },
          {
            "text": "The current interest rate is no longer suitable.",
            "next": "solutionA"
          }
        ]
      },
      "solutionA": {
        "bot": "We can proceed with the access conditions.",
        "de": "Wir können mit „access conditions“ fortfahren.",
        "answers": [
          {
            "text": "Please proceed with the access conditions.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the access conditions in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "solutionB": {
        "bot": "An alternative would be the access conditions.",
        "de": "Eine Alternative wäre „access conditions“.",
        "answers": [
          {
            "text": "That access conditions sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the access conditions with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How should we handle the account opening?",
        "de": "Wie sollen wir mit „account opening“ umgehen?",
        "answers": [
          {
            "text": "Please confirm the account opening by email.",
            "next": "end"
          },
          {
            "text": "A written note about the account opening would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you need any further information about the account opening?",
        "de": "Benötigen Sie weitere Informationen zu „account opening“?",
        "answers": [
          {
            "text": "No, the account opening is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the account opening once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. The arrangement has been completed.",
        "de": "Danke. Die Vereinbarung wurde abgeschlossen.",
        "answers": []
      }
    }
  },
  {
    "id": "branch155_post_redelivery",
    "topic": "Post",
    "title": "Erneute Zustellung",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Could you tell me what you need regarding the missed delivery?",
        "de": "Könnten Sie sagen, was Sie bezüglich „missed delivery“ benötigen?",
        "answers": [
          {
            "text": "I would like to arrange the missed delivery.",
            "next": "detailA"
          },
          {
            "text": "I need to change something about the missed delivery.",
            "next": "detailB"
          }
        ]
      },
      "detailA": {
        "bot": "What details can you provide about the preferred date?",
        "de": "Welche Einzelheiten können Sie zu „preferred date“ nennen?",
        "answers": [
          {
            "text": "The preferred date is already confirmed.",
            "next": "solutionA"
          },
          {
            "text": "I need advice about the preferred date.",
            "next": "solutionB"
          }
        ]
      },
      "detailB": {
        "bot": "What would you like to change about the preferred date?",
        "de": "Was möchten Sie bei „preferred date“ ändern?",
        "answers": [
          {
            "text": "I need a different option for the preferred date.",
            "next": "solutionB"
          },
          {
            "text": "The current preferred date is no longer suitable.",
            "next": "solutionA"
          }
        ]
      },
      "solutionA": {
        "bot": "We can proceed with the safe place.",
        "de": "Wir können mit „safe place“ fortfahren.",
        "answers": [
          {
            "text": "Please proceed with the safe place.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the safe place in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "solutionB": {
        "bot": "An alternative would be the safe place.",
        "de": "Eine Alternative wäre „safe place“.",
        "answers": [
          {
            "text": "That safe place sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the safe place with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How should we handle the confirmation?",
        "de": "Wie sollen wir mit „confirmation“ umgehen?",
        "answers": [
          {
            "text": "Please confirm the confirmation by email.",
            "next": "end"
          },
          {
            "text": "A written note about the confirmation would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you need any further information about the confirmation?",
        "de": "Benötigen Sie weitere Informationen zu „confirmation“?",
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
        "bot": "Thank you. The arrangement has been completed.",
        "de": "Danke. Die Vereinbarung wurde abgeschlossen.",
        "answers": []
      }
    }
  },
  {
    "id": "branch155_museum_research_visit",
    "topic": "Museum",
    "title": "Forschungsbesuch",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Could you tell me what you need regarding the research topic?",
        "de": "Könnten Sie sagen, was Sie bezüglich „research topic“ benötigen?",
        "answers": [
          {
            "text": "I would like to arrange the research topic.",
            "next": "detailA"
          },
          {
            "text": "I need to change something about the research topic.",
            "next": "detailB"
          }
        ]
      },
      "detailA": {
        "bot": "What details can you provide about the archive access?",
        "de": "Welche Einzelheiten können Sie zu „archive access“ nennen?",
        "answers": [
          {
            "text": "The archive access is already confirmed.",
            "next": "solutionA"
          },
          {
            "text": "I need advice about the archive access.",
            "next": "solutionB"
          }
        ]
      },
      "detailB": {
        "bot": "What would you like to change about the archive access?",
        "de": "Was möchten Sie bei „archive access“ ändern?",
        "answers": [
          {
            "text": "I need a different option for the archive access.",
            "next": "solutionB"
          },
          {
            "text": "The current archive access is no longer suitable.",
            "next": "solutionA"
          }
        ]
      },
      "solutionA": {
        "bot": "We can proceed with the appointment.",
        "de": "Wir können mit „appointment“ fortfahren.",
        "answers": [
          {
            "text": "Please proceed with the appointment.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the appointment in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "solutionB": {
        "bot": "An alternative would be the appointment.",
        "de": "Eine Alternative wäre „appointment“.",
        "answers": [
          {
            "text": "That appointment sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the appointment with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How should we handle the special permission?",
        "de": "Wie sollen wir mit „special permission“ umgehen?",
        "answers": [
          {
            "text": "Please confirm the special permission by email.",
            "next": "end"
          },
          {
            "text": "A written note about the special permission would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you need any further information about the special permission?",
        "de": "Benötigen Sie weitere Informationen zu „special permission“?",
        "answers": [
          {
            "text": "No, the special permission is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the special permission once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. The arrangement has been completed.",
        "de": "Danke. Die Vereinbarung wurde abgeschlossen.",
        "answers": []
      }
    }
  },
  {
    "id": "branch155_camping_group_booking",
    "topic": "Camping",
    "title": "Gruppenbuchung",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Could you tell me what you need regarding the group size?",
        "de": "Könnten Sie sagen, was Sie bezüglich „group size“ benötigen?",
        "answers": [
          {
            "text": "I would like to arrange the group size.",
            "next": "detailA"
          },
          {
            "text": "I need to change something about the group size.",
            "next": "detailB"
          }
        ]
      },
      "detailA": {
        "bot": "What details can you provide about the pitch number?",
        "de": "Welche Einzelheiten können Sie zu „pitch number“ nennen?",
        "answers": [
          {
            "text": "The pitch number is already confirmed.",
            "next": "solutionA"
          },
          {
            "text": "I need advice about the pitch number.",
            "next": "solutionB"
          }
        ]
      },
      "detailB": {
        "bot": "What would you like to change about the pitch number?",
        "de": "Was möchten Sie bei „pitch number“ ändern?",
        "answers": [
          {
            "text": "I need a different option for the pitch number.",
            "next": "solutionB"
          },
          {
            "text": "The current pitch number is no longer suitable.",
            "next": "solutionA"
          }
        ]
      },
      "solutionA": {
        "bot": "We can proceed with the shared facilities.",
        "de": "Wir können mit „shared facilities“ fortfahren.",
        "answers": [
          {
            "text": "Please proceed with the shared facilities.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the shared facilities in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "solutionB": {
        "bot": "An alternative would be the shared facilities.",
        "de": "Eine Alternative wäre „shared facilities“.",
        "answers": [
          {
            "text": "That shared facilities sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the shared facilities with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How should we handle the deposit?",
        "de": "Wie sollen wir mit „deposit“ umgehen?",
        "answers": [
          {
            "text": "Please confirm the deposit by email.",
            "next": "end"
          },
          {
            "text": "A written note about the deposit would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you need any further information about the deposit?",
        "de": "Benötigen Sie weitere Informationen zu „deposit“?",
        "answers": [
          {
            "text": "No, the deposit is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the deposit once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. The arrangement has been completed.",
        "de": "Danke. Die Vereinbarung wurde abgeschlossen.",
        "answers": []
      }
    }
  },
  {
    "id": "branch155_university_support",
    "topic": "Bildung",
    "title": "Lernunterstützung organisieren",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Could you tell me what you need regarding the difficulty area?",
        "de": "Könnten Sie sagen, was Sie bezüglich „difficulty area“ benötigen?",
        "answers": [
          {
            "text": "I would like to arrange the difficulty area.",
            "next": "detailA"
          },
          {
            "text": "I need to change something about the difficulty area.",
            "next": "detailB"
          }
        ]
      },
      "detailA": {
        "bot": "What details can you provide about the support service?",
        "de": "Welche Einzelheiten können Sie zu „support service“ nennen?",
        "answers": [
          {
            "text": "The support service is already confirmed.",
            "next": "solutionA"
          },
          {
            "text": "I need advice about the support service.",
            "next": "solutionB"
          }
        ]
      },
      "detailB": {
        "bot": "What would you like to change about the support service?",
        "de": "Was möchten Sie bei „support service“ ändern?",
        "answers": [
          {
            "text": "I need a different option for the support service.",
            "next": "solutionB"
          },
          {
            "text": "The current support service is no longer suitable.",
            "next": "solutionA"
          }
        ]
      },
      "solutionA": {
        "bot": "We can proceed with the appointment time.",
        "de": "Wir können mit „appointment time“ fortfahren.",
        "answers": [
          {
            "text": "Please proceed with the appointment time.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the appointment time in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "solutionB": {
        "bot": "An alternative would be the appointment time.",
        "de": "Eine Alternative wäre „appointment time“.",
        "answers": [
          {
            "text": "That appointment time sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the appointment time with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How should we handle the study plan?",
        "de": "Wie sollen wir mit „study plan“ umgehen?",
        "answers": [
          {
            "text": "Please confirm the study plan by email.",
            "next": "end"
          },
          {
            "text": "A written note about the study plan would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you need any further information about the study plan?",
        "de": "Benötigen Sie weitere Informationen zu „study plan“?",
        "answers": [
          {
            "text": "No, the study plan is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the study plan once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. The arrangement has been completed.",
        "de": "Danke. Die Vereinbarung wurde abgeschlossen.",
        "answers": []
      }
    }
  },
  {
    "id": "branch155_sport_membership_pause",
    "topic": "Sport",
    "title": "Mitgliedschaft pausieren",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Could you tell me what you need regarding the reason for pause?",
        "de": "Könnten Sie sagen, was Sie bezüglich „reason for pause“ benötigen?",
        "answers": [
          {
            "text": "I would like to arrange the reason for pause.",
            "next": "detailA"
          },
          {
            "text": "I need to change something about the reason for pause.",
            "next": "detailB"
          }
        ]
      },
      "detailA": {
        "bot": "What details can you provide about the pause duration?",
        "de": "Welche Einzelheiten können Sie zu „pause duration“ nennen?",
        "answers": [
          {
            "text": "The pause duration is already confirmed.",
            "next": "solutionA"
          },
          {
            "text": "I need advice about the pause duration.",
            "next": "solutionB"
          }
        ]
      },
      "detailB": {
        "bot": "What would you like to change about the pause duration?",
        "de": "Was möchten Sie bei „pause duration“ ändern?",
        "answers": [
          {
            "text": "I need a different option for the pause duration.",
            "next": "solutionB"
          },
          {
            "text": "The current pause duration is no longer suitable.",
            "next": "solutionA"
          }
        ]
      },
      "solutionA": {
        "bot": "We can proceed with the monthly charge.",
        "de": "Wir können mit „monthly charge“ fortfahren.",
        "answers": [
          {
            "text": "Please proceed with the monthly charge.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the monthly charge in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "solutionB": {
        "bot": "An alternative would be the monthly charge.",
        "de": "Eine Alternative wäre „monthly charge“.",
        "answers": [
          {
            "text": "That monthly charge sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the monthly charge with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How should we handle the restart date?",
        "de": "Wie sollen wir mit „restart date“ umgehen?",
        "answers": [
          {
            "text": "Please confirm the restart date by email.",
            "next": "end"
          },
          {
            "text": "A written note about the restart date would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you need any further information about the restart date?",
        "de": "Benötigen Sie weitere Informationen zu „restart date“?",
        "answers": [
          {
            "text": "No, the restart date is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the restart date once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. The arrangement has been completed.",
        "de": "Danke. Die Vereinbarung wurde abgeschlossen.",
        "answers": []
      }
    }
  },
  {
    "id": "branch155_neighbour_shared_cost",
    "topic": "Wohnen",
    "title": "Gemeinsame Kosten klären",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Could you tell me what you need regarding the repair cost?",
        "de": "Könnten Sie sagen, was Sie bezüglich „repair cost“ benötigen?",
        "answers": [
          {
            "text": "I would like to arrange the repair cost.",
            "next": "detailA"
          },
          {
            "text": "I need to change something about the repair cost.",
            "next": "detailB"
          }
        ]
      },
      "detailA": {
        "bot": "What details can you provide about the share amount?",
        "de": "Welche Einzelheiten können Sie zu „share amount“ nennen?",
        "answers": [
          {
            "text": "The share amount is already confirmed.",
            "next": "solutionA"
          },
          {
            "text": "I need advice about the share amount.",
            "next": "solutionB"
          }
        ]
      },
      "detailB": {
        "bot": "What would you like to change about the share amount?",
        "de": "Was möchten Sie bei „share amount“ ändern?",
        "answers": [
          {
            "text": "I need a different option for the share amount.",
            "next": "solutionB"
          },
          {
            "text": "The current share amount is no longer suitable.",
            "next": "solutionA"
          }
        ]
      },
      "solutionA": {
        "bot": "We can proceed with the payment method.",
        "de": "Wir können mit „payment method“ fortfahren.",
        "answers": [
          {
            "text": "Please proceed with the payment method.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the payment method in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "solutionB": {
        "bot": "An alternative would be the payment method.",
        "de": "Eine Alternative wäre „payment method“.",
        "answers": [
          {
            "text": "That payment method sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the payment method with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How should we handle the written record?",
        "de": "Wie sollen wir mit „written record“ umgehen?",
        "answers": [
          {
            "text": "Please confirm the written record by email.",
            "next": "end"
          },
          {
            "text": "A written note about the written record would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you need any further information about the written record?",
        "de": "Benötigen Sie weitere Informationen zu „written record“?",
        "answers": [
          {
            "text": "No, the written record is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the written record once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. The arrangement has been completed.",
        "de": "Danke. Die Vereinbarung wurde abgeschlossen.",
        "answers": []
      }
    }
  },
  {
    "id": "branch155_internet_outage",
    "topic": "Internet",
    "title": "Internetausfall melden",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Could you tell me what you need regarding the outage start?",
        "de": "Könnten Sie sagen, was Sie bezüglich „outage start“ benötigen?",
        "answers": [
          {
            "text": "I would like to arrange the outage start.",
            "next": "detailA"
          },
          {
            "text": "I need to change something about the outage start.",
            "next": "detailB"
          }
        ]
      },
      "detailA": {
        "bot": "What details can you provide about the affected devices?",
        "de": "Welche Einzelheiten können Sie zu „affected devices“ nennen?",
        "answers": [
          {
            "text": "The affected devices is already confirmed.",
            "next": "solutionA"
          },
          {
            "text": "I need advice about the affected devices.",
            "next": "solutionB"
          }
        ]
      },
      "detailB": {
        "bot": "What would you like to change about the affected devices?",
        "de": "Was möchten Sie bei „affected devices“ ändern?",
        "answers": [
          {
            "text": "I need a different option for the affected devices.",
            "next": "solutionB"
          },
          {
            "text": "The current affected devices is no longer suitable.",
            "next": "solutionA"
          }
        ]
      },
      "solutionA": {
        "bot": "We can proceed with the engineer visit.",
        "de": "Wir können mit „engineer visit“ fortfahren.",
        "answers": [
          {
            "text": "Please proceed with the engineer visit.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the engineer visit in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "solutionB": {
        "bot": "An alternative would be the engineer visit.",
        "de": "Eine Alternative wäre „engineer visit“.",
        "answers": [
          {
            "text": "That engineer visit sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the engineer visit with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How should we handle the service credit?",
        "de": "Wie sollen wir mit „service credit“ umgehen?",
        "answers": [
          {
            "text": "Please confirm the service credit by email.",
            "next": "end"
          },
          {
            "text": "A written note about the service credit would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you need any further information about the service credit?",
        "de": "Benötigen Sie weitere Informationen zu „service credit“?",
        "answers": [
          {
            "text": "No, the service credit is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the service credit once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. The arrangement has been completed.",
        "de": "Danke. Die Vereinbarung wurde abgeschlossen.",
        "answers": []
      }
    }
  },
  {
    "id": "branch155_environment_transport",
    "topic": "Umwelt",
    "title": "Nachhaltige Mobilität planen",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Could you tell me what you need regarding the current traffic issue?",
        "de": "Könnten Sie sagen, was Sie bezüglich „current traffic issue“ benötigen?",
        "answers": [
          {
            "text": "I would like to arrange the current traffic issue.",
            "next": "detailA"
          },
          {
            "text": "I need to change something about the current traffic issue.",
            "next": "detailB"
          }
        ]
      },
      "detailA": {
        "bot": "What details can you provide about the public transport option?",
        "de": "Welche Einzelheiten können Sie zu „public transport option“ nennen?",
        "answers": [
          {
            "text": "The public transport option is already confirmed.",
            "next": "solutionA"
          },
          {
            "text": "I need advice about the public transport option.",
            "next": "solutionB"
          }
        ]
      },
      "detailB": {
        "bot": "What would you like to change about the public transport option?",
        "de": "Was möchten Sie bei „public transport option“ ändern?",
        "answers": [
          {
            "text": "I need a different option for the public transport option.",
            "next": "solutionB"
          },
          {
            "text": "The current public transport option is no longer suitable.",
            "next": "solutionA"
          }
        ]
      },
      "solutionA": {
        "bot": "We can proceed with the cycling route.",
        "de": "Wir können mit „cycling route“ fortfahren.",
        "answers": [
          {
            "text": "Please proceed with the cycling route.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the cycling route in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "solutionB": {
        "bot": "An alternative would be the cycling route.",
        "de": "Eine Alternative wäre „cycling route“.",
        "answers": [
          {
            "text": "That cycling route sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the cycling route with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How should we handle the implementation date?",
        "de": "Wie sollen wir mit „implementation date“ umgehen?",
        "answers": [
          {
            "text": "Please confirm the implementation date by email.",
            "next": "end"
          },
          {
            "text": "A written note about the implementation date would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you need any further information about the implementation date?",
        "de": "Benötigen Sie weitere Informationen zu „implementation date“?",
        "answers": [
          {
            "text": "No, the implementation date is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the implementation date once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. The arrangement has been completed.",
        "de": "Danke. Die Vereinbarung wurde abgeschlossen.",
        "answers": []
      }
    }
  },
  {
    "id": "branch155_smalltalk_culture",
    "topic": "Small Talk",
    "title": "Über Kultur sprechen",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Could you tell me what you need regarding the recent film?",
        "de": "Könnten Sie sagen, was Sie bezüglich „recent film“ benötigen?",
        "answers": [
          {
            "text": "I would like to arrange the recent film.",
            "next": "detailA"
          },
          {
            "text": "I need to change something about the recent film.",
            "next": "detailB"
          }
        ]
      },
      "detailA": {
        "bot": "What details can you provide about the favourite music?",
        "de": "Welche Einzelheiten können Sie zu „favourite music“ nennen?",
        "answers": [
          {
            "text": "The favourite music is already confirmed.",
            "next": "solutionA"
          },
          {
            "text": "I need advice about the favourite music.",
            "next": "solutionB"
          }
        ]
      },
      "detailB": {
        "bot": "What would you like to change about the favourite music?",
        "de": "Was möchten Sie bei „favourite music“ ändern?",
        "answers": [
          {
            "text": "I need a different option for the favourite music.",
            "next": "solutionB"
          },
          {
            "text": "The current favourite music is no longer suitable.",
            "next": "solutionA"
          }
        ]
      },
      "solutionA": {
        "bot": "We can proceed with the local event.",
        "de": "Wir können mit „local event“ fortfahren.",
        "answers": [
          {
            "text": "Please proceed with the local event.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the local event in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "solutionB": {
        "bot": "An alternative would be the local event.",
        "de": "Eine Alternative wäre „local event“.",
        "answers": [
          {
            "text": "That local event sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the local event with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How should we handle the recommendation?",
        "de": "Wie sollen wir mit „recommendation“ umgehen?",
        "answers": [
          {
            "text": "Please confirm the recommendation by email.",
            "next": "end"
          },
          {
            "text": "A written note about the recommendation would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you need any further information about the recommendation?",
        "de": "Benötigen Sie weitere Informationen zu „recommendation“?",
        "answers": [
          {
            "text": "No, the recommendation is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the recommendation once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. The arrangement has been completed.",
        "de": "Danke. Die Vereinbarung wurde abgeschlossen.",
        "answers": []
      }
    }
  },
  {
    "id": "branch155_language_writing",
    "topic": "Englischlernen",
    "title": "Schreiben verbessern",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Could you tell me what you need regarding the text purpose?",
        "de": "Könnten Sie sagen, was Sie bezüglich „text purpose“ benötigen?",
        "answers": [
          {
            "text": "I would like to arrange the text purpose.",
            "next": "detailA"
          },
          {
            "text": "I need to change something about the text purpose.",
            "next": "detailB"
          }
        ]
      },
      "detailA": {
        "bot": "What details can you provide about the grammar issue?",
        "de": "Welche Einzelheiten können Sie zu „grammar issue“ nennen?",
        "answers": [
          {
            "text": "The grammar issue is already confirmed.",
            "next": "solutionA"
          },
          {
            "text": "I need advice about the grammar issue.",
            "next": "solutionB"
          }
        ]
      },
      "detailB": {
        "bot": "What would you like to change about the grammar issue?",
        "de": "Was möchten Sie bei „grammar issue“ ändern?",
        "answers": [
          {
            "text": "I need a different option for the grammar issue.",
            "next": "solutionB"
          },
          {
            "text": "The current grammar issue is no longer suitable.",
            "next": "solutionA"
          }
        ]
      },
      "solutionA": {
        "bot": "We can proceed with the structure advice.",
        "de": "Wir können mit „structure advice“ fortfahren.",
        "answers": [
          {
            "text": "Please proceed with the structure advice.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the structure advice in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "solutionB": {
        "bot": "An alternative would be the structure advice.",
        "de": "Eine Alternative wäre „structure advice“.",
        "answers": [
          {
            "text": "That structure advice sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the structure advice with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How should we handle the final correction?",
        "de": "Wie sollen wir mit „final correction“ umgehen?",
        "answers": [
          {
            "text": "Please confirm the final correction by email.",
            "next": "end"
          },
          {
            "text": "A written note about the final correction would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you need any further information about the final correction?",
        "de": "Benötigen Sie weitere Informationen zu „final correction“?",
        "answers": [
          {
            "text": "No, the final correction is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the final correction once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. The arrangement has been completed.",
        "de": "Danke. Die Vereinbarung wurde abgeschlossen.",
        "answers": []
      }
    }
  },
  {
    "id": "branch155_business_contract",
    "topic": "Beruf",
    "title": "Vertragsdetails verhandeln",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Could you tell me what you need regarding the contract term?",
        "de": "Könnten Sie sagen, was Sie bezüglich „contract term“ benötigen?",
        "answers": [
          {
            "text": "I would like to arrange the contract term.",
            "next": "detailA"
          },
          {
            "text": "I need to change something about the contract term.",
            "next": "detailB"
          }
        ]
      },
      "detailA": {
        "bot": "What details can you provide about the service level?",
        "de": "Welche Einzelheiten können Sie zu „service level“ nennen?",
        "answers": [
          {
            "text": "The service level is already confirmed.",
            "next": "solutionA"
          },
          {
            "text": "I need advice about the service level.",
            "next": "solutionB"
          }
        ]
      },
      "detailB": {
        "bot": "What would you like to change about the service level?",
        "de": "Was möchten Sie bei „service level“ ändern?",
        "answers": [
          {
            "text": "I need a different option for the service level.",
            "next": "solutionB"
          },
          {
            "text": "The current service level is no longer suitable.",
            "next": "solutionA"
          }
        ]
      },
      "solutionA": {
        "bot": "We can proceed with the price adjustment.",
        "de": "Wir können mit „price adjustment“ fortfahren.",
        "answers": [
          {
            "text": "Please proceed with the price adjustment.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the price adjustment in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "solutionB": {
        "bot": "An alternative would be the price adjustment.",
        "de": "Eine Alternative wäre „price adjustment“.",
        "answers": [
          {
            "text": "That price adjustment sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the price adjustment with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How should we handle the signature date?",
        "de": "Wie sollen wir mit „signature date“ umgehen?",
        "answers": [
          {
            "text": "Please confirm the signature date by email.",
            "next": "end"
          },
          {
            "text": "A written note about the signature date would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you need any further information about the signature date?",
        "de": "Benötigen Sie weitere Informationen zu „signature date“?",
        "answers": [
          {
            "text": "No, the signature date is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the signature date once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. The arrangement has been completed.",
        "de": "Danke. Die Vereinbarung wurde abgeschlossen.",
        "answers": []
      }
    }
  },
  {
    "id": "branch155_medical_recovery",
    "topic": "Gesundheit",
    "title": "Genesungsverlauf besprechen",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Could you tell me what you need regarding the current mobility?",
        "de": "Könnten Sie sagen, was Sie bezüglich „current mobility“ benötigen?",
        "answers": [
          {
            "text": "I would like to arrange the current mobility.",
            "next": "detailA"
          },
          {
            "text": "I need to change something about the current mobility.",
            "next": "detailB"
          }
        ]
      },
      "detailA": {
        "bot": "What details can you provide about the pain level?",
        "de": "Welche Einzelheiten können Sie zu „pain level“ nennen?",
        "answers": [
          {
            "text": "The pain level is already confirmed.",
            "next": "solutionA"
          },
          {
            "text": "I need advice about the pain level.",
            "next": "solutionB"
          }
        ]
      },
      "detailB": {
        "bot": "What would you like to change about the pain level?",
        "de": "Was möchten Sie bei „pain level“ ändern?",
        "answers": [
          {
            "text": "I need a different option for the pain level.",
            "next": "solutionB"
          },
          {
            "text": "The current pain level is no longer suitable.",
            "next": "solutionA"
          }
        ]
      },
      "solutionA": {
        "bot": "We can proceed with the exercise plan.",
        "de": "Wir können mit „exercise plan“ fortfahren.",
        "answers": [
          {
            "text": "Please proceed with the exercise plan.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the exercise plan in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "solutionB": {
        "bot": "An alternative would be the exercise plan.",
        "de": "Eine Alternative wäre „exercise plan“.",
        "answers": [
          {
            "text": "That exercise plan sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the exercise plan with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How should we handle the review date?",
        "de": "Wie sollen wir mit „review date“ umgehen?",
        "answers": [
          {
            "text": "Please confirm the review date by email.",
            "next": "end"
          },
          {
            "text": "A written note about the review date would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you need any further information about the review date?",
        "de": "Benötigen Sie weitere Informationen zu „review date“?",
        "answers": [
          {
            "text": "No, the review date is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the review date once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. The arrangement has been completed.",
        "de": "Danke. Die Vereinbarung wurde abgeschlossen.",
        "answers": []
      }
    }
  },
  {
    "id": "branch155_event_schedule",
    "topic": "Freizeit",
    "title": "Veranstaltungsablauf planen",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Could you tell me what you need regarding the start time?",
        "de": "Könnten Sie sagen, was Sie bezüglich „start time“ benötigen?",
        "answers": [
          {
            "text": "I would like to arrange the start time.",
            "next": "detailA"
          },
          {
            "text": "I need to change something about the start time.",
            "next": "detailB"
          }
        ]
      },
      "detailA": {
        "bot": "What details can you provide about the main activity?",
        "de": "Welche Einzelheiten können Sie zu „main activity“ nennen?",
        "answers": [
          {
            "text": "The main activity is already confirmed.",
            "next": "solutionA"
          },
          {
            "text": "I need advice about the main activity.",
            "next": "solutionB"
          }
        ]
      },
      "detailB": {
        "bot": "What would you like to change about the main activity?",
        "de": "Was möchten Sie bei „main activity“ ändern?",
        "answers": [
          {
            "text": "I need a different option for the main activity.",
            "next": "solutionB"
          },
          {
            "text": "The current main activity is no longer suitable.",
            "next": "solutionA"
          }
        ]
      },
      "solutionA": {
        "bot": "We can proceed with the break schedule.",
        "de": "Wir können mit „break schedule“ fortfahren.",
        "answers": [
          {
            "text": "Please proceed with the break schedule.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the break schedule in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "solutionB": {
        "bot": "An alternative would be the break schedule.",
        "de": "Eine Alternative wäre „break schedule“.",
        "answers": [
          {
            "text": "That break schedule sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the break schedule with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How should we handle the closing time?",
        "de": "Wie sollen wir mit „closing time“ umgehen?",
        "answers": [
          {
            "text": "Please confirm the closing time by email.",
            "next": "end"
          },
          {
            "text": "A written note about the closing time would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you need any further information about the closing time?",
        "de": "Benötigen Sie weitere Informationen zu „closing time“?",
        "answers": [
          {
            "text": "No, the closing time is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the closing time once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. The arrangement has been completed.",
        "de": "Danke. Die Vereinbarung wurde abgeschlossen.",
        "answers": []
      }
    }
  }
];
ES_BRANCHING_SCENARIOS_151.push(...ES_BRANCHING_SCENARIOS_155);
