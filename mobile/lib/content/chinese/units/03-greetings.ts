import type { Unit } from "../../types";

export const UNIT_GREETINGS: Unit = {
  slug: "greetings",
  stage: 1,
  order: 3,
  icon: "👋",
  title: "Greetings & courtesy",
  tagline: "nǐ hǎo, xièxie, bù kèqi — and the polite 您 nín.",
  badge: "tourist",
  lessons: [
    {
      slug: "greetings-hello-goodbye",
      title: "Hello and goodbye",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "你好 is your all-purpose hello",
          body: [
            "<strong>你好 (nǐ hǎo)</strong> literally means 'you good' and works any time of day, with anyone. It's the first thing every learner says, and it's never wrong.",
            "For politeness — addressing an elder, a customer, or someone you respect — swap 你 for <strong>您 (nín)</strong>: <strong>您好 (nín hǎo)</strong>. To greet a group, use <strong>大家好 (dàjiā hǎo)</strong>, 'hello everyone'.",
            "To say goodbye, use <strong>再见 (zàijiàn)</strong> — literally 'again see', i.e. 'see you again'.",
          ],
          tip: {
            label: "When to use 您",
            body: "In Beijing, using <em>您 (nín)</em> with older people, officials and shopkeepers is a small courtesy that goes a long way. With friends and peers, plain <em>你 (nǐ)</em> is normal and warm.",
          },
        },
        {
          type: "vocab",
          heading: "Core greetings",
          items: [
            { l1: "你好", en: "hello", note: "pīnyīn: nǐ hǎo; lit. you good (spoken ní hǎo)" },
            { l1: "您好", en: "hello (polite)", note: "pīnyīn: nín hǎo; 您 is the respectful 'you'" },
            { l1: "大家好", en: "hello everyone", note: "pīnyīn: dàjiā hǎo; 大家 = everyone" },
            { l1: "你们好", en: "hello (to a group)", note: "pīnyīn: nǐmen hǎo; 们 makes 'you' plural" },
            { l1: "再见", en: "goodbye", note: "pīnyīn: zàijiàn; lit. again see" },
            { l1: "明天见", en: "see you tomorrow", note: "pīnyīn: míngtiān jiàn; 明天 = tomorrow" },
          ],
        },
        {
          type: "dialogue",
          heading: "Meeting on the street",
          setup: "You run into a neighbor in a Beijing hutong.",
          lines: [
            { speaker: "You", l1: "你好！", en: "Hello!" },
            { speaker: "Neighbor", l1: "你好！", en: "Hello!" },
            { speaker: "You", l1: "再见！", en: "Goodbye!" },
            { speaker: "Neighbor", l1: "明天见！", en: "See you tomorrow!" },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Pick the right greeting",
          questions: [
            {
              q: "You want to greet an older shopkeeper politely. You say…",
              options: ["你好", "您好", "大家好", "再见"],
              correct: 1,
              fb: "您好 uses the respectful 您 (nín) — ideal for elders and customers.",
            },
            {
              q: "How do you say 'goodbye'?",
              options: ["你好", "谢谢", "再见", "大家好"],
              correct: 2,
              fb: "再见 (zàijiàn) = 'see you again'.",
            },
            {
              q: "To greet a whole group, say…",
              options: ["你好", "大家好", "再见", "明天见"],
              correct: 1,
              fb: "大家好 (dàjiā hǎo) = 'hello everyone'.",
            },
          ],
        },
      ],
    },
    {
      slug: "greetings-thanks-sorry",
      title: "Thanks, you're welcome, sorry",
      estMinutes: 8,
      pages: [
        {
          type: "vocab",
          heading: "The courtesy phrasebook",
          intro: "These four pairs cover almost every polite exchange.",
          items: [
            { l1: "谢谢", en: "thank you", note: "pīnyīn: xièxie; second syllable is light/neutral" },
            { l1: "不客气", en: "you're welcome", note: "pīnyīn: bú kèqi; lit. don't be polite" },
            { l1: "不用谢", en: "no need to thank me", note: "pīnyīn: búyòng xiè; another 'you're welcome'" },
            { l1: "对不起", en: "sorry / excuse me", note: "pīnyīn: duìbuqǐ; a genuine apology" },
            { l1: "没关系", en: "it's okay / no problem", note: "pīnyīn: méi guānxi; reply to an apology" },
            { l1: "请", en: "please / go ahead", note: "pīnyīn: qǐng; also 'please' before a verb" },
          ],
        },
        {
          type: "tip",
          heading: "对不起 vs 不好意思",
          body: "<strong>对不起 (duìbuqǐ)</strong> is a real apology ('I'm sorry'). For lighter situations — squeezing past someone, getting attention, a small bother — Beijingers often say <strong>不好意思 (bù hǎoyìsi)</strong>, 'excuse me / pardon me'. The standard reply to either is <em>没关系 (méi guānxi)</em>.",
          example: { l1: "对不起！ — 没关系。", en: "Sorry! — It's okay." },
        },
        {
          type: "dialogue",
          heading: "A small bump on the subway",
          setup: "You accidentally step on someone's foot on the Beijing metro.",
          lines: [
            { speaker: "You", l1: "对不起！", en: "Sorry!" },
            { speaker: "Stranger", l1: "没关系。", en: "It's okay." },
            { speaker: "You", l1: "谢谢！", en: "Thank you!" },
            { speaker: "Stranger", l1: "不客气。", en: "You're welcome." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Complete the exchange",
          intro: "Choose the right courtesy phrase.",
          items: [
            {
              template: "— 谢谢！ — ___。",
              answer: "不客气",
              en: "— Thank you! — You're welcome.",
              options: ["对不起", "不客气", "再见", "你好"],
            },
            {
              template: "— 对不起！ — ___。",
              answer: "没关系",
              en: "— Sorry! — It's okay.",
              options: ["没关系", "谢谢", "请", "您好"],
            },
            {
              template: "___，这是你的。",
              answer: "请",
              en: "Please/here you go, this is yours.",
              options: ["请", "谢谢", "再见", "对不起"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Thank you! — You're welcome.",
          reference: "谢谢！不客气。",
          hint: "谢谢 = xièxie; 不客气 = bú kèqi (lit. don't be polite).",
        },
      ],
    },
    {
      slug: "greetings-how-are-you-names",
      title: "How are you? What's your name?",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Asking how someone is and their name",
          body: [
            "<strong>你好吗？ (nǐ hǎo ma?)</strong> means 'how are you?' The little word <strong>吗 (ma)</strong> at the end turns a statement into a yes/no question. A common reply is <strong>我很好 (wǒ hěn hǎo)</strong>, 'I'm fine'.",
            "To ask someone's name: <strong>你叫什么名字？ (nǐ jiào shénme míngzi?)</strong> — literally 'you called what name?'. Answer with <strong>我叫… (wǒ jiào…)</strong>, 'I'm called…'.",
            "Politely return the question with <strong>你呢？ (nǐ ne?)</strong>, 'and you?'",
          ],
          keyPoint:
            "吗 (ma) at the end = yes/no question. 呢 (ne) = 'and you?' / 'what about…?'. 我叫… = my name is…",
        },
        {
          type: "vocab",
          heading: "Questions and replies",
          items: [
            { l1: "你好吗？", en: "how are you?", note: "pīnyīn: nǐ hǎo ma?" },
            { l1: "我很好", en: "I'm fine", note: "pīnyīn: wǒ hěn hǎo; 很 = very (often just links the adjective)" },
            { l1: "你呢？", en: "and you?", note: "pīnyīn: nǐ ne?" },
            { l1: "你叫什么名字？", en: "what's your name?", note: "pīnyīn: nǐ jiào shénme míngzi?" },
            { l1: "我叫…", en: "my name is…", note: "pīnyīn: wǒ jiào…; lit. I'm called…" },
            { l1: "认识你很高兴", en: "nice to meet you", note: "pīnyīn: rènshi nǐ hěn gāoxìng" },
          ],
        },
        {
          type: "dialogue",
          heading: "Two students meet",
          setup: "You meet a classmate at Peking University.",
          lines: [
            { speaker: "You", l1: "你好！你叫什么名字？", en: "Hi! What's your name?" },
            { speaker: "Lì", l1: "我叫李丽。你呢？", en: "I'm Li Li. And you?" },
            { speaker: "You", l1: "我叫安娜。你好吗？", en: "I'm Anna. How are you?" },
            { speaker: "Lì", l1: "我很好，谢谢。认识你很高兴！", en: "I'm fine, thanks. Nice to meet you!" },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the sentence",
          intro: "Put the characters in the correct order.",
          items: [
            { tokens: ["你", "叫", "什么", "名字"], en: "What's your name?" },
            { tokens: ["我", "很", "好"], en: "I'm fine." },
            { tokens: ["认识", "你", "很", "高兴"], en: "Nice to meet you." },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "My name is Anna. And you?",
          reference: "我叫安娜。你呢？",
          hint: "我叫… = my name is…; 你呢？= and you?",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "Which word turns a statement into a yes/no question?",
              options: ["呢 (ne)", "吗 (ma)", "请 (qǐng)", "很 (hěn)"],
              correct: 1,
            },
            {
              q: "How do you say 'my name is…'?",
              options: ["你叫…", "我叫…", "你好吗", "你呢"],
              correct: 1,
            },
            {
              q: "你呢？ means…",
              options: ["What's your name?", "And you?", "How are you?", "Goodbye"],
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
        q: "你好 literally means…",
        options: ["good day", "you good", "see again", "thank you"],
        correct: 1,
      },
      {
        q: "The polite/respectful word for 'you' is…",
        options: ["你", "您", "们", "大家"],
        correct: 1,
      },
      {
        q: "再见 means…",
        options: ["hello", "thank you", "goodbye", "sorry"],
        correct: 2,
      },
      {
        q: "Someone says 谢谢. A natural reply is…",
        options: ["对不起", "不客气", "再见", "你好吗"],
        correct: 1,
      },
      {
        q: "对不起 means…",
        options: ["thank you", "you're welcome", "sorry", "hello"],
        correct: 2,
      },
      {
        q: "The standard reply to an apology is…",
        options: ["没关系", "谢谢", "请", "再见"],
        correct: 0,
      },
      {
        q: "How do you greet a whole group?",
        options: ["您好", "大家好", "明天见", "你呢"],
        correct: 1,
      },
      {
        q: "你好吗？ means…",
        options: ["What's your name?", "How are you?", "And you?", "Nice to meet you"],
        correct: 1,
      },
      {
        q: "Which means 'my name is…'?",
        options: ["你叫…", "我叫…", "你呢", "我很好"],
        correct: 1,
      },
      {
        q: "The particle 吗 (ma) is used to…",
        options: [
          "Mark the past tense",
          "Form a yes/no question",
          "Say 'please'",
          "Make a word plural",
        ],
        correct: 1,
      },
    ],
  },
};
