import React from "react";
import { LINKABLE_KEYWORDS } from "../../data/rules/keywords";
import { states, traits, skills, rules } from "../../data/rules";
import { KeywordItem } from "../../types";

const escapeRegExp = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const sortedLinkableKeywords = [...LINKABLE_KEYWORDS].sort((a, b) => b.name.length - a.name.length);
const linkableKeywordPattern = sortedLinkableKeywords.map((keyword) => `\\b${escapeRegExp(keyword.name)}\\b`).join("|");
const linkableKeywordRegex = new RegExp(`(${linkableKeywordPattern})`, "gi");

const stateLookup = new Map(states.map((state) => [state.name.toLowerCase(), state]));
const traitLookup = new Map(traits.map((trait) => [trait.name.toLowerCase(), trait]));
const skillLookup = new Map(skills.map((skill) => [skill.name.toLowerCase(), skill]));
const keywordLookup = new Map(sortedLinkableKeywords.map((keyword) => [keyword.name.toLowerCase(), keyword]));
const rulesLookup = new Map(rules.map((r) => [r.title.toLowerCase(), r]));

const keywordToRuleId = new Map([
  ["stamina", "attributes"],
  ["speed", "attributes"],
  ["armor", "attributes"],
  ["offense", "attributes"],
  ["defense", "attributes"],
  ["accuracy", "attributes"],
  ["intellect", "attributes"],
  ["agility", "attributes"],
  ["toughness", "attributes"],
  ["morale", "attributes"],
  ["hp", "attributes"],
  ["inventory", "inventory"],
  ["items", "items"],
  ["weapons", "items"],
  ["shields", "items"],
  ["accessory", "items"],
  ["consumables", "items"],
  ["recruitment cost", "recruitment-cost"],
  ["limit", "limit"],
  ["models", "models"],
  ["class", "class"],
  ["traits", "traits"],
  ["skills", "skills"],
  ["combat arts", "combat-arts"],
  ["spellcraft", "spellcraft"],
  ["special", "special"],
  ["stratagems", "stratagems"],
  ["hitbox", "size"],
  ["size", "size"],
  ["dice rolls", "dice-rolls"],
  ["attribute roll", "dice-rolls"],
  ["attack roll", "dice-rolls"],
  ["damage roll", "dice-rolls"],
  ["reroll", "dice-rolls"],
  ["modifiers", "modifiers"],
  ["distance", "distance-measurement"],
  ["measurement", "distance-measurement"],
  ["base contact", "distance-measurement"],
  ["movement", "normal-movement"],
  ["walk", "action-attack"],
  ["idle", "action-attack"],
  ["climb", "action-attack"],
  ["jump", "action-attack"],
  ["run", "action-attack"],
  ["assist", "action-assist"],
  ["attack", "action-attack"],
  ["death blow", "action-death-blow"],
  ["dodge", "action-dodge"],
  ["interact", "action-interact"],
  ["nothing", "action-nothing"],
  ["perceive", "action-perceive"],
  ["trade", "action-trade"],
  ["duel", "action-duel"],
  ["ritual", "action-ritual"],
  ["uncover", "action-uncover"],
  ["line of sight", "los"],
  ["los", "los"],
  ["awareness", "awareness"],
  ["actions", "actions"],
  ["activation points", "activation-points"],
  ["active role", "active-reactive-role"],
  ["reactive role", "active-reactive-role"],
  ["game sequence", "game-sequence-overview"],
  ["turn phases", "turn-phases"],
  ["strategic phase", "turn-phases"],
  ["upkeep phase", "turn-phases"],
  ["tactical phase", "turn-phases"],
  ["end phase", "turn-phases"],
  ["activation sequence", "activation-sequence"],
  ["activation step", "activation-sequence"],
  ["movement step", "activation-sequence"],
  ["reaction step", "activation-sequence"],
  ["action step", "activation-sequence"],
  ["resolution step", "activation-sequence"],
  ["reaction rules", "reaction-rules"],
  ["attack of opportunity", "reaction-rules"],
  ["reach", "reach"],
  ["rch", "reach"],
  ["casting aura", "casting-aura"],
  ["template", "templates-aoe"],
  ["templates", "templates-aoe"],
  ["aoe", "templates-aoe"],
  ["strike", "strikes-hits"],
  ["stk", "strikes-hits"],
  ["hit", "strikes-hits"],
  ["critical hit", "strikes-hits"],
  ["confrontation", "confrontation"],
  ["damage", "damage-wounds"],
  ["wound", "damage-wounds"],
  ["incapacitated", "damage-wounds"],
  ["incapped", "damage-wounds"],
  ["fall damage", "damage-wounds"],
  ["magic", "spells-magic"],
  ["spell", "spells-magic"],
  ["spells", "spells-magic"],
  ["mana counter", "spells-magic"],
  ["mana counters", "spells-magic"],
  ["sorcery", "spells-magic"],
  ["healing", "spells-magic"],
  ["enchantment", "spells-magic"],
  ["transmutation", "spells-magic"],
  ["conjuration", "spells-magic"],
  ["hostiles", "hostiles-intro"],
  ["ai", "hostiles-intro"],
  ["hostile turn", "hostiles-activations"],
  ["behavior", "hostiles-behaviors"],
  ["target priority", "hostiles-behaviors"],
  ["tiers", "hostiles-activations"],
  ["broken morale", "broken-morale"],
  ["friendly fire", "friendly-fire-general"],
  ["priority over the core rules", "priority-over-core"],
  ["end of the game", "end-of-game"],
  ["recovery check", "recovery-check"],
  ["characters", "characters-general"],
  ["monster factions", "monster-factions"],
]);

