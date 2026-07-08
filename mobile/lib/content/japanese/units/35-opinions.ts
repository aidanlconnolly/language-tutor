import type { Unit } from "../../types";

export const UNIT_OPINIONS: Unit = {
  slug: "opinions",
  stage: 8,
  order: 35,
  icon: "🗣️",
  title: "Opinions & discussion",
  tagline: "…と 思います, agreeing & disagreeing, …かもしれません.",
  badge: "advanced",
  lessons: [
    {
      slug: "opinions-stating",
      title: "Giving an opinion",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Leading with 'I think…' — the grown-up way",
          body: [
            "You already know <strong>…と 思います</strong> (\"I think that…\"). To frame it as a personal view, open with <strong>わたしの いけんでは…</strong> (watashi no iken de wa, \"in my opinion…\") — the は is read <em>wa</em>.",
            "Other natural openers: <em>わたしは…と 思います</em> (\"I think…\"), <em>…と かんがえています</em> (\"I'm of the view that…,\" more formal), and <em>こじんてきには…</em> (\"personally…\").",
            "To ask someone's view: <strong>…について どう 思いますか</strong> = \"What do you think about…?\" Answer with your opinion + …と 思います.",
          ],
          keyPoint:
            "わたしの いけんでは… = in my opinion (は read wa). …について どう 思いますか = What do you think about…? Answer with …と 思います.",
        },
        {
          type: "vocab",
          heading: "Opinion openers",
          items: [
            { l1: "わたしの いけんでは", en: "in my opinion", note: "watashi no iken de wa — は read 'wa'" },
            { l1: "いけん", en: "opinion", note: "iken (いけん)" },
            { l1: "…と 思います", en: "I think that…", note: "…to omoimasu" },
            { l1: "…と かんがえています", en: "I'm of the view that… (formal)", note: "…to kangaete imasu" },
            { l1: "こじんてきには", en: "personally", note: "kojinteki ni wa — は read 'wa'" },
            { l1: "どう 思いますか", en: "what do you think?", note: "dō omoimasu ka" },
            { l1: "…について", en: "about / regarding…", note: "…ni tsuite" },
            { l1: "りゆう", en: "reason", note: "riyū (りゆう)" },
            { l1: "なぜなら…から", en: "the reason is… / because…", note: "naze nara … kara" },
          ],
        },
        {
          type: "dialogue",
          heading: "Discussing life in Tokyo",
          setup: "Aoi asks for your honest take.",
          lines: [
            { speaker: "Aoi", l1: "とうきょうの せいかつに ついて どう 思いますか。", en: "What do you think about life in Tokyo?" },
            { speaker: "You", l1: "わたしの いけんでは、とても べんりだと 思います。", en: "In my opinion, I think it's very convenient." },
            { speaker: "Aoi", l1: "なぜ そう 思いますか。", en: "Why do you think so?" },
            { speaker: "You", l1: "なぜなら、でんしゃが べんりだからです。", en: "Because the trains are convenient." },
            { speaker: "You", l1: "でも こじんてきには、ひとが ちょっと おおすぎると 思います。", en: "But personally, I think there are a few too many people." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Complete the opinion",
          intro: "Pick the right opener or particle.",
          items: [
            {
              template: "わたしの いけん ___ 、いいと 思います。",
              answer: "では",
              en: "In my opinion, I think it's good.",
              options: ["では", "から", "が", "の"],
            },
            {
              template: "この えいがに ___ どう 思いますか。",
              answer: "ついて",
              en: "What do you think about this movie?",
              options: ["ついて", "ながら", "とき", "から"],
            },
            {
              template: "とうきょうは べんりだ ___ 思います。",
              answer: "と",
              en: "I think Tokyo is convenient.",
              options: ["と", "を", "が", "に"],
            },
            {
              template: "___ には、ねだんが たかいと 思います。",
              answer: "こじんてき",
              en: "Personally, I think the price is high.",
              options: ["こじんてき", "いけん", "りゆう", "なぜなら"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "In my opinion, Tokyo is very convenient.",
          reference: "わたしの いけんでは、とうきょうは とても べんりだと 思います。",
          hint: "watashi no iken de wa … benri da to omoimasu — note だ before と.",
        },
      ],
    },
    {
      slug: "opinions-agree-disagree",
      title: "Agreeing & disagreeing politely",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Agreeing — and disagreeing without confrontation",
          body: [
            "Japanese agreement is quick and warm: <strong>そうですね</strong> (\"that's right / I agree\"), <strong>たしかに</strong> (\"indeed / certainly\"), <strong>わたしも そう 思います</strong> (\"I think so too\").",
            "Disagreement is almost always <strong>softened</strong>. The classic move is <em>そうですね…でも…</em> — agree partially, then pivot: \"You're right… but….\" Avoid a flat <em>ちがいます</em> (\"that's wrong\") with people you don't know well.",
            "Polite disagreement openers: <strong>たしかに…ですが</strong> (\"certainly…, but\"), <strong>そうかもしれませんが</strong> (\"that may be so, but\"), and the cushiony <strong>ちょっと…</strong> (trailing off — \"that's a little…\") which signals 'no' without saying it.",
          ],
          keyPoint:
            "Agree: そうですね / たしかに / わたしも そう 思います. Disagree softly: そうですね…でも… · たしかに…ですが… · ちょっと… (trail off).",
        },
        {
          type: "vocab",
          heading: "Agree / disagree phrases",
          items: [
            { l1: "そうですね", en: "that's right / I agree", note: "sō desu ne" },
            { l1: "たしかに", en: "indeed / certainly", note: "tashika ni" },
            { l1: "わたしも そう 思います", en: "I think so too", note: "watashi mo sō omoimasu" },
            { l1: "おっしゃる とおりです", en: "you're exactly right (formal)", note: "ossharu tōri desu" },
            { l1: "でも", en: "but (casual/neutral)", note: "demo — sentence-initial 'but'" },
            { l1: "…ですが", en: "…, but (polite)", note: "…desu ga" },
            { l1: "そうかもしれませんが", en: "that may be so, but…", note: "sō kamoshiremasen ga" },
            { l1: "ちょっと…", en: "that's a little… (soft no)", note: "chotto — trail off to decline/disagree" },
            { l1: "はんたい", en: "opposition / against", note: "hantai — はんたいです = I'm against it" },
            { l1: "さんせい", en: "agreement / in favor", note: "sansei — さんせいです = I'm in favor" },
          ],
        },
        {
          type: "tip",
          heading: "In Japanese, how you disagree matters more than that you do",
          body: "Bluntly saying <em>ちがいます</em> or <em>はんたいです</em> to someone senior or barely known can feel harsh. The cultural default is to <strong>acknowledge first, soften, then differ</strong>: <em>たしかに…ですが、…</em>. Even a trailing <em>「うーん、それは ちょっと…」</em> communicates 'no' clearly while saving face for everyone — much like Italian framing disagreement on the idea, not the person.",
          example: { l1: "たしかに べんりですが、たかいですね。", en: "It's certainly convenient, but it's pricey, isn't it." },
        },
        {
          type: "dialogue",
          heading: "Tokyo vs Kyoto",
          setup: "A friendly debate about which city is better to live in.",
          lines: [
            { speaker: "Aoi", l1: "すむなら、とうきょうより きょうとの ほうが いいと 思います。", en: "If living somewhere, I think Kyoto is better than Tokyo." },
            { speaker: "You", l1: "そうですね、きょうとは しずかですね。たしかに いいと 思います。", en: "That's true, Kyoto is quiet. I certainly think it's nice." },
            { speaker: "You", l1: "でも、しごとは とうきょうの ほうが おおいと 思います。", en: "But I think there are more jobs in Tokyo." },
            { speaker: "Aoi", l1: "そうかもしれませんが、せいかつは きょうとの ほうが おちつきます。", en: "That may be so, but life is calmer in Kyoto." },
            { speaker: "You", l1: "なるほど。おっしゃる とおりかもしれませんね。", en: "I see. You may be exactly right." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Agree or soften a disagreement?",
          questions: [
            {
              q: "Which clearly means 'I think so too'?",
              options: [
                "そうかもしれません。",
                "わたしも そう 思います。",
                "ちょっと…",
                "はんたいです。",
              ],
              correct: 1,
              fb: "わたしも そう 思います = I think so too — direct agreement.",
            },
            {
              q: "Your friend's plan won't work, but you want to be gentle. Best reply?",
              options: [
                "ちがいます。",
                "はんたいです。",
                "たしかに いいですが、ちょっと むずかしいかもしれません。",
                "それは だめです。",
              ],
              correct: 2,
              fb: "Acknowledge first (たしかに…ですが), then soften — the polite default.",
            },
            {
              q: "What does a trailing 「うーん、それは ちょっと…」 usually signal?",
              options: [
                "strong agreement",
                "a soft 'no' / disagreement",
                "a question",
                "a request to repeat",
              ],
              correct: 1,
              fb: "Trailing off with ちょっと is a face-saving way to say 'no.'",
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "It's certainly convenient, but I think it's a little expensive.",
          reference: "たしかに べんりですが、ちょっと たかいと 思います。",
          hint: "tashika ni … desu ga, chotto … — acknowledge, then soften.",
        },
      ],
    },
    {
      slug: "opinions-hedging-wrapup",
      title: "Hedging & wrapping up",
      estMinutes: 10,
      pages: [
        {
          type: "intro",
          heading: "Sounding natural means sounding unsure (on purpose)",
          body: [
            "Native speakers rarely state things flatly. They <strong>hedge</strong>. Two key tools:",
            "<strong>…かもしれません</strong> (…kamoshiremasen) = \"might / maybe….\" Attach to a <em>plain form</em>: <em>あめが ふるかもしれません</em> = \"it might rain\"; <em>たかいかもしれません</em> = \"it might be expensive.\"",
            "<strong>…でしょう</strong> (…deshō) = \"probably / I'd guess…,\" also attaching to plain form: <em>あした はれるでしょう</em> = \"it'll probably be sunny tomorrow.\" With rising tone, …でしょう？ seeks agreement (\"right?\"). Soften further with <em>たぶん</em> (\"probably\") up front.",
            "To <strong>wrap up</strong> a discussion: <em>つまり…</em> (\"in other words / so basically…\"), <em>けっきょく…</em> (\"in the end…\"), and <em>…ということですね</em> (\"so it means that…, right?\").",
          ],
          keyPoint:
            "…かもしれません = might (plain form + ). …でしょう = probably. Wrap up: つまり… / けっきょく… / …ということですね.",
        },
        {
          type: "conjugation",
          heading: "Hedging endings on the plain form",
          verb: "various",
          meaning: "…かもしれません / …でしょう",
          intro: "Both attach to the plain form. For nouns/な-adjectives, drop だ before かもしれません/でしょう.",
          tenses: [
            {
              name: "…かもしれません (might)",
              forms: [
                { person: "ふる", form: "ふるかもしれません", en: "it might rain" },
                { person: "たかい", form: "たかいかもしれません", en: "it might be expensive" },
                { person: "べんり(だ)", form: "べんりかもしれません", en: "it might be convenient" },
                { person: "こない", form: "こないかもしれません", en: "they might not come" },
              ],
            },
            {
              name: "…でしょう (probably)",
              forms: [
                { person: "はれる", form: "はれるでしょう", en: "it'll probably be sunny" },
                { person: "たかい", form: "たかいでしょう", en: "it's probably expensive" },
                { person: "あめ(だ)", form: "あめでしょう", en: "it'll probably rain" },
                { person: "おわった", form: "おわったでしょう", en: "it's probably finished" },
              ],
            },
          ],
        },
        {
          type: "vocab",
          heading: "Hedging & wrap-up words",
          items: [
            { l1: "…かもしれません", en: "might / maybe…", note: "…kamoshiremasen — plain form +" },
            { l1: "…でしょう", en: "probably / I'd guess…", note: "…deshō — plain form +" },
            { l1: "たぶん", en: "probably / maybe", note: "tabun — pairs with でしょう/かもしれません" },
            { l1: "つまり", en: "in other words / so basically", note: "tsumari" },
            { l1: "けっきょく", en: "in the end / after all", note: "kekkyoku" },
            { l1: "…ということですね", en: "so it means that…, right?", note: "…to iu koto desu ne" },
            { l1: "なるほど", en: "I see / makes sense", note: "naruhodo" },
            { l1: "はれる", en: "to be sunny / clear up", note: "hareru (はれる)" },
          ],
        },
        {
          type: "dialogue",
          heading: "Wrapping up the debate",
          setup: "Bringing the Tokyo-vs-Kyoto talk to a close.",
          lines: [
            { speaker: "Aoi", l1: "あした きょうとに いくなら、あめが ふるかもしれません。", en: "If we go to Kyoto tomorrow, it might rain." },
            { speaker: "You", l1: "そうですね。でも あさっては はれるでしょう。", en: "True. But the day after will probably be sunny." },
            { speaker: "Aoi", l1: "つまり、あさっての ほうが いいということですね。", en: "So basically, the day after is better, right?" },
            { speaker: "You", l1: "なるほど、たしかに そうかもしれません。", en: "I see, that might indeed be so." },
            { speaker: "Aoi", l1: "けっきょく、あさって いきましょう。", en: "In the end, let's go the day after." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Hedge and wrap up",
          items: [
            {
              template: "あした あめが ふる ___ 。",
              answer: "かもしれません",
              en: "It might rain tomorrow.",
              options: ["かもしれません", "でした", "ましょう", "ください"],
            },
            {
              template: "あさっては たぶん はれる ___ 。",
              answer: "でしょう",
              en: "The day after will probably be sunny.",
              options: ["でしょう", "かもしれません", "ですか", "ました"],
            },
            {
              template: "___ 、あさっての ほうが いいですね。",
              answer: "つまり",
              en: "In other words, the day after is better.",
              options: ["つまり", "なぜなら", "たぶん", "けど"],
            },
            {
              template: "この みせは べんり ___ 。（might）",
              answer: "かもしれません",
              en: "This shop might be convenient.",
              options: ["かもしれません", "だかもしれません", "ですかもしれません", "でかもしれません"],
            },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the sentence",
          intro: "Tap the words into the correct order.",
          items: [
            { tokens: ["あした", "あめが", "ふる", "かもしれません"], alts: [["あめが", "あした", "ふる", "かもしれません"]], en: "It might rain tomorrow." },
            { tokens: ["たぶん", "あさっては", "はれる", "でしょう"], alts: [["あさっては", "たぶん", "はれる", "でしょう"]], en: "The day after will probably be sunny." },
            { tokens: ["つまり", "、", "あさっての", "ほうが", "いいということですね"], en: "So basically, the day after is better, right?" },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "It might rain tomorrow, but the day after will probably be sunny.",
          reference: "あした あめが ふるかもしれませんが、あさっては たぶん はれるでしょう。",
          hint: "…furu kamoshiremasen ga, … hareru deshō — both on plain forms, joined by が.",
        },
        {
          type: "tip",
          heading: "You did it — the full Japanese roadmap",
          body: "This is the last unit of 35. You've gone from <em>hiragana and katakana</em> all the way through <em>です &amp; particles, verbs, adjectives, the て-form family, plain-form clauses, and now opinions and discussion</em>. You can state a view, give a reason, agree, disagree without offending anyone, hedge like a native, and wrap a conversation up — the real B1 toolkit for living in Tokyo. <strong>おめでとうございます！よく がんばりました。</strong>",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "…かもしれません attaches to which form?",
              options: ["the polite ます-form", "the plain form", "the て-form", "the ない-form only"],
              correct: 1,
            },
            {
              q: "'It'll probably be sunny' =",
              options: [
                "はれるかもしれません。",
                "はれるでしょう。",
                "はれては いけません。",
                "はれると 思いますか。",
              ],
              correct: 1,
            },
            {
              q: "Which word means 'in other words / so basically'?",
              options: ["なぜなら", "つまり", "たしかに", "ちょっと"],
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
        q: "'In my opinion' =",
        options: ["わたしの いけんでは", "わたしは いけんが", "いけんの わたしでは", "わたしの いけんから"],
        correct: 0,
      },
      {
        q: "'What do you think about this?' =",
        options: [
          "これは どう 思いますか。",
          "これに ついて どう 思いますか。",
          "これが どう 思いますか。",
          "これを どう 思いますか。",
        ],
        correct: 1,
      },
      {
        q: "Which is a warm, direct way to agree?",
        options: ["ちがいます。", "そうですね。", "はんたいです。", "ちょっと…"],
        correct: 1,
      },
      {
        q: "The polite, face-saving way to disagree is to…",
        options: [
          "say ちがいます right away",
          "acknowledge first, then soften (たしかに…ですが…)",
          "stay silent",
          "raise your voice",
        ],
        correct: 1,
      },
      {
        q: "A trailing 「それは ちょっと…」 usually signals…",
        options: ["strong agreement", "a soft 'no'", "a question", "praise"],
        correct: 1,
      },
      {
        q: "…かもしれません means…",
        options: ["must", "might / maybe", "you'd better", "have done"],
        correct: 1,
      },
      {
        q: "'It might rain' =",
        options: [
          "あめが ふるでしょう。",
          "あめが ふるかもしれません。",
          "あめが ふらなければ なりません。",
          "あめが ふっても いいです。",
        ],
        correct: 1,
      },
      {
        q: "…でしょう most nearly means…",
        options: ["definitely / for sure", "probably / I'd guess", "never", "already"],
        correct: 1,
      },
      {
        q: "Which wraps up a discussion ('in the end / after all')?",
        options: ["なぜなら", "けっきょく", "について", "こじんてきには"],
        correct: 1,
      },
      {
        q: "Translate: 'In my opinion, it might be a little expensive.'",
        options: [
          "わたしの いけんでは、ちょっと たかいかもしれません。",
          "わたしの いけんから、たかいでしょう。",
          "こじんてきには、たかくても いいです。",
          "わたしは いけんが、たかいと 思いません。",
        ],
        correct: 0,
      },
    ],
  },
};
