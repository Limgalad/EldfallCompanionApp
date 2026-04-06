import { motion, AnimatePresence } from "motion/react";
import { missions, Mission } from "../data/missions";
import { questSchemes, SchemeCategory } from "../data/schemes";
import { creatureCategories, Creature } from "../data/creatures";
import { ArrowLeft, Map as MapIcon, Target, ScrollText, Trophy, BookOpen, X, Ghost, ChevronDown, Info } from "lucide-react";
import { useState, useEffect, ReactNode } from "react";

export default function MissionOverview({ onBack }: { onBack: () => void }) {
  const [selectedMission, setSelectedMission] = useState<Mission | null>(null);
  const [showSchemes, setShowSchemes] = useState(false);
  const [selectedFaction, setSelectedFaction] = useState<string>("Neutral");
  const [showCreatures, setShowCreatures] = useState(false);

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
                {/* Creatures List */}
                <div className="flex-1 overflow-y-auto p-4 bg-stone-950 custom-scrollbar">
                  <div className="space-y-6">
                    {creatureCategories[0]?.creatures.map((creature, idx) => (
                      <div key={idx} className="p-4 rounded border border-stone-800 bg-stone-900/20">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h3 className="text-xl font-bold text-white mb-1">{creature.name}</h3>
                            <div className="flex flex-wrap gap-2 mb-1">
                              <span className="text-stone-500 text-[10px] uppercase font-bold tracking-tighter">Size: {creature.size}</span>
                              <span className="text-stone-500 text-[10px] uppercase font-bold tracking-tighter">Type: {creature.type}</span>
                              {creature.class && <span className="text-stone-500 text-[10px] uppercase font-bold tracking-tighter">Class: {creature.class}</span>}
                              {creature.alignment && <span className="text-stone-500 text-[10px] uppercase font-bold tracking-tighter">Alignment: {creature.alignment}</span>}
                              {creature.cost && <span className="text-stone-500 text-[10px] uppercase font-bold tracking-tighter">Cost: {creature.cost}</span>}
                              {creature.weight && <span className="text-stone-500 text-[10px] uppercase font-bold tracking-tighter">Weight: {creature.weight}</span>}
                            </div>
                            <p className="text-stone-400 text-xs italic">{creature.description}</p>
                          </div>
                          <span className="px-2 py-0.5 bg-stone-800 text-stone-300 text-[10px] font-display uppercase tracking-widest rounded border border-stone-700">
                            {creature.tier}
                          </span>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-11 gap-1 mb-4">
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
                                    {weapon.qty !== undefined && <span>QTY: {weapon.qty}</span>}
                                    {weapon.wgt !== undefined && <span>WGT: {weapon.wgt}</span>}
                                  </div>
                                </div>
                                <p className="text-stone-400 italic text-[10px]">{weapon.effects}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Traits, Skills, Spellcrafts, Combat Arts & Behavior */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                          <div>
                            <h4 className="text-stone-300 font-bold uppercase text-[10px] tracking-widest mb-2 border-b border-stone-800 pb-1">Skills</h4>
                            <div className="flex flex-wrap gap-1.5">
                              {creature.skills.map((skill, sIdx) => (
                                <span key={sIdx} className="px-1.5 py-0.5 bg-stone-900 border border-stone-800 text-red-400 text-[10px] rounded">
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
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
                          {(creature.spellcrafts || creature.combatArts) && (
                            <div>
                              {creature.spellcrafts && creature.spellcrafts.length > 0 && (
                                <div className="mb-2">
                                  <h4 className="text-stone-300 font-bold uppercase text-[10px] tracking-widest mb-2 border-b border-stone-800 pb-1">Spellcrafts</h4>
                                  <div className="flex flex-wrap gap-1.5">
                                    {creature.spellcrafts.map((spell, sIdx) => (
                                      <span key={sIdx} className="px-1.5 py-0.5 bg-stone-900 border border-stone-800 text-blue-400 text-[10px] rounded">
                                        {spell}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              )}
                              {creature.combatArts && creature.combatArts.length > 0 && (
                                <div>
                                  <h4 className="text-stone-300 font-bold uppercase text-[10px] tracking-widest mb-2 border-b border-stone-800 pb-1">Combat Arts</h4>
                                  <div className="flex flex-wrap gap-1.5">
                                    {creature.combatArts.map((art, aIdx) => (
                                      <span key={aIdx} className="px-1.5 py-0.5 bg-stone-900 border border-stone-800 text-amber-400 text-[10px] rounded">
                                        {art}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          )}
                          <div className={!(creature.spellcrafts || creature.combatArts) ? "lg:col-span-2" : ""}>
                            <h4 className="text-stone-300 font-bold uppercase text-[10px] tracking-widest mb-2 border-b border-stone-800 pb-1">Behavior</h4>
                            <p className="text-stone-400 text-xs leading-relaxed whitespace-pre-wrap">{creature.behavior}</p>
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

function CollapsibleSection({ title, children, defaultOpen = false }: { title: string, children: ReactNode, defaultOpen?: boolean }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  
  return (
    <div className="border border-stone-800 rounded-lg overflow-hidden bg-stone-900/30">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 flex items-center justify-between bg-stone-900/50 hover:bg-stone-800 transition-colors text-left"
      >
        <span className="text-white font-bold uppercase text-sm tracking-widest">{title}</span>
        <ChevronDown className={`w-4 h-4 text-stone-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="p-4 border-t border-stone-800">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MissionDetail({ mission, onBack }: { mission: Mission; onBack: () => void }) {
  const [quickCreature, setQuickCreature] = useState<Creature | null>(null);

  const handleQuickView = (tier: string) => {
    const creature = creatureCategories[0].creatures.find(c => c.tier === tier);
    if (creature) {
      setQuickCreature(creature);
    }
  };

  return (
    <div className="min-h-screen bg-stone-950 py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center text-stone-400 hover:text-red-500 transition-colors mb-6 group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Quests
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

              {mission.specialEndConditions && mission.specialEndConditions.length > 0 && (
                <section className="eldfall-card p-6 border-amber-900/20">
                  <div className="flex items-center mb-4 text-amber-500">
                    <ScrollText className="w-6 h-6 mr-3" />
                    <h2 className="text-xl font-bold uppercase tracking-wider">Special End Conditions</h2>
                  </div>
                  <CollapsibleSection title="End Conditions" defaultOpen={true}>
                    <ul className="space-y-3 text-stone-300">
                      {mission.specialEndConditions.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-amber-900 mr-3 mt-1">•</span>
                          <span className="text-sm leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CollapsibleSection>
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

              {mission.questRules && mission.questRules.length > 0 && (
                <section className="eldfall-card p-6">
                  <div className="flex items-center mb-4 text-red-500">
                    <ScrollText className="w-6 h-6 mr-3" />
                    <h2 className="text-xl font-bold uppercase tracking-wider">Quest Rules</h2>
                  </div>
                  <div className="space-y-3">
                    {mission.questRules.map((rule, i) => (
                      <div key={i}>
                        <CollapsibleSection title={rule.title} defaultOpen={i === 0}>
                          <div className="space-y-4">
                            <p className="text-stone-400 text-sm leading-relaxed whitespace-pre-line">
                              {rule.content}
                            </p>
                            {mission.id === "supply-run" && rule.title === "Hostile Guards" && (
                              <button 
                                onClick={() => handleQuickView("Tier III")}
                                className="flex items-center px-3 py-2 bg-red-900/20 text-red-400 border border-red-900/30 rounded text-xs hover:bg-red-900/30 transition-colors group"
                              >
                                <Info className="w-4 h-4 mr-2" />
                                View Tier III Hostile Stats & Behavior
                              </button>
                            )}
                          </div>
                        </CollapsibleSection>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Quick Creature View Modal */}
      <AnimatePresence>
        {quickCreature && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={() => setQuickCreature(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-stone-950 border border-stone-800 rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden"
            >
              <div className="p-4 border-b border-stone-800 flex justify-between items-center bg-stone-900/50">
                <div className="flex items-center text-red-500">
                  <Ghost className="w-5 h-5 mr-3" />
                  <h2 className="text-xl font-bold uppercase tracking-widest">{quickCreature.name} Reference</h2>
                </div>
                <button 
                  onClick={() => setQuickCreature(null)}
                  className="text-stone-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
                <div className="mb-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{quickCreature.name}</h3>
                      <div className="flex flex-wrap gap-3 mb-2">
                        <span className="text-stone-500 text-xs uppercase font-bold tracking-tighter">Size: {quickCreature.size}</span>
                        <span className="text-stone-500 text-xs uppercase font-bold tracking-tighter">Type: {quickCreature.type}</span>
                        {quickCreature.class && <span className="text-stone-500 text-xs uppercase font-bold tracking-tighter">Class: {quickCreature.class}</span>}
                        {quickCreature.alignment && <span className="text-stone-500 text-xs uppercase font-bold tracking-tighter">Alignment: {quickCreature.alignment}</span>}
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-stone-800 text-stone-300 text-xs font-display uppercase tracking-widest rounded border border-stone-700">
                      {quickCreature.tier}
                    </span>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-11 gap-1.5 mb-6">
                  {Object.entries(quickCreature.stats).map(([key, value]) => (
                    <div key={key} className="bg-stone-950 border border-stone-800 rounded p-2 text-center">
                      <div className="text-[10px] text-stone-500 uppercase font-bold mb-1">{key}</div>
                      <div className="text-white text-sm font-mono">{value}</div>
                    </div>
                  ))}
                </div>

                {/* Weapons */}
                <div className="mb-6">
                  <h4 className="text-stone-300 font-bold uppercase text-xs tracking-widest mb-3 border-b border-stone-800 pb-2">Weapons</h4>
                  <div className="space-y-3">
                    {quickCreature.weapons.map((weapon, wIdx) => (
                      <div key={wIdx} className="bg-stone-900/30 border border-stone-800 rounded p-3">
                        <div className="flex flex-wrap items-center gap-4 mb-2">
                          <span className="font-bold text-red-500 text-sm">{weapon.name}</span>
                          <span className="text-stone-500 text-[10px] uppercase">{weapon.type}</span>
                          <div className="flex gap-3 text-stone-400 font-mono text-xs">
                            <span>PW: {weapon.pw}</span>
                            <span>RCH: {weapon.rch}</span>
                            <span>STK: {weapon.stk}</span>
                            {weapon.qty !== undefined && <span>QTY: {weapon.qty}</span>}
                            {weapon.wgt !== undefined && <span>WGT: {weapon.wgt}</span>}
                          </div>
                        </div>
                        <p className="text-stone-400 italic text-xs">{weapon.effects}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Traits, Skills, Spellcrafts, Combat Arts & Behavior */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div>
                    <h4 className="text-stone-300 font-bold uppercase text-xs tracking-widest mb-3 border-b border-stone-800 pb-2">Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {quickCreature.skills.map((skill, sIdx) => (
                        <span key={sIdx} className="px-2 py-1 bg-stone-900 border border-stone-800 text-red-400 text-xs rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-stone-300 font-bold uppercase text-xs tracking-widest mb-3 border-b border-stone-800 pb-2">Traits</h4>
                    <div className="flex flex-wrap gap-2">
                      {quickCreature.traits.map((trait, tIdx) => (
                        <span key={tIdx} className="px-2 py-1 bg-stone-900 border border-stone-800 text-stone-300 text-xs rounded">
                          {trait}
                        </span>
                      ))}
                    </div>
                  </div>
                  {(quickCreature.spellcrafts || quickCreature.combatArts) && (
                    <div>
                      {quickCreature.spellcrafts && quickCreature.spellcrafts.length > 0 && (
                        <div className="mb-4">
                          <h4 className="text-stone-300 font-bold uppercase text-xs tracking-widest mb-3 border-b border-stone-800 pb-2">Spellcrafts</h4>
                          <div className="flex flex-wrap gap-2">
                            {quickCreature.spellcrafts.map((spell, sIdx) => (
                              <span key={sIdx} className="px-2 py-1 bg-stone-900 border border-stone-800 text-blue-400 text-xs rounded">
                                {spell}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      {quickCreature.combatArts && quickCreature.combatArts.length > 0 && (
                        <div>
                          <h4 className="text-stone-300 font-bold uppercase text-xs tracking-widest mb-3 border-b border-stone-800 pb-2">Combat Arts</h4>
                          <div className="flex flex-wrap gap-2">
                            {quickCreature.combatArts.map((art, aIdx) => (
                              <span key={aIdx} className="px-2 py-1 bg-stone-900 border border-stone-800 text-amber-400 text-xs rounded">
                                {art}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                  <div className={!(quickCreature.spellcrafts || quickCreature.combatArts) ? "lg:col-span-2" : ""}>
                    <h4 className="text-stone-300 font-bold uppercase text-xs tracking-widest mb-3 border-b border-stone-800 pb-2">Behavior</h4>
                    <p className="text-stone-400 text-xs leading-relaxed whitespace-pre-wrap font-sans">{quickCreature.behavior}</p>
                  </div>
                </div>
              </div>
              
              <div className="p-4 border-t border-stone-800 bg-stone-900/50 text-center">
                <button 
                  onClick={() => setQuickCreature(null)}
                  className="px-6 py-2 bg-stone-800 text-white rounded hover:bg-stone-700 transition-colors text-sm uppercase tracking-widest font-bold"
                >
                  Close Reference
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
