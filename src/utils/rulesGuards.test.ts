import { describe, expect, it } from "vitest";
import { KeywordItem, SelectedItem } from "../types";
import {
  ClassInfo,
  CombatArtCategory,
  RuleSection,
  Skill,
  State,
  Trait,
} from "../data/rules/types";
import {
  getSelectedItemBody,
  getSelectedItemTitle,
  isClass,
  isCombatArtCategory,
  isRuleSection,
  isSkill,
  isState,
  isTrait,
} from "./rulesGuards";

const ruleSection: RuleSection = {
  id: "movement",
  title: "Movement",
  category: "Movement",
  content: "How models move.",
};
const state: State = { name: "Confused", description: "Halves several stats." };
const trait: Trait = { name: "Weakening", description: "Reduces a stat." };
const skill: Skill = { name: "First Aid", description: "Heals a model." };
const classInfo: ClassInfo = { name: "Mage", description: "A caster.", abilities: ["Cast"] };
const combatArt: CombatArtCategory = {
  name: "Blademaster",
  ruleText: "Sword techniques.",
  flavorText: "The dance of steel.",
  levels: [],
};

const mechanicsItem: SelectedItem = { type: "mechanics", data: ruleSection };
const hostilesItem: SelectedItem = { type: "hostiles", data: ruleSection };
const actionsItem: SelectedItem = { type: "actions", data: ruleSection };
const environmentsItem: SelectedItem = { type: "environments", data: ruleSection };
const stateItem: SelectedItem = { type: "states", data: state };
const traitItem: SelectedItem = { type: "traits", data: trait };
const skillItem: SelectedItem = { type: "skills", data: skill };
const classItem: SelectedItem = { type: "classes", data: classInfo };
const combatArtItem: SelectedItem = { type: "combatArts", data: combatArt };

describe("isRuleSection", () => {
  it("is true for every RuleSection-backed type", () => {
    expect(isRuleSection(mechanicsItem)).toBe(true);
    expect(isRuleSection(hostilesItem)).toBe(true);
    expect(isRuleSection(actionsItem)).toBe(true);
    expect(isRuleSection(environmentsItem)).toBe(true);
  });

  it("is false for non-section types", () => {
    expect(isRuleSection(stateItem)).toBe(false);
    expect(isRuleSection(traitItem)).toBe(false);
    expect(isRuleSection(skillItem)).toBe(false);
    expect(isRuleSection(combatArtItem)).toBe(false);
    expect(isRuleSection(classItem)).toBe(false);
  });
});

describe("simple type guards", () => {
  it("isState only matches states", () => {
    expect(isState(stateItem)).toBe(true);
    expect(isState(traitItem)).toBe(false);
  });

  it("isTrait only matches traits", () => {
    expect(isTrait(traitItem)).toBe(true);
    expect(isTrait(stateItem)).toBe(false);
  });

  it("isSkill only matches skills", () => {
    expect(isSkill(skillItem)).toBe(true);
    expect(isSkill(stateItem)).toBe(false);
  });

  it("isCombatArtCategory only matches combat arts", () => {
    expect(isCombatArtCategory(combatArtItem)).toBe(true);
    expect(isCombatArtCategory(classItem)).toBe(false);
  });

  it("isClass only matches classes", () => {
    expect(isClass(classItem)).toBe(true);
    expect(isClass(combatArtItem)).toBe(false);
  });
});

describe("getSelectedItemTitle", () => {
  it("uses the section title for RuleSections", () => {
    expect(getSelectedItemTitle(mechanicsItem)).toBe("Movement");
  });

  it("uses the name for everything else", () => {
    expect(getSelectedItemTitle(stateItem)).toBe("Confused");
    expect(getSelectedItemTitle(skillItem)).toBe("First Aid");
    expect(getSelectedItemTitle(combatArtItem)).toBe("Blademaster");
  });
});

describe("getSelectedItemBody", () => {
  it("uses content for RuleSections", () => {
    expect(getSelectedItemBody(mechanicsItem)).toBe("How models move.");
  });

  it("uses ruleText when present (combat arts)", () => {
    expect(getSelectedItemBody(combatArtItem)).toBe("Sword techniques.");
  });

  it("falls back to description for states/traits/skills", () => {
    expect(getSelectedItemBody(stateItem)).toBe("Halves several stats.");
    expect(getSelectedItemBody(traitItem)).toBe("Reduces a stat.");
  });

  it("returns an empty string when neither ruleText nor description exist", () => {
    const bare = { type: "classes", data: { name: "X" } } as unknown as SelectedItem;
    expect(getSelectedItemBody(bare)).toBe("");
  });
});

describe("KeywordItem compatibility", () => {
  it("guards accept KeywordItem inputs", () => {
    const keywordState: KeywordItem = { type: "states", data: state };
    expect(isState(keywordState)).toBe(true);
    expect(getSelectedItemTitle(keywordState)).toBe("Confused");
  });
});
