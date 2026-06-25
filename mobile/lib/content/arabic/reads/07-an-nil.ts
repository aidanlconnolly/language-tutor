import type { DailyRead } from "../../types";

export const READ_AN_NIL: DailyRead = {
  slug: "an-nil",
  order: 7,
  stageUnlock: 3,
  difficulty: 7,
  titleL1: "نُزْهَة عَلَى النِّيل",
  titleEn: "A walk along the Nile",
  intro:
    "An afternoon by the great river. Past tenses dominate and the sentences are longer, with a touch of history and reflection. You'll meet the felucca, Egypt's traditional sailboat.",
  paragraphs: [
    {
      l1: "بَعْد ظُهْر يَوْم الجُمُعَة، قَرَّرْت أَن أَتَمَشَّى عَلَى ضِفَاف النِّيل. كَان الجَوّ مُعْتَدِلًا، وَالنَّسِيم يَأْتِي مِن المَاء.",
      en: "On Friday afternoon, I decided to take a walk along the banks of the Nile. The weather was mild, and the breeze came off the water.",
    },
    {
      l1: "النِّيل نَهْر عَظِيم. مُنْذُ آلَاف السِّنِين، أَعْطَى المَاء وَالحَيَاة لِمِصْر كُلِّهَا. بِدُونِه، لَم تَكُن هُنَاك حَضَارَة.",
      en: "The Nile is a mighty river. For thousands of years, it has given water and life to all of Egypt. Without it, there would have been no civilization.",
    },
    {
      l1: "جَلَسْت عَلَى مَقْعَد خَشَبِيّ وَشَاهَدْت القَوَارِب تَمُرّ. بَعْض القَوَارِب صَغِير، وَبَعْضُهَا كَبِير مَع أَضْوَاء مُلَوَّنَة.",
      en: "I sat on a wooden bench and watched the boats pass by. Some boats were small, and some were big with colored lights.",
    },
    {
      l1: "اِقْتَرَب مِنِّي رَجُل وَسَأَلَنِي: «هَل تُرِيد رِحْلَة بِالفِلُوكَة؟ نِصْف سَاعَة عَلَى النَّهْر، وَالغُرُوب قَرِيب.»",
      en: "A man approached me and asked: \"Would you like a felucca trip? Half an hour on the river, and the sunset is near.\"",
    },
    {
      l1: "وَافَقْت. صَعِدْت إِلَى الفِلُوكَة، وَهِيَ قَارِب شِرَاعِيّ تَقْلِيدِيّ. رَفَع الرَّجُل الشِّرَاع، وَبَدَأْنَا نَتَحَرَّك بِهُدُوء.",
      en: "I agreed. I climbed onto the felucca, a traditional sailboat. The man raised the sail, and we began to move gently.",
    },
    {
      l1: "كَان المَنْظَر سَاحِرًا. الشَّمْس نَزَلَت بِبُطْء خَلْف المَبَانِي، وَتَحَوَّل لَوْن السَّمَاء إِلَى البُرْتُقَالِيّ وَالوَرْدِيّ.",
      en: "The view was enchanting. The sun slowly went down behind the buildings, and the color of the sky turned to orange and pink.",
    },
    {
      l1: "قَال لِي البَحَّار: «جَدِّي كَان صَيَّادًا، وَأَبِي أَيْضًا. أَنَا أَعْمَل عَلَى هَذَا النَّهْر مُنْذُ كُنْت طِفْلًا.» تَحَدَّثْنَا طَوِيلًا عَن الحَيَاة.",
      en: "The sailor said to me: \"My grandfather was a fisherman, and my father too. I have worked on this river since I was a child.\" We talked for a long time about life.",
    },
    {
      l1: "عِنْدَمَا عُدْنَا إِلَى الشَّاطِئ، كَانَت النُّجُوم قَد ظَهَرَت. شَكَرْت الرَّجُل وَمَشَيْت إِلَى الفُنْدُق، وَأَنَا أَشْعُر بِسَلَام عَمِيق.",
      en: "When we returned to the shore, the stars had appeared. I thanked the man and walked to the hotel, feeling a deep peace.",
    },
  ],
  vocabSpotlight: [
    { l1: "النِّيل", en: "the Nile (an-Nīl)" },
    { l1: "ضِفَاف", en: "banks (of a river) (ḍifāf)" },
    { l1: "الفِلُوكَة", en: "the felucca (traditional sailboat)" },
    { l1: "الشِّرَاع", en: "the sail (ash-shirāʿ)" },
    { l1: "الغُرُوب", en: "the sunset (al-ghurūb)" },
    { l1: "البَحَّار", en: "the sailor (al-baḥḥār)" },
    { l1: "صَيَّاد", en: "a fisherman / hunter (ṣayyād)" },
    { l1: "سَلَام عَمِيق", en: "a deep peace (salām ʿamīq)" },
  ],
  comprehension: [
    {
      q: "On what day does the narrator take his walk?",
      options: ["Monday", "Wednesday", "Friday", "Sunday"],
      correct: 2,
    },
    {
      q: "Why is the Nile so important, according to the story?",
      options: [
        "it is the longest river in the world",
        "it has given water and life to all of Egypt for thousands of years",
        "it is good for fishing only",
        "it separates two cities",
      ],
      correct: 1,
    },
    {
      q: "What is a felucca?",
      options: [
        "a large cruise ship",
        "a traditional sailboat",
        "a fishing net",
        "a riverside café",
      ],
      correct: 1,
    },
    {
      q: "What did the sailor say about his family?",
      options: [
        "they were merchants",
        "his grandfather and father were fishermen",
        "they moved to Cairo recently",
        "they owned the hotel",
      ],
      correct: 1,
    },
    {
      q: "What had appeared in the sky when they returned to shore?",
      options: ["clouds", "the sun", "the stars", "birds"],
      correct: 2,
    },
  ],
};
