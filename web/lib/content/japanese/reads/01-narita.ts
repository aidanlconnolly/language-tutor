import type { DailyRead } from "../../types";

export const READ_NARITA: DailyRead = {
  slug: "narita",
  order: 1,
  stageUnlock: 1,
  difficulty: 4,
  titleL1: "なりた くうこう",
  titleEn: "Arrival at Narita",
  intro:
    "Your very first read. Everything is hiragana-forward with short です／ます sentences. When a kanji appears, its reading follows in parentheses, like 東京（とうきょう）. Just get used to the rhythm of Japanese sentences.",
  paragraphs: [
    {
      l1: "ひこうきが とまります。ここは なりた くうこうです。",
      en: "The plane stops. This is Narita Airport.",
    },
    {
      l1: "わたしは ドアを でます。くうこうは とても おおきいです。ひとが たくさん います。",
      en: "I go out the door. The airport is very big. There are many people.",
    },
    {
      l1: "「こんにちは」と かかりの ひとが いいます。わたしは パスポートを みせます。",
      en: "\"Hello,\" the staff person says. I show my passport.",
    },
    {
      l1: "「にっぽんへ ようこそ」と かかりの ひとが いいます。わたしは うれしいです。",
      en: "\"Welcome to Japan,\" the staff person says. I am happy.",
    },
    {
      l1: "わたしは でんしゃの きっぷを かいます。「東京（とうきょう）まで おねがいします」",
      en: "I buy a train ticket. \"To Tokyo, please.\"",
    },
    {
      l1: "でんしゃが きます。わたしは でんしゃに のります。せきは しずかです。",
      en: "The train comes. I get on the train. The seat is quiet.",
    },
    {
      l1: "まどから まちが みえます。たんぼと いえが たくさん あります。",
      en: "I can see the town from the window. There are many rice fields and houses.",
    },
    {
      l1: "だんだん ビルが おおきく なります。もうすぐ 東京（とうきょう）です。わたしは どきどきします。",
      en: "Little by little the buildings get bigger. Tokyo is almost here. My heart is pounding.",
    },
  ],
  vocabSpotlight: [
    { l1: "くうこう", en: "airport (kūkō)" },
    { l1: "ひこうき", en: "airplane (hikōki)" },
    { l1: "パスポート", en: "passport (pasupōto)" },
    { l1: "でんしゃ", en: "train (densha)" },
    { l1: "きっぷ", en: "ticket (kippu)" },
    { l1: "ようこそ", en: "welcome (yōkoso)" },
    { l1: "まど", en: "window (mado)" },
    { l1: "どきどきする", en: "to feel one's heart pound, to be nervous/excited (dokidoki suru)" },
  ],
  comprehension: [
    {
      q: "Where does the story take place at the start?",
      options: ["A train station in Tokyo", "Narita Airport", "A hotel", "An inn in Asakusa"],
      correct: 1,
    },
    {
      q: "What does the narrator show the staff person?",
      options: ["A train ticket", "A passport", "A map", "A phone"],
      correct: 1,
    },
    {
      q: "What does the staff person say?",
      options: ["\"Goodbye\"", "\"Welcome to Japan\"", "\"Thank you\"", "\"Please wait\""],
      correct: 1,
    },
    {
      q: "Where is the narrator buying a ticket to?",
      options: ["Asakusa", "Narita", "Tokyo", "Shibuya"],
      correct: 2,
    },
    {
      q: "What can the narrator see from the train window?",
      options: ["The ocean", "Mountains and snow", "Rice fields and houses", "Nothing, it's dark"],
      correct: 2,
    },
  ],
};
