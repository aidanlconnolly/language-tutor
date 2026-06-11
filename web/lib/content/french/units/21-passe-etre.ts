import type { Unit } from "../../types";

export const UNIT_PASSE_ETRE: Unit = {
  slug: "passe-etre",
  stage: 5,
  order: 21,
  icon: "🏃",
  title: "Passé composé (être)",
  tagline: "Je suis allé/e — motion verbs, agreement.",
  lessons: [
    {
      slug: "passe-etre-main",
      title: "Passé composé with être",
      estMinutes: 10,
      pages: [
        {
          type: "intro",
          heading: "Certain verbs take être, not avoir",
          body: [
            "Most verbs form the passé composé with avoir. But a specific group use <strong>être</strong> as the auxiliary. The past participle then <strong>agrees in gender and number</strong> with the subject.",
            "The most common être verbs are motion/state verbs — the mnemonic <strong>Dr. & Mrs. Vandertramp</strong> helps: <strong>D</strong>evenir, <strong>R</strong>evenir, <strong>M</strong>onter, <strong>R</strong>ester, <strong>S</strong>ortir, <strong>V</strong>enir, <strong>A</strong>ller, <strong>N</strong>aître, <strong>D</strong>escendre, <strong>E</strong>ntrer, <strong>R</strong>etourner, <strong>T</strong>omber, <strong>R</strong>entrer, <strong>A</strong>rriver, <strong>M</strong>ourir, <strong>P</strong>artir.",
            "Also: all reflexive verbs (se lever, se coucher, s'habiller) use être.",
          ],
          keyPoint: "Être verbs: Dr. & Mrs. Vandertramp + all reflexives. Past participle agrees: je suis allé (m) / allée (f) / allés (m pl) / allées (f pl).",
        },
        {
          type: "conjugation",
          heading: "Aller — to go (passé composé)",
          verb: "aller",
          meaning: "to go (passé composé)",
          tenses: [
            {
              name: "passé composé",
              forms: [
                { person: "je (m)", form: "suis allé", en: "I went (male speaker)" },
                { person: "je (f)", form: "suis allée", en: "I went (female speaker)" },
                { person: "tu (m)", form: "es allé", en: "you went" },
                { person: "il", form: "est allé", en: "he went" },
                { person: "elle", form: "est allée", en: "she went" },
                { person: "nous (m/f)", form: "sommes allés/allées", en: "we went" },
                { person: "vous", form: "êtes allé(s/e/es)", en: "you went" },
                { person: "ils", form: "sont allés", en: "they went (m)" },
                { person: "elles", form: "sont allées", en: "they went (f)" },
              ],
            },
          ],
        },
        {
          type: "vocab",
          heading: "Common être verbs with participles",
          items: [
            { l1: "aller → allé/e", en: "to go → gone" },
            { l1: "venir → venu/e", en: "to come → came" },
            { l1: "partir → parti/e", en: "to leave → left" },
            { l1: "arriver → arrivé/e", en: "to arrive → arrived" },
            { l1: "sortir → sorti/e", en: "to go out → went out" },
            { l1: "entrer → entré/e", en: "to enter → entered" },
            { l1: "monter → monté/e", en: "to go up → went up" },
            { l1: "descendre → descendu/e", en: "to go down → came down" },
            { l1: "naître → né/e", en: "to be born → was born" },
            { l1: "mourir → mort/e", en: "to die → died" },
            { l1: "tomber → tombé/e", en: "to fall → fell" },
            { l1: "rester → resté/e", en: "to stay → stayed" },
          ],
        },
        {
          type: "fillBlank",
          heading: "Fill in the passé composé (être verbs)",
          items: [
            { template: "Elle ___ (aller) à Paris.", answer: "est allée", en: "She went to Paris.", options: ["a allé", "est allée", "est allé", "a été"] },
            { template: "Ils ___ (partir) tôt.", answer: "sont partis", en: "They left early.", options: ["ont parti", "sont parti", "sont partis", "ont partis"] },
            { template: "Je (f) ___ (arriver) à midi.", answer: "suis arrivée", en: "I arrived at noon.", options: ["suis arrivé", "ai arrivée", "suis arrivée", "suis arriver"] },
            { template: "Nous ___ (rester) trois jours.", answer: "sommes restés", en: "We stayed three days.", options: ["avons resté", "sommes restés", "sommes resté", "avons restés"] },
          ],
        },
        {
          type: "translate",
          heading: "Translate",
          direction: "en-to-l1",
          prompt: "She went to the Louvre yesterday and came back very happy.",
          reference: "Elle est allée au Louvre hier et elle est revenue très contente.",
          hint: "revenue = came back (être verb, feminine agreement); contente = happy (f)",
        },
      ],
    },
    {
      slug: "passe-etre-reflexifs",
      title: "Reflexive verbs in the past",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Daily-routine verbs all take être",
          body: [
            "Reflexive verbs (the ones with <em>se</em>: <em>se lever</em>, <em>se coucher</em>, <em>s'habiller</em>, <em>se promener</em>, <em>s'amuser</em>) always form the passé composé with <strong>être</strong>, and the participle agrees with the subject.",
            "The reflexive pronoun stays in front of the auxiliary: <em>je me suis levé(e)</em>, <em>tu t'es levé(e)</em>, <em>il s'est levé</em>, <em>elle s'est levée</em>, <em>nous nous sommes levé(e)s</em>.",
            "These verbs describe routines and feelings, so they're perfect for telling someone about your morning or whether you enjoyed yourself.",
          ],
          keyPoint: "Reflexives use être + agreement: je me suis levé(e). Pronoun (me/te/se…) sits before the auxiliary.",
        },
        {
          type: "conjugation",
          heading: "Se promener — to take a walk (passé composé)",
          verb: "se promener",
          meaning: "to take a walk (passé composé)",
          tenses: [
            {
              name: "passé composé",
              forms: [
                { person: "je me", form: "suis promené(e)", en: "I took a walk" },
                { person: "tu t'", form: "es promené(e)", en: "you took a walk" },
                { person: "il s'", form: "est promené", en: "he took a walk" },
                { person: "elle s'", form: "est promenée", en: "she took a walk" },
                { person: "nous nous", form: "sommes promené(e)s", en: "we took a walk" },
                { person: "ils se", form: "sont promenés", en: "they took a walk" },
              ],
            },
          ],
        },
        {
          type: "vocab",
          heading: "Reflexive routine verbs",
          items: [
            { l1: "se lever → je me suis levé(e)", en: "to get up → I got up" },
            { l1: "se coucher → je me suis couché(e)", en: "to go to bed → I went to bed" },
            { l1: "s'habiller → je me suis habillé(e)", en: "to get dressed → I got dressed" },
            { l1: "se réveiller → je me suis réveillé(e)", en: "to wake up → I woke up" },
            { l1: "s'amuser → je me suis amusé(e)", en: "to have fun → I had fun" },
            { l1: "se reposer → je me suis reposé(e)", en: "to rest → I rested" },
            { l1: "se perdre → je me suis perdu(e)", en: "to get lost → I got lost" },
          ],
        },
        {
          type: "fillBlank",
          heading: "Reflexive past tense",
          items: [
            { template: "Je (f) ___ (se lever) à sept heures.", answer: "me suis levée", en: "I got up at seven." },
            { template: "Ils ___ (s'amuser) à la fête.", answer: "se sont amusés", en: "They had fun at the party." },
            { template: "Elle ___ (se perdre) dans le Marais.", answer: "s'est perdue", en: "She got lost in the Marais." },
            { template: "Nous ___ (se reposer) tout l'après-midi.", answer: "nous sommes reposés", en: "We rested all afternoon." },
          ],
        },
        {
          type: "translate",
          heading: "Translate",
          direction: "en-to-l1",
          prompt: "I woke up early, got dressed, and had a great time.",
          reference: "Je me suis réveillé(e) tôt, je me suis habillé(e), et je me suis bien amusé(e).",
          hint: "all reflexive, all être: me suis réveillé(e) / habillé(e) / amusé(e)",
        },
      ],
    },
    {
      slug: "passe-etre-auxiliaire",
      title: "Avoir or être? Choosing right",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "The verbs that take both",
          body: [
            "A few Vandertramp verbs — <em>monter</em>, <em>descendre</em>, <em>sortir</em>, <em>passer</em>, <em>rentrer</em> — can take <strong>either</strong> auxiliary, and the meaning shifts.",
            "When used <strong>intransitively</strong> (no direct object), they take être: <em>Je suis sorti</em> (I went out). When used <strong>transitively</strong> (with a direct object), they take avoir and the meaning changes: <em>J'ai sorti le chien</em> (I took the dog out), <em>J'ai monté les valises</em> (I carried the suitcases up).",
            "Rule of thumb: if there's a direct object right after the verb, use avoir. Otherwise, use être.",
          ],
          keyPoint: "monter/descendre/sortir/passer: no object → être; with a direct object → avoir (and meaning changes).",
        },
        {
          type: "vocab",
          heading: "Same verb, two auxiliaries",
          items: [
            { l1: "Je suis sorti.", en: "I went out. (être, no object)" },
            { l1: "J'ai sorti la poubelle.", en: "I took out the bin. (avoir + object)" },
            { l1: "Elle est montée.", en: "She went up. (être)" },
            { l1: "Elle a monté les valises.", en: "She carried the suitcases up. (avoir + object)" },
            { l1: "Nous sommes descendus.", en: "We went down. (être)" },
            { l1: "J'ai descendu les escaliers.", en: "I went down the stairs. (avoir + object)" },
            { l1: "Le temps est passé vite.", en: "Time went by fast. (être)" },
            { l1: "J'ai passé un examen.", en: "I took an exam. (avoir + object)" },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Which auxiliary?",
          questions: [
            {
              q: "'I went out last night.' →",
              options: ["J'ai sorti hier soir.", "Je suis sorti hier soir.", "J'ai été sorti hier soir.", "Je sorti hier soir."],
              correct: 1,
              fb: "No object → être: Je suis sorti.",
            },
            {
              q: "'She carried the bags up.' →",
              options: ["Elle est montée les sacs.", "Elle a monté les sacs.", "Elle est monté les sacs.", "Elle a montée les sacs."],
              correct: 1,
              fb: "Direct object (les sacs) → avoir, no agreement with subject: Elle a monté les sacs.",
            },
            {
              q: "What decides whether 'sortir' takes avoir or être?",
              options: ["The subject's gender", "Whether there's a direct object", "The time of day", "It's always être"],
              correct: 1,
              fb: "A direct object after the verb → avoir; otherwise → être.",
            },
          ],
        },
        {
          type: "fillBlank",
          heading: "Choose the auxiliary",
          items: [
            { template: "Hier, je ___ allé au marché. (être/avoir)", answer: "suis", en: "Yesterday I went to the market.", options: ["ai", "suis", "es", "a"] },
            { template: "Elle ___ mangé une crêpe. (être/avoir)", answer: "a", en: "She ate a crêpe.", options: ["est", "a", "as", "ont"] },
            { template: "Nous ___ descendus à pied. (no object)", answer: "sommes", en: "We came down on foot.", options: ["avons", "sommes", "ont", "êtes"] },
            { template: "J'___ sorti les poubelles. (with object)", answer: "ai", en: "I took out the bins.", options: ["suis", "ai", "es", "est"] },
          ],
        },
      ],
    },
  ],
  checkpoint: {
    passingPct: 80,
    questions: [
      { q: "Which verbs use être in passé composé?", options: ["All verbs", "Motion/state verbs (Dr. Vandertramp) + reflexives", "Only irregular verbs", "Only transitive verbs"], correct: 1 },
      { q: "Past participle of 'venir' is…", options: ["venu", "veniré", "veni", "vendu"], correct: 0 },
      { q: "'Elle est partie' means…", options: ["She is a part of it", "She left", "She arrived", "She stayed"], correct: 1 },
      { q: "Why does the past participle agree with the subject in être verbs?", options: ["It's random", "Être verbs are all transitive", "The être auxiliary requires agreement with the subject", "It only happens sometimes"], correct: 2 },
      { q: "'Naître' in passé composé: 'il __'", options: ["a né", "est né", "a naît", "était né"], correct: 1 },
      { q: "All reflexive verbs (se lever, s'habiller) use…", options: ["avoir", "être", "it depends", "aller"], correct: 1 },
    ],
  },
};
