import Hud from './Hud.jsx';
import Thread from './Thread.jsx';

/**
 * The 16:9 "video" frame. `#stage` is left empty here — the engine builds
 * each scene into it on mount. On top sit the two overlays: the brand mark
 * (Hud) and the investigation question (Thread). Captions live OUTSIDE the
 * frame (rendered below it in App). There is no start/landing screen — the
 * bottom Play button starts the intro.
 */
export default function Frame() {
  return (
    <div className="frame" id="frame">
      <div className="stage" id="stage"></div>
      <Hud />
      <Thread />
    </div>
  );
}
