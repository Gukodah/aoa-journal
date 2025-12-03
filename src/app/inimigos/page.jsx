"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import CardGalleryWithFilters from "../../components/CardGalleryWithFilters.jsx";
import { ModelLoadingIndicator } from "../../components/ModelLoadingIndicator.jsx";
import {
  mobs,
  getMobHealthStats,
  formatMobHealthLabel,
} from "../../data/mobs.js";
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

const isImageModel = (modelUrl) => {
  if (!modelUrl || typeof modelUrl !== "string") return false;
  const normalized = modelUrl.split("?")[0];
  return /\.(png|jpe?g|webp|gif)$/i.test(normalized);
};

const formatSpawnRange = (min, max) => {
  if (min === undefined && max === undefined) return "--";
  if (min === max) return min ?? "--";
  if (min !== undefined && max !== undefined) return `${min} - ${max}`;
  if (min !== undefined) return `>= ${min}`;
  if (max !== undefined) return `<= ${max}`;
  return "--";
};

const orderedMobs = [...mobs].sort((a, b) =>
  a.displayName.localeCompare(b.displayName, "pt-BR"),
);

const MobCard = ({ mob }) => {
  const progress = useProgress();
  const encountered = progress?.has ? progress.has(`mob-${mob.slug}`) : false;
  const healthStats = getMobHealthStats(mob);
  const hasImageModel = isImageModel(mob.model);
  const imageModelSrc = hasImageModel ? mob.model || mob.imageUrl : null;

  return (
    <article key={mob.slug} className="mob-card">
      <div className="mob-card-hero">
        <div className={`mob-card-orb ${encountered ? "orb-confirmed" : ""}`}>
          <div className="mob-model-orb">
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
                enableManualZoom={true}
                enableManualRotation={true}
                environmentPreset="sunset"
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

        <div className="mob-card-headline">
          <span className="dimension-pill">
            {mob.dimensionName || "Dimensao desconhecida"}
          </span>
          <EncounterToggle
            id={`mob-${mob.slug}`}
            label="Derrotei"
            size="sm"
          />
        </div>
        <h3>{mob.displayName}</h3>
      </div>

      <div className="mob-health">
        <div className="mob-health-head">
          <span>Vida</span>
          <strong>{formatMobHealthLabel(healthStats)}</strong>
        </div>
        <div className="mob-health-bar">
          <div style={{ width: `100%` }} />
        </div>
      </div>

      <ul className="mob-card-info">
        <li>
          <span>Grupos</span>
          <strong>{formatSpawnRange(mob.min, mob.max)}</strong>
        </li>
        <li>
          <span>Loot catalogado</span>
          <strong>
            {mob.loot?.length ? `${mob.loot.length} itens` : "Sem dados"}
          </strong>
        </li>
      </ul>

      <div className="mob-card-footer">
        <Link className="btn-outline" href={`/inimigos/${mob.slug}`}>
          ver mais
        </Link>
      </div>
    </article>
  );
};

const MobsPage = () => (
  <section className="page">
    <h2 className="page-title">Inimigos</h2>
    <p className="page-subtitle">
      Esta vitrine mostra um resumo visual de cada criatura catalogada. Clique
      em &ldquo;ver mais&rdquo; para abrir a ficha com biomas de spawn e loot
      table.
    </p>

    <CardGalleryWithFilters
      items={orderedMobs}
      renderItem={(mob) => <MobCard key={mob.slug} mob={mob} />}
      getSearchText={(mob) => mob.displayName || ""}
      getDimension={(mob) => mob.dimensionName || "Dimensao desconhecida"}
      pageSize={12}
      searchPlaceholder="Buscar inimigo..."
      dimensionPlaceholder="Todas as dimensões"
      dimensionLabel="Dimensao"
    />
  </section>
);

export default MobsPage;
