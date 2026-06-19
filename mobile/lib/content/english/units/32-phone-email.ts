import type { Unit } from "../../types";

export const UNIT_PHONE_EMAIL: Unit = {
  slug: "phone-email",
  stage: 7,
  order: 32,
  icon: "💬",
  title: "Phone & email",
  tagline: "'Can I take a message?', formal vs informal email, texting.",
  badge: "core",
  lessons: [
    {
      slug: "phone-email-calls",
      title: "Phone calls",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Phone English has its own little script",
          body: [
            "Phone calls use set phrases that don't always match face-to-face English. Answering, you might say <strong>Hello?</strong> or, at work, <strong>Good morning, [company], how can I help?</strong>",
            "To reach someone: <strong>Can I speak to Sarah, please?</strong> The reply might be <strong>Speaking</strong> (= that's me), <strong>Hold on / Bear with me</strong> (= wait a moment), or <strong>I'm afraid she's not available.</strong>",
            "If they're out, you offer or leave a message: <strong>Can I take a message?</strong> / <strong>Can I leave a message?</strong> / <strong>Could you ask her to call me back?</strong>",
          ],
          tip: {
            label: "British phone softeners",
            body: "Brits cushion phone requests with <em>I'm afraid…</em> (for bad news), <em>could</em> rather than <em>can</em>, and <em>just</em>: <em>I'm just calling to…</em>, <em>Could you just hold on a moment?</em> It sounds polite, not weak.",
          },
        },
        {
          type: "vocab",
          heading: "On the phone",
          items: [
            { l1: "Can I speak to ...?", en: "asking to reach a person" },
            { l1: "Speaking.", en: "'this is me' — said by the person asked for" },
            { l1: "Who's calling, please?", en: "asking for the caller's name" },
            { l1: "Hold on. / Bear with me.", en: "wait a moment" },
            { l1: "I'll put you through.", en: "I'll connect you to them" },
            { l1: "Can I take a message?", en: "offer to pass on a message" },
            { l1: "Can I leave a message?", en: "ask to leave a message" },
            { l1: "to call back", en: "to return a phone call", note: "'I'll call you back.'" },
            { l1: "I'm afraid ...", en: "softens bad news on the phone" },
            { l1: "the line's bad", en: "the connection is poor" },
            { l1: "You're breaking up.", en: "your voice keeps cutting out" },
            { l1: "Sorry, wrong number.", en: "you've dialled the wrong person" },
          ],
        },
        {
          type: "dialogue",
          heading: "Calling the office",
          setup: "You ring a small company to reach Sarah, who is out.",
          lines: [
            { speaker: "Receptionist", l1: "Good morning, Daltons. How can I help?", en: "Good morning, Daltons. How can I help you?" },
            { speaker: "You", l1: "Hello, could I speak to Sarah Patel, please?", en: "Hello, could I speak to Sarah Patel, please?" },
            { speaker: "Receptionist", l1: "Who's calling, please?", en: "May I have your name, please?" },
            { speaker: "You", l1: "It's Marco Rossi.", en: "It's Marco Rossi." },
            { speaker: "Receptionist", l1: "Bear with me... I'm afraid she's in a meeting. Can I take a message?", en: "One moment... Unfortunately she's in a meeting. Can I take a message?" },
            { speaker: "You", l1: "Could you ask her to call me back? She's got my number.", en: "Could you ask her to return my call? She has my number." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Complete the call",
          intro: "Choose the phone phrase that fits.",
          items: [
            {
              template: "Could I ___ to the manager, please?",
              answer: "speak",
              en: "Could I speak to the manager, please?",
              options: ["speak", "talk", "say", "call"],
            },
            {
              template: "I'm ___ she's not available right now.",
              answer: "afraid",
              en: "Unfortunately she's not available right now.",
              options: ["afraid", "sorry", "happy", "sure"],
            },
            {
              template: "Can I ___ a message for her?",
              answer: "take",
              en: "Can I take a message for her?",
              options: ["take", "make", "do", "give"],
            },
            {
              template: "Hold ___ a moment, I'll put you through.",
              answer: "on",
              en: "Wait a moment, I'll connect you.",
              options: ["on", "up", "in", "off"],
            },
          ],
        },
      ],
    },
    {
      slug: "phone-email-formal-informal",
      title: "Formal vs informal email",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Match the register to the reader",
          body: [
            "Email opening and closing depend on how well you know the reader. Get this pair right and the email reads correctly even if the middle is simple.",
            "<strong>Formal</strong> (a stranger, a company): open <em>Dear Mr Khan,</em> or <em>Dear Sir or Madam,</em> close <em>Kind regards,</em> or <em>Yours sincerely,</em>.",
            "<strong>Informal</strong> (a friend, a close colleague): open <em>Hi Sam,</em> or <em>Hello Jess,</em> close <em>Cheers,</em> / <em>Thanks,</em> / <em>Best,</em>.",
            "Rule of thumb: if you'd say <em>cheers</em> out loud to them, you can write it. Otherwise, <em>Kind regards</em> is the safe, friendly-but-professional default in Britain.",
          ],
          keyPoint:
            "Formal: Dear … / Kind regards. Informal: Hi … / Cheers. 'Kind regards' is the safe everyday default.",
        },
        {
          type: "vocab",
          heading: "Email building blocks",
          items: [
            { l1: "Dear Mr / Ms Smith,", en: "formal opening to a named person" },
            { l1: "Dear Sir or Madam,", en: "formal opening, name unknown" },
            { l1: "Hi Sam, / Hello Jess,", en: "informal opening" },
            { l1: "I am writing to ...", en: "formal way to state your purpose" },
            { l1: "Just a quick note to ...", en: "informal way to state your purpose" },
            { l1: "Please find attached ...", en: "formal: I've attached a file" },
            { l1: "I've attached ...", en: "neutral: I've attached a file" },
            { l1: "Kind regards,", en: "safe, professional sign-off" },
            { l1: "Yours sincerely,", en: "very formal, after 'Dear [name]'" },
            { l1: "Yours faithfully,", en: "very formal, after 'Dear Sir or Madam'" },
            { l1: "Cheers, / Thanks,", en: "informal, friendly sign-off" },
            { l1: "Looking forward to hearing from you.", en: "polite closing line" },
          ],
        },
        {
          type: "dialogue",
          heading: "Same message, two registers",
          setup: "Compare a formal email to a landlord with a casual note to a friend.",
          lines: [
            { speaker: "Formal — opening", l1: "Dear Mr Owusu, I am writing to ask about the flat.", en: "Dear Mr Owusu, I am writing to ask about the flat." },
            { speaker: "Formal — closing", l1: "I look forward to hearing from you. Kind regards, Anna.", en: "I look forward to hearing from you. Kind regards, Anna." },
            { speaker: "Informal — opening", l1: "Hi Jess, just a quick note about the flat.", en: "Hi Jess, just a quick note about the flat." },
            { speaker: "Informal — closing", l1: "Let me know what you reckon. Cheers, Anna.", en: "Let me know what you think. Thanks, Anna." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Formal or informal?",
          questions: [
            {
              q: "You're emailing a company you've never contacted. Best opening?",
              options: ["Hiya!", "Dear Sir or Madam,", "Yo,", "Hey there,"],
              correct: 1,
              fb: "Use 'Dear Sir or Madam' when you don't know the person's name.",
            },
            {
              q: "Which sign-off is safe for a polite work email?",
              options: ["Cheers,", "Love,", "Kind regards,", "Laters,"],
              correct: 2,
            },
            {
              q: "After 'Dear Sir or Madam,', the matching formal close is…",
              options: ["Yours sincerely,", "Yours faithfully,", "Cheers,", "Best,"],
              correct: 1,
            },
            {
              q: "Texting a close friend, a natural sign-off is…",
              options: ["Yours faithfully,", "Cheers,", "To whom it may concern,", "Respectfully,"],
              correct: 1,
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Write a formal email opening to a Mr Khan, saying you're writing to ask about the job.",
          reference: "Dear Mr Khan, I am writing to ask about the job.",
          hint: "Open with 'Dear' + title and surname, then 'I am writing to…'.",
        },
      ],
    },
    {
      slug: "phone-email-texting",
      title: "Texting & common abbreviations",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Texting is its own quick language",
          body: [
            "Texts are short, casual and full of <strong>abbreviations</strong>. You don't need to write them, but you should recognise them.",
            "Common ones: <strong>thx</strong> (thanks), <strong>pls</strong> (please), <strong>u</strong> (you), <strong>r</strong> (are), <strong>btw</strong> (by the way), <strong>asap</strong> (as soon as possible), <strong>brb</strong> (be right back), <strong>idk</strong> (I don't know).",
            "British texts often skip capitals and full stops, and lean on <em>x</em> at the end (a friendly 'kiss' sign-off): <em>see you later x</em>. One <em>x</em> is warm and normal; it isn't romantic.",
          ],
          tip: {
            label: "When NOT to abbreviate",
            body: "Texting abbreviations are fine with friends, but never in a work email or a message to someone you don't know. Writing <em>thx, pls send asap</em> to a new client reads as careless. Keep <em>u</em> and <em>r</em> for mates.",
          },
        },
        {
          type: "vocab",
          heading: "Text abbreviations",
          items: [
            { l1: "thx", en: "thanks" },
            { l1: "pls", en: "please" },
            { l1: "u", en: "you" },
            { l1: "r", en: "are" },
            { l1: "btw", en: "by the way" },
            { l1: "asap", en: "as soon as possible" },
            { l1: "brb", en: "be right back" },
            { l1: "idk", en: "I don't know" },
            { l1: "tbh", en: "to be honest" },
            { l1: "omw", en: "on my way" },
            { l1: "np", en: "no problem" },
            { l1: "x", en: "a friendly sign-off ('kiss')", note: "Warm, not romantic; common in Britain." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Decode the text",
          intro: "Choose what each abbreviation stands for.",
          items: [
            {
              template: "'omw' means I'm ___ my way.",
              answer: "on",
              en: "'omw' = on my way.",
              options: ["on", "in", "off", "at"],
            },
            {
              template: "'btw' means by the ___ .",
              answer: "way",
              en: "'btw' = by the way.",
              options: ["way", "day", "time", "while"],
            },
            {
              template: "'idk' means I ___ know.",
              answer: "don't",
              en: "'idk' = I don't know.",
              options: ["don't", "do", "did", "didn't"],
            },
            {
              template: "Send it ___ — that's what 'asap' means.",
              answer: "soon",
              en: "'asap' = as soon as possible.",
              options: ["soon", "later", "now", "never"],
            },
          ],
        },
        {
          type: "dialogue",
          heading: "A quick text exchange",
          setup: "Two friends sort out the evening by text.",
          lines: [
            { speaker: "Liam", l1: "hey u still on for tonight?", en: "Hey, are you still able to meet tonight?" },
            { speaker: "Aisha", l1: "yeah! running a bit late tho, omw soon x", en: "Yes! I'm running a bit late though, on my way soon." },
            { speaker: "Liam", l1: "np. table booked for 8. pls bring the tickets", en: "No problem. Table booked for 8. Please bring the tickets." },
            { speaker: "Aisha", l1: "got them. tbh idk where the cinema is lol", en: "I have them. To be honest, I don't know where the cinema is." },
            { speaker: "Liam", l1: "ill send the address. see u there x", en: "I'll send the address. See you there." },
          ],
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "'brb' means…",
              options: ["be right back", "bring", "by the way", "be ready by"],
              correct: 0,
            },
            {
              q: "An 'x' at the end of a British text is…",
              options: ["a mistake", "always romantic", "a warm, friendly sign-off", "a wrong number"],
              correct: 2,
            },
            {
              q: "Where should you NOT use texting abbreviations?",
              options: ["a text to a friend", "a formal work email", "a message to family", "a quick reply to a mate"],
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
        q: "On the phone, 'Speaking.' means…",
        options: ["please speak up", "that's me / you've reached them", "I'm busy", "wrong number"],
        correct: 1,
      },
      {
        q: "'Can I take a message?' is said by…",
        options: ["the caller", "the person answering, when someone's unavailable", "a recorded voice", "nobody"],
        correct: 1,
      },
      {
        q: "'Hold on' / 'Bear with me' means…",
        options: ["hang up", "wait a moment", "call back later", "speak louder"],
        correct: 1,
      },
      {
        q: "'I'm afraid she's in a meeting' uses 'I'm afraid' to…",
        options: ["express fear", "soften bad news", "ask a question", "say goodbye"],
        correct: 1,
      },
      {
        q: "A formal email to an unnamed company should open with…",
        options: ["Hiya,", "Dear Sir or Madam,", "Yo,", "Hello mate,"],
        correct: 1,
      },
      {
        q: "The safe, professional everyday sign-off is…",
        options: ["Cheers,", "Kind regards,", "Laters,", "Love,"],
        correct: 1,
      },
      {
        q: "After 'Dear Mr Khan,', the matching formal close is…",
        options: ["Yours faithfully,", "Yours sincerely,", "Cheers,", "Thanks,"],
        correct: 1,
      },
      {
        q: "'btw' stands for…",
        options: ["be there with", "by the way", "back to work", "between"],
        correct: 1,
      },
      {
        q: "'asap' means…",
        options: ["as soon as possible", "a small action plan", "ask a person", "after some point"],
        correct: 0,
      },
      {
        q: "When should you avoid texting abbreviations like 'u' and 'pls'?",
        options: ["with close friends", "in a formal email", "in a group chat", "in family messages"],
        correct: 1,
      },
    ],
  },
};
