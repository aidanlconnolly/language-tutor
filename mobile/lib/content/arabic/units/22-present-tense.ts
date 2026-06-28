import type { Unit } from "../../types";

export const UNIT_PRESENT_TENSE: Unit = {
  slug: "present-tense",
  stage: 5,
  order: 22,
  icon: "🌅",
  title: "The present tense",
  tagline: "The imperfect (yafʿalu) — prefixes and suffixes.",
  badge: "core",
  lessons: [
    {
      slug: "present-tense-prefixes",
      title: "The imperfect prefixes: a- / ta- / ya- / na-",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "The present is built with prefixes",
          body: [
            "Where the past tense glued <strong>suffixes</strong> onto the stem, the present (the <strong>imperfect</strong>, المُضارِع al-muḍāriʿ) works mostly with <strong>prefixes</strong>.",
            "From كَتَبَ (kataba) we get the present stem <strong>-ktub-</strong>, and the model present is <strong>يَكْتُبُ (yaktubu)</strong>, 'he writes'. The grammarians' name for the pattern is <strong>yafʿalu</strong> (يَفْعَلُ).",
            "The four core prefixes: <strong>أَ- (a-)</strong> = I, <strong>تَ- (ta-)</strong> = you (m.) / she, <strong>يَ- (ya-)</strong> = he, <strong>نَ- (na-)</strong> = we. Notice that <em>ta-</em> does double duty for 'you (m.)' and 'she'.",
            "The default final vowel is <strong>-u (ـُ)</strong>: aktubu, taktubu, yaktubu, naktubu.",
          ],
          keyPoint:
            "Present = prefix + stem: a- (I), ta- (you m./she), ya- (he), na- (we), ending in -u. Pattern name: yafʿalu.",
        },
        {
          type: "conjugation",
          heading: "Core prefixes on kataba",
          verb: "يَكْتُبُ (yaktubu)",
          meaning: "to write (present)",
          intro: "Same stem -ktub-, four different prefixes.",
          tenses: [
            {
              name: "Present — the four core persons",
              forms: [
                { person: "anā", form: "أَكْتُبُ (aktubu)", en: "I write" },
                { person: "anta", form: "تَكْتُبُ (taktubu)", en: "you write (m.)" },
                { person: "huwa", form: "يَكْتُبُ (yaktubu)", en: "he writes" },
                { person: "hiya", form: "تَكْتُبُ (taktubu)", en: "she writes" },
                { person: "naḥnu", form: "نَكْتُبُ (naktubu)", en: "we write" },
              ],
            },
          ],
        },
        {
          type: "tip",
          heading: "ta- is shared by 'you (m.)' and 'she'",
          body: "Both <strong>anta</strong> (you, m.) and <strong>hiya</strong> (she) take the <strong>تَ- (ta-)</strong> prefix in the present: تَكْتُبُ (taktubu) can mean 'you write' OR 'she writes'. Context — or the explicit pronoun — tells them apart. The feminine 'you' (anti) adds an extra ending, coming up next lesson.",
          example: { l1: "هِيَ تَدْرُسُ العَرَبِيّة.", en: "She studies Arabic." },
        },
        {
          type: "vocab",
          heading: "Verbs in past → present pairs",
          intro: "Learn each verb in both tenses; the present stem can shift its inner vowel.",
          items: [
            { l1: "كَتَبَ / يَكْتُبُ", en: "wrote / writes", note: "kataba / yaktubu — root k-t-b" },
            { l1: "دَرَسَ / يَدْرُسُ", en: "studied / studies", note: "darasa / yadrusu — root d-r-s" },
            { l1: "ذَهَبَ / يَذْهَبُ", en: "went / goes", note: "dhahaba / yadhhabu — root dh-h-b" },
            { l1: "شَرِبَ / يَشْرَبُ", en: "drank / drinks", note: "shariba / yashrabu — root sh-r-b" },
            { l1: "سَكَنَ / يَسْكُنُ", en: "lived / lives", note: "sakana / yaskunu — root s-k-n" },
          ],
        },
        {
          type: "fillBlank",
          heading: "Pick the prefix",
          items: [
            {
              template: "أنا ___ في القاهِرة. (live)",
              answer: "أَسْكُنُ",
              en: "I live in Cairo.",
              options: ["أَسْكُنُ", "تَسْكُنُ", "يَسْكُنُ", "نَسْكُنُ"],
            },
            {
              template: "هُوَ ___ العَرَبِيّة. (study)",
              answer: "يَدْرُسُ",
              en: "He studies Arabic.",
              options: ["يَدْرُسُ", "أَدْرُسُ", "تَدْرُسُ", "نَدْرُسُ"],
            },
            {
              template: "نَحْنُ ___ إلى السوق. (go)",
              answer: "نَذْهَبُ",
              en: "We go to the market.",
              options: ["نَذْهَبُ", "يَذْهَبُ", "أَذْهَبُ", "تَذْهَبُ"],
            },
          ],
        },
      ],
    },
    {
      slug: "present-tense-full",
      title: "Full present conjugation",
      estMinutes: 10,
      pages: [
        {
          type: "intro",
          heading: "Plural and feminine forms",
          body: [
            "The plural 'you' and 'they' add a <strong>suffix on top of the prefix</strong>: تَكْتُبونَ (taktubūna, 'you all write') and يَكْتُبونَ (yaktubūna, 'they write') both take the ending <strong>-ūna (ـونَ)</strong>.",
            "The feminine 'you' (anti) takes <strong>ta- … -īna</strong>: تَكْتُبينَ (taktubīna, 'you (f.) write').",
            "So the present mixes a prefix (who) with sometimes a suffix (number/gender). Take it slowly — the prefix is the anchor.",
          ],
          keyPoint:
            "anti = ta-…-īna; antum/hum = ta-/ya-…-ūna. Prefix marks person, the -īna/-ūna suffix marks gender/number.",
        },
        {
          type: "conjugation",
          heading: "yaktubu — every person",
          verb: "يَكْتُبُ (yaktubu)",
          meaning: "to write (present)",
          intro: "The complete imperfect. Watch the prefix change and the plural -ūna endings.",
          tenses: [
            {
              name: "Present tense — all persons",
              forms: [
                { person: "anā", form: "أَكْتُبُ (aktubu)", en: "I write" },
                { person: "anta", form: "تَكْتُبُ (taktubu)", en: "you write (m.)" },
                { person: "anti", form: "تَكْتُبينَ (taktubīna)", en: "you write (f.)" },
                { person: "huwa", form: "يَكْتُبُ (yaktubu)", en: "he writes" },
                { person: "hiya", form: "تَكْتُبُ (taktubu)", en: "she writes" },
                { person: "naḥnu", form: "نَكْتُبُ (naktubu)", en: "we write" },
                { person: "antum", form: "تَكْتُبونَ (taktubūna)", en: "you write (pl.)" },
                { person: "hum", form: "يَكْتُبونَ (yaktubūna)", en: "they write" },
              ],
            },
          ],
        },
        {
          type: "dialogue",
          heading: "What do you do every day?",
          setup: "Two students chat about routines in Cairo.",
          lines: [
            { speaker: "Hana", l1: "ماذا تَفْعَلينَ كُلَّ يَوْم؟", en: "What do you do every day? (to a woman)" },
            { speaker: "Mona", l1: "أَدْرُسُ العَرَبِيّة وَأَكْتُبُ في دَفْتَري.", en: "I study Arabic and write in my notebook." },
            { speaker: "Hana", l1: "وَأَيْنَ تَسْكُنينَ؟", en: "And where do you live?" },
            { speaker: "Mona", l1: "أَسْكُنُ قُرْبَ الجامِعة. وَأنتِ؟", en: "I live near the university. And you?" },
            { speaker: "Hana", l1: "نَحْنُ نَسْكُنُ في الزَّمالِك.", en: "We live in Zamalek." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Complete the present",
          items: [
            {
              template: "أنتِ ___ العَرَبِيّة. (study, f.)",
              answer: "تَدْرُسينَ",
              en: "You (f.) study Arabic.",
              options: ["تَدْرُسينَ", "تَدْرُسُ", "يَدْرُسُ", "أَدْرُسُ"],
            },
            {
              template: "هُمْ ___ إلى المَدْرَسة. (go)",
              answer: "يَذْهَبونَ",
              en: "They go to school.",
              options: ["يَذْهَبونَ", "يَذْهَبُ", "تَذْهَبونَ", "نَذْهَبُ"],
            },
            {
              template: "أنتُمْ ___ الشاي. (drink)",
              answer: "تَشْرَبونَ",
              en: "You (pl.) drink the tea.",
              options: ["تَشْرَبونَ", "يَشْرَبونَ", "تَشْرَبُ", "نَشْرَبُ"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "I live in Cairo and study Arabic at the university.",
          reference: "أَسْكُنُ في القاهِرة وَأَدْرُسُ العَرَبِيّة في الجامِعة.",
          hint: "Two 'I' present verbs: askunu, adrusu. Both take the a- prefix.",
        },
      ],
    },
    {
      slug: "present-tense-habitual-negation",
      title: "Habitual present & negation with lā",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "The present covers habits and the now",
          body: [
            "The imperfect (yaktubu) covers both <strong>'he writes' (habitually)</strong> and <strong>'he is writing' (right now)</strong>. Arabic doesn't split these the way English does.",
            "Pair it with frequency words like <strong>كُلَّ يَوْم (kulla yawm, 'every day')</strong>, <strong>دائِماً (dāʾiman, 'always')</strong>, and <strong>أَحْياناً (aḥyānan, 'sometimes')</strong> for habits.",
            "To negate the present, put <strong>لا (lā)</strong> directly before the verb — and the verb keeps its <strong>-u</strong> ending: <strong>لا يَكْتُبُ (lā yaktubu)</strong> = 'he does not write' / 'he isn't writing'.",
            "Don't confuse the negators: <em>mā</em> negates the <strong>past</strong> (unit 20); <em>lā</em> negates the <strong>present</strong>.",
          ],
          keyPoint:
            "lā (لا) before the present verb = 'does not …'. lā yaktubu = 'he doesn't write'. (mā = past, lā = present.)",
        },
        {
          type: "vocab",
          heading: "Frequency words & negation",
          items: [
            { l1: "كُلَّ يَوْم", en: "every day", note: "kulla yawm" },
            { l1: "دائِماً", en: "always", note: "dāʾiman" },
            { l1: "أَحْياناً", en: "sometimes", note: "aḥyānan" },
            { l1: "عادةً", en: "usually", note: "ʿādatan" },
            { l1: "لا", en: "not (negates the present)", note: "lā — before the verb, keeps the -u ending" },
            { l1: "لا أَدْري", en: "I don't know", note: "lā adrī — handy fixed phrase" },
          ],
        },
        {
          type: "tip",
          heading: "lā keeps the -u; that's the giveaway",
          body: "Unlike the formal past-negator <em>lam</em> (which clips the ending), <strong>lā</strong> leaves the present verb fully voweled with its <strong>-u</strong>: لا يَشْرَبُ القَهْوة (lā yashrabu al-qahwa) = 'he doesn't drink coffee'. If you hear a final -u after lā, you're squarely in the present.",
          example: { l1: "أنا لا أَشْرَبُ القَهْوة.", en: "I don't drink coffee." },
        },
        {
          type: "fillBlank",
          heading: "Habits & negation",
          items: [
            {
              template: "هُوَ يَدْرُسُ ___ . (every day)",
              answer: "كُلَّ يَوْم",
              en: "He studies every day.",
              options: ["كُلَّ يَوْم", "أَمْس", "غَداً", "ثُمَّ"],
            },
            {
              template: "أنا ___ أَشْرَبُ القَهْوة. (don't)",
              answer: "لا",
              en: "I don't drink coffee.",
              options: ["لا", "ما", "لَنْ", "هَل"],
            },
            {
              template: "هِيَ لا ___ اللَّحْم. (eat)",
              answer: "تَأْكُلُ",
              en: "She doesn't eat meat.",
              options: ["تَأْكُلُ", "أَكَلَتْ", "يَأْكُلُ", "نَأْكُلُ"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "She always studies Arabic, but she doesn't drink coffee.",
          reference: "هِيَ تَدْرُسُ العَرَبِيّة دائِماً، لَكِنْ لا تَشْرَبُ القَهْوة.",
          hint: "Present 'she' = ta- prefix (tadrusu, tashrabu). Negate with lā; 'but' = lākin (لَكِنْ).",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "Which particle negates the PRESENT tense?",
              options: ["ما (mā)", "لا (lā)", "لَنْ (lan)", "هَل (hal)"],
              correct: 1,
            },
            {
              q: "After لا, the present verb keeps which ending?",
              options: ["-a", "-i", "-u", "no ending"],
              correct: 2,
            },
            {
              q: "'He doesn't drink coffee' =",
              options: ["ما شَرِبَ القَهْوة", "لا يَشْرَبُ القَهْوة", "لَنْ يَشْرَبَ القَهْوة", "يَشْرَبُ لا القَهْوة"],
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
        q: "The Arabic name for the present tense is…",
        options: ["al-māḍī (the past)", "al-muḍāriʿ (the imperfect)", "al-amr (the command)", "al-maṣdar"],
        correct: 1,
      },
      {
        q: "The grammarians' pattern name for the present is…",
        options: ["faʿala", "yafʿalu", "mafʿūl", "fāʿil"],
        correct: 1,
      },
      {
        q: "The present prefix for 'I' (anā) is…",
        options: ["ya- (يَ)", "ta- (تَ)", "a- (أَ)", "na- (نَ)"],
        correct: 2,
      },
      {
        q: "The present prefix for 'he' (huwa) is…",
        options: ["a- (أَ)", "ta- (تَ)", "ya- (يَ)", "na- (نَ)"],
        correct: 2,
      },
      {
        q: "Which prefix is shared by 'you (m.)' and 'she'?",
        options: ["a- (أَ)", "ta- (تَ)", "ya- (يَ)", "na- (نَ)"],
        correct: 1,
      },
      {
        q: "'We write' =",
        options: ["أَكْتُبُ (aktubu)", "تَكْتُبُ (taktubu)", "يَكْتُبُ (yaktubu)", "نَكْتُبُ (naktubu)"],
        correct: 3,
      },
      {
        q: "'They write' =",
        options: ["يَكْتُبونَ (yaktubūna)", "تَكْتُبونَ (taktubūna)", "يَكْتُبُ (yaktubu)", "نَكْتُبُ (naktubu)"],
        correct: 0,
      },
      {
        q: "The default final vowel of the present (indicative) is…",
        options: ["-a", "-i", "-u", "silent"],
        correct: 2,
      },
      {
        q: "Which particle negates the present (not the past)?",
        options: ["ما (mā)", "لا (lā)", "لَنْ (lan)", "سَ (sa-)"],
        correct: 1,
      },
      {
        q: "'She doesn't study' =",
        options: [
          "ما دَرَسَتْ",
          "لا تَدْرُسُ",
          "لَنْ تَدْرُسَ",
          "لا يَدْرُسُ",
        ],
        correct: 1,
      },
    ],
  },
};
