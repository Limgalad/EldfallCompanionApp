# Eldfall Companion — Codebase Evaluation & Improvement Plan

_Generated 2026-07-03. A snapshot audit of architecture, quality, security, rules-fidelity,
and documentation, plus a prioritized backlog routed to the [agent team](../.claude/agents/README.md)._

---

## Executive summary

The app is a **well-architected React 19 SPA** with a clean route-driven design, a uniform
Tailwind design system, and a **high-fidelity** transcription of the game rules into typed
data.

**Update 2026-07-04 — the entire P0/P1/P2 backlog below is now DONE.** Test harness bootstrapped
(35 passing tests), bug-report endpoint hardened (signed CAPTCHA + rate limiting + body caps),
`GEMINI_API_KEY` bundle leak removed, `strict` mode enabled, version strings reconciled, the
data-vs-rules mismatches fixed, a React error boundary added, tooltip lookups fixed, components
de-duplicated, and Express hardened with `helmet`. Verified via lint + tests + build + a live
production smoke test. What remains are four **owner-decision** items (PII email fallback, rules
corpus duplication/typos/spelling) — see the end of the backlog. The original findings are kept
below, struck through with their resolution, for traceability.

**Update 2026-07-16 — bug-report feature removed.** The in-app bug reporter and its server
endpoints (`POST /api/report-bug`, `GET /api/captcha`) were removed entirely, along with
`nodemailer` and all SMTP/CAPTCHA env vars, so the app can be hosted as a static site with only
an optional server. The §5 security findings about the CAPTCHA / rate-limiting and the hardcoded
PII email fallback are therefore **moot** — that attack surface no longer exists.

Severity legend: 🔴 high · 🟠 medium · 🟡 low

---

## 1. Architecture

| Sev | Finding | Location | Owner |
|---|---|---|---|
| 🟡 | Clean, lazy-loaded, URL-as-state routing — a genuine strength, no change needed | `src/App.tsx:15-101` | — |
| 🟠 | `keywordToRuleId` map (~120 entries) in a component duplicates `keywords.ts` — two hand-synced lists | `src/components/wiki/RichText.tsx:18-134` vs `src/data/rules/keywords.ts` | refactoring |
| 🟡 | Server port hardcoded, not overridable for deploy | `server.ts:28` | programmer |
| 🟡 | HMR + file watching disabled in dev (`hmr:false, watch:null`) — confirm not a stale workaround | `vite.config.ts:105-106`, `server.ts:105-106` | architect |
| 🟡 | `check.ts` leftover scratch script committed at root | `check.ts:1-8` | refactoring |

## 2. Code quality

| Sev | Finding | Location | Owner |
|---|---|---|---|
| ✅ | ~~TypeScript `strict` not enabled~~ — **DONE 2026-07-04**: full `strict: true`, only 2 errors surfaced, both fixed properly | `tsconfig.json` | programmer |
| ✅ | ~~Pervasive `as SelectedItem`/`as KeywordItem` casts~~ — **DONE 2026-07-04**: replaced with typed `switch` builders in `rulesGuards.ts` + `satisfies`; zero casts remain in src | `RulesWiki.tsx`, `RichText.tsx`, `rulesGuards.ts` | refactoring |
| ✅ | ~~Version string inconsistent & user-visible~~ — **DONE 2026-07-04**: header now `v1.1.0`, footer `1.1.0`; ChangelogModal `2.0.0` left as historical entry | `App.tsx:45` | documentation |
| ✅ | ~~Fragile first-word tooltip matching~~ — **DONE 2026-07-04**: full-name `normalizeKey` match (strips level/parenthetical) | `MissionOverview.tsx` | programmer |
| ✅ | ~~Combat Arts looked up as `'trait'`~~ — **DONE 2026-07-04**: added `'combatArt'` branch resolving category+level | `MissionDetailView.tsx`, `CreaturesModal.tsx` | programmer |
| ✅ | ~~Large duplicated components (9 tab blocks; creature markup)~~ — **DONE 2026-07-04**: data-driven `tabConfigs`; shared `CreatureCard` (variant prop) | `RulesWiki.tsx`, `CreatureCard.tsx` | refactoring |
| ✅ | ~~Duplicate `TabButton`~~ — **DONE 2026-07-04**: extracted shared `TabButton.tsx` (props for the real per-caller differences) | `TabButton.tsx` | refactoring |

