export interface RuleSection {
  id: string;
  title: string;
  category: "Core" | "Combat" | "Magic" | "Abilities" | "Reference";
  content: string;
  subsections?: {
    title: string;
    content: string;
  }[];
}

export const rules: RuleSection[] = [
  {
    id: "attributes",
    title: "Attributes (Stats)",
    category: "Core",
    content: "The set parameters which display the degree of a certain model’s default capabilities, also referred to as 'Stats'.",
    subsections: [
      { title: "STA (Stamina)", content: "Indicates the default number of Activation Points a model receives at the beginning of its every turn and how swiftly it can wield certain Items." },
      { title: "SPD (Speed)", content: "Indicates the default distance that a model can cross on the field when moving, indicating up to how many inches on the field the model can move." },
      { title: "ARM (Armor)", content: "Indicates the default amount of natural or artificial protection the model has in order to cope with the received Power of a Hit." },
      { title: "HP (Health points)", content: "Indicates the default health of a model, or in other words, how many Wounds it can withstand before becoming Incapacitated." },
      { title: "OFF (Offense)", content: "Indicates a model’s default active melee capability used during its Active Role to conduct a Melee Attack." },
      { title: "DEF (Defense)", content: "Indicates a model’s default reactive melee capability used during its Reactive Role to conduct a Melee Attack." },
      { title: "ACC (Accuracy)", content: "Indicates a model’s default capability with ranged projectile weapons used when performing Ranged Attacks." },
      { title: "INT (Intellect)", content: "Indicates a model’s default mental dexterity and often its capability of casting Spells and perceiving its surroundings." },
      { title: "AG (Agility)", content: "Indicates the default physical nimbleness and kinesthetic capability of a model mainly used when avoiding incoming attacks (with dodge) and escaping certain dangers." },
      { title: "T (Toughness)", content: "Indicates the default physical strength and endurance of a model." },
      { title: "M (Morale)", content: "Indicates the default mental fortitude of a model." }
    ]
  },
  {
    id: "dice-rolls",
    title: "Dice Rolls",
    category: "Core",
    content: "Whenever a model performs an Action that would require a roll, the player determines the success or fail of the Action by performing the corresponding dice rolls. Rolls are performed with 20-sided dice (D20).",
    subsections: [
      { title: "Attribute Roll", content: "In order to perform a successful Attribute Roll, the result of the dice roll should be equal to or lower than the modified attribute." },
      { title: "Attack Roll", content: "Each die rolled as part of an Attack is an Attack Roll. A model rolls a number of Attack Rolls equal to its STK. Successful if result ≤ modified attribute and not cancelled during Confrontation." },
      { title: "Damage Roll", content: "To perform a Damage Roll, roll a number of dice equal to the number of Hits. For each die result that is equal to or lower than the Power (PW) of the used Weapon minus the target’s Armor (ARM) value, the target suffers one Wound." },
      { title: "Critical Hit", content: "A roll of 1 is a Critical Hit. It reduces target armor to 0 for that hit and beats all opponent's Confrontation roll results." },
      { title: "Reroll", content: "After the dice are rolled, the player may reroll a selected number of dice (depending on the ability), completely negating their previous roll result." }
    ]
  },
  {
    id: "game-sequence",
    title: "Game Sequence",
    category: "Core",
    content: "A game consists of a number of Rounds, each divided into Turns (one for each player).",
    subsections: [
      { title: "I) Strategic Phase", content: "Models of the Active Player may declare the use of any applicable Abilities, Items, or Stratagems. Note that a Leader’s Stratagems can only be declared during this Phase." },
      { title: "II) Upkeep Phase", content: "During the Upkeep Phase, all players allocate Activation Points to all of their models that can receive them. They allocate a number that is equal to their models’ Stamina values." },
      { title: "III) Tactical Phase", content: "Consists of multiple Activation Sequences. The Active Player may activate each of their models by spending their available Activation Points. Reactive Player may spend AP to react." },
      { title: "IV) End Phase", content: "Any applicable effects are resolved and both players discard any unspent Activation Points." }
    ]
  },
  {
    id: "activation-sequence",
    title: "Activation Sequence",
    category: "Combat",
    content: "An Activation Sequence occurs with every Activation during the Tactical Phase.",
    subsections: [
      { title: "1) Activation Step", content: "The Active Player Activates a model by spending one of its available Activation Points." },
      { title: "2) Movement Step", content: "An activated model may declare Normal Movement or Special Movement. During this Step, the activated model may either enter or cancel the Crouched State." },
      { title: "3) Reaction Step", content: "The Reactive Player must now declare which of their models will react against the Activated model, if any. Reaction can only be a Normal Action." },
      { title: "4) Action Step", content: "The activated model may declare a Normal Action or a Special Action in the Action Step." },
      { title: "5) Resolution Step", content: "Players apply modifiers. All necessary rolls are performed. Damage, Effects, and abilities are applied and carried out simultaneously." }
    ]
  },
  {
    id: "combat-mechanics",
    title: "Combat Mechanics",
    category: "Combat",
    content: "Key rules governing engagement and damage.",
    subsections: [
      { title: "Confrontation", content: "Occurs when two (or more) opposing models declare the Attack Action against one another. The model with one or more successful Confrontation rolls wins." },
      { title: "Reach (RCH)", content: "Represents the distance at which an Item, Ability or a Spell can be used. Reach 0” can only be used in Base Contact with the target." },
      { title: "Engaged in Melee", content: "If a model ends within the Melee Weapon’s Reach and LoS of an enemy model, it is considered Engaged (State)." },
      { title: "Cover", content: "Scenery provides cover from Ranged Attacks. Heavy (-4 Modifier) if object is taller/wider than model. Light (-2 Modifier) if smaller/thinner." },
      { title: "Higher Ground", content: "If a model is on elevated ground and partially obscured, it receives Light Cover. Behind a solid wall on elevation, it receives Heavy Cover." }
    ]
  },
  {
    id: "magic-rules",
    title: "Magic & Spellcasting",
    category: "Magic",
    content: "Wielders of magic channel raw mana from the elements or Items and shape it into Spells.",
    subsections: [
      { title: "Casting", content: "Unless stated otherwise, the model uses the Intellect attribute. Requires an Affinity (Element) of the specified Element." },
      { title: "Mana Counters", content: "Resource for Conjuration or powerful spells. Mages can convert AP to Mana. Mana counters are cumulative and do not disappear at the end of the turn." },
      { title: "Sorcery", content: "Mainly short-lasting, destructive effects. Effect lasts until the end of the Activation Sequence." },
      { title: "Healing", content: "Short-lasting, restorative effects." },
      { title: "Enchantment", content: "Last for an extended period (until next Strategic Phase). Can only be cast in Active Role. Cannot be prevented with Dodge." },
      { title: "Transmutation", content: "Permanent spells that affect the environment. Remain on field until removed or destroyed." },
      { title: "Conjuration", content: "Summon a creature to the field. Can only be cast in Active Role by declaring a Ritual (Special Action)." }
    ]
  },
  {
    id: "casting-aura",
    title: "Casting Aura",
    category: "Magic",
    content: "Some Spells can only be cast in the proximity of their caster. Casting Aura is an area in size equal to the caster’s Awareness.",
    subsections: [
      { title: "Targeting", content: "In the Active Role, the caster can target models within the Casting Aura even without Line of Sight, but the casting attribute suffers a halving Modifier. Targets cannot benefit from Cover." }
    ]
  },
  {
    id: "summoning-limit",
    title: "Summoning Limit",
    category: "Magic",
    content: "A caster's ability to maintain summoned creatures is limited by their mental fortitude.",
    subsections: [
      { title: "Limit Calculation", content: "A caster cannot cast any more Conjuration Spells if the combined Summoning Limit (Tier) of their creatures on the field equals or exceeds their modified Stamina." },
      { title: "Dismissal", content: "During the Strategic Phase, a caster can voluntarily dismiss a summoned creature, removing it from the field." }
    ]
  },
  {
    id: "fall-damage",
    title: "Fall Damage",
    category: "Combat",
    content: "Models moving or moved from a higher to a lower surface may suffer damage.",
    subsections: [
      { title: "Falling Distance", content: "If a model falls a distance greater than its halved Speed value, it must perform an Agility roll for each interval equal to its halved Speed." },
      { title: "Damage", content: "The model suffers a Wound for every failed Agility roll." }
    ]
  },
  {
    id: "measuring-modes",
    title: "Measuring Modes",
    category: "Reference",
    content: "Players should agree on a measuring mode before starting the game.",
    subsections: [
      { title: "Assisted Mode", content: "Players can pre-measure any distance at any time." },
      { title: "Standard Mode", content: "Pre-measuring is limited to Awareness and the activated model's Movement distance." },
      { title: "Realism Mode", content: "No pre-measuring allowed. Measuring only occurs when an Action or Movement is performed." }
    ]
  },
  {
    id: "inventory-weight",
    title: "Inventory & Weight",
    category: "Reference",
    content: "Models have limited capacity for carrying equipment.",
    subsections: [
      { title: "Inventory (X)", content: "X represents the total weight or number of Items a model can carry." },
      { title: "Over-encumbered", content: "If Weight/Quantity exceeds X, the model cannot perform Movement or Special Actions." },
      { title: "Dropping Items", content: "A model may drop Items during its Activation, represented by a Cache/Loot token in Base Contact." }
    ]
  },
  {
    id: "environments",
    title: "Environments",
    category: "Reference",
    content: "Specific characteristics assigned to areas of the battlefield.",
    subsections: [
      { title: "Aquatic", content: "Shallow: Half SPD and halved AG. Deep: Cannot declare Jump, Attack, Assist, or Ritual; heavy armor models may drown." },
      { title: "Dangerous", content: "Suffers 1 Wound on contact unless a successful Dodge (AG roll) is performed." },
      { title: "Dark", content: "LoS limited to Awareness. Targeting outside half Awareness suffers -3 modifier." },
      { title: "Difficult", content: "Half SPD (2 inches of Movement per 1 inch moved)." },
      { title: "Forest", content: "Ranged Attacks through forest suffer -3 modifier. LoS blocked through two or more forest areas." },
      { title: "Sacred Ground", content: "Strategic Phase: Recover 1 HP or remove one State. Undead/Profane models suffer damage instead." }
    ]
  },
  {
    id: "mounted-rules",
    title: "Mounted Rules",
    category: "Combat",
    content: "Mounts are models with the special Class: Mount. A Rider can ride a Mount, linking their profile cards together to form a single mounted model.",
    subsections: [
      { title: "Mount (Class)", content: "This Class indicates that the model can be mounted." },
      { title: "Rider Requirements", content: "Only a model whose Profile card lists the name of a specific Mount may ride that Mount." },
      { title: "Mounting", content: "A model may mount during its Strategic Phase if no enemy model has LoS to it, or by declaring Assist (targeting itself) during its Active Role. When a model mounts, the Mount appears instantly on the field. A model cannot mount if it is in the Engaged State." },
      { title: "Dismounting", content: "A model may dismount during its Strategic Phase, Movement Step, or by declaring Dodge. Upon dismounting, the Mount is instantly removed from the field." },
      { title: "Profile Interaction", content: "When mounted, the Rider's profile is modified by the Mount's Attributes (+/− value modifies, flat number replaces). The Rider gains access to the Mount's Abilities and Inventory. The Mount and Rider are treated as a single model while mounted." },
      { title: "HP Interaction", content: "If the Mount provides bonus HP, that HP is lost first when taking Wounds. When bonus HP is reduced to 0, further damage is applied to the Rider's HP. Bonus HP does not reset upon dismounting and remounting." },
      { title: "Restrictions", content: "Mounted Riders cannot perform Attacks with Items with RCH 0, unless the Weapon Type is Natural. STK of Weapons cannot be increased by Abilities while mounted. If hit by an Attack with Knockdown, or if the Rider becomes Incapacitated or Dead, they are automatically dismounted." }
    ]
  }
];

