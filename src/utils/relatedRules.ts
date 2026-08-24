/**
 * Backlink ("referenced by") index for the Rules Wiki.
 *
 * Forward links are already handled inline by `RichText` (keyword phrases in a
 * rule's body become clickable). This utility computes the *reverse*: given an
 * item, which OTHER items mention it by name. That answers during-play questions
 * like "which traits / skills / combat arts cause Bleeding" without any manual
 * curation — it is derived purely from the existing text.
 *
 * Matching mirrors `RichText.tsx`: whole-word, case-insensitive, longest title
 * first, so "Line of Sight" wins over "Sight". A title is counted at most once
 * per referencing entry, and an entry never lists itself.
 */

export interface Referenceable {
  /** Stable unique id for the entry (used as React key). */
  id: string;
  /** The display title that other entries might mention. */
  title: string;
  /** The full text (title + body + subsections/levels/abilities) to scan. */
  searchText: string;
}

const escapeRegExp = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/**
 * Builds a map from a lowercased entry title to the list of entries whose
 * `searchText` mentions that title. Look up backlinks with
 * `index.get(item.title.toLowerCase())`.
 */
export function buildBacklinkIndex<T extends Referenceable>(entries: T[]): Map<string, T[]> {
  const index = new Map<string, T[]>();

  const uniqueTitles = Array.from(
    new Set(entries.map((entry) => entry.title.trim()).filter(Boolean)),
  ).sort((a, b) => b.length - a.length);

  if (uniqueTitles.length === 0) {
    return index;
  }

  const pattern = uniqueTitles.map((title) => `\\b${escapeRegExp(title)}\\b`).join("|");
  const titleRegex = new RegExp(`(${pattern})`, "gi");

  for (const entry of entries) {
    const selfTitle = entry.title.trim().toLowerCase();
    const mentioned = new Set<string>();

    for (const match of entry.searchText.matchAll(titleRegex)) {
      mentioned.add(match[0].toLowerCase());
    }

    for (const title of mentioned) {
      if (title === selfTitle) {
        continue; // an entry is never its own backlink
      }
      let list = index.get(title);
      if (!list) {
        list = [];
        index.set(title, list);
      }
      list.push(entry);
    }
  }

  return index;
}
