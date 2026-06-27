/* =========================================================================
   PLAYER ENGINE — ported verbatim from the original single-file build.
   Behaviour is unchanged; only the surrounding glue is new:
     - scene / story / step / timing DATA now live in ../data/*
     - the engine is wrapped in mountPlayer(), run once after React mounts
       the static shell (see ../hooks/usePlayer.js). destroy() tears it down.
   The engine drives the DOM imperatively via getElementById / querySelector,
   exactly as before, against the markup rendered by the React components.
   ========================================================================= */
import { scenes as baseScenes } from '../data/scenes.js';
import { STEPS_BY_NO } from '../data/steps.js';
import { WPM, PAD } from '../data/config.js';

let mounted = false;

export function mountPlayer() {
  // guard against a second mount (e.g. React StrictMode / HMR) clobbering state
  if (mounted) return () => {};
  mounted = true;
  const cleanups = [];

  // ---- the running scene list (analytical scenes + inlined Lena chapters) ----
  // Scenes already live in playback order in ../data/scenes.js; the Lena
  // chapters (story:true) are inlined there at their narrative positions, so no
  // runtime splicing is needed. Clone each so per-run mutation (s.est, s.steps)
  // never leaks back into the imported module.
  const scenes = baseScenes.map(s => ({ ...s }));

  // ---- shell elements rendered by React ----
  const stage = document.getElementById('stage');
  const capEl = document.getElementById('cap');
  const capWrap = document.getElementById('caption');
  const threadEl = document.getElementById('thread');
  const threadText = document.getElementById('threadText');

  // ---- build scenes + scrub segments ----
  const els = scenes.map((s,i)=>{
    const d = document.createElement('div');
    d.className = 'scene' + (s.refscene?' refscene':'') + (s.story?' storyscene':'');
    d.innerHTML = s.html;
    stage.appendChild(d);
    const words = s.narration.trim().split(/\s+/).length;
    s.est = (words / WPM) * 60000 + PAD;
    return {d};
  });
  const totalMs = scenes.reduce((a,s)=>a+s.est,0);
  const weights = scenes.map(s=>s.est/totalMs);
  function fmt(ms){ ms=Math.max(0,ms); const t=Math.round(ms/1000); return Math.floor(t/60)+':'+String(t%60).padStart(2,'0'); }
  document.getElementById('total').textContent = fmt(totalMs);

  let idx = 0, step = 0, playing = false, started = false;
  let sceneStart = 0, curEst = 0, raf = null, advanceTimer = null, keepAlive = null;
  let voiceOn = true, capsOn = true;

  // Prefer per-scene inline `steps` (intro + story scenes define their own);
  // fall back to the shared STEPS_BY_NO map keyed by scene number.
  scenes.forEach(s => { s.steps = s.steps || STEPS_BY_NO[s.no] || null; });

  // ---- speech ----
  let synth = window.speechSynthesis || null;
  let chosenVoice = null;
  function pickVoice(){
    if(!synth) return;
    const vs = synth.getVoices();
    if(!vs.length) return;
    const pref = [
      v=>/en(-|_)?(US|GB)/i.test(v.lang)&&/natural|google|microsoft|samantha|aria|jenny|libby/i.test(v.name),
      v=>/^en/i.test(v.lang)&&/google/i.test(v.name),
      v=>/^en/i.test(v.lang)&&v.localService===false,
      v=>/^en/i.test(v.lang)
    ];
    for(const f of pref){ const m=vs.find(f); if(m){ chosenVoice=m; return; } }
    chosenVoice = vs[0];
  }
  if(synth){ pickVoice(); synth.onvoiceschanged = pickVoice; cleanups.push(()=>{ if(synth) synth.onvoiceschanged = null; }); }

  function clearTimers(){ if(advanceTimer){clearTimeout(advanceTimer);advanceTimer=null;} if(keepAlive){clearInterval(keepAlive);keepAlive=null;} }

  function speakCurrent(){
    const text = curText();
    const myIdx = idx, myStep = step;
    renderCaption(text, text.length);
    if(synth){ try{ synth.cancel(); }catch(e){} }
    clearTimers();
    sceneStart = performance.now(); curEst = estimate(text);

    if(voiceOn && synth && chosenVoice){
      const u = new SpeechSynthesisUtterance(text);
      u.voice = chosenVoice; u.rate = 1.0; u.pitch = 1.0; u.volume = 1.0; u.lang = chosenVoice.lang || 'en-US';
      u.onboundary = (e)=>{ if(idx===myIdx && step===myStep && (e.name==='word' || typeof e.charIndex==='number')){ renderCaption(text, e.charIndex); } };
      u.onend = ()=>{ if(playing && idx===myIdx && step===myStep) goNext(); };
      u.onerror = ()=>{ scheduleStepTimer(myIdx,myStep); };
      keepAlive = setInterval(()=>{ if(synth.speaking && !synth.paused){ try{ synth.pause(); synth.resume(); }catch(e){} } }, 9000);
      try{ synth.speak(u); }
      catch(e){ scheduleStepTimer(myIdx,myStep); }
    } else {
      scheduleStepTimer(myIdx,myStep);
    }
  }
  function scheduleStepTimer(i,k){
    clearTimeout(advanceTimer);
    advanceTimer = setTimeout(()=>{ if(playing && idx===i && step===k) goNext(); }, estimate(curText()));
  }

  /* ---- per-point step helpers ---- */
  function resolveStepEl(node, sel){
    const at = sel.indexOf('@');
    if(at>=0){ const base=sel.slice(0,at), n=parseInt(sel.slice(at+1),10); return node.querySelectorAll(base)[n]||null; }
    return node.querySelector(sel);
  }
  function sceneStepEls(i){
    const defs = scenes[i].steps; if(!defs) return null;
    const node = els[i].d;
    return defs.map(d=>({ el:resolveStepEl(node,d.sel), say:d.say }));
  }
  function stepCount(){ const d=scenes[idx].steps; return d?d.length:1; }
  function curText(){ const l=sceneStepEls(idx); return (l && l[step]) ? l[step].say : scenes[idx].narration; }
  function estimate(t){ return (t.trim().split(/\s+/).length / WPM) * 60000 + PAD; }
  function applySpot(){
    const node = els[idx].d;
    node.querySelectorAll('.spotlight,.faded,.preveil').forEach(e=>e.classList.remove('spotlight','faded','preveil'));
    // Citation rail (.src) is hidden until the scene's final point, then fades in.
    const srcEl = node.querySelector('.src');
    if(srcEl) srcEl.classList.toggle('srcshow', step >= stepCount()-1);
    const l = sceneStepEls(idx); if(!l) return;
    l.forEach((s,k)=>{
      if(!s.el) return;
      // future = hidden, current = highlighted, past = greyed out
      s.el.classList.add(k>step ? 'preveil' : (k===step ? 'spotlight' : 'faded'));
      // fill any bars/meters inside this point only once the focus has reached it
      const fills = [];
      if(s.el.matches && s.el.matches('.fill[data-w], .meter i[data-w]')) fills.push(s.el);
      if(s.el.querySelectorAll) s.el.querySelectorAll('.fill[data-w], .meter i[data-w]').forEach(f=>fills.push(f));
      fills.forEach(f=>{
        const target = (k<=step ? f.getAttribute('data-w')+'%' : '0');
        // defer so the 0 state paints first → the bar animates as focus arrives
        requestAnimationFrame(()=> requestAnimationFrame(()=>{ f.style.width = target; }));
      });
    });
    updateNetLines(node);
  }
  function updateNow(){
    const n=stepCount();
    document.getElementById('nowTitle').textContent = scenes[idx].kick + (n>1 ? '  ·  '+(step+1)+'/'+n : '');
  }
  function gotoStep(k){
    step = Math.max(0, Math.min(stepCount()-1, k));
    applySpot(); updateNow();
    if(synth){ try{ synth.cancel(); }catch(e){} }
    clearTimers();
    sceneStart = performance.now(); curEst = estimate(curText());
    if(playing) speakCurrent();
    else renderCaption(curText(), curText().length);
  }

  function renderCaption(text, upto){
    if(!capsOn){ capEl.innerHTML=''; return; }
    upto = Math.max(0, Math.min(text.length, upto||0));
    const said = text.slice(0, upto), rest = text.slice(upto);
    capEl.innerHTML = '<span class="said">'+escapeHtml(said)+'</span><span class="rest">'+escapeHtml(rest)+'</span>';
  }
  function escapeHtml(s){ return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

  // ---- red thread updater ----
  function updateThread(i){
    const t = scenes[i].thread;
    threadEl.classList.remove('on');
    if(t){
      threadText.textContent = t;
      threadEl.style.display='';
      // restart entrance animation
      void threadEl.offsetWidth;
      threadEl.classList.add('on');
    } else {
      threadEl.style.display='none';
    }
  }

  // ---- scene control ----
  function showScene(i){
    els.forEach((e,j)=> e.d.classList.toggle('active', j===i));
    idx = i; step = 0;
    updateThread(i);
    runSceneFX(els[i].d, i);
    // make each point clickable
    const l = sceneStepEls(i) || [];
    l.forEach((s,k)=>{ if(s.el){ s.el.style.cursor='pointer'; s.el.onclick = ()=>{ if(!started){ startVideo(); } gotoStep(k); }; } });
    applySpot(); updateNow();
    sceneStart = performance.now(); curEst = estimate(curText());
  }
  function runSceneFX(node, i){
    const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    // count-up stats
    node.querySelectorAll('[data-count]').forEach(el=>{
      const target = parseFloat(el.getAttribute('data-count'));
      const dec = parseInt(el.getAttribute('data-dec')||'0');
      const pre = el.getAttribute('data-prefix')||'';
      const suf = el.getAttribute('data-suffix')||'';
      const plain = el.getAttribute('data-plain');
      // reduced motion: show the final value immediately, no rAF tick
      if(reduceMotion){ el.textContent = pre + (plain?Math.round(target):target.toFixed(dec)) + suf; return; }
      const dur = 1100; const t0 = performance.now();
      function tick(now){
        let p = Math.min(1,(now-t0)/dur); p = 1-Math.pow(1-p,3);
        let val = target*p;
        let out = plain ? Math.round(val).toString() : val.toFixed(dec);
        el.textContent = pre+out+suf;
        if(p<1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    });
    // bar / meter fills
    const hasSteps = !!scenes[i].steps;
    node.querySelectorAll('.fill[data-w], .meter i[data-w]').forEach(el=>{
      el.style.width='0';
      // scenes WITHOUT per-point steps keep the old behaviour: animate on scene load.
      // scenes WITH steps fill each bar only when the spotlight reaches it (see applySpot).
      if(!hasSteps){
        requestAnimationFrame(()=> requestAnimationFrame(()=>{ el.style.width = el.getAttribute('data-w')+'%'; }));
      }
    });
    // ecosystem connectors — drawn from real positions (hub edge → node edge)
    if(node.querySelector('.net')){
      requestAnimationFrame(()=> requestAnimationFrame(()=> drawNet(node)));
    }
  }

  // draw radiating connectors so each line starts at the Owner/hub edge and stops at the node edge
  function drawNet(scope){
    const root = scope || document;
    const NS = 'http://www.w3.org/2000/svg';
    root.querySelectorAll('.net').forEach(net=>{
      const svg = net.querySelector('.netsvg');
      const hub = net.querySelector('.hubcore');
      if(!svg || !hub) return;
      const sr = svg.getBoundingClientRect();
      if(sr.width < 4 || sr.height < 4) return;
      svg.setAttribute('viewBox', '0 0 '+sr.width+' '+sr.height);
      svg.setAttribute('preserveAspectRatio','none');
      const hr = hub.getBoundingClientRect();
      const hx = hr.left + hr.width/2 - sr.left;
      const hy = hr.top  + hr.height/2 - sr.top;
      const hubHalf = Math.min(hr.width, hr.height)/2 + 6;
      const nodes = Array.from(net.querySelectorAll('.node'));
      let lines = Array.from(svg.querySelectorAll('line.flow'));
      while(lines.length < nodes.length){ const L=document.createElementNS(NS,'line'); L.setAttribute('class','flow'); svg.appendChild(L); lines.push(L); }
      while(lines.length > nodes.length){ svg.removeChild(lines.pop()); }
      nodes.forEach((nd,i)=>{
        const dot = nd.querySelector('.dot') || nd;
        const dr = dot.getBoundingClientRect();
        const dx = dr.left + dr.width/2 - sr.left;
        const dy = dr.top  + dr.height/2 - sr.top;
        const ang = Math.atan2(dy - hy, dx - hx);
        const dotR = Math.max(dr.width, dr.height)/2 + 7;
        const x1 = hx + Math.cos(ang)*hubHalf, y1 = hy + Math.sin(ang)*hubHalf;
        const x2 = dx - Math.cos(ang)*dotR,   y2 = dy - Math.sin(ang)*dotR;
        const L = lines[i];
        L.setAttribute('x1', x1.toFixed(1)); L.setAttribute('y1', y1.toFixed(1));
        L.setAttribute('x2', x2.toFixed(1)); L.setAttribute('y2', y2.toFixed(1));
        L.setAttribute('stroke', nd.getAttribute('data-stroke') || (nd.classList.contains('money') ? '#ca7406' : '#639a00'));
        // a connector line only appears once its node (icon) is revealed
        L.style.opacity = nd.classList.contains('preveil') ? '0' : '1';
      });
    });
  }
  // keep each connector line in sync with whether its node is revealed
  function updateNetLines(node){
    node.querySelectorAll('.net').forEach(net=>{
      const svg = net.querySelector('.netsvg'); if(!svg) return;
      const nodes = Array.from(net.querySelectorAll('.node'));
      const lines = Array.from(svg.querySelectorAll('line.flow'));
      nodes.forEach((nd,i)=>{ if(lines[i]) lines[i].style.opacity = nd.classList.contains('preveil') ? '0' : '1'; });
    });
  }
  let __netRedraw;
  const onResize = ()=>{ clearTimeout(__netRedraw); __netRedraw = setTimeout(()=> drawNet((els[idx]&&els[idx].d) || document), 120); };
  window.addEventListener('resize', onResize); cleanups.push(()=>window.removeEventListener('resize', onResize));

  // ---- progress clock (drives the elapsed-time readout) ----
  function loop(){
    if(playing){
      const n = stepCount();
      const local = Math.min(1, (performance.now()-sceneStart)/(curEst||scenes[idx].est));
      const frac = Math.min(1, (step+local)/n);
      const elapsed = weights.slice(0,idx).reduce((a,w)=>a+w,0)*totalMs + frac*weights[idx]*totalMs;
      document.getElementById('elapsed').textContent = fmt(elapsed);
    }
    raf = requestAnimationFrame(loop);
  }

  function play(){
    if(!started){ startVideo(); return; }
    playing = true; setPP(true);
    if(synth && synth.paused && voiceOn){ try{ synth.resume(); }catch(e){} }
    else { speakCurrent(); }
  }
  function pause(){
    playing = false; setPP(false);
    if(synth && voiceOn){ try{ synth.pause(); }catch(e){} }
    clearTimeout(advanceTimer);
  }
  function togglePlay(){ playing ? pause() : play(); }
  function setPP(on){
    document.getElementById('ppIcon').innerHTML = on
      ? '<path d="M6 5h4v14H6zM14 5h4v14h-4z"/>'
      : '<path d="M8 5v14l11-7z"/>';
  }
  function goNext(){
    if(step < stepCount()-1){ gotoStep(step+1); return; }
    if(idx < scenes.length-1){ jump(idx+1); }
    else {
      playing=false; setPP(false); clearTimers();
      if(synth){ try{ synth.cancel(); }catch(e){} }
    }
  }
  function goPrev(){
    if(step > 0){ gotoStep(step-1); return; }
    if(idx > 0){ jump(idx-1, true); }
  }
  function jump(i, toLast){
    i = Math.max(0, Math.min(scenes.length-1, i));
    if(synth){ try{ synth.cancel(); }catch(e){} }
    clearTimers();
    showScene(i);
    if(!started){ started=true; }
    if(toLast){ step = stepCount()-1; applySpot(); updateNow(); }
    if(playing){ speakCurrent(); }
    else { renderCaption(curText(), curText().length); }
  }

  function startVideo(){
    started = true;
    showScene(0);
    playing = true; setPP(true);
    speakCurrent();
    if(!raf) loop();
  }
  function restart(){
    if(synth){ try{ synth.cancel(); }catch(e){} }
    clearTimers(); started=false; playing=false; setPP(false);
    document.getElementById('elapsed').textContent='0:00';
    showScene(0);
  }

  // ---- toggles ----
  // The Voice/Captions chips are role="switch" divs: clickable AND keyboard-
  // operable (Enter/Space), with aria-checked kept in sync with the .on class.
  const voiceTog = document.getElementById('voiceTog');
  const capTog = document.getElementById('capTog');
  const voiceIco = document.getElementById('voiceIco');
  function setSwitch(el, on){ el.classList.toggle('on', on); el.setAttribute('aria-checked', on ? 'true' : 'false'); }
  function toggleVoice(){
    voiceOn = !voiceOn; setSwitch(voiceTog, voiceOn);
    if(voiceIco) voiceIco.className = voiceOn ? 'ico ico-voice' : 'ico ico-voiceoff';
    if(synth){ try{ synth.cancel(); }catch(e){} }
    if(started && playing){ speakCurrent(); }
  }
  function toggleCaps(){
    capsOn = !capsOn; setSwitch(capTog, capsOn);
    capWrap.classList.toggle('hide', !capsOn);
    if(capsOn) renderCaption(curText(), curText().length);
  }
  // make a role="switch" div behave like a button for keyboard users
  function wireSwitch(el, handler){
    el.addEventListener('click', handler);
    el.addEventListener('keydown', e=>{ if(e.key==='Enter' || e.key===' ' || e.code==='Space'){ e.preventDefault(); handler(); } });
  }
  wireSwitch(voiceTog, toggleVoice);
  wireSwitch(capTog, toggleCaps);

  // ---- wire controls ---- (the start-screen #playBtn was removed)
  document.getElementById('playPause').addEventListener('click', togglePlay);
  document.getElementById('nextBtn').addEventListener('click', goNext);
  document.getElementById('prevBtn').addEventListener('click', goPrev);
  document.getElementById('replayBtn').addEventListener('click', restart);
  const onKeydown = e=>{
    if(e.code==='Space'){ e.preventDefault(); started?togglePlay():startVideo(); }
    else if(e.code==='ArrowRight'){ e.preventDefault(); started?goNext():startVideo(); }
    else if(e.code==='ArrowLeft'){ e.preventDefault(); if(started) goPrev(); }
  };
  document.addEventListener('keydown', onKeydown); cleanups.push(()=>document.removeEventListener('keydown', onKeydown));
  const onBeforeUnload = ()=>{ if(synth){ try{ synth.cancel(); }catch(e){} } };
  window.addEventListener('beforeunload', onBeforeUnload); cleanups.push(()=>window.removeEventListener('beforeunload', onBeforeUnload));

  // init: show the first scene (the intro), paused. Pressing Play (or →)
  // starts narration from the top. There is no separate start/landing screen.
  showScene(0);
  loop();

  return function destroy() {
    if (raf) cancelAnimationFrame(raf);
    clearTimers();
    if (synth) { try { synth.cancel(); } catch (e) {} }
    cleanups.forEach(fn => { try { fn(); } catch (e) {} });
    stage.innerHTML = '';
    mounted = false;
  };
}
