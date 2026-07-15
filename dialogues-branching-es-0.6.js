const ES_BRANCHING_SCENARIOS_06 = [
  {
    "id": "es06_seguro_dano",
    "topic": "Versicherung",
    "title": "Schaden melden",
    "level": "B1-B2",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿En qué puedo ayudarle?",
        "de": "Guten Tag. Wie kann ich Ihnen helfen?",
        "answers": [
          {
            "text": "Necesito revisar esta situación en detalle.",
            "next": "details"
          },
          {
            "text": "Quiero encontrar una solución adecuada.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Puede resumir los hechos principales?",
        "de": "Können Sie die wichtigsten Fakten zusammenfassen?",
        "answers": [
          {
            "text": "Sí, estos son los puntos principales.",
            "next": "options"
          },
          {
            "text": "Primero necesito aclarar una duda.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Hay varias opciones con ventajas y riesgos distintos.",
        "de": "Es gibt mehrere Optionen mit unterschiedlichen Vor- und Nachteilen.",
        "answers": [
          {
            "text": "Prefiero la opción más segura.",
            "next": "confirm"
          },
          {
            "text": "Quiero comparar costes y beneficios.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo desea documentar la decisión?",
        "de": "Wie möchten Sie die Entscheidung dokumentieren?",
        "answers": [
          {
            "text": "Por escrito y por correo electrónico.",
            "next": "end"
          },
          {
            "text": "Una confirmación breve es suficiente.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión y los próximos pasos quedan registrados.",
        "de": "Perfekt. Entscheidung und nächste Schritte sind festgehalten.",
        "answers": []
      }
    }
  },
  {
    "id": "es06_seguro_cobertura",
    "topic": "Versicherung",
    "title": "Versicherungsschutz klären",
    "level": "B1-B2",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿En qué puedo ayudarle?",
        "de": "Guten Tag. Wie kann ich Ihnen helfen?",
        "answers": [
          {
            "text": "Necesito revisar esta situación en detalle.",
            "next": "details"
          },
          {
            "text": "Quiero encontrar una solución adecuada.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Puede resumir los hechos principales?",
        "de": "Können Sie die wichtigsten Fakten zusammenfassen?",
        "answers": [
          {
            "text": "Sí, estos son los puntos principales.",
            "next": "options"
          },
          {
            "text": "Primero necesito aclarar una duda.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Hay varias opciones con ventajas y riesgos distintos.",
        "de": "Es gibt mehrere Optionen mit unterschiedlichen Vor- und Nachteilen.",
        "answers": [
          {
            "text": "Prefiero la opción más segura.",
            "next": "confirm"
          },
          {
            "text": "Quiero comparar costes y beneficios.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo desea documentar la decisión?",
        "de": "Wie möchten Sie die Entscheidung dokumentieren?",
        "answers": [
          {
            "text": "Por escrito y por correo electrónico.",
            "next": "end"
          },
          {
            "text": "Una confirmación breve es suficiente.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión y los próximos pasos quedan registrados.",
        "de": "Perfekt. Entscheidung und nächste Schritte sind festgehalten.",
        "answers": []
      }
    }
  },
  {
    "id": "es06_piso_compra",
    "topic": "Immobilien",
    "title": "Wohnung kaufen",
    "level": "B1-B2",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿En qué puedo ayudarle?",
        "de": "Guten Tag. Wie kann ich Ihnen helfen?",
        "answers": [
          {
            "text": "Necesito revisar esta situación en detalle.",
            "next": "details"
          },
          {
            "text": "Quiero encontrar una solución adecuada.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Puede resumir los hechos principales?",
        "de": "Können Sie die wichtigsten Fakten zusammenfassen?",
        "answers": [
          {
            "text": "Sí, estos son los puntos principales.",
            "next": "options"
          },
          {
            "text": "Primero necesito aclarar una duda.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Hay varias opciones con ventajas y riesgos distintos.",
        "de": "Es gibt mehrere Optionen mit unterschiedlichen Vor- und Nachteilen.",
        "answers": [
          {
            "text": "Prefiero la opción más segura.",
            "next": "confirm"
          },
          {
            "text": "Quiero comparar costes y beneficios.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo desea documentar la decisión?",
        "de": "Wie möchten Sie die Entscheidung dokumentieren?",
        "answers": [
          {
            "text": "Por escrito y por correo electrónico.",
            "next": "end"
          },
          {
            "text": "Una confirmación breve es suficiente.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión y los próximos pasos quedan registrados.",
        "de": "Perfekt. Entscheidung und nächste Schritte sind festgehalten.",
        "answers": []
      }
    }
  },
  {
    "id": "es06_piso_visita",
    "topic": "Immobilien",
    "title": "Wohnungsbesichtigung",
    "level": "B1-B2",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿En qué puedo ayudarle?",
        "de": "Guten Tag. Wie kann ich Ihnen helfen?",
        "answers": [
          {
            "text": "Necesito revisar esta situación en detalle.",
            "next": "details"
          },
          {
            "text": "Quiero encontrar una solución adecuada.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Puede resumir los hechos principales?",
        "de": "Können Sie die wichtigsten Fakten zusammenfassen?",
        "answers": [
          {
            "text": "Sí, estos son los puntos principales.",
            "next": "options"
          },
          {
            "text": "Primero necesito aclarar una duda.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Hay varias opciones con ventajas y riesgos distintos.",
        "de": "Es gibt mehrere Optionen mit unterschiedlichen Vor- und Nachteilen.",
        "answers": [
          {
            "text": "Prefiero la opción más segura.",
            "next": "confirm"
          },
          {
            "text": "Quiero comparar costes y beneficios.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo desea documentar la decisión?",
        "de": "Wie möchten Sie die Entscheidung dokumentieren?",
        "answers": [
          {
            "text": "Por escrito y por correo electrónico.",
            "next": "end"
          },
          {
            "text": "Una confirmación breve es suficiente.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión y los próximos pasos quedan registrados.",
        "de": "Perfekt. Entscheidung und nächste Schritte sind festgehalten.",
        "answers": []
      }
    }
  },
  {
    "id": "es06_reclamacion_producto",
    "topic": "Reklamation",
    "title": "Produkt reklamieren",
    "level": "B1-B2",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿En qué puedo ayudarle?",
        "de": "Guten Tag. Wie kann ich Ihnen helfen?",
        "answers": [
          {
            "text": "Necesito revisar esta situación en detalle.",
            "next": "details"
          },
          {
            "text": "Quiero encontrar una solución adecuada.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Puede resumir los hechos principales?",
        "de": "Können Sie die wichtigsten Fakten zusammenfassen?",
        "answers": [
          {
            "text": "Sí, estos son los puntos principales.",
            "next": "options"
          },
          {
            "text": "Primero necesito aclarar una duda.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Hay varias opciones con ventajas y riesgos distintos.",
        "de": "Es gibt mehrere Optionen mit unterschiedlichen Vor- und Nachteilen.",
        "answers": [
          {
            "text": "Prefiero la opción más segura.",
            "next": "confirm"
          },
          {
            "text": "Quiero comparar costes y beneficios.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo desea documentar la decisión?",
        "de": "Wie möchten Sie die Entscheidung dokumentieren?",
        "answers": [
          {
            "text": "Por escrito y por correo electrónico.",
            "next": "end"
          },
          {
            "text": "Una confirmación breve es suficiente.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión y los próximos pasos quedan registrados.",
        "de": "Perfekt. Entscheidung und nächste Schritte sind festgehalten.",
        "answers": []
      }
    }
  },
  {
    "id": "es06_reclamacion_servicio",
    "topic": "Reklamation",
    "title": "Dienstleistung reklamieren",
    "level": "B1-B2",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿En qué puedo ayudarle?",
        "de": "Guten Tag. Wie kann ich Ihnen helfen?",
        "answers": [
          {
            "text": "Necesito revisar esta situación en detalle.",
            "next": "details"
          },
          {
            "text": "Quiero encontrar una solución adecuada.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Puede resumir los hechos principales?",
        "de": "Können Sie die wichtigsten Fakten zusammenfassen?",
        "answers": [
          {
            "text": "Sí, estos son los puntos principales.",
            "next": "options"
          },
          {
            "text": "Primero necesito aclarar una duda.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Hay varias opciones con ventajas y riesgos distintos.",
        "de": "Es gibt mehrere Optionen mit unterschiedlichen Vor- und Nachteilen.",
        "answers": [
          {
            "text": "Prefiero la opción más segura.",
            "next": "confirm"
          },
          {
            "text": "Quiero comparar costes y beneficios.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo desea documentar la decisión?",
        "de": "Wie möchten Sie die Entscheidung dokumentieren?",
        "answers": [
          {
            "text": "Por escrito y por correo electrónico.",
            "next": "end"
          },
          {
            "text": "Una confirmación breve es suficiente.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión y los próximos pasos quedan registrados.",
        "de": "Perfekt. Entscheidung und nächste Schritte sind festgehalten.",
        "answers": []
      }
    }
  },
  {
    "id": "es06_tecnica_red",
    "topic": "Technik",
    "title": "Netzwerkproblem",
    "level": "B1-B2",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿En qué puedo ayudarle?",
        "de": "Guten Tag. Wie kann ich Ihnen helfen?",
        "answers": [
          {
            "text": "Necesito revisar esta situación en detalle.",
            "next": "details"
          },
          {
            "text": "Quiero encontrar una solución adecuada.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Puede resumir los hechos principales?",
        "de": "Können Sie die wichtigsten Fakten zusammenfassen?",
        "answers": [
          {
            "text": "Sí, estos son los puntos principales.",
            "next": "options"
          },
          {
            "text": "Primero necesito aclarar una duda.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Hay varias opciones con ventajas y riesgos distintos.",
        "de": "Es gibt mehrere Optionen mit unterschiedlichen Vor- und Nachteilen.",
        "answers": [
          {
            "text": "Prefiero la opción más segura.",
            "next": "confirm"
          },
          {
            "text": "Quiero comparar costes y beneficios.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo desea documentar la decisión?",
        "de": "Wie möchten Sie die Entscheidung dokumentieren?",
        "answers": [
          {
            "text": "Por escrito y por correo electrónico.",
            "next": "end"
          },
          {
            "text": "Una confirmación breve es suficiente.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión y los próximos pasos quedan registrados.",
        "de": "Perfekt. Entscheidung und nächste Schritte sind festgehalten.",
        "answers": []
      }
    }
  },
  {
    "id": "es06_tecnica_actualizacion",
    "topic": "Technik",
    "title": "Software-Update",
    "level": "B1-B2",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿En qué puedo ayudarle?",
        "de": "Guten Tag. Wie kann ich Ihnen helfen?",
        "answers": [
          {
            "text": "Necesito revisar esta situación en detalle.",
            "next": "details"
          },
          {
            "text": "Quiero encontrar una solución adecuada.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Puede resumir los hechos principales?",
        "de": "Können Sie die wichtigsten Fakten zusammenfassen?",
        "answers": [
          {
            "text": "Sí, estos son los puntos principales.",
            "next": "options"
          },
          {
            "text": "Primero necesito aclarar una duda.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Hay varias opciones con ventajas y riesgos distintos.",
        "de": "Es gibt mehrere Optionen mit unterschiedlichen Vor- und Nachteilen.",
        "answers": [
          {
            "text": "Prefiero la opción más segura.",
            "next": "confirm"
          },
          {
            "text": "Quiero comparar costes y beneficios.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo desea documentar la decisión?",
        "de": "Wie möchten Sie die Entscheidung dokumentieren?",
        "answers": [
          {
            "text": "Por escrito y por correo electrónico.",
            "next": "end"
          },
          {
            "text": "Una confirmación breve es suficiente.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión y los próximos pasos quedan registrados.",
        "de": "Perfekt. Entscheidung und nächste Schritte sind festgehalten.",
        "answers": []
      }
    }
  },
  {
    "id": "es06_viaje_reemision",
    "topic": "Reisen B2",
    "title": "Ticket neu ausstellen",
    "level": "B1-B2",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿En qué puedo ayudarle?",
        "de": "Guten Tag. Wie kann ich Ihnen helfen?",
        "answers": [
          {
            "text": "Necesito revisar esta situación en detalle.",
            "next": "details"
          },
          {
            "text": "Quiero encontrar una solución adecuada.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Puede resumir los hechos principales?",
        "de": "Können Sie die wichtigsten Fakten zusammenfassen?",
        "answers": [
          {
            "text": "Sí, estos son los puntos principales.",
            "next": "options"
          },
          {
            "text": "Primero necesito aclarar una duda.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Hay varias opciones con ventajas y riesgos distintos.",
        "de": "Es gibt mehrere Optionen mit unterschiedlichen Vor- und Nachteilen.",
        "answers": [
          {
            "text": "Prefiero la opción más segura.",
            "next": "confirm"
          },
          {
            "text": "Quiero comparar costes y beneficios.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo desea documentar la decisión?",
        "de": "Wie möchten Sie die Entscheidung dokumentieren?",
        "answers": [
          {
            "text": "Por escrito y por correo electrónico.",
            "next": "end"
          },
          {
            "text": "Una confirmación breve es suficiente.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión y los próximos pasos quedan registrados.",
        "de": "Perfekt. Entscheidung und nächste Schritte sind festgehalten.",
        "answers": []
      }
    }
  },
  {
    "id": "es06_viaje_equipaje",
    "topic": "Reisen B2",
    "title": "Verspätetes Gepäck",
    "level": "B1-B2",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿En qué puedo ayudarle?",
        "de": "Guten Tag. Wie kann ich Ihnen helfen?",
        "answers": [
          {
            "text": "Necesito revisar esta situación en detalle.",
            "next": "details"
          },
          {
            "text": "Quiero encontrar una solución adecuada.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Puede resumir los hechos principales?",
        "de": "Können Sie die wichtigsten Fakten zusammenfassen?",
        "answers": [
          {
            "text": "Sí, estos son los puntos principales.",
            "next": "options"
          },
          {
            "text": "Primero necesito aclarar una duda.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Hay varias opciones con ventajas y riesgos distintos.",
        "de": "Es gibt mehrere Optionen mit unterschiedlichen Vor- und Nachteilen.",
        "answers": [
          {
            "text": "Prefiero la opción más segura.",
            "next": "confirm"
          },
          {
            "text": "Quiero comparar costes y beneficios.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo desea documentar la decisión?",
        "de": "Wie möchten Sie die Entscheidung dokumentieren?",
        "answers": [
          {
            "text": "Por escrito y por correo electrónico.",
            "next": "end"
          },
          {
            "text": "Una confirmación breve es suficiente.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión y los próximos pasos quedan registrados.",
        "de": "Perfekt. Entscheidung und nächste Schritte sind festgehalten.",
        "answers": []
      }
    }
  },
  {
    "id": "es06_medicina_segunda_opinion",
    "topic": "Medizin B2",
    "title": "Zweitmeinung",
    "level": "B1-B2",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿En qué puedo ayudarle?",
        "de": "Guten Tag. Wie kann ich Ihnen helfen?",
        "answers": [
          {
            "text": "Necesito revisar esta situación en detalle.",
            "next": "details"
          },
          {
            "text": "Quiero encontrar una solución adecuada.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Puede resumir los hechos principales?",
        "de": "Können Sie die wichtigsten Fakten zusammenfassen?",
        "answers": [
          {
            "text": "Sí, estos son los puntos principales.",
            "next": "options"
          },
          {
            "text": "Primero necesito aclarar una duda.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Hay varias opciones con ventajas y riesgos distintos.",
        "de": "Es gibt mehrere Optionen mit unterschiedlichen Vor- und Nachteilen.",
        "answers": [
          {
            "text": "Prefiero la opción más segura.",
            "next": "confirm"
          },
          {
            "text": "Quiero comparar costes y beneficios.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo desea documentar la decisión?",
        "de": "Wie möchten Sie die Entscheidung dokumentieren?",
        "answers": [
          {
            "text": "Por escrito y por correo electrónico.",
            "next": "end"
          },
          {
            "text": "Una confirmación breve es suficiente.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión y los próximos pasos quedan registrados.",
        "de": "Perfekt. Entscheidung und nächste Schritte sind festgehalten.",
        "answers": []
      }
    }
  },
  {
    "id": "es06_medicina_informe",
    "topic": "Medizin B2",
    "title": "Arztbericht besprechen",
    "level": "B1-B2",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿En qué puedo ayudarle?",
        "de": "Guten Tag. Wie kann ich Ihnen helfen?",
        "answers": [
          {
            "text": "Necesito revisar esta situación en detalle.",
            "next": "details"
          },
          {
            "text": "Quiero encontrar una solución adecuada.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Puede resumir los hechos principales?",
        "de": "Können Sie die wichtigsten Fakten zusammenfassen?",
        "answers": [
          {
            "text": "Sí, estos son los puntos principales.",
            "next": "options"
          },
          {
            "text": "Primero necesito aclarar una duda.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Hay varias opciones con ventajas y riesgos distintos.",
        "de": "Es gibt mehrere Optionen mit unterschiedlichen Vor- und Nachteilen.",
        "answers": [
          {
            "text": "Prefiero la opción más segura.",
            "next": "confirm"
          },
          {
            "text": "Quiero comparar costes y beneficios.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo desea documentar la decisión?",
        "de": "Wie möchten Sie die Entscheidung dokumentieren?",
        "answers": [
          {
            "text": "Por escrito y por correo electrónico.",
            "next": "end"
          },
          {
            "text": "Una confirmación breve es suficiente.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión y los próximos pasos quedan registrados.",
        "de": "Perfekt. Entscheidung und nächste Schritte sind festgehalten.",
        "answers": []
      }
    }
  },
  {
    "id": "es06_equipo_conflicto",
    "topic": "Teamarbeit",
    "title": "Teamkonflikt",
    "level": "B1-B2",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿En qué puedo ayudarle?",
        "de": "Guten Tag. Wie kann ich Ihnen helfen?",
        "answers": [
          {
            "text": "Necesito revisar esta situación en detalle.",
            "next": "details"
          },
          {
            "text": "Quiero encontrar una solución adecuada.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Puede resumir los hechos principales?",
        "de": "Können Sie die wichtigsten Fakten zusammenfassen?",
        "answers": [
          {
            "text": "Sí, estos son los puntos principales.",
            "next": "options"
          },
          {
            "text": "Primero necesito aclarar una duda.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Hay varias opciones con ventajas y riesgos distintos.",
        "de": "Es gibt mehrere Optionen mit unterschiedlichen Vor- und Nachteilen.",
        "answers": [
          {
            "text": "Prefiero la opción más segura.",
            "next": "confirm"
          },
          {
            "text": "Quiero comparar costes y beneficios.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo desea documentar la decisión?",
        "de": "Wie möchten Sie die Entscheidung dokumentieren?",
        "answers": [
          {
            "text": "Por escrito y por correo electrónico.",
            "next": "end"
          },
          {
            "text": "Una confirmación breve es suficiente.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión y los próximos pasos quedan registrados.",
        "de": "Perfekt. Entscheidung und nächste Schritte sind festgehalten.",
        "answers": []
      }
    }
  },
  {
    "id": "es06_equipo_reparto",
    "topic": "Teamarbeit",
    "title": "Aufgaben verteilen",
    "level": "B1-B2",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿En qué puedo ayudarle?",
        "de": "Guten Tag. Wie kann ich Ihnen helfen?",
        "answers": [
          {
            "text": "Necesito revisar esta situación en detalle.",
            "next": "details"
          },
          {
            "text": "Quiero encontrar una solución adecuada.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Puede resumir los hechos principales?",
        "de": "Können Sie die wichtigsten Fakten zusammenfassen?",
        "answers": [
          {
            "text": "Sí, estos son los puntos principales.",
            "next": "options"
          },
          {
            "text": "Primero necesito aclarar una duda.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Hay varias opciones con ventajas y riesgos distintos.",
        "de": "Es gibt mehrere Optionen mit unterschiedlichen Vor- und Nachteilen.",
        "answers": [
          {
            "text": "Prefiero la opción más segura.",
            "next": "confirm"
          },
          {
            "text": "Quiero comparar costes y beneficios.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo desea documentar la decisión?",
        "de": "Wie möchten Sie die Entscheidung dokumentieren?",
        "answers": [
          {
            "text": "Por escrito y por correo electrónico.",
            "next": "end"
          },
          {
            "text": "Una confirmación breve es suficiente.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión y los próximos pasos quedan registrados.",
        "de": "Perfekt. Entscheidung und nächste Schritte sind festgehalten.",
        "answers": []
      }
    }
  },
  {
    "id": "es06_sociedad_asesoria",
    "topic": "Gesellschaft",
    "title": "Beratung nutzen",
    "level": "B1-B2",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿En qué puedo ayudarle?",
        "de": "Guten Tag. Wie kann ich Ihnen helfen?",
        "answers": [
          {
            "text": "Necesito revisar esta situación en detalle.",
            "next": "details"
          },
          {
            "text": "Quiero encontrar una solución adecuada.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Puede resumir los hechos principales?",
        "de": "Können Sie die wichtigsten Fakten zusammenfassen?",
        "answers": [
          {
            "text": "Sí, estos son los puntos principales.",
            "next": "options"
          },
          {
            "text": "Primero necesito aclarar una duda.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Hay varias opciones con ventajas y riesgos distintos.",
        "de": "Es gibt mehrere Optionen mit unterschiedlichen Vor- und Nachteilen.",
        "answers": [
          {
            "text": "Prefiero la opción más segura.",
            "next": "confirm"
          },
          {
            "text": "Quiero comparar costes y beneficios.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo desea documentar la decisión?",
        "de": "Wie möchten Sie die Entscheidung dokumentieren?",
        "answers": [
          {
            "text": "Por escrito y por correo electrónico.",
            "next": "end"
          },
          {
            "text": "Una confirmación breve es suficiente.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión y los próximos pasos quedan registrados.",
        "de": "Perfekt. Entscheidung und nächste Schritte sind festgehalten.",
        "answers": []
      }
    }
  },
  {
    "id": "es06_sociedad_solicitud",
    "topic": "Gesellschaft",
    "title": "Antrag stellen",
    "level": "B1-B2",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿En qué puedo ayudarle?",
        "de": "Guten Tag. Wie kann ich Ihnen helfen?",
        "answers": [
          {
            "text": "Necesito revisar esta situación en detalle.",
            "next": "details"
          },
          {
            "text": "Quiero encontrar una solución adecuada.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Puede resumir los hechos principales?",
        "de": "Können Sie die wichtigsten Fakten zusammenfassen?",
        "answers": [
          {
            "text": "Sí, estos son los puntos principales.",
            "next": "options"
          },
          {
            "text": "Primero necesito aclarar una duda.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Hay varias opciones con ventajas y riesgos distintos.",
        "de": "Es gibt mehrere Optionen mit unterschiedlichen Vor- und Nachteilen.",
        "answers": [
          {
            "text": "Prefiero la opción más segura.",
            "next": "confirm"
          },
          {
            "text": "Quiero comparar costes y beneficios.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo desea documentar la decisión?",
        "de": "Wie möchten Sie die Entscheidung dokumentieren?",
        "answers": [
          {
            "text": "Por escrito y por correo electrónico.",
            "next": "end"
          },
          {
            "text": "Una confirmación breve es suficiente.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión y los próximos pasos quedan registrados.",
        "de": "Perfekt. Entscheidung und nächste Schritte sind festgehalten.",
        "answers": []
      }
    }
  },
  {
    "id": "es06_cocina_receta",
    "topic": "Kochen",
    "title": "Rezept besprechen",
    "level": "B1-B2",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿En qué puedo ayudarle?",
        "de": "Guten Tag. Wie kann ich Ihnen helfen?",
        "answers": [
          {
            "text": "Necesito revisar esta situación en detalle.",
            "next": "details"
          },
          {
            "text": "Quiero encontrar una solución adecuada.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Puede resumir los hechos principales?",
        "de": "Können Sie die wichtigsten Fakten zusammenfassen?",
        "answers": [
          {
            "text": "Sí, estos son los puntos principales.",
            "next": "options"
          },
          {
            "text": "Primero necesito aclarar una duda.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Hay varias opciones con ventajas y riesgos distintos.",
        "de": "Es gibt mehrere Optionen mit unterschiedlichen Vor- und Nachteilen.",
        "answers": [
          {
            "text": "Prefiero la opción más segura.",
            "next": "confirm"
          },
          {
            "text": "Quiero comparar costes y beneficios.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo desea documentar la decisión?",
        "de": "Wie möchten Sie die Entscheidung dokumentieren?",
        "answers": [
          {
            "text": "Por escrito y por correo electrónico.",
            "next": "end"
          },
          {
            "text": "Una confirmación breve es suficiente.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión y los próximos pasos quedan registrados.",
        "de": "Perfekt. Entscheidung und nächste Schritte sind festgehalten.",
        "answers": []
      }
    }
  },
  {
    "id": "es06_cocina_plan",
    "topic": "Kochen",
    "title": "Wochenessen planen",
    "level": "B1-B2",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿En qué puedo ayudarle?",
        "de": "Guten Tag. Wie kann ich Ihnen helfen?",
        "answers": [
          {
            "text": "Necesito revisar esta situación en detalle.",
            "next": "details"
          },
          {
            "text": "Quiero encontrar una solución adecuada.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Puede resumir los hechos principales?",
        "de": "Können Sie die wichtigsten Fakten zusammenfassen?",
        "answers": [
          {
            "text": "Sí, estos son los puntos principales.",
            "next": "options"
          },
          {
            "text": "Primero necesito aclarar una duda.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Hay varias opciones con ventajas y riesgos distintos.",
        "de": "Es gibt mehrere Optionen mit unterschiedlichen Vor- und Nachteilen.",
        "answers": [
          {
            "text": "Prefiero la opción más segura.",
            "next": "confirm"
          },
          {
            "text": "Quiero comparar costes y beneficios.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo desea documentar la decisión?",
        "de": "Wie möchten Sie die Entscheidung dokumentieren?",
        "answers": [
          {
            "text": "Por escrito y por correo electrónico.",
            "next": "end"
          },
          {
            "text": "Una confirmación breve es suficiente.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión y los próximos pasos quedan registrados.",
        "de": "Perfekt. Entscheidung und nächste Schritte sind festgehalten.",
        "answers": []
      }
    }
  },
  {
    "id": "es06_datos_encuesta",
    "topic": "Forschung und Daten",
    "title": "Umfrage auswerten",
    "level": "B1-B2",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿En qué puedo ayudarle?",
        "de": "Guten Tag. Wie kann ich Ihnen helfen?",
        "answers": [
          {
            "text": "Necesito revisar esta situación en detalle.",
            "next": "details"
          },
          {
            "text": "Quiero encontrar una solución adecuada.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Puede resumir los hechos principales?",
        "de": "Können Sie die wichtigsten Fakten zusammenfassen?",
        "answers": [
          {
            "text": "Sí, estos son los puntos principales.",
            "next": "options"
          },
          {
            "text": "Primero necesito aclarar una duda.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Hay varias opciones con ventajas y riesgos distintos.",
        "de": "Es gibt mehrere Optionen mit unterschiedlichen Vor- und Nachteilen.",
        "answers": [
          {
            "text": "Prefiero la opción más segura.",
            "next": "confirm"
          },
          {
            "text": "Quiero comparar costes y beneficios.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo desea documentar la decisión?",
        "de": "Wie möchten Sie die Entscheidung dokumentieren?",
        "answers": [
          {
            "text": "Por escrito y por correo electrónico.",
            "next": "end"
          },
          {
            "text": "Una confirmación breve es suficiente.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión y los próximos pasos quedan registrados.",
        "de": "Perfekt. Entscheidung und nächste Schritte sind festgehalten.",
        "answers": []
      }
    }
  },
  {
    "id": "es06_datos_informe",
    "topic": "Forschung und Daten",
    "title": "Datenbericht",
    "level": "B1-B2",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿En qué puedo ayudarle?",
        "de": "Guten Tag. Wie kann ich Ihnen helfen?",
        "answers": [
          {
            "text": "Necesito revisar esta situación en detalle.",
            "next": "details"
          },
          {
            "text": "Quiero encontrar una solución adecuada.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Puede resumir los hechos principales?",
        "de": "Können Sie die wichtigsten Fakten zusammenfassen?",
        "answers": [
          {
            "text": "Sí, estos son los puntos principales.",
            "next": "options"
          },
          {
            "text": "Primero necesito aclarar una duda.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Hay varias opciones con ventajas y riesgos distintos.",
        "de": "Es gibt mehrere Optionen mit unterschiedlichen Vor- und Nachteilen.",
        "answers": [
          {
            "text": "Prefiero la opción más segura.",
            "next": "confirm"
          },
          {
            "text": "Quiero comparar costes y beneficios.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo desea documentar la decisión?",
        "de": "Wie möchten Sie die Entscheidung dokumentieren?",
        "answers": [
          {
            "text": "Por escrito y por correo electrónico.",
            "next": "end"
          },
          {
            "text": "Una confirmación breve es suficiente.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión y los próximos pasos quedan registrados.",
        "de": "Perfekt. Entscheidung und nächste Schritte sind festgehalten.",
        "answers": []
      }
    }
  },
  {
    "id": "es06_negociacion_precio_b2",
    "topic": "Verhandlungen",
    "title": "Preisverhandlung",
    "level": "B1-B2",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿En qué puedo ayudarle?",
        "de": "Guten Tag. Wie kann ich Ihnen helfen?",
        "answers": [
          {
            "text": "Necesito revisar esta situación en detalle.",
            "next": "details"
          },
          {
            "text": "Quiero encontrar una solución adecuada.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Puede resumir los hechos principales?",
        "de": "Können Sie die wichtigsten Fakten zusammenfassen?",
        "answers": [
          {
            "text": "Sí, estos son los puntos principales.",
            "next": "options"
          },
          {
            "text": "Primero necesito aclarar una duda.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Hay varias opciones con ventajas y riesgos distintos.",
        "de": "Es gibt mehrere Optionen mit unterschiedlichen Vor- und Nachteilen.",
        "answers": [
          {
            "text": "Prefiero la opción más segura.",
            "next": "confirm"
          },
          {
            "text": "Quiero comparar costes y beneficios.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo desea documentar la decisión?",
        "de": "Wie möchten Sie die Entscheidung dokumentieren?",
        "answers": [
          {
            "text": "Por escrito y por correo electrónico.",
            "next": "end"
          },
          {
            "text": "Una confirmación breve es suficiente.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión y los próximos pasos quedan registrados.",
        "de": "Perfekt. Entscheidung und nächste Schritte sind festgehalten.",
        "answers": []
      }
    }
  },
  {
    "id": "es06_proyecto_riesgo_b2",
    "topic": "Projektmanagement",
    "title": "Risikobewertung",
    "level": "B1-B2",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿En qué puedo ayudarle?",
        "de": "Guten Tag. Wie kann ich Ihnen helfen?",
        "answers": [
          {
            "text": "Necesito revisar esta situación en detalle.",
            "next": "details"
          },
          {
            "text": "Quiero encontrar una solución adecuada.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Puede resumir los hechos principales?",
        "de": "Können Sie die wichtigsten Fakten zusammenfassen?",
        "answers": [
          {
            "text": "Sí, estos son los puntos principales.",
            "next": "options"
          },
          {
            "text": "Primero necesito aclarar una duda.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Hay varias opciones con ventajas y riesgos distintos.",
        "de": "Es gibt mehrere Optionen mit unterschiedlichen Vor- und Nachteilen.",
        "answers": [
          {
            "text": "Prefiero la opción más segura.",
            "next": "confirm"
          },
          {
            "text": "Quiero comparar costes y beneficios.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo desea documentar la decisión?",
        "de": "Wie möchten Sie die Entscheidung dokumentieren?",
        "answers": [
          {
            "text": "Por escrito y por correo electrónico.",
            "next": "end"
          },
          {
            "text": "Una confirmación breve es suficiente.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión y los próximos pasos quedan registrados.",
        "de": "Perfekt. Entscheidung und nächste Schritte sind festgehalten.",
        "answers": []
      }
    }
  },
  {
    "id": "es06_cliente_escalado",
    "topic": "Kundenservice",
    "title": "Fall eskalieren",
    "level": "B1-B2",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿En qué puedo ayudarle?",
        "de": "Guten Tag. Wie kann ich Ihnen helfen?",
        "answers": [
          {
            "text": "Necesito revisar esta situación en detalle.",
            "next": "details"
          },
          {
            "text": "Quiero encontrar una solución adecuada.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Puede resumir los hechos principales?",
        "de": "Können Sie die wichtigsten Fakten zusammenfassen?",
        "answers": [
          {
            "text": "Sí, estos son los puntos principales.",
            "next": "options"
          },
          {
            "text": "Primero necesito aclarar una duda.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Hay varias opciones con ventajas y riesgos distintos.",
        "de": "Es gibt mehrere Optionen mit unterschiedlichen Vor- und Nachteilen.",
        "answers": [
          {
            "text": "Prefiero la opción más segura.",
            "next": "confirm"
          },
          {
            "text": "Quiero comparar costes y beneficios.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo desea documentar la decisión?",
        "de": "Wie möchten Sie die Entscheidung dokumentieren?",
        "answers": [
          {
            "text": "Por escrito y por correo electrónico.",
            "next": "end"
          },
          {
            "text": "Una confirmación breve es suficiente.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión y los próximos pasos quedan registrados.",
        "de": "Perfekt. Entscheidung und nächste Schritte sind festgehalten.",
        "answers": []
      }
    }
  },
  {
    "id": "es06_medico_dosis",
    "topic": "Gesundheit",
    "title": "Dosis anpassen",
    "level": "B1-B2",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿En qué puedo ayudarle?",
        "de": "Guten Tag. Wie kann ich Ihnen helfen?",
        "answers": [
          {
            "text": "Necesito revisar esta situación en detalle.",
            "next": "details"
          },
          {
            "text": "Quiero encontrar una solución adecuada.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Puede resumir los hechos principales?",
        "de": "Können Sie die wichtigsten Fakten zusammenfassen?",
        "answers": [
          {
            "text": "Sí, estos son los puntos principales.",
            "next": "options"
          },
          {
            "text": "Primero necesito aclarar una duda.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Hay varias opciones con ventajas y riesgos distintos.",
        "de": "Es gibt mehrere Optionen mit unterschiedlichen Vor- und Nachteilen.",
        "answers": [
          {
            "text": "Prefiero la opción más segura.",
            "next": "confirm"
          },
          {
            "text": "Quiero comparar costes y beneficios.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo desea documentar la decisión?",
        "de": "Wie möchten Sie die Entscheidung dokumentieren?",
        "answers": [
          {
            "text": "Por escrito y por correo electrónico.",
            "next": "end"
          },
          {
            "text": "Una confirmación breve es suficiente.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión y los próximos pasos quedan registrados.",
        "de": "Perfekt. Entscheidung und nächste Schritte sind festgehalten.",
        "answers": []
      }
    }
  },
  {
    "id": "es06_comunidad_apoyo",
    "topic": "Gesellschaft",
    "title": "Gemeinschaftshilfe",
    "level": "B1-B2",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿En qué puedo ayudarle?",
        "de": "Guten Tag. Wie kann ich Ihnen helfen?",
        "answers": [
          {
            "text": "Necesito revisar esta situación en detalle.",
            "next": "details"
          },
          {
            "text": "Quiero encontrar una solución adecuada.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Puede resumir los hechos principales?",
        "de": "Können Sie die wichtigsten Fakten zusammenfassen?",
        "answers": [
          {
            "text": "Sí, estos son los puntos principales.",
            "next": "options"
          },
          {
            "text": "Primero necesito aclarar una duda.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Hay varias opciones con ventajas y riesgos distintos.",
        "de": "Es gibt mehrere Optionen mit unterschiedlichen Vor- und Nachteilen.",
        "answers": [
          {
            "text": "Prefiero la opción más segura.",
            "next": "confirm"
          },
          {
            "text": "Quiero comparar costes y beneficios.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo desea documentar la decisión?",
        "de": "Wie möchten Sie die Entscheidung dokumentieren?",
        "answers": [
          {
            "text": "Por escrito y por correo electrónico.",
            "next": "end"
          },
          {
            "text": "Una confirmación breve es suficiente.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión y los próximos pasos quedan registrados.",
        "de": "Perfekt. Entscheidung und nächste Schritte sind festgehalten.",
        "answers": []
      }
    }
  }
];
ES_BRANCHING_SCENARIOS_151.push(...ES_BRANCHING_SCENARIOS_06);
