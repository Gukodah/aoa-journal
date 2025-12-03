"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import CardGalleryWithFilters from "../../components/CardGalleryWithFilters.jsx";
import { ModelLoadingIndicator } from "../../components/ModelLoadingIndicator.jsx";
import { EncounterToggle } from "../../components/EncounterToggle.jsx";
import { useProgress } from "../../context/ProgressProvider.jsx";
import { Minions } from "../../data/minions.generated.jsx";

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

// Helper to turn internal/camel-cased names into human-readable labels.
const humanizeName = (name) => {
  if (!name) return "";
  return name.replace(/([A-Z])/g, " $1").trim();
};

// Helper to format health range if min/max ever become non-null in the future.
// For now, minions only expose a single `health` value.
const formatHealth = (minion) => {
  if (minion.healthMin != null || minion.healthMax != null) {
    const min = minion.healthMin ?? minion.healthMax;
    const max = minion.healthMax ?? minion.healthMin;
    if (min === max) return min ?? "--";
    if (min != null && max != null) return `${min} - ${max}`;
    if (min != null) return `≥ ${min}`;
    if (max != null) return `≤ ${max}`;
  }

  if (minion.health != null) return `${minion.health}`;
  return "--";
};

const formatDamage = (min, max) => {
  if (min == null && max == null) return "--";
  if (min === max) return min ?? "--";
  if (min != null && max != null) return `${min} - ${max}`;
  if (min != null) return `≥ ${min}`;
  if (max != null) return `≤ ${max}`;
  return "--";
};

const orderedMinions = [...Minions].sort((a, b) =>
  (a.displayName || a.entity || "").localeCompare(
    b.displayName || b.entity || "",
    "pt-BR",
  ),
);

const MinionCard = ({ minion }) => {
  const progress = useProgress();
  const primaryTool = minion.spawnTools?.[0];
  const encountered =
    progress?.has && progress.loading === false
      ? progress.has(`minion-${minion.entity}`)
      : false;

  return (
    <article key={minion.entity} className="mob-card">
      <div className="mob-card-hero">
        <div className={`mob-card-orb ${encountered ? "orb-confirmed" : ""}`}>
          <div className="mob-model-orb">
            {minion.model ? (
              <ModelViewer
                url={minion.model}
                width="100%"
                height="100%"
                enableManualZoom={true}
                enableManualRotation={true}
                environmentPreset="sunset"
                placeholderSrc={primaryTool?.imageUrl}
                showScreenshotButton={false}
                fadeIn
              />
            ) : primaryTool?.imageUrl ? (
              <div className="mob-card-placeholder">
                <img
                  src={primaryTool.imageUrl}
                  alt={primaryTool.item || minion.displayName}
                  style={{
                    maxWidth: "70%",
                    maxHeight: "70%",
                    objectFit: "contain",
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

        <div className="mob-card-headline">
          <span className="dimension-pill">Minion aliado</span>
          <EncounterToggle
            id={`minion-${minion.entity}`}
            label="Encontrei"
            size="sm"
          />
        </div>
        <h3>{humanizeName(minion.displayName || minion.entity || "")}</h3>
      </div>

      <div className="mob-health">
        <div className="mob-health-head">
          <span>Vida</span>
          <strong>{formatHealth(minion)} HP</strong>
        </div>
        <div className="mob-health-bar">
          <div style={{ width: `100%` }} />
        </div>
      </div>

      <ul className="mob-card-info">
        <li>
          <span>Dano</span>
          <strong>{formatDamage(minion.damageMin, minion.damageMax)}</strong>
        </li>
        <li>
          <span>Como invocar</span>
          {primaryTool ? (
            <div
              className="mob-card-spawn-item"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.35rem",
                marginTop: "0.5rem",
              }}
            >
              <img
                src={primaryTool.imageUrl}
                alt={humanizeName(primaryTool.item || "")}
                style={{
                  width: "24px",
                  height: "24px",
                  objectFit: "contain",
                  display: "block",
                }}
              />
              <strong>{humanizeName(primaryTool.item || "")}</strong>
            </div>
          ) : (
            <strong>Sem dados</strong>
          )}
        </li>
      </ul>
    </article>
  );
};

const renderMinionCard = (minion) => (
  <MinionCard key={minion.entity} minion={minion} />
);

const MinionsPage = () => (
  <section className="page">
    <h2 className="page-title">Minions</h2>
    <p className="page-subtitle">
      Esta vitrine mostra um resumo visual de cada minion aliado invocável pelo
      jogador. Use os itens de invocação descritos em cada card para trazer seu
      companheiro para a batalha.
    </p>

    <CardGalleryWithFilters
      items={orderedMinions}
      renderItem={renderMinionCard}
      getSearchText={(minion) =>
        humanizeName(minion.displayName || minion.entity || "")
      }
      getDimension={() => null}
      pageSize={12}
      searchPlaceholder="Buscar minion..."
      dimensionPlaceholder="Todos os minions"
      dimensionLabel="Categoria"
    />
  </section>
);

export default MinionsPage;
