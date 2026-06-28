import type { Unit } from "../../types";

export const UNIT_POLITE_REQUESTS: Unit = {
  slug: "polite-requests",
  stage: 6,
  order: 27,
  icon: "🤝",
  title: "Polite requests & keigo",
  tagline: "…て いただけますか, おねがいします, a keigo intro.",
  badge: "core",
  lessons: [
    {
      slug: "polite-requests-te-kudasai",
      title: "…て ください vs …て いただけますか",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Two ways to ask someone to do something",
          body: [
            "To ask someone to do an action, take the verb's <strong>て-form</strong> and add an ending. The basic, neutral request is <strong>…て ください</strong> — \"please do ___.\"",
            "<em>待つ (まつ)</em> → 待って → <strong>待って ください</strong> (please wait). <em>書く (かく)</em> → 書いて → <strong>書いて ください</strong> (please write).",
            "For something <em>politer and softer</em> — asking a favor of a stranger or someone senior — use <strong>…て いただけますか</strong> (\"could I have you do ___?\"). It's more deferential than ください.",
            "Scale of politeness: <em>…て</em> (casual) &lt; <em>…て ください</em> (neutral-polite) &lt; <strong>…て いただけますか</strong> (very polite). When unsure with strangers, …て いただけますか is rarely too much.",
          ],
          keyPoint:
            "Verb て-form + ください = please do X. te-form + いただけますか = could you (politer). Politeness: て < てください < ていただけますか.",
        },
        {
          type: "vocab",
          heading: "Handy て-form requests",
          items: [
            { l1: "待って (まって) ください", en: "please wait", note: "matte kudasai (from 待つ)." },
            { l1: "見せて (みせて) ください", en: "please show me", note: "misete kudasai (from 見せる)." },
            { l1: "教えて (おしえて) ください", en: "please tell me / teach me", note: "oshiete kudasai." },
            { l1: "もう一度 (いちど) 言って ください", en: "please say it once more", note: "mou ichido itte kudasai." },
            { l1: "ゆっくり 話して ください", en: "please speak slowly", note: "yukkuri hanashite kudasai." },
            { l1: "手伝って (てつだって) いただけますか", en: "could you help me?", note: "tetsudatte itadakemasu ka (politer)." },
            { l1: "写真を 撮って (とって) いただけますか", en: "could you take a photo?", note: "shashin o totte itadakemasu ka." },
          ],
        },
        {
          type: "conjugation",
          heading: "Same verb, two politeness levels",
          verb: "…て ください / …て いただけますか",
          meaning: "neutral vs very polite requests",
          intro: "The て-form stays the same; only the ending changes the register.",
          tenses: [
            {
              name: "待つ (to wait)",
              forms: [
                { person: "casual", form: "待って", en: "wait (to a friend)" },
                { person: "neutral-polite", form: "待って ください", en: "please wait" },
                { person: "very polite", form: "待って いただけますか", en: "could you please wait?" },
              ],
            },
            {
              name: "撮る (to take a photo)",
              forms: [
                { person: "casual", form: "撮って", en: "take (it)" },
                { person: "neutral-polite", form: "撮って ください", en: "please take (it)" },
                { person: "very polite", form: "撮って いただけますか", en: "could you take (it)?" },
              ],
            },
          ],
        },
        {
          type: "dialogue",
          heading: "Asking a passerby for a photo",
          setup: "You're at the Shibuya scramble crossing.",
          lines: [
            { speaker: "You", l1: "すみません、写真を 撮って いただけますか。", en: "Excuse me, could you take a photo?" },
            { speaker: "通行人 (Passerby)", l1: "いいですよ。はい、チーズ。", en: "Sure. Okay, say cheese." },
            { speaker: "You", l1: "ありがとうございます。もう一度 撮って いただけますか。", en: "Thank you. Could you take one more?" },
            { speaker: "通行人 (Passerby)", l1: "はい、どうぞ。", en: "Sure, go ahead." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Make the request",
          items: [
            {
              template: "ちょっと 待って ___ 。(neutral please)",
              answer: "ください",
              en: "Please wait a moment.",
              options: ["ください", "いただけますか", "おねがい", "です"],
            },
            {
              template: "もう一度 言って ___ 。(politer 'could you')",
              answer: "いただけますか",
              en: "Could you say it once more?",
              options: ["ください", "いただけますか", "です", "ます"],
            },
            {
              template: "ゆっくり ___ ください。(speak)",
              answer: "話して",
              en: "Please speak slowly.",
              options: ["話して", "話す", "話した", "話します"],
            },
            {
              template: "写真を ___ いただけますか。(take)",
              answer: "撮って",
              en: "Could you take a photo?",
              options: ["撮って", "撮る", "撮った", "撮ります"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Excuse me, could you take a photo?",
          reference: "すみません、写真を 撮って いただけますか。",
          hint: "Use the very-polite …て いただけますか for a stranger.",
        },
      ],
    },
    {
      slug: "polite-requests-onegai",
      title: "おねがいします & ちょっと softening",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "おねがいします — the universal 'please'",
          body: [
            "<strong>おねがいします</strong> (<em>onegai shimasu</em>) is the go-to polite \"please\" when you want a <em>thing</em> or a <em>service</em>, rather than asking for an action verb.",
            "Pattern: <em>noun</em> + を + <strong>おねがいします</strong>. \"Water, please\" = <strong>お水を おねがいします</strong>. \"This, please\" = <strong>これを おねがいします</strong>. It's softer and warmer than ください.",
            "<strong>ちょっと</strong> (\"a little\") softens almost anything — it's the Japanese cushion word. <em>ちょっと すみません</em> = \"excuse me a sec,\" <em>ちょっと…</em> trailing off = a polite \"no / that's a bit difficult.\"",
            "Combine them: <em>すみません、ちょっと 手伝って いただけますか</em> = \"Sorry, could you help me a moment?\" — humble, soft, and very natural.",
          ],
          keyPoint:
            "noun を おねがいします = please (give/do this). ちょっと softens requests and politely declines. すみません opens almost any request.",
        },
        {
          type: "vocab",
          heading: "Softeners & set phrases",
          items: [
            { l1: "おねがいします", en: "please (I request)", note: "onegai shimasu — for things/services." },
            { l1: "ちょっと", en: "a little / a bit", note: "chotto — softener; alone = a soft 'no'." },
            { l1: "すみません", en: "excuse me / sorry", note: "sumimasen — opens a request, also 'thank you'." },
            { l1: "よろしいですか", en: "is it all right? / may I?", note: "yoroshii desu ka — polite 'is that okay?'" },
            { l1: "恐れ入りますが (おそれいりますが)", en: "I'm sorry to trouble you, but…", note: "osore-irimasu ga — very polite opener." },
            { l1: "あの…", en: "um… / excuse me…", note: "ano — hesitation softener before a request." },
            { l1: "いいですか", en: "is it okay? / may I?", note: "ii desu ka — casual of よろしいですか." },
          ],
        },
        {
          type: "dialogue",
          heading: "Ordering at a café",
          setup: "You're at a Tokyo coffee shop counter.",
          lines: [
            { speaker: "You", l1: "すみません、コーヒーを ひとつ おねがいします。", en: "Excuse me, one coffee, please." },
            { speaker: "店員 (Staff)", l1: "ホットと アイス、どちらに なさいますか。", en: "Hot or iced, which would you like?" },
            { speaker: "You", l1: "ホットで おねがいします。あ、ちょっと 砂糖も いただけますか。", en: "Hot, please. Oh, could I also have a little sugar?" },
            { speaker: "店員 (Staff)", l1: "かしこまりました。少々 お待ちください。", en: "Certainly. Please wait a moment." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Soften it",
          items: [
            {
              template: "お水を ___ 。",
              answer: "おねがいします",
              en: "Water, please.",
              options: ["おねがいします", "いただけますか", "ください", "です"],
            },
            {
              template: "___ 、すみません。(a sec)",
              answer: "ちょっと",
              en: "Excuse me a sec.",
              options: ["ちょっと", "もう", "とても", "あまり"],
            },
            {
              template: "写真、___ ですか。(may I?)",
              answer: "いいですか",
              en: "Photo — is it okay (to take one)?",
              options: ["いいですか", "なんですか", "いくらですか", "どこですか"],
            },
            {
              template: "これを ___ 。(please, warm)",
              answer: "おねがいします",
              en: "This one, please.",
              options: ["おねがいします", "ありがとう", "すみません", "ください"],
            },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the request",
          intro: "Tap the words into natural order.",
          items: [
            { tokens: ["コーヒーを", "ひとつ", "おねがいします"], en: "One coffee, please." },
            { tokens: ["すみません", "ちょっと", "いいですか"], en: "Excuse me, is it okay for a second?" },
            { tokens: ["お水を", "おねがいします"], en: "Water, please." },
            { tokens: ["写真を", "撮って", "いただけますか"], en: "Could you take a photo?" },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Excuse me, one coffee, please.",
          reference: "すみません、コーヒーを ひとつ おねがいします。",
          hint: "Open with すみません, count with ひとつ, close with おねがいします.",
        },
      ],
    },
    {
      slug: "polite-requests-keigo-intro",
      title: "A gentle keigo intro — recognizing です／でございます",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Keigo: Japan's politeness gears",
          body: [
            "<strong>敬語 (けいご, keigo)</strong> is the system of honorific language. You don't need to <em>produce</em> it yet — but recognizing it helps you understand staff and signs.",
            "You already use the <strong>ですます</strong> level: <em>です</em> and <em>〜ます</em> verbs — standard polite Japanese, fine for almost every situation as a learner.",
            "Above that, shop and station staff use <strong>でございます</strong> — an ultra-polite version of <em>です</em>. \"It's 500 yen\" formal = <em>五百円で ございます</em>. You'll hear it constantly in department stores; you can just answer back in plain です.",
            "Other keigo you'll <em>hear</em>: <strong>いらっしゃいませ</strong> (welcome), <strong>かしこまりました</strong> (certainly / understood), <strong>少々 お待ちください</strong> (please wait a moment), <strong>お〜ください</strong> (honorific please). Recognize them — reply simply.",
          ],
          keyPoint:
            "ですます = your everyday polite level. でございます = ultra-polite です you'll HEAR from staff. Recognize keigo; reply in plain ですます.",
        },
        {
          type: "vocab",
          heading: "Keigo you'll hear from staff",
          items: [
            { l1: "でございます", en: "it is (ultra-polite です)", note: "de gozaimasu — staff speech; you reply with です." },
            { l1: "いらっしゃいませ", en: "welcome (to the shop)", note: "irasshaimase — no reply needed." },
            { l1: "かしこまりました", en: "certainly / understood", note: "kashikomarimashita — staff confirming." },
            { l1: "少々 お待ちください (しょうしょう)", en: "please wait a moment", note: "shoushou o-machi kudasai." },
            { l1: "ありがとうございました", en: "thank you (very polite, past)", note: "arigatou gozaimashita — after service." },
            { l1: "おそれいりますが", en: "I'm sorry to trouble you, but…", note: "osore-irimasu ga — polite request opener." },
            { l1: "ご利用 (ごりよう) ください", en: "please use / make use of", note: "go-riyou kudasai — honorific お/ご + ください." },
          ],
        },
        {
          type: "tip",
          heading: "You don't speak keigo — you survive it",
          body: "As a learner, your job is <strong>recognition, not production</strong>. When a clerk says <em>五百円で ございます</em>, that's just \"it's 500 yen\" dressed up. When they say <em>少々 お待ちください</em>, wait. Reply in your normal <em>ですます</em> Japanese — <em>はい</em>, <em>おねがいします</em>, <em>ありがとうございます</em> — and you'll be perfectly polite. Trying to mirror full keigo back often sounds odd from a beginner.",
          example: { l1: "店員「千円で ございます」／ あなた「カードで おねがいします」", en: "Staff: 'That's 1,000 yen.' / You: 'By card, please.'" },
        },
        {
          type: "multipleChoice",
          heading: "Decode the keigo",
          questions: [
            {
              q: "A clerk says 'でございます'. It's the polite version of…",
              options: ["ください", "です", "ます", "おねがい"],
              correct: 1,
            },
            {
              q: "'少々 お待ちください' means…",
              options: ["please come in", "please wait a moment", "thank you", "how many people?"],
              correct: 1,
            },
            {
              q: "'かしこまりました' is what staff say to mean…",
              options: ["welcome", "certainly / understood", "that's expensive", "sold out"],
              correct: 1,
            },
            {
              q: "As a learner, the best reply to keigo is…",
              options: [
                "full keigo back",
                "plain English",
                "normal ですます Japanese (はい / おねがいします)",
                "silence",
              ],
              correct: 2,
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Yes, by card, please. Thank you.",
          reference: "はい、カードで おねがいします。ありがとうございます。",
          hint: "Reply to the clerk's keigo with simple ですます Japanese.",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "敬語 (けいご) is…",
              options: ["a counter", "honorific/polite language", "a verb tense", "a type of receipt"],
              correct: 1,
            },
            {
              q: "Your everyday polite level as a learner is…",
              options: ["でございます", "plain/casual form", "ですます", "no politeness"],
              correct: 2,
            },
            {
              q: "'いらっしゃいませ' is said by…",
              options: ["the customer", "shop staff as a welcome", "a friend", "the train conductor only"],
              correct: 1,
            },
            {
              q: "'五百円で ございます' means…",
              options: ["it's 5 yen", "it's 500 yen (polite)", "please wait", "do you have change?"],
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
        q: "The neutral-polite 'please do X' attaches to which verb form?",
        options: ["the dictionary form", "the て-form + ください", "the ます-stem alone", "the ない-form"],
        correct: 1,
      },
      {
        q: "Which is the POLITER request?",
        options: ["待って", "待って ください", "待って いただけますか", "待つ"],
        correct: 2,
      },
      {
        q: "'Please speak slowly' =",
        options: ["はやく 話して ください", "ゆっくり 話して ください", "ゆっくり 話します", "ゆっくり 話す"],
        correct: 1,
      },
      {
        q: "To ask for a thing/service politely, use noun を + …",
        options: ["ください だけ", "おねがいします", "いただけますか", "でございます"],
        correct: 1,
      },
      {
        q: "'ちょっと' on its own, trailing off, often means…",
        options: ["a strong yes", "a soft no / it's difficult", "very much", "how much"],
        correct: 1,
      },
      {
        q: "'すみません' can mean…",
        options: [
          "only 'sorry'",
          "excuse me, sorry, and thanks (request opener)",
          "only 'thank you'",
          "goodbye",
        ],
        correct: 1,
      },
      {
        q: "敬語 (keigo) is…",
        options: ["slang", "honorific/polite language", "a counter system", "a verb conjugation only"],
        correct: 1,
      },
      {
        q: "'でございます' is the ultra-polite version of…",
        options: ["ます", "です", "ください", "おねがい"],
        correct: 1,
      },
      {
        q: "When staff say '少々 お待ちください', you should…",
        options: ["pay immediately", "wait a moment", "leave", "repeat it back"],
        correct: 1,
      },
      {
        q: "Translate: 'Excuse me, could you take a photo?'",
        options: [
          "すみません、写真を 撮って いただけますか。",
          "すみません、写真は いくら ですか。",
          "ちょっと、写真を 見せて ください。",
          "写真を 撮ります。",
        ],
        correct: 0,
      },
    ],
  },
};
