export const Crystevia = {
  id: "crystevia",
  name: "Crystevia",
  tier: 2,
  prerequisiteDimension: "Deeplands",
  theme: "Cavernosa, repleta de cristais usados como folhagem e moeda.",
  shortDescription:
    "Uma dimensão subterrânea formada por vastas cavernas recheadas de cristais, blocos de cristal e estruturas tecnológicas, com nenhuma rotina de dia/noite e sensação de outro mundo.",
  realmstone: {
    obtainHint:
      "Use um Deep Crystal em um Case Construct enquanto carrega um Blank Realmstone para convertê-lo em Crystevia Realmstone. ",
    obtainDetails:
      "Com um Blank Realmstone no inventário, interaja com um Case Construct usando um Deep Crystal. Isso gera a Crystevia Realmstone, que então pode ser usada em um Portal para acessar Crystevia. ",
    imageUrl: "/dimensions/crystevia_images/Crystevia_Realmstone.png",
  },
  imageUrl: "/dimensions/biomes/crystevia.png",
  wikiUrl: "https://adventofascension.fandom.com/wiki/Crystevia",
  mainObjectives: [
    {
      id: "unlock_crystevia",
      title: "Desbloquear Crystevia",
      description:
        "Obter a Crystevia Realmstone através da combinação de Deep Crystal + Case Construct + Blank Realmstone, e ativar o portal.",
      imageUrl: "/dimensions/crystevia_images/Crystevia_Realmstone.png",
    },
    {
      id: "mine_crystal_resources",
      title: "Minerar recursos de cristal",
      description:
        "Explorar as veias de Crystal Ores e blocos de cristal para coletar cristais que servem como moeda ou bloco de construção, e para troca com o Crystal Trader. ",
      imageUrl: "/ores/red_crystal_ore.png",
    },
    {
      id: "defeat_boss_crystocore",
      title: "Derrotar Crystocore",
      description:
        "Use um Giant Crystal no Power Station Block em uma estrutura Power Station para invocar o boss Crystocore. ",
      imageUrl: "/dimensions/common_images/Crystocore.png",
    },
  ],
  secondaryObjectives: [
    {
      id: "use_crystal_transfer_structures",
      title: "Usar Crystal Transfer Structures",
      description:
        "Encontrar as Crystal Transfer Structures que convertem Gemstones em Crystals para negociar no Crystal Trading Post. ",
      imageUrl: "/dimensions/crystevia_images/Crystal_Transfer_Structure.png",
    },
    {
      id: "explore_structures",
      title: "Explorar as estruturas de Crystevia",
      description:
        "Visitar o Trading Post, Power Station e outras construções especiais para loot, NPCs e upgrades. ",
      imageUrl: "/dimensions/crystevia_images/Crystal_Trading_Post.png",
    },
  ],
  progressionNotes: [
    {
      id: "notes_tier2_transition",
      title: "Transição para mundos de tier mais altos",
      description:
        "Crystevia serve como dimensão de tier 2 focada em cristalurgia e comércio; após completar seus objetivos, o jogador está preparado para dimensões de tier 3 ou ramos alternativos. ",
      imageUrl: "/dimensions/biomes/crystevia.png",
    },
    {
      id: "notes_gateway_deus",
      title: "Porta para conteúdo mágico/alto nível",
      description:
        "Os recursos de Crystevia (cristais, gemas) permitem crafting e progressão de equipamento e habilidades que são essenciais para enfrentar chefes posteriores e dimensões especializadas.",
      imageUrl: "/ores/blue_crystal_ore.png",
    },
  ],
  versionNotes:
    "Informações extraídas da wiki atual; embora a dimensão Crystevia esteja descrita para versões recentes (versão 2.2+), a essência da geração, tarefas de realmstone e recursos principais se mantém desde o ramo Nevermine/AoA2. A tabela exata de drops e loot pode diferir em Tslat 1.1.3.",
  mobs: [
    {
      entity: "EntityConstructRange",
      weight: 20,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Crystevia",
          imageUrl: "/dimensions/crystevia_images/Crystevia.png",
        },
      ],
      loot: [
        {
          item: "Crystevia Gems",
          itemId: "Itemizer.CoinsCrystevia",
          quantity: 2,
          chance: 1,
          imageUrl: "/textures/items/crysteviaGems.png",
        },
        {
          item: "Purple Gemstones",
          itemId: "Itemizer.GemstonesPurple",
          quantity: 3,
          chance: 1,
          imageUrl: "/textures/items/gemstonesPurple.png",
        },
        {
          item: "Crystal Banner",
          itemId: "SpecialBlockizer.CrystalBanner",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/banner/crystalBanner.png",
        },
      ],
      imageUrl: "/textures/mobs/constructRange.png",
      model: "/models/crystevia/construct-range/construct-range.gltf",
      health: 20,
    },
    {
      entity: "EntityConstructStrength",
      weight: 20,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Crystevia",
          imageUrl: "/dimensions/crystevia_images/Crystevia.png",
        },
      ],
      loot: [
        {
          item: "Crystevia Gems",
          itemId: "Itemizer.CoinsCrystevia",
          quantity: 2,
          chance: 1,
          imageUrl: "/textures/items/crysteviaGems.png",
        },
        {
          item: "Red Gemstones",
          itemId: "Itemizer.GemstonesRed",
          quantity: 3,
          chance: 1,
          imageUrl: "/textures/items/gemstonesRed.png",
        },
        {
          item: "Crystal Banner",
          itemId: "SpecialBlockizer.CrystalBanner",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/banner/crystalBanner.png",
        },
      ],
      imageUrl: "/textures/mobs/constructStrength.png",
      model: "/models/crystevia/construct-strength/construct-strength.gltf",
      health: 30,
    },
    {
      entity: "EntityConstructResistance",
      weight: 20,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Crystevia",
          imageUrl: "/dimensions/crystevia_images/Crystevia.png",
        },
      ],
      loot: [
        {
          item: "Crystevia Gems",
          itemId: "Itemizer.CoinsCrystevia",
          quantity: 2,
          chance: 1,
          imageUrl: "/textures/items/crysteviaGems.png",
        },
        {
          item: "White Gemstones",
          itemId: "Itemizer.GemstonesWhite",
          quantity: 3,
          chance: 1,
          imageUrl: "/textures/items/gemstonesWhite.png",
        },
        {
          item: "Crystal Banner",
          itemId: "SpecialBlockizer.CrystalBanner",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/banner/crystalBanner.png",
        },
      ],
      imageUrl: "/textures/mobs/constructResistance.png",
      model: "/models/crystevia/construct-resistance/construct-resistance.gltf",
      health: 150,
    },
    {
      entity: "EntityConstructFlight",
      weight: 20,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Crystevia",
          imageUrl: "/dimensions/crystevia_images/Crystevia.png",
        },
      ],
      loot: [
        {
          item: "Crystevia Gems",
          itemId: "Itemizer.CoinsCrystevia",
          quantity: 2,
          chance: 1,
          imageUrl: "/textures/items/crysteviaGems.png",
        },
        {
          item: "Blue Gemstones",
          itemId: "Itemizer.GemstonesBlue",
          quantity: 3,
          chance: 1,
          imageUrl: "/textures/items/gemstonesBlue.png",
        },
        {
          item: "Crystal Banner",
          itemId: "SpecialBlockizer.CrystalBanner",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/banner/crystalBanner.png",
        },
      ],
      imageUrl: "/textures/mobs/constructFlight.png",
      model: "/models/crystevia/construct-flight/construct-flight.gltf",
      health: 40,
    },
    {
      entity: "EntityConstructTerror",
      weight: 20,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Crystevia",
          imageUrl: "/dimensions/crystevia_images/Crystevia.png",
        },
      ],
      loot: [
        {
          item: "Crystevia Gems",
          itemId: "Itemizer.CoinsCrystevia",
          quantity: 2,
          chance: 1,
          imageUrl: "/textures/items/crysteviaGems.png",
        },
        {
          item: "Green Gemstones",
          itemId: "Itemizer.GemstonesGreen",
          quantity: 3,
          chance: 1,
          imageUrl: "/textures/items/gemstonesGreen.png",
        },
        {
          item: "Crystal Banner",
          itemId: "SpecialBlockizer.CrystalBanner",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/banner/crystalBanner.png",
        },
      ],
      imageUrl: "/textures/mobs/constructTerror.png",
      model: "/models/crystevia/construct-terror/construct-terror.gltf",
      health: 80,
    },
    {
      entity: "EntityConstructMind",
      weight: 2,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Crystevia",
          imageUrl: "/dimensions/crystevia_images/Crystevia.png",
        },
      ],
      loot: [
        {
          item: "Crystevia Realmstone",
          itemId: "Itemizer.RealmstoneCrystevia",
          quantity: 2,
          chance: 1,
          imageUrl: "/textures/items/realmstoneCrystevia.png",
        },
        {
          item: "Crystevia Gems",
          itemId: "Itemizer.CoinsCrystevia",
          quantity: 2,
          chance: 1,
          imageUrl: "/textures/items/crysteviaGems.png",
        },
        {
          item: "Orbocron",
          itemId: "Weaponizer.Orbocron",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/orbocron.png",
        },
      ],
      imageUrl: "/textures/mobs/constructMind.png",
      model: "/models/crystevia/construct-mind/construct-mind.gltf",
      health: 200,
    },
    {
      entity: "EntityConstructSpeed",
      weight: 20,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Crystevia",
          imageUrl: "/dimensions/crystevia_images/Crystevia.png",
        },
      ],
      loot: [
        {
          item: "Crystevia Gems",
          itemId: "Itemizer.CoinsCrystevia",
          quantity: 2,
          chance: 1,
          imageUrl: "/textures/items/crysteviaGems.png",
        },
        {
          item: "Yellow Gemstones",
          itemId: "Itemizer.GemstonesYellow",
          quantity: 3,
          chance: 1,
          imageUrl: "/textures/items/gemstonesYellow.png",
        },
        {
          item: "Crystal Banner",
          itemId: "SpecialBlockizer.CrystalBanner",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/banner/crystalBanner.png",
        },
      ],
      imageUrl: "/textures/mobs/constructSpeed.png",
      model: "/models/crystevia/construct-speed/construct-speed.gltf",
      health: 20,
    },
  ],
  npcs: [
    {
      entity: "EntityCrystalTrader",
      notes: "Gerado automaticamente por estruturas da dimensão.",
      displayName: "CrystalTrader",
      registeredBiomes: [],
      loot: [],
      trades: [
        {
          input: {
            item: "Blue Crystals",
            itemId: "Itemizer.CrystalsBlue",
            quantity: 5,
            metadata: 1,
            imageUrl: "/textures/items/crystalsBlue.png",
          },
          output: {
            item: "Crystevia Gems",
            itemId: "Itemizer.CoinsCrystevia",
            quantity: 32,
            imageUrl: "/textures/items/crysteviaGems.png",
          },
        },
        {
          input: {
            item: "Green Crystals",
            itemId: "Itemizer.CrystalsGreen",
            quantity: 5,
            metadata: 1,
            imageUrl: "/textures/items/crystalsGreen.png",
          },
          output: {
            item: "Crystevia Gems",
            itemId: "Itemizer.CoinsCrystevia",
            quantity: 32,
            imageUrl: "/textures/items/crysteviaGems.png",
          },
        },
        {
          input: {
            item: "Purple Crystals",
            itemId: "Itemizer.CrystalsPurple",
            quantity: 5,
            metadata: 1,
            imageUrl: "/textures/items/crystalsPurple.png",
          },
          output: {
            item: "Crystevia Gems",
            itemId: "Itemizer.CoinsCrystevia",
            quantity: 32,
            imageUrl: "/textures/items/crysteviaGems.png",
          },
        },
        {
          input: {
            item: "Red Crystals",
            itemId: "Itemizer.CrystalsRed",
            quantity: 5,
            metadata: 1,
            imageUrl: "/textures/items/crystalsRed.png",
          },
          output: {
            item: "Crystevia Gems",
            itemId: "Itemizer.CoinsCrystevia",
            quantity: 32,
            imageUrl: "/textures/items/crysteviaGems.png",
          },
        },
        {
          input: {
            item: "White Crystals",
            itemId: "Itemizer.CrystalsWhite",
            quantity: 5,
            metadata: 1,
            imageUrl: "/textures/items/crystalsWhite.png",
          },
          output: {
            item: "Crystevia Gems",
            itemId: "Itemizer.CoinsCrystevia",
            quantity: 32,
            imageUrl: "/textures/items/crysteviaGems.png",
          },
        },
        {
          input: {
            item: "Yellow Crystals",
            itemId: "Itemizer.CrystalsYellow",
            quantity: 5,
            metadata: 1,
            imageUrl: "/textures/items/crystalsYellow.png",
          },
          output: {
            item: "Crystevia Gems",
            itemId: "Itemizer.CoinsCrystevia",
            quantity: 32,
            imageUrl: "/textures/items/crysteviaGems.png",
          },
        },
        {
          input: {
            item: "Yellow Crystals",
            itemId: "Itemizer.CrystalsYellow",
            quantity: 60,
            metadata: 1,
            imageUrl: "/textures/items/crystalsYellow.png",
          },
          output: {
            item: "Construct",
            itemId: "Weaponizer.Construct",
            quantity: 1,
            imageUrl: "/textures/items/construct.png",
          },
          additionalInput: {
            item: "Green Crystals",
            itemId: "Itemizer.CrystalsGreen",
            quantity: 60,
            imageUrl: "/textures/items/crystalsGreen.png",
          },
        },
        {
          input: {
            item: "Blue Crystals",
            itemId: "Itemizer.CrystalsBlue",
            quantity: 60,
            metadata: 1,
            imageUrl: "/textures/items/crystalsBlue.png",
          },
          output: {
            item: "Crystal Carver",
            itemId: "Weaponizer.CrystalCarver",
            quantity: 1,
            imageUrl: "/textures/items/crystalCarver.png",
          },
          additionalInput: {
            item: "Purple Crystals",
            itemId: "Itemizer.CrystalsPurple",
            quantity: 60,
            imageUrl: "/textures/items/crystalsPurple.png",
          },
        },
        {
          input: {
            item: "Blue Crystals",
            itemId: "Itemizer.CrystalsBlue",
            quantity: 60,
            metadata: 1,
            imageUrl: "/textures/items/crystalsBlue.png",
          },
          output: {
            item: "Blast Barrel",
            itemId: "Weaponizer.BlastBarrel",
            quantity: 1,
            imageUrl: "/textures/items/blastBarrel.png",
          },
          additionalInput: {
            item: "White Crystals",
            itemId: "Itemizer.CrystalsWhite",
            quantity: 60,
            imageUrl: "/textures/items/crystalsWhite.png",
          },
        },
        {
          input: {
            item: "Purple Crystals",
            itemId: "Itemizer.CrystalsPurple",
            quantity: 60,
            metadata: 1,
            imageUrl: "/textures/items/crystalsPurple.png",
          },
          output: {
            item: "Crystal Greatblade",
            itemId: "Weaponizer.CrystalGreatblade",
            quantity: 1,
            imageUrl: "/textures/items/crystalGreatblade.png",
          },
          additionalInput: {
            item: "Yellow Crystals",
            itemId: "Itemizer.CrystalsYellow",
            quantity: 60,
            imageUrl: "/textures/items/crystalsYellow.png",
          },
        },
        {
          input: {
            item: "Purple Crystals",
            itemId: "Itemizer.CrystalsPurple",
            quantity: 40,
            metadata: 1,
            imageUrl: "/textures/items/crystalsPurple.png",
          },
          output: {
            item: "Giant Crystal",
            itemId: "Itemizer.GiantCrystal",
            quantity: 2,
            imageUrl: "/textures/items/giantCrystal.png",
          },
          additionalInput: {
            item: "Red Crystals",
            itemId: "Itemizer.CrystalsRed",
            quantity: 40,
            imageUrl: "/textures/items/crystalsRed.png",
          },
        },
        {
          input: {
            item: "Green Crystals",
            itemId: "Itemizer.CrystalsGreen",
            quantity: 40,
            metadata: 1,
            imageUrl: "/textures/items/crystalsGreen.png",
          },
          output: {
            item: "Crystallis Chestplate",
            itemId: "Armorizer.CrystallisChestplate",
            quantity: 1,
            imageUrl: "/textures/items/chestplateCrystallis.png",
          },
          additionalInput: {
            item: "Red Crystals",
            itemId: "Itemizer.CrystalsRed",
            quantity: 40,
            imageUrl: "/textures/items/crystalsRed.png",
          },
        },
        {
          input: {
            item: "Blue Crystals",
            itemId: "Itemizer.CrystalsBlue",
            quantity: 40,
            metadata: 1,
            imageUrl: "/textures/items/crystalsBlue.png",
          },
          output: {
            item: "Crystallis Helmet",
            itemId: "Armorizer.CrystallisHelmet",
            quantity: 1,
            imageUrl: "/textures/items/helmetCrystallis.png",
          },
          additionalInput: {
            item: "Purple Crystals",
            itemId: "Itemizer.CrystalsPurple",
            quantity: 40,
            imageUrl: "/textures/items/crystalsPurple.png",
          },
        },
        {
          input: {
            item: "Yellow Crystals",
            itemId: "Itemizer.CrystalsYellow",
            quantity: 40,
            metadata: 1,
            imageUrl: "/textures/items/crystalsYellow.png",
          },
          output: {
            item: "Crystallis Boots",
            itemId: "Armorizer.CrystallisBoots",
            quantity: 1,
            imageUrl: "/textures/items/bootsCrystallis.png",
          },
          additionalInput: {
            item: "White Crystals",
            itemId: "Itemizer.CrystalsWhite",
            quantity: 40,
            imageUrl: "/textures/items/crystalsWhite.png",
          },
        },
        {
          input: {
            item: "White Crystals",
            itemId: "Itemizer.CrystalsWhite",
            quantity: 40,
            metadata: 1,
            imageUrl: "/textures/items/crystalsWhite.png",
          },
          output: {
            item: "Crystallis Leggings",
            itemId: "Armorizer.CrystallisLeggings",
            quantity: 1,
            imageUrl: "/dimensions/crystevia_images/Crystallis_Leggings.png",
          },
          additionalInput: {
            item: "Red Crystals",
            itemId: "Itemizer.CrystalsRed",
            quantity: 40,
            imageUrl: "/textures/items/crystalsRed.png",
          },
        },
      ],
      imageUrl: "/textures/mobs/crystalTrader.png",
      model: "/models/npc/store-keeper/store-keeper.gltf",
    },
    {
      entity: "EntityLottomanCrystevia",
      notes: "Gerado automaticamente por estruturas da dimensão.",
      displayName: "LottomanCrystevia",
      registeredBiomes: [],
      loot: [],
      trades: [
        {
          input: {
            item: "Crystevia Gems",
            itemId: "Itemizer.CoinsCrystevia",
            quantity: 10,
            metadata: 1,
            imageUrl: "/textures/items/crysteviaGems.png",
          },
          output: {
            item: "Crystaneer Totem",
            itemId: "Totemizer.TotemCrystaneer",
            quantity: 1,
            imageUrl: "/textures/items/totemCrystaneer.png",
          },
        },
        {
          input: {
            item: "Crystevia Gems",
            itemId: "Itemizer.CoinsCrystevia",
            quantity: 10,
            metadata: 1,
            imageUrl: "/textures/items/crysteviaGems.png",
          },
          output: {
            item: "Crystal Maul Totem",
            itemId: "Totemizer.TotemCrystalMaul",
            quantity: 1,
            imageUrl: "/textures/items/totemCrystalMaul.png",
          },
        },
        {
          input: {
            item: "Crystevia Gems",
            itemId: "Itemizer.CoinsCrystevia",
            quantity: 40,
            metadata: 1,
            imageUrl: "/textures/items/crysteviaGems.png",
          },
          output: {
            item: "Crystaneer Totem",
            itemId: "Totemizer.TotemCrystaneer",
            quantity: 10,
            imageUrl: "/textures/items/totemCrystaneer.png",
          },
          additionalInput: {
            item: "Crystevia Gems",
            itemId: "Itemizer.CoinsCrystevia",
            quantity: 35,
            imageUrl: "/textures/items/crysteviaGems.png",
          },
        },
        {
          input: {
            item: "Crystevia Gems",
            itemId: "Itemizer.CoinsCrystevia",
            quantity: 40,
            metadata: 1,
            imageUrl: "/textures/items/crysteviaGems.png",
          },
          output: {
            item: "Crystal Maul Totem",
            itemId: "Totemizer.TotemCrystalMaul",
            quantity: 10,
            imageUrl: "/textures/items/totemCrystalMaul.png",
          },
          additionalInput: {
            item: "Crystevia Gems",
            itemId: "Itemizer.CoinsCrystevia",
            quantity: 35,
            imageUrl: "/textures/items/crysteviaGems.png",
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
      imageUrl: "/textures/mobs/lottomanCrystevia.png",
      model: "/models/npc/lottoman/lottoman.gltf",
    },
  ],
  generatedOres: [
    {
      field: "Blockizer.oreCrystalBlue",
      displayName: "Ore Crystal Blue",
      veinSize: 14,
      attemptsPerChunk: 4,
      replaces: "Blockizer.CrysteviaRock",
      height: {
        min: 0,
        max: 99,
      },
      imageUrl: "/ores/blue_crystal_ore.png",
    },
    {
      field: "Blockizer.oreCrystalRed",
      displayName: "Ore Crystal Red",
      veinSize: 14,
      attemptsPerChunk: 4,
      replaces: "Blockizer.CrysteviaRock",
      height: {
        min: 0,
        max: 99,
      },
      imageUrl: "/ores/red_crystal_ore.png",
    },
    {
      field: "Blockizer.oreCrystalGreen",
      displayName: "Ore Crystal Green",
      veinSize: 14,
      attemptsPerChunk: 4,
      replaces: "Blockizer.CrysteviaRock",
      height: {
        min: 0,
        max: 99,
      },
      imageUrl: "/ores/green_crystal_ore.png",
    },
    {
      field: "Blockizer.oreCrystalYellow",
      displayName: "Ore Crystal Yellow",
      veinSize: 14,
      attemptsPerChunk: 4,
      replaces: "Blockizer.CrysteviaRock",
      height: {
        min: 0,
        max: 99,
      },
      imageUrl: "/ores/yellow_crystal_ore.png",
    },
    {
      field: "Blockizer.oreCrystalPurple",
      displayName: "Ore Crystal Purple",
      veinSize: 14,
      attemptsPerChunk: 4,
      replaces: "Blockizer.CrysteviaRock",
      height: {
        min: 0,
        max: 99,
      },
      imageUrl: "/ores/purple_crystal_ore.png",
    },
    {
      field: "Blockizer.oreCrystalWhite",
      displayName: "Ore Crystal White",
      veinSize: 14,
      attemptsPerChunk: 4,
      replaces: "Blockizer.CrysteviaRock",
      height: {
        min: 0,
        max: 99,
      },
      imageUrl: "/ores/white_crystal_ore.png",
    },
  ],
  resources: [
    {
      name: "Crystevia Tokens",
      type: "Item especial",
      usage:
        "Moeda apresentada no trading post para loterias ou itens especiais, específica da dimensão Crystevia.",
      imageUrl: "/dimensions/crystevia_images/Crystevia_Tokens.png",
    },
  ],
  bosses: [
    {
      name: "Crystocore",
      howToSpawn:
        "Coloque um Giant Crystal no bloco Power Station dentro de uma estrutura Power Station em Crystevia. ",
      notes:
        "Boss principal da dimensão ligado à temática de cristal e canalização de energia; derrota costuma dar loot avançado e desbloqueio de rotas de progressão.",
      imageUrl: "/dimensions/common_images/Crystocore.png",
      spawnItems: [
        {
          itemId: "Itemizer.GiantCrystal",
          item: "Giant Crystal",
          usage:
            "Insira um Giant Crystal no Power Station localizado nas salas superiores de Crystevia.",
          imageUrl: "/textures/items/giantCrystal.png",
        },
      ],
      entities: [
        {
          entity: "EntityCrystocore",
          displayName: "Crystocore",
          imageUrl: "/dimensions/common_images/Crystocore.png",
          model: "/models/boss/crystocore/crystocore/crystocore.gltf",
          health: 3000,
        },
      ],
      loot: [
        {
          item: "Cryston Staff",
          itemId: "Weaponizer.CrystonStaff",
          minQuantity: 1,
          maxQuantity: 1,
          chance: 1,
          sourceEntities: ["EntityCrystocore"],
          imageUrl: "/textures/items/crystonStaff.png",
        },
        {
          item: "Crystal Staff",
          itemId: "Weaponizer.CrystalStaff",
          minQuantity: 1,
          maxQuantity: 1,
          chance: 1,
          sourceEntities: ["EntityCrystocore"],
          imageUrl: "/textures/items/crystalStaff.png",
        },
        {
          item: "Crystik Staff",
          itemId: "Weaponizer.CrystikStaff",
          minQuantity: 1,
          maxQuantity: 1,
          chance: 1,
          sourceEntities: ["EntityCrystocore"],
          imageUrl: "/textures/items/crystikStaff.png",
        },
      ],
    },
  ],
  biomes: [
    {
      name: "Crystevia",
      id: 92,
      imageUrl: "/nvm2_data/img_data/Crystevia/biomes/Crystevia.png",
    },
  ],
  structures: [
    {
      name: "Crystal Transfer Structure",
      imageUrl:
        "/nvm2_data/img_data/Crystevia/structures/Crystal_Transfer_Structure.png",
    },
    {
      name: "Crystal Extension Station",
      imageUrl:
        "/nvm2_data/img_data/Crystevia/structures/Crystal_Extension_Station.png",
    },
    {
      name: "Crystal Lotto Overlook",
      imageUrl:
        "/nvm2_data/img_data/Crystevia/structures/Crystal_Lotto_Overlook.png",
    },
    {
      name: "Crystal Trading Post",
      imageUrl:
        "/nvm2_data/img_data/Crystevia/structures/Crystal_Trading_Post.png",
    },
  ],
};
