import type { Unit } from "../../types";

export const UNIT_OPINIONS: Unit = {
  slug: "opinions",
  stage: 8,
  order: 35,
  icon: "🗣️",
  title: "Opinions & discussion",
  tagline: "我觉得, 同意, expressing a point of view.",
  badge: "advanced",
  lessons: [
    {
      slug: "opinions-giving",
      title: "Giving an opinion",
      summary: "我觉得, 我认为, 对我来说 — how to lead with what you think.",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Saying 'I think…' the natural way",
          body: [
            "By now you can describe Beijing, order food, and tell stories. The last skill is the most grown-up one: sharing what you <strong>think</strong> and why.",
            "The everyday opener is <strong>我觉得 (wǒ juéde)</strong> = 'I feel / I think'. It's soft and conversational — use it for almost anything: 我觉得北京很有意思 ('I think Beijing is really interesting').",
            "<strong>我认为 (wǒ rènwéi)</strong> = 'I believe / I hold the view that…' is a notch more formal and considered. You'd use it in a discussion, an essay, or when stating a reasoned position.",
            "To frame something from your angle, use <strong>对我来说 (duì wǒ lái shuō)</strong> = 'as for me / for me'. It puts your perspective up front: 对我来说，胡同最美 ('for me, the hutongs are the most beautiful').",
          ],
          keyPoint:
            "我觉得 = I think (everyday, soft) · 我认为 = I believe (more formal, reasoned) · 对我来说 = as for me / from my point of view.",
        },
        {
          type: "vocab",
          heading: "Opinion openers",
          items: [
            { l1: "我觉得", en: "I think / I feel", note: "wǒ juéde — the everyday opener" },
            { l1: "我认为", en: "I believe / I hold that", note: "wǒ rènwéi — more formal, considered" },
            { l1: "对我来说", en: "as for me / for me", note: "duì wǒ lái shuō" },
            { l1: "在我看来", en: "in my view", note: "zài wǒ kàn lái — slightly written" },
            { l1: "我的看法是", en: "my view is", note: "wǒ de kànfǎ shì" },
            { l1: "看法", en: "viewpoint / opinion", note: "kànfǎ" },
            { l1: "意见", en: "opinion / suggestion", note: "yìjiàn" },
            { l1: "观点", en: "standpoint", note: "guāndiǎn" },
            { l1: "其实", en: "actually / in fact", note: "qíshí" },
            { l1: "说实话", en: "to be honest", note: "shuō shíhuà" },
          ],
        },
        {
          type: "dialogue",
          heading: "Talking about Beijing",
          setup: "Lin and a friend compare big cities over tea.",
          lines: [
            { speaker: "林", l1: "你觉得北京怎么样？", en: "What do you think of Beijing?" },
            { speaker: "You", l1: "说实话，我觉得北京很有意思，但是有点儿大。", en: "To be honest, I think Beijing is really interesting, but a bit big." },
            { speaker: "林", l1: "对我来说，最好的是这里的历史。", en: "For me, the best thing is the history here." },
            { speaker: "You", l1: "我也这么认为。我认为故宫是世界上最美的地方之一。", en: "I think so too. I believe the Forbidden City is one of the most beautiful places in the world." },
            { speaker: "林", l1: "其实，我更喜欢胡同。", en: "Actually, I prefer the hutongs." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Pick the opener",
          intro: "Choose the phrase that fits the English.",
          items: [
            {
              template: "___ 北京的地铁很方便。",
              answer: "我觉得",
              en: "I think Beijing's subway is very convenient.",
              options: ["我觉得", "我是", "我的", "觉得吗"],
            },
            {
              template: "___ ，冬天太冷了。",
              answer: "对我来说",
              en: "For me, winter is too cold.",
              options: ["对我来说", "我来说对", "来说我对", "我对来说"],
            },
            {
              template: "我 ___ 学中文很重要。",
              answer: "认为",
              en: "I believe learning Chinese is very important.",
              options: ["认为", "认识", "以为", "觉的"],
            },
            {
              template: "___ ，我没去过长城。",
              answer: "说实话",
              en: "To be honest, I've never been to the Great Wall.",
              options: ["说实话", "实话说真", "话说实", "说真话实"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "I think Beijing food is delicious. For me, roast duck is the best.",
          reference: "我觉得北京菜很好吃。对我来说，烤鸭最好。",
          hint: "Lead with 我觉得, then start the second sentence with 对我来说.",
        },
      ],
    },
    {
      slug: "opinions-agree-disagree",
      title: "Agreeing & disagreeing",
      summary: "我同意, 我不同意, 不一定, 我觉得也是 — react to what others say.",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Agreeing — and disagreeing politely",
          body: [
            "<strong>Agreeing:</strong> 我同意 (wǒ tóngyì) = 'I agree'; 我觉得也是 (wǒ juéde yě shì) = 'I think so too'; 没错 (méi cuò) = 'that's right / correct'; 你说得对 (nǐ shuō de duì) = 'you're right (what you said is correct)'.",
            "<strong>Disagreeing softly:</strong> 我不同意 (wǒ bù tóngyì) = 'I don't agree'. To soften it, lead with agreement-ish hedges: 不一定 (bù yídìng) = 'not necessarily', or 我不太同意 ('I don't quite agree').",
            "A very natural move is to half-agree, then pivot: <em>你说得对，但是…</em> ('you're right, but…'). Chinese conversation values keeping things smooth, so the pivot 但是 / 不过 (búguò, 'however') does a lot of polite work.",
          ],
          keyPoint:
            "Agree: 我同意 / 我觉得也是 / 没错 / 你说得对. Disagree softly: 我不同意 / 不一定 / 你说得对，但是…",
        },
        {
          type: "vocab",
          heading: "Agree / disagree phrases",
          items: [
            { l1: "我同意", en: "I agree", note: "wǒ tóngyì" },
            { l1: "我觉得也是", en: "I think so too", note: "wǒ juéde yě shì" },
            { l1: "没错", en: "that's right / exactly", note: "méi cuò" },
            { l1: "你说得对", en: "you're right (what you said is correct)", note: "nǐ shuō de duì" },
            { l1: "确实", en: "indeed / certainly", note: "quèshí" },
            { l1: "我不同意", en: "I don't agree", note: "wǒ bù tóngyì" },
            { l1: "我不太同意", en: "I don't quite agree", note: "wǒ bú tài tóngyì — softer" },
            { l1: "不一定", en: "not necessarily", note: "bù yídìng" },
            { l1: "不过", en: "however / but", note: "búguò — softer than 但是" },
            { l1: "这倒是", en: "that's true (conceding)", note: "zhè dào shì" },
          ],
        },
        {
          type: "tip",
          heading: "Half-agree, then pivot",
          body: "Flat-out '你错了' ('you're wrong') sounds blunt. The polite pattern is to concede first, then turn: <strong>你说得对，但是我觉得…</strong> ('you're right, but I think…'). Even 这倒是 ('that's true') before a 不过 keeps the conversation warm while you still make your point.",
          example: { l1: "你说得对，不过我觉得地铁更快。", en: "You're right, but I think the subway is faster." },
        },
        {
          type: "multipleChoice",
          heading: "Agree or disagree?",
          intro: "Choose the response that matches the English.",
          questions: [
            {
              q: "How do you say 'I agree'?",
              options: ["我同意", "我同事", "我同学", "我一样"],
              correct: 0,
              fb: "我同意 (wǒ tóngyì) = I agree.",
            },
            {
              q: "'Not necessarily' =",
              options: ["不一定", "不可以", "不知道", "不一样"],
              correct: 0,
              fb: "不一定 (bù yídìng) softens a disagreement nicely.",
            },
            {
              q: "Which softens disagreement the most?",
              options: ["你错了", "我不太同意", "不对", "我反对"],
              correct: 1,
              fb: "我不太同意 ('I don't quite agree') is the gentlest here.",
            },
            {
              q: "'I think so too' =",
              options: ["我觉得也是", "我觉得不是", "我也觉得吗", "我是觉得"],
              correct: 0,
              fb: "我觉得也是 (wǒ juéde yě shì) = I think so too.",
            },
          ],
        },
        {
          type: "dialogue",
          heading: "A friendly debate",
          setup: "Two friends argue about getting around the city.",
          lines: [
            { speaker: "王", l1: "我觉得在北京开车太麻烦了。", en: "I think driving in Beijing is too much trouble." },
            { speaker: "You", l1: "我同意，开车又堵又慢。", en: "I agree, driving is jammed and slow." },
            { speaker: "王", l1: "所以坐地铁最好。", en: "So the subway is best." },
            { speaker: "You", l1: "这倒是，不过地铁有时候人太多了。", en: "That's true, but the subway is sometimes too crowded." },
            { speaker: "王", l1: "也对，不一定每次都方便。", en: "Right too — it's not necessarily convenient every time." },
            { speaker: "You", l1: "没错，骑共享单车也是个办法。", en: "Exactly, riding a shared bike is also an option." },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the reaction",
          intro: "Put the tokens in natural order.",
          items: [
            { tokens: ["你", "说", "得", "对", "，", "但是", "我", "觉得", "太", "贵", "了"], en: "You're right, but I think it's too expensive." },
            { tokens: ["我", "不太", "同意", "你", "的", "看法"], en: "I don't quite agree with your view." },
            { tokens: ["这倒是", "，", "不过", "不一定", "每次", "都", "这样"], en: "That's true, but it's not necessarily like this every time." },
          ],
        },
      ],
    },
    {
      slug: "opinions-structuring",
      title: "Structuring a view & hedging",
      summary: "一方面…另一方面, 总的来说, plus 可能 / 也许 for softening.",
      estMinutes: 10,
      pages: [
        {
          type: "intro",
          heading: "Laying out two sides, then concluding",
          body: [
            "A grown-up opinion weighs both sides. The frame is <strong>一方面…另一方面… (yì fāngmiàn… lìng yì fāngmiàn…)</strong> = 'on one hand… on the other hand…'.",
            "Example: 一方面北京很大，另一方面交通也很方便 ('on one hand Beijing is big, on the other hand transport is convenient').",
            "To wrap up, use <strong>总的来说 (zǒng de lái shuō)</strong> = 'all in all / generally speaking', or 总之 (zǒngzhī, 'in short').",
            "And to <strong>hedge</strong> — to avoid sounding too certain — sprinkle in 可能 (kěnéng, 'maybe / probably') or 也许 (yěxǔ, 'perhaps'). 我觉得可能太贵了 ('I think it's maybe too expensive') sounds far more natural than a flat claim.",
          ],
          keyPoint:
            "Two sides: 一方面…另一方面… · Wrap up: 总的来说 / 总之 · Hedge: 可能 (maybe) / 也许 (perhaps).",
        },
        {
          type: "vocab",
          heading: "Structuring & hedging",
          items: [
            { l1: "一方面…另一方面…", en: "on one hand… on the other hand…", note: "yì fāngmiàn… lìng yì fāngmiàn…" },
            { l1: "总的来说", en: "all in all / generally speaking", note: "zǒng de lái shuō" },
            { l1: "总之", en: "in short / in a word", note: "zǒngzhī" },
            { l1: "首先", en: "first of all", note: "shǒuxiān" },
            { l1: "其次", en: "secondly / next", note: "qícì" },
            { l1: "比如说", en: "for example", note: "bǐrú shuō" },
            { l1: "可能", en: "maybe / probably", note: "kěnéng" },
            { l1: "也许", en: "perhaps", note: "yěxǔ" },
            { l1: "好像", en: "it seems / seemingly", note: "hǎoxiàng" },
            { l1: "不过", en: "however", note: "búguò" },
          ],
        },
        {
          type: "dialogue",
          heading: "A balanced view of living in Beijing",
          setup: "Lin asks whether the friend would settle in the city.",
          lines: [
            { speaker: "林", l1: "你想一直住在北京吗？", en: "Do you want to live in Beijing forever?" },
            { speaker: "You", l1: "这个问题不容易。一方面，这里机会很多；另一方面，生活也很贵。", en: "That's not an easy question. On one hand, there are lots of opportunities here; on the other hand, life is also expensive." },
            { speaker: "林", l1: "确实。那你怎么想？", en: "Indeed. So what do you think?" },
            { speaker: "You", l1: "首先，我喜欢这里的文化；其次，朋友也都在这儿。", en: "First, I like the culture here; secondly, my friends are all here too." },
            { speaker: "林", l1: "所以你可能会留下来？", en: "So you'll probably stay?" },
            { speaker: "You", l1: "也许吧。总的来说，我觉得北京很适合我。", en: "Perhaps. All in all, I think Beijing suits me well." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Frame the argument",
          intro: "Fill in the connector that fits.",
          items: [
            {
              template: "一方面工作很忙，___ 工资也不错。",
              answer: "另一方面",
              en: "On one hand work is busy, on the other hand the pay is good.",
              options: ["另一方面", "一边面", "别方面", "外一方面"],
            },
            {
              template: "___ ，我觉得这个城市很适合年轻人。",
              answer: "总的来说",
              en: "All in all, I think this city suits young people.",
              options: ["总的来说", "来说总的", "说总的来", "的总来说"],
            },
            {
              template: "周末 ___ 会下雪，带上外套吧。",
              answer: "可能",
              en: "It might snow on the weekend, bring a coat.",
              options: ["可能", "可是", "可以", "不能"],
            },
            {
              template: "我们 ___ 应该早点儿出发。",
              answer: "也许",
              en: "We should perhaps leave a bit earlier.",
              options: ["也许", "也是", "也要", "一些"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "On one hand the food is cheap, on the other hand the service is slow. All in all, I think it's pretty good.",
          reference: "一方面菜很便宜，另一方面服务很慢。总的来说，我觉得还不错。",
          hint: "Stack 一方面…另一方面… then close with 总的来说 + 我觉得.",
        },
        {
          type: "tip",
          heading: "You finished the whole course",
          body: "This is unit 35 of 35 — the finale. You've gone from <strong>pinyin and tones</strong> all the way to <strong>weighing two sides of an argument and concluding politely</strong>. Along the way: characters, measure words, 是 and 很, the 了 particles, 把 sentences, results and directions, comparisons, asking the way around Beijing, ordering at a 餐厅, telling stories in the past, and now real opinions. You can hold a genuine A2–B1 conversation in Mandarin. <em>太棒了！</em>",
        },
      ],
    },
  ],
  checkpoint: {
    passingPct: 80,
    questions: [
      {
        q: "'I think…' (everyday opener) =",
        options: ["我认为", "我觉得", "我以为", "我知道"],
        correct: 1,
      },
      {
        q: "'As for me / for me' =",
        options: ["对我来说", "我对来说", "来说对我", "我来对说"],
        correct: 0,
      },
      {
        q: "'I agree' =",
        options: ["我同学", "我一样", "我同意", "我同事"],
        correct: 2,
      },
      {
        q: "'I don't agree' =",
        options: ["我不同意", "我不知道", "我不一定", "我不可能"],
        correct: 0,
      },
      {
        q: "'Not necessarily' (softens disagreement) =",
        options: ["不一样", "不一定", "不可以", "不知道"],
        correct: 1,
      },
      {
        q: "'I think so too' =",
        options: ["我觉得也是", "我觉得不是", "我也是觉得", "我是也觉得"],
        correct: 0,
      },
      {
        q: "'On one hand… on the other hand…' =",
        options: [
          "一边…另一边…",
          "一方面…另一方面…",
          "一方…另一方…",
          "一面…别一面…",
        ],
        correct: 1,
      },
      {
        q: "'All in all / generally speaking' =",
        options: ["总的来说", "来说总的", "说来总的", "的来总说"],
        correct: 0,
      },
      {
        q: "Which word best hedges ('maybe / perhaps')?",
        options: ["一定", "可能 / 也许", "当然", "必须"],
        correct: 1,
      },
      {
        q: "Translate: 'On one hand it's expensive, on the other hand it's good. All in all, I think it's worth it.'",
        options: [
          "一方面很贵，另一方面很好。总的来说，我觉得值得。",
          "一边贵，一边好。总是，我以为值得。",
          "一方面贵，别方面好。来说总，我觉得值。",
          "一方贵，另方好。说总来，我想值得。",
        ],
        correct: 0,
      },
    ],
  },
};
