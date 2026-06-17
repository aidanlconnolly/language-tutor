import type { DailyRead } from "../../types";

export const READ_METRO_SP: DailyRead = {
  slug: "metro-sp",
  order: 3,
  stageUnlock: 3,
  difficulty: 5,
  titleL1: "O metrô de São Paulo",
  titleEn: "The São Paulo metro",
  intro:
    "Getting around São Paulo by metro: buying a Bilhete Único, asking for directions, and making a transfer (baldeação) — present tense with question forms.",
  paragraphs: [
    {
      l1: "Hoje eu quero ir ao centro de São Paulo. A cidade é muito grande. Eu decido pegar o metrô.",
      en: "Today I want to go to the centre of São Paulo. The city is very big. I decide to take the metro.",
    },
    {
      l1: "A estação fica perto do meu hotel. Eu caminho dez minutos e chego rápido.",
      en: "The station is near my hotel. I walk for ten minutes and arrive quickly.",
    },
    {
      l1: "Na bilheteria eu pergunto: «Bom dia! Eu posso comprar um Bilhete Único aqui?» A moça responde: «Pode, sim.»",
      en: "At the ticket booth I ask: \"Good morning! Can I buy a Bilhete Único here?\" The young woman replies: \"Yes, you can.\"",
    },
    {
      l1: "Eu compro o cartão e coloco crédito. Uma viagem custa cinco reais. Eu acho o preço justo.",
      en: "I buy the card and add credit. One trip costs five reais. I think the price is fair.",
    },
    {
      l1: "Eu pergunto à moça: «Como eu chego à estação Sé?» Ela explica com calma.",
      en: "I ask the young woman: \"How do I get to Sé station?\" She explains calmly.",
    },
    {
      l1: "«O senhor pega a Linha Azul e desce na estação Paraíso. Lá o senhor faz uma baldeação para a Linha Verde.»",
      en: "\"You take the Blue Line and get off at Paraíso station. There you make a transfer to the Green Line.\"",
    },
    {
      l1: "Eu passo o cartão na catraca e entro. O trem chega em três minutos. Está muito cheio!",
      en: "I tap the card at the turnstile and enter. The train arrives in three minutes. It is very crowded!",
    },
    {
      l1: "Na estação Paraíso eu desço do trem. Eu sigo as placas e faço a baldeação para a Linha Verde.",
      en: "At Paraíso station I get off the train. I follow the signs and make the transfer to the Green Line.",
    },
    {
      l1: "Eu uso a escada rolante e espero na plataforma. Um homem simpático me ajuda com o caminho.",
      en: "I use the escalator and wait on the platform. A friendly man helps me with the way.",
    },
    {
      l1: "Duas estações depois, eu finalmente chego à Sé. Eu desço e saio para a rua.",
      en: "Two stations later, I finally arrive at Sé. I get off and exit to the street.",
    },
    {
      l1: "Na frente eu vejo a Catedral da Sé, muito grande e bonita. Há muita gente na praça.",
      en: "In front of me I see the Sé Cathedral, very big and beautiful. There are many people in the square.",
    },
    {
      l1: "Eu tiro uma foto e sorrio. O metrô de São Paulo é rápido e fácil. Que aventura!",
      en: "I take a photo and smile. The São Paulo metro is fast and easy. What an adventure!",
    },
  ],
  vocabSpotlight: [
    { l1: "o metrô", en: "the metro" },
    { l1: "a bilheteria", en: "the ticket booth" },
    { l1: "o Bilhete Único", en: "the single travel card (São Paulo)" },
    { l1: "a catraca", en: "the turnstile" },
    { l1: "a baldeação", en: "the transfer (changing lines)" },
    { l1: "a escada rolante", en: "the escalator" },
    { l1: "a plataforma", en: "the platform" },
    { l1: "a estação", en: "the station" },
  ],
  comprehension: [
    {
      q: "How does the narrator decide to travel to the centre?",
      options: ["By bus", "By taxi", "By metro", "On foot"],
      correct: 2,
    },
    {
      q: "How long does the narrator walk to reach the station?",
      options: ["Five minutes", "Ten minutes", "Fifteen minutes", "Twenty minutes"],
      correct: 1,
    },
    {
      q: "How much does one trip cost?",
      options: ["Three reais", "Four reais", "Five reais", "Ten reais"],
      correct: 2,
    },
    {
      q: "At which station does the narrator make the transfer (baldeação)?",
      options: ["Sé", "Paraíso", "Luz", "República"],
      correct: 1,
    },
    {
      q: "What does the narrator see when arriving at Sé?",
      options: ["The market", "A park", "The Sé Cathedral", "The bus terminal"],
      correct: 2,
    },
    {
      q: "How does the narrator feel about the São Paulo metro?",
      options: ["Slow and confusing", "Fast and easy", "Expensive and dirty", "Empty and quiet"],
      correct: 1,
    },
  ],
};
