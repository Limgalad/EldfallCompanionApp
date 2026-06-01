import { ClassInfo } from "./types";

export const classes: ClassInfo[] = [
  {
    name: "Alchemist",
    description: "Consumables replenish during the Alchemist's Strategic Phase. When casting a Transmutation-Type Spell, an Alchemist may Reroll up to 1 failed roll.",
    abilities: [
      "Consumables replenish during Strategic Phase.",
      "Transmutation-Type Spells: Reroll up to 1 failed roll."
    ]
  },
  {
    name: "Armsmaster",
    description: "In the Active Role, Armsmasters may gain +1 Strike when performing a Melee Attack.",
    abilities: [
      "Active Role: May gain +1 Strike when performing a Melee Attack."
    ]
  },
  {
    name: "Artificer",
    description: "During their Strategic Phase, Artificers may select an Enchantment Spell available to them and apply its effect to themselves without performing a roll, lasting until their next Strategic Phase.",
    abilities: [
      "Strategic Phase: Apply Enchantment to self without roll until next Strategic Phase."
    ]
  },
  {
    name: "Assassin",
    description: "Assassins score a Critical Hit on roll results of 1, 2, or 3.",
    abilities: [
      "Score a Critical Hit on roll results of 1, 2, or 3."
    ]
  },
  {
    name: "Berserker",
    description: "Once per turn, if a Berserker would suffer one or more Wounds as a consequence of Damage Roll(s), they may perform a Toughness roll for every Wound they would suffer. If a roll is successful, the corresponding damage is prevented.",
    abilities: [
      "Once per turn: Perform Toughness roll to prevent damage from Wounds."
    ]
  },
  {
    name: "Civilian",
    description: "Civilians have no particular abilities connected to their Class. However, some Quests may add a specific Effect to the Civilian Class.",
    abilities: [
      "No inherent abilities, but often subject to specific Quest rules."
    ]
  },
  {
    name: "Creature",
    description: "Creatures have no particular abilities connected to their Class. However, some Quests may add a specific Effect to the Creature Class.",
    abilities: [
      "No inherent abilities, but often subject to specific Quest rules."
    ]
  },
  {
    name: "Druid",
    description: "Druids gain a +4 Modifier when casting Spells of the Earth element. Furthermore, Druids can choose to cast Spells with either their Intellect or Morale value.",
    abilities: [
      "+4 Modifier when casting Earth element spells.",
      "Can choose to cast spells with either Intellect or Morale value."
    ]
  },
  {
    name: "Enchanter",
    description: "Enchanters may cast Enchantment-Type Spells on allied models without performing a roll.",
    abilities: [
      "Cast Enchantment-Type Spells on allied models without performing a roll."
    ]
  },
  {
    name: "Mage",
    description: "When casting a Spell, a Mage may spend an unspent Activation Point to Reroll any number of dice. Mana Counters represent the energy required for casting Spells. They can be spent to cover the cost of Conjuration-Type Spells or other powerful Spells.\n\n- In the Active Role, a Mage can convert any number of Activation Points into an equal number of Mana Counters, placing them in their personal pool.\n- Mana Counters are cumulative and do not disappear at the end of the turn.",
    abilities: [
      "Spend unspent AP to Reroll any number of dice when casting.",
      "Active Role: Convert AP into Mana Counters."
    ]
  },
  {
    name: "Marksman",
    description: "If a Marksman declares Idle during their Movement Step, it gains +4 Accuracy until the end of the Activation Sequence.",
    abilities: [
      "Declaring Idle during Movement Step grants +4 Accuracy until end of Sequence."
    ]
  },
  {
    name: "Mystic",
    description: "Mystics must use their Morale value instead of Intellect when casting Spells.",
    abilities: [
      "Must use Morale value instead of Intellect when casting spells."
    ]
  },
  {
    name: "Ranger",
    description: "In the End Phase of the Active Role, Rangers may perform a Normal Movement (this does not provoke a Reaction from the Reactive Player).",
    abilities: [
      "End Phase of Active Role: Perform a Normal Movement (does not provoke Reaction)."
    ]
  },
  {
    name: "Rogue",
    description: "Once per Activation, on at least one successful Hit against the target, a Rogue may perform one AG roll. If successful, the Rogue's Hit gains Knockdown.",
    abilities: [
      "Once per Activation: Successful Hit allows AG roll for Knockdown."
    ]
  },
  {
    name: "Sentinel",
    description: "In their Reactive Role, Sentinels may gain +1 Strike when performing an Attack.",
    abilities: [
      "Reactive Role: May gain +1 Strike when performing an Attack."
    ]
  },
  {
    name: "Soldier",
    description: "Soldiers gain +1 Offense, +1 Defense, +1 Accuracy, +1 Intellect, and +1 Morale for each other Soldier from the same Party within their Awareness that is not in the Incapacitated or Dead State, up to a maximum of +3.",
    abilities: [
      "Gain +1 OFF, DEF, ACC, INT, M for each other allied Soldier within Awareness (max +3)."
    ]
  },
  {
    name: "Sorcerer",
    description: "In their Active Role, when casting a Sorcery-Type Spell, a Sorcerer may Reroll up to 1 failed roll.",
    abilities: [
      "Active Role: Reroll up to 1 failed roll when casting Sorcery-Type Spells."
    ]
  },
  {
    name: "Summoner",
    description: "A Summoner can start the game with a Tier II or lower summoned creature in its Awareness area, brought to the field by one of their available Conjuration Spells (no roll or Activation Point required). A Summoner may share its pool of Mana Counters with other Summoners in the party. If the Summoner becomes Incapacitated, its accumulated Mana Counters are discarded.",
    abilities: [
      "Start game with Tier II or lower summoned creature in Awareness (no roll/AP).",
      "May share Mana pool with other Summoners."
    ]
  },
  {
    name: "Vitalist",
    description: "Vitalists can cast Healing-Type Spells on allied models that are not in the Incapacitated or Dead State without performing a roll.",
    abilities: [
      "Cast Healing-Type Spells on allied models (not Incapacitated/Dead) without performing a roll."
    ]
  },
  {
    name: "Warrior",
    description: "During their Strategic Phase, a Warrior may shift to a Defensive Stance (indicated by placing a Defensive Stance token next to the model).\n\n- In Defensive Stance, the Warrior has a Strike of 1 in its Active Role.\n- The Warrior retains its default Strike in its Reactive Role (as if in Active Role).\n- Defensive Stance lasts until the Warrior's next Strategic Phase unless specified otherwise.",
    abilities: [
      "Strategic Phase: Shift to Defensive Stance (Strike 1 in Active, retains default Strike in Reactive)."
    ]
  },
  {
    name: "Wizard",
    description: "When casting a Spell of the Elder Element, a Wizard may Reroll up to 1 failed roll.",
    abilities: [
      "Casting Elder Element spells: Reroll up to 1 failed roll."
    ]
  }
];
