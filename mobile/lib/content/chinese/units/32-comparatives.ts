import type { Unit } from "../../types";

export const UNIT_COMPARATIVES: Unit = {
  slug: "comparatives",
  stage: 7,
  order: 32,
  icon: "✍️",
  title: "Comparing (比)",
  tagline: "A 比 B…, 最, and 跟…一样.",
  badge: "core",
  lessons: [
    {
      slug: "comparatives-bi",
      title: "A 比 B 大: the 比 comparison",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "比 puts two things side by side",
          body: [
            "To say <strong>A is bigger/more expensive than B</strong>, Chinese uses the pattern <strong>A 比 B + adjective</strong>. The word 比 (bǐ) sits between the two things being compared, and the adjective comes last — no word for 'than', no 'more', no '-er' ending.",
            "So 'Beijing is bigger than Shanghai' is literally <em>Beijing 比 Shanghai big</em>: 北京比上海大。 Notice there is no 很 (very) before the adjective — in a 比 sentence the comparison itself supplies the meaning, and adding 很 would actually be wrong.",
            "To say <strong>how much</strong> bigger, put the amount after the adjective: 北京比上海大一点儿 (a bit bigger), 北京比上海大得多 (much bigger).",
          ],
          tip: {
            label: "Beijing scale",
            body: "A useful frame in Beijing: <em>三环比二环大</em> (the 3rd Ring Road is bigger than the 2nd) — the city's ring roads literally nest, so comparisons feel natural. Drop 很 entirely once 比 appears.",
          },
          keyPoint: "A 比 B + adjective. Never 很 in a 比 sentence. Degree goes after: …大一点儿 / …大得多.",
        },
        {
          type: "vocab",
          heading: "Words for comparing",
          intro: "The building blocks for the 比 pattern.",
          items: [
            { l1: "比", en: "compared to / than", note: "bǐ — the comparison word." },
            { l1: "大", en: "big", note: "dà" },
            { l1: "小", en: "small", note: "xiǎo" },
            { l1: "贵", en: "expensive", note: "guì" },
            { l1: "便宜", en: "cheap", note: "piányi" },
            { l1: "高", en: "tall / high", note: "gāo" },
            { l1: "一点儿", en: "a little / a bit", note: "yìdiǎnr — goes after the adjective." },
            { l1: "得多", en: "much (more)", note: "de duō — '…大得多' = much bigger." },
          ],
        },
        {
          type: "conjugation",
          heading: "The 比 pattern, slot by slot",
          verb: "比",
          meaning: "compared to / than",
          intro: "Each row is a pattern label with a Chinese example and pinyin. Read them as templates you can swap words into.",
          tenses: [
            {
              name: "Basic comparison",
              forms: [
                { person: "A 比 B + adjective", form: "北京比上海大 / Běijīng bǐ Shànghǎi dà", en: "Beijing is bigger than Shanghai." },
                { person: "A 比 B + adjective", form: "这个比那个贵 / zhège bǐ nàge guì", en: "This one is more expensive than that one." },
              ],
            },
            {
              name: "Adding a degree",
              forms: [
                { person: "…+ 一点儿 (a bit)", form: "他比我高一点儿 / tā bǐ wǒ gāo yìdiǎnr", en: "He is a bit taller than me." },
                { person: "…+ 得多 (much)", form: "地铁比出租车便宜得多 / dìtiě bǐ chūzūchē piányi de duō", en: "The subway is much cheaper than a taxi." },
              ],
            },
          ],
        },
        {
          type: "fillBlank",
          heading: "Drop in the right word",
          intro: "Complete each 比 sentence.",
          items: [
            {
              template: "故宫 ___ 天坛大。",
              answer: "比",
              en: "The Forbidden City is bigger than the Temple of Heaven.",
              options: ["很", "比", "最", "跟"],
            },
            {
              template: "出租车比地铁 ___。",
              answer: "贵",
              en: "A taxi is more expensive than the subway.",
              options: ["贵", "便宜", "很贵", "大"],
            },
            {
              template: "这件大衣比那件贵 ___。",
              answer: "得多",
              en: "This coat is much more expensive than that one.",
              options: ["很", "得多", "比", "最"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Beijing is bigger than Shanghai.",
          reference: "北京比上海大。",
          hint: "A 比 B + adjective. No 很 before 大.",
        },
      ],
    },
    {
      slug: "comparatives-zui-geng",
      title: "最 (the most) and 更 (even more)",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "最 = the most, 更 = even more",
          body: [
            "<strong>最</strong> (zuì) means 'the most' — it goes directly before the adjective: 最大 (biggest), 最贵 (most expensive), 最好 (best). To pick out the most X within a group, use 里 or 中: <em>这些里最便宜的</em> (the cheapest of these).",
            "<strong>更</strong> (gèng) means 'even more' — it also sits before the adjective, and usually implies a comparison to something already mentioned: 这个好，那个更好 (this one is good, that one is even better).",
            "Both 最 and 更 can take 很's slot — but unlike a plain adjective, you don't add 很 alongside them.",
          ],
          keyPoint: "最 + adjective = the most. 更 + adjective = even more. Both replace 很, never combine with it.",
        },
        {
          type: "vocab",
          heading: "最 and 更 vocabulary",
          items: [
            { l1: "最", en: "the most", note: "zuì — before the adjective: 最大 = biggest." },
            { l1: "更", en: "even more", note: "gèng — 更好 = even better." },
            { l1: "好", en: "good", note: "hǎo" },
            { l1: "有名", en: "famous", note: "yǒumíng — 最有名 = most famous." },
            { l1: "好吃", en: "delicious (to eat)", note: "hǎochī — 更好吃 = even tastier." },
            { l1: "热闹", en: "lively / bustling", note: "rènao" },
            { l1: "烤鸭", en: "roast duck", note: "kǎoyā — Beijing's signature dish." },
            { l1: "胡同", en: "hutong (old alley)", note: "hútòng — Beijing's traditional alleyways." },
          ],
        },
        {
          type: "dialogue",
          heading: "Choosing a roast duck restaurant",
          setup: "Two friends decide where to eat in Beijing.",
          lines: [
            { speaker: "李", l1: "全聚德的烤鸭很有名。", en: "Quanjude's roast duck is very famous." },
            { speaker: "王", l1: "对，但是大董更有名，也更好吃。", en: "Right, but Dadong is even more famous, and even tastier." },
            { speaker: "李", l1: "那家是这里最贵的吗？", en: "Is that place the most expensive one around here?" },
            { speaker: "王", l1: "差不多。不过味道最好。", en: "About so. But the flavor is the best." },
            { speaker: "李", l1: "好，我们去最好吃的那家。", en: "Okay, let's go to the tastiest one." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "最 or 更?",
          questions: [
            {
              q: "'This hutong is the liveliest' — which is correct?",
              qL1: "这条胡同___热闹。",
              options: ["很", "比", "最", "得多"],
              correct: 2,
              fb: "最热闹 = the most lively / the liveliest.",
            },
            {
              q: "'That one is even better' — choose the word.",
              qL1: "那个___好。",
              options: ["最", "更", "比", "一点儿"],
              correct: 1,
              fb: "更好 = even better, implying a comparison to something already mentioned.",
            },
            {
              q: "Which sentence is WRONG?",
              options: ["这个最贵。", "这个更贵。", "这个很最贵。", "这个比那个贵。"],
              correct: 2,
              fb: "You never combine 很 with 最 — 最 already carries the degree.",
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Beijing roast duck is the most famous.",
          reference: "北京烤鸭最有名。",
          hint: "最 + adjective. No 很 with 最.",
        },
      ],
    },
    {
      slug: "comparatives-yiyang-meiyou",
      title: "跟…一样 (same as) and 没有…那么 (not as…as)",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Sameness and 'not as…as'",
          body: [
            "To say <strong>A is the same as B</strong>, use <strong>A 跟 B 一样</strong> (gēn … yíyàng). Add an adjective to compare a specific quality: <em>A 跟 B 一样大</em> = A is as big as B. The negative is <strong>A 跟 B 不一样</strong> (not the same).",
            "To say <strong>A is not as X as B</strong>, use <strong>A 没有 B (那么/这么) + adjective</strong>: <em>上海没有北京那么冷</em> = Shanghai is not as cold as Beijing. The 那么 (that) is optional but very common.",
            "These two patterns are the natural partners of 比: 比 says 'more', 没有…那么 says 'less', and 跟…一样 says 'equal'.",
          ],
          tip: {
            label: "比 vs 没有",
            body: "<em>北京比上海冷</em> (Beijing is colder than Shanghai) and <em>上海没有北京冷</em> (Shanghai isn't as cold as Beijing) describe the same fact from opposite ends. Both are everyday Beijing weather talk.",
          },
          keyPoint: "A 跟 B 一样 (+adj) = the same / as…as. A 没有 B (那么) +adj = not as…as.",
        },
        {
          type: "vocab",
          heading: "Sameness words",
          items: [
            { l1: "跟", en: "with / and", note: "gēn — pairs with 一样." },
            { l1: "一样", en: "the same", note: "yíyàng — 一样大 = equally big." },
            { l1: "不一样", en: "different / not the same", note: "bù yíyàng" },
            { l1: "没有", en: "not have / not as", note: "méiyǒu — in comparisons: 没有…那么 = not as…as." },
            { l1: "那么", en: "that / so", note: "nàme — often paired in 没有…那么." },
            { l1: "冷", en: "cold", note: "lěng" },
            { l1: "远", en: "far", note: "yuǎn" },
            { l1: "天气", en: "weather", note: "tiānqì" },
          ],
        },
        {
          type: "conjugation",
          heading: "Equal and 'not as…as', slot by slot",
          verb: "一样 / 没有",
          meaning: "the same / not as…as",
          intro: "Pattern labels with Chinese examples and pinyin — swap in your own nouns and adjectives.",
          tenses: [
            {
              name: "Sameness (跟…一样)",
              forms: [
                { person: "A 跟 B 一样", form: "我的手机跟你的一样 / wǒ de shǒujī gēn nǐ de yíyàng", en: "My phone is the same as yours." },
                { person: "A 跟 B 一样 + adjective", form: "这个跟那个一样贵 / zhège gēn nàge yíyàng guì", en: "This is as expensive as that." },
                { person: "A 跟 B 不一样", form: "南方跟北方不一样 / nánfāng gēn běifāng bù yíyàng", en: "The south is different from the north." },
              ],
            },
            {
              name: "Not as…as (没有…那么)",
              forms: [
                { person: "A 没有 B + adjective", form: "上海没有北京冷 / Shànghǎi méiyǒu Běijīng lěng", en: "Shanghai isn't as cold as Beijing." },
                { person: "A 没有 B 那么 + adjective", form: "地铁没有出租车那么贵 / dìtiě méiyǒu chūzūchē nàme guì", en: "The subway isn't as expensive as a taxi." },
              ],
            },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the sentence",
          intro: "Tap the words into the correct order.",
          items: [
            { tokens: ["这个", "跟", "那个", "一样", "大"], en: "This one is as big as that one." },
            { tokens: ["上海", "没有", "北京", "冷"], en: "Shanghai isn't as cold as Beijing." },
            { tokens: ["我的", "手机", "跟", "你的", "不一样"], en: "My phone is different from yours." },
            { tokens: ["地铁", "没有", "出租车", "那么", "贵"], en: "The subway isn't as expensive as a taxi." },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Shanghai is not as cold as Beijing.",
          reference: "上海没有北京冷。",
          hint: "A 没有 B + adjective. 那么 is optional.",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "How do you say 'A is the same as B'?",
              options: ["A 比 B 一样", "A 跟 B 一样", "A 最 B 一样", "A 没有 B 一样"],
              correct: 1,
            },
            {
              q: "'Shanghai isn't as cold as Beijing' is…",
              options: ["上海比北京冷。", "上海没有北京冷。", "上海跟北京一样冷。", "上海最冷。"],
              correct: 1,
            },
            {
              q: "Which means 'My phone is different from yours'?",
              options: ["我的手机跟你的一样。", "我的手机比你的大。", "我的手机跟你的不一样。", "我的手机最好。"],
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
        q: "Translate: 'Beijing is bigger than Shanghai.'",
        options: ["北京很大上海。", "北京比上海大。", "北京最大上海。", "北京跟上海一样大。"],
        correct: 1,
      },
      {
        q: "In a 比 sentence, which word must you NOT use before the adjective?",
        options: ["比", "得多", "很", "一点儿"],
        correct: 2,
      },
      {
        q: "'He is a bit taller than me' is…",
        options: ["他比我高一点儿。", "他比我高得多。", "他跟我一样高。", "他没有我高。"],
        correct: 0,
      },
      {
        q: "What does 最 mean?",
        options: ["even more", "the most", "than", "the same"],
        correct: 1,
      },
      {
        q: "Translate: 'Beijing roast duck is the most famous.'",
        options: ["北京烤鸭很有名。", "北京烤鸭比有名。", "北京烤鸭最有名。", "北京烤鸭更有名。"],
        correct: 2,
      },
      {
        q: "Which sentence is WRONG?",
        options: ["这个最贵。", "这个很最贵。", "这个更贵。", "这个比那个贵。"],
        correct: 1,
      },
      {
        q: "更好 means…",
        options: ["the best", "even better", "as good as", "not as good"],
        correct: 1,
      },
      {
        q: "How do you say 'as expensive as'?",
        options: ["比…贵", "最贵", "跟…一样贵", "没有…贵"],
        correct: 2,
      },
      {
        q: "Translate: 'Shanghai is not as cold as Beijing.'",
        options: ["上海比北京冷。", "上海跟北京一样冷。", "上海没有北京冷。", "上海最冷。"],
        correct: 2,
      },
      {
        q: "Which pattern expresses that two things are equal?",
        options: ["A 比 B + adjective", "A 跟 B 一样", "A 没有 B 那么 + adjective", "最 + adjective"],
        correct: 1,
      },
    ],
  },
};
