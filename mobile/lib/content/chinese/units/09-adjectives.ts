import type { Unit } from "../../types";

export const UNIT_ADJECTIVES: Unit = {
  slug: "adjectives",
  stage: 2,
  order: 9,
  icon: "🌈",
  title: "Adjectives & 很",
  tagline: "Adjectives with 很, negation with 不, and 太…了.",
  badge: "core",
  lessons: [
    {
      slug: "adjectives-hen",
      title: "Adjectives need 很 (no 是!)",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Adjectives work like verbs — and skip 是",
          body: [
            "Here's the big surprise: with adjectives, Chinese does NOT use 是. You do NOT say 我是好. Instead the adjective acts like the verb itself: 我<strong>很</strong>好 = 'I am (very) good / I'm fine.'",
            "The little word <strong>很 (hěn)</strong> normally means 'very', but in this pattern it's mostly a neutral linker — without it, a bare adjective sounds like a comparison ('I'm good <em>but someone else isn't</em>'). So 很 just smooths the sentence; it isn't always strongly 'very'.",
            "Pattern: <strong>subject + 很 + adjective</strong>. 中国很大 ('China is big'), 北京很大 ('Beijing is big'), 他很高 ('he is tall').",
          ],
          keyPoint:
            "Adjective sentences use subject + 很 + adjective. Never put 是 before an adjective.",
        },
        {
          type: "vocab",
          heading: "Common adjectives",
          items: [
            { l1: "好", en: "good / well", note: "hǎo" },
            { l1: "大", en: "big", note: "dà" },
            { l1: "小", en: "small", note: "xiǎo" },
            { l1: "高", en: "tall / high", note: "gāo" },
            { l1: "忙", en: "busy", note: "máng" },
            { l1: "累", en: "tired", note: "lèi" },
            { l1: "高兴", en: "happy / glad", note: "gāoxìng" },
            { l1: "很", en: "very / (neutral linker)", note: "hěn — links subject to adjective" },
          ],
        },
        {
          type: "tip",
          heading: "很 is often just glue, not really 'very'",
          body: "When a Chinese person says 我很好, they usually just mean 'I'm fine' — not 'I'm VERY good'. The 很 is there because a bare 我好 sounds incomplete or contrastive. If you truly want to stress 'very', you'd lean on the word or use 非常 (fēicháng, 'extremely'): 我非常累 ('I'm extremely tired').",
          example: { l1: "你好吗？— 我很好，谢谢。", en: "How are you? — I'm fine, thanks." },
        },
        {
          type: "fillBlank",
          heading: "Build the adjective sentence",
          intro: "Use subject + 很 + adjective. Watch out — no 是!",
          items: [
            {
              template: "北京 ___ 大。",
              answer: "很",
              en: "Beijing is big.",
              options: ["很", "是", "的", "吗"],
            },
            {
              template: "我今天 ___ 忙。",
              answer: "很",
              en: "I'm busy today.",
              options: ["很", "是", "不", "呢"],
            },
            {
              template: "他 ___ 高。",
              answer: "很",
              en: "He is tall.",
              options: ["很", "是", "的", "了"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "China is big. I'm fine.",
          reference: "中国很大。我很好。",
          hint: "Adjective pattern: subject + 很 + adjective. No 是! 大 = big, 好 = good/fine.",
        },
      ],
    },
    {
      slug: "adjectives-bu",
      title: "Negation with 不",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Negate adjectives with 不 (and drop 很)",
          body: [
            "To say an adjective is NOT true, put <strong>不 (bù)</strong> right before it: 不大 ('not big'), 不贵 ('not expensive'), 不忙 ('not busy'). When you negate, the 很 disappears — 不 replaces it.",
            "So 我很忙 ('I'm busy') becomes 我<strong>不</strong>忙 ('I'm not busy'). You don't say 我很不忙.",
            "Tone reminder: 不 is fourth tone (bù) normally, but before another fourth-tone syllable it becomes second tone (bú). 不贵 → <strong>bú guì</strong>, 不大 → <strong>bú dà</strong>.",
          ],
          keyPoint:
            "Negate an adjective with 不 before it (no 很): 我不忙 ('I'm not busy').",
        },
        {
          type: "vocab",
          heading: "Adjectives to negate",
          items: [
            { l1: "贵", en: "expensive", note: "guì" },
            { l1: "便宜", en: "cheap / inexpensive", note: "piányi" },
            { l1: "远", en: "far", note: "yuǎn" },
            { l1: "近", en: "near / close", note: "jìn" },
            { l1: "难", en: "difficult", note: "nán" },
            { l1: "容易", en: "easy", note: "róngyì" },
            { l1: "不", en: "not", note: "bù → bú before a 4th-tone syllable" },
          ],
        },
        {
          type: "conjugation",
          heading: "Affirmative vs negative",
          verb: "很 + adjective / 不 + adjective",
          meaning: "the positive and negative patterns",
          intro: "Chinese doesn't conjugate. The pattern label shows the adjective; compare the 很 (positive) and 不 (negative) forms.",
          tenses: [
            {
              name: "positive (很) vs negative (不)",
              forms: [
                { person: "big", form: "很大 / 不大 (hěn dà / bú dà)", en: "is big / is not big" },
                { person: "expensive", form: "很贵 / 不贵 (hěn guì / bú guì)", en: "is expensive / is not expensive" },
                { person: "far", form: "很远 / 不远 (hěn yuǎn / bù yuǎn)", en: "is far / is not far" },
                { person: "difficult", form: "很难 / 不难 (hěn nán / bù nán)", en: "is hard / is not hard" },
              ],
            },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Positive or negative?",
          questions: [
            {
              q: "'It's not expensive' is…",
              options: ["很贵", "不贵", "是贵", "贵不"],
              correct: 1,
              fb: "不 before the adjective, no 很: 不贵.",
            },
            {
              q: "'Chinese is not hard' is…",
              options: ["中文很难", "中文是难", "中文不难", "中文难不"],
              correct: 2,
              fb: "中文不难 — 不 negates 难 directly.",
            },
            {
              q: "Before 贵 (guì, 4th tone), 不 is pronounced…",
              options: ["bù", "bú", "bǔ", "bū"],
              correct: 1,
              fb: "不 shifts to 2nd tone (bú) before a 4th-tone syllable.",
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "It's not expensive. The Great Wall is not far.",
          reference: "不贵。长城不远。",
          hint: "Negate with 不 (no 很). 贵 = expensive, 远 = far, 长城 = the Great Wall.",
        },
      ],
    },
    {
      slug: "adjectives-tai-le",
      title: "太…了, 真…, and 怎么样?",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Stronger feelings: 太…了 and 真…",
          body: [
            "<strong>太…了 (tài … le)</strong> wraps an adjective to mean 'too / so': 太贵了 ('too expensive!'), 太好了 ('great! / wonderful!'). The 太 goes before the adjective and 了 closes it off.",
            "<strong>真 (zhēn)</strong> means 'really / truly' and just sits before the adjective: 真好 ('really good'), 真大 ('really big'). Unlike 太…了, it needs no 了.",
            "To ask 'how is it? / what's it like?', use <strong>怎么样 (zěnmeyàng)</strong> at the end: 北京怎么样？('How's Beijing?'), 这个怎么样？('How about this one?').",
          ],
          keyPoint:
            "太…了 = too/so (太贵了). 真 = really (真好). 怎么样? = how is it? / what about it?",
        },
        {
          type: "vocab",
          heading: "Intensifiers and the 'how is it?' word",
          items: [
            { l1: "太…了", en: "too … / so …", note: "tài … le — wraps the adjective" },
            { l1: "真", en: "really / truly", note: "zhēn" },
            { l1: "太贵了", en: "too expensive!", note: "tài guì le" },
            { l1: "太好了", en: "great! / wonderful!", note: "tài hǎo le" },
            { l1: "怎么样", en: "how is it? / what's it like?", note: "zěnmeyàng" },
            { l1: "非常", en: "extremely", note: "fēicháng — stronger than 很" },
            { l1: "漂亮", en: "pretty / beautiful", note: "piàoliang" },
          ],
        },
        {
          type: "dialogue",
          heading: "Shopping for a scarf in Beijing",
          setup: "You're at a stall, reacting to prices and quality.",
          lines: [
            { speaker: "Vendor", l1: "这个围巾怎么样？很漂亮！", en: "How about this scarf? Very pretty!" },
            { speaker: "You", l1: "真漂亮！多少钱？", en: "Really pretty! How much?" },
            { speaker: "Vendor", l1: "两百块。", en: "Two hundred yuan." },
            { speaker: "You", l1: "太贵了！便宜一点儿吧。", en: "Too expensive! A little cheaper, please." },
            { speaker: "Vendor", l1: "好吧，一百五。", en: "Okay, one hundred fifty." },
            { speaker: "You", l1: "太好了，谢谢！", en: "Great, thanks!" },
          ],
        },
        {
          type: "fillBlank",
          heading: "Pick the intensifier",
          intro: "Choose 太…了, 真, or 怎么样.",
          items: [
            {
              template: "这个 ___ 贵了！",
              answer: "太",
              en: "This is too expensive!",
              options: ["太", "真", "怎么样", "很"],
            },
            {
              template: "北京 ___ ？",
              answer: "怎么样",
              en: "How is Beijing?",
              options: ["太", "真", "怎么样", "吗"],
            },
            {
              template: "长城 ___ 大！",
              answer: "真",
              en: "The Great Wall is really big!",
              options: ["太", "真", "怎么样", "不"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Too expensive! How is Beijing? Really pretty!",
          reference: "太贵了！北京怎么样？真漂亮！",
          hint: "太…了 wraps the adjective (太贵了). 怎么样 goes at the end. 真 + adjective = 真漂亮.",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "'Too expensive!' is…",
              options: ["很贵", "太贵了", "真贵吗", "不贵了"],
              correct: 1,
            },
            {
              q: "How do you ask 'How is Beijing?'",
              options: ["北京吗", "北京怎么样", "北京是什么", "北京很好吗"],
              correct: 1,
            },
            {
              q: "真 (zhēn) means…",
              options: ["too", "not", "really / truly", "very (neutral)"],
              correct: 2,
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
        q: "Which is correct for 'I'm fine'?",
        options: ["我是好", "我很好", "我好是", "我是很好"],
        correct: 1,
      },
      {
        q: "Before an adjective, you should…",
        options: ["use 是", "use 很 (or 不)", "use 的", "use nothing ever"],
        correct: 1,
      },
      {
        q: "Translate: 'Beijing is big.'",
        options: ["北京是大", "北京很大", "北京大是", "北京的大"],
        correct: 1,
      },
      {
        q: "'It's not expensive' is…",
        options: ["很不贵", "是不贵", "不贵", "贵不了"],
        correct: 2,
      },
      {
        q: "When you negate an adjective with 不, the 很…",
        options: ["stays", "moves to the end", "disappears", "doubles"],
        correct: 2,
      },
      {
        q: "Before 贵 (4th tone), 不 is pronounced…",
        options: ["bù", "bú", "bǎ", "bāo"],
        correct: 1,
      },
      {
        q: "'Too expensive!' is…",
        options: ["很贵了", "太贵了", "真贵吗", "不贵了"],
        correct: 1,
      },
      {
        q: "真 (zhēn) means…",
        options: ["too", "really / truly", "not", "which"],
        correct: 1,
      },
      {
        q: "How do you ask 'How is it? / What's it like?'",
        options: ["怎么", "怎么样", "什么", "为什么"],
        correct: 1,
      },
      {
        q: "Translate: 'I'm not busy.'",
        options: ["我很不忙", "我是不忙", "我不忙", "我忙不"],
        correct: 2,
      },
    ],
  },
};
