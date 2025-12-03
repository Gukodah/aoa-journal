export const Immortalis = {
  id: "immortallis",
  name: "Immortallis",
  tier: 3,
  prerequisiteDimension: "Crystevia",
  theme:
    "Arena flutuante sobre o vazio com desafios de combate, coleta e invocação, dedicada aos deuses Erebon e Pluton.",
  shortDescription:
    "Uma dimensão tipo dungeon/arena formada por várias salas acima do vazio, onde o jogador enfrenta desafios em sequência, coleta ouro e vitória em contagens, sem possibilidade de minerar ou colocar blocos.",
  realmstone: {
    obtainHint:
      "Sobreviva a um ataque de um Construct of Strength com o efeito Strength enquanto carrega um Blank Realmstone.",
    obtainDetails:
      "Dentro da dimensão Crystevia, com um Blank Realmstone no inventário, enfrente um Construct of Strength que tenha o efeito de Strength; ao sobreviver ao ataque, o Blank Realmstone se transforma em Immortallis Realmstone, que então abre o portal para a dimensão.",
    imageUrl: "/dimensions/immortallis_images/Immortallis_Realmstone.png",
  },
  imageUrl: "/dimensions/biomes/immortallis.png",
  wikiUrl:
    "https://adventofascension.fandom.com/wiki/Removed_features/Immortallis",
  mainObjectives: [
    {
      id: "unlock_immortallis",
      title: "Desbloquear Immortallis",
      description:
        "Obtenha a Immortallis Realmstone conforme condição (Blank Realmstone + Construct of Strength + efeito Strength) e ative o portal para acessar a dimensão.",
      imageUrl: "/dimensions/immortallis_images/Immortallis_Realmstone.png",
    },
    {
      id: "complete_room_challenges",
      title: "Completar desafios das salas",
      description:
        "Passar por cada sala da arena: coletar Impure Gold dos Goldums, derrotar klobber, eliminar 25 skeletal spirits, enfrentar Proshield, coletar Pure Gold, derrotar Mirage, eliminar 25 evil spirits e finalmente enfrentar Flash.",
      imageUrl: "/dimensions/immortallis_images/Goldum.png",
    },
    {
      id: "defeat_final_boss",
      title: "Derrotar Flash",
      description:
        "Na sala final da arena flutuante, enfrente o boss Flash; derrotá-lo completa o desafio da dimensão.",
      imageUrl: "/dimensions/immortallis_images/Flash.png",
    },
  ],
  secondaryObjectives: [
    {
      id: "explore_structure",
      title: "Explorar a arena flutuante",
      description:
        "Visitar salas distintas conectadas por arcos e plataformas acima do void, analisar a arquitetura da dimensão — não é possível quebrar ou colocar blocos.",
      imageUrl: "/dimensions/biomes/immortallis.png",
    },
    {
      id: "collect_gold_tokens",
      title: "Colecionar ouro impuro e puro",
      description:
        "Nas salas 2 e 6 você deve coletar Impure Gold e posteriormente Pure Gold depositando-os nos acumuladores Gold Accumulator para avançar.",
      imageUrl: "/dimensions/common_images/Gold_Accumulator.png",
    },
  ],
  progressionNotes: [
    {
      id: "series_of_challenges",
      title: "Série de desafios em salas temáticas",
      description:
        "Immortallis consiste em múltiplas salas conectadas, cada uma com um desafio distinto: coleta, combate em massa, escuridão, plataformas e boss final; o jogador consome tokens de progresso no Progressor entre elas.",
      imageUrl: "/dimensions/immortallis_images/Immortallis_Progressor.png",
    },
    {
      id: "removal_note",
      title: "Removida em versões posteriores",
      description:
        "A dimensão foi removida pelo desenvolvedor porque existiam múltiplas dimensões de estrutura (como Ancient Cavern e Immortallis) e isso gerava sobreposição; ela desapareceu a partir da versão 2.4+.",
      imageUrl: "/dimensions/common_images/Nowhere.png",
    },
  ],
  versionNotes:
    "Registrada como dimensao ‘Removed Features’ na wiki oficial, mencionada na versão 2.4. Se você está usando a versão Nevermine 2 Tslat 1.1.3 (Minecraft 1.7.10), verifique se essa dimensão está presente — dependendo da build pode já estar removida ou em estado “beta”. Os nomes de salas, tokens e mecânicas podem diferir ligeiramente.",
  mobs: [
    {
      entity: "EntityFenix",
      imageUrl: "/textures/mobs/fenix.png",
      model: "/models/immortallis/fenix/fenix.gltf",
      health: 1,
      weight: 20,
      min: 1,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Immortalis",
          imageUrl: "/dimensions/biomes/immortallis.png",
        },
      ],
    },
    {
      entity: "EntityGhastus",
      imageUrl: "/textures/mobs/ghastus.png",
      model: "/models/immortallis/ghastus/ghastus.gltf",
      health: 1,
      weight: 20,
      min: 1,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Immortalis",
          imageUrl: "/dimensions/biomes/immortallis.png",
        },
      ],
    },
    {
      entity: "EntityGoldCreature",
      imageUrl: "/textures/mobs/goldcreature.png",
      model: "/models/immortallis/gold-creature/gold-creature.gltf",
    },
    {
      entity: "EntityGoldum",
      imageUrl: "/textures/mobs/goldum.png",
      model: "/models/immortallis/goldum/goldum.gltf",
      health: 1,
      weight: 20,
      min: 1,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Immortalis",
          imageUrl: "/dimensions/biomes/immortallis.png",
        },
      ],
    },
    {
      entity: "EntityGoldus",
      imageUrl: "/textures/mobs/goldus.png",
      model: "/models/immortallis/goldus/goldus.gltf",
      health: 1,
      weight: 20,
      min: 1,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Immortalis",
          imageUrl: "/dimensions/biomes/immortallis.png",
        },
      ],
    },
    {
      entity: "EntityReaver",
      imageUrl: "/textures/mobs/reaver.png",
      model: "/models/immortallis/reaver/reaver.gltf",
      health: 50,
      weight: 20,
      min: 1,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Immortalis",
          imageUrl: "/dimensions/biomes/immortallis.png",
        },
      ],
    },
    {
      entity: "EntityShavo",
      imageUrl: "/textures/mobs/shavo.png",
      model: "/models/immortallis/shavo/shavo.gltf",
      health: 200,
      weight: 20,
      min: 1,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Immortalis",
          imageUrl: "/dimensions/biomes/immortallis.png",
        },
      ],
    },
    {
      entity: "EntitySkeledon",
      imageUrl: "/textures/mobs/skeledon.png",
      model: "/models/immortallis/skeledon/skeledon.gltf",
      health: 120,
      weight: 20,
      min: 1,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Immortalis",
          imageUrl: "/dimensions/biomes/immortallis.png",
        },
      ],
    },
    {
      entity: "EntitySkelekyte",
      imageUrl: "/textures/mobs/skelekyte.png",
      model: "/models/immortallis/skelekyte/skelekyte.gltf",
      health: 115,
      weight: 20,
      min: 1,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Immortalis",
          imageUrl: "/dimensions/biomes/immortallis.png",
        },
      ],
    },
    {
      entity: "EntityUrioh",
      imageUrl: "/textures/mobs/urioh.png",
      model: "/models/immortallis/urioh/urioh.gltf",
      health: 75,
      weight: 20,
      min: 1,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Immortalis",
          imageUrl: "/dimensions/biomes/immortallis.png",
        },
      ],
    },
    {
      entity: "EntityUrv",
      imageUrl: "/textures/mobs/urv.png",
      model: "/models/immortallis/urv/urv.gltf",
      health: 75,
      weight: 20,
      min: 1,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Immortalis",
          imageUrl: "/dimensions/biomes/immortallis.png",
        },
      ],
    },
    {
      entity: "EntityVisage",
      imageUrl: "/textures/mobs/visage.png",
      model: "/models/immortallis/visage/visage.gltf",
      health: 40,
      weight: 20,
      min: 1,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Immortalis",
          imageUrl: "/dimensions/biomes/immortallis.png",
        },
      ],
    },
  ],
  npcs: [
    {
      entity: "EntityDungeonKeeper",
      notes: "Gerado automaticamente por estruturas da dimensão.",
      displayName: "DungeonKeeper",
      registeredBiomes: [],
      loot: [],
      trades: [
        {
          input: {
            item: "Gold Coin",
            itemId: "Itemizer.GoldCoin",
            quantity: 10,
            metadata: 1,
            imageUrl: "/textures/items/coinGold.png",
          },
          output: {
            item: "Starting Coin",
            itemId: "Itemizer.StartingCoin",
            quantity: 1,
            imageUrl: "/dimensions/common_images/Starting_Coin.png",
          },
        },
        {
          input: {
            item: "Gold Coin",
            itemId: "Itemizer.GoldCoin",
            quantity: 2,
            metadata: 1,
            imageUrl: "/textures/items/coinGold.png",
          },
          output: {
            item: "Vulcane",
            itemId: "Weaponizer.Vulcane",
            quantity: 1,
            imageUrl: "/textures/items/vulcane.png",
          },
        },
      ],
      imageUrl: "/textures/mobs/dungeonKeeper.png",
      model: "/models/npc/store-keeper/store-keeper.gltf",
    },
    {
      entity: "EntityTokenCollector",
      notes: "Gerado automaticamente por estruturas da dimensão.",
      displayName: "TokenCollector",
      registeredBiomes: [],
      loot: [],
      trades: [
        {
          input: {
            item: "Dungeon Tokens",
            itemId: "Itemizer.DungeonTokens",
            quantity: 3,
            metadata: 1,
            imageUrl: "/textures/items/dungeonTokens.png",
          },
          output: {
            item: "Augment: Fire",
            itemId: "Itemizer.AugmentFire",
            quantity: 1,
            imageUrl: "/textures/items/augmentFire.png",
          },
        },
        {
          input: {
            item: "Dungeon Tokens",
            itemId: "Itemizer.DungeonTokens",
            quantity: 6,
            metadata: 1,
            imageUrl: "/textures/items/dungeonTokens.png",
          },
          output: {
            item: "Augment: Impairment",
            itemId: "Itemizer.AugmentImpairment",
            quantity: 1,
            imageUrl: "/textures/items/augmentImpairment.png",
          },
        },
        {
          input: {
            item: "Dungeon Tokens",
            itemId: "Itemizer.DungeonTokens",
            quantity: 10,
            metadata: 1,
            imageUrl: "/textures/items/dungeonTokens.png",
          },
          output: {
            item: "Augment: Poison",
            itemId: "Itemizer.AugmentPoison",
            quantity: 1,
            imageUrl: "/textures/items/augmentPoison.png",
          },
        },
        {
          input: {
            item: "Dungeon Tokens",
            itemId: "Itemizer.DungeonTokens",
            quantity: 14,
            metadata: 1,
            imageUrl: "/textures/items/dungeonTokens.png",
          },
          output: {
            item: "Augment: Power",
            itemId: "Itemizer.AugmentPower",
            quantity: 1,
            imageUrl: "/textures/items/augmentPower.png",
          },
        },
        {
          input: {
            item: "Dungeon Tokens",
            itemId: "Itemizer.DungeonTokens",
            quantity: 20,
            metadata: 1,
            imageUrl: "/textures/items/dungeonTokens.png",
          },
          output: {
            item: "Augment: Wither",
            itemId: "Itemizer.AugmentWither",
            quantity: 1,
            imageUrl: "/dimensions/dustopia_images/Vulcane_Augment_Wither.png",
          },
        },
        {
          input: {
            item: "Dungeon Tokens",
            itemId: "Itemizer.DungeonTokens",
            quantity: 30,
            metadata: 1,
            imageUrl: "/textures/items/dungeonTokens.png",
          },
          output: {
            item: "Augment: Equality",
            itemId: "Itemizer.AugmentEquality",
            quantity: 1,
            imageUrl: "/textures/items/augmentEquality.png",
          },
        },
        {
          input: {
            item: "Dungeon Tokens",
            itemId: "Itemizer.DungeonTokens",
            quantity: 60,
            metadata: 1,
            imageUrl: "/textures/items/dungeonTokens.png",
          },
          output: {
            item: "Augment: Battle",
            itemId: "Itemizer.AugmentBattle",
            quantity: 1,
            imageUrl: "/textures/items/augmentBattle.png",
          },
        },
        {
          input: {
            item: "Dungeon Tokens",
            itemId: "Itemizer.DungeonTokens",
            quantity: 10,
            metadata: 1,
            imageUrl: "/textures/items/dungeonTokens.png",
          },
          output: {
            item: "Vulcammer",
            itemId: "Weaponizer.VulcammerSword",
            quantity: 1,
            imageUrl: "/textures/items/swordVulcammer.png",
          },
        },
        {
          input: {
            item: "Dungeon Tokens",
            itemId: "Itemizer.DungeonTokens",
            quantity: 30,
            metadata: 1,
            imageUrl: "/textures/items/dungeonTokens.png",
          },
          output: {
            item: "Everfight Staff",
            itemId: "Weaponizer.EverfightStaff",
            quantity: 1,
            imageUrl: "/textures/items/everfightStaff.png",
          },
        },
        {
          input: {
            item: "Dungeon Tokens",
            itemId: "Itemizer.DungeonTokens",
            quantity: 30,
            metadata: 1,
            imageUrl: "/textures/items/dungeonTokens.png",
          },
          output: {
            item: "Evermight Staff",
            itemId: "Weaponizer.EvermightStaff",
            quantity: 1,
            imageUrl: "/textures/items/evermightStaff.png",
          },
        },
        {
          input: {
            item: "Dungeon Tokens",
            itemId: "Itemizer.DungeonTokens",
            quantity: 40,
            metadata: 1,
            imageUrl: "/textures/items/dungeonTokens.png",
          },
          output: {
            item: "Odious",
            itemId: "Weaponizer.Odious",
            quantity: 1,
            imageUrl: "/textures/items/odious.png",
          },
        },
        {
          input: {
            item: "Dungeon Tokens",
            itemId: "Itemizer.DungeonTokens",
            quantity: 50,
            metadata: 1,
            imageUrl: "/textures/items/dungeonTokens.png",
          },
          output: {
            item: "Deadlock",
            itemId: "Weaponizer.Deadlock",
            quantity: 1,
            imageUrl: "/textures/items/deadlock.png",
          },
        },
        {
          input: {
            item: "Dungeon Tokens",
            itemId: "Itemizer.DungeonTokens",
            quantity: 1,
            metadata: 1,
            imageUrl: "/textures/items/dungeonTokens.png",
          },
          output: {
            item: "Immortal Banner",
            itemId: "SpecialBlockizer.ImmortalBanner",
            quantity: 3,
            imageUrl: "/textures/banner/immortalBanner.png",
          },
        },
      ],
      imageUrl: "/textures/mobs/tokenCollector.png",
      model: "/models/npc/store-keeper/store-keeper.gltf",
    },
  ],
  generatedOres: [],
  resources: [
    {
      name: "Impure Gold",
      type: "Item de coleta",
      usage:
        "Coletado de Goldums na sala 2 e depositado no Gold Accumulator para progresso da dimensão.",
      imageUrl: "/dimensions/common_images/Impure_Gold.png",
    },
    {
      name: "Pure Gold",
      type: "Item de coleta avançado",
      usage:
        "Obtido nas salas posteriores da arena (Goldus, Fenixes, Shavos) e depositado em Pure Gold Accumulator; usado como requisito para progressão.",
      imageUrl: "/dimensions/common_images/Pure_Gold.png",
    },
  ],
  bosses: [
    {
      name: "Klobber",
      howToSpawn:
        "Enfrente Klobber na terceira sala da arena após coletar ouro impuro.",
      notes:
        "Boss de combate pesado, foco em dano corpo-a-corpo; dropar tokens de progresso para avançar na arena.",
      imageUrl: "/dimensions/immortallis_images/Klobber.png",
      entities: [
        {
          entity: "EntityKlobber",
          displayName: "Klobber",
          imageUrl: "/dimensions/immortallis_images/Klobber.png",
          model: "/models/boss/klobber/klobber/klobber.gltf",
          health: 1000,
        },
      ],
      loot: [
        {
          item: "Progress Coin",
          itemId: "Itemizer.ProgressCoin1",
          minQuantity: 1,
          maxQuantity: 1,
          chance: 1,
          sourceEntities: ["EntityKlobber"],
          imageUrl: "/dimensions/common_images/Progress_Coin_1.png",
        },
      ],
    },
    {
      name: "Proshield",
      howToSpawn:
        "Enfrente Proshield na quinta sala da arena, sala dedicada ao desafio de defesa.",
      notes:
        "Boss especializado em defesa/esquiva; recompensa com token de progresso.",
      imageUrl: "/dimensions/immortallis_images/Proshield.png",
      entities: [
        {
          entity: "EntityProshield",
          displayName: "Proshield",
          imageUrl: "/dimensions/immortallis_images/Proshield.png",
          model: "/models/boss/proshield/proshield/proshield.gltf",
          health: 500,
        },
      ],
      loot: [
        {
          item: "Progress Coin",
          itemId: "Itemizer.ProgressCoin2",
          minQuantity: 1,
          maxQuantity: 1,
          chance: 1,
          sourceEntities: ["EntityProshield"],
          imageUrl: "/dimensions/common_images/Progress_Coin_2.png",
        },
      ],
    },
    {
      name: "Mirage",
      howToSpawn:
        "Enfrente Mirage na sétima sala da arena, plataforma suspensa acima de lava.",
      notes:
        "Boss com temática de ilusões e mobilidade; exige domínio de movimentação em plataformas sobre o vazio.",
      imageUrl: "/dimensions/immortallis_images/Mirage.png",
      entities: [
        {
          entity: "EntityMirage",
          displayName: "Mirage",
          imageUrl: "/dimensions/immortallis_images/Mirage.png",
          model: "/models/boss/mirage/mirage/mirage.gltf",
          health: 750,
        },
      ],
      loot: [
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
      name: "Flash",
      howToSpawn:
        "Enfrente Flash na sala final, após ○ desafios anteriores serem completados e o progresso ser transferido no progressor.",
      notes:
        "Boss final da dimensão; derrota final que conclui o conteúdo de Immortallis.",
      imageUrl: "/dimensions/immortallis_images/Flash.png",
      entities: [
        {
          entity: "EntityFlash",
          displayName: "Flash",
          imageUrl: "/dimensions/immortallis_images/Flash.png",
          model: "/models/boss/flash/flash/flash.gltf",
          health: 1000,
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
      ],
    },
  ],
  biomes: [
    {
      name: "Immortallis",
      id: 95,
      imageUrl: "/nvm2_data/img_data/Immortallis/biomes/Immortallis.png",
    },
  ],
  structures: [],
};
