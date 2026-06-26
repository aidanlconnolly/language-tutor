import type { Unit } from "../../types";

export const UNIT_HOTEL: Unit = {
  slug: "hotel",
  stage: 3,
  order: 12,
  icon: "🏨",
  title: "Airport & hotel",
  tagline: "护照, 入住, room vocab, problems.",
  badge: "tourist",
  lessons: [
    {
      slug: "hotel-airport",
      title: "At the airport",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Landing at Beijing Capital",
          body: [
            "At immigration you'll hand over your <strong>护照</strong> (hùzhào, passport). The officer may ask a couple of simple questions about your trip — keep your hotel address handy.",
            "Then collect your <strong>行李</strong> (xíngli, luggage) at the carousel (<em>行李提取处</em>). Signs are bilingual, but the words for <em>arrivals</em> (<em>到达</em>) and <em>departures</em> (<em>出发</em>) are worth knowing.",
            "Beijing Capital (PEK) connects to the city by the <strong>机场快轨</strong> (jīchǎng kuàiguǐ, Airport Express) into the metro — fast and far cheaper than a taxi.",
          ],
          keyPoint:
            "护照 = passport, 行李 = luggage, 到达 = arrivals, 出发 = departures.",
        },
        {
          type: "vocab",
          heading: "Airport vocab",
          items: [
            { l1: "护照", en: "passport", note: "hùzhào" },
            { l1: "行李", en: "luggage", note: "xíngli" },
            { l1: "机场", en: "airport", note: "jīchǎng" },
            { l1: "航班", en: "flight", note: "hángbān" },
            { l1: "到达", en: "arrivals", note: "dàodá" },
            { l1: "出发", en: "departures", note: "chūfā" },
            { l1: "登机牌", en: "boarding pass", note: "dēngjīpái" },
            { l1: "海关", en: "customs", note: "hǎiguān" },
            { l1: "签证", en: "visa", note: "qiānzhèng" },
            { l1: "行李提取处", en: "baggage claim", note: "xíngli tíqǔ chù" },
            { l1: "机场快轨", en: "Airport Express", note: "jīchǎng kuàiguǐ" },
            { l1: "旅游", en: "tourism / to travel", note: "lǚyóu" },
          ],
        },
        {
          type: "dialogue",
          heading: "At immigration",
          setup: "The officer checks your passport.",
          lines: [
            { speaker: "Officer", l1: "您好，护照。", en: "Hello, passport." },
            { speaker: "You", l1: "给您。", en: "Here you go." },
            { speaker: "Officer", l1: "来中国做什么？", en: "What are you doing in China?" },
            { speaker: "You", l1: "旅游，待一个星期。", en: "Tourism, staying one week." },
            { speaker: "Officer", l1: "住在哪儿？", en: "Where are you staying?" },
            { speaker: "You", l1: "住在王府井的一家饭店。", en: "At a hotel in Wangfujing." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Complete the exchange",
          items: [
            {
              template: "您好，请出示___。",
              answer: "护照",
              en: "Hello, please show your passport.",
              options: ["护照", "行李", "航班", "海关"],
            },
            {
              template: "我来中国___。",
              answer: "旅游",
              en: "I'm coming to China for tourism.",
              options: ["旅游", "海关", "签证", "到达"],
            },
            {
              template: "我的___在哪儿提取？",
              answer: "行李",
              en: "Where do I collect my luggage?",
              options: ["行李", "护照", "登机牌", "签证"],
            },
            {
              template: "我待一个___。",
              answer: "星期",
              en: "I'm staying one week.",
              options: ["星期", "护照", "机场", "海关"],
            },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Quick check",
          questions: [
            {
              q: "护照 (hùzhào) is your…",
              options: ["luggage", "passport", "boarding pass", "visa"],
              correct: 1,
            },
            {
              q: "行李 (xíngli) means…",
              options: ["flight", "luggage", "customs", "arrivals"],
              correct: 1,
            },
            {
              q: "到达 (dàodá) means…",
              options: ["departures", "arrivals", "customs", "boarding"],
              correct: 1,
            },
            {
              q: "机场快轨 (jīchǎng kuàiguǐ) is…",
              options: ["a taxi rank", "the Airport Express train", "the customs hall", "the boarding gate"],
              correct: 1,
              fb: "It's the express rail link from PEK into the metro network.",
            },
          ],
        },
      ],
    },
    {
      slug: "hotel-checkin",
      title: "Hotel check-in",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Checking in",
          body: [
            "Open with your reservation: <strong>我有预订</strong> (wǒ yǒu yùdìng, \"I have a reservation\"). Hand over your <em>护照</em> — hotels must register foreign guests.",
            "Know your room type: <strong>单人间</strong> (dānrénjiān, single) vs <strong>双人间</strong> (shuāngrénjiān, double). Say how many nights with the measure word <strong>晚</strong> (wǎn): <em>三晚</em> = three nights.",
            "Check-in is <strong>入住</strong> (rùzhù); check-out is <strong>退房</strong> (tuìfáng). You'll often leave a <strong>押金</strong> (yājīn, deposit), refunded at check-out.",
          ],
          keyPoint:
            "我有预订 = I have a reservation. 单人间/双人间 = single/double room. 三晚 = three nights.",
        },
        {
          type: "vocab",
          heading: "Check-in vocab",
          items: [
            { l1: "预订", en: "reservation / to book", note: "yùdìng" },
            { l1: "入住", en: "to check in", note: "rùzhù" },
            { l1: "退房", en: "to check out", note: "tuìfáng" },
            { l1: "单人间", en: "single room", note: "dānrénjiān" },
            { l1: "双人间", en: "double room", note: "shuāngrénjiān" },
            { l1: "标准间", en: "standard twin room", note: "biāozhǔnjiān" },
            { l1: "晚", en: "night (measure word)", note: "wǎn — 三晚 = three nights" },
            { l1: "押金", en: "deposit", note: "yājīn" },
            { l1: "房卡", en: "room key card", note: "fángkǎ" },
            { l1: "早餐", en: "breakfast", note: "zǎocān" },
            { l1: "几楼", en: "which floor", note: "jǐ lóu" },
            { l1: "含早餐", en: "breakfast included", note: "hán zǎocān" },
          ],
        },
        {
          type: "dialogue",
          heading: "At the front desk",
          setup: "You arrive at your hotel in Wangfujing.",
          lines: [
            { speaker: "You", l1: "你好，我有预订，姓李。", en: "Hi, I have a reservation under the name Li." },
            { speaker: "Clerk", l1: "好的，请给我护照。双人间，三晚，对吗？", en: "Okay, passport please. A double room, three nights, right?" },
            { speaker: "You", l1: "对。含早餐吗？", en: "Right. Is breakfast included?" },
            { speaker: "Clerk", l1: "含早餐，在二楼。押金五百块。", en: "Yes, on the 2nd floor. The deposit is 500 yuan." },
            { speaker: "You", l1: "可以刷卡吗？", en: "Can I pay by card?" },
            { speaker: "Clerk", l1: "可以。这是房卡，房间在八楼。", en: "Sure. Here's your key card — the room is on the 8th floor." },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the request",
          items: [
            { tokens: ["你好", "，", "我", "有", "预订", "。"], en: "Hello, I have a reservation." },
            { tokens: ["我", "要", "一", "个", "双人间", "，", "三", "晚", "。"], en: "I'd like a double room for three nights." },
            { tokens: ["含", "早餐", "吗", "？"], en: "Is breakfast included?" },
            { tokens: ["房间", "在", "几", "楼", "？"], en: "Which floor is the room on?" },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Hello, I have a reservation. A single room for two nights, please.",
          reference: "你好，我有预订。一个单人间，两晚，谢谢。",
          hint: "我有预订 = I have a reservation, 单人间 = single room, 两晚 = two nights.",
        },
        {
          type: "tip",
          heading: "三晚 vs 三天",
          body: "Count hotel stays in <strong>晚</strong> (wǎn, nights), not 天 (days). <em>三晚</em> means three nights, which is what the hotel bills. Saying <em>三天</em> (three days) is understood but can blur the check-out date — stick with <em>晚</em> at the front desk.",
          example: { l1: "我住三晚。", en: "I'm staying three nights." },
        },
      ],
    },
    {
      slug: "hotel-room-problems",
      title: "In the room — and polite problems",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Room words and reporting issues",
          body: [
            "Know the basics: <strong>空调</strong> (kōngtiáo, A/C), <strong>热水</strong> (rèshuǐ, hot water), <strong>wifi / 无线网</strong> (wúxiàn wǎng), <strong>毛巾</strong> (máojīn, towel).",
            "To report a broken thing, name it and add <strong>坏了</strong> (huài le, \"is broken\"): <em>空调坏了</em> = the A/C is broken.",
            "Stay polite by leading with <strong>不好意思</strong> (bù hǎoyìsi, \"excuse me / sorry to bother\") and asking <em>能…吗？</em> (néng… ma?, \"could you…?\"). A calm <em>能帮我看一下吗？</em> goes a long way.",
          ],
          keyPoint:
            "[thing] 坏了 = [thing] is broken. Open with 不好意思 and ask 能…吗? to stay polite.",
        },
        {
          type: "vocab",
          heading: "Room & problem vocab",
          items: [
            { l1: "空调", en: "air conditioning", note: "kōngtiáo" },
            { l1: "热水", en: "hot water", note: "rèshuǐ" },
            { l1: "无线网", en: "wifi", note: "wúxiàn wǎng — also just 'wifi'" },
            { l1: "密码", en: "password", note: "mìmǎ" },
            { l1: "毛巾", en: "towel", note: "máojīn" },
            { l1: "灯", en: "light / lamp", note: "dēng" },
            { l1: "坏了", en: "is broken / not working", note: "huài le" },
            { l1: "不好意思", en: "excuse me / sorry to bother", note: "bù hǎoyìsi" },
            { l1: "能…吗", en: "could you…?", note: "néng… ma" },
            { l1: "修", en: "to fix / repair", note: "xiū" },
            { l1: "换", en: "to change / swap", note: "huàn" },
            { l1: "打扫", en: "to clean (the room)", note: "dǎsǎo" },
          ],
        },
        {
          type: "dialogue",
          heading: "Calling the front desk",
          setup: "Your room's A/C won't turn on.",
          lines: [
            { speaker: "You", l1: "不好意思，我房间的空调坏了。", en: "Sorry to bother you — the A/C in my room is broken." },
            { speaker: "Front desk", l1: "好的，几号房间？", en: "Okay, which room number?" },
            { speaker: "You", l1: "八〇五。还有，没有热水。", en: "805. Also, there's no hot water." },
            { speaker: "Front desk", l1: "不好意思，我们马上派人来修。", en: "We're sorry — we'll send someone to fix it right away." },
            { speaker: "You", l1: "能再给我两条毛巾吗？", en: "Could you also bring me two more towels?" },
            { speaker: "Front desk", l1: "没问题，几分钟就到。", en: "No problem, they'll be there in a few minutes." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Report the problem",
          items: [
            {
              template: "空调___了。",
              answer: "坏",
              en: "The A/C is broken.",
              options: ["坏", "热", "换", "修"],
            },
            {
              template: "房间里没有___水。",
              answer: "热",
              en: "There's no hot water in the room.",
              options: ["热", "坏", "灯", "换"],
            },
            {
              template: "___给我换个房间吗？",
              answer: "能",
              en: "Could you change my room?",
              options: ["能", "坏", "修", "打扫"],
            },
            {
              template: "无线网的___是多少？",
              answer: "密码",
              en: "What's the wifi password?",
              options: ["密码", "毛巾", "空调", "热水"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Excuse me, the A/C is broken. Could you send someone to fix it?",
          reference: "不好意思，空调坏了。能派人来修吗？",
          hint: "不好意思 = excuse me, 坏了 = is broken, 能…吗 = could you…, 修 = fix.",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "'The A/C is broken' =",
              options: ["空调坏了", "空调换了", "空调修了", "空调热了"],
              correct: 0,
            },
            {
              q: "不好意思 (bù hǎoyìsi) is used to…",
              options: ["thank someone", "politely get attention / apologize", "say goodbye", "ask the price"],
              correct: 1,
            },
            {
              q: "热水 (rèshuǐ) means…",
              options: ["wifi", "hot water", "towel", "light"],
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
        q: "护照 (hùzhào) means…",
        options: ["luggage", "passport", "flight", "visa"],
        correct: 1,
      },
      {
        q: "行李 (xíngli) means…",
        options: ["luggage", "passport", "customs", "boarding pass"],
        correct: 0,
      },
      {
        q: "'I have a reservation' =",
        options: ["我有预订", "我要退房", "我有护照", "我去机场"],
        correct: 0,
      },
      {
        q: "单人间 (dānrénjiān) is a…",
        options: ["double room", "single room", "standard twin", "deposit"],
        correct: 1,
      },
      {
        q: "'Three nights' =",
        options: ["三天", "三晚", "三楼", "三个"],
        correct: 1,
      },
      {
        q: "入住 (rùzhù) means to…",
        options: ["check out", "check in", "book online", "pay a deposit"],
        correct: 1,
      },
      {
        q: "空调 (kōngtiáo) means…",
        options: ["hot water", "air conditioning", "towel", "wifi"],
        correct: 1,
      },
      {
        q: "坏了 (huài le) means…",
        options: ["is clean", "is broken", "is included", "is ready"],
        correct: 1,
      },
      {
        q: "押金 (yājīn) means…",
        options: ["deposit", "breakfast", "key card", "passport"],
        correct: 0,
      },
      {
        q: "Translate: 'Is breakfast included?'",
        options: ["含早餐吗？", "几楼？", "有热水吗？", "多少钱一晚？"],
        correct: 0,
      },
    ],
  },
};
