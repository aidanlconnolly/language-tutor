import type { Unit } from "../../types";

export const UNIT_EXPRESSIONS: Unit = {
  slug: "expressions",
  stage: 7,
  order: 29,
  icon: "🧧",
  title: "Everyday expressions",
  tagline: "加油, 没关系, 不好意思, 随便.",
  badge: "culture",
  lessons: [
    {
      slug: "expressions-encouragement",
      title: "Encouragement & reassurance",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "The little phrases that carry the whole conversation",
          body: [
            "Mandarin runs on a handful of short, warm phrases. Learn them and a Beijing exchange suddenly feels natural instead of textbook-stiff.",
            "<strong>加油!</strong> (jiā yóu) literally means \"add oil / add fuel\" — it's the all-purpose \"come on, you can do it, keep going!\" You'll hear it shouted at sports matches, said to a friend before an exam, and typed in every group chat.",
            "<strong>没关系</strong> (méi guānxi) = \"it doesn't matter / no problem / it's fine.\" It's how you wave off an apology or reassure someone.",
            "<strong>没事</strong> (méi shì) literally \"no matter / no business\" = \"it's nothing / I'm okay / don't worry.\" Slightly more casual than 没关系 and also used to mean \"I'm free / nothing's wrong.\"",
          ],
          keyPoint:
            "加油 = you can do it! · 没关系 = it doesn't matter / no problem · 没事 = it's nothing / I'm okay.",
        },
        {
          type: "vocab",
          heading: "Encouragement & reassurance",
          items: [
            { l1: "加油", en: "you can do it! / keep going!", note: "jiā yóu — lit. 'add oil'." },
            { l1: "没关系", en: "it's fine / no problem / never mind", note: "méi guānxi — waves off an apology." },
            { l1: "没事", en: "it's nothing / I'm okay / don't worry", note: "méi shì — also 'I'm free'." },
            { l1: "别担心", en: "don't worry", note: "bié dānxīn." },
            { l1: "放心", en: "rest assured / set your mind at ease", note: "fàng xīn — lit. 'put down the heart'." },
            { l1: "慢慢来", en: "take it slow / one step at a time", note: "màn man lái." },
            { l1: "你可以的", en: "you can do it", note: "nǐ kěyǐ de." },
            { l1: "辛苦了", en: "thanks for your hard work / you've worked hard", note: "xīnkǔ le — warm acknowledgment." },
          ],
        },
        {
          type: "dialogue",
          heading: "Before the big exam",
          setup: "Your friend is nervous before the HSK test at a Beijing test center.",
          lines: [
            { speaker: "朋友 (Friend)", l1: "我好紧张，怕考不好。", en: "I'm so nervous, I'm afraid I'll do badly." },
            { speaker: "You", l1: "别担心，你准备了很久。", en: "Don't worry, you've prepared for a long time." },
            { speaker: "朋友 (Friend)", l1: "万一忘了怎么办？", en: "What if I forget everything?" },
            { speaker: "You", l1: "放心，慢慢来，你可以的！", en: "Relax, take it one step at a time, you can do it!" },
            { speaker: "朋友 (Friend)", l1: "好，我加油！", en: "Okay, I'll give it my all!" },
            { speaker: "You", l1: "加油！考完我请你吃饭。", en: "Go for it! After the exam I'll treat you to a meal." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Pick the right phrase",
          questions: [
            {
              q: "Your friend is running a marathon and passes you. You shout:",
              qL1: "朋友正在跑马拉松。你喊：",
              options: ["没关系！", "加油！", "辛苦了！", "放心！"],
              correct: 1,
              fb: "加油! (lit. 'add oil') is the standard cheer of encouragement.",
            },
            {
              q: "Someone steps on your foot and apologizes. You reply:",
              qL1: "有人踩了你的脚，道歉。你回答：",
              options: ["加油！", "没关系。", "慢慢来。", "你可以的。"],
              correct: 1,
              fb: "没关系 = it's fine / no problem — the standard way to accept an apology.",
            },
            {
              q: "Which phrase means 'thanks for your hard work'?",
              options: ["放心", "辛苦了", "没事", "别担心"],
              correct: 1,
              fb: "辛苦了 (xīnkǔ le) acknowledges someone's effort — said to coworkers, drivers, hosts.",
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Don't worry, take it slow, you can do it!",
          reference: "别担心，慢慢来，你可以的！",
          hint: "Three short reassurances strung together, separated by commas.",
        },
      ],
    },
    {
      slug: "expressions-softeners",
      title: "Softeners: 不好意思, 随便, 差不多",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Softening what you say",
          body: [
            "Mandarin loves to take the edge off. Three softeners do most of the work.",
            "<strong>不好意思</strong> (bù hǎoyìsi) literally \"not good meaning\" = \"excuse me / sorry to bother you / how embarrassing.\" It's lighter than 对不起 — a social lubricant for small interruptions, not a real apology.",
            "<strong>对不起</strong> (duìbuqǐ) = \"I'm sorry\" for something you actually did wrong. Use it when you've genuinely caused harm, not just to squeeze past someone.",
            "<strong>随便</strong> (suíbiàn) = \"whatever's fine / up to you / as you like.\" Polite and flexible when someone asks where to eat — but a flat 随便 can also read as \"I don't care,\" so a smile helps.",
            "<strong>差不多</strong> (chàbuduō) literally \"differ-not-much\" = \"more or less / about / good enough.\" A famously useful (and famously over-used) phrase in Chinese life.",
          ],
          keyPoint:
            "不好意思 = light 'excuse me/sorry' · 对不起 = real apology · 随便 = up to you · 差不多 = more or less.",
        },
        {
          type: "vocab",
          heading: "Softeners",
          items: [
            { l1: "不好意思", en: "excuse me / sorry to bother you / embarrassing", note: "bù hǎoyìsi — light and very common." },
            { l1: "对不起", en: "I'm sorry (real apology)", note: "duìbuqǐ — for genuine wrongdoing." },
            { l1: "没关系", en: "it's okay / no problem", note: "méi guānxi — reply to an apology." },
            { l1: "随便", en: "whatever / up to you / as you like", note: "suíbiàn — flexible; smile so it isn't curt." },
            { l1: "差不多", en: "more or less / about / good enough", note: "chàbuduō." },
            { l1: "都行", en: "any of them works / either is fine", note: "dōu xíng." },
            { l1: "看情况", en: "it depends / depends on the situation", note: "kàn qíngkuàng." },
            { l1: "麻烦你了", en: "sorry to trouble you / thanks for the trouble", note: "máfan nǐ le — polite." },
          ],
        },
        {
          type: "tip",
          heading: "不好意思 vs 对不起",
          body: "Reach for <strong>不好意思</strong> for minor friction — getting someone's attention, slipping past in a crowded subway, arriving a few minutes late. Save <strong>对不起</strong> for when you've actually done something wrong: broken a promise, hurt someone's feelings, spilled their tea. Using 对不起 for trivial things can sound oddly heavy; using 不好意思 for a real offense can sound like you're not taking it seriously.",
          example: { l1: "不好意思，请问地铁站在哪儿？", en: "Excuse me, where's the subway station?" },
        },
        {
          type: "fillBlank",
          heading: "Choose the right softener",
          intro: "Pick the phrase that fits the situation.",
          items: [
            {
              template: "___，请问现在几点？",
              answer: "不好意思",
              en: "Excuse me, what time is it now?",
              options: ["不好意思", "对不起", "差不多", "随便"],
            },
            {
              template: "我把你的杯子打破了，真的很 ___。",
              answer: "对不起",
              en: "I broke your cup, I'm really sorry.",
              options: ["随便", "对不起", "差不多", "没事"],
            },
            {
              template: "你想吃什么？— ___，你决定吧。",
              answer: "随便",
              en: "What do you want to eat? — Whatever, you decide.",
              options: ["对不起", "随便", "辛苦了", "加油"],
            },
            {
              template: "这两个 ___，都可以。",
              answer: "差不多",
              en: "These two are more or less the same, either works.",
              options: ["不好意思", "差不多", "对不起", "放心"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Excuse me, where do you want to eat? — Whatever's fine, up to you.",
          reference: "不好意思，你想在哪儿吃？—— 随便，看你。",
          hint: "Start with the light 不好意思; 随便 + 看你 = 'whatever, up to you'.",
        },
      ],
    },
    {
      slug: "expressions-fillers",
      title: "Fillers & reactions in dialogue",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Sounding natural: fillers and reactions",
          body: [
            "Real conversation is full of small noises and reactions. These make you sound fluent even when your vocabulary is small.",
            "<strong>那个… / 这个…</strong> (nàge… / zhège…) = \"um… / like… / that thing…\" — the universal Mandarin filler while you think. (Heads up: 那个 sounds a bit like an English slur to untrained ears — it's completely innocent in Chinese.)",
            "<strong>真的吗?</strong> (zhēn de ma) = \"Really?!\" — the go-to surprise reaction.",
            "<strong>太…了</strong> (tài … le) = \"so / too …!\" — wrap any adjective for emphasis: 太好了 (great!), 太贵了 (too expensive!), 太累了 (so tired!).",
          ],
          keyPoint:
            "那个… = um/like (filler) · 真的吗? = really?! · 太…了 = so…! / too…! (wraps an adjective).",
        },
        {
          type: "vocab",
          heading: "Fillers & reactions",
          items: [
            { l1: "那个", en: "um… / that… (filler)", note: "nàge — buys thinking time." },
            { l1: "就是", en: "exactly / that's just it", note: "jiùshì — agreement filler." },
            { l1: "真的吗？", en: "really?!", note: "zhēn de ma." },
            { l1: "太好了", en: "great! / awesome!", note: "tài hǎo le." },
            { l1: "太贵了", en: "too expensive!", note: "tài guì le." },
            { l1: "对啊", en: "yeah / right", note: "duì a — soft agreement." },
            { l1: "是吗？", en: "is that so? / oh really?", note: "shì ma." },
            { l1: "哎呀", en: "oh no / oh my / oops", note: "āiyā — exclamation of dismay or surprise." },
            { l1: "厉害", en: "impressive / awesome (skill)", note: "lìhai — praises someone's ability." },
          ],
        },
        {
          type: "dialogue",
          heading: "Catching up over tea",
          setup: "Two friends chat at a teahouse near Houhai.",
          lines: [
            { speaker: "小李 (Xiǎo Lǐ)", l1: "那个…我下个月要去上海工作。", en: "Um… next month I'm going to Shanghai for work." },
            { speaker: "小王 (Xiǎo Wáng)", l1: "真的吗？太好了！恭喜！", en: "Really?! That's great! Congratulations!" },
            { speaker: "小李 (Xiǎo Lǐ)", l1: "就是有点紧张，房租太贵了。", en: "It's just I'm a bit nervous — the rent is so expensive." },
            { speaker: "小王 (Xiǎo Wáng)", l1: "哎呀，上海是贵。不过机会很好。", en: "Oh, Shanghai is expensive. But it's a great opportunity." },
            { speaker: "小李 (Xiǎo Lǐ)", l1: "对啊，所以我决定去。", en: "Yeah, that's why I decided to go." },
            { speaker: "小王 (Xiǎo Wáng)", l1: "厉害！加油，我支持你。", en: "Awesome! Go for it, I support you." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "React naturally",
          questions: [
            {
              q: "Your friend says they got into their dream university. You react:",
              qL1: "朋友说考上了理想的大学。你说：",
              options: ["不好意思！", "太好了！", "差不多。", "随便。"],
              correct: 1,
              fb: "太好了！(tài hǎo le) = great! — the natural celebratory reaction.",
            },
            {
              q: "How do you say 'too expensive!'?",
              options: ["太贵了", "太好了", "太累了", "太忙了"],
              correct: 0,
              fb: "太 + 贵 (expensive) + 了 = 太贵了, 'too expensive!'",
            },
            {
              q: "You need a moment to think mid-sentence. You naturally say:",
              options: ["真的吗？", "那个…", "厉害！", "对不起。"],
              correct: 1,
              fb: "那个… is the standard spoken filler while you gather your thoughts.",
            },
            {
              q: "Your friend just fixed your computer in two minutes. You say:",
              options: ["哎呀", "厉害", "随便", "没关系"],
              correct: 1,
              fb: "厉害 (lìhai) praises impressive skill or ability.",
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Really?! That's great! But it's too expensive.",
          reference: "真的吗？太好了！不过太贵了。",
          hint: "真的吗? + 太好了! + 不过 (but) + 太贵了.",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "Which is the light 'excuse me / sorry to bother you'?",
              options: ["对不起", "不好意思", "差不多", "随便"],
              correct: 1,
            },
            {
              q: "'太贵了' means…",
              options: ["very cheap", "too expensive", "good enough", "really?"],
              correct: 1,
            },
            {
              q: "Your friend is nervous before a test. You encourage them with:",
              options: ["随便！", "差不多。", "加油！", "是吗？"],
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
        q: "'加油!' literally means 'add oil'. It's used to mean…",
        options: ["fill up the car", "come on, you can do it!", "I'm hungry", "let's eat"],
        correct: 1,
      },
      {
        q: "Someone apologizes to you. The standard reassuring reply is:",
        options: ["加油!", "没关系。", "太贵了。", "真的吗?"],
        correct: 1,
      },
      {
        q: "Which would you use for a genuine apology (you broke their cup)?",
        options: ["不好意思", "对不起", "随便", "差不多"],
        correct: 1,
      },
      {
        q: "'随便' means…",
        options: ["definitely", "whatever / up to you", "never", "too much"],
        correct: 1,
      },
      {
        q: "'差不多' means…",
        options: ["completely different", "more or less / about", "very expensive", "don't worry"],
        correct: 1,
      },
      {
        q: "'那个…' said mid-sentence functions as…",
        options: ["a real apology", "an um/filler while thinking", "a cheer", "a goodbye"],
        correct: 1,
      },
      {
        q: "Your friend got a promotion. The natural reaction is:",
        options: ["太好了!", "对不起。", "辛苦了。", "看情况。"],
        correct: 0,
      },
      {
        q: "'辛苦了' is said to…",
        options: [
          "wish someone good luck",
          "acknowledge someone's hard work",
          "apologize",
          "ask the time",
        ],
        correct: 1,
      },
      {
        q: "To slip past someone in a crowded subway, you say:",
        options: ["对不起", "不好意思", "加油", "厉害"],
        correct: 1,
      },
      {
        q: "Translate: 'Don't worry, take it slow, you can do it!'",
        options: [
          "别担心，慢慢来，你可以的！",
          "没关系，差不多，随便！",
          "对不起，太贵了，真的吗？",
          "加油，辛苦了，看情况！",
        ],
        correct: 0,
      },
    ],
  },
};
