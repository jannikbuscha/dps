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
    "Meet Lena, a product designer in Munich. Happily employed, not job-hunting, but she wants one thing: to connect with people in her field and stay part of her professional network. So she goes looking for the place where that happens.",

  'enter': [
    { sel:'.h@0',    say:"The place she's looking for is LinkedIn: the world's largest professional network." },
    { sel:'.stat@0', say:"Just by creating a profile, Lena joins over 1.3 billion people." },
    { sel:'.stat@1', say:"Across more than two hundred countries." },
    { sel:'.stat@2', say:"About seventeen point eight billion dollars in revenue last year." },
    { sel:'.stat@3', say:"From an idea launched back in 2003." },
  ],

  'q-many-sides': "What makes LinkedIn a platform?",

  'multi-sided': [
    { sel:'.lead@0',    say:"At its core, LinkedIn is a multi-sided platform: it doesn't serve a single customer but several distinct groups at once, and each side only becomes valuable because the others are there." },
    { sel:'.hubcore@0', say:"At the centre, the owner plays referee and architect, setting the rules, deciding how the sides connect, and keeping the network trustworthy. It never owns the deal, it just makes the right people findable." },
    { sel:'.node@0',    say:"On the one hand, members: professionals like Lena, plus students, job seekers, the self-employed and executives." },
    { sel:'.node@1',    say:"On the other, the complementors. First, recruiters, like Marco, who come to find talent." },
    { sel:'.node@2',    say:"Then companies and advertisers, putting their brand in front of you." },
    { sel:'.node@3',    say:"And developers, partners and creators who build on top. The owner takes a cut of nearly everything." },
  ],

  /* ===================== ACT 2, THE MACHINE ===================== */

  'q-grow': "What makes it grow on its own?",

  'network-effects': [
    { sel:'.pane@0', say:"Network effects are the engine under the whole thing. Katz and Shapiro split them in two. Direct: every new member makes the network more useful for everyone already on it." },
    { sel:'.pane@1', say:"Cross-side: more members lure more recruiters, and more recruiters lure more members, LinkedIn has both." },
    { sel:'.pane@2', say:"Plus a sneaky third, data network effects: every click trains the matching, a flywheel that spins itself." },
    { sel:'.pane@3', say:"But there's a dark side: spam and recruiter fatigue can erode value." },
  ],

  'q-free': "Why is it almost free to grow?",

  'matchmaker': [
    { sel:'.pane@0', say:"Two reasons it's almost unstoppable. First, it's a frictionless matchmaker, an intermediary that crushes the cost of searching the job market, linking a recruiter in Berlin to a candidate in Munich who isn't even looking." },
    { sel:'.pane@1', say:"Second, it's asset-light: just software and data, so the next member costs almost nothing, yet sells to recruiters again and again. No warehouses, no factories, the textbook platform-versus-pipeline contrast. And that matching is about to find Lena." },
  ],

  'lena-match': [
    { sel:'.story-copy', say:"A few weeks drift by, and Lena still isn't job hunting." },
    { sel:'.mock@0',     say:"But in Berlin, a recruiter named Marco types three little filters. In seconds, there she is." },
    { sel:'.mock@1',     say:"The network's reach and near-zero search cost did the work. The opportunity travelled to Lena, not the other way around." },
    { sel:'.mock@2',     say:"And it isn't luck: shared connections like Anna and Tom vouch for her, so the match feels trustworthy. But pause, something just changed hands, and it wasn't anything you could hold." },
  ],

  'q-exchange': "What exactly are people exchanging?",

  'value-unit': [
    { sel:'.cocard@1', say:"Value here is co-created by three parties. At the centre, the platform provides the infrastructure and support: the network, the tools and the matching algorithm. It runs the core interaction, pulling people in, equipping them, matching the right person to the right opportunity, and takes a cut of everything that flows through." },
    { sel:'.cocard@0', say:"The members generate the supply, the value units they make for free: profiles, connections, posts, and the attention and data they leave behind." },
    { sel:'.cocard@2', say:"And the complementors generate the demand through paid transactions: recruiters pay to reach talent, advertisers bid in the ad auction, developers and creators build on top." },
  ],

  'q-from-zero': "How do you start a network from zero?",

  'cold-start': [
    { sel:'.mile@0', say:"In 2003, LinkedIn launches and beats the chicken-and-egg problem with address-book imports as instant social proof: people saw familiar names and started inviting others." },
    { sel:'.mile@1', say:"In 2005, freemium turns power users into payers." },
    { sel:'.mile@2', say:"In 2006, People You May Know sparks a viral loop, and public profiles bring free Google traffic." },
    { sel:'.mile@3', say:"In 2011, the IPO on the New York Stock Exchange." },
    { sel:'.mile@4', say:"In 2016, Microsoft buys LinkedIn for twenty-six-point-two billion dollars." },
    { sel:'.mile@5', say:"And from 2023, the AI era deepens the data moat." },
  ],

  'q-money': "Where does the money actually come from?",

  'revenue': [
    { sel:'.splitbar@0', say:"Follow the money: three engines. The biggest, about sixty percent, is Talent Solutions, the paid recruiting suite, Recruiter seats, job slots and tools like InMail. Around a quarter is Marketing Solutions, ads sold through an auction. The rest is what individuals pay for: Premium, which shows who viewed you, Sales Navigator for finding sales leads, and Learning, its library of online courses." },
    { sel:'.pricing@0',  say:"Underneath sits the pricing strategy: freemium plus cross-subsidisation. Free users increase the platform's value, while paying segments, recruiters, advertisers and sales professionals, pay for enhanced access, targeting and advanced tools. That money side is about to land in Lena's inbox." },
  ],

  'lena-pays': [
    { sel:'.story-copy', say:"Here's how it reaches her. A message lands in Lena's inbox. It looks ordinary, but it isn't, Marco couldn't just message her, they aren't connected." },
    { sel:'.mock@0',     say:"So his company paid LinkedIn: a paid InMail, on top of a Recruiter licence worth thousands a year. Lena reads it free, never seeing the price tag. The business model, made personal." },
  ],

  /* ================= ACT 3, THE CRACK & VERDICT ================= */

  'q-unbeatable': "Is LinkedIn really winner-take-all?",

  'crack': [
    { sel:'.wtac@0',   say:"Eisenmann says a market only tips to one winner when three conditions hold at once. First, strong indirect network effects: the more members join, the more recruiters and advertisers they attract, and the bigger the base, the more providers want in. LinkedIn has this in spades." },
    { sel:'.wtac@1',   say:"Second, high multi-homing costs: it must be too costly to stay active on rivals as well. Here it fails, a recruiter happily runs LinkedIn, Indeed and Glassdoor at once, paying for whichever delivers." },
    { sel:'.wtac@2',   say:"Third, low demand for specialized features: users wanting one standardized solution rather than niche tools. Not quite, the market still splits by function and region." },
    { sel:'.rivals@0', say:"So rivals survive: Indeed dominates job listings, Glassdoor owns reviews, Xing holds the DACH region. Only one condition holds, so LinkedIn is powerful but contestable, not winner-take-all." },
  ],

  'q-moat': "So what is its real moat?",

  'control': [
    { sel:'.dial@0',     say:"Its real moat isn't openness, it's control. Tiwana frames governance as who decides and how open the platform is. On both, LinkedIn leans to control, starting with a feed algorithm that's opaque and tightly held." },
    { sel:'.dial@1',     say:"Terms and moderation are strict." },
    { sel:'.dial@2',     say:"Anyone can join, but identities are verified, real names only." },
    { sel:'.dial@3',     say:"And it fights scraping hard." },
    { sel:'.casenote@0', say:"Take the landmark hiQ Labs case: a startup scraped public profiles to resell, LinkedIn blocked it and, after years in court, won. The data stays LinkedIn's." },
  ],

  'q-guard-doors': "How tightly does it guard the doors?",

  'apis': [
    { sel:'.tier@0',  say:"As for boundary resources, LinkedIn offers no SDKs, only APIs, what Ghazawneh and Henfridsson call the dials that balance control against contribution. It opens the door a crack: Sign-In with LinkedIn, which lets other apps log you in with your identity, plus the Share API to post to the feed." },
    { sel:'.tier@1',  say:"But everything valuable hides behind a velvet rope: the Marketing API to automate ad campaigns, and the Jobs and ATS APIs to sync postings and applicants, all need partner approval." },
    { sel:'.tier@2',  say:"And an invite-only inner ring: Talent, Learning and Sales Navigator, the deep recruiting, training and sales data." },
    { sel:'.stamp@0', say:"Bulk data access? Forbidden. The surface is deliberately narrow, control beats openness again." },
  ],

  'q-cost': "What does all that control cost us?",

  'rewired': [
    { sel:'.bacol@0',   say:"We pay through the job market itself. Before LinkedIn, recruiting meant posting a job and waiting, paper résumés and headhunter networks." },
    { sel:'.bagrp@0',   say:"After, it flipped to hunting people who never applied, living public profiles and self-serve search, turning every professional into a visible, searchable asset." },
    { sel:'.warnbox@0', say:"Convenient, hugely. But the flip side hands one private, algorithmic gatekeeper enormous power over who gets seen, raising questions of bias, surveillance, and everyone left off the platform. Let's return to Lena one last time." },
  ],

  'lena-job': [
    { sel:'.story-copy', say:"And it works out. Six weeks later, Lena signs as Lead Product Designer, a real step up. But replay it, she never applied." },
    { sel:'.mock@0',     say:"An algorithm surfaced her, a paying recruiter reached her, and a private platform sat in every step. Lena won, and so did LinkedIn, which owned the whole match. That's the verdict: formidable network effects and asset-light scale make it powerful, yet cheap switching, low openness and its labour-market grip keep it contestable. Powerful, but not winner-take-all, its moat the network and the data it owns, not the doors it opens." },
  ],

  'the-end': "LinkedIn. Powerful, but not winner-take-all. Thanks for watching.",

};
