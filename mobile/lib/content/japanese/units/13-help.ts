import type { Unit } from "../../types";

export const UNIT_HELP: Unit = {
  slug: "help",
  stage: 3,
  order: 13,
  icon: "🆘",
  title: "Help & emergencies",
  tagline: "The pharmacy, the kōban, tasukete!",
  badge: "tourist",
  lessons: [
    {
      slug: "help-asking",
      title: "Asking for help",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Three lines that bring help fast",
          body: [
            "<strong>たすけて (tasukete)</strong> = 'Help!' — the urgent shout. For non-urgent help, ask <em>たすけて もらえますか</em> = 'Could you help me?'",
            "Lost? Say <strong>「みちに まよいました」</strong> = 'I'm lost (I lost my way)'.",
            "Lost an item? Use <strong>「…を なくしました」</strong> = 'I lost …'. <em>パスポート を なくしました</em> = 'I lost my passport'.",
          ],
          keyPoint: "たすけて = Help! / みちに まよいました = I'm lost. / …を なくしました = I lost …",
        },
        {
          type: "vocab",
          heading: "Help vocabulary",
          items: [
            { l1: "たすけて", en: "Help!", note: "tasukete (助けて). The urgent call." },
            { l1: "みちに まよいました", en: "I'm lost", note: "michi ni mayoimashita (道に迷いました)." },
            { l1: "…を なくしました", en: "I lost …", note: "o nakushimashita (なくしました)." },
            { l1: "こまって います", en: "I'm in trouble / stuck", note: "komatte imasu (困っています)." },
            { l1: "さいふ", en: "wallet", note: "saifu (財布)." },
            { l1: "けいたい / スマホ", en: "cellphone / smartphone", note: "keitai / sumaho." },
            { l1: "えいご", en: "English (language)", note: "eigo (英語). Eigo ga dekimasu ka = 'Do you speak English?'" },
            { l1: "だいじょうぶ", en: "OK / all right", note: "daijōbu (大丈夫). Also 'no thanks / I'm fine'." },
          ],
        },
        {
          type: "dialogue",
          heading: "I lost my wallet",
          setup: "You stop a passer-by because your wallet is missing.",
          lines: [
            { speaker: "You", l1: "すみません、こまって います。", en: "Excuse me, I'm in trouble. (Sumimasen, komatte imasu.)" },
            { speaker: "Local", l1: "どうしましたか。", en: "What's wrong? (Dō shimashita ka.)" },
            { speaker: "You", l1: "さいふ を なくしました。", en: "I lost my wallet. (Saifu o nakushimashita.)" },
            { speaker: "Local", l1: "こうばん に いきましょう。", en: "Let's go to the police box. (Kōban ni ikimashō.)" },
            { speaker: "You", l1: "えいご が できますか。", en: "Do you speak English? (Eigo ga dekimasu ka.)" },
            { speaker: "Local", l1: "すこし だけ です。", en: "Only a little. (Sukoshi dake desu.)" },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Quick check",
          questions: [
            {
              q: "The urgent shout for 'Help!' is…",
              options: ["すみません", "たすけて", "だいじょうぶ", "どうぞ"],
              correct: 1,
            },
            {
              q: "'I'm lost' =",
              options: [
                "みちに まよいました",
                "さいふ を なくしました",
                "こまって います",
                "えいご が できますか",
              ],
              correct: 0,
            },
            {
              q: "'I lost my passport' =",
              options: [
                "パスポート が あります",
                "パスポート を なくしました",
                "パスポート は どこ ですか",
                "パスポート を おねがいします",
              ],
              correct: 1,
            },
            {
              q: "えいご が できますか asks…",
              options: ["Where is the station?", "Do you speak English?", "Are you OK?", "Can you help me?"],
              correct: 1,
            },
          ],
        },
      ],
    },
    {
      slug: "help-pharmacy",
      title: "The pharmacy & feeling ill",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "At the やっきょく (pharmacy)",
          body: [
            "A pharmacy is a <strong>やっきょく</strong>; many drugstores are also marked <em>ドラッグストア</em>. You buy <strong>くすり (medicine)</strong> there.",
            "Describe pain with <strong>「…が いたい です」</strong> = '… hurts'. <em>あたま が いたい です</em> = 'My head hurts / I have a headache'.",
            "Useful body words: <strong>あたま (head)</strong>, <strong>おなか (stomach)</strong>, <strong>のど (throat)</strong>. And <strong>ねつ (fever)</strong>: <em>ねつ が あります</em> = 'I have a fever'.",
          ],
          keyPoint: "やっきょく = pharmacy, くすり = medicine. …が いたい です = '… hurts'. ねつ が あります = 'I have a fever'.",
        },
        {
          type: "vocab",
          heading: "Pharmacy & body vocabulary",
          items: [
            { l1: "やっきょく", en: "pharmacy", note: "yakkyoku (薬局)." },
            { l1: "くすり", en: "medicine", note: "kusuri (薬)." },
            { l1: "…が いたい です", en: "… hurts", note: "ga itai desu (痛い)." },
            { l1: "あたま", en: "head", note: "atama (頭). Atama ga itai = 'headache'." },
            { l1: "おなか", en: "stomach / belly", note: "onaka (お腹)." },
            { l1: "のど", en: "throat", note: "nodo (喉)." },
            { l1: "ねつ", en: "fever", note: "netsu (熱). Netsu ga arimasu = 'I have a fever'." },
            { l1: "かぜ", en: "a cold (illness)", note: "kaze (風邪)." },
          ],
        },
        {
          type: "dialogue",
          heading: "Buying headache medicine",
          setup: "You feel unwell and visit a pharmacy.",
          lines: [
            { speaker: "You", l1: "すみません、あたま が いたい です。", en: "Excuse me, my head hurts. (Sumimasen, atama ga itai desu.)" },
            { speaker: "Pharmacist", l1: "ねつ は ありますか。", en: "Do you have a fever? (Netsu wa arimasu ka.)" },
            { speaker: "You", l1: "いいえ、ねつ は ありません。", en: "No, I don't have a fever. (Iie, netsu wa arimasen.)" },
            { speaker: "Pharmacist", l1: "では、この くすり を どうぞ。", en: "Then, here's this medicine. (Dewa, kono kusuri o dōzo.)" },
            { speaker: "You", l1: "ありがとうございます。いくら ですか。", en: "Thank you. How much is it? (Arigatō gozaimasu. Ikura desu ka.)" },
          ],
        },
        {
          type: "fillBlank",
          heading: "Describe the symptom",
          items: [
            {
              template: "あたま が ___ です。",
              answer: "いたい",
              en: "My head hurts.",
              options: ["いたい", "いい", "たかい", "ちかい"],
            },
            {
              template: "ねつ が ___。",
              answer: "あります",
              en: "I have a fever.",
              options: ["あります", "いたい", "ください", "です"],
            },
            {
              template: "___ が いたい です。",
              answer: "おなか",
              en: "My stomach hurts.",
              options: ["おなか", "くすり", "かぜ", "やっきょく"],
            },
            {
              template: "この ___ を ください。",
              answer: "くすり",
              en: "I'll take this medicine.",
              options: ["くすり", "ねつ", "のど", "あたま"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Excuse me, I have a headache.",
          reference: "すみません、あたま が いたい です。",
          hint: "'Headache' = 'head + が + いたい です' (あたま が いたい です).",
        },
      ],
    },
    {
      slug: "help-emergencies",
      title: "Emergencies — kōban, ambulance, 110/119",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "The numbers and places that matter",
          body: [
            "Japan has two emergency numbers: <strong>110 (ひゃくとおばん)</strong> for the police, and <strong>119 (ひゃくじゅうきゅうばん)</strong> for fire and ambulance.",
            "A <strong>こうばん</strong> is a neighbourhood police box on many corners — staffed and ideal for lost items, directions, or trouble.",
            "Call an ambulance with <strong>「きゅうきゅうしゃ を よんで ください」</strong> = 'Please call an ambulance'. The same pattern works for the police: <em>けいさつ を よんで ください</em>.",
          ],
          keyPoint: "110 = police, 119 = fire/ambulance. こうばん = police box. きゅうきゅうしゃ を よんで ください = 'call an ambulance'.",
        },
        {
          type: "vocab",
          heading: "Emergency vocabulary",
          items: [
            { l1: "こうばん", en: "police box", note: "kōban (交番). Small neighbourhood police post." },
            { l1: "けいさつ", en: "police", note: "keisatsu (警察). Dial 110." },
            { l1: "きゅうきゅうしゃ", en: "ambulance", note: "kyūkyūsha (救急車). Dial 119." },
            { l1: "びょういん", en: "hospital", note: "byōin (病院)." },
            { l1: "じこ", en: "accident", note: "jiko (事故)." },
            { l1: "かじ", en: "fire (emergency)", note: "kaji (火事). Dial 119." },
            { l1: "…を よんで ください", en: "please call …", note: "o yonde kudasai (呼んでください)." },
            { l1: "きけん", en: "danger / dangerous", note: "kiken (危険)." },
          ],
        },
        {
          type: "dialogue",
          heading: "At the kōban after an accident",
          setup: "You report an injury at the police box.",
          lines: [
            { speaker: "You", l1: "たすけて ください！じこ です。", en: "Please help! There's been an accident. (Tasukete kudasai! Jiko desu.)" },
            { speaker: "Officer", l1: "だいじょうぶ ですか。", en: "Are you all right? (Daijōbu desu ka.)" },
            { speaker: "You", l1: "きゅうきゅうしゃ を よんで ください。", en: "Please call an ambulance. (Kyūkyūsha o yonde kudasai.)" },
            { speaker: "Officer", l1: "わかりました。すぐ よびます。", en: "Understood. I'll call right away. (Wakarimashita. Sugu yobimasu.)" },
            { speaker: "You", l1: "ありがとうございます。", en: "Thank you very much. (Arigatō gozaimasu.)" },
          ],
        },
        {
          type: "listen",
          heading: "What did they say?",
          intro: "Listen, then pick the closest meaning.",
          items: [
            { l1: "きゅうきゅうしゃ を よんで ください。", en: "Please call an ambulance.", options: ["Please call an ambulance", "Please call the police", "Go to the hospital", "Are you OK?"], correct: 0 },
            { l1: "けいさつ を よんで ください。", en: "Please call the police.", options: ["Please call an ambulance", "Please call the police", "Call a taxi", "It's dangerous"], correct: 1 },
            { l1: "だいじょうぶ ですか。", en: "Are you all right?", options: ["Where is the hospital?", "Are you all right?", "Is it dangerous?", "Call a doctor"], correct: 1 },
            { l1: "きけん です。", en: "It's dangerous.", options: ["It's fine", "It's an accident", "It's dangerous", "It's far"], correct: 2 },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the emergency phrase",
          items: [
            { tokens: ["きゅうきゅうしゃ", "を", "よんで", "ください"], en: "Please call an ambulance." },
            { tokens: ["けいさつ", "を", "よんで", "ください"], en: "Please call the police." },
            { tokens: ["びょういん", "は", "どこ", "ですか"], en: "Where is the hospital?" },
            { tokens: ["たすけて", "ください"], en: "Please help!" },
          ],
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "Which number do you dial for an ambulance or fire?",
              options: ["110", "119", "911", "112"],
              correct: 1,
            },
            {
              q: "'Please call an ambulance' =",
              options: [
                "けいさつ を よんで ください",
                "きゅうきゅうしゃ を よんで ください",
                "びょういん は どこ ですか",
                "たすけて ください",
              ],
              correct: 1,
            },
            {
              q: "A こうばん is a…",
              options: ["hospital", "pharmacy", "police box", "fire station"],
              correct: 2,
            },
            {
              q: "きけん means…",
              options: ["safe", "dangerous", "open", "free"],
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
        q: "The urgent shout for 'Help!' is…",
        options: ["だいじょうぶ", "たすけて", "すみません", "どうぞ"],
        correct: 1,
      },
      {
        q: "'I'm lost' =",
        options: [
          "みちに まよいました",
          "さいふ を なくしました",
          "こまって います",
          "えいご が できますか",
        ],
        correct: 0,
      },
      {
        q: "'I lost my wallet' =",
        options: [
          "さいふ が あります",
          "さいふ を なくしました",
          "さいふ は どこ ですか",
          "さいふ を よんで ください",
        ],
        correct: 1,
      },
      {
        q: "A やっきょく is a…",
        options: ["hospital", "pharmacy", "police box", "clinic"],
        correct: 1,
      },
      {
        q: "'My head hurts' =",
        options: [
          "あたま が いたい です",
          "あたま が あります",
          "あたま は どこ ですか",
          "あたま を ください",
        ],
        correct: 0,
      },
      {
        q: "ねつ が あります means…",
        options: ["I have a cold", "I have a fever", "My throat hurts", "I need medicine"],
        correct: 1,
      },
      {
        q: "Dial 110 for…",
        options: ["the fire department", "an ambulance", "the police", "a taxi"],
        correct: 2,
      },
      {
        q: "'Please call an ambulance' =",
        options: [
          "けいさつ を よんで ください",
          "きゅうきゅうしゃ を よんで ください",
          "びょういん は どこ ですか",
          "たすけて ください",
        ],
        correct: 1,
      },
      {
        q: "こうばん means…",
        options: ["hospital", "police box", "pharmacy", "fire station"],
        correct: 1,
      },
      {
        q: "Translate: 'Where is the hospital?'",
        options: [
          "びょういん は どこ ですか。",
          "やっきょく は どこ ですか。",
          "こうばん は どこ ですか。",
          "びょういん を よんで ください。",
        ],
        correct: 0,
      },
    ],
  },
};
