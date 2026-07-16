const ES_BRANCHING_SCENARIOS_154 = [
  {
    "id": "branch154_restaurant_private_room",
    "topic": "Restaurant",
    "title": "Privatraum im Restaurant",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "How can I help you with the private room?",
        "de": "Wie kann ich Ihnen beim Thema „private room“ helfen?",
        "answers": [
          {
            "text": "I need to arrange the private room.",
            "next": "details"
          },
          {
            "text": "There is a problem with the private room.",
            "next": "problem"
          }
        ]
      },
      "details": {
        "bot": "Could you provide the details about the guest number?",
        "de": "Könnten Sie die Einzelheiten zu „guest number“ nennen?",
        "answers": [
          {
            "text": "Yes, the guest number is confirmed.",
            "next": "solutionA"
          },
          {
            "text": "I still need advice about the guest number.",
            "next": "solutionB"
          }
        ]
      },
      "problem": {
        "bot": "What exactly is the difficulty with the guest number?",
        "de": "Was genau ist das Problem bei „guest number“?",
        "answers": [
          {
            "text": "The guest number is not as expected.",
            "next": "solutionA"
          },
          {
            "text": "I need an alternative for the guest number.",
            "next": "solutionB"
          }
        ]
      },
      "solutionA": {
        "bot": "We can proceed with the menu package. Would that suit you?",
        "de": "Wir können mit „menu package“ fortfahren. Passt das für Sie?",
        "answers": [
          {
            "text": "Yes, please proceed with the menu package.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the menu package in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "solutionB": {
        "bot": "Another option is the menu package.",
        "de": "Eine andere Möglichkeit ist „menu package“.",
        "answers": [
          {
            "text": "That menu package sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the menu package with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How would you like the deposit to be confirmed?",
        "de": "Wie möchten Sie „deposit“ bestätigt bekommen?",
        "answers": [
          {
            "text": "Please confirm the deposit by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the deposit is enough.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you have any further questions about the deposit?",
        "de": "Haben Sie weitere Fragen zu „deposit“?",
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
        "bot": "Thank you. The arrangement is complete.",
        "de": "Danke. Die Vereinbarung ist abgeschlossen.",
        "answers": []
      }
    }
  },
  {
    "id": "branch154_hotel_lost_item",
    "topic": "Hotel",
    "title": "Verlorenen Gegenstand suchen",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "How can I help you with the lost item?",
        "de": "Wie kann ich Ihnen beim Thema „lost item“ helfen?",
        "answers": [
          {
            "text": "I need to arrange the lost item.",
            "next": "details"
          },
          {
            "text": "There is a problem with the lost item.",
            "next": "problem"
          }
        ]
      },
      "details": {
        "bot": "Could you provide the details about the last known location?",
        "de": "Könnten Sie die Einzelheiten zu „last known location“ nennen?",
        "answers": [
          {
            "text": "Yes, the last known location is confirmed.",
            "next": "solutionA"
          },
          {
            "text": "I still need advice about the last known location.",
            "next": "solutionB"
          }
        ]
      },
      "problem": {
        "bot": "What exactly is the difficulty with the last known location?",
        "de": "Was genau ist das Problem bei „last known location“?",
        "answers": [
          {
            "text": "The last known location is not as expected.",
            "next": "solutionA"
          },
          {
            "text": "I need an alternative for the last known location.",
            "next": "solutionB"
          }
        ]
      },
      "solutionA": {
        "bot": "We can proceed with the lost property record. Would that suit you?",
        "de": "Wir können mit „lost property record“ fortfahren. Passt das für Sie?",
        "answers": [
          {
            "text": "Yes, please proceed with the lost property record.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the lost property record in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "solutionB": {
        "bot": "Another option is the lost property record.",
        "de": "Eine andere Möglichkeit ist „lost property record“.",
        "answers": [
          {
            "text": "That lost property record sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the lost property record with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How would you like the collection to be confirmed?",
        "de": "Wie möchten Sie „collection“ bestätigt bekommen?",
        "answers": [
          {
            "text": "Please confirm the collection by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the collection is enough.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you have any further questions about the collection?",
        "de": "Haben Sie weitere Fragen zu „collection“?",
        "answers": [
          {
            "text": "No, the collection is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the collection once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. The arrangement is complete.",
        "de": "Danke. Die Vereinbarung ist abgeschlossen.",
        "answers": []
      }
    }
  },
  {
    "id": "branch154_airport_baggage_damage",
    "topic": "Flughafen",
    "title": "Beschädigtes Gepäck",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "How can I help you with the damaged suitcase?",
        "de": "Wie kann ich Ihnen beim Thema „damaged suitcase“ helfen?",
        "answers": [
          {
            "text": "I need to arrange the damaged suitcase.",
            "next": "details"
          },
          {
            "text": "There is a problem with the damaged suitcase.",
            "next": "problem"
          }
        ]
      },
      "details": {
        "bot": "Could you provide the details about the baggage receipt?",
        "de": "Könnten Sie die Einzelheiten zu „baggage receipt“ nennen?",
        "answers": [
          {
            "text": "Yes, the baggage receipt is confirmed.",
            "next": "solutionA"
          },
          {
            "text": "I still need advice about the baggage receipt.",
            "next": "solutionB"
          }
        ]
      },
      "problem": {
        "bot": "What exactly is the difficulty with the baggage receipt?",
        "de": "Was genau ist das Problem bei „baggage receipt“?",
        "answers": [
          {
            "text": "The baggage receipt is not as expected.",
            "next": "solutionA"
          },
          {
            "text": "I need an alternative for the baggage receipt.",
            "next": "solutionB"
          }
        ]
      },
      "solutionA": {
        "bot": "We can proceed with the damage report. Would that suit you?",
        "de": "Wir können mit „damage report“ fortfahren. Passt das für Sie?",
        "answers": [
          {
            "text": "Yes, please proceed with the damage report.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the damage report in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "solutionB": {
        "bot": "Another option is the damage report.",
        "de": "Eine andere Möglichkeit ist „damage report“.",
        "answers": [
          {
            "text": "That damage report sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the damage report with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How would you like the compensation to be confirmed?",
        "de": "Wie möchten Sie „compensation“ bestätigt bekommen?",
        "answers": [
          {
            "text": "Please confirm the compensation by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the compensation is enough.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you have any further questions about the compensation?",
        "de": "Haben Sie weitere Fragen zu „compensation“?",
        "answers": [
          {
            "text": "No, the compensation is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the compensation once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. The arrangement is complete.",
        "de": "Danke. Die Vereinbarung ist abgeschlossen.",
        "answers": []
      }
    }
  },
  {
    "id": "branch154_train_seat_problem",
    "topic": "Bahnhof",
    "title": "Sitzplatzproblem im Zug",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "How can I help you with the seat reservation?",
        "de": "Wie kann ich Ihnen beim Thema „seat reservation“ helfen?",
        "answers": [
          {
            "text": "I need to arrange the seat reservation.",
            "next": "details"
          },
          {
            "text": "There is a problem with the seat reservation.",
            "next": "problem"
          }
        ]
      },
      "details": {
        "bot": "Could you provide the details about the occupied seat?",
        "de": "Könnten Sie die Einzelheiten zu „occupied seat“ nennen?",
        "answers": [
          {
            "text": "Yes, the occupied seat is confirmed.",
            "next": "solutionA"
          },
          {
            "text": "I still need advice about the occupied seat.",
            "next": "solutionB"
          }
        ]
      },
      "problem": {
        "bot": "What exactly is the difficulty with the occupied seat?",
        "de": "Was genau ist das Problem bei „occupied seat“?",
        "answers": [
          {
            "text": "The occupied seat is not as expected.",
            "next": "solutionA"
          },
          {
            "text": "I need an alternative for the occupied seat.",
            "next": "solutionB"
          }
        ]
      },
      "solutionA": {
        "bot": "We can proceed with the alternative seat. Would that suit you?",
        "de": "Wir können mit „alternative seat“ fortfahren. Passt das für Sie?",
        "answers": [
          {
            "text": "Yes, please proceed with the alternative seat.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the alternative seat in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "solutionB": {
        "bot": "Another option is the alternative seat.",
        "de": "Eine andere Möglichkeit ist „alternative seat“.",
        "answers": [
          {
            "text": "That alternative seat sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the alternative seat with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How would you like the new reservation to be confirmed?",
        "de": "Wie möchten Sie „new reservation“ bestätigt bekommen?",
        "answers": [
          {
            "text": "Please confirm the new reservation by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the new reservation is enough.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you have any further questions about the new reservation?",
        "de": "Haben Sie weitere Fragen zu „new reservation“?",
        "answers": [
          {
            "text": "No, the new reservation is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the new reservation once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. The arrangement is complete.",
        "de": "Danke. Die Vereinbarung ist abgeschlossen.",
        "answers": []
      }
    }
  },
  {
    "id": "branch154_taxi_child_seat",
    "topic": "Taxi",
    "title": "Kindersitz im Taxi",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "How can I help you with the child seat?",
        "de": "Wie kann ich Ihnen beim Thema „child seat“ helfen?",
        "answers": [
          {
            "text": "I need to arrange the child seat.",
            "next": "details"
          },
          {
            "text": "There is a problem with the child seat.",
            "next": "problem"
          }
        ]
      },
      "details": {
        "bot": "Could you provide the details about the child age?",
        "de": "Könnten Sie die Einzelheiten zu „child age“ nennen?",
        "answers": [
          {
            "text": "Yes, the child age is confirmed.",
            "next": "solutionA"
          },
          {
            "text": "I still need advice about the child age.",
            "next": "solutionB"
          }
        ]
      },
      "problem": {
        "bot": "What exactly is the difficulty with the child age?",
        "de": "Was genau ist das Problem bei „child age“?",
        "answers": [
          {
            "text": "The child age is not as expected.",
            "next": "solutionA"
          },
          {
            "text": "I need an alternative for the child age.",
            "next": "solutionB"
          }
        ]
      },
      "solutionA": {
        "bot": "We can proceed with the vehicle type. Would that suit you?",
        "de": "Wir können mit „vehicle type“ fortfahren. Passt das für Sie?",
        "answers": [
          {
            "text": "Yes, please proceed with the vehicle type.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the vehicle type in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "solutionB": {
        "bot": "Another option is the vehicle type.",
        "de": "Eine andere Möglichkeit ist „vehicle type“.",
        "answers": [
          {
            "text": "That vehicle type sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the vehicle type with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How would you like the pickup confirmation to be confirmed?",
        "de": "Wie möchten Sie „pickup confirmation“ bestätigt bekommen?",
        "answers": [
          {
            "text": "Please confirm the pickup confirmation by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the pickup confirmation is enough.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you have any further questions about the pickup confirmation?",
        "de": "Haben Sie weitere Fragen zu „pickup confirmation“?",
        "answers": [
          {
            "text": "No, the pickup confirmation is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the pickup confirmation once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. The arrangement is complete.",
        "de": "Danke. Die Vereinbarung ist abgeschlossen.",
        "answers": []
      }
    }
  },
  {
    "id": "branch154_rental_add_driver",
    "topic": "Autovermietung",
    "title": "Zusätzlichen Fahrer eintragen",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "How can I help you with the rental agreement?",
        "de": "Wie kann ich Ihnen beim Thema „rental agreement“ helfen?",
        "answers": [
          {
            "text": "I need to arrange the rental agreement.",
            "next": "details"
          },
          {
            "text": "There is a problem with the rental agreement.",
            "next": "problem"
          }
        ]
      },
      "details": {
        "bot": "Could you provide the details about the second driver?",
        "de": "Könnten Sie die Einzelheiten zu „second driver“ nennen?",
        "answers": [
          {
            "text": "Yes, the second driver is confirmed.",
            "next": "solutionA"
          },
          {
            "text": "I still need advice about the second driver.",
            "next": "solutionB"
          }
        ]
      },
      "problem": {
        "bot": "What exactly is the difficulty with the second driver?",
        "de": "Was genau ist das Problem bei „second driver“?",
        "answers": [
          {
            "text": "The second driver is not as expected.",
            "next": "solutionA"
          },
          {
            "text": "I need an alternative for the second driver.",
            "next": "solutionB"
          }
        ]
      },
      "solutionA": {
        "bot": "We can proceed with the insurance cover. Would that suit you?",
        "de": "Wir können mit „insurance cover“ fortfahren. Passt das für Sie?",
        "answers": [
          {
            "text": "Yes, please proceed with the insurance cover.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the insurance cover in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "solutionB": {
        "bot": "Another option is the insurance cover.",
        "de": "Eine andere Möglichkeit ist „insurance cover“.",
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
        "bot": "How would you like the updated contract to be confirmed?",
        "de": "Wie möchten Sie „updated contract“ bestätigt bekommen?",
        "answers": [
          {
            "text": "Please confirm the updated contract by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the updated contract is enough.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you have any further questions about the updated contract?",
        "de": "Haben Sie weitere Fragen zu „updated contract“?",
        "answers": [
          {
            "text": "No, the updated contract is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the updated contract once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. The arrangement is complete.",
        "de": "Danke. Die Vereinbarung ist abgeschlossen.",
        "answers": []
      }
    }
  },
  {
    "id": "branch154_shopping_warranty",
    "topic": "Einkaufen",
    "title": "Garantie nutzen",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "How can I help you with the faulty item?",
        "de": "Wie kann ich Ihnen beim Thema „faulty item“ helfen?",
        "answers": [
          {
            "text": "I need to arrange the faulty item.",
            "next": "details"
          },
          {
            "text": "There is a problem with the faulty item.",
            "next": "problem"
          }
        ]
      },
      "details": {
        "bot": "Could you provide the details about the purchase proof?",
        "de": "Könnten Sie die Einzelheiten zu „purchase proof“ nennen?",
        "answers": [
          {
            "text": "Yes, the purchase proof is confirmed.",
            "next": "solutionA"
          },
          {
            "text": "I still need advice about the purchase proof.",
            "next": "solutionB"
          }
        ]
      },
      "problem": {
        "bot": "What exactly is the difficulty with the purchase proof?",
        "de": "Was genau ist das Problem bei „purchase proof“?",
        "answers": [
          {
            "text": "The purchase proof is not as expected.",
            "next": "solutionA"
          },
          {
            "text": "I need an alternative for the purchase proof.",
            "next": "solutionB"
          }
        ]
      },
      "solutionA": {
        "bot": "We can proceed with the repair option. Would that suit you?",
        "de": "Wir können mit „repair option“ fortfahren. Passt das für Sie?",
        "answers": [
          {
            "text": "Yes, please proceed with the repair option.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the repair option in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "solutionB": {
        "bot": "Another option is the repair option.",
        "de": "Eine andere Möglichkeit ist „repair option“.",
        "answers": [
          {
            "text": "That repair option sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the repair option with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How would you like the replacement to be confirmed?",
        "de": "Wie möchten Sie „replacement“ bestätigt bekommen?",
        "answers": [
          {
            "text": "Please confirm the replacement by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the replacement is enough.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you have any further questions about the replacement?",
        "de": "Haben Sie weitere Fragen zu „replacement“?",
        "answers": [
          {
            "text": "No, the replacement is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the replacement once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. The arrangement is complete.",
        "de": "Danke. Die Vereinbarung ist abgeschlossen.",
        "answers": []
      }
    }
  },
  {
    "id": "branch154_doctor_medical_note",
    "topic": "Gesundheit",
    "title": "Ärztliches Attest",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "How can I help you with the medical condition?",
        "de": "Wie kann ich Ihnen beim Thema „medical condition“ helfen?",
        "answers": [
          {
            "text": "I need to arrange the medical condition.",
            "next": "details"
          },
          {
            "text": "There is a problem with the medical condition.",
            "next": "problem"
          }
        ]
      },
      "details": {
        "bot": "Could you provide the details about the required dates?",
        "de": "Könnten Sie die Einzelheiten zu „required dates“ nennen?",
        "answers": [
          {
            "text": "Yes, the required dates is confirmed.",
            "next": "solutionA"
          },
          {
            "text": "I still need advice about the required dates.",
            "next": "solutionB"
          }
        ]
      },
      "problem": {
        "bot": "What exactly is the difficulty with the required dates?",
        "de": "Was genau ist das Problem bei „required dates“?",
        "answers": [
          {
            "text": "The required dates is not as expected.",
            "next": "solutionA"
          },
          {
            "text": "I need an alternative for the required dates.",
            "next": "solutionB"
          }
        ]
      },
      "solutionA": {
        "bot": "We can proceed with the certificate wording. Would that suit you?",
        "de": "Wir können mit „certificate wording“ fortfahren. Passt das für Sie?",
        "answers": [
          {
            "text": "Yes, please proceed with the certificate wording.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the certificate wording in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "solutionB": {
        "bot": "Another option is the certificate wording.",
        "de": "Eine andere Möglichkeit ist „certificate wording“.",
        "answers": [
          {
            "text": "That certificate wording sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the certificate wording with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How would you like the collection to be confirmed?",
        "de": "Wie möchten Sie „collection“ bestätigt bekommen?",
        "answers": [
          {
            "text": "Please confirm the collection by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the collection is enough.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you have any further questions about the collection?",
        "de": "Haben Sie weitere Fragen zu „collection“?",
        "answers": [
          {
            "text": "No, the collection is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the collection once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. The arrangement is complete.",
        "de": "Danke. Die Vereinbarung ist abgeschlossen.",
        "answers": []
      }
    }
  },
  {
    "id": "branch154_pharmacy_travel_medicine",
    "topic": "Apotheke",
    "title": "Reiseapotheke zusammenstellen",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "How can I help you with the destination?",
        "de": "Wie kann ich Ihnen beim Thema „destination“ helfen?",
        "answers": [
          {
            "text": "I need to arrange the destination.",
            "next": "details"
          },
          {
            "text": "There is a problem with the destination.",
            "next": "problem"
          }
        ]
      },
      "details": {
        "bot": "Could you provide the details about the travel duration?",
        "de": "Könnten Sie die Einzelheiten zu „travel duration“ nennen?",
        "answers": [
          {
            "text": "Yes, the travel duration is confirmed.",
            "next": "solutionA"
          },
          {
            "text": "I still need advice about the travel duration.",
            "next": "solutionB"
          }
        ]
      },
      "problem": {
        "bot": "What exactly is the difficulty with the travel duration?",
        "de": "Was genau ist das Problem bei „travel duration“?",
        "answers": [
          {
            "text": "The travel duration is not as expected.",
            "next": "solutionA"
          },
          {
            "text": "I need an alternative for the travel duration.",
            "next": "solutionB"
          }
        ]
      },
      "solutionA": {
        "bot": "We can proceed with the recommended medicine. Would that suit you?",
        "de": "Wir können mit „recommended medicine“ fortfahren. Passt das für Sie?",
        "answers": [
          {
            "text": "Yes, please proceed with the recommended medicine.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the recommended medicine in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "solutionB": {
        "bot": "Another option is the recommended medicine.",
        "de": "Eine andere Möglichkeit ist „recommended medicine“.",
        "answers": [
          {
            "text": "That recommended medicine sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the recommended medicine with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How would you like the dosage advice to be confirmed?",
        "de": "Wie möchten Sie „dosage advice“ bestätigt bekommen?",
        "answers": [
          {
            "text": "Please confirm the dosage advice by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the dosage advice is enough.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you have any further questions about the dosage advice?",
        "de": "Haben Sie weitere Fragen zu „dosage advice“?",
        "answers": [
          {
            "text": "No, the dosage advice is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the dosage advice once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. The arrangement is complete.",
        "de": "Danke. Die Vereinbarung ist abgeschlossen.",
        "answers": []
      }
    }
  },
  {
    "id": "branch154_work_client_update",
    "topic": "Beruf",
    "title": "Kunden-Update geben",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "How can I help you with the project status?",
        "de": "Wie kann ich Ihnen beim Thema „project status“ helfen?",
        "answers": [
          {
            "text": "I need to arrange the project status.",
            "next": "details"
          },
          {
            "text": "There is a problem with the project status.",
            "next": "problem"
          }
        ]
      },
      "details": {
        "bot": "Could you provide the details about the main delay?",
        "de": "Könnten Sie die Einzelheiten zu „main delay“ nennen?",
        "answers": [
          {
            "text": "Yes, the main delay is confirmed.",
            "next": "solutionA"
          },
          {
            "text": "I still need advice about the main delay.",
            "next": "solutionB"
          }
        ]
      },
      "problem": {
        "bot": "What exactly is the difficulty with the main delay?",
        "de": "Was genau ist das Problem bei „main delay“?",
        "answers": [
          {
            "text": "The main delay is not as expected.",
            "next": "solutionA"
          },
          {
            "text": "I need an alternative for the main delay.",
            "next": "solutionB"
          }
        ]
      },
      "solutionA": {
        "bot": "We can proceed with the revised timeline. Would that suit you?",
        "de": "Wir können mit „revised timeline“ fortfahren. Passt das für Sie?",
        "answers": [
          {
            "text": "Yes, please proceed with the revised timeline.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the revised timeline in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "solutionB": {
        "bot": "Another option is the revised timeline.",
        "de": "Eine andere Möglichkeit ist „revised timeline“.",
        "answers": [
          {
            "text": "That revised timeline sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the revised timeline with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How would you like the client approval to be confirmed?",
        "de": "Wie möchten Sie „client approval“ bestätigt bekommen?",
        "answers": [
          {
            "text": "Please confirm the client approval by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the client approval is enough.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you have any further questions about the client approval?",
        "de": "Haben Sie weitere Fragen zu „client approval“?",
        "answers": [
          {
            "text": "No, the client approval is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the client approval once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. The arrangement is complete.",
        "de": "Danke. Die Vereinbarung ist abgeschlossen.",
        "answers": []
      }
    }
  },
  {
    "id": "branch154_phone_wrong_department",
    "topic": "Telefon",
    "title": "Falsche Abteilung",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "How can I help you with the reason for call?",
        "de": "Wie kann ich Ihnen beim Thema „reason for call“ helfen?",
        "answers": [
          {
            "text": "I need to arrange the reason for call.",
            "next": "details"
          },
          {
            "text": "There is a problem with the reason for call.",
            "next": "problem"
          }
        ]
      },
      "details": {
        "bot": "Could you provide the details about the correct department?",
        "de": "Könnten Sie die Einzelheiten zu „correct department“ nennen?",
        "answers": [
          {
            "text": "Yes, the correct department is confirmed.",
            "next": "solutionA"
          },
          {
            "text": "I still need advice about the correct department.",
            "next": "solutionB"
          }
        ]
      },
      "problem": {
        "bot": "What exactly is the difficulty with the correct department?",
        "de": "Was genau ist das Problem bei „correct department“?",
        "answers": [
          {
            "text": "The correct department is not as expected.",
            "next": "solutionA"
          },
          {
            "text": "I need an alternative for the correct department.",
            "next": "solutionB"
          }
        ]
      },
      "solutionA": {
        "bot": "We can proceed with the transfer. Would that suit you?",
        "de": "Wir können mit „transfer“ fortfahren. Passt das für Sie?",
        "answers": [
          {
            "text": "Yes, please proceed with the transfer.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the transfer in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "solutionB": {
        "bot": "Another option is the transfer.",
        "de": "Eine andere Möglichkeit ist „transfer“.",
        "answers": [
          {
            "text": "That transfer sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the transfer with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How would you like the callback to be confirmed?",
        "de": "Wie möchten Sie „callback“ bestätigt bekommen?",
        "answers": [
          {
            "text": "Please confirm the callback by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the callback is enough.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you have any further questions about the callback?",
        "de": "Haben Sie weitere Fragen zu „callback“?",
        "answers": [
          {
            "text": "No, the callback is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the callback once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. The arrangement is complete.",
        "de": "Danke. Die Vereinbarung ist abgeschlossen.",
        "answers": []
      }
    }
  },
  {
    "id": "branch154_bank_address_change",
    "topic": "Bank",
    "title": "Adresse ändern",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "How can I help you with the customer account?",
        "de": "Wie kann ich Ihnen beim Thema „customer account“ helfen?",
        "answers": [
          {
            "text": "I need to arrange the customer account.",
            "next": "details"
          },
          {
            "text": "There is a problem with the customer account.",
            "next": "problem"
          }
        ]
      },
      "details": {
        "bot": "Could you provide the details about the new address?",
        "de": "Könnten Sie die Einzelheiten zu „new address“ nennen?",
        "answers": [
          {
            "text": "Yes, the new address is confirmed.",
            "next": "solutionA"
          },
          {
            "text": "I still need advice about the new address.",
            "next": "solutionB"
          }
        ]
      },
      "problem": {
        "bot": "What exactly is the difficulty with the new address?",
        "de": "Was genau ist das Problem bei „new address“?",
        "answers": [
          {
            "text": "The new address is not as expected.",
            "next": "solutionA"
          },
          {
            "text": "I need an alternative for the new address.",
            "next": "solutionB"
          }
        ]
      },
      "solutionA": {
        "bot": "We can proceed with the proof of address. Would that suit you?",
        "de": "Wir können mit „proof of address“ fortfahren. Passt das für Sie?",
        "answers": [
          {
            "text": "Yes, please proceed with the proof of address.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the proof of address in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "solutionB": {
        "bot": "Another option is the proof of address.",
        "de": "Eine andere Möglichkeit ist „proof of address“.",
        "answers": [
          {
            "text": "That proof of address sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the proof of address with another option.",
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
            "text": "A written confirmation of the confirmation is enough.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you have any further questions about the confirmation?",
        "de": "Haben Sie weitere Fragen zu „confirmation“?",
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
        "bot": "Thank you. The arrangement is complete.",
        "de": "Danke. Die Vereinbarung ist abgeschlossen.",
        "answers": []
      }
    }
  },
  {
    "id": "branch154_post_fragile_parcel",
    "topic": "Post",
    "title": "Zerbrechliches Paket senden",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "How can I help you with the parcel contents?",
        "de": "Wie kann ich Ihnen beim Thema „parcel contents“ helfen?",
        "answers": [
          {
            "text": "I need to arrange the parcel contents.",
            "next": "details"
          },
          {
            "text": "There is a problem with the parcel contents.",
            "next": "problem"
          }
        ]
      },
      "details": {
        "bot": "Could you provide the details about the protective packaging?",
        "de": "Könnten Sie die Einzelheiten zu „protective packaging“ nennen?",
        "answers": [
          {
            "text": "Yes, the protective packaging is confirmed.",
            "next": "solutionA"
          },
          {
            "text": "I still need advice about the protective packaging.",
            "next": "solutionB"
          }
        ]
      },
      "problem": {
        "bot": "What exactly is the difficulty with the protective packaging?",
        "de": "Was genau ist das Problem bei „protective packaging“?",
        "answers": [
          {
            "text": "The protective packaging is not as expected.",
            "next": "solutionA"
          },
          {
            "text": "I need an alternative for the protective packaging.",
            "next": "solutionB"
          }
        ]
      },
      "solutionA": {
        "bot": "We can proceed with the delivery service. Would that suit you?",
        "de": "Wir können mit „delivery service“ fortfahren. Passt das für Sie?",
        "answers": [
          {
            "text": "Yes, please proceed with the delivery service.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the delivery service in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "solutionB": {
        "bot": "Another option is the delivery service.",
        "de": "Eine andere Möglichkeit ist „delivery service“.",
        "answers": [
          {
            "text": "That delivery service sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the delivery service with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How would you like the insurance to be confirmed?",
        "de": "Wie möchten Sie „insurance“ bestätigt bekommen?",
        "answers": [
          {
            "text": "Please confirm the insurance by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the insurance is enough.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you have any further questions about the insurance?",
        "de": "Haben Sie weitere Fragen zu „insurance“?",
        "answers": [
          {
            "text": "No, the insurance is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the insurance once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. The arrangement is complete.",
        "de": "Danke. Die Vereinbarung ist abgeschlossen.",
        "answers": []
      }
    }
  },
  {
    "id": "branch154_museum_school_group",
    "topic": "Museum",
    "title": "Schulgruppe anmelden",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "How can I help you with the group size?",
        "de": "Wie kann ich Ihnen beim Thema „group size“ helfen?",
        "answers": [
          {
            "text": "I need to arrange the group size.",
            "next": "details"
          },
          {
            "text": "There is a problem with the group size.",
            "next": "problem"
          }
        ]
      },
      "details": {
        "bot": "Could you provide the details about the student age?",
        "de": "Könnten Sie die Einzelheiten zu „student age“ nennen?",
        "answers": [
          {
            "text": "Yes, the student age is confirmed.",
            "next": "solutionA"
          },
          {
            "text": "I still need advice about the student age.",
            "next": "solutionB"
          }
        ]
      },
      "problem": {
        "bot": "What exactly is the difficulty with the student age?",
        "de": "Was genau ist das Problem bei „student age“?",
        "answers": [
          {
            "text": "The student age is not as expected.",
            "next": "solutionA"
          },
          {
            "text": "I need an alternative for the student age.",
            "next": "solutionB"
          }
        ]
      },
      "solutionA": {
        "bot": "We can proceed with the guided programme. Would that suit you?",
        "de": "Wir können mit „guided programme“ fortfahren. Passt das für Sie?",
        "answers": [
          {
            "text": "Yes, please proceed with the guided programme.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the guided programme in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "solutionB": {
        "bot": "Another option is the guided programme.",
        "de": "Eine andere Möglichkeit ist „guided programme“.",
        "answers": [
          {
            "text": "That guided programme sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the guided programme with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How would you like the arrival time to be confirmed?",
        "de": "Wie möchten Sie „arrival time“ bestätigt bekommen?",
        "answers": [
          {
            "text": "Please confirm the arrival time by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the arrival time is enough.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you have any further questions about the arrival time?",
        "de": "Haben Sie weitere Fragen zu „arrival time“?",
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
        "bot": "Thank you. The arrangement is complete.",
        "de": "Danke. Die Vereinbarung ist abgeschlossen.",
        "answers": []
      }
    }
  },
  {
    "id": "branch154_camping_pet",
    "topic": "Camping",
    "title": "Mit Haustier campen",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "How can I help you with the pet type?",
        "de": "Wie kann ich Ihnen beim Thema „pet type“ helfen?",
        "answers": [
          {
            "text": "I need to arrange the pet type.",
            "next": "details"
          },
          {
            "text": "There is a problem with the pet type.",
            "next": "problem"
          }
        ]
      },
      "details": {
        "bot": "Could you provide the details about the site rules?",
        "de": "Könnten Sie die Einzelheiten zu „site rules“ nennen?",
        "answers": [
          {
            "text": "Yes, the site rules is confirmed.",
            "next": "solutionA"
          },
          {
            "text": "I still need advice about the site rules.",
            "next": "solutionB"
          }
        ]
      },
      "problem": {
        "bot": "What exactly is the difficulty with the site rules?",
        "de": "Was genau ist das Problem bei „site rules“?",
        "answers": [
          {
            "text": "The site rules is not as expected.",
            "next": "solutionA"
          },
          {
            "text": "I need an alternative for the site rules.",
            "next": "solutionB"
          }
        ]
      },
      "solutionA": {
        "bot": "We can proceed with the extra charge. Would that suit you?",
        "de": "Wir können mit „extra charge“ fortfahren. Passt das für Sie?",
        "answers": [
          {
            "text": "Yes, please proceed with the extra charge.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the extra charge in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "solutionB": {
        "bot": "Another option is the extra charge.",
        "de": "Eine andere Möglichkeit ist „extra charge“.",
        "answers": [
          {
            "text": "That extra charge sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the extra charge with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How would you like the assigned pitch to be confirmed?",
        "de": "Wie möchten Sie „assigned pitch“ bestätigt bekommen?",
        "answers": [
          {
            "text": "Please confirm the assigned pitch by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the assigned pitch is enough.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you have any further questions about the assigned pitch?",
        "de": "Haben Sie weitere Fragen zu „assigned pitch“?",
        "answers": [
          {
            "text": "No, the assigned pitch is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the assigned pitch once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. The arrangement is complete.",
        "de": "Danke. Die Vereinbarung ist abgeschlossen.",
        "answers": []
      }
    }
  },
  {
    "id": "branch154_university_fee",
    "topic": "Bildung",
    "title": "Studiengebühr klären",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "How can I help you with the course fee?",
        "de": "Wie kann ich Ihnen beim Thema „course fee“ helfen?",
        "answers": [
          {
            "text": "I need to arrange the course fee.",
            "next": "details"
          },
          {
            "text": "There is a problem with the course fee.",
            "next": "problem"
          }
        ]
      },
      "details": {
        "bot": "Could you provide the details about the payment deadline?",
        "de": "Könnten Sie die Einzelheiten zu „payment deadline“ nennen?",
        "answers": [
          {
            "text": "Yes, the payment deadline is confirmed.",
            "next": "solutionA"
          },
          {
            "text": "I still need advice about the payment deadline.",
            "next": "solutionB"
          }
        ]
      },
      "problem": {
        "bot": "What exactly is the difficulty with the payment deadline?",
        "de": "Was genau ist das Problem bei „payment deadline“?",
        "answers": [
          {
            "text": "The payment deadline is not as expected.",
            "next": "solutionA"
          },
          {
            "text": "I need an alternative for the payment deadline.",
            "next": "solutionB"
          }
        ]
      },
      "solutionA": {
        "bot": "We can proceed with the instalment option. Would that suit you?",
        "de": "Wir können mit „instalment option“ fortfahren. Passt das für Sie?",
        "answers": [
          {
            "text": "Yes, please proceed with the instalment option.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the instalment option in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "solutionB": {
        "bot": "Another option is the instalment option.",
        "de": "Eine andere Möglichkeit ist „instalment option“.",
        "answers": [
          {
            "text": "That instalment option sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the instalment option with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How would you like the receipt to be confirmed?",
        "de": "Wie möchten Sie „receipt“ bestätigt bekommen?",
        "answers": [
          {
            "text": "Please confirm the receipt by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the receipt is enough.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you have any further questions about the receipt?",
        "de": "Haben Sie weitere Fragen zu „receipt“?",
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
        "bot": "Thank you. The arrangement is complete.",
        "de": "Danke. Die Vereinbarung ist abgeschlossen.",
        "answers": []
      }
    }
  },
  {
    "id": "branch154_sport_personal_training",
    "topic": "Sport",
    "title": "Personal Training buchen",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "How can I help you with the fitness goal?",
        "de": "Wie kann ich Ihnen beim Thema „fitness goal“ helfen?",
        "answers": [
          {
            "text": "I need to arrange the fitness goal.",
            "next": "details"
          },
          {
            "text": "There is a problem with the fitness goal.",
            "next": "problem"
          }
        ]
      },
      "details": {
        "bot": "Could you provide the details about the trainer availability?",
        "de": "Könnten Sie die Einzelheiten zu „trainer availability“ nennen?",
        "answers": [
          {
            "text": "Yes, the trainer availability is confirmed.",
            "next": "solutionA"
          },
          {
            "text": "I still need advice about the trainer availability.",
            "next": "solutionB"
          }
        ]
      },
      "problem": {
        "bot": "What exactly is the difficulty with the trainer availability?",
        "de": "Was genau ist das Problem bei „trainer availability“?",
        "answers": [
          {
            "text": "The trainer availability is not as expected.",
            "next": "solutionA"
          },
          {
            "text": "I need an alternative for the trainer availability.",
            "next": "solutionB"
          }
        ]
      },
      "solutionA": {
        "bot": "We can proceed with the session length. Would that suit you?",
        "de": "Wir können mit „session length“ fortfahren. Passt das für Sie?",
        "answers": [
          {
            "text": "Yes, please proceed with the session length.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the session length in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "solutionB": {
        "bot": "Another option is the session length.",
        "de": "Eine andere Möglichkeit ist „session length“.",
        "answers": [
          {
            "text": "That session length sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the session length with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How would you like the booking to be confirmed?",
        "de": "Wie möchten Sie „booking“ bestätigt bekommen?",
        "answers": [
          {
            "text": "Please confirm the booking by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the booking is enough.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you have any further questions about the booking?",
        "de": "Haben Sie weitere Fragen zu „booking“?",
        "answers": [
          {
            "text": "No, the booking is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the booking once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. The arrangement is complete.",
        "de": "Danke. Die Vereinbarung ist abgeschlossen.",
        "answers": []
      }
    }
  },
  {
    "id": "branch154_neighbour_delivery",
    "topic": "Wohnen",
    "title": "Paket für Nachbarn annehmen",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "How can I help you with the delivery notice?",
        "de": "Wie kann ich Ihnen beim Thema „delivery notice“ helfen?",
        "answers": [
          {
            "text": "I need to arrange the delivery notice.",
            "next": "details"
          },
          {
            "text": "There is a problem with the delivery notice.",
            "next": "problem"
          }
        ]
      },
      "details": {
        "bot": "Could you provide the details about the neighbour flat?",
        "de": "Könnten Sie die Einzelheiten zu „neighbour flat“ nennen?",
        "answers": [
          {
            "text": "Yes, the neighbour flat is confirmed.",
            "next": "solutionA"
          },
          {
            "text": "I still need advice about the neighbour flat.",
            "next": "solutionB"
          }
        ]
      },
      "problem": {
        "bot": "What exactly is the difficulty with the neighbour flat?",
        "de": "Was genau ist das Problem bei „neighbour flat“?",
        "answers": [
          {
            "text": "The neighbour flat is not as expected.",
            "next": "solutionA"
          },
          {
            "text": "I need an alternative for the neighbour flat.",
            "next": "solutionB"
          }
        ]
      },
      "solutionA": {
        "bot": "We can proceed with the collection time. Would that suit you?",
        "de": "Wir können mit „collection time“ fortfahren. Passt das für Sie?",
        "answers": [
          {
            "text": "Yes, please proceed with the collection time.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the collection time in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "solutionB": {
        "bot": "Another option is the collection time.",
        "de": "Eine andere Möglichkeit ist „collection time“.",
        "answers": [
          {
            "text": "That collection time sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the collection time with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How would you like the contact to be confirmed?",
        "de": "Wie möchten Sie „contact“ bestätigt bekommen?",
        "answers": [
          {
            "text": "Please confirm the contact by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the contact is enough.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you have any further questions about the contact?",
        "de": "Haben Sie weitere Fragen zu „contact“?",
        "answers": [
          {
            "text": "No, the contact is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the contact once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. The arrangement is complete.",
        "de": "Danke. Die Vereinbarung ist abgeschlossen.",
        "answers": []
      }
    }
  },
  {
    "id": "branch154_internet_router",
    "topic": "Internet",
    "title": "Router austauschen",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "How can I help you with the router fault?",
        "de": "Wie kann ich Ihnen beim Thema „router fault“ helfen?",
        "answers": [
          {
            "text": "I need to arrange the router fault.",
            "next": "details"
          },
          {
            "text": "There is a problem with the router fault.",
            "next": "problem"
          }
        ]
      },
      "details": {
        "bot": "Could you provide the details about the diagnostic test?",
        "de": "Könnten Sie die Einzelheiten zu „diagnostic test“ nennen?",
        "answers": [
          {
            "text": "Yes, the diagnostic test is confirmed.",
            "next": "solutionA"
          },
          {
            "text": "I still need advice about the diagnostic test.",
            "next": "solutionB"
          }
        ]
      },
      "problem": {
        "bot": "What exactly is the difficulty with the diagnostic test?",
        "de": "Was genau ist das Problem bei „diagnostic test“?",
        "answers": [
          {
            "text": "The diagnostic test is not as expected.",
            "next": "solutionA"
          },
          {
            "text": "I need an alternative for the diagnostic test.",
            "next": "solutionB"
          }
        ]
      },
      "solutionA": {
        "bot": "We can proceed with the replacement delivery. Would that suit you?",
        "de": "Wir können mit „replacement delivery“ fortfahren. Passt das für Sie?",
        "answers": [
          {
            "text": "Yes, please proceed with the replacement delivery.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the replacement delivery in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "solutionB": {
        "bot": "Another option is the replacement delivery.",
        "de": "Eine andere Möglichkeit ist „replacement delivery“.",
        "answers": [
          {
            "text": "That replacement delivery sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the replacement delivery with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How would you like the setup to be confirmed?",
        "de": "Wie möchten Sie „setup“ bestätigt bekommen?",
        "answers": [
          {
            "text": "Please confirm the setup by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the setup is enough.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you have any further questions about the setup?",
        "de": "Haben Sie weitere Fragen zu „setup“?",
        "answers": [
          {
            "text": "No, the setup is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the setup once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. The arrangement is complete.",
        "de": "Danke. Die Vereinbarung ist abgeschlossen.",
        "answers": []
      }
    }
  },
  {
    "id": "branch154_environment_energy",
    "topic": "Umwelt",
    "title": "Energieverbrauch senken",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "How can I help you with the current use?",
        "de": "Wie kann ich Ihnen beim Thema „current use“ helfen?",
        "answers": [
          {
            "text": "I need to arrange the current use.",
            "next": "details"
          },
          {
            "text": "There is a problem with the current use.",
            "next": "problem"
          }
        ]
      },
      "details": {
        "bot": "Could you provide the details about the high-cost area?",
        "de": "Könnten Sie die Einzelheiten zu „high-cost area“ nennen?",
        "answers": [
          {
            "text": "Yes, the high-cost area is confirmed.",
            "next": "solutionA"
          },
          {
            "text": "I still need advice about the high-cost area.",
            "next": "solutionB"
          }
        ]
      },
      "problem": {
        "bot": "What exactly is the difficulty with the high-cost area?",
        "de": "Was genau ist das Problem bei „high-cost area“?",
        "answers": [
          {
            "text": "The high-cost area is not as expected.",
            "next": "solutionA"
          },
          {
            "text": "I need an alternative for the high-cost area.",
            "next": "solutionB"
          }
        ]
      },
      "solutionA": {
        "bot": "We can proceed with the recommended measure. Would that suit you?",
        "de": "Wir können mit „recommended measure“ fortfahren. Passt das für Sie?",
        "answers": [
          {
            "text": "Yes, please proceed with the recommended measure.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the recommended measure in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "solutionB": {
        "bot": "Another option is the recommended measure.",
        "de": "Eine andere Möglichkeit ist „recommended measure“.",
        "answers": [
          {
            "text": "That recommended measure sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the recommended measure with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How would you like the saving estimate to be confirmed?",
        "de": "Wie möchten Sie „saving estimate“ bestätigt bekommen?",
        "answers": [
          {
            "text": "Please confirm the saving estimate by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the saving estimate is enough.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you have any further questions about the saving estimate?",
        "de": "Haben Sie weitere Fragen zu „saving estimate“?",
        "answers": [
          {
            "text": "No, the saving estimate is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the saving estimate once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. The arrangement is complete.",
        "de": "Danke. Die Vereinbarung ist abgeschlossen.",
        "answers": []
      }
    }
  },
  {
    "id": "branch154_smalltalk_work",
    "topic": "Small Talk",
    "title": "Über Arbeit sprechen",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "How can I help you with the current role?",
        "de": "Wie kann ich Ihnen beim Thema „current role“ helfen?",
        "answers": [
          {
            "text": "I need to arrange the current role.",
            "next": "details"
          },
          {
            "text": "There is a problem with the current role.",
            "next": "problem"
          }
        ]
      },
      "details": {
        "bot": "Could you provide the details about the daily tasks?",
        "de": "Könnten Sie die Einzelheiten zu „daily tasks“ nennen?",
        "answers": [
          {
            "text": "Yes, the daily tasks is confirmed.",
            "next": "solutionA"
          },
          {
            "text": "I still need advice about the daily tasks.",
            "next": "solutionB"
          }
        ]
      },
      "problem": {
        "bot": "What exactly is the difficulty with the daily tasks?",
        "de": "Was genau ist das Problem bei „daily tasks“?",
        "answers": [
          {
            "text": "The daily tasks is not as expected.",
            "next": "solutionA"
          },
          {
            "text": "I need an alternative for the daily tasks.",
            "next": "solutionB"
          }
        ]
      },
      "solutionA": {
        "bot": "We can proceed with the favourite part. Would that suit you?",
        "de": "Wir können mit „favourite part“ fortfahren. Passt das für Sie?",
        "answers": [
          {
            "text": "Yes, please proceed with the favourite part.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the favourite part in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "solutionB": {
        "bot": "Another option is the favourite part.",
        "de": "Eine andere Möglichkeit ist „favourite part“.",
        "answers": [
          {
            "text": "That favourite part sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the favourite part with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How would you like the future plan to be confirmed?",
        "de": "Wie möchten Sie „future plan“ bestätigt bekommen?",
        "answers": [
          {
            "text": "Please confirm the future plan by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the future plan is enough.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you have any further questions about the future plan?",
        "de": "Haben Sie weitere Fragen zu „future plan“?",
        "answers": [
          {
            "text": "No, the future plan is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the future plan once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. The arrangement is complete.",
        "de": "Danke. Die Vereinbarung ist abgeschlossen.",
        "answers": []
      }
    }
  },
  {
    "id": "branch154_language_grammar",
    "topic": "Englischlernen",
    "title": "Grammatik gezielt üben",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "How can I help you with the difficult topic?",
        "de": "Wie kann ich Ihnen beim Thema „difficult topic“ helfen?",
        "answers": [
          {
            "text": "I need to arrange the difficult topic.",
            "next": "details"
          },
          {
            "text": "There is a problem with the difficult topic.",
            "next": "problem"
          }
        ]
      },
      "details": {
        "bot": "Could you provide the details about the example sentence?",
        "de": "Könnten Sie die Einzelheiten zu „example sentence“ nennen?",
        "answers": [
          {
            "text": "Yes, the example sentence is confirmed.",
            "next": "solutionA"
          },
          {
            "text": "I still need advice about the example sentence.",
            "next": "solutionB"
          }
        ]
      },
      "problem": {
        "bot": "What exactly is the difficulty with the example sentence?",
        "de": "Was genau ist das Problem bei „example sentence“?",
        "answers": [
          {
            "text": "The example sentence is not as expected.",
            "next": "solutionA"
          },
          {
            "text": "I need an alternative for the example sentence.",
            "next": "solutionB"
          }
        ]
      },
      "solutionA": {
        "bot": "We can proceed with the practice format. Would that suit you?",
        "de": "Wir können mit „practice format“ fortfahren. Passt das für Sie?",
        "answers": [
          {
            "text": "Yes, please proceed with the practice format.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the practice format in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "solutionB": {
        "bot": "Another option is the practice format.",
        "de": "Eine andere Möglichkeit ist „practice format“.",
        "answers": [
          {
            "text": "That practice format sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the practice format with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How would you like the review to be confirmed?",
        "de": "Wie möchten Sie „review“ bestätigt bekommen?",
        "answers": [
          {
            "text": "Please confirm the review by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the review is enough.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you have any further questions about the review?",
        "de": "Haben Sie weitere Fragen zu „review“?",
        "answers": [
          {
            "text": "No, the review is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the review once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. The arrangement is complete.",
        "de": "Danke. Die Vereinbarung ist abgeschlossen.",
        "answers": []
      }
    }
  },
  {
    "id": "branch154_business_supplier",
    "topic": "Beruf",
    "title": "Lieferantenproblem lösen",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "How can I help you with the late delivery?",
        "de": "Wie kann ich Ihnen beim Thema „late delivery“ helfen?",
        "answers": [
          {
            "text": "I need to arrange the late delivery.",
            "next": "details"
          },
          {
            "text": "There is a problem with the late delivery.",
            "next": "problem"
          }
        ]
      },
      "details": {
        "bot": "Could you provide the details about the order quantity?",
        "de": "Könnten Sie die Einzelheiten zu „order quantity“ nennen?",
        "answers": [
          {
            "text": "Yes, the order quantity is confirmed.",
            "next": "solutionA"
          },
          {
            "text": "I still need advice about the order quantity.",
            "next": "solutionB"
          }
        ]
      },
      "problem": {
        "bot": "What exactly is the difficulty with the order quantity?",
        "de": "Was genau ist das Problem bei „order quantity“?",
        "answers": [
          {
            "text": "The order quantity is not as expected.",
            "next": "solutionA"
          },
          {
            "text": "I need an alternative for the order quantity.",
            "next": "solutionB"
          }
        ]
      },
      "solutionA": {
        "bot": "We can proceed with the replacement schedule. Would that suit you?",
        "de": "Wir können mit „replacement schedule“ fortfahren. Passt das für Sie?",
        "answers": [
          {
            "text": "Yes, please proceed with the replacement schedule.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the replacement schedule in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "solutionB": {
        "bot": "Another option is the replacement schedule.",
        "de": "Eine andere Möglichkeit ist „replacement schedule“.",
        "answers": [
          {
            "text": "That replacement schedule sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the replacement schedule with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How would you like the penalty to be confirmed?",
        "de": "Wie möchten Sie „penalty“ bestätigt bekommen?",
        "answers": [
          {
            "text": "Please confirm the penalty by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the penalty is enough.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you have any further questions about the penalty?",
        "de": "Haben Sie weitere Fragen zu „penalty“?",
        "answers": [
          {
            "text": "No, the penalty is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the penalty once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. The arrangement is complete.",
        "de": "Danke. Die Vereinbarung ist abgeschlossen.",
        "answers": []
      }
    }
  },
  {
    "id": "branch154_medical_insurance",
    "topic": "Gesundheit",
    "title": "Versicherung beim Arzt",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "How can I help you with the insurance card?",
        "de": "Wie kann ich Ihnen beim Thema „insurance card“ helfen?",
        "answers": [
          {
            "text": "I need to arrange the insurance card.",
            "next": "details"
          },
          {
            "text": "There is a problem with the insurance card.",
            "next": "problem"
          }
        ]
      },
      "details": {
        "bot": "Could you provide the details about the coverage question?",
        "de": "Könnten Sie die Einzelheiten zu „coverage question“ nennen?",
        "answers": [
          {
            "text": "Yes, the coverage question is confirmed.",
            "next": "solutionA"
          },
          {
            "text": "I still need advice about the coverage question.",
            "next": "solutionB"
          }
        ]
      },
      "problem": {
        "bot": "What exactly is the difficulty with the coverage question?",
        "de": "Was genau ist das Problem bei „coverage question“?",
        "answers": [
          {
            "text": "The coverage question is not as expected.",
            "next": "solutionA"
          },
          {
            "text": "I need an alternative for the coverage question.",
            "next": "solutionB"
          }
        ]
      },
      "solutionA": {
        "bot": "We can proceed with the private charge. Would that suit you?",
        "de": "Wir können mit „private charge“ fortfahren. Passt das für Sie?",
        "answers": [
          {
            "text": "Yes, please proceed with the private charge.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the private charge in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "solutionB": {
        "bot": "Another option is the private charge.",
        "de": "Eine andere Möglichkeit ist „private charge“.",
        "answers": [
          {
            "text": "That private charge sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the private charge with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How would you like the invoice to be confirmed?",
        "de": "Wie möchten Sie „invoice“ bestätigt bekommen?",
        "answers": [
          {
            "text": "Please confirm the invoice by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the invoice is enough.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you have any further questions about the invoice?",
        "de": "Haben Sie weitere Fragen zu „invoice“?",
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
        "bot": "Thank you. The arrangement is complete.",
        "de": "Danke. Die Vereinbarung ist abgeschlossen.",
        "answers": []
      }
    }
  },
  {
    "id": "branch154_event_venue",
    "topic": "Freizeit",
    "title": "Veranstaltungsort buchen",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "How can I help you with the event date?",
        "de": "Wie kann ich Ihnen beim Thema „event date“ helfen?",
        "answers": [
          {
            "text": "I need to arrange the event date.",
            "next": "details"
          },
          {
            "text": "There is a problem with the event date.",
            "next": "problem"
          }
        ]
      },
      "details": {
        "bot": "Could you provide the details about the guest number?",
        "de": "Könnten Sie die Einzelheiten zu „guest number“ nennen?",
        "answers": [
          {
            "text": "Yes, the guest number is confirmed.",
            "next": "solutionA"
          },
          {
            "text": "I still need advice about the guest number.",
            "next": "solutionB"
          }
        ]
      },
      "problem": {
        "bot": "What exactly is the difficulty with the guest number?",
        "de": "Was genau ist das Problem bei „guest number“?",
        "answers": [
          {
            "text": "The guest number is not as expected.",
            "next": "solutionA"
          },
          {
            "text": "I need an alternative for the guest number.",
            "next": "solutionB"
          }
        ]
      },
      "solutionA": {
        "bot": "We can proceed with the room layout. Would that suit you?",
        "de": "Wir können mit „room layout“ fortfahren. Passt das für Sie?",
        "answers": [
          {
            "text": "Yes, please proceed with the room layout.",
            "next": "confirmA"
          },
          {
            "text": "Could you explain the room layout in more detail?",
            "next": "confirmB"
          }
        ]
      },
      "solutionB": {
        "bot": "Another option is the room layout.",
        "de": "Eine andere Möglichkeit ist „room layout“.",
        "answers": [
          {
            "text": "That room layout sounds suitable.",
            "next": "confirmA"
          },
          {
            "text": "I would like to compare the room layout with another option.",
            "next": "confirmB"
          }
        ]
      },
      "confirmA": {
        "bot": "How would you like the final contract to be confirmed?",
        "de": "Wie möchten Sie „final contract“ bestätigt bekommen?",
        "answers": [
          {
            "text": "Please confirm the final contract by email.",
            "next": "end"
          },
          {
            "text": "A written confirmation of the final contract is enough.",
            "next": "end"
          }
        ]
      },
      "confirmB": {
        "bot": "Do you have any further questions about the final contract?",
        "de": "Haben Sie weitere Fragen zu „final contract“?",
        "answers": [
          {
            "text": "No, the final contract is clear now.",
            "next": "end"
          },
          {
            "text": "Please explain the final contract once more.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Thank you. The arrangement is complete.",
        "de": "Danke. Die Vereinbarung ist abgeschlossen.",
        "answers": []
      }
    }
  }
];
ES_BRANCHING_SCENARIOS_151.push(...ES_BRANCHING_SCENARIOS_154);
