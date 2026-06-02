import type { Unit } from "../../types";

export const UNIT_OPINIONS: Unit = {
  slug: "opinions",
  stage: 8,
  order: 35,
  icon: "🗣️",
  title: "Opinions & debate",
  tagline: "En mi opinión, estoy de acuerdo, sin embargo…",
  lessons: [
    {
      slug: "opinions-expressing",
      title: "Expressing opinions",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Giving your point of view",
          body: [
            "Spanish has a rich set of phrases for expressing opinions, agreeing, disagreeing politely, and debating. Mastering these turns you from a basic communicator into someone who can have genuine conversations.",
            "Notice that 'I think' in Spanish often uses <em>creer</em> or <em>pensar</em>: <em>Creo que</em> / <em>Pienso que</em>. Strong opinions: <em>Estoy convencido/a de que</em>. Softer: <em>Me parece que</em>.",
          ],
        },
        {
          type: "vocab",
          heading: "Expressing opinions",
          items: [
            { l1: "En mi opinión / A mi juicio", en: "In my opinion" },
            { l1: "Creo que / Pienso que", en: "I think that / I believe that" },
            { l1: "Me parece que", en: "It seems to me that / I think that (softer)" },
            { l1: "Desde mi punto de vista", en: "From my point of view" },
            { l1: "Estoy convencido/a de que", en: "I'm convinced that" },
            { l1: "No estoy seguro/a, pero…", en: "I'm not sure, but…" },
            { l1: "Lo que me parece es que…", en: "What seems to me is that…" },
            { l1: "Tengo la impresión de que…", en: "I have the impression that…" },
          ],
        },
        {
          type: "vocab",
          heading: "Agreeing and disagreeing",
          items: [
            { l1: "Estoy de acuerdo (contigo).", en: "I agree (with you)." },
            { l1: "Tienes razón.", en: "You're right." },
            { l1: "Exactamente / Efectivamente.", en: "Exactly / Indeed." },
            { l1: "No estoy de acuerdo.", en: "I disagree." },
            { l1: "No tienes razón.", en: "You're wrong. / You're not right." },
            { l1: "Sin embargo / No obstante", en: "However / Nevertheless" },
            { l1: "Por otro lado…", en: "On the other hand…" },
            { l1: "Depende.", en: "It depends." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Opinion expressions",
          questions: [
            {
              q: "The softest way to say 'I think' is…",
              options: ["Estoy convencido de que", "Me parece que", "Creo que", "Es obvio que"],
              correct: 1,
              fb: "Me parece que = it seems to me / I think. The softest opinion marker — least assertive.",
            },
            {
              q: "How do you say 'You're right'?",
              options: ["Estás correcto", "Tienes razón", "Eres correcto", "Razón tienes"],
              correct: 1,
              fb: "Tener razón = to be right. Tienes razón = you're right (tú form).",
            },
          ],
        },
      ],
    },
    {
      slug: "opinions-debating",
      title: "Building an argument",
      estMinutes: 8,
      pages: [
        {
          type: "vocab",
          heading: "Structuring your argument",
          items: [
            { l1: "Por un lado… por otro…", en: "On one hand… on the other…" },
            { l1: "Hay que tener en cuenta que…", en: "One must take into account that…" },
            { l1: "Es cierto que… pero…", en: "It's true that… but…" },
            { l1: "Lo que es innegable es que…", en: "What is undeniable is that…" },
            { l1: "En resumen / En conclusión", en: "In summary / In conclusion" },
            { l1: "A fin de cuentas", en: "When all is said and done / At the end of the day" },
            { l1: "Cabe destacar que…", en: "It's worth noting that…" },
            { l1: "Dicho esto, …", en: "Having said that, …" },
          ],
        },
        {
          type: "translate",
          heading: "Express this opinion in Spanish",
          direction: "en-to-l1",
          prompt: "In my opinion, it's a great idea.",
          reference: "En mi opinión, es una idea estupenda.",
          hint: "en mi opinión + es + adjective",
        },
        {
          type: "translate",
          heading: "Express this opinion in Spanish",
          direction: "en-to-l1",
          prompt: "On the other hand, it's complicated.",
          reference: "Por otro lado, es complicado.",
          hint: "por otro lado + es complicado",
        },
        {
          type: "multipleChoice",
          heading: "Debate phrases",
          questions: [
            {
              q: "'Hay que tener en cuenta que…' means…",
              options: ["I don't agree that…", "One must take into account that…", "It's important to have…", "It's well known that…"],
              correct: 1,
              fb: "Hay que = one must / you have to. Tener en cuenta = to take into account.",
            },
            {
              q: "'A fin de cuentas' means…",
              options: ["At the end of the accounts", "When all is said and done", "At the end of the story", "In conclusion"],
              correct: 1,
              fb: "A fin de cuentas = when all is said and done / at the end of the day. A useful way to wrap up an argument.",
            },
            {
              q: "How do you say 'I disagree'?",
              options: ["No tienes razón", "No estoy de acuerdo", "Estás equivocado", "All of the above could work"],
              correct: 3,
              fb: "All three work: No estoy de acuerdo (I disagree), No tienes razón (you're wrong), Estás equivocado (you're mistaken).",
            },
          ],
        },
      ],
    },
    {
      slug: "opinions-full-debate",
      title: "A full opinion exchange",
      estMinutes: 7,
      pages: [
        {
          type: "dialogue",
          heading: "Debating a topic",
          lines: [
            { speaker: "Alicia", l1: "En mi opinión, el turismo masivo es perjudicial para las ciudades.", en: "In my opinion, mass tourism is harmful for cities." },
            { speaker: "Bruno", l1: "Entiendo tu punto de vista, pero hay que tener en cuenta los beneficios económicos.", en: "I understand your point of view, but you have to take into account the economic benefits." },
            { speaker: "Alicia", l1: "Es cierto, pero por otro lado destruye la identidad local.", en: "That's true, but on the other hand it destroys local identity." },
            { speaker: "Bruno", l1: "Tienes razón en eso. Lo que es innegable es que se necesita regulación.", en: "You're right about that. What is undeniable is that regulation is needed." },
            { speaker: "Alicia", l1: "Exactamente. A fin de cuentas, hay que encontrar un equilibrio.", en: "Exactly. When all is said and done, we need to find a balance." },
          ],
        },
        {
          type: "vocab",
          heading: "Advanced opinion vocabulary",
          items: [
            { l1: "desde mi perspectiva", en: "from my perspective" },
            { l1: "perjudicial para", en: "harmful to / detrimental to" },
            { l1: "hay que encontrar un equilibrio", en: "we need to find a balance" },
            { l1: "no cabe duda de que", en: "there's no doubt that" },
            { l1: "es preciso que + subjunctive", en: "it is necessary that…" },
            { l1: "en términos generales", en: "generally speaking" },
          ],
        },
        {
          type: "translate",
          heading: "Express this opinion in Spanish",
          direction: "en-to-l1",
          prompt: "In my opinion, we need to find a balance.",
          reference: "En mi opinión, hay que encontrar un equilibrio.",
          hint: "en mi opinión + hay que + infinitive",
        },
      ],
    }
  ],
  checkpoint: {
    passingPct: 80,
    questions: [
      { q: "'Creo que' means…", options: ["I know that", "I think/believe that", "I want that", "I hope that"], correct: 1 },
      { q: "'Tienes razón' means…", options: ["You have a reason", "You're right", "Your reason is…", "You have an argument"], correct: 1 },
      { q: "'Estoy de acuerdo' means…", options: ["I'm ready", "I agree", "I'm correct", "I'm sure"], correct: 1 },
      { q: "The softest way to express an opinion is…", options: ["Estoy convencido de que", "Es obvio que", "Me parece que", "Sé que"], correct: 2 },
      { q: "'Sin embargo' means…", options: ["Also", "Therefore", "However", "Because"], correct: 2 },
      { q: "'Por otro lado' means…", options: ["From the other side", "On the other hand", "On one side", "For another reason"], correct: 1 },
      { q: "'No estoy de acuerdo' means…", options: ["I agree", "I disagree", "I'm not sure", "I don't understand"], correct: 1 },
      { q: "'En resumen' means…", options: ["In summary", "In my opinion", "In conclusion (same as A)", "Both A and C"], correct: 3 },
      { q: "'Hay que tener en cuenta que' means…", options: ["It's possible that", "We should remember that", "One must take into account that", "It's known that"], correct: 2 },
      { q: "'A fin de cuentas' means…", options: ["At the end of the accounts", "When all is said and done", "In the end", "Both B and C"], correct: 3 },
    ],
  },
};
