import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
// On GitHub Pages the site is served from https://<user>.github.io/dps/, so the
// production build needs base "/dps/". Dev keeps "/". Runtime asset paths use
// import.meta.env.BASE_URL so they resolve correctly under either base.
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/dps/' : '/',
}));
