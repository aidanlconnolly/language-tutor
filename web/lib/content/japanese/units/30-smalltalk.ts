import type { Unit } from "../../types";

export const UNIT_SMALLTALK: Unit = {
  slug: "smalltalk",
  stage: 7,
  order: 30,
  icon: "🌸",
  title: "Small talk & weather",
  tagline: "The weather, the seasons, and graceful exits.",
  badge: "culture",
  lessons: [
    {
      slug: "smalltalk-weather",
      title: "Weather & seasons: the default small talk",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Japan's small talk runs on weather",
          body: [
            "Just as English speakers fill silence with 'nice weather, isn't it?', Japanese conversation leans heavily on the weather and the seasons. It's safe, shared, and beautifully seasonal.",
            "The pattern is almost always <strong>… ですね</strong> — inviting agreement. <strong>あついですね</strong> ('hot, isn't it'), <strong>さむいですね</strong> ('cold, isn't it'), <strong>いい てんき ですね</strong> ('nice weather, isn't it'). The reply mirrors it: <strong>そうですね</strong>.",
            "Japan is intensely season-aware: <strong>さくら</strong> (cherry blossoms) in spring, the rainy season <strong>つゆ</strong> (梅雨) in June, sticky <strong>むしあつい</strong> summers, fiery <strong>こうよう</strong> (autumn leaves), crisp winters. Mentioning the season's signature is the warmest small talk of all.",
          ],
          tip: {
            label: "ね does the work",
            body: "The particle <strong>ね</strong> turns a statement into a shared moment: <em>あついですね</em> isn't really asking — it's saying 'we're both feeling this heat, right?' Answer with <em>そうですね</em> and you've bonded over nothing in particular, which is exactly the point.",
          },
          keyPoint:
            "Weather + ですね is the default opener. Reply with そうですね. Seasonal words (さくら, つゆ, こうよう) deepen it.",
        },
        {
          type: "vocab",
          heading: "Weather & seasons",
          items: [
            { l1: "いい てんき ですね", en: "nice weather, isn't it", note: "ii tenki desu ne — 天気." },
            { l1: "あつい（です）", en: "hot", note: "atsui — 暑い (weather)." },
            { l1: "むしあつい", en: "humid / muggy", note: "mushiatsui — 蒸し暑い; classic Tokyo summer." },
            { l1: "さむい（です）", en: "cold", note: "samui — 寒い." },
            { l1: "あめ", en: "rain", note: "ame — 雨; 雪 (yuki) = snow." },
            { l1: "はる／なつ／あき／ふゆ", en: "spring / summer / autumn / winter", note: "haru / natsu / aki / fuyu." },
            { l1: "さくら", en: "cherry blossoms", note: "sakura — 桜; お花見 (o-hanami) = blossom viewing." },
            { l1: "つゆ", en: "the rainy season (June)", note: "tsuyu — 梅雨." },
            { l1: "こうよう", en: "autumn leaves", note: "kōyō — 紅葉; viewing them is 紅葉狩り (momiji-gari)." },
          ],
        },
        {
          type: "dialogue",
          heading: "Small talk by the elevator",
          setup: "You run into a neighbor on a sticky July morning in Tokyo.",
          lines: [
            { speaker: "Neighbor", l1: "おはようございます。今日も暑いですね。", en: "Good morning. Hot again today, isn't it." },
            { speaker: "You", l1: "そうですね。蒸し暑いですね。", en: "It really is. So muggy." },
            { speaker: "Neighbor", l1: "もうすぐ梅雨が明けますね。", en: "The rainy season will be over soon, won't it." },
            { speaker: "You", l1: "ええ。夏が楽しみです。", en: "Yes. I'm looking forward to summer." },
            { speaker: "Neighbor", l1: "それでは、いってらっしゃい。", en: "Well then, take care (have a good day)." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Match the season",
          items: [
            {
              template: "春になると、___が咲きます。",
              answer: "さくら",
              en: "When spring comes, the cherry blossoms bloom.",
              options: ["さくら", "つゆ", "こうよう", "ゆき"],
            },
            {
              template: "六月は ___ で、雨が多いです。",
              answer: "つゆ",
              en: "June is the rainy season, with a lot of rain.",
              options: ["なつ", "つゆ", "さくら", "こうよう"],
            },
            {
              template: "東京の夏は ___ ですね。",
              answer: "むしあつい",
              en: "Tokyo summers are muggy, aren't they.",
              options: ["さむい", "むしあつい", "すずしい", "つめたい"],
            },
            {
              template: "秋は ___ がきれいです。",
              answer: "こうよう",
              en: "In autumn the colored leaves are beautiful.",
              options: ["さくら", "つゆ", "こうよう", "ゆき"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "It's hot today, isn't it.",
          reference: "今日は暑いですね。",
          hint: "End with ですね to invite agreement.",
        },
      ],
    },
    {
      slug: "smalltalk-compliments",
      title: "Compliments & modest responses",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Receiving praise with modesty",
          body: [
            "Giving a compliment is easy — <strong>すごいですね</strong> ('amazing'), <strong>じょうずですね</strong> ('you're skilled'), <strong>すてきですね</strong> ('lovely').",
            "<em>Receiving</em> one is where culture shows. Japanese norms favor modesty (<strong>けんそん</strong>, 謙遜), so a flat 'thank you' to praise can sound boastful. Instead, people deflect: <strong>いえいえ</strong> ('no no'), <strong>まだまだです</strong> ('I've still got a long way to go'), <strong>そんなことないです</strong> ('that's not true').",
            "This isn't false modesty — it's the polite reflex. A confident 'yes, I am good at it!' would land oddly.",
            "When someone praises your Japanese, the textbook-perfect deflection is <strong>いえいえ、まだまだです</strong>.",
          ],
          keyPoint:
            "Compliment: すごい／じょうず／すてき + ですね. Receive it modestly: いえいえ／まだまだです／そんなことないです.",
        },
        {
          type: "vocab",
          heading: "Compliments & modest replies",
          items: [
            { l1: "すごいですね", en: "amazing / impressive", note: "sugoi desu ne — 凄い." },
            { l1: "じょうずですね", en: "you're good (at it) / skilled", note: "jōzu desu ne — 上手." },
            { l1: "すてきですね", en: "lovely / wonderful", note: "suteki desu ne — 素敵." },
            { l1: "おいしそうですね", en: "that looks delicious", note: "oishisō desu ne." },
            { l1: "にあいますね", en: "it suits you", note: "niaimasu ne — 似合います." },
            { l1: "いえいえ", en: "no no (deflecting praise)", note: "ie ie — modest brush-off." },
            { l1: "まだまだです", en: "I've still got a long way to go", note: "mada mada desu — classic modest reply." },
            { l1: "そんなことないです", en: "that's not true / not at all", note: "sonna koto nai desu." },
            { l1: "おかげさまで", en: "thanks to you (humble acknowledgment)", note: "okagesama de." },
          ],
        },
        {
          type: "dialogue",
          heading: "When your Japanese gets praised",
          setup: "You order lunch entirely in Japanese and the shop owner is impressed.",
          lines: [
            { speaker: "Owner", l1: "日本語、お上手ですね！", en: "Your Japanese is really good!" },
            { speaker: "You", l1: "いえいえ、まだまだです。", en: "Oh no, I've still got a long way to go." },
            { speaker: "Owner", l1: "どのくらい勉強しているんですか。", en: "How long have you been studying?" },
            { speaker: "You", l1: "一年ぐらいです。でも、難しいです。", en: "About a year. But it's hard." },
            { speaker: "Owner", l1: "そんなことないですよ。すごいです。", en: "Not at all — that's impressive." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Respond modestly",
          questions: [
            {
              q: "Someone says '日本語がお上手ですね' (your Japanese is great). The most natural reply is:",
              options: [
                "はい、上手です。",
                "いえいえ、まだまだです。",
                "知っています。",
                "もちろんです。",
              ],
              correct: 1,
              fb: "Deflecting with いえいえ、まだまだです reads as appropriately modest.",
            },
            {
              q: "Which is a compliment, not a reply to one?",
              options: ["まだまだです", "そんなことないです", "すてきですね", "いえいえ"],
              correct: 2,
            },
            {
              q: "Why might a flat 'ありがとう' to high praise sound slightly off?",
              options: [
                "ありがとう is rude",
                "Modesty (けんそん) is the cultural default, so deflecting is expected",
                "You must use English for praise",
                "It's grammatically wrong",
              ],
              correct: 1,
            },
            {
              q: "'そんなことないです' means:",
              options: ["'That's right.'", "'That's not true / not at all.'", "'I don't know.'", "'Thanks a lot.'"],
              correct: 1,
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Oh no, I've still got a long way to go.",
          reference: "いえいえ、まだまだです。",
          hint: "The standard modest deflection of praise.",
        },
      ],
    },
    {
      slug: "smalltalk-exits",
      title: "Graceful exits",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Leaving without leaving abruptly",
          body: [
            "Ending a conversation politely is its own small ritual. You signal it's nearly time before you actually go.",
            "<strong>そろそろ…</strong> ('it's about that time…') is the universal soft exit cue — 'I should get going soon.' Often paired with <strong>そろそろ しつれいします</strong> ('I should be excusing myself now').",
            "Wrap up with a future-facing line: <strong>また こんど</strong> ('next time'), <strong>また れんらく します</strong> ('I'll be in touch'), <strong>きを つけて</strong> ('take care' — said to the one leaving).",
            "On the phone or in messages, <strong>それでは</strong> / <strong>では</strong> ('well then') signals you're closing.",
          ],
          tip: {
            label: "そろそろ buys time",
            body: "Saying <em>そろそろ…</em> and trailing off lets the other person agree it's time, so no one feels dismissed. It's the polite mirror of the soft 'no' — you trail off and let context finish the sentence.",
          },
          keyPoint:
            "Signal departure with そろそろ…, then close with また今度 / また連絡します / 気をつけて.",
        },
        {
          type: "vocab",
          heading: "Exit phrases",
          items: [
            { l1: "そろそろ", en: "it's about that time / soon", note: "sorosoro — the soft 'I should go' cue." },
            { l1: "そろそろ しつれいします", en: "I should be going now (excuse me)", note: "sorosoro shitsurei shimasu — 失礼します." },
            { l1: "また こんど", en: "another time / next time", note: "mata kondo — 今度." },
            { l1: "また れんらく します", en: "I'll be in touch", note: "mata renraku shimasu — 連絡." },
            { l1: "きを つけて", en: "take care (to the one leaving)", note: "ki o tsukete — 気をつけて." },
            { l1: "おげんきで", en: "stay well / take care (longer parting)", note: "o-genki de — 元気." },
            { l1: "それでは／では", en: "well then (closing signal)", note: "soredewa / dewa." },
            { l1: "たのしかったです", en: "I had a good time", note: "tanoshikatta desu — 楽しかった." },
            { l1: "おじゃましました", en: "thanks for having me (leaving a home)", note: "ojama shimashita — 'sorry to have intruded.'" },
          ],
        },
        {
          type: "dialogue",
          heading: "Wrapping up a coffee chat",
          setup: "You've been chatting with a friend at a café and it's getting late.",
          lines: [
            { speaker: "You", l1: "あ、もうこんな時間。そろそろ失礼します。", en: "Oh, look at the time. I should get going." },
            { speaker: "Friend", l1: "そうですね。今日は楽しかったです。", en: "Yeah. I had a great time today." },
            { speaker: "You", l1: "私も。また連絡しますね。", en: "Me too. I'll be in touch." },
            { speaker: "Friend", l1: "うん、また今度。気をつけて帰ってね。", en: "Yeah, next time. Get home safe." },
            { speaker: "You", l1: "ありがとう。それでは、また。", en: "Thanks. Well then, see you." },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the exit line",
          intro: "Tap the words into the correct order.",
          items: [
            { tokens: ["そろそろ", "失礼", "します"], en: "I should be going now." },
            { tokens: ["今日", "は", "楽しかった", "です"], en: "I had a good time today." },
            { tokens: ["また", "連絡", "します", "ね"], en: "I'll be in touch." },
            { tokens: ["気", "を", "つけて", "帰って", "ね"], en: "Get home safe." },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "I had a good time today. I'll be in touch.",
          reference: "今日は楽しかったです。また連絡します。",
          hint: "Past tense 楽しかった for 'had a good time', then a future-facing close.",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "Which word softly signals 'I should get going soon'?",
              options: ["そろそろ", "なるほど", "いただきます", "むしあつい"],
              correct: 0,
            },
            {
              q: "'気をつけて' is said to:",
              options: ["the person staying", "the person leaving", "a shopkeeper only", "a child only"],
              correct: 1,
            },
            {
              q: "Translate: 'It was fun today. Next time!'",
              options: [
                "今日は楽しかったです。また今度！",
                "今日は暑いですね。さようなら。",
                "いただきます。ごちそうさま。",
                "いえいえ、まだまだです。",
              ],
              correct: 0,
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
        q: "The default Japanese small-talk topic is:",
        options: ["politics", "the weather and seasons", "salaries", "religion"],
        correct: 1,
      },
      {
        q: "'暑いですね' invites the reply:",
        options: ["いいえ", "そうですね", "まだまだです", "そろそろ"],
        correct: 1,
      },
      {
        q: "つゆ (梅雨) refers to:",
        options: ["cherry blossoms", "autumn leaves", "the rainy season in June", "the first snow"],
        correct: 2,
      },
      {
        q: "さくら are:",
        options: ["autumn leaves", "cherry blossoms", "summer fireworks", "winter plums"],
        correct: 1,
      },
      {
        q: "Someone praises your Japanese. The modest reply is:",
        options: ["はい、上手です。", "いえいえ、まだまだです。", "もちろんです。", "知っています。"],
        correct: 1,
      },
      {
        q: "Why deflect a compliment in Japanese?",
        options: [
          "Thanks is forbidden",
          "Modesty (けんそん) is the cultural default",
          "It's grammatically required",
          "To get more praise",
        ],
        correct: 1,
      },
      {
        q: "Which is a lovely/wonderful compliment?",
        options: ["まだまだです", "すてきですね", "そんなことないです", "いえいえ"],
        correct: 1,
      },
      {
        q: "The soft 'I should get going' cue is:",
        options: ["そろそろ", "なるほど", "いただきます", "おかえり"],
        correct: 0,
      },
      {
        q: "You say ___ to wish someone leaving a safe trip home.",
        options: ["いってきます", "気をつけて", "ただいま", "いただきます"],
        correct: 1,
      },
      {
        q: "Translate: 'Nice weather, isn't it.'",
        options: ["いい天気ですね。", "暑いですね。", "また今度。", "お疲れさまでした。"],
        correct: 0,
      },
    ],
  },
};
