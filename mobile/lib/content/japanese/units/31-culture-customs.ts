import type { Unit } from "../../types";

export const UNIT_CULTURE_CUSTOMS: Unit = {
  slug: "culture-customs",
  stage: 7,
  order: 31,
  icon: "⛩️",
  title: "Customs & etiquette",
  tagline: "Shoes, the onsen, gift-giving, shrine etiquette.",
  badge: "culture",
  lessons: [
    {
      slug: "culture-customs-shoes-home",
      title: "Shoes off & visiting a home",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "The genkan is a threshold with rules",
          body: [
            "Almost every Japanese home, and many traditional restaurants, ryokan, temples and clinics, has a <strong>げんかん</strong> (玄関) — a sunken entryway where you remove your shoes. Stepping onto the raised floor in outdoor shoes is a real faux pas.",
            "Take your shoes off in the genkan, then point the toes back toward the door (a small courtesy). Slip into the slippers usually provided. <strong>Important: take slippers off before stepping on tatami</strong> (straw mats) — tatami is socks-only.",
            "Many homes keep separate <strong>toilet slippers</strong> by the bathroom. Switch into them there and — crucially — remember to switch back. Walking back into the living room in toilet slippers is the classic visitor's mistake.",
            "When you step inside, say <strong>おじゃまします</strong> ('I'll be intruding / pardon the intrusion'). When you leave, <strong>おじゃましました</strong>.",
          ],
          tip: {
            label: "Toes to the door",
            body: "After stepping up, kneel and turn your shoes so the toes face the exit. It's a quiet, well-mannered touch the host will notice — and it makes leaving smooth.",
          },
          keyPoint:
            "Shoes off at the genkan; slippers off on tatami; switch into (and out of) toilet slippers. Say おじゃまします entering, おじゃましました leaving.",
        },
        {
          type: "vocab",
          heading: "Home-visit vocabulary",
          items: [
            { l1: "げんかん", en: "entryway (where shoes come off)", note: "genkan — 玄関." },
            { l1: "くつ を ぬぐ", en: "to take off one's shoes", note: "kutsu o nugu — 靴を脱ぐ." },
            { l1: "スリッパ", en: "slippers", note: "surippa — not worn on tatami." },
            { l1: "たたみ", en: "tatami (straw-mat flooring)", note: "tatami — 畳; socks only." },
            { l1: "トイレの スリッパ", en: "toilet slippers", note: "toire no surippa — switch back after!" },
            { l1: "おじゃまします", en: "pardon the intrusion (entering a home)", note: "ojama shimasu — お邪魔します." },
            { l1: "おじゃましました", en: "thanks for having me (leaving)", note: "ojama shimashita." },
            { l1: "どうぞ おあがり ください", en: "please come in / step up", note: "dōzo o-agari kudasai — what the host says." },
            { l1: "しつれいします", en: "excuse me (entering/leaving a room)", note: "shitsurei shimasu — 失礼します." },
          ],
        },
        {
          type: "dialogue",
          heading: "Arriving at a friend's home",
          setup: "You're invited to your colleague's apartment for dinner.",
          lines: [
            { speaker: "Host", l1: "いらっしゃい！どうぞ、お上がりください。", en: "Welcome! Please, come on in." },
            { speaker: "You", l1: "ありがとうございます。お邪魔します。", en: "Thank you. Pardon the intrusion." },
            { speaker: "Host", l1: "スリッパ、どうぞ。", en: "Here, please use the slippers." },
            { speaker: "You", l1: "あ、畳ではスリッパを脱ぎますね。", en: "Ah, I take the slippers off on the tatami, right." },
            { speaker: "Host", l1: "そうそう、よくご存じですね。", en: "Exactly — you know your stuff!" },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Genkan etiquette",
          questions: [
            {
              q: "You enter a Japanese home. Where do you take off your shoes?",
              options: ["In the living room", "At the genkan", "On the tatami", "You keep them on"],
              correct: 1,
            },
            {
              q: "You're given slippers, then walk onto a tatami room. You should:",
              options: [
                "Keep the slippers on",
                "Take the slippers off (tatami is socks-only)",
                "Put on toilet slippers",
                "Put your shoes back on",
              ],
              correct: 1,
            },
            {
              q: "The classic visitor's mistake is:",
              options: [
                "Saying おじゃまします",
                "Pointing shoe toes to the door",
                "Walking back into the room in toilet slippers",
                "Taking shoes off at the genkan",
              ],
              correct: 2,
              fb: "Always switch out of toilet slippers when you leave the bathroom.",
            },
            {
              q: "What do you say as you step inside someone's home?",
              options: ["いただきます", "おじゃまします", "ごちそうさま", "ただいま"],
              correct: 1,
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Thank you. Pardon the intrusion.",
          reference: "ありがとうございます。おじゃまします。",
          hint: "おじゃまします is the set phrase for entering a home.",
        },
      ],
    },
    {
      slug: "culture-customs-onsen",
      title: "The onsen & sentō",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Bathing is a ritual, not just a wash",
          body: [
            "An <strong>おんせん</strong> (温泉) is a natural hot spring; a <strong>せんとう</strong> (銭湯) is a public neighborhood bathhouse. Both follow the same sacred rule: <strong>you wash thoroughly *before* getting in the bath</strong>. The communal water is for soaking clean, not for cleaning.",
            "The flow: undress fully in the changing room (swimsuits are not worn), wash and rinse at the seated shower stations, then enter the bath. There's no soap in the tub.",
            "The small <strong>てぬぐい</strong> (hand towel) comes with you to the bath area for modesty and washing — but it must <strong>not touch the bath water</strong>. People rest it on their head or on the edge.",
            "Tie up long hair so it doesn't dip in. Keep voices low and don't swim or splash. Tattoos are traditionally restricted at some facilities, though this is gradually relaxing; tattoo-friendly onsen and cover stickers exist.",
          ],
          tip: {
            label: "Towel on the head",
            body: "That iconic image of someone soaking with a folded towel on their head? Practical: it keeps the towel out of the water while staying handy. Never wring it into the bath.",
          },
          keyPoint:
            "Wash fully BEFORE entering. No swimsuit, no soap in the tub, towel never touches the water, voices low.",
        },
        {
          type: "vocab",
          heading: "Onsen vocabulary",
          items: [
            { l1: "おんせん", en: "hot spring", note: "onsen — 温泉." },
            { l1: "せんとう", en: "public bathhouse", note: "sentō — 銭湯." },
            { l1: "だついじょ", en: "changing room", note: "datsuijo — 脱衣所." },
            { l1: "からだ を あらう", en: "to wash one's body (before bathing)", note: "karada o arau — 体を洗う." },
            { l1: "ゆ", en: "(hot) bath water", note: "yu — 湯; お湯 (o-yu) = hot water." },
            { l1: "てぬぐい", en: "small hand towel", note: "tenugui — 手ぬぐい; keep it out of the water." },
            { l1: "おとこゆ／おんなゆ", en: "men's bath / women's bath", note: "otokoyu / onnayu — 男湯／女湯." },
            { l1: "のぼせる", en: "to get dizzy/overheated from the bath", note: "noboseru — take a break if you do." },
            { l1: "いれずみ／タトゥー", en: "tattoo", note: "irezumi / tatū — sometimes restricted; check first." },
          ],
        },
        {
          type: "dialogue",
          heading: "First time at an onsen",
          setup: "A friend explains the rules before you go in.",
          lines: [
            { speaker: "Friend", l1: "まず、脱衣所で全部脱いでね。水着はだめだよ。", en: "First, undress completely in the changing room. No swimsuits." },
            { speaker: "You", l1: "わかった。お湯に入る前に体を洗うんだよね？", en: "Got it. I wash my body before getting in the bath, right?" },
            { speaker: "Friend", l1: "そうそう。あと、手ぬぐいはお湯につけないでね。", en: "Exactly. Also, don't let the towel touch the water." },
            { speaker: "You", l1: "頭の上に置けばいいんだね。", en: "I just put it on my head, then." },
            { speaker: "Friend", l1: "うん。のぼせたら、少し休んでね。", en: "Yep. If you feel dizzy, take a little break." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Onsen rules fill-in",
          items: [
            {
              template: "お湯に入る前に、体を ___ 。",
              answer: "あらいます",
              en: "Before getting in the bath, you wash your body.",
              options: ["あらいます", "ぬぎます", "たべます", "ねます"],
            },
            {
              template: "手ぬぐいは お湯に ___ ください。",
              answer: "つけないで",
              en: "Please don't let the towel touch the water.",
              options: ["つけないで", "あらって", "いれて", "のんで"],
            },
            {
              template: "温泉では ___ を着ません。",
              answer: "みずぎ",
              en: "At an onsen you don't wear a swimsuit.",
              options: ["みずぎ", "くつ", "スリッパ", "コート"],
            },
            {
              template: "服を脱ぐところは ___ です。",
              answer: "だついじょ",
              en: "The place to undress is the changing room.",
              options: ["だついじょ", "げんかん", "おんなゆ", "たたみ"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Before getting in the bath, please wash your body.",
          reference: "お湯に入る前に、体を洗ってください。",
          hint: "Use 〜前に for 'before' and the て-form + ください for the request.",
        },
      ],
    },
    {
      slug: "culture-customs-gifts-shrines",
      title: "Gift-giving & shrine etiquette",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Omiyage and a quiet bow at the shrine",
          body: [
            "<strong>おみやげ</strong> (お土産) — a souvenir, usually local food, brought back from a trip for coworkers, friends, or family — is a warm, expected gesture. Individually wrapped regional sweets are the classic choice. A small gift when visiting a home (<strong>てみやげ</strong>, 手土産) is likewise appreciated.",
            "When giving a gift, a touch of modesty is customary: <strong>つまらない ものですが…</strong> ('it's just a little something…') or the softer <strong>ほんの きもち です</strong> ('just a small token of my feelings'). Offer and receive gifts with both hands.",
            "At a Shintō shrine (<strong>じんじゃ</strong>, 神社): bow slightly at the <strong>とりい</strong> gate, purify hands and mouth at the <strong>てみずや</strong> water basin, then at the hall — <strong>two bows, two claps, one bow</strong> (二礼二拍手一礼), tossing a coin in the offering box first. At a Buddhist <strong>おてら</strong> (temple) you do <em>not</em> clap — you press palms together quietly (合掌) instead.",
          ],
          tip: {
            label: "Both hands, always",
            body: "Whether handing over <em>omiyage</em>, a business card, or money at a register tray, two hands signals respect. Receiving with both hands and a small bow completes the exchange.",
          },
          keyPoint:
            "おみやげ = travel souvenir; give/receive with both hands. Shrine: 2 bows, 2 claps, 1 bow. Temple: palms together, no clapping.",
        },
        {
          type: "vocab",
          heading: "Gifts & shrine vocabulary",
          items: [
            { l1: "おみやげ", en: "souvenir (brought back from a trip)", note: "omiyage — お土産." },
            { l1: "てみやげ", en: "a small gift when visiting someone", note: "temiyage — 手土産." },
            { l1: "ほんの きもち です", en: "just a small token (when giving a gift)", note: "honno kimochi desu — modest phrase." },
            { l1: "じんじゃ", en: "Shintō shrine", note: "jinja — 神社; gate is the 鳥居 (torii)." },
            { l1: "おてら", en: "Buddhist temple", note: "o-tera — お寺; no clapping here." },
            { l1: "おまいり", en: "a visit/prayer at a shrine or temple", note: "o-mairi — お参り." },
            { l1: "てみずや", en: "water basin for purifying hands/mouth", note: "temizuya — 手水舎." },
            { l1: "おさいせん", en: "offering coin (in the box)", note: "o-saisen — お賽銭." },
            { l1: "おみくじ", en: "paper fortune (drawn at a shrine)", note: "o-mikuji — おみくじ." },
          ],
        },
        {
          type: "dialogue",
          heading: "Bringing back omiyage",
          setup: "You return from a weekend in Kyoto with sweets for the office.",
          lines: [
            { speaker: "You", l1: "京都のお土産です。ほんの気持ちですが、どうぞ。", en: "Souvenirs from Kyoto. Just a small token — please." },
            { speaker: "Coworker", l1: "わあ、ありがとうございます！八つ橋ですね。", en: "Wow, thank you! Yatsuhashi, right." },
            { speaker: "You", l1: "はい。みなさんでどうぞ。", en: "Yes. Please share them with everyone." },
            { speaker: "Coworker", l1: "気をつかわせてすみません。いただきます。", en: "Sorry you went to the trouble. I'll gladly have one." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Customs check",
          questions: [
            {
              q: "At a Shintō shrine's main hall, the worship sequence is:",
              options: [
                "Clap three times",
                "Two bows, two claps, one bow",
                "Bow once and leave",
                "Palms together, no clapping",
              ],
              correct: 1,
            },
            {
              q: "At a Buddhist temple, you should:",
              options: [
                "Clap twice loudly",
                "Press palms together quietly, no clapping",
                "Whistle",
                "Bow two times and clap",
              ],
              correct: 1,
              fb: "Clapping is for shrines; at temples you join your palms in 合掌 silently.",
            },
            {
              q: "おみやげ are:",
              options: [
                "shoes left at the door",
                "souvenirs (often food) brought back from a trip",
                "shrine fortunes",
                "toilet slippers",
              ],
              correct: 1,
            },
            {
              q: "When handing someone a gift or business card, you should use:",
              options: ["one hand", "both hands", "your left hand only", "a tray only"],
              correct: 1,
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "These are souvenirs from Kyoto. It's just a small token, please.",
          reference: "京都のお土産です。ほんの気持ちですが、どうぞ。",
          hint: "お土産 + the modest ほんの気持ちですが before どうぞ.",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "Shrine worship sequence:",
              options: ["1 bow, 1 clap", "2 bows, 2 claps, 1 bow", "3 claps", "palms together only"],
              correct: 1,
            },
            {
              q: "At a temple you do NOT:",
              options: ["press palms together", "bow", "clap your hands", "offer a coin"],
              correct: 2,
            },
            {
              q: "A modest phrase when giving a gift is:",
              options: ["おじゃまします", "ほんの気持ちです", "お疲れさま", "そろそろ"],
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
        q: "Where do you take off your shoes when entering a Japanese home?",
        options: ["the tatami room", "the genkan (玄関)", "the living room", "the kitchen"],
        correct: 1,
      },
      {
        q: "On tatami flooring you should wear:",
        options: ["slippers", "shoes", "toilet slippers", "just socks (no slippers)"],
        correct: 3,
      },
      {
        q: "You say ___ as you enter someone's home.",
        options: ["いただきます", "おじゃまします", "そろそろ", "ただいま"],
        correct: 1,
      },
      {
        q: "The single most important onsen rule is:",
        options: [
          "wear a swimsuit",
          "wash your body fully BEFORE getting in",
          "bring soap into the tub",
          "splash to stay cool",
        ],
        correct: 1,
      },
      {
        q: "The small towel (てぬぐい) at an onsen must:",
        options: [
          "soak in the bath water",
          "never touch the bath water",
          "be left in the changing room",
          "be worn as a swimsuit",
        ],
        correct: 1,
      },
      {
        q: "おみやげ are:",
        options: ["entryway slippers", "souvenirs from a trip", "shrine coins", "hot springs"],
        correct: 1,
      },
      {
        q: "Gifts and business cards should be offered with:",
        options: ["one hand", "both hands", "a chopstick", "the left hand only"],
        correct: 1,
      },
      {
        q: "Worship at a Shintō shrine's main hall:",
        options: ["2 bows, 2 claps, 1 bow", "3 claps", "1 bow only", "palms together, no clap"],
        correct: 0,
      },
      {
        q: "At a Buddhist temple you:",
        options: ["clap twice", "press palms together quietly, no clapping", "whistle", "bow three times and clap"],
        correct: 1,
      },
      {
        q: "Translate the modest gift phrase 'ほんの気持ちです':",
        options: [
          "'Pardon the intrusion.'",
          "'Just a small token (of my feelings).'",
          "'Thanks for the meal.'",
          "'Take care.'",
        ],
        correct: 1,
      },
    ],
  },
};
