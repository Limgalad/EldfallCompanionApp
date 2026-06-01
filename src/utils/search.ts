export type RankedSearchResult<T> = T & {
  score: number;
};

export type PreparedSearchEntry<T> = T & {
  normalizedSearchText: string;
};

export const normalizeText = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim();

export const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]/gu, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');

const getFuzzyScoreFromNormalized = (normalizedQuery: string, normalizedText: string) => {
  if (!normalizedQuery) {
    return 1;
  }

  const directIndex = normalizedText.indexOf(normalizedQuery);
  if (directIndex >= 0) {
    return Math.max(1000 - directIndex, 100);
  }

  let queryIndex = 0;
  let gapPenalty = 0;
  let lastMatchIndex = -1;

  for (let textIndex = 0; textIndex < normalizedText.length && queryIndex < normalizedQuery.length; textIndex += 1) {
    if (normalizedText[textIndex] === normalizedQuery[queryIndex]) {
      if (lastMatchIndex >= 0) {
        gapPenalty += textIndex - lastMatchIndex - 1;
      }
      lastMatchIndex = textIndex;
      queryIndex += 1;
    }
  }

  if (queryIndex !== normalizedQuery.length) {
    return 0;
  }

  return Math.max(100 - gapPenalty, 1);
};

export const getFuzzyScore = (query: string, text: string) =>
  getFuzzyScoreFromNormalized(normalizeText(query), normalizeText(text));

export const prepareFuzzySearchEntries = <T>(
  entries: T[],
  getSearchText: (entry: T) => string,
): PreparedSearchEntry<T>[] =>
  entries.map((entry) => ({
    ...entry,
    normalizedSearchText: normalizeText(getSearchText(entry)),
  }));

export const rankPreparedFuzzyResults = <T>(
  query: string,
  entries: PreparedSearchEntry<T>[],
  compareEntries: (left: T, right: T) => number = () => 0,
): RankedSearchResult<T>[] => {
  const normalizedQuery = normalizeText(query);

  return entries
    .map((entry) => {
      const { normalizedSearchText, ...result } = entry;
      return {
        ...result,
        score: getFuzzyScoreFromNormalized(normalizedQuery, normalizedSearchText),
      } as RankedSearchResult<T>;
    })
    .filter((entry) => entry.score > 0)
    .sort((left, right) => right.score - left.score || compareEntries(left, right));
};

export const rankFuzzyResults = <T>(
  query: string,
  entries: T[],
  getSearchText: (entry: T) => string,
  compareEntries: (left: T, right: T) => number = () => 0,
): RankedSearchResult<T>[] => {
  const preparedEntries = prepareFuzzySearchEntries(entries, getSearchText);
  return rankPreparedFuzzyResults(query, preparedEntries, compareEntries);
};
