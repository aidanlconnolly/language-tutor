import type { Unit } from "../../types";

export const UNIT_SHOPPING: Unit = {
  slug: "shopping",
  stage: 6,
  order: 25,
  icon: "🛍️",
  title: "Money & shopping",
  tagline: "いくら ですか, sizes, paying, IC cards.",
  badge: "tourist",
  lessons: [
    {
      slug: "shopping-prices",
      title: "いくら ですか — prices & 'this one, please'",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Yen prices and 'how much?'",
          body: [
            "Japan uses the <strong>yen (円)</strong>, read <em>えん (en)</em>. There are no cents — prices are whole numbers like 150円 (<em>ひゃく ごじゅう えん</em>) or 1,000円 (<em>せん えん</em>).",
            "To ask a price, point and say <strong>いくら ですか</strong> (<em>ikura desu ka</em>, \"how much is it?\"). The shopkeeper answers with a number + 円 + です.",
            "To buy, point and say <strong>これを ください</strong> (<em>kore o kudasai</em>, \"this one, please\"). <em>これ</em> = this, <em>それ</em> = that (near you), <em>あれ</em> = that over there.",
            "Shop staff greet you with <strong>いらっしゃいませ</strong> (<em>irasshaimase</em>, \"welcome\") — you don't reply, just browse.",
          ],
          keyPoint:
            "いくら ですか = how much is it? これを ください = this one, please. Prices are whole yen: 150円 = ひゃく ごじゅう えん.",
        },
        {
          type: "vocab",
          heading: "Numbers for prices",
          intro: "Big numbers stack in units of hundred (百), thousand (千), and ten-thousand (万).",
          items: [
            { l1: "円", en: "yen", note: "en — the currency unit, written after the number." },
            { l1: "百 (ひゃく)", en: "hundred", note: "hyaku — 300 = さんびゃく sanbyaku (sound change)." },
            { l1: "千 (せん)", en: "thousand", note: "sen — 3,000 = さんぜん sanzen." },
            { l1: "万 (まん)", en: "ten thousand", note: "man — 10,000 = いちまん ichiman, key Japanese unit." },
            { l1: "百円 (ひゃくえん)", en: "100 yen", note: "hyaku-en." },
            { l1: "五百円 (ごひゃくえん)", en: "500 yen", note: "go-hyaku-en." },
            { l1: "千円 (せんえん)", en: "1,000 yen", note: "sen-en." },
            { l1: "一万円 (いちまんえん)", en: "10,000 yen", note: "ichi-man-en — the largest common note." },
          ],
        },
        {
          type: "vocab",
          heading: "Shopping words",
          items: [
            { l1: "いくら", en: "how much", note: "ikura." },
            { l1: "これ / それ / あれ", en: "this / that / that over there", note: "kore / sore / are." },
            { l1: "ください", en: "please (give me)", note: "kudasai — after を o." },
            { l1: "いらっしゃいませ", en: "welcome (to a shop)", note: "irasshaimase — staff greeting." },
            { l1: "高い (たかい)", en: "expensive / high", note: "takai." },
            { l1: "安い (やすい)", en: "cheap", note: "yasui." },
            { l1: "お店 (おみせ)", en: "shop", note: "o-mise." },
            { l1: "袋 (ふくろ)", en: "bag", note: "fukuro — 「袋は いりません」 = no bag, please." },
          ],
        },
        {
          type: "dialogue",
          heading: "At a Tokyo souvenir stall in Asakusa",
          setup: "You spot a folding fan you like.",
          lines: [
            { speaker: "店員 (Staff)", l1: "いらっしゃいませ。", en: "Welcome." },
            { speaker: "You", l1: "すみません、これは いくら ですか。", en: "Excuse me, how much is this?" },
            { speaker: "店員 (Staff)", l1: "その 扇子は 千二百円 です。", en: "That fan is 1,200 yen." },
            { speaker: "You", l1: "じゃあ、これを ください。", en: "Then I'll take this one, please." },
            { speaker: "店員 (Staff)", l1: "ありがとうございます。袋は いりますか。", en: "Thank you. Do you need a bag?" },
            { speaker: "You", l1: "はい、おねがいします。", en: "Yes, please." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Price talk",
          questions: [
            {
              q: "How do you ask 'How much is it?'",
              options: ["なん ですか", "いくら ですか", "どこ ですか", "いつ ですか"],
              correct: 1,
            },
            {
              q: "You want to buy the item in front of you. You say…",
              qL1: "(point) ___ ください",
              options: ["これを", "あそこ", "いくら", "たかい"],
              correct: 0,
            },
            {
              q: "How is 1,000円 read?",
              options: ["ひゃくえん", "せんえん", "いちまんえん", "ごひゃくえん"],
              correct: 1,
            },
            {
              q: "'安い' means…",
              options: ["expensive", "cheap", "broken", "sold out"],
              correct: 1,
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Excuse me, how much is this? I'll take this one, please.",
          reference: "すみません、これは いくら ですか。これを ください。",
          hint: "Ask with いくら ですか, then buy with これを ください.",
        },
      ],
    },
    {
      slug: "shopping-clothes-sizes",
      title: "Clothes & sizes — Mサイズ and trying on",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Sizes and 'may I try it on?'",
          body: [
            "Clothing sizes use the English letters as katakana: <strong>Sサイズ</strong> (<em>esu saizu</em>), <strong>Mサイズ</strong> (<em>emu saizu</em>), <strong>Lサイズ</strong> (<em>eru saizu</em>). <em>サイズ</em> just means \"size.\"",
            "To ask to try something on: <strong>しちゃくしても いいですか</strong> (<em>shichaku shite mo ii desu ka</em>, \"may I try it on?\"). <em>試着 (しちゃく)</em> = trying on; <em>…ても いいですか</em> = \"is it okay if I…?\"",
            "Useful adjectives: <em>大きい (おおきい)</em> = big, <em>小さい (ちいさい)</em> = small, <em>ちょうどいい</em> = just right.",
            "The fitting room is the <strong>試着室 (しちゃくしつ)</strong>. Many Japanese shops ask you to remove your shoes and cover your face with a provided cloth.",
          ],
          keyPoint:
            "Mサイズ = size M. しちゃくしても いいですか = may I try it on? 大きい / 小さい / ちょうどいい = big / small / just right.",
        },
        {
          type: "vocab",
          heading: "Clothes & sizes",
          items: [
            { l1: "服 (ふく)", en: "clothes", note: "fuku." },
            { l1: "サイズ", en: "size", note: "saizu — from English." },
            { l1: "Mサイズ", en: "size M", note: "emu saizu; also Sサイズ esu, Lサイズ eru." },
            { l1: "試着 (しちゃく)", en: "trying on", note: "shichaku." },
            { l1: "試着室 (しちゃくしつ)", en: "fitting room", note: "shichaku-shitsu." },
            { l1: "色 (いろ)", en: "color", note: "iro." },
            { l1: "大きい (おおきい)", en: "big", note: "ookii." },
            { l1: "小さい (ちいさい)", en: "small", note: "chiisai." },
            { l1: "ちょうどいい", en: "just right", note: "choudo ii." },
            { l1: "別の色 (べつのいろ)", en: "a different color", note: "betsu no iro." },
          ],
        },
        {
          type: "vocab",
          heading: "Colors",
          items: [
            { l1: "白 (しろ)", en: "white", note: "shiro." },
            { l1: "黒 (くろ)", en: "black", note: "kuro." },
            { l1: "赤 (あか)", en: "red", note: "aka." },
            { l1: "青 (あお)", en: "blue", note: "ao." },
            { l1: "緑 (みどり)", en: "green", note: "midori." },
            { l1: "黄色 (きいろ)", en: "yellow", note: "kiiro." },
          ],
        },
        {
          type: "dialogue",
          heading: "At a Shibuya clothing shop",
          setup: "You found a shirt you like but it might be too small.",
          lines: [
            { speaker: "You", l1: "すみません、これの Mサイズは ありますか。", en: "Excuse me, do you have this in M?" },
            { speaker: "店員 (Staff)", l1: "はい、ございます。こちらです。", en: "Yes, we do. Here you are." },
            { speaker: "You", l1: "しちゃくしても いいですか。", en: "May I try it on?" },
            { speaker: "店員 (Staff)", l1: "はい、試着室は あちらです。", en: "Yes, the fitting room is over there." },
            { speaker: "You", l1: "(後で) ちょっと 小さいです。Lサイズは ありますか。", en: "(later) It's a bit small. Do you have an L?" },
            { speaker: "店員 (Staff)", l1: "はい、お持ちします。", en: "Yes, I'll bring it." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Fitting-room fill",
          items: [
            {
              template: "これの M ___ は ありますか。",
              answer: "サイズ",
              en: "Do you have this in M?",
              options: ["サイズ", "いろ", "ふく", "えん"],
            },
            {
              template: "しちゃく ___ いいですか。",
              answer: "しても",
              en: "May I try it on?",
              options: ["しても", "して", "ください", "です"],
            },
            {
              template: "ちょっと ___ です。Lサイズを ください。",
              answer: "小さい",
              en: "It's a bit small. An L, please.",
              options: ["小さい", "大きい", "安い", "高い"],
            },
            {
              template: "別の ___ は ありますか。",
              answer: "色",
              en: "Do you have a different color?",
              options: ["色", "服", "店", "袋"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "May I try it on? Do you have an L size?",
          reference: "しちゃくしても いいですか。Lサイズは ありますか。",
          hint: "Use しちゃくしても いいですか, then …は ありますか for 'do you have…?'",
        },
      ],
    },
    {
      slug: "shopping-paying",
      title: "Paying — cash, card, IC, tax & receipts",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "How to pay in Japan",
          body: [
            "At the register (<strong>レジ</strong>, <em>reji</em>), you'll be asked how you'll pay. Three options dominate: <strong>げんきん</strong> (現金, cash), <strong>カード</strong> (credit card), and <strong>IC</strong> — tap cards like <em>Suica</em> and <em>PASMO</em>, hugely common in Tokyo.",
            "The phrase: <strong>お支払いは どうなさいますか</strong> (<em>o-shiharai wa dou nasaimasu ka</em>, \"how will you pay?\"). You answer <em>げんきんで</em> (by cash) / <em>カードで</em> (by card) / <em>Suicaで</em> — the で marks the means.",
            "Prices are usually shown <strong>ぜいこみ</strong> (税込, tax-included) — Japan's consumption tax is 10% (8% on most food). If a tag says <em>税抜 (ぜいぬき)</em>, tax is added at the register.",
            "Keep your <strong>レシート</strong> (receipt). Tourists can often get tax-free (<em>免税 / めんぜい</em>) shopping by showing a passport at the counter.",
          ],
          keyPoint:
            "げんきんで / カードで / Suicaで = by cash / card / IC. ぜいこみ = tax included (10%). レシート = receipt.",
        },
        {
          type: "vocab",
          heading: "Paying vocabulary",
          items: [
            { l1: "レジ", en: "register / checkout", note: "reji." },
            { l1: "お支払い (おしはらい)", en: "payment", note: "o-shiharai." },
            { l1: "現金 (げんきん)", en: "cash", note: "genkin." },
            { l1: "カード", en: "credit card", note: "kaado." },
            { l1: "IC / Suica / PASMO", en: "IC tap card", note: "ai-shii — tap-to-pay, very common in Tokyo." },
            { l1: "税込 (ぜいこみ)", en: "tax included", note: "zeikomi." },
            { l1: "税抜 (ぜいぬき)", en: "tax not included", note: "zeinuki — tax added at register." },
            { l1: "レシート", en: "receipt", note: "reshiito." },
            { l1: "免税 (めんぜい)", en: "tax-free / duty-free", note: "menzei — for tourists with a passport." },
            { l1: "おつり", en: "change (money back)", note: "o-tsuri." },
          ],
        },
        {
          type: "conjugation",
          heading: "Saying how you'll pay — the で pattern",
          verb: "…で 払う (はらう)",
          meaning: "to pay by (a means)",
          intro: "Attach で to the payment method to say 'by ___'. The staff question and your reply line up neatly.",
          tenses: [
            {
              name: "Staff asks",
              forms: [
                { person: "お支払いは どうなさいますか。", form: "どう…", en: "How will you pay?" },
                { person: "ぜんぶで 三千円 です。", form: "ぜんぶで", en: "It's 3,000 yen in total." },
              ],
            },
            {
              name: "You answer (…で = by…)",
              forms: [
                { person: "現金で おねがいします。", form: "げんきんで", en: "By cash, please." },
                { person: "カードで おねがいします。", form: "カードで", en: "By card, please." },
                { person: "Suicaで おねがいします。", form: "Suicaで", en: "By Suica, please." },
              ],
            },
          ],
        },
        {
          type: "dialogue",
          heading: "At a convenience store register",
          setup: "You're buying a bento and a drink at a Tokyo konbini.",
          lines: [
            { speaker: "店員 (Staff)", l1: "ぜんぶで 七百八十円 です。お支払いは どうなさいますか。", en: "That's 780 yen total. How will you pay?" },
            { speaker: "You", l1: "Suicaで おねがいします。", en: "By Suica, please." },
            { speaker: "店員 (Staff)", l1: "では、こちらに タッチして ください。", en: "Then please tap here." },
            { speaker: "You", l1: "これは ぜいこみ ですか。", en: "Is this tax-included?" },
            { speaker: "店員 (Staff)", l1: "はい、税込です。レシートは ご利用ですか。", en: "Yes, tax-included. Would you like a receipt?" },
            { speaker: "You", l1: "はい、おねがいします。", en: "Yes, please." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Checkout fill",
          items: [
            {
              template: "現金 ___ おねがいします。",
              answer: "で",
              en: "By cash, please.",
              options: ["で", "を", "は", "に"],
            },
            {
              template: "これは ___ ですか。(tax included?)",
              answer: "ぜいこみ",
              en: "Is this tax-included?",
              options: ["ぜいこみ", "げんきん", "レシート", "おつり"],
            },
            {
              template: "___ で おねがいします。(tap card)",
              answer: "Suica",
              en: "By Suica, please.",
              options: ["Suica", "レジ", "おつり", "免税"],
            },
            {
              template: "___ は いりますか。(the receipt)",
              answer: "レシート",
              en: "Do you need the receipt?",
              options: ["レシート", "サイズ", "袋", "色"],
            },
          ],
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "'By card, please' =",
              options: ["カードを ください", "カードで おねがいします", "カードは いくら", "カードが あります"],
              correct: 1,
            },
            {
              q: "税込 (ぜいこみ) means…",
              options: ["tax not included", "tax included", "tax-free", "no change"],
              correct: 1,
            },
            {
              q: "Suica and PASMO are examples of…",
              options: ["cash", "receipts", "IC tap cards", "fitting rooms"],
              correct: 2,
            },
            {
              q: "Translate: 'By cash, please.'",
              options: ["現金で おねがいします", "現金を ください", "現金は いくら ですか", "現金が ほしいです"],
              correct: 0,
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
        q: "How do you ask 'How much is it?'",
        options: ["どこ ですか", "いくら ですか", "なん ですか", "いつ ですか"],
        correct: 1,
      },
      {
        q: "'This one, please' (pointing) =",
        options: ["これを ください", "あれは いくら", "それが すき", "ここに ください"],
        correct: 0,
      },
      {
        q: "How is 1,000円 read?",
        options: ["ひゃくえん", "せんえん", "いちまんえん", "ごひゃくえん"],
        correct: 1,
      },
      {
        q: "'安い (やすい)' means…",
        options: ["expensive", "cheap", "big", "small"],
        correct: 1,
      },
      {
        q: "'May I try it on?' =",
        options: ["しちゃくしても いいですか", "サイズは なん ですか", "いくら ですか", "袋は いりますか"],
        correct: 0,
      },
      {
        q: "'Mサイズ' is read…",
        options: ["maru saizu", "emu saizu", "eru saizu", "esu saizu"],
        correct: 1,
      },
      {
        q: "You want to pay with a tap card. You say…",
        options: ["現金で おねがいします", "カードで おねがいします", "Suicaで おねがいします", "レシートを ください"],
        correct: 2,
      },
      {
        q: "税込 (ぜいこみ) means the price…",
        options: ["excludes tax", "includes tax", "is a discount", "is tax-free"],
        correct: 1,
      },
      {
        q: "What is 'おつり'?",
        options: ["the receipt", "the change you get back", "a credit card", "the fitting room"],
        correct: 1,
      },
      {
        q: "Translate: 'It's a bit small. Do you have an L?'",
        options: [
          "ちょっと 大きいです。Sサイズは ありますか。",
          "ちょっと 小さいです。Lサイズは ありますか。",
          "ちょっと 高いです。安いのは ありますか。",
          "ちょっと いいです。これを ください。",
        ],
        correct: 1,
      },
    ],
  },
};
