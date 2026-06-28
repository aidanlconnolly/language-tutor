import type { Unit } from "../../types";

export const UNIT_COMPARATIVES: Unit = {
  slug: "comparatives",
  stage: 7,
  order: 32,
  icon: "✍️",
  title: "Describing & comparing",
  tagline: "Adjective agreement, colours, the comparative (afʿal).",
  badge: "core",
  lessons: [
    {
      slug: "comparatives-adjective-agreement",
      title: "Adjectives agree in gender",
      summary: "kabīr/kabīra, plus the colours aḥmar/ḥamrāʾ.",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Adjectives match the noun's gender",
          body: [
            "In Arabic, an adjective agrees with its noun in gender. For a masculine noun the adjective is plain; for a feminine noun you usually add the feminine ending <strong>ة</strong> (<em>-a</em>, the tāʾ marbūṭa).",
            "So <strong>kabīr</strong> (big) becomes <strong>kabīra</strong> for a feminine noun: <em>walad kabīr</em> (a big boy) but <em>bint kabīra</em> (a big girl).",
            "Colours follow a special pattern. Many basic colours use the masculine shape <strong>afʿal</strong> and a feminine shape <strong>faʿlāʾ</strong>: <em>aḥmar</em> (red, m.) → <em>ḥamrāʾ</em> (red, f.); <em>azraq</em> (blue, m.) → <em>zarqāʾ</em> (blue, f.).",
          ],
          keyPoint:
            "Masculine noun → plain adjective; feminine noun → add -a (ة). Colours: masc. afʿal (aḥmar) / fem. faʿlāʾ (ḥamrāʾ).",
        },
        {
          type: "vocab",
          heading: "Adjectives & colours (m. / f.)",
          items: [
            { l1: "كَبير / كَبيرة", en: "big (m. / f.)", note: "transliteration: kabīr / kabīra." },
            { l1: "صَغير / صَغيرة", en: "small (m. / f.)", note: "transliteration: ṣaghīr / ṣaghīra." },
            { l1: "جَميل / جَميلة", en: "beautiful (m. / f.)", note: "transliteration: jamīl / jamīla." },
            { l1: "جَديد / جَديدة", en: "new (m. / f.)", note: "transliteration: jadīd / jadīda." },
            { l1: "أَحْمَر / حَمْراء", en: "red (m. / f.)", note: "transliteration: aḥmar / ḥamrāʾ; the afʿal/faʿlāʾ colour pattern." },
            { l1: "أَزْرَق / زَرْقاء", en: "blue (m. / f.)", note: "transliteration: azraq / zarqāʾ." },
            { l1: "أَخْضَر / خَضْراء", en: "green (m. / f.)", note: "transliteration: akhḍar / khaḍrāʾ." },
            { l1: "أَبْيَض / بَيْضاء", en: "white (m. / f.)", note: "transliteration: abyaḍ / bayḍāʾ." },
            { l1: "أَسْوَد / سَوْداء", en: "black (m. / f.)", note: "transliteration: aswad / sawdāʾ." },
          ],
        },
        {
          type: "tip",
          heading: "The colour pattern, spotted",
          body: "Notice the shape: masculine colours start with <strong>أ</strong> (alif, the 'a-' of <em>afʿal</em>) — <em>aḥmar, azraq, akhḍar</em> — while their feminines end in <strong>ـاء</strong> (-āʾ) — <em>ḥamrāʾ, zarqāʾ, khaḍrāʾ</em>. Recognising this pair means you can predict most basic colour forms.",
          example: { l1: "سَيّارَة حَمْراء", en: "a red car (sayyāra is feminine)" },
        },
        {
          type: "fillBlank",
          heading: "Make the adjective agree",
          intro: "Pick the form that matches the noun's gender.",
          items: [
            {
              template: "وَلَد ___ .",
              answer: "كَبير",
              en: "a big boy",
              options: ["كَبير", "كَبيرة", "حَمْراء", "زَرْقاء"],
            },
            {
              template: "بِنْت ___ .",
              answer: "كَبيرة",
              en: "a big girl",
              options: ["كَبير", "كَبيرة", "أَزْرَق", "أَحْمَر"],
            },
            {
              template: "سَيّارَة ___ .",
              answer: "حَمْراء",
              en: "a red car (sayyāra is feminine)",
              options: ["أَحْمَر", "حَمْراء", "كَبير", "جَميل"],
            },
            {
              template: "كِتاب ___ .",
              answer: "أَزْرَق",
              en: "a blue book (kitāb is masculine)",
              options: ["أَزْرَق", "زَرْقاء", "كَبيرة", "بَيْضاء"],
            },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Agreement check",
          questions: [
            {
              q: "'A new house' — bayt is masculine. Choose:",
              options: ["bayt jadīda", "bayt jadīd", "bayt ḥamrāʾ", "bayt kabīra"],
              correct: 1,
            },
            {
              q: "'A beautiful girl' — bint is feminine. Choose:",
              options: ["bint jamīl", "bint jamīla", "bint aḥmar", "bint azraq"],
              correct: 1,
            },
            {
              q: "The feminine of 'aḥmar' (red) is:",
              options: ["aḥmara", "ḥamrāʾ", "ḥamīr", "aḥmarīn"],
              correct: 1,
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "A big girl and a red car.",
          reference: "بِنْت كَبيرة وَسَيّارَة حَمْراء.",
          hint: "bint and sayyāra are both feminine — use kabīra and ḥamrāʾ.",
        },
      ],
    },
    {
      slug: "comparatives-placement-definiteness",
      title: "Where the adjective goes",
      summary: "Adjective follows the noun and agrees in definiteness too.",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Adjective after the noun — and matching 'the'",
          body: [
            "Unlike English, the Arabic adjective comes <strong>after</strong> the noun: <em>bayt kabīr</em> = literally 'house big' = 'a big house'.",
            "The adjective also agrees in <strong>definiteness</strong>. If the noun has <em>al-</em> ('the'), the adjective must take <em>al-</em> too: <strong>al-bayt al-kabīr</strong> = 'the big house'.",
            "This matters because it changes the meaning. <em>al-bayt kabīr</em> (the house [is] big) — with no <em>al-</em> on the adjective — is a whole sentence: 'The house is big.' Add <em>al-</em> to both and it becomes a phrase: 'the big house'.",
          ],
          keyPoint:
            "Adjective follows the noun and matches its definiteness. al-bayt al-kabīr = 'the big house'; al-bayt kabīr = 'the house is big'.",
        },
        {
          type: "vocab",
          heading: "Phrases vs. sentences",
          items: [
            { l1: "بَيْت كَبير", en: "a big house (phrase)", note: "transliteration: bayt kabīr; both indefinite." },
            { l1: "الْبَيْت الْكَبير", en: "the big house (phrase)", note: "transliteration: al-bayt al-kabīr; both definite." },
            { l1: "الْبَيْت كَبير", en: "the house is big (sentence)", note: "transliteration: al-bayt kabīr; noun definite, adjective indefinite = a statement." },
            { l1: "السَّيّارَة الْحَمْراء", en: "the red car (phrase)", note: "transliteration: as-sayyāra al-ḥamrāʾ; both definite, both feminine." },
            { l1: "السَّيّارَة حَمْراء", en: "the car is red (sentence)", note: "transliteration: as-sayyāra ḥamrāʾ." },
            { l1: "كِتاب جَديد", en: "a new book (phrase)", note: "transliteration: kitāb jadīd." },
            { l1: "الْكِتاب الْجَديد", en: "the new book (phrase)", note: "transliteration: al-kitāb al-jadīd." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Phrase or sentence?",
          intro: "Complete so the English meaning matches.",
          items: [
            {
              template: "الْبَيْت ___ . (the big house)",
              answer: "الْكَبير",
              en: "the big house",
              options: ["الْكَبير", "كَبير", "كَبيرة", "الْحَمْراء"],
            },
            {
              template: "الْبَيْت ___ . (the house is big)",
              answer: "كَبير",
              en: "the house is big",
              options: ["الْكَبير", "كَبير", "الْجَديد", "حَمْراء"],
            },
            {
              template: "السَّيّارَة ___ . (the red car)",
              answer: "الْحَمْراء",
              en: "the red car",
              options: ["حَمْراء", "الْحَمْراء", "أَحْمَر", "الْكَبير"],
            },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the phrase",
          intro: "Tap the words into Arabic order (noun first, then adjective).",
          items: [
            { tokens: ["الْكِتاب", "الْجَديد"], en: "the new book" },
            { tokens: ["السَّيّارَة", "الْحَمْراء"], en: "the red car" },
            { tokens: ["بَيْت", "كَبير"], en: "a big house" },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "The new book is beautiful.",
          reference: "الْكِتاب الْجَديد جَميل.",
          hint: "'the new book' = al-kitāb al-jadīd (phrase); then add jamīl with no al- to say 'is beautiful'.",
        },
      ],
    },
    {
      slug: "comparatives-afal-pattern",
      title: "The comparative: afʿal",
      summary: "akbar = bigger, and 'akbar min' = bigger than.",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "One shape for 'more': afʿal",
          body: [
            "To compare, Arabic uses a single template called <strong>afʿal</strong> built from the adjective's three root letters. <em>kabīr</em> (big) → <strong>akbar</strong> (bigger); <em>ṣaghīr</em> (small) → <strong>aṣghar</strong> (smaller); <em>jamīl</em> (beautiful) → <strong>ajmal</strong> (more beautiful).",
            "The comparative form does <strong>not</strong> change for gender — <em>akbar</em> works for both: <em>al-walad akbar</em> / <em>al-bint akbar</em>.",
            "To say 'bigger <strong>than</strong>', add <strong>min</strong>: <em>al-Qāhira akbar min Aswān</em> = 'Cairo is bigger than Aswan.'",
          ],
          keyPoint:
            "Comparative = afʿal (akbar, aṣghar, ajmal), invariable for gender. 'than' = min: akbar min …",
        },
        {
          type: "vocab",
          heading: "Adjective → comparative",
          items: [
            { l1: "كَبير ← أَكْبَر", en: "big → bigger", note: "transliteration: kabīr → akbar." },
            { l1: "صَغير ← أَصْغَر", en: "small → smaller", note: "transliteration: ṣaghīr → aṣghar." },
            { l1: "جَميل ← أَجْمَل", en: "beautiful → more beautiful", note: "transliteration: jamīl → ajmal." },
            { l1: "قَديم ← أَقْدَم", en: "old → older", note: "transliteration: qadīm → aqdam." },
            { l1: "جَديد ← أَجَدّ", en: "new → newer", note: "transliteration: jadīd → ajadd." },
            { l1: "كَثير ← أَكْثَر", en: "much → more", note: "transliteration: kathīr → akthar." },
            { l1: "مِنْ", en: "than / from", note: "transliteration: min; follows the comparative to mark what's compared." },
          ],
        },
        {
          type: "dialogue",
          heading: "Comparing two cities",
          setup: "Two friends compare Cairo and Aswan.",
          lines: [
            { speaker: "Layla", l1: "الْقاهِرَة أَكْبَر مِنْ أَسْوان، صَحيح؟", en: "Cairo is bigger than Aswan, right?" },
            { speaker: "Karim", l1: "نَعَم، أَكْبَر بِكَثير. لكِنَّ أَسْوان أَجْمَل.", en: "Yes, much bigger. But Aswan is more beautiful." },
            { speaker: "Layla", l1: "وَالْجَوّ في أَسْوان أَحَرّ مِنَ الْقاهِرَة.", en: "And the weather in Aswan is hotter than Cairo." },
            { speaker: "Karim", l1: "بِالضَّبْط. أَحَرّ بِكَثير في الصَّيْف.", en: "Exactly. Much hotter in summer." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Form the comparative",
          intro: "Choose the comparative (afʿal) form.",
          items: [
            {
              template: "الْفيل ___ مِنَ الْقِطّ.",
              answer: "أَكْبَر",
              en: "The elephant is bigger than the cat.",
              options: ["كَبير", "أَكْبَر", "كَبيرة", "أَصْغَر"],
            },
            {
              template: "هذا الْكِتاب ___ مِنْ ذاك.",
              answer: "أَجْمَل",
              en: "This book is more beautiful than that one.",
              options: ["جَميل", "أَجْمَل", "جَميلة", "أَكْثَر"],
            },
            {
              template: "أَسْوان أَحَرّ ___ الْقاهِرَة.",
              answer: "مِنْ",
              en: "Aswan is hotter than Cairo.",
              options: ["مِنْ", "في", "إلى", "عَلى"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Cairo is bigger than Aswan, but Aswan is more beautiful.",
          reference: "الْقاهِرَة أَكْبَر مِنْ أَسْوان، لكِنَّ أَسْوان أَجْمَل.",
          hint: "akbar min = bigger than; ajmal = more beautiful (invariable).",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "The comparative of 'kabīr' (big) is:",
              options: ["kabīra", "akbar", "kibār", "kubrā"],
              correct: 1,
            },
            {
              q: "To say 'bigger than', you add:",
              options: ["fī", "min", "ilā", "ʿalā"],
              correct: 1,
            },
            {
              q: "Does the comparative 'akbar' change for a feminine noun?",
              options: ["yes, → akbara", "no, it stays akbar", "yes, → kubrāʾ", "only in the plural"],
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
        q: "For a feminine noun, 'big' (kabīr) becomes:",
        options: ["kabīr", "kabīra", "akbar", "kibār"],
        correct: 1,
      },
      {
        q: "The feminine of 'aḥmar' (red) is:",
        options: ["aḥmara", "ḥamrāʾ", "ḥumr", "aḥmarīn"],
        correct: 1,
      },
      {
        q: "In Arabic, the adjective comes:",
        options: ["before the noun", "after the noun", "either way freely", "only at sentence end"],
        correct: 1,
      },
      {
        q: "'The big house' (a phrase) is:",
        options: ["al-bayt kabīr", "bayt al-kabīr", "al-bayt al-kabīr", "kabīr al-bayt"],
        correct: 2,
      },
      {
        q: "'al-bayt kabīr' (noun definite, adjective indefinite) means:",
        options: ["the big house", "the house is big", "a big house", "big the house"],
        correct: 1,
      },
      {
        q: "The comparative pattern in Arabic is:",
        options: ["faʿlāʾ", "afʿal", "faʿīl", "mafʿūl"],
        correct: 1,
      },
      {
        q: "The comparative of 'ṣaghīr' (small) is:",
        options: ["ṣaghīra", "aṣghar", "ṣughr", "ṣughrā"],
        correct: 1,
      },
      {
        q: "'Bigger than' is:",
        options: ["akbar fī", "akbar min", "akbar ilā", "akbar ʿalā"],
        correct: 1,
      },
      {
        q: "Does 'akbar' change form for a feminine noun?",
        options: ["yes", "no, it's invariable", "only with 'the'", "only in writing"],
        correct: 1,
      },
      {
        q: "Translate: 'Cairo is bigger than Aswan.'",
        options: [
          "الْقاهِرَة أَكْبَر مِنْ أَسْوان.",
          "الْقاهِرَة كَبيرة أَسْوان.",
          "أَسْوان أَكْبَر مِنَ الْقاهِرَة.",
          "الْقاهِرَة أَكْبَر في أَسْوان.",
        ],
        correct: 0,
      },
    ],
  },
};
