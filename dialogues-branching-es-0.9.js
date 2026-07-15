const ES_BRANCHING_SCENARIOS_09 = [
  {
    "id": "es09_ventas_cliente_nuevo",
    "topic": "Verkauf",
    "title": "Neukundengespräch",
    "level": "B1-B2",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿Qué situación desea resolver?",
        "de": "Guten Tag. Welche Situation möchten Sie lösen?",
        "answers": [
          {
            "text": "Quiero analizar los hechos y las opciones.",
            "next": "details"
          },
          {
            "text": "Necesito una solución bien fundamentada.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Cuáles son los datos, restricciones y objetivos principales?",
        "de": "Was sind die wichtigsten Daten, Einschränkungen und Ziele?",
        "answers": [
          {
            "text": "Estos son los datos más relevantes.",
            "next": "options"
          },
          {
            "text": "La principal restricción es el plazo.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Podemos comparar impacto, coste, riesgo y viabilidad.",
        "de": "Wir können Wirkung, Kosten, Risiko und Umsetzbarkeit vergleichen.",
        "answers": [
          {
            "text": "Prefiero la opción con mejor equilibrio.",
            "next": "confirm"
          },
          {
            "text": "Quiero reducir el riesgo antes de decidir.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo desea documentar la decisión y los próximos pasos?",
        "de": "Wie möchten Sie Entscheidung und nächste Schritte dokumentieren?",
        "answers": [
          {
            "text": "Con un informe detallado.",
            "next": "end"
          },
          {
            "text": "Con un resumen ejecutivo por correo.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión queda documentada y confirmada.",
        "de": "Perfekt. Die Entscheidung ist dokumentiert und bestätigt.",
        "answers": []
      }
    }
  },
  {
    "id": "es09_ventas_objecion",
    "topic": "Verkauf",
    "title": "Kundeneinwand behandeln",
    "level": "B1-B2",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿Qué situación desea resolver?",
        "de": "Guten Tag. Welche Situation möchten Sie lösen?",
        "answers": [
          {
            "text": "Quiero analizar los hechos y las opciones.",
            "next": "details"
          },
          {
            "text": "Necesito una solución bien fundamentada.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Cuáles son los datos, restricciones y objetivos principales?",
        "de": "Was sind die wichtigsten Daten, Einschränkungen und Ziele?",
        "answers": [
          {
            "text": "Estos son los datos más relevantes.",
            "next": "options"
          },
          {
            "text": "La principal restricción es el plazo.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Podemos comparar impacto, coste, riesgo y viabilidad.",
        "de": "Wir können Wirkung, Kosten, Risiko und Umsetzbarkeit vergleichen.",
        "answers": [
          {
            "text": "Prefiero la opción con mejor equilibrio.",
            "next": "confirm"
          },
          {
            "text": "Quiero reducir el riesgo antes de decidir.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo desea documentar la decisión y los próximos pasos?",
        "de": "Wie möchten Sie Entscheidung und nächste Schritte dokumentieren?",
        "answers": [
          {
            "text": "Con un informe detallado.",
            "next": "end"
          },
          {
            "text": "Con un resumen ejecutivo por correo.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión queda documentada y confirmada.",
        "de": "Perfekt. Die Entscheidung ist dokumentiert und bestätigt.",
        "answers": []
      }
    }
  },
  {
    "id": "es09_compras_ofertas",
    "topic": "Einkauf",
    "title": "Angebote vergleichen",
    "level": "B1-B2",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿Qué situación desea resolver?",
        "de": "Guten Tag. Welche Situation möchten Sie lösen?",
        "answers": [
          {
            "text": "Quiero analizar los hechos y las opciones.",
            "next": "details"
          },
          {
            "text": "Necesito una solución bien fundamentada.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Cuáles son los datos, restricciones y objetivos principales?",
        "de": "Was sind die wichtigsten Daten, Einschränkungen und Ziele?",
        "answers": [
          {
            "text": "Estos son los datos más relevantes.",
            "next": "options"
          },
          {
            "text": "La principal restricción es el plazo.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Podemos comparar impacto, coste, riesgo y viabilidad.",
        "de": "Wir können Wirkung, Kosten, Risiko und Umsetzbarkeit vergleichen.",
        "answers": [
          {
            "text": "Prefiero la opción con mejor equilibrio.",
            "next": "confirm"
          },
          {
            "text": "Quiero reducir el riesgo antes de decidir.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo desea documentar la decisión y los próximos pasos?",
        "de": "Wie möchten Sie Entscheidung und nächste Schritte dokumentieren?",
        "answers": [
          {
            "text": "Con un informe detallado.",
            "next": "end"
          },
          {
            "text": "Con un resumen ejecutivo por correo.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión queda documentada y confirmada.",
        "de": "Perfekt. Die Entscheidung ist dokumentiert und bestätigt.",
        "answers": []
      }
    }
  },
  {
    "id": "es09_compras_reclamacion",
    "topic": "Einkauf",
    "title": "Lieferantenreklamation",
    "level": "B1-B2",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿Qué situación desea resolver?",
        "de": "Guten Tag. Welche Situation möchten Sie lösen?",
        "answers": [
          {
            "text": "Quiero analizar los hechos y las opciones.",
            "next": "details"
          },
          {
            "text": "Necesito una solución bien fundamentada.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Cuáles son los datos, restricciones y objetivos principales?",
        "de": "Was sind die wichtigsten Daten, Einschränkungen und Ziele?",
        "answers": [
          {
            "text": "Estos son los datos más relevantes.",
            "next": "options"
          },
          {
            "text": "La principal restricción es el plazo.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Podemos comparar impacto, coste, riesgo y viabilidad.",
        "de": "Wir können Wirkung, Kosten, Risiko und Umsetzbarkeit vergleichen.",
        "answers": [
          {
            "text": "Prefiero la opción con mejor equilibrio.",
            "next": "confirm"
          },
          {
            "text": "Quiero reducir el riesgo antes de decidir.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo desea documentar la decisión y los próximos pasos?",
        "de": "Wie möchten Sie Entscheidung und nächste Schritte dokumentieren?",
        "answers": [
          {
            "text": "Con un informe detallado.",
            "next": "end"
          },
          {
            "text": "Con un resumen ejecutivo por correo.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión queda documentada y confirmada.",
        "de": "Perfekt. Die Entscheidung ist dokumentiert und bestätigt.",
        "answers": []
      }
    }
  },
  {
    "id": "es09_hotel_sobreventa",
    "topic": "Hotels B2",
    "title": "Überbuchung lösen",
    "level": "B1-B2",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿Qué situación desea resolver?",
        "de": "Guten Tag. Welche Situation möchten Sie lösen?",
        "answers": [
          {
            "text": "Quiero analizar los hechos y las opciones.",
            "next": "details"
          },
          {
            "text": "Necesito una solución bien fundamentada.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Cuáles son los datos, restricciones y objetivos principales?",
        "de": "Was sind die wichtigsten Daten, Einschränkungen und Ziele?",
        "answers": [
          {
            "text": "Estos son los datos más relevantes.",
            "next": "options"
          },
          {
            "text": "La principal restricción es el plazo.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Podemos comparar impacto, coste, riesgo y viabilidad.",
        "de": "Wir können Wirkung, Kosten, Risiko und Umsetzbarkeit vergleichen.",
        "answers": [
          {
            "text": "Prefiero la opción con mejor equilibrio.",
            "next": "confirm"
          },
          {
            "text": "Quiero reducir el riesgo antes de decidir.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo desea documentar la decisión y los próximos pasos?",
        "de": "Wie möchten Sie Entscheidung und nächste Schritte dokumentieren?",
        "answers": [
          {
            "text": "Con un informe detallado.",
            "next": "end"
          },
          {
            "text": "Con un resumen ejecutivo por correo.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión queda documentada y confirmada.",
        "de": "Perfekt. Die Entscheidung ist dokumentiert und bestätigt.",
        "answers": []
      }
    }
  },
  {
    "id": "es09_hotel_fidelidad",
    "topic": "Hotels B2",
    "title": "Treueprogramm erklären",
    "level": "B1-B2",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿Qué situación desea resolver?",
        "de": "Guten Tag. Welche Situation möchten Sie lösen?",
        "answers": [
          {
            "text": "Quiero analizar los hechos y las opciones.",
            "next": "details"
          },
          {
            "text": "Necesito una solución bien fundamentada.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Cuáles son los datos, restricciones y objetivos principales?",
        "de": "Was sind die wichtigsten Daten, Einschränkungen und Ziele?",
        "answers": [
          {
            "text": "Estos son los datos más relevantes.",
            "next": "options"
          },
          {
            "text": "La principal restricción es el plazo.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Podemos comparar impacto, coste, riesgo y viabilidad.",
        "de": "Wir können Wirkung, Kosten, Risiko und Umsetzbarkeit vergleichen.",
        "answers": [
          {
            "text": "Prefiero la opción con mejor equilibrio.",
            "next": "confirm"
          },
          {
            "text": "Quiero reducir el riesgo antes de decidir.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo desea documentar la decisión y los próximos pasos?",
        "de": "Wie möchten Sie Entscheidung und nächste Schritte dokumentieren?",
        "answers": [
          {
            "text": "Con un informe detallado.",
            "next": "end"
          },
          {
            "text": "Con un resumen ejecutivo por correo.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión queda documentada y confirmada.",
        "de": "Perfekt. Die Entscheidung ist dokumentiert und bestätigt.",
        "answers": []
      }
    }
  },
  {
    "id": "es09_conversacion_diplomatica",
    "topic": "Gespräche B2",
    "title": "Diplomatisch widersprechen",
    "level": "B1-B2",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿Qué situación desea resolver?",
        "de": "Guten Tag. Welche Situation möchten Sie lösen?",
        "answers": [
          {
            "text": "Quiero analizar los hechos y las opciones.",
            "next": "details"
          },
          {
            "text": "Necesito una solución bien fundamentada.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Cuáles son los datos, restricciones y objetivos principales?",
        "de": "Was sind die wichtigsten Daten, Einschränkungen und Ziele?",
        "answers": [
          {
            "text": "Estos son los datos más relevantes.",
            "next": "options"
          },
          {
            "text": "La principal restricción es el plazo.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Podemos comparar impacto, coste, riesgo y viabilidad.",
        "de": "Wir können Wirkung, Kosten, Risiko und Umsetzbarkeit vergleichen.",
        "answers": [
          {
            "text": "Prefiero la opción con mejor equilibrio.",
            "next": "confirm"
          },
          {
            "text": "Quiero reducir el riesgo antes de decidir.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo desea documentar la decisión y los próximos pasos?",
        "de": "Wie möchten Sie Entscheidung und nächste Schritte dokumentieren?",
        "answers": [
          {
            "text": "Con un informe detallado.",
            "next": "end"
          },
          {
            "text": "Con un resumen ejecutivo por correo.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión queda documentada y confirmada.",
        "de": "Perfekt. Die Entscheidung ist dokumentiert und bestätigt.",
        "answers": []
      }
    }
  },
  {
    "id": "es09_conversacion_conflicto",
    "topic": "Gespräche B2",
    "title": "Konflikt moderieren",
    "level": "B1-B2",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿Qué situación desea resolver?",
        "de": "Guten Tag. Welche Situation möchten Sie lösen?",
        "answers": [
          {
            "text": "Quiero analizar los hechos y las opciones.",
            "next": "details"
          },
          {
            "text": "Necesito una solución bien fundamentada.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Cuáles son los datos, restricciones y objetivos principales?",
        "de": "Was sind die wichtigsten Daten, Einschränkungen und Ziele?",
        "answers": [
          {
            "text": "Estos son los datos más relevantes.",
            "next": "options"
          },
          {
            "text": "La principal restricción es el plazo.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Podemos comparar impacto, coste, riesgo y viabilidad.",
        "de": "Wir können Wirkung, Kosten, Risiko und Umsetzbarkeit vergleichen.",
        "answers": [
          {
            "text": "Prefiero la opción con mejor equilibrio.",
            "next": "confirm"
          },
          {
            "text": "Quiero reducir el riesgo antes de decidir.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo desea documentar la decisión y los próximos pasos?",
        "de": "Wie möchten Sie Entscheidung und nächste Schritte dokumentieren?",
        "answers": [
          {
            "text": "Con un informe detallado.",
            "next": "end"
          },
          {
            "text": "Con un resumen ejecutivo por correo.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión queda documentada y confirmada.",
        "de": "Perfekt. Die Entscheidung ist dokumentiert und bestätigt.",
        "answers": []
      }
    }
  },
  {
    "id": "es09_viaje_huelga",
    "topic": "Reiseprobleme",
    "title": "Streik und Umbuchung",
    "level": "B1-B2",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿Qué situación desea resolver?",
        "de": "Guten Tag. Welche Situation möchten Sie lösen?",
        "answers": [
          {
            "text": "Quiero analizar los hechos y las opciones.",
            "next": "details"
          },
          {
            "text": "Necesito una solución bien fundamentada.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Cuáles son los datos, restricciones y objetivos principales?",
        "de": "Was sind die wichtigsten Daten, Einschränkungen und Ziele?",
        "answers": [
          {
            "text": "Estos son los datos más relevantes.",
            "next": "options"
          },
          {
            "text": "La principal restricción es el plazo.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Podemos comparar impacto, coste, riesgo y viabilidad.",
        "de": "Wir können Wirkung, Kosten, Risiko und Umsetzbarkeit vergleichen.",
        "answers": [
          {
            "text": "Prefiero la opción con mejor equilibrio.",
            "next": "confirm"
          },
          {
            "text": "Quiero reducir el riesgo antes de decidir.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo desea documentar la decisión y los próximos pasos?",
        "de": "Wie möchten Sie Entscheidung und nächste Schritte dokumentieren?",
        "answers": [
          {
            "text": "Con un informe detallado.",
            "next": "end"
          },
          {
            "text": "Con un resumen ejecutivo por correo.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión queda documentada y confirmada.",
        "de": "Perfekt. Die Entscheidung ist dokumentiert und bestätigt.",
        "answers": []
      }
    }
  },
  {
    "id": "es09_viaje_documento",
    "topic": "Reiseprobleme",
    "title": "Dokumentenproblem",
    "level": "B1-B2",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿Qué situación desea resolver?",
        "de": "Guten Tag. Welche Situation möchten Sie lösen?",
        "answers": [
          {
            "text": "Quiero analizar los hechos y las opciones.",
            "next": "details"
          },
          {
            "text": "Necesito una solución bien fundamentada.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Cuáles son los datos, restricciones y objetivos principales?",
        "de": "Was sind die wichtigsten Daten, Einschränkungen und Ziele?",
        "answers": [
          {
            "text": "Estos son los datos más relevantes.",
            "next": "options"
          },
          {
            "text": "La principal restricción es el plazo.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Podemos comparar impacto, coste, riesgo y viabilidad.",
        "de": "Wir können Wirkung, Kosten, Risiko und Umsetzbarkeit vergleichen.",
        "answers": [
          {
            "text": "Prefiero la opción con mejor equilibrio.",
            "next": "confirm"
          },
          {
            "text": "Quiero reducir el riesgo antes de decidir.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo desea documentar la decisión y los próximos pasos?",
        "de": "Wie möchten Sie Entscheidung und nächste Schritte dokumentieren?",
        "answers": [
          {
            "text": "Con un informe detallado.",
            "next": "end"
          },
          {
            "text": "Con un resumen ejecutivo por correo.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión queda documentada y confirmada.",
        "de": "Perfekt. Die Entscheidung ist dokumentiert und bestätigt.",
        "answers": []
      }
    }
  },
  {
    "id": "es09_salud_diagnostico",
    "topic": "Gesundheitskommunikation",
    "title": "Diagnose besprechen",
    "level": "B1-B2",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿Qué situación desea resolver?",
        "de": "Guten Tag. Welche Situation möchten Sie lösen?",
        "answers": [
          {
            "text": "Quiero analizar los hechos y las opciones.",
            "next": "details"
          },
          {
            "text": "Necesito una solución bien fundamentada.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Cuáles son los datos, restricciones y objetivos principales?",
        "de": "Was sind die wichtigsten Daten, Einschränkungen und Ziele?",
        "answers": [
          {
            "text": "Estos son los datos más relevantes.",
            "next": "options"
          },
          {
            "text": "La principal restricción es el plazo.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Podemos comparar impacto, coste, riesgo y viabilidad.",
        "de": "Wir können Wirkung, Kosten, Risiko und Umsetzbarkeit vergleichen.",
        "answers": [
          {
            "text": "Prefiero la opción con mejor equilibrio.",
            "next": "confirm"
          },
          {
            "text": "Quiero reducir el riesgo antes de decidir.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo desea documentar la decisión y los próximos pasos?",
        "de": "Wie möchten Sie Entscheidung und nächste Schritte dokumentieren?",
        "answers": [
          {
            "text": "Con un informe detallado.",
            "next": "end"
          },
          {
            "text": "Con un resumen ejecutivo por correo.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión queda documentada y confirmada.",
        "de": "Perfekt. Die Entscheidung ist dokumentiert und bestätigt.",
        "answers": []
      }
    }
  },
  {
    "id": "es09_salud_tratamiento",
    "topic": "Gesundheitskommunikation",
    "title": "Behandlung entscheiden",
    "level": "B1-B2",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿Qué situación desea resolver?",
        "de": "Guten Tag. Welche Situation möchten Sie lösen?",
        "answers": [
          {
            "text": "Quiero analizar los hechos y las opciones.",
            "next": "details"
          },
          {
            "text": "Necesito una solución bien fundamentada.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Cuáles son los datos, restricciones y objetivos principales?",
        "de": "Was sind die wichtigsten Daten, Einschränkungen und Ziele?",
        "answers": [
          {
            "text": "Estos son los datos más relevantes.",
            "next": "options"
          },
          {
            "text": "La principal restricción es el plazo.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Podemos comparar impacto, coste, riesgo y viabilidad.",
        "de": "Wir können Wirkung, Kosten, Risiko und Umsetzbarkeit vergleichen.",
        "answers": [
          {
            "text": "Prefiero la opción con mejor equilibrio.",
            "next": "confirm"
          },
          {
            "text": "Quiero reducir el riesgo antes de decidir.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo desea documentar la decisión y los próximos pasos?",
        "de": "Wie möchten Sie Entscheidung und nächste Schritte dokumentieren?",
        "answers": [
          {
            "text": "Con un informe detallado.",
            "next": "end"
          },
          {
            "text": "Con un resumen ejecutivo por correo.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión queda documentada y confirmada.",
        "de": "Perfekt. Die Entscheidung ist dokumentiert und bestätigt.",
        "answers": []
      }
    }
  },
  {
    "id": "es09_soporte_error",
    "topic": "Technischer Support",
    "title": "Fehler reproduzieren",
    "level": "B1-B2",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿Qué situación desea resolver?",
        "de": "Guten Tag. Welche Situation möchten Sie lösen?",
        "answers": [
          {
            "text": "Quiero analizar los hechos y las opciones.",
            "next": "details"
          },
          {
            "text": "Necesito una solución bien fundamentada.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Cuáles son los datos, restricciones y objetivos principales?",
        "de": "Was sind die wichtigsten Daten, Einschränkungen und Ziele?",
        "answers": [
          {
            "text": "Estos son los datos más relevantes.",
            "next": "options"
          },
          {
            "text": "La principal restricción es el plazo.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Podemos comparar impacto, coste, riesgo y viabilidad.",
        "de": "Wir können Wirkung, Kosten, Risiko und Umsetzbarkeit vergleichen.",
        "answers": [
          {
            "text": "Prefiero la opción con mejor equilibrio.",
            "next": "confirm"
          },
          {
            "text": "Quiero reducir el riesgo antes de decidir.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo desea documentar la decisión y los próximos pasos?",
        "de": "Wie möchten Sie Entscheidung und nächste Schritte dokumentieren?",
        "answers": [
          {
            "text": "Con un informe detallado.",
            "next": "end"
          },
          {
            "text": "Con un resumen ejecutivo por correo.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión queda documentada y confirmada.",
        "de": "Perfekt. Die Entscheidung ist dokumentiert und bestätigt.",
        "answers": []
      }
    }
  },
  {
    "id": "es09_soporte_actualizacion",
    "topic": "Technischer Support",
    "title": "Updateproblem",
    "level": "B1-B2",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿Qué situación desea resolver?",
        "de": "Guten Tag. Welche Situation möchten Sie lösen?",
        "answers": [
          {
            "text": "Quiero analizar los hechos y las opciones.",
            "next": "details"
          },
          {
            "text": "Necesito una solución bien fundamentada.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Cuáles son los datos, restricciones y objetivos principales?",
        "de": "Was sind die wichtigsten Daten, Einschränkungen und Ziele?",
        "answers": [
          {
            "text": "Estos son los datos más relevantes.",
            "next": "options"
          },
          {
            "text": "La principal restricción es el plazo.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Podemos comparar impacto, coste, riesgo y viabilidad.",
        "de": "Wir können Wirkung, Kosten, Risiko und Umsetzbarkeit vergleichen.",
        "answers": [
          {
            "text": "Prefiero la opción con mejor equilibrio.",
            "next": "confirm"
          },
          {
            "text": "Quiero reducir el riesgo antes de decidir.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo desea documentar la decisión y los próximos pasos?",
        "de": "Wie möchten Sie Entscheidung und nächste Schritte dokumentieren?",
        "answers": [
          {
            "text": "Con un informe detallado.",
            "next": "end"
          },
          {
            "text": "Con un resumen ejecutivo por correo.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión queda documentada y confirmada.",
        "de": "Perfekt. Die Entscheidung ist dokumentiert und bestätigt.",
        "answers": []
      }
    }
  },
  {
    "id": "es09_finanzas_resultado",
    "topic": "Finanzberichte",
    "title": "Quartalsergebnis",
    "level": "B1-B2",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿Qué situación desea resolver?",
        "de": "Guten Tag. Welche Situation möchten Sie lösen?",
        "answers": [
          {
            "text": "Quiero analizar los hechos y las opciones.",
            "next": "details"
          },
          {
            "text": "Necesito una solución bien fundamentada.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Cuáles son los datos, restricciones y objetivos principales?",
        "de": "Was sind die wichtigsten Daten, Einschränkungen und Ziele?",
        "answers": [
          {
            "text": "Estos son los datos más relevantes.",
            "next": "options"
          },
          {
            "text": "La principal restricción es el plazo.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Podemos comparar impacto, coste, riesgo y viabilidad.",
        "de": "Wir können Wirkung, Kosten, Risiko und Umsetzbarkeit vergleichen.",
        "answers": [
          {
            "text": "Prefiero la opción con mejor equilibrio.",
            "next": "confirm"
          },
          {
            "text": "Quiero reducir el riesgo antes de decidir.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo desea documentar la decisión y los próximos pasos?",
        "de": "Wie möchten Sie Entscheidung und nächste Schritte dokumentieren?",
        "answers": [
          {
            "text": "Con un informe detallado.",
            "next": "end"
          },
          {
            "text": "Con un resumen ejecutivo por correo.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión queda documentada y confirmada.",
        "de": "Perfekt. Die Entscheidung ist dokumentiert und bestätigt.",
        "answers": []
      }
    }
  },
  {
    "id": "es09_finanzas_desviacion",
    "topic": "Finanzberichte",
    "title": "Budgetabweichung",
    "level": "B1-B2",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿Qué situación desea resolver?",
        "de": "Guten Tag. Welche Situation möchten Sie lösen?",
        "answers": [
          {
            "text": "Quiero analizar los hechos y las opciones.",
            "next": "details"
          },
          {
            "text": "Necesito una solución bien fundamentada.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Cuáles son los datos, restricciones y objetivos principales?",
        "de": "Was sind die wichtigsten Daten, Einschränkungen und Ziele?",
        "answers": [
          {
            "text": "Estos son los datos más relevantes.",
            "next": "options"
          },
          {
            "text": "La principal restricción es el plazo.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Podemos comparar impacto, coste, riesgo y viabilidad.",
        "de": "Wir können Wirkung, Kosten, Risiko und Umsetzbarkeit vergleichen.",
        "answers": [
          {
            "text": "Prefiero la opción con mejor equilibrio.",
            "next": "confirm"
          },
          {
            "text": "Quiero reducir el riesgo antes de decidir.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo desea documentar la decisión y los próximos pasos?",
        "de": "Wie möchten Sie Entscheidung und nächste Schritte dokumentieren?",
        "answers": [
          {
            "text": "Con un informe detallado.",
            "next": "end"
          },
          {
            "text": "Con un resumen ejecutivo por correo.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión queda documentada y confirmada.",
        "de": "Perfekt. Die Entscheidung ist dokumentiert und bestätigt.",
        "answers": []
      }
    }
  },
  {
    "id": "es09_alltag_termin",
    "topic": "Alltag B2",
    "title": "Termin neu verhandeln",
    "level": "B1-B2",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿Qué situación desea resolver?",
        "de": "Guten Tag. Welche Situation möchten Sie lösen?",
        "answers": [
          {
            "text": "Quiero analizar los hechos y las opciones.",
            "next": "details"
          },
          {
            "text": "Necesito una solución bien fundamentada.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Cuáles son los datos, restricciones y objetivos principales?",
        "de": "Was sind die wichtigsten Daten, Einschränkungen und Ziele?",
        "answers": [
          {
            "text": "Estos son los datos más relevantes.",
            "next": "options"
          },
          {
            "text": "La principal restricción es el plazo.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Podemos comparar impacto, coste, riesgo y viabilidad.",
        "de": "Wir können Wirkung, Kosten, Risiko und Umsetzbarkeit vergleichen.",
        "answers": [
          {
            "text": "Prefiero la opción con mejor equilibrio.",
            "next": "confirm"
          },
          {
            "text": "Quiero reducir el riesgo antes de decidir.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo desea documentar la decisión y los próximos pasos?",
        "de": "Wie möchten Sie Entscheidung und nächste Schritte dokumentieren?",
        "answers": [
          {
            "text": "Con un informe detallado.",
            "next": "end"
          },
          {
            "text": "Con un resumen ejecutivo por correo.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión queda documentada y confirmada.",
        "de": "Perfekt. Die Entscheidung ist dokumentiert und bestätigt.",
        "answers": []
      }
    }
  },
  {
    "id": "es09_alltag_ausnahme",
    "topic": "Alltag B2",
    "title": "Ausnahme beantragen",
    "level": "B1-B2",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿Qué situación desea resolver?",
        "de": "Guten Tag. Welche Situation möchten Sie lösen?",
        "answers": [
          {
            "text": "Quiero analizar los hechos y las opciones.",
            "next": "details"
          },
          {
            "text": "Necesito una solución bien fundamentada.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Cuáles son los datos, restricciones y objetivos principales?",
        "de": "Was sind die wichtigsten Daten, Einschränkungen und Ziele?",
        "answers": [
          {
            "text": "Estos son los datos más relevantes.",
            "next": "options"
          },
          {
            "text": "La principal restricción es el plazo.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Podemos comparar impacto, coste, riesgo y viabilidad.",
        "de": "Wir können Wirkung, Kosten, Risiko und Umsetzbarkeit vergleichen.",
        "answers": [
          {
            "text": "Prefiero la opción con mejor equilibrio.",
            "next": "confirm"
          },
          {
            "text": "Quiero reducir el riesgo antes de decidir.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo desea documentar la decisión y los próximos pasos?",
        "de": "Wie möchten Sie Entscheidung und nächste Schritte dokumentieren?",
        "answers": [
          {
            "text": "Con un informe detallado.",
            "next": "end"
          },
          {
            "text": "Con un resumen ejecutivo por correo.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión queda documentada y confirmada.",
        "de": "Perfekt. Die Entscheidung ist dokumentiert und bestätigt.",
        "answers": []
      }
    }
  },
  {
    "id": "es09_behoerde_antrag",
    "topic": "Kommunikation mit Behörden",
    "title": "Antrag vervollständigen",
    "level": "B1-B2",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿Qué situación desea resolver?",
        "de": "Guten Tag. Welche Situation möchten Sie lösen?",
        "answers": [
          {
            "text": "Quiero analizar los hechos y las opciones.",
            "next": "details"
          },
          {
            "text": "Necesito una solución bien fundamentada.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Cuáles son los datos, restricciones y objetivos principales?",
        "de": "Was sind die wichtigsten Daten, Einschränkungen und Ziele?",
        "answers": [
          {
            "text": "Estos son los datos más relevantes.",
            "next": "options"
          },
          {
            "text": "La principal restricción es el plazo.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Podemos comparar impacto, coste, riesgo y viabilidad.",
        "de": "Wir können Wirkung, Kosten, Risiko und Umsetzbarkeit vergleichen.",
        "answers": [
          {
            "text": "Prefiero la opción con mejor equilibrio.",
            "next": "confirm"
          },
          {
            "text": "Quiero reducir el riesgo antes de decidir.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo desea documentar la decisión y los próximos pasos?",
        "de": "Wie möchten Sie Entscheidung und nächste Schritte dokumentieren?",
        "answers": [
          {
            "text": "Con un informe detallado.",
            "next": "end"
          },
          {
            "text": "Con un resumen ejecutivo por correo.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión queda documentada y confirmada.",
        "de": "Perfekt. Die Entscheidung ist dokumentiert und bestätigt.",
        "answers": []
      }
    }
  },
  {
    "id": "es09_behoerde_widerspruch",
    "topic": "Kommunikation mit Behörden",
    "title": "Widerspruch besprechen",
    "level": "B1-B2",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿Qué situación desea resolver?",
        "de": "Guten Tag. Welche Situation möchten Sie lösen?",
        "answers": [
          {
            "text": "Quiero analizar los hechos y las opciones.",
            "next": "details"
          },
          {
            "text": "Necesito una solución bien fundamentada.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Cuáles son los datos, restricciones y objetivos principales?",
        "de": "Was sind die wichtigsten Daten, Einschränkungen und Ziele?",
        "answers": [
          {
            "text": "Estos son los datos más relevantes.",
            "next": "options"
          },
          {
            "text": "La principal restricción es el plazo.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Podemos comparar impacto, coste, riesgo y viabilidad.",
        "de": "Wir können Wirkung, Kosten, Risiko und Umsetzbarkeit vergleichen.",
        "answers": [
          {
            "text": "Prefiero la opción con mejor equilibrio.",
            "next": "confirm"
          },
          {
            "text": "Quiero reducir el riesgo antes de decidir.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo desea documentar la decisión y los próximos pasos?",
        "de": "Wie möchten Sie Entscheidung und nächste Schritte dokumentieren?",
        "answers": [
          {
            "text": "Con un informe detallado.",
            "next": "end"
          },
          {
            "text": "Con un resumen ejecutivo por correo.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión queda documentada y confirmada.",
        "de": "Perfekt. Die Entscheidung ist dokumentiert und bestätigt.",
        "answers": []
      }
    }
  },
  {
    "id": "es09_ventas_prevision",
    "topic": "Verkauf",
    "title": "Verkaufsprognose",
    "level": "B1-B2",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿Qué situación desea resolver?",
        "de": "Guten Tag. Welche Situation möchten Sie lösen?",
        "answers": [
          {
            "text": "Quiero analizar los hechos y las opciones.",
            "next": "details"
          },
          {
            "text": "Necesito una solución bien fundamentada.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Cuáles son los datos, restricciones y objetivos principales?",
        "de": "Was sind die wichtigsten Daten, Einschränkungen und Ziele?",
        "answers": [
          {
            "text": "Estos son los datos más relevantes.",
            "next": "options"
          },
          {
            "text": "La principal restricción es el plazo.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Podemos comparar impacto, coste, riesgo y viabilidad.",
        "de": "Wir können Wirkung, Kosten, Risiko und Umsetzbarkeit vergleichen.",
        "answers": [
          {
            "text": "Prefiero la opción con mejor equilibrio.",
            "next": "confirm"
          },
          {
            "text": "Quiero reducir el riesgo antes de decidir.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo desea documentar la decisión y los próximos pasos?",
        "de": "Wie möchten Sie Entscheidung und nächste Schritte dokumentieren?",
        "answers": [
          {
            "text": "Con un informe detallado.",
            "next": "end"
          },
          {
            "text": "Con un resumen ejecutivo por correo.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión queda documentada y confirmada.",
        "de": "Perfekt. Die Entscheidung ist dokumentiert und bestätigt.",
        "answers": []
      }
    }
  },
  {
    "id": "es09_compras_urgente",
    "topic": "Einkauf",
    "title": "Eilbestellung",
    "level": "B1-B2",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿Qué situación desea resolver?",
        "de": "Guten Tag. Welche Situation möchten Sie lösen?",
        "answers": [
          {
            "text": "Quiero analizar los hechos y las opciones.",
            "next": "details"
          },
          {
            "text": "Necesito una solución bien fundamentada.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Cuáles son los datos, restricciones y objetivos principales?",
        "de": "Was sind die wichtigsten Daten, Einschränkungen und Ziele?",
        "answers": [
          {
            "text": "Estos son los datos más relevantes.",
            "next": "options"
          },
          {
            "text": "La principal restricción es el plazo.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Podemos comparar impacto, coste, riesgo y viabilidad.",
        "de": "Wir können Wirkung, Kosten, Risiko und Umsetzbarkeit vergleichen.",
        "answers": [
          {
            "text": "Prefiero la opción con mejor equilibrio.",
            "next": "confirm"
          },
          {
            "text": "Quiero reducir el riesgo antes de decidir.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo desea documentar la decisión y los próximos pasos?",
        "de": "Wie möchten Sie Entscheidung und nächste Schritte dokumentieren?",
        "answers": [
          {
            "text": "Con un informe detallado.",
            "next": "end"
          },
          {
            "text": "Con un resumen ejecutivo por correo.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión queda documentada y confirmada.",
        "de": "Perfekt. Die Entscheidung ist dokumentiert und bestätigt.",
        "answers": []
      }
    }
  },
  {
    "id": "es09_hotel_compensacion_b2",
    "topic": "Hotels B2",
    "title": "Hotelentschädigung",
    "level": "B1-B2",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿Qué situación desea resolver?",
        "de": "Guten Tag. Welche Situation möchten Sie lösen?",
        "answers": [
          {
            "text": "Quiero analizar los hechos y las opciones.",
            "next": "details"
          },
          {
            "text": "Necesito una solución bien fundamentada.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Cuáles son los datos, restricciones y objetivos principales?",
        "de": "Was sind die wichtigsten Daten, Einschränkungen und Ziele?",
        "answers": [
          {
            "text": "Estos son los datos más relevantes.",
            "next": "options"
          },
          {
            "text": "La principal restricción es el plazo.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Podemos comparar impacto, coste, riesgo y viabilidad.",
        "de": "Wir können Wirkung, Kosten, Risiko und Umsetzbarkeit vergleichen.",
        "answers": [
          {
            "text": "Prefiero la opción con mejor equilibrio.",
            "next": "confirm"
          },
          {
            "text": "Quiero reducir el riesgo antes de decidir.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo desea documentar la decisión y los próximos pasos?",
        "de": "Wie möchten Sie Entscheidung und nächste Schritte dokumentieren?",
        "answers": [
          {
            "text": "Con un informe detallado.",
            "next": "end"
          },
          {
            "text": "Con un resumen ejecutivo por correo.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión queda documentada y confirmada.",
        "de": "Perfekt. Die Entscheidung ist dokumentiert und bestätigt.",
        "answers": []
      }
    }
  },
  {
    "id": "es09_support_remote",
    "topic": "Technischer Support",
    "title": "Remote-Support",
    "level": "B1-B2",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿Qué situación desea resolver?",
        "de": "Guten Tag. Welche Situation möchten Sie lösen?",
        "answers": [
          {
            "text": "Quiero analizar los hechos y las opciones.",
            "next": "details"
          },
          {
            "text": "Necesito una solución bien fundamentada.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Cuáles son los datos, restricciones y objetivos principales?",
        "de": "Was sind die wichtigsten Daten, Einschränkungen und Ziele?",
        "answers": [
          {
            "text": "Estos son los datos más relevantes.",
            "next": "options"
          },
          {
            "text": "La principal restricción es el plazo.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Podemos comparar impacto, coste, riesgo y viabilidad.",
        "de": "Wir können Wirkung, Kosten, Risiko und Umsetzbarkeit vergleichen.",
        "answers": [
          {
            "text": "Prefiero la opción con mejor equilibrio.",
            "next": "confirm"
          },
          {
            "text": "Quiero reducir el riesgo antes de decidir.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo desea documentar la decisión y los próximos pasos?",
        "de": "Wie möchten Sie Entscheidung und nächste Schritte dokumentieren?",
        "answers": [
          {
            "text": "Con un informe detallado.",
            "next": "end"
          },
          {
            "text": "Con un resumen ejecutivo por correo.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión queda documentada y confirmada.",
        "de": "Perfekt. Die Entscheidung ist dokumentiert und bestätigt.",
        "answers": []
      }
    }
  },
  {
    "id": "es09_finanzen_audit",
    "topic": "Finanzberichte",
    "title": "Finanzprüfung",
    "level": "B1-B2",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿Qué situación desea resolver?",
        "de": "Guten Tag. Welche Situation möchten Sie lösen?",
        "answers": [
          {
            "text": "Quiero analizar los hechos y las opciones.",
            "next": "details"
          },
          {
            "text": "Necesito una solución bien fundamentada.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Cuáles son los datos, restricciones y objetivos principales?",
        "de": "Was sind die wichtigsten Daten, Einschränkungen und Ziele?",
        "answers": [
          {
            "text": "Estos son los datos más relevantes.",
            "next": "options"
          },
          {
            "text": "La principal restricción es el plazo.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Podemos comparar impacto, coste, riesgo y viabilidad.",
        "de": "Wir können Wirkung, Kosten, Risiko und Umsetzbarkeit vergleichen.",
        "answers": [
          {
            "text": "Prefiero la opción con mejor equilibrio.",
            "next": "confirm"
          },
          {
            "text": "Quiero reducir el riesgo antes de decidir.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo desea documentar la decisión y los próximos pasos?",
        "de": "Wie möchten Sie Entscheidung und nächste Schritte dokumentieren?",
        "answers": [
          {
            "text": "Con un informe detallado.",
            "next": "end"
          },
          {
            "text": "Con un resumen ejecutivo por correo.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión queda documentada y confirmada.",
        "de": "Perfekt. Die Entscheidung ist dokumentiert und bestätigt.",
        "answers": []
      }
    }
  }
];
ES_BRANCHING_SCENARIOS_151.push(...ES_BRANCHING_SCENARIOS_09);
