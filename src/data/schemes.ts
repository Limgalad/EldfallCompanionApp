export type Faction = "Neutral" | "Empire of Soga" | "Sand Kingdoms" | "HelHalla" | "Coalition of Free Cities" | "Coalition of Thenion" | "Helian League";

export interface Scheme {
  name: string;
  description: string;
  rollResult: string;
}

export interface SchemeCategory {
  faction: Faction;
  schemes: Scheme[];
}

export const questSchemes: SchemeCategory[] = [
  {
    faction: "Neutral",
    schemes: [
      {
        name: "Opportunistic Manipulation",
        rollResult: "1",
        description: "You may reveal this at the start of your Strategic Phase. Receive 1 VP (to a maximum of 3 VP) for each of your models that is Alive at the end of the game."
      },
      {
        name: "Assassination Contract",
        rollResult: "2",
        description: "Receive 3 VP for killing an enemy Leader (rendering it Dead)."
      },
      {
        name: "Virtuous Commander",
        rollResult: "3-4",
        description: "Receive 1 VP (to a maximum of 3 VP) for each of your models that is Alive at the end of the game."
      },
      {
        name: "Martial Valor",
        rollResult: "5-6",
        description: "Reveal this when your model Incapacitates an enemy model that costs more Recruitment Points; receive 2 VP. If another of your models Incapacitates a model that costs more RP, score an additional 1 VP."
      },
      {
        name: "No Quarter",
        rollResult: "7-8",
        description: "Receive 1VP for every Dead enemy model (to the max of 3VP)."
      },
      {
        name: "Stand Your Ground",
        rollResult: "9-10",
        description: "Reveal this Scheme during your Strategic Phase and discard it at the start of your next Strategic Phase. Receive 1 VP (to a maximum of 3 VP) for each model that did not move this turn."
      }
    ]
  },
  {
    faction: "Empire of Soga",
    schemes: [
      {
        name: "Head Hunt",
        rollResult: "11-12",
        description: "Receive 1VP (to the max of 3VP) for every Deathblow you perform against enemy models."
      },
      {
        name: "Open Aggression",
        rollResult: "13-14",
        description: "Reveal this Scheme during your Strategic Phase and discard it during the End Phase; receive 1VP for every Wound you deal to enemy models this turn (to the max of 3VP)."
      },
      {
        name: "Pursuit of Glory",
        rollResult: "15-16",
        description: "Reveal this Scheme during your Strategic Phase and discard it during the End Phase. Receive 1VP (to the max of 3VP) during the end Phase of that turn for every alive party member outside the Awareness of other party members."
      },
      {
        name: "Fierce as Fire, Immovable as a Mountain",
        rollResult: "17-18",
        description: "Reveal this card when one of your models first Wounds an enemy model in Reaction. Place a token on this card. When your model Wounds an enemy model in Reaction, place another token on this card. Score 1 VP for every token on this card (maximum of 3 VP)."
      },
      {
        name: "Engetsu Formation",
        rollResult: "19",
        description: "Receive 1VP (to the max of 3VP) for each party member in your Deployment Zone at the end of the game."
      },
      {
        name: "Stalwart Defender",
        rollResult: "20",
        description: "Receive 3VP if there are no enemy models in your Deployment Zone at the end of the game."
      }
    ]
  },
  {
    faction: "Coalition of Thenion",
    schemes: [
      {
        name: "Unmatched Flanking",
        rollResult: "11-12",
        description: "Reveal this Scheme during your Strategic Phase and discard it during the End Phase; receive 1VP for every Attack against an enemy model that has no LoS to your model before the Resolution Step of the Activation in this turn (to the max of 3VP)."
      },
      {
        name: "Leave Unnoticed",
        rollResult: "13-14",
        description: "Receive 1VP (to the max of 3VP) for every party member outside enemy models’ LoS at the end of the game."
      },
      {
        name: "Cunning Tenacity",
        rollResult: "15-16",
        description: "Receive 2VP for every model that did not lose HP throughout the game (to a maximum of 3)."
      },
      {
        name: "Breach Their Defenses",
        rollResult: "17-18",
        description: "Receive 2 VP for every party member in the enemy Deployment Zone (up to max of 3VP) at the end of the game."
      },
      {
        name: "Assassination Contract",
        rollResult: "19",
        description: "Receive 3 VP for killing an enemy Leader (rendering it Dead)."
      },
      {
        name: "Blood for Blood",
        rollResult: "20",
        description: "Reveal this Scheme during your Strategic Phase and discard it during the End Phase; select one of your models that suffered a Wound from an enemy model. Receive 3VP if you Incapacitate the enemy model that wounded your selected model this turn."
      }
    ]
  },
  {
    faction: "Helian League",
    schemes: [
      {
        name: "Decisive Victory",
        rollResult: "11-12",
        description: "Receive 3VP if all of your party members are alive at the end of the game."
      },
      {
        name: "Virtuous Commander",
        rollResult: "13-14",
        description: "Receive 1 VP (to a maximum of 3 VP) for each of your models that is Alive at the end of the game."
      },
      {
        name: "Last Warning",
        rollResult: "15-16",
        description: "Reveal this Scheme during your Strategic Phase and discard it during the End Phase; if your models do not declare Attack until your next Strategic Phase, you receive 3VP."
      },
      {
        name: "Fierce as Fire, Immovable as a Mountain",
        rollResult: "17-18",
        description: "Reveal this card when one of your models first Wounds an enemy model in Reaction. Place a token on this card. When your model Wounds an enemy model in Reaction, place another token on this card. Score 1 VP for every token on this card (maximum of 3 VP)."
      },
      {
        name: "Relentless Advance",
        rollResult: "19",
        description: "Reveal this Scheme during your Strategic Phase and discard it during the End Phase; receive 1 VP (to the max of 3) for every party member beyond the middle of the field at the end of this turn."
      },
      {
        name: "Peacekeeping Paragon",
        rollResult: "20",
        description: "Receive 1 VP for each enemy model that is Alive at the end of the game (to a maximum of 3 VP)."
      }
    ]
  },
  {
    faction: "Sand Kingdoms",
    schemes: [
      {
        name: "Stand Your Ground",
        rollResult: "11-12",
        description: "Reveal this Scheme during your Strategic Phase and discard it at the start of your next Strategic Phase. Receive 1 VP (to a maximum of 3 VP) for each model that did not move this turn."
      },
      {
        name: "Appear Weak When You Are Strong",
        rollResult: "13-14",
        description: "Receive 1VP for every Wound you deal to enemy models with Melee Attack (to a maximum of 3.)"
      },
      {
        name: "Unhindered Expedition",
        rollResult: "15-16",
        description: "Reveal this Scheme during your Strategic Phase and discard it during the End Phase. Receive 2 VP if you have 3 models outside your Deployment Zone (excluding summoned creatures) at the end of the turn, and an additional 1 VP if at least 1 of those models is in the opponent’s Deployment Zone."
      },
      {
        name: "Strength in Numbers",
        rollResult: "17-18",
        description: "Receive 2 VP if you have more alive models (including summoned creatures) than your opponent at the end of the game. Receive an additional 1 VP if you have at least twice as many models alive as your opponent."
      },
      {
        name: "Steadfast Expansion",
        rollResult: "19",
        description: "Receive 1VP (to the max of 3VP) for every party member beyond the middle of the field at the end of the game (not counting your summoned creatures)."
      },
      {
        name: "Stalwart Defender",
        rollResult: "20",
        description: "Receive 3VP if there are no enemy models in your deployment zone at the end of the game."
      }
    ]
  }
];
