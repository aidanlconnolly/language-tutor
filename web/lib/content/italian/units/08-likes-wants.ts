import type { Unit } from "../../types";

export const UNIT_LIKES_WANTS: Unit = {
  slug: "likes-wants",
  stage: 2,
  order: 8,
  icon: "❤️",
  title: "Likes & wants",
  tagline: "Mi piace, vorrei, preferisco — and the famous sapere vs conoscere split.",
  badge: "core",
  lessons: [
    {
      slug: "likes-piace",
      title: "Mi piace — the backwards verb",
      estMinutes: 10,
      pages: [
        {
          type: "intro",
          heading: "Italian doesn't say 'I like X' — it says 'X is pleasing to me'",
          body: [
            "<em>Piacere</em> = to be pleasing. The thing you like is the SUBJECT; you are the indirect object. <em>Mi piace il caffè</em> = literally \"To me, coffee is pleasing.\"",
            "If the thing is singular → <strong>mi piace</strong>. If plural → <strong>mi piacciono</strong>. This is the most common error English speakers make.",
            "Other people: <em>ti piace</em> (you like), <em>gli piace</em> (he likes), <em>le piace</em> (she likes), <em>ci piace</em> (we like), <em>vi piace</em> (you all like), <em>a loro piace</em> (they like).",
          ],
          keyPoint:
            "Singular thing → mi piace. Plural things → mi piacciono. Always.",
        },
        {
          type: "conjugation",
          heading: "Mi piace / Mi piacciono",
          verb: "piacere",
          meaning: "to be pleasing (= to like, backwards)",
          intro: "The verb agrees with the THING liked, not the person liking.",
          tenses: [
            {
              name: "Singular thing",
              forms: [
                { person: "Mi", form: "Mi piace il caffè.", en: "I like coffee." },
                { person: "Ti", form: "Ti piace la pizza.", en: "You like pizza." },
                { person: "Gli / Le", form: "Gli piace il vino.", en: "He likes wine. (Le piace = she likes)" },
                { person: "Ci", form: "Ci piace Roma.", en: "We like Rome." },
                { person: "Vi", form: "Vi piace il museo?", en: "Do you all like the museum?" },
                { person: "A loro", form: "A loro piace l'arte.", en: "They like art." },
              ],
            },
            {
              name: "Plural things",
              forms: [
                { person: "Mi", form: "Mi piacciono i libri.", en: "I like books." },
                { person: "Ti", form: "Ti piacciono i gatti?", en: "Do you like cats?" },
                { person: "Gli / Le", form: "Le piacciono i fiori.", en: "She likes flowers." },
                { person: "Ci", form: "Ci piacciono le piazze.", en: "We like (the) piazzas." },
                { person: "Vi", form: "Vi piacciono gli spaghetti?", en: "Do you all like spaghetti?" },
                { person: "A loro", form: "A loro piacciono i musei.", en: "They like museums." },
              ],
            },
          ],
        },
        {
          type: "tip",
          heading: "Verbs after piace stay in the infinitive — and are singular",
          body: "When you like DOING something, keep the verb in the infinitive and use <em>piace</em> (singular). <em>Mi piace mangiare</em> = I like to eat. <em>Mi piace cucinare e ballare</em> = I like cooking and dancing. Even with two verbs it stays <em>piace</em>, not <em>piacciono</em>.",
          example: { l1: "Mi piace viaggiare in Italia.", en: "I like traveling in Italy." },
        },
        {
          type: "multipleChoice",
          heading: "Piace or piacciono?",
          questions: [
            {
              q: "Mi ___ i film italiani.",
              options: ["piace", "piaci", "piacciono", "piaccio"],
              correct: 2,
              fb: "Plural (i film) → piacciono.",
            },
            {
              q: "Ti ___ camminare?",
              options: ["piace", "piaci", "piacciono", "piacete"],
              correct: 0,
              fb: "Verbs in the infinitive count as singular → piace.",
            },
            {
              q: "Le ___ la cucina romana.",
              options: ["piace", "piaci", "piacciono", "piacciamo"],
              correct: 0,
              fb: "Singular (la cucina) → piace. Le = to her.",
            },
            {
              q: "A noi ___ gli aperitivi.",
              options: ["piace", "piacciono", "piaci", "ci piace"],
              correct: 1,
              fb: "Plural (gli aperitivi) → piacciono.",
            },
            {
              q: "Negative: 'I don't like the metro' =",
              options: [
                "Mi non piace la metro.",
                "Non mi piace la metro.",
                "Mi piace non la metro.",
                "Non piace mi la metro.",
              ],
              correct: 1,
              fb: "Non goes before mi: 'Non mi piace…'",
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "I like Italian food but I don't like spicy dishes.",
          reference: "Mi piace il cibo italiano ma non mi piacciono i piatti piccanti.",
          hint: "Cibo is singular → piace. Piatti is plural → piacciono. 'Non' goes before 'mi'.",
        },
      ],
    },
    {
      slug: "likes-vorrei-preferisco",
      title: "Vorrei & preferisco — wants and preferences",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Vorrei = I'd like — the polite default",
          body: [
            "<em>Vorrei</em> is the conditional form of <em>volere</em> (to want). It's softer than <em>voglio</em> (\"I want\"), which can sound demanding. Use <strong>vorrei</strong> ordering at bars, restaurants, shops — always.",
            "<em>Vorrei un caffè. Vorrei vedere il menù. Vorrei una camera con vista.</em> — \"I'd like a coffee. I'd like to see the menu. I'd like a room with a view.\"",
            "<em>Preferisco</em> = I prefer. It's an <strong>-isc-</strong> verb (preferire), so io/tu/lui/loro forms add -isc-: prefer<strong>isc</strong>o, prefer<strong>isc</strong>i, prefer<strong>isc</strong>e, preferiamo, preferite, prefer<strong>isc</strong>ono.",
          ],
          keyPoint:
            "Vorrei = I'd like (polite request). Voglio = I want (more direct). Preferisco = I prefer.",
        },
        {
          type: "conjugation",
          heading: "Preferire — to prefer (-isc- verb)",
          verb: "preferire",
          meaning: "to prefer",
          tenses: [
            {
              name: "Present",
              forms: [
                { person: "io", form: "preferisco", en: "I prefer" },
                { person: "tu", form: "preferisci", en: "you prefer" },
                { person: "lui/lei", form: "preferisce", en: "he/she prefers" },
                { person: "noi", form: "preferiamo", en: "we prefer (no -isc-!)" },
                { person: "voi", form: "preferite", en: "you all prefer (no -isc-!)" },
                { person: "loro", form: "preferiscono", en: "they prefer" },
              ],
            },
          ],
        },
        {
          type: "vocab",
          heading: "Other handy -isc- verbs",
          intro: "Same pattern as preferire — insert -isc- in io/tu/lui/loro.",
          items: [
            { l1: "capire", en: "to understand (capisco, capisci, capisce…)" },
            { l1: "finire", en: "to finish (finisco, finisci…)" },
            { l1: "pulire", en: "to clean (pulisco…)" },
            { l1: "spedire", en: "to send (spedisco…)" },
            { l1: "costruire", en: "to build (costruisco…)" },
          ],
        },
        {
          type: "dialogue",
          heading: "At the bar",
          setup: "You order coffee.",
          lines: [
            { speaker: "Barista", l1: "Buongiorno! Mi dica.", en: "Good morning! Tell me." },
            { speaker: "You", l1: "Vorrei un cappuccino e un cornetto, per favore.", en: "I'd like a cappuccino and a cornetto, please." },
            { speaker: "Barista", l1: "Il cornetto lo preferisce semplice, alla crema o alla marmellata?", en: "Do you prefer the cornetto plain, with cream, or with jam?" },
            { speaker: "You", l1: "Preferisco alla crema.", en: "I prefer cream." },
            { speaker: "Barista", l1: "Subito! Vuole anche un bicchiere d'acqua?", en: "Right away! Would you also like a glass of water?" },
            { speaker: "You", l1: "No, grazie, va bene così.", en: "No thanks, that's fine." },
          ],
        },
        {
          type: "orderWords",
          heading: "Order the polite request",
          items: [
            { tokens: ["Vorrei", "un", "tavolo", "per", "due", ",", "per", "favore"], en: "I'd like a table for two, please." },
            { tokens: ["Preferisco", "il", "vino", "rosso", "al", "vino", "bianco"], en: "I prefer red wine to white wine." },
            { tokens: ["Vorremmo", "vedere", "il", "menù", ",", "grazie"], en: "We'd like to see the menu, thank you." },
            { tokens: ["Cosa", "preferisci", ",", "la", "pizza", "o", "la", "pasta", "?"], en: "What do you prefer, pizza or pasta?" },
          ],
        },
        {
          type: "fillBlank",
          heading: "Conjugate or pick",
          items: [
            {
              template: "Io ___ il caffè senza zucchero. (preferire)",
              answer: "preferisco",
              en: "I prefer coffee without sugar.",
              options: ["preferisco", "preferisci", "preferisce", "preferiamo"],
            },
            {
              template: "Loro ___ uscire la sera. (preferire)",
              answer: "preferiscono",
              en: "They prefer going out in the evening.",
              options: ["preferisce", "preferiamo", "preferiscono", "preferiscono"],
            },
            {
              template: "___ una camera doppia per due notti.",
              answer: "Vorrei",
              en: "I'd like a double room for two nights.",
              options: ["Voglio", "Vorrei", "Preferisco", "Posso"],
            },
            {
              template: "Noi non ___ l'italiano. (capire)",
              answer: "capiamo",
              en: "We don't understand Italian.",
              options: ["capisco", "capisciamo", "capiamo", "capiscono"],
            },
          ],
        },
      ],
    },
    {
      slug: "likes-sapere-conoscere",
      title: "Sapere vs conoscere — two verbs for 'to know'",
      estMinutes: 10,
      pages: [
        {
          type: "intro",
          heading: "Italian splits 'know' into two verbs",
          body: [
            "<strong>Sapere</strong> = to know a FACT, or to know HOW to do something. <em>So che Marco è italiano.</em> (I know that Marco is Italian.) <em>So nuotare.</em> (I know how to swim.) Followed by a clause, a fact, or an infinitive.",
            "<strong>Conoscere</strong> = to know a PERSON or PLACE — to be familiar with. <em>Conosco Marco.</em> (I know Marco.) <em>Conosci Roma?</em> (Do you know Rome / are you familiar with Rome?)",
            "Test: can you replace 'know' with 'know how to' or 'know that'? → <strong>sapere</strong>. Replace with 'be familiar with' → <strong>conoscere</strong>.",
          ],
          keyPoint:
            "Sapere = facts + how-to. Conoscere = people + places + things you've experienced.",
        },
        {
          type: "conjugation",
          heading: "Sapere — irregular",
          verb: "sapere",
          meaning: "to know (facts, how-to)",
          tenses: [
            {
              name: "Present",
              forms: [
                { person: "io", form: "so", en: "I know" },
                { person: "tu", form: "sai", en: "you know" },
                { person: "lui/lei", form: "sa", en: "he/she knows" },
                { person: "noi", form: "sappiamo", en: "we know" },
                { person: "voi", form: "sapete", en: "you all know" },
                { person: "loro", form: "sanno", en: "they know" },
              ],
            },
          ],
        },
        {
          type: "conjugation",
          heading: "Conoscere — regular -ere",
          verb: "conoscere",
          meaning: "to know (people, places)",
          tenses: [
            {
              name: "Present",
              forms: [
                { person: "io", form: "conosco", en: "I know" },
                { person: "tu", form: "conosci", en: "you know" },
                { person: "lui/lei", form: "conosce", en: "he/she knows" },
                { person: "noi", form: "conosciamo", en: "we know" },
                { person: "voi", form: "conoscete", en: "you all know" },
                { person: "loro", form: "conoscono", en: "they know" },
              ],
            },
          ],
        },
        {
          type: "tip",
          heading: "The classic translation trap",
          body: "In English, \"Do you know Marco?\" and \"Do you know where Marco lives?\" both use \"know\" — but Italian splits them. <em>Conosci Marco?</em> (knowing the person) vs <em>Sai dove abita Marco?</em> (knowing a fact). Always ask: is this a fact/skill, or a person/place I've met/been to?",
          example: { l1: "Conosco Roma, ma non so come arrivare al Colosseo.", en: "I know Rome, but I don't know how to get to the Colosseum." },
        },
        {
          type: "multipleChoice",
          heading: "Sapere or conoscere?",
          questions: [
            {
              q: "'I know Marco.' →",
              options: ["So Marco.", "Conosco Marco.", "Sappio Marco.", "Conosciuto Marco."],
              correct: 1,
              fb: "A person → conoscere.",
            },
            {
              q: "'I know how to cook.' →",
              options: ["Conosco cucinare.", "So cucinare.", "Sono cucinare.", "Sa cucinare."],
              correct: 1,
              fb: "How to do something → sapere + infinitive.",
            },
            {
              q: "'Do you know this city?' →",
              options: ["Sai questa città?", "Conosci questa città?", "Conoscete questa città?", "Sapete questa città?"],
              correct: 1,
              fb: "A place → conoscere.",
            },
            {
              q: "'I don't know what time it is.' →",
              options: [
                "Non conosco che ora è.",
                "Non so che ora è.",
                "Non sappiamo che ora è.",
                "Non conosciamo l'ora.",
              ],
              correct: 1,
              fb: "A fact → sapere.",
            },
            {
              q: "'We know Italian.' (as in: speak it) →",
              options: [
                "Conosciamo l'italiano.",
                "Sappiamo l'italiano.",
                "Both work — Italian uses either.",
                "Sappiamo l'italiano well.",
              ],
              correct: 2,
              fb: "Tricky! Languages can go either way. 'Sappiamo l'italiano' (we have the skill) and 'Conosciamo l'italiano' (we're familiar with it) are both used.",
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "I know her name but I don't know her well.",
          reference: "So il suo nome ma non la conosco bene.",
          hint: "Name = a fact (sapere). Knowing her = a person (conoscere).",
        },
        {
          type: "dialogue",
          heading: "Putting it together",
          setup: "Two friends planning a trip.",
          lines: [
            { speaker: "Anna", l1: "Conosci Firenze?", en: "Do you know Florence?" },
            { speaker: "Marco", l1: "Sì, la conosco bene. Ci sono stato tre volte.", en: "Yes, I know it well. I've been there three times." },
            { speaker: "Anna", l1: "Sai dov'è un buon ristorante vicino agli Uffizi?", en: "Do you know where a good restaurant near the Uffizi is?" },
            { speaker: "Marco", l1: "So che c'è una trattoria in via dei Neri. Ma non conosco il proprietario.", en: "I know there's a trattoria on via dei Neri. But I don't know the owner." },
            { speaker: "Anna", l1: "Perfetto. Andiamo!", en: "Perfect. Let's go!" },
          ],
        },
      ],
    },
  ],
  checkpoint: {
    passingPct: 80,
    questions: [
      {
        q: "'I like coffee.' =",
        options: ["Io piaccio il caffè.", "Mi piace il caffè.", "Mi piacciono il caffè.", "Mi piaco il caffè."],
        correct: 1,
      },
      {
        q: "'I like books.' =",
        options: ["Mi piace i libri.", "Mi piacciono i libri.", "Ho piace i libri.", "Mi piacciono il libri."],
        correct: 1,
      },
      {
        q: "'I like to travel.' =",
        options: ["Mi piacciono viaggiare.", "Mi piace viaggiare.", "Mi piace viaggio.", "Io piacere viaggiare."],
        correct: 1,
      },
      {
        q: "Polite 'I'd like a coffee.' =",
        options: ["Voglio un caffè.", "Vorrei un caffè.", "Mi piace un caffè.", "Posso un caffè."],
        correct: 1,
      },
      {
        q: "Conjugate preferire for 'noi':",
        options: ["preferisco", "preferiscono", "preferiamo", "preferiscamo"],
        correct: 2,
      },
      {
        q: "'I know Marco' →",
        options: ["So Marco.", "Conosco Marco.", "Conoscio Marco.", "Sappio Marco."],
        correct: 1,
      },
      {
        q: "'I know how to swim' →",
        options: ["Conosco nuotare.", "So nuotare.", "Sono nuotare.", "Faccio nuotare."],
        correct: 1,
      },
      {
        q: "Conjugate sapere for 'io':",
        options: ["sappo", "so", "saio", "sai"],
        correct: 1,
      },
      {
        q: "'Do you know Rome?' (informal) =",
        options: ["Sai Roma?", "Conosci Roma?", "Sapete Roma?", "Conosceti Roma?"],
        correct: 1,
      },
      {
        q: "'They don't understand' (capire) =",
        options: ["Non capono.", "Non capiscano.", "Non capiscono.", "Non capete."],
        correct: 2,
      },
    ],
  },
};
