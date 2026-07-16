# Eldfall Chronicles Companion App

A companion web app for the **Eldfall Chronicles** tabletop skirmish game. It gives players a
fast, searchable reference for missions/quests, rules, spells, creatures, and quest schemes,
right at the table. Built as a static Progressive Web App (PWA) so it can be installed and
used offline.

## Features

- **Quest Overview** — explore missions/quests across seasons, with setup steps and tactical maps
- **Rules Wiki** — searchable core rules, states, traits, skills, classes, and combat arts
- **Spell Book** — browse spells by school, element, and level
- **PWA Support** — installable, with offline caching for previously visited content

---

## Prerequisites

- **Node.js** — a recent LTS release is recommended (the project's type definitions target
  Node 22; Node 20+ should work)
- **npm** (ships with Node)

---

## Installation

1. Clone the repository and enter the project folder:

   ```bash
   git clone <this-repo-url>
   cd EldfallCompanionApp
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

---

## Environment Variables

None — the app is a static site with no server-side configuration. (The local dev-server
port is set in `vite.config.ts`, not via an env file.)

---

## Running the App

| Command | What it does |
|---|---|
| `npm run dev` | Starts the Vite dev server at **http://localhost:3000** |
| `npm run build` | Builds the static site with Vite into `dist/` |
| `npm run preview` | Serves the built `dist/` locally to preview the production build |
| `npm run lint` | Runs ESLint and a TypeScript type check (`tsc --noEmit`) |
| `npm run test` | Runs the test suite once via Vitest |
| `npm run clean` | Removes the `dist/` build output |

### Development

```bash
npm run dev
```

Open **http://localhost:3000**. This is a pure client-side SPA — there is no backend server.

### Preview a production build

```bash
npm run build
npm run preview
```

`npm run build` emits the static site to `dist/`; `npm run preview` serves that output locally
so you can check the production bundle (including the PWA service worker) before deploying.

---

## Deployment

The app is a static site, deployed to **Cloudflare Pages** (free tier). Build command
`npm run build`, output directory `dist/`. SPA routing (`public/_redirects`) and security
headers (`public/_headers`) ship in the build output automatically.

See **[Docs/DEPLOY_CLOUDFLARE.md](Docs/DEPLOY_CLOUDFLARE.md)** for the full walkthrough,
including custom-domain setup.

---

## Linting & Testing

```bash
npm run lint    # ESLint + TypeScript type check
npm run test    # Vitest
```

The suite currently has 35 tests across `src/utils/*.test.ts` and a component test, with the
Vitest setup file at `src/setupTests.ts`.

---

## PWA Notes

- The app is installable (manifest + service worker via `vite-plugin-pwa`) and caches previously
  visited pages/assets for offline use.
- The service worker updates automatically and cleans up outdated caches on activation.
- PWA behavior is **disabled during `npm run dev`** — to verify install/offline behavior, use a
  production build (`npm run build` followed by `npm run preview`).

---

## Project Data

All game content (missions, rules, spells, creatures, quest schemes) is maintained as
hand-written TypeScript under `src/data/`, sourced from the human-readable rules transcription in
`rules/`. There is no external database.

---

## License

© 2026 Eldfall Chronicles Companion. All rights reserved. Created for the Eldfall Community.

## Contact

Owner: Koen Deurloo — kdeurloo@clixz.nl / koendeurloo1987@gmail.com
