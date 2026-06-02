import type { DailyRead } from "../../types";

export const READ_MATIN_PARIS: DailyRead = {
  slug: "matin-paris",
  order: 2,
  stageUnlock: 1,
  difficulty: 4.5,
  titleL1: "Le premier matin",
  titleEn: "The first morning",
  intro:
    "Your first morning in Paris. Present tense, simple sentences about a café breakfast. Tap unknown words to save them.",
  paragraphs: [
    {
      l1: "C'est le matin. Je me réveille à huit heures. J'ai faim.",
      en: "It's morning. I wake up at eight. I'm hungry.",
    },
    {
      l1: "Je descends dans la rue. Il y a un petit café au coin. Le café est ouvert.",
      en: "I go down to the street. There's a small café on the corner. The café is open.",
    },
    {
      l1: "J'entre et je dis : « Bonjour ! » Le serveur répond : « Bonjour ! Vous désirez ? »",
      en: "I go in and say: \"Hello!\" The waiter replies: \"Hello! What would you like?\"",
    },
    {
      l1: "Je prends un café et un croissant. Le croissant est chaud. Le café est fort.",
      en: "I have a coffee and a croissant. The croissant is warm. The coffee is strong.",
    },
    {
      l1: "Je regarde les gens dans la rue. Une femme promène son chien. Un homme lit le journal.",
      en: "I watch the people in the street. A woman walks her dog. A man reads the newspaper.",
    },
    {
      l1: "Le serveur apporte l'addition. Le petit-déjeuner coûte cinq euros. Je laisse la monnaie.",
      en: "The waiter brings the bill. Breakfast costs five euros. I leave the change.",
    },
    {
      l1: "Je dis : « Merci, bonne journée ! » Le serveur sourit. « Au revoir ! »",
      en: "I say: \"Thank you, have a good day!\" The waiter smiles. \"Goodbye!\"",
    },
    {
      l1: "Maintenant je suis prêt. Je commence ma journée à Paris. Quelle belle ville !",
      en: "Now I'm ready. I begin my day in Paris. What a beautiful city!",
    },
  ],
  vocabSpotlight: [
    { l1: "le matin", en: "the morning" },
    { l1: "le café", en: "the café / the coffee" },
    { l1: "le croissant", en: "the croissant" },
    { l1: "le serveur", en: "the waiter" },
    { l1: "l'addition", en: "the bill" },
    { l1: "le petit-déjeuner", en: "breakfast" },
    { l1: "la rue", en: "the street" },
    { l1: "la monnaie", en: "the change (coins)" },
  ],
  comprehension: [
    {
      q: "What time does the narrator wake up?",
      options: ["7", "8", "9", "10"],
      correct: 1,
    },
    {
      q: "What does the narrator order?",
      options: ["tea and toast", "coffee and a croissant", "juice and bread", "hot chocolate"],
      correct: 1,
    },
    {
      q: "What is the woman in the street doing?",
      options: ["reading", "walking her dog", "drinking coffee", "buying flowers"],
      correct: 1,
    },
    {
      q: "How much does breakfast cost?",
      options: ["€3", "€5", "€7", "€10"],
      correct: 1,
    },
    {
      q: "How does the narrator describe Paris at the end?",
      options: ["big", "crowded", "a beautiful city", "expensive"],
      correct: 2,
    },
  ],
};
