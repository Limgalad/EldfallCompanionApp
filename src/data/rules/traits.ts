import { Trait } from "./types";

export const traits: Trait[] = [
  {
    name: "Acute Senses",
    description: "This model may perform Perceive and Uncover Actions using AG instead of INT. Its Awareness increases by 3 inches. When Dodging without LoS, its AG is not halved."
  },
  {
    name: "Advantage (X)",
    description: "Once per Activation Sequence, this model may reroll any number of dice (once) during an Attack Action against a target with the (X) characteristic (Size, Class, Trait, etc.)."
  },
  {
    name: "Affinity (Element)",
    description: "This model can cast (Element) Spells. (Example: Element = Fire, Water, Profane, etc.)"
  },
  {
    name: "Armor-Piercing",
    description: "When making a DMG roll for a Hit with this Trait, add only half the target's ARM value."
  },
  {
    name: "Bleed",
    description: "If a model suffers at least one Wound with this Trait, it enters the Bleeding State."
  },
  {
    name: "Brute",
    description: "This model gains +1 STK when using Items with the Two-Handed Trait and ignores Two-Handed restrictions."
  },
  {
    name: "Burn (X)",
    description: "If a model suffers at least one Wound with this Trait, the attacker may perform X DMG rolls with ARM value 0. Each successful roll causes a Wound. If this Wound causes the model to become Dead, it is removed from the field."
  },
  {
    name: "Cleave",
    description: "If a model suffers at least one Wound with this Trait, it suffers an additional Wound."
  },
  {
    name: "Construct",
    description: "This model is unaffected by Surprise Attack, Stagger, Vampirism, Mindgame, and Burn. It is immune to Charm and Toxic Environment. It cannot become Panicked, Bleeding, Poisoned, Weakened, or Confused. Abilities allowing attackers to regain HP after dealing a Wound do not affect it. It cannot regain HP from Spells or Skills without the Earth Element. If its HP reaches 0, it is removed from the field."
  },
  {
    name: "Continuous",
    description: "An effect with this Trait remains in play until the end of the Quest or until removed by a specific effect, regardless of other imposed time durations (Sorcery, Enchantment, etc.)."
  },
  {
    name: "Crippling",
    description: "If a model suffers at least one Wound with this Trait, it must perform a T roll. A failed roll causes it to become Crippled."
  },
  {
    name: "Demon",
    description: "When this model deals a Wound, the target must perform an M roll. A failed roll causes the target to become Panicked until the end of the turn. A Critical Hit automatically Panics the target until the end of the turn. This model's Attack receives a +4 modifier against a Panicked target. This Trait does not affect models with the Demon Trait."
  },
  {
    name: "Duelist",
    description: "The target of this model's Attack cannot use Combat Arts of level III or lower."
  },
  {
    name: "Elemental",
    description: "This model is unaffected by the Stagger, Vampirism, and Mindgame Traits, the Charm Skill, and Toxic Environment. It cannot enter the Bleeding, Poisoned, or Weakened States. If its HP reaches 0, it is removed from the field."
  },
  {
    name: "Elemental Essence (Element)",
    description: "This model is unaffected by Effects from (Element) Attacks (it still suffers damage as normal). It deals (Element) Spell damage with Melee Attacks using Natural Weapons."
  },
  {
    name: "Familiar",
    description: "When a Creature with this Trait is summoned by a Conjuration Spell, the caster gains additional Abilities and Stat Modifiers listed on the creature's profile. If the caster would take damage and suffer Wounds, the familiar may be removed instead (if multiple, the player chooses which). Creatures with this Trait have no Summoning Limit, but the caster may control only one of each named creature. The caster gains the familiar's Abilities and modifiers only while the familiar is summoned, regardless of attached miniatures."
  },
  {
    name: "Fearless",
    description: "This model cannot become Panicked."
  },
  {
    name: "Focus",
    description: "Spells or Items with this Trait do not require a target when declaring an Attack or Assist. Instead, the caster or user becomes the center of the effect, and models within the caster's Casting Aura are affected by the Spell or Item."
  },
  {
    name: "Frostbite",
    description: "If a model suffers at least one Wound with this Trait, it must perform a single Toughness roll, regardless of the number of Hits. On a failed roll, the model suffers an additional Wound."
  },
  {
    name: "Ignore Armor",
    description: "A Hit with this Trait reduces the target's ARM to 0 for the DMG roll duration."
  },
  {
    name: "Ignore Shield",
    description: "Attacks with this Trait ignore the effects of Shields."
  },
  {
    name: "Incorporeal",
    description: "The PW of a Hit lacking the Spell Type or Burn Trait against this model is halved. This model ignores Environment rules and Movement penalties, allowing it to move through obstacles and vertically. It cannot end within an obstacle and cannot become Engaged."
  },
  {
    name: "Inspiring I",
    description: "Other allied models within this model's Awareness and with the same Affiliation gain +6 M."
  },
  {
    name: "Intimidating",
    description: "Models in the Panicked State with LoS towards this model suffer −6 M."
  },
  {
    name: "Knockback (X)",
    description: "During the Resolution Step, a model Hit with this Trait is moved for X inches away from the attacker. The direction is the attacker's choice. This Trait does not affect models two or more Sizes larger than the attacker."
  },
  {
    name: "Knockdown",
    description: "A model that suffers a Hit with this Trait becomes Crouched. It does not affect models two or more Sizes larger than the attacker."
  },
  {
    name: "Mana Cost (X)",
    description: "To cast a Spell with this Trait, the caster must spend Mana Counters equal to the X value."
  },
  {
    name: "Menacing (X)",
    description: "Models with LoS to this model suffer a −2 M modifier for every level of this ability."
  },
  {
    name: "Mindgame",
    description: "A Dodge against an Attack with this Trait uses INT instead of AG. If a model suffers a Mindgame Hit with PW, it rolls INT instead of making a Damage Roll. On a failed roll, the model suffers damage."
  },
  {
    name: "Poison I / II",
    description: "I — Weak Poison: If a model suffers a Wound with this Trait, it becomes Weakened until its next Strategic Phase. II — Strong Poison: If a model suffers a Wound with this Trait, it becomes Weakened and Poisoned."
  },
  {
    name: "Resistance I / II (X)",
    description: "I: The PW of a Hit with (X) Type or Trait against this model is halved. II: Hits and Effects from an Attack with (X) Type or Trait are negated."
  },
  {
    name: "Resourceful I / II",
    description: "I: This model may receive 1 additional Upgrade. II: This model may receive another additional Upgrade."
  },
  {
    name: "Ricochet (X)",
    description: "When a model is hit by an Attack with this Trait, the nearest enemy model within 5” is also hit by the same Attack. This effect can repeat up to X times per Activation Sequence but cannot target the same model more than once. If multiple enemies are equidistant from the hit model, they all suffer this effect."
  },
  {
    name: "Spellbound (X)",
    description: "A model or Item with this Trait is enchanted by the Enchantment Spell listed in brackets. The Spell remains active for the entire game."
  },
  {
    name: "Stagger",
    description: "A model that suffers a Hit with this Trait loses 1 Activation Point (until the end of the turn). This Trait does not affect models two or more Sizes larger than the attacker."
  },
  {
    name: "Strategist",
    description: "This model can use two Stratagems of different names in its Strategic Phase."
  },
  {
    name: "Stun",
    description: "A model that suffers at least one Wound with this Trait must perform a T roll. If failed, the model loses all AP (until the end of the turn)."
  },
  {
    name: "Surprise Attack",
    description: "An Attack with this Trait halves the target model's OFF, DEF, ACC, AG, and INT until the end of the Activation Sequence."
  },
  {
    name: "Survival (X Environment)",
    description: "This model is unaffected by the X Environment."
  },
  {
    name: "Sweep I / II",
    description: "I: On a successful Attack roll, all models within this model's LoS and Melee RCH suffer a Hit. II: On a successful Attack roll, this model's Front arc becomes 360° for the remainder of the Activation Sequence. All models within Melee RCH and LoS suffer a Hit."
  },
  {
    name: "Tactician",
    description: "The Deployment Zone of the party in which this model is present is extended for 5 inches (towards the middle of the field)."
  },
  {
    name: "Targetless",
    description: "In the Active Role, an Attack with this Trait does not require a model as a target. The target can be any field surface. If the Spell has both Casting Aura and AoE Reach, and the target is a flat surface/ground, the template must be placed wholly within the Casting Aura."
  },
  {
    name: "Throwing",
    description: "An Item with this Trait enables a Ranged Attack with RCH equal to the user's T. STK can be up to the Item's QTY. Upon use, remove QTY of the Item equal to the STK, even if the Attack is unsuccessful. If the Attack incapacitates or kills the target, the Item can be recovered by moving into Base Contact with the target."
  },
  {
    name: "Trample",
    description: "When this model declares Run, it can move through any model of smaller Size. Each model it moves through or touches suffers a Hit with Knockdown and PW equal to this model's T. (Note: The Reacting model can avoid the Hit with a successful Dodge.)"
  },
  {
    name: "Two-Handed",
    description: "A Weapon with this Trait cannot be used with an equipped Shield or another Weapon."
  },
  {
    name: "Undead I",
    description: "This model cannot be affected by the Poisoned, Weakened, Bleeding, or Panicked States. Spells with the Mindgame Trait cannot target or affect it. Healing-Type Spells of the Divine Element do not restore HP — instead, they deal 15 PW damage to it. If this model's HP reaches 0, it becomes Dead."
  },
  {
    name: "Unkeen",
    description: "If a model would suffer a Wound with this Trait, it must first perform a T roll. A failed roll causes the Wound, while a successful roll negates it."
  },
  {
    name: "Unstoppable",
    description: "If the target of an Attack Action is smaller, Confrontation does not occur. Successful Attack rolls from either model do not block the other."
  },
  {
    name: "Unwieldy",
    description: "When used by a Size: Medium or a smaller model, STK of this Item can never exceed 1. When performing an Attack with this Item while not Mounted, the model may reroll 1 Attack roll once."
  },
  {
    name: "Watchful",
    description: "This model receives double AP in its Reactive Role."
  },
  {
    name: "Vigilance",
    description: "This model is immune to the Surprise Attack Trait, has a 360° Front arc, and no Back arc."
  },
  {
    name: "Weakening",
    description: "If this model suffers a Wound with this Trait, it becomes Weakened."
  }
];
