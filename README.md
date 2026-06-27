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
    Frame.jsx                The "video" frame + the Hud brand mark
    Hud.jsx                  The LinkedIn brand mark (top-right only)
    Caption.jsx              Subtitle band — rendered BELOW the frame (in App)
    Controls.jsx             prev/play/next, time, voice + caption toggles
  engine/
    player.js              ★ The playback engine (ported + wrapped)
  data/                   ← edit these to change the video's content
    scenes.js                Every scene in playback order: big centered QUESTION
                             scenes (q:true) + sparse content scenes + the 3
                             "Lena" interludes (story:true) + a closing thank-you
    steps.js                 Per-point reveal steps & narration (analytical scenes)
    config.js                Narration pace (WPM) and inter-point padding
  styles/
    app.css                The single flat design system (tokens + every component)
    icons.css              CSS-mask SVG icon set (.ico / .ico-*) — replaces glyphs
    root.css               Layout shim so #root is transparent to the layout
public/images/            Character stock photos (lena, marco, anna, tom, sara)
original/linkedin.html    The original single-file build, for reference
```

★ `engine/player.js` is the original engine, lightly adapted: the
scene/step/timing **data moved into `src/data/`**, it is wrapped in
`mountPlayer()` (run once, with a teardown), and the start screen + segmented
scrubber were removed. The playback logic — speech, word-synced captions, the
progress clock, count-up stats, bar/meter fills, the network connectors
(`drawNet`), and the per-point spotlight — is otherwise unchanged.

**Playback model.** It plays like a video: a big centered **question** scene
poses each beat, then a sparse content scene answers it with a large visual and
minimal on-screen text (the prose lives in the voiceover, not on screen). The
`.src` citation rail stays on screen the whole time. There is no landing screen
(the bottom Play button starts it) and no references scene — the full source
list is provided separately; the video closes with a thank-you.

On scenes that define `steps`, content reveals point-by-point — future points
invisible, current point clean (no outline), past points greyed; ← / → and
space walk through them.

## Editing the content (the common case)

Almost everything you'd want to change lives in `src/data/`:

- **Scene text, headings, on-screen elements** → `src/data/scenes.js`.
  Each scene is an object: `no`, `kick` (the controls label), `html` (the scene
  markup as a template string), and `narration` (what the voice reads / the
  fallback caption). A question scene additionally sets `q:true` (centers a
  single big `.bigq`); a Lena interlude sets `story:true`. Edit the `html` and
  `narration` and the change shows on save.
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

Styling lives in `src/styles/app.css` — a single flat design system (tokens +
every component). It is the only theme: the former layered base + flat-theme +
redesign-override stylesheets were merged here and all pre-redesign rules
removed. Colours and type live in the `:root` tokens at the top of the file.

## Fonts

The design uses **Arial** throughout (one typeface, set via the `:root` font
tokens) — no webfonts are bundled or loaded.

## Notes

- The app is intentionally **not** wrapped in `<React.StrictMode>`: the engine
  is imperative and mounts once, and StrictMode's dev double-invoke would build
  the scene DOM twice. `mountPlayer()` also guards against a double mount.
- The original file is kept at `original/linkedin.html` purely for reference;
  nothing in the app depends on it, and it can be deleted.
