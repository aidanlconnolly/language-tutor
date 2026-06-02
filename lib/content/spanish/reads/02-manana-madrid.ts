import type { DailyRead } from "../../types";

export const READ_MANANA_MADRID: DailyRead = {
  slug: "manana-madrid",
  order: 2,
  stageUnlock: 1,
  difficulty: 5,
  titleL1: "Una mañana en Madrid",
  titleEn: "A Morning in Madrid",
  intro:
    "The narrator's first morning in Madrid — coffee, toast, and exploring the neighbourhood. Present tense with some description.",
  paragraphs: [
    {
      l1: "Me despierto temprano. Son las ocho de la mañana. El sol entra por la ventana.",
      en: "I wake up early. It is eight in the morning. The sun comes through the window.",
    },
    {
      l1: "Bajo a la calle. Busco un bar para desayunar. En España el desayuno se toma fuera de casa.",
      en: "I go down to the street. I look for a bar for breakfast. In Spain breakfast is taken outside the home.",
    },
    {
      l1: "Encuentro un bar pequeño. Hay una barra de madera y varias mesas. El barista me saluda: «¡Buenos días!»",
      en: "I find a small bar. There is a wooden counter and several tables. The barista greets me: \"Good morning!\"",
    },
    {
      l1: "Pido un café con leche y una tostada con aceite y tomate. El precio es tres euros con cincuenta.",
      en: "I order a café con leche and toast with olive oil and tomato. The price is three euros fifty.",
    },
    {
      l1: "El café está buenísimo. El aceite de oliva tiene un sabor intenso. Es mi desayuno favorito.",
      en: "The coffee is excellent. The olive oil has an intense flavour. It is my favourite breakfast.",
    },
    {
      l1: "Después del desayuno, salgo a caminar. Las calles están tranquilas a esta hora. Sólo hay tenderos que abren sus tiendas.",
      en: "After breakfast, I go out for a walk. The streets are quiet at this hour. There are only shopkeepers opening their shops.",
    },
    {
      l1: "Llego a una plaza grande. Hay una fuente en el centro y bancos alrededor. Me siento un momento.",
      en: "I arrive at a large square. There is a fountain in the centre and benches all around. I sit down for a moment.",
    },
    {
      l1: "Madrid empieza a despertar. El ruido aumenta. Hay coches, voces, músicos en la calle. Me gusta mucho.",
      en: "Madrid begins to wake up. The noise increases. There are cars, voices, street musicians. I like it a lot.",
    },
  ],
  vocabSpotlight: [
    { l1: "la barra", en: "the bar counter" },
    { l1: "la tostada", en: "the toast" },
    { l1: "el aceite de oliva", en: "olive oil" },
    { l1: "el sabor", en: "the flavour/taste" },
    { l1: "la plaza", en: "the square" },
    { l1: "la fuente", en: "the fountain" },
    { l1: "el tendero", en: "the shopkeeper" },
    { l1: "el ruido", en: "the noise" },
  ],
  comprehension: [
    {
      q: "What time does the narrator wake up?",
      options: ["7am", "8am", "9am", "10am"],
      correct: 1,
    },
    {
      q: "What does the narrator order for breakfast?",
      options: ["Croissant and tea", "Café con leche and toast with oil and tomato", "Orange juice and eggs", "Coffee and churros"],
      correct: 1,
    },
    {
      q: "How much does breakfast cost?",
      options: ["€2.50", "€3.00", "€3.50", "€4.00"],
      correct: 2,
    },
    {
      q: "What is in the centre of the square?",
      options: ["A statue", "A tree", "A fountain", "A café"],
      correct: 2,
    },
    {
      q: "What does the narrator find in the street when Madrid wakes up?",
      options: ["Only cars", "Cars, voices, and street musicians", "A market", "A parade"],
      correct: 1,
    },
  ],
};
