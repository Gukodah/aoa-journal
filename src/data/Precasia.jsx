export const Precasia = {
  id: "precasia",
  name: "Precasia",
  tier: 1,
  prerequisiteDimension: "Overworld",
  theme:
    "Mundo pré-histórico, natureza bruta e selvagem, vegetação densa, criaturas antigas e blocos de solo primitivos.",
  shortDescription:
    "Uma dimensão de tier 1 com biomas semelhantes ao Overworld (planícies, florestas, desertos) mas com características pré-históricas: gramados especiais, solos antigos, densas florestas de árvores gigantes, fauna antiga e recursos de início.",
  realmstone: {
    obtainHint:
      "Encontre Gravel Suspeito (Suspicious Gravel) que gera em biomas tipo selva no Overworld e escove-o para chance de dropar a Precasia Realmstone. ",
    obtainDetails:
      "Localize patchs de Suspicious Gravel no Overworld (em biomas de selva). Utilize a escova de arqueologia para “brush” o bloco, e com sorte obterá a Precasia Realmstone. Em seguida, utilize-a num Rune of Power para ativar o portal para Precasia. ",
    imageUrl: "/dimensions/precasia_images/Precasia_Realmstone.png",
  },
  imageUrl: "/dimensions/precasia_images/Precasia.png",
  wikiUrl: "https://adventofascension.fandom.com/wiki/Precasia",
  mainObjectives: [
    {
      id: "unlock_precasia",
      title: "Desbloquear Precasia",
      description:
        "Obtenha a Precasia Realmstone escovando Suspicious Gravel no Overworld e ative o portal para entrar na dimensão.",
      imageUrl: "/dimensions/ancientcavern_images/Precasia_Realmstone.png",
    },
    {
      id: "explore_biomes_pre",
      title: "Explorar os biomas de Precasia",
      description:
        "Percorra os biomas de Precasia — Planície, Floresta, Selva, Deserto, Deadlands, Tar Pits, Volcano — coletando gramados especiais (Precasian Grass, Precasian Soil) e experimentando fauna pré-histórica. ",
      imageUrl: "/dimensions/precasia_images/Precasian_Plains.png",
    },
    {
      id: "mine_precasia_resources",
      title: "Minerar recursos iniciais",
      description:
        "Desça para o subsolo de Precasia e colete fragmentos de ossos (Bone Fragments Ore) e outros minérios que aparecem ao nível mais profundo, preparando-se para dimensões seguintes. ",
      imageUrl: "/dimensions/shyrelands_images/Bone_Fragments_Ore.png",
    },
  ],
  secondaryObjectives: [
    {
      id: "visit_precasian_structures",
      title: "Visitar estruturas em Precasia",
      description:
        "Localize e visite estruturas geradas em Precasia, tais como Attercopus Nest, Precasian Lotto Hovel e Precasian Dens para mob­spawners e loot extra. ",
      imageUrl: "/dimensions/precasia_images/Precasian_Lotto_Hovel.png",
    },
    {
      id: "complete_bestiary_pre",
      title: "Completar o bestiário de fauna antiga",
      description:
        "Enfrente e registre mobs de Precasia como Attercopus, Megatherium, Sabre Tooth, Spinoledon, Veloraptor e outros para registrar no bestiário. ",
      imageUrl: "/dimensions/common_images/Megatherium.png",
    },
  ],
  progressionNotes: [
    {
      id: "entry_tier1_dimension",
      title: "Entrada para conteúdo de dimensões",
      description:
        "Precasia é uma das primeiras dimensões de tier 1 após o Overworld; funcionamento normal de mapa, ciclo dia/noite, respawn anchors, o que a torna ideal para se familiarizar com o mod. ",
      imageUrl: "/dimensions/precasia_images/Precasia.png",
    },
    {
      id: "preparation_for_next_tier",
      title: "Preparação para próximos mundos",
      description:
        "Os recursos e a progressão em Precasia fornecem o alicerce para avançar para ramos posteriores como Gardencia ou Creeponia, dependendo da build do jogador.",
    },
  ],
  versionNotes:
    "Dados baseados na wiki oficial para versão 1.0 da dimensão Precasia. Algumas mecânicas ou geração podem variar ligeiramente na versão Nevermine 2 (Tslat 1.1.3 em Minecraft 1.7.10). ",
  mobs: [
    {
      entity: "EntityDyrehorn",
      weight: 20,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Precasian Forest",
          imageUrl: "/dimensions/precasia_images/Precasian_Forest.png",
        },
        {
          name: "Precasian Desert",
          imageUrl: "/dimensions/precasia_images/Precasian_Desert.png",
        },
        {
          name: "Precasian Field",
          imageUrl: "/nvm2_data/img_data/Precasia/biomes/Precasian_Fields.png",
        },
        {
          name: "Tall Precasian Forest",
          imageUrl: "/dimensions/precasia_images/Precasian_Tall_Forest.png",
        },
      ],
      loot: [
        {
          item: "Precasian Gems",
          itemId: "Itemizer.CoinsPrecasian",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/precasianGems.png",
        },
        {
          item: "Gardencia Realmstone",
          itemId: "Itemizer.RealmstoneGardencia",
          quantity: 2,
          chance: 1,
          imageUrl: "/textures/items/realmstoneGardencia.png",
        },
      ],
      imageUrl: "/textures/mobs/dyrehorn.png",
      model: "/models/precasia/dyrehorn/dyrehorn.gltf",
      health: 110,
    },
    {
      entity: "EntityMegatherium",
      weight: 20,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Precasian Forest",
          imageUrl: "/dimensions/precasia_images/Precasian_Forest.png",
        },
        {
          name: "Precasian Desert",
          imageUrl: "/dimensions/precasia_images/Precasian_Desert.png",
        },
        {
          name: "Precasian Field",
          imageUrl: "/nvm2_data/img_data/Precasia/biomes/Precasian_Fields.png",
        },
        {
          name: "Tall Precasian Forest",
          imageUrl: "/dimensions/precasia_images/Precasian_Tall_Forest.png",
        },
      ],
      loot: [
        {
          item: "Precasian Gems",
          itemId: "Itemizer.CoinsPrecasian",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/precasianGems.png",
        },
        {
          item: "Ivory",
          itemId: "Itemizer.Ivory",
          quantity: 4,
          chance: 1,
          imageUrl: "/textures/blocks/ivory.png",
        },
        {
          item: "Ancient Upgrade Kit",
          itemId: "Itemizer.UpgradeKitAncient",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/upgradeKitAncient.png",
        },
      ],
      imageUrl: "/textures/mobs/megatherium.png",
      model: "/models/precasia/megatherium/megatherium.gltf",
      health: 250,
    },
    {
      entity: "EntitySabretooth",
      weight: 20,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Precasian Forest",
          imageUrl: "/dimensions/precasia_images/Precasian_Forest.png",
        },
        {
          name: "Precasian Desert",
          imageUrl: "/dimensions/precasia_images/Precasian_Desert.png",
        },
        {
          name: "Precasian Field",
          imageUrl: "/nvm2_data/img_data/Precasia/biomes/Precasian_Fields.png",
        },
        {
          name: "Tall Precasian Forest",
          imageUrl: "/dimensions/precasia_images/Precasian_Tall_Forest.png",
        },
      ],
      loot: [
        {
          item: "Precasian Gems",
          itemId: "Itemizer.CoinsPrecasian",
          quantity: 2,
          chance: 1,
          imageUrl: "/textures/items/precasianGems.png",
        },
        {
          item: "Ancient Upgrade Kit",
          itemId: "Itemizer.UpgradeKitAncient",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/upgradeKitAncient.png",
        },
        {
          item: "Weaponizer.Tommy",
          itemId: "Weaponizer.Tommy",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/tommy.png",
        },
      ],
      imageUrl: "/textures/mobs/sabretooth.png",
      model: "/models/precasia/sabretooth/sabretooth.gltf",
      health: 60,
    },
    {
      entity: "EntityGiantSlug",
      weight: 20,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Precasian Forest",
          imageUrl: "/dimensions/precasia_images/Precasian_Forest.png",
        },
        {
          name: "Precasian Desert",
          imageUrl: "/dimensions/precasia_images/Precasian_Desert.png",
        },
        {
          name: "Precasian Field",
          imageUrl: "/nvm2_data/img_data/Precasia/biomes/Precasian_Fields.png",
        },
        {
          name: "Tall Precasian Forest",
          imageUrl: "/dimensions/precasia_images/Precasian_Tall_Forest.png",
        },
      ],
      loot: [
        {
          item: "Precasian Gems",
          itemId: "Itemizer.CoinsPrecasian",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/precasianGems.png",
          itemName: "Precasian Gems",
        },
        {
          item: "Gardencia Realmstone",
          itemId: "Itemizer.RealmstoneGardencia",
          quantity: 2,
          chance: 0.06666666666666667,
          imageUrl: "/textures/items/gardenciaGems.png",
          itemName: "Gardencia Realmstone",
        },
        {
          item: "Ultra Cannon",
          itemId: "Weaponizer.UltraCannon",
          quantity: 1,
          chance: 0.01818181818181818,
          imageUrl: "/textures/items/ultraCannon.png",
          itemName: "Ultra Cannon",
        },
      ],
      imageUrl: "",
      model: "/models/precasia/giant-slug/giant-slug.gltf",
      health: 70,
    },
    {
      entity: "EntityTortione",
      weight: 3,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Precasian Forest",
          imageUrl: "/dimensions/precasia_images/Precasian_Forest.png",
        },
        {
          name: "Precasian Desert",
          imageUrl: "/dimensions/precasia_images/Precasian_Desert.png",
        },
        {
          name: "Precasian Field",
          imageUrl: "/nvm2_data/img_data/Precasia/biomes/Precasian_Fields.png",
        },
        {
          name: "Tall Precasian Forest",
          imageUrl: "/dimensions/precasia_images/Precasian_Tall_Forest.png",
        },
      ],
      loot: [
        {
          item: "Precasian Gems",
          itemId: "Itemizer.CoinsPrecasian",
          quantity: 6,
          chance: 1,
          imageUrl: "/textures/items/precasianGems.png",
        },
        {
          item: "Proton",
          itemId: "Weaponizer.Proton",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/proton.png",
        },
      ],
      imageUrl: "/textures/mobs/tortione.png",
      model: "/models/precasia/tortione/tortione.gltf",
      health: 30,
    },
    {
      entity: "EntityTerradon",
      weight: 1,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Precasian Forest",
          imageUrl: "/dimensions/precasia_images/Precasian_Forest.png",
        },
        {
          name: "Precasian Desert",
          imageUrl: "/dimensions/precasia_images/Precasian_Desert.png",
        },
        {
          name: "Precasian Field",
          imageUrl: "/nvm2_data/img_data/Precasia/biomes/Precasian_Fields.png",
        },
        {
          name: "Tall Precasian Forest",
          imageUrl: "/dimensions/precasia_images/Precasian_Tall_Forest.png",
        },
      ],
      loot: [
        {
          item: "Precasian Gems",
          itemId: "Itemizer.CoinsPrecasian",
          quantity: 6,
          chance: 1,
          imageUrl: "/textures/items/precasianGems.png",
        },
        {
          item: "Heavy Boulder",
          itemId: "Itemizer.HeavyBoulder",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/heavyBoulder.png",
        },
        {
          item: "Precasia Realmstone",
          itemId: "Itemizer.RealmstonePrecasia",
          quantity: 3,
          chance: 1,
          imageUrl: "/textures/items/realmstonePrecasia.png",
        },
      ],
      imageUrl: "/textures/mobs/terradon.png",
      model: "/models/precasia/terradon/terradon.gltf",
      health: 160,
    },
    {
      entity: "EntityDiocus",
      imageUrl: "/textures/mobs/diocus.png",
      model: "/models/precasia/diocus/diocus.gltf",
      health: 160,
      weight: 20,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Precasian Desert",
          imageUrl: "/dimensions/precasia_images/Precasian_Desert.png",
        },
        {
          name: "Precasian Field",
          imageUrl: "/nvm2_data/img_data/Precasia/biomes/Precasian_Fields.png",
        },
        {
          name: "Precasian Forest",
          imageUrl: "/dimensions/precasia_images/Precasian_Forest.png",
        },
        {
          name: "Tall Precasian Forest",
          imageUrl: "/dimensions/precasia_images/Precasian_Tall_Forest.png",
        },
      ],
      loot: [
        {
          item: "Power Ray",
          itemId: "Weaponizer.PowerRay",
          quantity: 1,
          chance: 0.01,
          imageUrl: "/textures/items/powerRay.png",
          itemName: "Power Ray",
        },
        {
          item: "Explosive Idol",
          itemId: "Itemizer.ExplosiveIdol",
          quantity: 1,
          chance: 0.14285714285714285,
          imageUrl: "/textures/items/explosiveIdol.png",
          itemName: "Explosive Idol",
        },
        {
          item: "Precasian Upgrade Kit",
          itemId: "Itemizer.UpgradeKitPrecasian",
          quantity: 1,
          chance: 0.005,
          imageUrl: "/textures/items/upgradeKitPrecasian.png",
          itemName: "Precasian Upgrade Kit",
        },
      ],
    },
    {
      entity: "EntityIosaur",
      imageUrl: "/textures/mobs/iosaur.png",
      model: "/models/precasia/iosaur/iosaur.gltf",
      health: 120,
      weight: 20,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Precasian Desert",
          imageUrl: "/dimensions/precasia_images/Precasian_Desert.png",
        },
        {
          name: "Precasian Field",
          imageUrl: "/nvm2_data/img_data/Precasia/biomes/Precasian_Fields.png",
        },
        {
          name: "Precasian Forest",
          imageUrl: "/dimensions/precasia_images/Precasian_Forest.png",
        },
        {
          name: "Tall Precasian Forest",
          imageUrl: "/dimensions/precasia_images/Precasian_Tall_Forest.png",
        },
      ],
      loot: [
        {
          item: "Rejuvenation Staff",
          itemId: "Weaponizer.RejuvenationStaff",
          quantity: 1,
          chance: 0.030303030303030304,
          imageUrl: "/textures/items/rejuvenationStaff.png",
          itemName: "Rejuvenation Staff",
        },
        {
          item: "Precasian Gems",
          itemId: "Itemizer.CoinsPrecasian",
          quantity: 3,
          chance: 1,
          imageUrl: "/textures/items/precasianGems.png",
          itemName: "Precasian Gems",
        },
        {
          item: "Precasian Upgrade Kit",
          itemId: "Itemizer.UpgradeKitPrecasian",
          quantity: 1,
          chance: 0.005,
          imageUrl: "/textures/items/upgradeKitPrecasian.png",
          itemName: "Precasian Upgrade Kit",
        },
      ],
    },
    {
      entity: "EntityKaiyu",
      imageUrl: "/textures/mobs/kaiyu.png",
      model: "/models/precasia/kaiyu/kaiyu.gltf",
      health: 125,
      weight: 20,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Precasian Desert",
          imageUrl: "/dimensions/precasia_images/Precasian_Desert.png",
        },
        {
          name: "Precasian Field",
          imageUrl: "/nvm2_data/img_data/Precasia/biomes/Precasian_Fields.png",
        },
        {
          name: "Precasian Forest",
          imageUrl: "/dimensions/precasia_images/Precasian_Forest.png",
        },
        {
          name: "Tall Precasian Forest",
          imageUrl: "/dimensions/precasia_images/Precasian_Tall_Forest.png",
        },
      ],
      loot: [
        {
          item: "Kaiyu Staff",
          itemId: "Weaponizer.KaiyuStaff",
          quantity: 1,
          chance: 0.0125,
          imageUrl: "/textures/items/kaiyuStaff.png",
          itemName: "Kaiyu Staff",
        },
        {
          item: "Ancient Orb",
          itemId: "Itemizer.AncientOrb",
          quantity: 1,
          chance: 0.03333333333333333,
          imageUrl: "/textures/items/ancientOrb.png",
          itemName: "Ancient Orb",
        },
        {
          item: "Ancient Upgrade Kit",
          itemId: "Itemizer.UpgradeKitAncient",
          quantity: 1,
          chance: 0.005,
          imageUrl: "/textures/items/upgradeKitAncient.png",
          itemName: "Ancient Upgrade Kit",
        },
      ],
    },
    {
      entity: "EntityOpteryx",
      imageUrl: "/textures/mobs/opteryx.png",
      model: "/models/precasia/opteryx/opteryx.gltf",
      health: 60,
      weight: 20,
      min: 1,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Precasian Desert",
          imageUrl: "/dimensions/precasia_images/Precasian_Desert.png",
        },
        {
          name: "Precasian Field",
          imageUrl: "/nvm2_data/img_data/Precasia/biomes/Precasian_Fields.png",
        },
        {
          name: "Precasian Forest",
          imageUrl: "/dimensions/precasia_images/Precasian_Forest.png",
        },
        {
          name: "Tall Precasian Forest",
          imageUrl: "/dimensions/precasia_images/Precasian_Tall_Forest.png",
        },
      ],
      loot: [
        {
          item: "Opteryx Feather",
          itemId: "Itemizer.OpteryxFeather",
          quantity: 2,
          chance: 0.5,
          imageUrl: "/textures/items/opteryxFeather.png",
          itemName: "Opteryx Feather",
        },
      ],
    },
    {
      entity: "EntitySpinoledon",
      imageUrl: "/textures/mobs/spinoledon.png",
      model: "/models/precasia/spinoledon/spinoledon.gltf",
      health: 150,
      weight: 20,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Precasian Desert",
          imageUrl: "/dimensions/precasia_images/Precasian_Desert.png",
        },
        {
          name: "Precasian Field",
          imageUrl: "/nvm2_data/img_data/Precasia/biomes/Precasian_Fields.png",
        },
        {
          name: "Precasian Forest",
          imageUrl: "/dimensions/precasia_images/Precasian_Forest.png",
        },
        {
          name: "Tall Precasian Forest",
          imageUrl: "/dimensions/precasia_images/Precasian_Tall_Forest.png",
        },
      ],
      loot: [
        {
          item: "Precasian Gems",
          itemId: "Itemizer.CoinsPrecasian",
          quantity: 2,
          chance: 1,
          imageUrl: "/textures/items/precasianGems.png",
          itemName: "Precasian Gems",
        },
        {
          item: "Squad Gun",
          itemId: "Weaponizer.SquadGun",
          quantity: 1,
          chance: 0.005,
          imageUrl: "/textures/items/squadGun.png",
          itemName: "Squad Gun",
        },
        {
          item: "Precasian Upgrade Kit",
          itemId: "Itemizer.UpgradeKitPrecasian",
          quantity: 1,
          chance: 0.005,
          imageUrl: "/textures/items/upgradeKitPrecasian.png",
          itemName: "Precasian Upgrade Kit",
        },
      ],
    },
  ],
  npcs: [
    {
      entity: "EntityLottomanPrecasia",
      notes: "Gerado automaticamente por estruturas da dimensão.",
      displayName: "LottomanPrecasia",
      registeredBiomes: [],
      loot: [],
      trades: [
        {
          input: {
            item: "Precasian Gems",
            itemId: "Itemizer.CoinsPrecasian",
            quantity: 10,
            metadata: 1,
            imageUrl: "/textures/items/precasianGems.png",
          },
          output: {
            item: "Abominator Totem",
            itemId: "Totemizer.TotemAbominator",
            quantity: 1,
            imageUrl: "/textures/items/totemAbominator.png",
          },
        },
        {
          input: {
            item: "Precasian Gems",
            itemId: "Itemizer.CoinsPrecasian",
            quantity: 10,
            metadata: 1,
            imageUrl: "/textures/items/precasianGems.png",
          },
          output: {
            item: "Ancient Bow Totem",
            itemId: "Totemizer.TotemAncientBow",
            quantity: 1,
            imageUrl: "/textures/items/totemAncientBow.png",
          },
        },
        {
          input: {
            item: "Precasian Gems",
            itemId: "Itemizer.CoinsPrecasian",
            quantity: 40,
            metadata: 1,
            imageUrl: "/textures/items/precasianGems.png",
          },
          output: {
            item: "Abominator Totem",
            itemId: "Totemizer.TotemAbominator",
            quantity: 10,
            imageUrl: "/textures/items/totemAbominator.png",
          },
          additionalInput: {
            item: "Precasian Gems",
            itemId: "Itemizer.CoinsPrecasian",
            quantity: 35,
            imageUrl: "/textures/items/precasianGems.png",
          },
        },
        {
          input: {
            item: "Precasian Gems",
            itemId: "Itemizer.CoinsPrecasian",
            quantity: 40,
            metadata: 1,
            imageUrl: "/textures/items/precasianGems.png",
          },
          output: {
            item: "Ancient Bow Totem",
            itemId: "Totemizer.TotemAncientBow",
            quantity: 10,
            imageUrl: "/textures/items/totemAncientBow.png",
          },
          additionalInput: {
            item: "Precasian Gems",
            itemId: "Itemizer.CoinsPrecasian",
            quantity: 35,
            imageUrl: "/textures/items/precasianGems.png",
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
      imageUrl: "/textures/mobs/lottomanPrecasia.png",
      model: "/models/npc/lottoman/lottoman.gltf",
    },
  ],
  generatedOres: [
    {
      field: "Blockizer.oreSkullFragment",
      displayName: "Ore Skull Fragment",
      veinSize: 4,
      attemptsPerChunk: 2,
      replaces: "Blockizer.StonePrecasianLow",
      height: {
        min: 0,
        max: 39,
      },
      imageUrl: "/ores/chest_fragments_ore.png",
    },
    {
      field: "Blockizer.oreFootFragment",
      displayName: "Ore Foot Fragment",
      veinSize: 4,
      attemptsPerChunk: 2,
      replaces: "Blockizer.StonePrecasianLow",
      height: {
        min: 0,
        max: 39,
      },
      imageUrl: "/ores/foot_fragments_ore.png",
    },
    {
      field: "Blockizer.oreLegFragment",
      displayName: "Ore Leg Fragment",
      veinSize: 4,
      attemptsPerChunk: 2,
      replaces: "Blockizer.StonePrecasianLow",
      height: {
        min: 0,
        max: 39,
      },
      imageUrl: "/ores/leg_fragments_ore.png",
    },
    {
      field: "Blockizer.oreChestboneFragment",
      displayName: "Ore Chestbone Fragment",
      veinSize: 4,
      attemptsPerChunk: 2,
      replaces: "Blockizer.StonePrecasianLow",
      height: {
        min: 0,
        max: 39,
      },
      imageUrl: "/ores/chest_fragments_ore.png",
    },
  ],
  generatedStructures: [
    {
      className: "KaiyuTempleP1",
      name: "Kaiyu Temple",
      context: "StructureGenRare #3",
      chance: {
        description: "1 em 1000",
        formula: "randomNumrare == 135 (random.nextInt(1000) + 1)",
        denominator: 1000,
        comparator: "==",
        value: 135,
      },
      biome: null,
      imageUrl: "",
    },
    {
      className: "SkeletalArmyArena",
      name: "Skeletal Army Arena",
      context: "StructureGenRare #4",
      chance: {
        description: "1 em 1000",
        formula: "randomNumrare == 242 (random.nextInt(1000) + 1)",
        denominator: 1000,
        comparator: "==",
        value: 242,
      },
      biome: null,
      imageUrl: "/dimensions/common_images/Skeletal_Army_Arena.png",
    },
    {
      className: "PrecasiaDen1",
      name: "Precasia Den 1",
      context: "StructureGenRare #5",
      chance: {
        description: "1 em 600",
        formula: "randomNumcommon == 34 (random.nextInt(600) + 1)",
        denominator: 600,
        comparator: "==",
        value: 34,
      },
      biome: null,
      imageUrl: "",
    },
    {
      className: "PrecasiaDen2",
      name: "Precasia Den 2",
      context: "StructureGenRare #6",
      chance: {
        description: "1 em 600",
        formula: "randomNumcommon == 23 (random.nextInt(600) + 1)",
        denominator: 600,
        comparator: "==",
        value: 23,
      },
      biome: null,
      imageUrl: "",
    },
    {
      className: "PrecasiaDen3",
      name: "Precasia Den 3",
      context: "StructureGenRare #7",
      chance: null,
      biome: null,
      imageUrl: "",
    },
    {
      className: "net.nevermine.structures.precasia.TyrosaurAltar",
      name: "Tyrosaur Altar",
      context: "generatePrecasia",
      chance: {
        description: "1 em 800",
        formula: "random.nextInt(800) == 301",
        denominator: 800,
        comparator: "==",
        value: 301,
      },
      biome: null,
      imageUrl: "/textures/blocks/tyrosaurAltar.png",
    },
    {
      className: "AncientCactus1",
      name: "Ancient Cactus 1",
      context: "ChunkProviderPrecasia.java",
      chance: null,
      biome: null,
      imageUrl: "",
    },
    {
      className: "AncientCactus2",
      name: "Ancient Cactus 2",
      context: "ChunkProviderPrecasia.java",
      chance: null,
      biome: null,
      imageUrl: "",
    },
    {
      className: "AncientCactus3",
      name: "Ancient Cactus 3",
      context: "ChunkProviderPrecasia.java",
      chance: null,
      biome: null,
      imageUrl: "",
    },
    {
      className: "EucadonTree",
      name: "Eucadon Tree",
      context: "ChunkProviderPrecasia.java",
      chance: null,
      biome: null,
      imageUrl: "",
    },
    {
      className: "DomiguousTree1",
      name: "Domiguous Tree 1",
      context: "ChunkProviderPrecasia.java",
      chance: null,
      biome: null,
      imageUrl: "",
    },
    {
      className: "DomiguousTree2",
      name: "Domiguous Tree 2",
      context: "ChunkProviderPrecasia.java",
      chance: null,
      biome: null,
      imageUrl: "",
    },
    {
      className: "MelumiaTree",
      name: "Melumia Tree",
      context: "ChunkProviderPrecasia.java",
      chance: null,
      biome: null,
      imageUrl: "",
    },
  ],
  resources: [
    {
      name: "Precasian Grass",
      type: "Bloco de superfície",
      usage:
        "Bloco dominante na superfície da Precasia usado para construções temáticas e estética de base. ",
      imageUrl: "/dimensions/precasia_images/Precasian_Grass.png",
    },
  ],
  bosses: [
    {
      name: "Skeletal Army",
      howToSpawn:
        "Invocado em grande densidade de mobs esqueléticos no subsolo; exige preparo e equipamento adequado para tier 1.",
      notes:
        "Boss de Precasia ligado à mecânica de esqueletos e fragmentos ósseos; derrota fornece loot e progressão temática.",
      imageUrl: "/dimensions/common_images/Skeletal_Army.png",
      spawnItems: [
        {
          itemId: "Itemizer.AncientOrb",
          item: "Ancient Orb",
          usage:
            "Ative o Army Block encontrado nas fortalezas de Precasia segurando um Ancient Orb.",
          imageUrl: "/textures/items/ancientOrb.png",
        },
      ],
      entities: [
        {
          entity: "EntitySkeletron",
          displayName: "Skeletron",
          imageUrl: "/textures/mobs/skeletron.png",
          model: "/models/boss/skeletalarmy/skeletron/skeletron.gltf",
          health: 1100,
        },
        {
          entity: "EntitySkeleElder",
          displayName: "Skele-Elder",
          imageUrl: "/textures/mobs/skeleelder.png",
          model: "/models/boss/skeletalarmy/skele-elder/skele-elder.gltf",
          health: 60,
        },
        {
          entity: "EntitySkeleHopper",
          displayName: "Skele-Hopper",
          imageUrl: "/textures/mobs/skelehopper.png",
          model: "/models/boss/skeletalarmy/skele-hopper/skele-hopper.gltf",
          health: 16,
        },
        {
          entity: "EntitySkeleman",
          displayName: "Skeleman",
          imageUrl: "/textures/mobs/skeleman.png",
          model: "/models/boss/skeletalarmy/skeleman/skeleman.gltf",
          health: 30,
        },
        {
          entity: "EntitySkelepig",
          displayName: "Skelepig",
          imageUrl: "/textures/mobs/skelepig.png",
          model: "/models/boss/skeletalarmy/skelepig/skelepig.gltf",
          health: 20,
        },
      ],
      loot: [
        {
          item: "Skeletal Sword",
          itemId: "Weaponizer.SkeletalSword",
          minQuantity: 1,
          maxQuantity: 1,
          chance: 1,
          sourceEntities: ["EntitySkeletron"],
          imageUrl: "/dimensions/common_images/Skeletal_Sword.png",
        },
        {
          item: "Skeletal Bow",
          itemId: "Weaponizer.SkeletalBow",
          minQuantity: 1,
          maxQuantity: 1,
          chance: 1,
          sourceEntities: ["EntitySkeletron"],
          imageUrl: "/dimensions/common_images/Skeletal_Bow.png",
        },
        {
          item: "Lightning Staff",
          itemId: "Weaponizer.LightningStaff",
          minQuantity: 1,
          maxQuantity: 1,
          chance: 1,
          sourceEntities: ["EntitySkeletron"],
          imageUrl: "/textures/items/lightningStaff.png",
        },
        {
          item: "Bone Blaster",
          itemId: "Weaponizer.BoneBlaster",
          minQuantity: 1,
          maxQuantity: 1,
          chance: 1,
          sourceEntities: ["EntitySkeletron"],
          imageUrl: "/textures/items/boneBlaster.png",
        },
        {
          item: "Commander Boots",
          itemId: "Armorizer.CommanderBoots",
          minQuantity: 1,
          maxQuantity: 1,
          chance: 1,
          sourceEntities: ["EntitySkeletron"],
          imageUrl: "/dimensions/common_images/Commander_Boots.png",
        },
        {
          item: "Commander Leggings",
          itemId: "Armorizer.CommanderLeggings",
          minQuantity: 1,
          maxQuantity: 1,
          chance: 1,
          sourceEntities: ["EntitySkeletron"],
          imageUrl: "/dimensions/common_images/Commander_Leggings.png",
        },
        {
          item: "Commander Chestplate",
          itemId: "Armorizer.CommanderChestplate",
          minQuantity: 1,
          maxQuantity: 1,
          chance: 1,
          sourceEntities: ["EntitySkeletron"],
          imageUrl: "/dimensions/common_images/Commander_Chestplate.png",
        },
        {
          item: "Commander Helmet",
          itemId: "Armorizer.CommanderHelmet",
          minQuantity: 1,
          maxQuantity: 1,
          chance: 1,
          sourceEntities: ["EntitySkeletron"],
          imageUrl: "/dimensions/common_images/Commander_Helmet.png",
        },
      ],
    },
    {
      name: "Tyrosaur",
      howToSpawn:
        "Use uma Bloodstone no Tyrosaur Altar encontrado nas estruturas de Precasia para invocar o chefe.",
      notes:
        "Predador pesado de Precasia com ataques de investida e stomp; bom teste de resistência física antes de avançar para tiers mais altos.",
      imageUrl: "/textures/mobs/tyrosaur.png",
      spawnItems: [
        {
          itemId: "Itemizer.Bloodstone",
          item: "Bloodstone",
          usage:
            "Interaja com o Tyrosaur Altar segurando uma Bloodstone para iniciar a luta.",
          imageUrl: "/textures/items/bloodstone.png",
        },
      ],
      entities: [
        {
          entity: "EntityTyrosaur",
          displayName: "Tyrosaur",
          imageUrl: "/textures/mobs/tyrosaur.png",
          model: "/models/boss/tyrosaur/tyrosaur/tyrosaur.gltf",
          health: 4000,
        },
      ],
    },
  ],
  biomes: [
    {
      name: "Precasian Forest",
      id: 75,
      imageUrl: "/nvm2_data/img_data/Precasia/biomes/Precasia.png",
    },
    {
      name: "Precasian Desert",
      id: 96,
      imageUrl: "/nvm2_data/img_data/Precasia/biomes/Precasian_Desert.png",
    },
    {
      name: "Precasian Field",
      id: 97,
      imageUrl: "/nvm2_data/img_data/Precasia/biomes/Precasian_Fields.png",
    },
    {
      name: "Precasian Tall Forest",
      id: 99,
      imageUrl: "/nvm2_data/img_data/Precasia/biomes/Precasian_Tall_Forest.png",
    },
  ],
  structures: [
    {
      name: "Precasian Lotto Hovel",
      imageUrl:
        "/nvm2_data/img_data/Precasia/structures/Precasian_Lotto_Hovel.png",
    },
  ],
};
