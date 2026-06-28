import type { Unit } from "../../types";

export const UNIT_PLAIN_FORM: Unit = {
  slug: "plain-form",
  stage: 6,
  order: 28,
  icon: "💬",
  title: "Plain (casual) form",
  tagline: "The dictionary/plain form vs the polite ます-form.",
  badge: "core",
  lessons: [
    {
      slug: "plain-form-present",
      title: "Plain present — dictionary form & …ない",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "The other half of the verb system",
          body: [
            "Every Japanese verb has two registers: the <strong>polite ます-form</strong> you've been learning (<em>食べます, 行きます</em>) and the <strong>plain form</strong> used with friends, family, and in writing.",
            "The plain present affirmative is just the <strong>dictionary form</strong> — the form you look up: <em>食べる (たべる)</em> \"eat,\" <em>行く (いく)</em> \"go,\" <em>飲む (のむ)</em> \"drink.\" <em>食べます</em> → <em>食べる</em>.",
            "Verbs split into groups. <strong>る-verbs</strong> (ichidan): drop る, add ない → <em>食べる → 食べない</em> (don't eat). <strong>う-verbs</strong> (godan): change the final -u sound to -a, add ない → <em>飲む → 飲まない</em>, <em>行く → 行かない</em>.",
            "Two irregulars: <em>する → しない</em> (do/not do), <em>来る (くる) → 来ない (こない)</em> (come/not come).",
          ],
          keyPoint:
            "Plain present = dictionary form (食べる, 行く). Negative …ない: る-verbs drop る (食べない); う-verbs -u→-a (飲まない). する→しない, 来る→来ない.",
        },
        {
          type: "conjugation",
          heading: "Polite vs plain — present",
          verb: "食べる / 飲む / 行く",
          meaning: "eat / drink / go",
          intro: "Same meaning, two registers. The plain forms are what you say to friends.",
          tenses: [
            {
              name: "る-verb: 食べる (to eat)",
              forms: [
                { person: "polite +", form: "食べます", en: "eat (polite)" },
                { person: "plain +", form: "食べる", en: "eat (plain)" },
                { person: "polite −", form: "食べません", en: "don't eat (polite)" },
                { person: "plain −", form: "食べない", en: "don't eat (plain)" },
              ],
            },
            {
              name: "う-verb: 飲む (to drink)",
              forms: [
                { person: "polite +", form: "飲みます", en: "drink (polite)" },
                { person: "plain +", form: "飲む", en: "drink (plain)" },
                { person: "plain −", form: "飲まない", en: "don't drink (む→ま+ない)" },
              ],
            },
            {
              name: "Irregulars",
              forms: [
                { person: "する", form: "しない", en: "do → don't do" },
                { person: "来る (くる)", form: "来ない (こない)", en: "come → don't come" },
              ],
            },
          ],
        },
        {
          type: "vocab",
          heading: "Common plain-form verbs",
          items: [
            { l1: "食べる (たべる)", en: "to eat", note: "taberu — る-verb." },
            { l1: "飲む (のむ)", en: "to drink", note: "nomu — う-verb → 飲まない." },
            { l1: "行く (いく)", en: "to go", note: "iku → 行かない." },
            { l1: "見る (みる)", en: "to watch / see", note: "miru → 見ない." },
            { l1: "する", en: "to do", note: "suru → しない (irregular)." },
            { l1: "来る (くる)", en: "to come", note: "kuru → 来ない こない (irregular)." },
            { l1: "わかる", en: "to understand", note: "wakaru → わからない." },
            { l1: "ある / いる", en: "to exist (things / people)", note: "aru → ない; iru → いない." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Plainify it",
          items: [
            {
              template: "毎日 コーヒーを ___ 。(drink, plain +)",
              answer: "飲む",
              en: "I drink coffee every day.",
              options: ["飲む", "飲みます", "飲まない", "飲んで"],
            },
            {
              template: "肉は ___ 。(don't eat, plain)",
              answer: "食べない",
              en: "I don't eat meat.",
              options: ["食べない", "食べる", "食べません", "食べて"],
            },
            {
              template: "明日 学校に ___ 。(don't go, plain)",
              answer: "行かない",
              en: "I'm not going to school tomorrow.",
              options: ["行かない", "行く", "行きます", "行って"],
            },
            {
              template: "意味が ___ 。(don't understand, plain)",
              answer: "わからない",
              en: "I don't understand the meaning.",
              options: ["わからない", "わかる", "わかります", "わかって"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "I drink coffee, but I don't drink alcohol. (plain form)",
          reference: "コーヒーは 飲む。でも、お酒は 飲まない。",
          hint: "Plain + = dictionary form 飲む; plain − = 飲まない.",
        },
      ],
    },
    {
      slug: "plain-form-past",
      title: "Plain past — …た and …なかった",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Plain past: the た-form",
          body: [
            "The plain past affirmative is the <strong>た-form</strong>. Good news: it's built exactly like the て-form you know — just swap final て→た and で→だ.",
            "<em>食べて → 食べた</em> (ate), <em>飲んで → 飲んだ</em> (drank), <em>行って → 行った</em> (went), <em>した</em> (did), <em>来た きた</em> (came).",
            "The plain past negative is <strong>…なかった</strong> — take the plain negative …ない and change ない → なかった: <em>食べない → 食べなかった</em> (didn't eat), <em>飲まない → 飲まなかった</em> (didn't drink).",
            "Compare registers: polite past <em>食べました / 食べませんでした</em> vs plain past <em>食べた / 食べなかった</em>. Same meaning, casual register.",
          ],
          keyPoint:
            "Plain past + = た-form (食べた, 飲んだ, 行った). Plain past − = …なかった (食べなかった, 飲まなかった). Built from て-form / ない-form.",
        },
        {
          type: "conjugation",
          heading: "The four-form grid",
          verb: "食べる / 行く",
          meaning: "eat / go — full plain paradigm",
          intro: "Affirmative/negative × present/past, all in plain form.",
          tenses: [
            {
              name: "食べる (to eat)",
              forms: [
                { person: "present +", form: "食べる", en: "eat" },
                { person: "present −", form: "食べない", en: "don't eat" },
                { person: "past +", form: "食べた", en: "ate" },
                { person: "past −", form: "食べなかった", en: "didn't eat" },
              ],
            },
            {
              name: "行く (to go)",
              forms: [
                { person: "present +", form: "行く", en: "go" },
                { person: "present −", form: "行かない", en: "don't go" },
                { person: "past +", form: "行った", en: "went" },
                { person: "past −", form: "行かなかった", en: "didn't go" },
              ],
            },
          ],
        },
        {
          type: "vocab",
          heading: "た-form examples (irregular sounds)",
          items: [
            { l1: "食べた (たべた)", en: "ate", note: "tabeta — る-verb, easy." },
            { l1: "飲んだ (のんだ)", en: "drank", note: "nonda — む→んだ." },
            { l1: "行った (いった)", en: "went", note: "itta — 行く is irregular here (small っ)." },
            { l1: "した", en: "did", note: "shita — from する." },
            { l1: "来た (きた)", en: "came", note: "kita — from 来る." },
            { l1: "見た (みた)", en: "watched / saw", note: "mita." },
            { l1: "わかった", en: "understood / got it", note: "wakatta — also 'OK, got it!'" },
            { l1: "なかった", en: "wasn't / didn't exist", note: "nakatta — plain past of ない/ある." },
          ],
        },
        {
          type: "dialogue",
          heading: "Two friends after the weekend",
          setup: "Casual chat — note the plain forms, no です／ます.",
          lines: [
            { speaker: "Yuki", l1: "週末、どこか 行った?", en: "Did you go anywhere this weekend?" },
            { speaker: "You", l1: "うん、渋谷に 行った。映画も 見た。", en: "Yeah, I went to Shibuya. Watched a movie too." },
            { speaker: "Yuki", l1: "いいね。何 食べた?", en: "Nice. What did you eat?" },
            { speaker: "You", l1: "ラーメン。でも、お酒は 飲まなかった。", en: "Ramen. But I didn't drink any alcohol." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Past, plain",
          items: [
            {
              template: "昨日 映画を ___ 。(watched)",
              answer: "見た",
              en: "I watched a movie yesterday.",
              options: ["見た", "見る", "見ない", "見なかった"],
            },
            {
              template: "宿題を ___ 。(didn't do)",
              answer: "しなかった",
              en: "I didn't do the homework.",
              options: ["しなかった", "した", "する", "しない"],
            },
            {
              template: "ともだちが パーティーに ___ 。(came)",
              answer: "来た",
              en: "My friend came to the party.",
              options: ["来た", "来る", "来ない", "来なかった"],
            },
            {
              template: "お酒は ___ 。(didn't drink)",
              answer: "飲まなかった",
              en: "I didn't drink alcohol.",
              options: ["飲まなかった", "飲んだ", "飲む", "飲まない"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "I went to Shibuya yesterday, but I didn't eat anything. (plain form)",
          reference: "昨日 渋谷に 行った。でも、何も 食べなかった。",
          hint: "行く → 行った (past +); 食べない → 食べなかった (past −).",
        },
      ],
    },
    {
      slug: "plain-form-when-to-use",
      title: "When to use plain vs ます + casual questions",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Reading the room: plain or polite?",
          body: [
            "Choosing register is about <em>relationship and setting</em>, not grammar. Use <strong>ますform (polite)</strong> with strangers, shop/station staff, teachers, bosses, and anyone notably senior — it's never wrong.",
            "Use <strong>plain form (casual)</strong> with close friends, family, classmates your age, and children. Using plain form with a stranger can feel blunt; using ます with a close friend can feel cold or distancing.",
            "Casual <strong>questions drop か</strong> and just rise in pitch: <em>行く?</em> (\"going?\"), <em>食べた?</em> (\"did you eat?\"). The polite <em>か</em> question particle isn't used in casual speech.",
            "A soft casual ender is <strong>…の?</strong> for questions and <strong>…んだ</strong> for explanations: <em>どこ 行くの?</em> (\"where are you going?\"), <em>もう 食べたんだ</em> (\"oh, you already ate\").",
          ],
          keyPoint:
            "ます = strangers/seniors/staff (always safe). Plain = friends/family/peers. Casual questions drop か and just rise (行く? 食べた?).",
        },
        {
          type: "vocab",
          heading: "Casual question & ending words",
          items: [
            { l1: "…の?", en: "(soft casual question ender)", note: "no — どこ 行くの? where are you going?" },
            { l1: "…んだ / …の", en: "(casual explanation ender)", note: "n da — gives a reason/context." },
            { l1: "うん / ううん", en: "yeah / nope (casual)", note: "un / uun — casual はい / いいえ." },
            { l1: "だ", en: "casual 'is' (= です)", note: "da — 学生だ = (I'm) a student." },
            { l1: "だった", en: "casual 'was' (= でした)", note: "datta — plain past of だ." },
            { l1: "じゃない", en: "casual 'isn't' (= ではない)", note: "ja nai — 学生じゃない = not a student." },
            { l1: "でしょ?", en: "right? / isn't it?", note: "desho — casual tag." },
          ],
        },
        {
          type: "dialogue",
          heading: "Same question, two registers",
          setup: "Compare asking a stranger vs a friend whether they've eaten.",
          lines: [
            { speaker: "To staff (polite)", l1: "もう 食べましたか。", en: "Have you eaten yet? (polite)" },
            { speaker: "Reply", l1: "はい、食べました。", en: "Yes, I have." },
            { speaker: "To a friend (plain)", l1: "もう 食べた?", en: "Did you eat yet? (casual)" },
            { speaker: "Reply", l1: "ううん、まだ。一緒に 行く?", en: "Nope, not yet. Wanna go together?" },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Pick the register",
          questions: [
            {
              q: "You're talking to a station attendant. Which is appropriate?",
              options: ["どこ 行くの?", "ここ、どこ ですか。", "どこ?", "行く?"],
              correct: 1,
            },
            {
              q: "Casual yes/no question 'Did you eat?' =",
              options: ["食べましたか", "食べた?", "食べますか", "食べる?"],
              correct: 1,
            },
            {
              q: "Casual 'I'm a student' =",
              options: ["学生です", "学生だ", "学生でした", "学生じゃありません"],
              correct: 1,
            },
            {
              q: "Using plain form with a brand-new acquaintance can sound…",
              options: ["extra polite", "blunt / too familiar", "formal", "incorrect grammar"],
              correct: 1,
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Did you eat yet? Wanna go together? (casual, to a friend)",
          reference: "もう 食べた? 一緒に 行く?",
          hint: "Casual questions just drop か and rise: 食べた? / 行く?",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "With shop staff and strangers you should use…",
              options: ["plain form", "ます-form (polite)", "no verbs", "casual の?"],
              correct: 1,
            },
            {
              q: "Casual questions are formed by…",
              options: ["adding か", "dropping か and rising in pitch", "adding です", "using でしょう"],
              correct: 1,
            },
            {
              q: "Casual equivalent of です ('is') =",
              options: ["だ", "ます", "ない", "か"],
              correct: 0,
            },
            {
              q: "'ううん' means…",
              options: ["yes", "no (casual)", "maybe", "please"],
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
        q: "The plain present affirmative of a verb is its…",
        options: ["て-form", "dictionary form", "ます-stem", "た-form"],
        correct: 1,
      },
      {
        q: "Plain negative of 食べる ('eat') =",
        options: ["食べません", "食べない", "食べなかった", "食べた"],
        correct: 1,
      },
      {
        q: "Plain negative of 飲む ('drink') =",
        options: ["飲みない", "飲まない", "飲んない", "飲まなかった"],
        correct: 1,
      },
      {
        q: "Plain past affirmative ('ate') =",
        options: ["食べる", "食べた", "食べました", "食べなかった"],
        correct: 1,
      },
      {
        q: "Plain past negative ('didn't go') of 行く =",
        options: ["行かない", "行った", "行かなかった", "行きませんでした"],
        correct: 2,
      },
      {
        q: "The two irregular verbs する and 来る become, in plain negative…",
        options: ["しない / 来ない (こない)", "すない / くない", "しなかった only", "さない / きない"],
        correct: 0,
      },
      {
        q: "You should use the ます-form with…",
        options: ["close friends", "your little sister", "shop staff and strangers", "no one"],
        correct: 2,
      },
      {
        q: "A casual yes/no question is made by…",
        options: ["adding か", "dropping か and rising in pitch", "adding です", "adding でしょう"],
        correct: 1,
      },
      {
        q: "Casual 'is' (the plain equivalent of です) =",
        options: ["だ", "です", "ます", "ない"],
        correct: 0,
      },
      {
        q: "Translate (casual): 'I went to Shibuya, but I didn't drink.'",
        options: [
          "渋谷に 行きました。でも、飲みませんでした。",
          "渋谷に 行った。でも、飲まなかった。",
          "渋谷に 行く。でも、飲まない。",
          "渋谷に 行った。でも、飲んだ。",
        ],
        correct: 1,
      },
    ],
  },
};
