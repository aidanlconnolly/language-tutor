import type { Unit } from "../../types";

export const UNIT_MASU_PRESENT: Unit = {
  slug: "masu-present",
  stage: 5,
  order: 20,
  icon: "🟢",
  title: "Verbs: the ます-form",
  tagline: "Polite present/future — 行きます, 食べます.",
  badge: "core",
  lessons: [
    {
      slug: "masu-present-groups",
      title: "Three verb groups and the polite ます-form",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Japanese verbs come in three groups",
          body: [
            "Good news first: Japanese verbs do <strong>not</strong> change for person. 食べます means \"I eat,\" \"you eat,\" \"she eats,\" and \"they eat\" — all the same. There's also no separate future tense: 行きます covers both \"I go\" and \"I will go.\"",
            "Every verb has a plain <strong>dictionary form</strong> (the form you find in a dictionary) and a polite <strong>ます-form</strong> (masu-form). In Tokyo, with strangers, shop staff, and anyone you don't know well, you use ます.",
            "Verbs fall into three groups. <strong>Group 2 (る-verbs)</strong> end in -eru or -iru and just drop る, then add ます: 食べる→食べます, 見る→見ます. <strong>Group 1 (う-verbs)</strong> end in another う-row sound; you change that final sound to its -i form, then add ます: 行く→行きます, 飲む→飲みます. <strong>Group 3 (irregular)</strong> is only two verbs: する→します, 来る→来ます.",
          ],
          keyPoint:
            "Verbs don't change for person. ます = polite present AND future. Group 2 drops る; Group 1 shifts the last sound to -i; する/来る are irregular.",
        },
        {
          type: "vocab",
          heading: "Your first verbs",
          intro: "Dictionary form on the left, meaning on the right. We turn them polite on the next page.",
          items: [
            { l1: "食べる", en: "to eat", note: "taberu — た・べ・る. Group 2 (る-verb)." },
            { l1: "見る", en: "to see / watch", note: "miru — み・る. Group 2." },
            { l1: "行く", en: "to go", note: "iku — い・く. Group 1." },
            { l1: "飲む", en: "to drink", note: "nomu — の・む. Group 1." },
            { l1: "買う", en: "to buy", note: "kau — か・う. Group 1." },
            { l1: "話す", en: "to speak", note: "hanasu — は・な・す. Group 1." },
            { l1: "読む", en: "to read", note: "yomu — よ・む. Group 1." },
            { l1: "する", en: "to do", note: "suru — す・る. Group 3 (irregular)." },
            { l1: "来る", en: "to come", note: "kuru — く・る. Group 3 (irregular)." },
          ],
        },
        {
          type: "conjugation",
          heading: "Dictionary form → polite ます-form",
          verb: "食べる / 行く / する",
          meaning: "to eat / to go / to do",
          intro: "The 'person' column is the FORM name, not a subject — Japanese verbs are the same for everyone.",
          tenses: [
            {
              name: "Group 2 (る-verb): drop る, add ます",
              forms: [
                { person: "dictionary form", form: "食べる", en: "to eat (taberu)" },
                { person: "polite ます", form: "食べます", en: "eat / will eat (tabemasu)" },
                { person: "dictionary form", form: "見る", en: "to see (miru)" },
                { person: "polite ます", form: "見ます", en: "see / will see (mimasu)" },
              ],
            },
            {
              name: "Group 1 (う-verb): last sound → -i, add ます",
              forms: [
                { person: "dictionary form", form: "行く", en: "to go (iku)" },
                { person: "polite ます", form: "行きます", en: "go / will go (ikimasu)" },
                { person: "dictionary form", form: "飲む", en: "to drink (nomu)" },
                { person: "polite ます", form: "飲みます", en: "drink (nomimasu)" },
                { person: "dictionary form", form: "話す", en: "to speak (hanasu)" },
                { person: "polite ます", form: "話します", en: "speak (hanashimasu)" },
              ],
            },
            {
              name: "Group 3 (irregular): memorize",
              forms: [
                { person: "dictionary form", form: "する", en: "to do (suru)" },
                { person: "polite ます", form: "します", en: "do (shimasu)" },
                { person: "dictionary form", form: "来る", en: "to come (kuru)" },
                { person: "polite ます", form: "来ます", en: "come (kimasu)" },
              ],
            },
          ],
        },
        {
          type: "fillBlank",
          heading: "Make it polite",
          intro: "Turn the dictionary form into the ます-form.",
          items: [
            {
              template: "毎朝、コーヒーを ___ 。(飲む)",
              answer: "飲みます",
              en: "Every morning I drink coffee.",
              options: ["飲みます", "飲むます", "飲みです", "飲ます"],
            },
            {
              template: "明日、渋谷に ___ 。(行く)",
              answer: "行きます",
              en: "Tomorrow I will go to Shibuya.",
              options: ["行くます", "行きます", "行けます", "行ます"],
            },
            {
              template: "寿司を ___ 。(食べる)",
              answer: "食べます",
              en: "I eat sushi.",
              options: ["食べるます", "食べります", "食べます", "食べす"],
            },
            {
              template: "テニスを ___ 。(する)",
              answer: "します",
              en: "I play (do) tennis.",
              options: ["するます", "しります", "します", "すます"],
            },
          ],
        },
      ],
    },
    {
      slug: "masu-present-negative",
      title: "Negative ません and the particles を / に",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Saying you DON'T do something",
          body: [
            "To make a polite verb negative, just swap <strong>ます</strong> for <strong>ません</strong>. 食べます (I eat) → 食べません (I don't eat). 行きます (I go) → 行きません (I don't go). Nothing else changes.",
            "Two particles do most of the work with verbs. <strong>を</strong> (pronounced \"o\") marks the <strong>direct object</strong> — the thing the action hits: 寿司を食べます = I eat sushi. <strong>に</strong> marks the <strong>destination</strong> with motion verbs and a <strong>point in time</strong>: 東京に行きます = I go to Tokyo; 七時に起きます = I get up at seven.",
            "Word order is steady: <em>topic は … object を … verbます</em>. The verb always comes last.",
          ],
          keyPoint:
            "ます → ません for negative. を marks the object (eat WHAT). に marks destination/time (go WHERE, at WHAT time). Verb goes last.",
        },
        {
          type: "conjugation",
          heading: "Positive vs negative",
          verb: "飲む / 行く",
          meaning: "to drink / to go",
          intro: "Same verb, polite affirmative and polite negative.",
          tenses: [
            {
              name: "飲む — to drink",
              forms: [
                { person: "polite ます", form: "飲みます", en: "drink / will drink (nomimasu)" },
                { person: "negative ません", form: "飲みません", en: "don't drink (nomimasen)" },
              ],
            },
            {
              name: "行く — to go",
              forms: [
                { person: "polite ます", form: "行きます", en: "go (ikimasu)" },
                { person: "negative ません", form: "行きません", en: "don't go (ikimasen)" },
              ],
            },
            {
              name: "食べる — to eat",
              forms: [
                { person: "polite ます", form: "食べます", en: "eat (tabemasu)" },
                { person: "negative ません", form: "食べません", en: "don't eat (tabemasen)" },
              ],
            },
          ],
        },
        {
          type: "vocab",
          heading: "Object & destination words",
          items: [
            { l1: "を", en: "(object marker)", note: "written を, pronounced 'o'. Marks what the verb acts on." },
            { l1: "に", en: "to / at (destination, time)", note: "ni. 東京に行きます = go TO Tokyo." },
            { l1: "へ", en: "to / toward (direction)", note: "written へ, pronounced 'e'. Like に for destinations." },
            { l1: "水", en: "water", note: "mizu — み・ず." },
            { l1: "電車", en: "train", note: "densha — でん・しゃ." },
            { l1: "駅", en: "station", note: "eki — え・き." },
            { l1: "お酒", en: "alcohol / sake", note: "osake — お・さけ." },
            { l1: "肉", en: "meat", note: "niku — に・く." },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the sentence",
          intro: "Tap the words into natural Japanese order (verb last).",
          items: [
            { tokens: ["寿司", "を", "食べます"], en: "I eat sushi." },
            { tokens: ["東京", "に", "行きます"], en: "I go to Tokyo." },
            { tokens: ["お酒", "を", "飲みません"], en: "I don't drink alcohol." },
            { tokens: ["私", "は", "肉", "を", "食べません"], alts: [["肉", "を", "私", "は", "食べません"]], en: "I don't eat meat." },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "I don't drink alcohol, but I drink water.",
          reference: "お酒を飲みませんが、水を飲みます。",
          hint: "ません for the negative, が for 'but'. Object takes を both times.",
        },
      ],
    },
    {
      slug: "masu-present-frequency",
      title: "Frequency, time, and いつ",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "When and how often",
          body: [
            "Frequency words sit before the verb: <em>毎日</em> (every day), <em>毎朝</em> (every morning), <em>よく</em> (often), <em>ときどき</em> (sometimes), <em>あまり…ません</em> (not very much — needs a negative verb), <em>ぜんぜん…ません</em> (not at all).",
            "Time-when phrases usually come early in the sentence. Specific clock times and days take <strong>に</strong> (七時に = at seven, 月曜日に = on Monday), but relative words like 毎日, 今日 (today), 明日 (tomorrow) take <strong>no</strong> particle.",
            "To ask \"when?\" use <strong>いつ</strong> — and いつ never takes に: 「いつ行きますか。」 = When do you go?",
          ],
          keyPoint:
            "毎日 / よく / ときどき go before the verb. Clock times + days of week take に; 毎日・今日・明日 take none. いつ = when (no に).",
        },
        {
          type: "vocab",
          heading: "Frequency & time words",
          items: [
            { l1: "毎日", en: "every day", note: "mainichi — まい・にち." },
            { l1: "毎朝", en: "every morning", note: "maiasa — まい・あさ." },
            { l1: "毎晩", en: "every night", note: "maiban — まい・ばん." },
            { l1: "よく", en: "often", note: "yoku — よ・く." },
            { l1: "ときどき", en: "sometimes", note: "tokidoki — とき・どき." },
            { l1: "あまり", en: "not very (+ negative)", note: "amari — あまり…ません." },
            { l1: "ぜんぜん", en: "not at all (+ negative)", note: "zenzen — ぜんぜん…ません." },
            { l1: "いつ", en: "when", note: "itsu — never takes に." },
            { l1: "今日", en: "today", note: "kyō — きょう. No particle." },
            { l1: "明日", en: "tomorrow", note: "ashita — あした. No particle." },
          ],
        },
        {
          type: "dialogue",
          heading: "Talking about routine in Tokyo",
          setup: "A coworker asks about your habits.",
          lines: [
            { speaker: "同僚", l1: "毎朝、何を飲みますか。", en: "What do you drink every morning?" },
            { speaker: "You", l1: "毎朝コーヒーを飲みます。", en: "I drink coffee every morning." },
            { speaker: "同僚", l1: "よく外で食べますか。", en: "Do you often eat out?" },
            { speaker: "You", l1: "ときどき食べます。でも、あまり飲みません。", en: "Sometimes I do. But I don't drink (alcohol) much." },
            { speaker: "同僚", l1: "いつジムに行きますか。", en: "When do you go to the gym?" },
            { speaker: "You", l1: "毎晩、七時に行きます。", en: "Every night, I go at seven." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Add the right particle (or none)",
          intro: "Type に where needed, or × for no particle.",
          items: [
            {
              template: "七 ___ 起きます。",
              answer: "時に",
              en: "I get up at seven o'clock.",
              options: ["時に", "時を", "時は", "時"],
            },
            {
              template: "毎日 ___ 日本語を勉強します。",
              answer: "×",
              en: "I study Japanese every day. (毎日 takes no particle)",
              options: ["に", "を", "は", "×"],
            },
            {
              template: "___ 東京に来ますか。",
              answer: "いつ",
              en: "When do you come to Tokyo?",
              options: ["いつ", "いつに", "なに", "どこ"],
            },
            {
              template: "あまりテレビを見 ___ 。",
              answer: "ません",
              en: "I don't watch much TV.",
              options: ["ます", "ません", "ますか", "ました"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "When do you go to Tokyo? I go every Monday.",
          reference: "いつ東京に行きますか。毎週月曜日に行きます。",
          hint: "いつ takes no に. 月曜日 (Monday) takes に; 毎週 means 'every week'.",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "Which sentence means 'I don't eat meat'?",
              options: ["肉を食べます。", "肉を食べません。", "肉が食べます。", "肉を食べました。"],
              correct: 1,
            },
            {
              q: "Which word takes the particle に?",
              options: ["毎日", "今日", "七時", "明日"],
              correct: 2,
            },
            {
              q: "'I sometimes drink coffee' =",
              options: [
                "ぜんぜんコーヒーを飲みます。",
                "ときどきコーヒーを飲みます。",
                "あまりコーヒーを飲みます。",
                "コーヒーをときどき飲みません。",
              ],
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
        q: "Japanese verbs change form based on the person (I / you / she).",
        options: ["True", "False — the form is the same for everyone"],
        correct: 1,
      },
      {
        q: "The ます-form covers which tenses?",
        options: ["Past only", "Present and future", "Future only", "Past and present"],
        correct: 1,
      },
      {
        q: "食べる is a Group 2 (る-verb). Its ます-form is…",
        options: ["食べります", "食べるます", "食べます", "食べす"],
        correct: 2,
      },
      {
        q: "行く is a Group 1 (う-verb). Its ます-form is…",
        options: ["行くます", "行きます", "行けます", "行います"],
        correct: 1,
      },
      {
        q: "The two irregular verbs are…",
        options: ["行く and 来る", "する and 食べる", "する and 来る", "見る and する"],
        correct: 2,
      },
      {
        q: "Which particle marks the direct object?",
        options: ["に", "を", "は", "へ"],
        correct: 1,
      },
      {
        q: "'I go to Tokyo' =",
        options: ["東京を行きます。", "東京は行きます。", "東京に行きます。", "東京が行きます。"],
        correct: 2,
      },
      {
        q: "The negative of 飲みます is…",
        options: ["飲みません", "飲まない", "飲みでした", "飲みないです"],
        correct: 0,
      },
      {
        q: "Which means 'I don't watch TV much'?",
        options: [
          "よくテレビを見ます。",
          "あまりテレビを見ません。",
          "毎日テレビを見ます。",
          "ときどきテレビを見ます。",
        ],
        correct: 1,
      },
      {
        q: "How do you ask 'When do you go?'",
        options: ["どこ行きますか。", "なに行きますか。", "いつ行きますか。", "いつに行きますか。"],
        correct: 2,
      },
    ],
  },
};
