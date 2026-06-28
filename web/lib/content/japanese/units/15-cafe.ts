import type { Unit } from "../../types";

export const UNIT_CAFE: Unit = {
  slug: "cafe",
  stage: 4,
  order: 15,
  icon: "☕",
  title: "Café & konbini",
  tagline: "Coffee, the konbini, …を ください.",
  badge: "tourist",
  lessons: [
    {
      slug: "cafe-ordering-drinks",
      title: "Ordering drinks — …を ください",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "The magic pattern: …を ください",
          body: [
            "The single most useful phrase for buying anything in Japan is <strong>〜を ください</strong> (…o kudasai), \"please give me ….\" Name the thing, add <strong>を</strong> (the object particle, pronounced <em>o</em>), then <strong>ください</strong>.",
            "So a coffee is <strong>コーヒーを ください</strong> (kōhī o kudasai). A green tea is <strong>おちゃを ください</strong> (ocha o kudasai). It is polite, neutral, and works at any café, kiosk, or counter in Tokyo.",
            "Drink names for Western drinks are written in <strong>カタカナ</strong> (katakana), the script reserved for foreign loanwords: コーヒー, ジュース, ミルク.",
          ],
          keyPoint:
            "〜を ください = \"…, please.\" Name + を (o) + ください (kudasai). Your go-to ordering phrase.",
        },
        {
          type: "vocab",
          heading: "Café drinks",
          intro: "Western drinks ride in katakana; tea is the home-grown one.",
          items: [
            { l1: "コーヒー", en: "coffee", note: "kōhī — katakana loanword." },
            { l1: "ホットコーヒー", en: "hot coffee", note: "hotto kōhī — 'hot' + coffee." },
            { l1: "アイスコーヒー", en: "iced coffee", note: "aisu kōhī — 'ice' + coffee." },
            { l1: "おちゃ", en: "(green) tea", note: "ocha — お is a polite prefix; written お茶." },
            { l1: "こうちゃ", en: "black tea", note: "kōcha — 紅茶, literally 'red tea'." },
            { l1: "みず", en: "water", note: "mizu — 水. Usually free and brought automatically." },
            { l1: "ジュース", en: "juice", note: "jūsu — katakana loanword." },
            { l1: "ミルク", en: "milk", note: "miruku — katakana; さとう (satō) = sugar." },
            { l1: "ください", en: "please give me", note: "kudasai — follows 〜を." },
          ],
        },
        {
          type: "dialogue",
          heading: "At a Tokyo café counter",
          setup: "You step up to the counter at a small Shibuya coffee shop.",
          lines: [
            { speaker: "店員 (staff)", l1: "いらっしゃいませ。", en: "Welcome." },
            { speaker: "You", l1: "ホットコーヒーを ください。", en: "A hot coffee, please." },
            { speaker: "店員", l1: "かしこまりました。ほかには？", en: "Certainly. Anything else?" },
            { speaker: "You", l1: "おちゃも ください。", en: "A green tea too, please." },
            { speaker: "店員", l1: "はい、しょうしょう おまちください。", en: "Yes, one moment please." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Build the order",
          intro: "Drop in the missing piece.",
          items: [
            {
              template: "コーヒー___ ください。",
              answer: "を",
              en: "A coffee, please.",
              options: ["を", "は", "に", "が"],
            },
            {
              template: "おちゃを ___。",
              answer: "ください",
              en: "A green tea, please.",
              options: ["ください", "です", "ます", "どうも"],
            },
            {
              template: "___コーヒーを ください。",
              answer: "アイス",
              en: "An iced coffee, please.",
              options: ["アイス", "ホット", "ミルク", "みず"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "A hot coffee and a green tea, please.",
          reference: "ホットコーヒーと おちゃを ください。",
          hint: "Use と (to) to join the two items, then を ください once at the end.",
        },
      ],
    },
    {
      slug: "cafe-konbini",
      title: "The konbini — あたためますか",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "The konbini is a way of life",
          body: [
            "The <strong>コンビニ</strong> (konbini, convenience store) — 7-Eleven, ファミマ (FamilyMart), ローソン (Lawson) — is open 24 hours and sells genuinely good food: おにぎり (rice balls), べんとう (bento), hot snacks, coffee, and more.",
            "When you buy something heatable, the cashier asks <strong>あたためますか</strong> (atatamemasu ka?), \"shall I heat it up?\" Answer <strong>はい、おねがいします</strong> (yes, please) or <strong>いいえ、けっこうです</strong> (no, I'm fine).",
            "You'll also be asked <strong>はしは いりますか</strong> (do you need chopsticks?) and <strong>ふくろは いりますか</strong> (do you need a bag?). Bags now cost a few yen, so many people say no.",
          ],
          keyPoint:
            "あたためますか = \"heat it up?\" → はい、おねがいします / いいえ、けっこうです.",
        },
        {
          type: "vocab",
          heading: "Konbini essentials",
          items: [
            { l1: "コンビニ", en: "convenience store", note: "konbini — short for konbiniensu sutoa." },
            { l1: "おにぎり", en: "rice ball", note: "onigiri — お握り; the konbini staple." },
            { l1: "べんとう", en: "boxed meal / bento", note: "bentō — お弁当." },
            { l1: "ふくろ", en: "bag", note: "fukuro — 袋. レジぶくろ = plastic bag." },
            { l1: "はし", en: "chopsticks", note: "hashi — お箸; the お makes it politer." },
            { l1: "あたためますか", en: "shall I heat it up?", note: "atatamemasu ka — from あたためる, to warm." },
            { l1: "おねがいします", en: "please / yes please", note: "onegai shimasu — softer, warmer than ください." },
            { l1: "けっこうです", en: "no, I'm fine / that's enough", note: "kekkō desu — polite refusal." },
            { l1: "いりますか", en: "do you need …?", note: "irimasu ka — from いる, to need." },
          ],
        },
        {
          type: "dialogue",
          heading: "Paying at the konbini",
          setup: "You bring a bento and a bottle of tea to the register at a Lawson.",
          lines: [
            { speaker: "店員 (staff)", l1: "いらっしゃいませ。", en: "Welcome." },
            { speaker: "店員", l1: "おべんとう、あたためますか。", en: "Shall I heat the bento up?" },
            { speaker: "You", l1: "はい、おねがいします。", en: "Yes, please." },
            { speaker: "店員", l1: "おはしは いりますか。", en: "Do you need chopsticks?" },
            { speaker: "You", l1: "はい、おねがいします。", en: "Yes, please." },
            { speaker: "店員", l1: "ふくろは いりますか。", en: "Do you need a bag?" },
            { speaker: "You", l1: "いいえ、けっこうです。", en: "No, I'm fine." },
            { speaker: "店員", l1: "ごうけい、ろっぴゃくえんです。", en: "That's 600 yen total." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Konbini comprehension",
          questions: [
            {
              q: "The cashier asks 「あたためますか」. What are they asking?",
              options: [
                "Do you need a bag?",
                "Shall I heat it up?",
                "Do you have a point card?",
                "Is that everything?",
              ],
              correct: 1,
            },
            {
              q: "You want to politely decline the bag. You say…",
              qL1: "ふくろは いりますか。",
              options: ["はい、おねがいします。", "いいえ、けっこうです。", "あたためますか。", "いらっしゃいませ。"],
              correct: 1,
            },
            {
              q: "「おねがいします」 compared with 「ください」 is…",
              options: [
                "ruder",
                "softer and warmer",
                "only for staff to use",
                "grammatically wrong",
              ],
              correct: 1,
              fb: "Both work; おねがいします feels a touch more polite and is great for 'yes please.'",
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Yes, please. Chopsticks too, please.",
          reference: "はい、おねがいします。おはしも おねがいします。",
          hint: "も (mo) = 'too/also'. Re-use おねがいします for the second request.",
        },
      ],
    },
    {
      slug: "cafe-sizes-takeout",
      title: "Sizes & takeout — テイクアウト or here?",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Here or to go?",
          body: [
            "At a café the staff will ask <strong>てんないで おめしあがりですか、おもちかえりですか</strong> — \"eating in, or taking out?\" The casual loanword for takeout is <strong>テイクアウト</strong> (teikuauto).",
            "To say \"to eat in\" you can answer <strong>てんないで</strong> (in the store); to take it away, <strong>もちかえりで</strong> or <strong>テイクアウトで</strong>. The particle <strong>で</strong> here marks the manner — \"by/as.\"",
            "Sizes ride in katakana too: <strong>エス</strong> (S), <strong>エム</strong> (M), <strong>エル</strong> (L). Chains also use ショート / トール / グランデ.",
          ],
          keyPoint:
            "おめしあがり = eat in · おもちかえり / テイクアウト = take out. Add で to your choice.",
        },
        {
          type: "vocab",
          heading: "Sizes & takeout words",
          items: [
            { l1: "テイクアウト", en: "takeout", note: "teikuauto — casual loanword." },
            { l1: "もちかえり", en: "taking home / to go", note: "mochikaeri — 持ち帰り; the native term." },
            { l1: "てんない", en: "inside the store", note: "tennai — 店内; 'eat in' = 店内で." },
            { l1: "エス", en: "size S", note: "esu — the letter S." },
            { l1: "エム", en: "size M", note: "emu — the letter M." },
            { l1: "エル", en: "size L", note: "eru — the letter L." },
            { l1: "おおきい", en: "big", note: "ōkii — い-adjective." },
            { l1: "ちいさい", en: "small", note: "chiisai — い-adjective." },
            { l1: "サイズ", en: "size", note: "saizu — katakana loanword." },
          ],
        },
        {
          type: "dialogue",
          heading: "Coffee to go",
          setup: "You order at a chain café near Tokyo Station.",
          lines: [
            { speaker: "店員 (staff)", l1: "ごちゅうもんは？", en: "What would you like to order?" },
            { speaker: "You", l1: "アイスコーヒーの エルを ください。", en: "An iced coffee, size L, please." },
            { speaker: "店員", l1: "てんないで おめしあがりですか、おもちかえりですか。", en: "Eating in, or taking out?" },
            { speaker: "You", l1: "テイクアウトで。", en: "To go." },
            { speaker: "店員", l1: "かしこまりました。", en: "Certainly." },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the sentence",
          intro: "Tap the words into the correct order.",
          items: [
            { tokens: ["アイスコーヒー", "の", "エル", "を", "ください"], en: "An iced coffee, size L, please." },
            { tokens: ["テイクアウト", "で", "おねがいします"], en: "To go, please." },
            { tokens: ["ホットコーヒー", "の", "エス", "を", "ください"], en: "A hot coffee, size S, please." },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "A coffee, size M, to go, please.",
          reference: "コーヒーの エムを テイクアウトで ください。",
          hint: "Order: drink + の + size + を, then テイクアウトで, then ください.",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "Which particle means 'please give me X' goes with?",
              qL1: "コーヒー___ ください",
              options: ["は", "を", "に", "も"],
              correct: 1,
            },
            {
              q: "「テイクアウトで」 means…",
              options: ["eating in", "to go / takeout", "a large size", "no bag"],
              correct: 1,
            },
            {
              q: "Size L in a Tokyo chain café is…",
              options: ["エス", "エム", "エル", "おちゃ"],
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
        q: "How do you say 'A coffee, please.'?",
        options: ["コーヒーは ください。", "コーヒーを ください。", "コーヒーに ください。", "コーヒーが ください。"],
        correct: 1,
      },
      {
        q: "おちゃ means…",
        options: ["black tea", "coffee", "green tea", "juice"],
        correct: 2,
      },
      {
        q: "The cashier asks 「あたためますか」. They mean…",
        options: ["Need a bag?", "Shall I heat it up?", "Eating in?", "Need chopsticks?"],
        correct: 1,
      },
      {
        q: "Politely decline: 「ふくろは いりますか」 →",
        options: ["はい、おねがいします。", "いいえ、けっこうです。", "あたためますか。", "テイクアウトで。"],
        correct: 1,
      },
      {
        q: "はし means…",
        options: ["bag", "chopsticks", "rice ball", "bento"],
        correct: 1,
      },
      {
        q: "おにぎり is a…",
        options: ["bento box", "rice ball", "bag", "hot drink"],
        correct: 1,
      },
      {
        q: "'To go' / takeout is…",
        options: ["てんない", "テイクアウト", "サイズ", "ください"],
        correct: 1,
      },
      {
        q: "Size S is written…",
        options: ["エス", "エム", "エル", "おおきい"],
        correct: 0,
      },
      {
        q: "Western drink names like coffee and juice are written in…",
        options: ["hiragana", "kanji", "katakana", "romaji"],
        correct: 2,
      },
      {
        q: "Translate: 'An iced coffee and a water, please.'",
        options: [
          "アイスコーヒーと みずを ください。",
          "アイスコーヒーは みず ください。",
          "コーヒーアイスに みずを ください。",
          "みずと アイスコーヒーは ください。",
        ],
        correct: 0,
      },
    ],
  },
};
