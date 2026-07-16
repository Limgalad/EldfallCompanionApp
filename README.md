# Eldfall Chronicles Companion App

A companion web app for the **Eldfall Chronicles** tabletop skirmish game. It gives players a
fast, searchable reference for missions/quests, rules, spells, creatures, and quest schemes,
right at the table. Built as a full-stack Progressive Web App (PWA) so it can be installed and
used offline.

## Features

- **Quest Overview** — explore missions/quests across seasons, with setup steps and tactical maps
- **Rules Wiki** — searchable core rules, states, traits, skills, classes, and combat arts
- **Spell Book** — browse spells by school, element, and level
- **Bug Reporting** — in-app bug report form with optional SMTP email delivery
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

3. Create a `.env` file based on the template:

   ```bash
   cp .env.example .env
   ```

   (On Windows PowerShell: `Copy-Item .env.example .env`)

---

## Environment Variables

The app's only environment variables configure the bug-report emailer. All are optional in
development.

| Variable | Description | Default |
|---|---|---|
| `BUG_REPORT_EMAIL` | Recipient address for bug reports. | `koendeurloo1987@gmail.com` |
| `SMTP_HOST` | SMTP server host (e.g. `smtp.gmail.com`). If left blank and `SMTP_USER` is a `@gmail.com` address, Gmail's SMTP host is inferred automatically. | – |
| `SMTP_PORT` | SMTP server port. | `587` |
| `SMTP_USER` | Username for SMTP authentication. | – |
| `SMTP_PASS` | Password or app-specific password for SMTP authentication. | – |
| `SMTP_SECURE` | `true` for port `465` (SSL), `false` otherwise (TLS). | `false` |

**SMTP is optional in development.** If `SMTP_USER`/`SMTP_PASS` aren't set, submitted bug reports
are simply logged to the server console instead of emailed — the app still works normally, and
the user still sees a success message.

### SMTP setup with Gmail (example)

1. Enable 2-Step Verification on your Google Account.
2. Go to **Security → App passwords** in your Google Account, choose "Mail" and a custom device
   name (e.g. "Eldfall Companion"), and generate a 16-character app password.
3. Set in `.env`:
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-16-character-app-password
   SMTP_SECURE=false
   ```

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

Serves the compiled frontend as static files and runs the bug-report API from the bundled server.

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
