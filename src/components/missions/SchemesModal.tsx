import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, BookOpen } from "lucide-react";
import { questSchemes, Faction } from "../../data/schemes";
import { useSearchParams } from "react-router-dom";

interface SchemesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SchemesModal: React.FC<SchemesModalProps> = ({ isOpen, onClose }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedFaction = (searchParams.get("faction") as Faction) || "Neutral";

  const setSelectedFaction = (faction: Faction) => {
    setSearchParams(prev => {
      prev.set("faction", faction);
      return prev;
    });
  };

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
            className="surface-overlay rounded-xl w-full max-w-4xl max-h-[90vh] flex flex-col"
          >
            <div className="p-4 border-b border-stone-800 flex justify-between items-center bg-surface-2/50">
              <div className="flex items-center text-red-500">
                <BookOpen className="w-5 h-5 mr-3" />
                <h2 className="text-xl font-bold uppercase tracking-eyebrow">Quest Schemes</h2>
              </div>
              <button 
                onClick={onClose}
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
  );
};
