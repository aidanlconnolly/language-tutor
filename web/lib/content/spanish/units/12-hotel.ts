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
      estMinutes: 8,
      pages: [
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
      ],
    },
    {
      slug: "hotel-problems",
      title: "Problems and requests",
      estMinutes: 7,
      pages: [
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
      ],
    },
    {
      slug: "hotel-full-conversation",
      title: "A complete hotel check-in",
      estMinutes: 7,
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
