export type Season = "Season 1" | "Season 2";

export interface Mission {
  id: string;
  title: string;
  season: Season;
  description: string;
  setup: string[];
  results: string[];
  specialEndConditions?: string[];
  questRules?: {
    title: string;
    content: string;
  }[];
  mapImage: string;
  archived?: boolean;
}

export const missions: Mission[] = [
  {
    id: "open-hostilities",
    title: "Open Hostilities",
    season: "Season 2",
    description: "While the four great factions are currently at peace, Calad is no stranger to skirmishes and covert engagements between rivals vying for power.",
    setup: [
      "Standard Deployment: 8\" Deployment Zones."
    ],
    results: [
      "Gain 1 VP for rendering an enemy with a Recruitment Cost of 16 or less Incapacitated or Dead.",
      "Gain 2 VP for rendering an enemy with a Recruitment Cost between 17 and 21 Incapacitated or Dead.",
      "Gain 3 VP for rendering an enemy with a Recruitment Cost between 22 and 29 Incapacitated or Dead.",
      "Gain 4 VP for rendering an enemy with a Recruitment Cost of 30 or more Incapacitated or Dead.",
      "Gain 1 VP for rendering an enemy Leader Incapacitated or Dead."
    ],
    questRules: [
      {
        title: "Schemes",
        content: "Before the Initiative Check, each player receives 1 Scheme Card. When drawing Schemes:\n- If Leader has INT 13 or less  draw 2 cards and choose 1 to keep.\n- If Leader has INT 14 or 15  draw 3 cards and choose 1 to keep.\n- If Leader has INT 16 or more  draw 4 cards and choose 1 to keep."
      }
    ],
    mapImage: ""
  },
  {
    id: "awaiting-reinforcements",
    title: "Awaiting Reinforcements",
    season: "Season 2",
    description: "Skirmishes over newly discovered ruins are not uncommon, as various factions compete to be the first to explore them. Hold out a while longer—reinforcements are on their way!",
    setup: [
      "Obelisk: There is 1 Objective Marker at the center of the field.",
      "Standard Deployment: 8\" Deployment Zones."
    ],
    results: [
      "Gain 1 VP if you have at least one model within 6\" of the Obelisk at the end of the round.",
      "Gain 1 VP if you have a Stronger Presence within 6\" of the Obelisk at the end of the round.",
      "Gain 1 VP if you have a model within 6\" of the Obelisk and your opponent has none within that range at the end of the round."
    ],
    questRules: [
      {
        title: "Schemes",
        content: "Before the Initiative Check, each player receives 1 Scheme Card. When drawing Schemes:\n- If Leader has INT 13 or less  draw 2 cards and choose 1 to keep.\n- If Leader has INT 14 or 15  draw 3 cards and choose 1 to keep.\n- If Leader has INT 16 or more  draw 4 cards and choose 1 to keep."
      },
      {
        title: "No Morale Loss",
        content: "Models ignore the Broken Morale rule during this Quest."
      },
      {
        title: "1st Round Ceasefire",
        content: "Players cannot score VP during the first round. If a model targets an enemy model with an Attack or damages an enemy model with an Action during Round 1, that player's party receives a −4 VP penalty. Summoned models are an exception and can be targeted and damaged. (A player's VP score may drop below 0 as a result.)"
      },
      {
        title: "Stronger Presence",
        content: "Stronger Presence is determined by calculating a party's Recruitment Point total within the specified area. Add together the Recruitment Points of all Alive Party Members in that area (do not include Upgrades). Compare this total to that of the other player(s). The player with the higher Recruitment Point count has the Stronger Presence."
      }
    ],
    mapImage: "/map_awaiting_reinforcements.png"
  },
  {
    id: "treasure-hunt",
    title: "Treasure Hunt",
    season: "Season 2",
    description: "Whether a lord or a common adventurer, one can always benefit from more coin.",
    setup: [
      "Intrigue Tokens: There are 2 Intrigue Tokens in the middle of the field. Under each Intrigue Token lies a Cache Token. (In other words, an Intrigue Token is placed on top of a Cache Token.)",
      "Standard Deployment: 8\" Deployment Zones."
    ],
    results: [
      "Gain 1 VP for unlocking the Cache.",
      "Gain 2 VP if your model has the Treasure in its Inventory at the end of the game.",
      "Gain 3 VP if your model leaves the field with a Treasure in its Inventory."
    ],
    specialEndConditions: [
      "The Quest ends when both Treasures leave the field.",
      "If a player's party is in a state of Broken Morale at the start of their Strategic Phase, the Quest ends at the end of that Turn."
    ],
    questRules: [
      {
        title: "Schemes",
        content: "Before the Initiative Check, each player receives 1 Scheme Card. When drawing Schemes:\n- If Leader has INT 13 or less  draw 2 cards and choose 1 to keep.\n- If Leader has INT 14 or 15  draw 3 cards and choose 1 to keep.\n- If Leader has INT 16 or more  draw 4 cards and choose 1 to keep."
      },
      {
        title: "Treasure (Cache)",
        content: "Models may not Interact with Cache during Round 1. To access the Treasure, a model must first reveal the Intrigue Token by successfully performing the Perceive Action (also automatically revealed on Base Contact). When revealed, the Intrigue Token is replaced with a Sigil Token.\n\nA model in Base Contact with a Cache token may declare an Interact Action and, by performing a successful AG roll, unlock the Cache and take the Treasure into its Inventory. Once unlocked, it cannot be unlocked again. Summoned models may not interact with Cache Tokens.\n\nFrom round 4 onward, a model with a Treasure in its Inventory may voluntarily leave the field via its own Deployment Zone. A model carrying a Treasure cannot be Shrouded or Flying. Treasure is an Item with Qty 1 and Wgt 1.\n\n(If the model becomes Incapacitated or Dead, the Treasure is removed from its Inventory and placed in Base Contact with the model. Models that leave the field voluntarily are still considered present and alive for the purposes of Loss of Morale.)"
      },
      {
        title: "Sigils",
        content: "Sigils don't trigger during Round 1. Each Sigil Token has a specific Spell assigned to it, determined by rolling a die. The Spell is triggered when a model comes into Base Contact with either the Sigil Token or the Cache Token beneath it. When triggered, the Spell is considered successfully cast and hits all models within its AoE (unless they perform a successful Dodge). These Spells have PW 14. After resolution, remove the Sigil Token.\n\n1–4: Inferno\n5–8: Glacier Circle\n9–12: Claws of Earth\n13–16: Thunderstorm\n17–18: Mass Mindbreak\n19: Corroding Embrace\n20: Smite"
      },
      {
        title: "Class Bonus: Rogue, Ranger, Alchemist",
        content: "Models with the Rogue, Ranger, or Alchemist Class add +3 to their AG roll when interacting with a Cache."
      }
    ],
    mapImage: "/map_treasure_hunt.png"
  },
  {
    id: "supply-run",
    title: "Supply Run",
    season: "Season 2",
    description: "Ancient ruins from the bygone ages of Elders and gods are often overflowing with riches—coincidentally, with monsters as well.",
    setup: [
      "Intrigue Tokens: There are 2 Intrigue Tokens in the middle of the field. Each represents a bountiful pile of Resources.",
      "Cache Tokens: Each player has a Cache Token placed at the edge of their Deployment Zone.",
      "Standard Deployment: 8\" Deployment Zones."
    ],
    results: [
      "Gain 2 VP for each Resources deposited in your own Cache."
    ],
    specialEndConditions: [
      "If a player's party is in a state of Broken Morale at the start of their Strategic Phase, the Quest ends at the end of that Turn."
    ],
    questRules: [
      {
        title: "Schemes",
        content: "Before the Initiative Check, each player receives 1 Scheme Card. When drawing Schemes:\n- If Leader has INT 13 or less  draw 2 cards and choose 1 to keep.\n- If Leader has INT 14 or 15  draw 3 cards and choose 1 to keep.\n- If Leader has INT 16 or more  draw 4 cards and choose 1 to keep."
      },
      {
        title: "Resources (Intrigue)",
        content: "A model may loot the Resources and place them in its Inventory by declaring an Interact Action at the Intrigue Token. Models may not Interact with Intrigue Tokens during Round 1. Summoned models may not Interact with Intrigue Tokens at any time. Resources are an Item with Qty 1 and Wgt 1. (Resources can be represented in the Inventory by Toolkit cards.)"
      },
      {
        title: "Cache",
        content: "Each player has a Cache Token placed at the edge of their Deployment Zone. Models may deposit collected Resources into their Cache by performing an Interact Action with the Cache. When doing so, discard the Resources from the model's Inventory."
      },
      {
        title: "Hostile Guards",
        content: "Each Intrigue Token has a Tier III Hostile guarding it, initially placed in Base Contact with the token. The Hostile will only activate if there are player models within 16\" of the Intrigue Token it is guarding. If the Hostile is not Engaged and ends the turn 16\" or more away from its token, it returns to its initial position during the End Phase. If attacked from more than 16\" away, it will Dodge but remain in place.\n\nIf a model is carrying Resources, it becomes the Target Priority for these Hostiles. (This behavior takes priority over standard Hostile Behavior rules.)"
      }
    ],
    mapImage: "/map_supply_run.png"
  },
  {
    id: "secure-the-artefact",
    title: "Secure the Artefact",
    season: "Season 1",
    description: "Arcane artefacts are objects of great power, their crafting processes mostly lost to time. Often imbued with energy beyond mortal comprehension, they can greatly enhance one’s potential—some even hold enough mana to counter and collapse rifts. They are a rare commodity, one you cannot afford to let fall into another’s hands.",
    setup: [
      "Cache Tokens: There is 1 Cache in the center of the field. Inside the Cache lies the Arcane Artefact.",
      "Standard Deployment: 8” Deployment Zones"
    ],
    results: [
      "Gain 3 VP for unlocking the Cache.",
      "Gain 2 VP if your model has the Arcane Artefact in its Inventory at the end of the game.",
      "Gain 2 VP if your model leaves the field with the Arcane Artefact in its Inventory."
    ],
    specialEndConditions: [
      "The Quest ends when a model carrying the Arcane Artefact leaves the field via its own Deployment Zone."
    ],
    questRules: [
      {
        title: "Schemes",
        content: "Before the Initiative Check, each player receives 1 Scheme Card. When drawing Schemes:\n- If Leader has INT 13 or less  draw 1 card.\n- If Leader has INT 14 or 15  draw 2 cards and choose 1 to keep.\n- If Leader has INT 16 or more  draw 3 cards and choose 1 to keep."
      },
      {
        title: "Arcane Artefact (Cache)",
        content: "Models may not Interact with Cache during Round 1. Summoned models may not Interact with Cache at any time. A model in Base Contact with the Cache may declare an Interact Action and, by performing a successful AG or INT roll, unlock the Cache and take the Arcane Artefact. Once unlocked, it cannot be unlocked again.\n\nWhile carrying the Arcane Artefact, a model may voluntarily leave the field via its own Deployment Zone. The carrier suffers halved SPD and cannot be Shrouded. The Arcane Artefact is an Item with Qty 1 and Wgt 1.\n\n(If the model becomes Incapacitated or Dead, the Arcane Artefact is removed from its Inventory and placed in Base Contact with the model. The owner chooses the exact placement. Models that leave the field voluntarily are still considered present and alive for the purposes of Loss of Morale.)"
      },
      {
        title: "Class Bonus: Artificer, Enchanter, Wizard",
        content: "Models with the Artificer, Enchanter, or Wizard Class add +3 to their roll when interacting with the Cache."
      },
      {
        title: "1st Round Ceasefire",
        content: "Players cannot score VP during the first round. If a model targets an enemy model with an Attack or damages an enemy model with an Action during Round 1, that player's party receives a −4 VP penalty. Summoned models are an exception and can be targeted and damaged. (A player's VP score may drop below 0 as a result.)"
      }
    ],
    mapImage: "/map_secure_the_artefact.png",
    archived: true
  },
  {
    id: "magic-stones",
    title: "Magic Stones",
    season: "Season 2",
    description: "Strange crystalline formations occasionally bloom in places steeped in mana. They flare with energy, but can quickly fade—either being reclaimed by the rift, or by the abominations drawn to them, along with any who linger. Adventurers are often dispatched to such arcane ruins, contaminated lands near rifts, mana crystal fields, or other arcane nexuses to harvest this raw energy. Move fast, draw deep—and leave richer than you came.",
    setup: [
      "Magic Stones: There are 3 Objective Markers in the center line of the field representing Magic Stones.",
      "Standard Deployment: 8” Deployment Zones."
    ],
    results: [
      "Gain 2 VP at the end of Round 2 for each Objective Marker under your control.",
      "Gain 2 VP at the end of Round 4 for each Objective Marker under your control.",
      "IMPORTANT: Reset control over all Objective Markers to Neutral at the end of Round 2 and Round 4."
    ],
    questRules: [
      {
        title: "Schemes",
        content: "Before the Initiative Check, each player receives 1 Scheme Card. When drawing Schemes:\n- If Leader has INT 13 or less  draw 2 cards and choose 1 to keep.\n- If Leader has INT 14 or 15  draw 3 cards and choose 1 to keep.\n- If Leader has INT 16 or more  draw 4 cards and choose 1 to keep."
      },
      {
        title: "Magic Stones (Objective Markers)",
        content: "Models may not Interact with Objective Markers during Round 1.\n\nObjective Markers can be either Neutral or Controlled. At the start of the game, all Objective Markers are Neutral. A party may take control of a Neutral Objective Marker by having a model in Base Contact with it and performing an Interact Action — the marker then becomes Controlled by that model's party. If the Objective Marker is already Controlled, performing an Interact Action resets it to Neutral. Summoned models may not Interact with Objective Markers."
      }
    ],
    mapImage: "/map_magic_stones.png"
  },
  {
    id: "quarter-war",
    title: "Quarter War",
    season: "Season 2",
    description: "Be it a city, open plain, river, or ancient ruin, few places in Calad remain untouched by conflict. Small-scale skirmishes for control of territory are a common occurrence between rival factions, cults, and even neighboring lords.",
    setup: [
      "Corner Deployment: Players deploy in opposing corners. Each Deployment Zone extends 9\" from its corner."
    ],
    results: [
      "Receive 1 VP at the end of each round for each Quarter in which you have the Stronger Presence.",
      "Receive 1 VP at the end of each round for each Quarter containing one or more of your models and no enemy models."
    ],
    questRules: [
      {
        title: "Quarters",
        content: "The field is divided into four Quarters, as shown on the map."
      },
      {
        title: "Schemes",
        content: "Before the Initiative Check, each player receives 1 Scheme Card. When drawing Schemes:\n- If Leader has INT 13 or less  draw 2 cards and choose 1 to keep.\n- If Leader has INT 14 or 15  draw 3 cards and choose 1 to keep.\n- If Leader has INT 16 or more  draw 4 cards and choose 1 to keep."
      },
      {
        title: "1st Round Ceasefire",
        content: "Players cannot score VP during the first round. If a model targets an enemy model with an Attack or damages an enemy model with an Action during Round 1, that player's party receives a −4 VP penalty. Summoned models are an exception and can be targeted and damaged. (A player's VP score may drop below 0 as a result.)"
      },
      {
        title: "Stronger Presence",
        content: "Stronger Presence is determined by calculating the total Recruitment Points of each party fully within the specified Quarter. Add together the Recruitment Points of all Alive Party Members in that Quarter (do not include Upgrades). Compare this total with the other player(s). The player with the highest Recruitment Point total has the Stronger Presence."
      }
    ],
    mapImage: "/map_quarter-war.png"
  },
  {
    id: "clue-trail",
    title: "Clue Trail",
    season: "Season 2",
    description: "It is not uncommon for several adventuring parties to pursue the same bounty. This is especially true for investigations and tracking contracts, where competition is fierce. Such pursuits often lead to clashes with local authorities, rival adventurers, or even fellow guildmates.",
    setup: [
      "Clues: Place 4 Objective Markers on the center line. These represent Clues.",
      "Standard Deployment: 8\" Deployment Zones."
    ],
    results: [
      "Receive 1 VP at the end of each round for each Objective Marker under your control."
    ],
    specialEndConditions: [
      "Reset control over all Objective Markers to Neutral at the end of each round."
    ],
    questRules: [
      {
        title: "Schemes",
        content: "Before the Initiative Check, each player receives 1 Scheme Card. When drawing Schemes:\n- If Leader has INT 13 or less  draw 2 cards and choose 1 to keep.\n- If Leader has INT 14 or 15  draw 3 cards and choose 1 to keep.\n- If Leader has INT 16 or more  draw 4 cards and choose 1 to keep."
      },
      {
        title: "1st Round Ceasefire",
        content: "Players cannot score VP during the first round. If a model targets an enemy model with an Attack or damages an enemy model with an Action during Round 1, that player's party receives a −4 VP penalty. Summoned models are an exception and can be targeted and damaged. (A player's VP score may drop below 0 as a result.)"
      },
      {
        title: "Clues (Objective Markers)",
        content: "Models may not Interact with the Objective Markers in Round 1.\n\nObjective Markers can be either Neutral or Controlled. At the start of the game, all Objective Markers are Neutral. By performing an Interact Action with a marker, a player takes control of it. If the marker is already Controlled, performing an Interact Action with it reverts it to Neutral.\n\nAt the end of each round (after both players have completed their turns), the player not controlling the Controlled Objective Marker may move it up to 6\" in any direction, ignoring terrain, then revert it to Neutral.\n\nObjective Markers may not be moved inside scenery. Summoned models may not Interact with Objective Markers."
      }
    ],
    mapImage: "/map_clue-trail.png"
  },
  {
    id: "snail-chase",
    title: "Snail Chase",
    season: "Season 2",
    description: "Giant Ink Snails are among Thenion's most revered creatures. Their precious slime is essential in producing Thenian Royal Blue — the renowned purple dye prized throughout Calad. Each year, the matriarchs of the Netherealm oversee their great mating migration, offering generous rewards to those willing to shepherd these majestic beasts safely along their ancient routes.",
    setup: [
      "Standard Deployment: 8\" Deployment Zones.",
      "Ink Snails: After Deployment sides have been chosen, but before deploying models, each player (starting with the First Player) places 2 Objective Markers fully within their Deployment Zone. Mark each Objective Marker so it belongs to its owner. The markers represent Ink Snails."
    ],
    results: [
      "Receive 1 VP at the end of each round for each of your Ink Snails fully across the center line.",
      "Receive an additional 1 VP at the end of each round for each of your Ink Snails fully within your opponent's Deployment Zone."
    ],
    questRules: [
      {
        title: "Schemes",
        content: "Before the Initiative Check, each player receives 1 Scheme Card. When drawing Schemes:\n- If Leader has INT 13 or less  draw 2 cards and choose 1 to keep.\n- If Leader has INT 14 or 15  draw 3 cards and choose 1 to keep.\n- If Leader has INT 16 or more  draw 4 cards and choose 1 to keep."
      },
      {
        title: "Ink Snails (Objective Markers)",
        content: "Objective Markers represent Ink Snails. Starting with Round 2, a model may perform an Interact Action with any Objective Marker (including an opponent's) to move it up to 6\" in any direction, ignoring terrain. Objective Markers may not be moved inside scenery. Summoned models may not Interact with Objective Markers."
      }
    ],
    mapImage: "/map_snail-chase.png"
  },
  {
    id: "toxic-infestation",
    title: "Toxic Infestation",
    season: "Season 2",
    description: "The ancient taint never lingers. It spreads, corrupting the very elements that shape the land. Curseridden vines rapidly consume the earth, choking forests, poisoning wildlife, and giving rise to aberrations. Ordinary blades cannot cut the accursed growth. The vines can only be severed and culled through arcane means.",
    setup: [
      "Toxic Vines: Place 2 Objective Markers in opposite corners of the field. These represent the Toxic Vines.",
      "Corner Deployment: Players deploy in the two corners not occupied by the Toxic Vines. Each Deployment Zone extends 9\" from its corner."
    ],
    results: [
      "Gain 1 VP each time you defeat the Avatar of the Infestation.",
      "Gain 1 VP at the end of each round for each Toxic Vine under your control."
    ],
    specialEndConditions: [
      "Models may not Interact with Objective Markers during Round 1.",
      "Reset control over all Objective Markers to Neutral at the end of each round."
    ],
    questRules: [
      {
        title: "Schemes",
        content: "Before the Initiative Check, each player receives 1 Scheme Card. When drawing Schemes:\n- If Leader has INT 13 or less  draw 2 cards and choose 1 to keep.\n- If Leader has INT 14 or 15  draw 3 cards and choose 1 to keep.\n- If Leader has INT 16 or more  draw 4 cards and choose 1 to keep."
      },
      {
        title: "Toxic Spores",
        content: "The area within 2\" of an Objective Marker is considered Toxic Environment."
      },
      {
        title: "Toxic Vines (Objective Markers)",
        content: "Models may not Interact with the Objective Markers in Round 1.\n\nObjective Markers can be either Neutral or Controlled. At the start of the game, all Objective Markers are Neutral. By performing an Interact Action with a marker and spending 1 Mana, a player takes control of it. If the marker is already Controlled, performing an Interact Action with it reverts it to Neutral.\n\nAt the end of each round (after both players have completed their turns), move each Controlled marker 5\" directly toward the center of the field, then revert it to Neutral.\n\nSummoned models may not Interact with Objective Markers."
      },
      {
        title: "Avatar of the Infestation",
        content: "At the beginning of Round 2, place a Tier III Hostile at the center of the field, facing the 1st Player's Deployment Zone. This Hostile gains Survival (Toxic).\n\nWhenever a model causes a Wound to this Hostile while within 6\" of it, that model gains 1 Mana.\n\nIf there is no Avatar of the Infestation on the field during the Strategic Phase of any turn, spawn one facing the Active Player's Deployment Zone.\n\nHint: If a model cannot generate its own Mana, it can gain Mana by causing Wounds to the Avatar of the Infestation. This Mana can then be used to cull a Vine (take control of an Objective Marker)."
      }
    ],
    mapImage: "/map_toxic-infestation.png"
  }
];
