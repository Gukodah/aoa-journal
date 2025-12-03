import { Abyss } from "./Abyss.jsx";
import { Acientcavern } from "./Acientcavern.jsx";
import { Barathos } from "./Barathos.jsx";
import { Candyland } from "./Candyland.jsx";
import { Celeve } from "./Celeve.jsx";
import { Creeponia } from "./Creeponia.jsx";
import { Crystevia } from "./Crystevia.jsx";
import { Deeplands } from "./Deeplands.jsx";
import { Dimensions } from "./Dimensions.jsx";
import { Dustopia } from "./Dustopia.jsx";
import { Gardencia } from "./Gardencia.jsx";
import { Greckon } from "./Greckon.jsx";
import { Haven } from "./Haven.jsx";
import { Immortalis } from "./Immortalis.jsx";
import { Iromine } from "./Iromine.jsx";
import { Lborean } from "./Lborean.jsx";
import { Lelyetia } from "./Lelyetia.jsx";
import { Lunalus } from "./Lunalus.jsx";
import { Mysterium } from "./Mysterium.jsx";
import { Nether } from "./Nether.jsx";
import { Overworld } from "./Overworld.jsx";
import { Precasia } from "./Precasia.jsx";
import { Runandor } from "./Runandor.jsx";
import { Shyrelands } from "./Shyrelands.jsx";
import { VoxPonds } from "./VoxPonds.jsx";

const dimensionSources = [
  Abyss,
  Acientcavern,
  Barathos,
  Candyland,
  Celeve,
  Creeponia,
  Crystevia,
  Deeplands,
  Dimensions,
  Dustopia,
  Gardencia,
  Greckon,
  Haven,
  Immortalis,
  Iromine,
  Lborean,
  Lelyetia,
  Lunalus,
  Mysterium,
  Nether,
  Overworld,
  Precasia,
  Runandor,
  Shyrelands,
  VoxPonds,
];

const slugify = (value = "") =>
  value
    .replace(/^DimensionOrganizer\./i, "")
    .replace(/\s+/g, "-")
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/[^a-z0-9-]/gi, "-")
    .replace(/-+/g, "-")
    .toLowerCase();

const humanize = (value = "") =>
  value
    .replace(/^DimensionOrganizer\./i, "")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/_/g, " ")
    .trim();

const hydrateBiome = (biome = {}, dimension = {}, index = 0) => {
  const field = biome.field || biome.id || `${dimension.id}.biome.${index}`;
  const name = biome.name || humanize(field);
  const slugSource = biome.imageSlug || name || field;
  const imageUrl = biome.imageUrl || `/biomes/${slugify(slugSource)}.png`;

  return {
    ...biome,
    field,
    name,
    imageUrl,
    dimensionId: dimension.id,
    dimensionName: dimension.name,
  };
};

export const dimensions = dimensionSources;

export const biomesById = dimensionSources.reduce((acc, dimension) => {
  (dimension.biomes || []).forEach((biome, index) => {
    const hydrated = hydrateBiome(biome, dimension, index);
    if (hydrated.field) {
      acc[hydrated.field] = hydrated;
    }
  });
  return acc;
}, {});

export const getBiomeById = (id) => (id ? biomesById[id] : undefined);
