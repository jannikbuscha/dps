# Scene audio narration

Pre-recorded narration tracks, one per reveal-step. The player loads them by
name and advances to the next step / scene when each track finishes playing.

## Naming convention

- Single-narration scene: `<scene-id>.mp3`
- Stepped scene: `<scene-id>-<n>.mp3`  (n = 1-based step number, in reveal order)

Drop the files directly in this folder (`public/audio/`). They are served at
`<base>/audio/<name>`. `.mp3` is expected. Any track that is missing simply
falls back to the auto-timed estimate, so partial sets still play through.

## The 64 tracks, in playback order

### 01. meet-lena  —  Meet Lena

- `meet-lena.mp3` — Meet Lena, a product designer in Munich. Happily employed, not job-hunting, but she wants one thing: to connect with people in her field and stay part of her professional network. So she goes looking for the place where that happens.

### 02. enter  —  The hook

- `enter-1.mp3` — The place she's looking for is LinkedIn: the world's largest professional network.
- `enter-2.mp3` — Just by creating a profile, Lena joins over 1.3 billion people.
- `enter-3.mp3` — Across more than two hundred countries.
- `enter-4.mp3` — About seventeen point eight billion dollars in revenue last year.
- `enter-5.mp3` — From an idea launched back in 2003.

### 03. q-many-sides  —  Question

- `q-many-sides.mp3` — What makes LinkedIn a platform?

### 04. multi-sided  —  Multi-sided platform

- `multi-sided-1.mp3` — At its core, LinkedIn is a multi-sided platform: it doesn't serve a single customer but several distinct groups at once, and each side only becomes valuable because the others are there.
- `multi-sided-2.mp3` — At the centre, the owner plays referee and architect, setting the rules, deciding how the sides connect, and keeping the network trustworthy. It never owns the deal, it just makes the right people findable.
- `multi-sided-3.mp3` — On the one hand, members: professionals like Lena, plus students, job seekers, the self-employed and executives.
- `multi-sided-4.mp3` — On the other, the complementors. First, recruiters, like Marco, who come to find talent.
- `multi-sided-5.mp3` — Then companies and advertisers, putting their brand in front of you.
- `multi-sided-6.mp3` — And developers, partners and creators who build on top. The owner takes a cut of nearly everything.

### 05. q-grow  —  Question

- `q-grow.mp3` — What makes it grow on its own?

### 06. network-effects  —  Network effects

- `network-effects-1.mp3` — Network effects are the engine under the whole thing. Katz and Shapiro split them in two. Direct: every new member makes the network more useful for everyone already on it.
- `network-effects-2.mp3` — Cross-side: more members lure more recruiters, and more recruiters lure more members, LinkedIn has both.
- `network-effects-3.mp3` — Plus a sneaky third, data network effects: every click trains the matching, a flywheel that spins itself.
- `network-effects-4.mp3` — But there's a dark side: spam and recruiter fatigue can erode value.

### 07. q-free  —  Question

- `q-free.mp3` — Why is it almost free to grow?

### 08. matchmaker  —  Frictionless scale

- `matchmaker-1.mp3` — Two reasons it's almost unstoppable. First, it's a frictionless matchmaker, an intermediary that crushes the cost of searching the job market, linking a recruiter in Berlin to a candidate in Munich who isn't even looking.
- `matchmaker-2.mp3` — Second, it's asset-light: just software and data, so the next member costs almost nothing, yet sells to recruiters again and again. No warehouses, no factories, the textbook platform-versus-pipeline contrast. And that matching is about to find Lena.

### 09. lena-match  —  Lena · the match finds her

- `lena-match-1.mp3` — A few weeks drift by, and Lena still isn't job hunting.
- `lena-match-2.mp3` — But in Berlin, a recruiter named Marco types three little filters. In seconds, there she is.
- `lena-match-3.mp3` — The network's reach and near-zero search cost did the work. The opportunity travelled to Lena, not the other way around.
- `lena-match-4.mp3` — And it isn't luck: shared connections like Anna and Tom vouch for her, so the match feels trustworthy. But pause, something just changed hands, and it wasn't anything you could hold.

### 10. q-exchange  —  Question

- `q-exchange.mp3` — What exactly are people exchanging?

### 11. value-unit  —  Value co-creation

- `value-unit-1.mp3` — Value here is co-created by three parties. At the centre, the platform provides the infrastructure and support: the network, the tools and the matching algorithm. It runs the core interaction, pulling people in, equipping them, matching the right person to the right opportunity, and takes a cut of everything that flows through.
- `value-unit-2.mp3` — The members generate the supply, the value units they make for free: profiles, connections, posts, and the attention and data they leave behind.
- `value-unit-3.mp3` — And the complementors generate the demand through paid transactions: recruiters pay to reach talent, advertisers bid in the ad auction, developers and creators build on top.

### 12. q-from-zero  —  Question

- `q-from-zero.mp3` — How do you start a network from zero?

### 13. cold-start  —  The cold start

- `cold-start-1.mp3` — In 2003, LinkedIn launches and beats the chicken-and-egg problem with address-book imports as instant social proof: people saw familiar names and started inviting others.
- `cold-start-2.mp3` — In 2005, freemium turns power users into payers.
- `cold-start-3.mp3` — In 2006, People You May Know sparks a viral loop, and public profiles bring free Google traffic.
- `cold-start-4.mp3` — In 2011, the IPO on the New York Stock Exchange.
- `cold-start-5.mp3` — In 2016, Microsoft buys LinkedIn for twenty-six-point-two billion dollars.
- `cold-start-6.mp3` — And from 2023, the AI era deepens the data moat.

