import type { Unit } from "../../types";

export const UNIT_PAST_PRONOUNS: Unit = {
  slug: "past-pronouns",
  stage: 5,
  order: 21,
  icon: "🏃",
  title: "Past with pronouns",
  tagline: "Full past conjugation (-tu/-ta/-ti) with common verbs.",
  badge: "core",
  lessons: [
    {
      slug: "past-pronouns-suffixes",
      title: "The full past suffix set",
      estMinutes: 10,
      pages: [
        {
          type: "intro",
          heading: "The past tense is built from suffixes",
          body: [
            "In unit 20 you met كَتَبَ (kataba, 'he wrote') and كَتَبَتْ (katabat, 'she wrote'). Now we add a tidy set of <strong>suffixes</strong> for every person. The stem كَتَب (katab-) stays put; only the ending changes.",
            "Notice the I/you endings all start with <strong>-t-</strong>: <strong>-tu</strong> (I), <strong>-ta</strong> (you m.), <strong>-ti</strong> (you f.). The single letter at the end does all the work — listen for it.",
            "Because the suffix already tells you who the subject is, the <strong>pronoun is usually dropped</strong>: <em>katabtu</em> alone means 'I wrote' — you don't need anā.",
            "The whole set: <strong>-tu</strong> (anā), <strong>-ta</strong> (anta), <strong>-ti</strong> (anti), <strong>∅</strong> -a (huwa), <strong>-at</strong> (hiya), <strong>-nā</strong> (naḥnu), <strong>-tum</strong> (antum), <strong>-ū</strong> (hum).",
          ],
          keyPoint:
            "Stem stays (katab-); suffix marks the person: -tu/-ta/-ti/-a/-at/-nā/-tum/-ū. Pronoun usually dropped.",
        },
        {
          type: "conjugation",
          heading: "Full past tense of kataba",
          verb: "كَتَبَ (kataba)",
          meaning: "to write",
          intro: "The model 'faʿala' verb across all persons. The harakat show each ending clearly.",
          tenses: [
            {
              name: "Past tense — all persons",
              forms: [
                { person: "anā", form: "كَتَبْتُ (katabtu)", en: "I wrote" },
                { person: "anta", form: "كَتَبْتَ (katabta)", en: "you wrote (m.)" },
                { person: "anti", form: "كَتَبْتِ (katabti)", en: "you wrote (f.)" },
                { person: "huwa", form: "كَتَبَ (kataba)", en: "he wrote" },
                { person: "hiya", form: "كَتَبَتْ (katabat)", en: "she wrote" },
                { person: "naḥnu", form: "كَتَبْنا (katabnā)", en: "we wrote" },
                { person: "antum", form: "كَتَبْتُمْ (katabtum)", en: "you wrote (pl.)" },
                { person: "hum", form: "كَتَبوا (katabū)", en: "they wrote" },
              ],
            },
          ],
        },
        {
          type: "tip",
          heading: "The silent alif on -ū",
          body: "The 'they' form كَتَبوا (katabū) is written with a final <strong>alif (ا)</strong> after the wāw — but it is <strong>silent</strong>, a spelling convention only. You say <em>katabū</em>, not <em>katabūā</em>. Watch for it: قالوا (qālū, 'they said'), ذَهَبوا (dhahabū, 'they went').",
          example: { l1: "ذَهَبوا إلى القاهِرة.", en: "They went to Cairo." },
        },
        {
          type: "fillBlank",
          heading: "Match the suffix to the pronoun",
          intro: "Use the stem darab- (darasa, 'to study' → daras-) — pick the right ending.",
          items: [
            {
              template: "أنا ___ العَرَبِيّة. (study)",
              answer: "دَرَسْتُ",
              en: "I studied Arabic.",
              options: ["دَرَسْتُ", "دَرَسْتَ", "دَرَسَ", "دَرَسوا"],
            },
            {
              template: "أنتَ ___ في الجامِعة. (study)",
              answer: "دَرَسْتَ",
              en: "You (m.) studied at the university.",
              options: ["دَرَسْتُ", "دَرَسْتَ", "دَرَسْتِ", "دَرَسْنا"],
            },
            {
              template: "نَحْنُ ___ كَثيراً. (study)",
              answer: "دَرَسْنا",
              en: "We studied a lot.",
              options: ["دَرَسْنا", "دَرَسْتُمْ", "دَرَسوا", "دَرَسْتُ"],
            },
            {
              template: "هُمْ ___ التاريخ. (study)",
              answer: "دَرَسوا",
              en: "They studied history.",
              options: ["دَرَسوا", "دَرَسَ", "دَرَسْنا", "دَرَسْتُمْ"],
            },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Which person?",
          questions: [
            {
              q: "كَتَبْتُ (katabtu) means…",
              options: ["he wrote", "I wrote", "you wrote (f.)", "we wrote"],
              correct: 1,
              fb: "The suffix -tu (ـْتُ) marks 'I'.",
            },
            {
              q: "Which ending marks 'you' feminine singular?",
              options: ["-ta", "-ti", "-tu", "-tum"],
              correct: 1,
              fb: "-ti (ـْتِ) is 'you (f.)'; -ta (ـْتَ) is 'you (m.)'.",
            },
            {
              q: "كَتَبوا (katabū) means…",
              options: ["we wrote", "you all wrote", "they wrote", "she wrote"],
              correct: 2,
              fb: "The -ū ending (with silent alif) is 'they'.",
            },
          ],
        },
      ],
    },
    {
      slug: "past-pronouns-travel",
      title: "Travel verbs in every person",
      estMinutes: 9,
      pages: [
        {
          type: "vocab",
          heading: "Verbs for getting around",
          intro: "Citation form (he-past) with root in the note. You'll conjugate these next.",
          items: [
            { l1: "سافَرَ", en: "he travelled", note: "sāfara — root s-f-r" },
            { l1: "وَصَلَ", en: "he arrived", note: "waṣala — root w-ṣ-l" },
            { l1: "رَكِبَ", en: "he rode / boarded", note: "rakiba — root r-k-b" },
            { l1: "نَزَلَ", en: "he got off / stayed (at a hotel)", note: "nazala — root n-z-l" },
            { l1: "حَجَزَ", en: "he booked / reserved", note: "ḥajaza — root ḥ-j-z" },
            { l1: "وَجَدَ", en: "he found", note: "wajada — root w-j-d" },
          ],
        },
        {
          type: "conjugation",
          heading: "sāfara across the persons",
          verb: "سافَرَ (sāfara)",
          meaning: "to travel",
          intro: "Same suffix set as kataba, glued onto the stem sāfar-.",
          tenses: [
            {
              name: "Past tense — to travel",
              forms: [
                { person: "anā", form: "سافَرْتُ (sāfartu)", en: "I travelled" },
                { person: "anta", form: "سافَرْتَ (sāfarta)", en: "you travelled (m.)" },
                { person: "anti", form: "سافَرْتِ (sāfarti)", en: "you travelled (f.)" },
                { person: "huwa", form: "سافَرَ (sāfara)", en: "he travelled" },
                { person: "hiya", form: "سافَرَتْ (sāfarat)", en: "she travelled" },
                { person: "naḥnu", form: "سافَرْنا (sāfarnā)", en: "we travelled" },
                { person: "antum", form: "سافَرْتُمْ (sāfartum)", en: "you travelled (pl.)" },
                { person: "hum", form: "سافَروا (sāfarū)", en: "they travelled" },
              ],
            },
          ],
        },
        {
          type: "dialogue",
          heading: "Arriving in Cairo",
          setup: "Two friends compare how they reached the city.",
          lines: [
            { speaker: "Omar", l1: "كَيْفَ سافَرْتَ إلى القاهِرة؟", en: "How did you travel to Cairo?" },
            { speaker: "Sami", l1: "رَكِبْتُ الطائِرة وَوَصَلْتُ أَمْس.", en: "I took the plane and arrived yesterday." },
            { speaker: "Omar", l1: "وَأَيْنَ نَزَلْتَ؟", en: "And where did you stay?" },
            { speaker: "Sami", l1: "حَجَزْتُ فُنْدُقاً قَريباً مِن النيل.", en: "I booked a hotel near the Nile." },
            { speaker: "Omar", l1: "نَحْنُ سافَرْنا بِالقِطار.", en: "We travelled by train." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Travel-verb drill",
          items: [
            {
              template: "أنا ___ الطائِرة. (rode)",
              answer: "رَكِبْتُ",
              en: "I took (boarded) the plane.",
              options: ["رَكِبْتُ", "رَكِبَ", "رَكِبْنا", "رَكِبوا"],
            },
            {
              template: "نَحْنُ ___ إلى الإسْكَنْدَرِيّة. (travelled)",
              answer: "سافَرْنا",
              en: "We travelled to Alexandria.",
              options: ["سافَرْنا", "سافَرْتُ", "سافَرَ", "سافَرْتُمْ"],
            },
            {
              template: "هِيَ ___ فُنْدُقاً جَميلاً. (booked)",
              answer: "حَجَزَتْ",
              en: "She booked a beautiful hotel.",
              options: ["حَجَزَتْ", "حَجَزَ", "حَجَزْتُ", "حَجَزوا"],
            },
            {
              template: "هُمْ ___ أَمْس. (arrived)",
              answer: "وَصَلوا",
              en: "They arrived yesterday.",
              options: ["وَصَلوا", "وَصَلَ", "وَصَلْنا", "وَصَلْتُمْ"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "I travelled to Cairo and stayed at a hotel near the Nile.",
          reference: "سافَرْتُ إلى القاهِرة وَنَزَلْتُ في فُنْدُق قَريب مِن النيل.",
          hint: "Two 'I' verbs: sāfartu, nazaltu. 'Near the Nile' = qarīb min al-Nīl.",
        },
      ],
    },
    {
      slug: "past-pronouns-narratives",
      title: "Building short past narratives",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Stringing past verbs together",
          body: [
            "Now combine several past verbs into a little story. The Arabic glue word is <strong>وَ (wa, 'and')</strong>, written attached to the next word: وَأَكَلْتُ (wa-akaltu, 'and I ate').",
            "For sequence, use <strong>ثُمَّ (thumma, 'then')</strong> and <strong>بَعْدَ ذَلِكَ (baʿda dhālika, 'after that')</strong> — full coverage comes in unit 24, but they're handy here.",
            "Keep the subject consistent and let the suffixes carry the meaning: <em>waṣaltu… ḏahabtu… akaltu…</em> — 'I arrived… I went… I ate…'.",
          ],
          keyPoint:
            "Link past verbs with wa- (and), thumma (then), baʿda dhālika (after that). Drop the pronoun; the -tu suffix carries 'I'.",
        },
        {
          type: "vocab",
          heading: "Connectors & time words",
          items: [
            { l1: "وَ", en: "and", note: "wa — attached to the next word" },
            { l1: "ثُمَّ", en: "then / next", note: "thumma" },
            { l1: "بَعْدَ ذَلِكَ", en: "after that", note: "baʿda dhālika" },
            { l1: "أَمْس", en: "yesterday", note: "ams" },
            { l1: "في الصَّباح", en: "in the morning", note: "fī al-ṣabāḥ" },
            { l1: "في المَساء", en: "in the evening", note: "fī al-masāʾ" },
          ],
        },
        {
          type: "dialogue",
          heading: "My day in Cairo (a mini-narrative)",
          setup: "Nadia tells a friend about yesterday.",
          lines: [
            { speaker: "Nadia", l1: "أَمْس وَصَلْتُ إلى القاهِرة في الصَّباح.", en: "Yesterday I arrived in Cairo in the morning." },
            { speaker: "Nadia", l1: "ثُمَّ ذَهَبْتُ إلى خان الخَليلي.", en: "Then I went to Khan el-Khalili." },
            { speaker: "Nadia", l1: "وَأَكَلْتُ في مَطْعَم صَغير.", en: "And I ate at a small restaurant." },
            { speaker: "Nadia", l1: "بَعْدَ ذَلِكَ شَرِبْتُ شاي بِالنَّعْناع.", en: "After that I drank mint tea." },
            { speaker: "Friend", l1: "يَوْم جَميل! وَأنا دَرَسْتُ العَرَبِيّة كُلَّ اليَوْم.", en: "A lovely day! And I studied Arabic all day." },
          ],
        },
        {
          type: "orderWords",
          heading: "Order the narrative",
          intro: "Arrange each into a natural past sentence.",
          items: [
            { tokens: ["أَمْس", "وَصَلْتُ", "إلى", "القاهِرة"], en: "Yesterday I arrived in Cairo." },
            { tokens: ["ثُمَّ", "ذَهَبْتُ", "إلى", "السوق"], en: "Then I went to the market." },
            { tokens: ["بَعْدَ", "ذَلِكَ", "أَكَلْنا", "الكُشَري"], en: "After that we ate koshari." },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Yesterday we arrived in the morning, then we went to the market and ate.",
          reference: "أَمْس وَصَلْنا في الصَّباح، ثُمَّ ذَهَبْنا إلى السوق وَأَكَلْنا.",
          hint: "All 'we' forms: waṣalnā, dhahabnā, akalnā. Use thumma for 'then'.",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "'Then / next' in a sequence is…",
              options: ["وَ (wa)", "ثُمَّ (thumma)", "ما (mā)", "هَل (hal)"],
              correct: 1,
            },
            {
              q: "'We went' =",
              options: ["ذَهَبْتُ (dhahabtu)", "ذَهَبْنا (dhahabnā)", "ذَهَبوا (dhahabū)", "ذَهَبَ (dhahaba)"],
              correct: 1,
            },
            {
              q: "When the suffix already shows the subject, the pronoun is usually…",
              options: ["repeated twice", "dropped", "moved to the end", "required"],
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
        q: "The past suffix for 'I' (anā) is…",
        options: ["-ta", "-tu", "-ti", "-nā"],
        correct: 1,
      },
      {
        q: "The past suffix for 'you' masculine (anta) is…",
        options: ["-tu", "-ta", "-ti", "-tum"],
        correct: 1,
      },
      {
        q: "The past suffix for 'you' feminine (anti) is…",
        options: ["-ta", "-ti", "-tu", "-na"],
        correct: 1,
      },
      {
        q: "كَتَبْنا (katabnā) means…",
        options: ["I wrote", "you wrote", "we wrote", "they wrote"],
        correct: 2,
      },
      {
        q: "'They wrote' is كَتَبوا — the final alif is…",
        options: ["pronounced -ā", "silent (spelling only)", "a typo", "a feminine marker"],
        correct: 1,
      },
      {
        q: "'I travelled' =",
        options: ["سافَرَ (sāfara)", "سافَرْتُ (sāfartu)", "سافَرْنا (sāfarnā)", "سافَروا (sāfarū)"],
        correct: 1,
      },
      {
        q: "'She booked (a hotel)' =",
        options: ["حَجَزَ (ḥajaza)", "حَجَزْتُ (ḥajaztu)", "حَجَزَتْ (ḥajazat)", "حَجَزوا (ḥajazū)"],
        correct: 2,
      },
      {
        q: "Which word means 'after that'?",
        options: ["ثُمَّ (thumma)", "بَعْدَ ذَلِكَ (baʿda dhālika)", "أَمْس (ams)", "وَ (wa)"],
        correct: 1,
      },
      {
        q: "'We arrived yesterday' =",
        options: [
          "وَصَلْتُ أَمْس",
          "وَصَلْنا أَمْس",
          "وَصَلوا أَمْس",
          "وَصَلَ أَمْس",
        ],
        correct: 1,
      },
      {
        q: "Because the suffix marks the subject, the pronoun anā/anta/… is normally…",
        options: ["mandatory", "dropped", "written after the verb", "replaced by mā"],
        correct: 1,
      },
    ],
  },
};
