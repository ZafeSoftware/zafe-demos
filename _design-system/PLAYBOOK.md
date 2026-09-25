# ZAFE DEMO PLAYBOOK — home-service sites
Read this whole file, open `references/INDEX.md`, and look at every reference image before writing code. If a brief says "restrained" or "minimal", **this playbook wins**. The Dylan's Fencing v1 (`references/20-ANTI-*`) was restrained, beige, and generic, and Zacky rejected it. The quality bar is `references/01-target-dribbble-skyline-fence.jpg`.

---
## 1. Philosophy (non-negotiable)
1. **Bold beats safe.** Use a dark, photo-led hero, a high-contrast accent colour, condensed ALL-CAPS display type, and full-width bands that alternate dark / light / tint / accent.
2. **Niche-specific.** Every section should look like it belongs to *this trade*. Take a real service name, a real town, and real photos. Test: swap in another business's name. If the page still works, it's too generic.
3. **Conversion first.** A call link and a primary CTA are in the first viewport at 390px and at 1440px. The CTA repeats at least every 2 sections. A sticky mobile call bar is required.
4. **Real > pretty.** Build around the business's own photos and facts, and make them look premium with treatments (§6). Never use stock or AI imagery as if it showed their work.
5. **Honest.** See §7. Keep the visual components and fill them with true content.
6. **Built from proven Zafe work.** Guardian Crawlspace and H.E. Douglas are real clients with real photos, and they are the best in the portfolio. Hugo Land Clearing, Kort Concrete, Hernandez and Garcia Fencing, 302 Tree, Ruiz, and Haynes provide the dark-hero system.

## 2. Required section order (home page)
| # | Section | Band | Must contain |
|---|---|---|---|
| 0 | Demo bar | black, 12px | "Demo preview by Zafe — …" (pipeline rule) |
| 1 | Top strip (optional) | accent | ONE real fact or offer, plus email |
| 2 | Header | white | logo or logo-tab wordmark, 5 anchors, "Call or text" phone block, dark pill CTA |
| 3 | **Hero** | dark | eyebrow pill, 2-tone H1 (white + accent line), 1–2 line lead, primary and phone CTAs, proof row, **stat badge** |
| 4 | Trust strip | ink-2, 3px accent top border | 4 icon + 2-word facts |
| 5 | Why choose us | white | photo with offset outline, **overlapping 2-up feature cards**, 3-item checklist, CTA |
| 6 | Services | dark + grain | numbered photo cards (01–0N); the lead service gets a wide card |
| 7 | Work: **before/after** (true pairs only) or editorial gallery | tint | captions naming the job |
| 8 | **Ticker band** | accent, 2px ink borders | services separated by ✱, scrolling at 32s |
| 9 | **Reviews carousel** (real) or the honest proof band | white | platform + name + date on each card |
| 10 | Process steps | dark | 01–04 steps (call → look/measure → written quote → build/clean up) |
| 11 | **Service area** chips + static map | tint | real towns/ZIPs/neighborhoods, hours table, SVG map (no iframes) |
| 12 | **Stats strip** | accent | 4 icon + big word/number items, all true |
| 13 | Quote CTA + form | dark | H2, phone/email alternatives, demo-only form |
| 14 | Footer | ink | wordmark, services, contact, socials, photo credit, Zafe link |

**Variants:** pick one and say which in your report.
- **A. "Dribbble classic"** (default; fencing, roofing): uses the angled split hero, light/dark alternation, and pill buttons. Refs 01, 09, 11, 12.
- **B. "All-dark heavy equipment"** (land clearing, tree, excavation, concrete): full-bleed photo hero with a 90° gradient, every band dark except the form, and square buttons. Refs 08, 13, 14.
- **C. "Real-photo stamp"** (many real but imperfect phone photos; contractors, remodelers, crawlspace): framed photos with hard offset shadows, rotated sticker tags, numbered service rows, mono/condensed stamp labels. Refs 02–07.

