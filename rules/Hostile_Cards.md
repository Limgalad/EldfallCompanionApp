# Hostile Cards — AI Reference

---

## COLOSSUS

**Tier:** IV | **Size:** Colossal | **Type:** CREATURE

| STA | SPD | OFF | DEF | ACC | INT | AG | T | ARM | HP | M |
|-----|-----|-----|-----|-----|-----|-----|-----|-----|----|-----|
| 3 | 4 | 14 | 14 | 8 | 8 | 6 | 17 | 10 | 6 | 20 |

**Skills:** Taunt I
**Traits:** Construct I, Survival (Scorching) I, Trample I, Unstoppable I, Intimidating I

| Name | Effect | PW | RCH | STK | Type |
|------|--------|----|-----|-----|------|
| Hack & Thrash | Sweep I; Knockdown; Cleave. | T | 1 | 2 | Natural & Melee, Weapon |

### Active

**Target Priority:** Farthest Enemy

#### Movement Step
1. **Engaged:** Walk into Base Contact.
2. **LoS, within 6":** Use Taunt, then Walk (stop 1" away).
3. **LoS, outside 6":** Use Taunt, then Run (adjust path to trample as many other models as possible). End in Base Contact if possible. *(Skip the Action Step.)*
4. **No LoS:** Rotate for 180°.

#### Action Step
1. **Enemy is within 1":** Melee Attack with Hack & Thrash (if there is more than 1 enemy, favor the one with lower AG).

---

### Reactive

**Target Priority:** Activated Model

#### Reaction Step
1. **Target of Ranged Spell Attack:** Dodge; move towards the attacker.
2. **Target of Melee Attack; outside 1" or no LoS to the attacker:** Dodge; move towards the attacker.
3. **Target of an Attack; LoS & within 1":** Melee Attack with Hack & Thrash.

---

## EARTH ELEMENTAL

**Tier:** III | **Size:** Gigantic | **Type:** CREATURE

| STA | SPD | OFF | DEF | ACC | INT | AG | T | ARM | HP | M |
|-----|-----|-----|-----|-----|-----|-----|-----|-----|----|-----|
| 2 | 4 | 12 | 14 | 10 | 8 | 6 | 16 | 10 | 4 | 20 |

**Skills:** Regeneration I, Hurl I
**Traits:** Elemental I, Survival (Scorching, Forest, Swamp) I, Elemental Essence (Earth) I, Watchful I, Affinity (Earth) I
**Spellcrafts:** Rooting Embrace I

| Name | Effect | PW | RCH | STK | Type |
|------|--------|----|-----|-----|------|
| Earthen Fists | Stagger; Knockdown. | T | 1 | 2 | Natural & Melee, Weapon |

### Active

**Target Priority:** Closest Enemy
**Special:** Use Regeneration skill if possible.

#### Movement Step
1. **Engaged:** Walk into Base Contact.
2. **LoS, within 5":** Walk (stop 1" away).
3. **LoS, outside 5":** Idle.
4. **No LoS:** Walk.

#### Action Step
1. **Enemy within 1":** Melee Attack with Earthen Fists.
2. **Enemy within 16":** Use Hurl to perform Ranged Attack.

---

### Reactive

**Target Priority:** Activated Model

