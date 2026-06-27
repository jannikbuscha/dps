import { useEffect } from 'react';
import { mountPlayer } from '../engine/player.js';

/**
 * Boots the imperative player engine once, after React has committed the
 * static shell to the DOM. The engine then drives everything (scenes,
 * narration, captions, FX) by querying that markup directly.
 * Returns the engine's teardown so it is cleaned up if the app unmounts.
 */
export function usePlayer() {
  useEffect(() => mountPlayer(), []);
}
