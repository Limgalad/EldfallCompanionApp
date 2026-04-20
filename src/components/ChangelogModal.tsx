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
        className="surface-overlay rounded-xl w-full max-w-2xl max-h-[90vh] flex flex-col"
      >
        <div className="card-p-lg border-b border-stone-800 flex items-center justify-between shrink-0">
          <div className="flex items-center text-red-500">
            <History className="w-5 h-5 mr-2" />
            <h3 className="text-xl font-bold text-white">Changelog & Updates</h3>
          </div>
          <button 
            onClick={onClose}
            className="btn-icon-circle border-transparent bg-transparent shadow-none hover:bg-stone-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="card-p-lg overflow-y-auto custom-scrollbar">
          {/* Current Version */}
          <div className="mb-10">
            <div className="flex items-center justify-between mb-6">
              <h4 className="text-lg font-bold text-white flex items-center">
                <Star className="w-5 h-5 text-yellow-500 mr-2" />
                Version 1.1.0
              </h4>
              <span className="eldfall-chip border-green-900/50 text-green-500 bg-green-950/30">
                Latest Release
              </span>
            </div>
            
            <ul className="stack-compact body-sm text-stone-300">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-0.5">•</span>
                <div>
                  <span className="font-bold text-white">Interactive Rules Wiki:</span> Keywords in skill and creature descriptions (like Blinded, Surprise Attack) are now clickable, opening a definition popup without navigating away.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-0.5">•</span>
                <div>
                  <span className="font-bold text-white">PWA Stabilization:</span> Resolved conflicting service worker logic to enable reliable offline support and installation.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-0.5">•</span>
                <div>
                  <span className="font-bold text-white">Encoding Normalization:</span> Fixed character encoding artifacts (mojibake) in the footer, changelog, and server logs.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-0.5">•</span>
                <div>
                  <span className="font-bold text-white">Production Build Fixes:</span> Corrected build and start scripts to ensure proper execution in production environments.
                </div>
              </li>
            </ul>
          </div>

          {/* Previous Versions */}
          <div className="mb-10 opacity-75">
            <h4 className="text-md font-bold text-stone-400 mb-4 flex items-center">
              <Wrench className="w-4 h-4 text-stone-500 mr-2" />
              Previous Updates
            </h4>
            <div className="stack-standard">
              <div className="stack-compact">
                <div className="text-xs font-medium text-stone-500 mb-1 flex items-center justify-between">
                  <span>v1.0.5</span>
                  <span className="text-[10px] uppercase opacity-50 italic">Errata Update</span>
                </div>
                <ul className="stack-compact body-sm">
                  <li>• Implemented 9 APR errata updates: changes to Throwing, Impede, and Cleave rules.</li>
                  <li>• Added Hostile AI behaviors to the Creatures Database.</li>
                  <li>• Enhanced type safety across Missions and Factions.</li>
                </ul>
              </div>
              <div className="stack-compact">
                <div className="text-xs font-medium text-stone-500 mb-1">v1.0.3</div>
                <ul className="stack-compact body-sm">
                  <li>• Added competitive quests for Season 1.</li>
                  <li>• Integrated new spellbook rules and class masteries.</li>
                </ul>
              </div>
              <div className="stack-compact">
                <div className="text-xs font-medium text-stone-500 mb-1">v1.0.2</div>
                <ul className="stack-compact body-sm">
                  <li>• Added secure bug reporting system.</li>
                  <li>• UI polish and performance improvements.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Upcoming Features */}
          <div className="bg-stone-950/50 border border-stone-800 rounded-xl card-p">
            <h4 className="text-md font-bold text-white mb-4 flex items-center">
              <Rocket className="w-5 h-5 text-purple-500 mr-2" />
              Upcoming Features
            </h4>
            <ul className="stack-compact text-sm text-stone-400">
              <li className="flex items-start">
                <span className="text-purple-500 mr-2 mt-0.5">→</span>
                Expanding core rules and game mechanics.
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
