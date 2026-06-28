import type { Unit } from "../../types";

export const UNIT_CULTURE_RELIGION: Unit = {
  slug: "culture-religion",
  stage: 7,
  order: 31,
  icon: "🕌",
  title: "Culture & customs",
  tagline: "Everyday etiquette, Ramadan basics, showing respect.",
  badge: "culture",
  lessons: [
    {
      slug: "culture-everyday-etiquette",
      title: "Everyday etiquette",
      summary: "The right hand, shoes, modest dress, and photography — practical and welcoming.",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "A few customs that smooth the way",
          body: [
            "A handful of everyday habits make interactions in Egypt comfortable for everyone. None are complicated, and locals are patient with visitors who try.",
            "<strong>The right hand</strong> is conventionally used for eating, giving, and receiving. Offering money or a gift with the right hand (or both hands) reads as polite.",
            "<strong>Shoes</strong> usually come off when entering a home, and always when entering a mosque. Watch what your host does and follow suit.",
            "<strong>Modest dress</strong> — covering shoulders and knees — is appreciated, especially at religious sites; women may be asked to cover their hair inside a mosque. Cairo is cosmopolitan, but modesty is the safe default.",
            "<strong>Photography</strong> of people is best done only with a smile and a quick <em>mumkin?</em> ('may I?'). Avoid photographing military and government buildings.",
          ],
          tip: {
            label: "Welcoming, not strict",
            body: "These are courtesies, not tests. Egyptians are famously warm and will forgive an honest slip. A simple <em>ʿan idhnak</em> ('excuse me / with your permission') and good intentions go a long way.",
          },
          keyPoint:
            "Right hand for giving/eating; shoes off at homes & mosques; dress modestly at sites; ask 'mumkin?' before photographing people.",
        },
        {
          type: "vocab",
          heading: "Etiquette words",
          items: [
            { l1: "مُمْكِن؟", en: "may I? / is it possible?", note: "transliteration: mumkin; ask before photographing or entering." },
            { l1: "عَنْ إِذْنِك", en: "excuse me / with your permission", note: "transliteration: ʿan idhnak; polite for passing or stepping away." },
            { l1: "الْيَد الْيُمْنى", en: "the right hand", note: "transliteration: al-yad al-yumnā; used for giving and eating." },
            { l1: "حِذاء", en: "shoe(s)", note: "transliteration: ḥidhāʾ; removed at homes and mosques." },
            { l1: "مَسْجِد", en: "mosque", note: "transliteration: masjid; remove shoes, dress modestly inside." },
            { l1: "مُحْتَرَم", en: "respectful / respectable", note: "transliteration: muḥtaram; a compliment about conduct." },
            { l1: "ثِياب مُحْتَشِمَة", en: "modest clothing", note: "transliteration: thiyāb muḥtashima; covering shoulders and knees." },
            { l1: "مَنوع التَّصْوير", en: "photography forbidden", note: "transliteration: mamnūʿ at-taṣwīr; a sign to watch for at sites." },
          ],
        },
        {
          type: "dialogue",
          heading: "At the entrance of a mosque",
          setup: "A guide greets you at a historic Cairo mosque.",
          lines: [
            { speaker: "Guide", l1: "أَهْلًا بِك. مِنْ فَضْلِك، اِخْلَع الْحِذاء هُنا.", en: "Welcome. Please, remove your shoes here." },
            { speaker: "You", l1: "بِالطَّبْع. مُمْكِن أُصَوِّر الدّاخِل؟", en: "Of course. May I photograph the inside?" },
            { speaker: "Guide", l1: "نَعَم، لكِنْ بِدون النّاس مِنْ فَضْلِك.", en: "Yes, but without people in the photo, please." },
            { speaker: "You", l1: "فَهِمْت. شُكْرًا عَلى التَّوْضيح.", en: "Understood. Thanks for explaining." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "What's the courteous move?",
          questions: [
            {
              q: "You want to photograph a friendly vendor. First you should:",
              options: ["just snap it", "ask 'mumkin?' with a smile", "pay them", "wait until they leave"],
              correct: 1,
              fb: "A quick 'mumkin?' (may I?) is polite and usually welcomed.",
            },
            {
              q: "Entering someone's home, you notice shoes by the door. You should:",
              options: ["keep yours on", "follow your host's lead and remove them", "ask for slippers loudly", "leave"],
              correct: 1,
            },
            {
              q: "Handing money to a shopkeeper, it's nicest to use:",
              options: ["the left hand", "the right hand (or both)", "a thrown coin", "no hands"],
              correct: 1,
            },
            {
              q: "Visiting a mosque, suitable dress is:",
              options: ["shorts and a tank top", "modest clothing covering shoulders and knees", "swimwear", "anything goes"],
              correct: 1,
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "May I photograph the inside? Thank you.",
          reference: "مُمْكِن أُصَوِّر الدّاخِل؟ شُكْرًا.",
          hint: "mumkin = may I; ṣawwara = to photograph; ad-dākhil = the inside.",
        },
      ],
    },
    {
      slug: "culture-ramadan-eid",
      title: "Ramadan & Eid basics",
      summary: "Iftar, suhoor, Ramaḍān karīm — informational and neutral.",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "What Ramadan looks like, day to day",
          body: [
            "<strong>Ramadan</strong> (<em>Ramaḍān</em>) is the Islamic month of fasting: many people abstain from food and drink from dawn to sunset. As a visitor you aren't expected to fast, but a little awareness is appreciated.",
            "The pre-dawn meal is <strong>suhoor</strong> (<em>saḥūr</em>); the meal that breaks the fast at sunset is <strong>iftar</strong> (<em>ifṭār</em>) — a warm, social occasion, often shared with family and neighbours.",
            "Common greetings are <strong>Ramaḍān karīm</strong> ('generous Ramadan') and <strong>Ramaḍān mubārak</strong> ('blessed Ramadan'). During daylight, it's considerate not to eat, drink, or smoke conspicuously in public.",
            "Ramadan ends with <strong>ʿĪd al-Fiṭr</strong> (the festival of breaking the fast) — a joyful holiday of family visits, new clothes, and sweets. The greeting is <strong>ʿĪd mubārak</strong> ('blessed Eid') or <strong>kull ʿām wa-anta bi-khayr</strong> ('may every year find you well').",
          ],
          keyPoint:
            "Fasting dawn→sunset; suhoor (pre-dawn) & iftar (sunset meal); greet with Ramaḍān karīm; the holiday after is ʿĪd al-Fiṭr → ʿĪd mubārak.",
        },
        {
          type: "vocab",
          heading: "Ramadan & Eid vocabulary",
          items: [
            { l1: "رَمَضان", en: "Ramadan (the fasting month)", note: "transliteration: Ramaḍān." },
            { l1: "صِيام", en: "fasting", note: "transliteration: ṣiyām; abstaining from dawn to sunset." },
            { l1: "إِفْطار", en: "iftar (meal breaking the fast)", note: "transliteration: ifṭār; eaten at sunset, often shared." },
            { l1: "سَحور", en: "suhoor (pre-dawn meal)", note: "transliteration: saḥūr; eaten before the fast begins." },
            { l1: "رَمَضان كَريم", en: "'generous Ramadan' (greeting)", note: "transliteration: Ramaḍān karīm; common reply: Allāhu akram." },
            { l1: "رَمَضان مُبارَك", en: "'blessed Ramadan' (greeting)", note: "transliteration: Ramaḍān mubārak; interchangeable with Ramaḍān karīm." },
            { l1: "عيد الْفِطْر", en: "Eid al-Fitr (festival ending Ramadan)", note: "transliteration: ʿĪd al-Fiṭr." },
            { l1: "عيد مُبارَك", en: "'blessed Eid' (greeting)", note: "transliteration: ʿĪd mubārak; the standard holiday greeting." },
            { l1: "كُلّ عام وَأَنْتَ بِخَيْر", en: "'may every year find you well'", note: "transliteration: kull ʿām wa-anta bi-khayr; used at Eid and other occasions." },
          ],
        },
        {
          type: "tip",
          heading: "Being a thoughtful guest in Ramadan",
          body: "If a colleague is fasting, you don't need to hide — just be considerate: avoid eating or drinking right in front of them during the day, and be ready for a slightly slower afternoon and a lively evening. If you're invited to <em>iftar</em>, it's a real honour; bringing a small gift of sweets or dates is a kind gesture. A simple <em>Ramaḍān karīm</em> is always welcome.",
          example: { l1: "رَمَضان كَريم! مَتى الإِفْطار؟", en: "Ramadan kareem! When is iftar?" },
        },
        {
          type: "fillBlank",
          heading: "Fill in the term",
          intro: "Choose the right Ramadan word.",
          items: [
            {
              template: "نَأْكُلُ ___ عِنْدَ غُروب الشَّمْس.",
              answer: "الإِفْطار",
              en: "We eat iftar at sunset.",
              options: ["الإِفْطار", "السَّحور", "العيد", "الصِّيام"],
            },
            {
              template: "نَأْكُلُ ___ قَبْلَ الْفَجْر.",
              answer: "السَّحور",
              en: "We eat suhoor before dawn.",
              options: ["الإِفْطار", "السَّحور", "العيد", "الكَرَم"],
            },
            {
              template: "بَعْدَ رَمَضان نَحْتَفِلُ بِـ ___ .",
              answer: "عيد الْفِطْر",
              en: "After Ramadan we celebrate Eid al-Fitr.",
              options: ["عيد الْفِطْر", "السَّحور", "الصِّيام", "الْجَوّ"],
            },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Ramadan basics",
          questions: [
            {
              q: "The meal that breaks the fast at sunset is called:",
              options: ["suhoor", "iftar", "Eid", "karam"],
              correct: 1,
            },
            {
              q: "A standard Ramadan greeting is:",
              options: ["Ramaḍān karīm", "Maʿ as-salāma", "Tfaḍḍal", "Akhbārak ēh"],
              correct: 0,
            },
            {
              q: "As a non-fasting visitor during the day, it's considerate to:",
              options: ["eat loudly in public", "avoid eating/drinking conspicuously in public", "skip all greetings", "refuse iftar invitations"],
              correct: 1,
            },
            {
              q: "The holiday that ends Ramadan is:",
              options: ["ʿĪd al-Fiṭr", "suhoor", "ṣiyām", "al-jaww"],
              correct: 0,
            },
          ],
        },
      ],
    },
    {
      slug: "culture-showing-respect",
      title: "Showing respect & common courtesies",
      summary: "Honorifics, blessings in reply, and the little phrases that signal respect.",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Respect is shown through small phrases",
          body: [
            "Egyptian courtesy is generous with titles and blessings. Using a respectful address and the right reply to a kindness marks you as <em>muḥtaram</em> (respectful).",
            "Polite titles include <strong>ḥaḍretak</strong> ('your honour', a respectful 'you'), <strong>ustādh / ustādha</strong> ('Mr/Ms', also 'teacher'), and <strong>ḥājj / ḥājja</strong> for older people (originally 'one who has done the pilgrimage', used widely as a warm honorific).",
            "When someone helps you, common replies are <strong>Allāh yikhallīk</strong> ('may God keep you') and <strong>tislam īdak</strong> ('bless your hands', said for food or a favour). These small blessings carry real warmth.",
          ],
          keyPoint:
            "Address respectfully (ḥaḍretak, ustādh, ḥājj); reply to kindness with blessings (Allāh yikhallīk, tislam īdak).",
        },
        {
          type: "vocab",
          heading: "Respect & courtesy phrases",
          items: [
            { l1: "حَضْرَتَك", en: "you (respectful 'your honour')", note: "transliteration: ḥaḍretak (m) / ḥaḍretik (f); polite form of address." },
            { l1: "أُسْتاذ", en: "Mr / sir / teacher", note: "transliteration: ustādh; respectful for a man; ustādha for a woman." },
            { l1: "حاجّ", en: "respectful title for an older man", note: "transliteration: ḥājj; ḥājja for a woman; warm and widely used." },
            { l1: "اللَّه يِخَلّيك", en: "may God keep you", note: "transliteration: Allāh yikhallīk; a warm reply to a kindness." },
            { l1: "تِسْلَم إيدَك", en: "bless your hands", note: "transliteration: tislam īdak; thanks for food cooked or a favour done." },
            { l1: "مِنْ غَيْر مُؤاخَذَة", en: "no offence (if I may say)", note: "transliteration: min ghayr muʾākhadha; softens a delicate remark." },
            { l1: "بَعْدَ إِذْنَك", en: "with your permission", note: "transliteration: baʿd idhnak; polite before leaving or acting." },
            { l1: "تَشَرَّفْنا", en: "pleased / honoured to meet you", note: "transliteration: tasharrafnā; literally 'we are honoured'." },
          ],
        },
        {
          type: "dialogue",
          heading: "A respectful exchange",
          setup: "You thank a host after a home-cooked meal.",
          lines: [
            { speaker: "You", l1: "أُسْتاذ، الطَّعام كانَ رائِعًا. تِسْلَم إيدَك.", en: "Sir, the food was wonderful. Bless your hands." },
            { speaker: "Host", l1: "اللَّه يِخَلّيك. تَشَرَّفْنا بِزِيارَتِك.", en: "May God keep you. We're honoured by your visit." },
            { speaker: "You", l1: "بَعْدَ إِذْنَك، يَجِبُ أَنْ أَذْهَب.", en: "With your permission, I should go." },
            { speaker: "Host", l1: "في أَمانِ اللَّه، يا حاجّ.", en: "Go in God's safekeeping, sir." },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the courtesy",
          intro: "Tap the words into order.",
          items: [
            { tokens: ["تِسْلَم", "إيدَك،", "الطَّعام", "رائِع"], en: "Bless your hands, the food is wonderful." },
            { tokens: ["بَعْدَ", "إِذْنَك،", "يَجِبُ", "أَنْ", "أَذْهَب"], en: "With your permission, I should go." },
            { tokens: ["تَشَرَّفْنا", "بِزِيارَتِك"], en: "We're honoured by your visit." },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Sir, the food was wonderful. Bless your hands.",
          reference: "أُسْتاذ، الطَّعام كانَ رائِعًا. تِسْلَم إيدَك.",
          hint: "ustādh = sir; tislam īdak = bless your hands (thanks for the food).",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "'Tislam īdak' (bless your hands) is said:",
              options: ["when angry", "to thank someone for food or a favour", "when leaving a mosque", "to ask the time"],
              correct: 1,
            },
            {
              q: "'Ḥaḍretak' is:",
              options: ["a respectful way to say 'you'", "a kind of food", "a goodbye", "a Ramadan greeting"],
              correct: 0,
            },
            {
              q: "'Ḥājj / ḥājja' is used as:",
              options: ["an insult", "a warm honorific for an older person", "a weather term", "a filler word"],
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
        q: "It's conventional to give and eat with:",
        options: ["the left hand", "the right hand", "either, thrown", "no hands"],
        correct: 1,
      },
      {
        q: "Before photographing a person, the courteous thing is to:",
        options: ["pay first", "ask 'mumkin?' with a smile", "do it quickly", "wait for night"],
        correct: 1,
      },
      {
        q: "Entering a mosque, you should:",
        options: ["keep shoes on", "remove your shoes and dress modestly", "bring food", "take flash photos"],
        correct: 1,
      },
      {
        q: "The meal that breaks the Ramadan fast at sunset is:",
        options: ["suhoor", "iftar", "Eid", "karam"],
        correct: 1,
      },
      {
        q: "The pre-dawn Ramadan meal is:",
        options: ["iftar", "suhoor", "ʿĪd", "ṣiyām"],
        correct: 1,
      },
      {
        q: "A common Ramadan greeting is:",
        options: ["Ramaḍān karīm", "Maʿ as-salāma", "Yalla", "Akīd"],
        correct: 0,
      },
      {
        q: "The holiday ending Ramadan, with greeting 'ʿĪd mubārak', is:",
        options: ["ʿĪd al-Fiṭr", "suhoor", "ṣiyām", "Ramaḍān"],
        correct: 0,
      },
      {
        q: "'Tislam īdak' is said:",
        options: ["to thank someone for food/a favour", "when angry", "to ask directions", "only at Eid"],
        correct: 0,
      },
      {
        q: "'Ḥaḍretak' is:",
        options: ["a respectful 'you'", "a dessert", "a goodbye", "a mosque"],
        correct: 0,
      },
      {
        q: "Translate: 'May I photograph the inside?'",
        options: [
          "مُمْكِن أُصَوِّر الدّاخِل؟",
          "بَعْدَ إِذْنَك، أَذْهَب.",
          "رَمَضان كَريم!",
          "تِسْلَم إيدَك.",
        ],
        correct: 0,
      },
    ],
  },
};
