import type { Unit } from "../../types";

export const UNIT_RECLAMATIONS: Unit = {
  slug: "reclamations",
  stage: 6,
  order: 28,
  icon: "📣",
  title: "Complaints & returns",
  tagline: "Je voudrais un remboursement — escalation polie.",
  lessons: [
    {
      slug: "reclamations-main",
      title: "Complaining politely in French",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "The art of the French complaint",
          body: [
            "French complaint culture values calm, polite firmness — not aggression. Raising your voice or making a scene is counterproductive. Stay courteous but clear.",
            "Avoid the American-style 'I demand to speak to your manager.' This reads as aggressive in France. Instead, explain the problem politely and ask for a solution: <em>Il y a un problème… que peut-on faire?</em>",
            "Useful framing: start with <em>Excusez-moi</em>, describe the issue factually, and use the conditional (<em>je voudrais</em>) for requests. The conditional softens demands into polite requests.",
          ],
          tip: {
            label: "Calm beats loud",
            body: "French service staff respond far better to polite firmness than to anger. A calm 'Ce n'est pas ce que j'ai commandé' will get a faster fix than an angry outburst.",
          },
        },
        {
          type: "vocab",
          heading: "Complaint vocabulary",
          items: [
            { l1: "Il y a un problème.", en: "There is a problem." },
            { l1: "Ce n'est pas ce que j'ai commandé.", en: "This isn't what I ordered." },
            { l1: "Ça ne marche pas / ne fonctionne pas.", en: "It doesn't work." },
            { l1: "C'est cassé / abîmé.", en: "It's broken / damaged." },
            { l1: "Je voudrais un remboursement.", en: "I'd like a refund." },
            { l1: "Je voudrais échanger ceci.", en: "I'd like to exchange this." },
            { l1: "Pourrais-je parler au responsable?", en: "Could I speak with the manager? (polite)" },
            { l1: "Que peut-on faire?", en: "What can be done?" },
            { l1: "Ce n'est pas normal.", en: "This isn't acceptable/right." },
            { l1: "le reçu / le ticket de caisse", en: "the receipt", note: "needed for returns" },
          ],
        },
        {
          type: "dialogue",
          heading: "Returning a faulty item",
          lines: [
            { speaker: "You", l1: "Bonjour. J'ai acheté ce parapluie hier, mais il est déjà cassé.", en: "Hello. I bought this umbrella yesterday, but it's already broken." },
            { speaker: "Clerk", l1: "Je suis désolé. Vous avez le reçu?", en: "I'm sorry. Do you have the receipt?" },
            { speaker: "You", l1: "Oui, le voici. Je voudrais un remboursement, s'il vous plaît.", en: "Yes, here it is. I'd like a refund, please." },
            { speaker: "Clerk", l1: "Bien sûr. Je vous rembourse tout de suite.", en: "Of course. I'll refund you right away." },
            { speaker: "You", l1: "Merci beaucoup pour votre compréhension.", en: "Thank you very much for your understanding." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Complaint check",
          questions: [
            {
              q: "The best way to complain in France is…",
              options: ["Loudly and firmly", "Calm, polite, but clear", "Demand the manager immediately", "Threaten a bad review"],
              correct: 1,
              fb: "French service culture rewards calm politeness. Aggression backfires.",
            },
            {
              q: "'Je voudrais un remboursement' means…",
              options: ["I want to complain", "I'd like a refund", "I'd like to exchange", "I want a discount"],
              correct: 1,
              fb: "remboursement = refund. The conditional 'je voudrais' keeps it polite.",
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate",
          direction: "en-to-l1",
          prompt: "Excuse me, this isn't what I ordered. Could you change it, please?",
          reference: "Excusez-moi, ce n'est pas ce que j'ai commandé. Pourriez-vous le changer, s'il vous plaît?",
          hint: "j'ai commandé = I ordered; pourriez-vous = could you (polite)",
        },
      ],
    },
    {
      slug: "reclamations-service",
      title: "When service goes wrong",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Raising a problem in a restaurant or hotel",
          body: [
            "Service issues happen — a cold dish, a wrong order, a noisy room. The calm-but-clear approach from the last lesson applies. Describe the issue factually and propose what you'd like done.",
            "Restaurant issues: <em>Le plat est froid</em> (the dish is cold), <em>Ce n'est pas cuit</em> (it's not cooked), <em>On attend depuis longtemps</em> (we've been waiting a long time).",
            "When it matters, you can ask for a gesture: <em>un geste commercial</em> is the French term for goodwill compensation (a discount, a free coffee). Ask gently: <em>Vous pouvez faire un geste?</em>",
          ],
          keyPoint: "State the issue factually + propose a fix. Goodwill compensation = un geste commercial.",
        },
        {
          type: "vocab",
          heading: "Service-problem vocabulary",
          items: [
            { l1: "Le plat est froid.", en: "The dish is cold." },
            { l1: "Ce n'est pas assez cuit.", en: "It's not cooked enough." },
            { l1: "On attend depuis longtemps.", en: "We've been waiting a long time." },
            { l1: "Il y a une erreur dans l'addition.", en: "There's a mistake on the bill." },
            { l1: "La chambre est bruyante.", en: "The room is noisy." },
            { l1: "Ce n'est pas acceptable.", en: "This isn't acceptable." },
            { l1: "un geste commercial", en: "goodwill gesture / compensation" },
            { l1: "Que proposez-vous?", en: "What do you suggest?" },
          ],
        },
        {
          type: "dialogue",
          heading: "A problem at dinner",
          lines: [
            { speaker: "You", l1: "Excusez-moi, le plat est froid et ce n'est pas ce que j'ai commandé.", en: "Excuse me, the dish is cold and it's not what I ordered." },
            { speaker: "Serveur", l1: "Je suis vraiment désolé. Je le rapporte en cuisine tout de suite.", en: "I'm really sorry. I'll take it back to the kitchen right away." },
            { speaker: "You", l1: "Merci. On attend depuis assez longtemps, vous savez.", en: "Thank you. We've been waiting quite a while, you know." },
            { speaker: "Serveur", l1: "Je comprends. Je vous offre un dessert pour me faire pardonner.", en: "I understand. I'll offer you a dessert to make up for it." },
            { speaker: "You", l1: "C'est gentil, merci.", en: "That's kind, thank you." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Service-problem check",
          questions: [
            {
              q: "'Un geste commercial' is…",
              options: ["a hand signal", "a goodwill gesture/compensation", "a business card", "a sales pitch"],
              correct: 1,
              fb: "It's the French term for goodwill compensation — a discount, free item, etc.",
            },
            {
              q: "How do you politely say the dish is cold?",
              options: ["Le plat est nul.", "Le plat est froid.", "Le plat est cher.", "Le plat est petit."],
              correct: 1,
              fb: "'Le plat est froid' states the issue factually and politely.",
            },
            {
              q: "A good way to invite a solution is…",
              options: ["C'est nul!", "Que proposez-vous?", "Je m'en vais.", "C'est tout."],
              correct: 1,
              fb: "'Que proposez-vous?' (What do you suggest?) keeps it constructive.",
            },
          ],
        },
      ],
    },
    {
      slug: "reclamations-droits",
      title: "Refunds, warranties & consumer rights",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Escalating through the proper channels",
          body: [
            "If a shop won't help, France has strong consumer protections. Key terms: <em>le service client</em> (customer service), <em>la garantie</em> (warranty), and <em>le droit de rétractation</em> — a 14-day right to withdraw from most online purchases.",
            "To escalate politely but firmly: <em>Je souhaite faire une réclamation</em> (I wish to file a complaint), <em>Quels sont mes droits?</em> (What are my rights?).",
            "For a faulty product, the law is on your side: <em>la garantie légale de conformité</em> covers defects for two years. You don't have to accept only <em>un avoir</em> (store credit) if the item was faulty.",
          ],
          keyPoint: "service client, garantie, droit de rétractation (14 days online). 'Je souhaite faire une réclamation.'",
        },
        {
          type: "vocab",
          heading: "Consumer-rights vocabulary",
          items: [
            { l1: "le service client", en: "customer service" },
            { l1: "faire une réclamation", en: "to file a complaint" },
            { l1: "la garantie", en: "the warranty / guarantee" },
            { l1: "le droit de rétractation", en: "the right of withdrawal (14 days online)" },
            { l1: "un remboursement / un avoir", en: "a refund / store credit" },
            { l1: "défectueux / défectueuse", en: "defective, faulty" },
            { l1: "Quels sont mes droits?", en: "What are my rights?" },
            { l1: "le litige", en: "the dispute" },
            { l1: "le numéro de commande", en: "the order number" },
          ],
        },
        {
          type: "dialogue",
          heading: "Calling customer service",
          lines: [
            { speaker: "Service", l1: "Service client, bonjour. En quoi puis-je vous aider?", en: "Customer service, hello. How can I help you?" },
            { speaker: "You", l1: "Bonjour. Je souhaite faire une réclamation. Mon appareil est défectueux.", en: "Hello. I wish to file a complaint. My device is faulty." },
            { speaker: "Service", l1: "Vous avez le numéro de commande?", en: "Do you have the order number?" },
            { speaker: "You", l1: "Oui. Il est encore sous garantie. Je voudrais un remboursement.", en: "Yes. It's still under warranty. I'd like a refund." },
            { speaker: "Service", l1: "Bien sûr, vous y avez droit. Je lance la procédure.", en: "Of course, you're entitled to it. I'll start the process." },
          ],
        },
        {
          type: "translate",
          heading: "Translate",
          direction: "en-to-l1",
          prompt: "I wish to file a complaint. The product is faulty and still under warranty.",
          reference: "Je souhaite faire une réclamation. Le produit est défectueux et encore sous garantie.",
          hint: "file a complaint = faire une réclamation; faulty = défectueux; under warranty = sous garantie",
        },
      ],
    },
  ],
  checkpoint: {
    passingPct: 80,
    questions: [
      { q: "The French prefer complaints that are…", options: ["Loud and assertive", "Calm and polite but firm", "Written only", "Made via the manager only"], correct: 1 },
      { q: "'Un remboursement' means…", options: ["an exchange", "a discount", "a refund", "a receipt"], correct: 2 },
      { q: "'Ça ne fonctionne pas' means…", options: ["It's the wrong size", "It doesn't work", "It's expensive", "It's not mine"], correct: 1 },
      { q: "For a return, you usually need…", options: ["nothing", "the receipt (le reçu)", "your passport", "a manager's approval"], correct: 1 },
      { q: "'Pourrais-je parler au responsable?' is…", options: ["A polite way to ask for the manager", "An aggressive demand", "A way to order food", "A complaint about staff"], correct: 0 },
      { q: "The conditional 'je voudrais' is used to…", options: ["Express anger", "Soften a request into politeness", "Indicate the past", "Form a question"], correct: 1 },
    ],
  },
};
