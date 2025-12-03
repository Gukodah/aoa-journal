'use client';

import Link from "next/link";
import dynamic from "next/dynamic";
import { useMemo } from "react";
import CardGalleryWithFilters from "../../components/CardGalleryWithFilters.jsx";
import { Dimensions } from "../../data/Dimensions.jsx";
import { ModelLoadingIndicator } from "../../components/ModelLoadingIndicator.jsx";
import { EncounterToggle } from "../../components/EncounterToggle.jsx";
import { useProgress } from "../../context/ProgressProvider.jsx";

const ModelViewer = dynamic(
  () => import("../../components/ModelViewer.jsx").then((mod) => mod.ModelViewer),
  {
    ssr: false,
    loading: () => (
      <div className="model-skeleton">
        <ModelLoadingIndicator size="sm" />
      </div>
    ),
  },
);

const collectDimensions = () => {
  return Dimensions.map((dim, index) => ({
    id: dim.id || dim.name || `dimension-${index}`,
    name: dim.name,
    dimensionName: dim.name,
    imageUrl: dim.heroImage || dim.imageUrl,
    model: dim.model,
    tier: dim.tier || null,
    mainAccessItem:
      typeof dim.realmstone === "string"
        ? {
            item: dim.realmstone,
            imageUrl: dim.realmstoneImageUrl || null,
          }
        : dim.realmstone
        ? {
            item: dim.realmstone.name || dim.realmstone.displayName,
            imageUrl: dim.realmstone.imageUrl || null,
          }
        : null,
    lootCount: Array.isArray(dim.resources?.mineralLike)
      ? dim.resources.mineralLike.length
      : 0,
  }));
};

const allDimensions = collectDimensions().sort((a, b) =>
  (a.name || "").localeCompare(b.name || "", "pt-BR"),
);

const formatTier = (value) => {
  if (value === undefined || value === null) return "Sem dados";
  if (typeof value === "number") {
    if (Number.isInteger(value)) return value.toString();
    return value.toLocaleString("pt-BR", { maximumFractionDigits: 1 });
  }
  return String(value);
};

const DimensionCard = ({ entry }) => {
  const {
    id,
    name,
    imageUrl,
    model,
    tier,
    mainAccessItem,
    lootCount,
  } = entry;
  const progress = useProgress();
  const visited =
    progress?.has && progress.loading === false
      ? progress.has(`dimension-${id}`)
      : false;

  const pillLabel = formatTier(tier);
  const spawnItem = mainAccessItem;

  return (
    <article className="mob-card boss-card">
      <div className="mob-card-hero boss-card-hero">
        <div
          className={`mob-card-orb boss-card-orb ${
            visited ? "orb-confirmed" : ""
          }`}
        >
          <div className={`mob-model-orb boss-model-orb`}>
            {model ? (
              <ModelViewer
                url={model}
                width="100%"
                height="100%"
                enableManualZoom={true}
                enableManualRotation={true}
                environmentPreset="sunset"
                placeholderSrc={imageUrl}
                showScreenshotButton={false}
                fadeIn
              />
            ) : imageUrl ? (
              <img src={imageUrl} alt={name} />
            ) : (
              <div className="mob-card-placeholder">
                Imagem
                <span>indisponivel</span>
              </div>
            )}
          </div>
        </div>

        <div className="mob-card-headline">
          <span className="dimension-pill">TIER {pillLabel}</span>
          <EncounterToggle
            id={`dimension-${id}`}
            label="Visitei"
            size="sm"
          />
        </div>
        <h3>{name}</h3>
      </div>

      <ul className="mob-card-info boss-card-info">
        <li>
          <span>Item de acesso</span>
          <div className="boss-spawn-compact">
            {spawnItem && spawnItem.imageUrl && (
              <span className="boss-spawn-icon">
                <img src={spawnItem.imageUrl} alt={spawnItem.item} />
              </span>
            )}
            <span className="boss-spawn-name">
              <strong>
                {spawnItem ? spawnItem.item : "Ver detalhes na ficha"}
              </strong>
            </span>
          </div>
        </li>
        <li>
          <span>Recursos catalogados</span>
          <strong>{lootCount ? `${lootCount} item(ns)` : "Sem dados"}</strong>
        </li>
      </ul>

      <div className="mob-card-footer boss-card-footer">
        <Link className="btn-outline" href={`/dimensoes/${id}`}>
          ver mais
        </Link>
      </div>
    </article>
  );
};

const renderDimensionCard = (entry) => (
  <DimensionCard key={entry.id} entry={entry} />
);

const DimensionsPage = () => {
  const items = useMemo(() => allDimensions, []);

  const getTierLabel = (entry) => {
    if (entry.tier === undefined || entry.tier === null) {
      return "Tier desconhecido";
    }
    return `Tier ${formatTier(entry.tier)}`;
  };

  return (
    <section className="page bosses-page dimensions-page">
      <h2 className="page-title">Dimensões</h2>
      <p className="page-subtitle">
        Lista de dimensões presentes em Tslat 1.1.3. Cada card segue a mesma
        estrutura visual dos chefes, resumindo dificuldade, forma de acesso e
        recursos principais. Clique em &ldquo;ver mais&rdquo; para abrir a ficha
        completa com objetivos, biomas, mobs e detalhes de progressao.
      </p>

      <CardGalleryWithFilters
        items={items}
        renderItem={renderDimensionCard}
        getSearchText={(entry) =>
          [
            entry.name,
            entry.dimensionName,
            entry.mainAccessItem?.item,
            String(entry.recommendedLevel ?? ""),
          ]
            .filter(Boolean)
            .join(" ")
        }
        getDimension={getTierLabel}
        pageSize={12}
        searchPlaceholder="Buscar por nome, acesso..."
        dimensionPlaceholder="Todos os tiers"
        dimensionLabel="Tier"
      />
    </section>
  );
};

export default DimensionsPage;
