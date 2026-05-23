import type { DailyRead } from "../types";

export const READ_BAR_MORNING: DailyRead = {
  slug: "bar-morning",
  order: 3,
  stageUnlock: 1,
  difficulty: 5,
  titleIt: "Una mattina al bar",
  titleEn: "A morning at the bar",
  intro:
    "Day three. Sentences are a little longer now. You'll see your first short conversations and the word 'mi piace' (I like). Still all present tense, still very common vocab.",
  paragraphs: [
    {
      it: "Sono le sette del mattino. Esco dall'hotel. Cammino verso il bar all'angolo. Si chiama «Bar Sant'Andrea».",
      en: "It's seven in the morning. I leave the hotel. I walk to the bar on the corner. It's called \"Bar Sant'Andrea.\"",
    },
    {
      it: "Entro nel bar. C'è un buon odore di caffè e di pane. Due uomini sono al bancone. Bevono il caffè in piedi.",
      en: "I enter the bar. There's a nice smell of coffee and bread. Two men are at the counter. They drink coffee standing up.",
    },
    {
      it: "Una ragazza giovane è dietro il bancone. Lei mi sorride. «Buongiorno! Cosa desidera?»",
      en: "A young woman is behind the counter. She smiles at me. \"Good morning! What would you like?\"",
    },
    {
      it: "«Buongiorno. Vorrei un cappuccino e un cornetto, per favore.» «Il cornetto alla crema o alla marmellata?» «Alla crema, grazie.»",
      en: "\"Good morning. I'd like a cappuccino and a cornetto, please.\" \"Cornetto with cream or with jam?\" \"With cream, thank you.\"",
    },
    {
      it: "Lei usa la macchina del caffè. Dopo un minuto mi porta il cappuccino. Sulla schiuma c'è un cuore bianco. È molto bello.",
      en: "She uses the espresso machine. After a minute she brings me the cappuccino. On the foam there's a white heart. It's very pretty.",
    },
    {
      it: "Bevo un sorso. Il caffè è perfetto: caldo, forte, ma non amaro. Il cornetto è dolce e leggero. Mi piace molto.",
      en: "I take a sip. The coffee is perfect: hot, strong, but not bitter. The cornetto is sweet and light. I like it very much.",
    },
    {
      it: "Un uomo al bancone mi guarda. «Lei è straniero?» mi chiede. «Sì, sono americano.» Lui sorride. «Benvenuto a Roma! Le piace il cappuccino?»",
      en: "A man at the counter looks at me. \"Are you a foreigner?\" he asks me. \"Yes, I'm American.\" He smiles. \"Welcome to Rome! Do you like the cappuccino?\"",
    },
    {
      it: "«Sì, è buonissimo!» Lui ride. «Bene. Ma ricorda: in Italia il cappuccino è solo per la mattina. Mai dopo le dieci!» Pago il conto. Costa tre euro. Esco dal bar. La giornata comincia bene.",
      en: "\"Yes, it's delicious!\" He laughs. \"Good. But remember: in Italy cappuccino is only for the morning. Never after ten!\" I pay the bill. It costs three euros. I leave the bar. The day is starting well.",
    },
  ],
  vocabSpotlight: [
    { it: "il bar", en: "the bar (more like a café)" },
    { it: "il bancone", en: "the counter" },
    { it: "il cappuccino", en: "the cappuccino (morning only!)" },
    { it: "il cornetto", en: "the cornetto (Italian croissant)" },
    { it: "la marmellata", en: "the jam" },
    { it: "la crema", en: "pastry cream" },
    { it: "amaro", en: "bitter" },
    { it: "il conto", en: "the bill / check" },
  ],
  comprehension: [
    {
      q: "What time is it at the start of the story?",
      options: ["6am", "7am", "8am", "9am"],
      correct: 1,
    },
    {
      q: "What does the narrator order?",
      options: [
        "espresso and biscotti",
        "cappuccino and cornetto with cream",
        "tea and croissant",
        "cappuccino and toast",
      ],
      correct: 1,
    },
    {
      q: "What does the barista draw in the foam?",
      options: ["a leaf", "a heart", "a star", "nothing"],
      correct: 1,
    },
    {
      q: "What rule does the Italian man tell the narrator?",
      options: [
        "Don't pay with card before noon",
        "Don't order cappuccino after 10am",
        "Always tip the barista",
        "Eat at a table, not the counter",
      ],
      correct: 1,
    },
    {
      q: "How much does breakfast cost?",
      options: ["€2", "€3", "€5", "€7"],
      correct: 1,
    },
  ],
};
