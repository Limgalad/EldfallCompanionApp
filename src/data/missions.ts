export interface Mission {
  id: string;
  title: string;
  season: string;
  description: string;
  setup: string[];
  results: string[];
  specialEndConditions?: string[];
  questRules: {
    title: string;
    content: string;
  }[];
  mapImage: string;
}

export const missions: Mission[] = [
  {
    id: "open-hostilities",
    title: "Open Hostilities",
    season: "Season 1",
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
        content: "Before the Initiative Check, each player receives 1 Scheme Card. When drawing Schemes:\n• If Leader has INT 13 or less draw 1 card.\n• If Leader has INT 14 or 15 draw 2 cards and choose 1 to keep.\n• If Leader has INT 16 or more draw 3 cards and choose 1 to keep."
      }
    ],
    mapImage: ""
  },
  {
    id: "awaiting-reinforcements",
    title: "Awaiting Reinforcements",
    season: "Season 1",
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
        content: "Before the Initiative Check, each player receives 1 Scheme Card. When drawing Schemes:\n• If Leader has INT 13 or less draw 1 card.\n• If Leader has INT 14 or 15 draw 2 cards and choose 1 to keep.\n• If Leader has INT 16 or more draw 3 cards and choose 1 to keep."
      },
      {
        title: "No Morale Loss",
        content: "Models ignore the Broken Morale rule during this Quest."
      },
      {
        title: "1st Round Ceasefire",
        content: "Players cannot score VP during the first round. If a model targets an enemy model with an Attack or damages an enemy model with an Action during Round 1, that player’s party receives a –4 VP penalty. Summoned models are an exception to this rule and can be targeted and damaged.\n(A player’s VP score may drop below 0 as a result.)"
      },
      {
        title: "Stronger Presence",
        content: "Stronger Presence is determined by calculating a party’s Recruitment Point total within the specified area. Add together the Recruitment Points of all Alive Party Members in that area (do not include Upgrades).\nCompare this total to that of the other player(s). The player with the higher Recruitment Point count has the Stronger Presence."
      }
    ],
    mapImage: "/map_awaiting_reinforcements.png"
  },
  {
    id: "treasure-hunt",
    title: "Treasure Hunt",
    season: "Season 1",
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
      "If a player’s party is in a state of Broken Morale at the start of their Strategic phase, the Quest ends at the end of that Turn."
    ],
    questRules: [
      {
        title: "Schemes",
        content: "Before the Initiative Check, each player receives 1 Scheme Card. When drawing Schemes:\n• If Leader has INT 13 or less draw 1 card.\n• If Leader has INT 14 or 15 draw 2 cards and choose 1 to keep.\n• If Leader has INT 16 or more draw 3 cards and choose 1 to keep."
      },
      {
        title: "Treasure (Cache)",
        content: "A Treasure is represented by a Cache Token. Models may not Interact with Cache during Round 1. To access the Treasure, a player’s model must first reveal the Intrigue Token by successfully performing the Perceive Action. An Intrigue Token is also automatically revealed if a model comes into Base Contact with it. When revealed, the Intrigue Token is replaced with a Sigil Token.\nA model in Base Contact with a Cache token may declare an Interact Action. By performing a successful AG roll, the model unlocks the Cache, takes the Treasure and places it into its Inventory. Once the Cache is unlocked, it cannot be unlocked again.\nSummoned models may not interact with Cache Tokens.\nA player whose model has this Item in its Inventory at the end of the game gains 2 VP. A model with a Treasure in its Inventory may voluntarily leave the field via its own Deployment Zone. A model carrying a Treasure cannot be Shrouded or Flying. Treasure is an Item with Qty 1 and Wgt 1.\n(Note: If the model becomes Incapacitated or Dead, the Treasure is removed from its Inventory and placed in Base Contact with the model. Models that leave the field voluntarily are still considered present and alive for the purposes of Loss of Morale.)"
      },
      {
        title: "Sigils",
        content: "Sigils don’t trigger Round 1. Each Sigil Token has a specific Spell assigned to it, determined by rolling a die and consulting the chart. The Spell is triggered when a model comes into Base Contact with either the Sigil Token or the Cache Token beneath it. When triggered, the Spell is considered successfully cast and will hit all models within its AoE, unless they perform a successful Dodge. These Spells have PW 14. After the Spell is triggered and resolved, remove the Sigil Token.\n\nRoll Result | Spell\n1-4 | Inferno\n5-8 | Glacier Circle\n9-12 | Claws of Earth\n13-16 | Thunderstorm\n17-18 | Mass Mindbreak\n19 | Corroding Embrace\n20 | Smite"
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
    season: "Season 1",
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
      "If a player’s party is in a state of Broken Morale at the start of their Strategic phase, the Quest ends at the end of that Turn."
    ],
    questRules: [
      {
        title: "Schemes",
        content: "Before the Initiative Check, each player receives 1 Scheme Card. When drawing Schemes:\n• If Leader has INT 13 or less draw 1 card.\n• If Leader has INT 14 or 15 draw 2 cards and choose 1 to keep.\n• If Leader has INT 16 or more draw 3 cards and choose 1 to keep."
      },
      {
        title: "Resources (Intrigue)",
        content: "A model may loot the Resources and place them in its Inventory by declaring an Interact action at the Intrigue Token.\nModels may not Interact with Intrigue Tokens during Round 1.\nSummoned models may not Interact with Intrigue Tokens at any time. Resources are an Item with Qty 1 and Wgt 1.\n(Resources can be represented in the Inventory by Toolkit cards.)"
      },
      {
        title: "Cache",
        content: "Each player has a Cache Token placed at the edge of their Deployment Zone, as shown on the map. Your models may deposit collected Resources into your Cache by performing an Interact action with the Cache. When doing so, discard the Resources from the model’s Inventory."
      },
      {
        title: "Hostile Guards",
        content: "The Hostiles are guarding the precious resources. As shown on the map, each Intrigue Token has a Tier III Hostile guarding it. This Hostile is initially placed in Base Contact with the token. The Hostile will only activate if there are player models within 16” of the Intrigue Token it is guarding. If the Hostile is not engaged and ends the turn 16” or more away from its Intrigue Token, it returns to its initial position during the End Phase of that turn. If the Hostile is attacked from more than 16” away from the token, it will Dodge but remain in place.\nIf a model is carrying Resources, it becomes the Target Priority for these Hostiles.\n(This behavior takes priority over standard Hostile Behavior rules.)"
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
        content: "Before the Initiative Check, each player receives 1 Scheme Card. When drawing Schemes:\n• If Leader has INT 13 or less draw 1 card.\n• If Leader has INT 14 or 15 draw 2 cards and choose 1 to keep.\n• If Leader has INT 16 or more draw 3 cards and choose 1 to keep."
      },
      {
        title: "Class Bonus: Artificer, Enchanter, Wizard",
        content: "Models with the Artificer, Enchanter, or Wizard Class add +3 to their roll when interacting with the Cache."
      },
      {
        title: "1st Round Ceasefire",
        content: "Players cannot score VP during the first round. If a model targets an enemy model with an Attack or damages an enemy model with an Action during Round 1, that player’s party receives a –4 VP penalty. Summoned models are an exception to this rule and can be targeted and damaged.\n(A player’s VP score may drop below 0 as a result.)"
      },
      {
        title: "Arcane Artefact (Cache)",
        content: "Models may not Interact with Cache during Round 1. Summoned models may not Interact with Cache at any time.\nA model in Base Contact with the Cache token may declare an Interact action and, by performing a successful AG or INT roll, unlock the Cache and take the Arcane Artefact, placing it into its Inventory. Once the Cache is unlocked, it cannot be unlocked again.\nWhile a model has the Arcane Artefact in its Inventory, it may voluntarily leave the field via its own Deployment Zone. The Arcane Artefact is an Item with Qty 1 and Wgt 1. Additionally, the model carrying it suffers halved SPD and cannot be Shrouded.\n(If the model becomes Incapacitated or Dead, the Arcane Artefact is removed from its Inventory and placed in Base Contact with the model. The owner of the model chooses the exact placement. Models that leave the field voluntarily are still considered present and alive for the purposes of Loss of Morale.)"
      }
    ],
    mapImage: "/map_secure_the_artefact.png"
  },
  {
    id: "magic-stones",
    title: "Magic Stones",
    season: "Season 1",
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
        content: "Before the Initiative Check, each player receives 1 Scheme Card. When drawing Schemes:\n• If Leader has INT 13 or less draw 1 card.\n• If Leader has INT 14 or 15 draw 2 cards and choose 1 to keep.\n• If Leader has INT 16 or more draw 3 cards and choose 1 to keep."
      },
      {
        title: "Magic Stones (Objective Markers)",
        content: "Objective Markers can be either Neutral or Controlled. At the start of the game, all Objective Markers are Neutral. A party may take control of a Neutral Objective Marker by having a model in Base Contact with it and performing an Interact action. The marker then becomes Controlled by that model’s party. If the Objective Marker is already Controlled, performing an Interact action with it resets it to Neutral. Summoned models may not Interact with Objective Markers."
      }
    ],
    mapImage: "/map_magic_stones.png"
  }
];
