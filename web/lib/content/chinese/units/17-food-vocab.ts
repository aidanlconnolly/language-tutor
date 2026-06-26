import type { Unit } from "../../types";

export const UNIT_FOOD_VOCAB: Unit = {
  slug: "food-vocab",
  stage: 4,
  order: 17,
  icon: "🥢",
  title: "Food vocab deep dive",
  tagline: "肉, 菜, 饭, 面 — and the meals of the day.",
  badge: "tourist",
  lessons: [
    {
      slug: "food-vocab-meats-veg",
      title: "肉, 菜, 海鲜 — meats, vegetables, seafood",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Reading a Chinese menu by its building blocks",
          body: [
            "Chinese dish names are wonderfully literal once you know the parts. <strong>肉</strong> (ròu) is meat: <em>鸡肉</em> (jīròu) = chicken, <em>猪肉</em> (zhūròu) = pork, <em>牛肉</em> (niúròu) = beef. Notice the pattern — animal + 肉.",
            "<strong>菜</strong> (cài) means both \"vegetable\" and \"a dish.\" Vegetables include <em>白菜</em> (báicài, napa cabbage), <em>土豆</em> (tǔdòu, potato), <em>茄子</em> (qiézi, eggplant).",
            "Seafood is <strong>海鲜</strong> (hǎixiān): <em>鱼</em> (yú, fish), <em>虾</em> (xiā, shrimp), <em>蟹</em> (xiè, crab). Knowing these roots lets you decode most dishes on sight.",
          ],
          keyPoint:
            "肉 = meat (animal + 肉). 菜 = vegetable / dish. 海鲜 = seafood. Dish names are built from these blocks.",
        },
        {
          type: "vocab",
          heading: "Meats & poultry",
          items: [
            { l1: "肉", en: "meat", note: "ròu" },
            { l1: "鸡肉", en: "chicken (meat)", note: "jīròu" },
            { l1: "猪肉", en: "pork", note: "zhūròu — the default 'meat' in China" },
            { l1: "牛肉", en: "beef", note: "niúròu" },
            { l1: "羊肉", en: "lamb / mutton", note: "yángròu — big in Beijing hotpot" },
            { l1: "鸭", en: "duck", note: "yā — as in 北京烤鸭, Peking duck" },
            { l1: "鸡蛋", en: "egg", note: "jīdàn — literally 'chicken egg'" },
          ],
        },
        {
          type: "vocab",
          heading: "Vegetables & seafood",
          items: [
            { l1: "菜", en: "vegetable / a dish", note: "cài — double meaning" },
            { l1: "白菜", en: "napa / Chinese cabbage", note: "báicài" },
            { l1: "土豆", en: "potato", note: "tǔdòu — literally 'earth bean'" },
            { l1: "茄子", en: "eggplant / aubergine", note: "qiézi" },
            { l1: "西红柿", en: "tomato", note: "xīhóngshì" },
            { l1: "海鲜", en: "seafood", note: "hǎixiān" },
            { l1: "鱼", en: "fish", note: "yú — homophone of 余 'surplus,' a lucky food" },
            { l1: "虾", en: "shrimp / prawn", note: "xiā" },
            { l1: "蟹", en: "crab", note: "xiè" },
          ],
        },
        {
          type: "tip",
          heading: "肉 alone usually means pork",
          body: "When a menu just says <strong>肉</strong> (ròu) with no animal in front — for example <em>肉包子</em> (a meat bun) or <em>肉丝</em> (shredded meat) — it almost always means <strong>pork</strong>. Pork is the historical default meat in Chinese cooking, so it doesn't need to be named. If you don't eat pork, ask explicitly: <em>这是什么肉？</em> (\"what meat is this?\").",
          example: { l1: "这是什么肉？", en: "What kind of meat is this?" },
        },
        {
          type: "multipleChoice",
          heading: "Decode the dish",
          questions: [
            {
              q: "What is 牛肉?",
              options: ["chicken", "pork", "beef", "lamb"],
              correct: 2,
            },
            {
              q: "On a menu, a plain '肉' (no animal named) usually means…",
              options: ["beef", "pork", "lamb", "any meat"],
              correct: 1,
            },
            {
              q: "What does 海鲜 mean?",
              options: ["vegetables", "seafood", "noodles", "dessert"],
              correct: 1,
            },
            {
              q: "'鸡蛋' is literally…",
              options: ["chicken meat", "chicken egg", "duck", "fish"],
              correct: 1,
              fb: "鸡 (chicken) + 蛋 (egg) = egg. The 鸡 marks it as a chicken egg specifically.",
            },
          ],
        },
      ],
    },
    {
      slug: "food-vocab-staples-cooking",
      title: "米饭, 面条, 包子 — staples and cooking words",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "North eats wheat, south eats rice",
          body: [
            "China's two great staples are <strong>米饭</strong> (mǐfàn, rice) and <strong>面条</strong> (miàntiáo, noodles). Beijing is in the wheat-eating north, so noodles, dumplings, and steamed buns dominate — though rice is everywhere too.",
            "Wheat staples to know: <strong>包子</strong> (bāozi, stuffed steamed bun), <strong>馒头</strong> (mántou, plain steamed bun), <strong>饺子</strong> (jiǎozi, dumplings), <strong>面条</strong> (noodles).",
            "Menus also describe <em>how</em> food is cooked. Key words: <strong>炒</strong> (chǎo, stir-fried), <strong>蒸</strong> (zhēng, steamed), <strong>炸</strong> (zhá, deep-fried), <strong>煮</strong> (zhǔ, boiled). So <em>炒饭</em> = fried rice, <em>蒸鱼</em> = steamed fish.",
          ],
          keyPoint:
            "米饭 = rice, 面条 = noodles. Cooking verbs: 炒 (stir-fry), 蒸 (steam), 炸 (deep-fry), 煮 (boil) come before the food.",
        },
        {
          type: "vocab",
          heading: "Staples",
          items: [
            { l1: "米饭", en: "(cooked) rice", note: "mǐfàn" },
            { l1: "面条", en: "noodles", note: "miàntiáo" },
            { l1: "包子", en: "stuffed steamed bun", note: "bāozi" },
            { l1: "馒头", en: "plain steamed bun", note: "mántou" },
            { l1: "饺子", en: "dumplings", note: "jiǎozi" },
            { l1: "炒饭", en: "fried rice", note: "chǎofàn" },
            { l1: "面包", en: "(western) bread", note: "miànbāo" },
            { l1: "粥", en: "rice porridge / congee", note: "zhōu — a common breakfast" },
          ],
        },
        {
          type: "vocab",
          heading: "Cooking methods",
          items: [
            { l1: "炒", en: "to stir-fry", note: "chǎo — e.g. 炒菜, stir-fried vegetables" },
            { l1: "蒸", en: "to steam", note: "zhēng — e.g. 蒸鱼, steamed fish" },
            { l1: "炸", en: "to deep-fry", note: "zhá" },
            { l1: "煮", en: "to boil", note: "zhǔ — e.g. 煮饺子, boiled dumplings" },
            { l1: "烤", en: "to roast / grill / bake", note: "kǎo — as in 烤鸭, roast duck" },
            { l1: "热", en: "hot (temperature)", note: "rè" },
            { l1: "好吃", en: "delicious / tasty (food)", note: "hǎochī — literally 'good to eat'" },
          ],
        },
        {
          type: "tip",
          heading: "好吃 vs 好喝 — 'tasty' splits by eating vs drinking",
          body: "Chinese has two words for \"delicious.\" For things you <em>eat</em>, use <strong>好吃</strong> (hǎochī, \"good-eat\"): <em>这个包子很好吃</em>. For things you <em>drink</em>, use <strong>好喝</strong> (hǎohē, \"good-drink\"): <em>这个茶很好喝</em>. Mixing them up (好喝 for food) is a classic learner slip — match the verb to the action.",
          example: { l1: "这个面条很好吃！", en: "These noodles are really tasty!" },
        },
        {
          type: "fillBlank",
          heading: "Cooking method + food",
          intro: "Pick the cooking word that fits.",
          items: [
            {
              template: "我要一个___饭。",
              answer: "炒",
              en: "I'll have a fried rice.",
              options: ["炒", "蒸", "煮", "烤"],
            },
            {
              template: "___鱼很健康。",
              answer: "蒸",
              en: "Steamed fish is very healthy.",
              options: ["蒸", "炸", "炒", "煮"],
            },
            {
              template: "服务员，来一份___饺子。",
              answer: "煮",
              en: "Waiter, a serving of boiled dumplings.",
              options: ["煮", "炒", "蒸", "烤"],
            },
            {
              template: "这个包子很___。",
              answer: "好吃",
              en: "This bun is really tasty.",
              options: ["好吃", "好喝", "热", "辣"],
            },
          ],
        },
        {
          type: "dialogue",
          heading: "Ordering staples",
          setup: "A quick lunch at a northern-style noodle and dumpling shop.",
          lines: [
            { speaker: "服务员", l1: "要点什么主食？", en: "What staple would you like?" },
            { speaker: "你", l1: "来一份煮饺子，再来一碗面条。", en: "A serving of boiled dumplings, and a bowl of noodles." },
            { speaker: "服务员", l1: "饺子要猪肉的还是羊肉的？", en: "Pork or lamb dumplings?" },
            { speaker: "你", l1: "猪肉的。这儿的饺子好吃吗？", en: "Pork. Are the dumplings here good?" },
            { speaker: "服务员", l1: "很好吃，您放心。", en: "Very tasty, don't worry." },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "I'll have a fried rice and a bowl of noodles. These dumplings are delicious!",
          reference: "我要一个炒饭，一碗面条。这个饺子很好吃！",
          hint: "炒饭 = fried rice, 一碗面条 = a bowl of noodles. 'Delicious' for food = 好吃.",
        },
      ],
    },
    {
      slug: "food-vocab-tastes-meals",
      title: "辣, 甜, 咸 — tastes and the meals of the day",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Describing how food tastes",
          body: [
            "The four taste words you'll use constantly: <strong>辣</strong> (là, spicy), <strong>甜</strong> (tián, sweet), <strong>咸</strong> (xián, salty), and <strong>酸</strong> (suān, sour). Beijing food tends toward savoury and salty; Sichuan toward 辣.",
            "To say something is \"too\" much, use <strong>太…了</strong>: <em>太辣了</em> (too spicy), <em>太咸了</em> (too salty). To say \"a little,\" use <strong>有点儿</strong>: <em>有点儿甜</em> (a bit sweet).",
            "The three meals of the day: <strong>早饭</strong> (zǎofàn, breakfast), <strong>午饭</strong> (wǔfàn, lunch), <strong>晚饭</strong> (wǎnfàn, dinner). The 饭 in each literally means \"cooked rice / meal.\"",
          ],
          keyPoint:
            "Tastes: 辣 spicy, 甜 sweet, 咸 salty, 酸 sour. 太…了 = too… . Meals: 早饭 / 午饭 / 晚饭.",
        },
        {
          type: "vocab",
          heading: "Tastes & reactions",
          items: [
            { l1: "辣", en: "spicy / hot", note: "là" },
            { l1: "甜", en: "sweet", note: "tián" },
            { l1: "咸", en: "salty", note: "xián" },
            { l1: "酸", en: "sour", note: "suān" },
            { l1: "苦", en: "bitter", note: "kǔ" },
            { l1: "太辣了", en: "too spicy", note: "tài là le — 太…了 frames 'too…'" },
            { l1: "有点儿", en: "a little / somewhat", note: "yǒudiǎnr — often a mild complaint" },
            { l1: "好吃", en: "delicious (food)", note: "hǎochī" },
          ],
        },
        {
          type: "vocab",
          heading: "Meals of the day",
          items: [
            { l1: "早饭", en: "breakfast", note: "zǎofàn — also 早餐 zǎocān" },
            { l1: "午饭", en: "lunch", note: "wǔfàn — also 午餐 wǔcān" },
            { l1: "晚饭", en: "dinner", note: "wǎnfàn — also 晚餐 wǎncān" },
            { l1: "吃饭", en: "to eat (a meal)", note: "chī fàn — literally 'eat rice'" },
            { l1: "饿", en: "hungry", note: "è" },
            { l1: "饱", en: "full (satisfied)", note: "bǎo — 我饱了 = I'm full" },
            { l1: "渴", en: "thirsty", note: "kě" },
          ],
        },
        {
          type: "tip",
          heading: "吃了吗？ — 'Have you eaten?' as a greeting",
          body: "In China, an old and warm way to greet someone — especially around mealtimes — is <strong>吃了吗？</strong> (chī le ma?, \"Have you eaten?\"). It isn't really a question about food; it's a friendly \"how's it going?\" You don't need to describe your meal — just answer <em>吃了，你呢？</em> (\"I've eaten, and you?\"). It reflects how central eating is to daily life.",
          example: { l1: "吃了吗？ — 吃了，你呢？", en: "Have you eaten? — I have, and you?" },
        },
        {
          type: "fillBlank",
          heading: "Taste & meal practice",
          intro: "Fill in the blank.",
          items: [
            {
              template: "这个菜太___了，我不能吃。",
              answer: "辣",
              en: "This dish is too spicy, I can't eat it.",
              options: ["辣", "甜", "饱", "饿"],
            },
            {
              template: "我早上吃___。",
              answer: "早饭",
              en: "I eat breakfast in the morning.",
              options: ["早饭", "午饭", "晚饭", "吃饭"],
            },
            {
              template: "我吃饱了，谢谢。",
              answer: "饱",
              en: "I'm full, thank you.",
              options: ["饱", "饿", "渴", "咸"],
            },
            {
              template: "这个汤有点儿___。",
              answer: "咸",
              en: "This soup is a little salty.",
              options: ["咸", "甜", "饱", "饿"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "This dish is a little too spicy, but it's delicious. I'm full now.",
          reference: "这个菜有点儿太辣了，但是很好吃。我饱了。",
          hint: "有点儿 = a little, 太辣了 = too spicy, 但是 = but, 好吃 = delicious, 我饱了 = I'm full.",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "Which word means 'spicy'?",
              options: ["甜", "辣", "咸", "酸"],
              correct: 1,
            },
            {
              q: "'晚饭' means…",
              options: ["breakfast", "lunch", "dinner", "snack"],
              correct: 2,
            },
            {
              q: "'我饱了' means…",
              options: ["I'm hungry", "I'm full", "I'm thirsty", "It's too salty"],
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
        q: "What is 猪肉?",
        options: ["chicken", "pork", "beef", "lamb"],
        correct: 1,
      },
      {
        q: "A plain '肉' on a menu (no animal named) usually means…",
        options: ["beef", "pork", "lamb", "fish"],
        correct: 1,
      },
      {
        q: "'海鲜' means…",
        options: ["vegetables", "seafood", "noodles", "rice"],
        correct: 1,
      },
      {
        q: "The cooking word 炒 means…",
        options: ["to steam", "to stir-fry", "to boil", "to roast"],
        correct: 1,
      },
      {
        q: "'米饭' and '面条' are…",
        options: ["the two staples (rice & noodles)", "two meats", "two desserts", "cooking methods"],
        correct: 0,
      },
      {
        q: "'Delicious' for food is…",
        options: ["好喝", "好吃", "好看", "好玩"],
        correct: 1,
      },
      {
        q: "Which word means 'salty'?",
        options: ["辣", "甜", "咸", "酸"],
        correct: 2,
      },
      {
        q: "'太辣了' means…",
        options: ["a little spicy", "too spicy", "not spicy", "very tasty"],
        correct: 1,
      },
      {
        q: "Which is the correct set of meals (breakfast / lunch / dinner)?",
        options: ["早饭 / 午饭 / 晚饭", "早茶 / 午茶 / 晚茶", "饺子 / 包子 / 面条", "炒 / 蒸 / 煮"],
        correct: 0,
      },
      {
        q: "Translate: 'These noodles are delicious!'",
        options: [
          "这个面条很好喝！",
          "这个面条很好吃！",
          "面条这个好吃很！",
          "好吃面条这个很！",
        ],
        correct: 1,
      },
    ],
  },
};
