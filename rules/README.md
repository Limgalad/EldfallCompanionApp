# Game Rules — Source of Truth

This folder holds the **authoritative rules** for *Eldfall Chronicles*, transcribed verbatim
from the official rulebook PDF. The TypeScript data in [`src/data/`](../src/data/) is **derived
from these files** — when the two disagree about game mechanics, **these files win**.

## Editing rules

- **Do not change wording or sentence structure.** These are a faithful transcription. Only
  formatting (headings, blank-line spacing, list markers, tables, horizontal rules) may be
  standardized.
- If you spot a likely transcription typo, flag it for the owner rather than silently editing —
  the wording is intentional.
- After changing a rules file, check whether the matching `src/data/` entry needs updating too
  (use the `rules-reader` agent to audit fidelity).

## Formatting conventions

- One `#` H1 per file, at the very first line (no leading blank line).
- Hyphen (`-`) list markers; `**bold**` / `*italic*` with asterisks; `---` horizontal rules.
- GitHub pipe tables with a header separator row.
- LF line endings (enforced by [`.gitattributes`](../.gitattributes)).

## File map

| Kind | Files |
|---|---|
| Core mechanics | `Core_Game_Elements.md`, `Game_Play.md`, `Game_Sequence.md`, `Actions.md`, `Movement.md`, `Playing_the_Game.md`, `Rules_in_General_Effect.md`, `Environments.md`, `mounted_rules.md` |
| Reference lists | `classes.md`, `traits.md`, `skills.md`, `states.md`, `combat_arts.md`, `spellbook.md` |
| Hostiles (AI) | `Hostiles.md`, `Hostile_Cards.md` |
| Quests & schemes | `competitive_quests_season1.md`, `Competitive_Quest_Season2.md`, `bonus_schemes.md`, `Quest_Archives.md` |

## Known follow-ups

_Resolved 2026-07-04 (owner-approved):_

- ✅ **Duplication removed.** `Core_Game_Elements.md` now holds **Model Profiles only**; the
  game-play mechanics (dice, movement, combat, spells, etc.) live solely in `Game_Play.md`.
  The two halves were byte-identical before the split, so no wording changed.
- ✅ **Typo fixed:** `bonus_schemes.md` "ou" → "You".
- ✅ **Spelling standardized to American English** (to match the typed data in `src/data/`,
  which already uses `Offense`/`Defense`): "Defences" → "Defenses" in the quest files (and the
  in-app changelog).
- ℹ️ **`Managmatic` left as-is** — it appears to be an intentional portmanteau (Mana + magmatic;
  the environment boosts spellcasters) and is spelled identically in `src/data/`, so it was not
  treated as a typo. Change both the markdown and `src/data/rules/core.ts`/`keywords.ts` together
  if the owner confirms otherwise.
