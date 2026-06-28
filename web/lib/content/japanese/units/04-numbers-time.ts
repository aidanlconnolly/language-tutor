import type { Unit } from "../../types";

export const UNIT_NUMBERS_TIME: Unit = {
  slug: "numbers-time",
  stage: 1,
  order: 4,
  icon: "🔢",
  title: "Numbers, time & counters",
  tagline: "1–10000, telling time, days, and counting intro.",
  badge: "core",
  lessons: [
    {
      slug: "numbers-time-counting",
      title: "Numbers 1 to 10000",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Japanese numbers are wonderfully regular",
          body: [
            "Count one to ten — <strong>いち, に, さん, し/よん, ご, ろく, しち/なな, はち, きゅう/く, じゅう</strong> — and you've nearly cracked the whole system. After ten, you just combine: 11 is じゅういち (10+1), 20 is にじゅう (2×10), 21 is にじゅういち (2×10+1).",
            "The big units stack the same way: <strong>ひゃく</strong> = 100, <strong>せん</strong> = 1000, <strong>まん</strong> = 10000. So 300 is さんびゃく, 2000 is にせん, and 10000 is いちまん.",
            "The one catch: 4, 7, and 9 each have <em>two readings</em>, and which one you use depends on context. You'll meet し vs よん (4), しち vs なな (7), and く vs きゅう (9). For counting alone, よん, なな, きゅう are the safe defaults.",
          ],
          keyPoint:
            "Build any number by stacking: にじゅうご = 2×10+5 = 25. Units: 百 ひゃく (100), 千 せん (1000), 万 まん (10000).",
        },
        {
          type: "vocab",
          heading: "One to ten",
          intro: "The 4 / 7 / 9 alternates are listed together.",
          items: [
            { l1: "いち", en: "1", note: "rōmaji: ichi" },
            { l1: "に", en: "2", note: "rōmaji: ni" },
            { l1: "さん", en: "3", note: "rōmaji: san" },
            { l1: "よん / し", en: "4", note: "rōmaji: yon / shi — yon is the safe default" },
            { l1: "ご", en: "5", note: "rōmaji: go" },
            { l1: "ろく", en: "6", note: "rōmaji: roku" },
            { l1: "なな / しち", en: "7", note: "rōmaji: nana / shichi — nana is the safe default" },
            { l1: "はち", en: "8", note: "rōmaji: hachi" },
            { l1: "きゅう / く", en: "9", note: "rōmaji: kyū / ku — kyū is the safe default" },
            { l1: "じゅう", en: "10", note: "rōmaji: jū" },
          ],
        },
        {
          type: "vocab",
          heading: "Tens, hundreds, thousands",
          intro: "Note the small sound changes in 300, 600, 800.",
          items: [
            { l1: "にじゅう", en: "20", note: "rōmaji: nijū = 2×10" },
            { l1: "ごじゅう", en: "50", note: "rōmaji: gojū" },
            { l1: "ひゃく", en: "100", note: "rōmaji: hyaku" },
            { l1: "さんびゃく", en: "300", note: "rōmaji: sanbyaku — ひゃく→びゃく" },
            { l1: "ろっぴゃく", en: "600", note: "rōmaji: roppyaku — sound shift" },
            { l1: "せん", en: "1000", note: "rōmaji: sen" },
            { l1: "にせん", en: "2000", note: "rōmaji: nisen" },
            { l1: "いちまん", en: "10000", note: "rōmaji: ichiman — note: always いちまん, not just まん" },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Read the number",
          questions: [
            {
              q: "What is にじゅうご?",
              options: ["52", "25", "205", "215"],
              correct: 1,
              fb: "に(2)×じゅう(10)+ご(5) = 25.",
            },
            {
              q: "Which is the safe default reading of 4 when counting?",
              options: ["し", "よん", "し or し", "じゅう"],
              correct: 1,
              fb: "よん avoids the unlucky/ambiguous し. Both exist, but よん is safer.",
            },
            {
              q: "What is いちまん?",
              options: ["1000", "100", "10000", "100000"],
              correct: 2,
              fb: "まん = 10000, and it's always preceded by いち: いちまん.",
            },
          ],
        },
        {
          type: "translate",
          heading: "Say the number",
          direction: "en-to-l1",
          prompt: "Write the number 25 in hiragana.",
          reference: "にじゅうご",
          hint: "2 → に, 10 → じゅう, 5 → ご. rōmaji: nijūgo",
        },
      ],
    },
    {
      slug: "numbers-time-clock-days",
      title: "Telling time and the days of the week",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "…じ for hours, …ふん/ぷん for minutes",
          body: [
            "Telling time uses two counters: <strong>じ</strong> (時, o'clock / hour) and <strong>ふん / ぷん</strong> (分, minute). 'Three o'clock' is さんじ; '3:10' is さんじ じゅっぷん.",
            "A few hours are irregular: 4 o'clock is <strong>よじ</strong> (not しじ/よんじ), 7 o'clock is <strong>しちじ</strong>, and 9 o'clock is <strong>くじ</strong>. Minutes alternate between ふん and ぷん depending on the number (いっぷん, さんぷん, but よんふん).",
            "The days of the week all end in <strong>ようび</strong> (曜日). Each is named after a classical element: 月 (moon) Monday, 火 (fire) Tuesday, 水 (water) Wednesday, 木 (wood/tree) Thursday, 金 (gold) Friday, 土 (earth) Saturday, 日 (sun) Sunday.",
          ],
          tip: {
            label: "The irregular hours to memorize",
            body: "Three hours break the pattern: <em>よじ</em> (4:00), <em>しちじ</em> (7:00), <em>くじ</em> (9:00). Say these aloud a few times — they come up constantly.",
          },
        },
        {
          type: "vocab",
          heading: "Hours and minutes",
          items: [
            { l1: "いちじ", en: "1:00", note: "rōmaji: ichi-ji" },
            { l1: "よじ", en: "4:00", note: "rōmaji: yo-ji — irregular, not よんじ" },
            { l1: "しちじ", en: "7:00", note: "rōmaji: shichi-ji — irregular" },
            { l1: "くじ", en: "9:00", note: "rōmaji: ku-ji — irregular" },
            { l1: "じゅっぷん", en: "10 minutes", note: "rōmaji: juppun — minute counter ぷん" },
            { l1: "はん", en: "half (past)", note: "rōmaji: han; e.g. さんじはん = 3:30" },
          ],
        },
        {
          type: "vocab",
          heading: "Days of the week",
          intro: "All end in ようび.",
          items: [
            { l1: "げつようび", en: "Monday", note: "rōmaji: getsuyōbi; 月 moon" },
            { l1: "かようび", en: "Tuesday", note: "rōmaji: kayōbi; 火 fire" },
            { l1: "すいようび", en: "Wednesday", note: "rōmaji: suiyōbi; 水 water" },
            { l1: "もくようび", en: "Thursday", note: "rōmaji: mokuyōbi; 木 wood" },
            { l1: "きんようび", en: "Friday", note: "rōmaji: kinyōbi; 金 gold" },
            { l1: "どようび", en: "Saturday", note: "rōmaji: doyōbi; 土 earth" },
            { l1: "にちようび", en: "Sunday", note: "rōmaji: nichiyōbi; 日 sun" },
          ],
        },
        {
          type: "dialogue",
          heading: "What time does the museum open?",
          setup: "You ask a station attendant about opening times.",
          lines: [
            { speaker: "You", l1: "すみません、はくぶつかん は なんじ から ですか。", en: "Excuse me, what time does the museum open (from)?" },
            { speaker: "Attendant", l1: "くじ から です。", en: "From 9 o'clock." },
            { speaker: "You", l1: "なんじ まで ですか。", en: "Until what time?" },
            { speaker: "Attendant", l1: "ごじはん まで です。", en: "Until 5:30." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Fill in the time word",
          intro: "Choose the correct reading.",
          items: [
            {
              template: "4:00 = ___",
              answer: "よじ",
              en: "4 o'clock — irregular",
              options: ["よじ", "よんじ", "しじ", "よっじ"],
            },
            {
              template: "Wednesday = ___",
              answer: "すいようび",
              en: "Wednesday (water day)",
              options: ["すいようび", "もくようび", "かようび", "どようび"],
            },
            {
              template: "3:30 = さんじ ___",
              answer: "はん",
              en: "half past three",
              options: ["はん", "ふん", "じ", "まで"],
            },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Quick check",
          questions: [
            {
              q: "How do you say 9:00?",
              options: ["きゅうじ", "くじ", "ここのじ", "きゅじ"],
              correct: 1,
              fb: "9 o'clock is the irregular くじ.",
            },
            {
              q: "Which day is げつようび?",
              options: ["Sunday", "Monday", "Friday", "Saturday"],
              correct: 1,
              fb: "月 (moon) ようび = Monday.",
            },
            {
              q: "What does さんじはん mean?",
              options: ["3:00", "3:13", "3:30", "13:00"],
              correct: 2,
              fb: "さんじ (3:00) + はん (half) = 3:30.",
            },
          ],
        },
      ],
    },
    {
      slug: "numbers-time-yen-counters",
      title: "Prices in yen and the …つ counter",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Yen, and the all-purpose …つ counter",
          body: [
            "Prices use the number plus <strong>えん</strong> (円, yen). ごひゃくえん is ¥500, せんえん is ¥1000, にせんえん is ¥2000. Just stack the numbers you already know and add えん.",
            "Japanese counts different things with different <strong>counters</strong> (like 'two <em>sheets</em> of paper'). The friendliest one for beginners is the native <strong>…つ</strong> set: ひとつ (1), ふたつ (2), みっつ (3), よっつ (4), いつつ (5)… up to とお (10).",
            "The …つ counter works for most general objects when you don't know the specific counter, and it's perfect for ordering: 'コーヒー を ふたつ ください' = 'two coffees, please'. It saves you in countless shops and restaurants.",
          ],
          keyPoint:
            "Price = number + えん (¥). General counting = ひとつ・ふたつ・みっつ… up to とお (10). Use …つ to order: ふたつ ください = 'two, please'.",
        },
        {
          type: "vocab",
          heading: "Prices in yen",
          items: [
            { l1: "ひゃくえん", en: "¥100", note: "rōmaji: hyaku-en" },
            { l1: "ごひゃくえん", en: "¥500", note: "rōmaji: gohyaku-en" },
            { l1: "せんえん", en: "¥1000", note: "rōmaji: sen-en" },
            { l1: "にせんえん", en: "¥2000", note: "rōmaji: nisen-en" },
            { l1: "いくら", en: "how much?", note: "rōmaji: ikura; the price question word" },
          ],
        },
        {
          type: "conjugation",
          heading: "The …つ general counter",
          verb: "…つ",
          meaning: "general object counter (1–10)",
          intro: "Use this as a FORM table — the 'person' column is the count, the 'form' is the Japanese word.",
          tenses: [
            {
              name: "Counting 1 to 5",
              forms: [
                { person: "1", form: "ひとつ", en: "one (hitotsu)" },
                { person: "2", form: "ふたつ", en: "two (futatsu)" },
                { person: "3", form: "みっつ", en: "three (mittsu)" },
                { person: "4", form: "よっつ", en: "four (yottsu)" },
                { person: "5", form: "いつつ", en: "five (itsutsu)" },
              ],
            },
            {
              name: "Counting 6 to 10",
              forms: [
                { person: "6", form: "むっつ", en: "six (muttsu)" },
                { person: "7", form: "ななつ", en: "seven (nanatsu)" },
                { person: "8", form: "やっつ", en: "eight (yattsu)" },
                { person: "9", form: "ここのつ", en: "nine (kokonotsu)" },
                { person: "10", form: "とお", en: "ten (tō) — drops the つ" },
              ],
            },
          ],
        },
        {
          type: "dialogue",
          heading: "At a convenience store",
          setup: "You buy two onigiri and ask the price.",
          lines: [
            { speaker: "You", l1: "おにぎり を ふたつ ください。", en: "Two onigiri, please." },
            { speaker: "Clerk", l1: "はい。ほかに なにか？", en: "Sure. Anything else?" },
            { speaker: "You", l1: "いいえ。いくら ですか。", en: "No. How much is it?" },
            { speaker: "Clerk", l1: "ごひゃくえん です。", en: "It's ¥500." },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the order",
          intro: "Arrange the words to order by count.",
          items: [
            { tokens: ["コーヒー", "を", "ふたつ", "ください"], en: "Two coffees, please." },
            { tokens: ["これ", "は", "いくら", "ですか"], en: "How much is this?" },
            { tokens: ["おにぎり", "を", "みっつ", "ください"], en: "Three onigiri, please." },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Two coffees, please. How much is it?",
          reference: "コーヒー を ふたつ ください。いくら ですか。",
          hint: "Use the …つ counter ふたつ, then いくら ですか. rōmaji: kōhī o futatsu kudasai. ikura desu ka.",
        },
      ],
    },
  ],
  checkpoint: {
    passingPct: 80,
    questions: [
      {
        q: "What is にじゅうご?",
        options: ["52", "25", "250", "205"],
        correct: 1,
      },
      {
        q: "The safe default reading of 7 when counting is…",
        options: ["しち", "なな", "ろく", "じゅう"],
        correct: 1,
      },
      {
        q: "What is いちまん?",
        options: ["1000", "10000", "100", "100000"],
        correct: 1,
      },
      {
        q: "How do you say 9:00?",
        options: ["きゅうじ", "くじ", "ここのじ", "きゅじ"],
        correct: 1,
      },
      {
        q: "Which day is げつようび?",
        options: ["Sunday", "Monday", "Friday", "Wednesday"],
        correct: 1,
      },
      {
        q: "What does さんじはん mean?",
        options: ["3:00", "3:30", "3:13", "13:00"],
        correct: 1,
      },
      {
        q: "Which counter attaches to prices?",
        options: ["じ", "えん", "つ", "ふん"],
        correct: 1,
      },
      {
        q: "How do you say 'two' with the general …つ counter?",
        options: ["ひとつ", "ふたつ", "みっつ", "に"],
        correct: 1,
      },
      {
        q: "Which word asks 'how much?'",
        options: ["なんじ", "いくら", "いつ", "どこ"],
        correct: 1,
      },
      {
        q: "Translate: 'Two coffees, please.'",
        options: [
          "コーヒー を ふたつ ください。",
          "コーヒー は いくら ですか。",
          "コーヒー を にじ ください。",
          "コーヒー を ひゃく ください。",
        ],
        correct: 0,
      },
    ],
  },
};
