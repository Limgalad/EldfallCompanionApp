import { SelectedItem, KeywordItem } from "../types";
import { RuleSection, State, Trait, Skill, CombatArtCategory, ClassInfo } from "../data/rules/types";

export const isRuleSection = (item: SelectedItem | KeywordItem): item is { type: "mechanics" | "hostiles" | "actions" | "environments"; data: RuleSection } =>
  ["mechanics", "hostiles", "actions", "environments"].includes(item.type);

export const isState = (item: SelectedItem | KeywordItem): item is { type: "states"; data: State } =>
  item.type === "states";

export const isTrait = (item: SelectedItem | KeywordItem): item is { type: "traits"; data: Trait } =>
  item.type === "traits";

export const isSkill = (item: SelectedItem | KeywordItem): item is { type: "skills"; data: Skill } =>
  item.type === "skills";

export const isCombatArtCategory = (item: SelectedItem): item is { type: "combatArts"; data: CombatArtCategory } =>
  item.type === "combatArts";

export const isClass = (item: SelectedItem): item is { type: "classes"; data: ClassInfo } =>
  item.type === "classes";

export const getSelectedItemTitle = (item: SelectedItem | KeywordItem) => {
  if (isRuleSection(item)) return item.data.title;
  return item.data.name;
};

export const getSelectedItemBody = (item: SelectedItem | KeywordItem) => {
  if (isRuleSection(item)) return item.data.content;
  if ("ruleText" in item.data) return item.data.ruleText;
  if ("description" in item.data) return item.data.description;
  return "";
};
