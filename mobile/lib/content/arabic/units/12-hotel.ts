import type { Unit } from "../../types";

export const UNIT_HOTEL: Unit = {
  slug: "hotel",
  stage: 3,
  order: 12,
  icon: "🏨",
  title: "Airport & hotel",
  tagline: "Check-in, the jawāz safar, booking a room.",
  badge: "tourist",
  lessons: [
    {
      slug: "hotel-airport",
      title: "At the airport",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Landing in Cairo",
          body: [
            "At passport control (جَوازات, <strong>jawāzāt</strong>) the officer wants your <strong>jawāz safar</strong> (جَواز سَفَر, passport). Many travelers buy the entry visa sticker at the bank window before the line.",
            "Then it's the carousel for your <strong>luggage</strong> (الأَمتِعة / الشُّنَط, <strong>al-amtiʿa / ash-shunaṭ</strong>) and the green channel at customs (الجُمرُك, <strong>al-jumruk</strong>).",
            "You'll mostly answer simple questions — purpose of visit, how many days — so a few stock phrases like <em>siyāḥa</em> (سِياحة, tourism) carry you through.",
          ],
          keyPoint:
            "Passport = jawāz safar. Passport control = jawāzāt. Luggage = al-amtiʿa / ash-shunaṭ. Customs = al-jumruk.",
        },
        {
          type: "vocab",
          heading: "Airport vocab",
          items: [
            { l1: "جَواز سَفَر", en: "passport", note: "jawāz safar (m.), pl. jawāzāt safar" },
            { l1: "الجَوازات", en: "passport control", note: "al-jawāzāt" },
            { l1: "تَأشيرة", en: "visa", note: "taʾshīra (f.)" },
            { l1: "الأَمتِعة", en: "luggage / baggage", note: "al-amtiʿa; colloquial: ash-shunaṭ الشُّنَط" },
            { l1: "الجُمرُك", en: "customs", note: "al-jumruk (m.)" },
            { l1: "بِطاقة الصُّعود", en: "boarding pass", note: "biṭāqat aṣ-ṣuʿūd" },
            { l1: "سِياحة", en: "tourism", note: "siyāḥa (f.) — 'purpose: tourism'" },
            { l1: "الوُصول", en: "arrivals", note: "al-wuṣūl" },
            { l1: "المُغادَرة", en: "departures", note: "al-mughādara" },
          ],
        },
        {
          type: "dialogue",
          heading: "At passport control",
          setup: "You reach the officer at Cairo International.",
          lines: [
            { speaker: "Officer", l1: "جَواز السَّفَر، مِن فَضلَك.", en: "Passport, please." },
            { speaker: "You", l1: "تَفَضَّل.", en: "Here you go." },
            { speaker: "Officer", l1: "ما سَبَب الزِّيارة؟", en: "What's the purpose of the visit?" },
            { speaker: "You", l1: "سِياحة. أَسبوع واحِد.", en: "Tourism. One week." },
            { speaker: "Officer", l1: "أَهلاً بِك في مِصر.", en: "Welcome to Egypt." },
            { speaker: "You", l1: "شُكراً جَزيلاً.", en: "Thank you very much." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Fill the airport phrase",
          items: [
            {
              template: "___ السَّفَر، مِن فَضلَك.",
              answer: "جَواز",
              en: "Passport, please.",
              options: ["جَواز", "تَأشيرة", "أَمتِعة", "جُمرُك"],
            },
            {
              template: "ما سَبَب ___ ؟",
              answer: "الزِّيارة",
              en: "What's the purpose of the visit?",
              options: ["الزِّيارة", "الجُمرُك", "الوُصول", "الأَمتِعة"],
            },
            {
              template: "___ . أَسبوع واحِد.",
              answer: "سِياحة",
              en: "Tourism. One week.",
              options: ["سِياحة", "تَأشيرة", "مُغادَرة", "جُمرُك"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Here is the passport. Tourism, one week.",
          reference: "تَفَضَّل جَواز السَّفَر. سِياحة، أَسبوع واحِد.",
          hint: "Hand it over with tafaḍḍal, then state siyāḥa.",
        },
      ],
    },
    {
      slug: "hotel-checkin",
      title: "Hotel check-in",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "I have a reservation",
          body: [
            "Your opening line at the desk is <strong>ʿindī ḥajz</strong> (عِندي حَجز, \"I have a reservation\"). The receptionist (المُوَظَّف, al-muwaẓẓaf) will ask for your name and passport.",
            "Rooms come by occupancy: <strong>ghurfa li-shakhṣ</strong> (غُرفة لِشَخص, a single) or <strong>ghurfa li-shakhṣayn</strong> (غُرفة لِشَخصَين, a double). <em>Shakhṣayn</em> is the dual form — Arabic has a special 'two' ending, -ayn.",
            "Useful follow-ups: <strong>kam al-laylа?</strong> (كَم اللَّيلة؟, how much per night?) and <strong>hal yashmal al-fuṭūr?</strong> (هَل يَشمَل الفُطور؟, does it include breakfast?).",
          ],
          keyPoint:
            "ʿindī ḥajz = I have a reservation. li-shakhṣ = single, li-shakhṣayn = double (dual -ayn).",
        },
        {
          type: "vocab",
          heading: "Check-in vocab",
          items: [
            { l1: "عِندي حَجز", en: "I have a reservation", note: "ʿindī ḥajz" },
            { l1: "غُرفة", en: "room", note: "ghurfa (f.), pl. ghuraf" },
            { l1: "لِشَخص", en: "for one person (single)", note: "li-shakhṣ" },
            { l1: "لِشَخصَين", en: "for two people (double)", note: "li-shakhṣayn — dual form" },
            { l1: "لَيلة", en: "night", note: "layla (f.), pl. layālī" },
            { l1: "كَم اللَّيلة؟", en: "how much per night?", note: "kam al-layla?" },
            { l1: "هَل يَشمَل الفُطور؟", en: "does it include breakfast?", note: "hal yashmal al-fuṭūr?" },
            { l1: "المِفتاح", en: "the key", note: "al-miftāḥ (m.)" },
            { l1: "تَسجيل الخُروج", en: "check-out", note: "tasjīl al-khurūj" },
          ],
        },
        {
          type: "dialogue",
          heading: "At the front desk",
          setup: "You arrive at a hotel in Garden City.",
          lines: [
            { speaker: "You", l1: "مَساء الخَير. عِندي حَجز بِاسم سامي.", en: "Good evening. I have a reservation under Sami." },
            { speaker: "Clerk", l1: "أَهلاً وَسَهلاً. غُرفة لِشَخصَين، صَحيح؟", en: "Welcome. A double room, correct?" },
            { speaker: "You", l1: "نَعَم. هَل يَشمَل الفُطور؟", en: "Yes. Does it include breakfast?" },
            { speaker: "Clerk", l1: "نَعَم، الفُطور مِن السّابِعة.", en: "Yes, breakfast from seven." },
            { speaker: "You", l1: "مُمتاز. كَم اللَّيلة؟", en: "Excellent. How much per night?" },
            { speaker: "Clerk", l1: "أَلف جُنَيه. هذا مِفتاحُك، غُرفة ٢٠٤.", en: "A thousand pounds. Here's your key, room 204." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Check-in check",
          questions: [
            {
              q: "'I have a reservation' =",
              options: ["عِندي حَجز", "عِندي غُرفة", "عِندي مِفتاح", "عِندي فُطور"],
              correct: 0,
            },
            {
              q: "A double room is a ghurfa…",
              options: ["li-shakhṣ", "li-shakhṣayn", "li-layla", "li-fuṭūr"],
              correct: 1,
              fb: "li-shakhṣayn uses the dual -ayn = 'for two persons'.",
            },
            {
              q: "hal yashmal al-fuṭūr? asks about…",
              options: ["the key", "breakfast", "the price per night", "check-out time"],
              correct: 1,
            },
          ],
        },
      ],
    },
    {
      slug: "hotel-room",
      title: "Room vocab & polite problems",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "When something doesn't work",
          body: [
            "Cairo summers are hot, so the line you'll most likely need is <strong>al-takyīf lā yaʿmal</strong> (التَّكييف لا يَعمَل, \"the AC isn't working\"). The pattern <em>X lā yaʿmal</em> works for anything: <em>al-wāy fāy lā yaʿmal</em>, <em>ad-dūsh lā yaʿmal</em>.",
            "Be polite — front it with <strong>ʿafwan</strong> (عَفواً, excuse me) and end with <strong>mumkin tusāʿidnī?</strong> (مُمكِن تُساعِدني؟, can you help me?). Egyptians respond far better to courtesy than complaint.",
            "Other common asks: more towels (مَناشِف, manāshif), the Wi-Fi password (كَلِمة سِرّ الواي فاي), and a wake-up call.",
          ],
          keyPoint:
            "Pattern: [thing] lā yaʿmal = [thing] isn't working. al-takyīf = the AC. Soften with ʿafwan + mumkin tusāʿidnī?",
        },
        {
          type: "vocab",
          heading: "Room vocab",
          items: [
            { l1: "التَّكييف", en: "the air conditioning", note: "at-takyīf (m.)" },
            { l1: "لا يَعمَل", en: "isn't working", note: "lā yaʿmal — [thing] lā yaʿmal" },
            { l1: "الدُّش", en: "the shower", note: "ad-dush (m.)" },
            { l1: "الماء السّاخِن", en: "the hot water", note: "al-māʾ as-sākhin" },
            { l1: "مَناشِف", en: "towels", note: "manāshif (pl.); sing. minshafa مِنشَفة" },
            { l1: "الواي فاي", en: "the Wi-Fi", note: "al-wāy fāy" },
            { l1: "كَلِمة السِّر", en: "the password", note: "kalimat as-sirr" },
            { l1: "مُمكِن تُساعِدني؟", en: "can you help me?", note: "mumkin tusāʿidnī?" },
            { l1: "النّافِذة", en: "the window", note: "an-nāfidha (f.); colloquial: ash-shibbāk الشُّبّاك" },
          ],
        },
        {
          type: "dialogue",
          heading: "Calling the front desk",
          setup: "Your room is stuffy; you ring reception.",
          lines: [
            { speaker: "You", l1: "عَفواً، التَّكييف لا يَعمَل في غُرفَتي.", en: "Excuse me, the AC isn't working in my room." },
            { speaker: "Clerk", l1: "آسِف جِدّاً. أَيّ غُرفة؟", en: "Very sorry. Which room?" },
            { speaker: "You", l1: "غُرفة ٢٠٤. وَمُمكِن مَناشِف إضافِيّة؟", en: "Room 204. And could I have extra towels?" },
            { speaker: "Clerk", l1: "حاضِر، أُرسِل أَحَداً حالاً.", en: "Right away, I'll send someone immediately." },
            { speaker: "You", l1: "شُكراً، لَطيف مِنك.", en: "Thanks, that's kind of you." },
          ],
        },
        {
          type: "orderWords",
          heading: "Report the problem",
          items: [
            { tokens: ["التَّكييف", "لا", "يَعمَل"], en: "The AC isn't working." },
            { tokens: ["مُمكِن", "تُساعِدني", "؟"], en: "Can you help me?" },
            { tokens: ["عَفواً", "،", "الماء", "السّاخِن", "لا", "يَعمَل"], en: "Excuse me, the hot water isn't working." },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Excuse me, the air conditioning isn't working. Can you help me?",
          reference: "عَفواً، التَّكييف لا يَعمَل. مُمكِن تُساعِدني؟",
          hint: "Use the pattern [thing] lā yaʿmal, then mumkin tusāʿidnī?",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "'The AC isn't working' =",
              options: [
                "التَّكييف لا يَعمَل",
                "عِندي حَجز",
                "كَم اللَّيلة؟",
                "هَل يَشمَل الفُطور؟",
              ],
              correct: 0,
            },
            {
              q: "'Can you help me?' =",
              options: ["مُمكِن تُساعِدني؟", "أَينَ الغُرفة؟", "بِكَم؟", "ما اسمُك؟"],
              correct: 0,
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
        q: "'Passport' =",
        options: ["jawāz safar", "taʾshīra", "al-jumruk", "al-amtiʿa"],
        correct: 0,
      },
      {
        q: "al-jumruk means…",
        options: ["passport control", "customs", "arrivals", "boarding pass"],
        correct: 1,
      },
      {
        q: "'I have a reservation' =",
        options: ["عِندي حَجز", "عِندي مِفتاح", "عِندي غُرفة", "عِندي فُطور"],
        correct: 0,
      },
      {
        q: "A single room is a ghurfa…",
        options: ["li-shakhṣayn", "li-shakhṣ", "li-layla", "li-fuṭūr"],
        correct: 1,
      },
      {
        q: "'Does it include breakfast?' =",
        options: [
          "هَل يَشمَل الفُطور؟",
          "كَم اللَّيلة؟",
          "أَينَ المِفتاح؟",
          "عِندي حَجز",
        ],
        correct: 0,
      },
      {
        q: "li-shakhṣayn uses which grammatical form?",
        options: ["plural", "the dual (-ayn)", "feminine", "the command"],
        correct: 1,
      },
      {
        q: "'The AC isn't working' =",
        options: [
          "التَّكييف لا يَعمَل",
          "الدُّش جَديد",
          "الماء بارِد",
          "الغُرفة كَبيرة",
        ],
        correct: 0,
      },
      {
        q: "manāshif are…",
        options: ["towels", "keys", "windows", "passports"],
        correct: 0,
      },
      {
        q: "'Can you help me?' =",
        options: ["مُمكِن تُساعِدني؟", "كَم اللَّيلة؟", "أَينَ الفُطور؟", "ما سَبَب الزِّيارة؟"],
        correct: 0,
      },
      {
        q: "siyāḥa, the visit purpose, means…",
        options: ["business", "study", "tourism", "family"],
        correct: 2,
      },
    ],
  },
};
