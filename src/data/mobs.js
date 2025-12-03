import { dimensions } from "./dimensions.js";

const dimensionSources = dimensions;

const isNormalMob = (entry = {}) => {
  // Skip entries that look like grouped boss configs or NPC configs
  if (entry.isBoss || entry.isNpc || entry.type === "boss" || entry.type === "npc") {
    return false;
  }

  // Some dimensions may store bosses in a separate `bosses` array; keep only `mobs`
  // and ignore anything that carries explicit boss metadata.
  if (Array.isArray(entry.entities) && entry.entities.length > 0) {
    // Heuristic: boss definitions usually have nested `entities` list with health/model,
    // while normal mobs are flat. You can tighten this if needed.
    return false;
  }

  // Exclude any entry whose model path clearly points to a boss model
  if (typeof entry.model === "string" && entry.model.includes("/models/boss/")) {
    return false;
  }

  return true;
};
const toDisplayName = (raw = "") => {
  const cleaned = raw.replace(/^Entity/i, "").replace(/[_-]+/g, " ").trim();
  if (!cleaned) return "Mob desconhecido";
  return cleaned.replace(/([a-z])([A-Z])/g, "$1 $2").trim();
};

const toSlug = (raw = "", dimensionId = "mob", index = 0) => {
  const fallback = `${dimensionId}-mob-${index}`;
  const cleaned = raw
    .replace(/^Entity/i, "")
    .replace(/[_\s]+/g, "-")
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/[^a-zA-Z0-9-]/g, "")
    .toLowerCase();
  const slug = cleaned || fallback;
  if (slug.startsWith(`${dimensionId}-`)) {
    return slug;
  }
  return `${dimensionId}-${slug}`;
};

const hydrateMob = (mob, dimension, index) => {
  const entityId = mob.entity || mob.id || mob.slug || `${dimension.id}-mob-${index}`;
  return {
    ...mob,
    dimensionId: dimension.id,
    dimensionName: dimension.name,
    displayName: mob.displayName || toDisplayName(entityId),
    slug: mob.slug || toSlug(entityId, dimension.id, index),
  };
};

export const mobs = dimensionSources.flatMap((dimension) =>
  (dimension.mobs || [])
    .filter(isNormalMob)
    .map((mob, index) => hydrateMob(mob, dimension, index)),
);

export const getMobBySlug = (slug) => mobs.find((mob) => mob.slug === slug);

const deriveHealthStats = (mob = {}) => {
  const base = typeof mob.health === "number" ? mob.health : null;
  const min = typeof mob.healthMin === "number" ? mob.healthMin : null;
  const max = typeof mob.healthMax === "number" ? mob.healthMax : null;
  const resolvedMin = min ?? base ?? null;
  const resolvedMax = max ?? base ?? null;
  const value = base ?? resolvedMax ?? resolvedMin ?? 0;
  return {
    value,
    min: resolvedMin,
    max: resolvedMax,
    hasData: resolvedMin !== null || resolvedMax !== null,
  };
};

export const getMobHealthStats = (mob) => deriveHealthStats(mob);

export const maxMobHealth = mobs.reduce((acc, mob) => {
  const stats = deriveHealthStats(mob);
  return Math.max(acc, stats.max ?? stats.value ?? 0);
}, 0);

export const formatMobHealthLabel = (stats) => {
  if (!stats?.hasData) return "Sem dados";
  if (
    typeof stats.min === "number" &&
    typeof stats.max === "number" &&
    stats.min !== stats.max
  ) {
    return `${stats.min} - ${stats.max} HP`;
  }
  const val = stats.value ?? stats.max ?? stats.min;
  return `${val} HP`;
};
