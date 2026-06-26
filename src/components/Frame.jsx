import Hud from './Hud.jsx';
import Thread from './Thread.jsx';

/**
 * The 16:9 "video" frame. `#stage` is left empty here — the engine builds
 * each scene into it on mount. The other layers are cinematic decoration
 * (film background, vignette, grain, letterbox bars) plus the overlays.
 * Captions live OUTSIDE the frame now (rendered below it in App). There is
 * no start/landing screen — the bottom Play button starts the intro.
 */
export default function Frame() {
  return (
    <div className="frame" id="frame">
      <div className="filmbg"></div>
      <div className="stage" id="stage"></div>
      <Hud />
      <Thread />
      <div className="vignette"></div>
      <div className="grain"></div>
      <div className="lbtop"></div>
      <div className="lbbot"></div>
    </div>
  );
}
