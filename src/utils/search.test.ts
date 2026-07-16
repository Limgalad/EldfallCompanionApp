import { describe, expect, it } from "vitest";
import {
  getFuzzyScore,
  normalizeText,
  prepareFuzzySearchEntries,
  rankFuzzyResults,
  rankPreparedFuzzyResults,
  slugify,
} from "./search";

describe("normalizeText", () => {
  it("lowercases and trims", () => {
    expect(normalizeText("  Hello World  ")).toBe("hello world");
  });

  it("replaces punctuation with spaces and collapses whitespace", () => {
    expect(normalizeText("Fire-Ball!!  (Level   2)")).toBe("fire ball level 2");
  });

  it("keeps letters and numbers across scripts", () => {
    expect(normalizeText("Élan 3")).toBe("élan 3");
  });

  it("returns an empty string for punctuation-only input", () => {
    expect(normalizeText("--!!")).toBe("");
  });
});

describe("slugify", () => {
  it("converts a title to a dash-separated slug", () => {
    expect(slugify("Deep Freeze")).toBe("deep-freeze");
  });

  it("collapses repeated separators and trims edge dashes", () => {
    expect(slugify("  Fire -- Ball!  ")).toBe("fire-ball");
  });

  it("returns an empty string when nothing is sluggable", () => {
    expect(slugify("!!!")).toBe("");
  });
});

describe("getFuzzyScore", () => {
  it("returns 1 for an empty query (matches everything)", () => {
    expect(getFuzzyScore("", "anything")).toBe(1);
  });

  it("scores a direct substring match higher than a subsequence match", () => {
    const direct = getFuzzyScore("fire", "fireball");
    const subsequence = getFuzzyScore("fbl", "fireball");
    expect(direct).toBeGreaterThan(subsequence);
  });

  it("rewards an earlier substring position with a higher score", () => {
    const early = getFuzzyScore("fire", "fireball");
    const late = getFuzzyScore("fire", "great fire");
    expect(early).toBeGreaterThan(late);
  });

  it("returns 0 when the query is not a subsequence of the text", () => {
    expect(getFuzzyScore("xyz", "fireball")).toBe(0);
  });

  it("penalizes larger gaps in a subsequence match", () => {
    const tight = getFuzzyScore("fir", "fireball");
    const loose = getFuzzyScore("fll", "fireball");
    expect(tight).toBeGreaterThan(loose);
  });

  it("ignores case and punctuation via normalization", () => {
    expect(getFuzzyScore("FIRE BALL", "fire-ball")).toBeGreaterThan(0);
  });
});

interface Spell {
  name: string;
}

describe("rankFuzzyResults", () => {
  const spells: Spell[] = [
    { name: "Fireball" },
    { name: "Frost Bolt" },
    { name: "Great Fire" },
    { name: "Heal" },
  ];
  const getText = (s: Spell) => s.name;

  it("filters out non-matching entries", () => {
    const results = rankFuzzyResults("fire", spells, getText);
    const names = results.map((r) => r.name);
    expect(names).toContain("Fireball");
    expect(names).toContain("Great Fire");
    expect(names).not.toContain("Heal");
    expect(names).not.toContain("Frost Bolt");
  });

  it("orders by descending score", () => {
    const results = rankFuzzyResults("fire", spells, getText);
    expect(results[0].name).toBe("Fireball");
    for (let i = 1; i < results.length; i += 1) {
      expect(results[i - 1].score).toBeGreaterThanOrEqual(results[i].score);
    }
  });

  it("returns all entries for an empty query", () => {
    const results = rankFuzzyResults("", spells, getText);
    expect(results).toHaveLength(spells.length);
  });

  it("uses the tie-break comparator when scores are equal", () => {
    const tied: Spell[] = [{ name: "Alpha" }, { name: "Bravo" }, { name: "Charlie" }];
    // Empty query gives every entry score 1, so ordering is decided purely by the comparator.
    const results = rankFuzzyResults(
      "",
      tied,
      getText,
      (a, b) => b.name.localeCompare(a.name),
    );
    expect(results.map((r) => r.name)).toEqual(["Charlie", "Bravo", "Alpha"]);
  });

  it("does not leak the internal normalizedSearchText field", () => {
    const results = rankFuzzyResults("fire", spells, getText);
    expect(results[0]).not.toHaveProperty("normalizedSearchText");
  });
});

describe("prepareFuzzySearchEntries + rankPreparedFuzzyResults", () => {
  it("produces the same ranking as the one-shot rankFuzzyResults", () => {
    const spells: Spell[] = [{ name: "Fireball" }, { name: "Great Fire" }, { name: "Heal" }];
    const getText = (s: Spell) => s.name;

    const prepared = prepareFuzzySearchEntries(spells, getText);
    expect(prepared[0]).toHaveProperty("normalizedSearchText", "fireball");

    const fromPrepared = rankPreparedFuzzyResults("fire", prepared).map((r) => r.name);
    const oneShot = rankFuzzyResults("fire", spells, getText).map((r) => r.name);
    expect(fromPrepared).toEqual(oneShot);
  });
});
