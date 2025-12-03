export const Lborean = {
  id: "l_borean",
  name: "L’Borean",
  tier: 3,
  prerequisiteDimension: "Gardencia",
  theme:
    "Profundezas aquáticas, vastos mares e estruturas submersas em um oceano sem fim.",
  shortDescription:
    "Uma dimensão subaquática de tier 3, composta por um enorme oceano cheio de corais, plantas aquáticas, fauna marinha e estruturas próprias de exploração submersa.",
  realmstone: {
    obtainHint:
      "Mate um mob de Gardencia que entrou na água de Candied Water enquanto carrega um Blank Realmstone para obter a L’Borean Realmstone.",
    obtainDetails:
      "Em Gardencia, leve um mob até a Candied Water para que ele faça contato, em seguida mate-o enquanto segura um Blank Realmstone. O item é convertido na L’Borean Realmstone, usado no portal para acessar L’Borean.",
    imageUrl: "/dimensions/common_images/Borean_Realmstone.png",
  },
  imageUrl: "/dimensions/common_images/L'Borean.png",
  wikiUrl: "https://adventofascension.fandom.com/wiki/L%27Borean",
  mainObjectives: [
    {
      id: "unlock_l_borean",
      title: "Desbloquear L’Borean",
      description:
        "Obtenha a L’Borean Realmstone em Gardencia conforme a tarefa e ative o portal para acessar L’Borean.",
      imageUrl: "/dimensions/dustopia_images/L'Borean_Realmstone.png",
    },
    {
      id: "explore_ocean_floor",
      title: "Explorar o fundo oceânico",
      description:
        "Navegar pelo oceano profundo da dimensão, descobrir formações de coral grass, coral soil, coral rock e estruturas submersas na camada Y≈31-32.",
      imageUrl: "/dimensions/shyrelands_images/Coral_Grass.png",
    },
    {
      id: "defeat_boss_aquatic",
      title: "Derrotar bosses aquáticos",
      description:
        "Enfrentar bosses específicos de L’Borean que dominam ambiente submerso e fornecem itens de tier 3 ligados à água e corais.",
      imageUrl: "/dimensions/common_images/Hydrolisk.png",
    },
  ],
  secondaryObjectives: [
    {
      id: "fish_coral_biome",
      title: "Pescar no bioma Coral Fields",
      description:
        "Usar a skill Hauling para pescar no bioma Coral Fields e obter itens especiais de L’Borean, como Crystal Box ou Gem Bag.",
      imageUrl: "/dimensions/crystevia_images/Crystal_Box.png",
    },
    {
      id: "build_underwater_base",
      title: "Construir base submersa",
      description:
        "Usar blocos como Coral Rock, Coral Bricks e Coral Soil para criar estruturas de base de exploração subaquática ou habitat em L’Borean.",
      imageUrl: "/dimensions/shyrelands_images/Coral_Bricks.png",
    },
  ],
  progressionNotes: [
    {
      id: "tier3_ocean_final",
      title: "Um dos fins da rota de Precasia",
      description:
        "L’Borean é a dimensão final na linha que se inicia em Precasia, oferecendo temas aquáticos e equipamentos avançados.",
      imageUrl: "/dimensions/common_images/L'Borean.png",
    },
    {
      id: "preparation_for_late_game",
      title: "Preparação para conteúdo end-game",
      description:
        "Os recursos obtidos de L’Borean (corais, blocos aquáticos, pesca) habilitam o jogador a encarar dimensões de tier ainda mais elevado ou desafios de coleção.",
      imageUrl: "/dimensions/dustopia_images/Gem_Bag.png",
    },
  ],
  versionNotes:
    "Informações confirmadas para L’Borean (versão 1.1). Em Tslat 1.1.3 ou versões anteriores podem haver pequenas diferenças, mas a essência aquática, a tarefa de Realmstone e o tier 3 estão corretos.",
  mobs: [
    {
      entity: "EntityCoratee",
      weight: 20,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Borean Ponds",
          imageUrl: "/dimensions/lborean_images/borean_ponds.png",
        },
        {
          name: "Borean Bubble Forest",
          imageUrl:
            "/nvm2_data/img_data/L'borean/biomes/Borean_Bubble_Forest.png",
        },
        {
          name: "Coral Forest",
          imageUrl: "/dimensions/common_images/Coral_Forest.png",
        },
        {
          name: "L'Borean Reds",
          imageUrl: "/nvm2_data/img_data/L'borean/biomes/L%27Borean_Reds.png",
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
      imageUrl: "/textures/mobs/coratee.png",
      model: "/models/lborean/coratee/coratee.gltf",
      health: 45,
    },
    {
      entity: "EntityAngler",
      weight: 20,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Borean Ponds",
          imageUrl: "/dimensions/lborean_images/borean_ponds.png",
        },
        {
          name: "Borean Bubble Forest",
          imageUrl:
            "/nvm2_data/img_data/L'borean/biomes/Borean_Bubble_Forest.png",
        },
        {
          name: "Coral Forest",
          imageUrl: "/dimensions/common_images/Coral_Forest.png",
        },
        {
          name: "L'Borean Reds",
          imageUrl: "/nvm2_data/img_data/L'borean/biomes/L%27Borean_Reds.png",
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
      imageUrl: "/textures/mobs/angler.png",
      model: "/models/lborean/angler/angler.gltf",
      health: 45,
    },
    {
      entity: "EntityCoralon",
      weight: 20,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Borean Ponds",
          imageUrl: "/dimensions/lborean_images/borean_ponds.png",
        },
        {
          name: "Borean Bubble Forest",
          imageUrl:
            "/nvm2_data/img_data/L'borean/biomes/Borean_Bubble_Forest.png",
        },
        {
          name: "Coral Forest",
          imageUrl: "/dimensions/common_images/Coral_Forest.png",
        },
        {
          name: "L'Borean Reds",
          imageUrl: "/nvm2_data/img_data/L'borean/biomes/L%27Borean_Reds.png",
        },
      ],
      loot: [
        {
          item: "Coralstorm Sword",
          itemId: "Weaponizer.CoralstormSword",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/swordCoralstorm.png",
        },
        {
          item: "Pure Rain Stone",
          itemId: "Itemizer.PureRainStone",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/pureRainStone.png",
        },
        {
          item: "Seaside Upgrade Kit",
          itemId: "Itemizer.UpgradeKitSeaside",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/upgradeKitSeaside.png",
        },
        {
          item: "Boreic Banner",
          itemId: "SpecialBlockizer.BoreicBanner",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/banner/boreicBanner.png",
        },
      ],
      imageUrl: "/textures/mobs/coralon.png",
      model: "/models/lborean/coralon/coralon.gltf",
      health: 40,
    },
    {
      entity: "EntityMuncher",
      weight: 20,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Borean Ponds",
          imageUrl: "/dimensions/lborean_images/borean_ponds.png",
        },
        {
          name: "Borean Bubble Forest",
          imageUrl:
            "/nvm2_data/img_data/L'borean/biomes/Borean_Bubble_Forest.png",
        },
        {
          name: "Coral Forest",
          imageUrl: "/dimensions/common_images/Coral_Forest.png",
        },
        {
          name: "L'Borean Reds",
          imageUrl: "/nvm2_data/img_data/L'borean/biomes/L%27Borean_Reds.png",
        },
      ],
      loot: [
        {
          item: "Reefer (Waterlogged)",
          itemId: "Itemizer.ReeferWaterlogged",
          quantity: 1,
          chance: 1,
          imageUrl: "/dimensions/dustopia_images/Reefer_(Waterlogged).png",
        },
        {
          item: "Seaside Upgrade Kit",
          itemId: "Itemizer.UpgradeKitSeaside",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/upgradeKitSeaside.png",
        },
      ],
      imageUrl: "/textures/mobs/muncher.png",
      model: "/models/lborean/muncher/muncher.gltf",
      health: 80,
    },
    {
      entity: "EntitySeaViper",
      weight: 20,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Borean Ponds",
          imageUrl: "/dimensions/lborean_images/borean_ponds.png",
        },
        {
          name: "Borean Bubble Forest",
          imageUrl:
            "/nvm2_data/img_data/L'borean/biomes/Borean_Bubble_Forest.png",
        },
        {
          name: "Coral Forest",
          imageUrl: "/dimensions/common_images/Coral_Forest.png",
        },
        {
          name: "L'Borean Reds",
          imageUrl: "/nvm2_data/img_data/L'borean/biomes/L%27Borean_Reds.png",
        },
      ],
      loot: [
        {
          item: "Aqua Cannon (Waterlogged)",
          itemId: "Itemizer.AquaCannonWaterlogged",
          quantity: 1,
          chance: 1,
          imageUrl: "/dimensions/dustopia_images/Aqua_Cannon_(Waterlogged).png",
        },
        {
          item: "Pure Water Stone",
          itemId: "Itemizer.PureWaterStone",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/pureWaterStone.png",
        },
        {
          item: "L'Borean Gems",
          itemId: "Itemizer.CoinsLborean",
          quantity: 2,
          chance: 1,
          imageUrl: "/textures/items/lboreanGems.png",
        },
        {
          item: "Seaside Upgrade Kit",
          itemId: "Itemizer.UpgradeKitSeaside",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/upgradeKitSeaside.png",
        },
        {
          item: "Boreic Banner",
          itemId: "SpecialBlockizer.BoreicBanner",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/banner/boreicBanner.png",
        },
      ],
      imageUrl: "/textures/mobs/seaviper.png",
      model: "/models/lborean/sea-viper/sea-viper.gltf",
      health: 65,
    },
    {
      entity: "EntityNeptuno",
      weight: 1,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Borean Ponds",
          imageUrl: "/dimensions/lborean_images/borean_ponds.png",
        },
        {
          name: "Borean Bubble Forest",
          imageUrl:
            "/nvm2_data/img_data/L'borean/biomes/Borean_Bubble_Forest.png",
        },
        {
          name: "Coral Forest",
          imageUrl: "/dimensions/common_images/Coral_Forest.png",
        },
        {
          name: "L'Borean Reds",
          imageUrl: "/nvm2_data/img_data/L'borean/biomes/L%27Borean_Reds.png",
        },
      ],
      loot: [
        {
          item: "Coral Greatblade",
          itemId: "Weaponizer.CoralGreatblade",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/coralGreatblade.png",
        },
        {
          item: "L'Borean Realmstone",
          itemId: "Itemizer.RealmstoneBorean",
          quantity: 3,
          chance: 1,
          imageUrl: "/textures/items/realmstoneBorean.png",
        },
      ],
      imageUrl: "/textures/mobs/neptuno.png",
      model: "/models/lborean/neptuno/neptuno.gltf",
      health: 75,
    },
    {
      entity: "GlowingPixon",
      healthMin: 19,
      healthMax: 39,
      weight: 5,
      min: 1,
      max: 6,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Borean Ponds",
          imageUrl: "/dimensions/lborean_images/borean_ponds.png",
        },
        {
          name: "Borean Bubble Forest",
          imageUrl:
            "/nvm2_data/img_data/L'borean/biomes/Borean_Bubble_Forest.png",
        },
        {
          name: "Coral Forest",
          imageUrl: "/dimensions/common_images/Coral_Forest.png",
        },
        {
          name: "L'Borean Reds",
          imageUrl: "/nvm2_data/img_data/L'borean/biomes/L%27Borean_Reds.png",
        },
      ],
      loot: [
        {
          item: "Glowing Infusion Stone",
          itemId: "Itemizer.iStoneGlowing",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/blueprintInfusionAltar.png",
          itemName: "Glowing Infusion Stone",
        },
      ],
      imageUrl: "",
      model: "/models/pixons/Glowing_Pixon.png",
      health: 19,
    },
    {
      entity: "EntityAmphibior",
      imageUrl: "/textures/mobs/amphibior.png",
      model: "/models/lborean/amphibior/amphibior.gltf",
      health: 140,
      weight: 20,
      min: 1,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Borean Bubble Forest",
          imageUrl:
            "/nvm2_data/img_data/L'borean/biomes/Borean_Bubble_Forest.png",
        },
        {
          name: "Borean Ponds",
          imageUrl: "/dimensions/lborean_images/borean_ponds.png",
        },
        {
          name: "Coral Forest",
          imageUrl: "/dimensions/common_images/Coral_Forest.png",
        },
        {
          name: "L'Borean Reds",
          imageUrl: "/nvm2_data/img_data/L'borean/biomes/L%27Borean_Reds.png",
        },
      ],
      loot: [
        {
          item: "Coral Archergun (Waterlogged)",
          itemId: "Itemizer.CoralArchergunWaterlogged",
          quantity: 1,
          chance: 0.016666666666666666,
          imageUrl: "/textures/items/coralArchergun.png",
          itemName: "Coral Archergun (Waterlogged)",
        },
        {
          item: "Pure Coral Stone",
          itemId: "Itemizer.PureCoralStone",
          quantity: 1,
          chance: 0.04,
          imageUrl: "/textures/items/pureCoralStone.png",
          itemName: "Pure Coral Stone",
        },
      ],
    },
    {
      entity: "EntityHydrolon",
      imageUrl: "/textures/mobs/hydrolon.png",
      model: "/models/lborean/hydrolon/hydrolon.gltf",
      health: 45,
      weight: 20,
      min: 1,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Borean Bubble Forest",
          imageUrl:
            "/nvm2_data/img_data/L'borean/biomes/Borean_Bubble_Forest.png",
        },
        {
          name: "Borean Ponds",
          imageUrl: "/dimensions/lborean_images/borean_ponds.png",
        },
        {
          name: "Coral Forest",
          imageUrl: "/dimensions/common_images/Coral_Forest.png",
        },
        {
          name: "L'Borean Reds",
          imageUrl: "/nvm2_data/img_data/L'borean/biomes/L%27Borean_Reds.png",
        },
      ],
      loot: [
        {
          item: "Hydro Stone",
          itemId: "Itemizer.HydroStone",
          quantity: 1,
          chance: 1,
          imageUrl: "/textures/items/hydroStone.png",
          itemName: "Hydro Stone",
        },
      ],
    },
    {
      entity: "EntityMermage",
      imageUrl: "/textures/mobs/mermage.png",
      model: "/models/lborean/mermage/mermage.gltf",
      health: 60,
      weight: 20,
      min: 1,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Borean Bubble Forest",
          imageUrl:
            "/nvm2_data/img_data/L'borean/biomes/Borean_Bubble_Forest.png",
        },
        {
          name: "Borean Ponds",
          imageUrl: "/dimensions/lborean_images/borean_ponds.png",
        },
        {
          name: "Coral Forest",
          imageUrl: "/dimensions/common_images/Coral_Forest.png",
        },
        {
          name: "L'Borean Reds",
          imageUrl: "/nvm2_data/img_data/L'borean/biomes/L%27Borean_Reds.png",
        },
      ],
      loot: [
        {
          item: "Coral Cannon (Waterlogged)",
          itemId: "Itemizer.CoralCannonWaterlogged",
          quantity: 1,
          chance: 0.025,
          imageUrl: "/textures/items/coralCannon.png",
          itemName: "Coral Cannon (Waterlogged)",
        },
        {
          item: "L'Borean Gems",
          itemId: "Itemizer.CoinsLborean",
          quantity: 2,
          chance: 1,
          imageUrl: "/textures/items/lboreanGems.png",
          itemName: "L'Borean Gems",
        },
      ],
    },
    {
      entity: "EntityPoseido",
      imageUrl: "/textures/mobs/poseido.png",
      model: "/models/lborean/poseido/poseido.gltf",
      health: 60,
      weight: 20,
      min: 1,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Borean Bubble Forest",
          imageUrl:
            "/nvm2_data/img_data/L'borean/biomes/Borean_Bubble_Forest.png",
        },
        {
          name: "Borean Ponds",
          imageUrl: "/dimensions/lborean_images/borean_ponds.png",
        },
        {
          name: "Coral Forest",
          imageUrl: "/dimensions/common_images/Coral_Forest.png",
        },
        {
          name: "L'Borean Reds",
          imageUrl: "/nvm2_data/img_data/L'borean/biomes/L%27Borean_Reds.png",
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
          itemId: "Itemizer.RealmstoneFragment1",
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
      entity: "EntityLottomanLborean",
      notes: "Gerado automaticamente por estruturas da dimensão.",
      displayName: "LottomanLborean",
      registeredBiomes: [],
      loot: [],
      trades: [
        {
          input: {
            item: "L'Borean Gems",
            itemId: "Itemizer.CoinsLborean",
            quantity: 10,
            metadata: 1,
          },
          output: {
            item: "Aquatic Staff Totem",
            itemId: "Totemizer.TotemAquaticStaff",
            quantity: 1,
            imageUrl: "/textures/items/totemAquaticStaff.png",
          },
        },
        {
          input: {
            item: "L'Borean Gems",
            itemId: "Itemizer.CoinsLborean",
            quantity: 10,
            metadata: 1,
          },
          output: {
            item: "Tidal Greatblade Totem",
            itemId: "Totemizer.TotemTidalGreatblade",
            quantity: 1,
            imageUrl: "/textures/items/totemTidalGreatblade.png",
          },
        },
        {
          input: {
            item: "L'Borean Gems",
            itemId: "Itemizer.CoinsLborean",
            quantity: 40,
            metadata: 1,
          },
          output: {
            item: "Aquatic Staff Totem",
            itemId: "Totemizer.TotemAquaticStaff",
            quantity: 10,
            imageUrl: "/textures/items/totemAquaticStaff.png",
          },
          additionalInput: {
            item: "L'Borean Gems",
            itemId: "Itemizer.CoinsLborean",
            quantity: 35,
          },
        },
        {
          input: {
            item: "L'Borean Gems",
            itemId: "Itemizer.CoinsLborean",
            quantity: 40,
            metadata: 1,
          },
          output: {
            item: "Tidal Greatblade Totem",
            itemId: "Totemizer.TotemTidalGreatblade",
            quantity: 10,
            imageUrl: "/textures/items/totemTidalGreatblade.png",
          },
          additionalInput: {
            item: "L'Borean Gems",
            itemId: "Itemizer.CoinsLborean",
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
      imageUrl: "",
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
          name: "Borean Ponds",
          imageUrl: "/dimensions/lborean_images/borean_ponds.png",
        },
        {
          name: "Borean Bubble Forest",
          imageUrl:
            "/nvm2_data/img_data/L'borean/biomes/Borean_Bubble_Forest.png",
        },
        {
          name: "Coral Forest",
          imageUrl: "/dimensions/common_images/Coral_Forest.png",
        },
        {
          name: "L'Borean Reds",
          imageUrl: "/nvm2_data/img_data/L'borean/biomes/L%27Borean_Reds.png",
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
      entity: "EntityHaulingMaster",
      displayName: "HaulingMaster",
      weight: 1,
      min: 0,
      max: 1,
      creatureType: "monster",
      registeredBiomes: [
        {
          name: "Borean Ponds",
          imageUrl: "/dimensions/lborean_images/borean_ponds.png",
        },
        {
          name: "Borean Bubble Forest",
          imageUrl:
            "/nvm2_data/img_data/L'borean/biomes/Borean_Bubble_Forest.png",
        },
        {
          name: "Coral Forest",
          imageUrl: "/dimensions/common_images/Coral_Forest.png",
        },
        {
          name: "L'Borean Reds",
          imageUrl: "/nvm2_data/img_data/L'borean/biomes/L%27Borean_Reds.png",
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
            item: "Hauling Boots",
            itemId: "Armorizer.HaulingBoots",
            quantity: 1,
            imageUrl: "/textures/items/bootsHauling.png",
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
            item: "Hauling Leggings",
            itemId: "Armorizer.HaulingLeggings",
            quantity: 1,
            imageUrl: "/dimensions/common_images/Hauling_Leggings.png",
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
            item: "Hauling Chestplate",
            itemId: "Armorizer.HaulingChestplate",
            quantity: 1,
            imageUrl: "/textures/items/chestplateHauling.png",
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
            item: "Hauling Helmet",
            itemId: "Armorizer.HaulingHelmet",
            quantity: 1,
            imageUrl: "/textures/items/helmetHauling.png",
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
      name: "Coral Rock",
      type: "Bloco de construção",
      usage:
        "Forma a base do oceano em L’Borean, utilizada em builds submersas ou decorativas temáticas.",
      imageUrl: "/dimensions/shyrelands_images/Coral_Rock.png",
    },
    {
      name: "Blue Ocealites",
      type: "Item/Bloco especial",
      usage:
        "Bloco especializado de L’Borean usado para efeitos de iluminação ou decoração de mergulho.",
      imageUrl: "/dimensions/shyrelands_images/Blue_Ocealites.png",
    },
  ],
  bosses: [
    {
      name: "Hydrolisk",
      howToSpawn:
        "Encontre o santu?rio do Hydrolisk submerso em L'Borean e use uma Hydro Stone no Hydro Table para chamar a forma shielded; continue ofertando Hydro Stones para enfraquecer o escudo e liberar o Hydrolisk real.",
      notes:
        "Duas fases: a forma Hydrolisk Shielded ? invulner?vel, teleporta e invoca Hydrolon; ao remover o escudo, o Hydrolisk luta normalmente, cura-se na ?gua e espalha blocos de ?gua em volta.",
      imageUrl: "/models/lborean/hydrolisk/hydrolisk.png",
      spawnItems: [
        {
          itemId: "Itemizer.HydroStone",
          item: "Hydro Stone",
          usage:
            "Ofere?a Hydro Stones no Hydro Table do santu?rio para iniciar o encontro e quebrar o escudo.",
          imageUrl: "/textures/items/hydroStone.png",
        },
      ],
      entities: [
        {
          entity: "EntityHydroliskShield",
          displayName: "Hydrolisk (Shielded)",
          imageUrl: "/models/lborean/hydrolisk-shield/hydroliskShielded.png",
          model: "/models/lborean/hydrolisk-shield/hydrolisk-shield.gltf",
          health: 609,
        },
        {
          entity: "EntityHydrolisk",
          displayName: "Hydrolisk",
          imageUrl: "/models/lborean/hydrolisk/hydrolisk.png",
          model: "/models/lborean/hydrolisk/hydrolisk.gltf",
          health: 800,
        },
      ],
      loot: [
        {
          item: "Silver Coin",
          itemId: "Itemizer.SilverCoin",
          minQuantity: 5,
          maxQuantity: 14,
          chance: 1,
          sourceEntities: ["EntityHydrolisk"],
          imageUrl: "/textures/items/coinSilver.png",
        },
        {
          item: "Hydroplate Boots",
          itemId: "Armorizer.HydroplateBoots",
          quantity: 1,
          chance: 0.25,
          sourceEntities: ["EntityHydrolisk"],
          imageUrl: "/textures/items/bootsHydroplate.png",
        },
        {
          item: "Hydroplate Helmet",
          itemId: "Armorizer.HydroplateHelmet",
          quantity: 1,
          chance: 0.25,
          sourceEntities: ["EntityHydrolisk"],
          imageUrl: "/textures/items/helmetHydroplate.png",
        },
        {
          item: "Hydroplate Leggings",
          itemId: "Armorizer.HydroplateLeggings",
          quantity: 1,
          chance: 0.25,
          sourceEntities: ["EntityHydrolisk"],
          imageUrl: "/textures/items/legsHydroplate.png",
        },
        {
          item: "Hydroplate Chestplate",
          itemId: "Armorizer.HydroplateChestplate",
          quantity: 1,
          chance: 0.25,
          sourceEntities: ["EntityHydrolisk"],
          imageUrl: "/textures/items/chestplateHydroplate.png",
        },
      ],
    },
    {
      name: "Dracyon",
      howToSpawn:
        "Combine uma Call of the Drake e use-a em um Dracyon Altar localizado sobre Hydro Platforms para invocar o dragão.",
      notes:
        "Dragão aquático que dispara rajadas mágicas; concede armas como Draco, Boreic Bow e Reef Staff, além de peças Hydroplate.",
      imageUrl: "/dimensions/common_images/Dracyon.png",
      spawnItems: [
        {
          itemId: "Itemizer.CallOfTheDrake",
          item: "Call of the Drake",
          usage:
            "Ofereça o Call of the Drake no Dracyon Altar localizado nos santuários subaquáticos.",
          imageUrl: "/textures/items/callOfTheDrake.png",
        },
      ],
      entities: [
        {
          entity: "EntityDracyon",
          displayName: "Dracyon",
          imageUrl: "/textures/mobs/dracyon.png",
          model: "/models/boss/dracyon/dracyon/dracyon.gltf",
          health: 1700,
        },
      ],
      loot: [
        {
          item: "Draco",
          itemId: "Weaponizer.Draco",
          minQuantity: 1,
          maxQuantity: 1,
          chance: 1,
          sourceEntities: ["EntityDracyon"],
          imageUrl: "/textures/items/draco.png",
        },
        {
          item: "Boreic Bow",
          itemId: "Weaponizer.BoreicBow",
          minQuantity: 1,
          maxQuantity: 1,
          chance: 1,
          sourceEntities: ["EntityDracyon"],
          imageUrl: "/dimensions/common_images/Boreic_Bow.png",
        },
        {
          item: "Reef Staff",
          itemId: "Weaponizer.ReefStaff",
          minQuantity: 1,
          maxQuantity: 1,
          chance: 1,
          sourceEntities: ["EntityDracyon"],
          imageUrl: "/textures/items/reefStaff.png",
        },
      ],
    },
  ],
  biomes: [
    {
      name: "Borean Ponds",
      id: 84,
      imageUrl: "/dimensions/lborean_images/borean_ponds.png",
    },
    {
      name: "Borean Bubble Forest",
      id: 111,
      imageUrl: "/nvm2_data/img_data/L'borean/biomes/Borean_Bubble_Forest.png",
    },
    {
      name: "Coral Forest",
      id: 110,
      imageUrl: "/dimensions/common_images/Coral_Forest.png",
    },
    {
      name: "L'Borean Reds",
      id: 112,
      imageUrl: "/dimensions/common_images/L'Borean_Reds.png",
    },
  ],
  structures: [
    {
      name: "Aquatic Castle",
      imageUrl: "/nvm2_data/img_data/L'borean/structures/Aquatic_Castle.png",
    },
    {
      name: "Dracyon Fountain",
      imageUrl: "/nvm2_data/img_data/L'borean/structures/Dracyon_fountain.png",
    },
  ],
};
