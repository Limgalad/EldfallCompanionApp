import React from "react";
import { LINKABLE_KEYWORDS, KEYWORD_TO_RULE_ID } from "../../data/rules/keywords";
import { states, traits, skills, rules } from "../../data/rules";
import { KeywordItem } from "../../types";
import { buildRuleSectionKeywordItem } from "../../utils/rulesGuards";

const escapeRegExp = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const sortedLinkableKeywords = [...LINKABLE_KEYWORDS].sort((a, b) => b.name.length - a.name.length);
const linkableKeywordPattern = sortedLinkableKeywords.map((keyword) => `\\b${escapeRegExp(keyword.name)}\\b`).join("|");
const linkableKeywordRegex = new RegExp(`(${linkableKeywordPattern})`, "gi");

const stateLookup = new Map(states.map((state) => [state.name.toLowerCase(), state]));
const traitLookup = new Map(traits.map((trait) => [trait.name.toLowerCase(), trait]));
const skillLookup = new Map(skills.map((skill) => [skill.name.toLowerCase(), skill]));
const keywordLookup = new Map(sortedLinkableKeywords.map((keyword) => [keyword.name.toLowerCase(), keyword]));
const rulesLookup = new Map(rules.map((r) => [r.title.toLowerCase(), r]));

// Derived from the single source of truth in `src/data/rules/keywords.ts`
// rather than a hand-synced copy — see that file for the full list.
const keywordToRuleId = new Map(KEYWORD_TO_RULE_ID);

const getKeywordItem = (keyword: (typeof LINKABLE_KEYWORDS)[number]): KeywordItem | null => {
  const normalizedName = keyword.name.toLowerCase();

  if (keyword.type === "states") {
    const data = stateLookup.get(normalizedName);
    return data ? { type: "states", data } : null;
  }
  if (keyword.type === "traits") {
    const data = traitLookup.get(normalizedName);
    return data ? { type: "traits", data } : null;
  }
  if (keyword.type === "skills") {
    const data = skillLookup.get(normalizedName);
    return data ? { type: "skills", data } : null;
  }

  if (keyword.type === "hostiles" || keyword.type === "actions" || keyword.type === "mechanics") {
    const ruleId = keywordToRuleId.get(normalizedName);
    const data = ruleId ? rules.find(r => r.id === ruleId) : rulesLookup.get(normalizedName);
    return data ? buildRuleSectionKeywordItem(keyword.type, data) : null;
  }

  if (keyword.type === "environments") {
    const ruleId = keywordToRuleId.get(normalizedName) || `env-${normalizedName.toLowerCase().replace(/\s+/g, "-")}`;
    const data = rules.find(r => r.id === ruleId) || rulesLookup.get(normalizedName);
    return data ? buildRuleSectionKeywordItem("environments", data) : null;
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
          const keywordItem = getKeywordItem(keyword);
          if (keywordItem) {
            seenKeywords.add(lowerPart);
            return (
              <button
                key={i}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onKeywordClick(keywordItem);
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
