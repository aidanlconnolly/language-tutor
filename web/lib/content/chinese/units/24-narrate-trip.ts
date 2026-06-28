import type { Unit } from "../../types";

export const UNIT_NARRATE_TRIP: Unit = {
  slug: "narrate-trip",
  stage: 5,
  order: 24,
  icon: "📖",
  title: "Narrating a trip",
  tagline: "先…再…然后… — tell your travel story.",
  badge: "core",
  lessons: [
    {
      slug: "narrate-trip-sequencing",
      title: "First, then, after that, finally",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Stringing events into a story",
          body: [
            "To narrate a day, Chinese chains events with a fixed set of connectors. The backbone is <strong>先…再…然后…最后</strong> — \"first… then… after that… finally.\"",
            "Unlike English, the time order in Chinese is almost always the <em>actual</em> order: what happened first is said first. The connectors just signal the steps.",
            "<strong>先 (xiān)</strong> and <strong>再 (zài)</strong> sit right before the verb, not at the start of the clause: <em>我先去长城，再去故宫</em> — \"I first go to the Great Wall, then go to the Forbidden City.\"",
          ],
          tip: {
            label: "再 vs 然后",
            body: "Use <strong>再</strong> for the very next step in a tight sequence (often two linked actions by the same subject). Use <strong>然后</strong> to move to a looser, new step. You'll often see them together: <em>先…再…然后…</em>.",
          },
          keyPoint:
            "先 (first) and 再 (then) go before the verb; 然后 (after that) and 最后 (finally) start the clause.",
        },
        {
          type: "vocab",
          heading: "Sequencing connectors",
          intro: "The toolkit for ordering a narration.",
          items: [
            { l1: "先", en: "first", note: "xiān — before the verb" },
            { l1: "再", en: "then / next", note: "zài — before the verb, tight sequence" },
            { l1: "然后", en: "after that / and then", note: "rán hòu — starts a new step" },
            { l1: "最后", en: "finally / at the end", note: "zuì hòu" },
            { l1: "一边…一边…", en: "while doing… (at the same time)", note: "yì biān … yì biān …" },
            { l1: "的时候", en: "when / at the time of", note: "de shí hou" },
            { l1: "出发", en: "to set out / depart", note: "chū fā" },
            { l1: "到达", en: "to arrive", note: "dào dá" },
          ],
        },
        {
          type: "dialogue",
          heading: "Planning the route through Beijing",
          setup: "Two friends map out the order of a sightseeing day.",
          lines: [
            { speaker: "小李", l1: "我们明天先去哪儿？", en: "Where do we go first tomorrow?" },
            { speaker: "小王", l1: "先去天安门广场，再去故宫。", en: "First to Tiananmen Square, then the Forbidden City." },
            { speaker: "小李", l1: "然后呢？", en: "And after that?" },
            { speaker: "小王", l1: "然后去景山公园看风景。", en: "After that we go to Jingshan Park to see the view." },
            { speaker: "小李", l1: "最后去哪儿吃饭？", en: "Where do we eat at the end?" },
            { speaker: "小王", l1: "最后去王府井吃北京烤鸭。", en: "Finally we go to Wangfujing for Peking duck." },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the sequence",
          intro: "Tap the words into the correct order.",
          items: [
            { tokens: ["我", "先", "去", "长城"], en: "I go to the Great Wall first." },
            { tokens: ["我们", "再", "去", "故宫"], en: "Then we go to the Forbidden City." },
            { tokens: ["然后", "我们", "去", "公园"], en: "After that we go to the park." },
            { tokens: ["最后", "回", "酒店"], en: "Finally, go back to the hotel." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Pick the connector",
          intro: "Choose the word that fits the step.",
          items: [
            {
              template: "我们 ___ 去广场，再去故宫。",
              answer: "先",
              en: "We go to the square first, then the Forbidden City.",
              options: ["先", "最后", "然后", "到达"],
            },
            {
              template: "看完故宫，___ 去公园。",
              answer: "然后",
              en: "After seeing the Forbidden City, then we go to the park.",
              options: ["先", "然后", "出发", "再"],
            },
            {
              template: "___ 去王府井吃饭。",
              answer: "最后",
              en: "Finally, we go to Wangfujing to eat.",
              options: ["先", "再", "最后", "一边"],
            },
          ],
        },
      ],
    },
    {
      slug: "narrate-trip-past-day",
      title: "A day out, told with 了",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "了 marks completed actions",
          body: [
            "Chinese has no past tense, but <strong>了 (le)</strong> after a verb signals that the action was completed: <em>我去了长城</em> — \"I went to the Great Wall.\"",
            "When you list completed actions in a story, 了 typically attaches to the verb and is reinforced by a time word like <em>昨天</em> (yesterday): <em>昨天我们去了故宫</em>.",
            "A negated past uses <strong>没</strong> (méi), and the 了 <em>drops</em>: <em>我没去长城</em> — \"I didn't go to the Great Wall.\" Never say 没…了.",
          ],
          tip: {
            label: "Two 了s",
            body: "Beware: 了 after a verb (<em>verb-了</em>) shows a completed action, while 了 at the very end of a sentence often signals a change or new situation. In a trip narration you mostly want the <strong>verb-了</strong>.",
          },
          keyPoint: "Completed: 我去了 (I went). Negated: 我没去 (I didn't go) — drop 了.",
        },
        {
          type: "vocab",
          heading: "Telling yesterday's story",
          items: [
            { l1: "昨天", en: "yesterday", note: "zuó tiān" },
            { l1: "早上", en: "morning", note: "zǎo shang" },
            { l1: "下午", en: "afternoon", note: "xià wǔ" },
            { l1: "参观", en: "to visit (a site)", note: "cān guān" },
            { l1: "爬", en: "to climb", note: "pá — 爬长城 climb the Great Wall" },
            { l1: "拍照", en: "to take photos", note: "pāi zhào" },
            { l1: "累", en: "tired", note: "lèi" },
            { l1: "好玩", en: "fun / enjoyable", note: "hǎo wán" },
          ],
        },
        {
          type: "dialogue",
          heading: "How was yesterday?",
          setup: "A classmate asks about your day in Beijing.",
          lines: [
            { speaker: "同学", l1: "昨天你去哪儿了？", en: "Where did you go yesterday?" },
            { speaker: "你", l1: "我去了长城，爬了很久。", en: "I went to the Great Wall and climbed for a long time." },
            { speaker: "同学", l1: "你拍照了吗？", en: "Did you take photos?" },
            { speaker: "你", l1: "拍了很多！下午我还参观了故宫。", en: "Took a lot! In the afternoon I also visited the Forbidden City." },
            { speaker: "同学", l1: "累不累？", en: "Were you tired?" },
            { speaker: "你", l1: "很累，但是很好玩。", en: "Very tired, but a lot of fun." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Past or not?",
          questions: [
            {
              q: "Which sentence correctly says 'I went to the Great Wall'?",
              options: ["我去长城了吗", "我去了长城", "我没去了长城", "我要去长城"],
              correct: 1,
              fb: "Verb-了: 我去了长城. The 了 attaches right after the verb 去.",
            },
            {
              q: "How do you say 'I didn't go to the Forbidden City'?",
              options: ["我没去了故宫", "我不去故宫", "我没去故宫", "我去了故宫"],
              correct: 2,
              fb: "Negated past uses 没 and drops 了: 我没去故宫.",
            },
            {
              q: "Which time word signals a completed-action story?",
              options: ["明天", "昨天", "现在", "每天"],
              correct: 1,
              fb: "昨天 (yesterday) frames the events as already done.",
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Tell what you did on your first day in Beijing: Yesterday I first visited the Forbidden City, then I climbed the Great Wall. It was very tiring but a lot of fun.",
          reference: "昨天我先参观了故宫，然后爬了长城。很累，但是很好玩。",
          hint: "Use 先…然后… for the order and verb-了 (参观了 / 爬了) for the completed actions.",
        },
      ],
    },
    {
      slug: "narrate-trip-future-plans",
      title: "What you'll do next: 要 / 想 / 打算",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Three ways to talk about plans",
          body: [
            "To project a trip into the future, Chinese uses modal verbs before the main verb. <strong>要 (yào)</strong> = \"will / am going to\" (firm intention). <strong>想 (xiǎng)</strong> = \"would like to\" (softer wish). <strong>打算 (dǎsuàn)</strong> = \"plan to.\"",
            "All three slot in the same place — right before the verb: <em>我要去颐和园</em> / <em>我想去颐和园</em> / <em>我打算去颐和园</em>.",
            "A future time word like <strong>明天</strong> (tomorrow) makes it unambiguous: <em>明天我打算去爬长城</em> — \"Tomorrow I plan to climb the Great Wall.\"",
          ],
          tip: {
            label: "Strength scale",
            body: "Think of it as a dial: <strong>想</strong> (I'd like to) is the softest, <strong>打算</strong> (I'm planning to) is committed, <strong>要</strong> (I'm going to / I will) is the firmest and most certain.",
          },
          keyPoint: "要 = will, 想 = would like to, 打算 = plan to — all go before the verb.",
        },
        {
          type: "vocab",
          heading: "Plans and intentions",
          items: [
            { l1: "要", en: "will / be going to", note: "yào" },
            { l1: "想", en: "would like to", note: "xiǎng" },
            { l1: "打算", en: "to plan to", note: "dǎ suàn" },
            { l1: "明天", en: "tomorrow", note: "míng tiān" },
            { l1: "后天", en: "the day after tomorrow", note: "hòu tiān" },
            { l1: "颐和园", en: "the Summer Palace", note: "Yí hé yuán" },
            { l1: "胡同", en: "hutong (old alley)", note: "hú tòng" },
            { l1: "希望", en: "to hope", note: "xī wàng" },
          ],
        },
        {
          type: "dialogue",
          heading: "What's the plan for tomorrow?",
          setup: "You discuss tomorrow's itinerary with a friend.",
          lines: [
            { speaker: "朋友", l1: "明天你打算做什么？", en: "What do you plan to do tomorrow?" },
            { speaker: "你", l1: "我打算去颐和园，然后逛胡同。", en: "I plan to go to the Summer Palace, then wander the hutongs." },
            { speaker: "朋友", l1: "我也想去！", en: "I'd like to go too!" },
            { speaker: "你", l1: "太好了。后天我们要去爬长城。", en: "Great. The day after tomorrow we're going to climb the Great Wall." },
            { speaker: "朋友", l1: "我希望天气好。", en: "I hope the weather is good." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Choose the modal",
          intro: "Match the strength of intention.",
          items: [
            {
              template: "明天我们 ___ 去爬长城。",
              answer: "要",
              en: "Tomorrow we're going to climb the Great Wall. (firm)",
              options: ["要", "了", "没", "的时候"],
            },
            {
              template: "我 ___ 去颐和园看风景。",
              answer: "想",
              en: "I'd like to go to the Summer Palace to see the view.",
              options: ["想", "最后", "出发", "了"],
            },
            {
              template: "你 ___ 做什么？",
              answer: "打算",
              en: "What do you plan to do?",
              options: ["打算", "然后", "参观", "再"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Tomorrow I plan to go to the Summer Palace first, then I would like to wander the hutongs.",
          reference: "明天我打算先去颐和园，然后想去逛胡同。",
          hint: "打算 for the plan, 先…然后… for the order, 想 for the softer wish.",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "Which means 'I plan to go'?",
              options: ["我去了", "我打算去", "我没去", "我去吗"],
              correct: 1,
            },
            {
              q: "Which is the firmest, most certain intention?",
              options: ["想", "打算", "要", "希望"],
              correct: 2,
            },
            {
              q: "Where does 打算 go in 'I plan to climb the Great Wall'?",
              options: [
                "打算我爬长城",
                "我爬长城打算",
                "我打算爬长城",
                "我爬打算长城",
              ],
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
        q: "Which connector means 'first' and goes before the verb?",
        options: ["然后", "最后", "先", "的时候"],
        correct: 2,
      },
      {
        q: "Put in order: 'First the Great Wall, then the Forbidden City.'",
        options: [
          "先长城去，再故宫去",
          "先去长城，再去故宫",
          "去先长城，去再故宫",
          "长城先去，故宫再去",
        ],
        correct: 1,
      },
      {
        q: "Which word means 'finally / at the end'?",
        options: ["先", "再", "最后", "出发"],
        correct: 2,
      },
      {
        q: "How do you say 'I went to the Great Wall' (completed)?",
        options: ["我去长城", "我要去长城", "我去了长城", "我想去长城"],
        correct: 2,
      },
      {
        q: "Negate it: 'I didn't visit the Forbidden City.'",
        options: ["我没参观了故宫", "我不参观故宫", "我没参观故宫", "我参观了故宫"],
        correct: 2,
      },
      {
        q: "Which time word frames a past-tense narration?",
        options: ["明天", "昨天", "后天", "现在"],
        correct: 1,
      },
      {
        q: "Which modal means 'would like to' (a soft wish)?",
        options: ["要", "想", "打算", "了"],
        correct: 1,
      },
      {
        q: "'Tomorrow I'm going to climb the Great Wall' (firm) — best choice:",
        options: [
          "明天我了爬长城",
          "明天我要爬长城",
          "明天我没爬长城",
          "明天我爬长城了",
        ],
        correct: 1,
      },
      {
        q: "Where does the modal 打算 sit?",
        options: [
          "At the end of the sentence",
          "Right before the verb",
          "Before the subject",
          "After the object",
        ],
        correct: 1,
      },
      {
        q: "Translate: 'After that we go to the park.'",
        options: [
          "我们然后去公园",
          "然后我们去公园",
          "我们去公园然后",
          "去公园然后我们",
        ],
        correct: 1,
      },
    ],
  },
};
