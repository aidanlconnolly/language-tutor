import type { Unit } from "../../types";

export const UNIT_LANDMARKS: Unit = {
  slug: "landmarks",
  stage: 3,
  order: 14,
  icon: "🏛️",
  title: "Cairo landmarks",
  tagline: "Al-Ahrām, the Nile, Khan el-Khalili, Islamic Cairo.",
  badge: "culture",
  lessons: [
    {
      slug: "landmarks-pyramids",
      title: "The pyramids of Giza & the Sphinx",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "The last wonder of the ancient world",
          body: [
            "The <strong>pyramids</strong> are <strong>al-ahrām</strong> (الأَهرام) — the plural; a single pyramid is <em>haram</em> (هَرَم). The Giza plateau, <strong>al-jīza</strong> (الجيزة), holds the three great ones, built around 2500 BCE.",
            "Beside them crouches the <strong>Sphinx</strong> — in Arabic <strong>abū l-hawl</strong> (أَبو الهَول), literally \"father of dread.\" It's carved from a single limestone ridge.",
            "Tourist phrases you'll use: <strong>tadhkara wāḥida</strong> (تَذكَرة واحِدة, one ticket), <em>hal yumkin at-taṣwīr?</em> (هَل يُمكِن التَّصوير؟, is photography allowed?), and the price question <em>bikam?</em>.",
          ],
          keyPoint:
            "al-ahrām = the pyramids (sing. haram). abū l-hawl = the Sphinx. al-jīza = Giza.",
        },
        {
          type: "vocab",
          heading: "Pyramid vocab",
          items: [
            { l1: "الأَهرام", en: "the pyramids", note: "al-ahrām (pl.); sing. haram هَرَم" },
            { l1: "أَبو الهَول", en: "the Sphinx", note: "abū l-hawl — lit. 'father of dread'" },
            { l1: "الجيزة", en: "Giza", note: "al-jīza" },
            { l1: "تَذكَرة", en: "ticket", note: "tadhkara (f.), pl. tadhākir" },
            { l1: "التَّصوير", en: "photography", note: "at-taṣwīr — hal yumkin at-taṣwīr?" },
            { l1: "جَمَل", en: "camel", note: "jamal (m.), pl. jimāl — the famous Giza camel rides" },
            { l1: "أَثَري", en: "ancient / archaeological", note: "atharī — mawqiʿ atharī = an archaeological site" },
            { l1: "مُذهِل", en: "amazing / stunning", note: "mudhhil" },
          ],
        },
        {
          type: "dialogue",
          heading: "At the Giza ticket gate",
          setup: "You reach the entrance to the plateau.",
          lines: [
            { speaker: "You", l1: "صَباح الخَير. تَذكَرة واحِدة، مِن فَضلَك.", en: "Good morning. One ticket, please." },
            { speaker: "Clerk", l1: "لِلأَهرام فَقَط، أَم تَذكَرة شامِلة؟", en: "For the pyramids only, or a combined ticket?" },
            { speaker: "You", l1: "شامِلة، مِن فَضلَك. هَل يُمكِن التَّصوير؟", en: "Combined, please. Is photography allowed?" },
            { speaker: "Clerk", l1: "نَعَم، في الخارِج. لا تَصوير داخِل الهَرَم.", en: "Yes, outside. No photos inside the pyramid." },
            { speaker: "You", l1: "فَهِمت. شُكراً!", en: "Understood. Thanks!" },
          ],
        },
        {
          type: "fillBlank",
          heading: "Fill the visit phrase",
          items: [
            {
              template: "___ واحِدة، مِن فَضلَك.",
              answer: "تَذكَرة",
              en: "One ticket, please.",
              options: ["تَذكَرة", "غُرفة", "مَحَطّة", "جَمَل"],
            },
            {
              template: "هَل يُمكِن ___ ؟",
              answer: "التَّصوير",
              en: "Is photography allowed?",
              options: ["التَّصوير", "الجُمرُك", "الفُطور", "الحَجز"],
            },
            {
              template: "الأَهرام ___ جِدّاً!",
              answer: "مُذهِلة",
              en: "The pyramids are very amazing!",
              options: ["مُذهِلة", "بَعيدة", "صَغيرة", "قَريبة"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "One ticket, please. Is photography allowed?",
          reference: "تَذكَرة واحِدة، مِن فَضلَك. هَل يُمكِن التَّصوير؟",
          hint: "tadhkara wāḥida, min faḍlak. hal yumkin at-taṣwīr?",
        },
      ],
    },
    {
      slug: "landmarks-nile",
      title: "The Nile, feluccas & the Egyptian Museum",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "The river that made Egypt",
          body: [
            "The <strong>Nile</strong> is <strong>an-nīl</strong> (النّيل), the river (النَّهر, an-nahr) that runs through the heart of Cairo. At sunset, locals and visitors take a <strong>felucca</strong> (فَلوكة, <strong>falūka</strong>) — a traditional sailboat.",
            "On the riverbank stands the <strong>Egyptian Museum</strong> (المَتحَف المِصري, <strong>al-matḥaf al-miṣrī</strong>) in Tahrir Square, famous for Tutankhamun's (<em>tūt ʿankh āmūn</em>) golden mask.",
            "To arrange a boat ride, ask <strong>bikam jawla bi-l-falūka?</strong> (بِكَم جَولة بِالفَلوكة؟, how much for a felucca trip?) and how long: <em>kam min al-waqt?</em> (كَم مِن الوَقت؟).",
          ],
          keyPoint:
            "an-nīl = the Nile. falūka = felucca (sailboat). al-matḥaf al-miṣrī = the Egyptian Museum.",
        },
        {
          type: "vocab",
          heading: "Nile & museum vocab",
          items: [
            { l1: "النّيل", en: "the Nile", note: "an-nīl (m.)" },
            { l1: "النَّهر", en: "the river", note: "an-nahr (m.)" },
            { l1: "فَلوكة", en: "felucca (sailboat)", note: "falūka (f.), pl. falāʾik" },
            { l1: "جَولة", en: "tour / trip", note: "jawla (f.) — jawla bi-l-falūka" },
            { l1: "المَتحَف", en: "the museum", note: "al-matḥaf (m.); al-matḥaf al-miṣrī = the Egyptian Museum" },
            { l1: "تِمثال", en: "statue", note: "timthāl (m.), pl. tamāthīl" },
            { l1: "قِناع", en: "mask", note: "qināʿ (m.) — the golden mask of Tutankhamun" },
            { l1: "غُروب الشَّمس", en: "sunset", note: "ghurūb ash-shams — best felucca time" },
            { l1: "جَميل", en: "beautiful", note: "jamīl (m.), jamīla (f.)" },
          ],
        },
        {
          type: "dialogue",
          heading: "Hiring a felucca",
          setup: "On the Corniche, a boatman calls out to you.",
          lines: [
            { speaker: "Boatman", l1: "جَولة بِالفَلوكة؟ النّيل جَميل عِندَ الغُروب!", en: "A felucca trip? The Nile is beautiful at sunset!" },
            { speaker: "You", l1: "بِكَم الجَولة؟", en: "How much is the trip?" },
            { speaker: "Boatman", l1: "مِئَتا جُنَيه لِلسّاعة.", en: "Two hundred pounds for the hour." },
            { speaker: "You", l1: "كَم مِن الوَقت؟ نِصف ساعة كافٍ.", en: "How long? Half an hour is enough." },
            { speaker: "Boatman", l1: "حَسَناً، مِئة جُنَيه لِنِصف ساعة. تَفَضَّل.", en: "Okay, a hundred for half an hour. Come aboard." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Nile check",
          questions: [
            {
              q: "A falūka is a…",
              options: ["museum", "traditional sailboat", "statue", "ticket"],
              correct: 1,
            },
            {
              q: "al-matḥaf al-miṣrī is…",
              options: ["the Egyptian Museum", "the Nile river", "the citadel", "the bazaar"],
              correct: 0,
            },
            {
              q: "'How much is the trip?' =",
              options: ["بِكَم الجَولة؟", "أَينَ النّيل؟", "كَم اللَّيلة؟", "ما هذا؟"],
              correct: 0,
            },
            {
              q: "ghurūb ash-shams means…",
              options: ["sunrise", "sunset", "midday", "midnight"],
              correct: 1,
            },
          ],
        },
      ],
    },
    {
      slug: "landmarks-islamic-cairo",
      title: "Islamic Cairo & Khan el-Khalili",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "The old city and its great bazaar",
          body: [
            "<strong>Islamic Cairo</strong> (القاهِرة الإسلامِيّة, <strong>al-qāhira al-islāmiyya</strong>) is a maze of medieval mosques (مَساجِد, masājid) and the towering <strong>Citadel</strong> (القَلعة, <strong>al-qalʿa</strong>) of Saladin.",
            "At its heart is <strong>Khan el-Khalili</strong> (خان الخَليلي), the centuries-old <strong>bazaar</strong> (سوق, <strong>sūq</strong>) — spices, copper, lanterns, and endless tea. Haggling is expected and friendly.",
            "To talk about what you've seen, use the past tense <strong>raʾaytu…</strong> (رَأَيتُ…, I saw…) and <strong>zurtu…</strong> (زُرتُ…, I visited…): <em>zurtu l-ahrām wa-raʾaytu n-nīl</em>.",
          ],
          keyPoint:
            "al-qāhira al-islāmiyya = Islamic Cairo. sūq = bazaar. raʾaytu… = I saw… · zurtu… = I visited…",
        },
        {
          type: "vocab",
          heading: "Old Cairo vocab",
          items: [
            { l1: "القَلعة", en: "the Citadel", note: "al-qalʿa (f.) — Saladin's Citadel" },
            { l1: "مَسجِد", en: "mosque", note: "masjid (m.), pl. masājid" },
            { l1: "سوق", en: "market / bazaar", note: "sūq (m.) — Khan el-Khalili" },
            { l1: "تَوابِل", en: "spices", note: "tawābil (pl.)" },
            { l1: "فانوس", en: "lantern", note: "fānūs (m.), pl. fawānīs — Ramadan lanterns" },
            { l1: "تُحفة", en: "souvenir / antique", note: "tuḥfa (f.), pl. tuḥaf" },
            { l1: "رَأَيتُ", en: "I saw", note: "raʾaytu — past tense of 'to see'" },
            { l1: "زُرتُ", en: "I visited", note: "zurtu — past tense of 'to visit'" },
            { l1: "أَعجَبَني", en: "I liked it / it pleased me", note: "aʿjabanī — lit. 'it pleased me'" },
          ],
        },
        {
          type: "dialogue",
          heading: "Talking about the day",
          setup: "Back at the hotel, the receptionist asks about your day.",
          lines: [
            { speaker: "Clerk", l1: "ماذا رَأَيت اليَوم؟", en: "What did you see today?" },
            { speaker: "You", l1: "زُرتُ الأَهرام وَرَأَيتُ أَبا الهَول.", en: "I visited the pyramids and saw the Sphinx." },
            { speaker: "Clerk", l1: "رائِع! وَهَل ذَهَبت إلى السّوق؟", en: "Wonderful! And did you go to the bazaar?" },
            { speaker: "You", l1: "نَعَم، خان الخَليلي. أَعجَبَني كَثيراً.", en: "Yes, Khan el-Khalili. I liked it a lot." },
            { speaker: "Clerk", l1: "القاهِرة جَميلة، أَليس كَذلِك؟", en: "Cairo is beautiful, isn't it?" },
            { speaker: "You", l1: "جَميلة جِدّاً. مُذهِلة!", en: "Very beautiful. Stunning!" },
          ],
        },
        {
          type: "orderWords",
          heading: "Describe what you saw",
          items: [
            { tokens: ["زُرتُ", "الأَهرام", "اليَوم"], alts: [["اليَوم", "زُرتُ", "الأَهرام"]], en: "I visited the pyramids today." },
            { tokens: ["رَأَيتُ", "النّيل", "عِندَ", "الغُروب"], alts: [["عِندَ", "الغُروب", "رَأَيتُ", "النّيل"]], en: "I saw the Nile at sunset." },
            { tokens: ["أَعجَبَني", "السّوق", "كَثيراً"], en: "I liked the bazaar a lot." },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "I visited the bazaar and saw the Citadel. I liked it a lot.",
          reference: "زُرتُ السّوق وَرَأَيتُ القَلعة. أَعجَبَني كَثيراً.",
          hint: "zurtu… wa-raʾaytu… aʿjabanī kathīran.",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "'I visited the pyramids' =",
              options: [
                "زُرتُ الأَهرام",
                "رَأَيتُ النّيل",
                "أَينَ الأَهرام؟",
                "بِكَم الأَهرام؟",
              ],
              correct: 0,
            },
            {
              q: "sūq means…",
              options: ["mosque", "citadel", "bazaar / market", "museum"],
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
        q: "al-ahrām means…",
        options: ["the museums", "the pyramids", "the mosques", "the markets"],
        correct: 1,
      },
      {
        q: "The Sphinx is called…",
        options: ["abū l-hawl", "al-qalʿa", "an-nīl", "as-sūq"],
        correct: 0,
      },
      {
        q: "a falūka is a…",
        options: ["lantern", "spice", "sailboat", "statue"],
        correct: 2,
      },
      {
        q: "al-matḥaf al-miṣrī is…",
        options: ["the Citadel", "the Egyptian Museum", "Khan el-Khalili", "the Nile"],
        correct: 1,
      },
      {
        q: "'Is photography allowed?' =",
        options: [
          "هَل يُمكِن التَّصوير؟",
          "بِكَم التَّذكَرة؟",
          "أَينَ المَتحَف؟",
          "ماذا رَأَيت؟",
        ],
        correct: 0,
      },
      {
        q: "as-sūq means…",
        options: ["the museum", "the bazaar / market", "the river", "the citadel"],
        correct: 1,
      },
      {
        q: "Khan el-Khalili is Cairo's famous…",
        options: ["mosque", "pyramid", "bazaar", "museum"],
        correct: 2,
      },
      {
        q: "raʾaytu means…",
        options: ["I visited", "I saw", "I bought", "I liked"],
        correct: 1,
      },
      {
        q: "'I visited the Nile' =",
        options: [
          "زُرتُ النّيل",
          "رَأَيتُ السّوق",
          "أَينَ النّيل؟",
          "النّيل جَميل",
        ],
        correct: 0,
      },
      {
        q: "aʿjabanī means…",
        options: ["I saw it", "I liked it / it pleased me", "I lost it", "I bought it"],
        correct: 1,
      },
    ],
  },
};
