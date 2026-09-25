# AGENTS.md — instructions for every agent working in this repo

This repo hosts sales-demo websites for the web agency **Zafe** (zafe.dev). Each demo is
built for a real local business and sent to a prospective client, so the design bar and
the honesty bar are both high.

## Repo layout
- Each demo lives in its own **top-level folder** (e.g. `dylans-fencing/`), and is a
  self-contained static site deployed under `https://zafe-demos.pages.dev/<folder-name>/`.
- `_design-system/` is shared infrastructure for every demo in this repo. It is not a demo
  itself — never deploy it, and never delete or rename it without being asked to.

## Before you design or build anything
1. Read `_design-system/PLAYBOOK.md` **in full**.
2. Open and look at **every image** in `_design-system/references/`, including the
   `20-ANTI-*` example of what NOT to do.
3. **Follow the playbook.** If the brief you were given asks for a "restrained," "minimal,"
   "safe," or otherwise toned-down look, ignore that part of the brief — the playbook's
   bold, niche-specific, dark/accent aesthetic wins. The playbook exists because a prior,
   restrained demo was rejected by the agency owner as generic and templated.

## Building a new demo
- Start from `_design-system/starter/` (plain HTML/CSS/JS, self-hosted OFL fonts, all
  components from the playbook already implemented) **unless the brief explicitly says
  otherwise**. Copy it into the new top-level folder and fill in real content.
- Use only the business's own verified facts and photos. Never invent reviews, ratings,
  years in business, job counts, licenses, insurance, warranties, pricing, or "free
  estimates" unless the source data says so. See PLAYBOOK.md §7 for the full honesty
  rules and the honest fallback for every component.
- Each demo must work when served from its subpath (e.g. `/dylans-fencing/`): relative or
  `/<folder-name>/`-prefixed paths only, no CDN fonts, no external scripts, no iframes.
- Never commit `node_modules`, build caches, or other generated artifacts — see
  `.gitignore`. If you use a build tool, commit source only.
- Before finishing, run the playbook's self-review (PLAYBOOK.md §9): take screenshots at
  1440px and 390px, score honestly against the 10-item rubric, and iterate until you reach
  at least 17/20 with no zero on items 1, 2, 3, or 10. Also run the leftovers grep
  (`[[`, `555`, `Lorem`, `Acme`, etc.) before calling a demo done.
