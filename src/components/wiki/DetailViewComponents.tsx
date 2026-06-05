import React from "react";
import { SelectedItem, KeywordItem } from "../../types";
import { RichText } from "./RichText";
import { isRuleSection, isClass, isCombatArtCategory, getSelectedItemBody } from "../../utils/rulesGuards";

interface DetailProps {
  item: SelectedItem;
  onKeywordClick: (item: KeywordItem) => void;
  searchQuery: string;
}

export const RuleTable: React.FC<{ table: { headers: string[]; rows: string[][] } }> = ({ table }) => (
  <div className="overflow-x-auto my-4 rounded-xl border border-stone-800 bg-stone-900/50">
    <table className="w-full text-left border-collapse min-w-[300px]">
      <thead>
        <tr className="bg-stone-800/50">
          {table.headers.map((header, i) => (
            <th key={i} className="px-4 py-3 text-[10px] font-bold text-stone-400 uppercase tracking-wider border-b border-stone-800">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-stone-800">
        {table.rows.map((row, i) => (
          <tr key={i} className="hover:bg-red-500/5 transition-colors">
            {row.map((cell, j) => (
              <td key={j} className="px-4 py-3 text-[10px] text-stone-300">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export const RuleSectionDetail: React.FC<DetailProps> = ({ item, onKeywordClick, searchQuery }) => {
  if (!isRuleSection(item)) return null;
  
  return (
    <div className="stack-standard">
      <div className="text-stone-300 body-sm whitespace-pre-wrap font-sans">
        <RichText 
          text={item.data.content} 
          onKeywordClick={onKeywordClick}
          highlightQuery={searchQuery}
        />
      </div>
      {item.data.table && <RuleTable table={item.data.table} />}
      {item.data.subsections && (
        <div className="space-y-4">
          {item.data.subsections.map((sub, i) => (
            <div key={i} className="border-l-2 border-red-900/30 pl-4">
              <h4 className="text-white font-bold mb-1 uppercase text-xs tracking-eyebrow">{sub.title}</h4>
              <p className="body-xs">{sub.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export const ClassDetail: React.FC<DetailProps> = ({ item, onKeywordClick, searchQuery }) => {
  if (!isClass(item)) return null;
  
  return (
    <div className="stack-standard">
      <div className="text-stone-300 body-sm whitespace-pre-wrap font-sans">
        <RichText 
          text={item.data.description} 
          onKeywordClick={onKeywordClick}
          highlightQuery={searchQuery}
        />
      </div>
      {item.data.abilities && (
        <div className="space-y-3">
          <h4 className="text-white font-bold uppercase text-xs tracking-eyebrow border-b border-stone-800 pb-2">Class Abilities</h4>
          <div className="space-y-2">
            {item.data.abilities.map((ability, i) => (
              <div key={i} className="flex items-start text-xs">
                <span className="text-red-500 mr-2 mt-0.5">-</span>
                <span className="text-stone-300">{ability}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export const CombatArtDetail: React.FC<DetailProps> = ({ item }) => {
  if (!isCombatArtCategory(item)) return null;
  
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <p className="text-stone-200 text-sm leading-relaxed">{item.data.ruleText}</p>
        <p className="text-stone-400 text-xs leading-relaxed italic">{item.data.flavorText}</p>
      </div>
      <div className="space-y-3">
        <h4 className="text-white font-bold uppercase text-xs tracking-eyebrow border-b border-stone-800 pb-2">Levels</h4>
        <div className="space-y-3">
          {item.data.levels.map((level, i) => (
            <div key={i} className="bg-surface-1/30 border border-stone-800/50 rounded-xl p-3">
              <div className="flex items-center justify-between mb-2">
                <h5 className="text-red-500 text-sm font-bold">{level.name}</h5>
                <span className="eldfall-chip">Level {level.level}</span>
              </div>
              <p className="text-stone-400 text-xs leading-relaxed">{level.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const GenericDetail: React.FC<DetailProps> = ({ item, onKeywordClick, searchQuery }) => {
  return (
    <div className="text-stone-300 body-sm whitespace-pre-wrap font-sans">
      <RichText 
        text={getSelectedItemBody(item)} 
        onKeywordClick={onKeywordClick}
        highlightQuery={searchQuery}
      />
    </div>
  );
};
