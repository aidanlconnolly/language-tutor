import type { DailyRead } from "../../types";

export const READ_SHOPPING: DailyRead = {
  slug: "shopping-marais",
  order: 6,
  stageUnlock: 3,
  difficulty: 7,
  titleL1: "Du shopping dans le Marais",
  titleEn: "Shopping in the Marais",
  intro:
    "A shopping trip in the trendy Marais district during the sales. Mixes present and passé composé, with longer sentences and opinions. Tap any word to save it.",
  paragraphs: [
    {
      l1: "C'est la période des soldes. Je décide d'aller dans le Marais, un quartier que j'adore pour ses boutiques.",
      en: "It's sale season. I decide to go to the Marais, a neighborhood I love for its boutiques.",
    },
    {
      l1: "Les rues sont étroites et pleines de monde. Dans chaque vitrine, il y a des panneaux : « moins cinquante pour cent ».",
      en: "The streets are narrow and full of people. In every shop window, there are signs: \"fifty percent off\".",
    },
    {
      l1: "J'entre dans une petite boutique de vêtements. Une vendeuse me demande si elle peut m'aider.",
      en: "I go into a small clothing boutique. A saleswoman asks me if she can help me.",
    },
    {
      l1: "Je cherche une veste légère pour le printemps. Elle me montre plusieurs modèles élégants.",
      en: "I'm looking for a light jacket for spring. She shows me several elegant styles.",
    },
    {
      l1: "J'essaie une veste bleue dans la cabine. Elle me va bien, mais elle est un peu chère.",
      en: "I try on a blue jacket in the fitting room. It suits me well, but it's a bit expensive.",
    },
    {
      l1: "« Avec la réduction, elle coûte quarante euros », dit la vendeuse. C'est une bonne affaire !",
      en: "\"With the discount, it costs forty euros,\" says the saleswoman. It's a good deal!",
    },
    {
      l1: "Je décide de l'acheter. Je paie par carte et la vendeuse met la veste dans un joli sac.",
      en: "I decide to buy it. I pay by card and the saleswoman puts the jacket in a nice bag.",
    },
    {
      l1: "Je sors de la boutique très content de mon achat. Le Marais est vraiment un paradis pour le shopping.",
      en: "I leave the boutique very happy with my purchase. The Marais is really a paradise for shopping.",
    },
  ],
  vocabSpotlight: [
    { l1: "les soldes", en: "the sales" },
    { l1: "le quartier", en: "the neighborhood" },
    { l1: "la vitrine", en: "the shop window" },
    { l1: "la veste", en: "the jacket" },
    { l1: "la cabine", en: "the fitting room" },
    { l1: "la réduction", en: "the discount" },
    { l1: "une bonne affaire", en: "a good deal" },
    { l1: "l'achat", en: "the purchase" },
  ],
  comprehension: [
    {
      q: "Why does the narrator go to the Marais?",
      options: ["to eat", "for its boutiques during the sales", "to visit a museum", "to meet a friend"],
      correct: 1,
    },
    {
      q: "What discount do the shop windows advertise?",
      options: ["20% off", "30% off", "50% off", "70% off"],
      correct: 2,
    },
    {
      q: "What is the narrator looking for?",
      options: ["shoes", "a light spring jacket", "a scarf", "a hat"],
      correct: 1,
    },
    {
      q: "How much does the jacket cost with the discount?",
      options: ["€30", "€40", "€50", "€60"],
      correct: 1,
    },
    {
      q: "How does the narrator pay?",
      options: ["cash", "by card", "by phone", "by check"],
      correct: 1,
    },
  ],
};
