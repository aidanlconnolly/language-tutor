import type { Unit } from "../../types";

export const UNIT_FUTURE_WANT: Unit = {
  slug: "future-want",
  stage: 5,
  order: 23,
  icon: "⏩",
  title: "Wanting & the future",
  tagline: "想, 要, 会 — desire, intention and the future.",
  badge: "core",
  lessons: [
    {
      slug: "future-want-xiang",
      title: "想 — would like to",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "想 + verb = 'would like to'",
          body: [
            "Put <strong>想 (xiǎng)</strong> before a verb to express a wish or desire — \"would like to / feel like.\" <em>我想去北京 (I'd like to go to Beijing)</em>, <em>我想喝茶 (I feel like drinking tea)</em>.",
            "想 is gentle and polite — it's the soft \"I'd like,\" not a hard demand.",
            "Negate it with <strong>不想</strong>: <em>我不想去 (I don't want to go / don't feel like going)</em>.",
            "On its own (without a following verb), 想 also means \"to miss / think of\": <em>我想你 (I miss you)</em> — but with a verb after it, it's \"would like to.\"",
          ],
          keyPoint:
            "想 + verb = 'would like to' (soft wish). Negative: 不想. 我想去 = I'd like to go.",
        },
        {
          type: "conjugation",
          heading: "想 — the desire pattern",
          verb: "想",
          meaning: "to would like to (xiǎng)",
          intro: "想 sits before the main verb. The main verb never changes.",
          tenses: [
            {
              name: "Affirmative vs. negative",
              forms: [
                { person: "想 + verb", form: "想去 (xiǎng qù)", en: "would like to go" },
                { person: "negative 不想", form: "不想去 (bù xiǎng qù)", en: "don't want to go" },
              ],
            },
            {
              name: "Full sentences",
              forms: [
                { person: "我想喝茶", form: "wǒ xiǎng hē chá", en: "I'd like to drink tea" },
                { person: "你想吃什么？", form: "nǐ xiǎng chī shénme?", en: "what would you like to eat?" },
                { person: "我不想去", form: "wǒ bù xiǎng qù", en: "I don't feel like going" },
              ],
            },
          ],
        },
        {
          type: "vocab",
          heading: "Things you might want to do",
          items: [
            { l1: "想", en: "would like to / to miss", note: "xiǎng" },
            { l1: "什么", en: "what", note: "shénme" },
            { l1: "烤鸭", en: "roast duck", note: "kǎoyā — 北京烤鸭 = Beijing duck" },
            { l1: "咖啡", en: "coffee", note: "kāfēi" },
            { l1: "休息", en: "to rest", note: "xiūxi" },
            { l1: "买东西", en: "to shop / buy things", note: "mǎi dōngxi" },
          ],
        },
        {
          type: "fillBlank",
          heading: "Express what you'd like",
          items: [
            {
              template: "我 ___ 吃北京烤鸭。",
              answer: "想",
              en: "I'd like to eat Beijing duck.",
              options: ["想", "在", "了", "过"],
            },
            {
              template: "今天我累了，我 ___ 去。",
              answer: "不想",
              en: "I'm tired today, I don't feel like going.",
              options: ["不想", "没想", "想不", "不在"],
            },
            {
              template: "你 ___ 喝什么？",
              answer: "想",
              en: "What would you like to drink?",
              options: ["想", "了", "过", "在"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "I'd like to drink coffee, but I don't feel like eating.",
          reference: "我想喝咖啡，但是不想吃饭。",
          hint: "想 + verb for the wish, 不想 for the negative. 但是 = but.",
        },
      ],
    },
    {
      slug: "future-want-yao",
      title: "要 — want / going to",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "要 is stronger: 'want' and 'will'",
          body: [
            "<strong>要 (yào)</strong> + verb is firmer than 想 — it means \"want to\" with intent, and very often \"am going to / will.\" <em>我要去北京 (I'm going to go to Beijing / I will)</em>.",
            "要 also works with a noun to mean \"want (something)\": <em>我要一杯茶 (I want a cup of tea)</em> — handy when ordering.",
            "Here's the tricky part: the negative of 要 (intention) is <strong>不想</strong>, NOT 不要. Saying <em>我不想去</em> = \"I don't want to go.\" <strong>不要</strong> means \"don't!\" — a command: <em>不要去！(Don't go!)</em>.",
            "So 想 = soft wish, 要 = firmer want / will, and to refuse politely you fall back on 不想.",
          ],
          keyPoint:
            "要 + verb = want to / going to (firmer than 想). Negative of intention = 不想. 不要 = 'don't!' (a command).",
        },
        {
          type: "conjugation",
          heading: "要 — want / will",
          verb: "要",
          meaning: "to want / will (yào)",
          intro: "Note that the negative borrows 不想, not 不要.",
          tenses: [
            {
              name: "Want / will vs. refuse",
              forms: [
                { person: "要 + verb", form: "要去 (yào qù)", en: "want to go / will go" },
                { person: "要 + noun", form: "要一杯茶 (yào yì bēi chá)", en: "want a cup of tea" },
                { person: "negative (refuse)", form: "不想去 (bù xiǎng qù)", en: "don't want to go" },
                { person: "不要 = command", form: "不要去 (bú yào qù)", en: "don't go! (an order)" },
              ],
            },
          ],
        },
        {
          type: "dialogue",
          heading: "Ordering at a Beijing duck restaurant",
          setup: "You sit down at a famous roast-duck place.",
          lines: [
            { speaker: "Waiter", l1: "你要吃什么？", en: "What would you like to eat?" },
            { speaker: "You", l1: "我要一只烤鸭，还要一杯茶。", en: "I want a roast duck, and also a cup of tea." },
            { speaker: "Waiter", l1: "要米饭吗？", en: "Do you want rice?" },
            { speaker: "You", l1: "不要米饭，谢谢。", en: "No rice, thanks." },
          ],
        },
        {
          type: "tip",
          heading: "想 vs 要 — strength matters",
          body: "<strong>我想去</strong> is a soft \"I'd like to go.\" <strong>我要去</strong> is a firmer \"I want to go / I'm going to go.\" In a restaurant, <strong>要</strong> is the natural verb for placing an order (<em>我要烤鸭</em> = I'll have the duck). Just remember the refusal is <strong>不想</strong>, while <strong>不要</strong> turns into \"don't!\"",
          example: { l1: "我要去，但是他不想去。", en: "I'm going to go, but he doesn't want to go." },
        },
        {
          type: "fillBlank",
          heading: "想, 要, or 不要?",
          items: [
            {
              template: "服务员，我 ___ 一杯咖啡。",
              answer: "要",
              en: "Waiter, I want a cup of coffee.",
              options: ["要", "想不", "不要", "过"],
            },
            {
              template: "太晚了，___ 去了！",
              answer: "不要",
              en: "It's too late, don't go!",
              options: ["不要", "不想", "没要", "要不"],
            },
            {
              template: "我累了，我 ___ 去。",
              answer: "不想",
              en: "I'm tired, I don't want to go.",
              options: ["不想", "不要", "没想", "要不"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "I want a roast duck and a cup of tea. I don't want rice.",
          reference: "我要一只烤鸭和一杯茶。我不要米饭。",
          hint: "要 + noun for ordering. 一只 = one (for the duck), 和 = and.",
        },
      ],
    },
    {
      slug: "future-want-hui-future",
      title: "会 & talking about the future",
      estMinutes: 10,
      pages: [
        {
          type: "intro",
          heading: "会: 'will' and 'know how to'",
          body: [
            "<strong>会 (huì)</strong> has two jobs. First, it means <strong>'know how to' (a learned skill)</strong>: <em>我会说中文 (I can speak Chinese)</em>, <em>他会做饭 (he can cook)</em>.",
            "Second, 会 expresses a <strong>predicted future / likelihood</strong> — \"will (probably).\" <em>明天会下雨 (it will rain tomorrow)</em>, <em>他会来 (he'll come)</em>.",
            "Negate both with <strong>不会</strong>: <em>我不会游泳 (I can't swim)</em>, <em>明天不会下雨 (it won't rain tomorrow)</em>.",
            "Crucial reminder: Mandarin has <strong>no future tense</strong>. You signal the future with <strong>time words</strong> (明天 tomorrow, 后天 day after tomorrow) plus optionally 要 (going to) or 会 (will). <em>我明天去 (I'm going tomorrow)</em> needs no special verb — the time word does the work.",
          ],
          keyPoint:
            "会 = know how to (skill) AND will (likely future). No future tense — use time words (明天) + 要/会. Negative: 不会.",
        },
        {
          type: "vocab",
          heading: "Skills & future time words",
          items: [
            { l1: "会", en: "know how to / will", note: "huì" },
            { l1: "说", en: "to speak / say", note: "shuō" },
            { l1: "中文", en: "Chinese (language)", note: "Zhōngwén" },
            { l1: "游泳", en: "to swim", note: "yóuyǒng" },
            { l1: "后天", en: "the day after tomorrow", note: "hòutiān" },
            { l1: "下个星期", en: "next week", note: "xià ge xīngqī" },
            { l1: "以后", en: "later / in the future", note: "yǐhòu" },
          ],
        },
        {
          type: "conjugation",
          heading: "会 — skill & future",
          verb: "会",
          meaning: "to know how to / will (huì)",
          intro: "Same 会 covers a learned skill and a predicted future.",
          tenses: [
            {
              name: "Two meanings",
              forms: [
                { person: "会 = skill", form: "会说中文 (huì shuō Zhōngwén)", en: "can speak Chinese" },
                { person: "会 = future", form: "会下雨 (huì xià yǔ)", en: "will rain" },
                { person: "negative 不会 (skill)", form: "不会游泳 (bú huì yóuyǒng)", en: "can't swim" },
                { person: "negative 不会 (future)", form: "不会来 (bú huì lái)", en: "won't come" },
              ],
            },
            {
              name: "Future with time words",
              forms: [
                { person: "明天 + verb", form: "我明天去 (wǒ míngtiān qù)", en: "I'm going tomorrow" },
                { person: "明天 + 要", form: "我明天要去 (… yào qù)", en: "I'm going to go tomorrow" },
                { person: "明天 + 会", form: "他明天会来 (… huì lái)", en: "he'll come tomorrow" },
              ],
            },
          ],
        },
        {
          type: "fillBlank",
          heading: "会 or a time word?",
          items: [
            {
              template: "我 ___ 说中文。",
              answer: "会",
              en: "I can speak Chinese.",
              options: ["会", "要", "在", "了"],
            },
            {
              template: "___ 我去北京。",
              answer: "明天",
              en: "Tomorrow I'm going to Beijing.",
              options: ["明天", "昨天", "了", "过"],
            },
            {
              template: "他 ___ 游泳。",
              answer: "不会",
              en: "He can't swim.",
              options: ["不会", "没会", "会不", "不要"],
            },
            {
              template: "下个星期我 ___ 来。",
              answer: "会",
              en: "I'll come next week.",
              options: ["会", "了", "过", "在"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "I can speak Chinese, and tomorrow I'll go to the Great Wall.",
          reference: "我会说中文，明天我会去长城。",
          hint: "会说 for the skill; 明天 + 会去 for the future. No past/future endings on the verb.",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "Does Mandarin have a future tense?",
              options: ["Yes, an ending on the verb", "No — use time words plus 要/会", "Only with 了", "Only with 过"],
              correct: 1,
            },
            {
              q: "会 can mean both…",
              options: ["past and present", "'know how to' and 'will'", "want and not-want", "here and there"],
              correct: 1,
            },
            {
              q: "'I can't swim' =",
              options: ["我没会游泳。", "我不会游泳。", "我会不游泳。", "我不要游泳。"],
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
        q: "想 + verb means…",
        options: ["completed action", "would like to (soft wish)", "in progress", "a command"],
        correct: 1,
      },
      {
        q: "'I'd like to go to Beijing' =",
        options: ["我去想北京。", "我想去北京。", "我在去北京。", "我去了北京。"],
        correct: 1,
      },
      {
        q: "How do you negate 想去?",
        options: ["没想去", "想不去", "不想去", "去不想"],
        correct: 2,
      },
      {
        q: "要 + verb is generally…",
        options: ["softer than 想", "firmer than 想 — want / going to", "the past", "a question"],
        correct: 1,
      },
      {
        q: "What does 不要去 mean?",
        options: ["I don't want to go", "Don't go! (a command)", "I went", "I'm going"],
        correct: 1,
      },
      {
        q: "The polite way to refuse ('I don't want to go') is…",
        options: ["不要去", "没去", "不想去", "去不要"],
        correct: 2,
      },
      {
        q: "会 can mean…",
        options: ["only 'will'", "only 'can'", "'know how to' AND 'will'", "'already'"],
        correct: 2,
      },
      {
        q: "'I can speak Chinese' =",
        options: ["我说会中文。", "我会说中文。", "我在说中文。", "我说了中文。"],
        correct: 1,
      },
      {
        q: "Mandarin signals the future mainly with…",
        options: ["a verb ending", "time words like 明天 (+ 要/会)", "了", "过"],
        correct: 1,
      },
      {
        q: "'It won't rain tomorrow' =",
        options: ["明天没下雨。", "明天不会下雨。", "明天下雨了。", "明天会不下雨。"],
        correct: 1,
      },
    ],
  },
};
