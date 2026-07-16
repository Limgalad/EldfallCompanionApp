import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, Map as MapIcon, Target, ScrollText, Trophy, Info, X, Ghost, AlertCircle } from "lucide-react";
import { Mission } from "../../data/missions";
import { creatureCategories, Creature } from "../../data/creatures";
import { CollapsibleSection } from "./CollapsibleSection";
import { CreatureCard } from "./CreatureCard";

interface MissionDetailProps {
  mission: Mission;
  onBack: () => void;
  onShowTooltip: (name: string, type: 'skill' | 'trait' | 'spell' | 'combatArt') => void;
}

export const MissionDetailView: React.FC<MissionDetailProps> = ({ 
  mission, 
  onBack, 
  onShowTooltip 
}) => {
  const [quickCreature, setQuickCreature] = useState<Creature | null>(null);

  const handleQuickView = (tier: string) => {
    // Find in all categories now
    for (const cat of creatureCategories) {
      const creature = cat.creatures.find(c => c.tier === tier);
      if (creature) {
        setQuickCreature(creature);
        break;
      }
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
                      <li key={i} className={`flex items-start ${isImportant ? 'text-amber-500 font-bold' : ''}`}>
                        {isImportant ? (
                          <AlertCircle className="w-4 h-4 mr-3 mt-1 flex-shrink-0 text-amber-600" />
                        ) : (
                          <span className="text-red-950 mr-3 mt-1.5 font-bold">•</span>
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
                <CreatureCard creature={quickCreature} variant="detail" onShowTooltip={onShowTooltip} />
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
};
