import type { DailyRead } from "../../types";

export const READ_KISSATEN: DailyRead = {
  slug: "kissaten",
  order: 3,
  stageUnlock: 1,
  difficulty: 5,
  titleL1: "きっさてんの あさ",
  titleEn: "A morning at the café",
  intro:
    "A little longer now, with your first short conversation. You'll practice ordering with 〜を ください (\"… please\") and the breakfast \"morning set.\" Still present-tense です／ます.",
  paragraphs: [
    {
      l1: "あさ 八（はち）じです。わたしは きっさてんに はいります。",
      en: "It is eight in the morning. I go into a coffee shop.",
    },
    {
      l1: "コーヒーの いい においが します。おんがくが しずかに ながれます。",
      en: "There is a nice smell of coffee. Music plays quietly.",
    },
    {
      l1: "マスターが います。「いらっしゃいませ。おひとりですか」",
      en: "There is the café master. \"Welcome. Just one?\"",
    },
    {
      l1: "「はい、ひとりです」と わたしは いいます。まどの ちかくに すわります。",
      en: "\"Yes, one person,\" I say. I sit near the window.",
    },
    {
      l1: "メニューを みます。「モーニングセットを ください」とわたしは いいます。",
      en: "I look at the menu. \"I'll have the morning set, please,\" I say.",
    },
    {
      l1: "「コーヒーは ホットですか、アイスですか」「ホットを おねがいします」",
      en: "\"Is the coffee hot or iced?\" \"Hot, please.\"",
    },
    {
      l1: "モーニングセットが きます。コーヒーと トーストと たまごです。トーストは あついです。",
      en: "The morning set comes. It is coffee, toast, and an egg. The toast is hot.",
    },
    {
      l1: "マスターが ききます。「がいこくの かたですか」「はい、アメリカから きました」「東京（とうきょう）は どうですか」「とても たのしいです」",
      en: "The master asks, \"Are you from abroad?\" \"Yes, I came from America.\" \"How is Tokyo?\" \"It's a lot of fun.\"",
    },
    {
      l1: "コーヒーは あたたかくて、おいしいです。いい あさです。",
      en: "The coffee is warm and delicious. It is a good morning.",
    },
  ],
  vocabSpotlight: [
    { l1: "きっさてん", en: "old-style coffee shop / café (kissaten)" },
    { l1: "モーニングセット", en: "the \"morning set\" breakfast combo (mōningu setto)" },
    { l1: "〜を ください", en: "\"… please\" — used to order/request something (… o kudasai)" },
    { l1: "ホット／アイス", en: "hot / iced (drink) (hotto / aisu)" },
    { l1: "トースト", en: "toast (tōsuto)" },
    { l1: "たまご", en: "egg (tamago)" },
    { l1: "マスター", en: "the café owner/master behind the counter (masutā)" },
    { l1: "おいしい", en: "delicious (oishii)" },
  ],
  comprehension: [
    {
      q: "What time does the story begin?",
      options: ["7am", "8am", "9am", "10am"],
      correct: 1,
    },
    {
      q: "Where does the narrator sit?",
      options: ["At the counter", "Near the window", "Outside", "By the door"],
      correct: 1,
    },
    {
      q: "What does the narrator order?",
      options: ["Just a coffee", "The morning set", "Tea and cake", "Ramen"],
      correct: 1,
    },
    {
      q: "Does the narrator want the coffee hot or iced?",
      options: ["Hot", "Iced", "Both", "Doesn't say"],
      correct: 0,
    },
    {
      q: "What comes with the morning set?",
      options: ["Rice and miso soup", "Coffee, toast, and an egg", "Pancakes and juice", "Just toast"],
      correct: 1,
    },
  ],
};
