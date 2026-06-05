export interface RuleSection {
  id: string;
  title: string;
  category: "Core" | "Combat" | "Magic" | "Abilities" | "Reference" | "Model Profiles" | "Game play" | "Game Sequence" | "Hostiles" | "General Effect" | "Movement" | "Normal Action" | "Special Action" | "Environment";
  content: string;
  subsections?: {
    title: string;
    content: string;
  }[];
  table?: {
    headers: string[];
    rows: string[][];
  };
}

export interface State {
  name: string;
  description: string;
}

export interface Trait {
  name: string;
  description: string;
}

export interface Skill {
  name: string;
  description: string;
}

export interface ClassInfo {
  name: string;
  description: string;
  abilities: string[];
}

export interface CombatArt {
  name: string;
  category: string;
  level: number;
  description: string;
}

export interface CombatArtCategory {
  name: string;
  ruleText: string;
  flavorText: string;
  levels: CombatArt[];
}
