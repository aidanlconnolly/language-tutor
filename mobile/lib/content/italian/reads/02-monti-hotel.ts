import type { DailyRead } from "../../types";

export const READ_MONTI_HOTEL: DailyRead = {
  slug: "monti-hotel-checkin",
  order: 2,
  stageUnlock: 1,
  difficulty: 4.5,
  titleL1: "L'hotel a Monti",
  titleEn: "The hotel in Monti",
  intro:
    "Day two. Still very simple sentences, all present tense — but now you'll see a few new things: numbers, asking for things politely with 'vorrei', and the word 'c'è' (there is).",
  paragraphs: [
    {
      l1: "Sono in un taxi. Il taxi va verso il mio hotel. L'hotel è nel quartiere di Monti.",
      en: "I'm in a taxi. The taxi is going to my hotel. The hotel is in the Monti neighborhood.",
    },
    {
      l1: "Il taxi si ferma davanti a una porta gialla. Il numero è 24. Vedo un'insegna piccola: «Hotel Stella di Monti».",
      en: "The taxi stops in front of a yellow door. The number is 24. I see a small sign: \"Hotel Stella di Monti.\"",
    },
    {
      l1: "Entro nell'hotel. C'è una donna alla reception. Si chiama Giulia. Lei sorride e dice: «Buongiorno! Mi dica.»",
      en: "I enter the hotel. There's a woman at the reception. Her name is Giulia. She smiles and says: \"Good morning! Tell me.\"",
    },
    {
      l1: "«Buongiorno. Ho una prenotazione. Mi chiamo Marco.» Lei guarda il computer. «Sì, Marco! Cinque notti, camera 3B. Va bene?»",
      en: "\"Good morning. I have a reservation. My name is Marco.\" She looks at the computer. \"Yes, Marco! Five nights, room 3B. Is that okay?\"",
    },
    {
      l1: "«Sì, perfetto. Vorrei una camera tranquilla, per favore.» «La 3B è tranquilla. È in fondo al corridoio. C'è un balcone piccolo.»",
      en: "\"Yes, perfect. I'd like a quiet room, please.\" \"3B is quiet. It's at the end of the hallway. There's a small balcony.\"",
    },
    {
      l1: "Giulia mi dà la chiave. «Ecco la chiave. La colazione è dalle sette alle dieci. C'è il caffè, il pane, la marmellata.»",
      en: "Giulia gives me the key. \"Here's the key. Breakfast is from seven to ten. There's coffee, bread, and jam.\"",
    },
    {
      l1: "«Grazie mille, Giulia. A che ora chiude la reception?» «Non chiude mai. C'è sempre qualcuno qui.»",
      en: "\"Thank you so much, Giulia. What time does the reception close?\" \"It never closes. There's always someone here.\"",
    },
    {
      l1: "Salgo le scale. Trovo la camera 3B. Apro la porta. La camera è piccola ma bella. Vedo un letto, una sedia, una finestra. Sono a Roma. Sono stanco, ma sono felice.",
      en: "I go up the stairs. I find room 3B. I open the door. The room is small but nice. I see a bed, a chair, a window. I'm in Rome. I'm tired, but I'm happy.",
    },
  ],
  vocabSpotlight: [
    { l1: "la prenotazione", en: "the reservation" },
    { l1: "la camera", en: "the (hotel) room" },
    { l1: "la chiave", en: "the key" },
    { l1: "il corridoio", en: "the hallway" },
    { l1: "tranquillo", en: "quiet / calm" },
    { l1: "la colazione", en: "breakfast" },
    { l1: "vorrei", en: "I would like (polite)" },
    { l1: "c'è / ci sono", en: "there is / there are" },
  ],
  comprehension: [
    {
      q: "What's the name of the hotel?",
      options: [
        "Hotel Roma",
        "Hotel Monti",
        "Hotel Stella di Monti",
        "Hotel Giulia",
      ],
      correct: 2,
    },
    {
      q: "Who works at the reception?",
      options: ["Marco", "Giulia", "Lucia", "Anna"],
      correct: 1,
    },
    {
      q: "How many nights is the reservation for?",
      options: ["3", "4", "5", "7"],
      correct: 2,
    },
    {
      q: "What's special about room 3B?",
      options: [
        "it has a kitchen",
        "it's quiet and has a small balcony",
        "it's on the ground floor",
        "it has two beds",
      ],
      correct: 1,
    },
    {
      q: "When does the reception close?",
      options: ["at midnight", "at 10pm", "at 8pm", "it never closes"],
      correct: 3,
    },
  ],
};
