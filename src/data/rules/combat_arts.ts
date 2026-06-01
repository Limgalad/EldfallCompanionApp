import { CombatArt, CombatArtCategory } from "./types";

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
