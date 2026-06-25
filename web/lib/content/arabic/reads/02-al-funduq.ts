import type { DailyRead } from "../../types";

export const READ_AL_FUNDUQ: DailyRead = {
  slug: "al-funduq",
  order: 2,
  stageUnlock: 1,
  difficulty: 4.5,
  titleL1: "الفُنْدُق",
  titleEn: "The hotel",
  intro:
    "Day two. Still present tense and full harakat, but the sentences are a touch longer and you'll meet a short check-in exchange. Watch for possessive endings like ghurfatī (my room).",
  paragraphs: [
    {
      l1: "التَّاكْسِي يَقِف أَمَام الفُنْدُق. الفُنْدُق فِي وَسَط المَدِينَة. هُوَ قَدِيم وَلَكِن جَمِيل.",
      en: "The taxi stops in front of the hotel. The hotel is in the city center. It is old but beautiful.",
    },
    {
      l1: "أَنَا أَدْخُل. هُنَاك رَجُل خَلْف المَكْتَب. هُوَ يَبْتَسِم وَيَقُول: «مَسَاء الخَيْر! أَهْلًا بِك.»",
      en: "I go in. There is a man behind the desk. He smiles and says: \"Good evening! Welcome.\"",
    },
    {
      l1: "أَنَا أَقُول: «مَسَاء النُّور. عِنْدِي حَجْز. اِسْمِي مَايْكِل.»",
      en: "I say: \"Good evening. I have a reservation. My name is Michael.\"",
    },
    {
      l1: "الرَّجُل يَنْظُر إِلَى الكُومْبِيُوتَر. ثُمَّ يَقُول: «نَعَم، عِنْدَك غُرْفَة لِثَلَاث لَيَالٍ. هَذَا هُوَ المِفْتَاح.»",
      en: "The man looks at the computer. Then he says: \"Yes, you have a room for three nights. Here is the key.\"",
    },
    {
      l1: "الغُرْفَة فِي الطَّابِق الثَّالِث. أَنَا آخُذ المِصْعَد. المِصْعَد صَغِير وَبَطِيء.",
      en: "The room is on the third floor. I take the elevator. The elevator is small and slow.",
    },
    {
      l1: "غُرْفَتِي صَغِيرَة وَلَكِنَّهَا نَظِيفَة. فِيهَا سَرِير وَطَاوِلَة وَنَافِذَة. مِن النَّافِذَة أَرَى الشَّارِع.",
      en: "My room is small but it is clean. In it there is a bed, a table, and a window. From the window I see the street.",
    },
    {
      l1: "الشَّارِع مَلِيء بِالنَّاس وَالسَّيَّارَات. الأَصْوَات عَالِيَة، وَلَكِن هَذِهِ هِيَ القَاهِرَة فِي اللَّيْل.",
      en: "The street is full of people and cars. The sounds are loud, but this is Cairo at night.",
    },
    {
      l1: "أَنَا تَعْبَان جِدًّا. أَضَع الحَقِيبَة عَلَى الأَرْض وَأَنَام بِسُرْعَة. غَدًا يَوْم جَدِيد.",
      en: "I am very tired. I put the suitcase on the floor and I sleep quickly. Tomorrow is a new day.",
    },
  ],
  vocabSpotlight: [
    { l1: "الفُنْدُق", en: "the hotel (al-funduq)" },
    { l1: "حَجْز", en: "a reservation / booking (ḥajz)" },
    { l1: "المِفْتَاح", en: "the key (al-miftāḥ)" },
    { l1: "الغُرْفَة", en: "the room (al-ghurfa)" },
    { l1: "الطَّابِق الثَّالِث", en: "the third floor (aṭ-ṭābiq ath-thālith)" },
    { l1: "نَظِيفَة", en: "clean (f.) (naẓīfa)" },
    { l1: "النَّافِذَة", en: "the window (an-nāfidha)" },
    { l1: "تَعْبَان", en: "tired (colloquial, taʿbān)" },
  ],
  comprehension: [
    {
      q: "Where is the hotel located?",
      options: ["near the airport", "in the city center", "by the pyramids", "on the Nile"],
      correct: 1,
    },
    {
      q: "How many nights is the room booked for?",
      options: ["one night", "two nights", "three nights", "a week"],
      correct: 2,
    },
    {
      q: "What floor is the room on?",
      options: ["first floor", "second floor", "third floor", "fifth floor"],
      correct: 2,
    },
    {
      q: "How is the room described?",
      options: ["big and dirty", "small but clean", "large and bright", "small and dirty"],
      correct: 1,
    },
    {
      q: "What does the narrator do at the end?",
      options: ["goes out to eat", "calls a friend", "falls asleep quickly", "reads a book"],
      correct: 2,
    },
  ],
};
