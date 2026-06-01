import { State } from "./types";

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
    description: "A model in this State has halved Intellect." 
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
