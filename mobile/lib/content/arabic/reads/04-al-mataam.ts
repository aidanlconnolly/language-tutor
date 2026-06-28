import type { DailyRead } from "../../types";

export const READ_AL_MATAAM: DailyRead = {
  slug: "al-mataam",
  order: 4,
  stageUnlock: 2,
  difficulty: 5.5,
  titleL1: "الغَدَاء فِي المَطْعَم",
  titleEn: "Lunch at the restaurant",
  intro:
    "Lunchtime. Present tense still, but sentences are getting longer and there's a real ordering-and-paying exchange. Meet koshari, Egypt's famous street dish, and numbers for the bill.",
  paragraphs: [
    {
      l1: "فِي الظُّهْر، أَشْعُر بِالجُوع. أَصْدِقَائِي الجُدُد يَقُولُون: «المَطْعَم القَرِيب لَذِيذ. تَعَال مَعَنَا!»",
      en: "At noon, I feel hungry. My new friends say: \"The nearby restaurant is delicious. Come with us!\"",
    },
    {
      l1: "المَطْعَم مَلِيء بِالنَّاس. الرَّائِحَة فِي كُلّ مَكَان. نَجْلِس عَلَى طَاوِلَة بِجَانِب النَّافِذَة.",
      en: "The restaurant is full of people. The smell is everywhere. We sit at a table next to the window.",
    },
    {
      l1: "النَّادِل يَأْتِي وَيَسْأَل: «أَهْلًا! مَاذَا تُرِيدُون أَن تَأْكُلُوا اليَوْم؟»",
      en: "The waiter comes and asks: \"Welcome! What do you want to eat today?\"",
    },
    {
      l1: "صَدِيقِي يَقُول: «الكُشَرِي هُنَا هُوَ الأَشْهَر فِي القَاهِرَة. يَجِب أَن تُجَرِّبه!»",
      en: "My friend says: \"The koshari here is the most famous in Cairo. You must try it!\"",
    },
    {
      l1: "أَنَا أَقُول لِلنَّادِل: «طَبَق كُشَرِي كَبِير، مِن فَضْلِك. وَزُجَاجَة مَاء.»",
      en: "I say to the waiter: \"A big plate of koshari, please. And a bottle of water.\"",
    },
    {
      l1: "الكُشَرِي فِيهِ أَرُزّ وَمَكَرُونَة وَعَدَس وَصَلْصَة طَمَاطِم حَارَّة. أَنَا آكُل بِبُطْء. الطَّعْم رَائِع!",
      en: "The koshari has rice, pasta, lentils, and a spicy tomato sauce. I eat slowly. The taste is wonderful!",
    },
    {
      l1: "بَعْد الغَدَاء، أَطْلُب الحِسَاب. النَّادِل يَقُول: «الحِسَاب خَمْسَة وَأَرْبَعُون جُنَيْهًا.»",
      en: "After lunch, I ask for the bill. The waiter says: \"The bill is forty-five pounds.\"",
    },
    {
      l1: "أَنَا أَدْفَع وَأَتْرُك بَقْشِيش صَغِير. النَّادِل يَقُول: «شُكْرًا! نَتَشَرَّف بِزِيَارَتِك مَرَّة أُخْرَى.» أَخْرُج وَأَنَا شَبْعَان وَسَعِيد.",
      en: "I pay and leave a small tip. The waiter says: \"Thank you! We'd be honored by your visit again.\" I leave full and happy.",
    },
  ],
  vocabSpotlight: [
    { l1: "الغَدَاء", en: "lunch (al-ghadāʾ)" },
    { l1: "الجُوع", en: "hunger ('ashʿur bil-jūʿ = I feel hungry)" },
    { l1: "الكُشَرِي", en: "koshari (rice, pasta & lentils dish)" },
    { l1: "طَبَق", en: "a plate / dish (ṭabaq)" },
    { l1: "الحِسَاب", en: "the bill / check (al-ḥisāb)" },
    { l1: "جُنَيْه", en: "Egyptian pound (junayh)" },
    { l1: "بَقْشِيش", en: "a tip / gratuity (baqshīsh)" },
    { l1: "شَبْعَان", en: "full / satiated (shabʿān)" },
  ],
  comprehension: [
    {
      q: "Why do they go to the restaurant?",
      options: ["it is raining", "the narrator feels hungry at noon", "to meet the waiter", "to celebrate"],
      correct: 1,
    },
    {
      q: "What dish do the friends recommend?",
      options: ["falafel", "koshari", "grilled fish", "kebab"],
      correct: 1,
    },
    {
      q: "What is koshari made of?",
      options: [
        "chicken and bread",
        "rice, pasta, lentils, and tomato sauce",
        "beans and eggs",
        "fish and rice",
      ],
      correct: 1,
    },
    {
      q: "How much is the bill?",
      options: ["25 pounds", "35 pounds", "45 pounds", "55 pounds"],
      correct: 2,
    },
    {
      q: "How does the narrator leave the restaurant?",
      options: ["hungry", "angry", "full and happy", "in a hurry"],
      correct: 2,
    },
  ],
};
