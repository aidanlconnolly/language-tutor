import type { DailyRead } from "../../types";

export const READ_CHAGUAN: DailyRead = {
  slug: "chaguan",
  order: 3,
  stageUnlock: 1,
  difficulty: 5,
  titleL1: "茶馆的早上",
  titleEn: "A morning at the teahouse",
  intro:
    "Your first short conversation with ordering. Watch for 要 (want / would like) and 请 (please) — the polite way to ask for things in Chinese.",
  paragraphs: [
    {
      l1: "今天是我的第一个早上。我很早起床。我想喝茶。",
      en: "Today is my first morning. I get up very early. I want to drink tea.",
    },
    {
      l1: "我出门。在街角有一个小茶馆。门口写着两个字：「茶馆」。",
      en: "I go out. There's a little teahouse on the street corner. Two characters are written at the door: \"teahouse.\"",
    },
    {
      l1: "我进去。里面很安静。一个老人在看报纸。一个女人在倒茶。",
      en: "I go in. Inside it's very quiet. An old man is reading a newspaper. A woman is pouring tea.",
    },
    {
      l1: "女人看我。她笑着说：「早上好！你要喝什么？」",
      en: "The woman looks at me. She smiles and says: \"Good morning! What would you like to drink?\"",
    },
    {
      l1: "「你好。我要一杯茶，还要一个包子。」「好的，请坐。」",
      en: "\"Hello. I'd like a cup of tea, and also a bun.\" \"All right, please have a seat.\"",
    },
    {
      l1: "我坐下。茶很热，也很香。包子是热的，里面有肉。很好吃。",
      en: "I sit down. The tea is hot and fragrant. The bun is warm, with meat inside. It's delicious.",
    },
    {
      l1: "老人看我。他问：「你是哪国人？」「我是美国人。」「你的中文不错！」",
      en: "The old man looks at me. He asks: \"What country are you from?\" \"I'm American.\" \"Your Chinese isn't bad!\"",
    },
    {
      l1: "我很高兴。我喝茶，吃包子，看外面的人。这个早上很好。",
      en: "I am very happy. I drink tea, eat my bun, and watch the people outside. This morning is wonderful.",
    },
  ],
  vocabSpotlight: [
    { l1: "茶馆", en: "teahouse (cháguǎn)" },
    { l1: "要", en: "to want / would like (yào) — used to order things" },
    { l1: "请", en: "please / to invite (qǐng); 请坐 = please sit" },
    { l1: "包子", en: "steamed bun (bāozi)" },
    { l1: "一杯茶", en: "a cup of tea (yì bēi chá)" },
    { l1: "香", en: "fragrant (xiāng)" },
    { l1: "哪国人", en: "from which country (nǎ guó rén)" },
    { l1: "不错", en: "not bad / pretty good (búcuò)" },
  ],
  comprehension: [
    {
      q: "When does the narrator get up?",
      options: ["very late", "very early", "at noon", "at night"],
      correct: 1,
    },
    {
      q: "What is the old man doing inside the teahouse?",
      options: ["pouring tea", "sleeping", "reading a newspaper", "eating a bun"],
      correct: 2,
    },
    {
      q: "What does the narrator order?",
      options: ["coffee and bread", "a cup of tea and a bun", "rice and soup", "water only"],
      correct: 1,
    },
    {
      q: "What is inside the bun?",
      options: ["vegetables", "nothing", "meat", "egg"],
      correct: 2,
    },
    {
      q: "What does the old man say about the narrator's Chinese?",
      options: ["it's perfect", "it's not bad", "it's very poor", "he says nothing"],
      correct: 1,
    },
  ],
};