## 3. Maintainability

| Sev | Finding | Location | Owner |
|---|---|---|---|
| ✅ | ~~No tests anywhere, and `setupFiles` missing~~ — **DONE 2026-07-04**: added `src/setupTests.ts` + 33 tests for `search.ts`/`rulesGuards.ts` (all green) | `src/setupTests.ts`, `src/utils/*.test.ts` | tester |
| ✅ | ~~No React error boundary~~ — **DONE 2026-07-04**: `ErrorBoundary.tsx` wraps `<App/>` in `main.tsx`, themed fallback + reload, 2 tests | `src/components/ErrorBoundary.tsx`, `src/main.tsx` | programmer |
| ✅ | ~~Unused `@google/genai` + Gemini plumbing~~ — **DONE 2026-07-04**: dep uninstalled, `define` block removed | `package.json`, `vite.config.ts` | refactoring / security |

## 4. Consistency

| Sev | Finding | Location | Owner |
|---|---|---|---|
| ✅ | ~~Mixed single/double quotes; no ESLint `quotes` rule~~ — **DONE 2026-07-04**: added `quotes: double` rule + `eslint --fix` normalized 14 files | `eslint.config.js` | refactoring |
| 🟡 | `no-explicit-any` / `no-unused-vars` are warnings, not errors | `eslint.config.js:26-27` | programmer |
| 🟡 | Tailwind usage is uniform & well-abstracted — a strength | `src/index.css` tokens | — |

## 5. Security

| Sev | Finding | Location | Owner |
|---|---|---|---|
| ✅ | ~~CAPTCHA bypassable; no rate limiting → email-flood vector~~ — **DONE 2026-07-04**: server-signed HMAC CAPTCHA token (`GET /api/captcha`, 5-min expiry, timing-safe verify), per-IP rate limiting (5 reports/hr), 16kb body cap + 5000-char report cap | `server.ts`, `src/App.tsx` | security → programmer |
| ✅ | ~~`GEMINI_API_KEY` inlined into client bundle~~ — **DONE 2026-07-04**: `define` removed, dep dropped | `vite.config.ts` | security → programmer |
| ☑️ | **Hardcoded personal email fallback** — owner decision 2026-07-04: **keep the fallback** (accepted). No change. | `server.ts:55`, `.env.example:4` | programmer |
| ✅ | ~~No `helmet`/CSP/HSTS on Express~~ — **DONE 2026-07-04**: `helmet` added; prod-only tailored CSP allowlisting fonts/GA/unsplash; verified live (headers + assets serve) | `server.ts` | programmer |
| 🟢 | Confirmed SAFE: no email header injection, no `dangerouslySetInnerHTML`/`eval`, JSON-LD input is static | `server.ts:77-82`, `RichText.tsx:157-212`, `MetaTags.tsx:84-86` | — |

## 6. Rules-fidelity (data vs `rules/*.md`)

Overall the `src/data/` transcription is **high-fidelity** — all 21 classes, 16 states, 23
skills, 48 traits, and all 15 spell schools match. Real discrepancies:

| Sev | Finding | Location | Owner |
|---|---|---|---|
| ✅ | ~~`Confused` state understated~~ — **DONE 2026-07-04**: now halves Offense/Defense/Accuracy/Intellect/Agility/Morale | `src/data/rules/states.ts` | rules-reader → programmer |
| ✅ | ~~`Anointment` spell type wrong~~ — **DONE 2026-07-04**: `Healing` → `Enchantment` | `src/data/spells/schools.ts` | rules-reader → programmer |
| ✅ | ~~`Weakening` trait subject shift~~ — **DONE 2026-07-04**: restored rulebook "a model" wording | `src/data/rules/traits.ts` | rules-reader → programmer |
| ✅ | ~~Stray duplicated period in `Deep Freeze`~~ — **DONE 2026-07-04**: `roll. on` → `roll, on` (both occurrences) | `schools.ts` | programmer |

## 7. Documentation

- ✅ **DONE 2026-07-04**: CLAUDE.md Testing section rewritten to reflect the real harness (33→35
  tests, `src/setupTests.ts` present); stale Commands-section note also fixed.
- ✅ **DONE 2026-07-04**: version numbers reconciled to `1.1.0` (see §2).
- README is accurate for setup/env; no changes required beyond version alignment.

---

## Markdown cleanup — DONE in this pass

