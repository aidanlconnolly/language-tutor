import type { Unit } from "../../types";

export const UNIT_TRANSIT: Unit = {
  slug: "transit",
  stage: 3,
  order: 10,
  icon: "🚇",
  title: "Getting around",
  tagline: "Metro, autobús, Cercanías, billetes, validar.",
  badge: "tourist",
  lessons: [
    {
      slug: "transit-metro",
      title: "The metro and buses",
      estMinutes: 10,
      pages: [
        {
          type: "intro",
          heading: "Madrid's transport network",
          body: [
            "Madrid has an excellent metro (13 lines), an extensive bus network, and the Cercanías commuter rail. For tourists, the metro is simplest. Buy a <em>tarjeta de transporte</em> (travel card) or individual <em>billetes sencillos</em> (single tickets) at any metro station.",
            "Key vocabulary: <em>el metro</em> (underground), <em>el autobús / el bus</em> (bus), <em>el tren</em> (train), <em>la parada</em> (stop/station), <em>la línea</em> (line), <em>el andén</em> (platform).",
          ],
          keyPoint:
            "Metro = 13 lines, fastest. Autobús = slower but reaches everything. Cercanías = commuter trains to the suburbs and the airport.",
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
          type: "tip",
          heading: "Tap your card before you board",
          body: "In Madrid the single ticket lives on a rechargeable <em>Tarjeta Multi</em> (or your contactless card). You <strong>validar</strong> (tap) it on the turnstile reader before going down to the <em>andén</em>, and again on the reader when you board a <em>Cercanías</em> train. No valid tap can mean a fine from the <em>revisor</em> (inspector).",
          example: { l1: "¿Tengo que validar el billete antes de subir?", en: "Do I have to validate the ticket before boarding?" },
        },
        {
          type: "vocab",
          heading: "Ticket types in Madrid",
          intro: "What you'll see on the vending machine and at the counter.",
          items: [
            { l1: "un billete sencillo", en: "a single ticket (one journey)" },
            { l1: "un billete de ida y vuelta", en: "a return ticket (there and back)" },
            { l1: "un bono de diez viajes", en: "a 10-journey pass" },
            { l1: "un abono mensual", en: "a monthly travel pass" },
            { l1: "la Tarjeta Multi", en: "the rechargeable transport card" },
            { l1: "recargar la tarjeta", en: "to top up / recharge the card" },
            { l1: "la zona A", en: "zone A (central Madrid)" },
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
            {
              q: "What is 'un abono mensual'?",
              options: ["a single ticket", "a return ticket", "a monthly travel pass", "a 10-journey pass"],
              correct: 2,
              fb: "Un abono = a season pass. Un abono mensual = a monthly pass (unlimited travel for a month).",
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Where is the nearest metro station?",
          reference: "¿Dónde está la estación de metro más cercana?",
          hint: "'nearest' = más cercana (agrees with the feminine estación).",
        },
      ],
    },
    {
      slug: "transit-taxis",
      title: "Taxis and asking the way",
      estMinutes: 9,
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
          type: "dialogue",
          heading: "Asking the way on the street",
          setup: "You're lost near Gran Vía and stop a passer-by to find the nearest metro.",
          lines: [
            { speaker: "Tú", l1: "Perdone, ¿cómo llego a la Puerta del Sol?", en: "Excuse me, how do I get to Puerta del Sol?" },
            { speaker: "Señor", l1: "Está muy cerca. Siga recto y la primera parada de metro es Gran Vía.", en: "It's very close. Go straight and the first metro stop is Gran Vía." },
            { speaker: "Tú", l1: "¿Y qué línea cojo?", en: "And which line do I take?" },
            { speaker: "Señor", l1: "La línea uno, dirección Valdecarros. Es solo una parada.", en: "Line one, towards Valdecarros. It's only one stop." },
            { speaker: "Tú", l1: "Muchas gracias, muy amable.", en: "Thank you very much, that's very kind." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Complete the taxi phrases",
          intro: "Choose the word that fits.",
          items: [
            {
              template: "¿Puede ___ al aeropuerto, por favor?",
              answer: "llevarme",
              en: "Can you take me to the airport, please?",
              options: ["llevarme", "llegar", "parar", "coger"],
            },
            {
              template: "¿Puede poner el ___, por favor?",
              answer: "taxímetro",
              en: "Can you turn on the meter, please?",
              options: ["billete", "taxímetro", "andén", "cambio"],
            },
            {
              template: "___ aquí, por favor.",
              answer: "Pare",
              en: "Stop here, please.",
              options: ["Pare", "Para", "Parar", "Paro"],
            },
            {
              template: "Quédese con el ___.",
              answer: "cambio",
              en: "Keep the change.",
              options: ["cambio", "billete", "dinero", "taxímetro"],
            },
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
            {
              q: "'¿Cómo llego a…?' means…",
              options: ["When do I arrive at…?", "How do I get to…?", "Where is…?", "How much to…?"],
              correct: 1,
              fb: "¿Cómo llego a…? = How do I get to…? — the go-to phrase for asking directions.",
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Can you take me to the airport, please?",
          reference: "¿Puede llevarme al aeropuerto, por favor?",
          hint: "Formal 'can you' = ¿Puede…?; a + el contracts to 'al'.",
        },
      ],
    },
    {
      slug: "transit-full-journey",
      title: "Planning and making a journey",
      estMinutes: 9,
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
          type: "conjugation",
          heading: "coger — to take (transport)",
          verb: "coger",
          meaning: "to take / catch (a bus, the metro, a train)",
          intro: "In Spain 'coger el metro / el autobús' is the everyday way to say you take a line. Present tense:",
          tenses: [
            {
              name: "Presente",
              forms: [
                { person: "yo", form: "cojo", en: "I take" },
                { person: "tú", form: "coges", en: "you take" },
                { person: "él/ella/usted", form: "coge", en: "he/she takes, you (formal) take" },
                { person: "nosotros", form: "cogemos", en: "we take" },
                { person: "vosotros", form: "cogéis", en: "you all take" },
                { person: "ellos/ellas/ustedes", form: "cogen", en: "they / you all take" },
              ],
            },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the journey questions",
          intro: "Put the words in order.",
          items: [
            { tokens: ["¿", "Cómo", "llego", "a", "la", "estación", "?"], en: "How do I get to the station?" },
            { tokens: ["¿", "Tengo", "que", "hacer", "trasbordo", "?"], en: "Do I have to change (transfer)?" },
            { tokens: ["Cojo", "la", "línea", "dos", "dirección", "Las", "Rosas"], en: "I take line two towards Las Rosas." },
            { tokens: ["¿", "Cuánto", "tarda", "el", "tren", "hasta", "Atocha", "?"], en: "How long does the train take to Atocha?" },
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
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Take line one towards Atocha. It's four stops.",
          reference: "Coge la línea uno dirección Atocha. Son cuatro paradas.",
          hint: "Informal command 'take' = coge; 'it's four stops' = son cuatro paradas.",
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
