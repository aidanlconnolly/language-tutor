import type { Unit } from "../../types";

export const UNIT_ADJECTIVES: Unit = {
  slug: "adjectives",
  stage: 2,
  order: 9,
  icon: "🌈",
  title: "Adjectives (い & な)",
  tagline: "い-adjectives and な-adjectives, positive & negative.",
  badge: "core",
  lessons: [
    {
      slug: "adjectives-i-adjectives",
      title: "い-adjectives & the …くない negative",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "い-adjectives end in い",
          body: [
            "One whole family of Japanese adjectives ends in the kana <strong>い</strong>: <em>たかい</em> (expensive/tall), <em>おいしい</em> (delicious), <em>おおきい</em> (big). They go straight before です: <em>たかいです</em>.",
            "To make one negative, drop the final <strong>い</strong> and add <strong>くない</strong>: <em>たかい → たかくない</em> (\"not expensive\"). Add です to keep it polite: <em>たかくないです</em>.",
            "One irregular star: <em>いい</em> (good) becomes <strong>よくない</strong> in the negative, not \"いくない.\"",
          ],
          keyPoint: "い-adjective negative: drop い, add くない. たかい → たかくない(です).",
        },
        {
          type: "conjugation",
          heading: "い-adjective forms",
          verb: "たかい",
          meaning: "expensive / tall",
          intro: "Japanese adjectives don't change by person — these are the polite forms.",
          tenses: [
            {
              name: "Positive & negative (present)",
              forms: [
                { person: "positive", form: "たかいです", en: "is expensive" },
                { person: "negative", form: "たかくないです", en: "is not expensive" },
                { person: "positive (good)", form: "いいです", en: "is good" },
                { person: "negative (good, irregular)", form: "よくないです", en: "is not good" },
              ],
            },
          ],
        },
        {
          type: "vocab",
          heading: "Common い-adjectives",
          items: [
            { l1: "たかい", en: "expensive / tall", note: "takai (たかい)" },
            { l1: "やすい", en: "cheap", note: "yasui (やすい)" },
            { l1: "おいしい", en: "delicious", note: "oishii (おいしい)" },
            { l1: "おおきい", en: "big", note: "ōkii (おおきい)" },
            { l1: "ちいさい", en: "small", note: "chiisai (ちいさい)" },
            { l1: "あたらしい", en: "new", note: "atarashii (あたらしい)" },
            { l1: "いい", en: "good", note: "ii — negative is irregular: よくない" },
            { l1: "〜くない", en: "not … (い-adj negative)", note: "-kunai: drop い, add くない" },
          ],
        },
        {
          type: "fillBlank",
          heading: "Positive or negative?",
          intro: "Complete the い-adjective.",
          items: [
            {
              template: "この すしは おいし ___ です。",
              answer: "い",
              en: "This sushi is delicious.",
              options: ["い", "くない", "な", "じゃ"],
            },
            {
              template: "この みせは たか ___ です。(not expensive)",
              answer: "くない",
              en: "This shop is not expensive.",
              options: ["い", "くない", "な", "です"],
            },
            {
              template: "てんきは ___ です。(not good — irregular)",
              answer: "よくない",
              en: "The weather is not good.",
              options: ["いくない", "よくない", "いい", "たかい"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "This sushi is delicious.",
          reference: "この すしは おいしいです。",
          hint: "kono sushi wa oishii desu — い-adjective straight before です.",
        },
      ],
    },
    {
      slug: "adjectives-na-adjectives",
      title: "な-adjectives & the …じゃ ない negative",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "な-adjectives behave like nouns",
          body: [
            "The other family, <strong>な-adjectives</strong>, don't end in a meaningful い. They act like nouns and just take です: <em>きれいです</em> (is pretty/clean), <em>ゆうめいです</em> (is famous).",
            "Their negative is the same as a noun's: drop です and add <strong>じゃ ない</strong> (casual) or <strong>では ありません</strong> (formal): <em>ゆうめいじゃ ないです</em> = \"is not famous.\"",
            "Watch out: <em>きれい</em> ends in い but is a <strong>な-adjective</strong>, not an い-adjective. So its negative is <em>きれいじゃ ない</em>, never \"きれくない.\"",
          ],
          keyPoint: "な-adjective negative: …じゃ ない(です) / …では ありません. きれい is a な-adjective!",
        },
        {
          type: "conjugation",
          heading: "な-adjective forms",
          verb: "ゆうめい",
          meaning: "famous",
          intro: "Same idea — no person changes; these are the polite forms.",
          tenses: [
            {
              name: "Positive & negative (present)",
              forms: [
                { person: "positive", form: "ゆうめいです", en: "is famous" },
                { person: "negative (casual)", form: "ゆうめいじゃ ないです", en: "is not famous" },
                { person: "negative (formal)", form: "ゆうめいでは ありません", en: "is not famous" },
              ],
            },
          ],
        },
        {
          type: "vocab",
          heading: "Common な-adjectives",
          items: [
            { l1: "きれい", en: "pretty / clean", note: "kirei — な-adj despite ending in い" },
            { l1: "ゆうめい", en: "famous", note: "yūmei (ゆうめい)" },
            { l1: "しずか", en: "quiet", note: "shizuka (しずか)" },
            { l1: "にぎやか", en: "lively / bustling", note: "nigiyaka (にぎやか)" },
            { l1: "げんき", en: "healthy / energetic", note: "genki (げんき)" },
            { l1: "ゆうめいな", en: "famous … (+ noun)", note: "yūmei-na: add な before a noun" },
            { l1: "〜じゃ ない", en: "is not … (casual)", note: "-ja nai" },
          ],
        },
        {
          type: "dialogue",
          heading: "Talking about neighborhoods",
          setup: "Comparing two parts of Tokyo with a friend.",
          lines: [
            { speaker: "Aoi", l1: "しんじゅくは しずかですか。", en: "Is Shinjuku quiet?" },
            { speaker: "You", l1: "いいえ、しずかじゃ ないです。にぎやかです。", en: "No, it's not quiet. It's lively." },
            { speaker: "Aoi", l1: "せんそうじは ゆうめいですか。", en: "Is Sensō-ji famous?" },
            { speaker: "You", l1: "はい、とても ゆうめいです。", en: "Yes, it's very famous." },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Shinjuku is not quiet.",
          reference: "しんじゅくは しずかじゃ ないです。",
          hint: "Shinjuku wa shizuka ja nai desu — な-adjective negative is じゃ ない.",
        },
      ],
    },
    {
      slug: "adjectives-modifying-past",
      title: "Modifying nouns & the past …かった",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Putting adjectives in front of nouns",
          body: [
            "To describe a noun directly, put the adjective in front of it. <strong>い-adjectives</strong> attach as-is: <em>たかい ほん</em> = \"an expensive book.\"",
            "<strong>な-adjectives</strong> need a <strong>な</strong> linker: <em>きれいな こうえん</em> = \"a pretty park,\" <em>ゆうめいな おてら</em> = \"a famous temple.\"",
            "For the <em>past tense</em> of an い-adjective, drop the final <strong>い</strong> and add <strong>かった</strong>: <em>たかい → たかかった</em> (\"was expensive\"), <em>おいしい → おいしかった</em> (\"was delicious\"). For な-adjectives, use <em>でした</em>: <em>ゆうめいでした</em>.",
          ],
          keyPoint:
            "い-adj + noun directly. な-adj + な + noun. い-adj past: drop い, add かった.",
        },
        {
          type: "conjugation",
          heading: "Present vs past",
          verb: "おいしい / ゆうめい",
          meaning: "delicious / famous",
          intro: "い-adjective past = かった; な-adjective past = でした.",
          tenses: [
            {
              name: "Tense forms (polite)",
              forms: [
                { person: "い-adj present", form: "おいしいです", en: "is delicious" },
                { person: "い-adj past", form: "おいしかったです", en: "was delicious" },
                { person: "な-adj present", form: "ゆうめいです", en: "is famous" },
                { person: "な-adj past", form: "ゆうめいでした", en: "was famous" },
              ],
            },
          ],
        },
        {
          type: "vocab",
          heading: "Nouns to describe",
          items: [
            { l1: "こうえん", en: "park", note: "kōen (こうえん)" },
            { l1: "おてら", en: "temple", note: "o-tera (おてら)" },
            { l1: "まち", en: "town / neighborhood", note: "machi (まち)" },
            { l1: "りょうり", en: "food / cuisine", note: "ryōri (りょうり)" },
            { l1: "とても", en: "very", note: "totemo" },
            { l1: "〜かった", en: "was … (い-adj past)", note: "-katta: drop い, add かった" },
            { l1: "でした", en: "was (noun / な-adj past)", note: "deshita" },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Modify and tense",
          questions: [
            {
              q: "'a famous temple' is…",
              options: ["ゆうめい おてら", "ゆうめいな おてら", "ゆうめいの おてら", "ゆうめいい おてら"],
              correct: 1,
              fb: "な-adjectives take な before a noun: ゆうめいな おてら.",
            },
            {
              q: "'an expensive book' is…",
              options: ["たかいな ほん", "たかの ほん", "たかい ほん", "たかな ほん"],
              correct: 2,
              fb: "い-adjectives attach directly: たかい ほん.",
            },
            {
              q: "The past tense of おいしい is…",
              options: ["おいしいでした", "おいしくない", "おいしかった", "おいしな"],
              correct: 2,
              fb: "Drop い, add かった: おいしかった.",
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "The food was delicious.",
          reference: "りょうりは おいしかったです。",
          hint: "ryōri wa oishikatta desu — い-adj past: おいしい → おいしかった.",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "Negative of たかい (expensive)?",
              options: ["たかじゃ ない", "たかくない", "たかかった", "たかな"],
              correct: 1,
            },
            {
              q: "'a pretty park' (きれい is a な-adjective)?",
              options: ["きれい こうえん", "きれいな こうえん", "きれくない こうえん", "きれいの こうえん"],
              correct: 1,
            },
            {
              q: "Past tense of おいしい?",
              options: ["おいしいでした", "おいしかった", "おいしくない", "おいしな"],
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
        q: "Which is an い-adjective?",
        options: ["ゆうめい", "しずか", "たかい", "きれい"],
        correct: 2,
      },
      {
        q: "Negative of たかい (expensive)?",
        options: ["たかじゃ ない", "たかくない", "たかでは ない", "たかな"],
        correct: 1,
      },
      {
        q: "Translate: 'This sushi is delicious.'",
        options: [
          "この すしは おいしいです。",
          "この すしは おいしな です。",
          "この すしは おいしじゃ ない。",
          "おいしいは この すしです。",
        ],
        correct: 0,
      },
      {
        q: "きれい is which kind of adjective?",
        options: ["い-adjective", "な-adjective", "a verb", "a particle"],
        correct: 1,
      },
      {
        q: "Negative of ゆうめい (famous)?",
        options: ["ゆうめくない", "ゆうめいじゃ ない", "ゆうめかった", "ゆうめいい"],
        correct: 1,
      },
      {
        q: "'a famous temple' is…",
        options: ["ゆうめい おてら", "ゆうめいな おてら", "ゆうめいの おてら", "ゆうめいい おてら"],
        correct: 1,
      },
      {
        q: "'an expensive book' is…",
        options: ["たかいな ほん", "たかい ほん", "たかの ほん", "たかな ほん"],
        correct: 1,
      },
      {
        q: "Past tense of おいしい (delicious)?",
        options: ["おいしいでした", "おいしかった", "おいしくない", "おいしな"],
        correct: 1,
      },
      {
        q: "Past tense of a な-adjective like ゆうめい uses…",
        options: ["かった", "くない", "でした", "じゃ ない"],
        correct: 2,
      },
      {
        q: "The irregular negative of いい (good) is…",
        options: ["いくない", "よくない", "いかった", "いじゃ ない"],
        correct: 1,
      },
    ],
  },
};
