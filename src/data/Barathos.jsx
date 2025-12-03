export const Barathos = {
  id: "barathos",
  name: "Barathos",
  tier: 1,
  prerequisiteDimension: "Overworld",
  theme:
    "Deserto vulcânico e rochoso com atmosfera árida, sol fixo no céu e subsolo tomado por minérios infernais.",
  shortDescription:
    "Terreno de Baron Stone e Baron Ground, com pouca vegetação e formações rochosas, abrigando castelos, ninhos de insetos gigantes e fendas cheias de lava.",
  realmstone: {
    obtainHint:
      "Derrote um Husk enquanto carrega um Blank Realmstone para convertê-lo em Barathos Realmstone.",
    obtainDetails:
      "Com um Blank Realmstone no inventário, mate um Husk (variante de zumbi de deserto). A morte do Husk completa a tarefa e transforma o Blank Realmstone em Barathos Realmstone.",
    imageUrl: "/dimensions/barathos_images/Barathos_Realmstone.png",
  },
  imageUrl: "/dimensions/barathos_images/Barathos.png",
  wikiUrl: "https://adventofascension.fandom.com/wiki/Barathos",
  mainObjectives: [
    {
      id: "unlock_dimension",
      title: "Desbloquear Barathos",
      description:
        "Conseguir a Barathos Realmstone derrotando um Husk com um Blank Realmstone no inventário e ativar um portal de AoA.",
      imageUrl: "/dimensions/barathos_images/Barathos_Realmstone.png",
    },
    {
      id: "mine_ores",
      title: "Minerar minérios infernais",
      description:
        "Buscar Baronyte Ore, Blazium Ore e Varsium Ore nas camadas médias e profundas do subsolo para forjar armaduras e armas mais fortes.",
      imageUrl: "/dimensions/barathos_images/Baronyte_Ore.png",
    },
    {
      id: "explore_structures",
      title: "Explorar estruturas de Barathos",
      description:
        "Investigar Baron Castles, Baron Houses e Hive Nests em busca de NPCs, loot, maquinário e pistas sobre os bosses.",
    },
    {
      id: "defeat_bosses",
      title: "Derrotar Baroness e Hive King",
      description:
        "Enfrentar a Baroness nos castelos e o Hive King nos ninhos de insetos para obter drops de alto nível e desbloquear conquistas.",
    },
  ],
  mainObjectivesImages: [],
  secondaryObjectives: [
    "Farmar mobs como Arkback, Emperor Beast e Cryptid para obter drops raros, moedas e materiais de craft.",
    "Aproveitar a iluminação constante de Barathos para minerar e explorar sem depender tanto de tochas.",
    "Coletar Hellstone, Baron Stone e outros blocos de ambiente para bases e construções temáticas.",
    "Usar Barathos como preparação para Iromine, acumulando minérios metálicos e equipamentos de combate pesados.",
  ],
  secondaryObjectivesImages: [
    "https://adventofascension.fandom.com/wiki/Category:Barathos_mobs",
    "https://adventofascension.fandom.com/wiki/File:Barathos.png",
    "https://adventofascension.fandom.com/wiki/Baronyte_Ore",
    "https://adventofascension.fandom.com/wiki/Iromine",
  ],
  progressionNotes: [
    {
      id: "Barathos é uma dimensão de tier 1",
      title: "Barathos é uma dimensão de tier 1",
      description:
        "Barathos é uma dimensão de tier 1 que expande o tema desértico/lava além do Nether, indicada logo após consolidar equipamentos de Overworld.",
    },
    {
      id: "Os minérios exclusivos de Barathos",
      title: "Os minérios exclusivos de Barathos",
      description:
        "Os minérios exclusivos de Barathos permitem um salto grande de poder ofensivo e defensivo, preparando o jogador para Iromine e outros mundos de maior dificuldade.",
    },
    {
      id: "Teste de combate de mid-game",
      title: "Teste de combate de mid-game",
      description:
        "A combinação de bosses (Baroness e Hive King) funciona como teste de combate de mid-game, exigindo resistência a dano físico e controle de mobs.",
    },
  ],
  progressionImages: [
    "https://adventofascension.fandom.com/wiki/File:Barathos.png",
    "https://adventofascension.fandom.com/wiki/Baronyte_Ingot",
    "https://adventofascension.fandom.com/wiki/Iromine",
  ],
  versionNotes:
    "Na Tslat 1.1.3 Barathos já aparece como deserto rochoso com minérios Baronyte, Blazium e Varsium. Mudanças posteriores de geração e luz podem existir em AoA3, mas a função da dimensão como fonte de minérios metálicos de early/mid-game e ponte para Iromine se mantém.",
  mobs: [
    {
      entity: "EntityArkback",
      weight: 20,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Barathos",
          imageUrl: "/dimensions/barathos_images/Barathos.png",
        },
        {
          name: "Alien Forest",
          imageUrl: "/dimensions/common_images/Alien_Forest.png",
        },
        {
          name: "Rocky Mazus",
          imageUrl: "/dimensions/common_images/Rocky_Mazus.png",
        },
      ],
      loot: [
        {
          item: "Baron Greatblade",
          itemId: "Weaponizer.BaronGreatblade",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/baronGreatblade.png",
        },
        {
          item: "Barathos Gems",
          itemId: "Itemizer.CoinsBarathos",
          quantity: 3,
          chance: 1,
          imageUrl: "/dimensions/barathos_images/Barathos.png",
        },
      ],
      imageUrl: "/textures/mobs/arkback.png",
      model: "/models/barathos/arkback/arkback.gltf",
      health: 200,
    },
    {
      entity: "EntityEmperorBeast",
      weight: 20,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Barathos",
          imageUrl: "/dimensions/barathos_images/Barathos.png",
        },
        {
          name: "Alien Forest",
          imageUrl: "/dimensions/common_images/Alien_Forest.png",
        },
        {
          name: "Rocky Mazus",
          imageUrl: "/dimensions/common_images/Rocky_Mazus.png",
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
      imageUrl: "/textures/mobs/emperorbeast.png",
      model: "/models/barathos/emperor-beast/emperor-beast.gltf",
      health: 250,
    },
    {
      entity: "EntityNospike",
      weight: 20,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Barathos",
          imageUrl: "/dimensions/barathos_images/Barathos.png",
        },
        {
          name: "Alien Forest",
          imageUrl: "/dimensions/common_images/Alien_Forest.png",
        },
        {
          name: "Rocky Mazus",
          imageUrl: "/dimensions/common_images/Rocky_Mazus.png",
        },
      ],
      loot: [
        {
          item: "Destruction Rifle",
          itemId: "Weaponizer.DestructionRifle",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/destructionRifle.png",
        },
        {
          item: "Barathos Gems",
          itemId: "Itemizer.CoinsBarathos",
          quantity: 2,
          chance: 1,
          imageUrl: "/dimensions/barathos_images/Barathos.png",
        },
        {
          item: "Rocky Upgrade Kit",
          itemId: "Itemizer.UpgradeKitRocky",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/upgradeKitRocky.png",
        },
        {
          item: "Baron Banner",
          itemId: "SpecialBlockizer.BaronBanner",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/banner/baronBanner.png",
        },
      ],
      imageUrl: "/textures/mobs/nospike.png",
      model: "/models/barathos/nospike/nospike.gltf",
      health: 60,
    },
    {
      entity: "EntityRamradon",
      weight: 20,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Barathos",
          imageUrl: "/dimensions/barathos_images/Barathos.png",
        },
        {
          name: "Alien Forest",
          imageUrl: "/dimensions/common_images/Alien_Forest.png",
        },
        {
          name: "Rocky Mazus",
          imageUrl: "/dimensions/common_images/Rocky_Mazus.png",
        },
      ],
      loot: [
        {
          item: "Destruction Shotgun",
          itemId: "Weaponizer.DestructionShotgun",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/destructionShotgun.png",
        },
        {
          item: "Rocky Upgrade Kit",
          itemId: "Itemizer.UpgradeKitRocky",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/upgradeKitRocky.png",
        },
      ],
      imageUrl: "/textures/mobs/ramradon.png",
      model: "/models/barathos/ramradon/ramradon.gltf",
      health: 45,
    },
    {
      entity: "EntityTharafly",
      weight: 20,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Barathos",
          imageUrl: "/dimensions/barathos_images/Barathos.png",
        },
        {
          name: "Alien Forest",
          imageUrl: "/dimensions/common_images/Alien_Forest.png",
        },
        {
          name: "Rocky Mazus",
          imageUrl: "/dimensions/common_images/Rocky_Mazus.png",
        },
      ],
      loot: [],
      imageUrl: "/textures/mobs/tharafly.png",
      model: "/models/barathos/tharafly/tharafly.gltf",
      health: 45,
    },
    {
      entity: "EntityKeeler",
      weight: 20,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Barathos",
          imageUrl: "/dimensions/barathos_images/Barathos.png",
        },
        {
          name: "Alien Forest",
          imageUrl: "/dimensions/common_images/Alien_Forest.png",
        },
        {
          name: "Rocky Mazus",
          imageUrl: "/dimensions/common_images/Rocky_Mazus.png",
        },
      ],
      loot: [
        {
          item: "Weaponizer.BaronBow",
          itemId: "Weaponizer.BaronBow",
          quantity: 1,
          chance: 1,
          imageUrl: "/dimensions/barathos_images/Baron_Bow.png",
        },
        {
          item: "Rocky Upgrade Kit",
          itemId: "Itemizer.UpgradeKitRocky",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/upgradeKitRocky.png",
        },
      ],
      imageUrl: "/textures/mobs/keeler.png",
      model: "/models/barathos/keeler/keeler.gltf",
      health: 35,
    },
    {
      entity: "EntityParasect",
      weight: 20,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Barathos",
          imageUrl: "/dimensions/barathos_images/Barathos.png",
        },
        {
          name: "Alien Forest",
          imageUrl: "/dimensions/common_images/Alien_Forest.png",
        },
        {
          name: "Rocky Mazus",
          imageUrl: "/dimensions/common_images/Rocky_Mazus.png",
        },
      ],
      loot: [
        {
          item: "Hive Chunk",
          itemId: "Itemizer.HiveChunk",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/hiveChunk.png",
        },
      ],
      imageUrl: "/textures/mobs/parasect.png",
      model: "/models/barathos/parasect/parasect.gltf",
      health: 60,
    },
    {
      entity: "EntityEchodar",
      weight: 20,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Barathos",
          imageUrl: "/dimensions/barathos_images/Barathos.png",
        },
        {
          name: "Alien Forest",
          imageUrl: "/dimensions/common_images/Alien_Forest.png",
        },
        {
          name: "Rocky Mazus",
          imageUrl: "/dimensions/common_images/Rocky_Mazus.png",
        },
      ],
      loot: [
        {
          item: "Echo Gull",
          itemId: "Weaponizer.EchoGull",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/echoGull.png",
        },
      ],
      imageUrl: "/textures/mobs/echodar.png",
      model: "/models/barathos/echodar/echodar.gltf",
      health: 35,
    },
    {
      entity: "EntityCryptid",
      weight: 20,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Barathos",
          imageUrl: "/dimensions/barathos_images/Barathos.png",
        },
        {
          name: "Alien Forest",
          imageUrl: "/dimensions/common_images/Alien_Forest.png",
        },
        {
          name: "Rocky Mazus",
          imageUrl: "/dimensions/common_images/Rocky_Mazus.png",
        },
      ],
      loot: [
        {
          item: "Baron Sword",
          itemId: "Weaponizer.BaronSword",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/swordBaron.png",
        },
        {
          item: "Underworld Staff",
          itemId: "Weaponizer.UnderworldStaff",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/underworldStaff.png",
        },
        {
          item: "Barathos Gems",
          itemId: "Itemizer.CoinsBarathos",
          quantity: 3,
          chance: 1,
          imageUrl: "/dimensions/barathos_images/Barathos.png",
        },
      ],
      imageUrl: "/textures/mobs/cryptid.png",
      model: "/models/barathos/cryptid/cryptid.gltf",
      health: 40,
    },
    {
      entity: "EntitySquiggler",
      weight: 1,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Barathos",
          imageUrl: "/dimensions/barathos_images/Barathos.png",
        },
        {
          name: "Alien Forest",
          imageUrl: "/dimensions/common_images/Alien_Forest.png",
        },
        {
          name: "Rocky Mazus",
          imageUrl: "/dimensions/common_images/Rocky_Mazus.png",
        },
      ],
      loot: [
        {
          item: "Underworld Greatblade",
          itemId: "Weaponizer.UnderworldGreatblade",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/underworldGreatblade.png",
        },
      ],
      imageUrl: "/textures/mobs/squiggler.png",
      model: "/models/barathos/squiggler/squiggler.gltf",
      health: 60,
    },
    {
      entity: "EntityEilosapien",
      weight: 1,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Barathos",
          imageUrl: "/dimensions/barathos_images/Barathos.png",
        },
        {
          name: "Alien Forest",
          imageUrl: "/dimensions/common_images/Alien_Forest.png",
        },
        {
          name: "Rocky Mazus",
          imageUrl: "/dimensions/common_images/Rocky_Mazus.png",
        },
      ],
      loot: [
        {
          item: "Baronator",
          itemId: "Weaponizer.Baronator",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/baronator.png",
        },
        {
          item: "Baron Banner",
          itemId: "SpecialBlockizer.BaronBanner",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/banner/baronBanner.png",
        },
        {
          item: "Barathos Realmstone",
          itemId: "Itemizer.RealmstoneBarathos",
          quantity: 3,
          chance: 1,
          imageUrl: "/textures/items/realmstoneBarathos.png",
        },
      ],
      imageUrl: "/textures/mobs/eilosapien.png",
      model: "/models/barathos/eilosapien/eilosapien.gltf",
      health: 100,
    },
    {
      entity: "EntityTorano",
      imageUrl: "/textures/mobs/torano.png",
      model: "/models/barathos/torano/torano.gltf",
      health: 60,
      weight: 20,
      min: 1,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Barathos",
          imageUrl: "/dimensions/barathos_images/Barathos.png",
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
          itemId: "Itemizer.RealmstoneFragment2",
          quantity: 1,
          chance: 0.03333333333333333,
          imageUrl: "/textures/items/realmstoneFragmentM.png",
          itemName: "Realmstone Fragment",
        },
      ],
    },
  ],
  npcs: [
    {
      entity: "EntityLottomanBarathos",
      notes: "Gerado automaticamente por estruturas da dimensão.",
      displayName: "LottomanBarathos",
      registeredBiomes: [],
      loot: [],
      trades: [
        {
          input: {
            item: "Barathos Gems",
            itemId: "Itemizer.CoinsBarathos",
            quantity: 10,
            metadata: 1,
          },
          output: {
            item: "Baron Staff Totem",
            itemId: "Totemizer.TotemBaronStaff",
            quantity: 1,
            imageUrl: "/textures/items/totemBaronStaff.png",
          },
        },
        {
          input: {
            item: "Barathos Gems",
            itemId: "Itemizer.CoinsBarathos",
            quantity: 10,
            metadata: 1,
          },
          output: {
            item: "Baron SSR Totem",
            itemId: "Totemizer.TotemBaronSSR",
            quantity: 1,
            imageUrl: "/textures/items/totemBaronSSR.png",
          },
        },
        {
          input: {
            item: "Barathos Gems",
            itemId: "Itemizer.CoinsBarathos",
            quantity: 40,
            metadata: 1,
          },
          output: {
            item: "Baron Staff Totem",
            itemId: "Totemizer.TotemBaronStaff",
            quantity: 10,
            imageUrl: "/textures/items/totemBaronStaff.png",
          },
          additionalInput: {
            item: "Barathos Gems",
            itemId: "Itemizer.CoinsBarathos",
            quantity: 35,
          },
        },
        {
          input: {
            item: "Barathos Gems",
            itemId: "Itemizer.CoinsBarathos",
            quantity: 40,
            metadata: 1,
          },
          output: {
            item: "Baron SSR Totem",
            itemId: "Totemizer.TotemBaronSSR",
            quantity: 10,
            imageUrl: "/textures/items/totemBaronSSR.png",
          },
          additionalInput: {
            item: "Barathos Gems",
            itemId: "Itemizer.CoinsBarathos",
            quantity: 35,
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
      imageUrl: "/textures/mobs/lottomanBarathos.png",
      model: "/models/npc/lottoman/lottoman.gltf",
    },
    {
      entity: "EntityCreationMaster",
      displayName: "CreationMaster",
      weight: 1,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Barathos",
          imageUrl: "/dimensions/barathos_images/Barathos.png",
        },
        {
          name: "Alien Forest",
          imageUrl: "/dimensions/common_images/Alien_Forest.png",
        },
        {
          name: "Rocky Mazus",
          imageUrl: "/dimensions/common_images/Rocky_Mazus.png",
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
            item: "Creation Boots",
            itemId: "Armorizer.CreationBoots",
            quantity: 1,
            imageUrl: "/textures/items/bootsCreation.png",
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
            item: "Creation Leggings",
            itemId: "Armorizer.CreationLeggings",
            quantity: 1,
            imageUrl: "/dimensions/common_images/Creation_Leggings.png",
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
            item: "Creation Chestplate",
            itemId: "Armorizer.CreationChestplate",
            quantity: 1,
            imageUrl: "/textures/items/chestplateCreation.png",
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
            item: "Creation Helmet",
            itemId: "Armorizer.CreationHelmet",
            quantity: 1,
            imageUrl: "/textures/items/helmetCreation.png",
          },
        },
      ],
      imageUrl: "",
      model: "/models/npc/store-keeper/store-keeper.gltf",
    },
    {
      entity: "EntityVitalityMaster",
      displayName: "VitalityMaster",
      weight: 1,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Barathos",
          imageUrl: "/dimensions/barathos_images/Barathos.png",
        },
        {
          name: "Alien Forest",
          imageUrl: "/dimensions/common_images/Alien_Forest.png",
        },
        {
          name: "Rocky Mazus",
          imageUrl: "/dimensions/common_images/Rocky_Mazus.png",
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
            item: "Extraction Boots",
            itemId: "Armorizer.VitalityBoots",
            quantity: 1,
            imageUrl: "/textures/items/bootsVitality.png",
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
            item: "Extraction Leggings",
            itemId: "Armorizer.VitalityLeggings",
            quantity: 1,
            imageUrl: "/dimensions/common_images/Extraction_Leggings.png",
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
            item: "Extraction Chestplate",
            itemId: "Armorizer.VitalityChestplate",
            quantity: 1,
            imageUrl: "/textures/items/chestplateVitality.png",
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
            item: "Extraction Helmet",
            itemId: "Armorizer.VitalityHelmet",
            quantity: 1,
            imageUrl: "/textures/items/helmetVitality.png",
          },
        },
      ],
      imageUrl: "",
      model: "/models/npc/store-keeper/store-keeper.gltf",
    },
  ],
  generatedOres: [
    {
      field: "Blockizer.OreVarsium",
      displayName: "Ore Varsium",
      height: {
        min: 0,
        max: 19,
      },
      imageUrl: "/ores/varsium_ore.png",
    },
    {
      field: "Blockizer.OreElecanium",
      displayName: "Ore Elecanium",
      height: {
        min: 25,
        max: 44,
      },
      imageUrl: "/ores/elecanium_ore.png",
    },
    {
      field: "Blockizer.OreBaronyte",
      displayName: "Ore Baronyte",
      height: {
        min: 0,
        max: 29,
      },
      imageUrl: "/ores/baronyte_ore.png",
    },
    {
      field: "Blockizer.OreBlazium",
      displayName: "Ore Blazium",
      height: {
        min: 0,
        max: 19,
      },
      imageUrl: "/ores/blazium_ore.png",
    },
  ],
  resources: [
    {
      name: "Baronyte Ore",
      type: "Minério",
      usage:
        "Fundido em Baronyte Ingots, usados para ferramentas, armas e blocos de armazenamento que podem integrar pirâmides de beacon.",
      imageUrl: "/ores/baronyte_ore.png",
      height: {
        min: 0,
        max: 29,
      },
    },
    {
      name: "Blazium Ore",
      type: "Minério",
      usage:
        "Fonte de Blazium Ingots, material de armas e ferramentas voltadas para dano elemental e integração com Tinker's Construct.",
      imageUrl: "/ores/blazium_ore.png",
      height: {
        min: 0,
        max: 19,
      },
    },
    {
      name: "Varsium Ore",
      type: "Minério",
      usage:
        "Gera Varsium Ingots, utilizados tanto em equipamentos quanto em blocos utilitários como Varsium Lamps.",
      imageUrl: "/ores/varsium_ore.png",
      height: {
        min: 0,
        max: 19,
      },
    },
    {
      name: "Hellstone",
      type: "Bloco de ambiente",
      usage:
        "Bloco decorativo de aparência infernal, útil para builds temáticas de lava e fogo.",
      imageUrl: "/dimensions/shyrelands_images/Hellstone.png",
    },
  ],
  bosses: [
    {
      name: "Baroness",
      howToSpawn:
        "Associada normalmente aos Baron Castles; é enfrentada em estruturas de castelo que surgem na superfície de Barathos.",
      notes:
        "Boss de foco em combate pesado, com drops ligados a armas e armaduras de Baronyte/Varsium.",
      imageUrl: "https://adventofascension.fandom.com/wiki/Baroness",
      entities: [
        {
          entity: "EntityBaroness",
          displayName: "Baroness",
          imageUrl: "/textures/mobs/baroness.png",
          model: "/models/boss/baroness/baroness/baroness.gltf",
          health: 2000,
        },
        {
          entity: "EntityBaronBomb",
          displayName: "Baron Bomb",
          imageUrl: "/textures/mobs/baronBomb.png",
          model: "/models/boss/baroness/baron-bomb/baron-bomb.gltf",
          health: 100,
        },
      ],
    },
    {
      name: "Hive King",
      howToSpawn:
        "Invocado em Hive Nests, geralmente utilizando um item ou bloco de invocação dentro da própria estrutura.",
      notes:
        "Comanda enxames de criaturas tipo inseto, oferecendo drops úteis para combate e progressão.",
      imageUrl: "https://adventofascension.fandom.com/wiki/Hive_King",
      spawnItems: [
        {
          itemId: "Itemizer.HiveChunk",
          item: "Hive Chunk",
          usage:
            "Coloque um Hive Chunk no Hive Spawner encontrado dentro dos Hive Nests para liberar o Hive King.",
          imageUrl: "/textures/items/hiveChunk.png",
        },
      ],
      entities: [
        {
          entity: "EntityHiveKing",
          displayName: "HiveKing",
          imageUrl: "/textures/mobs/hiveking.png",
          model: "/models/boss/hiveking/hive-king/hive-king.gltf",
          health: 2500,
        },
        {
          entity: "EntityHiveSoldier",
          displayName: "Hive Soldier",
          imageUrl: "/textures/mobs/hivesoldier.png",
          model: "/models/boss/hiveking/hive-soldier/hive-soldier.gltf",
          health: 25,
        },
      ],
      loot: [
        {
          item: "Hive Howitzer",
          itemId: "Weaponizer.HiveHowitzer",
          minQuantity: 1,
          maxQuantity: 1,
          chance: 1,
          sourceEntities: ["EntityHiveKing"],
          imageUrl: "/textures/items/hiveHowitzer.png",
        },
        {
          item: "Hive Staff",
          itemId: "Weaponizer.HiveStaff",
          minQuantity: 1,
          maxQuantity: 1,
          chance: 1,
          sourceEntities: ["EntityHiveKing"],
          imageUrl: "/textures/items/hiveStaff.png",
        },
        {
          item: "Firestorm Staff",
          itemId: "Weaponizer.FirestormStaff",
          minQuantity: 1,
          maxQuantity: 1,
          chance: 1,
          sourceEntities: ["EntityHiveKing"],
          imageUrl: "/textures/items/firestormStaff.png",
        },
      ],
    },
  ],
  biomes: [
    {
      name: "Barathos",
      id: 87,
      imageUrl: "/nvm2_data/img_data/Barathos/biomes/Barathos.png",
    },
    {
      name: "Alien Forest",
      id: 113,
      imageUrl: "/nvm2_data/img_data/Barathos/biomes/Alien_Forest.png",
    },
    {
      name: "Rocky Mazus",
      id: 114,
      imageUrl: "/nvm2_data/img_data/Barathos/biomes/Rocky_Mazus.png",
    },
  ],
  structures: [
    {
      name: "Baron Castle",
      imageUrl: "/nvm2_data/img_data/Barathos/structures/Baron_Castle.png",
    },
    {
      name: "Baroness House",
      imageUrl: "/nvm2_data/img_data/Barathos/structures/Baron_House.png",
    },
    {
      name: "Baroness Arena",
      imageUrl: "/nvm2_data/img_data/Barathos/structures/Baroness.png",
    },
    {
      name: "Hive Nest",
      imageUrl: "/nvm2_data/img_data/Barathos/structures/Hive_Nest.png",
    },
  ],
};
