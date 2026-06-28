import type { Unit } from "../../types";

export const UNIT_ABOUT_ME: Unit = {
  slug: "about-me",
  stage: 2,
  order: 6,
  icon: "🪪",
  title: "About me",
  tagline: "Nationalities, jobs, family, and 叫.",
  badge: "tourist",
  lessons: [
    {
      slug: "about-me-nationalities",
      title: "Countries and 人: where you're from",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Country + 人 = nationality",
          body: [
            "To say someone's nationality, take the country name and add <strong>人 (rén)</strong> ('person'): 中国 (China) + 人 → <strong>中国人</strong> ('Chinese person'). 美国 (USA) + 人 → <strong>美国人</strong> ('American').",
            "The full pattern is <strong>我是…人</strong> ('I am a … person'): 我是美国人 = 'I'm American.' This reuses the 是 (A 是 B) structure you already know.",
            "Many country names follow a logic: 美国 ('beautiful country' = USA), 英国 ('hero country' = UK), 中国 ('middle country' = China). The 国 (guó) means 'country'.",
          ],
          keyPoint:
            "Nationality = country + 人. Say it with 我是…人: 我是英国人 ('I'm British').",
        },
        {
          type: "vocab",
          heading: "Countries and nationalities",
          items: [
            { l1: "中国", en: "China", note: "Zhōngguó" },
            { l1: "中国人", en: "Chinese (person)", note: "Zhōngguó rén" },
            { l1: "美国", en: "USA", note: "Měiguó" },
            { l1: "美国人", en: "American (person)", note: "Měiguó rén" },
            { l1: "英国", en: "UK / Britain", note: "Yīngguó" },
            { l1: "英国人", en: "British (person)", note: "Yīngguó rén" },
            { l1: "法国", en: "France", note: "Fǎguó" },
            { l1: "日本", en: "Japan", note: "Rìběn — note: no 国, so it's 日本人" },
            { l1: "哪国人", en: "what nationality", note: "nǎ guó rén — literally 'which country person'" },
          ],
        },
        {
          type: "dialogue",
          heading: "On a tour bus in Beijing",
          setup: "A fellow traveler strikes up a conversation.",
          lines: [
            { speaker: "Traveler", l1: "你好！你是哪国人？", en: "Hello! What's your nationality?" },
            { speaker: "You", l1: "我是美国人。你呢？", en: "I'm American. And you?" },
            { speaker: "Traveler", l1: "我是英国人。你朋友也是美国人吗？", en: "I'm British. Is your friend also American?" },
            { speaker: "You", l1: "不是，他是法国人。", en: "No, he's French." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Build the nationality",
          intro: "Add 人 or pick the right country word.",
          items: [
            {
              template: "我是美国 ___ 。",
              answer: "人",
              en: "I am American.",
              options: ["人", "国", "是", "的"],
            },
            {
              template: "他是 ___ 人，他来自北京。",
              answer: "中国",
              en: "He is Chinese; he's from Beijing.",
              options: ["美国", "中国", "英国", "法国"],
            },
            {
              template: "你是 ___ 人？",
              answer: "哪国",
              en: "What nationality are you?",
              options: ["哪国", "中国", "美国", "什么"],
            },
          ],
        },
      ],
    },
    {
      slug: "about-me-jobs",
      title: "Jobs: 我是…",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Jobs use the same 我是… pattern",
          body: [
            "Stating your job is just <strong>我是 + job</strong>: 我是老师 ('I'm a teacher'), 我是学生 ('I'm a student'), 我是医生 ('I'm a doctor').",
            "Chinese has no word for 'a/an'. You don't say 'I am <em>a</em> doctor' — just 我是医生. The 是 does all the linking.",
            "To ask someone's job, you'll later use 做什么工作 ('do what work'). For now, recognize the answers people give with 我是….",
          ],
          keyPoint:
            "No 'a/an' in Chinese: 我是医生 = 'I'm a doctor' (literally 'I am doctor').",
        },
        {
          type: "vocab",
          heading: "Common jobs",
          items: [
            { l1: "老师", en: "teacher", note: "lǎoshī" },
            { l1: "学生", en: "student", note: "xuésheng" },
            { l1: "医生", en: "doctor", note: "yīshēng" },
            { l1: "护士", en: "nurse", note: "hùshi" },
            { l1: "工程师", en: "engineer", note: "gōngchéngshī" },
            { l1: "经理", en: "manager", note: "jīnglǐ" },
            { l1: "司机", en: "driver", note: "sījī" },
            { l1: "工作", en: "work / job", note: "gōngzuò" },
          ],
        },
        {
          type: "tip",
          heading: "老师 literally means 'old master'",
          body: "<strong>老师 (lǎoshī)</strong> breaks into 老 ('old', here a respectful prefix) + 师 ('master / expert'). The 老 isn't about age — it signals respect. You'll see the same respectful 老 in 老板 (lǎobǎn, 'boss') and in friendly nicknames like 老王 ('old Wang').",
          example: { l1: "她是我的中文老师。", en: "She is my Chinese teacher." },
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "I am a teacher. He is a doctor.",
          reference: "我是老师。他是医生。",
          hint: "No word for 'a' — just 我是 + job (lǎoshī / yīshēng).",
        },
        {
          type: "multipleChoice",
          heading: "Match the job",
          questions: [
            {
              q: "Which word means 'doctor'?",
              options: ["老师", "医生", "学生", "司机"],
              correct: 1,
              fb: "医生 (yīshēng) = doctor.",
            },
            {
              q: "Translate: 'I'm a student.'",
              options: ["我学生是", "我是学生", "学生是我", "我是老师"],
              correct: 1,
              fb: "我是 + job. 学生 = student.",
            },
            {
              q: "Chinese says 'I am a doctor' as…",
              options: ["我是一个医生", "我是医生 (no word for 'a')", "我一医生是", "我医生"],
              correct: 1,
              fb: "There's no article — 我是医生 is complete.",
            },
          ],
        },
      ],
    },
    {
      slug: "about-me-family",
      title: "Family, 叫, and 有",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "叫 for names, 有 for having",
          body: [
            "<strong>叫 (jiào)</strong> means 'to be called'. 我叫王明 = 'I'm called Wang Ming / My name is Wang Ming.' To ask, say 你叫什么名字？('What are you called?').",
            "<strong>有 (yǒu)</strong> means 'to have': 我有一个姐姐 = 'I have an older sister.' Its negative is special — NOT 不有, but <strong>没有 (méiyǒu)</strong>: 我没有兄弟 = 'I don't have brothers.'",
            "Chinese family words are precise about birth order and side of the family. 哥哥 is specifically an <em>older</em> brother; 弟弟 a <em>younger</em> brother. There's no single word for just 'brother'.",
          ],
          keyPoint:
            "叫 = to be called. 有 = to have; its negative is 没有 (méiyǒu), never 不有.",
        },
        {
          type: "vocab",
          heading: "Family and key verbs",
          items: [
            { l1: "家人", en: "family (members)", note: "jiārén" },
            { l1: "爸爸", en: "dad", note: "bàba" },
            { l1: "妈妈", en: "mom", note: "māma" },
            { l1: "哥哥", en: "older brother", note: "gēge" },
            { l1: "弟弟", en: "younger brother", note: "dìdi" },
            { l1: "姐姐", en: "older sister", note: "jiějie" },
            { l1: "妹妹", en: "younger sister", note: "mèimei" },
            { l1: "叫", en: "to be called", note: "jiào" },
            { l1: "有", en: "to have", note: "yǒu" },
            { l1: "没有", en: "to not have", note: "méiyǒu — the negative of 有" },
          ],
        },
        {
          type: "dialogue",
          heading: "Talking about family in a Beijing hutong",
          setup: "Your host asks about your family over tea.",
          lines: [
            { speaker: "Host", l1: "你叫什么名字？", en: "What's your name?" },
            { speaker: "You", l1: "我叫马克。", en: "My name is Mark." },
            { speaker: "Host", l1: "你有兄弟姐妹吗？", en: "Do you have siblings?" },
            { speaker: "You", l1: "我有一个姐姐，没有哥哥。", en: "I have one older sister, no older brother." },
            { speaker: "Host", l1: "你姐姐做什么工作？", en: "What does your sister do?" },
            { speaker: "You", l1: "她是医生。", en: "She's a doctor." },
          ],
        },
        {
          type: "fillBlank",
          heading: "叫, 有, or 没有?",
          intro: "Fill in the right word.",
          items: [
            {
              template: "我 ___ 马克。",
              answer: "叫",
              en: "I'm called Mark.",
              options: ["叫", "有", "没有", "是"],
            },
            {
              template: "我 ___ 一个妹妹。",
              answer: "有",
              en: "I have one younger sister.",
              options: ["叫", "有", "没有", "是"],
            },
            {
              template: "他 ___ 哥哥，他是家里最大的。",
              answer: "没有",
              en: "He has no older brother; he's the oldest in the family.",
              options: ["叫", "有", "没有", "不"],
            },
            {
              template: "你 ___ 什么名字？",
              answer: "叫",
              en: "What's your name?",
              options: ["叫", "有", "是", "的"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "My name is Mark. I have one older sister; I don't have a younger brother.",
          reference: "我叫马克。我有一个姐姐，没有弟弟。",
          hint: "Name: 我叫… (jiào). Have: 有 (yǒu). Don't have: 没有 (méiyǒu). 姐姐 = older sister, 弟弟 = younger brother.",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "What is the negative of 有 ('to have')?",
              options: ["不有", "没有", "不是有", "无有"],
              correct: 1,
            },
            {
              q: "How do you say 'My name is Mark'?",
              options: ["我是马克叫", "我叫马克", "马克叫我", "我名字马克"],
              correct: 1,
            },
            {
              q: "哥哥 (gēge) specifically means…",
              options: ["any brother", "younger brother", "older brother", "father"],
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
        q: "How do you form a nationality from a country name?",
        options: ["country + 的", "country + 人", "country + 是", "country + 国"],
        correct: 1,
      },
      {
        q: "Translate: 'I'm American.'",
        options: ["我美国是人", "我是美国人", "我人美国是", "美国我是人"],
        correct: 1,
      },
      {
        q: "Ask someone's nationality: 'You are which-country person?'",
        options: ["你哪国人是", "你是哪国人", "哪国你是人", "你是人哪国"],
        correct: 1,
      },
      {
        q: "Chinese says 'I am a doctor' as…",
        options: ["我是一医生", "我是医生 (no 'a')", "我医生是", "我有医生"],
        correct: 1,
      },
      {
        q: "Which word means 'teacher'?",
        options: ["医生", "学生", "老师", "护士"],
        correct: 2,
      },
      {
        q: "How do you say 'My name is …'?",
        options: ["我是…名字", "我叫…", "我有…", "我的…叫"],
        correct: 1,
      },
      {
        q: "The negative of 有 is…",
        options: ["不有", "没有", "无有", "不是"],
        correct: 1,
      },
      {
        q: "姐姐 (jiějie) means…",
        options: ["younger sister", "older sister", "mom", "older brother"],
        correct: 1,
      },
      {
        q: "Translate: 'I have one older sister.'",
        options: ["我没有一个姐姐", "我有一个姐姐", "我是一个姐姐", "我叫一个姐姐"],
        correct: 1,
      },
      {
        q: "Which is the verb 'to be called'?",
        options: ["是", "有", "叫", "的"],
        correct: 2,
      },
    ],
  },
};
