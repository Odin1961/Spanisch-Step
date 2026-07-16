const ES_SCENARIOS = [
  {
    "id": "sc1",
    "topic": "Restaurant",
    "title": "Tisch reservieren",
    "goal": "book a table",
    "keywords": [
      "reservation",
      "table"
    ],
    "steps": 10
  },
  {
    "id": "sc2",
    "topic": "Restaurant",
    "title": "Getränke bestellen",
    "goal": "order drinks",
    "keywords": [
      "water",
      "coffee"
    ],
    "steps": 10
  },
  {
    "id": "sc3",
    "topic": "Restaurant",
    "title": "Nach Empfehlungen fragen",
    "goal": "ask for a recommendation",
    "keywords": [
      "menu",
      "starter"
    ],
    "steps": 10
  },
  {
    "id": "sc4",
    "topic": "Restaurant",
    "title": "Allergie erklären",
    "goal": "explain an allergy",
    "keywords": [
      "allergy",
      "main course"
    ],
    "steps": 10
  },
  {
    "id": "sc5",
    "topic": "Restaurant",
    "title": "Bezahlen",
    "goal": "pay the bill",
    "keywords": [
      "bill",
      "receipt"
    ],
    "steps": 10
  },
  {
    "id": "sc6",
    "topic": "Hotel",
    "title": "Einchecken",
    "goal": "check in",
    "keywords": [
      "reservation",
      "passport"
    ],
    "steps": 10
  },
  {
    "id": "sc7",
    "topic": "Hotel",
    "title": "Zimmerproblem melden",
    "goal": "report a room problem",
    "keywords": [
      "room",
      "reception"
    ],
    "steps": 10
  },
  {
    "id": "sc8",
    "topic": "Hotel",
    "title": "Frühstück erfragen",
    "goal": "ask about breakfast",
    "keywords": [
      "breakfast",
      "lift"
    ],
    "steps": 10
  },
  {
    "id": "sc9",
    "topic": "Hotel",
    "title": "Zusätzliches Handtuch",
    "goal": "ask for another towel",
    "keywords": [
      "towel",
      "room"
    ],
    "steps": 10
  },
  {
    "id": "sc10",
    "topic": "Hotel",
    "title": "Auschecken",
    "goal": "check out",
    "keywords": [
      "checkout",
      "luggage"
    ],
    "steps": 10
  },
  {
    "id": "sc11",
    "topic": "Flughafen",
    "title": "Einchecken",
    "goal": "check in for a flight",
    "keywords": [
      "passport",
      "boarding pass"
    ],
    "steps": 10
  },
  {
    "id": "sc12",
    "topic": "Flughafen",
    "title": "Gepäck aufgeben",
    "goal": "check in luggage",
    "keywords": [
      "luggage",
      "suitcase"
    ],
    "steps": 10
  },
  {
    "id": "sc13",
    "topic": "Flughafen",
    "title": "Gate finden",
    "goal": "find the gate",
    "keywords": [
      "gate",
      "departure"
    ],
    "steps": 10
  },
  {
    "id": "sc14",
    "topic": "Flughafen",
    "title": "Verspätung klären",
    "goal": "ask about a delay",
    "keywords": [
      "delay",
      "flight"
    ],
    "steps": 10
  },
  {
    "id": "sc15",
    "topic": "Flughafen",
    "title": "Zoll",
    "goal": "speak to customs",
    "keywords": [
      "customs",
      "passport"
    ],
    "steps": 10
  },
  {
    "id": "sc16",
    "topic": "Bahnhof",
    "title": "Fahrkarte kaufen",
    "goal": "buy a ticket",
    "keywords": [
      "ticket",
      "return ticket"
    ],
    "steps": 10
  },
  {
    "id": "sc17",
    "topic": "Bahnhof",
    "title": "Gleis finden",
    "goal": "find the platform",
    "keywords": [
      "platform",
      "station"
    ],
    "steps": 10
  },
  {
    "id": "sc18",
    "topic": "Bahnhof",
    "title": "Verbindung erfragen",
    "goal": "ask about a connection",
    "keywords": [
      "connection",
      "timetable"
    ],
    "steps": 10
  },
  {
    "id": "sc19",
    "topic": "Bahnhof",
    "title": "Verspätung",
    "goal": "ask about a delay",
    "keywords": [
      "train",
      "departure"
    ],
    "steps": 10
  },
  {
    "id": "sc20",
    "topic": "Bahnhof",
    "title": "Sitzplatz",
    "goal": "find a seat",
    "keywords": [
      "seat",
      "carriage"
    ],
    "steps": 10
  },
  {
    "id": "sc21",
    "topic": "Einkaufen",
    "title": "Größe finden",
    "goal": "ask for a size",
    "keywords": [
      "size",
      "changing room"
    ],
    "steps": 10
  },
  {
    "id": "sc22",
    "topic": "Einkaufen",
    "title": "Preis erfragen",
    "goal": "ask about the price",
    "keywords": [
      "price",
      "discount"
    ],
    "steps": 10
  },
  {
    "id": "sc23",
    "topic": "Einkaufen",
    "title": "Umtausch",
    "goal": "ask for a refund",
    "keywords": [
      "refund",
      "receipt"
    ],
    "steps": 10
  },
  {
    "id": "sc24",
    "topic": "Einkaufen",
    "title": "Bar oder Karte",
    "goal": "pay",
    "keywords": [
      "cash",
      "card"
    ],
    "steps": 10
  },
  {
    "id": "sc25",
    "topic": "Einkaufen",
    "title": "Beratung",
    "goal": "ask a shop assistant",
    "keywords": [
      "shop assistant",
      "customer"
    ],
    "steps": 10
  },
  {
    "id": "sc26",
    "topic": "Arzt",
    "title": "Termin",
    "goal": "make an appointment",
    "keywords": [
      "appointment",
      "doctor"
    ],
    "steps": 10
  },
  {
    "id": "sc27",
    "topic": "Arzt",
    "title": "Symptome beschreiben",
    "goal": "describe symptoms",
    "keywords": [
      "symptom",
      "pain"
    ],
    "steps": 10
  },
  {
    "id": "sc28",
    "topic": "Arzt",
    "title": "Medikamente",
    "goal": "ask about medicine",
    "keywords": [
      "medicine",
      "prescription"
    ],
    "steps": 10
  },
  {
    "id": "sc29",
    "topic": "Arzt",
    "title": "Kopfschmerzen",
    "goal": "describe a headache",
    "keywords": [
      "headache",
      "treatment"
    ],
    "steps": 10
  },
  {
    "id": "sc30",
    "topic": "Arzt",
    "title": "Wartezimmer",
    "goal": "ask about waiting time",
    "keywords": [
      "waiting room",
      "appointment"
    ],
    "steps": 10
  },
  {
    "id": "sc31",
    "topic": "Apotheke",
    "title": "Schmerzmittel",
    "goal": "buy a painkiller",
    "keywords": [
      "painkiller",
      "tablet"
    ],
    "steps": 10
  },
  {
    "id": "sc32",
    "topic": "Apotheke",
    "title": "Dosierung",
    "goal": "ask about dosage",
    "keywords": [
      "dosage",
      "medicine"
    ],
    "steps": 10
  },
  {
    "id": "sc33",
    "topic": "Apotheke",
    "title": "Nebenwirkungen",
    "goal": "ask about side effects",
    "keywords": [
      "side effect",
      "medicine"
    ],
    "steps": 10
  },
  {
    "id": "sc34",
    "topic": "Apotheke",
    "title": "Erkältung",
    "goal": "ask for a cold remedy",
    "keywords": [
      "cold remedy",
      "tablet"
    ],
    "steps": 10
  },
  {
    "id": "sc35",
    "topic": "Apotheke",
    "title": "Rezept",
    "goal": "hand in a prescription",
    "keywords": [
      "prescription",
      "pharmacy"
    ],
    "steps": 10
  },
  {
    "id": "sc36",
    "topic": "Beruf",
    "title": "Meeting planen",
    "goal": "schedule a meeting",
    "keywords": [
      "meeting",
      "appointment"
    ],
    "steps": 10
  },
  {
    "id": "sc37",
    "topic": "Beruf",
    "title": "Frist besprechen",
    "goal": "discuss a deadline",
    "keywords": [
      "deadline",
      "project"
    ],
    "steps": 10
  },
  {
    "id": "sc38",
    "topic": "Beruf",
    "title": "Bericht erklären",
    "goal": "explain a report",
    "keywords": [
      "report",
      "task"
    ],
    "steps": 10
  },
  {
    "id": "sc39",
    "topic": "Beruf",
    "title": "Kollegen begrüßen",
    "goal": "talk to a colleague",
    "keywords": [
      "colleague",
      "office"
    ],
    "steps": 10
  },
  {
    "id": "sc40",
    "topic": "Beruf",
    "title": "Vorstellungsgespräch",
    "goal": "attend an interview",
    "keywords": [
      "interview",
      "manager"
    ],
    "steps": 10
  },
  {
    "id": "sc41",
    "topic": "Telefon",
    "title": "Nachricht hinterlassen",
    "goal": "leave a message",
    "keywords": [
      "message",
      "voicemail"
    ],
    "steps": 10
  },
  {
    "id": "sc42",
    "topic": "Telefon",
    "title": "Durchwahl",
    "goal": "ask for an extension",
    "keywords": [
      "extension",
      "phone call"
    ],
    "steps": 10
  },
  {
    "id": "sc43",
    "topic": "Telefon",
    "title": "Schlechter Empfang",
    "goal": "explain a bad signal",
    "keywords": [
      "signal",
      "phone"
    ],
    "steps": 10
  },
  {
    "id": "sc44",
    "topic": "Telefon",
    "title": "Rückruf",
    "goal": "ask for a callback",
    "keywords": [
      "missed call",
      "contact"
    ],
    "steps": 10
  },
  {
    "id": "sc45",
    "topic": "Telefon",
    "title": "Nummer prüfen",
    "goal": "check a phone number",
    "keywords": [
      "phone number",
      "area code"
    ],
    "steps": 10
  },
  {
    "id": "sc46",
    "topic": "Small Talk",
    "title": "Wetter",
    "goal": "talk about the weather",
    "keywords": [
      "weather",
      "forecast"
    ],
    "steps": 10
  },
  {
    "id": "sc47",
    "topic": "Small Talk",
    "title": "Wochenende",
    "goal": "talk about the weekend",
    "keywords": [
      "weekend",
      "holiday"
    ],
    "steps": 10
  },
  {
    "id": "sc48",
    "topic": "Small Talk",
    "title": "Hobbys",
    "goal": "talk about hobbies",
    "keywords": [
      "hobby",
      "music"
    ],
    "steps": 10
  },
  {
    "id": "sc49",
    "topic": "Small Talk",
    "title": "Familie",
    "goal": "talk about family",
    "keywords": [
      "family",
      "friend"
    ],
    "steps": 10
  },
  {
    "id": "sc50",
    "topic": "Small Talk",
    "title": "Reisen",
    "goal": "talk about holidays",
    "keywords": [
      "holiday",
      "airport"
    ],
    "steps": 10
  },
  {
    "id": "sc51",
    "topic": "Autovermietung",
    "title": "Auto auswählen",
    "goal": "choose a rental car",
    "keywords": [
      "rental car",
      "automatic car"
    ],
    "steps": 10
  },
  {
    "id": "sc52",
    "topic": "Autovermietung",
    "title": "Versicherung",
    "goal": "ask about insurance",
    "keywords": [
      "insurance",
      "deposit"
    ],
    "steps": 10
  },
  {
    "id": "sc53",
    "topic": "Autovermietung",
    "title": "Schaden melden",
    "goal": "report damage",
    "keywords": [
      "damage",
      "rental desk"
    ],
    "steps": 10
  },
  {
    "id": "sc54",
    "topic": "Autovermietung",
    "title": "Tanken",
    "goal": "ask about fuel",
    "keywords": [
      "fuel",
      "return date"
    ],
    "steps": 10
  },
  {
    "id": "sc55",
    "topic": "Autovermietung",
    "title": "Rückgabe",
    "goal": "return the car",
    "keywords": [
      "return date",
      "rental desk"
    ],
    "steps": 10
  },
  {
    "id": "sc56",
    "topic": "Bank",
    "title": "Konto eröffnen",
    "goal": "open a bank account",
    "keywords": [
      "bank account",
      "bank card"
    ],
    "steps": 10
  },
  {
    "id": "sc57",
    "topic": "Bank",
    "title": "Geld abheben",
    "goal": "use a cash machine",
    "keywords": [
      "cash machine",
      "cash"
    ],
    "steps": 10
  },
  {
    "id": "sc58",
    "topic": "Bank",
    "title": "Überweisung",
    "goal": "make a transfer",
    "keywords": [
      "transfer",
      "balance"
    ],
    "steps": 10
  },
  {
    "id": "sc59",
    "topic": "Bank",
    "title": "Wechselkurs",
    "goal": "ask about exchange rates",
    "keywords": [
      "exchange rate",
      "currency"
    ],
    "steps": 10
  },
  {
    "id": "sc60",
    "topic": "Bank",
    "title": "Kredit",
    "goal": "ask about a loan",
    "keywords": [
      "loan",
      "interest"
    ],
    "steps": 10
  },
  {
    "id": "sc61",
    "topic": "Post",
    "title": "Paket senden",
    "goal": "send a parcel",
    "keywords": [
      "parcel",
      "delivery"
    ],
    "steps": 10
  },
  {
    "id": "sc62",
    "topic": "Post",
    "title": "Briefmarken",
    "goal": "buy stamps",
    "keywords": [
      "stamp",
      "letter"
    ],
    "steps": 10
  },
  {
    "id": "sc63",
    "topic": "Post",
    "title": "Adresse prüfen",
    "goal": "check an address",
    "keywords": [
      "address",
      "envelope"
    ],
    "steps": 10
  },
  {
    "id": "sc64",
    "topic": "Post",
    "title": "Sendung verfolgen",
    "goal": "track a parcel",
    "keywords": [
      "tracking number",
      "delivery"
    ],
    "steps": 10
  },
  {
    "id": "sc65",
    "topic": "Post",
    "title": "Postkarte",
    "goal": "send a postcard",
    "keywords": [
      "postcard",
      "stamp"
    ],
    "steps": 10
  },
  {
    "id": "sc66",
    "topic": "Museum",
    "title": "Eintritt",
    "goal": "buy a museum ticket",
    "keywords": [
      "ticket office",
      "entrance"
    ],
    "steps": 10
  },
  {
    "id": "sc67",
    "topic": "Museum",
    "title": "Öffnungszeiten",
    "goal": "ask about opening hours",
    "keywords": [
      "opening hours",
      "museum"
    ],
    "steps": 10
  },
  {
    "id": "sc68",
    "topic": "Museum",
    "title": "Audioguide",
    "goal": "rent an audio guide",
    "keywords": [
      "audio guide",
      "gallery"
    ],
    "steps": 10
  },
  {
    "id": "sc69",
    "topic": "Museum",
    "title": "Ausstellung",
    "goal": "ask about an exhibition",
    "keywords": [
      "exhibition",
      "painting"
    ],
    "steps": 10
  },
  {
    "id": "sc70",
    "topic": "Museum",
    "title": "Führung",
    "goal": "join a guided tour",
    "keywords": [
      "guide",
      "artist"
    ],
    "steps": 10
  },
  {
    "id": "sc71",
    "topic": "Camping",
    "title": "Platz reservieren",
    "goal": "book a campsite",
    "keywords": [
      "campsite",
      "tent"
    ],
    "steps": 10
  },
  {
    "id": "sc72",
    "topic": "Camping",
    "title": "Ausrüstung",
    "goal": "ask about equipment",
    "keywords": [
      "sleeping bag",
      "torch"
    ],
    "steps": 10
  },
  {
    "id": "sc73",
    "topic": "Camping",
    "title": "Wanderweg",
    "goal": "ask about a trail",
    "keywords": [
      "hiking trail",
      "map"
    ],
    "steps": 10
  },
  {
    "id": "sc74",
    "topic": "Camping",
    "title": "Lagerfeuer",
    "goal": "ask about a campfire",
    "keywords": [
      "campfire",
      "campsite"
    ],
    "steps": 10
  },
  {
    "id": "sc75",
    "topic": "Camping",
    "title": "Wetter",
    "goal": "ask about the weather",
    "keywords": [
      "forecast",
      "tent"
    ],
    "steps": 10
  },
  {
    "id": "sc76",
    "topic": "Strand",
    "title": "Sonnenliege",
    "goal": "rent a sunbed",
    "keywords": [
      "sunbed",
      "beach"
    ],
    "steps": 10
  },
  {
    "id": "sc77",
    "topic": "Strand",
    "title": "Sonnencreme",
    "goal": "buy sun cream",
    "keywords": [
      "sun cream",
      "shop"
    ],
    "steps": 10
  },
  {
    "id": "sc78",
    "topic": "Strand",
    "title": "Wellen",
    "goal": "ask about the waves",
    "keywords": [
      "wave",
      "lifeguard"
    ],
    "steps": 10
  },
  {
    "id": "sc79",
    "topic": "Strand",
    "title": "Handtuch",
    "goal": "ask for a towel",
    "keywords": [
      "towel",
      "beach"
    ],
    "steps": 10
  },
  {
    "id": "sc80",
    "topic": "Strand",
    "title": "Muscheln",
    "goal": "talk about shells",
    "keywords": [
      "shell",
      "sand"
    ],
    "steps": 10
  },
  {
    "id": "sc81",
    "topic": "Kreuzfahrt",
    "title": "Einchecken",
    "goal": "check in on a ship",
    "keywords": [
      "ship",
      "passport"
    ],
    "steps": 10
  },
  {
    "id": "sc82",
    "topic": "Kreuzfahrt",
    "title": "Kabine",
    "goal": "find a cabin",
    "keywords": [
      "cabin",
      "deck"
    ],
    "steps": 10
  },
  {
    "id": "sc83",
    "topic": "Kreuzfahrt",
    "title": "Ausflug",
    "goal": "book an excursion",
    "keywords": [
      "excursion",
      "port"
    ],
    "steps": 10
  },
  {
    "id": "sc84",
    "topic": "Kreuzfahrt",
    "title": "Buffet",
    "goal": "ask about the buffet",
    "keywords": [
      "buffet",
      "passenger"
    ],
    "steps": 10
  },
  {
    "id": "sc85",
    "topic": "Kreuzfahrt",
    "title": "Rettungsweste",
    "goal": "ask about safety",
    "keywords": [
      "life jacket",
      "captain"
    ],
    "steps": 10
  },
  {
    "id": "sc86",
    "topic": "Universität",
    "title": "Kurs wählen",
    "goal": "choose a course",
    "keywords": [
      "course",
      "semester"
    ],
    "steps": 10
  },
  {
    "id": "sc87",
    "topic": "Universität",
    "title": "Vorlesung",
    "goal": "ask about a lecture",
    "keywords": [
      "lecture",
      "professor"
    ],
    "steps": 10
  },
  {
    "id": "sc88",
    "topic": "Universität",
    "title": "Bibliothek",
    "goal": "use the library",
    "keywords": [
      "library",
      "research"
    ],
    "steps": 10
  },
  {
    "id": "sc89",
    "topic": "Universität",
    "title": "Aufgabe",
    "goal": "discuss an assignment",
    "keywords": [
      "assignment",
      "student"
    ],
    "steps": 10
  },
  {
    "id": "sc90",
    "topic": "Universität",
    "title": "Stipendium",
    "goal": "ask about a scholarship",
    "keywords": [
      "scholarship",
      "degree"
    ],
    "steps": 10
  },
  {
    "id": "sc91",
    "topic": "Sport",
    "title": "Training",
    "goal": "join a training session",
    "keywords": [
      "training",
      "coach"
    ],
    "steps": 10
  },
  {
    "id": "sc92",
    "topic": "Sport",
    "title": "Spiel",
    "goal": "talk about a match",
    "keywords": [
      "match",
      "score"
    ],
    "steps": 10
  },
  {
    "id": "sc93",
    "topic": "Sport",
    "title": "Eintritt",
    "goal": "buy a stadium ticket",
    "keywords": [
      "stadium",
      "ticket"
    ],
    "steps": 10
  },
  {
    "id": "sc94",
    "topic": "Sport",
    "title": "Mannschaft",
    "goal": "talk about a team",
    "keywords": [
      "team",
      "player"
    ],
    "steps": 10
  },
  {
    "id": "sc95",
    "topic": "Sport",
    "title": "Wettbewerb",
    "goal": "enter a competition",
    "keywords": [
      "competition",
      "exercise"
    ],
    "steps": 10
  },
  {
    "id": "sc96",
    "topic": "Wohnen",
    "title": "Wohnung suchen",
    "goal": "look for a flat",
    "keywords": [
      "flat",
      "rent"
    ],
    "steps": 10
  },
  {
    "id": "sc97",
    "topic": "Wohnen",
    "title": "Vermieter",
    "goal": "talk to a landlord",
    "keywords": [
      "landlord",
      "rent"
    ],
    "steps": 10
  },
  {
    "id": "sc98",
    "topic": "Wohnen",
    "title": "Möbel",
    "goal": "buy furniture",
    "keywords": [
      "furniture",
      "house"
    ],
    "steps": 10
  },
  {
    "id": "sc99",
    "topic": "Wohnen",
    "title": "Nachbarn",
    "goal": "meet a neighbour",
    "keywords": [
      "neighbour",
      "street"
    ],
    "steps": 10
  },
  {
    "id": "sc100",
    "topic": "Wohnen",
    "title": "Reparatur",
    "goal": "report a problem",
    "keywords": [
      "bathroom",
      "kitchen"
    ],
    "steps": 10
  }
];
