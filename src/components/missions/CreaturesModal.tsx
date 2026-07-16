import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Ghost } from "lucide-react";
import { creatureCategories } from "../../data/creatures";
import { useSearchParams } from "react-router-dom";
import { CreatureCard } from "./CreatureCard";

interface CreaturesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowTooltip: (name: string, type: 'skill' | 'trait' | 'spell' | 'combatArt') => void;
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
                    <CreatureCard key={idx} creature={creature} variant="list" onShowTooltip={onShowTooltip} />
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
