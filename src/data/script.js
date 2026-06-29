// ============================================================================
// THE SPOKEN SCRIPT, every line of voiceover/caption text, in one place.
//
// This is the file to edit when you want to change what is *said*. The visual
// markup lives in scenes.js, this file only holds the words.
//
// Keyed by each scene's `id` (see scenes.js). Each entry is either:
//   • a string, a single narration block (questions, story openers, etc.), or
//   • an array of { sel, say } steps, spoken one beat at a time, where `sel`
//     is the on-screen element that lights up while that line is read.
//     `sel` syntax: a CSS selector, optionally "selector@n" to pick the nth
//     match (e.g. ".stat@2" = the third .stat). It is the reveal target, not
//     spoken text, edit the `say` strings freely.
//
// The player (engine/player.js) zips this onto the scenes by id at runtime.
// ============================================================================

export const script = {

  /* ===================== ACT 1, THE SETUP ===================== */

  'meet-lena':
    "Meet Lena, a product designer in Munich. She's happily employed and not looking for a job. But she wants one simple thing: to connect with people in her field, keep up with colleagues, and stay part of her professional network. So one evening she goes looking for the place where that happens.",

  'enter': [
    { sel:'.h@0',    say:"The place she's looking for is LinkedIn: the world's largest professional network." },
    { sel:'.stat@0', say:"Just by creating a profile, Lena joins more than 1.3 billion people." },
    { sel:'.stat@1', say:"Across more than two hundred countries." },
    { sel:'.stat@2', say:"Around seventeen point eight billion dollars in revenue last year." },
    { sel:'.stat@3', say:"All from an idea launched back in 2003, more than twenty-two years ago." },
  ],

  'q-many-sides': "What makes LinkedIn a platform?",

  'multi-sided': [
    { sel:'.lead@0',    say:"At its core, LinkedIn is a multi-sided platform: it doesn't serve a single customer but several distinct groups at once, and each side only becomes valuable because the others are there." },
    { sel:'.hubcore@0', say:"At the centre sits the owner. It plays referee and architect, setting the rules, deciding how the sides connect, and keeping the network trustworthy. It never owns the deal itself, it just makes the right people findable." },
    { sel:'.node@0',    say:"On the one hand, members: working professionals like Lena, as well as students, job seekers, self-employed individuals and executives, who join for free." },
    { sel:'.node@1',    say:"On the other hand, the complementors. First, recruiters, like Marco, who come to find talent." },
    { sel:'.node@2',    say:"Then companies and advertisers, who put their brand in front of you." },
    { sel:'.node@3',    say:"And developers, partners and course and content creators, who build on top. The owner takes a cut of nearly everything that flows through." },
  ],

  /* ===================== ACT 2, THE MACHINE ===================== */

  'q-grow': "What makes it grow on its own?",

  'network-effects': [
    { sel:'.pane@0', say:"Network effects are the engine under the whole thing. Katz and Shapiro split them in two. Direct: every new member makes the network more useful for everyone already on it." },
    { sel:'.pane@1', say:"Cross-side: more members lure more recruiters, and more recruiters lure more members, LinkedIn has both." },
    { sel:'.pane@2', say:"Plus a sneaky third, data network effects: every click trains its matching, pulling in more people and making more data, a flywheel that spins itself." },
    { sel:'.pane@3', say:"But there's a dark side: spam and recruiter fatigue. Past a point, the crowd can make it worse." },
  ],

  'q-free': "Why is it almost free to grow?",

  'matchmaker': [
    { sel:'.pane@0', say:"Two reasons it's almost unstoppable. First, LinkedIn is a frictionless matchmaker, an intermediary that crushes the cost of searching the job market, quietly linking a recruiter in Berlin to a perfect candidate in Munich who isn't even looking." },
    { sel:'.pane@1', say:"Second, it's asset-light: basically software plus data, so the ten-millionth member costs almost nothing, yet can be sold to recruiters again and again. No warehouses, no factories, the textbook contrast between a platform and a pipeline. And that matching isn't just theory, it's about to happen to Lena." },
  ],

  'lena-match': [
    { sel:'.story-copy', say:"A few weeks drift by, and Lena still isn't job hunting." },
    { sel:'.mock@0',     say:"But six hundred kilometres away in Berlin, a recruiter named Marco types three little filters: designer, Munich, design systems. In seconds, there she is." },
    { sel:'.mock@1',     say:"The network's reach and that near zero search cost did all the work. The opportunity travelled to Lena, not the other way around." },
    { sel:'.mock@2',     say:"And it isn't luck. Shared connections like Anna and Tom vouch for her quietly, so the match feels trustworthy before a single word is exchanged. But pause there, because something just changed hands, and it wasn't anything you could hold." },
  ],

  'q-exchange': "What exactly are people exchanging?",

  'value-unit': [
    { sel:'.cocard@1', say:"The value here is co-created by three parties. At the centre, the platform provides the infrastructure and support: the network, the tools and the matching algorithm. It runs the core interaction, pulling people in, equipping them, and matching the right person to the right opportunity, and it takes a cut of everything that flows through." },
    { sel:'.cocard@0', say:"On it, the members generate the supply, the raw value units they make for free: their profiles, their connections, the posts they share, and the attention and data they leave behind." },
    { sel:'.cocard@2', say:"And the complementors generate the demand, co-creating through paid transactions: recruiters pay to reach talent, advertisers bid in the ad auction, and developers and creators build tools and content on top." },
  ],

  'q-from-zero': "How do you start a network from zero?",

  'cold-start': [
    { sel:'.mile@0', say:"In 2003, LinkedIn launches and beats the chicken-and-egg problem by using address-book imports as instant social proof: users saw familiar names, felt the platform was already alive, and started inviting others." },
    { sel:'.mile@1', say:"In 2005, freemium turns power users into payers." },
    { sel:'.mile@2', say:"In 2006, People You May Know sparks a viral loop, and public profiles let Google ship free traffic." },
    { sel:'.mile@3', say:"In 2011, the IPO on the New York Stock Exchange." },
    { sel:'.mile@4', say:"In 2016, Microsoft buys LinkedIn for twenty-six-point-two billion dollars." },
    { sel:'.mile@5', say:"And from 2023, the AI era deepens the data moat even further." },
  ],

  'q-money': "Where does the money actually come from?",

  'revenue': [
    { sel:'.splitbar@0', say:"Follow the money, and three engines roar into view. By far the biggest, about sixty percent of revenue, is Talent Solutions, LinkedIn's paid recruiting suite: the Recruiter seats, job slots and hiring tools like InMail. Next, around a quarter, Marketing Solutions, ads sold through an auction. And the rest is what individuals pay for directly: Premium, which shows who viewed you, Sales Navigator, a tool for finding and reaching sales leads, and Learning, LinkedIn's library of online courses." },
    { sel:'.pricing@0',  say:"But underneath it all sits the real pricing strategy: freemium, combined with cross-subsidisation. Free users increase the platform's value, while selected paying segments, such as recruiters, advertisers and sales professionals, generate revenue by paying for enhanced access, targeting options and advanced tools. That money side is, right now, about to land in Lena's inbox." },
  ],

  'lena-pays': [
    { sel:'.story-copy', say:"Here's how it reaches her. A message appears in Lena's inbox. It looks like any other note, but it isn't. Marco couldn't just message her, they aren't connected." },
    { sel:'.mock@0',     say:"So his company paid LinkedIn for the privilege: a paid InMail, on top of a Recruiter licence that runs into thousands a year. Lena reads it for free, never seeing the price tag. That's the business model, made personal." },
  ],

  /* ================= ACT 3, THE CRACK & VERDICT ================= */

  'q-unbeatable': "Is LinkedIn really winner-take-all?",

  'crack': [
    { sel:'.wtac@0',   say:"Eisenmann says a two-sided market only tips to one winner when three conditions hold at once. First, strong indirect network effects: the more members join, the more recruiters and advertisers they attract, and the bigger the user base, the more those providers want in. LinkedIn has this in spades." },
    { sel:'.wtac@1',   say:"Second, high multi-homing costs: it has to be too costly or time-consuming to stay active on rivals as well. Here LinkedIn fails the test, a recruiter happily runs LinkedIn, Indeed and Glassdoor at the same time, paying for whichever delivers." },
    { sel:'.wtac@2',   say:"Third, low demand for specialized features: users wanting one standardized, ubiquitous solution rather than niche tools. Not quite, the market still splits by function and region." },
    { sel:'.rivals@0', say:"That's why real rivals survive: Indeed dominates raw job listings, Glassdoor owns salaries and reviews, and in the DACH region Xing still holds professional networking. Only one of the three conditions holds, so LinkedIn is a champion, powerful but genuinely contestable, not winner-take-all." },
  ],

  'q-moat': "So what is its real moat?",

  'control': [
    { sel:'.dial@0',     say:"Its real moat isn't openness, it's control. Tiwana frames governance as two questions: who decides, and how open is the platform? On both, LinkedIn leans hard toward control, starting with a feed algorithm that's opaque and tightly held." },
    { sel:'.dial@1',     say:"Terms and moderation are strict." },
    { sel:'.dial@2',     say:"Identities are verified, real names only." },
    { sel:'.dial@3',     say:"And it fights scraping hard." },
    { sel:'.casenote@0', say:"Take the landmark hiQ Labs case: a startup harvested public profiles to resell as analytics, LinkedIn blocked it and, after years in court, prevailed on breach of contract. The data stays LinkedIn's, firmly at the closed, controlled end." },
  ],

  'q-guard-doors': "How tightly does it guard the doors?",

  'apis': [
    { sel:'.tier@0',  say:"As for boundary resources, LinkedIn offers no SDKs, only APIs, what Ghazawneh and Henfridsson call the dials that balance control against contribution. And it opens that door just a crack: anyone can use Sign-In with LinkedIn, which lets other apps log you in with your LinkedIn identity, plus the Share API to post updates to the feed." },
    { sel:'.tier@1',  say:"But everything valuable hides behind a velvet rope: the Marketing API to build and automate ad campaigns, and the Jobs and ATS APIs to sync postings and applicants, all need partner approval." },
    { sel:'.tier@2',  say:"And an invite-only inner ring: Talent, Learning and Sales Navigator, the deep recruiting, training and sales-prospecting data." },
    { sel:'.stamp@0', say:"Bulk data access? Forbidden. Next to Apple or Salesforce, this surface is deliberately narrow, control beats openness again." },
  ],

  'q-cost': "What does all that control cost us?",

  'rewired': [
    { sel:'.bacol@0',   say:"We pay it through the job market itself. Before LinkedIn, recruiting meant posting a job and waiting, static résumés and headhunter networks." },
    { sel:'.bagrp@0',   say:"After LinkedIn, it flipped to hunting people who never raised their hand, living, public profiles and self-serve search, turning every professional into a permanently visible, searchable asset." },
    { sel:'.warnbox@0', say:"Convenient? Hugely. But the flip side hands enormous power over the labour market to one private, algorithmic gatekeeper that decides who gets seen, raising real questions about bias, surveillance, and everyone left off the platform. To weigh that bargain, let's return to Lena one last time." },
  ],

  'lena-job': [
    { sel:'.story-copy', say:"And, good news, it works out. Six weeks later, Lena signs: Lead Product Designer, a real step up, a genuinely happy ending. But replay how it happened. She never applied." },
    { sel:'.mock@0',     say:"An algorithm decided she was worth surfacing, a paying recruiter decided she was worth reaching, and a private platform sat in the middle of every step. Lena won, and so did LinkedIn, which quietly owned the whole match. And that is the verdict in a single career: formidable network effects and asset-light scale make LinkedIn powerful, yet cheap switching, low openness, and its grip on the labour market keep it contestable and contested. Powerful, but not winner-take-all, because its real moat is the network and the data it owns, not the doors it opens." },
  ],

  'the-end': "LinkedIn. Powerful, but not winner-take-all. Thanks for watching.",

};
