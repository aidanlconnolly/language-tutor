import type { DailyRead } from "../../types";

export const READ_SHIBUYA: DailyRead = {
  slug: "shibuya",
  order: 6,
  stageUnlock: 3,
  difficulty: 6.5,
  titleL1: "しぶやで かいもの",
  titleEn: "Shopping in Shibuya",
  intro:
    "Past tense plus the て-form, which links actions together (\"I did X and then Y\"). Sentences are longer and there's more kanji. Watch how 〜て strings the day's events into a flow.",
  paragraphs: [
    {
      l1: "ごご、わたしは でんしゃに のって、しぶやに いきました。しぶやは わかい ひとが おおい まちです。",
      en: "In the afternoon, I got on the train and went to Shibuya. Shibuya is a town with many young people.",
    },
    {
      l1: "えきを でて、すぐに あの ゆうめいな こうさてんが ありました。「スクランブルこうさてん」です。",
      en: "I left the station and right away there was that famous crossing. It is the \"scramble crossing.\"",
    },
    {
      l1: "しんごうが あおに なって、たくさんの ひとが いっしょに みちを わたりました。みんな ぶつからないで あるいて、すごいと おもいました。",
      en: "The light turned green, and a huge number of people crossed the street together. Everyone walked without bumping into each other, and I thought it was amazing.",
    },
    {
      l1: "わたしは ハチこうの どうぞうを みました。ハチこうは ゆうめいな いぬで、まいにち ご主人（しゅじん）を まっていました。すこし かなしい はなしです。",
      en: "I looked at the statue of Hachikō. Hachikō was a famous dog who waited for his master every day. It is a slightly sad story.",
    },
    {
      l1: "それから、わたしは おおきい デパートに はいって、かいものを しました。Tシャツを 二（に）まいと、おみやげの おかしを かいました。",
      en: "After that, I went into a big department store and did some shopping. I bought two T-shirts and some souvenir sweets.",
    },
    {
      l1: "てんいんが 「ぜんぶで 三千五百（さんぜんごひゃく）えんです」と いいました。わたしは カードを だして、はらいました。",
      en: "The clerk said, \"That's 3,500 yen in total.\" I took out my card and paid.",
    },
    {
      l1: "「ありがとうございました」と てんいんが あたまを さげて、ふくろを わたしました。にっぽんの サービスは ていねいだと かんじました。",
      en: "\"Thank you very much,\" the clerk said, bowing her head, and handed me the bag. I felt that Japanese service is polite.",
    },
    {
      l1: "そとに でて、そらを みました。もう くらく なって、ネオンが きらきら ひかっていました。しぶやの よるは とても にぎやかでした。",
      en: "I went outside and looked at the sky. It had already gotten dark, and the neon lights were sparkling. The Shibuya night was very lively.",
    },
  ],
  vocabSpotlight: [
    { l1: "こうさてん", en: "intersection, crossing (kōsaten)" },
    { l1: "スクランブルこうさてん", en: "the famous \"scramble\" crossing (sukuranburu kōsaten)" },
    { l1: "しんごう", en: "traffic light (shingō)" },
    { l1: "わたる", en: "to cross (a street) (wataru)" },
    { l1: "ハチこう", en: "Hachikō, the loyal-dog statue (hachikō)" },
    { l1: "かいもの", en: "shopping (kaimono)" },
    { l1: "はらう", en: "to pay (harau)" },
    { l1: "にぎやか", en: "lively, bustling (nigiyaka)" },
  ],
  comprehension: [
    {
      q: "How did the narrator get to Shibuya?",
      options: ["By bus", "By train", "On foot", "By taxi"],
      correct: 1,
    },
    {
      q: "What is the famous crossing called?",
      options: ["Kaminarimon", "The scramble crossing", "Nakamise", "Hachikō crossing"],
      correct: 1,
    },
    {
      q: "Who was Hachikō?",
      options: ["A famous actor", "A loyal dog", "A shop owner", "A train conductor"],
      correct: 1,
    },
    {
      q: "What did the narrator buy?",
      options: ["A jacket and shoes", "Two T-shirts and souvenir sweets", "A camera", "Books and tea"],
      correct: 1,
    },
    {
      q: "How did the narrator pay?",
      options: ["With cash", "With a card", "With a phone app", "With a coupon"],
      correct: 1,
    },
  ],
};
