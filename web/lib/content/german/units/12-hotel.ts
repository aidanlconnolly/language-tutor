import type { Unit } from "../../types";

export const UNIT_HOTEL: Unit = {
  slug: "hotel",
  stage: 3,
  order: 12,
  icon: "🏨",
  title: "Airport & hotel",
  tagline: "Check-in, ein Zimmer reservieren, der Reisepass.",
  badge: "tourist",
  lessons: [
    {
      slug: "hotel-airport",
      title: "At the airport",
      summary: "Passport control, luggage, and the words on the signs at BER.",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Landing at BER",
          body: [
            "Berlin's airport is <strong>BER</strong> (Flughafen Berlin Brandenburg). Off the plane, you follow signs for <em>Passkontrolle</em> (passport control) and then <em>Gepäckausgabe</em> (baggage claim).",
            "At passport control you'll need your <strong>der Reisepass</strong> (passport). The officer may ask <em>«Wie lange bleiben Sie?»</em> (how long are you staying?) and <em>«Was ist der Grund Ihrer Reise?»</em> (what's the purpose of your trip?). A simple <em>«Urlaub»</em> (holiday) is a fine answer.",
            "Then comes <strong>der Zoll</strong> (customs) — usually just walk through the green channel if you've nothing to declare (<em>nichts zu verzollen</em>).",
          ],
          keyPoint:
            "Passkontrolle → Gepäckausgabe → Zoll. Carry your Reisepass. 'Urlaub' = holiday is your answer.",
        },
        {
          type: "vocab",
          heading: "Airport vocab",
          items: [
            { l1: "der Flughafen", en: "the airport", note: "masculine; plural die Flughäfen" },
            { l1: "der Reisepass / der Pass", en: "the passport", note: "masculine" },
            { l1: "der Personalausweis", en: "the ID card", note: "masculine; EU travellers use this" },
            { l1: "die Passkontrolle", en: "passport control", note: "feminine" },
            { l1: "das Gepäck", en: "the luggage", note: "neuter; no plural, always singular" },
            { l1: "der Koffer", en: "the suitcase", note: "masculine; plural die Koffer" },
            { l1: "die Gepäckausgabe", en: "baggage claim", note: "feminine" },
            { l1: "der Zoll", en: "customs", note: "masculine" },
            { l1: "der Flug", en: "the flight", note: "masculine; plural die Flüge" },
            { l1: "die Ankunft / der Abflug", en: "arrival / departure", note: "on the airport boards" },
            { l1: "der Urlaub", en: "the holiday / vacation", note: "masculine; im Urlaub = on holiday" },
            { l1: "der Ausgang", en: "the exit", note: "masculine; follow it to the trains" },
          ],
        },
        {
          type: "dialogue",
          heading: "At passport control",
          setup: "You hand your passport to the officer at BER.",
          lines: [
            { speaker: "Beamter", l1: "Guten Tag. Ihren Reisepass, bitte.", en: "Hello. Your passport, please." },
            { speaker: "You", l1: "Hier, bitte.", en: "Here you go." },
            { speaker: "Beamter", l1: "Was ist der Grund Ihrer Reise?", en: "What is the purpose of your trip?" },
            { speaker: "You", l1: "Urlaub. Ich bleibe eine Woche.", en: "Holiday. I'm staying one week." },
            { speaker: "Beamter", l1: "Wo wohnen Sie in Berlin?", en: "Where are you staying in Berlin?" },
            { speaker: "You", l1: "In einem Hotel in Mitte.", en: "In a hotel in Mitte." },
            { speaker: "Beamter", l1: "Danke. Schönen Aufenthalt!", en: "Thanks. Enjoy your stay!" },
          ],
        },
        {
          type: "fillBlank",
          heading: "Complete the exchange",
          items: [
            {
              template: "Ihren ___, bitte.",
              answer: "Reisepass",
              en: "Your passport, please.",
              options: ["Reisepass", "Koffer", "Flug", "Zoll"],
            },
            {
              template: "Wo ist die ___? Ich suche meinen Koffer.",
              answer: "Gepäckausgabe",
              en: "Where is baggage claim? I'm looking for my suitcase.",
              options: ["Passkontrolle", "Gepäckausgabe", "Ankunft", "Ampel"],
            },
            {
              template: "Was ist der Grund Ihrer Reise? — ___.",
              answer: "Urlaub",
              en: "What's the purpose of your trip? — Holiday.",
              options: ["Urlaub", "Koffer", "Flughafen", "Zoll"],
            },
            {
              template: "Ich ___ eine Woche in Berlin.",
              answer: "bleibe",
              en: "I'm staying one week in Berlin.",
              options: ["bleibe", "fahre", "komme", "gehe"],
            },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Quick check",
          questions: [
            {
              q: "'der Reisepass' is…",
              options: ["the suitcase", "the passport", "customs", "the flight"],
              correct: 1,
            },
            {
              q: "Where do you collect your suitcase?",
              options: ["Passkontrolle", "Zoll", "Gepäckausgabe", "Abflug"],
              correct: 2,
            },
            {
              q: "'Das Gepäck' takes which article?",
              options: ["der", "die", "das", "den"],
              correct: 2,
              fb: "Gepäck is neuter — das Gepäck — and has no plural.",
            },
            {
              q: "A good answer to 'Was ist der Grund Ihrer Reise?' is…",
              options: ["Koffer", "Urlaub", "Zoll", "Flughafen"],
              correct: 1,
            },
          ],
        },
      ],
    },
    {
      slug: "hotel-checkin",
      title: "Hotel check-in & booking",
      summary: "Say you reserved a room, ask for a single or double, and confirm the details.",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "The check-in script",
          body: [
            "The line that opens every check-in: <em>«Ich habe ein Zimmer reserviert»</em> = I've reserved a room. It's in the perfect tense (<strong>habe … reserviert</strong>), but you can just memorise it as a block.",
            "Know your room words: <strong>das Einzelzimmer</strong> (single room), <strong>das Doppelzimmer</strong> (double room). And the booking length: <em>«für zwei Nächte»</em> = for two nights, <em>«auf den Namen Müller»</em> = under the name Müller.",
            "Two phrases you'll be asked: <em>«Auf welchen Namen?»</em> (under what name?) and <em>«Wie viele Nächte?»</em> (how many nights?). And a key checkout fact: <em>das Frühstück</em> (breakfast) is often extra.",
          ],
          keyPoint:
            "Ich habe ein Zimmer reserviert. Einzelzimmer / Doppelzimmer. für X Nächte, auf den Namen …",
        },
        {
          type: "vocab",
          heading: "Booking & check-in vocab",
          items: [
            { l1: "das Zimmer", en: "the room", note: "neuter; plural die Zimmer" },
            { l1: "das Einzelzimmer", en: "the single room", note: "neuter; for one person" },
            { l1: "das Doppelzimmer", en: "the double room", note: "neuter; for two" },
            { l1: "reservieren", en: "to reserve / book", note: "ich habe … reserviert (perfect)" },
            { l1: "die Reservierung", en: "the reservation", note: "feminine" },
            { l1: "die Nacht", en: "the night", note: "feminine; plural die Nächte" },
            { l1: "der Schlüssel / die Schlüsselkarte", en: "the key / key card", note: "Schlüssel is masculine" },
            { l1: "das Frühstück", en: "breakfast", note: "neuter; inklusive? = included?" },
            { l1: "der Aufzug / der Fahrstuhl", en: "the lift / elevator", note: "both masculine" },
            { l1: "die Rezeption", en: "the reception / front desk", note: "feminine" },
            { l1: "auschecken / einchecken", en: "to check out / in" },
            { l1: "auf den Namen …", en: "under the name …", note: "auf den Namen Müller" },
          ],
        },
        {
          type: "dialogue",
          heading: "Checking in at a Berlin hotel",
          setup: "You arrive at the front desk in Mitte.",
          lines: [
            { speaker: "You", l1: "Guten Tag. Ich habe ein Zimmer reserviert, auf den Namen Schmidt.", en: "Hello. I've reserved a room, under the name Schmidt." },
            { speaker: "Rezeption", l1: "Willkommen, Herr Schmidt. Ein Doppelzimmer für zwei Nächte, richtig?", en: "Welcome, Mr Schmidt. A double room for two nights, correct?" },
            { speaker: "You", l1: "Genau. Ist das Frühstück inklusive?", en: "Exactly. Is breakfast included?" },
            { speaker: "Rezeption", l1: "Ja, von sieben bis zehn Uhr im Erdgeschoss.", en: "Yes, from seven to ten on the ground floor." },
            { speaker: "You", l1: "Super. Gibt es WLAN?", en: "Great. Is there Wi-Fi?" },
            { speaker: "Rezeption", l1: "Ja, kostenlos. Hier ist Ihre Schlüsselkarte, Zimmer 305.", en: "Yes, free. Here's your key card, room 305." },
            { speaker: "You", l1: "Vielen Dank!", en: "Thank you very much!" },
          ],
        },
        {
          type: "fillBlank",
          heading: "At the front desk",
          items: [
            {
              template: "Ich habe ein Zimmer ___.",
              answer: "reserviert",
              en: "I've reserved a room.",
              options: ["reserviert", "reservieren", "reserviere", "Reservierung"],
            },
            {
              template: "Ich möchte ein ___ für eine Person.",
              answer: "Einzelzimmer",
              en: "I'd like a single room for one person.",
              options: ["Einzelzimmer", "Doppelzimmer", "Frühstück", "Schlüssel"],
            },
            {
              template: "Wir bleiben für drei ___.",
              answer: "Nächte",
              en: "We're staying for three nights.",
              options: ["Nächte", "Zimmer", "Tage", "Uhr"],
            },
            {
              template: "Ist das ___ inklusive?",
              answer: "Frühstück",
              en: "Is breakfast included?",
              options: ["Frühstück", "Zimmer", "Aufzug", "Schlüssel"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "I've reserved a double room for two nights, under the name Schmidt.",
          reference: "Ich habe ein Doppelzimmer für zwei Nächte reserviert, auf den Namen Schmidt.",
          hint: "Use the perfect block 'Ich habe … reserviert'; the past participle goes to the end.",
        },
      ],
    },
    {
      slug: "hotel-room-problems",
      title: "Room vocab & polite problems",
      summary: "Name what's in the room and report a problem nicely: Die Heizung funktioniert nicht.",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "When something isn't working",
          body: [
            "The polite way to report a problem is the verb <strong>funktionieren</strong> (to work/function): <em>«Die Heizung funktioniert nicht»</em> = the heating doesn't work. Swap in any noun: <em>«Das WLAN funktioniert nicht»</em>, <em>«Der Fernseher funktioniert nicht»</em>.",
            "Soften it with <em>«Entschuldigung, ich habe ein Problem»</em> (excuse me, I have a problem) before you say what's wrong. Germans appreciate the heads-up and the calm tone.",
            "And to ask for a fix: <em>«Könnten Sie das reparieren?»</em> (could you fix that?) or <em>«Könnten Sie mir … bringen?»</em> (could you bring me …?) — both use the polite <strong>könnten</strong> (could).",
          ],
          keyPoint:
            "X funktioniert nicht = X doesn't work. Könnten Sie …? = could you …? (polite request).",
        },
        {
          type: "vocab",
          heading: "In the room",
          items: [
            { l1: "die Heizung", en: "the heating", note: "feminine" },
            { l1: "die Klimaanlage", en: "the air conditioning", note: "feminine" },
            { l1: "das Bad / das Badezimmer", en: "the bathroom", note: "neuter" },
            { l1: "die Dusche", en: "the shower", note: "feminine" },
            { l1: "das warme Wasser", en: "the hot water", note: "neuter; kein warmes Wasser = no hot water" },
            { l1: "das Handtuch", en: "the towel", note: "neuter; plural die Handtücher" },
            { l1: "das Bett", en: "the bed", note: "neuter; plural die Betten" },
            { l1: "das Licht", en: "the light", note: "neuter" },
            { l1: "der Fernseher", en: "the TV", note: "masculine" },
            { l1: "das Fenster", en: "the window", note: "neuter" },
            { l1: "laut / leise", en: "loud / quiet", note: "es ist zu laut = it's too loud" },
            { l1: "kaputt", en: "broken", note: "der Schlüssel ist kaputt" },
          ],
        },
        {
          type: "dialogue",
          heading: "Calling reception about a problem",
          setup: "Your room is cold and the Wi-Fi is down.",
          lines: [
            { speaker: "You", l1: "Guten Abend. Entschuldigung, ich habe ein Problem mit dem Zimmer.", en: "Good evening. Excuse me, I have a problem with the room." },
            { speaker: "Rezeption", l1: "Was ist denn los?", en: "What's the matter?" },
            { speaker: "You", l1: "Die Heizung funktioniert nicht. Es ist sehr kalt.", en: "The heating doesn't work. It's very cold." },
            { speaker: "Rezeption", l1: "Das tut mir leid. Wir schicken jemanden hoch.", en: "I'm sorry. We'll send someone up." },
            { speaker: "You", l1: "Und das WLAN funktioniert auch nicht.", en: "And the Wi-Fi doesn't work either." },
            { speaker: "Rezeption", l1: "Kein Problem, ich gebe Ihnen ein neues Passwort.", en: "No problem, I'll give you a new password." },
            { speaker: "You", l1: "Vielen Dank für Ihre Hilfe.", en: "Thank you for your help." },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the complaint (politely)",
          items: [
            { tokens: ["Die", "Heizung", "funktioniert", "nicht", "."], en: "The heating doesn't work." },
            { tokens: ["Könnten", "Sie", "mir", "ein", "Handtuch", "bringen", "?"], en: "Could you bring me a towel?" },
            { tokens: ["Es", "gibt", "kein", "warmes", "Wasser", "."], en: "There's no hot water." },
            { tokens: ["Das", "Fenster", "ist", "kaputt", "."], en: "The window is broken." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Report it politely",
          items: [
            {
              template: "Die Klimaanlage ___ nicht.",
              answer: "funktioniert",
              en: "The air conditioning doesn't work.",
              options: ["funktioniert", "reserviert", "bleibt", "kommt"],
            },
            {
              template: "___ Sie mir bitte ein Handtuch bringen?",
              answer: "Könnten",
              en: "Could you please bring me a towel?",
              options: ["Könnten", "Müssen", "Wollen", "Haben"],
            },
            {
              template: "Es ist zu ___ — ich kann nicht schlafen.",
              answer: "laut",
              en: "It's too loud — I can't sleep.",
              options: ["laut", "leise", "kalt", "warm"],
            },
            {
              template: "Der Fernseher ist ___.",
              answer: "kaputt",
              en: "The TV is broken.",
              options: ["kaputt", "inklusive", "kostenlos", "frei"],
            },
          ],
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "'Die Heizung funktioniert nicht' means…",
              options: [
                "The heating is on",
                "The heating doesn't work",
                "The heating is included",
                "The heating is new",
              ],
              correct: 1,
            },
            {
              q: "The polite way to start a request is…",
              options: ["Ich will", "Gib mir", "Könnten Sie …?", "Wo ist …?"],
              correct: 2,
            },
            {
              q: "'kaputt' means…",
              options: ["included", "free", "broken", "quiet"],
              correct: 2,
            },
            {
              q: "You want a towel. You say…",
              options: [
                "Könnten Sie mir ein Handtuch bringen?",
                "Die Dusche ist kalt.",
                "Wo ist der Aufzug?",
                "Ich habe ein Zimmer reserviert.",
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
        q: "'der Reisepass' is…",
        options: ["the suitcase", "the passport", "the flight", "customs"],
        correct: 1,
      },
      {
        q: "Where do you pick up your suitcase at the airport?",
        options: ["Passkontrolle", "Gepäckausgabe", "Zoll", "Rezeption"],
        correct: 1,
      },
      {
        q: "'das Gepäck' takes which article?",
        options: ["der", "die", "das", "den"],
        correct: 2,
      },
      {
        q: "How do you say 'I've reserved a room'?",
        options: [
          "Ich reserviere ein Zimmer.",
          "Ich habe ein Zimmer reserviert.",
          "Ich will ein Zimmer.",
          "Ein Zimmer, bitte.",
        ],
        correct: 1,
      },
      {
        q: "A room for one person is a…",
        options: ["Doppelzimmer", "Einzelzimmer", "Badezimmer", "Wartezimmer"],
        correct: 1,
      },
      {
        q: "'für drei Nächte' means…",
        options: ["for three days", "for three nights", "for three rooms", "for three people"],
        correct: 1,
      },
      {
        q: "'Ist das Frühstück inklusive?' asks whether…",
        options: [
          "the room is ready",
          "breakfast is included",
          "Wi-Fi is free",
          "the lift works",
        ],
        correct: 1,
      },
      {
        q: "'Die Heizung funktioniert nicht' means…",
        options: [
          "The heating works",
          "The heating doesn't work",
          "The heating is included",
          "There's no heating room",
        ],
        correct: 1,
      },
      {
        q: "The polite request opener 'Könnten Sie …?' means…",
        options: ["Must you …?", "Could you …?", "Do you want …?", "Where is …?"],
        correct: 1,
      },
      {
        q: "Translate: 'The Wi-Fi doesn't work.'",
        options: [
          "Das WLAN ist inklusive.",
          "Das WLAN funktioniert nicht.",
          "Wo ist das WLAN?",
          "Das WLAN ist kostenlos.",
        ],
        correct: 1,
      },
    ],
  },
};
