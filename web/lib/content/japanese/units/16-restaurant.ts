import type { Unit } from "../../types";

export const UNIT_RESTAURANT: Unit = {
  slug: "restaurant",
  stage: 4,
  order: 16,
  icon: "🍜",
  title: "At the restaurant",
  tagline: "Ramen, …を おねがいします, お会計.",
  badge: "tourist",
  lessons: [
    {
      slug: "restaurant-entering",
      title: "Entering — なんめいさま & the ticket machine",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "How many in your party?",
          body: [
            "Walk into a Tokyo restaurant and the staff call <strong>いらっしゃいませ</strong> and then ask <strong>なんめいさまですか</strong> (nan-mei-sama desu ka?), \"how many people?\" Answer with a counter: <strong>ひとりです</strong> (one), <strong>ふたりです</strong> (two), <strong>さんにんです</strong> (three).",
            "Many ramen and gyudon shops use a <strong>けんばいき</strong> (kenbaiki, ticket vending machine) by the door. You pay the machine, it prints a <strong>しょくけん</strong> (meal ticket), and you hand the ticket to the staff. No money changes hands at the table.",
            "When seated you may be asked smoking or non-smoking, and pointed to a counter (<strong>カウンター</strong>) or table (<strong>テーブル</strong>).",
          ],
          keyPoint:
            "なんめいさまですか = 'how many people?' → ひとり/ふたり/さんにん + です. Ramen shops: buy a ticket at the けんばいき first.",
        },
        {
          type: "vocab",
          heading: "Getting seated",
          items: [
            { l1: "いらっしゃいませ", en: "welcome (to a shop)", note: "irasshaimase — staff greeting; you don't reply." },
            { l1: "なんめいさま", en: "how many people (polite)", note: "nan-mei-sama — 何名様; very polite counter." },
            { l1: "ひとり", en: "one person", note: "hitori — 一人." },
            { l1: "ふたり", en: "two people", note: "futari — 二人." },
            { l1: "さんにん", en: "three people", note: "san-nin — 三人; 4 = よにん (yo-nin)." },
            { l1: "けんばいき", en: "ticket vending machine", note: "kenbaiki — 券売機, common at ramen shops." },
            { l1: "しょくけん", en: "meal ticket", note: "shokuken — 食券; hand it to staff." },
            { l1: "メニュー", en: "menu", note: "menyū — katakana loanword." },
            { l1: "カウンター", en: "counter seat", note: "kauntā — solo diners often sit here." },
          ],
        },
        {
          type: "dialogue",
          heading: "Two for dinner",
          setup: "You and a friend walk into an izakaya in Shinjuku.",
          lines: [
            { speaker: "店員 (staff)", l1: "いらっしゃいませ。なんめいさまですか。", en: "Welcome. How many people?" },
            { speaker: "You", l1: "ふたりです。", en: "Two people." },
            { speaker: "店員", l1: "おたばこは すいますか。", en: "Do you smoke?" },
            { speaker: "You", l1: "いいえ、きんえんせきで おねがいします。", en: "No, non-smoking, please." },
            { speaker: "店員", l1: "かしこまりました。こちらへ どうぞ。", en: "Certainly. This way, please." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Say your party size",
          items: [
            {
              template: "___です。(2 people)",
              answer: "ふたり",
              en: "Two people.",
              options: ["ひとり", "ふたり", "さんにん", "よにん"],
            },
            {
              template: "ラーメンやで、まず ___で かいます。",
              answer: "けんばいき",
              en: "At a ramen shop, you buy first at the ticket machine.",
              options: ["けんばいき", "メニュー", "テーブル", "おかいけい"],
            },
            {
              template: "なんめいさまですか。— ___です。(1 person)",
              answer: "ひとり",
              en: "How many people? — One person.",
              options: ["ひとり", "ふたり", "さんにん", "カウンター"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Three people, non-smoking, please.",
          reference: "さんにんです。きんえんせきで おねがいします。",
          hint: "State the number + です, then きんえんせき (non-smoking seat) + で おねがいします.",
        },
      ],
    },
    {
      slug: "restaurant-ordering",
      title: "Ordering — …を おねがいします / …に します",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Two ways to order",
          body: [
            "To order food politely, use <strong>〜を おねがいします</strong> (…o onegai shimasu), \"…, please.\" It's a touch warmer than ください and perfect at a table: <strong>ラーメンを おねがいします</strong>.",
            "To say \"I'll have the …\" — i.e. to decide on a choice — use <strong>〜に します</strong> (…ni shimasu): <strong>わたしは ぎょうざに します</strong>, \"I'll have the gyoza.\" The particle に marks your decision.",
            "To get the staff's attention, call out <strong>すみません</strong> (sumimasen, \"excuse me\"). It's the all-purpose word for flagging a server.",
          ],
          keyPoint:
            "〜を おねがいします = '…, please.' · 〜に します = 'I'll have/go with ….' · すみません = 'excuse me' to call staff.",
        },
        {
          type: "vocab",
          heading: "On the menu",
          items: [
            { l1: "ラーメン", en: "ramen", note: "rāmen — katakana; しょうゆ/みそ/とんこつ are broths." },
            { l1: "ぎょうざ", en: "gyoza / dumplings", note: "gyōza — 餃子." },
            { l1: "ていしょく", en: "set meal", note: "teishoku — 定食; main + rice + miso soup + pickles." },
            { l1: "からあげ", en: "fried chicken", note: "kara-age — 唐揚げ; izakaya favorite." },
            { l1: "ごはん", en: "rice / a meal", note: "gohan — ご飯; also means 'meal'." },
            { l1: "おすすめ", en: "recommendation", note: "osusume — お勧め; 'what do you recommend?'" },
            { l1: "おねがいします", en: "please (request)", note: "onegai shimasu — warm, polite request." },
            { l1: "〜に します", en: "I'll have / decide on …", note: "ni shimasu — states your choice." },
            { l1: "すみません", en: "excuse me", note: "sumimasen — call staff; also 'sorry/thanks'." },
          ],
        },
        {
          type: "dialogue",
          heading: "Ordering ramen",
          setup: "You flag the server at a counter ramen shop.",
          lines: [
            { speaker: "You", l1: "すみません。", en: "Excuse me." },
            { speaker: "店員 (staff)", l1: "はい、ごちゅうもんは？", en: "Yes, what would you like?" },
            { speaker: "You", l1: "おすすめは なんですか。", en: "What do you recommend?" },
            { speaker: "店員", l1: "みそラーメンが にんきです。", en: "The miso ramen is popular." },
            { speaker: "You", l1: "じゃあ、みそラーメンに します。ぎょうざも おねがいします。", en: "Then I'll have the miso ramen. And gyoza too, please." },
            { speaker: "店員", l1: "かしこまりました。", en: "Certainly." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Order it right",
          items: [
            {
              template: "ラーメンを ___。",
              answer: "おねがいします",
              en: "Ramen, please.",
              options: ["おねがいします", "します", "です", "いります"],
            },
            {
              template: "わたしは ぎょうざ___ します。",
              answer: "に",
              en: "I'll have the gyoza.",
              options: ["に", "を", "は", "で"],
            },
            {
              template: "___、メニューを おねがいします。",
              answer: "すみません",
              en: "Excuse me, the menu please.",
              options: ["すみません", "おすすめ", "ていしょく", "ごはん"],
            },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the order",
          items: [
            { tokens: ["みそ", "ラーメン", "を", "おねがいします"], en: "Miso ramen, please." },
            { tokens: ["わたし", "は", "からあげ", "に", "します"], en: "I'll have the fried chicken." },
            { tokens: ["おすすめ", "は", "なん", "です", "か"], en: "What do you recommend?" },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Excuse me. I'll have the set meal, and a gyoza too, please.",
          reference: "すみません。ていしょくに します。ぎょうざも おねがいします。",
          hint: "すみません to flag staff, 〜に します for your choice, も + おねがいします for the add-on.",
        },
      ],
    },
    {
      slug: "restaurant-the-bill",
      title: "The bill — お会計 & ごちそうさま",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Asking for the check",
          body: [
            "When you're done, ask for the bill with <strong>おかいけいを おねがいします</strong> (o-kaikei o onegai shimasu) — おかいけい is written <strong>お会計</strong>. At an izakaya you may also hear the older, friendlier <strong>おあいそ</strong> (o-aiso).",
            "In most casual places you take the check slip to the register (<strong>レジ</strong>) by the door and pay there, rather than at the table. Cash is still king, though IC cards and カード (cards) are increasingly accepted.",
            "Before you eat say <strong>いただきます</strong> (itadakimasu); when you finish say <strong>ごちそうさまでした</strong> (gochisō-sama deshita), \"thank you for the meal.\" Staff love hearing it on the way out.",
          ],
          keyPoint:
            "お会計を おねがいします = 'the check, please.' Pay at the レジ. End with ごちそうさまでした.",
        },
        {
          type: "vocab",
          heading: "Paying & thanking",
          items: [
            { l1: "おかいけい", en: "the bill / check", note: "o-kaikei — お会計." },
            { l1: "おあいそ", en: "the check (izakaya, casual)", note: "o-aiso — older, friendly term." },
            { l1: "レジ", en: "register / checkout", note: "reji — katakana; pay here, by the door." },
            { l1: "げんきん", en: "cash", note: "genkin — 現金; still widely preferred." },
            { l1: "カード", en: "card", note: "kādo — credit card; 'kādo wa tsukaemasu ka?'." },
            { l1: "べつべつ", en: "separately (split bill)", note: "betsubetsu — 別々; 'pay separately'." },
            { l1: "いただきます", en: "(said before eating)", note: "itadakimasu — 'I gratefully receive'." },
            { l1: "ごちそうさまでした", en: "thank you for the meal", note: "gochisō-sama deshita — said after eating." },
          ],
        },
        {
          type: "dialogue",
          heading: "Paying and leaving",
          setup: "You finish your meal and call the server.",
          lines: [
            { speaker: "You", l1: "すみません、おかいけいを おねがいします。", en: "Excuse me, the check please." },
            { speaker: "店員 (staff)", l1: "はい、レジで おねがいします。", en: "Yes, please pay at the register." },
            { speaker: "You", l1: "カードは つかえますか。", en: "Can I use a card?" },
            { speaker: "店員", l1: "はい、つかえます。", en: "Yes, you can." },
            { speaker: "You", l1: "ごちそうさまでした。", en: "Thank you for the meal." },
            { speaker: "店員", l1: "ありがとうございました。", en: "Thank you very much." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Bill comprehension",
          questions: [
            {
              q: "How do you ask for the check politely?",
              options: [
                "いただきますを おねがいします。",
                "おかいけいを おねがいします。",
                "なんめいさまですか。",
                "おすすめは なんですか。",
              ],
              correct: 1,
            },
            {
              q: "You say 「ごちそうさまでした」…",
              options: ["before eating", "after eating", "to order", "to call staff"],
              correct: 1,
            },
            {
              q: "「べつべつで」 means you want to…",
              options: ["heat it up", "pay separately", "sit at the counter", "take it to go"],
              correct: 1,
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Excuse me, the check please. Can I use a card?",
          reference: "すみません、おかいけいを おねがいします。カードは つかえますか。",
          hint: "おかいけいを おねがいします for the check; は marks カード in the question つかえますか.",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "Which means 'the check, please'?",
              options: [
                "おかいけいを おねがいします",
                "いただきます",
                "なんめいさまですか",
                "おすすめは なんですか",
              ],
              correct: 0,
            },
            {
              q: "Said AFTER a meal:",
              options: ["いらっしゃいませ", "いただきます", "ごちそうさまでした", "すみません"],
              correct: 2,
            },
            {
              q: "You usually pay at the…",
              options: ["table", "レジ (register)", "けんばいき only", "カウンター"],
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
        q: "Staff ask 「なんめいさまですか」. They want to know…",
        options: ["your name", "how many people", "smoking or not", "your order"],
        correct: 1,
      },
      {
        q: "'Two people' is…",
        options: ["ひとり", "ふたり", "さんにん", "よにん"],
        correct: 1,
      },
      {
        q: "At a ramen shop you often buy a ticket first at the…",
        options: ["レジ", "けんばいき", "カウンター", "メニュー"],
        correct: 1,
      },
      {
        q: "To say 'Ramen, please' (warmly):",
        options: ["ラーメンに します", "ラーメンを おねがいします", "ラーメンは です", "ラーメンが いります"],
        correct: 1,
      },
      {
        q: "「ぎょうざに します」 means…",
        options: ["I'll have the gyoza", "no gyoza", "the gyoza is gone", "two gyoza"],
        correct: 0,
      },
      {
        q: "To get the server's attention you call out…",
        options: ["いらっしゃいませ", "すみません", "ごちそうさま", "いただきます"],
        correct: 1,
      },
      {
        q: "'The check, please' =",
        options: [
          "おかいけいを おねがいします",
          "おすすめを おねがいします",
          "メニューを おねがいします",
          "ごはんを おねがいします",
        ],
        correct: 0,
      },
      {
        q: "You say 「いただきます」…",
        options: ["after eating", "before eating", "when paying", "when leaving"],
        correct: 1,
      },
      {
        q: "To ask 'What do you recommend?':",
        options: [
          "おすすめは なんですか。",
          "おかいけいは なんですか。",
          "なんめいさまですか。",
          "テイクアウトですか。",
        ],
        correct: 0,
      },
      {
        q: "Translate: 'I'll have the set meal, and a fried chicken too, please.'",
        options: [
          "ていしょくに します。からあげも おねがいします。",
          "ていしょくを いります。からあげに します。",
          "ていしょくは ですか。からあげも ください。",
          "ていしょくで おねがいします。からあげは します。",
        ],
        correct: 0,
      },
    ],
  },
};
