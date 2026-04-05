export interface CreatureWeapon {
  name: string;
  pw: number;
  rch: string;
  stk: number;
  type: string;
  effects: string;
}

export interface Creature {
  name: string;
  tier: string;
  description: string;
  stats: {
    hp: number;
    ap: number;
    off: number;
    def: number;
    acc: number;
    int: number;
    ag: number;
    t: number;
    m: number;
    arm: number;
  };
  weapons: CreatureWeapon[];
  traits: string[];
  behavior: string;
}

export interface CreatureCategory {
  category: string;
  creatures: Creature[];
}

// DEMO DATA: To be replaced with actual rules later
export const creatureCategories: CreatureCategory[] = [
  {
    category: "Elementals",
    creatures: [
      {
        name: "Water Elemental",
        tier: "Tier II",
        description: "A shifting mass of water, summoned to crush and drown its master's enemies.",
        stats: {
          hp: 4,
          ap: 2,
          off: 14,
          def: 12,
          acc: 10,
          int: 8,
          ag: 10,
          t: 14,
          m: 15,
          arm: 2
        },
        weapons: [
          {
            name: "Crashing Wave",
            pw: 5,
            rch: "1",
            stk: 2,
            type: "Melee",
            effects: "Knockdown on Critical Hit."
          }
        ],
        traits: ["Elemental Essence", "Amphibious", "Immune to Poison"],
        behavior: "Moves towards the closest enemy model. If engaged, attacks the model with the lowest HP."
      }
    ]
  },
  {
    category: "Undead",
    creatures: [
      {
        name: "Skeleton Warrior",
        tier: "Tier I",
        description: "Animated bones bound by dark magic, wielding rusted weapons.",
        stats: {
          hp: 2,
          ap: 2,
          off: 12,
          def: 10,
          acc: 8,
          int: 5,
          ag: 9,
          t: 10,
          m: 12,
          arm: 1
        },
        weapons: [
          {
            name: "Rusted Sword",
            pw: 3,
            rch: "1",
            stk: 1,
            type: "Melee",
            effects: "None."
          }
        ],
        traits: ["Undead I", "Mindless"],
        behavior: "Advances towards the nearest enemy in Line of Sight and attacks."
      }
    ]
  },
  {
    category: "Beasts",
    creatures: [
      {
        name: "Wild Boar",
        tier: "Tier I",
        description: "A highly aggressive beast of the forest, known to charge unprovoked.",
        stats: {
          hp: 3,
          ap: 2,
          off: 13,
          def: 9,
          acc: 6,
          int: 4,
          ag: 11,
          t: 12,
          m: 16,
          arm: 0
        },
        weapons: [
          {
            name: "Goring Tusks",
            pw: 4,
            rch: "1",
            stk: 1,
            type: "Melee",
            effects: "Charge: +2 PW if the model moved before attacking."
          }
        ],
        traits: ["Beast", "Aggressive"],
        behavior: "Charges the nearest model (friend or foe) if within 8 inches."
      }
    ]
  }
];
