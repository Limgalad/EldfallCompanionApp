import { Skill } from "./types";

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
