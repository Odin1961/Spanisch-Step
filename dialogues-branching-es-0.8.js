const ES_BRANCHING_SCENARIOS_08 = [
  {
    "id": "es08_estrategia_revision",
    "topic": "Strategie",
    "title": "Strategie überprüfen",
    "level": "B1-B2",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿Qué cuestión desea analizar?",
        "de": "Guten Tag. Welche Frage möchten Sie analysieren?",
        "answers": [
          {
            "text": "Quiero revisar los hechos y las opciones.",
            "next": "details"
          },
          {
            "text": "Necesito tomar una decisión fundamentada.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Cuáles son los datos y riesgos principales?",
        "de": "Was sind die wichtigsten Daten und Risiken?",
        "answers": [
          {
            "text": "Estos son los datos más relevantes.",
            "next": "options"
          },
          {
            "text": "El mayor riesgo es el siguiente.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Podemos comparar impacto, coste y viabilidad.",
        "de": "Wir können Wirkung, Kosten und Umsetzbarkeit vergleichen.",
        "answers": [
          {
            "text": "Prefiero la opción con menor riesgo.",
            "next": "confirm"
          },
          {
            "text": "Quiero priorizar el beneficio a largo plazo.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo desea registrar la decisión?",
        "de": "Wie möchten Sie die Entscheidung festhalten?",
        "answers": [
          {
            "text": "En un informe detallado.",
            "next": "end"
          },
          {
            "text": "En un resumen con próximos pasos.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión y sus fundamentos quedan documentados.",
        "de": "Perfekt. Entscheidung und Begründung sind dokumentiert.",
        "answers": []
      }
    }
  },
  {
    "id": "es08_estrategia_inversion",
    "topic": "Strategie",
    "title": "Investition bewerten",
    "level": "B1-B2",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿Qué cuestión desea analizar?",
        "de": "Guten Tag. Welche Frage möchten Sie analysieren?",
        "answers": [
          {
            "text": "Quiero revisar los hechos y las opciones.",
            "next": "details"
          },
          {
            "text": "Necesito tomar una decisión fundamentada.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Cuáles son los datos y riesgos principales?",
        "de": "Was sind die wichtigsten Daten und Risiken?",
        "answers": [
          {
            "text": "Estos son los datos más relevantes.",
            "next": "options"
          },
          {
            "text": "El mayor riesgo es el siguiente.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Podemos comparar impacto, coste y viabilidad.",
        "de": "Wir können Wirkung, Kosten und Umsetzbarkeit vergleichen.",
        "answers": [
          {
            "text": "Prefiero la opción con menor riesgo.",
            "next": "confirm"
          },
          {
            "text": "Quiero priorizar el beneficio a largo plazo.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo desea registrar la decisión?",
        "de": "Wie möchten Sie die Entscheidung festhalten?",
        "answers": [
          {
            "text": "En un informe detallado.",
            "next": "end"
          },
          {
            "text": "En un resumen con próximos pasos.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión y sus fundamentos quedan documentados.",
        "de": "Perfekt. Entscheidung und Begründung sind dokumentiert.",
        "answers": []
      }
    }
  },
  {
    "id": "es08_calidad_defecto",
    "topic": "Qualität",
    "title": "Qualitätsmangel",
    "level": "B1-B2",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿Qué cuestión desea analizar?",
        "de": "Guten Tag. Welche Frage möchten Sie analysieren?",
        "answers": [
          {
            "text": "Quiero revisar los hechos y las opciones.",
            "next": "details"
          },
          {
            "text": "Necesito tomar una decisión fundamentada.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Cuáles son los datos y riesgos principales?",
        "de": "Was sind die wichtigsten Daten und Risiken?",
        "answers": [
          {
            "text": "Estos son los datos más relevantes.",
            "next": "options"
          },
          {
            "text": "El mayor riesgo es el siguiente.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Podemos comparar impacto, coste y viabilidad.",
        "de": "Wir können Wirkung, Kosten und Umsetzbarkeit vergleichen.",
        "answers": [
          {
            "text": "Prefiero la opción con menor riesgo.",
            "next": "confirm"
          },
          {
            "text": "Quiero priorizar el beneficio a largo plazo.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo desea registrar la decisión?",
        "de": "Wie möchten Sie die Entscheidung festhalten?",
        "answers": [
          {
            "text": "En un informe detallado.",
            "next": "end"
          },
          {
            "text": "En un resumen con próximos pasos.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión y sus fundamentos quedan documentados.",
        "de": "Perfekt. Entscheidung und Begründung sind dokumentiert.",
        "answers": []
      }
    }
  },
  {
    "id": "es08_calidad_auditoria",
    "topic": "Qualität",
    "title": "Audit vorbereiten",
    "level": "B1-B2",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿Qué cuestión desea analizar?",
        "de": "Guten Tag. Welche Frage möchten Sie analysieren?",
        "answers": [
          {
            "text": "Quiero revisar los hechos y las opciones.",
            "next": "details"
          },
          {
            "text": "Necesito tomar una decisión fundamentada.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Cuáles son los datos y riesgos principales?",
        "de": "Was sind die wichtigsten Daten und Risiken?",
        "answers": [
          {
            "text": "Estos son los datos más relevantes.",
            "next": "options"
          },
          {
            "text": "El mayor riesgo es el siguiente.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Podemos comparar impacto, coste y viabilidad.",
        "de": "Wir können Wirkung, Kosten und Umsetzbarkeit vergleichen.",
        "answers": [
          {
            "text": "Prefiero la opción con menor riesgo.",
            "next": "confirm"
          },
          {
            "text": "Quiero priorizar el beneficio a largo plazo.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo desea registrar la decisión?",
        "de": "Wie möchten Sie die Entscheidung festhalten?",
        "answers": [
          {
            "text": "En un informe detallado.",
            "next": "end"
          },
          {
            "text": "En un resumen con próximos pasos.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión y sus fundamentos quedan documentados.",
        "de": "Perfekt. Entscheidung und Begründung sind dokumentiert.",
        "answers": []
      }
    }
  },
  {
    "id": "es08_produccion_parada",
    "topic": "Produktion",
    "title": "Produktionsstillstand",
    "level": "B1-B2",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿Qué cuestión desea analizar?",
        "de": "Guten Tag. Welche Frage möchten Sie analysieren?",
        "answers": [
          {
            "text": "Quiero revisar los hechos y las opciones.",
            "next": "details"
          },
          {
            "text": "Necesito tomar una decisión fundamentada.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Cuáles son los datos y riesgos principales?",
        "de": "Was sind die wichtigsten Daten und Risiken?",
        "answers": [
          {
            "text": "Estos son los datos más relevantes.",
            "next": "options"
          },
          {
            "text": "El mayor riesgo es el siguiente.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Podemos comparar impacto, coste y viabilidad.",
        "de": "Wir können Wirkung, Kosten und Umsetzbarkeit vergleichen.",
        "answers": [
          {
            "text": "Prefiero la opción con menor riesgo.",
            "next": "confirm"
          },
          {
            "text": "Quiero priorizar el beneficio a largo plazo.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo desea registrar la decisión?",
        "de": "Wie möchten Sie die Entscheidung festhalten?",
        "answers": [
          {
            "text": "En un informe detallado.",
            "next": "end"
          },
          {
            "text": "En un resumen con próximos pasos.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión y sus fundamentos quedan documentados.",
        "de": "Perfekt. Entscheidung und Begründung sind dokumentiert.",
        "answers": []
      }
    }
  },
  {
    "id": "es08_produccion_plan",
    "topic": "Produktion",
    "title": "Produktionsplan",
    "level": "B1-B2",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿Qué cuestión desea analizar?",
        "de": "Guten Tag. Welche Frage möchten Sie analysieren?",
        "answers": [
          {
            "text": "Quiero revisar los hechos y las opciones.",
            "next": "details"
          },
          {
            "text": "Necesito tomar una decisión fundamentada.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Cuáles son los datos y riesgos principales?",
        "de": "Was sind die wichtigsten Daten und Risiken?",
        "answers": [
          {
            "text": "Estos son los datos más relevantes.",
            "next": "options"
          },
          {
            "text": "El mayor riesgo es el siguiente.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Podemos comparar impacto, coste y viabilidad.",
        "de": "Wir können Wirkung, Kosten und Umsetzbarkeit vergleichen.",
        "answers": [
          {
            "text": "Prefiero la opción con menor riesgo.",
            "next": "confirm"
          },
          {
            "text": "Quiero priorizar el beneficio a largo plazo.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo desea registrar la decisión?",
        "de": "Wie möchten Sie die Entscheidung festhalten?",
        "answers": [
          {
            "text": "En un informe detallado.",
            "next": "end"
          },
          {
            "text": "En un resumen con próximos pasos.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión y sus fundamentos quedan documentados.",
        "de": "Perfekt. Entscheidung und Begründung sind dokumentiert.",
        "answers": []
      }
    }
  },
  {
    "id": "es08_ciber_incidente",
    "topic": "Cybersicherheit",
    "title": "Sicherheitsvorfall",
    "level": "B1-B2",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿Qué cuestión desea analizar?",
        "de": "Guten Tag. Welche Frage möchten Sie analysieren?",
        "answers": [
          {
            "text": "Quiero revisar los hechos y las opciones.",
            "next": "details"
          },
          {
            "text": "Necesito tomar una decisión fundamentada.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Cuáles son los datos y riesgos principales?",
        "de": "Was sind die wichtigsten Daten und Risiken?",
        "answers": [
          {
            "text": "Estos son los datos más relevantes.",
            "next": "options"
          },
          {
            "text": "El mayor riesgo es el siguiente.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Podemos comparar impacto, coste y viabilidad.",
        "de": "Wir können Wirkung, Kosten und Umsetzbarkeit vergleichen.",
        "answers": [
          {
            "text": "Prefiero la opción con menor riesgo.",
            "next": "confirm"
          },
          {
            "text": "Quiero priorizar el beneficio a largo plazo.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo desea registrar la decisión?",
        "de": "Wie möchten Sie die Entscheidung festhalten?",
        "answers": [
          {
            "text": "En un informe detallado.",
            "next": "end"
          },
          {
            "text": "En un resumen con próximos pasos.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión y sus fundamentos quedan documentados.",
        "de": "Perfekt. Entscheidung und Begründung sind dokumentiert.",
        "answers": []
      }
    }
  },
  {
    "id": "es08_ciber_acceso",
    "topic": "Cybersicherheit",
    "title": "Unbefugter Zugriff",
    "level": "B1-B2",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿Qué cuestión desea analizar?",
        "de": "Guten Tag. Welche Frage möchten Sie analysieren?",
        "answers": [
          {
            "text": "Quiero revisar los hechos y las opciones.",
            "next": "details"
          },
          {
            "text": "Necesito tomar una decisión fundamentada.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Cuáles son los datos y riesgos principales?",
        "de": "Was sind die wichtigsten Daten und Risiken?",
        "answers": [
          {
            "text": "Estos son los datos más relevantes.",
            "next": "options"
          },
          {
            "text": "El mayor riesgo es el siguiente.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Podemos comparar impacto, coste y viabilidad.",
        "de": "Wir können Wirkung, Kosten und Umsetzbarkeit vergleichen.",
        "answers": [
          {
            "text": "Prefiero la opción con menor riesgo.",
            "next": "confirm"
          },
          {
            "text": "Quiero priorizar el beneficio a largo plazo.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo desea registrar la decisión?",
        "de": "Wie möchten Sie die Entscheidung festhalten?",
        "answers": [
          {
            "text": "En un informe detallado.",
            "next": "end"
          },
          {
            "text": "En un resumen con próximos pasos.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión y sus fundamentos quedan documentados.",
        "de": "Perfekt. Entscheidung und Begründung sind dokumentiert.",
        "answers": []
      }
    }
  },
  {
    "id": "es08_sostenibilidad_objetivo",
    "topic": "Nachhaltigkeit B2",
    "title": "Klimaziel",
    "level": "B1-B2",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿Qué cuestión desea analizar?",
        "de": "Guten Tag. Welche Frage möchten Sie analysieren?",
        "answers": [
          {
            "text": "Quiero revisar los hechos y las opciones.",
            "next": "details"
          },
          {
            "text": "Necesito tomar una decisión fundamentada.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Cuáles son los datos y riesgos principales?",
        "de": "Was sind die wichtigsten Daten und Risiken?",
        "answers": [
          {
            "text": "Estos son los datos más relevantes.",
            "next": "options"
          },
          {
            "text": "El mayor riesgo es el siguiente.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Podemos comparar impacto, coste y viabilidad.",
        "de": "Wir können Wirkung, Kosten und Umsetzbarkeit vergleichen.",
        "answers": [
          {
            "text": "Prefiero la opción con menor riesgo.",
            "next": "confirm"
          },
          {
            "text": "Quiero priorizar el beneficio a largo plazo.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo desea registrar la decisión?",
        "de": "Wie möchten Sie die Entscheidung festhalten?",
        "answers": [
          {
            "text": "En un informe detallado.",
            "next": "end"
          },
          {
            "text": "En un resumen con próximos pasos.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión y sus fundamentos quedan documentados.",
        "de": "Perfekt. Entscheidung und Begründung sind dokumentiert.",
        "answers": []
      }
    }
  },
  {
    "id": "es08_sostenibilidad_proveedor",
    "topic": "Nachhaltigkeit B2",
    "title": "Nachhaltiger Lieferant",
    "level": "B1-B2",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿Qué cuestión desea analizar?",
        "de": "Guten Tag. Welche Frage möchten Sie analysieren?",
        "answers": [
          {
            "text": "Quiero revisar los hechos y las opciones.",
            "next": "details"
          },
          {
            "text": "Necesito tomar una decisión fundamentada.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Cuáles son los datos y riesgos principales?",
        "de": "Was sind die wichtigsten Daten und Risiken?",
        "answers": [
          {
            "text": "Estos son los datos más relevantes.",
            "next": "options"
          },
          {
            "text": "El mayor riesgo es el siguiente.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Podemos comparar impacto, coste y viabilidad.",
        "de": "Wir können Wirkung, Kosten und Umsetzbarkeit vergleichen.",
        "answers": [
          {
            "text": "Prefiero la opción con menor riesgo.",
            "next": "confirm"
          },
          {
            "text": "Quiero priorizar el beneficio a largo plazo.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo desea registrar la decisión?",
        "de": "Wie möchten Sie die Entscheidung festhalten?",
        "answers": [
          {
            "text": "En un informe detallado.",
            "next": "end"
          },
          {
            "text": "En un resumen con próximos pasos.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión y sus fundamentos quedan documentados.",
        "de": "Perfekt. Entscheidung und Begründung sind dokumentiert.",
        "answers": []
      }
    }
  },
  {
    "id": "es08_evento_programa",
    "topic": "Veranstaltungen",
    "title": "Veranstaltungsprogramm",
    "level": "B1-B2",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿Qué cuestión desea analizar?",
        "de": "Guten Tag. Welche Frage möchten Sie analysieren?",
        "answers": [
          {
            "text": "Quiero revisar los hechos y las opciones.",
            "next": "details"
          },
          {
            "text": "Necesito tomar una decisión fundamentada.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Cuáles son los datos y riesgos principales?",
        "de": "Was sind die wichtigsten Daten und Risiken?",
        "answers": [
          {
            "text": "Estos son los datos más relevantes.",
            "next": "options"
          },
          {
            "text": "El mayor riesgo es el siguiente.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Podemos comparar impacto, coste y viabilidad.",
        "de": "Wir können Wirkung, Kosten und Umsetzbarkeit vergleichen.",
        "answers": [
          {
            "text": "Prefiero la opción con menor riesgo.",
            "next": "confirm"
          },
          {
            "text": "Quiero priorizar el beneficio a largo plazo.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo desea registrar la decisión?",
        "de": "Wie möchten Sie die Entscheidung festhalten?",
        "answers": [
          {
            "text": "En un informe detallado.",
            "next": "end"
          },
          {
            "text": "En un resumen con próximos pasos.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión y sus fundamentos quedan documentados.",
        "de": "Perfekt. Entscheidung und Begründung sind dokumentiert.",
        "answers": []
      }
    }
  },
  {
    "id": "es08_evento_cancelacion",
    "topic": "Veranstaltungen",
    "title": "Veranstaltung absagen",
    "level": "B1-B2",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿Qué cuestión desea analizar?",
        "de": "Guten Tag. Welche Frage möchten Sie analysieren?",
        "answers": [
          {
            "text": "Quiero revisar los hechos y las opciones.",
            "next": "details"
          },
          {
            "text": "Necesito tomar una decisión fundamentada.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Cuáles son los datos y riesgos principales?",
        "de": "Was sind die wichtigsten Daten und Risiken?",
        "answers": [
          {
            "text": "Estos son los datos más relevantes.",
            "next": "options"
          },
          {
            "text": "El mayor riesgo es el siguiente.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Podemos comparar impacto, coste y viabilidad.",
        "de": "Wir können Wirkung, Kosten und Umsetzbarkeit vergleichen.",
        "answers": [
          {
            "text": "Prefiero la opción con menor riesgo.",
            "next": "confirm"
          },
          {
            "text": "Quiero priorizar el beneficio a largo plazo.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo desea registrar la decisión?",
        "de": "Wie möchten Sie die Entscheidung festhalten?",
        "answers": [
          {
            "text": "En un informe detallado.",
            "next": "end"
          },
          {
            "text": "En un resumen con próximos pasos.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión y sus fundamentos quedan documentados.",
        "de": "Perfekt. Entscheidung und Begründung sind dokumentiert.",
        "answers": []
      }
    }
  },
  {
    "id": "es08_administracion_solicitud",
    "topic": "Öffentliche Verwaltung",
    "title": "Behördenantrag",
    "level": "B1-B2",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿Qué cuestión desea analizar?",
        "de": "Guten Tag. Welche Frage möchten Sie analysieren?",
        "answers": [
          {
            "text": "Quiero revisar los hechos y las opciones.",
            "next": "details"
          },
          {
            "text": "Necesito tomar una decisión fundamentada.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Cuáles son los datos y riesgos principales?",
        "de": "Was sind die wichtigsten Daten und Risiken?",
        "answers": [
          {
            "text": "Estos son los datos más relevantes.",
            "next": "options"
          },
          {
            "text": "El mayor riesgo es el siguiente.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Podemos comparar impacto, coste y viabilidad.",
        "de": "Wir können Wirkung, Kosten und Umsetzbarkeit vergleichen.",
        "answers": [
          {
            "text": "Prefiero la opción con menor riesgo.",
            "next": "confirm"
          },
          {
            "text": "Quiero priorizar el beneficio a largo plazo.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo desea registrar la decisión?",
        "de": "Wie möchten Sie die Entscheidung festhalten?",
        "answers": [
          {
            "text": "En un informe detallado.",
            "next": "end"
          },
          {
            "text": "En un resumen con próximos pasos.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión y sus fundamentos quedan documentados.",
        "de": "Perfekt. Entscheidung und Begründung sind dokumentiert.",
        "answers": []
      }
    }
  },
  {
    "id": "es08_administracion_recurso",
    "topic": "Öffentliche Verwaltung",
    "title": "Widerspruch einlegen",
    "level": "B1-B2",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿Qué cuestión desea analizar?",
        "de": "Guten Tag. Welche Frage möchten Sie analysieren?",
        "answers": [
          {
            "text": "Quiero revisar los hechos y las opciones.",
            "next": "details"
          },
          {
            "text": "Necesito tomar una decisión fundamentada.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Cuáles son los datos y riesgos principales?",
        "de": "Was sind die wichtigsten Daten und Risiken?",
        "answers": [
          {
            "text": "Estos son los datos más relevantes.",
            "next": "options"
          },
          {
            "text": "El mayor riesgo es el siguiente.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Podemos comparar impacto, coste y viabilidad.",
        "de": "Wir können Wirkung, Kosten und Umsetzbarkeit vergleichen.",
        "answers": [
          {
            "text": "Prefiero la opción con menor riesgo.",
            "next": "confirm"
          },
          {
            "text": "Quiero priorizar el beneficio a largo plazo.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo desea registrar la decisión?",
        "de": "Wie möchten Sie die Entscheidung festhalten?",
        "answers": [
          {
            "text": "En un informe detallado.",
            "next": "end"
          },
          {
            "text": "En un resumen con próximos pasos.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión y sus fundamentos quedan documentados.",
        "de": "Perfekt. Entscheidung und Begründung sind dokumentiert.",
        "answers": []
      }
    }
  },
  {
    "id": "es08_cooperacion_proyecto",
    "topic": "Internationale Zusammenarbeit",
    "title": "Internationales Projekt",
    "level": "B1-B2",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿Qué cuestión desea analizar?",
        "de": "Guten Tag. Welche Frage möchten Sie analysieren?",
        "answers": [
          {
            "text": "Quiero revisar los hechos y las opciones.",
            "next": "details"
          },
          {
            "text": "Necesito tomar una decisión fundamentada.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Cuáles son los datos y riesgos principales?",
        "de": "Was sind die wichtigsten Daten und Risiken?",
        "answers": [
          {
            "text": "Estos son los datos más relevantes.",
            "next": "options"
          },
          {
            "text": "El mayor riesgo es el siguiente.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Podemos comparar impacto, coste y viabilidad.",
        "de": "Wir können Wirkung, Kosten und Umsetzbarkeit vergleichen.",
        "answers": [
          {
            "text": "Prefiero la opción con menor riesgo.",
            "next": "confirm"
          },
          {
            "text": "Quiero priorizar el beneficio a largo plazo.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo desea registrar la decisión?",
        "de": "Wie möchten Sie die Entscheidung festhalten?",
        "answers": [
          {
            "text": "En un informe detallado.",
            "next": "end"
          },
          {
            "text": "En un resumen con próximos pasos.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión y sus fundamentos quedan documentados.",
        "de": "Perfekt. Entscheidung und Begründung sind dokumentiert.",
        "answers": []
      }
    }
  },
  {
    "id": "es08_cooperacion_reunion",
    "topic": "Internationale Zusammenarbeit",
    "title": "Internationale Besprechung",
    "level": "B1-B2",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿Qué cuestión desea analizar?",
        "de": "Guten Tag. Welche Frage möchten Sie analysieren?",
        "answers": [
          {
            "text": "Quiero revisar los hechos y las opciones.",
            "next": "details"
          },
          {
            "text": "Necesito tomar una decisión fundamentada.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Cuáles son los datos y riesgos principales?",
        "de": "Was sind die wichtigsten Daten und Risiken?",
        "answers": [
          {
            "text": "Estos son los datos más relevantes.",
            "next": "options"
          },
          {
            "text": "El mayor riesgo es el siguiente.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Podemos comparar impacto, coste y viabilidad.",
        "de": "Wir können Wirkung, Kosten und Umsetzbarkeit vergleichen.",
        "answers": [
          {
            "text": "Prefiero la opción con menor riesgo.",
            "next": "confirm"
          },
          {
            "text": "Quiero priorizar el beneficio a largo plazo.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo desea registrar la decisión?",
        "de": "Wie möchten Sie die Entscheidung festhalten?",
        "answers": [
          {
            "text": "En un informe detallado.",
            "next": "end"
          },
          {
            "text": "En un resumen con próximos pasos.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión y sus fundamentos quedan documentados.",
        "de": "Perfekt. Entscheidung und Begründung sind dokumentiert.",
        "answers": []
      }
    }
  },
  {
    "id": "es08_cuidados_plan",
    "topic": "Pflege und Betreuung",
    "title": "Pflegeplan",
    "level": "B1-B2",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿Qué cuestión desea analizar?",
        "de": "Guten Tag. Welche Frage möchten Sie analysieren?",
        "answers": [
          {
            "text": "Quiero revisar los hechos y las opciones.",
            "next": "details"
          },
          {
            "text": "Necesito tomar una decisión fundamentada.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Cuáles son los datos y riesgos principales?",
        "de": "Was sind die wichtigsten Daten und Risiken?",
        "answers": [
          {
            "text": "Estos son los datos más relevantes.",
            "next": "options"
          },
          {
            "text": "El mayor riesgo es el siguiente.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Podemos comparar impacto, coste y viabilidad.",
        "de": "Wir können Wirkung, Kosten und Umsetzbarkeit vergleichen.",
        "answers": [
          {
            "text": "Prefiero la opción con menor riesgo.",
            "next": "confirm"
          },
          {
            "text": "Quiero priorizar el beneficio a largo plazo.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo desea registrar la decisión?",
        "de": "Wie möchten Sie die Entscheidung festhalten?",
        "answers": [
          {
            "text": "En un informe detallado.",
            "next": "end"
          },
          {
            "text": "En un resumen con próximos pasos.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión y sus fundamentos quedan documentados.",
        "de": "Perfekt. Entscheidung und Begründung sind dokumentiert.",
        "answers": []
      }
    }
  },
  {
    "id": "es08_cuidados_emergencia",
    "topic": "Pflege und Betreuung",
    "title": "Pflegenotfall",
    "level": "B1-B2",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿Qué cuestión desea analizar?",
        "de": "Guten Tag. Welche Frage möchten Sie analysieren?",
        "answers": [
          {
            "text": "Quiero revisar los hechos y las opciones.",
            "next": "details"
          },
          {
            "text": "Necesito tomar una decisión fundamentada.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Cuáles son los datos y riesgos principales?",
        "de": "Was sind die wichtigsten Daten und Risiken?",
        "answers": [
          {
            "text": "Estos son los datos más relevantes.",
            "next": "options"
          },
          {
            "text": "El mayor riesgo es el siguiente.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Podemos comparar impacto, coste y viabilidad.",
        "de": "Wir können Wirkung, Kosten und Umsetzbarkeit vergleichen.",
        "answers": [
          {
            "text": "Prefiero la opción con menor riesgo.",
            "next": "confirm"
          },
          {
            "text": "Quiero priorizar el beneficio a largo plazo.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo desea registrar la decisión?",
        "de": "Wie möchten Sie die Entscheidung festhalten?",
        "answers": [
          {
            "text": "En un informe detallado.",
            "next": "end"
          },
          {
            "text": "En un resumen con próximos pasos.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión y sus fundamentos quedan documentados.",
        "de": "Perfekt. Entscheidung und Begründung sind dokumentiert.",
        "answers": []
      }
    }
  },
  {
    "id": "es08_debate_opinion",
    "topic": "Diskussion und Meinung",
    "title": "Meinung diskutieren",
    "level": "B1-B2",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿Qué cuestión desea analizar?",
        "de": "Guten Tag. Welche Frage möchten Sie analysieren?",
        "answers": [
          {
            "text": "Quiero revisar los hechos y las opciones.",
            "next": "details"
          },
          {
            "text": "Necesito tomar una decisión fundamentada.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Cuáles son los datos y riesgos principales?",
        "de": "Was sind die wichtigsten Daten und Risiken?",
        "answers": [
          {
            "text": "Estos son los datos más relevantes.",
            "next": "options"
          },
          {
            "text": "El mayor riesgo es el siguiente.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Podemos comparar impacto, coste y viabilidad.",
        "de": "Wir können Wirkung, Kosten und Umsetzbarkeit vergleichen.",
        "answers": [
          {
            "text": "Prefiero la opción con menor riesgo.",
            "next": "confirm"
          },
          {
            "text": "Quiero priorizar el beneficio a largo plazo.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo desea registrar la decisión?",
        "de": "Wie möchten Sie die Entscheidung festhalten?",
        "answers": [
          {
            "text": "En un informe detallado.",
            "next": "end"
          },
          {
            "text": "En un resumen con próximos pasos.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión y sus fundamentos quedan documentados.",
        "de": "Perfekt. Entscheidung und Begründung sind dokumentiert.",
        "answers": []
      }
    }
  },
  {
    "id": "es08_debate_evidencia",
    "topic": "Diskussion und Meinung",
    "title": "Belege bewerten",
    "level": "B1-B2",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿Qué cuestión desea analizar?",
        "de": "Guten Tag. Welche Frage möchten Sie analysieren?",
        "answers": [
          {
            "text": "Quiero revisar los hechos y las opciones.",
            "next": "details"
          },
          {
            "text": "Necesito tomar una decisión fundamentada.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Cuáles son los datos y riesgos principales?",
        "de": "Was sind die wichtigsten Daten und Risiken?",
        "answers": [
          {
            "text": "Estos son los datos más relevantes.",
            "next": "options"
          },
          {
            "text": "El mayor riesgo es el siguiente.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Podemos comparar impacto, coste y viabilidad.",
        "de": "Wir können Wirkung, Kosten und Umsetzbarkeit vergleichen.",
        "answers": [
          {
            "text": "Prefiero la opción con menor riesgo.",
            "next": "confirm"
          },
          {
            "text": "Quiero priorizar el beneficio a largo plazo.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo desea registrar la decisión?",
        "de": "Wie möchten Sie die Entscheidung festhalten?",
        "answers": [
          {
            "text": "En un informe detallado.",
            "next": "end"
          },
          {
            "text": "En un resumen con próximos pasos.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión y sus fundamentos quedan documentados.",
        "de": "Perfekt. Entscheidung und Begründung sind dokumentiert.",
        "answers": []
      }
    }
  },
  {
    "id": "es08_calidad_cliente",
    "topic": "Qualität",
    "title": "Kundenqualität",
    "level": "B1-B2",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿Qué cuestión desea analizar?",
        "de": "Guten Tag. Welche Frage möchten Sie analysieren?",
        "answers": [
          {
            "text": "Quiero revisar los hechos y las opciones.",
            "next": "details"
          },
          {
            "text": "Necesito tomar una decisión fundamentada.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Cuáles son los datos y riesgos principales?",
        "de": "Was sind die wichtigsten Daten und Risiken?",
        "answers": [
          {
            "text": "Estos son los datos más relevantes.",
            "next": "options"
          },
          {
            "text": "El mayor riesgo es el siguiente.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Podemos comparar impacto, coste y viabilidad.",
        "de": "Wir können Wirkung, Kosten und Umsetzbarkeit vergleichen.",
        "answers": [
          {
            "text": "Prefiero la opción con menor riesgo.",
            "next": "confirm"
          },
          {
            "text": "Quiero priorizar el beneficio a largo plazo.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo desea registrar la decisión?",
        "de": "Wie möchten Sie die Entscheidung festhalten?",
        "answers": [
          {
            "text": "En un informe detallado.",
            "next": "end"
          },
          {
            "text": "En un resumen con próximos pasos.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión y sus fundamentos quedan documentados.",
        "de": "Perfekt. Entscheidung und Begründung sind dokumentiert.",
        "answers": []
      }
    }
  },
  {
    "id": "es08_produccion_material",
    "topic": "Produktion",
    "title": "Materialengpass",
    "level": "B1-B2",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿Qué cuestión desea analizar?",
        "de": "Guten Tag. Welche Frage möchten Sie analysieren?",
        "answers": [
          {
            "text": "Quiero revisar los hechos y las opciones.",
            "next": "details"
          },
          {
            "text": "Necesito tomar una decisión fundamentada.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Cuáles son los datos y riesgos principales?",
        "de": "Was sind die wichtigsten Daten und Risiken?",
        "answers": [
          {
            "text": "Estos son los datos más relevantes.",
            "next": "options"
          },
          {
            "text": "El mayor riesgo es el siguiente.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Podemos comparar impacto, coste y viabilidad.",
        "de": "Wir können Wirkung, Kosten und Umsetzbarkeit vergleichen.",
        "answers": [
          {
            "text": "Prefiero la opción con menor riesgo.",
            "next": "confirm"
          },
          {
            "text": "Quiero priorizar el beneficio a largo plazo.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo desea registrar la decisión?",
        "de": "Wie möchten Sie die Entscheidung festhalten?",
        "answers": [
          {
            "text": "En un informe detallado.",
            "next": "end"
          },
          {
            "text": "En un resumen con próximos pasos.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión y sus fundamentos quedan documentados.",
        "de": "Perfekt. Entscheidung und Begründung sind dokumentiert.",
        "answers": []
      }
    }
  },
  {
    "id": "es08_evento_catering",
    "topic": "Veranstaltungen",
    "title": "Event-Catering",
    "level": "B1-B2",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿Qué cuestión desea analizar?",
        "de": "Guten Tag. Welche Frage möchten Sie analysieren?",
        "answers": [
          {
            "text": "Quiero revisar los hechos y las opciones.",
            "next": "details"
          },
          {
            "text": "Necesito tomar una decisión fundamentada.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Cuáles son los datos y riesgos principales?",
        "de": "Was sind die wichtigsten Daten und Risiken?",
        "answers": [
          {
            "text": "Estos son los datos más relevantes.",
            "next": "options"
          },
          {
            "text": "El mayor riesgo es el siguiente.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Podemos comparar impacto, coste y viabilidad.",
        "de": "Wir können Wirkung, Kosten und Umsetzbarkeit vergleichen.",
        "answers": [
          {
            "text": "Prefiero la opción con menor riesgo.",
            "next": "confirm"
          },
          {
            "text": "Quiero priorizar el beneficio a largo plazo.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo desea registrar la decisión?",
        "de": "Wie möchten Sie die Entscheidung festhalten?",
        "answers": [
          {
            "text": "En un informe detallado.",
            "next": "end"
          },
          {
            "text": "En un resumen con próximos pasos.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión y sus fundamentos quedan documentados.",
        "de": "Perfekt. Entscheidung und Begründung sind dokumentiert.",
        "answers": []
      }
    }
  },
  {
    "id": "es08_cooperacion_cultural",
    "topic": "Internationale Zusammenarbeit",
    "title": "Kulturelle Unterschiede",
    "level": "B1-B2",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿Qué cuestión desea analizar?",
        "de": "Guten Tag. Welche Frage möchten Sie analysieren?",
        "answers": [
          {
            "text": "Quiero revisar los hechos y las opciones.",
            "next": "details"
          },
          {
            "text": "Necesito tomar una decisión fundamentada.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Cuáles son los datos y riesgos principales?",
        "de": "Was sind die wichtigsten Daten und Risiken?",
        "answers": [
          {
            "text": "Estos son los datos más relevantes.",
            "next": "options"
          },
          {
            "text": "El mayor riesgo es el siguiente.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Podemos comparar impacto, coste y viabilidad.",
        "de": "Wir können Wirkung, Kosten und Umsetzbarkeit vergleichen.",
        "answers": [
          {
            "text": "Prefiero la opción con menor riesgo.",
            "next": "confirm"
          },
          {
            "text": "Quiero priorizar el beneficio a largo plazo.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo desea registrar la decisión?",
        "de": "Wie möchten Sie die Entscheidung festhalten?",
        "answers": [
          {
            "text": "En un informe detallado.",
            "next": "end"
          },
          {
            "text": "En un resumen con próximos pasos.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión y sus fundamentos quedan documentados.",
        "de": "Perfekt. Entscheidung und Begründung sind dokumentiert.",
        "answers": []
      }
    }
  },
  {
    "id": "es08_estrategia_crecimiento",
    "topic": "Strategie",
    "title": "Wachstumsstrategie",
    "level": "B1-B2",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿Qué cuestión desea analizar?",
        "de": "Guten Tag. Welche Frage möchten Sie analysieren?",
        "answers": [
          {
            "text": "Quiero revisar los hechos y las opciones.",
            "next": "details"
          },
          {
            "text": "Necesito tomar una decisión fundamentada.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Cuáles son los datos y riesgos principales?",
        "de": "Was sind die wichtigsten Daten und Risiken?",
        "answers": [
          {
            "text": "Estos son los datos más relevantes.",
            "next": "options"
          },
          {
            "text": "El mayor riesgo es el siguiente.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Podemos comparar impacto, coste y viabilidad.",
        "de": "Wir können Wirkung, Kosten und Umsetzbarkeit vergleichen.",
        "answers": [
          {
            "text": "Prefiero la opción con menor riesgo.",
            "next": "confirm"
          },
          {
            "text": "Quiero priorizar el beneficio a largo plazo.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo desea registrar la decisión?",
        "de": "Wie möchten Sie die Entscheidung festhalten?",
        "answers": [
          {
            "text": "En un informe detallado.",
            "next": "end"
          },
          {
            "text": "En un resumen con próximos pasos.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión y sus fundamentos quedan documentados.",
        "de": "Perfekt. Entscheidung und Begründung sind dokumentiert.",
        "answers": []
      }
    }
  }
];
ES_BRANCHING_SCENARIOS_151.push(...ES_BRANCHING_SCENARIOS_08);
