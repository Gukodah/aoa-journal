"use client";

import { use } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import { Tabs } from "../../../components/Tabs.jsx";
import { ModelLoadingIndicator } from "../../../components/ModelLoadingIndicator.jsx";
import { EncounterToggle } from "../../../components/EncounterToggle.jsx";
import { getNpcBySlug } from "../../../data/npcs.js";
import {
  getBiomeById,
  dimensions as allDimensions,
} from "../../../data/dimensions.js";

const ModelViewer = dynamic(
  () =>
    import("../../../components/ModelViewer.jsx").then(
      (mod) => mod.ModelViewer,
    ),
  {
    ssr: false,
    loading: () => (
      <div className="model-skeleton">
        <ModelLoadingIndicator size="sm" />
      </div>
    ),
  },
);

const TradeItemCell = ({ item, fallback = "--" }) => {
  if (!item) {
    return <span className="loot-item-notes">{fallback}</span>;
  }

  // Handle both old format (quantity, min/max) and new format (count, meta)
  const qty =
    item.quantity ??
    item.count ??
    (item.min !== undefined && item.max !== undefined
      ? `${item.min} - ${item.max}`
      : item.min ?? item.max);

  // Use displayName if available, fallback to itemRef/itemId/item
  const itemName = item.displayName || item.itemRef || item.itemId || item.item;

  return (
    <div className="loot-item-cell">
      <div className="loot-item-orb">
        {item.imageUrl ? (
          <img src={item.imageUrl} alt={itemName} loading="lazy" />
        ) : (
          <div className="loot-item-orb-fallback">
            {itemName?.charAt(0) ?? "?"}
          </div>
        )}
      </div>
      <div className="loot-item-meta">
        <span className="loot-item-name">
          {itemName || "Item desconhecido"}
        </span>
        <p className="loot-item-notes">
          {qty ? `Qtd: ${qty}` : "Quantidade nao informada"}
        </p>
      </div>
    </div>
  );
};

const formatBiomeName = (biome) =>
  typeof biome === "string"
    ? biome
        .replace(/^DimensionOrganizer\./, "")
        .replace(/([a-z])([A-Z])/g, "$1 $2")
        .replace(/_/g, " ")
        .trim()
    : "";

// Normalize dimension name: avoid showing raw filenames like `entityassassin.java`.
const normalizeDimensionName = (
  rawName,
  imageUrl,
  biomeName,
  allDimensions,
) => {
  if (!rawName && !imageUrl && !biomeName) return undefined;

  const isLikelyFile = (n) =>
    !!(n && (n.endsWith(".java") || n.includes("/") || n.includes("entity")));

  // If rawName looks valid and not a file, prefer it
  if (rawName && !isLikelyFile(rawName)) return rawName;

  // Try to infer from imageUrl or biomeName by searching dimensions list
  if (allDimensions && (imageUrl || biomeName)) {
    const found = allDimensions.find((dim) => {
      // match by dimension name exact
      if (dim.name && biomeName && dim.name === biomeName) return true;
      const biomes = dim.biomes || [];
      return biomes.some((db) => {
        const dbName = db.name || "";
        const dbImage = db.imageUrl || db.image || "";
        if (dbImage && imageUrl && dbImage === imageUrl) return true;
        if (dbName && biomeName && dbName === biomeName) return true;
        return false;
      });
    });
    if (found) return found.name;
  }

  // As last resort, if rawName contains a dot or slash, strip to basename and humanize
  if (rawName) {
    const base = rawName
      .split(/[\\/]/)
      .pop()
      .replace(/\.java$/, "");
    return base.replace(/([a-z])([A-Z])/g, "$1 $2");
  }

  return undefined;
};

