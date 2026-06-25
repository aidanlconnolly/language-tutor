import type { Unit } from "../../types";

export const UNIT_EXPRESSIONS: Unit = {
  slug: "expressions",
  stage: 7,
  order: 29,
  icon: "🎌",
  title: "Aizuchi & expressions",
  tagline: "そうですね, aizuchi, よろしく, お疲れさま.",
  badge: "culture",
  lessons: [
    {
      slug: "expressions-aizuchi",
      title: "Aizuchi: the art of back-channeling",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Japanese listeners stay busy",
          body: [
            "In Japanese conversation, the listener is not silent. They constantly send small signals — <strong>aizuchi</strong> (相槌) — to show they're following along. Staying quiet can read as cold or even rude.",
            "The most common is <strong>うん</strong> (casual) or <strong>はい</strong> (polite) — a gentle 'yeah / yes, I'm with you.' You'll also hear <strong>そうですね</strong> ('that's so, isn't it'), <strong>なるほど</strong> ('I see / makes sense'), and a soft <strong>へえ</strong> ('ohh, really').",
            "Crucially, <em>aizuchi is not agreement</em>. <strong>はい</strong> while someone talks just means 'I'm listening,' not 'I agree.' A nod and a はい keep the speaker going.",
          ],
          tip: {
            label: "On the phone",
            body: "On a Japanese phone call you'll hear a near-constant stream of <em>はい… はい… ええ… そうですね</em>. Without it, the speaker may stop and ask <em>もしもし?</em> ('hello? are you there?') — silence reads as a dropped line.",
          },
          keyPoint:
            "Aizuchi (うん / はい / そうですね / なるほど / へえ) signal 'I'm listening,' not necessarily 'I agree.'",
        },
        {
          type: "vocab",
          heading: "Core aizuchi",
          intro: "Sprinkle these while the other person speaks.",
          items: [
            { l1: "うん", en: "yeah / mm-hm (casual)", note: "un — soft, with a nod." },
            { l1: "はい", en: "yes / I'm with you (polite)", note: "hai — the everyday polite listening signal." },
            { l1: "ええ", en: "yes / mm (polite, warm)", note: "ee — softer and warmer than はい." },
            { l1: "そうですね", en: "that's so, isn't it / I see", note: "sō desu ne — agreement or thinking aloud." },
            { l1: "そうですか", en: "is that so? / oh really?", note: "sō desu ka — mild surprise or new info." },
            { l1: "なるほど", en: "I see / that makes sense", note: "naruhodo — shows you genuinely understood." },
            { l1: "へえ", en: "ohh / wow, really", note: "hē — drawn out; light surprise or interest." },
            { l1: "ほんとう（に）？", en: "really?", note: "hontō (ni) — 本当に; casual is ほんと？ (honto)." },
            { l1: "たしかに", en: "true / you have a point", note: "tashika ni — 確かに; agreeing with reasoning." },
          ],
        },
        {
          type: "dialogue",
          heading: "Listening like a local",
          setup: "A coworker tells you about her weekend in Kamakura. Notice how the listener keeps responding.",
          lines: [
            { speaker: "Aya", l1: "週末、鎌倉に行ったんです。", en: "This weekend, I went to Kamakura." },
            { speaker: "You", l1: "へえ、いいですね。", en: "Ohh, nice." },
            { speaker: "Aya", l1: "大仏を見て、海も歩いて…", en: "I saw the Great Buddha, walked along the sea too…" },
            { speaker: "You", l1: "なるほど。", en: "I see." },
            { speaker: "Aya", l1: "でも、すごく人が多かったんです。", en: "But there were so many people." },
            { speaker: "You", l1: "そうですか。たしかに、今の季節は混みますね。", en: "Oh really? True, this season does get crowded." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Which aizuchi?",
          questions: [
            {
              q: "Your coworker explains a clever shortcut and it suddenly clicks for you. You say:",
              options: ["へえ？", "なるほど。", "ほんとう？", "うそ！"],
              correct: 1,
              fb: "なるほど = 'ahh, that makes sense' — the 'now I get it' aizuchi.",
            },
            {
              q: "Someone tells you a surprising bit of news. A natural light-surprise response is:",
              options: ["はい。", "へえ、そうですか。", "たしかに。", "そうですね。"],
              correct: 1,
              fb: "へえ + そうですか conveys 'ohh, is that so?' — gentle surprise.",
            },
            {
              q: "While someone is mid-story, you say はい. This signals:",
              options: [
                "'I agree with everything you said.'",
                "'I'm listening — please continue.'",
                "'Stop, I want to talk.'",
                "'No.'",
              ],
              correct: 1,
              fb: "Aizuchi keeps the speaker going; it isn't a statement of agreement.",
            },
          ],
        },
      ],
    },
    {
      slug: "expressions-set-phrases",
      title: "Set phrases that grease daily life",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Phrases with no English equivalent",
          body: [
            "Some Japanese phrases are pure social ritual — you say them at fixed moments whether or not you 'mean' them.",
            "<strong>よろしく おねがいします</strong> closes any introduction or request: roughly 'please treat me well / I look forward to working with you / thanks in advance.' There's no clean English version — it's lubricant for nearly any new relationship.",
            "<strong>お疲れさま（です）</strong> acknowledges someone's effort. Coworkers say it passing in the hall, at the end of the day, after a meeting — 'thanks for your hard work / good job.'",
            "<strong>いただきます</strong> before eating ('I humbly receive') and <strong>ごちそうさま（でした）</strong> after ('thank you for the meal') bracket every meal, even alone.",
          ],
          keyPoint:
            "よろしくおねがいします (closing requests/intros), お疲れさま (acknowledging effort), いただきます／ごちそうさま (before/after meals).",
        },
        {
          type: "vocab",
          heading: "Daily set phrases",
          items: [
            { l1: "よろしく おねがいします", en: "please / I look forward to it (closing intros & requests)", note: "yoroshiku onegaishimasu — casual: よろしく (yoroshiku)." },
            { l1: "お疲れさまです", en: "thanks for your hard work (during/among coworkers)", note: "otsukaresama desu — greeting-like in the workplace." },
            { l1: "お疲れさまでした", en: "good work today (past — at the end)", note: "otsukaresama deshita — when leaving or finishing." },
            { l1: "いただきます", en: "let's eat / I humbly receive (before eating)", note: "itadakimasu — hands together, said even when alone." },
            { l1: "ごちそうさまでした", en: "thank you for the meal (after eating)", note: "gochisōsama deshita — to the cook or host." },
            { l1: "おかげさまで", en: "thanks to you / I'm doing well (humble)", note: "okagesama de — a modest 'thanks for asking.'" },
            { l1: "おさきに しつれいします", en: "excuse me for leaving first", note: "osaki ni shitsurei shimasu — leaving the office before others." },
            { l1: "いってきます／いってらっしゃい", en: "I'm off / take care (leaving & seeing off home)", note: "ittekimasu / itterasshai." },
            { l1: "ただいま／おかえり（なさい）", en: "I'm home / welcome back", note: "tadaima / okaeri(nasai)." },
          ],
        },
        {
          type: "dialogue",
          heading: "Leaving the office",
          setup: "It's 7pm. You finish your work before your colleague Tanaka.",
          lines: [
            { speaker: "You", l1: "お先に失礼します。", en: "I'll be heading out first (excuse me)." },
            { speaker: "Tanaka", l1: "お疲れさまでした。", en: "Good work today." },
            { speaker: "You", l1: "田中さんも、無理しないでくださいね。", en: "You too, Tanaka — don't overdo it." },
            { speaker: "Tanaka", l1: "ありがとうございます。また明日、よろしくお願いします。", en: "Thank you. See you tomorrow — looking forward to it." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Fill in the ritual phrase",
          items: [
            {
              template: "（食べる前に）___。",
              answer: "いただきます",
              en: "(before eating) Let's eat / I humbly receive.",
              options: ["いただきます", "ごちそうさま", "よろしく", "おかえり"],
            },
            {
              template: "（食べた後で）___でした。",
              answer: "ごちそうさま",
              en: "(after eating) Thank you for the meal.",
              options: ["いただきます", "ごちそうさま", "お疲れさま", "ただいま"],
            },
            {
              template: "はじめまして。___ おねがいします。",
              answer: "よろしく",
              en: "Nice to meet you. I look forward to it.",
              options: ["よろしく", "おかえり", "ただいま", "いってきます"],
            },
            {
              template: "（家に帰って）___！",
              answer: "ただいま",
              en: "(arriving home) I'm home!",
              options: ["おかえり", "ただいま", "お疲れさま", "いってきます"],
            },
            {
              template: "一日の仕事のあと、同僚に「___でした」。",
              answer: "お疲れさま",
              en: "After a day's work, to a colleague: 'good work today.'",
              options: ["お疲れさま", "いただきます", "よろしく", "おかえり"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Nice to meet you. I look forward to working with you.",
          reference: "はじめまして。よろしくおねがいします。",
          hint: "はじめまして for 'nice to meet you', then the all-purpose closing.",
        },
      ],
    },
    {
      slug: "expressions-softening",
      title: "Softening, ambiguity & the unspoken no",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Saying 'no' without saying no",
          body: [
            "Japanese communication prizes harmony, so a flat <strong>いいえ</strong> ('no') to a request can feel blunt. Instead, people soften, trail off, and let context do the work.",
            "The magic word is <strong>ちょっと…</strong> ('a little…'). 'Saturday is a little…' (土曜日は ちょっと…) with a slight wince means 'no, sorry, I can't' — and everyone understands without the 'no' being spoken.",
            "Other softeners: <strong>…んですが</strong> / <strong>…けど</strong> trail off ('I'd like to, but…'); <strong>むずかしい です ね</strong> ('that's difficult') often means 'no'; <strong>かんがえて おきます</strong> ('I'll think about it') frequently means 'probably not.'",
            "Reading these cues — the pause, the intake of breath, the すみません — is as important as the words.",
          ],
          tip: {
            label: "Don't push",
            body: "If you hear <em>ちょっと…</em> trailing off, the kind move is to rescue them: <em>あ、だいじょうぶです、また今度</em> ('oh, no worries — another time'). Demanding a yes/no answer puts the other person in an awkward spot.",
          },
          keyPoint:
            "ちょっと… (trailing off) and むずかしいですね often mean a polite 'no.' Read the pause, not just the words.",
        },
        {
          type: "vocab",
          heading: "Softeners & gentle refusals",
          items: [
            { l1: "ちょっと…", en: "it's a little… (often = a soft 'no')", note: "chotto — trail off with a wince." },
            { l1: "すみませんが…", en: "I'm sorry, but… (prefacing a refusal)", note: "sumimasen ga." },
            { l1: "むずかしいですね", en: "that's difficult (often = 'no')", note: "muzukashii desu ne — 難しい." },
            { l1: "かんがえておきます", en: "I'll think about it (often = 'probably not')", note: "kangaete okimasu — 考えておきます." },
            { l1: "…と おもいます", en: "I think… (softens an assertion)", note: "to omoimasu — 思います; hedges a claim." },
            { l1: "…かもしれません", en: "it might be… / maybe", note: "kamoshiremasen — avoids sounding too sure." },
            { l1: "…の ほうが いいかも", en: "maybe … would be better", note: "no hō ga ii kamo — a gentle suggestion." },
            { l1: "ちょっと むずかしいかも", en: "that might be a bit difficult", note: "chotto muzukashii kamo — very soft refusal." },
            { l1: "また こんど（で）", en: "(let's do it) another time", note: "mata kondo — graceful raincheck." },
          ],
        },
        {
          type: "dialogue",
          heading: "Reading the unspoken no",
          setup: "You invite a coworker to drinks after work. Listen for the soft refusal.",
          lines: [
            { speaker: "You", l1: "今日、よかったら飲みに行きませんか。", en: "If you'd like, want to go for drinks today?" },
            { speaker: "Yuki", l1: "あー、今日はちょっと…", en: "Ahh, today is a little…" },
            { speaker: "You", l1: "あ、大丈夫です。また今度で。", en: "Oh, no problem. Another time then." },
            { speaker: "Yuki", l1: "すみません。来週なら、ぜひ。", en: "Sorry. Next week, definitely." },
            { speaker: "You", l1: "いいですね。じゃあ、また誘いますね。", en: "Sounds good. I'll invite you again, then." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "What did they really mean?",
          questions: [
            {
              q: "You ask a coworker to lunch and they say '土曜日はちょっと…' (trailing off). They mean:",
              options: [
                "'Saturday is a little far away.'",
                "'Sorry, I can't do Saturday.'",
                "'Saturday is perfect.'",
                "'What time on Saturday?'",
              ],
              correct: 1,
              fb: "ちょっと… + trailing off is the classic soft 'no.'",
            },
            {
              q: "Your boss responds to your proposal with 'うーん、難しいですね。' This most likely means:",
              options: [
                "'It's a hard but good idea — let's do it.'",
                "'I don't understand it.'",
                "'It's probably not going to happen.'",
                "'Make it more difficult.'",
              ],
              correct: 2,
              fb: "むずかしいですね frequently signals a polite refusal.",
            },
            {
              q: "A vendor says '考えておきます' about your offer. The realistic read is:",
              options: [
                "'Yes, definitely.'",
                "'I need the details in writing.'",
                "'Probably not, but I won't say so directly.'",
                "'I forgot already.'",
              ],
              correct: 2,
            },
            {
              q: "Best response when someone gives you a soft 'ちょっと…' refusal:",
              options: [
                "'Why not? Come on!'",
                "'あ、大丈夫です。また今度。' (No worries, another time.)",
                "'はっきり言ってください。' (Say it clearly.)",
                "Insist they explain.",
              ],
              correct: 1,
              fb: "Rescuing them with 'また今度' keeps everyone comfortable.",
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Ah, today is a little… Sorry. Another time.",
          reference: "あー、今日はちょっと…　すみません。また今度。",
          hint: "Trail off after ちょっと — the 'no' stays unspoken.",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "'ちょっと…' trailing off usually signals:",
              options: ["enthusiastic yes", "a soft, polite 'no'", "confusion", "a question"],
              correct: 1,
            },
            {
              q: "Which phrase means 'I'll think about it' but often implies 'probably not'?",
              options: ["なるほど", "考えておきます", "よろしく", "いただきます"],
              correct: 1,
            },
            {
              q: "A coworker softly refuses your invite. The kindest reply is:",
              options: [
                "Demand a reason",
                "また今度で。(Another time, then.)",
                "Ask again three times",
                "Say いいえ loudly",
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
        q: "Aizuchi like はい / うん while someone speaks mainly show that you…",
        options: ["fully agree", "are listening and following along", "want to interrupt", "disagree"],
        correct: 1,
      },
      {
        q: "Which aizuchi means 'I see / that makes sense'?",
        options: ["へえ", "なるほど", "ほんとう？", "うそ"],
        correct: 1,
      },
      {
        q: "Which closes an introduction or request with no clean English equivalent?",
        options: ["お疲れさま", "いただきます", "よろしくおねがいします", "ただいま"],
        correct: 2,
      },
      {
        q: "Coworkers say ___ to acknowledge each other's effort at the end of the day.",
        options: ["いってきます", "お疲れさまでした", "ごちそうさま", "おかえり"],
        correct: 1,
      },
      {
        q: "You say ___ right before eating a meal.",
        options: ["ごちそうさま", "いただきます", "よろしく", "ただいま"],
        correct: 1,
      },
      {
        q: "After a meal you say:",
        options: ["いただきます", "ごちそうさまでした", "お疲れさま", "いってらっしゃい"],
        correct: 1,
      },
      {
        q: "'土曜日はちょっと…' (trailing off) most likely means:",
        options: ["Saturday works great", "a polite 'I can't'", "Saturday is far", "what time Saturday?"],
        correct: 1,
      },
      {
        q: "A boss says '難しいですね' about your idea. This often means:",
        options: ["let's do it", "explain more", "it's a soft 'no'", "make it harder"],
        correct: 2,
      },
      {
        q: "When someone gives a soft refusal, a graceful reply is:",
        options: ["なるほど！", "また今度で。", "はっきり言って！", "うそ！"],
        correct: 1,
      },
      {
        q: "Translate: 'Nice to meet you. I look forward to working with you.'",
        options: [
          "お疲れさまでした。",
          "はじめまして。よろしくおねがいします。",
          "いただきます。ごちそうさま。",
          "ただいま。おかえり。",
        ],
        correct: 1,
      },
    ],
  },
};
