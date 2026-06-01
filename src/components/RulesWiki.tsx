import React, { useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import { rules, traits, skills, classes, combatArtCategories, states, RuleSection, CombatArtCategory, Trait, Skill, State, ClassInfo, CombatArt } from "../data/rules";
import { ArrowLeft, Search, BookOpen, Shield, Zap, Sparkles, Users, Sword, Activity, Info, X, Menu, Target, ExternalLink } from "lucide-react";
import { prepareFuzzySearchEntries, rankPreparedFuzzyResults, slugify } from "../utils/search";
import MetaTags from "./MetaTags";

const LINKABLE_KEYWORDS: { name: string; type: "states" | "traits" | "skills" | "mechanics" | "hostiles" | "movement" | "actions" | "environments" }[] = [
  { name: "Blinded", type: "states" },
  { name: "Engaged", type: "states" },
  { name: "Flying", type: "states" },
  { name: "Bleeding", type: "states" },
  { name: "Crippled", type: "states" },
  { name: "Weakened", type: "states" },
  { name: "Shrouded", type: "states" },
  { name: "Confused", type: "states" },
  { name: "Panicked", type: "states" },
  { name: "Poisoned", type: "states" },
  { name: "Dead", type: "states" },
  { name: "Crouched", type: "states" },
  { name: "Immobilized", type: "states" },
  { name: "Incapacitated", type: "states" },
  { name: "Surprise Attack", type: "traits" },
  { name: "Two-Handed", type: "traits" },
  { name: "Stagger", type: "traits" },
  { name: "Mindgame", type: "traits" },
  { name: "Knockdown", type: "traits" },
  { name: "Models", type: "mechanics" },
  { name: "Class", type: "mechanics" },
  { name: "Stamina", type: "mechanics" },
  { name: "Speed", type: "mechanics" },
  { name: "Armor", type: "mechanics" },
  { name: "HP", type: "mechanics" },
  { name: "Offense", type: "mechanics" },
  { name: "Defense", type: "mechanics" },
  { name: "Accuracy", type: "mechanics" },
  { name: "Intellect", type: "mechanics" },
  { name: "Agility", type: "mechanics" },
  { name: "Toughness", type: "mechanics" },
  { name: "Morale", type: "mechanics" },
  { name: "Size", type: "mechanics" },
  { name: "Hitbox", type: "mechanics" },
  { name: "Recruitment Cost", type: "mechanics" },
  { name: "Limit", type: "mechanics" },
  { name: "Traits", type: "mechanics" },
  { name: "Skills", type: "mechanics" },
  { name: "Combat Arts", type: "mechanics" },
  { name: "Spellcraft", type: "mechanics" },
  { name: "Special", type: "mechanics" },
  { name: "Stratagems", type: "mechanics" },
  { name: "Dice Rolls", type: "mechanics" },
  { name: "Modifiers", type: "mechanics" },
  { name: "Distance", type: "mechanics" },
  { name: "Movement", type: "mechanics" },
  { name: "Line of Sight", type: "mechanics" },
  { name: "Awareness", type: "mechanics" },
  { name: "Actions", type: "mechanics" },
  { name: "Activation Points", type: "mechanics" },
  { name: "Active Role", type: "mechanics" },
  { name: "Reactive Role", type: "mechanics" },
  { name: "Reach", type: "mechanics" },
  { name: "Casting Aura", type: "mechanics" },
  { name: "Templates", type: "mechanics" },
  { name: "AoE", type: "mechanics" },
  { name: "Strike", type: "mechanics" },
  { name: "Hit", type: "mechanics" },
  { name: "Critical Hit", type: "mechanics" },
  { name: "Confrontation", type: "mechanics" },
  { name: "Damage", type: "mechanics" },
  { name: "Wound", type: "mechanics" },
  { name: "Incapped", type: "mechanics" },
  { name: "Fall Damage", type: "mechanics" },
  { name: "Magic", type: "mechanics" },
  { name: "Mana Counter", type: "mechanics" },
  { name: "Hostiles", type: "hostiles" },
  { name: "AI", type: "hostiles" },
  { name: "Behavior", type: "hostiles" },
  { name: "Target Priority", type: "hostiles" },
  { name: "Tiers", type: "hostiles" },
  { name: "Inventory", type: "mechanics" },
  { name: "Items", type: "mechanics" },
  { name: "Weapons", type: "mechanics" },
  { name: "Shields", type: "mechanics" },
  { name: "Accessory", type: "mechanics" },
  { name: "Consumables", type: "mechanics" },
  { name: "Broken Morale", type: "mechanics" },
  { name: "Friendly Fire", type: "mechanics" },
  { name: "End of the Game", type: "mechanics" },
  { name: "Recovery Check", type: "mechanics" },
  { name: "Monster Factions", type: "mechanics" },
  { name: "Walk", type: "actions" },
  { name: "Climb", type: "actions" },
  { name: "Jump", type: "actions" },
  { name: "Run", type: "actions" },
  { name: "Idle", type: "actions" },
  { name: "Assist", type: "actions" },
  { name: "Attack", type: "actions" },
  { name: "Dodge", type: "actions" },
  { name: "Interact", type: "actions" },
  { name: "Trade", type: "actions" },
  { name: "Duel", type: "actions" },
  { name: "Ritual", type: "actions" },
  { name: "Perceive", type: "actions" },
  { name: "Aquatic", type: "environments" },
  { name: "Dangerous", type: "environments" },
  { name: "Dark", type: "environments" },
  { name: "Dense", type: "environments" },
  { name: "Difficult", type: "environments" },
  { name: "Forest", type: "environments" },
  { name: "Freezing", type: "environments" },
  { name: "Hazy", type: "environments" },
  { name: "Managmatic", type: "environments" },
  { name: "Mountainous", type: "environments" },
  { name: "Profane Miasma", type: "environments" },
  { name: "Sacred Ground", type: "environments" },
  { name: "Scorching", type: "environments" },
  { name: "Swamp", type: "environments" },
  { name: "Toxic", type: "environments" },
  { name: "Unscalable", type: "environments" },
];

type KeywordItem = 
  | { type: "states"; data: State }
  | { type: "traits"; data: Trait }
  | { type: "skills"; data: Skill }
  | { type: "hostiles"; data: RuleSection }
  | { type: "actions"; data: RuleSection }
  | { type: "environments"; data: RuleSection }
  | { type: "mechanics"; data: RuleSection };

type SearchCategory = "all" | "mechanics" | "states" | "traits" | "skills" | "classes" | "combatArts" | "hostiles" | "actions" | "environments";

type SelectedItem =
  | { type: "mechanics"; data: RuleSection }
  | { type: "hostiles"; data: RuleSection }
  | { type: "actions"; data: RuleSection }
  | { type: "environments"; data: RuleSection }
  | { type: "states"; data: State }
  | { type: "traits"; data: Trait }
  | { type: "skills"; data: Skill }
  | { type: "combatArts"; data: CombatArtCategory }
  | { type: "classes"; data: ClassInfo };

type SearchResultEntry = {
  id: string;
  category: Exclude<SearchCategory, "all">;
  title: string;
  preview: string;
  searchText: string;
  selectedItem: SelectedItem;
};

const SEARCH_CATEGORY_LABELS: Record<SearchCategory, string> = {
  all: "All",
  mechanics: "CORE RULES",
  hostiles: "Hostiles",
  states: "States",
  traits: "Traits",
  skills: "Skills",
  classes: "Classes",
  combatArts: "Combat Arts",
  actions: "Actions",
  environments: "Environments",
};

const escapeRegExp = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const sortedLinkableKeywords = [...LINKABLE_KEYWORDS].sort((a, b) => b.name.length - a.name.length);
const linkableKeywordPattern = sortedLinkableKeywords.map((keyword) => `\\b${escapeRegExp(keyword.name)}\\b`).join("|");
const linkableKeywordRegex = new RegExp(`(${linkableKeywordPattern})`, "gi");
const stateLookup = new Map(states.map((state) => [state.name.toLowerCase(), state]));
const traitLookup = new Map(traits.map((trait) => [trait.name.toLowerCase(), trait]));
const skillLookup = new Map(skills.map((skill) => [skill.name.toLowerCase(), skill]));
const keywordLookup = new Map(sortedLinkableKeywords.map((keyword) => [keyword.name.toLowerCase(), keyword]));

const getSelectedItemTitle = (item: SelectedItem) =>
  (item.type === "mechanics" || item.type === "hostiles" || item.type === "actions" || item.type === "environments") ? item.data.title : item.data.name;

const getSelectedItemBody = (item: SelectedItem) => {
  if (item.type === "mechanics" || item.type === "hostiles" || item.type === "actions" || item.type === "environments") {
    return item.data.content;
  }

  if (item.type === "combatArts") {
    return item.data.ruleText;
  }

  return item.data.description;
};

const rulesLookup = new Map(rules.map((r) => [r.title.toLowerCase(), r]));
// Special handling for keywords that might map to specific rule IDs
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
  ["walk", "action-attack"], // Note: Walk is part of basic attack/movement
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
  ["assist", "action-assist"],
  ["attack", "action-attack"],
  ["melee attack", "action-attack"],
  ["ranged attack", "action-attack"],
  ["death blow", "action-death-blow"],
  ["dodge", "action-dodge"],
  ["interact", "action-interact"],
  ["nothing", "action-nothing"],
  ["perceive", "action-perceive"],
  ["trade", "action-trade"],
  ["duel", "action-duel"],
  ["ritual", "action-ritual"],
  ["uncover", "action-uncover"],
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

  if (keyword.type === "states") {
    return stateLookup.get(normalizedName);
  }

  if (keyword.type === "traits") {
    return traitLookup.get(normalizedName);
  }

  if (keyword.type === "skills") {
    return skillLookup.get(normalizedName);
  }

  if (keyword.type === "hostiles") {
    const ruleId = keywordToRuleId.get(normalizedName);
    if (ruleId) {
      return rules.find(r => r.id === ruleId);
    }
    return rulesLookup.get(normalizedName);
  }

  if (keyword.type === "actions") {
    const ruleId = keywordToRuleId.get(normalizedName);
    if (ruleId) {
      return rules.find(r => r.id === ruleId);
    }
    return rulesLookup.get(normalizedName);
  }

  if (keyword.type === "mechanics") {
    const ruleId = keywordToRuleId.get(normalizedName);
    if (ruleId) {
      return rules.find(r => r.id === ruleId);
    }
    return rulesLookup.get(normalizedName);
  }

  if (keyword.type === "environments") {
    const ruleId = keywordToRuleId.get(normalizedName) || `env-${normalizedName.toLowerCase().replace(/\s+/g, '-')}`;
    return rules.find(r => r.id === ruleId) || rulesLookup.get(normalizedName);
  }

  return null;
};

