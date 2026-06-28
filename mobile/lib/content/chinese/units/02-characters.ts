import type { Unit } from "../../types";

export const UNIT_CHARACTERS: Unit = {
  slug: "characters",
  stage: 1,
  order: 2,
  icon: "🀄",
  title: "Chinese characters",
  tagline: "How characters work — radicals, stroke order, simplified.",
  badge: "core",
  lessons: [
    {
      slug: "characters-how-they-work",
      title: "How characters work",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Characters carry meaning, not letters",
          body: [
            "Chinese has no alphabet. Each <strong>character</strong> (字, zì) is a small block that stands for one syllable and usually one unit of meaning. 人 means 'person'; 山 means 'mountain'; 口 means 'mouth'.",
            "Words are built from one or more characters. 中 (middle) + 国 (country) = 中国, China. 火 (fire) + 车 (vehicle) = 火车, train. Once you know the pieces, longer words become readable.",
            "Many characters combine a <strong>meaning part</strong> with a <strong>sound part</strong>. The character 妈 (mā, mother) has 女 (woman, the meaning) plus 马 (mǎ, horse, the sound hint). Recognizing these parts speeds up learning enormously.",
          ],
          tip: {
            label: "Don't panic about the count",
            body: "There are thousands of characters, but you only need about <em>2,000–3,000</em> for daily literacy, and just a few hundred to start reading menus, signs and simple texts.",
          },
        },
        {
          type: "vocab",
          heading: "Pictographs you can almost guess",
          intro: "The oldest characters are simplified pictures. Look for the image inside.",
          items: [
            { l1: "人", en: "person", note: "pīnyīn: rén; like a figure walking on two legs" },
            { l1: "山", en: "mountain", note: "pīnyīn: shān; three peaks" },
            { l1: "口", en: "mouth", note: "pīnyīn: kǒu; an open mouth" },
            { l1: "木", en: "tree / wood", note: "pīnyīn: mù; a tree with branches and roots" },
            { l1: "日", en: "sun / day", note: "pīnyīn: rì; the sun" },
            { l1: "月", en: "moon / month", note: "pīnyīn: yuè; a crescent moon" },
          ],
        },
        {
          type: "tip",
          heading: "Radicals: the building blocks",
          body: "Most characters contain a <strong>radical</strong> — a recurring component that hints at meaning and is how dictionaries are organized. The water radical <strong>氵</strong> appears in 河 (river), 海 (sea), 酒 (alcohol). The mouth radical <strong>口</strong> appears in 吃 (eat), 喝 (drink), 叫 (to call).",
          example: { l1: "河、海、酒", en: "river, sea, alcohol — all share the water radical 氵" },
        },
        {
          type: "vocab",
          heading: "Four common radicals",
          intro: "Spotting these inside a character gives you a clue to its meaning.",
          items: [
            { l1: "人 / 亻", en: "person radical", note: "pīnyīn: rén; in 你 (you), 他 (he), 们 (plural)" },
            { l1: "氵", en: "water radical", note: "pīnyīn: shuǐ; in 河 (river), 海 (sea), 汤 (soup)" },
            { l1: "口", en: "mouth radical", note: "pīnyīn: kǒu; in 吃 (eat), 喝 (drink), 叫 (call)" },
            { l1: "木", en: "wood/tree radical", note: "pīnyīn: mù; in 林 (forest), 桌 (table), 树 (tree)" },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Quick check",
          questions: [
            {
              q: "What does a single Chinese character usually represent?",
              options: [
                "A single letter sound",
                "One syllable and usually a unit of meaning",
                "A whole sentence",
                "Only a grammar particle",
              ],
              correct: 1,
              fb: "Each character is one syllable and typically carries meaning.",
            },
            {
              q: "The radical 氵 hints that a character is related to…",
              options: ["Fire", "Water", "Mouth", "Wood"],
              correct: 1,
              fb: "氵 is the water radical, seen in 河, 海, 汤.",
            },
            {
              q: "中国 is made of 中 (middle) + 国 (country). It means…",
              options: ["Middle person", "China", "Mountain", "Train"],
              correct: 1,
              fb: "中国 literally 'Middle Country' = China.",
            },
          ],
        },
      ],
    },
    {
      slug: "characters-stroke-order",
      title: "Stroke order basics",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Characters are written in a fixed order",
          body: [
            "Every character is drawn with <strong>strokes</strong> in a set sequence. Following stroke order makes your characters look right, helps you remember them, and is essential for handwriting recognition.",
            "The core rules: <strong>top to bottom</strong>, <strong>left to right</strong>, <strong>horizontal before vertical</strong> when they cross, and close a box's frame before sealing the bottom.",
            "Take 十 (ten): write the horizontal stroke first, then the vertical through it. Take 二 (two): top line first, then the bottom line.",
          ],
          keyPoint:
            "Top to bottom, left to right, horizontal before vertical, and enclose then seal a box last.",
        },
        {
          type: "vocab",
          heading: "Stroke-order examples",
          intro: "Trace each one in the air following the rule given.",
          items: [
            { l1: "一", en: "one", note: "pīnyīn: yī; a single left-to-right horizontal stroke" },
            { l1: "二", en: "two", note: "pīnyīn: èr; top horizontal first, then bottom" },
            { l1: "十", en: "ten", note: "pīnyīn: shí; horizontal first, then vertical" },
            { l1: "口", en: "mouth", note: "pīnyīn: kǒu; left side, then top+right, seal the bottom last" },
            { l1: "人", en: "person", note: "pīnyīn: rén; the left-falling stroke before the right-falling one" },
          ],
        },
        {
          type: "tip",
          heading: "Why bother with stroke order?",
          body: "Beyond neatness, stroke order is how phones recognize handwriting and how characters keep a consistent shape. Two people who both follow the rules write the same character recognizably — even quickly. It also makes counting strokes (for dictionaries) reliable.",
          example: { l1: "你好", en: "Written left-to-right, each character top-to-bottom" },
        },
        {
          type: "multipleChoice",
          heading: "Order the strokes",
          questions: [
            {
              q: "For 十 (ten), which stroke comes first?",
              options: ["The vertical", "The horizontal", "Either order is fine", "Bottom to top"],
              correct: 1,
              fb: "Horizontal before vertical when they cross: the line first, then down.",
            },
            {
              q: "The general direction rule is…",
              options: [
                "Bottom to top, right to left",
                "Top to bottom, left to right",
                "Outside to inside always",
                "There is no rule",
              ],
              correct: 1,
              fb: "Top to bottom and left to right are the two master rules.",
            },
            {
              q: "When writing a box like 口, the bottom stroke that seals it is…",
              options: ["Written first", "Written last", "Skipped", "Optional"],
              correct: 1,
              fb: "You enclose the frame, then seal the bottom last.",
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "person",
          reference: "人",
          hint: "Two strokes: left-falling, then right-falling. pīnyīn: rén.",
        },
      ],
    },
    {
      slug: "characters-simplified-first-ten",
      title: "Simplified characters & your first ten",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Simplified vs traditional",
          body: [
            "In the 1950s–60s mainland China adopted <strong>simplified characters</strong> — versions with fewer strokes — to boost literacy. Taiwan, Hong Kong and Macau still use <strong>traditional</strong> characters.",
            "This course teaches <strong>simplified</strong>, what you'll see in Beijing. Compare 马 (simplified) with 馬 (traditional) for 'horse', or 国 with 國 for 'country'. Same meaning, fewer strokes.",
            "You don't need to learn both. Recognize that signs in Hong Kong or older books may look more complex, and move on.",
          ],
          tip: {
            label: "Same language, different shapes",
            body: "Simplified and traditional are two ways of writing the <em>same</em> Mandarin words — not different languages. Learn simplified and you can read mainland China comfortably.",
          },
        },
        {
          type: "vocab",
          heading: "Your first ten characters",
          intro: "Learn these cold — they appear constantly and most are very few strokes.",
          items: [
            { l1: "一", en: "one", note: "pīnyīn: yī" },
            { l1: "二", en: "two", note: "pīnyīn: èr" },
            { l1: "三", en: "three", note: "pīnyīn: sān; three stacked lines" },
            { l1: "人", en: "person", note: "pīnyīn: rén" },
            { l1: "大", en: "big", note: "pīnyīn: dà; a person 人 with arms stretched wide" },
            { l1: "小", en: "small", note: "pīnyīn: xiǎo" },
            { l1: "口", en: "mouth", note: "pīnyīn: kǒu" },
            { l1: "中", en: "middle", note: "pīnyīn: zhōng; a line through the center of a box" },
            { l1: "山", en: "mountain", note: "pīnyīn: shān" },
            { l1: "日", en: "sun / day", note: "pīnyīn: rì" },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Match the meaning",
          questions: [
            {
              q: "Which character means 'big'?",
              options: ["小", "大", "中", "口"],
              correct: 1,
              fb: "大 (dà) is a person with arms spread wide — big.",
            },
            {
              q: "三 means…",
              options: ["one", "two", "three", "mountain"],
              correct: 2,
              fb: "三 (sān) is three stacked horizontal lines.",
            },
            {
              q: "This course teaches which character set?",
              options: ["Traditional", "Simplified", "Both equally", "Neither"],
              correct: 1,
              fb: "Simplified — what's used in mainland China and Beijing.",
            },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the number, then a word",
          intro: "Arrange the characters in the right order.",
          items: [
            { tokens: ["三", "个", "人"], en: "three people" },
            { tokens: ["大", "山"], en: "big mountain" },
            { tokens: ["中", "国", "人"], en: "Chinese person" },
          ],
        },
        {
          type: "fillBlank",
          heading: "Pick the character",
          intro: "Choose the character that fits the English.",
          items: [
            {
              template: "___ (one)",
              answer: "一",
              en: "one",
              options: ["一", "二", "三", "十"],
            },
            {
              template: "___ (small)",
              answer: "小",
              en: "small",
              options: ["大", "小", "中", "山"],
            },
            {
              template: "___ (sun / day)",
              answer: "日",
              en: "sun / day",
              options: ["月", "日", "口", "中"],
            },
          ],
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "Simplified characters were adopted to…",
              options: [
                "Replace pinyin",
                "Increase literacy with fewer strokes",
                "Match Japanese",
                "Add more strokes",
              ],
              correct: 1,
            },
            {
              q: "馬 is the traditional form of which simplified character?",
              options: ["马 (horse)", "国 (country)", "中 (middle)", "人 (person)"],
              correct: 0,
            },
            {
              q: "Which means 'middle'?",
              options: ["山", "中", "大", "口"],
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
        q: "A single Chinese character usually represents…",
        options: ["One letter", "One syllable and a unit of meaning", "One sentence", "One tone"],
        correct: 1,
      },
      {
        q: "The radical 口 hints a character relates to…",
        options: ["Water", "Mouth / speech", "Fire", "Metal"],
        correct: 1,
      },
      {
        q: "中国 means…",
        options: ["Big country", "China", "Middle person", "Mountain"],
        correct: 1,
      },
      {
        q: "The two master stroke-order rules are…",
        options: [
          "Bottom-to-top, right-to-left",
          "Top-to-bottom, left-to-right",
          "Inside-out only",
          "Random order",
        ],
        correct: 1,
      },
      {
        q: "In 十 (ten), which stroke comes first?",
        options: ["Vertical", "Horizontal", "Either", "Diagonal"],
        correct: 1,
      },
      {
        q: "This course uses which character set?",
        options: ["Traditional", "Simplified", "Both", "Pinyin only"],
        correct: 1,
      },
      {
        q: "Which character means 'big'?",
        options: ["小", "大", "中", "口"],
        correct: 1,
      },
      {
        q: "三 means…",
        options: ["one", "two", "three", "ten"],
        correct: 2,
      },
      {
        q: "The water radical is…",
        options: ["亻", "氵", "口", "木"],
        correct: 1,
      },
      {
        q: "Simplified and traditional characters are…",
        options: [
          "Two different languages",
          "Two ways of writing the same words",
          "Pinyin variants",
          "Tones",
        ],
        correct: 1,
      },
    ],
  },
};
