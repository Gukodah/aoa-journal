export const Abyss = {
  "id": "abyss",
  "name": "The Abyss",
  "tier": 2,
  "prerequisiteDimension": "The Nether",
  "theme": "Dimensão sangrenta, grotesca e escura, completamente tingida de vermelho.",
  "shortDescription": "Mundo de colinas e planícies cobertas de Abyssal Stone e Abyssal Grass, árvores e flora feitos de carne, olhos e tentáculos, com atmosfera opressiva e quase sem luz natural.",
  "realmstone": {
    "obtainHint": "Derrote o Wither dentro do Nether enquanto carrega um Blank Realmstone para transformá-lo em uma Abyss Realmstone.",
    "obtainDetails": "Com um Blank Realmstone no inventário, invoque e derrote o Wither estando no Nether. Ao concluir a luta, o Blank Realmstone é consumido e convertido em Abyss Realmstone, que pode ser usado em um portal de AoA.",
    "imageUrl": "/dimensions/abyss_images/Abyss_Realmstone.png"
  },
  "imageUrl": "/dimensions/abyss_images/The_Abyss.png",
  "wikiUrl": "https://adventofascension.fandom.com/wiki/The_Abyss",
  "mainObjectives": [
    {
      "id": "unlock_dimension",
      "title": "Desbloquear The Abyss",
      "description": "Conseguir a Abyss Realmstone derrotando o Wither no Nether com um Blank Realmstone no inventário e, em seguida, ativar um portal de AoA com ela.",
      "imageUrl": "/dimensions/abyss_images/Abyss_Realmstone.png"
    },
    {
      "id": "explore_surface_and_caves",
      "title": "Explorar superfície e cavernas",
      "description": "Mapear as colinas vermelhas, lagos de sangue e cavernas abissais, coletando blocos temáticos como Abyssal Stone, Abyssal Grass e flora de carne e olhos.",
      "imageUrl": "/dimensions/abyss_images/Abyss_(Night_Vision).png"
    },
    {
      "id": "farm_resources",
      "title": "Farmar recursos abissais",
      "description": "Localizar e minerar minérios e blocos valiosos da Abyss, como Bloodstone Ore, além de obter Nightmare Flakes e outros itens usados na progressão dimensional.",
      "imageUrl": "/dimensions/abyss_images/Bloodstone_Ore.png"
    },
    {
      "id": "defeat_bosses",
      "title": "Derrotar Elusive e Shadowlord",
      "description": "Encontrar as estruturas especiais da dimensão (como a arena de Elusive e a plataforma de Shadowlord) e derrotar esses chefes para liberar novos caminhos de progressão.",
      "imageUrl": "/dimensions/abyss_images/Shadowlord.png"
    }
  ],
  "secondaryObjectives": [
    {
      "id": "explore_structures",
      "title": "Explorar estruturas únicas",
      "imageUrl": "/dimensions/abyss_images/Shadowlord_Platform.png",
      "description": "Localizar estruturas como Flesh Temples, Illusion Trees e plataformas do Shadowlord para loot adicional e desafios opcionais."
    },
    {
      "id": "catalogue_mobs",
      "title": "Catalogar mobs da Abyss",
      "description": "Completar o bestiário local enfrentando a maior parte dos mobs da Abyss (Anemia, Apparition, Bloodsucker, Distorter, etc.).",
      "imageUrl": "/dimensions/abyss_images/Apparition.png"
    },
    {
      "id": "gather_magic_energy",
      "title": "Coletar energia mágica",
      "imageUrl": "/dimensions/abyss_images/Abyssro.png",
      "description": "Farmar Pixons e outras fontes de energia mágica específicos da dimensão para uso em encantamentos e infusões."
    },
    {
      "id": "collect_building_blocks",
      "title": "Coletar blocos de construção temáticos",
      "imageUrl": "/dimensions/abyss_images/Bloodstone_Bricks.png",
      "description": "Coletar blocos de decoração temática (Blood Logs, Eyeball Logs, Eye Blocks, Tentacles, Blood Spikes) para construções no Overworld ou em outras dimensões."
    }
  ],
  "progressionNotes": [
    {
      "id": "progression_notes_1",
      "title": "Notas de progressão #1",
      "description": "The Abyss é uma dimensão de tier 2 acessível a partir do Nether, indicada quando o jogador já domina o conteúdo do Overworld e do Nether.",
      "imageUrl": "/dimensions/abyss_images/Abyss_(Night_Vision).png"
    },
    {
      "id": "progression_notes_2",
      "title": "Notas de progressão #2",
      "description": "Elusive e Shadowlord formam um elo de progressão para Greckon e Dustopia, permitindo expandir a rota para dimensões ainda mais perigosas.",
      "imageUrl": "/dimensions/abyss_images/Shadowlord.png"
    },
    {
      "id": "progression_notes_3",
      "title": "Notas de progressão #3",
      "description": "Os recursos e drops da Abyss ajudam a preparar o jogador para conteúdo de mid/late-game, tanto em poder de combate quanto em mobilidade.",
      "imageUrl": "/dimensions/abyss_images/Abyssro.png"
    }
  ],
  "generatedOres": [
    {
      "name": "Bloodstone Ore",
      "type": "Minério",
      "usage": "Minério associado ao sangue e rituais sombrios; essencial para crafting de itens avançados ligados à The Abyss e progressão em dimensões de terror.",
      "imageUrl": "/ores/bloodstone_ore.png",
      "height": {
        "min": 45,
        "max": 49
      }
    }
  ],
  "generatedStones": [
    {
      "id": "abyssStone",
      "field": "Blockizer.AbyssStone",
      "displayName": "Abyss Stone",
      "generation": "Primary stone block generated during chunk generation",
      "notes": "Forms the base terrain of the Abyss dimension",
      "imageUrl": "/dimensions/abyss_images/Abyssal_Stone.png"
    }
  ],
  "mobs": [
    {
      "entity": "EntityApparition",
      "weight": 20,
      "min": 0,
      "max": 1,
      "creatureType": "monster",
      "health": 50,
      "imageUrl": "/textures/mobs/apparition.png",
      "model": "/models/abyss/apparition/apparition.gltf",
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
          "item": "Abyssal Gems",
          "imageUrl": "/textures/items/abyssGems.png",
          "chance": 0.5,
          "quantity": 1,
          "notes": "rand.nextInt(2) == 0"
        },
        {
          "item": "Copper Coin",
          "imageUrl": "/textures/items/coinCopper.png",
          "chance": 1,
          "min": 5,
          "max": 14,
          "notes": "Always drops: 5 + rand.nextInt(10)"
        },
        {
          "item": "Book of Shadows",
          "imageUrl": "/textures/items/bookOfShadows.png",
          "chance": 0.05,
          "quantity": 1,
          "notes": "rand.nextInt(20) == 3"
        },
        {
          "item": "Shadow Banner",
          "imageUrl": "/textures/banner/shadowBanner.png",
          "chance": 0.143,
          "quantity": 1,
          "notes": "rand.nextInt(7) == 0 (1/7 chance)"
        }
      ],
      "lootNotes": "All drops are purely random. No looting enchantment or recentlyHit conditions affect drops."
    },
    {
      "entity": "EntityDistorter",
      "weight": 20,
      "min": 0,
      "max": 1,
      "creatureType": "monster",
      "health": 60,
      "imageUrl": "/textures/mobs/distorter.png",
      "model": "/models/abyss/distorter/distorter.gltf",
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
          "item": "Abyssal Gems",
          "imageUrl": "/textures/items/abyssGems.png",
          "chance": 0.5,
          "quantity": 1,
          "notes": "rand.nextInt(2) == 0"
        },
        {
          "item": "Super Cannon",
          "imageUrl": "/textures/items/superCannon.png",
          "chance": 0.025,
          "quantity": 1,
          "notes": "rand.nextInt(40) == 33 (1/40 chance)"
        }
      ],
      "lootNotes": "All drops are purely random. No looting enchantment or recentlyHit conditions affect drops."
    },
    {
      "entity": "EntityFiend",
      "weight": 20,
      "min": 0,
      "max": 1,
      "creatureType": "monster",
      "health": 60,
      "imageUrl": "/textures/mobs/fiend.png",
      "model": "/models/abyss/fiend/fiend.gltf",
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
          "item": "Abyssal Gems",
          "imageUrl": "/textures/items/abyssGems.png",
          "chance": 0.5,
          "quantity": 1,
          "notes": "rand.nextInt(2) == 0"
        }
      ],
      "lootNotes": "All drops are purely random. No looting enchantment or recentlyHit conditions affect drops."
    },
    {
      "entity": "EntityOcculent",
      "weight": 20,
      "min": 0,
      "max": 1,
      "creatureType": "monster",
      "health": 40,
      "imageUrl": "/textures/mobs/occulent.png",
      "model": "/models/abyss/occulent/occulent.gltf",
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
          "item": "Abyssal Gems",
          "imageUrl": "/textures/items/abyssGems.png",
          "chance": 0.5,
          "quantity": 1,
          "notes": "rand.nextInt(2) == 0"
        },
        {
          "item": "Soul Spark",
          "imageUrl": "/textures/items/soulSpark.png",
          "chance": 0.0133,
          "quantity": 1,
          "notes": "rand.nextInt(75) == 44 (1/75 chance, ~1.33%)"
        }
      ],
      "lootNotes": "All drops are purely random. No looting enchantment or recentlyHit conditions affect drops."
    },
    {
      "entity": "EntitySlimer",
      "weight": 1,
      "min": 0,
      "max": 1,
      "creatureType": "monster",
      "health": 90,
      "imageUrl": "/textures/mobs/slimer.png",
      "model": "/models/abyss/slimer/slimer.gltf",
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
          "item": "Silver Coin",
          "imageUrl": "/textures/items/coinSilver.png",
          "chance": 1,
          "min": 5,
          "max": 14,
          "notes": "Always drops: 5 + rand.nextInt(10)"
        },
        {
          "item": "Abyssal Gems",
          "imageUrl": "/textures/items/abyssGems.png",
          "chance": 1,
          "quantity": 5,
          "notes": "Always drops: 5 coins"
        },
        {
          "item": "Slime Ball",
          "imageUrl": "",
          "chance": 1,
          "quantity": 15,
          "notes": "Always drops: 15 slime balls"
        },
        {
          "item": "Toxic Terrorizer",
          "imageUrl": "/textures/items/toxicTerrorizer.png",
          "chance": 0.5,
          "quantity": 1,
          "notes": "rand.nextInt(2) == 1"
        },
        {
          "item": "Abyss Realmstone",
          "imageUrl": "/textures/items/realmstoneAbyss.png",
          "chance": 1,
          "quantity": 3,
          "notes": "Always drops: 3 realmstones"
        }
      ],
      "lootNotes": "All drops are purely random. No looting enchantment or recentlyHit conditions affect drops. EntitySlimer has rare spawn condition (rand.nextInt(5) == 2)."
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
      "entity": "EntityWebReaper",
      "weight": 20,
      "min": 0,
      "max": 1,
      "creatureType": "monster",
      "health": 150,
      "imageUrl": "/textures/mobs/webreaper.png",
      "model": "/models/abyss/web-reaper/web-reaper.gltf",
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
          "item": "Abyssal Gems",
          "imageUrl": "/textures/items/abyssGems.png",
          "chance": 0.5,
          "quantity": 1,
          "notes": "rand.nextInt(2) == 0"
        },
        {
          "item": "Web Staff",
          "imageUrl": "/textures/items/webStaff.png",
          "chance": 0.025,
          "quantity": 1,
          "notes": "rand.nextInt(40) == 23 (1/40 chance, 2.5%)"
        },
        {
          "item": "Book of Shadows",
          "imageUrl": "/textures/items/bookOfShadows.png",
          "chance": 0.05,
          "quantity": 1,
          "notes": "rand.nextInt(20) == 3 (1/20 chance, 5%)"
        },
        {
          "item": "Spirit Shower",
          "imageUrl": "/textures/items/spiritShower.png",
          "chance": 0.025,
          "quantity": 1,
          "notes": "rand.nextInt(40) == 37 (1/40 chance, 2.5%)"
        },
        {
          "item": "Abyssal Upgrade Kit",
          "imageUrl": "/textures/items/upgradeKitAbyssal.png",
          "chance": 0.0067,
          "quantity": 1,
          "notes": "rand.nextInt(150) == 22 (1/150 chance, ~0.67%)"
        }
      ],
      "lootNotes": "All drops are purely random. No looting enchantment or recentlyHit conditions affect drops."
    },
    {
      "entity": "EntityFade",
      "weight": 0,
      "min": 0,
      "max": 1,
      "creatureType": "monster",
      "health": 50,
      "imageUrl": "/textures/mobs/fade.png",
      "model": "/models/abyss/fade/fade.gltf",
      "registeredBiomes": [
        {
          "name": "Abyssal Void",
          "imageUrl": "/dimensions/biomes/abyssal-void.png"
        },
        {
          "name": "Abyssal Eyelands",
          "imageUrl": "/nvm2_data/img_data/Abyss/biomes/Abyssal_Eyelands.png"
        }
      ],
      "loot": [
        {
          "item": "Copper Coin",
          "imageUrl": "/textures/items/coinCopper.png",
          "chance": 0.5,
          "quantity": 4,
          "notes": "rand.nextInt(2) == 0"
        },
        {
          "item": "Realmstone Fragment",
          "imageUrl": "/common_images/Realmstone_Fragment_4.png",
          "chance": 0.033,
          "quantity": 1,
          "notes": "rand.nextInt(30) == 25 (~3.33%)"
        },
        {
          "item": "Fragment Banner",
          "imageUrl": "/textures/banner/fragmentBanner.png",
          "chance": 0.25,
          "quantity": 1,
          "notes": "rand.nextInt(4) == 3"
        }
      ],
      "lootNotes": "All drops are purely random. Spawns only from Fragment Temple spawners when the biome is Abyss or AbyssEye."
    },
    {
      "entity": "EntityFleshEater",
      "weight": 0,
      "min": 0,
      "max": 1,
      "creatureType": "monster",
      "health": 150,
      "imageUrl": "/textures/mobs/flesheater.png",
      "model": "/models/abyss/flesh-eater/flesh-eater.gltf",
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
          "item": "Rotten Flesh",
          "imageUrl": "/common_images/Rotten_Flesh.png",
          "chance": 1,
          "quantity": 3,
          "notes": "Always drops: 3 rotten flesh"
        },
        {
          "item": "Abyssal Gems",
          "imageUrl": "/textures/items/abyssGems.png",
          "chance": 0.5,
          "quantity": 2,
          "notes": "rand.nextBoolean()"
        },
        {
          "item": "Eye Bulb",
          "imageUrl": "/textures/items/eyeBulb.png",
          "chance": 0.25,
          "quantity": 1,
          "notes": "rand.nextInt(4) == 0"
        },
        {
          "item": "Leg-Bone Sword",
          "imageUrl": "/textures/items/swordLegBone.png",
          "chance": 0.0526,
          "quantity": 1,
          "notes": "rand.nextInt(19) == 0 (~5.26%)"
        },
        {
          "item": "Staring Eye",
          "imageUrl": "/textures/items/staringEye.png",
          "chance": 0.111,
          "quantity": 1,
          "notes": "rand.nextInt(9) == 0 (~11.1%)"
        }
      ],
      "lootNotes": "Hunter level 35 requirement (EntityHunter). Spawns exclusively via Flesh Temple spawners placed across all Abyss biomes.",
      "hunterLevelRequirement": 35
    },
    {
      "entity": "EntityJawe",
      "weight": 0,
      "min": 0,
      "max": 1,
      "creatureType": "monster",
      "health": 60,
      "imageUrl": "/textures/mobs/jawe.png",
      "model": "/models/abyss/jawe/jawe.gltf",
      "registeredBiomes": [
        {
          "name": "Abyssal Void",
          "imageUrl": "/dimensions/biomes/abyssal-void.png"
        },
        {
          "name": "Abyssal Eyelands",
          "imageUrl": "/nvm2_data/img_data/Abyss/biomes/Abyssal_Eyelands.png"
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
          "item": "Abyssal Gems",
          "imageUrl": "/textures/items/abyssGems.png",
          "chance": 0.5,
          "quantity": 2,
          "notes": "rand.nextBoolean()"
        },
        {
          "item": "Bomb Launcher",
          "imageUrl": "/textures/items/bombLauncher.png",
          "chance": 0.0083,
          "quantity": 1,
          "notes": "rand.nextInt(120) == 65 (~0.83%)"
        }
      ],
      "lootNotes": "Hunter level 14 requirement (EntityHunter). Only spawns via Jawe Hut spawners that generate in Abyss and AbyssEye biomes.",
      "hunterLevelRequirement": 14
    },
    {
      "entity": "ShiningPixon",
      "weight": 5,
      "min": 1,
      "max": 6,
      "creatureType": "monster",
      "healthMin": 19,
      "healthMax": 39,
      "imageUrl": "/common_images/Shining_Pixon.png",
      "model": "/models/abyss/npc-shining-pixon/npc-shining-pixon.gltf",
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
          "item": "Shining Infusion Stone",
          "itemId": "Itemizer.iStoneShining",
          "quantity": 1,
          "chance": 1,
          "imageUrl": "/textures/items/blueprintInfusionAltar.png",
          "itemName": "Shining Infusion Stone"
        }
      ],
      "notes": "NPC entity - does not drop loot on death, collected via interaction",
      "health": 19
    }
  ],
  "resources": [
    {
      "name": "Nightmare Flakes",
      "type": "Item de progressão",
      "usage": "Consumido em interação com Elusive para obter a Greckon Realmstone, ligando a Abyss à dimensão Greckon.",
      "imageUrl": "/textures/items/nightmareFlakes.png"
    },
    {
      "name": "Abyssal Stone",
      "type": "Bloco de construção",
      "usage": "Bloco básico de terreno da dimensão, usado principalmente em builds temáticas e decoração.",
      "imageUrl": "/dimensions/abyss_images/Abyssal_Stone.png"
    },
    {
      "name": "Abyssal Grass",
      "type": "Bloco de superfície",
      "usage": "Forma a camada superficial do terreno, ideal para recriar biomas da Abyss em outras dimensões.",
      "imageUrl": "/dimensions/abyss_images/Abyssal_Grass.png"
    },
    {
      "name": "Dimensional Fabric",
      "type": "Bloco estrutural",
      "usage": "Camada de “bedrock” de muitas dimensões de AoA, utilizado também em decoração e builds de tecnologia dimensional.",
      "imageUrl": "/dimensions/shyrelands_images/Dimensional_Fabric.png"
    }
  ],
  "npcs": [
    {
      "entity": "EntityCreationMaster",
      "weight": 1,
      "min": 0,
      "max": 1,
      "creatureType": "monster",
      "health": 250,
      "imageUrl": "/common_images/Creation_Armor.png",
      "model": "/models/abyss/npc-creation-master/npc-creation-master.gltf",
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
      "loot": [],
      "trades": [
        {
          "input": {
            "item": "Lunaver Coin",
            "itemId": "Itemizer.LunaverCoin",
            "quantity": 1,
            "metadata": 1,
            "imageUrl": "/textures/items/coinLunaver.png"
          },
          "output": {
            "item": "Creation Boots",
            "itemId": "Armorizer.CreationBoots",
            "quantity": 1,
            "imageUrl": "/textures/items/bootsCreation.png"
          }
        },
        {
          "input": {
            "item": "Lunaver Coin",
            "itemId": "Itemizer.LunaverCoin",
            "quantity": 1,
            "metadata": 1,
            "imageUrl": "/textures/items/coinLunaver.png"
          },
          "output": {
            "item": "Creation Leggings",
            "itemId": "Armorizer.CreationLeggings",
            "quantity": 1,
            "imageUrl": "/dimensions/common_images/Creation_Leggings.png"
          }
        },
        {
          "input": {
            "item": "Lunaver Coin",
            "itemId": "Itemizer.LunaverCoin",
            "quantity": 1,
            "metadata": 1,
            "imageUrl": "/textures/items/coinLunaver.png"
          },
          "output": {
            "item": "Creation Chestplate",
            "itemId": "Armorizer.CreationChestplate",
            "quantity": 1,
            "imageUrl": "/textures/items/chestplateCreation.png"
          }
        },
        {
          "input": {
            "item": "Lunaver Coin",
            "itemId": "Itemizer.LunaverCoin",
            "quantity": 1,
            "metadata": 1,
            "imageUrl": "/textures/items/coinLunaver.png"
          },
          "output": {
            "item": "Creation Helmet",
            "itemId": "Armorizer.CreationHelmet",
            "quantity": 1,
            "imageUrl": "/textures/items/helmetCreation.png"
          }
        }
      ],
      "notes": "NPC villager - does not drop loot on death, trades Creation armor set for LunaverCoin",
      "displayName": "CreationMaster"
    },
    {
      "entity": "EntityInnervationMaster",
      "weight": 1,
      "min": 0,
      "max": 1,
      "creatureType": "monster",
      "health": 250,
      "imageUrl": "/common_images/Innervation_Armor.png",
      "model": "/models/abyss/npc-innervation-master/npc-innervation-master.gltf",
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
      "loot": [],
      "trades": [
        {
          "input": {
            "item": "Lunaver Coin",
            "itemId": "Itemizer.LunaverCoin",
            "quantity": 1,
            "metadata": 1,
            "imageUrl": "/textures/items/coinLunaver.png"
          },
          "output": {
            "item": "Innervation Boots",
            "itemId": "Armorizer.InnervationBoots",
            "quantity": 1,
            "imageUrl": "/textures/items/bootsInnervation.png"
          }
        },
        {
          "input": {
            "item": "Lunaver Coin",
            "itemId": "Itemizer.LunaverCoin",
            "quantity": 1,
            "metadata": 1,
            "imageUrl": "/textures/items/coinLunaver.png"
          },
          "output": {
            "item": "Innervation Leggings",
            "itemId": "Armorizer.InnervationLeggings",
            "quantity": 1,
            "imageUrl": "/dimensions/common_images/Innervation_Leggings.png"
          }
        },
        {
          "input": {
            "item": "Lunaver Coin",
            "itemId": "Itemizer.LunaverCoin",
            "quantity": 1,
            "metadata": 1,
            "imageUrl": "/textures/items/coinLunaver.png"
          },
          "output": {
            "item": "Innervation Chestplate",
            "itemId": "Armorizer.InnervationChestplate",
            "quantity": 1,
            "imageUrl": "/textures/items/chestplateInnervation.png"
          }
        },
        {
          "input": {
            "item": "Lunaver Coin",
            "itemId": "Itemizer.LunaverCoin",
            "quantity": 1,
            "metadata": 1,
            "imageUrl": "/textures/items/coinLunaver.png"
          },
          "output": {
            "item": "Innervation Helmet",
            "itemId": "Armorizer.InnervationHelmet",
            "quantity": 1,
            "imageUrl": "/textures/items/helmetInnervation.png"
          }
        }
      ],
      "notes": "NPC villager - does not drop loot on death, trades Innervation armor set for LunaverCoin",
      "displayName": "InnervationMaster"
    },
    {
      "entity": "EntityVulcanismMaster",
      "weight": 1,
      "min": 0,
      "max": 1,
      "creatureType": "monster",
      "health": 250,
      "imageUrl": "/common_images/VulcanismMaster.png",
      "model": "/models/abyss/npc-vulcanism-master/npc-vulcanism-master.gltf",
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
      "loot": [],
      "trades": [
        {
          "input": {
            "item": "Lunaver Coin",
            "itemId": "Itemizer.LunaverCoin",
            "quantity": 1,
            "metadata": 1,
            "imageUrl": "/textures/items/coinLunaver.png"
          },
          "output": {
            "item": "Vulcanism Boots",
            "itemId": "Armorizer.VulcanismBoots",
            "quantity": 1,
            "imageUrl": "/textures/items/bootsVulcanism.png"
          }
        },
        {
          "input": {
            "item": "Lunaver Coin",
            "itemId": "Itemizer.LunaverCoin",
            "quantity": 1,
            "metadata": 1,
            "imageUrl": "/textures/items/coinLunaver.png"
          },
          "output": {
            "item": "Vulcanism Leggings",
            "itemId": "Armorizer.VulcanismLeggings",
            "quantity": 1,
            "imageUrl": "/dimensions/common_images/Vulcanism_Leggings.png"
          }
        },
        {
          "input": {
            "item": "Lunaver Coin",
            "itemId": "Itemizer.LunaverCoin",
            "quantity": 1,
            "metadata": 1,
            "imageUrl": "/textures/items/coinLunaver.png"
          },
          "output": {
            "item": "Vulcanism Chestplate",
            "itemId": "Armorizer.VulcanismChestplate",
            "quantity": 1,
            "imageUrl": "/textures/items/chestplateVulcanism.png"
          }
        },
        {
          "input": {
            "item": "Lunaver Coin",
            "itemId": "Itemizer.LunaverCoin",
            "quantity": 1,
            "metadata": 1,
            "imageUrl": "/textures/items/coinLunaver.png"
          },
          "output": {
            "item": "Vulcanism Helmet",
            "itemId": "Armorizer.VulcanismHelmet",
            "quantity": 1,
            "imageUrl": "/textures/items/helmetVulcanism.png"
          }
        }
      ],
      "notes": "NPC villager - does not drop loot on death, trades Vulcanism armor set for LunaverCoin. Spawns with 1/3 chance (rand.nextInt(3) == 2)",
      "displayName": "VulcanismMaster"
    },
    {
      "entity": "EntityButcheryMaster",
      "weight": 1,
      "min": 0,
      "max": 1,
      "creatureType": "monster",
      "health": 250,
      "imageUrl": "/common_images/Butchery_Armor.png",
      "model": "/models/abyss/npc-butchery-master/npc-butchery-master.gltf",
      "registeredBiomes": [
        {
          "name": "Abyssal Void",
          "imageUrl": "/dimensions/biomes/abyssal-void.png"
        }
      ],
      "loot": [],
      "trades": [
        {
          "input": {
            "item": "Lunaver Coin",
            "itemId": "Itemizer.LunaverCoin",
            "quantity": 1,
            "metadata": 1,
            "imageUrl": "/textures/items/coinLunaver.png"
          },
          "output": {
            "item": "Butchery Boots",
            "itemId": "Armorizer.ButcheryBoots",
            "quantity": 1,
            "imageUrl": "/textures/items/bootsButchery.png"
          }
        },
        {
          "input": {
            "item": "Lunaver Coin",
            "itemId": "Itemizer.LunaverCoin",
            "quantity": 1,
            "metadata": 1,
            "imageUrl": "/textures/items/coinLunaver.png"
          },
          "output": {
            "item": "Butchery Leggings",
            "itemId": "Armorizer.ButcheryLeggings",
            "quantity": 1,
            "imageUrl": "/dimensions/common_images/Butchery_Leggings.png"
          }
        },
        {
          "input": {
            "item": "Lunaver Coin",
            "itemId": "Itemizer.LunaverCoin",
            "quantity": 1,
            "metadata": 1,
            "imageUrl": "/textures/items/coinLunaver.png"
          },
          "output": {
            "item": "Butchery Chestplate",
            "itemId": "Armorizer.ButcheryChestplate",
            "quantity": 1,
            "imageUrl": "/textures/items/chestplateButchery.png"
          }
        },
        {
          "input": {
            "item": "Lunaver Coin",
            "itemId": "Itemizer.LunaverCoin",
            "quantity": 1,
            "metadata": 1,
            "imageUrl": "/textures/items/coinLunaver.png"
          },
          "output": {
            "item": "Butchery Helmet",
            "itemId": "Armorizer.ButcheryHelmet",
            "quantity": 1,
            "imageUrl": "/textures/items/helmetButchery.png"
          }
        }
      ],
      "notes": "NPC villager - does not drop loot on death, trades Butchery armor set for LunaverCoin. Spawns with 1/3 chance (rand.nextInt(3) == 2)",
      "displayName": "ButcheryMaster"
    },
    {
      "entity": "EntityLottomanAbyss",
      "weight": 0,
      "min": 0,
      "max": 1,
      "creatureType": "monster",
      "health": 250,
      "imageUrl": "/textures/mobs/lottomanAbyss.png",
      "model": "/models/common/npc-lottoman-abyss/npc-lottoman-abyss.gltf",
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
      "loot": [],
      "trades": [
        {
          "input": {
            "item": "Abyssal Gems",
            "itemId": "Itemizer.CoinsAbyss",
            "quantity": 10,
            "metadata": 1
          },
          "output": {
            "item": "Bloodfury Totem",
            "itemId": "Totemizer.TotemBloodfury",
            "quantity": 1,
            "imageUrl": "/textures/items/totemBloodfury.png"
          }
        },
        {
          "input": {
            "item": "Abyssal Gems",
            "itemId": "Itemizer.CoinsAbyss",
            "quantity": 10,
            "metadata": 1
          },
          "output": {
            "item": "Soulfire Bow Totem",
            "itemId": "Totemizer.TotemSoulfireBow",
            "quantity": 1,
            "imageUrl": "/textures/items/totemSoulfireBow.png"
          }
        },
        {
          "input": {
            "item": "Abyssal Gems",
            "itemId": "Itemizer.CoinsAbyss",
            "quantity": 40,
            "metadata": 1
          },
          "output": {
            "item": "Bloodfury Totem",
            "itemId": "Totemizer.TotemBloodfury",
            "quantity": 10,
            "imageUrl": "/textures/items/totemBloodfury.png"
          },
          "additionalInput": {
            "item": "Abyssal Gems",
            "itemId": "Itemizer.CoinsAbyss",
            "quantity": 35
          }
        },
        {
          "input": {
            "item": "Abyssal Gems",
            "itemId": "Itemizer.CoinsAbyss",
            "quantity": 40,
            "metadata": 1
          },
          "output": {
            "item": "Soulfire Bow Totem",
            "itemId": "Totemizer.TotemSoulfireBow",
            "quantity": 10,
            "imageUrl": "/textures/items/totemSoulfireBow.png"
          },
          "additionalInput": {
            "item": "Abyssal Gems",
            "itemId": "Itemizer.CoinsAbyss",
            "quantity": 35
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
      "notes": "NPC villager - appears only inside Abyss lotto huts (ChunkProviderAbyss) and trades totems or Magic Repair Dust for Abyss coins or Gold Coins.",
      "displayName": "LottomanAbyss"
    }
  ],
  "generatedStructures": [
    {
      "className": "IllusionTree",
      "name": "Illusion Tree",
      "context": "StructureGenRare #9",
      "chance": {
        "description": "1 em 600",
        "formula": "random.nextInt(600) == 335",
        "denominator": 600,
        "comparator": "==",
        "value": 335
      },
      "biome": null,
      "imageUrl": "/dimensions/common_images/Illusion_Tree_Inside.png"
    },
    {
      "className": "FleshTemple",
      "name": "Flesh Temple",
      "context": "StructureGenRare #8",
      "chance": {
        "description": "1 em 520",
        "formula": "random.nextInt(520) == 325",
        "denominator": 520,
        "comparator": "==",
        "value": 325
      },
      "biome": null,
      "imageUrl": "/dimensions/common_images/Flesh_Temple_Inside.png"
    }
  ],
  "bosses": [
    {
      "name": "Elusive",
      "howToSpawn": "Invocado em uma estrutura especial da Abyss (arena/árvore de ilusão), normalmente utilizando um item de invocação específico em um bloco ou altar da dimensão.",
      "notes": "Derrotar Elusive é parte da progressão para Greckon, pois o boss está ligado ao uso de Nightmare Flakes para obtenção da Greckon Realmstone.",
      "imageUrl": "/dimensions/abyss_images/Abyssal_Lotto_Hut.png",
      "spawnItems": [
        {
          "itemId": "Itemizer.StaringEye",
          "item": "Staring Eye",
          "usage": "Clique no Illusion Altar dentro da Illusion Tree segurando o Staring Eye para invocar o boss.",
          "imageUrl": "/textures/items/staringEye.png"
        }
      ],
      "entities": [
        {
          "entity": "EntityElusive",
          "displayName": "Elusive",
          "imageUrl": "/textures/mobs/elusive.png",
          "model": "/models/boss/elusive/elusive/elusive.gltf",
          "health": 2000
        }
      ],
      "loot": [
        {
          "item": "Mind Blaster",
          "itemId": "Weaponizer.MindBlaster",
          "minQuantity": 1,
          "maxQuantity": 1,
          "chance": 1,
          "sourceEntities": [
            "EntityElusive"
          ],
          "imageUrl": "/textures/items/mindBlaster.png"
        },
        {
          "item": "Illusion Sword",
          "itemId": "Weaponizer.IllusionSword",
          "minQuantity": 1,
          "maxQuantity": 1,
          "chance": 1,
          "sourceEntities": [
            "EntityElusive"
          ],
          "imageUrl": "/dimensions/common_images/Illusion_Sword.png"
        },
        {
          "item": "Illusion SMG",
          "itemId": "Weaponizer.IllusionSMG",
          "minQuantity": 1,
          "maxQuantity": 1,
          "chance": 1,
          "sourceEntities": [
            "EntityElusive"
          ],
          "imageUrl": "/textures/items/illusionSMG.png"
        },
        {
          "item": "Illusion Revolver",
          "itemId": "Weaponizer.IllusionRevolver",
          "minQuantity": 1,
          "maxQuantity": 1,
          "chance": 1,
          "sourceEntities": [
            "EntityElusive"
          ],
          "imageUrl": "/textures/items/illusionRevolver.png"
        }
      ]
    },
    {
      "name": "Shadowlord",
      "howToSpawn": "Invocado em uma plataforma específica da Abyss, usando o totem ou artefato relacionado ao boss.",
      "notes": "Shadowlord está diretamente associado à tarefa para desbloquear Dustopia, sendo um passo importante na rota de dimensões sombrias.",
      "imageUrl": "/dimensions/abyss_images/Shadowlord.png",
      "spawnItems": [
        {
          "itemId": "Itemizer.BookOfShadows",
          "item": "Book of Shadows",
          "usage": "Use o Book of Shadows no Shadow Altar das plataformas suspensas da Abyss.",
          "imageUrl": "/textures/items/bookOfShadows.png"
        }
      ],
      "entities": [
        {
          "entity": "EntityShadowlord",
          "displayName": "Shadowlord",
          "imageUrl": "/textures/mobs/shadowlord.png",
          "model": "/models/boss/shadowlord/shadowlord/shadowlord.gltf",
          "health": 2000
        }
      ],
      "loot": [
        {
          "item": "Shadow Sword",
          "itemId": "Weaponizer.ShadowSword",
          "minQuantity": 1,
          "maxQuantity": 1,
          "chance": 1,
          "sourceEntities": [
            "EntityShadowlord"
          ],
          "imageUrl": "/dimensions/abyss_images/Shadow_Sword.png"
        },
        {
          "item": "Shadow Blaster",
          "itemId": "Weaponizer.ShadowBlaster",
          "minQuantity": 1,
          "maxQuantity": 1,
          "chance": 1,
          "sourceEntities": [
            "EntityShadowlord"
          ],
          "imageUrl": "/textures/items/shadowBlaster.png"
        },
        {
          "item": "Big Blast",
          "itemId": "Weaponizer.BigBlast",
          "minQuantity": 1,
          "maxQuantity": 1,
          "chance": 1,
          "sourceEntities": [
            "EntityShadowlord"
          ],
          "imageUrl": "/textures/items/bigBlast.png"
        },
        {
          "item": "Shadowlord Staff",
          "itemId": "Weaponizer.ShadowlordStaff",
          "minQuantity": 1,
          "maxQuantity": 1,
          "chance": 1,
          "sourceEntities": [
            "EntityShadowlord"
          ],
          "imageUrl": "/textures/items/shadowlordStaff.png"
        },
        {
          "item": "Grenade",
          "itemId": "Weaponizer.Grenade",
          "minQuantity": 200,
          "maxQuantity": 200,
          "chance": 1,
          "sourceEntities": [
            "EntityShadowlord"
          ],
          "imageUrl": "/dimensions/dustopia_images/Grenade.png"
        },
        {
          "item": "Cannon Ball",
          "itemId": "Itemizer.CannonBall",
          "minQuantity": 50,
          "maxQuantity": 50,
          "chance": 1,
          "sourceEntities": [
            "EntityShadowlord"
          ],
          "imageUrl": "/textures/items/cannonBall.png"
        }
      ]
    }
  ],
  "biomes": [
    {
      "name": "Abyssal Void",
      "id": 74,
      "imageUrl": "/nvm2_data/img_data/Abyss/biomes/The_Abyss.png"
    },
    {
      "name": "Abyssal Eyelands",
      "id": 101,
      "imageUrl": "/nvm2_data/img_data/Abyss/biomes/Abyssal_Eyelands.png"
    },
    {
      "name": "Abyssal Shadow Forest",
      "id": 100,
      "imageUrl": "/nvm2_data/img_data/Abyss/biomes/Abyssal_Shadow_Forest.png"
    }
  ],
  "structures": [
    {
      "name": "Abyss Fragment Temple",
      "imageUrl": "/nvm2_data/img_data/Abyss/structures/Abyss_Fragment_Temple.png"
    },
    {
      "name": "Flesh Temple",
      "imageUrl": "/nvm2_data/img_data/Abyss/structures/Flesh_Temple.png"
    },
    {
      "name": "Illusion Tree",
      "imageUrl": "/nvm2_data/img_data/Abyss/structures/Illusion_Tree.png"
    },
    {
      "name": "Shadowlord Platform",
      "imageUrl": "/nvm2_data/img_data/Abyss/structures/Shadowlord_Platform.png"
    },
    {
      "name": "Jawe Hut",
      "imageUrl": "/nvm2_data/img_data/Abyss/structures/Jawe_Hut.png"
    }
  ]
};
