import { motion } from "motion/react";
import { missions, Mission } from "../data/missions";
import { ArrowLeft, Map as MapIcon, Target, ScrollText, Trophy } from "lucide-react";
import { useState, useEffect } from "react";

export default function MissionOverview({ onBack }: { onBack: () => void }) {
  const [selectedMission, setSelectedMission] = useState<Mission | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedMission]);

  if (selectedMission) {
    return <MissionDetail mission={selectedMission} onBack={() => setSelectedMission(null)} />;
  }

  return (
    <div className="min-h-screen bg-stone-950 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center text-stone-400 hover:text-red-500 transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </button>

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Competitive Quests</h1>
          <p className="text-xl text-stone-400 font-light tracking-widest uppercase">Season 1</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {missions.map((mission, index) => (
            <motion.div
              key={mission.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onClick={() => setSelectedMission(mission)}
              className="eldfall-card p-6 cursor-pointer group"
            >
              <div className="aspect-video mb-6 overflow-hidden rounded border border-stone-800 bg-stone-900/50 flex items-center justify-center">
                {mission.mapImage ? (
                  <img 
                    src={mission.mapImage} 
                    alt={mission.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="text-stone-600 flex flex-col items-center">
                    <MapIcon className="w-8 h-8 mb-2 opacity-20" />
                    <span className="text-xs uppercase tracking-widest opacity-40">No Tactical Map</span>
                  </div>
                )}
              </div>
              <h2 className="text-2xl font-bold mb-3 group-hover:text-red-500 transition-colors">
                {mission.title}
              </h2>
              <p className="text-stone-400 text-sm line-clamp-3 leading-relaxed">
                {mission.description}
              </p>
              <div className="mt-6 flex items-center text-red-500 text-sm font-medium">
                View Mission Details <ArrowLeft className="ml-2 w-4 h-4 rotate-180" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Archive Placeholder */}
        <div className="mt-20 p-8 rounded-lg border border-stone-900 bg-stone-900/20 text-center">
          <h3 className="text-stone-500 font-display uppercase tracking-widest text-sm mb-2">Quest Archive</h3>
          <p className="text-stone-600 italic text-sm">Previous seasons will be archived here.</p>
        </div>
      </div>
    </div>
  );
}

function MissionDetail({ mission, onBack }: { mission: Mission; onBack: () => void }) {
  return (
    <div className="min-h-screen bg-stone-950 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center text-stone-400 hover:text-red-500 transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Missions
        </button>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-12"
        >
          <header>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">{mission.title}</h1>
            <p className="text-xl text-stone-300 leading-relaxed max-w-3xl italic">
              "{mission.description}"
            </p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <section className="eldfall-card p-8">
                <div className="flex items-center mb-6 text-red-500">
                  <Target className="w-6 h-6 mr-3" />
                  <h2 className="text-xl font-bold uppercase tracking-wider">Setup</h2>
                </div>
                <ul className="space-y-4 text-stone-300">
                  {mission.setup.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-red-900 mr-3 mt-1.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="eldfall-card p-8 border-red-900/20">
                <div className="flex items-center mb-6 text-red-500">
                  <Trophy className="w-6 h-6 mr-3" />
                  <h2 className="text-xl font-bold uppercase tracking-wider">Results (VP)</h2>
                </div>
                <ul className="space-y-4 text-stone-300">
                  {mission.results.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-red-900 mr-3 mt-1.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              {mission.specialEndConditions && (
                <section className="eldfall-card p-8 border-amber-900/20">
                  <div className="flex items-center mb-6 text-amber-500">
                    <ScrollText className="w-6 h-6 mr-3" />
                    <h2 className="text-xl font-bold uppercase tracking-wider">Special End Conditions</h2>
                  </div>
                  <ul className="space-y-4 text-stone-300">
                    {mission.specialEndConditions.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-amber-900 mr-3 mt-1.5">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </div>

            <div className={`space-y-8 ${!mission.mapImage ? 'lg:col-span-2' : ''}`}>
              {mission.mapImage && (
                <section className="eldfall-card p-8 overflow-hidden">
                  <div className="flex items-center mb-6 text-red-500">
                    <MapIcon className="w-6 h-6 mr-3" />
                    <h2 className="text-xl font-bold uppercase tracking-wider">Tactical Map</h2>
                  </div>
                  <div className="aspect-square bg-stone-950 rounded border border-stone-800 overflow-hidden">
                    <img 
                      src={mission.mapImage} 
                      alt="Tactical Map" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </section>
              )}

              <section className="eldfall-card p-8">
                <div className="flex items-center mb-6 text-red-500">
                  <ScrollText className="w-6 h-6 mr-3" />
                  <h2 className="text-xl font-bold uppercase tracking-wider">Quest Rules</h2>
                </div>
                <div className="space-y-6">
                  {mission.questRules.map((rule, i) => (
                    <div key={i}>
                      <h3 className="text-white font-bold mb-2 uppercase text-sm tracking-widest">{rule.title}</h3>
                      <p className="text-stone-400 text-sm leading-relaxed whitespace-pre-line">
                        {rule.content}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
