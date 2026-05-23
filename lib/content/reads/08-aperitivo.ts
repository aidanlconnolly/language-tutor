import type { DailyRead } from "../types";

export const READ_APERITIVO: DailyRead = {
  slug: "aperitivo-navona",
  order: 8,
  stageUnlock: 1,
  difficulty: 7.5,
  titleIt: "Aperitivo vicino a Piazza Navona",
  titleEn: "Aperitivo near Piazza Navona",
  intro:
    "Day eight. You'll see passato prossimo and imperfetto mixed naturally — 'mentre camminavo' (while I was walking), 'ho visto' (I saw). Sentence structure is closer to natural written Italian.",
  paragraphs: [
    {
      it: "Erano le sei della sera quando ho deciso di fare l'aperitivo. Mentre camminavo verso Piazza Navona, il cielo era arancione e l'aria era più fresca. Roma a quell'ora ha una luce speciale, una luce che chiamano in italiano «la dorata».",
      en: "It was six in the evening when I decided to have an aperitivo. While I was walking toward Piazza Navona, the sky was orange and the air was cooler. Rome at that hour has a special light, a light Italians call \"the golden one.\"",
    },
    {
      it: "Vicino alla piazza c'era un piccolo bar che mi aveva consigliato Lucia, la signora della trattoria di Trastevere. Si chiamava «Il Bicchiere d'Oro». Sono entrato e mi sono seduto a un tavolino esterno con una buona vista sulla strada.",
      en: "Near the square there was a small bar that Lucia, the lady from the Trastevere trattoria, had recommended. It was called \"Il Bicchiere d'Oro.\" I went in and sat at an outdoor table with a good view of the street.",
    },
    {
      it: "Il cameriere è arrivato subito. Era giovane, magro, con un sorriso aperto. «Buonasera. Cosa Le porto?» «Un Aperol Spritz, per favore.» «Subito! Per l'aperitivo, oggi abbiamo olive nere, formaggio, focaccia con il pomodoro. Va bene per Lei?»",
      en: "The waiter arrived right away. He was young, slim, with an open smile. \"Good evening. What can I bring you?\" \"An Aperol Spritz, please.\" \"Right away! For the aperitivo, today we have black olives, cheese, focaccia with tomato. Is that okay with you?\"",
    },
    {
      it: "Ho detto di sì e dopo cinque minuti era tutto sul mio tavolo: un bicchiere alto con il liquido arancione, una piccola fetta di arancia all'interno, e tre piattini di stuzzichini. Tutto incluso nel prezzo, otto euro. Non male per quello che ti danno.",
      en: "I said yes and after five minutes everything was on my table: a tall glass with the orange liquid, a small slice of orange inside, and three little plates of snacks. All included in the price, eight euros. Not bad for what they give you.",
    },
    {
      it: "Ho bevuto piano e ho guardato la gente. C'era una coppia anziana che parlava sottovoce. Due ragazze ridevano e si scambiavano il telefono per mostrare foto. Un padre cercava di convincere il suo bambino piccolo a finire un gelato che si scioglieva sulla mano.",
      en: "I drank slowly and watched the people. There was an elderly couple talking quietly. Two girls were laughing and exchanging the phone to show photos. A father was trying to convince his small child to finish a gelato that was melting on his hand.",
    },
    {
      it: "Mentre osservavo, il cameriere è tornato. «Tutto bene?» «Sì, molto. Mi può consigliare un posto per cena dopo?» Ha pensato un momento. «Dipende. Cosa preferisce — la pasta o la pizza? Romano o internazionale?» «Romano, sicuramente. Qualcosa di tipico.»",
      en: "While I was watching, the waiter came back. \"Everything good?\" \"Yes, very. Can you recommend a place for dinner after?\" He thought a moment. \"It depends. What do you prefer — pasta or pizza? Roman or international?\" \"Roman, definitely. Something typical.\"",
    },
    {
      it: "Mi ha scritto su un piccolo foglio il nome di una trattoria a Testaccio, un quartiere meno turistico. «È un po' lontano, ma vale la pena. Prenda l'autobus 75 dalla fermata davanti.» Ho messo il foglio nel portafoglio, ho pagato, e ho ringraziato.",
      en: "He wrote on a small piece of paper the name of a trattoria in Testaccio, a less touristy neighborhood. \"It's a bit far, but it's worth it. Take bus 75 from the stop in front.\" I put the paper in my wallet, paid, and thanked him.",
    },
    {
      it: "Mentre uscivo, il cielo era ormai viola scuro. Le luci dei lampioni si erano accese. Pensavo: questo era il mio momento preferito della giornata romana — quello tra il giorno e la notte, quando la città cambia carattere ma resta sempre se stessa.",
      en: "As I was leaving, the sky was now dark purple. The streetlights had come on. I was thinking: this was my favorite moment of the Roman day — the one between day and night, when the city changes character but always stays itself.",
    },
  ],
  vocabSpotlight: [
    { it: "l'aperitivo", en: "the aperitivo (pre-dinner drink + snacks)" },
    { it: "consigliare", en: "to recommend" },
    { it: "il cameriere", en: "the waiter" },
    { it: "lo stuzzichino", en: "the snack / small bite" },
    { it: "incluso", en: "included" },
    { it: "sottovoce", en: "in a low voice / quietly" },
    { it: "sciogliere / si scioglieva", en: "to melt / it was melting" },
    { it: "valere la pena", en: "to be worth it" },
    { it: "il lampione", en: "the streetlight" },
    { it: "il portafoglio", en: "the wallet" },
  ],
  comprehension: [
    {
      q: "What time of day is the story set?",
      options: ["early morning", "noon", "around 6pm", "late at night"],
      correct: 2,
    },
    {
      q: "Who recommended the bar to the narrator?",
      options: [
        "Marco from the hotel",
        "Lucia from the Trastevere trattoria",
        "Giulia from the hotel",
        "the waiter himself",
      ],
      correct: 1,
    },
    {
      q: "What does the narrator order?",
      options: ["a beer", "an Aperol Spritz", "white wine", "a coffee"],
      correct: 1,
    },
    {
      q: "How much does the aperitivo cost?",
      options: ["€5", "€8", "€12", "€15"],
      correct: 1,
    },
    {
      q: "Where does the waiter send the narrator for dinner?",
      options: [
        "Trastevere",
        "Testaccio — take bus 75",
        "the Vatican area",
        "the bar's own restaurant",
      ],
      correct: 1,
    },
  ],
};
