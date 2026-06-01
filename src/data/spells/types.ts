export type SpellElement = "Elder" | "Earth" | "Water" | "Fire" | "Air" | "Divine" | "Profane" | "Any";
export type SpellLevel = "I" | "II" | "III" | "IV" | "V" | "—";

export interface Spell {
  element: SpellElement;
  level: SpellLevel;
  name: string;
  effect: string;
  pw: string;
  type: string;
  rch: string;
  stk: string;
}

export interface SpellSchool {
  name: string;
  spells: Spell[];
}
