# Zafe demo starter (plain HTML + CSS, no build step)
- `index.html` — full home-service skeleton; every business fact is a `[[TOKEN]]`. Before shipping: `grep -n '\[\[' index.html` must return nothing.
- `css/tokens.css` — fonts + 5 presets via `<html data-preset="fencing|landscaping|roofing|contractor|land">`. Override `--accent`/`--ink` with real brand colours.
- `css/site.css` — all components (hero variants, trust strip, why-us, service cards, before/after, gallery, ticker, reviews carousel, honest proof band, process, area chips + SVG map, stats strip, quote form, footer, mobile call bar).
- `js/site.js` — nav, reveal, ticker loop, carousel arrows, demo-only form (never sends).
- `fonts/` — self-hosted OFL woff2 + `OFL-LICENSES.txt`. All paths relative → works under `/<slug>/`.
- `img/` — put processed real photos here: hero.jpg, why.jpg, svc-1..3.jpg, g-1..4.jpg, before-/after-N.jpg.
- `preview-*.jpg` — the starter filled with Dylan's Fencing's real facts/photos (honest mode: no reviews → proof band; no before/after pairs → gallery). Passed shots.js: no overflow, tel above fold, demo label visible, form sends nothing, 0 console errors.
Astro/Tailwind users: copy the token values into `@theme { --color-accent: …; --font-display: … }` and keep the class names/structure.
