import type { Unit } from "../../types";

export const UNIT_MASU_PAST: Unit = {
  slug: "masu-past",
  stage: 5,
  order: 21,
  icon: "⏪",
  title: "Verbs: the past",
  tagline: "…ました / …ませんでした for the polite past.",
  badge: "core",
  lessons: [
    {
      slug: "masu-past-affirmative",
      title: "The polite past: ました",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "If you can say ます, you can say ました",
          body: [
            "The polite past is the easiest tense in Japanese. Take the ます-form and swap <strong>ます</strong> for <strong>ました</strong>. That's it. 食べます (I eat) → 食べました (I ate). 行きます (I go) → 行きました (I went).",
            "Because it's built straight from the ます-stem, the verb group doesn't matter anymore — る-verbs, う-verbs, and irregulars all become ました the same way: しました (did), 来ました (came).",
            "ました means a finished action: \"I ate,\" \"I went,\" \"I did.\" Pair it with past-time words like <em>きのう</em> (yesterday) and <em>先週</em> (last week) for a natural sentence.",
          ],
          keyPoint: "ます → ました for the polite past. Works the same for all three verb groups.",
        },
        {
          type: "conjugation",
          heading: "Present → past",
          verb: "食べる / 行く / する",
          meaning: "to eat / to go / to do",
          intro: "The 'person' column names the form — the verb is identical for every subject.",
          tenses: [
            {
              name: "食べる — to eat",
              forms: [
                { person: "polite ます", form: "食べます", en: "eat (tabemasu)" },
                { person: "past ました", form: "食べました", en: "ate (tabemashita)" },
              ],
            },
            {
              name: "行く — to go",
              forms: [
                { person: "polite ます", form: "行きます", en: "go (ikimasu)" },
                { person: "past ました", form: "行きました", en: "went (ikimashita)" },
              ],
            },
            {
              name: "する / 来る — irregular",
              forms: [
                { person: "past ました", form: "しました", en: "did (shimashita)" },
                { person: "past ました", form: "来ました", en: "came (kimashita)" },
              ],
            },
          ],
        },
        {
          type: "vocab",
          heading: "Past-time words",
          items: [
            { l1: "きのう", en: "yesterday", note: "kinō — き・の・う." },
            { l1: "おととい", en: "the day before yesterday", note: "ototoi — お・と・と・い." },
            { l1: "先週", en: "last week", note: "senshū — せん・しゅう." },
            { l1: "先月", en: "last month", note: "sengetsu — せん・げつ." },
            { l1: "去年", en: "last year", note: "kyonen — きょ・ねん." },
            { l1: "さっき", en: "a little while ago", note: "sakki — さっき." },
            { l1: "朝", en: "morning", note: "asa — あさ." },
            { l1: "夜", en: "night", note: "yoru — よ・る." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Put it in the past",
          intro: "Change the verb to the ました past form.",
          items: [
            {
              template: "きのう、浅草に ___ 。(行く)",
              answer: "行きました",
              en: "Yesterday I went to Asakusa.",
              options: ["行きました", "行くました", "行きます", "行きませんでした"],
            },
            {
              template: "朝、ラーメンを ___ 。(食べる)",
              answer: "食べました",
              en: "In the morning I ate ramen.",
              options: ["食べました", "食べります", "食べました か", "食べます"],
            },
            {
              template: "先週、買い物を ___ 。(する)",
              answer: "しました",
              en: "Last week I went shopping.",
              options: ["しました", "するました", "しませんでした", "します"],
            },
            {
              template: "友達が東京に ___ 。(来る)",
              answer: "来ました",
              en: "My friend came to Tokyo.",
              options: ["来ました", "来るました", "来ます", "来きました"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Yesterday I went to Shibuya and bought a book.",
          reference: "きのう渋谷に行って、本を買いました。",
          hint: "Link the two actions with the て-form 行って, then end on 買いました.",
        },
      ],
    },
    {
      slug: "masu-past-negative",
      title: "The polite past negative: ませんでした",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "'Didn't' = ませんでした",
          body: [
            "To say you <strong>didn't</strong> do something, take the negative ません and add <strong>でした</strong> on the end: 食べません (don't eat) → 食べませんでした (didn't eat).",
            "Think of it as stacking the past onto the negative: ま<strong>せん</strong> (negative) + <strong>でした</strong> (past of です). It's long, but it's completely regular — no exceptions.",
            "Here's the full set for one verb, so you can see the four polite endings together: 行きます (go) · 行きません (don't go) · 行きました (went) · 行きませんでした (didn't go).",
          ],
          keyPoint:
            "ません + でした = polite past negative. The four endings: ます / ません / ました / ませんでした.",
        },
        {
          type: "conjugation",
          heading: "All four polite endings",
          verb: "行く / 飲む",
          meaning: "to go / to drink",
          intro: "Memorize this 2×2 grid and you have the whole polite system.",
          tenses: [
            {
              name: "行く — to go",
              forms: [
                { person: "polite (non-past)", form: "行きます", en: "go / will go" },
                { person: "negative", form: "行きません", en: "don't go" },
                { person: "past", form: "行きました", en: "went" },
                { person: "past negative", form: "行きませんでした", en: "didn't go" },
              ],
            },
            {
              name: "飲む — to drink",
              forms: [
                { person: "polite (non-past)", form: "飲みます", en: "drink" },
                { person: "negative", form: "飲みません", en: "don't drink" },
                { person: "past", form: "飲みました", en: "drank" },
                { person: "past negative", form: "飲みませんでした", en: "didn't drink" },
              ],
            },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Pick the right ending",
          questions: [
            {
              q: "'I didn't eat breakfast.' 朝ごはんを ___ 。",
              options: ["食べます", "食べました", "食べません", "食べませんでした"],
              correct: 3,
              fb: "Didn't (past) + negative = 食べませんでした.",
            },
            {
              q: "'I went to the station.' 駅に ___ 。",
              options: ["行きます", "行きました", "行きません", "行きませんでした"],
              correct: 1,
              fb: "ました = simple polite past.",
            },
            {
              q: "Which one means 'didn't drink'?",
              options: ["飲みません", "飲みました", "飲みませんでした", "飲みます"],
              correct: 2,
            },
          ],
        },
        {
          type: "fillBlank",
          heading: "Yes I did / no I didn't",
          items: [
            {
              template: "きのうは、どこにも ___ 。(行く)",
              answer: "行きませんでした",
              en: "Yesterday I didn't go anywhere.",
              options: ["行きませんでした", "行きました", "行きません", "行きます"],
            },
            {
              template: "お酒を ___ 。水を飲みました。(飲む)",
              answer: "飲みませんでした",
              en: "I didn't drink alcohol. I drank water.",
              options: ["飲みませんでした", "飲みました", "飲みません", "飲みます"],
            },
            {
              template: "宿題を ___ 。ごめんなさい。(する)",
              answer: "しませんでした",
              en: "I didn't do my homework. Sorry.",
              options: ["しませんでした", "しました", "しません", "します"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Last week I didn't go to work and I didn't eat much.",
          reference: "先週は仕事に行きませんでした、そしてあまり食べませんでした。",
          hint: "Two past negatives. あまり pairs with the negative; そして = 'and'.",
        },
      ],
    },
    {
      slug: "masu-past-narrate",
      title: "Past questions and short narratives",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Asking and answering in the past",
          body: [
            "To ask a past question, just add <strong>か</strong> to the past form: 「行きましたか。」 = Did you go? Answer short: <em>はい、行きました</em> (yes, I did) or <em>いいえ、行きませんでした</em> (no, I didn't).",
            "Question words slot right in: <em>何を食べましたか</em> (what did you eat?), <em>どこに行きましたか</em> (where did you go?), <em>だれと行きましたか</em> (who did you go with? — と = with).",
            "Stack a few sentences with きのう, それから (then / after that), and 〜時に (at … o'clock) and you have a little story about your day.",
          ],
          keyPoint:
            "Add か for past questions. はい、…ました / いいえ、…ませんでした to answer. と = 'with'; それから = 'then'.",
        },
        {
          type: "vocab",
          heading: "Narration helpers",
          items: [
            { l1: "それから", en: "then / after that", note: "sorekara — そ・れ・か・ら." },
            { l1: "そして", en: "and / and then", note: "soshite — そ・し・て." },
            { l1: "〜と", en: "with (a person)", note: "to — 友達と = with a friend." },
            { l1: "だれと", en: "with whom", note: "dare to — だ・れ・と." },
            { l1: "どこ", en: "where", note: "doko — ど・こ." },
            { l1: "何", en: "what", note: "nani / nan — な・に." },
            { l1: "楽しい", en: "fun / enjoyable", note: "tanoshii — past: 楽しかったです." },
            { l1: "おいしい", en: "delicious", note: "oishii — past: おいしかったです." },
          ],
        },
        {
          type: "dialogue",
          heading: "How was your weekend?",
          setup: "Monday morning, a coworker asks about your trip.",
          lines: [
            { speaker: "同僚", l1: "週末、どこに行きましたか。", en: "Where did you go on the weekend?" },
            { speaker: "You", l1: "浅草に行きました。", en: "I went to Asakusa." },
            { speaker: "同僚", l1: "だれと行きましたか。", en: "Who did you go with?" },
            { speaker: "You", l1: "友達と行きました。お寺を見て、それから天ぷらを食べました。", en: "I went with a friend. We saw a temple, and then ate tempura." },
            { speaker: "同僚", l1: "おいしかったですか。", en: "Was it delicious?" },
            { speaker: "You", l1: "はい、とてもおいしかったです。楽しかったです。", en: "Yes, very delicious. It was fun." },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the past sentence",
          items: [
            { tokens: ["きのう", "渋谷", "に", "行きました"], alts: [["渋谷", "に", "きのう", "行きました"]], en: "Yesterday I went to Shibuya." },
            { tokens: ["友達", "と", "ラーメン", "を", "食べました"], alts: [["ラーメン", "を", "友達", "と", "食べました"]], en: "I ate ramen with a friend." },
            { tokens: ["どこ", "に", "行きました", "か"], en: "Where did you go?" },
            { tokens: ["お酒", "を", "飲みませんでした"], en: "I didn't drink alcohol." },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "What did you eat yesterday? I ate sushi with a friend.",
          reference: "きのう何を食べましたか。友達と寿司を食べました。",
          hint: "何を…ましたか for the question; と = 'with'.",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "How do you ask 'Did you go?'",
              options: ["行きますか。", "行きましたか。", "行きませんか。", "行きませんでしたか。"],
              correct: 1,
            },
            {
              q: "Which particle means 'with (a person)'?",
              options: ["を", "に", "と", "が"],
              correct: 2,
            },
            {
              q: "'No, I didn't drink' =",
              options: [
                "いいえ、飲みました。",
                "いいえ、飲みません。",
                "いいえ、飲みませんでした。",
                "はい、飲みました。",
              ],
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
        q: "The polite past of 食べます is…",
        options: ["食べました", "食べませんでした", "食べます", "食べません"],
        correct: 0,
      },
      {
        q: "ます → ___ to make the polite past.",
        options: ["ません", "ました", "まして", "ましょう"],
        correct: 1,
      },
      {
        q: "'I went to Tokyo' =",
        options: ["東京に行きます。", "東京に行きました。", "東京を行きました。", "東京に行きません。"],
        correct: 1,
      },
      {
        q: "The polite past NEGATIVE ('didn't go') is…",
        options: ["行きません", "行きました", "行きませんでした", "行きないでした"],
        correct: 2,
      },
      {
        q: "Which is built correctly?",
        options: ["飲みでした", "飲みませんでした", "飲みましたでした", "飲まませんでした"],
        correct: 1,
      },
      {
        q: "Past of する ('did') =",
        options: ["するました", "しました", "しませんでした", "されました"],
        correct: 1,
      },
      {
        q: "Past of 来る ('came') =",
        options: ["来るました", "来ました", "来ませんでした", "来します"],
        correct: 1,
      },
      {
        q: "'Did you eat?' =",
        options: ["食べますか。", "食べましたか。", "食べませんか。", "食べてか。"],
        correct: 1,
      },
      {
        q: "Which word means 'the day before yesterday'?",
        options: ["きのう", "おととい", "先週", "あした"],
        correct: 1,
      },
      {
        q: "'I didn't do my homework' =",
        options: [
          "宿題をしました。",
          "宿題をしません。",
          "宿題をしませんでした。",
          "宿題をします。",
        ],
        correct: 2,
      },
    ],
  },
};
