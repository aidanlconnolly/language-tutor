import type { DailyRead } from "../../types";

export const READ_CAFE_MORNING: DailyRead = {
  slug: "cafe-morning",
  order: 3,
  stageUnlock: 1,
  difficulty: 5,
  titleL1: "A morning at the café",
  titleEn: "Coffee in the morning",
  intro:
    "Day three. Sentences are a little longer now, and you'll meet the polite phrase \"I'd like\" (a short way to say \"I would like\"). In a British café you often hear \"Eat in or takeaway?\".",
  paragraphs: [
    {
      l1: "It is my first morning in Camden. I wake up early. I am hungry, so I go out to find a café.",
      en: "It is my first morning in Camden. I get up early. My stomach is empty, so I go outside to look for a café.",
    },
    {
      l1: "On the corner there is a small café. The window is full of cakes. A nice smell of coffee comes out.",
      en: "There is a little café on the corner. Cakes fill the window. A lovely coffee smell comes from inside.",
    },
    {
      l1: "I go in and stand at the counter. A young woman behind it smiles. \"Morning! What can I get you?\"",
      en: "I go inside and stand at the counter. A young woman behind it smiles. \"Good morning! What would you like?\"",
    },
    {
      l1: "\"I'd like a coffee, please,\" I say. \"A flat white or an Americano?\" she asks. \"A flat white, thanks.\"",
      en: "\"I would like a coffee, please,\" I say. \"A flat white or an Americano?\" she asks. (These are two kinds of coffee.) \"A flat white, thank you.\"",
    },
    {
      l1: "\"Eat in or takeaway?\" she asks. I don't know this phrase, so she explains. \"Do you stay here, or take it with you?\"",
      en: "\"Eat in or takeaway?\" she asks. I do not know these words, so she helps. \"Do you sit here, or carry it away?\"",
    },
    {
      l1: "\"Eat in, please,\" I say. \"I have time this morning.\" She nods and makes my coffee.",
      en: "\"I will stay here, please,\" I say. \"I am not in a hurry this morning.\" She moves her head yes and makes my coffee.",
    },
    {
      l1: "\"Are you new here?\" she asks. \"Yes, I moved in yesterday,\" I say. \"Welcome to Camden! It's a friendly place.\"",
      en: "\"Are you new in this area?\" she asks. \"Yes, I arrived yesterday,\" I say. \"Welcome to Camden! People here are kind.\"",
    },
    {
      l1: "The coffee is hot and strong. I sit by the window and watch the street. It is a good start to the day.",
      en: "The coffee is hot and has a strong taste. I sit near the window and look at the street. The day begins well.",
    },
  ],
  vocabSpotlight: [
    { l1: "I'd like…", en: "a polite way to ask for something (short for \"I would like\")" },
    { l1: "the counter", en: "the long table where you order and pay" },
    { l1: "a flat white", en: "a coffee with steamed milk, popular in Britain" },
    { l1: "eat in", en: "to stay and eat at the café" },
    { l1: "takeaway", en: "food or drink you carry away with you" },
    { l1: "to explain", en: "to say something in a clearer way" },
    { l1: "friendly", en: "kind and easy to talk to" },
    { l1: "in a hurry", en: "needing to do something fast; short of time" },
  ],
  comprehension: [
    {
      q: "Why does the narrator go out?",
      options: ["To go to work", "Because they are hungry", "To meet the landlord", "To buy a phone"],
      correct: 1,
    },
    {
      q: "What does \"I'd like\" mean?",
      options: ["I love", "I would like", "I dislike", "I am like"],
      correct: 1,
    },
    {
      q: "Which coffee does the narrator choose?",
      options: ["An Americano", "A cappuccino", "A flat white", "An espresso"],
      correct: 2,
    },
    {
      q: "What does \"takeaway\" mean?",
      options: ["Food you eat at the café", "Food you carry away with you", "A free sample", "A second cup"],
      correct: 1,
    },
    {
      q: "When did the narrator move to Camden?",
      options: ["Last week", "This morning", "Yesterday", "A month ago"],
      correct: 2,
    },
  ],
};
