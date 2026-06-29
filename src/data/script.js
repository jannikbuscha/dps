// ============================================================================
// THE SPOKEN SCRIPT, every line of voiceover/caption text, in one place.
//
// This is the file to edit when you want to change what is *said*. The visual
// markup lives in scenes.js, this file only holds the words.
//
// Keyed by each scene's `id` (see scenes.js). Each entry is either:
//   • a string, a single narration block (the default), or
//   • an array of { sel, say } steps, spoken one beat at a time, where `sel`
//     is the on-screen element that lights up while that line is read.
//
// This is the condensed ~1:30 cut: one tight, term-dense line per scene (so
// every scene's on-screen visuals still appear, just without per-step
// spotlighting). The player (engine/player.js) zips this onto scenes by id.
// ============================================================================

export const script = {

  /* ===================== ACT 1, THE SETUP ===================== */

  'meet-lena': "Meet Lena, a product designer, keen to connect.",

  'enter': "She joins LinkedIn, the world's largest professional network.",

  'q-many-sides': "What makes it a platform?",

  'multi-sided': "A multi-sided platform and ecosystem: members supply, complementors demand, the owner takes a cut.",

  /* ===================== ACT 2, THE MACHINE ===================== */

  'q-grow': "What makes it grow?",

  'network-effects': "The engine: network effects, direct, cross-side and data.",

  'q-free': "Why almost free?",

  'matchmaker': "A frictionless intermediary, asset-light and scalable, at near-zero cost.",

  'lena-match': "A recruiter's filters surface Lena, the opportunity finds her.",

  'q-exchange': "What's exchanged?",

  'value-unit': "Value co-created: members' free value units, complementors' paid transactions, the platform's core interaction.",

  'q-from-zero': "Starting from zero?",

  'cold-start': "It beat the chicken-and-egg: address-book seeding, freemium, viral loops, IPO, then Microsoft.",

  'q-money': "Where's the money?",

  'revenue': "Three engines, Talent, Marketing, Premium, freemium plus cross-subsidisation, the money side pays.",

  'lena-pays': "A paid InMail reaches Lena, the model made personal.",

  /* ================= ACT 3, THE CRACK & VERDICT ================= */

  'q-unbeatable': "Really winner-take-all?",

  'crack': "Not winner-take-all: strong network effects, but cheap multi-homing keeps it contestable.",

  'q-moat': "Its real moat?",

  'control': "Built for control, not openness: opaque algorithm, real names, anti-scraping, the hiQ case.",

  'q-guard-doors': "Guarding the doors?",

  'apis': "Boundary resources: no SDKs, only APIs, open just a crack.",

  'q-cost': "The cost to us?",

  'rewired': "It rewired work, one algorithmic gatekeeper decides who's seen.",

  'lena-job': "Lena gets the job. Powerful, but not winner-take-all, the moat is data.",

  'the-end': "Powerful, but not winner-take-all. Thanks for watching.",

};
