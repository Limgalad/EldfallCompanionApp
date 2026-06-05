import { RuleSection } from "./types";

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
    content: "The set parameters which display the degree of a certain model's default capabilities, also referred to as \"Stats\". Likelihood of a dice roll success, used to simulate various Actions performed by the model, is primarily based on the model's attribute value.\n",
    subsections: [
      {
        title: "STA (Stamina):",
        content: "he default number of Activation Points a model receives at the beginning of its every turn and how swiftly it can wield certain Items."
      },
	        {
        title: "SPD (Speed):",
        content: "The default distance that a model can cross on the field when moving, in inches."
      },
      {
        title: "ARM (Armor):",
        content: "he default amount of natural or artificial protection the model has to cope with the received Power of a Hit."
      },
	        {
        title: "HP (Health Points):",
        content: "How many Wounds a model can withstand before becoming Incapacitated."
      },
      {
        title: "OFF (Offense):",
        content: "A model's default active melee capability used during its Active Role to conduct a Melee Attack."
      },
      {
        title: "DEF (Defense):",
        content: "A model's default reactive melee capability used during its Reactive Role to conduct a Melee Attack."
      },
      {
        title: "ACC (Accuracy):",
        content: "A model's default capability with ranged projectile weapons when performing Ranged Attacks."
      },
	        {
        title: "INT (Intellect):",
        content: "A model's default mental dexterity and capability of casting Spells and perceiving surroundings."
      },
	        {
        title: "AG (Agility):",
        content: "The default physical nimbleness mainly used when avoiding incoming attacks (Dodge) and escaping certain dangers."
      },
	      
	        {
        title: "T (Toughness):",
        content: "The default physical strength and endurance of a model."
      },
	        {
        title: "M (Morale):",
        content: "The default mental fortitude of a model."
      }
    ]
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
    category: "Normal Action",
    content: "There are two kinds of Actions: Normal Actions and Special Actions.\n\n- Normal Actions can be declared both during the model's Active and Reactive Role.\n- In order to declare a Special Action, a model must first declare \"Idle\" during its Movement Phase.\n- Special Actions cannot be declared during the Reactive Role.",
    table: {
      headers: ["Role", "Movement", "Action"],
      rows: [
        ["Active Role", "Normal Movement", "Normal Action"],
        ["Active Role", "Idle", "Special Action"],
        ["Active Role", "Special Movement", "Nothing"],
        ["Reactive Role", "—", "Normal Action"]
      ]
    }
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
