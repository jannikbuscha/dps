// The full scene list, in playback order, built to play as a VIDEO.
//
// This file holds only the VISUALS: each scene's markup and structural flags.
// The spoken text (voiceover / captions, and the per-step reveal timing) lives
// in script.js, matched to each scene by its `id`. Edit words there, layout here.
//
// Rhythm: it opens on Lena (who she is, what she wants), then a big centered
// QUESTION poses each beat and a sparse content scene answers it with a large
// visual + minimal on-screen text. The source rail (.src) stays on screen the
// whole time. The recurring "Lena" chapters (story:true) are interleaved. There
// is no references scene, the full source list is provided separately; the
// video closes with a thank-you.
//
// Scene fields:
//   id     unique key into script.js (required)
//   no     short on-screen/debug tag; NOT unique ("Q" and "✦" repeat)
//   kick   the "now playing" label shown under the controls
//   q      true → a full-frame question interstitial (.qscene)
//   story  true → a two-column "Lena" chapter (.storyscene)
//   html   the scene markup

// Base URL for runtime asset paths (so /images/… and the SVG logos resolve
// under the GitHub Pages "/dps/" base as well as "/" in dev). Vite inlines
// import.meta.env.BASE_URL.
const B = import.meta.env.BASE_URL;

// The square LinkedIn "bug" logo, used as the price-setter hub in the
// "many sides" scene (linkedin_small.svg).
const LOGO = `<img class="hublogo" src="${B}linkedin_small.svg" alt="LinkedIn">`;