const NpcDetailPage = ({ params }) => {
  const resolvedParams = use(params);
  const npc = getNpcBySlug(resolvedParams?.npcId);

  if (!npc) {
    notFound();
  }

  console.log(npc);

  const trades = npc.trades || [];

  // Build spawn biomes list by merging registered biome IDs (when available)
  // with any biomes provided in `npc.dimension.biomes` (the new static mapping).
  // Preference: registeredBiomes (with metadata lookup) -> dimension.biomes entries.
  const spawnBiomes = (() => {
    const seen = new Set();
    const out = [];

    // 1) Registered biome IDs (if present) - use metadata from getBiomeById
    if (Array.isArray(npc.registeredBiomes) && npc.registeredBiomes.length) {
      npc.registeredBiomes.forEach((biomeId) => {
        const metadata = getBiomeById(biomeId);
        const fallbackName = formatBiomeName(biomeId) || "Bioma desconhecido";
        const rawDim = metadata?.dimensionName || npc.dimensionName;
        const inferredDim = normalizeDimensionName(
          rawDim,
          metadata?.imageUrl,
          metadata?.name || biomeId,
          allDimensions,
        );
        const item = {
          id: biomeId,
          name: metadata?.name || fallbackName,
          imageUrl: metadata?.imageUrl || "",
          description: metadata?.description,
          dimensionName: inferredDim || rawDim,
        };
        const key = item.id || item.name;
        if (!seen.has(key)) {
          seen.add(key);
          out.push(item);
        }
      });
    }

    // 2) Dimension-derived biomes: these are objects with name/imageUrl
    if (npc.dimension && Array.isArray(npc.dimension.biomes)) {
      npc.dimension.biomes.forEach((b) => {
        // b may be an object {name, imageUrl} or a simple string in legacy cases
        const name = typeof b === "string" ? b : b.name || "Bioma desconhecido";
        const imageUrl = typeof b === "string" ? "" : b.imageUrl || "";

        // Try to infer the human-friendly dimension name from the biome itself by
        // searching the project's `dimensions` list. Prefer this over the NPC's
        // own `dimension.name` which may be a group id (e.g. "lottoman").
        let inferredDimensionName;
        if (imageUrl || name) {
          const found = allDimensions.find((dim) => {
            const biomes = dim.biomes || [];
            return biomes.some((db) => {
              const dbName = db.name || "";
              const dbImage = db.imageUrl || db.image || "";
              return (
                (dbImage && imageUrl && dbImage === imageUrl) ||
                (dbName && name && dbName === name)
              );
            });
          });
          if (found) inferredDimensionName = found.name;
        }

        const fallbackDim = npc.dimension?.name || npc.dimensionName;
        const dimensionNameRaw = inferredDimensionName || fallbackDim;
        const dimensionName =
          normalizeDimensionName(
            dimensionNameRaw,
            imageUrl,
            name,
            allDimensions,
          ) || dimensionNameRaw;

        const key = name;
        if (!seen.has(key)) {
          seen.add(key);
          out.push({
            id: undefined,
            name,
            imageUrl,
            description: undefined,
            dimensionName,
          });
        }
      });
    }

    return out;
  })();

  const tradesTabContent = (
    <section className="mob-loot-section">
      <div className="section-heading">
        <h3>Ofertas de troca</h3>
        <span>{trades.length ? `${trades.length} entradas` : "Sem dados"}</span>
      </div>

      {trades.length ? (
        <div className="loot-table-wrapper">
          <table className="loot-table">
            <thead>
              <tr>
                <th>Entrega</th>
                <th>Recebe</th>
              </tr>
            </thead>
            <tbody>
              {trades.map((trade, idx) => {
                // Handle both old format (input/output) and new format (inputs/outputs arrays)
                const inputs =
                  trade.inputs || (trade.input ? [trade.input] : []);
                const outputs =
                  trade.outputs || (trade.output ? [trade.output] : []);

                // Get all inputs and primary output
                const allInputs = inputs;
                // Get the primary output (first one)
                const primaryOutput = outputs[0];

                return (
                  <tr key={`${npc.slug}-trade-${idx}`}>
                    <td>
                      {allInputs.length > 0 ? (
                        <>
                          <TradeItemCell item={allInputs[0]} fallback="--" />
                          {allInputs.length > 1 && (
                            <div
                              style={{
                                marginTop: "8px",
                                fontSize: "0.9em",
                                color: "#999",
                              }}
                            >
                              {allInputs.slice(1).map((item, i) => (
                                <div key={i} style={{ marginTop: "4px" }}>
                                  <TradeItemCell item={item} fallback="--" />
                                </div>
                              ))}
                            </div>
                          )}
                        </>
                      ) : (
                        <span className="loot-item-notes">--</span>
                      )}
                    </td>
                    <td>
                      <TradeItemCell item={primaryOutput} fallback="--" />
                      {outputs.length > 1 && (
                        <div
                          style={{
                            marginTop: "8px",
                            fontSize: "0.9em",
                            color: "#999",
                          }}
                        >
                          {outputs.slice(1).map((item, i) => (
                            <div key={i} style={{ marginTop: "4px" }}>
                              <TradeItemCell item={item} fallback="--" />
                            </div>
                          ))}
                        </div>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="mob-detail-empty">Nenhuma oferta cadastrada.</p>
      )}
    </section>
  );

  const biomesTabContent = (
    <article className="mob-detail-card">
      <h3>Biomas de spawn</h3>
      {spawnBiomes.length ? (
        <div className="biome-card-grid">
          {spawnBiomes.map((biome, idx) => (
            <article
              key={
                typeof biome.id === "string"
                  ? biome.id
                  : JSON.stringify(biome.id) + "-" + idx
              }
              className="biome-card"
            >
              <div className="biome-card-thumb">
                {biome.imageUrl ? (
                  <img
                    src={biome.imageUrl}
                    alt={`Vista do bioma ${biome.name}`}
                    loading="lazy"
                  />
                ) : (
                  <div className="biome-card-thumb-fallback">
                    {biome.name?.charAt(0) ?? "?"}
                  </div>
                )}
              </div>
              <div className="biome-card-body">
                {biome.dimensionName && (
                  <span className="dimension-pill dimension-pill-soft">
                    {biome.dimensionName}
                  </span>
                )}
                <h4>{biome.name}</h4>
                {biome.description && (
                  <p className="biome-card-description">{biome.description}</p>
                )}
              </div>
            </article>
          ))}
        </div>
      ) : (
        <p className="mob-detail-empty">Nenhum bioma registrado.</p>
      )}
    </article>
  );

  const tabs = [
    {
      value: "biomes",
      label: "Biomas de spawn",
      badge: spawnBiomes.length || undefined,
      content: biomesTabContent,
    },
    {
      value: "trades",
      label: "Ofertas de troca",
      badge: trades.length || undefined,
      content: tradesTabContent,
    },
  ];

  return (
    <section className="page mob-detail-page">
      <div className="page-breadcrumb">
        <Link href="/npcs">&larr; Voltar para lista</Link>
      </div>

      <div className="mob-detail-hero">
        <div className="mob-visual-stack">
          <div className="mob-card-orb mob-card-orb-lg">
            <div className="mob-model-orb mob-model-orb-lg">
              {npc.model ? (
                <ModelViewer
                  url={npc.model}
                  width="100%"
                  height="100%"
                  enableManualZoom={true}
                  enableManualRotation={true}
                  environmentPreset="sunset"
                  placeholderSrc={npc.imageUrl}
                  showScreenshotButton={false}
                  fadeIn
                />
              ) : npc.imageUrl ? (
                <div className="mob-card-placeholder">
                  <img
                    src={npc.imageUrl}
                    alt={npc.displayName}
                    loading="lazy"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              ) : (
                <div className="mob-card-placeholder">
                  Modelo
                  <span>indisponivel</span>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mob-detail-heading">
          <div className="mob-detail-headline">
            <span className="dimension-pill">
              {npc.dimensionName || "Dimensao desconhecida"}
            </span>
            <EncounterToggle
              id={`npc-${npc.slug}`}
              label="Encontrei"
              size="md"
            />
          </div>
          <h2>{npc.displayName}</h2>
          {npc.notes && <p className="mob-detail-summary">{npc.notes}</p>}

          <ul className="mob-detail-tags">
            <li>
              <span>Trocas</span>
              <strong>
                {trades.length
                  ? `${trades.length} oferta${trades.length > 1 ? "s" : ""}`
                  : "Nenhuma"}
              </strong>
            </li>
            <li>
              <span>Biomas</span>
              <strong>
                {spawnBiomes.length
                  ? `${spawnBiomes.length} locais`
                  : "Sem dados"}
              </strong>
            </li>
          </ul>
        </div>
      </div>

      <Tabs tabs={tabs} initialValue="biomes" />
    </section>
  );
};

export default NpcDetailPage;
