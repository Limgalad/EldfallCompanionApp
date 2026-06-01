import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useParams, useNavigate } from "react-router-dom";
import { missions } from "../data/missions";
import { skills as allSkills, traits as allTraits } from "../data/rules";
import { spellSchools } from "../data/spells";
import { ArrowLeft, Map as MapIcon, BookOpen, X, Ghost } from "lucide-react";
import MetaTags from "./MetaTags";
import { MissionDetailView } from "./missions/MissionDetailView";
import { SchemesModal } from "./missions/SchemesModal";
import { CreaturesModal } from "./missions/CreaturesModal";

export default function MissionOverview({ onBack }: { onBack: () => void }) {
  const { missionId, view } = useParams();
  const navigate = useNavigate();

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

  const structuredData = useMemo(() => {
    if (!selectedMission) return null;
    return {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": `How to play ${selectedMission.title} mission in Eldfall Chronicles`,
      "description": selectedMission.description,
      "url": `https://eldfallcompanion.tabletophub.nl/missions/${selectedMission.id}`,
      "image": selectedMission.mapImage ? `https://eldfallcompanion.tabletophub.nl${selectedMission.mapImage}` : undefined,
      "step": [
        {
          "@type": "HowToSection",
          "name": "Setup",
          "itemListElement": selectedMission.setup.map((s, i) => ({
            "@type": "HowToStep",
            "position": i + 1,
            "text": s
          }))
        },
        ...(selectedMission.questRules ? selectedMission.questRules.map(r => ({
          "@type": "HowToSection",
          "name": r.title,
          "itemListElement": [{
            "@type": "HowToStep",
            "text": r.content
          }]
        })) : [])
      ]
    };
  }, [selectedMission]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedMission]);

  return (
    <div className="min-h-screen bg-stone-950">
      <MetaTags 
        title={selectedMission ? `${selectedMission.title} - Quest Overview` : showSchemes ? "Quest Schemes - Quest Overview" : showCreatures ? "Creatures Database - Quest Overview" : "Quest Overview"}
        description={selectedMission ? selectedMission.description : "Explore Eldfall Chronicles Season 1 missions, objective markers, and quest schemes."}
        image={selectedMission?.mapImage ? `https://eldfallcompanion.tabletophub.nl${selectedMission.mapImage}` : undefined}
        type={selectedMission ? "howto" : "website"}
        structuredData={structuredData}
        canonicalPath={selectedMission ? `/missions/${selectedMission.id}` : showSchemes ? "/missions/v/schemes" : showCreatures ? "/missions/v/creatures" : "/missions"}
      />
      
      {selectedMission ? (
        <MissionDetailView 
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

            <div className="mt-20 p-8 rounded-xl border border-stone-900 bg-surface-2/20 text-center">
              <h3 className="text-stone-500 font-display uppercase tracking-eyebrow text-sm mb-2">Quest Archive</h3>
              <p className="text-stone-600 italic text-sm">Previous seasons will be archived here.</p>
            </div>
          </main>
        </>
      )}

      {/* Modals */}
      <SchemesModal 
        isOpen={showSchemes} 
        onClose={() => navigate("/missions")} 
      />
      
      <CreaturesModal 
        isOpen={showCreatures} 
        onClose={() => navigate("/missions")}
        onShowTooltip={handleShowTooltip}
      />

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
