import React, { useState } from "react";
import { motion } from "motion/react";
import { History, X, Star, Wrench, ChevronDown, ChevronRight } from "lucide-react";

interface ChangelogModalProps {
  onClose: () => void;
}

interface FaqItem {
  q: string;
  a: string;
}

const faqItems: FaqItem[] = [
  {
    q: "What quests are new in Season 2?",
    a: "Four brand-new quests have been added: Quarter War (control four field quarters), Clue Trail (race to gather 4 shifting objective markers each round), Snail Chase (shepherd your Ink Snails across the field), and Toxic Infestation (cull cursed vines while fighting off a respawning Avatar). Season 1's Secure the Artefact has been moved to the Quest Archive."
  },
  {
    q: "Which returning quests changed their rules?",
    a: "Two returning quests were updated. Treasure Hunt: models carrying a Treasure may now only voluntarily leave the field from Round 4 onwards (previously unrestricted). Magic Stones: models may no longer Interact with Objective Markers during Round 1."
  },
  {
    q: "Did the Scheme drawing rules change?",
    a: "Yes. Every quest now has its own Scheme rule, and the draw counts have increased across the board: INT 13 or less draws 2 cards (was 1), INT 14–15 draws 3 cards (was 2), INT 16+ draws 4 cards (was 3). You always keep 1."
  },
  {
    q: "What happened to Shields?",
    a: "The old penalty — Melee Weapons with RCH greater than 0 having −1 STK while a Shield is equipped — has been removed. Shields no longer penalise reach weapons."
  },
  {
    q: "Which models received balance changes?",
    a: "Nine models were adjusted: Blue Rasetsu (+2 RPTS, reworked Mind Invasion), Blue Yaksha (loses Advantage Medium), Goblin Brawlers (+2 T), Night Temple Priestess (−1 RPTS), Musha Bowmaster (+2 RPTS), Citadel Guard (gains Follow-up, +2 Inventory, −1 RPTS), Helrin Expatriate (gains Art of Enchanting II), Spelldancer Aeroturge (−2 RPTS), Amazon Gladiatrix (+7 RPTS)."
  },
  {
    q: "Which Scheme cards were updated?",
    a: "Seven schemes were reworded or capped: Relentless Advance, Peacekeeping Paragon, Appear Weak When You Are Strong, Unhindered Expedition, Stand Your Ground, Breach Their Defences, and Cunning Tenacity all received VP caps or revised trigger conditions. Opportunistic Manipulation was fully rewritten with three scoring conditions. Two new Monster Faction schemes — Spreading Infestation and Territorial Aggression — were also added."
  },
  {
    q: "What changed with Upgrade cards?",
    a: "First Aid was buffed: limit raised to 2, cost reduced to 2 RPTS, and its effect now also lets you remove all non-persistent States from an Alive model within Awareness. Lucky Charm's limit was changed to 1. A new Neutral Upgrade, Smokescreen, was added (details on Guild Hall)."
  },
  {
    q: "Which official rules version does Season 2 use?",
    a: "Season 2 runs on Core Rules v1.6 and Scheme/Upgrade cards v1.6. Physical v1.6 cards are expected in Summer 2026. Digital versions are already available on the Eldfall Chronicles resources page and in the Guild Hall app."
  }
];

function FaqEntry({ item }: { item: FaqItem }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-stone-800 rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-start justify-between gap-3 px-4 py-3 text-left hover:bg-stone-800/40 transition-colors"
      >
        <span className="text-sm font-medium text-stone-200">{item.q}</span>
        {open
          ? <ChevronDown className="w-4 h-4 text-stone-500 shrink-0 mt-0.5" />
          : <ChevronRight className="w-4 h-4 text-stone-500 shrink-0 mt-0.5" />
        }
      </button>
      {open && (
        <div className="px-4 pb-4 text-sm text-stone-400 leading-relaxed border-t border-stone-800/60 pt-3">
          {item.a}
        </div>
      )}
    </div>
  );
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
          {/* v2.0.0 — Current */}
          <div className="mb-10">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-lg font-bold text-white flex items-center">
                <Star className="w-5 h-5 text-yellow-500 mr-2" />
                Version 2.0.0
              </h4>
              <span className="eldfall-chip border-green-900/50 text-green-500 bg-green-950/30">
                Latest Release
              </span>
            </div>
            <p className="text-stone-500 text-xs mb-5 italic">Season 2 Competitive Quests — Core Rules v1.6</p>

            <ul className="stack-compact body-sm text-stone-300 mb-6">
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-0.5">•</span>
                <div>
                  <span className="font-bold text-white">4 New Season 2 Quests:</span> Quarter War, Clue Trail, Snail Chase, and Toxic Infestation added to the Quest Overview.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-0.5">•</span>
                <div>
                  <span className="font-bold text-white">Quest Archive:</span> Secure the Artefact retired from active play and preserved in the new Quest Archive section.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-0.5">•</span>
                <div>
                  <span className="font-bold text-white">Updated Scheme Draw Counts:</span> All quests now use the Season 2 draw rules (draw 2/3/4 cards depending on Leader INT, keep 1).
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-0.5">•</span>
                <div>
                  <span className="font-bold text-white">Rule Changes Applied:</span> Treasure Hunt exit restriction (Round 4+), Magic Stones Round 1 lock, Shield penalty removed, 9 model balance changes, 7 scheme updates, and upgrade changes.
                </div>
              </li>
            </ul>

            <div className="mb-2">
              <p className="text-xs font-semibold uppercase tracking-eyebrow text-stone-500 mb-3">Season 2 — Frequently Asked Questions</p>
              <div className="stack-compact">
                {faqItems.map((item, i) => (
                  <FaqEntry key={i} item={item} />
                ))}
              </div>
            </div>
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
                  <span>v1.1.0</span>
                  <span className="text-[10px] uppercase opacity-50 italic">PWA & Wiki Update</span>
                </div>
                <ul className="stack-compact body-sm">
                  <li>• Interactive Rules Wiki: keywords now open definition popups inline.</li>
                  <li>• PWA stabilisation and reliable offline support.</li>
                  <li>• Fixed character encoding artifacts and production build scripts.</li>
                </ul>
              </div>
              <div className="stack-compact">
                <div className="text-xs font-medium text-stone-500 mb-1 flex items-center justify-between">
                  <span>v1.0.5</span>
                  <span className="text-[10px] uppercase opacity-50 italic">Errata Update</span>
                </div>
                <ul className="stack-compact body-sm">
                  <li>• Implemented 9 APR errata updates: Throwing, Impede, and Cleave rule changes.</li>
                  <li>• Added Hostile AI behaviors to the Creatures Database.</li>
                </ul>
              </div>
              <div className="stack-compact">
                <div className="text-xs font-medium text-stone-500 mb-1">v1.0.3</div>
                <ul className="stack-compact body-sm">
                  <li>• Added competitive quests for Season 1.</li>
                  <li>• Integrated spellbook rules and class masteries.</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
}
