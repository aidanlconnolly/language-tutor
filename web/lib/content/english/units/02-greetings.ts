import type { Unit } from "../../types";

export const UNIT_GREETINGS: Unit = {
  slug: "greetings",
  stage: 1,
  order: 2,
  icon: "👋",
  title: "Greetings & politeness",
  tagline: "Hi, hello, good morning — please, thanks, sorry, and 'you alright?'",
  badge: "tourist",
  lessons: [
    {
      slug: "greetings-hello-goodbye",
      title: "Hello and goodbye, formal to friendly",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "How you greet depends on who and when",
          body: [
            "English greetings slide along a scale from formal to casual. <strong>Good morning</strong> / <strong>good afternoon</strong> / <strong>good evening</strong> are the polite, time-based options — for shops, hotels, work and strangers.",
            "<strong>Hello</strong> is the safe all-rounder; <strong>hi</strong> and <strong>hiya</strong> are friendlier. <strong>Morning!</strong> on its own (dropping the 'good') is a cheerful, everyday hello in Britain.",
            "On the way out you have <strong>goodbye</strong> (a touch formal), <strong>bye</strong> / <strong>bye-bye</strong>, <strong>see you</strong>, and the very British <strong>cheers</strong> — which means both \"thanks\" and \"bye\" depending on the moment.",
          ],
          tip: {
            label: "A British quirk",
            body: "<strong>Good night</strong> is only for leaving at the end of the evening or going to bed — never a greeting. To greet someone in the evening, say <em>good evening</em> or just <em>hello</em>.",
          },
        },
        {
          type: "vocab",
          heading: "Hellos and goodbyes",
          items: [
            { l1: "hello", en: "the standard greeting", note: "Works any time, any register." },
            { l1: "hi", en: "a friendly hello", note: "Casual but very common, even at work." },
            { l1: "hiya", en: "a warm, casual hello", note: "Friends and familiar faces." },
            { l1: "good morning", en: "hello before midday", note: "Often shortened to just 'Morning!'" },
            { l1: "good afternoon", en: "hello from midday to evening", note: "Polite; common in shops and offices." },
            { l1: "good evening", en: "hello after about 6pm", note: "Polite. Not 'good night' to greet!" },
            { l1: "goodbye", en: "the formal farewell", note: "A bit formal; 'bye' is more usual." },
            { l1: "bye / bye-bye", en: "casual farewell", note: "Bye-bye is friendly, slightly soft." },
            { l1: "see you", en: "informal 'goodbye'", note: "Often 'see you later', 'see you soon'." },
            { l1: "cheers", en: "thanks, or bye", note: "Very British. Also said when clinking glasses." },
          ],
        },
        {
          type: "dialogue",
          heading: "Arriving at a small hotel",
          setup: "You arrive at a bed-and-breakfast in the Cotswolds late in the afternoon.",
          lines: [
            { speaker: "Host", l1: "Good afternoon! Welcome.", en: "A polite, time-based greeting on arrival." },
            { speaker: "You", l1: "Good afternoon. I have a booking under Clarke.", en: "Returning the greeting and giving your name. 'Booking' = reservation." },
            { speaker: "Host", l1: "Lovely. Let me check you in.", en: "'Lovely' means 'fine, great'. 'Check you in' = register your arrival." },
            { speaker: "You", l1: "Thank you so much.", en: "A warm thanks." },
            { speaker: "Host", l1: "Here's your key. See you at breakfast!", en: "'See you' is a casual 'goodbye for now'." },
            { speaker: "You", l1: "Cheers, see you then.", en: "'Cheers' here means 'thanks'; 'see you then' confirms the next meeting." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Pick the right greeting",
          questions: [
            {
              q: "You walk into a bakery at 9am. The polite greeting is…",
              options: ["Good night!", "Good morning!", "See you!", "Cheers!"],
              correct: 1,
              fb: "\"Good morning\" — polite and time-appropriate before midday.",
            },
            {
              q: "A friend says \"Cheers!\" as they hand you a coffee. It means…",
              options: ["Goodbye", "Sorry", "Thanks / here you go", "Good night"],
              correct: 2,
              fb: "\"Cheers\" is a very British 'thanks'.",
            },
            {
              q: "Which is the MOST casual way to say hello?",
              options: ["Good evening", "Hello", "Hiya", "Good afternoon"],
              correct: 2,
              fb: "\"Hiya\" is the friendliest, most casual of these.",
            },
          ],
        },
      ],
    },
    {
      slug: "greetings-please-thanks-sorry",
      title: "Please, thank you, sorry & excuse me",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "The words that oil British life",
          body: [
            "Politeness words do a lot of work in Britain. <strong>Please</strong> softens any request; leaving it out can sound abrupt or rude even when you don't mean it.",
            "<strong>Sorry</strong> and <strong>excuse me</strong> are not the same. <strong>Excuse me</strong> comes <em>before</em> you interrupt or get past someone; <strong>sorry</strong> comes <em>after</em> a bump, a mistake, or to apologise. Britons also say <em>sorry</em> to mean \"pardon? I didn't hear you.\"",
            "Replies matter too. To a thank-you, you can say <strong>you're welcome</strong>, the breezy <strong>no worries</strong>, <strong>no problem</strong>, or simply <strong>that's alright</strong>.",
          ],
          keyPoint:
            "Excuse me = before (to get attention or pass). Sorry = after (to apologise, or to mean 'pardon?').",
        },
        {
          type: "vocab",
          heading: "The politeness toolkit",
          intro: "These few phrases will carry you through almost any short exchange.",
          items: [
            { l1: "please", en: "softens a request", note: "Goes at the end: 'A coffee, please.'" },
            { l1: "thank you", en: "expresses gratitude", note: "'Thanks' is the casual short form." },
            { l1: "thanks a lot", en: "a warmer thank you", note: "Tone matters — flat, it can sound sarcastic." },
            { l1: "cheers", en: "casual 'thanks'", note: "Very common in Britain." },
            { l1: "sorry", en: "an apology, or 'pardon?'", note: "Said after a mistake, or to ask someone to repeat." },
            { l1: "excuse me", en: "to interrupt or pass", note: "Said before getting attention or squeezing by." },
            { l1: "you're welcome", en: "reply to thanks", note: "Slightly formal but always correct." },
            { l1: "no worries", en: "casual 'you're welcome'", note: "Relaxed and friendly." },
            { l1: "no problem", en: "casual 'it's fine'", note: "Common reply to thanks or a small apology." },
          ],
        },
        {
          type: "dialogue",
          heading: "Getting past someone on the Tube",
          setup: "You need to reach the doors on a crowded London Underground train.",
          lines: [
            { speaker: "You", l1: "Excuse me, is this your stop?", en: "'Excuse me' to get attention before squeezing past. 'Stop' = the station you get off at." },
            { speaker: "Passenger", l1: "No, go ahead.", en: "'Go ahead' means 'yes, you may pass'." },
            { speaker: "You", l1: "Sorry — thanks!", en: "'Sorry' for the slight bother, then a quick thanks." },
            { speaker: "Passenger", l1: "No worries.", en: "A casual 'you're welcome'." },
            { speaker: "You", l1: "Sorry, are you getting off here?", en: "Here 'sorry' softens the question to another passenger." },
            { speaker: "Passenger", l1: "Yes, after you.", en: "'After you' is a polite way to let someone go first." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Sorry or excuse me?",
          intro: "Choose the natural word for each situation.",
          items: [
            {
              template: "___, could you tell me the way to the station?",
              answer: "Excuse me",
              en: "Getting a stranger's attention before asking.",
              options: ["Sorry", "Excuse me", "Cheers", "No worries"],
            },
            {
              template: "Oh, ___! I didn't see your foot.",
              answer: "sorry",
              en: "Apologising after a small accident.",
              options: ["excuse me", "please", "sorry", "go ahead"],
            },
            {
              template: "— Thanks for your help! — ___.",
              answer: "No worries",
              en: "A casual reply to a thank-you.",
              options: ["Sorry", "Excuse me", "No worries", "After you"],
            },
            {
              template: "A coffee, ___.",
              answer: "please",
              en: "Softening an order.",
              options: ["sorry", "please", "cheers", "excuse me"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Say it naturally",
          direction: "en-to-l1",
          prompt: "Politely stop a stranger on the street to get their attention before asking a question.",
          reference: "Excuse me, could you help me?",
          hint: "Start with 'Excuse me' (before interrupting), then a polite 'could you…?'",
        },
      ],
    },
    {
      slug: "greetings-how-are-you",
      title: "\"How are you?\" and \"You alright?\"",
      estMinutes: 7,
      pages: [
        {
          type: "intro",
          heading: "A question that isn't really a question",
          body: [
            "In Britain, <strong>How are you?</strong> and the casual <strong>You alright?</strong> (often \"Y'alright?\") are usually greetings, not genuine enquiries. The expected reply is short and positive, then you bounce it back.",
            "Typical replies: <strong>I'm well, thanks</strong> (a touch formal), <strong>fine, thanks</strong>, <strong>not bad</strong>, <strong>good, you?</strong>. After any of them you add <em>and you?</em> or <em>you?</em> to return the question.",
            "\"You alright?\" can confuse learners because it sounds like someone thinks you're ill. It doesn't — it just means \"hi, how's things?\" A simple <strong>\"Yeah, you?\"</strong> is a perfect answer.",
          ],
          tip: {
            label: "Don't over-answer",
            body: "Launching into your real medical history after \"How are you?\" surprises Britons. Keep it brief and upbeat unless you actually know the person well.",
          },
        },
        {
          type: "vocab",
          heading: "Short replies",
          items: [
            { l1: "I'm well, thanks", en: "a polite 'I'm fine'", note: "Slightly formal; very safe." },
            { l1: "fine, thanks", en: "'I'm okay'", note: "Neutral, everyday reply." },
            { l1: "not bad", en: "'reasonably good'", note: "Understated and very British." },
            { l1: "good, thanks", en: "'I'm well'", note: "Common and relaxed." },
            { l1: "yeah, you?", en: "'fine — and you?'", note: "Casual answer to 'You alright?'" },
            { l1: "can't complain", en: "'things are okay'", note: "Cheerful, modest reply." },
            { l1: "and you?", en: "returns the question", note: "Add it to almost any reply." },
            { l1: "you alright?", en: "casual 'how are you?'", note: "Often heard as 'Y'alright?' — it's a greeting." },
          ],
        },
        {
          type: "dialogue",
          heading: "Bumping into a colleague",
          setup: "You meet someone from work in the queue at a café.",
          lines: [
            { speaker: "Colleague", l1: "Oh, hiya! You alright?", en: "A casual greeting — 'You alright?' means 'how are you?'" },
            { speaker: "You", l1: "Yeah, not bad, thanks. You?", en: "A short, upbeat reply, then bouncing it back." },
            { speaker: "Colleague", l1: "Good, good. Busy week!", en: "'Good, good' is a casual confirmation; 'busy week' is small talk." },
            { speaker: "You", l1: "Tell me about it. What are you having?", en: "'Tell me about it' means 'I agree completely'. Then offering small talk." },
            { speaker: "Colleague", l1: "Just a flat white. Anyway, see you in there!", en: "'Anyway' politely closes the chat; 'see you in there' = goodbye for now." },
            { speaker: "You", l1: "See you. Take care!", en: "'Take care' is a warm goodbye." },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the reply",
          intro: "Arrange the words into a natural answer.",
          items: [
            { tokens: ["Not", "bad", "thanks", "you"], en: "Not bad, thanks. You?" },
            { tokens: ["I'm", "well", "thanks", "and", "you"], en: "I'm well, thanks. And you?" },
            { tokens: ["Yeah", "good", "thanks", "you"], en: "Yeah, good thanks. You?" },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Choose the natural response",
          questions: [
            {
              q: "Someone says \"You alright?\" as a greeting. The best reply is…",
              options: [
                "No, I'm not, I have a headache and...",
                "Yeah, not bad, you?",
                "Excuse me?",
                "Good night.",
              ],
              correct: 1,
              fb: "Keep it short and bounce it back: \"Yeah, not bad, you?\"",
            },
            {
              q: "\"Not bad\" as an answer to \"How are you?\" means…",
              options: ["I feel terrible", "I'm reasonably well", "I'm angry", "Goodbye"],
              correct: 1,
              fb: "It's understated British for 'I'm doing fine'.",
            },
            {
              q: "Which phrase RETURNS the question?",
              options: ["Take care", "And you?", "No worries", "Cheers"],
              correct: 1,
              fb: "\"And you?\" (or just \"you?\") sends the question back.",
            },
          ],
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "\"You alright?\" in Britain usually means…",
              options: ["Are you ill?", "How are you? (a greeting)", "Goodbye", "Sorry"],
              correct: 1,
            },
            {
              q: "Pick a natural, brief reply to \"How are you?\"",
              options: ["After you.", "Fine, thanks. You?", "Excuse me.", "Good night."],
              correct: 1,
            },
            {
              q: "\"Take care\" is used as…",
              options: ["a greeting", "an apology", "a warm goodbye", "a request"],
              correct: 2,
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
        q: "You enter a shop at 10am. The polite greeting is…",
        options: ["Good night!", "Good morning!", "Cheers!", "See you!"],
        correct: 1,
      },
      {
        q: "In Britain, \"cheers\" can mean…",
        options: ["only 'goodbye'", "only 'sorry'", "'thanks' or 'bye'", "'good morning'"],
        correct: 2,
      },
      {
        q: "Which do you say BEFORE squeezing past someone?",
        options: ["Sorry", "Excuse me", "No worries", "Take care"],
        correct: 1,
      },
      {
        q: "Someone thanks you. A casual reply is…",
        options: ["Excuse me", "No worries", "Good evening", "Pardon?"],
        correct: 1,
      },
      {
        q: "\"You alright?\" is best answered with…",
        options: [
          "a long account of your health",
          "Yeah, not bad, you?",
          "Good night!",
          "Excuse me?",
        ],
        correct: 1,
      },
      {
        q: "Which is the MOST formal goodbye?",
        options: ["Bye", "See you", "Goodbye", "Cheers"],
        correct: 2,
      },
      {
        q: "Where does \"please\" usually go in a request?",
        options: ["at the start only", "in the middle", "at the end", "it isn't used"],
        correct: 2,
      },
      {
        q: "\"Sorry\" can also be used to mean…",
        options: ["hello", "pardon? (please repeat)", "thank you", "goodbye"],
        correct: 1,
      },
      {
        q: "\"Not bad\" as a reply means…",
        options: ["I'm unwell", "I'm doing fine", "I'm furious", "I'm leaving"],
        correct: 1,
      },
      {
        q: "Which phrase returns \"How are you?\" back to the speaker?",
        options: ["Take care", "And you?", "Excuse me", "After you"],
        correct: 1,
      },
    ],
  },
};
