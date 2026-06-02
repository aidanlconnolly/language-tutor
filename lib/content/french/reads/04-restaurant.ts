import type { DailyRead } from "../../types";

export const READ_RESTAURANT: DailyRead = {
  slug: "restaurant-dinner",
  order: 4,
  stageUnlock: 2,
  difficulty: 6,
  titleL1: "Un dîner au restaurant",
  titleEn: "A dinner at the restaurant",
  intro:
    "Dinner at a Paris brasserie. Present tense with 'je voudrais' and some longer sentences. A few subordinate clauses appear. Tap any word to save it.",
  paragraphs: [
    {
      l1: "Ce soir, je vais dans un petit restaurant près de mon hôtel. J'ai réservé une table pour une personne.",
      en: "Tonight, I'm going to a small restaurant near my hotel. I've reserved a table for one.",
    },
    {
      l1: "Le serveur m'accueille à la porte. « Bonsoir ! Vous avez réservé ? » Je réponds que oui.",
      en: "The waiter greets me at the door. \"Good evening! Do you have a reservation?\" I answer that I do.",
    },
    {
      l1: "Il me donne une table près de la fenêtre. Je regarde la carte. Il y a beaucoup de choix.",
      en: "He gives me a table near the window. I look at the menu. There are lots of choices.",
    },
    {
      l1: "Comme entrée, je voudrais la soupe à l'oignon. Comme plat principal, je prends le steak-frites.",
      en: "As a starter, I'd like the French onion soup. As a main course, I'll have steak and chips.",
    },
    {
      l1: "« Votre steak, vous le voulez comment ? » demande le serveur. « À point, s'il vous plaît », je dis.",
      en: "\"How would you like your steak?\" the waiter asks. \"Medium, please,\" I say.",
    },
    {
      l1: "Le repas est délicieux. La soupe est chaude et le steak est parfait. Je bois un verre de vin rouge.",
      en: "The meal is delicious. The soup is hot and the steak is perfect. I drink a glass of red wine.",
    },
    {
      l1: "Après le plat, le serveur propose un dessert. Je choisis la tarte tatin, parce que j'adore les pommes.",
      en: "After the main course, the waiter offers a dessert. I choose the tarte tatin, because I love apples.",
    },
    {
      l1: "Enfin, je demande l'addition. Le repas coûte trente euros. Je laisse un petit pourboire et je dis : « C'était excellent, merci ! »",
      en: "Finally, I ask for the bill. The meal costs thirty euros. I leave a small tip and say: \"It was excellent, thank you!\"",
    },
  ],
  vocabSpotlight: [
    { l1: "réserver", en: "to reserve / book" },
    { l1: "la carte", en: "the menu" },
    { l1: "l'entrée", en: "the starter (first course)" },
    { l1: "le plat principal", en: "the main course" },
    { l1: "à point", en: "medium (cooked)" },
    { l1: "le dessert", en: "dessert" },
    { l1: "l'addition", en: "the bill" },
    { l1: "le pourboire", en: "the tip" },
  ],
  comprehension: [
    {
      q: "How many people is the table reserved for?",
      options: ["one", "two", "three", "four"],
      correct: 0,
    },
    {
      q: "What does the narrator choose as a starter?",
      options: ["salad", "French onion soup", "escargots", "pâté"],
      correct: 1,
    },
    {
      q: "How does the narrator want the steak cooked?",
      options: ["rare", "medium (à point)", "well done", "blue"],
      correct: 1,
    },
    {
      q: "Why does the narrator choose the tarte tatin?",
      options: ["it's cheap", "the waiter recommends it", "he loves apples", "it's the only dessert"],
      correct: 2,
    },
    {
      q: "How much does the meal cost?",
      options: ["€20", "€25", "€30", "€40"],
      correct: 2,
    },
  ],
};
