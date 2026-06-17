import type { Unit } from "../../types";

export const UNIT_HOTEL: Unit = {
  slug: "hotel",
  stage: 3,
  order: 12,
  icon: "🏨",
  title: "Airport & hotel",
  tagline: "Check-in, reservas, vocab de habitación, reclamaciones.",
  lessons: [
    {
      slug: "hotel-checkin",
      title: "Checking in",
      estMinutes: 11,
      pages: [
        {
          type: "intro",
          heading: "The check-in script (you'll repeat it every trip)",
          body: [
            "<em>«Tengo una reserva a nombre de [tu apellido].»</em> = I have a reservation in the name of [your surname]. This is the line that opens every check-in.",
            "Spanish hotels need your <strong>passport or DNI</strong>: <em>«¿Me deja su documento, por favor?»</em> They register guests with the police — it's required by law, so don't worry when they keep it for a few minutes.",
            "Questions you'll hear back: <em>«¿Cuántas noches?» «¿Habitación doble o individual?» «¿El desayuno incluido?»</em>",
            "Handy answers: <em>«Tres noches, hasta el domingo.» «Una doble, por favor.» «Sí, con desayuno.»</em>",
          ],
          keyPoint:
            "1) Give your name. 2) Hand over your passport/DNI. 3) Confirm nights and room type. 4) Take the key. 5) Ask about breakfast and wifi.",
        },
        {
          type: "vocab",
          heading: "Hotel vocabulary",
          items: [
            { l1: "la habitación", en: "the room" },
            { l1: "la habitación doble / individual", en: "double / single room" },
            { l1: "la reserva", en: "the reservation/booking" },
            { l1: "el desayuno (incluido)", en: "breakfast (included)" },
            { l1: "la llave / la tarjeta-llave", en: "the key / key card" },
            { l1: "la recepción", en: "the reception desk" },
            { l1: "el ascensor", en: "the lift/elevator" },
            { l1: "la piscina", en: "the swimming pool" },
            { l1: "el equipaje", en: "the luggage" },
            { l1: "el aparcamiento", en: "the car park" },
          ],
        },
        {
          type: "vocab",
          heading: "Check-in phrases",
          items: [
            { l1: "Tengo una reserva a nombre de…", en: "I have a reservation in the name of…" },
            { l1: "¿Puede darme una habitación con vistas?", en: "Can you give me a room with a view?" },
            { l1: "¿A qué hora es el check-out?", en: "What time is check-out?" },
            { l1: "¿El desayuno está incluido?", en: "Is breakfast included?" },
            { l1: "¿Puede llamarme a las siete?", en: "Can you call me at seven? (wake-up call)" },
            { l1: "Necesito más toallas.", en: "I need more towels." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Hotel check",
          questions: [
            {
              q: "How do you say you have a reservation?",
              options: ["Quiero una habitación", "Tengo una reserva a nombre de…", "Necesito un cuarto", "Me gustaría quedarme"],
              correct: 1,
              fb: "Tengo una reserva a nombre de… = I have a reservation in the name of…",
            },
            {
              q: "'¿El desayuno está incluido?' means…",
              options: ["When is breakfast?", "Is breakfast included?", "Where is breakfast?", "I'd like breakfast"],
              correct: 1,
              fb: "¿Está incluido? = is it included? A key question to ask at check-in.",
            },
          ],
        },
        {
          type: "fillBlank",
          heading: "Complete the check-in",
          items: [
            {
              template: "Tengo una ___ a nombre de García.",
              answer: "reserva",
              en: "I have a reservation in the name of García.",
              options: ["reserva", "habitación", "llave", "factura"],
            },
            {
              template: "Quería una habitación ___ con baño.",
              answer: "doble",
              en: "I wanted a double room with a bathroom.",
              options: ["doble", "limpia", "incluida", "barata"],
            },
            {
              template: "¿A qué hora es la ___ ?",
              answer: "salida",
              en: "What time is check-out?",
              options: ["salida", "entrada", "llave", "piscina"],
            },
            {
              template: "¿Puedo pagar con ___ ?",
              answer: "tarjeta",
              en: "Can I pay by card?",
              options: ["tarjeta", "llave", "reserva", "ascensor"],
            },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the check-in line",
          items: [
            { tokens: ["Tengo", "una", "reserva", "a", "nombre", "de", "García"], en: "I have a reservation in the name of García." },
            { tokens: ["¿", "Tiene", "wifi", "en", "las", "habitaciones", "?"], en: "Is there wifi in the rooms?" },
            { tokens: ["Quería", "una", "habitación", "doble", ",", "por", "favor"], en: "I'd like a double room, please." },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "I have a reservation in the name of Smith, for two nights.",
          reference: "Tengo una reserva a nombre de Smith, para dos noches.",
          hint: "a nombre de = in the name of. 'For two nights' = para dos noches.",
        },
      ],
    },
    {
      slug: "hotel-problems",
      title: "Problems and requests",
      estMinutes: 10,
      pages: [
        {
          type: "intro",
          heading: "How to complain politely in Spain",
          body: [
            "Spaniards are direct but still cushion complaints. The friendly opener is <em>«Perdone, pero…»</em> + the problem.",
            "<em>«Perdone, pero el aire acondicionado no funciona.»</em> = Excuse me, but the air conditioning isn't working.",
            "Soften a request with <em>«¿Sería posible…?»</em> (Would it be possible…?) or <em>«¿Podría…?»</em> (Could you…?) instead of a flat <em>«Quiero…»</em> (I want…).",
            "If it's serious, you can ask: <em>«Quería poner una queja»</em> = I'd like to make a complaint. Hotels keep an official complaint form: <em>«las hojas de reclamaciones»</em>.",
          ],
          keyPoint:
            "Open with 'Perdone, pero…', describe the problem, then soften the fix with '¿Sería posible…?' or '¿Podría…?'. Never just demand.",
        },
        {
          type: "vocab",
          heading: "Reporting problems",
          items: [
            { l1: "No funciona el aire acondicionado.", en: "The air conditioning doesn't work." },
            { l1: "La habitación no está limpia.", en: "The room isn't clean." },
            { l1: "Hay ruido en la habitación de al lado.", en: "There's noise from the next room." },
            { l1: "¿Puede cambiarme de habitación?", en: "Can you change my room?" },
            { l1: "Me han cobrado de más.", en: "I've been overcharged." },
            { l1: "¿Dónde puedo dejar el equipaje?", en: "Where can I leave my luggage?" },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Final check",
          questions: [
            {
              q: "How do you say 'The air conditioning doesn't work'?",
              options: ["El AC está mal", "No funciona el aire acondicionado", "El frío no funciona", "No hay frío"],
              correct: 1,
              fb: "No funciona = doesn't work. El aire acondicionado = the air conditioning.",
            },
            {
              q: "'Me han cobrado de más' means…",
              options: ["I was charged less", "I've been overcharged", "My bill is missing", "I need to pay more"],
              correct: 1,
              fb: "Cobrar = to charge. De más = too much. Me han cobrado de más = I've been overcharged.",
            },
          ],
        },
        {
          type: "dialogue",
          heading: "Reporting an issue at reception",
          setup: "You go down to reception late in the evening.",
          lines: [
            { speaker: "Guest", l1: "Buenas noches. Perdone que le moleste, pero hay un problema en mi habitación.", en: "Good evening. Sorry to bother you, but there's a problem in my room." },
            { speaker: "Receptionist", l1: "Dígame, ¿qué ocurre?", en: "Tell me, what's wrong?" },
            { speaker: "Guest", l1: "El aire acondicionado no funciona y hace mucho calor. ¿Sería posible cambiarme de habitación?", en: "The air conditioning isn't working and it's very hot. Would it be possible to change my room?" },
            { speaker: "Receptionist", l1: "Por supuesto. Le doy la 215, que está libre. Aquí tiene la nueva llave.", en: "Of course. I'll give you room 215, which is free. Here's the new key." },
            { speaker: "Guest", l1: "Muchas gracias. ¿Me podrían subir el equipaje?", en: "Thank you very much. Could you bring up my luggage?" },
            { speaker: "Receptionist", l1: "Ahora mismo se lo subimos. Disculpe las molestias.", en: "We'll bring it up right away. Sorry for the inconvenience." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Polite complaint patterns",
          items: [
            {
              template: "Perdone, pero la habitación no está ___ .",
              answer: "limpia",
              en: "Excuse me, but the room isn't clean.",
              options: ["limpia", "incluida", "libre", "doble"],
            },
            {
              template: "No hay agua ___ en la ducha.",
              answer: "caliente",
              en: "There's no hot water in the shower.",
              options: ["caliente", "fría", "limpia", "buena"],
            },
            {
              template: "¿Sería posible ___ de habitación?",
              answer: "cambiarme",
              en: "Would it be possible to change my room?",
              options: ["cambiarme", "pagar", "salir", "limpiar"],
            },
            {
              template: "El televisor no ___ .",
              answer: "funciona",
              en: "The television doesn't work.",
              options: ["funciona", "incluye", "limpia", "abre"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Excuse me, but the heating isn't working and it's very cold.",
          reference: "Perdone, pero la calefacción no funciona y hace mucho frío.",
          hint: "Heating = la calefacción. 'It's very cold' uses hacer → hace mucho frío.",
        },
        {
          type: "tip",
          heading: "Tipping in Spain",
          body: "Tipping at hotels is modest and optional. A euro or two for the porter who carries your bags, and a euro a day for housekeeping (leave it on the pillow) is generous. At checkout, if the stay was great, a warm <em>«Todo ha sido perfecto, muchas gracias»</em> goes a long way — and a good online review even further.",
          example: { l1: "Todo ha sido perfecto, muchas gracias.", en: "Everything was perfect, thank you very much." },
        },
      ],
    },
    {
      slug: "hotel-full-conversation",
      title: "A complete hotel check-in",
      estMinutes: 9,
      pages: [
        {
          type: "dialogue",
          heading: "Checking in at the hotel",
          lines: [
            { speaker: "Guest", l1: "Buenas tardes. Tengo una reserva a nombre de Johnson.", en: "Good afternoon. I have a reservation in the name of Johnson." },
            { speaker: "Receptionist", l1: "Sí, señor Johnson. Una habitación doble para tres noches.", en: "Yes, Mr Johnson. A double room for three nights." },
            { speaker: "Guest", l1: "Correcto. ¿Está incluido el desayuno?", en: "Correct. Is breakfast included?" },
            { speaker: "Receptionist", l1: "Sí, el desayuno se sirve de siete a diez.", en: "Yes, breakfast is served from seven to ten." },
            { speaker: "Guest", l1: "¿Y hay wifi en las habitaciones?", en: "And is there wifi in the rooms?" },
            { speaker: "Receptionist", l1: "Sí, gratuito. Aquí tiene su llave. Habitación 304, tercera planta.", en: "Yes, free of charge. Here is your key. Room 304, third floor." },
          ],
        },
        {
          type: "vocab",
          heading: "Hotel amenities",
          items: [
            { l1: "el wifi / la conexión a internet", en: "wifi / internet connection" },
            { l1: "el servicio de habitaciones", en: "room service" },
            { l1: "la caja fuerte", en: "the safe (in the room)" },
            { l1: "la lavandería", en: "the laundry service" },
            { l1: "el gimnasio", en: "the gym" },
            { l1: "¿Tiene servicio de recogida en el aeropuerto?", en: "Do you have an airport pickup service?" },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Hotel check",
          questions: [
            {
              q: "'El desayuno se sirve de siete a diez' means…",
              options: ["Breakfast costs between 7 and 10 euros", "Breakfast is served from 7 to 10", "Breakfast is on the 7th to 10th floor", "Breakfast is at room 7 to 10"],
              correct: 1,
              fb: "Servirse = to be served. De siete a diez = from seven to ten (time).",
            },
            {
              q: "'La caja fuerte' in a hotel room is…",
              options: ["The minibar", "The strong box / safe", "The wardrobe", "The balcony"],
              correct: 1,
              fb: "La caja fuerte = the safe. Caja = box, fuerte = strong/safe.",
            },
          ],
        },
        {
          type: "orderWords",
          heading: "Put the questions in order",
          items: [
            { tokens: ["¿", "A", "qué", "hora", "es", "la", "salida", "?"], en: "What time is check-out?" },
            { tokens: ["¿", "El", "desayuno", "está", "incluido", "?"], en: "Is breakfast included?" },
            { tokens: ["¿", "Me", "puede", "dar", "la", "contraseña", "del", "wifi", "?"], en: "Can you give me the wifi password?" },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Is breakfast included, and what time is check-out?",
          reference: "¿El desayuno está incluido, y a qué hora es la salida?",
          hint: "Check-out = la salida. Remember the inverted ¿ at the start of the question.",
        },
      ],
    }
  ],
  checkpoint: {
    passingPct: 80,
    questions: [
      { q: "'La habitación' means…", options: ["the hotel", "the room", "the key", "the reception"], correct: 1 },
      { q: "How do you say you have a reservation?", options: ["Quiero una habitación", "Tengo una reserva a nombre de…", "Necesito quedarme", "Quisiera una llave"], correct: 1 },
      { q: "'¿El desayuno está incluido?' means…", options: ["When is breakfast?", "Where is breakfast?", "Is breakfast included?", "I want breakfast"], correct: 2 },
      { q: "'El ascensor' is…", options: ["the pool", "the car park", "the lift/elevator", "the reception"], correct: 2 },
      { q: "How do you say 'the room isn't clean'?", options: ["La habitación no está libre", "La habitación no está limpia", "La habitación está ocupada", "La habitación es sucia"], correct: 1 },
      { q: "'No funciona' means…", options: ["It's not here", "It doesn't work", "It's not clean", "It's not included"], correct: 1 },
      { q: "'Me han cobrado de más' means…", options: ["The bill is ready", "I've been overcharged", "I need to pay now", "I paid less"], correct: 1 },
      { q: "How do you ask for a wake-up call at 7?", options: ["¿Puedo despertar a las siete?", "¿Puede llamarme a las siete?", "¿Hay alarma a las siete?", "Necesito levantarme a las siete"], correct: 1 },
      { q: "'La reserva' means…", options: ["the key", "the room", "the reservation", "the deposit"], correct: 2 },
      { q: "How do you ask for more towels?", options: ["Quiero más toallas", "Necesito más toallas", "Hay más toallas?", "Deme más toallas"], correct: 1 },
    ],
  },
};
