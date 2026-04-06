import React from "react";
import { motion } from "motion/react";
import { History, X, Star, Rocket, Wrench } from "lucide-react";

interface ChangelogModalProps {
  onClose: () => void;
}

export default function ChangelogModal({ onClose }: ChangelogModalProps) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-stone-900 border border-stone-800 rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
      >
        <div className="p-6 border-b border-stone-800 flex items-center justify-between shrink-0">
          <div className="flex items-center text-red-500">
            <History className="w-5 h-5 mr-2" />
            <h3 className="text-xl font-bold text-white">Changelog & Updates</h3>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-stone-800 rounded-full text-stone-400 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto custom-scrollbar">
          {/* Current Version */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-bold text-white flex items-center">
                <Star className="w-5 h-5 text-yellow-500 mr-2" />
                Version 1.0.4
              </h4>
              <span className="text-xs font-mono text-amber-500 bg-amber-950/30 px-2 py-1 rounded border border-amber-900/50">
                In Development
              </span>
            </div>
            
            <div className="mb-4 p-3 bg-stone-950/50 border border-stone-800 rounded-lg text-xs text-stone-400 italic">
              Note: This version is currently in active development and is not an official release yet. Features and data are subject to change.
            </div>

            <ul className="space-y-3 text-sm text-stone-300">
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-0.5">•</span>
                Added Hostile AI behaviors to the Creatures Database (Gargoyle, Golem, Earth Elemental, Colossus, Amazon Gladiatrix).
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-0.5">•</span>
                Improved Mission Overview UI to better display structured behavior text.
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-0.5">•</span>
                Removed outdated demo data from the Creatures Database.
              </li>
            </ul>
          </div>

          {/* Previous Versions */}
          <div className="mb-8 opacity-75">
            <h4 className="text-md font-bold text-stone-400 mb-3 flex items-center">
              <Wrench className="w-4 h-4 text-stone-500 mr-2" />
              Previous Updates
            </h4>
            <div className="space-y-4">
              <div>
                <div className="text-xs font-mono text-stone-500 mb-1">v1.0.3</div>
                <ul className="space-y-1 text-sm text-stone-400">
                  <li>• Added competitive quests for Season 1.</li>
                  <li>• Integrated new spellbook rules and class masteries.</li>
                </ul>
              </div>
              <div>
                <div className="text-xs font-mono text-stone-500 mb-1">v1.0.2</div>
                <ul className="space-y-1 text-sm text-stone-400">
                  <li>• Added secure bug reporting system.</li>
                  <li>• UI polish and performance improvements.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Upcoming Features */}
          <div className="bg-stone-950/50 border border-stone-800 rounded-xl p-5">
            <h4 className="text-md font-bold text-white mb-3 flex items-center">
              <Rocket className="w-5 h-5 text-purple-500 mr-2" />
              Upcoming Features
            </h4>
            <ul className="space-y-3 text-sm text-stone-400">
              <li className="flex items-start">
                <span className="text-purple-500 mr-2 mt-0.5">→</span>
                Complete creature stats and weapons for all Hostile AI.
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2 mt-0.5">→</span>
                Interactive map tools for competitive quests.
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2 mt-0.5">→</span>
                Campaign mode integration and progression tracking.
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
