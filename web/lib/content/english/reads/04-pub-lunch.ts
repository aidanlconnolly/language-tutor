import type { DailyRead } from "../../types";

export const READ_PUB_LUNCH: DailyRead = {
  slug: "pub-lunch",
  order: 4,
  stageUnlock: 2,
  difficulty: 5.5,
  titleL1: "Lunch at the pub",
  titleEn: "A pub lunch",
  intro:
    "Day four. The sentences are a bit longer here. You'll learn how a British pub works: in most pubs you order and pay at the bar yourself — no one comes to your table.",
  paragraphs: [
    {
      l1: "At lunchtime I am hungry again. A man from the café tells me about a pub nearby. \"The food is great,\" he says.",
      en: "At midday I feel hungry again. A man from the café tells me about a pub close by. \"The food there is very good,\" he says.",
    },
    {
      l1: "The pub is old. It has dark wood, soft lights, and a warm feeling. People are talking and laughing.",
      en: "The pub is old. It has dark wooden walls, low lights, and a cosy feeling. People are chatting and laughing.",
    },
    {
      l1: "I sit at a table and wait. I wait for a waiter, but nobody comes. After a while, I feel confused.",
      en: "I sit down at a table and wait. I expect a waiter, but no one arrives. After some time, I do not understand why.",
    },
    {
      l1: "A woman at the next table sees me. She smiles and explains, \"In most pubs, you order at the bar. There's no table service.\"",
      en: "A woman at the table next to me notices me. She smiles and tells me, \"In most pubs, you must order at the bar. No one serves your table.\"",
    },
    {
      l1: "\"Thank you!\" I say. I go to the bar. The barman asks, \"What can I get you?\" I look at the menu on the wall.",
      en: "\"Thank you!\" I say. I walk to the bar. The man behind the bar asks, \"What would you like?\" I read the menu written on the wall.",
    },
    {
      l1: "\"I'll have the fish and chips, please, and a glass of water.\" \"Which table are you at?\" he asks. \"Table seven.\"",
      en: "\"I would like the fish and chips, please, and a glass of water.\" \"Where are you sitting?\" he asks. \"Table seven.\"",
    },
    {
      l1: "I pay at the bar and go back to my table. Ten minutes later, a waiter brings my food. It looks delicious.",
      en: "I pay at the bar and return to my table. Ten minutes after, a waiter carries my food over. It looks very tasty.",
    },
    {
      l1: "The fish is crispy and the chips are hot. I understand now: at a pub, you do the work at the bar, but the food comes to you.",
      en: "The fish is crunchy and the chips (thick fried potatoes) are hot. Now I get it: at a pub you order at the bar yourself, but the food is brought to your table.",
    },
  ],
  vocabSpotlight: [
    { l1: "a pub", en: "a British bar that also serves food" },
    { l1: "the bar", en: "the counter in a pub where you order drinks and food" },
    { l1: "table service", en: "when a waiter takes your order at your table" },
    { l1: "fish and chips", en: "a classic British meal of fried fish and thick chips" },
    { l1: "chips", en: "thick fried potatoes (not crisps!)" },
    { l1: "confused", en: "not understanding what is happening" },
    { l1: "to order", en: "to ask for food or drink in a café, pub, or shop" },
    { l1: "cosy", en: "warm, comfortable, and pleasant" },
  ],
  comprehension: [
    {
      q: "Who tells the narrator about the pub?",
      options: ["The landlord", "A man from the café", "The barman", "A waiter"],
      correct: 1,
    },
    {
      q: "Why does the narrator feel confused at first?",
      options: ["The pub is closed", "No waiter comes to the table", "The menu is too long", "There are no free tables"],
      correct: 1,
    },
    {
      q: "Where do you order in most British pubs?",
      options: ["At your table", "By phone", "At the bar", "At the door"],
      correct: 2,
    },
    {
      q: "What does the narrator order to eat?",
      options: ["A burger", "Fish and chips", "A pie", "A salad"],
      correct: 1,
    },
    {
      q: "After ordering, how does the food reach the narrator?",
      options: ["They collect it from the bar", "A waiter brings it to the table", "It is left at the door", "They cook it themselves"],
      correct: 1,
    },
  ],
};
