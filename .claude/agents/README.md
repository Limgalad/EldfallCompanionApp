# Eldfall Companion — Agent Team

This directory holds the specialized subagents for the Eldfall Chronicles Companion App.
Each agent has **one narrow job**, a **least-privilege tool set**, and an **explicit return
shape** so work can be handed cleanly from one agent to the next.

Invoke an agent with the `Agent` tool, passing `subagent_type: "<name>"`.

## The team

| Agent | Role | Writes code? | Tools |
|---|---|---|---|
| `product-owner` | Turns ideas into specs + acceptance criteria, guards game-rule fidelity | No | read-only |
| `architect` | Designs the implementation approach, weighs trade-offs | No | read-only |
| `rules-reader` | Reads & explains the `rules/*.md` game rules; audits data fidelity | No | read-only |
| `designer` | UI/UX, Tailwind v4, responsive & accessible, theming | Yes (UI) | edit |
| `programmer` | Implements features & fixes in React 19 / TS | Yes | edit + bash |
| `tester` | Writes & runs Vitest / Testing-Library tests | Yes (tests) | edit + bash |
| `refactoring` | Improves structure with **no behavior change** | Yes | edit + bash |
| `security` | Audits for vulnerabilities (API, XSS, env, deps) | No | read + bash |
| `documentation` | Maintains README, CLAUDE.md, changelog, docs | Yes (docs) | edit |
| `qa` | Final gate: runs lint/test/build, checks acceptance criteria | No | read + bash |
| `harness-architect` | Meta: builds new skills/subagents/harness scaffolding | Yes (scaffold) | read + write |

## Recommended workflow

```
        ┌──────────────┐
Idea ─▶ │ product-owner│ ── spec + acceptance criteria
        └──────┬───────┘
               ▼
        ┌──────────────┐        ┌──────────────┐
        │  architect   │◀──────▶│ rules-reader │  (consult for rules-driven features)
        └──────┬───────┘        └──────────────┘
               ▼  implementation plan
        ┌──────────────┐   UI work   ┌──────────────┐
        │  programmer  │◀───────────▶│  designer    │
        └──────┬───────┘             └──────────────┘
               ▼  code complete
        ┌──────────────┐
        │   tester     │ ── tests written & passing
        └──────┬───────┘
               ▼
        ┌──────────────┐   ┌──────────────┐   ┌──────────────┐
        │  security    │   │ refactoring  │   │documentation │
        └──────┬───────┘   └──────┬───────┘   └──────┬───────┘
               └───────────────┬──┴──────────────────┘
                               ▼
                        ┌──────────────┐
                        │     qa       │ ── ✅ / ❌ merge gate
                        └──────────────┘
```

### Phase order

1. **Plan** — `product-owner` writes the spec; `architect` (consulting `rules-reader` when
   the feature touches game rules) produces an implementation plan.
2. **Build** — `programmer` implements; `designer` owns anything visual. They hand back a
   list of changed files.
3. **Test** — `tester` adds/updates tests and confirms they pass.
4. **Review** — `security`, `refactoring`, and `documentation` run in parallel over the diff.
5. **Gate** — `qa` runs `npm run lint`, `npm run test`, `npm run build` and verifies the
   acceptance criteria from step 1. Only `qa` gives the final ✅.

## Communication protocol (handoffs)

Every agent ends its turn with a **HANDOFF block** so the next agent (or the main session)
has exactly what it needs and nothing more:

```
### HANDOFF
- Status: <done | blocked | needs-input>
- Produced: <artifact — spec / plan / changed files / test results / verdict>
- Changed files: <paths, or "none">
- For next agent (<name>): <the one thing they need to know>
- Open questions / assumptions: <bullets, or "none">
```

Rules of the road:
- **Read-only agents never write.** `product-owner`, `architect`, `rules-reader`,
  `security`, and `qa` report findings; they do not edit source.
- **Stay in your lane.** If an agent discovers work outside its job, it notes it in the
  HANDOFF for the right agent rather than doing it.
- **Cite `file:line`.** Findings and plans reference concrete locations.
- **The rules are canonical.** When code and `rules/*.md` disagree about game mechanics,
  `rules-reader` is the source of truth; flag the mismatch, don't silently "fix" the rules.
