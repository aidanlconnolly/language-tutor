import type { DailyRead } from "../../types";

export const READ_EL_PRADO: DailyRead = {
  slug: "el-prado",
  order: 4,
  stageUnlock: 3,
  difficulty: 6,
  titleL1: "Una tarde en el Prado",
  titleEn: "An Afternoon at the Prado",
  intro:
    "Visiting Spain's greatest museum. Past tense narrative mixed with present descriptions — good practice for mixing indefinido and presente.",
  paragraphs: [
    {
      l1: "Llegué al Museo del Prado a las seis de la tarde. A esa hora la entrada es gratuita.",
      en: "I arrived at the Prado Museum at six in the afternoon. At that hour entry is free.",
    },
    {
      l1: "La cola era corta. Di mi billete al guardia y entré al edificio. El interior es enorme e impresionante.",
      en: "The queue was short. I gave my ticket to the guard and entered the building. The interior is enormous and impressive.",
    },
    {
      l1: "Fui directamente a la sala de Velázquez. Allí está «Las Meninas», uno de los cuadros más famosos del mundo.",
      en: "I went directly to the Velázquez room. There is \"Las Meninas\", one of the most famous paintings in the world.",
    },
    {
      l1: "Me detuve frente al cuadro durante diez minutos. Es enorme — casi tres metros de alto. Los detalles son increíbles.",
      en: "I stopped in front of the painting for ten minutes. It is enormous — almost three metres tall. The details are incredible.",
    },
    {
      l1: "Después pasé por la sala de Goya. Sus pinturas negras son oscuras y perturbadoras. «Saturno devorando a su hijo» me dejó sin palabras.",
      en: "Afterwards I passed through the Goya room. His Black Paintings are dark and disturbing. \"Saturn Devouring His Son\" left me speechless.",
    },
    {
      l1: "Antes de salir, entré en la tienda del museo. Compré un libro sobre Velázquez como recuerdo.",
      en: "Before leaving, I entered the museum shop. I bought a book about Velázquez as a souvenir.",
    },
    {
      l1: "El guardia avisó que el museo cerraba en diez minutos. Salí por la entrada principal.",
      en: "The guard announced that the museum was closing in ten minutes. I exited through the main entrance.",
    },
    {
      l1: "Afuera, el sol se estaba poniendo sobre el Paseo del Prado. Fue una tarde perfecta.",
      en: "Outside, the sun was setting over the Paseo del Prado. It was a perfect afternoon.",
    },
  ],
  vocabSpotlight: [
    { l1: "gratuito/a", en: "free (of charge)" },
    { l1: "la cola", en: "the queue" },
    { l1: "el guardia", en: "the guard" },
    { l1: "el cuadro", en: "the painting" },
    { l1: "detenerse", en: "to stop / to pause" },
    { l1: "el detalle", en: "the detail" },
    { l1: "el recuerdo", en: "the souvenir / the memory" },
    { l1: "ponerse (el sol)", en: "to set (the sun)" },
  ],
  comprehension: [
    {
      q: "What time did the narrator arrive at the Prado?",
      options: ["5pm", "6pm", "7pm", "8pm"],
      correct: 1,
    },
    {
      q: "Why was entry free?",
      options: ["Because it was a holiday", "Because the narrator had a student card", "Because entry is free after 6pm", "Because it was Sunday"],
      correct: 2,
    },
    {
      q: "Which room did the narrator visit first?",
      options: ["Goya's room", "El Greco's room", "Velázquez's room", "Rubens's room"],
      correct: 2,
    },
    {
      q: "What did the narrator buy in the museum shop?",
      options: ["A poster", "A book about Velázquez", "A print of Las Meninas", "A catalogue"],
      correct: 1,
    },
    {
      q: "What was happening outside as the narrator left?",
      options: ["It was raining", "It was dark", "The sun was setting", "There was a parade"],
      correct: 2,
    },
  ],
};
