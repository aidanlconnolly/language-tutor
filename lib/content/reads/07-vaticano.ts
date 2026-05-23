import type { DailyRead } from "../types";

export const READ_VATICANO: DailyRead = {
  slug: "vaticano-mattina",
  order: 7,
  stageUnlock: 1,
  difficulty: 7,
  titleIt: "Una mattina ai Musei Vaticani",
  titleEn: "A morning at the Vatican Museums",
  intro:
    "Day seven. Now you'll see passato prossimo (the everyday past tense) used more freely — 'ho prenotato' (I booked), 'ha detto' (he said). Sentences are getting longer with more subordination.",
  paragraphs: [
    {
      it: "La sveglia suona alle sei. È una mattina importante: oggi visito i Musei Vaticani e la Cappella Sistina. Ho prenotato il biglietto online due settimane fa, per evitare la fila lunghissima all'ingresso.",
      en: "The alarm rings at six. It's an important morning: today I'm visiting the Vatican Museums and the Sistine Chapel. I booked the ticket online two weeks ago, to avoid the very long line at the entrance.",
    },
    {
      it: "Bevo un caffè veloce all'hotel e prendo la metro. La fermata «Ottaviano» è quella giusta per il Vaticano. Quando esco dalla stazione, vedo le mura alte e bianche dei giardini vaticani sulla sinistra. Cammino per dieci minuti.",
      en: "I have a quick coffee at the hotel and take the metro. The \"Ottaviano\" stop is the right one for the Vatican. When I exit the station, I see the high, white walls of the Vatican gardens on the left. I walk for ten minutes.",
    },
    {
      it: "All'ingresso mostro il biglietto sul telefono. Una guardia in uniforme grigia controlla, sorride, e mi fa passare. Dentro c'è già molta gente, ma niente come la fila esterna che ho visto passando: lì le persone aspettano almeno due ore sotto il sole.",
      en: "At the entrance I show the ticket on my phone. A guard in a gray uniform checks, smiles, and lets me through. Inside there's already a lot of people, but nothing like the line outside that I saw on the way: there people wait at least two hours under the sun.",
    },
    {
      it: "I musei sono un labirinto. Ci sono statue antiche, mosaici, mappe enormi di carta sulle pareti, e corridoi che sembrano infiniti. Una guida americana spiega a un gruppo di turisti che i Musei Vaticani contengono più di settantamila opere d'arte. È difficile credere a un numero così grande.",
      en: "The museums are a labyrinth. There are ancient statues, mosaics, huge paper maps on the walls, and corridors that seem infinite. An American guide explains to a group of tourists that the Vatican Museums contain more than seventy thousand works of art. It's hard to believe such a big number.",
    },
    {
      it: "Cammino piano. Mi piace fermarmi davanti alle sculture e leggere le piccole targhe in italiano. A volte capisco tutto, a volte capisco solo metà. Una signora accanto a me ha detto a suo marito: «Guarda quella statua, è perfetta — sembra viva.» E aveva ragione.",
      en: "I walk slowly. I like stopping in front of the sculptures and reading the little plaques in Italian. Sometimes I understand everything, sometimes I understand only half. A lady next to me said to her husband: \"Look at that statue, it's perfect — it seems alive.\" And she was right.",
    },
    {
      it: "Dopo due ore arrivo alla Cappella Sistina. È più piccola di quello che pensavo, ma il soffitto di Michelangelo è semplicemente incredibile. Tutti sono in silenzio. Una guardia dice ogni tanto: «Silenzio, per favore. Non si fanno foto.» Mi siedo su una panchina di legno e guardo verso l'alto per dieci minuti.",
      en: "After two hours I arrive at the Sistine Chapel. It's smaller than I thought, but Michelangelo's ceiling is simply incredible. Everyone is silent. A guard says every so often: \"Silence, please. No photos.\" I sit on a wooden bench and look up for ten minutes.",
    },
    {
      it: "Quando esco dal museo, sono stanco ma pieno di immagini. Compro una bottiglia d'acqua fredda da un venditore vicino alla piazza. Penso che alcuni luoghi rimangono dentro di te per sempre — e la Cappella Sistina è uno di quelli.",
      en: "When I leave the museum, I'm tired but full of images. I buy a bottle of cold water from a vendor near the square. I think some places stay inside you forever — and the Sistine Chapel is one of those.",
    },
  ],
  vocabSpotlight: [
    { it: "prenotare", en: "to book / reserve" },
    { it: "evitare", en: "to avoid" },
    { it: "la fila", en: "the line / queue" },
    { it: "la mura / le mura", en: "the wall / walls (of a city)" },
    { it: "la guardia", en: "the guard" },
    { it: "il labirinto", en: "the labyrinth / maze" },
    { it: "l'opera d'arte", en: "the work of art" },
    { it: "la targa", en: "the plaque / label" },
    { it: "il soffitto", en: "the ceiling" },
    { it: "la panchina", en: "the bench" },
  ],
  comprehension: [
    {
      q: "How far in advance did the narrator book the ticket?",
      options: [
        "one day before",
        "a week before",
        "two weeks before",
        "a month before",
      ],
      correct: 2,
    },
    {
      q: "Which metro stop serves the Vatican?",
      options: ["Termini", "Ottaviano", "Spagna", "Repubblica"],
      correct: 1,
    },
    {
      q: "How many works of art are in the Vatican Museums?",
      options: ["~7,000", "~70,000", "~700,000", "~7 million"],
      correct: 1,
    },
    {
      q: "What rule does the guard repeat in the Sistine Chapel?",
      options: [
        "no photos and stay silent",
        "no sitting on benches",
        "no eating or drinking",
        "no children under 10",
      ],
      correct: 0,
    },
    {
      q: "How does the narrator feel after leaving the museum?",
      options: [
        "disappointed",
        "tired but full of images",
        "bored",
        "still hungry for more art",
      ],
      correct: 1,
    },
  ],
};
