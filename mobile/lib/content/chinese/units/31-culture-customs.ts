import type { Unit } from "../../types";

export const UNIT_CULTURE_CUSTOMS: Unit = {
  slug: "culture-customs",
  stage: 7,
  order: 31,
  icon: "🏮",
  title: "Customs & etiquette",
  tagline: "面子 (face), gift-giving, 红包, the festivals.",
  badge: "culture",
  lessons: [
    {
      slug: "customs-face",
      title: "面子 (face) & politeness",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "面子: the social currency of 'face'",
          body: [
            "<strong>面子</strong> (miànzi) literally \"face\" is one of the most important concepts in Chinese social life. It's your reputation, dignity, and standing in the eyes of others.",
            "<strong>给面子</strong> (gěi miànzi) = \"to give face\" — to show someone respect, accept their invitation, or let them save dignity. <strong>有面子</strong> (yǒu miànzi) = to have face / look good. <strong>丢面子</strong> or <strong>丢脸</strong> (diū liǎn) = to lose face / be embarrassed.",
            "In practice this means: avoid publicly correcting or contradicting someone, especially elders or superiors; praise generously; and decline politely rather than bluntly. Criticism is best given privately and gently.",
            "Hospitality is also about face. A host insisting you eat more, or fighting to pay the bill, is offering face — and a guest who graciously accepts (after a polite protest or two) gives it back.",
          ],
          keyPoint:
            "面子 = social face/dignity. 给面子 = show respect · 有面子 = look good · 丢脸 = lose face / be embarrassed.",
        },
        {
          type: "vocab",
          heading: "Face & politeness vocabulary",
          items: [
            { l1: "面子", en: "face / social dignity / reputation", note: "miànzi." },
            { l1: "给面子", en: "to give face / show respect", note: "gěi miànzi." },
            { l1: "有面子", en: "to have face / look good", note: "yǒu miànzi." },
            { l1: "丢脸", en: "to lose face / be embarrassed", note: "diū liǎn." },
            { l1: "客气", en: "polite / courteous", note: "kèqi — 别客气 = don't be so polite." },
            { l1: "尊重", en: "to respect / respect", note: "zūnzhòng." },
            { l1: "谦虚", en: "modest / humble", note: "qiānxū — a prized virtue." },
            { l1: "请客", en: "to treat / pay for others", note: "qǐng kè — a way of giving face." },
            { l1: "礼貌", en: "manners / politeness", note: "lǐmào — 有礼貌 = well-mannered." },
          ],
        },
        {
          type: "tip",
          heading: "别客气 — the politeness loop",
          body: "When you thank a host or they offer you food, you'll hear <strong>别客气</strong> (bié kèqi) = \"don't be so polite / make yourself at home.\" Chinese hospitality runs on a friendly back-and-forth: the host insists, the guest politely protests, the host insists again. Letting the host win — accepting the food, the treat, the hospitality — is itself a way of <strong>给面子</strong> (giving face). Flatly refusing everything can unintentionally seem cold.",
          example: { l1: "谢谢您！— 别客气，多吃点。", en: "Thank you! — Don't be polite, eat more." },
        },
        {
          type: "multipleChoice",
          heading: "Navigate face",
          questions: [
            {
              q: "Your colleague makes a small mistake in a meeting. The face-conscious move is to:",
              qL1: "同事在会议上犯了个小错。顾及面子的做法是：",
              options: [
                "Correct them loudly in front of everyone",
                "Mention it gently and privately afterward",
                "Laugh about it with others",
                "Say nothing ever",
              ],
              correct: 1,
              fb: "Public correction causes 丢脸 (loss of face). Private, gentle feedback preserves dignity.",
            },
            {
              q: "'给面子' means…",
              options: ["to lose face", "to give face / show respect", "to be rude", "to pay a bill"],
              correct: 1,
              fb: "给面子 (gěi miànzi) = to give face — to honor or respect someone.",
            },
            {
              q: "A host insists you eat more and says '别客气'. This means:",
              options: [
                "Please leave now",
                "Don't be so polite — help yourself",
                "You've eaten too much",
                "The food is expensive",
              ],
              correct: 1,
              fb: "别客气 = 'don't stand on ceremony / make yourself at home'.",
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Thank you, you're too kind! — Don't be polite, eat more.",
          reference: "谢谢，你太客气了！—— 别客气，多吃点。",
          hint: "你太客气了 (you're too kind) + 别客气 (don't be polite) + 多吃点 (eat more).",
        },
      ],
    },
    {
      slug: "customs-gifts-taboos",
      title: "Gift-giving, 红包 & taboos",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Giving gifts the right way",
          body: [
            "Gift-giving is an art in China, full of warm conventions and a few well-known taboos. The point is the thought and the relationship, not just the object.",
            "<strong>红包</strong> (hóngbāo) = a red envelope holding money, given at Spring Festival (especially to children), weddings, and birthdays. Red symbolizes luck; amounts often feature the lucky number 8 (e.g., 88, 188). Nowadays digital 红包 fly around on WeChat.",
            "A receiver traditionally declines a gift once or twice before accepting — polite reluctance, not real refusal. Gifts are often opened later, in private, not in front of the giver.",
            "Numbers and objects carry meaning. <strong>八</strong> (bā, eight) sounds like 发 (fā, \"to prosper\") — very lucky. <strong>四</strong> (sì, four) sounds like 死 (sǐ, \"death\") — avoided.",
          ],
          keyPoint:
            "红包 = red envelope of money. Lucky number 八 (8 ~ prosperity); avoided number 四 (4 ~ death).",
        },
        {
          type: "vocab",
          heading: "Gifts, numbers & symbols",
          items: [
            { l1: "礼物", en: "gift / present", note: "lǐwù." },
            { l1: "红包", en: "red envelope (with money)", note: "hóngbāo." },
            { l1: "送礼", en: "to give a gift", note: "sòng lǐ." },
            { l1: "祝福", en: "blessing / good wishes", note: "zhùfú." },
            { l1: "运气", en: "luck", note: "yùnqi — 好运 = good luck." },
            { l1: "八", en: "eight (lucky — sounds like 'prosper')", note: "bā ~ 发 fā, 'to prosper'." },
            { l1: "四", en: "four (avoided — sounds like 'death')", note: "sì ~ 死 sǐ, 'death'." },
            { l1: "钟", en: "clock", note: "zhōng — never give as a gift (see tip)." },
            { l1: "吉利", en: "auspicious / lucky", note: "jílì." },
          ],
        },
        {
          type: "tip",
          heading: "Two gifts to avoid: clocks and (sometimes) pears",
          body: "Never gift a <strong>钟</strong> (clock). \"To give a clock\" is <em>送钟</em> (sòng zhōng), which sounds exactly like <em>送终</em> (sòng zhōng, \"to attend a funeral / see someone off in death\") — a serious bad omen. Similarly, avoid splitting a <strong>梨</strong> (lí, pear) between a couple, because <em>分梨</em> (fēn lí) sounds like <em>分离</em> (fēn lí, \"to separate\"). These are wordplay taboos, not superstition for its own sake — but they're widely observed, so it's worth knowing.",
          example: { l1: "送钟听起来像送终，不吉利。", en: "Giving a clock sounds like 'attending a funeral' — inauspicious." },
        },
        {
          type: "fillBlank",
          heading: "Fill in the custom",
          intro: "Complete each sentence.",
          items: [
            {
              template: "过年的时候，大人给小孩 ___。",
              answer: "红包",
              en: "At New Year, adults give children red envelopes.",
              options: ["红包", "钟", "梨", "运气"],
            },
            {
              template: "数字 ___ 很吉利，因为听起来像'发'。",
              answer: "八",
              en: "The number eight is very auspicious because it sounds like 'prosper'.",
              options: ["四", "八", "三", "钟"],
            },
            {
              template: "很多人不喜欢数字 ___，因为听起来像'死'。",
              answer: "四",
              en: "Many people dislike the number four because it sounds like 'death'.",
              options: ["八", "六", "四", "九"],
            },
            {
              template: "不要送 ___，因为'送钟'听起来不吉利。",
              answer: "钟",
              en: "Don't give a clock, because 'giving a clock' sounds inauspicious.",
              options: ["礼物", "红包", "钟", "祝福"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "At New Year, adults give children red envelopes.",
          reference: "过年的时候，大人给小孩红包。",
          hint: "过年的时候 (at New Year) + 大人 (adults) + 给 + 小孩 (children) + 红包.",
        },
      ],
    },
    {
      slug: "customs-festivals",
      title: "The festivals & greetings",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "China's two great festivals",
          body: [
            "<strong>春节</strong> (Chūnjié, Spring Festival / Chinese New Year) is the most important holiday — a multi-day celebration of family reunion. People travel home for the reunion dinner on New Year's Eve, set off fireworks, give 红包, and decorate doors with red <strong>春联</strong> (couplets). The greeting is <strong>新年快乐!</strong> (Happy New Year!) and <strong>恭喜发财!</strong> (\"wishing you prosperity\").",
            "<strong>中秋节</strong> (Zhōngqiū jié, Mid-Autumn Festival) celebrates the full harvest moon and family togetherness. People eat <strong>月饼</strong> (mooncakes) and admire the moon. The greeting is <strong>中秋节快乐!</strong>",
            "Other holidays include <strong>端午节</strong> (Dragon Boat Festival — zòngzi sticky-rice parcels and boat races) and <strong>国庆节</strong> (National Day, Oct 1).",
          ],
          keyPoint:
            "春节 (Spring Festival): 新年快乐! + 红包 + reunion dinner. 中秋节 (Mid-Autumn): 月饼 + the full moon.",
        },
        {
          type: "vocab",
          heading: "Festivals & greetings",
          items: [
            { l1: "春节", en: "Spring Festival / Chinese New Year", note: "Chūnjié — the biggest holiday." },
            { l1: "新年快乐", en: "Happy New Year", note: "xīnnián kuàilè." },
            { l1: "恭喜发财", en: "wishing you prosperity", note: "gōngxǐ fācái — classic New Year greeting." },
            { l1: "团圆", en: "(family) reunion / togetherness", note: "tuányuán — the heart of the holidays." },
            { l1: "年夜饭", en: "New Year's Eve reunion dinner", note: "niányèfàn." },
            { l1: "中秋节", en: "Mid-Autumn Festival", note: "Zhōngqiū jié." },
            { l1: "月饼", en: "mooncake", note: "yuèbǐng — eaten at Mid-Autumn." },
            { l1: "端午节", en: "Dragon Boat Festival", note: "Duānwǔ jié — zòngzi & boat races." },
            { l1: "节日快乐", en: "happy holiday(s)", note: "jiérì kuàilè — all-purpose festive greeting." },
            { l1: "放假", en: "to be on holiday / have time off", note: "fàng jià." },
          ],
        },
        {
          type: "dialogue",
          heading: "Wishing a coworker happy New Year",
          setup: "It's the last workday before Spring Festival in Beijing.",
          lines: [
            { speaker: "同事 (Coworker)", l1: "明天就放假了，你回家吗？", en: "The holiday starts tomorrow — are you going home?" },
            { speaker: "You", l1: "回，我要和家人吃年夜饭。", en: "Yes, I'm having the reunion dinner with my family." },
            { speaker: "同事 (Coworker)", l1: "真好，团圆最重要。", en: "That's nice — reunion is what matters most." },
            { speaker: "You", l1: "对啊。新年快乐！", en: "Exactly. Happy New Year!" },
            { speaker: "同事 (Coworker)", l1: "新年快乐，恭喜发财！", en: "Happy New Year, and wishing you prosperity!" },
            { speaker: "You", l1: "也祝你身体健康！", en: "Wishing you good health too!" },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Know the festivals",
          questions: [
            {
              q: "At Spring Festival you greet people with:",
              qL1: "春节时你说：",
              options: ["中秋节快乐！", "新年快乐！", "生日快乐！", "慢走！"],
              correct: 1,
              fb: "新年快乐! = Happy New Year! — the Spring Festival greeting.",
            },
            {
              q: "Which food is eaten at the Mid-Autumn Festival?",
              options: ["饺子 (dumplings)", "月饼 (mooncakes)", "粽子 (zòngzi)", "面条 (noodles)"],
              correct: 1,
              fb: "月饼 (mooncakes) are the signature Mid-Autumn food, eaten while admiring the moon.",
            },
            {
              q: "'年夜饭' refers to…",
              options: [
                "a mooncake",
                "the New Year's Eve reunion dinner",
                "a red envelope",
                "a dragon boat",
              ],
              correct: 1,
              fb: "年夜饭 (niányèfàn) = the all-important New Year's Eve family reunion dinner.",
            },
            {
              q: "'恭喜发财' is a wish for…",
              options: ["good health", "prosperity / making a fortune", "long life", "safe travels"],
              correct: 1,
              fb: "恭喜发财 = 'congratulations and may you prosper' — a classic New Year greeting.",
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Happy New Year! Wishing you prosperity and good health!",
          reference: "新年快乐！恭喜发财，身体健康！",
          hint: "新年快乐! + 恭喜发财 (prosperity) + 身体健康 (good health).",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "The most important Chinese holiday is:",
              options: ["中秋节", "春节", "端午节", "国庆节"],
              correct: 1,
            },
            {
              q: "At Mid-Autumn Festival, people eat:",
              options: ["月饼 (mooncakes)", "红包", "春联", "粽子"],
              correct: 0,
            },
            {
              q: "Which is a Spring Festival greeting?",
              options: ["慢走！", "新年快乐！", "吃了吗？", "哪里哪里！"],
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
        q: "'面子' refers to…",
        options: ["a type of noodle", "social face / dignity / reputation", "the weather", "a red envelope"],
        correct: 1,
      },
      {
        q: "'给面子' means…",
        options: ["to lose face", "to give face / show respect", "to be rude", "to cook"],
        correct: 1,
      },
      {
        q: "When a host says '别客气', they mean:",
        options: ["please leave", "don't be so polite, help yourself", "the food is gone", "you're late"],
        correct: 1,
      },
      {
        q: "A '红包' is…",
        options: [
          "a clock gift",
          "a red envelope with money",
          "a mooncake",
          "a New Year couplet",
        ],
        correct: 1,
      },
      {
        q: "The number 八 (8) is considered lucky because it sounds like…",
        options: ["死 (death)", "发 (prosper)", "离 (separate)", "终 (end)"],
        correct: 1,
      },
      {
        q: "The number 四 (4) is avoided because it sounds like…",
        options: ["发 (prosper)", "死 (death)", "喜 (joy)", "福 (fortune)"],
        correct: 1,
      },
      {
        q: "Why is a clock (钟) a bad gift?",
        options: [
          "It's too expensive",
          "'Giving a clock' (送钟) sounds like 'attending a funeral' (送终)",
          "It's too heavy",
          "Clocks are unlucky everywhere",
        ],
        correct: 1,
      },
      {
        q: "The Spring Festival greeting is:",
        options: ["中秋节快乐！", "新年快乐！", "生日快乐！", "节日快乐！"],
        correct: 1,
      },
      {
        q: "Mooncakes (月饼) are eaten during…",
        options: ["春节", "中秋节", "端午节", "国庆节"],
        correct: 1,
      },
      {
        q: "Translate: 'Happy New Year! Wishing you prosperity!'",
        options: [
          "新年快乐！恭喜发财！",
          "中秋节快乐！月饼很好吃！",
          "别客气！多吃点！",
          "好久不见！最近怎么样？",
        ],
        correct: 0,
      },
    ],
  },
};
