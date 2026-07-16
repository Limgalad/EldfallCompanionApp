import React from "react";
import { Creature } from "../../data/creatures";

export type CreatureCardVariant = "list" | "detail";

interface CreatureCardProps {
  creature: Creature;
  variant: CreatureCardVariant;
  onShowTooltip: (name: string, type: "skill" | "trait" | "spell" | "combatArt") => void;
}

/**
 * Renders a single creature's stat block.
 *
 * Two variants preserve the two pre-existing, visually distinct layouts that
 * previously lived duplicated in CreaturesModal ("list") and
 * MissionDetailView's quick-reference popup ("detail"):
 *  - "list": compact card (used in the scrollable creature database list).
 *    Includes the description text and weapon QTY/WGT fields; wraps itself
 *    in a bordered card container.
 *  - "detail": larger single-creature reference layout. Omits the
 *    description and weapon QTY/WGT fields (as the original markup did);
 *    does not wrap itself in a container since the parent modal chrome
 *    already provides padding.
 */
export const CreatureCard: React.FC<CreatureCardProps> = ({ creature, variant, onShowTooltip }) => {
  const isDetail = variant === "detail";
  const hasSpellOrArt = Boolean(creature.spellcrafts || creature.combatArts);

  const sectionHeaderClass = isDetail
    ? "h3-standard mb-4 border-b border-stone-800 pb-2"
    : "text-stone-300 font-bold uppercase text-[10px] tracking-eyebrow mb-2 border-b border-stone-800 pb-1";

  const tagWrapClass = isDetail ? "flex flex-wrap gap-2" : "flex flex-wrap gap-1.5";
  const tagButtonClass = isDetail
    ? "px-2 py-0.5 bg-stone-900 border border-stone-800 text-[10px] rounded-lg hover:bg-stone-800 transition-colors"
    : "px-1.5 py-0.5 bg-stone-900 border border-stone-800 text-[10px] rounded-lg hover:bg-stone-800 transition-colors";

  const header = (
    <div className={`flex justify-between items-start ${isDetail ? "mb-6" : "mb-3"}`}>
      <div>
        <h3 className={isDetail ? "text-2xl font-bold text-white mb-2 leading-tight" : "text-lg font-bold text-white mb-1 leading-tight"}>
          {creature.name}
        </h3>
        <div className={`flex flex-wrap ${isDetail ? "gap-3" : "gap-2 mb-2"}`}>
          <span className="text-stone-500 text-[10px] uppercase font-bold tracking-meta">Size: {creature.size}</span>
          <span className="text-stone-500 text-[10px] uppercase font-bold tracking-meta">Type: {creature.type}</span>
          {creature.class && <span className="text-stone-500 text-[10px] uppercase font-bold tracking-meta">Class: {creature.class}</span>}
        </div>
        {!isDetail && <p className="body-xs italic">{creature.description}</p>}
      </div>
      <span className={isDetail ? "eldfall-chip" : "eldfall-chip shrink-0"}>
        {creature.tier}
      </span>
    </div>
  );

  const content = (
    <>
      {isDetail ? <div className="mb-10">{header}</div> : header}

      {/* Stats Grid */}
      <div className={`grid grid-cols-4 sm:grid-cols-6 md:grid-cols-11 gap-1 ${isDetail ? "mb-8" : "mb-4"}`}>
        {Object.entries(creature.stats).map(([key, value]) => (
          <div key={key} className="surface-1 border border-stone-800 rounded-lg p-1.5 text-center">
            <div className="text-[8px] text-stone-500 uppercase font-bold mb-0.5">{key}</div>
            <div className="text-white text-xs font-mono">{value}</div>
          </div>
        ))}
      </div>

      {/* Weapons */}
      <div className={isDetail ? "mb-8" : "mb-4"}>
        <h4 className={sectionHeaderClass}>Weapons</h4>
        <div className={isDetail ? "stack-standard" : "space-y-2"}>
          {creature.weapons.map((weapon, wIdx) => (
            <div
              key={wIdx}
              className={isDetail ? "bg-stone-900/30 border border-stone-800 rounded-xl p-3" : "bg-stone-950/50 border border-stone-800/50 rounded-lg p-2 text-xs"}
            >
              <div className={`flex flex-wrap items-center ${isDetail ? "gap-4 mb-2" : "gap-3 mb-1"}`}>
                <span className={isDetail ? "font-bold text-red-500 text-sm leading-none" : "font-bold text-red-500"}>{weapon.name}</span>
                <span className="text-stone-500 text-[10px] uppercase">{weapon.type}</span>
                <div className={isDetail ? "flex gap-3 text-stone-400 font-mono text-xs" : "flex gap-2 text-stone-400 font-mono text-[10px]"}>
                  <span>PW: {weapon.pw}</span>
                  <span>RCH: {weapon.rch}</span>
                  <span>STK: {weapon.stk}</span>
                  {!isDetail && weapon.qty !== undefined && <span>QTY: {weapon.qty}</span>}
                  {!isDetail && weapon.wgt !== undefined && <span>WGT: {weapon.wgt}</span>}
                </div>
              </div>
              <p className={isDetail ? "body-xs italic" : "text-stone-400 italic text-[10px]"}>{weapon.effects}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Traits, Skills, etc. */}
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ${isDetail ? "gap-8" : "gap-4"}`}>
        <div>
          <h4 className={sectionHeaderClass}>Skills</h4>
          <div className={tagWrapClass}>
            {creature.skills.map((skill, sIdx) => (
              <button
                key={sIdx}
                onClick={() => onShowTooltip(skill, "skill")}
                className={`${tagButtonClass} text-red-400`}
              >
                {skill}
              </button>
            ))}
          </div>
        </div>
        <div>
          <h4 className={sectionHeaderClass}>Traits</h4>
          <div className={tagWrapClass}>
            {creature.traits.map((trait, tIdx) => (
              <button
                key={tIdx}
                onClick={() => onShowTooltip(trait, "trait")}
                className={`${tagButtonClass} text-stone-300`}
              >
                {trait}
              </button>
            ))}
          </div>
        </div>
        {hasSpellOrArt && (
          <div className={isDetail ? "stack-standard" : undefined}>
            {creature.spellcrafts && creature.spellcrafts.length > 0 && (
              <div className={isDetail ? undefined : "mb-2"}>
                <h4 className={sectionHeaderClass}>Spellcrafts</h4>
                <div className={tagWrapClass}>
                  {creature.spellcrafts.map((spell, sIdx) => (
                    <button
                      key={sIdx}
                      onClick={() => onShowTooltip(spell, "spell")}
                      className={`${tagButtonClass} text-blue-400`}
                    >
                      {spell}
                    </button>
                  ))}
                </div>
              </div>
            )}
            {creature.combatArts && creature.combatArts.length > 0 && (
              <div>
                <h4 className={sectionHeaderClass}>Combat Arts</h4>
                <div className={tagWrapClass}>
                  {creature.combatArts.map((art, aIdx) => (
                    <button
                      key={aIdx}
                      onClick={() => onShowTooltip(art, "combatArt")}
                      className={`${tagButtonClass} text-amber-400`}
                    >
                      {art}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
        <div className={!hasSpellOrArt ? "lg:col-span-2" : ""}>
          <h4 className={sectionHeaderClass}>Behavior</h4>
          <p className={isDetail ? "body-xs leading-relaxed whitespace-pre-wrap font-sans" : "text-stone-400 text-xs leading-relaxed whitespace-pre-wrap"}>
            {creature.behavior}
          </p>
        </div>
      </div>
    </>
  );

  if (isDetail) {
    return content;
  }

  return (
    <div className="p-4 rounded-lg border border-stone-800 bg-surface-2/20">
      {content}
    </div>
  );
};
