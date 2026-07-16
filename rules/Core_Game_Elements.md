# Core Game Elements

> **Model Profiles reference.** The game-play mechanics (dice rolls, modifiers, measurement,
> movement, line of sight, states, actions, confrontation, damage, spells & magic) live in
> [`Game_Play.md`](./Game_Play.md). They were removed from this file to eliminate a full duplicate.

## Model Profiles

### Models

A model is an individual entity which has its own profile and is represented by a miniature or a token on the field.

Models act as representations of fictional individuals and adventurers that have roles or professions in the world of Eldfall Chronicles. Every model (miniature and its profile) has unique characteristics, pros and cons, skills, weapons, synergies with other party members, fighting styles etc. They are indispensable party members, bringing unique elements to the table; each one is suited to different tasks, excels in different situations and allows different approaches.

### Class

Each model is assigned at least one Class, which, to an extent, defines its role on the field.

### Attributes

The set parameters which display the degree of a certain model's default capabilities, also referred to as "Stats". Likelihood of a dice roll success, used to simulate various Actions performed by the model, is primarily based on the model's attribute value.

| Attribute | Name | Meaning |
|-----------|------|---------|
| **STA** | Stamina | The default number of Activation Points a model receives at the beginning of its every turn and how swiftly it can wield certain Items. |
| **SPD** | Speed | The default distance that a model can cross on the field when moving, in inches. |
| **ARM** | Armor | The default amount of natural or artificial protection the model has to cope with the received Power of a Hit. |
| **HP** | Health Points | How many Wounds a model can withstand before becoming Incapacitated. |
| **OFF** | Offense | A model's default active melee capability used during its Active Role to conduct a Melee Attack. |
| **DEF** | Defense | A model's default reactive melee capability used during its Reactive Role to conduct a Melee Attack. |
| **ACC** | Accuracy | A model's default capability with ranged projectile weapons when performing Ranged Attacks. |
| **INT** | Intellect | A model's default mental dexterity and capability of casting Spells and perceiving surroundings. |
| **AG** | Agility | The default physical nimbleness mainly used when avoiding incoming attacks (Dodge) and escaping certain dangers. |
| **T** | Toughness | The default physical strength and endurance of a model. |
| **M** | Morale | The default mental fortitude of a model. |

### Size

Indicates the model's volume on the field. Sizes are categorized from smallest to largest:

| Size | Abbreviation | Base Dimensions |
|------|-------------|-----------------|
| Small | S | 25mm × 25mm |
| Medium | M | 32mm × 45mm |
| Large | L | 40mm × 45mm |
| Huge | H | 50mm × 50mm |
| Gigantic | G | 60mm × 60mm |
| Colossal | C | 80mm × 80mm |
| Monstrous/Epic | E | 100mm × 100mm |

#### Hitbox and Size

Every model in the game has a Hitbox of a certain Size assigned to it. As miniatures come stylized in various forms and poses, the Hitboxes are a standardized indicator used to determine the model's height and volume on the field. The Hitbox's volume is cylindrical, of the same width as the model's base and the height defined by its Size.

A model's size is important when determining where the model is — for example, determining if and how it can move across narrow spaces, elevation, etc. Most importantly, the Hitbox plays the biggest factor when drawing Line of Sight.

