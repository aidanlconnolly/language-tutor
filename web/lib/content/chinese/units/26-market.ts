import type { Unit } from "../../types";

export const UNIT_MARKET: Unit = {
  slug: "market",
  stage: 6,
  order: 26,
  icon: "🥕",
  title: "At the market",
  tagline: "市场, 一斤, 贵 vs 便宜, bargaining.",
  badge: "tourist",
  lessons: [
    {
      slug: "market-quantities",
      title: "市场 + 一斤, 半斤, 一个",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "The wet market and the 斤",
          body: [
            "A traditional Chinese market is a <strong>市场 (shìchǎng)</strong> — sometimes a <em>菜市场 (càishìchǎng)</em>, \"vegetable market.\" Produce here is sold by weight, and the unit you'll hear constantly is the <strong>斤 (jīn)</strong>.",
            "A <strong>斤</strong> is <em>half a kilo</em> (500 g), not a Western pound. <strong>一斤 (yì jīn)</strong> = 500 g, <strong>半斤 (bàn jīn)</strong> = 250 g, <strong>两斤 (liǎng jīn)</strong> = 1 kg. Prices are quoted per 斤: <em>五块一斤 = five yuan a 斤</em>.",
            "For countable things use the measure word <strong>个 (gè)</strong>: <strong>一个 (yí gè)</strong> = one, <strong>两个 (liǎng gè)</strong> = two. So apples by weight = <em>一斤苹果</em>, but \"two apples\" = <em>两个苹果</em>.",
          ],
          keyPoint:
            "市场 = market. 斤 = 500 g (half a kilo). 一斤/半斤/两斤. 个 = generic measure word for countable items.",
        },
        {
          type: "vocab",
          heading: "Market & quantity words",
          items: [
            { l1: "市场 / 菜市场", en: "market / vegetable market", note: "shìchǎng / càishìchǎng" },
            { l1: "斤", en: "jin = 500 g", note: "jīn — half a kilo, NOT a pound" },
            { l1: "一斤", en: "one jin (500 g)", note: "yì jīn" },
            { l1: "半斤", en: "half a jin (250 g)", note: "bàn jīn" },
            { l1: "两斤", en: "two jin (1 kg)", note: "liǎng jīn — 两 not 二 before measure words" },
            { l1: "个", en: "generic measure word", note: "gè — 一个, 两个" },
            { l1: "称", en: "to weigh", note: "chēng" },
            { l1: "新鲜", en: "fresh", note: "xīnxiān" },
            { l1: "多少钱一斤?", en: "how much per jin?", note: "duōshao qián yì jīn?" },
            { l1: "要", en: "to want / I'll take", note: "yào" },
          ],
        },
        {
          type: "tip",
          heading: "两 vs 二 before measure words",
          body: "Both mean \"two,\" but before a measure word you almost always use <strong>两 (liǎng)</strong>, not <strong>二 (èr)</strong>. So it's <em>两斤 (two jin)</em> and <em>两个 (two pieces)</em> — never \"二斤\" or \"二个.\" You only use 二 for the digit itself, like phone numbers or the number twenty (二十).",
          example: { l1: "我要两斤苹果。", en: "I'll take two jin of apples." },
        },
        {
          type: "dialogue",
          heading: "At a fruit stall in 三源里市场",
          setup: "You're buying apples and tomatoes.",
          lines: [
            { speaker: "You", l1: "老板，苹果多少钱一斤?", en: "Boss, how much per jin for apples?" },
            { speaker: "摊主 (Vendor)", l1: "六块一斤，很新鲜。", en: "Six yuan a jin, very fresh." },
            { speaker: "You", l1: "我要两斤。", en: "I'll take two jin." },
            { speaker: "摊主 (Vendor)", l1: "好，给您称一下。还要别的吗?", en: "Okay, let me weigh it. Anything else?" },
            { speaker: "You", l1: "再要半斤西红柿。", en: "And half a jin of tomatoes too." },
            { speaker: "摊主 (Vendor)", l1: "一共十五块。", en: "Fifteen yuan in total." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Quantities check",
          questions: [
            {
              q: "A 斤 (jīn) is…",
              options: ["1 kilogram", "500 grams (half a kilo)", "100 grams", "1 pound"],
              correct: 1,
            },
            {
              q: "'How much per jin?' =",
              options: ["多少钱一个?", "多少钱一斤?", "几斤?", "多少斤?"],
              correct: 1,
            },
            {
              q: "Which is correct for 'two jin'?",
              options: ["二斤", "两斤", "二个斤", "两个斤"],
              correct: 1,
            },
            {
              q: "半斤 =",
              options: ["1 kg", "250 g", "1 jin", "two pieces"],
              correct: 1,
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "How much per jin? I'll take two jin.",
          reference: "多少钱一斤? 我要两斤。",
          hint: "多少钱一斤? for the price; 两斤 (not 二斤) for 'two jin'.",
        },
      ],
    },
    {
      slug: "market-bargaining",
      title: "Bargaining — 太贵了, 便宜一点",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "How to haggle politely",
          body: [
            "At markets and tourist stalls, the first price is rarely the real price — bargaining (<strong>讲价 jiǎng jià</strong>) is expected. (Note: in supermarkets and chain shops prices are fixed — don't haggle there.)",
            "Your opening move is <strong>太贵了! (tài guì le!)</strong> = \"Too expensive!\" The pattern <em>太…了</em> means \"too / so…\". Then ask for a cut: <strong>便宜一点 (piányi yìdiǎn)</strong> = \"a little cheaper,\" or the very common <strong>能不能便宜点? (néng bu néng piányi diǎn?)</strong> = \"Can you go a bit cheaper?\"",
            "The <strong>能不能…? (néng bu néng…?)</strong> pattern — \"can you or can't you…?\" — is a soft, friendly way to make almost any request. Smiling and walking away slowly is also part of the dance; the vendor often calls you back with a better price.",
          ],
          keyPoint:
            "讲价 = to bargain. 太贵了! = Too expensive! 便宜一点 = a bit cheaper. 能不能…? = Can you…?",
        },
        {
          type: "vocab",
          heading: "Bargaining phrases",
          items: [
            { l1: "讲价", en: "to bargain / haggle", note: "jiǎng jià" },
            { l1: "太贵了!", en: "Too expensive!", note: "tài guì le!" },
            { l1: "便宜一点", en: "a little cheaper", note: "piányi yìdiǎn — also 便宜点" },
            { l1: "能不能…?", en: "Can you / is it possible…?", note: "néng bu néng…?" },
            { l1: "便宜点儿吧", en: "go a bit cheaper, come on", note: "piányi diǎnr ba — 吧 softens it" },
            { l1: "可以少一点吗?", en: "Can you take a bit off?", note: "kěyǐ shǎo yìdiǎn ma?" },
            { l1: "算了", en: "forget it / never mind", note: "suàn le — walk-away line" },
            { l1: "最低多少?", en: "what's your lowest?", note: "zuìdī duōshao?" },
            { l1: "好吧", en: "okay then (reluctant agreement)", note: "hǎo ba" },
            { l1: "成交", en: "deal! / it's a deal", note: "chéngjiāo" },
          ],
        },
        {
          type: "dialogue",
          heading: "Haggling over a silk scarf",
          setup: "At 秀水街 (Silk Street), a famous bargaining market.",
          lines: [
            { speaker: "摊主 (Vendor)", l1: "这条围巾两百块。", en: "This scarf is two hundred yuan." },
            { speaker: "You", l1: "太贵了! 能不能便宜点?", en: "Too expensive! Can you go cheaper?" },
            { speaker: "摊主 (Vendor)", l1: "您给多少?", en: "How much will you give?" },
            { speaker: "You", l1: "八十块。", en: "Eighty yuan." },
            { speaker: "摊主 (Vendor)", l1: "八十太低了，一百五。", en: "Eighty is too low, one hundred fifty." },
            { speaker: "You", l1: "一百，可以吗? 不行我就走了。", en: "One hundred, okay? Otherwise I'll leave." },
            { speaker: "摊主 (Vendor)", l1: "好吧好吧，成交!", en: "Fine, fine, it's a deal!" },
          ],
        },
        {
          type: "fillBlank",
          heading: "Haggle fill",
          items: [
            {
              template: "太 ___ 了! 便宜一点。",
              answer: "贵",
              en: "Too expensive! A little cheaper.",
              options: ["贵", "便宜", "新鲜", "大"],
            },
            {
              template: "___ 不能便宜点?",
              answer: "能",
              en: "Can you go a bit cheaper?",
              options: ["能", "要", "是", "有"],
            },
            {
              template: "便宜 ___ 吧。",
              answer: "一点",
              en: "Go a bit cheaper, come on.",
              options: ["一点", "一斤", "一个", "一共"],
            },
            {
              template: "好吧，___ ! (we have a deal)",
              answer: "成交",
              en: "Fine, it's a deal!",
              options: ["成交", "算了", "新鲜", "讲价"],
            },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the sentence",
          intro: "Tap the words into the correct order.",
          items: [
            { tokens: ["太", "贵", "了"], en: "Too expensive!" },
            { tokens: ["能", "不", "能", "便宜", "点"], en: "Can you go a bit cheaper?" },
            { tokens: ["可以", "少", "一点", "吗"], en: "Can you take a bit off?" },
            { tokens: ["最低", "多少", "钱"], en: "What's your lowest price?" },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Too expensive! Can you go a little cheaper?",
          reference: "太贵了! 能不能便宜一点?",
          hint: "太…了 frames 'too…'; 能不能…? = Can you…?; 便宜一点 = a bit cheaper.",
        },
      ],
    },
    {
      slug: "market-describing",
      title: "贵 / 便宜 + describing produce",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Expensive, cheap, fresh, ripe",
          body: [
            "Two words anchor every price conversation: <strong>贵 (guì)</strong> = expensive and <strong>便宜 (piányi)</strong> = cheap. With 很 (hěn, \"very\") you get <em>很贵 (very expensive)</em> and <em>很便宜 (very cheap)</em>.",
            "To praise produce, use <strong>新鲜 (xīnxiān)</strong> = fresh and <strong>甜 (tián)</strong> = sweet. Vendors love to say <em>很甜很新鲜! (very sweet, very fresh!)</em> To check ripeness, ask <strong>熟了吗? (shú le ma?)</strong> = \"Is it ripe?\"",
            "Comparisons use <strong>比 (bǐ)</strong>: <em>这个比那个便宜 = this one is cheaper than that one</em>. The pattern is simply A 比 B + adjective.",
          ],
          keyPoint:
            "贵 = expensive, 便宜 = cheap. 新鲜 = fresh, 甜 = sweet, 熟 = ripe. A 比 B + adj = A is more … than B.",
        },
        {
          type: "vocab",
          heading: "Describing produce",
          items: [
            { l1: "贵", en: "expensive", note: "guì" },
            { l1: "便宜", en: "cheap", note: "piányi" },
            { l1: "新鲜", en: "fresh", note: "xīnxiān" },
            { l1: "甜", en: "sweet", note: "tián" },
            { l1: "熟", en: "ripe / cooked", note: "shú" },
            { l1: "比", en: "than (comparison)", note: "bǐ — A 比 B + adj" },
            { l1: "苹果", en: "apple", note: "píngguǒ" },
            { l1: "香蕉", en: "banana", note: "xiāngjiāo" },
            { l1: "西红柿", en: "tomato", note: "xīhóngshì" },
            { l1: "西瓜", en: "watermelon", note: "xīguā" },
          ],
        },
        {
          type: "dialogue",
          heading: "Picking the sweetest watermelon",
          setup: "You're eyeing two watermelons at the stall.",
          lines: [
            { speaker: "You", l1: "这个西瓜甜吗?", en: "Is this watermelon sweet?" },
            { speaker: "摊主 (Vendor)", l1: "很甜! 今天刚到的，很新鲜。", en: "Very sweet! Just arrived today, very fresh." },
            { speaker: "You", l1: "这个比那个大。多少钱一斤?", en: "This one is bigger than that one. How much per jin?" },
            { speaker: "摊主 (Vendor)", l1: "三块五一斤。", en: "Three fifty a jin." },
            { speaker: "You", l1: "有点贵。那个便宜一点吗?", en: "A bit expensive. Is that one cheaper?" },
            { speaker: "摊主 (Vendor)", l1: "那个小一点，三块一斤。", en: "That one's a bit smaller, three yuan a jin." },
            { speaker: "You", l1: "好，我要那个。", en: "Okay, I'll take that one." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Describe-it fill",
          items: [
            {
              template: "这个西瓜很 ___ 。(sweet)",
              answer: "甜",
              en: "This watermelon is very sweet.",
              options: ["甜", "贵", "熟", "大"],
            },
            {
              template: "这个 ___ 那个便宜。",
              answer: "比",
              en: "This one is cheaper than that one.",
              options: ["比", "和", "还", "是"],
            },
            {
              template: "苹果新 ___ 吗?",
              answer: "鲜",
              en: "Are the apples fresh?",
              options: ["鲜", "甜", "贵", "熟"],
            },
            {
              template: "有点 ___ ，能便宜点吗?",
              answer: "贵",
              en: "A bit expensive, can you go cheaper?",
              options: ["贵", "便宜", "新鲜", "甜"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "This watermelon is very sweet, and it's cheaper than that one.",
          reference: "这个西瓜很甜，比那个便宜。",
          hint: "很甜 = very sweet; A 比 B + adjective for the comparison.",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "贵 / 便宜 mean…",
              options: ["fresh / ripe", "expensive / cheap", "big / small", "sweet / sour"],
              correct: 1,
            },
            {
              q: "'This one is cheaper than that one' =",
              options: [
                "这个和那个便宜。",
                "这个比那个便宜。",
                "这个那个比便宜。",
                "便宜这个比那个。",
              ],
              correct: 1,
            },
            {
              q: "新鲜 means…",
              options: ["sweet", "ripe", "fresh", "expensive"],
              correct: 2,
            },
            {
              q: "甜 means…",
              options: ["sweet", "fresh", "cheap", "big"],
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
        q: "A 斤 (jīn) equals…",
        options: ["1 kg", "500 g (half a kilo)", "1 pound", "100 g"],
        correct: 1,
      },
      {
        q: "'How much per jin?' =",
        options: ["多少钱一个?", "多少钱一斤?", "几斤?", "多少斤?"],
        correct: 1,
      },
      {
        q: "The correct way to say 'two jin' is…",
        options: ["二斤", "两斤", "二个斤", "两斤个"],
        correct: 1,
      },
      {
        q: "'Too expensive!' =",
        options: ["太便宜了!", "太贵了!", "很新鲜!", "太大了!"],
        correct: 1,
      },
      {
        q: "'Can you go a bit cheaper?' =",
        options: ["能不能便宜点?", "便宜吗?", "多少钱一斤?", "新鲜吗?"],
        correct: 0,
      },
      {
        q: "讲价 means…",
        options: ["to weigh", "to bargain", "to pay", "to scan"],
        correct: 1,
      },
      {
        q: "贵 / 便宜 mean…",
        options: ["fresh / ripe", "big / small", "expensive / cheap", "sweet / sour"],
        correct: 2,
      },
      {
        q: "'This one is cheaper than that one' =",
        options: [
          "这个和那个便宜。",
          "这个比那个便宜。",
          "这个那个便宜比。",
          "便宜这个那个。",
        ],
        correct: 1,
      },
      {
        q: "新鲜 means…",
        options: ["sweet", "fresh", "ripe", "expensive"],
        correct: 1,
      },
      {
        q: "When haggling, '成交!' means…",
        options: ["too expensive!", "forget it!", "it's a deal!", "very fresh!"],
        correct: 2,
      },
    ],
  },
};
