import type { Unit } from "../../types";

export const UNIT_COUNTERS: Unit = {
  slug: "counters",
  stage: 6,
  order: 26,
  icon: "🧮",
  title: "Counters & quantities",
  tagline: "…つ, 本, 枚, 個, 人 — counting the Japanese way.",
  badge: "core",
  lessons: [
    {
      slug: "counters-native-tsu",
      title: "The native …つ counter (ひとつ, ふたつ) & 〜こ",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Japanese counts with counters",
          body: [
            "In Japanese you can't just say \"two coffees\" — you attach a <strong>counter</strong> to the number, the way English says \"two <em>sheets</em> of paper.\" Different things take different counters.",
            "The most useful all-purpose set is the <strong>native …つ counter</strong>: <em>ひとつ</em> (1), <em>ふたつ</em> (2), <em>みっつ</em> (3)… It works for almost any everyday object up to ten, and it's the safe default when you forget the \"correct\" counter.",
            "<strong>〜こ (個)</strong> counts small, roundish objects — apples, eggs, balls: <em>いっこ, にこ, さんこ</em>.",
            "Word order: <em>noun</em> + を + <em>number-counter</em> + verb. \"Two coffees, please\" = <strong>コーヒーを ふたつ ください</strong>.",
          ],
          keyPoint:
            "…つ is the safe all-purpose counter (ひとつ〜とお). 〜こ counts small round things. Pattern: noun を [number-counter] ください.",
        },
        {
          type: "conjugation",
          heading: "The …つ counter 1–10",
          verb: "〜つ",
          meaning: "native all-purpose counter",
          intro: "These are irregular and worth memorizing as a chant. Note 10 is just とお (no つ).",
          tenses: [
            {
              name: "1 to 5",
              forms: [
                { person: "1", form: "ひとつ", en: "hitotsu" },
                { person: "2", form: "ふたつ", en: "futatsu" },
                { person: "3", form: "みっつ", en: "mittsu" },
                { person: "4", form: "よっつ", en: "yottsu" },
                { person: "5", form: "いつつ", en: "itsutsu" },
              ],
            },
            {
              name: "6 to 10",
              forms: [
                { person: "6", form: "むっつ", en: "muttsu" },
                { person: "7", form: "ななつ", en: "nanatsu" },
                { person: "8", form: "やっつ", en: "yattsu" },
                { person: "9", form: "ここのつ", en: "kokonotsu" },
                { person: "10", form: "とお", en: "too (no つ!)" },
              ],
            },
            {
              name: "Asking 'how many?'",
              forms: [
                { person: "いくつ ですか。", form: "いくつ", en: "How many? (with …つ things)" },
                { person: "ひとつ ください。", form: "ひとつ", en: "One, please." },
              ],
            },
          ],
        },
        {
          type: "vocab",
          heading: "〜こ (個) and useful words",
          items: [
            { l1: "一個 (いっこ)", en: "one (small round thing)", note: "ikko — sound change from ichi." },
            { l1: "二個 (にこ)", en: "two", note: "niko." },
            { l1: "三個 (さんこ)", en: "three", note: "sanko." },
            { l1: "六個 (ろっこ)", en: "six", note: "rokko — sound change." },
            { l1: "十個 (じゅっこ)", en: "ten", note: "jukko — sound change." },
            { l1: "いくつ", en: "how many (…つ items)", note: "ikutsu." },
            { l1: "ぜんぶで", en: "in total / altogether", note: "zenbu de." },
            { l1: "ください", en: "please give me", note: "kudasai." },
          ],
        },
        {
          type: "dialogue",
          heading: "At a Tokyo bakery",
          setup: "You're ordering pastries at the counter.",
          lines: [
            { speaker: "You", l1: "すみません、このパンを ふたつ ください。", en: "Excuse me, two of this bread, please." },
            { speaker: "店員 (Staff)", l1: "はい、ふたつ ですね。ほかには?", en: "Yes, two. Anything else?" },
            { speaker: "You", l1: "それから、ドーナツを みっつ おねがいします。", en: "And then three donuts, please." },
            { speaker: "店員 (Staff)", l1: "かしこまりました。ぜんぶで 五個 ですね。", en: "Understood. Five items in total." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Count it",
          items: [
            {
              template: "コーヒーを ___ ください。(2)",
              answer: "ふたつ",
              en: "Two coffees, please.",
              options: ["ふたつ", "にこ", "ふたり", "にまい"],
            },
            {
              template: "りんごを ___ ください。(3 small round)",
              answer: "さんこ",
              en: "Three apples, please.",
              options: ["さんこ", "みっつ", "さんぼん", "さんまい"],
            },
            {
              template: "___ ですか。(how many — …つ)",
              answer: "いくつ",
              en: "How many?",
              options: ["いくつ", "いくら", "なんにん", "なんぼん"],
            },
            {
              template: "ケーキを ___ ください。(1)",
              answer: "ひとつ",
              en: "One cake, please.",
              options: ["ひとつ", "いっこ", "いちまい", "ひとり"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Two coffees and one cake, please.",
          reference: "コーヒーを ふたつ、ケーキを ひとつ ください。",
          hint: "noun を [number-counter], then ください at the end.",
        },
      ],
    },
    {
      slug: "counters-shapes",
      title: "Shape counters — 本 (long), 枚 (flat), 杯 (cups)",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Counters match the shape",
          body: [
            "Once you're past the all-purpose …つ, Japanese picks a counter based on an object's <strong>shape</strong>.",
            "<strong>本 (ほん)</strong> counts <em>long, thin things</em>: bottles, pens, umbrellas, bananas, train lines.",
            "<strong>枚 (まい)</strong> counts <em>flat, thin things</em>: paper, tickets, stamps, plates, T-shirts, postcards.",
            "<strong>杯 (はい)</strong> counts <em>cupfuls / glassfuls / bowlfuls</em>: a glass of water, a bowl of ramen, a cup of coffee.",
            "Watch the <strong>sound changes</strong> — 本 is the classic: いっぽん, にほん, さんぼん. We'll drill those next lesson.",
          ],
          keyPoint:
            "本 = long thin (bottles, pens). 枚 = flat thin (paper, tickets). 杯 = cupfuls / bowlfuls.",
        },
        {
          type: "conjugation",
          heading: "本 (long, thin) — note the sound changes",
          verb: "〜本 (ほん)",
          meaning: "counter for long thin objects",
          intro: "The reading flips between ほん / ぽん / ぼん depending on the number.",
          tenses: [
            {
              name: "1 to 5",
              forms: [
                { person: "1", form: "いっぽん", en: "ippon (p!)" },
                { person: "2", form: "にほん", en: "nihon" },
                { person: "3", form: "さんぼん", en: "sanbon (b!)" },
                { person: "4", form: "よんほん", en: "yonhon" },
                { person: "5", form: "ごほん", en: "gohon" },
              ],
            },
            {
              name: "6 to 10 + how many",
              forms: [
                { person: "6", form: "ろっぽん", en: "roppon (p!)" },
                { person: "8", form: "はっぽん", en: "happon (p!)" },
                { person: "10", form: "じゅっぽん", en: "juppon (p!)" },
                { person: "how many?", form: "なんぼん", en: "nanbon (b!)" },
              ],
            },
          ],
        },
        {
          type: "conjugation",
          heading: "枚 (flat) and 杯 (cups)",
          verb: "〜枚 / 〜杯",
          meaning: "flat-thing & cupful counters",
          intro: "枚 (まい) is regular and easy. 杯 (はい) has sound changes like 本.",
          tenses: [
            {
              name: "枚 (まい) — flat things",
              forms: [
                { person: "1", form: "いちまい", en: "ichimai" },
                { person: "2", form: "にまい", en: "nimai" },
                { person: "3", form: "さんまい", en: "sanmai" },
                { person: "how many?", form: "なんまい", en: "nanmai" },
              ],
            },
            {
              name: "杯 (はい) — cupfuls",
              forms: [
                { person: "1", form: "いっぱい", en: "ippai (p!)" },
                { person: "2", form: "にはい", en: "nihai" },
                { person: "3", form: "さんばい", en: "sanbai (b!)" },
                { person: "how many?", form: "なんばい", en: "nanbai (b!)" },
              ],
            },
          ],
        },
        {
          type: "vocab",
          heading: "Things to count",
          items: [
            { l1: "ビール一本 (いっぽん)", en: "one beer (bottle)", note: "biiru ippon — 本 long thin." },
            { l1: "傘 (かさ)", en: "umbrella", note: "kasa — counts with 本." },
            { l1: "切符 (きっぷ)", en: "ticket", note: "kippu — counts with 枚." },
            { l1: "紙 (かみ)", en: "paper", note: "kami — counts with 枚." },
            { l1: "ラーメン一杯 (いっぱい)", en: "one bowl of ramen", note: "raamen ippai — 杯." },
            { l1: "お水 (おみず)", en: "water", note: "o-mizu — a glass = 一杯." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Pick the counter",
          questions: [
            {
              q: "Which counter for two bottles of beer?",
              options: ["にまい", "にほん", "にこ", "ふたり"],
              correct: 1,
            },
            {
              q: "Which counter for three train tickets?",
              options: ["さんぼん", "さんまい", "さんばい", "さんこ"],
              correct: 1,
            },
            {
              q: "'One bowl of ramen' =",
              options: ["ラーメン いっぽん", "ラーメン いちまい", "ラーメン いっぱい", "ラーメン いっこ"],
              correct: 2,
            },
            {
              q: "How is 三本 read?",
              options: ["さんほん", "さんぼん", "さんぽん", "さんまい"],
              correct: 1,
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Two beers and one bowl of ramen, please.",
          reference: "ビールを 二本、ラーメンを 一杯 ください。",
          hint: "Beers (bottles) → 本, ramen (bowl) → 杯.",
        },
      ],
    },
    {
      slug: "counters-people-times",
      title: "人 (people), 回 (times) & the sound-change patterns",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Counting people and occurrences",
          body: [
            "<strong>人 (にん)</strong> counts <em>people</em> — but 1 and 2 are irregular natives: <em>ひとり</em> (1 person), <em>ふたり</em> (2 people), then regular from 3: <em>さんにん, よにん…</em>",
            "At a restaurant, the staff ask <strong>なんめいさま ですか</strong> (polite \"how many people?\"); you answer <em>ふたり です</em> (\"two\").",
            "<strong>回 (かい)</strong> counts <em>times / occurrences</em>: <em>いっかい</em> (once), <em>にかい</em> (twice), <em>さんかい</em> (three times).",
            "Across all counters the same <strong>sound-change pattern</strong> recurs: after 1, 6, 8, 10 the counter often doubles its consonant (いっ〜, ろっ〜, はっ〜, じゅっ〜); after 3 and 'how many' a k/h often softens to g/b. Recognizing the pattern beats memorizing every box.",
          ],
          keyPoint:
            "人: ひとり, ふたり, then さんにん… 回 = times (いっかい, にかい…). Sound changes cluster around 1, 3, 6, 8, 10.",
        },
        {
          type: "conjugation",
          heading: "人 (people) and 回 (times)",
          verb: "〜人 / 〜回",
          meaning: "people & times counters",
          intro: "人 is irregular for 1–2; 回 follows the familiar 1/6/8/10 doubling pattern.",
          tenses: [
            {
              name: "人 (people)",
              forms: [
                { person: "1", form: "ひとり", en: "hitori (irregular)" },
                { person: "2", form: "ふたり", en: "futari (irregular)" },
                { person: "3", form: "さんにん", en: "sannin" },
                { person: "4", form: "よにん", en: "yonin (not yonnin!)" },
                { person: "how many?", form: "なんにん", en: "nannin" },
              ],
            },
            {
              name: "回 (times)",
              forms: [
                { person: "1", form: "いっかい", en: "ikkai (k doubles)" },
                { person: "2", form: "にかい", en: "nikai" },
                { person: "3", form: "さんかい", en: "sankai" },
                { person: "6", form: "ろっかい", en: "rokkai" },
                { person: "how many?", form: "なんかい", en: "nankai" },
              ],
            },
          ],
        },
        {
          type: "tip",
          heading: "The 'small つ' sound-change rule",
          body: "When a counter starts with k, s, t, h/f, or p, the numbers <strong>1, 6, 8</strong> (and often 10) make a tiny pause — written with a small っ — so いち+本 → <em>いっぽん</em>, ろく+回 → <em>ろっかい</em>, はち+杯 → <em>はっぱい</em>. Separately, <strong>3</strong> and <strong>なん (how many)</strong> often voice an h-counter to b: 三本 → <em>さんぼん</em>, 何杯 → <em>なんばい</em>. Spot the pattern once and every counter gets easier.",
          example: { l1: "一本・六回・三杯・何人", en: "ippon · rokkai · sanbai · nannin" },
        },
        {
          type: "dialogue",
          heading: "Being seated at an izakaya",
          setup: "You arrive with a friend.",
          lines: [
            { speaker: "店員 (Staff)", l1: "いらっしゃいませ。なんめいさま ですか。", en: "Welcome. How many people?" },
            { speaker: "You", l1: "ふたり です。", en: "Two." },
            { speaker: "店員 (Staff)", l1: "おタバコは すいますか。", en: "Do you smoke?" },
            { speaker: "You", l1: "いいえ。あ、ビールを 二本 おねがいします。", en: "No. Oh, and two beers, please." },
            { speaker: "店員 (Staff)", l1: "かしこまりました。", en: "Understood." },
          ],
        },
        {
          type: "fillBlank",
          heading: "People & times",
          items: [
            {
              template: "___ です。(2 people)",
              answer: "ふたり",
              en: "Two (people).",
              options: ["ふたり", "にこ", "にほん", "にかい"],
            },
            {
              template: "テーブルは ___ さま ですか。",
              answer: "なんめい",
              en: "How many people for the table?",
              options: ["なんめい", "いくつ", "いくら", "なんぼん"],
            },
            {
              template: "日本は ___ きました。(once)",
              answer: "いっかい",
              en: "I've come to Japan once.",
              options: ["いっかい", "ひとつ", "ひとり", "いっぽん"],
            },
            {
              template: "学生は ___ います。(3 people)",
              answer: "さんにん",
              en: "There are three students.",
              options: ["さんにん", "さんこ", "さんまい", "さんぼん"],
            },
          ],
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "'One person' =",
              options: ["いっこ", "ひとり", "ひとつ", "いっかい"],
              correct: 1,
            },
            {
              q: "'Twice' =",
              options: ["にかい", "にほん", "ふたり", "にまい"],
              correct: 0,
            },
            {
              q: "How is 一本 read?",
              options: ["いちほん", "いっぽん", "いっこ", "ひとつ"],
              correct: 1,
            },
            {
              q: "Staff ask 'なんめいさま ですか'. They want to know…",
              options: ["how much", "how many people", "what time", "which color"],
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
        q: "The safe all-purpose counter for everyday objects (1–10) is…",
        options: ["〜本", "〜枚", "〜つ", "〜杯"],
        correct: 2,
      },
      {
        q: "'Three' in the …つ counter =",
        options: ["さんこ", "みっつ", "さんつ", "みつ"],
        correct: 1,
      },
      {
        q: "Which counter for long thin things (bottles, pens)?",
        options: ["枚", "個", "本", "杯"],
        correct: 2,
      },
      {
        q: "Which counter for flat thin things (tickets, paper)?",
        options: ["本", "枚", "杯", "人"],
        correct: 1,
      },
      {
        q: "'One bowl of ramen' =",
        options: ["ラーメン いっぽん", "ラーメン いっぱい", "ラーメン いちまい", "ラーメン いっこ"],
        correct: 1,
      },
      {
        q: "How is 三本 read?",
        options: ["さんほん", "さんぽん", "さんぼん", "さんまい"],
        correct: 2,
      },
      {
        q: "'Two people' =",
        options: ["ふたつ", "ふたり", "にこ", "にん"],
        correct: 1,
      },
      {
        q: "'Once' (one time) =",
        options: ["いっかい", "いっこ", "ひとつ", "いっぽん"],
        correct: 0,
      },
      {
        q: "Numbers 1, 6, 8, 10 before a counter typically cause…",
        options: [
          "a long vowel",
          "a small っ pause / doubled consonant",
          "the number to disappear",
          "no change at all",
        ],
        correct: 1,
      },
      {
        q: "Translate the order: 'Two beers and one cake, please.'",
        options: [
          "ビールを 二枚、ケーキを 一個 ください。",
          "ビールを 二本、ケーキを ひとつ ください。",
          "ビールを 二人、ケーキを 一杯 ください。",
          "ビールを ふたり、ケーキを 一本 ください。",
        ],
        correct: 1,
      },
    ],
  },
};