Formatting-only; **no rules wording changed**. See [`rules/README.md`](../rules/README.md).

- Renamed outliers: `Enviroments.md`→`Environments.md`, `Rules in General Effect.md`→
  `Rules_in_General_Effect.md`, `gamePlay.md`→`Game_Play.md`.
- Fixed `# Game Play` H1 (was `#Game Play`); removed leading blank line before H1 in 6 files
  (Actions, Game_Sequence, Hostiles, Movement, Playing_the_Game, Rules_in_General_Effect).
- Fixed double-space list marker (`skills.md`), missing blank line before `---`
  (`mounted_rules.md`), double blank line (`bonus_schemes.md`).
- Added `.gitattributes` to normalize line endings (repo was mixed LF/CRLF).
- The corpus was already consistent on list markers, emphasis, HRs, and tables.

**Left for owner sign-off** (would require wording changes, so NOT auto-applied): `Game_Play.md`
duplicates half of `Core_Game_Elements.md`; likely typos (`ou`→`You`, `Managmatic`);
American/British spelling split.

---

## Prioritized backlog

**P0 — do first**
1. ✅ ~~Bootstrap test harness: create `src/setupTests.ts`, add tests for `utils/search.ts` &
   `utils/rulesGuards.ts`.~~ **DONE 2026-07-04** — `src/setupTests.ts` + 33 passing tests. → `tester`
2. ✅ ~~Fix bug-report abuse surface: server-side/signed CAPTCHA + rate limiting + body cap.~~
   **DONE 2026-07-04** — HMAC-signed token, per-IP rate limit, body/report caps. → `security` → `programmer`
3. ✅ ~~Remove `GEMINI_API_KEY` from the client `define` (and drop unused `@google/genai`).~~
   **DONE 2026-07-04** → `security`/`refactoring` → `programmer`

**P1 — next**
4. ✅ ~~Reconcile the version string to one source of truth.~~ **DONE 2026-07-04** (`1.1.0`) → `documentation`
5. ✅ ~~Fix `Confused` state data; fix `Anointment` type~~ (+ `Weakening`, `Deep Freeze`). **DONE 2026-07-04** → `rules-reader` → `programmer`
6. ✅ ~~Add a React error boundary around the routes.~~ **DONE 2026-07-04** → `programmer`
7. ✅ ~~Fix tooltip matching (full-name lookup) + add `'combatArt'` branch.~~ **DONE 2026-07-04** → `programmer`

**P2 — quality**
8. ✅ ~~Enable `tsconfig` `strict`, fix fallout, remove `as` casts via typed builders.~~ **DONE 2026-07-04** → `programmer`/`refactoring`
9. ✅ ~~De-duplicate: shared `CreatureCard`, one `TabButton`, data-driven RulesWiki tabs,
   single keyword→ruleId source.~~ **DONE 2026-07-04** → `refactoring`
10. ✅ ~~Add `helmet`, ESLint `quotes` rule, remove `check.ts`, parametrize server `PORT`.~~ **DONE 2026-07-04** → `programmer`

All P0/P1/P2 backlog items above are **DONE** and verified (`npm run lint` + `test` (35 passing) +
`build` + live prod smoke test). Test runner switched to `pool: 'forks'` in `vite.config.ts` to
fix an intermittent `threads`-pool crash on this Node version.

**Owner decisions — all resolved 2026-07-04:**
- ☑️ **PII email fallback** (§5): owner chose to **keep the fallback**. No change.
- ✅ **`Game_Play.md` / `Core_Game_Elements.md` duplication**: split into non-overlapping files —
  `Core_Game_Elements.md` = Model Profiles only, `Game_Play.md` = play mechanics (halves were
  byte-identical, no wording changed). `rules/README.md` updated.
- ✅ **Typos**: `bonus_schemes.md` "ou"→"You" fixed. `Managmatic` left as-is (intentional
  Mana+magmatic portmanteau, consistent with `src/data/`).
- ✅ **Spelling**: standardized to **American English** ("Defences"→"Defenses" in quest files +
  in-app changelog) to match the typed data (`Offense`/`Defense`).

**Minor, still open (non-blocking):** ~25 dead `KEYWORD_TO_RULE_ID` entries (documented in
`keywords.ts`); pre-existing eslint peer-dep conflict (`react-hooks@7` vs `eslint@10`, needs
`--legacy-peer-deps`).
