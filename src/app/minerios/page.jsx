"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import CardGalleryWithFilters from "../../components/CardGalleryWithFilters.jsx";
import { ModelLoadingIndicator } from "../../components/ModelLoadingIndicator.jsx";
import { dimensions } from "../../data/dimensions.js";
import { EncounterToggle } from "../../components/EncounterToggle.jsx";
import { useProgress } from "../../context/ProgressProvider.jsx";

const ModelViewer = dynamic(
  () =>
    import("../../components/ModelViewer.jsx").then((mod) => mod.ModelViewer),
  {
    ssr: false,
    loading: () => (
      <div className="model-skeleton">
        <ModelLoadingIndicator size="sm" />
      </div>
    ),
  },
);

const collectOresAndGems = () => {
  const entries = [];

  const normaliseOreName = (rawName = "") => {
    const trimmed = rawName.trim();
    if (!trimmed) return "";

    let base = trimmed.toLowerCase();

    // remove leading "ore ", "minério de ", "minério ", "mineral de ", "mineral "
    base = base
      .replace(/^ore\s+/i, "")
      .replace(/^min[eé]rio\s+de\s+/i, "")
      .replace(/^min[eé]rio\s+/i, "")
      .replace(/^mineral\s+de\s+/i, "")
      .replace(/^mineral\s+/i, "");

    // remove trailing " ore", " minério", " mineral"
    base = base
      .replace(/\s+ore$/i, "")
      .replace(/\s+min[eé]rio$/i, "")
      .replace(/\s+mineral$/i, "");

    return base.trim();
  };

  dimensions.forEach((dim) => {
    const dimId = dim.id || dim.name || "dim";
    const dimName = dim.name || dim.id || "Dimensao desconhecida";

    const dedupeKey = (item, index, prefix) => {
      const rawName = item.displayName || item.name || item.field || "";
      const normName = normaliseOreName(rawName);
      const image = (item.imageUrl || "").trim();

      if (normName) return `${dimId}::name::${normName}`;
      if (image) return `${dimId}::img::${image.toLowerCase()}`;
      return `${dimId}::${prefix}-${index}`;
    };

    const isOreLikeType = (type) => {
      const t = (type || "").toLowerCase();
      return (
        /minerio/gi.test(t) ||
        /minério/gi.test(t) ||
        /mineral/gi.test(t) ||
        /ore/gi.test(t) ||
        /gema/gi.test(t)
      );
    };

    // Global per-dimension keys across both generatedOres and resources
    const seenKeys = new Set();

    // First pass: collect ore-like resources, they are considered authoritative
    (dim.resources || []).forEach((res, index) => {
      const type = res.type || "";
      const isOreLike = isOreLikeType(type);
      if (!isOreLike) return;

      const key = dedupeKey(res, index, "res");
      if (!key || seenKeys.has(key)) {
        return;
      }
      seenKeys.add(key);

      const name = res.name || `Recurso ${index}`;
      const imageUrl = res.imageUrl;
      const height = res.height || null;

      entries.push({
        id: `${dimId}-resource-ore-${index}`,
        oreGem: {
          name,
          type: res.type || "Recurso",
          sourceType: "resource",
          dimensionId: dimId,
          dimensionName: dimName,
          height,
          entities: [
            {
              name,
              displayName: name,
              imageUrl,
              model: res.model,
              health: null,
            },
          ],
        },
        dimensionId: dimId,
        dimensionName: dimName,
      });
    });

    // Second pass: collect generatedOres only when not already represented
    (dim.generatedOres || []).forEach((ore, index) => {
      const key = dedupeKey(ore, index, "gen");
      if (key && seenKeys.has(key)) {
        // Already represented by a resource ore or earlier entry
        return;
      }

      const name = ore.displayName || ore.name || ore.field || `Ore ${index}`;
      const imageUrl = ore.imageUrl;
      const height = ore.height || ore.heightRange || null;

      const finalKey = key || `${dimId}::gen-fallback-${index}`;
      if (seenKeys.has(finalKey)) {
        return;
      }
      seenKeys.add(finalKey);

      entries.push({
        id: `${dimId}-generated-ore-${index}`,
        oreGem: {
          name,
          type: "Minerio gerado",
          sourceType: "generatedOre",
          dimensionId: dimId,
          dimensionName: dimName,
          height,
          entities: [
            {
              name,
              displayName: name,
              imageUrl,
              model: ore.model,
              health: null,
            },
          ],
        },
        dimensionId: dimId,
        dimensionName: dimName,
      });
    });
  });

  return entries;
};

const allOresAndGems = collectOresAndGems().sort((a, b) =>
  (a.oreGem.name || "").localeCompare(b.oreGem.name || "", "pt-BR"),
);

