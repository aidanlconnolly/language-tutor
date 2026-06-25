import type { Unit } from "../../types";

export const UNIT_NARRATE_TRIP: Unit = {
  slug: "narrate-trip",
  stage: 5,
  order: 24,
  icon: "📖",
  title: "Narrating a trip",
  tagline: "Combine your tenses to tell your travel story.",
  badge: "core",
  lessons: [
    {
      slug: "narrate-trip-sequencing",
      title: "Sequencing with …て、… and それから",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Linking actions into a story",
          body: [
            "You already know the て-form. Its biggest everyday job is <strong>sequencing</strong>: chain actions with <em>…て、…</em> to mean \"do X, and (then) do Y.\" The tense lives only on the FINAL verb — everything before it borrows it. <em>朝起きて、コーヒーを飲んで、駅に行きました</em> = I got up, drank coffee, and went to the station.",
            "Between full sentences, use connectors: <strong>そして</strong> (and / and then), <strong>それから</strong> (after that), <strong>でも</strong> (but), <strong>だから</strong> (so / therefore).",
            "So you have two tools: て-form to glue verbs <em>inside</em> one sentence, and そして / それから to glue <em>separate</em> sentences. Mix them and your narration flows.",
          ],
          keyPoint:
            "…て、… chains actions; only the last verb carries the tense. Between sentences use そして・それから (then), でも (but), だから (so).",
        },
        {
          type: "vocab",
          heading: "Connectors & sequence words",
          items: [
            { l1: "そして", en: "and / and then", note: "soshite — そ・し・て." },
            { l1: "それから", en: "after that", note: "sorekara — そ・れ・か・ら." },
            { l1: "でも", en: "but / however", note: "demo — で・も. Starts a sentence." },
            { l1: "だから", en: "so / therefore", note: "dakara — だ・か・ら." },
            { l1: "まず", en: "first", note: "mazu — ま・ず." },
            { l1: "つぎに", en: "next", note: "tsugi ni — つ・ぎ・に." },
            { l1: "最後に", en: "finally / lastly", note: "saigo ni — さい・ご・に." },
            { l1: "起きる → 起きて", en: "get up → and got up", note: "okiru → okite. Group 2." },
          ],
        },
        {
          type: "dialogue",
          heading: "A morning routine, chained",
          setup: "Describing what you do each morning before work.",
          lines: [
            { speaker: "相手", l1: "朝は何をしますか。", en: "What do you do in the morning?" },
            { speaker: "You", l1: "まず六時に起きて、コーヒーを飲みます。", en: "First I get up at six and drink coffee." },
            { speaker: "You", l1: "つぎにシャワーを浴びて、朝ごはんを食べます。", en: "Next I take a shower and eat breakfast." },
            { speaker: "You", l1: "それから駅まで歩いて、電車に乗ります。", en: "After that I walk to the station and get on the train." },
            { speaker: "相手", l1: "忙しいですね。", en: "That's busy, isn't it." },
            { speaker: "You", l1: "そうですね。でも、楽しいです。", en: "Yes. But it's fun." },
          ],
        },
        {
          type: "orderWords",
          heading: "Chain the actions",
          intro: "Use the て-form to link; tense on the last verb.",
          items: [
            { tokens: ["起きて", "、", "コーヒー", "を", "飲みます"], en: "I get up and drink coffee." },
            { tokens: ["駅", "に", "行って", "、", "電車", "に", "乗ります"], en: "I go to the station and get on the train." },
            { tokens: ["お寺", "を", "見て", "、", "写真", "を", "撮りました"], en: "I saw the temple and took photos." },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "I got up at seven, drank coffee, and went to Shibuya.",
          reference: "七時に起きて、コーヒーを飲んで、渋谷に行きました。",
          hint: "Two て-forms (起きて、飲んで), tense only on the final 行きました.",
        },
      ],
    },
    {
      slug: "narrate-trip-day-out",
      title: "A past-tense day out",
      estMinutes: 10,
      pages: [
        {
          type: "intro",
          heading: "Putting the past tense to work",
          body: [
            "Now combine everything: chain actions with the て-form, but land on a <strong>past</strong> verb so the whole sequence reads as a finished story. <em>浅草に行って、お寺を見て、天ぷらを食べました</em> = I went to Asakusa, saw a temple, and ate tempura.",
            "Sprinkle in past-time markers (きのう, 先週, 朝, 午後 = afternoon) and reactions: <em>楽しかったです</em> (it was fun), <em>おいしかったです</em> (it was delicious), <em>きれいでした</em> (it was beautiful).",
            "Remember い-adjectives go past with <strong>…かった</strong> (楽しい→楽しかったです) and な-adjectives/nouns with <strong>…でした</strong> (きれい→きれいでした).",
          ],
          keyPoint:
            "Chain with て-forms, end on a ました verb. Reactions: 楽しかったです / おいしかったです (い-adj past), きれいでした (な-adj past).",
        },
        {
          type: "vocab",
          heading: "Day-out vocabulary",
          items: [
            { l1: "午前", en: "morning / a.m.", note: "gozen — ご・ぜん." },
            { l1: "午後", en: "afternoon / p.m.", note: "gogo — ご・ご." },
            { l1: "お寺", en: "temple", note: "otera — お・てら." },
            { l1: "神社", en: "shrine", note: "jinja — じん・じゃ." },
            { l1: "公園", en: "park", note: "kōen — こう・えん." },
            { l1: "乗る → 乗って", en: "ride/board → boarding", note: "noru → notte. 電車に乗る." },
            { l1: "歩く → 歩いて", en: "walk → walking", note: "aruku → aruite." },
            { l1: "楽しかったです", en: "it was fun", note: "tanoshikatta desu — past of 楽しい." },
            { l1: "きれいでした", en: "it was beautiful", note: "kirei deshita — past of な-adj きれい." },
          ],
        },
        {
          type: "dialogue",
          heading: "Telling a friend about your day",
          setup: "You describe yesterday's outing.",
          lines: [
            { speaker: "友達", l1: "きのうは何をしましたか。", en: "What did you do yesterday?" },
            { speaker: "You", l1: "午前中に浅草に行って、お寺を見ました。", en: "In the morning I went to Asakusa and saw a temple." },
            { speaker: "You", l1: "それから公園を歩いて、写真をたくさん撮りました。", en: "After that I walked through the park and took lots of photos." },
            { speaker: "友達", l1: "天気はどうでしたか。", en: "How was the weather?" },
            { speaker: "You", l1: "とてもよかったです。空がきれいでした。", en: "It was very good. The sky was beautiful." },
            { speaker: "You", l1: "午後は天ぷらを食べました。おいしかったです！", en: "In the afternoon I ate tempura. It was delicious!" },
          ],
        },
        {
          type: "fillBlank",
          heading: "Tell the story in the past",
          items: [
            {
              template: "浅草に ___ 、お寺を見ました。(行く → て-form)",
              answer: "行って",
              en: "I went to Asakusa and saw a temple.",
              options: ["行って", "行きて", "行いて", "行った"],
            },
            {
              template: "公園を歩いて、写真を ___ 。(撮る → past)",
              answer: "撮りました",
              en: "I walked through the park and took photos.",
              options: ["撮りました", "撮って", "撮ります", "撮りませんでした"],
            },
            {
              template: "天ぷらは ___ です。(おいしい → past)",
              answer: "おいしかった",
              en: "The tempura was delicious.",
              options: ["おいしかった", "おいしいでした", "おいしくない", "おいしいだった"],
            },
            {
              template: "空が ___ 。(きれい → past, な-adj)",
              answer: "きれいでした",
              en: "The sky was beautiful.",
              options: ["きれいでした", "きれいかった", "きれいだった です", "きれいです"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Tell what you did on your first day in Tokyo",
          direction: "en-to-l1",
          prompt: "On my first day in Tokyo, I went to Shibuya, ate ramen, and took photos. It was a lot of fun.",
          reference: "東京の最初の日に、渋谷に行って、ラーメンを食べて、写真を撮りました。とても楽しかったです。",
          hint: "Chain 行って、食べて、then end on 撮りました; finish with the reaction 楽しかったです。",
        },
      ],
    },
    {
      slug: "narrate-trip-plans",
      title: "Future plans: …つもりです and …ます",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Talking about what you'll do",
          body: [
            "The plain <strong>ます-form</strong> already covers the future: <em>明日、京都に行きます</em> = Tomorrow I'll go to Kyoto. For a firmer <strong>intention</strong> (\"I plan to / I intend to\"), use the <strong>dictionary form + つもりです</strong>: <em>京都に行くつもりです</em> = I plan to go to Kyoto.",
            "Negative intention: dictionary form + <strong>つもりはありません</strong>, or more simply <em>行かないつもりです</em>. Add future-time words: <em>明日</em> (tomorrow), <em>来週</em> (next week), <em>来月</em> (next month), <em>いつか</em> (someday).",
            "Want + plan combine naturally: <em>富士山に登りたいです。来年、登るつもりです。</em> = I want to climb Mt. Fuji. I plan to climb it next year.",
          ],
          keyPoint:
            "ます-form = neutral future. dictionary form + つもりです = firm plan/intention. Future-time words: 明日・来週・来月・いつか.",
        },
        {
          type: "vocab",
          heading: "Future-time & plan words",
          items: [
            { l1: "つもり", en: "intention / plan", note: "tsumori — つ・も・り. Dictionary form + つもりです." },
            { l1: "予定", en: "schedule / plan", note: "yotei — よ・てい. …予定です also = 'plan to'." },
            { l1: "明日", en: "tomorrow", note: "ashita — あ・した." },
            { l1: "あさって", en: "the day after tomorrow", note: "asatte — あ・さっ・て." },
            { l1: "来週", en: "next week", note: "raishū — らい・しゅう." },
            { l1: "来月", en: "next month", note: "raigetsu — らい・げつ." },
            { l1: "来年", en: "next year", note: "rainen — らい・ねん." },
            { l1: "いつか", en: "someday", note: "itsuka — い・つ・か." },
          ],
        },
        {
          type: "conjugation",
          heading: "Future vs intention",
          verb: "行く / 登る",
          meaning: "to go / to climb",
          intro: "The 'person' column names the pattern.",
          tenses: [
            {
              name: "行く — to go",
              forms: [
                { person: "neutral future (ます)", form: "行きます", en: "will go" },
                { person: "intention (つもり)", form: "行くつもりです", en: "plan to go" },
                { person: "negative intention", form: "行かないつもりです", en: "plan not to go" },
              ],
            },
            {
              name: "登る — to climb",
              forms: [
                { person: "neutral future", form: "登ります", en: "will climb" },
                { person: "intention", form: "登るつもりです", en: "plan to climb" },
              ],
            },
          ],
        },
        {
          type: "dialogue",
          heading: "Plans for the trip",
          setup: "A friend asks about your upcoming weeks in Japan.",
          lines: [
            { speaker: "友達", l1: "来週、何をするつもりですか。", en: "What do you plan to do next week?" },
            { speaker: "You", l1: "京都に行くつもりです。お寺をたくさん見たいです。", en: "I plan to go to Kyoto. I want to see lots of temples." },
            { speaker: "友達", l1: "富士山にも行きますか。", en: "Will you go to Mt. Fuji too?" },
            { speaker: "You", l1: "今回は行きません。でも、来年登るつもりです。", en: "Not this time. But I plan to climb it next year." },
            { speaker: "友達", l1: "いいですね。お土産を買ってきてください。", en: "Nice. Please buy me a souvenir." },
            { speaker: "You", l1: "はい、買います！", en: "Yes, I will!" },
          ],
        },
        {
          type: "fillBlank",
          heading: "State the plan",
          items: [
            {
              template: "来週、京都に ___ です。(行く + つもり)",
              answer: "行くつもり",
              en: "Next week I plan to go to Kyoto.",
              options: ["行くつもり", "行きつもり", "行ったつもり", "行きますつもり"],
            },
            {
              template: "明日、温泉に ___ 。(行く → neutral future)",
              answer: "行きます",
              en: "Tomorrow I'll go to a hot spring.",
              options: ["行きます", "行くつもりでした", "行きました", "行って"],
            },
            {
              template: "来年、富士山に ___ です。(登る + つもり)",
              answer: "登るつもり",
              en: "Next year I plan to climb Mt. Fuji.",
              options: ["登るつもり", "登りつもり", "登ったつもり", "登りますつもり"],
            },
            {
              template: "今回はお酒を ___ です。(飲む / negative intention)",
              answer: "飲まないつもり",
              en: "This time I don't plan to drink.",
              options: ["飲まないつもり", "飲むつもりない", "飲みつもり", "飲みませんつもり"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Next week I plan to go to Kyoto, and someday I want to climb Mt. Fuji.",
          reference: "来週、京都に行くつもりです。そして、いつか富士山に登りたいです。",
          hint: "行くつもりです for the plan; 登りたいです for the want; link with そして.",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "Which means a firm PLAN, 'I plan to go'?",
              options: ["行きます", "行くつもりです", "行きました", "行っています"],
              correct: 1,
            },
            {
              q: "つもり attaches to which verb form?",
              options: ["the ます-form", "the て-form", "the dictionary form", "the past form"],
              correct: 2,
            },
            {
              q: "'I will go to a hot spring tomorrow' (neutral future) =",
              options: [
                "明日、温泉に行きました。",
                "明日、温泉に行きます。",
                "明日、温泉に行っています。",
                "明日、温泉に行ってください。",
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
        q: "When you chain actions with …て、…、which verb carries the tense?",
        options: ["the first verb", "every verb", "the last verb", "none of them"],
        correct: 2,
      },
      {
        q: "'I got up and drank coffee' =",
        options: [
          "起きました、コーヒーを飲んで。",
          "起きて、コーヒーを飲みました。",
          "起きて、コーヒーを飲みます。",
          "起きる、コーヒーを飲みました。",
        ],
        correct: 1,
      },
      {
        q: "それから means…",
        options: ["but", "after that / then", "so", "first"],
        correct: 1,
      },
      {
        q: "Past of the い-adjective 楽しい ('it was fun') =",
        options: ["楽しいでした", "楽しかったです", "楽しくないです", "楽しいだった"],
        correct: 1,
      },
      {
        q: "Past of the な-adjective きれい ('it was beautiful') =",
        options: ["きれいかったです", "きれいでした", "きれいだったです", "きれくなかった"],
        correct: 1,
      },
      {
        q: "The plain ます-form can express…",
        options: ["only the past", "present and future", "only requests", "only the continuous"],
        correct: 1,
      },
      {
        q: "'I plan to go to Kyoto' =",
        options: [
          "京都に行きました。",
          "京都に行くつもりです。",
          "京都に行っています。",
          "京都に行きたいです。",
        ],
        correct: 1,
      },
      {
        q: "つもりです attaches to the…",
        options: ["ます-form", "て-form", "dictionary form", "past form"],
        correct: 2,
      },
      {
        q: "Which word means 'next week'?",
        options: ["先週", "来週", "今週", "毎週"],
        correct: 1,
      },
      {
        q: "'I went to Asakusa, saw a temple, and ate tempura' best uses…",
        options: [
          "three separate ました sentences only",
          "て-forms chained, ending in 食べました",
          "all dictionary forms",
          "つもりです on each verb",
        ],
        correct: 1,
      },
    ],
  },
};
