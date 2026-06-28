import type { DailyRead } from "../../types";

export const READ_AL_SOUQ: DailyRead = {
  slug: "al-souq",
  order: 6,
  stageUnlock: 3,
  difficulty: 6.5,
  titleL1: "فِي خَان الخَلِيلِي",
  titleEn: "In Khan el-Khalili",
  intro:
    "The famous old market. Past and present tenses mix freely here, and the heart of the read is a back-and-forth bargaining dialogue — the rhythm of haggling in Egypt. Watch the numbers fly.",
  paragraphs: [
    {
      l1: "فِي المَسَاء، ذَهَبْت إِلَى خَان الخَلِيلِي، أَشْهَر سُوق فِي القَاهِرَة. السُّوق قَدِيم جِدًّا، عُمْرُه مِئَات السِّنِين.",
      en: "In the evening, I went to Khan el-Khalili, the most famous market in Cairo. The market is very old; it is hundreds of years old.",
    },
    {
      l1: "الأَزِقَّة ضَيِّقَة وَمُزْدَحِمَة. فِي كُلّ مَكَان أَرَى مَحَلَّات: تَوَابِل، وَذَهَب، وَفَوَانِيس، وَسَجَّاد مُلَوَّن.",
      en: "The alleys are narrow and crowded. Everywhere I see shops: spices, gold, lanterns, and colorful carpets.",
    },
    {
      l1: "تَوَقَّفْت أَمَام مَحَلّ صَغِير. رَأَيْت فَانُوسًا نُحَاسِيًّا جَمِيلًا. أَرَدْت أَن أَشْتَرِيه كَهَدِيَّة.",
      en: "I stopped in front of a small shop. I saw a beautiful copper lantern. I wanted to buy it as a gift.",
    },
    {
      l1: "البَائِع اِبْتَسَم وَقَال: «أَهْلًا يَا بَاشَا! هَذَا الفَانُوس يَدَوِيّ. بِمِائَتَيْن وَخَمْسِين جُنَيْه فَقَط.»",
      en: "The seller smiled and said: \"Welcome, sir! This lantern is handmade. Only two hundred and fifty pounds.\"",
    },
    {
      l1: "قُلْت: «غَالِي جِدًّا! أَنَا طَالِب. مِائَة جُنَيْه.» البَائِع وَضَع يَدَه عَلَى قَلْبِه: «مِائَة؟! مُسْتَحِيل يَا صَدِيقِي! مِائَة وَثَمَانُون.»",
      en: "I said: \"Very expensive! I'm a student. A hundred pounds.\" The seller put his hand on his heart: \"A hundred?! Impossible, my friend! A hundred and eighty.\"",
    },
    {
      l1: "تَظَاهَرْت بِأَنَّنِي سَأَمْشِي. حِينَهَا نَادَانِي: «طَيِّب، طَيِّب! تَعَال! مِائَة وَعِشْرِين، وَهَذَا آخِر سِعْر.»",
      en: "I pretended I would walk away. At that point he called me back: \"Okay, okay! Come! A hundred and twenty, and that's the final price.\"",
    },
    {
      l1: "فَكَّرْت لِلَحْظَة ثُمَّ قُلْت: «اِتَّفَقْنَا.» دَفَعْت المَال، وَهُوَ لَفَّ الفَانُوس فِي وَرَقَة وَأَعْطَانِي إِيَّاه مَع اِبْتِسَامَة.",
      en: "I thought for a moment then said: \"It's a deal.\" I paid the money, and he wrapped the lantern in paper and gave it to me with a smile.",
    },
    {
      l1: "خَرَجْت مِن السُّوق سَعِيدًا بِالهَدِيَّة. تَعَلَّمْت دَرْسًا مُهِمًّا: فِي مِصْر، المُسَاوَمَة جُزْء مِن المُتْعَة.",
      en: "I left the market happy with the gift. I learned an important lesson: in Egypt, bargaining is part of the fun.",
    },
  ],
  vocabSpotlight: [
    { l1: "السُّوق", en: "the market (as-sūq)" },
    { l1: "مَحَلّ", en: "a shop / store (maḥall)" },
    { l1: "فَانُوس", en: "a lantern (fānūs)" },
    { l1: "البَائِع", en: "the seller / vendor (al-bāʾiʿ)" },
    { l1: "غَالِي", en: "expensive (ghālī)" },
    { l1: "آخِر سِعْر", en: "final price (ākhir siʿr)" },
    { l1: "اِتَّفَقْنَا", en: "we agreed / it's a deal (ittafaqnā)" },
    { l1: "المُسَاوَمَة", en: "bargaining / haggling (al-musāwama)" },
  ],
  comprehension: [
    {
      q: "What is Khan el-Khalili?",
      options: [
        "a famous old market in Cairo",
        "a mosque",
        "a restaurant",
        "a museum",
      ],
      correct: 0,
    },
    {
      q: "What did the narrator want to buy?",
      options: ["a carpet", "gold jewelry", "a copper lantern", "spices"],
      correct: 2,
    },
    {
      q: "What was the seller's first asking price?",
      options: ["120 pounds", "180 pounds", "250 pounds", "100 pounds"],
      correct: 2,
    },
    {
      q: "What trick did the narrator use to lower the price?",
      options: [
        "he offered to pay in dollars",
        "he pretended he would walk away",
        "he showed his student card",
        "he asked for two lanterns",
      ],
      correct: 1,
    },
    {
      q: "What price did they finally settle on?",
      options: ["100 pounds", "120 pounds", "180 pounds", "250 pounds"],
      correct: 1,
    },
  ],
};
