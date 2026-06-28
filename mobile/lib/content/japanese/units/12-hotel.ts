import type { Unit } from "../../types";

export const UNIT_HOTEL: Unit = {
  slug: "hotel",
  stage: 3,
  order: 12,
  icon: "🏨",
  title: "Airport & hotel",
  tagline: "Check-in, passport, room vocab, problems.",
  badge: "tourist",
  lessons: [
    {
      slug: "hotel-airport",
      title: "At the airport",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Landing at Narita or Haneda",
          body: [
            "At immigration (<strong>にゅうこく しんさ</strong>) you'll hand over your <strong>パスポート (passport)</strong>. The officer may ask <em>もくてき は なん ですか</em> = 'What is the purpose (of your visit)?' — answer <em>かんこう です</em> = 'sightseeing'.",
            "After that comes <strong>にもつ (luggage)</strong> at the baggage carousel, then customs (<strong>ぜいかん</strong>).",
            "To reach the city, look for signs to <strong>でんしゃ (train)</strong> or the airport <strong>バス (bus)</strong>. The Narita Express and Keisei Skyliner are the fast trains into Tokyo.",
          ],
          keyPoint: "パスポート = passport, にもつ = luggage. もくてき → かんこう です = 'purpose → sightseeing'.",
        },
        {
          type: "vocab",
          heading: "Airport vocabulary",
          items: [
            { l1: "くうこう", en: "airport", note: "kūkō (空港)." },
            { l1: "パスポート", en: "passport", note: "pasupōto. From English." },
            { l1: "にもつ", en: "luggage / baggage", note: "nimotsu (荷物)." },
            { l1: "にゅうこく しんさ", en: "immigration", note: "nyūkoku shinsa (入国審査)." },
            { l1: "ぜいかん", en: "customs", note: "zeikan (税関)." },
            { l1: "もくてき", en: "purpose", note: "mokuteki (目的). Of your visit." },
            { l1: "かんこう", en: "sightseeing / tourism", note: "kankō (観光)." },
            { l1: "バス", en: "bus", note: "basu. Airport limousine bus." },
          ],
        },
        {
          type: "dialogue",
          heading: "At immigration",
          setup: "The officer checks your passport.",
          lines: [
            { speaker: "Officer", l1: "パスポート を おねがいします。", en: "Your passport, please. (Pasupōto o onegai shimasu.)" },
            { speaker: "You", l1: "はい、どうぞ。", en: "Here you are. (Hai, dōzo.)" },
            { speaker: "Officer", l1: "もくてき は なん ですか。", en: "What is the purpose of your visit? (Mokuteki wa nan desu ka.)" },
            { speaker: "You", l1: "かんこう です。", en: "Sightseeing. (Kankō desu.)" },
            { speaker: "Officer", l1: "なんにち ですか。", en: "How many days? (Nannichi desu ka.)" },
            { speaker: "You", l1: "いっしゅうかん です。", en: "One week. (Isshūkan desu.)" },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Quick check",
          questions: [
            {
              q: "What does にもつ mean?",
              options: ["passport", "luggage", "airport", "customs"],
              correct: 1,
            },
            {
              q: "The officer asks もくてき は なん ですか. A good answer is…",
              options: ["かんこう です", "にもつ です", "パスポート です", "くうこう です"],
              correct: 0,
              fb: "かんこう です = 'sightseeing', the standard tourist answer.",
            },
            {
              q: "パスポート means…",
              options: ["ticket", "passport", "boarding pass", "visa"],
              correct: 1,
            },
            {
              q: "くうこう means…",
              options: ["customs", "immigration", "airport", "bus"],
              correct: 2,
            },
          ],
        },
      ],
    },
    {
      slug: "hotel-checkin",
      title: "Hotel check-in",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Checking in (チェックイン)",
          body: [
            "At the front desk (<strong>フロント</strong>) say you have a reservation: <em>よやく が あります</em> = 'I have a reservation (<strong>よやく</strong>)'.",
            "Number of nights uses the counter <strong>…はく (haku)</strong>: <em>いっぱく</em> = 1 night, <em>にはく</em> = 2 nights, <em>さんぱく</em> = 3 nights.",
            "Room types are loanwords: <strong>シングル (single)</strong>, <strong>ツイン (twin)</strong>, <strong>ダブル (double)</strong>.",
          ],
          keyPoint: "よやく = reservation. …はく = nights (いっぱく / にはく / さんぱく). シングル・ツイン・ダブル = room types.",
        },
        {
          type: "vocab",
          heading: "Check-in vocabulary",
          items: [
            { l1: "ホテル", en: "hotel", note: "hoteru." },
            { l1: "フロント", en: "front desk / reception", note: "furonto. From English 'front'." },
            { l1: "よやく", en: "reservation", note: "yoyaku (予約). Yoyaku ga arimasu = 'I have a reservation'." },
            { l1: "チェックイン", en: "check-in", note: "chekku-in." },
            { l1: "…はく", en: "…nights (counter)", note: "haku (泊). ippaku = 1 night, nihaku = 2, sanpaku = 3." },
            { l1: "シングル", en: "single room", note: "shinguru." },
            { l1: "ツイン", en: "twin room", note: "tsuin. Two separate beds." },
            { l1: "ダブル", en: "double room", note: "daburu. One large bed." },
          ],
        },
        {
          type: "dialogue",
          heading: "At the front desk",
          setup: "You arrive at your hotel with a booking.",
          lines: [
            { speaker: "You", l1: "チェックイン おねがいします。よやく が あります。", en: "Check-in, please. I have a reservation. (Chekku-in onegai shimasu. Yoyaku ga arimasu.)" },
            { speaker: "Staff", l1: "おなまえ を おねがいします。", en: "Your name, please. (O-namae o onegai shimasu.)" },
            { speaker: "You", l1: "スミス です。にはく です。", en: "Smith. Two nights. (Sumisu desu. Nihaku desu.)" },
            { speaker: "Staff", l1: "ツイン の おへや ですね。", en: "A twin room, correct? (Tsuin no o-heya desu ne.)" },
            { speaker: "You", l1: "はい、そうです。", en: "Yes, that's right. (Hai, sō desu.)" },
            { speaker: "Staff", l1: "パスポート を おねがいします。", en: "Your passport, please. (Pasupōto o onegai shimasu.)" },
          ],
        },
        {
          type: "fillBlank",
          heading: "Complete the check-in",
          items: [
            {
              template: "よやく が ___。",
              answer: "あります",
              en: "I have a reservation.",
              options: ["あります", "です", "ください", "おねがい"],
            },
            {
              template: "に___ です。",
              answer: "はく",
              en: "Two nights.",
              options: ["はく", "にち", "じ", "えん"],
            },
            {
              template: "___ の おへや を おねがいします。",
              answer: "ツイン",
              en: "A twin room, please.",
              options: ["ツイン", "フロント", "よやく", "パスポート"],
            },
            {
              template: "チェックイン ___。",
              answer: "おねがいします",
              en: "Check-in, please.",
              options: ["おねがいします", "あります", "です か", "どこ"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Check-in, please. I have a reservation.",
          reference: "チェックイン おねがいします。よやく が あります。",
          hint: "Use チェックイン おねがいします, then 'reservation + が + あります'.",
        },
      ],
    },
    {
      slug: "hotel-room-problems",
      title: "Room vocab & polite problems",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "When something doesn't work",
          body: [
            "Report a problem politely with <strong>「…が つきません」</strong> = '… won't turn on'. <em>エアコン が つきません</em> = 'The air conditioner won't turn on'.",
            "For things that are broken, use <strong>「…が こわれて います」</strong> = '… is broken'.",
            "And to request something, <strong>「…を おねがいします」</strong> = 'May I have …?' — e.g. <em>タオル を おねがいします</em> = 'Could I get a towel?'",
          ],
          keyPoint: "…が つきません = 'won't turn on'. …が こわれて います = 'is broken'. …を おねがいします = 'may I have …'.",
        },
        {
          type: "vocab",
          heading: "Room vocabulary",
          items: [
            { l1: "へや", en: "room", note: "heya (部屋). Politely o-heya." },
            { l1: "かぎ", en: "key", note: "kagi (鍵). Often a card key, kādo kī." },
            { l1: "エアコン", en: "air conditioner", note: "eakon. From 'air con'." },
            { l1: "でんき", en: "light / electricity", note: "denki (電気)." },
            { l1: "シャワー", en: "shower", note: "shawā." },
            { l1: "タオル", en: "towel", note: "taoru." },
            { l1: "おゆ", en: "hot water", note: "o-yu (お湯)." },
            { l1: "Wi-Fi", en: "Wi-Fi", note: "wai-fai. Ask for the pasuwādo (password)." },
          ],
        },
        {
          type: "tip",
          heading: "つきません vs こわれて います",
          body: "Use <strong>つきません</strong> ('won't turn on') for things that <em>should</em> light up or power on — lights, the AC, the TV. Use <strong>こわれて います</strong> ('is broken') for anything physically not working — a stuck lock, a dripping tap. Both are polite; staff will usually reply <em>すぐ いきます</em> ('I'll come right away').",
          example: { l1: "エアコン が つきません。", en: "The air conditioner won't turn on. (Eakon ga tsukimasen.)" },
        },
        {
          type: "dialogue",
          heading: "Calling the front desk",
          setup: "Something in your room isn't working.",
          lines: [
            { speaker: "You", l1: "すみません、エアコン が つきません。", en: "Excuse me, the air conditioner won't turn on. (Sumimasen, eakon ga tsukimasen.)" },
            { speaker: "Staff", l1: "おへや は なんばん ですか。", en: "What is your room number? (O-heya wa nanban desu ka.)" },
            { speaker: "You", l1: "さんまるごう です。タオル も おねがいします。", en: "Room 305. And a towel too, please. (San-maru-gō desu. Taoru mo onegai shimasu.)" },
            { speaker: "Staff", l1: "わかりました。すぐ いきます。", en: "Understood. I'll come right away. (Wakarimashita. Sugu ikimasu.)" },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the complaint",
          items: [
            { tokens: ["エアコン", "が", "つきません"], en: "The air conditioner won't turn on." },
            { tokens: ["でんき", "が", "つきません"], en: "The light won't turn on." },
            { tokens: ["シャワー", "が", "こわれて", "います"], en: "The shower is broken." },
            { tokens: ["タオル", "を", "おねがいします"], en: "Could I get a towel, please?" },
          ],
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "'The air conditioner won't turn on' =",
              options: [
                "エアコン が つきません",
                "エアコン を おねがいします",
                "エアコン は どこ ですか",
                "エアコン が あります",
              ],
              correct: 0,
            },
            {
              q: "To request a towel, you say…",
              options: ["タオル が つきません", "タオル を おねがいします", "タオル は どこ ですか", "タオル です ね"],
              correct: 1,
            },
            {
              q: "こわれて います means…",
              options: ["won't turn on", "is broken", "is clean", "is available"],
              correct: 1,
            },
            {
              q: "おゆ means…",
              options: ["key", "towel", "hot water", "shower"],
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
        q: "パスポート means…",
        options: ["ticket", "passport", "luggage", "visa"],
        correct: 1,
      },
      {
        q: "にもつ means…",
        options: ["airport", "customs", "luggage", "passport"],
        correct: 2,
      },
      {
        q: "The officer asks もくてき は なん ですか. You answer…",
        options: ["かんこう です", "にもつ です", "パスポート です", "ホテル です"],
        correct: 0,
      },
      {
        q: "'I have a reservation' =",
        options: [
          "よやく が あります",
          "よやく は どこ ですか",
          "よやく を つきません",
          "よやく です か",
        ],
        correct: 0,
      },
      {
        q: "にはく means…",
        options: ["one night", "two nights", "two people", "two rooms"],
        correct: 1,
      },
      {
        q: "A ツイン room has…",
        options: ["one large bed", "two separate beds", "no bed", "bunk beds"],
        correct: 1,
      },
      {
        q: "'The air conditioner won't turn on' =",
        options: [
          "エアコン を おねがいします",
          "エアコン が つきません",
          "エアコン は どこ ですか",
          "エアコン です ね",
        ],
        correct: 1,
      },
      {
        q: "To request something politely, you use…",
        options: ["…が つきません", "…を おねがいします", "…は どこ ですか", "…が あります"],
        correct: 1,
      },
      {
        q: "かぎ means…",
        options: ["towel", "key", "shower", "light"],
        correct: 1,
      },
      {
        q: "Translate: 'Check-in, please.'",
        options: [
          "チェックイン おねがいします。",
          "よやく が あります。",
          "パスポート を おねがいします。",
          "かんこう です。",
        ],
        correct: 0,
      },
    ],
  },
};
