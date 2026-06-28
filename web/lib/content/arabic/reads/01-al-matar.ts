import type { DailyRead } from "../../types";

export const READ_AL_MATAR: DailyRead = {
  slug: "al-matar",
  order: 1,
  stageUnlock: 1,
  difficulty: 4,
  titleL1: "فِي المَطَار",
  titleEn: "At the airport",
  intro:
    "Your very first read. Short nominal sentences (no verb 'to be'), present-tense, and the most common words. Full harakat (vowel marks) throughout so you can sound out every word.",
  paragraphs: [
    {
      l1: "أَنَا فِي القَاهِرَة. هَذَا هُوَ المَطَار. المَطَار كَبِير وَجَدِيد.",
      en: "I am in Cairo. This is the airport. The airport is big and new.",
    },
    {
      l1: "أَنَا مُتْعَب قَلِيلًا. الطَّائِرَة طَوِيلَة. الوَقْت الآن مَسَاءً.",
      en: "I am a little tired. The flight is long. The time now is evening.",
    },
    {
      l1: "هُنَا مُوَظَّف. هُوَ يَقُول: «أَهْلًا وَسَهْلًا! جَوَاز السَّفَر، مِن فَضْلِك.»",
      en: "Here is an official. He says: \"Welcome! Your passport, please.\"",
    },
    {
      l1: "أَنَا أُعْطِيه جَوَاز السَّفَر. هُوَ يَنْظُر إِلَى الصُّورَة. ثُمَّ يَقُول: «شُكْرًا. أَهْلًا بِك فِي مِصْر.»",
      en: "I give him the passport. He looks at the photo. Then he says: \"Thank you. Welcome to Egypt.\"",
    },
    {
      l1: "أَنَا آخُذ حَقِيبَتِي. الحَقِيبَة ثَقِيلَة. أَنَا أَمْشِي إِلَى البَاب.",
      en: "I take my suitcase. The suitcase is heavy. I walk to the door.",
    },
    {
      l1: "خَارِج المَطَار، الجَوّ حَارّ. هُنَاك سَيَّارَات كَثِيرَة. هُنَاك سَائِق تَاكْسِي.",
      en: "Outside the airport, the weather is hot. There are many cars. There is a taxi driver.",
    },
    {
      l1: "السَّائِق يَسْأَل: «إِلَى أَيْن؟» أَنَا أَقُول: «إِلَى وَسَط المَدِينَة، مِن فَضْلِك.»",
      en: "The driver asks: \"Where to?\" I say: \"To downtown, please.\"",
    },
    {
      l1: "أَنَا فِي التَّاكْسِي الآن. المَدِينَة كَبِيرَة وَجَمِيلَة. أَنَا سَعِيد. هَذِهِ هِيَ القَاهِرَة!",
      en: "I am in the taxi now. The city is big and beautiful. I am happy. This is Cairo!",
    },
  ],
  vocabSpotlight: [
    { l1: "المَطَار", en: "the airport (al-maṭār)" },
    { l1: "جَوَاز السَّفَر", en: "the passport (jawāz as-safar)" },
    { l1: "أَهْلًا وَسَهْلًا", en: "welcome (ahlan wa sahlan)" },
    { l1: "الحَقِيبَة", en: "the suitcase / bag (al-ḥaqība)" },
    { l1: "حَارّ", en: "hot (ḥārr)" },
    { l1: "السَّائِق", en: "the driver (as-sāʾiq)" },
    { l1: "وَسَط المَدِينَة", en: "downtown / city center (wasaṭ al-madīna)" },
    { l1: "سَعِيد", en: "happy (saʿīd)" },
  ],
  comprehension: [
    {
      q: "Which city has the narrator arrived in?",
      options: ["Alexandria", "Cairo", "Luxor", "Aswan"],
      correct: 1,
    },
    {
      q: "What does the official ask for?",
      options: ["the ticket", "the suitcase", "the passport", "the money"],
      correct: 2,
    },
    {
      q: "What is the weather like outside the airport?",
      options: ["cold", "rainy", "hot", "windy"],
      correct: 2,
    },
    {
      q: "Where does the narrator ask the taxi to go?",
      options: ["to a hotel", "to downtown", "to the pyramids", "to the river"],
      correct: 1,
    },
    {
      q: "How does the narrator feel at the end?",
      options: ["angry", "scared", "happy", "bored"],
      correct: 2,
    },
  ],
};
