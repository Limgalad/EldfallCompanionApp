#Game Play

## Dice Rolls

All rolls use 20-sided dice (D20).

### Attribute Roll

The result of the dice roll must be equal to or lower than the modified attribute.

### Attack Roll

Each die rolled as part of an Attack is an Attack Roll. A model rolls a number of Attack Rolls equal to its STK. An Attack Roll is successful if its result is equal to or lower than the modified attribute used for the Attack and it was not cancelled during a Confrontation. Each successful Attack Roll generates one Hit, which requires the attacker to make a Damage Roll.

### Reroll

After the dice are rolled, the player may reroll a selected number of dice (depending on the ability), completely negating their previous roll result.

### Damage Roll

Roll a number of dice equal to the number of Hits. For each die result equal to or lower than the Power (PW) of the used Weapon minus the target's Armor (ARM), the target suffers a Wound.

---

## Modifiers

Modifiers alter a model's attribute and affect the outcome of dice roll results. They are numbers added to or subtracted from the model's default attribute value.

- All applicable bonuses and penalties stack and are applied cumulatively.
- Modifiers are applied after the Action has been declared and before rolls are performed.
- If modifiers reduce an attribute to 0, the Action results in an automatic failure (except for Damage Rolls). An attribute cannot be modified below 0.
- If an attribute is increased over 20, the roll result of 20 also becomes a Critical Hit.
- When a halving or doubling modifier is applied, first apply other modifiers, then halve or double the result (rounding up).

---

## Distance & Measurement

All distances are measured in inches. The distance between models is measured in a straight line from the closest points of their Hitboxes. Movement distance is always measured from the same part of the model's base, along the exact route of movement.

### Modes of Measuring

Before starting the game, players decide which mode of measuring to implement:

| Mode | Description |
|------|-------------|
| **Assisted Mode** | Players can pre-measure any distance. |
| **Standard Mode** | Pre-measuring limited to within the Awareness of models and the activated model's Movement distance. |
| **Realism Mode** | Players are not allowed to pre-measure any distances. |

### Base Contact

Base Contact defines a situation where a model's Hitbox is in physical contact with another model's Hitbox, token, piece of scenery, etc. A model is always in Base Contact with itself.

---

## Movement

There are two kinds of movement: Normal Movement and Special Movement.

### General Rules of Movement

- A player may voluntarily move or place models only on non-vertical surfaces, unless stated otherwise.
- When declaring a Movement, the player must clearly indicate the movement path.
- While moving, a model can rotate and has 360° Line of Sight.
- A model can move through allied models, but not through enemy models.
- A model's Movement automatically ends if it enters Base Contact with an enemy model.
- A model may not end its Movement with its Hitbox within another model's Hitbox.
- A model which declared a Special Movement cannot perform any other Normal or Special Action during the same Activation Sequence (unless stated otherwise).
- A model can move over any scenery piece or obstacle smaller than or equal in height to the model's Hitbox without spending additional Speed points.

#### Ladder

If a model is moving vertically up a Ladder or over a surface narrower than the model's base size, Movement costs double.

> **Example:** Moving up a 2" ladder costs 4 SPD.

---

## Line of Sight

Line of Sight (LoS) is an imaginary straight line connecting the Hitboxes of two models, defining whether a model can see the other.

- Unless specified otherwise, a model can draw Line of Sight only from its **Front arc**.
- A model's Hitbox is divided from the top into the Front and Back sections, each representing an arc of 180°.
- A model has Line of Sight to another model if it can draw an unobstructed straight line from a point on its Hitbox to a point on the target model's Hitbox.
- Line of Sight can be obscured by another model or scenery (even allied models).
- While moving, a model has 360° Line of Sight.
- A model always has Line of Sight to itself.

---

## Awareness

Awareness represents the model's perception of its surroundings. It is an area surrounding the model with a radius (measured in inches) equal to the model's Agility value, measured from the edge of the miniature's base.

---

## States

A State represents certain conditions affecting a model. A token/marker representing that State can be placed next to the model's figure or onto the model's profile card.