export const scenes = [

  /* ============ ACT 1, THE SETUP ============ */

  /* 0 - MEET LENA: who she is + what she wants (to connect), not on LinkedIn yet */
  { id:"meet-lena", no:"00", kick:"Meet Lena",
    html:`
      <div class="lena-hero">
        <img class="lenaface r" src="${B}images/lena.webp" alt="Lena Vogel">
        <div class="lenaname r" style="--d:.12s">Lena Vogel</div>
        <div class="lenarole r" style="--d:.18s">Product Designer · Munich</div>
        <div class="lenawhy r" style="--d:.26s">Wants to <b>connect with people</b> in her field.</div>
        <div class="taglist r" style="--d:.34s">
          <span class="mpill on"><i class="ico ico-check" aria-hidden="true"></i> Happily employed</span>
          <span class="mpill off"><i class="ico ico-x" aria-hidden="true"></i> Not job-hunting</span>
        </div>
      </div>` },

  /* ENTER LINKEDIN: the scale answer (stats), revealed stat-by-stat */
  { id:"enter", no:"enter", kick:"The hook",
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
        <span class="cite">Microsoft Corporation (2025)</span>
      </div>` },

  { id:"q-many-sides", no:"Q", q:true, kick:"Question",
    html:`<div class="bigq r">What makes LinkedIn a <em>platform</em>?</div>` },

  /* 3, MULTI-SIDED MARKET + ECOSYSTEM (merged) */
  { id:"multi-sided", no:"03", kick:"Multi-sided platform", html:`
      <h2 class="h r" style="--d:.1s">A <em>multi-sided</em> platform</h2>
      <div class="net">
        <svg class="netsvg">
        </svg>
        <div class="hubcore pswhite nr" style="--d:.3s">${LOGO}<div class="hs">REFEREE · ARCHITECT</div></div>
        <div class="node nr" style="--d:.5s; left:16%; top:24%"><img class="dot" src="${B}images/lena.jpg" alt=""><div class="nl">Members</div><div class="ns">free · like Lena</div></div>
        <div class="node money nr" style="--d:.62s; left:84%; top:24%"><img class="dot" src="${B}images/marco.jpg" alt=""><div class="nl">Recruiters</div><div class="ns">they pay <i class="ico ico-coin" aria-hidden="true"></i> · like Marco</div></div>
        <div class="node money nr" style="--d:.74s; left:86%; top:74%"><img class="dot" src="${B}images/sara.jpg" alt=""><div class="nl">Advertisers</div><div class="ns">they pay <i class="ico ico-coin" aria-hidden="true"></i> · a brand</div></div>
        <div class="node nr" data-stroke="#7ab83b" style="--d:.86s; left:14%; top:74%"><img class="dot" src="${B}images/tom.jpg" alt=""><div class="nl">Developers &amp; partners</div><div class="ns">build on top</div></div>
      </div>
      <div class="src">
        <span class="cite">Rochet &amp; Tirole (2003)</span>
        <span class="cite g">Hagiu &amp; Wright (2015)</span>
        <span class="cite">Armstrong (2006)</span>
        <span class="cite">Jacobides et al. (2018)</span>
        <span class="cite g">Gawer &amp; Cusumano (2014)</span>
      </div>`
  },

  /* ============ ACT 2, THE MACHINE ============ */

  { id:"q-grow", no:"Q", q:true, kick:"Question",
    html:`<div class="bigq r">What makes it <em>grow</em> on its own?</div>` },

  /* 4, NETWORK EFFECTS engine */
  { id:"network-effects", no:"04", kick:"Network effects", html:`
      <h2 class="h r" style="--d:.1s">The engine: <span class="blue">network effects</span></h2>
      <div class="panes">
        <div class="pane r" style="--d:.24s"><h4>Direct</h4><p><b>member <i class="ico ico-swap" aria-hidden="true"></i> member</b> · every join makes it more useful</p></div>
        <div class="pane gold r" style="--d:.36s"><h4>Cross-side</h4><p><b>members <i class="ico ico-swap" aria-hidden="true"></i> recruiters</b> · each side pulls the other</p></div>
        <div class="pane cyan r" style="--d:.48s"><h4>Data</h4><p>clicks <i class="ico ico-arrow" aria-hidden="true"></i> better matching <i class="ico ico-arrow" aria-hidden="true"></i> more data</p></div>
        <div class="pane rose r" style="--d:.6s"><h4><i class="ico ico-warn" aria-hidden="true"></i> The dark side</h4><p>spam &amp; fatigue can <b>erode value</b></p></div>
      </div>
      <div class="src">
        <span class="cite">Katz &amp; Shapiro (1985)</span>
        <span class="cite g">Eisenmann et al. (2006)</span>
      </div>`
  },

  { id:"q-free", no:"Q", q:true, kick:"Question",
    html:`<div class="bigq r">Why is it almost <em>free</em> to grow?</div>` },

  /* 5, INTERMEDIARY + SCALE */
  { id:"matchmaker", no:"05", kick:"Frictionless scale", html:`
      <h2 class="h r" style="--d:.1s">Matchmaker at <em>near-zero cost</em></h2>
      <div class="panes">
        <div class="pane r" style="--d:.22s"><h4>The intermediary</h4>
          <p>an <b>intermediary</b> that collapses search costs in the job market</p>
          <div class="flowstrip" style="margin-top:1.4cqmin"><div class="step"><span class="t">Recruiter</span></div><span class="arrow"><i class="ico ico-swap" aria-hidden="true"></i></span><div class="step"><img class="steplogo" src="${B}linkedin.svg" alt="LinkedIn"></div><span class="arrow"><i class="ico ico-swap" aria-hidden="true"></i></span><div class="step"><span class="t">Hidden talent</span></div></div>
        </div>
        <div class="pane gold r" style="--d:.36s"><h4>Scalability</h4>
          <p><b>asset-light</b> · just software + data, the next member costs ~nothing</p>
          <div class="bars" style="margin-top:1.4cqmin; max-width:none; width:100%">
            <div class="barrow"><div class="bl" style="width:22cqmin; font-size:1.6cqmin">Platform cost / user</div><div class="track"><div class="fill" style="background:#7ab83b" data-w="9"></div></div></div>
            <div class="barrow"><div class="bl" style="width:22cqmin; font-size:1.6cqmin">Old "pipeline" cost</div><div class="track"><div class="fill" style="background:#ca7406" data-w="82"></div></div></div>
          </div>
        </div>
      </div>
      <div class="src">
        <span class="cite">Van Alstyne et al. (2016)</span>
        <span class="cite g">Hagiu &amp; Wright (2015)</span>
      </div>`
  },

  /* ✦ LENA · CHAPTER 1, the match finds her (after the matchmaker scene) */
  { id:"lena-match", no:"✦", kick:"Lena · the match finds her", story:true,
    html:`
      <div class="storygrid">
        <div class="story-copy">
          <h2 class="h">The opportunity<br><em>finds her.</em></h2>
          <p>Still not searching, but a recruiter's <b>three filters</b> surface her in seconds.</p>
        </div>
        <div>
          <div class="mock">
            <span class="mtag">Recruiter search · Berlin · 600 km away</span>
            <div class="mfilters">
              <span class="fchip">Role · Designer</span>
              <span class="fchip">Location · Munich</span>
              <span class="fchip">Skill · Design systems</span>
            </div>
            <div class="mnote" style="color:var(--accent)"><span class="mdot" style="background:var(--accent)"></span> 1 strong match, surfaced in seconds</div>
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
      </div>` },

  { id:"q-exchange", no:"Q", q:true, kick:"Question",
    html:`<div class="bigq r">What exactly are people <em>exchanging</em>?</div>` },

  /* 6, VALUE CO-CREATION — members · complementors · platform */
  { id:"value-unit", no:"06", kick:"Value co-creation",
    html:`
      <h2 class="h r" style="--d:.1s">Value, <em>co-created</em></h2>
      <div class="cocreate">
        <div class="cocard members r" style="--d:.42s">
          <div class="cohead">Members</div>
          <div class="cosub">free · generate supply</div>
          <div class="coitems">
            <span>Profiles &amp; identity</span>
            <span>Connections</span>
            <span>Posts &amp; updates</span>
            <span>Their attention &amp; data</span>
          </div>
        </div>
        <div class="cocard platform r" style="--d:.24s">
          <div class="cohead">The platform</div>
          <div class="cosub">runs the core interaction</div>
          <div class="coitems">
            <span>Infrastructure &amp; support</span>
            <span>Pull · the free network</span>
            <span>Facilitate · tools + algorithm</span>
            <span>Match · person <i class="ico ico-swap" aria-hidden="true"></i> opportunity</span>
          </div>
          <div class="conote">…and takes a cut</div>
        </div>
        <div class="cocard compl r" style="--d:.6s">
          <div class="cohead">Complementors</div>
          <div class="cosub">paid · generate demand</div>
          <div class="coitems">
            <span>Recruiters pay to reach talent</span>
            <span>Advertisers bid in the ad auction</span>
            <span>Developers &amp; creators build on top</span>
          </div>
        </div>
      </div>
      <div class="src">
        <span class="cite g">Parker et al. (2016)</span>
      </div>`
  },

  { id:"q-from-zero", no:"Q", q:true, kick:"Question",
    html:`<div class="bigq r">How do you start a network <em>from zero</em>?</div>` },

  /* 8, GROWTH / chicken-and-egg */
  { id:"cold-start", no:"08", kick:"The cold start", html:`
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
        <span class="cite">Microsoft Corporation (2016)</span>
        <span class="cite">Hoffman &amp; Yeh (2018)</span>
      </div>`
  },

  { id:"q-money", no:"Q", q:true, kick:"Question",
    html:`<div class="bigq r">Where does the <em>money</em> come from?</div>` },

  /* 9, BUSINESS MODEL, one bold proportional split bar */
  { id:"revenue", no:"09", kick:"The money", html:`
      <h2 class="h r" style="--d:.1s">Three revenue <em>engines</em></h2>
      <div class="splitbar r" style="--d:.24s">
        <div class="sb-seg" style="flex:60; --c:#639a00"><div class="sbv">60%</div><div class="sbn">Talent Solutions</div><div class="sbd">the recruiting suite</div></div>
        <div class="sb-seg" style="flex:25; --c:#ca7406"><div class="sbv">25%</div><div class="sbn">Marketing</div><div class="sbd">ad auction</div></div>
        <div class="sb-seg" style="flex:15; --c:#7ab83b"><div class="sbv">15%</div><div class="sbn">Premium &amp; others</div><div class="sbd">individuals pay</div></div>
      </div>
      <div class="pricing">
        <div class="pricing-lbl">The pricing strategy</div>
        <div class="pricing-txt">Freemium + cross-subsidisation · free users add value, <b>the money side pays.</b></div>
      </div>
      <div class="src">
        <span class="cite g">Osterwalder &amp; Pigneur (2010)</span>
        <span class="cite">Microsoft Corporation (2025)</span>
        <span class="cite">TechCrunch (2016)</span>
        <span class="cite">LeadCRM (n.d.)</span>
      </div>`
  },

  /* ✦ LENA · CHAPTER 2, someone pays to reach her (after the revenue scene) */
  { id:"lena-pays", no:"✦", kick:"Lena · someone pays to reach her", story:true,
    html:`
      <div class="storygrid">
        <div class="story-copy">
          <h2 class="h">Someone <em>pays</em><br>to reach her.</h2>
          <p>Not connected, so Marco's company <b>paid LinkedIn</b> to message her.</p>
          <p>Lena reads it free. The platform got <b>paid to put it there.</b></p>
        </div>
        <div class="mock">
          <span class="mtag" style="color:var(--gold)">Sponsored · InMail</span>
          <div class="mhead"><img class="mava" src="${B}images/marco.jpg" alt="Marco Reuter"><div><div class="mname" style="font-size:2.1cqmin">Marco Reuter</div><div class="msub">Senior Recruiter · Studio Berlin</div></div></div>
          <div class="mbody">"Hi Lena, we're hiring a <b>Lead Product Designer</b>, and your design-systems work is exactly it. Open to a chat?"</div>
          <div class="mnote"><span class="mdot"></span> Paid: InMail credit + a Recruiter licence (~thousands / year)</div>
        </div>
      </div>` },

  /* ============ ACT 3, THE CRACK & VERDICT ============ */

  { id:"q-unbeatable", no:"Q", q:true, kick:"Question",
    html:`<div class="bigq r">Is LinkedIn really <em>winner-take-all</em>?</div>` },

  /* 10, WINNER TAKE ALL? */
  { id:"crack", no:"10", kick:"The crack", html:`
      <h2 class="h r" style="--d:.1s">Winner-take-all? <em>Not quite.</em></h2>
      <div class="wta">
        <div class="wtac y r" style="--d:.3s"><div class="wtaq">Strong indirect network effects?</div><div class="wtaicon"><i class="ico ico-check" aria-hidden="true"></i></div><div class="wtav tips">YES</div><div class="wtad">each side pulls in the others</div></div>
        <div class="wtac n r" style="--d:.44s"><div class="wtaq">High multi-homing costs?</div><div class="wtaicon"><i class="ico ico-x" aria-hidden="true"></i></div><div class="wtav resists">NO</div><div class="wtad">rivals run side by side, cheaply</div></div>
        <div class="wtac m r" style="--d:.58s"><div class="wtaq">Low demand for niche features?</div><div class="wtaicon"><i class="ico ico-approx" aria-hidden="true"></i></div><div class="wtav mixed">NOT QUITE</div><div class="wtad">splits by function &amp; region</div></div>
      </div>
      <div class="rivals r" style="--d:.72s">
        <span class="pill">Still contested:</span>
        <span class="rival">Indeed · jobs</span>
        <span class="rival">Glassdoor · reviews</span>
        <span class="rival">Xing · DACH</span>
      </div>
      <div class="src">
        <span class="cite">Eisenmann et al. (2006)</span>
        <span class="cite r">Eisenmann et al. (2011)</span>
        <span class="cite g">Caillaud &amp; Jullien (2003)</span>
      </div>`
  },

  { id:"q-moat", no:"Q", q:true, kick:"Question",
    html:`<div class="bigq r">So what is its real <em>moat</em>?</div>` },

  /* 11, GOVERNANCE */
  { id:"control", no:"11", kick:"Control is the moat", html:`
      <h2 class="h r" style="--d:.1s">Built for <em>control</em>, not openness</h2>
      <div class="dials">
        <div class="dial r" style="--d:.28s"><div class="dt"><b>Feed algorithm</b><span>opaque</span></div><div class="meter"><i data-w="92"></i></div></div>
        <div class="dial r" style="--d:.38s"><div class="dt"><b>Terms &amp; moderation</b><span>strict</span></div><div class="meter"><i data-w="84"></i></div></div>
        <div class="dial r" style="--d:.48s"><div class="dt"><b>Identity</b><span>real names</span></div><div class="meter"><i data-w="70"></i></div></div>
        <div class="dial r" style="--d:.58s"><div class="dt"><b>Anti-scraping</b><span>enforced</span></div><div class="meter"><i data-w="88"></i></div></div>
      </div>
      <div class="casenote r" style="--d:.72s"><i class="ico ico-ban" aria-hidden="true"></i> <b>hiQ Labs v. LinkedIn:</b> a startup sued to keep scraping public profiles, and lost. The data stays LinkedIn's.</div>
      <div class="src">
        <span class="cite">Tiwana et al. (2010)</span>
        <span class="cite g">Boudreau (2010)</span>
      </div>`
  },

  { id:"q-guard-doors", no:"Q", q:true, kick:"Question",
    html:`<div class="bigq r">How tightly does it <em>guard the doors</em>?</div>` },

  /* 12, BOUNDARY RESOURCES */
  { id:"apis", no:"12", kick:"The gated doors", html:`
      <h2 class="h r" style="--d:.1s"><span class="blue">APIs</span>: the <em>boundary resource</em>, open a crack</h2>
      <div class="pyr">
        <div class="tier t1 r" style="--d:.3s"><div class="tn">Open · any developer</div><div class="ti">Sign-In with LinkedIn · Share API</div><div class="tx">log users in with their LinkedIn identity · post updates to the feed</div></div>
        <div class="tier t2 r" style="--d:.45s"><div class="tn">Partner · apply + review</div><div class="ti">Marketing API · Jobs / ATS</div><div class="tx">build &amp; automate ad campaigns · sync job posts and applicants</div></div>
        <div class="tier t3 r" style="--d:.6s"><div class="tn">Partner · invite only</div><div class="ti">Talent · Learning · Sales Navigator</div><div class="tx">deep recruiting, training &amp; sales-prospecting data</div></div>
      </div>
      <div class="stamp r" style="--d:.8s"><i class="ico ico-ban" aria-hidden="true"></i> NO BULK DATA</div>
      <div class="src">
        <span class="cite g">Ghazawneh &amp; Henfridsson (2013)</span>
        <span class="cite">Eaton et al. (2015)</span>
        <span class="cite">Microsoft (n.d.)</span>
      </div>`
  },

  { id:"q-cost", no:"Q", q:true, kick:"Question",
    html:`<div class="bigq r">What does all that control <em>cost us</em>?</div>` },

  /* 13, THE ETHICAL COST */
  { id:"rewired", no:"13", kick:"The cost", html:`
      <h2 class="h r" style="--d:.1s">It <em>rewired</em> work</h2>
      <div class="ba">
        <div class="bacol old"><h4>Before</h4>
          <div class="li">Post a job &amp; wait</div>
          <div class="li">Paper résumé</div>
          <div class="li">Headhunter networks</div>
        </div>
        <div class="bagrp">
          <div class="baarrow"><i class="ico ico-arrow" aria-hidden="true"></i></div>
          <div class="bacol new"><h4>After LinkedIn</h4>
            <div class="li">Hunt <b>passive</b> candidates</div>
            <div class="li">A living, public profile</div>
            <div class="li">Self-serve search</div>
          </div>
        </div>
      </div>
      <div class="warnbox r" style="--d:.6s"><b>One private gatekeeper</b> decides who gets seen, bias, surveillance, invisibility off-platform.</div>
      <div class="src">
        <span class="cite">Gawer &amp; Cusumano (2014)</span>
      </div>`
  },

  /* ✦ LENA · CHAPTER 3, she got the job (after the cost scene) */
  { id:"lena-job", no:"✦", kick:"Lena · she got the job", story:true,
    html:`
      <div class="storygrid">
        <div class="story-copy">
          <h2 class="h">Lena got<br>the <span class="blue">job.</span></h2>
          <p><b>Lead Product Designer</b>, a real step up.</p>
          <p>But she never applied. <b>Who owned that match?</b></p>
        </div>
        <div class="mock">
          <span class="mtag" style="color:var(--cyan)">Offer accepted</span>
          <div class="mhead"><img class="mava g" src="${B}images/lena.jpg" alt="Lena Vogel"><div><div class="mname">Lead Product Designer</div><div class="msub">Studio Berlin · starts in 6 weeks</div></div></div>
          <div class="mline"><span class="mpill on">Hired via LinkedIn</span><span class="mpill gold">Ranked by the algorithm</span></div>
          <div class="mnote"><span class="mdot"></span> Lena won. So did LinkedIn, it owned every step.</div>
        </div>
      </div>` },

  /* CLOSE — thank-you + the full APA reference list (shown, never spoken) */
  { id:"the-end", no:"✦", q:true, kick:"The end",
    html:`<div class="bigq endq">Thank you for <em>watching</em>.</div>
      <div class="qsub">Powerful, but not winner-take-all.</div>
      <div class="sources r" style="--d:.3s">
        <div class="sources-h">Sources</div>
        <div class="sources-list">
          <span><b>Armstrong, M.</b> (2006). Competition in two-sided markets. <em>The RAND Journal of Economics, 37</em>(3), 668–691.</span>
          <span><b>Boudreau, K.</b> (2010). Open platform strategies and innovation: Granting access vs. devolving control. <em>Management Science, 56</em>(10), 1849–1872.</span>
          <span><b>Caillaud, B., &amp; Jullien, B.</b> (2003). Chicken &amp; egg: Competition among intermediation service providers. <em>The RAND Journal of Economics, 34</em>(2), 309–328.</span>
          <span><b>DataReportal.</b> (2026). <em>LinkedIn statistics and trends.</em></span>
          <span><b>Eaton, B., Elaluf-Calderwood, S., Sørensen, C., &amp; Yoo, Y.</b> (2015). Distributed tuning of boundary resources: The case of Apple's iOS service system. <em>MIS Quarterly, 39</em>(1), 217–243.</span>
          <span><b>Eisenmann, T., Parker, G., &amp; Van Alstyne, M. W.</b> (2006). Strategies for two-sided markets. <em>Harvard Business Review, 84</em>(10), 92–101.</span>
          <span><b>Eisenmann, T., Parker, G., &amp; Van Alstyne, M. W.</b> (2011). Platform envelopment. <em>Strategic Management Journal, 32</em>(12), 1270–1285.</span>
          <span><b>Gawer, A., &amp; Cusumano, M. A.</b> (2014). Industry platforms and ecosystem innovation. <em>Journal of Product Innovation Management, 31</em>(3), 417–433.</span>
          <span><b>Ghazawneh, A., &amp; Henfridsson, O.</b> (2013). Balancing platform control and external contribution in third-party development: The boundary resources model. <em>Information Systems Journal, 23</em>(2), 173–192.</span>
          <span><b>Hagiu, A., &amp; Wright, J.</b> (2015). Multi-sided platforms. <em>International Journal of Industrial Organization, 43</em>, 162–174.</span>
          <span><b>Hoffman, R., &amp; Yeh, C.</b> (2018). <em>Blitzscaling: The lightning-fast path to building massively valuable companies.</em> Currency.</span>
          <span><b>Jacobides, M. G., Cennamo, C., &amp; Gawer, A.</b> (2018). Towards a theory of ecosystems. <em>Strategic Management Journal, 39</em>(8), 2255–2276.</span>
          <span><b>Katz, M. L., &amp; Shapiro, C.</b> (1985). Network externalities, competition, and compatibility. <em>The American Economic Review, 75</em>(3), 424–440.</span>
          <span><b>LeadCRM.</b> (n.d.). <em>How does LinkedIn make money?</em></span>
          <span><b>Microsoft.</b> (n.d.). <em>LinkedIn API documentation.</em> Microsoft Learn.</span>
          <span><b>Microsoft Corporation.</b> (2016). <em>Current report (Form 8-K).</em> U.S. Securities and Exchange Commission.</span>
          <span><b>Microsoft Corporation.</b> (2025). <em>Annual report (Form 10-K).</em> U.S. Securities and Exchange Commission.</span>
          <span><b>Osterwalder, A., &amp; Pigneur, Y.</b> (2010). <em>Business model generation: A handbook for visionaries, game changers, and challengers.</em> Wiley.</span>
          <span><b>Parker, G. G., Van Alstyne, M. W., &amp; Choudary, S. P.</b> (2016). <em>Platform revolution: How networked markets are transforming the economy and how to make them work for you.</em> W. W. Norton.</span>
          <span><b>Rochet, J.-C., &amp; Tirole, J.</b> (2003). Platform competition in two-sided markets. <em>Journal of the European Economic Association, 1</em>(4), 990–1029.</span>
          <span><b>TechCrunch.</b> (2016). <em>Microsoft to acquire LinkedIn for $26.2 billion.</em></span>
          <span><b>Tiwana, A., Konsynski, B., &amp; Bush, A. A.</b> (2010). Platform evolution: Coevolution of platform architecture, governance, and environmental dynamics. <em>Information Systems Research, 21</em>(4), 675–687.</span>
          <span><b>Van Alstyne, M. W., Parker, G. G., &amp; Choudary, S. P.</b> (2016). Pipelines, platforms, and the new rules of strategy. <em>Harvard Business Review, 94</em>(4), 54–62.</span>
        </div>
      </div>` }
];
