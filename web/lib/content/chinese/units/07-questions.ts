import type { Unit } from "../../types";

export const UNIT_QUESTIONS: Unit = {
  slug: "questions",
  stage: 2,
  order: 7,
  icon: "❓",
  title: "Asking questions",
  tagline: "什么/谁/哪儿/什么时候/为什么/怎么 + 吗 and 呢.",
  badge: "core",
  lessons: [
    {
      slug: "questions-what-who-where",
      title: "什么 / 谁 / 哪儿: what, who, where",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Chinese keeps question words in place",
          body: [
            "The single most important rule for Chinese questions: the question word goes <strong>where the answer would go</strong>. You do NOT move it to the front like English.",
            "English asks 'What do you eat?' (moving 'what' up front). Chinese says 你吃<strong>什么</strong>？— literally 'You eat what?' The 什么 sits exactly where the food would be in the answer 我吃面 ('I eat noodles').",
            "Because nothing moves, you can almost always turn an answer into a question by swapping the unknown part for a question word. 他是老师 → 他是<strong>谁</strong>？('He is who?').",
          ],
          keyPoint:
            "Question words stay in place — where the answer goes. No fronting, no word-order change.",
        },
        {
          type: "vocab",
          heading: "The first three question words",
          items: [
            { l1: "什么", en: "what", note: "shénme" },
            { l1: "谁", en: "who / whom", note: "shéi (also read shuí)" },
            { l1: "哪儿", en: "where", note: "nǎr — Beijing/northern style; 哪里 (nǎlǐ) elsewhere" },
            { l1: "吃", en: "to eat", note: "chī" },
            { l1: "去", en: "to go", note: "qù" },
            { l1: "在", en: "to be at / in", note: "zài — location verb" },
            { l1: "面", en: "noodles", note: "miàn" },
          ],
        },
        {
          type: "tip",
          heading: "哪儿 vs 哪里 — a Beijing thing",
          body: "Beijingers love the <strong>儿 (-r)</strong> sound, so 'where' becomes <strong>哪儿 (nǎr)</strong> in the capital and the north. Southern speakers and formal writing prefer <strong>哪里 (nǎlǐ)</strong>. Both mean exactly the same. Since this course is Beijing-themed, we'll default to 哪儿.",
          example: { l1: "你去哪儿？", en: "Where are you going?" },
        },
        {
          type: "fillBlank",
          heading: "Choose the question word",
          intro: "Pick 什么, 谁, or 哪儿.",
          items: [
            {
              template: "你吃 ___ ？",
              answer: "什么",
              en: "What are you eating?",
              options: ["什么", "谁", "哪儿", "吗"],
            },
            {
              template: "他是 ___ ？",
              answer: "谁",
              en: "Who is he?",
              options: ["什么", "谁", "哪儿", "呢"],
            },
            {
              template: "你去 ___ ？",
              answer: "哪儿",
              en: "Where are you going?",
              options: ["什么", "谁", "哪儿", "吗"],
            },
            {
              template: "这是 ___ 的书？",
              answer: "谁",
              en: "Whose book is this?",
              options: ["什么", "谁", "哪儿", "吗"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "What are you eating? Where are you going?",
          reference: "你吃什么？你去哪儿？",
          hint: "Keep the question word in place: 你吃什么 (not '什么你吃'). 'Where' = 哪儿 (nǎr).",
        },
      ],
    },
    {
      slug: "questions-when-why-how",
      title: "什么时候 / 为什么 / 怎么",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "When, why, and how",
          body: [
            "<strong>什么时候 (shénme shíhou)</strong> = 'when' (literally 'what time'). It usually goes <em>before</em> the verb: 你<strong>什么时候</strong>去？('When are you going?').",
            "<strong>为什么 (wèishénme)</strong> = 'why'. It also comes before the verb: 你<strong>为什么</strong>学中文？('Why do you study Chinese?').",
            "<strong>怎么 (zěnme)</strong> = 'how / in what way'. 你<strong>怎么</strong>去？('How do you get there?'). It can also express surprise: 你怎么不吃？('How come you're not eating?').",
          ],
          keyPoint:
            "什么时候 (when), 为什么 (why), and 怎么 (how) all go BEFORE the verb.",
        },
        {
          type: "vocab",
          heading: "More question words",
          items: [
            { l1: "什么时候", en: "when", note: "shénme shíhou — literally 'what time'" },
            { l1: "为什么", en: "why", note: "wèishénme" },
            { l1: "怎么", en: "how / in what way", note: "zěnme" },
            { l1: "学", en: "to study / learn", note: "xué" },
            { l1: "中文", en: "Chinese (language)", note: "Zhōngwén" },
            { l1: "因为", en: "because", note: "yīnwèi — the answer to 为什么" },
            { l1: "坐", en: "to sit / to take (transport)", note: "zuò — 坐地铁 = take the subway" },
          ],
        },
        {
          type: "dialogue",
          heading: "Planning a trip to the Great Wall",
          setup: "You and a friend plan a day at 长城 (the Great Wall).",
          lines: [
            { speaker: "You", l1: "我们什么时候去长城？", en: "When are we going to the Great Wall?" },
            { speaker: "Friend", l1: "明天。你为什么想去？", en: "Tomorrow. Why do you want to go?" },
            { speaker: "You", l1: "因为我很喜欢长城。我们怎么去？", en: "Because I really like the Great Wall. How do we get there?" },
            { speaker: "Friend", l1: "我们坐公交车去。", en: "We'll take the bus." },
          ],
        },
        {
          type: "fillBlank",
          heading: "When, why, or how?",
          intro: "Pick 什么时候, 为什么, or 怎么.",
          items: [
            {
              template: "你 ___ 去北京？",
              answer: "什么时候",
              en: "When are you going to Beijing?",
              options: ["什么时候", "为什么", "怎么", "谁"],
            },
            {
              template: "你 ___ 学中文？",
              answer: "为什么",
              en: "Why do you study Chinese?",
              options: ["什么时候", "为什么", "怎么", "哪儿"],
            },
            {
              template: "我们 ___ 去长城？",
              answer: "怎么",
              en: "How do we get to the Great Wall?",
              options: ["什么时候", "为什么", "怎么", "什么"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Why do you study Chinese?",
          reference: "你为什么学中文？",
          hint: "为什么 (wèishénme, 'why') goes before the verb 学 ('study'). 中文 = Chinese language.",
        },
      ],
    },
    {
      slug: "questions-how-many-and-ne",
      title: "多少 / 几 and the 呢 shortcut",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Two words for 'how many', plus 呢",
          body: [
            "Chinese has two ways to ask 'how many'. <strong>几 (jǐ)</strong> is for small, countable numbers (under ~10) and always takes a measure word: 你有<strong>几</strong>个朋友？('How many friends do you have?').",
            "<strong>多少 (duōshao)</strong> is for larger or open-ended amounts and needs no measure word: 多少钱？('How much money?'). Use it for prices and big counts.",
            "<strong>呢 (ne)</strong> is the 'and you?' shortcut. Instead of repeating a whole question, just say 'noun + 呢?'. After someone asks 你好吗？you answer and bounce it back: 我很好，你<strong>呢</strong>？('I'm fine, and you?').",
          ],
          keyPoint:
            "几 = how many (small, + measure word). 多少 = how many/much (large, no measure word). 呢 = 'and you?'",
        },
        {
          type: "vocab",
          heading: "Counting questions and 呢",
          items: [
            { l1: "几", en: "how many (small number)", note: "jǐ — needs a measure word, e.g. 几个" },
            { l1: "多少", en: "how many / how much", note: "duōshao — no measure word needed" },
            { l1: "钱", en: "money", note: "qián — 多少钱 = how much (money)?" },
            { l1: "个", en: "general measure word", note: "gè — the all-purpose classifier" },
            { l1: "呢", en: "'and …?' particle", note: "ne — bounces a question back" },
            { l1: "块", en: "kuài (yuan, colloquial)", note: "kuài — spoken word for the currency unit" },
          ],
        },
        {
          type: "tip",
          heading: "多少钱？— the phrase you'll use most in Beijing",
          body: "At any market in Beijing — 三里屯, the silk market, a 煎饼 stand — your go-to phrase is <strong>多少钱？(duōshao qián?)</strong> = 'How much?' The reply uses 块 (kuài): 十块 ('ten yuan'). You don't need a measure word with 多少, which makes it quick to fire off.",
          example: { l1: "这个多少钱？— 十五块。", en: "How much is this? — Fifteen yuan." },
        },
        {
          type: "dialogue",
          heading: "Bargaining at a Beijing market",
          setup: "You're buying a fan at a stall in the Panjiayuan market.",
          lines: [
            { speaker: "You", l1: "你好，这个多少钱？", en: "Hello, how much is this?" },
            { speaker: "Vendor", l1: "三十块。", en: "Thirty yuan." },
            { speaker: "You", l1: "有点儿贵。那个呢？", en: "A bit expensive. And that one?" },
            { speaker: "Vendor", l1: "那个二十块。你要几个？", en: "That one's twenty. How many do you want?" },
            { speaker: "You", l1: "我要两个。", en: "I want two." },
          ],
        },
        {
          type: "fillBlank",
          heading: "几, 多少, or 呢?",
          intro: "Pick the right word.",
          items: [
            {
              template: "你有 ___ 个兄弟姐妹？",
              answer: "几",
              en: "How many siblings do you have?",
              options: ["几", "多少", "呢", "谁"],
            },
            {
              template: "这个 ___ 钱？",
              answer: "多少",
              en: "How much is this?",
              options: ["几", "多少", "呢", "怎么"],
            },
            {
              template: "我很好，你 ___ ？",
              answer: "呢",
              en: "I'm fine, and you?",
              options: ["几", "多少", "呢", "吗"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "How much is this? I'm fine, and you?",
          reference: "这个多少钱？我很好，你呢？",
          hint: "Price: 多少钱 (no measure word). 'And you?' = 你呢 (nǐ ne).",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "Which 'how many' needs a measure word and is for small counts?",
              options: ["多少", "几", "呢", "什么"],
              correct: 1,
            },
            {
              q: "'How much (money)?' is…",
              options: ["几钱", "多少钱", "怎么钱", "什么钱"],
              correct: 1,
            },
            {
              q: "After 'I'm fine,' how do you say 'and you?'",
              options: ["你吗", "你呢", "你什么", "你几"],
              correct: 1,
            },
          ],
        },
      ],
    },
  ],
  checkpoint: {
    passingPct: 80,
    questions: [
      {
        q: "Where does a Chinese question word go?",
        options: ["At the front, like English", "Where the answer would go", "Always at the end", "Right after 是"],
        correct: 1,
      },
      {
        q: "Translate: 'What are you eating?'",
        options: ["什么你吃", "你吃什么", "你什么吃", "吃你什么"],
        correct: 1,
      },
      {
        q: "Which word means 'who'?",
        options: ["什么", "谁", "哪儿", "怎么"],
        correct: 1,
      },
      {
        q: "In Beijing, 'where' is usually said as…",
        options: ["哪里", "哪儿", "什么地方", "在哪"],
        correct: 1,
      },
      {
        q: "什么时候, 为什么, and 怎么 usually go…",
        options: ["after the verb", "before the verb", "at the very end", "before 是 only"],
        correct: 1,
      },
      {
        q: "Translate: 'Why do you study Chinese?'",
        options: ["你学为什么中文", "你为什么学中文", "为什么你中文学", "你学中文为什么"],
        correct: 1,
      },
      {
        q: "几 ('how many') requires…",
        options: ["nothing extra", "a measure word", "the particle 吗", "the word 钱"],
        correct: 1,
      },
      {
        q: "For prices and large amounts, use…",
        options: ["几", "多少", "怎么", "谁"],
        correct: 1,
      },
      {
        q: "'I'm fine, and you?' is…",
        options: ["我很好，你吗？", "我很好，你呢？", "我很好，你什么？", "我很好，你几？"],
        correct: 1,
      },
      {
        q: "怎么 means…",
        options: ["when", "why", "how / in what way", "who"],
        correct: 2,
      },
    ],
  },
};
