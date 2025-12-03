export const Haven = {
  id: "the_haven",
  name: "The Haven",
  tier: 2,
  prerequisiteDimension: "Lelyetia",
  theme:
    "Ilhas flutuantes celestes sobre o vazio, com visual de céu e libertação dimensional.",
  shortDescription:
    "Uma dimensão de ilhas que flutuam no céu, compostas de Weightless Stone e cercadas pelo vazio, com foco em exploração aérea, mobilidade e paisagens elevadas. ",
  realmstone: {
    obtainHint:
      "Derrote um Flye com ataque corpo-a-corpo em Y ≥ 120 enquanto carrega um Blank Realmstone em Lelyetia. ",
    obtainDetails:
      "Na dimensão Lelyetia, suba até uma altura Y ≥ 120, com um Blank Realmstone no inventário, e mate o mob Flye usando dano corpo a corpo. O Blank se transforma na Haven Realmstone, que então deve ser usado no portal. ",
    imageUrl: "/dimensions/haven_images/Haven_Realmstone.png",
  },
  imageUrl: "/dimensions/haven_images/The_Haven.png",
  wikiUrl: "https://adventofascension.fandom.com/wiki/The_Haven",
  mainObjectives: [
    {
      id: "unlock_haven",
      title: "Desbloquear The Haven",
      description:
        "Obtenha a Haven Realmstone em Lelyetia (altura ≥ 120 + Flye + Blank Realmstone) e ative o portal para entrar em The Haven.",
      imageUrl: "/dimensions/haven_images/Haven_Realmstone.png",
    },
    {
      id: "explore_floating_islands",
      title: "Explorar ilhas flutuantes",
      description:
        "Percorrer as ilhas de Weightless Stone, conectá-las por pontes ou rotas de voo, descobrir estruturas como Floating Lotto Fountain e Guardian Tower. ",
      imageUrl: "/dimensions/haven_images/Floating_Lotto_Fountain.png",
    },
    {
      id: "mine_crystallite_ore",
      title: "Minerar Crystallite Ore",
      description:
        "Coletar veios de Crystallite Ore que se geram em hetro-camadas dentro das ilhas de The Haven para equipamentos e progressão. ",
      imageUrl: "/dimensions/crystevia_images/Crystallite_Ore.png",
    },
  ],
  secondaryObjectives: [
    {
      id: "use_lotto_fountains",
      title: "Usar Lotto Fountains",
      description:
        "Visitar as estruturas Floating Lotto Fountain com o NPC Twinkling Lottoman para loterias específicas do universo de The Haven. ",
      imageUrl: "/dimensions/haven_images/Twinkling_Lottoman.png",
    },
    {
      id: "build_sky_base",
      title: "Construir base nas alturas",
      description:
        "Usar blocos como Weightless Stone, Weightless Dirt e Weightless Grass para criar bases suportadas no vazio ou flutuantes — aproveitando a estética de ilha no céu.",
      imageUrl: "/dimensions/haven_images/Weightless_Grass.png",
    },
  ],
  progressionNotes: [
    {
      id: "connection_to_lunalus",
      title: "Porta para Lunalus",
      description:
        "The Haven funciona como transição para a dimensão Lunalus, usando itens coletados aqui para abrir novos mundos. ",
      imageUrl: "/dimensions/haven_images/Haven_Portal.gif",
    },
    {
      id: "floating_mobility_challenge",
      title: "Desafio de mobilidade flutuante",
      description:
        "Explorar The Haven exige dominar vôo, saltos entre ilhas e o uso de itens para evitar a queda no vazio — parte integrante da progressão temática.",
    },
  ],
  versionNotes:
    "Dados baseados na wiki oficial; em versões antigas como Tslat 1.1.3 podem haver diferenças na geração ou loot, mas a tarefa de acesso (Flye em Y≥120 em Lelyetia) e tema de ilhas flutuantes estão corretos. ",
  mobs: [
    {
      entity: "EntityAngelica",
      imageUrl: "/textures/mobs/angelica.png",
      model: "/models/haven/angelica/angelica.gltf",
      health: 20,
      weight: 15,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Haven",
          imageUrl: "/dimensions/biomes/haven.png",
        },
      ],
      loot: [
        {
          item: "Haven Gems",
          itemId: "Itemizer.CoinsHaven",
          quantity: 1,
          chance: 0.5,
          imageUrl: "/textures/items/havenGems.png",
          itemName: "Haven Gems",
        },
        {
          item: "Gravitator",
          itemId: "Weaponizer.Gravitator",
          quantity: 1,
          chance: 0.016666666666666666,
          imageUrl: "/textures/items/gravitator.png",
          itemName: "Gravitator",
        },
      ],
    },
    {
      entity: "EntityAutomaton",
      imageUrl: "/textures/mobs/automaton.png",
      model: "/models/haven/automaton/automaton.gltf",
      health: 80,
      weight: 20,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Abyssal Eyelands",
          imageUrl: "/nvm2_data/img_data/Abyss/biomes/Abyssal_Eyelands.png",
        },
        {
          name: "Abyssal Shadow Forest",
          imageUrl:
            "/nvm2_data/img_data/Abyss/biomes/Abyssal_Shadow_Forest.png",
        },
        {
          name: "Abyssal Void",
          imageUrl: "/dimensions/biomes/abyssal-void.png",
        },
        {
          name: "Haven",
          imageUrl: "/dimensions/biomes/haven.png",
        },
      ],
      loot: [
        {
          item: "Ancient Cavern Realmstone",
          itemId: "Itemizer.RealmstoneAncientCavern",
          quantity: 2,
          chance: 0.025,
          imageUrl: "/textures/items/realmstoneAncientCavern.png",
          itemName: "Ancient Cavern Realmstone",
        },
        {
          item: "Germinator",
          itemId: "Weaponizer.Germinator",
          quantity: 1,
          chance: 0.02,
          imageUrl: "/textures/items/germinator.png",
          itemName: "Germinator",
        },
        {
          item: "Dragilator",
          itemId: "Weaponizer.Dragilator",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/dragilator.png",
          itemName: "Dragilator",
        },
        {
          item: "Krilinator",
          itemId: "Weaponizer.Krilinator",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/krilinator.png",
          itemName: "Krilinator",
        },
        {
          item: "Frosticator",
          itemId: "Weaponizer.Frosticator",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/frosticator.png",
          itemName: "Frosticator",
        },
        {
          item: "Electinator",
          itemId: "Weaponizer.Electinator",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/electinator.png",
          itemName: "Electinator",
        },
      ],
    },
    {
      entity: "EntityDawnlight",
      imageUrl: "/textures/mobs/dawnlight.png",
      model: "/models/haven/dawnlight/dawnlight.gltf",
      health: 40,
      weight: 20,
      min: 1,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Haven",
          imageUrl: "/dimensions/biomes/haven.png",
        },
      ],
      loot: [
        {
          item: "Bubble Horn",
          itemId: "Weaponizer.BubbleHorn",
          quantity: 1,
          chance: 0.02857142857142857,
          imageUrl: "/textures/items/bubbleHorn.png",
          itemName: "Bubble Horn",
        },
      ],
    },
    {
      entity: "EntityHalycon",
      imageUrl: "/textures/mobs/halycon.png",
      model: "/models/haven/halycon/halycon.gltf",
      health: 20,
      weight: 5,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Haven",
          imageUrl: "/dimensions/biomes/haven.png",
        },
      ],
      loot: [
        {
          item: "Halycon Beef",
          itemId: "Itemizer.HalyconBeef",
          quantity: 2,
          chance: 0.06666666666666667,
          imageUrl: "/textures/items/halyconBeefRaw.png",
          itemName: "Halycon Beef",
        },
        {
          item: "Raw Halycon Beef",
          itemId: "Itemizer.HalyconBeefRaw",
          quantity: 2,
          chance: 1,
          imageUrl: "/textures/items/halyconBeefRaw.png",
          itemName: "Raw Halycon Beef",
        },
      ],
    },
    {
      entity: "EntityOrbiter",
      imageUrl: "/textures/mobs/orbiter.png",
      model: "/models/haven/orbiter/orbiter.gltf",
      health: 15,
      weight: 15,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Haven",
          imageUrl: "/dimensions/biomes/haven.png",
        },
      ],
      loot: [
        {
          item: "Haven Gems",
          itemId: "Itemizer.CoinsHaven",
          quantity: 1,
          chance: 0.5,
          imageUrl: "/textures/items/havenGems.png",
          itemName: "Haven Gems",
        },
      ],
    },
    {
      entity: "EntityRainicorn",
      imageUrl: "/textures/mobs/rainicorn.png",
      model: "/models/haven/rainicorn/rainicorn.gltf",
      health: 60,
      weight: 2,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Haven",
          imageUrl: "/dimensions/biomes/haven.png",
        },
      ],
      loot: [
        {
          item: "Haven Gems",
          itemId: "Itemizer.CoinsHaven",
          quantity: 1,
          chance: 0.5,
          imageUrl: "/textures/items/havenGems.png",
          itemName: "Haven Gems",
        },
        {
          item: "Light Upgrade Kit",
          itemId: "Itemizer.UpgradeKitLight",
          quantity: 1,
          chance: 0.01,
          imageUrl: "/textures/items/upgradeKitLight.png",
          itemName: "Light Upgrade Kit",
        },
        {
          item: "Color Cannon",
          itemId: "Weaponizer.ColorCannon",
          quantity: 1,
          chance: 0.025,
          imageUrl: "/textures/items/colourCannon.png",
          itemName: "Color Cannon",
        },
      ],
    },
    {
      entity: "EntitySceptron",
      imageUrl: "/textures/mobs/sceptron.png",
      model: "/models/haven/sceptron/sceptron.gltf",
      health: 65,
      weight: 20,
      min: 1,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Haven",
          imageUrl: "/dimensions/biomes/haven.png",
        },
      ],
      loot: [
        {
          item: "Copper Coin",
          itemId: "Itemizer.CopperCoin",
          quantity: 4,
          chance: 0.5,
          imageUrl: "/textures/items/coinCopper.png",
          itemName: "Copper Coin",
        },
        {
          item: "Realmstone Fragment",
          itemId: "Itemizer.RealmstoneFragment3",
          quantity: 1,
          chance: 0.03333333333333333,
          imageUrl: "/textures/items/realmstoneFragmentM.png",
          itemName: "Realmstone Fragment",
        },
      ],
    },
    {
      entity: "EntitySeeker",
      imageUrl: "/textures/mobs/seeker.png",
      model: "/models/haven/seeker/seeker.gltf",
      health: 40,
      weight: 15,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Haven",
          imageUrl: "/dimensions/biomes/haven.png",
        },
      ],
      loot: [
        {
          item: "Haven Gems",
          itemId: "Itemizer.CoinsHaven",
          quantity: 1,
          chance: 0.5,
          imageUrl: "/textures/items/havenGems.png",
          itemName: "Haven Gems",
        },
        {
          item: "Lelyetia Realmstone",
          itemId: "Itemizer.RealmstoneLelyetia",
          quantity: 3,
          chance: 0.03333333333333333,
          imageUrl: "/textures/items/realmstoneLelyetia.png",
          itemName: "Lelyetia Realmstone",
        },
        {
          item: "Vortex Blaster",
          itemId: "Weaponizer.VortexBlaster",
          quantity: 1,
          chance: 0.011764705882352941,
          imageUrl: "/textures/items/vortexBlaster.png",
          itemName: "Vortex Blaster",
        },
      ],
    },
    {
      entity: "EntitySurveyor",
      imageUrl: "/textures/mobs/surveyor.png",
      model: "/models/haven/surveyor/surveyor.gltf",
      health: 20,
      weight: 5,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Haven",
          imageUrl: "/dimensions/biomes/haven.png",
        },
      ],
      loot: [
        {
          item: "Haven Gems",
          itemId: "Itemizer.CoinsHaven",
          quantity: 1,
          chance: 0.5,
          imageUrl: "/textures/items/havenGems.png",
          itemName: "Haven Gems",
        },
        {
          item: "Lelyetia Realmstone",
          itemId: "Itemizer.RealmstoneLelyetia",
          quantity: 3,
          chance: 0.03333333333333333,
          imageUrl: "/textures/items/realmstoneLelyetia.png",
          itemName: "Lelyetia Realmstone",
        },
        {
          item: "Light Upgrade Kit",
          itemId: "Itemizer.UpgradeKitLight",
          quantity: 1,
          chance: 0.01,
          imageUrl: "/textures/items/upgradeKitLight.png",
          itemName: "Light Upgrade Kit",
        },
        {
          item: "Minigun",
          itemId: "Weaponizer.Minigun",
          quantity: 1,
          chance: 0.014285714285714285,
          imageUrl: "/textures/items/minigun.png",
          itemName: "Minigun",
        },
      ],
    },
    {
      entity: "EntityVolar",
      imageUrl: "/textures/mobs/volar.png",
      model: "/models/haven/volar/volar.gltf",
      health: 20,
      weight: 3,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Haven",
          imageUrl: "/dimensions/biomes/haven.png",
        },
      ],
      loot: [
        {
          item: "Haven Gems",
          itemId: "Itemizer.CoinsHaven",
          quantity: 1,
          chance: 0.5,
          imageUrl: "/textures/items/havenGems.png",
          itemName: "Haven Gems",
        },
      ],
    },
    {
      entity: "EntityVoliant",
      imageUrl: "/textures/mobs/voliant.png",
      model: "/models/haven/voliant/voliant.gltf",
      health: 140,
      weight: 1,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Haven",
          imageUrl: "/dimensions/biomes/haven.png",
        },
      ],
      loot: [
        {
          item: "Haven Gems",
          itemId: "Itemizer.CoinsHaven",
          quantity: 5,
          chance: 1,
          imageUrl: "/textures/items/havenGems.png",
          itemName: "Haven Gems",
        },
        {
          item: "Voliant Heart",
          itemId: "Itemizer.VoliantHeart",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/voliantHeart.png",
          itemName: "Voliant Heart",
        },
        {
          item: "RPG",
          itemId: "Weaponizer.RPG",
          quantity: 1,
          chance: 0.5,
          imageUrl: "/textures/items/rpg.png",
          itemName: "RPG",
        },
        {
          item: "Haven Realmstone",
          itemId: "Itemizer.RealmstoneHaven",
          quantity: 3,
          chance: 1,
          imageUrl: "/textures/items/realmstoneHaven.png",
          itemName: "Haven Realmstone",
        },
      ],
    },
  ],
  npcs: [],
  generatedOres: [
    {
      field: "Blockizer.oreCrystallite",
      displayName: "Crystallite Ore",
      imageUrl: "/ores/crystallite_ore.png",
      height: {
        min: 30,
        max: 69,
      },
    },
  ],
  generatedStructures: [
    {
      className: "HavenTower",
      name: "Haven Tower",
      context: "StructureGenRare #1",
      chance: {
        description: "1 em 35",
        formula: "randomNum == 7 (random.nextInt(35) + 1)",
        denominator: 35,
        comparator: "==",
        value: 7,
      },
      biome: null,
      imageUrl: "",
    },
    {
      className: "RockriderSpawn",
      name: "Rockrider Spawn",
      context: "StructureGenRare #2",
      chance: {
        description: "1 em 35",
        formula: "randomNum == 14 (random.nextInt(35) + 1)",
        denominator: 35,
        comparator: "==",
        value: 14,
      },
      biome: null,
      imageUrl: "",
    },
  ],
  resources: [
    {
      name: "Weightless Grass",
      type: "Bloco de construção",
      usage:
        "Topo base das ilhas flutuantes, ideal para builds de céu ou preparação para saltos no vazio.",
      imageUrl:
        "/dimensions/haven_images/Weightless_Grass.png",
    },
  ],
  bosses: [
    {
      name: "Four Guardians",
      howToSpawn:
        "Usar um Voliant Heart no Guardian Altar no topo de uma Guardian Tower para invocar os Four Guardians.",
      notes:
        "Conjunto de quatro guardiões enfrentados em arena aérea; conclusão garante loot de alto nível e marca a progressão da dimensão.",
      imageUrl: "/dimensions/haven_images/Four_Guardians.png",
      spawnItems: [
        {
          itemId: "Itemizer.VoliantHeart",
          item: "Voliant Heart",
          usage:
            "Ofereça um Voliant Heart ao Guardian Altar no topo das Guardian Towers.",
          imageUrl: "/textures/items/voliantHeart.png",
        },
      ],
      entities: [
        {
          entity: "EntityGuardianBlue",
          displayName: "GuardianBlue",
          imageUrl: "/textures/mobs/guardianblue.png",
          model: "/models/boss/fourguardians/guardian-blue/guardian-blue.gltf",
          health: 750,
        },
        {
          entity: "EntityGuardianGreen",
          displayName: "GuardianGreen",
          imageUrl: "/textures/mobs/guardiangreen.png",
          model:
            "/models/boss/fourguardians/guardian-green/guardian-green.gltf",
          health: 750,
        },
        {
          entity: "EntityGuardianRed",
          displayName: "GuardianRed",
          imageUrl: "/textures/mobs/guardianred.png",
          model: "/models/boss/fourguardians/guardian-red/guardian-red.gltf",
          health: 750,
        },
        {
          entity: "EntityGuardianYellow",
          displayName: "GuardianYellow",
          imageUrl: "/textures/mobs/guardianyellow.png",
          model:
            "/models/boss/fourguardians/guardian-yellow/guardian-yellow.gltf",
          health: 750,
        },
      ],
      loot: [
        {
          item: "Guardian's Sword",
          itemId: "Weaponizer.GuardiansSword",
          minQuantity: 1,
          maxQuantity: 1,
          chance: 0.1111,
          sourceEntities: [
            "EntityGuardianBlue",
            "EntityGuardianGreen",
            "EntityGuardianRed",
            "EntityGuardianYellow",
          ],
          imageUrl: "/dimensions/common_images/Guardian's_Sword.png",
        },
        {
          item: "Bayonette Rifle",
          itemId: "Weaponizer.BayonetteRifle",
          minQuantity: 1,
          maxQuantity: 1,
          chance: 0.1111,
          sourceEntities: [
            "EntityGuardianBlue",
            "EntityGuardianGreen",
            "EntityGuardianRed",
            "EntityGuardianYellow",
          ],
          imageUrl: "/textures/items/bayonetteRifle.png",
        },
        {
          item: "Red Rocket",
          itemId: "Weaponizer.RedRocket",
          minQuantity: 1,
          maxQuantity: 1,
          chance: 0.1111,
          sourceEntities: [
            "EntityGuardianBlue",
            "EntityGuardianGreen",
            "EntityGuardianRed",
            "EntityGuardianYellow",
          ],
          imageUrl: "/textures/items/redRocket.png",
        },
        {
          item: "Eradicator",
          itemId: "Weaponizer.Eradicator",
          minQuantity: 1,
          maxQuantity: 1,
          chance: 0.1111,
          sourceEntities: [
            "EntityGuardianBlue",
            "EntityGuardianGreen",
            "EntityGuardianRed",
            "EntityGuardianYellow",
          ],
          imageUrl: "/textures/items/eradicator.png",
        },
      ],
    },
    {
      name: "Rockrider",
      howToSpawn:
        "Use um Heavy Boulder em um Rockrider Shrine nos Rockrider Boulders (ao ar livre) para iniciar o combate.",
      notes:
        "Chefe terrestre que alterna fases de carga e mísseis; dropa Rocker Rifle, Boulder Bomber e dá acesso a estátuas.",
      imageUrl: "/dimensions/haven_images/Rockrider.png",
      spawnItems: [
        {
          itemId: "Itemizer.HeavyBoulder",
          item: "Heavy Boulder",
          usage: "Interaja com um Rockrider Shrine segurando um Heavy Boulder.",
          imageUrl: "/textures/items/heavyBoulder.png",
        },
      ],
      entities: [
        {
          entity: "EntityRockRider",
          displayName: "RockRider",
          imageUrl: "/textures/mobs/rockrider.png",
          model: "/models/boss/rockrider/rock-rider/rock-rider.gltf",
          health: 1500,
        },
      ],
      loot: [
        {
          item: "Rock Basher Sword",
          itemId: "Weaponizer.RockBasherSword",
          minQuantity: 1,
          maxQuantity: 1,
          chance: 1,
          sourceEntities: ["EntityRockRider"],
          imageUrl: "/dimensions/common_images/Rockbasher_Sword.png",
        },
        {
          item: "Rock-Pick Sword",
          itemId: "Weaponizer.RockPickSword",
          minQuantity: 1,
          maxQuantity: 1,
          chance: 1,
          sourceEntities: ["EntityRockRider"],
          imageUrl: "/dimensions/common_images/Rock-Pick_Sword.png",
        },
        {
          item: "Jack Rocker",
          itemId: "Weaponizer.JackRocker",
          minQuantity: 1,
          maxQuantity: 1,
          chance: 1,
          sourceEntities: ["EntityRockRider"],
          imageUrl: "/textures/items/jackRocker.png",
        },
        {
          item: "Long Shot",
          itemId: "Weaponizer.LongShot",
          minQuantity: 1,
          maxQuantity: 1,
          chance: 1,
          sourceEntities: ["EntityRockRider"],
          imageUrl: "/textures/items/longShot.png",
        },
        {
          item: "Coal",
          itemId: "Items.coal",
          minQuantity: 50,
          maxQuantity: 50,
          chance: 0.5,
          sourceEntities: ["EntityRockRider"],
          imageUrl: "/dimensions/common_images/Coal.png",
        },
        {
          item: "Flint",
          itemId: "Items.flint",
          minQuantity: 50,
          maxQuantity: 50,
          chance: 0.5,
          sourceEntities: ["EntityRockRider"],
          imageUrl: "/dimensions/common_images/Flint.png",
        },
      ],
    },
  ],
  biomes: [
    {
      name: "Haven",
      id: 76,
      imageUrl: "/nvm2_data/img_data/Haven/biomes/The_Haven.png",
    },
  ],
  structures: [
    {
      name: "Guardian Tower",
      imageUrl: "/nvm2_data/img_data/Haven/structures/Guardian.png",
    },
  ],
};
