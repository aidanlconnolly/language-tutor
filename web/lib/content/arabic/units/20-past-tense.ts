import type { Unit } from "../../types";

export const UNIT_PAST_TENSE: Unit = {
  slug: "past-tense",
  stage: 5,
  order: 20,
  icon: "⏪",
  title: "The past tense",
  tagline: "The perfect verb (faʿala) and the three-letter root.",
  badge: "core",
  lessons: [
    {
      slug: "past-tense-roots",
      title: "The three-letter root: kataba 'he wrote'",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Arabic verbs grow from a root",
          body: [
            "Almost every Arabic word grows from a <strong>three-consonant root</strong>. The root carries the core meaning; the vowels and patterns poured into it create the actual words.",
            "Take the root <strong>ك-ت-ب (k-t-b)</strong>, the idea of 'writing'. Pour the past-tense pattern <em>faʿala</em> (فَعَلَ) onto it and you get <strong>كَتَبَ (kataba)</strong> — 'he wrote'. The same root gives كِتاب (kitāb, 'book') and مَكْتَب (maktab, 'office/desk').",
            "The dictionary 'base form' of every Arabic verb is literally the <strong>he-form of the past tense</strong>. So كَتَبَ (kataba) means both 'he wrote' and is the way you look the verb up. There is no separate infinitive.",
            "The three short vowels written above and below the letters are called <strong>harakat</strong>. We show them here so you can read the verb patterns precisely.",
          ],
          keyPoint:
            "Root = 3 consonants carrying meaning. The past 'he' form (kataba) is the dictionary form — Arabic has no infinitive.",
        },
        {
          type: "vocab",
          heading: "The model root k-t-b",
          intro: "One root, many words. Notice the k, t, b consonants surviving through each.",
          items: [
            { l1: "كَتَبَ", en: "he wrote", note: "kataba — root k-t-b; the model 'faʿala' pattern" },
            { l1: "كِتاب", en: "book", note: "kitāb — root k-t-b" },
            { l1: "مَكْتَب", en: "office / desk", note: "maktab — root k-t-b" },
            { l1: "كاتِب", en: "writer", note: "kātib — root k-t-b" },
            { l1: "مَكْتَبة", en: "library / bookshop", note: "maktaba — root k-t-b" },
          ],
        },
        {
          type: "tip",
          heading: "faʿala — the pattern name",
          body: "Arab grammarians describe patterns using the dummy root <strong>ف-ع-ل (f-ʿ-l)</strong>, 'to do'. So the past pattern is called <strong>faʿala</strong> (فَعَلَ): first root letter takes <em>a</em>, then the second, then the third + a. When you see 'faʿala', read it as the shape كَتَبَ / دَرَسَ / ذَهَبَ — root letter, a, root letter, a, root letter, a.",
          example: { l1: "دَرَسَ", en: "he studied (root d-r-s, faʿala pattern)" },
        },
        {
          type: "conjugation",
          heading: "Past tense: he and she",
          verb: "كَتَبَ (kataba)",
          meaning: "to write",
          intro: "huwa (he) is the bare pattern. hiya (she) adds a -at (ـَتْ) suffix.",
          tenses: [
            {
              name: "Past — 3rd person",
              forms: [
                { person: "huwa", form: "كَتَبَ (kataba)", en: "he wrote" },
                { person: "hiya", form: "كَتَبَتْ (katabat)", en: "she wrote" },
              ],
            },
            {
              name: "Same pattern, root d-r-s (study)",
              forms: [
                { person: "huwa", form: "دَرَسَ (darasa)", en: "he studied" },
                { person: "hiya", form: "دَرَسَتْ (darasat)", en: "she studied" },
              ],
            },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Spot the root",
          questions: [
            {
              q: "What is the dictionary (base) form of an Arabic verb?",
              options: [
                "An infinitive like English 'to write'",
                "The past-tense 'he' form, e.g. kataba",
                "The present-tense 'I' form",
                "The noun built from the root",
              ],
              correct: 1,
              fb: "Arabic has no infinitive — كَتَبَ (kataba) 'he wrote' is the citation form.",
            },
            {
              q: "كِتاب (kitāb, 'book') and كَتَبَ (kataba, 'he wrote') share which root?",
              options: ["k-b-r", "k-t-b", "t-b-k", "k-a-t"],
              correct: 1,
              fb: "The consonants k-t-b run through every word in the 'writing' family.",
            },
            {
              q: "How do you turn 'he wrote' (kataba) into 'she wrote'?",
              options: [
                "Add a prefix ya-",
                "Add the suffix -at: katabat",
                "Change the vowels to u",
                "Add -tu",
              ],
              correct: 1,
              fb: "كَتَبَتْ (katabat) — the -at (ـَتْ) suffix marks a feminine 3rd-person subject.",
            },
          ],
        },
      ],
    },
    {
      slug: "past-tense-common-verbs",
      title: "Common past verbs around Cairo",
      estMinutes: 8,
      pages: [
        {
          type: "vocab",
          heading: "Everyday past-tense verbs",
          intro: "All listed in the citation form (he-past). The transliteration + root are in the note.",
          items: [
            { l1: "ذَهَبَ", en: "he went", note: "dhahaba — root dh-h-b" },
            { l1: "أَكَلَ", en: "he ate", note: "akala — root ʾ-k-l" },
            { l1: "شَرِبَ", en: "he drank", note: "shariba — root sh-r-b" },
            { l1: "قالَ", en: "he said", note: "qāla — root q-w-l (hollow verb)" },
            { l1: "سَكَنَ", en: "he lived / resided", note: "sakana — root s-k-n" },
            { l1: "وَصَلَ", en: "he arrived", note: "waṣala — root w-ṣ-l" },
            { l1: "زارَ", en: "he visited", note: "zāra — root z-w-r (hollow verb)" },
            { l1: "رَأى", en: "he saw", note: "raʾā — root r-ʾ-y" },
          ],
        },
        {
          type: "dialogue",
          heading: "What did Yusuf do in Cairo?",
          setup: "Layla asks Yusuf about his day downtown.",
          lines: [
            { speaker: "Layla", l1: "ماذا فَعَلْتَ اليَوْم؟", en: "What did you do today?" },
            { speaker: "Yusuf", l1: "ذَهَبْتُ إلى وَسَط البَلَد.", en: "I went downtown." },
            { speaker: "Layla", l1: "وَهَل زُرْتَ المَتْحَف المِصْري؟", en: "And did you visit the Egyptian Museum?" },
            { speaker: "Yusuf", l1: "نَعَم، وَرَأَيْتُ كَنْز توت عَنْخ آمون.", en: "Yes, and I saw the treasure of Tutankhamun." },
            { speaker: "Layla", l1: "وَبَعْدَ ذَلِكَ؟", en: "And after that?" },
            { speaker: "Yusuf", l1: "أَكَلْتُ كُشَري وَشَرِبْتُ شاي.", en: "I ate koshari and drank tea." },
          ],
        },
        {
          type: "conjugation",
          heading: "Two more verbs in the past (he / she)",
          verb: "ذَهَبَ (dhahaba)",
          meaning: "to go",
          intro: "Sound verbs follow the faʿala pattern cleanly. Compare with 'akala'.",
          tenses: [
            {
              name: "dhahaba — to go",
              forms: [
                { person: "huwa", form: "ذَهَبَ (dhahaba)", en: "he went" },
                { person: "hiya", form: "ذَهَبَتْ (dhahabat)", en: "she went" },
              ],
            },
            {
              name: "akala — to eat",
              forms: [
                { person: "huwa", form: "أَكَلَ (akala)", en: "he ate" },
                { person: "hiya", form: "أَكَلَتْ (akalat)", en: "she ate" },
              ],
            },
          ],
        },
        {
          type: "fillBlank",
          heading: "Choose the past verb",
          items: [
            {
              template: "هُوَ ___ إلى السوق. (go)",
              answer: "ذَهَبَ",
              en: "He went to the market.",
              options: ["ذَهَبَ", "ذَهَبَتْ", "يَذْهَبُ", "ذَهَبْتُ"],
            },
            {
              template: "هِيَ ___ القَهْوة. (drink)",
              answer: "شَرِبَتْ",
              en: "She drank the coffee.",
              options: ["شَرِبَ", "شَرِبَتْ", "شَرِبْتُ", "يَشْرَبُ"],
            },
            {
              template: "هُوَ ___ الأَهْرام. (visit)",
              answer: "زارَ",
              en: "He visited the pyramids.",
              options: ["زارَ", "زارَتْ", "أَزورُ", "زُرْتُ"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "He went downtown and ate koshari.",
          reference: "ذَهَبَ إلى وَسَط البَلَد وَأَكَلَ كُشَري.",
          hint: "Two past 'he' verbs: dhahaba, akala. Join them with وَ (wa, 'and').",
        },
      ],
    },
    {
      slug: "past-tense-negation",
      title: "Saying what didn't happen: mā + the past",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Negating the past with mā",
          body: [
            "The simplest way to negate a past verb is the particle <strong>ما (mā)</strong> placed directly <strong>before</strong> the verb. The verb itself does not change.",
            "<strong>كَتَبَ (kataba)</strong> = 'he wrote' → <strong>ما كَتَبَ (mā kataba)</strong> = 'he did not write'.",
            "Typical word order is <strong>verb → subject → object</strong>, so the negation sits at the very front: <em>ما ذَهَبَ يوسُف إلى السوق</em> = 'Yusuf did not go to the market'.",
            "(A more formal alternative, <strong>lam + the jussive present</strong>, also negates the past — لَمْ يَكْتُبْ, lam yaktub. We meet the present tense in unit 22; for now, master <em>mā + past</em>.)",
          ],
          keyPoint:
            "mā (ما) before the past verb = 'did not …'. The verb keeps its past form: mā kataba = 'he did not write'.",
        },
        {
          type: "vocab",
          heading: "Negation building blocks",
          items: [
            { l1: "ما", en: "not (negates the past)", note: "mā — placed before the verb" },
            { l1: "ما كَتَبَ", en: "he did not write", note: "mā kataba" },
            { l1: "ما ذَهَبَتْ", en: "she did not go", note: "mā dhahabat" },
            { l1: "أَبَداً", en: "ever / never (with negation)", note: "abadan — strengthens the 'never'" },
            { l1: "لَمْ", en: "did not (formal, + present)", note: "lam — alternative seen in unit 22" },
          ],
        },
        {
          type: "tip",
          heading: "Word order keeps the verb first",
          body: "Classical MSA likes the verb at the front of the sentence: <strong>verb – subject – object</strong>. When you negate, <em>mā</em> goes ahead of the whole thing. So 'Layla did not eat the bread' is <strong>ما أَكَلَتْ لَيْلى الخُبْز</strong> (mā akalat Laylā al-khubz) — literally 'not ate Layla the bread'.",
          example: { l1: "ما زارَ المَتْحَف.", en: "He did not visit the museum." },
        },
        {
          type: "orderWords",
          heading: "Build the negated sentence",
          intro: "Put the words in correct MSA order (negation first, then verb).",
          items: [
            { tokens: ["ما", "ذَهَبَ", "يوسُف", "إلى", "القاهِرة"], en: "Yusuf did not go to Cairo." },
            { tokens: ["ما", "شَرِبَتْ", "لَيْلى", "الشاي"], en: "Layla did not drink the tea." },
            { tokens: ["ما", "رَأَيْتُ", "الأَهْرام"], en: "I did not see the pyramids." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Negate it",
          items: [
            {
              template: "___ أَكَلَ الكُشَري.",
              answer: "ما",
              en: "He did not eat the koshari.",
              options: ["ما", "لا", "لَنْ", "هَل"],
            },
            {
              template: "ما ___ إلى المَتْحَف. (she went)",
              answer: "ذَهَبَتْ",
              en: "She did not go to the museum.",
              options: ["ذَهَبَتْ", "ذَهَبَ", "تَذْهَبُ", "ذَهَبْتُ"],
            },
          ],
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "Which particle negates a past-tense verb?",
              options: ["لا (lā)", "ما (mā)", "لَنْ (lan)", "هَل (hal)"],
              correct: 1,
            },
            {
              q: "'He did not write' =",
              options: ["لا يَكْتُبُ", "ما كَتَبَ", "لَنْ يَكْتُبَ", "كَتَبَ ما"],
              correct: 1,
            },
            {
              q: "In classic MSA word order, the verb usually comes…",
              options: ["last", "after the object", "first (verb–subject–object)", "it doesn't matter"],
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
        q: "An Arabic root is made of how many consonants?",
        options: ["two", "three", "four", "it varies wildly"],
        correct: 1,
      },
      {
        q: "The dictionary form of an Arabic verb is…",
        options: [
          "an infinitive",
          "the present 'I' form",
          "the past 'he' form (kataba)",
          "a noun",
        ],
        correct: 2,
      },
      {
        q: "كَتَبَ (kataba) means…",
        options: ["he writes", "he wrote", "to write", "writer"],
        correct: 1,
      },
      {
        q: "The grammarians' name for the past pattern (using root f-ʿ-l) is…",
        options: ["yafʿalu", "faʿala", "mafʿūl", "fāʿil"],
        correct: 1,
      },
      {
        q: "'She wrote' =",
        options: ["كَتَبَ (kataba)", "كَتَبَتْ (katabat)", "يَكْتُبُ (yaktubu)", "كَتَبْتُ (katabtu)"],
        correct: 1,
      },
      {
        q: "Which root do كِتاب (book) and مَكْتَبة (library) share?",
        options: ["k-b-r", "k-t-b", "m-k-t", "k-m-l"],
        correct: 1,
      },
      {
        q: "'He went' =",
        options: ["ذَهَبَ (dhahaba)", "أَكَلَ (akala)", "شَرِبَ (shariba)", "قالَ (qāla)"],
        correct: 0,
      },
      {
        q: "'She drank' =",
        options: ["شَرِبَ (shariba)", "شَرِبَتْ (sh3aribat)", "شَرِبَتْ (sharibat)", "يَشْرَبُ (yashrabu)"],
        correct: 2,
      },
      {
        q: "To negate a past verb you put ___ before it.",
        options: ["لا (lā)", "ما (mā)", "لَنْ (lan)", "سَ (sa-)"],
        correct: 1,
      },
      {
        q: "'He did not visit the museum' =",
        options: [
          "ما زارَ المَتْحَف",
          "لا يَزورُ المَتْحَف",
          "لَنْ يَزورَ المَتْحَف",
          "زارَ ما المَتْحَف",
        ],
        correct: 0,
      },
    ],
  },
};
