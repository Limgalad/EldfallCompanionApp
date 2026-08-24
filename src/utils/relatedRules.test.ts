import { describe, it, expect } from "vitest";
import { buildBacklinkIndex, Referenceable } from "./relatedRules";

const make = (id: string, title: string, searchText: string): Referenceable => ({
  id,
  title,
  searchText,
});

describe("buildBacklinkIndex", () => {
  it("lists every entry that mentions another entry's title", () => {
    const entries = [
      make("bleeding", "Bleeding", "Bleeding: the model loses HP each turn."),
      make("cruel-strike", "Cruel Strike", "On a hit, the target starts Bleeding."),
      make("first-aid", "First Aid", "Removes the Bleeding state from an ally."),
    ];

    const index = buildBacklinkIndex(entries);
    const backlinks = index.get("bleeding") ?? [];

    expect(backlinks.map((entry) => entry.id).sort()).toEqual(["cruel-strike", "first-aid"]);
  });

  it("does not treat an entry's own name as a backlink to itself", () => {
    const entries = [make("bleeding", "Bleeding", "Bleeding causes more Bleeding.")];

    const index = buildBacklinkIndex(entries);

    expect(index.get("bleeding")).toBeUndefined();
  });

  it("matches whole words only, not substrings", () => {
    const entries = [
      make("hit", "Hit", "A successful attack roll."),
      // "whitespace" contains the letters h-i-t but not the standalone word "Hit".
      make("whitespace", "Whitespace", "Whitespace between models does not matter."),
    ];

    const index = buildBacklinkIndex(entries);

    expect(index.get("hit")).toBeUndefined();
  });

  it("counts a repeated mention only once per referencing entry", () => {
    const entries = [
      make("bleeding", "Bleeding", "A damage-over-time state."),
      make("gash", "Gash", "Bleeding, Bleeding, and yet more Bleeding."),
    ];

    const index = buildBacklinkIndex(entries);

    expect(index.get("bleeding")?.length).toBe(1);
  });

  it("prefers the longest matching title (no double counting on overlap)", () => {
    const entries = [
      make("sight", "Sight", "Basic vision."),
      make("los", "Line of Sight", "An unobstructed straight path between two models."),
      make("ranged", "Ranged Attack", "Requires Line of Sight to the target."),
    ];

    const index = buildBacklinkIndex(entries);

    expect(index.get("line of sight")?.map((entry) => entry.id)).toEqual(["ranged"]);
    // "Sight" must NOT pick up the "Ranged Attack" entry via the substring of
    // "Line of Sight".
    expect(index.get("sight")).toBeUndefined();
  });
});
