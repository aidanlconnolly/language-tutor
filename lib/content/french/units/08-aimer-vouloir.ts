import type { Unit } from "../../types";

export const UNIT_AIMER_VOULOIR: Unit = {
  slug: "aimer-vouloir",
  stage: 2,
  order: 8,
  icon: "❤️",
  title: "Likes & wants",
  tagline: "J'aime, je voudrais, préférer, savoir vs connaître.",
  lessons: [
    {
      slug: "aimer-vouloir-main",
      title: "Expressing likes, dislikes & desires",
      estMinutes: 10,
      pages: [
        {
          type: "intro",
          heading: "Aimer — the most nuanced verb in French",
          body: [
            "<em>Aimer</em> means both 'to like' and 'to love'. Context matters: <em>J'aime le chocolat</em> (I like chocolate) vs <em>Je t'aime</em> (I love you). To soften it to just 'like' in personal contexts, use <em>j'aime bien</em>.",
            "For desires and polite requests, <em>vouloir</em> (to want) is essential. <strong>Je voudrais</strong> (I would like) is the conditional of vouloir — much more polite than <em>je veux</em> (I want). Always use <em>je voudrais</em> in shops and restaurants.",
            "<em>Préférer</em> (to prefer) takes a direct object or infinitive. The -er verbs with an é-e vowel change in the stem for all but nous/vous: je préfère, tu préfères, but nous préférons.",
          ],
          keyPoint: "j'aime bien = I like. J'aime = I like / I love. Je voudrais (not 'je veux') when asking politely.",
        },
        {
          type: "vocab",
          heading: "Likes, dislikes & preferences",
          items: [
            { l1: "J'aime (bien) le fromage.", en: "I (really) like cheese.", note: "bien softens 'love' to 'like'" },
            { l1: "J'adore les croissants.", en: "I love croissants.", note: "adorer = to love (things)" },
            { l1: "Je n'aime pas les épinards.", en: "I don't like spinach." },
            { l1: "Je déteste les embouteillages.", en: "I hate traffic jams." },
            { l1: "Je préfère le café au thé.", en: "I prefer coffee to tea.", note: "au = à + le" },
            { l1: "Ça me plaît.", en: "I like it. (it pleases me)" },
            { l1: "Je voudrais un café, s'il vous plaît.", en: "I'd like a coffee, please." },
            { l1: "Je veux + infinitive", en: "I want to…", note: "Less polite; reserve for informal" },
          ],
        },
        {
          type: "vocab",
          heading: "Savoir vs connaître — two verbs for 'to know'",
          intro: "This distinction trips up English speakers. Savoir = know a fact / know how to. Connaître = be acquainted with a person, place, or work.",
          items: [
            { l1: "Je sais parler français.", en: "I know how to speak French.", note: "savoir + infinitive = know how to" },
            { l1: "Je sais que Paris est en France.", en: "I know that Paris is in France.", note: "savoir + que = know a fact" },
            { l1: "Je connais Paris.", en: "I know Paris (I've been there).", note: "connaître + place/person" },
            { l1: "Tu connais Marie?", en: "Do you know Marie?", note: "connaître + person" },
            { l1: "Je ne sais pas.", en: "I don't know. (a fact)", note: "most common usage" },
          ],
        },
        {
          type: "dialogue",
          heading: "Talking about preferences",
          lines: [
            { speaker: "Camille", l1: "Tu aimes le vin?", en: "Do you like wine?" },
            { speaker: "You", l1: "J'aime bien le vin rouge. Et toi?", en: "I quite like red wine. And you?" },
            { speaker: "Camille", l1: "Je préfère le rosé. Tu connais le Provence rosé?", en: "I prefer rosé. Do you know Provence rosé?" },
            { speaker: "You", l1: "Non, je ne connais pas. Mais je voudrais essayer!", en: "No, I don't know it. But I'd like to try!" },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Savoir or connaître?",
          questions: [
            {
              q: "Which verb for 'I know how to cook'?",
              options: ["Je connais cuisiner.", "Je sais cuisiner.", "Je veux cuisiner.", "Je préfère cuisiner."],
              correct: 1,
              fb: "'Savoir + infinitive' = know how to. 'Je sais cuisiner' = I know how to cook.",
            },
            {
              q: "Which is more polite in a restaurant?",
              options: ["Je veux un café.", "Je voudrais un café.", "Donne-moi un café.", "Un café."],
              correct: 1,
              fb: "'Je voudrais' (conditional = polite) is the standard register for orders. 'Je veux' is blunt.",
            },
            {
              q: "'Je connais Marie' means…",
              options: ["I know that Marie is here", "I know who Marie is / I'm acquainted with Marie", "I know how to find Marie", "I love Marie"],
              correct: 1,
              fb: "'Connaître' = be acquainted with. 'Je connais Marie' = I know Marie (personally).",
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate",
          direction: "en-to-l1",
          prompt: "I love Paris. Do you know a good restaurant near here?",
          reference: "J'adore Paris. Tu connais un bon restaurant près d'ici?",
          hint: "adorer for love of a place; connaître for being acquainted with",
        },
      ],
    },
    {
      slug: "aimer-vouloir-modaux",
      title: "Pouvoir, devoir & vouloir",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "The three 'modal' verbs that unlock everything",
          body: [
            "<strong>Pouvoir</strong> (can / to be able to), <strong>devoir</strong> (must / to have to), and <strong>vouloir</strong> (to want) are followed directly by an infinitive — no preposition needed: <em>Je peux venir</em> (I can come), <em>Je dois partir</em> (I must leave), <em>Je veux manger</em> (I want to eat).",
            "These three let you express ability, obligation, and desire — the backbone of everyday requests and plans. All three are irregular, so they're worth memorizing as a set.",
            "Their conditional forms are the polite ones you'll use most: <em>je pourrais</em> (I could), <em>je devrais</em> (I should), <em>je voudrais</em> (I would like).",
          ],
          keyPoint: "pouvoir/devoir/vouloir + infinitive (no preposition). Conditional = polite: pourrais, devrais, voudrais.",
        },
        {
          type: "conjugation",
          heading: "Pouvoir — can / to be able to",
          verb: "pouvoir",
          meaning: "can, to be able to",
          tenses: [
            {
              name: "présent",
              forms: [
                { person: "je", form: "peux", en: "I can" },
                { person: "tu", form: "peux", en: "you can" },
                { person: "il/elle/on", form: "peut", en: "he/she/one can" },
                { person: "nous", form: "pouvons", en: "we can" },
                { person: "vous", form: "pouvez", en: "you can" },
                { person: "ils/elles", form: "peuvent", en: "they can" },
              ],
            },
          ],
        },
        {
          type: "conjugation",
          heading: "Devoir & vouloir",
          verb: "devoir / vouloir",
          meaning: "must / to want",
          intro: "Two more irregulars. Note how similar their endings are to pouvoir.",
          tenses: [
            {
              name: "devoir (must)",
              forms: [
                { person: "je", form: "dois", en: "I must" },
                { person: "tu", form: "dois", en: "you must" },
                { person: "il/elle/on", form: "doit", en: "he/she/one must" },
                { person: "nous", form: "devons", en: "we must" },
                { person: "vous", form: "devez", en: "you must" },
                { person: "ils/elles", form: "doivent", en: "they must" },
              ],
            },
            {
              name: "vouloir (to want)",
              forms: [
                { person: "je", form: "veux", en: "I want" },
                { person: "tu", form: "veux", en: "you want" },
                { person: "il/elle/on", form: "veut", en: "he/she/one wants" },
                { person: "nous", form: "voulons", en: "we want" },
                { person: "vous", form: "voulez", en: "you want" },
                { person: "ils/elles", form: "veulent", en: "they want" },
              ],
            },
          ],
        },
        {
          type: "fillBlank",
          heading: "Conjugate the modal",
          items: [
            { template: "Est-ce que je ___ entrer? (pouvoir)", answer: "peux", en: "May I come in?" },
            { template: "Nous ___ partir maintenant. (devoir)", answer: "devons", en: "We must leave now." },
            { template: "Ils ___ visiter le Louvre. (vouloir)", answer: "veulent", en: "They want to visit the Louvre." },
            { template: "Tu ___ m'aider? (pouvoir)", answer: "peux", en: "Can you help me?" },
          ],
        },
        {
          type: "translate",
          heading: "Translate",
          direction: "en-to-l1",
          prompt: "I have to leave, but I want to come back tomorrow.",
          reference: "Je dois partir, mais je veux revenir demain.",
          hint: "must = devoir; want = vouloir; both take an infinitive directly",
        },
      ],
    },
    {
      slug: "aimer-vouloir-loisirs",
      title: "Hobbies & free time",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Jouer à, jouer de, faire de",
          body: [
            "To talk about activities, French uses specific structures. For sports and games: <em>jouer à</em> — <em>jouer au foot</em>, <em>jouer aux cartes</em>. For musical instruments: <em>jouer de</em> — <em>jouer du piano</em>, <em>jouer de la guitare</em>.",
            "Even more common is <em>faire de</em> for activities and sports: <em>faire du vélo</em> (to cycle), <em>faire de la natation</em> (to swim), <em>faire de la randonnée</em> (to hike). Remember <em>de + le = du</em>, <em>de + les = des</em>.",
            "Combine these with the like/want verbs you already know: <em>J'aime faire du vélo</em>, <em>Je voudrais apprendre le piano</em>.",
          ],
          keyPoint: "jouer à + sport/game. jouer de + instrument. faire de + activity. (du / de la / des)",
        },
        {
          type: "vocab",
          heading: "Hobbies & leisure",
          items: [
            { l1: "le temps libre", en: "free time" },
            { l1: "faire du sport", en: "to do sport / exercise" },
            { l1: "jouer au foot / au tennis", en: "to play football / tennis" },
            { l1: "jouer du piano / de la guitare", en: "to play piano / guitar" },
            { l1: "faire du vélo", en: "to cycle / ride a bike" },
            { l1: "la lecture / lire", en: "reading / to read" },
            { l1: "la cuisine / cuisiner", en: "cooking / to cook" },
            { l1: "voyager", en: "to travel" },
            { l1: "se promener", en: "to go for a walk", note: "reflexive verb" },
          ],
        },
        {
          type: "vocab",
          heading: "How often?",
          intro: "Frequency words usually go right after the verb.",
          items: [
            { l1: "toujours", en: "always" },
            { l1: "souvent", en: "often" },
            { l1: "parfois / quelquefois", en: "sometimes" },
            { l1: "rarement", en: "rarely" },
            { l1: "ne … jamais", en: "never", note: "wraps the verb: je ne joue jamais" },
            { l1: "une fois par semaine", en: "once a week" },
            { l1: "tous les jours", en: "every day" },
            { l1: "le week-end", en: "on weekends" },
          ],
        },
        {
          type: "dialogue",
          heading: "Talking about free time",
          lines: [
            { speaker: "Nadia", l1: "Qu'est-ce que tu fais le week-end?", en: "What do you do on weekends?" },
            { speaker: "You", l1: "Je fais souvent du vélo, et j'aime cuisiner.", en: "I often cycle, and I like cooking." },
            { speaker: "Nadia", l1: "Moi, je joue de la guitare. Tu joues d'un instrument?", en: "Me, I play guitar. Do you play an instrument?" },
            { speaker: "You", l1: "Non, mais je voudrais apprendre le piano.", en: "No, but I'd like to learn piano." },
            { speaker: "Nadia", l1: "C'est génial! Tu as le temps?", en: "That's great! Do you have the time?" },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Activity check",
          questions: [
            {
              q: "How do you say 'to play the guitar'?",
              options: ["jouer à la guitare", "jouer de la guitare", "faire la guitare", "jouer guitare"],
              correct: 1,
              fb: "Instruments take 'jouer de': jouer de la guitare, jouer du piano.",
            },
            {
              q: "'Je fais du vélo' means…",
              options: ["I make a bike", "I cycle / ride a bike", "I want a bike", "I sell bikes"],
              correct: 1,
              fb: "'faire du vélo' = to cycle. 'faire de' covers many activities.",
            },
            {
              q: "Where does 'souvent' usually go in 'I often cook'?",
              options: ["Before the subject", "Right after the verb: Je cuisine souvent", "At the very end only", "Before the subject pronoun"],
              correct: 1,
              fb: "Frequency adverbs typically follow the conjugated verb: Je cuisine souvent.",
            },
          ],
        },
      ],
    },
  ],
  checkpoint: {
    passingPct: 80,
    questions: [
      { q: "'Je t'aime' vs 'Je t'aime bien' — the difference?", options: ["I love you vs I like you", "Same meaning", "I know you vs I like you", "Formal vs informal"], correct: 0 },
      { q: "For a polite order in a café, you say…", options: ["Je veux un café.", "Je voudrais un café.", "J'ai besoin un café.", "Donne-moi un café."], correct: 1 },
      { q: "'Je sais' is used for…", options: ["Being acquainted with someone", "Knowing a fact or skill", "Wanting something", "Preferring something"], correct: 1 },
      { q: "'Je connais Paris' means…", options: ["I know the map of Paris", "I've been to / am familiar with Paris", "I can navigate Paris", "I know everything about Paris"], correct: 1 },
      { q: "'Préférer' — what changes in the stem for je/tu/il?", options: ["Nothing", "é → è", "e → é", "e is dropped"], correct: 1 },
      { q: "'Je déteste' means…", options: ["I love", "I prefer", "I hate", "I miss"], correct: 2 },
    ],
  },
};