- A model can find itself in more than one State at the same time.
- States of the same name cannot be applied more than once to the same model.

---

## Actions

There are two kinds of Actions: Normal Actions and Special Actions.

- Normal Actions can be declared both during the model's Active and Reactive Role.
- In order to declare a Special Action, a model must first declare "Idle" during its Movement Phase.
- Special Actions cannot be declared during the Reactive Role.

| Role | Movement | Action |
|------|----------|--------|
| Active Role | Normal Movement | Normal Action |
| Active Role | Idle | Special Action |
| Active Role | Special Movement | Nothing |
| Reactive Role | — | Normal Action |

---

## Activation Points

Activation Points are a resource generated from the model's Stamina value. Players spend these points when activating a model or reacting with it.

---

## Active & Reactive Role

- The **Active Player's** models perform the Active Role, conducting Activations.
- The **Reactive Player's** models perform the Reactive Role, carrying out Reactions.
- When the Active Player concludes their turn, the Roles exchange.

---

## Reach (RCH)

Reach represents the distance (in inches) at which an Item, Ability, or Spell can be used, measured from anywhere on the model's Hitbox.

- Items, Spells or Skills with Reach 0" can only be used in Base Contact with the target.
- If the target of an Action is outside the Item's Reach, the Action resolves as a failure.
- Ranged Weapons display one or multiple intervals, indicating distances at which certain Modifiers apply to the user's Accuracy attribute.

---

## Casting Aura

Casting Aura is an area where some Spells can be cast, equal in size to the caster's Awareness.

- Spells with Casting Aura Reach can only target models within the Casting Aura.
- In the Active Role, the caster can target models within the Casting Aura even without Line of Sight, but the casting attribute suffers a halving Modifier.
- Targets of an Attack with this Reach cannot benefit from Cover.

---

## Templates & AoE

Some Abilities, Spells or Items have an Area of Effect (AoE). A template is placed over the affected area and affects all models whose Hitboxes are at least partially covered or in contact with it. The main target must be fully covered by the template.

- If a model is covered by multiple templates simultaneously, it suffers the effect of each separately.
- A model affected by an Attack with a template may avoid receiving Hits with a successful Dodge Action.
- If the target of an Attack with a template declares an Attack (as Action or Reaction) and wins the Confrontation, the template Attack is fully nullified.

### Template Kinds & Placement

#### Circular (Small / Large)

The target of the Attack must be fully covered by the template. The AoE also affects models 3" above and below the surface of the target. A model cannot be affected if there is no LoS between the center of the AoE and the model.

- Large circular template: ⌀ 120mm
- Small circular template: ⌀ 70mm

#### Spray (Small / Large)

Spray templates are placed with the narrow end in Base Contact with the attacking model. The target must be fully covered by the template. The AoE may also affect models up to 5" above or below the attacker's surface (attacker's choice).

- Large Spray template length: 260mm
- Small Spray template length: 213mm

---

## Strikes & Hits

Strike value (STK) specifies the number of dice rolled when performing an Action with a certain Item, Spell, or Ability. In the Reactive Role, a model's default Strike value becomes 1 (unless stated otherwise). Strike value cannot be modified below 1.

In the Active Role, if the Active model has a Strike value greater than 1, it may Attack a number of different targets up to its Strike value.

A successful Attack Roll is a Hit. If a Damage Roll is successful, it inflicts a Wound, causing the model to lose 1 HP. Suffering a Hit allows the hit model to rotate and adjust its Line of Sight.

### Strikes & Templates

When a model uses an ability that places templates and its Strike value is greater than 1, the player may place templates equal to the Strike value and distribute them among one or more targets.

### Critical Hit

When the result of a dice roll is **1**, it is a Critical Hit.

- A Critical Hit reduces the target model's Armor to 0 for that particular Hit.
- A Critical Hit beats all opponent's Confrontation roll results.
- When both (or more) players score a Critical Hit, all models suffer the Hit and all additional effects.

---

## Confrontation

Confrontation occurs when two (or more) opposing models declare the Attack Action against one another. Both models fight simultaneously, each attempting to block incoming Strikes and hit their adversary.

