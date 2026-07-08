import type { Unit } from "../../types";

export const UNIT_RESTAURANT: Unit = {
  slug: "restaurant",
  stage: 4,
  order: 16,
  icon: "🍜",
  title: "At the restaurant",
  tagline: "点菜, 服务员, 买单.",
  badge: "tourist",
  lessons: [
    {
      slug: "restaurant-seated-menu",
      title: "几位？ — getting seated and the menu",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "The first question: how many?",
          body: [
            "Walk into almost any Beijing restaurant and the first thing the staff asks is <strong>几位？</strong> (jǐ wèi?, \"how many people?\"). 位 (wèi) is the polite measure word for people. You answer with a number + 位 or just the number: <em>两位</em> (two), <em>三位</em> (three).",
            "Then you'll want the <strong>菜单</strong> (càidān, menu). Many places now have a QR-code menu you scan and order from on your phone, but you can always ask for a paper one.",
            "To get a server's attention you call <strong>服务员！</strong> (fúwùyuán!, \"waiter / server!\"). Calling out is normal and polite here — it's not considered rude the way it can feel in the West.",
          ],
          keyPoint:
            "几位？ = how many people? Answer: 两位 / 三位. 菜单 = menu. Call the server with 服务员！",
        },
        {
          type: "vocab",
          heading: "Getting seated",
          items: [
            { l1: "几位", en: "how many people?", note: "jǐ wèi — 位 is the polite measure word for people" },
            { l1: "两位", en: "two people", note: "liǎng wèi" },
            { l1: "菜单", en: "menu", note: "càidān" },
            { l1: "服务员", en: "waiter / server", note: "fúwùyuán — call out to get attention" },
            { l1: "点菜", en: "to order food", note: "diǎn cài — 'to choose dishes'" },
            { l1: "桌子", en: "table", note: "zhuōzi" },
            { l1: "包间", en: "private room", note: "bāojiān — common for groups" },
            { l1: "筷子", en: "chopsticks", note: "kuàizi" },
            { l1: "餐巾纸", en: "napkin / tissue", note: "cānjīnzhǐ" },
            { l1: "等一下", en: "wait a moment", note: "děng yíxià" },
          ],
        },
        {
          type: "tip",
          heading: "Calling the server is normal",
          body: "In a Chinese restaurant you're expected to call out <strong>服务员！</strong> (fúwùyuán!) — sometimes with a raised hand — whenever you need something. It is <em>not</em> rude. Servers won't hover or check back constantly the way they might elsewhere; they wait to be summoned. A friendly, clear \"服务员！\" gets you the menu, more tea, or the bill.",
          example: { l1: "服务员，菜单！", en: "Waiter, the menu please!" },
        },
        {
          type: "dialogue",
          heading: "Walking in",
          setup: "You and a friend arrive at a noodle restaurant for lunch.",
          lines: [
            { speaker: "服务员", l1: "您好，几位？", en: "Hello, how many people?" },
            { speaker: "你", l1: "两位。", en: "Two." },
            { speaker: "服务员", l1: "好，这边请。", en: "Okay, this way please." },
            { speaker: "你", l1: "谢谢。可以给我们菜单吗？", en: "Thanks. Can you give us a menu?" },
            { speaker: "服务员", l1: "菜单在这儿，您慢慢看。", en: "Here's the menu, take your time." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Seated comprehension",
          questions: [
            {
              q: "The server asks '几位？' — what do they want to know?",
              options: ["what you'll order", "how many people", "where you're from", "if you want tea"],
              correct: 1,
            },
            {
              q: "How do you answer for a party of two?",
              options: ["二位", "两位", "两个人位", "二人"],
              correct: 1,
              fb: "Before the measure word 位, use 两 (liǎng) not 二: 两位.",
            },
            {
              q: "Calling out '服务员！' to a waiter is…",
              options: ["rude", "normal and expected", "only okay if you whisper", "considered impatient"],
              correct: 1,
            },
          ],
        },
      ],
    },
    {
      slug: "restaurant-ordering",
      title: "我要… / 来一个… — ordering dishes",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Two ways to order a dish",
          body: [
            "You already know <strong>我要…</strong> (wǒ yào…, \"I want…\"). For food, locals very often use <strong>来一个…</strong> (lái yí ge…, literally \"bring/come one…\") — a casual, natural way to order: <em>来一个宫保鸡丁</em> (bring a kung pao chicken).",
            "Chinese meals are <strong>shared family-style</strong>. You order several dishes (菜) for the table, plus rice (米饭) for each person, not one plate per person. A rough rule: order roughly one dish per person, plus one extra.",
            "Useful: <strong>这个</strong> (zhè ge, \"this one\") + pointing at the menu always works. And <strong>不要太辣</strong> (bú yào tài là) = \"not too spicy.\"",
          ],
          keyPoint:
            "Order with 我要 or 来一个. Meals are shared — order dishes for the table + rice. 这个 + point always works.",
        },
        {
          type: "vocab",
          heading: "Ordering toolkit",
          items: [
            { l1: "来一个", en: "bring one / I'll have one", note: "lái yí ge — casual way to order a dish" },
            { l1: "这个", en: "this one", note: "zhè ge — point at the menu" },
            { l1: "米饭", en: "(cooked) rice", note: "mǐfàn" },
            { l1: "宫保鸡丁", en: "kung pao chicken", note: "gōngbǎo jīdīng — a Beijing menu staple" },
            { l1: "麻婆豆腐", en: "mapo tofu", note: "mápó dòufu" },
            { l1: "青菜", en: "a green vegetable dish", note: "qīngcài" },
            { l1: "辣", en: "spicy", note: "là" },
            { l1: "不要太辣", en: "not too spicy", note: "bú yào tài là" },
            { l1: "够了", en: "that's enough", note: "gòu le — to stop ordering" },
            { l1: "一共", en: "in total / altogether", note: "yígòng" },
          ],
        },
        {
          type: "tip",
          heading: "份 and 盘 — dishes get their own measure words",
          body: "When ordering dishes you'll hear <strong>个</strong> (ge) as the all-purpose measure word — <em>来一个麻婆豆腐</em> — but menus and servers also use <strong>份</strong> (fèn, a portion/serving) and <strong>盘</strong> (pán, a plate): <em>一份米饭</em> (a serving of rice), <em>一盘青菜</em> (a plate of greens). When in doubt, 个 is understood.",
          example: { l1: "来一份米饭，一个宫保鸡丁。", en: "A serving of rice and a kung pao chicken." },
        },
        {
          type: "dialogue",
          heading: "Ordering for two",
          setup: "You've looked at the menu and you're ready to order.",
          lines: [
            { speaker: "你", l1: "服务员，点菜！", en: "Waiter, we'd like to order!" },
            { speaker: "服务员", l1: "好的，您要什么？", en: "Sure, what would you like?" },
            { speaker: "你", l1: "来一个宫保鸡丁，一个麻婆豆腐。", en: "A kung pao chicken and a mapo tofu." },
            { speaker: "服务员", l1: "要米饭吗？", en: "Would you like rice?" },
            { speaker: "你", l1: "要两碗米饭。麻婆豆腐不要太辣。", en: "Two bowls of rice. The mapo tofu, not too spicy." },
            { speaker: "服务员", l1: "好，还要别的吗？", en: "Okay, anything else?" },
            { speaker: "你", l1: "够了，谢谢。", en: "That's enough, thanks." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Order builder",
          intro: "Complete each line.",
          items: [
            {
              template: "___一个宫保鸡丁。",
              answer: "来",
              en: "Bring / I'll have a kung pao chicken.",
              options: ["来", "几", "够", "位"],
            },
            {
              template: "麻婆豆腐不要太___。",
              answer: "辣",
              en: "The mapo tofu, not too spicy.",
              options: ["辣", "甜", "热", "多"],
            },
            {
              template: "要两碗___。",
              answer: "米饭",
              en: "Two bowls of rice.",
              options: ["米饭", "菜单", "筷子", "服务员"],
            },
            {
              template: "___了，谢谢。",
              answer: "够",
              en: "That's enough, thanks.",
              options: ["够", "来", "几", "辣"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "I'll have a kung pao chicken and two bowls of rice.",
          reference: "来一个宫保鸡丁，两碗米饭。",
          hint: "Use 来一个 for the dish. 'Two bowls' = 两碗 (碗 = bowl, the measure word for rice).",
        },
      ],
    },
    {
      slug: "restaurant-the-bill",
      title: "买单！ — the bill and (no) tipping",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Asking for the bill",
          body: [
            "When you're done, you call the server and ask for the bill. Two equally common phrases: <strong>买单</strong> (mǎidān) and <strong>结账</strong> (jiézhàng). Either one — often just shouted across the room as <em>服务员，买单！</em> — works.",
            "In China there is <strong>no tipping</strong> in ordinary restaurants. The price on the menu is what you pay; servers are not paid on tips and may be confused or decline if you try. Don't leave money on the table.",
            "You'll usually pay by <strong>扫码</strong> (sǎo mǎ, scanning a QR code) with WeChat Pay or Alipay, just like at the café. Group meals are often settled by one person who pays the whole bill — splitting (AA制) exists but the host frequently insists on covering it.",
          ],
          keyPoint:
            "买单 / 结账 = the bill. No tipping in China. Pay by 扫码. One person often pays the whole table.",
        },
        {
          type: "vocab",
          heading: "Paying words",
          items: [
            { l1: "买单", en: "the bill / to pay", note: "mǎidān" },
            { l1: "结账", en: "to settle the bill", note: "jiézhàng — interchangeable with 买单" },
            { l1: "一共多少钱", en: "how much is it all together?", note: "yígòng duōshao qián" },
            { l1: "扫码", en: "to scan a QR code (to pay)", note: "sǎo mǎ" },
            { l1: "AA制", en: "to split the bill / go Dutch", note: "AA zhì" },
            { l1: "我请客", en: "it's my treat / I'm paying", note: "wǒ qǐngkè" },
            { l1: "发票", en: "official receipt / invoice", note: "fāpiào — ask for it for expenses" },
            { l1: "小费", en: "tip", note: "xiǎofèi — not expected in China" },
            { l1: "不用", en: "no need / it's not necessary", note: "bú yòng" },
            { l1: "打包", en: "to box up leftovers / take away", note: "dǎbāo" },
          ],
        },
        {
          type: "tip",
          heading: "我请客 — fighting over the bill",
          body: "Treating others is a big part of Chinese dining. Saying <strong>我请客</strong> (wǒ qǐngkè, \"it's my treat\") is a generous, common gesture, and friends will often <em>compete</em> to pay — grabbing the waiter, insisting the other put their phone away. Splitting evenly (<strong>AA制</strong>) is increasingly normal among younger people and colleagues, but offering to treat is always warm. And leftovers? Ask to <strong>打包</strong> (box it up) — totally normal, never wasteful.",
          example: { l1: "今天我请客！", en: "Today it's my treat!" },
        },
        {
          type: "dialogue",
          heading: "Settling up",
          setup: "The meal is over and you wave the server down.",
          lines: [
            { speaker: "你", l1: "服务员，买单！", en: "Waiter, the bill please!" },
            { speaker: "服务员", l1: "好的，一共一百二十八块。", en: "Okay, it's 128 yuan altogether." },
            { speaker: "你", l1: "可以扫码吗？", en: "Can I scan to pay?" },
            { speaker: "服务员", l1: "可以，扫这个。", en: "Sure, scan this." },
            { speaker: "你", l1: "需要小费吗？", en: "Do you need a tip?" },
            { speaker: "服务员", l1: "不用，我们不收小费。", en: "No need, we don't accept tips." },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the sentence",
          intro: "Tap the words into the correct order.",
          items: [
            { tokens: ["服务员", "，", "买单"], en: "Waiter, the bill please." },
            { tokens: ["一共", "多少", "钱"], en: "How much is it altogether?" },
            { tokens: ["今天", "我", "请客"], alts: [["我", "今天", "请客"]], en: "Today it's my treat." },
            { tokens: ["可以", "打包", "吗"], en: "Can we box up the leftovers?" },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Waiter, the bill! How much altogether? Can I scan to pay?",
          reference: "服务员，买单！一共多少钱？可以扫码吗？",
          hint: "买单 = the bill. 一共多少钱 = how much altogether. 可以扫码吗 = can I scan to pay.",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "Which two words both mean 'ask for the bill'?",
              options: ["买单 / 结账", "点菜 / 菜单", "几位 / 两位", "打包 / 发票"],
              correct: 0,
            },
            {
              q: "How much should you tip in an ordinary Chinese restaurant?",
              options: ["10%", "15-20%", "round up", "nothing — tipping isn't customary"],
              correct: 3,
            },
            {
              q: "'我请客' means…",
              options: ["let's split it", "it's my treat", "box it up", "the bill, please"],
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
        q: "The server asks '几位？' — they want to know…",
        options: ["what you'll order", "how many people", "if you want spicy food", "your name"],
        correct: 1,
      },
      {
        q: "How do you answer for a party of two?",
        options: ["二位", "两位", "二人位", "两个位"],
        correct: 1,
      },
      {
        q: "'菜单' means…",
        options: ["the bill", "the menu", "chopsticks", "the waiter"],
        correct: 1,
      },
      {
        q: "A casual, natural way to order a dish is…",
        options: ["来一个…", "几位…", "买单…", "打包…"],
        correct: 0,
      },
      {
        q: "Chinese meals are typically eaten…",
        options: ["one plate per person", "shared family-style", "as separate courses per person", "standing up"],
        correct: 1,
      },
      {
        q: "'不要太辣' means…",
        options: ["I want it spicy", "not too spicy", "no rice", "no sugar"],
        correct: 1,
      },
      {
        q: "Calling out '服务员！' to a server is…",
        options: ["rude", "normal and expected", "only for emergencies", "impolite without 请"],
        correct: 1,
      },
      {
        q: "Which two words both mean 'the bill / to pay'?",
        options: ["买单 / 结账", "米饭 / 青菜", "几位 / 两位", "辣 / 甜"],
        correct: 0,
      },
      {
        q: "Tipping in an ordinary Chinese restaurant is…",
        options: ["expected (10%)", "expected (15%)", "not customary", "required by law"],
        correct: 2,
      },
      {
        q: "Translate: 'I'll have a kung pao chicken and two bowls of rice.'",
        options: [
          "来一个宫保鸡丁，两碗米饭。",
          "我宫保鸡丁米饭两。",
          "两碗米饭一个来宫保鸡丁。",
          "宫保鸡丁来米饭两个。",
        ],
        correct: 0,
      },
    ],
  },
};