Allowed changes: drop sections 1, 7, or 9 only when you have zero honest content for them. Never drop 3, 4, 6, 10, 11, 13, or 14.

## 3. Typography
- Display: a **condensed caps** face with line-height .88–.95. Hero `clamp(2.9rem,6vw,5.4rem)`, H2 `clamp(2.2rem,4.2vw,3.5rem)`. Use `text-wrap:balance`.
- Two-tone headline: line 1 is white or ink, line 2 is `.accent`. This is the Zafe signature, used on every one of his best sites.
- Labels, buttons, and nav are condensed caps with .06–.18em tracking. Body text is a clean sans at 16–19px, in max 52ch paragraphs.
- Allowed: one italic serif accent word (Fraunces) in the landscaping preset. Nothing else decorative.
- Fonts are self-hosted woff2 (in `starter/fonts`, OFL). No CDN fonts. Preload only the display face.

| Preset (`data-preset`) | Display | Body | Label |
|---|---|---|---|
| `fencing` | Bebas Neue | Barlow | Oswald |
| `landscaping` | Barlow Condensed 800 (+ Fraunces italic word) | Inter | Barlow Condensed |
| `roofing` | Anton | Inter | Oswald |
| `contractor` | Oswald 700 | Inter | Space Mono (stamps) |
| `land` (tree/clearing) | Barlow Condensed 800 | Barlow | Barlow Condensed |

## 4. Palette rules
- Structure: **ink** (hero, dark bands) + **accent** (CTA, badge, ticker, stats strip) + white + one **tint** band. The accent covers about 10–15% of the page. Two neutrals, one accent, and no second loud colour.
- **Take the accent from the real brand** (logo, truck wrap, yard sign, shirts). Guardian's green and H.E. Douglas's red both come from their logos. The presets are fallbacks.
- Put accent-coloured text on light backgrounds only as `--accent-deep`, to meet WCAG AA.

| Preset | ink | accent | tint | Why |
|---|---|---|---|---|
| fencing | #141414 | #e2641f safety orange | #fbf1ec blush | Dribbble target |
| landscaping | #0b140d forest | #6fbf1f lime | #eff4e8 | Hugo, 302 Tree, Ruiz, JB |
| roofing | #0e1824 storm navy | #d8352a signal red | #eef1f4 | Haynes / Hedouglas red |
| contractor | #121214 charcoal | #c9471f rust | #ebeae6 bone | H.E. Douglas, Kort |
| land / tree | #0b0c09 iron | #f2b705 hi-vis yellow | #ecebe2 | Morris Land Mgmt |

Banned: purple/blue SaaS gradients, beige-everything, glassmorphism, blobs, emoji icons, and one-hue pages.

## 5. Component specs (implemented in `starter/css/site.css`)
- **Angled hero (A):** the photo panel is 56% wide. Put the clip-path mask on the **wrapper**, not the `<img>`, so zoom and pan work, plus a 16px accent slash beside the diagonal:
  ```css
  .hero--angled .hero__media{width:56%;overflow:hidden;clip-path:polygon(18% 0,100% 0,100% 100%,0 100%)}
  .hero--angled::before{content:"";position:absolute;inset:0 16px 0 auto;width:56%;background:var(--accent);
    clip-path:polygon(18% 0,calc(18% + 16px) 0,16px 100%,0 100%)}
  ```
  Below 900px it becomes a full-bleed photo with a dark gradient, and the CTAs stay above the fold.
- **Full-bleed hero (B)**, from Hugo/Kort:
  `linear-gradient(90deg,rgba(0,0,0,.96) 0%,rgba(0,0,0,.78) 34%,rgba(0,0,0,.15) 68%), linear-gradient(0deg,#080a07,transparent 28%)`. Add a grain overlay.