### Confrontation Roll

Confrontation rolls symbolize parrying, blocking, counter-attacking, and the quickness of strikes. They are performed simultaneously.

- The model with one or more successful Confrontation rolls wins the Confrontation and is the only model that deals damage.
- A Confrontation roll is successful if the result is equal to or lower than the model's modified attribute **and** higher than the enemy model's successful rolls.
- Each successful Confrontation roll negates all enemy model rolls with equal or lower results.
- After all rolls are made, the Reactive player first decides whether to reroll any dice using all available rerolls, then the Active player decides.

---

## Damage & Wounds

When a model hits another model, it must perform a Damage Roll for every Hit to damage it. A successful Damage Roll causes the target to suffer a Wound and lose 1 HP. A model cannot suffer more Wounds than it has HP.

A model whose HP is reduced to 0 becomes **Incapacitated** at the end of the Activation Sequence. If an Incapacitated model suffers another Wound, it becomes **Dead**.

### Fall Damage

A model falls when it is somehow moved from a higher surface onto a lower surface (if Climb was not used).

If a model falls a distance greater than its halved Speed value (measured vertically), it must perform an Agility roll for each interval of the fall equal to its halved Speed value. The model suffers a Wound for every failed Agility roll.

---

## Spells & Magic

Spells are a focused representation of magic. The model who uses a Spell is the **Caster**.

- Unless stated otherwise, the model uses the Intellect attribute when casting Spells.
- In order to cast Spells of a certain Element, the caster must have an Affinity (Element) of the specified Element.
- In the Active Role, if a Spell has a Strike value greater than 1, the Caster may choose a number of targets up to the Strike value (not applicable to Conjuration Spells).
- A model can cast only one Spell at a time.
- A model cannot cast Spells if it has "both hands full" (e.g., Shield + Weapon equipped).

### Mana Counters

Mana Counters represent the energy required for casting Spells. In the Active Role, a Mage can convert any number of Activation Points into Mana Counters. Mana Counters are cumulative and do not disappear at the end of the turn.

### The 5 Types of Spells

#### Sorcery

Mainly short-lasting, destructive effects. Unless specified otherwise, the Effect of a Sorcery-Type Spell lasts until the end of the Activation Sequence.

#### Healing

Short-lasting, restorative effects. Unless specified otherwise, the Effect of a Healing Spell lasts until the end of the Activation Sequence. Can only be cast in the caster's Active Role.

#### Enchantments

Spells that last for an extended period and bolster or weaken the target. Unless specified otherwise, the Effect of an Enchantment lasts until the caster's next Strategic Phase. Can only be cast in the caster's Active Role.

- If the Enchantment Spell is cast successfully, its target receives its Effect.
- If the Enchantment Spell would have the ✯ symbol for its Power, the enchanted model's Attacks are considered to have the "Spell" type for the duration.
- A model can be enchanted by only up to 1 Enchantment of the same name.
- Effects of Enchantment Spells cannot be prevented with a successful Dodge.

#### Transmutation

Permanent Spells that affect the environment. Transmutation Spells remain on the field until removed or destroyed. Transmutation Spells with an Armor value in their Effect can be targeted with Attacks and destroyed with a successful Damage Roll.

#### Conjuration

Allow the caster to summon a creature to the field under their command. Can only be cast in the caster's Active Role by declaring a Ritual (Special Action).

- Conjuration Spells have a Mana Cost of 1 or more.
- **Mana Cost (X):** The caster must spend an amount of Mana Counters equal to the X value.
- Summoned creatures are at the same time considered models and Conjuration-Type Spells.
- Creatures have a **Summoning Limit** equal to the creature's Tier.
- A caster cannot cast more Conjuration Spells if the combined Summoning Limit of currently present summoned creatures equals or exceeds the caster's modified Stamina.
- During the Strategic Phase, a caster can voluntarily dismiss one of its summoned creatures, instantly removing it from the field.
- When the caster becomes Incapacitated or Dead, summoned creatures are removed from the field at the end of the Activation Sequence.