function HighlightedText({ text, query }: { text: string; query: string }) {
  const trimmedQuery = query.trim();

  if (!trimmedQuery) {
    return <>{text}</>;
  }

  const parts = text.split(new RegExp(`(${escapeRegExp(trimmedQuery)})`, "gi"));

  return (
    <>
      {parts.map((part, index) => (
        part.toLowerCase() === trimmedQuery.toLowerCase() ? (
          <mark
            key={`${part}-${index}`}
            className="bg-red-500/15 text-red-200 rounded px-0.5"
          >
            {part}
          </mark>
        ) : (
          <React.Fragment key={`${part}-${index}`}>{part}</React.Fragment>
        )
      ))}
    </>
  );
}

const RichText = ({ text, onKeywordClick, highlightQuery = "" }: { text: string; onKeywordClick: (item: KeywordItem) => void; highlightQuery?: string }) => {
  if (!text) return null;

  const parts = text.split(linkableKeywordRegex);

  return (
    <>
      {parts.map((part, i) => {
        const keyword = keywordLookup.get(part.toLowerCase());
        if (keyword) {
          const data = getKeywordData(keyword);
          
          if (data) {
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

export default function RulesWiki({ onBack }: { onBack: () => void }) {
  const { category: urlCategory, id: urlId } = useParams<{ category: SearchCategory; id: string }>();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get("q") || "";
  const [searchCategory, setSearchCategory] = useState<SearchCategory>("all");
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);

  const updateSearchQuery = (query: string) => {
    if (query) {
      setSearchParams({ q: query }, { replace: true });
    } else {
      setSearchParams({}, { replace: true });
    }
  };
  
  // Tabs and selection are now driven by URL or internal fallback for smooth transitions
  const activeTab: SearchCategory = urlCategory || "mechanics";

  const handleCloseItem = React.useCallback(() => {
    navigate(`/rules/${activeTab}`);
  }, [navigate, activeTab]);

  const getSubItem = (type: string, id: string) => {
    const slug = id.toLowerCase();
    if (type === "mechanics") return rules.find(r => r.id === slug);
    if (type === "hostiles") return rules.find(r => r.id === slug);
    if (type === "actions") return rules.find(r => r.id === slug);
    if (type === "environments") return rules.find(r => r.id === slug);
    if (type === "states") return states.find(s => slugify(s.name) === slug);
    if (type === "traits") return traits.find(t => slugify(t.name) === slug);
    if (type === "skills") return skills.find(s => slugify(s.name) === slug);
    if (type === "classes") return classes.find(c => slugify(c.name) === slug);
    if (type === "combatArts") return combatArtCategories.find(c => slugify(c.name) === slug);
    return null;
  };

  const selectedItem: SelectedItem | null = useMemo(() => {
    if (!urlCategory || !urlId) return null;
    const data = getSubItem(urlCategory, urlId);
    if (!data) return null;
    return { type: urlCategory, data: data } as SelectedItem;
  }, [urlCategory, urlId]);

  const [nestedItem, setNestedItem] = useState<KeywordItem | null>(null);

  useEffect(() => {
    if (!selectedItem) {
      window.scrollTo(0, 0);
    }
  }, [activeTab, selectedItem]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") {
        return;
      }

      if (nestedItem) {
        setNestedItem(null);
        return;
      }

      if (selectedItem) {
        handleCloseItem();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nestedItem, selectedItem, handleCloseItem]);

  const handleSelectItem = (item: SelectedItem) => {
    const id = (item.type === "mechanics" || item.type === "hostiles" || item.type === "actions" || item.type === "environments") ? item.data.id : slugify(getSelectedItemTitle(item));
    navigate(`/rules/${item.type}/${id}`);
  };

  const handleTabChange = (tab: SearchCategory) => {
    if (tab === "all") return;
    navigate(`/rules/${tab}`);
  };

  const searchEntries = useMemo(
    () => prepareFuzzySearchEntries<SearchResultEntry>(
      [
        ...rules.map((section) => {
          const isAction = section.category === "Normal Action" || section.category === "Special Action";
          const isHostile = section.category === "Hostiles";
          const isEnv = section.category === "Environment";
          
          let category: "mechanics" | "hostiles" | "actions" | "environments" = "mechanics";
          if (isHostile) category = "hostiles";
          else if (isAction) category = "actions";
          else if (isEnv) category = "environments";

          return {
            id: `rules-${section.id}`,
            category,
            title: section.title,
            preview: section.content,
            searchText: [section.title, section.content, ...(section.subsections?.flatMap((sub) => [sub.title, sub.content]) ?? [])].join(" "),
            selectedItem: { type: category, data: section } as SelectedItem,
          };
        }),
        ...states.map((state) => ({
          id: `states-${state.name}`,
          category: "states" as const,
          title: state.name,
          preview: state.description,
          searchText: `${state.name} ${state.description}`,
          selectedItem: { type: "states", data: state } as SelectedItem,
        })),
        ...traits.map((trait) => ({
          id: `traits-${trait.name}`,
          category: "traits" as const,
          title: trait.name,
          preview: trait.description,
          searchText: `${trait.name} ${trait.description}`,
          selectedItem: { type: "traits", data: trait } as SelectedItem,
        })),
        ...skills.map((skill) => ({
          id: `skills-${skill.name}`,
          category: "skills" as const,
          title: skill.name,
          preview: skill.description,
          searchText: `${skill.name} ${skill.description}`,
          selectedItem: { type: "skills", data: skill } as SelectedItem,
        })),
        ...classes.map((cls) => ({
          id: `classes-${cls.name}`,
          category: "classes" as const,
          title: cls.name,
          preview: cls.description,
          searchText: `${cls.name} ${cls.description} ${cls.abilities.join(" ")}`,
          selectedItem: { type: "classes", data: cls } as SelectedItem,
        })),
        ...combatArtCategories.map((combatArtCategory) => ({
          id: `combatArts-${combatArtCategory.name}`,
          category: "combatArts" as const,
          title: combatArtCategory.name,
          preview: combatArtCategory.ruleText,
          searchText: [
            combatArtCategory.name,
            combatArtCategory.ruleText,
            combatArtCategory.flavorText,
            ...combatArtCategory.levels.flatMap((level) => [level.name, level.description]),
          ].join(" "),
          selectedItem: { type: "combatArts", data: combatArtCategory } as SelectedItem,
        })),
      ],
      (entry) => `${entry.title} ${entry.searchText}`,
    ),
    [],
  );

  const rankedSearchEntries = useMemo(
    () => rankPreparedFuzzyResults(
      searchQuery,
      searchEntries,
      (left, right) => left.title.localeCompare(right.title),
    ),
    [searchEntries, searchQuery],
  );

  const filteredSearchEntries = useMemo(
    () =>
      rankedSearchEntries.filter((entry) =>
        searchCategory === "all" ? true : entry.category === searchCategory,
      ),
    [rankedSearchEntries, searchCategory],
  );

  const autocompleteResults = useMemo(
    () => (searchQuery.trim() ? filteredSearchEntries.slice(0, 6) : []),
    [filteredSearchEntries, searchQuery],
  );

  const searchResultsByCategory = useMemo(
    () => ({
      mechanics: filteredSearchEntries.filter((entry) => entry.category === "mechanics"),
      hostiles: filteredSearchEntries.filter((entry) => entry.category === "hostiles"),
      states: filteredSearchEntries.filter((entry) => entry.category === "states"),
      traits: filteredSearchEntries.filter((entry) => entry.category === "traits"),
      skills: filteredSearchEntries.filter((entry) => entry.category === "skills"),
      classes: filteredSearchEntries.filter((entry) => entry.category === "classes"),
      combatArts: filteredSearchEntries.filter((entry) => entry.category === "combatArts"),
      actions: filteredSearchEntries.filter((entry) => entry.category === "actions"),
      environments: filteredSearchEntries.filter((entry) => entry.category === "environments"),
    }),
    [filteredSearchEntries],
  );

  const hasSearchQuery = searchQuery.trim().length > 0;
  const visibleSearchCategories =
    searchCategory === "all"
      ? (Object.keys(searchResultsByCategory) as Exclude<SearchCategory, "all">[]).filter(
          (category) => searchResultsByCategory[category].length > 0,
        )
      : [searchCategory];

  const renderSearchResultCard = (entry: SearchResultEntry) => (
    <button
      key={entry.id}
      type="button"
      className="eldfall-card eldfall-card-interactive card-p group text-left"
      onClick={() => {
        handleSelectItem(entry.selectedItem);
      }}
    >
      <div className="flex justify-between items-start mb-3">
        <span className="text-xs font-display uppercase tracking-eyebrow text-red-500/70">
          {SEARCH_CATEGORY_LABELS[entry.category]}
        </span>
        <Info className="w-4 h-4 text-stone-700 group-hover:text-red-500 transition-colors" />
      </div>
      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-red-500 transition-colors">
        <HighlightedText text={entry.title} query={searchQuery} />
      </h3>
      <p className="body-sm line-clamp-3">
        <HighlightedText text={entry.preview} query={searchQuery} />
      </p>
    </button>
  );

  return (
    <div className="min-h-screen bg-stone-950">
      <MetaTags 
        title={selectedItem ? `${getSelectedItemTitle(selectedItem)} - Rules Wiki` : "Rules Wiki"}
        description={selectedItem ? getSelectedItemBody(selectedItem).substring(0, 160) : "Searchable rules wiki for Eldfall Chronicles. Explore mechanics, states, traits, skills, and combat arts."}
      />
      <header className="page-header">
        <div className="header-content">
          <div className="flex items-center gap-4">
            <button
              onClick={onBack}
              className="btn-icon-circle"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-red-500" />
              <h1 className="h1-standard">Rules Wiki</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="relative max-w-2xl">
            <Search className="eldfall-input-icon" />
            <input
              type="text"
              placeholder="Search rules, traits, skills, or combat arts..."
              value={searchQuery}
              onChange={(e) => updateSearchQuery(e.target.value)}
              className="eldfall-input eldfall-input-with-icon pr-24"
            />
            <button
              type="button"
              aria-label="Open search filters"
              aria-expanded={isFilterMenuOpen}
              onClick={() => setIsFilterMenuOpen((current) => !current)}
              className={`btn-icon-circle absolute right-10 top-1/2 -translate-y-1/2 border-transparent bg-transparent shadow-none hover:bg-stone-800 ${
                searchCategory !== "all" ? "text-red-400" : ""
              }`}
            >
              <Menu className="w-5 h-5" />
            </button>
            {searchQuery && (
              <button
                type="button"
                aria-label="Clear rules search"
                onClick={() => updateSearchQuery("")}
                className="btn-icon-circle absolute right-2 top-1/2 -translate-y-1/2 border-transparent bg-transparent shadow-none hover:bg-stone-800"
              >
                <X className="w-5 h-5" />
              </button>
            )}

            {isFilterMenuOpen && (
              <div className="absolute right-0 top-[calc(100%+0.75rem)] z-20 w-56 rounded-xl border border-stone-800 bg-stone-900/95 p-2 shadow-2xl backdrop-blur-sm">
                <div className="px-3 py-2 text-[10px] uppercase tracking-eyebrow text-stone-500">
                  Search Scope
                </div>
                <div className="space-y-1">
                  {(Object.keys(SEARCH_CATEGORY_LABELS) as SearchCategory[]).map((category) => (
                    <button
                      key={category}
                      type="button"
                      onClick={() => {
                        setSearchCategory(category);
                        setIsFilterMenuOpen(false);
                      }}
                      className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-xs font-bold uppercase tracking-eyebrow transition-colors ${
                        searchCategory === category
                          ? "bg-red-900/20 text-red-400"
                          : "text-stone-400 hover:bg-stone-800 hover:text-stone-200"
                      }`}
                    >
                      <span>{SEARCH_CATEGORY_LABELS[category]}</span>
                      {searchCategory === category && <span className="text-[10px]">Active</span>}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {autocompleteResults.length > 0 && (
            <div className="mt-3 max-w-2xl bg-stone-900/95 border border-stone-800 rounded-xl overflow-hidden shadow-2xl">
              <div className="px-4 py-2 border-b border-stone-800 text-[10px] uppercase tracking-eyebrow text-stone-500">
                Suggestions
              </div>
              <div className="divide-y divide-stone-800">
                {autocompleteResults.map((entry) => (
                  <button
                    key={`suggestion-${entry.id}`}
                    type="button"
                    onClick={() => {
                      updateSearchQuery(entry.title);
                      setSearchCategory(entry.category);
                      handleSelectItem(entry.selectedItem);
                    }}
                    className="w-full px-4 py-3 text-left hover:bg-stone-800 transition-colors"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-sm font-bold text-white">
                        <HighlightedText text={entry.title} query={searchQuery} />
                      </span>
                      <span className="text-[10px] uppercase tracking-eyebrow text-red-400">
                        {SEARCH_CATEGORY_LABELS[entry.category]}
                      </span>
                    </div>
                    <p className="body-xs mt-1 line-clamp-2">
                      <HighlightedText text={entry.preview} query={searchQuery} />
                    </p>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Tabs */}
        <div id="rules-wiki-tabs" className="flex space-x-2 md:space-x-4 mb-8 border-b border-stone-900 overflow-x-auto custom-scrollbar">
          <TabButton 
            active={activeTab === "mechanics"} 
            onClick={() => handleTabChange("mechanics")}
            icon={<BookOpen className="w-5 h-5" />}
            label="CORE RULES"
          />
          <TabButton 
            active={activeTab === "states"} 
            onClick={() => handleTabChange("states")}
            icon={<Activity className="w-5 h-5" />}
            label="States"
          />
          <TabButton 
            active={activeTab === "traits"} 
            onClick={() => handleTabChange("traits")}
            icon={<Shield className="w-5 h-5" />}
            label="Traits"
          />
          <TabButton 
            active={activeTab === "skills"} 
            onClick={() => handleTabChange("skills")}
            icon={<Zap className="w-5 h-5" />}
            label="Skills"
          />
          <TabButton 
            active={activeTab === "combatArts"} 
            onClick={() => handleTabChange("combatArts")}
            icon={<Sword className="w-5 h-5" />}
            label="Combat Arts"
          />
          <TabButton 
            active={activeTab === "classes"} 
            onClick={() => handleTabChange("classes")}
            icon={<Users className="w-5 h-5" />}
            label="Classes"
          />
          <TabButton 
            active={activeTab === "actions"} 
            onClick={() => handleTabChange("actions")}
            icon={<Activity className="w-5 h-5" />}
            label="Actions"
          />
          <TabButton 
            active={activeTab === "hostiles"} 
            onClick={() => handleTabChange("hostiles")}
            icon={<Target className="w-5 h-5" />}
            label="Hostiles"
          />
          <TabButton 
            active={activeTab === "environments"} 
            onClick={() => handleTabChange("environments")}
            icon={<Sparkles className="w-5 h-5" />}
            label="Environments"
          />
        </div>

        <div>
          {hasSearchQuery ? (
            visibleSearchCategories.length > 0 ? (
              <div className="space-y-8">
                {visibleSearchCategories.map((category) => (
                  <section key={category} className="space-y-4">
                    {searchCategory === "all" && (
                      <div className="flex items-center justify-between border-b border-stone-900 pb-3">
                        <h2 className="text-xl font-bold text-white">{SEARCH_CATEGORY_LABELS[category]}</h2>
                        <span className="text-xs uppercase tracking-eyebrow text-stone-500">
                          {searchResultsByCategory[category].length} match{searchResultsByCategory[category].length === 1 ? "" : "es"}
                        </span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {searchResultsByCategory[category].map(renderSearchResultCard)}
                    </div>
                  </section>
                ))}
              </div>
            ) : (
            <div className="eldfall-card card-p-lg text-center">
                <h2 className="text-xl font-bold text-white mb-2">No Results Found</h2>
                <p className="body-sm mb-6">
                  Try a different search term, use a broader category, or pick one of the autocomplete suggestions above.
                </p>
                <div className="flex flex-col items-center gap-4">
                  <div className="h-px w-24 bg-stone-800" />
                  <p className="text-xs uppercase tracking-eyebrow text-stone-500">Still looking for something?</p>
                  <a 
                    href={`https://www.google.com/search?q=site%3Aeldfallchronicles.com+${encodeURIComponent(searchQuery)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Search Google for "{searchQuery}"
                  </a>
                </div>
              </div>
            )
          ) : (
          <AnimatePresence mode="wait">
            {activeTab === "mechanics" && (
              <motion.div
                key="mechanics"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
              >
                {rules.filter(r => r.category !== "Hostiles" && r.category !== "Normal Action" && r.category !== "Special Action" && r.category !== "Environment").map((section) => (
                  <button
                    key={section.id}
                    type="button"
                    className="eldfall-card eldfall-card-interactive card-p group text-left"
                    onClick={() => handleSelectItem({ type: "mechanics", data: section })}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-xs font-display uppercase tracking-eyebrow text-red-500/70">{section.category}</span>
                      <Sparkles className="w-4 h-4 text-stone-700 group-hover:text-red-500 transition-colors" />
                    </div>
                    <h2 className="text-lg font-bold text-white mb-2 group-hover:text-red-500 transition-colors">{section.title}</h2>
                    <p className="body-sm line-clamp-3 text-stone-400">{section.content}</p>
                  </button>
                ))}
              </motion.div>
            )}

            {activeTab === "environments" && (
              <motion.div
                key="environments"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
              >
                {rules.filter(r => r.category === "Environment").map((section) => (
                  <button
                    key={section.id}
                    type="button"
                    className="eldfall-card eldfall-card-interactive card-p group text-left"
                    onClick={() => handleSelectItem({ type: "environments", data: section } as SelectedItem)}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-xs font-display uppercase tracking-eyebrow text-red-500/70">{section.category}</span>
                      <Sparkles className="w-4 h-4 text-stone-700 group-hover:text-red-500 transition-colors" />
                    </div>
                    <h2 className="text-lg font-bold text-white mb-2 group-hover:text-red-500 transition-colors">{section.title}</h2>
                    <p className="body-sm line-clamp-3 text-stone-400">{section.content}</p>
                  </button>
                ))}
              </motion.div>
            )}

            {activeTab === "actions" && (
              <motion.div
                key="actions"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
              >
                {rules
                  .filter(r => r.category === "Normal Action" || r.category === "Special Action")
                  .map((section) => (
                    <button
                      key={section.id}
                      type="button"
                      className="eldfall-card eldfall-card-interactive card-p group text-left"
                      onClick={() => handleSelectItem({ type: "actions", data: section } as SelectedItem)}
                    >
                      <div className="flex justify-between items-start mb-3">
                        <span className="text-[10px] font-display uppercase tracking-eyebrow text-red-500/70">{section.category}</span>
                        <Activity className="w-4 h-4 text-stone-700 group-hover:text-red-500 transition-colors" />
                      </div>
                      <h2 className="text-lg font-bold text-white mb-2 group-hover:text-red-500 transition-colors">{section.title}</h2>
                      <p className="body-sm line-clamp-3 text-stone-400">{section.content}</p>
                    </button>
                  ))}
              </motion.div>
            )}

            {activeTab === "hostiles" && (
              <motion.div
                key="hostiles"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
              >
                {rules.filter(r => r.category === "Hostiles").map((section) => (
                  <button
                    key={section.id}
                    type="button"
                    className="eldfall-card eldfall-card-interactive card-p group text-left"
                    onClick={() => handleSelectItem({ type: "hostiles", data: section } as SelectedItem)}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-xs font-display uppercase tracking-eyebrow text-red-500/70">{section.category}</span>
                      <Target className="w-4 h-4 text-stone-700 group-hover:text-red-500 transition-colors" />
                    </div>
                    <h2 className="text-lg font-bold text-white mb-2 group-hover:text-red-500 transition-colors">{section.title}</h2>
                    <p className="body-sm line-clamp-3 text-stone-400">{section.content}</p>
                  </button>
                ))}
              </motion.div>
            )}

            {activeTab === "states" && (
              <motion.div
                key="states"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4"
              >
                {states.map((state) => (
                  <button
                    key={state.name}
                    type="button"
                    className="eldfall-card eldfall-card-interactive card-p group text-left"
                    onClick={() => handleSelectItem({ type: "states", data: state })}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-base font-bold text-white group-hover:text-red-500 transition-colors">{state.name}</h3>
                      <Info className="w-4 h-4 text-stone-700 group-hover:text-red-500 transition-colors" />
                    </div>
                    <p className="body-xs line-clamp-3">{state.description}</p>
                  </button>
                ))}
              </motion.div>
            )}

            {activeTab === "traits" && (
              <motion.div
                key="traits"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4"
              >
                {traits.map((trait) => (
                  <button
                    key={trait.name}
                    type="button"
                    className="eldfall-card eldfall-card-interactive card-p group text-left"
                    onClick={() => handleSelectItem({ type: "traits", data: trait })}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-base font-bold text-white group-hover:text-red-500 transition-colors">{trait.name}</h3>
                      <Info className="w-4 h-4 text-stone-700 group-hover:text-red-500 transition-colors" />
                    </div>
                    <p className="body-xs line-clamp-3">{trait.description}</p>
                  </button>
                ))}
              </motion.div>
            )}

            {activeTab === "skills" && (
              <motion.div
                key="skills"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4"
              >
                {skills.map((skill) => (
                  <button
                    key={skill.name}
                    type="button"
                    className="eldfall-card eldfall-card-interactive card-p group text-left"
                    onClick={() => handleSelectItem({ type: "skills", data: skill })}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-base font-bold text-white group-hover:text-red-500 transition-colors">{skill.name}</h3>
                      <Info className="w-4 h-4 text-stone-700 group-hover:text-red-500 transition-colors" />
                    </div>
                    <p className="body-xs line-clamp-3">{skill.description}</p>
                  </button>
                ))}
              </motion.div>
            )}

            {activeTab === "combatArts" && (
              <motion.div
                key="combatArts"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
              >
                {combatArtCategories.map((cac) => (
                  <button
                    key={cac.name}
                    type="button"
                    className="eldfall-card eldfall-card-interactive card-p group text-left"
                    onClick={() => handleSelectItem({ type: "combatArts", data: cac })}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-xs font-display uppercase tracking-eyebrow text-red-500/70">Combat Art</span>
                      <Sword className="w-4 h-4 text-stone-700 group-hover:text-red-500 transition-colors" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-red-500 transition-colors">{cac.name}</h3>
                    <div className="space-y-2">
                      <p className="text-stone-300 body-sm line-clamp-2">{cac.ruleText}</p>
                      <p className="body-xs italic line-clamp-2">{cac.flavorText}</p>
                    </div>
                    <div className="mt-4 flex items-center text-xs text-stone-500 uppercase tracking-eyebrow">
                      <span className="text-red-500 mr-2">{cac.levels.length}</span> Levels Available
                    </div>
                  </button>
                ))}
              </motion.div>
            )}

            {activeTab === "classes" && (
              <motion.div
                key="classes"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
              >
                {classes.map((cls) => (
                  <button
                    key={cls.name}
                    type="button"
                    className="eldfall-card eldfall-card-interactive card-p group text-left"
                    onClick={() => handleSelectItem({ type: "classes", data: cls })}
                  >
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-red-500 transition-colors">{cls.name}</h3>
                    <p className="body-xs mb-4 italic line-clamp-2">{cls.description}</p>
                    <div className="space-y-2">
                      {cls.abilities.slice(0, 2).map((ability, i) => (
                        <div key={i} className="flex items-start text-xs">
                          <span className="text-red-500 mr-2 mt-0.5">-</span>
                          <span className="text-stone-300 line-clamp-1">{ability}</span>
                        </div>
                      ))}
                      {cls.abilities.length > 2 && (
                        <p className="text-stone-500 text-[10px] mt-2">+ {cls.abilities.length - 2} more abilities...</p>
                      )}
                    </div>
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
          )}
        </div>

        {/* Modal for Details */}
        <AnimatePresence>
          {selectedItem && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={handleCloseItem}
                className="absolute inset-0 bg-stone-950/80 backdrop-blur-sm"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                role="dialog"
                aria-modal="true"
                aria-labelledby="rules-detail-title"
                className="relative surface-overlay rounded-xl max-w-3xl w-full max-h-[85vh] overflow-y-auto"
              >
                <div className="card-p-lg border-b border-stone-800 flex justify-between items-start shrink-0">
                  <div>
                    <span className="text-[10px] font-display uppercase tracking-eyebrow text-red-500 mb-1 block">
                      {(selectedItem.type === "mechanics" || selectedItem.type === "hostiles" || selectedItem.type === "actions") ? selectedItem.data.category : selectedItem.type.replace(/([A-Z])/g, ' $1').trim()}
                    </span>
                    <h2 id="rules-detail-title" className="text-2xl font-bold text-white leading-tight">{getSelectedItemTitle(selectedItem)}</h2>
                  </div>
                  <button 
                    type="button"
                    aria-label="Close rules detail"
                    onClick={handleCloseItem}
                    className="btn-icon-circle border-transparent bg-transparent shadow-none hover:bg-stone-800"
                  >
                    <ArrowLeft className="w-5 h-5 rotate-90" />
                  </button>
                </div>

                <div className="card-p-lg stack-standard">
                  <div className="text-stone-300 body-sm whitespace-pre-wrap font-sans">
                    <RichText 
                      text={getSelectedItemBody(selectedItem)} 
                      onKeywordClick={setNestedItem}
                      highlightQuery={searchQuery}
                    />
                  </div>
                  
                  {(selectedItem.type === "mechanics" || selectedItem.type === "hostiles" || selectedItem.type === "actions" || selectedItem.type === "environments") && selectedItem.data.subsections && (
                    <div className="space-y-4">
                      {selectedItem.data.subsections.map((sub: { title: string; content: string }, i: number) => (
                        <div key={i} className="border-l-2 border-red-900/30 pl-4">
                          <h4 className="text-white font-bold mb-1 uppercase text-xs tracking-eyebrow">{sub.title}</h4>
                          <p className="body-xs">{sub.content}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {selectedItem.type === "classes" && selectedItem.data.abilities && (
                    <div className="space-y-3">
                      <h4 className="text-white font-bold uppercase text-xs tracking-eyebrow border-b border-stone-800 pb-2">Class Abilities</h4>
                      <div className="space-y-2">
                        {selectedItem.data.abilities.map((ability: string, i: number) => (
                          <div key={i} className="flex items-start text-xs">
                            <span className="text-red-500 mr-2 mt-0.5">-</span>
                            <span className="text-stone-300">{ability}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedItem.type === "combatArts" && (
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <p className="text-stone-200 text-sm leading-relaxed">{selectedItem.data.ruleText}</p>
                        <p className="text-stone-400 text-xs leading-relaxed italic">{selectedItem.data.flavorText}</p>
                      </div>
                      <div className="space-y-3">
                        <h4 className="text-white font-bold uppercase text-xs tracking-eyebrow border-b border-stone-800 pb-2">Levels</h4>
                        <div className="space-y-3">
                          {selectedItem.data.levels.map((level: CombatArt, i: number) => (
                            <div key={i} className="bg-surface-1/30 border border-stone-800/50 rounded-xl p-3">
                              <div className="flex items-center justify-between mb-2">
                                <h5 className="text-red-500 text-sm font-bold">{level.name}</h5>
                                <span className="eldfall-chip">
                                  Level {level.level}
                                </span>
                              </div>
                              <p className="text-stone-400 text-xs leading-relaxed">{level.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Nested Modal for Keywords */}
        <AnimatePresence>
          {nestedItem && (
            <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setNestedItem(null)}
                className="absolute inset-0 bg-stone-950/40 backdrop-blur-[2px]"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 10 }}
                role="dialog"
                aria-modal="true"
                aria-labelledby="rules-reference-title"
                className="relative surface-overlay border-stone-700 rounded-xl max-w-lg w-full"
              >
                <div className="p-4 border-b border-stone-800 flex justify-between items-center bg-surface-1/50">
                  <div className="flex items-center space-x-2">
                    <Info className="w-4 h-4 text-red-500" />
                    <h3 id="rules-reference-title" className="text-sm font-bold text-white uppercase tracking-eyebrow">
                      {(nestedItem.type === "mechanics" || nestedItem.type === "hostiles" || nestedItem.type === "actions" || nestedItem.type === "environments") ? nestedItem.data.title : nestedItem.data.name}
                    </h3>
                  </div>
                  <button
                    type="button"
                    aria-label="Close reference"
                    onClick={() => setNestedItem(null)}
                    className="btn-icon-circle border-transparent bg-transparent shadow-none hover:bg-stone-800"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <div className="card-p stack-compact">
                  <p className="text-stone-300 text-xs leading-relaxed whitespace-pre-wrap font-sans">
                    {(nestedItem.type === "mechanics" || nestedItem.type === "hostiles" || nestedItem.type === "actions" || nestedItem.type === "environments") ? nestedItem.data.content : (nestedItem.data as State | Trait | Skill).description}
                  </p>
                  {(nestedItem.type === "mechanics" || nestedItem.type === "hostiles" || nestedItem.type === "actions" || nestedItem.type === "environments") && nestedItem.data.subsections && (
                    <div className="mt-4 space-y-3">
                      {nestedItem.data.subsections.slice(0, 3).map((sub: { title: string; content: string }, i: number) => (
                        <div key={i} className="border-l border-red-900/30 pl-3">
                          <h4 className="text-white font-bold text-[10px] uppercase tracking-eyebrow">{sub.title}</h4>
                          <p className="text-stone-400 text-[10px]">{sub.content}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className="p-3 bg-surface-1/50 border-t border-stone-800 text-center">
                   <button 
                     type="button"
                     onClick={() => setNestedItem(null)}
                     className="text-[10px] text-stone-500 hover:text-stone-300 uppercase tracking-eyebrow transition-colors"
                   >
                     Close Reference
                   </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

function TabButton({ active, onClick, icon, label }: { active: boolean; onClick: () => void; icon: React.ReactNode; label: string }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center space-x-2 px-4 py-3 text-xs md:text-sm font-display uppercase tracking-eyebrow transition-all relative shrink-0 whitespace-nowrap ${
        active ? "text-red-500" : "text-stone-500 hover:text-stone-300"
      }`}
    >
      <div className="flex items-center justify-center min-w-[1.25rem] h-5">
        {icon}
      </div>
      <span>{label}</span>
      {active && (
        <motion.div 
          layoutId="activeTab"
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-500"
        />
      )}
    </button>
  );
}
