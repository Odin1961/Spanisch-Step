const ES_BRANCHING_SCENARIOS_04 = [
  {
    "id": "es04_viaje_negocios",
    "topic": "Geschäftsreise",
    "title": "Geschäftsreise organisieren",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿En qué puedo ayudarle?",
        "de": "Guten Tag. Wie kann ich Ihnen helfen?",
        "answers": [
          {
            "text": "Necesito organizar esta situación.",
            "next": "details"
          },
          {
            "text": "Tengo un problema que resolver.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Puede darme más detalles?",
        "de": "Können Sie mehr Einzelheiten nennen?",
        "answers": [
          {
            "text": "Sí, aquí están los detalles.",
            "next": "options"
          },
          {
            "text": "Necesito que me explique las opciones.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Tenemos dos opciones posibles.",
        "de": "Wir haben zwei mögliche Optionen.",
        "answers": [
          {
            "text": "Prefiero la opción más rápida.",
            "next": "confirm"
          },
          {
            "text": "Quiero la opción más económica.",
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
            "text": "No, la confirmación verbal es suficiente.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. Todo está organizado.",
        "de": "Perfekt. Alles ist organisiert.",
        "answers": []
      }
    }
  },
  {
    "id": "es04_gastos_viaje",
    "topic": "Geschäftsreise",
    "title": "Reisekosten klären",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿En qué puedo ayudarle?",
        "de": "Guten Tag. Wie kann ich Ihnen helfen?",
        "answers": [
          {
            "text": "Necesito organizar esta situación.",
            "next": "details"
          },
          {
            "text": "Tengo un problema que resolver.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Puede darme más detalles?",
        "de": "Können Sie mehr Einzelheiten nennen?",
        "answers": [
          {
            "text": "Sí, aquí están los detalles.",
            "next": "options"
          },
          {
            "text": "Necesito que me explique las opciones.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Tenemos dos opciones posibles.",
        "de": "Wir haben zwei mögliche Optionen.",
        "answers": [
          {
            "text": "Prefiero la opción más rápida.",
            "next": "confirm"
          },
          {
            "text": "Quiero la opción más económica.",
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
            "text": "No, la confirmación verbal es suficiente.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. Todo está organizado.",
        "de": "Perfekt. Alles ist organisiert.",
        "answers": []
      }
    }
  },
  {
    "id": "es04_cliente_ticket",
    "topic": "Kundenservice",
    "title": "Support-Ticket lösen",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿En qué puedo ayudarle?",
        "de": "Guten Tag. Wie kann ich Ihnen helfen?",
        "answers": [
          {
            "text": "Necesito organizar esta situación.",
            "next": "details"
          },
          {
            "text": "Tengo un problema que resolver.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Puede darme más detalles?",
        "de": "Können Sie mehr Einzelheiten nennen?",
        "answers": [
          {
            "text": "Sí, aquí están los detalles.",
            "next": "options"
          },
          {
            "text": "Necesito que me explique las opciones.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Tenemos dos opciones posibles.",
        "de": "Wir haben zwei mögliche Optionen.",
        "answers": [
          {
            "text": "Prefiero la opción más rápida.",
            "next": "confirm"
          },
          {
            "text": "Quiero la opción más económica.",
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
            "text": "No, la confirmación verbal es suficiente.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. Todo está organizado.",
        "de": "Perfekt. Alles ist organisiert.",
        "answers": []
      }
    }
  },
  {
    "id": "es04_cliente_reemplazo",
    "topic": "Kundenservice",
    "title": "Ersatz organisieren",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿En qué puedo ayudarle?",
        "de": "Guten Tag. Wie kann ich Ihnen helfen?",
        "answers": [
          {
            "text": "Necesito organizar esta situación.",
            "next": "details"
          },
          {
            "text": "Tengo un problema que resolver.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Puede darme más detalles?",
        "de": "Können Sie mehr Einzelheiten nennen?",
        "answers": [
          {
            "text": "Sí, aquí están los detalles.",
            "next": "options"
          },
          {
            "text": "Necesito que me explique las opciones.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Tenemos dos opciones posibles.",
        "de": "Wir haben zwei mögliche Optionen.",
        "answers": [
          {
            "text": "Prefiero la opción más rápida.",
            "next": "confirm"
          },
          {
            "text": "Quiero la opción más económica.",
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
            "text": "No, la confirmación verbal es suficiente.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. Todo está organizado.",
        "de": "Perfekt. Alles ist organisiert.",
        "answers": []
      }
    }
  },
  {
    "id": "es04_direcciones_ciudad",
    "topic": "Orientierung",
    "title": "Weg in der Stadt finden",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿En qué puedo ayudarle?",
        "de": "Guten Tag. Wie kann ich Ihnen helfen?",
        "answers": [
          {
            "text": "Necesito organizar esta situación.",
            "next": "details"
          },
          {
            "text": "Tengo un problema que resolver.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Puede darme más detalles?",
        "de": "Können Sie mehr Einzelheiten nennen?",
        "answers": [
          {
            "text": "Sí, aquí están los detalles.",
            "next": "options"
          },
          {
            "text": "Necesito que me explique las opciones.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Tenemos dos opciones posibles.",
        "de": "Wir haben zwei mögliche Optionen.",
        "answers": [
          {
            "text": "Prefiero la opción más rápida.",
            "next": "confirm"
          },
          {
            "text": "Quiero la opción más económica.",
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
            "text": "No, la confirmación verbal es suficiente.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. Todo está organizado.",
        "de": "Perfekt. Alles ist organisiert.",
        "answers": []
      }
    }
  },
  {
    "id": "es04_desvio_ruta",
    "topic": "Orientierung",
    "title": "Umleitung erklären",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿En qué puedo ayudarle?",
        "de": "Guten Tag. Wie kann ich Ihnen helfen?",
        "answers": [
          {
            "text": "Necesito organizar esta situación.",
            "next": "details"
          },
          {
            "text": "Tengo un problema que resolver.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Puede darme más detalles?",
        "de": "Können Sie mehr Einzelheiten nennen?",
        "answers": [
          {
            "text": "Sí, aquí están los detalles.",
            "next": "options"
          },
          {
            "text": "Necesito que me explique las opciones.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Tenemos dos opciones posibles.",
        "de": "Wir haben zwei mögliche Optionen.",
        "answers": [
          {
            "text": "Prefiero la opción más rápida.",
            "next": "confirm"
          },
          {
            "text": "Quiero la opción más económica.",
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
            "text": "No, la confirmación verbal es suficiente.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. Todo está organizado.",
        "de": "Perfekt. Alles ist organisiert.",
        "answers": []
      }
    }
  },
  {
    "id": "es04_solicitud_empleo",
    "topic": "Arbeitssuche",
    "title": "Bewerbung besprechen",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿En qué puedo ayudarle?",
        "de": "Guten Tag. Wie kann ich Ihnen helfen?",
        "answers": [
          {
            "text": "Necesito organizar esta situación.",
            "next": "details"
          },
          {
            "text": "Tengo un problema que resolver.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Puede darme más detalles?",
        "de": "Können Sie mehr Einzelheiten nennen?",
        "answers": [
          {
            "text": "Sí, aquí están los detalles.",
            "next": "options"
          },
          {
            "text": "Necesito que me explique las opciones.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Tenemos dos opciones posibles.",
        "de": "Wir haben zwei mögliche Optionen.",
        "answers": [
          {
            "text": "Prefiero la opción más rápida.",
            "next": "confirm"
          },
          {
            "text": "Quiero la opción más económica.",
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
            "text": "No, la confirmación verbal es suficiente.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. Todo está organizado.",
        "de": "Perfekt. Alles ist organisiert.",
        "answers": []
      }
    }
  },
  {
    "id": "es04_entrevista_trabajo",
    "topic": "Arbeitssuche",
    "title": "Vorstellungsgespräch",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿En qué puedo ayudarle?",
        "de": "Guten Tag. Wie kann ich Ihnen helfen?",
        "answers": [
          {
            "text": "Necesito organizar esta situación.",
            "next": "details"
          },
          {
            "text": "Tengo un problema que resolver.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Puede darme más detalles?",
        "de": "Können Sie mehr Einzelheiten nennen?",
        "answers": [
          {
            "text": "Sí, aquí están los detalles.",
            "next": "options"
          },
          {
            "text": "Necesito que me explique las opciones.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Tenemos dos opciones posibles.",
        "de": "Wir haben zwei mögliche Optionen.",
        "answers": [
          {
            "text": "Prefiero la opción más rápida.",
            "next": "confirm"
          },
          {
            "text": "Quiero la opción más económica.",
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
            "text": "No, la confirmación verbal es suficiente.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. Todo está organizado.",
        "de": "Perfekt. Alles ist organisiert.",
        "answers": []
      }
    }
  },
  {
    "id": "es04_rutina_saludable",
    "topic": "Gesundheit",
    "title": "Gesunde Routine planen",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿En qué puedo ayudarle?",
        "de": "Guten Tag. Wie kann ich Ihnen helfen?",
        "answers": [
          {
            "text": "Necesito organizar esta situación.",
            "next": "details"
          },
          {
            "text": "Tengo un problema que resolver.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Puede darme más detalles?",
        "de": "Können Sie mehr Einzelheiten nennen?",
        "answers": [
          {
            "text": "Sí, aquí están los detalles.",
            "next": "options"
          },
          {
            "text": "Necesito que me explique las opciones.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Tenemos dos opciones posibles.",
        "de": "Wir haben zwei mögliche Optionen.",
        "answers": [
          {
            "text": "Prefiero la opción más rápida.",
            "next": "confirm"
          },
          {
            "text": "Quiero la opción más económica.",
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
            "text": "No, la confirmación verbal es suficiente.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. Todo está organizado.",
        "de": "Perfekt. Alles ist organisiert.",
        "answers": []
      }
    }
  },
  {
    "id": "es04_revision_anual",
    "topic": "Gesundheit",
    "title": "Vorsorgetermin",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿En qué puedo ayudarle?",
        "de": "Guten Tag. Wie kann ich Ihnen helfen?",
        "answers": [
          {
            "text": "Necesito organizar esta situación.",
            "next": "details"
          },
          {
            "text": "Tengo un problema que resolver.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Puede darme más detalles?",
        "de": "Können Sie mehr Einzelheiten nennen?",
        "answers": [
          {
            "text": "Sí, aquí están los detalles.",
            "next": "options"
          },
          {
            "text": "Necesito que me explique las opciones.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Tenemos dos opciones posibles.",
        "de": "Wir haben zwei mögliche Optionen.",
        "answers": [
          {
            "text": "Prefiero la opción más rápida.",
            "next": "confirm"
          },
          {
            "text": "Quiero la opción más económica.",
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
            "text": "No, la confirmación verbal es suficiente.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. Todo está organizado.",
        "de": "Perfekt. Alles ist organisiert.",
        "answers": []
      }
    }
  },
  {
    "id": "es04_servicio_publico",
    "topic": "Behörden und Alltag",
    "title": "Behördendienst nutzen",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿En qué puedo ayudarle?",
        "de": "Guten Tag. Wie kann ich Ihnen helfen?",
        "answers": [
          {
            "text": "Necesito organizar esta situación.",
            "next": "details"
          },
          {
            "text": "Tengo un problema que resolver.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Puede darme más detalles?",
        "de": "Können Sie mehr Einzelheiten nennen?",
        "answers": [
          {
            "text": "Sí, aquí están los detalles.",
            "next": "options"
          },
          {
            "text": "Necesito que me explique las opciones.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Tenemos dos opciones posibles.",
        "de": "Wir haben zwei mögliche Optionen.",
        "answers": [
          {
            "text": "Prefiero la opción más rápida.",
            "next": "confirm"
          },
          {
            "text": "Quiero la opción más económica.",
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
            "text": "No, la confirmación verbal es suficiente.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. Todo está organizado.",
        "de": "Perfekt. Alles ist organisiert.",
        "answers": []
      }
    }
  },
  {
    "id": "es04_queja_municipal",
    "topic": "Behörden und Alltag",
    "title": "Beschwerde beim Amt",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿En qué puedo ayudarle?",
        "de": "Guten Tag. Wie kann ich Ihnen helfen?",
        "answers": [
          {
            "text": "Necesito organizar esta situación.",
            "next": "details"
          },
          {
            "text": "Tengo un problema que resolver.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Puede darme más detalles?",
        "de": "Können Sie mehr Einzelheiten nennen?",
        "answers": [
          {
            "text": "Sí, aquí están los detalles.",
            "next": "options"
          },
          {
            "text": "Necesito que me explique las opciones.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Tenemos dos opciones posibles.",
        "de": "Wir haben zwei mögliche Optionen.",
        "answers": [
          {
            "text": "Prefiero la opción más rápida.",
            "next": "confirm"
          },
          {
            "text": "Quiero la opción más económica.",
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
            "text": "No, la confirmación verbal es suficiente.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. Todo está organizado.",
        "de": "Perfekt. Alles ist organisiert.",
        "answers": []
      }
    }
  },
  {
    "id": "es04_matricula_curso",
    "topic": "Bildung",
    "title": "Kursanmeldung",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿En qué puedo ayudarle?",
        "de": "Guten Tag. Wie kann ich Ihnen helfen?",
        "answers": [
          {
            "text": "Necesito organizar esta situación.",
            "next": "details"
          },
          {
            "text": "Tengo un problema que resolver.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Puede darme más detalles?",
        "de": "Können Sie mehr Einzelheiten nennen?",
        "answers": [
          {
            "text": "Sí, aquí están los detalles.",
            "next": "options"
          },
          {
            "text": "Necesito que me explique las opciones.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Tenemos dos opciones posibles.",
        "de": "Wir haben zwei mögliche Optionen.",
        "answers": [
          {
            "text": "Prefiero la opción más rápida.",
            "next": "confirm"
          },
          {
            "text": "Quiero la opción más económica.",
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
            "text": "No, la confirmación verbal es suficiente.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. Todo está organizado.",
        "de": "Perfekt. Alles ist organisiert.",
        "answers": []
      }
    }
  },
  {
    "id": "es04_cambio_clase",
    "topic": "Bildung",
    "title": "Kurs wechseln",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿En qué puedo ayudarle?",
        "de": "Guten Tag. Wie kann ich Ihnen helfen?",
        "answers": [
          {
            "text": "Necesito organizar esta situación.",
            "next": "details"
          },
          {
            "text": "Tengo un problema que resolver.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Puede darme más detalles?",
        "de": "Können Sie mehr Einzelheiten nennen?",
        "answers": [
          {
            "text": "Sí, aquí están los detalles.",
            "next": "options"
          },
          {
            "text": "Necesito que me explique las opciones.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Tenemos dos opciones posibles.",
        "de": "Wir haben zwei mögliche Optionen.",
        "answers": [
          {
            "text": "Prefiero la opción más rápida.",
            "next": "confirm"
          },
          {
            "text": "Quiero la opción más económica.",
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
            "text": "No, la confirmación verbal es suficiente.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. Todo está organizado.",
        "de": "Perfekt. Alles ist organisiert.",
        "answers": []
      }
    }
  },
  {
    "id": "es04_aviso_tormenta",
    "topic": "Wetter",
    "title": "Wetterwarnung verstehen",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿En qué puedo ayudarle?",
        "de": "Guten Tag. Wie kann ich Ihnen helfen?",
        "answers": [
          {
            "text": "Necesito organizar esta situación.",
            "next": "details"
          },
          {
            "text": "Tengo un problema que resolver.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Puede darme más detalles?",
        "de": "Können Sie mehr Einzelheiten nennen?",
        "answers": [
          {
            "text": "Sí, aquí están los detalles.",
            "next": "options"
          },
          {
            "text": "Necesito que me explique las opciones.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Tenemos dos opciones posibles.",
        "de": "Wir haben zwei mögliche Optionen.",
        "answers": [
          {
            "text": "Prefiero la opción más rápida.",
            "next": "confirm"
          },
          {
            "text": "Quiero la opción más económica.",
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
            "text": "No, la confirmación verbal es suficiente.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. Todo está organizado.",
        "de": "Perfekt. Alles ist organisiert.",
        "answers": []
      }
    }
  },
  {
    "id": "es04_inundacion",
    "topic": "Wetter",
    "title": "Hochwasserwarnung",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿En qué puedo ayudarle?",
        "de": "Guten Tag. Wie kann ich Ihnen helfen?",
        "answers": [
          {
            "text": "Necesito organizar esta situación.",
            "next": "details"
          },
          {
            "text": "Tengo un problema que resolver.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Puede darme más detalles?",
        "de": "Können Sie mehr Einzelheiten nennen?",
        "answers": [
          {
            "text": "Sí, aquí están los detalles.",
            "next": "options"
          },
          {
            "text": "Necesito que me explique las opciones.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Tenemos dos opciones posibles.",
        "de": "Wir haben zwei mögliche Optionen.",
        "answers": [
          {
            "text": "Prefiero la opción más rápida.",
            "next": "confirm"
          },
          {
            "text": "Quiero la opción más económica.",
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
            "text": "No, la confirmación verbal es suficiente.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. Todo está organizado.",
        "de": "Perfekt. Alles ist organisiert.",
        "answers": []
      }
    }
  },
  {
    "id": "es04_plan_semanal",
    "topic": "Organisation",
    "title": "Wochenplanung",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿En qué puedo ayudarle?",
        "de": "Guten Tag. Wie kann ich Ihnen helfen?",
        "answers": [
          {
            "text": "Necesito organizar esta situación.",
            "next": "details"
          },
          {
            "text": "Tengo un problema que resolver.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Puede darme más detalles?",
        "de": "Können Sie mehr Einzelheiten nennen?",
        "answers": [
          {
            "text": "Sí, aquí están los detalles.",
            "next": "options"
          },
          {
            "text": "Necesito que me explique las opciones.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Tenemos dos opciones posibles.",
        "de": "Wir haben zwei mögliche Optionen.",
        "answers": [
          {
            "text": "Prefiero la opción más rápida.",
            "next": "confirm"
          },
          {
            "text": "Quiero la opción más económica.",
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
            "text": "No, la confirmación verbal es suficiente.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. Todo está organizado.",
        "de": "Perfekt. Alles ist organisiert.",
        "answers": []
      }
    }
  },
  {
    "id": "es04_recordatorios",
    "topic": "Organisation",
    "title": "Erinnerungen organisieren",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿En qué puedo ayudarle?",
        "de": "Guten Tag. Wie kann ich Ihnen helfen?",
        "answers": [
          {
            "text": "Necesito organizar esta situación.",
            "next": "details"
          },
          {
            "text": "Tengo un problema que resolver.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Puede darme más detalles?",
        "de": "Können Sie mehr Einzelheiten nennen?",
        "answers": [
          {
            "text": "Sí, aquí están los detalles.",
            "next": "options"
          },
          {
            "text": "Necesito que me explique las opciones.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Tenemos dos opciones posibles.",
        "de": "Wir haben zwei mögliche Optionen.",
        "answers": [
          {
            "text": "Prefiero la opción más rápida.",
            "next": "confirm"
          },
          {
            "text": "Quiero la opción más económica.",
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
            "text": "No, la confirmación verbal es suficiente.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. Todo está organizado.",
        "de": "Perfekt. Alles ist organisiert.",
        "answers": []
      }
    }
  },
  {
    "id": "es04_llamada_cliente",
    "topic": "Kundenservice",
    "title": "Kundengespräch",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿En qué puedo ayudarle?",
        "de": "Guten Tag. Wie kann ich Ihnen helfen?",
        "answers": [
          {
            "text": "Necesito organizar esta situación.",
            "next": "details"
          },
          {
            "text": "Tengo un problema que resolver.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Puede darme más detalles?",
        "de": "Können Sie mehr Einzelheiten nennen?",
        "answers": [
          {
            "text": "Sí, aquí están los detalles.",
            "next": "options"
          },
          {
            "text": "Necesito que me explique las opciones.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Tenemos dos opciones posibles.",
        "de": "Wir haben zwei mögliche Optionen.",
        "answers": [
          {
            "text": "Prefiero la opción más rápida.",
            "next": "confirm"
          },
          {
            "text": "Quiero la opción más económica.",
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
            "text": "No, la confirmación verbal es suficiente.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. Todo está organizado.",
        "de": "Perfekt. Alles ist organisiert.",
        "answers": []
      }
    }
  },
  {
    "id": "es04_reunion_proyecto",
    "topic": "Beruf",
    "title": "Projektbesprechung",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿En qué puedo ayudarle?",
        "de": "Guten Tag. Wie kann ich Ihnen helfen?",
        "answers": [
          {
            "text": "Necesito organizar esta situación.",
            "next": "details"
          },
          {
            "text": "Tengo un problema que resolver.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Puede darme más detalles?",
        "de": "Können Sie mehr Einzelheiten nennen?",
        "answers": [
          {
            "text": "Sí, aquí están los detalles.",
            "next": "options"
          },
          {
            "text": "Necesito que me explique las opciones.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Tenemos dos opciones posibles.",
        "de": "Wir haben zwei mögliche Optionen.",
        "answers": [
          {
            "text": "Prefiero la opción más rápida.",
            "next": "confirm"
          },
          {
            "text": "Quiero la opción más económica.",
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
            "text": "No, la confirmación verbal es suficiente.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. Todo está organizado.",
        "de": "Perfekt. Alles ist organisiert.",
        "answers": []
      }
    }
  },
  {
    "id": "es04_hotel_empresa",
    "topic": "Hotel",
    "title": "Firmenhotel buchen",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿En qué puedo ayudarle?",
        "de": "Guten Tag. Wie kann ich Ihnen helfen?",
        "answers": [
          {
            "text": "Necesito organizar esta situación.",
            "next": "details"
          },
          {
            "text": "Tengo un problema que resolver.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Puede darme más detalles?",
        "de": "Können Sie mehr Einzelheiten nennen?",
        "answers": [
          {
            "text": "Sí, aquí están los detalles.",
            "next": "options"
          },
          {
            "text": "Necesito que me explique las opciones.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Tenemos dos opciones posibles.",
        "de": "Wir haben zwei mögliche Optionen.",
        "answers": [
          {
            "text": "Prefiero la opción más rápida.",
            "next": "confirm"
          },
          {
            "text": "Quiero la opción más económica.",
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
            "text": "No, la confirmación verbal es suficiente.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. Todo está organizado.",
        "de": "Perfekt. Alles ist organisiert.",
        "answers": []
      }
    }
  },
  {
    "id": "es04_comida_trabajo",
    "topic": "Restaurant",
    "title": "Arbeitsessen",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿En qué puedo ayudarle?",
        "de": "Guten Tag. Wie kann ich Ihnen helfen?",
        "answers": [
          {
            "text": "Necesito organizar esta situación.",
            "next": "details"
          },
          {
            "text": "Tengo un problema que resolver.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Puede darme más detalles?",
        "de": "Können Sie mehr Einzelheiten nennen?",
        "answers": [
          {
            "text": "Sí, aquí están los detalles.",
            "next": "options"
          },
          {
            "text": "Necesito que me explique las opciones.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Tenemos dos opciones posibles.",
        "de": "Wir haben zwei mögliche Optionen.",
        "answers": [
          {
            "text": "Prefiero la opción más rápida.",
            "next": "confirm"
          },
          {
            "text": "Quiero la opción más económica.",
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
            "text": "No, la confirmación verbal es suficiente.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. Todo está organizado.",
        "de": "Perfekt. Alles ist organisiert.",
        "answers": []
      }
    }
  },
  {
    "id": "es04_medico_estres",
    "topic": "Gesundheit",
    "title": "Stress besprechen",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿En qué puedo ayudarle?",
        "de": "Guten Tag. Wie kann ich Ihnen helfen?",
        "answers": [
          {
            "text": "Necesito organizar esta situación.",
            "next": "details"
          },
          {
            "text": "Tengo un problema que resolver.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Puede darme más detalles?",
        "de": "Können Sie mehr Einzelheiten nennen?",
        "answers": [
          {
            "text": "Sí, aquí están los detalles.",
            "next": "options"
          },
          {
            "text": "Necesito que me explique las opciones.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Tenemos dos opciones posibles.",
        "de": "Wir haben zwei mögliche Optionen.",
        "answers": [
          {
            "text": "Prefiero la opción más rápida.",
            "next": "confirm"
          },
          {
            "text": "Quiero la opción más económica.",
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
            "text": "No, la confirmación verbal es suficiente.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. Todo está organizado.",
        "de": "Perfekt. Alles ist organisiert.",
        "answers": []
      }
    }
  },
  {
    "id": "es04_universidad_apoyo",
    "topic": "Bildung",
    "title": "Lernunterstützung",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿En qué puedo ayudarle?",
        "de": "Guten Tag. Wie kann ich Ihnen helfen?",
        "answers": [
          {
            "text": "Necesito organizar esta situación.",
            "next": "details"
          },
          {
            "text": "Tengo un problema que resolver.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Puede darme más detalles?",
        "de": "Können Sie mehr Einzelheiten nennen?",
        "answers": [
          {
            "text": "Sí, aquí están los detalles.",
            "next": "options"
          },
          {
            "text": "Necesito que me explique las opciones.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Tenemos dos opciones posibles.",
        "de": "Wir haben zwei mögliche Optionen.",
        "answers": [
          {
            "text": "Prefiero la opción más rápida.",
            "next": "confirm"
          },
          {
            "text": "Quiero la opción más económica.",
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
            "text": "No, la confirmación verbal es suficiente.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. Todo está organizado.",
        "de": "Perfekt. Alles ist organisiert.",
        "answers": []
      }
    }
  },
  {
    "id": "es04_agenda_personal",
    "topic": "Organisation",
    "title": "Persönliche Agenda",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Buenos días. ¿En qué puedo ayudarle?",
        "de": "Guten Tag. Wie kann ich Ihnen helfen?",
        "answers": [
          {
            "text": "Necesito organizar esta situación.",
            "next": "details"
          },
          {
            "text": "Tengo un problema que resolver.",
            "next": "details"
          }
        ]
      },
      "details": {
        "bot": "¿Puede darme más detalles?",
        "de": "Können Sie mehr Einzelheiten nennen?",
        "answers": [
          {
            "text": "Sí, aquí están los detalles.",
            "next": "options"
          },
          {
            "text": "Necesito que me explique las opciones.",
            "next": "options"
          }
        ]
      },
      "options": {
        "bot": "Tenemos dos opciones posibles.",
        "de": "Wir haben zwei mögliche Optionen.",
        "answers": [
          {
            "text": "Prefiero la opción más rápida.",
            "next": "confirm"
          },
          {
            "text": "Quiero la opción más económica.",
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
            "text": "No, la confirmación verbal es suficiente.",
            "next": "end"
          }
        ]
      },
      "end": {
        "bot": "Perfecto. Todo está organizado.",
        "de": "Perfekt. Alles ist organisiert.",
        "answers": []
      }
    }
  }
];
ES_BRANCHING_SCENARIOS_151.push(...ES_BRANCHING_SCENARIOS_04);
