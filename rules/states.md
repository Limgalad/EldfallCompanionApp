# States Reference

---

## Bleeding
A model in this State must perform a **Toughness roll** in its every Strategic Phase. A failed roll causes the model to suffer a Wound.

---

## Blinded
A model in this State has **no LoS** (other than to itself) and cannot perform any Actions other than **Assist**, **Dodge** or **Nothing**.

---

## Confused
A model in this State has halved **Offense**, **Defense**, **Accuracy**, **Intellect**, **Agility** and **Morale**.

---

## Crouched
The Hitbox of a Crouched model becomes the size and volume of its base.

While in this State:
- **Speed** and **Armor** value is halved
- **Attack Strike** value becomes 1
- Cannot make other models Engaged
- During the Movement Step, may only declare **Walk** or **Idle**

In the Active Role, this State may be voluntarily canceled during the model's Movement Step. This State may also be canceled with a **Dodge**.

---

## Crippled
A model in this State has halved **Speed** and **Agility**.

---

## Dead
A Dead model's Hitbox becomes the size and volume of its base.

A Dead model:
- Cannot receive Activation Points
- Cannot perform Activations nor Reactions
- Cannot use or benefit from any Skills, Traits, Upgrades, Items, etc.
- Is ignored for all impacts (scoring in Quests, Ranged Friendly Fire, etc.)
- Does not obstruct Movement, but a model may not end their Movement on top of a Dead model

When a model enters Dead State, it retains its other States. Unless specified otherwise, a Dead model **cannot regain HP**.

---

## Engaged
During the Movement Step (Active Role), an Engaged model may only declare **Idle** or **Walk**. If it declares Walk, it can only move directly towards the enemy causing the Engaged State.

If Engaged by more than one model, it must choose one enemy to move toward.

While Engaged, a model may only declare:
- **Melee Attack**
- **Assist** (targeting itself)
- **Dodge**

A model ceases to be Engaged when it:
- Leaves the melee weapon reach of the enemy model
- Disengages with a Dodge
- Renders the enemy **Incapacitated**, **Petrified**, **Crouched** or **Dead**

While Engaged, a model automatically has LoS to all enemy models causing the Engaged State, but cannot react against models outside of its Awareness.

---

## Fatigued
A model in this State **cannot regain AP** during the Upkeep Phase. This State is canceled at the beginning of this model's next Strategic Phase.

---

## Flying
While in this State, the model:
- Has **doubled Speed**
- Has **Melee Attack Strike** value of 1
- May move over scenery, obstacles and models, or end its movement above them (unless the scenery is of infinite height)
- **Cannot** benefit from Cover
- Always has LoS to all models, and all models have LoS to it
- **Cannot** become Engaged or cause Engaged
- **Cannot** voluntarily become Crouched
- **Cannot** be targeted by Melee Attacks, except by other Flying models — however, if a Flying model declares a Melee Attack against a non-Flying model, that model may declare a Melee Attack in return

The Flying State is automatically canceled if the model becomes **Incapacitated**, **Dead**, **Immobilized**, **Petrified** or **Crouched**.

Attack and movement distances are measured as if the figure were placed on the field.

---

## Immobilized
A model in this State cannot perform any **Movement**, **Special Movement** or **Special Action**.

This State can be canceled with a successful **Dodge**, which may be performed with either Agility or Toughness. When declaring Dodge, the model cannot move or enter/cancel the Crouched State unless the Dodge is successful.

---

## Incapacitated
When a model's HP reaches 0, it becomes Incapacitated and immediately enters the **Crouched** State. The model retains all other States.

An Incapacitated model:
- Cannot receive Activation Points
- Cannot perform Activations nor Reactions (retains remaining AP until End Phase of that turn)
- Cannot use or benefit from any Skills, Traits, Upgrades, Items, etc.
- Is ignored for scoring in Quests and Ranged Friendly Fire
- Is still hit by Attacks such as AoEs or Sweep Attacks

An Incapacitated **Leader** cannot use Stratagems.

An already Incapacitated model that suffers another Wound automatically becomes **Dead**.

This State is canceled if the model regains at least 1 HP. If Incapacitation is caused by an effect (with HP still above 0), the State is canceled during the model's next Strategic Phase — at which point the model may voluntarily cancel Crouched.

---

## Panicked
A Panicked model must perform a **Morale roll** at the beginning of every Activation or Reaction.

- **Active Role — failed roll:** Must perform an entire Run movement towards the nearest open edge of the field. If equidistant from two or more edges, the controlling player chooses. If the movement would end past the edge, the model is **removed from play and counts as a loss**.
- **Active Role — starts Engaged:** Declares Idle and Dodge.
- **Reactive Role — failed roll:** Can only declare **Dodge** (towards the field edge) or **Nothing**.

---

## Poisoned
A model in this State must perform a **Toughness roll with a −6 modifier** in its every Strategic Phase. A failed roll causes the model to suffer a Wound.

---

## Shrouded
While in this State, the model is represented on the field by a **Shrouded token**.

- Cannot be the target of Actions other than **Perceive** (Dodge has no target and is a valid Reaction)
- Has **360° Line of Sight**
- The model's identity and profile are **secret information** — the controlling player is not obliged to disclose them while the model remains Shrouded
- Shrouded models retain all Skills, Traits, Size, etc., though this information is not publicly disclosed

The Shrouded State is automatically canceled if the model declares a Normal Action (other than Nothing) or Special Action. Performing an Attack while Shrouded reveals the model but grants the **Surprise Attack** Trait to that Attack.

---

## Slowed
A model in this State has **halved SPD**.

---

## Weakened
A model in this State has halved **Toughness** and **−1 Stamina**.
