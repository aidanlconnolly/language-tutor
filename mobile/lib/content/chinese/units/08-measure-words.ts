import type { Unit } from "../../types";

export const UNIT_MEASURE_WORDS: Unit = {
  slug: "measure-words",
  stage: 2,
  order: 8,
  icon: "🎯",
  title: "Measure words",
  tagline: "个, 本, 张, 只 — classifiers, and 这/那.",
  badge: "core",
  lessons: [
    {
      slug: "measure-words-why-and-ge",
      title: "Why Chinese needs measure words + 个",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "You can't count nouns directly in Chinese",
          body: [
            "In Chinese you never say 'one person' or 'three books' directly. A counting word — a <strong>measure word</strong> (classifier) — must sit between the number and the noun: <strong>number + measure word + noun</strong>.",
            "Think of English 'two <em>sheets</em> of paper' or 'three <em>cups</em> of coffee' — Chinese does this for <em>every</em> noun. 一<strong>个</strong>人 ('one person'), 三<strong>本</strong>书 ('three books').",
            "The all-purpose default is <strong>个 (gè)</strong>. When you don't know the right classifier for a noun, 个 is your safe fallback and will almost always be understood: 一个人, 一个朋友, 一个问题.",
          ],
          keyPoint:
            "Pattern: number + measure word + noun. 个 (gè) is the all-purpose default classifier.",
        },
        {
          type: "vocab",
          heading: "Numbers and 个",
          items: [
            { l1: "一", en: "one", note: "yī" },
            { l1: "两", en: "two (for counting)", note: "liǎng — used before measure words, NOT 二" },
            { l1: "三", en: "three", note: "sān" },
            { l1: "个", en: "general measure word", note: "gè (often neutral tone: ge)" },
            { l1: "人", en: "person", note: "rén" },
            { l1: "问题", en: "question / problem", note: "wèntí" },
            { l1: "朋友", en: "friend", note: "péngyou" },
          ],
        },
        {
          type: "tip",
          heading: "'Two' is 两, not 二, before a measure word",
          body: "Chinese has two words for 'two'. <strong>二 (èr)</strong> is the number you count with or read in '12'. But when 'two' comes before a measure word, you use <strong>两 (liǎng)</strong>: 两个人 ('two people'), not 二个人. Remember it as: 两 = 'a pair of', whenever a classifier follows.",
          example: { l1: "我有两个朋友。", en: "I have two friends." },
        },
        {
          type: "conjugation",
          heading: "Counting with 个 — the pattern",
          verb: "number + 个 + noun",
          meaning: "general counting pattern",
          intro: "Chinese doesn't conjugate; here 'person' is just the pattern label. Note 两 (not 二) for 'two'.",
          tenses: [
            {
              name: "number + 个 + 人 (person)",
              forms: [
                { person: "one", form: "一个人 (yí ge rén)", en: "one person" },
                { person: "two", form: "两个人 (liǎng ge rén)", en: "two people (两, not 二)" },
                { person: "three", form: "三个人 (sān ge rén)", en: "three people" },
                { person: "how many?", form: "几个人 (jǐ ge rén)", en: "how many people?" },
              ],
            },
          ],
        },
        {
          type: "fillBlank",
          heading: "Add 个 (or fix the number)",
          intro: "Use the number + 个 + noun pattern.",
          items: [
            {
              template: "我有一 ___ 朋友。",
              answer: "个",
              en: "I have one friend.",
              options: ["个", "本", "张", "只"],
            },
            {
              template: "桌子上有 ___ 个苹果。",
              answer: "两",
              en: "There are two apples on the table.",
              options: ["二", "两", "几", "个"],
            },
            {
              template: "你有几 ___ 问题？",
              answer: "个",
              en: "How many questions do you have?",
              options: ["个", "本", "张", "只"],
            },
          ],
        },
      ],
    },
    {
      slug: "measure-words-common-classifiers",
      title: "Common measure words: 本 / 张 / 只 / 杯 / 瓶",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Different shapes take different classifiers",
          body: [
            "Beyond 个, each noun has a 'proper' measure word, often tied to its shape. <strong>本 (běn)</strong> is for bound things like books. <strong>张 (zhāng)</strong> is for flat things — paper, tickets, tables, beds.",
            "<strong>只 (zhī)</strong> counts many animals and one of a pair (一只猫 'one cat', 一只手 'one hand'). <strong>杯 (bēi)</strong> is 'a cup of' and <strong>瓶 (píng)</strong> is 'a bottle of' — the container becomes the measure word.",
            "Native speakers will gently correct your classifier, but they always understand you even if you fall back on 个. Learn the common ones first; the rest come with exposure.",
          ],
          keyPoint:
            "本 = books, 张 = flat things, 只 = animals/one-of-pair, 杯 = cups, 瓶 = bottles.",
        },
        {
          type: "vocab",
          heading: "The classifiers and their nouns",
          items: [
            { l1: "本", en: "measure word for books", note: "běn — 一本书 (one book)" },
            { l1: "张", en: "measure word for flat things", note: "zhāng — paper, tickets, tables" },
            { l1: "只", en: "measure word for animals / one-of-pair", note: "zhī — 一只猫 (one cat)" },
            { l1: "杯", en: "measure word: a cup of", note: "bēi — 一杯茶 (a cup of tea)" },
            { l1: "瓶", en: "measure word: a bottle of", note: "píng — 一瓶水 (a bottle of water)" },
            { l1: "书", en: "book", note: "shū" },
            { l1: "票", en: "ticket", note: "piào" },
            { l1: "猫", en: "cat", note: "māo" },
            { l1: "茶", en: "tea", note: "chá" },
            { l1: "水", en: "water", note: "shuǐ" },
          ],
        },
        {
          type: "conjugation",
          heading: "Which classifier for which noun?",
          verb: "measure word + noun",
          meaning: "matching classifiers to nouns",
          intro: "Chinese doesn't conjugate. The 'pattern' column shows the noun type; the form shows the right classifier.",
          tenses: [
            {
              name: "one + classifier + noun",
              forms: [
                { person: "a book", form: "一本书 (yì běn shū)", en: "one book (本)" },
                { person: "a ticket", form: "一张票 (yì zhāng piào)", en: "one ticket (张)" },
                { person: "a cat", form: "一只猫 (yì zhī māo)", en: "one cat (只)" },
                { person: "a cup of tea", form: "一杯茶 (yì bēi chá)", en: "a cup of tea (杯)" },
                { person: "a bottle of water", form: "一瓶水 (yì píng shuǐ)", en: "a bottle of water (瓶)" },
              ],
            },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Pick the right classifier",
          questions: [
            {
              q: "One book = 一 ___ 书",
              options: ["个", "本", "张", "只"],
              correct: 1,
              fb: "Books take 本 (běn).",
            },
            {
              q: "Two tickets = 两 ___ 票",
              options: ["本", "张", "只", "瓶"],
              correct: 1,
              fb: "Flat things like tickets take 张 (zhāng).",
            },
            {
              q: "A cup of tea = 一 ___ 茶",
              options: ["瓶", "只", "杯", "本"],
              correct: 2,
              fb: "杯 (bēi) = 'a cup of'.",
            },
            {
              q: "One cat = 一 ___ 猫",
              options: ["个", "张", "只", "杯"],
              correct: 2,
              fb: "Animals usually take 只 (zhī).",
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "I want a cup of tea and two books.",
          reference: "我要一杯茶和两本书。",
          hint: "杯 for the cup of tea, 本 for books, 两 (not 二) for 'two'. 和 (hé) = 'and'.",
        },
      ],
    },
    {
      slug: "measure-words-this-that",
      title: "这 / 那 + measure word, and 几",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "这/那 also need a measure word",
          body: [
            "<strong>这 (zhè)</strong> = 'this', <strong>那 (nà)</strong> = 'that'. But just like numbers, they can't touch a noun directly — a measure word goes between: 这<strong>个</strong>人 ('this person'), 那<strong>本</strong>书 ('that book').",
            "The pattern is <strong>这/那 + measure word + noun</strong>. The measure word matches the noun: 这张票 ('this ticket'), 那只猫 ('that cat').",
            "To ask 'how many', 几 also takes a measure word: 几<strong>个</strong>人？('how many people?'), 几<strong>本</strong>书？('how many books?'). The classifier follows the question word just as it follows a number.",
          ],
          keyPoint:
            "这/那 + measure word + noun: 这个人, 那本书. 几 + measure word: 几个, 几本.",
        },
        {
          type: "vocab",
          heading: "Demonstratives",
          items: [
            { l1: "这", en: "this", note: "zhè (also zhèi before a measure word)" },
            { l1: "那", en: "that", note: "nà (also nèi before a measure word)" },
            { l1: "这个", en: "this (one)", note: "zhège — 'this + 个'" },
            { l1: "那个", en: "that (one)", note: "nàge" },
            { l1: "这本书", en: "this book", note: "zhè běn shū" },
            { l1: "那只猫", en: "that cat", note: "nà zhī māo" },
            { l1: "哪", en: "which", note: "nǎ — 哪个 = which one (don't confuse with 那, nà)" },
          ],
        },
        {
          type: "conjugation",
          heading: "这/那 + measure word + noun",
          verb: "这/那 + measure word + noun",
          meaning: "demonstrative pattern",
          intro: "No conjugation in Chinese. The 'pattern' label shows the demonstrative; the form shows the full phrase.",
          tenses: [
            {
              name: "this / that + classifier + noun",
              forms: [
                { person: "this person", form: "这个人 (zhège rén)", en: "this person (个)" },
                { person: "that book", form: "那本书 (nà běn shū)", en: "that book (本)" },
                { person: "this ticket", form: "这张票 (zhè zhāng piào)", en: "this ticket (张)" },
                { person: "which cat?", form: "哪只猫 (nǎ zhī māo)?", en: "which cat? (只)" },
              ],
            },
          ],
        },
        {
          type: "dialogue",
          heading: "At a Beijing bookshop",
          setup: "You're browsing books near Wangfujing.",
          lines: [
            { speaker: "You", l1: "这本书多少钱？", en: "How much is this book?" },
            { speaker: "Clerk", l1: "这本三十五块。", en: "This one is thirty-five yuan." },
            { speaker: "You", l1: "那本呢？", en: "And that one?" },
            { speaker: "Clerk", l1: "那本四十块。你要几本？", en: "That one's forty. How many do you want?" },
            { speaker: "You", l1: "我要这两本。", en: "I want these two." },
          ],
        },
        {
          type: "fillBlank",
          heading: "这/那 + the right measure word",
          intro: "Fill in the correct classifier.",
          items: [
            {
              template: "这 ___ 书很贵。",
              answer: "本",
              en: "This book is expensive.",
              options: ["本", "张", "只", "杯"],
            },
            {
              template: "那 ___ 猫是我的。",
              answer: "只",
              en: "That cat is mine.",
              options: ["本", "张", "只", "瓶"],
            },
            {
              template: "你要几 ___ 票？",
              answer: "张",
              en: "How many tickets do you want?",
              options: ["本", "张", "只", "杯"],
            },
            {
              template: "这 ___ 人是谁？",
              answer: "个",
              en: "Who is this person?",
              options: ["个", "本", "只", "瓶"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "How much is this book? I want that cat.",
          reference: "这本书多少钱？我要那只猫。",
          hint: "这 + 本 + 书 for 'this book'; 那 + 只 + 猫 for 'that cat'. Price: 多少钱.",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "'This book' is…",
              options: ["这书", "这个书", "这本书", "书这本"],
              correct: 2,
            },
            {
              q: "Between 这/那 and a noun, you must put a…",
              options: ["number", "measure word", "的", "是"],
              correct: 1,
            },
            {
              q: "'How many books?' is…",
              options: ["几书", "几个书", "几本书", "多少本书吗"],
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
        q: "What's the correct order?",
        options: ["noun + number + measure word", "number + measure word + noun", "measure word + number + noun", "number + noun + measure word"],
        correct: 1,
      },
      {
        q: "The all-purpose default measure word is…",
        options: ["本", "张", "个", "只"],
        correct: 2,
      },
      {
        q: "'Two people' is…",
        options: ["二个人", "两个人", "二人个", "两人"],
        correct: 1,
      },
      {
        q: "Which measure word is for books?",
        options: ["张", "本", "只", "杯"],
        correct: 1,
      },
      {
        q: "A ticket (flat object) takes…",
        options: ["本", "张", "只", "瓶"],
        correct: 1,
      },
      {
        q: "'A cup of tea' is…",
        options: ["一本茶", "一只茶", "一杯茶", "一张茶"],
        correct: 2,
      },
      {
        q: "'This book' is…",
        options: ["这书", "这本书", "这个书", "书这本"],
        correct: 1,
      },
      {
        q: "After 这 or 那, you need a…",
        options: ["measure word", "的", "是", "吗"],
        correct: 0,
      },
      {
        q: "'That cat' is…",
        options: ["那本猫", "那个猫", "那只猫", "那张猫"],
        correct: 2,
      },
      {
        q: "'How many books?' uses…",
        options: ["几书", "几本书", "多少书吗", "几个书"],
        correct: 1,
      },
    ],
  },
};
