export const Celeve = {
  id: "celeve",
  name: "Celeve",
  tier: 2,
  prerequisiteDimension: "Lelyetia",
  theme:
    "Parque de diversões flutuante e macabro, dominado por palhaços e estruturas de circo em plataformas no céu.",
  shortDescription:
    "Dimensão de ilhas suspensas com blocos coloridos, árvores em formato de balão/cogumelo e construções de circo, sem ciclo de dia/noite.",
  realmstone: {
    obtainHint:
      "Obtenha a Celeve Realmstone derrotando um clown/happy ligado a Lelyetia enquanto carrega um Blank Realmstone.",
    obtainDetails:
      "Na árvore de progressão oficial, a Celeve Realmstone costuma ser obtida ao derrotar um clown (Happy) com uma Lelyetian Greatblade, seguindo a instrução exibida na GUI do Blank Realmstone. Em Tslat 1.1.3, a formulação exata pode variar levemente, mas permanece associada a Lelyetia e aos clowns.",
    imageUrl: "/dimensions/celeve_images/Celeve_Realmstone.png",
  },
  imageUrl: "/dimensions/biomes/celeve.png",
  wikiUrl: "https://adventofascension.fandom.com/wiki/Celeve",
  mainObjectives: [
    {
      id: "unlock_dimension",
      title: "Desbloquear Celeve",
      description:
        "Completar a tarefa de realmstone ligada a Lelyetia (derrotar um clown especificado enquanto carrega um Blank Realmstone) e ativar o portal.",
    },
    {
      id: "navigate_islands",
      title: "Navegar pelas ilhas flutuantes",
      description:
        "Explorar as plataformas de circo suspensas, pontes e torres coloridas, criando rotas seguras entre elas.",
    },
    {
      id: "fight_clowns",
      title: "Enfrentar mobs de circo",
      description:
        "Lutar contra palhaços e outras criaturas temáticas de parque, farmando tokens, armas e itens cosméticos.",
    },
    {
      id: "clear_circus_structures",
      title: "Limpar arenas e tendas",
      description:
        "Conquistar arenas, tendas e estruturas de mini-bosses, preparando-se para lutas maiores e obtendo loot avançado.",
    },
  ],
  mainObjectivesImages: [
    "https://adventofascension.fandom.com/wiki/Lelyetia",
    "https://adventofascension.fandom.com/wiki/File:Celeve.png",
    "https://adventofascension.fandom.com/wiki/Category:Celeve_mobs",
    "https://adventofascension.fandom.com/wiki/Category:Celeve#Structures",
  ],
  secondaryObjectives: [
    "Coletar blocos coloridos e de parque para construir minigames e arenas personalizadas no Overworld.",
    "Experimentar builds de mobilidade (jump boosts, grappling, flight limitado) para atravessar as plataformas com segurança.",
    "Completar o bestiário de Celeve, registrando todos os tipos de clowns e NPCs associados ao parque.",
    "Usar Celeve como cenário de desafio, cronometrando speedruns pessoais de arena em diferentes estruturas.",
  ],
  secondaryObjectivesImages: [
    "https://adventofascension.fandom.com/wiki/Category:Celeve",
    "https://adventofascension.fandom.com/wiki/Category:Armor_sets",
    "https://adventofascension.fandom.com/wiki/Category:Celeve_mobs",
    "https://adventofascension.fandom.com/wiki/Advancements",
  ],
  progressionNotes: [
    {
      id: "progress_note_1",
      title: "Dimensão de tier 2 acessada após Lelyetia",
      description:
        "Celeve é uma dimensão de tier 2 acessada após Lelyetia, funcionando como ramo alternativo focado em arena e plataformas.",
    },
    {
      id: "progress_note_2",
      title: "Dimensão boa para testar builds",
      description:
        "Bom lugar para testar builds de mobilidade e dano em espaços apertados e cheios de buracos para o void.",
    },
    {
      id: "progress_note_3",
      title: "Progressão de tier 2 e 3.",
      description:
        "Os equipamentos e tokens obtidos aqui podem complementar outras rotas de progressão de tier 2 e 3.",
    },
  ],
  versionNotes:
    "Na Tslat 1.1.3 Celeve já existe como parque de diversões de palhaços ligado a Lelyetia. Em versões novas a condição de obtenção da realmstone foi atualizada (por exemplo, matar um lelyetian warrior com fogo de foguete), mas o conceito geral de acesso via GUI do Blank Realmstone e a função de dimensão de circo se mantêm.",
  mobs: [
    {
      entity: "EntityChocko",
      weight: 20,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Celeve",
          imageUrl: "/dimensions/celeve_images/Celeve.png",
        },
      ],
      loot: [
        {
          item: "Circus Coin",
          itemId: "Itemizer.CoinCircus",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/coinCircus.png",
        },
        {
          item: "Candyland Realmstone",
          itemId: "Itemizer.RealmstoneCandyland",
          quantity: 2,
          chance: 1,
          imageUrl: "/textures/items/realmstoneCandyland.png",
        },
        {
          item: "Clown Banner",
          itemId: "SpecialBlockizer.ClownBanner",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/banner/clownBanner.png",
        },
      ],
      imageUrl: "/textures/mobs/chocko.png",
      model: "/models/celeve/chocko/chocko.gltf",
      health: 35,
    },
    {
      entity: "EntityKoko",
      weight: 20,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Celeve",
          imageUrl: "/dimensions/celeve_images/Celeve.png",
        },
      ],
      loot: [
        {
          item: "Circus Coin",
          itemId: "Itemizer.CoinCircus",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/coinCircus.png",
        },
        {
          item: "Celeve Gems",
          itemId: "Itemizer.CoinsCeleve",
          quantity: 2,
          chance: 1,
          imageUrl: "/textures/items/celeveGems.png",
        },
        {
          item: "Candyland Realmstone",
          itemId: "Itemizer.RealmstoneCandyland",
          quantity: 2,
          chance: 1,
          imageUrl: "/textures/items/realmstoneCandyland.png",
        },
        {
          item: "Clown Banner",
          itemId: "SpecialBlockizer.ClownBanner",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/banner/clownBanner.png",
        },
      ],
      imageUrl: "/textures/mobs/koko.png",
      model: "/models/celeve/koko/koko.gltf",
      health: 85,
    },
    {
      entity: "EntitySnappy",
      weight: 20,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Celeve",
          imageUrl: "/dimensions/celeve_images/Celeve.png",
        },
      ],
      loot: [
        {
          item: "Circus Coin",
          itemId: "Itemizer.CoinCircus",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/coinCircus.png",
        },
        {
          item: "Smiley Upgrade Kit",
          itemId: "Itemizer.UpgradeKitSmiley",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/upgradeKitSmiley.png",
        },
        {
          item: "Clown Banner",
          itemId: "SpecialBlockizer.ClownBanner",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/banner/clownBanner.png",
        },
      ],
      imageUrl: "/textures/mobs/snappy.png",
      model: "/models/celeve/snappy/snappy.gltf",
      health: 45,
    },
    {
      entity: "EntityTipsy",
      weight: 20,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Celeve",
          imageUrl: "/dimensions/celeve_images/Celeve.png",
        },
      ],
      loot: [
        {
          item: "Circus Coin",
          itemId: "Itemizer.CoinCircus",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/coinCircus.png",
        },
        {
          item: "Celeve Gems",
          itemId: "Itemizer.CoinsCeleve",
          quantity: 3,
          chance: 1,
          imageUrl: "/textures/items/celeveGems.png",
        },
        {
          item: "Clown Upgrade Kit",
          itemId: "Itemizer.UpgradeKitClown",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/upgradeKitClown.png",
        },
        {
          item: "Clown Banner",
          itemId: "SpecialBlockizer.ClownBanner",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/banner/clownBanner.png",
        },
      ],
      imageUrl: "/textures/mobs/tipsy.png",
      model: "/models/celeve/tipsy/tipsy.gltf",
      health: 85,
    },
    {
      entity: "EntityStitches",
      weight: 20,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Celeve",
          imageUrl: "/dimensions/celeve_images/Celeve.png",
        },
      ],
      loot: [
        {
          item: "Circus Coin",
          itemId: "Itemizer.CoinCircus",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/coinCircus.png",
        },
        {
          item: "Celeve Gems",
          itemId: "Itemizer.CoinsCeleve",
          quantity: 3,
          chance: 1,
          imageUrl: "/textures/items/celeveGems.png",
        },
        {
          item: "Clown Upgrade Kit",
          itemId: "Itemizer.UpgradeKitClown",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/upgradeKitClown.png",
        },
        {
          item: "Clown Banner",
          itemId: "SpecialBlockizer.ClownBanner",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/banner/clownBanner.png",
        },
      ],
      imageUrl: "/textures/mobs/stitches.png",
      model: "/models/celeve/stitches/stitches.gltf",
      health: 85,
    },
    {
      entity: "EntityKranky",
      weight: 20,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Celeve",
          imageUrl: "/dimensions/celeve_images/Celeve.png",
        },
      ],
      loot: [
        {
          item: "Circus Coin",
          itemId: "Itemizer.CoinCircus",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/coinCircus.png",
        },
        {
          item: "Celeve Gems",
          itemId: "Itemizer.CoinsCeleve",
          quantity: 3,
          chance: 1,
          imageUrl: "/textures/items/celeveGems.png",
        },
        {
          item: "Clown Banner",
          itemId: "SpecialBlockizer.ClownBanner",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/banner/clownBanner.png",
        },
        {
          item: "Smiley Upgrade Kit",
          itemId: "Itemizer.UpgradeKitSmiley",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/upgradeKitSmiley.png",
        },
      ],
      imageUrl: "/textures/mobs/kranky.png",
      model: "/models/celeve/kranky/kranky.gltf",
      health: 85,
    },
    {
      entity: "EntityBobo",
      weight: 20,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Celeve",
          imageUrl: "/dimensions/celeve_images/Celeve.png",
        },
      ],
      loot: [
        {
          item: "Circus Coin",
          itemId: "Itemizer.CoinCircus",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/coinCircus.png",
        },
        {
          item: "Clown Upgrade Kit",
          itemId: "Itemizer.UpgradeKitClown",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/upgradeKitClown.png",
        },
        {
          item: "Celeve Gems",
          itemId: "Itemizer.CoinsCeleve",
          quantity: 3,
          chance: 1,
          imageUrl: "/textures/items/celeveGems.png",
        },
        {
          item: "Clown Banner",
          itemId: "SpecialBlockizer.ClownBanner",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/banner/clownBanner.png",
        },
      ],
      imageUrl: "/textures/mobs/bobo.png",
      model: "/models/celeve/bobo/bobo.gltf",
      health: 85,
    },
    {
      entity: "EntitySticky",
      weight: 20,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Celeve",
          imageUrl: "/dimensions/celeve_images/Celeve.png",
        },
      ],
      loot: [
        {
          item: "Circus Coin",
          itemId: "Itemizer.CoinCircus",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/coinCircus.png",
        },
        {
          item: "Celeve Gems",
          itemId: "Itemizer.CoinsCeleve",
          quantity: 2,
          chance: 1,
          imageUrl: "/textures/items/celeveGems.png",
        },
        {
          item: "Candyland Realmstone",
          itemId: "Itemizer.RealmstoneCandyland",
          quantity: 2,
          chance: 1,
          imageUrl: "/textures/items/realmstoneCandyland.png",
        },
        {
          item: "Clown Banner",
          itemId: "SpecialBlockizer.ClownBanner",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/banner/clownBanner.png",
        },
      ],
      imageUrl: "/textures/mobs/sticky.png",
      model: "/models/celeve/sticky/sticky.gltf",
      health: 95,
    },
    {
      entity: "EntityJumbo",
      weight: 1,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Celeve",
          imageUrl: "/dimensions/celeve_images/Celeve.png",
        },
      ],
      loot: [
        {
          item: "Circus Coin",
          itemId: "Itemizer.CoinCircus",
          quantity: 5,
          chance: 1,
          imageUrl: "/textures/items/coinCircus.png",
        },
        {
          item: "Joker Staff",
          itemId: "Weaponizer.JokerStaff",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/jokerStaff.png",
        },
        {
          item: "Celeve Realmstone",
          itemId: "Itemizer.RealmstoneCeleve",
          quantity: 2,
          chance: 1,
          imageUrl: "/textures/items/realmstoneCeleve.png",
        },
      ],
      imageUrl: "/textures/mobs/jumbo.png",
      model: "/models/celeve/jumbo/jumbo.gltf",
      health: 85,
    },
  ],
  npcs: [
    {
      entity: "EntityLottomanCeleve",
      notes: "Gerado automaticamente por estruturas da dimensão.",
      displayName: "LottomanCeleve",
      registeredBiomes: [],
      loot: [],
      trades: [
        {
          input: {
            item: "Celeve Gems",
            itemId: "Itemizer.CoinsCeleve",
            quantity: 10,
            metadata: 1,
            imageUrl: "/textures/items/celeveGems.png",
          },
          output: {
            item: "Goofy Greatblade Totem",
            itemId: "Totemizer.TotemGoofyGreatblade",
            quantity: 1,
            imageUrl: "/textures/items/totemGoofyGreatblade.png",
          },
        },
        {
          input: {
            item: "Celeve Gems",
            itemId: "Itemizer.CoinsCeleve",
            quantity: 10,
            metadata: 1,
            imageUrl: "/textures/items/celeveGems.png",
          },
          output: {
            item: "Whimsy Winder Totem",
            itemId: "Totemizer.TotemWhimsyWinder",
            quantity: 1,
            imageUrl: "/textures/items/totemWhimsyWinder.png",
          },
        },
        {
          input: {
            item: "Celeve Gems",
            itemId: "Itemizer.CoinsCeleve",
            quantity: 40,
            metadata: 1,
            imageUrl: "/textures/items/celeveGems.png",
          },
          output: {
            item: "Goofy Greatblade Totem",
            itemId: "Totemizer.TotemGoofyGreatblade",
            quantity: 10,
            imageUrl: "/textures/items/totemGoofyGreatblade.png",
          },
          additionalInput: {
            item: "Celeve Gems",
            itemId: "Itemizer.CoinsCeleve",
            quantity: 35,
            imageUrl: "/textures/items/celeveGems.png",
          },
        },
        {
          input: {
            item: "Celeve Gems",
            itemId: "Itemizer.CoinsCeleve",
            quantity: 40,
            metadata: 1,
            imageUrl: "/textures/items/celeveGems.png",
          },
          output: {
            item: "Whimsy Winder Totem",
            itemId: "Totemizer.TotemWhimsyWinder",
            quantity: 10,
            imageUrl: "/textures/items/totemWhimsyWinder.png",
          },
          additionalInput: {
            item: "Celeve Gems",
            itemId: "Itemizer.CoinsCeleve",
            quantity: 35,
            imageUrl: "/textures/items/celeveGems.png",
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
      imageUrl: "/textures/mobs/lottomanCeleve.png",
      model: "/models/npc/lottoman/lottoman.gltf",
    },
    {
      entity: "EntityToyMerchant",
      notes: "Gerado automaticamente por estruturas da dimensão.",
      displayName: "ToyMerchant",
      registeredBiomes: [],
      loot: [],
      trades: [
        {
          input: {
            item: "Circus Coin",
            itemId: "Itemizer.CoinCircus",
            quantity: 20,
            metadata: 1,
            imageUrl: "/textures/items/coinCircus.png",
          },
          output: {
            item: "Toy Gyrocopter",
            itemId: "Itemizer.ToyGyrocopter",
            quantity: 1,
            imageUrl: "/textures/items/toyGyrocopter.png",
          },
        },
        {
          input: {
            item: "Circus Coin",
            itemId: "Itemizer.CoinCircus",
            quantity: 1,
            metadata: 1,
            imageUrl: "/textures/items/coinCircus.png",
          },
          output: {
            item: "Balloon",
            itemId: "Itemizer.Balloon",
            quantity: 64,
            imageUrl: "/textures/items/balloon.png",
          },
        },
        {
          input: {
            item: "Circus Coin",
            itemId: "Itemizer.CoinCircus",
            quantity: 5,
            metadata: 1,
            imageUrl: "/textures/items/coinCircus.png",
          },
          output: {
            item: "Weaponizer.ConfettiCluster",
            itemId: "Weaponizer.ConfettiCluster",
            quantity: 1,
            imageUrl: "/textures/items/confettiCluster.png",
          },
        },
        {
          input: {
            item: "Circus Coin",
            itemId: "Itemizer.CoinCircus",
            quantity: 20,
            metadata: 1,
            imageUrl: "/textures/items/coinCircus.png",
          },
          output: {
            item: "Weaponizer.PartyPopper",
            itemId: "Weaponizer.PartyPopper",
            quantity: 1,
            imageUrl: "/textures/items/partyPopper.png",
          },
        },
        {
          input: {
            item: "Circus Coin",
            itemId: "Itemizer.CoinCircus",
            quantity: 30,
            metadata: 1,
            imageUrl: "/textures/items/coinCircus.png",
          },
          output: {
            item: "Balloon Bomber",
            itemId: "Weaponizer.BalloonBomber",
            quantity: 1,
            imageUrl: "/textures/items/balloonBomber.png",
          },
        },
        {
          input: {
            item: "Circus Coin",
            itemId: "Itemizer.CoinCircus",
            quantity: 45,
            metadata: 1,
            imageUrl: "/textures/items/coinCircus.png",
          },
          output: {
            item: "Bozo Blaster",
            itemId: "Weaponizer.BozoBlaster",
            quantity: 1,
            imageUrl: "/textures/items/bozoBlaster.png",
          },
        },
        {
          input: {
            item: "Circus Coin",
            itemId: "Itemizer.CoinCircus",
            quantity: 60,
            metadata: 1,
            imageUrl: "/textures/items/coinCircus.png",
          },
          output: {
            item: "Show Staff",
            itemId: "Weaponizer.ShowStaff",
            quantity: 1,
            imageUrl: "/textures/items/showStaff.png",
          },
        },
      ],
      imageUrl: "/textures/mobs/toyMerchant.png",
      model: "/models/npc/store-keeper/store-keeper.gltf",
    },
    {
      entity: "EntityInnervationMaster",
      displayName: "InnervationMaster",
      weight: 1,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Celeve",
          imageUrl: "/dimensions/celeve_images/Celeve.png",
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
            item: "Innervation Boots",
            itemId: "Armorizer.InnervationBoots",
            quantity: 1,
            imageUrl: "/textures/items/bootsInnervation.png",
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
            item: "Innervation Leggings",
            itemId: "Armorizer.InnervationLeggings",
            quantity: 1,
            imageUrl: "/dimensions/common_images/Innervation_Leggings.png",
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
            item: "Innervation Chestplate",
            itemId: "Armorizer.InnervationChestplate",
            quantity: 1,
            imageUrl: "/textures/items/chestplateInnervation.png",
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
            item: "Innervation Helmet",
            itemId: "Armorizer.InnervationHelmet",
            quantity: 1,
            imageUrl: "/textures/items/helmetInnervation.png",
          },
        },
      ],
      imageUrl: "",
      model: "/models/npc/store-keeper/store-keeper.gltf",
    },
  ],
  generatedOres: [],
  resources: [
    {
      name: "Blocos de circo (bricks e decorativos)",
      type: "Blocos de construção",
      usage:
        "Formam o chão das arenas, tendas e torres; ótimos para construir parques de diversões customizados.",
      imageUrl: "/dimensions/abyss_images/Bloodstone_Bricks.png",
    },
    {
      name: "Itens da Celeve Table",
      type: "Itens especializados",
      usage:
        "Equipamentos e utilidades craftadas/associadas à Celeve Table, dando identidade própria à dimensão.",
      imageUrl: "/textures/items/upgradeKitClown.png",
    },
  ],
  bosses: [
    {
      name: "Gyro",
      howToSpawn:
        "Use um Toy Gyrocopter em um Toy Box localizado nas Gyro Platforms para iniciar a luta.",
      notes:
        "Boss acrobata que dispara projéteis de circo e recompensa com armas como Gimmick, Spectacle e Big Top.",
      imageUrl: "/dimensions/common_images/Gyro.png",
      spawnItems: [
        {
          itemId: "Itemizer.ToyGyrocopter",
          item: "Toy Gyrocopter",
          usage:
            "Ative um Toy Box segurando o Toy Gyrocopter para iniciar a luta com o Gyro.",
          imageUrl: "/textures/items/toyGyrocopter.png",
        },
      ],
      entities: [
        {
          entity: "EntityGyro",
          displayName: "Gyro",
          imageUrl: "/textures/mobs/gyro.png",
          model: "/models/boss/gyro/gyro/gyro.gltf",
          health: 2500,
        },
      ],
      loot: [
        {
          item: "Clown Cannon",
          itemId: "Weaponizer.ClownCannon",
          minQuantity: 1,
          maxQuantity: 1,
          chance: 1,
          sourceEntities: ["EntityGyro"],
          imageUrl: "/textures/items/clownCannon.png",
        },
        {
          item: "Gimmick",
          itemId: "Weaponizer.Gimmick",
          minQuantity: 1,
          maxQuantity: 1,
          chance: 1,
          sourceEntities: ["EntityGyro"],
          imageUrl: "/textures/items/gimmick.png",
        },
        {
          item: "Spectacle",
          itemId: "Weaponizer.Spectacle",
          minQuantity: 1,
          maxQuantity: 1,
          chance: 1,
          sourceEntities: ["EntityGyro"],
          imageUrl: "/textures/items/spectacle.png",
        },
        {
          item: "Big Top",
          itemId: "Weaponizer.BigTop",
          minQuantity: 1,
          maxQuantity: 1,
          chance: 1,
          sourceEntities: ["EntityGyro"],
          imageUrl: "/textures/items/bigTop.png",
        },
        {
          item: "Clown Cracker",
          itemId: "Weaponizer.ClownCracker",
          minQuantity: 1,
          maxQuantity: 1,
          chance: 1,
          sourceEntities: ["EntityGyro"],
          imageUrl: "/textures/items/clownCracker.png",
        },
      ],
    },
  ],
  biomes: [
    {
      name: "Celeve",
      id: 91,
      imageUrl: "/nvm2_data/img_data/Celeve/biomes/Celeve.png",
    },
  ],
  structures: [
    {
      name: "Toy Tower",
      imageUrl: "/nvm2_data/img_data/Celeve/structures/Toy_Tower.png",
    },
  ],
};