const getKeywordData = (keyword: (typeof LINKABLE_KEYWORDS)[number]) => {
  const normalizedName = keyword.name.toLowerCase();

  if (keyword.type === "states") return stateLookup.get(normalizedName);
  if (keyword.type === "traits") return traitLookup.get(normalizedName);
  if (keyword.type === "skills") return skillLookup.get(normalizedName);
  
  if (keyword.type === "hostiles" || keyword.type === "actions" || keyword.type === "mechanics") {
    const ruleId = keywordToRuleId.get(normalizedName);
    if (ruleId) return rules.find(r => r.id === ruleId);
    return rulesLookup.get(normalizedName);
  }

  if (keyword.type === "environments") {
    const ruleId = keywordToRuleId.get(normalizedName) || `env-${normalizedName.toLowerCase().replace(/\s+/g, '-')}`;
    return rules.find(r => r.id === ruleId) || rulesLookup.get(normalizedName);
  }

  return null;
};

export function HighlightedText({ text, query }: { text: string; query: string }) {
  const trimmedQuery = query.trim();
  if (!trimmedQuery) return <>{text}</>;
  const parts = text.split(new RegExp(`(${escapeRegExp(trimmedQuery)})`, "gi"));
  return (
    <>
      {parts.map((part, index) => (
        part.toLowerCase() === trimmedQuery.toLowerCase() ? (
          <mark key={`${part}-${index}`} className="bg-red-500/15 text-red-200 rounded px-0.5">{part}</mark>
        ) : (
          <React.Fragment key={`${part}-${index}`}>{part}</React.Fragment>
        )
      ))}
    </>
  );
}

export const RichText = ({ text, onKeywordClick, highlightQuery = "" }: { text: string; onKeywordClick: (item: KeywordItem) => void; highlightQuery?: string }) => {
  if (!text) return null;
  const parts = text.split(linkableKeywordRegex);
  const seenKeywords = new Set<string>();
  
  return (
    <>
      {parts.map((part, i) => {
        const lowerPart = part.toLowerCase();
        const keyword = keywordLookup.get(lowerPart);
        
        if (keyword && !seenKeywords.has(lowerPart)) {
          const data = getKeywordData(keyword);
          if (data) {
            seenKeywords.add(lowerPart);
            return (
              <button
                key={i}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onKeywordClick({ type: keyword.type, data } as KeywordItem);
                }}
                className="text-red-500 hover:text-red-400 font-bold underline decoration-red-900/50 underline-offset-2 transition-colors inline"
              >
                {part}
              </button>
            );
          }
        }
        return (
          <React.Fragment key={`${part}-${i}`}>
            <HighlightedText text={part} query={highlightQuery} />
          </React.Fragment>
        );
      })}
    </>
  );
};
