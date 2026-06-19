import type { DailyRead } from "../../types";

export const READ_THE_THAMES: DailyRead = {
  slug: "the-thames",
  order: 7,
  stageUnlock: 3,
  difficulty: 7,
  titleL1: "A walk along the Thames",
  titleEn: "Walking by the river",
  intro:
    "Day seven. Longer sentences now, with past tenses and a little history. The River Thames (you say it \"Temz\") runs through the middle of London. Notice how clauses join together with words like 'while', 'which', and 'because'.",
  paragraphs: [
    {
      l1: "One bright afternoon, after the rain had finally stopped, I walked along the South Bank — the wide path that runs beside the River Thames in the heart of London.",
      en: "On a clear afternoon, once the rain had at last ended, I walked along the South Bank — the broad path next to the River Thames in central London.",
    },
    {
      l1: "The Thames has shaped this city for two thousand years. Long ago the Romans built a settlement here, because the river let their ships reach the sea.",
      en: "The Thames has made this city what it is for 2,000 years. Many years ago the Romans started a town here, since the river let their boats sail to the sea.",
    },
    {
      l1: "As I strolled, I passed the London Eye, the giant wheel that turns slowly above the water. From the top, they say, you can see for miles on a clear day.",
      en: "As I walked, I went past the London Eye, the huge wheel that turns slowly above the river. People say that from the top you can see a very long way when the sky is clear.",
    },
    {
      l1: "Street performers were everywhere. A musician played the violin while a small crowd gathered, and a man dressed as a silver statue stood perfectly still.",
      en: "There were street artists all around. A musician played the violin while a little group of people came to watch, and a man painted silver stood without moving at all.",
    },
    {
      l1: "I kept walking until Tower Bridge came into view. Many tourists confuse it with London Bridge, but Tower Bridge is the famous one, with two tall towers and a road that lifts up for ships.",
      en: "I went on walking until I could see Tower Bridge. A lot of visitors mix it up with London Bridge, but Tower Bridge is the famous one, with two high towers and a road that opens upward to let ships pass.",
    },
    {
      l1: "It opened in 1894, and even now the road still rises a few times a week. I was lucky: while I watched, the great arms lifted slowly and a tall boat slipped through.",
      en: "It first opened in 1894, and even today the road still goes up a few times each week. I was in luck: as I watched, the big arms rose slowly and a tall boat passed through.",
    },
    {
      l1: "By then the sun was low, and the river had turned a soft gold. Office workers hurried home across the bridges while the lights of the city began to glow.",
      en: "By that time the sun was low, and the river looked soft and golden. People who work in offices rushed home over the bridges while the city lights started to shine.",
    },
    {
      l1: "I sat on a bench and watched the boats drift by. I had only been in London for a week, yet already the city felt a little like mine.",
      en: "I sat on a bench and watched the boats move slowly past. I had spent just one week in London, but already the city felt a bit like my own.",
    },
  ],
  vocabSpotlight: [
    { l1: "a riverbank / the South Bank", en: "the land and path beside a river" },
    { l1: "to stroll", en: "to walk slowly in a relaxed way" },
    { l1: "to shape (a city)", en: "to give something its form over time" },
    { l1: "a settlement", en: "a place where people first start to live" },
    { l1: "a street performer", en: "an artist who sings, plays, or acts in public for money" },
    { l1: "to confuse (with)", en: "to mistake one thing for another" },
    { l1: "to glow", en: "to give off a soft, steady light" },
    { l1: "a bench", en: "a long seat, often outside, for two or more people" },
  ],
  comprehension: [
    {
      q: "What is the South Bank?",
      options: [
        "A bank where you keep money",
        "A path beside the River Thames",
        "A type of boat",
        "A shopping centre",
      ],
      correct: 1,
    },
    {
      q: "Who built an early settlement by the river?",
      options: ["The Vikings", "The Romans", "The French", "The Saxons"],
      correct: 1,
    },
    {
      q: "What is the London Eye?",
      options: ["A bridge", "A museum", "A giant wheel", "A boat"],
      correct: 2,
    },
    {
      q: "What does Tower Bridge do that surprises the narrator?",
      options: [
        "Its road lifts up for a ship",
        "It changes colour",
        "It plays music",
        "It is closed",
      ],
      correct: 0,
    },
    {
      q: "How long has the narrator been in London?",
      options: ["One day", "One week", "One month", "One year"],
      correct: 1,
    },
  ],
};
