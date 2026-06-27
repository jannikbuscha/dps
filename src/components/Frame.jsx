import Hud from './Hud.jsx';

/**
 * The 16:9 "video" frame. `#stage` is left empty here — the engine builds
 * each scene into it on mount. The only overlay is the brand mark (Hud);
 * investigation questions are now their own full scenes (no overlay).
 * Captions live OUTSIDE the frame (rendered below it in App). There is no
 * start/landing screen — the bottom Play button starts the intro.
 */
export default function Frame() {
  return (
    <div className="frame" id="frame">
      <div className="stage" id="stage"></div>
      <Hud />
    </div>
  );
}
