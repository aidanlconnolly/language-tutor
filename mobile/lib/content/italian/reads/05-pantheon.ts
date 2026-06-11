import type { DailyRead } from "../../types";

export const READ_PANTHEON: DailyRead = {
  slug: "pantheon-afternoon",
  order: 5,
  stageUnlock: 1,
  difficulty: 6,
  titleL1: "Un pomeriggio al Pantheon",
  titleEn: "An afternoon at the Pantheon",
  intro:
    "Day five. Sentences are getting a bit longer. You'll see some new patterns: 'mi piacciono' (I like — plural), 'che' as a relative pronoun, and 'più…di…' (more…than…).",
  paragraphs: [
    {
      l1: "È un pomeriggio caldo di giugno. Decido di visitare il Pantheon, uno dei monumenti più antichi di Roma. Ho una bottiglia d'acqua nella borsa e un cappello sulla testa, perché il sole è forte.",
      en: "It's a warm June afternoon. I decide to visit the Pantheon, one of the oldest monuments in Rome. I have a water bottle in my bag and a hat on my head, because the sun is strong.",
    },
    {
      l1: "Cammino per le strade del centro storico. Le strade sono strette, piene di turisti, ma molto belle. Vedo piccoli negozi che vendono libri vecchi, gelaterie con dieci gusti diversi, e bar con tavolini all'aperto.",
      en: "I walk through the streets of the historic center. The streets are narrow, full of tourists, but very beautiful. I see small shops that sell old books, gelaterias with ten different flavors, and bars with outdoor tables.",
    },
    {
      l1: "Arrivo in Piazza della Rotonda. Il Pantheon è enorme. Le colonne sono altissime e grigie. C'è una fila di persone davanti all'ingresso. Aspetto venti minuti, ma vale la pena.",
      en: "I arrive in Piazza della Rotonda. The Pantheon is huge. The columns are very tall and gray. There's a line of people in front of the entrance. I wait twenty minutes, but it's worth it.",
    },
    {
      l1: "Quando entro, alzo gli occhi. Il soffitto è incredibile: c'è un grande buco rotondo nel mezzo, che si chiama l'«oculus». La luce del sole entra dall'oculus e disegna un cerchio dorato sul pavimento.",
      en: "When I enter, I look up. The ceiling is incredible: there's a big round hole in the middle, called the \"oculus.\" Sunlight enters through the oculus and draws a golden circle on the floor.",
    },
    {
      l1: "Una guida turistica spiega ai visitatori la storia: «Il Pantheon è del secondo secolo. Ha quasi duemila anni. Quando piove, l'acqua entra dall'oculus, ma il pavimento ha piccoli buchi per far uscire l'acqua.» Mi piacciono molto questi dettagli pratici.",
      en: "A tour guide explains the history to visitors: \"The Pantheon is from the second century. It's almost two thousand years old. When it rains, water comes in through the oculus, but the floor has little holes to let the water out.\" I really like these practical details.",
    },
    {
      l1: "Resto dentro venti minuti. Faccio alcune foto, ma i telefoni non possono catturare la sensazione di essere lì. È più impressionante di tutti i monumenti che ho visto prima.",
      en: "I stay inside twenty minutes. I take some photos, but phones can't capture the feeling of being there. It's more impressive than all the monuments I've seen before.",
    },
    {
      l1: "Esco dal Pantheon e cerco un gelato. Trovo una gelateria piccola accanto alla piazza. Prendo un cono con due gusti: pistacchio e stracciatella. Mi siedo su una panchina e guardo le persone che entrano ed escono dal Pantheon. Penso che Roma è una città magica.",
      en: "I leave the Pantheon and look for a gelato. I find a small gelateria next to the square. I get a cone with two flavors: pistachio and stracciatella. I sit on a bench and watch the people who go in and out of the Pantheon. I think Rome is a magical city.",
    },
  ],
  vocabSpotlight: [
    { l1: "il monumento", en: "the monument" },
    { l1: "il centro storico", en: "the historic center" },
    { l1: "la colonna", en: "the column" },
    { l1: "la fila", en: "the line / queue" },
    { l1: "il soffitto", en: "the ceiling" },
    { l1: "il pavimento", en: "the floor" },
    { l1: "valere la pena", en: "to be worth it" },
    { l1: "la gelateria", en: "the gelato shop" },
    { l1: "il gusto", en: "the flavor" },
  ],
  comprehension: [
    {
      q: "What is the 'oculus'?",
      options: [
        "a statue inside the Pantheon",
        "a round hole in the ceiling",
        "an ancient eye-shaped door",
        "a famous painting",
      ],
      correct: 1,
    },
    {
      q: "How old is the Pantheon, roughly?",
      options: ["~500 years", "~1,000 years", "~2,000 years", "~3,000 years"],
      correct: 2,
    },
    {
      q: "What happens when it rains inside the Pantheon?",
      options: [
        "they cover the oculus",
        "small holes in the floor let the water out",
        "the building is closed",
        "the water is collected for fountains",
      ],
      correct: 1,
    },
    {
      q: "Which two gelato flavors does the narrator pick?",
      options: [
        "chocolate and vanilla",
        "lemon and mint",
        "pistachio and stracciatella",
        "coffee and hazelnut",
      ],
      correct: 2,
    },
    {
      q: "How long does the narrator wait in line?",
      options: ["5 minutes", "10 minutes", "20 minutes", "an hour"],
      correct: 2,
    },
  ],
};
