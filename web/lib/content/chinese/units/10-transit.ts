import type { Unit } from "../../types";

export const UNIT_TRANSIT: Unit = {
  slug: "transit",
  stage: 3,
  order: 10,
  icon: "🚇",
  title: "Beijing transit",
  tagline: "地铁, 公交, 出租车, and the 一卡通 card.",
  badge: "tourist",
  lessons: [
    {
      slug: "transit-metro-bus",
      title: "Metro, bus, and the 一卡通",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Beijing's network runs on one tap",
          body: [
            "Beijing has a huge metro — the <strong>地铁</strong> (dìtiě) — with dozens of color-coded lines. Almost every tourist sight is a short walk from a station, and signs are bilingual.",
            "The <strong>公交车</strong> (gōngjiāochē, city bus) reaches the gaps the metro misses, but stops are announced mostly in Chinese, so the metro is friendlier for beginners.",
            "The smartest move is the <strong>一卡通</strong> (yīkǎtōng) — a rechargeable transit card that works on metro <em>and</em> bus. Tap in, tap out. You can also pay by Alipay or WeChat QR codes, but the card never needs a phone signal.",
          ],
          keyPoint:
            "地铁 = metro, 公交车 = bus, 一卡通 = the rechargeable tap card that works on both.",
        },
        {
          type: "vocab",
          heading: "Core transit words",
          items: [
            { l1: "地铁", en: "metro / subway", note: "dìtiě" },
            { l1: "公交车", en: "city bus", note: "gōngjiāochē" },
            { l1: "出租车", en: "taxi", note: "chūzūchē" },
            { l1: "站", en: "station / stop", note: "zhàn" },
            { l1: "地铁站", en: "metro station", note: "dìtiězhàn" },
            { l1: "一卡通", en: "Beijing transit card", note: "yīkǎtōng" },
            { l1: "票", en: "ticket", note: "piào" },
            { l1: "买票", en: "to buy a ticket", note: "mǎi piào" },
            { l1: "充值", en: "to top up / recharge", note: "chōngzhí" },
            { l1: "刷卡", en: "to tap/swipe the card", note: "shuā kǎ" },
            { l1: "进站", en: "to enter the station", note: "jìn zhàn" },
            { l1: "出站", en: "to exit the station", note: "chū zhàn" },
          ],
        },
        {
          type: "tip",
          heading: "Security check before every ride",
          body: "Every Beijing metro station has a <strong>安检</strong> (ānjiǎn, security check). Put your bag on the X-ray belt and walk through. It is quick and routine — budget two minutes. Keep your <em>一卡通</em> handy so you can tap straight through the gate (<em>闸机</em>, zhájī) afterward.",
          example: { l1: "请把包放在这里。", en: "Please put your bag here." },
        },
        {
          type: "dialogue",
          heading: "Buying a card at the counter",
          setup: "You walk up to the service window in a metro station.",
          lines: [
            { speaker: "You", l1: "你好，我想买一张一卡通。", en: "Hello, I'd like to buy a transit card." },
            { speaker: "Clerk", l1: "好的。押金二十块，充多少钱？", en: "Okay. The deposit is 20 yuan. How much do you want to load?" },
            { speaker: "You", l1: "充五十块，谢谢。", en: "Load 50 yuan, thank you." },
            { speaker: "Clerk", l1: "一共七十块。可以刷卡或者手机支付。", en: "70 yuan total. You can pay by card or phone." },
            { speaker: "You", l1: "手机支付，可以扫这个码吗？", en: "By phone — can I scan this code?" },
            { speaker: "Clerk", l1: "可以。卡给你，进站刷一下就行。", en: "Sure. Here's your card — just tap to enter." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Quick check",
          questions: [
            {
              q: "What does 一卡通 (yīkǎtōng) let you do?",
              options: [
                "Tap to ride both metro and bus",
                "Enter museums for free",
                "Order a taxi",
                "Skip the security check",
              ],
              correct: 0,
            },
            {
              q: "充值 (chōngzhí) means…",
              options: ["to exit", "to top up / recharge", "to buy a taxi", "to validate"],
              correct: 1,
            },
            {
              q: "地铁站 (dìtiězhàn) is…",
              options: ["a bus stop", "a metro station", "a ticket", "the security check"],
              correct: 1,
            },
            {
              q: "At 安检 (ānjiǎn) you should…",
              options: [
                "buy your ticket",
                "put your bag on the X-ray belt",
                "tap your card twice",
                "wait for the bus",
              ],
              correct: 1,
              fb: "安检 is the bag-screening security check at every station entrance.",
            },
          ],
        },
      ],
    },
    {
      slug: "transit-fares-transfers",
      title: "Fares, lines, and transfers",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Asking how much and which line",
          body: [
            "Metro fares depend on distance, so a useful question is <strong>到…多少钱？</strong> (dào… duōshǎo qián? — \"how much to…?\").",
            "Beijing lines are numbered or named by color, so you'll ask <strong>哪一条线？</strong> (nǎ yì tiáo xiàn? — \"which line?\"). The measure word for a line is <em>条</em> (tiáo).",
            "To change lines mid-journey you <strong>换乘</strong> (huànchéng, transfer). Big interchange stations like 西直门 and 国贸 have long, well-signed transfer corridors — follow the <em>换乘</em> signs.",
          ],
          keyPoint:
            "到…多少钱? = how much to…? 哪一条线? = which line? 换乘 = to transfer.",
        },
        {
          type: "vocab",
          heading: "Lines & fares vocab",
          items: [
            { l1: "线", en: "line", note: "xiàn — e.g. 一号线 = Line 1" },
            { l1: "一号线", en: "Line 1", note: "yī hào xiàn" },
            { l1: "二号线", en: "Line 2", note: "èr hào xiàn — the loop around the center" },
            { l1: "换乘", en: "to transfer (lines)", note: "huànchéng" },
            { l1: "方向", en: "direction", note: "fāngxiàng" },
            { l1: "终点站", en: "terminal / end of line", note: "zhōngdiǎnzhàn" },
            { l1: "下一站", en: "next stop", note: "xià yí zhàn" },
            { l1: "上车", en: "to board / get on", note: "shàng chē" },
            { l1: "下车", en: "to get off", note: "xià chē" },
            { l1: "到", en: "to arrive / reach", note: "dào" },
            { l1: "多少钱", en: "how much (money)", note: "duōshǎo qián" },
            { l1: "转", en: "to switch (over to)", note: "zhuǎn — informal for transfer" },
          ],
        },
        {
          type: "dialogue",
          heading: "Which line to the Summer Palace?",
          setup: "You ask a station attendant how to reach 颐和园.",
          lines: [
            { speaker: "You", l1: "请问，到颐和园坐哪一条线？", en: "Excuse me, which line goes to the Summer Palace?" },
            { speaker: "Attendant", l1: "坐四号线，往北坐到北宫门站。", en: "Take Line 4 north to Beigongmen station." },
            { speaker: "You", l1: "需要换乘吗？", en: "Do I need to transfer?" },
            { speaker: "Attendant", l1: "如果你在这儿上车，要在西单换四号线。", en: "If you board here, transfer to Line 4 at Xidan." },
            { speaker: "You", l1: "到那儿多少钱？", en: "How much is it to there?" },
            { speaker: "Attendant", l1: "刷一卡通，大概五块。", en: "With the transit card, about 5 yuan." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Complete the question",
          items: [
            {
              template: "请问，到天安门坐___一条线？",
              answer: "哪",
              en: "Excuse me, which line goes to Tiananmen?",
              options: ["哪", "那", "几", "什么"],
            },
            {
              template: "到机场___多少钱？",
              answer: "要",
              en: "How much does it cost to the airport?",
              options: ["是", "要", "在", "有"],
            },
            {
              template: "我要在西直门___乘二号线。",
              answer: "换",
              en: "I need to transfer to Line 2 at Xizhimen.",
              options: ["换", "上", "下", "买"],
            },
            {
              template: "这是几___线？",
              answer: "号",
              en: "Which number line is this?",
              options: ["号", "条", "个", "张"],
            },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the question",
          items: [
            { tokens: ["到", "故宫", "坐", "哪", "一", "条", "线", "？"], en: "Which line goes to the Forbidden City?" },
            { tokens: ["我", "要", "在", "国贸", "换乘", "。"], en: "I need to transfer at Guomao." },
            { tokens: ["到", "这里", "多少", "钱", "？"], en: "How much is it to here?" },
            { tokens: ["下", "一", "站", "是", "什么", "站", "？"], en: "What is the next stop?" },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Excuse me, which line goes to Tiananmen Square?",
          reference: "请问，到天安门广场坐哪一条线？",
          hint: "Start with 请问 (excuse me), use 到…坐哪一条线 for 'which line goes to…'.",
        },
      ],
    },
    {
      slug: "transit-taxi",
      title: "Taking a taxi",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Hailing a Beijing taxi",
          body: [
            "Tell the driver where with <strong>去…</strong> (qù…, \"to…\") plus your destination. Have the Chinese name or address ready — many drivers don't read English.",
            "Address the driver politely as <strong>师傅</strong> (shīfu, literally \"master\" — the standard friendly term for any skilled worker, including drivers).",
            "Insist on the meter: <strong>打表</strong> (dǎ biǎo, \"run the meter\"). A legit Beijing taxi always uses it. If someone quotes a flat price before you get in, it's usually a tourist trap.",
          ],
          keyPoint:
            "去… = (take me) to…, 师傅 = driver (polite), 打表 = run the meter.",
        },
        {
          type: "vocab",
          heading: "Taxi vocab",
          items: [
            { l1: "出租车", en: "taxi", note: "chūzūchē" },
            { l1: "师傅", en: "driver (polite address)", note: "shīfu" },
            { l1: "去", en: "to go to", note: "qù" },
            { l1: "打表", en: "to run the meter", note: "dǎ biǎo" },
            { l1: "停", en: "to stop", note: "tíng" },
            { l1: "这里 / 这儿", en: "here", note: "zhèlǐ / zhèr" },
            { l1: "前面", en: "ahead / up front", note: "qiánmiàn" },
            { l1: "路口", en: "intersection", note: "lùkǒu" },
            { l1: "发票", en: "receipt", note: "fāpiào" },
            { l1: "找钱", en: "to give change", note: "zhǎo qián" },
            { l1: "堵车", en: "traffic jam", note: "dǔchē" },
            { l1: "快一点", en: "a bit faster", note: "kuài yìdiǎn" },
          ],
        },
        {
          type: "dialogue",
          heading: "In the taxi",
          setup: "You hop in a taxi heading to the Forbidden City.",
          lines: [
            { speaker: "You", l1: "师傅，去故宫，谢谢。", en: "Driver, to the Forbidden City, thanks." },
            { speaker: "Driver", l1: "好嘞，故宫哪个门？", en: "Sure — which gate of the Forbidden City?" },
            { speaker: "You", l1: "南门，午门。麻烦您打表。", en: "The south gate, Meridian Gate. Please run the meter." },
            { speaker: "Driver", l1: "没问题，都打表的。", en: "No problem, I always use the meter." },
            { speaker: "You", l1: "前面路口停就行。", en: "Just stop at the intersection ahead." },
            { speaker: "Driver", l1: "好，三十二块。要发票吗？", en: "Okay, 32 yuan. Want a receipt?" },
          ],
        },
        {
          type: "listen",
          heading: "What did the driver say?",
          intro: "Listen, then pick the closest meaning.",
          items: [
            { l1: "去哪儿？", en: "Where to?", options: ["Where to?", "How much?", "Get out", "Want a receipt?"], correct: 0 },
            { l1: "前面堵车。", en: "There's a traffic jam ahead.", options: ["Stop here", "There's a traffic jam ahead", "We've arrived", "Pay by card"], correct: 1 },
            { l1: "一共三十块。", en: "30 yuan total.", options: ["13 yuan total", "30 yuan total", "Turn here", "No change"], correct: 1 },
            { l1: "要发票吗？", en: "Do you want a receipt?", options: ["Run the meter?", "Stop ahead?", "Do you want a receipt?", "Where to?"], correct: 2 },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Driver, to the Summer Palace please. Please run the meter.",
          reference: "师傅，去颐和园，谢谢。麻烦您打表。",
          hint: "师傅 = driver, 去… = to…, 打表 = run the meter.",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "How do you politely address a taxi driver?",
              options: ["老板", "师傅", "先生", "服务员"],
              correct: 1,
            },
            {
              q: "'Please run the meter' =",
              options: ["打表", "打车", "买票", "充值"],
              correct: 0,
            },
            {
              q: "To tell the driver your destination, you start with…",
              options: ["到了", "去", "停", "换"],
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
        q: "地铁 (dìtiě) means…",
        options: ["bus", "metro", "taxi", "ticket"],
        correct: 1,
      },
      {
        q: "The rechargeable card for metro and bus is the…",
        options: ["发票", "一卡通", "护照", "门票"],
        correct: 1,
      },
      {
        q: "'How much to…?' =",
        options: ["到…多少钱？", "到…在哪儿？", "去…几点？", "到…哪一条线？"],
        correct: 0,
      },
      {
        q: "换乘 (huànchéng) means…",
        options: ["to top up", "to transfer between lines", "to get off", "to buy a ticket"],
        correct: 1,
      },
      {
        q: "'Which line?' =",
        options: ["哪一条线？", "几点？", "多少钱？", "去哪儿？"],
        correct: 0,
      },
      {
        q: "充值 (chōngzhí) means to…",
        options: ["transfer", "top up the card", "run the meter", "get a receipt"],
        correct: 1,
      },
      {
        q: "You address a taxi driver as…",
        options: ["老师", "师傅", "同志", "阿姨"],
        correct: 1,
      },
      {
        q: "打表 (dǎ biǎo) means…",
        options: ["to hail a cab", "to run the meter", "to pay by phone", "to give change"],
        correct: 1,
      },
      {
        q: "安检 (ānjiǎn) at the metro is…",
        options: ["the ticket counter", "the security check", "the transfer corridor", "the exit gate"],
        correct: 1,
      },
      {
        q: "Translate: 'Driver, to the Forbidden City, please.'",
        options: [
          "师傅，去故宫，谢谢。",
          "老板，故宫多少钱？",
          "请问，故宫在哪儿？",
          "师傅，打表故宫。",
        ],
        correct: 0,
      },
    ],
  },
};
