import type { DailyRead } from "../../types";

export const READ_THE_MARKET: DailyRead = {
  slug: "the-market",
  order: 6,
  stageUnlock: 3,
  difficulty: 6.5,
  titleL1: "Borough Market",
  titleEn: "Shopping at the market",
  intro:
    "Day six. More past simple, mixed with the present. You'll learn how Britons talk about weight and quantity — \"a pound of\" (about 450 grams) — and how light bargaining at a market sounds.",
  paragraphs: [
    {
      l1: "On Sunday morning I went to Borough Market, near London Bridge. It is one of the oldest food markets in the city, and it was packed with people.",
      en: "On Sunday morning I visited Borough Market, close to London Bridge. It is one of the city's oldest food markets, and it was very crowded.",
    },
    {
      l1: "The market sits under iron railway arches. Trains rumbled overhead while crowds moved slowly between the stalls.",
      en: "The market is below the metal arches of a railway. Trains made a deep noise above us while many people walked slowly past the small shops.",
    },
    {
      l1: "The smells were amazing: fresh bread, ripe fruit, melted cheese, and strong coffee all mixed together in the air.",
      en: "The smells were wonderful: new bread, soft sweet fruit, hot cheese, and strong coffee, all together in the air.",
    },
    {
      l1: "At a cheese stall, a man cut small pieces for people to taste. I tried a sharp cheddar and bought a chunk of it.",
      en: "At a cheese shop, a man cut little bits so people could try them. I tasted a strong cheddar and bought a big piece of it.",
    },
    {
      l1: "\"How much is the bread?\" I asked at the next stall. \"Three pounds fifty a loaf,\" the baker said. \"And a pound of those tomatoes, please.\"",
      en: "\"What is the price of the bread?\" I asked at the next shop. \"It is £3.50 for each loaf,\" the baker answered. \"And about half a kilo of those tomatoes, please.\"",
    },
    {
      l1: "The fruit was a little expensive, so I tried a bit of friendly bargaining. \"Could you do two pounds for both bags?\" The seller laughed and agreed.",
      en: "The fruit cost rather a lot, so I gently asked for a lower price. \"Can I pay £2 for the two bags?\" The seller laughed and said yes.",
    },
    {
      l1: "I carried my heavy bags through the crowd. By now my arms ached, but I had cheese, bread, fruit, and a happy stomach.",
      en: "I carried my full, heavy bags through the crowd. My arms hurt by now, but I had cheese, bread, fruit, and a full, happy belly.",
    },
    {
      l1: "Before I left, I stopped for a hot pie and ate it standing up. The market was loud and chaotic, but I loved every minute of it.",
      en: "Before going home, I stopped to buy a warm pie and ate it on my feet. The market was noisy and wild, but I enjoyed all of it.",
    },
  ],
  vocabSpotlight: [
    { l1: "a market", en: "a place with many small open shops or stalls" },
    { l1: "a stall", en: "a small open shop or table where someone sells things" },
    { l1: "a pound (weight)", en: "a unit of weight, about 450 grams" },
    { l1: "a loaf", en: "one whole piece of baked bread" },
    { l1: "to taste / to try", en: "to eat a small bit to see if you like it" },
    { l1: "to bargain", en: "to talk with a seller to get a lower price" },
    { l1: "ripe", en: "ready to eat, soft and sweet (of fruit)" },
    { l1: "a chunk", en: "a thick, solid piece of something" },
  ],
  comprehension: [
    {
      q: "Which day does the narrator visit the market?",
      options: ["Friday", "Saturday", "Sunday", "Monday"],
      correct: 2,
    },
    {
      q: "What is built above the market?",
      options: ["A motorway", "Railway arches", "A church", "A shopping centre"],
      correct: 1,
    },
    {
      q: "How much does one loaf of bread cost?",
      options: ["£1.50", "£2.00", "£3.50", "£5.00"],
      correct: 2,
    },
    {
      q: "What does the narrator do about the price of the fruit?",
      options: ["Pays the full price", "Bargains for a lower price", "Decides not to buy it", "Asks for a free bag"],
      correct: 1,
    },
    {
      q: "What does the narrator eat before leaving?",
      options: ["A sandwich", "A hot pie", "An ice cream", "Some cheese"],
      correct: 1,
    },
  ],
};
