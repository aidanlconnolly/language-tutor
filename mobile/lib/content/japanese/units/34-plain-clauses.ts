import type { Unit } from "../../types";

export const UNIT_PLAIN_CLAUSES: Unit = {
  slug: "plain-clauses",
  stage: 8,
  order: 34,
  icon: "🤔",
  title: "Plain-form clauses",
  tagline: "…と 思う, …から, …とき, and casual speech.",
  badge: "advanced",
  lessons: [
    {
      slug: "plain-clauses-omou",
      title: "…と 思います — I think that…",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Quoting a thought with …と 思います",
          body: [
            "To say \"I think that X,\" Japanese puts the whole thought first, then the particle <strong>と</strong> (the quotation marker), then <strong>思います</strong> (omoimasu, \"think\"): <em>X と 思います</em>.",
            "The clause before と is always in <strong>plain form</strong>, never ですので-polite. So \"I think it's expensive\" is <em>たかいと 思います</em> — not たかいですと.",
            "For nouns and na-adjectives, link with <strong>だ</strong>: <em>べんりだと 思います</em> = \"I think it's convenient.\" For negatives, use the plain negative: <em>こないと 思います</em> = \"I think (they) won't come.\"",
          ],
          keyPoint:
            "[plain-form clause] + と + 思います = \"I think that….\" The clause before と is plain, never です/ます.",
        },
        {
          type: "conjugation",
          heading: "Plain forms feeding into …と 思います",
          verb: "various",
          meaning: "plain forms before と",
          intro: "The clause directly before と stays plain. Note だ for nouns and na-adjectives.",
          tenses: [
            {
              name: "Verbs",
              forms: [
                { person: "くる → こない", form: "こないと 思います", en: "I think they won't come" },
                { person: "ふる", form: "ふると 思います", en: "I think it'll rain" },
                { person: "おわった", form: "おわったと 思います", en: "I think it's finished" },
              ],
            },
            {
              name: "Adjectives & nouns",
              forms: [
                { person: "い-adj: たかい", form: "たかいと 思います", en: "I think it's expensive" },
                { person: "な-adj: べんり + だ", form: "べんりだと 思います", en: "I think it's convenient" },
                { person: "noun: あめ + だ", form: "あめだと 思います", en: "I think it's rain / it'll rain" },
              ],
            },
          ],
        },
        {
          type: "vocab",
          heading: "Thinking & opinion words",
          items: [
            { l1: "と 思います", en: "I think that…", note: "to omoimasu — quote particle と + 思う" },
            { l1: "思う", en: "to think", note: "omou — plain form of 思います" },
            { l1: "だ", en: "plain 'is' (links noun/な-adj to と)", note: "da — plain form of です" },
            { l1: "たぶん", en: "probably / maybe", note: "tabun — often pairs with …と 思います" },
            { l1: "あめ", en: "rain", note: "ame (あめ)" },
            { l1: "ふる", en: "to fall (rain/snow)", note: "furu — あめが ふる = it rains" },
            { l1: "べんり(な)", en: "convenient", note: "benri — a な-adjective" },
            { l1: "おもしろい", en: "interesting / fun", note: "omoshiroi (おもしろい)" },
          ],
        },
        {
          type: "dialogue",
          heading: "Will it rain in Tokyo?",
          setup: "Checking the sky before heading out.",
          lines: [
            { speaker: "Aoi", l1: "きょうは あめが ふると 思いますか。", en: "Do you think it'll rain today?" },
            { speaker: "You", l1: "たぶん ふると 思います。かさを もって いきます。", en: "I think it'll probably rain. I'll take an umbrella." },
            { speaker: "Aoi", l1: "でんしゃは こむと 思いますか。", en: "Do you think the train will be crowded?" },
            { speaker: "You", l1: "いいえ、いまは こまないと 思います。", en: "No, I don't think it's crowded now." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Plain form before と",
          intro: "Pick the correct plain form.",
          items: [
            {
              template: "あした あめが ___ と 思います。",
              answer: "ふる",
              en: "I think it'll rain tomorrow.",
              options: ["ふる", "ふります", "ふって", "ふりです"],
            },
            {
              template: "この みせは べんり___ と 思います。",
              answer: "だ",
              en: "I think this shop is convenient.",
              options: ["だ", "です", "の", "に"],
            },
            {
              template: "かれは ___ と 思います。",
              answer: "こない",
              en: "I think he won't come.",
              options: ["こない", "きません", "こなくて", "きないです"],
            },
            {
              template: "えいがは おもしろい ___ 思います。",
              answer: "と",
              en: "I think the movie is interesting.",
              options: ["と", "を", "が", "は"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "I think it'll probably rain tomorrow.",
          reference: "あした たぶん あめが ふると 思います。",
          hint: "tabun … furu to omoimasu — plain ふる before と.",
        },
      ],
    },
    {
      slug: "plain-clauses-from-but",
      title: "…から (because) & …が (but)",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Joining clauses: reasons and contrasts",
          body: [
            "<strong>…から</strong> (kara) = \"because / so.\" Unlike English, the <em>reason comes first</em>: [reason] から、[result]. <em>たかいから、かいません</em> = \"Because it's expensive, I won't buy it.\"",
            "から can attach to plain or polite form, but in connected, natural speech plain form is common: <em>つかれたから、かえります</em> = \"I'm tired, so I'll go home.\"",
            "<strong>…が</strong> (ga) = \"but / however,\" a softer, more polite contrast than でも. It joins two clauses inside one sentence: <em>たかいですが、おいしいです</em> = \"It's expensive, but it's delicious.\" In casual speech you'll also hear <em>…けど</em>.",
          ],
          keyPoint:
            "[reason] から = because/so (reason first). [clause] が = but (mid-sentence, polite). Casual contrast = …けど.",
        },
        {
          type: "vocab",
          heading: "Connector words",
          items: [
            { l1: "から", en: "because / so", note: "kara — reason comes before から" },
            { l1: "が", en: "but / however (mid-sentence)", note: "ga — softer than でも" },
            { l1: "けど", en: "but (casual)", note: "kedo — casual version of が" },
            { l1: "だから", en: "so / therefore (sentence start)", note: "dakara — starts a new sentence" },
            { l1: "つかれた", en: "got tired", note: "tsukareta — past of つかれる" },
            { l1: "やすい", en: "cheap", note: "yasui (やすい)" },
            { l1: "おいしい", en: "delicious", note: "oishii (おいしい)" },
            { l1: "こんでいる", en: "is crowded", note: "konde iru — from こむ" },
          ],
        },
        {
          type: "dialogue",
          heading: "Choosing a ramen shop",
          setup: "Deciding where to eat in Ikebukuro.",
          lines: [
            { speaker: "Aoi", l1: "この みせは やすいから、いきましょう。", en: "This shop is cheap, so let's go." },
            { speaker: "You", l1: "やすいですが、いつも こんでいます。", en: "It's cheap, but it's always crowded." },
            { speaker: "Aoi", l1: "そうですね。じゃ、あそこは どうですか。おいしいですよ。", en: "True. Then how about over there? It's delicious." },
            { speaker: "You", l1: "いいですね。おなかが すいたから、はやく いきましょう。", en: "Sounds good. I'm hungry, so let's go quickly." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Because, or but?",
          items: [
            {
              template: "つかれた ___ 、かえります。",
              answer: "から",
              en: "Because I'm tired, I'll go home.",
              options: ["から", "が", "と", "ので"],
            },
            {
              template: "たかいです ___ 、おいしいです。",
              answer: "が",
              en: "It's expensive, but it's delicious.",
              options: ["が", "から", "と", "を"],
            },
            {
              template: "あめが ふる ___ 、かさを もって いきます。",
              answer: "から",
              en: "Because it'll rain, I'll take an umbrella.",
              options: ["から", "が", "けど", "と"],
            },
            {
              template: "やすい ___ 、こんでいます。",
              answer: "けど",
              en: "It's cheap, but it's crowded. (casual)",
              options: ["けど", "から", "だから", "と"],
            },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the sentence",
          intro: "Tap the words into the correct order.",
          items: [
            { tokens: ["やすい", "から", "、", "かいます"], en: "Because it's cheap, I'll buy it." },
            { tokens: ["たかいです", "が", "、", "おいしいです"], en: "It's expensive, but it's delicious." },
            { tokens: ["つかれた", "から", "、", "はやく", "ねます"], en: "I'm tired, so I'll sleep early." },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "It's expensive, but it's delicious.",
          reference: "たかいですが、おいしいです。",
          hint: "takai desu ga, oishii desu — clause + が for a polite 'but'.",
        },
      ],
    },
    {
      slug: "plain-clauses-toki-casual",
      title: "…とき (when) & casual speech",
      estMinutes: 10,
      pages: [
        {
          type: "intro",
          heading: "…とき = 'when' and dropping the polite mask",
          body: [
            "<strong>…とき</strong> (toki) = \"when / at the time that….\" The clause before とき is in <strong>plain form</strong>, and the tense tells you the timing: <em>とうきょうに いくとき</em> = \"when I go to Tokyo (before/on the way),\" while <em>とうきょうに いったとき</em> = \"when I went / once I had arrived in Tokyo.\"",
            "Nouns link with の: <em>こどもの とき</em> = \"when I was a child.\" Na-adjectives use な: <em>ひまな とき</em> = \"when I'm free.\"",
            "With friends, Japanese drops です/ます for <strong>casual (plain) speech</strong>: <em>たべる</em> instead of たべます, <em>いい</em> instead of いいです. Questions just rise in tone, often dropping か: <em>いく？</em> = \"You going?\" Casual だ is frequently left off for women's/neutral speech: <em>がくせい？</em>",
          ],
          keyPoint:
            "[plain clause] + とき = \"when….\" Tense before とき = timing. With friends, drop です/ます (plain speech); rising tone replaces か.",
        },
        {
          type: "vocab",
          heading: "Time clauses & casual markers",
          items: [
            { l1: "とき", en: "when / at the time", note: "toki — plain clause + とき" },
            { l1: "こどもの とき", en: "when (I) was a child", note: "kodomo no toki — noun + の + とき" },
            { l1: "ひまな とき", en: "when (I'm) free", note: "hima na toki — な-adj + な + とき" },
            { l1: "うん", en: "yeah (casual yes)", note: "un — casual はい" },
            { l1: "ううん", en: "nope (casual no)", note: "uun — casual いいえ" },
            { l1: "だよ / だね", en: "casual sentence endings", note: "da yo / da ne — emphasis / agreement" },
            { l1: "すごい", en: "amazing / really", note: "sugoi — common in casual speech" },
            { l1: "やばい", en: "crazy / awesome / oh no (slang)", note: "yabai — very casual, context-dependent" },
          ],
        },
        {
          type: "dialogue",
          heading: "Casual chat with a friend",
          setup: "Talking with Yuki, a close friend — note: no です/ます.",
          lines: [
            { speaker: "Yuki", l1: "しゅうまつ、ひまな とき なにする？", en: "When you're free this weekend, what'll you do?" },
            { speaker: "You", l1: "うーん、しぶやに いくと 思う。", en: "Hmm, I think I'll go to Shibuya." },
            { speaker: "Yuki", l1: "いいね！こどもの とき、よく いった？", en: "Nice! When you were a kid, did you go a lot?" },
            { speaker: "You", l1: "ううん、あんまり。でも いま すごい すきだよ。", en: "Nope, not much. But now I really like it." },
            { speaker: "Yuki", l1: "じゃ、いっしょに いこう！", en: "Then let's go together!" },
          ],
        },
        {
          type: "fillBlank",
          heading: "When-clauses & casual forms",
          items: [
            {
              template: "とうきょうに ___ とき、ともだちに あいます。",
              answer: "いく",
              en: "When I go to Tokyo, I'll meet a friend.",
              options: ["いく", "いきます", "いって", "いきの"],
            },
            {
              template: "こども ___ とき、にほんに すんでいました。",
              answer: "の",
              en: "When I was a child, I lived in Japan.",
              options: ["の", "な", "だ", "に"],
            },
            {
              template: "ひま ___ とき、えいがを みます。",
              answer: "な",
              en: "When I'm free, I watch movies.",
              options: ["な", "の", "だ", "に"],
            },
            {
              template: "（casual）あした いっしょに たべる ___ ？",
              answer: "",
              en: "Wanna eat together tomorrow? (rising tone, no か)",
              options: ["（なにもいれない）", "か", "ます", "です"],
            },
          ],
        },
        {
          type: "tip",
          heading: "Casual speech is about who, not just how",
          body: "Switching to plain form isn't 'lazy' Japanese — it's <strong>relationship-marked</strong>. Use it with close friends, family, and people clearly younger or junior to you. <strong>Don't</strong> drop です/ます with strangers, shop staff, teachers, or anyone older you've just met — it reads as rude. When unsure, stay polite and let the other person down-shift first, just like Italian's <em>diamoci del tu</em>.",
          example: { l1: "（friend）いく？ ／ （stranger）いきますか。", en: "You going? / Are you going?" },
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "When I was a child, I lived in Tokyo.",
          reference: "こどもの とき、とうきょうに すんでいました。",
          hint: "kodomo no toki — noun + の + とき, then the past clause.",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "The clause before とき is in which form?",
              options: ["polite ます-form", "plain form", "て-form", "ない-form only"],
              correct: 1,
            },
            {
              q: "'When I was a child' =",
              options: ["こどもな とき", "こどもの とき", "こどもだ とき", "こどもに とき"],
              correct: 1,
            },
            {
              q: "Casual 'yeah' and 'nope' are…",
              options: ["はい / いいえ", "うん / ううん", "そう / ちがう", "ね / よ"],
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
        q: "'I think it'll rain' =",
        options: [
          "あめが ふりますと 思います。",
          "あめが ふると 思います。",
          "あめが ふるが 思います。",
          "あめが ふってと 思います。",
        ],
        correct: 1,
      },
      {
        q: "The clause directly before と (in …と 思います) is in…",
        options: ["polite form", "plain form", "て-form", "past form only"],
        correct: 1,
      },
      {
        q: "To link a noun or な-adjective before と 思います, you add…",
        options: ["です", "だ", "の", "に"],
        correct: 1,
      },
      {
        q: "In a …から sentence, the reason comes…",
        options: ["after the result", "before the result (reason first)", "in the middle", "it doesn't matter"],
        correct: 1,
      },
      {
        q: "'It's expensive, but it's delicious' =",
        options: [
          "たかいですから、おいしいです。",
          "たかいですが、おいしいです。",
          "たかいですと、おいしいです。",
          "たかいですので、おいしいですか。",
        ],
        correct: 1,
      },
      {
        q: "The casual version of が ('but') is…",
        options: ["から", "けど", "ので", "だから"],
        correct: 1,
      },
      {
        q: "…とき means…",
        options: ["because", "but", "when", "if only"],
        correct: 2,
      },
      {
        q: "'When I go to Tokyo' =",
        options: [
          "とうきょうに いきますとき",
          "とうきょうに いくとき",
          "とうきょうに いっての とき",
          "とうきょうに いくな とき",
        ],
        correct: 1,
      },
      {
        q: "With close friends, casual speech means you…",
        options: [
          "always add です/ます",
          "drop です/ます and use plain form",
          "speak more slowly",
          "use more か",
        ],
        correct: 1,
      },
      {
        q: "Translate: 'I think the train won't be crowded.'",
        options: [
          "でんしゃは こまないと 思います。",
          "でんしゃは こみませんと 思います。",
          "でんしゃは こむと 思います。",
          "でんしゃは こんでと 思います。",
        ],
        correct: 0,
      },
    ],
  },
};
