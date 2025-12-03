"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { use, useState } from "react";
import { notFound } from "next/navigation";
import { Tabs } from "../../../components/Tabs.jsx";
import { Dimensions } from "../../../data/Dimensions.jsx";
import { ModelLoadingIndicator } from "../../../components/ModelLoadingIndicator.jsx";
import { EncounterToggle } from "../../../components/EncounterToggle.jsx";
import { useProgress } from "../../../context/ProgressProvider.jsx";

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

const allBosses = collectBosses();

const findBossByRouteParam = (paramId) => {
  if (!paramId) return null;

  const safeNormalize = (value) => {
    const raw = (value ?? "").toString();
    try {
      const decoded = decodeURIComponent(raw);
      return decoded
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/-+/g, "-")
        .replace(/^-|-$/g, "");
    } catch {
      return raw.toLowerCase().trim();
    }
  };

  const normalizedParam = safeNormalize(paramId);

  const direct = allBosses.find(
    (entry) => entry.id === paramId || entry.slug === paramId,
  );
  if (direct) return direct;

  const normalizedMatch = allBosses.find(
    (entry) =>
      safeNormalize(entry.id) === normalizedParam ||
      safeNormalize(entry.slug) === normalizedParam ||
      (entry.legacyId && safeNormalize(entry.legacyId) === normalizedParam),
  );
  if (normalizedMatch) return normalizedMatch;

  return null;
};

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

const formatChance = (chance) => {
  if (chance === undefined || chance === null) return "--";
  if (typeof chance === "string") return chance;
  const percent = chance * 100;
  if (Number.isNaN(percent)) return "--";
  if (percent >= 1) return `${percent.toFixed(1)}%`;
  return `${percent.toFixed(2)}%`;
};

const formatQuantity = (drop) => {
  if (!drop) return "1";
  if (drop.quantity !== undefined) return `${drop.quantity}`;
  if (drop.min !== undefined && drop.max !== undefined) {
    if (drop.min === drop.max) return `${drop.min}`;
    return `${drop.min} - ${drop.max}`;
  }
  if (drop.min !== undefined) return `>= ${drop.min}`;
  if (drop.max !== undefined) return `<= ${drop.max}`;
  return "1";
};

