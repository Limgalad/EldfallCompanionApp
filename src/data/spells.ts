export interface Spell {
  element: string;
  level: string;
  name: string;
  effect: string;
  pw: string;
  type: string;
  rch: string;
  stk: string;
}

export interface SpellSchool {
  name: string;
  spells: Spell[];
}

export const spellSchools: SpellSchool[] = [
  {
    "name": "Armamancy",
    "spells": [
      {
        "element": "Elder",
        "level": "I",
        "name": "Ethereal Blades",
        "effect": "An Attack with this Spell receives a different Effect depending on the number of successful Attack rolls (regardless of the Confrontation rule). Higher combo results also include lower result Effects: 2 Hits: PW+6 / 3 Hits: Armor-Piercing / 4 Hits: Stagger / 5 Hits: If the target becomes Incapacitated, you can automatically render it Dead.",
        "pw": "INT-3",
        "type": "Spell, Sorcery, Melee",
        "rch": "0",
        "stk": "5 in Active, 3 in Reactive Role"
      },
      {
        "element": "Elder",
        "level": "II",
        "name": "Void Lance",
        "effect": "Armor-Piercing. Can target any model within RCH. On a Hit, all models in a straight line from the caster to the target get hit by the Attack.",
        "pw": "INT+2",
        "type": "Spell, Sorcery, Melee",
        "rch": "6",
        "stk": "1"
      },
      {
        "element": "Elder",
        "level": "III",
        "name": "Spectral Greatsword",
        "effect": "Armor-Piercing, Stagger, Sweep I.",
        "pw": "INT+2",
        "type": "Spell, Sorcery, Melee",
        "rch": "2",
        "stk": "1"
      }
    ]
  },
  {
    "name": "Conjuration",
    "spells": [
      {
        "element": "Earth",
        "level": "I",
        "name": "Summon Gargoyle",
        "effect": "[Mana Cost: 1] Summon Gargoyle to the field.",
        "pw": "—",
        "type": "Spell, Conjuration, Ranged",
        "rch": "0",
        "stk": "—"
      },
      {
        "element": "Earth",
        "level": "II",
        "name": "Summon Golem",
        "effect": "[Mana Cost: 2] Summon Golem to the field.",
        "pw": "—",
        "type": "Spell, Conjuration, Ranged",
        "rch": "0",
        "stk": "—"
      },
      {
        "element": "Earth",
        "level": "III",
        "name": "Summon Earth Elemental",
        "effect": "[Mana Cost: 3] Summon Earth Elemental to the field.",
        "pw": "—",
        "type": "Spell, Conjuration, Ranged",
        "rch": "0",
        "stk": "—"
      },
      {
        "element": "Earth",
        "level": "IV",
        "name": "Summon Colossus",
        "effect": "[Mana Cost: 4] Summon Colossus to the field.",
        "pw": "—",
        "type": "Spell, Conjuration, Ranged",
        "rch": "0",
        "stk": "—"
      },
      {
        "element": "Elder",
        "level": "I",
        "name": "Summon Imp",
        "effect": "[Mana Cost: 1] Summon Imp to the field.",
        "pw": "—",
        "type": "Spell, Conjuration, Ranged",
        "rch": "0",
        "stk": "—"
      },
      {
        "element": "Water",
        "level": "III",
        "name": "Summon Water Elemental",
        "effect": "[Mana Cost: 3] Summon Water Elemental to the field.",
        "pw": "—",
        "type": "Spell, Conjuration, Ranged",
        "rch": "0",
        "stk": "—"
      }
    ]
  },
  {
    "name": "Cryomancy",
    "spells": [
      {
        "element": "Water",
        "level": "I",
        "name": "Cure",
        "effect": "Removes Bleeding, Crippled, Poisoned, and Weakened States from the target.",
        "pw": "—",
        "type": "Spell, Healing, Ranged",
        "rch": "16",
        "stk": "1"
      },
      {
        "element": "Water",
        "level": "I",
        "name": "Ice Spikes",
        "effect": "Target becomes Slowed on Hit, until the caster's next Strategic Phase.",
        "pw": "11",
        "type": "Spell, Sorcery, Ranged",
        "rch": "16",
        "stk": "3"
      },
      {
        "element": "Water",
        "level": "II",
        "name": "Frost",
        "effect": "The target becomes Immobilized on Hit until the caster's next Strategic Phase.",
        "pw": "11",
        "type": "Spell, Sorcery, Ranged",
        "rch": "Spray S",
        "stk": "1"
      },
      {
        "element": "Water",
        "level": "II",
        "name": "Water Lash",
        "effect": "Knockback (2) (applied to all sizes except Colossal and Epic).",
        "pw": "8",
        "type": "Spell, Sorcery, Ranged/Melee",
        "rch": "16",
        "stk": "STA"
      },
      {
        "element": "Water",
        "level": "III",
        "name": "Deep Freeze",
        "effect": "[Mana Cost: 1] While enchanted, the model suffers -3 ARM mod, and cannot declare Movements or Actions other than Idle and Nothing. Attacks against the model have Advantage. At the beginning of the next Strategic Phase (any), the enchanted model may perform a T roll — on success, the Enchantment is removed. During its Active Role, the enchanted model may declare Assist targeting itself and perform a T roll — on success, the Enchantment is removed.",
        "pw": "—",
        "type": "Spell, Enchantment, Ranged/Melee",
        "rch": "10",
        "stk": "1"
      },
      {
        "element": "Water",
        "level": "III",
        "name": "Glacier Circle",
        "effect": "Frostbite, Targetless. By spending 1 Mana, the caster may increase the STK of this Spell by 1. Enemy models within the AoE become Slowed on Hit. Areas within the AoE become Difficult and Dangerous Environments until the caster's next Strategic Phase.",
        "pw": "13",
        "type": "Spell, Sorcery, Ranged",
        "rch": "Casting Aura, Circular L",
        "stk": "1"
      }
    ]
  },
  {
    "name": "Electromancy",
    "spells": [
      {
        "element": "Air",
        "level": "I",
        "name": "Electrification",
        "effect": "Ignore Armor, Ricochet (4), Stun.",
        "pw": "INT",
        "type": "Spell, Sorcery, Ranged/Melee",
        "rch": "0",
        "stk": "1"
      }
    ]
  },
  {
    "name": "Enchanting",
    "spells": [
      {
        "element": "Fire",
        "level": "I",
        "name": "Burning Touch",
        "effect": "Target gains Burn (1), Sweep I. This enchanted model may declare Assist and remove the Bleeding State from an allied model in Base Contact.",
        "pw": "✯",
        "type": "Spell, Enchantment, Ranged/Melee",
        "rch": "16",
        "stk": "1"
      },
      {
        "element": "Fire",
        "level": "II",
        "name": "Melting Touch",
        "effect": "Target gains Burn, Ignore Armor.",
        "pw": "✯",
        "type": "Spell, Enchantment, Ranged",
        "rch": "16",
        "stk": "1"
      },
      {
        "element": "Fire",
        "level": "III",
        "name": "Flameskin",
        "effect": "A model that attacks the enchanted model and is within 1\" suffers a Hit with Power 10 and Burn (1). If this Hit wounds the attacker, this Enchantment is removed.",
        "pw": "✯",
        "type": "Spell, Enchantment, Ranged",
        "rch": "16",
        "stk": "1"
      },
      {
        "element": "Water",
        "level": "I",
        "name": "Cutting Chill",
        "effect": "Enchanted model's Melee Attacks gain +2 PW. When the enchanted model hits a target with a Melee Attack, the target becomes Immobilized.",
        "pw": "✯",
        "type": "Spell, Enchantment, Ranged",
        "rch": "16",
        "stk": "1"
      },
      {
        "element": "Water",
        "level": "II",
        "name": "Mirror Bubble",
        "effect": "When the enchanted model suffers a Hit from a Melee Attack, the attacker must perform an AG roll. If it fails, the attacker suffers a STK 1 Hit with PW equal to its own Attack. Afterwards, this Enchantment is removed.",
        "pw": "✯",
        "type": "Spell, Enchantment, Ranged",
        "rch": "10",
        "stk": "1"
      },
      {
        "element": "Water",
        "level": "III",
        "name": "Ice Shield",
        "effect": "When performing a DMG roll against the enchanted model, the attacker must first perform a DMG roll against ARM 5. If successful, the attacker must then make another roll against the enchanted model's default ARM, but with PW-3.",
        "pw": "—",
        "type": "Spell, Enchantment, Ranged",
        "rch": "16",
        "stk": "1"
      },
      {
        "element": "Elder",
        "level": "I",
        "name": "Arcane Shield",
        "effect": "Enchanted model gains +4 to its ARM value. This bonus cannot increase a model's ARM value above 6. In addition, Critical Hits scored against this model do not ignore ARM.",
        "pw": "—",
        "type": "Spell, Enchantment, Ranged",
        "rch": "16",
        "stk": "1"
      },
      {
        "element": "Elder",
        "level": "II",
        "name": "Spectral Blade",
        "effect": "Target gains: Ignore Armor, Stagger.",
        "pw": "✯",
        "type": "Spell, Enchantment, Ranged",
        "rch": "16",
        "stk": "1"
      },
      {
        "element": "Elder",
        "level": "III",
        "name": "Hasten",
        "effect": "During your Strategic Phase, the enchanted model may perform a Normal Movement and then remove the Enchantment. (Does not provoke Reactions.)",
        "pw": "—",
        "type": "Spell, Enchantment, Ranged",
        "rch": "16",
        "stk": "1"
      },
      {
        "element": "Air",
        "level": "I",
        "name": "Formless Edge",
        "effect": "The enchanted model's Melee Attacks gain +2 RCH and Knockback (2).",
        "pw": "✯",
        "type": "Spell, Enchantment, Ranged",
        "rch": "16",
        "stk": "1"
      },
      {
        "element": "Air",
        "level": "II",
        "name": "Featherlight",
        "effect": "Target gains +2 SPD.",
        "pw": "—",
        "type": "Spell, Enchantment, Ranged",
        "rch": "16",
        "stk": "1"
      },
      {
        "element": "Air",
        "level": "III",
        "name": "Protective Currents",
        "effect": "Attacks at the enchanted model suffer -4 attacking mod. If the enchanted model is Hit, this Enchantment is removed, but all enemy models within 3\" of the enchanted model suffer a Hit with Knockback (3), without damage.",
        "pw": "—",
        "type": "Spell, Enchantment, Ranged",
        "rch": "Casting Aura",
        "stk": "STA"
      }
    ]
  },
  {
    "name": "Everlasting Rain — Invocations",
    "spells": [
      {
        "element": "Air",
        "level": "I",
        "name": "Electrification",
        "effect": "Ricochet (4), Ignore Armor, Stun.",
        "pw": "INT",
        "type": "Spell, Sorcery, Ranged/Melee",
        "rch": "0",
        "stk": "2"
      },
      {
        "element": "Air",
        "level": "II",
        "name": "Lightning Bolt",
        "effect": "Ignore Armor, Stun.",
        "pw": "INT",
        "type": "Spell, Sorcery, Ranged",
        "rch": "16",
        "stk": "2"
      },
      {
        "element": "Air",
        "level": "III",
        "name": "Chain Lightning",
        "effect": "Ricochet (4), Ignore Armor, Stun.",
        "pw": "INT",
        "type": "Spell, Sorcery, Ranged",
        "rch": "16",
        "stk": "1"
      },
      {
        "element": "Air",
        "level": "IV",
        "name": "Thunderstorm",
        "effect": "[Mana Cost: 2] Cleave, Ignore Armor, Stagger, Stun.",
        "pw": "INT",
        "type": "Spell, Sorcery, Ranged/Melee",
        "rch": "16, Circular L",
        "stk": "2"
      },
      {
        "element": "Water",
        "level": "I",
        "name": "Blessed Rain",
        "effect": "Until your next Strategic Phase, the affected area becomes a Shallow Aquatic Environment for enemies and Light Cover for allies.",
        "pw": "—",
        "type": "Spell, Transmutation, Ranged/Melee",
        "rch": "0, Circular L",
        "stk": "1"
      },
      {
        "element": "Water",
        "level": "II",
        "name": "Protective Bubble",
        "effect": "If the enchanted model is hit, negate 1 Hit (the player may choose which Hit if there are multiple) and remove this Enchantment. When removed, the 2\" area surrounding the model becomes Shallow Aquatic Environment until the end of the Turn.",
        "pw": "—",
        "type": "Spell, Enchantment, Ranged",
        "rch": "16",
        "stk": "1"
      },
      {
        "element": "Water",
        "level": "III",
        "name": "Downpour",
        "effect": "[Mana Cost: 1] The affected area becomes a Shallow Aquatic Environment.",
        "pw": "—",
        "type": "Spell, Transmutation, Ranged",
        "rch": "16, Circular L",
        "stk": "1"
      },
      {
        "element": "Water",
        "level": "IV",
        "name": "Flash Flood",
        "effect": "Knockback (1), Knockdown.",
        "pw": "10",
        "type": "Spell, Sorcery, Ranged/Melee",
        "rch": "Spray L",
        "stk": "3"
      }
    ]
  },
  {
    "name": "Hieromancy",
    "spells": [
      {
        "element": "Divine",
        "level": "I",
        "name": "Purgation",
        "effect": "Removes the Weakened and Poisoned States from the target. Removes any number of Enchantments from the target. If the target has the Undead, Affinity (Profane), or Elemental Essence (Profane) Trait, it automatically suffers a Wound when hit.",
        "pw": "—",
        "type": "Spell, Healing, Ranged/Melee",
        "rch": "16",
        "stk": "1"
      },
      {
        "element": "Divine",
        "level": "I",
        "name": "Curative Touch",
        "effect": "The target model regains all HP. In addition, the Weakened, Bleeding, Crippled and Poisoned Traits are removed from the model.",
        "pw": "—",
        "type": "Spell, Healing, Melee",
        "rch": "0",
        "stk": "STA"
      },
      {
        "element": "Divine",
        "level": "II",
        "name": "Protective Barrier",
        "effect": "If the enchanted model is hit, negate 1 Hit (the player may choose if there are multiple) and remove this Enchantment from the model.",
        "pw": "—",
        "type": "Spell, Enchantment, Ranged",
        "rch": "16",
        "stk": "STA"
      },
      {
        "element": "Divine",
        "level": "II",
        "name": "Blinding Light",
        "effect": "Targetless. Models within the AoE become Blinded on Hit until the end of the turn.",
        "pw": "—",
        "type": "Spell, Sorcery, Ranged",
        "rch": "16, AoE: Circular S",
        "stk": "STA"
      },
      {
        "element": "Divine",
        "level": "III",
        "name": "Warding Barrier",
        "effect": "Focus. To cast this Spell the caster needs to perform the Ritual Action. Ranged Attacks with Spell type targeting models within the Casting Aura are negated. Models with Incorporeal Trait within the Casting Aura suffer magical damage of PW equal to the caster's Morale, and must be moved directly away from the caster to the outside edge of its Casting Aura.",
        "pw": "✯",
        "type": "Spell, Enchantment, Ranged",
        "rch": "Casting Aura",
        "stk": "1"
      },
      {
        "element": "Divine",
        "level": "III",
        "name": "Smite",
        "effect": "Armor-Piercing, Burn (1), Targetless.",
        "pw": "M",
        "type": "Spell, Sorcery, Ranged",
        "rch": "Casting Aura, AoE: Circular L",
        "stk": "1"
      },
      {
        "element": "Divine",
        "level": "IV",
        "name": "Curative Miracle",
        "effect": "The target model regains all HP. In addition, the Weakened, Bleeding, Crippled and Poisoned States are removed from the model.",
        "pw": "—",
        "type": "Spell, Healing, Ranged",
        "rch": "16",
        "stk": "1"
      },
      {
        "element": "Divine",
        "level": "IV",
        "name": "Anointment",
        "effect": "The enchanted model cannot be targeted by enemy Enchantments.",
        "pw": "—",
        "type": "Spell, Enchantment, Ranged",
        "rch": "16",
        "stk": "1"
      }
    ]
  },
  {
    "name": "Incantation / Shamanism",
    "spells": [
      {
        "element": "Any",
        "level": "I",
        "name": "Primal Claw",
        "effect": "—",
        "pw": "13",
        "type": "Spell, Sorcery, Melee",
        "rch": "1",
        "stk": "3"
      },
      {
        "element": "Fire",
        "level": "I",
        "name": "Fire Breath",
        "effect": "Burn (1).",
        "pw": "12",
        "type": "Spell, Sorcery, Ranged",
        "rch": "AoE: Spray S",
        "stk": "2"
      },
      {
        "element": "Earth",
        "level": "II",
        "name": "Fortified Recovery",
        "effect": "Choose one: Remove 1 State from the target (except Crouching, Flying, Shrouded, Incapacitated or Dead) / Target regains 1 HP / Another model may regain 1 AP.",
        "pw": "—",
        "type": "Spell, Healing, Ranged",
        "rch": "16",
        "stk": "1"
      },
      {
        "element": "Divine",
        "level": "II",
        "name": "Misfortune",
        "effect": "The enchanted model must reroll any successful roll once.",
        "pw": "—",
        "type": "Spell, Enchantment, Ranged",
        "rch": "16",
        "stk": "1"
      },
      {
        "element": "Fire",
        "level": "III",
        "name": "Searing Blood",
        "effect": "The Enchanted model must perform an M roll when activated. On a failure, it loses 1 HP and 1 AP; remove the Enchantment.",
        "pw": "—",
        "type": "Spell, Enchantment, Ranged",
        "rch": "16",
        "stk": "1"
      }
    ]
  },
  {
    "name": "Invocation",
    "spells": [
      {
        "element": "Earth",
        "level": "I",
        "name": "Overgrowth",
        "effect": "Target gains +3 T.",
        "pw": "—",
        "type": "Spell, Enchantment, Ranged",
        "rch": "16",
        "stk": "2"
      },
      {
        "element": "Earth",
        "level": "I",
        "name": "Regrowth",
        "effect": "Target gains Regeneration I. Whenever a model regains 1 HP with this Spell, the Spell ends.",
        "pw": "—",
        "type": "Spell, Enchantment, Ranged",
        "rch": "10",
        "stk": "1"
      },
      {
        "element": "Earth",
        "level": "II",
        "name": "Stoneskin",
        "effect": "Target gains +3 ARM.",
        "pw": "—",
        "type": "Spell, Enchantment, Ranged",
        "rch": "16",
        "stk": "1"
      },
      {
        "element": "Earth",
        "level": "II",
        "name": "Natural Fortitude",
        "effect": "Target gains Resistance I (Spell).",
        "pw": "—",
        "type": "Spell, Enchantment, Ranged",
        "rch": "16",
        "stk": "1"
      },
      {
        "element": "Earth",
        "level": "III",
        "name": "Greater Cure",
        "effect": "Removes Bleeding, Blinded, Confused, Crippled, Petrified, Poisoned, Slowed, Weakened States from allied models within the AoE.",
        "pw": "—",
        "type": "Spell, Healing, Ranged",
        "rch": "16, Circular L",
        "stk": "2"
      },
      {
        "element": "Earth",
        "level": "III",
        "name": "Primordial Word",
        "effect": "Targetless. During the Resolution Step (after all Movement), Summoned, Undead, and models with the Profane or Divine Element within the AoE suffer 1 Wound and are moved into Base Contact with the outer edge of the AoE (caster's choice). When a model with the Profane or Divine Element enters the AoE or spends an AP within it, it suffers 1 Wound during the Resolution Step. Undead I and Summoned models cannot enter the AoE. Only one Primordial Word AoE may be on the field per caster. If the caster moves outside the AoE, this Spell is removed from the field.",
        "pw": "—",
        "type": "Spell, Transmutation, Melee",
        "rch": "0, Circular L",
        "stk": "1"
      }
    ]
  },
  {
    "name": "Kitsune no Mai",
    "spells": [
      {
        "element": "Fire",
        "level": "I",
        "name": "Burning Resolve",
        "effect": "Target model with 0 AP regains 1 AP.",
        "pw": "—",
        "type": "Spell, Healing, Ranged",
        "rch": "10",
        "stk": "1"
      },
      {
        "element": "Fire",
        "level": "I",
        "name": "Flare",
        "effect": "Burn (2), Sweep II.",
        "pw": "INT",
        "type": "Spell, Sorcery, Ranged/Melee",
        "rch": "3",
        "stk": "1"
      }
    ]
  },
  {
    "name": "Necromancy",
    "spells": [
      {
        "element": "Profane",
        "level": "I",
        "name": "Command the Undead",
        "effect": "Continuous. This Spell cannot be negated by Elemental Essence and does not cause Confrontation. To take control of a Tier I Undead, perform an INT roll. To take control of a Tier II Undead, spend 1 Mana and perform an INT roll. The caster may spend 1 Mana before rolling to automatically succeed. Tier III or higher Undead cannot be controlled. On success, the target's Attack Rolls are negated, and a target with Undead I becomes allied to the caster, retaining its remaining AP.",
        "pw": "—",
        "type": "Spell, Sorcery, Ranged",
        "rch": "Casting Aura",
        "stk": "X"
      },
      {
        "element": "Profane",
        "level": "I",
        "name": "Spectral Sight",
        "effect": "The enchanted model gains Advantage (Undead).",
        "pw": "—",
        "type": "Spell, Enchantment, Ranged/Melee",
        "rch": "16",
        "stk": "1"
      },
      {
        "element": "Profane",
        "level": "I",
        "name": "Curse of Decay",
        "effect": "Continuous. The target becomes Poisoned.",
        "pw": "—",
        "type": "Spell, Enchantment, Ranged",
        "rch": "16",
        "stk": "1"
      },
      {
        "element": "Profane",
        "level": "II",
        "name": "Necrotic Wound",
        "effect": "Target gains Cleave and Poison II.",
        "pw": "✯",
        "type": "Spell, Enchantment, Ranged",
        "rch": "16",
        "stk": "1"
      },
      {
        "element": "Profane",
        "level": "II",
        "name": "Soul Leech",
        "effect": "The caster gains 1 Mana Counter whenever the enchanted model successfully deals a Wound.",
        "pw": "✯",
        "type": "Spell, Enchantment, Ranged/Melee",
        "rch": "10",
        "stk": "1"
      },
      {
        "element": "Profane",
        "level": "III",
        "name": "A Second Chance",
        "effect": "The target model regains 1 HP. If the target model was Incapacitated, it also regains 1 AP.",
        "pw": "—",
        "type": "Spell, Healing, Ranged",
        "rch": "16",
        "stk": "2"
      },
      {
        "element": "Profane",
        "level": "III",
        "name": "Life Leech",
        "effect": "The enchanted model gains 1 HP for each Wound dealt to an enemy model without the Undead or Construct Trait (up to double its default HP).",
        "pw": "✯",
        "type": "Spell, Enchantment, Ranged/Melee",
        "rch": "10",
        "stk": "1"
      },
      {
        "element": "Profane",
        "level": "IV",
        "name": "Corroding Embrace",
        "effect": "Armor-Piercing, Poison II, Sweep II.",
        "pw": "14",
        "type": "Spell, Sorcery, Ranged/Melee",
        "rch": "3",
        "stk": "1"
      },
      {
        "element": "Profane",
        "level": "IV",
        "name": "Leeching Bolt",
        "effect": "The caster regains 1 HP for each Wound dealt to an enemy model without the Undead or Construct Trait.",
        "pw": "INT",
        "type": "Spell, Sorcery, Ranged",
        "rch": "16",
        "stk": "1"
      },
      {
        "element": "Profane",
        "level": "V",
        "name": "Raise the Undead",
        "effect": "[Mana Cost: 2] Select a Dead model within Awareness. Summon up to 2 Tier I Undead or 1 Tier II Undead in Base Contact with the Dead model, then remove the Dead model.",
        "pw": "—",
        "type": "Spell, Conjuration, Ranged",
        "rch": "Casting Aura",
        "stk": "—"
      },
      {
        "element": "Profane",
        "level": "V",
        "name": "Reanimation",
        "effect": "[Mana Cost: 1] Each Undead model within RCH regains full HP and may cancel Dead State.",
        "pw": "—",
        "type": "Spell, Healing, Ranged",
        "rch": "Casting Aura",
        "stk": "1"
      }
    ]
  },
  {
    "name": "Purification Rites",
    "spells": [
      {
        "element": "Fire",
        "level": "I",
        "name": "Purification",
        "effect": "Removes any number of Enchantments from the target. Removes Weakened, Poisoned, Petrified, Confused, Blinded States. The target of this Spell cannot be affected by enemy Enchantments until the End Phase. If the target has the Undead Trait, it automatically suffers a Wound when hit by this Spell.",
        "pw": "—",
        "type": "Spell, Healing, Ranged",
        "rch": "16",
        "stk": "1"
      }
    ]
  },
  {
    "name": "Sorcery",
    "spells": [
      {
        "element": "Fire",
        "level": "I",
        "name": "Ignite",
        "effect": "Burn (1).",
        "pw": "INT",
        "type": "Spell, Sorcery, Ranged",
        "rch": "16",
        "stk": "STA"
      },
      {
        "element": "Fire",
        "level": "II",
        "name": "Flare",
        "effect": "Burn (2), Sweep II.",
        "pw": "INT",
        "type": "Spell, Sorcery, Ranged/Melee",
        "rch": "3",
        "stk": "1"
      },
      {
        "element": "Fire",
        "level": "III",
        "name": "Fireball",
        "effect": "Burn (1), Targetless.",
        "pw": "INT",
        "type": "Spell, Sorcery, Ranged",
        "rch": "16, AoE: Circular L",
        "stk": "1"
      },
      {
        "element": "Water",
        "level": "I",
        "name": "Water Lash",
        "effect": "Knockback (2) (applied to all sizes except Colossal and Epic).",
        "pw": "8",
        "type": "Spell, Sorcery, Ranged/Melee",
        "rch": "16",
        "stk": "STA"
      },
      {
        "element": "Water",
        "level": "II",
        "name": "Piercing Stream",
        "effect": "Armor-Piercing.",
        "pw": "INT",
        "type": "Spell, Sorcery, Ranged",
        "rch": "16",
        "stk": "2"
      },
      {
        "element": "Water",
        "level": "III",
        "name": "Drown",
        "effect": "Enemy models within the AoE become Weakened on Hit until the end of the turn.",
        "pw": "INT",
        "type": "Spell, Sorcery, Ranged",
        "rch": "16, Circular L",
        "stk": "1"
      },
      {
        "element": "Elder",
        "level": "I",
        "name": "Arcane Bolt",
        "effect": "On critical: Knockdown.",
        "pw": "INT",
        "type": "Spell, Sorcery, Ranged",
        "rch": "16",
        "stk": "STA"
      },
      {
        "element": "Elder",
        "level": "II",
        "name": "Telekinetic Circular",
        "effect": "Knockback (3), Knockdown.",
        "pw": "INT-3",
        "type": "Spell, Sorcery, Ranged",
        "rch": "AoE: Spray L",
        "stk": "1"
      },
      {
        "element": "Elder",
        "level": "III",
        "name": "Soul Crush",
        "effect": "Ignore Armor, Stun. If wounded, the target becomes Panicked until caster's next End Phase.",
        "pw": "INT",
        "type": "Spell, Sorcery, Ranged",
        "rch": "16",
        "stk": "1"
      }
    ]
  },
  {
    "name": "Succubi Magic",
    "spells": [
      {
        "element": "Fire",
        "level": "I",
        "name": "Fiery Fervor",
        "effect": "Remove Weakened, Bleeding, Poisoned, Confused, Crippled, Blinded, Immobilized, Panicked, Petrified, Fatigued States from the enchanted model. The model gains +2 OFF, DEF.",
        "pw": "—",
        "type": "Spell, Enchantment, Ranged",
        "rch": "16",
        "stk": "1"
      },
      {
        "element": "Fire",
        "level": "I",
        "name": "Unrelenting Zeal",
        "effect": "When the enchanted model would suffer a Wound, it may perform a M roll. If successful, that Wound is negated and this Spell ends.",
        "pw": "—",
        "type": "Spell, Enchantment, Ranged",
        "rch": "16",
        "stk": "2"
      },
      {
        "element": "Profane",
        "level": "I",
        "name": "Draining Impulse",
        "effect": "[Mana Cost: 2] The enchanted model receives additional 2 AP in the Active and Reactive Role. After this Enchantment is removed, the model becomes Fatigued.",
        "pw": "—",
        "type": "Spell, Enchantment, Ranged",
        "rch": "10",
        "stk": "1"
      },
      {
        "element": "Profane",
        "level": "I",
        "name": "Agony",
        "effect": "The enchanted model must perform an Intellect roll at the beginning of each Activation or Reaction. On a failed roll, it loses 1 HP and its Activation or Reaction ends. If a friendly model comes in Base Contact with the Enchanted model, this Enchantment ends.",
        "pw": "—",
        "type": "Spell, Enchantment, Ranged",
        "rch": "Casting Aura",
        "stk": "1"
      }
    ]
  },
  {
    "name": "Wizardry",
    "spells": [
      {
        "element": "Elder",
        "level": "I",
        "name": "Mana Burst",
        "effect": "Stagger.",
        "pw": "INT",
        "type": "Spell, Sorcery, Ranged",
        "rch": "16",
        "stk": "1"
      },
      {
        "element": "Elder",
        "level": "I",
        "name": "Dispel Magic",
        "effect": "Targetless. Choose one: Remove target Sorcery, Enchantment, or Transmutation Spell from the field / Remove target summoned creature from the field / Cancel Shrouded State.",
        "pw": "—",
        "type": "Spell, Healing, Ranged",
        "rch": "16, AoE: Circular L",
        "stk": "1"
      },
      {
        "element": "Elder",
        "level": "II",
        "name": "Confuse Target",
        "effect": "Mindgame, Ricochet I. The target model becomes Confused until the caster's next Strategic Phase. When casting this Spell, the caster may spend 1 Mana to gain +2 STK.",
        "pw": "—",
        "type": "Spell, Sorcery, Ranged",
        "rch": "16",
        "stk": "1"
      },
      {
        "element": "Elder",
        "level": "II",
        "name": "Ward",
        "effect": "Non-Critical DMG and related effects of any incoming Attack targeting the target of this Spell are ignored. When the caster is Engaged, this Spell can target only the caster.",
        "pw": "—",
        "type": "Spell, Sorcery, Ranged/Melee",
        "rch": "16",
        "stk": "1"
      },
      {
        "element": "Elder",
        "level": "III",
        "name": "Redirect Damage",
        "effect": "On Hit, the target's successful non-Critical Hits are negated. In addition, the target model receives a number of non-Critical Hits equal to the number of successful Attack Rolls (apart from Critical Hits) it made during its Attack, using the same Item, Spell and Abilities it used during its Attack. This Spell is not affected by \"Ranged (Friendly Fire)\".",
        "pw": "—",
        "type": "Spell, Sorcery, Ranged/Melee",
        "rch": "16",
        "stk": "1"
      },
      {
        "element": "Elder",
        "level": "III",
        "name": "Hastened Recovery",
        "effect": "Choose one: Remove Crippled, Bleeding, Weakened, or Poisoned State / The target regains 1 HP.",
        "pw": "—",
        "type": "Spell, Healing, Ranged",
        "rch": "16",
        "stk": "STA"
      }
    ]
  },
  {
    "name": "Other Spells",
    "spells": [
      {
        "element": "Earth",
        "level": "—",
        "name": "Rooting Embrace",
        "effect": "Focus. Affects all enemy models within the Casting Aura. On Hit, the model becomes Immobilized.",
        "pw": "—",
        "type": "Spell, Sorcery, Ranged",
        "rch": "Casting Aura",
        "stk": "1"
      },
      {
        "element": "Earth",
        "level": "—",
        "name": "Claws of Earth",
        "effect": "[Mana Cost: 1] Targetless. Each model within the AoE suffers 3 Hits.",
        "pw": "14",
        "type": "Spell, Sorcery, Ranged",
        "rch": "Casting Aura, AoE: Circular L",
        "stk": "1"
      },
      {
        "element": "Fire",
        "level": "—",
        "name": "Inferno",
        "effect": "[Mana Cost: 1] Burn (3), Targetless.",
        "pw": "INT",
        "type": "Spell, Enchantment, Ranged",
        "rch": "Casting Aura, AoE: Circular L",
        "stk": "1"
      },
      {
        "element": "Air",
        "level": "—",
        "name": "Thunderstorm",
        "effect": "[Mana Cost: 1] Focus. Ignore Armor, Stun.",
        "pw": "INT",
        "type": "Spell, Sorcery, Ranged",
        "rch": "Casting Aura, AoE: Circular L",
        "stk": "1"
      },
      {
        "element": "Water",
        "level": "—",
        "name": "Glacier Circle",
        "effect": "[Mana Cost: 1] Frostbite, Targetless. Enemy models within the AoE become Immobilized on Hit.",
        "pw": "INT",
        "type": "Spell, Sorcery, Ranged",
        "rch": "Casting Aura, AoE: Circular L",
        "stk": "1"
      },
      {
        "element": "Water",
        "level": "—",
        "name": "Wellspring",
        "effect": "Targetless. The casting can automatically succeed if the caster voluntarily suffers 1 Wound. The AoE area becomes a Shallow Aquatic Environment. When casting a Water Conjuration Spell, a creature can be summoned in this area.",
        "pw": "—",
        "type": "Spell, Ranged, Transmutation",
        "rch": "16",
        "stk": "1"
      },
      {
        "element": "Profane",
        "level": "—",
        "name": "Life Leech",
        "effect": "The enchanted model regains 1 HP for every Wound it deals to an enemy model without the Undead or Construct Trait (to the max of double its default HP).",
        "pw": "✯",
        "type": "Spell, Enchantment, Ranged",
        "rch": "10",
        "stk": "1"
      },
      {
        "element": "Profane",
        "level": "—",
        "name": "Corroding Embrace",
        "effect": "Armor-Piercing, Poison II.",
        "pw": "INT",
        "type": "Spell, Sorcery, Ranged",
        "rch": "16, AoE: Circular L",
        "stk": "1"
      },
      {
        "element": "Elder",
        "level": "—",
        "name": "Mass Mindbreak",
        "effect": "Mindgame, Stagger. Affects only selected enemy models within the AoE. If wounded, the target also becomes Panicked until caster's next Strategic Phase.",
        "pw": "INT",
        "type": "Spell, Sorcery, Ranged",
        "rch": "Casting Aura, AoE: Circular L",
        "stk": "1"
      }
    ]
  }
];
