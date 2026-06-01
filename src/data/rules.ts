export interface RuleSection {
  id: string;
  title: string;
  category: "Core" | "Combat" | "Magic" | "Abilities" | "Reference" | "Model Profiles" | "Game play" | "Game Sequence" | "Hostiles" | "General Effect" | "Movement" | "Normal Action" | "Special Action" | "Environment";
  content: string;
  subsections?: {
    title: string;
    content: string;
  }[];
}

export const rules: RuleSection[] = [
  {
    id: "models",
    title: "Models",
    category: "Model Profiles",
    content: "A model is an individual entity which has its own profile and is represented by a miniature or a token on the field.\n\nModels act as representations of fictional individuals and adventurers that have roles or professions in the world of Eldfall Chronicles. Every model (miniature and its profile) has unique characteristics, pros and cons, skills, weapons, synergies with other party members, fighting styles etc. They are indispensable party members, bringing unique elements to the table; each one is suited to different tasks, excels in different situations and allows different approaches."
  },
  {
    id: "class",
    title: "Class",
    category: "Model Profiles",
    content: "Each model is assigned at least one Class, which, to an extent, defines its role on the field."
  },
  {
    id: "attributes",
    title: "Attributes",
    category: "Model Profiles",
    content: "The set parameters which display the degree of a certain model's default capabilities, also referred to as \"Stats\". Likelihood of a dice roll success, used to simulate various Actions performed by the model, is primarily based on the model's attribute value.\n\nSTA (Stamina): The default number of Activation Points a model receives at the beginning of its every turn and how swiftly it can wield certain Items.\nSPD (Speed): The default distance that a model can cross on the field when moving, in inches.\nARM (Armor): The default amount of natural or artificial protection the model has to cope with the received Power of a Hit.\nHP (Health Points): How many Wounds a model can withstand before becoming Incapacitated.\nOFF (Offense): A model's default active melee capability used during its Active Role to conduct a Melee Attack.\nDEF (Defense): A model's default reactive melee capability used during its Reactive Role to conduct a Melee Attack.\nACC (Accuracy): A model's default capability with ranged projectile weapons when performing Ranged Attacks.\nINT (Intellect): A model's default mental dexterity and capability of casting Spells and perceiving surroundings.\nAG (Agility): The default physical nimbleness mainly used when avoiding incoming attacks (Dodge) and escaping certain dangers.\nT (Toughness): The default physical strength and endurance of a model.\nM (Morale): The default mental fortitude of a model."
  },
  {
    id: "size",
    title: "Size",
    category: "Model Profiles",
    content: "Indicates the model's volume on the field. Sizes are categorized from smallest to largest:\n\n- Small (S): 25mm × 25mm\n- Medium (M): 32mm × 45mm\n- Large (L): 40mm × 45mm\n- Huge (H): 50mm × 50mm\n- Gigantic (G): 60mm × 60mm\n- Colossal (C): 80mm × 80mm\n- Monstrous/Epic (E): 85+mm × 85+mm\n\nEvery model in the game has a Hitbox of a certain Size assigned to it. As miniatures come stylized in various forms and sizes, the Hitboxes are a standardized indicator used to determine the model's height and volume on the field. The Hitbox's volume is cylindrical and of the same width as the model's base.\n\nA model's size is important when determining where the model is — for example, determining if and how it can move across narrow spaces, elevation, etc. Most importantly, the Hitbox plays the biggest factor when drawing Line of Sight."
  },
  {
    id: "recruitment-cost",
    title: "Recruitment Cost",
    category: "Model Profiles",
    content: "The amount of Recruitment Points a player has to spend to recruit the model into their Party."
  },
  {
    id: "limit",
    title: "Limit",
    category: "Model Profiles",
    content: "Indicates how many models of the same profile can be recruited into a single Party."
  },
  {
    id: "traits",
    title: "Traits",
    category: "Model Profiles",
    content: "Traits are passive abilities that are always in effect while the model is present on the field.\n\n- A Trait is applied to the model, its Actions and Movement automatically at all times.\n- A Trait's Effect cannot be disregarded volitionally.\n- Some Traits can have more than one level, represented by roman numerals next to the name. The Effects of Traits with multiple levels stack.\n- If there is no roman numeral next to the Trait, it is considered level I.\n- Sometimes an Ability, Item or Spell will have a Trait. Any Hits or Wounds caused by such an Ability, Item or Spell will also have this Trait."
  },
  {
    id: "skills",
    title: "Skills",
    category: "Model Profiles",
    content: "Skills are optional abilities a model can use and benefit from in certain situations.\n\n- A model cannot use the same Skill more than once per Activation.\n- Some Skills can have more than one level, represented by roman numerals. The Effects of Skills with multiple levels stack.\n- If there is no roman numeral next to the Skill, it is considered level I."
  },
  {
    id: "combat-arts",
    title: "Combat Arts",
    category: "Model Profiles",
    content: "Combat Arts display a form of combat the model excels in and in which it developed a certain level of mastery.\n\n- Some models have access to a variety of combat abilities organized into Combat Arts charts.\n- Combat Arts consist of levels, where the model has access to all levels up to the model's listed level of that Combat Art.\n- If a model has access to several Combat Arts, it may select only one at a time.\n- A model can add the effect of only one Combat Art level to its Attack."
  },
  {
    id: "spellcraft",
    title: "Spellcraft",
    category: "Model Profiles",
    content: "Some models have access to a variety of individual Spells, or Spells organized into Spellcraft charts. Similarly to Combat Art charts, Spellcrafts consist of levels, where the model has access to all levels up to the model's listed level of that Spellcraft. However, it can only cast Spells of the same Element as it has access to.\n\nExample: A model with Art of Sorcery III and Affinity (Fire) can cast Spells of level III or lower from the Art of Sorcery chart, but only those of the Fire Element."
  },
  {
    id: "special",
    title: "Special",
    category: "Model Profiles",
    content: "Some models have unique Abilities displayed in this section."
  },
  {
    id: "stratagems",
    title: "Stratagems",
    category: "Model Profiles",
    content: "Stratagems are Abilities only the Leader of a Party may use during their Strategic Phase.\n\n- If the Leader becomes Incapacitated or Dead, that Party can no longer use Stratagems.\n- During their Strategic Phase, a player may select 1 Stratagem and apply its Effect.\n- Authority Stratagems affect models in your party.\n- Subterfuge Stratagems affect enemy models.\n- Unless specified otherwise, after a Stratagem is applied, its Effect lasts until the player's next Strategic Phase.\n- Stratagems have infinite Reach."
  },
  {
    id: "inventory",
    title: "Inventory (X)",
    category: "Model Profiles",
    content: "Represents the available space a model has for carrying Items. The value X is the total weight or number of Items a model can carry.\n\n- If the total Quantity or Weight of Items exceeds X, the model becomes over-encumbered and may not perform any Movement or Special Action.\n- If an Item has \"/\" marked as its Quantity and Weight, it fills no space in the Inventory.\n- When a model Activates, it may drop any number of Items (except default Items). Dropped Items are represented by a Cache/Loot token placed in Base Contact with the model.\n- A model may pick up Items by Interacting with the Cache/Loot token.\n\nQTY (Quantity): The amount of an Item a model has in its Inventory.\nWGT (Weight): The heaviness of a single Item. Weight is multiplied by Quantity when checking total Weight (unless Weight is 0, in which case only Quantity counts)."
  },
  {
    id: "items",
    title: "Items",
    category: "Model Profiles",
    content: "Items grant models various Abilities. A model can only have one Item from each Category equipped at a time. A model may equip or unequip Items once per Activation (or Reaction).\n\n- Weapons: Give an Attack the specified RCH, STK, PW and Effects when equipped.\n- Shields: Provide a passive effect when equipped. May be used to perform an Attack instead of a Weapon.\n- Accessory: Provide a passive effect when equipped. Does not require unequipping other Items.\n- Consumables: Must be discarded after use, whether the Action was successful or not. A model may use only one Consumable of the same name at a time."
  },
  {
    id: "game-sequence-overview",
    title: "Game Sequence",
    category: "Game Sequence",
    content: "A game consists of a number of Rounds, each divided into a number of Turns (one for each player).\n\n- In the first turn of a round, the 1st Player assumes the Active Role and the 2nd Player assumes the Reactive Role.\n- Once all of the Active Player's models have been activated, the Roles are reversed and the next turn starts.\n- There is only one player that is Active at a time.\n- Once both/all turns are complete, the round ends and a new one begins."
  },
  {
    id: "turn-phases",
    title: "Turn Phases",
    category: "Game Sequence",
    content: "The Active Player carries out 4 Phases in their turn, while the Reactive Player carrying out Reactions.",
    subsections: [
      {
        title: "I) Strategic Phase",
        content: "Models of the Active Player may declare the use of any applicable Abilities, Items, or Stratagems. A Leader's Stratagems can only be declared during this Phase."
      },
      {
        title: "II) Upkeep Phase",
        content: "All players allocate Activation Points to all of their models equal to their models' Stamina values."
      },
      {
        title: "III) Tactical Phase",
        content: "The Active Player may activate each of their models by spending Activation Points. The Reactive Player may spend Activation Points to react during the Reaction Step of each Activation Sequence. The Tactical Phase ends when the Active Player no longer has any eligible models to activate or decides to stop."
      },
      {
        title: "IV) End Phase",
        content: "Any applicable effects are resolved and both players discard any unspent Activation Points."
      }
    ]
  },
  {
    id: "activation-sequence",
    title: "Activation Sequence",
    category: "Game Sequence",
    content: "An Activation Sequence occurs with every Activation during the Tactical Phase and consists of five steps.",
    subsections: [
      {
        title: "1. Activation Step",
        content: "The Active Player Activates a model by spending one of its available Activation Points."
      },
      {
        title: "2. Movement Step",
        content: "An activated model may declare Normal Movement or Special Movement. The Active Player must declare all Skills relevant to its Movement. During this Step, the activated model may enter or cancel the Crouched State (at the start or end of the Movement)."
      },
      {
        title: "3. Reaction Step",
        content: "The Reactive Player must declare which of their models will react against the Activated model, if any, and which Normal Actions the reacting models will perform.\n\n- A model may target only an Activated model with a Reaction.\n- Reaction is performed by spending an Activation Point and must be a Normal Action.\n- Requires Line of Sight towards the Activated model at any point during its Movement (unless in Awareness)."
      },
      {
        title: "4. Action Step",
        content: "The activated model may declare a Normal Action or a Special Action. If the declared Action is Attack, the Active Player must declare its targets and means (Skills, Items, Combat Arts, etc.)."
      },
      {
        title: "5. Resolution Step",
        content: "Players apply modifiers and perform all necessary rolls (Confrontation, Damage, etc.). Damage, Effects, and abilities that happened during this Activation Sequence are applied simultaneously."
      }
    ]
  },
  {
    id: "reaction-rules",
    title: "Reaction Rules",
    category: "Game Sequence",
    content: "Detailed rules for how models can react during an opponent's activation.",
    subsections: [
      {
        title: "Reaction Requirements",
        content: "- Reaction is performed by the Reactive Player by spending an Activation Point.\n- Reaction can only be a Normal Action.\n- Reaction requires Line of Sight towards the Activated model at any point during its Movement.\n- If the activated model moves within the reactive model's Awareness, the reacting model may declare Dodge even without Line of Sight."
      },
      {
        title: "Attack of Opportunity",
        content: "If an activated enemy model performs a Movement that the reactive player suspects might have come within Reach of their model's Weapon, the reactive model may declare Reaction at that point and declare an Attack of Opportunity. After the Reaction is declared, the reacting model must measure its Reach. If the activated model is within Reach, the reacting model may attempt an Attack against it."
      },
      {
        title: "Reaction Against Shrouded or Flying Models",
        content: "If a reacting model has declared Dodge or Perceive and has LoS towards an activated enemy model that has declared an Attack while in the Shrouded or Flying State, the reacting model may change its declaration to an Attack immediately after the activated enemy model's Action Step."
      }
    ]
  },
  {
    id: "dice-rolls",
    title: "Dice Rolls",
    category: "Game play",
    content: "All rolls use 20-sided dice (D20).",
    subsections: [
      { title: "Attribute Roll", content: "The result of the dice roll must be equal to or lower than the modified attribute." },
      { title: "Attack Roll", content: "Each die rolled as part of an Attack is an Attack Roll. A model rolls a number of Attack Rolls equal to its STK. An Attack Roll is successful if its result is equal to or lower than the modified attribute used for the Attack and it was not cancelled during a Confrontation. Each successful Attack Roll generates one Hit, which requires the attacker to make a Damage Roll." },
      { title: "Reroll", content: "After the dice are rolled, the player may reroll a selected number of dice (depending on the ability), completely negating their previous roll result." },
      { title: "Damage Roll", content: "Roll a number of dice equal to the number of Hits. For each die result equal to or lower than the Power (PW) of the used Weapon minus the target's Armor (ARM), the target suffers a Wound." }
    ]
  },
  {
    id: "modifiers",
    title: "Modifiers",
    category: "Game play",
    content: "Modifiers alter a model's attribute and affect the outcome of dice roll results. They are numbers added to or subtracted from the model's default attribute value.\n\n- All applicable bonuses and penalties stack and are applied cumulatively.\n- Modifiers are applied after the Action has been declared and before rolls are performed.\n- If modifiers reduce an attribute to 0, the Action results in an automatic failure (except for Damage Rolls). An attribute cannot be modified below 0.\n- If an attribute is increased over 20, the roll result of 20 also becomes a Critical Hit.\n- When a halving or doubling modifier is applied, first apply other modifiers, then halve or double the result (rounding up)."
  },
  {
    id: "distance-measurement",
    title: "Distance & Measurement",
    category: "Game play",
    content: "All distances are measured in inches. The distance between models is measured in a straight line from the closest points of their Hitboxes. Movement distance is always measured from the same part of the model's base, along the exact route of movement.",
    subsections: [
      { 
        title: "Modes of Measuring", 
        content: "Before starting the game, players decide which mode of measuring to implement:\n\nAssisted Mode: Players can pre-measure any distance.\nStandard Mode: Pre-measuring limited to within the Awareness of models and the activated model's Movement distance.\nRealism Mode: Players are not allowed to pre-measure any distances." 
      },
      { title: "Base Contact", content: "Base Contact defines a situation where a model's Hitbox is in physical contact with another model's Hitbox, token, piece of scenery, etc. A model is always in Base Contact with itself." }
    ]
  },
  {
    id: "normal-movement",
    title: "Normal Movement",
    category: "Movement",
    content: "Normal Movement allows models to navigate the battlefield using their base speed or remaining stationary.",
    subsections: [
      {
        title: "Idle",
        content: "The model does not move and remains stationary. The player may rotate the miniature and change its Line of Sight."
      },
      {
        title: "Walk",
        content: "The most common type of Movement. The model may move up to its Speed value."
      }
    ]
  },
  {
    id: "special-movement",
    title: "Special Movement",
    category: "Movement",
    content: "Special Movement provides more complex ways to move, often at a cost or requiring specific conditions.",
    subsections: [
      {
        title: "Run",
        content: "The model may move a distance of up to its doubled Speed value."
      },
      {
        title: "Climb",
        content: "When a model declares Climb, its Speed becomes halved (rounded up). Climb allows a model to move over an obstacle — a vertical surface or scenery — that is higher than its Hitbox.\n\n- A model cannot perform any other Action while on a vertical surface; if it would perform any Action other than Nothing, it falls and must apply any possible Fall Damage.\n- A model may end its movement on a vertical surface."
      },
      {
        title: "Jump",
        content: "A model may perform a Jump to reach higher or lower ground, to cross a gap, or to reach ground behind an obstacle higher than the model's Hitbox.\n\n- The distance a model can jump over is equal to half of its Speed value.\n- If the distance is larger than the model's halved Speed value, but the model's Hitbox would reach the target surface, it pulls itself up.\n- If the model's Hitbox does not reach the surface, the model falls vertically and must apply Fall Damage if necessary."
      }
    ]
  },
  {
    id: "los",
    title: "Line of Sight",
    category: "Game play",
    content: "Line of Sight (LoS) is an imaginary straight line connecting the Hitboxes of two models, defining whether a model can see the other.\n\n- Unless specified otherwise, a model can draw Line of Sight only from its Front arc.\n- A model's Hitbox is divided from the top into the Front and Back sections, each representing an arc of 180°.\n- A model has Line of Sight to another model if it can draw an unobstructed straight line from a point on its Hitbox to a point on the target model's Hitbox.\n- Line of Sight can be obscured by another model or scenery (even allied models).\n- While moving, a model has 360° Line of Sight.\n- A model always has Line of Sight to itself."
  },
  {
    id: "awareness",
    title: "Awareness",
    category: "Game play",
    content: "Awareness represents the model's perception of its surroundings. It is an area surrounding the model with a radius (measured in inches) equal to the model's Agility value, measured from the edge of the miniature's base."
  },
  {
    id: "actions",
    title: "Actions",
    category: "Game play",
    content: "There are two kinds of Actions: Normal Actions and Special Actions.\n\n- Normal Actions can be declared both during the model's Active and Reactive Role.\n- In order to declare a Special Action, a model must first declare \"Idle\" during its Movement Phase.\n- Special Actions cannot be declared during the Reactive Role.\n\n| Role | Movement | Action |\n|------|----------|--------|\n| Active Role | Normal Movement | Normal Action |\n| Active Role | Idle | Special Action |\n| Active Role | Special Movement | Nothing |\n| Reactive Role | — | Normal Action |"
  },
  {
    id: "activation-points",
    title: "Activation Points",
    category: "Game play",
    content: "Activation Points are a resource generated from the model's Stamina value. Players spend these points when activating a model or reacting with it."
  },
  {
    id: "active-reactive-role",
    title: "Active & Reactive Role",
    category: "Game play",
    content: "- The Active Player's models perform the Active Role, conducting Activations.\n- The Reactive Player's models perform the Reactive Role, carrying out Reactions.\n- When the Active Player concludes their turn, the Roles exchange."
  },
  {
    id: "reach",
    title: "Reach (RCH)",
    category: "Game play",
    content: "Reach represents the distance (in inches) at which an Item, Ability, or Spell can be used, measured from anywhere on the model's Hitbox.\n\n- Items, Spells or Skills with Reach 0\" can only be used in Base Contact with the target.\n- If the target of an Action is outside the Item's Reach, the Action resolves as a failure.\n- Ranged Weapons display one or multiple intervals, indicating distances at which certain Modifiers apply to the user's Accuracy attribute."
  },
  {
    id: "casting-aura",
    title: "Casting Aura",
    category: "Game play",
    content: "Casting Aura is an area where some Spells can be cast, equal in size to the caster's Awareness.\n\n- Spells with Casting Aura Reach can only target models within the Casting Aura.\n- In the Active Role, the caster can target models within the Casting Aura even without Line of Sight, but the casting attribute suffers a halving Modifier.\n- Targets of an Attack with this Reach cannot benefit from Cover."
  },
  {
    id: "templates-aoe",
    title: "Templates & AoE",
    category: "Game play",
    content: "Some Abilities, Spells or Items have an Area of Effect (AoE). A template is placed over the affected area and affects all models whose Hitboxes are at least partially covered or in contact with it. The main target must be fully covered by the template.\n\n- If a model is covered by multiple templates simultaneously, it suffers the effect of each separately.\n- A model affected by an Attack with a template may avoid receiving Hits with a successful Dodge Action.\n- If the target of an Attack with a template declares an Attack (as Action or Reaction) and wins the Confrontation, the template Attack is fully nullified.",
    subsections: [
      { 
        title: "Circular (Small / Large)", 
        content: "The target of the Attack must be fully covered by the template. The AoE also affects models 3\" above and below the surface of the target. A model cannot be affected if there is no LoS between the center of the AoE and the model.\n\n- Large circular template: ⌀ 120mm\n- Small circular template: ⌀ 70mm" 
      },
      { 
        title: "Spray (Small / Large)", 
        content: "Spray templates are placed with the narrow end in Base Contact with the attacking model. The target must be fully covered by the template. The AoE may also affect models up to 5\" above or below the attacker's surface (attacker's choice).\n\n- Large Spray template length: 260mm\n- Small Spray template length: 213mm" 
      }
    ]
  },
  {
    id: "strikes-hits",
    title: "Strikes & Hits",
    category: "Game play",
    content: "Strike value (STK) specifies the number of dice rolled when performing an Action with a certain Item, Spell, or Ability. In the Reactive Role, a model's default Strike value becomes 1 (unless stated otherwise). Strike value cannot be modified below 1.\n\nIn the Active Role, if the Active model has a Strike value greater than 1, it may Attack a number of different targets up to its Strike value.\n\nA successful Attack Roll is a Hit. If a Damage Roll is successful, it inflicts a Wound, causing the model to lose 1 HP. Suffering a Hit allows the hit model to rotate and adjust its Line of Sight.",
    subsections: [
      { 
        title: "Strikes & Templates", 
        content: "When a model uses an ability that places templates and its Strike value is greater than 1, the player may place templates equal to the Strike value and distribute them among one or more targets." 
      },
      { 
        title: "Critical Hit", 
        content: "When the result of a dice roll is 1, it is a Critical Hit.\n\n- A Critical Hit reduces the target model's Armor to 0 for that particular Hit.\n- A Critical Hit beats all opponent's Confrontation roll results.\n- When both (or more) players score a Critical Hit, all models suffer the Hit and all additional effects." 
      }
    ]
  },
  {
    id: "confrontation",
    title: "Confrontation",
    category: "Game play",
    content: "Confrontation occurs when two (or more) opposing models declare the Attack Action against one another. Both models fight simultaneously, each attempting to block incoming Strikes and hit their adversary.",
    subsections: [
      { 
        title: "Confrontation Roll", 
        content: "Confrontation rolls symbolize parrying, blocking, counter-attacking, and the quickness of strikes. They are performed simultaneously.\n\n- The model with one or more successful Confrontation rolls wins the Confrontation and is the only model that deals damage.\n- A Confrontation roll is successful if the result is equal to or lower than the model's modified attribute and higher than the enemy model's successful rolls.\n- Each successful Confrontation roll negates all enemy model rolls with equal or lower results.\n- After all rolls are made, the Reactive player first decides whether to reroll any dice using all available rerolls, then the Active player decides." 
      }
    ]
  },
  {
    id: "damage-wounds",
    title: "Damage & Wounds",
    category: "Game play",
    content: "When a model hits another model, it must perform a Damage Roll for every Hit to damage it. A successful Damage Roll causes the target to suffer a Wound and lose 1 HP. A model cannot suffer more Wounds than it has HP.\n\nA model whose HP is reduced to 0 becomes Incapacitated at the end of the Activation Sequence. If an Incapacitated model suffers another Wound, it becomes Dead.",
    subsections: [
      { 
        title: "Fall Damage", 
        content: "A model falls when it is somehow moved from a higher surface onto a lower surface (if Climb was not used). If a model falls a distance greater than its halved Speed value (measured vertically), it must perform an Agility roll for each interval of the fall equal to its halved Speed value. The model suffers a Wound for every failed Agility roll." 
      }
    ]
  },
  {
    id: "spells-magic",
    title: "Spells & Magic",
    category: "Game play",
    content: "Spells are a focused representation of magic. The model who uses a Spell is the Caster.\n\n- Unless stated otherwise, the model uses the Intellect attribute when casting Spells.\n- In order to cast Spells of a certain Element, the caster must have an Affinity (Element) of the specified Element.\n- In the Active Role, if a Spell has a Strike value greater than 1, the Caster may choose a number of targets up to the Strike value (not applicable to Conjuration Spells).\n- A model can cast only one Spell at a time.\n- A model cannot cast Spells if it has \"both hands full\" (e.g., Shield + Weapon equipped).",
    subsections: [
      { title: "Mana Counters", content: "Mana Counters represent the energy required for casting Spells. In the Active Role, a Mage can convert any number of Activation Points into Mana Counters. Mana Counters are cumulative and do not disappear at the end of the turn." },
      { title: "The 5 Types of Spells", content: "Sorcery (short-lasting, destructive), Healing (restorative), Enchantments (extended effects), Transmutation (permanent changes to environment), Conjuration (summoning rituals)." }
    ]
  },
  {
    id: "hostiles-intro",
    title: "Hostiles",
    category: "Hostiles",
    content: "Hostiles are models controlled by the game (AI). They function like any other model with their own Profile Cards, and behave according to Hostile Behavior cards."
  },
  {
    id: "hostiles-turn-order",
    title: "Hostiles Turn Order",
    category: "Hostiles",
    content: "Rules governing when and how Hostiles interact with the standard game turn sequence.",
    subsections: [
      {
        title: "Timing & Resources",
        content: "- Hostiles perform their Active Role after all players have finished their turns.\n- Hostiles regain Activation Points during every player's Upkeep Phase.\n- Players regain Activation Points at the beginning of every Hostiles turn.\n- Hostiles perform their Reaction Step after the Active Player's Action Step and before the Resolution Step."
      },
      {
        title: "Movement & Orientation",
        content: "- When a Hostile declares an Action targeting a model, it must rotate to face the target directly.\n- If a Hostile suffers a Hit, it must turn directly towards the attacker (Exception: Hostiles with the Construct or Undead I Trait turn on Wound instead).\n- Unless clearly specified otherwise, a Hostile moves via the shortest route.\n- Hostiles ignore tokens unless specified otherwise.\n- Hostiles can pre-measure distances even on Realism mode."
      }
    ]
  },
  {
    id: "hostiles-activations",
    title: "Hostile Activations",
    category: "Hostiles",
    content: "Hostiles activate according to their Tiers (marked on the bottom of the AI card), beginning with the lowest Tier.",
    subsections: [
      {
        title: "Order of Activations",
        content: "If multiple Hostiles share the same Tier, the one with the highest Morale activates first. If both same, players decide. Hostiles of the same Tier must exhaust all AP before moving to a higher Tier."
      },
      {
        title: "Activation Sequence",
        content: "The Activation Sequence for Hostiles is the same as for regular models, however some Hostiles may have Special Behaviors, special abilities and particular Target Priorities."
      }
    ]
  },
  {
    id: "hostiles-behaviors",
    title: "Hierarchy of Behaviors",
    category: "Hostiles",
    content: "Within the numbered Hierarchy of Behaviors, the highlighted text states a specific condition; the following text explains the action.",
    subsections: [
      {
        title: "Condition Check",
        content: "Check conditions hierarchically from Behavior 1 downward until a condition is met. If none are met, the Hostile does not Activate or React."
      },
      {
        title: "Targeting Priority",
        content: "If more than one possible target matches the condition, the model matching the Hostile's Target Priority the most becomes the target. If tie, move towards nearest enemy."
      }
    ]
  },
  {
    id: "broken-morale",
    title: "Broken Morale",
    category: "General Effect",
    content: "If at any time the number of Alive models in a party falls below half of their original number, Broken Morale is triggered. The models of that party become affected by the **Panicked State** until the end of the game. (If the number of models rises above half again, this rule ceases to be in effect.)"
  },
  {
    id: "friendly-fire-general",
    title: "Friendly Fire (General)",
    category: "General Effect",
    content: "If a model delivers a Hit that could deal damage to an allied model, that allied model must perform a Morale roll. On failure, that allied model becomes **Panicked** until its next Strategic Phase."
  },
  {
    id: "priority-over-core",
    title: "Priority Over the Core Rules",
    category: "General Effect",
    content: "Abilities (Skills, Traits, Combat Arts, Spellcrafts), Spells, Items, Upgrades, Class-specific Abilities, Stratagems, and certain Effects take priority over the core rules and may override their restrictions. Rules stated on cards or within Spells take precedence."
  },
  {
    id: "end-of-game",
    title: "End of the Game",
    category: "General Effect",
    content: "Rules determining when and how a Quest concludes.",
    subsections: [
      {
        title: "Quest End Conditions",
        content: "- The Quest automatically ends if, at the beginning of their turn, a player has all models in either the Incapacitated or Dead State.\n- Unless specified otherwise, the game ends after the last player concludes their 5th turn.\n- If all players have the same amount of VP, the game ends in a draw."
      },
      {
        title: "Victory Points (VP)",
        content: "- The victorious player is the player who scored the greater amount of Victory Points (VP).\n- Unless stated otherwise, the maximum number of VP a player can obtain in a single Quest is 10."
      }
    ]
  },
  {
    id: "recovery-check",
    title: "Recovery Check",
    category: "General Effect",
    content: "During its own Strategic Phase, an Incapacitated model may perform a Toughness (T) roll to regain health.",
    subsections: [
      {
        title: "Recovery Results",
        content: "- **On success:** The model regains 1 HP and gains the Weakened State.\n- **On failure:** The model remains Incapacitated."
      },
      {
        title: "Assisted Recovery",
        content: "An Incapacitated model with an allied model in Base Contact (where neither model is Engaged) may reroll the Recovery Check once."
      }
    ]
  },
  {
    id: "characters-general",
    title: "Characters",
    category: "General Effect",
    content: "Models with a specific name are Characters. Characters cannot be assigned Upgrades when creating your party."
  },
  {
    id: "monster-factions",
    title: "Monster Factions",
    category: "General Effect",
    content: "Certain Factions do not coexist with civilized Factions. Currently, the Oni Clans and Goblin Wartribes are Monster Factions.",
    subsections: [
      {
        title: "Recruitment Restrictions",
        content: "Monster Factions cannot hire Neutral models when creating a party and may only use Neutral Upgrades and Neutral Schemes."
      }
    ]
  },
  {
    id: "action-assist",
    title: "Assist",
    category: "Normal Action",
    content: "An Action which an activated model can declare by targeting itself or one or more allied models. Most commonly used to cast support Spells among allies.",
    subsections: [
      {
        title: "Rules",
        content: "- Unless specified otherwise, Line of Sight is required to perform the Assist Action when targeting allied models.\n- If the assisting model has Strike 1, it may only target one model. If its Strike is greater than 1, it may target up to its Strike value.\n- The requirements of the used Skills, Spells or Items must be fulfilled."
      }
    ]
  },
  {
    id: "action-attack",
    title: "Attack",
    category: "Normal Action",
    content: "An Action which an activated or reacting model may declare by targeting one or more enemy models.",
    subsections: [
      {
        title: "General Rules",
        content: "- Unless specified otherwise, Line of Sight is required.\n- During the declaration, the player must choose and declare which Skill(s), Combat Art, and Item or Spell the model will use.\n- The Attack can be Ranged or Melee depending on the Item, Spell or Skill.\n- In the Reactive Role, the default Strike value becomes 1."
      },
      {
        title: "Melee Attack",
        content: "A Melee Attack is an Attack Action performed with an Item or a Spell of the Melee Type. A model may always choose to perform a Melee Attack unarmed instead of using other Melee Weapons."
      },
      {
        title: "Ranged Attack",
        content: "A Ranged Attack is an Attack Action performed with an Item or a Spell of the Ranged Type. Uses Accuracy attribute for Ranged Items and Intellect for Spells (unless stated otherwise)."
      }
    ]
  },
  {
    id: "action-death-blow",
    title: "Death Blow",
    category: "Normal Action",
    content: "An Action that renders an Incapacitated enemy model into the Dead State. The model must be in Base Contact with the target. No roll is required."
  },
  {
    id: "action-dodge",
    title: "Dodge",
    category: "Normal Action",
    content: "To avoid a potential or incoming attack, the model performs a successful Agility roll using 1 die. If successful, ignore non-critical Hits from the enemy's Attack.",
    subsections: [
      {
        title: "Rules",
        content: "- Even if the roll was unsuccessful, the model may move for a distance of its halved Speed value in any direction at the end of the Resolution Step.\n- May enter or cancel the Crouched State.\n- When an Engaged model declares Dodge, it may move out of the enemy model's melee Reach, canceling the Engaged State."
      }
    ]
  },
  {
    id: "action-interact",
    title: "Interact",
    category: "Normal Action",
    content: "The model must be in Base Contact with an object described by the Quest. The model may perform a roll against the object using the attribute prescribed by the Quest."
  },
  {
    id: "action-nothing",
    title: "Nothing",
    category: "Normal Action",
    content: "The model does nothing."
  },
  {
    id: "action-perceive",
    title: "Perceive",
    category: "Normal Action",
    content: "Allows a model to target and reveal an enemy model, Spell or Item represented by a token (Intrigue, Shrouded, etc.). Requires Line of Sight and a successful Intellect roll."
  },
  {
    id: "action-trade",
    title: "Trade",
    category: "Normal Action",
    content: "A model performing this Action can exchange any number of Items in its Inventory with an allied model in Base Contact. Default Items listed on profile cannot be exchanged."
  },
  {
    id: "action-duel",
    title: "Issue a Duel",
    category: "Special Action",
    content: "Only a member belonging to the player's original party can declare this Action. If accepted, both dueling models' Activation Points are restored and a duel begins.",
    subsections: [
      {
        title: "Rules",
        content: "- The opposing player may decide whether to accept or refuse.\n- The duel ends when one of the two models becomes Incapacitated or Dead, or when the game ends.\n- The player that won the duel receives 6 Victory Points. A draw results in both sides receiving 3 Victory Points."
      }
    ]
  },
  {
    id: "action-ritual",
    title: "Ritual",
    category: "Special Action",
    content: "By declaring Ritual, a model can immediately cast a Conjuration Spell (without any roll required), or some Spells that can only be cast with the Ritual Action."
  },
  {
    id: "action-uncover",
    title: "Uncover",
    category: "Special Action",
    content: "By passing a halved Intellect roll, the Hidden State of all enemy models or Items within this model's Awareness is canceled."
  },
  {
    id: "env-aquatic",
    title: "Aquatic (Shallow / Deep)",
    category: "Environment",
    content: "Models in Aquatic Environments (Shallow / Deep) suffer movement restrictions and additional effects from electricity. Shallow: half SPD and AG, reduces Burn. Deep: additional action restrictions and drowning risk for heavy armor. Does not affect Flying models. Lightning/Electric damage PW is doubled.",
    subsections: [
      {
        title: "Shallow",
        content: "- Models move at half SPD (2 inches of Movement per inch moved) and their AG is halved.\n- Burn I is negated. Burn II is reduced to Burn I. Burn III is reduced to Burn II."
      },
      {
        title: "Deep",
        content: "- All effects of Shallow Aquatic apply.\n- Models cannot declare Jump, Attack, Assist, or Ritual actions.\n- Models with ARM 2+ must roll AG (with a negative modifier equal to their ARM) at activation. On failure, they drown and are considered Dead."
      }
    ]
  },
  {
    id: "env-dangerous",
    title: "Dangerous",
    category: "Environment",
    content: "When a model moves on or touches this Environment, it suffers 1 Wound, unless it declares Dodge and passes an AG roll during its Activation. Does not affect models with Elemental, Construct, Spirit, Undead Traits, or those in Flying State."
  },
  {
    id: "env-dark",
    title: "Dark",
    category: "Environment",
    content: "Model's LoS is limited to within Awareness. Models targeting another model outside half their Awareness suffer a –3 modifier. Exception: Coalition of Thenion models are not affected."
  },
  {
    id: "env-dense",
    title: "Dense",
    category: "Environment",
    content: "Melee Attacks with RCH 1 or more suffer –1 STK. Ranged Attacks within or through the area suffer –1 STK. Models in Flying State or Mounted cannot enter or remain in this terrain."
  },
  {
    id: "env-difficult",
    title: "Difficult",
    category: "Environment",
    content: "Models move through this Environment at half SPD (2 inches of Movement per inch moved). Does not affect models using the Flicker skill or models in the Flying State."
  },
  {
    id: "env-forest",
    title: "Forest",
    category: "Environment",
    content: "Ranged Attacks within or through this Environment suffer –3 Attack modifier. LoS cannot be drawn through two or more Forest areas."
  },
  {
    id: "env-freezing",
    title: "Freezing",
    category: "Environment",
    content: "During the Strategic Phase, a model must perform a Toughness roll with +ARM modifier (Creatures cannot apply ARM). On fail, the model becomes Fatigued. Models with 1 or more Wounds must perform another Toughness roll. On fail, the model suffers 1 Wound."
  },
  {
    id: "env-hazy",
    title: "Hazy",
    category: "Environment",
    content: "Ranged Attacks cannot target through the area. Ranged Attacks from within or into suffer halved Attack modifier. Melee Attacks outside Base Contact suffer –3 Attack modifier. Does not affect models using the Flicker skill or models in the Flying State."
  },
  {
    id: "env-managmatic",
    title: "Managmatic",
    category: "Environment",
    content: "Attacks with Spell Type, performed by models with the following classes gain +2 PW: Mage, Sorcerer, Mystic, Vitalist, Enchanter, Summoner, Artificer. These models also gain +1 SPD."
  },
  {
    id: "env-mountainous",
    title: "Mountainous",
    category: "Environment",
    content: "Models move through this Environment at half SPD (2 inches of Movement per inch moved). Does not affect models using the Flicker skill or models in the Flying State."
  },
  {
    id: "env-profane-miasma",
    title: "Profane Miasma",
    category: "Environment",
    content: "Ranged Attacks from outside cannot target models inside this Environment. Ranged Attacks from within suffer halved Attack modifier. Melee Attacks outside Base Contact suffer –3 Attack modifier. At the End Phase, a model within or in contact at any point of the turn suffers a PW 10 hit with Ignore Armor and Weakening Traits. Does not affect models with Affinity (Profane) or Elemental Essence (Profane)."
  },
  {
    id: "env-sacred-ground",
    title: "Sacred Ground",
    category: "Environment",
    content: "During the Strategic Phase, a model may choose to: Recover 1 HP, or Remove one State. If Incapacitated, a successful Morale roll is required.\n\nModels with Affinity (Profane), Elemental Essence (Profane), or Undead cannot benefit from Sacred Ground. Instead, these models suffer: 1 Wound upon contact, –1 HP during each Strategic Phase, and if Incapacitated, they are immediately Dead."
  },
  {
    id: "env-scorching",
    title: "Scorching",
    category: "Environment",
    content: "During the Strategic Phase, models with ARM less than 1 must perform a Toughness roll with –ARM modifier. On fail, the model becomes Fatigued."
  },
  {
    id: "env-swamp",
    title: "Swamp",
    category: "Environment",
    content: "At the start of its Activation, the model must perform an AG roll. On fail, it cannot move."
  },
  {
    id: "env-toxic",
    title: "Toxic",
    category: "Environment",
    content: "During the Strategic Phase, the model must perform a Toughness roll. On fail, it suffers 1 Wound."
  },
  {
    id: "env-unscalable",
    title: "Unscalable",
    category: "Environment",
    content: "Only models with the Climbing Skill can move across this Environment. Does not affect models using the Flicker skill or models in the Flying State."
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
    description: "When in the Reactive Role, this model may declare Reaction and target enemy models within its Awareness even without LoS. If it has access to Spells with the Casting Aura reach, it may cast them without LoS even in the Reactive Role. It may ignore the Blinded state if the enemy model is within its Awareness, as well as the Surprise Attack trait of enemy models within its Awareness. In the Active Role, the caster with this skill does not suffer halving modifiers when spellcasting without LoS."
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
    description: "When this model declares an Attack of Opportunity with a Melee Attack against a non-Engaged model, that model's Movement ends at the point of the Attack. If the Attack was Melee, the target also becomes Engaged immediately."
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