> **Hint:** When in doubt, after the Movement or Action was declared, a player can substitute the selected model with a Hitbox — e.g. cutout — of the corresponding Size (displayed on the model's profile), in order to confirm the validity of Movement, Line of Sight, possibility of an Attack, etc.

### Recruitment Cost

The amount of Recruitment Points a player has to spend to recruit the model into their Party.

### Limit

Indicates how many models of the same profile can be recruited into a single Party.

### Traits

Traits are passive abilities that are always in effect while the model is present on the field.

- A Trait is applied to the model, its Actions and Movement automatically at all times.
- A Trait's Effect cannot be disregarded volitionally.
- Some Traits can have more than one level, represented by roman numerals next to the name. It grants the effect of all lower levels of the same Trait to the model — the Effects of Traits with multiple levels stack.
- If there is no roman numeral next to the Trait, it is considered level I.
- Sometimes an Ability, Item or Spell will have a Trait. Any Hits or Wounds caused by such an Ability, Item or Spell will also have this Trait.

### Skills

Skills are optional abilities a model can use and benefit from in certain situations.

- A model cannot use the same Skill more than once per Activation.
- Some Skills can have more than one level, represented by roman numerals. It automatically grants access to all lower levels of the Skill to the User — the Effects of Skills with multiple levels stack.
- If there is no roman numeral next to the Skill, it is considered level I.

### Combat Arts

Combat Arts display a form of combat the model excels in and in which it developed a certain level of mastery.

- Some models have access to a variety of combat abilities organized into Combat Arts charts.
- Combat Arts consist of levels, where the model has access to all levels up to the model's listed level of that Combat Art.
- If a model has access to several Combat Arts, it may select only one at a time.
- A model can add the effect of only one Combat Art level to its Attack.

### Spellcraft

Some models have access to a variety of individual Spells, or Spells organized into Spellcraft charts. Similarly to Combat Art charts, Spellcrafts consist of levels, where the model has access to all levels up to the model's listed level of that Spellcraft. However, it can only cast Spells of the same Element as it has access to.

> **Example:** A model with Art of Sorcery III and Affinity (Fire) can cast Spells of level III or lower from the Art of Sorcery chart, but only those of the Fire Element.

### Special

Some models have unique Abilities displayed in this section.

### Stratagems

Stratagems are Abilities only the Leader of a Party may use during their Strategic Phase.

- If the Leader becomes Incapacitated or Dead, that Party can no longer use Stratagems.
- During their Strategic Phase, a player may select 1 Stratagem and apply its Effect.
- If the player does not specify what Stratagem the Leader is using, the default is the one listed highest in the Leader's Stratagem chart.
- Available Stratagems can be found on the Model Profile of the selected Leader.
- **Authority** Stratagems affect models in your party.
- **Subterfuge** Stratagems affect enemy models.
- Unless specified otherwise, after a Stratagem is applied, its Effect lasts until the player's next Strategic Phase.
- Stratagems have infinite Reach.
- Models of your Party without the same Affiliation as the Leader cannot benefit from that Leader's Authority Stratagems.

### Inventory (X)

Represents the available space a model has for carrying Items. The value X is the total weight or number of Items a model can carry.

- If the total Quantity or Weight of Items exceeds X, the model becomes **over-encumbered** and may not perform any Movement or Special Action.
- If an Item has "/" marked as its Quantity and Weight, it fills no space in the Inventory.
- When a model Activates, it may drop any number of Items (except default Items). Dropped Items are represented by a Cache/Loot token placed in Base Contact with the model.
- A model may pick up Items by Interacting with the Cache/Loot token.

> **Note:** Unless somehow removed, the Items that are already in the model's Inventory have to be included when calculating the total Weight and Quantity.

**QTY (Quantity):** The amount of an Item a model has in its Inventory.

**WGT (Weight):** The heaviness of a single Item. Weight is multiplied by Quantity when checking total Weight (unless Weight is 0, in which case only Quantity counts).

### Items

Items grant models various Abilities. A model can only have one Item from each Category equipped at a time. A model may equip or unequip Items once per Activation (or Reaction).

If the player does not specify what a model has equipped and the model has multiple Items of the same category in its Inventory, the default equipped Item (of each category) is the one listed highest in the Inventory - the Primary Weapon.

| Category | Description |
|----------|-------------|
| **Weapons** | Give an Attack the specified RCH, STK, PW and Effects when equipped. |
| **Shields** | Provide a passive effect when equipped. May be used to perform an Attack instead of a Weapon, Spell or another Item. |
| **Accessory** | Provide a passive effect when equipped. You do not need to unequip other Items to use an Accessory. |
| **Consumables** | Must be discarded after use, whether the Action was successful or not. A model may use only one Consumable of the same name at a time. You do not need to unequip other Items to use a Consumable. |

> **Note:** Some Items have Traits listed under their effects. Depending on a particular Trait, some might dictate the Item's usage, while others affect targets when the Item is used.
>
> **Note:** Unless an Item has the Two-Handed Trait, it is used in one hand.
>
> **Note:** If a model has a Two-Handed Weapon listed highest in the model's Inventory, while the Shield is listed second, the model will have the Two-Handed Weapon equipped and thus Shield unequipped.
>
> **Example:** The Throwing Trait on an Item means that such an Item can be used to perform a Ranged Attack, while the Bleed Trait forces a wounded target into the Bleeding State, etc.

#### Examples of Items and their Profiles

**Weapon 1:**

| NAME | EFFECT | PW | RCH | STK | TYPE | QTY | WGT |
|------|--------|----|-----|-----|------|-----|-----|
| Sword | - | T | 1" | | Melee, Weapon | 1 | 1 |

The Sword is a Weapon which can be used to perform Melee Attacks. It has no particular effect, with Power equal to the wearer's Toughness, capable of hitting targets up to 1'' away, and has an amount of Strikes equal to the wearer's Stamina. In this case, Quantity and Weight imposed on the wearer's Inventory is 1.

**Weapon 2:**

| NAME | EFFECT | PW | RCH | STK | TYPE | QTY | WGT |
|------|--------|----|-----|-----|------|-----|-----|
| Short Bow | Two-Handed | T | 0-20": 0 / 21-40": -6 | | Melee, Ranged | 1 | 2 |

In terms of damage, the Short Bow is similar to the Sword. However, unlike the Sword, the Short Bow is a Ranged Weapon, thus it can be used for Ranged Attacks. It has a Trait listed under its effects. Ranged Weapon's Reach is different from other types of Weapons, as it displays sets of intervals with their respective modifiers imposed on the model's Accuracy. The Short Bow is capable of attacking targets up to 40 inches away, but will impose a -6 negative modifier to the user's Accuracy when shooting at targets that are more than 20 inches away. Its Strike is equal to the wearer's Stamina. While its quantity is 1, the bow and its arrows take up a bit more of the model's Inventory, thus its Weight is 2.

**Accessory:**

| NAME | EFFECT | PW | RCH | STK | TYPE | QTY | WGT |
|------|--------|----|-----|-----|------|-----|-----|
| Staff of Sorceries | +1 Strike when casting Sorceries. | - | - | - | Accessory | 1 | 2 |

Staff of Sorceries is an Accessory. While it has no particular Power, Reach or Strike value, it grants its effect to the wearer as long as it is equipped.

**Shield:**

| NAME | EFFECT | PW | RCH | STK | TYPE | QTY | WGT |
|------|--------|----|-----|-----|------|-----|-----|
| Shield | -3 to incoming Melee Attacks to the Front, +3 ARM against Ranged Attacks to the Front. | - | 0" | - | Melee, Shield | 1 | 2 |

As defined in the rules above, when the wearer has a shield equipped, it automatically becomes affected by its effect. Therefore, any frontal Melee Attack towards the wearer will suffer a -3 modifier (namely to its Offense or Defense). In addition, the wearer will also have +3 Armor when dealing with frontal Ranged Attacks. Instead of attacking with a Weapon, the wearer may also attempt to perform a Shield Bash, damaging and knocking back the target. Note that in order to effectively use the Shield for a Melee Attack, the wearer should be in Base Contact with the target, as its Reach is 0''.

**Consumable:**

| NAME | EFFECT | PW | RCH | STK | TYPE | QTY | WGT |
|------|--------|----|-----|-----|------|-----|-----|
| Grapeshot | Targetless. | 12 | T, AoE: Circular L | 1 | Ranged, Consumable | 3 | 0 |

Grapeshot is a bomb, a Consumable. It has Reach equal to the user's Toughness and has an Area of Effect of a large circular template. When using it for a Ranged Attack, the Targetless Trait allows the user to target any area on the field within its Reach (model's Toughness), while the AoE: Circular L will affect any model inside the Large Circular template, centered on the targeted area. Affected models suffer a Hit with Power 12 if the Grapeshot lands successfully (or if they somehow failed to avoid the impact).

### Affiliation

Affiliation is indicated by a banner or crest on the model's profile, displaying the factions to which this model may be recruited and to which it belongs.

Models with Neutral Affiliation can be recruited into any faction. Some models have a split banner or two crests, signifying two different factions, meaning that the model can be recruited into both factions. If one half represents the Neutral faction, it means that the model can be recruited by any faction as a neutral model, while it originally belongs to the other displayed faction (where it is recruited as a model of that faction).

Note that the banners and/or crests always represent the affiliation of the related faction, even in other documents and on cards, such as the Upgrade, Hostile Behavior (AI), and Scheme cards.

The factions are:

- Sand Kingdoms
- Empire of Soga
- Coalition of Thenion
- Helian League
- Neutral

Other example: Water, Earth Element (Creatures).
