import Frame from './components/Frame.jsx';
import Caption from './components/Caption.jsx';
import Controls from './components/Controls.jsx';
import { usePlayer } from './hooks/usePlayer.js';

/**
 * Renders the static shell (video frame + transport controls) and boots the
 * player engine via usePlayer(). React owns the markup; the engine owns the
 * playback behaviour — they don't fight because nothing here re-renders after
 * the initial mount.
 */
export default function App() {
  usePlayer();
  return (
    <div className="wrap">
      <Frame />
      <Caption />
      <Controls />
    </div>
  );
}
