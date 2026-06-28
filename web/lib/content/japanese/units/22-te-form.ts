import type { Unit } from "../../types";

export const UNIT_TE_FORM: Unit = {
  slug: "te-form",
  stage: 5,
  order: 22,
  icon: "🔗",
  title: "The て-form",
  tagline: "…て ください and the …て います continuous.",
  badge: "core",
  lessons: [
    {
      slug: "te-form-make",
      title: "How to make the て-form",
      estMinutes: 10,
      pages: [
        {
          type: "intro",
          heading: "The most useful form in Japanese",
          body: [
            "The <strong>て-form</strong> (te-form) is the connector of the language. It links actions (\"do this AND that\"), makes requests (\"please do…\"), and builds the continuous (\"I am doing…\"). It has no tense of its own — it borrows the tense from the verb at the end of the sentence.",
            "<strong>Group 2 (る-verbs)</strong> are easy: drop る, add <strong>て</strong>. 食べる→食べて, 見る→見て.",
            "<strong>Group 1 (う-verbs)</strong> change the final sound. Learn these four buckets: ending in <em>く→いて</em> (書く→書いて), <em>ぐ→いで</em> (泳ぐ→泳いで); ending in <em>む・ぶ・ぬ→んで</em> (飲む→飲んで, 遊ぶ→遊んで); ending in <em>う・つ・る→って</em> (買う→買って, 待つ→待って, 帰る→帰って); ending in <em>す→して</em> (話す→話して). One famous exception: 行く→<strong>行って</strong> (not 行いて).",
            "<strong>Group 3 (irregular):</strong> する→<strong>して</strong>, 来る→<strong>来て</strong>.",
          ],
          keyPoint:
            "る-verb: drop る + て. う-verb buckets: く→いて, ぐ→いで, む/ぶ/ぬ→んで, う/つ/る→って, す→して. 行く→行って. する→して, 来る→来て.",
        },
        {
          type: "conjugation",
          heading: "The て-form buckets",
          verb: "(various)",
          meaning: "dictionary form → て-form",
          intro: "Group the う-verbs by their last syllable. The 'person' column is the bucket rule.",
          tenses: [
            {
              name: "Group 2 — drop る + て",
              forms: [
                { person: "食べる", form: "食べて", en: "eating / and eat (tabete)" },
                { person: "見る", form: "見て", en: "seeing (mite)" },
                { person: "起きる", form: "起きて", en: "getting up (okite)" },
              ],
            },
            {
              name: "Group 1 — く→いて / ぐ→いで",
              forms: [
                { person: "書く (write)", form: "書いて", en: "kaite" },
                { person: "聞く (listen)", form: "聞いて", en: "kiite" },
                { person: "泳ぐ (swim)", form: "泳いで", en: "oyoide" },
                { person: "行く (go) — EXCEPTION", form: "行って", en: "itte (not 行いて!)" },
              ],
            },
            {
              name: "Group 1 — む/ぶ/ぬ→んで",
              forms: [
                { person: "飲む (drink)", form: "飲んで", en: "nonde" },
                { person: "読む (read)", form: "読んで", en: "yonde" },
                { person: "遊ぶ (play)", form: "遊んで", en: "asonde" },
              ],
            },
            {
              name: "Group 1 — う/つ/る→って ; す→して",
              forms: [
                { person: "買う (buy)", form: "買って", en: "katte" },
                { person: "待つ (wait)", form: "待って", en: "matte" },
                { person: "帰る (return)", form: "帰って", en: "kaette" },
                { person: "話す (speak)", form: "話して", en: "hanashite" },
              ],
            },
            {
              name: "Group 3 — irregular",
              forms: [
                { person: "する (do)", form: "して", en: "shite" },
                { person: "来る (come)", form: "来て", en: "kite" },
              ],
            },
          ],
        },
        {
          type: "tip",
          heading: "A song to remember the う-verb rules",
          body: "Many learners chant the buckets: <em>「うつる → って、むぬぶ → んで、く → いて、ぐ → いで、す → して」</em>. The only one you must hammer in by force is <strong>行く → 行って</strong>, because by its <em>く</em> ending you'd expect 行いて — but it's irregular here. Say it out loud ten times now: itte, itte, itte.",
        },
        {
          type: "fillBlank",
          heading: "Make the て-form",
          intro: "Apply the bucket rules.",
          items: [
            {
              template: "飲む → ___",
              answer: "飲んで",
              en: "drink → te-form (む→んで)",
              options: ["飲んで", "飲いて", "飲って", "飲みて"],
            },
            {
              template: "書く → ___",
              answer: "書いて",
              en: "write → te-form (く→いて)",
              options: ["書って", "書いて", "書んで", "書きて"],
            },
            {
              template: "買う → ___",
              answer: "買って",
              en: "buy → te-form (う→って)",
              options: ["買んで", "買いて", "買って", "買うて"],
            },
            {
              template: "行く → ___",
              answer: "行って",
              en: "go → te-form (EXCEPTION)",
              options: ["行いて", "行って", "行んで", "行きて"],
            },
            {
              template: "食べる → ___",
              answer: "食べて",
              en: "eat → te-form (drop る)",
              options: ["食べて", "食べって", "食べいて", "食べんで"],
            },
            {
              template: "する → ___",
              answer: "して",
              en: "do → te-form (irregular)",
              options: ["すて", "して", "しって", "さて"],
            },
          ],
        },
      ],
    },
    {
      slug: "te-form-kudasai",
      title: "…て ください — please do…",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Polite requests",
          body: [
            "Add <strong>ください</strong> after the て-form to ask someone to please do something: 待って + ください = <em>待ってください</em> = please wait. 見てください = please look. This is the everyday polite request you'll hear from staff and use yourself all over Tokyo.",
            "It works with を-objects just like normal: <em>名前を書いてください</em> = please write your name. <em>もう一度言ってください</em> = please say it once more.",
            "To soften it further you can add <em>すみません</em> (excuse me) in front: 「すみません、写真を撮ってください。」 = Excuse me, please take a photo.",
          ],
          keyPoint: "て-form + ください = 'please do…'. すみません、…てください is the polite request you'll use daily.",
        },
        {
          type: "vocab",
          heading: "Request verbs",
          items: [
            { l1: "待つ → 待って", en: "wait → waiting", note: "matsu → matte. つ→って." },
            { l1: "書く → 書いて", en: "write → writing", note: "kaku → kaite. く→いて." },
            { l1: "言う → 言って", en: "say → saying", note: "iu → itte. う→って." },
            { l1: "見せる → 見せて", en: "show → showing", note: "miseru → misete. Group 2." },
            { l1: "撮る → 撮って", en: "take (a photo) → taking", note: "toru → totte. る→って (Group 1)." },
            { l1: "教える → 教えて", en: "teach/tell → telling", note: "oshieru → oshiete. Group 2." },
            { l1: "もう一度", en: "once more", note: "mō ichido — も・う・い・ち・ど." },
            { l1: "ゆっくり", en: "slowly", note: "yukkuri — ゆっ・く・り." },
          ],
        },
        {
          type: "dialogue",
          heading: "At the station window",
          setup: "You need help buying a ticket.",
          lines: [
            { speaker: "You", l1: "すみません、ちょっと待ってください。", en: "Excuse me, please wait a moment." },
            { speaker: "駅員", l1: "はい、どうぞ。", en: "Sure, go ahead." },
            { speaker: "You", l1: "もう一度、ゆっくり言ってください。", en: "Please say it once more, slowly." },
            { speaker: "駅員", l1: "新宿までは、二百円です。", en: "To Shinjuku, it's 200 yen." },
            { speaker: "You", l1: "ここに名前を書いてください、と書いてあります。", en: "It says 'please write your name here.'" },
            { speaker: "駅員", l1: "はい、ここに書いてください。", en: "Yes, please write it here." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Make the request",
          intro: "Build …てください.",
          items: [
            {
              template: "ここで ___ ください。(待つ)",
              answer: "待って",
              en: "Please wait here.",
              options: ["待って", "待いて", "待んで", "待ちて"],
            },
            {
              template: "名前を ___ ください。(書く)",
              answer: "書いて",
              en: "Please write your name.",
              options: ["書って", "書いて", "書んで", "書きて"],
            },
            {
              template: "写真を ___ ください。(撮る)",
              answer: "撮って",
              en: "Please take a photo.",
              options: ["撮いて", "撮んで", "撮って", "撮りて"],
            },
            {
              template: "もう一度 ___ ください。(言う)",
              answer: "言って",
              en: "Please say it once more.",
              options: ["言いて", "言んで", "言って", "言うて"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Excuse me, please speak slowly.",
          reference: "すみません、ゆっくり話してください。",
          hint: "話す → 話して (す→して), then add ください.",
        },
      ],
    },
    {
      slug: "te-form-imasu",
      title: "…て います — the continuous",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Saying what's happening now",
          body: [
            "Add <strong>います</strong> after the て-form to express an ongoing action — the \"-ing\" of Japanese: 食べて + います = <em>食べています</em> = I am eating. 雨が降っています = it is raining.",
            "Make it polite-negative the usual way (います→いません): <em>今、働いていません</em> = I'm not working right now. Past: いました — <em>テレビを見ていました</em> = I was watching TV.",
            "With certain verbs, ています describes a resulting <strong>state</strong> rather than an action in progress. 知っています = I know (I'm in a knowing state); 結婚しています = I'm married; 東京に住んでいます = I live in Tokyo. These are extremely common — treat 住んでいます / 知っています as set phrases.",
          ],
          keyPoint:
            "て-form + います = '-ing' / ongoing. Negative: …ていません. Past: …ていました. With 住む・知る・結婚する it means an ongoing STATE.",
        },
        {
          type: "conjugation",
          heading: "The …ています set",
          verb: "食べる / 住む",
          meaning: "to eat / to live",
          intro: "Same continuous frame, four polite endings.",
          tenses: [
            {
              name: "食べる — to eat",
              forms: [
                { person: "continuous", form: "食べています", en: "am eating" },
                { person: "continuous negative", form: "食べていません", en: "am not eating" },
                { person: "continuous past", form: "食べていました", en: "was eating" },
              ],
            },
            {
              name: "住む — to live (state)",
              forms: [
                { person: "continuous (state)", form: "住んでいます", en: "live / am living" },
                { person: "negative", form: "住んでいません", en: "don't live (there)" },
                { person: "知る — to know", form: "知っています", en: "know (shitte imasu)" },
              ],
            },
          ],
        },
        {
          type: "vocab",
          heading: "Continuous-friendly verbs",
          items: [
            { l1: "住む → 住んで", en: "to live (somewhere)", note: "sumu → sunde. 東京に住んでいます." },
            { l1: "知る → 知って", en: "to know", note: "shiru → shitte. 知っています = I know." },
            { l1: "働く → 働いて", en: "to work", note: "hataraku → hataraite." },
            { l1: "降る → 降って", en: "(rain) to fall", note: "furu → futte. 雨が降っています." },
            { l1: "持つ → 持って", en: "to hold / have", note: "motsu → motte. 持っています = I have it." },
            { l1: "結婚する → 結婚して", en: "to get married", note: "kekkon suru. 結婚しています = married." },
            { l1: "雨", en: "rain", note: "ame — あ・め." },
            { l1: "今", en: "now", note: "ima — い・ま." },
          ],
        },
        {
          type: "dialogue",
          heading: "Meeting someone new in Tokyo",
          setup: "Small talk at a language exchange.",
          lines: [
            { speaker: "相手", l1: "今、どこに住んでいますか。", en: "Where do you live now?" },
            { speaker: "You", l1: "中野に住んでいます。", en: "I live in Nakano." },
            { speaker: "相手", l1: "お仕事は？", en: "And your work?" },
            { speaker: "You", l1: "IT会社で働いています。今は日本語を勉強しています。", en: "I work at an IT company. Right now I'm studying Japanese." },
            { speaker: "相手", l1: "あ、外を見てください。雨が降っています。", en: "Oh, look outside. It's raining." },
            { speaker: "You", l1: "本当だ。傘を持っていますか。", en: "It really is. Do you have an umbrella?" },
          ],
        },
        {
          type: "fillBlank",
          heading: "Continuous & state",
          items: [
            {
              template: "今、ごはんを ___ 。(食べる + ています)",
              answer: "食べています",
              en: "I'm eating a meal right now.",
              options: ["食べています", "食べています か", "食べました", "食べます"],
            },
            {
              template: "東京に ___ 。(住む + ています)",
              answer: "住んでいます",
              en: "I live in Tokyo.",
              options: ["住んでいます", "住みています", "住っています", "住みます"],
            },
            {
              template: "今、雨が ___ 。(降る + ています)",
              answer: "降っています",
              en: "It's raining now.",
              options: ["降っています", "降いています", "降んでいます", "降ります"],
            },
            {
              template: "その人を ___ 。(知る + ています)",
              answer: "知っています",
              en: "I know that person.",
              options: ["知っています", "知いています", "知んでいます", "知ります"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "I live in Tokyo and I work at a coffee shop.",
          reference: "東京に住んでいます、そして喫茶店で働いています。",
          hint: "Both are ています states; で marks where you work; そして = 'and'.",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "'I am eating' =",
              options: ["食べます", "食べています", "食べました", "食べてください"],
              correct: 1,
            },
            {
              q: "'I live in Tokyo' uses which form?",
              options: ["住みます", "住んでいます", "住みました", "住んでください"],
              correct: 1,
            },
            {
              q: "How do you say 'please wait'?",
              options: ["待ちます", "待っています", "待ってください", "待ちました"],
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
        q: "The て-form of 食べる (Group 2) is…",
        options: ["食べって", "食べて", "食べいて", "食べんで"],
        correct: 1,
      },
      {
        q: "飲む → ?  (む/ぶ/ぬ bucket)",
        options: ["飲いて", "飲って", "飲んで", "飲みて"],
        correct: 2,
      },
      {
        q: "書く → ?  (く bucket)",
        options: ["書いて", "書って", "書んで", "書きて"],
        correct: 0,
      },
      {
        q: "買う → ?  (う/つ/る bucket)",
        options: ["買んで", "買いて", "買って", "買うて"],
        correct: 2,
      },
      {
        q: "Which te-form is the famous exception?",
        options: ["話す → 話して", "行く → 行って", "見る → 見て", "する → して"],
        correct: 1,
      },
      {
        q: "する and 来る become…",
        options: ["して / 来て", "すて / きて", "しって / こて", "して / くて"],
        correct: 0,
      },
      {
        q: "'Please write your name' =",
        options: [
          "名前を書きます。",
          "名前を書いてください。",
          "名前を書いています。",
          "名前を書きました。",
        ],
        correct: 1,
      },
      {
        q: "…て + います expresses…",
        options: ["a polite request", "the simple past", "an ongoing action or state", "the future"],
        correct: 2,
      },
      {
        q: "'It is raining' =",
        options: ["雨が降ります。", "雨が降っています。", "雨が降ってください。", "雨が降りました。"],
        correct: 1,
      },
      {
        q: "'I am not working now' =",
        options: [
          "今、働きません。",
          "今、働いていません。",
          "今、働いてください。",
          "今、働きました。",
        ],
        correct: 1,
      },
    ],
  },
};
