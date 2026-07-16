# Eldfall Chronicles Companion App

A companion web app for the **Eldfall Chronicles** tabletop skirmish game. It gives players a
fast, searchable reference for missions/quests, rules, spells, creatures, and quest schemes,
right at the table. Built as a full-stack Progressive Web App (PWA) so it can be installed and
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

3. (Optional) Create a `.env` file if you want to override the default port:

   ```bash
   cp .env.example .env
   ```

   (On Windows PowerShell: `Copy-Item .env.example .env`)

---

## Environment Variables

The app has a single, optional environment variable.

| Variable | Description | Default |
|---|---|---|
| `PORT` | Port the Express server listens on. | `3000` |

A `.env` file is not required — the app runs on the default port out of the box.

---

## Running the App

| Command | What it does |
|---|---|
| `npm run dev` | Starts the dev server (Express + Vite middleware) at **http://localhost:3000** |
| `npm run build` | Builds the frontend with Vite and bundles the server with esbuild into `dist/` |
| `npm run start` | Runs the production build (`NODE_ENV=production node dist/server.js`) — run `npm run build` first |
| `npm run preview` | Serves the built frontend locally via Vite's preview server (frontend only, no Express API) |
| `npm run lint` | Runs ESLint and a TypeScript type check (`tsc --noEmit`) |
| `npm run test` | Runs the test suite once via Vitest |
| `npm run clean` | Removes the `dist/` build output |

### Development

```bash
npm run dev
```

Open **http://localhost:3000**. The Express server handles `/api/*` requests directly and hands
everything else off to Vite's dev middleware.

### Production

```bash
npm run build
npm run start
```

Serves the compiled frontend as static files from the bundled Express server (which also exposes the `/api/health` check).

---

## Linting & Testing

```bash
npm run lint    # ESLint + TypeScript type check
npm run test    # Vitest
```

Note: at the time of writing there are no test files in the project and the Vitest setup file
referenced in `vite.config.ts` (`src/setupTests.ts`) does not yet exist — it will need to be
created before `npm run test` is meaningful.

---

## PWA Notes

- The app is installable (manifest + service worker via `vite-plugin-pwa`) and caches previously
  visited pages/assets for offline use.
- The service worker updates automatically and cleans up outdated caches on activation.
- PWA behavior is **disabled during `npm run dev`** — to verify install/offline behavior, use a
  production build (`npm run build` followed by `npm run start` or `npm run preview`).

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
