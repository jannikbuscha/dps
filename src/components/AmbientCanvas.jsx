import { useEffect, useRef } from 'react';
import { startAmbient } from '../engine/ambient.js';

/** Fixed full-viewport background canvas with the drifting network animation. */
export default function AmbientCanvas() {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return undefined;
    return startAmbient(ref.current);
  }, []);
  return <canvas id="ambient" ref={ref} />;
}
