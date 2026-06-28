import type { Unit } from "../../types";

export const UNIT_PRONOUNS_SHI: Unit = {
  slug: "pronouns-shi",
  stage: 1,
  order: 5,
  icon: "🧱",
  title: "Pronouns, 是 & 的",
  tagline: "wǒ/nǐ/tā, 是 (to be), the possessive 的, and 吗 questions.",
  badge: "core",
  lessons: [
    {
      slug: "pronouns-shi-pronouns",
      title: "Personal pronouns: 我 / 你 / 他",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Chinese pronouns are wonderfully simple",
          body: [
            "Chinese pronouns never change for case. <strong>我 (wǒ)</strong> means <em>I</em> and <em>me</em>. <strong>你 (nǐ)</strong> means <em>you</em>. There's nothing like English <em>I / me</em> or <em>he / him</em> to memorize.",
            "The three singular pronouns — 我, 你, 他 — all sound exactly alike in spoken Mandarin for the third person: <strong>tā</strong>. Only the written character changes: 他 (he), 她 (she). In speech you can't hear the difference at all.",
            "To make any pronoun plural, just add <strong>们 (men)</strong>: 我们 (we), 你们 (you all), 他们 (they). One tidy rule, no exceptions.",
          ],
          keyPoint:
            "Add 们 (men) to make a pronoun plural: 我 → 我们, 你 → 你们, 他 → 他们.",
        },
        {
          type: "vocab",
          heading: "The pronouns",
          items: [
            { l1: "我", en: "I / me", note: "wǒ (third tone)" },
            { l1: "你", en: "you (singular)", note: "nǐ (third tone)" },
            { l1: "他", en: "he / him", note: "tā (first tone) — male" },
            { l1: "她", en: "she / her", note: "tā (first tone) — female; sounds identical to 他" },
            { l1: "我们", en: "we / us", note: "wǒmen" },
            { l1: "你们", en: "you all", note: "nǐmen" },
            { l1: "他们", en: "they / them", note: "tāmen — mixed or all-male group" },
            { l1: "她们", en: "they / them (all female)", note: "tāmen — all-female group; same sound as 他们" },
            { l1: "您", en: "you (polite)", note: "nín — respectful form of 你, for elders and strangers" },
          ],
        },
        {
          type: "tip",
          heading: "您 is the polite 'you'",
          body: "Use <strong>您 (nín)</strong> instead of 你 when addressing someone older, a customer, a teacher, or anyone you want to show respect to. It's the 你 character with 心 (heart) underneath — literally 'you' with heart. In a Beijing shop or with a stranger, 您 is the safe choice.",
          example: { l1: "您好！", en: "Hello! (polite)" },
        },
        {
          type: "multipleChoice",
          heading: "Pick the right pronoun",
          questions: [
            {
              q: "How do you say 'we / us'?",
              options: ["你们", "我们", "他们", "您"],
              correct: 1,
              fb: "我 (I) + 们 = 我们 (we).",
            },
            {
              q: "You want to politely address an elderly customer. Use:",
              options: ["你", "他", "您", "她"],
              correct: 2,
              fb: "您 (nín) is the respectful form of 'you'.",
            },
            {
              q: "Which character is the FEMALE 'she'?",
              options: ["他", "她", "你", "我"],
              correct: 1,
              fb: "她 is written with 女 (woman) on the left, but sounds identical to 他.",
            },
          ],
        },
      ],
    },
    {
      slug: "pronouns-shi-shi",
      title: "是: the verb 'to be' (A 是 B)",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "是 links two nouns: A 是 B",
          body: [
            "<strong>是 (shì)</strong> means <em>to be</em>, but only for linking two nouns: <em>A 是 B</em> = 'A is B'. 我是学生 = 'I am a student.' 他是老师 = 'He is a teacher.'",
            "是 never changes form — no conjugation, ever. 我是, 你是, 他是, 我们是 all use the same 是. This is true of every Chinese verb: the word is fixed and the pronoun does the work.",
            "Important: don't use 是 with adjectives. 'I am tired' is NOT 我是累 — you'll learn the adjective pattern with 很 later. 是 connects two <em>nouns</em>.",
          ],
          keyPoint:
            "是 connects two nouns (A 是 B). It never conjugates. Don't use it before adjectives.",
        },
        {
          type: "conjugation",
          heading: "是 with every pronoun — one fixed form",
          verb: "是",
          meaning: "to be (shì)",
          intro: "Chinese verbs don't conjugate. Notice 是 stays identical for every subject.",
          tenses: [
            {
              name: "是 (shì) — present, all persons",
              forms: [
                { person: "我", form: "我是 (wǒ shì)", en: "I am" },
                { person: "你", form: "你是 (nǐ shì)", en: "you are" },
                { person: "他 / 她", form: "他是 (tā shì)", en: "he / she is" },
                { person: "我们", form: "我们是 (wǒmen shì)", en: "we are" },
                { person: "你们", form: "你们是 (nǐmen shì)", en: "you all are" },
                { person: "他们", form: "他们是 (tāmen shì)", en: "they are" },
              ],
            },
          ],
        },
        {
          type: "vocab",
          heading: "Words to put around 是",
          items: [
            { l1: "学生", en: "student", note: "xuésheng" },
            { l1: "老师", en: "teacher", note: "lǎoshī" },
            { l1: "朋友", en: "friend", note: "péngyou" },
            { l1: "中国人", en: "Chinese person", note: "Zhōngguó rén" },
            { l1: "美国人", en: "American person", note: "Měiguó rén" },
            { l1: "不", en: "not / no", note: "bù — negator placed before the verb" },
            { l1: "不是", en: "is not", note: "bú shì — 不 changes to bú (second tone) before 是" },
          ],
        },
        {
          type: "tip",
          heading: "Negate with 不是 (not 是)",
          body: "To say 'is not', put <strong>不 (bù)</strong> before 是: 我<strong>不是</strong>老师 = 'I'm not a teacher.' Tone note: 不 is normally fourth tone (bù), but before another fourth-tone syllable like 是 (shì) it shifts to second tone — <strong>bú shì</strong>. Your ear will pick this up naturally.",
          example: { l1: "他不是中国人，他是美国人。", en: "He's not Chinese, he's American." },
        },
        {
          type: "fillBlank",
          heading: "是 or 不是?",
          intro: "Fill in 是 (is) or 不是 (is not) based on the English.",
          items: [
            {
              template: "我 ___ 学生。",
              answer: "是",
              en: "I am a student.",
              options: ["是", "不是", "不", "们"],
            },
            {
              template: "他 ___ 老师，他是学生。",
              answer: "不是",
              en: "He is not a teacher, he is a student.",
              options: ["是", "不是", "您", "们"],
            },
            {
              template: "你们 ___ 美国人吗？",
              answer: "是",
              en: "Are you all American?",
              options: ["是", "不", "她", "们"],
            },
            {
              template: "她 ___ 我的朋友。",
              answer: "是",
              en: "She is my friend.",
              options: ["是", "不是", "您", "们"],
            },
          ],
        },
      ],
    },
    {
      slug: "pronouns-shi-de-ma",
      title: "Possessive 的 and 吗 questions",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "的 makes things possessive; 吗 makes questions",
          body: [
            "<strong>的 (de)</strong> is the possessive particle — it works like English <em>'s</em>. 我的 = 'my', 你的 = 'your', 他的 = 'his'. 我的朋友 = 'my friend', literally 'I-de-friend'.",
            "To turn any statement into a yes/no question, just add <strong>吗 (ma)</strong> at the end — no word order changes at all. 你是学生 ('You are a student') → 你是学生<strong>吗</strong>？('Are you a student?').",
            "This is one of the easiest things in Chinese: statement + 吗 = question. Compare that to English flipping 'You are' into 'Are you'.",
          ],
          keyPoint:
            "的 = possessive ('s). Add 吗 to the end of a statement to make a yes/no question.",
        },
        {
          type: "vocab",
          heading: "Possessives and the question word",
          items: [
            { l1: "的", en: "possessive particle ('s)", note: "de (neutral tone)" },
            { l1: "我的", en: "my / mine", note: "wǒ de" },
            { l1: "你的", en: "your / yours", note: "nǐ de" },
            { l1: "他的", en: "his", note: "tā de" },
            { l1: "她的", en: "her / hers", note: "tā de" },
            { l1: "吗", en: "yes/no question particle", note: "ma (neutral tone), goes at the end" },
            { l1: "名字", en: "name", note: "míngzi" },
            { l1: "书", en: "book", note: "shū" },
          ],
        },
        {
          type: "tip",
          heading: "Family and close relations often drop 的",
          body: "With family members and very close relationships, native speakers usually <strong>omit</strong> 的: 我妈妈 ('my mom'), not 我的妈妈. 我朋友 is just as natural as 我的朋友. For objects, keep the 的: 我<strong>的</strong>书 ('my book').",
          example: { l1: "这是我朋友，她是我的老师。", en: "This is my friend; she is my teacher." },
        },
        {
          type: "dialogue",
          heading: "Meeting at Beijing's Tsinghua University",
          setup: "Two students introduce themselves on campus.",
          lines: [
            { speaker: "Lǐ Nà", l1: "你好！你是学生吗？", en: "Hello! Are you a student?" },
            { speaker: "You", l1: "你好！是，我是学生。你呢？", en: "Hello! Yes, I'm a student. And you?" },
            { speaker: "Lǐ Nà", l1: "我也是。这是我的朋友，他叫王明。", en: "Me too. This is my friend, he's called Wang Ming." },
            { speaker: "You", l1: "他是中国人吗？", en: "Is he Chinese?" },
            { speaker: "Lǐ Nà", l1: "是，他是北京人。", en: "Yes, he's from Beijing." },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "He is my friend. Is he Chinese?",
          reference: "他是我的朋友。他是中国人吗？",
          hint: "Possessive: 我的 (wǒ de). Yes/no question: add 吗 (ma) at the end.",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "How do you say 'my friend'?",
              options: ["我朋友的", "我的朋友", "朋友我的", "的我朋友"],
              correct: 1,
            },
            {
              q: "Turn '你是老师' into a yes/no question:",
              options: ["吗你是老师", "你吗是老师", "你是老师吗", "你是吗老师"],
              correct: 2,
            },
            {
              q: "Which particle makes a statement into a yes/no question?",
              options: ["的", "是", "吗", "们"],
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
        q: "How do you say 'we / us'?",
        options: ["你们", "他们", "我们", "您"],
        correct: 2,
      },
      {
        q: "Which is the POLITE form of 'you'?",
        options: ["你", "您", "他", "她"],
        correct: 1,
      },
      {
        q: "Translate: 'I am a student.'",
        options: ["我学生是", "我是学生", "学生我是", "我是吗学生"],
        correct: 1,
      },
      {
        q: "How does 是 change for 'they' (他们)?",
        options: ["他们是们", "他们shìmen", "It doesn't change — 他们是", "他们是了"],
        correct: 2,
      },
      {
        q: "Translate: 'He is not a teacher.'",
        options: ["他是不老师", "他不老师是", "他不是老师", "他老师不是"],
        correct: 2,
      },
      {
        q: "Before 是 (shì), the negator 不 is pronounced…",
        options: ["bù (4th tone)", "bú (2nd tone)", "bǔ (3rd tone)", "bū (1st tone)"],
        correct: 1,
      },
      {
        q: "How do you say 'my book'?",
        options: ["我书的", "的我书", "我的书", "书的我"],
        correct: 2,
      },
      {
        q: "Make a yes/no question: 'Are you American?' (你是美国人 + ?)",
        options: ["你是美国人吗", "吗你是美国人", "你吗是美国人", "你是吗美国人"],
        correct: 0,
      },
      {
        q: "What does 的 do?",
        options: ["Makes a question", "Marks possession ('s)", "Means 'not'", "Makes plurals"],
        correct: 1,
      },
      {
        q: "Which character is identical in SOUND to 他 (he)?",
        options: ["我", "你", "她", "您"],
        correct: 2,
      },
    ],
  },
};
