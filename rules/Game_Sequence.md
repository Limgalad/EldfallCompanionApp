# Game Sequence

A game consists of a number of Rounds, each divided into a number of Turns (one for each player).

- In the first turn of a round, the 1st Player assumes the Active Role and the 2nd Player (or all other players) assumes the Reactive Role.
- Once all of the Active Player's models have been activated, the Roles are reversed and the next turn starts.
- There is only one player that is Active at a time.
- Once both/all turns are complete, the round ends and a new one begins.

> **Example Round**
>
> | | 1st Player | 2nd Player | 3rd Player |
> | --- | --- | --- | --- |
> | Turn 1 | Active | Reactive | Reactive |
> | Turn 2 | Reactive | Active | Reactive |
> | Turn 3 | Reactive | Reactive | Active |

## Turn Phase

Each round consists of a turn for each player. If there are more players, the players take turns being the Active Player in the decided order.

### Active Player

The Active Player carries out 4 Phases in their turn:

**I) The Strategic Phase**
Models of the Active Player may declare the use of any applicable Abilities, Items, or Stratagems in an order of their choosing. A Leader's Stratagems can only be declared during this Phase. Some other abilities need to be declared during this Phase.

**II) The Upkeep Phase**
All players allocate Activation Points to all of their models that can receive them. They allocate a number that is equal to their models' Stamina values.

**III) The Tactical Phase**
The Tactical Phase consists of multiple Activation Sequences. The Active Player may activate each of their models by spending Activation Points. The Reactive Player may spend Activation Points to react during the Reaction Step of each Activation Sequence. A model with no Activation Points cannot be chosen to activate or react. The Tactical Phase ends when the Active Player no longer has any eligible models to activate or decides to stop.

Note: You do not have to activate every model, and you may activate them in any order or use any number of their available Activation Points. A model's Activation Points do not have to be spent in succession — you may activate a different model before spending all of the Activation Points available to the first model during the same turn.

**IV) The End Phase**
Any applicable effects are resolved and both players discard any unspent Activation Points.

### Reactive Player

The Reactive Player's models (in their Reactive Role) may react against each Activation of the Active Player's models during the Reaction Step of each Activation Sequence.

---

## Tactical Phase — Activation Sequence

An Activation Sequence occurs with every Activation during the Tactical Phase.

### Activation Step

The Active Player Activates a model by spending one of its available Activation Points.

Note: An activated model suffers any relevant effects it might be affected by when the model activates.

### Movement Step

An activated model may declare Normal Movement or Special Movement. The Active Player must declare all Skills relevant to its Movement, if any (e.g. Dash, Climbing, Leap, Flight, Flicker etc.). During this Step, the activated model may enter or cancel the Crouched State (at the start or end of the Movement).

### Reaction Step

Following the rules of Reaction, the Reactive Player must now declare which of their models will react to the activated model, if any. After declaring these Reactions, the Reactive Player must declare which Normal Actions the reacting models will perform. More than one model can react against an activated model, however, the Reactive Player must specify each reacting model's Action.

If the declared Reaction is Attack, the Reactive Player must also declare the type/means of the Attack (e.g. Ranged or Melee, Skills, Items, Combat Arts, etc.).

> **A model may target only an activated model with an Attack in Reaction!**

#### Reaction

- Reaction is performed by the Reactive Player by spending an Activation Point.
- Reaction can only be a Normal Action.
- Reaction requires Line of Sight towards the Activated model at any point during its Movement.
- If the activated model moves within the reactive model's Awareness, the reacting model may declare Dodge even without Line of Sight.

#### Attack of Opportunity (Reaction)

If you see an opportunity or opening while the activated enemy model is moving, you can react before its Movement ends. This way, you can also prevent the enemy model escaping your Reach.

If an activated enemy model performs a Movement that the reactive player suspects might have come within Reach of their model's Weapon, the reactive model may declare Reaction at that point and declare an Attack of Opportunity.

