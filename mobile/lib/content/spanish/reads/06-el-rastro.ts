import type { DailyRead } from "../../types";

export const READ_EL_RASTRO: DailyRead = {
  slug: "el-rastro",
  order: 6,
  stageUnlock: 4,
  difficulty: 7,
  titleL1: "El domingo en el Rastro",
  titleEn: "Sunday at El Rastro",
  intro:
    "Exploring Madrid's famous Sunday flea market — bargaining, buying, and people-watching. Narrative past with some dialogue.",
  paragraphs: [
    {
      l1: "El domingo por la mañana fui al Rastro, el mercadillo más famoso de Madrid. Empieza a las nueve y cierra a las tres.",
      en: "On Sunday morning I went to El Rastro, the most famous flea market in Madrid. It starts at nine and closes at three.",
    },
    {
      l1: "Cogí el metro hasta La Latina. Al salir, las calles ya estaban llenas de puestos de todo tipo.",
      en: "I took the metro to La Latina. On exiting, the streets were already full of stalls of all kinds.",
    },
    {
      l1: "Había ropa antigua, libros, discos de vinilo, cuadros, cerámica y objetos de todo tipo. Era imposible aburrirse.",
      en: "There was old clothing, books, vinyl records, paintings, ceramics and objects of all kinds. It was impossible to get bored.",
    },
    {
      l1: "Me detuve frente a un puesto de antigüedades. Vi un reloj de bolsillo muy bonito. Pregunté al vendedor: «¿Cuánto vale este reloj?»",
      en: "I stopped in front of an antiques stall. I saw a very nice pocket watch. I asked the vendor: \"How much is this watch worth?\"",
    },
    {
      l1: "«Cuarenta euros», dijo él. Yo respondí: «¿Me lo deja en treinta?» Se pensó un momento y dijo: «Venga, treinta y cinco, y ya está.»",
      en: "\"Forty euros\", he said. I replied: \"Will you let me have it for thirty?\" He thought for a moment and said: \"OK, thirty-five, and that's that.\"",
    },
    {
      l1: "Acepté el precio. El reloj era bonito y el precio era justo. Lo metí en mi mochila con cuidado.",
      en: "I accepted the price. The watch was pretty and the price was fair. I carefully put it in my backpack.",
    },
    {
      l1: "Después fui a tomar algo en un bar de la Cava Baja. Pedí un vermut y unas croquetas. El barrio estaba muy animado.",
      en: "Afterwards I went for a drink at a bar on the Cava Baja. I ordered a vermouth and some croquettes. The neighbourhood was very lively.",
    },
    {
      l1: "Volví a casa a las dos de la tarde. Había gastado cuarenta euros en total y llevaba un recuerdo auténtico de Madrid.",
      en: "I returned home at two in the afternoon. I had spent forty euros in total and I was carrying an authentic souvenir of Madrid.",
    },
  ],
  vocabSpotlight: [
    { l1: "el mercadillo", en: "the flea market / street market" },
    { l1: "el puesto", en: "the stall" },
    { l1: "las antigüedades", en: "antiques" },
    { l1: "el reloj de bolsillo", en: "the pocket watch" },
    { l1: "el vendedor", en: "the vendor / seller" },
    { l1: "regatear", en: "to bargain / haggle" },
    { l1: "el vermut", en: "vermouth (traditional Sunday aperitif)" },
    { l1: "auténtico/a", en: "authentic" },
  ],
  comprehension: [
    {
      q: "What time does El Rastro close?",
      options: ["12 noon", "1pm", "2pm", "3pm"],
      correct: 3,
    },
    {
      q: "What item did the narrator want to buy?",
      options: ["A vinyl record", "A painting", "A pocket watch", "A ceramic vase"],
      correct: 2,
    },
    {
      q: "What price did the narrator offer first?",
      options: ["€25", "€30", "€35", "€38"],
      correct: 1,
    },
    {
      q: "What did the narrator order at the bar?",
      options: ["Coffee and churros", "Beer and patatas bravas", "Vermouth and croquettes", "Wine and olives"],
      correct: 2,
    },
    {
      q: "How much did the narrator spend in total?",
      options: ["€30", "€35", "€40", "€45"],
      correct: 2,
    },
  ],
};
