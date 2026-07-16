import React from "react";
import { motion } from "motion/react";

interface TabButtonProps {
  active: boolean;
  onClick: () => void;
  label: string;
  /** Optional leading icon. */
  icon?: React.ReactNode;
  /**
   * Whether the icon is wrapped in a fixed-size centering box (RulesWiki's
   * tab bar) or rendered bare (SpellBook's tab bar). Defaults to wrapped.
   */
  wrapIcon?: boolean;
  /** `layoutId` for the animated active-tab underline; must be unique per independent tab bar. */
  layoutId: string;
  /** Classes for the active-tab underline (color/glow differ between tab bars). */
  indicatorClassName: string;
  /** Extra classes appended to the button itself (e.g. `shrink-0`). */
  className?: string;
}

export function TabButton({ active, onClick, label, icon, wrapIcon = true, layoutId, indicatorClassName, className = "" }: TabButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center space-x-2 px-4 py-3 text-xs md:text-sm font-display uppercase tracking-eyebrow transition-all relative whitespace-nowrap ${
        active ? "text-red-500" : "text-stone-500 hover:text-stone-300"
      }${className ? ` ${className}` : ""}`}
    >
      {icon && (
        wrapIcon ? (
          <div className="flex items-center justify-center min-w-[1.25rem] h-5">
            {icon}
          </div>
        ) : (
          icon
        )
      )}
      <span>{label}</span>
      {active && (
        <motion.div
          layoutId={layoutId}
          className={`absolute bottom-0 left-0 right-0 h-0.5 ${indicatorClassName}`}
        />
      )}
    </button>
  );
}
