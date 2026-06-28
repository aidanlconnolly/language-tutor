import type { Unit } from "../../types";

export const UNIT_ARTICLE_GENDER: Unit = {
  slug: "article-gender",
  stage: 1,
  order: 4,
  icon: "📚",
  title: "al-, gender & nouns",
  tagline: "The article al-, sun/moon assimilation, the tāʾ marbūṭa.",
  badge: "core",
  lessons: [
    {
      slug: "article-gender-the",
      title: "The definite article al-",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "One word for 'the'",
          body: [
            "Arabic has <strong>no word for 'a/an'</strong>. A bare noun like <em>bayt</em> already means 'a house'. To make it definite — 'the house' — you attach <strong>الـ (al-)</strong> to the front: <em>al-bayt</em>.",
            "al- is written as part of the word, never separate: ال + بيت → <strong>البيت</strong>. The alif at the start is just a carrier; the meaningful piece is the <em>lām</em> (l).",
            "After a vowel, the 'a' of al- often drops in speech: <em>fī l-bayt</em> ('in the house'). You'll hear this elision constantly — the spelling keeps the alif, but the 'a' is swallowed.",
          ],
          keyPoint:
            "No 'a/an' in Arabic. Definite = prefix الـ (al-). bayt = 'a house' → al-bayt = 'the house'.",
        },
        {
          type: "vocab",
          heading: "Indefinite vs definite",
          items: [
            { l1: "بَيْت", en: "a house", note: "transliteration: bayt; (m.), pl. buyūt." },
            { l1: "الْبَيْت", en: "the house", note: "transliteration: al-bayt; bayt + the article al-." },
            { l1: "كِتاب", en: "a book", note: "transliteration: kitāb; (m.), pl. kutub; root k-t-b." },
            { l1: "الْكِتاب", en: "the book", note: "transliteration: al-kitāb; kāf is a moon letter, so 'l' is pronounced." },
            { l1: "وَلَد", en: "a boy", note: "transliteration: walad; (m.), pl. awlād." },
            { l1: "الْوَلَد", en: "the boy", note: "transliteration: al-walad." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Definite or not?",
          questions: [
            {
              q: "Arabic has no separate word for…",
              options: ["'the'", "'a / an'", "'this'", "'and'"],
              correct: 1,
              fb: "There's no indefinite article; a bare noun is already 'a ___'.",
            },
            {
              q: "How do you say 'the book'?",
              options: ["kitāb", "al-kitāb", "kitāban", "kitābun"],
              correct: 1,
              fb: "Prefix al-: al-kitāb.",
            },
            {
              q: "'al-bayt' means…",
              options: ["a house", "the house", "houses", "my house"],
              correct: 1,
              fb: "al- makes the noun definite: 'the house'.",
            },
            {
              q: "The meaningful consonant in the article al- is the…",
              options: ["alif", "lām (l)", "fatḥa", "sukūn"],
              correct: 1,
              fb: "The lām carries the meaning; the alif is just a carrier.",
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "the book",
          reference: "الْكِتاب",
          hint: "Prefix al- to kitāb. kāf is a moon letter, so the 'l' is pronounced: al-kitāb.",
        },
      ],
    },
    {
      slug: "article-gender-sun-moon",
      title: "Sun letters vs moon letters",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Why 'al-' sometimes hides",
          body: [
            "The article is always WRITTEN الـ, but it isn't always pronounced 'al'. It depends on the first letter of the noun.",
            "With <strong>moon letters</strong>, the 'l' is pronounced clearly: <em>al-qamar</em> (the moon), <em>al-bayt</em> (the house). Moon letters include ب ج ح خ ع غ ف ق ك م ه و ي — and the moon, <em>qamar</em>, starts with one.",
            "With <strong>sun letters</strong>, the 'l' <em>assimilates</em>: it disappears and the next consonant doubles. <em>al-shams</em> becomes <strong>ash-shams</strong> (the sun). Sun letters are the 'tongue-tip' consonants: ت ث د ذ ر ز س ش ص ض ط ظ ل ن.",
          ],
          tip: {
            label: "How to remember",
            body: "Say the noun out loud. If your tongue is already at the ridge behind your teeth for the first sound (t, d, s, n, r…), the 'l' merges in — that's a <strong>sun letter</strong>. The sun (<em>shams</em>) and moon (<em>qamar</em>) are the textbook examples.",
          },
          keyPoint:
            "Moon letters: l is pronounced (al-qamar). Sun letters: l assimilates, next consonant doubles (ash-shams).",
        },
        {
          type: "vocab",
          heading: "Hear the contrast",
          items: [
            { l1: "الْقَمَر", en: "the moon (moon letter)", note: "transliteration: al-qamar; qāf is a moon letter — 'l' pronounced." },
            { l1: "الشَّمْس", en: "the sun (sun letter)", note: "transliteration: ash-shams; shīn is a sun letter — note the shadda doubling š." },
            { l1: "الطَّعام", en: "the food (sun letter)", note: "transliteration: aṭ-ṭaʿām; ṭāʾ is a sun letter." },
            { l1: "النَّهْر", en: "the river (sun letter)", note: "transliteration: an-nahr; nūn is a sun letter." },
            { l1: "الْبَيْت", en: "the house (moon letter)", note: "transliteration: al-bayt; bāʾ is a moon letter." },
            { l1: "الْوَلَد", en: "the boy (moon letter)", note: "transliteration: al-walad; wāw is a moon letter." },
          ],
        },
        {
          type: "pronounce",
          heading: "Say them with the assimilation",
          intro: "Exaggerate the doubled consonant on the sun-letter words.",
          items: [
            { l1: "الشَّمْس", en: "the sun", tip: "ash-shams — no 'l' sound; lean on the doubled š." },
            { l1: "الْقَمَر", en: "the moon", tip: "al-qamar — clear 'l' before the q." },
            { l1: "النَّهْر", en: "the river", tip: "an-nahr — 'l' becomes 'n': an-nahr." },
            { l1: "الْكِتاب", en: "the book", tip: "al-kitāb — moon letter, clear 'l'." },
          ],
        },
        {
          type: "fillBlank",
          heading: "How is al- pronounced?",
          intro: "Choose the spoken form.",
          items: [
            { template: "الشَّمْس is pronounced ___.", answer: "ash-shams", en: "the sun (sun letter)", options: ["al-shams", "ash-shams", "an-shams", "at-shams"] },
            { template: "الْقَمَر is pronounced ___.", answer: "al-qamar", en: "the moon (moon letter)", options: ["aq-qamar", "al-qamar", "ar-qamar", "an-qamar"] },
            { template: "النَّهْر is pronounced ___.", answer: "an-nahr", en: "the river (sun letter)", options: ["al-nahr", "an-nahr", "am-nahr", "ar-nahr"] },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Sun or moon?",
          questions: [
            {
              q: "In 'ash-shams', ش (shīn) is a…",
              options: ["moon letter", "sun letter", "long vowel", "emphatic only"],
              correct: 1,
              fb: "shīn is a sun letter, so the l assimilates and š doubles.",
            },
            {
              q: "Which word keeps a clearly pronounced 'l'?",
              options: ["الشَّمْس (the sun)", "النَّهْر (the river)", "الْقَمَر (the moon)", "الطَّعام (the food)"],
              correct: 2,
              fb: "al-qamar — qāf is a moon letter.",
            },
            {
              q: "Sun letters are roughly the consonants made…",
              options: ["with the lips", "deep in the throat", "with the tongue-tip behind the teeth", "through the nose"],
              correct: 2,
              fb: "They're 'tongue-tip' sounds (t, d, s, n, r…) — the l merges into them.",
            },
          ],
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "With a SUN letter, the 'l' of al-…",
              options: ["is pronounced clearly", "assimilates and doubles the next letter", "becomes a long vowel", "is dropped entirely with no doubling"],
              correct: 1,
            },
            {
              q: "'the moon' is pronounced…",
              options: ["aq-qamar", "al-qamar", "ash-shams", "an-qamar"],
              correct: 1,
            },
            {
              q: "Which is a sun-letter word (l assimilates)?",
              options: ["الْبَيْت", "الْكِتاب", "النَّهْر", "الْقَمَر"],
              correct: 2,
            },
          ],
        },
      ],
    },
    {
      slug: "article-gender-ta-marbuta",
      title: "Masculine, feminine & the tāʾ marbūṭa",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Every noun has a gender",
          body: [
            "Arabic nouns are either <strong>masculine</strong> or <strong>feminine</strong> — there's no neutral 'it'. Most nouns are masculine by default.",
            "The clearest sign of a feminine noun is a special ending: the <strong>tāʾ marbūṭa</strong> ـة. It looks like a hāʾ (ه) with two dots, sits at the end of a word, and usually sounds like a soft '-a'.",
            "So <em>ṭālib</em> (a male student) becomes <em>ṭāliba</em> (a female student) just by adding ـة. The same trick turns <em>muʿallim</em> (m. teacher) into <em>muʿallima</em> (f. teacher).",
          ],
          keyPoint:
            "Nouns are masculine or feminine. The tāʾ marbūṭa ـة usually marks feminine and is pronounced as a soft '-a'.",
        },
        {
          type: "tip",
          heading: "Spotting feminine nouns",
          body: "Three quick rules of thumb: (1) a noun ending in <strong>tāʾ marbūṭa ـة</strong> is almost always feminine — <em>madīna</em> (city), <em>sayyāra</em> (car). (2) Female people and most country/city names are feminine even without ـة. (3) A handful of body-parts that come in pairs (like <em>yad</em>, hand) are feminine too. When in doubt, look for the ـة.",
          example: { l1: "مَدينَة · مُعَلِّمَة", en: "madīna (city, f.) · muʿallima (female teacher)" },
        },
        {
          type: "vocab",
          heading: "Masculine / feminine pairs",
          items: [
            { l1: "طالِب", en: "student (m.)", note: "transliteration: ṭālib; (m.), pl. ṭullāb; root ṭ-l-b." },
            { l1: "طالِبَة", en: "student (f.)", note: "transliteration: ṭāliba; same word + tāʾ marbūṭa ـة." },
            { l1: "مُعَلِّم", en: "teacher (m.)", note: "transliteration: muʿallim; root ʿ-l-m." },
            { l1: "مُعَلِّمَة", en: "teacher (f.)", note: "transliteration: muʿallima; + ـة." },
            { l1: "مَدينَة", en: "city (f.)", note: "transliteration: madīna; (f.), pl. mudun; ends in ـة." },
            { l1: "سَيّارَة", en: "car (f.)", note: "transliteration: sayyāra; (f.), pl. sayyārāt; ends in ـة." },
            { l1: "يَد", en: "hand (f.)", note: "transliteration: yad; (f.) — feminine despite no ـة (a paired body part)." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Make it feminine",
          intro: "Add the tāʾ marbūṭa to form the feminine.",
          items: [
            { template: "muʿallim (m.) → muʿallim___ (f.)", answer: "a", en: "female teacher = muʿallima", options: ["a", "u", "i", "un"] },
            { template: "ṭālib (m.) → ṭālib___ (f.)", answer: "a", en: "female student = ṭāliba", options: ["a", "an", "i", "u"] },
            { template: "The ending ___ usually marks a feminine noun.", answer: "tāʾ marbūṭa", en: "ـة = tāʾ marbūṭa", options: ["alif", "tāʾ marbūṭa", "sukūn", "shadda"] },
          ],
        },
        {
          type: "dialogue",
          heading: "Who's who at the school",
          setup: "You point out people at a Cairo language school.",
          lines: [
            { speaker: "You", l1: "هٰذا طالِب.", en: "This is a (male) student. — hādhā ṭālib." },
            { speaker: "Friend", l1: "وَهٰذِهِ طالِبَة.", en: "And this is a (female) student. — wa hādhihi ṭāliba." },
            { speaker: "You", l1: "هٰذِهِ الْمُعَلِّمَة مِنَ الْقاهِرَة.", en: "This (female) teacher is from Cairo." },
            { speaker: "Friend", l1: "وَالْمُعَلِّم مِنَ الإِسْكَنْدَرِيَّة.", en: "And the (male) teacher is from Alexandria." },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the sentence (right to left)",
          intro: "Arrange the words; the first sits on the right.",
          items: [
            { tokens: ["هٰذا", "طالِب"], en: "This is a (male) student — hādhā ṭālib" },
            { tokens: ["هٰذِهِ", "مُعَلِّمَة"], en: "This is a (female) teacher — hādhihi muʿallima" },
            { tokens: ["الْمَدينَة", "كَبيرَة"], en: "The city is big — al-madīna kabīra" },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "This is a (female) teacher from the city.",
          reference: "هٰذِهِ مُعَلِّمَة مِنَ الْمَدينَة.",
          hint: "'this' (f.) = hādhihi; feminine teacher = muʿallima (with tāʾ marbūṭa); 'the city' = al-madīna.",
        },
      ],
    },
  ],
  checkpoint: {
    passingPct: 80,
    questions: [
      {
        q: "Arabic has no separate word for…",
        options: ["'the'", "'a / an'", "'and'", "'this'"],
        correct: 1,
      },
      {
        q: "How do you make a noun definite ('the ___')?",
        options: ["add -un at the end", "prefix الـ (al-)", "add tāʾ marbūṭa", "double the first letter"],
        correct: 1,
      },
      {
        q: "'al-bayt' means…",
        options: ["a house", "the house", "houses", "my house"],
        correct: 1,
      },
      {
        q: "With a MOON letter, the 'l' of al-…",
        options: ["assimilates and doubles the next letter", "is pronounced clearly", "becomes a long vowel", "is silent"],
        correct: 1,
      },
      {
        q: "'the sun' is pronounced…",
        options: ["al-shams", "ash-shams", "an-shams", "as-sams"],
        correct: 1,
      },
      {
        q: "Which is a moon-letter word (clear 'l')?",
        options: ["الشَّمْس (the sun)", "النَّهْر (the river)", "الْقَمَر (the moon)", "الطَّعام (the food)"],
        correct: 2,
      },
      {
        q: "The ending that usually marks a feminine noun is the…",
        options: ["alif", "tāʾ marbūṭa ـة", "shadda", "sukūn"],
        correct: 1,
      },
      {
        q: "The feminine of 'ṭālib' (male student) is…",
        options: ["ṭullāb", "ṭāliba", "ṭālibun", "ṭālibīn"],
        correct: 1,
      },
      {
        q: "Which noun is feminine?",
        options: ["bayt (house)", "kitāb (book)", "madīna (city)", "walad (boy)"],
        correct: 2,
      },
      {
        q: "'yad' (hand) is feminine even though it has no ـة because…",
        options: ["it's a loanword", "it's a paired body part", "it ends in a vowel", "all short words are feminine"],
        correct: 1,
      },
    ],
  },
};
