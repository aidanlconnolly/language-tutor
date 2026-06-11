import type { Unit } from "../../types";

export const UNIT_TRANSIT: Unit = {
  slug: "transit",
  stage: 3,
  order: 10,
  icon: "🚇",
  title: "Getting around",
  tagline: "Metro, autobús, Cercanías, billetes, validar.",
  lessons: [
    {
      slug: "transit-metro",
      title: "The metro and buses",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Madrid's transport network",
          body: [
            "Madrid has an excellent metro (13 lines), an extensive bus network, and the Cercanías commuter rail. For tourists, the metro is simplest. Buy a <em>tarjeta de transporte</em> (travel card) or individual <em>billetes sencillos</em> (single tickets) at any metro station.",
            "Key vocabulary: <em>el metro</em> (underground), <em>el autobús / el bus</em> (bus), <em>el tren</em> (train), <em>la parada</em> (stop/station), <em>la línea</em> (line), <em>el andén</em> (platform).",
          ],
        },
        {
          type: "vocab",
          heading: "Transport vocabulary",
          items: [
            { l1: "el metro", en: "the underground/metro" },
            { l1: "el autobús / el bus", en: "the bus" },
            { l1: "el tren", en: "the train" },
            { l1: "el taxi", en: "the taxi" },
            { l1: "la parada", en: "the bus/metro stop" },
            { l1: "la estación", en: "the station" },
            { l1: "el andén", en: "the platform" },
            { l1: "el billete / el ticket", en: "the ticket" },
            { l1: "la tarjeta de transporte", en: "the travel card" },
            { l1: "validar el billete", en: "to validate the ticket" },
          ],
        },
        {
          type: "vocab",
          heading: "Useful phrases at the station",
          items: [
            { l1: "¿Dónde está la estación de metro?", en: "Where is the metro station?" },
            { l1: "Un billete sencillo, por favor.", en: "A single ticket, please." },
            { l1: "¿Cuánto cuesta el billete?", en: "How much is the ticket?" },
            { l1: "¿En qué línea voy a Sol?", en: "Which line do I take to Sol?" },
            { l1: "¿Tengo que hacer trasbordo?", en: "Do I need to change (transfer)?" },
            { l1: "¿Cuál es la próxima parada?", en: "What is the next stop?" },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Transport check",
          questions: [
            {
              q: "What is 'la parada'?",
              options: ["the platform", "the stop/station", "the ticket", "the line"],
              correct: 1,
              fb: "La parada = the stop. Can refer to a bus stop or metro station stop.",
            },
            {
              q: "How do you ask 'Do I need to change trains?'",
              options: ["¿Tengo que cambiar?", "¿Tengo que hacer trasbordo?", "¿Necesito un tren nuevo?", "Both A and B"],
              correct: 3,
              fb: "Both work. Hacer trasbordo is the specific transit term; cambiar (de tren/metro) is also used.",
            },
          ],
        },
      ],
    },
    {
      slug: "transit-taxis",
      title: "Taxis and asking the way",
      estMinutes: 7,
      pages: [
        {
          type: "vocab",
          heading: "Taxi vocabulary",
          items: [
            { l1: "¿Puede llevarme a…?", en: "Can you take me to…?" },
            { l1: "Al aeropuerto, por favor.", en: "To the airport, please." },
            { l1: "¿Cuánto es hasta…?", en: "How much is it to…?" },
            { l1: "Pare aquí, por favor.", en: "Stop here, please." },
            { l1: "¿Puede poner el taxímetro?", en: "Can you turn on the meter?" },
            { l1: "Quédese con el cambio.", en: "Keep the change." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Final check",
          questions: [
            {
              q: "How do you tell a taxi driver to stop?",
              options: ["Para aquí", "Pare aquí, por favor", "Parar aquí", "Stop here"],
              correct: 1,
              fb: "Pare (formal imperative of parar) = stop. Pare aquí, por favor.",
            },
            {
              q: "'Quédese con el cambio' means…",
              options: ["Change here", "Keep the change", "I need change", "The meter change"],
              correct: 1,
              fb: "Quédese = keep (formal imperative). El cambio = the change (money). Keep the change.",
            },
          ],
        },
      ],
    },
    {
      slug: "transit-full-journey",
      title: "Planning and making a journey",
      estMinutes: 7,
      pages: [
        {
          type: "dialogue",
          heading: "Buying a metro ticket",
          lines: [
            { speaker: "Tourist", l1: "Perdona, ¿cómo puedo ir a la estación de Atocha?", en: "Excuse me, how can I get to Atocha station?" },
            { speaker: "Local", l1: "Coge la línea uno dirección Vallecas. Son cuatro paradas.", en: "Take line one towards Vallecas. It's four stops." },
            { speaker: "Tourist", l1: "¿Y tengo que hacer algún trasbordo?", en: "And do I need to change?" },
            { speaker: "Local", l1: "No, es directo. Tarda unos ocho minutos.", en: "No, it's direct. It takes about eight minutes." },
            { speaker: "Tourist", l1: "Perfecto. Muchas gracias.", en: "Perfect. Many thanks." },
          ],
        },
        {
          type: "vocab",
          heading: "Reading transport signs",
          items: [
            { l1: "Dirección / Destino", en: "Direction / Destination" },
            { l1: "Próxima parada", en: "Next stop" },
            { l1: "Fin de línea", en: "End of the line" },
            { l1: "Transbordo", en: "Transfer / change" },
            { l1: "Última parada", en: "Last stop" },
            { l1: "Salida de emergencia", en: "Emergency exit" },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Journey planning",
          questions: [
            {
              q: "'Coge la línea uno' means…",
              options: ["The line one is closed", "Take line one", "Line one is next", "Change to line one"],
              correct: 1,
              fb: "Coger (Spain) = to take. Coge la línea uno = take line one.",
            },
            {
              q: "'Fin de línea' means…",
              options: ["Change here", "Exit here", "End of the line", "Wait here"],
              correct: 2,
              fb: "Fin = end. Fin de línea = end of the line. The train terminates here.",
            },
          ],
        },
      ],
    }
  ],
  checkpoint: {
    passingPct: 80,
    questions: [
      { q: "'La parada' means…", options: ["the platform", "the stop", "the ticket", "the line"], correct: 1 },
      { q: "'El andén' means…", options: ["the stop", "the station", "the platform", "the line"], correct: 2 },
      { q: "How do you ask 'Which line goes to Sol?'", options: ["¿Dónde está Sol?", "¿En qué línea voy a Sol?", "¿Cuándo va a Sol?", "¿Cómo voy?"], correct: 1 },
      { q: "'Un billete sencillo' is…", options: ["A monthly pass", "A return ticket", "A single ticket", "A travel card"], correct: 2 },
      { q: "To ask if you need to change, you say…", options: ["¿Tengo que hacer trasbordo?", "¿Necesito cambiar dinero?", "¿Hay una parada?", "¿Cuánto cuesta?"], correct: 0 },
      { q: "'Validar el billete' means…", options: ["Buy the ticket", "Validate/stamp the ticket", "Return the ticket", "Lose the ticket"], correct: 1 },
      { q: "How do you tell a taxi 'To the airport'?", options: ["Para el aeropuerto", "Al aeropuerto, por favor", "Aeropuerto ir", "Vamos aeropuerto"], correct: 1 },
      { q: "'Quédese con el cambio' means…", options: ["Change here", "Keep the change", "Give me change", "The meter"], correct: 1 },
      { q: "The Cercanías is…", options: ["Madrid's metro", "A commuter rail network", "A bus company", "A taxi service"], correct: 1 },
      { q: "'¿Cuál es la próxima parada?' means…", options: ["How much is the next stop?", "What is the next stop?", "When is the next stop?", "Where is the next stop?"], correct: 1 },
    ],
  },
};
