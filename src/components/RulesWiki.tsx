import React, { useMemo, useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import { rules, traits, skills, classes, combatArtCategories, states } from "../data/rules";
import { ArrowLeft, Search, BookOpen, Shield, Zap, Sparkles, Users, Sword, Activity, Info, X, Target, ExternalLink, Link2 } from "lucide-react";
import { prepareFuzzySearchEntries, rankPreparedFuzzyResults, slugify } from "../utils/search";
import { buildBacklinkIndex } from "../utils/relatedRules";
import MetaTags from "./MetaTags";
import { SearchCategory, SelectedItem, KeywordItem } from "../types";
import { isRuleSection, isClass, isCombatArtCategory, getSelectedItemTitle, getSelectedItemBody, buildRuleSectionSelectedItem } from "../utils/rulesGuards";
import { HighlightedText, RichText } from "./wiki/RichText";
import { RuleSectionDetail, ClassDetail, CombatArtDetail, GenericDetail, RuleTable } from "./wiki/DetailViewComponents";
import { TabButton } from "./TabButton";

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


export default function RulesWiki({ onBack }: { onBack: () => void }) {
  const { category: urlCategory, id: urlId } = useParams<{ category: SearchCategory; id: string }>();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get("q") || "";

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

  const getSelectedItemForParams = (type: SearchCategory, id: string): SelectedItem | null => {
    const slug = id.toLowerCase();
    switch (type) {
      case "mechanics":
      case "hostiles":
      case "actions":
      case "environments": {
        const data = rules.find(r => r.id === slug);
        return data ? buildRuleSectionSelectedItem(type, data) : null;
      }
      case "states": {
        const data = states.find(s => slugify(s.name) === slug);
        return data ? { type, data } : null;
      }
      case "traits": {
        const data = traits.find(t => slugify(t.name) === slug);
        return data ? { type, data } : null;
      }
      case "skills": {
        const data = skills.find(s => slugify(s.name) === slug);
        return data ? { type, data } : null;
      }
      case "classes": {
        const data = classes.find(c => slugify(c.name) === slug);
        return data ? { type, data } : null;
      }
      case "combatArts": {
        const data = combatArtCategories.find(c => slugify(c.name) === slug);
        return data ? { type, data } : null;
      }
      default:
        return null;
    }
  };

  const selectedItem: SelectedItem | null = useMemo(() => {
    if (!urlCategory || !urlId) return null;
    return getSelectedItemForParams(urlCategory, urlId);
  }, [urlCategory, urlId]);

  const [nestedItem, setNestedItem] = useState<KeywordItem | null>(null);

  const prevTabRef = useRef(activeTab);
  useEffect(() => {
    // Only scroll to top if the tab actually changed and we're not currently viewing a detail item
    if (prevTabRef.current !== activeTab && !selectedItem) {
      window.scrollTo(0, 0);
    }
    prevTabRef.current = activeTab;
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

  const referenceEntries = useMemo<SearchResultEntry[]>(
    () => [
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
            selectedItem: buildRuleSectionSelectedItem(category, section),
          };
        }),
        ...states.map((state) => ({
          id: `states-${state.name}`,
          category: "states" as const,
          title: state.name,
          preview: state.description,
          searchText: `${state.name} ${state.description}`,
          selectedItem: { type: "states", data: state } satisfies SelectedItem,
        })),
        ...traits.map((trait) => ({
          id: `traits-${trait.name}`,
          category: "traits" as const,
          title: trait.name,
          preview: trait.description,
          searchText: `${trait.name} ${trait.description}`,
          selectedItem: { type: "traits", data: trait } satisfies SelectedItem,
        })),
        ...skills.map((skill) => ({
          id: `skills-${skill.name}`,
          category: "skills" as const,
          title: skill.name,
          preview: skill.description,
          searchText: `${skill.name} ${skill.description}`,
          selectedItem: { type: "skills", data: skill } satisfies SelectedItem,
        })),
        ...classes.map((cls) => ({
          id: `classes-${cls.name}`,
          category: "classes" as const,
          title: cls.name,
          preview: cls.description,
          searchText: `${cls.name} ${cls.description} ${cls.abilities.join(" ")}`,
          selectedItem: { type: "classes", data: cls } satisfies SelectedItem,
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
          selectedItem: { type: "combatArts", data: combatArtCategory } satisfies SelectedItem,
        })),
    ],
    [],
  );

  const searchEntries = useMemo(
    () => prepareFuzzySearchEntries(referenceEntries, (entry) => `${entry.title} ${entry.searchText}`),
    [referenceEntries],
  );

  const backlinkIndex = useMemo(() => buildBacklinkIndex(referenceEntries), [referenceEntries]);

  // Reverse links for the open item: every other entry whose text mentions it
  // by name ("referenced by"). Derived from the same corpus, so no curation.
  const backlinks = useMemo(() => {
    if (!selectedItem) return [] as SearchResultEntry[];
    const title = getSelectedItemTitle(selectedItem).toLowerCase();
    const found = backlinkIndex.get(title) ?? [];
    return [...found].sort(
      (left, right) =>
        left.category.localeCompare(right.category) || left.title.localeCompare(right.title),
    );
  }, [selectedItem, backlinkIndex]);

  const rankedSearchEntries = useMemo(
    () => rankPreparedFuzzyResults(
      searchQuery,
      searchEntries,
      (left, right) => left.title.localeCompare(right.title),
    ),
    [searchEntries, searchQuery],
  );

  const filteredSearchEntries = useMemo(
    () => rankedSearchEntries,
    [rankedSearchEntries],
  );

  const autocompleteResults = useMemo(
    () => (searchQuery.trim() ? filteredSearchEntries.slice(0, 6) : []),
    [filteredSearchEntries, searchQuery],
  );

  const searchResultsByCategory = useMemo(
    () => {
      const results: Record<Exclude<SearchCategory, "all">, SearchResultEntry[]> = {
        mechanics: [], hostiles: [], states: [], traits: [], skills: [], 
        classes: [], combatArts: [], actions: [], environments: []
      };
      
      if (!searchQuery.trim()) {
        return results;
      }

      filteredSearchEntries.forEach((entry) => {
        results[entry.category].push(entry);
      });
      
      return results;
    },
    [filteredSearchEntries, searchQuery],
  );

  const hasSearchQuery = searchQuery.trim().length > 0;
  const visibleSearchCategories = (Object.keys(searchResultsByCategory) as Exclude<SearchCategory, "all">[]).filter(
    (category) => searchResultsByCategory[category].length > 0,
  );

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

  const structuredData = useMemo(() => {
    if (!selectedItem) return null;
    const title = getSelectedItemTitle(selectedItem);
    const body = getSelectedItemBody(selectedItem);
    const url = `https://eldfallcompanion.tabletophub.nl/rules/${selectedItem.type}/${urlId}`;

    if (selectedItem.type === "mechanics" || selectedItem.type === "actions") {
      return {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": `How to use ${title} in Eldfall Chronicles`,
        "description": body.substring(0, 160),
        "url": url,
        "step": [
          {
            "@type": "HowToStep",
            "text": body
          },
          ...(isRuleSection(selectedItem) && selectedItem.data.subsections ? 
            selectedItem.data.subsections.map(sub => ({
              "@type": "HowToStep",
              "name": sub.title,
              "text": sub.content
            })) : [])
        ]
      };
    }

    return {
      "@context": "https://schema.org",
      "@type": "FactCheck",
      "name": title,
      "description": body.substring(0, 160),
      "url": url,
      "claimReviewed": `Rules for ${title} in Eldfall Chronicles`,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Organization",
        "name": "Eldfall Chronicles"
      }
    };
  }, [selectedItem, urlId]);

  type TabConfig = {
    id: Exclude<SearchCategory, "all">;
    tabLabel: string;
    tabIcon: React.ReactNode;
    gridClassName: string;
    render: () => React.ReactNode;
  };

  const tabConfigs: TabConfig[] = [
    {
      id: "mechanics",
      tabLabel: "CORE RULES",
      tabIcon: <BookOpen className="w-5 h-5" />,
      gridClassName: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
      render: () => (
        <>
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
        </>
      ),
    },
    {
      id: "states",
      tabLabel: "States",
      tabIcon: <Activity className="w-5 h-5" />,
      gridClassName: "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4",
      render: () => (
        <>
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
        </>
      ),
    },
    {
      id: "traits",
      tabLabel: "Traits",
      tabIcon: <Shield className="w-5 h-5" />,
      gridClassName: "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4",
      render: () => (
        <>
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
        </>
      ),
    },
    {
      id: "skills",
      tabLabel: "Skills",
      tabIcon: <Zap className="w-5 h-5" />,
      gridClassName: "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4",
      render: () => (
        <>
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
        </>
      ),
    },
    {
      id: "combatArts",
      tabLabel: "Combat Arts",
      tabIcon: <Sword className="w-5 h-5" />,
      gridClassName: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
      render: () => (
        <>
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
        </>
      ),
    },
    {
      id: "classes",
      tabLabel: "Classes",
      tabIcon: <Users className="w-5 h-5" />,
      gridClassName: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
      render: () => (
        <>
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
        </>
      ),
    },
    {
      id: "actions",
      tabLabel: "Actions",
      tabIcon: <Activity className="w-5 h-5" />,
      gridClassName: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
      render: () => (
        <>
          {rules
            .filter(r => r.category === "Normal Action" || r.category === "Special Action")
            .map((section) => (
              <button
                key={section.id}
                type="button"
                className="eldfall-card eldfall-card-interactive card-p group text-left"
                onClick={() => handleSelectItem({ type: "actions", data: section })}
              >
                <div className="flex justify-between items-start mb-3">
                  <span className="text-[10px] font-display uppercase tracking-eyebrow text-red-500/70">{section.category}</span>
                  <Activity className="w-4 h-4 text-stone-700 group-hover:text-red-500 transition-colors" />
                </div>
                <h2 className="text-lg font-bold text-white mb-2 group-hover:text-red-500 transition-colors">{section.title}</h2>
                <p className="body-sm line-clamp-3 text-stone-400">{section.content}</p>
              </button>
            ))}
        </>
      ),
    },
    {
      id: "hostiles",
      tabLabel: "Hostiles",
      tabIcon: <Target className="w-5 h-5" />,
      gridClassName: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
      render: () => (
        <>
          {rules.filter(r => r.category === "Hostiles").map((section) => (
            <button
              key={section.id}
              type="button"
              className="eldfall-card eldfall-card-interactive card-p group text-left"
              onClick={() => handleSelectItem({ type: "hostiles", data: section })}
            >
              <div className="flex justify-between items-start mb-3">
                <span className="text-xs font-display uppercase tracking-eyebrow text-red-500/70">{section.category}</span>
                <Target className="w-4 h-4 text-stone-700 group-hover:text-red-500 transition-colors" />
              </div>
              <h2 className="text-lg font-bold text-white mb-2 group-hover:text-red-500 transition-colors">{section.title}</h2>
              <p className="body-sm line-clamp-3 text-stone-400">{section.content}</p>
            </button>
          ))}
        </>
      ),
    },
    {
      id: "environments",
      tabLabel: "Environments",
      tabIcon: <Sparkles className="w-5 h-5" />,
      gridClassName: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
      render: () => (
        <>
          {rules.filter(r => r.category === "Environment").map((section) => (
            <button
              key={section.id}
              type="button"
              className="eldfall-card eldfall-card-interactive card-p group text-left"
              onClick={() => handleSelectItem({ type: "environments", data: section })}
            >
              <div className="flex justify-between items-start mb-3">
                <span className="text-xs font-display uppercase tracking-eyebrow text-red-500/70">{section.category}</span>
                <Sparkles className="w-4 h-4 text-stone-700 group-hover:text-red-500 transition-colors" />
              </div>
              <h2 className="text-lg font-bold text-white mb-2 group-hover:text-red-500 transition-colors">{section.title}</h2>
              <p className="body-sm line-clamp-3 text-stone-400">{section.content}</p>
            </button>
          ))}
        </>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-stone-950">
      <MetaTags 
        title={selectedItem ? `${getSelectedItemTitle(selectedItem)} - Rules Wiki` : "Rules Wiki"}
        description={selectedItem ? getSelectedItemBody(selectedItem).substring(0, 160) : "Searchable rules wiki for Eldfall Chronicles. Explore mechanics, states, traits, skills, and combat arts."}
        type={selectedItem ? (selectedItem.type === "mechanics" || selectedItem.type === "actions" ? "howto" : "factcheck") : "website"}
        structuredData={structuredData}
        canonicalPath={selectedItem ? `/rules/${selectedItem.type}/${urlId}` : `/rules/${activeTab}`}
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
              className="eldfall-input eldfall-input-with-icon pr-12"
            />
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
        <div id="rules-wiki-tabs" className="flex space-x-2 md:space-x-4 mb-8 border-b border-stone-800 overflow-x-auto custom-scrollbar">
          {tabConfigs.map((tab) => (
            <TabButton
              key={tab.id}
              active={activeTab === tab.id}
              onClick={() => handleTabChange(tab.id)}
              icon={tab.tabIcon}
              label={tab.tabLabel}
              layoutId="activeTab"
              indicatorClassName="bg-red-600 shadow-[0_0_8px_rgba(220,38,38,0.4)]"
              className="shrink-0"
            />
          ))}
        </div>

        <div>
          {hasSearchQuery ? (
            visibleSearchCategories.length > 0 ? (
              <div className="space-y-8">
                {visibleSearchCategories.map((category) => (
                  <section key={category} className="space-y-4">
                    <div className="flex items-center justify-between border-b border-stone-900 pb-3">
                      <h2 className="text-xl font-bold text-white">{SEARCH_CATEGORY_LABELS[category]}</h2>
                      <span className="text-xs uppercase tracking-eyebrow text-stone-500">
                        {searchResultsByCategory[category].length} match{searchResultsByCategory[category].length === 1 ? "" : "es"}
                      </span>
                    </div>

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
            {tabConfigs.filter((tab) => tab.id === activeTab).map((tab) => (
              <motion.div
                key={tab.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={tab.gridClassName}
              >
                {tab.render()}
              </motion.div>
            ))}
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
                      {(selectedItem.type === "mechanics" || selectedItem.type === "hostiles" || selectedItem.type === "actions") ? selectedItem.data.category : selectedItem.type.replace(/([A-Z])/g, " $1").trim()}
                    </span>
                    <h2 id="rules-detail-title" className="text-2xl font-bold text-white leading-tight">{getSelectedItemTitle(selectedItem)}</h2>
                  </div>
                  <button 
                    type="button"
                    aria-label="Close rules detail"
                    onClick={handleCloseItem}
                    className="btn-icon-circle border-transparent bg-transparent shadow-none hover:bg-stone-800"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="card-p-lg stack-standard">
                  {isRuleSection(selectedItem) && (
                    <RuleSectionDetail 
                      item={selectedItem} 
                      onKeywordClick={setNestedItem} 
                      searchQuery={searchQuery} 
                    />
                  )}
                  {isClass(selectedItem) && (
                    <ClassDetail 
                      item={selectedItem} 
                      onKeywordClick={setNestedItem} 
                      searchQuery={searchQuery} 
                    />
                  )}
                  {isCombatArtCategory(selectedItem) && (
                    <CombatArtDetail 
                      item={selectedItem} 
                      onKeywordClick={setNestedItem} 
                      searchQuery={searchQuery} 
                    />
                  )}
                  {(!isRuleSection(selectedItem) && !isClass(selectedItem) && !isCombatArtCategory(selectedItem)) && (
                    <GenericDetail
                      item={selectedItem}
                      onKeywordClick={setNestedItem}
                      searchQuery={searchQuery}
                    />
                  )}

                  {backlinks.length > 0 && (
                    <div className="pt-2">
                      <h3 className="flex items-center gap-2 text-white font-bold uppercase text-xs tracking-eyebrow border-b border-stone-800 pb-2 mb-3">
                        <Link2 className="w-3.5 h-3.5 text-red-500" />
                        Referenced By
                        <span className="ml-auto text-[10px] font-normal normal-case tracking-normal text-stone-500">
                          {backlinks.length}
                        </span>
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {backlinks.map((entry) => (
                          <button
                            key={`backlink-${entry.id}`}
                            type="button"
                            onClick={() => handleSelectItem(entry.selectedItem)}
                            className="group inline-flex items-center gap-1.5 rounded-full border border-stone-700 bg-stone-900/60 px-3 py-1.5 text-left transition-colors hover:border-red-600/60 hover:bg-stone-800"
                          >
                            <span className="text-[9px] uppercase tracking-eyebrow text-red-500/70 group-hover:text-red-400">
                              {SEARCH_CATEGORY_LABELS[entry.category]}
                            </span>
                            <span className="text-xs font-medium text-stone-300 group-hover:text-white">
                              {entry.title}
                            </span>
                          </button>
                        ))}
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
                  <div className="text-stone-300 text-xs leading-relaxed whitespace-pre-wrap font-sans">
                    <RichText text={getSelectedItemBody(nestedItem)} onKeywordClick={setNestedItem} />
                  </div>
                  {isRuleSection(nestedItem) && nestedItem.data.table && (
                    <RuleTable table={nestedItem.data.table} />
                  )}
                  {isRuleSection(nestedItem) && nestedItem.data.subsections && (
                    <div className="mt-4 space-y-3">
                      {nestedItem.data.subsections.slice(0, 3).map((sub, i) => (
                        <div key={i} className="border-l border-red-900/30 pl-3">
                          <h4 className="text-white font-bold text-[10px] uppercase tracking-eyebrow">{sub.title}</h4>
                          <p className="text-stone-400 text-[10px]">
                            <RichText text={sub.content} onKeywordClick={setNestedItem} />
                          </p>
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
