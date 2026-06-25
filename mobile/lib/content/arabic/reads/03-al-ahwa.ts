import type { DailyRead } from "../../types";

export const READ_AL_AHWA: DailyRead = {
  slug: "al-ahwa",
  order: 3,
  stageUnlock: 1,
  difficulty: 5,
  titleL1: "صَبَاح فِي المَقْهَى",
  titleEn: "A morning at the café",
  intro:
    "Day three. Your first proper little conversation, plus the very useful verb 'urīd' (I want). Present tense throughout, with harakat. Notice how Egyptians say 'ahwa for coffee.",
  paragraphs: [
    {
      l1: "الصَّبَاح جَمِيل. الشَّمْس تُشْرِق فَوْق المَدِينَة. أَنَا أَخْرُج مِن الفُنْدُق وَأَبْحَث عَن مَقْهَى.",
      en: "The morning is beautiful. The sun rises over the city. I leave the hotel and look for a café.",
    },
    {
      l1: "فِي زَاوِيَة الشَّارِع، هُنَاك مَقْهَى صَغِير. أَمَام المَقْهَى طَاوِلَات وَكَرَاسِي. أَنَا أَجْلِس عَلَى كُرْسِي.",
      en: "On the street corner, there is a small café. In front of the café there are tables and chairs. I sit down on a chair.",
    },
    {
      l1: "النَّادِل يَأْتِي وَيَقُول: «صَبَاح الخَيْر! مَاذَا تُرِيد؟»",
      en: "The waiter comes and says: \"Good morning! What do you want?\"",
    },
    {
      l1: "أَنَا أَقُول: «صَبَاح الخَيْر. أُرِيد قَهْوَة، مِن فَضْلِك.» النَّادِل يَسْأَل: «قَهْوَة أَم شَاي؟»",
      en: "I say: \"Good morning. I want a coffee, please.\" The waiter asks: \"Coffee or tea?\"",
    },
    {
      l1: "«قَهْوَة، لَوْ سَمَحْت. وَكُوب مَاء أَيْضًا.» النَّادِل يَبْتَسِم: «حَاضِر، عَلَى طُول.»",
      en: "\"Coffee, please. And a glass of water too.\" The waiter smiles: \"Right away, at once.\"",
    },
    {
      l1: "بَعْد قَلِيل، النَّادِل يَأْتِي بِالقَهْوَة. القَهْوَة سَاخِنَة وَقَوِيَّة. الرَّائِحَة لَذِيذَة.",
      en: "After a little while, the waiter comes with the coffee. The coffee is hot and strong. The smell is delicious.",
    },
    {
      l1: "رَجُل عَجُوز يَجْلِس بِجَانِبِي. هُوَ يَسْأَل: «أَنْت سَائِح؟» أَنَا أَقُول: «نَعَم، أَنَا مِن أَمْرِيكَا.»",
      en: "An old man sits beside me. He asks: \"Are you a tourist?\" I say: \"Yes, I am from America.\"",
    },
    {
      l1: "الرَّجُل يَضْحَك: «أَهْلًا بِك فِي مِصْر! القَهْوَة المِصْرِيَّة هِيَ الأَفْضَل، صَحِيح؟» أَنَا أَضْحَك أَيْضًا: «نَعَم، صَحِيح جِدًّا!»",
      en: "The man laughs: \"Welcome to Egypt! Egyptian coffee is the best, right?\" I laugh too: \"Yes, very true!\"",
    },
  ],
  vocabSpotlight: [
    { l1: "المَقْهَى", en: "the café (al-maqhā; colloquial: 'ahwa)" },
    { l1: "أُرِيد", en: "I want (urīd)" },
    { l1: "النَّادِل", en: "the waiter (an-nādil)" },
    { l1: "قَهْوَة", en: "coffee ('ahwa / qahwa)" },
    { l1: "شَاي", en: "tea (shāy)" },
    { l1: "لَوْ سَمَحْت", en: "please / if you would (law samaḥt)" },
    { l1: "حَاضِر", en: "sure / right away / certainly (ḥāḍir)" },
    { l1: "سَائِح", en: "tourist (sāʾiḥ)" },
  ],
  comprehension: [
    {
      q: "What is the narrator looking for when he leaves the hotel?",
      options: ["a taxi", "a café", "a market", "the airport"],
      correct: 1,
    },
    {
      q: "What does the narrator order?",
      options: ["tea and bread", "coffee and a glass of water", "juice", "coffee and a sandwich"],
      correct: 1,
    },
    {
      q: "How is the coffee described?",
      options: ["cold and weak", "hot and strong", "sweet and light", "bitter"],
      correct: 1,
    },
    {
      q: "Who sits beside the narrator?",
      options: ["a child", "an old man", "the waiter", "a tourist"],
      correct: 1,
    },
    {
      q: "Where does the narrator say he is from?",
      options: ["England", "America", "France", "Egypt"],
      correct: 1,
    },
  ],
};
