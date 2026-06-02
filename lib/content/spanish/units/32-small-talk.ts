import type { Unit } from "../../types";

export const UNIT_SMALL_TALK: Unit = {
  slug: "small-talk",
  stage: 7,
  order: 32,
  icon: "💬",
  title: "Small talk",
  tagline: "El tiempo, el fútbol, ¡qué calor! — graceful exits.",
  lessons: [
    {
      slug: "small-talk-weather",
      title: "Weather and everyday chat",
      estMinutes: 8,
      pages: [
        {
          type: "vocab",
          heading: "Weather vocabulary",
          items: [
            { l1: "Hace calor / frío.", en: "It's hot / cold." },
            { l1: "Hace sol / viento.", en: "It's sunny / windy." },
            { l1: "Llueve. / Está lloviendo.", en: "It's raining." },
            { l1: "Nieva. / Está nevando.", en: "It's snowing." },
            { l1: "Está nublado.", en: "It's cloudy." },
            { l1: "¡Qué calor hace!", en: "What heat! / It's so hot!" },
            { l1: "¡Vaya tiempo!", en: "What weather! (used for bad weather)" },
            { l1: "El tiempo está muy bueno.", en: "The weather is very nice." },
          ],
        },
        {
          type: "vocab",
          heading: "Starting and sustaining small talk",
          items: [
            { l1: "¿Qué tal tu fin de semana?", en: "How was your weekend?" },
            { l1: "Nada especial, ¿y el tuyo?", en: "Nothing special, and yours?" },
            { l1: "¿Has visto el partido?", en: "Did you watch the match?" },
            { l1: "¿Eres del Madrid o del Barça?", en: "Are you a Madrid or Barça fan?" },
            { l1: "¿Qué planes tienes este finde?", en: "What are your plans this weekend? (finde = fin de semana)" },
            { l1: "¿Has leído algo bueno últimamente?", en: "Have you read anything good lately?" },
            { l1: "¡Qué coincidencia!", en: "What a coincidence!" },
            { l1: "Me alegro de verte.", en: "Good to see you." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Small talk check",
          questions: [
            {
              q: "'Hace calor' means…",
              options: ["It's cold", "It's hot", "It's windy", "It's humid"],
              correct: 1,
              fb: "Hacer calor = to be hot (weather). ¡Qué calor hace! = It's so hot! (a very common Spanish summer phrase)",
            },
            {
              q: "'Finde' is slang for…",
              options: ["Fine / OK", "The end", "Weekend (fin de semana)", "Saturday"],
              correct: 2,
              fb: "Finde = fin de semana (weekend). Very common informal abbreviation.",
            },
          ],
        },
      ],
    },
    {
      slug: "small-talk-exits",
      title: "Ending conversations gracefully",
      estMinutes: 6,
      pages: [
        {
          type: "vocab",
          heading: "Exit phrases",
          items: [
            { l1: "Bueno, me tengo que ir.", en: "Well, I have to go." },
            { l1: "Ha sido un placer.", en: "It's been a pleasure." },
            { l1: "Que te vaya bien.", en: "I hope things go well for you. / Take care." },
            { l1: "Cuídate.", en: "Take care." },
            { l1: "Nos vemos.", en: "See you around." },
            { l1: "¡Hasta la próxima!", en: "Until next time!" },
            { l1: "Que te lo pases bien.", en: "Have a good time." },
            { l1: "Un abrazo.", en: "A hug. (common warm sign-off)" },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Exit phrases",
          questions: [
            {
              q: "'Que te vaya bien' means…",
              options: ["That you go well", "I hope things go well for you", "Goodbye forever", "Go quickly"],
              correct: 1,
              fb: "Que + subjunctive used as a wish. Que te vaya bien = I hope things go well for you. A warm farewell.",
            },
            {
              q: "'Ha sido un placer' is said…",
              options: ["When you arrive", "When leaving — it's been a pleasure", "When ordering food", "When you're surprised"],
              correct: 1,
              fb: "Ha sido un placer = it's been a pleasure. Used when parting from someone you've enjoyed meeting.",
            },
          ],
        },
      ],
    },
  ],
  checkpoint: {
    passingPct: 80,
    questions: [
      { q: "'Hace calor' means…", options: ["It's cold", "It's sunny", "It's hot", "It's windy"], correct: 2 },
      { q: "'Está nublado' means…", options: ["It's sunny", "It's cloudy", "It's raining", "It's cold"], correct: 1 },
      { q: "'Finde' is short for…", options: ["fin de mes", "fin de semana", "el final", "finish"], correct: 1 },
      { q: "'Que te vaya bien' is…", options: ["A request", "A warm farewell wish", "A question", "A complaint"], correct: 1 },
      { q: "'Ha sido un placer' means…", options: ["What a pleasure!", "It's been a pleasure", "I have pleasure in…", "The pleasure is mine"], correct: 1 },
      { q: "'¡Qué coincidencia!' means…", options: ["What a coincidence!", "How strange!", "Really?", "I agree!"], correct: 0 },
      { q: "'Nos vemos' means…", options: ["We see each other now", "See you around", "I can't see you", "We watched it"], correct: 1 },
      { q: "'Cuídate' means…", options: ["Watch out!", "Take care", "Be careful (warning)", "Both A and C"], correct: 1 },
      { q: "'¿Has visto el partido?' means…", options: ["Have you been to the park?", "Did you watch the match?", "Have you seen this?", "Did you visit?"], correct: 1 },
      { q: "'Me alegro de verte' means…", options: ["I like seeing things", "Good to see you", "I'm happy to meet you for the first time", "I'm glad you're here"], correct: 1 },
    ],
  },
};
