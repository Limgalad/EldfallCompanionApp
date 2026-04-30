export type RankedSearchResult<T> = T & {
  score: number;
};

export const normalizeText = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

export const getFuzzyScore = (query: string, text: string) => {
  const normalizedQuery = normalizeText(query);
  const normalizedText = normalizeText(text);

  if (!normalizedQuery) {
    return 1;
  }

  const directIndex = normalizedText.indexOf(normalizedQuery);
  if (directIndex >= 0) {
    return 1000 - directIndex;
  }

  let queryIndex = 0;
  let gapPenalty = 0;
  let lastMatchIndex = -1;

  for (let i = 0; i < normalizedText.length && queryIndex < normalizedQuery.length; i += 1) {
    if (normalizedText[i] === normalizedQuery[queryIndex]) {
      if (lastMatchIndex >= 0) {
        gapPenalty += i - lastMatchIndex - 1;
      }
      lastMatchIndex = i;
      queryIndex += 1;
    }
  }

  if (queryIndex !== normalizedQuery.length) {
    return 0;
  }

  return Math.max(100 - gapPenalty, 1);
};

export const rankFuzzyResults = <T>(
  query: string,
  entries: T[],
  getSearchText: (entry: T) => string,
  compareEntries: (left: T, right: T) => number,
) =>
  entries
    .map((entry) => ({
      ...entry,
      score: getFuzzyScore(query, getSearchText(entry)),
    }))
    .filter((entry) => entry.score > 0)
    .sort((left, right) => right.score - left.score || compareEntries(left, right));
