import type { DailyRead } from "../../types";

export const READ_SHICHANG: DailyRead = {
  slug: "shichang",
  order: 6,
  stageUnlock: 3,
  difficulty: 6.5,
  titleL1: "市场",
  titleEn: "The market",
  intro:
    "A bargaining scene at a Beijing market. You'll mix 了 with the present, and pick up the back-and-forth of haggling: 太贵了 (too expensive), 便宜一点 (a bit cheaper).",
  paragraphs: [
    {
      l1: "早上我去了市场。市场里人很多，很热闹。东西又多又便宜。",
      en: "In the morning I went to the market. There were many people, and it was lively. There were lots of cheap things.",
    },
    {
      l1: "我看见很多水果：苹果、香蕉、橘子，还有大大的西瓜。颜色很漂亮。",
      en: "I saw lots of fruit: apples, bananas, oranges, and big watermelons. The colors were beautiful.",
    },
    {
      l1: "一个老板娘叫我：「来看看！我的苹果很甜，你尝一个！」我尝了一个，真的很甜。",
      en: "A stall owner called to me: \"Come take a look! My apples are sweet, try one!\" I tried one, and it really was sweet.",
    },
    {
      l1: "我问：「苹果多少钱一斤？」她说：「十块钱一斤。」我觉得太贵了。",
      en: "I asked: \"How much are the apples per jin?\" She said: \"Ten yuan per jin.\" I thought it was too expensive.",
    },
    {
      l1: "我说：「太贵了！便宜一点吧。」她笑着说：「好吧，八块。你是外国人，给你便宜一点。」",
      en: "I said: \"Too expensive! A bit cheaper, please.\" She smiled and said: \"All right, eight yuan. You're a foreigner, I'll give you a discount.\"",
    },
    {
      l1: "我买了两斤苹果，还买了几个橘子。一共十五块钱。我用手机付了钱。",
      en: "I bought two jin of apples, and also a few oranges. Fifteen yuan in total. I paid with my phone.",
    },
    {
      l1: "我拿着水果走来走去。市场里有人卖菜，有人卖鱼，还有人卖花。很有意思。",
      en: "I walked around holding my fruit. In the market some people were selling vegetables, some fish, and some flowers. It was very interesting.",
    },
    {
      l1: "中午我回宾馆。我吃了一个苹果。又甜又新鲜。买东西真好玩！",
      en: "At noon I went back to the hotel. I ate an apple. Sweet and fresh. Shopping is really fun!",
    },
  ],
  vocabSpotlight: [
    { l1: "市场", en: "market (shìchǎng)" },
    { l1: "水果", en: "fruit (shuǐguǒ)" },
    { l1: "斤", en: "jin (jīn) — a Chinese unit of weight, about 500g" },
    { l1: "太贵了", en: "too expensive! (tài guì le)" },
    { l1: "便宜一点", en: "a bit cheaper (piányi yìdiǎn)" },
    { l1: "尝", en: "to taste / try (cháng)" },
    { l1: "老板娘", en: "(female) shop / stall owner (lǎobǎnniáng)" },
    { l1: "一共", en: "in total / altogether (yígòng)" },
  ],
  comprehension: [
    {
      q: "What did the stall owner invite the narrator to do?",
      options: ["leave", "taste an apple", "pay first", "sell fruit"],
      correct: 1,
    },
    {
      q: "What was the first price quoted for the apples?",
      options: ["8 yuan per jin", "10 yuan per jin", "15 yuan per jin", "5 yuan per jin"],
      correct: 1,
    },
    {
      q: "What does '太贵了' mean?",
      options: ["very fresh", "too expensive", "too sweet", "very cheap"],
      correct: 1,
    },
    {
      q: "What did the narrator pay in total?",
      options: ["8 yuan", "10 yuan", "15 yuan", "20 yuan"],
      correct: 2,
    },
    {
      q: "Besides fruit, what else was being sold at the market?",
      options: ["clothes and shoes", "vegetables, fish, and flowers", "phones", "books"],
      correct: 1,
    },
  ],
};
