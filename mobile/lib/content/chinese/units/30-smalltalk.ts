import type { Unit } from "../../types";

export const UNIT_SMALLTALK: Unit = {
  slug: "smalltalk",
  stage: 7,
  order: 30,
  icon: "🍵",
  title: "Small talk",
  tagline: "吃了吗?, the weather, and graceful exits.",
  badge: "culture",
  lessons: [
    {
      slug: "smalltalk-openers",
      title: "The classic openers: 吃了吗? & 最近怎么样?",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "How conversations actually start in Beijing",
          body: [
            "The textbook \"你好\" is fine, but neighbors and acquaintances often open with something warmer and more specific.",
            "<strong>吃了吗?</strong> (chī le ma) literally \"Have you eaten?\" is a classic friendly greeting — especially from older generations and around mealtimes. It's <em>not</em> a real dinner invitation; it's phatic, like \"How's it going?\" A simple <strong>吃了，你呢?</strong> (\"Eaten, and you?\") closes the loop.",
            "<strong>最近怎么样?</strong> (zuìjìn zěnmeyàng) = \"How've you been lately?\" — the all-purpose check-in. <strong>最近忙吗?</strong> = \"Busy lately?\" is another favorite.",
            "Replies stay modest and easy: <strong>还行</strong> (hái xíng, \"so-so / okay\"), <strong>还可以</strong> (hái kěyǐ, \"not bad\"), <strong>挺好的</strong> (tǐng hǎo de, \"pretty good\").",
          ],
          keyPoint:
            "吃了吗? = a friendly 'how's it going?' (not a real invite) · 最近怎么样? = how've you been lately?",
        },
        {
          type: "vocab",
          heading: "Openers & easy replies",
          items: [
            { l1: "吃了吗？", en: "Have you eaten? (friendly greeting)", note: "chī le ma — phatic, not a real invite." },
            { l1: "最近怎么样？", en: "How've you been lately?", note: "zuìjìn zěnmeyàng." },
            { l1: "最近忙吗？", en: "Busy lately?", note: "zuìjìn máng ma." },
            { l1: "好久不见", en: "long time no see", note: "hǎojiǔ bú jiàn." },
            { l1: "还行", en: "so-so / okay", note: "hái xíng." },
            { l1: "还可以", en: "not bad / pretty okay", note: "hái kěyǐ." },
            { l1: "挺好的", en: "pretty good", note: "tǐng hǎo de." },
            { l1: "老样子", en: "same as always / the usual", note: "lǎo yàngzi." },
            { l1: "你呢？", en: "and you? / how about you?", note: "nǐ ne — bounces the question back." },
          ],
        },
        {
          type: "dialogue",
          heading: "Meeting a neighbor in the hutong",
          setup: "You run into a neighbor by the courtyard gate around noon.",
          lines: [
            { speaker: "邻居 (Neighbor)", l1: "哎，吃了吗？", en: "Hey, have you eaten?" },
            { speaker: "You", l1: "吃了，您呢？", en: "I have, and you? (polite)" },
            { speaker: "邻居 (Neighbor)", l1: "刚吃完。最近怎么样？", en: "Just finished. How've you been lately?" },
            { speaker: "You", l1: "还行，就是有点忙。", en: "So-so, just a bit busy." },
            { speaker: "邻居 (Neighbor)", l1: "忙好啊，忙说明有事做。", en: "Busy is good — it means you've got things going on." },
            { speaker: "You", l1: "哈哈，是的。您也是老样子？", en: "Haha, true. You're the same as always?" },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Read the situation",
          questions: [
            {
              q: "A neighbor greets you with '吃了吗?'. The best reply is:",
              qL1: "邻居说'吃了吗?'。最好的回答是：",
              options: [
                "No thanks, I'm not hungry.",
                "吃了，你呢？",
                "Yes, let's go eat together right now!",
                "对不起。",
              ],
              correct: 1,
              fb: "吃了吗? is a phatic greeting, not an invitation. 吃了，你呢? closes the loop warmly.",
            },
            {
              q: "Which phrase means 'long time no see'?",
              options: ["好久不见", "最近忙吗", "老样子", "还可以"],
              correct: 0,
              fb: "好久不见 (hǎojiǔ bú jiàn) — literally 'very long not see'.",
            },
            {
              q: "A modest, natural reply to '最近怎么样?' is:",
              options: ["太好了！", "还行，你呢？", "差不多。", "真的吗？"],
              correct: 1,
              fb: "还行，你呢? = 'so-so, and you?' — modest and bounces it back.",
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Long time no see! How've you been lately?",
          reference: "好久不见！最近怎么样？",
          hint: "好久不见 + 最近怎么样?",
        },
      ],
    },
    {
      slug: "smalltalk-weather",
      title: "Weather & seasons small talk",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Weather: the safe, universal topic",
          body: [
            "Beijing's four seasons give endless small-talk material: dry cold winters, dusty spring winds, hot humid summers, and a short golden autumn that locals adore.",
            "The pattern is simple: <strong>今天 + weather + 了/啊</strong>. <em>今天好热啊!</em> = \"It's so hot today!\" <em>今天好冷!</em> = \"So cold today!\"",
            "<strong>天气</strong> (tiānqì) = weather. <strong>下雨</strong> (xià yǔ) = to rain. <strong>下雪</strong> (xià xuě) = to snow. <strong>刮风</strong> (guā fēng) = windy.",
            "Beijingers often add a comment about air quality — <strong>空气</strong> (kōngqì, air). On a clear blue-sky day you'll hear <em>今天空气真好!</em> = \"The air is really nice today!\"",
          ],
          keyPoint:
            "Pattern: 今天 + weather word + 啊/了 = 'It's so ___ today!' (今天好热啊! · 今天下雨了。)",
        },
        {
          type: "vocab",
          heading: "Weather & seasons",
          items: [
            { l1: "天气", en: "weather", note: "tiānqì." },
            { l1: "热", en: "hot", note: "rè." },
            { l1: "冷", en: "cold", note: "lěng." },
            { l1: "下雨", en: "to rain", note: "xià yǔ." },
            { l1: "下雪", en: "to snow", note: "xià xuě — Beijing winters." },
            { l1: "刮风", en: "to be windy", note: "guā fēng — spring sandstorms." },
            { l1: "空气", en: "air / air quality", note: "kōngqì." },
            { l1: "春天", en: "spring", note: "chūntiān." },
            { l1: "夏天", en: "summer", note: "xiàtiān." },
            { l1: "秋天", en: "autumn", note: "qiūtiān — Beijing's loveliest season." },
            { l1: "冬天", en: "winter", note: "dōngtiān." },
            { l1: "暖和", en: "warm (pleasant)", note: "nuǎnhuo." },
          ],
        },
        {
          type: "tip",
          heading: "Beijing's autumn is the conversation everyone wants",
          body: "If you want to charm a Beijinger, mention <strong>秋天</strong> (autumn). The city's brief autumn — crisp air, golden ginkgo leaves, blue skies — is locally beloved. <em>北京的秋天最美。</em> (Běijīng de qiūtiān zuì měi) = \"Beijing's autumn is the most beautiful.\" Saying this is an easy way to show you appreciate the city.",
          example: { l1: "今天天气真好，秋天来了。", en: "The weather's really nice today, autumn has arrived." },
        },
        {
          type: "fillBlank",
          heading: "Fill in the weather word",
          intro: "Complete each line with the right word.",
          items: [
            {
              template: "今天好 ___ 啊，我要开空调。",
              answer: "热",
              en: "It's so hot today, I need to turn on the AC.",
              options: ["热", "冷", "暖和", "下雪"],
            },
            {
              template: "外面在 ___，记得带伞。",
              answer: "下雨",
              en: "It's raining outside, remember to bring an umbrella.",
              options: ["刮风", "下雨", "暖和", "热"],
            },
            {
              template: "北京的 ___ 天最美，叶子都黄了。",
              answer: "秋",
              en: "Beijing's autumn is the most beautiful, the leaves all turn yellow.",
              options: ["春", "夏", "秋", "冬"],
            },
            {
              template: "今天 ___ 真好，天很蓝。",
              answer: "空气",
              en: "The air is really good today, the sky is very blue.",
              options: ["天气", "空气", "下雪", "刮风"],
            },
          ],
        },
        {
          type: "dialogue",
          heading: "Small talk on a clear autumn day",
          setup: "You and a coworker walk to lunch through a Beijing park.",
          lines: [
            { speaker: "同事 (Coworker)", l1: "今天天气真好！", en: "The weather's really nice today!" },
            { speaker: "You", l1: "对啊，空气也很好。", en: "Yeah, the air is great too." },
            { speaker: "同事 (Coworker)", l1: "我最喜欢北京的秋天。", en: "I love Beijing's autumn the most." },
            { speaker: "You", l1: "我也是，不太冷也不太热。", en: "Me too — not too cold, not too hot." },
            { speaker: "同事 (Coworker)", l1: "可惜秋天很短。", en: "It's a shame autumn is so short." },
            { speaker: "You", l1: "是啊，冬天很快就来了。", en: "Yeah, winter will be here soon." },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "It's so hot today! But the air is really good.",
          reference: "今天好热啊！不过空气真好。",
          hint: "今天好热啊! + 不过 (but) + 空气真好.",
        },
      ],
    },
    {
      slug: "smalltalk-compliments-exits",
      title: "Compliments, modest deflection & graceful exits",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Receiving a compliment — and leaving politely",
          body: [
            "In Chinese culture, modesty is a virtue. When complimented, the polite reflex is to gently deflect rather than simply say \"thanks.\"",
            "<strong>哪里哪里</strong> (nǎli nǎli) literally \"where? where?\" = a humble \"oh, not at all / you flatter me.\" Doubling it softens it further. <strong>过奖了</strong> (guòjiǎng le) = \"you praise me too much.\"",
            "You can still say <strong>谢谢</strong> (xièxie) — among younger people a plain thank-you is increasingly normal — but pairing it with a touch of modesty (\"谢谢，还差得远呢\" = thanks, I've still got a long way to go) lands well.",
            "To leave gracefully, signal it first: <strong>我先走了</strong> (wǒ xiān zǒu le) = \"I'll head off first.\" Add a reason and a warm close: <strong>下次再聊</strong> (xiàcì zài liáo) = \"let's chat again next time.\"",
          ],
          keyPoint:
            "Compliment → deflect modestly: 哪里哪里 / 过奖了. Leaving → 我先走了 + 下次再聊.",
        },
        {
          type: "vocab",
          heading: "Modesty & graceful exits",
          items: [
            { l1: "哪里哪里", en: "oh, not at all / you flatter me", note: "nǎli nǎli — modest deflection." },
            { l1: "过奖了", en: "you praise me too much", note: "guòjiǎng le." },
            { l1: "还差得远呢", en: "I've still got a long way to go", note: "hái chà de yuǎn ne — humble." },
            { l1: "你太客气了", en: "you're too kind / too polite", note: "nǐ tài kèqi le." },
            { l1: "我先走了", en: "I'll head off first", note: "wǒ xiān zǒu le." },
            { l1: "下次再聊", en: "let's chat again next time", note: "xiàcì zài liáo." },
            { l1: "改天见", en: "see you another day", note: "gǎitiān jiàn." },
            { l1: "慢走", en: "take care / mind how you go", note: "màn zǒu — said to the person leaving." },
            { l1: "保持联系", en: "keep in touch", note: "bǎochí liánxì." },
          ],
        },
        {
          type: "tip",
          heading: "慢走 — what the host says back",
          body: "When you announce <strong>我先走了</strong>, the host or person staying behind will often say <strong>慢走</strong> (màn zǒu), literally \"walk slowly\" = \"take care, mind how you go.\" You don't say 慢走 about yourself — it's said <em>to</em> the departing guest. A waiter or shopkeeper will say it as you leave the restaurant too.",
          example: { l1: "我先走了。— 好的，慢走！", en: "I'll head off now. — Okay, take care!" },
        },
        {
          type: "multipleChoice",
          heading: "Respond with grace",
          questions: [
            {
              q: "Someone says '你的中文真好!' (Your Chinese is so good!). The modest reply is:",
              qL1: "有人说'你的中文真好!'。谦虚的回答是：",
              options: ["谢谢，我最厉害！", "哪里哪里，还差得远呢。", "对啊，我很厉害。", "随便。"],
              correct: 1,
              fb: "哪里哪里 + 还差得远呢 deflects modestly — the culturally graceful response.",
            },
            {
              q: "You need to leave a gathering. You announce:",
              options: ["慢走！", "我先走了。", "吃了吗？", "哪里哪里。"],
              correct: 1,
              fb: "我先走了 = 'I'll head off first' — the standard way to signal your exit.",
            },
            {
              q: "Your friend is leaving. You say goodbye with:",
              options: ["我先走了。", "慢走！下次再聊。", "过奖了。", "吃了吗？"],
              correct: 1,
              fb: "慢走 is said TO the person leaving; 下次再聊 is a warm close.",
            },
            {
              q: "'过奖了' is used when…",
              options: [
                "you're saying goodbye",
                "someone has complimented you",
                "you're hungry",
                "the weather is bad",
              ],
              correct: 1,
              fb: "过奖了 = 'you praise me too much' — a modest response to a compliment.",
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Oh, you flatter me! I've still got a long way to go.",
          reference: "哪里哪里！还差得远呢。",
          hint: "哪里哪里 (deflect) + 还差得远呢 (humble).",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "The modest reply to a compliment is:",
              options: ["太好了！", "哪里哪里。", "我先走了。", "下雨了。"],
              correct: 1,
            },
            {
              q: "'我先走了' means…",
              options: ["I'll head off first", "let's eat", "see you tomorrow", "you're too kind"],
              correct: 0,
            },
            {
              q: "'慢走' is said…",
              options: [
                "to the person who is leaving",
                "to ask the time",
                "to give a compliment",
                "to apologize",
              ],
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
        q: "'吃了吗?' as a greeting is…",
        options: [
          "a literal dinner invitation",
          "a friendly 'how's it going?' (phatic)",
          "an apology",
          "a complaint about food",
        ],
        correct: 1,
      },
      {
        q: "'最近怎么样?' means…",
        options: ["how much is it?", "how've you been lately?", "where are you going?", "have you eaten?"],
        correct: 1,
      },
      {
        q: "A modest reply to '最近怎么样?' is:",
        options: ["太贵了。", "还行，你呢？", "慢走！", "下雪了。"],
        correct: 1,
      },
      {
        q: "'好久不见' means…",
        options: ["nice to meet you", "long time no see", "see you soon", "have you eaten?"],
        correct: 1,
      },
      {
        q: "Which season do Beijingers especially love to praise?",
        options: ["春天 (spring)", "夏天 (summer)", "秋天 (autumn)", "冬天 (winter)"],
        correct: 2,
      },
      {
        q: "'今天好热啊!' means…",
        options: ["It's so cold today!", "It's so hot today!", "It's raining today.", "It's windy today."],
        correct: 1,
      },
      {
        q: "When complimented, the modest deflection is:",
        options: ["哪里哪里。", "我先走了。", "吃了吗？", "刮风了。"],
        correct: 0,
      },
      {
        q: "To announce that you're leaving, you say:",
        options: ["慢走！", "我先走了。", "好久不见。", "过奖了。"],
        correct: 1,
      },
      {
        q: "'慢走' is said to…",
        options: [
          "yourself as you leave",
          "the person who is departing",
          "the weather",
          "ask someone's name",
        ],
        correct: 1,
      },
      {
        q: "Translate: 'Long time no see! How've you been lately?'",
        options: [
          "好久不见！最近怎么样？",
          "吃了吗？太贵了！",
          "我先走了！下雪了。",
          "哪里哪里！还差得远呢。",
        ],
        correct: 0,
      },
    ],
  },
};
