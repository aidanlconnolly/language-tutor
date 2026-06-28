import type { Unit } from "../../types";

export const UNIT_HELP: Unit = {
  slug: "help",
  stage: 3,
  order: 13,
  icon: "🆘",
  title: "Emergencies & help",
  tagline: "Apotheke, Notaufnahme, 112 — Können Sie mir helfen?",
  badge: "tourist",
  lessons: [
    {
      slug: "help-asking",
      title: "Asking for help",
      summary: "Can you help me? I'm lost. I've lost my … — the phrases that fetch a hand.",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Three sentences for when things go wrong",
          body: [
            "Lead with <strong>«Können Sie mir helfen?»</strong> = Can you help me? The verb <em>helfen</em> takes the dative (<em>mir</em> = me), which is why it's <em>mir</em> and not <em>mich</em>.",
            "If you're lost: <strong>«Ich habe mich verlaufen»</strong> = I've gotten lost (on foot). It's a reflexive perfect — learn it as a block. For a wrong turn while driving you'd say <em>verfahren</em>, but on foot it's always <em>verlaufen</em>.",
            "If you've lost something: <strong>«Ich habe meinen … verloren»</strong> = I've lost my … — e.g. <em>«Ich habe meinen Reisepass verloren»</em>. Plug the noun in after <em>meinen / meine / mein</em> to match its gender.",
          ],
          keyPoint:
            "Können Sie mir helfen? · Ich habe mich verlaufen (lost). · Ich habe … verloren (lost an object).",
        },
        {
          type: "vocab",
          heading: "Help & lost-and-found vocab",
          items: [
            { l1: "helfen", en: "to help", note: "+ dative: helfen Sie mir" },
            { l1: "die Hilfe", en: "the help / aid", note: "feminine; Hilfe! = Help!" },
            { l1: "sich verlaufen", en: "to get lost (on foot)", note: "ich habe mich verlaufen" },
            { l1: "verlieren", en: "to lose", note: "ich habe … verloren (perfect)" },
            { l1: "das Fundbüro", en: "the lost-and-found office", note: "neuter" },
            { l1: "die Tasche", en: "the bag", note: "feminine" },
            { l1: "die Geldbörse / das Portemonnaie", en: "the wallet / purse", note: "Geldbörse is feminine" },
            { l1: "das Handy", en: "the mobile phone", note: "neuter" },
            { l1: "der Stadtplan", en: "the city map", note: "masculine" },
            { l1: "verloren", en: "lost (object)", note: "past participle of verlieren" },
            { l1: "Wo bin ich?", en: "Where am I?" },
            { l1: "Können Sie mir helfen?", en: "Can you help me?" },
          ],
        },
        {
          type: "dialogue",
          heading: "Lost in Kreuzberg",
          setup: "You've wandered off your map and stop someone.",
          lines: [
            { speaker: "You", l1: "Entschuldigung, können Sie mir helfen? Ich habe mich verlaufen.", en: "Excuse me, can you help me? I've gotten lost." },
            { speaker: "Frau", l1: "Natürlich. Wohin möchten Sie?", en: "Of course. Where do you want to go?" },
            { speaker: "You", l1: "Zum Görlitzer Bahnhof. Ich habe auch meinen Stadtplan verloren.", en: "To Görlitzer Bahnhof. I've also lost my map." },
            { speaker: "Frau", l1: "Kein Problem. Gehen Sie hier geradeaus, dann die zweite Straße rechts.", en: "No problem. Go straight here, then the second street on the right." },
            { speaker: "You", l1: "Vielen Dank, das ist sehr nett.", en: "Thank you, that's very kind." },
            { speaker: "Frau", l1: "Gern geschehen! Viel Glück.", en: "You're welcome! Good luck." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Ask for help",
          items: [
            {
              template: "Können Sie ___ helfen?",
              answer: "mir",
              en: "Can you help me?",
              options: ["mir", "mich", "ich", "mein"],
            },
            {
              template: "Ich habe ___ verlaufen.",
              answer: "mich",
              en: "I've gotten lost.",
              options: ["mich", "mir", "mein", "sich"],
            },
            {
              template: "Ich habe meinen Reisepass ___.",
              answer: "verloren",
              en: "I've lost my passport.",
              options: ["verloren", "verlaufen", "verlieren", "gefunden"],
            },
            {
              template: "Wo ist das ___? Ich suche meine Tasche.",
              answer: "Fundbüro",
              en: "Where is the lost-and-found? I'm looking for my bag.",
              options: ["Fundbüro", "Krankenhaus", "Hotel", "Bahnhof"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Excuse me, can you help me? I've lost my wallet.",
          reference: "Entschuldigung, können Sie mir helfen? Ich habe meine Geldbörse verloren.",
          hint: "helfen takes 'mir'; die Geldbörse is feminine, so 'meine … verloren'.",
        },
      ],
    },
    {
      slug: "help-apotheke",
      title: "The Apotheke & feeling ill",
      summary: "I have a headache. Do you have something for…? — surviving the pharmacy.",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "In Germany, medicine means the Apotheke",
          body: [
            "You can't buy painkillers at the supermarket. For anything medical you go to the <strong>Apotheke</strong> (pharmacy — marked with a big red <em>A</em>). The pharmacist is a real expert and will advise you.",
            "Describe symptoms with <strong>«Ich habe …schmerzen»</strong>: <em>Kopfschmerzen</em> (headache), <em>Bauchschmerzen</em> (stomach ache), <em>Halsschmerzen</em> (sore throat). The <strong>-schmerzen</strong> ending is reusable — pin it to the body part.",
            "Then ask for a remedy: <strong>«Haben Sie etwas gegen …?»</strong> = Do you have something for …? — literally 'something against'. E.g. <em>«Haben Sie etwas gegen Kopfschmerzen?»</em>",
          ],
          keyPoint:
            "Apotheke = pharmacy. Ich habe Kopfschmerzen = I have a headache. Haben Sie etwas gegen …? = something for …?",
        },
        {
          type: "vocab",
          heading: "Pharmacy & symptoms",
          items: [
            { l1: "die Apotheke", en: "the pharmacy", note: "feminine; Notdienst = on-call after hours" },
            { l1: "die Schmerzen", en: "the pain(s)", note: "plural; ...schmerzen attaches to body parts" },
            { l1: "die Kopfschmerzen", en: "headache", note: "plural; der Kopf = head" },
            { l1: "die Bauchschmerzen", en: "stomach ache", note: "plural; der Bauch = belly" },
            { l1: "die Halsschmerzen", en: "sore throat", note: "plural; der Hals = throat/neck" },
            { l1: "das Fieber", en: "the fever", note: "neuter; Ich habe Fieber = I have a fever" },
            { l1: "der Husten", en: "the cough", note: "masculine" },
            { l1: "die Erkältung", en: "the cold (illness)", note: "feminine" },
            { l1: "das Medikament", en: "the medicine", note: "neuter" },
            { l1: "die Tablette", en: "the tablet / pill", note: "feminine" },
            { l1: "das Rezept", en: "the prescription", note: "neuter; also means recipe" },
            { l1: "krank", en: "ill / sick", note: "Ich bin krank = I'm ill" },
          ],
        },
        {
          type: "dialogue",
          heading: "At the Apotheke",
          setup: "You've woken up with a headache and a cold.",
          lines: [
            { speaker: "Apothekerin", l1: "Guten Tag, was kann ich für Sie tun?", en: "Hello, what can I do for you?" },
            { speaker: "You", l1: "Guten Tag. Ich habe Kopfschmerzen. Haben Sie etwas dagegen?", en: "Hello. I have a headache. Do you have something for it?" },
            { speaker: "Apothekerin", l1: "Ja. Haben Sie auch Fieber?", en: "Yes. Do you also have a fever?" },
            { speaker: "You", l1: "Nein, aber ich habe auch eine Erkältung und Husten.", en: "No, but I also have a cold and a cough." },
            { speaker: "Apothekerin", l1: "Dann nehmen Sie diese Tabletten, zweimal täglich.", en: "Then take these tablets, twice a day." },
            { speaker: "You", l1: "Brauche ich ein Rezept?", en: "Do I need a prescription?" },
            { speaker: "Apothekerin", l1: "Nein, das gibt es ohne Rezept. Gute Besserung!", en: "No, that's available without a prescription. Get well soon!" },
          ],
        },
        {
          type: "fillBlank",
          heading: "Describe how you feel",
          items: [
            {
              template: "Ich habe ___. Mein Kopf tut weh.",
              answer: "Kopfschmerzen",
              en: "I have a headache. My head hurts.",
              options: ["Kopfschmerzen", "Bauchschmerzen", "Halsschmerzen", "Fieber"],
            },
            {
              template: "Haben Sie etwas ___ Husten?",
              answer: "gegen",
              en: "Do you have something for a cough?",
              options: ["gegen", "für", "mit", "ohne"],
            },
            {
              template: "Brauche ich ein ___ für dieses Medikament?",
              answer: "Rezept",
              en: "Do I need a prescription for this medicine?",
              options: ["Rezept", "Tablette", "Fieber", "Apotheke"],
            },
            {
              template: "Ich bin ___ und bleibe heute im Bett.",
              answer: "krank",
              en: "I'm ill and I'm staying in bed today.",
              options: ["krank", "müde", "kalt", "spät"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "I have a sore throat. Do you have something for it?",
          reference: "Ich habe Halsschmerzen. Haben Sie etwas dagegen?",
          hint: "Halsschmerzen for the sore throat; 'etwas dagegen' = something against it.",
        },
      ],
    },
    {
      slug: "help-emergencies",
      title: "Emergencies: 112, Notaufnahme, the police",
      summary: "Call 112, find the ER, and report a theft to die Polizei.",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "The numbers and words that matter most",
          body: [
            "The Europe-wide emergency number is <strong>112</strong> (fire and ambulance — <em>Feuerwehr und Krankenwagen</em>). For police specifically it's <strong>110</strong>. Both are free and answered in German, often in English too.",
            "At a hospital, the emergency room is the <strong>Notaufnahme</strong>. The shout for an ambulance is <em>«Rufen Sie einen Krankenwagen!»</em> = Call an ambulance! and the general one is <em>«Es ist ein Notfall!»</em> = It's an emergency!",
            "If you're robbed, the police are <strong>die Polizei</strong>. Report it with <em>«Man hat meine Tasche gestohlen»</em> = my bag has been stolen, or file a report — <em>eine Anzeige erstatten</em>. Stay calm, give your location: <em>«Ich bin am Alexanderplatz»</em>.",
          ],
          keyPoint:
            "112 = ambulance/fire, 110 = police. Notaufnahme = ER. Notfall = emergency. die Polizei = the police.",
        },
        {
          type: "vocab",
          heading: "Emergency vocab",
          items: [
            { l1: "der Notfall", en: "the emergency", note: "masculine; Es ist ein Notfall!" },
            { l1: "der Krankenwagen", en: "the ambulance", note: "masculine" },
            { l1: "die Feuerwehr", en: "the fire brigade", note: "feminine" },
            { l1: "die Polizei", en: "the police", note: "feminine; singular even though it's a force" },
            { l1: "das Krankenhaus", en: "the hospital", note: "neuter" },
            { l1: "die Notaufnahme", en: "the emergency room / A&E", note: "feminine" },
            { l1: "der Arzt / die Ärztin", en: "the doctor (m / f)", note: "Arzt masculine, Ärztin feminine" },
            { l1: "stehlen", en: "to steal", note: "gestohlen = stolen (past participle)" },
            { l1: "der Diebstahl", en: "the theft", note: "masculine" },
            { l1: "die Anzeige", en: "the (police) report", note: "feminine; Anzeige erstatten = to file a report" },
            { l1: "der Unfall", en: "the accident", note: "masculine" },
            { l1: "Rufen Sie …!", en: "Call …! (formal command)", note: "Rufen Sie die Polizei!" },
          ],
        },
        {
          type: "dialogue",
          heading: "Reporting a stolen bag",
          setup: "Your bag was snatched on the U-Bahn; you find a police officer.",
          lines: [
            { speaker: "You", l1: "Entschuldigung, ich brauche Hilfe. Man hat meine Tasche gestohlen.", en: "Excuse me, I need help. My bag has been stolen." },
            { speaker: "Polizist", l1: "Beruhigen Sie sich. Wo ist das passiert?", en: "Calm down. Where did it happen?" },
            { speaker: "You", l1: "In der U-Bahn, Linie U8, vor zehn Minuten.", en: "On the U-Bahn, line U8, ten minutes ago." },
            { speaker: "Polizist", l1: "Was war in der Tasche?", en: "What was in the bag?" },
            { speaker: "You", l1: "Mein Handy, meine Geldbörse und mein Reisepass.", en: "My phone, my wallet, and my passport." },
            { speaker: "Polizist", l1: "Gut, wir erstatten eine Anzeige. Kommen Sie bitte mit.", en: "Okay, we'll file a report. Please come with me." },
            { speaker: "You", l1: "Danke. Was muss ich jetzt tun?", en: "Thanks. What do I have to do now?" },
          ],
        },
        {
          type: "listen",
          heading: "Match the emergency phrase",
          intro: "Listen, then pick the meaning.",
          items: [
            {
              l1: "Es ist ein Notfall!",
              en: "It's an emergency!",
              options: ["It's no problem", "It's an emergency!", "It's a holiday", "It's far"],
              correct: 1,
            },
            {
              l1: "Rufen Sie einen Krankenwagen!",
              en: "Call an ambulance!",
              options: ["Call the police", "Call a taxi", "Call an ambulance!", "Call the hotel"],
              correct: 2,
            },
            {
              l1: "Man hat mein Handy gestohlen.",
              en: "My phone has been stolen.",
              options: ["I lost my phone", "My phone has been stolen", "My phone is broken", "I found a phone"],
              correct: 1,
            },
            {
              l1: "Wo ist die Notaufnahme?",
              en: "Where is the emergency room?",
              options: ["Where is the pharmacy?", "Where is the police?", "Where is the emergency room?", "Where is the exit?"],
              correct: 2,
            },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the emergency line",
          items: [
            { tokens: ["Rufen", "Sie", "die", "Polizei", "!"], en: "Call the police!" },
            { tokens: ["Man", "hat", "meine", "Tasche", "gestohlen", "."], en: "My bag has been stolen." },
            { tokens: ["Wo", "ist", "das", "nächste", "Krankenhaus", "?"], en: "Where is the nearest hospital?" },
            { tokens: ["Ich", "möchte", "eine", "Anzeige", "erstatten", "."], en: "I'd like to file a report." },
          ],
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "The Europe-wide number for an ambulance or fire is…",
              options: ["110", "112", "911", "999"],
              correct: 1,
            },
            {
              q: "'die Notaufnahme' is…",
              options: ["the pharmacy", "the emergency room", "the police station", "the lost-and-found"],
              correct: 1,
            },
            {
              q: "'Man hat meine Tasche gestohlen' means…",
              options: [
                "I lost my bag",
                "My bag has been stolen",
                "My bag is broken",
                "I found a bag",
              ],
              correct: 1,
            },
            {
              q: "To file a police report you say you want to…",
              options: [
                "eine Anzeige erstatten",
                "ein Zimmer reservieren",
                "etwas gegen Husten",
                "umsteigen",
              ],
              correct: 0,
            },
          ],
        },
      ],
    },
  ],
  checkpoint: {
    passingPct: 80,
    questions: [
      {
        q: "'Can you help me?' =",
        options: [
          "Können Sie mich helfen?",
          "Können Sie mir helfen?",
          "Hilfe ich?",
          "Helfen mich Sie?",
        ],
        correct: 1,
      },
      {
        q: "'Ich habe mich verlaufen' means…",
        options: ["I've lost my bag", "I've gotten lost", "I'm tired", "I need a doctor"],
        correct: 1,
      },
      {
        q: "How do you say 'I've lost my passport'?",
        options: [
          "Ich habe mich verlaufen.",
          "Ich habe meinen Reisepass verloren.",
          "Ich suche meinen Reisepass.",
          "Wo ist mein Reisepass?",
        ],
        correct: 1,
      },
      {
        q: "Where do you buy medicine in Germany?",
        options: ["im Supermarkt", "in der Apotheke", "im Fundbüro", "an der Rezeption"],
        correct: 1,
      },
      {
        q: "'Ich habe Kopfschmerzen' means…",
        options: ["I have a stomach ache", "I have a headache", "I have a sore throat", "I have a fever"],
        correct: 1,
      },
      {
        q: "How do you ask 'Do you have something for a cough?'",
        options: [
          "Haben Sie etwas gegen Husten?",
          "Wo ist der Husten?",
          "Ich habe Husten verloren.",
          "Husten, bitte.",
        ],
        correct: 0,
      },
      {
        q: "The Europe-wide emergency number for an ambulance is…",
        options: ["110", "112", "911", "100"],
        correct: 1,
      },
      {
        q: "'die Notaufnahme' is…",
        options: ["the pharmacy", "the emergency room", "the reception", "the police"],
        correct: 1,
      },
      {
        q: "'die Polizei' is…",
        options: ["the doctor", "the police", "the fire brigade", "the ambulance"],
        correct: 1,
      },
      {
        q: "Translate: 'It's an emergency! Call an ambulance!'",
        options: [
          "Es ist ein Notfall! Rufen Sie einen Krankenwagen!",
          "Es ist ein Problem. Rufen Sie ein Taxi!",
          "Hilfe! Wo ist die Apotheke?",
          "Ich bin krank. Rufen Sie die Polizei!",
        ],
        correct: 0,
      },
    ],
  },
};
