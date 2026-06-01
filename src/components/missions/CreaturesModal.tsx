import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Ghost } from "lucide-react";
import { creatureCategories } from "../../data/creatures";
import { useSearchParams } from "react-router-dom";

interface CreaturesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowTooltip: (name: string, type: 'skill' | 'trait' | 'spell') => void;
}

export const CreaturesModal: React.FC<CreaturesModalProps> = ({ isOpen, onClose, onShowTooltip }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCategory = searchParams.get("category") || creatureCategories[0]?.category;

  const setCategory = (category: string) => {
    setSearchParams(prev => {
      prev.set("category", category);
      return prev;
    });
  };

  const currentCategory = creatureCategories.find(c => c.category === selectedCategory) || creatureCategories[0];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
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
                <h2 className="text-lg font-bold uppercase tracking-eyebrow">Creatures Database</h2>
              </div>
              <button 
                onClick={onClose}
                className="btn-icon-circle border-transparent bg-transparent shadow-none hover:bg-stone-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
              {/* Category Selector */}
              <div className="w-full md:w-64 border-b md:border-b-0 md:border-r border-stone-800 bg-surface-2/30 overflow-y-auto p-3 space-y-1 custom-scrollbar shrink-0">
                {creatureCategories.map((cat) => (
                  <button
                    key={cat.category}
                    onClick={() => setCategory(cat.category)}
                    className={`w-full text-left px-3 py-2 text-sm rounded-lg transition-colors ${
                      selectedCategory === cat.category 
                        ? 'bg-red-900/20 text-red-500 border border-red-900/50' 
                        : 'text-stone-400 hover:bg-stone-800 hover:text-stone-200'
                    }`}
                  >
                    {cat.category}
                  </button>
                ))}
              </div>

              <div className="flex-1 overflow-y-auto p-4 surface-1 custom-scrollbar">
                <div className="space-y-6">
                  {currentCategory?.creatures.map((creature, idx) => (
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

                      {/* Traits, Skills, etc. */}
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div>
                          <h4 className="text-stone-300 font-bold uppercase text-[10px] tracking-eyebrow mb-2 border-b border-stone-800 pb-1">Skills</h4>
                          <div className="flex flex-wrap gap-1.5">
                            {creature.skills.map((skill, sIdx) => (
                              <button 
                                key={sIdx} 
                                onClick={() => onShowTooltip(skill, 'skill')}
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
                                onClick={() => onShowTooltip(trait, 'trait')}
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
                                      onClick={() => onShowTooltip(spell, 'spell')}
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
                                      onClick={() => onShowTooltip(art, 'trait')}
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
  );
};
