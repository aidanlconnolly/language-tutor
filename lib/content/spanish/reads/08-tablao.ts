import type { DailyRead } from "../../types";

export const READ_TABLAO: DailyRead = {
  slug: "tablao",
  order: 8,
  stageUnlock: 6,
  difficulty: 8,
  titleL1: "Una noche de flamenco",
  titleEn: "A Flamenco Night",
  intro:
    "An evening at a flamenco tablao in Seville — atmosphere, performance, and emotion. Richer vocabulary and a mix of past tenses.",
  paragraphs: [
    {
      l1: "Había reservado una entrada para un espectáculo de flamenco en un tablao del barrio de Triana. La actuación empezaba a las nueve.",
      en: "I had booked a ticket for a flamenco show at a tablao in the Triana neighbourhood. The performance started at nine.",
    },
    {
      l1: "Llegué con tiempo. El tablao era pequeño y íntimo — unas cincuenta sillas dispuestas en semicírculo frente al escenario.",
      en: "I arrived with time to spare. The tablao was small and intimate — about fifty chairs arranged in a semicircle in front of the stage.",
    },
    {
      l1: "Pedí un jerez, el vino tradicional de Andalucía. El ambiente era tenso de anticipación. La gente hablaba en susurros.",
      en: "I ordered a sherry, the traditional wine of Andalusia. The atmosphere was tense with anticipation. People were talking in whispers.",
    },
    {
      l1: "De repente, la bailaora entró en el escenario. Su vestido era rojo y negro. Empezó a golpear el suelo con los pies — el zapateado resonó por toda la sala.",
      en: "Suddenly, the dancer entered the stage. Her dress was red and black. She began to stamp the floor with her feet — the footwork resonated throughout the room.",
    },
    {
      l1: "El guitarrista tocaba con una intensidad increíble. El cantaor empezó a cantar — un cante jondo profundo y lleno de dolor.",
      en: "The guitarist was playing with incredible intensity. The singer began to sing — a deep cante jondo full of pain.",
    },
    {
      l1: "En ese momento entendí lo que es el duende. Era algo que iba más allá de la técnica — una emoción pura y primitiva.",
      en: "In that moment I understood what duende is. It was something that went beyond technique — a pure and primitive emotion.",
    },
    {
      l1: "El público gritaba «¡Olé!» en los momentos más intensos. Al final, todo el mundo aplaudió de pie durante minutos.",
      en: "The audience shouted \"¡Olé!\" during the most intense moments. At the end, everyone applauded standing for minutes.",
    },
    {
      l1: "Salí a la calle todavía emocionado. Había algo en el flamenco que no podía explicar con palabras. Era la España más auténtica.",
      en: "I exited to the street still emotional. There was something in flamenco that I could not explain in words. It was the most authentic Spain.",
    },
  ],
  vocabSpotlight: [
    { l1: "el tablao", en: "the flamenco performance venue" },
    { l1: "el escenario", en: "the stage" },
    { l1: "el jerez", en: "sherry (fortified wine from Jerez)" },
    { l1: "el zapateado", en: "the footwork (in flamenco)" },
    { l1: "resonar", en: "to resonate / to echo" },
    { l1: "el cante jondo", en: "deep song — the most emotional flamenco singing" },
    { l1: "el duende", en: "the ineffable spirit of flamenco" },
    { l1: "aplaudir de pie", en: "to give a standing ovation" },
  ],
  comprehension: [
    {
      q: "In which neighbourhood is the tablao?",
      options: ["Santa Cruz", "Triana", "El Arenal", "Macarena"],
      correct: 1,
    },
    {
      q: "What does the narrator drink?",
      options: ["Red wine", "Vermouth", "Sherry", "Beer"],
      correct: 2,
    },
    {
      q: "What colours is the dancer's dress?",
      options: ["Red and white", "Black and white", "Red and black", "Orange and red"],
      correct: 2,
    },
    {
      q: "What does the narrator understand during the performance?",
      options: ["The words of the song", "What duende is", "The history of flamenco", "How to dance flamenco"],
      correct: 1,
    },
    {
      q: "How does the audience react at the end?",
      options: ["They leave quietly", "They clap politely", "They give a standing ovation for minutes", "They shout for an encore"],
      correct: 2,
    },
  ],
};
