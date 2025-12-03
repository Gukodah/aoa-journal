export const Greckon = {
  id: "greckon",
  name: "Greckon",
  tier: 3,
  prerequisiteDimension: "The Abyss",
  theme:
    "Montanhosa e assombrada, com árvores com olhos, troncos vivos e atmosfera de pesadelo eterno.",
  shortDescription:
    "Dimensão montanhosa e escura, sem ciclo dia/noite, florestas de troncos com olhos, estruturas como Haunted Dungeon e Haunted Maze, e mobs assustadores com IA única. ",
  realmstone: {
    obtainHint:
      "Use Nightmare Flakes no boss Elusive enquanto carrega um Blank Realmstone para obter a Greckon Realmstone. ",
    obtainDetails:
      "Na dimensão The Abyss, adquira Nightmare Flakes. Com Blank Realmstone no inventário, use essas flakes em um Elusive para completar a tarefa e gerar a Greckon Realmstone. Em seguida, ative o portal para a dimensão Greckon.",
    imageUrl: "/dimensions/greckon_images/Greckon_Realmstone.png",
  },
  imageUrl: "/dimensions/biomes/greckon.png",
  wikiUrl: "https://adventofascension.fandom.com/wiki/Greckon",
  mainObjectives: [
    {
      id: "unlock_greckon",
      title: "Desbloquear Greckon",
      description:
        "Obter a Greckon Realmstone através do uso de Nightmare Flakes no Elusive enquanto carrega um Blank Realmstone e ativar o portal.",
      imageUrl: "/dimensions/greckon_images/Greckon_Realmstone.png",
    },
    {
      id: "clear_structures",
      title: "Limpar masmorras e labirintos assombrados",
      description:
        "Explorar Haunted Dungeon, Haunted Maze e Floating Rock structures em Greckon, derrotando mobs de terror e coletando loot. ",
      imageUrl: "/dimensions/common_images/Haunted_Maze.png",
    },
    {
      id: "defeat_bane",
      title: "Derrotar Bane",
      description:
        "Use Haunted Idol em Greckon para invocar o boss Bane e derrotá-lo, completando o maior desafio da dimensão. ",
      imageUrl: "/dimensions/greckon_images/Bane.png",
    },
  ],
  secondaryObjectives: [
    {
      id: "explore_forest_details",
      title: "Explorar a floresta assombrada",
      description:
        "Examinar as Faceless Trees, troncos com olhos, Floating Rocks e outros detalhes visuais únicos, aproveitando para coletar blocos Haunted Logs, Haunted Flowers, Ghoulasm e Ghastly Ore. ",
      imageUrl: "/dimensions/shyrelands_images/Haunted_Log.png",
    },
    {
      id: "complete_bestiary_greckon",
      title: "Completar bestiário de terror",
      description:
        "Derrote ou interaja com cada tipo de mob de Greckon (Faceless Floater, Grillface, Hunter, Silencer, Skull Creature, etc) para preencher o diário do mod.",
      imageUrl: "/dimensions/common_images/Faceless_Floater.png",
    },
  ],
  progressionNotes: [
    {
      id: "tier3_haunted",
      title: "Dimensão de tier 3 com atmosfera de terror",
      description:
        "Greckon é uma das primeiras dimensões de tier 3, exigindo que o jogador já domine montagens de combate e mobilidade, pois os mobs e o ambiente são mais punitivos.",
      imageUrl: "/dimensions/biomes/greckon.png",
    },
    {
      id: "gateway_late_game",
      title: "Porta para conteúdo avançado",
      description:
        "Os recursos e drops de Greckon permitem acesso ou facilidade em dimensões ainda mais difíceis ou eventos de alto nível, funcionando como um ponto de virada para late-game. ",
      imageUrl: "/dimensions/greckon_images/Bane.png",
    },
  ],
  versionNotes:
    "A wiki lista Greckon como versão 1.1.  Em Nevermine 2 Tslat 1.1.3 os conceitos básicos (acesso via Nightmare Flakes, ambiente assombrado, tier 3) já estão presentes, embora loot, geração e bosses possam ter alterações em relação à wiki atual.",
  mobs: [
    {
      entity: "EntityGrillface",
      weight: 20,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Haunted Forest",
          imageUrl: "/dimensions/common_images/Haunted_Forest.png",
        },
        {
          name: "Greckon Skulls",
          imageUrl: "/dimensions/greckon_images/Greckon_Skulls.png",
        },
        {
          name: "Greckon",
          imageUrl: "/dimensions/greckon_images/Greckon.png",
        },
      ],
      loot: [
        {
          item: "Ghast Blaster",
          itemId: "Weaponizer.GhastBlaster",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/ghastBlaster.png",
        },
        {
          item: "Ghoul Banner",
          itemId: "SpecialBlockizer.GhoulBanner",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/banner/ghoulBanner.png",
        },
        {
          item: "Haunted Upgrade Kit",
          itemId: "Itemizer.UpgradeKitHaunted",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/upgradeKitHaunted.png",
        },
        {
          item: "Dustopia Realmstone",
          itemId: "Itemizer.RealmstoneDustopia",
          quantity: 2,
          chance: 1,
          imageUrl: "/textures/items/realmstoneDustopia.png",
        },
      ],
      imageUrl: "/textures/mobs/grillface.png",
      model: "/models/greckon/grillface/grillface.gltf",
      health: 70,
    },
    {
      entity: "EntityHunter",
      weight: 20,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Haunted Forest",
          imageUrl: "/dimensions/common_images/Haunted_Forest.png",
        },
        {
          name: "Greckon Skulls",
          imageUrl: "/dimensions/greckon_images/Greckon_Skulls.png",
        },
        {
          name: "Greckon",
          imageUrl: "/dimensions/greckon_images/Greckon.png",
        },
      ],
      loot: [
        {
          item: "Greckon Gems",
          itemId: "Itemizer.CoinsGreckon",
          quantity: 2,
          chance: 1,
          imageUrl: "/textures/items/greckonGems.png",
        },
        {
          item: "Dustopia Realmstone",
          itemId: "Itemizer.RealmstoneDustopia",
          quantity: 2,
          chance: 1,
          imageUrl: "/textures/items/realmstoneDustopia.png",
        },
      ],
      imageUrl: "/textures/mobs/hunter.png",
      model: "/models/greckon/hunter/hunter.gltf",
      health: 25,
    },
    {
      entity: "EntityValkyrie",
      weight: 20,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Haunted Forest",
          imageUrl: "/dimensions/common_images/Haunted_Forest.png",
        },
        {
          name: "Greckon Skulls",
          imageUrl: "/dimensions/greckon_images/Greckon_Skulls.png",
        },
        {
          name: "Greckon",
          imageUrl: "/dimensions/greckon_images/Greckon.png",
        },
      ],
      loot: [
        {
          item: "Greckon Gems",
          itemId: "Itemizer.CoinsGreckon",
          quantity: 6,
          chance: 1,
          imageUrl: "/textures/items/greckonGems.png",
        },
        {
          item: "Haunted Upgrade Kit",
          itemId: "Itemizer.UpgradeKitHaunted",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/upgradeKitHaunted.png",
        },
        {
          item: "Discharge Rifle",
          itemId: "Weaponizer.DischargeRifle",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/dischargeRifle.png",
        },
      ],
      imageUrl: "/textures/mobs/valkyrie.png",
      model: "/models/greckon/valkyrie/valkyrie.gltf",
      health: 50,
    },
    {
      entity: "EntitySugarface",
      weight: 20,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Haunted Forest",
          imageUrl: "/dimensions/common_images/Haunted_Forest.png",
        },
        {
          name: "Greckon Skulls",
          imageUrl: "/dimensions/greckon_images/Greckon_Skulls.png",
        },
        {
          name: "Greckon",
          imageUrl: "/dimensions/greckon_images/Greckon.png",
        },
      ],
      loot: [
        {
          item: "Ghoul Cannon",
          itemId: "Weaponizer.GhoulCannon",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/ghoulCannon.png",
        },
        {
          item: "Ghoulasm",
          itemId: "Itemizer.Ghoulasm",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/ghoulasm.png",
        },
        {
          item: "Ghoul Banner",
          itemId: "SpecialBlockizer.GhoulBanner",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/banner/ghoulBanner.png",
        },
      ],
      imageUrl: "/textures/mobs/sugarface.png",
      model: "/models/greckon/sugarface/sugarface.gltf",
      health: 50,
    },
    {
      entity: "EntitySkullCreature",
      weight: 20,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Haunted Forest",
          imageUrl: "/dimensions/common_images/Haunted_Forest.png",
        },
        {
          name: "Greckon Skulls",
          imageUrl: "/dimensions/greckon_images/Greckon_Skulls.png",
        },
        {
          name: "Greckon",
          imageUrl: "/dimensions/greckon_images/Greckon.png",
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
      imageUrl: "/textures/mobs/skullcreature.png",
      model: "/models/greckon/skull-creature/skull-creature.gltf",
      health: 40,
    },
    {
      entity: "EntityShifter",
      weight: 20,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Haunted Forest",
          imageUrl: "/dimensions/common_images/Haunted_Forest.png",
        },
        {
          name: "Greckon Skulls",
          imageUrl: "/dimensions/greckon_images/Greckon_Skulls.png",
        },
        {
          name: "Greckon",
          imageUrl: "/dimensions/greckon_images/Greckon.png",
        },
      ],
      loot: [
        {
          item: "Greckon Gems",
          itemId: "Itemizer.CoinsGreckon",
          quantity: 2,
          chance: 1,
          imageUrl: "/textures/items/greckonGems.png",
        },
        {
          item: "Ghoul Banner",
          itemId: "SpecialBlockizer.GhoulBanner",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/banner/ghoulBanner.png",
        },
        {
          item: "Haunted Upgrade Kit",
          itemId: "Itemizer.UpgradeKitHaunted",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/upgradeKitHaunted.png",
        },
        {
          item: "Dustopia Realmstone",
          itemId: "Itemizer.RealmstoneDustopia",
          quantity: 2,
          chance: 1,
          imageUrl: "/textures/items/realmstoneDustopia.png",
        },
      ],
      imageUrl: "/textures/mobs/shifter.png",
      model: "/models/greckon/shifter/shifter.gltf",
      health: 50,
    },
    {
      entity: "EntitySilencer",
      weight: 1,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Haunted Forest",
          imageUrl: "/dimensions/common_images/Haunted_Forest.png",
        },
        {
          name: "Greckon Skulls",
          imageUrl: "/dimensions/greckon_images/Greckon_Skulls.png",
        },
        {
          name: "Greckon",
          imageUrl: "/dimensions/greckon_images/Greckon.png",
        },
      ],
      loot: [
        {
          item: "Ghoul Staff",
          itemId: "Weaponizer.GhoulStaff",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/ghoulStaff.png",
        },
      ],
      imageUrl: "/textures/mobs/silencer.png",
      model: "/models/greckon/silencer/silencer.gltf",
      health: 50,
    },
    {
      entity: "EntityCenturion",
      imageUrl: "/textures/mobs/centurion.png",
      model: "/models/greckon/centurion/centurion.gltf",
      health: 300,
      weight: 20,
      min: 1,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Greckon",
          imageUrl: "/dimensions/greckon_images/Greckon.png",
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
          itemId: "Itemizer.RealmstoneFragment5",
          quantity: 1,
          chance: 0.03333333333333333,
          imageUrl: "/textures/items/realmstoneFragmentM.png",
          itemName: "Realmstone Fragment",
        },
      ],
    },
    {
      entity: "EntityFacelessFloater",
      imageUrl: "/textures/mobs/facelessfloater.png",
      model: "/models/greckon/faceless-floater/faceless-floater.gltf",
      health: 70,
      weight: 20,
      min: 1,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Greckon",
          imageUrl: "/dimensions/greckon_images/Greckon.png",
        },
        {
          name: "Greckon Skulls",
          imageUrl: "/dimensions/greckon_images/Greckon_Skulls.png",
        },
        {
          name: "Haunted Forest",
          imageUrl: "/dimensions/common_images/Haunted_Forest.png",
        },
      ],
      loot: [
        {
          item: "Greckon Gems",
          itemId: "Itemizer.CoinsGreckon",
          quantity: 2,
          chance: 1,
          imageUrl: "/textures/items/greckonGems.png",
          itemName: "Greckon Gems",
        },
        {
          item: "Darkly Powder",
          itemId: "Itemizer.DarklyPowder",
          quantity: 2,
          chance: 0.07142857142857142,
          imageUrl: "/textures/items/darklyPowder.png",
          itemName: "Darkly Powder",
        },
      ],
    },
  ],
  npcs: [
    {
      entity: "EntityLottomanGreckon",
      notes: "Gerado automaticamente por estruturas da dimensão.",
      displayName: "LottomanGreckon",
      registeredBiomes: [],
      loot: [],
      trades: [
        {
          input: {
            item: "Greckon Gems",
            itemId: "Itemizer.CoinsGreckon",
            quantity: 10,
            metadata: 1,
            imageUrl: "/textures/items/greckonGems.png",
          },
          output: {
            item: "Haunters Rifle Totem",
            itemId: "Totemizer.TotemHauntersRifle",
            quantity: 1,
            imageUrl: "/textures/items/totemHauntersRifle.png",
          },
        },
        {
          input: {
            item: "Greckon Gems",
            itemId: "Itemizer.CoinsGreckon",
            quantity: 10,
            metadata: 1,
            imageUrl: "/textures/items/greckonGems.png",
          },
          output: {
            item: "Viper-1 Totem",
            itemId: "Totemizer.TotemViper1",
            quantity: 1,
            imageUrl: "/textures/items/totemViper1.png",
          },
        },
        {
          input: {
            item: "Greckon Gems",
            itemId: "Itemizer.CoinsGreckon",
            quantity: 40,
            metadata: 1,
            imageUrl: "/textures/items/greckonGems.png",
          },
          output: {
            item: "Haunters Rifle Totem",
            itemId: "Totemizer.TotemHauntersRifle",
            quantity: 10,
            imageUrl: "/textures/items/totemHauntersRifle.png",
          },
          additionalInput: {
            item: "Greckon Gems",
            itemId: "Itemizer.CoinsGreckon",
            quantity: 35,
            imageUrl: "/textures/items/greckonGems.png",
          },
        },
        {
          input: {
            item: "Greckon Gems",
            itemId: "Itemizer.CoinsGreckon",
            quantity: 40,
            metadata: 1,
            imageUrl: "/textures/items/greckonGems.png",
          },
          output: {
            item: "Viper-1 Totem",
            itemId: "Totemizer.TotemViper1",
            quantity: 10,
            imageUrl: "/textures/items/totemViper1.png",
          },
          additionalInput: {
            item: "Greckon Gems",
            itemId: "Itemizer.CoinsGreckon",
            quantity: 35,
            imageUrl: "/textures/items/greckonGems.png",
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
      imageUrl: "/textures/mobs/lottomanGreckon.png",
      model: "/models/npc/lottoman/lottoman.gltf",
    },
    {
      entity: "EntityInfusionMaster",
      displayName: "InfusionMaster",
      weight: 1,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Haunted Forest",
          imageUrl: "/dimensions/common_images/Haunted_Forest.png",
        },
        {
          name: "Greckon",
          imageUrl: "/dimensions/greckon_images/Greckon.png",
        },
        {
          name: "Greckon Skulls",
          imageUrl: "/dimensions/greckon_images/Greckon_Skulls.png",
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
            item: "Infusion Boots",
            itemId: "Armorizer.InfusionBoots",
            quantity: 1,
            imageUrl: "/textures/items/bootsInfusion.png",
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
            item: "Infusion Leggings",
            itemId: "Armorizer.InfusionLeggings",
            quantity: 1,
            imageUrl: "/dimensions/common_images/Infusion_Leggings.png",
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
            item: "Infusion Chestplate",
            itemId: "Armorizer.InfusionChestplate",
            quantity: 1,
            imageUrl: "/textures/items/chestplateInfusion.png",
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
            item: "Infusion Helmet",
            itemId: "Armorizer.InfusionHelmet",
            quantity: 1,
            imageUrl: "/textures/items/helmetInfusion.png",
          },
        },
      ],
      imageUrl: "",
      model: "/models/npc/store-keeper/store-keeper.gltf",
    },
    {
      entity: "EntityVulcanismMaster",
      displayName: "VulcanismMaster",
      weight: 1,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Haunted Forest",
          imageUrl: "/dimensions/common_images/Haunted_Forest.png",
        },
        {
          name: "Greckon Skulls",
          imageUrl: "/dimensions/greckon_images/Greckon_Skulls.png",
        },
        {
          name: "Greckon",
          imageUrl: "/dimensions/greckon_images/Greckon.png",
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
            item: "Vulcanism Boots",
            itemId: "Armorizer.VulcanismBoots",
            quantity: 1,
            imageUrl: "/textures/items/bootsVulcanism.png",
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
            item: "Vulcanism Leggings",
            itemId: "Armorizer.VulcanismLeggings",
            quantity: 1,
            imageUrl: "/dimensions/common_images/Vulcanism_Leggings.png",
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
            item: "Vulcanism Chestplate",
            itemId: "Armorizer.VulcanismChestplate",
            quantity: 1,
            imageUrl: "/textures/items/chestplateVulcanism.png",
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
            item: "Vulcanism Helmet",
            itemId: "Armorizer.VulcanismHelmet",
            quantity: 1,
            imageUrl: "/textures/items/helmetVulcanism.png",
          },
        },
      ],
      imageUrl: "",
      model: "/models/npc/store-keeper/store-keeper.gltf",
    },
  ],
  generatedOres: [
    {
      field: "Blockizer.OreGhoulish",
      displayName: "Ore Ghoulish",
      height: {
        min: 3,
        max: 27,
      },
      imageUrl: "/ores/ghoulish_ore.png",
    },
  ],
  generatedStructures: [
    {
      className: "GreckonMazeP1",
      name: "Greckon Maze",
      context: "StructureGenRare #17",
      chance: {
        description: "1 em 700",
        formula: "random.nextInt(700) == 343",
        denominator: 700,
        comparator: "==",
        value: 343,
      },
      biome: null,
      imageUrl: "",
    },
    {
      className: "GreckonMazeP2",
      name: "Greckon Maze",
      context: "StructureGenRare #17",
      chance: {
        description: "1 em 700",
        formula: "random.nextInt(700) == 343",
        denominator: 700,
        comparator: "==",
        value: 343,
      },
      biome: null,
      imageUrl: "",
    },
    {
      className: "SkullPost",
      name: "Skull Post",
      context: "ChunkProviderGreckon.java",
      chance: null,
      biome: null,
      imageUrl: "",
    },
  ],
  resources: [
    {
      name: "Ghoulasm",
      type: "Item de invocação",
      usage:
        "Material usado na Haunting Table para criar Primed Ghoulasm, que por sua vez permite invocação do boss Bane. ",
      imageUrl: "/dimensions/dustopia_images/Ghoulasm.png",
    },
    {
      name: "Ghastly Ore",
      type: "Minério raro",
      usage:
        "Minério exclusivo de Greckon que gera armas ou ferramentas avançadas para combate em ambientes escuros / de tier 3. ",
      imageUrl: "/ores/ghastly_ore.png",
      height: {
        min: 3,
        max: 27,
      },
    },
    {
      name: "Haunted Logs",
      type: "Blocos de construção",
      usage:
        "Blocos decorativos com olhos e temática assombrada que definem o estilo visual da dimensão; usados para construções de terror ou bases temáticas. ",
      imageUrl: "/dimensions/shyrelands_images/Haunted_Log.png",
    },
  ],
  bosses: [
    {
      name: "Bane",
      howToSpawn:
        "No Haunted Maze, usar Primed Ghoulasm (criado a partir de Ghoulasm + Haunting Table) no chão para invocar o boss Bane. ",
      notes:
        "Boss final de Greckon, com temática de terror psicológico e combate intenso, drops de tier 3 e equipamentos voltados para ambientes hostis. ",
      imageUrl: "/dimensions/greckon_images/Bane.png",
      spawnItems: [
        {
          itemId: "Itemizer.HauntedIdol",
          item: "Haunted Idol",
          usage:
            "Use o Haunted Idol em qualquer bloco de Greckon para materializar o Bane (o item é consumido).",
          imageUrl: "/textures/items/hauntedIdol.png",
        },
      ],
      entities: [
        {
          entity: "EntityBane",
          displayName: "Bane",
          imageUrl: "/textures/mobs/bane.png",
          model: "/models/boss/bane/bane/bane.gltf",
          health: 1750,
        },
      ],
      loot: [
        {
          item: "Haunted Greatblade",
          itemId: "Weaponizer.HauntedGreatblade",
          minQuantity: 1,
          maxQuantity: 1,
          chance: 1,
          sourceEntities: ["EntityBane"],
          imageUrl: "/textures/items/hauntedGreatblade.png",
        },
        {
          item: "Haunters Staff",
          itemId: "Weaponizer.HauntersStaff",
          minQuantity: 1,
          maxQuantity: 1,
          chance: 1,
          sourceEntities: ["EntityBane"],
          imageUrl: "/textures/items/hauntersStaff.png",
        },
        {
          item: "Haunted Bow",
          itemId: "Weaponizer.HauntedBow",
          minQuantity: 1,
          maxQuantity: 1,
          chance: 1,
          sourceEntities: ["EntityBane"],
          imageUrl: "/dimensions/common_images/Haunted_Bow.png",
        },
        {
          item: "Ghoul Gasser",
          itemId: "Weaponizer.GhoulGasser",
          minQuantity: 1,
          maxQuantity: 1,
          chance: 1,
          sourceEntities: ["EntityBane"],
          imageUrl: "/textures/items/ghoulGasser.png",
        },
      ],
    },
  ],
  biomes: [
    {
      name: "Greckon",
      id: 82,
      imageUrl: "/nvm2_data/img_data/Greckon/biomes/Greckon.png",
    },
    {
      name: "Haunted Forest",
      id: 108,
      imageUrl: "/nvm2_data/img_data/Greckon/biomes/Haunted_Forest.png",
    },
    {
      name: "Greckon Skulls",
      id: 109,
      imageUrl: "/nvm2_data/img_data/Greckon/biomes/Greckon_Skulls.png",
    },
  ],
  structures: [
    {
      name: "Fragment Temple",
      imageUrl: "/dimensions/greckon_images/Fragment_Temple_(Greckon).png",
    },
    {
      name: "Faceless Tree",
      imageUrl: "/nvm2_data/img_data/Greckon/structures/Faceless_Tree.png",
    },
    {
      name: "Greckon Maze",
      imageUrl: "/nvm2_data/img_data/Greckon/structures/Haunted_Maze.png",
    },
    {
      name: "Haunted Lotto Orb",
      imageUrl: "/nvm2_data/img_data/Greckon/structures/Haunted_Orb.gif",
    },
  ],
};
