# Eldfall Chronicles Companion App — CLAUDE.md

## Project Overview

A companion app for the **Eldfall Chronicles** tabletop skirmish game. Provides players with a
searchable quick-reference for missions/quests, rules, spells, creatures, and quest schemes.
Built as a PWA (Progressive Web App): an Express server serves the React SPA — the backend is
now just static file serving plus a `/api/health` check (the bug-report feature was removed).

- **package.json version**: `1.1.0` (source of truth)
- **Note**: the UI itself is inconsistent about its own version — the header button in
  `src/App.tsx` shows `v2.0.0` while the footer shows `Version 1.1.0`. This is a known,
  unresolved discrepancy (see `Docs/CODEBASE_EVALUATION.md`) — don't treat either on-screen
  string as authoritative; `package.json` is.
- **Owner**: Koen Deurloo (kdeurloo@clixz.nl / koendeurloo1987@gmail.com)

---
## Use Agent

Use `.claude/agents/` when making changes, choosing the agent flow that fits the job (e.g., tester.md to test the code and program, developer.md to write the code, etc.).
---
## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 19, TypeScript 5.8, Tailwind CSS v4, React Router (`react-router-dom`) v7 |
| Animations | Motion (`motion/react`, formerly Framer Motion) |
| Icons | Lucide React |
| SEO | `react-helmet-async` (`MetaTags.tsx`) |
| Backend | Express 4 (`server.ts`) |
| Build | Vite 6 (frontend), esbuild (server bundle) |
| PWA | vite-plugin-pwa v1 (`autoUpdate` strategy) |
| Testing | Vitest, @testing-library/react, jsdom |
| Linting | ESLint 10, typescript-eslint, `tsc --noEmit` |

`@google/genai` is a listed dependency and `GEMINI_API_KEY` is wired into `vite.config.ts` via
`define`, but **no code in `src/` currently imports or uses it** — treat any Gemini/AI feature
as dead/unimplemented, not a working part of the app.

---

## Commands

```bash
npm run dev       # Start dev server (tsx server.ts -> Express + Vite middleware, no HMR)
npm run build     # Build frontend (Vite) + bundle server (esbuild -> dist/server.js)
npm run start     # Run production server (NODE_ENV=production node dist/server.js)
npm run preview   # Preview production Vite build
npm run lint      # ESLint + TypeScript type check (tsc --noEmit)
npm run test      # Vitest run (33 tests across src/utils/*.test.ts — see Testing section)
npm run clean     # Remove dist/
```

Dev server runs at **http://localhost:3000** (hardcoded `PORT = 3000` in `server.ts`, not
configurable via env). Express serves `/api/*` itself and delegates everything else to Vite's
dev middleware (`appType: "spa"`). Both dev (`server.ts`) and Vite (`vite.config.ts`) explicitly
disable HMR and file watching (`hmr: false, watch: null`) — changes may require a manual reload
or server restart.

---

## Architecture

