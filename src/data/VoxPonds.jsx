export const VoxPonds = {
  "id": "vox_ponds",
  "name": "Vox Ponds",
  "tier": 2,
  "prerequisiteDimension": "Creeponia",
  "theme": "Pós-apocalíptico e tóxico — lagos de resíduos tóxicos, vegetação morta, estruturas abandonadas e robôs dominando o terreno.",
  "shortDescription": "Dimensão de tier 2 onde a paisagem é formada por colinas irregulares, lagos de resíduos tóxicos que causam envenenamento e náusea, árvores mortas, logs tóxicos e robôs hostis. ",
  "realmstone": {
    "obtainHint": "Converta um Blank Realmstone ao mostrá-lo a um mercador em Creeponia enquanto veste um conjunto completo de Hazmat Armor. ",
    "obtainDetails": "Em Creeponia, com um Blank Realmstone no inventário, encontre um Trader/Merchant NPC, mostre-o enquanto estiver usando Hazmat Armor; isso gerará a Vox Ponds Realmstone. Em seguida, use-a em um Carved Rune of Power para ativar o portal. ",
    "imageUrl": "/dimensions/voxponds_images/Vox_Ponds_Realmstone.png"
  },
  "imageUrl": "/dimensions/voxponds_images/Vox_Ponds_(Night_Vision).png",
  "wikiUrl": "https://adventofascension.fandom.com/wiki/Vox_Ponds",
  "mainObjectives": [
    {
      "id": "unlock_vox_ponds",
      "title": "Desbloquear Vox Ponds",
      "description": "Obter a Vox Ponds Realmstone em Creeponia conforme tarefa com Hazmat Armor / mercador, e ativar o portal para entrar. ",
      "imageUrl": "/dimensions/voxponds_images/Vox_Ponds_Realmstone.png"
    },
    {
      "id": "survive_toxic_lakes",
      "title": "Sobreviver aos lagos tóxicos",
      "description": "Explorar as zonas com Lakes de Toxic Waste — entrar nesses lagos causa Poison e Nausea, então o jogador precisa estar preparado ou evitar essas áreas. ",
      "imageUrl": "/dimensions/voxponds_images/Toxic_Waste.png"
    },
    {
      "id": "defeat_voxxulon",
      "title": "Derrotar Voxxulon",
      "description": "Localizar um altar Voxxulon Platform com Voxxulon Altar e usar um Vile Stone para invocar o boss Voxxulon. Derrotar-o representa o principal desafio da dimensão. ",
      "imageUrl": "/dimensions/voxponds_images/Voxxulon.png"
    }
  ],
  "secondaryObjectives": [
    {
      "id": "explore_structures_vox",
      "title": "Explorar estruturas abandonadas",
      "description": "Visitar estruturas como Destroyed Store, Lotto Vox Tower, Voxxulon Platform e plataformas de Nightwing nos lagos subterrâneos para loot ou desafio. ",
      "imageUrl": "/dimensions/voxponds_images/Lotto_Vox_Tower.png"
    },
    {
      "id": "collect_toxic_resources",
      "title": "Coletar recursos tóxicos e robóticos",
      "description": "Minerar blocos como Polluted Grass, Polluted Soil, Toxic Log e quarry regiões subterrâneas para conseguir loot da Vox Ponds Table. ",
      "imageUrl": "/dimensions/shyrelands_images/Polluted_Soil.png"
    }
  ],
  "progressionNotes": [
    {
      "id": "tier2_techno_toxic",
      "title": "Dimensão de tier 2 temática tecnológica/ tóxica",
      "description": "Vox Ponds é uma das primeiras dimensões de tier 2, exigindo preparo em equipamentos (como Hazmat Armor) e combate contra mobs com habilidades especiais. ",
      "imageUrl": "/dimensions/voxponds_images/Vox_Ponds_(Night_Vision).png"
    },
    {
      "id": "preparation_for_next_tier",
      "title": "Preparação para dimensões posteriores",
      "description": "Os recursos, loot e mecânicas de Vox Ponds preparam o jogador para dimensões de tier 3, com maior dificuldade e especialização. ",
      "imageUrl": "/dimensions/voxponds_images/Destroyed_Store.png"
    }
  ],
  "versionNotes": "Na wiki o Vox Ponds está listado como versão 1.1 para a dimensão.  Se estiver usando a versão Tslat 1.1.3 para Minecraft 1.7.10, verifique se requisitos de Hazmat Armor, geração de estruturas e loot específico correspondem à sua build.",
  "mobs": [
    {
      "entity": "EntityDestructor",
      "weight": 1,
      "min": 0,
      "max": 1,
      "creatureType": "monster",
      "registeredBiomes": [
        {
          "name": "Mysterium",
          "imageUrl": "/dimensions/biomes/vox-ponds.png"
        }
      ],
      "loot": [],
      "imageUrl": "/textures/mobs/destructor.png",
      "model": "/models/voxponds/destructor/destructor.gltf",
      "health": 80
    },
    {
      "entity": "EntityAlarmo",
      "weight": 20,
      "min": 0,
      "max": 1,
      "creatureType": "monster",
      "registeredBiomes": [
        {
          "name": "Mysterium",
          "imageUrl": "/dimensions/biomes/vox-ponds.png"
        }
      ],
      "loot": [
        {
          "item": "Destruction Staff",
          "itemId": "Weaponizer.DestructionStaff",
          "quantity": 1,
          "chance": 1,
          "imageUrl": "/textures/items/destructionStaff.png"
        },
        {
          "item": "Apoco Upgrade Kit",
          "itemId": "Itemizer.UpgradeKitApoco",
          "quantity": 1,
          "chance": 1,
          "imageUrl": "/textures/items/upgradeKitApoco.png"
        }
      ],
      "imageUrl": "/textures/mobs/alarmo.png",
      "model": "/models/voxponds/alarmo/alarmo.gltf",
      "health": 60
    },
    {
      "entity": "EntityGadgetoid",
      "weight": 20,
      "min": 0,
      "max": 1,
      "creatureType": "monster",
      "registeredBiomes": [
        {
          "name": "Mysterium",
          "imageUrl": "/dimensions/biomes/vox-ponds.png"
        }
      ],
      "loot": [
        {
          "item": "Apoco Upgrade Kit",
          "itemId": "Itemizer.UpgradeKitApoco",
          "quantity": 1,
          "chance": 1,
          "imageUrl": "/textures/items/upgradeKitApoco.png"
        },
        {
          "item": "Vox Ponds Gems",
          "itemId": "Itemizer.CoinsVoxPonds",
          "quantity": 2,
          "chance": 1,
          "imageUrl": "/textures/items/voxpondsGems.png"
        }
      ],
      "imageUrl": "/textures/mobs/gadgetoid.png",
      "model": "/models/voxponds/gadgetoid/gadgetoid.gltf",
      "health": 60
    },
    {
      "entity": "EntityCentinel",
      "weight": 20,
      "min": 0,
      "max": 1,
      "creatureType": "monster",
      "registeredBiomes": [
        {
          "name": "Mysterium",
          "imageUrl": "/dimensions/biomes/vox-ponds.png"
        }
      ],
      "loot": [
        {
          "item": "Vox Banner",
          "itemId": "SpecialBlockizer.VoxBanner",
          "quantity": 1,
          "chance": 1,
          "imageUrl": "/textures/banner/voxBanner.png"
        }
      ],
      "imageUrl": "/textures/mobs/centinel.png",
      "model": "/models/voxponds/centinel/centinel.gltf",
      "health": 40
    },
    {
      "entity": "EntityGrocculate",
      "weight": 20,
      "min": 0,
      "max": 1,
      "creatureType": "monster",
      "registeredBiomes": [
        {
          "name": "Mysterium",
          "imageUrl": "/dimensions/biomes/vox-ponds.png"
        }
      ],
      "loot": [
        {
          "item": "Vox Cannon",
          "itemId": "Weaponizer.VoxCannon",
          "quantity": 1,
          "chance": 1,
          "imageUrl": "/textures/items/voxCannon.png"
        },
        {
          "item": "Toxic Lump",
          "itemId": "Itemizer.ToxicLump",
          "quantity": 1,
          "chance": 1,
          "imageUrl": "/textures/items/toxicLump.png"
        },
        {
          "item": "Vox Ponds Gems",
          "itemId": "Itemizer.CoinsVoxPonds",
          "quantity": 2,
          "chance": 1,
          "imageUrl": "/textures/items/voxpondsGems.png"
        }
      ],
      "imageUrl": "/textures/mobs/grocculate.png",
      "model": "/models/voxponds/grocculate/grocculate.gltf",
      "health": 160
    },
    {
      "entity": "EntityToxxulous",
      "weight": 20,
      "min": 0,
      "max": 1,
      "creatureType": "monster",
      "registeredBiomes": [
        {
          "name": "Mysterium",
          "imageUrl": "/dimensions/biomes/vox-ponds.png"
        }
      ],
      "loot": [
        {
          "item": "Poison Plunger",
          "itemId": "Weaponizer.PoisonPlunger",
          "quantity": 1,
          "chance": 1,
          "imageUrl": "/textures/items/poisonPlunger.png"
        },
        {
          "item": "Sludge Parasite",
          "itemId": "Itemizer.SludgeParasite",
          "quantity": 1,
          "chance": 1,
          "imageUrl": "/textures/items/sludgeParasite.png"
        }
      ],
      "imageUrl": "/textures/mobs/toxxulous.png",
      "model": "/models/voxponds/toxxulous/toxxulous.gltf",
      "health": 60
    },
    {
      "entity": "EntityFischer",
      "weight": 1,
      "min": 0,
      "max": 1,
      "creatureType": "waterCreature",
      "registeredBiomes": [
        {
          "name": "Mysterium",
          "imageUrl": "/dimensions/biomes/vox-ponds.png"
        }
      ],
      "loot": [],
      "imageUrl": "/textures/mobs/fischer.png",
      "model": "/models/voxponds/fischer/fischer.gltf",
      "hunterLevelRequirement": 33,
      "health": 40
    },
    {
      "entity": "EntityExoid",
      "imageUrl": "/textures/mobs/exoid.png",
      "model": "/models/voxponds/exoid/exoid.gltf",
      "health": 100,
      "weight": 20,
      "min": 1,
      "max": 1,
      "creatureType": "monster",
      "registeredBiomes": [
        {
          "name": "Vox Ponds",
          "imageUrl": "/dimensions/biomes/vox-ponds.png"
        }
      ],
      "loot": [
        {
          "item": "Doom Stone",
          "itemId": "Itemizer.DoomStone",
          "quantity": 1,
          "chance": 1,
          "imageUrl": "/textures/items/doomStone.png",
          "itemName": "Doom Stone"
        },
        {
          "item": "Vox Ponds Realmstone",
          "itemId": "Itemizer.RealmstoneVoxPonds",
          "quantity": 4,
          "chance": 0.3333333333333333,
          "imageUrl": "/textures/items/realmstoneVoxPonds.png",
          "itemName": "Vox Ponds Realmstone"
        }
      ]
    },
    {
      "entity": "EntityNightwing",
      "imageUrl": "/textures/mobs/nightwing.png",
      "model": "/models/voxponds/nightwing/nightwing.gltf",
      "health": 30,
      "weight": 20,
      "min": 1,
      "max": 1,
      "creatureType": "monster",
      "registeredBiomes": [
        {
          "name": "Vox Ponds",
          "imageUrl": "/dimensions/biomes/vox-ponds.png"
        }
      ],
      "loot": [
        {
          "item": "Gas Blaster",
          "itemId": "Weaponizer.GasBlaster",
          "quantity": 1,
          "chance": 0.01,
          "imageUrl": "/textures/items/gasBlaster.png",
          "itemName": "Gas Blaster"
        },
        {
          "item": "Apoco Stone",
          "itemId": "Itemizer.ApocoStone",
          "quantity": 1,
          "chance": 0.2,
          "imageUrl": "/textures/items/apocoStone.png",
          "itemName": "Apoco Stone"
        }
      ]
    }
  ],
  "npcs": [],
  "generatedOres": [],
  "resources": [
    {
      "name": "Copper Coin",
      "type": "Moeda",
      "usage": "Drop comum da dimensão (1-3 + variação por nível) na Vox Ponds Table. ",
      "imageUrl": "/dimensions/dustopia_images/Copper_Coin.png"
    },
    {
      "name": "Toxic Lump",
      "type": "Recurso especial",
      "usage": "Drop raro (~10%) da Vox Ponds Table, usado para crafting ou troca em NPCs da dimensão. ",
      "imageUrl": "/dimensions/dustopia_images/Toxic_Lump.png"
    }
  ],
  "bosses": [
    {
      "name": "Voxxulon",
      "howToSpawn": "Coloque um Vile Stone no bloco do Altar na Voxxulon Platform para invocar o boss. ",
      "notes": "Boss de nível alto da dimensão com temática robótica; derrota concede acesso a loot de tier 2 e confirma conclusão da área. ",
      "imageUrl": "/dimensions/voxponds_images/Voxxulon.png",
      "spawnItems": [
        {
          "itemId": "Itemizer.VileStone",
          "item": "Vile Stone",
          "usage": "Entregue uma Vile Stone ao Voxxulon Altar para iniciar a luta.",
          "imageUrl": "/textures/items/vileStone.png"
        }
      ],
      "entities": [
        {
          "entity": "EntityVoxxulon",
          "displayName": "Voxxulon",
          "imageUrl": "/textures/mobs/voxxulon.png",
          "model": "/models/boss/voxxulon/voxxulon/voxxulon.gltf",
          "health": 2000
        }
      ],
      "loot": [
        {
          "item": "Toxin Bow",
          "itemId": "Weaponizer.ToxinBow",
          "minQuantity": 1,
          "maxQuantity": 1,
          "chance": 1,
          "sourceEntities": [
            "EntityVoxxulon"
          ],
          "imageUrl": "/dimensions/common_images/Toxin_Bow.png"
        },
        {
          "item": "Vile Vanquisher",
          "itemId": "Weaponizer.VileVanquisher",
          "minQuantity": 1,
          "maxQuantity": 1,
          "chance": 1,
          "sourceEntities": [
            "EntityVoxxulon"
          ],
          "imageUrl": "/textures/items/vileVanquisher.png"
        },
        {
          "item": "Sludge Sniper",
          "itemId": "Weaponizer.SludgeSniper",
          "minQuantity": 1,
          "maxQuantity": 1,
          "chance": 1,
          "sourceEntities": [
            "EntityVoxxulon"
          ],
          "imageUrl": "/textures/items/sludgeSniper.png"
        },
        {
          "item": "Noxious Staff",
          "itemId": "Weaponizer.NoxiousStaff",
          "minQuantity": 1,
          "maxQuantity": 1,
          "chance": 1,
          "sourceEntities": [
            "EntityVoxxulon"
          ],
          "imageUrl": "/textures/items/noxiousStaff.png"
        }
      ]
    }
  ],
  "biomes": [
    {
      "name": "Vox Ponds",
      "id": 85,
      "imageUrl": "/nvm2_data/img_data/Voxponds/biomes/Vox_Ponds.png"
    }
  ],
  "structures": [
    {
      "name": "Destroyed Store",
      "imageUrl": "/nvm2_data/img_data/Voxponds/structures/Destroyed_Store.png"
    },
    {
      "name": "Enigma Station",
      "imageUrl": "/nvm2_data/img_data/Voxponds/structures/Enigma_Station.png"
    },
    {
      "name": "Exoid Platform",
      "imageUrl": "/nvm2_data/img_data/Voxponds/structures/Exoid_Platform.png"
    },
    {
      "name": "Nightwing Island",
      "imageUrl": "/nvm2_data/img_data/Voxponds/structures/Nightwing_Island.png"
    },
    {
      "name": "Voxxulon Altar",
      "imageUrl": "/nvm2_data/img_data/Voxponds/structures/Vuxxolon_Altar.png"
    }
  ]
};
