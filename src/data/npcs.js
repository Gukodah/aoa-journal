import { dimensions } from "./dimensions.js";
import { npcModels } from "./npcModels.generated.js";
import { npcTrades } from "./npcTrades.generated.js";

const toDisplayName = (raw = "") => {
  const cleaned = raw.replace(/^Entity/i, "").replace(/[_-]+/g, " ").trim();
  if (!cleaned) return "NPC desconhecido";
  return cleaned
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/\s+/g, " ")
    .trim();
};

const toSlug = (raw = "", dimensionId = "npc", index = 0) => {
  const fallback = `${dimensionId}-npc-${index}`;
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

const dimensionById = new Map(dimensions.map((d) => [d.id, d]));

const inferDimensionFromSlug = (slug = "") => {
  const cleaned = slug.replace(/^Entity/i, "").toLowerCase();
  for (const [id, dim] of dimensionById.entries()) {
    if (!id) continue;
    if (cleaned.includes(id.toLowerCase())) return dim;
  }
  const base = cleaned.split("-")[0] || "npc";
  const dim = dimensionById.get(base);
  return dim || { id: base, name: base };
};

const hydrateNpc = (npc, dimension, index) => {
  const baseEntity =
    npc.entity || npc.id || npc.slug || `${dimension.id}-npc-${index}`;
  const inferredDimension = inferDimensionFromSlug(baseEntity);
  const dim = dimension?.id ? dimension : inferredDimension;
  const trades = Array.isArray(npc.trades) ? npc.trades : [];

  return {
    ...npc,
    trades,
    dimensionId: dim.id,
    dimensionName: dim.name,
    displayName: toDisplayName(npc.displayName || baseEntity),
    slug: npc.slug || toSlug(baseEntity, dim.id, index),
  };
};

const npcsFromDimensions = dimensions.flatMap((dimension) =>
  (dimension.npcs || []).map((npc, index) =>
    hydrateNpc(npc, dimension, index),
  ),
);

const npcsFromGenerated = npcModels.map((npc, index) =>
  hydrateNpc(npc, inferDimensionFromSlug(npc.slug || npc.entity), index),
);

// Convert npcTrades to NPC format for merging
const npcsFromTrades = npcTrades.map((tradeData, index) => {
  const npc = {
    ...tradeData,
    entity: tradeData.name ? `Entity${tradeData.name.replace(/\s+/g, '')}` : tradeData.id,
    trades: tradeData.trades || [],
    slug: tradeData.id || tradeData.slug,
    model: tradeData.model || undefined
  };
  return hydrateNpc(npc, inferDimensionFromSlug(npc.slug || npc.entity), index);
});

const mergedByEntity = new Map();
for (const npc of [...npcsFromTrades, ...npcsFromGenerated, ...npcsFromDimensions]) {
  const entityKey = npc.entity || npc.displayName || npc.slug;
  if (!entityKey) continue;
  const existing = mergedByEntity.get(entityKey);
  if (!existing) {
    mergedByEntity.set(entityKey, npc);
    continue;
  }
  const prefersNewModel = !existing.model && npc.model;
  const prefersMoreTrades =
    (existing.trades?.length || 0) < (npc.trades?.length || 0);
  if (prefersNewModel || prefersMoreTrades) {
    mergedByEntity.set(entityKey, {
      ...existing,
      ...npc,
      model: existing.model || npc.model,
      trades: npc.trades && npc.trades.length > 0 ? npc.trades : existing.trades,
    });
  }
}

const deduped = Array.from(mergedByEntity.values());
export const npcs = deduped;

export const getNpcBySlug = (slug) => npcs.find((npc) => npc.slug === slug);
