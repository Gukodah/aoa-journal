export const Candyland = {
  id: "candyland",
  name: "Candyland",
  tier: 2,
  prerequisiteDimension: "Precasia",
  theme:
    "Mundo colorido de doces, com terreno de grama açucarada, árvores-pirulito, lagos de água doce e estruturas gigantes de confeitaria.",
  shortDescription:
    "Dimensão plana e vibrante onde o solo é Candied Dirt e Candied Grass, com estruturas de doces na superfície, lagos de Candied Water e Dimensional Fabric substituindo o bedrock.",
  realmstone: {
    obtainHint:
      "Coma uma Heart Fruit em Precasia enquanto carrega um Blank Realmstone para obter a Candyland Realmstone.",
    obtainDetails:
      "Enquanto estiver em Precasia, consuma uma Heart Fruit tendo um Blank Realmstone no inventário. O item é convertido em Candyland Realmstone, que pode ser usado em um portal de AoA.",
    imageUrl: "/dimensions/candyland_images/Candyland_Realmstone.png",
  },
  imageUrl: "/dimensions/biomes/candyland.png",
  wikiUrl: "https://adventofascension.fandom.com/wiki/Candyland",
  mainObjectives: [
    {
      id: "unlock_dimension",
      title: "Desbloquear Candyland",
      description:
        "Obter a Candyland Realmstone comendo uma Heart Fruit em Precasia com um Blank Realmstone no inventário e ativar o portal.",
    },
    {
      id: "explore_surface",
      title: "Explorar a superfície açucarada",
      description:
        "Percorrer os campos de Candied Grass, estruturas de pirulito e lagos de Candied Water em busca de plantas, mobs e loot temáticos.",
    },
    {
      id: "collect_building_blocks",
      title: "Coletar blocos de doce para construção",
      description:
        "Farmar Candied Dirt, Candied Grass, Candy Grass e outros blocos de doce para criar bases e cidades temáticas em outras dimensões.",
    },
    {
      id: "prepare_for_lborean",
      title: "Preparar acesso a L'Borean",
      description:
        "Usar Candyland como etapa de progressão antes de L'Borean, organizando equipamentos, consumíveis e itens de movimento.",
    },
  ],
  mainObjectivesImages: [
    "https://adventofascension.fandom.com/wiki/Heart_Fruit",
    "https://adventofascension.fandom.com/wiki/File:Candyland.png",
    "https://adventofascension.fandom.com/wiki/Candy_Grass",
    "https://adventofascension.fandom.com/wiki/L%27Borean",
  ],
  secondaryObjectives: [
    "Criar uma base inteiramente feita de blocos de doce, usando múltiplos tipos de Candy Trees e estruturas naturais.",
    "Farmar mobs de Candyland para obter armaduras e itens de comida especiais, como Candy Armor e doces com efeitos.",
    "Registrar no diário de jogo as variações de estruturas gigantes (pirulitos, barras de chocolate, doces empilhados) vistas na dimensão.",
    "Experimentar o uso de alimentos e buffs obtidos em Candyland para enfrentar bosses em outras dimensões.",
  ],
  secondaryObjectivesImages: [
    "https://adventofascension.fandom.com/wiki/Category:Candyland",
    "https://adventofascension.fandom.com/wiki/Candy_Armor",
    "https://adventofascension.fandom.com/wiki/Category:Candyland#Structures",
    "https://adventofascension.fandom.com/wiki/Category:Candyland_mobs",
  ],
  progressionNotes: [
    {
      id: "progress_note_1",
      title: "Ponte para Lborean",
      description:
        "Candyland é um mundo de tier 2 que se desbloqueia após Precasia e serve de ponte para L'Borean.",
    },
    {
      id: "progress_note_2",
      title: "A dimensão é relativamente amigável",
      description:
        "A dimensão é relativamente amigável comparada a reinos mais sombrios, sendo boa para coleta de blocos e experimentação de builds.",
    },
    {
      id: "progress_note_3",
      title: "Sobre alimentos e buffs obtidos em Candyland",
      description:
        "Os alimentos e itens especiais obtidos aqui são úteis como suporte em lutas de bosses de outras dimensões.",
    },
  ],
  progressionImages: [
    "https://adventofascension.fandom.com/wiki/File:Candyland.png",
    "https://adventofascension.fandom.com/wiki/Precasia",
    "https://adventofascension.fandom.com/wiki/L%27Borean",
  ],
  versionNotes:
    "Na Tslat 1.1.3 Candyland já existe como dimensão de doces acessível via Heart Fruit em Precasia. A geometria de terreno e a lista exata de mobs/itens pode ter sido expandida em AoA3, mas o conceito de mundo de doces plano com Candied Dirt/Grass e ligação para L'Borean se mantém.",
  mobs: [
    {
      entity: "AmbientPixon",
      healthMin: 19,
      healthMax: 39,
      weight: 5,
      min: 1,
      max: 6,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Candyland",
          imageUrl: "/dimensions/biomes/candyland.png",
        },
        {
          name: "Chocolate Forest",
          imageUrl: "/dimensions/common_images/Chocolate_Forest.png",
        },
        {
          name: "Marshmallow Hills",
          imageUrl: "/dimensions/common_images/Marshmallow_Hills.png",
        },
        {
          name: "Rock Candy Hills",
          imageUrl: "/dimensions/candyland_images/Rock_Candy_Hills.png",
        },
      ],
      loot: [
        {
          item: "Ambient Infusion Stone",
          itemId: "Itemizer.iStoneAmbient",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/helmetInfusion.png",
          itemName: "Ambient Infusion Stone",
        },
      ],
      imageUrl: "",
      model: "/models/pixons/Ambient_Pixon.png",
      health: 19,
    },
    {
      entity: "EntityCandyCorny",
      weight: 20,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Candyland",
          imageUrl: "/dimensions/biomes/candyland.png",
        },
        {
          name: "Chocolate Forest",
          imageUrl: "/dimensions/common_images/Chocolate_Forest.png",
        },
        {
          name: "Marshmallow Hills",
          imageUrl: "/dimensions/common_images/Marshmallow_Hills.png",
        },
        {
          name: "Rock Candy Hills",
          imageUrl: "/dimensions/candyland_images/Rock_Candy_Hills.png",
        },
      ],
      loot: [
        {
          item: "Candy Corn",
          itemId: "Itemizer.CandyCorn",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/candyCorn.png",
        },
        {
          item: "Candyland Gems",
          itemId: "Itemizer.CoinsCandyland",
          quantity: 2,
          chance: 1,
          imageUrl: "/textures/items/candylandGems.png",
        },
        {
          item: "Sweet Tooth",
          itemId: "Weaponizer.SweetTooth",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/sweetTooth.png",
        },
        {
          item: "Blockizer.ChocolateBlock",
          itemId: "Blockizer.ChocolateBlock",
          quantity: 4,
          chance: 1,
          imageUrl: "/textures/blocks/chocolateBlock.png",
        },
        {
          item: "Blockizer.ChocolateBlockDark",
          itemId: "Blockizer.ChocolateBlockDark",
          quantity: 4,
          chance: 1,
          imageUrl: "/textures/blocks/chocolateBlockDark.png",
        },
        {
          item: "Blockizer.ChocolateBlockWhite",
          itemId: "Blockizer.ChocolateBlockWhite",
          quantity: 4,
          chance: 1,
          imageUrl: "/textures/blocks/chocolateBlockWhite.png",
        },
        {
          item: "Copper Coin",
          itemId: "Itemizer.CopperCoin",
          quantity: 3,
          chance: 1,
          imageUrl: "/textures/items/coinCopper.png",
        },
        {
          item: "Candy Banner",
          itemId: "SpecialBlockizer.CandyBanner",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/banner/candyBanner.png",
        },
      ],
      imageUrl: "/textures/mobs/candyCorny.png",
      model: "/models/candyland/candy-corny/candy-corny.gltf",
      health: 30,
    },
    {
      entity: "EntityPeppermintSlug",
      weight: 20,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Candyland",
          imageUrl: "/dimensions/biomes/candyland.png",
        },
        {
          name: "Chocolate Forest",
          imageUrl: "/dimensions/common_images/Chocolate_Forest.png",
        },
        {
          name: "Marshmallow Hills",
          imageUrl: "/dimensions/common_images/Marshmallow_Hills.png",
        },
        {
          name: "Rock Candy Hills",
          imageUrl: "/dimensions/candyland_images/Rock_Candy_Hills.png",
        },
      ],
      loot: [
        {
          item: "Candy Banner",
          itemId: "SpecialBlockizer.CandyBanner",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/banner/candyBanner.png",
        },
        {
          item: "Peppermint Candy",
          itemId: "Itemizer.PeppermintCandy",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/peppermintCandy.png",
        },
        {
          item: "Candyland Gems",
          itemId: "Itemizer.CoinsCandyland",
          quantity: 2,
          chance: 1,
          imageUrl: "/textures/items/candylandGems.png",
        },
        {
          item: "Blockizer.CandylandWhiteCandy",
          itemId: "Blockizer.CandylandWhiteCandy",
          quantity: 2,
          chance: 1,
          imageUrl: "/textures/blocks/candylandWhiteCandy.png",
        },
        {
          item: "Blockizer.CandylandRedCandy",
          itemId: "Blockizer.CandylandRedCandy",
          quantity: 2,
          chance: 1,
          imageUrl: "/textures/blocks/candylandRedCandy.png",
        },
        {
          item: "Candy Blade",
          itemId: "Weaponizer.CandyBlade",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/candyBlade.png",
        },
        {
          item: "Copper Coin",
          itemId: "Itemizer.CopperCoin",
          quantity: 3,
          chance: 1,
          imageUrl: "/textures/items/coinCopper.png",
        },
      ],
      imageUrl: "/textures/mobs/peppermintSlug.png",
      model: "/models/candyland/peppermint-slug/peppermint-slug.gltf",
      health: 25,
    },
    {
      entity: "EntitySpearmintSlug",
      weight: 20,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Candyland",
          imageUrl: "/dimensions/biomes/candyland.png",
        },
        {
          name: "Chocolate Forest",
          imageUrl: "/dimensions/common_images/Chocolate_Forest.png",
        },
        {
          name: "Marshmallow Hills",
          imageUrl: "/dimensions/common_images/Marshmallow_Hills.png",
        },
        {
          name: "Rock Candy Hills",
          imageUrl: "/dimensions/candyland_images/Rock_Candy_Hills.png",
        },
      ],
      loot: [
        {
          item: "Candy Banner",
          itemId: "SpecialBlockizer.CandyBanner",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/banner/candyBanner.png",
        },
        {
          item: "Spearmint Candy",
          itemId: "Itemizer.SpearmintCandy",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/spearmintCandy.png",
        },
        {
          item: "Candyland Gems",
          itemId: "Itemizer.CoinsCandyland",
          quantity: 2,
          chance: 1,
          imageUrl: "/textures/items/candylandGems.png",
        },
        {
          item: "Blockizer.CandylandWhiteCandy",
          itemId: "Blockizer.CandylandWhiteCandy",
          quantity: 2,
          chance: 1,
          imageUrl: "/textures/blocks/candylandWhiteCandy.png",
        },
        {
          item: "Blockizer.CandylandGreenCandy",
          itemId: "Blockizer.CandylandGreenCandy",
          quantity: 2,
          chance: 1,
          imageUrl: "/textures/blocks/candylandGreenCandy.png",
        },
        {
          item: "Candy Blade",
          itemId: "Weaponizer.CandyBlade",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/candyBlade.png",
        },
        {
          item: "Copper Coin",
          itemId: "Itemizer.CopperCoin",
          quantity: 3,
          chance: 1,
          imageUrl: "/textures/items/coinCopper.png",
        },
      ],
      imageUrl: "/textures/mobs/spearmintSlug.png",
      model: "/models/candyland/spearmint-slug/spearmint-slug.gltf",
      health: 120,
    },
    {
      entity: "EntityAirhead",
      weight: 20,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Candyland",
          imageUrl: "/dimensions/biomes/candyland.png",
        },
        {
          name: "Chocolate Forest",
          imageUrl: "/dimensions/common_images/Chocolate_Forest.png",
        },
        {
          name: "Marshmallow Hills",
          imageUrl: "/dimensions/common_images/Marshmallow_Hills.png",
        },
        {
          name: "Rock Candy Hills",
          imageUrl: "/dimensions/candyland_images/Rock_Candy_Hills.png",
        },
      ],
      loot: [
        {
          item: "Sour Gummy",
          itemId: "Itemizer.SourGummy",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/sourGummy.png",
        },
        {
          item: "Candyland Gems",
          itemId: "Itemizer.CoinsCandyland",
          quantity: 3,
          chance: 1,
          imageUrl: "/textures/items/candylandGems.png",
        },
      ],
      imageUrl: "/textures/mobs/airhead.png",
      model: "/models/candyland/airhead/airhead.gltf",
      health: 2,
    },
    {
      entity: "EntityCherryBlaster",
      weight: 20,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Candyland",
          imageUrl: "/dimensions/biomes/candyland.png",
        },
        {
          name: "Chocolate Forest",
          imageUrl: "/dimensions/common_images/Chocolate_Forest.png",
        },
        {
          name: "Marshmallow Hills",
          imageUrl: "/dimensions/common_images/Marshmallow_Hills.png",
        },
        {
          name: "Rock Candy Hills",
          imageUrl: "/dimensions/candyland_images/Rock_Candy_Hills.png",
        },
      ],
      loot: [
        {
          item: "Sour Pop",
          itemId: "Itemizer.SourPop",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/sourPop.png",
        },
        {
          item: "Candyland Gems",
          itemId: "Itemizer.CoinsCandyland",
          quantity: 2,
          chance: 1,
          imageUrl: "/textures/items/candylandGems.png",
        },
        {
          item: "Caramel Carver",
          itemId: "Weaponizer.CaramelCarver",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/caramelCarver.png",
        },
        {
          item: "Copper Coin",
          itemId: "Itemizer.CopperCoin",
          quantity: 3,
          chance: 1,
          imageUrl: "/textures/items/coinCopper.png",
        },
      ],
      imageUrl: "/textures/mobs/cherryBlaster.png",
      model: "/models/candyland/cherry-blaster/cherry-blaster.gltf",
      health: 35,
    },
    {
      entity: "EntityLollypopper",
      weight: 20,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Candyland",
          imageUrl: "/dimensions/biomes/candyland.png",
        },
        {
          name: "Chocolate Forest",
          imageUrl: "/dimensions/common_images/Chocolate_Forest.png",
        },
        {
          name: "Marshmallow Hills",
          imageUrl: "/dimensions/common_images/Marshmallow_Hills.png",
        },
        {
          name: "Rock Candy Hills",
          imageUrl: "/dimensions/candyland_images/Rock_Candy_Hills.png",
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
      imageUrl: "/textures/mobs/lollypopper.png",
      model: "/models/candyland/lollypopper/lollypopper.gltf",
      health: 40,
    },
    {
      entity: "EntityCherryBarrager",
      weight: 1,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Candyland",
          imageUrl: "/dimensions/biomes/candyland.png",
        },
        {
          name: "Chocolate Forest",
          imageUrl: "/dimensions/common_images/Chocolate_Forest.png",
        },
        {
          name: "Marshmallow Hills",
          imageUrl: "/dimensions/common_images/Marshmallow_Hills.png",
        },
        {
          name: "Rock Candy Hills",
          imageUrl: "/dimensions/candyland_images/Rock_Candy_Hills.png",
        },
      ],
      loot: [
        {
          item: "Sour Candy",
          itemId: "Itemizer.SourCandy",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/sourCandy.png",
        },
        {
          item: "Candyland Realmstone",
          itemId: "Itemizer.RealmstoneCandyland",
          quantity: 2,
          chance: 1,
          imageUrl: "/textures/items/realmstoneCandyland.png",
        },
        {
          item: "Candyland Gems",
          itemId: "Itemizer.CoinsCandyland",
          quantity: 6,
          chance: 1,
          imageUrl: "/textures/items/candylandGems.png",
        },
        {
          item: "Silver Coin",
          itemId: "Itemizer.SilverCoin",
          quantity: 2,
          chance: 1,
          imageUrl: "/textures/items/coinSilver.png",
        },
      ],
      imageUrl: "/textures/mobs/cherryBarrager.png",
      model: "/models/candyland/cherry-barrager/cherry-barrager.gltf",
      health: 130,
    },
    {
      entity: "EntityCaneBug",
      imageUrl: "/textures/mobs/canebug.png",
      model: "/models/candyland/cane-bug/cane-bug.gltf",
      health: 90,
      weight: 20,
      min: 1,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Candyland",
          imageUrl: "/dimensions/biomes/candyland.png",
        },
      ],
      loot: [
        {
          item: "Copper Coin",
          itemId: "Itemizer.CopperCoin",
          quantity: 3,
          chance: 1,
          imageUrl: "/textures/items/coinCopper.png",
          itemName: "Copper Coin",
        },
        {
          item: "Candy Cane",
          itemId: "Itemizer.CandyCane",
          quantity: 1,
          chance: 0.06666666666666667,
          imageUrl: "/textures/blocks/candyCane.png",
          itemName: "Candy Cane",
        },
        {
          item: "Candyland Gems",
          itemId: "Itemizer.CoinsCandyland",
          quantity: 2,
          chance: 0.3333333333333333,
          imageUrl: "/textures/items/candylandGems.png",
          itemName: "Candyland Gems",
        },
        {
          item: "Candy Staff",
          itemId: "Weaponizer.CandyStaff",
          quantity: 1,
          chance: 0.011111111111111112,
          imageUrl: "/textures/items/candyStaff.png",
          itemName: "Candy Staff",
        },
      ],
    },
    {
      entity: "EntityGingerbird",
      imageUrl: "/textures/mobs/gingerbird.png",
      model: "/models/candyland/gingerbird/gingerbird.gltf",
      health: 60,
      weight: 20,
      min: 1,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Candyland",
          imageUrl: "/dimensions/biomes/candyland.png",
        },
      ],
      loot: [
        {
          item: "Gingerbread Wing",
          itemId: "Itemizer.GingerbreadWing",
          quantity: 1,
          chance: 0.06666666666666667,
          imageUrl: "/textures/items/gingerbreadWing.png",
          itemName: "Gingerbread Wing",
        },
        {
          item: "Candyland Gems",
          itemId: "Itemizer.CoinsCandyland",
          quantity: 2,
          chance: 0.3333333333333333,
          imageUrl: "/textures/items/candylandGems.png",
          itemName: "Candyland Gems",
        },
        {
          item: "Sweet Sword",
          itemId: "Weaponizer.SweetSword",
          quantity: 1,
          chance: 0.014285714285714285,
          imageUrl: "/textures/items/swordSweet.png",
          itemName: "Sweet Sword",
        },
        {
          item: "Copper Coin",
          itemId: "Itemizer.CopperCoin",
          quantity: 3,
          chance: 1,
          imageUrl: "/textures/items/coinCopper.png",
          itemName: "Copper Coin",
        },
      ],
    },
    {
      entity: "EntityGingerbreadMan",
      imageUrl: "/textures/mobs/gingerbreadman.png",
      model: "/models/candyland/gingerbread-man/gingerbread-man.gltf",
      health: 40,
      weight: 20,
      min: 1,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Candyland",
          imageUrl: "/dimensions/biomes/candyland.png",
        },
      ],
      loot: [
        {
          item: "Gingerbread Cookie",
          itemId: "Itemizer.GingerbreadCookie",
          quantity: 1,
          chance: 0.06666666666666667,
          imageUrl: "/textures/items/gingerbreadCookie.png",
          itemName: "Gingerbread Cookie",
        },
        {
          item: "Candyland Gems",
          itemId: "Itemizer.CoinsCandyland",
          quantity: 2,
          chance: 0.3333333333333333,
          imageUrl: "/textures/items/candylandGems.png",
          itemName: "Candyland Gems",
        },
        {
          item: "Ginger Blaster",
          itemId: "Weaponizer.GingerBlaster",
          quantity: 1,
          chance: 0.005,
          imageUrl: "/textures/items/gingerBlaster.png",
          itemName: "Ginger Blaster",
        },
        {
          item: "Copper Coin",
          itemId: "Itemizer.CopperCoin",
          quantity: 3,
          chance: 0.2,
          imageUrl: "/textures/items/coinCopper.png",
          itemName: "Copper Coin",
        },
      ],
    },
    {
      entity: "EntityGummySlug",
      imageUrl: "/textures/mobs/gummyslug.png",
      model: "/models/candyland/gummy-slug/gummy-slug.gltf",
    },
  ],
  npcs: [
    {
      entity: "EntityLottomanCandyland",
      notes: "Gerado automaticamente por estruturas da dimensão.",
      displayName: "LottomanCandyland",
      registeredBiomes: [],
      loot: [],
      trades: [
        {
          input: {
            item: "Candyland Gems",
            itemId: "Itemizer.CoinsCandyland",
            quantity: 10,
            metadata: 1,
            imageUrl: "/textures/items/candylandGems.png",
          },
          output: {
            item: "Froster Totem",
            itemId: "Totemizer.TotemFroster",
            quantity: 1,
            imageUrl: "/textures/items/totemFroster.png",
          },
        },
        {
          input: {
            item: "Candyland Gems",
            itemId: "Itemizer.CoinsCandyland",
            quantity: 10,
            metadata: 1,
            imageUrl: "/textures/items/candylandGems.png",
          },
          output: {
            item: "Mint Magnum Totem",
            itemId: "Totemizer.TotemMintMagnum",
            quantity: 1,
            imageUrl: "/textures/items/totemMintMagnum.png",
          },
        },
        {
          input: {
            item: "Candyland Gems",
            itemId: "Itemizer.CoinsCandyland",
            quantity: 40,
            metadata: 1,
            imageUrl: "/textures/items/candylandGems.png",
          },
          output: {
            item: "Froster Totem",
            itemId: "Totemizer.TotemFroster",
            quantity: 10,
            imageUrl: "/textures/items/totemFroster.png",
          },
          additionalInput: {
            item: "Candyland Gems",
            itemId: "Itemizer.CoinsCandyland",
            quantity: 35,
            imageUrl: "/textures/items/candylandGems.png",
          },
        },
        {
          input: {
            item: "Candyland Gems",
            itemId: "Itemizer.CoinsCandyland",
            quantity: 40,
            metadata: 1,
            imageUrl: "/textures/items/candylandGems.png",
          },
          output: {
            item: "Mint Magnum Totem",
            itemId: "Totemizer.TotemMintMagnum",
            quantity: 10,
            imageUrl: "/textures/items/totemMintMagnum.png",
          },
          additionalInput: {
            item: "Candyland Gems",
            itemId: "Itemizer.CoinsCandyland",
            quantity: 35,
            imageUrl: "/textures/items/candylandGems.png",
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
      imageUrl: "/textures/mobs/lottomanCandyland.png",
      model: "/models/npc/lottoman/lottoman.gltf",
    },
  ],
  generatedOres: [],
  resources: [
    {
      name: "Candied Grass",
      type: "Bloco de superfície",
      usage:
        "Forma o topo do terreno da dimensão, dando o visual de grama de açúcar; ideal para builds temáticas.",
      imageUrl: "/dimensions/shyrelands_images/Candied_Grass.png",
    },
    {
      name: "Candied Dirt",
      type: "Bloco de terreno",
      usage:
        "Subsolo completo de Candyland, substituindo pedra e possibilitando grandes projetos de terraformação doce.",
      imageUrl: "/dimensions/shyrelands_images/Candied_Dirt.png",
    },
    {
      name: "Candied Water",
      type: "Fluido",
      usage:
        "Presente em lagos de superfície; pode ser usado como elemento decorativo em fontes e canais temáticos.",
      imageUrl: "/dimensions/shyrelands_images/Candied_Water.png",
    },
    {
      name: "Dimensional Fabric",
      type: "Bloco estrutural",
      usage:
        "Camada no fundo do mundo, usada como equivalente ao bedrock e em decoração high-tech.",
      imageUrl: "/dimensions/shyrelands_images/Dimensional_Fabric.png",
    },
  ],
  bosses: [
    {
      name: "Cotton Candor",
      howToSpawn:
        "Use um Treat Bag em um Candy Block no topo das Cotton Candy Towers para invocar o chefe.",
      notes:
        "Chefe principal de Candyland; dropa Cotton Crusher, Candy Armor e outros itens doces de tier intermediário.",
      imageUrl: "/dimensions/common_images/Cotton_Candor.png",
      spawnItems: [
        {
          itemId: "Itemizer.TreatBag",
          item: "Treat Bag",
          usage:
            "Use um Treat Bag no Candy Block no topo das Cotton Candy Towers.",
          imageUrl: "/textures/items/treatBag.png",
        },
      ],
      entities: [
        {
          entity: "EntityCottonCandor",
          displayName: "CottonCandor",
          imageUrl: "/dimensions/common_images/Cotton_Candor.png",
          model: "/models/boss/cottoncandor/cotton-candor/cotton-candor.gltf",
          health: 3000,
        },
      ],
      loot: [
        {
          item: "Candy Boots",
          itemId: "Armorizer.CandyBoots",
          minQuantity: 1,
          maxQuantity: 1,
          chance: 1,
          sourceEntities: ["EntityCottonCandor"],
          imageUrl: "/dimensions/candyland_images/Candy_Boots.png",
        },
        {
          item: "Candy Helmet",
          itemId: "Armorizer.CandyHelmet",
          minQuantity: 1,
          maxQuantity: 1,
          chance: 1,
          sourceEntities: ["EntityCottonCandor"],
          imageUrl: "/dimensions/candyland_images/Candy_Helmet.png",
        },
        {
          item: "Candy Leggings",
          itemId: "Armorizer.CandyLeggings",
          minQuantity: 1,
          maxQuantity: 1,
          chance: 1,
          sourceEntities: ["EntityCottonCandor"],
          imageUrl: "/dimensions/candyland_images/Candy_Leggings.png",
        },
        {
          item: "Candy Chestplate",
          itemId: "Armorizer.CandyChestplate",
          minQuantity: 1,
          maxQuantity: 1,
          chance: 1,
          sourceEntities: ["EntityCottonCandor"],
          imageUrl: "/dimensions/candyland_images/Candy_Chestplate.png",
        },
        {
          item: "Cotton Crusher",
          itemId: "Weaponizer.CottonCrusher",
          minQuantity: 1,
          maxQuantity: 1,
          chance: 0.1667,
          sourceEntities: ["EntityCottonCandor"],
          imageUrl: "/textures/items/cottonCrusher.png",
        },
      ],
    },
  ],
  biomes: [
    {
      name: "Candyland",
      id: 93,
      imageUrl: "/nvm2_data/img_data/Candyland/biomes/Candyland.png",
    },
    {
      name: "Chocolate Forest",
      id: 117,
      imageUrl: "/nvm2_data/img_data/Candyland/biomes/Chocolate_Forest.png",
    },
    {
      name: "Marshmallow Hills",
      id: 118,
      imageUrl: "/nvm2_data/img_data/Candyland/biomes/Marshmallow_Hills.png",
    },
    {
      name: "Rock Candy Hills",
      id: 119,
      imageUrl: "/nvm2_data/img_data/Candyland/biomes/Rock_Candy.gif",
    },
  ],
  structures: [
    {
      name: "Candy Lotto Platform",
      imageUrl:
        "/nvm2_data/img_data/Candyland/structures/Candy_Lotto_Platform.png",
    },
    {
      name: "Cotton Candy",
      imageUrl: "/nvm2_data/img_data/Candyland/structures/Cotton_Candy.gif",
    },
    {
      name: "Cotton Candy Tower",
      imageUrl:
        "/nvm2_data/img_data/Candyland/structures/Cotton_Candy_Tower.png",
    },
    {
      name: "Gingerbread Aviary",
      imageUrl:
        "/nvm2_data/img_data/Candyland/structures/Gingerbird_Aviary.png",
    },
    {
      name: "Gingerbread House",
      imageUrl:
        "/nvm2_data/img_data/Candyland/structures/Gingerbread_House.png",
    },
    {
      name: "Infested Candy Cane",
      imageUrl:
        "/nvm2_data/img_data/Candyland/structures/Infested_Candy_Cane.png",
    },
  ],
};
