import type { DailyRead } from "../../types";

export const READ_BARAJAS_ARRIVAL: DailyRead = {
  slug: "barajas-arrival",
  order: 1,
  stageUnlock: 1,
  difficulty: 4,
  titleL1: "Llegada a Madrid",
  titleEn: "Arriving in Madrid",
  intro:
    "Your first moments in Spain. Simple present tense sentences — just enough Spanish to follow along as the narrator arrives at Barajas airport. Tap any word to save it.",
  paragraphs: [
    {
      l1: "Hoy llego a España. Estoy muy emocionado.",
      en: "Today I arrive in Spain. I am very excited.",
    },
    {
      l1: "El avión aterriza en Madrid a las nueve de la mañana. El cielo está azul y despejado.",
      en: "The plane lands in Madrid at nine in the morning. The sky is blue and clear.",
    },
    {
      l1: "Salgo del avión. Tengo una mochila negra y una maleta pequeña. Camino hacia la salida.",
      en: "I exit the plane. I have a black backpack and a small suitcase. I walk toward the exit.",
    },
    {
      l1: "Un policía mira mi pasaporte. Me dice: «Bienvenido a España.» Yo respondo: «Muchas gracias.»",
      en: "A police officer looks at my passport. He says: \"Welcome to Spain.\" I reply: \"Thank you very much.\"",
    },
    {
      l1: "Busco el metro. Hay un cartel grande que dice: «Metro — Terminal 2.» Sigo las señales.",
      en: "I look for the metro. There is a big sign that says: \"Metro — Terminal 2.\" I follow the signs.",
    },
    {
      l1: "Compro un billete en la máquina. El billete cuesta cinco euros. Pago con la tarjeta.",
      en: "I buy a ticket at the machine. The ticket costs five euros. I pay by card.",
    },
    {
      l1: "Subo al metro. Encuentro un asiento. Miro por la ventana. Veo edificios, coches, el sol.",
      en: "I get on the metro. I find a seat. I look out the window. I see buildings, cars, the sun.",
    },
    {
      l1: "El metro llega a Sol. La estación es grande y hay mucha gente. ¡Madrid está aquí!",
      en: "The metro arrives at Sol. The station is big and there are lots of people. Madrid is here!",
    },
  ],
  vocabSpotlight: [
    { l1: "el avión", en: "the plane" },
    { l1: "la mochila", en: "the backpack" },
    { l1: "la maleta", en: "the suitcase" },
    { l1: "el pasaporte", en: "the passport" },
    { l1: "el billete", en: "the ticket" },
    { l1: "la máquina", en: "the machine" },
    { l1: "la ventana", en: "the window" },
    { l1: "la estación", en: "the station" },
  ],
  comprehension: [
    {
      q: "What time does the plane land?",
      options: ["7am", "8am", "9am", "10am"],
      correct: 2,
    },
    {
      q: "What colour is the narrator's backpack?",
      options: ["blue", "red", "black", "green"],
      correct: 2,
    },
    {
      q: "How does the narrator pay for the ticket?",
      options: ["cash", "card", "phone", "prepaid pass"],
      correct: 1,
    },
    {
      q: "How much does the metro ticket cost?",
      options: ["€3", "€4", "€5", "€6"],
      correct: 2,
    },
    {
      q: "Which metro station does the narrator arrive at?",
      options: ["Atocha", "Gran Vía", "Sol", "Barajas"],
      correct: 2,
    },
  ],
};