export interface State {
  name: string;
  description: string;
}

export const states: State[] = [
  { 
    name: "Bleeding", 
    description: "A model in this State must perform a Toughness roll in its every Strategic Phase. A failed roll causes the model to suffer a Wound." 
  },
  { 
    name: "Blinded", 
    description: "A model in this State has no LoS (other than to itself) and cannot perform any Actions other than Assist, Dodge or Nothing." 
  },
  { 
    name: "Confused", 
    description: "A model in this State has halved Offense, Defense, Accuracy, Intellect, Agility and Morale." 
  },
  { 
    name: "Crouched", 
    description: "The Hitbox of a Crouched model becomes the size and volume of its base.\n\nWhile in this State:\n- Speed and Armor value is halved\n- Attack Strike value becomes 1\n- Cannot make other models Engaged\n- During the Movement Step, may only declare Walk or Idle\n\nIn the Active Role, this State may be voluntarily canceled during the model's Movement Step. This State may also be canceled with a Dodge." 
  },
  { 
    name: "Crippled", 
    description: "A model in this State has halved Speed and Agility." 
  },
  { 
    name: "Dead", 
    description: "A Dead model's Hitbox becomes the size and volume of its base.\n\nA Dead model:\n- Cannot receive Activation Points\n- Cannot perform Activations nor Reactions\n- Cannot use or benefit from any Skills, Traits, Upgrades, Items, etc.\n- Is ignored for all impacts (scoring in Quests, Ranged Friendly Fire, etc.)\n- Does not obstruct Movement, but a model may not end their Movement on top of a Dead model\n\nWhen a model enters Dead State, it retains its other States. Unless specified otherwise, a Dead model cannot regain HP." 
  },
  { 
    name: "Engaged", 
    description: "During the Movement Step (Active Role), an Engaged model may only declare Idle or Walk. If it declares Walk, it can only move directly towards the enemy causing the Engaged State.\n\nIf Engaged by more than one model, it must choose one enemy to move toward.\n\nWhile Engaged, a model may only declare:\n- Melee Attack\n- Assist (targeting itself)\n- Dodge\n\nA model ceases to be Engaged when it:\n- Leaves the melee weapon reach of the enemy model\n- Disengages with a Dodge\n- Renders the enemy Incapacitated, Petrified, Crouched or Dead\n\nWhile Engaged, a model automatically has LoS to all enemy models causing the Engaged State, but cannot react against models outside of its Awareness." 
  },
  { 
    name: "Fatigued", 
    description: "A model in this State cannot regain AP during the Upkeep Phase. This State is canceled at the beginning of this model's next Strategic Phase." 
  },
  { 
    name: "Flying", 
    description: "While in this State, the model:\n- Has doubled Speed\n- Has Melee Attack Strike value of 1\n- May move over scenery, obstacles and models, or end its movement above them (unless the scenery is of infinite height)\n- Cannot benefit from Cover\n- Always has LoS to all models, and all models have LoS to it\n- Cannot become Engaged or cause Engaged\n- Cannot voluntarily become Crouched\n- Cannot be targeted by Melee Attacks, except by other Flying models — however, if a Flying model declares a Melee Attack against a non-Flying model, that model may declare a Melee Attack in return\n\nThe Flying State is automatically canceled if the model becomes Incapacitated, Dead, Immobilized, Petrified or Crouched.\n\nAttack and movement distances are measured as if the figure were placed on the field." 
  },
  { 
    name: "Immobilized", 
    description: "A model in this State cannot perform any Movement, Special Movement or Special Action.\n\nThis State can be canceled with a successful Dodge, which may be performed with either Agility or Toughness. When declaring Dodge, the model cannot move or enter/cancel the Crouched State unless the Dodge is successful." 
  },
  { 
    name: "Incapacitated", 
    description: "When a model's HP reaches 0, it becomes Incapacitated and immediately enters the Crouched State. The model retains all other States.\n\nAn Incapacitated model:\n- Cannot receive Activation Points\n- Cannot perform Activations nor Reactions (retains remaining AP until End Phase of that turn)\n- Cannot use or benefit from any Skills, Traits, Upgrades, Items, etc.\n- Is ignored for scoring in Quests and Ranged Friendly Fire\n- Is still hit by Attacks such as AoEs or Sweep Attacks\n\nAn Incapacitated Leader cannot use Stratagems.\n\nAn already Incapacitated model that suffers another Wound automatically becomes Dead.\n\nThis State is canceled if the model regains at least 1 HP. If Incapacitation is caused by an effect (with HP still above 0), the State is canceled during the model's next Strategic Phase — at which point the model may voluntarily cancel Crouched." 
  },
  { 
    name: "Panicked", 
    description: "A Panicked model must perform a Morale roll at the beginning of every Activation or Reaction.\n\n- Active Role — failed roll: Must perform an entire Run movement towards the nearest open edge of the field. If equidistant from two or more edges, the controlling player chooses. If the movement would end past the edge, the model is removed from play and counts as a loss.\n- Active Role — starts Engaged: Declares Idle and Dodge.\n- Reactive Role — failed roll: Can only declare Dodge (towards the field edge) or Nothing." 
  },
  { 
    name: "Poisoned", 
    description: "A model in this State must perform a Toughness roll with a −6 modifier in its every Strategic Phase. A failed roll causes the model to suffer a Wound." 
  },
  { 
    name: "Shrouded", 
    description: "While in this State, the model is represented on the field by a Shrouded token.\n\n- Cannot be the target of Actions other than Perceive (Dodge has no target and is a valid Reaction)\n- Has 360° Line of Sight\n- The model's identity and profile are secret information — the controlling player is not obliged to disclose them while the model remains Shrouded\n- Shrouded models retain all Skills, Traits, Size, etc., though this information is not publicly disclosed\n\nThe Shrouded State is automatically canceled if the model declares a Normal Action (other than Nothing) or Special Action. Performing an Attack while Shrouded reveals the model but grants the Surprise Attack Trait to that Attack." 
  },
  { 
    name: "Slowed", 
    description: "A model in this State has halved SPD." 
  },
  { 
    name: "Weakened", 
    description: "A model in this State has halved Toughness and −1 Stamina." 
  }
];

