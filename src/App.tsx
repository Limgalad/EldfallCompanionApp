/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Book, Map, Sword, ExternalLink, Heart, Wand2, History } from "lucide-react";
import React, { useState, useEffect, Suspense, lazy } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import MetaTags from "./components/MetaTags";

// Lazy load heavy components
const MissionOverview = lazy(() => import("./components/MissionOverview"));
const RulesWiki = lazy(() => import("./components/RulesWiki"));
const SpellBook = lazy(() => import("./components/SpellBook"));
const ChangelogModal = lazy(() => import("./components/ChangelogModal"));

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isChangelogOpen, setIsChangelogOpen] = useState(false);

  useEffect(() => {
    // Only scroll to top on major route changes (e.g. going back home or switching main tools)
    // Detailed item views managed within components should handle their own scrolling
    const mainRoutes = ["/", "/missions", "/rules", "/spellbook"];
    if (mainRoutes.includes(location.pathname)) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return (
    <>
      {/* Global Header Actions */}
      <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
        <button 
          onClick={() => setIsChangelogOpen(true)}
          className="btn-secondary h-10 px-4"
          title="Changelog & Updates"
        >
          <History className="w-5 h-5 mr-2" />
          <span className="text-xs font-bold hidden sm:inline">v1.1.0</span>
        </button>
      </div>

      <ScrollToTop />
      
      <Routes>
        <Route path="/" element={<HomePage onNavigate={navigate} setIsChangelogOpen={setIsChangelogOpen} />} />
        
        <Route path="/missions" element={
          <Suspense fallback={<LoadingFallback />}>
            <MissionOverview onBack={() => navigate("/")} />
          </Suspense>
        } />
        <Route path="/missions/:missionId" element={
          <Suspense fallback={<LoadingFallback />}>
            <MissionOverview onBack={() => navigate("/")} />
          </Suspense>
        } />
        <Route path="/missions/v/:view" element={
          <Suspense fallback={<LoadingFallback />}>
            <MissionOverview onBack={() => navigate("/")} />
          </Suspense>
        } />

        <Route path="/rules" element={
          <Suspense fallback={<LoadingFallback />}>
            <RulesWiki onBack={() => navigate("/")} />
          </Suspense>
        } />
        <Route path="/rules/:category" element={
          <Suspense fallback={<LoadingFallback />}>
            <RulesWiki onBack={() => navigate("/")} />
          </Suspense>
        } />
        <Route path="/rules/:category/:id" element={
          <Suspense fallback={<LoadingFallback />}>
            <RulesWiki onBack={() => navigate("/")} />
          </Suspense>
        } />

        <Route path="/spellbook" element={
          <Suspense fallback={<LoadingFallback />}>
            <SpellBook onBack={() => navigate("/")} />
          </Suspense>
        } />
        <Route path="/spellbook/:school" element={
          <Suspense fallback={<LoadingFallback />}>
            <SpellBook onBack={() => navigate("/")} />
          </Suspense>
        } />
        <Route path="/spellbook/:school/:spellId" element={
          <Suspense fallback={<LoadingFallback />}>
            <SpellBook onBack={() => navigate("/")} />
          </Suspense>
        } />
      </Routes>

      {/* Changelog Modal */}
      {isChangelogOpen && (
        <Suspense fallback={null}>
          <ChangelogModal onClose={() => setIsChangelogOpen(false)} />
        </Suspense>
      )}
    </>
  );
}

function HomePage({
  onNavigate,
  setIsChangelogOpen
}: {
  onNavigate: (path: string) => void,
  setIsChangelogOpen: (open: boolean) => void
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <MetaTags />
      {/* Hero Section */}
      <header className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
            src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1920&h=1080"
            alt="Eldfall Fantasy Landscape"
            className="w-full h-full object-cover opacity-60"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 eldfall-gradient" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="h1-standard mb-4 drop-shadow-2xl">
              ELDFALL CHRONICLES
            </h1>
            <p className="text-lg md:text-xl text-stone-300 font-light tracking-eyebrow uppercase mb-8">
              Companion App
            </p>
          </motion.div>
        </div>
      </header>

      {/* Navigation Grid */}
      <main className="flex-grow max-w-7xl mx-auto w-full px-4 py-8 -mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <NavCard
            title="Quest Overview"
            description="Explore competitive quests, season objectives, and tactical maps."
            icon={<Map className="w-8 h-8 text-red-500" />}
            onClick={() => onNavigate("/missions")}
            delay={0.1}
          />
          <NavCard
            title="Rules Wiki"
            description="Access core rules, traits, skills, and class-specific masteries."
            icon={<Book className="w-8 h-8 text-red-500" />}
            onClick={() => onNavigate("/rules")}
            delay={0.2}
          />
          <NavCard
            title="Spell Book"
            description="Browse spells by school, element, and level for your casters."
            icon={<Wand2 className="w-8 h-8 text-red-500" />}
            onClick={() => onNavigate("/spellbook")}
            delay={0.3}
          />
          <NavCard
            title="Guildhall"
            description="Build your warband and manage your roster in the official army builder."
            icon={<Sword className="w-8 h-8 text-red-500" />}
            externalLink="https://guildhall.eldfall-chronicles.com/"
            delay={0.4}
          />
        </div>

        {/* Support Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 max-w-2xl mx-auto text-center p-6 rounded-xl bg-stone-950/50 border border-stone-900 backdrop-blur-sm"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-500/10 border border-red-500/20 mb-4">
            <Heart className="w-6 h-6 text-red-500 fill-red-500/20" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Support This Project</h3>
          <p className="text-stone-400 text-sm mb-6 leading-relaxed">
            If you like what this app offers and want to see it grow with new seasons and rule updates, your support like buying me a coffee helps me keep improving it.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://ko-fi.com/tabletophub" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Buy Me a Coffee
            </a>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-stone-900 text-center text-stone-500 text-sm">
        <p>&copy; 2026 Eldfall Chronicles Companion. All rights reserved.</p>
        <p className="mt-2">Created for the Eldfall Community.</p>
        <button 
          onClick={() => setIsChangelogOpen(true)}
          className="mt-4 text-[10px] opacity-50 hover:opacity-100 uppercase tracking-eyebrow transition-opacity flex items-center justify-center w-full gap-2"
        >
          <History className="w-3 h-3" /> Version 1.1.0 &bull; View Changelog
        </button>
      </footer>
    </div>
  );
}

function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center text-red-500">
        <div className="w-12 h-12 border-4 border-red-500/30 border-t-red-500 rounded-full animate-spin mb-4" />
        <p className="text-stone-400 font-bold uppercase tracking-eyebrow">Loading...</p>
      </div>
    </div>
  );
}

function NavCard({ 
  title, 
  description, 
  icon, 
  externalLink, 
  onClick,
  delay 
}: { 
  title: string; 
  description: string; 
  icon: React.ReactNode; 
  externalLink?: string;
  onClick?: () => void;
  delay: number;
}) {
  const CardContent = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      onClick={onClick}
      className="eldfall-card eldfall-card-interactive card-p h-full flex flex-col items-center text-center group"
    >
      <div className="mb-4 p-4 rounded-full bg-stone-950 border border-stone-800 group-hover:border-red-900/50 transition-colors">
        {icon}
      </div>
      <h2 className="text-xl font-bold mb-3 group-hover:text-red-500 transition-colors">
        {title}
      </h2>
      <p className="body-sm flex-grow">
        {description}
      </p>
      {externalLink && (
        <div className="mt-4 flex items-center text-sm text-red-500 font-medium group-hover:underline">
          Visit Guildhall <ExternalLink className="ml-2 w-4 h-4" />
        </div>
      )}
    </motion.div>
  );

  if (externalLink) {
    return (
      <a href={externalLink} target="_blank" rel="noopener noreferrer" className="block h-full">
        {CardContent}
      </a>
    );
  }

  return <div className="h-full">{CardContent}</div>;
}
