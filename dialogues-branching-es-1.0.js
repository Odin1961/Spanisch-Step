const ES_BRANCHING_SCENARIOS_10 = [
  {
    "id": "es10_liderazgo_crisis",
    "topic": "Führung B2",
    "title": "Krisensituation führen",
    "level": "B1-B2",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿Qué situación compleja desea analizar?",
        "de": "Guten Tag. Welche komplexe Situation möchten Sie analysieren?",
        "answers": [
          {
            "text": "Quiero revisar los hechos y las alternativas.",
            "next": "details"
          },
          {
            "text": "Necesito tomar una decisión bien fundamentada.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Cuáles son los objetivos, riesgos y restricciones principales?",
        "de": "Was sind die wichtigsten Ziele, Risiken und Einschränkungen?",
        "answers": [
          {
            "text": "Estos son los datos más importantes.",
            "next": "options"
          },
          {
            "text": "El principal riesgo es el siguiente.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Podemos comparar impacto, coste, viabilidad y efecto a largo plazo.",
        "de": "Wir können Wirkung, Kosten, Umsetzbarkeit und langfristige Folgen vergleichen.",
        "answers": [
          {
            "text": "Prefiero una solución equilibrada.",
            "next": "confirm"
          },
          {
            "text": "Quiero priorizar la opción más sostenible.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo desea documentar la decisión y las responsabilidades?",
        "de": "Wie möchten Sie Entscheidung und Verantwortlichkeiten dokumentieren?",
        "answers": [
          {
            "text": "Con un informe detallado y responsables claros.",
            "next": "end"
          },
          {
            "text": "Con un resumen ejecutivo y próximos pasos.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión, los responsables y el seguimiento quedan confirmados.",
        "de": "Perfekt. Entscheidung, Verantwortliche und Nachverfolgung sind bestätigt.",
        "answers": []
      }
    }
  },
  {
    "id": "es10_liderazgo_desempeno",
    "topic": "Führung B2",
    "title": "Leistungsgespräch",
    "level": "B1-B2",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿Qué situación compleja desea analizar?",
        "de": "Guten Tag. Welche komplexe Situation möchten Sie analysieren?",
        "answers": [
          {
            "text": "Quiero revisar los hechos y las alternativas.",
            "next": "details"
          },
          {
            "text": "Necesito tomar una decisión bien fundamentada.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Cuáles son los objetivos, riesgos y restricciones principales?",
        "de": "Was sind die wichtigsten Ziele, Risiken und Einschränkungen?",
        "answers": [
          {
            "text": "Estos son los datos más importantes.",
            "next": "options"
          },
          {
            "text": "El principal riesgo es el siguiente.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Podemos comparar impacto, coste, viabilidad y efecto a largo plazo.",
        "de": "Wir können Wirkung, Kosten, Umsetzbarkeit und langfristige Folgen vergleichen.",
        "answers": [
          {
            "text": "Prefiero una solución equilibrada.",
            "next": "confirm"
          },
          {
            "text": "Quiero priorizar la opción más sostenible.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo desea documentar la decisión y las responsabilidades?",
        "de": "Wie möchten Sie Entscheidung und Verantwortlichkeiten dokumentieren?",
        "answers": [
          {
            "text": "Con un informe detallado y responsables claros.",
            "next": "end"
          },
          {
            "text": "Con un resumen ejecutivo y próximos pasos.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión, los responsables y el seguimiento quedan confirmados.",
        "de": "Perfekt. Entscheidung, Verantwortliche und Nachverfolgung sind bestätigt.",
        "answers": []
      }
    }
  },
  {
    "id": "es10_organizacion_estructura",
    "topic": "Organisation B2",
    "title": "Struktur überprüfen",
    "level": "B1-B2",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿Qué situación compleja desea analizar?",
        "de": "Guten Tag. Welche komplexe Situation möchten Sie analysieren?",
        "answers": [
          {
            "text": "Quiero revisar los hechos y las alternativas.",
            "next": "details"
          },
          {
            "text": "Necesito tomar una decisión bien fundamentada.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Cuáles son los objetivos, riesgos y restricciones principales?",
        "de": "Was sind die wichtigsten Ziele, Risiken und Einschränkungen?",
        "answers": [
          {
            "text": "Estos son los datos más importantes.",
            "next": "options"
          },
          {
            "text": "El principal riesgo es el siguiente.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Podemos comparar impacto, coste, viabilidad y efecto a largo plazo.",
        "de": "Wir können Wirkung, Kosten, Umsetzbarkeit und langfristige Folgen vergleichen.",
        "answers": [
          {
            "text": "Prefiero una solución equilibrada.",
            "next": "confirm"
          },
          {
            "text": "Quiero priorizar la opción más sostenible.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo desea documentar la decisión y las responsabilidades?",
        "de": "Wie möchten Sie Entscheidung und Verantwortlichkeiten dokumentieren?",
        "answers": [
          {
            "text": "Con un informe detallado y responsables claros.",
            "next": "end"
          },
          {
            "text": "Con un resumen ejecutivo y próximos pasos.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión, los responsables y el seguimiento quedan confirmados.",
        "de": "Perfekt. Entscheidung, Verantwortliche und Nachverfolgung sind bestätigt.",
        "answers": []
      }
    }
  },
  {
    "id": "es10_organizacion_gobernanza",
    "topic": "Organisation B2",
    "title": "Governance klären",
    "level": "B1-B2",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿Qué situación compleja desea analizar?",
        "de": "Guten Tag. Welche komplexe Situation möchten Sie analysieren?",
        "answers": [
          {
            "text": "Quiero revisar los hechos y las alternativas.",
            "next": "details"
          },
          {
            "text": "Necesito tomar una decisión bien fundamentada.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Cuáles son los objetivos, riesgos y restricciones principales?",
        "de": "Was sind die wichtigsten Ziele, Risiken und Einschränkungen?",
        "answers": [
          {
            "text": "Estos son los datos más importantes.",
            "next": "options"
          },
          {
            "text": "El principal riesgo es el siguiente.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Podemos comparar impacto, coste, viabilidad y efecto a largo plazo.",
        "de": "Wir können Wirkung, Kosten, Umsetzbarkeit und langfristige Folgen vergleichen.",
        "answers": [
          {
            "text": "Prefiero una solución equilibrada.",
            "next": "confirm"
          },
          {
            "text": "Quiero priorizar la opción más sostenible.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo desea documentar la decisión y las responsabilidades?",
        "de": "Wie möchten Sie Entscheidung und Verantwortlichkeiten dokumentieren?",
        "answers": [
          {
            "text": "Con un informe detallado y responsables claros.",
            "next": "end"
          },
          {
            "text": "Con un resumen ejecutivo y próximos pasos.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión, los responsables y el seguimiento quedan confirmados.",
        "de": "Perfekt. Entscheidung, Verantwortliche und Nachverfolgung sind bestätigt.",
        "answers": []
      }
    }
  },
  {
    "id": "es10_ventas_cuenta",
    "topic": "Vertrieb B2",
    "title": "Strategischen Kunden entwickeln",
    "level": "B1-B2",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿Qué situación compleja desea analizar?",
        "de": "Guten Tag. Welche komplexe Situation möchten Sie analysieren?",
        "answers": [
          {
            "text": "Quiero revisar los hechos y las alternativas.",
            "next": "details"
          },
          {
            "text": "Necesito tomar una decisión bien fundamentada.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Cuáles son los objetivos, riesgos y restricciones principales?",
        "de": "Was sind die wichtigsten Ziele, Risiken und Einschränkungen?",
        "answers": [
          {
            "text": "Estos son los datos más importantes.",
            "next": "options"
          },
          {
            "text": "El principal riesgo es el siguiente.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Podemos comparar impacto, coste, viabilidad y efecto a largo plazo.",
        "de": "Wir können Wirkung, Kosten, Umsetzbarkeit und langfristige Folgen vergleichen.",
        "answers": [
          {
            "text": "Prefiero una solución equilibrada.",
            "next": "confirm"
          },
          {
            "text": "Quiero priorizar la opción más sostenible.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo desea documentar la decisión y las responsabilidades?",
        "de": "Wie möchten Sie Entscheidung und Verantwortlichkeiten dokumentieren?",
        "answers": [
          {
            "text": "Con un informe detallado y responsables claros.",
            "next": "end"
          },
          {
            "text": "Con un resumen ejecutivo y próximos pasos.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión, los responsables y el seguimiento quedan confirmados.",
        "de": "Perfekt. Entscheidung, Verantwortliche und Nachverfolgung sind bestätigt.",
        "answers": []
      }
    }
  },
  {
    "id": "es10_ventas_cierre",
    "topic": "Vertrieb B2",
    "title": "Verkaufsabschluss",
    "level": "B1-B2",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿Qué situación compleja desea analizar?",
        "de": "Guten Tag. Welche komplexe Situation möchten Sie analysieren?",
        "answers": [
          {
            "text": "Quiero revisar los hechos y las alternativas.",
            "next": "details"
          },
          {
            "text": "Necesito tomar una decisión bien fundamentada.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Cuáles son los objetivos, riesgos y restricciones principales?",
        "de": "Was sind die wichtigsten Ziele, Risiken und Einschränkungen?",
        "answers": [
          {
            "text": "Estos son los datos más importantes.",
            "next": "options"
          },
          {
            "text": "El principal riesgo es el siguiente.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Podemos comparar impacto, coste, viabilidad y efecto a largo plazo.",
        "de": "Wir können Wirkung, Kosten, Umsetzbarkeit und langfristige Folgen vergleichen.",
        "answers": [
          {
            "text": "Prefiero una solución equilibrada.",
            "next": "confirm"
          },
          {
            "text": "Quiero priorizar la opción más sostenible.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo desea documentar la decisión y las responsabilidades?",
        "de": "Wie möchten Sie Entscheidung und Verantwortlichkeiten dokumentieren?",
        "answers": [
          {
            "text": "Con un informe detallado y responsables claros.",
            "next": "end"
          },
          {
            "text": "Con un resumen ejecutivo y próximos pasos.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión, los responsables y el seguimiento quedan confirmados.",
        "de": "Perfekt. Entscheidung, Verantwortliche und Nachverfolgung sind bestätigt.",
        "answers": []
      }
    }
  },
  {
    "id": "es10_procesos_cuello",
    "topic": "Prozesse",
    "title": "Prozessengpass",
    "level": "B1-B2",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿Qué situación compleja desea analizar?",
        "de": "Guten Tag. Welche komplexe Situation möchten Sie analysieren?",
        "answers": [
          {
            "text": "Quiero revisar los hechos y las alternativas.",
            "next": "details"
          },
          {
            "text": "Necesito tomar una decisión bien fundamentada.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Cuáles son los objetivos, riesgos y restricciones principales?",
        "de": "Was sind die wichtigsten Ziele, Risiken und Einschränkungen?",
        "answers": [
          {
            "text": "Estos son los datos más importantes.",
            "next": "options"
          },
          {
            "text": "El principal riesgo es el siguiente.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Podemos comparar impacto, coste, viabilidad y efecto a largo plazo.",
        "de": "Wir können Wirkung, Kosten, Umsetzbarkeit und langfristige Folgen vergleichen.",
        "answers": [
          {
            "text": "Prefiero una solución equilibrada.",
            "next": "confirm"
          },
          {
            "text": "Quiero priorizar la opción más sostenible.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo desea documentar la decisión y las responsabilidades?",
        "de": "Wie möchten Sie Entscheidung und Verantwortlichkeiten dokumentieren?",
        "answers": [
          {
            "text": "Con un informe detallado y responsables claros.",
            "next": "end"
          },
          {
            "text": "Con un resumen ejecutivo y próximos pasos.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión, los responsables y el seguimiento quedan confirmados.",
        "de": "Perfekt. Entscheidung, Verantwortliche und Nachverfolgung sind bestätigt.",
        "answers": []
      }
    }
  },
  {
    "id": "es10_procesos_automatizacion",
    "topic": "Prozesse",
    "title": "Prozess automatisieren",
    "level": "B1-B2",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿Qué situación compleja desea analizar?",
        "de": "Guten Tag. Welche komplexe Situation möchten Sie analysieren?",
        "answers": [
          {
            "text": "Quiero revisar los hechos y las alternativas.",
            "next": "details"
          },
          {
            "text": "Necesito tomar una decisión bien fundamentada.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Cuáles son los objetivos, riesgos y restricciones principales?",
        "de": "Was sind die wichtigsten Ziele, Risiken und Einschränkungen?",
        "answers": [
          {
            "text": "Estos son los datos más importantes.",
            "next": "options"
          },
          {
            "text": "El principal riesgo es el siguiente.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Podemos comparar impacto, coste, viabilidad y efecto a largo plazo.",
        "de": "Wir können Wirkung, Kosten, Umsetzbarkeit und langfristige Folgen vergleichen.",
        "answers": [
          {
            "text": "Prefiero una solución equilibrada.",
            "next": "confirm"
          },
          {
            "text": "Quiero priorizar la opción más sostenible.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo desea documentar la decisión y las responsabilidades?",
        "de": "Wie möchten Sie Entscheidung und Verantwortlichkeiten dokumentieren?",
        "answers": [
          {
            "text": "Con un informe detallado y responsables claros.",
            "next": "end"
          },
          {
            "text": "Con un resumen ejecutivo y próximos pasos.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión, los responsables y el seguimiento quedan confirmados.",
        "de": "Perfekt. Entscheidung, Verantwortliche und Nachverfolgung sind bestätigt.",
        "answers": []
      }
    }
  },
  {
    "id": "es10_educacion_evaluacion",
    "topic": "Bildung B2",
    "title": "Bewertung besprechen",
    "level": "B1-B2",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿Qué situación compleja desea analizar?",
        "de": "Guten Tag. Welche komplexe Situation möchten Sie analysieren?",
        "answers": [
          {
            "text": "Quiero revisar los hechos y las alternativas.",
            "next": "details"
          },
          {
            "text": "Necesito tomar una decisión bien fundamentada.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Cuáles son los objetivos, riesgos y restricciones principales?",
        "de": "Was sind die wichtigsten Ziele, Risiken und Einschränkungen?",
        "answers": [
          {
            "text": "Estos son los datos más importantes.",
            "next": "options"
          },
          {
            "text": "El principal riesgo es el siguiente.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Podemos comparar impacto, coste, viabilidad y efecto a largo plazo.",
        "de": "Wir können Wirkung, Kosten, Umsetzbarkeit und langfristige Folgen vergleichen.",
        "answers": [
          {
            "text": "Prefiero una solución equilibrada.",
            "next": "confirm"
          },
          {
            "text": "Quiero priorizar la opción más sostenible.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo desea documentar la decisión y las responsabilidades?",
        "de": "Wie möchten Sie Entscheidung und Verantwortlichkeiten dokumentieren?",
        "answers": [
          {
            "text": "Con un informe detallado y responsables claros.",
            "next": "end"
          },
          {
            "text": "Con un resumen ejecutivo y próximos pasos.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión, los responsables y el seguimiento quedan confirmados.",
        "de": "Perfekt. Entscheidung, Verantwortliche und Nachverfolgung sind bestätigt.",
        "answers": []
      }
    }
  },
  {
    "id": "es10_educacion_proyecto",
    "topic": "Bildung B2",
    "title": "Abschlussprojekt",
    "level": "B1-B2",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿Qué situación compleja desea analizar?",
        "de": "Guten Tag. Welche komplexe Situation möchten Sie analysieren?",
        "answers": [
          {
            "text": "Quiero revisar los hechos y las alternativas.",
            "next": "details"
          },
          {
            "text": "Necesito tomar una decisión bien fundamentada.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Cuáles son los objetivos, riesgos y restricciones principales?",
        "de": "Was sind die wichtigsten Ziele, Risiken und Einschränkungen?",
        "answers": [
          {
            "text": "Estos son los datos más importantes.",
            "next": "options"
          },
          {
            "text": "El principal riesgo es el siguiente.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Podemos comparar impacto, coste, viabilidad y efecto a largo plazo.",
        "de": "Wir können Wirkung, Kosten, Umsetzbarkeit und langfristige Folgen vergleichen.",
        "answers": [
          {
            "text": "Prefiero una solución equilibrada.",
            "next": "confirm"
          },
          {
            "text": "Quiero priorizar la opción más sostenible.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo desea documentar la decisión y las responsabilidades?",
        "de": "Wie möchten Sie Entscheidung und Verantwortlichkeiten dokumentieren?",
        "answers": [
          {
            "text": "Con un informe detallado y responsables claros.",
            "next": "end"
          },
          {
            "text": "Con un resumen ejecutivo y próximos pasos.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión, los responsables y el seguimiento quedan confirmados.",
        "de": "Perfekt. Entscheidung, Verantwortliche und Nachverfolgung sind bestätigt.",
        "answers": []
      }
    }
  },
  {
    "id": "es10_medicina_segunda_opinion_b2",
    "topic": "Medizinische Gespräche B2",
    "title": "Zweitmeinung einholen",
    "level": "B1-B2",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿Qué situación compleja desea analizar?",
        "de": "Guten Tag. Welche komplexe Situation möchten Sie analysieren?",
        "answers": [
          {
            "text": "Quiero revisar los hechos y las alternativas.",
            "next": "details"
          },
          {
            "text": "Necesito tomar una decisión bien fundamentada.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Cuáles son los objetivos, riesgos y restricciones principales?",
        "de": "Was sind die wichtigsten Ziele, Risiken und Einschränkungen?",
        "answers": [
          {
            "text": "Estos son los datos más importantes.",
            "next": "options"
          },
          {
            "text": "El principal riesgo es el siguiente.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Podemos comparar impacto, coste, viabilidad y efecto a largo plazo.",
        "de": "Wir können Wirkung, Kosten, Umsetzbarkeit und langfristige Folgen vergleichen.",
        "answers": [
          {
            "text": "Prefiero una solución equilibrada.",
            "next": "confirm"
          },
          {
            "text": "Quiero priorizar la opción más sostenible.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo desea documentar la decisión y las responsabilidades?",
        "de": "Wie möchten Sie Entscheidung und Verantwortlichkeiten dokumentieren?",
        "answers": [
          {
            "text": "Con un informe detallado y responsables claros.",
            "next": "end"
          },
          {
            "text": "Con un resumen ejecutivo y próximos pasos.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión, los responsables y el seguimiento quedan confirmados.",
        "de": "Perfekt. Entscheidung, Verantwortliche und Nachverfolgung sind bestätigt.",
        "answers": []
      }
    }
  },
  {
    "id": "es10_medicina_intervencion",
    "topic": "Medizinische Gespräche B2",
    "title": "Eingriff besprechen",
    "level": "B1-B2",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿Qué situación compleja desea analizar?",
        "de": "Guten Tag. Welche komplexe Situation möchten Sie analysieren?",
        "answers": [
          {
            "text": "Quiero revisar los hechos y las alternativas.",
            "next": "details"
          },
          {
            "text": "Necesito tomar una decisión bien fundamentada.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Cuáles son los objetivos, riesgos y restricciones principales?",
        "de": "Was sind die wichtigsten Ziele, Risiken und Einschränkungen?",
        "answers": [
          {
            "text": "Estos son los datos más importantes.",
            "next": "options"
          },
          {
            "text": "El principal riesgo es el siguiente.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Podemos comparar impacto, coste, viabilidad y efecto a largo plazo.",
        "de": "Wir können Wirkung, Kosten, Umsetzbarkeit und langfristige Folgen vergleichen.",
        "answers": [
          {
            "text": "Prefiero una solución equilibrada.",
            "next": "confirm"
          },
          {
            "text": "Quiero priorizar la opción más sostenible.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo desea documentar la decisión y las responsabilidades?",
        "de": "Wie möchten Sie Entscheidung und Verantwortlichkeiten dokumentieren?",
        "answers": [
          {
            "text": "Con un informe detallado y responsables claros.",
            "next": "end"
          },
          {
            "text": "Con un resumen ejecutivo y próximos pasos.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión, los responsables y el seguimiento quedan confirmados.",
        "de": "Perfekt. Entscheidung, Verantwortliche und Nachverfolgung sind bestätigt.",
        "answers": []
      }
    }
  },
  {
    "id": "es10_viaje_compensacion",
    "topic": "Reiseverhandlungen",
    "title": "Reiseentschädigung",
    "level": "B1-B2",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿Qué situación compleja desea analizar?",
        "de": "Guten Tag. Welche komplexe Situation möchten Sie analysieren?",
        "answers": [
          {
            "text": "Quiero revisar los hechos y las alternativas.",
            "next": "details"
          },
          {
            "text": "Necesito tomar una decisión bien fundamentada.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Cuáles son los objetivos, riesgos y restricciones principales?",
        "de": "Was sind die wichtigsten Ziele, Risiken und Einschränkungen?",
        "answers": [
          {
            "text": "Estos son los datos más importantes.",
            "next": "options"
          },
          {
            "text": "El principal riesgo es el siguiente.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Podemos comparar impacto, coste, viabilidad y efecto a largo plazo.",
        "de": "Wir können Wirkung, Kosten, Umsetzbarkeit und langfristige Folgen vergleichen.",
        "answers": [
          {
            "text": "Prefiero una solución equilibrada.",
            "next": "confirm"
          },
          {
            "text": "Quiero priorizar la opción más sostenible.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo desea documentar la decisión y las responsabilidades?",
        "de": "Wie möchten Sie Entscheidung und Verantwortlichkeiten dokumentieren?",
        "answers": [
          {
            "text": "Con un informe detallado y responsables claros.",
            "next": "end"
          },
          {
            "text": "Con un resumen ejecutivo y próximos pasos.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión, los responsables y el seguimiento quedan confirmados.",
        "de": "Perfekt. Entscheidung, Verantwortliche und Nachverfolgung sind bestätigt.",
        "answers": []
      }
    }
  },
  {
    "id": "es10_viaje_alternativa",
    "topic": "Reiseverhandlungen",
    "title": "Reisealternative verhandeln",
    "level": "B1-B2",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿Qué situación compleja desea analizar?",
        "de": "Guten Tag. Welche komplexe Situation möchten Sie analysieren?",
        "answers": [
          {
            "text": "Quiero revisar los hechos y las alternativas.",
            "next": "details"
          },
          {
            "text": "Necesito tomar una decisión bien fundamentada.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Cuáles son los objetivos, riesgos y restricciones principales?",
        "de": "Was sind die wichtigsten Ziele, Risiken und Einschränkungen?",
        "answers": [
          {
            "text": "Estos son los datos más importantes.",
            "next": "options"
          },
          {
            "text": "El principal riesgo es el siguiente.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Podemos comparar impacto, coste, viabilidad y efecto a largo plazo.",
        "de": "Wir können Wirkung, Kosten, Umsetzbarkeit und langfristige Folgen vergleichen.",
        "answers": [
          {
            "text": "Prefiero una solución equilibrada.",
            "next": "confirm"
          },
          {
            "text": "Quiero priorizar la opción más sostenible.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo desea documentar la decisión y las responsabilidades?",
        "de": "Wie möchten Sie Entscheidung und Verantwortlichkeiten dokumentieren?",
        "answers": [
          {
            "text": "Con un informe detallado y responsables claros.",
            "next": "end"
          },
          {
            "text": "Con un resumen ejecutivo y próximos pasos.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión, los responsables y el seguimiento quedan confirmados.",
        "de": "Perfekt. Entscheidung, Verantwortliche und Nachverfolgung sind bestätigt.",
        "answers": []
      }
    }
  },
  {
    "id": "es10_digital_permisos",
    "topic": "Digitale Arbeit",
    "title": "Berechtigungen klären",
    "level": "B1-B2",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿Qué situación compleja desea analizar?",
        "de": "Guten Tag. Welche komplexe Situation möchten Sie analysieren?",
        "answers": [
          {
            "text": "Quiero revisar los hechos y las alternativas.",
            "next": "details"
          },
          {
            "text": "Necesito tomar una decisión bien fundamentada.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Cuáles son los objetivos, riesgos y restricciones principales?",
        "de": "Was sind die wichtigsten Ziele, Risiken und Einschränkungen?",
        "answers": [
          {
            "text": "Estos son los datos más importantes.",
            "next": "options"
          },
          {
            "text": "El principal riesgo es el siguiente.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Podemos comparar impacto, coste, viabilidad y efecto a largo plazo.",
        "de": "Wir können Wirkung, Kosten, Umsetzbarkeit und langfristige Folgen vergleichen.",
        "answers": [
          {
            "text": "Prefiero una solución equilibrada.",
            "next": "confirm"
          },
          {
            "text": "Quiero priorizar la opción más sostenible.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo desea documentar la decisión y las responsabilidades?",
        "de": "Wie möchten Sie Entscheidung und Verantwortlichkeiten dokumentieren?",
        "answers": [
          {
            "text": "Con un informe detallado y responsables claros.",
            "next": "end"
          },
          {
            "text": "Con un resumen ejecutivo y próximos pasos.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión, los responsables y el seguimiento quedan confirmados.",
        "de": "Perfekt. Entscheidung, Verantwortliche und Nachverfolgung sind bestätigt.",
        "answers": []
      }
    }
  },
  {
    "id": "es10_digital_reunion",
    "topic": "Digitale Arbeit",
    "title": "Hybrides Meeting",
    "level": "B1-B2",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿Qué situación compleja desea analizar?",
        "de": "Guten Tag. Welche komplexe Situation möchten Sie analysieren?",
        "answers": [
          {
            "text": "Quiero revisar los hechos y las alternativas.",
            "next": "details"
          },
          {
            "text": "Necesito tomar una decisión bien fundamentada.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Cuáles son los objetivos, riesgos y restricciones principales?",
        "de": "Was sind die wichtigsten Ziele, Risiken und Einschränkungen?",
        "answers": [
          {
            "text": "Estos son los datos más importantes.",
            "next": "options"
          },
          {
            "text": "El principal riesgo es el siguiente.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Podemos comparar impacto, coste, viabilidad y efecto a largo plazo.",
        "de": "Wir können Wirkung, Kosten, Umsetzbarkeit und langfristige Folgen vergleichen.",
        "answers": [
          {
            "text": "Prefiero una solución equilibrada.",
            "next": "confirm"
          },
          {
            "text": "Quiero priorizar la opción más sostenible.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo desea documentar la decisión y las responsabilidades?",
        "de": "Wie möchten Sie Entscheidung und Verantwortlichkeiten dokumentieren?",
        "answers": [
          {
            "text": "Con un informe detallado y responsables claros.",
            "next": "end"
          },
          {
            "text": "Con un resumen ejecutivo y próximos pasos.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión, los responsables y el seguimiento quedan confirmados.",
        "de": "Perfekt. Entscheidung, Verantwortliche und Nachverfolgung sind bestätigt.",
        "answers": []
      }
    }
  },
  {
    "id": "es10_intercultural_feedback",
    "topic": "Interkulturelle Kommunikation",
    "title": "Interkulturelles Feedback",
    "level": "B1-B2",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿Qué situación compleja desea analizar?",
        "de": "Guten Tag. Welche komplexe Situation möchten Sie analysieren?",
        "answers": [
          {
            "text": "Quiero revisar los hechos y las alternativas.",
            "next": "details"
          },
          {
            "text": "Necesito tomar una decisión bien fundamentada.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Cuáles son los objetivos, riesgos y restricciones principales?",
        "de": "Was sind die wichtigsten Ziele, Risiken und Einschränkungen?",
        "answers": [
          {
            "text": "Estos son los datos más importantes.",
            "next": "options"
          },
          {
            "text": "El principal riesgo es el siguiente.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Podemos comparar impacto, coste, viabilidad y efecto a largo plazo.",
        "de": "Wir können Wirkung, Kosten, Umsetzbarkeit und langfristige Folgen vergleichen.",
        "answers": [
          {
            "text": "Prefiero una solución equilibrada.",
            "next": "confirm"
          },
          {
            "text": "Quiero priorizar la opción más sostenible.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo desea documentar la decisión y las responsabilidades?",
        "de": "Wie möchten Sie Entscheidung und Verantwortlichkeiten dokumentieren?",
        "answers": [
          {
            "text": "Con un informe detallado y responsables claros.",
            "next": "end"
          },
          {
            "text": "Con un resumen ejecutivo y próximos pasos.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión, los responsables y el seguimiento quedan confirmados.",
        "de": "Perfekt. Entscheidung, Verantwortliche und Nachverfolgung sind bestätigt.",
        "answers": []
      }
    }
  },
  {
    "id": "es10_intercultural_conflicto",
    "topic": "Interkulturelle Kommunikation",
    "title": "Kulturelles Missverständnis",
    "level": "B1-B2",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿Qué situación compleja desea analizar?",
        "de": "Guten Tag. Welche komplexe Situation möchten Sie analysieren?",
        "answers": [
          {
            "text": "Quiero revisar los hechos y las alternativas.",
            "next": "details"
          },
          {
            "text": "Necesito tomar una decisión bien fundamentada.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Cuáles son los objetivos, riesgos y restricciones principales?",
        "de": "Was sind die wichtigsten Ziele, Risiken und Einschränkungen?",
        "answers": [
          {
            "text": "Estos son los datos más importantes.",
            "next": "options"
          },
          {
            "text": "El principal riesgo es el siguiente.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Podemos comparar impacto, coste, viabilidad y efecto a largo plazo.",
        "de": "Wir können Wirkung, Kosten, Umsetzbarkeit und langfristige Folgen vergleichen.",
        "answers": [
          {
            "text": "Prefiero una solución equilibrada.",
            "next": "confirm"
          },
          {
            "text": "Quiero priorizar la opción más sostenible.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo desea documentar la decisión y las responsabilidades?",
        "de": "Wie möchten Sie Entscheidung und Verantwortlichkeiten dokumentieren?",
        "answers": [
          {
            "text": "Con un informe detallado y responsables claros.",
            "next": "end"
          },
          {
            "text": "Con un resumen ejecutivo y próximos pasos.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión, los responsables y el seguimiento quedan confirmados.",
        "de": "Perfekt. Entscheidung, Verantwortliche und Nachverfolgung sind bestätigt.",
        "answers": []
      }
    }
  },
  {
    "id": "es10_gramatica_subjuntivo",
    "topic": "Fortgeschrittene Grammatik",
    "title": "Subjunktiv anwenden",
    "level": "B1-B2",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿Qué situación compleja desea analizar?",
        "de": "Guten Tag. Welche komplexe Situation möchten Sie analysieren?",
        "answers": [
          {
            "text": "Quiero revisar los hechos y las alternativas.",
            "next": "details"
          },
          {
            "text": "Necesito tomar una decisión bien fundamentada.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Cuáles son los objetivos, riesgos y restricciones principales?",
        "de": "Was sind die wichtigsten Ziele, Risiken und Einschränkungen?",
        "answers": [
          {
            "text": "Estos son los datos más importantes.",
            "next": "options"
          },
          {
            "text": "El principal riesgo es el siguiente.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Podemos comparar impacto, coste, viabilidad y efecto a largo plazo.",
        "de": "Wir können Wirkung, Kosten, Umsetzbarkeit und langfristige Folgen vergleichen.",
        "answers": [
          {
            "text": "Prefiero una solución equilibrada.",
            "next": "confirm"
          },
          {
            "text": "Quiero priorizar la opción más sostenible.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo desea documentar la decisión y las responsabilidades?",
        "de": "Wie möchten Sie Entscheidung und Verantwortlichkeiten dokumentieren?",
        "answers": [
          {
            "text": "Con un informe detallado y responsables claros.",
            "next": "end"
          },
          {
            "text": "Con un resumen ejecutivo y próximos pasos.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión, los responsables y el seguimiento quedan confirmados.",
        "de": "Perfekt. Entscheidung, Verantwortliche und Nachverfolgung sind bestätigt.",
        "answers": []
      }
    }
  },
  {
    "id": "es10_gramatica_indirecto",
    "topic": "Fortgeschrittene Grammatik",
    "title": "Indirekte Rede",
    "level": "B1-B2",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿Qué situación compleja desea analizar?",
        "de": "Guten Tag. Welche komplexe Situation möchten Sie analysieren?",
        "answers": [
          {
            "text": "Quiero revisar los hechos y las alternativas.",
            "next": "details"
          },
          {
            "text": "Necesito tomar una decisión bien fundamentada.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Cuáles son los objetivos, riesgos y restricciones principales?",
        "de": "Was sind die wichtigsten Ziele, Risiken und Einschränkungen?",
        "answers": [
          {
            "text": "Estos son los datos más importantes.",
            "next": "options"
          },
          {
            "text": "El principal riesgo es el siguiente.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Podemos comparar impacto, coste, viabilidad y efecto a largo plazo.",
        "de": "Wir können Wirkung, Kosten, Umsetzbarkeit und langfristige Folgen vergleichen.",
        "answers": [
          {
            "text": "Prefiero una solución equilibrada.",
            "next": "confirm"
          },
          {
            "text": "Quiero priorizar la opción más sostenible.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo desea documentar la decisión y las responsabilidades?",
        "de": "Wie möchten Sie Entscheidung und Verantwortlichkeiten dokumentieren?",
        "answers": [
          {
            "text": "Con un informe detallado y responsables claros.",
            "next": "end"
          },
          {
            "text": "Con un resumen ejecutivo y próximos pasos.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión, los responsables y el seguimiento quedan confirmados.",
        "de": "Perfekt. Entscheidung, Verantwortliche und Nachverfolgung sind bestätigt.",
        "answers": []
      }
    }
  },
  {
    "id": "es10_liderazgo_delegacion",
    "topic": "Führung B2",
    "title": "Delegation verbessern",
    "level": "B1-B2",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿Qué situación compleja desea analizar?",
        "de": "Guten Tag. Welche komplexe Situation möchten Sie analysieren?",
        "answers": [
          {
            "text": "Quiero revisar los hechos y las alternativas.",
            "next": "details"
          },
          {
            "text": "Necesito tomar una decisión bien fundamentada.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Cuáles son los objetivos, riesgos y restricciones principales?",
        "de": "Was sind die wichtigsten Ziele, Risiken und Einschränkungen?",
        "answers": [
          {
            "text": "Estos son los datos más importantes.",
            "next": "options"
          },
          {
            "text": "El principal riesgo es el siguiente.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Podemos comparar impacto, coste, viabilidad y efecto a largo plazo.",
        "de": "Wir können Wirkung, Kosten, Umsetzbarkeit und langfristige Folgen vergleichen.",
        "answers": [
          {
            "text": "Prefiero una solución equilibrada.",
            "next": "confirm"
          },
          {
            "text": "Quiero priorizar la opción más sostenible.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo desea documentar la decisión y las responsabilidades?",
        "de": "Wie möchten Sie Entscheidung und Verantwortlichkeiten dokumentieren?",
        "answers": [
          {
            "text": "Con un informe detallado y responsables claros.",
            "next": "end"
          },
          {
            "text": "Con un resumen ejecutivo y próximos pasos.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión, los responsables y el seguimiento quedan confirmados.",
        "de": "Perfekt. Entscheidung, Verantwortliche und Nachverfolgung sind bestätigt.",
        "answers": []
      }
    }
  },
  {
    "id": "es10_ventas_objeciones_b2",
    "topic": "Vertrieb B2",
    "title": "Komplexe Einwände",
    "level": "B1-B2",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿Qué situación compleja desea analizar?",
        "de": "Guten Tag. Welche komplexe Situation möchten Sie analysieren?",
        "answers": [
          {
            "text": "Quiero revisar los hechos y las alternativas.",
            "next": "details"
          },
          {
            "text": "Necesito tomar una decisión bien fundamentada.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Cuáles son los objetivos, riesgos y restricciones principales?",
        "de": "Was sind die wichtigsten Ziele, Risiken und Einschränkungen?",
        "answers": [
          {
            "text": "Estos son los datos más importantes.",
            "next": "options"
          },
          {
            "text": "El principal riesgo es el siguiente.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Podemos comparar impacto, coste, viabilidad y efecto a largo plazo.",
        "de": "Wir können Wirkung, Kosten, Umsetzbarkeit und langfristige Folgen vergleichen.",
        "answers": [
          {
            "text": "Prefiero una solución equilibrada.",
            "next": "confirm"
          },
          {
            "text": "Quiero priorizar la opción más sostenible.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo desea documentar la decisión y las responsabilidades?",
        "de": "Wie möchten Sie Entscheidung und Verantwortlichkeiten dokumentieren?",
        "answers": [
          {
            "text": "Con un informe detallado y responsables claros.",
            "next": "end"
          },
          {
            "text": "Con un resumen ejecutivo y próximos pasos.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión, los responsables y el seguimiento quedan confirmados.",
        "de": "Perfekt. Entscheidung, Verantwortliche und Nachverfolgung sind bestätigt.",
        "answers": []
      }
    }
  },
  {
    "id": "es10_procesos_calidad",
    "topic": "Prozesse",
    "title": "Prozessqualität",
    "level": "B1-B2",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿Qué situación compleja desea analizar?",
        "de": "Guten Tag. Welche komplexe Situation möchten Sie analysieren?",
        "answers": [
          {
            "text": "Quiero revisar los hechos y las alternativas.",
            "next": "details"
          },
          {
            "text": "Necesito tomar una decisión bien fundamentada.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Cuáles son los objetivos, riesgos y restricciones principales?",
        "de": "Was sind die wichtigsten Ziele, Risiken und Einschränkungen?",
        "answers": [
          {
            "text": "Estos son los datos más importantes.",
            "next": "options"
          },
          {
            "text": "El principal riesgo es el siguiente.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Podemos comparar impacto, coste, viabilidad y efecto a largo plazo.",
        "de": "Wir können Wirkung, Kosten, Umsetzbarkeit und langfristige Folgen vergleichen.",
        "answers": [
          {
            "text": "Prefiero una solución equilibrada.",
            "next": "confirm"
          },
          {
            "text": "Quiero priorizar la opción más sostenible.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo desea documentar la decisión y las responsabilidades?",
        "de": "Wie möchten Sie Entscheidung und Verantwortlichkeiten dokumentieren?",
        "answers": [
          {
            "text": "Con un informe detallado y responsables claros.",
            "next": "end"
          },
          {
            "text": "Con un resumen ejecutivo y próximos pasos.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión, los responsables y el seguimiento quedan confirmados.",
        "de": "Perfekt. Entscheidung, Verantwortliche und Nachverfolgung sind bestätigt.",
        "answers": []
      }
    }
  },
  {
    "id": "es10_educacion_defensa",
    "topic": "Bildung B2",
    "title": "Mündliche Verteidigung",
    "level": "B1-B2",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿Qué situación compleja desea analizar?",
        "de": "Guten Tag. Welche komplexe Situation möchten Sie analysieren?",
        "answers": [
          {
            "text": "Quiero revisar los hechos y las alternativas.",
            "next": "details"
          },
          {
            "text": "Necesito tomar una decisión bien fundamentada.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Cuáles son los objetivos, riesgos y restricciones principales?",
        "de": "Was sind die wichtigsten Ziele, Risiken und Einschränkungen?",
        "answers": [
          {
            "text": "Estos son los datos más importantes.",
            "next": "options"
          },
          {
            "text": "El principal riesgo es el siguiente.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Podemos comparar impacto, coste, viabilidad y efecto a largo plazo.",
        "de": "Wir können Wirkung, Kosten, Umsetzbarkeit und langfristige Folgen vergleichen.",
        "answers": [
          {
            "text": "Prefiero una solución equilibrada.",
            "next": "confirm"
          },
          {
            "text": "Quiero priorizar la opción más sostenible.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo desea documentar la decisión y las responsabilidades?",
        "de": "Wie möchten Sie Entscheidung und Verantwortlichkeiten dokumentieren?",
        "answers": [
          {
            "text": "Con un informe detallado y responsables claros.",
            "next": "end"
          },
          {
            "text": "Con un resumen ejecutivo y próximos pasos.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión, los responsables y el seguimiento quedan confirmados.",
        "de": "Perfekt. Entscheidung, Verantwortliche und Nachverfolgung sind bestätigt.",
        "answers": []
      }
    }
  },
  {
    "id": "es10_digital_firma",
    "topic": "Digitale Arbeit",
    "title": "Digitale Freigabe",
    "level": "B1-B2",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿Qué situación compleja desea analizar?",
        "de": "Guten Tag. Welche komplexe Situation möchten Sie analysieren?",
        "answers": [
          {
            "text": "Quiero revisar los hechos y las alternativas.",
            "next": "details"
          },
          {
            "text": "Necesito tomar una decisión bien fundamentada.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Cuáles son los objetivos, riesgos y restricciones principales?",
        "de": "Was sind die wichtigsten Ziele, Risiken und Einschränkungen?",
        "answers": [
          {
            "text": "Estos son los datos más importantes.",
            "next": "options"
          },
          {
            "text": "El principal riesgo es el siguiente.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Podemos comparar impacto, coste, viabilidad y efecto a largo plazo.",
        "de": "Wir können Wirkung, Kosten, Umsetzbarkeit und langfristige Folgen vergleichen.",
        "answers": [
          {
            "text": "Prefiero una solución equilibrada.",
            "next": "confirm"
          },
          {
            "text": "Quiero priorizar la opción más sostenible.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo desea documentar la decisión y las responsabilidades?",
        "de": "Wie möchten Sie Entscheidung und Verantwortlichkeiten dokumentieren?",
        "answers": [
          {
            "text": "Con un informe detallado y responsables claros.",
            "next": "end"
          },
          {
            "text": "Con un resumen ejecutivo y próximos pasos.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión, los responsables y el seguimiento quedan confirmados.",
        "de": "Perfekt. Entscheidung, Verantwortliche und Nachverfolgung sind bestätigt.",
        "answers": []
      }
    }
  }
];
ES_BRANCHING_SCENARIOS_151.push(...ES_BRANCHING_SCENARIOS_10);
