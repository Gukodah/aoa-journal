export const Creeponia = {
  id: "creeponia",
  name: "Creeponia",
  tier: 1,
  prerequisiteDimension: "Overworld",
  theme:
    "Floresta densa infestada por creepers e variantes explosivas, com atmosfera esverdeada e hostil.",
  shortDescription:
    "Dimensão de árvores escuras, terreno verde ácido e grande quantidade de mobs explosivos, com bancos, stands e construções ligadas a creepers.",
  realmstone: {
    obtainHint:
      "Sobreviva a uma explosão de creeper com um TNT primado muito próximo enquanto carrega um Blank Realmstone.",
    obtainDetails:
      "Com um Blank Realmstone no inventário, posicione um creeper e um TNT primado próximos um do outro. Sobreviva à explosão do creeper ocorrendo antes da explosão do TNT para converter o Blank Realmstone em Creeponia Realmstone.",
    imageUrl: "/dimensions/creeponia_images/Creeponia_Realmstone.png",
  },
  imageUrl: "/dimensions/biomes/creeponia.png",
  wikiUrl: "https://adventofascension.fandom.com/wiki/Creeponia",
  mainObjectives: [
    {
      id: "unlock_dimension",
      title: "Desbloquear Creeponia",
      description:
        "Executar a tarefa de sobreviver à explosão de um creeper com TNT próxima, carregando um Blank Realmstone, e ativar o portal com a Creeponia Realmstone.",
    },
    {
      id: "adapt_to_explosions",
      title: "Adaptar-se ao ambiente explosivo",
      description:
        "Aprender a lidar com grandes quantidades de mobs explosivos, criando estratégias de esquiva, escudos e barreiras.",
    },
    {
      id: "explore_banks_and_stands",
      title: "Explorar Creeponia Banks e Lotto Stands",
      description:
        "Visitar estruturas como Creeponia Banks e stands de loteria para interagir com NPCs, negociar e obter recompensas.",
    },
    {
      id: "prepare_for_voxponds_and_mysterium",
      title: "Preparar acesso a Vox Ponds e Mysterium",
      description:
        "Usar Creeponia como base para obter recursos, tokens e equipamentos necessários para acessar Vox Ponds e Mysterium.",
    },
  ],
  mainObjectivesImages: [
    "https://adventofascension.fandom.com/wiki/Creeponia_Realmstone",
    "https://adventofascension.fandom.com/wiki/File:Creeponia.png",
    "https://adventofascension.fandom.com/wiki/Creeponia_Bank",
    "https://adventofascension.fandom.com/wiki/Vox_Ponds",
  ],
  secondaryObjectives: [
    "Completar o bestiário de Creeponia, enfrentando todas as variantes de creepers e mobs voadores como Creepird.",
    "Coletar blocos e plantas esverdeadas para builds temáticas de pólvora e explosão.",
    "Experimentar diferentes armaduras e encantamentos de resistência a explosões, testando quais funcionam melhor contra o ambiente da dimensão.",
    "Utilizar Creeponia como campo de treino para reflexos e controle de multidões, cronometrando ondas de mobs.",
  ],
  secondaryObjectivesImages: [
    "https://adventofascension.fandom.com/wiki/Category:Creeponia_mobs",
    "https://adventofascension.fandom.com/wiki/Category:Creeponia#Blocks",
    "https://minecraft.fandom.com/wiki/Blast_Protection",
    "https://adventofascension.fandom.com/wiki/Advancements",
  ],
  progressionNotes: [
    {
      id: "progress_note_1",
      title: "Creeponia é um mundo de tier 1",
      description:
        "Creeponia é um mundo de tier 1 acessível cedo, mas extremamente perigoso devido à densidade de explosões.",
    },
    {
      id: "progress_note_2",
      title: "Daqui o jogador pode seguir para Vox Ponds e Mysterium",
      description:
        "Daqui o jogador pode seguir para Vox Ponds e Mysterium, encaixando Creeponia como passo importante na rota de dimensões tóxicas e mágicas.",
    },
    {
      id: "progress_note_3",
      title: "A experiência de combate em Creeponia",
      description:
        "A experiência de combate em Creeponia refina reflexos e builds de resistência a dano em área, úteis em outros bosses do mod.",
    },
  ],
  progressionImages: [
    "https://adventofascension.fandom.com/wiki/File:Creeponia.png",
    "https://adventofascension.fandom.com/wiki/Vox_Ponds",
    "https://adventofascension.fandom.com/wiki/Mysterium",
  ],
  versionNotes:
    "Na Tslat 1.1.3 Creeponia já é descrita como floresta de creepers com acesso por tarefa de explosão com TNT e ligação para Vox Ponds/Mysterium. Posições de estruturas e detalhes de loot de C.R.E.E.P podem variar em versões posteriores.",
  mobs: [
    {
      entity: "EntityWingedCreeper",
      weight: 40,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Creeponia",
          imageUrl: "/dimensions/biomes/creeponia.png",
        },
      ],
      loot: [
        {
          item: "Creeponia Gems",
          itemId: "Itemizer.CoinsCreeponia",
          quantity: 3,
          chance: 1,
          imageUrl: "/textures/items/creeponiaGems.png",
        },
        {
          item: "Creepy Banner",
          itemId: "SpecialBlockizer.CreepyBanner",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/banner/creepyBanner.png",
        },
      ],
      imageUrl: "/textures/mobs/wingedCreeper.png",
      model: "/models/creeponia/winged-creeper/winged-creeper.gltf",
      health: 45,
    },
    {
      entity: "EntityBoneCreeper",
      weight: 40,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Creeponia",
          imageUrl: "/dimensions/biomes/creeponia.png",
        },
      ],
      loot: [
        {
          item: "Creeponia Gems",
          itemId: "Itemizer.CoinsCreeponia",
          quantity: 3,
          chance: 1,
          imageUrl: "/textures/items/creeponiaGems.png",
        },
        {
          item: "Creepoid Banner",
          itemId: "SpecialBlockizer.CreepoidBanner",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/banner/creepoidBanner.png",
        },
      ],
      imageUrl: "/textures/mobs/boneCreeper.png",
      model: "/models/creeponia/bone-creeper/bone-creeper.gltf",
      health: 40,
    },
    {
      entity: "EntityCaveCreepoid",
      weight: 40,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Creeponia",
          imageUrl: "/dimensions/biomes/creeponia.png",
        },
      ],
      loot: [
        {
          item: "Creeponia Gems",
          itemId: "Itemizer.CoinsCreeponia",
          quantity: 3,
          chance: 1,
          imageUrl: "/textures/items/creeponiaGems.png",
        },
        {
          item: "Creepoid Banner",
          itemId: "SpecialBlockizer.CreepoidBanner",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/banner/creepoidBanner.png",
        },
      ],
      imageUrl: "/textures/mobs/caveCreepoid.png",
      model: "/models/creeponia/cave-creepoid/cave-creepoid.gltf",
      health: 50,
    },
    {
      entity: "EntityCreepCow",
      weight: 5,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Creeponia",
          imageUrl: "/dimensions/biomes/creeponia.png",
        },
      ],
      loot: [
        {
          item: "Halycon Beef",
          itemId: "Itemizer.HalyconBeef",
          quantity: 2,
          chance: 1,
          imageUrl: "/dimensions/dustopia_images/Halycon_Beef.png",
        },
        {
          item: "Raw Halycon Beef",
          itemId: "Itemizer.HalyconBeefRaw",
          quantity: 2,
          chance: 1,
          imageUrl: "/textures/items/halyconBeefRaw.png",
        },
      ],
      imageUrl: "/textures/mobs/creepCow.png",
      model: "/models/creeponia/creep-cow/creep-cow.gltf",
      health: 20,
    },
    {
      entity: "EntityCreeperlock",
      weight: 40,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Creeponia",
          imageUrl: "/dimensions/biomes/creeponia.png",
        },
      ],
      loot: [
        {
          item: "Creeponia Gems",
          itemId: "Itemizer.CoinsCreeponia",
          quantity: 3,
          chance: 1,
          imageUrl: "/textures/items/creeponiaGems.png",
        },
        {
          item: "Creepy Banner",
          itemId: "SpecialBlockizer.CreepyBanner",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/banner/creepyBanner.png",
        },
      ],
      imageUrl: "/textures/mobs/creeperlock.png",
      model: "/models/creeponia/creeperlock/creeperlock.gltf",
      health: 80,
    },
    {
      entity: "EntityCreepird",
      weight: 40,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Creeponia",
          imageUrl: "/dimensions/biomes/creeponia.png",
        },
      ],
      loot: [
        {
          item: "Creeponia Gems",
          itemId: "Itemizer.CoinsCreeponia",
          quantity: 3,
          chance: 1,
          imageUrl: "/textures/items/creeponiaGems.png",
        },
      ],
      imageUrl: "/textures/mobs/creepird.png",
      model: "/models/creeponia/creepird/creepird.gltf",
      health: 40,
    },
    {
      entity: "EntityKingCreeper",
      weight: 1,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Creeponia",
          imageUrl: "/dimensions/biomes/creeponia.png",
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
      ],
      imageUrl: "/textures/mobs/kingCreeper.png",
      model: "/models/creeponia/king-creeper/king-creeper.gltf",
      health: 500,
    },
    {
      entity: "EntityMagicalCreeper",
      weight: 40,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Creeponia",
          imageUrl: "/dimensions/biomes/creeponia.png",
        },
      ],
      loot: [
        {
          item: "Creeponia Gems",
          itemId: "Itemizer.CoinsCreeponia",
          quantity: 3,
          chance: 1,
          imageUrl: "/textures/items/creeponiaGems.png",
        },
        {
          item: "Creepy Banner",
          itemId: "SpecialBlockizer.CreepyBanner",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/banner/creepyBanner.png",
        },
      ],
      imageUrl: "/textures/mobs/magicalCreeper.png",
      model: "/models/creeponia/magical-creeper/magical-creeper.gltf",
      health: 50,
    },
    {
      entity: "EntityCreepuple",
      weight: 40,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Creeponia",
          imageUrl: "/dimensions/biomes/creeponia.png",
        },
      ],
      loot: [],
      imageUrl: "/textures/mobs/creepuple.png",
      model: "/models/creeponia/creepuple/creepuple.gltf",
      health: 50,
    },
  ],
  npcs: [
    {
      entity: "EntityExplosivesExpert",
      notes:
        "Explosives Expert residentes nas Explosives Towers de Creeponia, vendendo granadas, cápsulas de descarga e TNT.",
      structure: "Explosives Tower",
      displayName: "ExplosivesExpert",
      registeredBiomes: [],
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
            item: "Grenade",
            itemId: "Weaponizer.Grenade",
            quantity: 8,
            imageUrl: "/dimensions/dustopia_images/Grenade.png",
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
            item: "Discharge Capsule",
            itemId: "Itemizer.DischargeCapsule",
            quantity: 8,
            imageUrl: "/textures/items/dischargeCapsule.png",
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
            item: "Blocks.tnt",
            itemId: "Blocks.tnt",
            quantity: 8,
          },
        },
      ],
      imageUrl: "/textures/mobs/explosivesExpert.png",
      model: "/models/npc/store-keeper/store-keeper.gltf",
    },
    {
      entity: "EntityCreepBanker",
      notes: "Gerado automaticamente por estruturas da dimensão.",
      displayName: "CreepBanker",
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
      imageUrl: "/textures/mobs/creepBanker.png",
      model: "/models/npc/store-keeper/store-keeper.gltf",
    },
    {
      entity: "EntityLottomanCreeponia",
      notes: "Gerado automaticamente por estruturas da dimensão.",
      displayName: "LottomanCreeponia",
      registeredBiomes: [],
      loot: [],
      trades: [
        {
          input: {
            item: "Creeponia Gems",
            itemId: "Itemizer.CoinsCreeponia",
            quantity: 10,
            metadata: 1,
            imageUrl: "/textures/items/creeponiaGems.png",
          },
          output: {
            item: "Creepoid Greatblade Totem",
            itemId: "Totemizer.TotemCreepoidGreatblade",
            quantity: 1,
            imageUrl: "/textures/items/totemCreepoidGreatblade.png",
          },
        },
        {
          input: {
            item: "Creeponia Gems",
            itemId: "Itemizer.CoinsCreeponia",
            quantity: 10,
            metadata: 1,
            imageUrl: "/textures/items/creeponiaGems.png",
          },
          output: {
            item: "Boom-Boom Totem",
            itemId: "Totemizer.TotemBoomBoom",
            quantity: 1,
            imageUrl: "/textures/items/totemBoomBoom.png",
          },
        },
        {
          input: {
            item: "Creeponia Gems",
            itemId: "Itemizer.CoinsCreeponia",
            quantity: 40,
            metadata: 1,
            imageUrl: "/textures/items/creeponiaGems.png",
          },
          output: {
            item: "Creepoid Greatblade Totem",
            itemId: "Totemizer.TotemCreepoidGreatblade",
            quantity: 10,
            imageUrl: "/textures/items/totemCreepoidGreatblade.png",
          },
          additionalInput: {
            item: "Creeponia Gems",
            itemId: "Itemizer.CoinsCreeponia",
            quantity: 35,
            imageUrl: "/textures/items/creeponiaGems.png",
          },
        },
        {
          input: {
            item: "Creeponia Gems",
            itemId: "Itemizer.CoinsCreeponia",
            quantity: 40,
            metadata: 1,
            imageUrl: "/textures/items/creeponiaGems.png",
          },
          output: {
            item: "Boom-Boom Totem",
            itemId: "Totemizer.TotemBoomBoom",
            quantity: 10,
            imageUrl: "/textures/items/totemBoomBoom.png",
          },
          additionalInput: {
            item: "Creeponia Gems",
            itemId: "Itemizer.CoinsCreeponia",
            quantity: 35,
            imageUrl: "/textures/items/creeponiaGems.png",
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
      imageUrl: "/textures/mobs/lottomanCreeponia.png",
      model: "/models/npc/lottoman/lottoman.gltf",
    },
  ],
  generatedOres: [
    {
      field: "Blockizer.oreOrnamyte",
      displayName: "Ore Ornamyte",
      veinSize: 4,
      attemptsPerChunk: 2,
      replaces: "Blockizer.PrimedStone",
      height: {
        min: 0,
        max: 11,
      },
      imageUrl: "/ores/ornamyte_ore.png",
    },
    {
      field: "Blockizer.oreGemenyte",
      displayName: "Ore Gemenyte",
      veinSize: 4,
      attemptsPerChunk: 2,
      replaces: "Blockizer.UnstableStone",
      height: {
        min: 0,
        max: 14,
      },
      imageUrl: "/ores/gemenyte_ore.png",
    },
    {
      field: "Blockizer.oreJewelyte",
      displayName: "Ore Jewelyte",
      veinSize: 4,
      attemptsPerChunk: 2,
      replaces: "Blockizer.UnstableStone",
      height: {
        min: 0,
        max: 14,
      },
      imageUrl: "/ores/jewelyte_ore.png",
    },
  ],
  generatedStructures: [
    {
      className: "CreeponiaLottoStructure",
      name: "Creeponia Lotto Structure",
      context: "ChunkProviderCreeponia.java",
      chance: null,
      biome: null,
      imageUrl: "",
    },
    {
      className: "CreeperHQ",
      name: "Creeper",
      context: "ChunkProviderCreeponia.java",
      chance: null,
      biome: null,
      imageUrl: "/dimensions/creeponia_images/Creeper_HQ.png",
    },
    {
      className: "ExplosivesTower",
      name: "Explosives Tower",
      context: "ChunkProviderCreeponia.java",
      chance: null,
      biome: null,
      imageUrl: "/dimensions/common_images/Explosives_Tower.png",
    },
    {
      className: "CreeponiaBanker",
      name: "Creeponia Banker",
      context: "ChunkProviderCreeponia.java",
      chance: null,
      biome: null,
      imageUrl: "",
    },
  ],
  resources: [
    {
      name: "Creeponian Bricks",
      type: "Blocos de construção",
      usage:
        "Comuns em bancos e estruturas da dimensão, ideais para bases temáticas de moeda/negócio.",
      imageUrl: "/dimensions/creeponia_images/Creeponia_Bricks.png",
    },
    {
      name: "Explosive Gems",
      type: "Item de invocação",
      usage:
        "Usados para invocar o boss C.R.E.E.P ao serem colocados em um Creep Altar.",
      imageUrl: "/dimensions/dustopia_images/Explosive_Gem.png",
    },
  ],
  bosses: [
    {
      name: "C.R.E.E.P",
      howToSpawn:
        "Invocado ao usar Explosive Gems em um Creep Altar dentro de Creeponia, iniciando uma sequência de explosões na arena antes do spawn do boss.",
      notes:
        "Boss explosivo de médio/alto nível, dispara projéteis que criam explosões contínuas, sendo um grande teste de mobilidade e resistência a explosão.",
      imageUrl: "https://adventofascension.fandom.com/wiki/C.R.E.E.P",
      spawnItems: [
        {
          itemId: "Itemizer.ExplosiveGem",
          item: "Explosive Gem",
          usage:
            "Ofereça a Explosive Gem em um Creep Altar para chamar o C.R.E.E.P.",
          imageUrl: "/textures/items/explosiveGem.png",
        },
      ],
      entities: [
        {
          entity: "EntityCreep",
          displayName: "Creep",
          imageUrl: "/textures/mobs/creep.png",
          model: "/models/boss/creep/creep/creep.gltf",
          health: 3000,
        },
      ],
      loot: [
        {
          item: "Discharge Shotgun",
          itemId: "Weaponizer.DischargeShotgun",
          minQuantity: 1,
          maxQuantity: 1,
          chance: 1,
          sourceEntities: ["EntityCreep"],
          imageUrl: "/textures/items/dischargeShotgun.png",
        },
        {
          item: "Missile Maker",
          itemId: "Weaponizer.MissileMaker",
          minQuantity: 1,
          maxQuantity: 1,
          chance: 1,
          sourceEntities: ["EntityCreep"],
          imageUrl: "/textures/items/missileMaker.png",
        },
        {
          item: "Concussion Staff",
          itemId: "Weaponizer.ConcussionStaff",
          minQuantity: 1,
          maxQuantity: 1,
          chance: 1,
          sourceEntities: ["EntityCreep"],
          imageUrl: "/textures/items/concussionStaff.png",
        },
        {
          item: "Creepified Sword",
          itemId: "Weaponizer.CreepifiedSword",
          minQuantity: 1,
          maxQuantity: 1,
          chance: 1,
          sourceEntities: ["EntityCreep"],
          imageUrl: "/dimensions/creeponia_images/Creepified_Sword.png",
        },
      ],
    },
  ],
  biomes: [
    {
      name: "Creeponia",
      id: 94,
      imageUrl: "/nvm2_data/img_data/Creeponia/biomes/Creeponia.png",
    },
  ],
  structures: [
    {
      name: "Creeper HQ",
      imageUrl: "/nvm2_data/img_data/Creeponia/structures/Creeper_HQ.png",
    },
    {
      name: "Creeponia Bank",
      imageUrl: "/nvm2_data/img_data/Creeponia/structures/Creeponia_Bank.png",
    },
    {
      name: "Creeponian Lotto Stand",
      imageUrl:
        "/nvm2_data/img_data/Creeponia/structures/Creeponian_Lotto_Stand.png",
    },
    {
      name: "Explosives Tower",
      imageUrl: "/nvm2_data/img_data/Creeponia/structures/Explosives_Tower.png",
    },
  ],
};
