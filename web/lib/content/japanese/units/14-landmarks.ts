import type { Unit } from "../../types";

export const UNIT_LANDMARKS: Unit = {
  slug: "landmarks",
  stage: 3,
  order: 14,
  icon: "🏯",
  title: "Tokyo landmarks",
  tagline: "Sensō-ji, Shibuya, the Skytree, Meiji shrine.",
  badge: "culture",
  lessons: [
    {
      slug: "landmarks-sights",
      title: "The sights",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Four icons of Tokyo",
          body: [
            "<strong>せんそうじ (Sensō-ji)</strong> in Asakusa is Tokyo's oldest temple, fronted by the great red Kaminarimon lantern and the Nakamise shopping street.",
            "<strong>スカイツリー (Skytree)</strong> is the 634-metre broadcasting tower with a glass-floored observation deck — the tallest structure in Japan.",
            "<strong>しぶや スクランブル (Shibuya Scramble)</strong> is the famous all-directions pedestrian crossing. Nearby, <strong>めいじじんぐう (Meiji Jingū)</strong> is a tranquil <em>じんじゃ (shrine)</em> in a forest beside Harajuku.",
          ],
          keyPoint: "おてら (temple) like せんそうじ; じんじゃ (shrine) like めいじじんぐう; タワー (tower) like スカイツリー.",
        },
        {
          type: "vocab",
          heading: "Landmark vocabulary",
          items: [
            { l1: "せんそうじ", en: "Sensō-ji (temple)", note: "Sensō-ji (浅草寺). In Asakusa." },
            { l1: "おてら", en: "(Buddhist) temple", note: "o-tera (お寺)." },
            { l1: "じんじゃ", en: "(Shinto) shrine", note: "jinja (神社). Meiji Jingū is one." },
            { l1: "スカイツリー", en: "Tokyo Skytree", note: "Sukai-tsurī. 634 m tower." },
            { l1: "タワー", en: "tower", note: "tawā. Also Tōkyō Tawā (Tokyo Tower)." },
            { l1: "しぶや スクランブル", en: "Shibuya Scramble Crossing", note: "Shibuya sukuranburu." },
            { l1: "めいじじんぐう", en: "Meiji Jingū (shrine)", note: "Meiji Jingū (明治神宮)." },
            { l1: "ゆうめい", en: "famous", note: "yūmei (有名). Yūmei desu = 'it's famous'." },
          ],
        },
        {
          type: "pronounce",
          heading: "Say the landmark names",
          intro: "Tap to hear each one and repeat.",
          items: [
            { l1: "せんそうじ", en: "Sensō-ji", tip: "sen-sō-ji, with a long ō." },
            { l1: "スカイツリー", en: "Skytree", tip: "su-ka-i-tsu-rī, drawn-out final rī." },
            { l1: "しぶや", en: "Shibuya", tip: "shi-bu-ya, three even beats." },
            { l1: "めいじじんぐう", en: "Meiji Jingū", tip: "me-i-ji-jin-gū, long final gū." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Quick check",
          questions: [
            {
              q: "せんそうじ is a…",
              options: ["shrine", "temple", "tower", "crossing"],
              correct: 1,
            },
            {
              q: "スカイツリー is a…",
              options: ["temple", "shrine", "tower", "park"],
              correct: 2,
            },
            {
              q: "めいじじんぐう is a…",
              options: ["temple", "shrine", "tower", "museum"],
              correct: 1,
            },
            {
              q: "ゆうめい です means…",
              options: ["it's far", "it's famous", "it's closed", "it's free"],
              correct: 1,
            },
          ],
        },
      ],
    },
    {
      slug: "landmarks-tickets-hours",
      title: "Tickets & hours",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Buying admission and reading the hours",
          body: [
            "An admission ticket is a <strong>にゅうじょうけん (nyūjōken)</strong>. Ask for one with <em>にゅうじょうけん を…まい ください</em> = 'X admission tickets, please' (まい counts flat things).",
            "Opening hours use <strong>…じ から (from … o'clock)</strong> and <strong>…じ まで (until … o'clock)</strong>: <em>くじ から ごじ まで</em> = 'from 9 to 5'.",
            "Ask whether something is open today with <strong>「きょう は あいて いますか」</strong> = 'Is it open today?' (closed = <em>しまって います</em>).",
          ],
          keyPoint: "にゅうじょうけん = admission ticket. …じ から / …じ まで = 'from / until … o'clock'. あいて います = 'is open'.",
        },
        {
          type: "vocab",
          heading: "Tickets & hours vocabulary",
          items: [
            { l1: "にゅうじょうけん", en: "admission ticket", note: "nyūjōken (入場券)." },
            { l1: "…まい", en: "(counter for flat things)", note: "mai (枚). Ichi-mai = 1 ticket, ni-mai = 2." },
            { l1: "おとな", en: "adult", note: "otona (大人). Otona ichi-mai = '1 adult'." },
            { l1: "こども", en: "child", note: "kodomo (子供)." },
            { l1: "…じ から", en: "from … o'clock", note: "ji kara (時から)." },
            { l1: "…じ まで", en: "until … o'clock", note: "ji made (時まで)." },
            { l1: "あいて います", en: "is open", note: "aite imasu (開いています)." },
            { l1: "しまって います", en: "is closed", note: "shimatte imasu (閉まっています)." },
          ],
        },
        {
          type: "dialogue",
          heading: "At the ticket counter",
          setup: "You buy admission tickets for the observation deck.",
          lines: [
            { speaker: "You", l1: "にゅうじょうけん を おとな にまい ください。", en: "Two adult admission tickets, please. (Nyūjōken o otona ni-mai kudasai.)" },
            { speaker: "Staff", l1: "はい、よんせんえん です。", en: "Sure, that's 4,000 yen. (Hai, yon-sen-en desu.)" },
            { speaker: "You", l1: "なんじ まで あいて いますか。", en: "Until what time are you open? (Nanji made aite imasu ka.)" },
            { speaker: "Staff", l1: "ごご くじ まで です。", en: "Until 9 p.m. (Gogo ku-ji made desu.)" },
            { speaker: "You", l1: "ありがとうございます。", en: "Thank you very much. (Arigatō gozaimasu.)" },
          ],
        },
        {
          type: "fillBlank",
          heading: "Complete the request",
          items: [
            {
              template: "にゅうじょうけん を おとな ___ ください。",
              answer: "にまい",
              en: "Two adult admission tickets, please.",
              options: ["にまい", "にはく", "にじ", "にえん"],
            },
            {
              template: "なんじ ___ あいて いますか。",
              answer: "まで",
              en: "Until what time are you open?",
              options: ["まで", "から", "せん", "に"],
            },
            {
              template: "くじ ___ ごじ まで です。",
              answer: "から",
              en: "From 9 until 5.",
              options: ["から", "まで", "の", "を"],
            },
            {
              template: "きょう は ___ いますか。",
              answer: "あいて",
              en: "Is it open today?",
              options: ["あいて", "しまって", "いって", "つきません"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Two adult admission tickets, please.",
          reference: "にゅうじょうけん を おとな にまい ください。",
          hint: "Use にゅうじょうけん を, then 'おとな + にまい + ください'.",
        },
      ],
    },
    {
      slug: "landmarks-impressions",
      title: "Talking about what you've seen",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Saying where you went and how it was",
          body: [
            "Use the past tense <strong>…に いきました</strong> = 'I went to …'. <em>せんそうじ に いきました</em> = 'I went to Sensō-ji'.",
            "Give your impression with <strong>よかった です</strong> = 'it was good / lovely'. The plain adjective <em>いい</em> ('good') becomes past <em>よかった</em> — a useful irregular form.",
            "More reactions: <strong>たのしかった です</strong> = 'it was fun', <strong>きれい でした</strong> = 'it was beautiful', <strong>すごかった です</strong> = 'it was amazing'.",
          ],
          keyPoint: "…に いきました = 'I went to …'. よかった です = 'it was good'. きれい でした = 'it was beautiful'.",
        },
        {
          type: "vocab",
          heading: "Impressions vocabulary",
          items: [
            { l1: "…に いきました", en: "I went to …", note: "ni ikimashita (行きました). Past of ikimasu." },
            { l1: "みました", en: "I saw / watched", note: "mimashita (見ました)." },
            { l1: "よかった です", en: "it was good / lovely", note: "yokatta desu. Irregular past of ii." },
            { l1: "たのしかった です", en: "it was fun", note: "tanoshikatta desu (楽しかった)." },
            { l1: "きれい でした", en: "it was beautiful", note: "kirei deshita (きれいでした)." },
            { l1: "すごかった です", en: "it was amazing", note: "sugokatta desu (すごかった)." },
            { l1: "また いきたい です", en: "I want to go again", note: "mata ikitai desu (また行きたい)." },
            { l1: "しゃしん", en: "photo", note: "shashin (写真). Shashin o torimashita = 'I took photos'." },
          ],
        },
        {
          type: "dialogue",
          heading: "Comparing days out",
          setup: "A friend asks about your sightseeing.",
          lines: [
            { speaker: "Friend", l1: "きのう は どこ に いきましたか。", en: "Where did you go yesterday? (Kinō wa doko ni ikimashita ka.)" },
            { speaker: "You", l1: "スカイツリー に いきました。", en: "I went to the Skytree. (Sukai-tsurī ni ikimashita.)" },
            { speaker: "Friend", l1: "どう でしたか。", en: "How was it? (Dō deshita ka.)" },
            { speaker: "You", l1: "とても よかった です。けしき が きれい でした。", en: "It was really lovely. The view was beautiful. (Totemo yokatta desu. Keshiki ga kirei deshita.)" },
            { speaker: "Friend", l1: "いいですね。", en: "That's nice. (Ii desu ne.)" },
            { speaker: "You", l1: "また いきたい です。", en: "I want to go again. (Mata ikitai desu.)" },
          ],
        },
        {
          type: "listen",
          heading: "What did they say?",
          intro: "Listen, then pick the closest meaning.",
          items: [
            { l1: "せんそうじ に いきました。", en: "I went to Sensō-ji.", options: ["I went to Sensō-ji", "I want to go to Sensō-ji", "Sensō-ji is closed", "Where is Sensō-ji?"], correct: 0 },
            { l1: "とても よかった です。", en: "It was really good.", options: ["It was boring", "It was really good", "It was far", "It was closed"], correct: 1 },
            { l1: "きれい でした。", en: "It was beautiful.", options: ["It was beautiful", "It was expensive", "It was crowded", "It was small"], correct: 0 },
            { l1: "また いきたい です。", en: "I want to go again.", options: ["I never want to go", "I want to go again", "I went twice", "I'm going now"], correct: 1 },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the sentence",
          items: [
            { tokens: ["スカイツリー", "に", "いきました"], en: "I went to the Skytree." },
            { tokens: ["とても", "よかった", "です"], en: "It was really good." },
            { tokens: ["けしき", "が", "きれい", "でした"], en: "The view was beautiful." },
            { tokens: ["また", "いきたい", "です"], en: "I want to go again." },
          ],
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "'I went to Sensō-ji' =",
              options: [
                "せんそうじ に いきました",
                "せんそうじ は どこ ですか",
                "せんそうじ に いきたい です",
                "せんそうじ を みました",
              ],
              correct: 0,
            },
            {
              q: "The past tense of いい ('good') is…",
              options: ["いいでした", "よかった", "いかった", "よくない"],
              correct: 1,
            },
            {
              q: "'It was beautiful' =",
              options: ["きれい です", "きれい でした", "きれい じゃない", "きれい に"],
              correct: 1,
            },
            {
              q: "また いきたい です means…",
              options: ["I went again", "I want to go again", "I can't go", "I'm going now"],
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
        q: "せんそうじ is a famous…",
        options: ["shrine", "temple", "tower", "crossing"],
        correct: 1,
      },
      {
        q: "スカイツリー is a…",
        options: ["temple", "shrine", "tower", "park"],
        correct: 2,
      },
      {
        q: "めいじじんぐう is a…",
        options: ["temple", "shrine", "tower", "museum"],
        correct: 1,
      },
      {
        q: "An admission ticket is a…",
        options: ["きっぷ", "にゅうじょうけん", "よやく", "にもつ"],
        correct: 1,
      },
      {
        q: "'Until what time are you open?' =",
        options: [
          "なんじ から あいて いますか",
          "なんじ まで あいて いますか",
          "いくら ですか",
          "どこ ですか",
        ],
        correct: 1,
      },
      {
        q: "しまって います means…",
        options: ["is open", "is closed", "is famous", "is free"],
        correct: 1,
      },
      {
        q: "'I went to the Skytree' =",
        options: [
          "スカイツリー に いきました",
          "スカイツリー は どこ ですか",
          "スカイツリー に いきたい です",
          "スカイツリー が ゆうめい です",
        ],
        correct: 0,
      },
      {
        q: "The past tense of いい ('good') is…",
        options: ["いいでした", "よかった", "いかった", "よくない"],
        correct: 1,
      },
      {
        q: "きれい でした means…",
        options: ["it is beautiful", "it was beautiful", "it isn't beautiful", "make it beautiful"],
        correct: 1,
      },
      {
        q: "Translate: 'Two adult admission tickets, please.'",
        options: [
          "にゅうじょうけん を おとな にまい ください。",
          "にゅうじょうけん は どこ ですか。",
          "おとな にはく ください。",
          "にゅうじょうけん を よやく します。",
        ],
        correct: 0,
      },
    ],
  },
};
