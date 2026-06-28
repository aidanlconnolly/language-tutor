import type { Unit } from "../../types";

export const UNIT_DIET_DRINKS: Unit = {
  slug: "diet-drinks",
  stage: 4,
  order: 18,
  icon: "🍵",
  title: "Drinks & dietary needs",
  tagline: "水, 啤酒, 我不吃…, 过敏 (allergies).",
  badge: "tourist",
  lessons: [
    {
      slug: "diet-drinks-beverages",
      title: "水, 啤酒, 果汁 — drinks and the hot-water thing",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Ordering drinks at the table",
          body: [
            "The basic drink word is <strong>水</strong> (shuǐ, water). But in China, plain water at a restaurant often means <strong>热水</strong> (rè shuǐ, hot water) — many people drink water hot, and it's frequently free. If you want cold, ask for <strong>冰水</strong> (bīng shuǐ) or <strong>凉水</strong> (liáng shuǐ).",
            "Other common drinks: <strong>啤酒</strong> (píjiǔ, beer), <strong>果汁</strong> (guǒzhī, juice), <strong>可乐</strong> (kělè, cola), <strong>汽水</strong> (qìshuǐ, soda).",
            "To order a drink, use the same patterns you know: <em>来一瓶啤酒</em> (a bottle of beer) or <em>我要一杯果汁</em> (a glass of juice). Note the measure words: <strong>瓶</strong> (píng, bottle) and <strong>杯</strong> (bēi, cup/glass).",
          ],
          keyPoint:
            "水 = water (often served hot!). 冰水 = cold water. Drinks: 啤酒 beer, 果汁 juice. 瓶 = bottle, 杯 = cup.",
        },
        {
          type: "vocab",
          heading: "Drinks",
          items: [
            { l1: "水", en: "water", note: "shuǐ — often served hot by default" },
            { l1: "热水", en: "hot water", note: "rè shuǐ" },
            { l1: "冰水", en: "ice / cold water", note: "bīng shuǐ" },
            { l1: "啤酒", en: "beer", note: "píjiǔ — Beijing favourite: 燕京 Yanjing" },
            { l1: "果汁", en: "juice", note: "guǒzhī" },
            { l1: "可乐", en: "cola", note: "kělè" },
            { l1: "汽水", en: "soda / soft drink", note: "qìshuǐ" },
            { l1: "茶", en: "tea", note: "chá — often free at restaurants" },
            { l1: "一瓶", en: "one bottle", note: "yì píng — 瓶 = bottle measure word" },
            { l1: "白酒", en: "baijiu (strong grain liquor)", note: "báijiǔ — for toasts, very strong" },
          ],
        },
        {
          type: "tip",
          heading: "Why the water is hot",
          body: "Don't be surprised when you ask for 水 and get a cup of steaming <strong>热水</strong> (rè shuǐ). Drinking hot or warm water is a deep-rooted Chinese habit tied to traditional ideas about health and digestion — many believe cold drinks shock the body. Tap water isn't drunk plain, so restaurants serve boiled water or tea. If you specifically want it cold, say <em>我要冰水</em> or <em>凉的，谢谢</em> (\"cold, please\").",
          example: { l1: "我要冰水，谢谢。", en: "I'd like cold water, thank you." },
        },
        {
          type: "dialogue",
          heading: "Ordering drinks",
          setup: "You've sat down and the server asks about drinks.",
          lines: [
            { speaker: "服务员", l1: "喝点儿什么？", en: "What would you like to drink?" },
            { speaker: "你", l1: "来一瓶啤酒，还有一杯果汁。", en: "A bottle of beer, and a glass of juice." },
            { speaker: "服务员", l1: "啤酒要冰的吗？", en: "Do you want the beer cold?" },
            { speaker: "你", l1: "要冰的。再给我一杯冰水。", en: "Yes, cold. And give me a glass of cold water too." },
            { speaker: "服务员", l1: "好的，马上来。", en: "Okay, coming right up." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Drinks comprehension",
          questions: [
            {
              q: "If you just ask for '水', you may well receive…",
              options: ["sparkling water", "hot water", "juice", "beer"],
              correct: 1,
            },
            {
              q: "How do you ask for cold water?",
              options: ["热水", "冰水", "果汁", "汽水"],
              correct: 1,
            },
            {
              q: "Which measure word goes with a bottle of beer?",
              options: ["杯", "瓶", "碗", "位"],
              correct: 1,
              fb: "瓶 (píng) = bottle: 一瓶啤酒. 杯 is for cups/glasses.",
            },
          ],
        },
      ],
    },
    {
      slug: "diet-drinks-dietary-needs",
      title: "我不吃… / 我对…过敏 — dietary needs",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Saying what you can't eat",
          body: [
            "To say you don't eat something, use <strong>我不吃…</strong> (wǒ bù chī…, \"I don't eat…\"): <em>我不吃肉</em> (I don't eat meat), <em>我不吃猪肉</em> (I don't eat pork).",
            "For allergies, the key word is <strong>过敏</strong> (guòmǐn, allergic). The pattern is <strong>我对…过敏</strong> (wǒ duì … guòmǐn, \"I'm allergic to …\"): <em>我对花生过敏</em> (I'm allergic to peanuts).",
            "Vegetarian is <strong>素食</strong> (sùshí) or you can say <strong>我吃素</strong> (wǒ chī sù, \"I eat vegetarian\"). Be aware many \"vegetable\" dishes are cooked with meat broth or a few bits of pork, so it helps to add <em>一点肉都不要</em> (\"no meat at all\").",
          ],
          keyPoint:
            "我不吃… = I don't eat… . 我对…过敏 = I'm allergic to… . 我吃素 / 素食 = vegetarian.",
        },
        {
          type: "vocab",
          heading: "Dietary vocabulary",
          items: [
            { l1: "我不吃", en: "I don't eat…", note: "wǒ bù chī" },
            { l1: "过敏", en: "to be allergic", note: "guòmǐn" },
            { l1: "我对…过敏", en: "I'm allergic to…", note: "wǒ duì … guòmǐn" },
            { l1: "花生", en: "peanut(s)", note: "huāshēng — a very common allergen" },
            { l1: "海鲜", en: "seafood", note: "hǎixiān" },
            { l1: "鸡蛋", en: "egg", note: "jīdàn" },
            { l1: "素食", en: "vegetarian food", note: "sùshí" },
            { l1: "我吃素", en: "I'm vegetarian / I eat vegetarian", note: "wǒ chī sù" },
            { l1: "味精", en: "MSG", note: "wèijīng — say 不要味精 to skip it" },
            { l1: "清真", en: "halal", note: "qīngzhēn — look for 清真 signs" },
          ],
        },
        {
          type: "tip",
          heading: "Check the broth — 'vegetable' isn't always vegetarian",
          body: "Many seemingly meat-free Chinese dishes are stir-fried with lard, finished with a few shreds of pork, or simmered in chicken/pork stock. If you're vegetarian, saying <strong>我吃素</strong> isn't always enough — add <strong>一点肉都不要</strong> (yìdiǎn ròu dōu bú yào, \"no meat at all\") and ask about the broth: <em>有肉汤吗？</em> (\"is there meat broth?\"). For strict needs, look for a dedicated 素食 restaurant or 清真 (halal) spot.",
          example: { l1: "我吃素，一点肉都不要。", en: "I'm vegetarian — no meat at all." },
        },
        {
          type: "fillBlank",
          heading: "Express your needs",
          intro: "Complete each sentence.",
          items: [
            {
              template: "我不___猪肉。",
              answer: "吃",
              en: "I don't eat pork.",
              options: ["吃", "喝", "要", "对"],
            },
            {
              template: "我对花生___。",
              answer: "过敏",
              en: "I'm allergic to peanuts.",
              options: ["过敏", "好吃", "辣", "饱"],
            },
            {
              template: "我吃___，请不要放肉。",
              answer: "素",
              en: "I'm vegetarian, please don't add meat.",
              options: ["素", "辣", "肉", "饭"],
            },
            {
              template: "我对___过敏，有海鲜的菜我不能吃。",
              answer: "海鲜",
              en: "I'm allergic to seafood; I can't eat dishes with seafood.",
              options: ["海鲜", "米饭", "茶", "热水"],
            },
          ],
        },
        {
          type: "dialogue",
          heading: "Telling the server your needs",
          setup: "Before ordering, you flag your dietary restrictions.",
          lines: [
            { speaker: "你", l1: "服务员，我对花生过敏，菜里别放花生。", en: "Waiter, I'm allergic to peanuts — no peanuts in the food." },
            { speaker: "服务员", l1: "好的，我跟厨房说。", en: "Okay, I'll tell the kitchen." },
            { speaker: "你", l1: "还有，我朋友吃素，有素菜吗？", en: "Also, my friend is vegetarian — do you have vegetarian dishes?" },
            { speaker: "服务员", l1: "有，这几个都是素的。", en: "Yes, these few are all vegetarian." },
            { speaker: "你", l1: "太好了，谢谢！", en: "Great, thank you!" },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "I'm allergic to peanuts, and I don't eat pork.",
          reference: "我对花生过敏，我也不吃猪肉。",
          hint: "Allergy pattern: 我对 + 花生 + 过敏. 'I don't eat pork' = 我不吃猪肉. 也 = also.",
        },
      ],
    },
    {
      slug: "diet-drinks-group-toast",
      title: "干杯！ — ordering for a group and toasting",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Eating and drinking together",
          body: [
            "Group meals are the heart of Chinese dining. One person usually orders for the whole table, choosing a balanced set of dishes. Polite phrases: <strong>你们想吃什么？</strong> (what do you all want to eat?) and <strong>我来点</strong> (wǒ lái diǎn, \"let me order\").",
            "Drinking together comes with the toast <strong>干杯！</strong> (gānbēi!, literally \"dry the cup\" — cheers!). In a formal 干杯 you're meant to finish your glass, though casually people just clink and sip.",
            "When clinking glasses with someone senior, it's respectful to hold your glass slightly <em>lower</em> than theirs. Toasts are often made with <strong>白酒</strong> (báijiǔ) or <strong>啤酒</strong> (píjiǔ).",
          ],
          keyPoint:
            "干杯！ = cheers (lit. 'dry the cup'). One person orders for the table: 我来点. Lower your glass to show respect.",
        },
        {
          type: "vocab",
          heading: "Group dining & toasting",
          items: [
            { l1: "干杯", en: "cheers! (lit. 'dry the cup')", note: "gānbēi" },
            { l1: "我来点", en: "let me order (for the table)", note: "wǒ lái diǎn" },
            { l1: "随便", en: "anything's fine / up to you", note: "suíbiàn — a polite reply when asked to choose" },
            { l1: "敬", en: "to toast (honour) someone", note: "jìng — 我敬你 = a toast to you" },
            { l1: "再来一瓶", en: "another bottle, please", note: "zài lái yì píng" },
            { l1: "分一下", en: "let's split it / share it out", note: "fēn yíxià" },
            { l1: "够了", en: "that's enough", note: "gòu le" },
            { l1: "慢慢吃", en: "enjoy your meal (lit. 'eat slowly')", note: "màn man chī" },
          ],
        },
        {
          type: "tip",
          heading: "干杯 and the lower-glass rule",
          body: "<strong>干杯</strong> (gānbēi) literally orders you to \"dry the cup\" — in a serious business or banquet toast that means emptying it. Casually, people just clink and drink a little. The key etiquette move: when toasting someone older or more senior, lower the rim of your glass below theirs as you clink — a small bow of respect. To honour a specific person, say <strong>我敬你</strong> (wǒ jìng nǐ, \"a toast to you\").",
          example: { l1: "我敬大家，干杯！", en: "A toast to everyone — cheers!" },
        },
        {
          type: "dialogue",
          heading: "A group dinner",
          setup: "Four of you sit down; one person takes charge of ordering.",
          lines: [
            { speaker: "朋友", l1: "你们想吃什么？", en: "What do you all want to eat?" },
            { speaker: "你", l1: "随便，你来点吧。", en: "Anything's fine, you order." },
            { speaker: "朋友", l1: "好，我点几个菜。服务员，再来一瓶啤酒！", en: "Okay, I'll order a few dishes. Waiter, another bottle of beer!" },
            { speaker: "朋友", l1: "菜来了，我敬大家，干杯！", en: "The food's here — a toast to everyone, cheers!" },
            { speaker: "你", l1: "干杯！慢慢吃。", en: "Cheers! Enjoy the meal." },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the sentence",
          intro: "Tap the words into the correct order.",
          items: [
            { tokens: ["你们", "想", "吃", "什么"], en: "What do you all want to eat?" },
            { tokens: ["我", "来", "点", "吧"], en: "Let me order." },
            { tokens: ["再", "来", "一瓶", "啤酒"], en: "Another bottle of beer, please." },
            { tokens: ["我", "敬", "大家", "，", "干杯"], en: "A toast to everyone — cheers!" },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Anything's fine, you order. Another bottle of beer, please. Cheers!",
          reference: "随便，你来点吧。再来一瓶啤酒。干杯！",
          hint: "随便 = anything's fine, 你来点吧 = you order, 再来一瓶 = another bottle, 干杯 = cheers.",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "'干杯' literally means…",
              options: ["enjoy your meal", "dry the cup (cheers)", "the bill, please", "another bottle"],
              correct: 1,
            },
            {
              q: "When toasting someone senior, you should hold your glass…",
              options: ["higher than theirs", "lower than theirs", "behind your back", "at eye level"],
              correct: 1,
            },
            {
              q: "If asked what you want and you don't mind, a polite reply is…",
              options: ["随便", "干杯", "过敏", "买单"],
              correct: 0,
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
        q: "If you ask for '水' at a restaurant, you may well receive…",
        options: ["sparkling water", "hot water", "beer", "juice"],
        correct: 1,
      },
      {
        q: "How do you ask for cold water?",
        options: ["热水", "冰水", "果汁", "白酒"],
        correct: 1,
      },
      {
        q: "The measure word for a bottle of beer is…",
        options: ["杯", "瓶", "碗", "位"],
        correct: 1,
      },
      {
        q: "'I don't eat pork' is…",
        options: ["我不喝猪肉", "我不吃猪肉", "我对猪肉", "我吃素猪肉"],
        correct: 1,
      },
      {
        q: "The allergy pattern '我对…过敏' means…",
        options: ["I like…", "I'm allergic to…", "I don't want…", "I'm full of…"],
        correct: 1,
      },
      {
        q: "'我吃素' means…",
        options: ["I'm allergic", "I'm vegetarian", "I'm full", "I'm thirsty"],
        correct: 1,
      },
      {
        q: "Why might a 'vegetable' dish not be truly vegetarian?",
        options: [
          "it's always sweet",
          "it may be cooked with lard, pork bits, or meat broth",
          "it's served cold",
          "it contains peanuts only",
        ],
        correct: 1,
      },
      {
        q: "'干杯' means…",
        options: ["enjoy your meal", "cheers (dry the cup)", "the bill", "another serving"],
        correct: 1,
      },
      {
        q: "When toasting someone older/senior, hold your glass…",
        options: ["higher than theirs", "lower than theirs", "you don't clink", "with two hands only"],
        correct: 1,
      },
      {
        q: "Translate: 'I'm allergic to peanuts, and I don't eat pork.'",
        options: [
          "我对花生过敏，我也不吃猪肉。",
          "我花生过敏，猪肉吃不。",
          "我不吃花生，对猪肉过敏。",
          "花生我过敏，我猪肉也吃。",
        ],
        correct: 0,
      },
    ],
  },
};
