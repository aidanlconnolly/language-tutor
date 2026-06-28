import type { Unit } from "../../types";

export const UNIT_COMPLAINTS: Unit = {
  slug: "complaints",
  stage: 6,
  order: 28,
  icon: "📣",
  title: "Complaints & returns",
  tagline: "Umtauschen, das funktioniert nicht, getting a refund.",
  badge: "tourist",
  lessons: [
    {
      slug: "complaints-describe-problem",
      title: "Describing a problem",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Saying what's wrong",
          body: [
            "When something is broken or faulty, the workhorse phrases are <strong>Das funktioniert nicht</strong> (\"it doesn't work\") and <strong>Das ist kaputt</strong> (\"it's broken\").",
            "For the wrong item or fit, name the problem directly: <strong>Das ist die falsche Größe</strong> (\"that's the wrong size\"), <em>die falsche Farbe</em> (wrong colour), <em>das falsche Modell</em> (wrong model).",
            "Faults: <em>Es ist beschädigt</em> (it's damaged), <em>Es hat einen Fehler / einen Mangel</em> (it has a defect), <em>Es ist gerissen / gebrochen</em> (it's torn / cracked).",
            "Lead in politely: <strong>Ich habe ein Problem mit …</strong> (\"I have a problem with …\") — and remember <em>mit</em> takes the dative: <em>mit dem Laptop, mit der Jacke</em>.",
          ],
          keyPoint:
            "Das funktioniert nicht · Das ist kaputt · Das ist die falsche Größe · Ich habe ein Problem mit + dative.",
        },
        {
          type: "vocab",
          heading: "Problem vocabulary",
          items: [
            { l1: "das Problem", en: "the problem", note: "das Problem, plural die Probleme." },
            { l1: "kaputt", en: "broken / not working" },
            { l1: "funktionieren", en: "to work / function", note: "Das funktioniert nicht." },
            { l1: "der Fehler", en: "the fault / mistake", note: "der Fehler, plural die Fehler." },
            { l1: "der Mangel", en: "the defect", note: "der Mangel, plural die Mängel." },
            { l1: "beschädigt", en: "damaged" },
            { l1: "gerissen", en: "torn" },
            { l1: "die falsche Größe", en: "the wrong size" },
            { l1: "die falsche Farbe", en: "the wrong colour" },
            { l1: "Es fehlt etwas.", en: "Something is missing." },
            { l1: "Es geht nicht.", en: "It doesn't work. (colloquial)" },
            { l1: "Ich habe ein Problem mit …", en: "I have a problem with …" },
          ],
        },
        {
          type: "dialogue",
          heading: "A faulty kettle",
          setup: "You bought a kettle yesterday and it won't switch on.",
          lines: [
            { speaker: "You", l1: "Guten Tag, ich habe ein Problem mit diesem Wasserkocher.", en: "Hello, I have a problem with this kettle." },
            { speaker: "Verkäufer", l1: "Was ist denn los?", en: "What's the matter?" },
            { speaker: "You", l1: "Er funktioniert nicht. Er geht gar nicht an.", en: "It doesn't work. It won't switch on at all." },
            { speaker: "Verkäufer", l1: "Haben Sie ihn gestern gekauft?", en: "Did you buy it yesterday?" },
            { speaker: "You", l1: "Ja, gestern. Hier ist der Kassenbon. Er ist offensichtlich kaputt.", en: "Yes, yesterday. Here's the receipt. It's clearly broken." },
            { speaker: "Verkäufer", l1: "Tut mir leid. Das ist eindeutig ein Mangel.", en: "I'm sorry. That's clearly a defect." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Name the problem",
          items: [
            {
              template: "Der Wasserkocher ___ nicht.",
              answer: "funktioniert",
              en: "The kettle doesn't work.",
              options: ["funktioniert", "funktionieren", "ist", "geht an"],
            },
            {
              template: "Das ist die ___ Größe.",
              answer: "falsche",
              en: "That's the wrong size.",
              options: ["falsche", "richtige", "kaputte", "neue"],
            },
            {
              template: "Ich habe ein Problem mit ___ Jacke.",
              answer: "der",
              en: "I have a problem with the jacket.",
              options: ["die", "der", "dem", "den"],
            },
            {
              template: "Das Gerät ist ___ — es geht nicht an.",
              answer: "kaputt",
              en: "The device is broken — it won't turn on.",
              options: ["kaputt", "günstig", "neu", "richtig"],
            },
            {
              template: "Die Tasche ist ___ — hier ist ein Riss.",
              answer: "beschädigt",
              en: "The bag is damaged — there's a tear here.",
              options: ["beschädigt", "billig", "perfekt", "groß"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "I have a problem with this lamp. It doesn't work and it's broken.",
          reference: "Ich habe ein Problem mit dieser Lampe. Sie funktioniert nicht und sie ist kaputt.",
          hint: "mit takes dative: mit dieser Lampe (f.). die Lampe → sie.",
        },
      ],
    },
    {
      slug: "complaints-returns-refunds",
      title: "Returns & refunds",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Umtauschen, zurückgeben, Geld zurück",
          body: [
            "Two key verbs: <strong>umtauschen</strong> = to exchange (for another item), and <strong>zurückgeben</strong> = to return / give back. Both are separable: <em>Ich möchte das umtauschen</em>, <em>Ich gebe das zurück</em>.",
            "To ask for a refund: <strong>Ich möchte mein Geld zurück</strong> = \"I'd like my money back\", or more formally <em>Ich hätte gern eine Rückerstattung</em> (\"a refund\").",
            "You almost always need the receipt — <strong>die Quittung</strong> or <strong>der Kassenbon</strong>. Note: in Germany shops are <em>not</em> legally required to take back non-faulty goods, but most offer it within 14–30 days <em>aus Kulanz</em> (as a goodwill gesture). Faulty goods, however, you can always return under the <em>Gewährleistung</em> (statutory warranty).",
            "<em>Ich möchte das umtauschen</em> + <em>Haben Sie noch den Kassenbon?</em> is the script you'll hear.",
          ],
          keyPoint:
            "umtauschen = exchange · zurückgeben = return · Ich möchte mein Geld zurück = I want a refund · die Quittung/der Kassenbon needed.",
        },
        {
          type: "vocab",
          heading: "Returns vocabulary",
          items: [
            { l1: "umtauschen", en: "to exchange", note: "Separable: Ich tausche es um." },
            { l1: "zurückgeben", en: "to return / give back", note: "Separable: Ich gebe es zurück." },
            { l1: "der Umtausch", en: "the exchange (noun)" },
            { l1: "die Rückerstattung", en: "the refund" },
            { l1: "Ich möchte mein Geld zurück.", en: "I'd like my money back." },
            { l1: "die Quittung", en: "the receipt", note: "die Quittung, plural die Quittungen." },
            { l1: "der Kassenbon", en: "the till receipt" },
            { l1: "die Garantie", en: "the (manufacturer's) guarantee" },
            { l1: "die Gewährleistung", en: "the statutory warranty" },
            { l1: "aus Kulanz", en: "as a goodwill gesture" },
            { l1: "Wann haben Sie es gekauft?", en: "When did you buy it?" },
            { l1: "innerhalb von 14 Tagen", en: "within 14 days" },
          ],
        },
        {
          type: "dialogue",
          heading: "Returning a sweater",
          setup: "The sweater is the wrong size and you want your money back.",
          lines: [
            { speaker: "You", l1: "Hallo, ich möchte diesen Pullover umtauschen. Er ist zu klein.", en: "Hello, I'd like to exchange this sweater. It's too small." },
            { speaker: "Verkäuferin", l1: "Kein Problem. Haben Sie noch den Kassenbon?", en: "No problem. Do you still have the receipt?" },
            { speaker: "You", l1: "Ja, hier. Eigentlich möchte ich lieber mein Geld zurück.", en: "Yes, here. Actually I'd rather have my money back." },
            { speaker: "Verkäuferin", l1: "Wann haben Sie ihn gekauft?", en: "When did you buy it?" },
            { speaker: "You", l1: "Vorgestern. Das ist innerhalb von vierzehn Tagen, oder?", en: "The day before yesterday. That's within fourteen days, right?" },
            { speaker: "Verkäuferin", l1: "Genau. Dann erstatten wir Ihnen den Betrag auf die Karte zurück.", en: "Exactly. Then we'll refund the amount to your card." },
            { speaker: "You", l1: "Super, vielen Dank.", en: "Great, thank you very much." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Returns fill",
          items: [
            {
              template: "Ich möchte diesen Pullover ___.",
              answer: "umtauschen",
              en: "I'd like to exchange this sweater.",
              options: ["umtauschen", "kaufen", "anprobieren", "kosten"],
            },
            {
              template: "Ich möchte mein Geld ___.",
              answer: "zurück",
              en: "I'd like my money back.",
              options: ["zurück", "vor", "weg", "hin"],
            },
            {
              template: "Haben Sie noch den ___?",
              answer: "Kassenbon",
              en: "Do you still have the receipt?",
              options: ["Kassenbon", "Pfand", "Mantel", "Preis"],
            },
            {
              template: "Sie können es innerhalb ___ 14 Tagen zurückgeben.",
              answer: "von",
              en: "You can return it within 14 days.",
              options: ["von", "für", "mit", "aus"],
            },
            {
              template: "Wir ___ Ihnen den Betrag auf die Karte zurück.",
              answer: "erstatten",
              en: "We'll refund the amount to your card.",
              options: ["erstatten", "kaufen", "kosten", "tauschen"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "I'd like to return this jacket. Here is the receipt. I'd like my money back.",
          reference: "Ich möchte diese Jacke zurückgeben. Hier ist der Kassenbon. Ich möchte mein Geld zurück.",
          hint: "zurückgeben is separable but stays whole after möchte (… zurückgeben at the end).",
        },
      ],
    },
    {
      slug: "complaints-escalation",
      title: "Polite escalation",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "When the clerk can't help",
          body: [
            "If the first person can't resolve it, escalate politely. Ask to speak to the manager: <strong>Kann ich mit dem Geschäftsführer sprechen?</strong> (<em>der Geschäftsführer</em> = manager; <em>sprechen mit</em> takes the dative → <em>mit dem Geschäftsführer</em>).",
            "Stay courteous but firm. Useful openers: <em>Ich verstehe das, aber …</em> (\"I understand that, but …\"), <em>Das ist leider nicht akzeptabel</em> (\"that's unfortunately not acceptable\"), <em>Ich bestehe auf einer Rückerstattung</em> (\"I insist on a refund\").",
            "You can ask for the next step: <em>An wen kann ich mich wenden?</em> (\"Who can I turn to?\"), <em>Ich möchte mich beschweren</em> (\"I'd like to make a complaint\"), and ask for it in writing: <em>Könnte ich das schriftlich bekommen?</em>",
            "A calm <em>Ich möchte mit Ihrem Vorgesetzten sprechen</em> (\"I'd like to speak to your supervisor\") usually gets results without raising your voice.",
          ],
          keyPoint:
            "Kann ich mit dem Geschäftsführer sprechen? · Ich möchte mich beschweren · Ich bestehe auf einer Rückerstattung. Stay polite but firm.",
        },
        {
          type: "vocab",
          heading: "Escalation phrases",
          items: [
            { l1: "der Geschäftsführer", en: "the manager", note: "der Geschäftsführer; mit dem … (dative)." },
            { l1: "der Vorgesetzte", en: "the supervisor" },
            { l1: "sich beschweren", en: "to complain", note: "Ich möchte mich beschweren." },
            { l1: "die Beschwerde", en: "the complaint" },
            { l1: "Kann ich mit dem Geschäftsführer sprechen?", en: "Can I speak to the manager?" },
            { l1: "Ich bestehe auf …", en: "I insist on …", note: "+ dative: auf einer Rückerstattung." },
            { l1: "Das ist nicht akzeptabel.", en: "That's not acceptable." },
            { l1: "An wen kann ich mich wenden?", en: "Who can I turn to?" },
            { l1: "Könnte ich das schriftlich bekommen?", en: "Could I get that in writing?" },
            { l1: "Ich verstehe das, aber …", en: "I understand that, but …" },
          ],
        },
        {
          type: "dialogue",
          heading: "Escalating a refused refund",
          setup: "The clerk refuses a refund for a clearly faulty device.",
          lines: [
            { speaker: "Verkäufer", l1: "Tut mir leid, ohne Originalverpackung können wir nichts machen.", en: "Sorry, without the original packaging we can't do anything." },
            { speaker: "You", l1: "Ich verstehe das, aber das Gerät ist kaputt. Das ist ein Mangel.", en: "I understand that, but the device is broken. That's a defect." },
            { speaker: "Verkäufer", l1: "Da kann ich leider nicht helfen.", en: "Unfortunately I can't help with that." },
            { speaker: "You", l1: "Dann möchte ich mich beschweren. Kann ich mit dem Geschäftsführer sprechen?", en: "Then I'd like to make a complaint. Can I speak to the manager?" },
            { speaker: "Verkäufer", l1: "Einen Moment, ich hole sie.", en: "One moment, I'll get her." },
            { speaker: "You", l1: "Danke. Ich bestehe auf einer Rückerstattung.", en: "Thank you. I insist on a refund." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Escalate politely",
          questions: [
            {
              q: "'Can I speak to the manager?' =",
              options: [
                "Kann ich den Geschäftsführer?",
                "Kann ich mit dem Geschäftsführer sprechen?",
                "Wo ist der Geschäftsführer sprechen?",
                "Spreche ich der Geschäftsführer?",
              ],
              correct: 1,
            },
            {
              q: "'I'd like to make a complaint' =",
              options: [
                "Ich möchte mich beschweren.",
                "Ich beschwere Sie.",
                "Ich habe eine Frage.",
                "Ich möchte kaufen.",
              ],
              correct: 0,
            },
            {
              q: "'sprechen mit' takes which case?",
              options: ["nominative", "accusative", "dative", "no article"],
              correct: 2,
            },
            {
              q: "The best tone when escalating is…",
              options: ["loud and angry", "polite but firm", "silent", "apologetic and giving up"],
              correct: 1,
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "I understand that, but the device is broken. Can I speak to the manager?",
          reference: "Ich verstehe das, aber das Gerät ist kaputt. Kann ich mit dem Geschäftsführer sprechen?",
          hint: "sprechen mit + dative: mit dem Geschäftsführer.",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "'Can I speak to the manager?' =",
              options: [
                "Kann ich mit dem Geschäftsführer sprechen?",
                "Wo ist der Geschäftsführer?",
                "Ich möchte einen Geschäftsführer.",
                "Sprechen Geschäftsführer?",
              ],
              correct: 0,
            },
            {
              q: "'Ich möchte mich beschweren' means…",
              options: [
                "I'd like to pay.",
                "I'd like to make a complaint.",
                "I'd like to buy this.",
                "I'd like a bag.",
              ],
              correct: 1,
            },
            {
              q: "The right approach when escalating is to be…",
              options: ["rude", "polite but firm", "totally silent", "give up immediately"],
              correct: 1,
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
        q: "'It doesn't work' =",
        options: ["Das ist teuer.", "Das funktioniert nicht.", "Das ist falsch.", "Das gefällt mir."],
        correct: 1,
      },
      {
        q: "'It's broken' =",
        options: ["Das ist kaputt.", "Das ist günstig.", "Das ist neu.", "Das ist groß."],
        correct: 0,
      },
      {
        q: "'That's the wrong size' =",
        options: [
          "Das ist die richtige Größe.",
          "Das ist die falsche Größe.",
          "Das ist eine Nummer größer.",
          "Das ist zu teuer.",
        ],
        correct: 1,
      },
      {
        q: "'umtauschen' means to…",
        options: ["pay", "exchange", "complain", "try on"],
        correct: 1,
      },
      {
        q: "'I'd like my money back' =",
        options: [
          "Ich möchte mein Geld zurück.",
          "Ich möchte eine Tüte.",
          "Ich hätte gern Bargeld.",
          "Ich möchte umtauschen.",
        ],
        correct: 0,
      },
      {
        q: "For a return you usually need the…",
        options: ["Pfand", "Quittung / Kassenbon", "Tüte", "EC-Karte"],
        correct: 1,
      },
      {
        q: "'die Rückerstattung' is the…",
        options: ["receipt", "refund", "exchange item", "discount"],
        correct: 1,
      },
      {
        q: "'Can I speak to the manager?' =",
        options: [
          "Kann ich mit dem Geschäftsführer sprechen?",
          "Wo ist der Geschäftsführer?",
          "Ich bin der Geschäftsführer.",
          "Sprechen Sie Geschäftsführer?",
        ],
        correct: 0,
      },
      {
        q: "'sprechen mit' takes the…",
        options: ["nominative", "accusative", "dative", "genitive"],
        correct: 2,
      },
      {
        q: "Translate: 'I'd like to make a complaint.'",
        options: [
          "Ich möchte zahlen.",
          "Ich möchte mich beschweren.",
          "Ich möchte das anprobieren.",
          "Ich möchte eine Quittung.",
        ],
        correct: 1,
      },
    ],
  },
};
