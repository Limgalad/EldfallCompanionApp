# Rulebook Transcription Diff — `rules/*.md` vs *EC Skirmish Rulebook Reprint v1.6 (2026)*

Working checklist of discrepancies found by comparing the hand-transcribed markdown in
[`rules/`](../rules/) against the source DOCX (`rules/EC SKIRMISH RULEBOOK REPRINT v1.6 2026.docx`).

- Comparison date: 2026-07-13
- Convention (see [`rules/README.md`](../rules/README.md)): rules are **verbatim** transcriptions;
  only formatting (headings/bullets/tables/spacing) may be standardized. Fixes below restore the
  rulebook's original wording/values.
- Ignored as extraction noise: small-caps casing artifacts, duplicated heading fragments, page
  numbers, mid-sentence line wraps.

**Not verifiable against this rulebook** (separate documents): `spellbook.md`,
`competitive_quests_season1.md`, `Competitive_Quest_Season2.md`, `Quest_Archives.md`, `README.md`,
and the per-creature stat blocks in `Hostile_Cards.md`.

Status legend: `[ ]` open · `[x]` fixed · `[~]` needs owner decision

> **Resolution (2026-07-13):** All 🔴 Critical, 🟡 Moderate, and 🟢 Minor items below were applied
> to `rules/*.md` on branch `fix/rulebook-transcription-v1.6`, restoring the rulebook's verbatim
> wording per `rules/README.md`. The only open item is the ❓ "Hurl" skill (owner decision).
>
> **⚠️ Follow-up not yet done:** `src/data/` (the TypeScript derived from these files) has **not**
> been re-synced. Mechanic-level fixes here — Scorching ARM condition, Armor-Piercing add→subtract,
> missing Mount/Rider classes, combat-art 6″ range, scheme VP values — may still be wrong in the
> app data. Re-derive `src/data/` from the corrected markdown as a separate task.

---

## 🔴 Critical (rule/number changed, or whole rule missing)

- [ ] **traits.md — Armor-Piercing** reversed: "**add** only half the target's ARM" → "**subtract** only half the target's ARM".
- [ ] **Environments.md — Scorching** inverted: "ARM **less than 1**" → "ARM **more than 1**".
- [ ] **classes.md — Mount** class missing: add *"MOUNT — This Class indicates that the model can be mounted by a Rider."*
- [ ] **classes.md — Rider** class missing: add *"RIDER — A Rider can ride a Mount. When mounted, the profile card of the Mount and the Rider connect and influence each other. See Mounted Rules."*
- [ ] **mounted_rules.md — Rider** definition rewritten → restore "RIDER (CLASS) — Only a model with the Rider Class may use and ride a Mount."
- [ ] **Core_Game_Elements.md — base size**: Monstrous/Epic "85+mm × 85+mm" → "100mm × 100mm".
- [ ] **Actions.md — Melee Attack** missing attribute-resolution rule (OFF/DEF for items, INT for spells).
- [ ] **Actions.md — Assist** missing spell-Assist INT-roll rule.
- [ ] **Game_Sequence.md** targeting rule: "target only an Activated model with a **Reaction**" → "…with an **Attack in Reaction**".
- [ ] **bonus_schemes.md — Stand Your Ground (Sand Kingdoms)**: cap "2 VP" → "3 VP"; discard "End phase" → "start of your next Strategic Phase"; "turn" → "round".
- [ ] **bonus_schemes.md — Martial Valor**: restore "+1 VP if another of your models Incapacitates a costlier model".
- [ ] **bonus_schemes.md — Unhindered Expedition**: restore "+1 VP if at least 1 of those models is in the opponent's Deployment Zone".
- [ ] **Core_Game_Elements.md** — restore whole "Examples of Items and their Profiles" subsection.
- [ ] **Core_Game_Elements.md** — restore whole "Affiliation" (§15) subsection.
- [ ] **Rules_in_General_Effect.md** — restore whole "Advanced Rules" subsection.
- [ ] **Rules_in_General_Effect.md** — restore whole "Newer Editions of the Game's Rules" subsection.
- [ ] **Hostiles.md** — restore Crouched/Immobilized State-cancellation rules.
- [ ] **Coverage** — "Setting Up Your Field" (36×36-inch field + terrain/balance guidance) missing from all files; add to `Playing_the_Game.md`.

