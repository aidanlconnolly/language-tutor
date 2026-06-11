import type { Unit } from "../../types";

export const UNIT_HELP: Unit = {
  slug: "help",
  stage: 3,
  order: 13,
  icon: "🆘",
  title: "Emergencies & help",
  tagline: "Farmacia, urgencias, ¿puede ayudarme?",
  lessons: [
    {
      slug: "help-emergency",
      title: "Emergency phrases",
      estMinutes: 8,
      pages: [
        {
          type: "vocab",
          heading: "Emergency vocabulary",
          items: [
            { l1: "¡Ayuda!", en: "Help!" },
            { l1: "¡Llame a la policía!", en: "Call the police!" },
            { l1: "¡Llame a una ambulancia!", en: "Call an ambulance!" },
            { l1: "¡Fuego!", en: "Fire!" },
            { l1: "Me han robado.", en: "I've been robbed." },
            { l1: "He perdido mi pasaporte.", en: "I've lost my passport." },
            { l1: "Necesito un médico.", en: "I need a doctor." },
            { l1: "Estoy herido/a.", en: "I'm injured." },
          ],
        },
        {
          type: "vocab",
          heading: "Medical and pharmacy",
          items: [
            { l1: "la farmacia", en: "the pharmacy" },
            { l1: "el hospital", en: "the hospital" },
            { l1: "las urgencias", en: "A&E / emergency room" },
            { l1: "Me duele la cabeza.", en: "I have a headache. (lit. my head hurts me)" },
            { l1: "Me duele el estómago.", en: "I have a stomachache." },
            { l1: "Tengo fiebre.", en: "I have a fever." },
            { l1: "Soy alérgico/a a…", en: "I'm allergic to…" },
            { l1: "¿Puede darme algo para…?", en: "Can you give me something for…?" },
          ],
        },
        {
          type: "tip",
          heading: "Doler — to hurt (gustar pattern)",
          body: "<em>Doler</em> works like gustar: the part that hurts is the subject. Me duele la cabeza = my head hurts me. Me duelen los pies = my feet hurt (plural → duelen).",
          example: { l1: "Me duelen los pies.", en: "My feet hurt. (duelen, because pies is plural)" },
        },
        {
          type: "multipleChoice",
          heading: "Emergency check",
          questions: [
            {
              q: "How do you say 'I've been robbed'?",
              options: ["He robado", "Me han robado", "Estoy robado", "He perdido algo"],
              correct: 1,
              fb: "Me han robado = I've been robbed (literally 'they have robbed me').",
            },
            {
              q: "'Me duelen los pies' means…",
              options: ["My foot hurts", "My feet hurt", "I have a headache", "I'm tired"],
              correct: 1,
              fb: "Pies (feet) is plural → duelen. Me duelen los pies.",
            },
          ],
        },
      ],
    },
    {
      slug: "help-lost",
      title: "When you're lost or need help",
      estMinutes: 6,
      pages: [
        {
          type: "vocab",
          heading: "Getting help",
          items: [
            { l1: "¿Puede ayudarme?", en: "Can you help me?" },
            { l1: "No entiendo.", en: "I don't understand." },
            { l1: "¿Puede repetir más despacio?", en: "Can you repeat more slowly?" },
            { l1: "No hablo bien español.", en: "I don't speak Spanish well." },
            { l1: "¿Habla inglés?", en: "Do you speak English?" },
            { l1: "Me he perdido.", en: "I'm lost." },
            { l1: "¿Dónde está la embajada?", en: "Where is the embassy?" },
            { l1: "Necesito hacer una llamada.", en: "I need to make a call." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Final check",
          questions: [
            {
              q: "How do you say 'I'm lost'?",
              options: ["Estoy perdido", "Me he perdido", "No sé dónde estoy", "All of the above"],
              correct: 3,
              fb: "All three work. Me he perdido (I've gotten lost) is the most natural; Estoy perdido also works.",
            },
            {
              q: "'¿Puede repetir más despacio?' means…",
              options: ["Can you speak louder?", "Can you repeat more slowly?", "Can you write it down?", "Can you translate?"],
              correct: 1,
              fb: "Más despacio = more slowly. ¿Puede repetir más despacio? is essential for beginners.",
            },
          ],
        },
      ],
    },
    {
      slug: "help-pharmacy",
      title: "At the pharmacy",
      estMinutes: 7,
      pages: [
        {
          type: "dialogue",
          heading: "Getting help at a pharmacy",
          lines: [
            { speaker: "You", l1: "Buenos días. Me duele la cabeza. ¿Qué me recomienda?", en: "Good morning. I have a headache. What do you recommend?" },
            { speaker: "Pharmacist", l1: "¿Hace cuánto le duele?", en: "How long has it been hurting?" },
            { speaker: "You", l1: "Desde esta mañana. También tengo un poco de fiebre.", en: "Since this morning. I also have a slight fever." },
            { speaker: "Pharmacist", l1: "Le doy ibuprofeno. Tome uno cada ocho horas con comida.", en: "I'll give you ibuprofen. Take one every eight hours with food." },
            { speaker: "You", l1: "¿Puedo tomarlo con el estómago vacío?", en: "Can I take it on an empty stomach?" },
            { speaker: "Pharmacist", l1: "Mejor no. Siempre con comida.", en: "Better not. Always with food." },
          ],
        },
        {
          type: "vocab",
          heading: "Medical vocabulary",
          items: [
            { l1: "el ibuprofeno / el paracetamol", en: "ibuprofen / paracetamol" },
            { l1: "una receta", en: "a prescription" },
            { l1: "con/sin receta", en: "prescription-only / over the counter" },
            { l1: "cada ocho horas", en: "every eight hours" },
            { l1: "con el estómago vacío", en: "on an empty stomach" },
            { l1: "los efectos secundarios", en: "the side effects" },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Pharmacy check",
          questions: [
            {
              q: "'Sin receta' means a medicine is…",
              options: ["Dangerous", "Prescription-only", "Over-the-counter (no prescription needed)", "Expired"],
              correct: 2,
              fb: "Sin receta = without prescription = over the counter. Con receta = prescription required.",
            },
            {
              q: "'Tome uno cada ocho horas' means…",
              options: ["Take one at 8am", "Take one every eight hours", "Take eight per day", "Take one with 8 glasses of water"],
              correct: 1,
              fb: "Cada = every. Cada ocho horas = every eight hours.",
            },
          ],
        },
      ],
    }
  ],
  checkpoint: {
    passingPct: 80,
    questions: [
      { q: "How do you call for help?", options: ["¡Fuego!", "¡Ayuda!", "¡Policía!", "¡Para!"], correct: 1 },
      { q: "'Me han robado' means…", options: ["I've lost something", "I've been robbed", "I'm hurt", "I need help"], correct: 1 },
      { q: "Las urgencias are…", options: ["Pharmacies", "A&E/emergency room", "Police stations", "Embassies"], correct: 1 },
      { q: "'Me duele la cabeza' means…", options: ["I have a stomachache", "I'm dizzy", "I have a headache", "I have a fever"], correct: 2 },
      { q: "Why 'me duelen los pies' (not duele)?", options: ["Pies is masculine", "Pies is plural", "Me is plural", "Doler is irregular here"], correct: 1 },
      { q: "How do you ask 'Can you help me?'", options: ["¿Puede ayudarme?", "¿Puede llamarme?", "¿Puede venir?", "¿Necesita ayuda?"], correct: 0 },
      { q: "'No entiendo' means…", options: ["I don't speak Spanish", "I'm not from here", "I don't understand", "I can't read"], correct: 2 },
      { q: "'Soy alérgico/a a…' means…", options: ["I have a fever", "I'm injured", "I'm allergic to…", "I'm sick"], correct: 2 },
      { q: "How do you ask someone to speak slowly?", options: ["¿Puede hablar más alto?", "¿Puede repetir más despacio?", "¿Puede escribir?", "¿Habla inglés?"], correct: 1 },
      { q: "'He perdido mi pasaporte' means…", options: ["I've found my passport", "I've lost my passport", "I need my passport", "I forgot my passport"], correct: 1 },
    ],
  },
};
