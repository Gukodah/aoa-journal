export const Dustopia = {
  id: "dustopia",
  name: "Dustopia",
  tier: 3,
  prerequisiteDimension: "The Abyss",
  theme:
    "Mundo imerso em escuridão quase total, tons acinzentados/preto, vegetação e blocos quase indistintos sem iluminação; atmosfera sombria e hostil.",
  shortDescription:
    "Uma dimensão de tier 3, sem ciclo de dia/noite, com visibilidade mínima, árvores e blocos negros, mobs que se confundem com o ambiente e estruturas ritualísticas de invocação de bosses.",
  realmstone: {
    obtainHint:
      "Com um Blank Realmstone no inventário e sob efeito de Night Vision, invoque o boss Shadowlord — isso converte o Blank Realmstone em Dustopia Realmstone. ",
    obtainDetails:
      "Na dimensão The Abyss, aplique Night Vision ao jogador, carregue um Blank Realmstone, invoque Shadowlord; ao derrotá-lo, o Blank é consumido e substituído pela Dustopia Realmstone. Use-o em um portal de AoA para acessar Dustopia. ",
    imageUrl: "/dimensions/dustopia_images/Dustopia_Realmstone.png",
  },
  imageUrl: "/dimensions/dustopia_images/Dustopia_(Night_Vision).png",
  wikiUrl: "https://adventofascension.fandom.com/wiki/Dustopia",
  mainObjectives: [
    {
      id: "unlock_dustopia",
      title: "Desbloquear Dustopia",
      description:
        "Obter a Dustopia Realmstone seguindo a tarefa (Blank Realmstone + Night Vision + Shadowlord) e ativar o portal para entrar na dimensão.",
      imageUrl: "/dimensions/dustopia_images/Dustopia_Realmstone.png",
    },
    {
      id: "survive_dark_landscape",
      title: "Sobreviver ao mundo escuro",
      description:
        "Explorar a paisagem quase totalmente escura, onde os blocos, árvores e mobs possuem tons tão escuros que a visibilidade é extremamente limitada — equipar Night Vision ou fontes de luz e navegar com cautela. ",
      imageUrl: "/dimensions/dustopia_images/Dustopia_(Night_Vision).png",
    },
    {
      id: "defeat_primordial_five",
      title: "Derrotar os Primordial Five",
      description:
        "Acender vários Dustopian Lamps com Darkly Powder ao redor de um Primordial Shrine e ativar o altar para invocar o grupo de cinco bosses (‘Primordial Five’) — derrotá-los constitui o desafio principal da dimensão. ",
      imageUrl: "/dimensions/shyrelands_images/Primordial_Shrine.png",
    },
  ],
  secondaryObjectives: [
    {
      id: "explore_primordial_villages",
      title: "Explorar vilarejos Primordiais",
      description:
        "Localizar e visitar estruturas Primordial Villages que contêm NPCs como Primordial Guide, Merchant, Spellbinder e Wizard, para trocar itens, acessar serviços e obter lore da dimensão. ",
      imageUrl: "/dimensions/common_images/Primordial_Village.png",
    },
    {
      id: "farm_darkly_resources",
      title: "Farmar Darkly Powder e Upgrade Kits",
      description:
        "Derrotar mobs hostis e bosses em Dustopia para conseguir itens da Dustopia Table — principalmente Darkly Powder e Darkly Upgrade Kit, que alimentam a progressão de tier 3. ",
      imageUrl: "/dimensions/dustopia_images/Darkly_Powder.png",
    },
    {
      id: "collect_decorative_blocks",
      title: "Coletar blocos decorativos sombrios",
      description:
        "Recolher blocos temáticos da dimensão como Darkened Rock, Blackened Soil, Dawn Log/Leaves, Dawnwood Bars, Darkwash Bricks etc., para construção de bases ou projetos com a estética ‘mundo em ruína’ de Dustopia. ",
      imageUrl: "/dimensions/common_images/Darkwash_Bricks.png",
    },
  ],
  progressionNotes: [
    {
      id: "tier3_darkness",
      title: "Dimensão de tier 3 com visibilidade mínima",
      description:
        "Dustopia representa um dos maiores saltos de dificuldade — jogador deve ter equipamento de combate, mobilidade, resistência e preparação para lidar com ambiente hostil e falta quase total de luz natural. ",
      imageUrl: "/dimensions/dustopia_images/Dustopia_(Night_Vision).png",
    },
    {
      id: "gateway_late_game_dark",
      title: "Porta para conteúdo avançado/‘end-game’",
      description:
        "Os recursos, loot e bosses de Dustopia funcionam como ponte para conteúdos posteriores ou dimensões especializadas, permitindo ao jogador finalmente se equipar para o fim de jogo. ",
      imageUrl: "/dimensions/common_images/Primordial_Five.png",
    },
  ],
  versionNotes:
    "De acordo com a wiki, a dimensão Dustopia foi listada na versão 1.1.  Em versões como Nevermine 2 (Tslat 1.1.3) para Minecraft 1.7.10, a mecânica básica (acesso via Shadowlord+Night Vision, tema escuro, Primordial Five) já existe, mas nomes exatos de blocos, chance de drops e geração podem variar.",
  mobs: [
    {
      entity: "EntityPrimordialGuide",
      health: 1000,
      notes: "Gerado automaticamente por estruturas da dimensão.",
      registeredBiomes: [],
      loot: [],
      imageUrl: "/textures/mobs/primordialGuide.png",
      model: "/models/npc/primordial/primordial-guide/primordial-guide.gltf",
    },
    {
      entity: "EntityBasilisk",
      weight: 20,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Dustopian Forest",
          imageUrl: "/dimensions/dustopia_images/Dustopia_(Night_Vision).png",
        },
        {
          name: "Dustopian Marsh",
          imageUrl: "/dimensions/dustopia_images/Dustopian_Marsh.png",
        },
        {
          name: "Dustopian Plains",
          imageUrl: "/dimensions/dustopia_images/Dustopian_Plains.png",
        },
      ],
      loot: [
        {
          item: "Duster",
          itemId: "Weaponizer.Duster",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/duster.png",
        },
        {
          item: "Dustopia Gems",
          itemId: "Itemizer.CoinsDustopia",
          quantity: 2,
          chance: 1,
          imageUrl: "/textures/items/dustopiaGems.png",
        },
        {
          item: "Darkly Upgrade Kit",
          itemId: "Itemizer.UpgradeKitDarkly",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/upgradeKitDarkly.png",
        },
      ],
      imageUrl: "/textures/mobs/basilisk.png",
      model: "/models/dustopia/basilisk/basilisk.gltf",
      health: 60,
    },
    {
      entity: "EntityLostSoul",
      weight: 20,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Dustopian Forest",
          imageUrl: "/dimensions/dustopia_images/Dustopia_(Night_Vision).png",
        },
        {
          name: "Dustopian Marsh",
          imageUrl: "/dimensions/dustopia_images/Dustopian_Marsh.png",
        },
        {
          name: "Dustopian Plains",
          imageUrl: "/dimensions/dustopia_images/Dustopian_Plains.png",
        },
      ],
      loot: [
        {
          item: "Dustopia Gems",
          itemId: "Itemizer.CoinsDustopia",
          quantity: 2,
          chance: 1,
          imageUrl: "/textures/items/dustopiaGems.png",
        },
        {
          item: "Darkly Upgrade Kit",
          itemId: "Itemizer.UpgradeKitDarkly",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/upgradeKitDarkly.png",
        },
        {
          item: "Dustopian Banner",
          itemId: "SpecialBlockizer.DustopianBanner",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/banner/dustopianBanner.png",
        },
        {
          item: "Shyrelands Realmstone",
          itemId: "Itemizer.RealmstoneShyrelands",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/realmstoneShyrelands.png",
        },
      ],
      imageUrl: "/textures/mobs/lostsoul.png",
      model: "/models/dustopia/lost-soul/lost-soul.gltf",
      health: 60,
    },
    {
      entity: "EntityDevourer",
      weight: 20,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Dustopian Forest",
          imageUrl: "/dimensions/dustopia_images/Dustopia_(Night_Vision).png",
        },
        {
          name: "Dustopian Marsh",
          imageUrl: "/dimensions/dustopia_images/Dustopian_Marsh.png",
        },
        {
          name: "Dustopian Plains",
          imageUrl: "/dimensions/dustopia_images/Dustopian_Plains.png",
        },
      ],
      loot: [
        {
          item: "Harvester Sword",
          itemId: "Weaponizer.HarvesterSword",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/swordHarvester.png",
        },
      ],
      imageUrl: "/textures/mobs/devourer.png",
      model: "/models/dustopia/devourer/devourer.gltf",
      health: 40,
    },
    {
      entity: "EntityDusteiva",
      weight: 20,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Dustopian Forest",
          imageUrl: "/dimensions/dustopia_images/Dustopia_(Night_Vision).png",
        },
        {
          name: "Dustopian Marsh",
          imageUrl: "/dimensions/dustopia_images/Dustopian_Marsh.png",
        },
        {
          name: "Dustopian Plains",
          imageUrl: "/dimensions/dustopia_images/Dustopian_Plains.png",
        },
      ],
      loot: [
        {
          item: "Dark Destroyer",
          itemId: "Weaponizer.DarkDestroyer",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/darkDestroyer.png",
        },
      ],
      imageUrl: "/textures/mobs/dusteiva.png",
      model: "/models/dustopia/dusteiva/dusteiva.gltf",
      health: 60,
    },
    {
      entity: "EntityDuston",
      weight: 20,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Dustopian Forest",
          imageUrl: "/dimensions/dustopia_images/Dustopia_(Night_Vision).png",
        },
        {
          name: "Dustopian Marsh",
          imageUrl: "/dimensions/dustopia_images/Dustopian_Marsh.png",
        },
        {
          name: "Dustopian Plains",
          imageUrl: "/dimensions/dustopia_images/Dustopian_Plains.png",
        },
      ],
      loot: [
        {
          item: "Dustopia Gems",
          itemId: "Itemizer.CoinsDustopia",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/dustopiaGems.png",
        },
      ],
      imageUrl: "/textures/mobs/duston.png",
      model: "/models/dustopia/duston/duston.gltf",
      health: 30,
    },
    {
      entity: "EntityLurker",
      weight: 20,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Dustopian Forest",
          imageUrl: "/dimensions/dustopia_images/Dustopia_(Night_Vision).png",
        },
        {
          name: "Dustopian Marsh",
          imageUrl: "/dimensions/dustopia_images/Dustopian_Marsh.png",
        },
        {
          name: "Dustopian Plains",
          imageUrl: "/dimensions/dustopia_images/Dustopian_Plains.png",
        },
      ],
      loot: [
        {
          item: "Dustopian Banner",
          itemId: "SpecialBlockizer.DustopianBanner",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/banner/dustopianBanner.png",
        },
        {
          item: "Darkly Upgrade Kit",
          itemId: "Itemizer.UpgradeKitDarkly",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/upgradeKitDarkly.png",
        },
      ],
      imageUrl: "/textures/mobs/lurker.png",
      model: "/models/dustopia/lurker/lurker.gltf",
      health: 75,
    },
    {
      entity: "EntityStalker",
      weight: 20,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Dustopian Forest",
          imageUrl: "/dimensions/dustopia_images/Dustopia_(Night_Vision).png",
        },
        {
          name: "Dustopian Marsh",
          imageUrl: "/dimensions/dustopia_images/Dustopian_Marsh.png",
        },
        {
          name: "Dustopian Plains",
          imageUrl: "/dimensions/dustopia_images/Dustopian_Plains.png",
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
      imageUrl: "/textures/mobs/stalker.png",
      model: "/models/dustopia/stalker/stalker.gltf",
      health: 60,
    },
    {
      entity: "EntityStalkerPrime",
      weight: 1,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Dustopian Forest",
          imageUrl: "/dimensions/dustopia_images/Dustopia_(Night_Vision).png",
        },
        {
          name: "Dustopian Marsh",
          imageUrl: "/dimensions/dustopia_images/Dustopian_Marsh.png",
        },
        {
          name: "Dustopian Plains",
          imageUrl: "/dimensions/dustopia_images/Dustopian_Plains.png",
        },
      ],
      loot: [
        {
          item: "Dustometer",
          itemId: "Weaponizer.Dustometer",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/dustometer.png",
        },
        {
          item: "Dustopia Realmstone",
          itemId: "Itemizer.RealmstoneDustopia",
          quantity: 3,
          chance: 1,
          imageUrl: "/textures/items/realmstoneDustopia.png",
        },
      ],
      imageUrl: "/textures/mobs/stalkerprime.png",
      model: "/models/dustopia/stalker-prime/stalker-prime.gltf",
      health: 320,
    },
    {
      entity: "RadiantPixon",
      healthMin: 19,
      healthMax: 39,
      weight: 5,
      min: 1,
      max: 6,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Dustopian Forest",
          imageUrl: "/dimensions/dustopia_images/Dustopia_(Night_Vision).png",
        },
        {
          name: "Dustopian Marsh",
          imageUrl: "/dimensions/dustopia_images/Dustopian_Marsh.png",
        },
        {
          name: "Dustopian Plains",
          imageUrl: "/dimensions/dustopia_images/Dustopian_Plains.png",
        },
      ],
      loot: [
        {
          item: "Radiant Infusion Stone",
          itemId: "Itemizer.iStoneRadiant",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/blueprintInfusionAltar.png",
          itemName: "Radiant Infusion Stone",
        },
      ],
      imageUrl: "",
      model: "/models/pixons/Radiant_Pixon.png",
      health: 19,
    },
    {
      entity: "EntityArkzyne",
      imageUrl: "/textures/mobs/arkzyne.png",
      model: "/models/dustopia/arkzyne/arkzyne.gltf",
      health: 75,
      weight: 20,
      min: 1,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Dustopian Forest",
          imageUrl: "/dimensions/dustopia_images/Dustopia_(Night_Vision).png",
        },
        {
          name: "Dustopian Marsh",
          imageUrl: "/dimensions/dustopia_images/Dustopian_Marsh.png",
        },
        {
          name: "Dustopian Plains",
          imageUrl: "/dimensions/dustopia_images/Dustopian_Plains.png",
        },
      ],
      loot: [
        {
          item: "Silver Coin",
          itemId: "Itemizer.SilverCoin",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/blocks/silverGrass.png",
          itemName: "Silver Coin",
        },
        {
          item: "Sabbath",
          itemId: "Weaponizer.Sabbath",
          quantity: 1,
          chance: 0.01,
          imageUrl: "/textures/items/sabbath.png",
          itemName: "Sabbath",
        },
      ],
    },
    {
      entity: "EntityCrusilisk",
      imageUrl: "/textures/mobs/crusilisk.png",
      model: "/models/dustopia/crusilisk/crusilisk.gltf",
      health: 250,
      weight: 20,
      min: 1,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Dustopian Forest",
          imageUrl: "/dimensions/dustopia_images/Dustopia_(Night_Vision).png",
        },
        {
          name: "Dustopian Marsh",
          imageUrl: "/dimensions/dustopia_images/Dustopian_Marsh.png",
        },
        {
          name: "Dustopian Plains",
          imageUrl: "/dimensions/dustopia_images/Dustopian_Plains.png",
        },
      ],
      loot: [
        {
          item: "Silver Coin",
          itemId: "Itemizer.SilverCoin",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/blocks/silverGrass.png",
          itemName: "Silver Coin",
        },
        {
          item: "Beamer",
          itemId: "Weaponizer.Beamer",
          quantity: 1,
          chance: 0.01,
          imageUrl: "/textures/items/beamer.png",
          itemName: "Beamer",
        },
      ],
    },
    {
      entity: "EntityDustStrider",
      imageUrl: "/textures/mobs/duststrider.png",
      model: "/models/dustopia/dust-strider/dust-strider.gltf",
      health: 50,
      weight: 20,
      min: 1,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Dustopian Forest",
          imageUrl: "/dimensions/dustopia_images/Dustopia_(Night_Vision).png",
        },
        {
          name: "Dustopian Marsh",
          imageUrl: "/dimensions/dustopia_images/Dustopian_Marsh.png",
        },
        {
          name: "Dustopian Plains",
          imageUrl: "/dimensions/dustopia_images/Dustopian_Plains.png",
        },
      ],
      loot: [
        {
          item: "Uncharged Orb",
          itemId: "Itemizer.UnchargedOrb",
          quantity: 1,
          chance: 0.03333333333333333,
          imageUrl: "/textures/items/unchargedOrb.png",
          itemName: "Uncharged Orb",
        },
      ],
    },
    {
      entity: "EntityMerkyre",
      imageUrl: "/textures/mobs/merkyre.png",
      model: "/models/dustopia/merkyre/merkyre.gltf",
      health: 75,
      weight: 20,
      min: 1,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Dustopian Forest",
          imageUrl: "/dimensions/dustopia_images/Dustopia_(Night_Vision).png",
        },
        {
          name: "Dustopian Marsh",
          imageUrl: "/dimensions/dustopia_images/Dustopian_Marsh.png",
        },
        {
          name: "Dustopian Plains",
          imageUrl: "/dimensions/dustopia_images/Dustopian_Plains.png",
        },
      ],
      loot: [
        {
          item: "Primordial Skull",
          itemId: "Itemizer.PrimordialSkull",
          quantity: 1,
          chance: 0.2,
          imageUrl: "/textures/items/primordialSkull.png",
          itemName: "Primordial Skull",
        },
      ],
    },
  ],
  npcs: [
    {
      entity: "EntityLottomanDustopia",
      notes: "Gerado automaticamente por estruturas da dimensão.",
      displayName: "LottomanDustopia",
      registeredBiomes: [],
      loot: [],
      trades: [
        {
          input: {
            item: "Dustopia Gems",
            itemId: "Itemizer.CoinsDustopia",
            quantity: 10,
            metadata: 1,
            imageUrl: "/textures/items/dustopiaGems.png",
          },
          output: {
            item: "Terminator Totem",
            itemId: "Totemizer.TotemTerminator",
            quantity: 1,
            imageUrl: "/textures/items/totemTerminator.png",
          },
        },
        {
          input: {
            item: "Dustopia Gems",
            itemId: "Itemizer.CoinsDustopia",
            quantity: 10,
            metadata: 1,
            imageUrl: "/textures/items/dustopiaGems.png",
          },
          output: {
            item: "Daybreaker Totem",
            itemId: "Totemizer.TotemDaybreaker",
            quantity: 1,
            imageUrl: "/textures/items/totemDaybreaker.png",
          },
        },
        {
          input: {
            item: "Dustopia Gems",
            itemId: "Itemizer.CoinsDustopia",
            quantity: 40,
            metadata: 1,
            imageUrl: "/textures/items/dustopiaGems.png",
          },
          output: {
            item: "Terminator Totem",
            itemId: "Totemizer.TotemTerminator",
            quantity: 10,
            imageUrl: "/textures/items/totemTerminator.png",
          },
          additionalInput: {
            item: "Dustopia Gems",
            itemId: "Itemizer.CoinsDustopia",
            quantity: 35,
            imageUrl: "/textures/items/dustopiaGems.png",
          },
        },
        {
          input: {
            item: "Dustopia Gems",
            itemId: "Itemizer.CoinsDustopia",
            quantity: 40,
            metadata: 1,
            imageUrl: "/textures/items/dustopiaGems.png",
          },
          output: {
            item: "Daybreaker Totem",
            itemId: "Totemizer.TotemDaybreaker",
            quantity: 10,
            imageUrl: "/textures/items/totemDaybreaker.png",
          },
          additionalInput: {
            item: "Dustopia Gems",
            itemId: "Itemizer.CoinsDustopia",
            quantity: 35,
            imageUrl: "/textures/items/dustopiaGems.png",
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
      imageUrl: "/textures/mobs/lottomanDustopia.png",
      model: "/models/npc/lottoman/lottoman.gltf",
    },
    {
      entity: "EntityPrimordialBanker",
      notes: "Gerado automaticamente por estruturas da dimensão.",
      displayName: "PrimordialBanker",
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
        {
          input: {
            item: "Ghostly Stone",
            itemId: "Itemizer.GhostStone",
            quantity: 32,
            metadata: 1,
            imageUrl: "/textures/items/ghostStone.png",
          },
          output: {
            item: "Gold Coin",
            itemId: "Itemizer.GoldCoin",
            quantity: 1,
            imageUrl: "/textures/items/coinGold.png",
          },
        },
      ],
      imageUrl: "/textures/mobs/primordialBanker.png",
      model: "/models/npc/primordial-npc/primordial-npc.gltf",
    },
    {
      entity: "EntityPrimordialMerchant",
      notes: "Gerado automaticamente por estruturas da dimensão.",
      displayName: "PrimordialMerchant",
      registeredBiomes: [],
      loot: [],
      trades: [
        {
          input: {
            item: "Silver Coin",
            itemId: "Itemizer.SilverCoin",
            quantity: 1,
            metadata: 1,
            imageUrl: "/textures/items/coinSilver.png",
          },
          output: {
            item: "Items.beef",
            itemId: "Items.beef",
            quantity: 2,
            imageUrl: "/textures/items/halyconBeefCooked.png",
          },
        },
        {
          input: {
            item: "Primordial Skull",
            itemId: "Itemizer.PrimordialSkull",
            quantity: 5,
            metadata: 1,
            imageUrl: "/textures/items/primordialSkull.png",
          },
          output: {
            item: "Primordial Dust",
            itemId: "Itemizer.PrimordialDust",
            quantity: 1,
            imageUrl: "/textures/items/primordialDust.png",
          },
        },
        {
          input: {
            item: "Gold Coin",
            itemId: "Itemizer.GoldCoin",
            quantity: 3,
            metadata: 1,
            imageUrl: "/textures/items/coinGold.png",
          },
          output: {
            item: "Rosite Ingot",
            itemId: "Itemizer.IngotRosite",
            quantity: 1,
            imageUrl: "/textures/items/ingotRosite.png",
          },
        },
      ],
      imageUrl: "/textures/mobs/primordialMerchant.png",
      model: "/models/npc/primordial-npc/primordial-npc.gltf",
    },
    {
      entity: "EntityPrimordialSpellbinder",
      notes: "Gerado automaticamente por estruturas da dimensão.",
      displayName: "PrimordialSpellbinder",
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
            item: "Blockizer.OrbDusk",
            itemId: "Blockizer.OrbDusk",
            quantity: 1,
            imageUrl: "/textures/blocks/orbDusk.png",
          },
          additionalInput: {
            item: "Uncharged Orb",
            itemId: "Itemizer.UnchargedOrb",
            quantity: 1,
            imageUrl: "/textures/items/unchargedOrb.png",
          },
        },
        {
          input: {
            item: "Gold Coin",
            itemId: "Itemizer.GoldCoin",
            quantity: 25,
            metadata: 1,
            imageUrl: "/textures/items/coinGold.png",
          },
          output: {
            item: "Blockizer.OrbDarklight",
            itemId: "Blockizer.OrbDarklight",
            quantity: 1,
            imageUrl: "/textures/blocks/orbDarklight.png",
          },
          additionalInput: {
            item: "Uncharged Orb",
            itemId: "Itemizer.UnchargedOrb",
            quantity: 1,
            imageUrl: "/textures/items/unchargedOrb.png",
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
            item: "Blockizer.OrbSunfire",
            itemId: "Blockizer.OrbSunfire",
            quantity: 1,
            imageUrl: "/textures/blocks/orbSunfire.png",
          },
          additionalInput: {
            item: "Uncharged Orb",
            itemId: "Itemizer.UnchargedOrb",
            quantity: 1,
            imageUrl: "/textures/items/unchargedOrb.png",
          },
        },
      ],
      imageUrl: "/textures/mobs/primordialSpellbinder.png",
      model: "/models/npc/primordial-npc/primordial-npc.gltf",
    },
    {
      entity: "EntityPrimordialWizard",
      notes: "Gerado automaticamente por estruturas da dimensão.",
      displayName: "PrimordialWizard",
      registeredBiomes: [],
      loot: [],
      trades: [
        {
          input: {
            item: "Silver Coin",
            itemId: "Itemizer.SilverCoin",
            quantity: 1,
            metadata: 1,
            imageUrl: "/textures/items/coinSilver.png",
          },
          output: {
            item: "Wind Rune",
            itemId: "Itemizer.WindRune",
            quantity: 40,
            imageUrl: "/textures/items/runeWind.png",
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
            item: "Fire Rune",
            itemId: "Itemizer.FireRune",
            quantity: 40,
            imageUrl: "/textures/items/runeFire.png",
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
            item: "Wither Rune",
            itemId: "Itemizer.WitherRune",
            quantity: 30,
            imageUrl: "/textures/items/runeWither.png",
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
            item: "Storm Rune",
            itemId: "Itemizer.StormRune",
            quantity: 30,
            imageUrl: "/textures/items/runeStorm.png",
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
            item: "Energy Rune",
            itemId: "Itemizer.EnergyRune",
            quantity: 30,
            imageUrl: "/textures/items/runeEnergy.png",
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
            item: "Kinetic Rune",
            itemId: "Itemizer.KineticRune",
            quantity: 30,
            imageUrl: "/textures/items/runeKinetic.png",
          },
        },
      ],
      imageUrl: "/textures/mobs/primordialWizard.png",
      model: "/models/npc/primordial-npc/primordial-npc.gltf",
    },
  ],
  generatedOres: [],
  resources: [
    {
      name: "Darkly Powder",
      type: "Item de recurso",
      usage:
        "Usado para acender Dustopian Lamps em redor de Primordial Shrines, requisito para invocação dos bosses Primordial Five. ",
      imageUrl: "/dimensions/dustopia_images/Darkly_Powder.png",
    },
    {
      name: "Darkly Upgrade Kit",
      type: "Kit de upgrade",
      usage:
        "Drop raro da Dustopia Table; usado para melhorar equipamentos temáticos da dimensão sombria. ",
      imageUrl: "/dimensions/dustopia_images/Darkly_Upgrade_Kit.png",
    },
    {
      name: "Dawnwood Bars",
      type: "Bloco de construção",
      usage:
        "Bloco decorativo que aparece nas estruturas de Dustopia, com visual escuro e utilitário para construções que combinem com estilo da dimensão. ",
      imageUrl: "/dimensions/shyrelands_images/Dawnwood_Bars.png",
    },
  ],
  bosses: [
    {
      name: "Primordial Five",
      howToSpawn:
        "Acenda várias Dustopian Lamps com Darkly Powder ao redor de um Primordial Shrine, então clique no altar para iniciar a invocação. ",
      notes:
        "Agrupamento de cinco bosses de nível elevado, cada um associado à temática sombria da dimensão. Derrotá-los fornece loot de nível alto e desbloqueia conquistas relacionadas à dimensão.",
      imageUrl: "/dimensions/common_images/Primordial_Five.png",
      entities: [
        {
          entity: "EntityHarkos",
          displayName: "Harkos",
          imageUrl: "/textures/mobs/harkos.png",
          model: "/models/boss/primordialfive/harkos/harkos.gltf",
          health: 1300,
        },
        {
          entity: "EntityKajaros",
          displayName: "Kajaros",
          imageUrl: "/textures/mobs/kajaros.png",
          model: "/models/boss/primordialfive/kajaros/kajaros.gltf",
          health: 1750,
        },
        {
          entity: "EntityMiskel",
          displayName: "Miskel",
          imageUrl: "/textures/mobs/miskel.png",
          model: "/models/boss/primordialfive/miskel/miskel.gltf",
          health: 1300,
        },
        {
          entity: "EntityOkazor",
          displayName: "Okazor",
          imageUrl: "/textures/mobs/okazor.png",
          model: "/models/boss/primordialfive/okazor/okazor.gltf",
          health: 1200,
        },
        {
          entity: "EntityRaxxan",
          displayName: "Raxxan",
          imageUrl: "/textures/mobs/raxxan.png",
          model: "/models/boss/primordialfive/raxxan/raxxan.gltf",
          health: 1000,
        },
      ],
      loot: [
        {
          item: "Primordial Bow",
          itemId: "Weaponizer.PrimordialBow",
          minQuantity: 1,
          maxQuantity: 1,
          chance: 1,
          sourceEntities: ["EntityOkazor"],
          imageUrl: "/dimensions/common_images/Primordial_Bow.png",
        },
        {
          item: "Primordial Staff",
          itemId: "Weaponizer.PrimordialStaff",
          minQuantity: 1,
          maxQuantity: 1,
          chance: 1,
          sourceEntities: ["EntityOkazor"],
          imageUrl: "/textures/items/primordialStaff.png",
        },
        {
          item: "Primordial Greatblade",
          itemId: "Weaponizer.PrimordialGreatblade",
          minQuantity: 1,
          maxQuantity: 1,
          chance: 1,
          sourceEntities: ["EntityOkazor"],
          imageUrl: "/textures/items/primordialGreatblade.png",
        },
        {
          item: "Primordial Helmet",
          itemId: "Armorizer.PrimordialHelmet",
          minQuantity: 1,
          maxQuantity: 1,
          chance: 1,
          sourceEntities: ["EntityOkazor"],
          imageUrl: "/dimensions/common_images/Primordial_Helmet.png",
        },
        {
          item: "Primordial Chestplate",
          itemId: "Armorizer.PrimordialChestplate",
          minQuantity: 1,
          maxQuantity: 1,
          chance: 1,
          sourceEntities: ["EntityOkazor"],
          imageUrl: "/dimensions/common_images/Primordial_Chestplate.png",
        },
        {
          item: "Primordial Leggings",
          itemId: "Armorizer.PrimordialLeggings",
          minQuantity: 1,
          maxQuantity: 1,
          chance: 1,
          sourceEntities: ["EntityOkazor"],
          imageUrl: "/dimensions/common_images/Primordial_Leggings.png",
        },
        {
          item: "Primordial Boots",
          itemId: "Armorizer.PrimordialBoots",
          minQuantity: 1,
          maxQuantity: 1,
          chance: 1,
          sourceEntities: ["EntityOkazor"],
          imageUrl: "/dimensions/common_images/Primordial_Boots.png",
        },
      ],
    },
  ],
  biomes: [
    {
      name: "Dustopian Forest",
      id: 83,
      imageUrl: "/nvm2_data/img_data/Dustopia/biomes/Dustopia.png",
    },
    {
      name: "Dustopian Marsh",
      id: 115,
      imageUrl: "/nvm2_data/img_data/Dustopia/biomes/Dustopia.png",
    },
    {
      name: "Dustopian Plains",
      id: 116,
      imageUrl: "/nvm2_data/img_data/Dustopia/biomes/Dustopian_Plains.png",
    },
  ],
  structures: [
    {
      name: "Arkzyne Outpost",
      imageUrl: "/nvm2_data/img_data/Dustopia/structures/Arkzyne_Outpost.png",
    },
    {
      name: "Crusilisk Cave",
      imageUrl: "/nvm2_data/img_data/Dustopia/structures/Crusilisk_Cave.png",
    },
    {
      name: "Dustopian Village",
      imageUrl: "/nvm2_data/img_data/Dustopia/structures/Dustopia.png",
    },
    {
      name: "Lotto Cage",
      imageUrl: "/nvm2_data/img_data/Dustopia/structures/Lotto_Cage.png",
    },
    {
      name: "Merkyre Tower",
      imageUrl: "/nvm2_data/img_data/Dustopia/structures/Merkyre_Tower.png",
    },
    {
      name: "Primordial Shrine",
      imageUrl: "/dimensions/dustopia_images/Primordial_Shrine.jpg",
    },
  ],
};
