import type { Unit } from "../../types";

export const UNIT_NUMBERS_TIME: Unit = {
  slug: "numbers-time",
  stage: 1,
  order: 3,
  icon: "🔢",
  title: "Numbers & time",
  tagline: "Arabic-Indic numerals ٠–١٠٠٠, the clock, days of the week.",
  badge: "core",
  lessons: [
    {
      slug: "numbers-time-digits",
      title: "The digits & 1–20",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Two sets of digits, one direction surprise",
          body: [
            "The numerals we call 'Arabic numerals' (1, 2, 3) actually came to Europe FROM the Arab world. In Egypt and the Mashriq, native <strong>Arabic-Indic</strong> digits are still common: <strong>٠ ١ ٢ ٣ ٤ ٥ ٦ ٧ ٨ ٩</strong>.",
            "Here's the twist: even though Arabic text runs right-to-left, <strong>numbers are written left-to-right</strong> — just like in English. So ١٢٣ reads 'one hundred twenty-three', with the ١ on the left.",
            "Watch two look-alikes: <strong>٥</strong> is five (it looks like a European 0) and <strong>٠</strong> is zero (a dot). And <strong>٦</strong> (six) looks like a European 7.",
          ],
          keyPoint:
            "Digits: ٠=0 ١=1 ٢=2 ٣=3 ٤=4 ٥=5 ٦=6 ٧=7 ٨=8 ٩=9. Numbers are written left-to-right.",
        },
        {
          type: "vocab",
          heading: "Digits 0–10",
          items: [
            { l1: "٠", en: "zero", note: "transliteration: ṣifr; a small dot. The word 'cipher' comes from ṣifr." },
            { l1: "١", en: "one", note: "transliteration: wāḥid; a simple vertical stroke." },
            { l1: "٢", en: "two", note: "transliteration: ithnān." },
            { l1: "٣", en: "three", note: "transliteration: thalātha." },
            { l1: "٤", en: "four", note: "transliteration: arbaʿa." },
            { l1: "٥", en: "five", note: "transliteration: khamsa; looks like a European 0 — don't confuse it." },
            { l1: "٦", en: "six", note: "transliteration: sitta; looks like a European 7." },
            { l1: "٧", en: "seven", note: "transliteration: sabʿa." },
            { l1: "٨", en: "eight", note: "transliteration: thamāniya." },
            { l1: "٩", en: "nine", note: "transliteration: tisʿa." },
            { l1: "١٠", en: "ten", note: "transliteration: ʿashara." },
          ],
        },
        {
          type: "vocab",
          heading: "Eleven to twenty",
          items: [
            { l1: "أَحَدَ عَشَر", en: "eleven (١١)", note: "transliteration: aḥada ʿashar." },
            { l1: "اِثْنا عَشَر", en: "twelve (١٢)", note: "transliteration: ithnā ʿashar." },
            { l1: "ثَلاثَةَ عَشَر", en: "thirteen (١٣)", note: "transliteration: thalāthata ʿashar." },
            { l1: "أَرْبَعَةَ عَشَر", en: "fourteen (١٤)", note: "transliteration: arbaʿata ʿashar." },
            { l1: "خَمْسَةَ عَشَر", en: "fifteen (١٥)", note: "transliteration: khamsata ʿashar." },
            { l1: "سِتَّةَ عَشَر", en: "sixteen (١٦)", note: "transliteration: sittata ʿashar." },
            { l1: "عِشْرون", en: "twenty (٢٠)", note: "transliteration: ʿishrūn." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Read the numerals",
          questions: [
            {
              q: "What number is ٥?",
              options: ["zero", "one", "five", "six"],
              correct: 2,
              fb: "٥ is five — even though it looks like a European 0.",
            },
            {
              q: "What number is ٧?",
              options: ["six", "seven", "eight", "nine"],
              correct: 1,
              fb: "٧ is seven.",
            },
            {
              q: "Numbers in Arabic text are written…",
              options: ["right to left", "left to right", "top to bottom", "in a circle"],
              correct: 1,
              fb: "Numbers run left-to-right, unlike the surrounding text.",
            },
            {
              q: "Which numeral is ZERO?",
              options: ["٥", "٠", "٦", "١"],
              correct: 1,
              fb: "٠ (a dot) is zero; ٥ is five.",
            },
          ],
        },
        {
          type: "fillBlank",
          heading: "Numeral to word",
          intro: "Type or pick the transliteration.",
          items: [
            { template: "٣ = ___", answer: "thalātha", en: "three", options: ["wāḥid", "thalātha", "khamsa", "ʿashara"] },
            { template: "١٠ = ___", answer: "ʿashara", en: "ten", options: ["ʿashara", "ʿishrūn", "sabʿa", "sitta"] },
            { template: "٢٠ = ___", answer: "ʿishrūn", en: "twenty", options: ["ʿashara", "ʿishrūn", "thamāniya", "arbaʿa"] },
          ],
        },
      ],
    },
    {
      slug: "numbers-time-tens-prices",
      title: "Tens, hundreds & prices",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Counting up to a thousand",
          body: [
            "The tens mostly end in <strong>-ūn</strong>: thalāthūn (30), arbaʿūn (40), khamsūn (50), and so on up to tisʿūn (90).",
            "<strong>miʾa</strong> is 100, and <strong>alf</strong> is 1000. So 'two hundred' is miʾatān and 'a thousand' is alf.",
            "Egypt's currency is the <strong>pound</strong>: <em>al-junayh</em> (جُنَيْه). A price tag of ٢٥ junayh = 25 pounds. Bargaining is normal in the souk — knowing your numbers is your best tool.",
          ],
          keyPoint:
            "Tens end in -ūn (30 thalāthūn … 90 tisʿūn). 100 = miʾa, 1000 = alf. Egyptian pound = al-junayh.",
        },
        {
          type: "vocab",
          heading: "Tens, hundreds, thousand",
          items: [
            { l1: "ثَلاثون", en: "thirty (٣٠)", note: "transliteration: thalāthūn." },
            { l1: "أَرْبَعون", en: "forty (٤٠)", note: "transliteration: arbaʿūn." },
            { l1: "خَمْسون", en: "fifty (٥٠)", note: "transliteration: khamsūn." },
            { l1: "سَبْعون", en: "seventy (٧٠)", note: "transliteration: sabʿūn." },
            { l1: "مِئَة", en: "one hundred (١٠٠)", note: "transliteration: miʾa; also spelled مائة." },
            { l1: "مِئَتان", en: "two hundred (٢٠٠)", note: "transliteration: miʾatān." },
            { l1: "أَلْف", en: "one thousand (١٠٠٠)", note: "transliteration: alf; pl. ālāf." },
            { l1: "جُنَيْه", en: "pound (currency)", note: "transliteration: junayh; (m.) the Egyptian pound." },
          ],
        },
        {
          type: "dialogue",
          heading: "Bargaining in Khan el-Khalili",
          setup: "You're buying a scarf in the bazaar.",
          lines: [
            { speaker: "You", l1: "بِكَمْ هٰذا؟", en: "How much is this? — bi-kam hādhā?" },
            { speaker: "Seller", l1: "مِئَة جُنَيْه.", en: "One hundred pounds." },
            { speaker: "You", l1: "غالٍ! خَمْسون؟", en: "Expensive! Fifty?" },
            { speaker: "Seller", l1: "سَبْعون، وَهٰذا آخِر سِعْر.", en: "Seventy, and that's the final price." },
            { speaker: "You", l1: "حَسَنًا، شُكْرًا.", en: "Okay, thank you." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Prices & tens",
          questions: [
            {
              q: "'miʾa' means…",
              options: ["ten", "fifty", "one hundred", "one thousand"],
              correct: 2,
              fb: "miʾa = 100.",
            },
            {
              q: "How do you ask 'how much is this?'",
              options: ["kayfa hādhā?", "bi-kam hādhā?", "kam as-sāʿa?", "ayna hādhā?"],
              correct: 1,
              fb: "bi-kam hādhā? = 'for how much is this?'",
            },
            {
              q: "'alf' is…",
              options: ["100", "500", "1000", "10,000"],
              correct: 2,
              fb: "alf = 1000.",
            },
            {
              q: "The Egyptian currency is the…",
              options: ["dirham", "riyal", "junayh (pound)", "dinar"],
              correct: 2,
              fb: "Egypt uses al-junayh, the pound.",
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "How much is this? Fifty pounds.",
          reference: "بِكَمْ هٰذا؟ خَمْسون جُنَيْه.",
          hint: "'How much is this?' = bi-kam hādhā? — 'fifty' = khamsūn, 'pound' = junayh.",
        },
      ],
    },
    {
      slug: "numbers-time-clock-days",
      title: "Telling time & the week",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "The clock and the week",
          body: [
            "To ask the time: <strong>kam as-sāʿa?</strong> (what's the hour?). To answer: <strong>as-sāʿa</strong> + the number — <em>as-sāʿa al-wāḥida</em> (one o'clock), <em>as-sāʿa ath-thāniya</em> (two o'clock).",
            "Half past is <strong>wa an-niṣf</strong>, and quarter past is <strong>wa ar-rubʿ</strong>: <em>as-sāʿa ath-thāniya wa an-niṣf</em> = half past two.",
            "The Arabic week starts on Sunday. Several day-names are literally numbered: <em>al-aḥad</em> (the 'first' = Sunday), <em>al-ithnayn</em> (the 'second' = Monday), and so on. Friday — <em>al-jumʿa</em> — is the day of communal prayer.",
          ],
          keyPoint:
            "kam as-sāʿa? → as-sāʿa + number. niṣf = half, rubʿ = quarter. Week runs al-aḥad (Sun) … as-sabt (Sat).",
        },
        {
          type: "vocab",
          heading: "Telling time",
          items: [
            { l1: "السّاعَة", en: "the hour / the clock / o'clock", note: "transliteration: as-sāʿa; (f.), root s-w-ʿ." },
            { l1: "كَمِ السّاعَة؟", en: "what time is it?", note: "transliteration: kam as-sāʿa?" },
            { l1: "السّاعَة الْواحِدَة", en: "one o'clock", note: "transliteration: as-sāʿa al-wāḥida." },
            { l1: "السّاعَة الثّانِيَة", en: "two o'clock", note: "transliteration: as-sāʿa ath-thāniya." },
            { l1: "وَالنِّصْف", en: "...and a half (half past)", note: "transliteration: wa an-niṣf; niṣf = half." },
            { l1: "وَالرُّبْع", en: "...and a quarter (quarter past)", note: "transliteration: wa ar-rubʿ; rubʿ = quarter." },
          ],
        },
        {
          type: "vocab",
          heading: "Days of the week",
          intro: "The week begins on Sunday.",
          items: [
            { l1: "الأَحَد", en: "Sunday", note: "transliteration: al-aḥad; from 'one/first'." },
            { l1: "الاِثْنَيْن", en: "Monday", note: "transliteration: al-ithnayn; from 'two'." },
            { l1: "الثُّلاثاء", en: "Tuesday", note: "transliteration: ath-thulāthāʾ; from 'three'." },
            { l1: "الأَرْبِعاء", en: "Wednesday", note: "transliteration: al-arbiʿāʾ; from 'four'." },
            { l1: "الخَميس", en: "Thursday", note: "transliteration: al-khamīs; from 'five'." },
            { l1: "الجُمْعَة", en: "Friday", note: "transliteration: al-jumʿa; the day of communal prayer." },
            { l1: "السَّبْت", en: "Saturday", note: "transliteration: as-sabt; related to 'sabbath'." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Which day?",
          intro: "Fill in the day name.",
          items: [
            { template: "The day of communal prayer is al-___.", answer: "jumʿa", en: "Friday = al-jumʿa", options: ["aḥad", "khamīs", "jumʿa", "sabt"] },
            { template: "The Arabic week begins on al-___.", answer: "aḥad", en: "Sunday = al-aḥad", options: ["aḥad", "ithnayn", "sabt", "jumʿa"] },
            { template: "'Half past' is wa an-___.", answer: "niṣf", en: "half = niṣf", options: ["rubʿ", "niṣf", "sāʿa", "wāḥid"] },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the time (right to left)",
          intro: "Arrange the pieces; the first sits on the right.",
          items: [
            { tokens: ["السّاعَة", "الْواحِدَة"], en: "one o'clock — as-sāʿa al-wāḥida" },
            { tokens: ["السّاعَة", "الثّانِيَة", "وَالنِّصْف"], en: "half past two — as-sāʿa ath-thāniya wa an-niṣf" },
            { tokens: ["كَمِ", "السّاعَة"], en: "What time is it? — kam as-sāʿa" },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "What time is it? It's two o'clock.",
          reference: "كَمِ السّاعَة؟ السّاعَة الثّانِيَة.",
          hint: "'What time is it?' = kam as-sāʿa? — 'two o'clock' = as-sāʿa ath-thāniya.",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "How do you ask 'what time is it?'",
              options: ["bi-kam hādhā?", "kam as-sāʿa?", "ayna as-sūq?", "kayfa ḥāluka?"],
              correct: 1,
            },
            {
              q: "'wa an-niṣf' means…",
              options: ["a quarter past", "half past", "o'clock sharp", "midnight"],
              correct: 1,
            },
            {
              q: "Which day is Friday?",
              options: ["al-aḥad", "al-khamīs", "al-jumʿa", "as-sabt"],
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
        q: "What number is the numeral ٥?",
        options: ["zero", "five", "six", "nine"],
        correct: 1,
      },
      {
        q: "What number is the numeral ٠?",
        options: ["five", "one", "zero", "ten"],
        correct: 2,
      },
      {
        q: "In Arabic text, numbers are written…",
        options: ["right to left", "left to right", "vertically", "in words only"],
        correct: 1,
      },
      {
        q: "'ʿishrūn' means…",
        options: ["ten", "twelve", "twenty", "two hundred"],
        correct: 2,
      },
      {
        q: "'miʾa' = ___ and 'alf' = ___.",
        options: ["10 / 100", "100 / 1000", "50 / 500", "1000 / 10000"],
        correct: 1,
      },
      {
        q: "How do you ask 'how much is this?'",
        options: ["kam as-sāʿa?", "bi-kam hādhā?", "ayna hādhā?", "kayfa hādhā?"],
        correct: 1,
      },
      {
        q: "The Egyptian currency is the…",
        options: ["dinar", "dirham", "junayh (pound)", "riyal"],
        correct: 2,
      },
      {
        q: "To say 'half past', you add…",
        options: ["wa ar-rubʿ", "wa an-niṣf", "as-sāʿa", "al-wāḥida"],
        correct: 1,
      },
      {
        q: "The Arabic week begins on…",
        options: ["al-jumʿa (Friday)", "as-sabt (Saturday)", "al-aḥad (Sunday)", "al-ithnayn (Monday)"],
        correct: 2,
      },
      {
        q: "Which day is the day of communal prayer?",
        options: ["al-khamīs", "al-jumʿa", "as-sabt", "al-arbiʿāʾ"],
        correct: 1,
      },
    ],
  },
};
