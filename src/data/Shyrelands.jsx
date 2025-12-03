export const Shyrelands = {
  "id": "the_shyrelands",
  "name": "The Shyrelands",
  "tier": 4,
  "prerequisiteDimension": "Greckon or Dustopia",
  "theme": "Floresta clara e luminosa com ruínas antigas, pilares que se estendem ao vazio, atmosfera mística e estrutura elevada.",
  "shortDescription": "Uma dimensão de tier 4, sobre Y≈100, composta por terreno plano, árvores e vegetação brilhante, ruínas geradas, camada de rocha brilhante acima de ‘crust’ que se abre para o void, sem ciclo de dia/noite. ",
  "realmstone": {
    "obtainHint": "Craftar a Shyrelands Realmstone usando Darkly Powder + Bloodstone + Glowstone + Haunted Flower + Magic Mending Solution + Blank Realmstone. ",
    "obtainDetails": "Use os ingredientes indicados (Darkly Powder, Bloodstone, Glowstone, Haunted Flower, Magic Mending Solution, Blank Realmstone) para criar a Shyrelands Realmstone. Depois use-a no portal de Carved Rune of Power para acessar a dimensão. ",
    "imageUrl": "/dimensions/shyrelands_images/Shyrelands_Realmstone.png"
  },
  "imageUrl": "/dimensions/shyrelands_images/The_Shyrelands.png",
  "wikiUrl": "https://adventofascension.fandom.com/wiki/The_Shyrelands",
  "mainObjectives": [
    {
      "id": "unlock_shyrelands",
      "title": "Desbloquear The Shyrelands",
      "description": "Craftar a Realmstone usando os ingredientes básicos, ativar o portal e entrar na dimensão.",
      "imageUrl": "/dimensions/shyrelands_images/Shyrelands_Realmstone.png"
    },
    {
      "id": "explore_ruined_structures",
      "title": "Explorar ruínas e pilares",
      "description": "Percorrer as ruínas geradas (ruined arch, mausoleum, whitewashing mill) e os Shyre Pillars que se estendem abaixo da camada de crust em direção ao void. ",
      "imageUrl": "/dimensions/shyrelands_images/Shyre_Pillar.png"
    },
    {
      "id": "farm_shyrestone_and_shyregem",
      "title": "Farmar Shyrestone e Shyregem",
      "description": "Mineração da camada de Bright Rock (acima de y=62) para obter shyrestone and shyregem ores que geram sob a superfície de The Shyrelands. ",
      "imageUrl": "/dimensions/shyrelands_images/Shyregem_Ore.png"
    }
  ],
  "secondaryObjectives": [
    {
      "id": "complete_bestiary_shyrelands",
      "title": "Completar o bestiário de The Shyrelands",
      "description": "Derrote ou encontre todas as variantes de mobs hostis da dimensão como Arcbeast, Axiolight, Lightwalker, Shyre Knight, Soulscorne, Sysker, etc. ",
      "imageUrl": "/dimensions/shyrelands_images/Shyre_Knight.png"
    },
    {
      "id": "visit_shyre_lotto_and_bank",
      "title": "Visitar Shyre Lotto Bunker e Shyre Bank Stand",
      "description": "Localizar a estrutura Shyre Lotto Bunker (parcialmente subterrânea) e o Shyre Bank Stand para loterias e serviços bancários na dimensão. ",
      "imageUrl": "https://adventofascension.fandom.com/wiki/File:Shyre_Lotto_Bunker.png"
    }
  ],
  "progressionNotes": [
    {
      "id": "tier4_prestige_dimension",
      "title": "Dimensão de tier 4 para conteúdo avançado",
      "description": "The Shyrelands é uma das dimensões de nível elevado (tier 4) no mod, recomendada para jogadores que já completaram as dimensões anteriores e estão buscando loot, desafios e construção de base diferenciada. ",
      "imageUrl": "/dimensions/shyrelands_images/The_Shyrelands.png"
    },
    {
      "id": "void_connection",
      "title": "Conexão com o void e geração única",
      "description": "A geração da dimensão inclui uma camada de crust que separa o terreno visível do void abaixo, com pilares que se estendem para baixo, oferecendo estética distinta e risco de queda. ",
      "imageUrl": "https://adventofascension.fandom.com/wiki/File:Shyre_Crust_Layer.png"
    }
  ],
  "versionNotes": "Versão listada como Tslat 1.1.  Se estiver usando a versão Nevermine 2 (Tslat 1.1.3) para Minecraft 1.7.10, verifique se os nomes exatos de blocos/estruturas/mobs coincidem com essa build.",
  "mobs": [
    {
      "entity": "EntityArcWizard",
      "imageUrl": "/textures/mobs/arcwizard.png",
      "model": "/models/shyrelands/arc-wizard/arc-wizard.gltf",
      "health": 90,
      "weight": 20,
      "min": 1,
      "max": 1,
      "creatureType": "monster",
      "registeredBiomes": [
        {
          "name": "Shyrelands",
          "imageUrl": "/dimensions/biomes/shyrelands.png"
        }
      ],
      "loot": [
        {
          "item": "Shyre Staff",
          "itemId": "Weaponizer.ShyreStaff",
          "quantity": 1,
          "chance": 0.01,
          "imageUrl": "/textures/items/shyreStaff.png",
          "itemName": "Shyre Staff"
        }
      ]
    },
    {
      "entity": "EntityArcbeast",
      "imageUrl": "/textures/mobs/arcbeast.png",
      "model": "/models/shyrelands/arcbeast/arcbeast.gltf",
      "health": 160,
      "weight": 20,
      "min": 0,
      "max": 1,
      "creatureType": "monster",
      "registeredBiomes": [
        {
          "name": "Shyrelands",
          "imageUrl": "/dimensions/biomes/shyrelands.png"
        }
      ],
      "loot": [
        {
          "item": "Shyrelands Gems",
          "itemId": "Itemizer.CoinsShyrelands",
          "quantity": 2,
          "chance": 1,
          "imageUrl": "/textures/items/shyrelandsGems.png",
          "itemName": "Shyrelands Gems"
        }
      ]
    },
    {
      "entity": "EntityArcflower",
      "imageUrl": "/textures/mobs/arcflower.png",
      "model": "/models/shyrelands/arcflower/arcflower.gltf",
      "health": 5,
      "weight": 20,
      "min": 0,
      "max": 1,
      "creatureType": "monster",
      "registeredBiomes": [
        {
          "name": "Shyrelands",
          "imageUrl": "/dimensions/biomes/shyrelands.png"
        }
      ]
    },
    {
      "entity": "EntityArcworm",
      "imageUrl": "/textures/mobs/arcworm.png",
      "model": "/models/shyrelands/arcworm/arcworm.gltf",
      "health": 60,
      "weight": 20,
      "min": 1,
      "max": 1,
      "creatureType": "monster",
      "registeredBiomes": [
        {
          "name": "Shyrelands",
          "imageUrl": "/dimensions/biomes/shyrelands.png"
        }
      ],
      "loot": [
        {
          "item": "Copper Coin",
          "itemId": "Itemizer.CopperCoin",
          "quantity": 2,
          "chance": 1,
          "imageUrl": "/textures/items/coinCopper.png",
          "itemName": "Copper Coin"
        }
      ]
    },
    {
      "entity": "EntityAxiolight",
      "imageUrl": "/textures/mobs/axiolight.png",
      "model": "/models/shyrelands/axiolight/axiolight.gltf",
      "health": 80,
      "weight": 20,
      "min": 0,
      "max": 1,
      "creatureType": "monster",
      "registeredBiomes": [
        {
          "name": "Shyrelands",
          "imageUrl": "/dimensions/biomes/shyrelands.png"
        }
      ],
      "loot": [
        {
          "item": "Lightshine",
          "itemId": "Weaponizer.Lightshine",
          "quantity": 1,
          "chance": 0.0125,
          "imageUrl": "/textures/items/lightshine.png",
          "itemName": "Lightshine"
        }
      ]
    },
    {
      "entity": "EntityLightwalker",
      "imageUrl": "/textures/mobs/lightwalker.png",
      "model": "/models/shyrelands/lightwalker/lightwalker.gltf",
      "health": 70,
      "weight": 20,
      "min": 1,
      "max": 1,
      "creatureType": "monster",
      "registeredBiomes": [
        {
          "name": "Shyrelands",
          "imageUrl": "/dimensions/biomes/shyrelands.png"
        }
      ],
      "loot": [
        {
          "item": "Shyre Sword",
          "itemId": "Weaponizer.ShyreSword",
          "quantity": 1,
          "chance": 0.02,
          "imageUrl": "/textures/items/shyreSword.png",
          "itemName": "Shyre Sword"
        }
      ]
    },
    {
      "entity": "EntityLuxocron",
      "imageUrl": "/textures/mobs/luxocron.png",
      "model": "/models/shyrelands/luxocron/luxocron.gltf",
      "health": 80,
      "weight": 20,
      "min": 1,
      "max": 1,
      "creatureType": "monster",
      "registeredBiomes": [
        {
          "name": "Shyrelands",
          "imageUrl": "/dimensions/biomes/shyrelands.png"
        }
      ],
      "loot": [
        {
          "item": "Amplifier",
          "itemId": "Weaponizer.Amplifier",
          "quantity": 1,
          "chance": 0.02,
          "imageUrl": "/textures/items/amplifier.png",
          "itemName": "Amplifier"
        }
      ]
    },
    {
      "entity": "EntityOmnilight",
      "imageUrl": "/textures/mobs/omnilight.png",
      "model": "/models/shyrelands/omnilight/omnilight.gltf",
      "health": 30,
      "weight": 20,
      "min": 0,
      "max": 1,
      "creatureType": "monster",
      "registeredBiomes": [
        {
          "name": "Shyrelands",
          "imageUrl": "/dimensions/biomes/shyrelands.png"
        }
      ],
      "loot": [
        {
          "item": "Shyrelands Gems",
          "itemId": "Itemizer.CoinsShyrelands",
          "quantity": 2,
          "chance": 1,
          "imageUrl": "/textures/items/shyrelandsGems.png",
          "itemName": "Shyrelands Gems"
        }
      ]
    },
    {
      "entity": "EntityShyreKnight",
      "imageUrl": "/textures/mobs/shyreknight.png",
      "model": "/models/shyrelands/shyre-knight/shyre-knight.gltf",
      "health": 120,
      "weight": 20,
      "min": 0,
      "max": 1,
      "creatureType": "monster",
      "registeredBiomes": [
        {
          "name": "Shyrelands",
          "imageUrl": "/dimensions/biomes/shyrelands.png"
        }
      ],
      "loot": [
        {
          "item": "Copper Coin",
          "itemId": "Itemizer.CopperCoin",
          "quantity": 4,
          "chance": 1,
          "imageUrl": "/textures/items/coinCopper.png",
          "itemName": "Copper Coin"
        }
      ]
    },
    {
      "entity": "EntityShyreTroll",
      "imageUrl": "/textures/mobs/shyretroll.png",
      "model": "/models/shyrelands/shyre-troll/shyre-troll.gltf",
      "health": 20,
      "weight": 20,
      "min": 1,
      "max": 1,
      "creatureType": "monster",
      "registeredBiomes": [
        {
          "name": "Shyrelands",
          "imageUrl": "/dimensions/biomes/shyrelands.png"
        }
      ],
      "loot": [
        {
          "item": "Shyre Staff",
          "itemId": "Weaponizer.ShyreStaff",
          "quantity": 1,
          "chance": 0.02,
          "imageUrl": "/textures/items/shyreStaff.png",
          "itemName": "Shyre Staff"
        }
      ]
    },
    {
      "entity": "EntitySoulscorne",
      "imageUrl": "/textures/mobs/soulscorne.png",
      "model": "/models/shyrelands/soulscorne/soulscorne.gltf",
      "health": 120,
      "weight": 20,
      "min": 1,
      "max": 1,
      "creatureType": "monster",
      "registeredBiomes": [
        {
          "name": "Shyrelands",
          "imageUrl": "/dimensions/biomes/shyrelands.png"
        }
      ],
      "loot": [
        {
          "item": "Sublimus",
          "itemId": "Weaponizer.Sublimus",
          "quantity": 1,
          "chance": 0.01,
          "imageUrl": "/textures/items/sublimus.png",
          "itemName": "Sublimus"
        }
      ]
    },
    {
      "entity": "EntitySoulvyre",
      "imageUrl": "/textures/mobs/soulvyre.png",
      "model": "/models/shyrelands/soulvyre/soulvyre.gltf",
      "health": 95,
      "weight": 5,
      "min": 0,
      "max": 1,
      "creatureType": "monster",
      "registeredBiomes": [
        {
          "name": "Shyrelands",
          "imageUrl": "/dimensions/biomes/shyrelands.png"
        }
      ],
      "loot": [
        {
          "item": "Shyrelands Gems",
          "itemId": "Itemizer.CoinsShyrelands",
          "quantity": 2,
          "chance": 1,
          "imageUrl": "/textures/items/shyrelandsGems.png",
          "itemName": "Shyrelands Gems"
        }
      ]
    },
    {
      "entity": "EntityStimulo",
      "imageUrl": "/textures/mobs/stimulo.png",
      "model": "/models/shyrelands/stimulo/stimulo.gltf",
      "health": 85,
      "weight": 20,
      "min": 0,
      "max": 1,
      "creatureType": "monster",
      "registeredBiomes": [
        {
          "name": "Shyrelands",
          "imageUrl": "/dimensions/biomes/shyrelands.png"
        }
      ],
      "loot": [
        {
          "item": "Shyrelands Gems",
          "itemId": "Itemizer.CoinsShyrelands",
          "quantity": 2,
          "chance": 1,
          "imageUrl": "/textures/items/shyrelandsGems.png",
          "itemName": "Shyrelands Gems"
        }
      ]
    },
    {
      "entity": "EntityStimulosus",
      "imageUrl": "/textures/mobs/stimulosus.png",
      "model": "/models/shyrelands/stimulosus/stimulosus.gltf",
      "health": 350,
      "weight": 1,
      "min": 0,
      "max": 1,
      "creatureType": "monster",
      "registeredBiomes": [
        {
          "name": "Shyrelands",
          "imageUrl": "/dimensions/biomes/shyrelands.png"
        }
      ],
      "loot": [
        {
          "item": "Shyrelands Realmstone",
          "itemId": "Itemizer.RealmstoneShyrelands",
          "quantity": 1,
          "chance": 1,
          "imageUrl": "/textures/items/shyrelandsGems.png",
          "itemName": "Shyrelands Realmstone"
        },
        {
          "item": "Shyre Blaster",
          "itemId": "Weaponizer.ShyreBlaster",
          "quantity": 1,
          "chance": 0.5,
          "imageUrl": "/textures/items/shyreBlaster.png",
          "itemName": "Shyre Blaster"
        }
      ]
    },
    {
      "entity": "EntitySysker",
      "imageUrl": "/textures/mobs/sysker.png",
      "model": "/models/shyrelands/sysker/sysker.gltf",
      "health": 75,
      "weight": 20,
      "min": 0,
      "max": 1,
      "creatureType": "monster",
      "registeredBiomes": [
        {
          "name": "Shyrelands",
          "imageUrl": "/dimensions/biomes/shyrelands.png"
        }
      ],
      "loot": [
        {
          "item": "Copper Coin",
          "itemId": "Itemizer.CopperCoin",
          "quantity": 2,
          "chance": 1,
          "imageUrl": "/textures/items/coinCopper.png",
          "itemName": "Copper Coin"
        }
      ]
    }
  ],
  "npcs": [],
  "generatedOres": [],
  "generatedStructures": [
    {
      "className": "CraexxeusTowerP1",
      "name": "Craexxeus Tower",
      "context": "StructureGenRare #26",
      "chance": {
        "description": "1 em 600",
        "formula": "random.nextInt(600) == 535",
        "denominator": 600,
        "comparator": "==",
        "value": 535
      },
      "biome": null,
      "imageUrl": ""
    },
    {
      "className": "CraexxeusTowerP2",
      "name": "Craexxeus Tower",
      "context": "StructureGenRare #26",
      "chance": {
        "description": "1 em 600",
        "formula": "random.nextInt(600) == 535",
        "denominator": 600,
        "comparator": "==",
        "value": 535
      },
      "biome": null,
      "imageUrl": ""
    },
    {
      "className": "ShyreDungeon1",
      "name": "Shyre Dungeon 1",
      "context": "StructureGenRare #27",
      "chance": {
        "description": "1 em 250",
        "formula": "random.nextInt(250) == 121",
        "denominator": 250,
        "comparator": "==",
        "value": 121
      },
      "biome": null,
      "imageUrl": ""
    },
    {
      "className": "ShyreDungeon2",
      "name": "Shyre Dungeon 2",
      "context": "StructureGenRare #28",
      "chance": {
        "description": "1 em 250",
        "formula": "random.nextInt(250) == 121",
        "denominator": 250,
        "comparator": "==",
        "value": 121
      },
      "biome": null,
      "imageUrl": ""
    },
    {
      "className": "ShyreDungeon3",
      "name": "Shyre Dungeon 3",
      "context": "StructureGenRare #29",
      "chance": {
        "description": "1 em 250",
        "formula": "random.nextInt(250) == 121",
        "denominator": 250,
        "comparator": "==",
        "value": 121
      },
      "biome": null,
      "imageUrl": ""
    }
  ],
  "resources": [
    {
      "name": "Shyre Stone Ore",
      "type": "Minério",
      "usage": "Variante de minério associada às Shyre Stones, importante para construção temática e progressão em Shyrelands.",
      "imageUrl": "/ores/shyre_stones.png",
      "height": {
        "min": 62,
        "max": 90
      }
    },
    {
      "name": "Shyregem Ore",
      "type": "Minério",
      "usage": "Vale-ouro da dimensão, drop raríssimo para itens de alto valor ou construção de blocos especiais. ",
      "imageUrl": "/ores/shyre_gems.png",
      "height": {
        "min": 62,
        "max": 90
      }
    },
    {
      "name": "Bright Rock / Shyre Crust",
      "type": "Bloco de terreno",
      "usage": "Bloco de geração comum na superfície e subsolo da dimensão, serve de base para mineração ou construção temática. ",
      "imageUrl": "/dimensions/shyrelands_images/Bright_Rock.png"
    }
  ],
  "bosses": [
    {
      "name": "Craexxeus",
      "howToSpawn": "Use um Ancient Ring no altar de Craexxeus dentro da dimensão para invocar o chefe. ",
      "notes": "Boss principal de The Shyrelands, combate de alto nível, drops raros da Shyrelands Table.",
      "imageUrl": "/dimensions/shyrelands_images/Craexxeus.png",
      "spawnItems": [
        {
          "itemId": "Itemizer.AncientRing",
          "item": "Ancient Ring",
          "usage": "Use o Ancient Ring no Craexxeus Altar no topo da torre para liberar o chefe.",
          "imageUrl": "/textures/items/ancientRing.png"
        }
      ],
      "entities": [
        {
          "entity": "EntityCraexxeus",
          "displayName": "Craexxeus",
          "imageUrl": "/textures/mobs/craexxeus.png",
          "model": "/models/boss/craexxeus/craexxeus/craexxeus.gltf",
          "health": 7000
        },
        {
          "entity": "EntityXxeus",
          "displayName": "Xxeus",
          "imageUrl": "/dimensions/common_images/Xxeus.png",
          "model": "/models/boss/craexxeus/xxeus/xxeus.gltf",
          "health": 3000
        }
      ],
      "loot": [
        {
          "item": "Ultimatum Staff",
          "itemId": "Weaponizer.UltimatumStaff",
          "minQuantity": 1,
          "maxQuantity": 1,
          "chance": 1,
          "sourceEntities": [
            "EntityXxeus"
          ],
          "imageUrl": "/textures/items/animateditem/ultimatumStaff.gif"
        },
        {
          "item": "Chainsaw",
          "itemId": "Toolizer.Chainsaw",
          "minQuantity": 1,
          "maxQuantity": 1,
          "chance": 1,
          "sourceEntities": [
            "EntityXxeus"
          ],
          "imageUrl": "/textures/items/animateditem/chainsaw.gif"
        },
        {
          "item": "Paralyzer",
          "itemId": "Weaponizer.Paralyzer",
          "minQuantity": 1,
          "maxQuantity": 1,
          "chance": 1,
          "sourceEntities": [
            "EntityXxeus"
          ],
          "imageUrl": "/textures/items/animateditem/paralyzer.gif"
        },
        {
          "item": "God's Greatblade",
          "itemId": "Weaponizer.GodsGreatblade",
          "minQuantity": 1,
          "maxQuantity": 1,
          "chance": 1,
          "sourceEntities": [
            "EntityXxeus"
          ],
          "imageUrl": "/textures/items/animateditem/godsGreatblade.gif"
        }
      ]
    }
  ],
  "biomes": [
    {
      "name": "Shyrelands",
      "id": 120,
      "imageUrl": "/nvm2_data/img_data/Shyrelands/biomes/The_Shyrelands.png"
    }
  ],
  "structures": [
    {
      "name": "Craexxeus Tower",
      "id": 85,
      "imageUrl": "/nvm2_data/img_data/Shyrelands/structures/Craexxeus_Tower.png"
    }
  ]
};
