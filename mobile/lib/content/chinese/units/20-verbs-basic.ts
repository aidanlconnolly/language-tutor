import type { Unit } from "../../types";

export const UNIT_VERBS_BASIC: Unit = {
  slug: "verbs-basic",
  stage: 5,
  order: 20,
  icon: "🟢",
  title: "Basic verbs & word order",
  tagline: "Subject-Verb-Object and negation with 不.",
  badge: "core",
  lessons: [
    {
      slug: "verbs-basic-svo",
      title: "Subject-Verb-Object & common verbs",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Chinese word order is reassuringly simple",
          body: [
            "Mandarin is a <strong>Subject-Verb-Object</strong> language, just like English: <em>我 (I) + 吃 (eat) + 米饭 (rice)</em> = I eat rice.",
            "Verbs <strong>never change form</strong>. 吃 (chī, eat) is 吃 no matter who does it or when — there is no -s, no -ed, no -ing on the verb itself.",
            "Because verbs don't carry tense, the same sentence <em>我吃米饭</em> can mean \"I eat rice\" or \"I'm eating rice\" depending on context. Time and aspect are added with separate words, which is exactly what this whole stage teaches.",
          ],
          keyPoint:
            "Subject + Verb + Object. The verb form never changes — Chinese verbs do not conjugate.",
        },
        {
          type: "vocab",
          heading: "Five everyday verbs",
          intro: "These five carry an enormous amount of daily conversation in Beijing.",
          items: [
            { l1: "吃", en: "to eat", note: "chī" },
            { l1: "喝", en: "to drink", note: "hē" },
            { l1: "去", en: "to go", note: "qù" },
            { l1: "看", en: "to look / watch / read", note: "kàn" },
            { l1: "有", en: "to have / there is", note: "yǒu" },
            { l1: "米饭", en: "(cooked) rice", note: "mǐfàn" },
            { l1: "茶", en: "tea", note: "chá" },
            { l1: "书", en: "book", note: "shū" },
            { l1: "朋友", en: "friend", note: "péngyou" },
          ],
        },
        {
          type: "dialogue",
          heading: "Lunch near the hutong",
          setup: "You and a friend grab lunch in a Beijing hutong alley.",
          lines: [
            { speaker: "Friend", l1: "你吃米饭吗？", en: "Do you eat rice?" },
            { speaker: "You", l1: "我吃米饭，也喝茶。", en: "I eat rice, and I also drink tea." },
            { speaker: "Friend", l1: "你有书吗？", en: "Do you have a book?" },
            { speaker: "You", l1: "我有一本书。", en: "I have a book." },
            { speaker: "Friend", l1: "下午我们去看朋友。", en: "This afternoon we'll go see a friend." },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the sentence",
          intro: "Put the words in Subject-Verb-Object order.",
          items: [
            { tokens: ["我", "喝", "茶"], en: "I drink tea." },
            { tokens: ["他", "看", "书"], en: "He reads a book." },
            { tokens: ["我们", "去", "北京"], en: "We go to Beijing." },
            { tokens: ["你", "有", "朋友"], en: "You have friends." },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "I eat rice and drink tea.",
          reference: "我吃米饭，喝茶。",
          hint: "Subject once, then two verb-object pairs. 米饭 = rice, 茶 = tea.",
        },
      ],
    },
    {
      slug: "verbs-basic-negation",
      title: "Saying no: 不 and 没有",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Two negators, two jobs",
          body: [
            "Put <strong>不 (bù)</strong> directly before a verb to negate it: <em>我不吃 (I don't eat)</em>, <em>我不去 (I'm not going)</em>. 不 covers habits, the present, and the future.",
            "But there is one special verb: <strong>有 (yǒu, to have)</strong> is <em>never</em> negated with 不. \"Not have\" is always <strong>没有 (méiyǒu)</strong> — you can shorten it to just 没.",
            "So: <em>我不有</em> is wrong. The correct \"I don't have\" is <strong>我没有</strong>.",
          ],
          keyPoint:
            "不 + verb = negation (我不吃). EXCEPT 有 → use 没有 (我没有). Never 不有.",
        },
        {
          type: "conjugation",
          heading: "吃 — the negation pattern",
          verb: "吃",
          meaning: "to eat (chī)",
          intro: "The verb 吃 itself never changes — only the words around it do.",
          tenses: [
            {
              name: "Affirmative vs. negative",
              forms: [
                { person: "base", form: "吃 (chī)", en: "eat / eats" },
                { person: "negative 不", form: "不吃 (bù chī)", en: "do not eat" },
                { person: "with 有 → 没有", form: "没有 (méiyǒu)", en: "do not have" },
              ],
            },
            {
              name: "In full sentences",
              forms: [
                { person: "我吃", form: "wǒ chī", en: "I eat" },
                { person: "我不吃", form: "wǒ bù chī", en: "I don't eat" },
                { person: "我有", form: "wǒ yǒu", en: "I have" },
                { person: "我没有", form: "wǒ méiyǒu", en: "I don't have" },
              ],
            },
          ],
        },
        {
          type: "fillBlank",
          heading: "Choose the right negator",
          intro: "Use 不 for normal verbs, 没有 only with 有.",
          items: [
            {
              template: "我 ___ 喝咖啡。",
              answer: "不",
              en: "I don't drink coffee.",
              options: ["不", "没有", "没", "也"],
            },
            {
              template: "他 ___ 朋友在北京。",
              answer: "没有",
              en: "He doesn't have friends in Beijing.",
              options: ["不", "没有", "不有", "也"],
            },
            {
              template: "我们今天 ___ 去长城。",
              answer: "不",
              en: "We aren't going to the Great Wall today.",
              options: ["没", "不", "没有", "有"],
            },
            {
              template: "你 ___ 书吗？",
              answer: "有",
              en: "Do you have a book?",
              options: ["有", "不", "去", "看"],
            },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Negate it correctly",
          questions: [
            {
              q: "How do you say 'I don't have a book'?",
              qL1: "我 ___ 书。",
              options: ["我不有书。", "我没有书。", "我不书。", "我没书有。"],
              correct: 1,
              fb: "有 is negated only with 没有, never with 不.",
            },
            {
              q: "How do you say 'He doesn't go'?",
              options: ["他没去。", "他没有去。", "他不去。", "他去不。"],
              correct: 2,
              fb: "For a normal verb in the present/future, use 不: 不去.",
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "I don't drink tea, and I don't have coffee.",
          reference: "我不喝茶，也没有咖啡。",
          hint: "不喝 for the verb 喝, but 没有 for 'don't have'. 咖啡 = coffee.",
        },
      ],
    },
    {
      slug: "verbs-basic-time-place",
      title: "Time + place + verb",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "The order that surprises English speakers",
          body: [
            "English says \"I'm going to Beijing tomorrow\" — verb first, time last. Mandarin flips it: <strong>time and place come BEFORE the verb</strong>.",
            "The reliable order is: <strong>Subject + Time + Place + Verb + Object</strong>. So \"I'll go to Beijing tomorrow\" is <em>我 (I) 明天 (tomorrow) 去 (go) 北京 (Beijing)</em> → <strong>我明天去北京</strong>.",
            "When you want to say an action happens <em>at</em> a place, you use <strong>在 (zài) + place</strong> before the verb: <em>我在家吃饭 (I eat at home)</em>. Place-where-action-happens sits in front of the verb, never after it.",
          ],
          keyPoint:
            "Subject + Time + Place + Verb + Object. Time words and 在+place go BEFORE the verb.",
        },
        {
          type: "vocab",
          heading: "Time words & places",
          items: [
            { l1: "今天", en: "today", note: "jīntiān" },
            { l1: "明天", en: "tomorrow", note: "míngtiān" },
            { l1: "昨天", en: "yesterday", note: "zuótiān" },
            { l1: "现在", en: "now", note: "xiànzài" },
            { l1: "下午", en: "afternoon", note: "xiàwǔ" },
            { l1: "在", en: "at / in (location marker)", note: "zài" },
            { l1: "家", en: "home", note: "jiā" },
            { l1: "学校", en: "school", note: "xuéxiào" },
            { l1: "北京", en: "Beijing", note: "Běijīng" },
            { l1: "饭", en: "meal / cooked food", note: "fàn — 吃饭 = to eat (a meal)" },
          ],
        },
        {
          type: "tip",
          heading: "Time can also lead the whole sentence",
          body: "The time word can sit either right after the subject (<strong>我明天去</strong>) or at the very front of the sentence for emphasis (<strong>明天我去</strong>). Both are correct. What you can <em>never</em> do is push it to the end the way English does — <em>我去北京明天</em> is wrong.",
          example: { l1: "明天我在家看书。", en: "Tomorrow I'll read at home." },
        },
        {
          type: "orderWords",
          heading: "Time + place + verb",
          intro: "Arrange into Subject + Time + Place + Verb + Object.",
          items: [
            { tokens: ["我", "明天", "去", "北京"], en: "I'll go to Beijing tomorrow." },
            { tokens: ["他", "今天", "在", "家", "吃饭"], en: "He eats at home today." },
            { tokens: ["我们", "下午", "在", "学校", "看", "书"], en: "We read at school in the afternoon." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Put it in the right place",
          items: [
            {
              template: "我 ___ 去北京。",
              answer: "明天",
              en: "I'll go to Beijing tomorrow.",
              options: ["明天", "去明天", "北京明天", "明天去"],
            },
            {
              template: "他在 ___ 吃饭。",
              answer: "家",
              en: "He eats at home.",
              options: ["家", "明天", "看", "茶"],
            },
            {
              template: "现在我 ___ 学校。",
              answer: "在",
              en: "Now I am at school.",
              options: ["在", "去", "有", "不"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Tomorrow I'll go to Beijing.",
          reference: "我明天去北京。",
          hint: "Time (明天) goes before the verb (去), not at the end.",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "Where does a time word like 明天 go?",
              options: ["After the object", "Before the verb", "After the verb only", "Always last"],
              correct: 1,
            },
            {
              q: "Translate: 'I eat at home.'",
              options: ["我吃饭在家。", "我在家吃饭。", "我家在吃饭。", "在家我吃饭饭。"],
              correct: 1,
            },
            {
              q: "Which sentence is correctly ordered?",
              options: ["我去北京明天。", "明天去我北京。", "我明天去北京。", "北京明天我去。"],
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
        q: "Chinese basic word order is…",
        options: ["Verb-Subject-Object", "Subject-Object-Verb", "Subject-Verb-Object", "Object-Verb-Subject"],
        correct: 2,
      },
      {
        q: "Do Chinese verbs change form for different subjects?",
        options: ["Yes, like English", "No, the verb never changes", "Only in the past", "Only for 'I'"],
        correct: 1,
      },
      {
        q: "'I drink tea' =",
        options: ["我茶喝。", "我喝茶。", "喝我茶。", "茶我喝。"],
        correct: 1,
      },
      {
        q: "Which verb is negated with 没有, not 不?",
        options: ["吃", "去", "有", "看"],
        correct: 2,
      },
      {
        q: "'I don't have a book' =",
        options: ["我不有书。", "我没有书。", "我不书有。", "我有不书。"],
        correct: 1,
      },
      {
        q: "'He's not going' =",
        options: ["他没去。", "他不去。", "他去不。", "他没有去。"],
        correct: 1,
      },
      {
        q: "Where does 明天 (tomorrow) go?",
        options: ["At the very end", "Before the verb", "After the object", "After the verb"],
        correct: 1,
      },
      {
        q: "'Tomorrow I'll go to Beijing' =",
        options: ["我去北京明天。", "明天我去北京。", "我北京去明天。", "去我明天北京。"],
        correct: 1,
      },
      {
        q: "To say an action happens AT a place, you use…",
        options: ["place after the verb", "在 + place before the verb", "了 + place", "place + 吗"],
        correct: 1,
      },
      {
        q: "'I eat at home' =",
        options: ["我吃饭在家。", "我在家吃饭。", "在家吃饭我。", "我家在吃饭。"],
        correct: 1,
      },
    ],
  },
};
