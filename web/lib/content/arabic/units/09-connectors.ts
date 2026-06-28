import type { Unit } from "../../types";

export const UNIT_CONNECTORS: Unit = {
  slug: "connectors",
  stage: 2,
  order: 9,
  icon: "🔗",
  title: "Connecting words",
  tagline: "wa, fa, lākin, li-anna, thumma.",
  badge: "core",
  lessons: [
    {
      slug: "connectors-wa-fa",
      title: "wa (and) & fa (so/then)",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Arabic glues 'and' onto the next word",
          body: [
            "<strong>wa</strong> (وَ) means 'and'. It is never written alone — it attaches to the front of the following word: <em>anā wa-anta</em> ('me and you') is written <strong>أَنَا وَأَنْتَ</strong>. Arabic strings clauses together with wa far more freely than English.",
            "<strong>fa</strong> (فَ) is a tighter connector meaning 'so / and then / and as a result'. It also prefixes the next word and signals a quick consequence: <em>akaltu fa-shabiʿtu</em> ('I ate, so I was full').",
            "The difference: <em>wa</em> just adds; <em>fa</em> adds <em>with a sense of sequence or cause</em> — one thing immediately leading to the next.",
          ],
          keyPoint:
            "wa = and (simple addition). fa = so / then (sequence or result). Both attach to the next word.",
        },
        {
          type: "vocab",
          heading: "Connectors & a few verbs",
          items: [
            { l1: "وَ", en: "and", note: "wa- — attaches to the next word." },
            { l1: "فَ", en: "so / then / and so", note: "fa- — sequence or result; attaches to the next word." },
            { l1: "ذَهَبَ", en: "he went", note: "dhahaba — past tense; root dh-h-b." },
            { l1: "أَكَلَ", en: "he ate", note: "akala — past tense; root ʾ-k-l." },
            { l1: "شَرِبَ", en: "he drank", note: "shariba — past tense; root sh-r-b." },
            { l1: "اَلسُّوق", en: "the market", note: "al-sūq — e.g. Khan al-Khalili." },
            { l1: "اَلشَّاي", en: "the tea", note: "al-shāy — ubiquitous in Egypt." },
            { l1: "اَلْقَهْوَة", en: "the coffee", note: "al-qahwa — also the word for a café." },
          ],
        },
        {
          type: "dialogue",
          heading: "An afternoon in Khan al-Khalili",
          setup: "A friend recounts a stroll through the old market.",
          lines: [
            { speaker: "Friend", l1: "ذَهَبْتُ إِلَى السُّوقِ فَشَرِبْتُ الشَّاي.", en: "I went to the market, so/then I drank tea." },
            { speaker: "You", l1: "وَأَنَا؟ شَرِبْتُ الْقَهْوَة.", en: "And me? I drank coffee." },
            { speaker: "Friend", l1: "اَلسُّوق كَبِير وَجَمِيل.", en: "The market is big and beautiful." },
            { speaker: "You", l1: "نَعَمْ، وَأَنَا سَعِيد هُنَا.", en: "Yes, and I'm happy here." },
          ],
        },
        {
          type: "fillBlank",
          heading: "wa or fa?",
          intro: "Use 'fa' when there's a sense of 'and then / so'; use 'wa' for plain 'and'.",
          items: [
            {
              template: "أَنَا ___ أَنْتَ. (and)",
              answer: "وَ",
              en: "Me and you.",
              options: ["وَ", "فَ", "لَٰكِنْ", "ثُمَّ"],
            },
            {
              template: "ذَهَبْتُ إِلَى السُّوقِ ___ شَرِبْتُ الشَّاي. (so/then)",
              answer: "فَ",
              en: "I went to the market, so I drank tea.",
              options: ["وَ", "فَ", "أَوْ", "لَٰكِنْ"],
            },
            {
              template: "اَلسُّوق كَبِير ___ جَمِيل. (and)",
              answer: "وَ",
              en: "The market is big and beautiful.",
              options: ["وَ", "فَ", "ثُمَّ", "لِأَنَّ"],
            },
            {
              template: "أَكَلَ ___ شَبِعَ. (so)",
              answer: "فَ",
              en: "He ate, so he was full.",
              options: ["وَ", "فَ", "أَوْ", "لَٰكِنْ"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "I drank tea and coffee.",
          reference: "شَرِبْتُ الشَّايَ وَالْقَهْوَة.",
          hint: "wa- attaches to the next word: wa-al-qahwa.",
        },
      ],
    },
    {
      slug: "connectors-lakin-aw",
      title: "lākin (but) & aw (or)",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Contrast and choice",
          body: [
            "<strong>lākin</strong> (لَٰكِنْ) means 'but' — it introduces a contrast: <em>al-bayt ṣaghīr lākin jamīl</em> ('the house is small but beautiful'). Unlike wa/fa it is a free-standing word, not a prefix.",
            "There's a heavier sister form <strong>lākinna</strong> (لَٰكِنَّ), used before a noun/pronoun it grammatically governs. At A1 just recognize it; <em>lākin</em> covers most needs.",
            "<strong>aw</strong> (أَوْ) means 'or' for choices: <em>shāy aw qahwa?</em> ('tea or coffee?'). Like lākin, it stands as its own word.",
          ],
          keyPoint:
            "lākin = but (contrast). aw = or (choice). Both are separate words, not attached prefixes.",
        },
        {
          type: "vocab",
          heading: "Contrast, choice & adjectives",
          items: [
            { l1: "لَٰكِنْ", en: "but", note: "lākin — free-standing; lākinna before a noun." },
            { l1: "أَوْ", en: "or", note: "aw — for choices." },
            { l1: "كَبِير", en: "big (m.)", note: "kabīr → kabīra (f.)." },
            { l1: "صَغِير", en: "small (m.)", note: "ṣaghīr → ṣaghīra (f.)." },
            { l1: "جَمِيل", en: "beautiful (m.)", note: "jamīl → jamīla (f.)." },
            { l1: "غَالٍ", en: "expensive (m.)", note: "ghālin → ghāliya (f.)." },
            { l1: "رَخِيص", en: "cheap (m.)", note: "rakhīṣ → rakhīṣa (f.)." },
            { l1: "قَرِيب", en: "near (m.)", note: "qarīb → baʿīd = far." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Choose the connector",
          questions: [
            {
              q: "'The house is small but beautiful' uses which word for 'but'?",
              options: ["wa", "fa", "lākin", "aw"],
              correct: 2,
              fb: "lākin = but.",
            },
            {
              q: "A waiter asks 'tea or coffee?' — 'or' is…",
              options: ["wa", "aw", "fa", "lākin"],
              correct: 1,
              fb: "aw = or.",
            },
            {
              q: "How is lākin different from wa and fa?",
              options: [
                "It means the same thing",
                "It's a separate word, not a prefix",
                "It can't start a clause",
                "It only works with verbs",
              ],
              correct: 1,
              fb: "lākin (and aw) stand alone; wa/fa attach to the next word.",
            },
            {
              q: "'The market is far but cheap' — fill the gap: al-sūq baʿīd ___ rakhīṣ.",
              options: ["aw", "fa", "lākin", "thumma"],
              correct: 2,
              fb: "A contrast → lākin.",
            },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the sentence",
          intro: "Arrange the words. Remember adjectives follow the noun and there's no 'to be'.",
          items: [
            { tokens: ["اَلْبَيْت", "صَغِير", "لَٰكِنْ", "جَمِيل"], en: "The house is small but beautiful." },
            { tokens: ["شَاي", "أَوْ", "قَهْوَة"], en: "Tea or coffee?" },
            { tokens: ["اَلسُّوق", "قَرِيب", "لَٰكِنْ", "غَالٍ"], en: "The market is near but expensive." },
            { tokens: ["هَٰذَا", "كَبِير", "وَهَٰذَا", "صَغِير"], en: "This is big and this is small." },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "The house is small but beautiful.",
          reference: "اَلْبَيْتُ صَغِيرٌ لَٰكِنْ جَمِيلٌ.",
          hint: "Adjectives come after the noun; no 'is'; lākin = but.",
        },
      ],
    },
    {
      slug: "connectors-lianna-thumma",
      title: "li-anna (because) & thumma (then)",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Giving reasons and sequencing events",
          body: [
            "<strong>li-anna</strong> (لِأَنَّ) means 'because' — it answers <em>limādhā?</em> ('why?'). It is followed by a noun or attached pronoun: <em>anā saʿīd <strong>li-anna</strong> al-jaww jamīl</em> ('I'm happy because the weather is nice').",
            "Because li-anna already contains <em>anna</em>, an attached pronoun glues right on: <strong>li-annahu</strong> ('because he…'), <strong>li-annahā</strong> ('because she…'), <strong>li-annī</strong> ('because I…').",
            "<strong>thumma</strong> (ثُمَّ) means 'then / afterwards' and orders events in time — looser than <em>fa</em>: <em>akaltu thumma dhahabtu ilā al-sūq</em> ('I ate, then I went to the market').",
          ],
          keyPoint:
            "li-anna = because (takes a noun/suffix: li-annahu). thumma = then / afterwards (time sequence).",
        },
        {
          type: "vocab",
          heading: "Reason & sequence words",
          items: [
            { l1: "لِأَنَّ", en: "because", note: "li-anna — li-annahu (because he), li-annī (because I)." },
            { l1: "ثُمَّ", en: "then / afterwards", note: "thumma — orders events in time." },
            { l1: "اَلْجَوّ", en: "the weather", note: "al-jaww — al-jaww jamīl = nice weather." },
            { l1: "مَشْغُول", en: "busy (m.)", note: "mashghūl → mashghūla (f.)." },
            { l1: "جَائِع", en: "hungry (m.)", note: "jāʾiʿ → jāʾiʿa (f.); root j-w-ʿ." },
            { l1: "ذَهَبَ", en: "he went", note: "dhahaba — dhahabtu = I went." },
            { l1: "رَجَعَ", en: "he returned", note: "rajaʿa — rajaʿtu = I returned." },
            { l1: "بَعْدَ", en: "after", note: "baʿda — preposition." },
          ],
        },
        {
          type: "dialogue",
          heading: "Planning a day in Cairo",
          setup: "You and a friend map out the afternoon.",
          lines: [
            { speaker: "Friend", l1: "أَنَا جَائِع لِأَنَّ الْجَوّ بَارِد.", en: "I'm hungry because the weather is cold." },
            { speaker: "You", l1: "نَأْكُل ثُمَّ نَذْهَب إِلَى السُّوق.", en: "We'll eat, then we'll go to the market." },
            { speaker: "Friend", l1: "لَٰكِنِّي مَشْغُول الْآن.", en: "But I'm busy now." },
            { speaker: "You", l1: "لَا مُشْكِلَة، بَعْدَ السُّوق نَرْجِع.", en: "No problem, after the market we'll return." },
          ],
        },
        {
          type: "fillBlank",
          heading: "li-anna or thumma?",
          intro: "Use li-anna for a reason ('because'), thumma for a sequence ('then').",
          items: [
            {
              template: "أَنَا سَعِيد ___ الْجَوّ جَمِيل. (because)",
              answer: "لِأَنَّ",
              en: "I'm happy because the weather is nice.",
              options: ["لِأَنَّ", "ثُمَّ", "أَوْ", "وَ"],
            },
            {
              template: "أَكَلْتُ ___ ذَهَبْتُ. (then)",
              answer: "ثُمَّ",
              en: "I ate, then I went.",
              options: ["لِأَنَّ", "ثُمَّ", "لَٰكِنْ", "أَوْ"],
            },
            {
              template: "هُوَ مَشْغُول ___ عِنْدَهُ عَمَل. (because)",
              answer: "لِأَنَّ",
              en: "He is busy because he has work.",
              options: ["لِأَنَّ", "ثُمَّ", "فَ", "أَوْ"],
            },
            {
              template: "شَرِبْتُ الْقَهْوَة ___ رَجَعْتُ. (then)",
              answer: "ثُمَّ",
              en: "I drank coffee, then I returned.",
              options: ["لِأَنَّ", "ثُمَّ", "لَٰكِنْ", "وَ"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "I'm happy because the weather is nice.",
          reference: "أَنَا سَعِيدٌ لِأَنَّ الْجَوَّ جَمِيلٌ.",
          hint: "li-anna = because; no verb 'to be' after it either.",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "Which word means 'because'?",
              options: ["thumma", "li-anna", "aw", "lākin"],
              correct: 1,
            },
            {
              q: "'thumma' means…",
              options: ["but", "or", "then / afterwards", "because"],
              correct: 2,
            },
            {
              q: "'because he…' is…",
              options: ["li-annī", "li-annahu", "li-annahā", "li-annaka"],
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
        q: "How is 'and' (wa) written?",
        options: [
          "As a separate word with a space",
          "Attached to the front of the next word",
          "At the end of the sentence",
          "Only in formal writing",
        ],
        correct: 1,
      },
      {
        q: "Which connector adds a sense of 'so / and then / as a result'?",
        options: ["wa", "fa", "aw", "lākin"],
        correct: 1,
      },
      {
        q: "'but' is…",
        options: ["wa", "aw", "lākin", "thumma"],
        correct: 2,
      },
      {
        q: "'tea or coffee?' uses which word for 'or'?",
        options: ["wa", "aw", "fa", "li-anna"],
        correct: 1,
      },
      {
        q: "Which word means 'because'?",
        options: ["thumma", "li-anna", "lākin", "fa"],
        correct: 1,
      },
      {
        q: "'then / afterwards' (sequencing events) is…",
        options: ["fa", "wa", "thumma", "aw"],
        correct: 2,
      },
      {
        q: "'because she…' is…",
        options: ["li-annahu", "li-annahā", "li-annī", "li-annaka"],
        correct: 1,
      },
      {
        q: "Which two connectors attach to the next word rather than standing alone?",
        options: ["lākin & aw", "wa & fa", "li-anna & thumma", "aw & thumma"],
        correct: 1,
      },
      {
        q: "Translate: 'The house is small but beautiful.'",
        options: [
          "al-bayt ṣaghīr wa-jamīl",
          "al-bayt ṣaghīr lākin jamīl",
          "al-bayt ṣaghīr aw jamīl",
          "al-bayt ṣaghīr thumma jamīl",
        ],
        correct: 1,
      },
      {
        q: "li-anna is most naturally used to answer which question word?",
        options: ["ayna (where)", "matā (when)", "limādhā (why)", "kam (how many)"],
        correct: 2,
      },
    ],
  },
};
