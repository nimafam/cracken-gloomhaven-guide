// Pack totals: index.html on main. Component families: original visual reference.
// Replace null quantities with the confirmed regrouped BOM; never distribute totals arbitrarily.
// Measured entries need weightStatus: "measured" and a traceable weightSource.
const SAFETY_MARGIN = 0.20;
const EXPECTED_PIECES = 339;
const productionPacks = [
  {
    "sku": "GU-01",
    "title": "Doors & Entrances",
    "expectedPieces": 28,
    "components": [
      {
        "name": "Stone / Wood Doors",
        "quantity": null,
        "material": "PLA",
        "color": "Stone gray",
        "unitGrams": 35,
        "weightStatus": "estimate",
        "weightSource": "Provisional conservative planning allowance; verify with final geometry and slicer."
      },
      {
        "name": "Fog Doors",
        "quantity": null,
        "material": "Transparent resin",
        "color": "Clear",
        "unitGrams": 20,
        "weightStatus": "estimate",
        "weightSource": "Provisional conservative planning allowance; verify with final geometry and slicer."
      },
      {
        "name": "Snow Doors",
        "quantity": null,
        "material": "PLA",
        "color": "Snow white",
        "unitGrams": 35,
        "weightStatus": "estimate",
        "weightSource": "Provisional conservative planning allowance; verify with final geometry and slicer."
      },
      {
        "name": "Metal Doors",
        "quantity": null,
        "material": "PLA",
        "color": "Steel gray",
        "unitGrams": 35,
        "weightStatus": "estimate",
        "weightSource": "Provisional conservative planning allowance; verify with final geometry and slicer."
      }
    ]
  },
  {
    "sku": "GU-02",
    "title": "Traps & Mechanisms",
    "expectedPieces": 32,
    "components": [
      {
        "name": "Pressure Plates",
        "quantity": null,
        "material": "PLA",
        "color": "Stone gray",
        "unitGrams": 12,
        "weightStatus": "estimate",
        "weightSource": "Provisional conservative planning allowance; verify with final geometry and slicer."
      },
      {
        "name": "Spike Pits",
        "quantity": null,
        "material": "PLA",
        "color": "Stone gray",
        "unitGrams": 20,
        "weightStatus": "estimate",
        "weightSource": "Provisional conservative planning allowance; verify with final geometry and slicer."
      },
      {
        "name": "Bear Traps",
        "quantity": null,
        "material": "Standard resin",
        "color": "Steel gray",
        "unitGrams": 10,
        "weightStatus": "estimate",
        "weightSource": "Provisional conservative planning allowance; verify with final geometry and slicer."
      },
      {
        "name": "Poison Gas",
        "quantity": null,
        "material": "Transparent resin",
        "color": "Clear",
        "unitGrams": 15,
        "weightStatus": "estimate",
        "weightSource": "Provisional conservative planning allowance; verify with final geometry and slicer."
      }
    ]
  },
  {
    "sku": "GU-03",
    "title": "Treasure & Loot",
    "expectedPieces": 26,
    "components": [
      {
        "name": "Treasure Chests",
        "quantity": null,
        "material": "Standard resin",
        "color": "Walnut brown",
        "unitGrams": 15,
        "weightStatus": "estimate",
        "weightSource": "Provisional conservative planning allowance; verify with final geometry and slicer."
      },
      {
        "name": "Loot Satchels",
        "quantity": null,
        "material": "PLA",
        "color": "Walnut brown",
        "unitGrams": 8,
        "weightStatus": "estimate",
        "weightSource": "Provisional conservative planning allowance; verify with final geometry and slicer."
      }
    ]
  },
  {
    "sku": "GU-04",
    "title": "Dungeon Furniture",
    "expectedPieces": 28,
    "components": [
      {
        "name": "Barrels",
        "quantity": null,
        "material": "PLA",
        "color": "Walnut brown",
        "unitGrams": 25,
        "weightStatus": "estimate",
        "weightSource": "Provisional conservative planning allowance; verify with final geometry and slicer."
      },
      {
        "name": "Shelves",
        "quantity": null,
        "material": "PLA",
        "color": "Walnut brown",
        "unitGrams": 45,
        "weightStatus": "estimate",
        "weightSource": "Provisional conservative planning allowance; verify with final geometry and slicer."
      },
      {
        "name": "Cabinets",
        "quantity": null,
        "material": "PLA",
        "color": "Walnut brown",
        "unitGrams": 45,
        "weightStatus": "estimate",
        "weightSource": "Provisional conservative planning allowance; verify with final geometry and slicer."
      },
      {
        "name": "Crates",
        "quantity": null,
        "material": "PLA",
        "color": "Walnut brown",
        "unitGrams": 25,
        "weightStatus": "estimate",
        "weightSource": "Provisional conservative planning allowance; verify with final geometry and slicer."
      },
      {
        "name": "Tables",
        "quantity": null,
        "material": "PLA",
        "color": "Walnut brown",
        "unitGrams": 40,
        "weightStatus": "estimate",
        "weightSource": "Provisional conservative planning allowance; verify with final geometry and slicer."
      },
      {
        "name": "Bookcases",
        "quantity": null,
        "material": "PLA",
        "color": "Walnut brown",
        "unitGrams": 50,
        "weightStatus": "estimate",
        "weightSource": "Provisional conservative planning allowance; verify with final geometry and slicer."
      }
    ]
  },
  {
    "sku": "GU-05",
    "title": "Dungeon Decoration",
    "expectedPieces": 23,
    "components": [
      {
        "name": "Fountains",
        "quantity": null,
        "material": "PLA",
        "color": "Stone gray",
        "unitGrams": 60,
        "weightStatus": "estimate",
        "weightSource": "Provisional conservative planning allowance; verify with final geometry and slicer."
      },
      {
        "name": "Pillars",
        "quantity": null,
        "material": "PLA",
        "color": "Stone gray",
        "unitGrams": 40,
        "weightStatus": "estimate",
        "weightSource": "Provisional conservative planning allowance; verify with final geometry and slicer."
      },
      {
        "name": "Statues",
        "quantity": null,
        "material": "Standard resin",
        "color": "Stone gray",
        "unitGrams": 35,
        "weightStatus": "estimate",
        "weightSource": "Provisional conservative planning allowance; verify with final geometry and slicer."
      },
      {
        "name": "Altars",
        "quantity": null,
        "material": "PLA",
        "color": "Stone gray",
        "unitGrams": 40,
        "weightStatus": "estimate",
        "weightSource": "Provisional conservative planning allowance; verify with final geometry and slicer."
      },
      {
        "name": "Sarcophagi",
        "quantity": null,
        "material": "PLA",
        "color": "Stone gray",
        "unitGrams": 50,
        "weightStatus": "estimate",
        "weightSource": "Provisional conservative planning allowance; verify with final geometry and slicer."
      },
      {
        "name": "Crystals",
        "quantity": null,
        "material": "Transparent resin",
        "color": "Clear",
        "unitGrams": 20,
        "weightStatus": "estimate",
        "weightSource": "Provisional conservative planning allowance; verify with final geometry and slicer."
      }
    ]
  },
  {
    "sku": "GU-06",
    "title": "Rocks & Cave",
    "expectedPieces": 41,
    "components": [
      {
        "name": "Boulders",
        "quantity": null,
        "material": "PLA",
        "color": "Stone gray",
        "unitGrams": 45,
        "weightStatus": "estimate",
        "weightSource": "Provisional conservative planning allowance; verify with final geometry and slicer."
      },
      {
        "name": "Rubble",
        "quantity": null,
        "material": "PLA",
        "color": "Stone gray",
        "unitGrams": 30,
        "weightStatus": "estimate",
        "weightSource": "Provisional conservative planning allowance; verify with final geometry and slicer."
      },
      {
        "name": "Stalagmites",
        "quantity": null,
        "material": "PLA",
        "color": "Stone gray",
        "unitGrams": 35,
        "weightStatus": "estimate",
        "weightSource": "Provisional conservative planning allowance; verify with final geometry and slicer."
      },
      {
        "name": "Rock Columns",
        "quantity": null,
        "material": "PLA",
        "color": "Stone gray",
        "unitGrams": 50,
        "weightStatus": "estimate",
        "weightSource": "Provisional conservative planning allowance; verify with final geometry and slicer."
      },
      {
        "name": "Cave Walls",
        "quantity": null,
        "material": "PLA",
        "color": "Stone gray",
        "unitGrams": 60,
        "weightStatus": "estimate",
        "weightSource": "Provisional conservative planning allowance; verify with final geometry and slicer."
      },
      {
        "name": "Dark Pits",
        "quantity": null,
        "material": "PLA",
        "color": "Charcoal black",
        "unitGrams": 20,
        "weightStatus": "estimate",
        "weightSource": "Provisional conservative planning allowance; verify with final geometry and slicer."
      }
    ]
  },
  {
    "sku": "GU-07",
    "title": "Forest & Nature",
    "expectedPieces": 29,
    "components": [
      {
        "name": "Thorns",
        "quantity": null,
        "material": "PLA",
        "color": "Forest green",
        "unitGrams": 20,
        "weightStatus": "estimate",
        "weightSource": "Provisional conservative planning allowance; verify with final geometry and slicer."
      },
      {
        "name": "Trees",
        "quantity": null,
        "material": "PLA",
        "color": "Walnut brown",
        "unitGrams": 60,
        "weightStatus": "estimate",
        "weightSource": "Provisional conservative planning allowance; verify with final geometry and slicer."
      },
      {
        "name": "Bushes",
        "quantity": null,
        "material": "PLA",
        "color": "Forest green",
        "unitGrams": 25,
        "weightStatus": "estimate",
        "weightSource": "Provisional conservative planning allowance; verify with final geometry and slicer."
      },
      {
        "name": "Logs",
        "quantity": null,
        "material": "PLA",
        "color": "Walnut brown",
        "unitGrams": 35,
        "weightStatus": "estimate",
        "weightSource": "Provisional conservative planning allowance; verify with final geometry and slicer."
      },
      {
        "name": "Stumps",
        "quantity": null,
        "material": "PLA",
        "color": "Walnut brown",
        "unitGrams": 25,
        "weightStatus": "estimate",
        "weightSource": "Provisional conservative planning allowance; verify with final geometry and slicer."
      },
      {
        "name": "Nests",
        "quantity": null,
        "material": "PLA",
        "color": "Walnut brown",
        "unitGrams": 15,
        "weightStatus": "estimate",
        "weightSource": "Provisional conservative planning allowance; verify with final geometry and slicer."
      }
    ]
  },
  {
    "sku": "GU-08",
    "title": "Architecture",
    "expectedPieces": 20,
    "components": [
      {
        "name": "Stone Stairs",
        "quantity": null,
        "material": "PLA",
        "color": "Stone gray",
        "unitGrams": 50,
        "weightStatus": "estimate",
        "weightSource": "Provisional conservative planning allowance; verify with final geometry and slicer."
      },
      {
        "name": "Wall Sections",
        "quantity": null,
        "material": "PLA",
        "color": "Stone gray",
        "unitGrams": 50,
        "weightStatus": "estimate",
        "weightSource": "Provisional conservative planning allowance; verify with final geometry and slicer."
      },
      {
        "name": "Wooden Stairs",
        "quantity": null,
        "material": "PLA",
        "color": "Walnut brown",
        "unitGrams": 45,
        "weightStatus": "estimate",
        "weightSource": "Provisional conservative planning allowance; verify with final geometry and slicer."
      },
      {
        "name": "Barricades",
        "quantity": null,
        "material": "PLA",
        "color": "Walnut brown",
        "unitGrams": 30,
        "weightStatus": "estimate",
        "weightSource": "Provisional conservative planning allowance; verify with final geometry and slicer."
      }
    ]
  },
  {
    "sku": "GU-09",
    "title": "Water & Hazardous",
    "expectedPieces": 24,
    "components": [
      {
        "name": "Water Terrain",
        "quantity": null,
        "material": "Transparent resin",
        "color": "Clear",
        "unitGrams": 25,
        "weightStatus": "estimate",
        "weightSource": "Provisional conservative planning allowance; verify with final geometry and slicer."
      },
      {
        "name": "Hazardous Coals",
        "quantity": null,
        "material": "PLA",
        "color": "Charcoal black",
        "unitGrams": 20,
        "weightStatus": "estimate",
        "weightSource": "Provisional conservative planning allowance; verify with final geometry and slicer."
      }
    ]
  },
  {
    "sku": "GU-10",
    "title": "Ice & Crystal",
    "expectedPieces": 38,
    "components": [
      {
        "name": "Ice Crystals",
        "quantity": null,
        "material": "Transparent resin",
        "color": "Clear",
        "unitGrams": 25,
        "weightStatus": "estimate",
        "weightSource": "Provisional conservative planning allowance; verify with final geometry and slicer."
      },
      {
        "name": "Ice Pillars",
        "quantity": null,
        "material": "Transparent resin",
        "color": "Clear",
        "unitGrams": 40,
        "weightStatus": "estimate",
        "weightSource": "Provisional conservative planning allowance; verify with final geometry and slicer."
      },
      {
        "name": "Ice Spikes",
        "quantity": null,
        "material": "Transparent resin",
        "color": "Clear",
        "unitGrams": 25,
        "weightStatus": "estimate",
        "weightSource": "Provisional conservative planning allowance; verify with final geometry and slicer."
      },
      {
        "name": "Ice Terrain",
        "quantity": null,
        "material": "Transparent resin",
        "color": "Clear",
        "unitGrams": 30,
        "weightStatus": "estimate",
        "weightSource": "Provisional conservative planning allowance; verify with final geometry and slicer."
      },
      {
        "name": "Ice Blocks",
        "quantity": null,
        "material": "Transparent resin",
        "color": "Clear",
        "unitGrams": 35,
        "weightStatus": "estimate",
        "weightSource": "Provisional conservative planning allowance; verify with final geometry and slicer."
      }
    ]
  },
  {
    "sku": "GU-11",
    "title": "Snow & Frozen Terrain",
    "expectedPieces": 28,
    "components": [
      {
        "name": "Frozen Debris",
        "quantity": null,
        "material": "PLA",
        "color": "Snow white",
        "unitGrams": 30,
        "weightStatus": "estimate",
        "weightSource": "Provisional conservative planning allowance; verify with final geometry and slicer."
      },
      {
        "name": "Snow Logs",
        "quantity": null,
        "material": "PLA",
        "color": "Snow white",
        "unitGrams": 35,
        "weightStatus": "estimate",
        "weightSource": "Provisional conservative planning allowance; verify with final geometry and slicer."
      },
      {
        "name": "Snow Rocks",
        "quantity": null,
        "material": "PLA",
        "color": "Snow white",
        "unitGrams": 40,
        "weightStatus": "estimate",
        "weightSource": "Provisional conservative planning allowance; verify with final geometry and slicer."
      },
      {
        "name": "Snow Drifts",
        "quantity": null,
        "material": "PLA",
        "color": "Snow white",
        "unitGrams": 35,
        "weightStatus": "estimate",
        "weightSource": "Provisional conservative planning allowance; verify with final geometry and slicer."
      }
    ]
  },
  {
    "sku": "GU-12",
    "title": "Ancient Technology",
    "expectedPieces": 14,
    "components": [
      {
        "name": "Control Panels",
        "quantity": null,
        "material": "Standard resin",
        "color": "Steel gray",
        "unitGrams": 20,
        "weightStatus": "estimate",
        "weightSource": "Provisional conservative planning allowance; verify with final geometry and slicer."
      },
      {
        "name": "Metal Cabinets",
        "quantity": null,
        "material": "PLA",
        "color": "Steel gray",
        "unitGrams": 40,
        "weightStatus": "estimate",
        "weightSource": "Provisional conservative planning allowance; verify with final geometry and slicer."
      },
      {
        "name": "Power Conduits",
        "quantity": null,
        "material": "PLA",
        "color": "Steel gray",
        "unitGrams": 20,
        "weightStatus": "estimate",
        "weightSource": "Provisional conservative planning allowance; verify with final geometry and slicer."
      }
    ]
  },
  {
    "sku": "GU-13",
    "title": "Special Scenario Props",
    "expectedPieces": 8,
    "components": [
      {
        "name": "Special Altars",
        "quantity": null,
        "material": "Standard resin",
        "color": "Stone gray",
        "unitGrams": 50,
        "weightStatus": "estimate",
        "weightSource": "Provisional conservative planning allowance; verify with final geometry and slicer."
      },
      {
        "name": "Glowing Orb",
        "quantity": null,
        "material": "Transparent resin",
        "color": "Clear",
        "unitGrams": 20,
        "weightStatus": "estimate",
        "weightSource": "Provisional conservative planning allowance; verify with final geometry and slicer."
      },
      {
        "name": "Scenario Mast",
        "quantity": null,
        "material": "Standard resin",
        "color": "Stone gray",
        "unitGrams": 45,
        "weightStatus": "estimate",
        "weightSource": "Provisional conservative planning allowance; verify with final geometry and slicer."
      }
    ]
  }
];
