import type { Unit } from "../../types";

export const UNIT_PINYIN_TONES: Unit = {
  slug: "pinyin-tones",
  stage: 1,
  order: 1,
  icon: "🔤",
  title: "Pinyin & tones",
  tagline: "The pinyin system, the 4 tones + neutral, initials & finals.",
  badge: "core",
  lessons: [
    {
      slug: "pinyin-tones-four-tones",
      title: "Pinyin and the four tones",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Pinyin is your map to the sounds",
          body: [
            "Chinese characters don't spell out their sounds. To learn pronunciation, China uses <strong>pinyin</strong> — a system that writes Mandarin sounds with the Latin alphabet you already know. Every character has a pinyin reading.",
            "Pinyin has three parts: an <strong>initial</strong> (the opening consonant), a <strong>final</strong> (the vowel part), and a <strong>tone</strong> (the pitch). For example <em>hǎo</em> = initial <em>h</em> + final <em>ao</em> + third tone.",
            "The tone is not optional decoration — it is part of the word. The same syllable said with a different pitch is a completely different word.",
          ],
          tip: {
            label: "Why bother with pinyin",
            body: "Pinyin is how you'll type Chinese on any phone or keyboard: you type <em>nihao</em>, pick the characters <em>你好</em>. Master pinyin now and everything else gets easier.",
          },
        },
        {
          type: "intro",
          heading: "The four tones, on one syllable: ma",
          body: [
            "Mandarin has <strong>four tones</strong> plus a neutral tone. Listen to one syllable, <em>ma</em>, take on four different meanings purely by pitch:",
            "<strong>First tone (mā)</strong> — high and flat, like holding a note: 妈 = mother.",
            "<strong>Second tone (má)</strong> — rising, like asking \"huh?\": 麻 = hemp / numb.",
            "<strong>Third tone (mǎ)</strong> — dipping down then up: 马 = horse.",
            "<strong>Fourth tone (mà)</strong> — sharp falling, like a firm \"No!\": 骂 = to scold.",
          ],
          keyPoint:
            "1st = high flat (mā), 2nd = rising (má), 3rd = dip down-up (mǎ), 4th = sharp falling (mà). Same sound, four meanings.",
        },
        {
          type: "pronounce",
          heading: "Say the four tones",
          intro: "Exaggerate the pitch at first — it's easier to soften later than to add tone in.",
          items: [
            { l1: "妈", en: "mother", tip: "mā — first tone, high and level, no movement." },
            { l1: "麻", en: "hemp / numb", tip: "má — second tone, rising like a question." },
            { l1: "马", en: "horse", tip: "mǎ — third tone, dip down then back up." },
            { l1: "骂", en: "to scold", tip: "mà — fourth tone, fall sharply and firmly." },
          ],
        },
        {
          type: "vocab",
          heading: "Tones change meaning — real pairs",
          intro: "These are everyday words. The only difference is the tone.",
          items: [
            { l1: "买", en: "to buy", note: "pīnyīn: mǎi (third tone)" },
            { l1: "卖", en: "to sell", note: "pīnyīn: mài (fourth tone)" },
            { l1: "汤", en: "soup", note: "pīnyīn: tāng (first tone)" },
            { l1: "糖", en: "sugar / candy", note: "pīnyīn: táng (second tone)" },
            { l1: "睡觉", en: "to sleep", note: "pīnyīn: shuìjiào" },
            { l1: "水饺", en: "boiled dumplings", note: "pīnyīn: shuǐjiǎo; same sounds, different tones" },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Quick check",
          questions: [
            {
              q: "Which tone is high and flat, with no movement?",
              options: ["First tone (mā)", "Second tone (má)", "Third tone (mǎ)", "Fourth tone (mà)"],
              correct: 0,
              fb: "First tone holds a steady high pitch, like singing one note.",
            },
            {
              q: "The third tone (mǎ) does what?",
              options: ["Rises steadily", "Falls sharply", "Dips down then rises", "Stays flat"],
              correct: 2,
              fb: "Third tone dips low then comes back up — a little valley.",
            },
            {
              q: "What is pinyin used for?",
              options: [
                "Replacing characters in newspapers",
                "Writing the sounds of Mandarin and typing on keyboards",
                "An ancient form of Chinese",
                "Only for foreigners, never used in China",
              ],
              correct: 1,
              fb: "Pinyin spells the sounds and is how everyone types Chinese on devices.",
            },
          ],
        },
      ],
    },
    {
      slug: "pinyin-tones-initials",
      title: "Initials: the opening consonants",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Initials are the consonants that start a syllable",
          body: [
            "Most of the initials are close to English: <em>b, p, m, f, d, t, n, l, g, k, h</em>. A few groups need attention because they don't quite line up with English.",
            "The trickiest are two sets that sound similar to English ears: the <strong>zh / ch / sh / r</strong> group (tongue curled back) and the <strong>j / q / x</strong> group (tongue flat, smiling).",
            "Note that pinyin <strong>b, d, g</strong> are not voiced like in English — they're more like a soft 'p', 't', 'k'. And pinyin <strong>p, t, k</strong> are the same sounds but with a strong puff of air.",
          ],
          keyPoint:
            "b/p, d/t, g/k differ by the puff of air, not by voicing. zh/ch/sh curl the tongue back; j/q/x keep it flat.",
        },
        {
          type: "pronounce",
          heading: "b / p / m / f — and the air puff",
          intro: "Hold a tissue to your mouth: p, t, k should make it flutter; b, d, g should not.",
          items: [
            { l1: "爸爸", en: "dad", tip: "bàba — soft 'b', no puff of air." },
            { l1: "怕", en: "to fear", tip: "pà — strong puff of air on the 'p'." },
            { l1: "妈妈", en: "mom", tip: "māma — 'm' just like English." },
            { l1: "饭", en: "rice / meal", tip: "fàn — 'f' just like English." },
          ],
        },
        {
          type: "pronounce",
          heading: "zh / ch / sh — curl the tongue back",
          intro: "Pull the tip of your tongue up and back toward the roof of your mouth.",
          items: [
            { l1: "中", en: "middle / China", tip: "zhōng — like 'j' in 'jug' but tongue curled back." },
            { l1: "吃", en: "to eat", tip: "chī — like 'ch' in 'church', tongue curled back." },
            { l1: "是", en: "to be (am/is/are)", tip: "shì — like 'sh' in 'shoe', tongue curled back." },
            { l1: "热", en: "hot", tip: "rè — like the 'r' in 'rouge', tongue curled back." },
          ],
        },
        {
          type: "pronounce",
          heading: "j / q / x — flat tongue, big smile",
          intro: "Keep the tongue tip down behind your bottom teeth and spread your lips.",
          items: [
            { l1: "鸡", en: "chicken", tip: "jī — like 'j' but flat tongue, lips smiling." },
            { l1: "七", en: "seven", tip: "qī — a breathy 'ch', flat tongue ('chee' with air)." },
            { l1: "西", en: "west", tip: "xī — like a soft 'sh'/'s' blend, flat tongue ('shee')." },
            { l1: "谢谢", en: "thank you", tip: "xièxie — practice the 'x' sound twice." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Tell the groups apart",
          questions: [
            {
              q: "What separates pinyin 'b' from pinyin 'p'?",
              options: [
                "'b' is voiced, 'p' is silent",
                "'p' has a strong puff of air, 'b' does not",
                "Nothing, they're identical",
                "'b' is a tone, 'p' is a consonant",
              ],
              correct: 1,
              fb: "Both are unvoiced; 'p' adds a strong puff of air (aspiration).",
            },
            {
              q: "For zh / ch / sh, your tongue should be…",
              options: ["Flat behind the teeth", "Curled up and back", "Sticking out", "Pressed to your lips"],
              correct: 1,
              fb: "zh/ch/sh/r are retroflex — tongue curls back toward the roof.",
            },
            {
              q: "Which set is pronounced with a flat tongue and smiling lips?",
              options: ["b / p / m", "zh / ch / sh", "j / q / x", "g / k / h"],
              correct: 2,
              fb: "j/q/x keep the tongue flat and low with spread lips.",
            },
          ],
        },
      ],
    },
    {
      slug: "pinyin-tones-finals-sandhi",
      title: "Finals and tone changes",
      estMinutes: 10,
      pages: [
        {
          type: "intro",
          heading: "Finals are the vowel part of the syllable",
          body: [
            "After the initial comes the <strong>final</strong>: <em>a, o, e, i, u, ü</em> and combinations like <em>-an, -ang, -ian, -ong</em>. Most are steady, clear vowels.",
            "Watch the difference between <strong>-an</strong> (ends with tongue tip up, like 'an' in 'ban') and <strong>-ang</strong> (ends in the back of the throat, like 'ahng'). Same for <em>-en</em> vs <em>-eng</em>, <em>-in</em> vs <em>-ing</em>.",
            "The special vowel <strong>ü</strong> (as in <em>nǚ</em>, woman) is made by saying 'ee' then rounding your lips. After j, q, x it's written without the dots (ju, qu, xu) but still sounds like ü.",
          ],
          keyPoint:
            "-n endings are crisp and forward; -ng endings hum in the back of the throat. ü = say 'ee' with rounded lips.",
        },
        {
          type: "pronounce",
          heading: "Finals to practice",
          intro: "Listen for where each one ends — front of the mouth or back of the throat.",
          items: [
            { l1: "饭", en: "rice / meal", tip: "fàn — '-an' ends crisp and forward." },
            { l1: "忙", en: "busy", tip: "máng — '-ang' hums in the back, 'mahng'." },
            { l1: "天", en: "sky / day", tip: "tiān — '-ian' sounds like 'tyen'." },
            { l1: "女", en: "woman", tip: "nǚ — the ü: say 'nee' then round your lips." },
            { l1: "去", en: "to go", tip: "qù — written 'qu' but it's the ü sound, 'chü'." },
          ],
        },
        {
          type: "tip",
          heading: "Tone sandhi: third + third",
          body: "When <strong>two third tones</strong> come together, the first one changes to a second (rising) tone. So <em>nǐ hǎo</em> (你好) is actually said <em>ní hǎo</em>. You still <strong>write</strong> both as third tone, but you say the first as rising.",
          example: { l1: "你好", en: "hello — written nǐ hǎo, spoken ní hǎo" },
        },
        {
          type: "tip",
          heading: "The shifting tones of 不 (bù) and 一 (yī)",
          body: "<strong>不 (bù)</strong> is normally fourth tone, but before another fourth tone it becomes second tone: <em>bú shì</em> (不是, is not). <strong>一 (yī)</strong> is first tone alone, becomes fourth before most syllables (<em>yì zhāng</em>, 一张) and second before a fourth tone (<em>yí gè</em>, 一个).",
          example: { l1: "不是", en: "is not — bù becomes bú: bú shì" },
        },
        {
          type: "fillBlank",
          heading: "How is it actually said?",
          intro: "Choose the spoken tone after sandhi applies.",
          items: [
            {
              template: "你好 is written nǐ hǎo but spoken ___ hǎo.",
              answer: "ní",
              en: "hello (third + third → first becomes rising)",
              options: ["nì", "ní", "nī", "ni"],
            },
            {
              template: "不是 is spoken ___ shì.",
              answer: "bú",
              en: "is not (bù before a fourth tone becomes second)",
              options: ["bù", "bú", "bǔ", "bu"],
            },
            {
              template: "一个 is spoken ___ gè.",
              answer: "yí",
              en: "one (item) — yī before a fourth tone becomes second",
              options: ["yī", "yì", "yí", "yǐ"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Hello!",
          reference: "你好！",
          hint: "Two third-tone syllables; written nǐ hǎo, said ní hǎo.",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "When two third tones meet, the first becomes…",
              options: ["First tone", "Second (rising) tone", "Fourth tone", "Neutral"],
              correct: 1,
            },
            {
              q: "The ü sound is made by…",
              options: [
                "Saying 'oo' and unrounding",
                "Saying 'ee' then rounding the lips",
                "A regular English 'u'",
                "Humming in the throat",
              ],
              correct: 1,
            },
            {
              q: "Before a fourth tone, 不 (bù) becomes…",
              options: ["First tone", "Second tone (bú)", "Third tone", "Neutral"],
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
        q: "What is pinyin?",
        options: [
          "A set of characters",
          "A system that writes Mandarin sounds in the Latin alphabet",
          "A dialect of Chinese",
          "A tone",
        ],
        correct: 1,
      },
      {
        q: "Which describes the first tone (mā)?",
        options: ["Rising", "High and flat", "Dipping", "Falling"],
        correct: 1,
      },
      {
        q: "Which describes the fourth tone (mà)?",
        options: ["High and flat", "Rising", "Dipping down-up", "Sharp falling"],
        correct: 3,
      },
      {
        q: "马 (mǎ) means 'horse'. What tone is it?",
        options: ["First", "Second", "Third", "Fourth"],
        correct: 2,
      },
      {
        q: "What separates pinyin 'p' from 'b'?",
        options: ["Voicing", "A strong puff of air on 'p'", "The tone", "Nothing"],
        correct: 1,
      },
      {
        q: "For zh / ch / sh the tongue is…",
        options: ["Flat and forward", "Curled up and back", "Stuck out", "On the lips"],
        correct: 1,
      },
      {
        q: "j / q / x are pronounced with…",
        options: ["A curled-back tongue", "A flat tongue and smiling lips", "Rounded lips only", "No tongue contact"],
        correct: 1,
      },
      {
        q: "你好 (nǐ hǎo) is actually spoken as…",
        options: ["nì hào", "ní hǎo", "nī hāo", "nǐ hào"],
        correct: 1,
      },
      {
        q: "The final '-ang' (as in máng) ends…",
        options: ["Crisp at the front", "Humming in the back of the throat", "Silent", "With rounded lips"],
        correct: 1,
      },
      {
        q: "不是 ('is not') is spoken as…",
        options: ["bù shì", "bú shì", "bǔ shì", "bu shi"],
        correct: 1,
      },
    ],
  },
};
