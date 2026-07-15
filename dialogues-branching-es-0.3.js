const ES_BRANCHING_SCENARIOS_03 = [
  {
    "id": "es03_planificar_viaje",
    "topic": "Reisen",
    "title": "Reise planen",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿En qué puedo ayudarle?",
        "de": "Guten Tag. Wie kann ich Ihnen helfen?",
        "answers": [
          {
            "text": "Necesito ayuda con esta situación.",
            "next": "details"
          },
          {
            "text": "Quiero hacer una consulta.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Puede explicar el problema con más detalle?",
        "de": "Können Sie das Problem genauer erklären?",
        "answers": [
          {
            "text": "Sí, el problema empezó hoy.",
            "next": "options"
          },
          {
            "text": "Claro, le doy todos los detalles.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Tenemos dos soluciones posibles. ¿Cuál prefiere?",
        "de": "Wir haben zwei mögliche Lösungen. Welche bevorzugen Sie?",
        "answers": [
          {
            "text": "Prefiero la solución más rápida.",
            "next": "confirm"
          },
          {
            "text": "Quiero comparar las dos opciones.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Quiere una confirmación por escrito?",
        "de": "Möchten Sie eine schriftliche Bestätigung?",
        "answers": [
          {
            "text": "Sí, por correo electrónico.",
            "next": "end"
          },
          {
            "text": "No, una confirmación verbal es suficiente.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. Todo queda organizado.",
        "de": "Perfekt. Alles ist organisiert.",
        "answers": []
      }
    }
  },
  {
    "id": "es03_seguro_viaje",
    "topic": "Reisen",
    "title": "Reiseversicherung",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿En qué puedo ayudarle?",
        "de": "Guten Tag. Wie kann ich Ihnen helfen?",
        "answers": [
          {
            "text": "Necesito ayuda con esta situación.",
            "next": "details"
          },
          {
            "text": "Quiero hacer una consulta.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Puede explicar el problema con más detalle?",
        "de": "Können Sie das Problem genauer erklären?",
        "answers": [
          {
            "text": "Sí, el problema empezó hoy.",
            "next": "options"
          },
          {
            "text": "Claro, le doy todos los detalles.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Tenemos dos soluciones posibles. ¿Cuál prefiere?",
        "de": "Wir haben zwei mögliche Lösungen. Welche bevorzugen Sie?",
        "answers": [
          {
            "text": "Prefiero la solución más rápida.",
            "next": "confirm"
          },
          {
            "text": "Quiero comparar las dos opciones.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Quiere una confirmación por escrito?",
        "de": "Möchten Sie eine schriftliche Bestätigung?",
        "answers": [
          {
            "text": "Sí, por correo electrónico.",
            "next": "end"
          },
          {
            "text": "No, una confirmación verbal es suficiente.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. Todo queda organizado.",
        "de": "Perfekt. Alles ist organisiert.",
        "answers": []
      }
    }
  },
  {
    "id": "es03_restaurante_alergia",
    "topic": "Restaurant",
    "title": "Allergie im Restaurant",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿En qué puedo ayudarle?",
        "de": "Guten Tag. Wie kann ich Ihnen helfen?",
        "answers": [
          {
            "text": "Necesito ayuda con esta situación.",
            "next": "details"
          },
          {
            "text": "Quiero hacer una consulta.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Puede explicar el problema con más detalle?",
        "de": "Können Sie das Problem genauer erklären?",
        "answers": [
          {
            "text": "Sí, el problema empezó hoy.",
            "next": "options"
          },
          {
            "text": "Claro, le doy todos los detalles.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Tenemos dos soluciones posibles. ¿Cuál prefiere?",
        "de": "Wir haben zwei mögliche Lösungen. Welche bevorzugen Sie?",
        "answers": [
          {
            "text": "Prefiero la solución más rápida.",
            "next": "confirm"
          },
          {
            "text": "Quiero comparar las dos opciones.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Quiere una confirmación por escrito?",
        "de": "Möchten Sie eine schriftliche Bestätigung?",
        "answers": [
          {
            "text": "Sí, por correo electrónico.",
            "next": "end"
          },
          {
            "text": "No, una confirmación verbal es suficiente.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. Todo queda organizado.",
        "de": "Perfekt. Alles ist organisiert.",
        "answers": []
      }
    }
  },
  {
    "id": "es03_restaurante_grupo",
    "topic": "Restaurant",
    "title": "Gruppenreservierung",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿En qué puedo ayudarle?",
        "de": "Guten Tag. Wie kann ich Ihnen helfen?",
        "answers": [
          {
            "text": "Necesito ayuda con esta situación.",
            "next": "details"
          },
          {
            "text": "Quiero hacer una consulta.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Puede explicar el problema con más detalle?",
        "de": "Können Sie das Problem genauer erklären?",
        "answers": [
          {
            "text": "Sí, el problema empezó hoy.",
            "next": "options"
          },
          {
            "text": "Claro, le doy todos los detalles.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Tenemos dos soluciones posibles. ¿Cuál prefiere?",
        "de": "Wir haben zwei mögliche Lösungen. Welche bevorzugen Sie?",
        "answers": [
          {
            "text": "Prefiero la solución más rápida.",
            "next": "confirm"
          },
          {
            "text": "Quiero comparar las dos opciones.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Quiere una confirmación por escrito?",
        "de": "Möchten Sie eine schriftliche Bestätigung?",
        "answers": [
          {
            "text": "Sí, por correo electrónico.",
            "next": "end"
          },
          {
            "text": "No, una confirmación verbal es suficiente.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. Todo queda organizado.",
        "de": "Perfekt. Alles ist organisiert.",
        "answers": []
      }
    }
  },
  {
    "id": "es03_hotel_cambio",
    "topic": "Hotel",
    "title": "Zimmer wechseln",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿En qué puedo ayudarle?",
        "de": "Guten Tag. Wie kann ich Ihnen helfen?",
        "answers": [
          {
            "text": "Necesito ayuda con esta situación.",
            "next": "details"
          },
          {
            "text": "Quiero hacer una consulta.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Puede explicar el problema con más detalle?",
        "de": "Können Sie das Problem genauer erklären?",
        "answers": [
          {
            "text": "Sí, el problema empezó hoy.",
            "next": "options"
          },
          {
            "text": "Claro, le doy todos los detalles.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Tenemos dos soluciones posibles. ¿Cuál prefiere?",
        "de": "Wir haben zwei mögliche Lösungen. Welche bevorzugen Sie?",
        "answers": [
          {
            "text": "Prefiero la solución más rápida.",
            "next": "confirm"
          },
          {
            "text": "Quiero comparar las dos opciones.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Quiere una confirmación por escrito?",
        "de": "Möchten Sie eine schriftliche Bestätigung?",
        "answers": [
          {
            "text": "Sí, por correo electrónico.",
            "next": "end"
          },
          {
            "text": "No, una confirmación verbal es suficiente.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. Todo queda organizado.",
        "de": "Perfekt. Alles ist organisiert.",
        "answers": []
      }
    }
  },
  {
    "id": "es03_hotel_compensacion",
    "topic": "Hotel",
    "title": "Hotelentschädigung",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿En qué puedo ayudarle?",
        "de": "Guten Tag. Wie kann ich Ihnen helfen?",
        "answers": [
          {
            "text": "Necesito ayuda con esta situación.",
            "next": "details"
          },
          {
            "text": "Quiero hacer una consulta.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Puede explicar el problema con más detalle?",
        "de": "Können Sie das Problem genauer erklären?",
        "answers": [
          {
            "text": "Sí, el problema empezó hoy.",
            "next": "options"
          },
          {
            "text": "Claro, le doy todos los detalles.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Tenemos dos soluciones posibles. ¿Cuál prefiere?",
        "de": "Wir haben zwei mögliche Lösungen. Welche bevorzugen Sie?",
        "answers": [
          {
            "text": "Prefiero la solución más rápida.",
            "next": "confirm"
          },
          {
            "text": "Quiero comparar las dos opciones.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Quiere una confirmación por escrito?",
        "de": "Möchten Sie eine schriftliche Bestätigung?",
        "answers": [
          {
            "text": "Sí, por correo electrónico.",
            "next": "end"
          },
          {
            "text": "No, una confirmación verbal es suficiente.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. Todo queda organizado.",
        "de": "Perfekt. Alles ist organisiert.",
        "answers": []
      }
    }
  },
  {
    "id": "es03_proyecto_riesgo",
    "topic": "Beruf",
    "title": "Projektrisiko",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿En qué puedo ayudarle?",
        "de": "Guten Tag. Wie kann ich Ihnen helfen?",
        "answers": [
          {
            "text": "Necesito ayuda con esta situación.",
            "next": "details"
          },
          {
            "text": "Quiero hacer una consulta.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Puede explicar el problema con más detalle?",
        "de": "Können Sie das Problem genauer erklären?",
        "answers": [
          {
            "text": "Sí, el problema empezó hoy.",
            "next": "options"
          },
          {
            "text": "Claro, le doy todos los detalles.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Tenemos dos soluciones posibles. ¿Cuál prefiere?",
        "de": "Wir haben zwei mögliche Lösungen. Welche bevorzugen Sie?",
        "answers": [
          {
            "text": "Prefiero la solución más rápida.",
            "next": "confirm"
          },
          {
            "text": "Quiero comparar las dos opciones.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Quiere una confirmación por escrito?",
        "de": "Möchten Sie eine schriftliche Bestätigung?",
        "answers": [
          {
            "text": "Sí, por correo electrónico.",
            "next": "end"
          },
          {
            "text": "No, una confirmación verbal es suficiente.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. Todo queda organizado.",
        "de": "Perfekt. Alles ist organisiert.",
        "answers": []
      }
    }
  },
  {
    "id": "es03_proyecto_plazo",
    "topic": "Beruf",
    "title": "Projektfrist",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿En qué puedo ayudarle?",
        "de": "Guten Tag. Wie kann ich Ihnen helfen?",
        "answers": [
          {
            "text": "Necesito ayuda con esta situación.",
            "next": "details"
          },
          {
            "text": "Quiero hacer una consulta.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Puede explicar el problema con más detalle?",
        "de": "Können Sie das Problem genauer erklären?",
        "answers": [
          {
            "text": "Sí, el problema empezó hoy.",
            "next": "options"
          },
          {
            "text": "Claro, le doy todos los detalles.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Tenemos dos soluciones posibles. ¿Cuál prefiere?",
        "de": "Wir haben zwei mögliche Lösungen. Welche bevorzugen Sie?",
        "answers": [
          {
            "text": "Prefiero la solución más rápida.",
            "next": "confirm"
          },
          {
            "text": "Quiero comparar las dos opciones.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Quiere una confirmación por escrito?",
        "de": "Möchten Sie eine schriftliche Bestätigung?",
        "answers": [
          {
            "text": "Sí, por correo electrónico.",
            "next": "end"
          },
          {
            "text": "No, una confirmación verbal es suficiente.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. Todo queda organizado.",
        "de": "Perfekt. Alles ist organisiert.",
        "answers": []
      }
    }
  },
  {
    "id": "es03_medico_especialista",
    "topic": "Gesundheit",
    "title": "Facharzttermin",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿En qué puedo ayudarle?",
        "de": "Guten Tag. Wie kann ich Ihnen helfen?",
        "answers": [
          {
            "text": "Necesito ayuda con esta situación.",
            "next": "details"
          },
          {
            "text": "Quiero hacer una consulta.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Puede explicar el problema con más detalle?",
        "de": "Können Sie das Problem genauer erklären?",
        "answers": [
          {
            "text": "Sí, el problema empezó hoy.",
            "next": "options"
          },
          {
            "text": "Claro, le doy todos los detalles.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Tenemos dos soluciones posibles. ¿Cuál prefiere?",
        "de": "Wir haben zwei mögliche Lösungen. Welche bevorzugen Sie?",
        "answers": [
          {
            "text": "Prefiero la solución más rápida.",
            "next": "confirm"
          },
          {
            "text": "Quiero comparar las dos opciones.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Quiere una confirmación por escrito?",
        "de": "Möchten Sie eine schriftliche Bestätigung?",
        "answers": [
          {
            "text": "Sí, por correo electrónico.",
            "next": "end"
          },
          {
            "text": "No, una confirmación verbal es suficiente.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. Todo queda organizado.",
        "de": "Perfekt. Alles ist organisiert.",
        "answers": []
      }
    }
  },
  {
    "id": "es03_medico_tratamiento",
    "topic": "Gesundheit",
    "title": "Behandlung besprechen",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿En qué puedo ayudarle?",
        "de": "Guten Tag. Wie kann ich Ihnen helfen?",
        "answers": [
          {
            "text": "Necesito ayuda con esta situación.",
            "next": "details"
          },
          {
            "text": "Quiero hacer una consulta.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Puede explicar el problema con más detalle?",
        "de": "Können Sie das Problem genauer erklären?",
        "answers": [
          {
            "text": "Sí, el problema empezó hoy.",
            "next": "options"
          },
          {
            "text": "Claro, le doy todos los detalles.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Tenemos dos soluciones posibles. ¿Cuál prefiere?",
        "de": "Wir haben zwei mögliche Lösungen. Welche bevorzugen Sie?",
        "answers": [
          {
            "text": "Prefiero la solución más rápida.",
            "next": "confirm"
          },
          {
            "text": "Quiero comparar las dos opciones.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Quiere una confirmación por escrito?",
        "de": "Möchten Sie eine schriftliche Bestätigung?",
        "answers": [
          {
            "text": "Sí, por correo electrónico.",
            "next": "end"
          },
          {
            "text": "No, una confirmación verbal es suficiente.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. Todo queda organizado.",
        "de": "Perfekt. Alles ist organisiert.",
        "answers": []
      }
    }
  },
  {
    "id": "es03_conflicto_trabajo",
    "topic": "Beruf",
    "title": "Arbeitskonflikt",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿En qué puedo ayudarle?",
        "de": "Guten Tag. Wie kann ich Ihnen helfen?",
        "answers": [
          {
            "text": "Necesito ayuda con esta situación.",
            "next": "details"
          },
          {
            "text": "Quiero hacer una consulta.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Puede explicar el problema con más detalle?",
        "de": "Können Sie das Problem genauer erklären?",
        "answers": [
          {
            "text": "Sí, el problema empezó hoy.",
            "next": "options"
          },
          {
            "text": "Claro, le doy todos los detalles.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Tenemos dos soluciones posibles. ¿Cuál prefiere?",
        "de": "Wir haben zwei mögliche Lösungen. Welche bevorzugen Sie?",
        "answers": [
          {
            "text": "Prefiero la solución más rápida.",
            "next": "confirm"
          },
          {
            "text": "Quiero comparar las dos opciones.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Quiere una confirmación por escrito?",
        "de": "Möchten Sie eine schriftliche Bestätigung?",
        "answers": [
          {
            "text": "Sí, por correo electrónico.",
            "next": "end"
          },
          {
            "text": "No, una confirmación verbal es suficiente.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. Todo queda organizado.",
        "de": "Perfekt. Alles ist organisiert.",
        "answers": []
      }
    }
  },
  {
    "id": "es03_queja_cliente",
    "topic": "Kundenservice",
    "title": "Kundenbeschwerde",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿En qué puedo ayudarle?",
        "de": "Guten Tag. Wie kann ich Ihnen helfen?",
        "answers": [
          {
            "text": "Necesito ayuda con esta situación.",
            "next": "details"
          },
          {
            "text": "Quiero hacer una consulta.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Puede explicar el problema con más detalle?",
        "de": "Können Sie das Problem genauer erklären?",
        "answers": [
          {
            "text": "Sí, el problema empezó hoy.",
            "next": "options"
          },
          {
            "text": "Claro, le doy todos los detalles.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Tenemos dos soluciones posibles. ¿Cuál prefiere?",
        "de": "Wir haben zwei mögliche Lösungen. Welche bevorzugen Sie?",
        "answers": [
          {
            "text": "Prefiero la solución más rápida.",
            "next": "confirm"
          },
          {
            "text": "Quiero comparar las dos opciones.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Quiere una confirmación por escrito?",
        "de": "Möchten Sie eine schriftliche Bestätigung?",
        "answers": [
          {
            "text": "Sí, por correo electrónico.",
            "next": "end"
          },
          {
            "text": "No, una confirmación verbal es suficiente.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. Todo queda organizado.",
        "de": "Perfekt. Alles ist organisiert.",
        "answers": []
      }
    }
  },
  {
    "id": "es03_actividad_fin_semana",
    "topic": "Freizeit",
    "title": "Wochenendaktivität",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿En qué puedo ayudarle?",
        "de": "Guten Tag. Wie kann ich Ihnen helfen?",
        "answers": [
          {
            "text": "Necesito ayuda con esta situación.",
            "next": "details"
          },
          {
            "text": "Quiero hacer una consulta.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Puede explicar el problema con más detalle?",
        "de": "Können Sie das Problem genauer erklären?",
        "answers": [
          {
            "text": "Sí, el problema empezó hoy.",
            "next": "options"
          },
          {
            "text": "Claro, le doy todos los detalles.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Tenemos dos soluciones posibles. ¿Cuál prefiere?",
        "de": "Wir haben zwei mögliche Lösungen. Welche bevorzugen Sie?",
        "answers": [
          {
            "text": "Prefiero la solución más rápida.",
            "next": "confirm"
          },
          {
            "text": "Quiero comparar las dos opciones.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Quiere una confirmación por escrito?",
        "de": "Möchten Sie eine schriftliche Bestätigung?",
        "answers": [
          {
            "text": "Sí, por correo electrónico.",
            "next": "end"
          },
          {
            "text": "No, una confirmación verbal es suficiente.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. Todo queda organizado.",
        "de": "Perfekt. Alles ist organisiert.",
        "answers": []
      }
    }
  },
  {
    "id": "es03_museo_visita",
    "topic": "Freizeit",
    "title": "Museumsbesuch",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿En qué puedo ayudarle?",
        "de": "Guten Tag. Wie kann ich Ihnen helfen?",
        "answers": [
          {
            "text": "Necesito ayuda con esta situación.",
            "next": "details"
          },
          {
            "text": "Quiero hacer una consulta.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Puede explicar el problema con más detalle?",
        "de": "Können Sie das Problem genauer erklären?",
        "answers": [
          {
            "text": "Sí, el problema empezó hoy.",
            "next": "options"
          },
          {
            "text": "Claro, le doy todos los detalles.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Tenemos dos soluciones posibles. ¿Cuál prefiere?",
        "de": "Wir haben zwei mögliche Lösungen. Welche bevorzugen Sie?",
        "answers": [
          {
            "text": "Prefiero la solución más rápida.",
            "next": "confirm"
          },
          {
            "text": "Quiero comparar las dos opciones.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Quiere una confirmación por escrito?",
        "de": "Möchten Sie eine schriftliche Bestätigung?",
        "answers": [
          {
            "text": "Sí, por correo electrónico.",
            "next": "end"
          },
          {
            "text": "No, una confirmación verbal es suficiente.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. Todo queda organizado.",
        "de": "Perfekt. Alles ist organisiert.",
        "answers": []
      }
    }
  },
  {
    "id": "es03_devolucion_online",
    "topic": "Einkaufen",
    "title": "Online-Rückgabe",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿En qué puedo ayudarle?",
        "de": "Guten Tag. Wie kann ich Ihnen helfen?",
        "answers": [
          {
            "text": "Necesito ayuda con esta situación.",
            "next": "details"
          },
          {
            "text": "Quiero hacer una consulta.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Puede explicar el problema con más detalle?",
        "de": "Können Sie das Problem genauer erklären?",
        "answers": [
          {
            "text": "Sí, el problema empezó hoy.",
            "next": "options"
          },
          {
            "text": "Claro, le doy todos los detalles.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Tenemos dos soluciones posibles. ¿Cuál prefiere?",
        "de": "Wir haben zwei mögliche Lösungen. Welche bevorzugen Sie?",
        "answers": [
          {
            "text": "Prefiero la solución más rápida.",
            "next": "confirm"
          },
          {
            "text": "Quiero comparar las dos opciones.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Quiere una confirmación por escrito?",
        "de": "Möchten Sie eine schriftliche Bestätigung?",
        "answers": [
          {
            "text": "Sí, por correo electrónico.",
            "next": "end"
          },
          {
            "text": "No, una confirmación verbal es suficiente.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. Todo queda organizado.",
        "de": "Perfekt. Alles ist organisiert.",
        "answers": []
      }
    }
  },
  {
    "id": "es03_garantia_producto",
    "topic": "Einkaufen",
    "title": "Garantie nutzen",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿En qué puedo ayudarle?",
        "de": "Guten Tag. Wie kann ich Ihnen helfen?",
        "answers": [
          {
            "text": "Necesito ayuda con esta situación.",
            "next": "details"
          },
          {
            "text": "Quiero hacer una consulta.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Puede explicar el problema con más detalle?",
        "de": "Können Sie das Problem genauer erklären?",
        "answers": [
          {
            "text": "Sí, el problema empezó hoy.",
            "next": "options"
          },
          {
            "text": "Claro, le doy todos los detalles.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Tenemos dos soluciones posibles. ¿Cuál prefiere?",
        "de": "Wir haben zwei mögliche Lösungen. Welche bevorzugen Sie?",
        "answers": [
          {
            "text": "Prefiero la solución más rápida.",
            "next": "confirm"
          },
          {
            "text": "Quiero comparar las dos opciones.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Quiere una confirmación por escrito?",
        "de": "Möchten Sie eine schriftliche Bestätigung?",
        "answers": [
          {
            "text": "Sí, por correo electrónico.",
            "next": "end"
          },
          {
            "text": "No, una confirmación verbal es suficiente.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. Todo queda organizado.",
        "de": "Perfekt. Alles ist organisiert.",
        "answers": []
      }
    }
  },
  {
    "id": "es03_cuenta_seguridad",
    "topic": "Digital",
    "title": "Konto absichern",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿En qué puedo ayudarle?",
        "de": "Guten Tag. Wie kann ich Ihnen helfen?",
        "answers": [
          {
            "text": "Necesito ayuda con esta situación.",
            "next": "details"
          },
          {
            "text": "Quiero hacer una consulta.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Puede explicar el problema con más detalle?",
        "de": "Können Sie das Problem genauer erklären?",
        "answers": [
          {
            "text": "Sí, el problema empezó hoy.",
            "next": "options"
          },
          {
            "text": "Claro, le doy todos los detalles.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Tenemos dos soluciones posibles. ¿Cuál prefiere?",
        "de": "Wir haben zwei mögliche Lösungen. Welche bevorzugen Sie?",
        "answers": [
          {
            "text": "Prefiero la solución más rápida.",
            "next": "confirm"
          },
          {
            "text": "Quiero comparar las dos opciones.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Quiere una confirmación por escrito?",
        "de": "Möchten Sie eine schriftliche Bestätigung?",
        "answers": [
          {
            "text": "Sí, por correo electrónico.",
            "next": "end"
          },
          {
            "text": "No, una confirmación verbal es suficiente.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. Todo queda organizado.",
        "de": "Perfekt. Alles ist organisiert.",
        "answers": []
      }
    }
  },
  {
    "id": "es03_suscripcion_cancelar",
    "topic": "Digital",
    "title": "Abo kündigen",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿En qué puedo ayudarle?",
        "de": "Guten Tag. Wie kann ich Ihnen helfen?",
        "answers": [
          {
            "text": "Necesito ayuda con esta situación.",
            "next": "details"
          },
          {
            "text": "Quiero hacer una consulta.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Puede explicar el problema con más detalle?",
        "de": "Können Sie das Problem genauer erklären?",
        "answers": [
          {
            "text": "Sí, el problema empezó hoy.",
            "next": "options"
          },
          {
            "text": "Claro, le doy todos los detalles.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Tenemos dos soluciones posibles. ¿Cuál prefiere?",
        "de": "Wir haben zwei mögliche Lösungen. Welche bevorzugen Sie?",
        "answers": [
          {
            "text": "Prefiero la solución más rápida.",
            "next": "confirm"
          },
          {
            "text": "Quiero comparar las dos opciones.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Quiere una confirmación por escrito?",
        "de": "Möchten Sie eine schriftliche Bestätigung?",
        "answers": [
          {
            "text": "Sí, por correo electrónico.",
            "next": "end"
          },
          {
            "text": "No, una confirmación verbal es suficiente.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. Todo queda organizado.",
        "de": "Perfekt. Alles ist organisiert.",
        "answers": []
      }
    }
  },
  {
    "id": "es03_plan_estudio",
    "topic": "Bildung",
    "title": "Lernplan",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿En qué puedo ayudarle?",
        "de": "Guten Tag. Wie kann ich Ihnen helfen?",
        "answers": [
          {
            "text": "Necesito ayuda con esta situación.",
            "next": "details"
          },
          {
            "text": "Quiero hacer una consulta.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Puede explicar el problema con más detalle?",
        "de": "Können Sie das Problem genauer erklären?",
        "answers": [
          {
            "text": "Sí, el problema empezó hoy.",
            "next": "options"
          },
          {
            "text": "Claro, le doy todos los detalles.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Tenemos dos soluciones posibles. ¿Cuál prefiere?",
        "de": "Wir haben zwei mögliche Lösungen. Welche bevorzugen Sie?",
        "answers": [
          {
            "text": "Prefiero la solución más rápida.",
            "next": "confirm"
          },
          {
            "text": "Quiero comparar las dos opciones.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Quiere una confirmación por escrito?",
        "de": "Möchten Sie eine schriftliche Bestätigung?",
        "answers": [
          {
            "text": "Sí, por correo electrónico.",
            "next": "end"
          },
          {
            "text": "No, una confirmación verbal es suficiente.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. Todo queda organizado.",
        "de": "Perfekt. Alles ist organisiert.",
        "answers": []
      }
    }
  },
  {
    "id": "es03_motivacion",
    "topic": "Persönliche Entwicklung",
    "title": "Motivation verbessern",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿En qué puedo ayudarle?",
        "de": "Guten Tag. Wie kann ich Ihnen helfen?",
        "answers": [
          {
            "text": "Necesito ayuda con esta situación.",
            "next": "details"
          },
          {
            "text": "Quiero hacer una consulta.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Puede explicar el problema con más detalle?",
        "de": "Können Sie das Problem genauer erklären?",
        "answers": [
          {
            "text": "Sí, el problema empezó hoy.",
            "next": "options"
          },
          {
            "text": "Claro, le doy todos los detalles.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Tenemos dos soluciones posibles. ¿Cuál prefiere?",
        "de": "Wir haben zwei mögliche Lösungen. Welche bevorzugen Sie?",
        "answers": [
          {
            "text": "Prefiero la solución más rápida.",
            "next": "confirm"
          },
          {
            "text": "Quiero comparar las dos opciones.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Quiere una confirmación por escrito?",
        "de": "Möchten Sie eine schriftliche Bestätigung?",
        "answers": [
          {
            "text": "Sí, por correo electrónico.",
            "next": "end"
          },
          {
            "text": "No, una confirmación verbal es suficiente.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. Todo queda organizado.",
        "de": "Perfekt. Alles ist organisiert.",
        "answers": []
      }
    }
  },
  {
    "id": "es03_viaje_problema",
    "topic": "Reisen",
    "title": "Reiseproblem lösen",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿En qué puedo ayudarle?",
        "de": "Guten Tag. Wie kann ich Ihnen helfen?",
        "answers": [
          {
            "text": "Necesito ayuda con esta situación.",
            "next": "details"
          },
          {
            "text": "Quiero hacer una consulta.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Puede explicar el problema con más detalle?",
        "de": "Können Sie das Problem genauer erklären?",
        "answers": [
          {
            "text": "Sí, el problema empezó hoy.",
            "next": "options"
          },
          {
            "text": "Claro, le doy todos los detalles.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Tenemos dos soluciones posibles. ¿Cuál prefiere?",
        "de": "Wir haben zwei mögliche Lösungen. Welche bevorzugen Sie?",
        "answers": [
          {
            "text": "Prefiero la solución más rápida.",
            "next": "confirm"
          },
          {
            "text": "Quiero comparar las dos opciones.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Quiere una confirmación por escrito?",
        "de": "Möchten Sie eine schriftliche Bestätigung?",
        "answers": [
          {
            "text": "Sí, por correo electrónico.",
            "next": "end"
          },
          {
            "text": "No, una confirmación verbal es suficiente.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. Todo queda organizado.",
        "de": "Perfekt. Alles ist organisiert.",
        "answers": []
      }
    }
  },
  {
    "id": "es03_restaurante_factura",
    "topic": "Restaurant",
    "title": "Rechnung korrigieren",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿En qué puedo ayudarle?",
        "de": "Guten Tag. Wie kann ich Ihnen helfen?",
        "answers": [
          {
            "text": "Necesito ayuda con esta situación.",
            "next": "details"
          },
          {
            "text": "Quiero hacer una consulta.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Puede explicar el problema con más detalle?",
        "de": "Können Sie das Problem genauer erklären?",
        "answers": [
          {
            "text": "Sí, el problema empezó hoy.",
            "next": "options"
          },
          {
            "text": "Claro, le doy todos los detalles.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Tenemos dos soluciones posibles. ¿Cuál prefiere?",
        "de": "Wir haben zwei mögliche Lösungen. Welche bevorzugen Sie?",
        "answers": [
          {
            "text": "Prefiero la solución más rápida.",
            "next": "confirm"
          },
          {
            "text": "Quiero comparar las dos opciones.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Quiere una confirmación por escrito?",
        "de": "Möchten Sie eine schriftliche Bestätigung?",
        "answers": [
          {
            "text": "Sí, por correo electrónico.",
            "next": "end"
          },
          {
            "text": "No, una confirmación verbal es suficiente.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. Todo queda organizado.",
        "de": "Perfekt. Alles ist organisiert.",
        "answers": []
      }
    }
  },
  {
    "id": "es03_hotel_reunion",
    "topic": "Hotel",
    "title": "Tagungsraum buchen",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿En qué puedo ayudarle?",
        "de": "Guten Tag. Wie kann ich Ihnen helfen?",
        "answers": [
          {
            "text": "Necesito ayuda con esta situación.",
            "next": "details"
          },
          {
            "text": "Quiero hacer una consulta.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Puede explicar el problema con más detalle?",
        "de": "Können Sie das Problem genauer erklären?",
        "answers": [
          {
            "text": "Sí, el problema empezó hoy.",
            "next": "options"
          },
          {
            "text": "Claro, le doy todos los detalles.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Tenemos dos soluciones posibles. ¿Cuál prefiere?",
        "de": "Wir haben zwei mögliche Lösungen. Welche bevorzugen Sie?",
        "answers": [
          {
            "text": "Prefiero la solución más rápida.",
            "next": "confirm"
          },
          {
            "text": "Quiero comparar las dos opciones.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Quiere una confirmación por escrito?",
        "de": "Möchten Sie eine schriftliche Bestätigung?",
        "answers": [
          {
            "text": "Sí, por correo electrónico.",
            "next": "end"
          },
          {
            "text": "No, una confirmación verbal es suficiente.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. Todo queda organizado.",
        "de": "Perfekt. Alles ist organisiert.",
        "answers": []
      }
    }
  },
  {
    "id": "es03_trabajo_proveedor",
    "topic": "Beruf",
    "title": "Lieferantenproblem",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿En qué puedo ayudarle?",
        "de": "Guten Tag. Wie kann ich Ihnen helfen?",
        "answers": [
          {
            "text": "Necesito ayuda con esta situación.",
            "next": "details"
          },
          {
            "text": "Quiero hacer una consulta.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Puede explicar el problema con más detalle?",
        "de": "Können Sie das Problem genauer erklären?",
        "answers": [
          {
            "text": "Sí, el problema empezó hoy.",
            "next": "options"
          },
          {
            "text": "Claro, le doy todos los detalles.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Tenemos dos soluciones posibles. ¿Cuál prefiere?",
        "de": "Wir haben zwei mögliche Lösungen. Welche bevorzugen Sie?",
        "answers": [
          {
            "text": "Prefiero la solución más rápida.",
            "next": "confirm"
          },
          {
            "text": "Quiero comparar las dos opciones.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Quiere una confirmación por escrito?",
        "de": "Möchten Sie eine schriftliche Bestätigung?",
        "answers": [
          {
            "text": "Sí, por correo electrónico.",
            "next": "end"
          },
          {
            "text": "No, una confirmación verbal es suficiente.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. Todo queda organizado.",
        "de": "Perfekt. Alles ist organisiert.",
        "answers": []
      }
    }
  },
  {
    "id": "es03_salud_certificado",
    "topic": "Gesundheit",
    "title": "Attest anfragen",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿En qué puedo ayudarle?",
        "de": "Guten Tag. Wie kann ich Ihnen helfen?",
        "answers": [
          {
            "text": "Necesito ayuda con esta situación.",
            "next": "details"
          },
          {
            "text": "Quiero hacer una consulta.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Puede explicar el problema con más detalle?",
        "de": "Können Sie das Problem genauer erklären?",
        "answers": [
          {
            "text": "Sí, el problema empezó hoy.",
            "next": "options"
          },
          {
            "text": "Claro, le doy todos los detalles.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Tenemos dos soluciones posibles. ¿Cuál prefiere?",
        "de": "Wir haben zwei mögliche Lösungen. Welche bevorzugen Sie?",
        "answers": [
          {
            "text": "Prefiero la solución más rápida.",
            "next": "confirm"
          },
          {
            "text": "Quiero comparar las dos opciones.",
            "next": "confirm"
          }
        ]
      },
      "confirm": {
        "bot": "¿Quiere una confirmación por escrito?",
        "de": "Möchten Sie eine schriftliche Bestätigung?",
        "answers": [
          {
            "text": "Sí, por correo electrónico.",
            "next": "end"
          },
          {
            "text": "No, una confirmación verbal es suficiente.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. Todo queda organizado.",
        "de": "Perfekt. Alles ist organisiert.",
        "answers": []
      }
    }
  }
];
ES_BRANCHING_SCENARIOS_151.push(...ES_BRANCHING_SCENARIOS_03);