### 14. q-money  —  Question

- `q-money.mp3` — Where does the money actually come from?

### 15. revenue  —  The money

- `revenue-1.mp3` — Follow the money: three engines. The biggest, about sixty percent, is Talent Solutions, the paid recruiting suite, Recruiter seats, job slots and tools like InMail. Around a quarter is Marketing Solutions, ads sold through an auction. The rest is what individuals pay for: Premium, which shows who viewed you, Sales Navigator for finding sales leads, and Learning, its library of online courses.
- `revenue-2.mp3` — Underneath sits the pricing strategy: freemium plus cross-subsidisation. Free users increase the platform's value, while paying segments, recruiters, advertisers and sales professionals, pay for enhanced access, targeting and advanced tools. That money side is about to land in Lena's inbox.

### 16. lena-pays  —  Lena · someone pays to reach her

- `lena-pays-1.mp3` — Here's how it reaches her. A message lands in Lena's inbox. It looks ordinary, but it isn't, Marco couldn't just message her, they aren't connected.
- `lena-pays-2.mp3` — So his company paid LinkedIn: a paid InMail, on top of a Recruiter licence worth thousands a year. Lena reads it free, never seeing the price tag. The business model, made personal.

### 17. q-unbeatable  —  Question

- `q-unbeatable.mp3` — Is LinkedIn really winner-take-all?

### 18. crack  —  The crack

- `crack-1.mp3` — Eisenmann says a market only tips to one winner when three conditions hold at once. First, strong indirect network effects: the more members join, the more recruiters and advertisers they attract, and the bigger the base, the more providers want in. LinkedIn has this in spades.
- `crack-2.mp3` — Second, high multi-homing costs: it must be too costly to stay active on rivals as well. Here it fails, a recruiter happily runs LinkedIn, Indeed and Glassdoor at once, paying for whichever delivers.
- `crack-3.mp3` — Third, low demand for specialized features: users wanting one standardized solution rather than niche tools. Not quite, the market still splits by function and region.
- `crack-4.mp3` — So rivals survive: Indeed dominates job listings, Glassdoor owns reviews, Xing holds the DACH region. Only one condition holds, so LinkedIn is powerful but contestable, not winner-take-all.

### 19. q-moat  —  Question

- `q-moat.mp3` — So what is its real moat?

### 20. control  —  Control is the moat

- `control-1.mp3` — Its real moat isn't openness, it's control. Tiwana frames governance as who decides and how open the platform is. On both, LinkedIn leans to control, starting with a feed algorithm that's opaque and tightly held.
- `control-2.mp3` — Terms and moderation are strict.
- `control-3.mp3` — Anyone can join, but identities are verified, real names only.
- `control-4.mp3` — And it fights scraping hard.
- `control-5.mp3` — Take the landmark hiQ Labs case: a startup scraped public profiles to resell, LinkedIn blocked it and, after years in court, won. The data stays LinkedIn's.

### 21. q-guard-doors  —  Question

- `q-guard-doors.mp3` — How tightly does it guard the doors?

### 22. apis  —  The gated doors

- `apis-1.mp3` — As for boundary resources, LinkedIn offers no SDKs, only APIs, what Ghazawneh and Henfridsson call the dials that balance control against contribution. It opens the door a crack: Sign-In with LinkedIn, which lets other apps log you in with your identity, plus the Share API to post to the feed.
- `apis-2.mp3` — But everything valuable hides behind a velvet rope: the Marketing API to automate ad campaigns, and the Jobs and ATS APIs to sync postings and applicants, all need partner approval.
- `apis-3.mp3` — And an invite-only inner ring: Talent, Learning and Sales Navigator, the deep recruiting, training and sales data.
- `apis-4.mp3` — Bulk data access? Forbidden. The surface is deliberately narrow, control beats openness again.

### 23. q-cost  —  Question

- `q-cost.mp3` — What does all that control cost us?

### 24. rewired  —  The cost

- `rewired-1.mp3` — We pay through the job market itself. Before LinkedIn, recruiting meant posting a job and waiting, paper résumés and headhunter networks.
- `rewired-2.mp3` — After, it flipped to hunting people who never applied, living public profiles and self-serve search, turning every professional into a visible, searchable asset.
- `rewired-3.mp3` — Convenient, hugely. But the flip side hands one private, algorithmic gatekeeper enormous power over who gets seen, raising questions of bias, surveillance, and everyone left off the platform. Let's return to Lena one last time.

### 25. lena-job  —  Lena · she got the job

- `lena-job-1.mp3` — And it works out. Six weeks later, Lena signs as Lead Product Designer, a real step up. But replay it, she never applied.
- `lena-job-2.mp3` — An algorithm surfaced her, a paying recruiter reached her, and a private platform sat in every step. Lena won, and so did LinkedIn, which owned the whole match. That's the verdict: formidable network effects and asset-light scale make it powerful, yet cheap switching, low openness and its labour-market grip keep it contestable. Powerful, but not winner-take-all, its moat the network and the data it owns, not the doors it opens.

### 26. the-end  —  The end

- `the-end.mp3` — LinkedIn. Powerful, but not winner-take-all. Thanks for watching.

