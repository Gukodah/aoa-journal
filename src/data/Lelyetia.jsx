export const Lelyetia = {
  id: "lelyetia",
  name: "Lelyetia",
  tier: 1,
  prerequisiteDimension: "Overworld",
  theme:
    "Floresta espelhada com mundo de cima e mundo de baixo, gravidade invertida no “underside”, árvores altas e cenário laranja.",
  shortDescription:
    "Dimensão de floresta invertida: há uma parte superior normal e uma parte inferior onde a gravidade puxa para cima, gerando sensação de inversão e exploração vertical. ",
  realmstone: {
    obtainHint:
      "Caia 26 blocos ou mais enquanto carrega um Blank Realmstone para convertê-lo em Lelyetia Realmstone. ",
    obtainDetails:
      "Com um Blank Realmstone no inventário, salte ou caia de uma altura de pelo menos 26 blocos (sem água para absorver o dano) e sobreviva à queda para que o Blank se transforme em Lelyetia Realmstone. Use-o no portal para entrar. ",
    imageUrl: "/dimensions/lelyetia_images/Lelyetia_Realmstone.png",
  },
  imageUrl: "/dimensions/lelyetia_images/Lelyetia.png",
  wikiUrl: "https://adventofascension.fandom.com/wiki/Lelyetia",
  mainObjectives: [
    {
      id: "unlock_lelyetia",
      title: "Desbloquear Lelyetia",
      description:
        "Derive a Lelyetia Realmstone ao cair 26+ blocos com um Blank Realmstone no inventário e ativar o portal.",
      imageUrl: "/dimensions/lelyetia_images/Lelyetia_Realmstone.png",
    },
    {
      id: "explore_mirrored_forest",
      title: "Explorar a floresta espelhada",
      description:
        "Percorrer tanto a “superfície” laranja quanto a underside invertida da dimensão, investigando árvores Achony e Churry, buracos que levam à parte inferior e estruturas que atravessam o céu-vazio. ",
      imageUrl: "/dimensions/lelyetia_images/Lelyetia_Underside.png",
    },
    {
      id: "gather_lelyetian_resources",
      title: "Coletar recursos de Lelyetia",
      description:
        "Minerar Lelyetian Stone e Lelyetian Grass, coletar itens da Lelyetia Table e derrotar mobs como Lelyetian Warrior para obter Upgrade Kits e materiais de tier 1. ",
      imageUrl: "/dimensions/lelyetia_images/Lelyetian_Stone.png",
    },
  ],
  secondaryObjectives: [
    {
      id: "visit_tower_structures",
      title: "Visitar Lelyetian Towers",
      description:
        "Encontrar e explorar as Lelyetian Towers — altas torres com NPCs como Trader, Banker e Lottoman — para trocar e obter itens. ",
      imageUrl: "/dimensions/lelyetia_images/Lelyetian_Tower.png",
    },
    {
      id: "learn_gravity_mechanics",
      title: "Dominar mecânica de gravidade invertida",
      description:
        "Na parte underside da dimensão, a gravidade empurra o jogador para cima (a menos que use o Distorting Artifact), criando ambientes de risco e novas rotas de exploração. ",
      imageUrl:
        "/dimensions/lelyetia_images/Inverted_Lelyetian_Grass.png",
    },
  ],
  progressionNotes: [
    {
      id: "entry_tier1",
      title: "Entrada para dimensões além do Overworld",
      description:
        "Lelyetia é uma das primeiras dimensões de tier 1 que o jogador pode acessar após o Overworld, ideal para dar os primeiros saltos na progressão dimensional. ",
      imageUrl: "/dimensions/biomes/lelyetia.png",
    },
    {
      id: "practice_vertical_mobility",
      title: "Treino de mobilidade vertical",
      description:
        "O ambiente de Lelyetia exige que o jogador progrida em builds com salto, controle de queda e uso de itens de mobilidade, preparando-se para desafios mais difíceis.",
      imageUrl: "/dimensions/lelyetia_images/Lelyetia_Underside.png",
    },
  ],
  versionNotes:
    "Informações da wiki oficial (versão 2.0). Em Tslat 1.1.3 para 1.7.10 pode haver diferenças, mas as tarefas de ‘caída de 26 blocos’ e o layout de florestas invertidas já fazem parte da estrutura original. ",
  mobs: [
    {
      entity: "GlaringPixon",
      healthMin: 19,
      healthMax: 39,
      weight: 5,
      min: 1,
      max: 6,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Lelyetia",
          imageUrl: "/dimensions/lelyetia_images/Lelyetia.png",
        },
      ],
      loot: [
        {
          item: "Glaring Infusion Stone",
          itemId: "Itemizer.iStoneGlaring",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/blueprintInfusionAltar.png",
          itemName: "Glaring Infusion Stone",
        },
      ],
      imageUrl: "",
      model: "/models/pixons/Glaring_Pixon.png",
      health: 19,
    },
    {
      entity: "EntityGrobbler",
      weight: 1,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Lelyetia",
          imageUrl: "/dimensions/lelyetia_images/Lelyetia.png",
        },
      ],
      loot: [
        {
          item: "Monster",
          itemId: "Weaponizer.Monster",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/monster.png",
        },
        {
          item: "Lelyetia Realmstone",
          itemId: "Itemizer.RealmstoneLelyetia",
          quantity: 2,
          chance: 1,
          imageUrl: "/textures/items/realmstoneLelyetia.png",
        },
      ],
      imageUrl: "/textures/mobs/grobbler.png",
      model: "/models/lelyetia/grobbler/grobbler.gltf",
      health: 150,
    },
    {
      entity: "EntityTracker",
      weight: 20,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Lelyetia",
          imageUrl: "/dimensions/lelyetia_images/Lelyetia.png",
        },
      ],
      loot: [
        {
          item: "Gauge Rifle",
          itemId: "Weaponizer.GaugeRifle",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/gaugeRifle.png",
        },
        {
          item: "Lelyetia Gems",
          itemId: "Itemizer.CoinsLelyetia",
          quantity: 3,
          chance: 1,
          imageUrl: "/textures/items/lelyetiaGems.png",
        },
        {
          item: "Lelyetian Upgrade Kit",
          itemId: "Itemizer.UpgradeKitLelyetian",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/upgradeKitLelyetian.png",
        },
        {
          item: "Lelyetian Banner",
          itemId: "SpecialBlockizer.LelyetianBanner",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/banner/lelyetianBanner.png",
        },
      ],
      imageUrl: "/textures/mobs/tracker.png",
      model: "/models/lelyetia/tracker/tracker.gltf",
      health: 60,
    },
    {
      entity: "EntityTrotter",
      weight: 20,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Lelyetia",
          imageUrl: "/dimensions/lelyetia_images/Lelyetia.png",
        },
      ],
      loot: [
        {
          item: "Core Rifle",
          itemId: "Weaponizer.CoreRifle",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/coreRifle.png",
        },
        {
          item: "Lelyetia Gems",
          itemId: "Itemizer.CoinsLelyetia",
          quantity: 3,
          chance: 1,
          imageUrl: "/textures/items/lelyetiaGems.png",
        },
        {
          item: "Lelyetian Upgrade Kit",
          itemId: "Itemizer.UpgradeKitLelyetian",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/upgradeKitLelyetian.png",
        },
        {
          item: "Lelyetian Banner",
          itemId: "SpecialBlockizer.LelyetianBanner",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/banner/lelyetianBanner.png",
        },
      ],
      imageUrl: "/textures/mobs/trotter.png",
      model: "/models/lelyetia/trotter/trotter.gltf",
      health: 45,
    },
    {
      entity: "EntityFlye",
      weight: 20,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Lelyetia",
          imageUrl: "/dimensions/lelyetia_images/Lelyetia.png",
        },
      ],
      loot: [
        {
          item: "Pyro Archergun",
          itemId: "Weaponizer.PyroArchergun",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/pyroArchergun.png",
        },
        {
          item: "Lelyetia Gems",
          itemId: "Itemizer.CoinsLelyetia",
          quantity: 3,
          chance: 1,
          imageUrl: "/textures/items/lelyetiaGems.png",
        },
        {
          item: "Lelyetian Upgrade Kit",
          itemId: "Itemizer.UpgradeKitLelyetian",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/upgradeKitLelyetian.png",
        },
        {
          item: "Lelyetian Banner",
          itemId: "SpecialBlockizer.LelyetianBanner",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/banner/lelyetianBanner.png",
        },
      ],
      imageUrl: "/textures/mobs/flye.png",
      model: "/models/lelyetia/flye/flye.gltf",
      health: 45,
    },
    {
      entity: "EntityLelyetianCaster",
      weight: 20,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Lelyetia",
          imageUrl: "/dimensions/lelyetia_images/Lelyetia.png",
        },
      ],
      loot: [
        {
          item: "Plantizer.ChiliSeeds",
          itemId: "Plantizer.ChiliSeeds",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/chiliSeeds.png",
        },
        {
          item: "Guardian's Eye",
          itemId: "Itemizer.GuardiansEye",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/guardiansEye.png",
        },
      ],
      imageUrl: "/textures/mobs/lelyetianCaster.png",
      model: "/models/lelyetia/lelyetian-caster/lelyetian-caster.gltf",
      health: 60,
    },
    {
      entity: "EntityLelyetianWarrior",
      weight: 20,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Lelyetia",
          imageUrl: "/dimensions/lelyetia_images/Lelyetia.png",
        },
      ],
      loot: [
        {
          item: "Lelyetian Greatblade",
          itemId: "Weaponizer.LelyetianGreatblade",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/lelyetianGreatblade.png",
        },
        {
          item: "Guardian's Eye",
          itemId: "Itemizer.GuardiansEye",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/guardiansEye.png",
        },
      ],
      imageUrl: "/textures/mobs/lelyetianWarrior.png",
      model: "/models/lelyetia/lelyetian-warrior/lelyetian-warrior.gltf",
      health: 45,
    },
    {
      entity: "EntityExohead",
      imageUrl: "/textures/mobs/exohead.png",
      model: "/models/lelyetia/exohead/exohead.gltf",
      health: 80,
      weight: 20,
      min: 1,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Lelyetia",
          imageUrl: "/dimensions/lelyetia_images/Lelyetia.png",
        },
      ],
      loot: [
        {
          item: "Dark Bones",
          itemId: "Itemizer.DarkBones",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/darkBones.png",
          itemName: "Dark Bones",
        },
      ],
    },
    {
      entity: "EntityParavite",
      imageUrl: "/textures/mobs/paravite.png",
      model: "/models/lelyetia/paravite/paravite.gltf",
      health: 100,
      weight: 20,
      min: 1,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Lelyetia",
          imageUrl: "/dimensions/lelyetia_images/Lelyetia.png",
        },
      ],
      loot: [
        {
          item: "Silver Coin",
          itemId: "Itemizer.SilverCoin",
          quantity: 6,
          chance: 1,
          imageUrl: "/textures/blocks/silverGrass.png",
          itemName: "Silver Coin",
        },
        {
          item: "Skydriver Bow",
          itemId: "Weaponizer.SkydriverBow",
          quantity: 1,
          chance: 0.00909090909090909,
          imageUrl: "/textures/items/animateditem/bowSkydriver_0.png",
          itemName: "Skydriver Bow",
        },
        {
          item: "Overshot",
          itemId: "Weaponizer.Overshot",
          quantity: 1,
          chance: 0.00909090909090909,
          imageUrl: "/textures/items/overshot.png",
          itemName: "Overshot",
        },
      ],
    },
    {
      entity: "EntityRawbone",
      imageUrl: "/textures/mobs/rawbone.png",
      model: "/models/lelyetia/rawbone/rawbone.gltf",
      health: 80,
      weight: 20,
      min: 1,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Lelyetia",
          imageUrl: "/dimensions/lelyetia_images/Lelyetia.png",
        },
      ],
      loot: [
        {
          item: "Fleshy Bones",
          itemId: "Itemizer.FleshyBones",
          quantity: 1,
          chance: 0.5,
          imageUrl: "/textures/items/fleshyBones.png",
          itemName: "Fleshy Bones",
        },
      ],
    },
    {
      entity: "EntityZhinx",
      imageUrl: "/textures/mobs/zhinx.png",
      model: "/models/lelyetia/zhinx/zhinx.gltf",
      health: 100,
      weight: 20,
      min: 1,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Lelyetia",
          imageUrl: "/dimensions/lelyetia_images/Lelyetia.png",
        },
      ],
      loot: [
        {
          item: "Zhinx Dust",
          itemId: "Itemizer.ZhinxDust",
          quantity: 1,
          chance: 0.125,
          imageUrl: "/textures/items/zhinxDust.png",
          itemName: "Zhinx Dust",
        },
        {
          item: "Zhinx Dust",
          itemId: "Itemizer.ZhinxDust",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/zhinxDust.png",
          itemName: "Zhinx Dust",
        },
      ],
    },
  ],
  npcs: [
    {
      entity: "EntityHunterMaster",
      notes: "Gerado automaticamente por estruturas da dimensão.",
      displayName: "HunterMaster",
      registeredBiomes: [],
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
            item: "Hunter Boots",
            itemId: "Armorizer.HunterBoots",
            quantity: 1,
            imageUrl: "/textures/items/bootsHunter.png",
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
            item: "Hunter Leggings",
            itemId: "Armorizer.HunterLeggings",
            quantity: 1,
            imageUrl: "/dimensions/common_images/Hunter_Leggings.png",
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
            item: "Hunter Chestplate",
            itemId: "Armorizer.HunterChestplate",
            quantity: 1,
            imageUrl: "/textures/items/chestplateHunter.png",
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
            item: "Hunter Helmet",
            itemId: "Armorizer.HunterHelmet",
            quantity: 1,
            imageUrl: "/textures/items/helmetHunter.png",
          },
        },
      ],
      imageUrl: "",
      model: "/models/npc/lelyetian-npc/lelyetian-npc.gltf",
    },
    {
      entity: "EntityLelyetianBanker",
      notes: "Gerado automaticamente por estruturas da dimensão.",
      displayName: "LelyetianBanker",
      registeredBiomes: [],
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
            item: "Gold Coin",
            itemId: "Itemizer.GoldCoin",
            quantity: 20,
            imageUrl: "/textures/items/coinGold.png",
          },
        },
        {
          input: {
            item: "Gold Coin",
            itemId: "Itemizer.GoldCoin",
            quantity: 1,
            metadata: 1,
            imageUrl: "/textures/items/coinGold.png",
          },
          output: {
            item: "Silver Coin",
            itemId: "Itemizer.SilverCoin",
            quantity: 20,
            imageUrl: "/textures/items/coinSilver.png",
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
            item: "Copper Coin",
            itemId: "Itemizer.CopperCoin",
            quantity: 20,
            imageUrl: "/textures/items/coinCopper.png",
          },
        },
        {
          input: {
            item: "Gold Coin",
            itemId: "Itemizer.GoldCoin",
            quantity: 20,
            metadata: 1,
            imageUrl: "/textures/items/coinGold.png",
          },
          output: {
            item: "Lunaver Coin",
            itemId: "Itemizer.LunaverCoin",
            quantity: 1,
            imageUrl: "/textures/items/coinLunaver.png",
          },
        },
        {
          input: {
            item: "Silver Coin",
            itemId: "Itemizer.SilverCoin",
            quantity: 20,
            metadata: 1,
            imageUrl: "/textures/items/coinSilver.png",
          },
          output: {
            item: "Gold Coin",
            itemId: "Itemizer.GoldCoin",
            quantity: 1,
            imageUrl: "/textures/items/coinGold.png",
          },
        },
        {
          input: {
            item: "Copper Coin",
            itemId: "Itemizer.CopperCoin",
            quantity: 20,
            metadata: 1,
            imageUrl: "/textures/items/coinCopper.png",
          },
          output: {
            item: "Silver Coin",
            itemId: "Itemizer.SilverCoin",
            quantity: 1,
            imageUrl: "/textures/items/coinSilver.png",
          },
        },
      ],
      imageUrl: "/textures/mobs/lelyetianBanker.png",
      model: "/models/npc/lelyetian-npc/lelyetian-npc.gltf",
    },
    {
      entity: "EntityLelyetianTrader",
      notes: "Gerado automaticamente por estruturas da dimensão.",
      displayName: "LelyetianTrader",
      registeredBiomes: [],
      loot: [],
      trades: [
        {
          input: {
            item: "Zhinx Dust",
            itemId: "Itemizer.ZhinxDust",
            quantity: 45,
            metadata: 1,
            imageUrl: "/textures/items/zhinxDust.png",
          },
          output: {
            item: "Decimator",
            itemId: "Weaponizer.Decimator",
            quantity: 1,
            imageUrl: "/textures/items/decimator.png",
          },
        },
        {
          input: {
            item: "Lunaver Coin",
            itemId: "Itemizer.LunaverCoin",
            quantity: 2,
            metadata: 1,
            imageUrl: "/textures/items/coinLunaver.png",
          },
          output: {
            item: "Cyclone",
            itemId: "Weaponizer.Cyclone",
            quantity: 1,
            imageUrl: "/textures/items/cyclone.png",
          },
          additionalInput: {
            item: "Zhinx Dust",
            itemId: "Itemizer.ZhinxDust",
            quantity: 25,
            imageUrl: "/textures/items/zhinxDust.png",
          },
        },
        {
          input: {
            item: "Lunaver Coin",
            itemId: "Itemizer.LunaverCoin",
            quantity: 3,
            metadata: 1,
            imageUrl: "/textures/items/coinLunaver.png",
          },
          output: {
            item: "Weapon Parts",
            itemId: "Itemizer.WeaponParts",
            quantity: 1,
            imageUrl: "/textures/items/weaponParts.png",
          },
          additionalInput: {
            item: "Zhinx Dust",
            itemId: "Itemizer.ZhinxDust",
            quantity: 20,
            imageUrl: "/textures/items/zhinxDust.png",
          },
        },
        {
          input: {
            item: "Lunaver Coin",
            itemId: "Itemizer.LunaverCoin",
            quantity: 3,
            metadata: 1,
            imageUrl: "/textures/items/coinLunaver.png",
          },
          output: {
            item: "Weapon Parts",
            itemId: "Itemizer.WeaponParts",
            quantity: 1,
            imageUrl: "/textures/items/weaponParts.png",
          },
          additionalInput: {
            item: "Dark Bones",
            itemId: "Itemizer.DarkBones",
            quantity: 20,
            imageUrl: "/textures/items/darkBones.png",
          },
        },
        {
          input: {
            item: "Lunaver Coin",
            itemId: "Itemizer.LunaverCoin",
            quantity: 3,
            metadata: 1,
            imageUrl: "/textures/items/coinLunaver.png",
          },
          output: {
            item: "Weapon Parts",
            itemId: "Itemizer.WeaponParts",
            quantity: 1,
            imageUrl: "/textures/items/weaponParts.png",
          },
          additionalInput: {
            item: "Fleshy Bones",
            itemId: "Itemizer.FleshyBones",
            quantity: 20,
            imageUrl: "/textures/items/fleshyBones.png",
          },
        },
      ],
      imageUrl: "",
      model: "",
    },
    {
      entity: "EntityLottomanLelyetia",
      notes: "Gerado automaticamente por estruturas da dimensão.",
      displayName: "LottomanLelyetia",
      registeredBiomes: [],
      loot: [],
      trades: [
        {
          input: {
            item: "Lelyetia Gems",
            itemId: "Itemizer.CoinsLelyetia",
            quantity: 10,
            metadata: 1,
            imageUrl: "/textures/items/lelyetiaGems.png",
          },
          output: {
            item: "Swarm-O-Tron Totem",
            itemId: "Totemizer.TotemSwarmotron",
            quantity: 1,
            imageUrl: "/textures/items/totemSwarmotron.png",
          },
        },
        {
          input: {
            item: "Lelyetia Gems",
            itemId: "Itemizer.CoinsLelyetia",
            quantity: 10,
            metadata: 1,
            imageUrl: "/textures/items/lelyetiaGems.png",
          },
          output: {
            item: "Royal Greatblade Totem",
            itemId: "Totemizer.TotemRoyalGreatblade",
            quantity: 1,
            imageUrl: "/textures/items/totemRoyalGreatblade.png",
          },
        },
        {
          input: {
            item: "Lelyetia Gems",
            itemId: "Itemizer.CoinsLelyetia",
            quantity: 40,
            metadata: 1,
            imageUrl: "/textures/items/lelyetiaGems.png",
          },
          output: {
            item: "Swarm-O-Tron Totem",
            itemId: "Totemizer.TotemSwarmotron",
            quantity: 10,
            imageUrl: "/textures/items/totemSwarmotron.png",
          },
          additionalInput: {
            item: "Lelyetia Gems",
            itemId: "Itemizer.CoinsLelyetia",
            quantity: 35,
            imageUrl: "/textures/items/lelyetiaGems.png",
          },
        },
        {
          input: {
            item: "Lelyetia Gems",
            itemId: "Itemizer.CoinsLelyetia",
            quantity: 40,
            metadata: 1,
            imageUrl: "/textures/items/lelyetiaGems.png",
          },
          output: {
            item: "Royal Greatblade Totem",
            itemId: "Totemizer.TotemRoyalGreatblade",
            quantity: 10,
            imageUrl: "/textures/items/totemRoyalGreatblade.png",
          },
          additionalInput: {
            item: "Lelyetia Gems",
            itemId: "Itemizer.CoinsLelyetia",
            quantity: 35,
            imageUrl: "/textures/items/lelyetiaGems.png",
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
      imageUrl: "/textures/mobs/lottomanLelyetia.png",
      model: "/models/npc/lelyetian-npc/lelyetian-npc.gltf",
    },
    {
      entity: "EntityLoggingMaster",
      displayName: "LoggingMaster",
      weight: 1,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Lelyetia",
          imageUrl: "/dimensions/lelyetia_images/Lelyetia.png",
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
            item: "Logging Boots",
            itemId: "Armorizer.LoggingBoots",
            quantity: 1,
            imageUrl: "/textures/items/bootsLogging.png",
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
            item: "Logging Leggings",
            itemId: "Armorizer.LoggingLeggings",
            quantity: 1,
            imageUrl: "/dimensions/common_images/Logging_Leggings.png",
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
            item: "Logging Chestplate",
            itemId: "Armorizer.LoggingChestplate",
            quantity: 1,
            imageUrl: "/textures/items/chestplateLogging.png",
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
            item: "Logging Helmet",
            itemId: "Armorizer.LoggingHelmet",
            quantity: 1,
            imageUrl: "/textures/items/helmetLogging.png",
          },
        },
      ],
      imageUrl: "",
      model: "",
    },
  ],
  generatedOres: [],
  generatedStructures: [
    {
      className: "LelyetianTowerP1",
      name: "Lelyetian Tower",
      context: "StructureGenRare #22",
      chance: {
        description: "1 em 760",
        formula: "pick == 330 (random.nextInt(760))",
        denominator: 760,
        comparator: "==",
        value: 330,
      },
      biome: null,
      imageUrl: "",
    },
    {
      className: "LelyetianTowerP2",
      name: "Lelyetian Tower",
      context: "StructureGenRare #22",
      chance: {
        description: "1 em 760",
        formula: "pick == 330 (random.nextInt(760))",
        denominator: 760,
        comparator: "==",
        value: 330,
      },
      biome: null,
      imageUrl: "",
    },
    {
      className: "ZhinxEnclave",
      name: "Zhinx Enclave",
      context: "StructureGenRare #23",
      chance: {
        description: "1 em 760",
        formula: "pick == 702 (random.nextInt(760))",
        denominator: 760,
        comparator: "==",
        value: 702,
      },
      biome: null,
      imageUrl: "/dimensions/lelyetia_images/Zhinx_Enclave_Inside.png",
    },
    {
      className: "ParaviteHive",
      name: "Paravite Hive",
      context: "StructureGenRare #24",
      chance: {
        description: "1 em 760",
        formula: "pick == 206 (random.nextInt(760))",
        denominator: 760,
        comparator: "==",
        value: 206,
      },
      biome: null,
      imageUrl: "/textures/blocks/paraviteHive.png",
    },
    {
      className: "BoneyDungeon",
      name: "Boney Dungeon",
      context: "StructureGenRare #25",
      chance: {
        description: "1 em 760",
        formula: "pick == 555 (random.nextInt(760))",
        denominator: 760,
        comparator: "==",
        value: 555,
      },
      biome: null,
      imageUrl: "/dimensions/lelyetia_images/Boney_Dungeon_(Underside).png",
    },
  ],
  resources: [
    {
      name: "Lelyetian Stone",
      type: "Minério/Bloco de construção",
      usage:
        "Bloco base de terreno da dimensão, usado para mineração e construção temática; extraído para upgrade inicial de equipamentos e blocos. ",
      imageUrl: "/dimensions/lelyetia_images/Lelyetian_Stone.png",
    },
    {
      name: "Churry Log / Achony Log",
      type: "Bloco de madeira",
      usage:
        "Madeiras únicas da dimensão, usadas para construções temáticas, mobílias e decorações que reforçam o visual laranja-florestal. ",
      imageUrl: "/dimensions/shyrelands_images/Churry_Log.png",
    },
  ],
  bosses: [
    {
      name: "Graw",
      howToSpawn:
        "Use um Guardian’s Eye no Graw Altar em uma Graw Pillar estrutura para invocar Graw. ",
      notes:
        "Boss de Lelyetia que testa mobilidade e combate vertical; derrotá-lo dá acesso a conteúdos de tier 1 mais avançados.",
      imageUrl: "/dimensions/lelyetia_images/Graw.png",
      spawnItems: [
        {
          itemId: "Itemizer.GuardiansEye",
          item: "Guardian's Eye",
          usage: "Use o Guardian's Eye no Graw Altar no topo dos Graw Pillars.",
          imageUrl: "/textures/items/guardiansEye.png",
        },
      ],
      entities: [
        {
          entity: "EntityGraw",
          displayName: "Graw",
          imageUrl: "/textures/mobs/graw.png",
          model: "/models/boss/graw/graw/graw.gltf",
          health: 2500,
        },
      ],
      loot: [
        {
          item: "Wrecker",
          itemId: "Weaponizer.Wrecker",
          minQuantity: 1,
          maxQuantity: 1,
          chance: 1,
          sourceEntities: ["EntityGraw"],
          imageUrl: "/textures/items/wrecker.png",
        },
        {
          item: "Chili Chugger",
          itemId: "Weaponizer.ChiliChugger",
          minQuantity: 1,
          maxQuantity: 1,
          chance: 1,
          sourceEntities: ["EntityGraw"],
          imageUrl: "/textures/items/chiliChugger.png",
        },
        {
          item: "Firefly Staff",
          itemId: "Weaponizer.FireflyStaff",
          minQuantity: 1,
          maxQuantity: 1,
          chance: 1,
          sourceEntities: ["EntityGraw"],
          imageUrl: "/textures/items/fireflyStaff.png",
        },
        {
          item: "Pulse Cannon",
          itemId: "Weaponizer.PulseCannon",
          minQuantity: 1,
          maxQuantity: 1,
          chance: 1,
          sourceEntities: ["EntityGraw"],
          imageUrl: "/textures/items/pulseCannon.png",
        },
      ],
    },
  ],
  biomes: [
    {
      name: "Lelyetia",
      id: 89,
      imageUrl: "/nvm2_data/img_data/Lelyetia/biomes/Lelyetia.png",
    },
  ],
  structures: [
    {
      name: "Boney Dungeon",
      imageUrl: "/nvm2_data/img_data/Lelyetia/structures/Boney_Dungeon.png",
    },
    {
      name: "Graw Pillar",
      imageUrl: "/nvm2_data/img_data/Lelyetia/structures/Graw.png",
    },
    {
      name: "Lelyetian Tower",
      imageUrl: "/nvm2_data/img_data/Lelyetia/structures/Lelyetia.png",
    },
    {
      name: "Paravite Hive",
      imageUrl:
        "/dimensions/common_images/Paravite_Hive_(structure).png",
    },
    {
      name: "Zhinx Enclave",
      imageUrl: "/nvm2_data/img_data/Lelyetia/structures/Zhinx_Enclave.png",
    },
  ],
};
