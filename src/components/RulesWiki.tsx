import React, { useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { rules, traits, skills, classes, combatArtCategories, states, RuleSection, CombatArtCategory, Trait, Skill, State, ClassInfo, CombatArt } from "../data/rules";
import { ArrowLeft, Search, BookOpen, Shield, Zap, Sparkles, Users, Sword, Activity, Info, X, Menu } from "lucide-react";
import { rankFuzzyResults } from "../utils/search";

const LINKABLE_KEYWORDS: { name: string; type: "states" | "traits" | "skills" }[] = [
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
];

type KeywordItem = 
  | { type: "states"; data: State }
  | { type: "traits"; data: Trait }
  | { type: "skills"; data: Skill };

type SearchCategory = "all" | "mechanics" | "states" | "traits" | "skills" | "classes" | "combatArts";

type SelectedItem =
  | { type: "mechanics"; data: RuleSection }
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
  mechanics: "Mechanics",
  states: "States",
  traits: "Traits",
  skills: "Skills",
  classes: "Classes",
  combatArts: "Combat Arts",
};

const escapeRegExp = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

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

  const sortedKeywords = [...LINKABLE_KEYWORDS].sort((a, b) => b.name.length - a.name.length);
  const pattern = sortedKeywords.map(k => `\\b${k.name}\\b`).join('|');
  
  if (!pattern) return <>{text}</>;

  const regex = new RegExp(`(${pattern})`, 'gi');
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, i) => {
        const keyword = sortedKeywords.find(k => k.name.toLowerCase() === part.toLowerCase());
        if (keyword) {
          let data;
          if (keyword.type === 'states') data = states.find(s => s.name === keyword.name);
          if (keyword.type === 'traits') data = traits.find(t => t.name === keyword.name);
          
          if (data) {
            return (
              <button
                key={i}
                onClick={(e) => {
                  e.stopPropagation();
                  onKeywordClick({ type: keyword.type, data });
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
  const [searchQuery, setSearchQuery] = useState("");
  const [searchCategory, setSearchCategory] = useState<SearchCategory>("all");
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"mechanics" | "states" | "traits" | "skills" | "classes" | "combatArts">("mechanics");
  const [selectedItem, setSelectedItem] = useState<SelectedItem | null>(null);

  const [nestedItem, setNestedItem] = useState<
    | { type: "states"; data: State }
    | { type: "traits"; data: Trait }
    | { type: "skills"; data: Skill }
    | null
  >(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  const searchEntries = useMemo<SearchResultEntry[]>(
    () => [
      ...rules.map((section) => ({
        id: `mechanics-${section.id}`,
        category: "mechanics" as const,
        title: section.title,
        preview: section.content,
        searchText: [section.title, section.content, ...(section.subsections?.flatMap((sub) => [sub.title, sub.content]) ?? [])].join(" "),
        selectedItem: { type: "mechanics", data: section } as SelectedItem,
      })),
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
    [],
  );

  const rankedSearchEntries = useMemo(
    () => rankFuzzyResults(
      searchQuery,
      searchEntries,
      (entry) => `${entry.title} ${entry.searchText}`,
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
      states: filteredSearchEntries.filter((entry) => entry.category === "states"),
      traits: filteredSearchEntries.filter((entry) => entry.category === "traits"),
      skills: filteredSearchEntries.filter((entry) => entry.category === "skills"),
      classes: filteredSearchEntries.filter((entry) => entry.category === "classes"),
      combatArts: filteredSearchEntries.filter((entry) => entry.category === "combatArts"),
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
        setActiveTab(entry.category);
        setSelectedItem(entry.selectedItem);
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
              onChange={(e) => setSearchQuery(e.target.value)}
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
                onClick={() => setSearchQuery("")}
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
                      setSearchQuery(entry.title);
                      setSearchCategory(entry.category);
                      setActiveTab(entry.category);
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
        <div className="flex space-x-2 md:space-x-4 mb-8 border-b border-stone-900 overflow-x-auto no-scrollbar">
          <TabButton 
            active={activeTab === "mechanics"} 
            onClick={() => setActiveTab("mechanics")}
            icon={<BookOpen className="w-4 h-4" />}
            label="Mechanics"
          />
          <TabButton 
            active={activeTab === "states"} 
            onClick={() => setActiveTab("states")}
            icon={<Activity className="w-4 h-4" />}
            label="States"
          />
          <TabButton 
            active={activeTab === "traits"} 
            onClick={() => setActiveTab("traits")}
            icon={<Shield className="w-4 h-4" />}
            label="Traits"
          />
          <TabButton 
            active={activeTab === "skills"} 
            onClick={() => setActiveTab("skills")}
            icon={<Zap className="w-4 h-4" />}
            label="Skills"
          />
          <TabButton 
            active={activeTab === "combatArts"} 
            onClick={() => setActiveTab("combatArts")}
            icon={<Sword className="w-4 h-4" />}
            label="Combat Arts"
          />
          <TabButton 
            active={activeTab === "classes"} 
            onClick={() => setActiveTab("classes")}
            icon={<Users className="w-4 h-4" />}
            label="Classes"
          />
        </div>

        <main>
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
                <p className="body-sm">
                  Try a different search term, use a broader category, or pick one of the autocomplete suggestions above.
                </p>
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
                {rules.map((section) => (
                  <div 
                    key={section.id}
                    className="eldfall-card eldfall-card-interactive card-p group"
                    onClick={() => setSelectedItem({ type: "mechanics", data: section })}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-xs font-display uppercase tracking-eyebrow text-red-500/70">{section.category}</span>
                      <Sparkles className="w-4 h-4 text-stone-700 group-hover:text-red-500 transition-colors" />
                    </div>
                    <h2 className="text-lg font-bold text-white mb-2 group-hover:text-red-500 transition-colors">{section.title}</h2>
                    <p className="body-sm line-clamp-3">{section.content}</p>
                  </div>
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
                  <div 
                    key={state.name} 
                    className="eldfall-card eldfall-card-interactive card-p group"
                    onClick={() => setSelectedItem({ type: "states", data: state })}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-base font-bold text-white group-hover:text-red-500 transition-colors">{state.name}</h3>
                      <Info className="w-4 h-4 text-stone-700 group-hover:text-red-500 transition-colors" />
                    </div>
                    <p className="body-xs line-clamp-3">{state.description}</p>
                  </div>
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
                  <div 
                    key={trait.name} 
                    className="eldfall-card eldfall-card-interactive card-p group"
                    onClick={() => setSelectedItem({ type: "traits", data: trait })}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-base font-bold text-white group-hover:text-red-500 transition-colors">{trait.name}</h3>
                      <Info className="w-4 h-4 text-stone-700 group-hover:text-red-500 transition-colors" />
                    </div>
                    <p className="body-xs line-clamp-3">{trait.description}</p>
                  </div>
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
                  <div 
                    key={skill.name} 
                    className="eldfall-card eldfall-card-interactive card-p group"
                    onClick={() => setSelectedItem({ type: "skills", data: skill })}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-base font-bold text-white group-hover:text-red-500 transition-colors">{skill.name}</h3>
                      <Info className="w-4 h-4 text-stone-700 group-hover:text-red-500 transition-colors" />
                    </div>
                    <p className="body-xs line-clamp-3">{skill.description}</p>
                  </div>
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
                  <div 
                    key={cac.name} 
                    className="eldfall-card eldfall-card-interactive card-p group"
                    onClick={() => setSelectedItem({ type: "combatArts", data: cac })}
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
                  </div>
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
                  <div 
                    key={cls.name} 
                    className="eldfall-card eldfall-card-interactive card-p group"
                    onClick={() => setSelectedItem({ type: "classes", data: cls })}
                  >
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-red-500 transition-colors">{cls.name}</h3>
                    <p className="body-xs mb-4 italic line-clamp-2">{cls.description}</p>
                    <div className="space-y-2">
                      {cls.abilities.slice(0, 2).map((ability, i) => (
                        <div key={i} className="flex items-start text-xs">
                          <span className="text-red-500 mr-2 mt-0.5">•</span>
                          <span className="text-stone-300 line-clamp-1">{ability}</span>
                        </div>
                      ))}
                      {cls.abilities.length > 2 && (
                        <p className="text-stone-500 text-[10px] mt-2">+ {cls.abilities.length - 2} more abilities...</p>
                      )}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
          )}
        </main>

        {/* Modal for Details */}
        <AnimatePresence>
          {selectedItem && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedItem(null)}
                className="absolute inset-0 bg-stone-950/80 backdrop-blur-sm"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative surface-overlay rounded-xl max-w-3xl w-full max-h-[85vh] overflow-y-auto"
              >
                <div className="card-p-lg border-b border-stone-800 flex justify-between items-start shrink-0">
                  <div>
                    <span className="text-[10px] font-display uppercase tracking-eyebrow text-red-500 mb-1 block">
                      {selectedItem.type === "mechanics" ? selectedItem.data.category : selectedItem.type.replace(/([A-Z])/g, ' $1').trim()}
                    </span>
                    <h2 className="text-2xl font-bold text-white leading-tight">{selectedItem.data.name || selectedItem.data.title}</h2>
                  </div>
                  <button 
                    onClick={() => setSelectedItem(null)}
                    className="btn-icon-circle border-transparent bg-transparent shadow-none hover:bg-stone-800"
                  >
                    <ArrowLeft className="w-5 h-5 rotate-90" />
                  </button>
                </div>

                <div className="card-p-lg stack-standard">
                  <div className="text-stone-300 body-sm whitespace-pre-wrap font-sans">
                    <RichText 
                      text={selectedItem.data.description || selectedItem.data.content} 
                      onKeywordClick={setNestedItem}
                      highlightQuery={searchQuery}
                    />
                  </div>
                  
                  {selectedItem.type === "mechanics" && selectedItem.data.subsections && (
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
                            <span className="text-red-500 mr-2 mt-0.5">•</span>
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
                className="relative surface-overlay border-stone-700 rounded-xl max-w-lg w-full"
              >
                <div className="p-4 border-b border-stone-800 flex justify-between items-center bg-surface-1/50">
                  <div className="flex items-center space-x-2">
                    <Info className="w-4 h-4 text-red-500" />
                    <h3 className="text-sm font-bold text-white uppercase tracking-eyebrow">{nestedItem.data.name}</h3>
                  </div>
                  <button onClick={() => setNestedItem(null)} className="btn-icon-circle border-transparent bg-transparent shadow-none hover:bg-stone-800">
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <div className="card-p stack-compact">
                  <p className="text-stone-300 text-xs leading-relaxed whitespace-pre-wrap font-sans">
                    {nestedItem.data.description}
                  </p>
                </div>
                <div className="p-3 bg-surface-1/50 border-t border-stone-800 text-center">
                   <button 
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
      className={`flex items-center space-x-2 px-4 py-3 text-xs md:text-sm font-display uppercase tracking-eyebrow transition-all relative ${
        active ? "text-red-500" : "text-stone-500 hover:text-stone-300"
      }`}
    >
      {icon}
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
