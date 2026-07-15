const ES_BRANCHING_SCENARIOS_02 = [
  {
    "id": "es02_aeropuerto_cambio_puerta",
    "topic": "Flughafen",
    "title": "Gate-Änderung",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "Su puerta de embarque ha cambiado.",
        "de": "Ihr Gate hat sich geändert.",
        "answers": [
          {
            "text": "Necesito ayuda con puerta nueva.",
            "next": "detalleA"
          },
          {
            "text": "Tengo una pregunta sobre puerta nueva.",
            "next": "detalleB"
          }
        ]
      },
      "detalleA": {
        "bot": "¿Puede darme más detalles sobre tiempo para llegar?",
        "de": "Können Sie mehr Einzelheiten zu „tiempo para llegar“ nennen?",
        "answers": [
          {
            "text": "Sí, el punto principal es tiempo para llegar.",
            "next": "opcionA"
          },
          {
            "text": "No estoy seguro de tiempo para llegar.",
            "next": "opcionB"
          }
        ]
      },
      "detalleB": {
        "bot": "¿Qué necesita saber exactamente sobre tiempo para llegar?",
        "de": "Was möchten Sie genau zu „tiempo para llegar“ wissen?",
        "answers": [
          {
            "text": "Quiero confirmar tiempo para llegar.",
            "next": "opcionA"
          },
          {
            "text": "Necesito otra opción para tiempo para llegar.",
            "next": "opcionB"
          }
        ]
      },
      "opcionA": {
        "bot": "Podemos continuar con asistencia.",
        "de": "Wir können mit „asistencia“ fortfahren.",
        "answers": [
          {
            "text": "Sí, continúe con asistencia.",
            "next": "confirmar"
          },
          {
            "text": "Explíqueme mejor asistencia, por favor.",
            "next": "confirmar"
          }
        ]
      },
      "opcionB": {
        "bot": "También podemos ofrecer una alternativa para asistencia.",
        "de": "Wir können auch eine Alternative für „asistencia“ anbieten.",
        "answers": [
          {
            "text": "La alternativa me parece mejor.",
            "next": "confirmar"
          },
          {
            "text": "Prefiero la primera opción.",
            "next": "confirmar"
          }
        ]
      },
      "confirmar": {
        "bot": "¿Cómo quiere recibir confirmación?",
        "de": "Wie möchten Sie „confirmación“ erhalten?",
        "answers": [
          {
            "text": "Por correo electrónico, por favor.",
            "next": "end"
          },
          {
            "text": "Una confirmación verbal es suficiente.",
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
    "id": "es02_aeropuerto_asiento",
    "topic": "Flughafen",
    "title": "Sitzplatz ändern",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "¿Qué cambio desea hacer en su asiento?",
        "de": "Welche Änderung wünschen Sie?",
        "answers": [
          {
            "text": "Necesito ayuda con asiento actual.",
            "next": "detalleA"
          },
          {
            "text": "Tengo una pregunta sobre asiento actual.",
            "next": "detalleB"
          }
        ]
      },
      "detalleA": {
        "bot": "¿Puede darme más detalles sobre preferencia?",
        "de": "Können Sie mehr Einzelheiten zu „preferencia“ nennen?",
        "answers": [
          {
            "text": "Sí, el punto principal es preferencia.",
            "next": "opcionA"
          },
          {
            "text": "No estoy seguro de preferencia.",
            "next": "opcionB"
          }
        ]
      },
      "detalleB": {
        "bot": "¿Qué necesita saber exactamente sobre preferencia?",
        "de": "Was möchten Sie genau zu „preferencia“ wissen?",
        "answers": [
          {
            "text": "Quiero confirmar preferencia.",
            "next": "opcionA"
          },
          {
            "text": "Necesito otra opción para preferencia.",
            "next": "opcionB"
          }
        ]
      },
      "opcionA": {
        "bot": "Podemos continuar con disponibilidad.",
        "de": "Wir können mit „disponibilidad“ fortfahren.",
        "answers": [
          {
            "text": "Sí, continúe con disponibilidad.",
            "next": "confirmar"
          },
          {
            "text": "Explíqueme mejor disponibilidad, por favor.",
            "next": "confirmar"
          }
        ]
      },
      "opcionB": {
        "bot": "También podemos ofrecer una alternativa para disponibilidad.",
        "de": "Wir können auch eine Alternative für „disponibilidad“ anbieten.",
        "answers": [
          {
            "text": "La alternativa me parece mejor.",
            "next": "confirmar"
          },
          {
            "text": "Prefiero la primera opción.",
            "next": "confirmar"
          }
        ]
      },
      "confirmar": {
        "bot": "¿Cómo quiere recibir nueva tarjeta?",
        "de": "Wie möchten Sie „nueva tarjeta“ erhalten?",
        "answers": [
          {
            "text": "Por correo electrónico, por favor.",
            "next": "end"
          },
          {
            "text": "Una confirmación verbal es suficiente.",
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
    "id": "es02_tren_reembolso",
    "topic": "Bahnhof",
    "title": "Zugticket erstatten",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "¿Por qué solicita un reembolso?",
        "de": "Warum möchten Sie eine Erstattung?",
        "answers": [
          {
            "text": "Necesito ayuda con billete.",
            "next": "detalleA"
          },
          {
            "text": "Tengo una pregunta sobre billete.",
            "next": "detalleB"
          }
        ]
      },
      "detalleA": {
        "bot": "¿Puede darme más detalles sobre motivo?",
        "de": "Können Sie mehr Einzelheiten zu „motivo“ nennen?",
        "answers": [
          {
            "text": "Sí, el punto principal es motivo.",
            "next": "opcionA"
          },
          {
            "text": "No estoy seguro de motivo.",
            "next": "opcionB"
          }
        ]
      },
      "detalleB": {
        "bot": "¿Qué necesita saber exactamente sobre motivo?",
        "de": "Was möchten Sie genau zu „motivo“ wissen?",
        "answers": [
          {
            "text": "Quiero confirmar motivo.",
            "next": "opcionA"
          },
          {
            "text": "Necesito otra opción para motivo.",
            "next": "opcionB"
          }
        ]
      },
      "opcionA": {
        "bot": "Podemos continuar con método de reembolso.",
        "de": "Wir können mit „método de reembolso“ fortfahren.",
        "answers": [
          {
            "text": "Sí, continúe con método de reembolso.",
            "next": "confirmar"
          },
          {
            "text": "Explíqueme mejor método de reembolso, por favor.",
            "next": "confirmar"
          }
        ]
      },
      "opcionB": {
        "bot": "También podemos ofrecer una alternativa para método de reembolso.",
        "de": "Wir können auch eine Alternative für „método de reembolso“ anbieten.",
        "answers": [
          {
            "text": "La alternativa me parece mejor.",
            "next": "confirmar"
          },
          {
            "text": "Prefiero la primera opción.",
            "next": "confirmar"
          }
        ]
      },
      "confirmar": {
        "bot": "¿Cómo quiere recibir plazo?",
        "de": "Wie möchten Sie „plazo“ erhalten?",
        "answers": [
          {
            "text": "Por correo electrónico, por favor.",
            "next": "end"
          },
          {
            "text": "Una confirmación verbal es suficiente.",
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
    "id": "es02_tren_bicicleta",
    "topic": "Bahnhof",
    "title": "Fahrrad mitnehmen",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "¿Viaja con una bicicleta?",
        "de": "Reisen Sie mit einem Fahrrad?",
        "answers": [
          {
            "text": "Necesito ayuda con reserva.",
            "next": "detalleA"
          },
          {
            "text": "Tengo una pregunta sobre reserva.",
            "next": "detalleB"
          }
        ]
      },
      "detalleA": {
        "bot": "¿Puede darme más detalles sobre tipo de tren?",
        "de": "Können Sie mehr Einzelheiten zu „tipo de tren“ nennen?",
        "answers": [
          {
            "text": "Sí, el punto principal es tipo de tren.",
            "next": "opcionA"
          },
          {
            "text": "No estoy seguro de tipo de tren.",
            "next": "opcionB"
          }
        ]
      },
      "detalleB": {
        "bot": "¿Qué necesita saber exactamente sobre tipo de tren?",
        "de": "Was möchten Sie genau zu „tipo de tren“ wissen?",
        "answers": [
          {
            "text": "Quiero confirmar tipo de tren.",
            "next": "opcionA"
          },
          {
            "text": "Necesito otra opción para tipo de tren.",
            "next": "opcionB"
          }
        ]
      },
      "opcionA": {
        "bot": "Podemos continuar con espacio disponible.",
        "de": "Wir können mit „espacio disponible“ fortfahren.",
        "answers": [
          {
            "text": "Sí, continúe con espacio disponible.",
            "next": "confirmar"
          },
          {
            "text": "Explíqueme mejor espacio disponible, por favor.",
            "next": "confirmar"
          }
        ]
      },
      "opcionB": {
        "bot": "También podemos ofrecer una alternativa para espacio disponible.",
        "de": "Wir können auch eine Alternative für „espacio disponible“ anbieten.",
        "answers": [
          {
            "text": "La alternativa me parece mejor.",
            "next": "confirmar"
          },
          {
            "text": "Prefiero la primera opción.",
            "next": "confirmar"
          }
        ]
      },
      "confirmar": {
        "bot": "¿Cómo quiere recibir confirmación?",
        "de": "Wie möchten Sie „confirmación“ erhalten?",
        "answers": [
          {
            "text": "Por correo electrónico, por favor.",
            "next": "end"
          },
          {
            "text": "Una confirmación verbal es suficiente.",
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
    "id": "es02_coche_seguro",
    "topic": "Autovermietung",
    "title": "Versicherung klären",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "¿Qué cobertura necesita?",
        "de": "Welchen Versicherungsschutz brauchen Sie?",
        "answers": [
          {
            "text": "Necesito ayuda con tipo de vehículo.",
            "next": "detalleA"
          },
          {
            "text": "Tengo una pregunta sobre tipo de vehículo.",
            "next": "detalleB"
          }
        ]
      },
      "detalleA": {
        "bot": "¿Puede darme más detalles sobre franquicia?",
        "de": "Können Sie mehr Einzelheiten zu „franquicia“ nennen?",
        "answers": [
          {
            "text": "Sí, el punto principal es franquicia.",
            "next": "opcionA"
          },
          {
            "text": "No estoy seguro de franquicia.",
            "next": "opcionB"
          }
        ]
      },
      "detalleB": {
        "bot": "¿Qué necesita saber exactamente sobre franquicia?",
        "de": "Was möchten Sie genau zu „franquicia“ wissen?",
        "answers": [
          {
            "text": "Quiero confirmar franquicia.",
            "next": "opcionA"
          },
          {
            "text": "Necesito otra opción para franquicia.",
            "next": "opcionB"
          }
        ]
      },
      "opcionA": {
        "bot": "Podemos continuar con cobertura.",
        "de": "Wir können mit „cobertura“ fortfahren.",
        "answers": [
          {
            "text": "Sí, continúe con cobertura.",
            "next": "confirmar"
          },
          {
            "text": "Explíqueme mejor cobertura, por favor.",
            "next": "confirmar"
          }
        ]
      },
      "opcionB": {
        "bot": "También podemos ofrecer una alternativa para cobertura.",
        "de": "Wir können auch eine Alternative für „cobertura“ anbieten.",
        "answers": [
          {
            "text": "La alternativa me parece mejor.",
            "next": "confirmar"
          },
          {
            "text": "Prefiero la primera opción.",
            "next": "confirmar"
          }
        ]
      },
      "confirmar": {
        "bot": "¿Cómo quiere recibir contrato?",
        "de": "Wie möchten Sie „contrato“ erhalten?",
        "answers": [
          {
            "text": "Por correo electrónico, por favor.",
            "next": "end"
          },
          {
            "text": "Una confirmación verbal es suficiente.",
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
    "id": "es02_coche_daño",
    "topic": "Autovermietung",
    "title": "Schaden melden",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "¿Dónde está el daño?",
        "de": "Wo ist der Schaden?",
        "answers": [
          {
            "text": "Necesito ayuda con ubicación del daño.",
            "next": "detalleA"
          },
          {
            "text": "Tengo una pregunta sobre ubicación del daño.",
            "next": "detalleB"
          }
        ]
      },
      "detalleA": {
        "bot": "¿Puede darme más detalles sobre foto?",
        "de": "Können Sie mehr Einzelheiten zu „foto“ nennen?",
        "answers": [
          {
            "text": "Sí, el punto principal es foto.",
            "next": "opcionA"
          },
          {
            "text": "No estoy seguro de foto.",
            "next": "opcionB"
          }
        ]
      },
      "detalleB": {
        "bot": "¿Qué necesita saber exactamente sobre foto?",
        "de": "Was möchten Sie genau zu „foto“ wissen?",
        "answers": [
          {
            "text": "Quiero confirmar foto.",
            "next": "opcionA"
          },
          {
            "text": "Necesito otra opción para foto.",
            "next": "opcionB"
          }
        ]
      },
      "opcionA": {
        "bot": "Podemos continuar con inspección.",
        "de": "Wir können mit „inspección“ fortfahren.",
        "answers": [
          {
            "text": "Sí, continúe con inspección.",
            "next": "confirmar"
          },
          {
            "text": "Explíqueme mejor inspección, por favor.",
            "next": "confirmar"
          }
        ]
      },
      "opcionB": {
        "bot": "También podemos ofrecer una alternativa para inspección.",
        "de": "Wir können auch eine Alternative für „inspección“ anbieten.",
        "answers": [
          {
            "text": "La alternativa me parece mejor.",
            "next": "confirmar"
          },
          {
            "text": "Prefiero la primera opción.",
            "next": "confirmar"
          }
        ]
      },
      "confirmar": {
        "bot": "¿Cómo quiere recibir informe?",
        "de": "Wie möchten Sie „informe“ erhalten?",
        "answers": [
          {
            "text": "Por correo electrónico, por favor.",
            "next": "end"
          },
          {
            "text": "Una confirmación verbal es suficiente.",
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
    "id": "es02_banco_transferencia",
    "topic": "Bank",
    "title": "Überweisung prüfen",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "¿Qué problema tiene con la transferencia?",
        "de": "Welches Problem gibt es mit der Überweisung?",
        "answers": [
          {
            "text": "Necesito ayuda con fecha.",
            "next": "detalleA"
          },
          {
            "text": "Tengo una pregunta sobre fecha.",
            "next": "detalleB"
          }
        ]
      },
      "detalleA": {
        "bot": "¿Puede darme más detalles sobre beneficiario?",
        "de": "Können Sie mehr Einzelheiten zu „beneficiario“ nennen?",
        "answers": [
          {
            "text": "Sí, el punto principal es beneficiario.",
            "next": "opcionA"
          },
          {
            "text": "No estoy seguro de beneficiario.",
            "next": "opcionB"
          }
        ]
      },
      "detalleB": {
        "bot": "¿Qué necesita saber exactamente sobre beneficiario?",
        "de": "Was möchten Sie genau zu „beneficiario“ wissen?",
        "answers": [
          {
            "text": "Quiero confirmar beneficiario.",
            "next": "opcionA"
          },
          {
            "text": "Necesito otra opción para beneficiario.",
            "next": "opcionB"
          }
        ]
      },
      "opcionA": {
        "bot": "Podemos continuar con estado.",
        "de": "Wir können mit „estado“ fortfahren.",
        "answers": [
          {
            "text": "Sí, continúe con estado.",
            "next": "confirmar"
          },
          {
            "text": "Explíqueme mejor estado, por favor.",
            "next": "confirmar"
          }
        ]
      },
      "opcionB": {
        "bot": "También podemos ofrecer una alternativa para estado.",
        "de": "Wir können auch eine Alternative für „estado“ anbieten.",
        "answers": [
          {
            "text": "La alternativa me parece mejor.",
            "next": "confirmar"
          },
          {
            "text": "Prefiero la primera opción.",
            "next": "confirmar"
          }
        ]
      },
      "confirmar": {
        "bot": "¿Cómo quiere recibir referencia?",
        "de": "Wie möchten Sie „referencia“ erhalten?",
        "answers": [
          {
            "text": "Por correo electrónico, por favor.",
            "next": "end"
          },
          {
            "text": "Una confirmación verbal es suficiente.",
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
    "id": "es02_banco_tarjeta_bloqueada",
    "topic": "Bank",
    "title": "Karte entsperren",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "¿Por qué está bloqueada la tarjeta?",
        "de": "Warum ist die Karte gesperrt?",
        "answers": [
          {
            "text": "Necesito ayuda con último uso.",
            "next": "detalleA"
          },
          {
            "text": "Tengo una pregunta sobre último uso.",
            "next": "detalleB"
          }
        ]
      },
      "detalleA": {
        "bot": "¿Puede darme más detalles sobre verificación?",
        "de": "Können Sie mehr Einzelheiten zu „verificación“ nennen?",
        "answers": [
          {
            "text": "Sí, el punto principal es verificación.",
            "next": "opcionA"
          },
          {
            "text": "No estoy seguro de verificación.",
            "next": "opcionB"
          }
        ]
      },
      "detalleB": {
        "bot": "¿Qué necesita saber exactamente sobre verificación?",
        "de": "Was möchten Sie genau zu „verificación“ wissen?",
        "answers": [
          {
            "text": "Quiero confirmar verificación.",
            "next": "opcionA"
          },
          {
            "text": "Necesito otra opción para verificación.",
            "next": "opcionB"
          }
        ]
      },
      "opcionA": {
        "bot": "Podemos continuar con desbloqueo.",
        "de": "Wir können mit „desbloqueo“ fortfahren.",
        "answers": [
          {
            "text": "Sí, continúe con desbloqueo.",
            "next": "confirmar"
          },
          {
            "text": "Explíqueme mejor desbloqueo, por favor.",
            "next": "confirmar"
          }
        ]
      },
      "opcionB": {
        "bot": "También podemos ofrecer una alternativa para desbloqueo.",
        "de": "Wir können auch eine Alternative für „desbloqueo“ anbieten.",
        "answers": [
          {
            "text": "La alternativa me parece mejor.",
            "next": "confirmar"
          },
          {
            "text": "Prefiero la primera opción.",
            "next": "confirmar"
          }
        ]
      },
      "confirmar": {
        "bot": "¿Cómo quiere recibir confirmación?",
        "de": "Wie möchten Sie „confirmación“ erhalten?",
        "answers": [
          {
            "text": "Por correo electrónico, por favor.",
            "next": "end"
          },
          {
            "text": "Una confirmación verbal es suficiente.",
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
    "id": "es02_correo_paquete_fragil",
    "topic": "Post",
    "title": "Zerbrechliches Paket",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "¿Qué contiene el paquete?",
        "de": "Was enthält das Paket?",
        "answers": [
          {
            "text": "Necesito ayuda con contenido.",
            "next": "detalleA"
          },
          {
            "text": "Tengo una pregunta sobre contenido.",
            "next": "detalleB"
          }
        ]
      },
      "detalleA": {
        "bot": "¿Puede darme más detalles sobre embalaje?",
        "de": "Können Sie mehr Einzelheiten zu „embalaje“ nennen?",
        "answers": [
          {
            "text": "Sí, el punto principal es embalaje.",
            "next": "opcionA"
          },
          {
            "text": "No estoy seguro de embalaje.",
            "next": "opcionB"
          }
        ]
      },
      "detalleB": {
        "bot": "¿Qué necesita saber exactamente sobre embalaje?",
        "de": "Was möchten Sie genau zu „embalaje“ wissen?",
        "answers": [
          {
            "text": "Quiero confirmar embalaje.",
            "next": "opcionA"
          },
          {
            "text": "Necesito otra opción para embalaje.",
            "next": "opcionB"
          }
        ]
      },
      "opcionA": {
        "bot": "Podemos continuar con seguro.",
        "de": "Wir können mit „seguro“ fortfahren.",
        "answers": [
          {
            "text": "Sí, continúe con seguro.",
            "next": "confirmar"
          },
          {
            "text": "Explíqueme mejor seguro, por favor.",
            "next": "confirmar"
          }
        ]
      },
      "opcionB": {
        "bot": "También podemos ofrecer una alternativa para seguro.",
        "de": "Wir können auch eine Alternative für „seguro“ anbieten.",
        "answers": [
          {
            "text": "La alternativa me parece mejor.",
            "next": "confirmar"
          },
          {
            "text": "Prefiero la primera opción.",
            "next": "confirmar"
          }
        ]
      },
      "confirmar": {
        "bot": "¿Cómo quiere recibir seguimiento?",
        "de": "Wie möchten Sie „seguimiento“ erhalten?",
        "answers": [
          {
            "text": "Por correo electrónico, por favor.",
            "next": "end"
          },
          {
            "text": "Una confirmación verbal es suficiente.",
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
    "id": "es02_correo_entrega",
    "topic": "Post",
    "title": "Neue Zustellung",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "¿Cuándo quiere una nueva entrega?",
        "de": "Wann möchten Sie eine neue Zustellung?",
        "answers": [
          {
            "text": "Necesito ayuda con fecha.",
            "next": "detalleA"
          },
          {
            "text": "Tengo una pregunta sobre fecha.",
            "next": "detalleB"
          }
        ]
      },
      "detalleA": {
        "bot": "¿Puede darme más detalles sobre dirección?",
        "de": "Können Sie mehr Einzelheiten zu „dirección“ nennen?",
        "answers": [
          {
            "text": "Sí, el punto principal es dirección.",
            "next": "opcionA"
          },
          {
            "text": "No estoy seguro de dirección.",
            "next": "opcionB"
          }
        ]
      },
      "detalleB": {
        "bot": "¿Qué necesita saber exactamente sobre dirección?",
        "de": "Was möchten Sie genau zu „dirección“ wissen?",
        "answers": [
          {
            "text": "Quiero confirmar dirección.",
            "next": "opcionA"
          },
          {
            "text": "Necesito otra opción para dirección.",
            "next": "opcionB"
          }
        ]
      },
      "opcionA": {
        "bot": "Podemos continuar con lugar seguro.",
        "de": "Wir können mit „lugar seguro“ fortfahren.",
        "answers": [
          {
            "text": "Sí, continúe con lugar seguro.",
            "next": "confirmar"
          },
          {
            "text": "Explíqueme mejor lugar seguro, por favor.",
            "next": "confirmar"
          }
        ]
      },
      "opcionB": {
        "bot": "También podemos ofrecer una alternativa para lugar seguro.",
        "de": "Wir können auch eine Alternative für „lugar seguro“ anbieten.",
        "answers": [
          {
            "text": "La alternativa me parece mejor.",
            "next": "confirmar"
          },
          {
            "text": "Prefiero la primera opción.",
            "next": "confirmar"
          }
        ]
      },
      "confirmar": {
        "bot": "¿Cómo quiere recibir confirmación?",
        "de": "Wie möchten Sie „confirmación“ erhalten?",
        "answers": [
          {
            "text": "Por correo electrónico, por favor.",
            "next": "end"
          },
          {
            "text": "Una confirmación verbal es suficiente.",
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
    "id": "es02_universidad_matricula",
    "topic": "Universität",
    "title": "Einschreibung",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "¿En qué curso quiere matricularse?",
        "de": "Für welchen Kurs möchten Sie sich einschreiben?",
        "answers": [
          {
            "text": "Necesito ayuda con curso.",
            "next": "detalleA"
          },
          {
            "text": "Tengo una pregunta sobre curso.",
            "next": "detalleB"
          }
        ]
      },
      "detalleA": {
        "bot": "¿Puede darme más detalles sobre nivel?",
        "de": "Können Sie mehr Einzelheiten zu „nivel“ nennen?",
        "answers": [
          {
            "text": "Sí, el punto principal es nivel.",
            "next": "opcionA"
          },
          {
            "text": "No estoy seguro de nivel.",
            "next": "opcionB"
          }
        ]
      },
      "detalleB": {
        "bot": "¿Qué necesita saber exactamente sobre nivel?",
        "de": "Was möchten Sie genau zu „nivel“ wissen?",
        "answers": [
          {
            "text": "Quiero confirmar nivel.",
            "next": "opcionA"
          },
          {
            "text": "Necesito otra opción para nivel.",
            "next": "opcionB"
          }
        ]
      },
      "opcionA": {
        "bot": "Podemos continuar con tasa.",
        "de": "Wir können mit „tasa“ fortfahren.",
        "answers": [
          {
            "text": "Sí, continúe con tasa.",
            "next": "confirmar"
          },
          {
            "text": "Explíqueme mejor tasa, por favor.",
            "next": "confirmar"
          }
        ]
      },
      "opcionB": {
        "bot": "También podemos ofrecer una alternativa para tasa.",
        "de": "Wir können auch eine Alternative für „tasa“ anbieten.",
        "answers": [
          {
            "text": "La alternativa me parece mejor.",
            "next": "confirmar"
          },
          {
            "text": "Prefiero la primera opción.",
            "next": "confirmar"
          }
        ]
      },
      "confirmar": {
        "bot": "¿Cómo quiere recibir confirmación?",
        "de": "Wie möchten Sie „confirmación“ erhalten?",
        "answers": [
          {
            "text": "Por correo electrónico, por favor.",
            "next": "end"
          },
          {
            "text": "Una confirmación verbal es suficiente.",
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
    "id": "es02_universidad_examen",
    "topic": "Universität",
    "title": "Prüfungstermin",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "¿Qué examen quiere cambiar?",
        "de": "Welche Prüfung möchten Sie ändern?",
        "answers": [
          {
            "text": "Necesito ayuda con asignatura.",
            "next": "detalleA"
          },
          {
            "text": "Tengo una pregunta sobre asignatura.",
            "next": "detalleB"
          }
        ]
      },
      "detalleA": {
        "bot": "¿Puede darme más detalles sobre motivo?",
        "de": "Können Sie mehr Einzelheiten zu „motivo“ nennen?",
        "answers": [
          {
            "text": "Sí, el punto principal es motivo.",
            "next": "opcionA"
          },
          {
            "text": "No estoy seguro de motivo.",
            "next": "opcionB"
          }
        ]
      },
      "detalleB": {
        "bot": "¿Qué necesita saber exactamente sobre motivo?",
        "de": "Was möchten Sie genau zu „motivo“ wissen?",
        "answers": [
          {
            "text": "Quiero confirmar motivo.",
            "next": "opcionA"
          },
          {
            "text": "Necesito otra opción para motivo.",
            "next": "opcionB"
          }
        ]
      },
      "opcionA": {
        "bot": "Podemos continuar con nueva fecha.",
        "de": "Wir können mit „nueva fecha“ fortfahren.",
        "answers": [
          {
            "text": "Sí, continúe con nueva fecha.",
            "next": "confirmar"
          },
          {
            "text": "Explíqueme mejor nueva fecha, por favor.",
            "next": "confirmar"
          }
        ]
      },
      "opcionB": {
        "bot": "También podemos ofrecer una alternativa para nueva fecha.",
        "de": "Wir können auch eine Alternative für „nueva fecha“ anbieten.",
        "answers": [
          {
            "text": "La alternativa me parece mejor.",
            "next": "confirmar"
          },
          {
            "text": "Prefiero la primera opción.",
            "next": "confirmar"
          }
        ]
      },
      "confirmar": {
        "bot": "¿Cómo quiere recibir aprobación?",
        "de": "Wie möchten Sie „aprobación“ erhalten?",
        "answers": [
          {
            "text": "Por correo electrónico, por favor.",
            "next": "end"
          },
          {
            "text": "Una confirmación verbal es suficiente.",
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
    "id": "es02_piso_averia",
    "topic": "Wohnen",
    "title": "Wohnungsdefekt",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "¿Qué avería hay en el piso?",
        "de": "Welcher Defekt liegt vor?",
        "answers": [
          {
            "text": "Necesito ayuda con problema.",
            "next": "detalleA"
          },
          {
            "text": "Tengo una pregunta sobre problema.",
            "next": "detalleB"
          }
        ]
      },
      "detalleA": {
        "bot": "¿Puede darme más detalles sobre urgencia?",
        "de": "Können Sie mehr Einzelheiten zu „urgencia“ nennen?",
        "answers": [
          {
            "text": "Sí, el punto principal es urgencia.",
            "next": "opcionA"
          },
          {
            "text": "No estoy seguro de urgencia.",
            "next": "opcionB"
          }
        ]
      },
      "detalleB": {
        "bot": "¿Qué necesita saber exactamente sobre urgencia?",
        "de": "Was möchten Sie genau zu „urgencia“ wissen?",
        "answers": [
          {
            "text": "Quiero confirmar urgencia.",
            "next": "opcionA"
          },
          {
            "text": "Necesito otra opción para urgencia.",
            "next": "opcionB"
          }
        ]
      },
      "opcionA": {
        "bot": "Podemos continuar con técnico.",
        "de": "Wir können mit „técnico“ fortfahren.",
        "answers": [
          {
            "text": "Sí, continúe con técnico.",
            "next": "confirmar"
          },
          {
            "text": "Explíqueme mejor técnico, por favor.",
            "next": "confirmar"
          }
        ]
      },
      "opcionB": {
        "bot": "También podemos ofrecer una alternativa para técnico.",
        "de": "Wir können auch eine Alternative für „técnico“ anbieten.",
        "answers": [
          {
            "text": "La alternativa me parece mejor.",
            "next": "confirmar"
          },
          {
            "text": "Prefiero la primera opción.",
            "next": "confirmar"
          }
        ]
      },
      "confirmar": {
        "bot": "¿Cómo quiere recibir cita?",
        "de": "Wie möchten Sie „cita“ erhalten?",
        "answers": [
          {
            "text": "Por correo electrónico, por favor.",
            "next": "end"
          },
          {
            "text": "Una confirmación verbal es suficiente.",
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
    "id": "es02_piso_alquiler",
    "topic": "Wohnen",
    "title": "Mietvertrag",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "¿Qué desea saber del contrato?",
        "de": "Was möchten Sie zum Mietvertrag wissen?",
        "answers": [
          {
            "text": "Necesito ayuda con duración.",
            "next": "detalleA"
          },
          {
            "text": "Tengo una pregunta sobre duración.",
            "next": "detalleB"
          }
        ]
      },
      "detalleA": {
        "bot": "¿Puede darme más detalles sobre fianza?",
        "de": "Können Sie mehr Einzelheiten zu „fianza“ nennen?",
        "answers": [
          {
            "text": "Sí, el punto principal es fianza.",
            "next": "opcionA"
          },
          {
            "text": "No estoy seguro de fianza.",
            "next": "opcionB"
          }
        ]
      },
      "detalleB": {
        "bot": "¿Qué necesita saber exactamente sobre fianza?",
        "de": "Was möchten Sie genau zu „fianza“ wissen?",
        "answers": [
          {
            "text": "Quiero confirmar fianza.",
            "next": "opcionA"
          },
          {
            "text": "Necesito otra opción para fianza.",
            "next": "opcionB"
          }
        ]
      },
      "opcionA": {
        "bot": "Podemos continuar con gastos.",
        "de": "Wir können mit „gastos“ fortfahren.",
        "answers": [
          {
            "text": "Sí, continúe con gastos.",
            "next": "confirmar"
          },
          {
            "text": "Explíqueme mejor gastos, por favor.",
            "next": "confirmar"
          }
        ]
      },
      "opcionB": {
        "bot": "También podemos ofrecer una alternativa para gastos.",
        "de": "Wir können auch eine Alternative für „gastos“ anbieten.",
        "answers": [
          {
            "text": "La alternativa me parece mejor.",
            "next": "confirmar"
          },
          {
            "text": "Prefiero la primera opción.",
            "next": "confirmar"
          }
        ]
      },
      "confirmar": {
        "bot": "¿Cómo quiere recibir firma?",
        "de": "Wie möchten Sie „firma“ erhalten?",
        "answers": [
          {
            "text": "Por correo electrónico, por favor.",
            "next": "end"
          },
          {
            "text": "Una confirmación verbal es suficiente.",
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
    "id": "es02_internet_contraseña",
    "topic": "Internet",
    "title": "Passwort zurücksetzen",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "¿Puede acceder a su correo?",
        "de": "Können Sie auf Ihre E-Mail zugreifen?",
        "answers": [
          {
            "text": "Necesito ayuda con cuenta.",
            "next": "detalleA"
          },
          {
            "text": "Tengo una pregunta sobre cuenta.",
            "next": "detalleB"
          }
        ]
      },
      "detalleA": {
        "bot": "¿Puede darme más detalles sobre código?",
        "de": "Können Sie mehr Einzelheiten zu „código“ nennen?",
        "answers": [
          {
            "text": "Sí, el punto principal es código.",
            "next": "opcionA"
          },
          {
            "text": "No estoy seguro de código.",
            "next": "opcionB"
          }
        ]
      },
      "detalleB": {
        "bot": "¿Qué necesita saber exactamente sobre código?",
        "de": "Was möchten Sie genau zu „código“ wissen?",
        "answers": [
          {
            "text": "Quiero confirmar código.",
            "next": "opcionA"
          },
          {
            "text": "Necesito otra opción para código.",
            "next": "opcionB"
          }
        ]
      },
      "opcionA": {
        "bot": "Podemos continuar con nueva contraseña.",
        "de": "Wir können mit „nueva contraseña“ fortfahren.",
        "answers": [
          {
            "text": "Sí, continúe con nueva contraseña.",
            "next": "confirmar"
          },
          {
            "text": "Explíqueme mejor nueva contraseña, por favor.",
            "next": "confirmar"
          }
        ]
      },
      "opcionB": {
        "bot": "También podemos ofrecer una alternativa para nueva contraseña.",
        "de": "Wir können auch eine Alternative für „nueva contraseña“ anbieten.",
        "answers": [
          {
            "text": "La alternativa me parece mejor.",
            "next": "confirmar"
          },
          {
            "text": "Prefiero la primera opción.",
            "next": "confirmar"
          }
        ]
      },
      "confirmar": {
        "bot": "¿Cómo quiere recibir seguridad?",
        "de": "Wie möchten Sie „seguridad“ erhalten?",
        "answers": [
          {
            "text": "Por correo electrónico, por favor.",
            "next": "end"
          },
          {
            "text": "Una confirmación verbal es suficiente.",
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
    "id": "es02_internet_videollamada",
    "topic": "Internet",
    "title": "Videokonferenzproblem",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "¿Qué ocurre durante la videollamada?",
        "de": "Was passiert während des Videoanrufs?",
        "answers": [
          {
            "text": "Necesito ayuda con conexión.",
            "next": "detalleA"
          },
          {
            "text": "Tengo una pregunta sobre conexión.",
            "next": "detalleB"
          }
        ]
      },
      "detalleA": {
        "bot": "¿Puede darme más detalles sobre micrófono?",
        "de": "Können Sie mehr Einzelheiten zu „micrófono“ nennen?",
        "answers": [
          {
            "text": "Sí, el punto principal es micrófono.",
            "next": "opcionA"
          },
          {
            "text": "No estoy seguro de micrófono.",
            "next": "opcionB"
          }
        ]
      },
      "detalleB": {
        "bot": "¿Qué necesita saber exactamente sobre micrófono?",
        "de": "Was möchten Sie genau zu „micrófono“ wissen?",
        "answers": [
          {
            "text": "Quiero confirmar micrófono.",
            "next": "opcionA"
          },
          {
            "text": "Necesito otra opción para micrófono.",
            "next": "opcionB"
          }
        ]
      },
      "opcionA": {
        "bot": "Podemos continuar con prueba.",
        "de": "Wir können mit „prueba“ fortfahren.",
        "answers": [
          {
            "text": "Sí, continúe con prueba.",
            "next": "confirmar"
          },
          {
            "text": "Explíqueme mejor prueba, por favor.",
            "next": "confirmar"
          }
        ]
      },
      "opcionB": {
        "bot": "También podemos ofrecer una alternativa para prueba.",
        "de": "Wir können auch eine Alternative für „prueba“ anbieten.",
        "answers": [
          {
            "text": "La alternativa me parece mejor.",
            "next": "confirmar"
          },
          {
            "text": "Prefiero la primera opción.",
            "next": "confirmar"
          }
        ]
      },
      "confirmar": {
        "bot": "¿Cómo quiere recibir solución?",
        "de": "Wie möchten Sie „solución“ erhalten?",
        "answers": [
          {
            "text": "Por correo electrónico, por favor.",
            "next": "end"
          },
          {
            "text": "Una confirmación verbal es suficiente.",
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
    "id": "es02_medioambiente_residuos",
    "topic": "Umwelt",
    "title": "Abfallprojekt",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "¿Qué problema de residuos existe?",
        "de": "Welches Abfallproblem gibt es?",
        "answers": [
          {
            "text": "Necesito ayuda con zona.",
            "next": "detalleA"
          },
          {
            "text": "Tengo una pregunta sobre zona.",
            "next": "detalleB"
          }
        ]
      },
      "detalleA": {
        "bot": "¿Puede darme más detalles sobre tipo de residuos?",
        "de": "Können Sie mehr Einzelheiten zu „tipo de residuos“ nennen?",
        "answers": [
          {
            "text": "Sí, el punto principal es tipo de residuos.",
            "next": "opcionA"
          },
          {
            "text": "No estoy seguro de tipo de residuos.",
            "next": "opcionB"
          }
        ]
      },
      "detalleB": {
        "bot": "¿Qué necesita saber exactamente sobre tipo de residuos?",
        "de": "Was möchten Sie genau zu „tipo de residuos“ wissen?",
        "answers": [
          {
            "text": "Quiero confirmar tipo de residuos.",
            "next": "opcionA"
          },
          {
            "text": "Necesito otra opción para tipo de residuos.",
            "next": "opcionB"
          }
        ]
      },
      "opcionA": {
        "bot": "Podemos continuar con medida.",
        "de": "Wir können mit „medida“ fortfahren.",
        "answers": [
          {
            "text": "Sí, continúe con medida.",
            "next": "confirmar"
          },
          {
            "text": "Explíqueme mejor medida, por favor.",
            "next": "confirmar"
          }
        ]
      },
      "opcionB": {
        "bot": "También podemos ofrecer una alternativa para medida.",
        "de": "Wir können auch eine Alternative für „medida“ anbieten.",
        "answers": [
          {
            "text": "La alternativa me parece mejor.",
            "next": "confirmar"
          },
          {
            "text": "Prefiero la primera opción.",
            "next": "confirmar"
          }
        ]
      },
      "confirmar": {
        "bot": "¿Cómo quiere recibir fecha?",
        "de": "Wie möchten Sie „fecha“ erhalten?",
        "answers": [
          {
            "text": "Por correo electrónico, por favor.",
            "next": "end"
          },
          {
            "text": "Una confirmación verbal es suficiente.",
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
    "id": "es02_medioambiente_transporte",
    "topic": "Umwelt",
    "title": "Nachhaltiger Verkehr",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "¿Qué quiere mejorar?",
        "de": "Was möchten Sie verbessern?",
        "answers": [
          {
            "text": "Necesito ayuda con tráfico.",
            "next": "detalleA"
          },
          {
            "text": "Tengo una pregunta sobre tráfico.",
            "next": "detalleB"
          }
        ]
      },
      "detalleA": {
        "bot": "¿Puede darme más detalles sobre transporte público?",
        "de": "Können Sie mehr Einzelheiten zu „transporte público“ nennen?",
        "answers": [
          {
            "text": "Sí, el punto principal es transporte público.",
            "next": "opcionA"
          },
          {
            "text": "No estoy seguro de transporte público.",
            "next": "opcionB"
          }
        ]
      },
      "detalleB": {
        "bot": "¿Qué necesita saber exactamente sobre transporte público?",
        "de": "Was möchten Sie genau zu „transporte público“ wissen?",
        "answers": [
          {
            "text": "Quiero confirmar transporte público.",
            "next": "opcionA"
          },
          {
            "text": "Necesito otra opción para transporte público.",
            "next": "opcionB"
          }
        ]
      },
      "opcionA": {
        "bot": "Podemos continuar con carril bici.",
        "de": "Wir können mit „carril bici“ fortfahren.",
        "answers": [
          {
            "text": "Sí, continúe con carril bici.",
            "next": "confirmar"
          },
          {
            "text": "Explíqueme mejor carril bici, por favor.",
            "next": "confirmar"
          }
        ]
      },
      "opcionB": {
        "bot": "También podemos ofrecer una alternativa para carril bici.",
        "de": "Wir können auch eine Alternative für „carril bici“ anbieten.",
        "answers": [
          {
            "text": "La alternativa me parece mejor.",
            "next": "confirmar"
          },
          {
            "text": "Prefiero la primera opción.",
            "next": "confirmar"
          }
        ]
      },
      "confirmar": {
        "bot": "¿Cómo quiere recibir plan?",
        "de": "Wie möchten Sie „plan“ erhalten?",
        "answers": [
          {
            "text": "Por correo electrónico, por favor.",
            "next": "end"
          },
          {
            "text": "Una confirmación verbal es suficiente.",
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
    "id": "es02_emociones_trabajo",
    "topic": "Beruf",
    "title": "Über Belastung sprechen",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "¿Cómo se siente con su trabajo?",
        "de": "Wie fühlen Sie sich mit Ihrer Arbeit?",
        "answers": [
          {
            "text": "Necesito ayuda con carga de trabajo.",
            "next": "detalleA"
          },
          {
            "text": "Tengo una pregunta sobre carga de trabajo.",
            "next": "detalleB"
          }
        ]
      },
      "detalleA": {
        "bot": "¿Puede darme más detalles sobre principal preocupación?",
        "de": "Können Sie mehr Einzelheiten zu „principal preocupación“ nennen?",
        "answers": [
          {
            "text": "Sí, el punto principal es principal preocupación.",
            "next": "opcionA"
          },
          {
            "text": "No estoy seguro de principal preocupación.",
            "next": "opcionB"
          }
        ]
      },
      "detalleB": {
        "bot": "¿Qué necesita saber exactamente sobre principal preocupación?",
        "de": "Was möchten Sie genau zu „principal preocupación“ wissen?",
        "answers": [
          {
            "text": "Quiero confirmar principal preocupación.",
            "next": "opcionA"
          },
          {
            "text": "Necesito otra opción para principal preocupación.",
            "next": "opcionB"
          }
        ]
      },
      "opcionA": {
        "bot": "Podemos continuar con apoyo.",
        "de": "Wir können mit „apoyo“ fortfahren.",
        "answers": [
          {
            "text": "Sí, continúe con apoyo.",
            "next": "confirmar"
          },
          {
            "text": "Explíqueme mejor apoyo, por favor.",
            "next": "confirmar"
          }
        ]
      },
      "opcionB": {
        "bot": "También podemos ofrecer una alternativa para apoyo.",
        "de": "Wir können auch eine Alternative für „apoyo“ anbieten.",
        "answers": [
          {
            "text": "La alternativa me parece mejor.",
            "next": "confirmar"
          },
          {
            "text": "Prefiero la primera opción.",
            "next": "confirmar"
          }
        ]
      },
      "confirmar": {
        "bot": "¿Cómo quiere recibir seguimiento?",
        "de": "Wie möchten Sie „seguimiento“ erhalten?",
        "answers": [
          {
            "text": "Por correo electrónico, por favor.",
            "next": "end"
          },
          {
            "text": "Una confirmación verbal es suficiente.",
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
    "id": "es02_emociones_viaje",
    "topic": "Reisen",
    "title": "Reisestress",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "¿Qué le preocupa del viaje?",
        "de": "Was macht Ihnen bei der Reise Sorgen?",
        "answers": [
          {
            "text": "Necesito ayuda con conexión.",
            "next": "detalleA"
          },
          {
            "text": "Tengo una pregunta sobre conexión.",
            "next": "detalleB"
          }
        ]
      },
      "detalleA": {
        "bot": "¿Puede darme más detalles sobre equipaje?",
        "de": "Können Sie mehr Einzelheiten zu „equipaje“ nennen?",
        "answers": [
          {
            "text": "Sí, el punto principal es equipaje.",
            "next": "opcionA"
          },
          {
            "text": "No estoy seguro de equipaje.",
            "next": "opcionB"
          }
        ]
      },
      "detalleB": {
        "bot": "¿Qué necesita saber exactamente sobre equipaje?",
        "de": "Was möchten Sie genau zu „equipaje“ wissen?",
        "answers": [
          {
            "text": "Quiero confirmar equipaje.",
            "next": "opcionA"
          },
          {
            "text": "Necesito otra opción para equipaje.",
            "next": "opcionB"
          }
        ]
      },
      "opcionA": {
        "bot": "Podemos continuar con alternativa.",
        "de": "Wir können mit „alternativa“ fortfahren.",
        "answers": [
          {
            "text": "Sí, continúe con alternativa.",
            "next": "confirmar"
          },
          {
            "text": "Explíqueme mejor alternativa, por favor.",
            "next": "confirmar"
          }
        ]
      },
      "opcionB": {
        "bot": "También podemos ofrecer una alternativa para alternativa.",
        "de": "Wir können auch eine Alternative für „alternativa“ anbieten.",
        "answers": [
          {
            "text": "La alternativa me parece mejor.",
            "next": "confirmar"
          },
          {
            "text": "Prefiero la primera opción.",
            "next": "confirmar"
          }
        ]
      },
      "confirmar": {
        "bot": "¿Cómo quiere recibir confirmación?",
        "de": "Wie möchten Sie „confirmación“ erhalten?",
        "answers": [
          {
            "text": "Por correo electrónico, por favor.",
            "next": "end"
          },
          {
            "text": "Una confirmación verbal es suficiente.",
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
    "id": "es02_restaurante_factura",
    "topic": "Restaurant",
    "title": "Rechnungsfehler",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "¿Qué problema hay con la cuenta?",
        "de": "Welches Problem gibt es mit der Rechnung?",
        "answers": [
          {
            "text": "Necesito ayuda con importe.",
            "next": "detalleA"
          },
          {
            "text": "Tengo una pregunta sobre importe.",
            "next": "detalleB"
          }
        ]
      },
      "detalleA": {
        "bot": "¿Puede darme más detalles sobre artículo incorrecto?",
        "de": "Können Sie mehr Einzelheiten zu „artículo incorrecto“ nennen?",
        "answers": [
          {
            "text": "Sí, el punto principal es artículo incorrecto.",
            "next": "opcionA"
          },
          {
            "text": "No estoy seguro de artículo incorrecto.",
            "next": "opcionB"
          }
        ]
      },
      "detalleB": {
        "bot": "¿Qué necesita saber exactamente sobre artículo incorrecto?",
        "de": "Was möchten Sie genau zu „artículo incorrecto“ wissen?",
        "answers": [
          {
            "text": "Quiero confirmar artículo incorrecto.",
            "next": "opcionA"
          },
          {
            "text": "Necesito otra opción para artículo incorrecto.",
            "next": "opcionB"
          }
        ]
      },
      "opcionA": {
        "bot": "Podemos continuar con cuenta corregida.",
        "de": "Wir können mit „cuenta corregida“ fortfahren.",
        "answers": [
          {
            "text": "Sí, continúe con cuenta corregida.",
            "next": "confirmar"
          },
          {
            "text": "Explíqueme mejor cuenta corregida, por favor.",
            "next": "confirmar"
          }
        ]
      },
      "opcionB": {
        "bot": "También podemos ofrecer una alternativa para cuenta corregida.",
        "de": "Wir können auch eine Alternative für „cuenta corregida“ anbieten.",
        "answers": [
          {
            "text": "La alternativa me parece mejor.",
            "next": "confirmar"
          },
          {
            "text": "Prefiero la primera opción.",
            "next": "confirmar"
          }
        ]
      },
      "confirmar": {
        "bot": "¿Cómo quiere recibir pago?",
        "de": "Wie möchten Sie „pago“ erhalten?",
        "answers": [
          {
            "text": "Por correo electrónico, por favor.",
            "next": "end"
          },
          {
            "text": "Una confirmación verbal es suficiente.",
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
    "id": "es02_hotel_factura",
    "topic": "Hotel",
    "title": "Firmenrechnung",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "¿Qué datos necesita en la factura?",
        "de": "Welche Angaben brauchen Sie auf der Rechnung?",
        "answers": [
          {
            "text": "Necesito ayuda con empresa.",
            "next": "detalleA"
          },
          {
            "text": "Tengo una pregunta sobre empresa.",
            "next": "detalleB"
          }
        ]
      },
      "detalleA": {
        "bot": "¿Puede darme más detalles sobre dirección?",
        "de": "Können Sie mehr Einzelheiten zu „dirección“ nennen?",
        "answers": [
          {
            "text": "Sí, el punto principal es dirección.",
            "next": "opcionA"
          },
          {
            "text": "No estoy seguro de dirección.",
            "next": "opcionB"
          }
        ]
      },
      "detalleB": {
        "bot": "¿Qué necesita saber exactamente sobre dirección?",
        "de": "Was möchten Sie genau zu „dirección“ wissen?",
        "answers": [
          {
            "text": "Quiero confirmar dirección.",
            "next": "opcionA"
          },
          {
            "text": "Necesito otra opción para dirección.",
            "next": "opcionB"
          }
        ]
      },
      "opcionA": {
        "bot": "Podemos continuar con impuestos.",
        "de": "Wir können mit „impuestos“ fortfahren.",
        "answers": [
          {
            "text": "Sí, continúe con impuestos.",
            "next": "confirmar"
          },
          {
            "text": "Explíqueme mejor impuestos, por favor.",
            "next": "confirmar"
          }
        ]
      },
      "opcionB": {
        "bot": "También podemos ofrecer una alternativa para impuestos.",
        "de": "Wir können auch eine Alternative für „impuestos“ anbieten.",
        "answers": [
          {
            "text": "La alternativa me parece mejor.",
            "next": "confirmar"
          },
          {
            "text": "Prefiero la primera opción.",
            "next": "confirmar"
          }
        ]
      },
      "confirmar": {
        "bot": "¿Cómo quiere recibir entrega?",
        "de": "Wie möchten Sie „entrega“ erhalten?",
        "answers": [
          {
            "text": "Por correo electrónico, por favor.",
            "next": "end"
          },
          {
            "text": "Una confirmación verbal es suficiente.",
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
    "id": "es02_medico_resultados",
    "topic": "Gesundheit",
    "title": "Testergebnisse",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "¿Qué análisis se realizó?",
        "de": "Welche Untersuchung wurde gemacht?",
        "answers": [
          {
            "text": "Necesito ayuda con tipo de análisis.",
            "next": "detalleA"
          },
          {
            "text": "Tengo una pregunta sobre tipo de análisis.",
            "next": "detalleB"
          }
        ]
      },
      "detalleA": {
        "bot": "¿Puede darme más detalles sobre resultado?",
        "de": "Können Sie mehr Einzelheiten zu „resultado“ nennen?",
        "answers": [
          {
            "text": "Sí, el punto principal es resultado.",
            "next": "opcionA"
          },
          {
            "text": "No estoy seguro de resultado.",
            "next": "opcionB"
          }
        ]
      },
      "detalleB": {
        "bot": "¿Qué necesita saber exactamente sobre resultado?",
        "de": "Was möchten Sie genau zu „resultado“ wissen?",
        "answers": [
          {
            "text": "Quiero confirmar resultado.",
            "next": "opcionA"
          },
          {
            "text": "Necesito otra opción para resultado.",
            "next": "opcionB"
          }
        ]
      },
      "opcionA": {
        "bot": "Podemos continuar con siguiente paso.",
        "de": "Wir können mit „siguiente paso“ fortfahren.",
        "answers": [
          {
            "text": "Sí, continúe con siguiente paso.",
            "next": "confirmar"
          },
          {
            "text": "Explíqueme mejor siguiente paso, por favor.",
            "next": "confirmar"
          }
        ]
      },
      "opcionB": {
        "bot": "También podemos ofrecer una alternativa para siguiente paso.",
        "de": "Wir können auch eine Alternative für „siguiente paso“ anbieten.",
        "answers": [
          {
            "text": "La alternativa me parece mejor.",
            "next": "confirmar"
          },
          {
            "text": "Prefiero la primera opción.",
            "next": "confirmar"
          }
        ]
      },
      "confirmar": {
        "bot": "¿Cómo quiere recibir cita?",
        "de": "Wie möchten Sie „cita“ erhalten?",
        "answers": [
          {
            "text": "Por correo electrónico, por favor.",
            "next": "end"
          },
          {
            "text": "Una confirmación verbal es suficiente.",
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
    "id": "es02_farmacia_interaccion",
    "topic": "Apotheke",
    "title": "Wechselwirkungen",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "¿Qué medicamentos toma actualmente?",
        "de": "Welche Medikamente nehmen Sie derzeit?",
        "answers": [
          {
            "text": "Necesito ayuda con medicina actual.",
            "next": "detalleA"
          },
          {
            "text": "Tengo una pregunta sobre medicina actual.",
            "next": "detalleB"
          }
        ]
      },
      "detalleA": {
        "bot": "¿Puede darme más detalles sobre nueva receta?",
        "de": "Können Sie mehr Einzelheiten zu „nueva receta“ nennen?",
        "answers": [
          {
            "text": "Sí, el punto principal es nueva receta.",
            "next": "opcionA"
          },
          {
            "text": "No estoy seguro de nueva receta.",
            "next": "opcionB"
          }
        ]
      },
      "detalleB": {
        "bot": "¿Qué necesita saber exactamente sobre nueva receta?",
        "de": "Was möchten Sie genau zu „nueva receta“ wissen?",
        "answers": [
          {
            "text": "Quiero confirmar nueva receta.",
            "next": "opcionA"
          },
          {
            "text": "Necesito otra opción para nueva receta.",
            "next": "opcionB"
          }
        ]
      },
      "opcionA": {
        "bot": "Podemos continuar con interacción.",
        "de": "Wir können mit „interacción“ fortfahren.",
        "answers": [
          {
            "text": "Sí, continúe con interacción.",
            "next": "confirmar"
          },
          {
            "text": "Explíqueme mejor interacción, por favor.",
            "next": "confirmar"
          }
        ]
      },
      "opcionB": {
        "bot": "También podemos ofrecer una alternativa para interacción.",
        "de": "Wir können auch eine Alternative für „interacción“ anbieten.",
        "answers": [
          {
            "text": "La alternativa me parece mejor.",
            "next": "confirmar"
          },
          {
            "text": "Prefiero la primera opción.",
            "next": "confirmar"
          }
        ]
      },
      "confirmar": {
        "bot": "¿Cómo quiere recibir dosis?",
        "de": "Wie möchten Sie „dosis“ erhalten?",
        "answers": [
          {
            "text": "Por correo electrónico, por favor.",
            "next": "end"
          },
          {
            "text": "Una confirmación verbal es suficiente.",
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
    "id": "es02_trabajo_presupuesto",
    "topic": "Beruf",
    "title": "Budget prüfen",
    "level": "A2-B1",
    "start": "start",
    "nodes": {
      "start": {
        "bot": "¿Cuál es el problema con el presupuesto?",
        "de": "Welches Problem gibt es mit dem Budget?",
        "answers": [
          {
            "text": "Necesito ayuda con gasto actual.",
            "next": "detalleA"
          },
          {
            "text": "Tengo una pregunta sobre gasto actual.",
            "next": "detalleB"
          }
        ]
      },
      "detalleA": {
        "bot": "¿Puede darme más detalles sobre desviación?",
        "de": "Können Sie mehr Einzelheiten zu „desviación“ nennen?",
        "answers": [
          {
            "text": "Sí, el punto principal es desviación.",
            "next": "opcionA"
          },
          {
            "text": "No estoy seguro de desviación.",
            "next": "opcionB"
          }
        ]
      },
      "detalleB": {
        "bot": "¿Qué necesita saber exactamente sobre desviación?",
        "de": "Was möchten Sie genau zu „desviación“ wissen?",
        "answers": [
          {
            "text": "Quiero confirmar desviación.",
            "next": "opcionA"
          },
          {
            "text": "Necesito otra opción para desviación.",
            "next": "opcionB"
          }
        ]
      },
      "opcionA": {
        "bot": "Podemos continuar con ahorro.",
        "de": "Wir können mit „ahorro“ fortfahren.",
        "answers": [
          {
            "text": "Sí, continúe con ahorro.",
            "next": "confirmar"
          },
          {
            "text": "Explíqueme mejor ahorro, por favor.",
            "next": "confirmar"
          }
        ]
      },
      "opcionB": {
        "bot": "También podemos ofrecer una alternativa para ahorro.",
        "de": "Wir können auch eine Alternative für „ahorro“ anbieten.",
        "answers": [
          {
            "text": "La alternativa me parece mejor.",
            "next": "confirmar"
          },
          {
            "text": "Prefiero la primera opción.",
            "next": "confirmar"
          }
        ]
      },
      "confirmar": {
        "bot": "¿Cómo quiere recibir aprobación?",
        "de": "Wie möchten Sie „aprobación“ erhalten?",
        "answers": [
          {
            "text": "Por correo electrónico, por favor.",
            "next": "end"
          },
          {
            "text": "Una confirmación verbal es suficiente.",
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
ES_BRANCHING_SCENARIOS_151.push(...ES_BRANCHING_SCENARIOS_02);