export interface Trait {
  name: string;
  description: string;
}

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
    description: "If a model suffers at least one Wound with this Trait, it suffers an additional Wound. (Berserkers can perform a T roll for each Wound to negate it.)"
  },
  {
    name: "Construct",
    description: "This model is unaffected by Surprise Attack, Stagger, Vampirism, Mindgame, and Burn. It is immune to Charm and Toxic Environment. It cannot become Panicked, Bleeding, Poisoned, Weakened, or Confused. Abilities allowing attackers to regain HP after dealing a Wound do not affect it. It cannot regain HP from Spells or Skills without the Earth Element. If its HP reaches 0, it is removed from the field."
  },
  {
    name: "Continuous",
    description: "An effect with this trait remains in play until the end of the Quest or until removed with a certain other effect, regardless of other imposed time durations (Sorcery, Enchantment, etc.)."
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
    description: "This model is unaffected by the Stagger, Vampirism, and Mindgame Traits, the Charm Skill, and Toxic Environment. It cannot enter Bleeding, Poisoned, or Weakened States. If its HP reaches 0, it is removed from the field."
  },
  {
    name: "Elemental Essence (Element)",
    description: "This model is unaffected by Effects from (Element) Attacks (it still suffers damage as normal). It deals (Element) Spell damage with Melee Attacks using Natural Weapons."
  },
  {
    name: "Familiar",
    description: "When a Creature with this Trait is summoned by a Conjuration Spell, the caster gains additional Abilities and Stat Modifiers listed on the creature's profile. If the caster would take damage and suffer Wounds, the familiar may be removed instead (if multiple, the player chooses which). Creatures with this Trait have no Summoning Limit, but the caster may control only one of each named creature. Note: Familiars are not considered full models, but their miniatures may be used as visual elements. Some familiars have individual miniatures, while others are attached to the caster's. The caster gains the familiar's Abilities and modifiers only if the familiar is summoned, regardless of attached miniatures."
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
    name: "Poison I/II",
    description: "I: WEAK POISON; If a model suffers a Wound with this Trait, it becomes Weakened until its next Strategic Phase. II: STRONG POISON; If a model suffers a Wound with this Trait, it becomes Weakened and Poisoned."
  },
  {
    name: "Resistance I/II (X)",
    description: "I: The PW of a Hit with (X) Type or Trait against this model is halved. II: Hits and Effects from an Attack with (X) Type or Trait are negated."
  },
  {
    name: "Resourceful I/II",
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
    name: "Sweep I/II",
    description: "I: On a successful Attack roll, all models within this model's LoS and Melee RCH suffer a Hit. II: On a successful Attack roll, this model's Front arc becomes 360° for the remainder of the Activation Sequence. All models within this model's Melee RCH and LoS suffer a Hit."
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
    description: "An Item with this Trait enables a Ranged Attack with RCH equal to the user's T. STK can be up to the Item's QTY. Upon use, the Item is removed, even if the Attack is unsuccessful. If the Attack incapacitates or kills the target, the Item can be recovered by moving into Base Contact with the target."
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
    name: "Undead",
    description: "I: This model cannot be affected by Poisoned, Weakened, Bleeding, or Panicked States. Spells with the Mindgame Trait cannot target or affect it. Healing-type Spells of the Divine Element do not restore any HP but instead, deal 15 PW damage to it. If this model's HP reaches 0, it becomes Dead."
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

export interface Skill {
  name: string;
  description: string;
}

export const skills: Skill[] = [
  {
    name: "Backstab",
    description: "During an Attack Action against a target that lacks LoS to this model, this model's Hits gain +3 PW for that Attack, and one Strike automatically becomes a Hit (not included in Confrontation rolls). All other Strikes are resolved normally. If this model loses the Confrontation roll, both models may still score successful Hits."
  },
  {
    name: "Chain Attack",
    description: "Once per Activation Sequence, if another allied model scores a Hit against an enemy within this model's LoS, this model may perform an unmodified STK 1 Attack against that enemy (before DMG rolls). If there are multiple targets, choose one.\n\n- Not an Activation or Reaction and does not consume AP\n- Ignores (Ranged) Friendly Fire\n- Hits generated from Chain Attack cannot generate further Chain Attacks"
  },
  {
    name: "Charm I / II",
    description: "- I: An enemy declaring a Reaction against this model must first perform an INT roll. On a failed roll, it may only declare Nothing until the end of the Activation Sequence.\n- II: On a failed INT roll, the enemy must also Walk toward this model for its full SPD (if able) at the end of the Activation Sequence."
  },
  {
    name: "Clairvoyance",
    description: "- Reactive Role: May declare a Reaction using Casting Aura Spells to target enemy models within Awareness without requiring LoS. Ignores LoS restrictions from Environments, the Blinded State, and the Surprise Attack Trait of enemies within Awareness.\n- Active Role: Does not suffer halving modifiers when casting Spells without LoS."
  },
  {
    name: "Climbing",
    description: "This model may perform the Climb Special Movement as Normal Movement, ignoring related Movement penalties. SPD is not halved while Climbing."
  },
  {
    name: "Dash",
    description: "When performing a Run Special Movement, this model may declare an unmodified STK 1 Melee Attack in its Action Step."
  },
  {
    name: "Dual Wield",
    description: "This model may replace a Shield with a second (Melee) Weapon, provided both Weapons have RCH 1 or less and lack the Two-Handed Trait.\n\n- May reroll one Melee Attack roll\n- Must choose which Weapon's PW and STK values apply during an Attack Action\n- May apply the Effects of both Weapons if applicable"
  },
  {
    name: "Finishing Strike",
    description: "When this model causes at least one Wound to a target, it may immediately make an unmodified STK 1 Attack against the same target using the same Item or Skill. If there are multiple targets, choose one."
  },
  {
    name: "Flicker",
    description: "When declaring Movement, this model may ignore obstacles and other models, moving in any direction including vertically. Distance is measured as a straight line between start and end positions.\n\n- Cannot end Movement on another model or inside scenery\n- If ending mid-air, place it underneath and test for Fall Damage\n- Enemies may react if they have LoS to the start or end positions, or if this model moves into their Awareness"
  },
  {
    name: "Flight",
    description: "This model may enter or cancel the Flying State during its Movement Step. It cannot be affected by Fall Damage. A model cannot enter the Flying State while Engaged."
  },
  {
    name: "Follow-Up",
    description: "If an enemy disengages from this model, it may move up to half its SPD toward the disengaged model."
  },
  {
    name: "Foresight",
    description: "When targeted by an Attack in the Reactive Role without having declared a Reaction during the Reaction Step, this model may instead declare a Reaction during the Action Step, after the Active model has declared its Action."
  },
  {
    name: "Hit and Retreat",
    description: "During its Movement Step, this model may cancel its Engaged State. If it declares an Attack in its Activation, it may perform (an additional) Walk at the end of the Resolution Step."
  },
  {
    name: "Hurl",
    description: "This model may declare a STK 1 Ranged Attack with RCH and PW equal to its T value, AoE: Circular S, and the Stagger Trait. The STK value cannot be modified.\n\n- If the target is within ½ RCH, this model gains +4 ACC for this Attack Action\n- Cannot use any other Ranged Weapon or Spell during this Activation Sequence"
  },
  {
    name: "Impede",
    description: "When this model declares an Attack of Opportunity against a non-Engaged model, that model's Movement ends at the point of the Attack. If the Attack was Melee, the target also becomes Engaged immediately."
  },
  {
    name: "Infiltration",
    description: "During the Deployment Phase:\n- I: Deploy this model up to the middle line of your half of the field.\n- II: Deploy this model anywhere outside the opponent's Deployment Zone."
  },
  {
    name: "Leap",
    description: "This model may perform the Jump Special Movement as Normal Movement. SPD is not halved while Jumping."
  },
  {
    name: "Protector",
    description: "When an ally within ½ SPD is targeted by an Attack during this model's Reactive Role, this model may spend 1 AP to move into Base Contact with the ally and become the new target of the Attack."
  },
  {
    name: "Regeneration",
    description: "During its Strategic Phase, this model may regain 1 HP per Skill level and can cancel the Bleeding, Weakened, and Crippled States."
  },
  {
    name: "Snipe",
    description: "The STK of an Attack using this Skill is 1 and cannot be modified. This model ignores Cover and (Ranged) Friendly Fire."
  },
  {
    name: "Stealth",
    description: "- I: If this model activates or enters an enemy's Awareness, that enemy cannot declare a Reaction unless it has LoS to this model.\n- II: Deploy this model in the Shrouded State. If no enemy has LoS, it may re-enter the Shrouded State during its Strategic Phase."
  },
  {
    name: "Taunt",
    description: "This Skill can only be used during Movement. All enemy models with LoS to this model or with this model in their Awareness must perform an INT roll. On a failed roll, the enemy model must declare a Reaction against this model if possible."
  },
  {
    name: "Tracking",
    description: "This model gains +3 to Perceive and Uncover Actions. It does not suffer the INT penalty for Uncover and may reroll one roll when performing Perceive."
  }
];

export interface ClassInfo {
  name: string;
  description: string;
  abilities: string[];
}

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

export interface CombatArt {
  name: string;
  category: string;
  level: number;
  description: string;
}

export interface CombatArtCategory {
  name: string;
  ruleText: string;
  flavorText: string;
  levels: CombatArt[];
}

export const combatArts: CombatArt[] = [
  // ARCHERY
  { 
    name: "Overdraw", 
    category: "Archery", 
    level: 1, 
    description: "When using a weapon with two RCH values, the first RCH value is increased by 3 spaces." 
  },
  { 
    name: "Impeding Momentum", 
    category: "Archery", 
    level: 2, 
    description: "If hit, the target becomes Slowed until the end of the turn." 
  },
  { 
    name: "Staggering Precision", 
    category: "Archery", 
    level: 3, 
    description: "User's Ranged Attack gains Stagger." 
  },
  { 
    name: "Quickdraw", 
    category: "Archery", 
    level: 4, 
    description: "User's Ranged Attack gains +1 STK." 
  },
  
  // ASSASSINATION
  { 
    name: "Aiming for the Vitals", 
    category: "Assassination", 
    level: 1, 
    description: "User's Attack gains +6 Power." 
  },
  { 
    name: "Cunning Precaution", 
    category: "Assassination", 
    level: 2, 
    description: "User's Attack gains Poison I Trait." 
  },
  { 
    name: "Overwhelming Assault", 
    category: "Assassination", 
    level: 3, 
    description: "User's Attack gains +1 Strike." 
  },
  { 
    name: "Decisive Blow", 
    category: "Assassination", 
    level: 4, 
    description: "In the Active Role, user's successful Attack Rolls become Critical Hits." 
  },
  { 
    name: "Deadly Precision", 
    category: "Assassination", 
    level: 5, 
    description: "If a model suffers a Wound by this ability, it automatically dies." 
  },
  
  // BERSERK
  { 
    name: "Grapple & Thrash", 
    category: "Berserk", 
    level: 1, 
    description: "User's Melee Attack gains Knockdown." 
  },
  { 
    name: "Onslaught", 
    category: "Berserk", 
    level: 2, 
    description: "User's Melee Attack gains Sweep." 
  },
  { 
    name: "Limb Fracture", 
    category: "Berserk", 
    level: 3, 
    description: "User's Melee Attack gains Crippling." 
  },
  { 
    name: "Mortal Wound", 
    category: "Berserk", 
    level: 4, 
    description: "User's Melee Attack gains Cleave." 
  },
  
  // FENCING
  { 
    name: "Masterful Parry", 
    category: "Fencing", 
    level: 1, 
    description: "Target's Melee Attack suffers −3 Modifier." 
  },
  { 
    name: "Harsh Riposte", 
    category: "Fencing", 
    level: 2, 
    description: "Target's Melee Attack suffers −1 Strike (cannot be reduced below 1)." 
  },
  { 
    name: "Second Wind", 
    category: "Fencing", 
    level: 3, 
    description: "User's Melee Attack gains +1 Strike." 
  },
  { 
    name: "Grapple & Thrash", 
    category: "Fencing", 
    level: 4, 
    description: "User's Melee Attack gains Knockdown." 
  },
  { 
    name: "Striking the Gaps", 
    category: "Fencing", 
    level: 5, 
    description: "User's Melee Attack gains Ignore Armor." 
  }
];

export const combatArtCategories: CombatArtCategory[] = [
  {
    name: "Archery",
    ruleText: "The selected level’s effect applies to this model’s Ranged Attack.",
    flavorText: "Techniques focused on enhancing ranged attacks, increasing range, precision, and momentum.",
    levels: combatArts.filter(ca => ca.category === "Archery")
  },
  {
    name: "Assassination",
    ruleText: "Selected level’s effect is applied to this model’s Attack.",
    flavorText: "Lethal arts designed for quick, decisive strikes, vital point targeting, and overwhelming assault.",
    levels: combatArts.filter(ca => ca.category === "Assassination")
  },
  {
    name: "Berserk",
    ruleText: "Selected level’s effect is applied to this model’s Melee Attack.",
    flavorText: "Brutal melee techniques that use raw power to grapple, thrash, and inflict mortal wounds.",
    levels: combatArts.filter(ca => ca.category === "Berserk")
  },
  {
    name: "Fencing",
    ruleText: "Selected level’s effect is applied to this model’s Melee Attack.",
    flavorText: "Disciplined swordplay focusing on parries, ripostes, and striking gaps in enemy armor.",
    levels: combatArts.filter(ca => ca.category === "Fencing")
  }
];
