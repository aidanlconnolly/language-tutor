import type { Unit } from "../../types";

export const UNIT_COMPARATIVES: Unit = {
  slug: "comparatives",
  stage: 7,
  order: 32,
  icon: "✍️",
  title: "Comparing & describing",
  tagline: "…の ほうが, …より, and adjective adverbs.",
  badge: "core",
  lessons: [
    {
      slug: "comparatives-yori",
      title: "AはBより… — A is more… than B",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Comparing with より",
          body: [
            "To say 'A is more ___ than B', Japanese uses <strong>より</strong> ('than') attached to B. There's no separate 'more' word — the adjective stays plain.",
            "Pattern: <strong>A は B より [adjective]。</strong> Literally 'A, compared to B, is [adjective].'",
            "Example: <strong>東京は 大阪より 大きいです。</strong> = 'Tokyo is bigger than Osaka.' (大きい just means 'big' — より does the comparing.)",
            "You can flip it: <strong>B より A の ほうが [adjective]。</strong> = 'A is more [adjective] than B' — emphasizing A. Both say the same thing; the second highlights the winner.",
          ],
          keyPoint:
            "A は B より [adjective] = 'A is more [adjective] than B.' The adjective doesn't change — より means 'than.'",
        },
        {
          type: "vocab",
          heading: "Comparison building blocks",
          items: [
            { l1: "より", en: "than (attaches to the thing compared against)", note: "yori — B より = 'than B.'" },
            { l1: "おおきい", en: "big", note: "ōkii — 大きい." },
            { l1: "ちいさい", en: "small", note: "chiisai — 小さい." },
            { l1: "たかい", en: "tall / high / expensive", note: "takai — 高い." },
            { l1: "やすい", en: "cheap", note: "yasui — 安い." },
            { l1: "ひろい", en: "spacious / wide", note: "hiroi — 広い." },
            { l1: "べんり（な）", en: "convenient", note: "benri (na) — な-adjective." },
            { l1: "しずか（な）", en: "quiet", note: "shizuka (na) — な-adjective." },
            { l1: "にぎやか（な）", en: "lively / bustling", note: "nigiyaka (na) — な-adjective." },
          ],
        },
        {
          type: "tip",
          heading: "い-adjectives vs な-adjectives",
          body: "With <em>i</em>-adjectives (大きい, 高い), nothing extra is needed: <em>東京は大阪より大きいです</em>. With <em>na</em>-adjectives (便利, 静か), you add <strong>です</strong> at the end the same way: <em>地下鉄はバスより便利です</em> ('the subway is more convenient than the bus'). The comparison itself is always just <strong>より</strong>.",
          example: { l1: "地下鉄はバスより便利です。", en: "The subway is more convenient than the bus." },
        },
        {
          type: "fillBlank",
          heading: "Insert より",
          items: [
            {
              template: "東京は大阪 ___ 大きいです。",
              answer: "より",
              en: "Tokyo is bigger than Osaka.",
              options: ["より", "ほうが", "から", "まで"],
            },
            {
              template: "新幹線はバス ___ 速いです。",
              answer: "より",
              en: "The bullet train is faster than the bus.",
              options: ["より", "の", "に", "を"],
            },
            {
              template: "この店はあの店 ___ 安いです。",
              answer: "より",
              en: "This shop is cheaper than that shop.",
              options: ["より", "ほうが", "と", "で"],
            },
            {
              template: "今日は昨日 ___ 暑いですね。",
              answer: "より",
              en: "Today is hotter than yesterday, isn't it.",
              options: ["より", "から", "まで", "の"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Tokyo is bigger than Osaka.",
          reference: "東京は大阪より大きいです。",
          hint: "A は B より [adjective]です。",
        },
      ],
    },
    {
      slug: "comparatives-dochira-hou",
      title: "どちらが… and …の ほうが…",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Asking and answering 'which is more…?'",
          body: [
            "To ask 'between A and B, which is more ___?', use <strong>A と B と どちらが [adjective] ですか。</strong> Here <strong>どちら</strong> means 'which (of two)' and <strong>が</strong> marks it.",
            "To answer, name the winner with <strong>…の ほうが</strong>: <strong>A の ほうが [adjective] です。</strong> = 'A is the more [adjective] one.' <strong>ほう</strong> (方) literally means 'side / direction.'",
            "Example: <strong>電車と バスと どちらが 速いですか。</strong> → <strong>電車の ほうが 速いです。</strong> ('Which is faster, the train or the bus?' → 'The train is faster.')",
            "If they're about equal, say <strong>どちらも 同じくらいです</strong> ('they're about the same') or <strong>どちらも [adjective] です</strong> ('both are…').",
          ],
          keyPoint:
            "Ask: A と B と どちらが [adj]ですか。 Answer: …の ほうが [adj]です。 (ほう = the 'side'/option that wins.)",
        },
        {
          type: "vocab",
          heading: "Choosing between two",
          items: [
            { l1: "どちら", en: "which (of two)", note: "dochira — casual: どっち (docchi)." },
            { l1: "…の ほうが", en: "the … one (is more)", note: "no hō ga — 方; names the winner." },
            { l1: "どちらも", en: "both / either", note: "dochira mo." },
            { l1: "おなじくらい", en: "about the same", note: "onaji kurai — 同じくらい." },
            { l1: "はやい", en: "fast / early", note: "hayai — 速い (fast) / 早い (early)." },
            { l1: "おそい", en: "slow / late", note: "osoi — 遅い." },
            { l1: "おいしい", en: "tasty / delicious", note: "oishii — 美味しい." },
            { l1: "ちかい／とおい", en: "near / far", note: "chikai / tōi — 近い／遠い." },
          ],
        },
        {
          type: "dialogue",
          heading: "Deciding how to get to Shinjuku",
          setup: "You and a friend weigh the train versus the bus.",
          lines: [
            { speaker: "Friend", l1: "新宿まで、電車とバスとどちらが速いですか。", en: "To Shinjuku, which is faster, the train or the bus?" },
            { speaker: "You", l1: "電車のほうが速いですよ。", en: "The train is faster." },
            { speaker: "Friend", l1: "じゃあ、値段はどちらが安いですか。", en: "Then which is cheaper in price?" },
            { speaker: "You", l1: "バスのほうが少し安いです。でも遅いです。", en: "The bus is a little cheaper. But it's slow." },
            { speaker: "Friend", l1: "なるほど。じゃあ電車にしましょう。", en: "I see. Let's go with the train, then." },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the comparison",
          intro: "Tap the words into the correct order.",
          items: [
            { tokens: ["電車", "と", "バス", "と", "どちらが", "速い", "ですか"], en: "Which is faster, the train or the bus?" },
            { tokens: ["電車", "の", "ほうが", "速い", "です"], en: "The train is faster." },
            { tokens: ["この", "店", "の", "ほうが", "安い", "です"], en: "This shop is cheaper." },
            { tokens: ["どちらも", "おいしい", "です"], en: "Both are delicious." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Pick the right form",
          questions: [
            {
              q: "How do you ask 'Which is more convenient, the subway or the bus?'",
              options: [
                "地下鉄とバスとどちらが便利ですか。",
                "地下鉄はバスより便利です。",
                "地下鉄の便利です。",
                "どちらも便利です。",
              ],
              correct: 0,
            },
            {
              q: "To answer 'the train is faster', you say:",
              options: [
                "電車よりほうが速いです。",
                "電車のほうが速いです。",
                "電車がどちら速いです。",
                "電車も速いより。",
              ],
              correct: 1,
            },
            {
              q: "ほう (方) in …のほうが roughly means:",
              options: ["time", "the 'side' / option that wins", "place", "person"],
              correct: 1,
            },
            {
              q: "'They're about the same' is:",
              options: ["どちらが同じ", "どちらも同じくらいです", "ほうが同じです", "より同じです"],
              correct: 1,
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Which is faster, the train or the bus? — The train is faster.",
          reference: "電車とバスとどちらが速いですか。—　電車のほうが速いです。",
          hint: "Question with …と…とどちらが…, answer with …のほうが….",
        },
      ],
    },
    {
      slug: "comparatives-ichiban-adverbs",
      title: "いちばん & adjective adverbs",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "The most… and doing things …ly",
          body: [
            "For the superlative ('the most ___ / the ___-est'), use <strong>いちばん</strong> (一番, literally 'number one') right before the adjective: <strong>いちばん 大きい</strong> = 'the biggest.'",
            "To name the group you're comparing within, use <strong>…の なかで</strong> ('among…') or a category word: <strong>日本で いちばん 高い 山</strong> = 'the tallest mountain in Japan.'",
            "Adjectives also become <strong>adverbs</strong> ('quickly', 'quietly'). For <em>i</em>-adjectives, change final 〜い → <strong>〜く</strong>: 早い → <strong>早く</strong> ('early/quickly'). For <em>na</em>-adjectives, add <strong>に</strong>: 静か → <strong>静かに</strong> ('quietly').",
            "Example: <strong>早く 起きます</strong> ('I get up early'), <strong>静かに 話します</strong> ('I speak quietly').",
          ],
          keyPoint:
            "いちばん + adjective = 'the most…' Adverbs: い-adj 〜い→〜く (早く), な-adj +に (静かに).",
        },
        {
          type: "vocab",
          heading: "Superlatives & adverb forms",
          items: [
            { l1: "いちばん", en: "the most / number one", note: "ichiban — 一番." },
            { l1: "…の なかで", en: "among… / within (a group)", note: "no naka de — 中で." },
            { l1: "はやく", en: "quickly / early (adverb)", note: "hayaku — from 早い/速い." },
            { l1: "おそく", en: "slowly / late (adverb)", note: "osoku — from 遅い." },
            { l1: "しずかに", en: "quietly (adverb)", note: "shizuka ni — from 静か." },
            { l1: "きれいに", en: "neatly / cleanly (adverb)", note: "kirei ni — from きれい." },
            { l1: "じょうずに", en: "skillfully / well (adverb)", note: "jōzu ni — from 上手." },
            { l1: "ゆっくり", en: "slowly / leisurely", note: "yukkuri — already an adverb." },
            { l1: "たくさん", en: "a lot / many", note: "takusan — adverb of quantity." },
          ],
        },
        {
          type: "dialogue",
          heading: "Talking about Japan's biggest things",
          setup: "A quick quiz between friends.",
          lines: [
            { speaker: "Friend", l1: "日本でいちばん高い山は何ですか。", en: "What's the tallest mountain in Japan?" },
            { speaker: "You", l1: "富士山です。日本でいちばん有名ですね。", en: "Mt. Fuji. It's the most famous in Japan." },
            { speaker: "Friend", l1: "じゃあ、東京でいちばんにぎやかな町は？", en: "Then, the most bustling area in Tokyo?" },
            { speaker: "You", l1: "渋谷だと思います。いつも人が多いです。", en: "Shibuya, I think. There are always lots of people." },
            { speaker: "Friend", l1: "本当に。ゆっくり歩けないですね。", en: "Really. You can't walk leisurely there." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Adverb or superlative?",
          items: [
            {
              template: "富士山は日本で ___ 高い山です。",
              answer: "いちばん",
              en: "Mt. Fuji is the tallest mountain in Japan.",
              options: ["いちばん", "より", "ほうが", "どちら"],
            },
            {
              template: "毎朝、___ 起きます。（早い→）",
              answer: "はやく",
              en: "Every morning, I get up early.",
              options: ["はやく", "はやい", "はやくに", "はやいに"],
            },
            {
              template: "図書館では ___ 話してください。（静か→）",
              answer: "しずかに",
              en: "Please speak quietly in the library.",
              options: ["しずかに", "しずかく", "しずか", "しずかいに"],
            },
            {
              template: "果物の ___ 、いちごがいちばん好きです。",
              answer: "なかで",
              en: "Among fruits, I like strawberries the most.",
              options: ["なかで", "より", "ほうが", "から"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Mt. Fuji is the tallest mountain in Japan.",
          reference: "富士山は日本でいちばん高い山です。",
          hint: "…で いちばん + adjective + noun.",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "Which word makes a superlative ('the most')?",
              options: ["より", "いちばん", "ほうが", "どちら"],
              correct: 1,
            },
            {
              q: "The adverb form of 早い ('early/fast') is:",
              options: ["早いに", "早く", "早な", "早の"],
              correct: 1,
            },
            {
              q: "The adverb form of 静か ('quiet') is:",
              options: ["静かく", "静かに", "静かい", "静かより"],
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
        q: "Which particle means 'than' in a comparison?",
        options: ["より", "ほうが", "いちばん", "どちら"],
        correct: 0,
      },
      {
        q: "'Tokyo is bigger than Osaka' is:",
        options: [
          "東京は大阪より大きいです。",
          "東京の大阪が大きいです。",
          "東京は大阪いちばん大きいです。",
          "東京と大阪どちら大きいです。",
        ],
        correct: 0,
      },
      {
        q: "To ask 'which is faster, A or B?' you use:",
        options: ["…より…", "…と…とどちらが…", "…のなかで…", "いちばん…"],
        correct: 1,
      },
      {
        q: "To answer 'the train is faster', you say:",
        options: ["電車のほうが速いです。", "電車よりほうが速いです。", "電車がどちら速いです。", "電車いちばん速いです。"],
        correct: 0,
      },
      {
        q: "ほう (方) in …のほうが roughly refers to:",
        options: ["a time", "the winning 'side'/option", "a direction of travel", "a person's name"],
        correct: 1,
      },
      {
        q: "いちばん makes which meaning?",
        options: ["more than", "the most / -est", "about the same", "both"],
        correct: 1,
      },
      {
        q: "The adverb form of the い-adjective 早い is:",
        options: ["早く", "早に", "早いに", "早より"],
        correct: 0,
      },
      {
        q: "The adverb form of the な-adjective 静か is:",
        options: ["静かく", "静かに", "静かより", "静かいちばん"],
        correct: 1,
      },
      {
        q: "'Among fruits' (naming the comparison group) is:",
        options: ["果物より", "果物のなかで", "果物のほうが", "果物いちばん"],
        correct: 1,
      },
      {
        q: "Translate: 'Mt. Fuji is the tallest mountain in Japan.'",
        options: [
          "富士山は日本でいちばん高い山です。",
          "富士山は日本より高い山です。",
          "富士山と山とどちらが高いですか。",
          "富士山のほうが高いです。",
        ],
        correct: 0,
      },
    ],
  },
};
