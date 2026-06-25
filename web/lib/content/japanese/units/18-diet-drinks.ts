import type { Unit } from "../../types";

export const UNIT_DIET_DRINKS: Unit = {
  slug: "diet-drinks",
  stage: 4,
  order: 18,
  icon: "🍵",
  title: "Drinks & dietary needs",
  tagline: "Tea, sake, …は 食べられません, allergies.",
  badge: "tourist",
  lessons: [
    {
      slug: "diet-drinks-drinks",
      title: "Drinks — おちゃ, みず, ビール, にほんしゅ",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "What to drink in Tokyo",
          body: [
            "Soft options: <strong>おちゃ</strong> (green tea — often free), <strong>みず</strong> (water — brought automatically, also free), <strong>ウーロンちゃ</strong> (oolong tea, the standard non-alcoholic izakaya choice).",
            "Alcohol: <strong>ビール</strong> (beer), <strong>にほんしゅ</strong> (sake, written 日本酒 — note that in Japanese, 'sake' / お酒 means alcohol in general, so order rice wine as にほんしゅ), <strong>ワイン</strong> (wine), <strong>ハイボール</strong> (whisky highball — wildly popular).",
            "A first round at an izakaya almost always opens with <strong>とりあえず ビール</strong> — \"beer for now,\" the unofficial national catchphrase.",
          ],
          keyPoint:
            "おちゃ/みず are free. にほんしゅ = rice wine (お酒 alone = alcohol in general). とりあえず ビール = 'beer to start'.",
        },
        {
          type: "vocab",
          heading: "The drinks list",
          items: [
            { l1: "おちゃ", en: "green tea", note: "ocha — お茶; usually free." },
            { l1: "みず", en: "water", note: "mizu — 水; お冷 (ohiya) = ice water at restaurants." },
            { l1: "ウーロンちゃ", en: "oolong tea", note: "ūron-cha — the go-to soft drink at izakaya." },
            { l1: "ビール", en: "beer", note: "bīru — katakana; なまビール (nama) = draft beer." },
            { l1: "にほんしゅ", en: "sake (rice wine)", note: "nihonshu — 日本酒; お酒 alone = alcohol generally." },
            { l1: "ワイン", en: "wine", note: "wain — あか (red) / しろ (white)." },
            { l1: "ハイボール", en: "highball", note: "haibōru — whisky + soda; hugely popular." },
            { l1: "おさけ", en: "alcohol (general) / sake", note: "o-sake — お酒; the broad word for booze." },
            { l1: "とりあえず", en: "for now / to start", note: "toriaezu — 'toriaezu bīru' = beer first." },
          ],
        },
        {
          type: "dialogue",
          heading: "First round at the izakaya",
          setup: "You've just sat down with friends.",
          lines: [
            { speaker: "店員 (staff)", l1: "おのみものは？", en: "What would you like to drink?" },
            { speaker: "You", l1: "とりあえず なまビールを ふたつ おねがいします。", en: "Two draft beers to start, please." },
            { speaker: "Friend", l1: "わたしは ウーロンちゃに します。", en: "I'll have an oolong tea." },
            { speaker: "店員", l1: "おさけは いかがですか。", en: "How about some sake?" },
            { speaker: "You", l1: "あとで にほんしゅを おねがいします。", en: "Some sake later, please." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Order the drink",
          items: [
            {
              template: "とりあえず ___を ふたつ ください。",
              answer: "ビール",
              en: "Two beers to start, please.",
              options: ["ビール", "みず", "おちゃ", "ワイン"],
            },
            {
              template: "わたしは ウーロンちゃ___ します。",
              answer: "に",
              en: "I'll have an oolong tea.",
              options: ["に", "を", "は", "で"],
            },
            {
              template: "___（rice wine）を おねがいします。",
              answer: "にほんしゅ",
              en: "Sake, please.",
              options: ["にほんしゅ", "みず", "ハイボール", "おちゃ"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Two beers and one oolong tea, please.",
          reference: "ビールを ふたつと ウーロンちゃを ひとつ おねがいします。",
          hint: "ふたつ = two (things), ひとつ = one (thing); join with と.",
        },
      ],
    },
    {
      slug: "diet-drinks-dietary",
      title: "Dietary needs — は 食べられません & allergies",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Saying what you can't eat",
          body: [
            "To say \"I can't eat X,\" use <strong>〜は たべられません</strong> (…wa taberaremasen, the negative potential of たべる): <strong>にくは たべられません</strong> = \"I can't eat meat.\" The topic particle <strong>は</strong> highlights the off-limits item.",
            "For allergies, use <strong>〜アレルギーが あります</strong> (…arerugī ga arimasu): <strong>そばアレルギーが あります</strong> = \"I have a buckwheat allergy.\" This is the phrasing staff understand instantly.",
            "Helpful self-labels: <strong>ベジタリアン</strong> (vegetarian), <strong>ビーガン</strong> (vegan). Note that <strong>だし</strong> (dashi) stock is often made from fish (かつおぶし), so 'no meat' alone may not mean 'no fish' — say it explicitly.",
          ],
          keyPoint:
            "〜は たべられません = 'I can't eat …'. 〜アレルギーが あります = 'I'm allergic to …'. Watch out: だし often contains fish.",
        },
        {
          type: "vocab",
          heading: "Dietary phrases",
          items: [
            { l1: "たべられません", en: "(I) can't eat", note: "taberaremasen — negative potential of たべる." },
            { l1: "にく", en: "meat", note: "niku — 肉; 'niku wa taberaremasen'." },
            { l1: "さかな", en: "fish", note: "sakana — 魚; mention it separately from meat." },
            { l1: "たまご", en: "egg", note: "tamago — 卵." },
            { l1: "アレルギー", en: "allergy", note: "arerugī — '...arerugī ga arimasu'." },
            { l1: "そば", en: "buckwheat / soba", note: "soba — a common, serious allergen." },
            { l1: "ベジタリアン", en: "vegetarian", note: "bejitarian — 'bejitarian desu'." },
            { l1: "ビーガン", en: "vegan", note: "bīgan — stricter than vegetarian." },
            { l1: "だし", en: "soup stock", note: "dashi — 出汁; often fish-based, so ask." },
          ],
        },
        {
          type: "dialogue",
          heading: "Explaining your needs",
          setup: "You want to order carefully at a restaurant.",
          lines: [
            { speaker: "You", l1: "すみません、わたしは にくが たべられません。", en: "Excuse me, I can't eat meat." },
            { speaker: "店員 (staff)", l1: "おさかなは だいじょうぶですか。", en: "Is fish okay?" },
            { speaker: "You", l1: "さかなも たべられません。ベジタリアンです。", en: "I can't eat fish either. I'm vegetarian." },
            { speaker: "店員", l1: "では、やさいの ていしょくは いかがですか。", en: "Then how about the vegetable set meal?" },
            { speaker: "You", l1: "だしに さかなは はいっていますか。", en: "Is there fish in the stock?" },
            { speaker: "店員", l1: "こんぶだしなので だいじょうぶです。", en: "It's kelp stock, so it's fine." },
          ],
        },
        {
          type: "fillBlank",
          heading: "State your needs",
          items: [
            {
              template: "にくは ___。",
              answer: "たべられません",
              en: "I can't eat meat.",
              options: ["たべられません", "おいしいです", "おねがいします", "いります"],
            },
            {
              template: "そば___が あります。",
              answer: "アレルギー",
              en: "I have a buckwheat allergy.",
              options: ["アレルギー", "ていしょく", "だし", "やさい"],
            },
            {
              template: "わたしは ___です。(vegetarian)",
              answer: "ベジタリアン",
              en: "I'm vegetarian.",
              options: ["ベジタリアン", "ビール", "にほんしゅ", "おさけ"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "I can't eat meat. I have an egg allergy.",
          reference: "にくは たべられません。たまごアレルギーが あります。",
          hint: "は marks にく with たべられません; allergy = たまごアレルギーが あります.",
        },
      ],
    },
    {
      slug: "diet-drinks-group-kanpai",
      title: "Ordering for a group & かんぱい",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Drinking together",
          body: [
            "Japanese group dining is sociable: you order dishes to share for the table rather than one plate each. Useful counters: <strong>ひとつ</strong> (one), <strong>ふたつ</strong> (two), <strong>みっつ</strong> (three) for items.",
            "Never start drinking until the toast. Everyone raises a glass and says <strong>かんぱい</strong> (kanpai!, \"cheers!\"). Wait for it — drinking before かんぱい is a small faux pas.",
            "It's polite to pour for others, not yourself: top up a neighbor's glass and they'll return the favor. Hold the bottle with two hands when pouring for someone senior.",
          ],
          keyPoint:
            "Order to share. Wait for かんぱい before drinking. Pour for others, not yourself.",
        },
        {
          type: "vocab",
          heading: "Group ordering & toasting",
          items: [
            { l1: "かんぱい", en: "cheers! (toast)", note: "kanpai — 乾杯; wait for it before drinking." },
            { l1: "ひとつ", en: "one (item)", note: "hitotsu — generic counter." },
            { l1: "ふたつ", en: "two (items)", note: "futatsu — generic counter." },
            { l1: "みっつ", en: "three (items)", note: "mittsu — generic counter." },
            { l1: "とりわけ", en: "serving / sharing out", note: "toriwake — splitting shared dishes." },
            { l1: "おかわり", en: "a refill / seconds", note: "okawari — 'another one' of food/drink." },
            { l1: "いっしょに", en: "together", note: "issho ni — 一緒に." },
            { l1: "ぜんぶで", en: "in total", note: "zenbu de — 全部で; 'how much in total?'." },
            { l1: "じゃあ", en: "well then / so", note: "jā — casual conversational connector." },
          ],
        },
        {
          type: "dialogue",
          heading: "Ordering for the table",
          setup: "Three of you are settling in at an izakaya.",
          lines: [
            { speaker: "You", l1: "すみません、からあげを ふたつと えだまめを ひとつ おねがいします。", en: "Excuse me, two fried chicken and one edamame, please." },
            { speaker: "店員 (staff)", l1: "おのみものは いっしょに おもちしますか。", en: "Shall I bring the drinks together?" },
            { speaker: "You", l1: "はい、おねがいします。", en: "Yes, please." },
            { speaker: "Friend", l1: "みんな そろった？じゃあ…", en: "Is everyone ready? Then…" },
            { speaker: "All", l1: "かんぱい！", en: "Cheers!" },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Group dining check",
          questions: [
            {
              q: "When do you start drinking?",
              options: [
                "as soon as the drink arrives",
                "after everyone says かんぱい",
                "after the food arrives",
                "after paying",
              ],
              correct: 1,
            },
            {
              q: "「おかわり」 means…",
              options: ["the bill", "a refill / seconds", "cheers", "separately"],
              correct: 1,
            },
            {
              q: "It's polite to pour…",
              options: [
                "only your own glass",
                "for others, not yourself",
                "never — let staff do it",
                "only sake, never beer",
              ],
              correct: 1,
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Two fried chicken and one edamame, please. Cheers!",
          reference: "からあげを ふたつと えだまめを ひとつ おねがいします。かんぱい！",
          hint: "ふたつ / ひとつ are generic counters; join with と, then かんぱい!",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "The toast before drinking is…",
              options: ["いただきます", "かんぱい", "ごちそうさま", "おかわり"],
              correct: 1,
            },
            {
              q: "「ふたつ」 means…",
              options: ["one", "two", "three", "together"],
              correct: 1,
            },
            {
              q: "To ask for a refill you say…",
              options: ["おかわり", "おかいけい", "とりあえず", "ぜんぶで"],
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
        q: "Which drink is usually free at a restaurant?",
        options: ["ビール", "にほんしゅ", "みず", "ワイン"],
        correct: 2,
      },
      {
        q: "「にほんしゅ」 is…",
        options: ["beer", "sake (rice wine)", "oolong tea", "highball"],
        correct: 1,
      },
      {
        q: "「とりあえず ビール」 means…",
        options: ["no beer", "beer to start", "two beers", "beer is finished"],
        correct: 1,
      },
      {
        q: "'I can't eat meat' =",
        options: [
          "にくは たべられません。",
          "にくが すきです。",
          "にくを おねがいします。",
          "にくは おいしいです。",
        ],
        correct: 0,
      },
      {
        q: "To say you have a buckwheat allergy:",
        options: [
          "そばアレルギーが あります。",
          "そばが すきです。",
          "そばは おいしいです。",
          "そばを ください。",
        ],
        correct: 0,
      },
      {
        q: "Watch out: 「だし」 (stock) is often made from…",
        options: ["vegetables only", "fish", "tofu", "rice"],
        correct: 1,
      },
      {
        q: "'Vegetarian' is…",
        options: ["ビーガン", "ベジタリアン", "アレルギー", "ていしょく"],
        correct: 1,
      },
      {
        q: "The toast before drinking is…",
        options: ["いただきます", "かんぱい", "ごちそうさま", "とりあえず"],
        correct: 1,
      },
      {
        q: "「ふたつ」 means…",
        options: ["one", "two", "three", "a refill"],
        correct: 1,
      },
      {
        q: "Translate: 'Two beers and one oolong tea, please.'",
        options: [
          "ビールを ふたつと ウーロンちゃを ひとつ おねがいします。",
          "ビールは ふたつ ウーロンちゃを します。",
          "ふたつ ビールと ひとつ ウーロンちゃは ください。",
          "ビールを ひとつと ウーロンちゃを ふたつ いります。",
        ],
        correct: 0,
      },
    ],
  },
};
