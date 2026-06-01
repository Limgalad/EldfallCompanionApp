import { RuleSection, State, Trait, Skill, CombatArtCategory, ClassInfo } from "./data/rules/types";

export type SearchCategory = "all" | "mechanics" | "states" | "traits" | "skills" | "classes" | "combatArts" | "hostiles" | "actions" | "environments";

export type SelectedItem =
  | { type: "mechanics"; data: RuleSection }
  | { type: "hostiles"; data: RuleSection }
  | { type: "actions"; data: RuleSection }
  | { type: "environments"; data: RuleSection }
  | { type: "states"; data: State }
  | { type: "traits"; data: Trait }
  | { type: "skills"; data: Skill }
  | { type: "combatArts"; data: CombatArtCategory }
  | { type: "classes"; data: ClassInfo };

export type KeywordItem = 
  | { type: "states"; data: State }
  | { type: "traits"; data: Trait }
  | { type: "skills"; data: Skill }
  | { type: "hostiles"; data: RuleSection }
  | { type: "actions"; data: RuleSection }
  | { type: "environments"; data: RuleSection }
  | { type: "mechanics"; data: RuleSection };
