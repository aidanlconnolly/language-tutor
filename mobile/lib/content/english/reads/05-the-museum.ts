import type { DailyRead } from "../../types";

export const READ_THE_MUSEUM: DailyRead = {
  slug: "the-museum",
  order: 5,
  stageUnlock: 2,
  difficulty: 6,
  titleL1: "The British Museum",
  titleEn: "A day at the museum",
  intro:
    "Day five. This read introduces the past simple — verbs that talk about finished actions (I walked, I saw, I went). Watch for these as the narrator tells you about a day that has already happened.",
  paragraphs: [
    {
      l1: "On Saturday I had a free day, so I decided to visit the British Museum. A friend told me it was free to enter, and I could hardly believe it.",
      en: "On Saturday I did not have to work, so I chose to visit the British Museum. A friend said it cost nothing to go in, and I was surprised.",
    },
    {
      l1: "I took the Tube to Holborn and walked for ten minutes. The museum is enormous, with tall white columns at the front.",
      en: "I rode the Tube to Holborn and walked for ten minutes. The museum is very, very big, with tall white pillars at the front.",
    },
    {
      l1: "I went inside and stepped into a huge open hall with a glass roof. The light came down from above, and the space felt calm.",
      en: "I went in and entered a big open room with a glass ceiling. Light fell from above, and the place felt quiet and peaceful.",
    },
    {
      l1: "First I looked for the Rosetta Stone. It is a famous dark stone with three kinds of ancient writing carved on it.",
      en: "First I searched for the Rosetta Stone. It is a well-known dark stone with three types of old writing cut into it.",
    },
    {
      l1: "Long ago, nobody could read Egyptian hieroglyphs. This stone helped experts understand them at last. I stood and stared for a long time.",
      en: "Many years ago, no one could read the old Egyptian picture-writing. This stone helped clever people finally work it out. I stood and looked for a long time.",
    },
    {
      l1: "After that, I wandered through the rooms. There were statues from Greece, treasures from Egypt, and clay tablets from far away.",
      en: "Then I walked slowly through the rooms with no plan. There were stone figures from Greece, riches from Egypt, and writing on clay from distant lands.",
    },
    {
      l1: "Soon I realised I was completely lost. The museum is like a maze, and I had no idea which way led to the exit.",
      en: "Soon I understood that I had lost my way. The museum is like a puzzle of paths, and I did not know which way went to the door out.",
    },
    {
      l1: "A guard saw my worried face and pointed me towards the Great Court. \"Just follow the signs,\" he said kindly. I thanked him and finally found my way out.",
      en: "A guard noticed I looked worried and showed me the way to the Great Court. \"Follow the signs,\" he said in a kind voice. I thanked him and at last found the exit.",
    },
  ],
  vocabSpotlight: [
    { l1: "free (to enter)", en: "costing no money" },
    { l1: "enormous", en: "extremely big" },
    { l1: "a column / pillar", en: "a tall round post that holds up a building" },
    { l1: "ancient", en: "very, very old, from long ago" },
    { l1: "a statue", en: "a figure of a person or animal made of stone or metal" },
    { l1: "to be lost", en: "to not know where you are or which way to go" },
    { l1: "a maze", en: "a confusing set of paths where it's easy to get lost" },
    { l1: "the exit", en: "the way out of a place" },
  ],
  comprehension: [
    {
      q: "How much does it cost to enter the British Museum?",
      options: ["£5", "£10", "It is free", "£20"],
      correct: 2,
    },
    {
      q: "Which Tube station does the narrator use?",
      options: ["Holborn", "Camden Town", "Bank", "Victoria"],
      correct: 0,
    },
    {
      q: "Why is the Rosetta Stone important?",
      options: [
        "It is the oldest stone in the world",
        "It helped experts read Egyptian hieroglyphs",
        "It is made of gold",
        "It was found in London",
      ],
      correct: 1,
    },
    {
      q: "What problem does the narrator have inside the museum?",
      options: ["They lose their ticket", "They get lost", "They run out of time", "They drop their phone"],
      correct: 1,
    },
    {
      q: "Who helps the narrator find the way out?",
      options: ["A friend", "A guard", "Another visitor", "A shop worker"],
      correct: 1,
    },
  ],
};
