import type { DailyRead } from "../../types";

export const READ_FANGUAN: DailyRead = {
  slug: "fanguan",
  order: 4,
  stageUnlock: 2,
  difficulty: 5.5,
  titleL1: "在饭馆吃午饭",
  titleEn: "Lunch at the restaurant",
  intro:
    "Sentences are getting a little longer. You'll order dumplings, ask the price, and pay by scanning a QR code (扫码) — the normal way to pay in China.",
  paragraphs: [
    {
      l1: "中午我饿了。我想吃午饭。我找了一个小饭馆。",
      en: "At noon I'm hungry. I want to eat lunch. I found a small restaurant.",
    },
    {
      l1: "饭馆里人很多，很热闹。一个服务员给我一张菜单。",
      en: "There are a lot of people in the restaurant, and it's lively. A waiter gives me a menu.",
    },
    {
      l1: "我看菜单。上面有很多菜，可是我看不懂。我只认识两个字：「饺子」。",
      en: "I look at the menu. There are many dishes on it, but I can't read them. I only recognize two characters: \"dumplings.\"",
    },
    {
      l1: "服务员来了。他问：「你要点什么？」我说：「我要一盘饺子和一碗汤。」",
      en: "The waiter comes. He asks: \"What would you like to order?\" I say: \"I'd like a plate of dumplings and a bowl of soup.\"",
    },
    {
      l1: "「你要喝什么？」「我要一杯茶，谢谢。」「好的，请等一下。」",
      en: "\"What would you like to drink?\" \"I'd like a cup of tea, thank you.\" \"All right, please wait a moment.\"",
    },
    {
      l1: "过了一会儿，饺子来了。饺子很大，里面有肉和菜。又香又好吃。",
      en: "After a little while, the dumplings come. The dumplings are big, with meat and vegetables inside. They're fragrant and delicious.",
    },
    {
      l1: "我吃完了。我问服务员：「多少钱？」他说：「三十五块。」",
      en: "I finish eating. I ask the waiter: \"How much is it?\" He says: \"Thirty-five yuan.\"",
    },
    {
      l1: "我用手机扫码付钱。很方便！我说「再见」，然后出门。",
      en: "I use my phone to scan the QR code and pay. So convenient! I say \"goodbye,\" then leave.",
    },
  ],
  vocabSpotlight: [
    { l1: "饭馆", en: "restaurant (fànguǎn)" },
    { l1: "菜单", en: "menu (càidān)" },
    { l1: "服务员", en: "waiter / server (fúwùyuán)" },
    { l1: "点菜", en: "to order food (diǎn cài)" },
    { l1: "饺子", en: "dumplings (jiǎozi)" },
    { l1: "多少钱", en: "how much money? (duōshao qián)" },
    { l1: "块", en: "yuan (kuài) — spoken word for the currency unit" },
    { l1: "扫码", en: "to scan a QR code to pay (sǎomǎ)" },
  ],
  comprehension: [
    {
      q: "Why does the narrator go to a restaurant?",
      options: ["to meet a friend", "because it's noon and he's hungry", "to read the menu", "to use the wifi"],
      correct: 1,
    },
    {
      q: "How many characters on the menu can the narrator read?",
      options: ["all of them", "none", "only two ('dumplings')", "ten"],
      correct: 2,
    },
    {
      q: "What does the narrator order?",
      options: ["rice and tea", "a plate of dumplings and a bowl of soup", "noodles and soda", "just soup"],
      correct: 1,
    },
    {
      q: "How much does the meal cost?",
      options: ["15 yuan", "25 yuan", "35 yuan", "55 yuan"],
      correct: 2,
    },
    {
      q: "How does the narrator pay?",
      options: ["with cash", "with a credit card", "by scanning a QR code with his phone", "the meal was free"],
      correct: 2,
    },
  ],
};
