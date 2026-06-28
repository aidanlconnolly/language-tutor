import type { DailyRead } from "../../types";

export const READ_CAFE_MORGEN: DailyRead = {
  slug: "cafe-morgen",
  order: 3,
  stageUnlock: 1,
  difficulty: 5,
  titleL1: "Ein Morgen im Café",
  titleEn: "A morning at the café",
  intro:
    "Sentences are a touch longer now and you'll see your first short conversations. The key phrase is \"Ich hätte gern…\" — a polite \"I'd like…\". Still mostly present tense and very common words.",
  paragraphs: [
    {
      l1: "Es ist acht Uhr. Ich habe Hunger. Ich gehe in ein kleines Café an der Ecke. Es heißt «Café Anna».",
      en: "It is eight o'clock. I am hungry. I go into a small café on the corner. It is called \"Café Anna.\"",
    },
    {
      l1: "Im Café riecht es nach Kaffee und frischem Brot. Eine Frau steht hinter dem Tresen. Sie lächelt mich an. «Guten Morgen! Was darf es sein?»",
      en: "Inside the café it smells of coffee and fresh bread. A woman stands behind the counter. She smiles at me. \"Good morning! What can I get you?\"",
    },
    {
      l1: "«Guten Morgen. Ich hätte gern einen Kaffee und ein Brötchen, bitte.» «Mit Butter und Marmelade?» «Ja, gern.»",
      en: "\"Good morning. I'd like a coffee and a bread roll, please.\" \"With butter and jam?\" \"Yes, please.\"",
    },
    {
      l1: "«Milch und Zucker im Kaffee?» fragt sie. «Nur Milch, danke.» Sie macht den Kaffee. Die Maschine zischt laut.",
      en: "\"Milk and sugar in the coffee?\" she asks. \"Just milk, thank you.\" She makes the coffee. The machine hisses loudly.",
    },
    {
      l1: "Ich setze mich an einen Tisch am Fenster. Draußen fahren Fahrräder vorbei. Die Sonne scheint. Es ist ein schöner Morgen.",
      en: "I sit down at a table by the window. Outside, bicycles ride past. The sun is shining. It is a beautiful morning.",
    },
    {
      l1: "Der Kaffee ist heiß und stark. Das Brötchen ist knusprig. Ich esse langsam und beobachte die Leute auf der Straße.",
      en: "The coffee is hot and strong. The bread roll is crunchy. I eat slowly and watch the people on the street.",
    },
    {
      l1: "Die Frau bringt mir noch ein Glas Wasser. «Sind Sie neu hier?» fragt sie. «Ja, ich wohne seit gestern hier.» «Schön! Dann sehen wir uns bestimmt öfter.»",
      en: "The woman brings me a glass of water as well. \"Are you new here?\" she asks. \"Yes, I've lived here since yesterday.\" \"Lovely! Then we'll surely see each other more often.\"",
    },
    {
      l1: "Ich bezahle an der Kasse. Der Kaffee und das Brötchen kosten zusammen vier Euro fünfzig. «Auf Wiedersehen!» sage ich. «Bis bald!» antwortet sie.",
      en: "I pay at the till. The coffee and the bread roll cost four euros fifty together. \"Goodbye!\" I say. \"See you soon!\" she replies.",
    },
  ],
  vocabSpotlight: [
    { l1: "Ich hätte gern …", en: "I'd like … (polite)" },
    { l1: "das Brötchen", en: "the bread roll" },
    { l1: "der Kaffee", en: "the coffee" },
    { l1: "die Butter", en: "the butter" },
    { l1: "der Zucker", en: "the sugar" },
    { l1: "der Tresen", en: "the counter" },
    { l1: "bezahlen", en: "to pay" },
    { l1: "Bis bald!", en: "See you soon!" },
  ],
  comprehension: [
    {
      q: "What time is it at the start of the story?",
      options: ["seven o'clock", "eight o'clock", "nine o'clock", "ten o'clock"],
      correct: 1,
    },
    {
      q: "What does the narrator order?",
      options: [
        "tea and a croissant",
        "coffee and a bread roll",
        "espresso and cake",
        "juice and toast",
      ],
      correct: 1,
    },
    {
      q: "What does the narrator want in the coffee?",
      options: ["milk and sugar", "just sugar", "just milk", "nothing"],
      correct: 2,
    },
    {
      q: "Where does the narrator sit?",
      options: [
        "at the counter",
        "outside on the terrace",
        "at a table by the window",
        "at the back of the café",
      ],
      correct: 2,
    },
    {
      q: "How much does breakfast cost together?",
      options: ["€2.50", "€3.50", "€4.50", "€5.50"],
      correct: 2,
    },
  ],
};
