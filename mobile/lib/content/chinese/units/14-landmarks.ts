import type { Unit } from "../../types";

export const UNIT_LANDMARKS: Unit = {
  slug: "landmarks",
  stage: 3,
  order: 14,
  icon: "🏯",
  title: "Beijing landmarks",
  tagline: "长城, 故宫, 天安门, 颐和园.",
  badge: "culture",
  lessons: [
    {
      slug: "landmarks-sights",
      title: "The great sights",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Beijing's headline sights",
          body: [
            "Four names anchor any Beijing trip: the <strong>长城</strong> (Chángchéng, Great Wall), the <strong>故宫</strong> (Gùgōng, Forbidden City), <strong>天安门广场</strong> (Tiān'ānmén guǎngchǎng, Tiananmen Square), and the <strong>颐和园</strong> (Yíhéyuán, Summer Palace).",
            "Note the literal meanings: <em>长城</em> = \"long wall,\" <em>故宫</em> = \"former palace,\" <em>广场</em> = \"square/plaza.\" Knowing them makes the names stick.",
            "The Great Wall has several sections; the popular one is <strong>八达岭</strong> (Bādálǐng). The Forbidden City sits right behind Tiananmen — you can see both in one day.",
          ],
          keyPoint:
            "长城 = Great Wall, 故宫 = Forbidden City, 天安门广场 = Tiananmen Square, 颐和园 = Summer Palace.",
        },
        {
          type: "vocab",
          heading: "Landmark vocab",
          items: [
            { l1: "长城", en: "the Great Wall", note: "Chángchéng" },
            { l1: "故宫", en: "the Forbidden City", note: "Gùgōng" },
            { l1: "天安门", en: "Tiananmen (Gate of Heavenly Peace)", note: "Tiān'ānmén" },
            { l1: "天安门广场", en: "Tiananmen Square", note: "Tiān'ānmén guǎngchǎng" },
            { l1: "颐和园", en: "the Summer Palace", note: "Yíhéyuán" },
            { l1: "八达岭", en: "Badaling (Great Wall section)", note: "Bādálǐng" },
            { l1: "天坛", en: "the Temple of Heaven", note: "Tiāntán" },
            { l1: "广场", en: "square / plaza", note: "guǎngchǎng" },
            { l1: "宫", en: "palace", note: "gōng" },
            { l1: "公园", en: "park", note: "gōngyuán" },
            { l1: "景点", en: "tourist sight / attraction", note: "jǐngdiǎn" },
            { l1: "参观", en: "to visit / tour (a place)", note: "cānguān" },
          ],
        },
        {
          type: "tip",
          heading: "不到长城非好汉",
          body: "A famous saying goes <strong>不到长城非好汉</strong> (bú dào Chángchéng fēi hǎohàn) — \"you're not a true hero until you've climbed the Great Wall.\" It's quoted endlessly at Badaling, often printed on souvenirs. Drop it and any local will grin.",
          example: { l1: "不到长城非好汉！", en: "You're not a hero until you've reached the Great Wall!" },
        },
        {
          type: "multipleChoice",
          heading: "Match the sight",
          questions: [
            {
              q: "故宫 (Gùgōng) is…",
              options: ["the Great Wall", "the Forbidden City", "the Summer Palace", "Tiananmen Square"],
              correct: 1,
            },
            {
              q: "长城 (Chángchéng) literally means…",
              options: ["former palace", "long wall", "heavenly peace", "great square"],
              correct: 1,
            },
            {
              q: "颐和园 (Yíhéyuán) is…",
              options: ["the Temple of Heaven", "the Summer Palace", "a metro station", "the Forbidden City"],
              correct: 1,
            },
            {
              q: "景点 (jǐngdiǎn) means…",
              options: ["ticket", "tourist sight", "park bench", "souvenir"],
              correct: 1,
              fb: "景点 = scenic spot / tourist attraction.",
            },
          ],
        },
      ],
    },
    {
      slug: "landmarks-tickets-hours",
      title: "Tickets & hours",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Getting in",
          body: [
            "An entry ticket is a <strong>门票</strong> (ménpiào, lit. \"door ticket\"). Ask its price with <em>门票多少钱？</em>",
            "Big sights like the 故宫 require booking ahead with your passport: <strong>需要预约</strong> (xūyào yùyuē, \"a reservation is required\"). Buy online or at the window (<em>售票处</em>, shòupiàochù).",
            "For hours, ask when it opens and closes: <strong>几点开门？</strong> (jǐ diǎn kāimén?) and <strong>几点关门？</strong> (jǐ diǎn guānmén?). Many sights close one day a week — the 故宫 is shut on Mondays.",
          ],
          keyPoint:
            "门票 = entry ticket. …点开门 = opens at …; …点关门 = closes at … 需要预约 = booking required.",
        },
        {
          type: "vocab",
          heading: "Tickets & hours vocab",
          items: [
            { l1: "门票", en: "entry ticket", note: "ménpiào" },
            { l1: "售票处", en: "ticket office", note: "shòupiàochù" },
            { l1: "预约", en: "to book / reserve (in advance)", note: "yùyuē" },
            { l1: "开门", en: "to open (a venue)", note: "kāimén" },
            { l1: "关门", en: "to close (a venue)", note: "guānmén" },
            { l1: "几点", en: "what time", note: "jǐ diǎn" },
            { l1: "学生票", en: "student ticket", note: "xuéshēng piào" },
            { l1: "免费", en: "free of charge", note: "miǎnfèi" },
            { l1: "排队", en: "to queue / line up", note: "páiduì" },
            { l1: "入口", en: "entrance", note: "rùkǒu" },
            { l1: "出口", en: "exit", note: "chūkǒu" },
            { l1: "讲解", en: "guided commentary / audio guide", note: "jiǎngjiě" },
          ],
        },
        {
          type: "dialogue",
          heading: "At the ticket office",
          setup: "You buy tickets at the Forbidden City window.",
          lines: [
            { speaker: "You", l1: "你好，门票多少钱？", en: "Hi, how much is the entry ticket?" },
            { speaker: "Clerk", l1: "六十块。请出示护照,需要预约。", en: "60 yuan. Please show your passport — booking is required." },
            { speaker: "You", l1: "我在网上预约了。几点关门？", en: "I booked online. What time does it close?" },
            { speaker: "Clerk", l1: "下午五点关门，周一不开门。", en: "It closes at 5pm, and it's closed on Mondays." },
            { speaker: "You", l1: "有讲解吗？", en: "Is there an audio guide?" },
            { speaker: "Clerk", l1: "有,入口右边租。", en: "Yes — rent it to the right of the entrance." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Complete the question",
          items: [
            {
              template: "门票___钱？",
              answer: "多少",
              en: "How much is the ticket?",
              options: ["多少", "几点", "哪儿", "怎么"],
            },
            {
              template: "故宫几点___门？",
              answer: "开",
              en: "What time does the Forbidden City open?",
              options: ["开", "关", "排", "预"],
            },
            {
              template: "有学生___吗？",
              answer: "票",
              en: "Is there a student ticket?",
              options: ["票", "门", "约", "费"],
            },
            {
              template: "需要___约吗？",
              answer: "预",
              en: "Is a reservation required?",
              options: ["预", "门", "免", "排"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "How much is the ticket? What time does it open?",
          reference: "门票多少钱？几点开门？",
          hint: "门票 = entry ticket, 多少钱 = how much, 几点开门 = what time does it open.",
        },
        {
          type: "tip",
          heading: "Bring your passport",
          body: "For state-run sights like the <strong>故宫</strong>, your <em>护照</em> is your ticket — entry is booked to your passport number and checked at the gate. No passport, no entry, even with a paid <em>门票</em>. Carry it whenever you're sightseeing.",
          example: { l1: "请出示护照。", en: "Please show your passport." },
        },
      ],
    },
    {
      slug: "landmarks-talking",
      title: "Talking about what you've seen",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Saying you've been there",
          body: [
            "To say you've done something, use the experience marker <strong>过</strong> (guo) after the verb: <strong>我去过…</strong> (wǒ qù guo…, \"I've been to…\"). So <em>我去过长城</em> = I've been to the Great Wall.",
            "React to a place with simple adjectives + <strong>很</strong> (hěn, \"very\"): <em>很漂亮</em> (hěn piàoliang, very beautiful), <em>很大</em> (very big), <em>很有意思</em> (very interesting).",
            "To say you haven't yet, use <strong>还没…过</strong> (hái méi… guo, \"haven't … yet\"): <em>我还没去过颐和园</em> = I haven't been to the Summer Palace yet.",
          ],
          keyPoint:
            "我去过… = I've been to… 还没…过 = haven't … yet. 很漂亮 = very beautiful.",
        },
        {
          type: "vocab",
          heading: "Reaction vocab",
          items: [
            { l1: "去过", en: "have been to", note: "qù guo" },
            { l1: "看过", en: "have seen", note: "kàn guo" },
            { l1: "还没", en: "not yet", note: "hái méi" },
            { l1: "漂亮", en: "beautiful", note: "piàoliang" },
            { l1: "大", en: "big", note: "dà" },
            { l1: "古老", en: "ancient / old", note: "gǔlǎo" },
            { l1: "有意思", en: "interesting", note: "yǒu yìsi" },
            { l1: "壮观", en: "magnificent / spectacular", note: "zhuàngguān" },
            { l1: "人多", en: "crowded (lit. many people)", note: "rén duō" },
            { l1: "拍照", en: "to take photos", note: "pāizhào" },
            { l1: "纪念品", en: "souvenir", note: "jìniànpǐn" },
            { l1: "值得", en: "worth it / worth doing", note: "zhídé" },
          ],
        },
        {
          type: "dialogue",
          heading: "Comparing notes",
          setup: "A new friend asks about your trip so far.",
          lines: [
            { speaker: "Friend", l1: "你去过长城了吗？", en: "Have you been to the Great Wall yet?" },
            { speaker: "You", l1: "去过了，很壮观，就是人很多。", en: "Yes, it's magnificent — just very crowded." },
            { speaker: "Friend", l1: "故宫呢？", en: "What about the Forbidden City?" },
            { speaker: "You", l1: "看过了，很大，也很漂亮。", en: "I've seen it — very big and very beautiful." },
            { speaker: "Friend", l1: "颐和园值得去,你去过吗？", en: "The Summer Palace is worth it — have you been?" },
            { speaker: "You", l1: "还没去过,明天想去。", en: "Not yet — I want to go tomorrow." },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the sentence",
          items: [
            { tokens: ["我", "去", "过", "长城", "。"], en: "I've been to the Great Wall." },
            { tokens: ["故宫", "很", "大", "，", "也", "很", "漂亮", "。"], en: "The Forbidden City is very big and very beautiful." },
            { tokens: ["我", "还", "没", "去", "过", "颐和园", "。"], en: "I haven't been to the Summer Palace yet." },
            { tokens: ["这里", "很", "值得", "拍照", "。"], en: "This place is really worth photographing." },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "I've been to the Great Wall. It's very magnificent and very beautiful.",
          reference: "我去过长城。很壮观，也很漂亮。",
          hint: "我去过 = I've been to, 很壮观 = very magnificent, 很漂亮 = very beautiful.",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "'I've been to the Great Wall' =",
              options: ["我去过长城", "我要去长城", "我没去长城", "长城在哪儿"],
              correct: 0,
            },
            {
              q: "还没去过 (hái méi qù guo) means…",
              options: ["have already been", "haven't been yet", "will never go", "want to go"],
              correct: 1,
            },
            {
              q: "很漂亮 (hěn piàoliang) means…",
              options: ["very crowded", "very beautiful", "very big", "very old"],
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
        q: "故宫 (Gùgōng) is…",
        options: ["the Great Wall", "the Forbidden City", "the Summer Palace", "the Temple of Heaven"],
        correct: 1,
      },
      {
        q: "长城 (Chángchéng) is…",
        options: ["the Great Wall", "Tiananmen Square", "the Summer Palace", "the Forbidden City"],
        correct: 0,
      },
      {
        q: "颐和园 (Yíhéyuán) is…",
        options: ["the Temple of Heaven", "the Summer Palace", "the Great Wall", "Tiananmen"],
        correct: 1,
      },
      {
        q: "门票 (ménpiào) means…",
        options: ["entrance gate", "entry ticket", "ticket office", "passport"],
        correct: 1,
      },
      {
        q: "'What time does it open?' =",
        options: ["几点开门？", "几点关门？", "多少钱？", "在哪儿？"],
        correct: 0,
      },
      {
        q: "需要预约 (xūyào yùyuē) means…",
        options: ["it's free", "booking is required", "it's closed today", "it's far"],
        correct: 1,
      },
      {
        q: "The 过 in 我去过 marks…",
        options: ["a future plan", "a past experience ('have been')", "a command", "a negation"],
        correct: 1,
      },
      {
        q: "'haven't … yet' =",
        options: ["还没…过", "已经", "马上", "一直"],
        correct: 0,
      },
      {
        q: "壮观 (zhuàngguān) means…",
        options: ["crowded", "magnificent", "cheap", "ancient"],
        correct: 1,
      },
      {
        q: "Translate: 'The Forbidden City is very big and very beautiful.'",
        options: [
          "故宫很大，也很漂亮。",
          "故宫在哪儿？",
          "我还没去过故宫。",
          "故宫门票多少钱？",
        ],
        correct: 0,
      },
    ],
  },
};
