import type { Unit } from "../types";

export const UNIT_COMPLAINTS: Unit = {
  slug: "complaints",
  stage: 6,
  order: 28,
  icon: "📣",
  title: "Complaints & returns",
  tagline: "Vorrei un rimborso, non funziona — escalating politely when something goes wrong.",
  badge: "tourist",
  lessons: [
    {
      slug: "complaints-soft-opening",
      title: "The polite complaint opener",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Italian complaint culture: soft, indirect, escalating",
          body: [
            "Italians dislike direct confrontation in service contexts. The trick is to <strong>start very soft</strong>, then escalate only if needed.",
            "<strong>Level 1 (soft):</strong> <em>«Mi scusi, ma c'è un piccolo problema…»</em>",
            "<strong>Level 2 (firmer):</strong> <em>«Vorrei segnalare che…»</em> (I'd like to point out that…)",
            "<strong>Level 3 (firm but polite):</strong> <em>«Non è accettabile. Vorrei parlare con il responsabile.»</em>",
            "<strong>Level 4 (escalate):</strong> <em>«Vorrei fare un reclamo formale.»</em> (I'd like to file a formal complaint.)",
            "Skip Level 1 and you'll be marked as a difficult customer. Go through the levels and you'll usually get a solution fast.",
          ],
          keyPoint:
            "Always START soft: 'Mi scusi, ma c'è un piccolo problema'. Escalate only if needed. Avoid 'voglio', use 'vorrei'.",
        },
        {
          type: "vocab",
          heading: "Complaint vocabulary",
          items: [
            { it: "il problema", en: "the problem" },
            { it: "non funziona", en: "it doesn't work" },
            { it: "è rotto / rotta", en: "it's broken (m / f)" },
            { it: "è guasto / guasta", en: "it's out of order" },
            { it: "non va bene", en: "it's not okay" },
            { it: "non sono soddisfatto / a", en: "I'm not satisfied (m / f)" },
            { it: "mi aspettavo (di più)", en: "I expected (more)" },
            { it: "vorrei segnalare", en: "I'd like to point out / report" },
            { it: "il reclamo", en: "the formal complaint" },
            { it: "il responsabile / il direttore", en: "the manager / director" },
            { it: "il rimborso", en: "the refund" },
            { it: "il cambio", en: "the exchange (item)" },
            { it: "il reso", en: "the return" },
            { it: "la garanzia", en: "the warranty" },
            { it: "uno sconto", en: "a discount" },
          ],
        },
        {
          type: "tip",
          heading: "Use the conditional — vorrei, potrei, dovrei",
          body: "The conditional softens everything. Avoid: <em>«Voglio un rimborso»</em> (sounds demanding). Use: <em>«Vorrei un rimborso»</em> (polite). Same with: <em>«Potrebbe controllare?»</em> (could you check?), <em>«Sarebbe possibile cambiarlo?»</em> (would it be possible to exchange it?). Conditional comes formally in unit 33 — these phrases are worth knowing now.",
        },
        {
          type: "multipleChoice",
          heading: "Which opener?",
          questions: [
            {
              q: "Best way to start a complaint =",
              options: [
                "Voglio parlare con il manager!",
                "Mi scusi, ma c'è un piccolo problema…",
                "Questo è inaccettabile!",
                "Non sono soddisfatto!",
              ],
              correct: 1,
            },
            {
              q: "Most demanding-sounding =",
              options: ["Vorrei…", "Voglio…", "Sarebbe possibile…", "Potrebbe…?"],
              correct: 1,
            },
            {
              q: "'It doesn't work' =",
              options: ["Non lavora.", "Non funziona.", "Non va.", "Both B and C work."],
              correct: 3,
              fb: "Both 'non funziona' and 'non va' are common. 'Non lavora' is a literal English-to-Italian translation that sounds odd.",
            },
            {
              q: "'I'd like to speak to the manager' =",
              options: [
                "Voglio parlare con il manager.",
                "Vorrei parlare con il responsabile.",
                "Devo parlare con il direttore.",
                "Both B and C work — B is more common.",
              ],
              correct: 3,
            },
          ],
        },
      ],
    },
    {
      slug: "complaints-restaurant-hotel",
      title: "Complaining at restaurants and hotels",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Two contexts where you'll need this",
          body: [
            "<strong>Restaurant problems:</strong> wrong dish, cold food, long wait, error on the bill, allergen in dish.",
            "<strong>Hotel problems:</strong> noisy room, AC/heat broken, no hot water, dirty bathroom, missing items, wrong room.",
            "The script: identify the problem → ask politely for resolution → say thank you when fixed.",
            "Avoid: making a scene in front of other guests, raising your voice, threatening reviews. Italians especially dislike American-style \"I demand to speak to your manager\" — it sounds aggressive.",
          ],
          keyPoint:
            "Identify problem → ask politely → thank when fixed. Avoid public scenes. The conditional ('vorrei') keeps the temperature low.",
        },
        {
          type: "dialogue",
          heading: "Wrong dish at the restaurant",
          setup: "The waiter brings you tagliatelle al ragù, but you ordered cacio e pepe.",
          lines: [
            { speaker: "You", it: "Mi scusi, c'è un piccolo errore. Avevo ordinato la cacio e pepe, non le tagliatelle.", en: "Excuse me, there's a small mistake. I had ordered the cacio e pepe, not the tagliatelle." },
            { speaker: "Cameriere", it: "Oh, mi dispiace tantissimo! Devo aver scambiato i tavoli. Le porto subito la cacio e pepe.", en: "Oh, I'm so sorry! I must have mixed up the tables. I'll bring you the cacio e pepe right away." },
            { speaker: "You", it: "Grazie. Quanto tempo ci vuole?", en: "Thanks. How long will it take?" },
            { speaker: "Cameriere", it: "Cinque minuti, glielo dico al cuoco di farla per prima.", en: "Five minutes, I'll tell the chef to do it first." },
            { speaker: "You", it: "Perfetto, nessun problema.", en: "Perfect, no problem." },
          ],
        },
        {
          type: "dialogue",
          heading: "Hotel room issue",
          setup: "You go to reception about a noisy room.",
          lines: [
            { speaker: "You", it: "Buonasera. Scusi se La disturbo, ma vorrei segnalare un problema con la camera.", en: "Good evening. Sorry to bother you, but I'd like to report a problem with the room." },
            { speaker: "Receptionist", it: "Mi dica.", en: "Tell me." },
            { speaker: "You", it: "La camera dà sulla strada e c'è troppo rumore. Sarebbe possibile cambiarmi camera?", en: "The room faces the street and there's too much noise. Would it be possible to change my room?" },
            { speaker: "Receptionist", it: "Capisco. Un attimo che controllo… Sì, ho una camera al quarto piano, sul cortile interno. Molto più silenziosa.", en: "I understand. One moment, let me check… Yes, I have a room on the fourth floor, facing the inner courtyard. Much quieter." },
            { speaker: "You", it: "Perfetto, La ringrazio.", en: "Perfect, thank you." },
            { speaker: "Receptionist", it: "Le prepariamo le chiavi subito. Mi scusi per il disagio.", en: "We'll prepare the keys right away. I apologize for the inconvenience." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Complaint-phrase fill",
          items: [
            {
              template: "Vorrei ___ un problema con la camera.",
              answer: "segnalare",
              en: "I'd like to report a problem with the room.",
              options: ["chiedere", "segnalare", "parlare", "dire"],
            },
            {
              template: "Mi ___ , ma questa carbonara è fredda.",
              answer: "scusi",
              en: "Excuse me, but this carbonara is cold.",
              options: ["scusa", "scusi", "perdono", "scusate"],
            },
            {
              template: "L'aria condizionata non ___ .",
              answer: "funziona",
              en: "The air conditioning isn't working.",
              options: ["va", "funziona", "Both work — common", "lavora"],
            },
            {
              template: "Vorrei parlare con il ___ , per favore.",
              answer: "responsabile",
              en: "I'd like to speak with the manager, please.",
              options: ["responsabile", "cliente", "cameriere", "direttori"],
            },
            {
              template: "Sarebbe possibile ___ camera?",
              answer: "cambiare",
              en: "Would it be possible to change rooms?",
              options: ["pagare", "cambiare", "comprare", "vendere"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-it",
          prompt: "Excuse me, the food is cold. Could you reheat it?",
          reference: "Mi scusi, il cibo è freddo. Potrebbe riscaldarlo?",
          hint: "'Potrebbe…?' = could you…? (conditional). 'Riscaldarlo' = reheat it (lo = it).",
        },
      ],
    },
    {
      slug: "complaints-returns",
      title: "Returns, refunds, defective items",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Returns are legally protected — but expect friction",
          body: [
            "EU law gives you <strong>14 days</strong> to return online purchases for any reason. In-store returns depend on shop policy (often 14-30 days for unworn items with receipt).",
            "Defective items have a 2-year warranty (<em>garanzia legale</em>) for any consumer product.",
            "The script: bring the item + receipt → explain the problem → ask for <em>rimborso</em> (refund) or <em>cambio</em> (exchange).",
            "Some shops resist refunds, push for credit. Stay polite but firm: <em>«Mi spiace, ma vorrei il rimborso, non un buono.»</em>",
          ],
          keyPoint:
            "Returns: 14-30 days with receipt. Defective: 2-year warranty (garanzia legale). Push for rimborso, decline buoni.",
        },
        {
          type: "vocab",
          heading: "Returns & refunds vocabulary",
          items: [
            { it: "il rimborso", en: "the refund (money back)" },
            { it: "il cambio / lo scambio", en: "the exchange" },
            { it: "il reso", en: "the return (act of returning)" },
            { it: "la garanzia", en: "the warranty" },
            { it: "il buono / il voucher", en: "store credit / voucher" },
            { it: "difettoso / a", en: "defective" },
            { it: "guasto / a", en: "broken / out of order" },
            { it: "rotto / a", en: "broken" },
            { it: "non funziona più", en: "it no longer works" },
            { it: "mai usato / indossato", en: "never used / worn" },
            { it: "ancora con l'etichetta", en: "still with the tag" },
            { it: "entro X giorni", en: "within X days" },
            { it: "lo scontrino / la ricevuta", en: "the receipt" },
          ],
        },
        {
          type: "dialogue",
          heading: "Returning a defective product",
          setup: "You bought a pair of headphones three days ago, but they don't pair.",
          lines: [
            { speaker: "You", it: "Buongiorno. Ho comprato queste cuffie tre giorni fa e non funzionano. Vorrei un rimborso.", en: "Hello. I bought these headphones three days ago and they don't work. I'd like a refund." },
            { speaker: "Commessa", it: "Cosa esattamente non funziona?", en: "What exactly doesn't work?" },
            { speaker: "You", it: "Non si collegano al telefono. Ho provato con due telefoni diversi.", en: "They don't pair with the phone. I tried with two different phones." },
            { speaker: "Commessa", it: "Ha lo scontrino?", en: "Do you have the receipt?" },
            { speaker: "You", it: "Sì, eccolo.", en: "Yes, here it is." },
            { speaker: "Commessa", it: "Va bene. Posso offrirLe il cambio o il rimborso?", en: "Okay. Can I offer you an exchange or a refund?" },
            { speaker: "You", it: "Preferisco il rimborso, grazie.", en: "I prefer the refund, thank you." },
            { speaker: "Commessa", it: "Va bene. Il rimborso va sulla carta usata, entro tre giorni lavorativi.", en: "Okay. The refund goes on the card you used, within three business days." },
            { speaker: "You", it: "Perfetto, grazie.", en: "Perfect, thank you." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Refund fill",
          items: [
            {
              template: "Vorrei un ___ , per favore.",
              answer: "rimborso",
              en: "I'd like a refund, please.",
              options: ["sconto", "rimborso", "cambio", "scontrino"],
            },
            {
              template: "Il prodotto è ___ , non funziona.",
              answer: "difettoso",
              en: "The product is defective, it doesn't work.",
              options: ["nuovo", "difettoso", "usato", "valido"],
            },
            {
              template: "Ho lo ___ , se serve.",
              answer: "scontrino",
              en: "I have the receipt, if needed.",
              options: ["scontrino", "rimborso", "cambio", "garanzia"],
            },
            {
              template: "Preferisco il rimborso al ___ , se possibile.",
              answer: "buono",
              en: "I prefer the refund to the store credit, if possible.",
              options: ["buono", "voucher", "Both work — buono is more Italian", "cambio"],
            },
            {
              template: "Mai indossato, ancora con l' ___ .",
              answer: "etichetta",
              en: "Never worn, still with the tag.",
              options: ["etichetta", "scontrino", "garanzia", "marca"],
            },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the refund request",
          items: [
            { tokens: ["Vorrei", "un", "rimborso", ",", "per", "favore", "."], en: "I'd like a refund, please." },
            { tokens: ["Le", "scarpe", "sono", "rotte", "dopo", "due", "giorni", "."], en: "The shoes broke after two days." },
            { tokens: ["È", "ancora", "in", "garanzia", "?"], en: "Is it still under warranty?" },
            { tokens: ["Preferisco", "il", "rimborso", ",", "non", "il", "buono", "."], en: "I prefer the refund, not the store credit." },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-it",
          prompt: "I'd like to return this product. It's defective.",
          reference: "Vorrei restituire questo prodotto. È difettoso.",
          hint: "Restituire = to return (also: 'fare il reso'). Difettoso = defective.",
        },
        {
          type: "tip",
          heading: "If the shop refuses",
          body: "If a shop digs in: stay calm, ask for the <em>responsabile</em>, and politely mention the law. For defective items you can say <em>«C'è la garanzia legale di due anni — è un mio diritto.»</em> = There's the two-year legal warranty — it's my right. For online: file a chargeback with your credit card. Don't argue at length in the shop — escalate to consumer protection (Codacons) if it gets bad.",
        },
      ],
    },
  ],
  checkpoint: {
    passingPct: 80,
    questions: [
      {
        q: "Best complaint opener =",
        options: [
          "Voglio parlare con il manager subito!",
          "Mi scusi, ma c'è un piccolo problema…",
          "Questo è inaccettabile!",
          "Non sono per niente soddisfatto.",
        ],
        correct: 1,
      },
      {
        q: "'It doesn't work' (most natural) =",
        options: ["Non lavora.", "Non funziona.", "Non opera.", "Non aiuta."],
        correct: 1,
      },
      {
        q: "'I'd like a refund' =",
        options: [
          "Voglio un rimborso.",
          "Vorrei un rimborso.",
          "Posso un rimborso.",
          "Mi dia un rimborso.",
        ],
        correct: 1,
      },
      {
        q: "EU law gives you how many days to return an online purchase?",
        options: ["7", "14", "30", "60"],
        correct: 1,
      },
      {
        q: "Legal warranty on defective consumer products =",
        options: ["6 months", "1 year", "2 years", "no warranty"],
        correct: 2,
      },
      {
        q: "'Could you check?' (polite) =",
        options: [
          "Controlli!",
          "Puoi controllare?",
          "Potrebbe controllare?",
          "Devi controllare.",
        ],
        correct: 2,
      },
      {
        q: "'The manager / person in charge' =",
        options: [
          "il manager",
          "il responsabile / il direttore",
          "il capo",
          "All work, but responsabile / direttore are most common in Italian",
        ],
        correct: 3,
      },
      {
        q: "'Store credit / voucher' =",
        options: ["il rimborso", "il buono", "il cambio", "il reso"],
        correct: 1,
      },
      {
        q: "Translate: 'The air conditioning doesn't work. Could you fix it?'",
        options: [
          "L'aria condizionata non funziona. Sistemi!",
          "L'aria condizionata non lavora. Puoi sistemare?",
          "L'aria condizionata non funziona. Potrebbe sistemarla?",
          "Devo l'aria condizionata.",
        ],
        correct: 2,
      },
      {
        q: "Best practice for Italian-style complaints =",
        options: [
          "raise your voice immediately to be taken seriously",
          "start soft, escalate only if needed",
          "always demand to speak to the manager first",
          "leave a bad review without complaining in person",
        ],
        correct: 1,
      },
    ],
  },
};
