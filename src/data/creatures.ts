export type CreatureTier = "Tier I" | "Tier II" | "Tier III" | "Tier IV" | "Tier V";
export type CreatureSize = "Small" | "Medium" | "Large" | "Huge" | "Gigantic" | "Colossal";
export type CreatureType = "CREATURE" | "Humanoid" | "Undead" | "Construct" | "Elemental";

export interface CreatureWeapon {
  name: string;
  pw: number | string;
  rch: string;
  stk: number | string;
  type: string;
  effects: string;
  qty?: number;
  wgt?: number;
}

export interface Creature {
  name: string;
  tier: CreatureTier;
  size: CreatureSize;
  type: CreatureType;
  class?: string;
  alignment?: string;
  cost?: number;
  weight?: number;
  description: string;
  stats: {
    sta: number;
    spd: number;
    off: number;
    def: number;
    acc: number;
    int: number;
    ag: number;
    t: number;
    arm: number;
    hp: number;
    m: number;
  };
  weapons: CreatureWeapon[];
  skills: string[];
  traits: string[];
  spellcrafts?: string[];
  combatArts?: string[];
  behavior: string;
}

export interface CreatureCategory {
  category: string;
  creatures: Creature[];
}

export const creatureCategories: CreatureCategory[] = [
  {
    category: "Hostiles",
    creatures: [
      {
        name: "Gargoyle",
        tier: "Tier I",
        size: "Small",
        type: "CREATURE",
        description: "Hostile AI",
        stats: { sta: 2, spd: 5, off: 12, def: 8, acc: 8, int: 8, ag: 8, t: 12, arm: 5, hp: 1, m: 20 },
        weapons: [{ 
          name: "Gargoyle's Claws", 
          pw: 12, 
          rch: "0", 
          stk: 2, 
          type: "Natural & Melee", 
          effects: "The first time each turn this model deals a Wound, this model gains an Activation Point and the wounded model loses an Activation Point." 
        }],
        skills: ["Leap I", "Climbing I"],
        traits: ["Construct I", "Survival (Scorching) I"],
        behavior: `TARGET PRIORITY
Active: Lowest HP
Reactive: Activated Model

SPECIAL
When moving, use Leap and Climbing to take the shortest route to the target.

ACTIVE
Movement Step:
1. Engaged: Walk into Base Contact.
2. LoS, within 5 inches: Walk into Base Contact.
3. LoS: Run towards it. (Skip the Action Step.)
4. No LoS: Run towards the closest model. (Skip the Action Step.)

Action Step:
1. Base Contact: Melee Attack with Gargoyle's Claws.

REACTIVE
Special: When moving, use Leap and Climbing to take the shortest route to the target.
1. Target of Attack; LoS & outside 0": Dodge; move towards the attacker.
2. Target of Melee Attack; outside 0" or no LoS: Dodge; move towards the attacker.
3. Target of Attack; LoS & within 0": Dodge.`
      },
      {
        name: "Golem",
        tier: "Tier II",
        size: "Huge",
        type: "CREATURE",
        description: "Hostile AI",
        stats: { sta: 2, spd: 3, off: 10, def: 13, acc: 8, int: 8, ag: 6, t: 15, arm: 8, hp: 3, m: 20 },
        weapons: [{ 
          name: "Fists of Stone", 
          pw: 15, 
          rch: "0", 
          stk: 2, 
          type: "Natural & Melee", 
          effects: "Stagger." 
        }],
        skills: ["Protector I"],
        traits: ["Construct I", "Survival (Scorching) I"],
        behavior: `TARGET PRIORITY
Active: Closest Enemy
Reactive: Activated Model

SPECIAL
Reactive: Always use the Protector skill if possible.

ACTIVE
Movement Step:
1. Engaged: Walk into Base Contact.
2. LoS, within 3 inches: Walk into Base Contact.
3. LoS: Run towards it. (Skip the Action Step.)
4. No LoS: Rotate for 180°.

Action Step:
1. Base Contact: Melee Attack with Fists of Stone.

REACTIVE
1. Target of Ranged Spell Attack: Dodge; move towards the attacker.
2. Target of Melee Attack; outside 0" or no LoS: Dodge; move towards the attacker.
3. Target of Attack; LoS & within 0": Melee Attack with Fists of Stone.`
      },
      {
        name: "Earth Elemental",
        tier: "Tier III",
        size: "Gigantic",
        type: "CREATURE",
        description: "Hostile AI",
        stats: { sta: 2, spd: 4, off: 12, def: 14, acc: 10, int: 8, ag: 6, t: 16, arm: 10, hp: 4, m: 20 },
        weapons: [
          { 
            name: "Earthen Fists", 
            pw: 16, 
            rch: "1", 
            stk: 2, 
            type: "Natural & Melee", 
            effects: "Stagger; Knockdown." 
          },
          { 
            name: "Hurl", 
            pw: "T", 
            rch: "T", 
            stk: 1, 
            type: "Ranged", 
            effects: "Ranged Attack via Hurl skill." 
          }
        ],
        skills: ["Regeneration I", "Hurl I"],
        traits: ["Elemental I", "Survival (Scorching, Forest, Swamp) I", "Elemental Essence (Earth) I", "Watchful I", "Affinity (Earth) I"],
        spellcrafts: ["Rooting Embrace I"],
        behavior: `TARGET PRIORITY
Active: Closest Enemy
Reactive: Activated Model

SPECIAL
Use Regeneration skill if possible.

ACTIVE
Movement Step:
1. Engaged: Walk into Base Contact.
2. LoS, within 5": Walk (stop 1" away).
3. LoS, outside 5": Idle.
4. No LoS: Walk.

Action Step:
1. Enemy within 1": Melee Attack with Earthen Fists.
2. Enemy within 16": Use Hurl to perform Ranged Attack.

REACTIVE
1. Not Engaged & there is more than 1 enemy within Awareness: Cast Rooting Embrace. (Do not use this again if there is at least 1 Immobilized enemy within this model's Awareness.)
2. Target of Melee Attack; outside 1" or no LoS: Dodge; move towards the attacker.
3. Target of Melee Attack; within 1" & LoS: Melee Attack with Earthen Fists.
4. LoS, within 16": Use Hurl to perform Ranged Attack.`
      },
      {
        name: "Colossus",
        tier: "Tier IV",
        size: "Colossal",
        type: "CREATURE",
        description: "Hostile AI",
        stats: { sta: 3, spd: 4, off: 14, def: 14, acc: 8, int: 8, ag: 6, t: 17, arm: 10, hp: 6, m: 20 },
        weapons: [{ 
          name: "Hack & Thrash", 
          pw: 17, 
          rch: "1", 
          stk: 2, 
          type: "Natural & Melee", 
          effects: "Sweep I; Knockdown; Cleave." 
        }],
        skills: ["Taunt I"],
        traits: ["Construct I", "Survival (Scorching) I", "Trample I", "Unstoppable I", "Intimidating I"],
        behavior: `TARGET PRIORITY
Active: Farthest Enemy
Reactive: Activated Model

ACTIVE
Movement Step:
1. Engaged: Walk into Base Contact.
2. LoS, within 6": Use Taunt, then Walk (stop 1" away).
3. LoS, outside 6": Use Taunt, then Run (adjust path to trample as many other models as possible). End in Base Contact if possible. (Skip the Action Step.)
4. No LoS: Rotate for 180°.

Action Step:
1. Enemy is within 1": Melee Attack with Hack & Thrash (if there is more than 1 enemy, favor the one with lower AG).

REACTIVE
1. Target of Ranged Spell Attack: Dodge; move towards the attacker.
2. Target of Melee Attack; outside 1" or no LoS to the attacker: Dodge; move towards the attacker.
3. Target of an Attack; LoS & within 1": Melee Attack with Hack & Thrash.`
      },
      {
        name: "Amazon Gladiatrix",
        tier: "Tier IV",
        size: "Medium",
        type: "Humanoid",
        class: "Berserker",
        alignment: "Neutral",
        cost: 32,
        weight: 2,
        description: "Hostile AI",
        stats: { sta: 3, spd: 5, off: 16, def: 12, acc: 8, int: 8, ag: 12, t: 14, arm: 2, hp: 3, m: 16 },
        weapons: [{ 
          name: "Heavy Polearm", 
          pw: 17, 
          rch: "2", 
          stk: 1, 
          type: "Melee", 
          effects: "Two-Handed, Cleave.",
          qty: 1,
          wgt: 3
        }],
        skills: ["Finishing Strike I"],
        traits: ["Brute I", "Duelist I", "Fearless I", "Survival (Scorching) I"],
        combatArts: ["Berserk III"],
        behavior: `TARGET PRIORITY
Active: Closest Enemy
Reactive: Activated Model

SPECIAL
Use Berserker class ability when able.

ACTIVE
Movement Step:
1. Engaged: Walk into Heavy Polearm's RCH. (Idle if this is already true.)
2. LoS, within 7 inches: Walk; stop 2" away.
3. LoS, within 12 inches: Run towards it; stop 2" away. (Skip the Action Step.)
4. LoS: Run towards it. (Skip the Action Step.)
5. No LoS: Run towards closest enemy model (excluding Shrouded tokens).

Action Step:
1. If 2 enemies in LoS and RCH: Melee Attack with Heavy Polearm, use Berserk II & Finishing Strike when able.
2. Enemy within RCH: Melee Attack with Heavy Polearm, use Berserk I & Finishing Strike when able.
3. Targeted but no RCH to attacker: Dodge toward nearest enemy.

REACTIVE
Special: Use Berserker class ability when able.
1. Target of Ranged Attack: Dodge; move towards nearest enemy into Base Contact if possible.
2. Target of Melee Attack; no RCH or no LoS to attacker: Dodge; move towards the attacker.
3. Target of Attack; LoS & RCH to attacker, while there is another enemy within RCH: Melee Attack with Heavy Polearm, use Berserk II & Finishing Strike if able.
4. LoS & RCH to activated model: Melee Attack with Heavy Polearm, use Berserk I & Finishing Strike if able.`
      }
    ]
  }
];