- **Framed hero (C)**, from Guardian: a 4:5 photo with `border:3px solid accent; box-shadow:12px 12px 0 rgba(0,0,0,.55)` and two rotated stickers (`rotate(-4deg)` and `3deg`, `border:2px solid ink; box-shadow:5px 5px 0 ink`).
- **Stat badge:** an accent box, 170px min-width, big display number plus a 2-line caption, sitting on the diagonal or the photo corner. The content must be true (§7).
- **Trust strip:** 4 columns (2 on mobile), an icon in the accent colour, a caps title and a small subline, with dividers.
- **Feature cards:** a white 2-up card overlapping the photo bottom by -36px, a round accent icon, and an 18px caps title.
- **Service card:** 400px tall, photo + `linear-gradient(180deg,transparent 30%,rgba(0,0,0,.9))`, number top-right, round icon top-left, title + 1 line + "Get a quote ↗". Hover scales the image 1.05.
- **Before/after:** a white card holding a 2-up 3:4 image pair, with a "Before" pill (white) and an "After" pill (accent) under a caption. **Only same-property pairs.**
- **Ticker:** `display:flex;width:max-content;animation:ticker 32s linear infinite` with `@keyframes ticker{to{transform:translateX(-50%)}}`. Duplicate the content once in JS. It pauses on hover and stops under `prefers-reduced-motion`. An optional `rotate(-1.2deg)` makes a tilted band.
- **Reviews carousel:** a scroll-snap track with `grid-auto-columns:min(86%,360px)` and round accent arrows. Cards carry stars, a verbatim quote, an initial avatar, name and date, and the platform.
- **Area chips:** 999px pills; the home city is filled with the accent colour. Next to them sit an hours table and an inline SVG map card with a pin label (no embeds).
- **Stats strip:** an accent band with 4 items, each a white round icon plus a big display word or number and a small caption.
- **Buttons:** 52px tall, condensed caps. The contractor preset uses a 4px radius and a hard `5px 5px 0 ink` offset (Guardian); the other presets use pills.
- **Motion:** reveal on scroll with opacity 0 → 1 and translateY 22px over .7s `cubic-bezier(.22,1,.36,1)`, staggered 80ms. Hover lift 2px. That's all. Respect reduced motion.
- **Spacing:** a 4pt scale (4/8/12/16/24/32/48/64/96/128). Section padding is `clamp(72px,9vw,120px)`, the container is 1200px, card radius is 10px (4px in the stamp style).

## 6. Photo handling (making phone photos look premium)
1. **Pick** the photo with the clearest finished work for the hero, and crop hard so the work fills 60%+ of the frame. Cut blown skies, trash cans, cars, and the photographer's shadow.
2. **Zoom and pan** in CSS instead of re-shooting: `object-position:55% 62%; transform:scale(1.35); transform-origin:55% 62%` (starter vars `--hero-focal`, `--hero-zoom`).
3. **One grade for every image** so mixed phones match: `filter:saturate(.9) contrast(1.06) brightness(.98)` (`--photo-filter`). Before that, pre-process with sharp: `.modulate({saturation:.9}).linear(1.06,-6).resize(1600)`, export WebP/AVIF plus a JPEG fallback, and keep the hero under 120KB at mobile width.
4. **Overlays:** a dark top gradient tames skies. A bottom gradient seats text. On dark bands, add a grain overlay at opacity .06–.07 (SVG feTurbulence, see `.grain`).
5. **Duotone** for weak or low-res shots: grayscale the photo, then add an `::after` in the accent colour with `mix-blend-mode:multiply` or `color`. Use it for backgrounds and ticker/CTA band backdrops, never for the hero work photo.
6. **Masks and frames:** an angled clip-path (hero), an offset outline (`::before inset:18px -18px -18px 18px; border:2px solid accent`), the hard-offset frame (C), and rotated stickers that also hide distractions.
7. **Aspect discipline:** 4:5 for portrait slots, 3:4 for before/after, 16:10 for maps. The gallery uses a mixed tall/wide grid with no holes (tall, wide, tall, wide).
8. **Captions everywhere:** caps label + specific job ("Side-by-side cedar fence with walk gate"). Captions make real photos read as a portfolio.

