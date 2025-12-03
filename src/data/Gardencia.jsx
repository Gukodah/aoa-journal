export const Gardencia = {
  "id": "gardencia",
  "name": "Gardencia",
  "tier": 2,
  "prerequisiteDimension": "Precasia",
  "theme": "Arquipélago de ilhas floridas com flores gigantes e mares verdes, repleto de vida vegetal abundante.",
  "shortDescription": "Dimensão de ilhas flutuantes cercadas por um mar esmeralda, com gramados perfumados, flores gigantes, estufas naturais e estruturas médicas de plantações.",
  "realmstone": {
    "obtainHint": "Jogue um Blank Realmstone em uma plantação de cenouras totalmente crescida em Precasia para obter Primitive Carrotop e deste dropará a Gardencia Realmstone. ",
    "obtainDetails": "Em Precasia, cultive cenouras até o estado final. Com um Blank Realmstone no inventário, plante a cenoura, espere que o Primitive Carrotop apareça como mob especial, derrote-o para que ele solte a Gardencia Realmstone. Ative o portal para entrar na dimensão.",
    "imageUrl": "/dimensions/gardencia_images/Gardencia_Realmstone.png"
  },
  "imageUrl": "/dimensions/biomes/gardencia.png",
  "wikiUrl": "https://adventofascension.fandom.com/wiki/Gardencia",
  "mainObjectives": [
    {
      "id": "unlock_gardencia",
      "title": "Desbloquear Gardencia",
      "description": "Obtenha a Gardencia Realmstone através da tarefa de cenoura em Precasia e ative o portal para entrar na dimensão.",
      "imageUrl": "/dimensions/gardencia_images/Gardencia_Realmstone.png"
    },
    {
      "id": "explore_islands",
      "title": "Explorar as ilhas floridas",
      "description": "Viajar pelas ilhas de Aromatic Grass e Aromatic Dirt, coletar blocos florais gigantes e interagir com estruturas únicas como Floro Castle, Garden Castle e Wizard Flowers. ",
      "imageUrl": "/dimensions/gardencia_images/Garden_Castle.png"
    },
    {
      "id": "defeat_vinocorne",
      "title": "Derrotar Vinocorne",
      "description": "Use Petals em um Vinocorne Shrine para invocar o boss Vinocorne e derrotá-lo como parte da progressão principal da dimensão. ",
      "imageUrl": "/dimensions/common_images/Vinocorne.png"
    }
  ],
  "secondaryObjectives": [
    {
      "id": "build_flower_base",
      "title": "Montar uma base temática floral",
      "description": "Usar os blocos coloridos de Gardencia, como Gardencian Bricks, Rosidian Bricks, Petal Crafting Station e blocos de flores gigantes para construir uma base ou vila com tema de jardim.",
      "imageUrl": "/dimensions/gardencia_images/Gardencian_Bricks.png"
    },
    {
      "id": "farm_mobs_plants",
      "title": "Farmar mobs e plantas especiais",
      "description": "Derrote os mobs florais e interaja com estruturas como Wizard Flowers, Daysee Flowers e Floro Lottoman para obter sementes especiais, Nature Melon Slice e Chilli Seeds. ",
      "imageUrl": "/dimensions/dustopia_images/Chilli_Seeds.png"
    },
    {
      "id": "complete_bestiary",
      "title": "Completar o bestiário de Gardencia",
      "description": "Enfrentar todas as variantes de mobs da dimensão (Archvine, Broccohead, Carrotop, Corny, Pod Plant, Sunny, Vine Wizard etc.) para registrar no diário de progresso.",
      "imageUrl": "/dimensions/gardencia_images/Archvine.png"
    }
  ],
  "progressionNotes": [
    {
      "id": "progress_tier2_flora",
      "title": "Dimensão de tier 2 focada em flora",
      "description": "Gardencia é uma dimensão de tier 2 após Precasia, com ênfase em coleta de blocos, plantas e mobs vegetais em vez de combate pesado. Ideal para explorar e construir. ",
      "imageUrl": "/dimensions/biomes/gardencia.png"
    },
    {
      "id": "preparation_for_late",
      "title": "Preparação para conteúdo posterior",
      "description": "Os recursos obtidos (sementes especiais, blocos decorativos, mobs vegetais) auxiliam na progressão para dimensões de tier 3 ou ramos alternativos, tanto em poder quanto em estilo de construção.",
      "imageUrl": "/dimensions/dustopia_images/Chilli_Seeds.png"
    }
  ],
  "versionNotes": "Segundo a wiki, versão listada como 1.1 para Gardencia.  As versões 1.1.3 de Nevermine provavelmente mantêm esse acesso e tema, com possíveis ajustes em loot e geração.",
  "mobs": [
    {
      "entity": "EntityFlowerface",
      "weight": 20,
      "min": 0,
      "max": 1,
      "creatureType": "monster",
      "registeredBiomes": [
        {
          "name": "Gardencia",
          "imageUrl": "/dimensions/biomes/gardencia.png"
        },
        {
          "name": "Gardencia Fungal",
          "imageUrl": "/dimensions/biomes/Gardencian_Fungal.png"
        },
        {
          "name": "Gardencia Marsh",
          "imageUrl": "/dimensions/gardencia_images/Gardencian_Marsh.png"
        }
      ],
      "loot": [
        {
          "item": "Small Red Petal",
          "itemId": "Itemizer.SmallPedalRed",
          "quantity": 1,
          "chance": 1,
          "imageUrl": "/textures/items/smallPedalRed.png"
        },
        {
          "item": "Ancient Cavern Realmstone",
          "itemId": "Itemizer.RealmstoneAncientCavern",
          "quantity": 2,
          "chance": 1,
          "imageUrl": "/textures/items/realmstoneAncientCavern.png"
        },
        {
          "item": "Vox Ponds Realmstone",
          "itemId": "Itemizer.RealmstoneVoxPonds",
          "quantity": 2,
          "chance": 1,
          "imageUrl": "/textures/items/realmstoneVoxPonds.png"
        }
      ],
      "imageUrl": "/textures/mobs/flowerface.png",
      "model": "/models/gardencia/flowerface/flowerface.gltf",
      "health": 100
    },
    {
      "entity": "EntityArchvine",
      "weight": 20,
      "min": 0,
      "max": 1,
      "creatureType": "monster",
      "registeredBiomes": [
        {
          "name": "Gardencia",
          "imageUrl": "/dimensions/biomes/gardencia.png"
        },
        {
          "name": "Gardencia Fungal",
          "imageUrl": "/dimensions/biomes/Gardencian_Fungal.png"
        },
        {
          "name": "Gardencia Marsh",
          "imageUrl": "/dimensions/gardencia_images/Gardencian_Marsh.png"
        }
      ],
      "loot": [
        {
          "item": "Floro Upgrade Kit",
          "itemId": "Itemizer.UpgradeKitFloro",
          "quantity": 1,
          "chance": 1,
          "imageUrl": "/textures/items/upgradeKitFloro.png"
        },
        {
          "item": "Small Blue Petal",
          "itemId": "Itemizer.SmallPedalBlue",
          "quantity": 1,
          "chance": 1,
          "imageUrl": "/textures/items/smallPedalBlue.png"
        },
        {
          "item": "Floracle Sticks",
          "itemId": "Itemizer.FloracleSticks",
          "quantity": 1,
          "chance": 1,
          "imageUrl": "/textures/items/floracleSticks.png"
        }
      ],
      "imageUrl": "/textures/mobs/archvine.png",
      "model": "/models/gardencia/archvine/archvine.gltf",
      "health": 140
    },
    {
      "entity": "EntityBroccohead",
      "weight": 20,
      "min": 0,
      "max": 1,
      "creatureType": "monster",
      "registeredBiomes": [
        {
          "name": "Gardencia",
          "imageUrl": "/dimensions/biomes/gardencia.png"
        },
        {
          "name": "Gardencia Fungal",
          "imageUrl": "/dimensions/biomes/Gardencian_Fungal.png"
        },
        {
          "name": "Gardencia Marsh",
          "imageUrl": "/dimensions/gardencia_images/Gardencian_Marsh.png"
        }
      ],
      "loot": [
        {
          "item": "Rosidons",
          "itemId": "Itemizer.Rosidons",
          "quantity": 1,
          "chance": 1,
          "imageUrl": "/textures/items/rosidons.png"
        },
        {
          "item": "Rosidian Banner",
          "itemId": "SpecialBlockizer.RosidianBanner",
          "quantity": 1,
          "chance": 1,
          "imageUrl": "/textures/banner/rosidianBanner.png"
        }
      ],
      "imageUrl": "/textures/mobs/broccohead.png",
      "model": "/models/gardencia/broccohead/broccohead.gltf",
      "health": 60
    },
    {
      "entity": "EntityCarrotop",
      "weight": 20,
      "min": 0,
      "max": 1,
      "creatureType": "monster",
      "registeredBiomes": [
        {
          "name": "Gardencia",
          "imageUrl": "/dimensions/biomes/gardencia.png"
        },
        {
          "name": "Gardencia Fungal",
          "imageUrl": "/dimensions/biomes/Gardencian_Fungal.png"
        },
        {
          "name": "Gardencia Marsh",
          "imageUrl": "/dimensions/gardencia_images/Gardencian_Marsh.png"
        }
      ],
      "loot": [
        {
          "item": "Carrot Cannon",
          "itemId": "Weaponizer.CarrotCannon",
          "quantity": 1,
          "chance": 1,
          "imageUrl": "/textures/items/carrotCannon.png"
        },
        {
          "item": "Small Orange Petal",
          "itemId": "Itemizer.SmallPedalOrange",
          "quantity": 1,
          "chance": 1,
          "imageUrl": "/textures/items/smallPedalOrange.png"
        },
        {
          "item": "Gardencia Gems",
          "itemId": "Itemizer.CoinsGardencia",
          "quantity": 2,
          "chance": 1,
          "imageUrl": "/textures/items/gardenciaGems.png"
        }
      ],
      "imageUrl": "/textures/mobs/carrotop.png",
      "model": "/models/gardencia/carrotop/carrotop.gltf",
      "health": 60
    },
    {
      "entity": "EntitySquasher",
      "weight": 20,
      "min": 0,
      "max": 1,
      "creatureType": "monster",
      "registeredBiomes": [
        {
          "name": "Gardencia",
          "imageUrl": "/dimensions/biomes/gardencia.png"
        },
        {
          "name": "Gardencia Fungal",
          "imageUrl": "/dimensions/biomes/Gardencian_Fungal.png"
        },
        {
          "name": "Gardencia Marsh",
          "imageUrl": "/dimensions/gardencia_images/Gardencian_Marsh.png"
        }
      ],
      "loot": [
        {
          "item": "Gardener",
          "itemId": "Weaponizer.Gardener",
          "quantity": 1,
          "chance": 1,
          "imageUrl": "/textures/items/gardener.png"
        },
        {
          "item": "Vox Ponds Realmstone",
          "itemId": "Itemizer.RealmstoneVoxPonds",
          "quantity": 2,
          "chance": 1,
          "imageUrl": "/textures/items/realmstoneVoxPonds.png"
        },
        {
          "item": "Floro Upgrade Kit",
          "itemId": "Itemizer.UpgradeKitFloro",
          "quantity": 1,
          "chance": 1,
          "imageUrl": "/textures/items/upgradeKitFloro.png"
        },
        {
          "item": "Gardencia Gems",
          "itemId": "Itemizer.CoinsGardencia",
          "quantity": 2,
          "chance": 1,
          "imageUrl": "/textures/items/gardenciaGems.png"
        }
      ],
      "imageUrl": "/textures/mobs/squasher.png",
      "model": "/models/gardencia/squasher/squasher.gltf",
      "health": 60
    },
    {
      "entity": "EntityCorny",
      "weight": 20,
      "min": 0,
      "max": 1,
      "creatureType": "monster",
      "registeredBiomes": [
        {
          "name": "Gardencia",
          "imageUrl": "/dimensions/biomes/gardencia.png"
        },
        {
          "name": "Gardencia Fungal",
          "imageUrl": "/dimensions/biomes/Gardencian_Fungal.png"
        },
        {
          "name": "Gardencia Marsh",
          "imageUrl": "/dimensions/gardencia_images/Gardencian_Marsh.png"
        }
      ],
      "loot": [
        {
          "item": "Small Purple Petal",
          "itemId": "Itemizer.SmallPedalPurple",
          "quantity": 1,
          "chance": 1,
          "imageUrl": "/textures/items/smallPedalPurple.png"
        },
        {
          "item": "Goldicap Petals",
          "itemId": "Itemizer.GoldicapPedals",
          "quantity": 1,
          "chance": 1,
          "imageUrl": "/dimensions/dustopia_images/Goldicap_Petals.png"
        }
      ],
      "imageUrl": "/textures/mobs/corny.png",
      "model": "/models/gardencia/corny/corny.gltf",
      "health": 30
    },
    {
      "entity": "EntitySunny",
      "weight": 1,
      "min": 0,
      "max": 1,
      "creatureType": "monster",
      "registeredBiomes": [
        {
          "name": "Gardencia",
          "imageUrl": "/dimensions/biomes/gardencia.png"
        },
        {
          "name": "Gardencia Fungal",
          "imageUrl": "/dimensions/biomes/Gardencian_Fungal.png"
        },
        {
          "name": "Gardencia Marsh",
          "imageUrl": "/dimensions/gardencia_images/Gardencian_Marsh.png"
        }
      ],
      "loot": [
        {
          "item": "Flowers Fury",
          "itemId": "Weaponizer.FlowersFury",
          "quantity": 1,
          "chance": 1,
          "imageUrl": "/textures/items/flowersFury.png"
        },
        {
          "item": "Gardencia Realmstone",
          "itemId": "Itemizer.RealmstoneGardencia",
          "quantity": 3,
          "chance": 1,
          "imageUrl": "/textures/items/realmstoneGardencia.png"
        }
      ],
      "imageUrl": "/textures/mobs/sunny.png",
      "model": "/models/gardencia/sunny/sunny.gltf",
      "health": 90
    },
    {
      "entity": "GlisteningPixon",
      "healthMin": 19,
      "healthMax": 39,
      "weight": 5,
      "min": 1,
      "max": 6,
      "creatureType": "monster",
      "registeredBiomes": [
        {
          "name": "Gardencia",
          "imageUrl": "/dimensions/biomes/gardencia.png"
        },
        {
          "name": "Gardencia Fungal",
          "imageUrl": "/dimensions/biomes/Gardencian_Fungal.png"
        },
        {
          "name": "Gardencia Marsh",
          "imageUrl": "/dimensions/gardencia_images/Gardencian_Marsh.png"
        }
      ],
      "loot": [
        {
          "item": "Glistening Infusion Stone",
          "itemId": "Itemizer.iStoneGlistening",
          "quantity": 1,
          "chance": 1,
          "imageUrl": "/textures/items/iStoneGlistening.png",
          "itemName": "Glistening Infusion Stone"
        }
      ],
      "imageUrl": "",
      "model": "/models/pixons/Glistening_Pixon.png",
      "health": 19
    },
    {
      "entity": "EntityDaysee",
      "imageUrl": "/textures/mobs/daysee.png",
      "model": "/models/gardencia/daysee/daysee.gltf",
      "health": 90,
      "weight": 20,
      "min": 1,
      "max": 1,
      "creatureType": "monster",
      "registeredBiomes": [
        {
          "name": "Gardencia",
          "imageUrl": "/dimensions/biomes/gardencia.png"
        },
        {
          "name": "Gardencia Fungal",
          "imageUrl": "/dimensions/biomes/Gardencian_Fungal.png"
        },
        {
          "name": "Gardencia Marsh",
          "imageUrl": "/dimensions/gardencia_images/Gardencian_Marsh.png"
        }
      ],
      "loot": [
        {
          "item": "Emerald",
          "itemId": "Items.emerald",
          "quantity": 1,
          "chance": 0.25,
          "imageUrl": "/textures/items/emerald.png",
          "itemName": "Emerald"
        }
      ]
    },
    {
      "entity": "EntityPodPlant",
      "imageUrl": "/textures/mobs/podplant.png",
      "model": "/models/gardencia/pod-plant/pod-plant.gltf",
      "health": 50,
      "weight": 20,
      "min": 1,
      "max": 1,
      "creatureType": "monster",
      "registeredBiomes": [
        {
          "name": "Gardencia",
          "imageUrl": "/dimensions/biomes/gardencia.png"
        }
      ],
      "loot": [
        {
          "item": "Nature Staff",
          "itemId": "Weaponizer.NatureStaff",
          "quantity": 1,
          "chance": 0.01,
          "imageUrl": "/textures/items/natureStaff.png",
          "itemName": "Nature Staff"
        },
        {
          "item": "Trilliad Leaves",
          "itemId": "Itemizer.TrilliadLeaves",
          "quantity": 1,
          "chance": 0.3333333333333333,
          "imageUrl": "/textures/items/trilliadLeaves.png",
          "itemName": "Trilliad Leaves"
        },
        {
          "item": "Vox Ponds Realmstone",
          "itemId": "Itemizer.RealmstoneVoxPonds",
          "quantity": 2,
          "chance": 0.025,
          "imageUrl": "/textures/items/realmstoneVoxPonds.png",
          "itemName": "Vox Ponds Realmstone"
        }
      ]
    },
    {
      "entity": "EntityVineWizard",
      "imageUrl": "/textures/mobs/vinewizard.png",
      "model": "/models/gardencia/vine-wizard/vine-wizard.gltf",
      "health": 60,
      "weight": 20,
      "min": 1,
      "max": 1,
      "creatureType": "monster",
      "registeredBiomes": [
        {
          "name": "Gardencia",
          "imageUrl": "/dimensions/biomes/gardencia.png"
        }
      ],
      "loot": [
        {
          "item": "Flower Cannon",
          "itemId": "Weaponizer.FlowerCannon",
          "quantity": 1,
          "chance": 0.02,
          "imageUrl": "/textures/items/flowerCannon.png",
          "itemName": "Flower Cannon"
        },
        {
          "item": "Small Green Petal",
          "itemId": "Itemizer.SmallPedalGreen",
          "quantity": 1,
          "chance": 0.025,
          "imageUrl": "/textures/items/smallPedalGreen.png",
          "itemName": "Small Green Petal"
        }
      ]
    }
  ],
  "npcs": [
    {
      "entity": "EntityLottomanGardencia",
      "notes": "Gerado automaticamente por estruturas da dimensão.",
      "displayName": "LottomanGardencia",
      "registeredBiomes": [],
      "loot": [],
      "trades": [
        {
          "input": {
            "item": "Gardencia Gems",
            "itemId": "Itemizer.CoinsGardencia",
            "quantity": 10,
            "metadata": 1,
            "imageUrl": "/textures/items/gardenciaGems.png"
          },
          "output": {
            "item": "Rosidian Archergun Totem",
            "itemId": "Totemizer.TotemRosidianArchergun",
            "quantity": 1,
            "imageUrl": "/textures/items/totemRosidianArchergun.png"
          }
        },
        {
          "input": {
            "item": "Gardencia Gems",
            "itemId": "Itemizer.CoinsGardencia",
            "quantity": 10,
            "metadata": 1,
            "imageUrl": "/textures/items/gardenciaGems.png"
          },
          "output": {
            "item": "Flowercorne Totem",
            "itemId": "Totemizer.TotemFlowercorne",
            "quantity": 1,
            "imageUrl": "/textures/items/totemFlowercorne.png"
          }
        },
        {
          "input": {
            "item": "Gardencia Gems",
            "itemId": "Itemizer.CoinsGardencia",
            "quantity": 40,
            "metadata": 1,
            "imageUrl": "/textures/items/gardenciaGems.png"
          },
          "output": {
            "item": "Rosidian Archergun Totem",
            "itemId": "Totemizer.TotemRosidianArchergun",
            "quantity": 10,
            "imageUrl": "/textures/items/totemRosidianArchergun.png"
          },
          "additionalInput": {
            "item": "Gardencia Gems",
            "itemId": "Itemizer.CoinsGardencia",
            "quantity": 35,
            "imageUrl": "/textures/items/gardenciaGems.png"
          }
        },
        {
          "input": {
            "item": "Gardencia Gems",
            "itemId": "Itemizer.CoinsGardencia",
            "quantity": 40,
            "metadata": 1,
            "imageUrl": "/textures/items/gardenciaGems.png"
          },
          "output": {
            "item": "Flowercorne Totem",
            "itemId": "Totemizer.TotemFlowercorne",
            "quantity": 10,
            "imageUrl": "/textures/items/totemFlowercorne.png"
          },
          "additionalInput": {
            "item": "Gardencia Gems",
            "itemId": "Itemizer.CoinsGardencia",
            "quantity": 35,
            "imageUrl": "/textures/items/gardenciaGems.png"
          }
        },
        {
          "input": {
            "item": "Gold Coin",
            "itemId": "Itemizer.GoldCoin",
            "quantity": 5,
            "metadata": 1,
            "imageUrl": "/textures/items/coinGold.png"
          },
          "output": {
            "item": "Magic Repair Dust",
            "itemId": "Itemizer.MagicRepairDust",
            "quantity": 1,
            "imageUrl": "/textures/items/magicRepairDust.png"
          }
        },
        {
          "input": {
            "item": "Gold Coin",
            "itemId": "Itemizer.GoldCoin",
            "quantity": 50,
            "metadata": 1,
            "imageUrl": "/textures/items/coinGold.png"
          },
          "output": {
            "item": "Magic Repair Dust",
            "itemId": "Itemizer.MagicRepairDust",
            "quantity": 15,
            "imageUrl": "/textures/items/magicRepairDust.png"
          }
        }
      ],
      "imageUrl": "/textures/mobs/lottomanGardencia.png",
      "model": "/models/npc/lottoman/lottoman.gltf"
    }
  ],
  "generatedOres": [],
  "generatedStructures": [
    {
      "className": "FloroCastleP1",
      "name": "Floro Castle",
      "context": "StructureGenRare #20",
      "chance": {
        "description": "1 em 1700",
        "formula": "random.nextInt(1700) == 656",
        "denominator": 1700,
        "comparator": "==",
        "value": 656
      },
      "biome": null,
      "imageUrl": ""
    },
    {
      "className": "FloroCastleP2",
      "name": "Floro Castle",
      "context": "StructureGenRare #20",
      "chance": {
        "description": "1 em 1700",
        "formula": "random.nextInt(1700) == 656",
        "denominator": 1700,
        "comparator": "==",
        "value": 656
      },
      "biome": null,
      "imageUrl": ""
    },
    {
      "className": "FloroCastleP3",
      "name": "Floro Castle",
      "context": "StructureGenRare #20",
      "chance": {
        "description": "1 em 1700",
        "formula": "random.nextInt(1700) == 656",
        "denominator": 1700,
        "comparator": "==",
        "value": 656
      },
      "biome": null,
      "imageUrl": ""
    },
    {
      "className": "FloroCastleP4",
      "name": "Floro Castle",
      "context": "StructureGenRare #20",
      "chance": {
        "description": "1 em 1700",
        "formula": "random.nextInt(1700) == 656",
        "denominator": 1700,
        "comparator": "==",
        "value": 656
      },
      "biome": null,
      "imageUrl": ""
    },
    {
      "className": "GardenCastle",
      "name": "Garden Castle",
      "context": "StructureGenRare #21",
      "chance": {
        "description": "1 em 1650",
        "formula": "random.nextInt(1650) == 1142",
        "denominator": 1650,
        "comparator": "==",
        "value": 1142
      },
      "biome": null,
      "imageUrl": "/dimensions/gardencia_images/Garden_Castle.png"
    },
    {
      "className": "GardenCastle2",
      "name": "Garden Castle 2",
      "context": "StructureGenRare #21",
      "chance": {
        "description": "1 em 1650",
        "formula": "random.nextInt(1650) == 1142",
        "denominator": 1650,
        "comparator": "==",
        "value": 1142
      },
      "biome": null,
      "imageUrl": ""
    },
    {
      "className": "GardenFungi2",
      "name": "Garden Fungi 2",
      "context": "ChunkProviderGardencia.java",
      "chance": null,
      "biome": null,
      "imageUrl": ""
    },
    {
      "className": "GardenFungi1",
      "name": "Garden Fungi 1",
      "context": "ChunkProviderGardencia.java",
      "chance": null,
      "biome": null,
      "imageUrl": ""
    },
    {
      "className": "GardenFungi3",
      "name": "Garden Fungi 3",
      "context": "ChunkProviderGardencia.java",
      "chance": null,
      "biome": null,
      "imageUrl": ""
    },
    {
      "className": "MarshLilly3",
      "name": "Marsh Lilly 3",
      "context": "ChunkProviderGardencia.java",
      "chance": null,
      "biome": null,
      "imageUrl": ""
    },
    {
      "className": "MarshLilly1",
      "name": "Marsh Lilly 1",
      "context": "ChunkProviderGardencia.java",
      "chance": null,
      "biome": null,
      "imageUrl": ""
    },
    {
      "className": "MarshLilly2",
      "name": "Marsh Lilly 2",
      "context": "ChunkProviderGardencia.java",
      "chance": null,
      "biome": null,
      "imageUrl": ""
    },
    {
      "className": "MarshFern1",
      "name": "Marsh Fern 1",
      "context": "ChunkProviderGardencia.java",
      "chance": null,
      "biome": null,
      "imageUrl": ""
    },
    {
      "className": "MarshFern2",
      "name": "Marsh Fern 2",
      "context": "ChunkProviderGardencia.java",
      "chance": null,
      "biome": null,
      "imageUrl": ""
    }
  ],
  "resources": [
    {
      "name": "Petals",
      "type": "Recurso de planta",
      "usage": "Produzidas na Petal Crafting Station, usadas para invocar Vinocorne ou em vários crafts temáticos de planta. ",
      "imageUrl": "/dimensions/dustopia_images/Petals.png"
    },
    {
      "name": "Rosid Root",
      "type": "Item de loot",
      "usage": "Drop raro da Gardencia Table, usado para upgrades ou crafts de equipamentos temáticos de planta/árvore.",
      "imageUrl": "/dimensions/dustopia_images/Rosid_Root.png"
    },
    {
      "name": "Gardencian Bricks",
      "type": "Bloco de construção",
      "usage": "Blocos decorativos usados em Garden Castles, ideais para bases temáticas de jardim ou castelo de flores. ",
      "imageUrl": "/dimensions/gardencia_images/Gardencian_Bricks.png"
    }
  ],
  "bosses": [
    {
      "name": "Vinocorne",
      "howToSpawn": "Use Petals no Vinocorne Shrine localizado no topo de Floro Castle para invocar Vinocorne. ",
      "notes": "Boss principal de Gardencia, com drops de itens correlacionados à dimensão, tais como Rosid Root e upgrades de planta. Ideal para equipamentos de tier 2 vegetais.",
      "imageUrl": "/dimensions/common_images/Vinocorne.png",
      "spawnItems": [
        {
          "itemId": "Itemizer.PedalPile",
          "item": "Pedal Pile",
          "usage": "Ative o Vinocorne Shrine com um Pedal Pile para convocar o boss.",
          "imageUrl": "/textures/items/pedalPile.png"
        }
      ],
      "entities": [
        {
          "entity": "EntityVinocorne",
          "displayName": "Vinocorne",
          "imageUrl": "/textures/mobs/vinocorne.png",
          "model": "/models/boss/vinocorne/vinocorne/vinocorne.gltf",
          "health": 2500
        }
      ],
      "loot": [
        {
          "item": "Rosidian Bow",
          "itemId": "Weaponizer.RosidianBow",
          "minQuantity": 1,
          "maxQuantity": 1,
          "chance": 1,
          "sourceEntities": [
            "EntityVinocorne"
          ],
          "imageUrl": "/dimensions/common_images/Rosidian_Bow.png"
        },
        {
          "item": "Rosidian Sword",
          "itemId": "Weaponizer.RosidianSword",
          "minQuantity": 1,
          "maxQuantity": 1,
          "chance": 1,
          "sourceEntities": [
            "EntityVinocorne"
          ],
          "imageUrl": "/dimensions/common_images/Rosidian_Sword.png"
        },
        {
          "item": "Rosidian Greatblade",
          "itemId": "Weaponizer.RosidianGreatblade",
          "minQuantity": 1,
          "maxQuantity": 1,
          "chance": 1,
          "sourceEntities": [
            "EntityVinocorne"
          ],
          "imageUrl": "/textures/items/rosidianGreatblade.png"
        },
        {
          "item": "Rosid Rifle",
          "itemId": "Weaponizer.RosidRifle",
          "minQuantity": 1,
          "maxQuantity": 1,
          "chance": 1,
          "sourceEntities": [
            "EntityVinocorne"
          ],
          "imageUrl": "/textures/items/rosidRifle.png"
        },
        {
          "item": "Rosidian Staff",
          "itemId": "Weaponizer.RosidianStaff",
          "minQuantity": 1,
          "maxQuantity": 1,
          "chance": 1,
          "sourceEntities": [
            "EntityVinocorne"
          ],
          "imageUrl": "/textures/items/rosidianStaff.png"
        }
      ]
    }
  ],
  "biomes": [
    {
      "name": "Gardencia",
      "id": 81,
      "imageUrl": "/nvm2_data/img_data/Gardencia/biomes/Gardencia.png"
    },
    {
      "name": "Gardencian Fungi",
      "id": 106,
      "imageUrl": "/nvm2_data/img_data/Gardencia/biomes/Gardencian_Fungal.png"
    },
    {
      "name": "Gardencian Marsh",
      "id": 107,
      "imageUrl": "/nvm2_data/img_data/Gardencia/biomes/Gardencian_Marsh.png"
    }
  ],
  "structures": [
    {
      "name": "Daysee Flower",
      "imageUrl": "/nvm2_data/img_data/Gardencia/structures/Daysee_Flower.png"
    },
    {
      "name": "Floro Castle",
      "imageUrl": "/nvm2_data/img_data/Gardencia/structures/Floro_Castle.png"
    },
    {
      "name": "Garden Castle",
      "imageUrl": "/nvm2_data/img_data/Gardencia/structures/Garden_Castle.png"
    },
    {
      "name": "Lotto Sky Flower",
      "imageUrl": "/nvm2_data/img_data/Gardencia/structures/Lotto_Sky_Flower.png"
    },
    {
      "name": "Wizard Flower",
      "imageUrl": "/nvm2_data/img_data/Gardencia/structures/Wizard_Flower.png"
    }
  ]
};
