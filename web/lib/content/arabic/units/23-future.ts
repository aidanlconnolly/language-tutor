import type { Unit } from "../../types";

export const UNIT_FUTURE: Unit = {
  slug: "future",
  stage: 5,
  order: 23,
  icon: "⏩",
  title: "The future",
  tagline: "sa- / sawfa + the present, talking about plans.",
  badge: "core",
  lessons: [
    {
      slug: "future-sa-sawfa",
      title: "sa- and sawfa + the imperfect",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "The future is the present, dressed up",
          body: [
            "Good news: there's no new conjugation. The Arabic future is just the <strong>present (imperfect)</strong> verb with a future marker bolted to the front.",
            "Two markers, same meaning: the prefix <strong>سَـ (sa-)</strong>, written attached, and the separate word <strong>سَوْفَ (sawfa)</strong>. Both mean 'will'.",
            "<strong>يَكْتُبُ (yaktubu)</strong> 'he writes' → <strong>سَيَكْتُبُ (sa-yaktubu)</strong> / <strong>سَوْفَ يَكْتُبُ (sawfa yaktubu)</strong> = 'he will write'.",
            "<em>sa-</em> is the everyday choice; <em>sawfa</em> feels a touch more emphatic or distant ('will eventually'). The verb stays in its full present form, -u ending and all.",
          ],
          keyPoint:
            "Future = sa- (attached) or sawfa (separate) + present verb. sa-yaktubu / sawfa yaktubu = 'he will write'.",
        },
        {
          type: "conjugation",
          heading: "Future of kataba",
          verb: "سَيَكْتُبُ (sa-yaktubu)",
          meaning: "will write",
          intro: "Just prefix sa- onto each present form. Pronoun shown for clarity.",
          tenses: [
            {
              name: "Future tense — all persons (with sa-)",
              forms: [
                { person: "anā", form: "سَأَكْتُبُ (sa-aktubu)", en: "I will write" },
                { person: "anta", form: "سَتَكْتُبُ (sa-taktubu)", en: "you will write (m.)" },
                { person: "anti", form: "سَتَكْتُبينَ (sa-taktubīna)", en: "you will write (f.)" },
                { person: "huwa", form: "سَيَكْتُبُ (sa-yaktubu)", en: "he will write" },
                { person: "hiya", form: "سَتَكْتُبُ (sa-taktubu)", en: "she will write" },
                { person: "naḥnu", form: "سَنَكْتُبُ (sa-naktubu)", en: "we will write" },
                { person: "antum", form: "سَتَكْتُبونَ (sa-taktubūna)", en: "you will write (pl.)" },
                { person: "hum", form: "سَيَكْتُبونَ (sa-yaktubūna)", en: "they will write" },
              ],
            },
          ],
        },
        {
          type: "tip",
          heading: "sa- vs sawfa — same job",
          body: "<strong>سَـ (sa-)</strong> is a single letter glued to the verb; <strong>سَوْفَ (sawfa)</strong> is a standalone word that sits before it. They mean the same 'will'. You can't use both at once. Rule of thumb: speak with <em>sa-</em>; reach for <em>sawfa</em> when you want a little weight, like English 'I shall'.",
          example: { l1: "سَوْفَ أَزورُ الأَهْرام.", en: "I will visit the pyramids." },
        },
        {
          type: "fillBlank",
          heading: "Add the future marker",
          items: [
            {
              template: "أنا ___ العَرَبِيّة غَداً. (will study)",
              answer: "سَأَدْرُسُ",
              en: "I will study Arabic tomorrow.",
              options: ["سَأَدْرُسُ", "سَيَدْرُسُ", "سَتَدْرُسُ", "دَرَسْتُ"],
            },
            {
              template: "هُوَ ___ إلى القاهِرة. (will travel)",
              answer: "سَيُسافِرُ",
              en: "He will travel to Cairo.",
              options: ["سَيُسافِرُ", "سَأُسافِرُ", "سَنُسافِرُ", "سافَرَ"],
            },
            {
              template: "نَحْنُ ___ الأَهْرام غَداً. (will visit)",
              answer: "سَنَزورُ",
              en: "We will visit the pyramids tomorrow.",
              options: ["سَنَزورُ", "سَيَزورُ", "سَأَزورُ", "زُرْنا"],
            },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Future check",
          questions: [
            {
              q: "How do you make a present verb future?",
              options: [
                "Change the prefix to sa-",
                "Add sa- (attached) or sawfa (separate) before it",
                "Add the suffix -tu",
                "Put mā in front",
              ],
              correct: 1,
              fb: "Both sa- and sawfa mean 'will'; the verb stays present.",
            },
            {
              q: "'I will write' =",
              options: ["كَتَبْتُ (katabtu)", "أَكْتُبُ (aktubu)", "سَأَكْتُبُ (sa-aktubu)", "سَيَكْتُبُ (sa-yaktubu)"],
              correct: 2,
              fb: "sa- + the 'I' present (aktubu) → sa-aktubu.",
            },
          ],
        },
      ],
    },
    {
      slug: "future-plans",
      title: "Plans & intentions in Cairo",
      estMinutes: 9,
      pages: [
        {
          type: "vocab",
          heading: "Words for plans",
          items: [
            { l1: "غَداً", en: "tomorrow", note: "ghadan" },
            { l1: "بَعْدَ غَد", en: "the day after tomorrow", note: "baʿda ghad" },
            { l1: "الأُسْبوع القادِم", en: "next week", note: "al-usbūʿ al-qādim" },
            { l1: "سَأَذْهَبُ", en: "I will go", note: "sa-adhhabu — sa- + adhhabu" },
            { l1: "سَأَزورُ", en: "I will visit", note: "sa-azūru — root z-w-r" },
            { l1: "أُريدُ أَنْ", en: "I want to…", note: "urīdu an + present subjunctive" },
            { l1: "أَنْوي", en: "I intend / plan", note: "anwī — root n-w-y" },
          ],
        },
        {
          type: "dialogue",
          heading: "Planning the weekend",
          setup: "Karim and Dina map out the next few days.",
          lines: [
            { speaker: "Karim", l1: "ماذا سَتَفْعَلينَ غَداً؟", en: "What will you do tomorrow?" },
            { speaker: "Dina", l1: "سَأَذْهَبُ إلى المَتْحَف المِصْري.", en: "I will go to the Egyptian Museum." },
            { speaker: "Karim", l1: "وَبَعْدَ غَد؟", en: "And the day after tomorrow?" },
            { speaker: "Dina", l1: "سَوْفَ أَزورُ الأَهْرام في الجيزة.", en: "I will visit the pyramids in Giza." },
            { speaker: "Karim", l1: "أنا أَنْوي أَنْ أُسافِرَ إلى الأُقْصُر الأُسْبوع القادِم.", en: "I plan to travel to Luxor next week." },
            { speaker: "Dina", l1: "رائِع! سَنَلْتَقي قَبْلَ ذَلِكَ.", en: "Great! We'll meet before that." },
          ],
        },
        {
          type: "tip",
          heading: "'I want to go' uses an + the verb",
          body: "To say 'I want <strong>to</strong> go', Arabic uses <strong>أُريدُ أَنْ (urīdu an)</strong> + a present verb: <strong>أُريدُ أَنْ أَذْهَبَ (urīdu an adhhaba)</strong> = 'I want to go'. (The verb after <em>an</em> takes an -a ending, the subjunctive — you'll meet it fully later; for now, just recognize the pattern.)",
          example: { l1: "أُريدُ أَنْ أَزورَ الأَهْرام.", en: "I want to visit the pyramids." },
        },
        {
          type: "orderWords",
          heading: "Build the plan",
          intro: "Arrange each into a natural future sentence.",
          items: [
            { tokens: ["غَداً", "سَأَذْهَبُ", "إلى", "المَتْحَف"], alts: [["سَأَذْهَبُ", "إلى", "المَتْحَف", "غَداً"]], en: "Tomorrow I will go to the museum." },
            { tokens: ["سَوْفَ", "أَزورُ", "الأَهْرام"], en: "I will visit the pyramids." },
            { tokens: ["أُريدُ", "أَنْ", "أُسافِرَ", "إلى", "الأُقْصُر"], en: "I want to travel to Luxor." },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Tomorrow I will go to the museum, and the day after tomorrow I will visit the pyramids.",
          reference: "غَداً سَأَذْهَبُ إلى المَتْحَف، وَبَعْدَ غَد سَأَزورُ الأَهْرام.",
          hint: "Two 'I' futures: sa-adhhabu, sa-azūru. 'Day after tomorrow' = baʿda ghad.",
        },
      ],
    },
    {
      slug: "future-negation-lan",
      title: "Future negation with lan",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Negating the future: lan",
          body: [
            "To say something <strong>will not</strong> happen, drop the sa-/sawfa marker and use <strong>لَنْ (lan)</strong> before the present verb.",
            "<strong>لَنْ (lan)</strong> does two things: it carries the 'will not' meaning, and it changes the verb's ending from <strong>-u to -a</strong> (the subjunctive). So يَكْتُبُ (yaktubu) → <strong>لَنْ يَكْتُبَ (lan yaktuba)</strong> = 'he will not write'.",
            "Now you have a full negation set: <strong>ما (mā)</strong> = past, <strong>لا (lā)</strong> = present, <strong>لَنْ (lan)</strong> = future. Three particles, three tenses.",
          ],
          keyPoint:
            "lan (لَنْ) + present verb (ending -a) = 'will not'. lan yaktuba = 'he won't write'. mā/lā/lan = past/present/future.",
        },
        {
          type: "vocab",
          heading: "The three negators side by side",
          items: [
            { l1: "ما + ماضي", en: "did not (past)", note: "mā + past — ما كَتَبَ (he didn't write)" },
            { l1: "لا + مُضارِع", en: "does not (present)", note: "lā + present — لا يَكْتُبُ (he doesn't write)" },
            { l1: "لَنْ + مُضارِع", en: "will not (future)", note: "lan + present (-a) — لَنْ يَكْتُبَ (he won't write)" },
            { l1: "لَنْ أَذْهَبَ", en: "I will not go", note: "lan adhhaba" },
            { l1: "لَنْ نُسافِرَ", en: "we will not travel", note: "lan nusāfira" },
          ],
        },
        {
          type: "tip",
          heading: "lan clips the -u to -a",
          body: "After <strong>لَنْ (lan)</strong>, the final <strong>-u becomes -a</strong>: سَيَزورُ (sa-yazūru, 'he will visit') → لَنْ يَزورَ (lan yazūra, 'he won't visit'). That little vowel shift is the tell that you're in the negated future, not the present.",
          example: { l1: "لَنْ أَزورَ المَتْحَف غَداً.", en: "I will not visit the museum tomorrow." },
        },
        {
          type: "fillBlank",
          heading: "Negate the future",
          items: [
            {
              template: "أنا ___ أَذْهَبَ غَداً. (will not)",
              answer: "لَنْ",
              en: "I will not go tomorrow.",
              options: ["لَنْ", "لا", "ما", "هَل"],
            },
            {
              template: "هُوَ لَنْ ___ إلى الأُقْصُر. (travel)",
              answer: "يُسافِرَ",
              en: "He will not travel to Luxor.",
              options: ["يُسافِرَ", "سافَرَ", "يُسافِرُ", "سَيُسافِرُ"],
            },
            {
              template: "نَحْنُ ___ نَزورَ الأَهْرام اليَوْم. (will not)",
              answer: "لَنْ",
              en: "We will not visit the pyramids today.",
              options: ["لَنْ", "لا", "ما", "سَوْفَ"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "I will not travel tomorrow, but I will visit the museum.",
          reference: "لَنْ أُسافِرَ غَداً، لَكِنْ سَأَزورُ المَتْحَف.",
          hint: "Negated future = lan + verb with -a (lan usāfira). Positive future = sa- (sa-azūru). 'but' = lākin.",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "Which particle negates the FUTURE?",
              options: ["ما (mā)", "لا (lā)", "لَنْ (lan)", "سَ (sa-)"],
              correct: 2,
            },
            {
              q: "After لَنْ, the verb's final vowel becomes…",
              options: ["-u", "-a", "-i", "it disappears"],
              correct: 1,
            },
            {
              q: "'He will not write' =",
              options: ["لا يَكْتُبُ", "ما كَتَبَ", "لَنْ يَكْتُبَ", "سَيَكْتُبُ"],
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
        q: "The Arabic future is formed from which tense?",
        options: ["the past (al-māḍī)", "the present (al-muḍāriʿ)", "the command", "a special future stem"],
        correct: 1,
      },
      {
        q: "The attached future prefix meaning 'will' is…",
        options: ["سَـ (sa-)", "يَـ (ya-)", "ما (mā)", "أَ (a-)"],
        correct: 0,
      },
      {
        q: "سَوْفَ (sawfa) is…",
        options: [
          "a past marker",
          "a separate word meaning 'will'",
          "a negation particle",
          "the same as لَنْ",
        ],
        correct: 1,
      },
      {
        q: "'I will write' =",
        options: ["كَتَبْتُ (katabtu)", "أَكْتُبُ (aktubu)", "سَأَكْتُبُ (sa-aktubu)", "لَنْ أَكْتُبَ (lan aktuba)"],
        correct: 2,
      },
      {
        q: "'He will travel' =",
        options: ["سافَرَ (sāfara)", "يُسافِرُ (yusāfiru)", "سَيُسافِرُ (sa-yusāfiru)", "لَنْ يُسافِرَ (lan yusāfira)"],
        correct: 2,
      },
      {
        q: "'Tomorrow' is…",
        options: ["أَمْس (ams)", "غَداً (ghadan)", "اليَوْم (al-yawm)", "ثُمَّ (thumma)"],
        correct: 1,
      },
      {
        q: "Which particle negates the future?",
        options: ["ما (mā)", "لا (lā)", "لَنْ (lan)", "هَل (hal)"],
        correct: 2,
      },
      {
        q: "After لَنْ (lan), the verb ending changes from -u to…",
        options: ["-i", "-a", "-u (unchanged)", "no vowel"],
        correct: 1,
      },
      {
        q: "'We will not travel' =",
        options: [
          "لا نُسافِرُ (lā nusāfiru)",
          "ما سافَرْنا (mā sāfarnā)",
          "لَنْ نُسافِرَ (lan nusāfira)",
          "سَنُسافِرُ (sa-nusāfiru)",
        ],
        correct: 2,
      },
      {
        q: "Match the three negators to their tenses:",
        options: [
          "mā=future, lā=past, lan=present",
          "mā=past, lā=present, lan=future",
          "mā=present, lā=future, lan=past",
          "all three negate the past",
        ],
        correct: 1,
      },
    ],
  },
};
