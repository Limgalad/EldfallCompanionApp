import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { rules, traits, skills, classes, combatArtCategories, states, RuleSection, CombatArtCategory, Trait, Skill, State, ClassInfo, CombatArt } from "../data/rules";
import { ArrowLeft, Search, BookOpen, Shield, Zap, Sparkles, Users, Sword, Activity, Info, X } from "lucide-react";

export default function RulesWiki({ onBack }: { onBack: () => void }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<"mechanics" | "states" | "traits" | "skills" | "classes" | "combatArts">("mechanics");
  const [selectedItem, setSelectedItem] = useState<
    | { type: "mechanics"; data: RuleSection }
    | { type: "states"; data: State }
    | { type: "traits"; data: Trait }
    | { type: "skills"; data: Skill }
    | { type: "combatArts"; data: CombatArtCategory }
    | { type: "classes"; data: ClassInfo }
    | null
  >(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  const filteredRules = rules.filter(r => 
    r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    r.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
    r.subsections?.some(s => s.title.toLowerCase().includes(searchQuery.toLowerCase()) || s.content.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const filteredStates = states.filter(s => 
    s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredTraits = traits.filter(t => 
    t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    t.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredSkills = skills.filter(s => 
    s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredClasses = classes.filter(c => 
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.abilities.some(a => a.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const filteredCombatArts = combatArtCategories.filter(cac => 
    cac.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cac.flavorText.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cac.ruleText.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cac.levels.some(l => l.name.toLowerCase().includes(searchQuery.toLowerCase()) || l.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

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

        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Rules Wiki</h1>
          
          <div className="relative max-w-2xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-500 w-5 h-5" />
            <input
              type="text"
              placeholder="Search rules, traits, skills, or combat arts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-stone-900 border border-stone-800 rounded-full py-3 pl-12 pr-12 text-white focus:outline-none focus:border-red-500/50 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-500 hover:text-stone-300 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </header>

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
          <AnimatePresence mode="wait">
            {activeTab === "mechanics" && (
              <motion.div
                key="mechanics"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
              >
                {filteredRules.map((section) => (
                  <div 
                    key={section.id}
                    className="eldfall-card p-5 cursor-pointer group"
                    onClick={() => setSelectedItem({ type: "mechanics", data: section })}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-xs font-display uppercase tracking-widest text-red-500/70">{section.category}</span>
                      <Sparkles className="w-4 h-4 text-stone-700 group-hover:text-red-500 transition-colors" />
                    </div>
                    <h2 className="text-lg font-bold text-white mb-2 group-hover:text-red-500 transition-colors">{section.title}</h2>
                    <p className="text-stone-400 text-sm leading-relaxed line-clamp-3">{section.content}</p>
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
                {filteredStates.map((state) => (
                  <div 
                    key={state.name} 
                    className="eldfall-card p-4 cursor-pointer group"
                    onClick={() => setSelectedItem({ type: "states", data: state })}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-base font-bold text-white group-hover:text-red-500 transition-colors">{state.name}</h3>
                      <Info className="w-4 h-4 text-stone-700 group-hover:text-red-500 transition-colors" />
                    </div>
                    <p className="text-stone-400 text-xs leading-relaxed line-clamp-3">{state.description}</p>
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
                {filteredTraits.map((trait) => (
                  <div 
                    key={trait.name} 
                    className="eldfall-card p-4 cursor-pointer group"
                    onClick={() => setSelectedItem({ type: "traits", data: trait })}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-base font-bold text-white group-hover:text-red-500 transition-colors">{trait.name}</h3>
                      <Info className="w-4 h-4 text-stone-700 group-hover:text-red-500 transition-colors" />
                    </div>
                    <p className="text-stone-400 text-xs leading-relaxed line-clamp-3">{trait.description}</p>
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
                {filteredSkills.map((skill) => (
                  <div 
                    key={skill.name} 
                    className="eldfall-card p-4 cursor-pointer group"
                    onClick={() => setSelectedItem({ type: "skills", data: skill })}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-base font-bold text-white group-hover:text-red-500 transition-colors">{skill.name}</h3>
                      <Info className="w-4 h-4 text-stone-700 group-hover:text-red-500 transition-colors" />
                    </div>
                    <p className="text-stone-400 text-xs leading-relaxed line-clamp-3">{skill.description}</p>
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
                {filteredCombatArts.map((cac) => (
                  <div 
                    key={cac.name} 
                    className="eldfall-card p-5 cursor-pointer group"
                    onClick={() => setSelectedItem({ type: "combatArts", data: cac })}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-xs font-display uppercase tracking-widest text-red-500/70">Combat Art</span>
                      <Sword className="w-4 h-4 text-stone-700 group-hover:text-red-500 transition-colors" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-red-500 transition-colors">{cac.name}</h3>
                    <div className="space-y-2">
                      <p className="text-stone-300 text-sm leading-relaxed line-clamp-2">{cac.ruleText}</p>
                      <p className="text-stone-400 text-xs leading-relaxed italic line-clamp-2">{cac.flavorText}</p>
                    </div>
                    <div className="mt-4 flex items-center text-xs text-stone-500 uppercase tracking-widest">
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
                {filteredClasses.map((cls) => (
                  <div 
                    key={cls.name} 
                    className="eldfall-card p-5 cursor-pointer group"
                    onClick={() => setSelectedItem({ type: "classes", data: cls })}
                  >
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-red-500 transition-colors">{cls.name}</h3>
                    <p className="text-stone-400 text-xs leading-relaxed mb-4 italic line-clamp-2">{cls.description}</p>
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
                className="relative bg-stone-900 border border-stone-800 rounded-xl max-w-3xl w-full max-h-[85vh] overflow-y-auto p-6 shadow-2xl"
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-[10px] font-display uppercase tracking-widest text-red-500 mb-1 block">
                      {selectedItem.type === "mechanics" ? selectedItem.data.category : selectedItem.type.replace(/([A-Z])/g, ' $1').trim()}
                    </span>
                    <h2 className="text-2xl font-bold text-white">{selectedItem.data.name || selectedItem.data.title}</h2>
                  </div>
                  <button 
                    onClick={() => setSelectedItem(null)}
                    className="text-stone-500 hover:text-white transition-colors"
                  >
                    <ArrowLeft className="w-5 h-5 rotate-90" />
                  </button>
                </div>

                <div className="space-y-6">
                  <p className="text-stone-300 text-sm leading-relaxed whitespace-pre-wrap">{selectedItem.data.description || selectedItem.data.content}</p>
                  
                  {selectedItem.type === "mechanics" && selectedItem.data.subsections && (
                    <div className="space-y-4">
                      {selectedItem.data.subsections.map((sub: { title: string; content: string }, i: number) => (
                        <div key={i} className="border-l-2 border-red-900/30 pl-4">
                          <h4 className="text-white font-bold mb-1 uppercase text-xs tracking-widest">{sub.title}</h4>
                          <p className="text-stone-400 text-xs leading-relaxed">{sub.content}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {selectedItem.type === "classes" && selectedItem.data.abilities && (
                    <div className="space-y-3">
                      <h4 className="text-white font-bold uppercase text-xs tracking-widest border-b border-stone-800 pb-2">Class Abilities</h4>
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
                        <h4 className="text-white font-bold uppercase text-xs tracking-widest border-b border-stone-800 pb-2">Levels</h4>
                        <div className="space-y-3">
                          {selectedItem.data.levels.map((level: CombatArt, i: number) => (
                            <div key={i} className="bg-stone-950/30 border border-stone-800/50 rounded-lg p-3">
                              <div className="flex items-center justify-between mb-2">
                                <h5 className="text-red-500 text-sm font-bold">{level.name}</h5>
                                <span className="text-[10px] font-display uppercase tracking-widest text-stone-500 px-2 py-0.5 bg-stone-900 rounded border border-stone-800">
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
      </div>
    </div>
  );
}

function TabButton({ active, onClick, icon, label }: { active: boolean; onClick: () => void; icon: React.ReactNode; label: string }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center space-x-2 px-4 py-3 text-xs md:text-sm font-display uppercase tracking-widest transition-all relative ${
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
