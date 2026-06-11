import type { DailyRead } from "../../types";

export const READ_METRO_SOL: DailyRead = {
  slug: "metro-sol",
  order: 3,
  stageUnlock: 2,
  difficulty: 5,
  titleL1: "El metro a Sol",
  titleEn: "The Metro to Sol",
  intro:
    "Navigating Madrid's metro, buying a ticket, and asking for directions — present tense with some question forms.",
  paragraphs: [
    {
      l1: "Necesito ir al centro. Decido tomar el metro. La estación está a cinco minutos de mi hotel.",
      en: "I need to go to the centre. I decide to take the metro. The station is five minutes from my hotel.",
    },
    {
      l1: "En la taquilla pregunto: «¿Me puede ayudar? Quiero ir a Sol.» El empleado sonríe y me explica.",
      en: "At the ticket office I ask: \"Can you help me? I want to go to Sol.\" The employee smiles and explains.",
    },
    {
      l1: "«Coge la línea dos hasta Retiro, luego cambia a la línea uno dirección Pinar de Chamartín. Sol está en la línea uno.»",
      en: "\"Take line two to Retiro, then change to line one towards Pinar de Chamartín. Sol is on line one.\"",
    },
    {
      l1: "Compro un billete sencillo. Vale dos euros. Meto el billete en el torniquete y entro.",
      en: "I buy a single ticket. It costs two euros. I put the ticket in the turnstile and enter.",
    },
    {
      l1: "El metro llega en tres minutos. Está muy limpio y hay asientos libres. Me siento junto a la ventana.",
      en: "The metro arrives in three minutes. It is very clean and there are free seats. I sit next to the window.",
    },
    {
      l1: "En Retiro hago el trasbordo. Bajo un tramo de escaleras mecánicas y sigo las señales a línea uno.",
      en: "At Retiro I make the change. I go down a flight of escalators and follow the signs to line one.",
    },
    {
      l1: "Dos paradas más tarde llego a Sol. Hay muchísima gente. Es el centro de Madrid.",
      en: "Two stops later I arrive at Sol. There are very many people. It is the centre of Madrid.",
    },
    {
      l1: "Salgo a la Puerta del Sol. Veo el oso y el madroño, el símbolo de Madrid. Saco una foto.",
      en: "I exit to the Puerta del Sol. I see the bear and the strawberry tree, the symbol of Madrid. I take a photo.",
    },
  ],
  vocabSpotlight: [
    { l1: "la taquilla", en: "the ticket office" },
    { l1: "el empleado", en: "the employee" },
    { l1: "el billete sencillo", en: "the single ticket" },
    { l1: "el torniquete", en: "the turnstile" },
    { l1: "el trasbordo", en: "the change (on public transport)" },
    { l1: "las escaleras mecánicas", en: "the escalators" },
    { l1: "el oso y el madroño", en: "the bear and strawberry tree (Madrid's symbol)" },
    { l1: "la parada", en: "the stop" },
  ],
  comprehension: [
    {
      q: "How far is the metro station from the hotel?",
      options: ["2 minutes", "5 minutes", "10 minutes", "15 minutes"],
      correct: 1,
    },
    {
      q: "Which line does the narrator take first?",
      options: ["Line 1", "Line 2", "Line 3", "Line 4"],
      correct: 1,
    },
    {
      q: "How much is the single ticket?",
      options: ["€1", "€1.50", "€2", "€2.50"],
      correct: 2,
    },
    {
      q: "Where does the narrator change trains?",
      options: ["Atocha", "Gran Vía", "Sol", "Retiro"],
      correct: 3,
    },
    {
      q: "What is the symbol of Madrid that the narrator photographs?",
      options: ["The Royal Palace", "The bear and the strawberry tree", "The Prado Museum", "The fountains"],
      correct: 1,
    },
  ],
};
