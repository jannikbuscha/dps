/**
 * Transport bar below the frame: prev / play-pause / next, elapsed time,
 * current-point label, and the voice + caption toggles. The engine wires
 * every button by id. (The segmented scene-overview scrubber was removed.)
 */
export default function Controls() {
  return (
    <div className="controls">
      <div className="ctrlbar">
        <button className="btn" id="prevBtn" title="Previous point (←)"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"></path></svg></button>
        <button className="btn main" id="playPause" title="Play / Pause (space)"><svg id="ppIcon" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"></path></svg></button>
        <button className="btn" id="nextBtn" title="Next point (→)"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 6h2v12h-2zM6 6l8.5 6L6 18z"></path></svg></button>
        <div className="time"><b id="elapsed">0:00</b> / <span id="total">8:11</span></div>
        <div className="now" id="nowTitle">Press play to start</div>
        <div className="toggle on" id="voiceTog" role="switch" tabIndex={0} aria-checked={true} aria-label="Narration voice" title="Toggle narration voice"><i className="ico ico-voice" id="voiceIco" aria-hidden="true"></i> Voice</div>
        <div className="toggle on" id="capTog" role="switch" tabIndex={0} aria-checked={true} aria-label="Captions" title="Toggle captions"><i className="ico ico-cc" aria-hidden="true"></i> Captions</div>
        <button className="btn" id="replayBtn" title="Restart"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12a9 9 0 1 0 3-6.7M3 4v4h4"></path></svg></button>
      </div>
    </div>
  );
}
