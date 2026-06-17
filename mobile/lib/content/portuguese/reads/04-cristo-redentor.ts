import type { DailyRead } from "../../types";

export const READ_CRISTO_REDENTOR: DailyRead = {
  slug: "cristo-redentor",
  order: 4,
  stageUnlock: 3,
  difficulty: 6,
  titleL1: "O Cristo Redentor",
  titleEn: "Christ the Redeemer",
  intro:
    "A morning visit to Rio's most famous landmark, from buying the ticket to the view at the top. Present tense for descriptions mixed with the pretérito perfeito for the narrative — good A2 practice with slightly longer sentences.",
  paragraphs: [
    {
      l1: "De manhã cedo, peguei um táxi até a estação do Cosme Velho. O céu estava azul e o dia prometia ser quente.",
      en: "Early in the morning, I took a taxi to the Cosme Velho station. The sky was blue and the day promised to be hot.",
    },
    {
      l1: "Na bilheteria, comprei o ingresso para o trem do Corcovado. A moça me explicou que o trem sobe a montanha a cada meia hora.",
      en: "At the ticket office, I bought the ticket for the Corcovado train. The young woman explained to me that the train goes up the mountain every half hour.",
    },
    {
      l1: "O ingresso não é barato, mas inclui a subida e a entrada no monumento. Eu paguei com cartão e guardei o bilhete no bolso.",
      en: "The ticket is not cheap, but it includes the ride up and entry to the monument. I paid by card and put the ticket in my pocket.",
    },
    {
      l1: "O trem do Corcovado é vermelho e bem antigo. Ele funciona desde 1884 e atravessa a Floresta da Tijuca, a maior floresta urbana do mundo.",
      en: "The Corcovado train is red and quite old. It has been running since 1884 and crosses the Tijuca Forest, the largest urban forest in the world.",
    },
    {
      l1: "Durante a viagem, olhei pela janela. As árvores são altas e verdes, e às vezes dá para ver pequenos macacos entre os galhos.",
      en: "During the trip, I looked out the window. The trees are tall and green, and sometimes you can see little monkeys among the branches.",
    },
    {
      l1: "A subida durou cerca de vinte minutos. Quando o trem chegou ao topo, todos os passageiros desceram animados, com as câmeras nas mãos.",
      en: "The climb lasted about twenty minutes. When the train reached the top, all the passengers got off excited, with their cameras in hand.",
    },
    {
      l1: "Subi os últimos degraus e, de repente, vi a estátua bem na minha frente. O Cristo Redentor é enorme: mede trinta metros de altura e abre os braços sobre a cidade.",
      en: "I climbed the last steps and, suddenly, I saw the statue right in front of me. Christ the Redeemer is enormous: it stands thirty metres tall and opens its arms over the city.",
    },
    {
      l1: "A estátua foi inaugurada em 1931 e hoje é uma das Sete Maravilhas do Mundo Moderno. Muita gente vem de longe só para vê-la de perto.",
      en: "The statue was inaugurated in 1931 and today it is one of the Seven Wonders of the Modern World. Many people come from far away just to see it up close.",
    },
    {
      l1: "Do alto do Corcovado, a vista é de tirar o fôlego. Dá para ver a praia de Copacabana, a Lagoa, o Pão de Açúcar e o mar azul ao fundo.",
      en: "From the top of Corcovado, the view is breathtaking. You can see Copacabana beach, the Lagoon, Sugarloaf Mountain and the blue sea in the background.",
    },
    {
      l1: "Tirei muitas fotos, mas também fiquei alguns minutos em silêncio, só olhando a paisagem. Foi um momento especial.",
      en: "I took many photos, but I also stayed a few minutes in silence, just looking at the landscape. It was a special moment.",
    },
    {
      l1: "Perto da saída, comprei um cartão-postal e uma garrafa de água, porque o calor estava forte. Depois esperei o próximo trem para descer.",
      en: "Near the exit, I bought a postcard and a bottle of water, because the heat was strong. Then I waited for the next train to go down.",
    },
    {
      l1: "No caminho de volta, pensei que o Rio é mesmo uma cidade linda. Prometi a mim mesmo que um dia eu voltaria.",
      en: "On the way back, I thought that Rio really is a beautiful city. I promised myself that one day I would return.",
    },
  ],
  vocabSpotlight: [
    { l1: "o ingresso", en: "the ticket (admission)" },
    { l1: "a bilheteria", en: "the ticket office" },
    { l1: "o trem", en: "the train" },
    { l1: "a subida", en: "the climb / the ascent" },
    { l1: "a estátua", en: "the statue" },
    { l1: "o topo", en: "the top / the summit" },
    { l1: "a vista", en: "the view" },
    { l1: "de tirar o fôlego", en: "breathtaking" },
    { l1: "a paisagem", en: "the landscape / scenery" },
  ],
  comprehension: [
    {
      q: "What did the narrator buy at the ticket office?",
      options: [
        "A map of Rio",
        "A ticket for the Corcovado train",
        "A bus ticket",
        "A guided tour",
      ],
      correct: 1,
    },
    {
      q: "What does the Corcovado train cross on its way up?",
      options: [
        "A long tunnel",
        "The beach of Copacabana",
        "The Tijuca Forest",
        "A river",
      ],
      correct: 2,
    },
    {
      q: "How tall is the statue of Christ the Redeemer, according to the story?",
      options: ["Ten metres", "Twenty metres", "Thirty metres", "Fifty metres"],
      correct: 2,
    },
    {
      q: "In what year was the statue inaugurated?",
      options: ["1884", "1931", "1950", "2007"],
      correct: 1,
    },
    {
      q: "What could the narrator see from the top of Corcovado?",
      options: [
        "Only clouds and fog",
        "The airport and the highway",
        "Copacabana, the Lagoon, Sugarloaf and the sea",
        "A football stadium",
      ],
      correct: 2,
    },
    {
      q: "Why did the narrator buy a bottle of water near the exit?",
      options: [
        "Because the train ride was long",
        "Because the heat was strong",
        "Because the water there was free",
        "Because there were no restaurants",
      ],
      correct: 1,
    },
  ],
};
