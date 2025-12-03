export const Acientcavern = {
  "id": "ancient_cavern",
  "name": "Ancient Cavern",
  "tier": 3,
  "prerequisiteDimension": "Crystevia",
  "theme": "Templo flutuante no vazio ligado aos quatro deuses, estrutura sagrada e arena de campeões.",
  "shortDescription": "Uma escala gigante de templo-arena que flutua sobre o void, com quatro câmaras de campeões de deuses e combate de nível avançado onde blocos não podem ser colocados ou quebrados. ",
  "realmstone": {
    "obtainHint": "Derrote cinco diferentes Crystevia Constructs em menos de 30 segundos enquanto carrega um Blank Realmstone em Crystevia para obter a Ancient Cavern Realmstone. ",
    "obtainDetails": "Na dimensão Crystevia, com um Blank Realmstone no inventário, localize e derrote cinco diferentes constructs da dimensão dentro de 30 segundos. Ao completar essa tarefa, o Blank Realmstone é convertido na Ancient Cavern Realmstone, que então ativa o portal para a dimensão. ",
    "imageUrl": "/dimensions/ancientcavern_images/Ancient_Cavern_Realmstone.png"
  },
  "imageUrl": "/dimensions/ancientcavern_images/Ancient_Cavern.png",
  "wikiUrl": "https://adventofascension.fandom.com/wiki/Removed_features/Ancient_Cavern",
  "mainObjectives": [
    {
      "id": "unlock_ancient_cavern",
      "title": "Desbloquear Ancient Cavern",
      "description": "Obter a Ancient Cavern Realmstone em Crystevia conforme a tarefa de cinco constructs em 30 segundos, e ativar o portal para entrar na dimensão. ",
      "imageUrl": "/dimensions/ancientcavern_images/Ancient_Cavern_Realmstone.png"
    },
    {
      "id": "clear_main_room",
      "title": "Dominar a sala principal",
      "description": "Sobreviver na sala principal do templo, onde spawners geram mobs representando os deuses (Angelica, Bloodsucker, Flowerface, Rock Critter). ",
      "imageUrl": "/dimensions/ancientcavern_images/Angelica.png"
    },
    {
      "id": "defeat_champions",
      "title": "Derrotar os campeões divinos",
      "description": "Alcance nível 70 em habilidades específicas (Infusion, Runation, Foraging, Hunter) e encha a barra de Tribute para cada deus Selyan, Luxon, Pluton, Erebon para então desafiar os campeões Coniferon, Horon, Goldorth e Penumbra. ",
      "imageUrl": "/dimensions/ancientcavern_images/Coniferon.png"
    }
  ],
  "secondaryObjectives": [
    {
      "id": "explore_structure",
      "title": "Explorar as câmaras de campeões",
      "description": "Visitar cada um dos quatro corredores da sala principal que conduzem às câmaras dos campeões e experimentar o design da arena flutuante acima do void onde blocos não podem ser colocados ou quebrados. ",
      "imageUrl": "/dimensions/ancientcavern_images/Luxon_Shrine.png"
    },
    {
      "id": "collect_tribute_resources",
      "title": "Coletar recursos de Tribute",
      "description": "Derrote mobs gerados na sala principal para acumular Tribute para cada deus e prepare-se para os desafios dos campeões. ",
      "imageUrl": "/dimensions/ancientcavern_images/Selyan_Shrine.png"
    }
  ],
  "progressionNotes": [
    {
      "id": "arena_endgame_structure",
      "title": "Estrutura de arena de final de jogo",
      "description": "Ancient Cavern foi concebida como uma das primeiras arenas de nível final (tier 3) antes de ser removida em versões posteriores; exige domínio de habilidades, tributos e combate. ",
      "imageUrl": "/dimensions/ancientcavern_images/Ancient_Cavern.png"
    },
    {
      "id": "removed_in_later_versions",
      "title": "Removida em versões futuras",
      "description": "Foi removida porque o desenvolvedor preferiu uma única dimensão de arena para vários papéis; em versões modernas do mod não existe mais, mas em Nevermine 2 Tslat 1.1.3 ela ainda pode estar presente. ",
      "imageUrl": "/dimensions/common_images/Nowhere.png"
    }
  ],
  "versionNotes": "Embora listada como “Removed features” na wiki oficial, em versões como Nevermine 2 (Tslat 1.1.3) a Ancient Cavern ainda existe como parte do sistema antigo de deuses/Tribute. Alguns blocos, geração e drops podem diferir das versões modernas.",
  "mobs": [
    {
      "entity": "EntityRockCritter",
      "weight": 20,
      "min": 0,
      "max": 1,
      "creatureType": "monster",
      "registeredBiomes": [
        "DimensionOrganizer.AncientCavern"
      ],
      "loot": [
        {
          "item": "Ancient Cavern Realmstone",
          "itemId": "Itemizer.RealmstoneAncientCavern",
          "quantity": 2,
          "chance": 0.025,
          "imageUrl": "/textures/items/realmstoneAncientCavern.png",
          "itemName": "Ancient Cavern Realmstone"
        }
      ],
      "imageUrl": "/textures/mobs/rockcritter.png",
      "model": "/models/deeplands/rock-critter/rock-critter.gltf",
      "health": 80
    },
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
      "entity": "EntityBloodsucker",
      "weight": 20,
      "min": 0,
      "max": 1,
      "creatureType": "monster",
      "health": 130,
      "imageUrl": "/textures/mobs/bloodsucker.png",
      "model": "/models/abyss/bloodsucker/bloodsucker.gltf",
      "registeredBiomes": [
        {
          "name": "Abyssal Void",
          "imageUrl": "/dimensions/biomes/abyssal-void.png"
        },
        {
          "name": "Abyssal Eyelands",
          "imageUrl": "/nvm2_data/img_data/Abyss/biomes/Abyssal_Eyelands.png"
        },
        {
          "name": "Abyssal Shadow Forest",
          "imageUrl": "/nvm2_data/img_data/Abyss/biomes/Abyssal_Shadow_Forest.png"
        }
      ],
      "loot": [
        {
          "item": "Copper Coin",
          "imageUrl": "/textures/items/coinCopper.png",
          "chance": 1,
          "min": 5,
          "max": 14,
          "notes": "Always drops: 5 + rand.nextInt(10)"
        },
        {
          "item": "Ancient Cavern Realmstone",
          "imageUrl": "/textures/items/realmstoneAncientCavern.png",
          "chance": 0.025,
          "quantity": 2,
          "notes": "rand.nextInt(40) == 17 (1/40 chance, 2.5%)"
        },
        {
          "item": "Blood Drainer",
          "imageUrl": "/textures/items/bloodDrainer.png",
          "chance": 0.01,
          "quantity": 1,
          "notes": "rand.nextInt(100) == 98 (1/100 chance, 1%)"
        },
        {
          "item": "Blood Iron",
          "imageUrl": "/textures/items/bloodIron.png",
          "chance": 0.01,
          "quantity": 1,
          "notes": "rand.nextInt(100) == 43 (1/100 chance, 1%)"
        },
        {
          "item": "Abyssal Gems",
          "imageUrl": "/textures/items/abyssGems.png",
          "chance": 0.5,
          "quantity": 1,
          "notes": "rand.nextBoolean() (50% chance)"
        },
        {
          "item": "Abyssal Upgrade Kit",
          "imageUrl": "/textures/items/upgradeKitAbyssal.png",
          "chance": 0.0067,
          "quantity": 1,
          "notes": "rand.nextInt(150) == 35 (1/150 chance, ~0.67%)"
        }
      ],
      "lootNotes": "All drops are purely random. No looting enchantment or recentlyHit conditions affect drops. Special: If killed in Ancient Cavern dimension by a player, gives 8 Erebon tribute (onDeath effect, not a drop)."
    },
    {
      "entity": "EntityAngelica",
      "imageUrl": "/textures/mobs/angelica.png",
      "model": "/models/haven/angelica/angelica.gltf",
      "health": 20,
      "weight": 15,
      "min": 0,
      "max": 1,
      "creatureType": "monster",
      "registeredBiomes": [
        {
          "name": "Haven",
          "imageUrl": "/dimensions/biomes/haven.png"
        }
      ],
      "loot": [
        {
          "item": "Haven Gems",
          "itemId": "Itemizer.CoinsHaven",
          "quantity": 1,
          "chance": 0.5,
          "imageUrl": "/textures/items/havenGems.png",
          "itemName": "Haven Gems"
        },
        {
          "item": "Gravitator",
          "itemId": "Weaponizer.Gravitator",
          "quantity": 1,
          "chance": 0.016666666666666666,
          "imageUrl": "/textures/items/gravitator.png",
          "itemName": "Gravitator"
        }
      ]
    },
    {
      "entity": "EntityGoldorth",
      "health": 3000,
      "notes": "Gerado automaticamente por estruturas da dimensão.",
      "registeredBiomes": [],
      "loot": [
        {
          "item": "Pluton Scythe",
          "itemId": "Weaponizer.PlutonScythe",
          "quantity": 1,
          "chance": 1,
          "imageUrl": "/textures/items/plutonScythe.png"
        },
        {
          "item": "Pluton Stickler",
          "itemId": "Weaponizer.PlutonStickler",
          "quantity": 1,
          "chance": 1,
          "imageUrl": "/textures/items/plutonStickler.png"
        },
        {
          "item": "Pluton Banner",
          "itemId": "SpecialBlockizer.PlutonBanner",
          "quantity": 1,
          "chance": 1,
          "imageUrl": "/textures/banner/plutonBanner.png"
        },
        {
          "item": "Goldorth Statue",
          "itemId": "SpecialBlockizer.GoldorthStatue",
          "quantity": 1,
          "chance": 1,
          "imageUrl": "/textures/model/goldorthStatue.png"
        }
      ],
      "imageUrl": "/textures/mobs/goldorth.png",
      "model": "/models/boss/cavern/goldorth/goldorth.gltf"
    },
    {
      "entity": "EntityHoron",
      "health": 3000,
      "notes": "Gerado automaticamente por estruturas da dimensão.",
      "registeredBiomes": [],
      "loot": [
        {
          "item": "Luxon Scythe",
          "itemId": "Weaponizer.LuxonScythe",
          "quantity": 1,
          "chance": 1,
          "imageUrl": "/textures/items/luxonScythe.png"
        },
        {
          "item": "Luxon Stickler",
          "itemId": "Weaponizer.LuxonStickler",
          "quantity": 1,
          "chance": 1,
          "imageUrl": "/textures/items/luxonStickler.png"
        },
        {
          "item": "Luxon Banner",
          "itemId": "SpecialBlockizer.LuxonBanner",
          "quantity": 1,
          "chance": 1,
          "imageUrl": "/textures/banner/luxonBanner.png"
        },
        {
          "item": "Horon Statue",
          "itemId": "SpecialBlockizer.HoronStatue",
          "quantity": 1,
          "chance": 1,
          "imageUrl": "/textures/model/horonStatue.png"
        }
      ],
      "imageUrl": "/textures/mobs/horon.png",
      "model": "/models/boss/cavern/horon/horon.gltf"
    },
    {
      "entity": "EntityPenumbra",
      "health": 3000,
      "notes": "Gerado automaticamente por estruturas da dimensão.",
      "registeredBiomes": [],
      "loot": [
        {
          "item": "Erebon Scythe",
          "itemId": "Weaponizer.ErebonScythe",
          "quantity": 1,
          "chance": 1,
          "imageUrl": "/textures/items/erebonScythe.png"
        },
        {
          "item": "Erebon Stickler",
          "itemId": "Weaponizer.ErebonStickler",
          "quantity": 1,
          "chance": 1,
          "imageUrl": "/textures/items/erebonStickler.png"
        },
        {
          "item": "Erebon Banner",
          "itemId": "SpecialBlockizer.ErebonBanner",
          "quantity": 1,
          "chance": 1,
          "imageUrl": "/textures/banner/erebonBanner.png"
        },
        {
          "item": "Penumbra Statue",
          "itemId": "SpecialBlockizer.PenumbraStatue",
          "quantity": 1,
          "chance": 1,
          "imageUrl": "/textures/model/penumbraStatue.png"
        }
      ],
      "imageUrl": "/textures/mobs/penumbra.png",
      "model": "/models/boss/cavern/penumbra/penumbra.gltf"
    }
  ],
  "npcs": [],
  "generatedOres": [],
  "resources": [
    {
      "name": "Ancient Tiles",
      "type": "Bloco estrutural indestrutível",
      "usage": "Bloco básico que compõe o templo; o jogador não pode minerá-lo ou modificá-lo — reforça a sensação de arena fixa. ",
      "imageUrl": "/dimensions/ancientcavern_images/Ancient_Tiles.png"
    },
    {
      "name": "Ancient Vines",
      "type": "Decoração / folhagem",
      "usage": "Cobrem partes do templo, dão atmosfera de arquitetura antiga e ajudam a decorar builds ou memorizar a dimensão. ",
      "imageUrl": "/dimensions/ancientcavern_images/Ancient_Vines.png"
    },
    {
      "name": "Ancient Lamps",
      "type": "Bloco de iluminação",
      "usage": "Luzes decorativas encontradas no templo que adicionam ambiente, mas não permitem grandes construções ou personalização. ",
      "imageUrl": "/dimensions/ancientcavern_images/Ancient_Lamp.png"
    }
  ],
  "bosses": [
    {
      "name": "Coniferon",
      "howToSpawn": "Ter nível 70 em Infusion e barra de Tribute completa para Selyan, então clicar no Selyan Shrine para invocar Coniferon. ",
      "notes": "Campeão de Selyan, especialista em natureza e regeneração; derrota permite progressão através do templo. ",
      "imageUrl": "/dimensions/ancientcavern_images/Coniferon.png",
      "entities": [
        {
          "entity": "EntityConiferon",
          "displayName": "Coniferon",
          "imageUrl": "/textures/mobs/coniferon.png",
          "model": "/models/boss/coniferon/coniferon/coniferon.gltf",
          "health": 4000
        }
      ],
      "loot": [
        {
          "item": "Selyan Scythe",
          "itemId": "Weaponizer.SelyanScythe",
          "minQuantity": 1,
          "maxQuantity": 1,
          "chance": 0.1,
          "sourceEntities": [
            "EntityConiferon"
          ],
          "imageUrl": "/textures/items/selyanScythe.png"
        },
        {
          "item": "Selyan Stickler",
          "itemId": "Weaponizer.SelyanStickler",
          "minQuantity": 1,
          "maxQuantity": 1,
          "chance": 0.1,
          "sourceEntities": [
            "EntityConiferon"
          ],
          "imageUrl": "/textures/items/selyanStickler.png"
        }
      ]
    },
    {
      "name": "Horon",
      "howToSpawn": "Ter nível 70 em Runation e barra de Tribute completa para Luxon, então clicar no Luxon Shrine para invocar Horon. ",
      "notes": "Campeão de Luxon, com habilidades mágicas de dano; parte integrante da progressão de nível alto. ",
      "imageUrl": "/dimensions/ancientcavern_images/Horon.png",
      "entities": [
        {
          "entity": "EntityHoron",
          "displayName": "Horon",
          "imageUrl": "/textures/mobs/horon.png",
          "model": "/models/boss/horon/horon/horon.gltf",
          "health": 3000
        }
      ],
      "loot": [
        {
          "item": "Luxon Scythe",
          "itemId": "Weaponizer.LuxonScythe",
          "minQuantity": 1,
          "maxQuantity": 1,
          "chance": 0.1,
          "sourceEntities": [
            "EntityHoron"
          ],
          "imageUrl": "/textures/items/luxonScythe.png"
        },
        {
          "item": "Luxon Stickler",
          "itemId": "Weaponizer.LuxonStickler",
          "minQuantity": 1,
          "maxQuantity": 1,
          "chance": 0.1,
          "sourceEntities": [
            "EntityHoron"
          ],
          "imageUrl": "/textures/items/luxonStickler.png"
        }
      ]
    },
    {
      "name": "Goldorth",
      "howToSpawn": "Ter nível 70 em Foraging e barra de Tribute completa para Pluton, então clicar no Pluton Shrine para invocar Goldorth. ",
      "notes": "Campeão de Pluton, focado em mineração e recursos; importante para parte final da sala de câmaras. ",
      "imageUrl": "/dimensions/ancientcavern_images/Goldorth.png",
      "entities": [
        {
          "entity": "EntityGoldorth",
          "displayName": "Goldorth",
          "imageUrl": "/textures/mobs/goldorth.png",
          "model": "/models/boss/goldorth/goldorth/goldorth.gltf",
          "health": 3000
        }
      ],
      "loot": [
        {
          "item": "Pluton Scythe",
          "itemId": "Weaponizer.PlutonScythe",
          "minQuantity": 1,
          "maxQuantity": 1,
          "chance": 0.1,
          "sourceEntities": [
            "EntityGoldorth"
          ],
          "imageUrl": "/textures/items/plutonScythe.png"
        },
        {
          "item": "Pluton Stickler",
          "itemId": "Weaponizer.PlutonStickler",
          "minQuantity": 1,
          "maxQuantity": 1,
          "chance": 0.1,
          "sourceEntities": [
            "EntityGoldorth"
          ],
          "imageUrl": "/textures/items/plutonStickler.png"
        }
      ]
    },
    {
      "name": "Penumbra",
      "howToSpawn": "Ter nível 70 em Hunter e barra de Tribute completa para Erebon, então clicar no Erebon Shrine para invocar Penumbra. ",
      "notes": "Campeão de Erebon, ligado à escuridão e caça; cenário de desafio elevado antes de sair da dimensão. ",
      "imageUrl": "/dimensions/ancientcavern_images/Penumbra.png",
      "entities": [
        {
          "entity": "EntityPenumbra",
          "displayName": "Penumbra",
          "imageUrl": "/textures/mobs/penumbra.png",
          "model": "/models/boss/penumbra/penumbra/penumbra.gltf",
          "health": 3000
        }
      ],
      "loot": [
        {
          "item": "Erebon Scythe",
          "itemId": "Weaponizer.ErebonScythe",
          "minQuantity": 1,
          "maxQuantity": 1,
          "chance": 0.1,
          "sourceEntities": [
            "EntityPenumbra"
          ],
          "imageUrl": "/textures/items/erebonScythe.png"
        },
        {
          "item": "Erebon Stickler",
          "itemId": "Weaponizer.ErebonStickler",
          "minQuantity": 1,
          "maxQuantity": 1,
          "chance": 0.1,
          "sourceEntities": [
            "EntityPenumbra"
          ],
          "imageUrl": "/textures/items/erebonStickler.png"
        }
      ]
    }
  ],
  "biomes": [
    {
      "name": "Ancient Cavern",
      "id": 90,
      "imageUrl": "/nvm2_data/img_data/Ancient Cavern/biomes/Ancient_Cavern.png"
    }
  ],
  "structures": [
    {
      "name": "Ancient Cavern Hall",
      "imageUrl": "/nvm2_data/img_data/Ancient Cavern/structures/Ancient_Cavern_Room.png"
    },
    {
      "name": "Coniferon Room",
      "imageUrl": "/nvm2_data/img_data/Ancient Cavern/structures/Coniferon_Room.png"
    },
    {
      "name": "Goldorth Room",
      "imageUrl": "/nvm2_data/img_data/Ancient Cavern/structures/Goldorth_Room.png"
    },
    {
      "name": "Horon Room",
      "imageUrl": "/nvm2_data/img_data/Ancient Cavern/structures/Horon_Room.png"
    },
    {
      "name": "Penumbra Room",
      "imageUrl": "/nvm2_data/img_data/Ancient Cavern/structures/Penumbra_Room.png"
    }
  ]
};
