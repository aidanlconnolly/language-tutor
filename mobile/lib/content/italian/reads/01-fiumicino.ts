import type { DailyRead } from "../../types";

export const READ_FIUMICINO: DailyRead = {
  slug: "fiumicino-arrival",
  order: 1,
  stageUnlock: 1,
  difficulty: 4,
  titleL1: "Arrivo a Roma",
  titleEn: "Arriving in Rome",
  intro:
    "Your very first day. Short, simple sentences in the present tense — just enough Italian to follow along while you get oriented. Tap any word you don't know to save it.",
  paragraphs: [
    {
      l1: "Oggi sono in Italia. Sono molto felice.",
      en: "Today I'm in Italy. I'm very happy.",
    },
    {
      l1: "L'aereo arriva a Roma alle sette. Il cielo è arancione. È mattina presto.",
      en: "The plane arrives in Rome at seven. The sky is orange. It's early morning.",
    },
    {
      l1: "Esco dall'aereo. Ho uno zaino blu. Ho anche una valigia piccola. Cammino verso l'uscita.",
      en: "I exit the plane. I have a blue backpack. I also have a small suitcase. I walk toward the exit.",
    },
    {
      l1: "Un signore in uniforme guarda il mio passaporto. Mi dice: «Benvenuto in Italia.» Io rispondo: «Grazie!»",
      en: "A man in uniform looks at my passport. He says to me: \"Welcome to Italy.\" I answer: \"Thank you!\"",
    },
    {
      l1: "Cerco un treno per il centro. C'è un cartello. Il cartello dice: «Treno per Roma — binario uno.»",
      en: "I look for a train to the center. There's a sign. The sign says: \"Train to Rome — platform one.\"",
    },
    {
      l1: "Compro un biglietto. Il biglietto costa quattordici euro. Pago con la carta.",
      en: "I buy a ticket. The ticket costs fourteen euros. I pay by card.",
    },
    {
      l1: "Salgo sul treno. Trovo un posto vicino al finestrino. Guardo fuori. Vedo case, alberi, il sole.",
      en: "I get on the train. I find a seat by the window. I look outside. I see houses, trees, the sun.",
    },
    {
      l1: "Il treno arriva alla stazione. Il nome è Termini. La stazione è grande. Ci sono molte persone. Roma è qui!",
      en: "The train arrives at the station. The name is Termini. The station is big. There are lots of people. Rome is here!",
    },
  ],
  vocabSpotlight: [
    { l1: "l'aereo", en: "the plane" },
    { l1: "lo zaino", en: "the backpack" },
    { l1: "la valigia", en: "the suitcase" },
    { l1: "il passaporto", en: "the passport" },
    { l1: "il biglietto", en: "the ticket" },
    { l1: "il binario", en: "the platform" },
    { l1: "il finestrino", en: "the (vehicle) window" },
    { l1: "la stazione", en: "the station" },
  ],
  comprehension: [
    {
      q: "What time does the plane arrive in Rome?",
      options: ["6", "7", "8", "9"],
      correct: 1,
    },
    {
      q: "What color is the narrator's backpack?",
      options: ["red", "blue", "black", "green"],
      correct: 1,
    },
    {
      q: "How does the narrator pay for the ticket?",
      options: ["cash", "card", "phone", "bank transfer"],
      correct: 1,
    },
    {
      q: "How much does the ticket cost?",
      options: ["€10", "€12", "€14", "€16"],
      correct: 2,
    },
    {
      q: "What is the name of the station in Rome?",
      options: ["Tiburtina", "Termini", "Trastevere", "Fiumicino"],
      correct: 1,
    },
  ],
};
