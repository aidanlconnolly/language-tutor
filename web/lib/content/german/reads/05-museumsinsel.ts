import type { DailyRead } from "../../types";

export const READ_MUSEUMSINSEL: DailyRead = {
  slug: "museumsinsel",
  order: 5,
  stageUnlock: 2,
  difficulty: 6,
  titleL1: "Die Museumsinsel",
  titleEn: "A day on Museum Island",
  intro:
    "Here comes your first taste of the perfect tense (Perfekt): \"ich habe gesehen\" (I have seen / I saw), \"ich bin gegangen\" (I went). It's how Germans talk about the past in conversation. Sentences are longer too.",
  paragraphs: [
    {
      l1: "Am Samstag bin ich zur Museumsinsel gegangen. Sie liegt mitten in der Stadt, auf einer Insel in der Spree. Dort gibt es fünf große Museen.",
      en: "On Saturday I went to Museum Island. It lies in the middle of the city, on an island in the Spree. There are five large museums there.",
    },
    {
      l1: "Ich habe eine Karte für Studenten gekauft. Mit meinem Pass war der Eintritt günstig. Eine Frau hat mir einen Plan gegeben und den Weg erklärt.",
      en: "I bought a student ticket. With my pass the entrance was cheap. A woman gave me a map and explained the way.",
    },
    {
      l1: "Zuerst bin ich ins Pergamonmuseum gegangen. Es ist berühmt für seine alten Bauwerke. Ich habe riesige Tore und Mauern aus dem Orient gesehen. Alles war beeindruckend.",
      en: "First I went into the Pergamon Museum. It is famous for its ancient buildings. I saw huge gates and walls from the Orient. Everything was impressive.",
    },
    {
      l1: "Es waren sehr viele Menschen da. Manche haben Fotos gemacht, andere haben einen Audioguide benutzt. Ich habe lange vor einem blauen Tor gestanden und es bewundert.",
      en: "There were a lot of people there. Some took photos, others used an audio guide. I stood for a long time in front of a blue gate and admired it.",
    },
    {
      l1: "Dann habe ich mich verlaufen. Das Museum ist wie ein Labyrinth. Ich habe einen Wärter gefragt: «Entschuldigung, wo ist der Ausgang?» Er hat gelacht und nach links gezeigt.",
      en: "Then I got lost. The museum is like a labyrinth. I asked a guard: \"Excuse me, where is the exit?\" He laughed and pointed to the left.",
    },
    {
      l1: "Nach zwei Stunden war ich müde. Ich habe mich auf eine Bank gesetzt und eine Pause gemacht. Mein Kopf war voll mit Bildern und Geschichte.",
      en: "After two hours I was tired. I sat down on a bench and took a break. My head was full of images and history.",
    },
    {
      l1: "Draußen habe ich ein Eis gekauft und bin am Wasser entlanggegangen. Die Sonne hat auf den Dom geschienen. Touristen haben Selfies gemacht und Boote sind vorbeigefahren.",
      en: "Outside I bought an ice cream and walked along the water. The sun shone on the cathedral. Tourists took selfies and boats went past.",
    },
    {
      l1: "Am Abend bin ich nach Hause gefahren. Ich habe nicht alles gesehen, aber das macht nichts. Die anderen Museen kommen ein anderes Mal. Berlin hat so viel zu bieten.",
      en: "In the evening I traveled home. I didn't see everything, but that doesn't matter. The other museums will come another time. Berlin has so much to offer.",
    },
  ],
  vocabSpotlight: [
    { l1: "das Museum", en: "the museum" },
    { l1: "der Eintritt", en: "the entrance / admission" },
    { l1: "ich bin gegangen", en: "I went (Perfekt of gehen)" },
    { l1: "ich habe gesehen", en: "I saw (Perfekt of sehen)" },
    { l1: "sich verlaufen", en: "to get lost (on foot)" },
    { l1: "der Ausgang", en: "the exit" },
    { l1: "beeindruckend", en: "impressive" },
    { l1: "eine Pause machen", en: "to take a break" },
  ],
  comprehension: [
    {
      q: "On which day does the narrator visit Museum Island?",
      options: ["Friday", "Saturday", "Sunday", "Monday"],
      correct: 1,
    },
    {
      q: "Which museum does the narrator go into first?",
      options: [
        "the Neues Museum",
        "the Pergamon Museum",
        "the Bode Museum",
        "the Alte Nationalgalerie",
      ],
      correct: 1,
    },
    {
      q: "What happens to the narrator inside the museum?",
      options: [
        "he loses his ticket",
        "he gets lost",
        "he meets a friend",
        "he falls asleep",
      ],
      correct: 1,
    },
    {
      q: "What does the narrator do after two hours?",
      options: [
        "buys another ticket",
        "sits on a bench and takes a break",
        "leaves immediately",
        "joins a guided tour",
      ],
      correct: 1,
    },
    {
      q: "Does the narrator see everything?",
      options: [
        "yes, all five museums",
        "no, but he'll come back another time",
        "yes, but he didn't like it",
        "no, the museum was closed",
      ],
      correct: 1,
    },
  ],
};