- After the Reaction is declared, the reacting model must measure its Reach to check whether the enemy model is within range.
- If the activated model is not within Reach, it is not affected.
- If it is within Reach, the reacting model may attempt an Attack against it.
- Even if the Attack of Opportunity fails, the reactive model cannot declare a different Reaction in this Sequence.

Note 1: If you are playing on Assisted/Standard mode of Measuring, the Reactive Player can measure whether the activated model comes within Reach before declaring Attack of Opportunity. However, if you are playing on Realism mode, the Reactive Player must declare Attack of Opportunity before measuring the activated model's Movement and Reach.

Note 2: A reactive model may perform a Ranged Attack of Opportunity while the activated enemy model is moving toward it. If the activated model then declares a Melee Attack, this triggers a Confrontation.

Note 3: All modifiers are still applied to the reacting model's Attack.

#### Reaction Against Shrouded or Flying Models

If a reacting model has declared Dodge or Perceive and has LoS towards an activated enemy model that has declared an Attack while in the Shrouded or Flying State, the reacting model may change its declaration to an Attack immediately after the activated enemy model's Action Step.

### Action Step

The activated model may declare a Normal Action or a Special Action. If the declared Action is Attack, the Active Player must declare its targets and means (Skills, Items, Combat Arts, etc.).

### Resolution Step

Players apply modifiers. All necessary rolls are performed. When necessary, players must carry out Confrontation rolls. Models that scored Hit(s) must perform Damage rolls, while certain models that suffered a Hit during the Sequence may perform corresponding rolls (T, AG, etc.) in order to prevent taking damage and some effects.

Damage, effects, and abilities that happened during this Activation Sequence are applied and carried out simultaneously. Models that suffered damage from an opponent's successful Damage rolls suffer the corresponding number of Wounds. Wounds and the resulting effects and States are applied last. If two effects cannot be resolved simultaneously because they affect the game state (e.g., both models Interact or both models Dodge), the Active player chooses the order in which they are resolved.

> **Example of Activation Sequence**
>
> Mark and Anna are our players. During the Movement Step, Mark activates his Ranger Guild Hunter and chooses a Movement option. He selects Walk, allowing the model to move up to its SPD. Mark moves the Ranger Guild Hunter into position so that it has an unobstructed LoS to Anna's Faris Outrider. Once the Movement is complete, the Activation Sequence proceeds to the next Step.
>
> The next Step is the Reaction Step. During the Movement Step, Anna's Faris Outrider had LoS to the Ranger Guild Hunter at least once. This allows Faris to spend an Action Point to declare a Reaction. With no effective Ranged options available and anticipating a bow Attack, Anna declares Dodge. After the Reaction is declared, the Sequence moves on.
>
> In the Action Step, the Active model — the Ranger Guild Hunter — declares its Action. If the Ranger Guild Hunter had chosen Run during the Movement Step, it would only be able to declare Nothing. However, since it chose Walk, it may now declare an Action. Mark declares an Attack with the Ranger's Bow, targeting the Faris Outrider. With both the Action and Reaction declared, the Activation Sequence proceeds to the final Step.
>
> During the Resolution Step, all necessary rolls are made to determine the outcome. Anna rolls one die for the Faris Outrider's Dodge and rolls a 14. This result is higher than the model's AG value, so the Dodge fails. Mark now checks the STK value of the Ranger's Bow, which is 2, allowing him to roll two dice. He rolls an 8 and a 17. Comparing these results to the Ranger's ACC, Mark determines that one roll is successful, scoring 1 Hit. Next, Mark determines whether the Hit causes damage. He takes the PW value of the bow and subtracts the target's ARM (applying any relevant Combat Arts). He then rolls one die and must roll a value equal to or lower than PW minus ARM to cause a Wound. Mark rolls a 3, successfully causing a Wound. Even though the Faris failed its Dodge roll it may still move up to half of its SPD now. Mark places a Wound token next to the Faris Outrider. With this, the Activation Sequence is concluded. Mark may now choose another of his models that still has Activation Points and repeat the Activation Sequence.
