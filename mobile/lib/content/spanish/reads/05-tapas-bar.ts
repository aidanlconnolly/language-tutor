import type { DailyRead } from "../../types";

export const READ_TAPAS_BAR: DailyRead = {
  slug: "tapas-bar",
  order: 5,
  stageUnlock: 3,
  difficulty: 6,
  titleL1: "Una noche de tapas",
  titleEn: "A Tapas Evening",
  intro:
    "An evening out at a traditional tapas bar in Madrid — ordering, eating, and conversation. Good mix of present tense and dialogue.",
  paragraphs: [
    {
      l1: "Son las ocho de la tarde. Salgo a tomar unas tapas con mi amiga Lucía. Vamos a un bar de su barrio.",
      en: "It is eight in the evening. I go out for tapas with my friend Lucía. We go to a bar in her neighbourhood.",
    },
    {
      l1: "El bar se llama «El Rincón». Está lleno de gente pero encontramos un hueco en la barra.",
      en: "The bar is called \"El Rincón\". It is full of people but we find a space at the bar.",
    },
    {
      l1: "El barman llega enseguida. «¿Qué os pongo?» nos pregunta. «Una caña para mí y una copa de vino tinto para ella», digo yo.",
      en: "The barman comes at once. \"What can I get you?\" he asks us. \"A small beer for me and a glass of red wine for her\", I say.",
    },
    {
      l1: "Con las bebidas viene una tapa gratis: unas aceitunas. En este barrio casi todos los bares siguen la tradición.",
      en: "With the drinks comes a free tapa: olives. In this neighbourhood almost all the bars continue the tradition.",
    },
    {
      l1: "Pedimos más cosas: patatas bravas, jamón ibérico y una tortilla española. Todo está riquísimo.",
      en: "We order more things: patatas bravas, Iberian ham, and a Spanish omelette. Everything is absolutely delicious.",
    },
    {
      l1: "Lucía me explica que en Madrid la vida social pasa mucho en los bares. «Es como una sala de estar para todos», dice ella.",
      en: "Lucía explains to me that in Madrid social life happens a lot in bars. \"It's like a living room for everyone\", she says.",
    },
    {
      l1: "A las diez pedimos la cuenta. Todo cuesta dieciocho euros entre los dos. Muy barato para la calidad.",
      en: "At ten o'clock we ask for the bill. Everything costs eighteen euros between the two of us. Very cheap for the quality.",
    },
    {
      l1: "Salimos a la calle. El barrio está animado. Lucía dice: «¿Seguimos?» Yo sonrío y digo: «¡Venga!»",
      en: "We exit to the street. The neighbourhood is lively. Lucía says: \"Shall we carry on?\" I smile and say: \"Let's go!\"",
    },
  ],
  vocabSpotlight: [
    { l1: "el barman / el barista", en: "the barman" },
    { l1: "¿Qué os pongo?", en: "What can I get you? (informal plural)" },
    { l1: "la caña", en: "a small draught beer" },
    { l1: "la tapa gratis", en: "the free tapa" },
    { l1: "las aceitunas", en: "olives" },
    { l1: "la sala de estar", en: "the living room" },
    { l1: "animado/a", en: "lively" },
    { l1: "¿Seguimos?", en: "Shall we carry on?" },
  ],
  comprehension: [
    {
      q: "What time does the narrator go out?",
      options: ["7pm", "8pm", "9pm", "10pm"],
      correct: 1,
    },
    {
      q: "What free tapa comes with the drinks?",
      options: ["Patatas bravas", "Bread", "Olives", "Cheese"],
      correct: 2,
    },
    {
      q: "What does Lucía compare bars to?",
      options: ["A restaurant", "A theatre", "A living room for everyone", "A market"],
      correct: 2,
    },
    {
      q: "How much is the total bill?",
      options: ["€12", "€15", "€18", "€22"],
      correct: 2,
    },
    {
      q: "What does the narrator say when Lucía asks if they should carry on?",
      options: ["No, I'm tired", "Of course!", "¡Venga!", "Let me think"],
      correct: 2,
    },
  ],
};
