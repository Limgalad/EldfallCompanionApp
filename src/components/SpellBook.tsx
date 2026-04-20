import React, { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Wand2, Search, Filter, Sparkles } from 'lucide-react';
import { spellSchools, Spell, SpellSchool } from '../data/spells';

interface SpellBookProps {
  onBack: () => void;
}

const normalizeText = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const getFuzzyScore = (query: string, text: string) => {
  const normalizedQuery = normalizeText(query);
  const normalizedText = normalizeText(text);

  if (!normalizedQuery) {
    return 1;
  }

  const directIndex = normalizedText.indexOf(normalizedQuery);
  if (directIndex >= 0) {
    return 1000 - directIndex;
  }

  let queryIndex = 0;
  let gapPenalty = 0;
  let lastMatchIndex = -1;

  for (let i = 0; i < normalizedText.length && queryIndex < normalizedQuery.length; i += 1) {
    if (normalizedText[i] === normalizedQuery[queryIndex]) {
      if (lastMatchIndex >= 0) {
        gapPenalty += i - lastMatchIndex - 1;
      }
      lastMatchIndex = i;
      queryIndex += 1;
    }
  }

  if (queryIndex !== normalizedQuery.length) {
    return 0;
  }

  return Math.max(100 - gapPenalty, 1);
};

export default function SpellBook({ onBack }: SpellBookProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSchool, setSelectedSchool] = useState<SpellSchool['name'] | null>(null);

  const filteredSchools = useMemo(
    () =>
      spellSchools
        .map((school) => {
          const filteredSpells = school.spells
            .map((spell) => ({
              spell,
              score: getFuzzyScore(
                searchQuery,
                `${spell.name} ${spell.effect} ${spell.element} ${spell.type} ${school.name}`,
              ),
            }))
            .filter(({ score }) => score > 0)
            .sort((left, right) => right.score - left.score || left.spell.name.localeCompare(right.spell.name))
            .map(({ spell }) => spell);

          return { ...school, spells: filteredSpells };
        })
        .filter(
          (school) =>
            (selectedSchool === null || school.name === selectedSchool) &&
            school.spells.length > 0,
        ),
    [searchQuery, selectedSchool],
  );

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
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-grow">
            <Search className="eldfall-input-icon" />
            <input
              type="text"
              placeholder="Search spells by name, effect, or element..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="eldfall-input eldfall-input-with-icon"
            />
          </div>
          <div className="relative min-w-[200px]">
            <Filter className="eldfall-input-icon" />
            <select
              value={selectedSchool || ''}
              onChange={(e) => setSelectedSchool(e.target.value || null)}
              className="eldfall-input eldfall-input-with-icon cursor-pointer appearance-none"
            >
              <option value="">All Schools</option>
              {spellSchools.map(school => (
                <option key={school.name} value={school.name}>{school.name}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-12">
          {filteredSchools.length === 0 ? (
            <div className="text-center py-20 text-stone-500">
              <Sparkles className="w-12 h-12 mx-auto mb-4 opacity-20" />
              <p>No spells found matching your criteria.</p>
            </div>
          ) : (
            filteredSchools.map((school, index) => (
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
                    <div key={`${school.name}-${spell.name}-${spellIndex}`}>
                      <SpellCard spell={spell} />
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

function SpellCard({ spell }: { spell: Spell }) {
  return (
    <div className="eldfall-card-solid eldfall-card-interactive card-p flex flex-col h-full">
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
