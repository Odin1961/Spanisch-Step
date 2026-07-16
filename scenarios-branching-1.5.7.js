const ES_BRANCHING_SCENARIOS_157 = [
  {
    "id": "branch157_restaurant_bill_error",
    "topic": "Restaurant",
    "title": "Fehler auf der Rechnung",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "How can I help you with the bill amount?",
        "de": "Wie kann ich Ihnen beim Thema „bill amount“ helfen?",
        "answers": [
          {
            "text": "I need to clarify the bill amount.",
            "next": "routeA"
          },
          {
            "text": "There is a problem with the bill amount.",
            "next": "routeB"
          }
        ]
      },
      "routeA": {
        "bot": "Could you give me more information about the incorrect item?",
        "de": "Könnten Sie mehr Informationen zu „incorrect item“ geben?",
        "answers": [
          {
            "text": "Yes, the main point is the incorrect item.",
            "next": "solutionA"
          },
          {
            "text": "I need advice about the incorrect item.",
            "next": "solutionB"
          }
        ]
      },
      "routeB": {
        "bot": "What exactly is the difficulty with the incorrect item?",
        "de": "Was genau ist das Problem bei „incorrect item“?",
        "answers": [
          {
            "text": "The incorrect item is not correct.",
            "next": "solutionA"
          },
          {
            "text": "I need an alternative for the incorrect item.",
            "next": "solutionB"
          }
        ]
      },
      "solutionA": {
        "bot": "We can proceed with the corrected total.",
        "de": "Wir können mit „corrected total“ fortfahren.",
        "answers": [
          {
            "text": "Please proceed with the corrected total.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the corrected total in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "solutionB": {
        "bot": "Another option would be the corrected total.",
        "de": "Eine andere Möglichkeit wäre „corrected total“.",
        "answers": [
          {
            "text": "That corrected total sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the corrected total with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How should we confirm the payment?",
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
        "bot": "Do you have any remaining questions about the payment?",
        "de": "Haben Sie noch Fragen zu „payment“?",
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
        "bot": "Thank you. Everything has now been confirmed.",
        "de": "Danke. Alles wurde nun bestätigt.",
        "answers": []
      }
    }
  },
  {
    "id": "branch157_hotel_room_move",
    "topic": "Hotel",
    "title": "Zimmerwechsel organisieren",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "How can I help you with the current room?",
        "de": "Wie kann ich Ihnen beim Thema „current room“ helfen?",
        "answers": [
          {
            "text": "I need to clarify the current room.",
            "next": "routeA"
          },
          {
            "text": "There is a problem with the current room.",
            "next": "routeB"
          }
        ]
      },
      "routeA": {
        "bot": "Could you give me more information about the reason for move?",
        "de": "Könnten Sie mehr Informationen zu „reason for move“ geben?",
        "answers": [
          {
            "text": "Yes, the main point is the reason for move.",
            "next": "solutionA"
          },
          {
            "text": "I need advice about the reason for move.",
            "next": "solutionB"
          }
        ]
      },
      "routeB": {
        "bot": "What exactly is the difficulty with the reason for move?",
        "de": "Was genau ist das Problem bei „reason for move“?",
        "answers": [
          {
            "text": "The reason for move is not correct.",
            "next": "solutionA"
          },
          {
            "text": "I need an alternative for the reason for move.",
            "next": "solutionB"
          }
        ]
      },
      "solutionA": {
        "bot": "We can proceed with the new room.",
        "de": "Wir können mit „new room“ fortfahren.",
        "answers": [
          {
            "text": "Please proceed with the new room.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the new room in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "solutionB": {
        "bot": "Another option would be the new room.",
        "de": "Eine andere Möglichkeit wäre „new room“.",
        "answers": [
          {
            "text": "That new room sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the new room with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How should we confirm the luggage assistance?",
        "de": "Wie sollen wir „luggage assistance“ bestätigen?",
        "answers": [
          {
            "text": "Please confirm the luggage assistance by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the luggage assistance would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you have any remaining questions about the luggage assistance?",
        "de": "Haben Sie noch Fragen zu „luggage assistance“?",
        "answers": [
          {
            "text": "No, the luggage assistance is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the luggage assistance once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has now been confirmed.",
        "de": "Danke. Alles wurde nun bestätigt.",
        "answers": []
      }
    }
  },
  {
    "id": "branch157_airport_document_check",
    "topic": "Flughafen",
    "title": "Dokumentenprüfung",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "How can I help you with the passport?",
        "de": "Wie kann ich Ihnen beim Thema „passport“ helfen?",
        "answers": [
          {
            "text": "I need to clarify the passport.",
            "next": "routeA"
          },
          {
            "text": "There is a problem with the passport.",
            "next": "routeB"
          }
        ]
      },
      "routeA": {
        "bot": "Could you give me more information about the visa requirement?",
        "de": "Könnten Sie mehr Informationen zu „visa requirement“ geben?",
        "answers": [
          {
            "text": "Yes, the main point is the visa requirement.",
            "next": "solutionA"
          },
          {
            "text": "I need advice about the visa requirement.",
            "next": "solutionB"
          }
        ]
      },
      "routeB": {
        "bot": "What exactly is the difficulty with the visa requirement?",
        "de": "Was genau ist das Problem bei „visa requirement“?",
        "answers": [
          {
            "text": "The visa requirement is not correct.",
            "next": "solutionA"
          },
          {
            "text": "I need an alternative for the visa requirement.",
            "next": "solutionB"
          }
        ]
      },
      "solutionA": {
        "bot": "We can proceed with the supporting document.",
        "de": "Wir können mit „supporting document“ fortfahren.",
        "answers": [
          {
            "text": "Please proceed with the supporting document.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the supporting document in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "solutionB": {
        "bot": "Another option would be the supporting document.",
        "de": "Eine andere Möglichkeit wäre „supporting document“.",
        "answers": [
          {
            "text": "That supporting document sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the supporting document with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How should we confirm the boarding clearance?",
        "de": "Wie sollen wir „boarding clearance“ bestätigen?",
        "answers": [
          {
            "text": "Please confirm the boarding clearance by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the boarding clearance would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you have any remaining questions about the boarding clearance?",
        "de": "Haben Sie noch Fragen zu „boarding clearance“?",
        "answers": [
          {
            "text": "No, the boarding clearance is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the boarding clearance once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has now been confirmed.",
        "de": "Danke. Alles wurde nun bestätigt.",
        "answers": []
      }
    }
  },
  {
    "id": "branch157_train_refund",
    "topic": "Bahnhof",
    "title": "Fahrpreiserstattung",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "How can I help you with the cancelled journey?",
        "de": "Wie kann ich Ihnen beim Thema „cancelled journey“ helfen?",
        "answers": [
          {
            "text": "I need to clarify the cancelled journey.",
            "next": "routeA"
          },
          {
            "text": "There is a problem with the cancelled journey.",
            "next": "routeB"
          }
        ]
      },
      "routeA": {
        "bot": "Could you give me more information about the ticket type?",
        "de": "Könnten Sie mehr Informationen zu „ticket type“ geben?",
        "answers": [
          {
            "text": "Yes, the main point is the ticket type.",
            "next": "solutionA"
          },
          {
            "text": "I need advice about the ticket type.",
            "next": "solutionB"
          }
        ]
      },
      "routeB": {
        "bot": "What exactly is the difficulty with the ticket type?",
        "de": "Was genau ist das Problem bei „ticket type“?",
        "answers": [
          {
            "text": "The ticket type is not correct.",
            "next": "solutionA"
          },
          {
            "text": "I need an alternative for the ticket type.",
            "next": "solutionB"
          }
        ]
      },
      "solutionA": {
        "bot": "We can proceed with the refund method.",
        "de": "Wir können mit „refund method“ fortfahren.",
        "answers": [
          {
            "text": "Please proceed with the refund method.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the refund method in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "solutionB": {
        "bot": "Another option would be the refund method.",
        "de": "Eine andere Möglichkeit wäre „refund method“.",
        "answers": [
          {
            "text": "That refund method sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the refund method with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How should we confirm the processing time?",
        "de": "Wie sollen wir „processing time“ bestätigen?",
        "answers": [
          {
            "text": "Please confirm the processing time by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the processing time would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you have any remaining questions about the processing time?",
        "de": "Haben Sie noch Fragen zu „processing time“?",
        "answers": [
          {
            "text": "No, the processing time is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the processing time once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has now been confirmed.",
        "de": "Danke. Alles wurde nun bestätigt.",
        "answers": []
      }
    }
  },
  {
    "id": "branch157_taxi_lost_item",
    "topic": "Taxi",
    "title": "Gegenstand im Taxi verloren",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "How can I help you with the lost item?",
        "de": "Wie kann ich Ihnen beim Thema „lost item“ helfen?",
        "answers": [
          {
            "text": "I need to clarify the lost item.",
            "next": "routeA"
          },
          {
            "text": "There is a problem with the lost item.",
            "next": "routeB"
          }
        ]
      },
      "routeA": {
        "bot": "Could you give me more information about the journey details?",
        "de": "Könnten Sie mehr Informationen zu „journey details“ geben?",
        "answers": [
          {
            "text": "Yes, the main point is the journey details.",
            "next": "solutionA"
          },
          {
            "text": "I need advice about the journey details.",
            "next": "solutionB"
          }
        ]
      },
      "routeB": {
        "bot": "What exactly is the difficulty with the journey details?",
        "de": "Was genau ist das Problem bei „journey details“?",
        "answers": [
          {
            "text": "The journey details is not correct.",
            "next": "solutionA"
          },
          {
            "text": "I need an alternative for the journey details.",
            "next": "solutionB"
          }
        ]
      },
      "solutionA": {
        "bot": "We can proceed with the driver contact.",
        "de": "Wir können mit „driver contact“ fortfahren.",
        "answers": [
          {
            "text": "Please proceed with the driver contact.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the driver contact in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "solutionB": {
        "bot": "Another option would be the driver contact.",
        "de": "Eine andere Möglichkeit wäre „driver contact“.",
        "answers": [
          {
            "text": "That driver contact sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the driver contact with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How should we confirm the return arrangement?",
        "de": "Wie sollen wir „return arrangement“ bestätigen?",
        "answers": [
          {
            "text": "Please confirm the return arrangement by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the return arrangement would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you have any remaining questions about the return arrangement?",
        "de": "Haben Sie noch Fragen zu „return arrangement“?",
        "answers": [
          {
            "text": "No, the return arrangement is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the return arrangement once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has now been confirmed.",
        "de": "Danke. Alles wurde nun bestätigt.",
        "answers": []
      }
    }
  },
  {
    "id": "branch157_rental_upgrade",
    "topic": "Autovermietung",
    "title": "Mietwagen-Upgrade",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "How can I help you with the current vehicle?",
        "de": "Wie kann ich Ihnen beim Thema „current vehicle“ helfen?",
        "answers": [
          {
            "text": "I need to clarify the current vehicle.",
            "next": "routeA"
          },
          {
            "text": "There is a problem with the current vehicle.",
            "next": "routeB"
          }
        ]
      },
      "routeA": {
        "bot": "Could you give me more information about the preferred category?",
        "de": "Könnten Sie mehr Informationen zu „preferred category“ geben?",
        "answers": [
          {
            "text": "Yes, the main point is the preferred category.",
            "next": "solutionA"
          },
          {
            "text": "I need advice about the preferred category.",
            "next": "solutionB"
          }
        ]
      },
      "routeB": {
        "bot": "What exactly is the difficulty with the preferred category?",
        "de": "Was genau ist das Problem bei „preferred category“?",
        "answers": [
          {
            "text": "The preferred category is not correct.",
            "next": "solutionA"
          },
          {
            "text": "I need an alternative for the preferred category.",
            "next": "solutionB"
          }
        ]
      },
      "solutionA": {
        "bot": "We can proceed with the additional price.",
        "de": "Wir können mit „additional price“ fortfahren.",
        "answers": [
          {
            "text": "Please proceed with the additional price.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the additional price in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "solutionB": {
        "bot": "Another option would be the additional price.",
        "de": "Eine andere Möglichkeit wäre „additional price“.",
        "answers": [
          {
            "text": "That additional price sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the additional price with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How should we confirm the new agreement?",
        "de": "Wie sollen wir „new agreement“ bestätigen?",
        "answers": [
          {
            "text": "Please confirm the new agreement by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the new agreement would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you have any remaining questions about the new agreement?",
        "de": "Haben Sie noch Fragen zu „new agreement“?",
        "answers": [
          {
            "text": "No, the new agreement is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the new agreement once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has now been confirmed.",
        "de": "Danke. Alles wurde nun bestätigt.",
        "answers": []
      }
    }
  },
  {
    "id": "branch157_shopping_preorder",
    "topic": "Einkaufen",
    "title": "Produkt vorbestellen",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "How can I help you with the product model?",
        "de": "Wie kann ich Ihnen beim Thema „product model“ helfen?",
        "answers": [
          {
            "text": "I need to clarify the product model.",
            "next": "routeA"
          },
          {
            "text": "There is a problem with the product model.",
            "next": "routeB"
          }
        ]
      },
      "routeA": {
        "bot": "Could you give me more information about the release date?",
        "de": "Könnten Sie mehr Informationen zu „release date“ geben?",
        "answers": [
          {
            "text": "Yes, the main point is the release date.",
            "next": "solutionA"
          },
          {
            "text": "I need advice about the release date.",
            "next": "solutionB"
          }
        ]
      },
      "routeB": {
        "bot": "What exactly is the difficulty with the release date?",
        "de": "Was genau ist das Problem bei „release date“?",
        "answers": [
          {
            "text": "The release date is not correct.",
            "next": "solutionA"
          },
          {
            "text": "I need an alternative for the release date.",
            "next": "solutionB"
          }
        ]
      },
      "solutionA": {
        "bot": "We can proceed with the deposit.",
        "de": "Wir können mit „deposit“ fortfahren.",
        "answers": [
          {
            "text": "Please proceed with the deposit.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the deposit in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "solutionB": {
        "bot": "Another option would be the deposit.",
        "de": "Eine andere Möglichkeit wäre „deposit“.",
        "answers": [
          {
            "text": "That deposit sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the deposit with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How should we confirm the collection notice?",
        "de": "Wie sollen wir „collection notice“ bestätigen?",
        "answers": [
          {
            "text": "Please confirm the collection notice by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the collection notice would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you have any remaining questions about the collection notice?",
        "de": "Haben Sie noch Fragen zu „collection notice“?",
        "answers": [
          {
            "text": "No, the collection notice is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the collection notice once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has now been confirmed.",
        "de": "Danke. Alles wurde nun bestätigt.",
        "answers": []
      }
    }
  },
  {
    "id": "branch157_doctor_second_opinion",
    "topic": "Gesundheit",
    "title": "Zweite Meinung einholen",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "How can I help you with the current diagnosis?",
        "de": "Wie kann ich Ihnen beim Thema „current diagnosis“ helfen?",
        "answers": [
          {
            "text": "I need to clarify the current diagnosis.",
            "next": "routeA"
          },
          {
            "text": "There is a problem with the current diagnosis.",
            "next": "routeB"
          }
        ]
      },
      "routeA": {
        "bot": "Could you give me more information about the previous test?",
        "de": "Könnten Sie mehr Informationen zu „previous test“ geben?",
        "answers": [
          {
            "text": "Yes, the main point is the previous test.",
            "next": "solutionA"
          },
          {
            "text": "I need advice about the previous test.",
            "next": "solutionB"
          }
        ]
      },
      "routeB": {
        "bot": "What exactly is the difficulty with the previous test?",
        "de": "Was genau ist das Problem bei „previous test“?",
        "answers": [
          {
            "text": "The previous test is not correct.",
            "next": "solutionA"
          },
          {
            "text": "I need an alternative for the previous test.",
            "next": "solutionB"
          }
        ]
      },
      "solutionA": {
        "bot": "We can proceed with the specialist choice.",
        "de": "Wir können mit „specialist choice“ fortfahren.",
        "answers": [
          {
            "text": "Please proceed with the specialist choice.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the specialist choice in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "solutionB": {
        "bot": "Another option would be the specialist choice.",
        "de": "Eine andere Möglichkeit wäre „specialist choice“.",
        "answers": [
          {
            "text": "That specialist choice sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the specialist choice with another option.",
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
        "bot": "Do you have any remaining questions about the appointment?",
        "de": "Haben Sie noch Fragen zu „appointment“?",
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
        "bot": "Thank you. Everything has now been confirmed.",
        "de": "Danke. Alles wurde nun bestätigt.",
        "answers": []
      }
    }
  },
  {
    "id": "branch157_pharmacy_stock",
    "topic": "Apotheke",
    "title": "Nicht verfügbares Medikament",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "How can I help you with the medicine name?",
        "de": "Wie kann ich Ihnen beim Thema „medicine name“ helfen?",
        "answers": [
          {
            "text": "I need to clarify the medicine name.",
            "next": "routeA"
          },
          {
            "text": "There is a problem with the medicine name.",
            "next": "routeB"
          }
        ]
      },
      "routeA": {
        "bot": "Could you give me more information about the stock status?",
        "de": "Könnten Sie mehr Informationen zu „stock status“ geben?",
        "answers": [
          {
            "text": "Yes, the main point is the stock status.",
            "next": "solutionA"
          },
          {
            "text": "I need advice about the stock status.",
            "next": "solutionB"
          }
        ]
      },
      "routeB": {
        "bot": "What exactly is the difficulty with the stock status?",
        "de": "Was genau ist das Problem bei „stock status“?",
        "answers": [
          {
            "text": "The stock status is not correct.",
            "next": "solutionA"
          },
          {
            "text": "I need an alternative for the stock status.",
            "next": "solutionB"
          }
        ]
      },
      "solutionA": {
        "bot": "We can proceed with the alternative product.",
        "de": "Wir können mit „alternative product“ fortfahren.",
        "answers": [
          {
            "text": "Please proceed with the alternative product.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the alternative product in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "solutionB": {
        "bot": "Another option would be the alternative product.",
        "de": "Eine andere Möglichkeit wäre „alternative product“.",
        "answers": [
          {
            "text": "That alternative product sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the alternative product with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How should we confirm the reservation?",
        "de": "Wie sollen wir „reservation“ bestätigen?",
        "answers": [
          {
            "text": "Please confirm the reservation by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the reservation would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you have any remaining questions about the reservation?",
        "de": "Haben Sie noch Fragen zu „reservation“?",
        "answers": [
          {
            "text": "No, the reservation is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the reservation once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has now been confirmed.",
        "de": "Danke. Alles wurde nun bestätigt.",
        "answers": []
      }
    }
  },
  {
    "id": "branch157_work_performance_review",
    "topic": "Beruf",
    "title": "Mitarbeitergespräch",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "How can I help you with the recent performance?",
        "de": "Wie kann ich Ihnen beim Thema „recent performance“ helfen?",
        "answers": [
          {
            "text": "I need to clarify the recent performance.",
            "next": "routeA"
          },
          {
            "text": "There is a problem with the recent performance.",
            "next": "routeB"
          }
        ]
      },
      "routeA": {
        "bot": "Could you give me more information about the main strength?",
        "de": "Könnten Sie mehr Informationen zu „main strength“ geben?",
        "answers": [
          {
            "text": "Yes, the main point is the main strength.",
            "next": "solutionA"
          },
          {
            "text": "I need advice about the main strength.",
            "next": "solutionB"
          }
        ]
      },
      "routeB": {
        "bot": "What exactly is the difficulty with the main strength?",
        "de": "Was genau ist das Problem bei „main strength“?",
        "answers": [
          {
            "text": "The main strength is not correct.",
            "next": "solutionA"
          },
          {
            "text": "I need an alternative for the main strength.",
            "next": "solutionB"
          }
        ]
      },
      "solutionA": {
        "bot": "We can proceed with the development goal.",
        "de": "Wir können mit „development goal“ fortfahren.",
        "answers": [
          {
            "text": "Please proceed with the development goal.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the development goal in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "solutionB": {
        "bot": "Another option would be the development goal.",
        "de": "Eine andere Möglichkeit wäre „development goal“.",
        "answers": [
          {
            "text": "That development goal sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the development goal with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How should we confirm the follow-up?",
        "de": "Wie sollen wir „follow-up“ bestätigen?",
        "answers": [
          {
            "text": "Please confirm the follow-up by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the follow-up would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you have any remaining questions about the follow-up?",
        "de": "Haben Sie noch Fragen zu „follow-up“?",
        "answers": [
          {
            "text": "No, the follow-up is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the follow-up once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has now been confirmed.",
        "de": "Danke. Alles wurde nun bestätigt.",
        "answers": []
      }
    }
  },
  {
    "id": "branch157_phone_booking_change",
    "topic": "Telefon",
    "title": "Buchung telefonisch ändern",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "How can I help you with the booking reference?",
        "de": "Wie kann ich Ihnen beim Thema „booking reference“ helfen?",
        "answers": [
          {
            "text": "I need to clarify the booking reference.",
            "next": "routeA"
          },
          {
            "text": "There is a problem with the booking reference.",
            "next": "routeB"
          }
        ]
      },
      "routeA": {
        "bot": "Could you give me more information about the requested change?",
        "de": "Könnten Sie mehr Informationen zu „requested change“ geben?",
        "answers": [
          {
            "text": "Yes, the main point is the requested change.",
            "next": "solutionA"
          },
          {
            "text": "I need advice about the requested change.",
            "next": "solutionB"
          }
        ]
      },
      "routeB": {
        "bot": "What exactly is the difficulty with the requested change?",
        "de": "Was genau ist das Problem bei „requested change“?",
        "answers": [
          {
            "text": "The requested change is not correct.",
            "next": "solutionA"
          },
          {
            "text": "I need an alternative for the requested change.",
            "next": "solutionB"
          }
        ]
      },
      "solutionA": {
        "bot": "We can proceed with the available option.",
        "de": "Wir können mit „available option“ fortfahren.",
        "answers": [
          {
            "text": "Please proceed with the available option.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the available option in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "solutionB": {
        "bot": "Another option would be the available option.",
        "de": "Eine andere Möglichkeit wäre „available option“.",
        "answers": [
          {
            "text": "That available option sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the available option with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How should we confirm the confirmation?",
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
        "bot": "Do you have any remaining questions about the confirmation?",
        "de": "Haben Sie noch Fragen zu „confirmation“?",
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
        "bot": "Thank you. Everything has now been confirmed.",
        "de": "Danke. Alles wurde nun bestätigt.",
        "answers": []
      }
    }
  },
  {
    "id": "branch157_bank_account_fee",
    "topic": "Bank",
    "title": "Kontogebühr klären",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "How can I help you with the account type?",
        "de": "Wie kann ich Ihnen beim Thema „account type“ helfen?",
        "answers": [
          {
            "text": "I need to clarify the account type.",
            "next": "routeA"
          },
          {
            "text": "There is a problem with the account type.",
            "next": "routeB"
          }
        ]
      },
      "routeA": {
        "bot": "Could you give me more information about the monthly fee?",
        "de": "Könnten Sie mehr Informationen zu „monthly fee“ geben?",
        "answers": [
          {
            "text": "Yes, the main point is the monthly fee.",
            "next": "solutionA"
          },
          {
            "text": "I need advice about the monthly fee.",
            "next": "solutionB"
          }
        ]
      },
      "routeB": {
        "bot": "What exactly is the difficulty with the monthly fee?",
        "de": "Was genau ist das Problem bei „monthly fee“?",
        "answers": [
          {
            "text": "The monthly fee is not correct.",
            "next": "solutionA"
          },
          {
            "text": "I need an alternative for the monthly fee.",
            "next": "solutionB"
          }
        ]
      },
      "solutionA": {
        "bot": "We can proceed with the alternative account.",
        "de": "Wir können mit „alternative account“ fortfahren.",
        "answers": [
          {
            "text": "Please proceed with the alternative account.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the alternative account in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "solutionB": {
        "bot": "Another option would be the alternative account.",
        "de": "Eine andere Möglichkeit wäre „alternative account“.",
        "answers": [
          {
            "text": "That alternative account sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the alternative account with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How should we confirm the change request?",
        "de": "Wie sollen wir „change request“ bestätigen?",
        "answers": [
          {
            "text": "Please confirm the change request by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the change request would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you have any remaining questions about the change request?",
        "de": "Haben Sie noch Fragen zu „change request“?",
        "answers": [
          {
            "text": "No, the change request is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the change request once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has now been confirmed.",
        "de": "Danke. Alles wurde nun bestätigt.",
        "answers": []
      }
    }
  },
  {
    "id": "branch157_post_insured_delivery",
    "topic": "Post",
    "title": "Versicherter Versand",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "How can I help you with the parcel value?",
        "de": "Wie kann ich Ihnen beim Thema „parcel value“ helfen?",
        "answers": [
          {
            "text": "I need to clarify the parcel value.",
            "next": "routeA"
          },
          {
            "text": "There is a problem with the parcel value.",
            "next": "routeB"
          }
        ]
      },
      "routeA": {
        "bot": "Could you give me more information about the insurance level?",
        "de": "Könnten Sie mehr Informationen zu „insurance level“ geben?",
        "answers": [
          {
            "text": "Yes, the main point is the insurance level.",
            "next": "solutionA"
          },
          {
            "text": "I need advice about the insurance level.",
            "next": "solutionB"
          }
        ]
      },
      "routeB": {
        "bot": "What exactly is the difficulty with the insurance level?",
        "de": "Was genau ist das Problem bei „insurance level“?",
        "answers": [
          {
            "text": "The insurance level is not correct.",
            "next": "solutionA"
          },
          {
            "text": "I need an alternative for the insurance level.",
            "next": "solutionB"
          }
        ]
      },
      "solutionA": {
        "bot": "We can proceed with the delivery speed.",
        "de": "Wir können mit „delivery speed“ fortfahren.",
        "answers": [
          {
            "text": "Please proceed with the delivery speed.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the delivery speed in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "solutionB": {
        "bot": "Another option would be the delivery speed.",
        "de": "Eine andere Möglichkeit wäre „delivery speed“.",
        "answers": [
          {
            "text": "That delivery speed sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the delivery speed with another option.",
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
        "bot": "Do you have any remaining questions about the tracking?",
        "de": "Haben Sie noch Fragen zu „tracking“?",
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
        "bot": "Thank you. Everything has now been confirmed.",
        "de": "Danke. Alles wurde nun bestätigt.",
        "answers": []
      }
    }
  },
  {
    "id": "branch157_museum_event",
    "topic": "Museum",
    "title": "Museumsveranstaltung buchen",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "How can I help you with the event date?",
        "de": "Wie kann ich Ihnen beim Thema „event date“ helfen?",
        "answers": [
          {
            "text": "I need to clarify the event date.",
            "next": "routeA"
          },
          {
            "text": "There is a problem with the event date.",
            "next": "routeB"
          }
        ]
      },
      "routeA": {
        "bot": "Could you give me more information about the ticket type?",
        "de": "Könnten Sie mehr Informationen zu „ticket type“ geben?",
        "answers": [
          {
            "text": "Yes, the main point is the ticket type.",
            "next": "solutionA"
          },
          {
            "text": "I need advice about the ticket type.",
            "next": "solutionB"
          }
        ]
      },
      "routeB": {
        "bot": "What exactly is the difficulty with the ticket type?",
        "de": "Was genau ist das Problem bei „ticket type“?",
        "answers": [
          {
            "text": "The ticket type is not correct.",
            "next": "solutionA"
          },
          {
            "text": "I need an alternative for the ticket type.",
            "next": "solutionB"
          }
        ]
      },
      "solutionA": {
        "bot": "We can proceed with the member discount.",
        "de": "Wir können mit „member discount“ fortfahren.",
        "answers": [
          {
            "text": "Please proceed with the member discount.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the member discount in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "solutionB": {
        "bot": "Another option would be the member discount.",
        "de": "Eine andere Möglichkeit wäre „member discount“.",
        "answers": [
          {
            "text": "That member discount sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the member discount with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How should we confirm the email ticket?",
        "de": "Wie sollen wir „email ticket“ bestätigen?",
        "answers": [
          {
            "text": "Please confirm the email ticket by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the email ticket would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you have any remaining questions about the email ticket?",
        "de": "Haben Sie noch Fragen zu „email ticket“?",
        "answers": [
          {
            "text": "No, the email ticket is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the email ticket once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has now been confirmed.",
        "de": "Danke. Alles wurde nun bestätigt.",
        "answers": []
      }
    }
  },
  {
    "id": "branch157_camping_pitch_change",
    "topic": "Camping",
    "title": "Stellplatz wechseln",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "How can I help you with the current pitch?",
        "de": "Wie kann ich Ihnen beim Thema „current pitch“ helfen?",
        "answers": [
          {
            "text": "I need to clarify the current pitch.",
            "next": "routeA"
          },
          {
            "text": "There is a problem with the current pitch.",
            "next": "routeB"
          }
        ]
      },
      "routeA": {
        "bot": "Could you give me more information about the reason for change?",
        "de": "Könnten Sie mehr Informationen zu „reason for change“ geben?",
        "answers": [
          {
            "text": "Yes, the main point is the reason for change.",
            "next": "solutionA"
          },
          {
            "text": "I need advice about the reason for change.",
            "next": "solutionB"
          }
        ]
      },
      "routeB": {
        "bot": "What exactly is the difficulty with the reason for change?",
        "de": "Was genau ist das Problem bei „reason for change“?",
        "answers": [
          {
            "text": "The reason for change is not correct.",
            "next": "solutionA"
          },
          {
            "text": "I need an alternative for the reason for change.",
            "next": "solutionB"
          }
        ]
      },
      "solutionA": {
        "bot": "We can proceed with the new location.",
        "de": "Wir können mit „new location“ fortfahren.",
        "answers": [
          {
            "text": "Please proceed with the new location.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the new location in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "solutionB": {
        "bot": "Another option would be the new location.",
        "de": "Eine andere Möglichkeit wäre „new location“.",
        "answers": [
          {
            "text": "That new location sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the new location with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How should we confirm the updated map?",
        "de": "Wie sollen wir „updated map“ bestätigen?",
        "answers": [
          {
            "text": "Please confirm the updated map by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the updated map would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you have any remaining questions about the updated map?",
        "de": "Haben Sie noch Fragen zu „updated map“?",
        "answers": [
          {
            "text": "No, the updated map is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the updated map once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has now been confirmed.",
        "de": "Danke. Alles wurde nun bestätigt.",
        "answers": []
      }
    }
  },
  {
    "id": "branch157_university_deadline",
    "topic": "Bildung",
    "title": "Abgabefrist verlängern",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "How can I help you with the assignment?",
        "de": "Wie kann ich Ihnen beim Thema „assignment“ helfen?",
        "answers": [
          {
            "text": "I need to clarify the assignment.",
            "next": "routeA"
          },
          {
            "text": "There is a problem with the assignment.",
            "next": "routeB"
          }
        ]
      },
      "routeA": {
        "bot": "Could you give me more information about the reason for extension?",
        "de": "Könnten Sie mehr Informationen zu „reason for extension“ geben?",
        "answers": [
          {
            "text": "Yes, the main point is the reason for extension.",
            "next": "solutionA"
          },
          {
            "text": "I need advice about the reason for extension.",
            "next": "solutionB"
          }
        ]
      },
      "routeB": {
        "bot": "What exactly is the difficulty with the reason for extension?",
        "de": "Was genau ist das Problem bei „reason for extension“?",
        "answers": [
          {
            "text": "The reason for extension is not correct.",
            "next": "solutionA"
          },
          {
            "text": "I need an alternative for the reason for extension.",
            "next": "solutionB"
          }
        ]
      },
      "solutionA": {
        "bot": "We can proceed with the new deadline.",
        "de": "Wir können mit „new deadline“ fortfahren.",
        "answers": [
          {
            "text": "Please proceed with the new deadline.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the new deadline in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "solutionB": {
        "bot": "Another option would be the new deadline.",
        "de": "Eine andere Möglichkeit wäre „new deadline“.",
        "answers": [
          {
            "text": "That new deadline sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the new deadline with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How should we confirm the written approval?",
        "de": "Wie sollen wir „written approval“ bestätigen?",
        "answers": [
          {
            "text": "Please confirm the written approval by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the written approval would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you have any remaining questions about the written approval?",
        "de": "Haben Sie noch Fragen zu „written approval“?",
        "answers": [
          {
            "text": "No, the written approval is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the written approval once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has now been confirmed.",
        "de": "Danke. Alles wurde nun bestätigt.",
        "answers": []
      }
    }
  },
  {
    "id": "branch157_sport_equipment",
    "topic": "Sport",
    "title": "Sportausrüstung ausleihen",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "How can I help you with the equipment type?",
        "de": "Wie kann ich Ihnen beim Thema „equipment type“ helfen?",
        "answers": [
          {
            "text": "I need to clarify the equipment type.",
            "next": "routeA"
          },
          {
            "text": "There is a problem with the equipment type.",
            "next": "routeB"
          }
        ]
      },
      "routeA": {
        "bot": "Could you give me more information about the size?",
        "de": "Könnten Sie mehr Informationen zu „size“ geben?",
        "answers": [
          {
            "text": "Yes, the main point is the size.",
            "next": "solutionA"
          },
          {
            "text": "I need advice about the size.",
            "next": "solutionB"
          }
        ]
      },
      "routeB": {
        "bot": "What exactly is the difficulty with the size?",
        "de": "Was genau ist das Problem bei „size“?",
        "answers": [
          {
            "text": "The size is not correct.",
            "next": "solutionA"
          },
          {
            "text": "I need an alternative for the size.",
            "next": "solutionB"
          }
        ]
      },
      "solutionA": {
        "bot": "We can proceed with the rental period.",
        "de": "Wir können mit „rental period“ fortfahren.",
        "answers": [
          {
            "text": "Please proceed with the rental period.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the rental period in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "solutionB": {
        "bot": "Another option would be the rental period.",
        "de": "Eine andere Möglichkeit wäre „rental period“.",
        "answers": [
          {
            "text": "That rental period sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the rental period with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How should we confirm the deposit?",
        "de": "Wie sollen wir „deposit“ bestätigen?",
        "answers": [
          {
            "text": "Please confirm the deposit by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the deposit would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you have any remaining questions about the deposit?",
        "de": "Haben Sie noch Fragen zu „deposit“?",
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
        "bot": "Thank you. Everything has now been confirmed.",
        "de": "Danke. Alles wurde nun bestätigt.",
        "answers": []
      }
    }
  },
  {
    "id": "branch157_neighbour_pet",
    "topic": "Wohnen",
    "title": "Haustierregelung besprechen",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "How can I help you with the pet type?",
        "de": "Wie kann ich Ihnen beim Thema „pet type“ helfen?",
        "answers": [
          {
            "text": "I need to clarify the pet type.",
            "next": "routeA"
          },
          {
            "text": "There is a problem with the pet type.",
            "next": "routeB"
          }
        ]
      },
      "routeA": {
        "bot": "Could you give me more information about the building rule?",
        "de": "Könnten Sie mehr Informationen zu „building rule“ geben?",
        "answers": [
          {
            "text": "Yes, the main point is the building rule.",
            "next": "solutionA"
          },
          {
            "text": "I need advice about the building rule.",
            "next": "solutionB"
          }
        ]
      },
      "routeB": {
        "bot": "What exactly is the difficulty with the building rule?",
        "de": "Was genau ist das Problem bei „building rule“?",
        "answers": [
          {
            "text": "The building rule is not correct.",
            "next": "solutionA"
          },
          {
            "text": "I need an alternative for the building rule.",
            "next": "solutionB"
          }
        ]
      },
      "solutionA": {
        "bot": "We can proceed with the noise concern.",
        "de": "Wir können mit „noise concern“ fortfahren.",
        "answers": [
          {
            "text": "Please proceed with the noise concern.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the noise concern in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "solutionB": {
        "bot": "Another option would be the noise concern.",
        "de": "Eine andere Möglichkeit wäre „noise concern“.",
        "answers": [
          {
            "text": "That noise concern sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the noise concern with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How should we confirm the agreement?",
        "de": "Wie sollen wir „agreement“ bestätigen?",
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
        "bot": "Do you have any remaining questions about the agreement?",
        "de": "Haben Sie noch Fragen zu „agreement“?",
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
        "bot": "Thank you. Everything has now been confirmed.",
        "de": "Danke. Alles wurde nun bestätigt.",
        "answers": []
      }
    }
  },
  {
    "id": "branch157_internet_billing",
    "topic": "Internet",
    "title": "Internetrechnung prüfen",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "How can I help you with the invoice date?",
        "de": "Wie kann ich Ihnen beim Thema „invoice date“ helfen?",
        "answers": [
          {
            "text": "I need to clarify the invoice date.",
            "next": "routeA"
          },
          {
            "text": "There is a problem with the invoice date.",
            "next": "routeB"
          }
        ]
      },
      "routeA": {
        "bot": "Could you give me more information about the unexpected charge?",
        "de": "Könnten Sie mehr Informationen zu „unexpected charge“ geben?",
        "answers": [
          {
            "text": "Yes, the main point is the unexpected charge.",
            "next": "solutionA"
          },
          {
            "text": "I need advice about the unexpected charge.",
            "next": "solutionB"
          }
        ]
      },
      "routeB": {
        "bot": "What exactly is the difficulty with the unexpected charge?",
        "de": "Was genau ist das Problem bei „unexpected charge“?",
        "answers": [
          {
            "text": "The unexpected charge is not correct.",
            "next": "solutionA"
          },
          {
            "text": "I need an alternative for the unexpected charge.",
            "next": "solutionB"
          }
        ]
      },
      "solutionA": {
        "bot": "We can proceed with the correct tariff.",
        "de": "Wir können mit „correct tariff“ fortfahren.",
        "answers": [
          {
            "text": "Please proceed with the correct tariff.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the correct tariff in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "solutionB": {
        "bot": "Another option would be the correct tariff.",
        "de": "Eine andere Möglichkeit wäre „correct tariff“.",
        "answers": [
          {
            "text": "That correct tariff sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the correct tariff with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How should we confirm the credit note?",
        "de": "Wie sollen wir „credit note“ bestätigen?",
        "answers": [
          {
            "text": "Please confirm the credit note by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the credit note would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you have any remaining questions about the credit note?",
        "de": "Haben Sie noch Fragen zu „credit note“?",
        "answers": [
          {
            "text": "No, the credit note is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the credit note once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has now been confirmed.",
        "de": "Danke. Alles wurde nun bestätigt.",
        "answers": []
      }
    }
  },
  {
    "id": "branch157_environment_water",
    "topic": "Umwelt",
    "title": "Wasserverbrauch senken",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "How can I help you with the current consumption?",
        "de": "Wie kann ich Ihnen beim Thema „current consumption“ helfen?",
        "answers": [
          {
            "text": "I need to clarify the current consumption.",
            "next": "routeA"
          },
          {
            "text": "There is a problem with the current consumption.",
            "next": "routeB"
          }
        ]
      },
      "routeA": {
        "bot": "Could you give me more information about the main cause?",
        "de": "Könnten Sie mehr Informationen zu „main cause“ geben?",
        "answers": [
          {
            "text": "Yes, the main point is the main cause.",
            "next": "solutionA"
          },
          {
            "text": "I need advice about the main cause.",
            "next": "solutionB"
          }
        ]
      },
      "routeB": {
        "bot": "What exactly is the difficulty with the main cause?",
        "de": "Was genau ist das Problem bei „main cause“?",
        "answers": [
          {
            "text": "The main cause is not correct.",
            "next": "solutionA"
          },
          {
            "text": "I need an alternative for the main cause.",
            "next": "solutionB"
          }
        ]
      },
      "solutionA": {
        "bot": "We can proceed with the saving measure.",
        "de": "Wir können mit „saving measure“ fortfahren.",
        "answers": [
          {
            "text": "Please proceed with the saving measure.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the saving measure in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "solutionB": {
        "bot": "Another option would be the saving measure.",
        "de": "Eine andere Möglichkeit wäre „saving measure“.",
        "answers": [
          {
            "text": "That saving measure sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the saving measure with another option.",
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
        "bot": "Do you have any remaining questions about the review date?",
        "de": "Haben Sie noch Fragen zu „review date“?",
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
        "bot": "Thank you. Everything has now been confirmed.",
        "de": "Danke. Alles wurde nun bestätigt.",
        "answers": []
      }
    }
  },
  {
    "id": "branch157_smalltalk_holiday",
    "topic": "Small Talk",
    "title": "Über Urlaub sprechen",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "How can I help you with the holiday destination?",
        "de": "Wie kann ich Ihnen beim Thema „holiday destination“ helfen?",
        "answers": [
          {
            "text": "I need to clarify the holiday destination.",
            "next": "routeA"
          },
          {
            "text": "There is a problem with the holiday destination.",
            "next": "routeB"
          }
        ]
      },
      "routeA": {
        "bot": "Could you give me more information about the travel style?",
        "de": "Könnten Sie mehr Informationen zu „travel style“ geben?",
        "answers": [
          {
            "text": "Yes, the main point is the travel style.",
            "next": "solutionA"
          },
          {
            "text": "I need advice about the travel style.",
            "next": "solutionB"
          }
        ]
      },
      "routeB": {
        "bot": "What exactly is the difficulty with the travel style?",
        "de": "Was genau ist das Problem bei „travel style“?",
        "answers": [
          {
            "text": "The travel style is not correct.",
            "next": "solutionA"
          },
          {
            "text": "I need an alternative for the travel style.",
            "next": "solutionB"
          }
        ]
      },
      "solutionA": {
        "bot": "We can proceed with the best experience.",
        "de": "Wir können mit „best experience“ fortfahren.",
        "answers": [
          {
            "text": "Please proceed with the best experience.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the best experience in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "solutionB": {
        "bot": "Another option would be the best experience.",
        "de": "Eine andere Möglichkeit wäre „best experience“.",
        "answers": [
          {
            "text": "That best experience sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the best experience with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How should we confirm the next trip?",
        "de": "Wie sollen wir „next trip“ bestätigen?",
        "answers": [
          {
            "text": "Please confirm the next trip by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the next trip would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you have any remaining questions about the next trip?",
        "de": "Haben Sie noch Fragen zu „next trip“?",
        "answers": [
          {
            "text": "No, the next trip is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the next trip once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has now been confirmed.",
        "de": "Danke. Alles wurde nun bestätigt.",
        "answers": []
      }
    }
  },
  {
    "id": "branch157_language_reading",
    "topic": "Englischlernen",
    "title": "Leseverständnis trainieren",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "How can I help you with the text level?",
        "de": "Wie kann ich Ihnen beim Thema „text level“ helfen?",
        "answers": [
          {
            "text": "I need to clarify the text level.",
            "next": "routeA"
          },
          {
            "text": "There is a problem with the text level.",
            "next": "routeB"
          }
        ]
      },
      "routeA": {
        "bot": "Could you give me more information about the unknown words?",
        "de": "Könnten Sie mehr Informationen zu „unknown words“ geben?",
        "answers": [
          {
            "text": "Yes, the main point is the unknown words.",
            "next": "solutionA"
          },
          {
            "text": "I need advice about the unknown words.",
            "next": "solutionB"
          }
        ]
      },
      "routeB": {
        "bot": "What exactly is the difficulty with the unknown words?",
        "de": "Was genau ist das Problem bei „unknown words“?",
        "answers": [
          {
            "text": "The unknown words is not correct.",
            "next": "solutionA"
          },
          {
            "text": "I need an alternative for the unknown words.",
            "next": "solutionB"
          }
        ]
      },
      "solutionA": {
        "bot": "We can proceed with the reading strategy.",
        "de": "Wir können mit „reading strategy“ fortfahren.",
        "answers": [
          {
            "text": "Please proceed with the reading strategy.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the reading strategy in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "solutionB": {
        "bot": "Another option would be the reading strategy.",
        "de": "Eine andere Möglichkeit wäre „reading strategy“.",
        "answers": [
          {
            "text": "That reading strategy sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the reading strategy with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How should we confirm the summary?",
        "de": "Wie sollen wir „summary“ bestätigen?",
        "answers": [
          {
            "text": "Please confirm the summary by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the summary would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you have any remaining questions about the summary?",
        "de": "Haben Sie noch Fragen zu „summary“?",
        "answers": [
          {
            "text": "No, the summary is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the summary once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has now been confirmed.",
        "de": "Danke. Alles wurde nun bestätigt.",
        "answers": []
      }
    }
  },
  {
    "id": "branch157_business_invoice",
    "topic": "Beruf",
    "title": "Geschäftsrechnung klären",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "How can I help you with the invoice number?",
        "de": "Wie kann ich Ihnen beim Thema „invoice number“ helfen?",
        "answers": [
          {
            "text": "I need to clarify the invoice number.",
            "next": "routeA"
          },
          {
            "text": "There is a problem with the invoice number.",
            "next": "routeB"
          }
        ]
      },
      "routeA": {
        "bot": "Could you give me more information about the incorrect amount?",
        "de": "Könnten Sie mehr Informationen zu „incorrect amount“ geben?",
        "answers": [
          {
            "text": "Yes, the main point is the incorrect amount.",
            "next": "solutionA"
          },
          {
            "text": "I need advice about the incorrect amount.",
            "next": "solutionB"
          }
        ]
      },
      "routeB": {
        "bot": "What exactly is the difficulty with the incorrect amount?",
        "de": "Was genau ist das Problem bei „incorrect amount“?",
        "answers": [
          {
            "text": "The incorrect amount is not correct.",
            "next": "solutionA"
          },
          {
            "text": "I need an alternative for the incorrect amount.",
            "next": "solutionB"
          }
        ]
      },
      "solutionA": {
        "bot": "We can proceed with the revised invoice.",
        "de": "Wir können mit „revised invoice“ fortfahren.",
        "answers": [
          {
            "text": "Please proceed with the revised invoice.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the revised invoice in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "solutionB": {
        "bot": "Another option would be the revised invoice.",
        "de": "Eine andere Möglichkeit wäre „revised invoice“.",
        "answers": [
          {
            "text": "That revised invoice sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the revised invoice with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How should we confirm the payment deadline?",
        "de": "Wie sollen wir „payment deadline“ bestätigen?",
        "answers": [
          {
            "text": "Please confirm the payment deadline by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the payment deadline would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you have any remaining questions about the payment deadline?",
        "de": "Haben Sie noch Fragen zu „payment deadline“?",
        "answers": [
          {
            "text": "No, the payment deadline is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the payment deadline once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has now been confirmed.",
        "de": "Danke. Alles wurde nun bestätigt.",
        "answers": []
      }
    }
  },
  {
    "id": "branch157_medical_scan",
    "topic": "Gesundheit",
    "title": "Untersuchung mit Scan",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "How can I help you with the scan type?",
        "de": "Wie kann ich Ihnen beim Thema „scan type“ helfen?",
        "answers": [
          {
            "text": "I need to clarify the scan type.",
            "next": "routeA"
          },
          {
            "text": "There is a problem with the scan type.",
            "next": "routeB"
          }
        ]
      },
      "routeA": {
        "bot": "Could you give me more information about the preparation?",
        "de": "Könnten Sie mehr Informationen zu „preparation“ geben?",
        "answers": [
          {
            "text": "Yes, the main point is the preparation.",
            "next": "solutionA"
          },
          {
            "text": "I need advice about the preparation.",
            "next": "solutionB"
          }
        ]
      },
      "routeB": {
        "bot": "What exactly is the difficulty with the preparation?",
        "de": "Was genau ist das Problem bei „preparation“?",
        "answers": [
          {
            "text": "The preparation is not correct.",
            "next": "solutionA"
          },
          {
            "text": "I need an alternative for the preparation.",
            "next": "solutionB"
          }
        ]
      },
      "solutionA": {
        "bot": "We can proceed with the result date.",
        "de": "Wir können mit „result date“ fortfahren.",
        "answers": [
          {
            "text": "Please proceed with the result date.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the result date in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "solutionB": {
        "bot": "Another option would be the result date.",
        "de": "Eine andere Möglichkeit wäre „result date“.",
        "answers": [
          {
            "text": "That result date sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the result date with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How should we confirm the follow-up?",
        "de": "Wie sollen wir „follow-up“ bestätigen?",
        "answers": [
          {
            "text": "Please confirm the follow-up by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the follow-up would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you have any remaining questions about the follow-up?",
        "de": "Haben Sie noch Fragen zu „follow-up“?",
        "answers": [
          {
            "text": "No, the follow-up is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the follow-up once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has now been confirmed.",
        "de": "Danke. Alles wurde nun bestätigt.",
        "answers": []
      }
    }
  },
  {
    "id": "branch157_event_cancellation",
    "topic": "Freizeit",
    "title": "Veranstaltung absagen",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "How can I help you with the event date?",
        "de": "Wie kann ich Ihnen beim Thema „event date“ helfen?",
        "answers": [
          {
            "text": "I need to clarify the event date.",
            "next": "routeA"
          },
          {
            "text": "There is a problem with the event date.",
            "next": "routeB"
          }
        ]
      },
      "routeA": {
        "bot": "Could you give me more information about the cancellation reason?",
        "de": "Könnten Sie mehr Informationen zu „cancellation reason“ geben?",
        "answers": [
          {
            "text": "Yes, the main point is the cancellation reason.",
            "next": "solutionA"
          },
          {
            "text": "I need advice about the cancellation reason.",
            "next": "solutionB"
          }
        ]
      },
      "routeB": {
        "bot": "What exactly is the difficulty with the cancellation reason?",
        "de": "Was genau ist das Problem bei „cancellation reason“?",
        "answers": [
          {
            "text": "The cancellation reason is not correct.",
            "next": "solutionA"
          },
          {
            "text": "I need an alternative for the cancellation reason.",
            "next": "solutionB"
          }
        ]
      },
      "solutionA": {
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
      "solutionB": {
        "bot": "Another option would be the refund policy.",
        "de": "Eine andere Möglichkeit wäre „refund policy“.",
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
        "bot": "How should we confirm the guest notification?",
        "de": "Wie sollen wir „guest notification“ bestätigen?",
        "answers": [
          {
            "text": "Please confirm the guest notification by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the guest notification would be helpful.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you have any remaining questions about the guest notification?",
        "de": "Haben Sie noch Fragen zu „guest notification“?",
        "answers": [
          {
            "text": "No, the guest notification is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the guest notification once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. Everything has now been confirmed.",
        "de": "Danke. Alles wurde nun bestätigt.",
        "answers": []
      }
    }
  }
];
ES_BRANCHING_SCENARIOS_151.push(...ES_BRANCHING_SCENARIOS_157);