## 🟡 Moderate (dropped clause / narrowed rule)

- [ ] **Actions.md** — Unarmed + Shield Bash profiles; distributed-Strike Confrontation rule; Attack hit-resolution rules (roll-under-attribute, confrontation success, active-role Strike distribution); Special Actions "declare Idle first"; Assist reaction-targeting + declaration clauses; Dodge fall-damage clause; Perceive Awareness restriction; Cover "shot while not in contact" clause.
- [ ] **Game_Sequence.md** — Tactical-Phase AP eligibility; Upkeep "that can receive them"; Reaction Step declare-type + multi-reactor rule; Activation-effects note; two Attack-of-Opportunity Notes; two Resolution-Step passages.
- [ ] **Game_Play.md** — Pre-Measuring subsection + default measure-after-declaration; Ladder definition + no-Climb-needed; Circular template Cover/large-base; Spray template LoS/Cover/too-close; Conjuration summoned-creature AP.
- [ ] **Core_Game_Elements.md** — Hitbox height-by-Size; Traits "grants all lower levels"; Stratagems default-selection + Authority-Affiliation restriction; Inventory count-existing-Items; Items default-equipped (Primary Weapon); Item usage Notes.
- [ ] **Playing_the_Game.md** — deploy-all-vs-alternating choice; Solo/Multiplayer subsection; recommended game size (60 pts / 60–90+).
- [ ] **Rules_in_General_Effect.md** — End-of-Game universal-condition lead-in + "defeated players are those with fewer VP".
- [ ] **skills.md** — Clairvoyance "ignores LoS restrictions caused by Environments"; Impede unconditional-Engaged (remove added "If the Attack was Melee").
- [ ] **traits.md** — Burn(X) "same PW as the initial Attack"; Unstoppable "Attack with this Trait" (not "Attack Action").
- [ ] **mounted_rules.md** — Mount def "by a Rider (Class)"; remove unsupported "At the end of a Quest… Rewards/Penalties" from cost rule.
- [ ] **Hostiles.md** — interchangeable same-Tier activation; Idle/Nothing fallback rule.
- [ ] **combat_arts.md** — Archery/Overdraw RCH "3 spaces" → "6\"".
- [ ] **bonus_schemes.md** — Peacekeeping Paragon "not Incapacitated or Dead" → "Alive"; Neutral Stand Your Ground "turn" → "round".

## 🟢 Minor (wording / dropped qualifier / missing example)

- [ ] **Movement.md** — "This is the most common…"; "is halved"; Climb obstacle list (obstacle, vertical surface, or piece of scenery); "come in contact and"; restore "distance of a jump is measured after declaration…"; restore "measure the distance of the fall".
- [ ] **states.md** — restore "Unless stated otherwise" in Dead and Incapacitated.
- [ ] **skills.md** — Finishing Strike "with this Skill"; Tracking "reroll one **die**".
- [ ] **traits.md** — Demon: remove "until the end of the turn" from Critical-Hit clause.
- [ ] **Hostiles.md** — reactive-role "target can only be the activated model"; "allied models" clause; "Hostile card" not "AI card".
- [ ] **Core_Game_Elements.md** — "poses" not "sizes"; Skills "grants access to all lower levels"; Shields/Consumables trimmed trailing clauses.
- [ ] **Game_Play.md** — halve+double cancellation note; Standard-mode AoE pre-measure ban; template "user doesn't suffer own Attack"; Sorcery trailing clause; Reroll note; Awareness containment clause; Spell Melee/Ranged-Trait note.
- [ ] **Hostile_Cards.md** — Colossus trample "other models" → "the enemy players' models".
- [ ] Missing worked examples/Hints across Rules_in_General_Effect, Playing_the_Game, Game_Sequence, Actions (restore where practical).

## ❓ Needs owner decision

- [~] **skills.md — "Hurl"** skill is not in this rulebook. Likely from a separate expansion/document. Leave in place unless confirmed spurious.
