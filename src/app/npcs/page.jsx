"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import CardGalleryWithFilters from "../../components/CardGalleryWithFilters.jsx";
import { ModelLoadingIndicator } from "../../components/ModelLoadingIndicator.jsx";
import { EncounterToggle } from "../../components/EncounterToggle.jsx";
import { useProgress } from "../../context/ProgressProvider.jsx";
import { npcs } from "../../data/npcs.js";

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

const orderedNpcs = [...npcs].sort((a, b) =>
  a.displayName.localeCompare(b.displayName, "pt-BR"),
);

const NpcCard = ({ npc }) => {
  const progress = useProgress();
  const tradeCount = npc.trades?.length ?? 0;
  const biomeCountFromTrades = Array.isArray(npc.dimension?.biomes)
    ? npc.dimension.biomes.length
    : 0;
  const biomeCount =
    biomeCountFromTrades ||
    (Array.isArray(npc.registeredBiomes) ? npc.registeredBiomes.length : 0);

  const encountered =
    progress?.has && progress.loading === false
      ? progress.has(`npc-${npc.slug}`)
      : false;

  return (
    <article key={npc.slug} className="mob-card">
      <div className="mob-card-hero">
        <div className={`mob-card-orb ${encountered ? "orb-confirmed" : ""}`}>
          <div className="mob-model-orb">
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

        <div className="mob-card-headline">
          <span className="dimension-pill">
            {npc.dimensionName || "Dimensao desconhecida"}
          </span>
          <EncounterToggle
            id={`npc-${npc.slug}`}
            label="Encontrei"
            size="sm"
          />
        </div>
        <h3>{npc.displayName}</h3>
      </div>

      <div className="mob-health">
        <div className="mob-health-head">
          <span>Trocas</span>
          <strong>
            {tradeCount ? `${tradeCount} oferta${tradeCount > 1 ? "s" : ""}` : "Sem dados"}
          </strong>
        </div>
        <div className="mob-health-bar">
          <div style={{ width: `100%` }} />
        </div>
      </div>

      <ul className="mob-card-info">
        <li>
          <span>Biomas naturais</span>
          <strong>
            {biomeCount ? `${biomeCount} biomas` : "Sem dados"}
          </strong>
        </li>
      </ul>

      <div className="mob-card-footer">
        <Link className="btn-outline" href={`/npcs/${npc.slug}`}>
          ver trocas
        </Link>
      </div>
    </article>
  );
};

const NpcsPage = () => (
  <section className="page">
    <h2 className="page-title">NPCs & Comerciantes</h2>
    <p className="page-subtitle">
      Lista de entidades amigaveis ou neutras que oferecem trocas. Filtre por
      dimensao ou busque pelo nome para encontrar rapidamente o vendedor certo.
    </p>

    <CardGalleryWithFilters
      items={orderedNpcs}
      renderItem={(npc) => <NpcCard key={npc.slug} npc={npc} />}
      getSearchText={(npc) =>
        [npc.displayName, npc.dimensionName].filter(Boolean).join(" ")
      }
      // Hide dimension filter for NPCs by returning null
      getDimension={() => null}
      pageSize={12}
      searchPlaceholder="Buscar NPC comerciante..."
      dimensionPlaceholder="Todas as dimens��es"
      dimensionLabel="Dimensao"
    />
  </section>
);

export default NpcsPage;