```
EldfallCompanionApp/
├── server.ts                # Express server (dev + prod), health check, static serving
├── vite.config.ts           # Vite + Tailwind v4 + PWA + Vitest config
├── tsconfig.json            # strict mode is OFF; target ES2022, moduleResolution bundler
├── index.html               # HTML entry point, SEO meta tags, GA4 tag
├── check.ts                 # Ad hoc scratch script at repo root (not part of app runtime)
├── src/
│   ├── main.tsx              # React entry: StrictMode, HelmetProvider, BrowserRouter
│   ├── App.tsx                # Routing, HomePage, global header
│   ├── types.ts                # Shared TS types (SearchCategory, SelectedItem, KeywordItem)
│   ├── vite-env.d.ts
│   ├── index.css              # Global Tailwind + custom design tokens/utility classes
│   ├── components/
│   │   ├── MissionOverview.tsx      # Quest browser (season selector + mission/scheme/creature routes)
│   │   ├── RulesWiki.tsx            # Searchable rules database with detail modals
│   │   ├── SpellBook.tsx            # Spell reference (by school/element/level)
│   │   ├── ChangelogModal.tsx       # App changelog display
│   │   ├── MetaTags.tsx             # Per-page SEO meta tags (react-helmet-async)
│   │   ├── ScrollToTop.tsx          # Floating scroll-to-top button
│   │   ├── missions/
│   │   │   ├── MissionDetailView.tsx  # Full mission detail (setup, rules, map)
│   │   │   ├── CreaturesModal.tsx     # Creature database modal
│   │   │   ├── SchemesModal.tsx       # Quest schemes modal (filterable by faction)
│   │   │   └── CollapsibleSection.tsx
│   │   └── wiki/
│   │       ├── RichText.tsx           # Renders rich text with keyword linking/tooltips
│   │       └── DetailViewComponents.tsx
│   ├── data/                          # ALL game data — hardcoded TypeScript, no database
│   │   ├── missions.ts                 # Mission data, Season 1 + Season 2
│   │   ├── creatures.ts                # Creature stat blocks
│   │   ├── schemes.ts                  # Quest schemes (by faction)
│   │   ├── rules.ts                    # Thin re-export shim: `export * from "./rules/index"`
│   │   ├── spells.ts                   # Thin re-export shim: `export * from "./spells/index"`
│   │   ├── rules/
│   │   │   ├── index.ts                 # Re-exports all rules data
│   │   │   ├── types.ts                 # RuleSection, State, Trait, Skill, etc.
│   │   │   ├── core.ts                  # Core mechanics (large file, ~46k chars)
│   │   │   ├── classes.ts               # Class definitions
│   │   │   ├── skills.ts                # Skill list
│   │   │   ├── traits.ts                # Trait list
│   │   │   ├── states.ts                # States & conditions
│   │   │   ├── combat_arts.ts           # Combat art categories
│   │   │   └── keywords.ts              # Keyword reference (also hand-duplicated in RichText.tsx — see note below)
│   │   └── spells/
│   │       ├── index.ts                 # Re-exports spell data
│   │       ├── schools.ts               # All spells by school (large file, ~35k chars)
│   │       └── types.ts                 # Spell types
│   └── utils/
│       ├── search.ts                   # Search logic (fuzzy + category filter)
│       └── rulesGuards.ts              # TypeScript type guards for rules data
├── public/
│   ├── icon.svg                       # App icon (PWA)
│   ├── manifest.json                  # PWA manifest
│   ├── robots.txt / sitemap.xml       # SEO
│   ├── _redirects                     # Netlify-style SPA redirect (`/* -> /index.html 200`)
│   └── map_*.png                      # Tactical mission maps (one per mission with a map)
├── rules/                             # Human-readable source-of-truth markdown for game rules
│   ├── README.md                       # Explains editing conventions and file map for this folder
│   ├── Core_Game_Elements.md, Game_Play.md, Game_Sequence.md, Actions.md,
│   │   Movement.md, Playing_the_Game.md, Rules_in_General_Effect.md,
│   │   Environments.md, mounted_rules.md
│   ├── classes.md, traits.md, skills.md, states.md, combat_arts.md, spellbook.md
│   ├── Hostiles.md, Hostile_Cards.md
│   └── competitive_quests_season1.md, Competitive_Quest_Season2.md, bonus_schemes.md, Quest_Archives.md
├── Docs/
│   └── CODEBASE_EVALUATION.md          # Standing audit/backlog (architecture, quality, security, rules-fidelity)
├── .claude/agents/                     # Subagent team (architect, programmer, tester, security, rules-reader, etc.)
└── dev-dist/                           # PWA service worker output (auto-generated, dev)
```

**Do not re-read `src/data/rules/core.ts` or `src/data/spells/schools.ts` in full unless you
need their entire contents** — both are large single files; prefer `Grep` to locate the specific
entry you need first.

---

## Routes

Defined in `src/App.tsx` via `react-router-dom`. All non-home routes are lazy-loaded.

| Path | Component | Notes |
|---|---|---|
| `/` | `HomePage` (in `App.tsx`) | Landing page with navigation tiles |
| `/missions` | `MissionOverview` | Quest browser (Season 1 + Season 2) |
| `/missions/:missionId` | `MissionOverview` → `MissionDetailView` | `missionId` of `schemes`/`creatures` opens those modals instead |
| `/missions/v/:view` | `MissionOverview` | Alternate view param (`schemes`/`creatures`) |
| `/rules` | `RulesWiki` | Searchable rules wiki |
| `/rules/:category` | `RulesWiki` | Deep link to a rules category |
| `/rules/:category/:id` | `RulesWiki` | Deep link to a specific rule entry |
| `/spellbook` | `SpellBook` | Spell reference by school |
| `/spellbook/:school` | `SpellBook` | Deep link to a school |
| `/spellbook/:school/:spellId` | `SpellBook` | Deep link to a specific spell |

---

## API Endpoints

Defined in `server.ts`.

| Method | Path | Description |
|---|---|---|
| GET | `/api/health` | Health check — returns `{ status: "ok", timestamp }` |

---

## Environment Variables

Copy `.env.example` to `.env` to override defaults. The app has a single, optional variable:

```env
PORT=3000   # Port the Express server listens on (optional; defaults to 3000)
```

`GEMINI_API_KEY` is read by `vite.config.ts` (`loadEnv` + `define`) but is **not present in
`.env.example`** and is not consumed by any current app code — it exists only as unused plumbing.
If it is ever wired up, note that `define` inlines it into the client bundle, exposing it
publicly; it should not be treated as a server-side secret in its current wiring.

---

## Data Layer Notes

- All game data is **hardcoded TypeScript** in `src/data/`. There is no runtime database.
- The `rules/` markdown directory is the **human-readable source of truth** for game rules
  (see `rules/README.md` for editing conventions); the TypeScript in `src/data/rules/` is
  derived from it and should be kept in sync when the markdown changes.
- `src/data/rules.ts` and `src/data/spells.ts` are thin re-export shims over
  `src/data/rules/index.ts` and `src/data/spells/index.ts` respectively — import from either,
  but prefer the shim paths since that's what existing components use.
- `src/data/rules/core.ts` (~46k chars) and `src/data/spells/schools.ts` (~35k chars) are large;
  use `Grep` to jump to the entry you need rather than reading the whole file.
- Known rules-fidelity gaps exist between `rules/*.md` and `src/data/` (e.g. the `Confused`
  state and `Anointment` spell type) — see `Docs/CODEBASE_EVALUATION.md` section 6 before
  trusting either side blindly for edge cases.
- `src/components/wiki/RichText.tsx` maintains its own `keywordToRuleId` map that duplicates
  `src/data/rules/keywords.ts` — the two lists are hand-synced, not derived from one another.

---

## Testing

Tests live alongside source (Vitest + jsdom + @testing-library/react), with a setup file
configured at `src/setupTests.ts` in `vite.config.ts` (`test.setupFiles`). `src/setupTests.ts`
imports `@testing-library/jest-dom`.

Current suite: 33 tests across two files —

- `src/utils/search.test.ts` (19 tests)
- `src/utils/rulesGuards.test.ts` (14 tests)

`npm run test` runs the full suite via `vitest run` and currently passes.

```bash
npm run test      # vitest run
```

---

## PWA

- Uses `vite-plugin-pwa` with `registerType: 'autoUpdate'`, `clientsClaim: true`, and
  `skipWaiting: true`.
- Service worker auto-updates; outdated caches are cleaned on activation
  (`cleanupOutdatedCaches: true`).
- Workbox `globPatterns` cache `**/*.{js,css,html,ico,png,svg,woff2}`; tactical map images are
  covered by this.
- Google Fonts requests are cached separately with `CacheFirst` (1 year expiry).
- PWA is **disabled in dev** (`devOptions.enabled: false`) to avoid conflicts with the dev server.

---

## Other Conventions

- TypeScript `strict` mode is **off** (`tsconfig.json`) — be extra careful with `null`/`undefined`
  and don't assume the compiler will catch unsafe index access or unchecked unions.
- ESLint's `no-explicit-any` and `no-unused-vars` are configured as **warnings**, not errors —
  `npm run lint` can pass with both present.
- `.claude/agents/` contains a subagent team for this repo (architect, programmer, tester,
  security, rules-reader, refactoring, designer, documentation, qa, product-owner) — see
  `.claude/agents/README.md` for their roles before spinning up ad hoc subagents that duplicate them.
- `Docs/CODEBASE_EVALUATION.md` is a standing, dated audit with a severity-tagged backlog; check
  it for known issues before re-diagnosing something from scratch.
