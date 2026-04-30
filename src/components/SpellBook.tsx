import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Wand2, Search, Sparkles, Menu, X } from 'lucide-react';
import { spellSchools, Spell, SpellSchool } from '../data/spells';
import { normalizeText, prepareFuzzySearchEntries, rankPreparedFuzzyResults } from '../utils/search';

interface SpellBookProps {
  onBack: () => void;
}

type SpellSearchResult = {
  id: string;
  schoolName: SpellSchool['name'];
  spell: Spell;
};

const getSpellId = (schoolName: string, spellName: string, spellIndex: number) =>
  `spell-${normalizeText(`${schoolName} ${spellName} ${spellIndex}`).replace(/\s+/g, '-')}`;

const spellSearchEntries = prepareFuzzySearchEntries(
  spellSchools.flatMap((school) =>
    school.spells.map((spell, spellIndex) => ({
      id: getSpellId(school.name, spell.name, spellIndex),
      schoolName: school.name,
      spell,
    })),
  ),
  (entry) => `${entry.spell.name} ${entry.spell.effect} ${entry.spell.element} ${entry.spell.type} ${entry.schoolName}`,
);

export default function SpellBook({ onBack }: SpellBookProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSchool, setSelectedSchool] = useState<SpellSchool['name'] | null>(null);
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
  const [highlightedSpellId, setHighlightedSpellId] = useState<string | null>(null);

  const hasSearchQuery = searchQuery.trim().length > 0;

  const searchResults = useMemo<SpellSearchResult[]>(
    () => rankPreparedFuzzyResults(
      searchQuery,
      spellSearchEntries,
      (left, right) => left.spell.name.localeCompare(right.spell.name),
    ),
    [searchQuery],
  );

  const visibleSchools = useMemo(
    () => spellSchools.filter((school) => selectedSchool === null || school.name === selectedSchool),
    [selectedSchool],
  );

  const autocompleteResults = useMemo(
    () => (hasSearchQuery ? searchResults.slice(0, 6) : []),
    [hasSearchQuery, searchResults],
  );

  useEffect(() => {
    if (!highlightedSpellId) {
      return;
    }

    const element = document.getElementById(highlightedSpellId);
    element?.scrollIntoView?.({ behavior: 'smooth', block: 'center' });

    const timeoutId = window.setTimeout(() => setHighlightedSpellId(null), 2400);
    return () => window.clearTimeout(timeoutId);
  }, [highlightedSpellId, selectedSchool]);

  const navigateToSpell = (result: SpellSearchResult) => {
    setSelectedSchool(result.schoolName);
    setSearchQuery('');
    setHighlightedSpellId(result.id);
  };

  return (
    <div className="min-h-screen surface-1 text-stone-300 pb-20">
      {/* Header */}
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
              <Wand2 className="w-6 h-6 text-red-500" />
              <h1 className="h1-standard">Spell Book</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Controls */}
        <div className="mb-8">
          <div className="relative max-w-2xl">
            <Search className="eldfall-input-icon" />
            <input
              type="text"
              placeholder="Search spells by name, effect, or element..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="eldfall-input eldfall-input-with-icon pr-24"
            />
            <button
              type="button"
              aria-label="Open spell school filters"
              aria-expanded={isFilterMenuOpen}
              onClick={() => setIsFilterMenuOpen((current) => !current)}
              className={`btn-icon-circle absolute right-10 top-1/2 -translate-y-1/2 border-transparent bg-transparent shadow-none hover:bg-stone-800 ${
                selectedSchool !== null ? 'text-red-400' : ''
              }`}
            >
              <Menu className="w-5 h-5" />
            </button>
            {searchQuery && (
              <button
                type="button"
                aria-label="Clear spell search"
                onClick={() => setSearchQuery('')}
                className="btn-icon-circle absolute right-2 top-1/2 -translate-y-1/2 border-transparent bg-transparent shadow-none hover:bg-stone-800"
              >
                <X className="w-5 h-5" />
              </button>
            )}

            {isFilterMenuOpen && (
              <div className="absolute right-0 top-[calc(100%+0.75rem)] z-20 w-56 rounded-xl border border-stone-800 bg-stone-900/95 p-2 shadow-2xl backdrop-blur-sm">
                <div className="px-3 py-2 text-[10px] uppercase tracking-eyebrow text-stone-500">
                  Spell School
                </div>
                <div className="space-y-1">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedSchool(null);
                      setIsFilterMenuOpen(false);
                    }}
                    className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-xs font-bold uppercase tracking-eyebrow transition-colors ${
                      selectedSchool === null
                        ? 'bg-red-900/20 text-red-400'
                        : 'text-stone-400 hover:bg-stone-800 hover:text-stone-200'
                    }`}
                  >
                    <span>All Schools</span>
                    {selectedSchool === null && <span className="text-[10px]">Active</span>}
                  </button>

                  {spellSchools.map((school) => (
                    <button
                      key={school.name}
                      type="button"
                      onClick={() => {
                        setSelectedSchool(school.name);
                        setIsFilterMenuOpen(false);
                      }}
                      className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-xs font-bold uppercase tracking-eyebrow transition-colors ${
                        selectedSchool === school.name
                          ? 'bg-red-900/20 text-red-400'
                          : 'text-stone-400 hover:bg-stone-800 hover:text-stone-200'
                      }`}
                    >
                      <span>{school.name}</span>
                      {selectedSchool === school.name && <span className="text-[10px]">Active</span>}
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
                {autocompleteResults.map((result) => (
                  <button
                    key={`suggestion-${result.id}`}
                    type="button"
                    onClick={() => navigateToSpell(result)}
                    className="w-full px-4 py-3 text-left hover:bg-stone-800 transition-colors"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-sm font-bold text-white">{result.spell.name}</span>
                      <span className="text-[10px] uppercase tracking-eyebrow text-red-400">
                        {result.schoolName}
                      </span>
                    </div>
                    <p className="body-xs mt-1 line-clamp-2">{result.spell.effect}</p>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <div id="spell-book-tabs" className="flex space-x-2 md:space-x-4 mb-8 border-b border-stone-900 overflow-x-auto custom-scrollbar">
          <TabButton
            active={selectedSchool === null}
            onClick={() => setSelectedSchool(null)}
            label="All Schools"
          />
          {spellSchools.map((school) => (
            <TabButton
              key={school.name}
              active={selectedSchool === school.name}
              onClick={() => setSelectedSchool(school.name)}
              label={school.name}
            />
          ))}
        </div>

        {/* Content */}
        <div className="space-y-12">
          {hasSearchQuery ? (
            searchResults.length > 0 ? (
              <section className="space-y-4">
                <div className="flex items-center justify-between border-b border-stone-900 pb-3">
                  <h2 className="text-xl font-bold text-white">Search Results</h2>
                  <span className="text-xs uppercase tracking-eyebrow text-stone-500">
                    {searchResults.length} match{searchResults.length === 1 ? '' : 'es'}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {searchResults.map((result) => (
                    <button
                      key={result.id}
                      type="button"
                      onClick={() => navigateToSpell(result)}
                      className="eldfall-card eldfall-card-interactive card-p group text-left"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <span className="text-xs font-display uppercase tracking-eyebrow text-red-500/70">
                          {result.schoolName}
                        </span>
                        <span className="eldfall-chip ml-2">Lvl {result.spell.level}</span>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-red-500 transition-colors">
                        {result.spell.name}
                      </h3>
                      <p className="body-sm line-clamp-3">{result.spell.effect}</p>
                    </button>
                  ))}
                </div>
              </section>
            ) : (
              <div className="text-center py-20 text-stone-500">
                <Sparkles className="w-12 h-12 mx-auto mb-4 opacity-20" />
                <p>No spells found matching your criteria.</p>
              </div>
            )
          ) : visibleSchools.length === 0 ? (
            <div className="text-center py-20 text-stone-500">
              <Sparkles className="w-12 h-12 mx-auto mb-4 opacity-20" />
              <p>No spells found matching your criteria.</p>
            </div>
          ) : (
            visibleSchools.map((school, index) => (
              <motion.section
                key={school.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-6 pb-2 border-b border-stone-800">
                  <h2 className="text-2xl font-bold text-white">{school.name}</h2>
                  <span className="px-2 py-1 surface-2 rounded-lg text-xs font-medium text-stone-400">
                    {school.spells.length} Spells
                  </span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {school.spells.map((spell, spellIndex) => (
                    <div
                      id={getSpellId(school.name, spell.name, spellIndex)}
                      key={`${school.name}-${spell.name}-${spellIndex}`}
                    >
                      <SpellCard
                        spell={spell}
                        isHighlighted={highlightedSpellId === getSpellId(school.name, spell.name, spellIndex)}
                      />
                    </div>
                  ))}
                </div>
              </motion.section>
            ))
          )}
        </div>
      </main>
    </div>
  );
}

function SpellCard({ spell, isHighlighted = false }: { spell: Spell; isHighlighted?: boolean }) {
  return (
    <div
      className={`eldfall-card-solid eldfall-card-interactive card-p flex flex-col h-full transition-all ${
        isHighlighted ? 'ring-2 ring-red-500 shadow-2xl shadow-red-950/40' : ''
      }`}
    >
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-bold text-white leading-tight">{spell.name}</h3>
        <span className="eldfall-chip ml-2">
          Lvl {spell.level}
        </span>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-4">
        <Badge label="Element" value={spell.element} />
        <Badge label="Type" value={spell.type} />
      </div>
      
      <div className="grid grid-cols-3 gap-2 mb-4">
        <StatBox label="PW" value={spell.pw} />
        <StatBox label="RCH" value={spell.rch} />
        <StatBox label="STK" value={spell.stk} />
      </div>
      
      <div className="mt-auto pt-4 border-t border-stone-800/50">
        <p className="body-sm">
          {spell.effect}
        </p>
      </div>
    </div>
  );
}

function TabButton({ active, onClick, label }: { active: boolean; onClick: () => void; label: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center space-x-2 px-4 py-3 text-xs md:text-sm font-display uppercase tracking-eyebrow transition-all relative whitespace-nowrap ${
        active ? 'text-red-500' : 'text-stone-500 hover:text-stone-300'
      }`}
    >
      <Wand2 className="w-4 h-4" />
      <span>{label}</span>
      {active && (
        <motion.div
          layoutId="activeSpellSchoolTab"
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-500"
        />
      )}
    </button>
  );
}

function Badge({ label, value }: { label: string, value: string }) {
  return (
    <div className="eldfall-chip">
      <span className="text-stone-500 mr-1">{label}:</span>
      <span className="text-stone-300">{value}</span>
    </div>
  );
}

function StatBox({ label, value }: { label: string, value: string }) {
  return (
    <div className="surface-1 border border-stone-800 rounded-lg p-2 text-center flex flex-col justify-center">
      <span className="text-[8px] text-stone-500 uppercase tracking-meta mb-1">{label}</span>
      <span className="text-sm font-bold text-stone-200">{value}</span>
    </div>
  );
}
