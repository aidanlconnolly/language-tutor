import type { Unit } from "../../types";

export const UNIT_TRANSIT: Unit = {
  slug: "transit",
  stage: 3,
  order: 10,
  icon: "🚆",
  title: "Tokyo trains",
  tagline: "JR, the metro, the Suica card, …まで.",
  badge: "tourist",
  lessons: [
    {
      slug: "transit-jr-metro",
      title: "JR, the metro, and the IC card",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Tokyo runs on two rail systems",
          body: [
            "<strong>JR (ジェイアール)</strong> runs the above-ground loop and commuter lines — the famous green <em>Yamanote</em> loop circles central Tokyo. JR is one company.",
            "The <strong>subway (ちかてつ)</strong> is actually two operators, Tokyo Metro and Toei, with thirteen colour-coded lines underground.",
            "You do not really need to buy paper tickets (きっぷ). Just load a <strong>Suica (スイカ)</strong> or <strong>Pasmo (パスモ)</strong> IC card, tap the gate, and it deducts the fare. The word for any station is <em>えき</em>.",
          ],
          keyPoint: "JR = one company (Yamanote loop). ちかてつ = subway. Tap your スイカ at the gate — no ticket needed.",
        },
        {
          type: "vocab",
          heading: "Core train vocabulary",
          items: [
            { l1: "えき", en: "station", note: "eki (駅). The most useful train word." },
            { l1: "でんしゃ", en: "train", note: "densha (電車). An electric/commuter train." },
            { l1: "ちかてつ", en: "subway", note: "chikatetsu (地下鉄). Literally 'underground iron'." },
            { l1: "きっぷ", en: "ticket", note: "kippu (切符). A paper ticket." },
            { l1: "スイカ", en: "Suica (IC card)", note: "Suika. Rechargeable tap card; also pronounced like 'watermelon'." },
            { l1: "かいさつ", en: "ticket gate", note: "kaisatsu (改札). Where you tap in and out." },
            { l1: "ホーム", en: "platform", note: "hōmu. From English 'platform'." },
            { l1: "JR", en: "JR (rail company)", note: "jei-āru (ジェイアール). Japan Railways." },
          ],
        },
        {
          type: "tip",
          heading: "Tap in AND tap out",
          body: "With a <strong>スイカ</strong> you tap the <em>かいさつ</em> when you enter <strong>and</strong> when you exit — the fare is calculated by distance. If you forget to tap in, the exit gate will beep and close. To top it up, look for a <em>チャージ (chāji, 'charge')</em> machine.",
          example: { l1: "スイカ に チャージ します。", en: "I'll top up the Suica card. (Suika ni chāji shimasu.)" },
        },
        {
          type: "multipleChoice",
          heading: "Quick check",
          questions: [
            {
              q: "What is the most general word for 'station'?",
              options: ["でんしゃ", "えき", "きっぷ", "ホーム"],
              correct: 1,
            },
            {
              q: "The スイカ card is used to…",
              options: ["buy snacks only", "tap in and out at the gate", "reserve a hotel", "call a taxi"],
              correct: 1,
              fb: "You tap the スイカ at the かいさつ (ticket gate) to pay your fare.",
            },
            {
              q: "ちかてつ means…",
              options: ["the JR loop line", "the subway", "the bullet train", "the airport bus"],
              correct: 1,
            },
            {
              q: "If you do not want to buy a paper きっぷ, you can use…",
              options: ["a スイカ card", "a passport", "a hotel key", "a coupon"],
              correct: 0,
            },
          ],
        },
      ],
    },
    {
      slug: "transit-fares-lines",
      title: "…まで — how much, which line, transfers",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Saying 'to' a place with …まで",
          body: [
            "<strong>…まで (made)</strong> means 'as far as / up to' a place. <em>しぶや まで</em> = 'to Shibuya'. You will use it constantly: <em>とうきょうえき まで いくらですか</em> = 'How much to Tokyo Station?'",
            "A train line is a <strong>…せん (sen)</strong>. <em>やまのてせん</em> = the Yamanote Line, <em>ぎんざせん</em> = the Ginza Line.",
            "To change trains is <strong>のりかえ (norikae)</strong>. Asking <em>「のりかえ ですか」</em> means 'Do I need to transfer?'",
          ],
          keyPoint: "…まで = 'to (a place)'. …せん = 'line'. のりかえ = 'transfer / change trains'.",
        },
        {
          type: "vocab",
          heading: "Fares, lines and transfers",
          items: [
            { l1: "…まで", en: "to / as far as (a place)", note: "made. Shibuya made = 'to Shibuya'." },
            { l1: "いくら", en: "how much (price)", note: "ikura. Ikura desu ka = 'How much is it?'" },
            { l1: "…せん", en: "(train) line", note: "sen (線). Yamanote-sen = the Yamanote Line." },
            { l1: "のりかえ", en: "transfer / change trains", note: "norikae (乗り換え)." },
            { l1: "やまのてせん", en: "the Yamanote Line", note: "Yamanote-sen. The green loop line." },
            { l1: "ぎんざせん", en: "the Ginza Line", note: "Ginza-sen. Orange metro line." },
            { l1: "うんちん", en: "fare", note: "unchin (運賃). The cost of the ride." },
            { l1: "ろせんず", en: "route map", note: "rosenzu (路線図). The coloured network map." },
          ],
        },
        {
          type: "dialogue",
          heading: "At the station information desk",
          setup: "You want to reach Shibuya and are not sure which line to take.",
          lines: [
            { speaker: "You", l1: "すみません、しぶや まで いくらですか。", en: "Excuse me, how much is it to Shibuya? (Sumimasen, Shibuya made ikura desu ka.)" },
            { speaker: "Staff", l1: "ひゃくろくじゅうえん です。", en: "It's 160 yen. (Hyaku-rokujū-en desu.)" },
            { speaker: "You", l1: "なに せん ですか。", en: "Which line is it? (Nani sen desu ka.)" },
            { speaker: "Staff", l1: "やまのてせん です。", en: "It's the Yamanote Line. (Yamanote-sen desu.)" },
            { speaker: "You", l1: "のりかえ ですか。", en: "Do I need to transfer? (Norikae desu ka.)" },
            { speaker: "Staff", l1: "いいえ、のりかえ なし です。", en: "No, no transfer. (Iie, norikae nashi desu.)" },
          ],
        },
        {
          type: "fillBlank",
          heading: "Complete the question",
          items: [
            {
              template: "しぶや ___ いくらですか。",
              answer: "まで",
              en: "How much is it to Shibuya?",
              options: ["まで", "せん", "えき", "から"],
            },
            {
              template: "とうきょうえき まで ___ ですか。",
              answer: "いくら",
              en: "How much is it to Tokyo Station?",
              options: ["なに", "いくら", "どこ", "だれ"],
            },
            {
              template: "なに ___ ですか。",
              answer: "せん",
              en: "Which line is it?",
              options: ["せん", "まで", "えき", "ホーム"],
            },
            {
              template: "___ ですか。― いいえ、なし です。",
              answer: "のりかえ",
              en: "Is there a transfer? — No, there isn't.",
              options: ["のりかえ", "きっぷ", "スイカ", "うんちん"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Excuse me, how much is it to Shibuya?",
          reference: "すみません、しぶや まで いくらですか。",
          hint: "Use すみません to open, then 'place + まで + いくらですか'.",
        },
      ],
    },
    {
      slug: "transit-platform",
      title: "On the platform — delays and 'does this go to…?'",
      estMinutes: 10,
      pages: [
        {
          type: "intro",
          heading: "Confirming the right train",
          body: [
            "Even with the right line, trains split toward different destinations. The key question is <strong>「この でんしゃは …に いきますか」</strong> = 'Does this train go to …?'",
            "Listen for <em>…ゆき / …いき (yuki/iki)</em> on signs — it marks the destination, e.g. <em>しんじゅく ゆき</em> = 'bound for Shinjuku'.",
            "Delays are rare but announced: <strong>ちえん (chien)</strong> = delay, <strong>みあわせ</strong> = service suspended. <em>けが</em> or <em>じんしんじこ</em> announcements mean a serious incident has stopped trains.",
          ],
          keyPoint: "この でんしゃは …に いきますか = 'Does this train go to …?'. …ゆき = 'bound for …'. ちえん = delay.",
        },
        {
          type: "vocab",
          heading: "On-the-platform vocabulary",
          items: [
            { l1: "この でんしゃ", en: "this train", note: "kono densha. kono = 'this'." },
            { l1: "いきます", en: "(it) goes", note: "ikimasu (行きます). Polite form of 'to go'." },
            { l1: "…ゆき", en: "bound for …", note: "yuki/iki (行き). Shinjuku-yuki = 'for Shinjuku'." },
            { l1: "ちえん", en: "delay", note: "chien (遅延)." },
            { l1: "みあわせ", en: "service suspended", note: "miawase (見合わせ). Trains temporarily stopped." },
            { l1: "つぎ", en: "next", note: "tsugi (次). Tsugi no eki = 'the next station'." },
            { l1: "きゅうこう", en: "express", note: "kyūkō (急行). Skips some stations." },
            { l1: "かくえき", en: "local (all-stops)", note: "kakueki (各駅). Stops at every station." },
          ],
        },
        {
          type: "dialogue",
          heading: "Is this the right train?",
          setup: "You are on the platform and want to reach Ueno.",
          lines: [
            { speaker: "You", l1: "すみません、この でんしゃは うえの に いきますか。", en: "Excuse me, does this train go to Ueno? (Sumimasen, kono densha wa Ueno ni ikimasu ka.)" },
            { speaker: "Passenger", l1: "はい、いきます。", en: "Yes, it does. (Hai, ikimasu.)" },
            { speaker: "You", l1: "きゅうこう ですか、かくえき ですか。", en: "Is it the express or the local? (Kyūkō desu ka, kakueki desu ka.)" },
            { speaker: "Passenger", l1: "かくえき です。つぎ が うえの です。", en: "It's the local. The next one is Ueno. (Kakueki desu. Tsugi ga Ueno desu.)" },
            { speaker: "You", l1: "ありがとうございます。", en: "Thank you very much. (Arigatō gozaimasu.)" },
          ],
        },
        {
          type: "listen",
          heading: "What did the announcement say?",
          intro: "Listen, then pick the closest meaning.",
          items: [
            { l1: "つぎは しんじゅく です。", en: "Next is Shinjuku.", options: ["Next is Shinjuku", "This train is full", "Shinjuku is closed", "Skip Shinjuku"], correct: 0 },
            { l1: "この でんしゃは うえの ゆき です。", en: "This train is bound for Ueno.", options: ["This train is bound for Ueno", "This train is delayed", "Ueno station is next", "Transfer at Ueno"], correct: 0 },
            { l1: "ちえん して います。", en: "It is delayed.", options: ["It is on time", "It is delayed", "It is cancelled", "It is express"], correct: 1 },
            { l1: "うんてん みあわせ です。", en: "Service is suspended.", options: ["Service is normal", "Service is suspended", "The train is express", "The next stop is the last"], correct: 1 },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the question",
          items: [
            { tokens: ["この", "でんしゃは", "うえの", "に", "いきますか"], en: "Does this train go to Ueno?" },
            { tokens: ["つぎは", "しぶや", "ですか"], en: "Is the next one Shibuya?" },
            { tokens: ["きゅうこう", "ですか", "、", "かくえき", "ですか"], en: "Is it the express or the local?" },
            { tokens: ["しんじゅく", "まで", "のりかえ", "ですか"], en: "Do I transfer to get to Shinjuku?" },
          ],
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "How do you ask 'Does this train go to Ueno?'",
              options: [
                "うえの は どこ ですか。",
                "この でんしゃは うえの に いきますか。",
                "うえの まで いくらですか。",
                "うえの は えき ですか。",
              ],
              correct: 1,
            },
            {
              q: "ちえん means…",
              options: ["express", "delay", "transfer", "platform"],
              correct: 1,
            },
            {
              q: "A sign reads しんじゅく ゆき. It means…",
              options: ["from Shinjuku", "bound for Shinjuku", "Shinjuku is closed", "Shinjuku express only"],
              correct: 1,
            },
            {
              q: "かくえき is a train that…",
              options: ["skips most stations", "stops at every station", "only runs at night", "goes to the airport"],
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
        q: "The most general word for 'station' is…",
        options: ["でんしゃ", "えき", "きっぷ", "ホーム"],
        correct: 1,
      },
      {
        q: "What do you tap at the かいさつ (ticket gate)?",
        options: ["a passport", "a スイカ card", "a coupon", "a route map"],
        correct: 1,
      },
      {
        q: "…まで means…",
        options: ["from", "to / as far as", "line", "transfer"],
        correct: 1,
      },
      {
        q: "'How much is it to Shibuya?' =",
        options: [
          "しぶや は どこ ですか。",
          "しぶや まで いくらですか。",
          "しぶや に いきますか。",
          "しぶや えき です。",
        ],
        correct: 1,
      },
      {
        q: "のりかえ means…",
        options: ["fare", "delay", "transfer / change trains", "platform"],
        correct: 2,
      },
      {
        q: "…せん refers to a…",
        options: ["ticket", "train line", "station name", "card"],
        correct: 1,
      },
      {
        q: "'Does this train go to Ueno?' =",
        options: [
          "この でんしゃは うえの に いきますか。",
          "うえの まで いくらですか。",
          "うえの は えき ですか。",
          "うえの ゆき ですか。",
        ],
        correct: 0,
      },
      {
        q: "A train marked かくえき…",
        options: ["skips stations", "stops at every station", "is the bullet train", "goes only to the airport"],
        correct: 1,
      },
      {
        q: "ちえん in an announcement means…",
        options: ["the train is express", "the train is delayed", "the line is the Yamanote", "the gate is closed"],
        correct: 1,
      },
      {
        q: "Translate: 'Excuse me, which line is it?'",
        options: [
          "すみません、いくら ですか。",
          "すみません、なに せん ですか。",
          "すみません、のりかえ ですか。",
          "すみません、えき は どこ ですか。",
        ],
        correct: 1,
      },
    ],
  },
};
