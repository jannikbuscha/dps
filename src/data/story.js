// The recurring "Lena" storyline, spliced between the analytical scenes.
// Lena is fully introduced in the intro (scene 01); these chapters CONTINUE
// her story without re-introducing her. Characters recur (Lena, recruiter
// Marco, mutual connections Anna & Tom) with real photos from /public/images.
// Each chapter defines its own `steps` so content reveals gradually.
export const STORY = [
  { after:"05", no:"✦", kick:"Lena · Chapter 1", thread:null, story:true,
    steps:[
      {sel:'.story-copy', say:"A few weeks drift by, and Lena still isn't job hunting. But six hundred kilometres away in Berlin, a recruiter named Marco types three little filters: designer, Munich, design systems. In seconds, there she is."},
      {sel:'.mock@0', say:"The network's reach and that near zero search cost did all the work. The opportunity travelled to Lena, not the other way around."},
      {sel:'.mock@1', say:"And it isn't luck. Shared connections like Anna and Tom vouch for her quietly, so the match feels trustworthy before a single word is exchanged. But pause there, because something just changed hands, and it wasn't anything you could hold."}
    ],
    html:`
      <div class="chap r" style="--d:.05s"><img class="lv" src="/images/lena.jpg" alt="Lena"> Lena · Chapter 1 · The match finds her</div>
      <div class="storygrid">
        <div class="story-copy">
          <h2 class="h">The opportunity<br><em>finds her.</em></h2>
          <p>Still not searching. But 600 km away in Berlin, a recruiter types three filters, <b>designer · Munich · design systems</b>, and there she is.</p>
          <p>Near-zero search cost means the job travels to <b>Lena</b>, not the other way around.</p>
        </div>
        <div>
          <div class="mock">
            <div class="mhead"><img class="mava" src="/images/marco.jpg" alt="Marco Reuter"><div><div class="mname" style="font-size:2.1cqmin">Marco Reuter viewed your profile</div><div class="msub">Senior Recruiter · Berlin · 600 km away</div></div></div>
          </div>
          <div class="mock">
            <span class="mtag">People you may know</span>
            <div class="mline" style="border-top:none"><img class="mava" src="/images/anna.jpg" alt="Anna Keller" style="width:5cqmin;height:5cqmin"><div class="msub" style="margin:0">Anna Keller · ex-colleague · 12 mutual connections</div></div>
            <div class="mline"><img class="mava" src="/images/tom.jpg" alt="Tom Brandt" style="width:5cqmin;height:5cqmin"><div class="msub" style="margin:0">Tom Brandt · former teammate · 8 mutual connections</div></div>
          </div>
        </div>
      </div>`,
    narration:"A few weeks drift by, and Lena still isn't job hunting. But six hundred kilometres away in Berlin, a recruiter named Marco types three little filters: designer, Munich, design systems. In seconds, there she is. The network's reach and that near zero search cost did all the work. The opportunity travelled to Lena, not the other way around. And it isn't luck. Shared connections like Anna and Tom vouch for her quietly, so the match feels trustworthy before a single word is exchanged. But pause there, because something just changed hands, and it wasn't anything you could hold." },

  { after:"09", no:"✦", kick:"Lena · Chapter 2", thread:null, story:true,
    steps:[
      {sel:'.story-copy', say:"Here's how it reaches her. A message appears in Lena's inbox. It looks like any other note, but it isn't. Marco couldn't just message her; they aren't connected."},
      {sel:'.mock@0', say:"So his company paid LinkedIn for the privilege: a paid InMail, on top of a Recruiter licence that runs into thousands a year. Lena reads it for free, never seeing the price tag. That's the business model, made personal. Which forces the question we've been circling: with power like this, is LinkedIn simply unbeatable?"}
    ],
    html:`
      <div class="chap r" style="--d:.05s"><img class="lv" src="/images/lena.jpg" alt="Lena"> Lena · Chapter 2 · Someone pays to reach her</div>
      <div class="storygrid">
        <div class="story-copy">
          <h2 class="h">Someone <em>pays</em><br>to reach her.</h2>
          <p>This lands in Lena's inbox. It looks like a normal message, but it isn't. They're not connected, so Marco's company <b>paid LinkedIn</b> for the right to message her.</p>
          <p>Lena reads it for free. The platform just got <b>paid to put it in front of her.</b></p>
        </div>
        <div class="mock">
          <span class="mtag" style="color:var(--gold)">Sponsored · InMail</span>
          <div class="mhead"><img class="mava" src="/images/marco.jpg" alt="Marco Reuter"><div><div class="mname" style="font-size:2.1cqmin">Marco Reuter</div><div class="msub">Senior Recruiter · Studio Berlin</div></div></div>
          <div class="mbody">"Hi Lena, we're hiring a <b>Lead Product Designer</b> and your design-systems work is exactly what we need. We even share a few connections, like Anna. Open to a chat this week?"</div>
          <div class="mnote"><span class="mdot"></span> Recruiter paid LinkedIn to land in your inbox: InMail credit plus a Recruiter licence (about thousands per year)</div>
        </div>
      </div>`,
    narration:"Here's how it reaches her. A message appears in Lena's inbox. It looks like any other note, but it isn't. Marco couldn't just message her; they aren't connected. So his company paid LinkedIn for the privilege: a paid InMail, on top of a Recruiter licence that runs into thousands a year. Lena reads it for free, never seeing the price tag. That's the business model, made personal. Which forces the question we've been circling: with power like this, is LinkedIn simply unbeatable?" },

  { after:"13", no:"✦", kick:"Lena · Chapter 3", thread:null, story:true,
    steps:[
      {sel:'.story-copy', say:"And, good news, it works out. Six weeks later, Lena signs: Lead Product Designer, a real step up, a genuinely happy ending. But replay how it happened. She never applied."},
      {sel:'.mock@0', say:"An algorithm decided she was worth surfacing; a paying recruiter decided she was worth reaching; and a private platform sat in the middle of every step. Lena won, and so did LinkedIn, which quietly owned the whole match. Convenience for her, quiet power for the platform. So, time for the final verdict."}
    ],
    html:`
      <div class="chap r" style="--d:.05s"><img class="lv" src="/images/lena.jpg" alt="Lena"> Lena · Chapter 3 · She got the job</div>
      <div class="storygrid">
        <div class="story-copy">
          <h2 class="h">Lena got<br>the <span class="blue">job.</span></h2>
          <p>Six weeks later, she signs. <b>Lead Product Designer</b>, a real step up. A genuinely happy ending.</p>
          <p>But she never applied. An algorithm decided she was worth surfacing; a paying recruiter decided she was worth reaching. <b>Who owned that match?</b></p>
        </div>
        <div class="mock">
          <span class="mtag" style="color:var(--cyan)">Offer accepted</span>
          <div class="mhead"><img class="mava g" src="/images/lena.jpg" alt="Lena Vogel"><div><div class="mname">Lead Product Designer</div><div class="msub">Studio Berlin · starts in 6 weeks</div></div></div>
          <div class="mline"><span class="mpill on">Hired via LinkedIn</span><span class="mpill gold">Surfaced &amp; ranked by the algorithm</span></div>
          <div class="mnote"><span class="mdot"></span> Lena won. So did LinkedIn: it owned every step of the match.</div>
        </div>
      </div>`,
    narration:"And, good news, it works out. Six weeks later, Lena signs: Lead Product Designer, a real step up, a genuinely happy ending. But replay how it happened. She never applied. An algorithm decided she was worth surfacing; a paying recruiter decided she was worth reaching; and a private platform sat in the middle of every step. Lena won, and so did LinkedIn, which quietly owned the whole match. Convenience for her, quiet power for the platform. So, time for the final verdict." }
];
