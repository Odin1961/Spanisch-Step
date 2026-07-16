const ES_BRANCHING_SCENARIOS_158 = [
  {
    "id": "branch158_restaurant_business_lunch",
    "topic": "Restaurant",
    "title": "Geschäftsessen organisieren",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Could you explain what you need regarding the guest list?",
        "de": "Könnten Sie erklären, was Sie bezüglich „guest list“ benötigen?",
        "answers": [
          {
            "text": "I would like to arrange the guest list.",
            "next": "detailsA"
          },
          {
            "text": "There is a problem with the guest list.",
            "next": "detailsB"
          }
        ]
      },
      "detailsA": {
        "bot": "What information can you provide about the table location?",
        "de": "Welche Informationen können Sie zu „table location“ geben?",
        "answers": [
          {
            "text": "The table location is already confirmed.",
            "next": "optionA"
          },
          {
            "text": "I still need advice about the table location.",
            "next": "optionB"
          }
        ]
      },
      "detailsB": {
        "bot": "What exactly needs to change about the table location?",
        "de": "Was genau muss bei „table location“ geändert werden?",
        "answers": [
          {
            "text": "I need a different option for the table location.",
            "next": "optionB"
          },
          {
            "text": "The current table location is no longer suitable.",
            "next": "optionA"
          }
        ]
      },
      "optionA": {
        "bot": "We can proceed with the set menu.",
        "de": "Wir können mit „set menu“ fortfahren.",
        "answers": [
          {
            "text": "Please proceed with the set menu.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the set menu in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "optionB": {
        "bot": "An alternative would be the set menu.",
        "de": "Eine Alternative wäre „set menu“.",
        "answers": [
          {
            "text": "That set menu sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the set menu with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How should we confirm the invoice?",
        "de": "Wie sollen wir „invoice“ bestätigen?",
        "answers": [
          {
            "text": "Please confirm the invoice by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the invoice would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you need any further details about the invoice?",
        "de": "Benötigen Sie weitere Einzelheiten zu „invoice“?",
        "answers": [
          {
            "text": "No, the invoice is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the invoice once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has been confirmed successfully.",
        "de": "Danke. Alles wurde erfolgreich bestätigt.",
        "answers": []
      }
    }
  },
  {
    "id": "branch158_hotel_early_breakfast",
    "topic": "Hotel",
    "title": "Frühes Frühstück",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Could you explain what you need regarding the departure time?",
        "de": "Könnten Sie erklären, was Sie bezüglich „departure time“ benötigen?",
        "answers": [
          {
            "text": "I would like to arrange the departure time.",
            "next": "detailsA"
          },
          {
            "text": "There is a problem with the departure time.",
            "next": "detailsB"
          }
        ]
      },
      "detailsA": {
        "bot": "What information can you provide about the breakfast option?",
        "de": "Welche Informationen können Sie zu „breakfast option“ geben?",
        "answers": [
          {
            "text": "The breakfast option is already confirmed.",
            "next": "optionA"
          },
          {
            "text": "I still need advice about the breakfast option.",
            "next": "optionB"
          }
        ]
      },
      "detailsB": {
        "bot": "What exactly needs to change about the breakfast option?",
        "de": "Was genau muss bei „breakfast option“ geändert werden?",
        "answers": [
          {
            "text": "I need a different option for the breakfast option.",
            "next": "optionB"
          },
          {
            "text": "The current breakfast option is no longer suitable.",
            "next": "optionA"
          }
        ]
      },
      "optionA": {
        "bot": "We can proceed with the takeaway package.",
        "de": "Wir können mit „takeaway package“ fortfahren.",
        "answers": [
          {
            "text": "Please proceed with the takeaway package.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the takeaway package in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "optionB": {
        "bot": "An alternative would be the takeaway package.",
        "de": "Eine Alternative wäre „takeaway package“.",
        "answers": [
          {
            "text": "That takeaway package sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the takeaway package with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How should we confirm the room charge?",
        "de": "Wie sollen wir „room charge“ bestätigen?",
        "answers": [
          {
            "text": "Please confirm the room charge by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the room charge would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you need any further details about the room charge?",
        "de": "Benötigen Sie weitere Einzelheiten zu „room charge“?",
        "answers": [
          {
            "text": "No, the room charge is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the room charge once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has been confirmed successfully.",
        "de": "Danke. Alles wurde erfolgreich bestätigt.",
        "answers": []
      }
    }
  },
  {
    "id": "branch158_airport_lounge_issue",
    "topic": "Flughafen",
    "title": "Lounge-Zugang klären",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Could you explain what you need regarding the ticket class?",
        "de": "Könnten Sie erklären, was Sie bezüglich „ticket class“ benötigen?",
        "answers": [
          {
            "text": "I would like to arrange the ticket class.",
            "next": "detailsA"
          },
          {
            "text": "There is a problem with the ticket class.",
            "next": "detailsB"
          }
        ]
      },
      "detailsA": {
        "bot": "What information can you provide about the membership status?",
        "de": "Welche Informationen können Sie zu „membership status“ geben?",
        "answers": [
          {
            "text": "The membership status is already confirmed.",
            "next": "optionA"
          },
          {
            "text": "I still need advice about the membership status.",
            "next": "optionB"
          }
        ]
      },
      "detailsB": {
        "bot": "What exactly needs to change about the membership status?",
        "de": "Was genau muss bei „membership status“ geändert werden?",
        "answers": [
          {
            "text": "I need a different option for the membership status.",
            "next": "optionB"
          },
          {
            "text": "The current membership status is no longer suitable.",
            "next": "optionA"
          }
        ]
      },
      "optionA": {
        "bot": "We can proceed with the access rule.",
        "de": "Wir können mit „access rule“ fortfahren.",
        "answers": [
          {
            "text": "Please proceed with the access rule.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the access rule in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "optionB": {
        "bot": "An alternative would be the access rule.",
        "de": "Eine Alternative wäre „access rule“.",
        "answers": [
          {
            "text": "That access rule sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the access rule with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How should we confirm the entry confirmation?",
        "de": "Wie sollen wir „entry confirmation“ bestätigen?",
        "answers": [
          {
            "text": "Please confirm the entry confirmation by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the entry confirmation would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you need any further details about the entry confirmation?",
        "de": "Benötigen Sie weitere Einzelheiten zu „entry confirmation“?",
        "answers": [
          {
            "text": "No, the entry confirmation is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the entry confirmation once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has been confirmed successfully.",
        "de": "Danke. Alles wurde erfolgreich bestätigt.",
        "answers": []
      }
    }
  },
  {
    "id": "branch158_train_luggage",
    "topic": "Bahnhof",
    "title": "Großes Gepäck im Zug",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Could you explain what you need regarding the luggage size?",
        "de": "Könnten Sie erklären, was Sie bezüglich „luggage size“ benötigen?",
        "answers": [
          {
            "text": "I would like to arrange the luggage size.",
            "next": "detailsA"
          },
          {
            "text": "There is a problem with the luggage size.",
            "next": "detailsB"
          }
        ]
      },
      "detailsA": {
        "bot": "What information can you provide about the storage space?",
        "de": "Welche Informationen können Sie zu „storage space“ geben?",
        "answers": [
          {
            "text": "The storage space is already confirmed.",
            "next": "optionA"
          },
          {
            "text": "I still need advice about the storage space.",
            "next": "optionB"
          }
        ]
      },
      "detailsB": {
        "bot": "What exactly needs to change about the storage space?",
        "de": "Was genau muss bei „storage space“ geändert werden?",
        "answers": [
          {
            "text": "I need a different option for the storage space.",
            "next": "optionB"
          },
          {
            "text": "The current storage space is no longer suitable.",
            "next": "optionA"
          }
        ]
      },
      "optionA": {
        "bot": "We can proceed with the seat location.",
        "de": "Wir können mit „seat location“ fortfahren.",
        "answers": [
          {
            "text": "Please proceed with the seat location.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the seat location in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "optionB": {
        "bot": "An alternative would be the seat location.",
        "de": "Eine Alternative wäre „seat location“.",
        "answers": [
          {
            "text": "That seat location sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the seat location with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How should we confirm the boarding advice?",
        "de": "Wie sollen wir „boarding advice“ bestätigen?",
        "answers": [
          {
            "text": "Please confirm the boarding advice by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the boarding advice would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you need any further details about the boarding advice?",
        "de": "Benötigen Sie weitere Einzelheiten zu „boarding advice“?",
        "answers": [
          {
            "text": "No, the boarding advice is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the boarding advice once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has been confirmed successfully.",
        "de": "Danke. Alles wurde erfolgreich bestätigt.",
        "answers": []
      }
    }
  },
  {
    "id": "branch158_taxi_fare_dispute",
    "topic": "Taxi",
    "title": "Fahrpreis reklamieren",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Could you explain what you need regarding the meter reading?",
        "de": "Könnten Sie erklären, was Sie bezüglich „meter reading“ benötigen?",
        "answers": [
          {
            "text": "I would like to arrange the meter reading.",
            "next": "detailsA"
          },
          {
            "text": "There is a problem with the meter reading.",
            "next": "detailsB"
          }
        ]
      },
      "detailsA": {
        "bot": "What information can you provide about the route taken?",
        "de": "Welche Informationen können Sie zu „route taken“ geben?",
        "answers": [
          {
            "text": "The route taken is already confirmed.",
            "next": "optionA"
          },
          {
            "text": "I still need advice about the route taken.",
            "next": "optionB"
          }
        ]
      },
      "detailsB": {
        "bot": "What exactly needs to change about the route taken?",
        "de": "Was genau muss bei „route taken“ geändert werden?",
        "answers": [
          {
            "text": "I need a different option for the route taken.",
            "next": "optionB"
          },
          {
            "text": "The current route taken is no longer suitable.",
            "next": "optionA"
          }
        ]
      },
      "optionA": {
        "bot": "We can proceed with the expected fare.",
        "de": "Wir können mit „expected fare“ fortfahren.",
        "answers": [
          {
            "text": "Please proceed with the expected fare.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the expected fare in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "optionB": {
        "bot": "An alternative would be the expected fare.",
        "de": "Eine Alternative wäre „expected fare“.",
        "answers": [
          {
            "text": "That expected fare sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the expected fare with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How should we confirm the revised amount?",
        "de": "Wie sollen wir „revised amount“ bestätigen?",
        "answers": [
          {
            "text": "Please confirm the revised amount by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the revised amount would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you need any further details about the revised amount?",
        "de": "Benötigen Sie weitere Einzelheiten zu „revised amount“?",
        "answers": [
          {
            "text": "No, the revised amount is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the revised amount once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has been confirmed successfully.",
        "de": "Danke. Alles wurde erfolgreich bestätigt.",
        "answers": []
      }
    }
  },
  {
    "id": "branch158_rental_child_seat",
    "topic": "Autovermietung",
    "title": "Kindersitz reservieren",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Could you explain what you need regarding the child age?",
        "de": "Könnten Sie erklären, was Sie bezüglich „child age“ benötigen?",
        "answers": [
          {
            "text": "I would like to arrange the child age.",
            "next": "detailsA"
          },
          {
            "text": "There is a problem with the child age.",
            "next": "detailsB"
          }
        ]
      },
      "detailsA": {
        "bot": "What information can you provide about the seat type?",
        "de": "Welche Informationen können Sie zu „seat type“ geben?",
        "answers": [
          {
            "text": "The seat type is already confirmed.",
            "next": "optionA"
          },
          {
            "text": "I still need advice about the seat type.",
            "next": "optionB"
          }
        ]
      },
      "detailsB": {
        "bot": "What exactly needs to change about the seat type?",
        "de": "Was genau muss bei „seat type“ geändert werden?",
        "answers": [
          {
            "text": "I need a different option for the seat type.",
            "next": "optionB"
          },
          {
            "text": "The current seat type is no longer suitable.",
            "next": "optionA"
          }
        ]
      },
      "optionA": {
        "bot": "We can proceed with the availability.",
        "de": "Wir können mit „availability“ fortfahren.",
        "answers": [
          {
            "text": "Please proceed with the availability.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the availability in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "optionB": {
        "bot": "An alternative would be the availability.",
        "de": "Eine Alternative wäre „availability“.",
        "answers": [
          {
            "text": "That availability sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the availability with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How should we confirm the updated booking?",
        "de": "Wie sollen wir „updated booking“ bestätigen?",
        "answers": [
          {
            "text": "Please confirm the updated booking by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the updated booking would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you need any further details about the updated booking?",
        "de": "Benötigen Sie weitere Einzelheiten zu „updated booking“?",
        "answers": [
          {
            "text": "No, the updated booking is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the updated booking once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has been confirmed successfully.",
        "de": "Danke. Alles wurde erfolgreich bestätigt.",
        "answers": []
      }
    }
  },
  {
    "id": "branch158_shopping_price_match",
    "topic": "Einkaufen",
    "title": "Preisangleichung verlangen",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Could you explain what you need regarding the product model?",
        "de": "Könnten Sie erklären, was Sie bezüglich „product model“ benötigen?",
        "answers": [
          {
            "text": "I would like to arrange the product model.",
            "next": "detailsA"
          },
          {
            "text": "There is a problem with the product model.",
            "next": "detailsB"
          }
        ]
      },
      "detailsA": {
        "bot": "What information can you provide about the competitor price?",
        "de": "Welche Informationen können Sie zu „competitor price“ geben?",
        "answers": [
          {
            "text": "The competitor price is already confirmed.",
            "next": "optionA"
          },
          {
            "text": "I still need advice about the competitor price.",
            "next": "optionB"
          }
        ]
      },
      "detailsB": {
        "bot": "What exactly needs to change about the competitor price?",
        "de": "Was genau muss bei „competitor price“ geändert werden?",
        "answers": [
          {
            "text": "I need a different option for the competitor price.",
            "next": "optionB"
          },
          {
            "text": "The current competitor price is no longer suitable.",
            "next": "optionA"
          }
        ]
      },
      "optionA": {
        "bot": "We can proceed with the store policy.",
        "de": "Wir können mit „store policy“ fortfahren.",
        "answers": [
          {
            "text": "Please proceed with the store policy.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the store policy in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "optionB": {
        "bot": "An alternative would be the store policy.",
        "de": "Eine Alternative wäre „store policy“.",
        "answers": [
          {
            "text": "That store policy sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the store policy with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How should we confirm the final price?",
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
        "bot": "Thank you. Everything has been confirmed successfully.",
        "de": "Danke. Alles wurde erfolgreich bestätigt.",
        "answers": []
      }
    }
  },
  {
    "id": "branch158_doctor_allergy_test",
    "topic": "Gesundheit",
    "title": "Allergietest organisieren",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Could you explain what you need regarding the current symptoms?",
        "de": "Könnten Sie erklären, was Sie bezüglich „current symptoms“ benötigen?",
        "answers": [
          {
            "text": "I would like to arrange the current symptoms.",
            "next": "detailsA"
          },
          {
            "text": "There is a problem with the current symptoms.",
            "next": "detailsB"
          }
        ]
      },
      "detailsA": {
        "bot": "What information can you provide about the possible trigger?",
        "de": "Welche Informationen können Sie zu „possible trigger“ geben?",
        "answers": [
          {
            "text": "The possible trigger is already confirmed.",
            "next": "optionA"
          },
          {
            "text": "I still need advice about the possible trigger.",
            "next": "optionB"
          }
        ]
      },
      "detailsB": {
        "bot": "What exactly needs to change about the possible trigger?",
        "de": "Was genau muss bei „possible trigger“ geändert werden?",
        "answers": [
          {
            "text": "I need a different option for the possible trigger.",
            "next": "optionB"
          },
          {
            "text": "The current possible trigger is no longer suitable.",
            "next": "optionA"
          }
        ]
      },
      "optionA": {
        "bot": "We can proceed with the test method.",
        "de": "Wir können mit „test method“ fortfahren.",
        "answers": [
          {
            "text": "Please proceed with the test method.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the test method in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "optionB": {
        "bot": "An alternative would be the test method.",
        "de": "Eine Alternative wäre „test method“.",
        "answers": [
          {
            "text": "That test method sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the test method with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How should we confirm the result appointment?",
        "de": "Wie sollen wir „result appointment“ bestätigen?",
        "answers": [
          {
            "text": "Please confirm the result appointment by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the result appointment would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you need any further details about the result appointment?",
        "de": "Benötigen Sie weitere Einzelheiten zu „result appointment“?",
        "answers": [
          {
            "text": "No, the result appointment is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the result appointment once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has been confirmed successfully.",
        "de": "Danke. Alles wurde erfolgreich bestätigt.",
        "answers": []
      }
    }
  },
  {
    "id": "branch158_pharmacy_medication_storage",
    "topic": "Apotheke",
    "title": "Medikament richtig lagern",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Could you explain what you need regarding the medicine type?",
        "de": "Könnten Sie erklären, was Sie bezüglich „medicine type“ benötigen?",
        "answers": [
          {
            "text": "I would like to arrange the medicine type.",
            "next": "detailsA"
          },
          {
            "text": "There is a problem with the medicine type.",
            "next": "detailsB"
          }
        ]
      },
      "detailsA": {
        "bot": "What information can you provide about the storage temperature?",
        "de": "Welche Informationen können Sie zu „storage temperature“ geben?",
        "answers": [
          {
            "text": "The storage temperature is already confirmed.",
            "next": "optionA"
          },
          {
            "text": "I still need advice about the storage temperature.",
            "next": "optionB"
          }
        ]
      },
      "detailsB": {
        "bot": "What exactly needs to change about the storage temperature?",
        "de": "Was genau muss bei „storage temperature“ geändert werden?",
        "answers": [
          {
            "text": "I need a different option for the storage temperature.",
            "next": "optionB"
          },
          {
            "text": "The current storage temperature is no longer suitable.",
            "next": "optionA"
          }
        ]
      },
      "optionA": {
        "bot": "We can proceed with the travel transport.",
        "de": "Wir können mit „travel transport“ fortfahren.",
        "answers": [
          {
            "text": "Please proceed with the travel transport.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the travel transport in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "optionB": {
        "bot": "An alternative would be the travel transport.",
        "de": "Eine Alternative wäre „travel transport“.",
        "answers": [
          {
            "text": "That travel transport sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the travel transport with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How should we confirm the safety advice?",
        "de": "Wie sollen wir „safety advice“ bestätigen?",
        "answers": [
          {
            "text": "Please confirm the safety advice by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the safety advice would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you need any further details about the safety advice?",
        "de": "Benötigen Sie weitere Einzelheiten zu „safety advice“?",
        "answers": [
          {
            "text": "No, the safety advice is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the safety advice once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has been confirmed successfully.",
        "de": "Danke. Alles wurde erfolgreich bestätigt.",
        "answers": []
      }
    }
  },
  {
    "id": "branch158_work_training_request",
    "topic": "Beruf",
    "title": "Weiterbildung beantragen",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Could you explain what you need regarding the training course?",
        "de": "Könnten Sie erklären, was Sie bezüglich „training course“ benötigen?",
        "answers": [
          {
            "text": "I would like to arrange the training course.",
            "next": "detailsA"
          },
          {
            "text": "There is a problem with the training course.",
            "next": "detailsB"
          }
        ]
      },
      "detailsA": {
        "bot": "What information can you provide about the business benefit?",
        "de": "Welche Informationen können Sie zu „business benefit“ geben?",
        "answers": [
          {
            "text": "The business benefit is already confirmed.",
            "next": "optionA"
          },
          {
            "text": "I still need advice about the business benefit.",
            "next": "optionB"
          }
        ]
      },
      "detailsB": {
        "bot": "What exactly needs to change about the business benefit?",
        "de": "Was genau muss bei „business benefit“ geändert werden?",
        "answers": [
          {
            "text": "I need a different option for the business benefit.",
            "next": "optionB"
          },
          {
            "text": "The current business benefit is no longer suitable.",
            "next": "optionA"
          }
        ]
      },
      "optionA": {
        "bot": "We can proceed with the course cost.",
        "de": "Wir können mit „course cost“ fortfahren.",
        "answers": [
          {
            "text": "Please proceed with the course cost.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the course cost in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "optionB": {
        "bot": "An alternative would be the course cost.",
        "de": "Eine Alternative wäre „course cost“.",
        "answers": [
          {
            "text": "That course cost sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the course cost with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How should we confirm the manager approval?",
        "de": "Wie sollen wir „manager approval“ bestätigen?",
        "answers": [
          {
            "text": "Please confirm the manager approval by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the manager approval would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you need any further details about the manager approval?",
        "de": "Benötigen Sie weitere Einzelheiten zu „manager approval“?",
        "answers": [
          {
            "text": "No, the manager approval is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the manager approval once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has been confirmed successfully.",
        "de": "Danke. Alles wurde erfolgreich bestätigt.",
        "answers": []
      }
    }
  },
  {
    "id": "branch158_phone_change_address",
    "topic": "Telefon",
    "title": "Adresse telefonisch ändern",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Could you explain what you need regarding the customer account?",
        "de": "Könnten Sie erklären, was Sie bezüglich „customer account“ benötigen?",
        "answers": [
          {
            "text": "I would like to arrange the customer account.",
            "next": "detailsA"
          },
          {
            "text": "There is a problem with the customer account.",
            "next": "detailsB"
          }
        ]
      },
      "detailsA": {
        "bot": "What information can you provide about the old address?",
        "de": "Welche Informationen können Sie zu „old address“ geben?",
        "answers": [
          {
            "text": "The old address is already confirmed.",
            "next": "optionA"
          },
          {
            "text": "I still need advice about the old address.",
            "next": "optionB"
          }
        ]
      },
      "detailsB": {
        "bot": "What exactly needs to change about the old address?",
        "de": "Was genau muss bei „old address“ geändert werden?",
        "answers": [
          {
            "text": "I need a different option for the old address.",
            "next": "optionB"
          },
          {
            "text": "The current old address is no longer suitable.",
            "next": "optionA"
          }
        ]
      },
      "optionA": {
        "bot": "We can proceed with the new address.",
        "de": "Wir können mit „new address“ fortfahren.",
        "answers": [
          {
            "text": "Please proceed with the new address.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the new address in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "optionB": {
        "bot": "An alternative would be the new address.",
        "de": "Eine Alternative wäre „new address“.",
        "answers": [
          {
            "text": "That new address sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the new address with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How should we confirm the written confirmation?",
        "de": "Wie sollen wir „written confirmation“ bestätigen?",
        "answers": [
          {
            "text": "Please confirm the written confirmation by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the written confirmation would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you need any further details about the written confirmation?",
        "de": "Benötigen Sie weitere Einzelheiten zu „written confirmation“?",
        "answers": [
          {
            "text": "No, the written confirmation is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the written confirmation once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has been confirmed successfully.",
        "de": "Danke. Alles wurde erfolgreich bestätigt.",
        "answers": []
      }
    }
  },
  {
    "id": "branch158_bank_card_limit",
    "topic": "Bank",
    "title": "Kartenlimit ändern",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Could you explain what you need regarding the current limit?",
        "de": "Könnten Sie erklären, was Sie bezüglich „current limit“ benötigen?",
        "answers": [
          {
            "text": "I would like to arrange the current limit.",
            "next": "detailsA"
          },
          {
            "text": "There is a problem with the current limit.",
            "next": "detailsB"
          }
        ]
      },
      "detailsA": {
        "bot": "What information can you provide about the required amount?",
        "de": "Welche Informationen können Sie zu „required amount“ geben?",
        "answers": [
          {
            "text": "The required amount is already confirmed.",
            "next": "optionA"
          },
          {
            "text": "I still need advice about the required amount.",
            "next": "optionB"
          }
        ]
      },
      "detailsB": {
        "bot": "What exactly needs to change about the required amount?",
        "de": "Was genau muss bei „required amount“ geändert werden?",
        "answers": [
          {
            "text": "I need a different option for the required amount.",
            "next": "optionB"
          },
          {
            "text": "The current required amount is no longer suitable.",
            "next": "optionA"
          }
        ]
      },
      "optionA": {
        "bot": "We can proceed with the security check.",
        "de": "Wir können mit „security check“ fortfahren.",
        "answers": [
          {
            "text": "Please proceed with the security check.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the security check in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "optionB": {
        "bot": "An alternative would be the security check.",
        "de": "Eine Alternative wäre „security check“.",
        "answers": [
          {
            "text": "That security check sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the security check with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How should we confirm the new limit?",
        "de": "Wie sollen wir „new limit“ bestätigen?",
        "answers": [
          {
            "text": "Please confirm the new limit by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the new limit would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you need any further details about the new limit?",
        "de": "Benötigen Sie weitere Einzelheiten zu „new limit“?",
        "answers": [
          {
            "text": "No, the new limit is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the new limit once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has been confirmed successfully.",
        "de": "Danke. Alles wurde erfolgreich bestätigt.",
        "answers": []
      }
    }
  },
  {
    "id": "branch158_post_signature_delivery",
    "topic": "Post",
    "title": "Zustellung gegen Unterschrift",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Could you explain what you need regarding the parcel type?",
        "de": "Könnten Sie erklären, was Sie bezüglich „parcel type“ benötigen?",
        "answers": [
          {
            "text": "I would like to arrange the parcel type.",
            "next": "detailsA"
          },
          {
            "text": "There is a problem with the parcel type.",
            "next": "detailsB"
          }
        ]
      },
      "detailsA": {
        "bot": "What information can you provide about the recipient availability?",
        "de": "Welche Informationen können Sie zu „recipient availability“ geben?",
        "answers": [
          {
            "text": "The recipient availability is already confirmed.",
            "next": "optionA"
          },
          {
            "text": "I still need advice about the recipient availability.",
            "next": "optionB"
          }
        ]
      },
      "detailsB": {
        "bot": "What exactly needs to change about the recipient availability?",
        "de": "Was genau muss bei „recipient availability“ geändert werden?",
        "answers": [
          {
            "text": "I need a different option for the recipient availability.",
            "next": "optionB"
          },
          {
            "text": "The current recipient availability is no longer suitable.",
            "next": "optionA"
          }
        ]
      },
      "optionA": {
        "bot": "We can proceed with the delivery option.",
        "de": "Wir können mit „delivery option“ fortfahren.",
        "answers": [
          {
            "text": "Please proceed with the delivery option.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the delivery option in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "optionB": {
        "bot": "An alternative would be the delivery option.",
        "de": "Eine Alternative wäre „delivery option“.",
        "answers": [
          {
            "text": "That delivery option sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the delivery option with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How should we confirm the tracking?",
        "de": "Wie sollen wir „tracking“ bestätigen?",
        "answers": [
          {
            "text": "Please confirm the tracking by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the tracking would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you need any further details about the tracking?",
        "de": "Benötigen Sie weitere Einzelheiten zu „tracking“?",
        "answers": [
          {
            "text": "No, the tracking is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the tracking once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has been confirmed successfully.",
        "de": "Danke. Alles wurde erfolgreich bestätigt.",
        "answers": []
      }
    }
  },
  {
    "id": "branch158_museum_audio_guide",
    "topic": "Museum",
    "title": "Audioguide auswählen",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Could you explain what you need regarding the preferred language?",
        "de": "Könnten Sie erklären, was Sie bezüglich „preferred language“ benötigen?",
        "answers": [
          {
            "text": "I would like to arrange the preferred language.",
            "next": "detailsA"
          },
          {
            "text": "There is a problem with the preferred language.",
            "next": "detailsB"
          }
        ]
      },
      "detailsA": {
        "bot": "What information can you provide about the tour length?",
        "de": "Welche Informationen können Sie zu „tour length“ geben?",
        "answers": [
          {
            "text": "The tour length is already confirmed.",
            "next": "optionA"
          },
          {
            "text": "I still need advice about the tour length.",
            "next": "optionB"
          }
        ]
      },
      "detailsB": {
        "bot": "What exactly needs to change about the tour length?",
        "de": "Was genau muss bei „tour length“ geändert werden?",
        "answers": [
          {
            "text": "I need a different option for the tour length.",
            "next": "optionB"
          },
          {
            "text": "The current tour length is no longer suitable.",
            "next": "optionA"
          }
        ]
      },
      "optionA": {
        "bot": "We can proceed with the device deposit.",
        "de": "Wir können mit „device deposit“ fortfahren.",
        "answers": [
          {
            "text": "Please proceed with the device deposit.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the device deposit in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "optionB": {
        "bot": "An alternative would be the device deposit.",
        "de": "Eine Alternative wäre „device deposit“.",
        "answers": [
          {
            "text": "That device deposit sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the device deposit with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How should we confirm the return point?",
        "de": "Wie sollen wir „return point“ bestätigen?",
        "answers": [
          {
            "text": "Please confirm the return point by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the return point would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you need any further details about the return point?",
        "de": "Benötigen Sie weitere Einzelheiten zu „return point“?",
        "answers": [
          {
            "text": "No, the return point is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the return point once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has been confirmed successfully.",
        "de": "Danke. Alles wurde erfolgreich bestätigt.",
        "answers": []
      }
    }
  },
  {
    "id": "branch158_camping_fire_rules",
    "topic": "Camping",
    "title": "Feuerregeln klären",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Could you explain what you need regarding the cooking need?",
        "de": "Könnten Sie erklären, was Sie bezüglich „cooking need“ benötigen?",
        "answers": [
          {
            "text": "I would like to arrange the cooking need.",
            "next": "detailsA"
          },
          {
            "text": "There is a problem with the cooking need.",
            "next": "detailsB"
          }
        ]
      },
      "detailsA": {
        "bot": "What information can you provide about the weather condition?",
        "de": "Welche Informationen können Sie zu „weather condition“ geben?",
        "answers": [
          {
            "text": "The weather condition is already confirmed.",
            "next": "optionA"
          },
          {
            "text": "I still need advice about the weather condition.",
            "next": "optionB"
          }
        ]
      },
      "detailsB": {
        "bot": "What exactly needs to change about the weather condition?",
        "de": "Was genau muss bei „weather condition“ geändert werden?",
        "answers": [
          {
            "text": "I need a different option for the weather condition.",
            "next": "optionB"
          },
          {
            "text": "The current weather condition is no longer suitable.",
            "next": "optionA"
          }
        ]
      },
      "optionA": {
        "bot": "We can proceed with the approved area.",
        "de": "Wir können mit „approved area“ fortfahren.",
        "answers": [
          {
            "text": "Please proceed with the approved area.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the approved area in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "optionB": {
        "bot": "An alternative would be the approved area.",
        "de": "Eine Alternative wäre „approved area“.",
        "answers": [
          {
            "text": "That approved area sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the approved area with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How should we confirm the safety rule?",
        "de": "Wie sollen wir „safety rule“ bestätigen?",
        "answers": [
          {
            "text": "Please confirm the safety rule by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the safety rule would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you need any further details about the safety rule?",
        "de": "Benötigen Sie weitere Einzelheiten zu „safety rule“?",
        "answers": [
          {
            "text": "No, the safety rule is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the safety rule once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has been confirmed successfully.",
        "de": "Danke. Alles wurde erfolgreich bestätigt.",
        "answers": []
      }
    }
  },
  {
    "id": "branch158_university_tutor",
    "topic": "Bildung",
    "title": "Tutorengespräch vereinbaren",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Could you explain what you need regarding the course problem?",
        "de": "Könnten Sie erklären, was Sie bezüglich „course problem“ benötigen?",
        "answers": [
          {
            "text": "I would like to arrange the course problem.",
            "next": "detailsA"
          },
          {
            "text": "There is a problem with the course problem.",
            "next": "detailsB"
          }
        ]
      },
      "detailsA": {
        "bot": "What information can you provide about the available tutor?",
        "de": "Welche Informationen können Sie zu „available tutor“ geben?",
        "answers": [
          {
            "text": "The available tutor is already confirmed.",
            "next": "optionA"
          },
          {
            "text": "I still need advice about the available tutor.",
            "next": "optionB"
          }
        ]
      },
      "detailsB": {
        "bot": "What exactly needs to change about the available tutor?",
        "de": "Was genau muss bei „available tutor“ geändert werden?",
        "answers": [
          {
            "text": "I need a different option for the available tutor.",
            "next": "optionB"
          },
          {
            "text": "The current available tutor is no longer suitable.",
            "next": "optionA"
          }
        ]
      },
      "optionA": {
        "bot": "We can proceed with the meeting format.",
        "de": "Wir können mit „meeting format“ fortfahren.",
        "answers": [
          {
            "text": "Please proceed with the meeting format.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the meeting format in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "optionB": {
        "bot": "An alternative would be the meeting format.",
        "de": "Eine Alternative wäre „meeting format“.",
        "answers": [
          {
            "text": "That meeting format sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the meeting format with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How should we confirm the appointment time?",
        "de": "Wie sollen wir „appointment time“ bestätigen?",
        "answers": [
          {
            "text": "Please confirm the appointment time by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the appointment time would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you need any further details about the appointment time?",
        "de": "Benötigen Sie weitere Einzelheiten zu „appointment time“?",
        "answers": [
          {
            "text": "No, the appointment time is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the appointment time once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has been confirmed successfully.",
        "de": "Danke. Alles wurde erfolgreich bestätigt.",
        "answers": []
      }
    }
  },
  {
    "id": "branch158_sport_medical_clearance",
    "topic": "Sport",
    "title": "Sportfreigabe klären",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Could you explain what you need regarding the health condition?",
        "de": "Könnten Sie erklären, was Sie bezüglich „health condition“ benötigen?",
        "answers": [
          {
            "text": "I would like to arrange the health condition.",
            "next": "detailsA"
          },
          {
            "text": "There is a problem with the health condition.",
            "next": "detailsB"
          }
        ]
      },
      "detailsA": {
        "bot": "What information can you provide about the doctor's note?",
        "de": "Welche Informationen können Sie zu „doctor's note“ geben?",
        "answers": [
          {
            "text": "The doctor's note is already confirmed.",
            "next": "optionA"
          },
          {
            "text": "I still need advice about the doctor's note.",
            "next": "optionB"
          }
        ]
      },
      "detailsB": {
        "bot": "What exactly needs to change about the doctor's note?",
        "de": "Was genau muss bei „doctor's note“ geändert werden?",
        "answers": [
          {
            "text": "I need a different option for the doctor's note.",
            "next": "optionB"
          },
          {
            "text": "The current doctor's note is no longer suitable.",
            "next": "optionA"
          }
        ]
      },
      "optionA": {
        "bot": "We can proceed with the allowed activity.",
        "de": "Wir können mit „allowed activity“ fortfahren.",
        "answers": [
          {
            "text": "Please proceed with the allowed activity.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the allowed activity in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "optionB": {
        "bot": "An alternative would be the allowed activity.",
        "de": "Eine Alternative wäre „allowed activity“.",
        "answers": [
          {
            "text": "That allowed activity sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the allowed activity with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How should we confirm the review date?",
        "de": "Wie sollen wir „review date“ bestätigen?",
        "answers": [
          {
            "text": "Please confirm the review date by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the review date would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you need any further details about the review date?",
        "de": "Benötigen Sie weitere Einzelheiten zu „review date“?",
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
        "bot": "Thank you. Everything has been confirmed successfully.",
        "de": "Danke. Alles wurde erfolgreich bestätigt.",
        "answers": []
      }
    }
  },
  {
    "id": "branch158_neighbour_shared_hallway",
    "topic": "Wohnen",
    "title": "Gemeinsamen Flur organisieren",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Could you explain what you need regarding the stored items?",
        "de": "Könnten Sie erklären, was Sie bezüglich „stored items“ benötigen?",
        "answers": [
          {
            "text": "I would like to arrange the stored items.",
            "next": "detailsA"
          },
          {
            "text": "There is a problem with the stored items.",
            "next": "detailsB"
          }
        ]
      },
      "detailsA": {
        "bot": "What information can you provide about the safety concern?",
        "de": "Welche Informationen können Sie zu „safety concern“ geben?",
        "answers": [
          {
            "text": "The safety concern is already confirmed.",
            "next": "optionA"
          },
          {
            "text": "I still need advice about the safety concern.",
            "next": "optionB"
          }
        ]
      },
      "detailsB": {
        "bot": "What exactly needs to change about the safety concern?",
        "de": "Was genau muss bei „safety concern“ geändert werden?",
        "answers": [
          {
            "text": "I need a different option for the safety concern.",
            "next": "optionB"
          },
          {
            "text": "The current safety concern is no longer suitable.",
            "next": "optionA"
          }
        ]
      },
      "optionA": {
        "bot": "We can proceed with the removal date.",
        "de": "Wir können mit „removal date“ fortfahren.",
        "answers": [
          {
            "text": "Please proceed with the removal date.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the removal date in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "optionB": {
        "bot": "An alternative would be the removal date.",
        "de": "Eine Alternative wäre „removal date“.",
        "answers": [
          {
            "text": "That removal date sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the removal date with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How should we confirm the house agreement?",
        "de": "Wie sollen wir „house agreement“ bestätigen?",
        "answers": [
          {
            "text": "Please confirm the house agreement by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the house agreement would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you need any further details about the house agreement?",
        "de": "Benötigen Sie weitere Einzelheiten zu „house agreement“?",
        "answers": [
          {
            "text": "No, the house agreement is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the house agreement once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has been confirmed successfully.",
        "de": "Danke. Alles wurde erfolgreich bestätigt.",
        "answers": []
      }
    }
  },
  {
    "id": "branch158_internet_contract_end",
    "topic": "Internet",
    "title": "Internetvertrag beenden",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Could you explain what you need regarding the contract number?",
        "de": "Könnten Sie erklären, was Sie bezüglich „contract number“ benötigen?",
        "answers": [
          {
            "text": "I would like to arrange the contract number.",
            "next": "detailsA"
          },
          {
            "text": "There is a problem with the contract number.",
            "next": "detailsB"
          }
        ]
      },
      "detailsA": {
        "bot": "What information can you provide about the notice period?",
        "de": "Welche Informationen können Sie zu „notice period“ geben?",
        "answers": [
          {
            "text": "The notice period is already confirmed.",
            "next": "optionA"
          },
          {
            "text": "I still need advice about the notice period.",
            "next": "optionB"
          }
        ]
      },
      "detailsB": {
        "bot": "What exactly needs to change about the notice period?",
        "de": "Was genau muss bei „notice period“ geändert werden?",
        "answers": [
          {
            "text": "I need a different option for the notice period.",
            "next": "optionB"
          },
          {
            "text": "The current notice period is no longer suitable.",
            "next": "optionA"
          }
        ]
      },
      "optionA": {
        "bot": "We can proceed with the equipment return.",
        "de": "Wir können mit „equipment return“ fortfahren.",
        "answers": [
          {
            "text": "Please proceed with the equipment return.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the equipment return in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "optionB": {
        "bot": "An alternative would be the equipment return.",
        "de": "Eine Alternative wäre „equipment return“.",
        "answers": [
          {
            "text": "That equipment return sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the equipment return with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How should we confirm the final bill?",
        "de": "Wie sollen wir „final bill“ bestätigen?",
        "answers": [
          {
            "text": "Please confirm the final bill by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the final bill would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you need any further details about the final bill?",
        "de": "Benötigen Sie weitere Einzelheiten zu „final bill“?",
        "answers": [
          {
            "text": "No, the final bill is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the final bill once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has been confirmed successfully.",
        "de": "Danke. Alles wurde erfolgreich bestätigt.",
        "answers": []
      }
    }
  },
  {
    "id": "branch158_environment_tree_project",
    "topic": "Umwelt",
    "title": "Baumpflanzprojekt",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Could you explain what you need regarding the project area?",
        "de": "Könnten Sie erklären, was Sie bezüglich „project area“ benötigen?",
        "answers": [
          {
            "text": "I would like to arrange the project area.",
            "next": "detailsA"
          },
          {
            "text": "There is a problem with the project area.",
            "next": "detailsB"
          }
        ]
      },
      "detailsA": {
        "bot": "What information can you provide about the volunteer number?",
        "de": "Welche Informationen können Sie zu „volunteer number“ geben?",
        "answers": [
          {
            "text": "The volunteer number is already confirmed.",
            "next": "optionA"
          },
          {
            "text": "I still need advice about the volunteer number.",
            "next": "optionB"
          }
        ]
      },
      "detailsB": {
        "bot": "What exactly needs to change about the volunteer number?",
        "de": "Was genau muss bei „volunteer number“ geändert werden?",
        "answers": [
          {
            "text": "I need a different option for the volunteer number.",
            "next": "optionB"
          },
          {
            "text": "The current volunteer number is no longer suitable.",
            "next": "optionA"
          }
        ]
      },
      "optionA": {
        "bot": "We can proceed with the planting date.",
        "de": "Wir können mit „planting date“ fortfahren.",
        "answers": [
          {
            "text": "Please proceed with the planting date.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the planting date in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "optionB": {
        "bot": "An alternative would be the planting date.",
        "de": "Eine Alternative wäre „planting date“.",
        "answers": [
          {
            "text": "That planting date sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the planting date with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How should we confirm the maintenance plan?",
        "de": "Wie sollen wir „maintenance plan“ bestätigen?",
        "answers": [
          {
            "text": "Please confirm the maintenance plan by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the maintenance plan would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you need any further details about the maintenance plan?",
        "de": "Benötigen Sie weitere Einzelheiten zu „maintenance plan“?",
        "answers": [
          {
            "text": "No, the maintenance plan is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the maintenance plan once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has been confirmed successfully.",
        "de": "Danke. Alles wurde erfolgreich bestätigt.",
        "answers": []
      }
    }
  },
  {
    "id": "branch158_smalltalk_local_area",
    "topic": "Small Talk",
    "title": "Über die Umgebung sprechen",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Could you explain what you need regarding the neighbourhood?",
        "de": "Könnten Sie erklären, was Sie bezüglich „neighbourhood“ benötigen?",
        "answers": [
          {
            "text": "I would like to arrange the neighbourhood.",
            "next": "detailsA"
          },
          {
            "text": "There is a problem with the neighbourhood.",
            "next": "detailsB"
          }
        ]
      },
      "detailsA": {
        "bot": "What information can you provide about the favourite place?",
        "de": "Welche Informationen können Sie zu „favourite place“ geben?",
        "answers": [
          {
            "text": "The favourite place is already confirmed.",
            "next": "optionA"
          },
          {
            "text": "I still need advice about the favourite place.",
            "next": "optionB"
          }
        ]
      },
      "detailsB": {
        "bot": "What exactly needs to change about the favourite place?",
        "de": "Was genau muss bei „favourite place“ geändert werden?",
        "answers": [
          {
            "text": "I need a different option for the favourite place.",
            "next": "optionB"
          },
          {
            "text": "The current favourite place is no longer suitable.",
            "next": "optionA"
          }
        ]
      },
      "optionA": {
        "bot": "We can proceed with the local service.",
        "de": "Wir können mit „local service“ fortfahren.",
        "answers": [
          {
            "text": "Please proceed with the local service.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the local service in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "optionB": {
        "bot": "An alternative would be the local service.",
        "de": "Eine Alternative wäre „local service“.",
        "answers": [
          {
            "text": "That local service sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the local service with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How should we confirm the recommendation?",
        "de": "Wie sollen wir „recommendation“ bestätigen?",
        "answers": [
          {
            "text": "Please confirm the recommendation by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the recommendation would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you need any further details about the recommendation?",
        "de": "Benötigen Sie weitere Einzelheiten zu „recommendation“?",
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
        "bot": "Thank you. Everything has been confirmed successfully.",
        "de": "Danke. Alles wurde erfolgreich bestätigt.",
        "answers": []
      }
    }
  },
  {
    "id": "branch158_language_exam",
    "topic": "Englischlernen",
    "title": "Prüfung vorbereiten",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Could you explain what you need regarding the exam format?",
        "de": "Könnten Sie erklären, was Sie bezüglich „exam format“ benötigen?",
        "answers": [
          {
            "text": "I would like to arrange the exam format.",
            "next": "detailsA"
          },
          {
            "text": "There is a problem with the exam format.",
            "next": "detailsB"
          }
        ]
      },
      "detailsA": {
        "bot": "What information can you provide about the weak section?",
        "de": "Welche Informationen können Sie zu „weak section“ geben?",
        "answers": [
          {
            "text": "The weak section is already confirmed.",
            "next": "optionA"
          },
          {
            "text": "I still need advice about the weak section.",
            "next": "optionB"
          }
        ]
      },
      "detailsB": {
        "bot": "What exactly needs to change about the weak section?",
        "de": "Was genau muss bei „weak section“ geändert werden?",
        "answers": [
          {
            "text": "I need a different option for the weak section.",
            "next": "optionB"
          },
          {
            "text": "The current weak section is no longer suitable.",
            "next": "optionA"
          }
        ]
      },
      "optionA": {
        "bot": "We can proceed with the practice schedule.",
        "de": "Wir können mit „practice schedule“ fortfahren.",
        "answers": [
          {
            "text": "Please proceed with the practice schedule.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the practice schedule in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "optionB": {
        "bot": "An alternative would be the practice schedule.",
        "de": "Eine Alternative wäre „practice schedule“.",
        "answers": [
          {
            "text": "That practice schedule sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the practice schedule with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How should we confirm the mock test?",
        "de": "Wie sollen wir „mock test“ bestätigen?",
        "answers": [
          {
            "text": "Please confirm the mock test by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the mock test would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you need any further details about the mock test?",
        "de": "Benötigen Sie weitere Einzelheiten zu „mock test“?",
        "answers": [
          {
            "text": "No, the mock test is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the mock test once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has been confirmed successfully.",
        "de": "Danke. Alles wurde erfolgreich bestätigt.",
        "answers": []
      }
    }
  },
  {
    "id": "branch158_business_risk_review",
    "topic": "Beruf",
    "title": "Geschäftsrisiko bewerten",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Could you explain what you need regarding the identified risk?",
        "de": "Könnten Sie erklären, was Sie bezüglich „identified risk“ benötigen?",
        "answers": [
          {
            "text": "I would like to arrange the identified risk.",
            "next": "detailsA"
          },
          {
            "text": "There is a problem with the identified risk.",
            "next": "detailsB"
          }
        ]
      },
      "detailsA": {
        "bot": "What information can you provide about the possible impact?",
        "de": "Welche Informationen können Sie zu „possible impact“ geben?",
        "answers": [
          {
            "text": "The possible impact is already confirmed.",
            "next": "optionA"
          },
          {
            "text": "I still need advice about the possible impact.",
            "next": "optionB"
          }
        ]
      },
      "detailsB": {
        "bot": "What exactly needs to change about the possible impact?",
        "de": "Was genau muss bei „possible impact“ geändert werden?",
        "answers": [
          {
            "text": "I need a different option for the possible impact.",
            "next": "optionB"
          },
          {
            "text": "The current possible impact is no longer suitable.",
            "next": "optionA"
          }
        ]
      },
      "optionA": {
        "bot": "We can proceed with the mitigation plan.",
        "de": "Wir können mit „mitigation plan“ fortfahren.",
        "answers": [
          {
            "text": "Please proceed with the mitigation plan.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the mitigation plan in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "optionB": {
        "bot": "An alternative would be the mitigation plan.",
        "de": "Eine Alternative wäre „mitigation plan“.",
        "answers": [
          {
            "text": "That mitigation plan sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the mitigation plan with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How should we confirm the owner?",
        "de": "Wie sollen wir „owner“ bestätigen?",
        "answers": [
          {
            "text": "Please confirm the owner by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the owner would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you need any further details about the owner?",
        "de": "Benötigen Sie weitere Einzelheiten zu „owner“?",
        "answers": [
          {
            "text": "No, the owner is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the owner once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has been confirmed successfully.",
        "de": "Danke. Alles wurde erfolgreich bestätigt.",
        "answers": []
      }
    }
  },
  {
    "id": "branch158_medical_vaccination",
    "topic": "Gesundheit",
    "title": "Impfberatung",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Could you explain what you need regarding the travel destination?",
        "de": "Könnten Sie erklären, was Sie bezüglich „travel destination“ benötigen?",
        "answers": [
          {
            "text": "I would like to arrange the travel destination.",
            "next": "detailsA"
          },
          {
            "text": "There is a problem with the travel destination.",
            "next": "detailsB"
          }
        ]
      },
      "detailsA": {
        "bot": "What information can you provide about the vaccination history?",
        "de": "Welche Informationen können Sie zu „vaccination history“ geben?",
        "answers": [
          {
            "text": "The vaccination history is already confirmed.",
            "next": "optionA"
          },
          {
            "text": "I still need advice about the vaccination history.",
            "next": "optionB"
          }
        ]
      },
      "detailsB": {
        "bot": "What exactly needs to change about the vaccination history?",
        "de": "Was genau muss bei „vaccination history“ geändert werden?",
        "answers": [
          {
            "text": "I need a different option for the vaccination history.",
            "next": "optionB"
          },
          {
            "text": "The current vaccination history is no longer suitable.",
            "next": "optionA"
          }
        ]
      },
      "optionA": {
        "bot": "We can proceed with the recommended vaccine.",
        "de": "Wir können mit „recommended vaccine“ fortfahren.",
        "answers": [
          {
            "text": "Please proceed with the recommended vaccine.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the recommended vaccine in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "optionB": {
        "bot": "An alternative would be the recommended vaccine.",
        "de": "Eine Alternative wäre „recommended vaccine“.",
        "answers": [
          {
            "text": "That recommended vaccine sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the recommended vaccine with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How should we confirm the appointment?",
        "de": "Wie sollen wir „appointment“ bestätigen?",
        "answers": [
          {
            "text": "Please confirm the appointment by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the appointment would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you need any further details about the appointment?",
        "de": "Benötigen Sie weitere Einzelheiten zu „appointment“?",
        "answers": [
          {
            "text": "No, the appointment is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the appointment once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has been confirmed successfully.",
        "de": "Danke. Alles wurde erfolgreich bestätigt.",
        "answers": []
      }
    }
  },
  {
    "id": "branch158_event_final_check",
    "topic": "Freizeit",
    "title": "Veranstaltung abschließend prüfen",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Could you explain what you need regarding the guest number?",
        "de": "Könnten Sie erklären, was Sie bezüglich „guest number“ benötigen?",
        "answers": [
          {
            "text": "I would like to arrange the guest number.",
            "next": "detailsA"
          },
          {
            "text": "There is a problem with the guest number.",
            "next": "detailsB"
          }
        ]
      },
      "detailsA": {
        "bot": "What information can you provide about the room setup?",
        "de": "Welche Informationen können Sie zu „room setup“ geben?",
        "answers": [
          {
            "text": "The room setup is already confirmed.",
            "next": "optionA"
          },
          {
            "text": "I still need advice about the room setup.",
            "next": "optionB"
          }
        ]
      },
      "detailsB": {
        "bot": "What exactly needs to change about the room setup?",
        "de": "Was genau muss bei „room setup“ geändert werden?",
        "answers": [
          {
            "text": "I need a different option for the room setup.",
            "next": "optionB"
          },
          {
            "text": "The current room setup is no longer suitable.",
            "next": "optionA"
          }
        ]
      },
      "optionA": {
        "bot": "We can proceed with the catering time.",
        "de": "Wir können mit „catering time“ fortfahren.",
        "answers": [
          {
            "text": "Please proceed with the catering time.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the catering time in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "optionB": {
        "bot": "An alternative would be the catering time.",
        "de": "Eine Alternative wäre „catering time“.",
        "answers": [
          {
            "text": "That catering time sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the catering time with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How should we confirm the final confirmation?",
        "de": "Wie sollen wir „final confirmation“ bestätigen?",
        "answers": [
          {
            "text": "Please confirm the final confirmation by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the final confirmation would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you need any further details about the final confirmation?",
        "de": "Benötigen Sie weitere Einzelheiten zu „final confirmation“?",
        "answers": [
          {
            "text": "No, the final confirmation is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the final confirmation once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has been confirmed successfully.",
        "de": "Danke. Alles wurde erfolgreich bestätigt.",
        "answers": []
      }
    }
  }
];
ES_BRANCHING_SCENARIOS_151.push(...ES_BRANCHING_SCENARIOS_158);
