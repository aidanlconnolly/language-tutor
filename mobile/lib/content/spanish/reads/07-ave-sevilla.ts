import type { DailyRead } from "../../types";

export const READ_AVE_SEVILLA: DailyRead = {
  slug: "ave-sevilla",
  order: 7,
  stageUnlock: 5,
  difficulty: 7,
  titleL1: "El AVE a Sevilla",
  titleEn: "The High-Speed Train to Seville",
  intro:
    "Taking Spain's famous high-speed train from Madrid to Seville — the journey, the landscape, and first impressions of Andalusia. Past tense narrative.",
  paragraphs: [
    {
      l1: "El día anterior había reservado un billete de AVE para ir a Sevilla. El tren salía de la estación de Atocha a las diez.",
      en: "The day before I had booked a high-speed train ticket to go to Seville. The train left from Atocha station at ten.",
    },
    {
      l1: "Llegué a Atocha con treinta minutos de antelación. La estación tiene un jardín tropical en su interior — fue una sorpresa.",
      en: "I arrived at Atocha thirty minutes early. The station has a tropical garden inside — it was a surprise.",
    },
    {
      l1: "El AVE era moderno, limpio y muy cómodo. Los asientos eran amplios y había mucho espacio para el equipaje.",
      en: "The AVE was modern, clean and very comfortable. The seats were spacious and there was lots of room for luggage.",
    },
    {
      l1: "Durante el viaje, miraba el paisaje por la ventana. Al principio era la meseta castellana — llana y amarilla. Luego, más verde y montañoso.",
      en: "During the journey, I looked at the landscape through the window. At first it was the Castilian plateau — flat and yellow. Then, greener and more mountainous.",
    },
    {
      l1: "El viaje duró dos horas y media. En Madrid hacía frío, pero al llegar a Sevilla el sol brillaba con fuerza.",
      en: "The journey lasted two and a half hours. In Madrid it was cold, but on arriving in Seville the sun was shining strongly.",
    },
    {
      l1: "Salí de la estación de Santa Justa y tomé un taxi hasta mi hotel. El taxista era muy simpático y me recomendó varios restaurantes.",
      en: "I exited Santa Justa station and took a taxi to my hotel. The taxi driver was very friendly and recommended several restaurants.",
    },
    {
      l1: "Por la tarde paseé por el barrio de Santa Cruz — el antiguo barrio judío. Las calles eran estrechas y llenas de naranjos.",
      en: "In the afternoon I walked through the Santa Cruz neighbourhood — the old Jewish quarter. The streets were narrow and full of orange trees.",
    },
    {
      l1: "Sevilla era todo lo que esperaba: colorida, cálida y llena de vida. Ya entendía por qué muchos la consideran la ciudad más bonita de España.",
      en: "Seville was everything I expected: colourful, warm and full of life. I already understood why many consider it the most beautiful city in Spain.",
    },
  ],
  vocabSpotlight: [
    { l1: "el AVE", en: "the high-speed train (Alta Velocidad Española)" },
    { l1: "con antelación", en: "in advance / early" },
    { l1: "el paisaje", en: "the landscape" },
    { l1: "la meseta", en: "the plateau (central Spanish landscape)" },
    { l1: "llano/a", en: "flat" },
    { l1: "el naranjo", en: "the orange tree" },
    { l1: "estrecho/a", en: "narrow" },
    { l1: "cálido/a", en: "warm" },
  ],
  comprehension: [
    {
      q: "From which station does the AVE to Seville depart?",
      options: ["Chamartín", "Nuevos Ministerios", "Atocha", "Sol"],
      correct: 2,
    },
    {
      q: "What is unusual about Atocha station?",
      options: ["It has a shopping mall inside", "It has a tropical garden inside", "It's the oldest station in Spain", "It's underground"],
      correct: 1,
    },
    {
      q: "How long did the AVE journey take?",
      options: ["1.5 hours", "2 hours", "2.5 hours", "3 hours"],
      correct: 2,
    },
    {
      q: "What is the Santa Cruz neighbourhood known as?",
      options: ["The Arab Quarter", "The Old Jewish Quarter", "The Artists' Quarter", "The Market Quarter"],
      correct: 1,
    },
    {
      q: "What trees fill the streets of Santa Cruz?",
      options: ["Lemon trees", "Olive trees", "Palm trees", "Orange trees"],
      correct: 3,
    },
  ],
};
