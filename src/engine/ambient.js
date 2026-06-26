/* =========================================================================
   AMBIENT NETWORK BACKGROUND — ported verbatim from the original build.
   Draws drifting nodes + proximity links onto the fixed background canvas.
   NOTE: the active flat theme hides #ambient (display:none), so this is
   invisible unless you remove that rule in theme-flat.css.
   ========================================================================= */
export function startAmbient(canvas) {
  const c = canvas, x = c.getContext('2d');
  let W, H, pts, raf = null;
  function size() {
    W = c.width = innerWidth; H = c.height = innerHeight;
    const n = Math.min(70, Math.floor(W * H / 26000));
    pts = Array.from({ length: n }, () => ({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - .5) * .18, vy: (Math.random() - .5) * .18 }));
  }
  size();
  addEventListener('resize', size);
  function draw() {
    x.clearRect(0, 0, W, H);
    for (const p of pts) { p.x += p.vx; p.y += p.vy; if (p.x < 0 || p.x > W) p.vx *= -1; if (p.y < 0 || p.y > H) p.vy *= -1; }
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        const a = pts[i], b = pts[j], dx = a.x - b.x, dy = a.y - b.y, d = Math.hypot(dx, dy);
        if (d < 150) { x.strokeStyle = 'rgba(37,99,235,' + (.10 * (1 - d / 150)) + ')'; x.lineWidth = 1; x.beginPath(); x.moveTo(a.x, a.y); x.lineTo(b.x, b.y); x.stroke(); }
      }
    }
    for (const p of pts) { x.fillStyle = 'rgba(37,99,235,.4)'; x.beginPath(); x.arc(p.x, p.y, 1.4, 0, 7); x.fill(); }
    raf = requestAnimationFrame(draw);
  }
  draw();
  return function stop() {
    if (raf) cancelAnimationFrame(raf);
    removeEventListener('resize', size);
  };
}
