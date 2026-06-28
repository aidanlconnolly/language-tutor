import type { Unit } from "../../types";

export const UNIT_WANT_CAN: Unit = {
  slug: "want-can",
  stage: 5,
  order: 23,
  icon: "✨",
  title: "Wanting & ability",
  tagline: "…たい, ほしい, and …ことが できる.",
  badge: "core",
  lessons: [
    {
      slug: "want-can-tai",
      title: "…たいです — I want to do…",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Express what you want to do",
          body: [
            "To say you <strong>want to do</strong> an action, take the ます-form, drop ます, and add <strong>たい</strong>: 食べます → 食べ + たい = <em>食べたい</em> = I want to eat. Add です to keep it polite: <em>食べたいです</em>.",
            "たい is grammatically an い-adjective, so it conjugates like one. Negative: <em>食べたくないです</em> (I don't want to eat). Past: <em>食べたかったです</em> (I wanted to eat).",
            "One quirk: the object of a たい sentence often takes <strong>が</strong> instead of を — <em>寿司が食べたいです</em> — though を is also heard and fine. たい describes your OWN desire; for someone else's you'd add 〜たがっています, which comes later.",
          ],
          keyPoint:
            "ます-stem + たい(です) = 'want to do'. Negative …たくないです, past …たかったです. Object may take が. Use only for your own wants.",
        },
        {
          type: "conjugation",
          heading: "The たい endings",
          verb: "食べる / 行く",
          meaning: "to eat / to go",
          intro: "たい conjugates like an い-adjective. The 'person' column names the form.",
          tenses: [
            {
              name: "食べる — to eat",
              forms: [
                { person: "want to", form: "食べたいです", en: "want to eat" },
                { person: "don't want to", form: "食べたくないです", en: "don't want to eat" },
                { person: "wanted to (past)", form: "食べたかったです", en: "wanted to eat" },
              ],
            },
            {
              name: "行く — to go",
              forms: [
                { person: "want to", form: "行きたいです", en: "want to go" },
                { person: "don't want to", form: "行きたくないです", en: "don't want to go" },
                { person: "wanted to (past)", form: "行きたかったです", en: "wanted to go" },
              ],
            },
          ],
        },
        {
          type: "vocab",
          heading: "Tokyo bucket-list verbs",
          items: [
            { l1: "見る → 見たい", en: "see → want to see", note: "miru → mitai." },
            { l1: "行く → 行きたい", en: "go → want to go", note: "iku → ikitai." },
            { l1: "食べる → 食べたい", en: "eat → want to eat", note: "taberu → tabetai." },
            { l1: "登る → 登りたい", en: "climb → want to climb", note: "noboru → noboritai. 富士山に登りたい." },
            { l1: "買う → 買いたい", en: "buy → want to buy", note: "kau → kaitai." },
            { l1: "富士山", en: "Mt. Fuji", note: "Fuji-san — ふ・じ・さん." },
            { l1: "温泉", en: "hot spring", note: "onsen — おん・せん." },
            { l1: "お土産", en: "souvenir", note: "omiyage — お・み・や・げ." },
          ],
        },
        {
          type: "fillBlank",
          heading: "What do you want to do?",
          items: [
            {
              template: "寿司が ___ です。(食べる)",
              answer: "食べたい",
              en: "I want to eat sushi.",
              options: ["食べたい", "食べたいた", "食べりたい", "食べます"],
            },
            {
              template: "温泉に ___ です。(行く)",
              answer: "行きたい",
              en: "I want to go to a hot spring.",
              options: ["行きたい", "行くたい", "行きたいだ", "行きました"],
            },
            {
              template: "今日は ___ です。(行く / negative)",
              answer: "行きたくない",
              en: "Today I don't want to go.",
              options: ["行きたくない", "行きないたい", "行きたいない", "行きません"],
            },
            {
              template: "富士山に ___ です。(登る)",
              answer: "登りたい",
              en: "I want to climb Mt. Fuji.",
              options: ["登りたい", "登るたい", "登りたいだ", "登ります"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "I want to go to Asakusa and eat tempura.",
          reference: "浅草に行って、天ぷらが食べたいです。",
          hint: "Link with the て-form 行って, then 食べたいです (object can take が).",
        },
      ],
    },
    {
      slug: "want-can-hoshii",
      title: "…が ほしいです — I want a thing",
      estMinutes: 7,
      pages: [
        {
          type: "intro",
          heading: "Wanting a noun, not an action",
          body: [
            "たい is for wanting to <strong>do</strong> something. To want a <strong>thing</strong> (a noun), use <strong>ほしい</strong>: the thing + <strong>が</strong> + ほしいです. <em>水がほしいです</em> = I want water. <em>新しいかばんがほしいです</em> = I want a new bag.",
            "ほしい is also an い-adjective, so it follows the same pattern as たい. Negative: <em>ほしくないです</em>. Past: <em>ほしかったです</em>.",
            "Notice the object marker flips to <strong>が</strong>: you say <em>水が</em>, not 水を. Like たい, plain ほしい describes your OWN want, so it's mainly used about yourself and in questions to a listener: <em>何がほしいですか</em> = what do you want?",
          ],
          keyPoint: "noun + が + ほしいです = 'I want (the thing)'. Negative ほしくないです, past ほしかったです.",
        },
        {
          type: "vocab",
          heading: "Things you might want",
          items: [
            { l1: "ほしい", en: "want (a thing)", note: "hoshii — ほ・し・い. い-adjective." },
            { l1: "新しい", en: "new", note: "atarashii — あ・た・ら・しい." },
            { l1: "かばん", en: "bag", note: "kaban — か・ば・ん." },
            { l1: "時間", en: "time", note: "jikan — じ・かん. 時間がほしい = I want time." },
            { l1: "お金", en: "money", note: "okane — お・かね." },
            { l1: "傘", en: "umbrella", note: "kasa — か・さ." },
            { l1: "切符", en: "ticket", note: "kippu — きっ・ぷ." },
            { l1: "何", en: "what", note: "nani — な・に. 何がほしいですか." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "たい or ほしい?",
          intro: "Choose based on whether you want a THING or an ACTION.",
          questions: [
            {
              q: "'I want water.' (a thing)",
              options: ["水を飲みたいです。", "水がほしいです。", "水がほしいたいです。", "水を行きたいです。"],
              correct: 1,
              fb: "ほしい for a noun: 水がほしいです。",
            },
            {
              q: "'I want to drink water.' (an action)",
              options: ["水がほしいです。", "水を飲みたいです。", "水を飲みほしいです。", "水を飲みます。"],
              correct: 1,
              fb: "たい for an action: 飲みたいです。",
            },
            {
              q: "Which particle goes before ほしい?",
              options: ["を", "に", "が", "で"],
              correct: 2,
            },
          ],
        },
        {
          type: "fillBlank",
          heading: "Fill in the blank",
          items: [
            {
              template: "新しいかばん ___ ほしいです。",
              answer: "が",
              en: "I want a new bag.",
              options: ["が", "を", "に", "で"],
            },
            {
              template: "傘が ___ です。雨が降っています。(ほしい)",
              answer: "ほしい",
              en: "I want an umbrella. It's raining.",
              options: ["ほしい", "ほしいたい", "ほしくて", "ほします"],
            },
            {
              template: "今、お金は ___ です。時間がほしいです。(ほしい / negative)",
              answer: "ほしくない",
              en: "Right now I don't want money. I want time.",
              options: ["ほしくない", "ほしいない", "ほしません", "ほしないい"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "What do you want? I want a new umbrella.",
          reference: "何がほしいですか。新しい傘がほしいです。",
          hint: "何が…ほしいですか for the question; the thing takes が.",
        },
      ],
    },
    {
      slug: "want-can-dekiru",
      title: "…ことが できます — ability",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Saying what you can do",
          body: [
            "The clearest way to say you <strong>can</strong> do something: take the <strong>dictionary form</strong> + <strong>ことが できます</strong>. 食べる + ことができます = <em>食べることができます</em> = I can eat / I'm able to eat. Negative: <em>…ことができません</em>.",
            "With a noun + する activity, you can shortcut straight to <strong>noun + が できます</strong>: <em>日本語ができます</em> = I can (do) Japanese; <em>運転ができます</em> = I can drive.",
            "Quick intro to the <strong>potential form</strong> (the shorter native way): る-verbs swap る→<strong>られる</strong> (食べる→食べられる→食べられます), and う-verbs shift the last sound to -e + る (飲む→飲める→飲めます, 話す→話せます). Both できます and the potential form mean \"can,\" and the object then takes <strong>が</strong>: <em>漢字が読めます</em> = I can read kanji.",
          ],
          keyPoint:
            "dictionary form + ことができます = 'can do'. Noun + ができます for activities. Potential: る→られます, う→…えます; object takes が.",
        },
        {
          type: "conjugation",
          heading: "Two ways to say 'can'",
          verb: "食べる / 飲む / 話す",
          meaning: "to eat / to drink / to speak",
          intro: "ことができます (works for everything) and the shorter potential form.",
          tenses: [
            {
              name: "…ことができます (universal)",
              forms: [
                { person: "can (eat)", form: "食べることができます", en: "can eat" },
                { person: "cannot (eat)", form: "食べることができません", en: "cannot eat" },
                { person: "can (drive)", form: "運転ができます", en: "can drive (noun + ができます)" },
              ],
            },
            {
              name: "Potential form — Group 2: る→られます",
              forms: [
                { person: "食べる", form: "食べられます", en: "can eat (taberaremasu)" },
                { person: "見る", form: "見られます", en: "can see (miraremasu)" },
              ],
            },
            {
              name: "Potential form — Group 1: …えます",
              forms: [
                { person: "飲む", form: "飲めます", en: "can drink (nomemasu)" },
                { person: "話す", form: "話せます", en: "can speak (hanasemasu)" },
                { person: "読む", form: "読めます", en: "can read (yomemasu)" },
              ],
            },
          ],
        },
        {
          type: "vocab",
          heading: "Ability vocabulary",
          items: [
            { l1: "できる", en: "can do / be able to", note: "dekiru — で・き・る." },
            { l1: "こと", en: "(nominalizer: 'the act of')", note: "koto — turns a verb into a noun." },
            { l1: "運転", en: "driving", note: "unten — うん・てん. 運転ができます." },
            { l1: "漢字", en: "kanji (characters)", note: "kanji — かん・じ. 漢字が読めます." },
            { l1: "泳ぐ → 泳げます", en: "swim → can swim", note: "oyogu → oyogemasu." },
            { l1: "話す → 話せます", en: "speak → can speak", note: "hanasu → hanasemasu." },
            { l1: "ちょっと", en: "a little / a bit", note: "chotto — ちょっと. 'ちょっと…' softens." },
            { l1: "ぜんぜん", en: "(not) at all", note: "zenzen — ぜんぜん…ません." },
          ],
        },
        {
          type: "dialogue",
          heading: "What can you do?",
          setup: "Chatting about skills.",
          lines: [
            { speaker: "相手", l1: "日本語が話せますか。", en: "Can you speak Japanese?" },
            { speaker: "You", l1: "はい、ちょっと話せます。でも、漢字はまだ読めません。", en: "Yes, a little. But I can't read kanji yet." },
            { speaker: "相手", l1: "車の運転はできますか。", en: "Can you drive a car?" },
            { speaker: "You", l1: "いいえ、運転はできません。電車に乗ります。", en: "No, I can't drive. I take the train." },
            { speaker: "相手", l1: "泳ぐことができますか。", en: "Can you swim?" },
            { speaker: "You", l1: "はい、泳げます。海が好きです。", en: "Yes, I can swim. I like the sea." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Build the ability sentence",
          items: [
            {
              template: "日本語を話す ___ できます。",
              answer: "ことが",
              en: "I can speak Japanese. (dictionary + ことができます)",
              options: ["ことが", "ことを", "のが", "ことに"],
            },
            {
              template: "漢字が ___ 。(読む → potential)",
              answer: "読めます",
              en: "I can read kanji.",
              options: ["読めます", "読みます", "読まれます", "読みできます"],
            },
            {
              template: "私は運転が ___ 。(できる / negative)",
              answer: "できません",
              en: "I can't drive.",
              options: ["できません", "できます", "しません", "できないです か"],
            },
            {
              template: "寿司を食べる ___ できますか。",
              answer: "ことが",
              en: "Can you eat sushi?",
              options: ["ことが", "ことを", "のを", "ことに"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "I can speak a little Japanese, but I can't read kanji.",
          reference: "日本語が少し話せますが、漢字は読めません。",
          hint: "Potential 話せます / 読めません; が = 'but'; object takes が.",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "'I want to eat sushi' =",
              options: ["寿司がほしいです。", "寿司が食べたいです。", "寿司を食べます。", "寿司が食べられます。"],
              correct: 1,
            },
            {
              q: "Which form means you want a THING (noun)?",
              options: ["…たいです", "…ほしいです", "…ことができます", "…ています"],
              correct: 1,
            },
            {
              q: "'I can read kanji' (potential of 読む) =",
              options: ["漢字が読みます。", "漢字が読めます。", "漢字を読みたいです。", "漢字が読まれます。"],
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
        q: "How do you form 'want to do' from the ます-form?",
        options: ["drop ます, add たい", "add ほしい", "add ことができます", "add ています"],
        correct: 0,
      },
      {
        q: "'I want to go' =",
        options: ["行きほしいです。", "行きたいです。", "行くたいです。", "行けます。"],
        correct: 1,
      },
      {
        q: "The negative of 食べたいです is…",
        options: ["食べたくないです", "食べないたいです", "食べたいないです", "食べません"],
        correct: 0,
      },
      {
        q: "To want a THING, you use…",
        options: ["…たいです", "…ほしいです", "…できます", "…てください"],
        correct: 1,
      },
      {
        q: "'I want water' =",
        options: ["水を飲みたいです。", "水がほしいです。", "水をほしいです。", "水ができます。"],
        correct: 1,
      },
      {
        q: "Which particle goes before ほしい and before できる/potential?",
        options: ["を", "に", "が", "で"],
        correct: 2,
      },
      {
        q: "The universal 'can do' pattern is…",
        options: [
          "dictionary form + ことができます",
          "ます-form + たい",
          "noun + ほしい",
          "て-form + います",
        ],
        correct: 0,
      },
      {
        q: "Potential form of 飲む ('can drink') =",
        options: ["飲まれます", "飲めます", "飲みます", "飲みたいです"],
        correct: 1,
      },
      {
        q: "Potential form of 食べる ('can eat') =",
        options: ["食べます", "食べられます", "食べれます", "食べたいです"],
        correct: 1,
      },
      {
        q: "'I can't drive' =",
        options: ["運転ができます。", "運転がほしいです。", "運転ができません。", "運転をしたいです。"],
        correct: 2,
      },
    ],
  },
};
