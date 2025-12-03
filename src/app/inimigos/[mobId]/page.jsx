'use client';

import { use } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import { Tabs } from "../../../components/Tabs.jsx";
import { ModelLoadingIndicator } from "../../../components/ModelLoadingIndicator.jsx";
import { EncounterToggle } from "../../../components/EncounterToggle.jsx";
import { useProgress } from "../../../context/ProgressProvider.jsx";
import {
  getMobBySlug,
  getMobHealthStats,
  maxMobHealth,
  formatMobHealthLabel,
} from "../../../data/mobs.js";
import { getBiomeById } from "../../../data/dimensions.js";

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

const isImageModel = (modelUrl) => {
  if (!modelUrl || typeof modelUrl !== "string") return false;
  const normalized = modelUrl.split("?")[0];
  return /\.(png|jpe?g|webp|gif)$/i.test(normalized);
};

const normalizeBiomeEntry = (entry, mobDimensionName) => {
  if (!entry) return null;

  const entryId =
    typeof entry === "string"
      ? entry
      : entry.id || entry.field || entry.name || JSON.stringify(entry);

  const metaKey =
    typeof entry === "string" ? entry : entry.id || entry.field || null;
  const metadata = metaKey ? getBiomeById(metaKey) : undefined;

  const explicitName = typeof entry === "object" ? entry.name : undefined;
  const explicitImage = typeof entry === "object" ? entry.imageUrl : undefined;
  const explicitDescription =
    typeof entry === "object" ? entry.description : undefined;
  const explicitDimension =
    typeof entry === "object" ? entry.dimensionName : undefined;

  const fallbackName =
    typeof entry === "string" ? formatBiomeName(entry) : explicitName;

  return {
    id: entryId,
    name: explicitName || metadata?.name || fallbackName || "Bioma desconhecido",
    imageUrl: explicitImage || metadata?.imageUrl || "",
    description: explicitDescription || metadata?.description,
    dimensionName:
      explicitDimension || metadata?.dimensionName || mobDimensionName,
  };
};

const formatSpawnRange = (min, max) => {
  if (min === undefined && max === undefined) return "--";
  if (min === max) return min ?? "--";
  if (min !== undefined && max !== undefined) return `${min} - ${max}`;
  if (min !== undefined) return `>= ${min}`;
  if (max !== undefined) return `<= ${max}`;
  return "--";
};

const formatSummary = (mob) => {
  const parts = [];
  if (mob.creatureType) parts.push(`Tipo: ${mob.creatureType}`);
  if (mob.weight) parts.push(`Peso: ${mob.weight}`);
  if (mob.registeredBiomes?.length)
    parts.push(`${mob.registeredBiomes.length} biomas catalogados`);
  if (!parts.length) return "Dados nao informados.";
  return parts.join(" - ");
};

const formatBiomeName = (biome) =>
  typeof biome === "string"
    ? biome
        .replace(/^DimensionOrganizer\./, "")
        .replace(/([a-z])([A-Z])/g, "$1 $2")
        .replace(/_/g, " ")
        .trim()
    : "";

const formatChance = (chance) => {
  if (chance === undefined || chance === null) return "--";
  if (typeof chance === "string") return chance;
  const percent = chance * 100;
  if (percent >= 1) return `${percent.toFixed(1)}%`;
  return `${percent.toFixed(2)}%`;
};

const formatQuantity = (drop) => {
  if (drop.quantity !== undefined) return `${drop.quantity}`;
  if (drop.min !== undefined && drop.max !== undefined) {
    if (drop.min === drop.max) return `${drop.min}`;
    return `${drop.min} - ${drop.max}`;
  }
  if (drop.min !== undefined) return `>= ${drop.min}`;
  if (drop.max !== undefined) return `<= ${drop.max}`;
  return "1";
};

const HEALTH_SCALE = maxMobHealth || 1;

const MobDetailPage = ({ params }) => {
  const resolvedParams = use(params);
  const mob = getMobBySlug(resolvedParams?.mobId);
  const progress = useProgress();

  if (!mob) {
    notFound();
  }

  const healthStats = getMobHealthStats(mob);
  const hasImageModel = isImageModel(mob.model);
  const imageModelSrc = hasImageModel ? mob.model || mob.imageUrl : null;

  const spawnBiomes =
    mob.registeredBiomes
      ?.map((biome) => normalizeBiomeEntry(biome, mob.dimensionName))
      .filter(Boolean) ?? [];

  const biomesTabContent = (
    <article className="mob-detail-card">
      <h3>Biomas de spawn</h3>
      {spawnBiomes.length ? (
        <div className="biome-card-grid">
          {spawnBiomes.map((biome, idx) => (
            <article key={typeof biome.id === 'string' ? biome.id : JSON.stringify(biome.id) + '-' + idx} className="biome-card">
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

  const lootTabContent = (
    <section className="mob-loot-section">
      <div className="section-heading">
        <h3>Loot table</h3>
        <span>
          {mob.loot?.length ? `${mob.loot.length} entradas` : "Sem dados"}
        </span>
      </div>

      {mob.loot?.length ? (
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
              {mob.loot.map((drop) => (
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
        <p className="mob-detail-empty">
          Ainda nao ha loot registrado para este mob.
        </p>
      )}
    </section>
  );

  const tabs = [
    {
      value: "biomes",
      label: "Biomas de spawn",
      badge: spawnBiomes.length || undefined,
      content: biomesTabContent,
    },
    {
      value: "loot",
      label: "Loot table",
      badge: mob.loot?.length || undefined,
      content: lootTabContent,
    },
  ];

  return (
    <section className="page mob-detail-page">
      <div className="page-breadcrumb">
        <Link href="/inimigos">&larr; Voltar para lista</Link>
      </div>

      <div className="mob-detail-hero">
        <div className="mob-card-orb mob-card-orb-lg">
          <div
            className={`mob-model-orb mob-model-orb-lg ${
              progress?.has && progress.has(`mob-${mob.slug}`)
                ? "orb-confirmed"
                : ""
            }`}
          >
            {hasImageModel && imageModelSrc ? (
              <img
                src={imageModelSrc}
                alt={`Visual do ${mob.displayName}`}
                loading="lazy"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            ) : mob.model ? (
              <ModelViewer
                url={mob.model}
                width="100%"
                height="100%"
                environmentPreset="night"
                placeholderSrc={mob.imageUrl}
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

        <div className="mob-detail-heading">
          <div className="mob-detail-headline">
            <span className="dimension-pill">
              {mob.dimensionName || "Dimensao desconhecida"}
            </span>
            <EncounterToggle
              id={`mob-${mob.slug}`}
              label="Derrotei"
              size="md"
            />
          </div>
          <h2>{mob.displayName}</h2>
          <p className="mob-detail-summary">{formatSummary(mob)}</p>
          {mob.lootNotes && <p className="mob-detail-notes">{mob.lootNotes}</p>}

          <div className="mob-health mob-health-lg">
            <div className="mob-health-head">
              <span>Vida</span>
              <strong>{formatMobHealthLabel(healthStats)}</strong>
            </div>
            <div className="mob-health-bar">
              <div style={{ width: "100%" }} />
            </div>
          </div>

          <ul className="mob-detail-tags">
            <li>
              <span>Tipo</span>
              <strong>{mob.creatureType || "Nao informado"}</strong>
            </li>
            <li>
              <span>Peso</span>
              <strong>{mob.weight ?? "--"}</strong>
            </li>
            <li>
              <span>Grupo</span>
              <strong>{formatSpawnRange(mob.min, mob.max)}</strong>
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

export default MobDetailPage;
