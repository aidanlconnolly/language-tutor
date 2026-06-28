import type { Unit } from "../../types";

export const UNIT_NARRATE_TRIP: Unit = {
  slug: "narrate-trip",
  stage: 5,
  order: 24,
  icon: "📖",
  title: "Narrating a trip",
  tagline: "Combine the tenses to tell your travel story.",
  badge: "core",
  lessons: [
    {
      slug: "narrate-trip-sequencing",
      title: "Sequencing a past story with connectors",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Connectors turn verbs into a story",
          body: [
            "You can now form the past (unit 20–21). The art of <strong>narration</strong> is linking those verbs so events flow in order.",
            "The core toolkit: <strong>وَ (wa, 'and')</strong>, <strong>ثُمَّ (thumma, 'then')</strong>, <strong>بَعْدَ ذَلِكَ (baʿda dhālika, 'after that')</strong>, <strong>أَوَّلاً (awwalan, 'first')</strong>, and <strong>أَخيراً (akhīran, 'finally')</strong>.",
            "Keep your verbs in the <strong>past</strong> and drop the pronoun — the -tu suffix carries 'I' the whole way: <em>awwalan waṣaltu… thumma dhahabtu… baʿda dhālika akaltu… wa-akhīran rajaʿtu</em>.",
          ],
          keyPoint:
            "Narrate the past with connectors: awwalan (first), thumma (then), baʿda dhālika (after that), akhīran (finally).",
        },
        {
          type: "vocab",
          heading: "Sequencing connectors",
          items: [
            { l1: "أَوَّلاً", en: "first / firstly", note: "awwalan" },
            { l1: "ثُمَّ", en: "then / next", note: "thumma" },
            { l1: "بَعْدَ ذَلِكَ", en: "after that", note: "baʿda dhālika" },
            { l1: "وَ", en: "and", note: "wa — attached to the next word" },
            { l1: "أَخيراً", en: "finally / at last", note: "akhīran" },
            { l1: "في النِّهاية", en: "in the end", note: "fī al-nihāya" },
            { l1: "رَجَعَ", en: "he returned", note: "rajaʿa — root r-j-ʿ" },
          ],
        },
        {
          type: "dialogue",
          heading: "Telling the story of arrival day",
          setup: "Salma recounts her first day, step by step.",
          lines: [
            { speaker: "Salma", l1: "أَوَّلاً وَصَلْتُ إلى مَطار القاهِرة.", en: "First I arrived at Cairo airport." },
            { speaker: "Salma", l1: "ثُمَّ رَكِبْتُ سَيّارة أُجْرة إلى الفُنْدُق.", en: "Then I took a taxi to the hotel." },
            { speaker: "Salma", l1: "بَعْدَ ذَلِكَ ذَهَبْتُ إلى وَسَط البَلَد.", en: "After that I went downtown." },
            { speaker: "Salma", l1: "وَأَخيراً رَجَعْتُ إلى الفُنْدُق وَنِمْتُ.", en: "And finally I returned to the hotel and slept." },
          ],
        },
        {
          type: "orderWords",
          heading: "Order the steps",
          intro: "Arrange each event with its connector at the front.",
          items: [
            { tokens: ["أَوَّلاً", "وَصَلْتُ", "إلى", "المَطار"], en: "First I arrived at the airport." },
            { tokens: ["ثُمَّ", "ذَهَبْتُ", "إلى", "الفُنْدُق"], en: "Then I went to the hotel." },
            { tokens: ["أَخيراً", "رَجَعْتُ", "إلى", "البَيْت"], en: "Finally I returned home." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Pick the connector",
          items: [
            {
              template: "___ وَصَلْتُ، ثُمَّ ذَهَبْتُ إلى السوق. (first)",
              answer: "أَوَّلاً",
              en: "First I arrived, then I went to the market.",
              options: ["أَوَّلاً", "أَخيراً", "غَداً", "أَمْس"],
            },
            {
              template: "أَكَلْتُ، وَ___ رَجَعْتُ إلى الفُنْدُق. (after that)",
              answer: "بَعْدَ ذَلِكَ",
              en: "I ate, and after that I returned to the hotel.",
              options: ["بَعْدَ ذَلِكَ", "أَوَّلاً", "سَوْفَ", "لَنْ"],
            },
          ],
        },
      ],
    },
    {
      slug: "narrate-trip-mixing",
      title: "Mixing past & present in description",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Past events, present descriptions",
          body: [
            "A good travel story switches between <strong>past</strong> (what you did) and <strong>present</strong> (what things are like). You narrate the action in the past, then pause to describe in the present.",
            "Example: <em>زُرْتُ خان الخَليلي. هُوَ سوق قَديم وَجَميل، وَيَبيعُ التُّجّار التَّوابِل.</em> — 'I visited Khan el-Khalili. It is an old, beautiful market, and the merchants sell spices.'",
            "The past verbs (zurtu) report the trip; the present verbs (yabīʿu) describe the scene as a general truth. Don't be afraid to switch — that contrast is exactly what makes narration vivid.",
          ],
          keyPoint:
            "Narrate actions in the PAST (zurtu), describe scenes/habits in the PRESENT (yabīʿu). Switch deliberately.",
        },
        {
          type: "vocab",
          heading: "Describing what you saw",
          items: [
            { l1: "قَديم", en: "old / ancient", note: "qadīm" },
            { l1: "مُزْدَحِم", en: "crowded", note: "muzdaḥim" },
            { l1: "يَبيعُ", en: "he sells", note: "yabīʿu — root b-y-ʿ (present)" },
            { l1: "يَقَعُ", en: "it is located", note: "yaqaʿu — root w-q-ʿ (present)" },
            { l1: "التَّوابِل", en: "spices", note: "al-tawābil" },
            { l1: "النيل", en: "the Nile", note: "al-Nīl" },
          ],
        },
        {
          type: "dialogue",
          heading: "Describing Khan el-Khalili",
          setup: "Tariq tells a friend about the famous bazaar.",
          lines: [
            { speaker: "Tariq", l1: "أَمْس زُرْتُ خان الخَليلي.", en: "Yesterday I visited Khan el-Khalili." },
            { speaker: "Friend", l1: "كَيْفَ هُوَ؟", en: "What's it like?" },
            { speaker: "Tariq", l1: "هُوَ سوق قَديم وَمُزْدَحِم، يَقَعُ في وَسَط القاهِرة.", en: "It is an old, crowded market, located in central Cairo." },
            { speaker: "Tariq", l1: "التُّجّار يَبيعونَ التَّوابِل وَالذَّهَب.", en: "The merchants sell spices and gold." },
            { speaker: "Friend", l1: "وَهَل اِشْتَرَيْتَ شَيْئاً؟", en: "And did you buy anything?" },
            { speaker: "Tariq", l1: "نَعَم، اِشْتَرَيْتُ هَدِيّة لِأُمّي.", en: "Yes, I bought a gift for my mother." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Past action or present description?",
          items: [
            {
              template: "أَمْس ___ المَتْحَف. (visit — past, I)",
              answer: "زُرْتُ",
              en: "Yesterday I visited the museum.",
              options: ["زُرْتُ", "أَزورُ", "سَأَزورُ", "لَنْ أَزورَ"],
            },
            {
              template: "المَتْحَف ___ في وَسَط القاهِرة. (be located — present)",
              answer: "يَقَعُ",
              en: "The museum is located in central Cairo.",
              options: ["يَقَعُ", "وَقَعَ", "سَيَقَعُ", "لَنْ يَقَعَ"],
            },
            {
              template: "التُّجّار ___ التَّوابِل. (sell — present, they)",
              answer: "يَبيعونَ",
              en: "The merchants sell spices.",
              options: ["يَبيعونَ", "باعوا", "سَيَبيعونَ", "يَبيعُ"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Yesterday I visited the old market; it is located in central Cairo.",
          reference: "أَمْس زُرْتُ السوق القَديم، وَهُوَ يَقَعُ في وَسَط القاهِرة.",
          hint: "Past action (zurtu) + present description (yaqaʿu). Link with wa-huwa ('and it').",
        },
      ],
    },
    {
      slug: "narrate-trip-future",
      title: "Talking about future travel",
      estMinutes: 10,
      pages: [
        {
          type: "intro",
          heading: "Bringing all three tenses together",
          body: [
            "A complete travel account moves through time: <strong>what you did</strong> (past), <strong>where you are / what it's like</strong> (present), and <strong>what you'll do next</strong> (future).",
            "Past: <em>وَصَلْتُ أَمْس</em> (I arrived yesterday). Present: <em>أَسْكُنُ في فُنْدُق قُرْبَ النيل</em> (I'm staying in a hotel near the Nile). Future: <em>غَداً سَأَزورُ الأَهْرام</em> (tomorrow I'll visit the pyramids).",
            "This is the payoff of the whole stage: with mā / lā / lan for negation and sa-/sawfa for the future, you can narrate a real trip from start to finish.",
          ],
          keyPoint:
            "A full account spans tenses: arrived (past) → staying (present) → will visit (future). You now have all three.",
        },
        {
          type: "conjugation",
          heading: "One verb across all three tenses",
          verb: "زارَ / يَزورُ (zāra / yazūru)",
          meaning: "to visit",
          intro: "See how 'I visit' shifts across past, present, and future.",
          tenses: [
            {
              name: "to visit — anā across the tenses",
              forms: [
                { person: "Past (māḍī)", form: "زُرْتُ (zurtu)", en: "I visited" },
                { person: "Present (muḍāriʿ)", form: "أَزورُ (azūru)", en: "I visit / am visiting" },
                { person: "Future (sa-)", form: "سَأَزورُ (sa-azūru)", en: "I will visit" },
                { person: "Future neg. (lan)", form: "لَنْ أَزورَ (lan azūra)", en: "I will not visit" },
              ],
            },
          ],
        },
        {
          type: "dialogue",
          heading: "My Cairo trip, beginning to end",
          setup: "Yara sums up her week for a friend back home.",
          lines: [
            { speaker: "Yara", l1: "وَصَلْتُ إلى القاهِرة قَبْلَ ثَلاثة أَيّام.", en: "I arrived in Cairo three days ago." },
            { speaker: "Yara", l1: "الآنَ أَسْكُنُ في فُنْدُق قُرْبَ النيل.", en: "Now I'm staying in a hotel near the Nile." },
            { speaker: "Yara", l1: "أَمْس زُرْتُ المَتْحَف وَأَكَلْتُ الكُشَري.", en: "Yesterday I visited the museum and ate koshari." },
            { speaker: "Yara", l1: "غَداً سَأَزورُ الأَهْرام، ثُمَّ سَأُسافِرُ إلى الأُقْصُر.", en: "Tomorrow I'll visit the pyramids, then I'll travel to Luxor." },
            { speaker: "Friend", l1: "رِحْلة رائِعة! لَنْ تَنْسَيْها أَبَداً.", en: "A wonderful trip! You'll never forget it." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Choose the right tense",
          items: [
            {
              template: "أَمْس ___ إلى القاهِرة. (arrive — past)",
              answer: "وَصَلْتُ",
              en: "Yesterday I arrived in Cairo.",
              options: ["وَصَلْتُ", "أَصِلُ", "سَأَصِلُ", "لَنْ أَصِلَ"],
            },
            {
              template: "الآنَ ___ في فُنْدُق. (stay — present)",
              answer: "أَسْكُنُ",
              en: "Now I'm staying in a hotel.",
              options: ["أَسْكُنُ", "سَكَنْتُ", "سَأَسْكُنُ", "لَنْ أَسْكُنَ"],
            },
            {
              template: "غَداً ___ الأَهْرام. (visit — future)",
              answer: "سَأَزورُ",
              en: "Tomorrow I will visit the pyramids.",
              options: ["سَأَزورُ", "زُرْتُ", "أَزورُ", "لَنْ أَزورَ"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Tell what you did on your first day in Cairo: I arrived in the morning, then I went downtown and ate koshari. Tomorrow I will visit the pyramids.",
          reference: "وَصَلْتُ في الصَّباح، ثُمَّ ذَهَبْتُ إلى وَسَط البَلَد وَأَكَلْتُ الكُشَري. غَداً سَأَزورُ الأَهْرام.",
          hint: "Past for the day (waṣaltu, dhahabtu, akaltu), connector thumma, then a future plan with sa- (sa-azūru).",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "'I visited' (past) =",
              options: ["زُرْتُ (zurtu)", "أَزورُ (azūru)", "سَأَزورُ (sa-azūru)", "لَنْ أَزورَ (lan azūra)"],
              correct: 0,
            },
            {
              q: "'I will visit' (future) =",
              options: ["زُرْتُ (zurtu)", "أَزورُ (azūru)", "سَأَزورُ (sa-azūru)", "ما زُرْتُ (mā zurtu)"],
              correct: 2,
            },
            {
              q: "In a trip story, you narrate ACTIONS in the ___ and describe SCENES in the ___.",
              options: ["future / past", "past / present", "present / future", "past / future"],
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
        q: "'First / firstly' as a sequencing word is…",
        options: ["أَخيراً (akhīran)", "أَوَّلاً (awwalan)", "ثُمَّ (thumma)", "بَعْدَ ذَلِكَ (baʿda dhālika)"],
        correct: 1,
      },
      {
        q: "'Then / next' is…",
        options: ["ثُمَّ (thumma)", "أَوَّلاً (awwalan)", "غَداً (ghadan)", "أَمْس (ams)"],
        correct: 0,
      },
      {
        q: "'Finally' is…",
        options: ["أَوَّلاً (awwalan)", "ثُمَّ (thumma)", "أَخيراً (akhīran)", "وَ (wa)"],
        correct: 2,
      },
      {
        q: "'I returned' (past) =",
        options: ["رَجَعْتُ (rajaʿtu)", "أَرْجِعُ (arjiʿu)", "سَأَرْجِعُ (sa-arjiʿu)", "رَجَعَ (rajaʿa)"],
        correct: 0,
      },
      {
        q: "In narration, you report ACTIONS mainly in which tense?",
        options: ["present", "past", "future", "command"],
        correct: 1,
      },
      {
        q: "'The museum is located in central Cairo' uses يَقَعُ — which tense?",
        options: ["past", "present", "future", "negated future"],
        correct: 1,
      },
      {
        q: "'Tomorrow I will visit the pyramids' =",
        options: [
          "أَمْس زُرْتُ الأَهْرام",
          "الآنَ أَزورُ الأَهْرام",
          "غَداً سَأَزورُ الأَهْرام",
          "لَنْ أَزورَ الأَهْرام",
        ],
        correct: 2,
      },
      {
        q: "Which orders the tenses correctly for a trip account?",
        options: [
          "will visit → visited → am staying",
          "arrived (past) → staying (present) → will visit (future)",
          "staying → will visit → arrived",
          "will visit → arrived → staying",
        ],
        correct: 1,
      },
      {
        q: "'I will not visit' =",
        options: ["زُرْتُ (zurtu)", "سَأَزورُ (sa-azūru)", "لَنْ أَزورَ (lan azūra)", "لا أَزورُ (lā azūru)"],
        correct: 2,
      },
      {
        q: "Translate: 'I arrived in the morning, then I went downtown.'",
        options: [
          "سَأَصِلُ في الصَّباح، ثُمَّ سَأَذْهَبُ إلى وَسَط البَلَد",
          "وَصَلْتُ في الصَّباح، ثُمَّ ذَهَبْتُ إلى وَسَط البَلَد",
          "أَصِلُ في الصَّباح، ثُمَّ أَذْهَبُ إلى وَسَط البَلَد",
          "ما وَصَلْتُ في الصَّباح، ثُمَّ ما ذَهَبْتُ",
        ],
        correct: 1,
      },
    ],
  },
};
