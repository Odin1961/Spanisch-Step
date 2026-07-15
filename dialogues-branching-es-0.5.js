const ES_BRANCHING_SCENARIOS_05 = [
  {
    "id": "es05_negociar_precio",
    "topic": "Verhandlungen",
    "title": "Preis verhandeln",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿En qué puedo ayudarle?",
        "de": "Guten Tag. Wie kann ich Ihnen helfen?",
        "answers": [
          {
            "text": "Necesito resolver esta situación.",
            "next": "details"
          },
          {
            "text": "Quiero revisar las opciones disponibles.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Puede explicar los detalles principales?",
        "de": "Können Sie die wichtigsten Einzelheiten erklären?",
        "answers": [
          {
            "text": "Sí, aquí tiene toda la información.",
            "next": "options"
          },
          {
            "text": "Necesito orientación antes de decidir.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Podemos ofrecer dos soluciones diferentes.",
        "de": "Wir können zwei verschiedene Lösungen anbieten.",
        "answers": [
          {
            "text": "Prefiero la solución más segura.",
            "next": "confirm"
          },
          {
            "text": "Quiero la opción más flexible.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo quiere confirmar la decisión?",
        "de": "Wie möchten Sie die Entscheidung bestätigen?",
        "answers": [
          {
            "text": "Por correo electrónico, por favor.",
            "next": "end"
          },
          {
            "text": "La confirmación verbal es suficiente.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión queda registrada.",
        "de": "Perfekt. Die Entscheidung wurde festgehalten.",
        "answers": []
      }
    }
  },
  {
    "id": "es05_negociar_contrato",
    "topic": "Verhandlungen",
    "title": "Vertragsbedingungen klären",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿En qué puedo ayudarle?",
        "de": "Guten Tag. Wie kann ich Ihnen helfen?",
        "answers": [
          {
            "text": "Necesito resolver esta situación.",
            "next": "details"
          },
          {
            "text": "Quiero revisar las opciones disponibles.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Puede explicar los detalles principales?",
        "de": "Können Sie die wichtigsten Einzelheiten erklären?",
        "answers": [
          {
            "text": "Sí, aquí tiene toda la información.",
            "next": "options"
          },
          {
            "text": "Necesito orientación antes de decidir.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Podemos ofrecer dos soluciones diferentes.",
        "de": "Wir können zwei verschiedene Lösungen anbieten.",
        "answers": [
          {
            "text": "Prefiero la solución más segura.",
            "next": "confirm"
          },
          {
            "text": "Quiero la opción más flexible.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo quiere confirmar la decisión?",
        "de": "Wie möchten Sie die Entscheidung bestätigen?",
        "answers": [
          {
            "text": "Por correo electrónico, por favor.",
            "next": "end"
          },
          {
            "text": "La confirmación verbal es suficiente.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión queda registrada.",
        "de": "Perfekt. Die Entscheidung wurde festgehalten.",
        "answers": []
      }
    }
  },
  {
    "id": "es05_proyecto_cambio",
    "topic": "Projektmanagement",
    "title": "Projektänderung",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿En qué puedo ayudarle?",
        "de": "Guten Tag. Wie kann ich Ihnen helfen?",
        "answers": [
          {
            "text": "Necesito resolver esta situación.",
            "next": "details"
          },
          {
            "text": "Quiero revisar las opciones disponibles.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Puede explicar los detalles principales?",
        "de": "Können Sie die wichtigsten Einzelheiten erklären?",
        "answers": [
          {
            "text": "Sí, aquí tiene toda la información.",
            "next": "options"
          },
          {
            "text": "Necesito orientación antes de decidir.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Podemos ofrecer dos soluciones diferentes.",
        "de": "Wir können zwei verschiedene Lösungen anbieten.",
        "answers": [
          {
            "text": "Prefiero la solución más segura.",
            "next": "confirm"
          },
          {
            "text": "Quiero la opción más flexible.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo quiere confirmar la decisión?",
        "de": "Wie möchten Sie die Entscheidung bestätigen?",
        "answers": [
          {
            "text": "Por correo electrónico, por favor.",
            "next": "end"
          },
          {
            "text": "La confirmación verbal es suficiente.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión queda registrada.",
        "de": "Perfekt. Die Entscheidung wurde festgehalten.",
        "answers": []
      }
    }
  },
  {
    "id": "es05_proyecto_cierre",
    "topic": "Projektmanagement",
    "title": "Projektabschluss",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿En qué puedo ayudarle?",
        "de": "Guten Tag. Wie kann ich Ihnen helfen?",
        "answers": [
          {
            "text": "Necesito resolver esta situación.",
            "next": "details"
          },
          {
            "text": "Quiero revisar las opciones disponibles.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Puede explicar los detalles principales?",
        "de": "Können Sie die wichtigsten Einzelheiten erklären?",
        "answers": [
          {
            "text": "Sí, aquí tiene toda la información.",
            "next": "options"
          },
          {
            "text": "Necesito orientación antes de decidir.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Podemos ofrecer dos soluciones diferentes.",
        "de": "Wir können zwei verschiedene Lösungen anbieten.",
        "answers": [
          {
            "text": "Prefiero la solución más segura.",
            "next": "confirm"
          },
          {
            "text": "Quiero la opción más flexible.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo quiere confirmar la decisión?",
        "de": "Wie möchten Sie die Entscheidung bestätigen?",
        "answers": [
          {
            "text": "Por correo electrónico, por favor.",
            "next": "end"
          },
          {
            "text": "La confirmación verbal es suficiente.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión queda registrada.",
        "de": "Perfekt. Die Entscheidung wurde festgehalten.",
        "answers": []
      }
    }
  },
  {
    "id": "es05_telefono_soporte",
    "topic": "Telefon B1",
    "title": "Supportanruf",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿En qué puedo ayudarle?",
        "de": "Guten Tag. Wie kann ich Ihnen helfen?",
        "answers": [
          {
            "text": "Necesito resolver esta situación.",
            "next": "details"
          },
          {
            "text": "Quiero revisar las opciones disponibles.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Puede explicar los detalles principales?",
        "de": "Können Sie die wichtigsten Einzelheiten erklären?",
        "answers": [
          {
            "text": "Sí, aquí tiene toda la información.",
            "next": "options"
          },
          {
            "text": "Necesito orientación antes de decidir.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Podemos ofrecer dos soluciones diferentes.",
        "de": "Wir können zwei verschiedene Lösungen anbieten.",
        "answers": [
          {
            "text": "Prefiero la solución más segura.",
            "next": "confirm"
          },
          {
            "text": "Quiero la opción más flexible.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo quiere confirmar la decisión?",
        "de": "Wie möchten Sie die Entscheidung bestätigen?",
        "answers": [
          {
            "text": "Por correo electrónico, por favor.",
            "next": "end"
          },
          {
            "text": "La confirmación verbal es suficiente.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión queda registrada.",
        "de": "Perfekt. Die Entscheidung wurde festgehalten.",
        "answers": []
      }
    }
  },
  {
    "id": "es05_telefono_mensaje",
    "topic": "Telefon B1",
    "title": "Nachricht hinterlassen",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿En qué puedo ayudarle?",
        "de": "Guten Tag. Wie kann ich Ihnen helfen?",
        "answers": [
          {
            "text": "Necesito resolver esta situación.",
            "next": "details"
          },
          {
            "text": "Quiero revisar las opciones disponibles.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Puede explicar los detalles principales?",
        "de": "Können Sie die wichtigsten Einzelheiten erklären?",
        "answers": [
          {
            "text": "Sí, aquí tiene toda la información.",
            "next": "options"
          },
          {
            "text": "Necesito orientación antes de decidir.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Podemos ofrecer dos soluciones diferentes.",
        "de": "Wir können zwei verschiedene Lösungen anbieten.",
        "answers": [
          {
            "text": "Prefiero la solución más segura.",
            "next": "confirm"
          },
          {
            "text": "Quiero la opción más flexible.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo quiere confirmar la decisión?",
        "de": "Wie möchten Sie die Entscheidung bestätigen?",
        "answers": [
          {
            "text": "Por correo electrónico, por favor.",
            "next": "end"
          },
          {
            "text": "La confirmación verbal es suficiente.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión queda registrada.",
        "de": "Perfekt. Die Entscheidung wurde festgehalten.",
        "answers": []
      }
    }
  },
  {
    "id": "es05_hogar_averia",
    "topic": "Haushalt",
    "title": "Haushaltsgerät defekt",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿En qué puedo ayudarle?",
        "de": "Guten Tag. Wie kann ich Ihnen helfen?",
        "answers": [
          {
            "text": "Necesito resolver esta situación.",
            "next": "details"
          },
          {
            "text": "Quiero revisar las opciones disponibles.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Puede explicar los detalles principales?",
        "de": "Können Sie die wichtigsten Einzelheiten erklären?",
        "answers": [
          {
            "text": "Sí, aquí tiene toda la información.",
            "next": "options"
          },
          {
            "text": "Necesito orientación antes de decidir.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Podemos ofrecer dos soluciones diferentes.",
        "de": "Wir können zwei verschiedene Lösungen anbieten.",
        "answers": [
          {
            "text": "Prefiero la solución más segura.",
            "next": "confirm"
          },
          {
            "text": "Quiero la opción más flexible.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo quiere confirmar la decisión?",
        "de": "Wie möchten Sie die Entscheidung bestätigen?",
        "answers": [
          {
            "text": "Por correo electrónico, por favor.",
            "next": "end"
          },
          {
            "text": "La confirmación verbal es suficiente.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión queda registrada.",
        "de": "Perfekt. Die Entscheidung wurde festgehalten.",
        "answers": []
      }
    }
  },
  {
    "id": "es05_hogar_tareas",
    "topic": "Haushalt",
    "title": "Hausarbeit organisieren",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿En qué puedo ayudarle?",
        "de": "Guten Tag. Wie kann ich Ihnen helfen?",
        "answers": [
          {
            "text": "Necesito resolver esta situación.",
            "next": "details"
          },
          {
            "text": "Quiero revisar las opciones disponibles.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Puede explicar los detalles principales?",
        "de": "Können Sie die wichtigsten Einzelheiten erklären?",
        "answers": [
          {
            "text": "Sí, aquí tiene toda la información.",
            "next": "options"
          },
          {
            "text": "Necesito orientación antes de decidir.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Podemos ofrecer dos soluciones diferentes.",
        "de": "Wir können zwei verschiedene Lösungen anbieten.",
        "answers": [
          {
            "text": "Prefiero la solución más segura.",
            "next": "confirm"
          },
          {
            "text": "Quiero la opción más flexible.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo quiere confirmar la decisión?",
        "de": "Wie möchten Sie die Entscheidung bestätigen?",
        "answers": [
          {
            "text": "Por correo electrónico, por favor.",
            "next": "end"
          },
          {
            "text": "La confirmación verbal es suficiente.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión queda registrada.",
        "de": "Perfekt. Die Entscheidung wurde festgehalten.",
        "answers": []
      }
    }
  },
  {
    "id": "es05_movilidad_abono",
    "topic": "Mobilität",
    "title": "Monatskarte kaufen",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿En qué puedo ayudarle?",
        "de": "Guten Tag. Wie kann ich Ihnen helfen?",
        "answers": [
          {
            "text": "Necesito resolver esta situación.",
            "next": "details"
          },
          {
            "text": "Quiero revisar las opciones disponibles.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Puede explicar los detalles principales?",
        "de": "Können Sie die wichtigsten Einzelheiten erklären?",
        "answers": [
          {
            "text": "Sí, aquí tiene toda la información.",
            "next": "options"
          },
          {
            "text": "Necesito orientación antes de decidir.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Podemos ofrecer dos soluciones diferentes.",
        "de": "Wir können zwei verschiedene Lösungen anbieten.",
        "answers": [
          {
            "text": "Prefiero la solución más segura.",
            "next": "confirm"
          },
          {
            "text": "Quiero la opción más flexible.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo quiere confirmar la decisión?",
        "de": "Wie möchten Sie die Entscheidung bestätigen?",
        "answers": [
          {
            "text": "Por correo electrónico, por favor.",
            "next": "end"
          },
          {
            "text": "La confirmación verbal es suficiente.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión queda registrada.",
        "de": "Perfekt. Die Entscheidung wurde festgehalten.",
        "answers": []
      }
    }
  },
  {
    "id": "es05_movilidad_carga",
    "topic": "Mobilität",
    "title": "Elektrofahrzeug laden",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿En qué puedo ayudarle?",
        "de": "Guten Tag. Wie kann ich Ihnen helfen?",
        "answers": [
          {
            "text": "Necesito resolver esta situación.",
            "next": "details"
          },
          {
            "text": "Quiero revisar las opciones disponibles.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Puede explicar los detalles principales?",
        "de": "Können Sie die wichtigsten Einzelheiten erklären?",
        "answers": [
          {
            "text": "Sí, aquí tiene toda la información.",
            "next": "options"
          },
          {
            "text": "Necesito orientación antes de decidir.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Podemos ofrecer dos soluciones diferentes.",
        "de": "Wir können zwei verschiedene Lösungen anbieten.",
        "answers": [
          {
            "text": "Prefiero la solución más segura.",
            "next": "confirm"
          },
          {
            "text": "Quiero la opción más flexible.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo quiere confirmar la decisión?",
        "de": "Wie möchten Sie die Entscheidung bestätigen?",
        "answers": [
          {
            "text": "Por correo electrónico, por favor.",
            "next": "end"
          },
          {
            "text": "La confirmación verbal es suficiente.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión queda registrada.",
        "de": "Perfekt. Die Entscheidung wurde festgehalten.",
        "answers": []
      }
    }
  },
  {
    "id": "es05_finanzas_presupuesto",
    "topic": "Finanzen Alltag",
    "title": "Monatsbudget planen",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿En qué puedo ayudarle?",
        "de": "Guten Tag. Wie kann ich Ihnen helfen?",
        "answers": [
          {
            "text": "Necesito resolver esta situación.",
            "next": "details"
          },
          {
            "text": "Quiero revisar las opciones disponibles.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Puede explicar los detalles principales?",
        "de": "Können Sie die wichtigsten Einzelheiten erklären?",
        "answers": [
          {
            "text": "Sí, aquí tiene toda la información.",
            "next": "options"
          },
          {
            "text": "Necesito orientación antes de decidir.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Podemos ofrecer dos soluciones diferentes.",
        "de": "Wir können zwei verschiedene Lösungen anbieten.",
        "answers": [
          {
            "text": "Prefiero la solución más segura.",
            "next": "confirm"
          },
          {
            "text": "Quiero la opción más flexible.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo quiere confirmar la decisión?",
        "de": "Wie möchten Sie die Entscheidung bestätigen?",
        "answers": [
          {
            "text": "Por correo electrónico, por favor.",
            "next": "end"
          },
          {
            "text": "La confirmación verbal es suficiente.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión queda registrada.",
        "de": "Perfekt. Die Entscheidung wurde festgehalten.",
        "answers": []
      }
    }
  },
  {
    "id": "es05_finanzas_factura",
    "topic": "Finanzen Alltag",
    "title": "Offene Rechnung klären",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿En qué puedo ayudarle?",
        "de": "Guten Tag. Wie kann ich Ihnen helfen?",
        "answers": [
          {
            "text": "Necesito resolver esta situación.",
            "next": "details"
          },
          {
            "text": "Quiero revisar las opciones disponibles.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Puede explicar los detalles principales?",
        "de": "Können Sie die wichtigsten Einzelheiten erklären?",
        "answers": [
          {
            "text": "Sí, aquí tiene toda la información.",
            "next": "options"
          },
          {
            "text": "Necesito orientación antes de decidir.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Podemos ofrecer dos soluciones diferentes.",
        "de": "Wir können zwei verschiedene Lösungen anbieten.",
        "answers": [
          {
            "text": "Prefiero la solución más segura.",
            "next": "confirm"
          },
          {
            "text": "Quiero la opción más flexible.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo quiere confirmar la decisión?",
        "de": "Wie möchten Sie die Entscheidung bestätigen?",
        "answers": [
          {
            "text": "Por correo electrónico, por favor.",
            "next": "end"
          },
          {
            "text": "La confirmación verbal es suficiente.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión queda registrada.",
        "de": "Perfekt. Die Entscheidung wurde festgehalten.",
        "answers": []
      }
    }
  },
  {
    "id": "es05_medios_noticia",
    "topic": "Kultur und Medien",
    "title": "Nachricht besprechen",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿En qué puedo ayudarle?",
        "de": "Guten Tag. Wie kann ich Ihnen helfen?",
        "answers": [
          {
            "text": "Necesito resolver esta situación.",
            "next": "details"
          },
          {
            "text": "Quiero revisar las opciones disponibles.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Puede explicar los detalles principales?",
        "de": "Können Sie die wichtigsten Einzelheiten erklären?",
        "answers": [
          {
            "text": "Sí, aquí tiene toda la información.",
            "next": "options"
          },
          {
            "text": "Necesito orientación antes de decidir.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Podemos ofrecer dos soluciones diferentes.",
        "de": "Wir können zwei verschiedene Lösungen anbieten.",
        "answers": [
          {
            "text": "Prefiero la solución más segura.",
            "next": "confirm"
          },
          {
            "text": "Quiero la opción más flexible.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo quiere confirmar la decisión?",
        "de": "Wie möchten Sie die Entscheidung bestätigen?",
        "answers": [
          {
            "text": "Por correo electrónico, por favor.",
            "next": "end"
          },
          {
            "text": "La confirmación verbal es suficiente.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión queda registrada.",
        "de": "Perfekt. Die Entscheidung wurde festgehalten.",
        "answers": []
      }
    }
  },
  {
    "id": "es05_medios_suscripcion",
    "topic": "Kultur und Medien",
    "title": "Medienabo verwalten",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿En qué puedo ayudarle?",
        "de": "Guten Tag. Wie kann ich Ihnen helfen?",
        "answers": [
          {
            "text": "Necesito resolver esta situación.",
            "next": "details"
          },
          {
            "text": "Quiero revisar las opciones disponibles.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Puede explicar los detalles principales?",
        "de": "Können Sie die wichtigsten Einzelheiten erklären?",
        "answers": [
          {
            "text": "Sí, aquí tiene toda la información.",
            "next": "options"
          },
          {
            "text": "Necesito orientación antes de decidir.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Podemos ofrecer dos soluciones diferentes.",
        "de": "Wir können zwei verschiedene Lösungen anbieten.",
        "answers": [
          {
            "text": "Prefiero la solución más segura.",
            "next": "confirm"
          },
          {
            "text": "Quiero la opción más flexible.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo quiere confirmar la decisión?",
        "de": "Wie möchten Sie die Entscheidung bestätigen?",
        "answers": [
          {
            "text": "Por correo electrónico, por favor.",
            "next": "end"
          },
          {
            "text": "La confirmación verbal es suficiente.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión queda registrada.",
        "de": "Perfekt. Die Entscheidung wurde festgehalten.",
        "answers": []
      }
    }
  },
  {
    "id": "es05_natur_sendero",
    "topic": "Natur und Reisen",
    "title": "Wanderroute planen",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿En qué puedo ayudarle?",
        "de": "Guten Tag. Wie kann ich Ihnen helfen?",
        "answers": [
          {
            "text": "Necesito resolver esta situación.",
            "next": "details"
          },
          {
            "text": "Quiero revisar las opciones disponibles.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Puede explicar los detalles principales?",
        "de": "Können Sie die wichtigsten Einzelheiten erklären?",
        "answers": [
          {
            "text": "Sí, aquí tiene toda la información.",
            "next": "options"
          },
          {
            "text": "Necesito orientación antes de decidir.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Podemos ofrecer dos soluciones diferentes.",
        "de": "Wir können zwei verschiedene Lösungen anbieten.",
        "answers": [
          {
            "text": "Prefiero la solución más segura.",
            "next": "confirm"
          },
          {
            "text": "Quiero la opción más flexible.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo quiere confirmar la decisión?",
        "de": "Wie möchten Sie die Entscheidung bestätigen?",
        "answers": [
          {
            "text": "Por correo electrónico, por favor.",
            "next": "end"
          },
          {
            "text": "La confirmación verbal es suficiente.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión queda registrada.",
        "de": "Perfekt. Die Entscheidung wurde festgehalten.",
        "answers": []
      }
    }
  },
  {
    "id": "es05_natur_seguridad",
    "topic": "Natur und Reisen",
    "title": "Sicherheit im Nationalpark",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿En qué puedo ayudarle?",
        "de": "Guten Tag. Wie kann ich Ihnen helfen?",
        "answers": [
          {
            "text": "Necesito resolver esta situación.",
            "next": "details"
          },
          {
            "text": "Quiero revisar las opciones disponibles.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Puede explicar los detalles principales?",
        "de": "Können Sie die wichtigsten Einzelheiten erklären?",
        "answers": [
          {
            "text": "Sí, aquí tiene toda la información.",
            "next": "options"
          },
          {
            "text": "Necesito orientación antes de decidir.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Podemos ofrecer dos soluciones diferentes.",
        "de": "Wir können zwei verschiedene Lösungen anbieten.",
        "answers": [
          {
            "text": "Prefiero la solución más segura.",
            "next": "confirm"
          },
          {
            "text": "Quiero la opción más flexible.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo quiere confirmar la decisión?",
        "de": "Wie möchten Sie die Entscheidung bestätigen?",
        "answers": [
          {
            "text": "Por correo electrónico, por favor.",
            "next": "end"
          },
          {
            "text": "La confirmación verbal es suficiente.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión queda registrada.",
        "de": "Perfekt. Die Entscheidung wurde festgehalten.",
        "answers": []
      }
    }
  },
  {
    "id": "es05_aprendizaje_pronunciacion",
    "topic": "Spanisch lernen",
    "title": "Aussprache trainieren",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿En qué puedo ayudarle?",
        "de": "Guten Tag. Wie kann ich Ihnen helfen?",
        "answers": [
          {
            "text": "Necesito resolver esta situación.",
            "next": "details"
          },
          {
            "text": "Quiero revisar las opciones disponibles.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Puede explicar los detalles principales?",
        "de": "Können Sie die wichtigsten Einzelheiten erklären?",
        "answers": [
          {
            "text": "Sí, aquí tiene toda la información.",
            "next": "options"
          },
          {
            "text": "Necesito orientación antes de decidir.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Podemos ofrecer dos soluciones diferentes.",
        "de": "Wir können zwei verschiedene Lösungen anbieten.",
        "answers": [
          {
            "text": "Prefiero la solución más segura.",
            "next": "confirm"
          },
          {
            "text": "Quiero la opción más flexible.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo quiere confirmar la decisión?",
        "de": "Wie möchten Sie die Entscheidung bestätigen?",
        "answers": [
          {
            "text": "Por correo electrónico, por favor.",
            "next": "end"
          },
          {
            "text": "La confirmación verbal es suficiente.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión queda registrada.",
        "de": "Perfekt. Die Entscheidung wurde festgehalten.",
        "answers": []
      }
    }
  },
  {
    "id": "es05_aprendizaje_gramatica",
    "topic": "Spanisch lernen",
    "title": "Grammatik üben",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿En qué puedo ayudarle?",
        "de": "Guten Tag. Wie kann ich Ihnen helfen?",
        "answers": [
          {
            "text": "Necesito resolver esta situación.",
            "next": "details"
          },
          {
            "text": "Quiero revisar las opciones disponibles.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Puede explicar los detalles principales?",
        "de": "Können Sie die wichtigsten Einzelheiten erklären?",
        "answers": [
          {
            "text": "Sí, aquí tiene toda la información.",
            "next": "options"
          },
          {
            "text": "Necesito orientación antes de decidir.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Podemos ofrecer dos soluciones diferentes.",
        "de": "Wir können zwei verschiedene Lösungen anbieten.",
        "answers": [
          {
            "text": "Prefiero la solución más segura.",
            "next": "confirm"
          },
          {
            "text": "Quiero la opción más flexible.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo quiere confirmar la decisión?",
        "de": "Wie möchten Sie die Entscheidung bestätigen?",
        "answers": [
          {
            "text": "Por correo electrónico, por favor.",
            "next": "end"
          },
          {
            "text": "La confirmación verbal es suficiente.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión queda registrada.",
        "de": "Perfekt. Die Entscheidung wurde festgehalten.",
        "answers": []
      }
    }
  },
  {
    "id": "es05_emergencia_medica",
    "topic": "Notfälle",
    "title": "Medizinischer Notfall",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿En qué puedo ayudarle?",
        "de": "Guten Tag. Wie kann ich Ihnen helfen?",
        "answers": [
          {
            "text": "Necesito resolver esta situación.",
            "next": "details"
          },
          {
            "text": "Quiero revisar las opciones disponibles.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Puede explicar los detalles principales?",
        "de": "Können Sie die wichtigsten Einzelheiten erklären?",
        "answers": [
          {
            "text": "Sí, aquí tiene toda la información.",
            "next": "options"
          },
          {
            "text": "Necesito orientación antes de decidir.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Podemos ofrecer dos soluciones diferentes.",
        "de": "Wir können zwei verschiedene Lösungen anbieten.",
        "answers": [
          {
            "text": "Prefiero la solución más segura.",
            "next": "confirm"
          },
          {
            "text": "Quiero la opción más flexible.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo quiere confirmar la decisión?",
        "de": "Wie möchten Sie die Entscheidung bestätigen?",
        "answers": [
          {
            "text": "Por correo electrónico, por favor.",
            "next": "end"
          },
          {
            "text": "La confirmación verbal es suficiente.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión queda registrada.",
        "de": "Perfekt. Die Entscheidung wurde festgehalten.",
        "answers": []
      }
    }
  },
  {
    "id": "es05_emergencia_documento",
    "topic": "Notfälle",
    "title": "Dokument verloren",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿En qué puedo ayudarle?",
        "de": "Guten Tag. Wie kann ich Ihnen helfen?",
        "answers": [
          {
            "text": "Necesito resolver esta situación.",
            "next": "details"
          },
          {
            "text": "Quiero revisar las opciones disponibles.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Puede explicar los detalles principales?",
        "de": "Können Sie die wichtigsten Einzelheiten erklären?",
        "answers": [
          {
            "text": "Sí, aquí tiene toda la información.",
            "next": "options"
          },
          {
            "text": "Necesito orientación antes de decidir.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Podemos ofrecer dos soluciones diferentes.",
        "de": "Wir können zwei verschiedene Lösungen anbieten.",
        "answers": [
          {
            "text": "Prefiero la solución más segura.",
            "next": "confirm"
          },
          {
            "text": "Quiero la opción más flexible.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo quiere confirmar la decisión?",
        "de": "Wie möchten Sie die Entscheidung bestätigen?",
        "answers": [
          {
            "text": "Por correo electrónico, por favor.",
            "next": "end"
          },
          {
            "text": "La confirmación verbal es suficiente.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión queda registrada.",
        "de": "Perfekt. Die Entscheidung wurde festgehalten.",
        "answers": []
      }
    }
  },
  {
    "id": "es05_reunion_negociacion",
    "topic": "Beruf",
    "title": "Verhandlungsgespräch",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿En qué puedo ayudarle?",
        "de": "Guten Tag. Wie kann ich Ihnen helfen?",
        "answers": [
          {
            "text": "Necesito resolver esta situación.",
            "next": "details"
          },
          {
            "text": "Quiero revisar las opciones disponibles.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Puede explicar los detalles principales?",
        "de": "Können Sie die wichtigsten Einzelheiten erklären?",
        "answers": [
          {
            "text": "Sí, aquí tiene toda la información.",
            "next": "options"
          },
          {
            "text": "Necesito orientación antes de decidir.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Podemos ofrecer dos soluciones diferentes.",
        "de": "Wir können zwei verschiedene Lösungen anbieten.",
        "answers": [
          {
            "text": "Prefiero la solución más segura.",
            "next": "confirm"
          },
          {
            "text": "Quiero la opción más flexible.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo quiere confirmar la decisión?",
        "de": "Wie möchten Sie die Entscheidung bestätigen?",
        "answers": [
          {
            "text": "Por correo electrónico, por favor.",
            "next": "end"
          },
          {
            "text": "La confirmación verbal es suficiente.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión queda registrada.",
        "de": "Perfekt. Die Entscheidung wurde festgehalten.",
        "answers": []
      }
    }
  },
  {
    "id": "es05_llamada_cliente_b1",
    "topic": "Kundenservice",
    "title": "Kundenanruf",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿En qué puedo ayudarle?",
        "de": "Guten Tag. Wie kann ich Ihnen helfen?",
        "answers": [
          {
            "text": "Necesito resolver esta situación.",
            "next": "details"
          },
          {
            "text": "Quiero revisar las opciones disponibles.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Puede explicar los detalles principales?",
        "de": "Können Sie die wichtigsten Einzelheiten erklären?",
        "answers": [
          {
            "text": "Sí, aquí tiene toda la información.",
            "next": "options"
          },
          {
            "text": "Necesito orientación antes de decidir.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Podemos ofrecer dos soluciones diferentes.",
        "de": "Wir können zwei verschiedene Lösungen anbieten.",
        "answers": [
          {
            "text": "Prefiero la solución más segura.",
            "next": "confirm"
          },
          {
            "text": "Quiero la opción más flexible.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo quiere confirmar la decisión?",
        "de": "Wie möchten Sie die Entscheidung bestätigen?",
        "answers": [
          {
            "text": "Por correo electrónico, por favor.",
            "next": "end"
          },
          {
            "text": "La confirmación verbal es suficiente.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión queda registrada.",
        "de": "Perfekt. Die Entscheidung wurde festgehalten.",
        "answers": []
      }
    }
  },
  {
    "id": "es05_pago_rechazado",
    "topic": "Bank",
    "title": "Abgelehnte Zahlung",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿En qué puedo ayudarle?",
        "de": "Guten Tag. Wie kann ich Ihnen helfen?",
        "answers": [
          {
            "text": "Necesito resolver esta situación.",
            "next": "details"
          },
          {
            "text": "Quiero revisar las opciones disponibles.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Puede explicar los detalles principales?",
        "de": "Können Sie die wichtigsten Einzelheiten erklären?",
        "answers": [
          {
            "text": "Sí, aquí tiene toda la información.",
            "next": "options"
          },
          {
            "text": "Necesito orientación antes de decidir.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Podemos ofrecer dos soluciones diferentes.",
        "de": "Wir können zwei verschiedene Lösungen anbieten.",
        "answers": [
          {
            "text": "Prefiero la solución más segura.",
            "next": "confirm"
          },
          {
            "text": "Quiero la opción más flexible.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo quiere confirmar la decisión?",
        "de": "Wie möchten Sie die Entscheidung bestätigen?",
        "answers": [
          {
            "text": "Por correo electrónico, por favor.",
            "next": "end"
          },
          {
            "text": "La confirmación verbal es suficiente.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión queda registrada.",
        "de": "Perfekt. Die Entscheidung wurde festgehalten.",
        "answers": []
      }
    }
  },
  {
    "id": "es05_ruta_sostenible",
    "topic": "Reisen",
    "title": "Nachhaltige Reise",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿En qué puedo ayudarle?",
        "de": "Guten Tag. Wie kann ich Ihnen helfen?",
        "answers": [
          {
            "text": "Necesito resolver esta situación.",
            "next": "details"
          },
          {
            "text": "Quiero revisar las opciones disponibles.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Puede explicar los detalles principales?",
        "de": "Können Sie die wichtigsten Einzelheiten erklären?",
        "answers": [
          {
            "text": "Sí, aquí tiene toda la información.",
            "next": "options"
          },
          {
            "text": "Necesito orientación antes de decidir.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Podemos ofrecer dos soluciones diferentes.",
        "de": "Wir können zwei verschiedene Lösungen anbieten.",
        "answers": [
          {
            "text": "Prefiero la solución más segura.",
            "next": "confirm"
          },
          {
            "text": "Quiero la opción más flexible.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo quiere confirmar la decisión?",
        "de": "Wie möchten Sie die Entscheidung bestätigen?",
        "answers": [
          {
            "text": "Por correo electrónico, por favor.",
            "next": "end"
          },
          {
            "text": "La confirmación verbal es suficiente.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión queda registrada.",
        "de": "Perfekt. Die Entscheidung wurde festgehalten.",
        "answers": []
      }
    }
  },
  {
    "id": "es05_plan_estudio_b1",
    "topic": "Bildung",
    "title": "Spanisch-Lernplan",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿En qué puedo ayudarle?",
        "de": "Guten Tag. Wie kann ich Ihnen helfen?",
        "answers": [
          {
            "text": "Necesito resolver esta situación.",
            "next": "details"
          },
          {
            "text": "Quiero revisar las opciones disponibles.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Puede explicar los detalles principales?",
        "de": "Können Sie die wichtigsten Einzelheiten erklären?",
        "answers": [
          {
            "text": "Sí, aquí tiene toda la información.",
            "next": "options"
          },
          {
            "text": "Necesito orientación antes de decidir.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Podemos ofrecer dos soluciones diferentes.",
        "de": "Wir können zwei verschiedene Lösungen anbieten.",
        "answers": [
          {
            "text": "Prefiero la solución más segura.",
            "next": "confirm"
          },
          {
            "text": "Quiero la opción más flexible.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Cómo quiere confirmar la decisión?",
        "de": "Wie möchten Sie die Entscheidung bestätigen?",
        "answers": [
          {
            "text": "Por correo electrónico, por favor.",
            "next": "end"
          },
          {
            "text": "La confirmación verbal es suficiente.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. La decisión queda registrada.",
        "de": "Perfekt. Die Entscheidung wurde festgehalten.",
        "answers": []
      }
    }
  }
];
ES_BRANCHING_SCENARIOS_151.push(...ES_BRANCHING_SCENARIOS_05);
