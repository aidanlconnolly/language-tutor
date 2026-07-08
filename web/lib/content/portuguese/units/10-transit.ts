import type { Unit } from "../../types";

export const UNIT_TRANSIT: Unit = {
  slug: "transit",
  stage: 3,
  order: 10,
  icon: "🚇",
  title: "Getting around",
  tagline: "Metrô, ônibus, trem, bilhete — and ônibus (BR) vs autocarro (PT).",
  badge: "tourist",
  lessons: [
    {
      slug: "transit-vocab",
      title: "Metrô, ônibus, trem, bilhete",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Three things to name to move around a Brazilian city",
          body: [
            "The <strong>metrô</strong> is the backbone of São Paulo and Rio. In São Paulo the lines are numbered and colour-coded (<em>Linha 1 — Azul</em>, <em>Linha 3 — Vermelha</em>, and so on); in Rio it's just <em>Linha 1</em> and <em>Linha 2</em>. Fast, clean, and the easiest way to skip traffic.",
            "The <strong>ônibus</strong> (city bus) reaches everywhere the metrô doesn't — but it's slower and routes can be confusing for visitors. You board at the front, often paying a <em>cobrador</em> (fare collector) or tapping a card at the turnstile (<em>catraca</em>).",
            "The <strong>trem</strong> (commuter/regional train) and the metropolitan <em>CPTM</em> in São Paulo link the city with the suburbs. For longer trips between cities, Brazilians mostly fly or take a long-distance <em>ônibus</em> from the <em>rodoviária</em> (bus terminal).",
          ],
          keyPoint:
            "Metrô = fast urban rail. Ônibus = slower but everywhere. Trem/CPTM = city ↔ suburbs; rodoviária = intercity bus station.",
        },
        {
          type: "vocab",
          heading: "Core transit vocab",
          items: [
            { l1: "o metrô", en: "the metro / subway", note: "Note the accent: metrô" },
            { l1: "o ônibus", en: "the city bus", note: "BR; in Portugal: autocarro" },
            { l1: "o trem", en: "the train", note: "BR; in Portugal: comboio" },
            { l1: "a estação", en: "the station", note: "estação — with the ção ending" },
            { l1: "o ponto de ônibus", en: "the bus stop", note: "BR; in Portugal: paragem" },
            { l1: "a rodoviária", en: "the (intercity) bus terminal", note: "" },
            { l1: "o bilhete", en: "the ticket", note: "" },
            { l1: "a passagem", en: "the fare / ticket (esp. for a journey)", note: "passagem de ônibus = bus fare" },
            { l1: "o cartão", en: "the (travel) card", note: "e.g. the rechargeable transit card" },
            { l1: "a catraca", en: "the turnstile", note: "where you tap your card" },
            { l1: "o táxi", en: "the taxi", note: "" },
            { l1: "a baldeação", en: "the transfer / change of line", note: "fazer baldeação = to transfer" },
          ],
        },
        {
          type: "tip",
          heading: "The big one: ônibus (BR) vs autocarro (PT)",
          body: "This unit is full of words that split sharply between Brazil and Portugal. Learn the Brazilian forms as your spine, but recognise the European ones — they're completely different words, not just accents. <br><br><strong>BR → PT</strong><br>• ônibus → <em>autocarro</em> (bus)<br>• trem → <em>comboio</em> (train)<br>• ponto de ônibus → <em>paragem</em> (bus stop)<br>• pegar o ônibus → <em>apanhar o autocarro</em> (to catch the bus)<br>• carteira de motorista → <em>carta de condução</em> (driver's licence)",
          example: { l1: "BR: Vou pegar o ônibus. · PT: Vou apanhar o autocarro.", en: "I'm going to catch the bus." },
        },
        {
          type: "vocab",
          heading: "Travel cards & fares (Brazil)",
          intro: "Most big cities run a rechargeable card instead of paper tickets.",
          items: [
            { l1: "o Bilhete Único", en: "the unified transit card (São Paulo)", note: "One card for metrô, CPTM and bus" },
            { l1: "recarregar o cartão", en: "to top up / reload the card", note: "recarregar = to recharge" },
            { l1: "a recarga", en: "the top-up", note: "" },
            { l1: "a tarifa", en: "the fare (the price)", note: "" },
            { l1: "a integração", en: "the integrated transfer", note: "free/cheap transfer between modes within a time window" },
            { l1: "a bilheteria", en: "the ticket office / booth", note: "BR; in Portugal: bilheteira" },
            { l1: "o saldo", en: "the balance (on the card)", note: "" },
            { l1: "validar", en: "to validate / tap in", note: "tap the card at the catraca" },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Quick check",
          questions: [
            {
              q: "In Brazil, 'the bus' is…",
              options: ["o autocarro", "o ônibus", "o comboio", "a paragem"],
              correct: 1,
              fb: "Ônibus is Brazilian. Autocarro is the European Portuguese word.",
            },
            {
              q: "What does 'recarregar o cartão' mean?",
              options: ["to buy a new card", "to top up / reload the card", "to validate the ticket", "to lose the card"],
              correct: 1,
            },
            {
              q: "The Bilhete Único is…",
              options: [
                "a one-way paper ticket",
                "a fine for not paying",
                "São Paulo's unified rechargeable transit card",
                "the train to the airport",
              ],
              correct: 2,
              fb: "It's the single card that works across metrô, CPTM and buses in São Paulo.",
            },
            {
              q: "'Fazer baldeação' means…",
              options: ["to buy a ticket", "to transfer / change lines", "to miss the train", "to pay the driver"],
              correct: 1,
            },
          ],
        },
      ],
    },
    {
      slug: "transit-buying",
      title: "Buying a ticket & topping up",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Where and how to pay",
          body: [
            "1. <strong>Bilheteria</strong> (the staffed ticket booth) at every metrô and train station — buy a single ride or, better, a rechargeable card and top it up. Just say <em>«Uma recarga de vinte reais, por favor.»</em>",
            "2. <strong>Máquina de autoatendimento</strong> (self-service machine) — touch screen, often with English, takes card and cash.",
            "3. <strong>App</strong> — most cities have an app (and contactless tap-to-pay is spreading). On the bus you often still pay a <em>cobrador</em> in cash or tap your card at the <em>catraca</em>.",
          ],
          keyPoint:
            "Bilheteria, self-service machine, or app. A rechargeable card beats single tickets if you'll ride more than twice.",
        },
        {
          type: "dialogue",
          heading: "At the metrô ticket booth (São Paulo)",
          setup: "You step up to the bilheteria to sort out a card.",
          lines: [
            { speaker: "Você", l1: "Bom dia. Eu queria recarregar o meu Bilhete Único.", en: "Good morning. I'd like to top up my Bilhete Único." },
            { speaker: "Atendente", l1: "Claro. De quanto?", en: "Sure. How much?" },
            { speaker: "Você", l1: "Trinta reais, por favor. Posso pagar no cartão?", en: "Thirty reais, please. Can I pay by card?" },
            { speaker: "Atendente", l1: "Pode. Débito ou crédito?", en: "You can. Debit or credit?" },
            { speaker: "Você", l1: "Débito. A integração com o ônibus já está incluída?", en: "Debit. Is the transfer to the bus already included?" },
            { speaker: "Atendente", l1: "Está sim. Você tem três horas pra fazer a baldeação.", en: "It is. You have three hours to make the transfer." },
            { speaker: "Você", l1: "Perfeito, obrigado!", en: "Perfect, thank you!" },
          ],
        },
        {
          type: "tip",
          heading: "Buying a ticket: pegar vs apanhar",
          body: "When you talk about <em>catching</em> or <em>taking</em> transport, Brazil uses <strong>pegar</strong> (pegar o metrô, pegar um táxi) while Portugal uses <strong>apanhar</strong> (apanhar o comboio). Both also have <em>tomar</em> for slightly more formal speech. Stick with <em>pegar</em> in Brazil — <em>apanhar</em> in Brazil more often means 'to get hit / get caught'!",
          example: { l1: "BR: Vou pegar o trem das oito. · PT: Vou apanhar o comboio das oito.", en: "I'm going to catch the eight o'clock train." },
        },
        {
          type: "fillBlank",
          heading: "Fill the request",
          intro: "Choose the word that fits the Brazilian sentence.",
          items: [
            {
              template: "Eu ___ recarregar o cartão, por favor.",
              answer: "queria",
              en: "I'd like to top up the card, please.",
              options: ["queria", "quero muito", "faço", "preciso de"],
            },
            {
              template: "Uma ___ de vinte reais, por favor.",
              answer: "recarga",
              en: "A twenty-reais top-up, please.",
              options: ["recarga", "passagem", "catraca", "baldeação"],
            },
            {
              template: "Posso pagar no ___?",
              answer: "cartão",
              en: "Can I pay by card?",
              options: ["cartão", "dinheiro", "saldo", "ponto"],
            },
            {
              template: "Quanto custa a ___ de ônibus?",
              answer: "passagem",
              en: "How much is the bus fare?",
              options: ["passagem", "estação", "catraca", "recarga"],
            },
            {
              template: "Para o aeroporto, eu pego o ___ ou o ônibus?",
              answer: "metrô",
              en: "For the airport, do I take the metro or the bus?",
              options: ["metrô", "comboio", "autocarro", "paragem"],
            },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the request",
          intro: "Tap the words into the correct order.",
          items: [
            { tokens: ["Eu", "queria", "uma", "recarga", "de", "vinte", "reais"], en: "I'd like a twenty-reais top-up." },
            { tokens: ["A", "que", "horas", "sai", "o", "próximo", "trem", "?"], alts: [["A", "que", "horas", "o", "próximo", "trem", "sai", "?"]], en: "What time does the next train leave?" },
            { tokens: ["Quanto", "custa", "a", "passagem", "de", "ônibus", "?"], en: "How much is the bus fare?" },
            { tokens: ["Posso", "pagar", "com", "cartão", "de", "crédito", "?"], en: "Can I pay with a credit card?" },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "I'd like to top up my card with twenty reais, please.",
          reference: "Eu queria recarregar o meu cartão com vinte reais, por favor.",
          hint: "'I'd like' = eu queria. 'To top up' = recarregar.",
        },
      ],
    },
    {
      slug: "transit-onboard",
      title: "Asking the way, on board, getting off",
      estMinutes: 10,
      pages: [
        {
          type: "intro",
          heading: "How do I get to…? — the phrase that unlocks the city",
          body: [
            "The all-purpose question is <em>«Como eu chego a [lugar]?»</em> = How do I get to [place]? You can also ask <em>«Qual ônibus vai para [lugar]?»</em> = Which bus goes to [place]?",
            "On the metrô, listen for <em>«Próxima estação: [nome].»</em> = Next station: [name]. On a bus, a stop is announced as <em>«Próximo ponto.»</em> To signal you want to get off, press the button and the sign reads <em>parada solicitada</em> (stop requested).",
            "To get off, you say <em>descer</em> (to get off / go down) — the opposite of <em>subir</em> / <em>embarcar</em> (to board). Ask a fellow passenger: <em>«Quantas paradas faltam para [lugar]?»</em> = How many stops until [place]?",
          ],
          keyPoint:
            "Como eu chego a X? = how do I get to X · próxima estação = next station · descer = to get off · quantas paradas faltam? = how many stops left?",
        },
        {
          type: "vocab",
          heading: "On-board words & signs",
          items: [
            { l1: "Como eu chego a…?", en: "How do I get to…?" },
            { l1: "próxima estação", en: "next station" },
            { l1: "o próximo ponto", en: "the next (bus) stop" },
            { l1: "a parada", en: "the stop", note: "ponto and parada are both used in BR" },
            { l1: "embarcar / subir", en: "to board / get on" },
            { l1: "descer", en: "to get off / get down" },
            { l1: "fazer baldeação", en: "to transfer / change lines" },
            { l1: "a saída", en: "the exit" },
            { l1: "a entrada", en: "the entrance" },
            { l1: "o sentido", en: "the direction (e.g. sentido Centro)" },
            { l1: "lotado", en: "packed / full", note: "o trem está lotado = the train is packed" },
            { l1: "atrasado / no horário", en: "late / on time" },
          ],
        },
        {
          type: "dialogue",
          heading: "Asking a fellow passenger (Rio)",
          setup: "You're on the metrô and not sure where to get off for Copacabana.",
          lines: [
            { speaker: "Você", l1: "Com licença, o senhor sabe qual é a estação para Copacabana?", en: "Excuse me, do you know which station is for Copacabana?" },
            { speaker: "Passageiro", l1: "Sabe que é a Cardeal Arcoverde. Faltam duas estações.", en: "It's Cardeal Arcoverde. Two stops to go." },
            { speaker: "Você", l1: "Ah, obrigado! Preciso fazer baldeação?", en: "Ah, thank you! Do I need to transfer?" },
            { speaker: "Passageiro", l1: "Não, é direto nessa linha. É só descer lá.", en: "No, it's direct on this line. Just get off there." },
            { speaker: "Você", l1: "Maravilha. É a primeira vez que pego o metrô aqui.", en: "Wonderful. It's my first time taking the metro here." },
            { speaker: "Passageiro", l1: "Relaxa, eu te aviso quando chegar. Próxima já é a sua.", en: "Relax, I'll let you know when we arrive. The next one is yours." },
          ],
        },
        {
          type: "listen",
          heading: "What did the announcement say?",
          intro: "Listen to each one, then pick the closest meaning.",
          items: [
            { l1: "Próxima estação: Sé.", en: "Next station: Sé.", options: ["Final station: Sé", "Sé is closed", "Next station: Sé", "Train delayed"], correct: 2 },
            { l1: "Atenção: parada solicitada.", en: "Attention: stop requested.", options: ["Stop requested", "No stops ahead", "Doors are broken", "End of the line"], correct: 0 },
            { l1: "Cuidado com o vão entre o trem e a plataforma.", en: "Mind the gap between the train and the platform.", options: ["Train is leaving", "Mind the gap between train and platform", "Platform is closed", "Change here for line 2"], correct: 1 },
            { l1: "Sentido Centro, embarque pela porta da direita.", en: "Toward Centro, board through the right-hand door.", options: ["Toward the suburbs, left door", "Toward Centro, board on the right", "Exit on the right", "Train cancelled"], correct: 1 },
          ],
        },
        {
          type: "tip",
          heading: "Taxi vs Uber — and confirm before you ride",
          body: "In Brazilian cities, ride apps are huge — Brazilians say <em>chamar um Uber</em> (to call an Uber) or <em>pedir um carro</em>. For a street taxi (<em>pegar um táxi</em>), make sure the meter (<em>taxímetro</em>) is on, or agree a price first: <em>«Quanto fica até [destino]?»</em> = How much to [destination]? At airports, use the official taxi stand or an app — ignore anyone offering rides inside the terminal.",
          example: { l1: "Vou chamar um Uber, está muito longe pra ir a pé.", en: "I'll call an Uber, it's too far to walk." },
        },
        {
          type: "multipleChoice",
          heading: "On-board check",
          questions: [
            {
              q: "'How do I get to the station?' =",
              options: ["Onde fica o trem?", "Como eu chego à estação?", "Quanto custa a estação?", "Qual a parada?"],
              correct: 1,
            },
            {
              q: "To get off the bus, you…",
              options: ["embarco", "subo", "desço", "recarrego"],
              correct: 2,
              fb: "Descer = to get off / go down. Subir / embarcar = to board.",
            },
            {
              q: "'Chamar um Uber' means…",
              options: ["to wave down a taxi", "to call / request an Uber", "to top up a card", "to miss the train"],
              correct: 1,
            },
            {
              q: "You want to know how far to your stop. You ask…",
              options: [
                "Quanto custa a passagem?",
                "Quantas paradas faltam?",
                "Onde fica a bilheteria?",
                "Posso pagar no cartão?",
              ],
              correct: 1,
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Excuse me, how do I get to the bus station?",
          reference: "Com licença, como eu chego à rodoviária?",
          hint: "'Excuse me' = com licença. 'How do I get to…' = como eu chego a… (a + a rodoviária → à).",
        },
      ],
    },
  ],
  checkpoint: {
    passingPct: 80,
    questions: [
      {
        q: "In Brazil, 'the bus' is…",
        options: ["o autocarro", "o ônibus", "o comboio", "a paragem"],
        correct: 1,
      },
      {
        q: "In Portugal, 'the train' is…",
        options: ["o trem", "o comboio", "o metrô", "o ônibus"],
        correct: 1,
      },
      {
        q: "'Como eu chego a…?' means…",
        options: ["How much is…?", "Where is…?", "How do I get to…?", "What time is…?"],
        correct: 2,
      },
      {
        q: "'Recarregar o cartão' =",
        options: ["to validate the ticket", "to top up the card", "to buy a taxi", "to lose the card"],
        correct: 1,
      },
      {
        q: "The Bilhete Único is…",
        options: [
          "a one-way paper ticket",
          "São Paulo's unified rechargeable transit card",
          "a long-distance bus",
          "a fine",
        ],
        correct: 1,
      },
      {
        q: "'To transfer / change lines' =",
        options: ["fazer baldeação", "descer", "recarregar", "embarcar"],
        correct: 0,
      },
      {
        q: "To get off the bus you…",
        options: ["embarca", "sobe", "desce", "valida"],
        correct: 2,
      },
      {
        q: "'Pegar um táxi' (BR) — the Portuguese equivalent uses…",
        options: ["pegar", "apanhar", "validar", "descer"],
        correct: 1,
      },
      {
        q: "Translate: 'How much is the bus fare?'",
        options: [
          "Onde fica o ônibus?",
          "Quanto custa a passagem de ônibus?",
          "Qual ônibus vai para o centro?",
          "A que horas sai o ônibus?",
        ],
        correct: 1,
      },
      {
        q: "'Ponto de ônibus' (BR) — in Portugal this is…",
        options: ["a estação", "a paragem", "a catraca", "a rodoviária"],
        correct: 1,
      },
    ],
  },
};
