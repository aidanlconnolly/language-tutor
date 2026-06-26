import type { DailyRead } from "../../types";

export const READ_JICHANG: DailyRead = {
  slug: "jichang",
  order: 1,
  stageUnlock: 1,
  difficulty: 4,
  titleL1: "在机场",
  titleEn: "At the airport",
  intro:
    "Your very first read. Short SVO sentences, only the most common characters, all present. Try to read the Chinese first, then check the English.",
  paragraphs: [
    {
      l1: "我到北京了。这是机场。机场很大，人很多。",
      en: "I have arrived in Beijing. This is the airport. The airport is very big, and there are many people.",
    },
    {
      l1: "我很累。飞机很长。我坐了十二个小时。",
      en: "I am very tired. The flight was long. I sat for twelve hours.",
    },
    {
      l1: "我去看护照。一个人说：「你好。请给我你的护照。」",
      en: "I go to show my passport. A person says: \"Hello. Please give me your passport.\"",
    },
    {
      l1: "我给他护照。他看一看。「你来北京做什么？」「我来旅游。」",
      en: "I give him the passport. He takes a look. \"What are you coming to Beijing to do?\" \"I'm here to travel.\"",
    },
    {
      l1: "「好。欢迎你来中国。」他还给我护照。我说：「谢谢。」",
      en: "\"Good. Welcome to China.\" He gives me back the passport. I say: \"Thank you.\"",
    },
    {
      l1: "我拿我的行李。行李很重。我有一个大箱子。",
      en: "I get my luggage. The luggage is heavy. I have one big suitcase.",
    },
    {
      l1: "我想去市里。我坐机场快线。火车很快，也很干净。",
      en: "I want to go into the city. I take the airport express. The train is fast and also clean.",
    },
    {
      l1: "火车开了。我看窗外。北京很大。我的旅行开始了。",
      en: "The train departs. I look out the window. Beijing is very big. My trip has begun.",
    },
  ],
  vocabSpotlight: [
    { l1: "机场", en: "airport (jīchǎng)" },
    { l1: "护照", en: "passport (hùzhào)" },
    { l1: "行李", en: "luggage (xíngli)" },
    { l1: "箱子", en: "suitcase / box (xiāngzi)" },
    { l1: "旅游", en: "to travel / tourism (lǚyóu)" },
    { l1: "机场快线", en: "airport express (jīchǎng kuàixiàn)" },
    { l1: "欢迎", en: "welcome (huānyíng)" },
    { l1: "累", en: "tired (lèi)" },
  ],
  comprehension: [
    {
      q: "How long was the flight?",
      options: ["2 hours", "8 hours", "12 hours", "24 hours"],
      correct: 2,
    },
    {
      q: "What does the officer ask the narrator to give him?",
      options: ["the ticket", "the passport", "the luggage", "money"],
      correct: 1,
    },
    {
      q: "Why has the narrator come to Beijing?",
      options: ["to work", "to study", "to travel", "to visit family"],
      correct: 2,
    },
    {
      q: "How does the narrator get into the city?",
      options: ["by taxi", "by bus", "by the airport express train", "by subway"],
      correct: 2,
    },
    {
      q: "How is the train described?",
      options: ["slow and dirty", "fast and clean", "old and small", "crowded and hot"],
      correct: 1,
    },
  ],
};
