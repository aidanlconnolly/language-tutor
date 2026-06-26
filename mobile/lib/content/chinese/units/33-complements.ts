import type { Unit } from "../../types";

export const UNIT_COMPLEMENTS: Unit = {
  slug: "complements",
  stage: 8,
  order: 33,
  icon: "🎩",
  title: "Complements (得/完/到)",
  tagline: "Resultative & degree complements — 说得好, 吃完, 看到.",
  badge: "advanced",
  lessons: [
    {
      slug: "complements-degree-de",
      title: "Saying how well — the degree complement 得",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "How to say someone does something WELL",
          body: [
            "In English you just stick an adverb after the verb: \"he speaks well.\" Mandarin uses a little structural word — <strong>得 (de)</strong> — to attach a comment about HOW the action turns out.",
            "The pattern is <strong>Verb + 得 + adjective</strong>: 说得好 (speaks well), 跑得快 (runs fast), 写得漂亮 (writes beautifully).",
            "The adjective behaves like a normal predicate, so it usually takes 很: 他跑得很快 = he runs (very) fast. Without a degree word it sounds like a comparison is coming.",
            "This 得 is toneless and is written 得 — NOT 的 (the possessive one) and NOT 地 (the adverbial one). Three different characters, all read <em>de</em>.",
          ],
          keyPoint:
            "Verb + 得 + (很 +) adjective = how the action comes off. 他说得很好 = He speaks (it) very well.",
        },
        {
          type: "vocab",
          heading: "Building blocks",
          items: [
            { l1: "得", en: "(structural particle for degree)", note: "de — toneless; links verb to its comment" },
            { l1: "说得很好", en: "speaks very well", note: "shuō de hěn hǎo" },
            { l1: "跑得快", en: "runs fast", note: "pǎo de kuài" },
            { l1: "写得漂亮", en: "writes beautifully", note: "xiě de piàoliang" },
            { l1: "来得早", en: "comes early", note: "lái de zǎo" },
            { l1: "吃得太多", en: "eats too much", note: "chī de tài duō" },
            { l1: "睡得好", en: "sleeps well", note: "shuì de hǎo" },
            { l1: "做得对", en: "does (it) right", note: "zuò de duì" },
            { l1: "唱得不好", en: "sings badly", note: "chàng de bù hǎo" },
          ],
        },
        {
          type: "tip",
          heading: "Repeating the verb when there's an object",
          body: "If the verb already has an object, you must repeat the verb before 得: <strong>他说汉语说得很好</strong> = He speaks Chinese very well. The first 说 carries the object 汉语, the second 说 carries the 得 comment. You can also front the object: <strong>他汉语说得很好</strong>.",
          example: { l1: "他打篮球打得很好。", en: "He plays basketball very well." },
        },
        {
          type: "conjugation",
          heading: "The degree-complement pattern",
          verb: "说",
          meaning: "to speak (shown with the 得 complement)",
          intro: "Notice how the verb repeats when an object is present.",
          tenses: [
            {
              name: "No object",
              forms: [
                { person: "他跑得很快。", form: "V + 得 + 很 + adj", en: "He runs very fast." },
                { person: "她唱得不好。", form: "negate the adjective", en: "She doesn't sing well." },
                { person: "你来得太早了。", form: "得 + tài…le", en: "You came too early." },
              ],
            },
            {
              name: "With an object (repeat the verb)",
              forms: [
                { person: "他说汉语说得很好。", form: "V + obj + V + 得…", en: "He speaks Chinese very well." },
                { person: "他汉语说得很好。", form: "obj fronted, V + 得…", en: "(same — object moved up front)" },
                { person: "你写汉字写得真漂亮。", form: "真 = really", en: "You write characters really beautifully." },
              ],
            },
            {
              name: "Asking how",
              forms: [
                { person: "他跑得快不快?", form: "adj + 不 + adj", en: "Does he run fast?" },
                { person: "你睡得好吗?", form: "…得 + adj + 吗", en: "Did you sleep well?" },
                { person: "他汉语说得怎么样?", form: "怎么样 = how", en: "How well does he speak Chinese?" },
              ],
            },
          ],
        },
        {
          type: "fillBlank",
          heading: "Insert 得",
          intro: "Place the degree particle and a degree word correctly.",
          items: [
            {
              template: "他跑___很快。",
              answer: "得",
              en: "He runs very fast.",
              options: ["的", "得", "地", "了"],
            },
            {
              template: "她说汉语说得___好。",
              answer: "很",
              en: "She speaks Chinese very well.",
              options: ["很", "得", "了", "在"],
            },
            {
              template: "你今天来___太早了。",
              answer: "得",
              en: "You came too early today.",
              options: ["得", "的", "地", "过"],
            },
            {
              template: "他写汉字写得很___。",
              answer: "漂亮",
              en: "He writes characters very beautifully.",
              options: ["漂亮", "漂亮的", "好的", "快了"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "He speaks Chinese very well.",
          reference: "他汉语说得很好。",
          hint: "Front the object 汉语, then 说得很好. (他说汉语说得很好 also works.)",
        },
      ],
    },
    {
      slug: "complements-resultative",
      title: "Did it finish? — resultative complements 完/到/见/好",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Glue a result onto the verb",
          body: [
            "Mandarin verbs are often neutral about whether the action succeeded. To show the <strong>result</strong>, you attach a second little verb or adjective right onto the main verb.",
            "<strong>吃完</strong> = eat-finish = finish eating. <strong>看到</strong> = look-arrive = manage to see / catch sight of. <strong>听见</strong> = listen-perceive = hear (successfully). <strong>做好</strong> = do-good = get (it) done.",
            "Common result endings: <strong>完</strong> (finished), <strong>到</strong> (reach / succeed), <strong>见</strong> (perceive, only with see/hear), <strong>好</strong> (done/ready), <strong>懂</strong> (understand), <strong>错</strong> (wrong), <strong>对</strong> (right), <strong>给</strong> (give to).",
            "Past completion adds 了 after the whole thing: 我吃完了 = I finished eating. The negative uses <strong>没(有)</strong>, NOT 不: 我没吃完 = I didn't finish eating.",
          ],
          keyPoint:
            "Verb + result-word = one compound. Negate completed results with 没, not 不: 没看到 = didn't see (it).",
        },
        {
          type: "vocab",
          heading: "Common resultative compounds",
          items: [
            { l1: "吃完", en: "to finish eating", note: "chī wán" },
            { l1: "看完", en: "to finish watching/reading", note: "kàn wán" },
            { l1: "做完", en: "to finish doing", note: "zuò wán" },
            { l1: "看到", en: "to see (successfully)", note: "kàn dào" },
            { l1: "找到", en: "to find", note: "zhǎo dào" },
            { l1: "买到", en: "to manage to buy", note: "mǎi dào" },
            { l1: "听见", en: "to hear", note: "tīng jiàn" },
            { l1: "看见", en: "to catch sight of", note: "kàn jiàn" },
            { l1: "做好", en: "to get done / ready", note: "zuò hǎo" },
            { l1: "听懂", en: "to understand (by ear)", note: "tīng dǒng" },
            { l1: "写错", en: "to write wrong", note: "xiě cuò" },
            { l1: "学会", en: "to learn (to master)", note: "xué huì" },
          ],
        },
        {
          type: "tip",
          heading: "完 vs 好 vs 到",
          body: "<strong>完</strong> = the action ran to its end (吃完 = nothing left on the plate). <strong>好</strong> = the action reached a satisfactory, ready state (饭做好了 = the meal is ready to serve). <strong>到</strong> = the action achieved its target (买到了 = succeeded in buying; the goal was reached). They overlap but aren't interchangeable.",
          example: { l1: "作业我做完了,但是没做好。", en: "I finished the homework, but didn't do it well." },
        },
        {
          type: "dialogue",
          heading: "Looking for a bookshop in Beijing",
          setup: "You're hunting for a famous bookstore near Wangfujing (王府井).",
          lines: [
            { speaker: "You", l1: "你找到那家书店了吗?", en: "Did you find that bookstore?" },
            { speaker: "朋友", l1: "还没找到。我们走错路了。", en: "Not yet. We took the wrong road." },
            { speaker: "You", l1: "我看到地铁站了,应该在附近。", en: "I see the subway station — it should be nearby." },
            { speaker: "朋友", l1: "啊,我听见有人说在王府井大街。", en: "Ah, I heard someone say it's on Wangfujing Street." },
            { speaker: "You", l1: "太好了,我买到那本书就请你喝咖啡。", en: "Great — once I manage to buy that book, I'll treat you to coffee." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Pick the result ending",
          intro: "Choose 完, 到, 见, 好, or 懂.",
          items: [
            {
              template: "我已经吃___饭了,我们走吧。",
              answer: "完",
              en: "I've already finished eating, let's go.",
              options: ["完", "到", "见", "懂"],
            },
            {
              template: "对不起,我没听___你说的话。",
              answer: "懂",
              en: "Sorry, I didn't understand what you said.",
              options: ["完", "到", "见", "懂"],
            },
            {
              template: "我在书店里没买___那本书。",
              answer: "到",
              en: "I couldn't manage to buy that book at the shop.",
              options: ["完", "到", "好", "见"],
            },
            {
              template: "饭做___了,快来吃吧!",
              answer: "好",
              en: "The meal is ready, come eat!",
              options: ["完", "到", "好", "懂"],
            },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the sentence",
          intro: "Put the resultative compound in the right place.",
          items: [
            { tokens: ["我", "看", "完", "了", "这", "本", "书"], en: "I finished reading this book." },
            { tokens: ["他", "没", "听", "见", "我", "的", "话"], en: "He didn't hear what I said." },
            { tokens: ["你", "找", "到", "钥匙", "了", "吗"], en: "Did you find the keys?" },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "I didn't finish my homework.",
          reference: "我没做完作业。",
          hint: "Negate a completed result with 没, and use 做完 for finish doing.",
        },
      ],
    },
    {
      slug: "complements-potential",
      title: "Can you manage it? — potential complements 看得懂 / 看不懂",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Built-in 'can / can't' for results",
          body: [
            "Take a resultative compound like 看懂 (read-understand) and slide a particle into the middle: <strong>得</strong> for possible, <strong>不</strong> for impossible.",
            "<strong>看得懂</strong> = can understand (by reading). <strong>看不懂</strong> = can't understand. <strong>听得见 / 听不见</strong> = can / can't hear. <strong>吃得完 / 吃不完</strong> = can / can't finish eating.",
            "This is different from 能 (néng). 能 is about permission or general ability; the potential complement is about whether the <em>result</em> is achievable in this situation — capacity, conditions, feasibility. \"This soup is too much, I can't finish it\" → 我吃不完, not 我不能吃完.",
            "The yes/no question stacks both: <strong>看得懂看不懂?</strong> — or just add 吗: 你看得懂吗?",
          ],
          keyPoint:
            "Verb + 得 + result = can; Verb + 不 + result = can't. 看得懂 / 看不懂. Use this for feasibility, not 能.",
        },
        {
          type: "vocab",
          heading: "Potential pairs",
          items: [
            { l1: "看得懂 / 看不懂", en: "can / can't understand (reading)", note: "kàn de dǒng / kàn bu dǒng" },
            { l1: "听得懂 / 听不懂", en: "can / can't understand (hearing)", note: "tīng de dǒng / tīng bu dǒng" },
            { l1: "听得见 / 听不见", en: "can / can't hear", note: "tīng de jiàn / tīng bu jiàn" },
            { l1: "吃得完 / 吃不完", en: "can / can't finish eating", note: "chī de wán / chī bu wán" },
            { l1: "买得到 / 买不到", en: "can / can't get (buy)", note: "mǎi de dào / mǎi bu dào" },
            { l1: "找得到 / 找不到", en: "can / can't find", note: "zhǎo de dào / zhǎo bu dào" },
            { l1: "做得完 / 做不完", en: "can / can't finish doing", note: "zuò de wán / zuò bu wán" },
            { l1: "回得来 / 回不来", en: "can / can't come back", note: "huí de lái / huí bu lái" },
            { l1: "受不了", en: "can't stand / bear it", note: "shòu bu liǎo — very common idiom" },
          ],
        },
        {
          type: "tip",
          heading: "Potential 不 vs 能…完",
          body: "For potential complements, the natural negative is the <strong>得/不</strong> infix, not 能/不能. \"I can't finish this much food\" = <strong>我吃不完这么多</strong> (not 我不能吃完). Save 能 for permission (现在能进去吗? = can I go in now?). One handy fixed phrase: <strong>受不了</strong> = can't take it / unbearable.",
          example: { l1: "这么多菜,我一个人吃不完。", en: "So many dishes — I can't finish them by myself." },
        },
        {
          type: "conjugation",
          heading: "The potential pattern",
          verb: "看懂",
          meaning: "to read-and-understand (shown as a potential complement)",
          intro: "得 = possible, 不 = impossible, slotted between verb and result.",
          tenses: [
            {
              name: "Affirmative (can)",
              forms: [
                { person: "我看得懂中文报纸。", form: "V + 得 + result", en: "I can read Chinese newspapers." },
                { person: "你说慢点我就听得懂。", form: "听得懂", en: "If you speak slowly I can understand." },
                { person: "这些菜我们吃得完。", form: "吃得完", en: "We can finish these dishes." },
              ],
            },
            {
              name: "Negative (can't)",
              forms: [
                { person: "这个字我看不懂。", form: "V + 不 + result", en: "I can't read this character." },
                { person: "太吵了,我听不见。", form: "听不见", en: "It's too noisy, I can't hear." },
                { person: "那本书现在买不到。", form: "买不到", en: "That book is unavailable right now." },
              ],
            },
            {
              name: "Question",
              forms: [
                { person: "你看得懂看不懂?", form: "得 + result + 不 + result", en: "Can you read it (or not)?" },
                { person: "你听得见吗?", form: "…得 + result + 吗", en: "Can you hear?" },
                { person: "今天做得完吗?", form: "做得完吗", en: "Can you finish (it) today?" },
              ],
            },
          ],
        },
        {
          type: "multipleChoice",
          heading: "能 or potential complement?",
          intro: "Choose the most natural Mandarin.",
          questions: [
            {
              q: "This menu is all in Chinese — \"I can't read it.\"",
              qL1: "这个菜单都是中文 ——",
              options: ["我不能看懂。", "我看不懂。", "我没看懂。", "我不会看。"],
              correct: 1,
              fb: "Feasibility of the result → potential complement 看不懂.",
            },
            {
              q: "There's way too much food: \"We can't finish it.\"",
              options: ["我们不能吃完。", "我们吃不完。", "我们没吃完。", "我们不吃完。"],
              correct: 1,
              fb: "吃不完 = the result (finishing) isn't achievable.",
            },
            {
              q: "\"Can you hear me?\" (phone is breaking up)",
              options: ["你能听吗?", "你听得见吗?", "你听完吗?", "你会听吗?"],
              correct: 1,
              fb: "听得见 asks whether hearing succeeds under the conditions.",
            },
          ],
        },
        {
          type: "fillBlank",
          heading: "得 or 不?",
          intro: "Make it 'can' or 'can't' as the English shows.",
          items: [
            {
              template: "声音太小,我听___见。",
              answer: "不",
              en: "The sound is too low, I can't hear it.",
              options: ["得", "不", "没", "完"],
            },
            {
              template: "你慢点说,我就听___懂。",
              answer: "得",
              en: "If you speak slowly, I can understand.",
              options: ["得", "不", "没", "了"],
            },
            {
              template: "那么多作业,他今天做___完。",
              answer: "不",
              en: "So much homework — he can't finish it today.",
              options: ["得", "不", "完", "了"],
            },
            {
              template: "这本书在网上买___到。",
              answer: "得",
              en: "You can get this book online.",
              options: ["得", "不", "没", "完"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "I can't read this character.",
          reference: "这个字我看不懂。",
          hint: "Potential negative: 看 + 不 + 懂. (我看不懂这个字 also works.)",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "Which means 'can't understand (by reading)'?",
              options: ["看懂", "看得懂", "看不懂", "没看懂"],
              correct: 2,
            },
            {
              q: "Best translation of 'We can't finish this much food':",
              options: ["我们不能吃完这么多。", "我们吃不完这么多。", "我们没吃完。", "我们不吃这么多。"],
              correct: 1,
            },
            {
              q: "Make it 'can hear': 听 ___ 见",
              options: ["不", "没", "得", "完"],
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
        q: "Which particle links a verb to a degree comment ('runs fast')?",
        qL1: "他跑___快。",
        options: ["的", "地", "得", "了"],
        correct: 2,
      },
      {
        q: "'He speaks Chinese very well' =",
        options: ["他说汉语很好。", "他汉语说得很好。", "他说得汉语很好。", "他很好说汉语。"],
        correct: 1,
      },
      {
        q: "When a verb has an object, the degree complement requires you to…",
        options: ["drop the object", "repeat the verb", "add 了", "use 是"],
        correct: 1,
      },
      {
        q: "'吃完' means…",
        options: ["want to eat", "finish eating", "can't eat", "eat well"],
        correct: 1,
      },
      {
        q: "Negate a completed resultative ('didn't see it') with…",
        options: ["不看到", "没看到", "看不到", "别看到"],
        correct: 1,
      },
      {
        q: "Which means 'to manage to find'?",
        options: ["找完", "找好", "找到", "找见"],
        correct: 2,
      },
      {
        q: "'看不懂' means…",
        options: ["didn't read it", "can't understand it (reading)", "don't want to read", "read it wrong"],
        correct: 1,
      },
      {
        q: "Most natural for 'I can't finish this much food':",
        options: ["我不能吃完。", "我吃不完。", "我没吃完。", "我不吃完。"],
        correct: 1,
      },
      {
        q: "Make 'can hear': 听 ___ 见",
        options: ["不", "得", "没", "好"],
        correct: 1,
      },
      {
        q: "Translate: 'I finished reading this book.'",
        options: ["我看这本书。", "我看完了这本书。", "我看得懂这本书。", "我没看这本书。"],
        correct: 1,
      },
    ],
  },
};
