/**
 * In-frame heads-up display. Now just the LinkedIn brand mark (top-right).
 * The "SCENE XX / 15" counter, the kicker label, and the "Platform Teardown"
 * tagline were removed.
 */
export default function Hud() {
  return (
    <div className="hud">
      <div className="brand"><div className="lk">Linked<u>In</u></div></div>
    </div>
  );
}
