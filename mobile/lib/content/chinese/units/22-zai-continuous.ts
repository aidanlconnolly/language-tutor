import type { Unit } from "../../types";

export const UNIT_ZAI_CONTINUOUS: Unit = {
  slug: "zai-continuous",
  stage: 5,
  order: 22,
  icon: "🌅",
  title: "在 & 正在 — ongoing",
  tagline: "(正)在 + verb for an action in progress.",
  badge: "core",
  lessons: [
    {
      slug: "zai-continuous-progressive",
      title: "(正)在 + verb: happening right now",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Marking an action in progress",
          body: [
            "To say an action is <strong>happening right now</strong> — English \"-ing\" — put <strong>在 (zài)</strong> directly before the verb: <em>我在吃饭 (I'm eating)</em>, <em>他在看书 (he's reading)</em>.",
            "You can strengthen it to <strong>正在 (zhèngzài)</strong> for \"right in the middle of\": <em>我正在吃饭 (I'm in the middle of eating)</em>. 正在 and 在 mean essentially the same thing; 正在 just emphasizes the exact moment.",
            "Like every other aspect marker, the verb itself never changes. You add 在 in front — that's all.",
            "This is aspect, not tense: 在 says the action is <em>ongoing</em>, whenever that is (usually now).",
          ],
          keyPoint:
            "(正)在 + verb = action in progress (English -ing). 我在吃饭 = I'm eating. The verb never changes.",
        },
        {
          type: "conjugation",
          heading: "吃饭 — the progressive pattern",
          verb: "吃饭",
          meaning: "to eat (a meal) (chī fàn)",
          intro: "在 sits in front of the verb to show the action is ongoing.",
          tenses: [
            {
              name: "Base vs. in progress",
              forms: [
                { person: "base", form: "吃饭 (chī fàn)", en: "eat (a meal)" },
                { person: "with 在", form: "在吃饭 (zài chī fàn)", en: "am/is/are eating" },
                { person: "with 正在", form: "正在吃饭 (zhèngzài chī fàn)", en: "am right in the middle of eating" },
              ],
            },
            {
              name: "Full sentences",
              forms: [
                { person: "我在吃饭", form: "wǒ zài chī fàn", en: "I'm eating" },
                { person: "他在看书", form: "tā zài kàn shū", en: "he's reading" },
                { person: "我们正在工作", form: "wǒmen zhèngzài gōngzuò", en: "we're working (right now)" },
              ],
            },
          ],
        },
        {
          type: "vocab",
          heading: "Verbs for things in progress",
          items: [
            { l1: "工作", en: "to work", note: "gōngzuò" },
            { l1: "学习", en: "to study", note: "xuéxí" },
            { l1: "睡觉", en: "to sleep", note: "shuì jiào" },
            { l1: "打电话", en: "to make a phone call", note: "dǎ diànhuà" },
            { l1: "等", en: "to wait", note: "děng" },
            { l1: "正在", en: "(in the middle of) -ing", note: "zhèngzài" },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the progressive",
          intro: "Place 在 right before the verb.",
          items: [
            { tokens: ["我", "在", "吃饭"], en: "I'm eating." },
            { tokens: ["他", "在", "看", "书"], en: "He's reading a book." },
            { tokens: ["我们", "正在", "工作"], en: "We're working right now." },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "I'm eating, and he's reading a book.",
          reference: "我在吃饭，他在看书。",
          hint: "在 + verb for each. 看书 = read a book.",
        },
      ],
    },
    {
      slug: "zai-continuous-ne-negation",
      title: "呢 at the end & negating the progressive",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Soften it with 呢, deny it with 没(在)",
          body: [
            "Mandarin often tags a soft <strong>呢 (ne)</strong> onto the end of a progressive sentence: <em>我在吃饭呢 (I'm eating [right now])</em>. It adds a relaxed \"currently\" feeling and is very common in speech.",
            "You'll often hear 在…呢 wrap around the verb together: <em>他在睡觉呢 (he's sleeping)</em>.",
            "To <strong>negate</strong> an in-progress action, use <strong>没(在) (méi zài)</strong> — \"not… -ing\": <em>我没在睡觉 (I'm not sleeping)</em>. You do <em>not</em> use 不 here, because 不 negates habits, not an action in progress.",
            "Quick answer to \"are you sleeping?\": <em>没有，我在工作 (No, I'm working)</em>.",
          ],
          keyPoint:
            "在…呢 = a soft 'currently -ing'. Negate the progressive with 没(在), not 不. 我没在睡觉 = I'm not sleeping.",
        },
        {
          type: "dialogue",
          heading: "What are you doing?",
          setup: "A phone call between friends in Beijing.",
          lines: [
            { speaker: "Friend", l1: "你在做什么呢？", en: "What are you doing (right now)?" },
            { speaker: "You", l1: "我在吃饭呢。你呢？", en: "I'm eating. And you?" },
            { speaker: "Friend", l1: "我在等地铁。你在睡觉吗？", en: "I'm waiting for the subway. Are you sleeping?" },
            { speaker: "You", l1: "没有，我没在睡觉，我在工作。", en: "No, I'm not sleeping, I'm working." },
          ],
        },
        {
          type: "tip",
          heading: "呢 vs 吗",
          body: "Don't mix them up. <strong>吗</strong> turns a statement into a yes/no question (<em>你在吃饭吗？</em> = Are you eating?). <strong>呢</strong> is NOT a yes/no marker — on a progressive sentence it just adds a soft \"currently,\" and after a noun it means \"and what about…?\" (<em>你呢？</em> = And you?).",
          example: { l1: "我在学习呢，你呢？", en: "I'm studying — and you?" },
        },
        {
          type: "fillBlank",
          heading: "呢 or the right negation",
          items: [
            {
              template: "你在做什么 ___ ？",
              answer: "呢",
              en: "What are you doing (right now)?",
              options: ["呢", "吗", "了", "过"],
            },
            {
              template: "我 ___ 睡觉，我在工作。",
              answer: "没在",
              en: "I'm not sleeping, I'm working.",
              options: ["没在", "不在", "不", "没了"],
            },
            {
              template: "他在打电话 ___ 。",
              answer: "呢",
              en: "He's on the phone right now.",
              options: ["呢", "吗", "过", "不"],
            },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Question or soften?",
          questions: [
            {
              q: "Which correctly asks 'Are you studying?'",
              options: ["你在学习呢？", "你在学习吗？", "你学习了吗在？", "你没学习吗？"],
              correct: 1,
              fb: "吗 makes the yes/no question. 呢 would just soften a statement.",
            },
            {
              q: "How do you say 'I'm not eating'?",
              options: ["我不吃饭。", "我没在吃饭。", "我没吃饭了。", "我不在吃饭呢。"],
              correct: 1,
              fb: "Negate the progressive with 没在. 我不吃饭 = I don't eat (habit).",
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "What are you doing? I'm not sleeping, I'm studying.",
          reference: "你在做什么呢？我没在睡觉，我在学习。",
          hint: "呢 softens the question; negate the progressive with 没在.",
        },
      ],
    },
    {
      slug: "zai-continuous-two-zai",
      title: "Two kinds of 在: location vs. progressive",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "The same 在 does two different jobs",
          body: [
            "You've now met 在 twice, and they look identical but behave differently — this trips up every learner, so let's separate them.",
            "<strong>在 as 'to be at' (location):</strong> 在 + a place, acting as the main verb. <em>我在北京 (I'm in Beijing)</em>, <em>他在家 (he's at home)</em>. Here 在 is followed by a <em>place</em>.",
            "<strong>在 as the progressive marker:</strong> 在 + a verb, marking an action in progress. <em>我在吃饭 (I'm eating)</em>. Here 在 is followed by a <em>verb</em>.",
            "The simple test: <strong>在 + place = location; 在 + verb = -ing</strong>. And you can stack both: <em>我在家吃饭呢 (I'm at home eating)</em> — first 在 marks the place 家, then the verb 吃饭 is the ongoing action.",
          ],
          keyPoint:
            "在 + place = 'to be at' (我在北京). 在 + verb = progressive '-ing' (我在吃饭). What follows 在 tells you which.",
        },
        {
          type: "vocab",
          heading: "Places to be at",
          items: [
            { l1: "公司", en: "company / office", note: "gōngsī" },
            { l1: "饭馆", en: "restaurant", note: "fànguǎn" },
            { l1: "地铁站", en: "subway station", note: "dìtiě zhàn" },
            { l1: "天安门", en: "Tiananmen", note: "Tiān'ānmén — central Beijing" },
            { l1: "这儿", en: "here", note: "zhèr — common in Beijing speech" },
            { l1: "那儿", en: "there", note: "nàr" },
          ],
        },
        {
          type: "fillBlank",
          heading: "Location 在 or progressive 在?",
          intro: "Decide what comes after 在 — a place or a verb.",
          items: [
            {
              template: "我现在 ___ 北京。",
              answer: "在",
              en: "I'm in Beijing now. (location)",
              options: ["在", "在吃", "正在", "了"],
            },
            {
              template: "他 ___ 吃饭，别打电话。",
              answer: "在",
              en: "He's eating, don't call. (progressive)",
              options: ["在", "了", "过", "没"],
            },
            {
              template: "我在家 ___ 书呢。",
              answer: "看",
              en: "I'm at home reading. (place + ongoing verb)",
              options: ["看", "在", "了", "过"],
            },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Which 在 is it?",
          questions: [
            {
              q: "In 我在天安门, the 在 means…",
              options: ["am -ing", "to be at a place", "completed action", "experience"],
              correct: 1,
              fb: "在 + place (天安门) = location. 'I'm at Tiananmen.'",
            },
            {
              q: "In 他在打电话, the 在 means…",
              options: ["to be at a place", "am/is -ing (progressive)", "the past", "negation"],
              correct: 1,
              fb: "在 + verb (打电话) = progressive. 'He's making a call.'",
            },
            {
              q: "'I'm at home eating' =",
              options: ["我吃饭在家。", "我在家吃饭呢。", "我家在吃饭。", "我在吃饭家。"],
              correct: 1,
              fb: "在家 marks the place, then 吃饭呢 is the ongoing action.",
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "I'm at home, and I'm reading a book.",
          reference: "我在家，在看书呢。",
          hint: "First 在 = location (在家); second 在 = progressive (在看书).",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "在 + place means…",
              options: ["am -ing", "to be at / in a place", "completed action", "experience"],
              correct: 1,
            },
            {
              q: "在 + verb means…",
              options: ["to be at a place", "an action in progress (-ing)", "the past", "a question"],
              correct: 1,
            },
            {
              q: "'He's at the office' =",
              options: ["他在工作。", "他在公司。", "他公司在。", "他在公司工作呢。"],
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
        q: "To mark an action in progress (-ing), you put which word before the verb?",
        options: ["了", "过", "在", "不"],
        correct: 2,
      },
      {
        q: "'I'm eating' =",
        options: ["我吃了饭。", "我在吃饭。", "我吃饭过。", "我没吃饭。"],
        correct: 1,
      },
      {
        q: "正在 compared to 在…",
        options: ["means the past", "emphasizes 'right in the middle of'", "is a question word", "negates the verb"],
        correct: 1,
      },
      {
        q: "What does 呢 do on a progressive sentence?",
        options: ["makes a yes/no question", "adds a soft 'currently'", "marks completion", "negates"],
        correct: 1,
      },
      {
        q: "How do you negate 'I'm sleeping'?",
        options: ["我不睡觉呢。", "我没睡觉了。", "我没在睡觉。", "我不在睡觉了。"],
        correct: 2,
      },
      {
        q: "Which makes a yes/no question, not a softener?",
        options: ["呢", "吗", "了", "过"],
        correct: 1,
      },
      {
        q: "In 我在北京, the 在 means…",
        options: ["am -ing", "to be at a place", "completed", "experience"],
        correct: 1,
      },
      {
        q: "In 我在看书, the 在 means…",
        options: ["to be at a place", "am/is reading (progressive)", "the past", "a question"],
        correct: 1,
      },
      {
        q: "The test for which 在 it is:",
        options: ["tone of voice", "what follows 在 — a place or a verb", "the subject", "whether 了 appears"],
        correct: 1,
      },
      {
        q: "'I'm at home eating' =",
        options: ["我吃饭在家。", "我在家吃饭呢。", "我家在吃饭。", "我在吃饭在家。"],
        correct: 1,
      },
    ],
  },
};
