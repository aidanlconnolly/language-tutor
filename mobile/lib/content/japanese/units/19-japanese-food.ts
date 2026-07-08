import type { Unit } from "../../types";

export const UNIT_JAPANESE_FOOD: Unit = {
  slug: "japanese-food",
  stage: 4,
  order: 19,
  icon: "🍣",
  title: "Japanese classics",
  tagline: "Sushi etiquette, izakaya, ramen — and no tipping.",
  badge: "culture",
  lessons: [
    {
      slug: "japanese-food-sushi-ramen",
      title: "Sushi & ramen culture",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Two icons, two cultures",
          body: [
            "At a good <strong>すしや</strong> (sushi-ya), the chef is an artisan. Nigiri is often already seasoned — dip the <em>fish</em> side lightly in <strong>しょうゆ</strong>, not the rice, and ideally eat it in one bite. Many people eat nigiri with their fingers; sashimi with chopsticks.",
            "<strong>ガリ</strong> (gari, pickled ginger) is a palate cleanser between pieces, not a topping. <strong>あがり</strong> (agari) is the sushi-counter word for green tea.",
            "<strong>ラーメン</strong> is fast, cheap, and meant to be eaten <strong>hot and quickly</strong> before the noodles soften. Broth styles: <strong>しょうゆ</strong> (soy), <strong>みそ</strong>, <strong>しお</strong> (salt), <strong>とんこつ</strong> (pork-bone). Slurping is encouraged.",
          ],
          keyPoint:
            "Nigiri: dip the fish, not the rice; one bite; fingers are fine. ガリ cleanses the palate. Ramen: eat it fast and hot.",
        },
        {
          type: "vocab",
          heading: "Sushi & ramen words",
          items: [
            { l1: "すしや", en: "sushi restaurant", note: "sushi-ya — 寿司屋; 〜や = a shop." },
            { l1: "にぎり", en: "nigiri (hand-pressed sushi)", note: "nigiri — 握り; rice + topping." },
            { l1: "ガリ", en: "pickled ginger", note: "gari — palate cleanser, eaten between pieces." },
            { l1: "あがり", en: "green tea (sushi-counter term)", note: "agari — insider word at the sushi bar." },
            { l1: "おまかせ", en: "chef's choice", note: "omakase — お任せ; 'I leave it to you'." },
            { l1: "しょうゆ", en: "soy sauce / soy broth", note: "shōyu — 醤油; also a ramen broth type." },
            { l1: "とんこつ", en: "pork-bone broth", note: "tonkotsu — 豚骨; rich Kyushu-style ramen." },
            { l1: "かたさ", en: "noodle firmness", note: "katasa — 'katame' = firm; ramen-shop choice." },
            { l1: "かえだま", en: "extra noodles refill", note: "kaedama — 替え玉; refill noodles in your broth." },
          ],
        },
        {
          type: "tip",
          heading: "Dip the fish, not the rice",
          body: "When eating nigiri, turn the piece and touch the <strong>fish</strong> to the soy sauce — never the rice. Rice soaks up too much soy, falls apart, and is seen as wasteful. Nigiri is also designed to be eaten in <em>one bite</em>; biting it in half is a giveaway you're new to it.",
          example: { l1: "おまかせで おねがいします。", en: "Chef's choice, please." },
        },
        {
          type: "multipleChoice",
          heading: "Sushi & ramen etiquette",
          questions: [
            {
              q: "When eating nigiri, you dip…",
              options: ["the rice side", "the fish side", "both sides", "neither — no soy on nigiri"],
              correct: 1,
            },
            {
              q: "「ガリ」 (pickled ginger) is…",
              options: [
                "a topping for the rice",
                "a palate cleanser between pieces",
                "the soy sauce",
                "a dessert",
              ],
              correct: 1,
            },
            {
              q: "Slurping your ramen is…",
              options: ["rude", "encouraged / normal", "only okay at home", "a sign you dislike it"],
              correct: 1,
            },
            {
              q: "「おまかせ」 means…",
              options: ["the bill", "chef's choice", "extra noodles", "green tea"],
              correct: 1,
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Chef's choice, please. The soy-sauce ramen is delicious.",
          reference: "おまかせで おねがいします。しょうゆラーメンは おいしいです。",
          hint: "おまかせで おねがいします for omakase; は marks the ramen with おいしいです.",
        },
      ],
    },
    {
      slug: "japanese-food-izakaya",
      title: "The izakaya & otōshi",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Japan's pub, but with food",
          body: [
            "An <strong>いざかや</strong> (izakaya, 居酒屋) is a casual drinking spot built around small shared plates. You graze across the evening: <strong>えだまめ</strong> (edamame), <strong>からあげ</strong> (fried chicken), <strong>やきとり</strong> (grilled chicken skewers), <strong>さしみ</strong>.",
            "Soon after you sit, you'll be served a small dish you didn't order — the <strong>おとおし</strong> (otōshi, also つきだし). It's a seat/cover charge in food form (¥300–500/person), not a free appetizer. It's normal and not negotiable.",
            "You'll usually be seated for a set time at busy izakaya, and 'nomihōdai' (<strong>のみほうだい</strong>, all-you-can-drink) deals are common.",
          ],
          keyPoint:
            "Izakaya = shared small plates + drinks. The おとおし is a paid cover charge, not a freebie. のみほうだい = all-you-can-drink.",
        },
        {
          type: "vocab",
          heading: "Izakaya vocabulary",
          items: [
            { l1: "いざかや", en: "izakaya (Japanese pub)", note: "izakaya — 居酒屋." },
            { l1: "おとおし", en: "compulsory small dish / cover", note: "otōshi — お通し; a seat-charge appetizer." },
            { l1: "えだまめ", en: "edamame", note: "edamame — 枝豆; the classic starter." },
            { l1: "やきとり", en: "grilled chicken skewers", note: "yakitori — 焼き鳥." },
            { l1: "からあげ", en: "fried chicken", note: "kara-age — 唐揚げ." },
            { l1: "のみほうだい", en: "all-you-can-drink", note: "nomihōdai — 飲み放題." },
            { l1: "たべほうだい", en: "all-you-can-eat", note: "tabehōdai — 食べ放題." },
            { l1: "おしぼり", en: "wet hand towel", note: "oshibori — given on arrival; wipe hands only." },
            { l1: "じかんせい", en: "time limit (seating)", note: "jikan-sei — 時間制; e.g. 2-hour limit." },
          ],
        },
        {
          type: "dialogue",
          heading: "Settling in at the izakaya",
          setup: "You arrive and the staff seat you.",
          lines: [
            { speaker: "店員 (staff)", l1: "いらっしゃいませ。おとおしは えだまめです。", en: "Welcome. The otōshi is edamame." },
            { speaker: "You", l1: "ありがとうございます。やきとりを みっつ おねがいします。", en: "Thank you. Three yakitori, please." },
            { speaker: "店員", l1: "おのみものは のみほうだいに しますか。", en: "Will you do all-you-can-drink?" },
            { speaker: "You", l1: "はい、のみほうだいで おねがいします。", en: "Yes, all-you-can-drink, please." },
            { speaker: "店員", l1: "にじかんせいです。", en: "It's a two-hour limit." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Izakaya phrases",
          items: [
            {
              template: "___は えだまめです。(the cover dish)",
              answer: "おとおし",
              en: "The otōshi is edamame.",
              options: ["おとおし", "おしぼり", "おかいけい", "おすすめ"],
            },
            {
              template: "やきとりを みっつ ___。",
              answer: "おねがいします",
              en: "Three yakitori, please.",
              options: ["おねがいします", "たべられません", "です", "いります"],
            },
            {
              template: "___で おねがいします。(all-you-can-drink)",
              answer: "のみほうだい",
              en: "All-you-can-drink, please.",
              options: ["のみほうだい", "おしぼり", "じかんせい", "おとおし"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Three yakitori and one edamame, please.",
          reference: "やきとりを みっつと えだまめを ひとつ おねがいします。",
          hint: "みっつ = three (items), ひとつ = one; join with と.",
        },
      ],
    },
    {
      slug: "japanese-food-etiquette",
      title: "Etiquette — chopsticks, slurping & no tipping",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "The rules that matter most",
          body: [
            "<strong>Chopstick taboos:</strong> never stick chopsticks upright in rice (<strong>たてばし</strong> — it mimics a funeral offering), and never pass food chopstick-to-chopstick (this echoes a funeral bone-passing rite). Use the far ends or a serving spoon to share. Don't spear food or wave chopsticks around.",
            "<strong>Slurping</strong> noodles is good manners — it cools the noodles and signals enjoyment. Quiet, polite eating is the norm for most other foods.",
            "<strong>No tipping.</strong> Japan has no tipping culture; leaving cash can confuse or even mildly offend staff, who may chase you down to return it. Excellent service is simply included. Say <strong>ごちそうさまでした</strong> instead — that's the real 'tip'.",
          ],
          keyPoint:
            "Never stand chopsticks in rice or pass food chopstick-to-chopstick. Slurp noodles. Do NOT tip — say ごちそうさまでした.",
        },
        {
          type: "vocab",
          heading: "Etiquette vocabulary",
          items: [
            { l1: "はし", en: "chopsticks", note: "hashi — お箸." },
            { l1: "たてばし", en: "chopsticks stuck upright (taboo)", note: "tatebashi — 立て箸; funeral imagery, avoid." },
            { l1: "わたしばし", en: "passing food chopstick-to-chopstick (taboo)", note: "watashibashi — 渡し箸; funeral rite, avoid." },
            { l1: "マナー", en: "manners / etiquette", note: "manā — katakana loanword." },
            { l1: "チップ", en: "tip (gratuity)", note: "chippu — there's no tipping in Japan." },
            { l1: "いりません", en: "(it's) not needed", note: "irimasen — 'chippu wa irimasen'." },
            { l1: "ぎょうぎ", en: "table manners / conduct", note: "gyōgi — 行儀." },
            { l1: "おかわり", en: "refill / seconds", note: "okawari — ask for more rice/drink." },
            { l1: "ごちそうさまでした", en: "thanks for the meal", note: "gochisō-sama deshita — the real 'tip'." },
          ],
        },
        {
          type: "tip",
          heading: "Why there's no tipping",
          body: "In Japan, good service is the baseline, paid for in the listed price — so a <strong>チップ</strong> (tip) can read as awkward or even imply the staff need extra incentive. Leave cash on the table and a server may run after you to return it. The culturally correct 'tip' is a warm <em>ごちそうさまでした</em> on your way out.",
          example: { l1: "チップは いりません。", en: "A tip isn't necessary." },
        },
        {
          type: "multipleChoice",
          heading: "Etiquette check",
          questions: [
            {
              q: "Sticking chopsticks upright in a bowl of rice is…",
              options: [
                "a polite gesture",
                "a funeral image — taboo",
                "how you ask for more",
                "fine at casual places",
              ],
              correct: 1,
            },
            {
              q: "Passing food chopstick-to-chopstick (わたしばし) is…",
              options: ["encouraged for sharing", "a funeral rite — avoid it", "only rude with sushi", "the correct way to share"],
              correct: 1,
            },
            {
              q: "Slurping ramen noodles is…",
              options: ["rude", "good manners / normal", "only okay alone", "an insult to the chef"],
              correct: 1,
            },
            {
              q: "About tipping in Japan…",
              options: [
                "tip 10–15%",
                "tip only at sushi bars",
                "there's no tipping — don't",
                "round up the bill",
              ],
              correct: 2,
            },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the sentence",
          items: [
            { tokens: ["チップ", "は", "いりません"], en: "A tip isn't necessary." },
            { tokens: ["ごちそうさま", "でした"], en: "Thank you for the meal." },
            { tokens: ["はし", "を", "ごはん", "に", "たてないで", "ください"], alts: [["ごはん", "に", "はし", "を", "たてないで", "ください"]], en: "Please don't stand chopsticks in the rice." },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "A tip isn't necessary. Thank you for the meal.",
          reference: "チップは いりません。ごちそうさまでした。",
          hint: "は marks チップ with いりません; finish with the fixed phrase ごちそうさまでした.",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "Standing chopsticks upright in rice is…",
              options: ["polite", "a funeral image — taboo", "how to ask for more", "normal"],
              correct: 1,
            },
            {
              q: "Slurping ramen is…",
              options: ["rude", "good manners", "an insult", "only okay alone"],
              correct: 1,
            },
            {
              q: "In Japan you should…",
              options: ["tip 15%", "not tip at all", "tip only staff you like", "round up"],
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
        q: "When eating nigiri, dip…",
        options: ["the rice", "the fish", "both", "no soy at all"],
        correct: 1,
      },
      {
        q: "「ガリ」 is…",
        options: ["a topping", "pickled ginger (palate cleanser)", "soy sauce", "green tea"],
        correct: 1,
      },
      {
        q: "「おまかせ」 means…",
        options: ["the bill", "chef's choice", "extra noodles", "all-you-can-drink"],
        correct: 1,
      },
      {
        q: "The unordered small dish at an izakaya (a paid cover) is…",
        options: ["おしぼり", "おとおし", "おかわり", "おまかせ"],
        correct: 1,
      },
      {
        q: "「のみほうだい」 means…",
        options: ["all-you-can-eat", "all-you-can-drink", "the time limit", "chef's choice"],
        correct: 1,
      },
      {
        q: "Sticking chopsticks upright in rice (たてばし) is…",
        options: ["polite", "a funeral image — taboo", "how to ask for more", "fine casually"],
        correct: 1,
      },
      {
        q: "Slurping noodles is…",
        options: ["rude", "good manners / normal", "an insult", "only okay at home"],
        correct: 1,
      },
      {
        q: "Tipping in Japan is…",
        options: ["expected (15%)", "not done — there's no tipping", "only at sushi bars", "rounding up the bill"],
        correct: 1,
      },
      {
        q: "The cultural 'tip' on your way out is…",
        options: ["チップ", "ごちそうさまでした", "いらっしゃいませ", "かんぱい"],
        correct: 1,
      },
      {
        q: "Translate: 'A tip isn't necessary. Thank you for the meal.'",
        options: [
          "チップは いりません。ごちそうさまでした。",
          "チップを おねがいします。いただきます。",
          "チップは おいしいです。かんぱい。",
          "チップが あります。ごちそうさま。",
        ],
        correct: 0,
      },
    ],
  },
};
