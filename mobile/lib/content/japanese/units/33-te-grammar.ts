import type { Unit } from "../../types";

export const UNIT_TE_GRAMMAR: Unit = {
  slug: "te-grammar",
  stage: 8,
  order: 33,
  icon: "🎩",
  title: "て-form grammar",
  tagline: "…ても いい, …なければ, …た ことが ある.",
  badge: "advanced",
  lessons: [
    {
      slug: "te-grammar-permission-prohibition",
      title: "…ても いいです & …ては いけません",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Permission and prohibition from the て-form",
          body: [
            "Once you have a verb's <strong>て-form</strong>, two of the most useful real-world patterns open up: asking and granting permission, and stating that something is forbidden.",
            "<strong>…ても いいです</strong> (…te mo ii desu) = \"it's OK to…\" / \"you may….\" To ask permission, add か: <em>たべても いいですか</em> = \"May I eat?\"",
            "<strong>…ては いけません</strong> (…te wa ikemasen) = \"you must not…\" / \"…is not allowed.\" The は here is read <em>wa</em>. In casual speech …ては often shrinks to <em>…ちゃ</em> (たべちゃ だめ = \"don't eat\").",
          ],
          keyPoint:
            "…ても いいです = you may… · …ては いけません = you must not…. は is read wa. Add か to ask permission.",
        },
        {
          type: "vocab",
          heading: "Verbs in the て-form + permission words",
          items: [
            { l1: "たべて", en: "eat (て-form)", note: "tabete — from たべる" },
            { l1: "のんで", en: "drink (て-form)", note: "nonde — from のむ" },
            { l1: "すわって", en: "sit (て-form)", note: "suwatte — from すわる" },
            { l1: "つかって", en: "use (て-form)", note: "tsukatte — from つかう" },
            { l1: "とって", en: "take / photograph (て-form)", note: "totte — from とる" },
            { l1: "はいって", en: "enter (て-form)", note: "haitte — from はいる" },
            { l1: "…ても いいです", en: "you may… / it's OK to…", note: "…te mo ii desu" },
            { l1: "…ては いけません", en: "you must not… / not allowed", note: "…te wa ikemasen — は read 'wa'" },
            { l1: "しゃしん", en: "photo", note: "shashin (しゃしん)" },
            { l1: "だめ", en: "no good / not allowed (casual)", note: "dame" },
          ],
        },
        {
          type: "dialogue",
          heading: "At a temple in Asakusa",
          setup: "You want to take a photo inside Sensō-ji.",
          lines: [
            { speaker: "You", l1: "すみません、ここで しゃしんを とっても いいですか。", en: "Excuse me, may I take a photo here?" },
            { speaker: "Staff", l1: "はい、とっても いいですよ。", en: "Yes, you may take photos." },
            { speaker: "Staff", l1: "でも、なかでは フラッシュを つかっては いけません。", en: "But inside you must not use flash." },
            { speaker: "You", l1: "わかりました。ありがとうございます。", en: "Understood. Thank you." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Permission or prohibition?",
          intro: "Choose the right ending.",
          items: [
            {
              template: "ここに すわっても ___ ですか。",
              answer: "いい",
              en: "May I sit here?",
              options: ["いい", "だめ", "ない", "ある"],
            },
            {
              template: "ここで たばこを すっては ___ 。",
              answer: "いけません",
              en: "You must not smoke here.",
              options: ["いいです", "いけません", "ありません", "ください"],
            },
            {
              template: "この ペンを つかっても ___ ですよ。",
              answer: "いい",
              en: "You may use this pen.",
              options: ["いい", "だめ", "か", "ない"],
            },
            {
              template: "なかに はいって ___ いいですか。",
              answer: "も",
              en: "May I go inside?",
              options: ["も", "は", "の", "が"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "May I take a photo here?",
          reference: "ここで しゃしんを とっても いいですか。",
          hint: "totte mo ii desu ka — て-form とって + も いいですか.",
        },
      ],
    },
    {
      slug: "te-grammar-obligation",
      title: "…なければ なりません & …なくても いいです",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Obligation and the lack of it",
          body: [
            "To say \"must,\" Japanese uses a double-negative built from the verb's <strong>ない-form</strong>: <strong>…なければ なりません</strong> (…nakereba narimasen) — literally \"if you don't…, it won't do,\" i.e. \"you must….\"",
            "Casually this becomes <em>…なきゃ</em> (いかなきゃ = \"gotta go\"). A common formal variant is <strong>…なくては いけません</strong>.",
            "The opposite — \"you don't have to\" — is <strong>…なくても いいです</strong> (…nakute mo ii desu): take the ない-form, drop ない, add <em>なくても いいです</em>.",
          ],
          keyPoint:
            "…なければ なりません = you must… · …なくても いいです = you don't have to…. Both build from the ない-form.",
        },
        {
          type: "conjugation",
          heading: "From ない-form to obligation",
          verb: "いく / たべる",
          meaning: "to go / to eat",
          intro: "Take the plain negative (ない-form), drop ない, then attach the ending.",
          tenses: [
            {
              name: "…なければ なりません (must)",
              forms: [
                { person: "いく → いか(ない)", form: "いかなければ なりません", en: "must go" },
                { person: "たべる → たべ(ない)", form: "たべなければ なりません", en: "must eat" },
                { person: "する → し(ない)", form: "しなければ なりません", en: "must do" },
                { person: "くる → こ(ない)", form: "こなければ なりません", en: "must come" },
              ],
            },
            {
              name: "…なくても いいです (don't have to)",
              forms: [
                { person: "いく → いか(ない)", form: "いかなくても いいです", en: "don't have to go" },
                { person: "たべる → たべ(ない)", form: "たべなくても いいです", en: "don't have to eat" },
                { person: "はらう → はらわ(ない)", form: "はらわなくても いいです", en: "don't have to pay" },
                { person: "まつ → また(ない)", form: "またなくても いいです", en: "don't have to wait" },
              ],
            },
          ],
        },
        {
          type: "vocab",
          heading: "Words for duties and errands",
          items: [
            { l1: "…なければ なりません", en: "must… (formal)", note: "…nakereba narimasen" },
            { l1: "…なくても いいです", en: "don't have to…", note: "…nakute mo ii desu" },
            { l1: "…なきゃ", en: "gotta… (casual)", note: "…nakya — short for なければ" },
            { l1: "はらう", en: "to pay", note: "harau (はらう)" },
            { l1: "よやく", en: "reservation", note: "yoyaku (よやく) — よやくする = to reserve" },
            { l1: "しゅくだい", en: "homework", note: "shukudai (しゅくだい)" },
            { l1: "きっぷ", en: "ticket", note: "kippu (きっぷ)" },
            { l1: "いそぐ", en: "to hurry", note: "isogu (いそぐ)" },
          ],
        },
        {
          type: "dialogue",
          heading: "Catching the last train in Shinjuku",
          setup: "It's late and you're checking what you have to do.",
          lines: [
            { speaker: "You", l1: "もう おそいですね。いそがなければ なりません。", en: "It's already late. We have to hurry." },
            { speaker: "Aoi", l1: "きっぷを かわなければ なりませんか。", en: "Do we have to buy a ticket?" },
            { speaker: "You", l1: "いいえ、ICカードが あるので、かわなくても いいです。", en: "No, since we have IC cards, we don't have to buy one." },
            { speaker: "Aoi", l1: "よかった。じゃ、はしらなくても いいですね。", en: "Great. Then we don't have to run." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Must, or don't have to?",
          items: [
            {
              template: "あした しゅくだいを ださ___ なりません。",
              answer: "なければ",
              en: "I must hand in the homework tomorrow.",
              options: ["なければ", "なくても", "ても", "ては"],
            },
            {
              template: "よやくを し___ いいですか。",
              answer: "なくても",
              en: "Is it OK if I don't make a reservation? / Do I not have to reserve?",
              options: ["なくても", "なければ", "ても", "ては"],
            },
            {
              template: "ここで また___ なりません。",
              answer: "なければ",
              en: "I must wait here.",
              options: ["なければ", "なくても", "なくて", "ないで"],
            },
            {
              template: "おかねを はらわ___ いいです。",
              answer: "なくても",
              en: "You don't have to pay.",
              options: ["なくても", "なければ", "ては", "ても"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "I must go to the station now.",
          reference: "いま えきに いかなければ なりません。",
          hint: "ikanakereba narimasen — いく → いか + なければ なりません.",
        },
      ],
    },
    {
      slug: "te-grammar-experience-advice",
      title: "…た ことが あります & …た ほうが いいです",
      estMinutes: 10,
      pages: [
        {
          type: "intro",
          heading: "Experiences and advice from the past plain form",
          body: [
            "Take a verb's <strong>plain past (た-form)</strong> and you unlock two everyday patterns.",
            "<strong>…た ことが あります</strong> (…ta koto ga arimasu) = \"have (ever) done…\" — talking about life experience. <em>すしを たべた ことが あります</em> = \"I have eaten sushi.\" The negative is <em>…た ことが ありません</em> (\"have never…\").",
            "<strong>…た ほうが いいです</strong> (…ta hō ga ii desu) = \"you'd better… / it's better to….\" Strong, friendly advice. The negative advice form uses the <em>ない-form</em>: <em>…ない ほうが いいです</em> (\"you'd better not…\").",
          ],
          keyPoint:
            "…た ことが あります = have done (experience) · …た ほうが いいです = you'd better… (…ない ほうが いいです = you'd better not).",
        },
        {
          type: "vocab",
          heading: "Experience & advice toolkit",
          items: [
            { l1: "…た ことが あります", en: "have done… (experience)", note: "…ta koto ga arimasu" },
            { l1: "…た ことが ありません", en: "have never done…", note: "…ta koto ga arimasen" },
            { l1: "…た ほうが いいです", en: "you'd better… (it's better to)", note: "…ta hō ga ii desu" },
            { l1: "…ない ほうが いいです", en: "you'd better not…", note: "…nai hō ga ii desu" },
            { l1: "のぼった", en: "climbed (past)", note: "nobotta — from のぼる" },
            { l1: "いった", en: "went (past)", note: "itta — from いく (irregular た-form)" },
            { l1: "やすんだ", en: "rested (past)", note: "yasunda — from やすむ" },
            { l1: "ふじさん", en: "Mt. Fuji", note: "Fuji-san (ふじさん)" },
            { l1: "むり(を)する", en: "to overdo it / push too hard", note: "muri (o) suru — むり = impossible/strain" },
          ],
        },
        {
          type: "dialogue",
          heading: "Talking about Mt. Fuji",
          setup: "Aoi asks about your travels in Japan.",
          lines: [
            { speaker: "Aoi", l1: "ふじさんに のぼった ことが ありますか。", en: "Have you ever climbed Mt. Fuji?" },
            { speaker: "You", l1: "いいえ、まだ のぼった ことが ありません。", en: "No, I've never climbed it yet." },
            { speaker: "Aoi", l1: "なつに のぼった ほうが いいですよ。", en: "You'd better climb it in summer." },
            { speaker: "You", l1: "そうですか。ひとりで いかない ほうが いいですか。", en: "Is that so. Is it better not to go alone?" },
            { speaker: "Aoi", l1: "はい。それに、むりを しない ほうが いいです。", en: "Yes. And you'd better not overdo it." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Experience or advice?",
          questions: [
            {
              q: "Which means 'I have eaten natto'?",
              options: [
                "なっとうを たべます。",
                "なっとうを たべた ことが あります。",
                "なっとうを たべた ほうが いいです。",
                "なっとうを たべては いけません。",
              ],
              correct: 1,
              fb: "…た ことが あります expresses life experience.",
            },
            {
              q: "How do you say 'You'd better rest'?",
              options: [
                "やすんだ ことが あります。",
                "やすまなければ なりません。",
                "やすんだ ほうが いいです。",
                "やすんでは いけません。",
              ],
              correct: 2,
              fb: "…た ほうが いいです gives strong friendly advice.",
            },
            {
              q: "Which means 'You'd better not go'?",
              options: [
                "いった ほうが いいです。",
                "いかない ほうが いいです。",
                "いった ことが ありません。",
                "いかなければ なりません。",
              ],
              correct: 1,
              fb: "Negative advice uses the ない-form: …ない ほうが いいです.",
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Have you ever been to Kyoto?",
          reference: "きょうとに いった ことが ありますか。",
          hint: "itta koto ga arimasu ka — past plain いった + ことが ありますか.",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "…た ことが あります expresses…",
              options: ["obligation", "permission", "past experience", "prohibition"],
              correct: 2,
            },
            {
              q: "Translate: 'You'd better not drink that.'",
              options: [
                "それを のんだ ほうが いいです。",
                "それを のまない ほうが いいです。",
                "それを のんでは いけません。",
                "それを のんだ ことが あります。",
              ],
              correct: 1,
            },
            {
              q: "Which means 'I have never climbed Mt. Fuji'?",
              options: [
                "ふじさんに のぼった ことが あります。",
                "ふじさんに のぼった ことが ありません。",
                "ふじさんに のぼらなければ なりません。",
                "ふじさんに のぼっても いいです。",
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
        q: "'You may sit here' =",
        options: [
          "ここに すわっては いけません。",
          "ここに すわっても いいです。",
          "ここに すわらなければ なりません。",
          "ここに すわった ことが あります。",
        ],
        correct: 1,
      },
      {
        q: "…ては いけません expresses…",
        options: ["permission", "prohibition", "experience", "advice"],
        correct: 1,
      },
      {
        q: "In …ても いいです and …ては いけません, the は is read…",
        options: ["ha", "wa", "ba", "pa"],
        correct: 1,
      },
      {
        q: "'I must go' =",
        options: [
          "いかなくても いいです。",
          "いっても いいです。",
          "いかなければ なりません。",
          "いった ことが あります。",
        ],
        correct: 2,
      },
      {
        q: "'You don't have to pay' =",
        options: [
          "はらわなければ なりません。",
          "はらわなくても いいです。",
          "はらっては いけません。",
          "はらった ほうが いいです。",
        ],
        correct: 1,
      },
      {
        q: "…なければ なりません and …なくても いいです both build from which form?",
        options: ["the て-form", "the ない-form", "the past た-form", "the dictionary form"],
        correct: 1,
      },
      {
        q: "'Have you ever eaten sushi?' =",
        options: [
          "すしを たべた ことが ありますか。",
          "すしを たべても いいですか。",
          "すしを たべなければ なりませんか。",
          "すしを たべた ほうが いいですか。",
        ],
        correct: 0,
      },
      {
        q: "'You'd better rest' =",
        options: [
          "やすんでは いけません。",
          "やすんだ ほうが いいです。",
          "やすんだ ことが あります。",
          "やすまなくても いいです。",
        ],
        correct: 1,
      },
      {
        q: "Negative advice ('you'd better not…') uses…",
        options: [
          "…た ほうが いいです",
          "…ない ほうが いいです",
          "…ては いけません",
          "…なくても いいです",
        ],
        correct: 1,
      },
      {
        q: "Translate: 'May I take a photo here?'",
        options: [
          "ここで しゃしんを とっては いけませんか。",
          "ここで しゃしんを とらなければ なりませんか。",
          "ここで しゃしんを とっても いいですか。",
          "ここで しゃしんを とった ことが ありますか。",
        ],
        correct: 2,
      },
    ],
  },
};
