import type { Unit } from "../../types";

export const UNIT_CAFE: Unit = {
  slug: "cafe",
  stage: 4,
  order: 15,
  icon: "☕",
  title: "Café & tea",
  tagline: "咖啡, 茶, …请 — ordering drinks.",
  badge: "tourist",
  lessons: [
    {
      slug: "cafe-ordering-drinks",
      title: "我要… — ordering coffee and tea",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "The two-word ordering trick",
          body: [
            "To order almost anything in China you only need <strong>我要…</strong> (wǒ yào…, \"I want…\") followed by the thing, then <strong>谢谢</strong> (xièxie, \"thank you\"). That's a complete, polite order.",
            "Beijing now has cafés everywhere — local chains like Luckin (瑞幸) on every corner, plus traditional teahouses (茶馆). At a café you'll order 咖啡 (kāfēi, coffee); at a teahouse, 茶 (chá, tea).",
            "Politeness in Mandarin is mostly about <strong>请</strong> (qǐng, please) and <strong>谢谢</strong>. There's no aggressive tipping or over-the-top scripting — short and clear is friendly.",
          ],
          keyPoint:
            "我要 + [drink] + 谢谢 = a complete polite order. 请 = please, 谢谢 = thank you.",
        },
        {
          type: "vocab",
          heading: "Café basics",
          items: [
            { l1: "咖啡", en: "coffee", note: "kāfēi" },
            { l1: "茶", en: "tea", note: "chá" },
            { l1: "我要", en: "I want / I'll have", note: "wǒ yào — the everyday way to order" },
            { l1: "请", en: "please", note: "qǐng — also 'please go ahead'" },
            { l1: "谢谢", en: "thank you", note: "xièxie" },
            { l1: "美式咖啡", en: "americano", note: "měishì kāfēi — lit. 'American-style coffee'" },
            { l1: "拿铁", en: "latte", note: "ná tiě — borrowed from Italian 'latte'" },
            { l1: "卡布奇诺", en: "cappuccino", note: "kǎbùqínuò" },
            { l1: "一杯", en: "one cup / one glass", note: "yì bēi — 杯 is the measure word for drinks" },
            { l1: "牛奶", en: "milk", note: "niúnǎi" },
            { l1: "糖", en: "sugar", note: "táng" },
          ],
        },
        {
          type: "tip",
          heading: "杯 — you can't skip the measure word",
          body: "In Mandarin you never say just \"two coffees.\" You need a <strong>measure word</strong> between the number and the noun. For drinks it's <strong>杯</strong> (bēi, cup): <em>一杯咖啡</em> (one coffee), <em>两杯茶</em> (two teas). Note: 'two' before a measure word is <strong>两</strong> (liǎng), not 二 (èr).",
          example: { l1: "我要两杯咖啡。", en: "I'll have two coffees." },
        },
        {
          type: "dialogue",
          heading: "At a Luckin counter",
          setup: "You step up to order at a busy café near Wangfujing.",
          lines: [
            { speaker: "店员", l1: "您好，要点什么？", en: "Hello, what would you like to order?" },
            { speaker: "你", l1: "我要一杯美式咖啡。", en: "I'll have an americano." },
            { speaker: "店员", l1: "要加牛奶或者糖吗？", en: "Do you want milk or sugar added?" },
            { speaker: "你", l1: "不用，谢谢。", en: "No need, thank you." },
            { speaker: "店员", l1: "好的，请稍等。", en: "Okay, please wait a moment." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Order comprehension",
          questions: [
            {
              q: "How do you say 'I want a coffee'?",
              options: ["我咖啡要。", "我要一杯咖啡。", "咖啡我一。", "要我咖啡。"],
              correct: 1,
            },
            {
              q: "Which word is the measure word for drinks?",
              options: ["杯", "个", "请", "要"],
              correct: 0,
            },
            {
              q: "'两' (liǎng) is used instead of 二 (èr) when…",
              options: [
                "counting money",
                "it comes before a measure word like 杯",
                "the noun is a drink",
                "speaking formally",
              ],
              correct: 1,
              fb: "两 replaces 二 directly before a measure word: 两杯, not 二杯.",
            },
          ],
        },
      ],
    },
    {
      slug: "cafe-tea-culture",
      title: "茶 — green, black, hot or iced",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Tea is the older ritual",
          body: [
            "Tea (茶, chá) is woven into Chinese daily life. The big split for ordering is <strong>绿茶</strong> (lǜchá, green tea — unfermented, grassy) versus <strong>红茶</strong> (hóngchá, lit. 'red tea' — what English calls black tea).",
            "Other names you'll meet on a Beijing teahouse menu: <strong>茉莉花茶</strong> (mòlì huāchá, jasmine tea — a Beijing favourite), <strong>乌龙茶</strong> (wūlóng chá, oolong), and <strong>普洱</strong> (pǔ'ěr, a dark fermented tea).",
            "Temperature matters: say <strong>热</strong> (rè, hot) or <strong>冰</strong> (bīng, iced). Traditionally tea is drunk hot — many older people believe cold drinks are bad for the stomach.",
          ],
          keyPoint:
            "绿茶 = green, 红茶 = black ('red'). Add 热 (hot) or 冰 (iced). 红 literally means 'red'.",
        },
        {
          type: "vocab",
          heading: "Tea menu",
          items: [
            { l1: "绿茶", en: "green tea", note: "lǜchá" },
            { l1: "红茶", en: "black tea", note: "hóngchá — literally 'red tea'" },
            { l1: "茉莉花茶", en: "jasmine tea", note: "mòlì huāchá — a Beijing classic" },
            { l1: "乌龙茶", en: "oolong tea", note: "wūlóng chá" },
            { l1: "普洱", en: "pu'er (fermented dark tea)", note: "pǔ'ěr" },
            { l1: "奶茶", en: "milk tea / bubble tea", note: "nǎichá" },
            { l1: "热", en: "hot", note: "rè" },
            { l1: "冰", en: "iced", note: "bīng" },
            { l1: "热水", en: "hot water", note: "rè shuǐ — commonly offered free" },
            { l1: "茶馆", en: "teahouse", note: "cháguǎn" },
          ],
        },
        {
          type: "tip",
          heading: "红 means 'red,' not 'black'",
          body: "What English speakers call <em>black tea</em> is <strong>红茶</strong> (hóngchá) — \"red tea\" — because the Chinese name describes the colour of the <em>brewed liquid</em>, not the dried leaves. If you literally ask for 黑茶 (hēichá, 'black tea') you'll get a different, dark fermented category instead. Always order 红茶 for what you'd call black tea.",
          example: { l1: "我要一杯热红茶。", en: "I'll have a hot black tea." },
        },
        {
          type: "fillBlank",
          heading: "Build the tea order",
          intro: "Fill in the blank to complete each order.",
          items: [
            {
              template: "我要一杯___绿茶。",
              answer: "热",
              en: "I'll have a hot green tea.",
              options: ["热", "冰", "红", "请"],
            },
            {
              template: "请给我一杯冰___。",
              answer: "红茶",
              en: "Please give me an iced black tea.",
              options: ["红茶", "热水", "牛奶", "糖"],
            },
            {
              template: "我想喝___花茶。",
              answer: "茉莉",
              en: "I'd like to drink jasmine tea.",
              options: ["茉莉", "乌龙", "普洱", "绿"],
            },
            {
              template: "可以给我一杯___水吗？",
              answer: "热",
              en: "Can you give me a cup of hot water?",
              options: ["热", "冰", "红", "奶"],
            },
          ],
        },
        {
          type: "dialogue",
          heading: "At a teahouse in the hutong",
          setup: "You sit down at a small 茶馆 in a Beijing alley.",
          lines: [
            { speaker: "服务员", l1: "您想喝什么茶？", en: "What tea would you like to drink?" },
            { speaker: "你", l1: "你们有茉莉花茶吗？", en: "Do you have jasmine tea?" },
            { speaker: "服务员", l1: "有，要热的还是冰的？", en: "Yes, hot or iced?" },
            { speaker: "你", l1: "热的，谢谢。", en: "Hot, thank you." },
            { speaker: "服务员", l1: "好，我给您泡上。", en: "Okay, I'll brew it for you." },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "I'll have a hot green tea, thank you.",
          reference: "我要一杯热绿茶，谢谢。",
          hint: "Order = 我要 + 一杯 + 热 + 绿茶. Don't forget the measure word 杯.",
        },
      ],
    },
    {
      slug: "cafe-paying-togo",
      title: "这里喝 or 带走 — paying and to-go",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Here or to go — and the QR code",
          body: [
            "After ordering, the staff asks where you'll drink it: <strong>在这儿喝</strong> (zài zhèr hē, drink here) or <strong>带走</strong> (dài zǒu, take away / to go).",
            "Almost nobody pays with cash in Beijing. You pay by <strong>扫码</strong> (sǎo mǎ, scanning a QR code) with <strong>微信</strong> (Wēixìn, WeChat Pay) or <strong>支付宝</strong> (Zhīfùbǎo, Alipay). The cashier shows a QR code; you scan it and confirm.",
            "Useful questions: <strong>多少钱？</strong> (duōshao qián?, how much?) and <strong>可以扫码吗？</strong> (kěyǐ sǎo mǎ ma?, can I scan to pay?).",
          ],
          keyPoint:
            "带走 = to go, 在这儿喝 = drink here. Pay by 扫码 (scan QR) with 微信 or 支付宝. 多少钱 = how much.",
        },
        {
          type: "vocab",
          heading: "Paying & to-go words",
          items: [
            { l1: "带走", en: "to go / take away", note: "dài zǒu" },
            { l1: "在这儿喝", en: "to drink here", note: "zài zhèr hē" },
            { l1: "多少钱", en: "how much (money)?", note: "duōshao qián" },
            { l1: "扫码", en: "to scan a QR code (to pay)", note: "sǎo mǎ" },
            { l1: "微信", en: "WeChat (WeChat Pay)", note: "Wēixìn" },
            { l1: "支付宝", en: "Alipay", note: "Zhīfùbǎo" },
            { l1: "现金", en: "cash", note: "xiànjīn — increasingly rare" },
            { l1: "块", en: "yuan (colloquial, in speech)", note: "kuài — spoken form of 元 (yuán)" },
            { l1: "可以", en: "can / may / it's okay", note: "kěyǐ" },
            { l1: "买单", en: "to pay the bill", note: "mǎidān — also 结账 jiézhàng" },
          ],
        },
        {
          type: "tip",
          heading: "块 vs 元 — same money, different register",
          body: "China's currency is the <strong>人民币</strong> (rénmínbì, RMB). The formal unit written on receipts is <strong>元</strong> (yuán), but in everyday speech everyone says <strong>块</strong> (kuài). So a price of 35元 is spoken as <em>三十五块</em> (sānshíwǔ kuài). It's exactly the same as how English writes \"$\" but says \"bucks.\"",
          example: { l1: "一共三十五块。", en: "That's thirty-five yuan in total." },
        },
        {
          type: "dialogue",
          heading: "Paying for your coffee",
          setup: "Your americano is ready and you're checking out.",
          lines: [
            { speaker: "店员", l1: "在这儿喝还是带走？", en: "Drink here or to go?" },
            { speaker: "你", l1: "带走，谢谢。多少钱？", en: "To go, thanks. How much is it?" },
            { speaker: "店员", l1: "一共十八块。", en: "Eighteen yuan in total." },
            { speaker: "你", l1: "可以扫码吗？用微信。", en: "Can I scan to pay? With WeChat." },
            { speaker: "店员", l1: "可以，扫这个码。", en: "Sure, scan this code." },
            { speaker: "你", l1: "好了，谢谢！", en: "Done, thank you!" },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the sentence",
          intro: "Tap the words into the correct order.",
          items: [
            { tokens: ["我", "要", "带走", "，", "谢谢"], en: "I'll take it to go, thank you." },
            { tokens: ["这杯", "咖啡", "多少", "钱"], en: "How much is this coffee?" },
            { tokens: ["可以", "用", "微信", "扫码", "吗"], en: "Can I pay by scanning with WeChat?" },
            { tokens: ["一共", "二十", "块", "，", "对吗"], en: "Twenty yuan in total, right?" },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "To go, please. How much? Can I scan to pay?",
          reference: "带走，谢谢。多少钱？可以扫码吗？",
          hint: "带走 = to go. 多少钱 = how much. 可以扫码吗 = can I scan to pay.",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "Which phrase means 'to go / take away'?",
              options: ["在这儿喝", "带走", "扫码", "热水"],
              correct: 1,
            },
            {
              q: "How do most people in Beijing pay at a café?",
              options: ["现金 (cash)", "扫码 with 微信/支付宝", "credit card", "买单 at the door"],
              correct: 1,
            },
            {
              q: "In speech, '35 yuan' is said as…",
              options: ["三十五元", "三十五块", "三十五人民币", "三十五个"],
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
        q: "How do you say 'I want a coffee'?",
        options: ["我咖啡要。", "我要一杯咖啡。", "咖啡要我。", "一咖啡我要。"],
        correct: 1,
      },
      {
        q: "The measure word for drinks (cups/glasses) is…",
        options: ["个", "杯", "块", "请"],
        correct: 1,
      },
      {
        q: "'红茶' literally means 'red tea' but refers to…",
        options: ["green tea", "black tea", "jasmine tea", "iced tea"],
        correct: 1,
      },
      {
        q: "Which word means 'iced'?",
        options: ["热", "冰", "红", "绿"],
        correct: 1,
      },
      {
        q: "'带走' means…",
        options: ["drink here", "to go", "hot water", "how much"],
        correct: 1,
      },
      {
        q: "To pay at most Beijing cafés you…",
        options: ["leave a tip", "扫码 (scan a QR code)", "pay in dollars", "pay at the entrance"],
        correct: 1,
      },
      {
        q: "'多少钱' means…",
        options: ["thank you", "how much?", "to go", "please wait"],
        correct: 1,
      },
      {
        q: "In everyday speech, the unit of money is said as…",
        options: ["元 (yuán)", "块 (kuài)", "人民币", "个"],
        correct: 1,
      },
      {
        q: "'两杯茶' is correct because before a measure word 'two' is…",
        options: ["二 (èr)", "两 (liǎng)", "双 (shuāng)", "对 (duì)"],
        correct: 1,
      },
      {
        q: "Translate: 'I'll have a hot green tea, thank you.'",
        options: [
          "我要绿茶冰，谢谢。",
          "我要一杯热绿茶，谢谢。",
          "绿茶热一杯我要。",
          "我热绿茶要谢谢。",
        ],
        correct: 1,
      },
    ],
  },
};
