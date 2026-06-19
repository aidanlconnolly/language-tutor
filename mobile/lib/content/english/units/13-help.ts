import type { Unit } from "../../types";

export const UNIT_HELP: Unit = {
  slug: "help",
  stage: 3,
  order: 13,
  icon: "🆘",
  title: "Emergencies & help",
  tagline: "The chemist, A&E, 999 — 'can you help me, please?'",
  badge: "tourist",
  lessons: [
    {
      slug: "help-asking",
      title: "Asking for help",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "When you need a hand",
          body: [
            "The simplest, clearest plea is <strong>'Can you help me, please?'</strong> Don't worry about being elaborate — clear beats clever in a stressful moment.",
            "If you're confused about where you are, say <strong>'I'm lost.'</strong> If something has gone missing, say <strong>'I've lost my…'</strong> (e.g. 'I've lost my wallet').",
            "Note the difference: <em>'I'm lost'</em> = <strong>you</strong> can't find your way; <em>'I've lost my passport'</em> = an <strong>object</strong> is missing.",
          ],
          keyPoint: "'I'm lost' = you can't find your way. 'I've lost my…' = an object is missing.",
        },
        {
          type: "vocab",
          heading: "Asking-for-help phrases",
          items: [
            { l1: "Can you help me, please?", en: "the basic request for assistance" },
            { l1: "I'm lost.", en: "I don't know where I am / how to get back" },
            { l1: "I've lost my…", en: "an object of mine is missing" },
            { l1: "my wallet", en: "the small case for cards and cash" },
            { l1: "my passport", en: "your official travel document" },
            { l1: "my phone", en: "your mobile phone" },
            { l1: "Where's the nearest…?", en: "asking for the closest place" },
            { l1: "Do you speak English?", en: "asking if someone can understand you" },
            { l1: "I don't understand.", en: "saying you didn't follow" },
            { l1: "Could you help me find…?", en: "asking help to locate something" },
          ],
        },
        {
          type: "dialogue",
          heading: "Lost near the station",
          setup: "You can't find your way back to your hotel.",
          lines: [
            { speaker: "You", l1: "Excuse me, can you help me, please? I'm lost.", en: "Polite opener plus a clear request." },
            { speaker: "Local", l1: "Of course. Where are you trying to get to?", en: "Asking your destination." },
            { speaker: "You", l1: "My hotel, near Victoria. And I've lost my map.", en: "'I've lost my…' = an object is missing." },
            { speaker: "Local", l1: "No worries — Victoria's just down there.", en: "'No worries' = it's fine." },
            { speaker: "You", l1: "Thank you so much.", en: "Sincere thanks." },
            { speaker: "Local", l1: "Happy to help.", en: "A friendly reply." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Choose the right phrase",
          items: [
            {
              template: "Can you ___ me, please?",
              answer: "help",
              en: "Basic request.",
              options: ["help", "tell", "give", "show"],
            },
            {
              template: "I'm ___ — I don't know the way back.",
              answer: "lost",
              en: "You can't find your way.",
              options: ["lost", "late", "tired", "sorry"],
            },
            {
              template: "I've lost my ___ — all my cards were in it.",
              answer: "wallet",
              en: "Holds cards and cash.",
              options: ["wallet", "lost", "way", "help"],
            },
            {
              template: "Sorry, I don't ___.",
              answer: "understand",
              en: "You didn't follow.",
              options: ["understand", "know", "speak", "hear"],
            },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Quick check",
          questions: [
            {
              q: "Which means you can't find your way?",
              options: ["I've lost my keys.", "I'm lost.", "I lost the game.", "It's lost."],
              correct: 1,
            },
            {
              q: "How do you say an object of yours is missing?",
              options: ["I'm lost.", "I've lost my passport.", "The passport is here.", "I find passport."],
              correct: 1,
            },
            {
              q: "The simplest clear request for help is…",
              options: [
                "Could you possibly perhaps assist?",
                "Can you help me, please?",
                "Help.",
                "I require assistance immediately.",
              ],
              correct: 1,
            },
          ],
        },
      ],
    },
    {
      slug: "help-chemist",
      title: "The chemist & feeling unwell",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "At the chemist",
          body: [
            "In Britain, a pharmacy is usually called the <strong>chemist</strong> (or 'the chemist's'). Big chains include Boots and Superdrug.",
            "To describe minor illness, use <strong>'I've got a…'</strong>: <em>'I've got a headache'</em>, <em>'I've got a cold'</em>, <em>'I've got a sore throat'</em>.",
            "To ask for a remedy, the natural phrase is <strong>'Have you got something for…?'</strong> — for example, <em>'Have you got something for a headache?'</em>",
          ],
          keyPoint: "'I've got a [symptom].' To ask for a remedy: 'Have you got something for…?'",
        },
        {
          type: "vocab",
          heading: "Feeling-unwell vocabulary",
          items: [
            { l1: "the chemist", en: "the pharmacy", note: "US: 'drugstore' / 'pharmacy'." },
            { l1: "I've got a headache", en: "my head hurts" },
            { l1: "I've got a cold", en: "I have a runny nose and feel poorly" },
            { l1: "a sore throat", en: "a painful throat" },
            { l1: "I feel sick", en: "I feel like vomiting", note: "In the UK 'sick' often means nauseous." },
            { l1: "painkillers", en: "medicine that reduces pain", note: "e.g. paracetamol, ibuprofen." },
            { l1: "a plaster", en: "a small sticky bandage", note: "US: 'band-aid'." },
            { l1: "a prescription", en: "a doctor's written order for medicine" },
            { l1: "Have you got something for…?", en: "asking for a remedy" },
            { l1: "poorly", en: "unwell, ill (informal)" },
          ],
        },
        {
          type: "dialogue",
          heading: "At the chemist's counter",
          setup: "You're not feeling well and pop into Boots.",
          lines: [
            { speaker: "You", l1: "Hi, have you got something for a headache?", en: "Asking for a remedy." },
            { speaker: "Pharmacist", l1: "Yes, paracetamol or ibuprofen. Any other symptoms?", en: "Offering painkillers and checking." },
            { speaker: "You", l1: "I've got a bit of a sore throat as well.", en: "'A bit of' softens it." },
            { speaker: "Pharmacist", l1: "These lozenges should help. Are you allergic to anything?", en: "Suggesting a remedy and checking allergies." },
            { speaker: "You", l1: "No, nothing. How often should I take them?", en: "Asking about dosage." },
            { speaker: "Pharmacist", l1: "One every four hours, with food.", en: "Dosage instructions." },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the sentence",
          items: [
            { tokens: ["I've", "got", "a", "headache", "."], en: "I've got a headache." },
            { tokens: ["Have", "you", "got", "something", "for", "a", "cold", "?"], en: "Have you got something for a cold?" },
            { tokens: ["How", "often", "should", "I", "take", "them", "?"], en: "How often should I take them?" },
            { tokens: ["Where's", "the", "nearest", "chemist", "?"], en: "Where's the nearest chemist?" },
          ],
        },
        {
          type: "translate",
          heading: "Say it in natural English",
          direction: "en-to-l1",
          prompt: "At the chemist, ask whether they have anything for a sore throat.",
          reference: "Have you got something for a sore throat?",
          hint: "Use the pattern 'Have you got something for…?'",
        },
      ],
    },
    {
      slug: "help-emergencies",
      title: "Emergencies",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "999 and A&E",
          body: [
            "In the UK, the emergency number is <strong>999</strong> (112 also works). The operator asks, <em>'Which service do you need — police, fire or ambulance?'</em>",
            "<strong>A&E</strong> means Accident & Emergency — the hospital department for urgent care (Americans say 'the ER').",
            "To report a crime, you say <em>'I'd like to report a theft'</em> (a theft = something was stolen). Stay calm, give your <strong>location</strong>, and describe what happened.",
          ],
          keyPoint: "999 = emergencies. A&E = hospital urgent care. 'I'd like to report a theft.'",
        },
        {
          type: "vocab",
          heading: "Emergency vocabulary",
          items: [
            { l1: "999", en: "the UK emergency phone number", note: "Say 'nine nine nine'." },
            { l1: "an ambulance", en: "the emergency medical vehicle" },
            { l1: "the police", en: "the law-enforcement service" },
            { l1: "the fire brigade", en: "the firefighters", note: "US: 'the fire department'." },
            { l1: "A&E", en: "Accident & Emergency, hospital urgent care", note: "Say 'A and E'. US: 'the ER'." },
            { l1: "a theft", en: "the crime of stealing" },
            { l1: "to report", en: "to officially tell the authorities" },
            { l1: "It's an emergency.", en: "this is urgent" },
            { l1: "I need an ambulance.", en: "requesting medical help" },
            { l1: "Someone's been hurt.", en: "a person is injured" },
          ],
        },
        {
          type: "dialogue",
          heading: "Calling 999",
          setup: "You call the emergency line after an accident in the street.",
          lines: [
            { speaker: "Operator", l1: "Emergency, which service do you need?", en: "Police, fire or ambulance?" },
            { speaker: "You", l1: "Ambulance, please. Someone's been hurt.", en: "Requesting medical help; a person is injured." },
            { speaker: "Operator", l1: "What's your location?", en: "Where are you?" },
            { speaker: "You", l1: "Outside the museum on Great Russell Street.", en: "Giving a clear location." },
            { speaker: "Operator", l1: "Stay on the line. Help is on the way.", en: "Don't hang up; an ambulance is coming." },
            { speaker: "You", l1: "Thank you. Please hurry.", en: "Urging speed." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Complete the emergency phrase",
          items: [
            {
              template: "It's an ___ — please send an ambulance.",
              answer: "emergency",
              en: "An urgent situation.",
              options: ["emergency", "accident", "incident", "issue"],
            },
            {
              template: "I'd like to ___ a theft.",
              answer: "report",
              en: "Officially tell the police.",
              options: ["report", "say", "tell", "speak"],
            },
            {
              template: "We need to get to ___ — she's badly hurt.",
              answer: "A&E",
              en: "Hospital urgent care.",
              options: ["A&E", "the chemist", "reception", "the lift"],
            },
            {
              template: "Which ___ do you need — police, fire or ambulance?",
              answer: "service",
              en: "What the operator asks.",
              options: ["service", "number", "place", "person"],
            },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Lesson check",
          questions: [
            {
              q: "The UK emergency number is…",
              options: ["911", "999", "112 only", "101"],
              correct: 1,
              fb: "999 is the main UK emergency number (112 also works).",
            },
            {
              q: "'A&E' is…",
              options: ["the chemist", "hospital urgent care", "the police station", "a bus route"],
              correct: 1,
            },
            {
              q: "To tell the police about a stolen bag, you say…",
              options: [
                "I'd like to report a theft.",
                "I've got a headache.",
                "Where's the nearest chemist?",
                "I have a reservation.",
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
        q: "Which means you can't find your way?",
        options: ["I've lost my keys.", "I'm lost.", "I lost the match.", "It's lost."],
        correct: 1,
      },
      {
        q: "How do you say an object of yours is missing?",
        options: ["I'm lost.", "I've lost my phone.", "The phone is here.", "I find my phone."],
        correct: 1,
      },
      {
        q: "In Britain, a pharmacy is usually called the…",
        options: ["drugstore", "chemist", "surgery", "clinic"],
        correct: 1,
      },
      {
        q: "Which asks for a remedy?",
        options: [
          "Have you got something for a cold?",
          "I have a reservation.",
          "Which platform is it?",
          "I'm lost.",
        ],
        correct: 0,
      },
      {
        q: "To describe a symptom you say…",
        options: ["I'm a headache.", "I've got a headache.", "I do headache.", "Headache me."],
        correct: 1,
      },
      {
        q: "The UK emergency number is…",
        options: ["911", "999", "101", "100"],
        correct: 1,
      },
      {
        q: "'A&E' stands for…",
        options: ["Ambulance & Emergency", "Accident & Emergency", "Aid & Examination", "Arrivals & Exits"],
        correct: 1,
      },
      {
        q: "When you call 999, the operator first asks…",
        options: [
          "What's your name?",
          "Which service do you need?",
          "Have you got insurance?",
          "Where do you live?",
        ],
        correct: 1,
      },
      {
        q: "To tell the police your bag was stolen, you say…",
        options: [
          "I'd like to report a theft.",
          "I've got a sore throat.",
          "Is breakfast included?",
          "Mind the gap.",
        ],
        correct: 0,
      },
      {
        q: "The simplest clear request for help is…",
        options: [
          "I require immediate assistance.",
          "Can you help me, please?",
          "Help is needed.",
          "Assist.",
        ],
        correct: 1,
      },
    ],
  },
};
