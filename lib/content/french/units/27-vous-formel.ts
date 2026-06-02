import type { Unit } from "../../types";

export const UNIT_VOUS_FORMEL: Unit = {
  slug: "vous-formel",
  stage: 6,
  order: 27,
  icon: "🤝",
  title: "Formal (vous) deep dive",
  tagline: "Je vous en prie, s'il vous plaît, l'impératif poli.",
  lessons: [
    {
      slug: "vous-formel-main",
      title: "Mastering the formal register",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Tu vs vous — the social calculus",
          body: [
            "French has two ways to say 'you': <strong>tu</strong> (informal, singular) and <strong>vous</strong> (formal singular, or any plural). Choosing wrong can offend or seem overly cold.",
            "Use <strong>vous</strong> with: strangers, older people, authority figures, shop/restaurant staff, in professional settings. Use <strong>tu</strong> with: friends, family, children, peers your own age in casual settings, pets.",
            "When unsure, default to <em>vous</em>. The shift to <em>tu</em> (<em>tutoyer</em>) usually happens when the other person invites it: <em>On peut se tutoyer?</em> (Shall we use 'tu'?). Until then, stay with <em>vous</em>.",
          ],
          keyPoint: "Default to vous with adults you don't know. Wait to be invited to tutoyer (use 'tu').",
        },
        {
          type: "vocab",
          heading: "Formal phrases",
          items: [
            { l1: "Je vous en prie.", en: "You're welcome / Please, go ahead (formal)" },
            { l1: "Pourriez-vous…?", en: "Could you…? (very polite)", note: "conditional of pouvoir" },
            { l1: "Auriez-vous…?", en: "Would you have…? (very polite)" },
            { l1: "Veuillez…", en: "Please / Kindly… (formal imperative)", note: "Veuillez patienter = Please wait" },
            { l1: "Excusez-moi de vous déranger.", en: "Sorry to bother you." },
            { l1: "Je vous remercie.", en: "I thank you. (formal)" },
            { l1: "Enchanté de faire votre connaissance.", en: "Delighted to make your acquaintance." },
            { l1: "Bonne journée, monsieur/madame.", en: "Have a good day, sir/ma'am." },
          ],
        },
        {
          type: "tip",
          heading: "The polite imperative",
          body: "To give polite instructions, use the vous form without the pronoun: <em>Asseyez-vous</em> (Sit down), <em>Patientez</em> (Wait), <em>Suivez-moi</em> (Follow me). For very formal written or spoken requests, <strong>Veuillez + infinitive</strong> is the politest form: <em>Veuillez patienter</em> (Kindly wait).",
          example: { l1: "Veuillez vous asseoir. Je reviens tout de suite.", en: "Please have a seat. I'll be right back." },
        },
        {
          type: "dialogue",
          heading: "A formal exchange",
          lines: [
            { speaker: "Receptionist", l1: "Bonjour madame. Que puis-je faire pour vous?", en: "Hello ma'am. What can I do for you?" },
            { speaker: "You", l1: "Bonjour. Pourriez-vous m'indiquer où se trouve le bureau de M. Dubois?", en: "Hello. Could you tell me where Mr. Dubois's office is?" },
            { speaker: "Receptionist", l1: "Bien sûr. Veuillez prendre l'ascenseur jusqu'au troisième étage.", en: "Of course. Please take the lift to the third floor." },
            { speaker: "You", l1: "Je vous remercie beaucoup.", en: "Thank you very much." },
            { speaker: "Receptionist", l1: "Je vous en prie. Bonne journée!", en: "You're welcome. Have a good day!" },
          ],
        },
        {
          type: "translate",
          heading: "Translate",
          direction: "en-to-l1",
          prompt: "Excuse me, could you help me, please?",
          reference: "Excusez-moi, pourriez-vous m'aider, s'il vous plaît?",
          hint: "pourriez-vous = could you (polite conditional); m'aider = help me",
        },
      ],
    },
    {
      slug: "vous-formel-email",
      title: "Formal emails & written politeness",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "French written formality is its own world",
          body: [
            "A formal French email or letter follows set formulas. Open with <em>Madame, Monsieur,</em> (if you don't know the person) — comma, then a line break. No 'Dear' equivalent is needed in formal writing.",
            "The body uses <em>vous</em> throughout. To attach something: <em>Veuillez trouver ci-joint…</em> (Please find attached…). To request: <em>Je vous serais reconnaissant(e) de…</em> (I would be grateful if you would…).",
            "The closing is famously elaborate. For everyday professional email, <em>Cordialement</em> (kind regards) is the safe default. The full formal version is <em>Je vous prie d'agréer, Madame, Monsieur, mes salutations distinguées.</em>",
          ],
          keyPoint: "Open: 'Madame, Monsieur,'. Attach: Veuillez trouver ci-joint… Close: Cordialement (everyday) / full formal salutation (letters).",
        },
        {
          type: "vocab",
          heading: "Email & letter formulas",
          items: [
            { l1: "Madame, Monsieur,", en: "Dear Sir or Madam,", note: "standard opener to an unknown reader" },
            { l1: "Je vous écris au sujet de…", en: "I'm writing regarding…" },
            { l1: "Veuillez trouver ci-joint…", en: "Please find attached…" },
            { l1: "Je vous serais reconnaissant(e) de…", en: "I would be grateful if you would…" },
            { l1: "Dans l'attente de votre réponse,", en: "Looking forward to your reply," },
            { l1: "Cordialement,", en: "Kind regards," },
            { l1: "Bien à vous,", en: "Yours sincerely, (warmer)" },
            { l1: "Je vous prie d'agréer mes salutations distinguées.", en: "Yours faithfully. (very formal)" },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Written register check",
          questions: [
            {
              q: "How do you open a formal email to someone you don't know?",
              options: ["Salut!", "Cher ami,", "Madame, Monsieur,", "Bonjour toi,"],
              correct: 2,
              fb: "'Madame, Monsieur,' is the standard formal opener to an unknown reader.",
            },
            {
              q: "'Veuillez trouver ci-joint le document' means…",
              options: ["I lost the document", "Please find the attached document", "The document is late", "Sign the document"],
              correct: 1,
              fb: "'ci-joint' = attached/enclosed; 'veuillez trouver' = please find.",
            },
            {
              q: "A safe everyday professional sign-off is…",
              options: ["Bisous", "Cordialement", "À plus", "Salut"],
              correct: 1,
              fb: "'Cordialement' is the neutral professional default. 'Bisous'/'À plus' are informal.",
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate",
          direction: "en-to-l1",
          prompt: "Dear Sir or Madam, I am writing regarding my reservation. Kind regards,",
          reference: "Madame, Monsieur, je vous écris au sujet de ma réservation. Cordialement,",
          hint: "Dear Sir or Madam = Madame, Monsieur,; regarding = au sujet de; Kind regards = Cordialement",
        },
      ],
    },
    {
      slug: "vous-formel-telephone",
      title: "Phone & professional etiquette",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "On the phone in French",
          body: [
            "French phone calls have their own set phrases. You answer with <em>Allô?</em> (only on the phone — never as a face-to-face greeting). State your purpose with <em>Je vous appelle au sujet de…</em>",
            "Reception/switchboard language: <em>Ne quittez pas</em> (Hold the line / Don't hang up), <em>Je vous le/la passe</em> (I'll put you through to him/her), <em>C'est de la part de qui?</em> (Who's calling?).",
            "If the person isn't available: <em>Puis-je laisser un message?</em> (May I leave a message?) and <em>Je rappellerai plus tard</em> (I'll call back later).",
          ],
          keyPoint: "Answer: Allô? Hold: Ne quittez pas. Put through: Je vous le passe. 'C'est de la part de qui?' = Who's calling?",
        },
        {
          type: "vocab",
          heading: "Phone vocabulary",
          items: [
            { l1: "Allô?", en: "Hello? (phone only)" },
            { l1: "Je vous appelle au sujet de…", en: "I'm calling regarding…" },
            { l1: "C'est de la part de qui?", en: "Who's calling?" },
            { l1: "Ne quittez pas.", en: "Hold the line, please." },
            { l1: "Je vous le / la passe.", en: "I'll put you through (to him / her)." },
            { l1: "Pourriez-vous patienter?", en: "Could you hold?" },
            { l1: "Puis-je laisser un message?", en: "May I leave a message?" },
            { l1: "Je rappellerai plus tard.", en: "I'll call back later." },
            { l1: "Vous avez fait un faux numéro.", en: "You have the wrong number." },
          ],
        },
        {
          type: "dialogue",
          heading: "A professional call",
          lines: [
            { speaker: "Standard", l1: "Cabinet Lefèvre, bonjour.", en: "Lefèvre office, hello." },
            { speaker: "You", l1: "Bonjour, je voudrais parler à Madame Roche, s'il vous plaît.", en: "Hello, I'd like to speak to Mrs. Roche, please." },
            { speaker: "Standard", l1: "C'est de la part de qui?", en: "Who's calling?" },
            { speaker: "You", l1: "De la part de Monsieur Garcia, au sujet du rendez-vous.", en: "It's Mr. Garcia, regarding the appointment." },
            { speaker: "Standard", l1: "Ne quittez pas, je vous la passe.", en: "Hold the line, I'll put you through." },
            { speaker: "You", l1: "Je vous remercie.", en: "Thank you." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Phone etiquette check",
          questions: [
            {
              q: "'Ne quittez pas' on the phone means…",
              options: ["Don't leave the building", "Hold the line / don't hang up", "Don't worry", "Goodbye"],
              correct: 1,
              fb: "Literally 'don't leave' — i.e. hold the line.",
            },
            {
              q: "'C'est de la part de qui?' asks…",
              options: ["What's it about?", "Who's calling?", "Which department?", "When can you call back?"],
              correct: 1,
              fb: "It's the standard way to ask who is calling.",
            },
            {
              q: "'Allô' should be used…",
              options: ["as a greeting in person", "only when answering the phone", "to end a call", "in formal emails"],
              correct: 1,
              fb: "'Allô' is phone-only. In person you'd say 'Bonjour'.",
            },
          ],
        },
      ],
    },
  ],
  checkpoint: {
    passingPct: 80,
    questions: [
      { q: "When meeting an older stranger, you use…", options: ["tu", "vous", "either is fine", "il"], correct: 1 },
      { q: "'Je vous en prie' means…", options: ["I beg you", "You're welcome / Go ahead", "I pray", "Please wait"], correct: 1 },
      { q: "'Pourriez-vous…?' is the … form of pouvoir.", options: ["present", "future", "conditional (polite)", "imperative"], correct: 2 },
      { q: "'Tutoyer' someone means…", options: ["To address them as vous", "To address them as tu", "To greet them formally", "To introduce them"], correct: 1 },
      { q: "'Veuillez patienter' means…", options: ["You waited", "Please wait (formal)", "I'm waiting", "Wait for me"], correct: 1 },
      { q: "When in doubt about tu/vous, you should…", options: ["Use tu", "Use vous", "Avoid pronouns", "Ask their age"], correct: 1 },
    ],
  },
};