#### Reaction Step
1. **Not Engaged & there is more than 1 enemy within Awareness:** Cast Rooting Embrace. *(Do not use this again if there is at least 1 Immobilized enemy within this model's Awareness.)*
2. **Target of Melee Attack; outside 1" or no LoS:** Dodge; move towards the attacker.
3. **Target of Melee Attack; within 1" & LoS:** Melee Attack with Earthen Fists.
4. **LoS, within 16":** Use Hurl to perform Ranged Attack.

---

## GOLEM

**Tier:** II | **Size:** Huge | **Type:** CREATURE

| STA | SPD | OFF | DEF | ACC | INT | AG | T | ARM | HP | M |
|-----|-----|-----|-----|-----|-----|-----|-----|-----|----|-----|
| 2 | 3 | 10 | 13 | 8 | 8 | 6 | 15 | 8 | 3 | 20 |

**Skills:** Protector I
**Traits:** Construct I, Survival (Scorching) I

| Name | Effect | PW | RCH | STK | Type |
|------|--------|----|-----|-----|------|
| Fists of Stone | Stagger. | T | 0 | STA | Natural & Melee, Weapon |

### Active

**Target Priority:** Closest Enemy

#### Movement Step
1. **Engaged:** Walk into Base Contact.
2. **LoS, within 3 inches:** Walk into Base Contact.
3. **LoS:** Run towards it. *(Skip the Action Step.)*
4. **No LoS:** Rotate for 180°.

#### Action Step
1. **Base Contact:** Melee Attack with Fists of Stone.

---

### Reactive

**Target Priority:** Activated Model
**Special:** Always use Protector skill if possible.

#### Reaction Step
1. **Target of Ranged Spell Attack:** Dodge; move towards the attacker.
2. **Target of Melee Attack; outside 0" or no LoS:** Dodge; move towards the attacker.
3. **Target of Attack; LoS & within 0":** Melee Attack with Fists of Stone.

---

## GARGOYLE

**Tier:** I | **Size:** Small | **Type:** CREATURE

| STA | SPD | OFF | DEF | ACC | INT | AG | T | ARM | HP | M |
|-----|-----|-----|-----|-----|-----|-----|-----|-----|----|-----|
| 2 | 5 | 12 | 8 | 8 | 8 | 8 | 12 | 5 | 1 | 20 |

**Skills:** Leap I, Climbing I
**Traits:** Construct I, Survival (Scorching) I

| Name | Effect | PW | RCH | STK | Type |
|------|--------|----|-----|-----|------|
| Gargoyle's Claws | The first time each turn this model deals a Wound, this model gains an Activation Point and the wounded model loses an Activation Point, if it has any. | T | 0 | STA | Natural & Melee, Weapon |

### Active

**Target Priority:** Lowest HP
**Special:** When moving, use Leap and Climbing to take the shortest route to the target.

#### Movement Step
1. **Engaged:** Walk into Base Contact.
2. **LoS, within 5 inches:** Walk into Base Contact.
3. **LoS:** Run towards it. *(Skip the Action Step.)*
4. **No LoS:** Run towards the closest model. *(Skip the Action Step.)*

#### Action Step
1. **Base Contact:** Melee Attack with Gargoyle's Claws.

---

### Reactive

**Target Priority:** Activated Model
**Special:** When moving, use Leap and Climbing to take the shortest route to the target.

#### Reaction Step
1. **Target of Attack; LoS & outside 0":** Dodge; move towards the attacker.
2. **Target of Melee Attack; outside 0" or no LoS:** Dodge; move towards the attacker.
3. **Target of Attack; LoS & within 0":** Dodge.

---

## AMAZON GLADIATRIX

**Tier:** IV | **Alignment:** Neutral | **Size:** Medium | **Type:** BERSERKER | **Cost:** 32 | **Weight:** 2

| STA | SPD | OFF | DEF | ACC | INT | AG | T | ARM | HP | M |
|-----|-----|-----|-----|-----|-----|-----|-----|-----|----|-----|
| 3 | 5 | 16 | 12 | 8 | 8 | 12 | 14 | 2 | 3 | 16 |

**Skills:** Finishing Strike I
**Traits:** Brute I, Duelist I, Fearless I, Survival (Scorching) I
**Combat Arts:** Berserk III

| Name | Effect | PW | RCH | STK | Type | QTY | WGT |
|------|--------|----|-----|-----|------|-----|-----|
| Heavy Polearm | Two-Handed, Cleave. | T+3 | 2 | 1 | Melee, Weapon | 1 | 3 |

### Active

**Target Priority:** Closest Enemy
**Special:** Use Berserker class ability when able.

#### Movement Step
1. **Engaged:** Walk into Heavy Polearm's RCH. *(Idle if this is already true.)*
2. **LoS, within 7 inches:** Walk; stop 2" away.
3. **LoS, within 12 inches:** Run towards it; stop 2" away. *(Skip the Action Step.)*
4. **LoS:** Run towards it. *(Skip the Action Step.)*
5. **No LoS:** Run towards closest enemy model (excluding Shrouded tokens).

#### Action Step
1. **If 2 enemies in LoS and RCH:** Melee Attack with Heavy Polearm, use Berserk II & Finishing Strike when able.
2. **Enemy within RCH:** Melee Attack with Heavy Polearm, use Berserk I & Finishing Strike when able.
3. **Targeted but no RCH to attacker:** Dodge toward nearest enemy.

---

### Reactive

**Target Priority:** Activated Model
**Special:** Use Berserker class ability when able.

#### Reaction Step
1. **Target of Ranged Attack:** Dodge; move towards nearest enemy into Base Contact if possible.
2. **Target of Melee Attack; no RCH or no LoS to attacker:** Dodge; move towards the attacker.
3. **Target of Attack; LoS & RCH to attacker, while there is another enemy within RCH:** Melee Attack with Heavy Polearm, use Berserk II & Finishing Strike if able.
4. **LoS & RCH to activated model:** Melee Attack with Heavy Polearm, use Berserk I & Finishing Strike if able.
