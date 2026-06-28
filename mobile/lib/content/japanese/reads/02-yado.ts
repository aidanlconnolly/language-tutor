import type { DailyRead } from "../../types";

export const READ_YADO: DailyRead = {
  slug: "yado",
  order: 2,
  stageUnlock: 1,
  difficulty: 4.5,
  titleL1: "あさくさの やど",
  titleEn: "The inn in Asakusa",
  intro:
    "Still short です／ます sentences and hiragana-forward. You'll meet a few everyday phrases for arriving somewhere, and the important rule about taking your shoes off indoors.",
  paragraphs: [
    {
      l1: "わたしの やどは あさくさに あります。ちいさい やどです。",
      en: "My inn is in Asakusa. It is a small inn.",
    },
    {
      l1: "ドアを あけます。「ごめんください」と わたしは いいます。",
      en: "I open the door. \"Excuse me, is anyone here?\" I say.",
    },
    {
      l1: "おばさんが きます。「いらっしゃいませ」と おばさんが いいます。やさしい こえです。",
      en: "An older woman comes. \"Welcome,\" she says. It is a kind voice.",
    },
    {
      l1: "「くつを ぬいでください」と おばさんが いいます。わたしは くつを ぬぎます。",
      en: "\"Please take off your shoes,\" she says. I take off my shoes.",
    },
    {
      l1: "ゆかは きれいです。スリッパが あります。わたしは スリッパを はきます。",
      en: "The floor is clean. There are slippers. I put on the slippers.",
    },
    {
      l1: "へやは 二（に）かいです。ちいさいですが、あかるいです。たたみの においが します。",
      en: "The room is on the second floor. It is small, but bright. There is the smell of tatami.",
    },
    {
      l1: "まどから スカイツリーが みえます。とても たかいです。",
      en: "From the window I can see the Skytree. It is very tall.",
    },
    {
      l1: "わたしは ふとんに すわります。「ここは いい やどですね」とわたしは おもいます。",
      en: "I sit on the futon. \"This is a nice inn,\" I think.",
    },
  ],
  vocabSpotlight: [
    { l1: "やど", en: "inn, lodging (yado)" },
    { l1: "ごめんください", en: "\"excuse me / is anyone here?\" — said when entering (gomen kudasai)" },
    { l1: "いらっしゃいませ", en: "\"welcome\" — what shops/inns say to guests (irasshaimase)" },
    { l1: "くつ", en: "shoes (kutsu)" },
    { l1: "ぬぐ", en: "to take off (clothes/shoes) (nugu)" },
    { l1: "たたみ", en: "tatami straw mat (tatami)" },
    { l1: "へや", en: "room (heya)" },
    { l1: "ふとん", en: "futon, bedding (futon)" },
  ],
  comprehension: [
    {
      q: "Where is the inn located?",
      options: ["Shibuya", "Asakusa", "Ueno", "Narita"],
      correct: 1,
    },
    {
      q: "What does the older woman ask the narrator to do?",
      options: ["Pay first", "Take off their shoes", "Be quiet", "Wait outside"],
      correct: 1,
    },
    {
      q: "What does the narrator put on after the shoes come off?",
      options: ["Socks", "Slippers", "Sandals", "Nothing"],
      correct: 1,
    },
    {
      q: "What floor is the room on?",
      options: ["Ground floor", "Second floor", "Third floor", "Basement"],
      correct: 1,
    },
    {
      q: "What can the narrator see from the window?",
      options: ["Mount Fuji", "The Skytree", "The ocean", "A temple"],
      correct: 1,
    },
  ],
};