## 7. Honesty rules (hard fail if broken)
Never invent **reviews, ratings, star counts, years in business, project counts, license or insurance claims, warranties, awards, response times, prices, team bios**, or "free estimates" / "free quotes" (say these only if the business says so). No `aggregateRating` in JSON-LD unless the ratings are real and sourced. No 555 numbers or placeholder emails.
Note: some older Zafe demos (Hugo "15+ years", Kort "300+ projects / 5.0", GreenLine "640 properties / 98%", 555 phones) contain placeholder stats. **Copy their layout, never those numbers.**

**Same component, honest filler:**
| Component | If there's real data | If there isn't |
|---|---|---|
| Stat badge | "29 Years in business" | "77 Faves on Nextdoor", "Cedar specialists", "Open 6 days" |
| Trust strip | Licensed & insured (verified) | real services, home ZIP, "Written quotes", real hours |
| Proof row (Google/FB/Yelp) | platform logo + real rating/count | only platforms where they really exist, with no stars ("Find us on Nextdoor") |
| Reviews carousel | verbatim quotes with name, platform, date | **neighbor proof band** (`.neighbor-proof`: real Nextdoor Faves count + their own words from their listing), or drop the section. Never write samples |
| Before/after | same-property pairs | editorial gallery with captions |
| Stats strip | real numbers | true words: "Wood / Privacy fences", "San Antonio / Home base 78251", "6 days / Mon–Sat" |
| Area chips | towns they list | the city + real neighborhoods/ZIPs they state; else the city chip alone |
| Process | their stated process | generic but true: call → look & measure → written quote → build & clean up (no timelines) |
Before finishing, grep for leftovers: `[[`, `555`, `Lorem`, `example`, `Acme`, `your@email` (this is H.E. Douglas's `forbidden_terms.json` idea).

## 8. Mobile rules (390×844)
- In the first viewport: demo bar, header with phone (nowrap), H1, lead, primary CTA, and phone CTA. The sticky call bar (Call + Quote) is always there, and the body gets `padding-bottom:70px`.
- The hero becomes a full-bleed photo with a stronger gradient. The stat badge moves below the CTAs. Hide the top strip's email.
- Grids go to 1 column (trust strip and stats go to 2). Service cards stack; carousels swipe with no arrows. Tap targets are 44px or more, inputs are 16px (no iOS zoom), and there is no horizontal overflow.
- H1 stays at 46px or more, and never breaks one word per line.

## 9. Self-review — score your own screenshots before finishing
Take 1440 full, 1440 fold, 390 fold, and 390 full (`node qa/shots.js <url> <dir>`, or Playwright). Put them next to `references/01` and score each item 0–2. **Ship only at 17/20 or more, with no 0 on items 1, 2, 3, or 10.**
1. Hero: dark, photo-led, 2-tone condensed caps H1, CTA plus phone visible at both widths.
2. It looks like the Dribbble reference's *family*, not like `references/20-ANTI`: bold contrast, accent used, no beige template.
3. Niche-specific: real trade words, real town, real photos; the name-swap test fails.
4. All required sections are present, in order, with bands alternating (no two same-colour bands in a row except by design).
5. Stat badge, trust strip, ticker, and stats strip are present and legible.
6. Photos are graded consistently, cropped with intent, captioned, and free of blown skies or junk in frame.
7. Typography: display, label, and body roles are consistent, with no orphans or widows in headlines and max 52ch body.
8. Mobile: no overflow, call bar works, nothing overlaps, CTAs above the fold.
9. Motion is subtle: reveal plus ticker only, reduced-motion respected, no console errors.
10. **Honesty:** every number and claim traces to the brief, with no leftovers from the grep list.
List your scores in the final report, along with what you fixed after the first screenshot pass.

## 10. Build constraints (from the pipeline)
The site is static and served under `/<slug>/`, so use relative paths only. Also required: 404.html, noindex, one H1, real-facts-only JSON-LD, a demo-only form (preventDefault + message + noscript), no third-party scripts/CDN fonts/iframes, and Lighthouse mobile 90+. Start from `starter/`. It already meets all of these, and its preview passed shots.js.
