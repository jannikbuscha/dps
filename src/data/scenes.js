// The full scene list, in playback order — built to play as a VIDEO.
//
// Rhythm: it opens on Lena (who she is, why she's on LinkedIn), then a big
// centered QUESTION poses each beat and a sparse content scene answers it with
// a large visual + minimal on-screen text (the prose lives in the voiceover).
// The source rail (.src) stays on screen the whole time. The recurring "Lena"
// chapters (story:true) are interleaved. There is no references scene — the
// full source list is provided separately; the video closes with a thank-you.

// Base URL for runtime asset paths (so /images/… and the SVG logos resolve
// under the GitHub Pages "/dps/" base as well as "/" in dev). Vite inlines
// import.meta.env.BASE_URL.
const B = import.meta.env.BASE_URL;

// The square LinkedIn "bug" logo, used as the price-setter hub in the
// "many sides" scene (linkedin_small.svg).
const LOGO = `<img class="hublogo" src="${B}linkedin_small.svg" alt="LinkedIn">`;

export const scenes = [

  /* ============ ACT 1, THE SETUP ============ */

  /* 0 - MEET LENA: who she is + what she wants (to connect) — not on LinkedIn yet */
  { no:"00", kick:"Meet Lena",
    html:`
      <div class="lena-hero">
        <img class="lenaface r" src="${B}images/lena.jpg" alt="Lena Vogel">
        <div class="lenaname r" style="--d:.12s">Lena Vogel</div>
        <div class="lenarole r" style="--d:.18s">Product Designer · Munich</div>
        <div class="lenawhy r" style="--d:.26s">Wants to <b>connect with people</b> in her field.</div>
        <div class="taglist r" style="--d:.34s">
          <span class="mpill on"><i class="ico ico-check" aria-hidden="true"></i> Happily employed</span>
          <span class="mpill off"><i class="ico ico-x" aria-hidden="true"></i> Not job-hunting</span>
        </div>
      </div>`,
    narration:"Meet Lena, a product designer in Munich. She's happily employed and not looking for a job. But she wants one simple thing: to connect with people in her field, keep up with colleagues, and stay part of her professional network. So one evening she goes looking for the place where that happens." },

  { no:"Q", q:true, kick:"Question",
    html:`<div class="bigq r">So, what <em>exactly</em> is <span class="blue">LinkedIn</span>?</div>`,
    narration:"So, what exactly is LinkedIn?" },

  /* ENTER LINKEDIN: the scale answer (stats) */
  { no:"enter", kick:"The hook",
    html:`
      <h2 class="h r">Enter <span class="blue">LinkedIn</span>.</h2>
      <div class="stats intro-stats r" style="--d:.2s">
        <div class="stat pop"><div class="v" data-count="1.3" data-suffix="B" data-dec="1">0</div><div class="k">members worldwide</div></div>
        <div class="stat pop"><div class="v c" data-count="200" data-suffix="+">0</div><div class="k">countries &amp; territories</div></div>
        <div class="stat pop"><div class="v g" data-count="17.8" data-prefix="$" data-suffix="B" data-dec="1">0</div><div class="k">revenue, FY2025</div></div>
        <div class="stat pop"><div class="v i" data-count="2003" data-plain="1">0</div><div class="k">launched · 22+ yrs ago</div></div>
      </div>
      <div class="src">
        <span class="cite">DataReportal (2026)</span>
        <span class="cite">Microsoft 10-K, FY2025</span>
      </div>`,
    narration:"The place she's looking for is LinkedIn: the world's largest professional network. By creating a profile, Lena just placed herself among more than a billion people. Over one point three billion members, across two hundred countries, and around seventeen point eight billion dollars in revenue last year, growing since 2003." },

  { no:"Q", q:true, kick:"Question",
    html:`<div class="bigq r">How does one platform serve <em>so many sides</em>?</div>`,
    narration:"How does one platform serve so many sides?" },

  /* 3, MULTI-SIDED MARKET */
  {
    no:"03", kick:"Multi-sided market", html:`
      <h2 class="h r" style="--d:.1s">One platform, <em>many sides</em></h2>
      <div class="net">
        <svg class="netsvg">
        </svg>
        <div class="hubcore nr" style="--d:.3s">${LOGO}<div class="hs">PRICE-SETTER</div></div>
        <div class="node nr" style="--d:.5s; left:16%; top:24%"><img class="dot" src="${B}images/lena.jpg" alt=""><div class="nl">Members</div><div class="ns">free · like Lena</div></div>
        <div class="node money nr" style="--d:.62s; left:84%; top:24%"><img class="dot" src="${B}images/marco.jpg" alt=""><div class="nl">Recruiters</div><div class="ns">they pay <i class="ico ico-coin" aria-hidden="true"></i> · like Marco</div></div>
        <div class="node money nr" style="--d:.74s; left:86%; top:74%"><img class="dot" src="${B}images/sara.jpg" alt=""><div class="nl">Advertisers</div><div class="ns">they pay <i class="ico ico-coin" aria-hidden="true"></i> · a brand</div></div>
        <div class="node nr" data-stroke="#7ab83b" style="--d:.86s; left:14%; top:74%"><img class="dot" src="${B}images/tom.jpg" alt=""><div class="nl">Developers</div><div class="ns">build on top</div></div>
      </div>
      <div class="src">
        <span class="cite">Rochet &amp; Tirole (2003)</span>
        <span class="cite g">Hagiu &amp; Wright (2015)</span>
        <span class="cite">Armstrong (2006)</span>
      </div>`, narration:"So what is it? At its core, LinkedIn is a multi-sided platform. Rochet and Tirole describe that as a business that connects distinct groups and gets the pricing right between them. LinkedIn juggles four at once: members, recruiters, advertisers, and developers, and it prices them shamelessly unequally. Members glide in almost free, while recruiters and advertisers foot the bill. And as Hagiu and Wright note, LinkedIn never owns the deal itself; it just makes the right people findable."
  },

  /* ============ ACT 2, THE MACHINE ============ */

  { no:"Q", q:true, kick:"Question",
    html:`<div class="bigq r">What makes it <em>grow</em> on its own?</div>`,
    narration:"What makes it grow on its own?" },

  /* 4, NETWORK EFFECTS engine */
  {
    no:"04", kick:"Network effects", html:`
      <h2 class="h r" style="--d:.1s">The engine: <span class="blue">network effects</span></h2>
      <div class="panes">
        <div class="pane r" style="--d:.24s"><h4>Direct</h4><p><b>member <i class="ico ico-swap" aria-hidden="true"></i> member</b> · every join makes it more useful</p></div>
        <div class="pane gold r" style="--d:.36s"><h4>Cross-side</h4><p><b>members <i class="ico ico-swap" aria-hidden="true"></i> recruiters</b> · each side pulls the other</p></div>
        <div class="pane cyan r" style="--d:.48s"><h4>Data effect</h4><p>clicks <i class="ico ico-arrow" aria-hidden="true"></i> better matching <i class="ico ico-arrow" aria-hidden="true"></i> more data</p></div>
        <div class="pane rose r" style="--d:.6s"><h4><i class="ico ico-warn" aria-hidden="true"></i> The dark side</h4><p>spam &amp; fatigue can <b>erode value</b></p></div>
      </div>
      <div class="src">
        <span class="cite">Katz &amp; Shapiro (1985)</span>
        <span class="cite g">Eisenmann, Parker &amp; Van Alstyne (2006)</span>
      </div>`, narration:"One answer: network effects, the engine under the whole thing. Katz and Shapiro split it in two. Direct: every new member makes the network more useful for everyone already on it. Cross-side: more members lure more recruiters, and more recruiters lure more members. LinkedIn has both, plus a sneaky third, data network effects: every click trains its matching, pulling in more people, making more data. A flywheel that spins itself. But there's a dark side, spam and recruiter fatigue. Past a point, the crowd can make it worse. Still, two forces make this engine almost impossible to stop."
  },

  { no:"Q", q:true, kick:"Question",
    html:`<div class="bigq r">Why is it almost <em>free</em> to grow?</div>`,
    narration:"Why is it almost free to grow?" },

  /* 5, INTERMEDIARY + SCALE */
  {
    no:"05", kick:"Frictionless scale", html:`
      <h2 class="h r" style="--d:.1s">Matchmaker at <em>near-zero cost</em></h2>
      <div class="panes">
        <div class="pane r" style="--d:.22s"><h4>The matchmaker</h4>
          <p>it collapses <b>search costs</b> in the job market</p>
          <div class="flowstrip" style="margin-top:1.4cqmin"><div class="step"><span class="t">Recruiter</span></div><span class="arrow"><i class="ico ico-swap" aria-hidden="true"></i></span><div class="step"><span class="n">LinkedIn</span></div><span class="arrow"><i class="ico ico-swap" aria-hidden="true"></i></span><div class="step"><span class="t">Hidden talent</span></div></div>
        </div>
        <div class="pane gold r" style="--d:.36s"><h4>Asset-light</h4>
          <p>just <b>software + data</b> · the next member costs ~nothing</p>
          <div class="bars" style="margin-top:1.4cqmin; max-width:none">
            <div class="barrow"><div class="bl" style="width:22cqmin; font-size:1.6cqmin">Platform cost / user</div><div class="track"><div class="fill" style="background:#7ab83b" data-w="9"></div></div></div>
            <div class="barrow"><div class="bl" style="width:22cqmin; font-size:1.6cqmin">Old "pipeline" cost</div><div class="track"><div class="fill" style="background:#ca7406" data-w="82"></div></div></div>
          </div>
        </div>
      </div>
      <div class="src">
        <span class="cite">Van Alstyne, Parker &amp; Choudary (2016, HBR)</span>
        <span class="cite g">Hagiu &amp; Wright (2015)</span>
      </div>`, narration:"Why almost unstoppable? Two reasons. First, LinkedIn is a frictionless matchmaker, it crushes the cost of searching the job market, quietly linking a recruiter in Munich to a perfect candidate in São Paulo who isn't even looking. Second, it's gloriously asset-light: basically software plus data, so the ten-millionth member costs almost nothing, yet can be sold to recruiters again and again. No warehouses, no factories, the textbook contrast between a platform and a pipeline. And that matchmaking isn't just theory. It's about to happen to Lena."
  },

  /* ✦ LENA · CHAPTER 1 — the match finds her (after scene 05) */
  { no:"✦", kick:"Lena · the match finds her", story:true,
    steps:[
      {sel:'.story-copy', say:"A few weeks drift by, and Lena still isn't job hunting."},
      {sel:'.mock@0', say:"But six hundred kilometres away in Berlin, a recruiter named Marco types three little filters: designer, Munich, design systems. In seconds, there she is."},
      {sel:'.mock@1', say:"The network's reach and that near zero search cost did all the work. The opportunity travelled to Lena, not the other way around."},
      {sel:'.mock@2', say:"And it isn't luck. Shared connections like Anna and Tom vouch for her quietly, so the match feels trustworthy before a single word is exchanged. But pause there, because something just changed hands, and it wasn't anything you could hold."}
    ],
    html:`
      <div class="storygrid">
        <div class="story-copy">
          <h2 class="h">The opportunity<br><em>finds her.</em></h2>
          <p>Still not searching — but a recruiter's <b>three filters</b> surface her in seconds.</p>
          <p>The job travels to <b>Lena</b>, not the other way around.</p>
        </div>
        <div>
          <div class="mock">
            <span class="mtag">Recruiter search · Berlin · 600 km away</span>
            <div class="mfilters">
              <span class="fchip">Role · Designer</span>
              <span class="fchip">Location · Munich</span>
              <span class="fchip">Skill · Design systems</span>
            </div>
            <div class="mnote" style="color:var(--accent)"><span class="mdot" style="background:var(--accent)"></span> 1 strong match — surfaced in seconds</div>
          </div>
          <div class="mock">
            <div class="mhead"><img class="mava" src="${B}images/marco.jpg" alt="Marco Reuter"><div><div class="mname" style="font-size:2.1cqmin">Marco Reuter viewed your profile</div><div class="msub">Senior Recruiter · Berlin · 600 km away</div></div></div>
          </div>
          <div class="mock">
            <span class="mtag">People you may know</span>
            <div class="mline" style="border-top:none"><img class="mava" src="${B}images/anna.jpg" alt="Anna Keller" style="width:5cqmin;height:5cqmin"><div class="msub" style="margin:0">Anna Keller · ex-colleague · 12 mutual</div></div>
            <div class="mline"><img class="mava" src="${B}images/tom.jpg" alt="Tom Brandt" style="width:5cqmin;height:5cqmin"><div class="msub" style="margin:0">Tom Brandt · former teammate · 8 mutual</div></div>
          </div>
        </div>
      </div>`,
    narration:"A few weeks drift by, and Lena still isn't job hunting. But six hundred kilometres away in Berlin, a recruiter named Marco types three little filters: designer, Munich, design systems. In seconds, there she is. The network's reach and that near zero search cost did all the work. The opportunity travelled to Lena, not the other way around. And it isn't luck. Shared connections like Anna and Tom vouch for her quietly, so the match feels trustworthy before a single word is exchanged. But pause there, because something just changed hands, and it wasn't anything you could hold." },

  { no:"Q", q:true, kick:"Question",
    html:`<div class="bigq r">What exactly are people <em>exchanging</em>?</div>`,
    narration:"What exactly are people exchanging?" },

  /* 6, VALUE UNIT / core interaction — section 2 revealed later (steps) */
  {
    no:"06", kick:"The value unit",
    steps:[
      {sel:'.vblock@0', say:"What actually changes hands? Members create the value units, the profile, the connection, the job post, the update, and they make every one of them for free."},
      {sel:'.vblock@1', say:"Then the platform runs the core interaction: it pulls people in with the free network, equips them with tools and the algorithm, and matches the right person to the right opportunity. The value you make becomes the inventory it rents out to advertisers."}
    ],
    html:`
      <h2 class="h r" style="--d:.1s">The <span class="blue">value unit</span> you create for free</h2>
      <div class="vblock">
        <div class="seclbl"><span class="num">1</span> <b>Members create the value units</b><span class="sub">at no cost</span></div>
        <div class="vstack">
          <div class="vcard"><div class="vt">The Profile</div><div class="vd">your identity</div></div>
          <div class="vcard"><div class="vt">The Connection</div><div class="vd">a graph edge</div></div>
          <div class="vcard"><div class="vt">The Job Post</div><div class="vd">demand</div></div>
          <div class="vcard"><div class="vt">The Update</div><div class="vd">attention</div></div>
        </div>
      </div>
      <div class="vblock">
        <div class="seclbl g"><span class="num">2</span> <b>The platform runs the core interaction</b></div>
        <div class="pfm">
          <div class="pf"><div class="pn">PULL</div><div class="pt">Attract</div><div class="pp">free network</div></div>
          <div class="pfarrow"><i class="ico ico-arrow" aria-hidden="true"></i></div>
          <div class="pf"><div class="pn">FACILITATE</div><div class="pt">Equip</div><div class="pp">tools + algorithm</div></div>
          <div class="pfarrow"><i class="ico ico-arrow" aria-hidden="true"></i></div>
          <div class="pf"><div class="pn">MATCH</div><div class="pt">Connect</div><div class="pp">person <i class="ico ico-swap" aria-hidden="true"></i> opportunity</div></div>
        </div>
      </div>
      <div class="src">
        <span class="cite g">Parker, Van Alstyne &amp; Choudary, "Platform Revolution" (2016)</span>
      </div>`, narration:"What actually changes hands? Members create the value units, the profile, the connection, the job post, the update, and they make every one of them for free. Then the platform runs the core interaction: it pulls people in with the free network, equips them with tools and the algorithm, and matches the right person to the right opportunity. The value you make becomes the inventory it rents out to advertisers."
  },

  { no:"Q", q:true, kick:"Question",
    html:`<div class="bigq r">Who else <em>lives off</em> this platform?</div>`,
    narration:"Who else lives off this platform?" },

  /* 7, ECOSYSTEM */
  {
    no:"07", kick:"The ecosystem", html:`
      <h2 class="h r" style="--d:.1s">An <em>ecosystem</em>, not one company</h2>
      <div class="net" style="height:44cqmin">
        <svg class="netsvg">
        </svg>
        <div class="hubcore nr" style="--d:.3s"><div class="hl">Owner</div><div class="hs">REFEREE · ARCHITECT</div></div>
        <div class="node nr" style="--d:.45s; left:50%; top:16%"><div class="dot" style="font-size:1.2cqmin">ATS</div><div class="nl">Hiring tools</div></div>
        <div class="node nr" data-stroke="#7ab83b" style="--d:.55s; left:84%; top:34%"><div class="dot">Ad</div><div class="nl">Ad agencies</div></div>
        <div class="node nr" style="--d:.65s; left:84%; top:70%"><div class="dot">Ed</div><div class="nl">Instructors</div></div>
        <div class="node nr" style="--d:.75s; left:50%; top:86%"><div class="dot">Cr</div><div class="nl">Creators</div></div>
        <div class="node nr" data-stroke="#7ab83b" style="--d:.85s; left:16%; top:70%"><div class="dot">Da</div><div class="nl">Data partners</div></div>
        <div class="node money nr" style="--d:.95s; left:16%; top:34%"><div class="dot">$</div><div class="nl">LinkedIn's cut</div></div>
      </div>
      <div class="src">
        <span class="cite">Jacobides, Cennamo &amp; Gawer (2018)</span>
        <span class="cite g">Gawer &amp; Cusumano (2014)</span>
      </div>`, narration:"Much bigger, because LinkedIn isn't really a company, it's an ecosystem. Jacobides describes ecosystems as loose crowds of complementors building value around a shared platform, with light central control. Picture everything orbiting LinkedIn: hiring-software vendors, ad agencies, course creators, data partners. And at the centre, the owner, a Microsoft company since 2016, plays referee and architect: setting rules, policing quality, skimming a cut of nearly everything."
  },

  { no:"Q", q:true, kick:"Question",
    html:`<div class="bigq r">How do you start a network <em>from zero</em>?</div>`,
    narration:"How do you start a network from zero?" },

  /* 8, GROWTH / chicken-and-egg */
  {
    no:"08", kick:"The cold start", html:`
      <h2 class="h r" style="--d:.1s">Beating the <span class="blue">chicken-and-egg</span></h2>
      <div class="tl">
        <div class="axis"></div>
        <div class="mile r" style="--d:.3s; left:9%"><div class="mlabel"><div class="yr">2003</div><div class="md">Launch · seed the address book</div></div><div class="pin"></div></div>
        <div class="mile alt g r" style="--d:.42s; left:24.8%"><div class="pin"></div><div class="mlabel"><div class="yr">2005</div><div class="md">Freemium</div></div></div>
        <div class="mile r" style="--d:.54s; left:40.6%"><div class="mlabel"><div class="yr">2006</div><div class="md">"People You May Know"</div></div><div class="pin"></div></div>
        <div class="mile alt g r" style="--d:.66s; left:56.4%"><div class="pin"></div><div class="mlabel"><div class="yr">2011</div><div class="md">IPO on NYSE</div></div></div>
        <div class="mile r" style="--d:.78s; left:72.2%"><div class="mlabel"><div class="yr">2016</div><div class="md">Microsoft · <b>$26.2B</b></div></div><div class="pin"></div></div>
        <div class="mile alt g r" style="--d:.9s; left:88%"><div class="pin"></div><div class="mlabel"><div class="yr">2023+</div><div class="md">AI era</div></div></div>
      </div>
      <div class="src">
        <span class="cite g">Caillaud &amp; Jullien (2003)</span>
        <span class="cite">Microsoft 8-K (June 2016)</span>
        <span class="cite">Hoffman &amp; Yeh, "Blitzscaling" (2018)</span>
      </div>`, narration:"Honestly, it almost didn't. Every network hits the same wall at birth, the chicken-and-egg problem Caillaud and Jullien describe: no users without recruiters, no recruiters without users. LinkedIn's escape moves are studied like chess openings: import your address book to seed connections, People You May Know for a viral loop, public profiles so Google ships free traffic, and from 2005, freemium to turn power users into payers. It worked, public in 2011, bought by Microsoft in 2016 for twenty-six-point-two billion dollars."
  },

  { no:"Q", q:true, kick:"Question",
    html:`<div class="bigq r">Where does the <em>money</em> come from?</div>`,
    narration:"Where does the money actually come from?" },

  /* 9, BUSINESS MODEL — one bold proportional split bar */
  {
    no:"09", kick:"The money", html:`
      <h2 class="h r" style="--d:.1s">Three revenue <em>engines</em></h2>
      <div class="splitbar r" style="--d:.24s">
        <div class="sb-seg" style="flex:62; --c:#639a00"><div class="sbv">62%</div><div class="sbn">Talent Solutions</div><div class="sbd">recruiting · the giant</div></div>
        <div class="sb-seg" style="flex:24; --c:#ca7406"><div class="sbv">24%</div><div class="sbn">Marketing</div><div class="sbd">ad auction</div></div>
        <div class="sb-seg" style="flex:14; --c:#7ab83b"><div class="sbv">14%</div><div class="sbn">Premium</div><div class="sbd">+ Learning</div></div>
      </div>
      <div class="takeaway r" style="--d:.5s">Pamper the members · <b>bill the money side.</b></div>
      <div class="src">
        <span class="cite g">Osterwalder &amp; Pigneur (2010)</span>
        <span class="cite">Microsoft / TechCrunch (2016) · FY25</span>
      </div>`, narration:"Follow the money, and three engines roar into view. The biggest by far is Talent Solutions, the recruiting tools, around two-thirds of revenue. Next, Marketing Solutions, selling ads through an auction. And third, what individuals pay for directly: Premium, Sales Navigator, Learning. Same multi-sided trick underneath: pamper the members, bill the money side. And that money side is, right now, about to land in Lena's inbox."
  },

  /* ✦ LENA · CHAPTER 2 — someone pays to reach her (after scene 09) */
  { no:"✦", kick:"Lena · someone pays to reach her", story:true,
    steps:[
      {sel:'.story-copy', say:"Here's how it reaches her. A message appears in Lena's inbox. It looks like any other note, but it isn't. Marco couldn't just message her; they aren't connected."},
      {sel:'.mock@0', say:"So his company paid LinkedIn for the privilege: a paid InMail, on top of a Recruiter licence that runs into thousands a year. Lena reads it for free, never seeing the price tag. That's the business model, made personal."}
    ],
    html:`
      <div class="storygrid">
        <div class="story-copy">
          <h2 class="h">Someone <em>pays</em><br>to reach her.</h2>
          <p>Not connected — so Marco's company <b>paid LinkedIn</b> to message her.</p>
          <p>Lena reads it free. The platform got <b>paid to put it there.</b></p>
        </div>
        <div class="mock">
          <span class="mtag" style="color:var(--gold)">Sponsored · InMail</span>
          <div class="mhead"><img class="mava" src="${B}images/marco.jpg" alt="Marco Reuter"><div><div class="mname" style="font-size:2.1cqmin">Marco Reuter</div><div class="msub">Senior Recruiter · Studio Berlin</div></div></div>
          <div class="mbody">"Hi Lena — we're hiring a <b>Lead Product Designer</b>, and your design-systems work is exactly it. Open to a chat?"</div>
          <div class="mnote"><span class="mdot"></span> Paid: InMail credit + a Recruiter licence (~thousands / year)</div>
        </div>
      </div>`,
    narration:"Here's how it reaches her. A message appears in Lena's inbox. It looks like any other note, but it isn't. Marco couldn't just message her; they aren't connected. So his company paid LinkedIn for the privilege: a paid InMail, on top of a Recruiter licence that runs into thousands a year. Lena reads it for free, never seeing the price tag. That's the business model, made personal." },

  /* ============ ACT 3, THE CRACK & VERDICT ============ */

  { no:"Q", q:true, kick:"Question",
    html:`<div class="bigq r">Is LinkedIn really <em>unbeatable</em>?</div>`,
    narration:"Is LinkedIn really unbeatable?" },

  /* 10, WINNER TAKE ALL? */
  {
    no:"10", kick:"The crack", html:`
      <h2 class="h r" style="--d:.1s">Unbeatable? <em>Not quite.</em></h2>
      <div class="checks">
        <div class="chk r" style="--d:.3s"><div class="badge y"><i class="ico ico-check" aria-hidden="true"></i></div><div class="grow"><div class="ct">Strong network effects</div><div class="cd">deep cross-side &amp; data effects</div></div><div class="verdict">TIPS <i class="ico ico-arrow" aria-hidden="true"></i></div></div>
        <div class="chk r" style="--d:.42s"><div class="badge n"><i class="ico ico-x" aria-hidden="true"></i></div><div class="grow"><div class="ct">Costly to use rivals too</div><div class="cd">no — switching is cheap</div></div><div class="verdict">RESISTS</div></div>
        <div class="chk r" style="--d:.54s"><div class="badge m"><i class="ico ico-approx" aria-hidden="true"></i></div><div class="grow"><div class="ct">Everyone wants the same thing</div><div class="cd">no — it splits by function &amp; region</div></div><div class="verdict">MIXED</div></div>
      </div>
      <div class="rivals r" style="--d:.68s">
        <span class="pill">Still contested:</span>
        <span class="rival">Indeed · jobs</span>
        <span class="rival">Glassdoor · reviews</span>
        <span class="rival">Xing · DACH</span>
      </div>
      <div class="src">
        <span class="cite">Eisenmann, Parker &amp; Van Alstyne (2006)</span>
        <span class="cite r">Eisenmann et al. (2011)</span>
        <span class="cite g">Caillaud &amp; Jullien (2003)</span>
      </div>`, narration:"Let's answer that. Does this market tip until one winner takes everything? Eisenmann says winner-take-all needs three things at once: strong network effects, painful switching costs, and everyone wanting the same one-size-fits-all thing. LinkedIn aces the first, and stumbles on the other two. Switching is cheap: a recruiter runs LinkedIn, Indeed and Glassdoor side by side, and in the DACH region plenty still keep a Xing profile. And the market splits by function and geography. So LinkedIn owns professional identity in the West, but it isn't untouchable. A champion, not an unbeatable one."
  },

  { no:"Q", q:true, kick:"Question",
    html:`<div class="bigq r">If not unbeatable, how does it <em>defend</em> itself?</div>`,
    narration:"If not unbeatable, how does it defend itself?" },

  /* 11, GOVERNANCE */
  {
    no:"11", kick:"Control is the moat", html:`
      <h2 class="h r" style="--d:.1s">Built for <em>control</em>, not openness</h2>
      <div class="dials">
        <div class="dial r" style="--d:.28s"><div class="dt"><b>Feed algorithm</b><span>opaque</span></div><div class="meter"><i data-w="92"></i></div></div>
        <div class="dial r" style="--d:.36s"><div class="dt"><b>Terms &amp; moderation</b><span>strict</span></div><div class="meter"><i data-w="84"></i></div></div>
        <div class="dial r" style="--d:.44s"><div class="dt"><b>Identity</b><span>real names</span></div><div class="meter"><i data-w="70"></i></div></div>
        <div class="dial r" style="--d:.52s"><div class="dt"><b>Anti-scraping</b><span>hiQ Labs</span></div><div class="meter"><i data-w="88"></i></div></div>
      </div>
      <div class="casenote r" style="--d:.64s"><i class="ico ico-ban" aria-hidden="true"></i> <b>hiQ Labs v. LinkedIn:</b> a startup scraped public profiles to resell; LinkedIn cut off its access and won on breach of contract — hiQ shut down. The data stays LinkedIn's.</div>
      <div class="src">
        <span class="cite">Tiwana, Konsynski &amp; Bush (2010)</span>
        <span class="cite g">Boudreau (2010)</span>
      </div>`, narration:"Not by throwing the doors open, but by locking them. Tiwana frames governance as two questions: who decides, and how open is the platform? On both, LinkedIn leans hard toward control. It rules the feed algorithm, enforces strict terms, and demands real identities. And it fights scraping hard. In the landmark hiQ Labs case, a startup harvested public LinkedIn profiles to resell as analytics; LinkedIn blocked it, and after years in court LinkedIn prevailed on breach of contract, and hiQ shut down. Boudreau names the trade-off: openness sparks innovation, but surrendering control risks the platform's integrity. LinkedIn picks control and trust every time. And you see that same instinct in how it treats outside developers."
  },

  { no:"Q", q:true, kick:"Question",
    html:`<div class="bigq r">How tightly does it <em>guard the doors</em>?</div>`,
    narration:"How tightly does it guard the doors?" },

  /* 12, BOUNDARY RESOURCES */
  {
    no:"12", kick:"The gated doors", html:`
      <h2 class="h r" style="--d:.1s"><span class="blue">APIs</span>: open a crack, no more</h2>
      <div class="pyr">
        <div class="tier t1 r" style="--d:.3s"><div class="tn">Open · any developer</div><div class="ti">Sign-In with LinkedIn · Share API</div></div>
        <div class="tier t2 r" style="--d:.45s"><div class="tn">Partner · apply + review</div><div class="ti">Marketing API · Jobs / ATS</div></div>
        <div class="tier t3 r" style="--d:.6s"><div class="tn">Partner · invite only</div><div class="ti">Talent · Learning · Sales Navigator</div></div>
      </div>
      <div class="stamp r" style="--d:.8s"><i class="ico ico-ban" aria-hidden="true"></i> NO BULK DATA</div>
      <div class="src">
        <span class="cite g">Ghazawneh &amp; Henfridsson (2013)</span>
        <span class="cite">Eaton et al. (2015)</span>
        <span class="cite">Microsoft Learn, API docs</span>
      </div>`, narration:"Those developers meet LinkedIn at its APIs. Ghazawneh and Henfridsson call APIs boundary resources, the dials that balance control against contribution. LinkedIn opens its door just a crack. Anyone can use the basics, Sign-In with LinkedIn, on OpenID Connect over OAuth 2.0, plus the Share API. But everything valuable hides behind a velvet rope: Marketing and Jobs need partner approval; Talent, Learning and Sales Navigator are invite-only. Bulk data access? Forbidden. Next to Apple or Salesforce, this surface is deliberately narrow. Control beats openness again. But that grip on data carries a cost, and it isn't LinkedIn that pays it."
  },

  { no:"Q", q:true, kick:"Question",
    html:`<div class="bigq r">What does all that control <em>cost us</em>?</div>`,
    narration:"What does all that control cost us?" },

  /* 13, THE ETHICAL COST */
  {
    no:"13", kick:"The cost", html:`
      <h2 class="h r" style="--d:.1s">It <span class="rosed">rewired</span> work</h2>
      <div class="ba">
        <div class="bacol old r" style="--d:.22s"><h4>Before</h4>
          <div class="li">Post a job &amp; wait</div>
          <div class="li">Paper résumé</div>
          <div class="li">Headhunter networks</div>
        </div>
        <div class="baarrow r" style="--d:.42s"><i class="ico ico-arrow" aria-hidden="true"></i></div>
        <div class="bacol new r" style="--d:.32s"><h4>After LinkedIn</h4>
          <div class="li">Hunt <b>passive</b> candidates</div>
          <div class="li">A living, public profile</div>
          <div class="li">Self-serve search</div>
        </div>
      </div>
      <div class="warnbox r" style="--d:.6s"><b>One private gatekeeper</b> decides who gets seen — bias, surveillance, invisibility off-platform.</div>
      <div class="src">
        <span class="cite">Gawer &amp; Cusumano (2014)</span>
        <span class="cite r">platform power · labour-market gatekeeping</span>
      </div>`, narration:"We pay it, through the job market itself. LinkedIn rewired how work works: recruiting flipped from posting a job and waiting, to hunting people who never raised their hand, turning every professional into a permanently visible, searchable asset. Convenient? Hugely. But the flip side: it hands enormous power over the labour market to a single private, algorithmic gatekeeper that decides who gets seen. That raises real questions, about bias, surveillance, and everyone left off the platform. Convenience for the many; quiet power for the one. To feel both sides of that bargain, let's check in on Lena one last time."
  },

  /* ✦ LENA · CHAPTER 3 — she got the job (after scene 13) */
  { no:"✦", kick:"Lena · she got the job", story:true,
    steps:[
      {sel:'.story-copy', say:"And, good news, it works out. Six weeks later, Lena signs: Lead Product Designer, a real step up, a genuinely happy ending. But replay how it happened. She never applied."},
      {sel:'.mock@0', say:"An algorithm decided she was worth surfacing; a paying recruiter decided she was worth reaching; and a private platform sat in the middle of every step. Lena won, and so did LinkedIn, which quietly owned the whole match. Convenience for her, quiet power for the platform. So, time for the final verdict."}
    ],
    html:`
      <div class="storygrid">
        <div class="story-copy">
          <h2 class="h">Lena got<br>the <span class="blue">job.</span></h2>
          <p><b>Lead Product Designer</b> — a real step up.</p>
          <p>But she never applied. <b>Who owned that match?</b></p>
        </div>
        <div class="mock">
          <span class="mtag" style="color:var(--cyan)">Offer accepted</span>
          <div class="mhead"><img class="mava g" src="${B}images/lena.jpg" alt="Lena Vogel"><div><div class="mname">Lead Product Designer</div><div class="msub">Studio Berlin · starts in 6 weeks</div></div></div>
          <div class="mline"><span class="mpill on">Hired via LinkedIn</span><span class="mpill gold">Ranked by the algorithm</span></div>
          <div class="mnote"><span class="mdot"></span> Lena won. So did LinkedIn — it owned every step.</div>
        </div>
      </div>`,
    narration:"And, good news, it works out. Six weeks later, Lena signs: Lead Product Designer, a real step up, a genuinely happy ending. But replay how it happened. She never applied. An algorithm decided she was worth surfacing; a paying recruiter decided she was worth reaching; and a private platform sat in the middle of every step. Lena won, and so did LinkedIn, which quietly owned the whole match. Convenience for her, quiet power for the platform. So, time for the final verdict." },

  { no:"Q", q:true, kick:"Question",
    html:`<div class="bigq r">So — <span class="blue">strong</span>, or <em>unbeatable</em>?</div>`,
    narration:"So, strong, or unbeatable?" },

  /* 14, VERDICT */
  {
    no:"14", kick:"The verdict", html:`
      <h2 class="h r" style="--d:.1s">Against the <em>frameworks</em></h2>
      <div class="score">
        <div class="scorerow r" style="--d:.26s"><div class="sk">Network effects</div><div class="sv good">STRONG <i class="ico ico-check" aria-hidden="true"></i></div></div>
        <div class="scorerow r" style="--d:.36s"><div class="sk">Asset-light scale</div><div class="sv good">STRONG <i class="ico ico-check" aria-hidden="true"></i></div></div>
        <div class="scorerow r" style="--d:.46s"><div class="sk">Unbeatable monopoly</div><div class="sv bad">CONTESTABLE <i class="ico ico-x" aria-hidden="true"></i></div></div>
        <div class="scorerow r" style="--d:.56s"><div class="sk">Openness</div><div class="sv bad">LOW <i class="ico ico-x" aria-hidden="true"></i></div></div>
        <div class="scorerow r" style="--d:.66s"><div class="sk">Labour-market ethics</div><div class="sv warn">CONCERN <i class="ico ico-warn" aria-hidden="true"></i></div></div>
      </div>
      <div class="closing r" style="--d:.82s"><b>Powerful, but not unbeatable.</b> The moat is the network and the data — not openness.</div>
      <div class="src">
        <span class="cite">Eisenmann et al. (2006)</span>
        <span class="cite g">Parker et al. (2016)</span>
        <span class="cite r">Boudreau (2010)</span>
      </div>`, narration:"Let's settle it, framework by framework. LinkedIn is a textbook multi-sided platform, powered by formidable network effects, direct, cross-side and data, with beautiful asset-light scale. But it's no flawless monopoly: cheap switching and a market sliced by function keep it contestable, and rivals like Xing survive in their regions. Its greatest strength, tight governance and trust, is also its ceiling: low openness, narrow APIs. And its grip on the labour market earns the scrutiny it gets. So the answer to our opening question? Powerful, but not unbeatable. The real lesson: owning the network and the data, not opening the doors, is the most durable moat of all."
  },

  /* CLOSE — no references scene; the full source list is provided separately */
  { no:"✦", q:true, kick:"The end",
    html:`<div class="bigq">Thank you for <em>watching</em>.</div>
      <div class="qsub">Powerful, but not unbeatable.</div>`,
    narration:"Powerful, but not unbeatable. Thanks for watching." }
];
