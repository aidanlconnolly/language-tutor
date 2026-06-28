import type { Unit } from "../../types";

export const UNIT_FOOD_VOCAB: Unit = {
  slug: "food-vocab",
  stage: 4,
  order: 17,
  icon: "🍱",
  title: "Food vocab deep dive",
  tagline: "Sushi, meats, vegetables, the meals of the day.",
  badge: "tourist",
  lessons: [
    {
      slug: "food-vocab-sushi-seafood",
      title: "Sushi, sashimi & seafood",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Reading a sushi menu",
          body: [
            "<strong>すし</strong> (sushi, written 寿司) is vinegared rice with a topping; <strong>さしみ</strong> (sashimi, 刺身) is the raw fish alone, no rice. <strong>ネタ</strong> (neta) is the topping that sits on the rice.",
            "Knowing a handful of fish names lets you read any conveyor-belt (<strong>かいてんずし</strong>, kaiten-zushi) menu: <strong>まぐろ</strong> (tuna), <strong>さけ</strong> (salmon), <strong>えび</strong> (shrimp), <strong>たまご</strong> (sweet egg).",
            "Counter sushi is ordered by the piece; <strong>かん</strong> (kan) is the counter for sushi pieces — <em>まぐろ にかん</em> = two pieces of tuna.",
          ],
          keyPoint:
            "すし = rice + topping · さしみ = raw fish only · かいてんずし = conveyor-belt sushi. Learn the fish names.",
        },
        {
          type: "vocab",
          heading: "At the sushi counter",
          items: [
            { l1: "すし", en: "sushi", note: "sushi — 寿司; rice + topping." },
            { l1: "さしみ", en: "sashimi (raw fish, no rice)", note: "sashimi — 刺身." },
            { l1: "まぐろ", en: "tuna", note: "maguro — 鮪; とろ (toro) = fatty tuna." },
            { l1: "さけ", en: "salmon", note: "sake — 鮭; the same letters as 'sake' the drink." },
            { l1: "えび", en: "shrimp / prawn", note: "ebi — 海老." },
            { l1: "いか", en: "squid", note: "ika — 烏賊." },
            { l1: "たまご", en: "(sweet) egg", note: "tamago — 卵; the omelet-topped piece." },
            { l1: "しょうゆ", en: "soy sauce", note: "shōyu — 醤油." },
            { l1: "わさび", en: "wasabi", note: "wasabi — 山葵; 'sabi nuki' = without wasabi." },
          ],
        },
        {
          type: "dialogue",
          heading: "Ordering at a sushi counter",
          setup: "You sit at the counter at a small Tsukiji sushi shop.",
          lines: [
            { speaker: "板前 (chef)", l1: "いらっしゃい。なにに しますか。", en: "Welcome. What would you like?" },
            { speaker: "You", l1: "まぐろを にかん おねがいします。", en: "Two pieces of tuna, please." },
            { speaker: "板前", l1: "はい。わさびは いれますか。", en: "Sure. Shall I add wasabi?" },
            { speaker: "You", l1: "すこしで おねがいします。", en: "A little, please." },
            { speaker: "板前", l1: "あと、おすすめは さけです。", en: "Also, I recommend the salmon." },
            { speaker: "You", l1: "じゃあ、さけも おねがいします。", en: "Then salmon too, please." },
          ],
        },
        {
          type: "listen",
          heading: "Catch the fish",
          intro: "Listen and pick the English meaning.",
          items: [
            { l1: "まぐろ", en: "tuna", options: ["salmon", "tuna", "shrimp", "squid"], correct: 1 },
            { l1: "えび", en: "shrimp", options: ["egg", "squid", "shrimp", "tuna"], correct: 2 },
            { l1: "たまご", en: "sweet egg", options: ["sweet egg", "salmon", "soy sauce", "wasabi"], correct: 0 },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Two pieces of tuna and a salmon, please.",
          reference: "まぐろを にかんと さけを おねがいします。",
          hint: "にかん = two pieces; join with と, then おねがいします.",
        },
      ],
    },
    {
      slug: "food-vocab-meats-veg",
      title: "Meats, vegetables & rice dishes",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Beyond sushi",
          body: [
            "The big three meats are <strong>ぎゅうにく</strong> (beef, 牛肉), <strong>ぶたにく</strong> (pork, 豚肉), and <strong>とりにく</strong> (chicken, 鶏肉) — each is just the animal + <strong>にく</strong> (niku, meat).",
            "Everyday rice dishes are built on <strong>ごはん</strong> (cooked rice): <strong>ぎゅうどん</strong> (beef bowl), <strong>カレーライス</strong> (curry rice), <strong>おにぎり</strong> (rice ball). <strong>どんぶり / どん</strong> means a 'rice bowl' dish topped with something.",
            "Common vegetables: <strong>やさい</strong> (vegetables, 野菜), <strong>キャベツ</strong> (cabbage), <strong>ねぎ</strong> (green onion), <strong>だいこん</strong> (daikon radish).",
          ],
          keyPoint:
            "animal + にく = its meat (ぎゅう/ぶた/とり). どん = a topped rice bowl. やさい = vegetables.",
        },
        {
          type: "vocab",
          heading: "Meats, veg & rice bowls",
          items: [
            { l1: "ぎゅうにく", en: "beef", note: "gyūniku — 牛肉." },
            { l1: "ぶたにく", en: "pork", note: "butaniku — 豚肉." },
            { l1: "とりにく", en: "chicken", note: "toriniku — 鶏肉." },
            { l1: "さかな", en: "fish", note: "sakana — 魚 (the food); にく vs さかな." },
            { l1: "やさい", en: "vegetables", note: "yasai — 野菜." },
            { l1: "ぎゅうどん", en: "beef bowl", note: "gyūdon — 牛丼; the Yoshinoya classic." },
            { l1: "カレーライス", en: "curry rice", note: "karē raisu — Japanese-style curry." },
            { l1: "とんかつ", en: "breaded pork cutlet", note: "tonkatsu — とんかつ; とん = pork." },
            { l1: "ごはん", en: "cooked rice / meal", note: "gohan — ご飯." },
          ],
        },
        {
          type: "dialogue",
          heading: "At a gyudon shop",
          setup: "You order at a Yoshinoya-style beef-bowl counter.",
          lines: [
            { speaker: "店員 (staff)", l1: "ごちゅうもんは？", en: "What would you like?" },
            { speaker: "You", l1: "ぎゅうどんの なみを おねがいします。", en: "A regular-size beef bowl, please." },
            { speaker: "店員", l1: "おのみものは？", en: "Anything to drink?" },
            { speaker: "You", l1: "おみそしるも おねがいします。", en: "A miso soup too, please." },
            { speaker: "店員", l1: "やさいは いりますか。", en: "Would you like vegetables?" },
            { speaker: "You", l1: "はい、おねがいします。", en: "Yes, please." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Build the food word",
          items: [
            {
              template: "ぎゅう___（beef）",
              answer: "にく",
              en: "beef",
              options: ["にく", "どん", "ごはん", "さかな"],
            },
            {
              template: "とり___（chicken）",
              answer: "にく",
              en: "chicken",
              options: ["にく", "やさい", "さかな", "ライス"],
            },
            {
              template: "カレー___（curry rice）",
              answer: "ライス",
              en: "curry rice",
              options: ["ライス", "にく", "どん", "さかな"],
            },
            {
              template: "ぎゅう___（beef bowl）",
              answer: "どん",
              en: "beef bowl",
              options: ["どん", "にく", "やさい", "ごはん"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "A beef bowl and a miso soup, please.",
          reference: "ぎゅうどんと おみそしるを おねがいします。",
          hint: "Join the two items with と, then を おねがいします.",
        },
      ],
    },
    {
      slug: "food-vocab-tastes-meals",
      title: "Tastes & meals of the day",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Talking about taste & timing",
          body: [
            "The all-purpose compliment is <strong>おいしい</strong> (oishii, delicious). Taste adjectives include <strong>あまい</strong> (sweet), <strong>からい</strong> (spicy/salty-hot), <strong>すっぱい</strong> (sour), and <strong>しょっぱい</strong> (salty).",
            "The three meals are <strong>あさごはん</strong> (asa-gohan, breakfast — literally 'morning rice'), <strong>ひるごはん</strong> (hiru-gohan, lunch — 'noon rice'), and <strong>ばんごはん</strong> (ban-gohan, dinner — 'evening rice'). Note how each is a time word + ごはん.",
            "To say you're hungry: <strong>おなかが すきました</strong>; full: <strong>おなかが いっぱいです</strong>.",
          ],
          keyPoint:
            "おいしい = delicious. Meals = time + ごはん (あさ/ひる/ばん). おなかが すいた = hungry.",
        },
        {
          type: "vocab",
          heading: "Tastes & meals",
          items: [
            { l1: "おいしい", en: "delicious", note: "oishii — い-adjective; the go-to compliment." },
            { l1: "あまい", en: "sweet", note: "amai — 甘い." },
            { l1: "からい", en: "spicy / hot", note: "karai — 辛い; also 'salty' depending on context." },
            { l1: "すっぱい", en: "sour", note: "suppai — 酸っぱい." },
            { l1: "あさごはん", en: "breakfast", note: "asa-gohan — 朝ご飯; 'morning rice'." },
            { l1: "ひるごはん", en: "lunch", note: "hiru-gohan — 昼ご飯; 'noon rice'." },
            { l1: "ばんごはん", en: "dinner", note: "ban-gohan — 晩ご飯; 'evening rice'." },
            { l1: "おなかが すきました", en: "I'm hungry", note: "onaka ga sukimashita — lit. 'stomach emptied'." },
            { l1: "おなかが いっぱい", en: "I'm full", note: "onaka ga ippai — lit. 'stomach is full'." },
          ],
        },
        {
          type: "dialogue",
          heading: "Over dinner",
          setup: "You're eating ban-gohan with a Tokyo friend.",
          lines: [
            { speaker: "Friend", l1: "あじは どうですか。", en: "How does it taste?" },
            { speaker: "You", l1: "とても おいしいです。", en: "It's very delicious." },
            { speaker: "Friend", l1: "ちょっと からいですか。", en: "Is it a bit spicy?" },
            { speaker: "You", l1: "いいえ、ちょうど いいです。", en: "No, it's just right." },
            { speaker: "Friend", l1: "もっと たべますか。", en: "Will you eat more?" },
            { speaker: "You", l1: "いいえ、おなかが いっぱいです。", en: "No, I'm full." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Tastes & meals check",
          questions: [
            {
              q: "「あさごはん」 is which meal?",
              options: ["breakfast", "lunch", "dinner", "a snack"],
              correct: 0,
            },
            {
              q: "Your food is delicious. You say…",
              options: ["からいです。", "すっぱいです。", "おいしいです。", "おなかが いっぱいです。"],
              correct: 2,
            },
            {
              q: "「ばんごはん」 means…",
              options: ["breakfast", "lunch", "dinner", "dessert"],
              correct: 2,
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "This dinner is very delicious.",
          reference: "この ばんごはんは とても おいしいです。",
          hint: "この = 'this'; とても = 'very'; end with おいしいです.",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "'Delicious' is…",
              options: ["あまい", "おいしい", "からい", "すっぱい"],
              correct: 1,
            },
            {
              q: "Lunch is…",
              options: ["あさごはん", "ひるごはん", "ばんごはん", "おにぎり"],
              correct: 1,
            },
            {
              q: "「おなかが いっぱいです」 means…",
              options: ["I'm hungry", "I'm full", "it's spicy", "it's sweet"],
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
        q: "さしみ is…",
        options: ["rice + topping", "raw fish, no rice", "conveyor-belt sushi", "soy sauce"],
        correct: 1,
      },
      {
        q: "まぐろ means…",
        options: ["salmon", "tuna", "shrimp", "squid"],
        correct: 1,
      },
      {
        q: "Beef is…",
        options: ["ぶたにく", "とりにく", "ぎゅうにく", "さかな"],
        correct: 2,
      },
      {
        q: "「ぎゅうどん」 is…",
        options: ["a beef bowl", "curry rice", "a pork cutlet", "fried chicken"],
        correct: 0,
      },
      {
        q: "やさい means…",
        options: ["fish", "vegetables", "rice", "meat"],
        correct: 1,
      },
      {
        q: "The compliment 'delicious' is…",
        options: ["からい", "おいしい", "すっぱい", "あまい"],
        correct: 1,
      },
      {
        q: "「あさごはん」 is…",
        options: ["breakfast", "lunch", "dinner", "a snack"],
        correct: 0,
      },
      {
        q: "「すっぱい」 means…",
        options: ["sweet", "spicy", "sour", "salty"],
        correct: 2,
      },
      {
        q: "To say you're full:",
        options: [
          "おなかが すきました",
          "おなかが いっぱいです",
          "おいしいです",
          "からいです",
        ],
        correct: 1,
      },
      {
        q: "Translate: 'Two pieces of tuna and a salmon, please.'",
        options: [
          "まぐろを にかんと さけを おねがいします。",
          "さけを にかんと まぐろを いります。",
          "まぐろは さけに します。",
          "にかん まぐろと さけは ください。",
        ],
        correct: 0,
      },
    ],
  },
};
