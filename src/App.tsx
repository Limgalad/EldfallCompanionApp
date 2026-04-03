/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Book, Map, Sword, ExternalLink, Heart, Bug, X } from "lucide-react";
import React, { useState, useEffect } from "react";
import MissionOverview from "./components/MissionOverview";
import RulesWiki from "./components/RulesWiki";
import ScrollToTop from "./components/ScrollToTop";

type Page = "home" | "missions" | "rules";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [isBugModalOpen, setIsBugModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    if (currentPage === "missions") {
      return <MissionOverview onBack={() => setCurrentPage("home")} />;
    }

    if (currentPage === "rules") {
      return <RulesWiki onBack={() => setCurrentPage("home")} />;
    }

    return (
      <div className="min-h-screen flex flex-col">
        {/* Hero Section */}
        <header className="relative h-[70vh] flex items-center justify-center overflow-hidden">
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
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-2xl">
                ELDFALL CHRONICLES
              </h1>
              <p className="text-xl md:text-2xl text-stone-300 font-light tracking-widest uppercase mb-8">
                Companion App
              </p>
            </motion.div>
          </div>
        </header>

        {/* Navigation Grid */}
        <main className="flex-grow max-w-7xl mx-auto w-full px-4 py-12 -mt-24 relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <NavCard
              title="Quest Overview"
              description="Explore competitive quests, season objectives, and tactical maps."
              icon={<Map className="w-8 h-8 text-red-500" />}
              onClick={() => setCurrentPage("missions")}
              delay={0.1}
            />
            <NavCard
              title="Rules Wiki"
              description="Access core rules, traits, skills, and class-specific masteries."
              icon={<Book className="w-8 h-8 text-red-500" />}
              onClick={() => setCurrentPage("rules")}
              delay={0.2}
            />
            <NavCard
              title="Guildhall"
              description="Build your warband and manage your roster in the official army builder."
              icon={<Sword className="w-8 h-8 text-red-500" />}
              externalLink="https://guildhall.eldfall-chronicles.com/"
              delay={0.3}
            />
          </div>

          {/* Support Section */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-16 max-w-2xl mx-auto text-center p-8 rounded-2xl bg-stone-950/50 border border-stone-900 backdrop-blur-sm"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-500/10 border border-red-500/20 mb-4">
              <Heart className="w-6 h-6 text-red-500 fill-red-500/20" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Support This Project</h3>
            <p className="text-stone-400 text-sm mb-6 leading-relaxed">
              If you like what this app offers and want to see it grow with new seasons and rule updates, your support like buying me a coffee helps me keep improving it.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-bold rounded-lg transition-all hover:scale-105 active:scale-95 shadow-lg shadow-red-900/20">
                Sponsor App
              </button>
              <button 
                onClick={() => setIsBugModalOpen(true)}
                className="px-6 py-2 bg-stone-800 hover:bg-stone-700 text-white text-sm font-bold rounded-lg transition-all hover:scale-105 active:scale-95 border border-stone-700 flex items-center"
              >
                <Bug className="w-4 h-4 mr-2" /> Report Bug
              </button>
            </div>
          </motion.div>
        </main>

        {/* Footer */}
        <footer className="py-8 border-t border-stone-900 text-center text-stone-500 text-sm">
          <p>© 2026 Eldfall Chronicles Companion. All rights reserved.</p>
          <p className="mt-2">Created for the Eldfall Community.</p>
          <p className="mt-4 text-[10px] opacity-30 uppercase tracking-widest">Version 1.0.4 • Updated Apr 2</p>
        </footer>
      </div>
    );
  };

  return (
    <>
      {renderPage()}
      <ScrollToTop />
      {/* Bug Report Modal */}
      {isBugModalOpen && (
        <BugReportModal onClose={() => setIsBugModalOpen(false)} />
      )}
    </>
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
      className="eldfall-card p-8 h-full flex flex-col items-center text-center group cursor-pointer"
    >
      <div className="mb-6 p-4 rounded-full bg-stone-950 border border-stone-800 group-hover:border-red-900/50 transition-colors">
        {icon}
      </div>
      <h2 className="text-2xl font-bold mb-4 group-hover:text-red-500 transition-colors">
        {title}
      </h2>
      <p className="text-stone-400 leading-relaxed flex-grow">
        {description}
      </p>
      {externalLink && (
        <div className="mt-6 flex items-center text-red-500 font-medium group-hover:underline">
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

function BugReportModal({ onClose }: { onClose: () => void }) {
  const [report, setReport] = useState("");
  const [captchaAnswer, setCaptchaAnswer] = useState("");
  const [captchaChallenge, setCaptchaChallenge] = useState({ a: 0, b: 0 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const a = Math.floor(Math.random() * 10) + 1;
    const b = Math.floor(Math.random() * 10) + 1;
    setCaptchaChallenge({ a, b });
    setCaptchaAnswer("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (parseInt(captchaAnswer) !== captchaChallenge.a + captchaChallenge.b) {
      setStatus({ type: 'error', message: "Incorrect CAPTCHA answer. Please try again." });
      generateCaptcha();
      return;
    }

    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch("/api/report-bug", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          report,
          captcha: {
            a: captchaChallenge.a,
            b: captchaChallenge.b,
            answer: parseInt(captchaAnswer)
          }
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus({ type: 'success', message: data.message });
        setTimeout(() => {
          onClose();
        }, 2000);
      } else {
        setStatus({ type: 'error', message: data.message });
      }
    } catch (error) {
      console.error("Error submitting report:", error);
      setStatus({ type: 'error', message: "Failed to connect to the server. Please try again later." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-stone-900 border border-stone-800 rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl"
      >
        <div className="p-6 border-b border-stone-800 flex items-center justify-between">
          <div className="flex items-center text-red-500">
            <Bug className="w-5 h-5 mr-2" />
            <h3 className="text-xl font-bold text-white">Report a Bug</h3>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-stone-800 rounded-full text-stone-400 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-6">
          <p className="text-stone-400 text-sm mb-4">
            Please describe the issue you encountered. The report will be sent directly to the developer.
          </p>
          <textarea
            required
            disabled={isSubmitting}
            value={report}
            onChange={(e) => setReport(e.target.value)}
            placeholder="Describe the bug here..."
            className="w-full h-40 bg-stone-950 border border-stone-800 rounded-xl p-4 text-white placeholder-stone-600 focus:outline-none focus:border-red-900/50 transition-colors resize-none mb-4 disabled:opacity-50"
          />

          <div className="mb-6">
            <label className="block text-stone-400 text-sm mb-2">
              Security Check: What is {captchaChallenge.a} + {captchaChallenge.b}?
            </label>
            <input
              type="number"
              required
              disabled={isSubmitting}
              value={captchaAnswer}
              onChange={(e) => setCaptchaAnswer(e.target.value)}
              placeholder="Enter result"
              className="w-full bg-stone-950 border border-stone-800 rounded-xl p-3 text-white placeholder-stone-600 focus:outline-none focus:border-red-900/50 transition-colors disabled:opacity-50"
            />
          </div>
          
          {status && (
            <div className={`p-4 rounded-lg mb-6 text-sm ${
              status.type === 'success' ? 'bg-green-900/20 text-green-400 border border-green-900/50' : 'bg-red-900/20 text-red-400 border border-red-900/50'
            }`}>
              {status.message}
            </div>
          )}

          <div className="flex justify-end gap-3">
            <button
              type="button"
              disabled={isSubmitting}
              onClick={onClose}
              className="px-6 py-2 text-stone-400 hover:text-white transition-colors disabled:opacity-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-2 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-all shadow-lg shadow-red-900/20 disabled:opacity-50 flex items-center"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                  Sending...
                </>
              ) : "Send Report"}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
