import type { DailyRead } from "../../types";

export const READ_AL_AHRAM: DailyRead = {
  slug: "al-ahram",
  order: 5,
  stageUnlock: 2,
  difficulty: 6,
  titleL1: "الأَهْرَامَات",
  titleEn: "The pyramids",
  intro:
    "A big day out at Giza. This read introduces the past tense: dhahabtu (I went), raʾaytu (I saw), waṣaltu (I arrived). You'll also see a short camel-ride haggle. Sentences are longer now.",
  paragraphs: [
    {
      l1: "فِي الصَّبَاح البَاكِر، ذَهَبْت إِلَى الجِيزَة. أَخَذْت تَاكْسِي مِن الفُنْدُق. الطَّرِيق كَان طَوِيلًا وَمُزْدَحِمًا.",
      en: "Early in the morning, I went to Giza. I took a taxi from the hotel. The road was long and crowded.",
    },
    {
      l1: "عِنْدَمَا وَصَلْت، رَأَيْت الأَهْرَامَات لِأَوَّل مَرَّة. كَانَت ضَخْمَة جِدًّا! وَقَفْت وَلَم أَسْتَطِع الكَلَام.",
      en: "When I arrived, I saw the pyramids for the first time. They were enormous! I stood still and couldn't speak.",
    },
    {
      l1: "الهَرَم الأَكْبَر بَنَاه المِصْرِيُّون القُدَمَاء قَبْل آلَاف السِّنِين. كَيْف فَعَلُوا ذَلِك؟ هَذَا سُؤَال صَعْب.",
      en: "The Great Pyramid was built by the ancient Egyptians thousands of years ago. How did they do it? That is a hard question.",
    },
    {
      l1: "بِجَانِب الأَهْرَامَات، يُوجَد أَبُو الهَوْل. لَه جِسْم أَسَد وَوَجْه إِنْسَان. هُوَ يَحْرُس المَكَان مُنْذُ زَمَن بَعِيد.",
      en: "Next to the pyramids is the Sphinx. It has the body of a lion and the face of a human. It has guarded the place since a long time ago.",
    },
    {
      l1: "رَجُل اِقْتَرَب مِنِّي وَقَال: «هَل تُرِيد رُكُوب الجَمَل؟ مِائَة جُنَيْه فَقَط!»",
      en: "A man approached me and said: \"Do you want a camel ride? Only a hundred pounds!\"",
    },
    {
      l1: "أَنَا قُلْت: «مِائَة كَثِير! خَمْسُون جُنَيْه.» هُوَ ضَحِك وَقَال: «أَنْت ذَكِيّ! حَسَنًا، سَبْعُون.» فِي النِّهَايَة اِتَّفَقْنَا عَلَى سِتِّين.",
      en: "I said: \"A hundred is a lot! Fifty pounds.\" He laughed and said: \"You're clever! Okay, seventy.\" In the end we agreed on sixty.",
    },
    {
      l1: "رَكِبْت الجَمَل. كَان عَالِيًا وَبَطِيئًا. مِن فَوْق، رَأَيْت الصَّحْرَاء الذَّهَبِيَّة تَمْتَدّ إِلَى الأُفُق.",
      en: "I rode the camel. It was tall and slow. From up high, I saw the golden desert stretching to the horizon.",
    },
    {
      l1: "أَخَذْت صُوَرًا كَثِيرَة. الشَّمْس كَانَت قَوِيَّة وَالجَوّ حَارّ، وَلَكِن هَذَا اليَوْم لَن أَنْسَاه أَبَدًا.",
      en: "I took many photos. The sun was strong and the weather hot, but this is a day I will never forget.",
    },
  ],
  vocabSpotlight: [
    { l1: "الأَهْرَامَات", en: "the pyramids (al-ahrāmāt)" },
    { l1: "ذَهَبْت", en: "I went (dhahabtu)" },
    { l1: "وَصَلْت", en: "I arrived (waṣaltu)" },
    { l1: "رَأَيْت", en: "I saw (raʾaytu)" },
    { l1: "ضَخْمَة", en: "huge / enormous (ḍakhma)" },
    { l1: "أَبُو الهَوْل", en: "the Sphinx (Abū al-Hawl, lit. 'father of terror')" },
    { l1: "الجَمَل", en: "the camel (al-jamal)" },
    { l1: "الصَّحْرَاء", en: "the desert (aṣ-ṣaḥrāʾ)" },
  ],
  comprehension: [
    {
      q: "How did the narrator get to Giza?",
      options: ["by bus", "by camel", "by taxi", "on foot"],
      correct: 2,
    },
    {
      q: "What was the narrator's reaction on first seeing the pyramids?",
      options: [
        "he was disappointed",
        "he stood still and couldn't speak",
        "he turned back",
        "he started laughing",
      ],
      correct: 1,
    },
    {
      q: "What does the Sphinx have, according to the story?",
      options: [
        "wings and a tail",
        "the body of a lion and the face of a human",
        "two heads",
        "the body of a man and a lion's face",
      ],
      correct: 1,
    },
    {
      q: "What price did the narrator and the camel man finally agree on?",
      options: ["50 pounds", "60 pounds", "70 pounds", "100 pounds"],
      correct: 1,
    },
    {
      q: "What did the narrator see from on top of the camel?",
      options: [
        "the Nile river",
        "the city of Cairo",
        "the golden desert stretching to the horizon",
        "another pyramid being built",
      ],
      correct: 2,
    },
  ],
};
