
# List of Actions

## Normal Actions

### Assist

An Action which an activated model can declare by targeting itself or one or more allied models. Most commonly used to cast support Spells among allies.

- Unless specified otherwise, Line of Sight is required to perform the Assist Action when targeting allied models.
- If the assisting model has Strike 1, it may only target one model. If its Strike is greater than 1, it may target up to its Strike value.
- The requirements of the used Skills, Spells or Items must be fulfilled.

### Attack

An Action which an activated or reacting model may declare by targeting one or more enemy models.

- Unless specified otherwise, Line of Sight is required.
- During the declaration, the player must choose and declare which Skill(s), Combat Art, and Item or Spell the model will use. Unless stated otherwise, a model may select only 1 Item or 1 Spell.
- The Attack can be Ranged or Melee depending on the Item, Spell or Skill.
- In the Reactive Role, the default Strike value becomes 1.

#### Melee Attack

A Melee Attack is an Attack Action performed with an Item or a Spell of the Melee Type. A model may always choose to perform a Melee Attack unarmed instead of using other Melee Weapons.

#### Engaged in Melee

If a model ends within the Melee Weapon's Reach and LoS of an enemy model at the end of the Resolution Step or at the end of a Phase, the model is considered **Engaged**.

**Engaged (State):**
- During the Movement Step, an Engaged model may only declare Idle or Walk. If declaring Walk, it can only move directly towards the enemy causing the Engaged state.
- While Engaged, a model may declare only Melee Attack, Assist (targeting itself), or Dodge.
- A model ceases to be Engaged when it leaves the Melee Weapon reach of the enemy model, disengages with a Dodge, or by rendering the enemy into the Incapacitated, Petrified, Crouched or Dead State.
- While Engaged, a model automatically has LoS to all enemy models causing it to be Engaged, but cannot react against models outside of its Awareness.

#### Ranged Attack

A Ranged Attack is an Attack Action performed with an Item or a Spell of the Ranged Type.

- Uses Accuracy attribute when attacking with a Ranged Item.
- Uses Intellect attribute when casting Spells (unless stated otherwise).
- During Reaction, when declaring a Ranged Attack, the reacting model must specify the exact location on the activated model's movement path where the activated model will be shot upon.

#### Cover (Ranged Attack)

A Size Small, Medium or Large model has Cover against Ranged Attacks if it is within 1 inch of a piece of scenery that is higher than the model's base and at least partially obscures the model's Hitbox from the attacker's LoS.

| Cover Type | Condition | Modifier |
|------------|-----------|----------|
| **Heavy** | Object is both taller and wider than the model's size. | –4 to Attacker's Ranged Attack |
| **Light** | Object is smaller or thinner than the model's size. | –2 to Attacker's Ranged Attack |

A model in the **Crouched State** has Light Cover.

#### Higher Ground

If a model is on elevated ground and its Hitbox is at least partially obscured from the attacker due to perspective, the model receives Light Cover. If the model stands behind a solid wall or similar, it receives Heavy Cover instead.

#### (Ranged) Friendly Fire

When performing a Ranged Attack without AoE targeting an enemy model that is in Base Contact with an allied model, the attacking model suffers a –4 stackable Modifier for every allied model in Base Contact with the target. A roll result of 17, 18, 19 or 20 hits one of the allied models in Base Contact with the target (opponent chooses which one, if more than 1). A hit model suffers from Friendly Fire.

### Death Blow

An Action that renders an Incapacitated enemy model into the Dead State. The model must be in Base Contact with the target. No roll is required.

### Dodge

To avoid a potential or incoming attack, the model performs a successful Agility roll using 1 die. If successful, ignore non-critical Hits from the enemy's Attack.

- To declare Dodge in the Reactive Role, the model must have LoS towards the activated model, or the activated enemy model must be within its Awareness.
- If a model declares Dodge and had no LoS at any point during the Active Model's Movement Step, the Dodge must be performed with a halved Agility attribute.

When a model declares Dodge, even if the roll was unsuccessful, it may do the following at the end of the Resolution Step:
- Move for a distance of its halved Speed value (rounded up) in any direction.
- Enter or cancel the Crouched State.

#### Disengage

When an Engaged model declares a Dodge, it may move out of the enemy model's melee Reach, canceling the Engaged State (even if the roll was unsuccessful).

#### Dodge Against Multiple Enemy Attacks

A model declaring Dodge, upon becoming the target of multiple enemy models, must perform an Agility roll against each enemy Attack separately.

### Interact

The model must be in Base Contact with an object described by the Quest. The model may perform a roll against the object (if necessary), using the attribute prescribed by the Quest.

### Nothing

The model does nothing.

### Perceive

Allows a model to target and reveal an enemy model, Spell or Item represented by a token (Intrigue, Shrouded, etc.). The model must have Line of Sight towards the token (unless specified otherwise). By passing an Intellect roll, the model may reveal the target token.

### Trade

A model performing this Action can exchange any number of Items in its Inventory with an allied model in Base Contact. A model may only exchange acquired Items (not its default Items listed on its profile).

---

## Special Actions

### Issue a Duel

Only a member belonging to the player's original party can declare this Action (not summoned creatures or familiars).

- The opposing player may decide whether to accept or refuse.
- If accepted, the opposing player appoints a model from their party to duel.
- Both dueling models' Activation Points are restored to match their default Stamina value and the duel begins.
- While dueling, no other model can be activated or react.
- If a model not involved in the duel interferes, that side automatically loses the duel.
- Models belonging to the involved model (summoned creatures, familiars) can fight alongside the dueling model.
- The duel ends when one of the two models becomes Incapacitated or Dead.
- When the duel ends, the game ends as well.
- The player of the model that became Incapacitated or Dead loses the duel.
- If both models become Incapacitated or Dead during the same Activation Sequence, the duel ends in a draw.
- The player that won the duel receives **6 Victory Points**.
- A draw results in both sides receiving **3 Victory Points** (not exceeding the maximum VP available in the Quest).

### Ritual

By declaring Ritual, a model can immediately cast a Conjuration Spell (without any roll required), or some Spells that can only be cast with the Ritual Action. After paying the Mana Cost, the player places the corresponding miniature and profile card in Base Contact with the caster.

### Uncover

By passing a halved Intellect roll, the Hidden State of all enemy models or Items within this model's Awareness is canceled.
