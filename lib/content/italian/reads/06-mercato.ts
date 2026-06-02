import type { DailyRead } from "../../types";

export const READ_MERCATO: DailyRead = {
  slug: "campo-fiori-mercato",
  order: 6,
  stageUnlock: 1,
  difficulty: 6.5,
  titleL1: "Al mercato di Campo de' Fiori",
  titleEn: "At the Campo de' Fiori market",
  intro:
    "Day six. You'll start to see the first hints of past tense ('ho comprato' = I bought) used sparingly, plus more complex requests and bargaining-style exchanges. Most of the text is still present tense.",
  paragraphs: [
    {
      l1: "È martedì mattina. Mi piace fare la spesa al mercato di Campo de' Fiori. Il mercato apre presto, alle sette, e chiude verso le due del pomeriggio. Arrivo alle nove con una borsa di tela vuota.",
      en: "It's Tuesday morning. I like to do the shopping at the Campo de' Fiori market. The market opens early, at seven, and closes around two in the afternoon. I arrive at nine with an empty canvas bag.",
    },
    {
      l1: "La piazza è piena di colori. I banchi vendono di tutto: pomodori rossi e maturi, zucchine verdi lunghe, peperoni gialli e arancioni, basilico fresco, fragole rosse, limoni grandi della Sicilia.",
      en: "The square is full of color. The stalls sell everything: red, ripe tomatoes, long green zucchini, yellow and orange peppers, fresh basil, red strawberries, large Sicilian lemons.",
    },
    {
      l1: "Mi avvicino al banco di un signore anziano con un grembiule blu. Lui mi guarda e dice: «Buongiorno, giovane! Cosa Le serve oggi?» Rispondo: «Vorrei mezzo chilo di pomodori e un mazzetto di basilico, per favore.»",
      en: "I approach the stall of an elderly gentleman in a blue apron. He looks at me and says, \"Good morning, young man! What do you need today?\" I answer: \"I'd like half a kilo of tomatoes and a bunch of basil, please.\"",
    },
    {
      l1: "Lui prende i pomodori con cura, uno per uno. «Questi sono i migliori. Vengono dalla mia campagna, vicino a Frascati.» Mi mostra anche le zucchine. «E queste? Sono freschissime, le ho raccolte ieri mattina.»",
      en: "He picks the tomatoes carefully, one by one. \"These are the best. They come from my farm, near Frascati.\" He also shows me the zucchini. \"And these? They're really fresh, I picked them yesterday morning.\"",
    },
    {
      l1: "«Allora prendo anche tre zucchine. Quanto fa in tutto?» Lui pesa la verdura sulla bilancia. «Pomodori, basilico, zucchine… sette euro e cinquanta.» Pago con dieci euro e lui mi dà il resto. «Grazie, signore. A presto!»",
      en: "\"Then I'll also take three zucchini. How much in total?\" He weighs the vegetables on the scale. \"Tomatoes, basil, zucchini… seven euros and fifty cents.\" I pay with ten euros and he gives me the change. \"Thank you, sir. See you soon!\"",
    },
    {
      l1: "Continuo a girare per il mercato. Compro anche un po' di formaggio, del prosciutto, e un pezzo di pane fresco. Una signora del banco del formaggio mi fa assaggiare un pecorino stagionato. È molto saporito.",
      en: "I keep walking through the market. I also buy a bit of cheese, some prosciutto, and a piece of fresh bread. A lady at the cheese stall has me taste an aged pecorino. It's very flavorful.",
    },
    {
      l1: "Alla fine la mia borsa è piena e pesante. Stasera cucino una pasta con i pomodori freschi e il basilico. Penso: in Italia, il cibo non è solo cibo. È un modo per parlare con la gente, per conoscere la città, per sentirsi a casa.",
      en: "In the end my bag is full and heavy. Tonight I'll cook pasta with the fresh tomatoes and basil. I think: in Italy, food isn't just food. It's a way to talk with people, to get to know the city, to feel at home.",
    },
  ],
  vocabSpotlight: [
    { l1: "il mercato", en: "the market" },
    { l1: "fare la spesa", en: "to do the grocery shopping" },
    { l1: "il banco", en: "the stall (at a market)" },
    { l1: "maturo", en: "ripe" },
    { l1: "mezzo chilo", en: "half a kilo" },
    { l1: "un mazzetto", en: "a small bunch (of herbs)" },
    { l1: "la bilancia", en: "the scale" },
    { l1: "il resto", en: "the change (money back)" },
    { l1: "assaggiare", en: "to taste / sample" },
    { l1: "stagionato", en: "aged (cheese, ham)" },
  ],
  comprehension: [
    {
      q: "What time does the market open?",
      options: ["5am", "6am", "7am", "9am"],
      correct: 2,
    },
    {
      q: "What does the elderly seller wear?",
      options: ["a red hat", "a blue apron", "a white coat", "a green scarf"],
      correct: 1,
    },
    {
      q: "Where do the tomatoes come from?",
      options: [
        "Sicily",
        "the seller's farm near Frascati",
        "a supermarket",
        "the south of Italy",
      ],
      correct: 1,
    },
    {
      q: "How much does the narrator pay for tomatoes, basil, and zucchini?",
      options: ["€5.50", "€6.00", "€7.50", "€10.00"],
      correct: 2,
    },
    {
      q: "What does the narrator plan to cook for dinner?",
      options: [
        "a salad",
        "pizza with cheese",
        "pasta with fresh tomatoes and basil",
        "meat with vegetables",
      ],
      correct: 2,
    },
  ],
};
