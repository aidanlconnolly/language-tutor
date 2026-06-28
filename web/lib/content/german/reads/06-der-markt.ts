import type { DailyRead } from "../../types";

export const READ_DER_MARKT: DailyRead = {
  slug: "der-markt",
  order: 6,
  stageUnlock: 3,
  difficulty: 6.5,
  titleL1: "Der Markt am Maybachufer",
  titleEn: "The market by the canal",
  intro:
    "More Perfekt mixed with present tense. You'll hear market language: weighing, price per kilo, a bit of friendly bargaining. Watch for separable verbs like \"einkaufen\" (to shop) splitting apart in a sentence.",
  paragraphs: [
    {
      l1: "Am Dienstag und Freitag gibt es am Maybachufer einen großen Markt. Er liegt direkt am Kanal. Viele nennen ihn den «Türkischen Markt», weil dort viele türkische Händler sind.",
      en: "On Tuesdays and Fridays there is a big market at the Maybachufer. It lies right by the canal. Many people call it the \"Turkish Market\" because there are many Turkish vendors there.",
    },
    {
      l1: "Heute bin ich früh hingegangen, weil es dann noch nicht so voll ist. Trotzdem waren schon viele Leute da. Es hat nach Gewürzen, Obst und frischem Brot gerochen.",
      en: "Today I went there early because then it isn't so crowded yet. Even so, there were already many people there. It smelled of spices, fruit and fresh bread.",
    },
    {
      l1: "An einem Stand habe ich schönes Gemüse gesehen: rote Tomaten, grüne Gurken und große Auberginen. Der Händler hat laut gerufen: «Frische Tomaten, ein Kilo nur zwei Euro!»",
      en: "At a stall I saw beautiful vegetables: red tomatoes, green cucumbers and big aubergines. The vendor called out loudly: \"Fresh tomatoes, one kilo only two euros!\"",
    },
    {
      l1: "«Einmal ein Kilo Tomaten, bitte», habe ich gesagt. Er hat sie auf eine Waage gelegt und in eine Tüte gepackt. «Sonst noch etwas?» «Ja, auch ein paar Gurken.»",
      en: "\"One kilo of tomatoes, please,\" I said. He put them on a scale and packed them into a bag. \"Anything else?\" \"Yes, a few cucumbers too.\"",
    },
    {
      l1: "Daneben gab es einen Käsestand. Eine Frau hat mir ein Stück zum Probieren gegeben. «Der ist aus Schafsmilch», hat sie erklärt. Der Käse war salzig und sehr lecker.",
      en: "Next to it there was a cheese stall. A woman gave me a piece to try. \"It's made from sheep's milk,\" she explained. The cheese was salty and very tasty.",
    },
    {
      l1: "«Wie viel kostet das?» habe ich gefragt. «Neun Euro das Kilo.» Das war mir ein bisschen zu teuer. «Können Sie mir einen guten Preis machen?» Sie hat gelächelt: «Für Sie acht Euro.»",
      en: "\"How much does that cost?\" I asked. \"Nine euros a kilo.\" That was a bit too expensive for me. \"Can you give me a good price?\" She smiled: \"For you, eight euros.\"",
    },
    {
      l1: "Ich habe ein halbes Kilo gekauft. Dann bin ich weiter durch den Markt gegangen und habe noch Oliven, Brot und Minze eingekauft. Meine Tasche ist immer schwerer geworden.",
      en: "I bought half a kilo. Then I went on through the market and also shopped for olives, bread and mint. My bag got heavier and heavier.",
    },
    {
      l1: "Am Ende habe ich mich ans Wasser gesetzt und zugeschaut, wie die Leute einkaufen und reden. Der Markt ist bunt und laut, und ich komme jetzt jede Woche her.",
      en: "In the end I sat down by the water and watched how the people shop and talk. The market is colorful and loud, and now I come here every week.",
    },
  ],
  vocabSpotlight: [
    { l1: "der Markt", en: "the market" },
    { l1: "der Händler", en: "the vendor / trader" },
    { l1: "das Gemüse", en: "the vegetables" },
    { l1: "die Waage", en: "the scale" },
    { l1: "probieren", en: "to try / taste" },
    { l1: "einkaufen", en: "to shop (separable verb)" },
    { l1: "Wie viel kostet das?", en: "How much does that cost?" },
    { l1: "einen guten Preis machen", en: "to give a good price (bargain)" },
  ],
  comprehension: [
    {
      q: "On which days is the market held?",
      options: [
        "Monday and Thursday",
        "Tuesday and Friday",
        "Wednesday and Saturday",
        "every day",
      ],
      correct: 1,
    },
    {
      q: "Why is it called the 'Turkish Market'?",
      options: [
        "it is in Turkey",
        "it only sells Turkish food",
        "many of the vendors are Turkish",
        "it was built by a Turkish architect",
      ],
      correct: 2,
    },
    {
      q: "Why did the narrator go early?",
      options: [
        "the market closes at noon",
        "it isn't so crowded yet",
        "the prices are lower in the morning",
        "to meet a friend",
      ],
      correct: 1,
    },
    {
      q: "What is the cheese made from?",
      options: ["cow's milk", "goat's milk", "sheep's milk", "soy"],
      correct: 2,
    },
    {
      q: "What price does the narrator get on the cheese?",
      options: ["€9 a kilo", "€8 a kilo", "€7 a kilo", "€10 a kilo"],
      correct: 1,
    },
  ],
};
