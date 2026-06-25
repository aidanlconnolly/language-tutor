import type { DailyRead } from "../../types";

export const READ_DIE_SPREE: DailyRead = {
  slug: "die-spree",
  order: 7,
  stageUnlock: 3,
  difficulty: 7,
  titleL1: "Ein Spaziergang an der Spree",
  titleEn: "A walk along the Spree",
  intro:
    "Longer sentences with subordinate clauses (watch how the verb jumps to the end after 'weil', 'dass', 'als'). You'll also meet the simple past (Präteritum) in a little bit of Wall history: 'es gab', 'die Mauer fiel'.",
  paragraphs: [
    {
      l1: "Am Nachmittag, als die Sonne endlich herauskam, habe ich beschlossen, einen langen Spaziergang an der Spree zu machen. Der Fluss zieht sich quer durch die ganze Stadt.",
      en: "In the afternoon, when the sun finally came out, I decided to take a long walk along the Spree. The river runs right across the whole city.",
    },
    {
      l1: "Zuerst bin ich am Reichstag vorbeigegangen, dem großen Parlamentsgebäude mit der gläsernen Kuppel. Viele Touristen standen davor, weil man die Kuppel kostenlos besuchen kann, wenn man sich vorher anmeldet.",
      en: "First I walked past the Reichstag, the big parliament building with the glass dome. Many tourists stood in front of it, because you can visit the dome for free if you register beforehand.",
    },
    {
      l1: "Ich wusste, dass Berlin lange geteilt war. Bis 1989 gab es eine Mauer, die die Stadt in Ost und West trennte. Familien konnten sich oft jahrelang nicht sehen.",
      en: "I knew that Berlin was divided for a long time. Until 1989 there was a wall that separated the city into East and West. Families often couldn't see each other for years.",
    },
    {
      l1: "Als die Mauer im November 1989 fiel, feierten die Menschen auf den Straßen. Heute erinnert nur noch wenig daran, aber an manchen Stellen sieht man noch alte Reste.",
      en: "When the Wall fell in November 1989, people celebrated in the streets. Today little reminds you of it, but in some places you can still see old remnants.",
    },
    {
      l1: "Ich ging weiter bis zur East Side Gallery. Das ist ein langes Stück Mauer, das Künstler nach der Wende bemalt haben. Das bekannteste Bild zeigt zwei Politiker, die sich küssen.",
      en: "I walked on to the East Side Gallery. That is a long stretch of the Wall that artists painted after the fall of the regime. The most famous picture shows two politicians kissing.",
    },
    {
      l1: "Während ich die bunten Bilder anschaute, dachte ich darüber nach, wie sehr sich die Stadt verändert hat. Wo früher Soldaten standen, gehen heute Menschen aus aller Welt spazieren.",
      en: "While I looked at the colorful pictures, I thought about how much the city has changed. Where soldiers once stood, today people from all over the world go for a walk.",
    },
    {
      l1: "Auf einer Brücke blieb ich kurz stehen, weil ein Boot voller Touristen unter mir durchfuhr. Die Leute winkten mir zu, und ich winkte zurück. Das Wasser glänzte in der Abendsonne.",
      en: "On a bridge I stopped for a moment because a boat full of tourists passed underneath me. The people waved at me, and I waved back. The water glittered in the evening sun.",
    },
    {
      l1: "Auf dem Rückweg setzte ich mich auf eine Bank und ließ den Tag noch einmal an mir vorbeiziehen. Eine Stadt, die so viel erlebt hat, fühlt sich nie langweilig an.",
      en: "On the way back I sat down on a bench and let the day pass before me once more. A city that has been through so much never feels boring.",
    },
  ],
  vocabSpotlight: [
    { l1: "der Spaziergang", en: "the walk / stroll" },
    { l1: "der Fluss", en: "the river" },
    { l1: "die Mauer", en: "the wall (esp. the Berlin Wall)" },
    { l1: "geteilt", en: "divided" },
    { l1: "die Mauer fiel", en: "the Wall fell (Präteritum)" },
    { l1: "es gab", en: "there was / there were (Präteritum of 'es gibt')" },
    { l1: "sich verändern", en: "to change" },
    { l1: "der Rückweg", en: "the way back" },
  ],
  comprehension: [
    {
      q: "Why do tourists stand in front of the Reichstag?",
      options: [
        "to take a guided bus tour",
        "you can visit the glass dome for free if you register",
        "there is a market there",
        "it is the entrance to a museum",
      ],
      correct: 1,
    },
    {
      q: "Until what year was Berlin divided by the Wall?",
      options: ["1961", "1979", "1989", "1991"],
      correct: 2,
    },
    {
      q: "What is the East Side Gallery?",
      options: [
        "an art museum",
        "a long stretch of the Wall painted by artists",
        "a riverside restaurant",
        "a viewing platform",
      ],
      correct: 1,
    },
    {
      q: "What does the most famous picture on the Wall show?",
      options: [
        "a dove of peace",
        "the Brandenburg Gate",
        "two politicians kissing",
        "a Trabant car breaking through",
      ],
      correct: 2,
    },
    {
      q: "What does the narrator do on the way back?",
      options: [
        "takes a boat tour",
        "sits on a bench and reflects on the day",
        "visits a café",
        "buys a souvenir",
      ],
      correct: 1,
    },
  ],
};
