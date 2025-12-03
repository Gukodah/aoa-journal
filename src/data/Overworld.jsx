export const Overworld = {
  id: "overworld",
  name: "The Overworld",
  tier: "0",
  prerequisiteDimension: null,
  theme:
    "Dimensão inicial e viva de AoA, conectando todas as outras através de portais e com a presença constante de mobs hostis e aliados.",
  shortDescription:
    "Planetas, florestas, desertos e montanhas familiares ao Minecraft vanilla, mas povoados por caçadores, espíritos e criaturas de todas as facções de AoA.",
  imageUrl: "/vannila_biome_images/Forest.webp",
  wikiUrl: "https://adventofascension.fandom.com/wiki/Overworld",
  realmstone: {
    obtainHint:
      "Ponto de partida natural: explore o mundo inicial e colete recursos básicos.",
    obtainDetails:
      "Não há necessidade de Realmstone; basta criar um novo mundo ou retornar através de um portal quando estiver em outra dimensão.",
    imageUrl: "/dimensions/overworld_images/Spawn_Point.png",
  },
  mainObjectives: [
    {
      id: "overworld_survival",
      title: "Estabelecer uma base segura",
      description:
        "Colete madeira, pedra e metais para construir abrigo, ferramentas e portal de Advent of Ascension.",
      imageUrl: "/dimensions/overworld_images/Overworld_Base.png",
    },
    {
      id: "overworld_hunter",
      title: "Avançar habilidades de Hunter",
      description:
        "Derrote os caçadores específicos de cada bioma para subir Hunter rapidamente antes de viajar.",
      imageUrl: "/dimensions/overworld_images/Hunter_Camp.png",
    },
    {
      id: "find_structures",
      title: "Mapear estruturas únicas",
      description:
        "Torre dos Naturalistas, arenas das facções e casas de NPCs aparecem em vários biomas e concedem missões e trocas.",
      imageUrl: "/dimensions/overworld_images/Naturalist_Tower.png",
    },
  ],
  secondaryObjectives: [
    {
      id: "collect_advancement_items",
      title: "Coletar itens chave de progressão",
      description:
        "Realmshifter, runas elementais, cristais e drops de chefes menores surgem apenas no Overworld.",
      imageUrl: "/common_images/Realmshifter.png",
    },
    {
      id: "support_skills",
      title: "Evoluir skills de suporte",
      description:
        "Forrageie, pesque e mine materiais básicos para subir Foraging, Extraction e os demais skills.",
      imageUrl: "/dimensions/overworld_images/Skill_Grind.png",
    },
  ],
  progressionNotes: [
    {
      id: "overworld_progression_1",
      title: "Centro da progressão",
      description:
        "Todas as facções de AoA têm representantes ou invasores no Overworld, permitindo grind constante antes de avançar.",
      imageUrl: "/dimensions/overworld_images/Overworld_Map.png",
    },
    {
      id: "overworld_progression_2",
      title: "Eventos diurnos e noturnos",
      description:
        "Várias ondas de mobs (como as Night events) acontecem exclusivamente aqui, desbloqueando drops essenciais.",
      imageUrl: "/dimensions/overworld_images/Night_Event.png",
    },
  ],
  biomes: [
    {
      name: "Beach",
      imageUrl: "/vannila_biome_images/Beach.webp",
    },
    {
      name: "Coniferous",
      imageUrl: "/vannila_biome_images/coniferous.webp",
    },
    {
      name: "Forest",
      imageUrl: "/vannila_biome_images/Forest.webp",
    },
    {
      name: "Hills",
      imageUrl: "/vannila_biome_images/hills.jpg",
    },
    {
      name: "Junglep",
      imageUrl: "/vannila_biome_images/jungle.webp",
    },
    {
      name: "Mesa",
      imageUrl: "/vannila_biome_images/mesa.webp",
    },
    {
      name: "Mountain",
      imageUrl: "/vannila_biome_images/mountain.jpg",
    },
    {
      name: "Plains",
      imageUrl: "/vannila_biome_images/Plains.webp",
    },
    {
      name: "Sandy",
      imageUrl: "/vannila_biome_images/sandy.webp",
    },
    {
      name: "Savanna",
      imageUrl: "/vannila_biome_images/savanna.webp",
    },
    {
      name: "Snowy",
      imageUrl: "/vannila_biome_images/snowy.webp",
    },
    {
      name: "Swamp",
      imageUrl: "/vannila_biome_images/Swamp.webp",
    },
    {
      name: "Ocean",
      imageUrl: "/vannila_biome_images/Ocean.webp",
    },
  ],
  generatedStones: [
    {
      id: "stone",
      field: "Blockizer.stone",
      displayName: "Pedra",
      generation: "Bloco base do Overworld.",
      notes: "Usado como material de construção e em receitas de portal.",
      imageUrl: "/dimensions/overworld_images/Stone.png",
    },
  ],
  mobs: [
    {
      entity: "EntityGoalby",
      weight: 60,
      min: 1,
      max: 2,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Mountain",
          imageUrl: "/vannila_biome_images/mountain.jpg",
        },
      ],
      loot: [
        {
          item: "Haven Realmstone",
          itemId: "Itemizer.RealmstoneHaven",
          quantity: 2,
          chance: 1,
          imageUrl: "/textures/items/realmstoneHaven.png",
        },
      ],
      imageUrl: "/textures/mobs/goalby.png",
      model: "/models/overworld/goalby/goalby.gltf",
      hunterLevelRequirement: 0,
      health: 40,
    },
    {
      entity: "EntityMagicke",
      weight: 60,
      min: 1,
      max: 2,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Mountain",
          imageUrl: "/vannila_biome_images/mountain.jpg",
        },
      ],
      loot: [
        {
          item: "Haven Realmstone",
          itemId: "Itemizer.RealmstoneHaven",
          quantity: 2,
          chance: 1,
          imageUrl: "/textures/items/realmstoneHaven.png",
        },
      ],
      imageUrl: "/textures/mobs/magicke.png",
      model: "/models/overworld/magicke/magicke.gltf",
      hunterLevelRequirement: 0,
      health: 20,
    },
    {
      entity: "EntityGrunt",
      weight: 20,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Mountain",
          imageUrl: "/vannila_biome_images/mountain.jpg",
        },
      ],
      loot: [
        {
          item: "Copper Coin",
          itemId: "Itemizer.CopperCoin",
          quantity: 2,
          chance: 1,
          imageUrl: "/textures/items/coinCopper.png",
        },
      ],
      imageUrl: "/textures/mobs/grunt.png",
      model: "/models/overworld/grunt/grunt.gltf",
      health: 15,
    },
    {
      entity: "EntityStoneGiant",
      weight: 60,
      min: 1,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Mountain",
          imageUrl: "/vannila_biome_images/mountain.jpg",
        },
      ],
      loot: [
        {
          item: "Blocks.stone",
          itemId: "Blocks.stone",
          quantity: 32,
          chance: 1,
          imageUrl: "/dimensions/common_images/Stone.png",
        },
      ],
      imageUrl: "/textures/mobs/stoneGiant.png",
      model: "/models/overworld/stone-giant/stone-giant.gltf",
      health: 150,
    },
    {
      entity: "EntityHunch",
      weight: 70,
      min: 1,
      max: 2,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Snowy",
          imageUrl: "/vannila_biome_images/snowy.webp",
        },
      ],
      loot: [
        {
          item: "Copper Coin",
          itemId: "Itemizer.CopperCoin",
          minQuantity: 1,
          maxQuantity: 1,
          chance: 0.5,
          imageUrl: "/dimensions/dustopia_images/Copper_Coin.png",
        },
      ],
      imageUrl: "/textures/mobs/hunch.png",
      model: "/models/overworld/hunch/hunch.gltf",
      health: 10,
    },
    {
      entity: "EntityYeti",
      weight: 70,
      min: 1,
      max: 2,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Snowy",
          imageUrl: "/vannila_biome_images/snowy.webp",
        },
      ],
      loot: [
        {
          item: "Weaponizer.BlastChiller",
          itemId: "Weaponizer.BlastChiller",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/blastChiller.png",
        },
        {
          item: "Ice Crystal",
          itemId: "Itemizer.IceCrystal",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/iceCrystal.png",
        },
      ],
      imageUrl: "/textures/mobs/yeti.png",
      model: "/models/overworld/yeti/yeti.gltf",
      health: 30,
    },
    {
      entity: "EntityPolarUrsa",
      weight: 70,
      min: 1,
      max: 2,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Snowy",
          imageUrl: "/vannila_biome_images/snowy.webp",
        },
      ],
      loot: [
        {
          item: "Cooked Ursa",
          itemId: "Itemizer.UrsaCooked",
          quantity: 2,
          chance: 1,
          imageUrl: "/textures/items/ursa_cooked.png",
        },
        {
          item: "Raw Ursa",
          itemId: "Itemizer.UrsaRaw",
          quantity: 2,
          chance: 1,
          imageUrl: "/textures/items/ursa_raw.png",
        },
      ],
      imageUrl: "/textures/mobs/polarursa.png",
      model: "/models/overworld/polar-ursa/polar-ursa.gltf",
      health: 60,
    },
    {
      entity: "EntitySnowCharger",
      weight: 70,
      min: 1,
      max: 2,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Snowy",
          imageUrl: "/vannila_biome_images/snowy.webp",
        },
      ],
      loot: [
        {
          item: "Items.feather",
          itemId: "Items.feather",
          quantity: 4,
          chance: 1,
          imageUrl: "/dimensions/common_images/Feather.png",
        },
      ],
      imageUrl: "/textures/mobs/snowCharger.png",
      model: "/models/overworld/snow-charger/snow-charger.gltf",
      health: 20,
    },
    {
      entity: "EntityIceGiant",
      weight: 70,
      min: 1,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Snowy",
          imageUrl: "/vannila_biome_images/snowy.webp",
        },
      ],
      loot: [
        {
          item: "Blocks.ice",
          itemId: "Blocks.ice",
          quantity: 32,
          chance: 1,
          imageUrl: "/dimensions/common_images/Ice.png",
        },
      ],
      imageUrl: "/textures/mobs/iceGiant.png",
      model: "/models/overworld/ice-giant/ice-giant.gltf",
      health: 150,
    },
    {
      entity: "EntitySandGolem",
      weight: 30,
      min: 1,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Sandy",
          imageUrl: "/vannila_biome_images/sandy.webp",
        },
      ],
      loot: [
        {
          item: "Desert Shell",
          itemId: "Itemizer.DesertShell",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/desertShell.png",
        },
      ],
      imageUrl: "/textures/mobs/sandgolem.png",
      model: "/models/overworld/sand-golem/sand-golem.gltf",
      health: 100,
    },
    {
      entity: "EntitySphinx",
      weight: 30,
      min: 1,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Sandy",
          imageUrl: "/vannila_biome_images/sandy.webp",
        },
      ],
      loot: [],
      imageUrl: "/textures/mobs/sphinx.png",
      model: "/models/overworld/sphinx/sphinx.gltf",
      health: 30,
    },
    {
      entity: "EntityFurlion",
      weight: 30,
      min: 1,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Sandy",
          imageUrl: "/vannila_biome_images/sandy.webp",
        },
      ],
      loot: [
        {
          item: "Furlion Chop",
          itemId: "Itemizer.FurlionChop",
          quantity: 2,
          chance: 1,
          imageUrl: "/textures/items/furlionChopCooked.png",
        },
        {
          item: "Raw Furlion Chop",
          itemId: "Itemizer.FurlionChopRaw",
          quantity: 2,
          chance: 1,
          imageUrl: "/textures/items/furlionChopRaw.png",
        },
      ],
      imageUrl: "/textures/mobs/furlion.png",
      model: "/models/overworld/furlion/furlion.gltf",
      health: 30,
    },
    {
      entity: "EntityWickett",
      weight: 30,
      min: 1,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Sandy",
          imageUrl: "/vannila_biome_images/sandy.webp",
        },
      ],
      loot: [],
      imageUrl: "/textures/mobs/wickett.png",
      model: "/models/overworld/wickett/wickett.gltf",
      health: 25,
    },
    {
      entity: "EntityDesertCharger",
      weight: 30,
      min: 1,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Sandy",
          imageUrl: "/vannila_biome_images/sandy.webp",
        },
      ],
      loot: [
        {
          item: "Items.feather",
          itemId: "Items.feather",
          quantity: 4,
          chance: 1,
          imageUrl: "/dimensions/common_images/Feather.png",
        },
      ],
      imageUrl: "/textures/mobs/desertCharger.png",
      model: "/models/overworld/desert-charger/desert-charger.gltf",
      health: 20,
    },
    {
      entity: "EntitySandGiant",
      weight: 30,
      min: 1,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Sandy",
          imageUrl: "/vannila_biome_images/sandy.webp",
        },
      ],
      loot: [
        {
          item: "Blocks.sand",
          itemId: "Blocks.sand",
          quantity: 32,
          chance: 1,
          imageUrl: "/dimensions/common_images/Sand.png",
        },
      ],
      imageUrl: "/textures/mobs/sandGiant.png",
      model: "/models/overworld/sand-giant/sand-giant.gltf",
      health: 150,
    },
    {
      entity: "EntityRammerhead",
      weight: 75,
      min: 2,
      max: 4,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Savanna",
          imageUrl: "/vannila_biome_images/savanna.webp",
        },
      ],
      loot: [
        {
          item: "Rammerhead Hide",
          itemId: "Itemizer.RammerheadHide",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/rammerheadHide.png",
        },
      ],
      imageUrl: "/textures/mobs/rammerhead.png",
      model: "/models/overworld/rammerhead/rammerhead.gltf",
      hunterLevelRequirement: 12,
      health: 55,
    },
    {
      entity: "EntityChimera",
      weight: 75,
      min: 1,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Savanna",
          imageUrl: "/vannila_biome_images/savanna.webp",
        },
      ],
      loot: [
        {
          item: "Cooked Chimera Chop",
          itemId: "Itemizer.ChimeraChopCooked",
          quantity: 2,
          chance: 1,
          imageUrl: "/dimensions/common_images/Cooked_Chimera_Chop.png",
        },
        {
          item: "Raw Chimera Chop",
          itemId: "Itemizer.ChimeraChopRaw",
          quantity: 2,
          chance: 1,
          imageUrl: "/dimensions/common_images/Raw_Chimera_Chop.png",
        },
        {
          item: "Head Hunter",
          itemId: "Weaponizer.HeadHunter",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/headHunter.png",
        },
      ],
      imageUrl: "/textures/mobs/chimera.png",
      model: "/models/overworld/chimera/chimera.gltf",
      hunterLevelRequirement: 12,
      health: 60,
    },
    {
      entity: "EntityElkanyne",
      weight: 75,
      min: 1,
      max: 2,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Savanna",
          imageUrl: "/vannila_biome_images/savanna.webp",
        },
      ],
      loot: [
        {
          item: "Stampede",
          itemId: "Weaponizer.Stampede",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/stampede.png",
        },
      ],
      imageUrl: "/textures/mobs/elkanyne.png",
      model: "/models/overworld/elkanyne/elkanyne.gltf",
      hunterLevelRequirement: 12,
      health: 40,
    },
    {
      entity: "EntityBoneback",
      weight: 75,
      min: 1,
      max: 2,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Savanna",
          imageUrl: "/vannila_biome_images/savanna.webp",
        },
      ],
      loot: [
        {
          item: "Bone",
          itemId: "Items.bone",
          quantity: 4,
          chance: 1,
          imageUrl: "/dimensions/common_images/Bone.png",
        },
      ],
      imageUrl: "/textures/mobs/boneback.png",
      model: "/models/overworld/boneback/boneback.gltf",
      hunterLevelRequirement: 12,
      health: 150,
    },
    {
      entity: "EntityBushBaby",
      weight: 70,
      min: 2,
      max: 3,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Jungle",
          imageUrl: "/vannila_biome_images/jungle.webp",
        },
      ],
      loot: [
        {
          item: "Weaponizer.GravityBlaster",
          itemId: "Weaponizer.GravityBlaster",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/gravityBlaster.png",
        },
        {
          item: "Precasia Realmstone",
          itemId: "Itemizer.RealmstonePrecasia",
          quantity: 2,
          chance: 1,
          imageUrl: "/textures/items/realmstonePrecasia.png",
        },
      ],
      imageUrl: "/textures/mobs/bushbaby.png",
      model: "/models/overworld/bush-baby/bush-baby.gltf",
      health: 10,
    },
    {
      entity: "EntityStinger",
      weight: 70,
      min: 2,
      max: 3,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Jungle",
          imageUrl: "/vannila_biome_images/jungle.webp",
        },
      ],
      loot: [
        {
          item: "Jungle Thorns",
          itemId: "Itemizer.JungleThorns",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/jungleThorns.png",
        },
        {
          item: "Weaponizer.TangleStaff",
          itemId: "Weaponizer.TangleStaff",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/tangleStaff.png",
        },
        {
          item: "Precasia Realmstone",
          itemId: "Itemizer.RealmstonePrecasia",
          quantity: 2,
          chance: 1,
          imageUrl: "/textures/items/realmstonePrecasia.png",
        },
      ],
      imageUrl: "/textures/mobs/stinger.png",
      model: "/models/overworld/stinger/stinger.gltf",
      health: 20,
    },
    {
      entity: "EntityChomper",
      weight: 70,
      min: 1,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Swamp",
          imageUrl: "/vannila_biome_images/Swamp.webp",
        },
      ],
      loot: [],
      imageUrl: "/textures/mobs/chomper.png",
      model: "/models/overworld/chomper/chomper.gltf",
      health: 30,
    },
    {
      entity: "EntityHag",
      weight: 70,
      min: 1,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Swamp",
          imageUrl: "/vannila_biome_images/Swamp.webp",
        },
      ],
      loot: [
        {
          item: "Camo Rifle",
          itemId: "Weaponizer.CamoRifle",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/camoRifle.png",
        },
      ],
      imageUrl: "/textures/mobs/hag.png",
      model: "/models/overworld/hag/hag.gltf",
      health: 30,
    },
    {
      entity: "EntitySwampCharger",
      weight: 70,
      min: 1,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Swamp",
          imageUrl: "/vannila_biome_images/Swamp.webp",
        },
      ],
      loot: [
        {
          item: "Items.feather",
          itemId: "Items.feather",
          quantity: 4,
          chance: 1,
          imageUrl: "/dimensions/common_images/Feather.png",
        },
      ],
      imageUrl: "/textures/mobs/swampCharger.png",
      model: "/models/overworld/swamp-charger/swamp-charger.gltf",
      health: 20,
    },
    {
      entity: "EntityFishix",
      weight: 70,
      min: 1,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Swamp",
          imageUrl: "/vannila_biome_images/Swamp.webp",
        },
      ],
      loot: [],
      imageUrl: "/textures/mobs/fishix.png",
      model: "/models/overworld/fishix/fishix.gltf",
      hunterLevelRequirement: 6,
      health: 35,
    },
    {
      entity: "EntitySkipper",
      weight: 30,
      min: 1,
      max: 1,
      creatureType: "waterCreature",
      registeredBiomes: [
        {
          name: "Swamp",
          imageUrl: "/vannila_biome_images/Swamp.webp",
        },
      ],
      loot: [
        {
          item: "Clay Ball",
          itemId: "Items.clay_ball",
          minQuantity: 1,
          maxQuantity: 1,
          chance: 1,
          imageUrl: "/dimensions/common_images/Clay_Ball.png",
        },
      ],
      imageUrl: "/textures/mobs/skipper.png",
      model: "/models/overworld/skipper/skipper.gltf",
      hunterLevelRequirement: 5,
      health: 30,
    },
    {
      entity: "EntityUrka",
      weight: 70,
      min: 2,
      max: 2,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Snowy",
          imageUrl: "/vannila_biome_images/snowy.webp",
        },
        null,
        "Coniferous",
      ],
      loot: [
        {
          item: "Urka Hide",
          itemId: "Itemizer.UrkaHide",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/urkaHide.png",
        },
      ],
      imageUrl: "/textures/mobs/urka.png",
      model: "/models/overworld/urka/urka.gltf",
      health: 40,
    },
    {
      entity: "EntityBlackUrsa",
      weight: 70,
      min: 2,
      max: 2,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Snowy",
          imageUrl: "/vannila_biome_images/snowy.webp",
        },
        null,
        "Coniferous",
      ],
      loot: [
        {
          item: "Cooked Ursa",
          itemId: "Itemizer.UrsaCooked",
          quantity: 2,
          chance: 1,
          imageUrl: "/textures/mobs/ursa.png",
          itemName: "Cooked Ursa",
        },
        {
          item: "Raw Ursa",
          itemId: "Itemizer.UrsaRaw",
          quantity: 2,
          chance: 1,
          imageUrl: "/textures/mobs/ursa.png",
          itemName: "Raw Ursa",
        },
      ],
      imageUrl: "",
      model: "/models/overworld/black-ursa/black-ursa.gltf",
      health: 90,
    },
    {
      entity: "EntityHidingFungi",
      weight: 40,
      min: 1,
      max: 2,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Snowy",
          imageUrl: "/vannila_biome_images/snowy.webp",
        },
        null,
        "Coniferous",
      ],
      loot: [],
      imageUrl: "/textures/mobs/hidingfungi.png",
      model: "/models/overworld/hiding-fungi/hiding-fungi.gltf",
      hunterLevelRequirement: 0,
      health: 0.5,
    },
    {
      entity: "EntityNatura",
      weight: 70,
      min: 2,
      max: 2,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Snowy",
          imageUrl: "/vannila_biome_images/snowy.webp",
        },
        null,
        "Coniferous",
      ],
      loot: [
        {
          item: "Nature Melon Slice",
          itemId: "Itemizer.NatureMelonSlice",
          minQuantity: 1,
          maxQuantity: 1,
          chance: 1,
          imageUrl: "/textures/items/natureMelonSlice.png",
        },
      ],
      imageUrl: "/textures/mobs/natura.png",
      model: "/models/overworld/natura/natura.gltf",
      health: 40,
    },
    {
      entity: "EntitySkolle",
      weight: 15,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Snowy",
          imageUrl: "/vannila_biome_images/snowy.webp",
        },
        null,
        "Coniferous",
      ],
      loot: [
        {
          item: "Copper Coin",
          itemId: "Itemizer.CopperCoin",
          quantity: 2,
          chance: 1,
          imageUrl: "/textures/items/coinCopper.png",
        },
      ],
      imageUrl: "/textures/mobs/skolle.png",
      model: "/models/overworld/skolle/skolle.gltf",
      health: 25,
    },
    {
      entity: "EntityLeafyGiant",
      weight: 70,
      min: 1,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Snowy",
          imageUrl: "/vannila_biome_images/snowy.webp",
        },
        null,
        "Coniferous",
      ],
      loot: [
        {
          item: "Blocks.leaves",
          itemId: "Blocks.leaves",
          quantity: 32,
          chance: 1,
          imageUrl: "/textures/blocks/leavesAchony.png",
        },
      ],
      imageUrl: "/textures/mobs/leafyGiant.png",
      model: "/models/overworld/leafy-giant/leafy-giant.gltf",
      health: 150,
    },
    {
      entity: "EntityHeadlessHunter",
      weight: 20,
      min: 1,
      max: 2,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Snowy",
          imageUrl: "/vannila_biome_images/snowy.webp",
        },
        null,
        {
          name: "Sandy",
          imageUrl: "/vannila_biome_images/sandy.webp",
        },
        null,
        {
          name: "Savanna",
          imageUrl: "/vannila_biome_images/savanna.webp",
        },
      ],
      loot: [
        {
          item: "Energy Banner [Retro]",
          itemId: "SpecialBlockizer.EnergyBanner",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/banner/energyBanner.png",
        },
      ],
      imageUrl: "/textures/mobs/headlessHunter.png",
      model: "/models/overworld/headless-hunter/headless-hunter.gltf",
      hunterLevelRequirement: 0,
      health: 70,
    },
    {
      entity: "EntityBugeye",
      weight: 20,
      min: 1,
      max: 2,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Snowy",
          imageUrl: "/vannila_biome_images/snowy.webp",
        },
        null,
        {
          name: "Sandy",
          imageUrl: "/vannila_biome_images/sandy.webp",
        },
        null,
        {
          name: "Savanna",
          imageUrl: "/vannila_biome_images/savanna.webp",
        },
      ],
      loot: [
        {
          item: "Energy Banner [Retro]",
          itemId: "SpecialBlockizer.EnergyBanner",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/banner/energyBanner.png",
        },
        {
          item: "Mysterium Realmstone",
          itemId: "Itemizer.RealmstoneMysterium",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/realmstoneMysterium.png",
        },
      ],
      imageUrl: "/textures/mobs/bugeye.png",
      model: "/models/overworld/bugeye/bugeye.gltf",
      health: 35,
    },
    {
      entity: "EntityGhostineAncient",
      weight: 20,
      min: 1,
      max: 2,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Snowy",
          imageUrl: "/vannila_biome_images/snowy.webp",
        },
        null,
        {
          name: "Sandy",
          imageUrl: "/vannila_biome_images/sandy.webp",
        },
        null,
        {
          name: "Savanna",
          imageUrl: "/vannila_biome_images/savanna.webp",
        },
      ],
      loot: [
        {
          item: "Energy Banner [Retro]",
          itemId: "SpecialBlockizer.EnergyBanner",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/banner/energyBanner.png",
        },
      ],
      imageUrl: "/textures/mobs/ghostineAncient.png",
      model: "/models/overworld/ghostine-ancient/ghostine-ancient.gltf",
      health: 40,
    },
    {
      entity: "EntityKingCharger",
      weight: 2,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Snowy",
          imageUrl: "/vannila_biome_images/snowy.webp",
        },
        null,
        {
          name: "Sandy",
          imageUrl: "/vannila_biome_images/sandy.webp",
        },
        null,
        {
          name: "Savanna",
          imageUrl: "/vannila_biome_images/savanna.webp",
        },
      ],
      loot: [
        {
          item: "Gold Coin",
          itemId: "Itemizer.GoldCoin",
          minQuantity: 1,
          maxQuantity: 1,
          chance: 0.5,
          imageUrl: "/dimensions/dustopia_images/Gold_Coin.png",
        },
      ],
      imageUrl: "/textures/mobs/kingCharger.png",
      model: "/models/overworld/king-charger/king-charger.gltf",
      health: 300,
    },
    {
      entity: "EntityEnt",
      weight: 20,
      min: 1,
      max: 2,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Snowy",
          imageUrl: "/vannila_biome_images/snowy.webp",
        },
        null,
        {
          name: "Sandy",
          imageUrl: "/vannila_biome_images/sandy.webp",
        },
        null,
        {
          name: "Savanna",
          imageUrl: "/vannila_biome_images/savanna.webp",
        },
      ],
      loot: [
        {
          item: "Holly Top Seeds",
          itemId: "Plantizer.HollyTopSeeds",
          quantity: 3,
          chance: 0.2,
          imageUrl: "/textures/items/hollyTopSeeds.png",
          itemName: "Holly Top Seeds",
        },
      ],
      imageUrl: "",
      model: "/models/overworld/ent/ent.gltf",
      health: 25,
    },
    {
      entity: "EntityBrute",
      weight: 20,
      min: 1,
      max: 2,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Snowy",
          imageUrl: "/vannila_biome_images/snowy.webp",
        },
        null,
        {
          name: "Sandy",
          imageUrl: "/vannila_biome_images/sandy.webp",
        },
        null,
        {
          name: "Savanna",
          imageUrl: "/vannila_biome_images/savanna.webp",
        },
      ],
      loot: [
        {
          item: "Energy Banner [Retro]",
          itemId: "SpecialBlockizer.EnergyBanner",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/banner/energyBanner.png",
        },
      ],
      imageUrl: "/textures/mobs/brute.png",
      model: "/models/overworld/brute/brute.gltf",
      health: 60,
    },
    {
      entity: "EntityBoneCreature",
      weight: 20,
      min: 1,
      max: 2,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Snowy",
          imageUrl: "/vannila_biome_images/snowy.webp",
        },
        null,
        {
          name: "Sandy",
          imageUrl: "/vannila_biome_images/sandy.webp",
        },
        null,
        {
          name: "Savanna",
          imageUrl: "/vannila_biome_images/savanna.webp",
        },
      ],
      loot: [
        {
          item: "Bone",
          itemId: "Items.bone",
          quantity: 2,
          chance: 1,
          imageUrl: "/dimensions/common_images/Bone.png",
        },
        {
          item: "Energy Banner [Retro]",
          itemId: "SpecialBlockizer.EnergyBanner",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/banner/energyBanner.png",
        },
      ],
      imageUrl: "/textures/mobs/boneCreature.png",
      model: "/models/overworld/bone-creature/bone-creature.gltf",
      health: 50,
    },
    {
      entity: "EntitySasquatch",
      weight: 15,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Snowy",
          imageUrl: "/vannila_biome_images/snowy.webp",
        },
        null,
        {
          name: "Sandy",
          imageUrl: "/vannila_biome_images/sandy.webp",
        },
        null,
        {
          name: "Savanna",
          imageUrl: "/vannila_biome_images/savanna.webp",
        },
      ],
      loot: [
        {
          item: "Plantizer.TeaSeeds",
          itemId: "Plantizer.TeaSeeds",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/teaSeeds.png",
        },
        {
          item: "Weaponizer.BrownBlaster",
          itemId: "Weaponizer.BrownBlaster",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/brownBlaster.png",
        },
      ],
      imageUrl: "/textures/mobs/sasquatch.png",
      model: "/models/overworld/sasquatch/sasquatch.gltf",
      health: 15,
    },
    {
      entity: "EntityGoblin",
      weight: 20,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Snowy",
          imageUrl: "/vannila_biome_images/snowy.webp",
        },
        null,
        {
          name: "Sandy",
          imageUrl: "/vannila_biome_images/sandy.webp",
        },
        null,
        {
          name: "Savanna",
          imageUrl: "/vannila_biome_images/savanna.webp",
        },
      ],
      loot: [
        {
          item: "Wind Rune",
          itemId: "Itemizer.WindRune",
          minQuantity: 1,
          maxQuantity: 1,
          chance: 1,
          imageUrl: "/dimensions/dustopia_images/Wind_Rune.png",
        },
      ],
      imageUrl: "/textures/mobs/goblin.png",
      model: "/models/overworld/goblin/goblin.gltf",
      health: 20,
    },
    {
      entity: "EntityCyclops",
      weight: 20,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Snowy",
          imageUrl: "/vannila_biome_images/snowy.webp",
        },
        null,
        {
          name: "Sandy",
          imageUrl: "/vannila_biome_images/sandy.webp",
        },
        null,
        {
          name: "Savanna",
          imageUrl: "/vannila_biome_images/savanna.webp",
        },
      ],
      loot: [],
      imageUrl: "/textures/mobs/cyclops.png",
      model: "/models/overworld/cyclops/cyclops.gltf",
      health: 25,
    },
    {
      entity: "GlisteningPixon",
      healthMin: 19,
      healthMax: 39,
      weight: 15,
      min: 1,
      max: 6,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Snowy",
          imageUrl: "/vannila_biome_images/snowy.webp",
        },
        null,
        {
          name: "Sandy",
          imageUrl: "/vannila_biome_images/sandy.webp",
        },
        null,
        {
          name: "Savanna",
          imageUrl: "/vannila_biome_images/savanna.webp",
        },
      ],
      loot: [
        {
          item: "Glistening Infusion Stone",
          itemId: "Itemizer.iStoneGlistening",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/iStoneGlistening.png",
          itemName: "Glistening Infusion Stone",
        },
      ],
      imageUrl: "",
      model: "/models/pixons/Glistening_Pixon.png",
      health: 19,
    },
    {
      entity: "EntityCharger",
      weight: 20,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Snowy",
          imageUrl: "/vannila_biome_images/snowy.webp",
        },
        null,
        {
          name: "Sandy",
          imageUrl: "/vannila_biome_images/sandy.webp",
        },
        null,
        {
          name: "Savanna",
          imageUrl: "/vannila_biome_images/savanna.webp",
        },
      ],
      loot: [
        {
          item: "Items.feather",
          itemId: "Items.feather",
          quantity: 4,
          chance: 1,
          imageUrl: "/dimensions/common_images/Feather.png",
        },
      ],
      imageUrl: "/textures/mobs/charger.png",
      model: "/models/overworld/charger/charger.gltf",
      health: 20,
    },
    {
      entity: "EntityNightfly",
      weight: 20,
      min: 1,
      max: 2,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Snowy",
          imageUrl: "/vannila_biome_images/snowy.webp",
        },
        null,
        {
          name: "Sandy",
          imageUrl: "/vannila_biome_images/sandy.webp",
        },
        null,
        {
          name: "Savanna",
          imageUrl: "/vannila_biome_images/savanna.webp",
        },
      ],
      loot: [
        {
          item: "Energy Banner [Retro]",
          itemId: "SpecialBlockizer.EnergyBanner",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/banner/energyBanner.png",
        },
      ],
      imageUrl: "/textures/mobs/nightfly.png",
      model: "/models/overworld/nightfly/nightfly.gltf",
      health: 30,
    },
    {
      entity: "EntityHorndron",
      weight: 5,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Snowy",
          imageUrl: "/vannila_biome_images/snowy.webp",
        },
        null,
        {
          name: "Sandy",
          imageUrl: "/vannila_biome_images/sandy.webp",
        },
        null,
        {
          name: "Savanna",
          imageUrl: "/vannila_biome_images/savanna.webp",
        },
      ],
      loot: [],
      imageUrl: "/textures/mobs/horndron.png",
      model: "/models/overworld/horndron/horndron.gltf",
      health: 70,
    },
    {
      entity: "EntityWarclops",
      weight: 5,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Snowy",
          imageUrl: "/vannila_biome_images/snowy.webp",
        },
        null,
        {
          name: "Sandy",
          imageUrl: "/vannila_biome_images/sandy.webp",
        },
        null,
        {
          name: "Savanna",
          imageUrl: "/vannila_biome_images/savanna.webp",
        },
      ],
      loot: [],
      imageUrl: "/textures/mobs/warclops.png",
      model: "/models/overworld/warclops/warclops.gltf",
      health: 30,
    },
    {
      entity: "EntityAncientGolem",
      weight: 5,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Snowy",
          imageUrl: "/vannila_biome_images/snowy.webp",
        },
        null,
        {
          name: "Sandy",
          imageUrl: "/vannila_biome_images/sandy.webp",
        },
        null,
        {
          name: "Savanna",
          imageUrl: "/vannila_biome_images/savanna.webp",
        },
      ],
      loot: [
        {
          item: "Ingot Rusted Iron",
          itemId: "Itemizer.IngotRustedIron",
          minQuantity: 1,
          maxQuantity: 1,
          chance: 1,
          imageUrl: "/textures/items/ingotRustedIron.png",
        },
      ],
      imageUrl: "/textures/mobs/ancientGolem.png",
      model: "/models/overworld/ancient-golem/ancient-golem.gltf",
      health: 50,
    },
    {
      entity: "EntityMuckopede",
      weight: 50,
      min: 3,
      max: 4,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Mesa",
          imageUrl: "/vannila_biome_images/mesa.webp",
        },
      ],
      loot: [
        {
          item: "Mudball",
          itemId: "Itemizer.Mudball",
          quantity: 2,
          chance: 1,
          imageUrl: "/textures/items/mudball.png",
        },
      ],
      imageUrl: "/textures/mobs/muckopede.png",
      model: "/models/overworld/muckopede/muckopede.gltf",
      health: 30,
    },
    {
      entity: "EntityHillCharger",
      weight: 50,
      min: 3,
      max: 4,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Mesa",
          imageUrl: "/vannila_biome_images/mesa.webp",
        },
      ],
      loot: [
        {
          item: "Feather",
          itemId: "Items.feather",
          quantity: 4,
          chance: 0.16666666666666666,
          imageUrl: "/textures/items/opteryxFeather.png",
          itemName: "Feather",
        },
      ],
      imageUrl: "",
      model: "/models/overworld/hill-charger/hill-charger.gltf",
      health: 24,
    },
    {
      entity: "EntityPincher",
      weight: 5,
      min: 0,
      max: 1,
      creatureType: "waterCreature",
      registeredBiomes: [
        {
          name: "Ocean",
          imageUrl: "/vannila_biome_images/Ocean.webp",
        },
      ],
      loot: [
        {
          item: "Atlantic Staff",
          itemId: "Weaponizer.AtlanticStaff",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/atlanticStaff.png",
        },
        {
          item: "Weaponizer.AtlanticBow",
          itemId: "Weaponizer.AtlanticBow",
          quantity: 1,
          chance: 1,
          imageUrl: "/dimensions/common_images/Atlantic_Bow.png",
        },
      ],
      imageUrl: "/textures/mobs/pincher.png",
      model: "/models/overworld/pincher/pincher.gltf",
      hunterLevelRequirement: 93,
      health: 150,
    },
    {
      entity: "EntitySeaTroll",
      weight: 20,
      min: 2,
      max: 2,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Beach",
          imageUrl: "/vannila_biome_images/Beach.webp",
        },
      ],
      loot: [
        {
          item: "Weaponizer.DartGun",
          itemId: "Weaponizer.DartGun",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/dartGun.png",
        },
        {
          item: "Sea Banner",
          itemId: "SpecialBlockizer.SeaBanner",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/banner/seaBanner.png",
        },
      ],
      imageUrl: "/textures/mobs/seatroll.png",
      model: "/models/overworld/sea-troll/sea-troll.gltf",
      health: 40,
    },
    {
      entity: "EntitySeaCharger",
      weight: 20,
      min: 2,
      max: 2,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Beach",
          imageUrl: "/vannila_biome_images/Beach.webp",
        },
      ],
      loot: [
        {
          item: "Feather",
          itemId: "Items.feather",
          quantity: 4,
          chance: 0.16666666666666666,
          imageUrl: "/textures/items/opteryxFeather.png",
          itemName: "Feather",
        },
      ],
      imageUrl: "",
      model: "/models/overworld/sea-charger/sea-charger.gltf",
      health: 30,
    },
    {
      entity: "EntitySpinux",
      weight: 20,
      min: 2,
      max: 2,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Beach",
          imageUrl: "/vannila_biome_images/Beach.webp",
        },
      ],
      loot: [],
      imageUrl: "/textures/mobs/spinux.png",
      model: "/models/overworld/spinux/spinux.gltf",
      health: 35,
    },
    {
      entity: "EntityDemonReaper",
      weight: 1,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Beach",
          imageUrl: "/vannila_biome_images/Beach.webp",
        },
        {
          name: "Coniferous",
          imageUrl: "/vannila_biome_images/coniferous.webp",
        },
        {
          name: "Forest",
          imageUrl: "/vannila_biome_images/Forest.webp",
        },
        {
          name: "Hills",
          imageUrl: "/vannila_biome_images/hills.jpg",
        },
        {
          name: "Jungle",
          imageUrl: "/vannila_biome_images/jungle.webp",
        },
        {
          name: "Mesa",
          imageUrl: "/vannila_biome_images/mesa.webp",
        },
        {
          name: "Mountain",
          imageUrl: "/vannila_biome_images/mountain.jpg",
        },
        {
          name: "Plains",
          imageUrl: "/vannila_biome_images/Plains.webp",
        },
        {
          name: "Sandy",
          imageUrl: "/vannila_biome_images/sandy.webp",
        },
        {
          name: "Savanna",
          imageUrl: "/vannila_biome_images/savanna.webp",
        },
        {
          name: "Snowy",
          imageUrl: "/vannila_biome_images/snowy.webp",
        },
        {
          name: "Swamp",
          imageUrl: "/vannila_biome_images/Swamp.webp",
        },
      ],
      loot: [
        {
          item: "Gold Coin",
          itemId: "Itemizer.GoldCoin",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/coinGold.png",
          itemName: "Gold Coin",
        },
      ],
      imageUrl: "/textures/mobs/demonreaper.png",
      model: "/models/night/demon-reaper/demon-reaper.gltf",
      health: 120,
    },
    {
      entity: "EntityClown",
      weight: 65,
      min: 1,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Beach",
          imageUrl: "/vannila_biome_images/Beach.webp",
        },
        {
          name: "Coniferous",
          imageUrl: "/vannila_biome_images/coniferous.webp",
        },
        {
          name: "Forest",
          imageUrl: "/vannila_biome_images/Forest.webp",
        },
        {
          name: "Hills",
          imageUrl: "/vannila_biome_images/hills.jpg",
        },
        {
          name: "Jungle",
          imageUrl: "/vannila_biome_images/jungle.webp",
        },
        {
          name: "Mesa",
          imageUrl: "/vannila_biome_images/mesa.webp",
        },
        {
          name: "Mountain",
          imageUrl: "/vannila_biome_images/mountain.jpg",
        },
        {
          name: "Plains",
          imageUrl: "/vannila_biome_images/Plains.webp",
        },
        {
          name: "Sandy",
          imageUrl: "/vannila_biome_images/sandy.webp",
        },
        {
          name: "Savanna",
          imageUrl: "/vannila_biome_images/savanna.webp",
        },
        {
          name: "Snowy",
          imageUrl: "/vannila_biome_images/snowy.webp",
        },
        {
          name: "Swamp",
          imageUrl: "/vannila_biome_images/Swamp.webp",
        },
      ],
      loot: [
        {
          item: "Confetti Cannon",
          itemId: "Weaponizer.ConfettiCannon",
          quantity: 1,
          chance: 0.04,
          imageUrl: "/textures/items/confettiCannon.png",
          itemName: "Confetti Cannon",
        },
        {
          item: "Celeve Realmstone",
          itemId: "Itemizer.RealmstoneCeleve",
          quantity: 2,
          chance: 0.08333333333333333,
          imageUrl: "/textures/items/realmstoneCeleve.png",
          itemName: "Celeve Realmstone",
        },
        {
          item: "Deeplands Realmstone",
          itemId: "Itemizer.RealmstoneDeeplands",
          quantity: 2,
          chance: 0.06666666666666667,
          imageUrl: "/textures/items/deeplandsGems.png",
          itemName: "Deeplands Realmstone",
        },
      ],
      imageUrl: "/textures/mobs/clown.png",
      model: "/models/overworld/clown/clown.gltf",
      health: 40,
    },
    {
      entity: "EntityNightWatcher",
      weight: 35,
      min: 1,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Beach",
          imageUrl: "/vannila_biome_images/Beach.webp",
        },
        {
          name: "Coniferous",
          imageUrl: "/vannila_biome_images/coniferous.webp",
        },
        {
          name: "Forest",
          imageUrl: "/vannila_biome_images/Forest.webp",
        },
        {
          name: "Hills",
          imageUrl: "/vannila_biome_images/hills.jpg",
        },
        {
          name: "Jungle",
          imageUrl: "/vannila_biome_images/jungle.webp",
        },
        {
          name: "Mesa",
          imageUrl: "/vannila_biome_images/mesa.webp",
        },
        {
          name: "Mountain",
          imageUrl: "/vannila_biome_images/mountain.jpg",
        },
        {
          name: "Plains",
          imageUrl: "/vannila_biome_images/Plains.webp",
        },
        {
          name: "Sandy",
          imageUrl: "/vannila_biome_images/sandy.webp",
        },
        {
          name: "Savanna",
          imageUrl: "/vannila_biome_images/savanna.webp",
        },
        {
          name: "Snowy",
          imageUrl: "/vannila_biome_images/snowy.webp",
        },
        {
          name: "Swamp",
          imageUrl: "/vannila_biome_images/Swamp.webp",
        },
      ],
      loot: [
        {
          item: "Moondust",
          itemId: "Itemizer.Moonstone",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/moonstone.png",
        },
        {
          item: "Weaponizer.MoonShiner",
          itemId: "Weaponizer.MoonShiner",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/moonShiner.png",
        },
        {
          item: "Soul Banner [Retro]",
          itemId: "SpecialBlockizer.SoulBanner",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/banner/soulBanner.png",
        },
      ],
      imageUrl: "/textures/mobs/nightwatcher.png",
      model: "/models/overworld/night-watcher/night-watcher.gltf",
      health: 90,
    },
    {
      entity: "EntitySkellox",
      weight: 35,
      min: 1,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Beach",
          imageUrl: "/vannila_biome_images/Beach.webp",
        },
        {
          name: "Coniferous",
          imageUrl: "/vannila_biome_images/coniferous.webp",
        },
        {
          name: "Forest",
          imageUrl: "/vannila_biome_images/Forest.webp",
        },
        {
          name: "Hills",
          imageUrl: "/vannila_biome_images/hills.jpg",
        },
        {
          name: "Jungle",
          imageUrl: "/vannila_biome_images/jungle.webp",
        },
        {
          name: "Mesa",
          imageUrl: "/vannila_biome_images/mesa.webp",
        },
        {
          name: "Mountain",
          imageUrl: "/vannila_biome_images/mountain.jpg",
        },
        {
          name: "Plains",
          imageUrl: "/vannila_biome_images/Plains.webp",
        },
        {
          name: "Sandy",
          imageUrl: "/vannila_biome_images/sandy.webp",
        },
        {
          name: "Savanna",
          imageUrl: "/vannila_biome_images/savanna.webp",
        },
        {
          name: "Snowy",
          imageUrl: "/vannila_biome_images/snowy.webp",
        },
        {
          name: "Swamp",
          imageUrl: "/vannila_biome_images/Swamp.webp",
        },
      ],
      loot: [
        {
          item: "Moondust",
          itemId: "Itemizer.Moonstone",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/moonstone.png",
        },
        {
          item: "Weaponizer.MoonShiner",
          itemId: "Weaponizer.MoonShiner",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/moonShiner.png",
        },
        {
          item: "Soul Banner [Retro]",
          itemId: "SpecialBlockizer.SoulBanner",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/banner/soulBanner.png",
        },
      ],
      imageUrl: "/textures/mobs/skellox.png",
      model: "/models/overworld/skellox/skellox.gltf",
      health: 100,
    },
    {
      entity: "EntityScrubby",
      weight: 35,
      min: 1,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Beach",
          imageUrl: "/vannila_biome_images/Beach.webp",
        },
        {
          name: "Coniferous",
          imageUrl: "/vannila_biome_images/coniferous.webp",
        },
        {
          name: "Forest",
          imageUrl: "/vannila_biome_images/Forest.webp",
        },
        {
          name: "Hills",
          imageUrl: "/vannila_biome_images/hills.jpg",
        },
        {
          name: "Jungle",
          imageUrl: "/vannila_biome_images/jungle.webp",
        },
        {
          name: "Mesa",
          imageUrl: "/vannila_biome_images/mesa.webp",
        },
        {
          name: "Mountain",
          imageUrl: "/vannila_biome_images/mountain.jpg",
        },
        {
          name: "Plains",
          imageUrl: "/vannila_biome_images/Plains.webp",
        },
        {
          name: "Sandy",
          imageUrl: "/vannila_biome_images/sandy.webp",
        },
        {
          name: "Savanna",
          imageUrl: "/vannila_biome_images/savanna.webp",
        },
        {
          name: "Snowy",
          imageUrl: "/vannila_biome_images/snowy.webp",
        },
        {
          name: "Swamp",
          imageUrl: "/vannila_biome_images/Swamp.webp",
        },
      ],
      loot: [
        {
          item: "Moondust",
          itemId: "Itemizer.Moonstone",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/moonstone.png",
        },
        {
          item: "Weaponizer.HotShot",
          itemId: "Weaponizer.HotShot",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/hotShot.png",
        },
        {
          item: "Weaponizer.MoonShiner",
          itemId: "Weaponizer.MoonShiner",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/moonShiner.png",
        },
        {
          item: "Soul Banner [Retro]",
          itemId: "SpecialBlockizer.SoulBanner",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/banner/soulBanner.png",
        },
      ],
      imageUrl: "/textures/mobs/scrubby.png",
      model: "/models/overworld/scrubby/scrubby.gltf",
      health: 60,
    },
    {
      entity: "EntityFacelessRunner",
      weight: 65,
      min: 1,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Beach",
          imageUrl: "/vannila_biome_images/Beach.webp",
        },
        {
          name: "Coniferous",
          imageUrl: "/vannila_biome_images/coniferous.webp",
        },
        {
          name: "Forest",
          imageUrl: "/vannila_biome_images/Forest.webp",
        },
        {
          name: "Hills",
          imageUrl: "/vannila_biome_images/hills.jpg",
        },
        {
          name: "Jungle",
          imageUrl: "/vannila_biome_images/jungle.webp",
        },
        {
          name: "Mesa",
          imageUrl: "/vannila_biome_images/mesa.webp",
        },
        {
          name: "Mountain",
          imageUrl: "/vannila_biome_images/mountain.jpg",
        },
        {
          name: "Plains",
          imageUrl: "/vannila_biome_images/Plains.webp",
        },
        {
          name: "Sandy",
          imageUrl: "/vannila_biome_images/sandy.webp",
        },
        {
          name: "Savanna",
          imageUrl: "/vannila_biome_images/savanna.webp",
        },
        {
          name: "Snowy",
          imageUrl: "/vannila_biome_images/snowy.webp",
        },
        {
          name: "Swamp",
          imageUrl: "/vannila_biome_images/Swamp.webp",
        },
      ],
      loot: [
        {
          item: "Deeplands Realmstone",
          itemId: "Itemizer.RealmstoneDeeplands",
          quantity: 2,
          chance: 1,
          imageUrl: "/textures/items/realmstoneDeeplands.png",
        },
      ],
      imageUrl: "/textures/mobs/facelessrunner.png",
      model: "/models/overworld/faceless-runner/faceless-runner.gltf",
      health: 25,
    },
    {
      entity: "EntityShadow",
      weight: 65,
      min: 1,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Beach",
          imageUrl: "/vannila_biome_images/Beach.webp",
        },
        {
          name: "Coniferous",
          imageUrl: "/vannila_biome_images/coniferous.webp",
        },
        {
          name: "Forest",
          imageUrl: "/vannila_biome_images/Forest.webp",
        },
        {
          name: "Hills",
          imageUrl: "/vannila_biome_images/hills.jpg",
        },
        {
          name: "Jungle",
          imageUrl: "/vannila_biome_images/jungle.webp",
        },
        {
          name: "Mesa",
          imageUrl: "/vannila_biome_images/mesa.webp",
        },
        {
          name: "Mountain",
          imageUrl: "/vannila_biome_images/mountain.jpg",
        },
        {
          name: "Plains",
          imageUrl: "/vannila_biome_images/Plains.webp",
        },
        {
          name: "Sandy",
          imageUrl: "/vannila_biome_images/sandy.webp",
        },
        {
          name: "Savanna",
          imageUrl: "/vannila_biome_images/savanna.webp",
        },
        {
          name: "Snowy",
          imageUrl: "/vannila_biome_images/snowy.webp",
        },
        {
          name: "Swamp",
          imageUrl: "/vannila_biome_images/Swamp.webp",
        },
      ],
      loot: [],
      imageUrl: "",
      model: "/models/overworld/shadow/shadow.gltf",
      health: 1,
    },
    {
      entity: "EntityGhost",
      weight: 65,
      min: 1,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Beach",
          imageUrl: "/vannila_biome_images/Beach.webp",
        },
        {
          name: "Coniferous",
          imageUrl: "/vannila_biome_images/coniferous.webp",
        },
        {
          name: "Forest",
          imageUrl: "/vannila_biome_images/Forest.webp",
        },
        {
          name: "Hills",
          imageUrl: "/vannila_biome_images/hills.jpg",
        },
        {
          name: "Jungle",
          imageUrl: "/vannila_biome_images/jungle.webp",
        },
        {
          name: "Mesa",
          imageUrl: "/vannila_biome_images/mesa.webp",
        },
        {
          name: "Mountain",
          imageUrl: "/vannila_biome_images/mountain.jpg",
        },
        {
          name: "Plains",
          imageUrl: "/vannila_biome_images/Plains.webp",
        },
        {
          name: "Sandy",
          imageUrl: "/vannila_biome_images/sandy.webp",
        },
        {
          name: "Savanna",
          imageUrl: "/vannila_biome_images/savanna.webp",
        },
        {
          name: "Snowy",
          imageUrl: "/vannila_biome_images/snowy.webp",
        },
        {
          name: "Swamp",
          imageUrl: "/vannila_biome_images/Swamp.webp",
        },
      ],
      loot: [
        {
          item: "Limonite Ingot",
          itemId: "Itemizer.IngotLimonite",
          quantity: 5,
          chance: 1,
          imageUrl: "/textures/items/ingotLimonite.png",
        },
        {
          item: "Weaponizer.SoulStorm",
          itemId: "Weaponizer.SoulStorm",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/soulStorm.png",
        },
        {
          item: "Deeplands Realmstone",
          itemId: "Itemizer.RealmstoneDeeplands",
          quantity: 2,
          chance: 1,
          imageUrl: "/textures/items/realmstoneDeeplands.png",
        },
      ],
      imageUrl: "/textures/mobs/ghost.png",
      model: "/models/overworld/ghost/ghost.gltf",
      health: 30,
    },
    {
      entity: "EntityVoidwalker",
      weight: 65,
      min: 1,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Beach",
          imageUrl: "/vannila_biome_images/Beach.webp",
        },
        {
          name: "Coniferous",
          imageUrl: "/vannila_biome_images/coniferous.webp",
        },
        {
          name: "Forest",
          imageUrl: "/vannila_biome_images/Forest.webp",
        },
        {
          name: "Hills",
          imageUrl: "/vannila_biome_images/hills.jpg",
        },
        {
          name: "Jungle",
          imageUrl: "/vannila_biome_images/jungle.webp",
        },
        {
          name: "Mesa",
          imageUrl: "/vannila_biome_images/mesa.webp",
        },
        {
          name: "Mountain",
          imageUrl: "/vannila_biome_images/mountain.jpg",
        },
        {
          name: "Plains",
          imageUrl: "/vannila_biome_images/Plains.webp",
        },
        {
          name: "Sandy",
          imageUrl: "/vannila_biome_images/sandy.webp",
        },
        {
          name: "Savanna",
          imageUrl: "/vannila_biome_images/savanna.webp",
        },
        {
          name: "Snowy",
          imageUrl: "/vannila_biome_images/snowy.webp",
        },
        {
          name: "Swamp",
          imageUrl: "/vannila_biome_images/Swamp.webp",
        },
      ],
      loot: [
        {
          item: "Void Banner",
          itemId: "SpecialBlockizer.VoidBanner",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/banner/voidBanner.png",
        },
      ],
      imageUrl: "/textures/mobs/voidwalker.png",
      model: "/models/overworld/voidwalker/voidwalker.gltf",
      health: 40,
    },
    {
      entity: "EntityVoidCharger",
      weight: 65,
      min: 1,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Beach",
          imageUrl: "/vannila_biome_images/Beach.webp",
        },
        {
          name: "Coniferous",
          imageUrl: "/vannila_biome_images/coniferous.webp",
        },
        {
          name: "Forest",
          imageUrl: "/vannila_biome_images/Forest.webp",
        },
        {
          name: "Hills",
          imageUrl: "/vannila_biome_images/hills.jpg",
        },
        {
          name: "Jungle",
          imageUrl: "/vannila_biome_images/jungle.webp",
        },
        {
          name: "Mesa",
          imageUrl: "/vannila_biome_images/mesa.webp",
        },
        {
          name: "Mountain",
          imageUrl: "/vannila_biome_images/mountain.jpg",
        },
        {
          name: "Plains",
          imageUrl: "/vannila_biome_images/Plains.webp",
        },
        {
          name: "Sandy",
          imageUrl: "/vannila_biome_images/sandy.webp",
        },
        {
          name: "Savanna",
          imageUrl: "/vannila_biome_images/savanna.webp",
        },
        {
          name: "Snowy",
          imageUrl: "/vannila_biome_images/snowy.webp",
        },
        {
          name: "Swamp",
          imageUrl: "/vannila_biome_images/Swamp.webp",
        },
      ],
      loot: [
        {
          item: "Items.feather",
          itemId: "Items.feather",
          quantity: 4,
          chance: 1,
          imageUrl: "/dimensions/common_images/Feather.png",
        },
        {
          item: "Void Sword",
          itemId: "Weaponizer.VoidSword",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/swordVoid.png",
        },
        {
          item: "Void Banner",
          itemId: "SpecialBlockizer.VoidBanner",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/banner/voidBanner.png",
        },
      ],
      imageUrl: "/textures/mobs/voidCharger.png",
      model: "/models/overworld/void-charger/void-charger.gltf",
      health: 20,
    },
    {
      entity: "EntityMotherVoidwalker",
      weight: 65,
      min: 1,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Beach",
          imageUrl: "/vannila_biome_images/Beach.webp",
        },
        {
          name: "Coniferous",
          imageUrl: "/vannila_biome_images/coniferous.webp",
        },
        {
          name: "Forest",
          imageUrl: "/vannila_biome_images/Forest.webp",
        },
        {
          name: "Hills",
          imageUrl: "/vannila_biome_images/hills.jpg",
        },
        {
          name: "Jungle",
          imageUrl: "/vannila_biome_images/jungle.webp",
        },
        {
          name: "Mesa",
          imageUrl: "/vannila_biome_images/mesa.webp",
        },
        {
          name: "Mountain",
          imageUrl: "/vannila_biome_images/mountain.jpg",
        },
        {
          name: "Plains",
          imageUrl: "/vannila_biome_images/Plains.webp",
        },
        {
          name: "Sandy",
          imageUrl: "/vannila_biome_images/sandy.webp",
        },
        {
          name: "Savanna",
          imageUrl: "/vannila_biome_images/savanna.webp",
        },
        {
          name: "Snowy",
          imageUrl: "/vannila_biome_images/snowy.webp",
        },
        {
          name: "Swamp",
          imageUrl: "/vannila_biome_images/Swamp.webp",
        },
      ],
      loot: [
        {
          item: "Void Boots",
          itemId: "Armorizer.VoidBoots",
          quantity: 1,
          chance: 0.125,
          imageUrl: "/textures/banner/voidBanner.png",
          itemName: "Void Boots",
        },
        {
          item: "Void Bow",
          itemId: "Weaponizer.VoidBow",
          quantity: 1,
          chance: 0.125,
          imageUrl: "/textures/banner/voidBanner.png",
          itemName: "Void Bow",
        },
        {
          item: "Void Chestplate",
          itemId: "Armorizer.VoidChestplate",
          quantity: 1,
          chance: 0.125,
          imageUrl: "/textures/items/chestplateVoid.png",
          itemName: "Void Chestplate",
        },
        {
          item: "Void Helmet",
          itemId: "Armorizer.VoidHelmet",
          quantity: 1,
          chance: 0.125,
          imageUrl: "/textures/models/armor/sealord_helmet.png",
          itemName: "Void Helmet",
        },
        {
          item: "Void Leggings",
          itemId: "Armorizer.VoidLeggings",
          quantity: 1,
          chance: 0.125,
          imageUrl: "/textures/banner/voidBanner.png",
          itemName: "Void Leggings",
        },
      ],
      imageUrl: "",
      model: "/models/overworld/mother-voidwalker/mother-voidwalker.gltf",
      health: 80,
    },
    {
      entity: "EntityTrickster",
      weight: 40,
      min: 1,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Beach",
          imageUrl: "/vannila_biome_images/Beach.webp",
        },
        {
          name: "Coniferous",
          imageUrl: "/vannila_biome_images/coniferous.webp",
        },
        {
          name: "Forest",
          imageUrl: "/vannila_biome_images/Forest.webp",
        },
        {
          name: "Hills",
          imageUrl: "/vannila_biome_images/hills.jpg",
        },
        {
          name: "Jungle",
          imageUrl: "/vannila_biome_images/jungle.webp",
        },
        {
          name: "Mesa",
          imageUrl: "/vannila_biome_images/mesa.webp",
        },
        {
          name: "Mountain",
          imageUrl: "/vannila_biome_images/mountain.jpg",
        },
        {
          name: "Plains",
          imageUrl: "/vannila_biome_images/Plains.webp",
        },
        {
          name: "Sandy",
          imageUrl: "/vannila_biome_images/sandy.webp",
        },
        {
          name: "Savanna",
          imageUrl: "/vannila_biome_images/savanna.webp",
        },
        {
          name: "Snowy",
          imageUrl: "/vannila_biome_images/snowy.webp",
        },
        {
          name: "Swamp",
          imageUrl: "/vannila_biome_images/Swamp.webp",
        },
      ],
      loot: [
        {
          item: "Weaponizer.MiniCannon",
          itemId: "Weaponizer.MiniCannon",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/miniCannon.png",
        },
        {
          item: "Illusion Banner",
          itemId: "SpecialBlockizer.IllusionBanner",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/banner/illusionBanner.png",
        },
        {
          item: "Abyss Realmstone",
          itemId: "Itemizer.RealmstoneAbyss",
          quantity: 2,
          chance: 1,
          imageUrl: "/textures/items/realmstoneAbyss.png",
        },
        {
          item: "Deeplands Realmstone",
          itemId: "Itemizer.RealmstoneDeeplands",
          quantity: 2,
          chance: 1,
          imageUrl: "/textures/items/realmstoneDeeplands.png",
        },
      ],
      imageUrl: "/textures/mobs/trickster.png",
      model: "/models/overworld/trickster/trickster.gltf",
      health: 55,
    },
    {
      entity: "EntityEverbeast",
      weight: 5,
      min: 1,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Beach",
          imageUrl: "/vannila_biome_images/Beach.webp",
        },
        {
          name: "Coniferous",
          imageUrl: "/vannila_biome_images/coniferous.webp",
        },
        {
          name: "Forest",
          imageUrl: "/vannila_biome_images/Forest.webp",
        },
        {
          name: "Hills",
          imageUrl: "/vannila_biome_images/hills.jpg",
        },
        {
          name: "Jungle",
          imageUrl: "/vannila_biome_images/jungle.webp",
        },
        {
          name: "Mesa",
          imageUrl: "/vannila_biome_images/mesa.webp",
        },
        {
          name: "Mountain",
          imageUrl: "/vannila_biome_images/mountain.jpg",
        },
        {
          name: "Plains",
          imageUrl: "/vannila_biome_images/Plains.webp",
        },
        {
          name: "Sandy",
          imageUrl: "/vannila_biome_images/sandy.webp",
        },
        {
          name: "Savanna",
          imageUrl: "/vannila_biome_images/savanna.webp",
        },
        {
          name: "Snowy",
          imageUrl: "/vannila_biome_images/snowy.webp",
        },
        {
          name: "Swamp",
          imageUrl: "/vannila_biome_images/Swamp.webp",
        },
      ],
      loot: [
        {
          item: "Amethyst Ingot",
          itemId: "Itemizer.AmethystIngot",
          quantity: 6,
          chance: 1,
          imageUrl: "/textures/items/ingotAmethyst.png",
        },
        {
          item: "Limonite Ingot",
          itemId: "Itemizer.IngotLimonite",
          quantity: 8,
          chance: 1,
          imageUrl: "/textures/items/ingotLimonite.png",
        },
        {
          item: "Rosite Ingot",
          itemId: "Itemizer.IngotRosite",
          quantity: 6,
          chance: 1,
          imageUrl: "/textures/items/ingotRosite.png",
        },
        {
          item: "Jade Ingot",
          itemId: "Itemizer.IngotJade",
          quantity: 5,
          chance: 1,
          imageUrl: "/textures/items/ingotJade.png",
        },
        {
          item: "Sapphire Ingot",
          itemId: "Itemizer.IngotSapphire",
          quantity: 3,
          chance: 1,
          imageUrl: "/textures/items/ingotSapphire.png",
        },
      ],
      imageUrl: "/textures/mobs/everbeast.png",
      model: "/models/overworld/everbeast/everbeast.gltf",
      health: 150,
    },
    {
      entity: "EntityDarkBeast",
      weight: 35,
      min: 1,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Beach",
          imageUrl: "/vannila_biome_images/Beach.webp",
        },
        {
          name: "Coniferous",
          imageUrl: "/vannila_biome_images/coniferous.webp",
        },
        {
          name: "Forest",
          imageUrl: "/vannila_biome_images/Forest.webp",
        },
        {
          name: "Hills",
          imageUrl: "/vannila_biome_images/hills.jpg",
        },
        {
          name: "Jungle",
          imageUrl: "/vannila_biome_images/jungle.webp",
        },
        {
          name: "Mesa",
          imageUrl: "/vannila_biome_images/mesa.webp",
        },
        {
          name: "Mountain",
          imageUrl: "/vannila_biome_images/mountain.jpg",
        },
        {
          name: "Plains",
          imageUrl: "/vannila_biome_images/Plains.webp",
        },
        {
          name: "Sandy",
          imageUrl: "/vannila_biome_images/sandy.webp",
        },
        {
          name: "Savanna",
          imageUrl: "/vannila_biome_images/savanna.webp",
        },
        {
          name: "Snowy",
          imageUrl: "/vannila_biome_images/snowy.webp",
        },
        {
          name: "Swamp",
          imageUrl: "/vannila_biome_images/Swamp.webp",
        },
      ],
      loot: [
        {
          item: "Moondust",
          itemId: "Itemizer.Moonstone",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/moonstone.png",
        },
        {
          item: "Weaponizer.MoonShiner",
          itemId: "Weaponizer.MoonShiner",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/moonShiner.png",
        },
        {
          item: "Scream Shield",
          itemId: "Itemizer.ScreamShield",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/screamShield.png",
        },
        {
          item: "Soul Banner [Retro]",
          itemId: "SpecialBlockizer.SoulBanner",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/banner/soulBanner.png",
        },
      ],
      imageUrl: "/textures/mobs/darkbeast.png",
      model: "/models/overworld/darkbeast/darkbeast.gltf",
      health: 150,
    },
    {
      entity: "EntityBombCarrier",
      weight: 1,
      min: 1,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Beach",
          imageUrl: "/vannila_biome_images/Beach.webp",
        },
        {
          name: "Coniferous",
          imageUrl: "/vannila_biome_images/coniferous.webp",
        },
        {
          name: "Forest",
          imageUrl: "/vannila_biome_images/Forest.webp",
        },
        {
          name: "Hills",
          imageUrl: "/vannila_biome_images/hills.jpg",
        },
        {
          name: "Jungle",
          imageUrl: "/vannila_biome_images/jungle.webp",
        },
        {
          name: "Mesa",
          imageUrl: "/vannila_biome_images/mesa.webp",
        },
        {
          name: "Mountain",
          imageUrl: "/vannila_biome_images/mountain.jpg",
        },
        {
          name: "Plains",
          imageUrl: "/vannila_biome_images/Plains.webp",
        },
        {
          name: "Sandy",
          imageUrl: "/vannila_biome_images/sandy.webp",
        },
        {
          name: "Savanna",
          imageUrl: "/vannila_biome_images/savanna.webp",
        },
        {
          name: "Snowy",
          imageUrl: "/vannila_biome_images/snowy.webp",
        },
        {
          name: "Swamp",
          imageUrl: "/vannila_biome_images/Swamp.webp",
        },
      ],
      loot: [
        {
          item: "Weaponizer.HuntersRifle",
          itemId: "Weaponizer.HuntersRifle",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/huntersRifle.png",
        },
        {
          item: "Blocks.tnt",
          itemId: "Blocks.tnt",
          quantity: 5,
          chance: 1,
          imageUrl: "/dimensions/end_images/TNT.png",
        },
      ],
      imageUrl: "/textures/mobs/bombcarrier.png",
      model: "/models/overworld/bomb-carrier/bomb-carrier.gltf",
      health: 100,
    },
    {
      entity: "EntityTerrestrial",
      weight: 5,
      min: 1,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Beach",
          imageUrl: "/vannila_biome_images/Beach.webp",
        },
        {
          name: "Coniferous",
          imageUrl: "/vannila_biome_images/coniferous.webp",
        },
        {
          name: "Forest",
          imageUrl: "/vannila_biome_images/Forest.webp",
        },
        {
          name: "Hills",
          imageUrl: "/vannila_biome_images/hills.jpg",
        },
        {
          name: "Jungle",
          imageUrl: "/vannila_biome_images/jungle.webp",
        },
        {
          name: "Mesa",
          imageUrl: "/vannila_biome_images/mesa.webp",
        },
        {
          name: "Mountain",
          imageUrl: "/vannila_biome_images/mountain.jpg",
        },
        {
          name: "Plains",
          imageUrl: "/vannila_biome_images/Plains.webp",
        },
        {
          name: "Sandy",
          imageUrl: "/vannila_biome_images/sandy.webp",
        },
        {
          name: "Savanna",
          imageUrl: "/vannila_biome_images/savanna.webp",
        },
        {
          name: "Snowy",
          imageUrl: "/vannila_biome_images/snowy.webp",
        },
        {
          name: "Swamp",
          imageUrl: "/vannila_biome_images/Swamp.webp",
        },
      ],
      loot: [],
      imageUrl: "/textures/mobs/terrestrial.png",
      model: "/models/overworld/terrestrial/terrestrial.gltf",
      health: 120,
    },
    {
      entity: "EntityNightReaper",
      weight: 35,
      min: 1,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Beach",
          imageUrl: "/vannila_biome_images/Beach.webp",
        },
        {
          name: "Coniferous",
          imageUrl: "/vannila_biome_images/coniferous.webp",
        },
        {
          name: "Forest",
          imageUrl: "/vannila_biome_images/Forest.webp",
        },
        {
          name: "Hills",
          imageUrl: "/vannila_biome_images/hills.jpg",
        },
        {
          name: "Jungle",
          imageUrl: "/vannila_biome_images/jungle.webp",
        },
        {
          name: "Mesa",
          imageUrl: "/vannila_biome_images/mesa.webp",
        },
        {
          name: "Mountain",
          imageUrl: "/vannila_biome_images/mountain.jpg",
        },
        {
          name: "Plains",
          imageUrl: "/vannila_biome_images/Plains.webp",
        },
        {
          name: "Sandy",
          imageUrl: "/vannila_biome_images/sandy.webp",
        },
        {
          name: "Savanna",
          imageUrl: "/vannila_biome_images/savanna.webp",
        },
        {
          name: "Snowy",
          imageUrl: "/vannila_biome_images/snowy.webp",
        },
        {
          name: "Swamp",
          imageUrl: "/vannila_biome_images/Swamp.webp",
        },
      ],
      loot: [
        {
          item: "Energy Banner [Retro]",
          itemId: "SpecialBlockizer.EnergyBanner",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/banner/energyBanner.png",
        },
      ],
      imageUrl: "/textures/mobs/nightreaper.png",
      model: "/models/overworld/night-reaper/night-reaper.gltf",
      health: 50,
    },
    {
      entity: "EntityDicer",
      weight: 35,
      min: 1,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Beach",
          imageUrl: "/vannila_biome_images/Beach.webp",
        },
        {
          name: "Coniferous",
          imageUrl: "/vannila_biome_images/coniferous.webp",
        },
        {
          name: "Forest",
          imageUrl: "/vannila_biome_images/Forest.webp",
        },
        {
          name: "Hills",
          imageUrl: "/vannila_biome_images/hills.jpg",
        },
        {
          name: "Jungle",
          imageUrl: "/vannila_biome_images/jungle.webp",
        },
        {
          name: "Mesa",
          imageUrl: "/vannila_biome_images/mesa.webp",
        },
        {
          name: "Mountain",
          imageUrl: "/vannila_biome_images/mountain.jpg",
        },
        {
          name: "Plains",
          imageUrl: "/vannila_biome_images/Plains.webp",
        },
        {
          name: "Sandy",
          imageUrl: "/vannila_biome_images/sandy.webp",
        },
        {
          name: "Savanna",
          imageUrl: "/vannila_biome_images/savanna.webp",
        },
        {
          name: "Snowy",
          imageUrl: "/vannila_biome_images/snowy.webp",
        },
        {
          name: "Swamp",
          imageUrl: "/vannila_biome_images/Swamp.webp",
        },
      ],
      loot: [],
      imageUrl: "/textures/mobs/dicer.png",
      model: "/models/overworld/dicer/dicer.gltf",
      health: 50,
    },
    {
      entity: "EntityAnemia",
      weight: 35,
      min: 1,
      max: 2,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Beach",
          imageUrl: "/vannila_biome_images/Beach.webp",
        },
        {
          name: "Coniferous",
          imageUrl: "/vannila_biome_images/coniferous.webp",
        },
        {
          name: "Forest",
          imageUrl: "/vannila_biome_images/Forest.webp",
        },
        {
          name: "Hills",
          imageUrl: "/vannila_biome_images/hills.jpg",
        },
        {
          name: "Jungle",
          imageUrl: "/vannila_biome_images/jungle.webp",
        },
        {
          name: "Mesa",
          imageUrl: "/vannila_biome_images/mesa.webp",
        },
        {
          name: "Mountain",
          imageUrl: "/vannila_biome_images/mountain.jpg",
        },
        {
          name: "Plains",
          imageUrl: "/vannila_biome_images/Plains.webp",
        },
        {
          name: "Sandy",
          imageUrl: "/vannila_biome_images/sandy.webp",
        },
        {
          name: "Savanna",
          imageUrl: "/vannila_biome_images/savanna.webp",
        },
        {
          name: "Snowy",
          imageUrl: "/vannila_biome_images/snowy.webp",
        },
        {
          name: "Swamp",
          imageUrl: "/vannila_biome_images/Swamp.webp",
        },
      ],
      loot: [
        {
          item: "Stormer",
          itemId: "Weaponizer.Stormer",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/stormer.png",
        },
        {
          item: "Abyss Realmstone",
          itemId: "Itemizer.RealmstoneAbyss",
          quantity: 3,
          chance: 1,
          imageUrl: "/textures/items/realmstoneAbyss.png",
        },
        {
          item: "Blood Banner",
          itemId: "SpecialBlockizer.BloodBanner",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/banner/bloodBanner.png",
        },
      ],
      imageUrl: "/textures/mobs/anemia.png",
      model: "/models/overworld/anemia/anemia.gltf",
      health: 80,
    },
    {
      entity: "EntityBloodmist",
      weight: 35,
      min: 1,
      max: 2,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Beach",
          imageUrl: "/vannila_biome_images/Beach.webp",
        },
        {
          name: "Coniferous",
          imageUrl: "/vannila_biome_images/coniferous.webp",
        },
        {
          name: "Forest",
          imageUrl: "/vannila_biome_images/Forest.webp",
        },
        {
          name: "Hills",
          imageUrl: "/vannila_biome_images/hills.jpg",
        },
        {
          name: "Jungle",
          imageUrl: "/vannila_biome_images/jungle.webp",
        },
        {
          name: "Mesa",
          imageUrl: "/vannila_biome_images/mesa.webp",
        },
        {
          name: "Mountain",
          imageUrl: "/vannila_biome_images/mountain.jpg",
        },
        {
          name: "Plains",
          imageUrl: "/vannila_biome_images/Plains.webp",
        },
        {
          name: "Sandy",
          imageUrl: "/vannila_biome_images/sandy.webp",
        },
        {
          name: "Savanna",
          imageUrl: "/vannila_biome_images/savanna.webp",
        },
        {
          name: "Snowy",
          imageUrl: "/vannila_biome_images/snowy.webp",
        },
        {
          name: "Swamp",
          imageUrl: "/vannila_biome_images/Swamp.webp",
        },
      ],
      loot: [
        {
          item: "Abyss Realmstone",
          itemId: "Itemizer.RealmstoneAbyss",
          quantity: 3,
          chance: 1,
          imageUrl: "/textures/items/realmstoneAbyss.png",
        },
        {
          item: "Blood Banner",
          itemId: "SpecialBlockizer.BloodBanner",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/banner/bloodBanner.png",
        },
      ],
      imageUrl: "/textures/mobs/bloodmist.png",
      model: "/models/overworld/bloodmist/bloodmist.gltf",
      health: 35,
    },
    {
      entity: "EntityLinger",
      weight: 35,
      min: 1,
      max: 2,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Beach",
          imageUrl: "/vannila_biome_images/Beach.webp",
        },
        {
          name: "Coniferous",
          imageUrl: "/vannila_biome_images/coniferous.webp",
        },
        {
          name: "Forest",
          imageUrl: "/vannila_biome_images/Forest.webp",
        },
        {
          name: "Hills",
          imageUrl: "/vannila_biome_images/hills.jpg",
        },
        {
          name: "Jungle",
          imageUrl: "/vannila_biome_images/jungle.webp",
        },
        {
          name: "Mesa",
          imageUrl: "/vannila_biome_images/mesa.webp",
        },
        {
          name: "Mountain",
          imageUrl: "/vannila_biome_images/mountain.jpg",
        },
        {
          name: "Plains",
          imageUrl: "/vannila_biome_images/Plains.webp",
        },
        {
          name: "Sandy",
          imageUrl: "/vannila_biome_images/sandy.webp",
        },
        {
          name: "Savanna",
          imageUrl: "/vannila_biome_images/savanna.webp",
        },
        {
          name: "Snowy",
          imageUrl: "/vannila_biome_images/snowy.webp",
        },
        {
          name: "Swamp",
          imageUrl: "/vannila_biome_images/Swamp.webp",
        },
      ],
      loot: [
        {
          item: "Abyss Realmstone",
          itemId: "Itemizer.RealmstoneAbyss",
          quantity: 3,
          chance: 1,
          imageUrl: "/textures/items/realmstoneAbyss.png",
        },
        {
          item: "Blood Banner",
          itemId: "SpecialBlockizer.BloodBanner",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/banner/bloodBanner.png",
        },
      ],
      imageUrl: "/textures/mobs/linger.png",
      model: "/models/overworld/linger/linger.gltf",
      health: 40,
    },
    {
      entity: "EntityHost",
      weight: 40,
      min: 1,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Beach",
          imageUrl: "/vannila_biome_images/Beach.webp",
        },
        {
          name: "Coniferous",
          imageUrl: "/vannila_biome_images/coniferous.webp",
        },
        {
          name: "Forest",
          imageUrl: "/vannila_biome_images/Forest.webp",
        },
        {
          name: "Hills",
          imageUrl: "/vannila_biome_images/hills.jpg",
        },
        {
          name: "Jungle",
          imageUrl: "/vannila_biome_images/jungle.webp",
        },
        {
          name: "Mesa",
          imageUrl: "/vannila_biome_images/mesa.webp",
        },
        {
          name: "Mountain",
          imageUrl: "/vannila_biome_images/mountain.jpg",
        },
        {
          name: "Plains",
          imageUrl: "/vannila_biome_images/Plains.webp",
        },
        {
          name: "Sandy",
          imageUrl: "/vannila_biome_images/sandy.webp",
        },
        {
          name: "Savanna",
          imageUrl: "/vannila_biome_images/savanna.webp",
        },
        {
          name: "Snowy",
          imageUrl: "/vannila_biome_images/snowy.webp",
        },
        {
          name: "Swamp",
          imageUrl: "/vannila_biome_images/Swamp.webp",
        },
      ],
      loot: [
        {
          item: "Creeponia Realmstone",
          itemId: "Itemizer.RealmstoneCreeponia",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/realmstoneCreeponia.png",
        },
        {
          item: "Items.gunpowder",
          itemId: "Items.gunpowder",
          quantity: 32,
          chance: 1,
          imageUrl: "/dimensions/dustopia_images/Gunpowder.png",
        },
      ],
      imageUrl: "/textures/mobs/host.png",
      model: "/models/overworld/host/host.gltf",
      health: 230,
    },
    {
      entity: "EntityDeathHunter",
      weight: 40,
      min: 1,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Beach",
          imageUrl: "/vannila_biome_images/Beach.webp",
        },
        {
          name: "Coniferous",
          imageUrl: "/vannila_biome_images/coniferous.webp",
        },
        {
          name: "Forest",
          imageUrl: "/vannila_biome_images/Forest.webp",
        },
        {
          name: "Hills",
          imageUrl: "/vannila_biome_images/hills.jpg",
        },
        {
          name: "Jungle",
          imageUrl: "/vannila_biome_images/jungle.webp",
        },
        {
          name: "Mesa",
          imageUrl: "/vannila_biome_images/mesa.webp",
        },
        {
          name: "Mountain",
          imageUrl: "/vannila_biome_images/mountain.jpg",
        },
        {
          name: "Plains",
          imageUrl: "/vannila_biome_images/Plains.webp",
        },
        {
          name: "Sandy",
          imageUrl: "/vannila_biome_images/sandy.webp",
        },
        {
          name: "Savanna",
          imageUrl: "/vannila_biome_images/savanna.webp",
        },
        {
          name: "Snowy",
          imageUrl: "/vannila_biome_images/snowy.webp",
        },
        {
          name: "Swamp",
          imageUrl: "/vannila_biome_images/Swamp.webp",
        },
      ],
      loot: [
        {
          item: "Immortallis Realmstone",
          itemId: "Itemizer.RealmstoneImmortallis",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/realmstoneImmortallis.png",
        },
      ],
      imageUrl: "/textures/mobs/deathHunter.png",
      model: "/models/overworld/death-hunter/death-hunter.gltf",
      health: 200,
    },
    {
      entity: "EntityWoodGiant",
      weight: 30,
      min: 1,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Beach",
          imageUrl: "/vannila_biome_images/Beach.webp",
        },
        {
          name: "Coniferous",
          imageUrl: "/vannila_biome_images/coniferous.webp",
        },
        {
          name: "Forest",
          imageUrl: "/vannila_biome_images/Forest.webp",
        },
        {
          name: "Hills",
          imageUrl: "/vannila_biome_images/hills.jpg",
        },
        {
          name: "Jungle",
          imageUrl: "/vannila_biome_images/jungle.webp",
        },
        {
          name: "Mesa",
          imageUrl: "/vannila_biome_images/mesa.webp",
        },
        {
          name: "Mountain",
          imageUrl: "/vannila_biome_images/mountain.jpg",
        },
        {
          name: "Plains",
          imageUrl: "/vannila_biome_images/Plains.webp",
        },
        {
          name: "Sandy",
          imageUrl: "/vannila_biome_images/sandy.webp",
        },
        {
          name: "Savanna",
          imageUrl: "/vannila_biome_images/savanna.webp",
        },
        {
          name: "Snowy",
          imageUrl: "/vannila_biome_images/snowy.webp",
        },
        {
          name: "Swamp",
          imageUrl: "/vannila_biome_images/Swamp.webp",
        },
      ],
      loot: [
        {
          item: "Blocks.log",
          itemId: "Blocks.log",
          quantity: 32,
          chance: 1,
          imageUrl: "/dimensions/abyss_images/Shadow_Log.png",
        },
      ],
      imageUrl: "/textures/mobs/woodGiant.png",
      model: "/models/overworld/wood-giant/wood-giant.gltf",
      health: 150,
    },
    {
      entity: "EntityTriclops",
      weight: 35,
      min: 1,
      max: 2,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Beach",
          imageUrl: "/vannila_biome_images/Beach.webp",
        },
        {
          name: "Coniferous",
          imageUrl: "/vannila_biome_images/coniferous.webp",
        },
        {
          name: "Forest",
          imageUrl: "/vannila_biome_images/Forest.webp",
        },
        {
          name: "Hills",
          imageUrl: "/vannila_biome_images/hills.jpg",
        },
        {
          name: "Jungle",
          imageUrl: "/vannila_biome_images/jungle.webp",
        },
        {
          name: "Mesa",
          imageUrl: "/vannila_biome_images/mesa.webp",
        },
        {
          name: "Mountain",
          imageUrl: "/vannila_biome_images/mountain.jpg",
        },
        {
          name: "Plains",
          imageUrl: "/vannila_biome_images/Plains.webp",
        },
        {
          name: "Sandy",
          imageUrl: "/vannila_biome_images/sandy.webp",
        },
        {
          name: "Savanna",
          imageUrl: "/vannila_biome_images/savanna.webp",
        },
        {
          name: "Snowy",
          imageUrl: "/vannila_biome_images/snowy.webp",
        },
        {
          name: "Swamp",
          imageUrl: "/vannila_biome_images/Swamp.webp",
        },
      ],
      loot: [],
      imageUrl: "/textures/mobs/triclops.png",
      model: "/models/overworld/triclops/triclops.gltf",
      health: 100,
    },
    {
      entity: "EntityHeadlessDestroyer",
      weight: 35,
      min: 1,
      max: 2,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Beach",
          imageUrl: "/vannila_biome_images/Beach.webp",
        },
        {
          name: "Coniferous",
          imageUrl: "/vannila_biome_images/coniferous.webp",
        },
        {
          name: "Forest",
          imageUrl: "/vannila_biome_images/Forest.webp",
        },
        {
          name: "Hills",
          imageUrl: "/vannila_biome_images/hills.jpg",
        },
        {
          name: "Jungle",
          imageUrl: "/vannila_biome_images/jungle.webp",
        },
        {
          name: "Mesa",
          imageUrl: "/vannila_biome_images/mesa.webp",
        },
        {
          name: "Mountain",
          imageUrl: "/vannila_biome_images/mountain.jpg",
        },
        {
          name: "Plains",
          imageUrl: "/vannila_biome_images/Plains.webp",
        },
        {
          name: "Sandy",
          imageUrl: "/vannila_biome_images/sandy.webp",
        },
        {
          name: "Savanna",
          imageUrl: "/vannila_biome_images/savanna.webp",
        },
        {
          name: "Snowy",
          imageUrl: "/vannila_biome_images/snowy.webp",
        },
        {
          name: "Swamp",
          imageUrl: "/vannila_biome_images/Swamp.webp",
        },
      ],
      loot: [
        {
          item: "Copper Coin",
          itemId: "Itemizer.CopperCoin",
          minQuantity: 1,
          maxQuantity: 1,
          chance: 1,
          imageUrl: "/dimensions/dustopia_images/Copper_Coin.png",
        },
      ],
      imageUrl: "/textures/mobs/headlessDestroyer.png",
      model: "/models/overworld/headless-destroyer/headless-destroyer.gltf",
      hunterLevelRequirement: 0,
      health: 140,
    },
    {
      entity: "EntityReaperTwins",
      weight: 35,
      min: 1,
      max: 2,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Beach",
          imageUrl: "/vannila_biome_images/Beach.webp",
        },
        {
          name: "Coniferous",
          imageUrl: "/vannila_biome_images/coniferous.webp",
        },
        {
          name: "Forest",
          imageUrl: "/vannila_biome_images/Forest.webp",
        },
        {
          name: "Hills",
          imageUrl: "/vannila_biome_images/hills.jpg",
        },
        {
          name: "Jungle",
          imageUrl: "/vannila_biome_images/jungle.webp",
        },
        {
          name: "Mesa",
          imageUrl: "/vannila_biome_images/mesa.webp",
        },
        {
          name: "Mountain",
          imageUrl: "/vannila_biome_images/mountain.jpg",
        },
        {
          name: "Plains",
          imageUrl: "/vannila_biome_images/Plains.webp",
        },
        {
          name: "Sandy",
          imageUrl: "/vannila_biome_images/sandy.webp",
        },
        {
          name: "Savanna",
          imageUrl: "/vannila_biome_images/savanna.webp",
        },
        {
          name: "Snowy",
          imageUrl: "/vannila_biome_images/snowy.webp",
        },
        {
          name: "Swamp",
          imageUrl: "/vannila_biome_images/Swamp.webp",
        },
      ],
      loot: [
        {
          item: "Copper Coin",
          itemId: "Itemizer.CopperCoin",
          minQuantity: 1,
          maxQuantity: 1,
          chance: 0.5,
          imageUrl: "/dimensions/dustopia_images/Copper_Coin.png",
        },
      ],
      imageUrl: "/textures/mobs/reaperTwins.png",
      model: "/models/overworld/reaper-twins/reaper-twins.gltf",
      health: 100,
    },
    {
      entity: "EntityGhostlyCharger",
      weight: 70,
      min: 1,
      max: 2,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Beach",
          imageUrl: "/vannila_biome_images/Beach.webp",
        },
        {
          name: "Coniferous",
          imageUrl: "/vannila_biome_images/coniferous.webp",
        },
        {
          name: "Forest",
          imageUrl: "/vannila_biome_images/Forest.webp",
        },
        {
          name: "Hills",
          imageUrl: "/vannila_biome_images/hills.jpg",
        },
        {
          name: "Jungle",
          imageUrl: "/vannila_biome_images/jungle.webp",
        },
        {
          name: "Mesa",
          imageUrl: "/vannila_biome_images/mesa.webp",
        },
        {
          name: "Mountain",
          imageUrl: "/vannila_biome_images/mountain.jpg",
        },
        {
          name: "Plains",
          imageUrl: "/vannila_biome_images/Plains.webp",
        },
        {
          name: "Sandy",
          imageUrl: "/vannila_biome_images/sandy.webp",
        },
        {
          name: "Savanna",
          imageUrl: "/vannila_biome_images/savanna.webp",
        },
        {
          name: "Snowy",
          imageUrl: "/vannila_biome_images/snowy.webp",
        },
        {
          name: "Swamp",
          imageUrl: "/vannila_biome_images/Swamp.webp",
        },
      ],
      loot: [
        {
          item: "Ghostly Stone",
          itemId: "Itemizer.GhostStone",
          quantity: 4,
          chance: 0.3333333333333333,
          imageUrl: "/textures/items/ghostStone.png",
          itemName: "Ghostly Stone",
        },
      ],
      imageUrl: "",
      model: "/models/overworld/ghostly-charger/ghostly-charger.gltf",
      health: 20,
    },
    {
      entity: "EntityGhostlyCyclops",
      weight: 70,
      min: 1,
      max: 2,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Beach",
          imageUrl: "/vannila_biome_images/Beach.webp",
        },
        {
          name: "Coniferous",
          imageUrl: "/vannila_biome_images/coniferous.webp",
        },
        {
          name: "Forest",
          imageUrl: "/vannila_biome_images/Forest.webp",
        },
        {
          name: "Hills",
          imageUrl: "/vannila_biome_images/hills.jpg",
        },
        {
          name: "Jungle",
          imageUrl: "/vannila_biome_images/jungle.webp",
        },
        {
          name: "Mesa",
          imageUrl: "/vannila_biome_images/mesa.webp",
        },
        {
          name: "Mountain",
          imageUrl: "/vannila_biome_images/mountain.jpg",
        },
        {
          name: "Plains",
          imageUrl: "/vannila_biome_images/Plains.webp",
        },
        {
          name: "Sandy",
          imageUrl: "/vannila_biome_images/sandy.webp",
        },
        {
          name: "Savanna",
          imageUrl: "/vannila_biome_images/savanna.webp",
        },
        {
          name: "Snowy",
          imageUrl: "/vannila_biome_images/snowy.webp",
        },
        {
          name: "Swamp",
          imageUrl: "/vannila_biome_images/Swamp.webp",
        },
      ],
      loot: [
        {
          item: "Ghostly Stone",
          itemId: "Itemizer.GhostStone",
          quantity: 4,
          chance: 0.3333333333333333,
          imageUrl: "/textures/items/ghostStone.png",
          itemName: "Ghostly Stone",
        },
      ],
      imageUrl: "",
      model: "/models/overworld/ghostly-cyclops/ghostly-cyclops.gltf",
      health: 75,
    },
    {
      entity: "EntityGhostlyGoblin",
      weight: 70,
      min: 1,
      max: 2,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Beach",
          imageUrl: "/vannila_biome_images/Beach.webp",
        },
        {
          name: "Coniferous",
          imageUrl: "/vannila_biome_images/coniferous.webp",
        },
        {
          name: "Forest",
          imageUrl: "/vannila_biome_images/Forest.webp",
        },
        {
          name: "Hills",
          imageUrl: "/vannila_biome_images/hills.jpg",
        },
        {
          name: "Jungle",
          imageUrl: "/vannila_biome_images/jungle.webp",
        },
        {
          name: "Mesa",
          imageUrl: "/vannila_biome_images/mesa.webp",
        },
        {
          name: "Mountain",
          imageUrl: "/vannila_biome_images/mountain.jpg",
        },
        {
          name: "Plains",
          imageUrl: "/vannila_biome_images/Plains.webp",
        },
        {
          name: "Sandy",
          imageUrl: "/vannila_biome_images/sandy.webp",
        },
        {
          name: "Savanna",
          imageUrl: "/vannila_biome_images/savanna.webp",
        },
        {
          name: "Snowy",
          imageUrl: "/vannila_biome_images/snowy.webp",
        },
        {
          name: "Swamp",
          imageUrl: "/vannila_biome_images/Swamp.webp",
        },
      ],
      loot: [
        {
          item: "Ghostly Stone",
          itemId: "Itemizer.GhostStone",
          quantity: 4,
          chance: 0.3333333333333333,
          imageUrl: "/textures/items/ghostStone.png",
          itemName: "Ghostly Stone",
        },
      ],
      imageUrl: "",
      model: "/models/overworld/ghostly-goblin/ghostly-goblin.gltf",
      health: 30,
    },
    {
      entity: "EntityGhostlyBugeye",
      weight: 70,
      min: 1,
      max: 2,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Beach",
          imageUrl: "/vannila_biome_images/Beach.webp",
        },
        {
          name: "Coniferous",
          imageUrl: "/vannila_biome_images/coniferous.webp",
        },
        {
          name: "Forest",
          imageUrl: "/vannila_biome_images/Forest.webp",
        },
        {
          name: "Hills",
          imageUrl: "/vannila_biome_images/hills.jpg",
        },
        {
          name: "Jungle",
          imageUrl: "/vannila_biome_images/jungle.webp",
        },
        {
          name: "Mesa",
          imageUrl: "/vannila_biome_images/mesa.webp",
        },
        {
          name: "Mountain",
          imageUrl: "/vannila_biome_images/mountain.jpg",
        },
        {
          name: "Plains",
          imageUrl: "/vannila_biome_images/Plains.webp",
        },
        {
          name: "Sandy",
          imageUrl: "/vannila_biome_images/sandy.webp",
        },
        {
          name: "Savanna",
          imageUrl: "/vannila_biome_images/savanna.webp",
        },
        {
          name: "Snowy",
          imageUrl: "/vannila_biome_images/snowy.webp",
        },
        {
          name: "Swamp",
          imageUrl: "/vannila_biome_images/Swamp.webp",
        },
      ],
      loot: [
        {
          item: "Ghostly Stone",
          itemId: "Itemizer.GhostStone",
          quantity: 4,
          chance: 0.3333333333333333,
          imageUrl: "/textures/items/ghostStone.png",
          itemName: "Ghostly Stone",
        },
      ],
      imageUrl: "",
      model: "/models/overworld/ghostly-bugeye/ghostly-bugeye.gltf",
      health: 100,
    },
    {
      entity: "EntityGhostlyNightReaper",
      weight: 70,
      min: 1,
      max: 2,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Beach",
          imageUrl: "/vannila_biome_images/Beach.webp",
        },
        {
          name: "Coniferous",
          imageUrl: "/vannila_biome_images/coniferous.webp",
        },
        {
          name: "Forest",
          imageUrl: "/vannila_biome_images/Forest.webp",
        },
        {
          name: "Hills",
          imageUrl: "/vannila_biome_images/hills.jpg",
        },
        {
          name: "Jungle",
          imageUrl: "/vannila_biome_images/jungle.webp",
        },
        {
          name: "Mesa",
          imageUrl: "/vannila_biome_images/mesa.webp",
        },
        {
          name: "Mountain",
          imageUrl: "/vannila_biome_images/mountain.jpg",
        },
        {
          name: "Plains",
          imageUrl: "/vannila_biome_images/Plains.webp",
        },
        {
          name: "Sandy",
          imageUrl: "/vannila_biome_images/sandy.webp",
        },
        {
          name: "Savanna",
          imageUrl: "/vannila_biome_images/savanna.webp",
        },
        {
          name: "Snowy",
          imageUrl: "/vannila_biome_images/snowy.webp",
        },
        {
          name: "Swamp",
          imageUrl: "/vannila_biome_images/Swamp.webp",
        },
      ],
      loot: [
        {
          item: "Ghostly Stone",
          itemId: "Itemizer.GhostStone",
          quantity: 4,
          chance: 0.3333333333333333,
          imageUrl: "/textures/items/ghostStone.png",
          itemName: "Ghostly Stone",
        },
      ],
      imageUrl: "",
      model: "/models/overworld/ghostly-night-reaper/ghostly-night-reaper.gltf",
      health: 50,
    },
    {
      entity: "EntityGhostlySasquatch",
      weight: 70,
      min: 1,
      max: 2,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Beach",
          imageUrl: "/vannila_biome_images/Beach.webp",
        },
        {
          name: "Coniferous",
          imageUrl: "/vannila_biome_images/coniferous.webp",
        },
        {
          name: "Forest",
          imageUrl: "/vannila_biome_images/Forest.webp",
        },
        {
          name: "Hills",
          imageUrl: "/vannila_biome_images/hills.jpg",
        },
        {
          name: "Jungle",
          imageUrl: "/vannila_biome_images/jungle.webp",
        },
        {
          name: "Mesa",
          imageUrl: "/vannila_biome_images/mesa.webp",
        },
        {
          name: "Mountain",
          imageUrl: "/vannila_biome_images/mountain.jpg",
        },
        {
          name: "Plains",
          imageUrl: "/vannila_biome_images/Plains.webp",
        },
        {
          name: "Sandy",
          imageUrl: "/vannila_biome_images/sandy.webp",
        },
        {
          name: "Savanna",
          imageUrl: "/vannila_biome_images/savanna.webp",
        },
        {
          name: "Snowy",
          imageUrl: "/vannila_biome_images/snowy.webp",
        },
        {
          name: "Swamp",
          imageUrl: "/vannila_biome_images/Swamp.webp",
        },
      ],
      loot: [
        {
          item: "Ghostly Stone",
          itemId: "Itemizer.GhostStone",
          quantity: 4,
          chance: 0.3333333333333333,
          imageUrl: "/textures/items/ghostStone.png",
          itemName: "Ghostly Stone",
        },
      ],
      imageUrl: "",
      model: "/models/overworld/ghostly-sasquatch/ghostly-sasquatch.gltf",
      health: 30,
    },
    {
      entity: "EntityModulo",
      weight: 70,
      min: 1,
      max: 2,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Beach",
          imageUrl: "/vannila_biome_images/Beach.webp",
        },
        {
          name: "Coniferous",
          imageUrl: "/vannila_biome_images/coniferous.webp",
        },
        {
          name: "Forest",
          imageUrl: "/vannila_biome_images/Forest.webp",
        },
        {
          name: "Hills",
          imageUrl: "/vannila_biome_images/hills.jpg",
        },
        {
          name: "Jungle",
          imageUrl: "/vannila_biome_images/jungle.webp",
        },
        {
          name: "Mesa",
          imageUrl: "/vannila_biome_images/mesa.webp",
        },
        {
          name: "Mountain",
          imageUrl: "/vannila_biome_images/mountain.jpg",
        },
        {
          name: "Plains",
          imageUrl: "/vannila_biome_images/Plains.webp",
        },
        {
          name: "Sandy",
          imageUrl: "/vannila_biome_images/sandy.webp",
        },
        {
          name: "Savanna",
          imageUrl: "/vannila_biome_images/savanna.webp",
        },
        {
          name: "Snowy",
          imageUrl: "/vannila_biome_images/snowy.webp",
        },
        {
          name: "Swamp",
          imageUrl: "/vannila_biome_images/Swamp.webp",
        },
      ],
      loot: [
        {
          item: "Orbulon",
          itemId: "Itemizer.Orbulon",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/orbulon.png",
        },
      ],
      imageUrl: "/textures/mobs/modulo.png",
      model: "/models/overworld/modulo/modulo.gltf",
      health: 90,
    },
    {
      entity: "EntityWalker",
      weight: 70,
      min: 1,
      max: 2,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Beach",
          imageUrl: "/vannila_biome_images/Beach.webp",
        },
        {
          name: "Coniferous",
          imageUrl: "/vannila_biome_images/coniferous.webp",
        },
        {
          name: "Forest",
          imageUrl: "/vannila_biome_images/Forest.webp",
        },
        {
          name: "Hills",
          imageUrl: "/vannila_biome_images/hills.jpg",
        },
        {
          name: "Jungle",
          imageUrl: "/vannila_biome_images/jungle.webp",
        },
        {
          name: "Mesa",
          imageUrl: "/vannila_biome_images/mesa.webp",
        },
        {
          name: "Mountain",
          imageUrl: "/vannila_biome_images/mountain.jpg",
        },
        {
          name: "Plains",
          imageUrl: "/vannila_biome_images/Plains.webp",
        },
        {
          name: "Sandy",
          imageUrl: "/vannila_biome_images/sandy.webp",
        },
        {
          name: "Savanna",
          imageUrl: "/vannila_biome_images/savanna.webp",
        },
        {
          name: "Snowy",
          imageUrl: "/vannila_biome_images/snowy.webp",
        },
        {
          name: "Swamp",
          imageUrl: "/vannila_biome_images/Swamp.webp",
        },
      ],
      loot: [
        {
          item: "Orbulon",
          itemId: "Itemizer.Orbulon",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/orbulon.png",
        },
      ],
      imageUrl: "/textures/mobs/walker.png",
      model: "/models/overworld/walker/walker.gltf",
      health: 90,
    },
    {
      entity: "EntityVertebron",
      weight: 70,
      min: 1,
      max: 2,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Beach",
          imageUrl: "/vannila_biome_images/Beach.webp",
        },
        {
          name: "Coniferous",
          imageUrl: "/vannila_biome_images/coniferous.webp",
        },
        {
          name: "Forest",
          imageUrl: "/vannila_biome_images/Forest.webp",
        },
        {
          name: "Hills",
          imageUrl: "/vannila_biome_images/hills.jpg",
        },
        {
          name: "Jungle",
          imageUrl: "/vannila_biome_images/jungle.webp",
        },
        {
          name: "Mesa",
          imageUrl: "/vannila_biome_images/mesa.webp",
        },
        {
          name: "Mountain",
          imageUrl: "/vannila_biome_images/mountain.jpg",
        },
        {
          name: "Plains",
          imageUrl: "/vannila_biome_images/Plains.webp",
        },
        {
          name: "Sandy",
          imageUrl: "/vannila_biome_images/sandy.webp",
        },
        {
          name: "Savanna",
          imageUrl: "/vannila_biome_images/savanna.webp",
        },
        {
          name: "Snowy",
          imageUrl: "/vannila_biome_images/snowy.webp",
        },
        {
          name: "Swamp",
          imageUrl: "/vannila_biome_images/Swamp.webp",
        },
      ],
      loot: [
        {
          item: "Orbulon",
          itemId: "Itemizer.Orbulon",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/orbulon.png",
        },
      ],
      imageUrl: "/textures/mobs/vertebron.png",
      model: "/models/overworld/vertebron/vertebron.gltf",
      health: 60,
    },
    {
      entity: "EntityRoloscope",
      weight: 70,
      min: 1,
      max: 2,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Beach",
          imageUrl: "/vannila_biome_images/Beach.webp",
        },
        {
          name: "Coniferous",
          imageUrl: "/vannila_biome_images/coniferous.webp",
        },
        {
          name: "Forest",
          imageUrl: "/vannila_biome_images/Forest.webp",
        },
        {
          name: "Hills",
          imageUrl: "/vannila_biome_images/hills.jpg",
        },
        {
          name: "Jungle",
          imageUrl: "/vannila_biome_images/jungle.webp",
        },
        {
          name: "Mesa",
          imageUrl: "/vannila_biome_images/mesa.webp",
        },
        {
          name: "Mountain",
          imageUrl: "/vannila_biome_images/mountain.jpg",
        },
        {
          name: "Plains",
          imageUrl: "/vannila_biome_images/Plains.webp",
        },
        {
          name: "Sandy",
          imageUrl: "/vannila_biome_images/sandy.webp",
        },
        {
          name: "Savanna",
          imageUrl: "/vannila_biome_images/savanna.webp",
        },
        {
          name: "Snowy",
          imageUrl: "/vannila_biome_images/snowy.webp",
        },
        {
          name: "Swamp",
          imageUrl: "/vannila_biome_images/Swamp.webp",
        },
      ],
      loot: [
        {
          item: "Orbulon",
          itemId: "Itemizer.Orbulon",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/orbulon.png",
        },
      ],
      imageUrl: "/textures/mobs/roloscope.png",
      model: "/models/overworld/roloscope/roloscope.gltf",
      health: 90,
    },
    {
      entity: "EntityIrkling",
      weight: 70,
      min: 1,
      max: 2,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Beach",
          imageUrl: "/vannila_biome_images/Beach.webp",
        },
        {
          name: "Coniferous",
          imageUrl: "/vannila_biome_images/coniferous.webp",
        },
        {
          name: "Forest",
          imageUrl: "/vannila_biome_images/Forest.webp",
        },
        {
          name: "Hills",
          imageUrl: "/vannila_biome_images/hills.jpg",
        },
        {
          name: "Jungle",
          imageUrl: "/vannila_biome_images/jungle.webp",
        },
        {
          name: "Mesa",
          imageUrl: "/vannila_biome_images/mesa.webp",
        },
        {
          name: "Mountain",
          imageUrl: "/vannila_biome_images/mountain.jpg",
        },
        {
          name: "Plains",
          imageUrl: "/vannila_biome_images/Plains.webp",
        },
        {
          name: "Sandy",
          imageUrl: "/vannila_biome_images/sandy.webp",
        },
        {
          name: "Savanna",
          imageUrl: "/vannila_biome_images/savanna.webp",
        },
        {
          name: "Snowy",
          imageUrl: "/vannila_biome_images/snowy.webp",
        },
        {
          name: "Swamp",
          imageUrl: "/vannila_biome_images/Swamp.webp",
        },
      ],
      loot: [
        {
          item: "Orbulon",
          itemId: "Itemizer.Orbulon",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/orbulon.png",
        },
      ],
      imageUrl: "/textures/mobs/irkling.png",
      model: "/models/overworld/irkling/irkling.gltf",
      health: 135,
    },
    {
      entity: "EntityAmphibiyte",
      imageUrl: "/textures/mobs/amphibiyte.png",
      model: "/models/overworld/amphibiyte/amphibiyte.gltf",
      health: 60,
      weight: 20,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Beach",
          imageUrl: "/vannila_biome_images/Beach.webp",
        },
        {
          name: "Coniferous",
          imageUrl: "/vannila_biome_images/coniferous.webp",
        },
        {
          name: "Forest",
          imageUrl: "/vannila_biome_images/Forest.webp",
        },
        {
          name: "Hills",
          imageUrl: "/vannila_biome_images/hills.jpg",
        },
        {
          name: "Jungle",
          imageUrl: "/vannila_biome_images/jungle.webp",
        },
        {
          name: "Mesa",
          imageUrl: "/vannila_biome_images/mesa.webp",
        },
        {
          name: "Mountain",
          imageUrl: "/vannila_biome_images/mountain.jpg",
        },
        {
          name: "Plains",
          imageUrl: "/vannila_biome_images/Plains.webp",
        },
        {
          name: "Sandy",
          imageUrl: "/vannila_biome_images/sandy.webp",
        },
        {
          name: "Savanna",
          imageUrl: "/vannila_biome_images/savanna.webp",
        },
        {
          name: "Snowy",
          imageUrl: "/vannila_biome_images/snowy.webp",
        },
        {
          name: "Swamp",
          imageUrl: "/vannila_biome_images/Swamp.webp",
        },
        {
          name: "Ocean",
          imageUrl: "/vannila_biome_images/Ocean.webp",
        },
      ],
      loot: [
        {
          item: "Amphibiyte Lung",
          itemId: "Itemizer.AmphibiyteLung",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/amphibiyteLung.png",
          itemName: "Amphibiyte Lung",
        },
      ],
    },
    {
      entity: "EntityDarkbeast",
      imageUrl: "/textures/mobs/darkbeast.png",
      model: "/models/overworld/darkbeast/darkbeast.gltf",
      health: 150,
      weight: 20,
      min: 1,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Beach",
          imageUrl: "/vannila_biome_images/Beach.webp",
        },
        {
          name: "Coniferous",
          imageUrl: "/vannila_biome_images/coniferous.webp",
        },
        {
          name: "Forest",
          imageUrl: "/vannila_biome_images/Forest.webp",
        },
        {
          name: "Hills",
          imageUrl: "/vannila_biome_images/hills.jpg",
        },
        {
          name: "Jungle",
          imageUrl: "/vannila_biome_images/jungle.webp",
        },
        {
          name: "Mesa",
          imageUrl: "/vannila_biome_images/mesa.webp",
        },
        {
          name: "Mountain",
          imageUrl: "/vannila_biome_images/mountain.jpg",
        },
        {
          name: "Plains",
          imageUrl: "/vannila_biome_images/Plains.webp",
        },
        {
          name: "Sandy",
          imageUrl: "/vannila_biome_images/sandy.webp",
        },
        {
          name: "Savanna",
          imageUrl: "/vannila_biome_images/savanna.webp",
        },
        {
          name: "Snowy",
          imageUrl: "/vannila_biome_images/snowy.webp",
        },
        {
          name: "Swamp",
          imageUrl: "/vannila_biome_images/Swamp.webp",
        },
        {
          name: "Ocean",
          imageUrl: "/vannila_biome_images/Ocean.webp",
        },
      ],
      loot: [
        {
          item: "Moon Shiner",
          itemId: "Weaponizer.MoonShiner",
          quantity: 1,
          chance: 0.02,
          imageUrl: "/textures/items/moonShiner.png",
          itemName: "Moon Shiner",
        },
        {
          item: "Scream Shield",
          itemId: "Itemizer.ScreamShield",
          quantity: 1,
          chance: 0.07142857142857142,
          imageUrl: "/textures/items/screamShield.png",
          itemName: "Scream Shield",
        },
        {
          item: "Soul Banner [Retro]",
          itemId: "SpecialBlockizer.SoulBanner",
          quantity: 1,
          chance: 0.14285714285714285,
          imageUrl: "/textures/banner/soulBanner.png",
          itemName: "Soul Banner [Retro]",
        },
        {
          item: "Moondust",
          itemId: "Itemizer.Moonstone",
          quantity: 1,
          chance: 0.5,
          imageUrl: "/textures/items/moonstone.png",
          itemName: "Moondust",
        },
        {
          item: "Copper Coin",
          itemId: "Itemizer.CopperCoin",
          quantity: 5,
          chance: 1,
          imageUrl: "/textures/items/coinCopper.png",
          itemName: "Copper Coin",
        },
        {
          item: "Moondust",
          itemId: "Itemizer.Moonstone",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/moonstone.png",
          itemName: "Moondust",
        },
        {
          item: "Moon Shiner",
          itemId: "Weaponizer.MoonShiner",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/moonShiner.png",
          itemName: "Moon Shiner",
        },
        {
          item: "Scream Shield",
          itemId: "Itemizer.ScreamShield",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/screamShield.png",
          itemName: "Scream Shield",
        },
      ],
    },
    {
      entity: "EntityFakeTnt",
      imageUrl: "/textures/mobs/faketnt.png",
      model: "/models/overworld/fake-tnt/fake-tnt.gltf",
      weight: 20,
      min: 1,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Beach",
          imageUrl: "/vannila_biome_images/Beach.webp",
        },
        {
          name: "Coniferous",
          imageUrl: "/vannila_biome_images/coniferous.webp",
        },
        {
          name: "Forest",
          imageUrl: "/vannila_biome_images/Forest.webp",
        },
        {
          name: "Hills",
          imageUrl: "/vannila_biome_images/hills.jpg",
        },
        {
          name: "Jungle",
          imageUrl: "/vannila_biome_images/jungle.webp",
        },
        {
          name: "Mesa",
          imageUrl: "/vannila_biome_images/mesa.webp",
        },
        {
          name: "Mountain",
          imageUrl: "/vannila_biome_images/mountain.jpg",
        },
        {
          name: "Plains",
          imageUrl: "/vannila_biome_images/Plains.webp",
        },
        {
          name: "Sandy",
          imageUrl: "/vannila_biome_images/sandy.webp",
        },
        {
          name: "Savanna",
          imageUrl: "/vannila_biome_images/savanna.webp",
        },
        {
          name: "Snowy",
          imageUrl: "/vannila_biome_images/snowy.webp",
        },
        {
          name: "Swamp",
          imageUrl: "/vannila_biome_images/Swamp.webp",
        },
        {
          name: "Ocean",
          imageUrl: "/vannila_biome_images/Ocean.webp",
        },
      ],
    },
    {
      entity: "EntityGiant",
      imageUrl: "/textures/mobs/giant.png",
      model: "/models/overworld/giant/giant.gltf",
    },
    {
      entity: "EntityLivingFungi",
      imageUrl: "/textures/mobs/livingfungi.png",
      model: "/models/overworld/living-fungi/living-fungi.gltf",
      health: 200,
      weight: 0,
      min: 1,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Beach",
          imageUrl: "/vannila_biome_images/Beach.webp",
        },
        {
          name: "Coniferous",
          imageUrl: "/vannila_biome_images/coniferous.webp",
        },
        {
          name: "Forest",
          imageUrl: "/vannila_biome_images/Forest.webp",
        },
        {
          name: "Hills",
          imageUrl: "/vannila_biome_images/hills.jpg",
        },
        {
          name: "Jungle",
          imageUrl: "/vannila_biome_images/jungle.webp",
        },
        {
          name: "Mesa",
          imageUrl: "/vannila_biome_images/mesa.webp",
        },
        {
          name: "Mountain",
          imageUrl: "/vannila_biome_images/mountain.jpg",
        },
        {
          name: "Plains",
          imageUrl: "/vannila_biome_images/Plains.webp",
        },
        {
          name: "Sandy",
          imageUrl: "/vannila_biome_images/sandy.webp",
        },
        {
          name: "Savanna",
          imageUrl: "/vannila_biome_images/savanna.webp",
        },
        {
          name: "Snowy",
          imageUrl: "/vannila_biome_images/snowy.webp",
        },
        {
          name: "Swamp",
          imageUrl: "/vannila_biome_images/Swamp.webp",
        },
        {
          name: "Ocean",
          imageUrl: "/vannila_biome_images/Ocean.webp",
        },
      ],
      loot: [
        {
          item: "Biogenic Chestplate",
          itemId: "Armorizer.BiogenicChestplate",
          quantity: 1,
          chance: 0.016666666666666666,
          imageUrl: "/textures/items/chestplateBiogenic.png",
          itemName: "Biogenic Chestplate",
        },
        {
          item: "Biogenic Leggings",
          itemId: "Armorizer.BiogenicLeggings",
          quantity: 1,
          chance: 0.016666666666666666,
          imageUrl: "/textures/items/biogenicLeggings.png",
          itemName: "Biogenic Leggings",
        },
        {
          item: "Biogenic Helmet",
          itemId: "Armorizer.BiogenicHelmet",
          quantity: 1,
          chance: 0.016666666666666666,
          imageUrl: "/textures/models/armor/oceanus_helmet.png",
          itemName: "Biogenic Helmet",
        },
        {
          item: "Biogenic Boots",
          itemId: "Armorizer.BiogenicBoots",
          quantity: 1,
          chance: 0.016666666666666666,
          imageUrl: "/textures/items/bootsBiogenic.png",
          itemName: "Biogenic Boots",
        },
        {
          item: "M-K",
          itemId: "Weaponizer.MK",
          quantity: 1,
          chance: 0.01,
          imageUrl: "/textures/items/mk.png",
          itemName: "M-K",
        },
      ],
    },
    {
      entity: "EntityMegaGuardian",
      imageUrl: "/textures/mobs/megaguardian.png",
      model: "/models/overworld/mega-guardian/mega-guardian.gltf",
      health: 150,
      weight: 20,
      min: 1,
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
      ],
      loot: [
        {
          item: "Krasaun's Dawn",
          itemId: "Weaponizer.KrasaunsDawn",
          quantity: 1,
          chance: 0.006666666666666667,
          imageUrl: "/textures/items/krasaunsDawn.png",
          itemName: "Krasaun's Dawn",
        },
      ],
    },
    {
      entity: "EntitySeaSkeleton",
      imageUrl: "/textures/mobs/seaskeleton.png",
      model: "/models/overworld/sea-skeleton/sea-skeleton.gltf",
      health: 60,
      weight: 20,
      min: 1,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Beach",
          imageUrl: "/vannila_biome_images/Beach.webp",
        },
        {
          name: "Coniferous",
          imageUrl: "/vannila_biome_images/coniferous.webp",
        },
        {
          name: "Forest",
          imageUrl: "/vannila_biome_images/Forest.webp",
        },
        {
          name: "Hills",
          imageUrl: "/vannila_biome_images/hills.jpg",
        },
        {
          name: "Jungle",
          imageUrl: "/vannila_biome_images/jungle.webp",
        },
        {
          name: "Mesa",
          imageUrl: "/vannila_biome_images/mesa.webp",
        },
        {
          name: "Mountain",
          imageUrl: "/vannila_biome_images/mountain.jpg",
        },
        {
          name: "Plains",
          imageUrl: "/vannila_biome_images/Plains.webp",
        },
        {
          name: "Sandy",
          imageUrl: "/vannila_biome_images/sandy.webp",
        },
        {
          name: "Savanna",
          imageUrl: "/vannila_biome_images/savanna.webp",
        },
        {
          name: "Snowy",
          imageUrl: "/vannila_biome_images/snowy.webp",
        },
        {
          name: "Swamp",
          imageUrl: "/vannila_biome_images/Swamp.webp",
        },
        {
          name: "Ocean",
          imageUrl: "/vannila_biome_images/Ocean.webp",
        },
      ],
    },
    {
      entity: "EntitySeaSpider",
      imageUrl: "/textures/mobs/seaspider.png",
      model: "/models/overworld/sea-spider/sea-spider.gltf",
      health: 70,
      weight: 20,
      min: 1,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Beach",
          imageUrl: "/vannila_biome_images/Beach.webp",
        },
        {
          name: "Coniferous",
          imageUrl: "/vannila_biome_images/coniferous.webp",
        },
        {
          name: "Forest",
          imageUrl: "/vannila_biome_images/Forest.webp",
        },
        {
          name: "Hills",
          imageUrl: "/vannila_biome_images/hills.jpg",
        },
        {
          name: "Jungle",
          imageUrl: "/vannila_biome_images/jungle.webp",
        },
        {
          name: "Mesa",
          imageUrl: "/vannila_biome_images/mesa.webp",
        },
        {
          name: "Mountain",
          imageUrl: "/vannila_biome_images/mountain.jpg",
        },
        {
          name: "Plains",
          imageUrl: "/vannila_biome_images/Plains.webp",
        },
        {
          name: "Sandy",
          imageUrl: "/vannila_biome_images/sandy.webp",
        },
        {
          name: "Savanna",
          imageUrl: "/vannila_biome_images/savanna.webp",
        },
        {
          name: "Snowy",
          imageUrl: "/vannila_biome_images/snowy.webp",
        },
        {
          name: "Swamp",
          imageUrl: "/vannila_biome_images/Swamp.webp",
        },
        {
          name: "Ocean",
          imageUrl: "/vannila_biome_images/Ocean.webp",
        },
      ],
    },
    {
      entity: "EntityShade",
      imageUrl: "/textures/mobs/shade.png",
      model: "/models/overworld/shade/shade.gltf",
      health: 25,
      weight: 20,
      min: 1,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Deep Fungal Cave",
          imageUrl: "/dimensions/deeplands_images/Deep_Fungal_Cave.png",
        },
        {
          name: "Deeplands Cave",
          imageUrl: "/dimensions/deeplands_images/Deeplands.png",
        },
        {
          name: "Deepshine Cave",
          imageUrl: "/dimensions/deeplands_images/Deepshine_Cave.png",
        },
      ],
      loot: [
        {
          item: "Book of Shadows",
          itemId: "Itemizer.BookOfShadows",
          quantity: 1,
          chance: 0.025,
          imageUrl: "/textures/items/bookOfShadows.png",
          itemName: "Book of Shadows",
        },
        {
          item: "Deeplands Realmstone",
          itemId: "Itemizer.RealmstoneDeeplands",
          quantity: 2,
          chance: 0.06666666666666667,
          imageUrl: "/textures/items/deeplandsGems.png",
          itemName: "Deeplands Realmstone",
        },
      ],
    },
    {
      entity: "EntityTricksterClone",
      imageUrl: "/textures/mobs/tricksterclone.png",
      model: "/models/overworld/trickster-clone/trickster-clone.gltf",
      health: 30,
      weight: 20,
      min: 1,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Beach",
          imageUrl: "/vannila_biome_images/Beach.webp",
        },
        {
          name: "Coniferous",
          imageUrl: "/vannila_biome_images/coniferous.webp",
        },
        {
          name: "Forest",
          imageUrl: "/vannila_biome_images/Forest.webp",
        },
        {
          name: "Hills",
          imageUrl: "/vannila_biome_images/hills.jpg",
        },
        {
          name: "Jungle",
          imageUrl: "/vannila_biome_images/jungle.webp",
        },
        {
          name: "Mesa",
          imageUrl: "/vannila_biome_images/mesa.webp",
        },
        {
          name: "Mountain",
          imageUrl: "/vannila_biome_images/mountain.jpg",
        },
        {
          name: "Plains",
          imageUrl: "/vannila_biome_images/Plains.webp",
        },
        {
          name: "Sandy",
          imageUrl: "/vannila_biome_images/sandy.webp",
        },
        {
          name: "Savanna",
          imageUrl: "/vannila_biome_images/savanna.webp",
        },
        {
          name: "Snowy",
          imageUrl: "/vannila_biome_images/snowy.webp",
        },
        {
          name: "Swamp",
          imageUrl: "/vannila_biome_images/Swamp.webp",
        },
        {
          name: "Ocean",
          imageUrl: "/vannila_biome_images/Ocean.webp",
        },
      ],
    },
    {
      entity: "EntityUrsa",
      imageUrl: "/textures/mobs/ursa.png",
      model: "/models/overworld/ursa/ursa.gltf",
    },
  ],
  npcs: [
    {
      entity: "EntityLottoman",
      displayName: "Lottoman",
      weight: 1,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Snowy",
          imageUrl: "/vannila_biome_images/snowy.webp",
        },
        null,
        {
          name: "Sandy",
          imageUrl: "/vannila_biome_images/sandy.webp",
        },
        null,
        {
          name: "Savanna",
          imageUrl: "/vannila_biome_images/savanna.webp",
        },
      ],
      loot: [],
      trades: [
        {
          input: {
            item: "Silver Coin",
            itemId: "Itemizer.SilverCoin",
            quantity: 5,
            metadata: 1,
            imageUrl: "/textures/items/coinSilver.png",
          },
          output: {
            item: "Gem Bag",
            itemId: "Itemizer.GemBag",
            quantity: 1,
            imageUrl: "/textures/items/gemBag.png",
          },
        },
        {
          input: {
            item: "Silver Coin",
            itemId: "Itemizer.SilverCoin",
            quantity: 50,
            metadata: 1,
            imageUrl: "/textures/items/coinSilver.png",
          },
          output: {
            item: "Gem Bag",
            itemId: "Itemizer.GemBag",
            quantity: 13,
            imageUrl: "/textures/items/gemBag.png",
          },
        },
        {
          input: {
            item: "Gold Coin",
            itemId: "Itemizer.GoldCoin",
            quantity: 5,
            metadata: 1,
            imageUrl: "/textures/items/coinGold.png",
          },
          output: {
            item: "Magic Repair Dust",
            itemId: "Itemizer.MagicRepairDust",
            quantity: 1,
            imageUrl: "/textures/items/magicRepairDust.png",
          },
        },
        {
          input: {
            item: "Gold Coin",
            itemId: "Itemizer.GoldCoin",
            quantity: 25,
            metadata: 1,
            imageUrl: "/textures/items/coinGold.png",
          },
          output: {
            item: "Magic Repair Dust",
            itemId: "Itemizer.MagicRepairDust",
            quantity: 15,
            imageUrl: "/textures/items/magicRepairDust.png",
          },
          additionalInput: {
            item: "Gold Coin",
            itemId: "Itemizer.GoldCoin",
            quantity: 25,
            imageUrl: "/textures/items/coinGold.png",
          },
        },
        {
          input: {
            item: "Orbulon",
            itemId: "Itemizer.Orbulon",
            quantity: 15,
            metadata: 1,
            imageUrl: "/textures/items/orbulon.png",
          },
          output: {
            item: "Magic Repair Dust",
            itemId: "Itemizer.MagicRepairDust",
            quantity: 2,
            imageUrl: "/textures/items/magicRepairDust.png",
          },
        },
        {
          input: {
            item: "Gold Coin",
            itemId: "Itemizer.GoldCoin",
            quantity: 7,
            metadata: 1,
            imageUrl: "/textures/items/coinGold.png",
          },
          output: {
            item: "Shiny Box",
            itemId: "Itemizer.ShinyBox",
            quantity: 1,
            imageUrl: "/textures/items/shinyBox.png",
          },
        },
      ],
      imageUrl: "/textures/mobs/lottoman.png",
      model: "/models/npc/lottoman/lottoman.gltf",
    },
    {
      entity: "EntityAssassin",
      displayName: "Assassin",
      weight: 1,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Snowy",
          imageUrl: "/vannila_biome_images/snowy.webp",
        },
        null,
        {
          name: "Sandy",
          imageUrl: "/vannila_biome_images/sandy.webp",
        },
        null,
        {
          name: "Savanna",
          imageUrl: "/vannila_biome_images/savanna.webp",
        },
      ],
      loot: [],
      trades: [
        {
          input: {
            item: "Copper Coin",
            itemId: "Itemizer.CopperCoin",
            quantity: 2,
            metadata: 1,
            imageUrl: "/textures/items/coinCopper.png",
          },
          output: {
            item: "Slice Star",
            itemId: "Weaponizer.SliceStar",
            quantity: 8,
            imageUrl: "/textures/items/sliceStar.png",
          },
        },
        {
          input: {
            item: "Copper Coin",
            itemId: "Itemizer.CopperCoin",
            quantity: 2,
            metadata: 1,
            imageUrl: "/textures/items/coinCopper.png",
          },
          output: {
            item: "Goo Ball",
            itemId: "Weaponizer.GooBall",
            quantity: 8,
            imageUrl: "/textures/items/gooBall.png",
          },
        },
        {
          input: {
            item: "Copper Coin",
            itemId: "Itemizer.CopperCoin",
            quantity: 2,
            metadata: 1,
            imageUrl: "/textures/items/coinCopper.png",
          },
          output: {
            item: "Chakram",
            itemId: "Weaponizer.Chakram",
            quantity: 8,
            imageUrl: "/textures/items/chakram.png",
          },
        },
        {
          input: {
            item: "Copper Coin",
            itemId: "Itemizer.CopperCoin",
            quantity: 2,
            metadata: 1,
            imageUrl: "/textures/items/coinCopper.png",
          },
          output: {
            item: "Hell Fire",
            itemId: "Weaponizer.HellFire",
            quantity: 8,
            imageUrl: "/textures/items/hellFire.png",
          },
        },
        {
          input: {
            item: "Copper Coin",
            itemId: "Itemizer.CopperCoin",
            quantity: 2,
            metadata: 1,
            imageUrl: "/textures/items/coinCopper.png",
          },
          output: {
            item: "Vulkram",
            itemId: "Weaponizer.Vulkram",
            quantity: 4,
            imageUrl: "/textures/items/vulkram.png",
          },
        },
        {
          input: {
            item: "Thorny Petals",
            itemId: "Itemizer.ThornyPetals",
            quantity: 4,
            metadata: 1,
            imageUrl: "/dimensions/dustopia_images/Thorny_Petals.png",
          },
          output: {
            item: "Slice Star",
            itemId: "Weaponizer.SliceStar",
            quantity: 12,
            imageUrl: "/textures/items/sliceStar.png",
          },
        },
        {
          input: {
            item: "Thorny Petals",
            itemId: "Itemizer.ThornyPetals",
            quantity: 4,
            metadata: 1,
            imageUrl: "/dimensions/dustopia_images/Thorny_Petals.png",
          },
          output: {
            item: "Chakram",
            itemId: "Weaponizer.Chakram",
            quantity: 12,
            imageUrl: "/textures/items/chakram.png",
          },
        },
        {
          input: {
            item: "Thorny Petals",
            itemId: "Itemizer.ThornyPetals",
            quantity: 4,
            metadata: 1,
            imageUrl: "/dimensions/dustopia_images/Thorny_Petals.png",
          },
          output: {
            item: "Vulkram",
            itemId: "Weaponizer.Vulkram",
            quantity: 6,
            imageUrl: "/textures/items/vulkram.png",
          },
        },
        {
          input: {
            item: "Copper Coin",
            itemId: "Itemizer.CopperCoin",
            quantity: 2,
            metadata: 1,
            imageUrl: "/textures/items/coinCopper.png",
          },
          output: {
            item: "Metal Pellet",
            itemId: "Itemizer.MetalPellet",
            quantity: 16,
            imageUrl: "/textures/items/metalPellet.png",
          },
        },
        {
          input: {
            item: "Copper Coin",
            itemId: "Itemizer.CopperCoin",
            quantity: 2,
            metadata: 1,
            imageUrl: "/textures/items/coinCopper.png",
          },
          output: {
            item: "Metal Slug",
            itemId: "Itemizer.MetalSlug",
            quantity: 16,
            imageUrl: "/textures/items/metalSlug.png",
          },
        },
      ],
      imageUrl: "/textures/mobs/assassin.png",
      model: "",
    },
    {
      entity: "EntitySoulAgent",
      displayName: "SoulAgent",
      weight: 1,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Snowy",
          imageUrl: "/vannila_biome_images/snowy.webp",
        },
        null,
        {
          name: "Sandy",
          imageUrl: "/vannila_biome_images/sandy.webp",
        },
        null,
        {
          name: "Savanna",
          imageUrl: "/vannila_biome_images/savanna.webp",
        },
      ],
      loot: [],
      trades: [
        {
          input: {
            item: "Copper Coin",
            itemId: "Itemizer.CopperCoin",
            quantity: 25,
            metadata: 1,
            imageUrl: "/textures/items/coinCopper.png",
          },
          output: {
            item: "Fragmented Anima Stone",
            itemId: "Itemizer.FragmentedAnimaStone",
            quantity: 2,
            imageUrl: "/textures/items/animaStoneFragmented.png",
          },
        },
      ],
      imageUrl: "/textures/mobs/soulAgent.png",
      model: "",
    },
    {
      entity: "EntityNaturalist",
      displayName: "Naturalist",
      weight: 1,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Snowy",
          imageUrl: "/vannila_biome_images/snowy.webp",
        },
        null,
        {
          name: "Sandy",
          imageUrl: "/vannila_biome_images/sandy.webp",
        },
        null,
        {
          name: "Savanna",
          imageUrl: "/vannila_biome_images/savanna.webp",
        },
      ],
      loot: [],
      trades: [
        {
          input: {
            item: "Copper Coin",
            itemId: "Itemizer.CopperCoin",
            quantity: 64,
            metadata: 1,
            imageUrl: "/textures/items/coinCopper.png",
          },
          output: {
            item: "Plantizer.BubbleBerrySeeds",
            itemId: "Plantizer.BubbleBerrySeeds",
            quantity: 2,
            imageUrl: "/textures/items/bubbleBerrySeeds.png",
          },
        },
        {
          input: {
            item: "Copper Coin",
            itemId: "Itemizer.CopperCoin",
            quantity: 64,
            metadata: 1,
            imageUrl: "/textures/items/coinCopper.png",
          },
          output: {
            item: "Plantizer.HeartFruitSeeds",
            itemId: "Plantizer.HeartFruitSeeds",
            quantity: 2,
            imageUrl: "/textures/items/heartFruitSeeds.png",
          },
        },
        {
          input: {
            item: "Copper Coin",
            itemId: "Itemizer.CopperCoin",
            quantity: 64,
            metadata: 1,
            imageUrl: "/textures/items/coinCopper.png",
          },
          output: {
            item: "Plantizer.MagicMarangSeeds",
            itemId: "Plantizer.MagicMarangSeeds",
            quantity: 2,
            imageUrl: "/textures/items/magicMarangSeeds.png",
          },
        },
        {
          input: {
            item: "Copper Coin",
            itemId: "Itemizer.CopperCoin",
            quantity: 64,
            metadata: 1,
            imageUrl: "/textures/items/coinCopper.png",
          },
          output: {
            item: "Plantizer.ThornyPlantSeeds",
            itemId: "Plantizer.ThornyPlantSeeds",
            quantity: 2,
            imageUrl: "/dimensions/dustopia_images/Thorny_Plant_Seeds.png",
          },
        },
      ],
      imageUrl: "/textures/mobs/naturalist.png",
      model: "",
    },
    {
      entity: "EntityMetalloid",
      displayName: "Metalloid",
      weight: 1,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Snowy",
          imageUrl: "/vannila_biome_images/snowy.webp",
        },
        null,
        {
          name: "Sandy",
          imageUrl: "/vannila_biome_images/sandy.webp",
        },
        null,
        {
          name: "Savanna",
          imageUrl: "/vannila_biome_images/savanna.webp",
        },
      ],
      loot: [],
      trades: [
        {
          input: {
            item: "Silver Coin",
            itemId: "Itemizer.SilverCoin",
            quantity: 4,
            metadata: 1,
            imageUrl: "/textures/items/coinSilver.png",
          },
          output: {
            item: "Amethyst Ingot",
            itemId: "Itemizer.AmethystIngot",
            quantity: 1,
            imageUrl: "/textures/items/ingotAmethyst.png",
          },
        },
        {
          input: {
            item: "Silver Coin",
            itemId: "Itemizer.SilverCoin",
            quantity: 8,
            metadata: 1,
            imageUrl: "/textures/items/coinSilver.png",
          },
          output: {
            item: "Jade Ingot",
            itemId: "Itemizer.IngotJade",
            quantity: 1,
            imageUrl: "/textures/items/ingotJade.png",
          },
        },
        {
          input: {
            item: "Silver Coin",
            itemId: "Itemizer.SilverCoin",
            quantity: 10,
            metadata: 1,
            imageUrl: "/textures/items/coinSilver.png",
          },
          output: {
            item: "Rosite Ingot",
            itemId: "Itemizer.IngotRosite",
            quantity: 1,
            imageUrl: "/textures/items/ingotRosite.png",
          },
        },
        {
          input: {
            item: "Gold Coin",
            itemId: "Itemizer.GoldCoin",
            quantity: 5,
            metadata: 1,
            imageUrl: "/textures/items/coinGold.png",
          },
          output: {
            item: "Sapphire Ingot",
            itemId: "Itemizer.IngotSapphire",
            quantity: 1,
            imageUrl: "/textures/items/ingotSapphire.png",
          },
        },
        {
          input: {
            item: "Amethyst Ingot",
            itemId: "Itemizer.AmethystIngot",
            quantity: 1,
            metadata: 1,
            imageUrl: "/textures/items/ingotAmethyst.png",
          },
          output: {
            item: "Silver Coin",
            itemId: "Itemizer.SilverCoin",
            quantity: 2,
            imageUrl: "/textures/items/coinSilver.png",
          },
        },
        {
          input: {
            item: "Jade Ingot",
            itemId: "Itemizer.IngotJade",
            quantity: 1,
            metadata: 1,
            imageUrl: "/textures/items/ingotJade.png",
          },
          output: {
            item: "Silver Coin",
            itemId: "Itemizer.SilverCoin",
            quantity: 4,
            imageUrl: "/textures/items/coinSilver.png",
          },
        },
        {
          input: {
            item: "Rosite Ingot",
            itemId: "Itemizer.IngotRosite",
            quantity: 1,
            metadata: 1,
            imageUrl: "/textures/items/ingotRosite.png",
          },
          output: {
            item: "Silver Coin",
            itemId: "Itemizer.SilverCoin",
            quantity: 5,
            imageUrl: "/textures/items/coinSilver.png",
          },
        },
        {
          input: {
            item: "Sapphire Ingot",
            itemId: "Itemizer.IngotSapphire",
            quantity: 1,
            metadata: 1,
            imageUrl: "/textures/items/ingotSapphire.png",
          },
          output: {
            item: "Gold Coin",
            itemId: "Itemizer.GoldCoin",
            quantity: 3,
            imageUrl: "/textures/items/coinGold.png",
          },
        },
      ],
      imageUrl: "/textures/mobs/metalloid.png",
      model: "",
    },
    {
      entity: "EntityRealmShifter",
      displayName: "RealmShifter",
      weight: 1,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Snowy",
          imageUrl: "/vannila_biome_images/snowy.webp",
        },
        null,
        {
          name: "Sandy",
          imageUrl: "/vannila_biome_images/sandy.webp",
        },
        null,
        {
          name: "Savanna",
          imageUrl: "/vannila_biome_images/savanna.webp",
        },
      ],
      loot: [],
      trades: [
        {
          input: {
            item: "Abyss Realmstone",
            itemId: "Itemizer.RealmstoneAbyss",
            quantity: 1,
            metadata: 1,
            imageUrl: "/textures/items/realmstoneAbyss.png",
          },
          output: {
            item: "Silver Coin",
            itemId: "Itemizer.SilverCoin",
            quantity: 6,
            imageUrl: "/textures/items/coinSilver.png",
          },
        },
        {
          input: {
            item: "Ancient Cavern Realmstone",
            itemId: "Itemizer.RealmstoneAncientCavern",
            quantity: 1,
            metadata: 1,
            imageUrl: "/textures/items/realmstoneAncientCavern.png",
          },
          output: {
            item: "Silver Coin",
            itemId: "Itemizer.SilverCoin",
            quantity: 9,
            imageUrl: "/textures/items/coinSilver.png",
          },
        },
        {
          input: {
            item: "Barathos Realmstone",
            itemId: "Itemizer.RealmstoneBarathos",
            quantity: 1,
            metadata: 1,
            imageUrl: "/textures/items/realmstoneBarathos.png",
          },
          output: {
            item: "Silver Coin",
            itemId: "Itemizer.SilverCoin",
            quantity: 8,
            imageUrl: "/textures/items/coinSilver.png",
          },
        },
        {
          input: {
            item: "L'Borean Realmstone",
            itemId: "Itemizer.RealmstoneBorean",
            quantity: 1,
            metadata: 1,
            imageUrl: "/textures/items/realmstoneBorean.png",
          },
          output: {
            item: "Silver Coin",
            itemId: "Itemizer.SilverCoin",
            quantity: 7,
            imageUrl: "/textures/items/coinSilver.png",
          },
        },
        {
          input: {
            item: "Celeve Realmstone",
            itemId: "Itemizer.RealmstoneCeleve",
            quantity: 1,
            metadata: 1,
            imageUrl: "/textures/items/realmstoneCeleve.png",
          },
          output: {
            item: "Silver Coin",
            itemId: "Itemizer.SilverCoin",
            quantity: 4,
            imageUrl: "/textures/items/coinSilver.png",
          },
        },
        {
          input: {
            item: "Crystevia Realmstone",
            itemId: "Itemizer.RealmstoneCrystevia",
            quantity: 1,
            metadata: 1,
            imageUrl: "/textures/items/realmstoneCrystevia.png",
          },
          output: {
            item: "Silver Coin",
            itemId: "Itemizer.SilverCoin",
            quantity: 6,
            imageUrl: "/textures/items/coinSilver.png",
          },
        },
        {
          input: {
            item: "Deeplands Realmstone",
            itemId: "Itemizer.RealmstoneDeeplands",
            quantity: 1,
            metadata: 1,
            imageUrl: "/textures/items/realmstoneDeeplands.png",
          },
          output: {
            item: "Copper Coin",
            itemId: "Itemizer.CopperCoin",
            quantity: 9,
            imageUrl: "/textures/items/coinCopper.png",
          },
        },
        {
          input: {
            item: "Dustopia Realmstone",
            itemId: "Itemizer.RealmstoneDustopia",
            quantity: 1,
            metadata: 1,
            imageUrl: "/textures/items/realmstoneDustopia.png",
          },
          output: {
            item: "Silver Coin",
            itemId: "Itemizer.SilverCoin",
            quantity: 6,
            imageUrl: "/textures/items/coinSilver.png",
          },
        },
        {
          input: {
            item: "Gardencia Realmstone",
            itemId: "Itemizer.RealmstoneGardencia",
            quantity: 1,
            metadata: 1,
            imageUrl: "/textures/items/realmstoneGardencia.png",
          },
          output: {
            item: "Silver Coin",
            itemId: "Itemizer.SilverCoin",
            quantity: 2,
            imageUrl: "/textures/items/coinSilver.png",
          },
        },
        {
          input: {
            item: "Haven Realmstone",
            itemId: "Itemizer.RealmstoneHaven",
            quantity: 1,
            metadata: 1,
            imageUrl: "/textures/items/realmstoneHaven.png",
          },
          output: {
            item: "Silver Coin",
            itemId: "Itemizer.SilverCoin",
            quantity: 1,
            imageUrl: "/textures/items/coinSilver.png",
          },
        },
        {
          input: {
            item: "Iromine Realmstone",
            itemId: "Itemizer.RealmstoneIromine",
            quantity: 1,
            metadata: 1,
            imageUrl: "/textures/items/realmstoneIromine.png",
          },
          output: {
            item: "Copper Coin",
            itemId: "Itemizer.CopperCoin",
            quantity: 4,
            imageUrl: "/textures/items/coinCopper.png",
          },
        },
        {
          input: {
            item: "Lelyetia Realmstone",
            itemId: "Itemizer.RealmstoneLelyetia",
            quantity: 1,
            metadata: 1,
            imageUrl: "/textures/items/realmstoneLelyetia.png",
          },
          output: {
            item: "Silver Coin",
            itemId: "Itemizer.SilverCoin",
            quantity: 3,
            imageUrl: "/textures/items/coinSilver.png",
          },
        },
        {
          input: {
            item: "Mysterium Realmstone",
            itemId: "Itemizer.RealmstoneMysterium",
            quantity: 1,
            metadata: 1,
            imageUrl: "/textures/items/realmstoneMysterium.png",
          },
          output: {
            item: "Silver Coin",
            itemId: "Itemizer.SilverCoin",
            quantity: 1,
            imageUrl: "/textures/items/coinSilver.png",
          },
        },
        {
          input: {
            item: "Precasia Realmstone",
            itemId: "Itemizer.RealmstonePrecasia",
            quantity: 1,
            metadata: 1,
            imageUrl: "/textures/items/realmstonePrecasia.png",
          },
          output: {
            item: "Silver Coin",
            itemId: "Itemizer.SilverCoin",
            quantity: 2,
            imageUrl: "/textures/items/coinSilver.png",
          },
        },
        {
          input: {
            item: "Vox Ponds Realmstone",
            itemId: "Itemizer.RealmstoneVoxPonds",
            quantity: 1,
            metadata: 1,
            imageUrl: "/textures/items/realmstoneVoxPonds.png",
          },
          output: {
            item: "Silver Coin",
            itemId: "Itemizer.SilverCoin",
            quantity: 4,
            imageUrl: "/textures/items/coinSilver.png",
          },
        },
        {
          input: {
            item: "Candyland Realmstone",
            itemId: "Itemizer.RealmstoneCandyland",
            quantity: 1,
            metadata: 1,
            imageUrl: "/textures/items/realmstoneCandyland.png",
          },
          output: {
            item: "Silver Coin",
            itemId: "Itemizer.SilverCoin",
            quantity: 5,
            imageUrl: "/textures/items/coinSilver.png",
          },
        },
        {
          input: {
            item: "Creeponia Realmstone",
            itemId: "Itemizer.RealmstoneCreeponia",
            quantity: 1,
            metadata: 1,
            imageUrl: "/textures/items/realmstoneCreeponia.png",
          },
          output: {
            item: "Silver Coin",
            itemId: "Itemizer.SilverCoin",
            quantity: 6,
            imageUrl: "/textures/items/coinSilver.png",
          },
        },
        {
          input: {
            item: "Immortallis Realmstone",
            itemId: "Itemizer.RealmstoneImmortallis",
            quantity: 1,
            metadata: 1,
            imageUrl: "/textures/items/realmstoneImmortallis.png",
          },
          output: {
            item: "Silver Coin",
            itemId: "Itemizer.SilverCoin",
            quantity: 6,
            imageUrl: "/textures/items/coinSilver.png",
          },
        },
        {
          input: {
            item: "Shyrelands Realmstone",
            itemId: "Itemizer.RealmstoneShyrelands",
            quantity: 1,
            metadata: 1,
            imageUrl: "/textures/items/realmstoneShyrelands.png",
          },
          output: {
            item: "Silver Coin",
            itemId: "Itemizer.SilverCoin",
            quantity: 9,
            imageUrl: "/textures/items/coinSilver.png",
          },
        },
      ],
      imageUrl: "/textures/mobs/realmShifter.png",
      model: "",
    },
    {
      entity: "EntityTrollTrader",
      displayName: "TrollTrader",
      weight: 1,
      min: 1,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Beach",
          imageUrl: "/vannila_biome_images/Beach.webp",
        },
      ],
      loot: [],
      trades: [
        {
          input: {
            item: "Amphibiyte Lung",
            itemId: "Itemizer.AmphibiyteLung",
            quantity: 10,
            metadata: 1,
            imageUrl: "/textures/items/amphibiyteLung.png",
          },
          output: {
            item: "Coral Stone",
            itemId: "Itemizer.CoralStone",
            quantity: 1,
            imageUrl: "/textures/items/coralStone.png",
          },
        },
      ],
      imageUrl: "/textures/mobs/trolltrader.png",
      model: "/models/npc/troll-trader/troll-trader.gltf",
    },
  ],
  generatedOres: [
    {
      field: "Blockizer.oreAmethyst",
      displayName: "Ore Amethyst",
      veinSize: 7,
      attemptsPerChunk: 2,
      replaces: "Blocks.stone",
      height: {
        min: 0,
        max: 39,
      },
      imageUrl: "/ores/amethyst_ore.png",
    },
    {
      field: "Blockizer.oreRosite",
      displayName: "Ore Rosite",
      veinSize: 4,
      attemptsPerChunk: 1,
      replaces: "Blocks.stone",
      height: {
        min: 0,
        max: 29,
      },
      imageUrl: "/ores/rosite_ore.png",
    },
    {
      field: "Blockizer.oreLimonite",
      displayName: "Ore Limonite",
      veinSize: 20,
      attemptsPerChunk: 3,
      replaces: "Blocks.stone",
      height: {
        min: 0,
        max: 29,
      },
      imageUrl: "/ores/limonite_ore.png",
    },
    {
      field: "Blockizer.oreRunium",
      displayName: "Ore Runium",
      veinSize: 14,
      attemptsPerChunk: 3,
      replaces: "Blocks.stone",
      height: {
        min: 0,
        max: 19,
      },
      imageUrl: "/ores/runium_ore.png",
    },
    {
      field: "Blockizer.oreJade",
      displayName: "Ore Jade",
      veinSize: 4,
      attemptsPerChunk: 1,
      replaces: "Blocks.stone",
      height: {
        min: 0,
        max: 19,
      },
      imageUrl: "/ores/jade_ore.png",
    },
    {
      field: "Blockizer.oreSapphire",
      displayName: "Ore Sapphire",
      veinSize: 4,
      attemptsPerChunk: 1,
      replaces: "Blocks.stone",
      height: {
        min: 0,
        max: 9,
      },
      imageUrl: "/ores/sapphire_ore.png",
    },
  ],
  generatedStructures: [
    {
      className: "AmphibiyteCave",
      name: "Amphibiyte Cave",
      context: "StructureGenRare #15",
      chance: {
        description: "1 em 6",
        formula: "randomNum == 3 (random.nextInt(6) + 1)",
        denominator: 6,
        comparator: "==",
        value: 3,
      },
      biome: "Ocean",
      imageUrl: "",
    },
    {
      className: "AncientTeleporter",
      name: "Ancient Teleporter",
      context: "generateSurface",
      chance: {
        description: "1 em 100",
        formula: "random.nextInt(100) == 1",
        denominator: 100,
        comparator: "==",
        value: 1,
      },
      biome: null,
      imageUrl: "/textures/items/blueprintAncientTeleporter.png",
    },
  ],
  structures: [
    {
      className: "AmphibiyteCave",
      name: "Amphibiyte Cave",
      context: "StructureGenRare #15",
      chance: {
        description: "1 em 6",
        formula: "randomNum == 3 (random.nextInt(6) + 1)",
        denominator: 6,
        comparator: "==",
        value: 3,
      },
      biome: "Ocean",
      imageUrl: "",
    },
    {
      className: "AncientTeleporter",
      name: "Ancient Teleporter",
      context: "generateSurface",
      chance: {
        description: "1 em 100",
        formula: "random.nextInt(100) == 1",
        denominator: 100,
        comparator: "==",
        value: 1,
      },
      biome: null,
      imageUrl: "/textures/items/blueprintAncientTeleporter.png",
    },
  ],
  resources: [
    {
      name: "Amphibiyte Cave",
      type: "Estrutura",
      usage:
        "Gerado via StructureGenRare #15. Somente no bioma Ocean. Chance 1 em 6 - randomNum == 3 (random.nextInt(6) + 1).",
      imageUrl: "",
    },
    {
      name: "Ancient Teleporter",
      type: "Estrutura",
      usage:
        "Gerado via generateSurface. Chance 1 em 100 - random.nextInt(100) == 1.",
      imageUrl: "",
    },
  ],
  bosses: [
    {
      name: "Immortal Trio",
      howToSpawn:
        "Complete eventos noturnos especiais para invocar Flash, Klobber, Proshield e Mirage.",
      notes:
        "Os imortais aparecem em waves e premiam o jogador com itens únicos de defesa e magia.",
      imageUrl: "/dimensions/overworld_images/Immortal_Event.png",
      entities: [
        {
          entity: "EntityFlash",
          displayName: "Flash",
          imageUrl: "/dimensions/immortallis_images/Flash.png",
          model: "/models/boss/immortaltrio/flash/flash.gltf",
          health: 1000,
        },
        {
          entity: "EntityKlobber",
          displayName: "Klobber",
          imageUrl: "/dimensions/immortallis_images/Klobber.png",
          model: "/models/boss/immortaltrio/klobber/klobber.gltf",
          health: 1000,
        },
        {
          entity: "EntityProshield",
          displayName: "Proshield",
          imageUrl: "/dimensions/immortallis_images/Proshield.png",
          model: "/models/boss/immortaltrio/proshield/proshield.gltf",
          health: 500,
        },
        {
          entity: "EntityMirage",
          displayName: "Mirage",
          imageUrl: "/dimensions/immortallis_images/Mirage.png",
          model: "/models/boss/immortaltrio/mirage/mirage.gltf",
          health: 750,
        },
      ],
      loot: [
        {
          item: "Progress Coin",
          itemId: "Itemizer.ProgressCoin4",
          minQuantity: 1,
          maxQuantity: 1,
          chance: 1,
          sourceEntities: ["EntityFlash"],
          imageUrl: "/dimensions/common_images/Progress_Coin_4.png",
        },
        {
          item: "Progress Coin",
          itemId: "Itemizer.ProgressCoin1",
          minQuantity: 1,
          maxQuantity: 1,
          chance: 1,
          sourceEntities: ["EntityKlobber"],
          imageUrl: "/dimensions/common_images/Progress_Coin_1.png",
        },
        {
          item: "Progress Coin",
          itemId: "Itemizer.ProgressCoin2",
          minQuantity: 1,
          maxQuantity: 1,
          chance: 1,
          sourceEntities: ["EntityProshield"],
          imageUrl: "/dimensions/common_images/Progress_Coin_2.png",
        },
        {
          item: "Progress Coin",
          itemId: "Itemizer.ProgressCoin3",
          minQuantity: 1,
          maxQuantity: 1,
          chance: 1,
          sourceEntities: ["EntityMirage"],
          imageUrl: "/dimensions/common_images/Progress_Coin_3.png",
        },
      ],
    },
    {
      name: "Corallus",
      howToSpawn:
        "Derrote Amphibiytes nas Amphibiyte Caves dos oceanos do Overworld até que a mensagem de invasão apareça; Corallus surge logo acima da água e inicia o combate.",
      notes:
        "Chefão aquático que dispara projéteis explosivos e derruba itens como Coral Staff, Coral Armor e várias estátuas.",
      imageUrl: "/dimensions/common_images/Corallus.png",
      entities: [
        {
          entity: "EntityCorallus",
          displayName: "Corallus",
          imageUrl: "/textures/mobs/corallus.png",
          model: "/models/boss/corallus/corallus/corallus.gltf",
          health: 1800,
        },
        {
          entity: "EntityCorallusShot",
          displayName: "Corallus Shot",
          imageUrl: "/textures/mobs/corallusshot.png",
          model: "/models/boss/corallus/corallus-shot/corallus-shot.gltf",
          health: 0.5,
        },
      ],
      loot: [
        {
          item: "Corby Slab",
          itemId: "Slabizer.CorbySlab",
          minQuantity: 10,
          maxQuantity: 10,
          chance: 1,
          sourceEntities: ["EntityCorallus"],
          imageUrl: "/textures/items/corbySlab.png",
        },
        {
          item: "L'Borean Realmstone",
          itemId: "Itemizer.RealmstoneBorean",
          minQuantity: 5,
          maxQuantity: 5,
          chance: 1,
          sourceEntities: ["EntityCorallus"],
          imageUrl: "/textures/items/realmstoneBorean.png",
        },
        {
          item: "Coral Staff",
          itemId: "Weaponizer.CoralStaff",
          minQuantity: 1,
          maxQuantity: 1,
          chance: 1,
          sourceEntities: ["EntityCorallus"],
          imageUrl: "/textures/items/coralStaff.png",
        },
        {
          item: "Oceanus Diving Helmet",
          itemId: "Armorizer.OceanusHelmet",
          minQuantity: 1,
          maxQuantity: 1,
          chance: 1,
          sourceEntities: ["EntityCorallus"],
          imageUrl: "/textures/items/oceanusDivingHelmet.png",
        },
        {
          item: "Sealord Diving Helmet",
          itemId: "Armorizer.SealordHelmet",
          minQuantity: 1,
          maxQuantity: 1,
          chance: 1,
          sourceEntities: ["EntityCorallus"],
          imageUrl: "/textures/items/sealordDivingHelmet.png",
        },
        {
          item: "Achelos Diving Helmet",
          itemId: "Armorizer.AchelosHelmet",
          minQuantity: 1,
          maxQuantity: 1,
          chance: 1,
          sourceEntities: ["EntityCorallus"],
          imageUrl: "/textures/items/achelosDivingHelmet.png",
        },
      ],
    },
    {
      name: "Host",
      howToSpawn:
        "Aparece automaticamente durante o evento noturno Creep Day em áreas abertas do Overworld.",
      notes:
        "Gigante amistoso que deve ser protegido dos Creepers hostis; derrotá-lo conclui o evento e concede drops exclusivos.",
      imageUrl: "/dimensions/common_images/Host.png",
      entities: [
        {
          entity: "EntityHost",
          displayName: "Host",
          imageUrl: "/textures/mobs/host.png",
          model: "/models/overworld/host/host.gltf",
          health: 230,
        },
      ],
      loot: [
        {
          item: "Creeponia Realmstone",
          itemId: "Itemizer.RealmstoneCreeponia",
          minQuantity: 1,
          maxQuantity: 1,
          chance: 1,
          sourceEntities: ["EntityHost"],
          imageUrl: "/textures/items/realmstoneCreeponia.png",
        },
        {
          item: "Gunpowder",
          itemId: "Items.gunpowder",
          minQuantity: 32,
          maxQuantity: 32,
          chance: 1,
          sourceEntities: ["EntityHost"],
          imageUrl: "/dimensions/dustopia_images/Gunpowder.png",
        },
      ],
    },
    {
      name: "Smash",
      howToSpawn:
        "Use o Troll Idol em um bloco do Overworld (fora do Peaceful); o item e consumido e Smash aparece instantaneamente.",
      notes:
        "Boss terrestre focado em knockback pesado; toca uma musica propria e joga o jogador para longe conforme a vida diminui.",
      imageUrl: "/textures/mobs/smash.png",
      spawnItems: [
        {
          itemId: "Itemizer.TrollIdol",
          item: "Troll Idol",
          imageUrl: "/textures/items/trollIdol.png",
          usage:
            "Clique com o Troll Idol no solo do Overworld; nao funciona em dificuldade Peaceful.",
        },
      ],
      entities: [
        {
          entity: "EntitySmash",
          displayName: "Smash",
          imageUrl: "/textures/mobs/smash.png",
          model: "/models/boss/smash/smash/smash.gltf",
          health: 500,
        },
      ],
      loot: [
        {
          item: "Trolls Archergun",
          itemId: "Weaponizer.TrollsArchergun",
          minQuantity: 1,
          maxQuantity: 1,
          chance: 0.25,
          sourceEntities: ["EntitySmash"],
          imageUrl: "/textures/items/trollsArchergun.png",
        },
        {
          item: "Troll Basher Axe",
          itemId: "Weaponizer.TrollBasherAxe",
          minQuantity: 1,
          maxQuantity: 1,
          chance: 0.25,
          sourceEntities: ["EntitySmash"],
          imageUrl: "/textures/items/trollBasherAxe.png",
        },
        {
          item: "Blue Barrel",
          itemId: "Weaponizer.BlueBarrel",
          minQuantity: 1,
          maxQuantity: 1,
          chance: 0.25,
          sourceEntities: ["EntitySmash"],
          imageUrl: "/textures/items/blueBarrel.png",
        },
        {
          item: "Boom Cannon",
          itemId: "Weaponizer.BoomCannon",
          minQuantity: 1,
          maxQuantity: 1,
          chance: 0.25,
          sourceEntities: ["EntitySmash"],
          imageUrl: "/textures/items/boomCannon.png",
        },
      ],
    },
  ],
};
