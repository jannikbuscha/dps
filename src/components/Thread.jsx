/**
 * The per-scene question, shown as a centered TITLE at the top of the frame
 * (no box / pill). The engine toggles its visibility and updates the text.
 */
export default function Thread() {
  return (
    <div className="thread" id="thread">
      <span className="qtext" id="threadText">Is LinkedIn really unbeatable?</span>
    </div>
  );
}
