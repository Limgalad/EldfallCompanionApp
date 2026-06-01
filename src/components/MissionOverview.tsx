import { motion, AnimatePresence } from "motion/react";
import { useParams, useNavigate } from "react-router-dom";
import { missions, Mission } from "../data/missions";
import { questSchemes, Faction } from "../data/schemes";
import { creatureCategories, Creature } from "../data/creatures";
import { skills as allSkills, traits as allTraits } from "../data/rules";
import { spellSchools } from "../data/spells";
import { ArrowLeft, Map as MapIcon, Target, ScrollText, Trophy, BookOpen, X, Ghost, ChevronDown, Info, AlertCircle } from "lucide-react";
import { useState, useEffect, ReactNode } from "react";
import MetaTags from "./MetaTags";

export default function MissionOverview({ onBack }: { onBack: () => void }) {
  const { missionId, view } = useParams();
  const navigate = useNavigate();

  const [selectedFaction, setSelectedFaction] = useState<Faction>("Neutral");
  const [activeTooltip, setActiveTooltip] = useState<{ title: string, content: string } | null>(null);

  const selectedMission = missionId && !["schemes", "creatures"].includes(missionId) ? missions.find(m => m.id === missionId) || null : null;
  const showSchemes = view === "schemes" || missionId === "schemes";
  const showCreatures = view === "creatures" || missionId === "creatures";

  const getInfo = (name: string, type: 'skill' | 'trait' | 'spell') => {
    const baseName = name.split(' ')[0];
    
    if (type === 'skill') {
      const skill = allSkills.find(s => s.name.split(' ')[0] === baseName);
      return skill ? { title: skill.name, content: skill.description } : null;
    }
    if (type === 'trait') {
      const trait = allTraits.find(t => t.name.split(' ')[0] === baseName);
      return trait ? { title: trait.name, content: trait.description } : null;
    }
    if (type === 'spell') {
      for (const school of spellSchools) {
        const spell = school.spells.find(s => s.name.split(' ')[0] === baseName);
        if (spell) return { title: spell.name, content: spell.effect };
      }
    }
    return null;
  };

  const handleShowTooltip = (name: string, type: 'skill' | 'trait' | 'spell') => {
    setActiveTooltip(getInfo(name, type));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedMission]);

  return (
    <div className="min-h-screen bg-stone-950">
      <MetaTags 
        title={selectedMission ? `${selectedMission.title} - Quest Overview` : showSchemes ? "Quest Schemes - Quest Overview" : showCreatures ? "Creatures Database - Quest Overview" : "Quest Overview"}
        description={selectedMission ? selectedMission.description : "Explore Eldfall Chronicles Season 1 missions, objective markers, and quest schemes."}
        image={selectedMission?.mapImage ? `https://eldfallcompanion.tabletophub.nl${selectedMission.mapImage}` : undefined}
      />
      {selectedMission ? (
          <MissionDetail 
            mission={selectedMission} 
            onBack={() => navigate("/missions")} 
            onShowTooltip={handleShowTooltip}
          />
      ) : (
        <>
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
                  <MapIcon className="w-6 h-6 text-red-500" />
                  <h1 className="h1-standard">Quest Overview</h1>
                </div>
              </div>
              <div className="hidden sm:flex items-center gap-3">
                <button 
                  onClick={() => navigate("/missions/v/schemes")}
                  className="btn-action"
                >
                  <BookOpen className="w-4 h-4 mr-2" />
                  Schemes
                </button>
                <button 
                  onClick={() => navigate("/missions/v/creatures")}
                  className="btn-action"
                >
                  <Ghost className="w-4 h-4 mr-2" />
                  Creatures
                </button>
              </div>
            </div>
          </header>

          <main className="max-w-7xl mx-auto px-4 py-8">
            <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <p className="text-lg text-stone-400 font-light tracking-eyebrow uppercase">Season 1</p>
              </div>
              <div className="flex sm:hidden flex-col gap-3">
                <button 
                  onClick={() => navigate("/missions/v/schemes")}
                  className="btn-action w-full"
                >
                  <BookOpen className="w-4 h-4 mr-2" />
                  Quest Schemes
                </button>
                <button 
                  onClick={() => navigate("/missions/v/creatures")}
                  className="btn-action w-full"
                >
                  <Ghost className="w-4 h-4 mr-2" />
                  Creatures Database
                </button>
              </div>
            </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {missions.map((mission, index) => (
            <motion.div
              key={mission.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onClick={() => navigate(`/missions/${mission.id}`)}
              className="eldfall-card eldfall-card-interactive p-4 group"
            >
              <div className="aspect-video mb-4 overflow-hidden rounded-xl border border-stone-800 bg-stone-900/50 flex items-center justify-center">
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
                    <span className="text-[10px] uppercase tracking-eyebrow opacity-40">No Tactical Map</span>
                  </div>
                )}
              </div>
              <h2 className="text-lg font-bold mb-2 group-hover:text-red-500 transition-colors">
                {mission.title}
              </h2>
              <p className="body-xs line-clamp-3">
                {mission.description}
              </p>
              <div className="mt-4 flex items-center text-red-500 text-xs font-medium">
                View Mission Details <ArrowLeft className="ml-2 w-3 h-3 rotate-180" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Archive Placeholder */}
        <div className="mt-20 p-8 rounded-xl border border-stone-900 bg-surface-2/20 text-center">
          <h3 className="text-stone-500 font-display uppercase tracking-eyebrow text-sm mb-2">Quest Archive</h3>
          <p className="text-stone-600 italic text-sm">Previous seasons will be archived here.</p>
        </div>
          </main>
        </>
      )}

    {/* Quest Schemes Modal */}
      <AnimatePresence>
        {showSchemes && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => navigate("/missions")}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="surface-overlay rounded-xl w-full max-w-4xl max-h-[90vh] flex flex-col"
            >
              <div className="p-4 border-b border-stone-800 flex justify-between items-center bg-surface-2/50">
                <div className="flex items-center text-red-500">
                  <BookOpen className="w-5 h-5 mr-3" />
                  <h2 className="text-xl font-bold uppercase tracking-eyebrow">Quest Schemes</h2>
                </div>
                <button 
                  onClick={() => navigate("/missions")}
                  className="btn-icon-circle border-transparent bg-transparent shadow-none hover:bg-stone-800"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
                {/* Faction Selector */}
                <div className="w-full md:w-64 border-b md:border-b-0 md:border-r border-stone-800 bg-surface-2/30 overflow-y-auto p-3 space-y-1 custom-scrollbar">
                  {questSchemes.map((category) => (
                    <button
                      key={category.faction}
                      onClick={() => setSelectedFaction(category.faction)}
                      className={`w-full text-left px-3 py-2 text-sm rounded-lg transition-colors ${
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
                <div className="flex-1 overflow-y-auto p-4 surface-1 custom-scrollbar">
                  <div className="space-y-3">
                    {questSchemes.find(c => c.faction === selectedFaction)?.schemes.map((scheme, idx) => (
                      <div key={idx} className="p-3 rounded-lg border border-stone-800 bg-surface-2/20">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-base font-bold text-white">{scheme.name}</h3>
                          <span className="eldfall-chip">
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
            onClick={() => navigate("/missions")}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="surface-overlay rounded-xl w-full max-w-5xl max-h-[90vh] flex flex-col"
            >
              <div className="card-p-lg border-b border-stone-800 flex justify-between items-center bg-surface-2/50 shrink-0">
                <div className="flex items-center text-red-500">
                  <Ghost className="w-5 h-5 mr-3" />
                  <h2 className="text-lg font-bold uppercase tracking-eyebrow">Creatures</h2>
                </div>
                <button 
                  onClick={() => navigate("/missions")}
                  className="btn-icon-circle border-transparent bg-transparent shadow-none hover:bg-stone-800"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
                {/* Creatures List */}
                <div className="flex-1 overflow-y-auto p-4 surface-1 custom-scrollbar">
                  <div className="space-y-6">
                    {creatureCategories[0]?.creatures.map((creature, idx) => (
                      <div key={idx} className="p-4 rounded-lg border border-stone-800 bg-surface-2/20">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h3 className="text-lg font-bold text-white mb-1 leading-tight">{creature.name}</h3>
                            <div className="flex flex-wrap gap-2 mb-2">
                              <span className="text-stone-500 text-[10px] uppercase font-bold tracking-meta">Size: {creature.size}</span>
                              <span className="text-stone-500 text-[10px] uppercase font-bold tracking-meta">Type: {creature.type}</span>
                              {creature.class && <span className="text-stone-500 text-[10px] uppercase font-bold tracking-meta">Class: {creature.class}</span>}
                            </div>
                            <p className="body-xs italic">{creature.description}</p>
                          </div>
                          <span className="eldfall-chip shrink-0">
                            {creature.tier}
                          </span>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-11 gap-1 mb-4">
                          {Object.entries(creature.stats).map(([key, value]) => (
                            <div key={key} className="surface-1 border border-stone-800 rounded-lg p-1.5 text-center">
                              <div className="text-[8px] text-stone-500 uppercase font-bold mb-0.5">{key}</div>
                              <div className="text-white text-xs font-mono">{value}</div>
                            </div>
                          ))}
                        </div>

                        {/* Weapons */}
                        <div className="mb-4">
                          <h4 className="text-stone-300 font-bold uppercase text-[10px] tracking-eyebrow mb-2 border-b border-stone-800 pb-1">Weapons</h4>
                          <div className="space-y-2">
                            {creature.weapons.map((weapon, wIdx) => (
                              <div key={wIdx} className="bg-stone-950/50 border border-stone-800/50 rounded-lg p-2 text-xs">
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
                            <h4 className="text-stone-300 font-bold uppercase text-[10px] tracking-eyebrow mb-2 border-b border-stone-800 pb-1">Skills</h4>
                            <div className="flex flex-wrap gap-1.5">
                              {creature.skills.map((skill, sIdx) => (
                                <button 
                                  key={sIdx} 
                                  onClick={() => setActiveTooltip(getInfo(skill, 'skill'))}
                                  className="px-1.5 py-0.5 bg-stone-900 border border-stone-800 text-red-400 text-[10px] rounded-lg hover:bg-stone-800 transition-colors"
                                >
                                  {skill}
                                </button>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h4 className="text-stone-300 font-bold uppercase text-[10px] tracking-eyebrow mb-2 border-b border-stone-800 pb-1">Traits</h4>
                            <div className="flex flex-wrap gap-1.5">
                              {creature.traits.map((trait, tIdx) => (
                                <button 
                                  key={tIdx} 
                                  onClick={() => setActiveTooltip(getInfo(trait, 'trait'))}
                                  className="px-1.5 py-0.5 bg-stone-900 border border-stone-800 text-stone-300 text-[10px] rounded-lg hover:bg-stone-800 transition-colors"
                                >
                                  {trait}
                                </button>
                              ))}
                            </div>
                          </div>
                          {(creature.spellcrafts || creature.combatArts) && (
                            <div>
                              {creature.spellcrafts && creature.spellcrafts.length > 0 && (
                                <div className="mb-2">
                                  <h4 className="text-stone-300 font-bold uppercase text-[10px] tracking-eyebrow mb-2 border-b border-stone-800 pb-1">Spellcrafts</h4>
                                  <div className="flex flex-wrap gap-1.5">
                                    {creature.spellcrafts.map((spell, sIdx) => (
                                      <button 
                                        key={sIdx} 
                                        onClick={() => setActiveTooltip(getInfo(spell, 'spell'))}
                                        className="px-1.5 py-0.5 bg-stone-900 border border-stone-800 text-blue-400 text-[10px] rounded-lg hover:bg-stone-800 transition-colors"
                                      >
                                        {spell}
                                      </button>
                                    ))}
                                  </div>
                                </div>
                              )}
                              {creature.combatArts && creature.combatArts.length > 0 && (
                                <div>
                                  <h4 className="text-stone-300 font-bold uppercase text-[10px] tracking-eyebrow mb-2 border-b border-stone-800 pb-1">Combat Arts</h4>
                                  <div className="flex flex-wrap gap-1.5">
                                    {creature.combatArts.map((art, aIdx) => (
                                      <button 
                                        key={aIdx} 
                                        onClick={() => setActiveTooltip(getInfo(art, 'trait'))} // Combat arts are similar to traits in rules
                                        className="px-1.5 py-0.5 bg-stone-900 border border-stone-800 text-amber-400 text-[10px] rounded-lg hover:bg-stone-800 transition-colors"
                                      >
                                        {art}
                                      </button>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          )}
                          <div className={!(creature.spellcrafts || creature.combatArts) ? "lg:col-span-2" : ""}>
                            <h4 className="text-stone-300 font-bold uppercase text-[10px] tracking-eyebrow mb-2 border-b border-stone-800 pb-1">Behavior</h4>
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

      {/* Tooltip Modal */}
      <AnimatePresence>
        {activeTooltip && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setActiveTooltip(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="surface-overlay rounded-xl w-full max-w-md"
            >
              <div className="p-4 border-b border-stone-800 flex justify-between items-center bg-surface-1/50">
                <h3 className="text-lg font-bold text-red-500 uppercase tracking-eyebrow">{activeTooltip.title}</h3>
                <button 
                  onClick={() => setActiveTooltip(null)}
                  className="text-stone-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-6">
                <p className="text-stone-300 text-sm leading-relaxed whitespace-pre-wrap">
                  {activeTooltip.content}
                </p>
              </div>
              <div className="p-4 bg-surface-1/50 border-t border-stone-800 text-center">
                <button 
                  onClick={() => setActiveTooltip(null)}
                  className="text-xs text-stone-500 hover:text-stone-300 uppercase tracking-eyebrow transition-colors"
                >
                  Tap anywhere to close
                </button>
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
    <div className="border border-stone-800 rounded-xl overflow-hidden bg-surface-2/30">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 flex items-center justify-between bg-surface-2/50 hover:bg-stone-800 transition-colors text-left"
      >
        <span className="text-white font-bold uppercase text-sm tracking-eyebrow">{title}</span>
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

function MissionDetail({ 
  mission, 
  onBack, 
  onShowTooltip 
}: { 
  mission: Mission; 
  onBack: () => void;
  onShowTooltip: (name: string, type: 'skill' | 'trait' | 'spell') => void;
}) {
  const [quickCreature, setQuickCreature] = useState<Creature | null>(null);

  const handleQuickView = (tier: string) => {
    const creature = creatureCategories[0].creatures.find(c => c.tier === tier);
    if (creature) {
      setQuickCreature(creature);
    }
  };

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
              <MapIcon className="w-6 h-6 text-red-500" />
              <h1 className="h1-standard">Quest Detail</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 py-8">

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-8"
        >
          <header className="mb-10 text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">{mission.title}</h2>
            <p className="body-sm italic opacity-80 max-w-2xl mx-auto lg:mx-0">
              "{mission.description}"
            </p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="stack-standard">
              <section className="eldfall-card card-p-lg">
                <div className="flex items-center mb-6 text-red-500">
                  <Target className="w-5 h-5 mr-3" />
                  <h2 className="h2-standard">Setup</h2>
                </div>
                <ul className="stack-standard body-sm text-stone-300">
                  {mission.setup.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-red-900 mr-3 mt-1.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="eldfall-card card-p-lg border-red-900/20">
                <div className="flex items-center mb-6 text-red-500">
                  <Trophy className="w-5 h-5 mr-3" />
                  <h2 className="h2-standard">Results (VP)</h2>
                </div>
                <ul className="stack-standard body-sm text-stone-300">
                  {mission.results.map((item, i) => {
                    const isImportant = item.startsWith("IMPORTANT:");
                    return (
                      <li key={i} className={`flex items-start ${isImportant ? 'text-orange-500 font-bold' : ''}`}>
                        {isImportant ? (
                          <AlertCircle className="w-4 h-4 mr-3 mt-1 flex-shrink-0" />
                        ) : (
                          <span className="text-red-900 mr-3 mt-1.5">•</span>
                        )}
                        <span className="text-sm leading-relaxed">{item}</span>
                      </li>
                    );
                  })}
                </ul>
              </section>

              {mission.specialEndConditions && mission.specialEndConditions.length > 0 && (
                <section className="eldfall-card card-p-lg border-amber-900/20">
                  <div className="flex items-center mb-6 text-amber-500">
                    <ScrollText className="w-5 h-5 mr-3" />
                    <h2 className="h2-standard">Special End Conditions</h2>
                  </div>
                  <CollapsibleSection title="End Conditions" defaultOpen={true}>
                    <ul className="stack-compact body-xs text-stone-300">
                      {mission.specialEndConditions.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-amber-900 mr-3 mt-1">•</span>
                          <span className="">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CollapsibleSection>
                </section>
              )}
            </div>

            <div className={`stack-standard ${!mission.mapImage ? 'lg:col-span-2' : ''}`}>
              {mission.mapImage && (
                <section className="eldfall-card card-p-lg overflow-hidden">
                  <div className="flex items-center mb-6 text-red-500">
                    <MapIcon className="w-5 h-5 mr-3" />
                    <h2 className="h2-standard">Tactical Map</h2>
                  </div>
                  <div className="aspect-square surface-1 rounded-xl border border-stone-800 overflow-hidden shadow-inner">
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
                <section className="eldfall-card card-p-lg">
                  <div className="flex items-center mb-6 text-red-500">
                    <ScrollText className="w-5 h-5 mr-3" />
                    <h2 className="h2-standard">Quest Rules</h2>
                  </div>
                  <div className="stack-standard">
                    {mission.questRules.map((rule, i) => (
                      <div key={i}>
                        <CollapsibleSection title={rule.title} defaultOpen={i === 0}>
                          <div className="space-y-4">
                            <p className="body-sm whitespace-pre-line">
                              {rule.content}
                            </p>
                            {mission.id === "supply-run" && rule.title === "Hostile Guards" && (
                              <button 
                                onClick={() => handleQuickView("Tier III")}
                                className="flex items-center px-3 py-2 bg-red-900/20 text-red-400 border border-red-900/30 rounded-lg text-xs hover:bg-red-900/30 transition-colors group"
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
              className="surface-overlay rounded-xl w-full max-w-4xl max-h-[90vh] flex flex-col"
            >
              <div className="card-p-lg border-b border-stone-800 flex justify-between items-center bg-surface-2/50 shrink-0">
                <div className="flex items-center text-red-500">
                  <Ghost className="w-5 h-5 mr-3" />
                  <h2 className="h2-standard">{quickCreature.name} Reference</h2>
                </div>
                <button 
                  onClick={() => setQuickCreature(null)}
                  className="btn-icon-circle border-transparent bg-transparent shadow-none hover:bg-stone-800"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
                       <div className="flex-1 overflow-y-auto card-p-lg custom-scrollbar">
                <div className="mb-10">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 leading-tight">{quickCreature.name}</h3>
                      <div className="flex flex-wrap gap-3">
                        <span className="text-stone-500 text-[10px] uppercase font-bold tracking-meta">Size: {quickCreature.size}</span>
                        <span className="text-stone-500 text-[10px] uppercase font-bold tracking-meta">Type: {quickCreature.type}</span>
                        {quickCreature.class && <span className="text-stone-500 text-[10px] uppercase font-bold tracking-meta">Class: {quickCreature.class}</span>}
                      </div>
                    </div>
                    <span className="eldfall-chip">
                      {quickCreature.tier}
                    </span>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-11 gap-1 mb-8">
                  {Object.entries(quickCreature.stats).map(([key, value]) => (
                    <div key={key} className="surface-1 border border-stone-800 rounded-lg p-1.5 text-center">
                      <div className="text-[8px] text-stone-500 uppercase font-bold mb-0.5">{key}</div>
                      <div className="text-white text-xs font-mono">{value}</div>
                    </div>
                  ))}
                </div>

                {/* Weapons */}
                <div className="mb-8">
                  <h4 className="h3-standard mb-4 border-b border-stone-800 pb-2">Weapons</h4>
                  <div className="stack-standard">
                    {quickCreature.weapons.map((weapon, wIdx) => (
                      <div key={wIdx} className="bg-stone-900/30 border border-stone-800 rounded-xl p-3">
                        <div className="flex flex-wrap items-center gap-4 mb-2">
                          <span className="font-bold text-red-500 text-sm leading-none">{weapon.name}</span>
                          <span className="text-stone-500 text-[10px] uppercase">{weapon.type}</span>
                          <div className="flex gap-3 text-stone-400 font-mono text-xs">
                            <span>PW: {weapon.pw}</span>
                            <span>RCH: {weapon.rch}</span>
                            <span>STK: {weapon.stk}</span>
                          </div>
                        </div>
                        <p className="body-xs italic">{weapon.effects}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Traits, Skills, Spellcrafts, Combat Arts & Behavior */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div>
                    <h4 className="h3-standard mb-4 border-b border-stone-800 pb-2">Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {quickCreature.skills.map((skill, sIdx) => (
                        <button 
                          key={sIdx} 
                          onClick={() => onShowTooltip(skill, 'skill')}
                          className="px-2 py-0.5 bg-stone-900 border border-stone-800 text-red-400 text-[10px] rounded-lg hover:bg-stone-800 transition-colors"
                        >
                          {skill}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="h3-standard mb-4 border-b border-stone-800 pb-2">Traits</h4>
                    <div className="flex flex-wrap gap-2">
                      {quickCreature.traits.map((trait, tIdx) => (
                        <button 
                          key={tIdx} 
                          onClick={() => onShowTooltip(trait, 'trait')}
                          className="px-2 py-0.5 bg-stone-900 border border-stone-800 text-stone-300 text-[10px] rounded-lg hover:bg-stone-800 transition-colors"
                        >
                          {trait}
                        </button>
                      ))}
                    </div>
                  </div>
                  {(quickCreature.spellcrafts || quickCreature.combatArts) && (
                    <div className="stack-standard">
                      {quickCreature.spellcrafts && quickCreature.spellcrafts.length > 0 && (
                        <div>
                          <h4 className="h3-standard mb-4 border-b border-stone-800 pb-2">Spellcrafts</h4>
                          <div className="flex flex-wrap gap-2">
                            {quickCreature.spellcrafts.map((spell, sIdx) => (
                              <button 
                                key={sIdx} 
                                onClick={() => onShowTooltip(spell, 'spell')}
                                className="px-2 py-0.5 bg-stone-900 border border-stone-800 text-blue-400 text-[10px] rounded-lg hover:bg-stone-800 transition-colors"
                              >
                                {spell}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                      {quickCreature.combatArts && quickCreature.combatArts.length > 0 && (
                        <div>
                          <h4 className="h3-standard mb-4 border-b border-stone-800 pb-2">Combat Arts</h4>
                          <div className="flex flex-wrap gap-2">
                            {quickCreature.combatArts.map((art, aIdx) => (
                              <button 
                                key={aIdx} 
                                onClick={() => onShowTooltip(art, 'trait')}
                                className="px-2 py-0.5 bg-stone-900 border border-stone-800 text-amber-400 text-[10px] rounded-lg hover:bg-stone-800 transition-colors"
                              >
                                {art}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                  <div className={!(quickCreature.spellcrafts || quickCreature.combatArts) ? "lg:col-span-2" : ""}>
                    <h4 className="h3-standard mb-4 border-b border-stone-800 pb-2">Behavior</h4>
                    <p className="body-xs leading-relaxed whitespace-pre-wrap font-sans">{quickCreature.behavior}</p>
                  </div>
                </div>
              </div>
              
              <div className="card-p surface-1/50 border-t border-stone-800 text-center shrink-0">
                <button 
                  onClick={() => setQuickCreature(null)}
                  className="btn-secondary"
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
