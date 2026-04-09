import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Wand2, Search, Filter, Sparkles } from 'lucide-react';
import { spellSchools, Spell, SpellSchool } from '../data/spells';

interface SpellBookProps {
  onBack: () => void;
}

export default function SpellBook({ onBack }: SpellBookProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSchool, setSelectedSchool] = useState<SpellSchool['name'] | null>(null);

  const filteredSchools = spellSchools.map(school => {
    const filteredSpells = school.spells.filter(spell => 
      spell.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      spell.effect.toLowerCase().includes(searchQuery.toLowerCase()) ||
      spell.element.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return { ...school, spells: filteredSpells };
  }).filter(school => 
    (selectedSchool === null || school.name === selectedSchool) && 
    school.spells.length > 0
  );

  return (
    <div className="min-h-screen bg-stone-950 text-stone-300 pb-20">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-stone-950/80 backdrop-blur-md border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={onBack}
              className="p-2 hover:bg-stone-800 rounded-full transition-colors text-stone-400 hover:text-white"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              <Wand2 className="w-6 h-6 text-red-500" />
              <h1 className="text-xl font-bold text-white">Spell Book</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Controls */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-500" />
            <input
              type="text"
              placeholder="Search spells by name, effect, or element..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-stone-900 border border-stone-800 rounded-xl pl-10 pr-4 py-3 text-white placeholder-stone-500 focus:outline-none focus:border-red-500/50 transition-colors"
            />
          </div>
          <div className="relative min-w-[200px]">
            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-500" />
            <select
              value={selectedSchool || ''}
              onChange={(e) => setSelectedSchool(e.target.value || null)}
              className="w-full bg-stone-900 border border-stone-800 rounded-xl pl-10 pr-4 py-3 text-white appearance-none focus:outline-none focus:border-red-500/50 transition-colors cursor-pointer"
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
                  <span className="px-2 py-1 bg-stone-900 rounded text-xs font-medium text-stone-400">
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
    <div className="bg-stone-900 border border-stone-800 rounded-xl p-5 hover:border-red-900/50 transition-colors flex flex-col h-full">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-bold text-white leading-tight">{spell.name}</h3>
        <span className="px-2 py-1 bg-stone-950 rounded text-xs font-bold text-red-400 border border-stone-800 whitespace-nowrap ml-2">
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
        <p className="text-sm text-stone-400 leading-relaxed">
          {spell.effect}
        </p>
      </div>
    </div>
  );
}

function Badge({ label, value }: { label: string, value: string }) {
  return (
    <div className="inline-flex items-center text-xs bg-stone-950 border border-stone-800 rounded px-2 py-1">
      <span className="text-stone-500 mr-1">{label}:</span>
      <span className="text-stone-300">{value}</span>
    </div>
  );
}

function StatBox({ label, value }: { label: string, value: string }) {
  return (
    <div className="bg-stone-950 border border-stone-800 rounded p-2 text-center flex flex-col justify-center">
      <span className="text-[10px] text-stone-500 uppercase tracking-wider mb-1">{label}</span>
      <span className="text-sm font-bold text-stone-200">{value}</span>
    </div>
  );
}