const formatHeightLabel = (oreGem) => {
  const h = oreGem?.height;

  if (
    !h ||
    (h.min == null && h.max == null && h.from == null && h.to == null)
  ) {
    if (oreGem.sourceType === "generatedOre") return "Geracao natural";
    if (oreGem.sourceType === "resource") return "Recurso da dimensao";
    return "Desconhecida";
  }

  const min = h.min ?? h.from ?? null;
  const max = h.max ?? h.to ?? null;

  if (min != null && max != null) return `Y ${min} - ${max}`;
  if (min != null) return `Y >= ${min}`;
  if (max != null) return `Y <= ${max}`;
  return "Altura desconhecida";
};

const OreGemCard = ({ entry }) => {
  const { oreGem, dimensionId, dimensionName } = entry;
  const entities = oreGem.entities || [];
  const progress = useProgress();
  const mined =
    progress?.has && progress.loading === false
      ? progress.has(`ore-${entry.id}`)
      : false;

  const hasEntities = entities.length > 0;
  const [activeIndex, setActiveIndex] = useState(0);
  const active = hasEntities ? entities[activeIndex] : null;

  const changeEntity = (nextIndex) => {
    if (!hasEntities) return;
    const clamped =
      ((nextIndex % entities.length) + entities.length) % entities.length;
    setActiveIndex(clamped);
  };

  return (
    <article className="mob-card ore-gem-card">
      <div className="mob-card-hero boss-card-hero">
        <div className={`mob-card-orb boss-card-orb ${mined ? "orb-confirmed" : ""}`}>
          <div className="mob-model-orb boss-model-orb">
            {active && active.model ? (
              <ModelViewer
                url={active.model}
                width="100%"
                height="100%"
                enableManualZoom={true}
                enableManualRotation={true}
                environmentPreset="sunset"
                placeholderSrc={active.imageUrl}
                showScreenshotButton={false}
                fadeIn
              />
            ) : active && active.imageUrl ? (
              <div className="mob-card-placeholder">
                <img
                  src={active.imageUrl}
                  alt={active.displayName || active.name || oreGem.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
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

        {hasEntities && entities.length > 1 && (
          <div className="boss-entity-selector">
            <button
              type="button"
              className="boss-entity-arrow boss-entity-arrow-left"
              onClick={() => changeEntity(activeIndex - 1)}
              aria-label="Variante anterior"
            >
              {"<"}
            </button>

            <div className="boss-entity-dots">
              {entities.map((entity, idx) => (
                <button
                  key={
                    entity.entity || entity.displayName || entity.name || idx
                  }
                  type="button"
                  className={`boss-entity-dot ${
                    idx === activeIndex ? "is-active" : ""
                  }`}
                  onClick={() => changeEntity(idx)}
                  aria-label={`Alternar variante: ${
                    entity.displayName ||
                    entity.entity ||
                    entity.name ||
                    "variante"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              className="boss-entity-arrow boss-entity-arrow-right"
              onClick={() => changeEntity(activeIndex + 1)}
              aria-label="Proxima variante"
            >
              {">"}
            </button>
          </div>
        )}

        <div className="mob-card-headline">
          <span className="dimension-pill">
            {dimensionName || "Dimensao desconhecida"}
          </span>
          <EncounterToggle
            id={`ore-${entry.id}`}
            label="Minerei"
            size="sm"
          />
        </div>
        <h3>{oreGem.name}</h3>
      </div>

      <div className="mob-health">
        <div className="mob-health-head">
          <span>Altura</span>
          <strong>{formatHeightLabel(oreGem)}</strong>
        </div>
        <div className="mob-health-bar">
          <div style={{ width: `100%` }} />
        </div>
      </div>

      <ul className="mob-card-info boss-card-info">
        <li>
          <span>Tipo</span>
          <strong>{oreGem.type || "Recurso"}</strong>
        </li>
        <li>
          <span>Variacoes</span>
          <strong>
            {Array.isArray(oreGem.entities) ? oreGem.entities.length : 0}{" "}
            forma(s)
          </strong>
        </li>
      </ul>

      <div className="mob-card-footer boss-card-footer">
        <Link className="btn-outline" href={`/dimensoes/${dimensionId || ""}`}>
          ver dimensao
        </Link>
      </div>
    </article>
  );
};

const renderOreGemCard = (entry) => <OreGemCard key={entry.id} entry={entry} />;

const OresAndGemsPage = () => {
  const items = useMemo(() => allOresAndGems, []);

  return (
    <section className="page bosses-page ores-page">
      <h2 className="page-title">Minerios & Gemas</h2>
      <p className="page-subtitle">
        Catalogo unificado de minerios e gemas gerados nas dimensoes listadas.
        Cada card segue o layout de boss/mob, destacando variante visual e
        altura de geracao quando informada.
      </p>

      <CardGalleryWithFilters
        items={items}
        renderItem={renderOreGemCard}
        getSearchText={(entry) => entry.oreGem.name || ""}
        getDimension={(entry) => entry.dimensionName || "Dimensao desconhecida"}
        pageSize={12}
        searchPlaceholder="Buscar minerio/gema..."
        dimensionPlaceholder="Todas as dimensões"
        dimensionLabel="Dimensao"
      />
    </section>
  );
};

export default OresAndGemsPage;
