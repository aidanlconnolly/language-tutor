import type { Unit } from "../../types";

export const UNIT_POLITE_REQUESTS: Unit = {
  slug: "polite-requests",
  stage: 6,
  order: 27,
  icon: "🤝",
  title: "Polite requests",
  tagline: "请, 能, 可以, 麻烦你…",
  badge: "core",
  lessons: [
    {
      slug: "polite-requests-please-can",
      title: "请 + verb / 能…吗? / 可以…吗?",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "The three building blocks of a polite request",
          body: [
            "<strong>请 (qǐng)</strong> = \"please,\" placed <em>before</em> the verb, not after. <strong>请坐 (qǐng zuò)</strong> = \"please sit,\" <strong>请等一下 (qǐng děng yíxià)</strong> = \"please wait a moment.\" It's the politest, most universal opener.",
            "To ask whether someone <em>can</em> do something, frame the sentence with <strong>能…吗? (néng…ma?)</strong> or <strong>可以…吗? (kěyǐ…ma?)</strong>. Both wrap the verb: <em>能帮我吗? (Can you help me?)</em>, <em>可以坐这里吗? (Can I sit here?)</em>.",
            "Adding <strong>一下 (yíxià)</strong> after a verb means \"a little / for a moment\" and softens any request: <em>帮我一下 (give me a hand)</em>, <em>看一下 (have a quick look)</em>.",
          ],
          keyPoint:
            "请 + verb = please (do). 能…吗? / 可以…吗? = Can you/I…? Verb + 一下 = softens to 'a bit / a moment'.",
        },
        {
          type: "vocab",
          heading: "Request words",
          items: [
            { l1: "请", en: "please (before the verb)", note: "qǐng" },
            { l1: "能", en: "can / be able to", note: "néng" },
            { l1: "可以", en: "can / may", note: "kěyǐ" },
            { l1: "吗", en: "question particle", note: "ma — turns a statement into yes/no" },
            { l1: "一下", en: "a moment / a little", note: "yíxià — softens the verb" },
            { l1: "帮", en: "to help", note: "bāng" },
            { l1: "帮我", en: "help me", note: "bāng wǒ" },
            { l1: "等", en: "to wait", note: "děng" },
            { l1: "请问", en: "excuse me / may I ask", note: "qǐngwèn — polite question opener" },
            { l1: "给我", en: "give me", note: "gěi wǒ" },
          ],
        },
        {
          type: "tip",
          heading: "请 goes BEFORE the verb",
          body: "Unlike English \"please,\" which can float anywhere, Chinese <strong>请</strong> sits right in front of the action: <em>请坐 (please sit)</em>, <em>请进 (please come in)</em>, <em>请稍等 (please wait briefly)</em>. To politely get a stranger's attention before a question, lead with <strong>请问 (qǐngwèn)</strong> — literally \"may I ask.\"",
          example: { l1: "请问，洗手间在哪里?", en: "Excuse me, where is the restroom?" },
        },
        {
          type: "dialogue",
          heading: "Asking for help in a hotel lobby",
          setup: "You need directions and a small favor at reception.",
          lines: [
            { speaker: "You", l1: "请问，能帮我一下吗?", en: "Excuse me, can you help me for a moment?" },
            { speaker: "前台 (Receptionist)", l1: "当然可以，请说。", en: "Of course, please go ahead." },
            { speaker: "You", l1: "可以叫一辆出租车吗?", en: "Can you call a taxi?" },
            { speaker: "前台 (Receptionist)", l1: "可以，请等一下。", en: "Sure, please wait a moment." },
            { speaker: "You", l1: "谢谢。还能给我一张地图吗?", en: "Thanks. Can you also give me a map?" },
            { speaker: "前台 (Receptionist)", l1: "没问题，给您。", en: "No problem, here you go." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Request basics",
          questions: [
            {
              q: "Where does 请 go in 'please sit'?",
              options: ["坐请", "请坐", "坐吗请", "请坐吗"],
              correct: 1,
            },
            {
              q: "'Can you help me?' =",
              options: ["请帮我。", "能帮我吗?", "帮我请。", "帮我一下请。"],
              correct: 1,
            },
            {
              q: "Adding 一下 to a verb makes the request…",
              options: ["more formal", "softer / 'for a moment'", "negative", "a command"],
              correct: 1,
            },
            {
              q: "The polite opener before asking a stranger a question is…",
              options: ["请坐", "请问", "请进", "可以"],
              correct: 1,
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Excuse me, can you help me for a moment?",
          reference: "请问，能帮我一下吗?",
          hint: "请问 opens politely; 能…吗? frames the request; 一下 softens 帮我.",
        },
      ],
    },
    {
      slug: "polite-requests-troubling-you",
      title: "麻烦你… + softening a request",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "麻烦你 — 'sorry to trouble you'",
          body: [
            "<strong>麻烦你 (máfan nǐ)</strong> literally means \"to trouble you,\" and Chinese speakers use it the way English uses \"would you mind…\" or \"sorry to bother you, could you…\". It's warm and considerate: <em>麻烦你帮我拿一下 (Could you grab that for me?)</em>.",
            "Stack softeners for extra politeness: <strong>麻烦你 + verb + 一下</strong> is the everyday formula for asking a favor. End with <strong>好吗? (hǎo ma?)</strong> = \"is that okay?\" to check in: <em>麻烦你帮我看一下，好吗?</em>",
            "When someone does you the favor, the standard thanks is <strong>麻烦你了 (máfan nǐ le)</strong> = \"sorry for the trouble / thanks for the trouble,\" and they'll often wave it off with <strong>不麻烦 (bù máfan)</strong> = \"no trouble at all.\"",
          ],
          keyPoint:
            "麻烦你 + verb + 一下 = the polite favor formula. 好吗? = is that okay? 麻烦你了 = thanks for the trouble.",
        },
        {
          type: "vocab",
          heading: "Softening words",
          items: [
            { l1: "麻烦你", en: "could you / sorry to trouble you", note: "máfan nǐ" },
            { l1: "麻烦你了", en: "thanks for the trouble", note: "máfan nǐ le" },
            { l1: "不麻烦", en: "no trouble at all", note: "bù máfan" },
            { l1: "好吗?", en: "is that okay?", note: "hǎo ma?" },
            { l1: "可不可以", en: "would it be possible / can you", note: "kě bu kěyǐ — softer than 可以吗" },
            { l1: "拿", en: "to take / fetch / hand over", note: "ná" },
            { l1: "递", en: "to pass / hand to", note: "dì" },
            { l1: "稍等", en: "wait a moment (polite)", note: "shāo děng" },
            { l1: "不好意思", en: "excuse me / I'm a little embarrassed", note: "bù hǎoyìsi" },
            { l1: "没关系", en: "it's fine / no problem", note: "méi guānxi" },
          ],
        },
        {
          type: "dialogue",
          heading: "Asking a waiter for a favor",
          setup: "You're at a 火锅 (hotpot) restaurant and need a few things.",
          lines: [
            { speaker: "You", l1: "服务员，麻烦你帮我加点水，好吗?", en: "Waiter, could you add some water for me, please?" },
            { speaker: "服务员 (Waiter)", l1: "好的，稍等。", en: "Sure, one moment." },
            { speaker: "You", l1: "不好意思，再麻烦你递一下纸巾。", en: "Sorry to trouble you, could you also pass the napkins?" },
            { speaker: "服务员 (Waiter)", l1: "给您。还需要别的吗?", en: "Here you go. Anything else you need?" },
            { speaker: "You", l1: "可不可以再来一双筷子?", en: "Could we get another pair of chopsticks?" },
            { speaker: "服务员 (Waiter)", l1: "没问题，马上来。", en: "No problem, right away." },
            { speaker: "You", l1: "太感谢了，麻烦你了。", en: "Thanks so much, sorry for the trouble." },
            { speaker: "服务员 (Waiter)", l1: "不麻烦，应该的。", en: "No trouble, it's my job." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Softening fill",
          items: [
            {
              template: "___ 你帮我拿一下。",
              answer: "麻烦",
              en: "Could you grab that for me.",
              options: ["麻烦", "可以", "请问", "不好"],
            },
            {
              template: "麻烦你帮我看一下，___ ?",
              answer: "好吗",
              en: "Could you take a look for me, okay?",
              options: ["好吗", "好的", "没事", "可以"],
            },
            {
              template: "谢谢，___ 你了。",
              answer: "麻烦",
              en: "Thanks, sorry for the trouble.",
              options: ["麻烦", "可以", "请问", "好吗"],
            },
            {
              template: "___ 不可以再来一杯水?",
              answer: "可",
              en: "Could we get another glass of water?",
              options: ["可", "请", "能", "好"],
            },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the sentence",
          intro: "Tap the words into the correct order.",
          items: [
            { tokens: ["麻烦", "你", "帮", "我", "一下"], en: "Could you give me a hand?" },
            { tokens: ["麻烦", "你", "递", "一下", "筷子"], en: "Could you pass the chopsticks?" },
            { tokens: ["可不可以", "再", "来", "一杯", "水"], en: "Could we get another glass of water?" },
            { tokens: ["谢谢", "麻烦", "你", "了"], en: "Thanks, sorry for the trouble." },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Could you help me take a look, okay?",
          reference: "麻烦你帮我看一下，好吗?",
          hint: "麻烦你 + 帮我 + 看 + 一下, then tag 好吗? to check in.",
        },
      ],
    },
    {
      slug: "polite-requests-can-vs-able",
      title: "能 vs 可以 vs 会 — permission, ability, skill",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Three words that all look like 'can'",
          body: [
            "<strong>会 (huì)</strong> = can in the sense of a <em>learned skill</em>. <em>我会说中文 (I can speak Chinese)</em>, <em>我不会游泳 (I can't swim)</em>. Use 会 for things you studied or trained to do.",
            "<strong>能 (néng)</strong> = can in the sense of <em>being able to right now</em> — physical possibility or capacity. <em>我今天不能来 (I can't come today)</em>, <em>这个能吃吗? (Is this edible / can this be eaten?)</em>.",
            "<strong>可以 (kěyǐ)</strong> = can in the sense of <em>permission / it's allowed</em>. <em>可以拍照吗? (Is photography allowed?)</em>, <em>这里可以停车吗? (Can I park here?)</em>. When you ask a person for permission, 可以 is your default.",
          ],
          keyPoint:
            "会 = skill you learned. 能 = able to / possible right now. 可以 = permitted / allowed.",
        },
        {
          type: "vocab",
          heading: "能 / 可以 / 会 in action",
          items: [
            { l1: "会", en: "can (learned skill)", note: "huì — 我会说中文" },
            { l1: "能", en: "can (able / possible now)", note: "néng — 今天能来" },
            { l1: "可以", en: "can (permitted)", note: "kěyǐ — 可以拍照吗?" },
            { l1: "不会", en: "can't (don't know how)", note: "bú huì" },
            { l1: "不能", en: "can't (not possible/allowed)", note: "bù néng" },
            { l1: "说中文", en: "to speak Chinese", note: "shuō Zhōngwén" },
            { l1: "拍照", en: "to take photos", note: "pāizhào" },
            { l1: "停车", en: "to park (a car)", note: "tíngchē" },
            { l1: "游泳", en: "to swim", note: "yóuyǒng" },
            { l1: "开车", en: "to drive", note: "kāichē" },
          ],
        },
        {
          type: "tip",
          heading: "Which 'can' do I pick?",
          body: "Quick test: did you <strong>learn</strong> it? → 会 (我会开车 — I can drive). Is it <strong>physically possible</strong> or are you <strong>free</strong> to do it? → 能 (我现在不能开车，喝酒了 — I can't drive now, I've been drinking). Are you asking if it's <strong>allowed</strong>? → 可以 (这里可以开车吗? — Can you drive here?). Note: a skilled driver who's had a drink <em>会</em> drive but currently <em>不能</em>.",
          example: { l1: "我会开车，但是现在不能开。", en: "I can drive, but I can't drive right now." },
        },
        {
          type: "dialogue",
          heading: "At a museum entrance",
          setup: "You're checking the rules before going in.",
          lines: [
            { speaker: "You", l1: "请问，里面可以拍照吗?", en: "Excuse me, is photography allowed inside?" },
            { speaker: "工作人员 (Staff)", l1: "可以，但是不能用闪光灯。", en: "Yes, but you can't use flash." },
            { speaker: "You", l1: "好的。这里能停车吗?", en: "Okay. Can I park here?" },
            { speaker: "工作人员 (Staff)", l1: "这里不能，停车场在后面。", en: "Not here, the parking lot is in the back." },
            { speaker: "You", l1: "你会说英文吗?", en: "Can you speak English?" },
            { speaker: "工作人员 (Staff)", l1: "会一点点。", en: "A little bit." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Pick the right 'can'",
          items: [
            {
              template: "我 ___ 说一点中文。(learned skill)",
              answer: "会",
              en: "I can speak a little Chinese.",
              options: ["会", "能", "可以", "请"],
            },
            {
              template: "这里 ___ 拍照吗? (is it allowed?)",
              answer: "可以",
              en: "Is photography allowed here?",
              options: ["可以", "会", "麻烦", "请"],
            },
            {
              template: "我今天太忙，不 ___ 来。(not able to)",
              answer: "能",
              en: "I'm too busy today, I can't come.",
              options: ["能", "会", "可以", "请"],
            },
            {
              template: "他不 ___ 游泳。(doesn't know how)",
              answer: "会",
              en: "He can't swim.",
              options: ["会", "能", "可以", "麻烦"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Is photography allowed here? Can you speak English?",
          reference: "这里可以拍照吗? 你会说英文吗?",
          hint: "Permission → 可以; learned skill (speaking English) → 会.",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "Which 'can' is for a learned skill (e.g. speaking Chinese)?",
              options: ["能", "可以", "会", "请"],
              correct: 2,
            },
            {
              q: "Which 'can' asks about permission (Is it allowed)?",
              options: ["会", "可以", "请", "麻烦"],
              correct: 1,
            },
            {
              q: "'I can't come today' (not able to) uses…",
              options: ["不会", "不能", "不可以", "不请"],
              correct: 1,
            },
            {
              q: "'我会开车' means…",
              options: [
                "I'm allowed to drive",
                "I know how to drive",
                "I can drive right now",
                "Please drive",
              ],
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
        q: "Where does 请 go in 'please come in'?",
        options: ["进请", "请进", "进吗请", "请进吗"],
        correct: 1,
      },
      {
        q: "'Can you help me?' =",
        options: ["请帮我。", "能帮我吗?", "帮我请。", "帮我吗能。"],
        correct: 1,
      },
      {
        q: "Adding 一下 to a verb…",
        options: ["makes it negative", "softens it / 'for a moment'", "makes it past tense", "makes a command"],
        correct: 1,
      },
      {
        q: "The polite opener before a stranger's question is…",
        options: ["请坐", "请进", "请问", "请等"],
        correct: 2,
      },
      {
        q: "'麻烦你' is used to…",
        options: ["complain", "ask a favor politely", "say goodbye", "bargain"],
        correct: 1,
      },
      {
        q: "After someone helps you, '麻烦你了' means…",
        options: ["you're welcome", "sorry for the trouble / thanks", "no problem", "please wait"],
        correct: 1,
      },
      {
        q: "Which 'can' is for a learned skill?",
        options: ["能", "可以", "会", "请"],
        correct: 2,
      },
      {
        q: "Which 'can' asks if something is permitted?",
        options: ["会", "可以", "请", "麻烦"],
        correct: 1,
      },
      {
        q: "'我今天不能来' means…",
        options: [
          "I don't know how to come today",
          "I'm not allowed to come today",
          "I'm not able to come today",
          "Please come today",
        ],
        correct: 2,
      },
      {
        q: "Translate: 'Is photography allowed here?'",
        options: ["这里会拍照吗?", "这里可以拍照吗?", "这里请拍照吗?", "这里麻烦拍照吗?"],
        correct: 1,
      },
    ],
  },
};
