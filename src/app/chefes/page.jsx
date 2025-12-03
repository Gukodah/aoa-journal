"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import CardGalleryWithFilters from "../../components/CardGalleryWithFilters.jsx";
import { Dimensions } from "../../data/Dimensions.jsx";
import { ModelLoadingIndicator } from "../../components/ModelLoadingIndicator.jsx";
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

const collectBosses = () => {
  const bosses = [];

  const slugify = (value) =>
    (value ?? "")
      .toString()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");

  const buildBossSlug = (dim, boss, index) => {
    const dimPart = slugify(dim?.id || dim?.name || "dim");
    const bossPart = slugify(boss?.name || `boss-${index}`);
    return `${dimPart}-${bossPart}`;
  };

  Dimensions.forEach((dim) => {
    if (!dim?.bosses || !Array.isArray(dim.bosses)) return;

    dim.bosses.forEach((boss, bossIndex) => {
      const slug = buildBossSlug(dim, boss, bossIndex);
      const legacyId = `${dim.id || dim.name || "dim"}-${boss.name || bossIndex}`;

      bosses.push({
        id: slug,
        slug,
        legacyId,
        boss,
        dimensionId: dim.id,
        dimensionName: dim.name,
      });
    });
  });

  return bosses;
};

const allBosses = collectBosses().sort((a, b) =>
  (a.boss.name || a.slug || "").localeCompare(
    b.boss.name || b.slug || "",
    "pt-BR",
  ),
);

const formatHealth = (value) => {
  if (value === undefined || value === null) return "Sem dados";
  if (typeof value === "number") {
    if (Number.isInteger(value)) return value.toString();
    return value.toLocaleString("pt-BR", { maximumFractionDigits: 1 });
  }
  return String(value);
};

const formatEntityName = (entity, fallback) => {
  const raw =
    (entity?.displayName || entity?.entity || fallback || "").toString();
  if (!raw) return fallback || "Chefe";
  return raw.replace(/([a-z])([A-Z])/g, "$1 $2").trim();
};

const BossCard = ({ entry }) => {
  const progress = useProgress();
  const { boss, dimensionName } = entry;
  const entities = boss.entities || [];
  const spawnItems = boss.spawnItems || [];

  const hasEntities = entities.length > 0;
  const [activeIndex, setActiveIndex] = useState(0);
  const active = hasEntities ? entities[activeIndex] : null;

  const mainSpawnItem = spawnItems[0] || null;
  const activeName = formatEntityName(active, boss.name || "Chefe");

  const changeEntity = (nextIndex) => {
    if (!hasEntities) return;
    const clamped =
      ((nextIndex % entities.length) + entities.length) % entities.length;
    setActiveIndex(clamped);
  };

  return (
    <article className="mob-card boss-card">
      <div className="mob-card-hero boss-card-hero">
        <div
          className={`mob-card-orb boss-card-orb ${
            progress?.has && progress.has(`boss-${entry.slug || entry.id}`)
              ? "orb-confirmed"
              : ""
          }`}
        >
          <div className={`mob-model-orb boss-model-orb`}>
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
              aria-label="Entidade anterior"
            >
              {"<"}
            </button>

            <div className="boss-entity-dots">
              {entities.map((entity, idx) => (
                <button
                  key={entity.entity || entity.displayName || idx}
                  type="button"
                  className={`boss-entity-dot ${
                    idx === activeIndex ? "is-active" : ""
                  }`}
                  onClick={() => changeEntity(idx)}
                  aria-label={`Alternar entidade: ${
                    entity.displayName || entity.entity || "entidade"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              className="boss-entity-arrow boss-entity-arrow-right"
              onClick={() => changeEntity(activeIndex + 1)}
              aria-label="Proxima entidade"
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
            id={`boss-${entry.slug || entry.id}`}
            label="Derrotei"
            size="sm"
          />
        </div>
        <h3>{activeName}</h3>
      </div>

      {active && (
        <div className="mob-health boss-health">
          <div className="mob-health-head">
            <span>Vida</span>
            <strong>{formatHealth(active.health)} HP</strong>
          </div>
          <div className="mob-health-bar">
            <div style={{ width: `100%` }} />
          </div>
        </div>
      )}

      <ul className="mob-card-info boss-card-info">
        <li>
          <span>Item de invocacao</span>
          <div className="boss-spawn-compact">
            {mainSpawnItem && mainSpawnItem.imageUrl && (
              <span className="boss-spawn-icon">
                <img src={mainSpawnItem.imageUrl} alt={mainSpawnItem.item} />
              </span>
            )}
            <span className="boss-spawn-name">
              <strong>
                {mainSpawnItem ? mainSpawnItem.item : "Sem dados"}
              </strong>
            </span>
          </div>
        </li>
        <li>
          <span>Loot catalogado</span>
          <strong>
            {Array.isArray(boss.loot) && boss.loot.length
              ? `${boss.loot.length} itens`
              : "Sem dados"}
          </strong>
        </li>
      </ul>

      <div className="mob-card-footer boss-card-footer">
        <Link className="btn-outline" href={`/chefes/${entry.slug || entry.id}`}>
          ver mais
        </Link>
      </div>
    </article>
  );
};

const renderBossCard = (entry) => (
  <BossCard key={entry.slug || entry.id} entry={entry} />
);

const BossesPage = () => {
  const items = useMemo(() => allBosses, []);

  return (
    <section className="page bosses-page">
      <h2 className="page-title">Chefes & Subchefes</h2>
      <p className="page-subtitle">
        Cada card resume visualmente um encontro de chefe. Clique em &ldquo;ver
        mais&rdquo; para detalhes completos.
      </p>

      <CardGalleryWithFilters
        items={items}
        renderItem={renderBossCard}
        getSearchText={(entry) =>
          [
            entry.boss.name,
            entry.dimensionName,
            ...(entry.boss.entities || []).map(
              (e) => e.displayName || e.entity || "",
            ),
          ]
            .filter(Boolean)
            .join(" ")
        }
        getDimension={(entry) => entry.dimensionName || "Dimensao desconhecida"}
        pageSize={12}
        searchPlaceholder="Buscar chefe..."
        dimensionPlaceholder="Todas as dimensões"
        dimensionLabel="Dimensao"
      />
    </section>
  );
};

export default BossesPage;
