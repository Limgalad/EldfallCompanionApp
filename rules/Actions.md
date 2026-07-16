# List of Actions

## Normal Actions

### Assist

An Action which an activated model can declare by targeting itself or one or more allied models. Most commonly used to cast support Spells among allies.

- When declaring Assist as a Reaction, a model may target other allied models or itself.
- During the declaration of the Assist Action, the player must choose and state with which Skills or Items the assisting model will perform the Action or which Spells it will cast.
- Unless specified otherwise, Line of Sight is required to perform the Assist Action when targeting allied models.
- If an assisting model would have Strike greater than 1, it may target a number of models up to its Strike value.
- The requirements of the used Skills, Spells or Items must be fulfilled.
- If a model uses a Spell to Assist, it must make INT Attribute rolls equal to the spell's Strike value. Only successful rolls grant the Spell's effects.

### Attack

An Action which an activated or reacting model may declare by targeting one or more enemy models.

- Unless specified otherwise, Line of Sight is required.
- During the declaration, the player must choose and declare which Skill(s), Combat Art, and Item or Spell the model will use. Unless stated otherwise, a model may select only 1 Item or 1 Spell.
- The Attack can be Ranged or Melee depending on the Item, Spell or Skill.
- The modified Strike value, found in the Skill, Spell or Item profile, specifies the number of dice used during the Attack in the Active Role.
- In the Reactive Role, the default Strike value becomes 1.
- In order to perform an Attack with a certain Skill, Spell or Item, their requirements (Reach, additional effects, etc.) must be fulfilled.
- In order to perform a successful Attack, the result of a die roll must be equal to, or lower than the used modified attribute (Offence, Defense, Accuracy, Intellect, etc.).
- If Confrontation rolls are performed, the Attack is successful if the roll is within the above-mentioned conditions and higher than the enemy model's rolls.
- In the Active Role, during the Attack declaration, if the Active model's Attack would have a Strike value greater than 1, its Attack may have a number of targets up to its Strike value. In other words, if the active attacker's Strike value is greater than 1, it can distribute its strikes among different targets.

#### Melee Attack

A Melee Attack is an Attack Action performed with an Item or a Spell of the Melee Type. A model may always choose to perform a Melee Attack unarmed, instead of using other Melee Weapons.

When performing a Melee Attack with a Melee Item, a model uses the Offense attribute in its Active Role and the Defense attribute in its Reactive Role. Whenever a Melee Attack is performed with a Spell, the Intellect attribute is used (unless stated otherwise).

If the Strikes are distributed among more than one enemy model, Confrontation rolls are resolved separately with every targeted enemy model, for each distributed Strike.

Unarmed Melee Attack is performed according to the following table:

| NAME | EFFECTS | PW | RCH | STK | TYPE | QTY | WGT |
|------|---------|----|----|-----|------|-----|-----|
| Unarmed | Unkeen | T or AG −3 | 0 | 1 | Melee | – | – |

If a model has a Shield equipped, it may choose to perform a Melee Attack with Shield Bash, instead of using other Melee Weapons. Shield Bash is performed according to the following table:

| NAME | EFFECTS | PW | RCH | STK | TYPE | QTY | WGT |
|------|---------|----|----|-----|------|-----|-----|
| Shield Bash | Knockback(1), Unkeen | T | 0 | 1 | Melee | – | – |

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

If the model is not within 1 inch of the cover at any point of its movement, it can still be shot upon at the moment when it is not in contact with the cover (provided that the attacker has a visual of that exact moment).

| Cover Type | Condition | Modifier |
|------------|-----------|----------|
| **Heavy** | Object is both taller and wider than the model's size. | –4 to Attacker's Ranged Attack |
| **Light** | Object is smaller or thinner than the model's size. | –2 to Attacker's Ranged Attack |

A model in the **Crouched State** has Light Cover.

#### Higher Ground

If a model is on elevated ground and its Hitbox is at least partially obscured from the attacker due to perspective, the model receives Light Cover. If the model stands behind a solid wall or similar, it receives Heavy Cover instead.

#### (Ranged) Friendly Fire

Shooting into melee combat where models are close together can be potentially risky, as the shooters can hit their own allies in the process. This rule applies when performing a Ranged Attack without AoE targeting an enemy model that is in Base Contact with an allied model (of the shooter).

