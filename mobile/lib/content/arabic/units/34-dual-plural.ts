import type { Unit } from "../../types";

export const UNIT_DUAL_PLURAL: Unit = {
  slug: "dual-plural",
  stage: 8,
  order: 34,
  icon: "🤔",
  title: "The dual & broken plurals",
  tagline: "The dual (-ān/-ayn) and sound vs broken plurals.",
  badge: "advanced",
  lessons: [
    {
      slug: "dual-plural-the-dual",
      title: "The dual — exactly two",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Arabic counts to two on its own",
          body: [
            "English has singular and plural. Arabic has a third number in between: the <strong>dual</strong> (المُثَنَّى), used for <em>exactly two</em> of something. You never say \"two books\" with a number — the noun itself carries the \"two\".",
            "Form the dual by adding a suffix to the singular. In the subject position (nominative) it is <strong>ـانِ (-āni)</strong>: كِتابٌ <em>kitāb</em> (a book) → كِتابانِ <em>kitābān(i)</em> (two books).",
            "Everywhere else (object, after a preposition) it becomes <strong>ـيْنِ (-ayni)</strong>: رأيتُ كِتابَيْنِ <em>raʾaytu kitābayn(i)</em> = \"I saw two books\".",
            "It works for masculine and feminine, and it is fully regular — the same two endings on <em>every</em> noun. The dual also drives agreement: \"the two big books\" makes the adjective dual too.",
          ],
          keyPoint:
            "Dual = exactly two. Subject form ـانِ (-ān): kitābān = two books. Object/after preposition ـيْنِ (-ayn): kitābayn. Same endings on every noun.",
        },
        {
          type: "vocab",
          heading: "Singular → dual",
          intro: "The nominative (subject) dual is shown; swap ـانِ for ـيْنِ as an object.",
          items: [
            { l1: "كِتابٌ ← كِتابانِ", en: "a book → two books", note: "kitāb → kitābān" },
            { l1: "وَلَدٌ ← وَلَدانِ", en: "a boy → two boys", note: "walad → waladān" },
            { l1: "بِنْتٌ ← بِنْتانِ", en: "a girl → two girls", note: "bint → bintān (fem. tā stays)" },
            { l1: "يَدٌ ← يَدانِ", en: "a hand → two hands", note: "yad → yadān (natural pair)" },
            { l1: "يَوْمٌ ← يَوْمانِ", en: "a day → two days", note: "yawm → yawmān" },
            { l1: "ساعَةٌ ← ساعَتانِ", en: "an hour → two hours", note: "sāʿa → sāʿatān (tā opens to t before the ending)" },
          ],
        },
        {
          type: "tip",
          heading: "Words that come in natural pairs",
          body: "Body parts that come in twos — <strong>عَيْنانِ</strong> (two eyes), <strong>يَدانِ</strong> (two hands), <strong>رِجْلانِ</strong> (two legs) — are heard in the dual all the time. When a feminine ة (tā marbūṭa) takes the dual, it 'opens' to a full ت: ساعة → ساعَتانِ.",
          example: { l1: "عِنْدي عَيْنانِ ويَدانِ.", en: "I have two eyes and two hands." },
        },
        {
          type: "fillBlank",
          heading: "Make it dual",
          items: [
            {
              template: "عندي ___ في حقيبتي. (كِتاب)",
              answer: "كِتابانِ",
              en: "I have two books in my bag.",
              options: ["كِتابانِ", "كُتُبٌ", "كِتابٌ", "كِتابَيْنِ"],
            },
            {
              template: "اِشْتَرَيْتُ ___ من السوق. (كِتاب — object!)",
              answer: "كِتابَيْنِ",
              en: "I bought two books from the market.",
              options: ["كِتابَيْنِ", "كِتابانِ", "كُتُبٌ", "كِتابٌ"],
            },
            {
              template: "في الصورة ___ صغيرانِ. (وَلَد)",
              answer: "وَلَدانِ",
              en: "In the photo there are two small boys.",
              options: ["وَلَدانِ", "أَوْلادٌ", "وَلَدٌ", "وَلَدَيْنِ"],
            },
            {
              template: "اِنْتَظَرْتُ ___. (ساعة — object!)",
              answer: "ساعَتَيْنِ",
              en: "I waited two hours.",
              options: ["ساعَتَيْنِ", "ساعَتانِ", "ساعاتٌ", "ساعةٌ"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "I have two books and two hours.",
          reference: "عِنْدي كِتابانِ وساعَتانِ.",
          hint: "Both are subjects, so use the ـانِ (-ān) ending on both nouns.",
        },
      ],
    },
    {
      slug: "dual-plural-sound-plurals",
      title: "Sound plurals — regular endings",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "The 'sound' plurals just add an ending",
          body: [
            "Some plurals are <strong>sound</strong> (سالِم) — the singular stays intact and you simply add a suffix. There are two:",
            "<strong>Sound masculine plural</strong> — for many male humans (jobs, nationalities): subject form <strong>ـونَ (-ūna)</strong>, object/oblique <strong>ـينَ (-īna)</strong>. مُعَلِّمٌ <em>muʿallim</em> (teacher) → مُعَلِّمونَ <em>muʿallimūn</em> / مُعَلِّمينَ <em>muʿallimīn</em>.",
            "<strong>Sound feminine plural</strong> — for many feminine nouns and abstracts: replace the ة with <strong>ـاتٌ (-āt)</strong>. مُعَلِّمةٌ <em>muʿallima</em> → مُعَلِّماتٌ <em>muʿallimāt</em>; ساعةٌ <em>sāʿa</em> → ساعاتٌ <em>sāʿāt</em>.",
            "These are predictable. The catch is knowing <em>which</em> nouns take a sound plural and which take a broken one — that's the next lesson.",
          ],
          keyPoint:
            "Sound masc. plural ـونَ/ـينَ (mostly male humans): muʿallimūn. Sound fem. plural ـاتٌ (drop ة, add -āt): muʿallimāt, sāʿāt.",
        },
        {
          type: "vocab",
          heading: "Sound plurals",
          intro: "Masculine ـونَ for people; feminine ـاتٌ replacing the ة.",
          items: [
            { l1: "مُعَلِّمٌ ← مُعَلِّمونَ", en: "teacher (m) → teachers", note: "muʿallim → muʿallimūn (sound masc.)" },
            { l1: "مُهَنْدِسٌ ← مُهَنْدِسونَ", en: "engineer → engineers", note: "muhandis → muhandisūn" },
            { l1: "مِصْرِيٌّ ← مِصْرِيّونَ", en: "Egyptian → Egyptians", note: "miṣrī → miṣriyyūn" },
            { l1: "مُعَلِّمةٌ ← مُعَلِّماتٌ", en: "teacher (f) → teachers", note: "muʿallima → muʿallimāt (sound fem.)" },
            { l1: "ساعةٌ ← ساعاتٌ", en: "hour → hours", note: "sāʿa → sāʿāt" },
            { l1: "سيّارةٌ ← سيّاراتٌ", en: "car → cars", note: "sayyāra → sayyārāt" },
          ],
        },
        {
          type: "conjugation",
          heading: "The two sound-plural patterns side by side",
          verb: "ـونَ / ـاتٌ",
          meaning: "sound plural endings",
          intro:
            "Think of this as a 'pattern table': the masculine adds ـونَ (subject) or ـينَ (object); the feminine swaps ة for ـاتٌ.",
          tenses: [
            {
              name: "Sound masculine (people)",
              forms: [
                { person: "singular", form: "مُهَنْدِسٌ", en: "engineer" },
                { person: "plural (subject)", form: "مُهَنْدِسونَ", en: "engineers (muhandisūn)" },
                { person: "plural (object)", form: "مُهَنْدِسينَ", en: "engineers (muhandisīn)" },
              ],
            },
            {
              name: "Sound feminine",
              forms: [
                { person: "singular", form: "سيّارةٌ", en: "car" },
                { person: "plural", form: "سيّاراتٌ", en: "cars (sayyārāt)" },
                { person: "singular", form: "جامِعةٌ", en: "university" },
                { person: "plural", form: "جامِعاتٌ", en: "universities (jāmiʿāt)" },
              ],
            },
          ],
        },
        {
          type: "fillBlank",
          heading: "Choose the sound plural",
          items: [
            {
              template: "في المدرسة ___ كثيرون. (مُعَلِّم)",
              answer: "مُعَلِّمونَ",
              en: "In the school there are many teachers.",
              options: ["مُعَلِّمونَ", "مُعَلِّمٌ", "مُعَلِّماتٌ", "مُعَلِّمانِ"],
            },
            {
              template: "هذه ___ جديدة. (سيّارة)",
              answer: "سيّاراتٌ",
              en: "These are new cars.",
              options: ["سيّاراتٌ", "سيّارتانِ", "سيّارةٌ", "سيّارونَ"],
            },
            {
              template: "نحن ___ من القاهرة. (مِصْرِيّ)",
              answer: "مِصْرِيّونَ",
              en: "We are Egyptians from Cairo.",
              options: ["مِصْرِيّونَ", "مِصْرِيٌّ", "مِصْرِيّاتٌ", "مِصْرِيّانِ"],
            },
            {
              template: "في القاهرة ___ كبيرة كثيرة. (جامعة)",
              answer: "جامِعاتٌ",
              en: "In Cairo there are many big universities.",
              options: ["جامِعاتٌ", "جامِعتانِ", "جامِعةٌ", "جامِعونَ"],
            },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Lesson check",
          questions: [
            {
              q: "The sound masculine plural ending (subject form) is…",
              options: ["ـاتٌ", "ـونَ", "ـانِ", "ـيْنِ"],
              correct: 1,
              fb: "ـونَ (-ūna) in the subject position; it shifts to ـينَ (-īna) as an object.",
            },
            {
              q: "To make a sound feminine plural you…",
              options: [
                "double the last letter",
                "drop the ة and add ـاتٌ",
                "add اِسْتَـ at the front",
                "add ـانِ",
              ],
              correct: 1,
            },
            {
              q: "Which word takes a sound plural here?",
              options: [
                "مُعَلِّمة → مُعَلِّماتٌ",
                "كِتاب → كُتُب",
                "بيت → بُيوت",
                "وَلَد → أَوْلاد",
              ],
              correct: 0,
              fb: "muʿallima → muʿallimāt is sound; the other three are broken plurals (next lesson).",
            },
          ],
        },
      ],
    },
    {
      slug: "dual-plural-broken-plurals",
      title: "Broken plurals — learn them per word",
      estMinutes: 10,
      pages: [
        {
          type: "intro",
          heading: "The plurals that rearrange the word",
          body: [
            "Most everyday Arabic nouns take a <strong>broken plural</strong> (جَمْعُ التَّكْسير) — the word's internal vowels are 'broken up' and rebuilt on a new pattern, like English <em>man → men</em> but far more common.",
            "كِتابٌ <em>kitāb</em> (book) → كُتُبٌ <em>kutub</em> (books). وَلَدٌ <em>walad</em> (boy) → أَوْلادٌ <em>awlād</em> (boys). بَيْتٌ <em>bayt</em> (house) → بُيوتٌ <em>buyūt</em> (houses).",
            "There are recurring shapes — <em>fuʿūl</em> (buyūt), <em>fuʿul</em> (kutub), <em>afʿāl</em> (awlād) — so they're not random, but there's no reliable rule for which noun takes which. <strong>You learn the plural together with the singular</strong>, the way you learned French noun genders.",
            "Good news: a broken-plural noun referring to non-humans (objects) is treated grammatically as <em>feminine singular</em> for agreement — \"the books, it is new\". That one rule saves a lot of memorising.",
          ],
          tip: {
            label: "How to study them",
            body: "Whenever you meet a new noun, write the singular and plural as a pair from day one: <em>kitāb / kutub</em>, <em>bayt / buyūt</em>. By B1 the common ones become automatic, and you start to <strong>guess</strong> new plurals by their shape.",
          },
          keyPoint:
            "Broken plurals rebuild the word on a new pattern (kitāb→kutub, walad→awlād, bayt→buyūt). No firm rule — learn singular + plural as a pair. Non-human plurals agree as feminine singular.",
        },
        {
          type: "vocab",
          heading: "Common broken plurals",
          intro: "Memorise each pair. The pattern label is in the note.",
          items: [
            { l1: "كِتابٌ ← كُتُبٌ", en: "book → books", note: "kitāb → kutub · pattern fuʿul" },
            { l1: "بَيْتٌ ← بُيوتٌ", en: "house → houses", note: "bayt → buyūt · pattern fuʿūl" },
            { l1: "وَلَدٌ ← أَوْلادٌ", en: "boy → boys/children", note: "walad → awlād · pattern afʿāl" },
            { l1: "رَجُلٌ ← رِجالٌ", en: "man → men", note: "rajul → rijāl · pattern fiʿāl" },
            { l1: "مَدينةٌ ← مُدُنٌ", en: "city → cities", note: "madīna → mudun · pattern fuʿul" },
            { l1: "قَلَمٌ ← أَقْلامٌ", en: "pen → pens", note: "qalam → aqlām · pattern afʿāl" },
            { l1: "صَديقٌ ← أَصْدِقاءُ", en: "friend → friends", note: "ṣadīq → aṣdiqāʾ · pattern afʿilāʾ" },
            { l1: "سوقٌ ← أَسْواقٌ", en: "market → markets", note: "sūq → aswāq · pattern afʿāl" },
          ],
        },
        {
          type: "conjugation",
          heading: "Pattern table: singular → broken plural",
          verb: "جَمْعُ التَّكْسير",
          meaning: "broken plurals by pattern",
          intro:
            "Group the nouns by their plural shape so the patterns start to feel familiar. Read each as singular → plural.",
          tenses: [
            {
              name: "Pattern أَفْعال (afʿāl)",
              forms: [
                { person: "وَلَد", form: "أَوْلاد", en: "boy → boys" },
                { person: "قَلَم", form: "أَقْلام", en: "pen → pens" },
                { person: "سوق", form: "أَسْواق", en: "market → markets" },
              ],
            },
            {
              name: "Pattern فُعول (fuʿūl)",
              forms: [
                { person: "بَيْت", form: "بُيوت", en: "house → houses" },
                { person: "قَلْب", form: "قُلوب", en: "heart → hearts" },
                { person: "دَرْس", form: "دُروس", en: "lesson → lessons" },
              ],
            },
            {
              name: "Pattern فُعُل / فِعال (fuʿul / fiʿāl)",
              forms: [
                { person: "كِتاب", form: "كُتُب", en: "book → books (fuʿul)" },
                { person: "مَدينة", form: "مُدُن", en: "city → cities (fuʿul)" },
                { person: "رَجُل", form: "رِجال", en: "man → men (fiʿāl)" },
              ],
            },
          ],
        },
        {
          type: "fillBlank",
          heading: "Recall the broken plural",
          items: [
            {
              template: "في حقيبتي ثلاثةُ ___. (كِتاب)",
              answer: "كُتُبٍ",
              en: "In my bag there are three books.",
              options: ["كُتُبٍ", "كِتاباتٍ", "كِتابانِ", "كِتابونَ"],
            },
            {
              template: "القاهرة من أكبر ___ العربية. (مدينة)",
              answer: "مُدُنِ",
              en: "Cairo is one of the biggest Arab cities.",
              options: ["مُدُنِ", "مَديناتِ", "مَدينتَيْنِ", "مَدينونَ"],
            },
            {
              template: "هؤلاء ___ طيّبون. (رَجُل)",
              answer: "رِجالٌ",
              en: "These are good men.",
              options: ["رِجالٌ", "رَجُلونَ", "رَجُلاتٌ", "رَجُلانِ"],
            },
            {
              template: "زُرْنا كلَّ ___ خانِ الخليلي. (سوق)",
              answer: "أَسْواقِ",
              en: "We visited all the markets of Khan el-Khalili.",
              options: ["أَسْواقِ", "سوقاتِ", "سوقَيْنِ", "سوقونَ"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Cairo has old houses, big markets, and many books.",
          reference: "في القاهرة بُيوتٌ قديمةٌ وأَسْواقٌ كبيرةٌ وكُتُبٌ كثيرةٌ.",
          hint: "Use the broken plurals بُيوت (houses), أَسْواق (markets), كُتُب (books). Non-human plurals take feminine-singular adjectives.",
        },
        {
          type: "multipleChoice",
          heading: "Lesson check",
          questions: [
            {
              q: "What makes a plural 'broken'?",
              options: [
                "you only add an ending",
                "the word's internal vowels are rearranged onto a new pattern",
                "it means exactly two",
                "it is always feminine",
              ],
              correct: 1,
            },
            {
              q: "The plural of بَيْت (bayt, house) is…",
              options: ["بَيْتاتٌ", "بُيوتٌ", "بَيْتونَ", "بَيْتانِ"],
              correct: 1,
            },
            {
              q: "How should you learn broken plurals?",
              options: [
                "with a single universal rule",
                "as a singular + plural pair, word by word",
                "only the singular is needed",
                "by reversing the letters",
              ],
              correct: 1,
            },
            {
              q: "A broken plural of non-human things agrees with adjectives as…",
              options: [
                "masculine plural",
                "feminine singular",
                "the dual",
                "it never takes adjectives",
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
        q: "The dual is used for…",
        options: ["one thing", "exactly two things", "three or more", "uncountable things"],
        correct: 1,
      },
      {
        q: "The subject-form dual ending is…",
        options: ["ـونَ", "ـاتٌ", "ـانِ", "ـيْنِ"],
        correct: 2,
      },
      {
        q: "'Two books' (as the object of a verb) is…",
        options: ["كِتابانِ", "كِتابَيْنِ", "كُتُبٌ", "كِتابٌ"],
        correct: 1,
      },
      {
        q: "The sound masculine plural ـونَ is used mostly for…",
        options: ["objects", "male human nouns (jobs, nationalities)", "feminine nouns", "the dual"],
        correct: 1,
      },
      {
        q: "The sound feminine plural is formed by…",
        options: ["adding ـانِ", "dropping ة and adding ـاتٌ", "doubling the last letter", "adding اِسْتَـ"],
        correct: 1,
      },
      {
        q: "Which is a SOUND plural?",
        options: ["كِتاب → كُتُب", "وَلَد → أَوْلاد", "سيّارة → سيّارات", "بيت → بُيوت"],
        correct: 2,
      },
      {
        q: "The plural of كِتاب (book) is…",
        options: ["كِتابات", "كُتُب", "كِتابون", "كِتابان"],
        correct: 1,
      },
      {
        q: "The plural of وَلَد (boy) is…",
        options: ["أَوْلاد", "وَلَدون", "وَلَدات", "وُلود"],
        correct: 0,
      },
      {
        q: "The best way to learn broken plurals is…",
        options: [
          "memorise singular + plural together, per word",
          "use one rule for all nouns",
          "never use the plural",
          "always add ـاتٌ",
        ],
        correct: 0,
      },
      {
        q: "A broken plural referring to objects (non-humans) agrees with its adjective as…",
        options: ["masculine plural", "feminine singular", "dual", "masculine singular"],
        correct: 1,
      },
    ],
  },
};
