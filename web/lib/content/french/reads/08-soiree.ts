import type { DailyRead } from "../../types";

export const READ_SOIREE: DailyRead = {
  slug: "soiree-seine",
  order: 8,
  stageUnlock: 4,
  difficulty: 9,
  titleL1: "Une soirée au bord de la Seine",
  titleEn: "An evening by the Seine",
  intro:
    "An evening stroll along the Seine, reflecting on the trip. This read mixes tenses freely, uses subordinate clauses, idioms, and richer description. Tap any word to save it.",
  paragraphs: [
    {
      l1: "C'était ma dernière soirée à Paris, et je voulais en profiter pleinement. Après le dîner, j'ai décidé de me promener le long de la Seine.",
      en: "It was my last evening in Paris, and I wanted to make the most of it. After dinner, I decided to walk along the Seine.",
    },
    {
      l1: "Le soleil se couchait lentement, et le ciel prenait des couleurs orange et roses. Les ponts se reflétaient dans l'eau calme du fleuve.",
      en: "The sun was setting slowly, and the sky was taking on orange and pink colors. The bridges were reflected in the calm water of the river.",
    },
    {
      l1: "Sur les quais, des couples pique-niquaient avec du vin et du fromage. D'autres discutaient en regardant passer les bateaux-mouches.",
      en: "On the banks, couples were picnicking with wine and cheese. Others were chatting while watching the tour boats go by.",
    },
    {
      l1: "Je me suis arrêté sur le Pont des Arts. De là, on voyait la Tour Eiffel qui scintillait dans la nuit tombante.",
      en: "I stopped on the Pont des Arts. From there, you could see the Eiffel Tower sparkling in the falling night.",
    },
    {
      l1: "Pendant que je regardais la ville, j'ai pensé à tout ce que j'avais vécu pendant ce voyage. J'avais appris beaucoup de choses, surtout la langue.",
      en: "While I was looking at the city, I thought about everything I had experienced during this trip. I had learned a lot of things, especially the language.",
    },
    {
      l1: "Au début, je ne parlais presque pas français. Maintenant, je peux commander au restaurant, demander mon chemin et même bavarder un peu avec les Parisiens.",
      en: "At the beginning, I hardly spoke any French. Now, I can order at the restaurant, ask for directions, and even chat a little with Parisians.",
    },
    {
      l1: "Bien sûr, il me reste beaucoup à apprendre. Mais comme on dit, Paris ne s'est pas fait en un jour, et l'apprentissage d'une langue non plus.",
      en: "Of course, I still have a lot to learn. But as they say, Paris wasn't built in a day, and neither is learning a language.",
    },
    {
      l1: "En rentrant à l'hôtel, j'ai souri. Cette ville m'avait conquis, et je savais déjà que je reviendrais. À bientôt, Paris !",
      en: "On the way back to the hotel, I smiled. This city had won me over, and I already knew I would come back. See you soon, Paris!",
    },
  ],
  vocabSpotlight: [
    { l1: "profiter (de)", en: "to make the most of / enjoy" },
    { l1: "se coucher (le soleil)", en: "to set (the sun)" },
    { l1: "le pont", en: "the bridge" },
    { l1: "le fleuve", en: "the river" },
    { l1: "le bateau-mouche", en: "the Seine tour boat" },
    { l1: "scintiller", en: "to sparkle / twinkle" },
    { l1: "bavarder", en: "to chat" },
    { l1: "conquérir", en: "to conquer / win over" },
  ],
  comprehension: [
    {
      q: "Why is this evening special?",
      options: ["it's a holiday", "it's the narrator's last evening in Paris", "it's the narrator's birthday", "it's New Year's"],
      correct: 1,
    },
    {
      q: "What were couples doing on the banks of the Seine?",
      options: ["dancing", "picnicking with wine and cheese", "swimming", "fishing"],
      correct: 1,
    },
    {
      q: "Where did the narrator stop?",
      options: ["the Eiffel Tower", "the Pont des Arts", "a café", "Notre-Dame"],
      correct: 1,
    },
    {
      q: "How has the narrator's French changed during the trip?",
      options: ["it hasn't changed", "he can now order, ask directions, and chat a bit", "he's forgotten everything", "he only learned to read"],
      correct: 1,
    },
    {
      q: "What does the narrator decide at the end?",
      options: ["never to return", "to move to Paris", "that he will come back", "to learn Italian instead"],
      correct: 2,
    },
  ],
};
