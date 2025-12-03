export const Deeplands = {
  id: "deeplands",
  name: "Deeplands",
  tier: 1,
  prerequisiteDimension: "Overworld",
  theme:
    "Caverna gigantesca subterrânea, escura, com teto irregular e chão plano de pedra escura.",
  shortDescription:
    "Dimensão cavernosa sem céu, formada por um imenso vazio com piso relativamente plano, teto cheio de saliências e iluminação mínima, povoada por mobs subterrâneos.",
  realmstone: {
    obtainHint:
      "Mine um minério em nível de bedrock no Overworld enquanto carrega um Blank Realmstone para obter a Deeplands Realmstone.",
    obtainDetails:
      "Com um Blank Realmstone no inventário, desça até a camada mais baixa do Overworld e mine qualquer bloco de minério próximo ao bedrock. A extração converte o Blank Realmstone em Deeplands Realmstone.",
    imageUrl: "/dimensions/deeplands_images/Deeplands_Realmstone.png",
  },
  imageUrl: "/dimensions/deeplands_images/Deeplands.png",
  wikiUrl: "https://adventofascension.fandom.com/wiki/Deeplands",
  mainObjectives: [
    {
      id: "unlock_dimension",
      title: "Desbloquear Deeplands",
      description:
        "Conseguir a Deeplands Realmstone minerando um minério em nível de bedrock no Overworld com um Blank Realmstone no inventário e ativar o portal.",
    },
    {
      id: "explore_cavern",
      title: "Explorar a caverna gigante",
      description:
        "Percorrer o ambiente cavernoso escuro, mapeando o chão plano e observando as formações do teto para encontrar mobs, recursos e estruturas.",
    },
    {
      id: "farm_underground_mobs",
      title: "Farmar mobs subterrâneos",
      description:
        "Enfrentar mobs característicos de Deeplands para obter drops ligados à Deeplands Table e a itens de progressão.",
    },
    {
      id: "progress_to_crystevia",
      title: "Avançar para Crystevia",
      description:
        "Usar Deeplands como ponto de partida para desbloquear Crystevia, seguindo a cadeia de tarefas ligada à dimensão.",
    },
  ],
  mainObjectivesImages: [
    "https://adventofascension.fandom.com/wiki/Deeplands_Realmstone",
    "https://adventofascension.fandom.com/wiki/File:Deeplands_(Night_Vision).png",
    "https://adventofascension.fandom.com/wiki/Category:Deeplands_mobs",
    "https://adventofascension.fandom.com/wiki/Crystevia",
  ],
  secondaryObjectives: [
    "Criar uma rede própria de iluminação (tochas, lanternas, blocos luminosos) para transformar Deeplands em base subterrânea.",
    "Farmar recursos de pedra escura e outros blocos de ambiente cavernoso para builds de fortaleza e minas.",
    "Treinar combate em ambientes escuros, ajustando gamma, uso de poções de Night Vision e equipamentos de visão.",
    "Desenvolver rotas seguras no chão plano para transporte rápido entre pontos de interesse dentro da dimensão.",
  ],
  secondaryObjectivesImages: [
    "https://adventofascension.fandom.com/wiki/Category:Deeplands",
    "https://adventofascension.fandom.com/wiki/Grass_blocks",
    "https://adventofascension.fandom.com/wiki/Category:Potions",
    "https://adventofascension.fandom.com/wiki/Advancements",
  ],
  progressionNotes: [
    {
      id: "notes_tier2_transition_1",
      title: "Deeplands é um dos primeiros mundos de tier 1",
      description:
        "Deeplands é um dos primeiros mundos de tier 1 acessíveis diretamente a partir do Overworld, ideal quando o jogador já tem armadura razoável e fonte estável de luz.",
    },
    {
      id: "notes_tier2_transition_2",
      title: "A dimensão funciona como ponte natural para Crystevia",
      description:
        "A dimensão funciona como ponte natural para Crystevia, que amplia o foco em minérios de gemas e progressão mágica.",
    },
    {
      id: "notes_tier2_transition_3",
      title: "A experiência adquirida combatendo em escuridão constante",
      description:
        "A experiência adquirida combatendo em escuridão constante é útil para várias outras dimensões de AoA com visibilidade limitada.",
    },
  ],
  progressionImages: [
    "https://adventofascension.fandom.com/wiki/File:Deeplands_(Night_Vision).png",
    "https://adventofascension.fandom.com/wiki/Crystevia",
    "https://adventofascension.fandom.com/wiki/Dimensions",
  ],
  versionNotes:
    "Na Tslat 1.1.3 Deeplands já aparece como caverna gigante, tier 1, acessada minerando minério em nível de bedrock no Overworld e conectando-se a Crystevia. Atualizações posteriores alteraram detalhes da geração, mas o conceito geral permanece.",
  mobs: [
    {
      entity: "EntityRockCrawler",
      weight: 20,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Deeplands Cave",
          imageUrl: "/dimensions/deeplands_images/Deeplands.png",
        },
        {
          name: "Deep Fungal Cave",
          imageUrl: "/dimensions/deeplands_images/Deep_Fungal_Cave.png",
        },
        {
          name: "Deepshine Cave",
          imageUrl: "/dimensions/deeplands_images/Deepshine_Cave.png",
        },
      ],
      loot: [
        {
          item: "Deeplands Gems",
          itemId: "Itemizer.CoinsDeeplands",
          quantity: 2,
          chance: 1,
          imageUrl: "/textures/items/deeplandsGems.png",
        },
      ],
      imageUrl: "/textures/mobs/rockcrawler.png",
      model: "/models/deeplands/rock-crawler/rock-crawler.gltf",
      health: 40,
    },
    {
      entity: "EntityRockCritter",
      weight: 20,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Deeplands Cave",
          imageUrl: "/dimensions/deeplands_images/Deeplands.png",
        },
        {
          name: "Deep Fungal Cave",
          imageUrl: "/dimensions/deeplands_images/Deep_Fungal_Cave.png",
        },
        {
          name: "Deepshine Cave",
          imageUrl: "/dimensions/deeplands_images/Deepshine_Cave.png",
        },
      ],
      loot: [
        {
          item: "Ancient Cavern Realmstone",
          itemId: "Itemizer.RealmstoneAncientCavern",
          quantity: 2,
          chance: 1,
          imageUrl: "/textures/items/realmstoneAncientCavern.png",
        },
      ],
      imageUrl: "/textures/mobs/rockcritter.png",
      model: "/models/deeplands/rock-critter/rock-critter.gltf",
      health: 45,
    },
    {
      entity: "EntityRockbiter",
      weight: 20,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Deeplands Cave",
          imageUrl: "/dimensions/deeplands_images/Deeplands.png",
        },
        {
          name: "Deep Fungal Cave",
          imageUrl: "/dimensions/deeplands_images/Deep_Fungal_Cave.png",
        },
        {
          name: "Deepshine Cave",
          imageUrl: "/dimensions/deeplands_images/Deepshine_Cave.png",
        },
      ],
      loot: [
        {
          item: "Rock Bones",
          itemId: "Itemizer.RockBones",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/rockBones.png",
        },
        {
          item: "Predator Upgrade Kit",
          itemId: "Itemizer.UpgradeKitPredator",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/upgradeKitPredator.png",
        },
        {
          item: "Deeplands Gems",
          itemId: "Itemizer.CoinsDeeplands",
          quantity: 2,
          chance: 1,
          imageUrl: "/textures/items/deeplandsGems.png",
        },
        {
          item: "Deep Banner",
          itemId: "SpecialBlockizer.DeepBanner",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/banner/deepBanner.png",
        },
      ],
      imageUrl: "/textures/mobs/rockbiter.png",
      model: "/models/deeplands/rockbiter/rockbiter.gltf",
      health: 60,
    },
    {
      entity: "EntityCaveCreep",
      weight: 20,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Deeplands Cave",
          imageUrl: "/dimensions/deeplands_images/Deeplands.png",
        },
        {
          name: "Deep Fungal Cave",
          imageUrl: "/dimensions/deeplands_images/Deep_Fungal_Cave.png",
        },
        {
          name: "Deepshine Cave",
          imageUrl: "/dimensions/deeplands_images/Deepshine_Cave.png",
        },
      ],
      loot: [
        {
          item: "Rock Bones",
          itemId: "Itemizer.RockBones",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/rockBones.png",
        },
      ],
      imageUrl: "/textures/mobs/cavecreep.png",
      model: "/models/deeplands/cave-creep/cave-creep.gltf",
      health: 35,
    },
    {
      entity: "EntityDweller",
      weight: 20,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Deeplands Cave",
          imageUrl: "/dimensions/deeplands_images/Deeplands.png",
        },
        {
          name: "Deep Fungal Cave",
          imageUrl: "/dimensions/deeplands_images/Deep_Fungal_Cave.png",
        },
        {
          name: "Deepshine Cave",
          imageUrl: "/dimensions/deeplands_images/Deepshine_Cave.png",
        },
      ],
      loot: [
        {
          item: "Predator Upgrade Kit",
          itemId: "Itemizer.UpgradeKitPredator",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/upgradeKitPredator.png",
        },
        {
          item: "Uncharged Stone",
          itemId: "Itemizer.UnchargedStone",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/unchargedStone.png",
        },
        {
          item: "Deep Banner",
          itemId: "SpecialBlockizer.DeepBanner",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/banner/deepBanner.png",
        },
        {
          item: "Iromine Realmstone",
          itemId: "Itemizer.RealmstoneIromine",
          quantity: 2,
          chance: 1,
          imageUrl: "/textures/items/realmstoneIromine.png",
        },
      ],
      imageUrl: "/textures/mobs/dweller.png",
      model: "/models/deeplands/dweller/dweller.gltf",
      health: 50,
    },
    {
      entity: "EntityDoubler",
      weight: 1,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Deeplands Cave",
          imageUrl: "/dimensions/deeplands_images/Deeplands.png",
        },
        {
          name: "Deep Fungal Cave",
          imageUrl: "/dimensions/deeplands_images/Deep_Fungal_Cave.png",
        },
        {
          name: "Deepshine Cave",
          imageUrl: "/dimensions/deeplands_images/Deepshine_Cave.png",
        },
      ],
      loot: [
        {
          item: "Skeletal Archergun",
          itemId: "Weaponizer.SkeletalArchergun",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/skeletalArchergun.png",
        },
        {
          item: "Deeplands Realmstone",
          itemId: "Itemizer.RealmstoneDeeplands",
          quantity: 3,
          chance: 1,
          imageUrl: "/textures/items/realmstoneDeeplands.png",
        },
      ],
      imageUrl: "/textures/mobs/doubler.png",
      model: "/models/deeplands/doubler/doubler.gltf",
      health: 100,
    },
    {
      entity: "EntityCaseConstruct",
      weight: 1,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Deeplands Cave",
          imageUrl: "/dimensions/deeplands_images/Deeplands.png",
        },
        {
          name: "Deep Fungal Cave",
          imageUrl: "/dimensions/deeplands_images/Deep_Fungal_Cave.png",
        },
        {
          name: "Deepshine Cave",
          imageUrl: "/dimensions/deeplands_images/Deepshine_Cave.png",
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
          item: "Blockizer.Deepcase",
          itemId: "Blockizer.Deepcase",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/blocks/oreDeepcase.png",
        },
      ],
      imageUrl: "/textures/mobs/caseConstruct.png",
      model: "/models/deeplands/case-construct/case-construct.gltf",
      health: 200,
    },
    {
      entity: "EntityArocknid",
      imageUrl: "/textures/mobs/arocknid.png",
      model: "/models/deeplands/arocknid/arocknid.gltf",
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
          item: "Wither Rune",
          itemId: "Itemizer.WitherRune",
          quantity: 16,
          chance: 1,
          imageUrl: "/textures/items/rune.png",
          itemName: "Wither Rune",
        },
        {
          item: "Fire Rune",
          itemId: "Itemizer.FireRune",
          quantity: 16,
          chance: 1,
          imageUrl: "/textures/items/rune.png",
          itemName: "Fire Rune",
        },
      ],
    },
    {
      entity: "EntityDwellerClone",
      imageUrl: "/textures/mobs/dwellerclone.png",
      model: "/models/deeplands/dweller-clone/dweller-clone.gltf",
      health: 60,
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
    },
    {
      entity: "EntityNipper",
      imageUrl: "/textures/mobs/nipper.png",
      model: "/models/deeplands/nipper/nipper.gltf",
      health: 40,
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
          item: "Copper Coin",
          itemId: "Itemizer.CopperCoin",
          quantity: 5,
          chance: 1,
          imageUrl: "/textures/items/coinCopper.png",
          itemName: "Copper Coin",
        },
      ],
    },
  ],
  npcs: [
    {
      entity: "EntityLottomanDeeplands",
      notes: "Gerado automaticamente por estruturas da dimensão.",
      displayName: "LottomanDeeplands",
      registeredBiomes: [],
      loot: [],
      trades: [
        {
          input: {
            item: "Deeplands Gems",
            itemId: "Itemizer.CoinsDeeplands",
            quantity: 10,
            metadata: 1,
            imageUrl: "/textures/items/deeplandsGems.png",
          },
          output: {
            item: "Formation Staff Totem",
            itemId: "Totemizer.TotemFormationStaff",
            quantity: 1,
            imageUrl: "/textures/items/totemFormationStaff.png",
          },
        },
        {
          input: {
            item: "Deeplands Gems",
            itemId: "Itemizer.CoinsDeeplands",
            quantity: 10,
            metadata: 1,
            imageUrl: "/textures/items/deeplandsGems.png",
          },
          output: {
            item: "Predatious Bow Totem",
            itemId: "Totemizer.TotemPredatiousBow",
            quantity: 1,
            imageUrl: "/textures/items/totemPredatiousBow.png",
          },
        },
        {
          input: {
            item: "Deeplands Gems",
            itemId: "Itemizer.CoinsDeeplands",
            quantity: 40,
            metadata: 1,
            imageUrl: "/textures/items/deeplandsGems.png",
          },
          output: {
            item: "Formation Staff Totem",
            itemId: "Totemizer.TotemFormationStaff",
            quantity: 10,
            imageUrl: "/textures/items/totemFormationStaff.png",
          },
          additionalInput: {
            item: "Deeplands Gems",
            itemId: "Itemizer.CoinsDeeplands",
            quantity: 35,
            imageUrl: "/textures/items/deeplandsGems.png",
          },
        },
        {
          input: {
            item: "Deeplands Gems",
            itemId: "Itemizer.CoinsDeeplands",
            quantity: 40,
            metadata: 1,
            imageUrl: "/textures/items/deeplandsGems.png",
          },
          output: {
            item: "Predatious Bow Totem",
            itemId: "Totemizer.TotemPredatiousBow",
            quantity: 10,
            imageUrl: "/textures/items/totemPredatiousBow.png",
          },
          additionalInput: {
            item: "Deeplands Gems",
            itemId: "Itemizer.CoinsDeeplands",
            quantity: 35,
            imageUrl: "/textures/items/deeplandsGems.png",
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
      imageUrl: "/textures/mobs/lottomanDeeplands.png",
      model: "/models/npc/lottoman/lottoman.gltf",
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
          name: "Deeplands Cave",
          imageUrl: "/dimensions/deeplands_images/Deeplands.png",
        },
        {
          name: "Deep Fungal Cave",
          imageUrl: "/dimensions/deeplands_images/Deep_Fungal_Cave.png",
        },
        {
          name: "Deepshine Cave",
          imageUrl: "/dimensions/deeplands_images/Deepshine_Cave.png",
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
          name: "Deeplands Cave",
          imageUrl: "/dimensions/deeplands_images/Deeplands.png",
        },
        {
          name: "Deep Fungal Cave",
          imageUrl: "/dimensions/deeplands_images/Deep_Fungal_Cave.png",
        },
        {
          name: "Deepshine Cave",
          imageUrl: "/dimensions/deeplands_images/Deepshine_Cave.png",
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
      field: "Blockizer.oreRuniumCharged",
      displayName: "Runium Charged Ore",
      height: {
        min: 70,
        max: 114,
      },
      imageUrl: "/ores/charged_runium_ore.png",
    },
  ],
  resources: [
    {
      name: "Blocos de pedra/solo de Deeplands",
      type: "Blocos de construção",
      usage:
        "Usados para construir fortalezas e bases subterrâneas com estética escura e cavernosa.",
      imageUrl: "/dimensions/crystevia_images/Deep_Crystal.png",
    },
    {
      name: "Recursos ligados à Deeplands Table",
      type: "Itens especializados",
      usage:
        "Drops de mobs e blocos da dimensão que alimentam receitas da Deeplands Table, criando itens com identidade própria.",
      imageUrl: "/dimensions/dustopia_images/Rocky_Upgrade_Kit.png",
    },
  ],
  bosses: [
    {
      name: "Kror",
      howToSpawn:
        "Use um Boulder Dash em um Kror Altar dentro dos Kror Pillars para despertar o colosso.",
      notes:
        "Guardião subterrâneo com ataques corpo-a-corpo devastadores; dropa Subterranean Greatblade, Rocker Rifle e Boulder Bomber.",
      imageUrl: "/dimensions/common_images/Kror.png",
      spawnItems: [
        {
          itemId: "Itemizer.BoulderDash",
          item: "Boulder Dash",
          usage:
            "Use o Boulder Dash no Kror Altar das colunas profundas do Deeplands.",
          imageUrl: "/textures/items/boulderDash.png",
        },
      ],
      entities: [
        {
          entity: "EntityKror",
          displayName: "Kror",
          imageUrl: "/textures/mobs/kror.png",
          model: "/models/boss/kror/kror/kror.gltf",
          health: 2200,
        },
      ],
      loot: [
        {
          item: "Rocker Rifle",
          itemId: "Weaponizer.RockerRifle",
          minQuantity: 1,
          maxQuantity: 1,
          chance: 1,
          sourceEntities: ["EntityKror"],
          imageUrl: "/textures/items/rockerRifle.png",
        },
        {
          item: "Boulder Bomber",
          itemId: "Weaponizer.BoulderBomber",
          minQuantity: 1,
          maxQuantity: 1,
          chance: 1,
          sourceEntities: ["EntityKror"],
          imageUrl: "/textures/items/boulderBomber.png",
        },
        {
          item: "Subterranean Greatblade",
          itemId: "Weaponizer.SubterraneanGreatblade",
          minQuantity: 1,
          maxQuantity: 1,
          chance: 1,
          sourceEntities: ["EntityKror"],
          imageUrl: "/textures/items/subterraneanGreatblade.png",
        },
      ],
    },
  ],
  biomes: [
    {
      name: "Deeplands Cave",
      id: 80,
      imageUrl: "/nvm2_data/img_data/Deeplands/biomes/Deeplands.png",
    },
    {
      name: "Deep Fungal Cave",
      id: 104,
      imageUrl: "/nvm2_data/img_data/Deeplands/biomes/Deeplands.png",
    },
    {
      name: "Deepshine Cave",
      id: 105,
      imageUrl: "/nvm2_data/img_data/Deeplands/biomes/Deeplands.png",
    },
  ],
  structures: [
    {
      name: "Arocknid Cave",
      imageUrl: "/nvm2_data/img_data/Deeplands/structures/Arocknid_Cave.png",
    },
    {
      name: "Charging Station",
      imageUrl: "/nvm2_data/img_data/Deeplands/structures/Charging_Station.png",
    },
    {
      name: "Deep Lotto Shelter",
      imageUrl:
        "/nvm2_data/img_data/Deeplands/structures/Deep_Lotto_Shelter.png",
    },
  ],
};