const BossDetailPage = ({ params }) => {
  const resolvedParams = use(params);
  const bossId = resolvedParams?.bossId;
  const bossEntry = findBossByRouteParam(bossId);
  const progress = useProgress();

  if (!bossEntry) {
    notFound();
  }

  const { boss, dimensionName } = bossEntry;
  const entities = boss.entities || [];
  const hasEntities = entities.length > 0;

  const [activeIndex, setActiveIndex] = useState(0);
  const activeEntity = hasEntities ? entities[activeIndex] : null;

  const changeEntity = (nextIndex) => {
    if (!hasEntities) return;
    const clamped =
      ((nextIndex % entities.length) + entities.length) % entities.length;
    setActiveIndex(clamped);
  };

  const primaryEntity = activeEntity || entities[0] || null;
  const activeName = formatEntityName(primaryEntity, boss.name || "Chefe");

  const spawnItems = boss.spawnItems || [];
  const mainSpawnItem = spawnItems[0] || null;

  const loot = boss.loot || [];

  const spawnTabContent = (
    <article className="mob-detail-card">
      <h3>Como invocar</h3>
      {mainSpawnItem || spawnItems.length ? (
        <div className="boss-spawn-detail">
          {spawnItems.length ? (
            <ul className="boss-spawn-list">
              {spawnItems.map((item, idx) => (
                <li key={item.itemId || item.item || idx}>
                  <div className="loot-item-cell">
                    <div className="loot-item-orb">
                      {item.imageUrl ? (
                        <img
                          src={item.imageUrl}
                          alt={item.item}
                          loading="lazy"
                        />
                      ) : (
                        <div className="loot-item-orb-fallback">
                          {item.item?.charAt(0) ?? "?"}
                        </div>
                      )}
                    </div>
                    <div className="loot-item-meta loot-item-meta-spawn">
                      <span className="loot-item-name">
                        {item.item || "Item desconhecido"}
                      </span>
                      {item.usage && (
                        <p className="loot-item-notes">{item.usage}</p>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : mainSpawnItem ? (
            <div className="boss-spawn-compact boss-spawn-compact-lg">
              {mainSpawnItem.imageUrl && (
                <span className="boss-spawn-icon">
                  <img
                    src={mainSpawnItem.imageUrl}
                    alt={mainSpawnItem.item}
                    loading="lazy"
                  />
                </span>
              )}
              <span className="boss-spawn-name">
                <strong>{mainSpawnItem.item}</strong>
              </span>
              {mainSpawnItem.usage && (
                <p className="boss-spawn-usage">{mainSpawnItem.usage}</p>
              )}
            </div>
          ) : null}
        </div>
      ) : boss.howToSpawn ? (
        <p className="mob-detail-summary">{boss.howToSpawn}</p>
      ) : (
        <p className="mob-detail-empty">Nenhum dado de invocacao.</p>
      )}

      {boss.howToSpawn && spawnItems.length > 0 && (
        <p className="mob-detail-notes">{boss.howToSpawn}</p>
      )}
    </article>
  );

  const lootTabContent = (
    <section className="mob-loot-section">
      <div className="section-heading">
        <h3>Loot table</h3>
        <span>{loot.length ? `${loot.length} entradas` : "Sem dados"}</span>
      </div>

      {loot.length ? (
        <div className="loot-table-wrapper">
          <table className="loot-table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Chance</th>
                <th>Quantidade</th>
              </tr>
            </thead>
            <tbody>
              {loot.map((drop) => (
                <tr key={`${drop.item}-${drop.notes ?? ""}`}>
                  <td>
                    <div className="loot-item-cell">
                      <div className="loot-item-orb">
                        {drop.imageUrl ? (
                          <img
                            src={drop.imageUrl}
                            alt={drop.item}
                            loading="lazy"
                          />
                        ) : (
                          <div className="loot-item-orb-fallback">
                            {drop.item?.charAt(0) ?? "?"}
                          </div>
                        )}
                      </div>
                      <div className="loot-item-meta">
                        <span className="loot-item-name">{drop.item}</span>
                        {drop.notes && (
                          <p className="loot-item-notes">{drop.notes}</p>
                        )}
                      </div>
                    </div>
                  </td>
                  <td>{formatChance(drop.chance)}</td>
                  <td>{formatQuantity(drop)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="mob-detail-empty">Ainda nao ha loot registrado.</p>
      )}
    </section>
  );

  const tabs = [
    {
      value: "spawn",
      label: "Invocacao",
      badge: spawnItems.length || undefined,
      content: spawnTabContent,
    },
    {
      value: "loot",
      label: "Loot table",
      badge: loot.length || undefined,
      content: lootTabContent,
    },
  ];

  return (
    <section className="page mob-detail-page">
      <div className="page-breadcrumb">
        <Link href="/chefes">&larr; Voltar para lista</Link>
      </div>

      <div className="mob-detail-hero">
        <div className="mob-visual-stack">
          <div
            className={`mob-card-orb mob-card-orb-lg ${
              progress?.has && progress.has(`boss-${bossEntry.slug || bossEntry.id}`)
                ? "orb-confirmed"
                : ""
            }`}
          >
            <div className="mob-model-orb mob-model-orb-lg">
              {primaryEntity?.model ? (
                <ModelViewer
                  url={primaryEntity.model}
                  width="100%"
                  height="100%"
                  enableManualZoom={true}
                  enableManualRotation={true}
                  environmentPreset="night"
                  placeholderSrc={primaryEntity.imageUrl}
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
            <div className="boss-entity-selector boss-entity-selector-detail">
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
        </div>

        <div className="mob-detail-heading">
          <div className="mob-detail-headline">
            <span className="dimension-pill">
              {dimensionName || "Dimensao desconhecida"}
            </span>
            <EncounterToggle
              id={`boss-${bossEntry.slug || bossEntry.id}`}
              label="Derrotei"
              size="md"
            />
          </div>
          <h2>{activeName}</h2>
          {boss.summary && <p className="mob-detail-summary">{boss.summary}</p>}
          {boss.notes && <p className="mob-detail-notes">{boss.notes}</p>}

          {primaryEntity && (
            <div className="mob-health mob-health-lg">
              <div className="mob-health-head">
                <span>Vida</span>
                <strong>{formatHealth(primaryEntity.health)} HP</strong>
              </div>
              <div className="mob-health-bar">
                <div style={{ width: "100%" }} />
              </div>
            </div>
          )}

          <ul className="mob-detail-tags">
            <li>
              <span>Entidades</span>
              <strong>
                {entities.length ? `${entities.length} variacoes` : "Sem dados"}
              </strong>
            </li>
            <li>
              <span>Invocacao</span>
              <strong>
                {spawnItems.length ? `${spawnItems.length} item(ns)` : "Sem dados"}
              </strong>
            </li>
            <li>
              <span>Loot</span>
              <strong>
                {loot.length ? `${loot.length} itens` : "Sem dados"}
              </strong>
            </li>
            <li>
              <span>Dimensao</span>
              <strong>{dimensionName || "N/A"}</strong>
            </li>
          </ul>
        </div>
      </div>

      <Tabs tabs={tabs} initialValue="spawn" />
    </section>
  );
};

export default BossDetailPage;
