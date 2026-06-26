export const scenes = [

  /* ============ ACT 1, THE SETUP ============ */

  /* 1 - INTRO: meet Lena + what LinkedIn is, at a glance (visual, scale stats) */
  {
    no:"01", kick:"The hook", thread:"So, what exactly is LinkedIn?",
    steps:[
      {sel:'.introlena', say:"Meet Lena, a product designer in Munich. Happily employed, and not looking for a job. One evening she tidies up her LinkedIn profile: a sharper headline, a project or two, and thinks nothing of it."},
      {sel:'.bridge', say:"That tiny, ordinary act just placed her among more than a billion people on the same platform. To see why that matters, we first have to understand it."},
      {sel:'.enterblock', say:"This is LinkedIn: the world's largest professional network. Over one point three billion members, across two hundred countries, and around seventeen point eight billion dollars in revenue last year, growing since 2003. So, what exactly is LinkedIn?"}
    ],
    html:`
      <div class="introlena">
        <img class="mava g introface" src="/images/lena.jpg" alt="Lena Vogel">
        <div class="introtags">
          <div class="introname">Lena Vogel</div>
          <div class="taglist">
            <span class="mpill"><i class="ico ico-work" aria-hidden="true"></i> Product Designer</span>
            <span class="mpill"><i class="ico ico-pin" aria-hidden="true"></i> Munich</span>
            <span class="mpill on"><i class="ico ico-check" aria-hidden="true"></i> Happily employed</span>
            <span class="mpill off"><i class="ico ico-x" aria-hidden="true"></i> Not looking for a job</span>
          </div>
        </div>
      </div>
      <div class="bridge">She thinks nothing of it. <b>But she just stepped onto the world's biggest career platform.</b></div>
      <div class="enterblock">
        <h2 class="h">Enter <span class="blue">LinkedIn</span>.</h2>
        <div class="stats intro-stats">
          <div class="stat pop"><div class="v" data-count="1.3" data-suffix="B" data-dec="1">0</div><div class="k">members worldwide</div></div>
          <div class="stat pop"><div class="v c" data-count="200" data-suffix="+">0</div><div class="k">countries &amp; territories</div></div>
          <div class="stat pop"><div class="v g" data-count="17.8" data-prefix="$" data-suffix="B" data-dec="1">0</div><div class="k">revenue, FY2025</div></div>
          <div class="stat pop"><div class="v i" data-count="2003" data-plain="1">0</div><div class="k">launched · 22+ yrs ago</div></div>
        </div>
      </div>
      <div class="src">
        <span class="cite">DataReportal (2026)</span>
        <span class="cite">Microsoft 10-K, FY2025</span>
      </div>`,
    narration:"Meet Lena, a product designer in Munich. Happily employed, and not looking for a job. One evening she tidies up her LinkedIn profile: a sharper headline, a project or two, and thinks nothing of it. That tiny, ordinary act just placed her among more than a billion people on the same platform. To see why that matters, we first have to understand it. This is LinkedIn: the world's largest professional network. Over one point three billion members, across two hundred countries, and around seventeen point eight billion dollars in revenue last year, growing since 2003. So, what exactly is LinkedIn?"
  }, /* 3, MULTI-SIDED MARKET (simplified to 3 key sides on screen) */
  {
    no:"03", kick:"Multi-sided market", thread:"How does one platform serve so many sides?", html:`
      <div class="beat r" style="--d:.05s">How it's wired · 1 of 6</div>
      <h2 class="h r" style="--d:.15s">One platform, <em>many sides</em></h2>
      <p class="lead r" style="--d:.18s">A multi-sided platform connects distinct groups and gets the <b>price structure</b> right between them, subsidising one side, charging the other.</p>
      <div class="net">
        <svg class="netsvg">
        </svg>
        <div class="hubcore nr" style="--d:.3s"><div class="hl">Linked<u>In</u></div><div class="hs">PRICE-SETTER</div></div>
        <div class="node nr" style="--d:.5s; left:16%; top:24%"><img class="dot" src="/images/lena.jpg" alt=""><div class="nl">Members</div><div class="ns">free · like Lena</div></div>
        <div class="node money nr" style="--d:.62s; left:84%; top:24%"><img class="dot" src="/images/marco.jpg" alt=""><div class="nl">Recruiters</div><div class="ns">they pay <i class="ico ico-coin" aria-hidden="true"></i> · like Marco</div></div>
        <div class="node money nr" style="--d:.74s; left:86%; top:74%"><img class="dot" src="/images/sara.jpg" alt=""><div class="nl">Advertisers</div><div class="ns">they pay <i class="ico ico-coin" aria-hidden="true"></i> · a brand</div></div>
        <div class="node nr" data-stroke="#7ab83b" style="--d:.86s; left:14%; top:74%"><img class="dot" src="/images/tom.jpg" alt=""><div class="nl">Developers</div><div class="ns">build on top · an app maker</div></div>
      </div>
      <div class="src">
        <span class="lbl">Frameworks <i class="ico ico-chevron" aria-hidden="true"></i></span>
        <span class="cite">Rochet &amp; Tirole (2003)</span>
        <span class="cite g">Hagiu &amp; Wright (2015)</span>
        <span class="cite">Armstrong (2006)</span>
      </div>`, narration:"So what is it? At its core, LinkedIn is a multi-sided platform. Rochet and Tirole describe that as a business that connects distinct groups and gets the pricing right between them. LinkedIn juggles four at once: members, recruiters, advertisers, and developers, and it prices them shamelessly unequally. Members glide in almost free, while recruiters and advertisers foot the bill. And as Hagiu and Wright note, LinkedIn never owns the deal itself; it just makes the right people findable. Which raises the obvious question: what makes all those sides keep growing?"
  }, /* ============ ACT 2, THE MACHINE ============ */

  /* 4, NETWORK EFFECTS engine */
  {
    no:"04", kick:"Network effects", thread:"What makes it grow on its own?", html:`
      <div class="beat gold r" style="--d:.05s">Act 2 · The machine, 2 of 6</div>
      <h2 class="h r" style="--d:.15s">The engine: <span class="blue">network effects</span></h2>
      <div class="panes">
        <div class="pane r" style="--d:.24s"><h4>Direct</h4><p><b>Member <i class="ico ico-swap" aria-hidden="true"></i> member.</b> Every new professional makes the network more useful to everyone already on it.</p></div>
        <div class="pane gold r" style="--d:.36s"><h4>Cross-side</h4><p><b>Members <i class="ico ico-swap" aria-hidden="true"></i> recruiters.</b> More members pull in recruiters; more recruiters and jobs pull in members. They lift each other.</p></div>
        <div class="pane cyan r" style="--d:.48s"><h4>Data effect</h4><p>Every click <b>trains better matching</b> <i class="ico ico-arrow" aria-hidden="true"></i> more users <i class="ico ico-arrow" aria-hidden="true"></i> more data. A self-feeding flywheel.</p></div>
        <div class="pane rose r" style="--d:.6s"><h4><i class="ico ico-warn" aria-hidden="true"></i> The dark side</h4><p>Spam, engagement-bait and recruiter fatigue can <b>erode value as the crowd grows.</b></p></div>
      </div>
      <div class="src">
        <span class="lbl">Frameworks <i class="ico ico-chevron" aria-hidden="true"></i></span>
        <span class="cite">Katz &amp; Shapiro (1985)</span>
        <span class="cite g">Eisenmann, Parker &amp; Van Alstyne (2006)</span>
      </div>`, narration:"One answer: network effects, the engine under the whole thing. Katz and Shapiro split it in two. Direct: every new member makes the network more useful for everyone already on it. Cross-side: more members lure more recruiters, and more recruiters lure more members. LinkedIn has both, plus a sneaky third, data network effects: every click trains its matching, pulling in more people, making more data. A flywheel that spins itself. But there's a dark side, spam and recruiter fatigue. Past a point, the crowd can make it worse. Still, two forces make this engine almost impossible to stop."
  }, /* 5, INTERMEDIARY + SCALE */
  {
    no:"05", kick:"Frictionless scale", thread:"Why is it almost free to grow?", html:`
      <div class="beat gold r" style="--d:.05s">The machine · 3 of 6</div>
      <h2 class="h r" style="--d:.15s">Matchmaker at <em>near-zero cost</em></h2>
      <div class="panes">
        <div class="pane r" style="--d:.22s"><h4>The matchmaker</h4>
          <p>LinkedIn collapses <b>search costs</b> in the job market, linking a recruiter in Munich to a <b>passive</b> candidate in São Paulo who isn't even looking.</p>
          <div class="flowstrip" style="margin-top:1.4cqmin"><div class="step"><span class="t">Recruiter</span></div><span class="arrow"><i class="ico ico-swap" aria-hidden="true"></i></span><div class="step"><span class="n">LinkedIn</span></div><span class="arrow"><i class="ico ico-swap" aria-hidden="true"></i></span><div class="step"><span class="t">Hidden talent</span></div></div>
        </div>
        <div class="pane gold r" style="--d:.36s"><h4>Asset-light</h4>
          <p>It's just <b>software + data.</b> The ten-millionth member costs almost nothing, yet earns money many times over. No inventory, no factories.</p>
          <div class="bars" style="margin-top:1.4cqmin; max-width:none">
            <div class="barrow"><div class="bl" style="width:22cqmin; font-size:1.6cqmin">Platform cost / user</div><div class="track"><div class="fill" style="background:#7ab83b" data-w="9"></div></div></div>
            <div class="barrow"><div class="bl" style="width:22cqmin; font-size:1.6cqmin">Old "pipeline" cost</div><div class="track"><div class="fill" style="background:#ca7406" data-w="82"></div></div></div>
          </div>
        </div>
      </div>
      <div class="src">
        <span class="lbl">Frameworks <i class="ico ico-chevron" aria-hidden="true"></i></span>
        <span class="cite">Van Alstyne, Parker &amp; Choudary (2016, HBR)</span>
        <span class="cite g">Hagiu &amp; Wright (2015)</span>
      </div>`, narration:"Why almost unstoppable? Two reasons. First, LinkedIn is a frictionless matchmaker, it crushes the cost of searching the job market, quietly linking a recruiter in Munich to a perfect candidate in São Paulo who isn't even looking. Second, it's gloriously asset-light: basically software plus data, so the ten-millionth member costs almost nothing, yet can be sold to recruiters again and again. No warehouses, no factories, the textbook contrast between a platform and a pipeline. And that matchmaking isn't just theory. It's about to happen to Lena."
  }, /* 6, VALUE UNIT / core interaction (trimmed) */
  {
    no:"06", kick:"The value unit", thread:"What exactly are people exchanging?", html:`
      <div class="beat gold r" style="--d:.05s">The machine · 4 of 6</div>
      <h2 class="h r" style="--d:.15s">The <span class="blue">value unit</span> you create for free</h2>
      <p class="lead big r" style="--d:.16s">Every platform spins around a <b>core interaction</b>: a tiny <b>value unit</b> changes hands. On LinkedIn, <b>members make every one of them, for free.</b></p>
      <div class="seclbl r" style="--d:.26s"><span class="num">1</span> <b>Members create the value units</b>, at no cost</div>
      <div class="vstack r" style="--d:.34s">
        <div class="vcard"><div class="vt">The Profile</div><div class="vd">your identity</div></div>
        <div class="vcard"><div class="vt">The Connection</div><div class="vd">a graph edge</div></div>
        <div class="vcard"><div class="vt">The Job Post</div><div class="vd">demand</div></div>
        <div class="vcard"><div class="vt">The Update</div><div class="vd">attention</div></div>
      </div>
      <div class="seclbl g r" style="--d:.5s"><span class="num">2</span> <b>The platform runs the core interaction</b></div>
      <div class="pfm r" style="--d:.58s">
        <div class="pf"><div class="pn">PULL</div><div class="pt">Attract</div><div class="pp">free network + notifications</div></div>
        <div class="pfarrow"><i class="ico ico-arrow" aria-hidden="true"></i></div>
        <div class="pf"><div class="pn">FACILITATE</div><div class="pt">Equip</div><div class="pp">tools + the algorithm</div></div>
        <div class="pfarrow"><i class="ico ico-arrow" aria-hidden="true"></i></div>
        <div class="pf"><div class="pn">MATCH</div><div class="pt">Connect</div><div class="pp">right person <i class="ico ico-swap" aria-hidden="true"></i> opportunity</div></div>
      </div>
      <p class="lead r" style="--d:.72s; margin-top:1.8cqmin">Then in the feed, <b>you</b> supply the content free, and your attention is <b>sold to advertisers.</b></p>
      <div class="src">
        <span class="lbl">Framework <i class="ico ico-chevron" aria-hidden="true"></i></span>
        <span class="cite g">Parker, Van Alstyne &amp; Choudary, "Platform Revolution" (2016)</span>
      </div>`, narration:"What changed hands was tiny, and that's the point. Parker, Van Alstyne and Choudary say every platform spins around a core interaction and a value unit: the smallest nugget of value exchanged. On LinkedIn those are the profile, the connection, the job post, the update. And members create every one, for free. The platform hands you the tools and the algorithm, then matches you. You write the posts; the algorithm finds the audience; that attention is sold to advertisers. The value you make becomes the inventory LinkedIn rents out. Which means this story is bigger than one company."
  }, /* 7, ECOSYSTEM */
  {
    no:"07", kick:"The ecosystem", thread:"Who else lives off this platform?", html:`
      <div class="beat gold r" style="--d:.05s">The machine · 5 of 6</div>
      <h2 class="h r" style="--d:.15s">An <em>ecosystem</em>, not one company</h2>
      <p class="lead r" style="--d:.16s">A whole economy of <b>complementors</b> builds value around the platform. The owner plays <b>referee and architect</b>, and takes a cut.</p>
      <div class="net" style="height:38cqmin">
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
        <span class="lbl">Frameworks <i class="ico ico-chevron" aria-hidden="true"></i></span>
        <span class="cite">Jacobides, Cennamo &amp; Gawer (2018)</span>
        <span class="cite g">Gawer &amp; Cusumano (2014)</span>
      </div>`, narration:"Much bigger, because LinkedIn isn't really a company, it's an ecosystem. Jacobides describes ecosystems as loose crowds of complementors building value around a shared platform, with light central control. Picture everything orbiting LinkedIn: hiring-software vendors, ad agencies, course creators, data partners. And at the centre, the owner, a Microsoft company since 2016, plays referee and architect: setting rules, policing quality, skimming a cut of nearly everything. Which makes you wonder, how did a machine this self-reinforcing ever get started?"
  }, /* 8, GROWTH / chicken-and-egg */
  {
    no:"08", kick:"The cold start", thread:"How do you start a network from zero?", html:`
      <div class="beat gold r" style="--d:.05s">The machine · 6 of 6</div>
      <h2 class="h r" style="--d:.15s">Beating the <span class="blue">chicken-and-egg</span></h2>
      <p class="lead r" style="--d:.12s">No users without recruiters. No recruiters without users. LinkedIn's escape moves are now textbook.</p>
      <div class="tl">
        <div class="axis"></div>
        <div class="mile r" style="--d:.3s; left:9%"><div class="mlabel"><div class="yr">2003</div><div class="md">Launch · seed via address book</div></div><div class="pin"></div></div>
        <div class="mile alt g r" style="--d:.42s; left:24.8%"><div class="pin"></div><div class="mlabel"><div class="yr">2005</div><div class="md">Freemium · convert power users</div></div></div>
        <div class="mile r" style="--d:.54s; left:40.6%"><div class="mlabel"><div class="yr">2006</div><div class="md">"People You May Know" · viral loop</div></div><div class="pin"></div></div>
        <div class="mile alt g r" style="--d:.66s; left:56.4%"><div class="pin"></div><div class="mlabel"><div class="yr">2011</div><div class="md">IPO on NYSE</div></div></div>
        <div class="mile r" style="--d:.78s; left:72.2%"><div class="mlabel"><div class="yr">2016</div><div class="md">Microsoft buys it · <b>$26.2B</b></div></div><div class="pin"></div></div>
        <div class="mile alt g r" style="--d:.9s; left:88%"><div class="pin"></div><div class="mlabel"><div class="yr">2023+</div><div class="md">AI era · writing &amp; recruiting</div></div></div>
      </div>
      <div class="src">
        <span class="lbl">Sources <i class="ico ico-chevron" aria-hidden="true"></i></span>
        <span class="cite g">Caillaud &amp; Jullien (2003)</span>
        <span class="cite">Microsoft 8-K (June 2016)</span>
        <span class="cite">Hoffman &amp; Yeh, "Blitzscaling" (2018)</span>
      </div>`, narration:"Honestly, it almost didn't. Every network hits the same wall at birth, the chicken-and-egg problem Caillaud and Jullien describe: no users without recruiters, no recruiters without users. LinkedIn's escape moves are studied like chess openings: import your address book to seed connections, People You May Know for a viral loop, public profiles so Google ships free traffic, and from 2005, freemium to turn power users into payers. It worked, public in 2011, bought by Microsoft in 2016 for twenty-six-point-two billion dollars. Which leads straight to the obvious question: where does all that money come from?"
  }, /* 9, BUSINESS MODEL */
  {
    no:"09", kick:"The money", thread:"Where does the money actually come from?", html:`
      <div class="beat cyan r" style="--d:.05s">Follow the money</div>
      <h2 class="h r" style="--d:.15s">Three revenue <em>engines</em></h2>
      <div class="bars r" style="--d:.22s">
        <div class="barrow"><div class="bl">Talent Solutions<small>recruiting · the giant</small></div><div class="track"><div class="fill" style="background:#639a00" data-w="62"></div></div></div>
        <div class="barrow"><div class="bl">Marketing Solutions<small>ad auction</small></div><div class="track"><div class="fill" style="background:#ca7406" data-w="24"></div></div></div>
        <div class="barrow"><div class="bl">Premium + Learning<small>subscriptions</small></div><div class="track"><div class="fill" style="background:#7ab83b" data-w="14"></div></div></div>
      </div>
      <div class="bmc r" style="--d:.5s">
        <div class="bcell"><h5>Key resource</h5><ul><li>The professional graph</li><li>Member data + algorithm</li></ul></div>
        <div class="bcell"><h5>Who pays</h5><ul><li>Recruiters &amp; firms</li><li>Advertisers</li><li>Premium users</li></ul></div>
        <div class="bcell"><h5>Who's subsidised</h5><ul><li>Everyday members</li><li>(you, scrolling free)</li></ul></div>
      </div>
      <div class="src">
        <span class="lbl">Frameworks <i class="ico ico-chevron" aria-hidden="true"></i></span>
        <span class="cite g">Osterwalder &amp; Pigneur, Business Model Canvas (2010)</span>
        <span class="cite">Microsoft / TechCrunch (2016) · FY25</span>
      </div>`, narration:"Follow the money, and three engines roar into view. The biggest by far is Talent Solutions, the recruiting tools, which alone drove around two-thirds of revenue back in 2015. Next, Marketing Solutions, selling ads through an auction. And third, what individuals pay for directly: Premium, Sales Navigator, Learning. Underneath all three sits the same crown jewel, the professional graph and its data. Classic multi-sided pricing: pamper the members, bill the money side. And that money side is, right now, about to land in Lena's inbox."
  }, /* ============ ACT 3, THE CRACK & VERDICT ============ */

  /* 10, WINNER TAKE ALL? the payoff of the red thread */
  {
    no:"10", kick:"The crack", thread:"Is LinkedIn really unbeatable?", html:`
      <div class="beat rose r" style="--d:.05s">Act 3 · The crack</div>
      <h2 class="h r" style="--d:.12s">Unbeatable? <em>Not quite.</em></h2>
      <p class="lead r" style="--d:.16s">A market tips to one winner only when <b>three conditions</b> all hold. LinkedIn nails just one.</p>
      <div class="checks">
        <div class="chk r" style="--d:.3s"><div class="badge y"><i class="ico ico-check" aria-hidden="true"></i></div><div class="grow"><div class="ct">Strong network effects</div><div class="cd">a global professional graph, deep cross-side &amp; data effects</div></div><div class="verdict">TIPS <i class="ico ico-arrow" aria-hidden="true"></i></div></div>
        <div class="chk r" style="--d:.42s"><div class="badge n"><i class="ico ico-x" aria-hidden="true"></i></div><div class="grow"><div class="ct">Costly to use rivals too</div><div class="cd">but it's <b>cheap</b>, recruiters use LinkedIn <i>and</i> Indeed <i>and</i> Glassdoor</div></div><div class="verdict">RESISTS</div></div>
        <div class="chk r" style="--d:.54s"><div class="badge m"><i class="ico ico-approx" aria-hidden="true"></i></div><div class="grow"><div class="ct">Everyone wants the same thing</div><div class="cd">no, the market <b>splits by function &amp; region</b></div></div><div class="verdict">MIXED</div></div>
      </div>
      <div class="rivals r" style="--d:.68s">
        <span class="pill" style="border-color:rgba(255,255,255,.2)">Still contested:</span>
        <span class="rival">Indeed · jobs</span>
        <span class="rival">Glassdoor · reviews</span>
        <span class="rival">Xing · DACH</span>
      </div>
      <div class="src">
        <span class="lbl">Frameworks <i class="ico ico-chevron" aria-hidden="true"></i></span>
        <span class="cite">Eisenmann, Parker &amp; Van Alstyne (2006)</span>
        <span class="cite r">Eisenmann et al., "Platform Envelopment" (2011)</span>
        <span class="cite g">Caillaud &amp; Jullien (2003)</span>
      </div>`, narration:"Let's answer that. Does this market tip until one winner takes everything? Eisenmann says winner-take-all needs three things at once: strong network effects, painful switching costs, and everyone wanting the same one-size-fits-all thing. LinkedIn aces the first, and stumbles on the other two. Switching is cheap: a recruiter runs LinkedIn, Indeed and Glassdoor side by side, and in the DACH region plenty still keep a Xing profile. And the market splits by function and geography. So LinkedIn owns professional identity in the West, but it isn't untouchable. A champion, not an unbeatable one. So how does a champion defend its title?"
  }, /* 11, GOVERNANCE: control as the moat */
  {
    no:"11", kick:"Control is the moat", thread:"If not unbeatable, how does it defend itself?", html:`
      <div class="beat rose r" style="--d:.05s">The defence</div>
      <h2 class="h r" style="--d:.12s">Built for <em>control</em>, not openness</h2>
      <p class="lead r" style="--d:.12s">Governance is about <b>who decides, and how open the platform is.</b> LinkedIn sits firmly on the locked-down end.</p>
      <div class="dials">
        <div class="dial r" style="--d:.28s"><div class="dt"><b>Feed algorithm</b><span>opaque</span></div><div class="meter"><i data-w="92"></i></div></div>
        <div class="dial r" style="--d:.36s"><div class="dt"><b>Terms &amp; moderation</b><span>strict</span></div><div class="meter"><i data-w="84"></i></div></div>
        <div class="dial r" style="--d:.44s"><div class="dt"><b>Identity verification</b><span>real names</span></div><div class="meter"><i data-w="70"></i></div></div>
        <div class="dial r" style="--d:.52s"><div class="dt"><b>Anti-scraping</b><span>hiQ Labs case</span></div><div class="meter"><i data-w="88"></i></div></div>
      </div>
      <div class="slider r" style="--d:.64s">
        <div class="slidertrack"><span class="end">OPEN / GENERATIVE</span><div class="knob"></div><span class="end">CLOSED / CONTROLLED</span></div>
      </div>
      <div class="src">
        <span class="lbl">Frameworks <i class="ico ico-chevron" aria-hidden="true"></i></span>
        <span class="cite">Tiwana, Konsynski &amp; Bush (2010)</span>
        <span class="cite g">Boudreau (2010), access vs. control</span>
      </div>`, narration:"Not by throwing the doors open, but by locking them. Tiwana frames governance as two questions: who decides, and how open is the platform? On both, LinkedIn leans hard toward control. It rules the feed algorithm, enforces strict terms, demands real identities, and fights scraping hard, the hiQ Labs case being the clearest example, where LinkedIn won on breach of contract and hiQ shut down. Boudreau names the trade-off: openness sparks innovation, but surrendering control risks the platform's integrity. LinkedIn picks control and trust every time. And you see that same instinct in how it treats outside developers."
  }, /* 12, BOUNDARY RESOURCES */
  {
    no:"12", kick:"The gated doors", thread:"How tightly does it guard the doors?", html:`
      <div class="beat rose r" style="--d:.05s">The gated doors</div>
      <h2 class="h r" style="--d:.12s"><span class="blue">APIs</span>: open a crack, no more</h2>
      <p class="lead r" style="--d:.12s">Boundary resources, the APIs that let outsiders build on a platform, are the knobs balancing <b>control</b> against <b>contribution</b>. LinkedIn keeps them tight.</p>
      <div class="pyr">
        <div class="tier t1 r" style="--d:.3s"><div class="tn">Open permissions · any developer</div><div class="ti">Sign-In with LinkedIn (OpenID Connect) · Share API</div></div>
        <div class="tier t2 r" style="--d:.45s"><div class="tn">Partner program · apply + get reviewed</div><div class="ti">Marketing API · Jobs / ATS API</div></div>
        <div class="tier t3 r" style="--d:.6s"><div class="tn">Partner · invite only</div><div class="ti">Talent · Learning · Sales Navigator (SNAP)</div></div>
      </div>
      <div class="stamp r" style="--d:.8s"><i class="ico ico-ban" aria-hidden="true"></i> NO BULK DATA</div>
      <p class="lead r" style="--d:.75s; margin-top:1cqmin">Built on the <b>REST.li</b> framework (now migrating to gRPC), each API serves <b>one workflow.</b> Next to Apple or Salesforce, the surface is deliberately narrow, <b>control over generativity.</b></p>
      <div class="src">
        <span class="lbl">Frameworks <i class="ico ico-chevron" aria-hidden="true"></i></span>
        <span class="cite g">Ghazawneh &amp; Henfridsson (2013)</span>
        <span class="cite">Eaton et al. (2015)</span>
        <span class="cite">Microsoft Learn, LinkedIn API docs</span>
      </div>`, narration:"Those developers meet LinkedIn at its APIs. Ghazawneh and Henfridsson call APIs boundary resources, the dials that balance control against contribution. LinkedIn opens its door just a crack. Anyone can use the basics, Sign-In with LinkedIn, on OpenID Connect over OAuth 2.0, plus the Share API. But everything valuable hides behind a velvet rope: Marketing and Jobs need partner approval; Talent, Learning and Sales Navigator are invite-only. Bulk data access? Forbidden. Next to Apple or Salesforce, this surface is deliberately narrow. Control beats openness again. But that grip on data carries a cost, and it isn't LinkedIn that pays it."
  }, /* 13, THE ETHICAL COST */
  {
    no:"13", kick:"The cost", thread:"What does all that control cost us?", html:`
      <div class="beat rose r" style="--d:.05s">The cost</div>
      <h2 class="h r" style="--d:.12s">It <span class="rosed">rewired</span> work, and concentrated power</h2>
      <div class="ba">
        <div class="bacol old r" style="--d:.22s"><h4>Before</h4>
          <div class="li">Post a job &amp; wait</div>
          <div class="li">Static paper résumé</div>
          <div class="li">Headhunter networks</div>
        </div>
        <div class="baarrow r" style="--d:.42s"><i class="ico ico-arrow" aria-hidden="true"></i></div>
        <div class="bacol new r" style="--d:.32s"><h4>After LinkedIn</h4>
          <div class="li">Hunt <b>passive</b> candidates</div>
          <div class="li">A living, public profile</div>
          <div class="li">Self-serve talent search</div>
        </div>
      </div>
      <div class="warnbox r" style="--d:.6s"><b>The critical edge:</b> this hands one private, algorithmic <b>gatekeeper</b> enormous power over who gets seen, raising real concerns about matching bias, worker surveillance, and invisibility for anyone off-platform.</div>
      <div class="src">
        <span class="lbl">Concepts <i class="ico ico-chevron" aria-hidden="true"></i></span>
        <span class="cite">Gawer &amp; Cusumano (2014)</span>
        <span class="cite r">platform power · labour-market gatekeeping</span>
      </div>`, narration:"We pay it, through the job market itself. LinkedIn rewired how work works: recruiting flipped from posting a job and waiting, to hunting people who never raised their hand, turning every professional into a permanently visible, searchable asset. Convenient? Hugely. But the flip side: it hands enormous power over the labour market to a single private, algorithmic gatekeeper that decides who gets seen. That raises real questions, about bias, surveillance, and everyone left off the platform. Convenience for the many; quiet power for the one. To feel both sides of that bargain, let's check in on Lena one last time."
  }, /* 14, VERDICT */
  {
    no:"14", kick:"The verdict", thread:"So, strong, or unbeatable?", html:`
      <div class="beat r" style="--d:.05s">The verdict</div>
      <h2 class="h r" style="--d:.12s">Against the <em>frameworks</em></h2>
      <div class="score">
        <div class="scorerow r" style="--d:.26s"><div class="sk">Network effects (direct · cross · data)</div><div class="sv good">STRONG <i class="ico ico-check" aria-hidden="true"></i></div></div>
        <div class="scorerow r" style="--d:.36s"><div class="sk">Asset-light scalability</div><div class="sv good">STRONG <i class="ico ico-check" aria-hidden="true"></i></div></div>
        <div class="scorerow r" style="--d:.46s"><div class="sk">Truly unbeatable monopoly</div><div class="sv bad">CONTESTABLE <i class="ico ico-x" aria-hidden="true"></i></div></div>
        <div class="scorerow r" style="--d:.56s"><div class="sk">Openness &amp; generativity</div><div class="sv bad">LOW <i class="ico ico-x" aria-hidden="true"></i></div></div>
        <div class="scorerow r" style="--d:.66s"><div class="sk">Labour-market power &amp; ethics</div><div class="sv warn">CONCERN <i class="ico ico-warn" aria-hidden="true"></i></div></div>
      </div>
      <div class="closing r" style="--d:.82s">The answer to our question: <b>powerful, but not unbeatable.</b> LinkedIn proves that owning the network and the data, not the openness, is the more durable moat.</div>
      <div class="src">
        <span class="lbl">Synthesis <i class="ico ico-chevron" aria-hidden="true"></i></span>
        <span class="cite">Eisenmann et al. (2006)</span>
        <span class="cite g">Parker et al. (2016)</span>
        <span class="cite r">Boudreau (2010)</span>
      </div>`, narration:"Let's settle it, framework by framework. LinkedIn is a textbook multi-sided platform, powered by formidable network effects, direct, cross-side and data, with beautiful asset-light scale. But it's no flawless monopoly: cheap switching and a market sliced by function keep it contestable, and rivals like Xing survive in their regions. Its greatest strength, tight governance and trust, is also its ceiling: low openness, narrow APIs. And its grip on the labour market earns the scrutiny it gets. So the answer to our opening question? Powerful, but not unbeatable. The real lesson: owning the network and the data, not opening the doors, is the most durable moat of all."
  }, /* 15, REFERENCES */
  {
    no:"15", kick:"Sources", thread:null, refscene:true,
    steps:[
      {sel:'.refcol@0', say:"And that's the teardown. The moat was never openness; it was the network and the data all along. On the left, the theory and the frameworks we leaned on."},
      {sel:'.refcol@1', say:"And on the right, the LinkedIn evidence and the data behind every claim."},
      {sel:'.endnote', say:"Powerful, but not unbeatable. Thanks for watching."}
    ],
    html:`
      <h2 class="h r">Sources <span class="blue">&amp;</span> references</h2>
      <div class="refgrid r" style="--d:.2s">
        <div class="refcol">
          <h4>Theory &amp; frameworks</h4>
          <ol>
            <li><b>Rochet, J.-C. &amp; Tirole, J.</b> (2003). Platform competition in two-sided markets. <i>J. of the European Economic Association</i>, 1(4).</li>
            <li><b>Rochet, J.-C. &amp; Tirole, J.</b> (2006). Two-sided markets: a progress report. <i>RAND J. of Economics</i>, 37(3).</li>
            <li><b>Katz, M. &amp; Shapiro, C.</b> (1985). Network externalities, competition, and compatibility. <i>Amer. Economic Review</i>, 75(3).</li>
            <li><b>Armstrong, M.</b> (2006). Competition in two-sided markets. <i>RAND J. of Economics</i>, 37(3).</li>
            <li><b>Eisenmann, T., Parker, G. &amp; Van Alstyne, M.</b> (2006). Strategies for two-sided markets. <i>Harvard Business Review</i>, 84(10).</li>
            <li><b>Eisenmann, T., Parker, G. &amp; Van Alstyne, M.</b> (2011). Platform envelopment. <i>Strategic Management J.</i>, 32(12).</li>
            <li><b>Caillaud, B. &amp; Jullien, B.</b> (2003). Chicken &amp; egg: competition among intermediation service providers. <i>RAND J. of Economics</i>, 34(2).</li>
            <li><b>Hagiu, A. &amp; Wright, J.</b> (2015). Multi-sided platforms. <i>Int'l J. of Industrial Organization</i>, 43.</li>
            <li><b>Parker, G., Van Alstyne, M. &amp; Choudary, S.P.</b> (2016). <i>Platform Revolution.</i> Norton.</li>
            <li><b>Van Alstyne, M., Parker, G. &amp; Choudary, S.P.</b> (2016). Pipelines, platforms, and the new rules of strategy. <i>HBR</i>, 94(4).</li>
            <li><b>Ghazawneh, A. &amp; Henfridsson, O.</b> (2013). Balancing platform control and external contribution: the boundary resources model. <i>Information Systems J.</i>, 23(2).</li>
            <li><b>Eaton, B. et al.</b> (2015). Distributed tuning of boundary resources: the case of Apple's iOS. <i>MIS Quarterly</i>, 39(1).</li>
            <li><b>Tiwana, A., Konsynski, B. &amp; Bush, A.</b> (2010). Platform evolution. <i>Information Systems Research</i>, 21(4).</li>
            <li><b>Boudreau, K.</b> (2010). Open platform strategies and innovation. <i>Management Science</i>, 56(10).</li>
            <li><b>Gawer, A. &amp; Cusumano, M.</b> (2014). Industry platforms and ecosystem innovation. <i>J. of Product Innovation Mgmt</i>, 31(3).</li>
            <li><b>Jacobides, M., Cennamo, C. &amp; Gawer, A.</b> (2018). Towards a theory of ecosystems. <i>Strategic Management J.</i>, 39(8).</li>
            <li><b>Osterwalder, A. &amp; Pigneur, Y.</b> (2010). <i>Business Model Generation.</i> Wiley.</li>
            <li><b>Evans, D. &amp; Schmalensee, R.</b> (2010). Failure to launch: critical mass in platform businesses. <i>Review of Network Economics</i>, 9(4).</li>
          </ol>
        </div>
        <div class="refcol b">
          <h4>LinkedIn, evidence &amp; data</h4>
          <ol>
            <li><b>Microsoft Corp.</b> (2016). Form 8-K, "Microsoft to acquire LinkedIn" ($26.2 B, $196/share). SEC.</li>
            <li><b>Microsoft Corp.</b> (2025). Form 10-K, LinkedIn revenue, fiscal 2025 (~$17.8 B).</li>
            <li><b>DataReportal</b> (2025-2026). <i>LinkedIn Users, Stats, Data &amp; Trends.</i> Kepios / We Are Social.</li>
            <li><b>TechCrunch</b> (2016). Microsoft to buy LinkedIn for $26.2 B, Talent Solutions about $2 B of $3 B (2015).</li>
            <li><b>Microsoft Learn</b> (2026). <i>LinkedIn Developer Platform / Getting access to LinkedIn APIs</i> (Default / Partner / Enterprise tiers).</li>
            <li><b>hiQ Labs, Inc. v. LinkedIn Corp.</b>, U.S. Court of Appeals, 9th Circuit (landmark data-scraping litigation).</li>
            <li><b>Hoffman, R. &amp; Yeh, C.</b> (2018). <i>Blitzscaling.</i> Currency, LinkedIn's growth strategy.</li>
            <li><b>LinkedIn Corp.</b> Pressroom &amp; EU Digital Services Act transparency reports (active-user disclosures).</li>
          </ol>
        </div>
      </div>
      <div class="endnote r" style="--d:.5s">Powerful, but not unbeatable. Thanks for watching.</div>`, narration:"And that's the teardown, the moat was never openness; it was the network and the data all along. The full source list is on screen: frameworks on the left, the LinkedIn evidence on the right. Powerful, but not unbeatable. Thanks for watching."
  }
];
