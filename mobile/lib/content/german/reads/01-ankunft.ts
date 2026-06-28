import type { DailyRead } from "../../types";

export const READ_ANKUNFT: DailyRead = {
  slug: "ankunft",
  order: 1,
  stageUnlock: 1,
  difficulty: 4,
  titleL1: "Ankunft in Berlin",
  titleEn: "Arrival in Berlin",
  intro:
    "Your very first read. Everything is present tense (Präsens) and the sentences are very short. The vocab is the most common travel words: airport, passport, train. Read it twice and you'll get most of it.",
  paragraphs: [
    {
      l1: "Das Flugzeug landet. Es ist halb drei. Ich bin in Berlin. Endlich!",
      en: "The plane lands. It is half past two. I am in Berlin. Finally!",
    },
    {
      l1: "Der Flughafen heißt BER. Er ist neu und groß. Viele Menschen sind hier. Ich bin müde, aber ich bin glücklich.",
      en: "The airport is called BER. It is new and big. Many people are here. I am tired, but I am happy.",
    },
    {
      l1: "Ich gehe zur Passkontrolle. Eine Frau in Uniform sieht mich an. «Ihren Pass, bitte.» Ich gebe ihr meinen Pass.",
      en: "I go to passport control. A woman in uniform looks at me. \"Your passport, please.\" I give her my passport.",
    },
    {
      l1: "«Woher kommen Sie?» fragt sie. «Aus Amerika», sage ich. «Wie lange bleiben Sie?» «Drei Monate.» Sie gibt mir den Pass zurück. «Willkommen in Deutschland.»",
      en: "\"Where are you from?\" she asks. \"From America,\" I say. \"How long are you staying?\" \"Three months.\" She gives me the passport back. \"Welcome to Germany.\"",
    },
    {
      l1: "Ich nehme meinen Koffer. Er ist schwer. Wo ist der Zug? Ich sehe ein Schild: «S-Bahn». Ich gehe nach unten.",
      en: "I take my suitcase. It is heavy. Where is the train? I see a sign: \"S-Bahn.\" I go downstairs.",
    },
    {
      l1: "Ich kaufe ein Ticket. Es kostet vier Euro. Der Zug kommt. Die Türen öffnen sich. Ich steige ein.",
      en: "I buy a ticket. It costs four euros. The train comes. The doors open. I get on.",
    },
    {
      l1: "Der Zug fährt schnell. Ich sehe Häuser, Bäume und Graffiti. Eine Stimme sagt die Stationen. Berlin ist groß und grau, aber interessant.",
      en: "The train moves fast. I see houses, trees and graffiti. A voice announces the stations. Berlin is big and grey, but interesting.",
    },
    {
      l1: "Nach dreißig Minuten bin ich in der Stadt. Ich steige aus. Die Luft ist kalt. Ich atme tief ein. Mein neues Leben beginnt jetzt.",
      en: "After thirty minutes I am in the city. I get off. The air is cold. I breathe in deeply. My new life begins now.",
    },
  ],
  vocabSpotlight: [
    { l1: "der Flughafen", en: "the airport" },
    { l1: "das Flugzeug", en: "the plane" },
    { l1: "der Pass", en: "the passport" },
    { l1: "der Koffer", en: "the suitcase" },
    { l1: "der Zug", en: "the train" },
    { l1: "das Ticket", en: "the ticket" },
    { l1: "Willkommen!", en: "Welcome!" },
    { l1: "müde", en: "tired" },
  ],
  comprehension: [
    {
      q: "What time does the plane land?",
      options: ["half past one", "half past two", "half past three", "half past four"],
      correct: 1,
    },
    {
      q: "What is the name of the airport?",
      options: ["TXL", "SXF", "BER", "FRA"],
      correct: 2,
    },
    {
      q: "How long is the narrator staying?",
      options: ["one month", "two months", "three months", "a year"],
      correct: 2,
    },
    {
      q: "How does the narrator travel into the city?",
      options: ["by taxi", "by bus", "by S-Bahn", "on foot"],
      correct: 2,
    },
    {
      q: "How does Berlin look to the narrator on arrival?",
      options: [
        "small and warm",
        "big and grey, but interesting",
        "clean and quiet",
        "old and beautiful",
      ],
      correct: 1,
    },
  ],
};