When performing such a Ranged Attack, the model that is performing the Ranged Attack will suffer a –4 stackable Modifier for every allied model in Base Contact with the target. A roll result of 17, 18, 19 or 20 hits one of the allied models in Base Contact with the target (if more than 1, the opponent chooses which one gets hit). A hit model suffers from Friendly Fire.


### Death Blow

An Action that renders an Incapacitated enemy model into the Dead State. The model must be in Base Contact with the target. No roll is required.

### Dodge

To avoid a potential or incoming attack, the model performs a successful Agility roll using 1 die. If successful, ignore non-critical Hits from the enemy's Attack.

- To declare Dodge in the Reactive Role, the model must have LoS towards the activated model, or the activated enemy model must be within its Awareness.
- If a model declares Dodge and had no LoS at any point during the Active Model's Movement Step, the Dodge must be performed with a halved Agility attribute.

When a model declares Dodge, even if the roll was unsuccessful, it may do the following at the end of the Resolution Step:
- Move for a distance of its halved Speed value (rounded up) in any direction.
- Enter or cancel the Crouched State.

Note: A successful Dodge roll may also cancel all States that require a successful Dodge for their cancellation.

A model can fall off the edge of a surface while dodging. In this case, any possible Fall Damage has to be applied.

Declaration of Dodge requires no target, or rather, the target is the model itself.

#### Disengage

When an Engaged model declares a Dodge, it may move out of the enemy model's melee Reach, canceling the Engaged State (even if the roll was unsuccessful).

#### Dodge Against Multiple Enemy Attacks

A model declaring Dodge, upon becoming the target of multiple enemy models, must perform an Agility roll against each enemy Attack separately.

### Interact

The model must be in Base Contact with an object described by the Quest. The model may perform a roll against the object (if necessary), using the attribute prescribed by the Quest.

### Nothing

The model does nothing.

### Perceive

Allows a model to target and reveal an enemy model, Spell or Item represented by a token (Intrigue, Shrouded, etc.). The model must have Line of Sight towards the token (unless specified otherwise). By passing an Intellect roll, the model may reveal the target token. If the token is revealed, the corresponding model, Spell or Item token is revealed and placed onto the field. A model can perform Perceive only against tokens within its Awareness.

### Trade

A model performing this Action can exchange any number of Items in its Inventory with an allied model in Base Contact. A model may only exchange acquired Items (not its default Items listed on its profile).

---

## Special Actions

In order to declare a Special Action, a model must first declare "Idle" during its Movement Step.

### Issue a Duel

Only a member belonging to the player's original party can declare this Action (not summoned creatures or familiars).

- The opposing player may decide whether to accept or refuse.
- If accepted, the opposing player appoints a model from their party to duel.
- Both dueling models' Activation Points are restored to match their default Stamina value and the duel begins.
- While dueling, no other model can be activated or react.
- If a model not involved in the duel interferes, that side automatically loses the duel, and the other side automatically wins.
- Models belonging to the involved model (summoned creatures, familiars) can fight alongside the dueling model. (Note: Summoners are allowed to summon creatures that may help them in the duel.)
- The duel ends when one of the two models becomes Incapacitated or Dead.
- When the duel ends, the game ends as well.
- Note: The players should have in mind that issuing and accepting a duel results in the end of the game and any Actions and objectives outside of the duel cannot be continued or completed after the duel starts.
- The player of the model that became Incapacitated or Dead loses the duel. The winner of the game, however, is not necessarily the player that won the duel.
- If both models become Incapacitated or Dead during the same Activation Sequence, the duel ends in a draw.
- The player that won the duel receives **6 Victory Points**.
- A draw results in both sides receiving **3 Victory Points** (not exceeding the maximum VP available in the Quest) (calculate point sum in "Rewards", which are defined in each Quest).

Note: The winner of the game is the player that amassed the most Victory Points, including those amassed during the play-through to the point of the Duel.

Hint: Stratagems can be used during a duel.

### Ritual

By declaring Ritual, a model can immediately cast a Conjuration Spell (without any roll required), or some Spells that can only be cast with the Ritual Action. After paying the Mana Cost, the player places the corresponding miniature and profile card in Base Contact with the caster.

### Uncover

By passing a halved Intellect roll, the Hidden State of all enemy models or Items within this model's Awareness is canceled. (When playing with more players, the models and Items are revealed to other players as well.)

Note: Some abilities allow a model to be deployed in the Hidden State, which prevents the other player from seeing them on the field.
