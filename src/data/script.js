// ============================================================================
// THE SPOKEN SCRIPT — every line of voiceover/caption text, in one place.
//
// This is the file to edit when you want to change what is *said*. The visual
// markup lives in scenes.js; this file only holds the words.
//
// Keyed by each scene's `id` (see scenes.js). Each entry is either:
//   • a string  — a single narration block (questions, story openers, etc.), or
//   • an array of { sel, say } steps — spoken one beat at a time, where `sel`
//     is the on-screen element that lights up while that line is read.
//     `sel` syntax: a CSS selector, optionally "selector@n" to pick the nth
//     match (e.g. ".stat@2" = the third .stat). It is the reveal target, not
//     spoken text — edit the `say` strings freely.
//
// The player (engine/player.js) zips this onto the scenes by id at runtime.
// ============================================================================

export const script = {

  /* ===================== ACT 1 — THE SETUP ===================== */

  'meet-lena':
    "Meet Lena, a product designer in Munich. She's happily employed and not looking for a job. But she wants one simple thing: to connect with people in her field, keep up with colleagues, and stay part of her professional network. So one evening she goes looking for the place where that happens.",

  'enter': [
    { sel:'.h@0',    say:"The place she's looking for is LinkedIn: the world's largest professional network." },
    { sel:'.stat@0', say:"Just by creating a profile, Lena joins more than 1.3 billion people." },
    { sel:'.stat@1', say:"Across more than two hundred countries and territories." },
    { sel:'.stat@2', say:"Around seventeen point eight billion dollars in revenue last year." },
    { sel:'.stat@3', say:"All from an idea launched back in 2003, more than twenty-two years ago." },
  ],

  'q-many-sides': "How does one platform serve so many sides?",

  'multi-sided': [
    { sel:'.lead@0',    say:"At its core, LinkedIn is a multi-sided platform: it connects distinct groups and gets the price structure right between them." },
    { sel:'.hubcore@0', say:"It sits in the middle as the price-setter, deciding who pays and who doesn't." },
    { sel:'.node@0',    say:"Members get the network almost free, people like Lena." },
    { sel:'.node@1',    say:"Recruiters, like Marco, sit on the paying side; they pay to find talent." },
    { sel:'.node@2',    say:"Advertisers pay too, putting their brand in front of you." },
    { sel:'.node@3',    say:"And developers build on top, extending what the platform can do." },
  ],

  /* ===================== ACT 2 — THE MACHINE ===================== */

  'q-grow': "What makes it grow on its own?",

  'network-effects': [
    { sel:'.pane@0', say:"Direct effects: each new member makes the network more useful to everyone else." },
    { sel:'.pane@1', say:"Cross-side effects: more members pull in recruiters, and more recruiters pull in members." },
    { sel:'.pane@2', say:"Data effects: every click trains better matching, a flywheel that spins itself faster." },
    { sel:'.pane@3', say:"But watch the edge, a dark side: spam and recruiter fatigue can erode value as the crowd swells." },
  ],

  'q-free': "Why is it almost free to grow?",

  'matchmaker': [
    { sel:'.pane@0', say:"Two things make that engine almost unstoppable. First, it's a frictionless matchmaker, crushing the cost of search in the job market." },
    { sel:'.pane@1', say:"Second, it's asset-light: just software and data, so the ten-millionth member costs almost nothing, and that effortless matching is about to find Lena." },
  ],

  'lena-match': [
    { sel:'.story-copy', say:"A few weeks drift by, and Lena still isn't job hunting." },
    { sel:'.mock@0',     say:"But six hundred kilometres away in Berlin, a recruiter named Marco types three little filters: designer, Munich, design systems. In seconds, there she is." },
    { sel:'.mock@1',     say:"The network's reach and that near zero search cost did all the work. The opportunity travelled to Lena, not the other way around." },
    { sel:'.mock@2',     say:"And it isn't luck. Shared connections like Anna and Tom vouch for her quietly, so the match feels trustworthy before a single word is exchanged. But pause there, because something just changed hands, and it wasn't anything you could hold." },
  ],

  'q-exchange': "What exactly are people exchanging?",

  'value-unit': [
    { sel:'.seclbl@0', say:"Members create the value units — and they make every one of them for free." },
    { sel:'.vcard@0',  say:"The profile — your identity." },
    { sel:'.vcard@1',  say:"The connection — an edge in the graph." },
    { sel:'.vcard@2',  say:"The job post — demand." },
    { sel:'.vcard@3',  say:"The update — attention." },
    { sel:'.seclbl@1', say:"Then the platform runs the core interaction." },
    { sel:'.pfgrp@0',  say:"It pulls people in with the free network." },
    { sel:'.pfgrp@1',  say:"Equips them with the tools and the algorithm." },
    { sel:'.pfgrp@2',  say:"And matches the right person to the right opportunity. The value you make becomes the inventory it rents out to advertisers." },
  ],

  'q-ecosystem': "Who else lives off this platform?",

  'ecosystem': [
    { sel:'.lead@0',    say:"Which means this is bigger than one company, it's an ecosystem: a crowd of complementors creating value around a shared platform." },
    { sel:'.hubcore@0', say:"At the centre, the owner plays referee and architect, setting and policing the rules." },
    { sel:'.node@0',    say:"Hiring-software vendors plug in." },
    { sel:'.node@1',    say:"Ad agencies build campaigns." },
    { sel:'.node@2',    say:"Instructors and course creators teach on it." },
    { sel:'.node@3',    say:"Creators publish content." },
    { sel:'.node@4',    say:"Data partners wire themselves in." },
    { sel:'.node@5',    say:"And LinkedIn quietly takes a cut of almost everything that flows through." },
  ],

  'q-from-zero': "How do you start a network from zero?",

  'cold-start': [
    { sel:'.mile@0', say:"In 2003, LinkedIn launches, seeded from your own address book." },
    { sel:'.mile@1', say:"2005, freemium turns power users into payers." },
    { sel:'.mile@2', say:"2006, People You May Know sparks a viral loop." },
    { sel:'.mile@3', say:"2011, the IPO on the New York Stock Exchange." },
    { sel:'.mile@4', say:"2016, Microsoft buys LinkedIn for twenty-six-point-two billion dollars." },
    { sel:'.mile@5', say:"And from 2023, the AI era deepens the data moat even further." },
  ],

  'q-money': "Where does the money actually come from?",

  'revenue':
    "Follow the money, and three engines roar into view. The biggest by far is Talent Solutions, the recruiting tools, around two-thirds of revenue. Next, Marketing Solutions, selling ads through an auction. And third, what individuals pay for directly: Premium, Sales Navigator, Learning. Same multi-sided trick underneath: pamper the members, bill the money side. And that money side is, right now, about to land in Lena's inbox.",

  'lena-pays': [
    { sel:'.story-copy', say:"Here's how it reaches her. A message appears in Lena's inbox. It looks like any other note, but it isn't. Marco couldn't just message her; they aren't connected." },
    { sel:'.mock@0',     say:"So his company paid LinkedIn for the privilege: a paid InMail, on top of a Recruiter licence that runs into thousands a year. Lena reads it for free, never seeing the price tag. That's the business model, made personal." },
  ],

  /* ================= ACT 3 — THE CRACK & VERDICT ================= */

  'q-unbeatable': "Is LinkedIn really unbeatable?",

  'crack': [
    { sel:'.wtac@0',   say:"Test one: strong network effects? Yes, a global professional graph that pushes the market to tip." },
    { sel:'.wtac@1',   say:"Test two: costly to leave for rivals? No, switching is cheap. A recruiter can run LinkedIn, Indeed and Glassdoor side by side, paying for whichever delivers." },
    { sel:'.wtac@2',   say:"Test three: does everyone want the same thing? Not really, the market splits by purpose and region, so no single platform owns it all." },
    { sel:'.rivals@0', say:"That's why real rivals survive: Indeed dominates raw job listings, Glassdoor owns salaries and reviews, and here in the DACH region Xing still holds professional networking. Powerful, but genuinely contestable." },
  ],

  'q-moat': "So what is its real moat?",

  'control': [
    { sel:'.dial@0',     say:"Its real moat isn't openness, it's control. The feed algorithm is opaque, tightly held." },
    { sel:'.dial@1',     say:"Terms and moderation are strict." },
    { sel:'.dial@2',     say:"Identities are verified, real names only." },
    { sel:'.dial@3',     say:"And anti-scraping is enforced hard." },
    { sel:'.casenote@0', say:"Take the landmark hiQ Labs case: a startup sued to keep scraping public LinkedIn profiles, and lost. The data stays LinkedIn's, firmly at the closed, controlled end." },
  ],

  'q-guard-doors': "How tightly does it guard the doors?",

  'apis': [
    { sel:'.tier@0',  say:"That control extends to developers. Open to anyone: Sign-In with LinkedIn, which lets other apps log you in with your LinkedIn identity, and the Share API, which lets them post updates to your feed." },
    { sel:'.tier@1',  say:"Then a partner tier you must apply for: the Marketing API to build and automate ad campaigns, and the Jobs and ATS APIs to sync postings and applicants." },
    { sel:'.tier@2',  say:"And an invite-only inner ring: Talent, Learning and Sales Navigator, the deep recruiting, training and sales-prospecting data." },
    { sel:'.stamp@0', say:"Bulk data access? Forbidden. Control beats openness again." },
  ],

  'q-cost': "What does all that control cost us?",

  'rewired': [
    { sel:'.bacol@0',   say:"And it reshaped work itself. Before: post a job and wait, with static résumés and headhunter networks." },
    { sel:'.bagrp@0',   say:"After LinkedIn: hunt passive candidates through living, public profiles and self-serve search." },
    { sel:'.warnbox@0', say:"But here's the critical edge, it hands one private, algorithmic gatekeeper enormous power over who gets seen. To weigh that bargain, let's return to Lena." },
  ],

  'lena-job': [
    { sel:'.story-copy', say:"And, good news, it works out. Six weeks later, Lena signs: Lead Product Designer, a real step up, a genuinely happy ending. But replay how it happened. She never applied." },
    { sel:'.mock@0',     say:"An algorithm decided she was worth surfacing; a paying recruiter decided she was worth reaching; and a private platform sat in the middle of every step. Lena won, and so did LinkedIn, which quietly owned the whole match. Convenience for her, quiet power for the platform. So, time for the final verdict." },
  ],

  'q-strong-or-unbeatable': "So, strong, or unbeatable?",

  'verdict': [
    { sel:'.fwc@0',     say:"Network effects, direct, cross-side and data, strong." },
    { sel:'.fwc@1',     say:"Asset-light scalability, strong." },
    { sel:'.fwc@2',     say:"A truly unbeatable monopoly? No, it stays contestable." },
    { sel:'.fwc@3',     say:"Openness and generativity, low." },
    { sel:'.fwc@4',     say:"Labour-market power and ethics, a real concern." },
    { sel:'.closing@0', say:"The bottom line: powerful, but not unbeatable. Owning the network and the data, not openness, is the more durable moat." },
  ],

  'the-end': "Powerful, but not unbeatable. Thanks for watching.",

};
