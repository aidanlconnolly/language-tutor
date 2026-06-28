import type { Unit } from "../../types";

export const UNIT_CHINESE_FOOD: Unit = {
  slug: "chinese-food",
  stage: 4,
  order: 19,
  icon: "🥟",
  title: "Chinese classics",
  tagline: "饺子, 火锅, 北京烤鸭 — and no tipping.",
  badge: "culture",
  lessons: [
    {
      slug: "chinese-food-the-icons",
      title: "The icons: dumplings, hotpot, and Peking duck",
      summary: "Name the dishes every visitor to Beijing should know.",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "The big four on a Beijing table",
          body: [
            "Beijing eats like a crossroads of the whole country. Four dishes show up again and again: <strong>饺子</strong> (dumplings), <strong>火锅</strong> (hotpot), <strong>北京烤鸭</strong> (Peking duck), and <strong>包子</strong> (steamed buns).",
            "<strong>饺子</strong> are boiled or pan-fried half-moon dumplings, eaten in huge numbers at New Year — the shape recalls old silver ingots, so they mean wealth. <strong>包子</strong> are the puffier, yeast-risen cousins, usually steamed and grabbed for breakfast.",
            "<strong>北京烤鸭</strong> is the city's signature: lacquered, crisp-skinned duck carved tableside and rolled into thin pancakes with scallion and sweet bean sauce. <strong>火锅</strong> is the communal pot of simmering broth you cook your own ingredients in.",
          ],
          tip: {
            label: "Tones matter",
            body: "Every syllable carries a tone — get it wrong and the word changes. <em>Jiǎozi</em> (饺子, dumplings) and the look-alike <em>jiāozi</em> are not the same word. We mark tones in every vocab note for exactly this reason.",
          },
        },
        {
          type: "vocab",
          heading: "The icon dishes",
          intro: "The note shows the pinyin with tone marks — read it aloud before moving on.",
          items: [
            { l1: "饺子", en: "dumplings", note: "jiǎozi — boiled or pan-fried; eaten at New Year." },
            { l1: "火锅", en: "hotpot", note: "huǒguō — literally 'fire pot.'" },
            { l1: "北京烤鸭", en: "Peking duck", note: "Běijīng kǎoyā — Beijing's signature dish." },
            { l1: "包子", en: "steamed buns", note: "bāozi — yeast-risen, often a breakfast food." },
            { l1: "煮", en: "to boil", note: "zhǔ — how most 饺子 are cooked." },
            { l1: "烤", en: "to roast / grill", note: "kǎo — the 烤 in 烤鸭." },
            { l1: "蒸", en: "to steam", note: "zhēng — how 包子 are cooked." },
            { l1: "好吃", en: "delicious (food)", note: "hǎochī — literally 'good to eat.'" },
          ],
        },
        {
          type: "dialogue",
          heading: "Ordering at a duck restaurant",
          setup: "You and a friend sit down at a famous roast-duck restaurant near Qianmen.",
          lines: [
            { speaker: "服务员 (Waiter)", l1: "你们好，几位？", en: "Hello, how many people?" },
            { speaker: "你 (You)", l1: "两位。我们想吃北京烤鸭。", en: "Two. We'd like to have Peking duck." },
            { speaker: "服务员", l1: "好的，要一只还是半只？", en: "Sure. A whole one or a half?" },
            { speaker: "你", l1: "半只，再来一些饺子。", en: "Half, and some dumplings too." },
            { speaker: "服务员", l1: "好，请稍等。", en: "Okay, please wait a moment." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Match the dish",
          questions: [
            {
              q: "Which dish is carved tableside and eaten in thin pancakes?",
              qL1: "哪个菜片好后包在薄饼里吃？",
              options: ["饺子", "包子", "北京烤鸭", "火锅"],
              correct: 2,
              fb: "北京烤鸭 (Peking duck) is sliced and rolled into pancakes with scallion and sauce.",
            },
            {
              q: "You want a communal simmering pot to cook your own food in. You order…",
              options: ["火锅", "烤鸭", "包子", "饺子"],
              correct: 0,
              fb: "火锅 (huǒguō) is the 'fire pot' everyone cooks in together.",
            },
            {
              q: "Which are the puffy, steamed, yeast-risen buns often eaten for breakfast?",
              options: ["饺子", "包子", "火锅", "烤鸭"],
              correct: 1,
              fb: "包子 (bāozi) are steamed buns; 饺子 (jiǎozi) are the thinner-skinned dumplings.",
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "We'd like to eat Peking duck and some dumplings.",
          reference: "我们想吃北京烤鸭和一些饺子。",
          hint: "想 = 'would like to'; 和 links the two foods; 一些 = 'some.'",
        },
      ],
    },
    {
      slug: "chinese-food-regional-street",
      title: "Regional flavours & street food",
      summary: "Snacks (小吃), pancakes (煎饼), and the heat of 麻辣.",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "China on a stick (and in a wrap)",
          body: [
            "Beyond the famous dishes lies the world of <strong>小吃</strong> (xiǎochī) — literally 'small eats,' the snacks and street food sold from stalls and hole-in-the-wall shops.",
            "The breakfast star is the <strong>煎饼</strong> (jiānbǐng), a thin savoury crêpe spread with egg, sauce, and a crunchy cracker, then folded up and handed to you in a bag. It's the original grab-and-go.",
            "Regions taste wildly different. Sichuan food is famous for <strong>麻辣</strong> (málà) — the one-two punch of <em>má</em> (the tingling numbness of Sichuan pepper) and <em>là</em> (chilli heat). It's a feeling, not just a flavour.",
          ],
          keyPoint:
            "麻辣 (málà) = 麻 (numbing, from Sichuan pepper) + 辣 (spicy hot, from chilli). They are two different sensations stacked together.",
        },
        {
          type: "vocab",
          heading: "Street food & flavours",
          items: [
            { l1: "小吃", en: "snacks / street food", note: "xiǎochī — literally 'small eats.'" },
            { l1: "煎饼", en: "savoury crêpe / jianbing", note: "jiānbǐng — classic Beijing breakfast." },
            { l1: "麻辣", en: "numbing-and-spicy", note: "málà — the Sichuan signature." },
            { l1: "辣", en: "spicy (hot)", note: "là — chilli heat." },
            { l1: "麻", en: "numbing / tingling", note: "má — the buzz of Sichuan pepper." },
            { l1: "面条", en: "noodles", note: "miàntiáo — a staple across the north." },
            { l1: "串", en: "skewer", note: "chuàn — grilled meat on a stick; the character looks like two pieces on a stick." },
            { l1: "夜市", en: "night market", note: "yèshì — where street food comes alive." },
          ],
        },
        {
          type: "tip",
          heading: "Saying how spicy you want it",
          body: "At a Sichuan or hotpot place they'll ask <strong>你要不要辣？</strong> ('Do you want it spicy?'). You can answer <em>微辣</em> (mild), <em>中辣</em> (medium), or <em>特辣</em> (extra spicy). If you can't take heat at all, say <strong>不要辣，谢谢</strong> ('no spicy, thanks').",
          example: { l1: "我要微辣，谢谢。", en: "I'd like it mildly spicy, thanks." },
        },
        {
          type: "fillBlank",
          heading: "Order at the night market",
          intro: "Choose the word that fits.",
          items: [
            {
              template: "我想吃一个 ___。",
              answer: "煎饼",
              en: "I'd like to eat a jianbing (savoury crêpe).",
              options: ["煎饼", "夜市", "麻辣", "好吃"],
            },
            {
              template: "四川菜很 ___。",
              answer: "麻辣",
              en: "Sichuan food is very numbing-and-spicy.",
              options: ["好吃", "麻辣", "小吃", "面条"],
            },
            {
              template: "晚上我们去 ___ 吃小吃吧。",
              answer: "夜市",
              en: "Let's go to the night market to eat snacks tonight.",
              options: ["夜市", "煎饼", "串", "辣"],
            },
            {
              template: "我不能吃 ___ 的东西。",
              answer: "辣",
              en: "I can't eat spicy things.",
              options: ["辣", "蒸", "好吃", "夜市"],
            },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the sentence",
          intro: "Tap the words into the correct order.",
          items: [
            { tokens: ["四川", "菜", "很", "麻辣"], en: "Sichuan food is very numbing-and-spicy." },
            { tokens: ["我", "想", "吃", "煎饼"], en: "I want to eat a jianbing." },
            { tokens: ["这个", "小吃", "很", "好吃"], en: "This snack is very delicious." },
            { tokens: ["我", "要", "微辣", "谢谢"], en: "I'd like it mildly spicy, thanks." },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Tonight let's go to the night market to eat street food.",
          reference: "今天晚上我们去夜市吃小吃吧。",
          hint: "今天晚上 = 'tonight'; end with 吧 for a friendly suggestion.",
        },
      ],
    },
    {
      slug: "chinese-food-dining-etiquette",
      title: "Dining etiquette: sharing, chopsticks, and no tipping",
      summary: "Family-style dishes, chopstick taboos, toasting, and tipping in China.",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "The table is shared",
          body: [
            "Chinese meals are <strong>family-style</strong>: dishes (菜) go in the middle and everyone reaches in with chopsticks. You don't get 'your own' plate of food — you take a bite or two at a time from the shared dishes. On a big round table, the centre often spins (a lazy Susan, 转盘).",
            "Two chopstick taboos really matter. <strong>Never stand chopsticks upright in a bowl of rice</strong> — it looks like the incense burned for the dead. And <strong>don't tap your bowl with them</strong>, which is what beggars once did. Rest them flat on the holder or across your bowl.",
            "At a meal with drinks, people <strong>toast</strong> rather than just sip. <em>干杯</em> (gānbēi) literally means 'dry the cup.' To show respect, hold your glass slightly lower than an elder's when you clink.",
          ],
          tip: {
            label: "No tipping",
            body: "In mainland China, <strong>tipping is not expected</strong> at restaurants and can even confuse staff — the price is the price. Don't leave money on the table. (High-end hotels catering to tourists are the rare exception.)",
          },
        },
        {
          type: "vocab",
          heading: "Etiquette words",
          items: [
            { l1: "筷子", en: "chopsticks", note: "kuàizi — never stand them upright in rice." },
            { l1: "干杯", en: "cheers / bottoms up", note: "gānbēi — literally 'dry the cup.'" },
            { l1: "敬", en: "to toast / show respect to", note: "jìng — 我敬你 = 'a toast to you.'" },
            { l1: "服务员", en: "waiter / waitress", note: "fúwùyuán — call out to get service." },
            { l1: "买单", en: "to pay the bill", note: "mǎidān — 'the bill, please.'" },
            { l1: "小费", en: "tip (gratuity)", note: "xiǎofèi — not customary in China." },
            { l1: "分享", en: "to share", note: "fēnxiǎng — meals are shared, not individual." },
            { l1: "客气", en: "polite / formal", note: "kèqi — 别客气 = 'don't be so polite / no need.'" },
          ],
        },
        {
          type: "dialogue",
          heading: "Wrapping up the meal",
          setup: "The dishes are cleared and it's time to settle up.",
          lines: [
            { speaker: "朋友 (Friend)", l1: "来，干杯！", en: "Come on, cheers!" },
            { speaker: "你 (You)", l1: "干杯！这些菜真好吃。", en: "Cheers! These dishes are really delicious." },
            { speaker: "你", l1: "服务员，买单！", en: "Waiter, the bill please!" },
            { speaker: "服务员", l1: "一共三百块。", en: "Three hundred yuan in total." },
            { speaker: "你", l1: "给您。不用找零吗？", en: "Here you go. Should I leave the change?" },
            { speaker: "服务员", l1: "不用，找您钱。我们这儿不收小费。", en: "No need, here's your change. We don't take tips here." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Mind your manners",
          questions: [
            {
              q: "Why should you never stand chopsticks upright in your rice?",
              options: [
                "It's bad luck for the restaurant's profits",
                "It resembles incense burned for the dead",
                "It means you want more rice",
                "It's a signal you're finished eating",
              ],
              correct: 1,
              fb: "Upright chopsticks evoke incense at a funeral — an unlucky image at the table.",
            },
            {
              q: "How much should you tip at a normal restaurant in mainland China?",
              options: ["10%", "15–20%", "Nothing — tipping isn't customary", "Round up to the nearest 100"],
              correct: 2,
              fb: "Tipping is not expected in mainland China; the price on the bill is what you pay.",
            },
            {
              q: "When toasting an elder, you should…",
              options: [
                "Hold your glass higher than theirs",
                "Hold your glass slightly lower than theirs",
                "Refuse to clink glasses",
                "Drink before they do",
              ],
              correct: 1,
              fb: "Lowering your glass below an elder's when you clink shows respect.",
            },
            {
              q: "Chinese meals are typically served…",
              options: [
                "One individual plate per person",
                "Family-style, shared from the middle",
                "As a fixed multi-course tasting menu",
                "Buffet-only",
              ],
              correct: 1,
              fb: "Dishes go in the centre and everyone shares — often on a spinning lazy Susan.",
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Waiter, the bill please. We don't need to tip, right?",
          reference: "服务员，买单。我们不用给小费，对吗？",
          hint: "不用 = 'no need to'; end with 对吗？ to ask 'right?'",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "What does 干杯 mean?",
              options: ["Pay the bill", "Cheers / bottoms up", "No spicy", "Share the dish"],
              correct: 1,
            },
            {
              q: "Which is a chopstick taboo?",
              options: [
                "Resting them on the holder",
                "Standing them upright in rice",
                "Laying them across your bowl",
                "Using them to take shared food",
              ],
              correct: 1,
            },
            {
              q: "How do you say 'the bill, please' to a waiter?",
              options: ["干杯！", "买单！", "好吃！", "分享！"],
              correct: 1,
            },
            {
              q: "Tipping at a regular mainland Chinese restaurant is…",
              options: ["Expected (10%)", "Required by law", "Not customary", "Always 20%"],
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
        q: "Which dish is Beijing's signature, carved tableside into pancakes?",
        options: ["火锅", "北京烤鸭", "包子", "煎饼"],
        correct: 1,
      },
      {
        q: "火锅 (huǒguō) is best described as…",
        options: [
          "Steamed breakfast buns",
          "A communal simmering pot you cook your own food in",
          "A savoury folded crêpe",
          "Boiled dumplings",
        ],
        correct: 1,
      },
      {
        q: "What's the difference between 饺子 and 包子?",
        options: [
          "饺子 are steamed buns; 包子 are thin dumplings",
          "饺子 are thin-skinned dumplings; 包子 are puffy steamed buns",
          "They are identical",
          "饺子 is a soup; 包子 is a noodle",
        ],
        correct: 1,
      },
      {
        q: "小吃 (xiǎochī) means…",
        options: ["A fancy banquet", "Snacks / street food", "The bill", "Chopsticks"],
        correct: 1,
      },
      {
        q: "麻辣 (málà) combines which two sensations?",
        options: [
          "Sweet and sour",
          "Numbing and spicy-hot",
          "Salty and bitter",
          "Cold and crunchy",
        ],
        correct: 1,
      },
      {
        q: "煎饼 (jiānbǐng) is a classic Beijing…",
        options: ["dinner soup", "breakfast crêpe", "dessert", "hotpot broth"],
        correct: 1,
      },
      {
        q: "You should never do which of these with chopsticks?",
        options: [
          "Rest them on the holder",
          "Stand them upright in a rice bowl",
          "Use them to take shared food",
          "Lay them across the bowl",
        ],
        correct: 1,
      },
      {
        q: "干杯 literally means…",
        options: ["'good to eat'", "'dry the cup'", "'small eats'", "'the bill'"],
        correct: 1,
      },
      {
        q: "How much do you tip at a normal restaurant in mainland China?",
        options: ["10%", "Nothing — it isn't customary", "15–20%", "Round up to 100"],
        correct: 1,
      },
      {
        q: "Translate: 'Waiter, the bill please.'",
        options: [
          "服务员，干杯！",
          "服务员，买单！",
          "服务员，好吃！",
          "服务员，麻辣！",
        ],
        correct: 1,
      },
    ],
  },
};
