# LinkedIn — The Platform That Sells You

A self-contained explainer-video web app that takes LinkedIn apart through the
lens of platform economics (multi-sided markets, network effects, governance,
winner-take-all, …), with a recurring "Lena" story interleaved between the
analytical scenes. Narration uses the browser's built-in speech synthesis;
captions are word-synced; every scene shows its academic sources on screen.

This is a modular **Vite + React** rewrite of the original single-file
`linkedin.html` (preserved under [`original/`](original/)). The visible result
is identical — the proven playback engine was kept intact and only the
structure around it was modularised.

## Quick start

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production bundle in dist/
npm run preview  # serve the production build locally
```

> Best experienced with sound on. If your browser has no speech voice, the
> captions carry the full script and scenes advance on a timer.

## How it's put together

React renders the **static shell** once (header, the 16:9 frame, transport
controls). After mount, a small hook boots the original **imperative engine**,
which builds every scene into the stage and drives all playback by querying the
DOM directly. React owns the markup; the engine owns the behaviour — they don't
conflict because nothing re-renders after the first mount.

```
index.html                 Vite entry → mounts #root
src/
  main.jsx                 React root + global stylesheet imports
  App.jsx                  Composes the shell, calls usePlayer()
  hooks/
    usePlayer.js           Boots the engine after React mounts the shell
  components/              The static shell (render-once, no state)
    AmbientCanvas.jsx        Fixed background network animation
    Frame.jsx                The "video" frame + overlays (Hud, Thread)
    Hud.jsx                  The LinkedIn brand mark (top-right only)
    Thread.jsx               The per-scene question, shown as a title
    Caption.jsx              Subtitle band — rendered BELOW the frame (in App)
    Controls.jsx             prev/play/next, time, voice + caption toggles
  engine/
    player.js              ★ The playback engine (ported + wrapped)
    ambient.js             The background canvas animation
  data/                   ← edit these to change the video's content
    scenes.js                All 17 scenes in playback order: the 14 analytical
                             scenes (scene 01 = visual intro) plus the 3 inlined
                             "Lena" interludes (story:true)
    steps.js                 Per-point reveal steps & narration (scenes 03–14)
    config.js                Narration pace (WPM) and inter-point padding
  styles/
    fonts.css              Bundled webfonts (see "Fonts" below)
    app.css                Design tokens + all component styling (verbatim)
    theme-flat.css         The flat green/Arial theme — wins the cascade
    icons.css              CSS-mask SVG icon set (.ico / .ico-*) — replaces glyphs
    root.css               Layout shim so #root is transparent to the layout
    redesign.css           ★ Redesign overrides (loaded LAST): border, larger
                           text, reveal rules, prominent question, photo avatars
public/fonts/             16 woff2 files referenced by fonts.css
public/images/            Character stock photos (lena, marco, anna, tom, sara)
original/linkedin.html    The original single-file build, for reference
```

★ `engine/player.js` is the original engine, lightly adapted: the
scene/step/timing **data moved into `src/data/`**, it is wrapped in
`mountPlayer()` (run once, with a teardown), and the start screen + segmented
scrubber were removed. The playback logic — speech, word-synced captions, the
progress clock, count-up stats, bar/meter fills, the network connectors
(`drawNet`), and the per-point spotlight — is otherwise unchanged.

**Playback & reveal model.** There is no landing screen: the bottom Play button
starts the intro. Every scene defines `steps` (point-by-point), and content is
revealed gradually — future points are completely invisible, the current point
is clean (no outline), and past points are slightly greyed. The `.src` citation
rail and prev/next walk through these points; ← / → and space also control them.

## Editing the content (the common case)

Almost everything you'd want to change lives in `src/data/`:

- **Scene text, headings, on-screen elements** → `src/data/scenes.js`.
  Each scene is an object: `no`, `kick` (HUD label), `thread` (the red
  investigation line, or `null` to hide it), `html` (the scene markup as a
  template string), and `narration` (what the voice reads / the fallback
  caption). Edit the `html` and `narration` and the change shows on save.
- **The "Lena" interludes** also live in `src/data/scenes.js`, inlined at their
  playback positions (after scenes 05, 09 and 13). They are marked `story:true`
  with `no:"✦"` and carry their own `steps`; move one by relocating its object
  within the array.
- **The synced "points"** within a scene → `src/data/steps.js`. Each point is
  `{ sel, say }`: `sel` is a CSS selector inside the scene (`'.stat@2'` means
  "the 3rd `.stat`"), `say` is the narration spoken while that point is
  spotlighted. The keys map to scene numbers via `STEPS_BY_NO`.
- **Pacing** → `src/data/config.js` (`WPM` words-per-minute and `PAD` ms of
  padding added to each point's estimated duration).

Styling lives in `src/styles/`. `app.css` is the full original stylesheet
(design tokens + every component). `theme-flat.css` is layered **last** and
deliberately overrides everything to the flat, Arial, green/orange look — so
that's usually the file to touch for colours and typography.

## Fonts

The original bundles Fraunces, Hanken Grotesk and JetBrains Mono (extracted to
`public/fonts/` as real `.woff2` files and declared in `styles/fonts.css`).
However, `theme-flat.css` remaps every font variable to **Arial**, so those
webfonts are loaded but not displayed — matching the original's rendered
output exactly. To restore the richer typography, remove the
`--display/--serif/--sans/--mono` overrides in `theme-flat.css`.

## Notes

- The app is intentionally **not** wrapped in `<React.StrictMode>`: the engine
  is imperative and mounts once, and StrictMode's dev double-invoke would build
  the scene DOM twice. `mountPlayer()` also guards against a double mount.
- The original file is kept at `original/linkedin.html` purely for reference;
  nothing in the app depends on it, and it can be deleted.
