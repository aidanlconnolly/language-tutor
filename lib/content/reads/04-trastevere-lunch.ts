import type { DailyRead } from "../types";

export const READ_TRASTEVERE_LUNCH: DailyRead = {
  slug: "trastevere-lunch",
  order: 4,
  stageUnlock: 1,
  difficulty: 5.5,
  titleIt: "Pranzo a Trastevere",
  titleEn: "Lunch in Trastevere",
  intro:
    "Day four. Slightly longer sentences. You'll meet a few connectors (ma, poi, anche) and your first negative form (non…). Still all present tense.",
  paragraphs: [
    {
      it: "È mezzogiorno. Ho fame. Cammino verso Trastevere, un quartiere vecchio e bellissimo. Le strade sono strette. Le case sono gialle e arancioni.",
      en: "It's noon. I'm hungry. I walk toward Trastevere, an old and beautiful neighborhood. The streets are narrow. The houses are yellow and orange.",
    },
    {
      it: "In una piccola piazza vedo una trattoria. Si chiama «Da Lucia». Ci sono tre tavoli all'aperto. Una signora con i capelli bianchi mette una tovaglia.",
      en: "In a small square I see a trattoria. It's called \"Da Lucia.\" There are three outdoor tables. A lady with white hair is setting a tablecloth.",
    },
    {
      it: "«Buongiorno! Un tavolo per uno?» «Sì, per favore.» Mi siedo. La signora si chiama Lucia. Mi porta il pane e una bottiglia d'acqua.",
      en: "\"Hello! A table for one?\" \"Yes, please.\" I sit down. The lady's name is Lucia. She brings me bread and a bottle of water.",
    },
    {
      it: "«Da bere?» «Un quartino di vino bianco, per favore.» «Va bene. Della casa. Costa quattro euro.»",
      en: "\"To drink?\" \"A small carafe of white wine, please.\" \"Okay. House wine. It costs four euros.\"",
    },
    {
      it: "Guardo il menù. Non capisco tutto. Chiedo a Lucia: «Cosa mi consiglia?» Lei dice: «Oggi i rigatoni alla gricia sono buonissimi. E anche le polpette al sugo.»",
      en: "I look at the menu. I don't understand everything. I ask Lucia: \"What do you recommend?\" She says: \"Today the rigatoni alla gricia are delicious. And also the meatballs in sauce.\"",
    },
    {
      it: "«Perfetto. Prendo i rigatoni e poi le polpette.» «Ottima scelta!» Lei sparisce in cucina. Bevo il vino. È fresco e leggero.",
      en: "\"Perfect. I'll have the rigatoni and then the meatballs.\" \"Great choice!\" She disappears into the kitchen. I drink the wine. It's fresh and light.",
    },
    {
      it: "I rigatoni sono enormi e gialli per il pecorino. Il primo morso è una sorpresa: salato, intenso, perfetto. Mangio piano. Voglio gustare ogni boccone.",
      en: "The rigatoni are huge and yellow from the pecorino. The first bite is a surprise: salty, intense, perfect. I eat slowly. I want to savor each bite.",
    },
    {
      it: "Dopo arrivano le polpette: tre grandi polpette in un sugo rosso. Sono buonissime. Quando finisco, Lucia mi porta un biscotto e un piccolo bicchiere di vino dolce. «Offre la casa», dice. Sono molto felice.",
      en: "Then the meatballs arrive: three large meatballs in red sauce. They're delicious. When I finish, Lucia brings me a biscotto and a small glass of sweet wine. \"On the house,\" she says. I'm very happy.",
    },
  ],
  vocabSpotlight: [
    { it: "la trattoria", en: "small family restaurant" },
    { it: "il quartino", en: "small carafe of wine (~25cl)" },
    { it: "il pecorino", en: "hard sheep's-milk cheese" },
    { it: "il sugo", en: "tomato-based sauce" },
    { it: "le polpette", en: "meatballs" },
    { it: "consigliare", en: "to recommend" },
    { it: "gustare", en: "to savor / enjoy" },
    { it: "offre la casa", en: "on the house" },
  ],
  comprehension: [
    {
      q: "What's the name of the trattoria?",
      options: ["Da Mario", "Da Lucia", "Da Roma", "Da Trastevere"],
      correct: 1,
    },
    {
      q: "What does the narrator drink?",
      options: [
        "red wine",
        "a small carafe of white wine",
        "beer",
        "sparkling water",
      ],
      correct: 1,
    },
    {
      q: "What does Lucia recommend as a first course?",
      options: [
        "spaghetti carbonara",
        "rigatoni alla gricia",
        "lasagna",
        "ravioli",
      ],
      correct: 1,
    },
    {
      q: "What makes the rigatoni yellow?",
      options: ["saffron", "egg yolk", "pecorino cheese", "olive oil"],
      correct: 2,
    },
    {
      q: "What does Lucia bring at the end, on the house?",
      options: [
        "coffee",
        "a biscotto and sweet wine",
        "limoncello",
        "another plate of pasta",
      ],
      correct: 1,
    },
  ],
};
