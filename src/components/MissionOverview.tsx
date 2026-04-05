import { motion, AnimatePresence } from "motion/react";
import { missions, Mission } from "../data/missions";
import { questSchemes, SchemeCategory } from "../data/schemes";
import { creatureCategories } from "../data/creatures";
import { ArrowLeft, Map as MapIcon, Target, ScrollText, Trophy, BookOpen, X, Ghost } from "lucide-react";
import { useState, useEffect } from "react";

export default function MissionOverview({ onBack }: { onBack: () => void }) {
  const [selectedMission, setSelectedMission] = useState<Mission | null>(null);
  const [showSchemes, setShowSchemes] = useState(false);
  const [selectedFaction, setSelectedFaction] = useState<string>("Neutral");
  const [showCreatures, setShowCreatures] = useState(false);
  const [selectedCreatureCategory, setSelectedCreatureCategory] = useState<string>("Elementals");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedMission]);

  if (selectedMission) {
    return <MissionDetail mission={selectedMission} onBack={() => setSelectedMission(null)} />;
  }

  return (
    <div className="min-h-screen bg-stone-950 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center text-stone-400 hover:text-red-500 transition-colors mb-6 group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </button>

        <header className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Competitive Quests</h1>
            <p className="text-lg text-stone-400 font-light tracking-widest uppercase">Season 1</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <button 
              onClick={() => setShowSchemes(true)}
              className="flex items-center px-4 py-2 text-sm bg-stone-900/50 text-stone-300 border border-stone-800 rounded hover:bg-stone-800 hover:text-white transition-colors whitespace-nowrap"
            >
              <BookOpen className="w-4 h-4 mr-2" />
              Quest Schemes
            </button>
            <button 
              onClick={() => setShowCreatures(true)}
              className="flex items-center px-4 py-2 text-sm bg-stone-900/50 text-stone-300 border border-stone-800 rounded hover:bg-stone-800 hover:text-white transition-colors whitespace-nowrap"
            >
              <Ghost className="w-4 h-4 mr-2" />
              Creatures Database
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {missions.map((mission, index) => (
            <motion.div
              key={mission.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onClick={() => setSelectedMission(mission)}
              className="eldfall-card p-4 cursor-pointer group"
            >
              <div className="aspect-video mb-4 overflow-hidden rounded border border-stone-800 bg-stone-900/50 flex items-center justify-center">
                {mission.mapImage ? (
                  <img 
                    src={mission.mapImage} 
                    alt={mission.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="text-stone-600 flex flex-col items-center">
                    <MapIcon className="w-6 h-6 mb-2 opacity-20" />
                    <span className="text-[10px] uppercase tracking-widest opacity-40">No Tactical Map</span>
                  </div>
                )}
              </div>
              <h2 className="text-lg font-bold mb-2 group-hover:text-red-500 transition-colors">
                {mission.title}
              </h2>
              <p className="text-stone-400 text-xs line-clamp-3 leading-relaxed">
                {mission.description}
              </p>
              <div className="mt-4 flex items-center text-red-500 text-xs font-medium">
                View Mission Details <ArrowLeft className="ml-2 w-3 h-3 rotate-180" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Archive Placeholder */}
        <div className="mt-20 p-8 rounded-lg border border-stone-900 bg-stone-900/20 text-center">
          <h3 className="text-stone-500 font-display uppercase tracking-widest text-sm mb-2">Quest Archive</h3>
          <p className="text-stone-600 italic text-sm">Previous seasons will be archived here.</p>
        </div>
      </div>

      {/* Quest Schemes Modal */}
      <AnimatePresence>
        {showSchemes && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setShowSchemes(false)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-stone-950 border border-stone-800 rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden"
            >
              <div className="p-4 border-b border-stone-800 flex justify-between items-center bg-stone-900/50">
                <div className="flex items-center text-red-500">
                  <BookOpen className="w-5 h-5 mr-3" />
                  <h2 className="text-xl font-bold uppercase tracking-widest">Quest Schemes</h2>
                </div>
                <button 
                  onClick={() => setShowSchemes(false)}
                  className="text-stone-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
                {/* Faction Selector */}
                <div className="w-full md:w-64 border-b md:border-b-0 md:border-r border-stone-800 bg-stone-900/30 overflow-y-auto p-3 space-y-1 custom-scrollbar">
                  {questSchemes.map((category) => (
                    <button
                      key={category.faction}
                      onClick={() => setSelectedFaction(category.faction)}
                      className={`w-full text-left px-3 py-2 text-sm rounded transition-colors ${
                        selectedFaction === category.faction 
                          ? 'bg-red-900/20 text-red-500 border border-red-900/50' 
                          : 'text-stone-400 hover:bg-stone-800 hover:text-stone-200'
                      }`}
                    >
                      {category.faction}
                    </button>
                  ))}
                </div>

                {/* Schemes List */}
                <div className="flex-1 overflow-y-auto p-4 bg-stone-950 custom-scrollbar">
                  <div className="space-y-3">
                    {questSchemes.find(c => c.faction === selectedFaction)?.schemes.map((scheme, idx) => (
                      <div key={idx} className="p-3 rounded border border-stone-800 bg-stone-900/20">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-base font-bold text-white">{scheme.name}</h3>
                          <span className="px-2 py-0.5 bg-stone-800 text-stone-300 text-[10px] font-mono rounded">
                            Roll: {scheme.rollResult}
                          </span>
                        </div>
                        <p className="text-stone-400 text-xs leading-relaxed">
                          {scheme.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Creatures Modal */}
      <AnimatePresence>
        {showCreatures && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setShowCreatures(false)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-stone-950 border border-stone-800 rounded-lg shadow-2xl w-full max-w-5xl max-h-[90vh] flex flex-col overflow-hidden"
            >
              <div className="p-4 border-b border-stone-800 flex justify-between items-center bg-stone-900/50">
                <div className="flex items-center text-red-500">
                  <Ghost className="w-5 h-5 mr-3" />
                  <h2 className="text-xl font-bold uppercase tracking-widest">Creatures Database</h2>
                </div>
                <button 
                  onClick={() => setShowCreatures(false)}
                  className="text-stone-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
                {/* Category Selector */}
                <div className="w-full md:w-64 border-b md:border-b-0 md:border-r border-stone-800 bg-stone-900/30 overflow-y-auto p-3 space-y-1 custom-scrollbar">
                  {creatureCategories.map((category) => (
                    <button
                      key={category.category}
                      onClick={() => setSelectedCreatureCategory(category.category)}
                      className={`w-full text-left px-3 py-2 text-sm rounded transition-colors ${
                        selectedCreatureCategory === category.category 
                          ? 'bg-red-900/20 text-red-500 border border-red-900/50' 
                          : 'text-stone-400 hover:bg-stone-800 hover:text-stone-200'
                      }`}
                    >
                      {category.category}
                    </button>
                  ))}
                </div>

                {/* Creatures List */}
                <div className="flex-1 overflow-y-auto p-4 bg-stone-950 custom-scrollbar">
                  <div className="space-y-6">
                    {creatureCategories.find(c => c.category === selectedCreatureCategory)?.creatures.map((creature, idx) => (
                      <div key={idx} className="p-4 rounded border border-stone-800 bg-stone-900/20">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h3 className="text-xl font-bold text-white mb-1">{creature.name}</h3>
                            <p className="text-stone-400 text-xs italic">{creature.description}</p>
                          </div>
                          <span className="px-2 py-0.5 bg-stone-800 text-stone-300 text-[10px] font-display uppercase tracking-widest rounded border border-stone-700">
                            {creature.tier}
                          </span>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-5 md:grid-cols-10 gap-1 mb-4">
                          {Object.entries(creature.stats).map(([key, value]) => (
                            <div key={key} className="bg-stone-950 border border-stone-800 rounded p-1.5 text-center">
                              <div className="text-[8px] text-stone-500 uppercase font-bold mb-0.5">{key}</div>
                              <div className="text-white text-xs font-mono">{value}</div>
                            </div>
                          ))}
                        </div>

                        {/* Weapons */}
                        <div className="mb-4">
                          <h4 className="text-stone-300 font-bold uppercase text-[10px] tracking-widest mb-2 border-b border-stone-800 pb-1">Weapons</h4>
                          <div className="space-y-2">
                            {creature.weapons.map((weapon, wIdx) => (
                              <div key={wIdx} className="bg-stone-950/50 border border-stone-800/50 rounded p-2 text-xs">
                                <div className="flex flex-wrap items-center gap-3 mb-1">
                                  <span className="font-bold text-red-500">{weapon.name}</span>
                                  <span className="text-stone-500 text-[10px] uppercase">{weapon.type}</span>
                                  <div className="flex gap-2 text-stone-400 font-mono text-[10px]">
                                    <span>PW: {weapon.pw}</span>
                                    <span>RCH: {weapon.rch}</span>
                                    <span>STK: {weapon.stk}</span>
                                  </div>
                                </div>
                                <p className="text-stone-400 italic text-[10px]">{weapon.effects}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Traits & Behavior */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="text-stone-300 font-bold uppercase text-[10px] tracking-widest mb-2 border-b border-stone-800 pb-1">Traits</h4>
                            <div className="flex flex-wrap gap-1.5">
                              {creature.traits.map((trait, tIdx) => (
                                <span key={tIdx} className="px-1.5 py-0.5 bg-stone-900 border border-stone-800 text-stone-300 text-[10px] rounded">
                                  {trait}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h4 className="text-stone-300 font-bold uppercase text-[10px] tracking-widest mb-2 border-b border-stone-800 pb-1">Behavior</h4>
                            <p className="text-stone-400 text-xs leading-relaxed">{creature.behavior}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MissionDetail({ mission, onBack }: { mission: Mission; onBack: () => void }) {
  return (
    <div className="min-h-screen bg-stone-950 py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center text-stone-400 hover:text-red-500 transition-colors mb-6 group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Missions
        </button>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-8"
        >
          <header>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{mission.title}</h1>
            <p className="text-lg text-stone-300 leading-relaxed max-w-3xl italic">
              "{mission.description}"
            </p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <section className="eldfall-card p-6">
                <div className="flex items-center mb-6 text-red-500">
                  <Target className="w-6 h-6 mr-3" />
                  <h2 className="text-xl font-bold uppercase tracking-wider">Setup</h2>
                </div>
                <ul className="space-y-4 text-stone-300">
                  {mission.setup.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-red-900 mr-3 mt-1.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="eldfall-card p-6 border-red-900/20">
                <div className="flex items-center mb-4 text-red-500">
                  <Trophy className="w-6 h-6 mr-3" />
                  <h2 className="text-xl font-bold uppercase tracking-wider">Results (VP)</h2>
                </div>
                <ul className="space-y-4 text-stone-300">
                  {mission.results.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-red-900 mr-3 mt-1.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              {mission.specialEndConditions && (
                <section className="eldfall-card p-6 border-amber-900/20">
                  <div className="flex items-center mb-4 text-amber-500">
                    <ScrollText className="w-6 h-6 mr-3" />
                    <h2 className="text-xl font-bold uppercase tracking-wider">Special End Conditions</h2>
                  </div>
                  <ul className="space-y-4 text-stone-300">
                    {mission.specialEndConditions.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-amber-900 mr-3 mt-1.5">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </div>

            <div className={`space-y-6 ${!mission.mapImage ? 'lg:col-span-2' : ''}`}>
              {mission.mapImage && (
                <section className="eldfall-card p-6 overflow-hidden">
                  <div className="flex items-center mb-4 text-red-500">
                    <MapIcon className="w-6 h-6 mr-3" />
                    <h2 className="text-xl font-bold uppercase tracking-wider">Tactical Map</h2>
                  </div>
                  <div className="aspect-square bg-stone-950 rounded border border-stone-800 overflow-hidden">
                    <img 
                      src={mission.mapImage} 
                      alt="Tactical Map" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </section>
              )}

              <section className="eldfall-card p-6">
                <div className="flex items-center mb-4 text-red-500">
                  <ScrollText className="w-6 h-6 mr-3" />
                  <h2 className="text-xl font-bold uppercase tracking-wider">Quest Rules</h2>
                </div>
                <div className="space-y-4">
                  {mission.questRules.map((rule, i) => (
                    <div key={i}>
                      <h3 className="text-white font-bold mb-2 uppercase text-sm tracking-widest">{rule.title}</h3>
                      <p className="text-stone-400 text-sm leading-relaxed whitespace-pre-line">
                        {rule.content}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
