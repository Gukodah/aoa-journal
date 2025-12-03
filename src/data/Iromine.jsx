export const Iromine = {
  generatedOres: [
    {
      field: "Blockizer.OreLyon",
      displayName: "Lyon Ore",
      height: {
        min: 0,
        max: 19,
      },
      usage:
        "Veios raros encontrados no subsolo de Iromine; fundamentais para artigos de nível elevado nesta dimensão.",
      imageUrl: "/ores/lyon_ore.png",
    },
  ],
  id: "iromine",
  name: "Iromine",
  tier: 2,
  prerequisiteDimension: "Barathos",
  theme:
    "Ambiente steampunk caótico, com metal, estruturas mecânicas, engrenagens expostas, blocos industriais e estilo industrial-metalizado.",
  shortDescription:
    "Uma dimensão turbulenta de tier 2, caracterizada por colinas e áreas planas compostas de Iro Stone e Iromine Grass, com geração de caverna, camadas de Dimensional Fabric no fundo e estruturas mecânicas (torres, laboratórios, fábricas).",
  realmstone: {
    obtainHint:
      "Use um Blank Realmstone em uma Mineralization Station para converter em Iromine Realmstone.",
    obtainDetails:
      "Na dimensão de Barathos ou após cumprir seus requisitos, use um Blank Realmstone em uma Mineralization Station para transformá-lo em uma Iromine Realmstone. Em seguida, utilize-o em um portal de AoA para acessar Iromine.",
    imageUrl:
      "/dimensions/lelyetia_images/iromine_images/Iromine_Realmstone.png",
  },
  imageUrl: "/dimensions/lelyetia_images/iromine_images/Iromine.png",
  wikiUrl: "https://adventofascension.fandom.com/wiki/Iromine",
  mainObjectives: [
    {
      id: "unlock_iromine",
      title: "Desbloquear Iromine",
      description:
        "Converter um Blank Realmstone em Iromine Realmstone por meio da Mineralization Station, ativar o portal e entrar na dimensão.",
      imageUrl:
        "/dimensions/lelyetia_images/iromine_images/Iromine_Realmstone.png",
    },
    {
      id: "mine_iromine_resources",
      title: "Minerar recursos de Iromine",
      description:
        "Explorar o terreno de Iromine: Iromine Grass na superfície, Iro Stone em subsolo e Dimensional Fabric perto do bedrock, além de veios de Lyon Ore.",
      imageUrl: "/dimensions/lelyetia_images/iromine_images/Lyon_Ore.png",
    },
    {
      id: "defeat_mechbot",
      title: "Derrotar o boss MechBot",
      description:
        "Localizar ou ativar a estrutura Charging Pad / MechBot Altar em Iromine, usar o Gold Spring para invocar o boss MechBot e derrotá-lo para loot e progressão.",
      imageUrl: "/dimensions/common_images/MechBot.png",
    },
  ],
  secondaryObjectives: [
    {
      id: "explore_mechanical_structures",
      title: "Explorar estruturas mecânicas",
      description:
        "Visitar Enforcer Towers, Iro Passages, Mechyon Temples e outras construções industriais espalhadas por Iromine para loot, crates e puzzles mecânicos.",
      imageUrl: "/dimensions/common_images/Enforcer_Tower.png",
    },
    {
      id: "farm_iromine_mobs",
      title: "Farmar mobs com tema mecânico",
      description:
        "Enfrentar mobs como Enforcer, Mechachron, Mechyon, Polytom e Voltron para coletar coins, magnet shards, loot de Iromine Table e se preparar para dimensões de nível superior.",
      imageUrl: "/dimensions/common_images/Mechachron.png",
    },
  ],
  progressionNotes: [
    {
      id: "tier2_midgame",
      title: "Dimensão de tier 2 – salto de poder",
      description:
        "Iromine representa um salto de poder em relação a Barathos, focando em mineração mecânica, loot industrial e preparação para dimensões de tiers mais altos.",
      imageUrl: "/dimensions/lelyetia_images/iromine_images/Iromine.png",
    },
    {
      id: "prepare_for_next_tier",
      title: "Preparo para conteúdos subsequentes",
      description:
        "Depois de completar Iromine, o jogador está pronto para dimensões mais difíceis, usando os recursos e blocos mecânicos obtidos aqui para builds de combate e construção especializadas.",
      imageUrl: "/dimensions/common_images/Mechyon_Temple.png",
    },
  ],
  versionNotes:
    "A dimensão Iromine é listada como versão 1.1. Para a versão Tslat 1.1.3 em Minecraft 1.7.10, recomenda-se verificar a presença exata de veios de Lyon Ore, estruturas mecânicas e loot da Iromine Table, já que alguns ajustes podem ter sido feitos em versões posteriores.",
  mobs: [
    {
      entity: "EntityQuickpocket",
      weight: 20,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Golden Hills",
          imageUrl: "/nvm2_data/img_data/Iromine/biomes/Iromine.png",
        },
        {
          name: "Silvro Hills",
          imageUrl: "/nvm2_data/img_data/Iromine/biomes/Silvro_Hills.png",
        },
        {
          name: "Iro-Tech Hills",
          imageUrl: "/nvm2_data/img_data/Iromine/biomes/Iro-Tech_Hills.png",
        },
      ],
      loot: [
        {
          item: "Bolt Rifle",
          itemId: "Weaponizer.BoltRifle",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/boltRifle.png",
        },
        {
          item: "Golden Upgrade Kit",
          itemId: "Itemizer.UpgradeKitGolden",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/upgradeKitGolden.png",
        },
      ],
      imageUrl: "/textures/mobs/quickpocket.png",
      model: "/models/iromine/quickpocket/quickpocket.gltf",
      health: 60,
    },
    {
      entity: "EntityPolytom",
      weight: 20,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Golden Hills",
          imageUrl: "/nvm2_data/img_data/Iromine/biomes/Iromine.png",
        },
        {
          name: "Silvro Hills",
          imageUrl: "/nvm2_data/img_data/Iromine/biomes/Silvro_Hills.png",
        },
        {
          name: "Iro-Tech Hills",
          imageUrl: "/nvm2_data/img_data/Iromine/biomes/Iro-Tech_Hills.png",
        },
      ],
      loot: [
        {
          item: "Iromine Gems",
          itemId: "Itemizer.CoinsIromine",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/iromineGems.png",
        },
        {
          item: "Iro Miner",
          itemId: "Weaponizer.IroMiner",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/iroMiner.png",
        },
      ],
      imageUrl: "/textures/mobs/polytom.png",
      model: "/models/iromine/polytom/polytom.gltf",
      health: 10,
    },
    {
      entity: "EntityMechamaton",
      weight: 20,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Golden Hills",
          imageUrl: "/nvm2_data/img_data/Iromine/biomes/Iromine.png",
        },
        {
          name: "Silvro Hills",
          imageUrl: "/nvm2_data/img_data/Iromine/biomes/Silvro_Hills.png",
        },
        {
          name: "Iro-Tech Hills",
          imageUrl: "/nvm2_data/img_data/Iromine/biomes/Iro-Tech_Hills.png",
        },
      ],
      loot: [
        {
          item: "Power Staff",
          itemId: "Weaponizer.PowerStaff",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/powerStaff.png",
        },
      ],
      imageUrl: "/textures/mobs/mechamaton.png",
      model: "/models/iromine/mechamaton/mechamaton.gltf",
      health: 160,
    },
    {
      entity: "EntityMechachron",
      weight: 1,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Golden Hills",
          imageUrl: "/nvm2_data/img_data/Iromine/biomes/Iromine.png",
        },
        {
          name: "Silvro Hills",
          imageUrl: "/nvm2_data/img_data/Iromine/biomes/Silvro_Hills.png",
        },
        {
          name: "Iro-Tech Hills",
          imageUrl: "/nvm2_data/img_data/Iromine/biomes/Iro-Tech_Hills.png",
        },
      ],
      loot: [
        {
          item: "Incomplete Mecha Staff",
          itemId: "Itemizer.MechaStaffIncomplete",
          quantity: 1,
          chance: 1,
          imageUrl: "/dimensions/dustopia_images/Mecha_Staff_(Incomplete).png",
        },
        {
          item: "Gold Coin",
          itemId: "Itemizer.GoldCoin",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/coinGold.png",
        },
        {
          item: "Iromine Realmstone",
          itemId: "Itemizer.RealmstoneIromine",
          quantity: 3,
          chance: 1,
          imageUrl: "/textures/items/realmstoneIromine.png",
        },
      ],
      imageUrl: "/textures/mobs/mechachron.png",
      model: "/models/iromine/mechachron/mechachron.gltf",
      health: 180,
    },
    {
      entity: "EntityVoltron",
      weight: 20,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Golden Hills",
          imageUrl: "/nvm2_data/img_data/Iromine/biomes/Iromine.png",
        },
        {
          name: "Silvro Hills",
          imageUrl: "/nvm2_data/img_data/Iromine/biomes/Silvro_Hills.png",
        },
        {
          name: "Iro-Tech Hills",
          imageUrl: "/nvm2_data/img_data/Iromine/biomes/Iro-Tech_Hills.png",
        },
      ],
      loot: [
        {
          item: "Iromine Gems",
          itemId: "Itemizer.CoinsIromine",
          quantity: 2,
          chance: 1,
          imageUrl: "/textures/items/iromineGems.png",
        },
        {
          item: "Striker Staff",
          itemId: "Weaponizer.StrikerStaff",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/strikerStaff.png",
        },
        {
          item: "Golden Upgrade Kit",
          itemId: "Itemizer.UpgradeKitGolden",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/upgradeKitGolden.png",
        },
        {
          item: "Mecha Banner",
          itemId: "SpecialBlockizer.MechaBanner",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/banner/mechaBanner.png",
        },
      ],
      imageUrl: "/textures/mobs/voltron.png",
      model: "/models/iromine/voltron/voltron.gltf",
      health: 40,
    },
    {
      entity: "EntityEnforcer",
      imageUrl: "/textures/mobs/enforcer.png",
      model: "/models/iromine/enforcer/enforcer.gltf",
      health: 30,
      weight: 20,
      min: 1,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Golden Hills",
          imageUrl: "/nvm2_data/img_data/Iromine/biomes/Iromine.png",
        },
        {
          name: "Iro-Tech Hills",
          imageUrl: "/nvm2_data/img_data/Iromine/biomes/Iro-Tech_Hills.png",
        },
        {
          name: "Silvro Hills",
          imageUrl: "/nvm2_data/img_data/Iromine/biomes/Silvro_Hills.png",
        },
      ],
      loot: [
        {
          item: "Copper Coin",
          itemId: "Itemizer.CopperCoin",
          quantity: 5,
          chance: 1,
          imageUrl: "/textures/items/coinCopper.png",
          itemName: "Copper Coin",
        },
      ],
    },
    {
      entity: "EntityMechyon",
      imageUrl: "/textures/mobs/mechyon.png",
      model: "/models/iromine/mechyon/mechyon.gltf",
      health: 50,
      weight: 20,
      min: 1,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Golden Hills",
          imageUrl: "/nvm2_data/img_data/Iromine/biomes/Iromine.png",
        },
        {
          name: "Iro-Tech Hills",
          imageUrl: "/nvm2_data/img_data/Iromine/biomes/Iro-Tech_Hills.png",
        },
        {
          name: "Silvro Hills",
          imageUrl: "/nvm2_data/img_data/Iromine/biomes/Silvro_Hills.png",
        },
      ],
      loot: [
        {
          item: "Iromine Gems",
          itemId: "Itemizer.CoinsIromine",
          quantity: 2,
          chance: 0.5,
          imageUrl: "/textures/items/iromineGems.png",
          itemName: "Iromine Gems",
        },
      ],
    },
  ],
  npcs: [
    {
      entity: "EntityLottomanIromine",
      notes: "Gerado automaticamente por estruturas da dimensão.",
      displayName: "LottomanIromine",
      registeredBiomes: [],
      loot: [],
      trades: [
        {
          input: {
            item: "Iromine Gems",
            itemId: "Itemizer.CoinsIromine",
            quantity: 10,
            metadata: 1,
            imageUrl: "/textures/items/iromineGems.png",
          },
          output: {
            item: "Mecha Blaster Totem",
            itemId: "Totemizer.TotemMechaBlaster",
            quantity: 1,
            imageUrl: "/textures/items/totemMechaBlaster.png",
          },
        },
        {
          input: {
            item: "Iromine Gems",
            itemId: "Itemizer.CoinsIromine",
            quantity: 10,
            metadata: 1,
            imageUrl: "/textures/items/iromineGems.png",
          },
          output: {
            item: "Explochron Sword Totem",
            itemId: "Totemizer.TotemExplochronSword",
            quantity: 1,
            imageUrl: "/textures/items/totemExplochronSword.png",
          },
        },
        {
          input: {
            item: "Iromine Gems",
            itemId: "Itemizer.CoinsIromine",
            quantity: 40,
            metadata: 1,
            imageUrl: "/textures/items/iromineGems.png",
          },
          output: {
            item: "Mecha Blaster Totem",
            itemId: "Totemizer.TotemMechaBlaster",
            quantity: 10,
            imageUrl: "/textures/items/totemMechaBlaster.png",
          },
          additionalInput: {
            item: "Iromine Gems",
            itemId: "Itemizer.CoinsIromine",
            quantity: 35,
            imageUrl: "/textures/items/iromineGems.png",
          },
        },
        {
          input: {
            item: "Iromine Gems",
            itemId: "Itemizer.CoinsIromine",
            quantity: 40,
            metadata: 1,
            imageUrl: "/textures/items/iromineGems.png",
          },
          output: {
            item: "Explochron Sword Totem",
            itemId: "Totemizer.TotemExplochronSword",
            quantity: 10,
            imageUrl: "/textures/items/totemExplochronSword.png",
          },
          additionalInput: {
            item: "Iromine Gems",
            itemId: "Itemizer.CoinsIromine",
            quantity: 35,
            imageUrl: "/textures/items/iromineGems.png",
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
            quantity: 50,
            metadata: 1,
            imageUrl: "/textures/items/coinGold.png",
          },
          output: {
            item: "Magic Repair Dust",
            itemId: "Itemizer.MagicRepairDust",
            quantity: 15,
            imageUrl: "/textures/items/magicRepairDust.png",
          },
        },
      ],
      imageUrl: "/textures/mobs/lottomanIromine.png",
      model: "/models/npc/lottoman/lottoman.gltf",
    },
    {
      entity: "EntityProfessor",
      notes: "Gerado automaticamente por estruturas da dimensão.",
      displayName: "Professor",
      registeredBiomes: [],
      loot: [],
      trades: [
        {
          input: {
            item: "Silver Coin",
            itemId: "Itemizer.SilverCoin",
            quantity: 50,
            metadata: 1,
            imageUrl: "/textures/items/coinSilver.png",
          },
          output: {
            item: "Mecha Gear",
            itemId: "Itemizer.MechaGear",
            quantity: 2,
            imageUrl: "/textures/items/mechaGear.png",
          },
          additionalInput: {
            item: "Lyon Ingot",
            itemId: "Itemizer.IngotLyon",
            quantity: 5,
            imageUrl: "/textures/items/ingotLyon.png",
          },
        },
        {
          input: {
            item: "Silver Coin",
            itemId: "Itemizer.SilverCoin",
            quantity: 1,
            metadata: 1,
            imageUrl: "/textures/items/coinSilver.png",
          },
          output: {
            item: "Silvro Coin",
            itemId: "Itemizer.CoinSilvro",
            quantity: 1,
            imageUrl: "/textures/items/coinSilvro.png",
          },
          additionalInput: {
            item: "Lyon Ingot",
            itemId: "Itemizer.IngotLyon",
            quantity: 20,
            imageUrl: "/textures/items/ingotLyon.png",
          },
        },
      ],
      imageUrl: "/textures/mobs/professor.png",
      model: "/models/npc/professor/professor.gltf",
    },
    {
      entity: "EntityForagingMaster",
      displayName: "ForagingMaster",
      weight: 1,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Golden Hills",
          imageUrl: "/nvm2_data/img_data/Iromine/biomes/Iromine.png",
        },
        {
          name: "Silvro Hills",
          imageUrl: "/nvm2_data/img_data/Iromine/biomes/Silvro_Hills.png",
        },
        {
          name: "Iro-Tech Hills",
          imageUrl: "/nvm2_data/img_data/Iromine/biomes/Iro-Tech_Hills.png",
        },
      ],
      loot: [],
      trades: [
        {
          input: {
            item: "Lunaver Coin",
            itemId: "Itemizer.LunaverCoin",
            quantity: 1,
            metadata: 1,
            imageUrl: "/textures/items/coinLunaver.png",
          },
          output: {
            item: "Foraging Boots",
            itemId: "Armorizer.ForagingBoots",
            quantity: 1,
            imageUrl: "/textures/items/bootsForaging.png",
          },
        },
        {
          input: {
            item: "Lunaver Coin",
            itemId: "Itemizer.LunaverCoin",
            quantity: 1,
            metadata: 1,
            imageUrl: "/textures/items/coinLunaver.png",
          },
          output: {
            item: "Foraging Leggings",
            itemId: "Armorizer.ForagingLeggings",
            quantity: 1,
            imageUrl: "/dimensions/common_images/Foraging_Leggings.png",
          },
        },
        {
          input: {
            item: "Lunaver Coin",
            itemId: "Itemizer.LunaverCoin",
            quantity: 1,
            metadata: 1,
            imageUrl: "/textures/items/coinLunaver.png",
          },
          output: {
            item: "Foraging Chestplate",
            itemId: "Armorizer.ForagingChestplate",
            quantity: 1,
            imageUrl: "/textures/items/chestplateForaging.png",
          },
        },
        {
          input: {
            item: "Lunaver Coin",
            itemId: "Itemizer.LunaverCoin",
            quantity: 1,
            metadata: 1,
            imageUrl: "/textures/items/coinLunaver.png",
          },
          output: {
            item: "Foraging Helmet",
            itemId: "Armorizer.ForagingHelmet",
            quantity: 1,
            imageUrl: "/textures/items/helmetForaging.png",
          },
        },
      ],
      imageUrl: "",
      model: "",
    },
  ],
  generatedStructures: [
    {
      className: "IromineMazeP1",
      name: "Iromine Maze",
      context: "StructureGenRare #18",
      chance: {
        description: "1 em 1300",
        formula: "random.nextInt(1300) == 656",
        denominator: 1300,
        comparator: "==",
        value: 656,
      },
      biome: null,
      imageUrl: "",
    },
    {
      className: "IromineMazeP2",
      name: "Iromine Maze",
      context: "StructureGenRare #18",
      chance: {
        description: "1 em 1300",
        formula: "random.nextInt(1300) == 656",
        denominator: 1300,
        comparator: "==",
        value: 656,
      },
      biome: null,
      imageUrl: "",
    },
    {
      className: "IromineMazeP3",
      name: "Iromine Maze",
      context: "StructureGenRare #18",
      chance: {
        description: "1 em 1300",
        formula: "random.nextInt(1300) == 656",
        denominator: 1300,
        comparator: "==",
        value: 656,
      },
      biome: null,
      imageUrl: "",
    },
    {
      className: "MechTower",
      name: "Mech Tower",
      context: "StructureGenRare #10",
      chance: {
        description: "1 em 1300",
        formula: "random.nextInt(1300) == 656",
        denominator: 1300,
        comparator: "==",
        value: 656,
      },
      biome: null,
      imageUrl: "",
    },
    {
      className: "SilvroFloater1",
      name: "Silvro Floater 1",
      context: "ChunkProviderIromine.java",
      chance: null,
      biome: null,
      imageUrl: "",
    },
    {
      className: "SilvroFloater2",
      name: "Silvro Floater 2",
      context: "ChunkProviderIromine.java",
      chance: null,
      biome: null,
      imageUrl: "",
    },
    {
      className: "SilvroFloater3",
      name: "Silvro Floater 3",
      context: "ChunkProviderIromine.java",
      chance: null,
      biome: null,
      imageUrl: "",
    },
    {
      className: "SilvroFloater4",
      name: "Silvro Floater 4",
      context: "ChunkProviderIromine.java",
      chance: null,
      biome: null,
      imageUrl: "",
    },
    {
      className: "TechTree1",
      name: "Tech Tree 1",
      context: "ChunkProviderIromine.java",
      chance: null,
      biome: null,
      imageUrl: "",
    },
    {
      className: "TechTree2",
      name: "Tech Tree 2",
      context: "ChunkProviderIromine.java",
      chance: null,
      biome: null,
      imageUrl: "",
    },
    {
      className: "TechTree3",
      name: "Tech Tree 3",
      context: "ChunkProviderIromine.java",
      chance: null,
      biome: null,
      imageUrl: "",
    },
    {
      className: "TechTree4",
      name: "Tech Tree 4",
      context: "ChunkProviderIromine.java",
      chance: null,
      biome: null,
      imageUrl: "",
    },
    {
      className: "SilvroTree1",
      name: "Silvro Tree 1",
      context: "ChunkProviderIromine.java",
      chance: null,
      biome: null,
      imageUrl: "",
    },
    {
      className: "SilvroTree2",
      name: "Silvro Tree 2",
      context: "ChunkProviderIromine.java",
      chance: null,
      biome: null,
      imageUrl: "",
    },
    {
      className: "SilvroTree3",
      name: "Silvro Tree 3",
      context: "ChunkProviderIromine.java",
      chance: null,
      biome: null,
      imageUrl: "",
    },
  ],
  resources: [
    {
      name: "Iromine Grass",
      type: "Bloco de superfície",
      usage:
        "Camada de superfície da dimensão; usada para construção temática e transformar a estética da base de operações.",
      imageUrl:
        "/dimensions/iromine_images/Irograss.webp",
    },
    {
      name: "Dimensional Fabric",
      type: "Bloco estrutural de base",
      usage:
        "Camada de fundo (próxima ao bedrock) de muitas dimensões de AoA, incluindo Iromine; simboliza a ‘parede’ do mundo.",
      imageUrl: "/dimensions/shyrelands_images/Dimensional_Fabric.png",
    },
  ],
  bosses: [
    {
      name: "MechBot",
      howToSpawn:
        "Use um Gold Spring no bloco MechBot Altar localizado dentro de uma Charging Pad estrutura para invocar o boss.",
      notes:
        "Chefe principal de Iromine, recompensa loot da Iromine Table e confirma que a dimensão foi ‘limpa’.",
      imageUrl: "/dimensions/common_images/MechBot.png",
      spawnItems: [
        {
          itemId: "Itemizer.Bloodstone",
          item: "Bloodstone",
          usage:
            "Coloque uma Bloodstone no MechBot Altar dos Mech Towers para ativar o chefe.",
          imageUrl: "/textures/items/bloodstone.png",
        },
      ],
      entities: [
        {
          entity: "EntityMechBot",
          displayName: "MechBot",
          imageUrl: "/textures/mobs/mechBot.png",
          model: "/models/boss/mechbot/mech-bot/mech-bot.gltf",
          health: 2500,
        },
      ],
    },
    {
      name: "Silverfoot",
      howToSpawn:
        "Use uma Silvro Coin no Silverfoot Altar encontrado nas masmorras de Iromine (como nos Iromine Mazes) para chamar o boss.",
      notes:
        "Chefe veloz focado em ataques físicos; aparece junto ao conteúdo de exploração de Iromine e recompensa com drops temáticos.",
      imageUrl: "/textures/mobs/silverfoot.png",
      spawnItems: [
        {
          itemId: "Itemizer.CoinSilvro",
          item: "Silvro Coin",
          usage:
            "Interaja com o Silverfoot Altar segurando uma Silvro Coin para iniciar o combate.",
          imageUrl: "/textures/items/coinSilvro.png",
        },
      ],
      entities: [
        {
          entity: "EntitySilverfoot",
          displayName: "Silverfoot",
          imageUrl: "/textures/mobs/silverfoot.png",
          model: "/models/boss/silverfoot/silverfoot/silverfoot.gltf",
          health: 1400,
        },
      ],
    },
  ],
  biomes: [
    {
      name: "Golden Hills",
      id: 78,
      imageUrl: "/nvm2_data/img_data/Iromine/biomes/Iromine.png",
    },
    {
      name: "Iro-Tech Hills",
      id: 103,
      imageUrl: "/nvm2_data/img_data/Iromine/biomes/Iro-Tech_Hills.png",
    },
    {
      name: "Silvro Hills",
      id: 102,
      imageUrl: "/nvm2_data/img_data/Iromine/biomes/Silvro_Hills.png",
    },
  ],
  structures: [
    {
      name: "Enforcer Tower",
      imageUrl: "/nvm2_data/img_data/Iromine/structures/Enforcer_Tower.png",
    },
    {
      name: "Iro Maze",
      imageUrl: "/nvm2_data/img_data/Iromine/structures/Iro_Maze.png",
    },
    {
      name: "Professor's Lab",
      imageUrl: "/dimensions/common_images/Professors_Lab.png",
    },
  ],
};
