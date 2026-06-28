import type { Unit } from "../../types";

export const UNIT_LE_ASPECT: Unit = {
  slug: "le-aspect",
  stage: 5,
  order: 21,
  icon: "✅",
  title: "了 — completed action",
  tagline: "了 for a completed action and a change of state.",
  badge: "core",
  lessons: [
    {
      slug: "le-aspect-completed",
      title: "Verb + 了: the action is complete",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Chinese marks completion, not the past",
          body: [
            "There is no past tense in Mandarin. Instead, the particle <strong>了 (le)</strong> placed right after a verb marks that the action was <strong>completed</strong>.",
            "<em>我吃</em> = I eat. <em>我吃了</em> = I ate / I have eaten. The verb 吃 doesn't change — you simply attach 了.",
            "了 is about <strong>completion, not time</strong>. \"After I've eaten, I'll go\" still uses 了 for the eating even though it hasn't happened yet: <em>我吃了饭去 (after I've eaten, I'll go)</em>. For now, think \"action done.\"",
            "With an object, 了 usually sits between the verb and a <strong>quantified</strong> object: <em>我吃了一碗米饭 (I ate a bowl of rice)</em>.",
          ],
          keyPoint:
            "Verb + 了 = the action is completed. 了 marks completion, not 'the past'. The verb itself never changes.",
        },
        {
          type: "conjugation",
          heading: "吃 — the completion pattern",
          verb: "吃",
          meaning: "to eat (chī)",
          intro: "了 attaches to the verb to show the action is finished.",
          tenses: [
            {
              name: "Base vs. completed",
              forms: [
                { person: "base", form: "吃 (chī)", en: "eat" },
                { person: "with 了", form: "吃了 (chī le)", en: "ate / have eaten" },
              ],
            },
            {
              name: "Full sentences",
              forms: [
                { person: "我吃了", form: "wǒ chī le", en: "I ate" },
                { person: "他去了", form: "tā qù le", en: "he went" },
                { person: "我们看了", form: "wǒmen kàn le", en: "we watched / read" },
                { person: "我喝了一杯茶", form: "wǒ hē le yì bēi chá", en: "I drank a cup of tea" },
              ],
            },
          ],
        },
        {
          type: "vocab",
          heading: "Useful verbs & a measure word",
          items: [
            { l1: "买", en: "to buy", note: "mǎi" },
            { l1: "到", en: "to arrive", note: "dào" },
            { l1: "做", en: "to do / make", note: "zuò" },
            { l1: "碗", en: "bowl (measure word)", note: "wǎn — 一碗米饭 = a bowl of rice" },
            { l1: "杯", en: "cup / glass (measure word)", note: "bēi — 一杯茶 = a cup of tea" },
            { l1: "饺子", en: "dumplings", note: "jiǎozi — a Beijing staple" },
          ],
        },
        {
          type: "fillBlank",
          heading: "Add 了 for completion",
          items: [
            {
              template: "昨天我 ___ 一碗饺子。(吃)",
              answer: "吃了",
              en: "Yesterday I ate a bowl of dumplings.",
              options: ["吃了", "吃", "了吃", "不吃"],
            },
            {
              template: "他 ___ 北京。(到)",
              answer: "到了",
              en: "He arrived in Beijing.",
              options: ["到了", "到", "不到", "了到"],
            },
            {
              template: "我们 ___ 三本书。(买)",
              answer: "买了",
              en: "We bought three books.",
              options: ["买了", "买", "没买", "买不"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Yesterday I ate dumplings and drank a cup of tea.",
          reference: "昨天我吃了饺子，喝了一杯茶。",
          hint: "Attach 了 to each completed verb: 吃了, 喝了. 一杯 = one cup.",
        },
      ],
    },
    {
      slug: "le-aspect-negation",
      title: "Negating with 没(有) — and 了 disappears",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "To say it didn't happen, drop 了 and add 没",
          body: [
            "You already saw 没有 for \"don't have.\" The same <strong>没(有)</strong> is how you say an action <strong>did not happen</strong>: <em>我没吃 (I didn't eat)</em>.",
            "The crucial rule: when you negate a completed action, <strong>了 disappears</strong>. You can't have both. <em>我吃了 → 我没吃</em>, never <em>我没吃了</em>.",
            "Why? 了 means the action <em>was completed</em>, and 没 means it <em>never happened</em> — the two contradict each other, so only 没 remains.",
            "You can use 没 or 没有 — both are fine, 没 is just shorter.",
          ],
          keyPoint:
            "Negate a completed action with 没(有), and DROP 了. 我吃了 → 我没吃. Never 没…了.",
        },
        {
          type: "conjugation",
          heading: "吃 — completed vs. didn't happen",
          verb: "吃",
          meaning: "to eat (chī)",
          intro: "Notice how 了 vanishes in the negative.",
          tenses: [
            {
              name: "Affirmative vs. negative",
              forms: [
                { person: "with 了", form: "吃了 (chī le)", en: "ate" },
                { person: "negative 没(有)", form: "没吃 (méi chī)", en: "didn't eat" },
              ],
            },
            {
              name: "Side by side",
              forms: [
                { person: "我吃了", form: "wǒ chī le", en: "I ate" },
                { person: "我没吃", form: "wǒ méi chī", en: "I didn't eat" },
                { person: "他去了", form: "tā qù le", en: "he went" },
                { person: "他没去", form: "tā méi qù", en: "he didn't go" },
              ],
            },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Negate the completed action",
          questions: [
            {
              q: "'I ate' is 我吃了. How do you say 'I didn't eat'?",
              options: ["我没吃了。", "我不吃了。", "我没吃。", "我没有吃了。"],
              correct: 2,
              fb: "Negate with 没 and drop 了. 没…了 is never allowed.",
            },
            {
              q: "Which sentence is WRONG?",
              options: ["他去了。", "他没去。", "他没去了。", "他没有去。"],
              correct: 2,
              fb: "他没去了 is wrong — you can't combine 没 with 了.",
            },
            {
              q: "'We didn't buy the book' =",
              options: ["我们没买书。", "我们没买了书。", "我们不买了书。", "我们买了没书。"],
              correct: 0,
              fb: "没买, no 了.",
            },
          ],
        },
        {
          type: "fillBlank",
          heading: "Make it negative",
          intro: "Rewrite as 'didn't' — remember to drop 了.",
          items: [
            {
              template: "我昨天 ___ 饺子。",
              answer: "没吃",
              en: "I didn't eat dumplings yesterday.",
              options: ["没吃", "没吃了", "不吃了", "吃了"],
            },
            {
              template: "他 ___ 北京。",
              answer: "没到",
              en: "He didn't arrive in Beijing.",
              options: ["没到", "没到了", "不到了", "到了"],
            },
            {
              template: "我们 ___ 那本书。",
              answer: "没买",
              en: "We didn't buy that book.",
              options: ["没买", "没买了", "不买了", "买了"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Yesterday I didn't eat and I didn't drink tea.",
          reference: "昨天我没吃，也没喝茶。",
          hint: "没 negates both; no 了 anywhere. 也 = also.",
        },
      ],
    },
    {
      slug: "le-aspect-change-guo",
      title: "Sentence-final 了 & 过 (experience)",
      estMinutes: 10,
      pages: [
        {
          type: "intro",
          heading: "Two more uses: a new situation, and 'ever before'",
          body: [
            "A 了 at the <strong>very end of a sentence</strong> signals a <strong>change of state</strong> — something is now different. <em>我饿了 (I'm hungry now / I've gotten hungry)</em>, <em>下雨了 (it's started raining)</em>.",
            "This is different from verb+了 completion. Sentence-final 了 says \"a new situation has come about,\" often translated as \"now.\"",
            "Then there is <strong>过 (guò)</strong>, which marks <strong>experience</strong> — that you have done something at least once. <em>我去过北京 (I have been to Beijing [at some point])</em>. It answers \"have you ever…?\"",
            "Contrast: <strong>了</strong> = it happened / it's done. <strong>过</strong> = I've had the experience of doing it. Negate 过 with 没…过: <em>我没去过北京 (I've never been to Beijing)</em> — and 过 stays.",
          ],
          keyPoint:
            "Sentence-final 了 = change of state ('now'). 过 = experience ('have ever done'). Negate 过 with 没…过 (过 stays).",
        },
        {
          type: "vocab",
          heading: "Words for changes & experiences",
          items: [
            { l1: "饿", en: "hungry", note: "è — 我饿了 = I'm hungry now" },
            { l1: "下雨", en: "to rain", note: "xià yǔ — 下雨了 = it's raining now" },
            { l1: "长城", en: "the Great Wall", note: "Chángchéng" },
            { l1: "过", en: "(experience marker)", note: "guò — 去过 = have been to" },
            { l1: "以前", en: "before / in the past", note: "yǐqián" },
            { l1: "次", en: "time(s) / occasion (measure word)", note: "cì — 一次 = once" },
          ],
        },
        {
          type: "dialogue",
          heading: "Have you ever been to the Great Wall?",
          setup: "Chatting on a Beijing subway.",
          lines: [
            { speaker: "Friend", l1: "你去过长城吗？", en: "Have you ever been to the Great Wall?" },
            { speaker: "You", l1: "我去过两次。你呢？", en: "I've been twice. And you?" },
            { speaker: "Friend", l1: "我没去过。", en: "I've never been." },
            { speaker: "You", l1: "下雨了，我们坐地铁吧。", en: "It's started raining — let's take the subway." },
          ],
        },
        {
          type: "tip",
          heading: "了 vs 过 in one line",
          body: "<strong>我吃了</strong> = I ate (just now, it's done). <strong>我吃过</strong> = I've eaten it before (I have the experience). And a sentence-final <strong>了</strong> as in <strong>我吃饱了</strong> means \"I'm full now\" — a change of state. Same little word 了, three flavors: completion, and change-of-state; 过 is the separate experience marker.",
          example: { l1: "我去过北京，现在我在上海了。", en: "I've been to Beijing; now I'm in Shanghai (a change)." },
        },
        {
          type: "fillBlank",
          heading: "了 or 过?",
          items: [
            {
              template: "我 ___ 长城，很漂亮。",
              answer: "去过",
              en: "I've been to the Great Wall — it's beautiful.",
              options: ["去过", "去了", "没去", "去"],
            },
            {
              template: "下雨 ___ ，带伞吧。",
              answer: "了",
              en: "It's started raining — bring an umbrella.",
              options: ["了", "过", "没", "在"],
            },
            {
              template: "你以前 ___ 饺子吗？",
              answer: "吃过",
              en: "Have you ever eaten dumplings before?",
              options: ["吃过", "吃了", "没吃", "吃"],
            },
            {
              template: "我没去 ___ 上海。",
              answer: "过",
              en: "I've never been to Shanghai.",
              options: ["过", "了", "在", "不"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "I've been to the Great Wall twice, but I've never eaten Beijing duck.",
          reference: "我去过两次长城，但是我没吃过北京烤鸭。",
          hint: "Experience uses 过: 去过, 没吃过. 但是 = but, 北京烤鸭 = Beijing duck.",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "A 了 at the end of a sentence usually marks…",
              options: ["a completed verb", "a change of state ('now')", "the future", "a question"],
              correct: 1,
            },
            {
              q: "Which marks experience ('have ever done')?",
              options: ["了", "在", "过", "不"],
              correct: 2,
            },
            {
              q: "'I've never been to Beijing' =",
              options: ["我没去北京。", "我没去过北京。", "我不去过北京。", "我去了北京。"],
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
        q: "Does Mandarin have a past tense?",
        options: ["Yes, on the verb ending", "No — it uses aspect particles like 了", "Only with pronouns", "Only for 'I'"],
        correct: 1,
      },
      {
        q: "Verb + 了 marks…",
        options: ["the future", "a completed action", "a question", "negation"],
        correct: 1,
      },
      {
        q: "'I ate' =",
        options: ["我吃。", "我吃了。", "我了吃。", "我没吃。"],
        correct: 1,
      },
      {
        q: "How do you negate a completed action?",
        options: ["不 + verb, keep 了", "没 + verb, drop 了", "没 + verb + 了", "不 + verb + 了"],
        correct: 1,
      },
      {
        q: "'I didn't eat' =",
        options: ["我没吃了。", "我不吃了。", "我没吃。", "我没有吃了。"],
        correct: 2,
      },
      {
        q: "Which sentence is WRONG?",
        options: ["他去了。", "他没去。", "他没去了。", "他去过。"],
        correct: 2,
      },
      {
        q: "A sentence-final 了 (e.g. 下雨了) signals…",
        options: ["a completed verb", "a change of state / new situation", "experience", "the past"],
        correct: 1,
      },
      {
        q: "Which particle marks experience ('have ever done')?",
        options: ["了", "过", "在", "吗"],
        correct: 1,
      },
      {
        q: "'I have been to the Great Wall' =",
        options: ["我去长城。", "我去了长城过。", "我去过长城。", "我没去长城。"],
        correct: 2,
      },
      {
        q: "'I've never been to Shanghai' =",
        options: ["我没去上海。", "我没去过上海。", "我不去过上海。", "我去了上海。"],
        correct: 1,
      },
    ],
  },
};
