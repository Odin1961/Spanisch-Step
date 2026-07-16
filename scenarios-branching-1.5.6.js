const ES_BRANCHING_SCENARIOS_156 = [
  {
    "id": "branch156_restaurant_menu_change",
    "topic": "Restaurant",
    "title": "Menü kurzfristig ändern",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Could you explain what you need regarding the original menu?",
        "de": "Könnten Sie erklären, was Sie bezüglich „original menu“ benötigen?",
        "answers": [
          {
            "text": "I would like to arrange the original menu.",
            "next": "detailsA"
          },
          {
            "text": "There is a problem with the original menu.",
            "next": "detailsB"
          }
        ]
      },
      "detailsA": {
        "bot": "What information can you give me about the dietary request?",
        "de": "Welche Informationen können Sie zu „dietary request“ geben?",
        "answers": [
          {
            "text": "The dietary request is already confirmed.",
            "next": "optionA"
          },
          {
            "text": "I still need advice about the dietary request.",
            "next": "optionB"
          }
        ]
      },
      "detailsB": {
        "bot": "What exactly needs to change about the dietary request?",
        "de": "Was genau muss bei „dietary request“ geändert werden?",
        "answers": [
          {
            "text": "I need a different option for the dietary request.",
            "next": "optionB"
          },
          {
            "text": "The current dietary request is no longer suitable.",
            "next": "optionA"
          }
        ]
      },
      "optionA": {
        "bot": "We can proceed with the replacement dish.",
        "de": "Wir können mit „replacement dish“ fortfahren.",
        "answers": [
          {
            "text": "Please proceed with the replacement dish.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the replacement dish in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "optionB": {
        "bot": "Another possible solution is the replacement dish.",
        "de": "Eine weitere mögliche Lösung ist „replacement dish“.",
        "answers": [
          {
            "text": "That replacement dish sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the replacement dish with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How would you like the final confirmation to be confirmed?",
        "de": "Wie möchten Sie „final confirmation“ bestätigt bekommen?",
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
        "bot": "Do you need any further explanation about the final confirmation?",
        "de": "Benötigen Sie weitere Erklärungen zu „final confirmation“?",
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
        "bot": "Thank you. Everything has been updated successfully.",
        "de": "Danke. Alles wurde erfolgreich aktualisiert.",
        "answers": []
      }
    }
  },
  {
    "id": "branch156_hotel_invoice_company",
    "topic": "Hotel",
    "title": "Firmenrechnung im Hotel",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Could you explain what you need regarding the company details?",
        "de": "Könnten Sie erklären, was Sie bezüglich „company details“ benötigen?",
        "answers": [
          {
            "text": "I would like to arrange the company details.",
            "next": "detailsA"
          },
          {
            "text": "There is a problem with the company details.",
            "next": "detailsB"
          }
        ]
      },
      "detailsA": {
        "bot": "What information can you give me about the billing address?",
        "de": "Welche Informationen können Sie zu „billing address“ geben?",
        "answers": [
          {
            "text": "The billing address is already confirmed.",
            "next": "optionA"
          },
          {
            "text": "I still need advice about the billing address.",
            "next": "optionB"
          }
        ]
      },
      "detailsB": {
        "bot": "What exactly needs to change about the billing address?",
        "de": "Was genau muss bei „billing address“ geändert werden?",
        "answers": [
          {
            "text": "I need a different option for the billing address.",
            "next": "optionB"
          },
          {
            "text": "The current billing address is no longer suitable.",
            "next": "optionA"
          }
        ]
      },
      "optionA": {
        "bot": "We can proceed with the tax information.",
        "de": "Wir können mit „tax information“ fortfahren.",
        "answers": [
          {
            "text": "Please proceed with the tax information.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the tax information in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "optionB": {
        "bot": "Another possible solution is the tax information.",
        "de": "Eine weitere mögliche Lösung ist „tax information“.",
        "answers": [
          {
            "text": "That tax information sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the tax information with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How would you like the invoice delivery to be confirmed?",
        "de": "Wie möchten Sie „invoice delivery“ bestätigt bekommen?",
        "answers": [
          {
            "text": "Please confirm the invoice delivery by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the invoice delivery would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you need any further explanation about the invoice delivery?",
        "de": "Benötigen Sie weitere Erklärungen zu „invoice delivery“?",
        "answers": [
          {
            "text": "No, the invoice delivery is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the invoice delivery once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has been updated successfully.",
        "de": "Danke. Alles wurde erfolgreich aktualisiert.",
        "answers": []
      }
    }
  },
  {
    "id": "branch156_airport_connection_help",
    "topic": "Flughafen",
    "title": "Hilfe bei Anschlussflug",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Could you explain what you need regarding the arrival delay?",
        "de": "Könnten Sie erklären, was Sie bezüglich „arrival delay“ benötigen?",
        "answers": [
          {
            "text": "I would like to arrange the arrival delay.",
            "next": "detailsA"
          },
          {
            "text": "There is a problem with the arrival delay.",
            "next": "detailsB"
          }
        ]
      },
      "detailsA": {
        "bot": "What information can you give me about the connection gate?",
        "de": "Welche Informationen können Sie zu „connection gate“ geben?",
        "answers": [
          {
            "text": "The connection gate is already confirmed.",
            "next": "optionA"
          },
          {
            "text": "I still need advice about the connection gate.",
            "next": "optionB"
          }
        ]
      },
      "detailsB": {
        "bot": "What exactly needs to change about the connection gate?",
        "de": "Was genau muss bei „connection gate“ geändert werden?",
        "answers": [
          {
            "text": "I need a different option for the connection gate.",
            "next": "optionB"
          },
          {
            "text": "The current connection gate is no longer suitable.",
            "next": "optionA"
          }
        ]
      },
      "optionA": {
        "bot": "We can proceed with the minimum transfer time.",
        "de": "Wir können mit „minimum transfer time“ fortfahren.",
        "answers": [
          {
            "text": "Please proceed with the minimum transfer time.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the minimum transfer time in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "optionB": {
        "bot": "Another possible solution is the minimum transfer time.",
        "de": "Eine weitere mögliche Lösung ist „minimum transfer time“.",
        "answers": [
          {
            "text": "That minimum transfer time sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the minimum transfer time with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How would you like the rebooking option to be confirmed?",
        "de": "Wie möchten Sie „rebooking option“ bestätigt bekommen?",
        "answers": [
          {
            "text": "Please confirm the rebooking option by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the rebooking option would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you need any further explanation about the rebooking option?",
        "de": "Benötigen Sie weitere Erklärungen zu „rebooking option“?",
        "answers": [
          {
            "text": "No, the rebooking option is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the rebooking option once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has been updated successfully.",
        "de": "Danke. Alles wurde erfolgreich aktualisiert.",
        "answers": []
      }
    }
  },
  {
    "id": "branch156_train_group_ticket",
    "topic": "Bahnhof",
    "title": "Gruppenfahrkarte kaufen",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Could you explain what you need regarding the group size?",
        "de": "Könnten Sie erklären, was Sie bezüglich „group size“ benötigen?",
        "answers": [
          {
            "text": "I would like to arrange the group size.",
            "next": "detailsA"
          },
          {
            "text": "There is a problem with the group size.",
            "next": "detailsB"
          }
        ]
      },
      "detailsA": {
        "bot": "What information can you give me about the travel date?",
        "de": "Welche Informationen können Sie zu „travel date“ geben?",
        "answers": [
          {
            "text": "The travel date is already confirmed.",
            "next": "optionA"
          },
          {
            "text": "I still need advice about the travel date.",
            "next": "optionB"
          }
        ]
      },
      "detailsB": {
        "bot": "What exactly needs to change about the travel date?",
        "de": "Was genau muss bei „travel date“ geändert werden?",
        "answers": [
          {
            "text": "I need a different option for the travel date.",
            "next": "optionB"
          },
          {
            "text": "The current travel date is no longer suitable.",
            "next": "optionA"
          }
        ]
      },
      "optionA": {
        "bot": "We can proceed with the ticket type.",
        "de": "Wir können mit „ticket type“ fortfahren.",
        "answers": [
          {
            "text": "Please proceed with the ticket type.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the ticket type in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "optionB": {
        "bot": "Another possible solution is the ticket type.",
        "de": "Eine weitere mögliche Lösung ist „ticket type“.",
        "answers": [
          {
            "text": "That ticket type sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the ticket type with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How would you like the seat reservation to be confirmed?",
        "de": "Wie möchten Sie „seat reservation“ bestätigt bekommen?",
        "answers": [
          {
            "text": "Please confirm the seat reservation by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the seat reservation would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you need any further explanation about the seat reservation?",
        "de": "Benötigen Sie weitere Erklärungen zu „seat reservation“?",
        "answers": [
          {
            "text": "No, the seat reservation is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the seat reservation once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has been updated successfully.",
        "de": "Danke. Alles wurde erfolgreich aktualisiert.",
        "answers": []
      }
    }
  },
  {
    "id": "branch156_taxi_accessibility",
    "topic": "Taxi",
    "title": "Barrierefreies Taxi bestellen",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Could you explain what you need regarding the mobility need?",
        "de": "Könnten Sie erklären, was Sie bezüglich „mobility need“ benötigen?",
        "answers": [
          {
            "text": "I would like to arrange the mobility need.",
            "next": "detailsA"
          },
          {
            "text": "There is a problem with the mobility need.",
            "next": "detailsB"
          }
        ]
      },
      "detailsA": {
        "bot": "What information can you give me about the vehicle requirement?",
        "de": "Welche Informationen können Sie zu „vehicle requirement“ geben?",
        "answers": [
          {
            "text": "The vehicle requirement is already confirmed.",
            "next": "optionA"
          },
          {
            "text": "I still need advice about the vehicle requirement.",
            "next": "optionB"
          }
        ]
      },
      "detailsB": {
        "bot": "What exactly needs to change about the vehicle requirement?",
        "de": "Was genau muss bei „vehicle requirement“ geändert werden?",
        "answers": [
          {
            "text": "I need a different option for the vehicle requirement.",
            "next": "optionB"
          },
          {
            "text": "The current vehicle requirement is no longer suitable.",
            "next": "optionA"
          }
        ]
      },
      "optionA": {
        "bot": "We can proceed with the pickup location.",
        "de": "Wir können mit „pickup location“ fortfahren.",
        "answers": [
          {
            "text": "Please proceed with the pickup location.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the pickup location in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "optionB": {
        "bot": "Another possible solution is the pickup location.",
        "de": "Eine weitere mögliche Lösung ist „pickup location“.",
        "answers": [
          {
            "text": "That pickup location sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the pickup location with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How would you like the driver confirmation to be confirmed?",
        "de": "Wie möchten Sie „driver confirmation“ bestätigt bekommen?",
        "answers": [
          {
            "text": "Please confirm the driver confirmation by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the driver confirmation would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you need any further explanation about the driver confirmation?",
        "de": "Benötigen Sie weitere Erklärungen zu „driver confirmation“?",
        "answers": [
          {
            "text": "No, the driver confirmation is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the driver confirmation once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has been updated successfully.",
        "de": "Danke. Alles wurde erfolgreich aktualisiert.",
        "answers": []
      }
    }
  },
  {
    "id": "branch156_rental_return_damage",
    "topic": "Autovermietung",
    "title": "Schaden bei Rückgabe",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Could you explain what you need regarding the vehicle damage?",
        "de": "Könnten Sie erklären, was Sie bezüglich „vehicle damage“ benötigen?",
        "answers": [
          {
            "text": "I would like to arrange the vehicle damage.",
            "next": "detailsA"
          },
          {
            "text": "There is a problem with the vehicle damage.",
            "next": "detailsB"
          }
        ]
      },
      "detailsA": {
        "bot": "What information can you give me about the inspection report?",
        "de": "Welche Informationen können Sie zu „inspection report“ geben?",
        "answers": [
          {
            "text": "The inspection report is already confirmed.",
            "next": "optionA"
          },
          {
            "text": "I still need advice about the inspection report.",
            "next": "optionB"
          }
        ]
      },
      "detailsB": {
        "bot": "What exactly needs to change about the inspection report?",
        "de": "Was genau muss bei „inspection report“ geändert werden?",
        "answers": [
          {
            "text": "I need a different option for the inspection report.",
            "next": "optionB"
          },
          {
            "text": "The current inspection report is no longer suitable.",
            "next": "optionA"
          }
        ]
      },
      "optionA": {
        "bot": "We can proceed with the insurance cover.",
        "de": "Wir können mit „insurance cover“ fortfahren.",
        "answers": [
          {
            "text": "Please proceed with the insurance cover.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the insurance cover in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "optionB": {
        "bot": "Another possible solution is the insurance cover.",
        "de": "Eine weitere mögliche Lösung ist „insurance cover“.",
        "answers": [
          {
            "text": "That insurance cover sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the insurance cover with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How would you like the final charge to be confirmed?",
        "de": "Wie möchten Sie „final charge“ bestätigt bekommen?",
        "answers": [
          {
            "text": "Please confirm the final charge by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the final charge would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you need any further explanation about the final charge?",
        "de": "Benötigen Sie weitere Erklärungen zu „final charge“?",
        "answers": [
          {
            "text": "No, the final charge is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the final charge once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has been updated successfully.",
        "de": "Danke. Alles wurde erfolgreich aktualisiert.",
        "answers": []
      }
    }
  },
  {
    "id": "branch156_shopping_delivery_window",
    "topic": "Einkaufen",
    "title": "Lieferzeitfenster ändern",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Could you explain what you need regarding the order number?",
        "de": "Könnten Sie erklären, was Sie bezüglich „order number“ benötigen?",
        "answers": [
          {
            "text": "I would like to arrange the order number.",
            "next": "detailsA"
          },
          {
            "text": "There is a problem with the order number.",
            "next": "detailsB"
          }
        ]
      },
      "detailsA": {
        "bot": "What information can you give me about the current delivery window?",
        "de": "Welche Informationen können Sie zu „current delivery window“ geben?",
        "answers": [
          {
            "text": "The current delivery window is already confirmed.",
            "next": "optionA"
          },
          {
            "text": "I still need advice about the current delivery window.",
            "next": "optionB"
          }
        ]
      },
      "detailsB": {
        "bot": "What exactly needs to change about the current delivery window?",
        "de": "Was genau muss bei „current delivery window“ geändert werden?",
        "answers": [
          {
            "text": "I need a different option for the current delivery window.",
            "next": "optionB"
          },
          {
            "text": "The current current delivery window is no longer suitable.",
            "next": "optionA"
          }
        ]
      },
      "optionA": {
        "bot": "We can proceed with the new time slot.",
        "de": "Wir können mit „new time slot“ fortfahren.",
        "answers": [
          {
            "text": "Please proceed with the new time slot.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the new time slot in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "optionB": {
        "bot": "Another possible solution is the new time slot.",
        "de": "Eine weitere mögliche Lösung ist „new time slot“.",
        "answers": [
          {
            "text": "That new time slot sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the new time slot with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How would you like the confirmation to be confirmed?",
        "de": "Wie möchten Sie „confirmation“ bestätigt bekommen?",
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
        "bot": "Do you need any further explanation about the confirmation?",
        "de": "Benötigen Sie weitere Erklärungen zu „confirmation“?",
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
        "bot": "Thank you. Everything has been updated successfully.",
        "de": "Danke. Alles wurde erfolgreich aktualisiert.",
        "answers": []
      }
    }
  },
  {
    "id": "branch156_doctor_test_results",
    "topic": "Gesundheit",
    "title": "Testergebnisse verstehen",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Could you explain what you need regarding the test type?",
        "de": "Könnten Sie erklären, was Sie bezüglich „test type“ benötigen?",
        "answers": [
          {
            "text": "I would like to arrange the test type.",
            "next": "detailsA"
          },
          {
            "text": "There is a problem with the test type.",
            "next": "detailsB"
          }
        ]
      },
      "detailsA": {
        "bot": "What information can you give me about the main result?",
        "de": "Welche Informationen können Sie zu „main result“ geben?",
        "answers": [
          {
            "text": "The main result is already confirmed.",
            "next": "optionA"
          },
          {
            "text": "I still need advice about the main result.",
            "next": "optionB"
          }
        ]
      },
      "detailsB": {
        "bot": "What exactly needs to change about the main result?",
        "de": "Was genau muss bei „main result“ geändert werden?",
        "answers": [
          {
            "text": "I need a different option for the main result.",
            "next": "optionB"
          },
          {
            "text": "The current main result is no longer suitable.",
            "next": "optionA"
          }
        ]
      },
      "optionA": {
        "bot": "We can proceed with the recommended next step.",
        "de": "Wir können mit „recommended next step“ fortfahren.",
        "answers": [
          {
            "text": "Please proceed with the recommended next step.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the recommended next step in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "optionB": {
        "bot": "Another possible solution is the recommended next step.",
        "de": "Eine weitere mögliche Lösung ist „recommended next step“.",
        "answers": [
          {
            "text": "That recommended next step sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the recommended next step with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How would you like the follow-up appointment to be confirmed?",
        "de": "Wie möchten Sie „follow-up appointment“ bestätigt bekommen?",
        "answers": [
          {
            "text": "Please confirm the follow-up appointment by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the follow-up appointment would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you need any further explanation about the follow-up appointment?",
        "de": "Benötigen Sie weitere Erklärungen zu „follow-up appointment“?",
        "answers": [
          {
            "text": "No, the follow-up appointment is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the follow-up appointment once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has been updated successfully.",
        "de": "Danke. Alles wurde erfolgreich aktualisiert.",
        "answers": []
      }
    }
  },
  {
    "id": "branch156_pharmacy_repeat_prescription",
    "topic": "Apotheke",
    "title": "Wiederholungsrezept",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Could you explain what you need regarding the medicine name?",
        "de": "Könnten Sie erklären, was Sie bezüglich „medicine name“ benötigen?",
        "answers": [
          {
            "text": "I would like to arrange the medicine name.",
            "next": "detailsA"
          },
          {
            "text": "There is a problem with the medicine name.",
            "next": "detailsB"
          }
        ]
      },
      "detailsA": {
        "bot": "What information can you give me about the remaining supply?",
        "de": "Welche Informationen können Sie zu „remaining supply“ geben?",
        "answers": [
          {
            "text": "The remaining supply is already confirmed.",
            "next": "optionA"
          },
          {
            "text": "I still need advice about the remaining supply.",
            "next": "optionB"
          }
        ]
      },
      "detailsB": {
        "bot": "What exactly needs to change about the remaining supply?",
        "de": "Was genau muss bei „remaining supply“ geändert werden?",
        "answers": [
          {
            "text": "I need a different option for the remaining supply.",
            "next": "optionB"
          },
          {
            "text": "The current remaining supply is no longer suitable.",
            "next": "optionA"
          }
        ]
      },
      "optionA": {
        "bot": "We can proceed with the prescription renewal.",
        "de": "Wir können mit „prescription renewal“ fortfahren.",
        "answers": [
          {
            "text": "Please proceed with the prescription renewal.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the prescription renewal in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "optionB": {
        "bot": "Another possible solution is the prescription renewal.",
        "de": "Eine weitere mögliche Lösung ist „prescription renewal“.",
        "answers": [
          {
            "text": "That prescription renewal sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the prescription renewal with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How would you like the collection date to be confirmed?",
        "de": "Wie möchten Sie „collection date“ bestätigt bekommen?",
        "answers": [
          {
            "text": "Please confirm the collection date by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the collection date would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you need any further explanation about the collection date?",
        "de": "Benötigen Sie weitere Erklärungen zu „collection date“?",
        "answers": [
          {
            "text": "No, the collection date is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the collection date once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has been updated successfully.",
        "de": "Danke. Alles wurde erfolgreich aktualisiert.",
        "answers": []
      }
    }
  },
  {
    "id": "branch156_work_resource_request",
    "topic": "Beruf",
    "title": "Zusätzliche Ressourcen beantragen",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Could you explain what you need regarding the current workload?",
        "de": "Könnten Sie erklären, was Sie bezüglich „current workload“ benötigen?",
        "answers": [
          {
            "text": "I would like to arrange the current workload.",
            "next": "detailsA"
          },
          {
            "text": "There is a problem with the current workload.",
            "next": "detailsB"
          }
        ]
      },
      "detailsA": {
        "bot": "What information can you give me about the resource gap?",
        "de": "Welche Informationen können Sie zu „resource gap“ geben?",
        "answers": [
          {
            "text": "The resource gap is already confirmed.",
            "next": "optionA"
          },
          {
            "text": "I still need advice about the resource gap.",
            "next": "optionB"
          }
        ]
      },
      "detailsB": {
        "bot": "What exactly needs to change about the resource gap?",
        "de": "Was genau muss bei „resource gap“ geändert werden?",
        "answers": [
          {
            "text": "I need a different option for the resource gap.",
            "next": "optionB"
          },
          {
            "text": "The current resource gap is no longer suitable.",
            "next": "optionA"
          }
        ]
      },
      "optionA": {
        "bot": "We can proceed with the business reason.",
        "de": "Wir können mit „business reason“ fortfahren.",
        "answers": [
          {
            "text": "Please proceed with the business reason.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the business reason in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "optionB": {
        "bot": "Another possible solution is the business reason.",
        "de": "Eine weitere mögliche Lösung ist „business reason“.",
        "answers": [
          {
            "text": "That business reason sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the business reason with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How would you like the approval route to be confirmed?",
        "de": "Wie möchten Sie „approval route“ bestätigt bekommen?",
        "answers": [
          {
            "text": "Please confirm the approval route by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the approval route would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you need any further explanation about the approval route?",
        "de": "Benötigen Sie weitere Erklärungen zu „approval route“?",
        "answers": [
          {
            "text": "No, the approval route is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the approval route once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has been updated successfully.",
        "de": "Danke. Alles wurde erfolgreich aktualisiert.",
        "answers": []
      }
    }
  },
  {
    "id": "branch156_phone_complaint_followup",
    "topic": "Telefon",
    "title": "Beschwerde nachverfolgen",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Could you explain what you need regarding the case number?",
        "de": "Könnten Sie erklären, was Sie bezüglich „case number“ benötigen?",
        "answers": [
          {
            "text": "I would like to arrange the case number.",
            "next": "detailsA"
          },
          {
            "text": "There is a problem with the case number.",
            "next": "detailsB"
          }
        ]
      },
      "detailsA": {
        "bot": "What information can you give me about the previous response?",
        "de": "Welche Informationen können Sie zu „previous response“ geben?",
        "answers": [
          {
            "text": "The previous response is already confirmed.",
            "next": "optionA"
          },
          {
            "text": "I still need advice about the previous response.",
            "next": "optionB"
          }
        ]
      },
      "detailsB": {
        "bot": "What exactly needs to change about the previous response?",
        "de": "Was genau muss bei „previous response“ geändert werden?",
        "answers": [
          {
            "text": "I need a different option for the previous response.",
            "next": "optionB"
          },
          {
            "text": "The current previous response is no longer suitable.",
            "next": "optionA"
          }
        ]
      },
      "optionA": {
        "bot": "We can proceed with the expected outcome.",
        "de": "Wir können mit „expected outcome“ fortfahren.",
        "answers": [
          {
            "text": "Please proceed with the expected outcome.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the expected outcome in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "optionB": {
        "bot": "Another possible solution is the expected outcome.",
        "de": "Eine weitere mögliche Lösung ist „expected outcome“.",
        "answers": [
          {
            "text": "That expected outcome sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the expected outcome with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How would you like the next update to be confirmed?",
        "de": "Wie möchten Sie „next update“ bestätigt bekommen?",
        "answers": [
          {
            "text": "Please confirm the next update by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the next update would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you need any further explanation about the next update?",
        "de": "Benötigen Sie weitere Erklärungen zu „next update“?",
        "answers": [
          {
            "text": "No, the next update is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the next update once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has been updated successfully.",
        "de": "Danke. Alles wurde erfolgreich aktualisiert.",
        "answers": []
      }
    }
  },
  {
    "id": "branch156_bank_direct_debit",
    "topic": "Bank",
    "title": "Lastschrift prüfen",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Could you explain what you need regarding the payment date?",
        "de": "Könnten Sie erklären, was Sie bezüglich „payment date“ benötigen?",
        "answers": [
          {
            "text": "I would like to arrange the payment date.",
            "next": "detailsA"
          },
          {
            "text": "There is a problem with the payment date.",
            "next": "detailsB"
          }
        ]
      },
      "detailsA": {
        "bot": "What information can you give me about the company name?",
        "de": "Welche Informationen können Sie zu „company name“ geben?",
        "answers": [
          {
            "text": "The company name is already confirmed.",
            "next": "optionA"
          },
          {
            "text": "I still need advice about the company name.",
            "next": "optionB"
          }
        ]
      },
      "detailsB": {
        "bot": "What exactly needs to change about the company name?",
        "de": "Was genau muss bei „company name“ geändert werden?",
        "answers": [
          {
            "text": "I need a different option for the company name.",
            "next": "optionB"
          },
          {
            "text": "The current company name is no longer suitable.",
            "next": "optionA"
          }
        ]
      },
      "optionA": {
        "bot": "We can proceed with the incorrect amount.",
        "de": "Wir können mit „incorrect amount“ fortfahren.",
        "answers": [
          {
            "text": "Please proceed with the incorrect amount.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the incorrect amount in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "optionB": {
        "bot": "Another possible solution is the incorrect amount.",
        "de": "Eine weitere mögliche Lösung ist „incorrect amount“.",
        "answers": [
          {
            "text": "That incorrect amount sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the incorrect amount with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How would you like the refund request to be confirmed?",
        "de": "Wie möchten Sie „refund request“ bestätigt bekommen?",
        "answers": [
          {
            "text": "Please confirm the refund request by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the refund request would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you need any further explanation about the refund request?",
        "de": "Benötigen Sie weitere Erklärungen zu „refund request“?",
        "answers": [
          {
            "text": "No, the refund request is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the refund request once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has been updated successfully.",
        "de": "Danke. Alles wurde erfolgreich aktualisiert.",
        "answers": []
      }
    }
  },
  {
    "id": "branch156_post_address_error",
    "topic": "Post",
    "title": "Falsche Adresse korrigieren",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Could you explain what you need regarding the parcel number?",
        "de": "Könnten Sie erklären, was Sie bezüglich „parcel number“ benötigen?",
        "answers": [
          {
            "text": "I would like to arrange the parcel number.",
            "next": "detailsA"
          },
          {
            "text": "There is a problem with the parcel number.",
            "next": "detailsB"
          }
        ]
      },
      "detailsA": {
        "bot": "What information can you give me about the incorrect address?",
        "de": "Welche Informationen können Sie zu „incorrect address“ geben?",
        "answers": [
          {
            "text": "The incorrect address is already confirmed.",
            "next": "optionA"
          },
          {
            "text": "I still need advice about the incorrect address.",
            "next": "optionB"
          }
        ]
      },
      "detailsB": {
        "bot": "What exactly needs to change about the incorrect address?",
        "de": "Was genau muss bei „incorrect address“ geändert werden?",
        "answers": [
          {
            "text": "I need a different option for the incorrect address.",
            "next": "optionB"
          },
          {
            "text": "The current incorrect address is no longer suitable.",
            "next": "optionA"
          }
        ]
      },
      "optionA": {
        "bot": "We can proceed with the correct address.",
        "de": "Wir können mit „correct address“ fortfahren.",
        "answers": [
          {
            "text": "Please proceed with the correct address.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the correct address in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "optionB": {
        "bot": "Another possible solution is the correct address.",
        "de": "Eine weitere mögliche Lösung ist „correct address“.",
        "answers": [
          {
            "text": "That correct address sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the correct address with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How would you like the redirection fee to be confirmed?",
        "de": "Wie möchten Sie „redirection fee“ bestätigt bekommen?",
        "answers": [
          {
            "text": "Please confirm the redirection fee by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the redirection fee would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you need any further explanation about the redirection fee?",
        "de": "Benötigen Sie weitere Erklärungen zu „redirection fee“?",
        "answers": [
          {
            "text": "No, the redirection fee is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the redirection fee once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has been updated successfully.",
        "de": "Danke. Alles wurde erfolgreich aktualisiert.",
        "answers": []
      }
    }
  },
  {
    "id": "branch156_museum_private_tour",
    "topic": "Museum",
    "title": "Private Führung buchen",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Could you explain what you need regarding the group size?",
        "de": "Könnten Sie erklären, was Sie bezüglich „group size“ benötigen?",
        "answers": [
          {
            "text": "I would like to arrange the group size.",
            "next": "detailsA"
          },
          {
            "text": "There is a problem with the group size.",
            "next": "detailsB"
          }
        ]
      },
      "detailsA": {
        "bot": "What information can you give me about the preferred language?",
        "de": "Welche Informationen können Sie zu „preferred language“ geben?",
        "answers": [
          {
            "text": "The preferred language is already confirmed.",
            "next": "optionA"
          },
          {
            "text": "I still need advice about the preferred language.",
            "next": "optionB"
          }
        ]
      },
      "detailsB": {
        "bot": "What exactly needs to change about the preferred language?",
        "de": "Was genau muss bei „preferred language“ geändert werden?",
        "answers": [
          {
            "text": "I need a different option for the preferred language.",
            "next": "optionB"
          },
          {
            "text": "The current preferred language is no longer suitable.",
            "next": "optionA"
          }
        ]
      },
      "optionA": {
        "bot": "We can proceed with the tour duration.",
        "de": "Wir können mit „tour duration“ fortfahren.",
        "answers": [
          {
            "text": "Please proceed with the tour duration.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the tour duration in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "optionB": {
        "bot": "Another possible solution is the tour duration.",
        "de": "Eine weitere mögliche Lösung ist „tour duration“.",
        "answers": [
          {
            "text": "That tour duration sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the tour duration with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How would you like the final price to be confirmed?",
        "de": "Wie möchten Sie „final price“ bestätigt bekommen?",
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
        "bot": "Do you need any further explanation about the final price?",
        "de": "Benötigen Sie weitere Erklärungen zu „final price“?",
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
        "bot": "Thank you. Everything has been updated successfully.",
        "de": "Danke. Alles wurde erfolgreich aktualisiert.",
        "answers": []
      }
    }
  },
  {
    "id": "branch156_camping_early_departure",
    "topic": "Camping",
    "title": "Früher abreisen",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Could you explain what you need regarding the booking dates?",
        "de": "Könnten Sie erklären, was Sie bezüglich „booking dates“ benötigen?",
        "answers": [
          {
            "text": "I would like to arrange the booking dates.",
            "next": "detailsA"
          },
          {
            "text": "There is a problem with the booking dates.",
            "next": "detailsB"
          }
        ]
      },
      "detailsA": {
        "bot": "What information can you give me about the reason for departure?",
        "de": "Welche Informationen können Sie zu „reason for departure“ geben?",
        "answers": [
          {
            "text": "The reason for departure is already confirmed.",
            "next": "optionA"
          },
          {
            "text": "I still need advice about the reason for departure.",
            "next": "optionB"
          }
        ]
      },
      "detailsB": {
        "bot": "What exactly needs to change about the reason for departure?",
        "de": "Was genau muss bei „reason for departure“ geändert werden?",
        "answers": [
          {
            "text": "I need a different option for the reason for departure.",
            "next": "optionB"
          },
          {
            "text": "The current reason for departure is no longer suitable.",
            "next": "optionA"
          }
        ]
      },
      "optionA": {
        "bot": "We can proceed with the refund policy.",
        "de": "Wir können mit „refund policy“ fortfahren.",
        "answers": [
          {
            "text": "Please proceed with the refund policy.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the refund policy in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "optionB": {
        "bot": "Another possible solution is the refund policy.",
        "de": "Eine weitere mögliche Lösung ist „refund policy“.",
        "answers": [
          {
            "text": "That refund policy sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the refund policy with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How would you like the checkout to be confirmed?",
        "de": "Wie möchten Sie „checkout“ bestätigt bekommen?",
        "answers": [
          {
            "text": "Please confirm the checkout by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the checkout would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you need any further explanation about the checkout?",
        "de": "Benötigen Sie weitere Erklärungen zu „checkout“?",
        "answers": [
          {
            "text": "No, the checkout is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the checkout once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has been updated successfully.",
        "de": "Danke. Alles wurde erfolgreich aktualisiert.",
        "answers": []
      }
    }
  },
  {
    "id": "branch156_university_certificate",
    "topic": "Bildung",
    "title": "Kurszertifikat anfordern",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Could you explain what you need regarding the course name?",
        "de": "Könnten Sie erklären, was Sie bezüglich „course name“ benötigen?",
        "answers": [
          {
            "text": "I would like to arrange the course name.",
            "next": "detailsA"
          },
          {
            "text": "There is a problem with the course name.",
            "next": "detailsB"
          }
        ]
      },
      "detailsA": {
        "bot": "What information can you give me about the completion date?",
        "de": "Welche Informationen können Sie zu „completion date“ geben?",
        "answers": [
          {
            "text": "The completion date is already confirmed.",
            "next": "optionA"
          },
          {
            "text": "I still need advice about the completion date.",
            "next": "optionB"
          }
        ]
      },
      "detailsB": {
        "bot": "What exactly needs to change about the completion date?",
        "de": "Was genau muss bei „completion date“ geändert werden?",
        "answers": [
          {
            "text": "I need a different option for the completion date.",
            "next": "optionB"
          },
          {
            "text": "The current completion date is no longer suitable.",
            "next": "optionA"
          }
        ]
      },
      "optionA": {
        "bot": "We can proceed with the name spelling.",
        "de": "Wir können mit „name spelling“ fortfahren.",
        "answers": [
          {
            "text": "Please proceed with the name spelling.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the name spelling in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "optionB": {
        "bot": "Another possible solution is the name spelling.",
        "de": "Eine weitere mögliche Lösung ist „name spelling“.",
        "answers": [
          {
            "text": "That name spelling sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the name spelling with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How would you like the delivery method to be confirmed?",
        "de": "Wie möchten Sie „delivery method“ bestätigt bekommen?",
        "answers": [
          {
            "text": "Please confirm the delivery method by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the delivery method would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you need any further explanation about the delivery method?",
        "de": "Benötigen Sie weitere Erklärungen zu „delivery method“?",
        "answers": [
          {
            "text": "No, the delivery method is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the delivery method once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has been updated successfully.",
        "de": "Danke. Alles wurde erfolgreich aktualisiert.",
        "answers": []
      }
    }
  },
  {
    "id": "branch156_sport_cancel_class",
    "topic": "Sport",
    "title": "Fitnesskurs absagen",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Could you explain what you need regarding the class name?",
        "de": "Könnten Sie erklären, was Sie bezüglich „class name“ benötigen?",
        "answers": [
          {
            "text": "I would like to arrange the class name.",
            "next": "detailsA"
          },
          {
            "text": "There is a problem with the class name.",
            "next": "detailsB"
          }
        ]
      },
      "detailsA": {
        "bot": "What information can you give me about the booking date?",
        "de": "Welche Informationen können Sie zu „booking date“ geben?",
        "answers": [
          {
            "text": "The booking date is already confirmed.",
            "next": "optionA"
          },
          {
            "text": "I still need advice about the booking date.",
            "next": "optionB"
          }
        ]
      },
      "detailsB": {
        "bot": "What exactly needs to change about the booking date?",
        "de": "Was genau muss bei „booking date“ geändert werden?",
        "answers": [
          {
            "text": "I need a different option for the booking date.",
            "next": "optionB"
          },
          {
            "text": "The current booking date is no longer suitable.",
            "next": "optionA"
          }
        ]
      },
      "optionA": {
        "bot": "We can proceed with the cancellation deadline.",
        "de": "Wir können mit „cancellation deadline“ fortfahren.",
        "answers": [
          {
            "text": "Please proceed with the cancellation deadline.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the cancellation deadline in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "optionB": {
        "bot": "Another possible solution is the cancellation deadline.",
        "de": "Eine weitere mögliche Lösung ist „cancellation deadline“.",
        "answers": [
          {
            "text": "That cancellation deadline sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the cancellation deadline with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How would you like the credit to be confirmed?",
        "de": "Wie möchten Sie „credit“ bestätigt bekommen?",
        "answers": [
          {
            "text": "Please confirm the credit by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the credit would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you need any further explanation about the credit?",
        "de": "Benötigen Sie weitere Erklärungen zu „credit“?",
        "answers": [
          {
            "text": "No, the credit is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the credit once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has been updated successfully.",
        "de": "Danke. Alles wurde erfolgreich aktualisiert.",
        "answers": []
      }
    }
  },
  {
    "id": "branch156_neighbour_shared_garden",
    "topic": "Wohnen",
    "title": "Gemeinsamen Garten organisieren",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Could you explain what you need regarding the garden use?",
        "de": "Könnten Sie erklären, was Sie bezüglich „garden use“ benötigen?",
        "answers": [
          {
            "text": "I would like to arrange the garden use.",
            "next": "detailsA"
          },
          {
            "text": "There is a problem with the garden use.",
            "next": "detailsB"
          }
        ]
      },
      "detailsA": {
        "bot": "What information can you give me about the maintenance task?",
        "de": "Welche Informationen können Sie zu „maintenance task“ geben?",
        "answers": [
          {
            "text": "The maintenance task is already confirmed.",
            "next": "optionA"
          },
          {
            "text": "I still need advice about the maintenance task.",
            "next": "optionB"
          }
        ]
      },
      "detailsB": {
        "bot": "What exactly needs to change about the maintenance task?",
        "de": "Was genau muss bei „maintenance task“ geändert werden?",
        "answers": [
          {
            "text": "I need a different option for the maintenance task.",
            "next": "optionB"
          },
          {
            "text": "The current maintenance task is no longer suitable.",
            "next": "optionA"
          }
        ]
      },
      "optionA": {
        "bot": "We can proceed with the shared cost.",
        "de": "Wir können mit „shared cost“ fortfahren.",
        "answers": [
          {
            "text": "Please proceed with the shared cost.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the shared cost in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "optionB": {
        "bot": "Another possible solution is the shared cost.",
        "de": "Eine weitere mögliche Lösung ist „shared cost“.",
        "answers": [
          {
            "text": "That shared cost sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the shared cost with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How would you like the agreement to be confirmed?",
        "de": "Wie möchten Sie „agreement“ bestätigt bekommen?",
        "answers": [
          {
            "text": "Please confirm the agreement by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the agreement would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you need any further explanation about the agreement?",
        "de": "Benötigen Sie weitere Erklärungen zu „agreement“?",
        "answers": [
          {
            "text": "No, the agreement is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the agreement once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has been updated successfully.",
        "de": "Danke. Alles wurde erfolgreich aktualisiert.",
        "answers": []
      }
    }
  },
  {
    "id": "branch156_internet_security_setup",
    "topic": "Internet",
    "title": "Sicheres WLAN einrichten",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Could you explain what you need regarding the router model?",
        "de": "Könnten Sie erklären, was Sie bezüglich „router model“ benötigen?",
        "answers": [
          {
            "text": "I would like to arrange the router model.",
            "next": "detailsA"
          },
          {
            "text": "There is a problem with the router model.",
            "next": "detailsB"
          }
        ]
      },
      "detailsA": {
        "bot": "What information can you give me about the network password?",
        "de": "Welche Informationen können Sie zu „network password“ geben?",
        "answers": [
          {
            "text": "The network password is already confirmed.",
            "next": "optionA"
          },
          {
            "text": "I still need advice about the network password.",
            "next": "optionB"
          }
        ]
      },
      "detailsB": {
        "bot": "What exactly needs to change about the network password?",
        "de": "Was genau muss bei „network password“ geändert werden?",
        "answers": [
          {
            "text": "I need a different option for the network password.",
            "next": "optionB"
          },
          {
            "text": "The current network password is no longer suitable.",
            "next": "optionA"
          }
        ]
      },
      "optionA": {
        "bot": "We can proceed with the guest network.",
        "de": "Wir können mit „guest network“ fortfahren.",
        "answers": [
          {
            "text": "Please proceed with the guest network.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the guest network in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "optionB": {
        "bot": "Another possible solution is the guest network.",
        "de": "Eine weitere mögliche Lösung ist „guest network“.",
        "answers": [
          {
            "text": "That guest network sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the guest network with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How would you like the final test to be confirmed?",
        "de": "Wie möchten Sie „final test“ bestätigt bekommen?",
        "answers": [
          {
            "text": "Please confirm the final test by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the final test would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you need any further explanation about the final test?",
        "de": "Benötigen Sie weitere Erklärungen zu „final test“?",
        "answers": [
          {
            "text": "No, the final test is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the final test once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has been updated successfully.",
        "de": "Danke. Alles wurde erfolgreich aktualisiert.",
        "answers": []
      }
    }
  },
  {
    "id": "branch156_environment_waste_collection",
    "topic": "Umwelt",
    "title": "Müllabholung verbessern",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Could you explain what you need regarding the current problem?",
        "de": "Könnten Sie erklären, was Sie bezüglich „current problem“ benötigen?",
        "answers": [
          {
            "text": "I would like to arrange the current problem.",
            "next": "detailsA"
          },
          {
            "text": "There is a problem with the current problem.",
            "next": "detailsB"
          }
        ]
      },
      "detailsA": {
        "bot": "What information can you give me about the collection frequency?",
        "de": "Welche Informationen können Sie zu „collection frequency“ geben?",
        "answers": [
          {
            "text": "The collection frequency is already confirmed.",
            "next": "optionA"
          },
          {
            "text": "I still need advice about the collection frequency.",
            "next": "optionB"
          }
        ]
      },
      "detailsB": {
        "bot": "What exactly needs to change about the collection frequency?",
        "de": "Was genau muss bei „collection frequency“ geändert werden?",
        "answers": [
          {
            "text": "I need a different option for the collection frequency.",
            "next": "optionB"
          },
          {
            "text": "The current collection frequency is no longer suitable.",
            "next": "optionA"
          }
        ]
      },
      "optionA": {
        "bot": "We can proceed with the new container.",
        "de": "Wir können mit „new container“ fortfahren.",
        "answers": [
          {
            "text": "Please proceed with the new container.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the new container in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "optionB": {
        "bot": "Another possible solution is the new container.",
        "de": "Eine weitere mögliche Lösung ist „new container“.",
        "answers": [
          {
            "text": "That new container sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the new container with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How would you like the implementation date to be confirmed?",
        "de": "Wie möchten Sie „implementation date“ bestätigt bekommen?",
        "answers": [
          {
            "text": "Please confirm the implementation date by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the implementation date would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you need any further explanation about the implementation date?",
        "de": "Benötigen Sie weitere Erklärungen zu „implementation date“?",
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
        "bot": "Thank you. Everything has been updated successfully.",
        "de": "Danke. Alles wurde erfolgreich aktualisiert.",
        "answers": []
      }
    }
  },
  {
    "id": "branch156_smalltalk_books",
    "topic": "Small Talk",
    "title": "Über Bücher sprechen",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Could you explain what you need regarding the recent book?",
        "de": "Könnten Sie erklären, was Sie bezüglich „recent book“ benötigen?",
        "answers": [
          {
            "text": "I would like to arrange the recent book.",
            "next": "detailsA"
          },
          {
            "text": "There is a problem with the recent book.",
            "next": "detailsB"
          }
        ]
      },
      "detailsA": {
        "bot": "What information can you give me about the favourite genre?",
        "de": "Welche Informationen können Sie zu „favourite genre“ geben?",
        "answers": [
          {
            "text": "The favourite genre is already confirmed.",
            "next": "optionA"
          },
          {
            "text": "I still need advice about the favourite genre.",
            "next": "optionB"
          }
        ]
      },
      "detailsB": {
        "bot": "What exactly needs to change about the favourite genre?",
        "de": "Was genau muss bei „favourite genre“ geändert werden?",
        "answers": [
          {
            "text": "I need a different option for the favourite genre.",
            "next": "optionB"
          },
          {
            "text": "The current favourite genre is no longer suitable.",
            "next": "optionA"
          }
        ]
      },
      "optionA": {
        "bot": "We can proceed with the author recommendation.",
        "de": "Wir können mit „author recommendation“ fortfahren.",
        "answers": [
          {
            "text": "Please proceed with the author recommendation.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the author recommendation in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "optionB": {
        "bot": "Another possible solution is the author recommendation.",
        "de": "Eine weitere mögliche Lösung ist „author recommendation“.",
        "answers": [
          {
            "text": "That author recommendation sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the author recommendation with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How would you like the next reading to be confirmed?",
        "de": "Wie möchten Sie „next reading“ bestätigt bekommen?",
        "answers": [
          {
            "text": "Please confirm the next reading by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the next reading would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you need any further explanation about the next reading?",
        "de": "Benötigen Sie weitere Erklärungen zu „next reading“?",
        "answers": [
          {
            "text": "No, the next reading is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the next reading once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has been updated successfully.",
        "de": "Danke. Alles wurde erfolgreich aktualisiert.",
        "answers": []
      }
    }
  },
  {
    "id": "branch156_language_listening",
    "topic": "Englischlernen",
    "title": "Hörverstehen verbessern",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Could you explain what you need regarding the current difficulty?",
        "de": "Könnten Sie erklären, was Sie bezüglich „current difficulty“ benötigen?",
        "answers": [
          {
            "text": "I would like to arrange the current difficulty.",
            "next": "detailsA"
          },
          {
            "text": "There is a problem with the current difficulty.",
            "next": "detailsB"
          }
        ]
      },
      "detailsA": {
        "bot": "What information can you give me about the audio level?",
        "de": "Welche Informationen können Sie zu „audio level“ geben?",
        "answers": [
          {
            "text": "The audio level is already confirmed.",
            "next": "optionA"
          },
          {
            "text": "I still need advice about the audio level.",
            "next": "optionB"
          }
        ]
      },
      "detailsB": {
        "bot": "What exactly needs to change about the audio level?",
        "de": "Was genau muss bei „audio level“ geändert werden?",
        "answers": [
          {
            "text": "I need a different option for the audio level.",
            "next": "optionB"
          },
          {
            "text": "The current audio level is no longer suitable.",
            "next": "optionA"
          }
        ]
      },
      "optionA": {
        "bot": "We can proceed with the practice routine.",
        "de": "Wir können mit „practice routine“ fortfahren.",
        "answers": [
          {
            "text": "Please proceed with the practice routine.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the practice routine in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "optionB": {
        "bot": "Another possible solution is the practice routine.",
        "de": "Eine weitere mögliche Lösung ist „practice routine“.",
        "answers": [
          {
            "text": "That practice routine sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the practice routine with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How would you like the progress check to be confirmed?",
        "de": "Wie möchten Sie „progress check“ bestätigt bekommen?",
        "answers": [
          {
            "text": "Please confirm the progress check by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the progress check would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you need any further explanation about the progress check?",
        "de": "Benötigen Sie weitere Erklärungen zu „progress check“?",
        "answers": [
          {
            "text": "No, the progress check is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the progress check once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has been updated successfully.",
        "de": "Danke. Alles wurde erfolgreich aktualisiert.",
        "answers": []
      }
    }
  },
  {
    "id": "branch156_business_meeting_change",
    "topic": "Beruf",
    "title": "Meeting neu organisieren",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Could you explain what you need regarding the original date?",
        "de": "Könnten Sie erklären, was Sie bezüglich „original date“ benötigen?",
        "answers": [
          {
            "text": "I would like to arrange the original date.",
            "next": "detailsA"
          },
          {
            "text": "There is a problem with the original date.",
            "next": "detailsB"
          }
        ]
      },
      "detailsA": {
        "bot": "What information can you give me about the attendee availability?",
        "de": "Welche Informationen können Sie zu „attendee availability“ geben?",
        "answers": [
          {
            "text": "The attendee availability is already confirmed.",
            "next": "optionA"
          },
          {
            "text": "I still need advice about the attendee availability.",
            "next": "optionB"
          }
        ]
      },
      "detailsB": {
        "bot": "What exactly needs to change about the attendee availability?",
        "de": "Was genau muss bei „attendee availability“ geändert werden?",
        "answers": [
          {
            "text": "I need a different option for the attendee availability.",
            "next": "optionB"
          },
          {
            "text": "The current attendee availability is no longer suitable.",
            "next": "optionA"
          }
        ]
      },
      "optionA": {
        "bot": "We can proceed with the new time.",
        "de": "Wir können mit „new time“ fortfahren.",
        "answers": [
          {
            "text": "Please proceed with the new time.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the new time in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "optionB": {
        "bot": "Another possible solution is the new time.",
        "de": "Eine weitere mögliche Lösung ist „new time“.",
        "answers": [
          {
            "text": "That new time sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the new time with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How would you like the updated invitation to be confirmed?",
        "de": "Wie möchten Sie „updated invitation“ bestätigt bekommen?",
        "answers": [
          {
            "text": "Please confirm the updated invitation by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the updated invitation would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you need any further explanation about the updated invitation?",
        "de": "Benötigen Sie weitere Erklärungen zu „updated invitation“?",
        "answers": [
          {
            "text": "No, the updated invitation is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the updated invitation once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has been updated successfully.",
        "de": "Danke. Alles wurde erfolgreich aktualisiert.",
        "answers": []
      }
    }
  },
  {
    "id": "branch156_medical_physiotherapy",
    "topic": "Gesundheit",
    "title": "Physiotherapie planen",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Could you explain what you need regarding the current injury?",
        "de": "Könnten Sie erklären, was Sie bezüglich „current injury“ benötigen?",
        "answers": [
          {
            "text": "I would like to arrange the current injury.",
            "next": "detailsA"
          },
          {
            "text": "There is a problem with the current injury.",
            "next": "detailsB"
          }
        ]
      },
      "detailsA": {
        "bot": "What information can you give me about the treatment goal?",
        "de": "Welche Informationen können Sie zu „treatment goal“ geben?",
        "answers": [
          {
            "text": "The treatment goal is already confirmed.",
            "next": "optionA"
          },
          {
            "text": "I still need advice about the treatment goal.",
            "next": "optionB"
          }
        ]
      },
      "detailsB": {
        "bot": "What exactly needs to change about the treatment goal?",
        "de": "Was genau muss bei „treatment goal“ geändert werden?",
        "answers": [
          {
            "text": "I need a different option for the treatment goal.",
            "next": "optionB"
          },
          {
            "text": "The current treatment goal is no longer suitable.",
            "next": "optionA"
          }
        ]
      },
      "optionA": {
        "bot": "We can proceed with the session frequency.",
        "de": "Wir können mit „session frequency“ fortfahren.",
        "answers": [
          {
            "text": "Please proceed with the session frequency.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the session frequency in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "optionB": {
        "bot": "Another possible solution is the session frequency.",
        "de": "Eine weitere mögliche Lösung ist „session frequency“.",
        "answers": [
          {
            "text": "That session frequency sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the session frequency with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How would you like the review date to be confirmed?",
        "de": "Wie möchten Sie „review date“ bestätigt bekommen?",
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
        "bot": "Do you need any further explanation about the review date?",
        "de": "Benötigen Sie weitere Erklärungen zu „review date“?",
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
        "bot": "Thank you. Everything has been updated successfully.",
        "de": "Danke. Alles wurde erfolgreich aktualisiert.",
        "answers": []
      }
    }
  },
  {
    "id": "branch156_event_guest_change",
    "topic": "Freizeit",
    "title": "Gästezahl bei Veranstaltung ändern",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Could you explain what you need regarding the original number?",
        "de": "Könnten Sie erklären, was Sie bezüglich „original number“ benötigen?",
        "answers": [
          {
            "text": "I would like to arrange the original number.",
            "next": "detailsA"
          },
          {
            "text": "There is a problem with the original number.",
            "next": "detailsB"
          }
        ]
      },
      "detailsA": {
        "bot": "What information can you give me about the new number?",
        "de": "Welche Informationen können Sie zu „new number“ geben?",
        "answers": [
          {
            "text": "The new number is already confirmed.",
            "next": "optionA"
          },
          {
            "text": "I still need advice about the new number.",
            "next": "optionB"
          }
        ]
      },
      "detailsB": {
        "bot": "What exactly needs to change about the new number?",
        "de": "Was genau muss bei „new number“ geändert werden?",
        "answers": [
          {
            "text": "I need a different option for the new number.",
            "next": "optionB"
          },
          {
            "text": "The current new number is no longer suitable.",
            "next": "optionA"
          }
        ]
      },
      "optionA": {
        "bot": "We can proceed with the room capacity.",
        "de": "Wir können mit „room capacity“ fortfahren.",
        "answers": [
          {
            "text": "Please proceed with the room capacity.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the room capacity in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "optionB": {
        "bot": "Another possible solution is the room capacity.",
        "de": "Eine weitere mögliche Lösung ist „room capacity“.",
        "answers": [
          {
            "text": "That room capacity sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the room capacity with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How would you like the revised cost to be confirmed?",
        "de": "Wie möchten Sie „revised cost“ bestätigt bekommen?",
        "answers": [
          {
            "text": "Please confirm the revised cost by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the revised cost would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you need any further explanation about the revised cost?",
        "de": "Benötigen Sie weitere Erklärungen zu „revised cost“?",
        "answers": [
          {
            "text": "No, the revised cost is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the revised cost once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has been updated successfully.",
        "de": "Danke. Alles wurde erfolgreich aktualisiert.",
        "answers": []
      }
    }
  }
];
ES_BRANCHING_SCENARIOS_151.push(...ES_BRANCHING_SCENARIOS_156);
