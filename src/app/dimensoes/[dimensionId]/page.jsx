"use client";

import { use, useMemo, useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import { EncounterToggle } from "../../../components/EncounterToggle.jsx";
import { useProgress } from "../../../context/ProgressProvider.jsx";
import { Dimensions } from "../../../data/Dimensions.jsx";
import { mobs } from "../../../data/mobs.js";
import { npcs } from "../../../data/npcs.js";

const ModelViewer = dynamic(
  () =>
    import("../../../components/ModelViewer.jsx").then(
      (mod) => mod.ModelViewer,
    ),
  {
    ssr: false,
  },
);

const isImageModel = (modelUrl) => {
  if (!modelUrl || typeof modelUrl !== "string") return false;
  const normalized = modelUrl.split("?")[0];
  return /\.(png|jpe?g|webp|gif)$/i.test(normalized);
};

/**
 * Util simples para achar a dimensão pelo id (slug).
 */
const findDimensionById = (idParam) => {
  if (!idParam) return null;
  return (
    Dimensions.find(
      (dim) => dim?.id?.toLowerCase() === idParam.toLowerCase(),
    ) || null
  );
};

/**
 * Badge simples de estatística (usado no hero e no sidebar).
 */
const StatBadge = ({ label, value }) => (
  <div className="dimension-stat">
    <span className="dimension-stat-label">{label}</span>
    <span className="dimension-stat-value">{value}</span>
  </div>
);

/**
 * Realmstone / desbloqueio da dimensão.
 * Fica como um bloco completo e independente, com heading próprio.
 */
const DimensionRealmstoneSection = ({ dimension }) => {
  const realm = dimension.realmstone;
  if (!realm && !dimension.realmstoneInfo) return null;

  const unlockData = realm || dimension.realmstoneInfo || {};
  const { obtainHint, obtainDetails, imageUrl } = unlockData;

  return (
    <section
      className="dimension-section dimension-section--block"
      aria-labelledby="realmstone-heading"
    >
      <header className="dimension-section-header">
        <h2 id="realmstone-heading">Como acessar esta dimensão</h2>
        <p className="dimension-section-helper">
          Passo a passo para desbloquear o portal e começar a exploração.
        </p>
      </header>

      <div className="dimension-section-body dimension-section-body--realmstone">
        {imageUrl && (
          <div className="dimension-section-media">
            <img src={imageUrl} alt="Realmstone" />
          </div>
        )}

        <div className="dimension-section-content">
          {obtainHint && (
            <p className="dimension-section-paragraph">
              <strong>Dica rápida:</strong> {obtainHint}
            </p>
          )}
          {obtainDetails && (
            <p className="dimension-section-paragraph">
              <strong>Detalhes:</strong> {obtainDetails}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

/**
 * Objetivos principais / secundários / notas de progressão.
 * Mantém 3 colunas claras com hierarchy consistente.
 */
const GoalsSection = ({ dimension }) => {
  const { mainObjectives, secondaryObjectives, progressionNotes } = dimension;

  const hasContent =
    (Array.isArray(mainObjectives) && mainObjectives.length > 0) ||
    (Array.isArray(secondaryObjectives) && secondaryObjectives.length > 0) ||
    (Array.isArray(progressionNotes) && progressionNotes.length > 0);

  if (!hasContent) return null;

  return (
    <section
      className="dimension-section dimension-section--block"
      aria-labelledby="goals-heading"
    >
      <header className="dimension-section-header">
        <h2 id="goals-heading">Plano de progressão</h2>
        <p className="dimension-section-helper">
          Objetivos principais, secundários e notas para evoluir com eficiência.
        </p>
      </header>

      <div className="dimension-goals-grid">
        {Array.isArray(mainObjectives) && mainObjectives.length > 0 && (
          <div className="dimension-goals-column">
            <h3>Objetivos principais</h3>
            <ul className="dimension-card-list">
              {mainObjectives.map((obj) => (
                <li key={obj.id || obj.title}>
                  {obj.imageUrl && (
                    <div className="dimension-card-list-thumb">
                      <img src={obj.imageUrl} alt={obj.title} />
                    </div>
                  )}
                  <div className="dimension-card-list-body">
                    <h4>{obj.title}</h4>
                    {obj.description && <p>{obj.description}</p>}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {Array.isArray(secondaryObjectives) &&
          secondaryObjectives.length > 0 && (
            <div className="dimension-goals-column">
              <h3>Objetivos secundários</h3>
              <ul className="dimension-card-list">
                {secondaryObjectives.map((obj, index) => {
                  if (typeof obj === "string") {
                    return (
                      <li key={index}>
                        <div className="dimension-card-list-body">
                          <p>{obj}</p>
                        </div>
                      </li>
                    );
                  }

                  return (
                    <li key={obj.id || obj.title || index}>
                      {obj.imageUrl && (
                        <div className="dimension-card-list-thumb">
                          <img src={obj.imageUrl} alt={obj.title} />
                        </div>
                      )}
                      <div className="dimension-card-list-body">
                        <h4>{obj.title}</h4>
                        {obj.description && <p>{obj.description}</p>}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}

        {Array.isArray(progressionNotes) && progressionNotes.length > 0 && (
          <div className="dimension-goals-column">
            <h3>Notas de progressão</h3>
            <ul className="dimension-card-list">
              {progressionNotes.map((note, index) => (
                <li key={note.id || note.title || `note-${index}`}>
                  {note.imageUrl && (
                    <div className="dimension-card-list-thumb">
                      <img src={note.imageUrl} alt={note.title} />
                    </div>
                  )}
                  <div className="dimension-card-list-body">
                    <h4>{note.title}</h4>
                    {note.description && <p>{note.description}</p>}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

/**
 * Biomas declarados diretamente na dimensão.
 */
const BiomesSection = ({ dimension }) => {
  const biomes = dimension.biomes || dimension.biomesConfig || null;
  if (!biomes) return null;

  const list = Array.isArray(biomes)
    ? biomes
    : Object.values(biomes).filter(Boolean);

  if (!list.length) return null;

  return (
    <section className="dimension-subsection" aria-labelledby="biomes-heading">
      <header className="dimension-section-header dimension-section-header--compact">
        <h3 id="biomes-heading">Biomas</h3>
      </header>

      <div className="dimension-grid dimension-grid--biomes">
        {list.map((biome, index) => {
          const name =
            biome.name || biome.id || biome.field || `Bioma ${index + 1}`;
          const description = biome.description;
          const imageUrl = biome.imageUrl;

          return (
            <article
              key={biome.id || biome.field || index}
              className="dimension-card"
            >
              {imageUrl && (
                <div className="dimension-card-media">
                  <img src={imageUrl} alt={name} />
                </div>
              )}
              <div className="dimension-card-body">
                <h4>{name}</h4>
                {description && <p>{description}</p>}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

/**
 * Recursos e minérios da dimensão (resources + generatedOres).
 */
const ResourcesSection = ({ dimension }) => {
  const mineralLike = [];
  const otherResources = [];

  (dimension.resources || []).forEach((res, index) => {
    const type = (res.type || "").toLowerCase();
    const isOreLike =
      type.includes("minério") ||
      type.includes("mineral") ||
      type.includes("ore") ||
      type.includes("gem") ||
      type.includes("gema");

    const target = isOreLike ? mineralLike : otherResources;
    target.push({ ...res, _key: `res-${index}` });
  });

  (dimension.generatedOres || []).forEach((ore, index) => {
    mineralLike.push({
      name: ore.displayName || ore.name || ore.field || `Ore ${index + 1}`,
      type: "Minério gerado",
      usage: ore.generation || ore.notes || "",
      imageUrl: ore.imageUrl,
      _key: `gen-${index}`,
    });
  });

  if (!mineralLike.length && !otherResources.length) return null;

  return (
    <section
      className="dimension-subsection"
      aria-labelledby="resources-heading"
    >
      <header className="dimension-section-header dimension-section-header--compact">
        <h3 id="resources-heading">Recursos & Minérios</h3>
      </header>

      {mineralLike.length > 0 && (
        <div className="dimension-subsection-inner">
          <h4>Minérios & Gemas</h4>
          <div className="dimension-grid">
            {mineralLike.map((res) => (
              <article key={res._key} className="dimension-card">
                {res.imageUrl && (
                  <div className="dimension-card-media">
                    <img src={res.imageUrl} alt={res.name} />
                  </div>
                )}
                <div className="dimension-card-body">
                  <h5>{res.name}</h5>
                  {res.type && (
                    <p className="dimension-card-meta">
                      <strong>Tipo:</strong> {res.type}
                    </p>
                  )}
                  {res.usage && <p>{res.usage}</p>}
                </div>
              </article>
            ))}
          </div>
        </div>
      )}

      {otherResources.length > 0 && (
        <div className="dimension-subsection-inner">
          <h4>Outros recursos</h4>
          <div className="dimension-grid">
            {otherResources.map((res, index) => (
              <article
                key={res._key || `other-${index}`}
                className="dimension-card"
              >
                {res.imageUrl && (
                  <div className="dimension-card-media">
                    <img src={res.imageUrl} alt={res.name} />
                  </div>
                )}
                <div className="dimension-card-body">
                  <h5>{res.name}</h5>
                  {res.type && (
                    <p className="dimension-card-meta">
                      <strong>Tipo:</strong> {res.type}
                    </p>
                  )}
                  {res.usage && <p>{res.usage}</p>}
                </div>
              </article>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

/**
 * Estruturas e geração especial (generatedStructures / structures).
 */
const StructuresSection = ({ dimension }) => {
  const structuresA = dimension.generatedStructures || [];
  const structuresB = dimension.structures || [];
  const all = structuresB.length ? structuresB : structuresA;

  if (!all.length) return null;

  return (
    <section
      className="dimension-subsection"
      aria-labelledby="structures-heading"
    >
      <header className="dimension-section-header dimension-section-header--compact">
        <h3 id="structures-heading">Estruturas & geração especial</h3>
      </header>

      <div className="dimension-grid dimension-grid--structures">
        {all.map((st, index) => (
          <article
            key={st.className || st.name || index}
            className="dimension-card"
          >
            {st.imageUrl && (
              <div className="dimension-card-media">
                <img src={st.imageUrl} alt={st.name || st.className} />
              </div>
            )}
            <div className="dimension-card-body">
              <h4>{st.name || st.className}</h4>
              <p className="dimension-card-meta">
                <strong>Contexto:</strong> {st.context || "Geração da dimensão"}
              </p>
              {st.chance && (
                <p className="dimension-card-meta">
                  <strong>Chance:</strong> {st.chance.description}
                </p>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

/**
 * Util compartilhada com página de inimigos para exibir range de spawn.
 */
const formatSpawnRange = (min, max) => {
  if (min === undefined && max === undefined) return "--";
  if (min === max) return min ?? "--";
  if (min !== undefined && max !== undefined) return `${min} - ${max}`;
  if (min !== undefined) return `>= ${min}`;
  if (max !== undefined) return `<= ${max}`;
  return "--";
};

/**
 * Lista de mobs da dimensão (usando o data/mobs.js) em formato de carrossel.
 * Mostra apenas 1 mob por vez, com paginação simples, usando ModelViewer.
 *
 * A estrutura foi ajustada para:
 * - Ter um cabeçalho de destaque mais organizado (orb + dimensão + nome).
 * - Separar claramente vida, grupos e loot em blocos legíveis.
 * - Manter a paginação sempre alinhada embaixo do card.
 */
const MobsSection = ({ dimension, progress }) => {
  const dimId = dimension.id;

  const dimMobs = useMemo(
    () =>
      dimId
        ? mobs.filter((m) => {
            return m.dimensionId === dimId;
          })
        : [],
    [dimId],
  );

  const [currentIndex, setCurrentIndex] = useState(0);

  if (!dimMobs.length) return null;

  const mob = dimMobs[Math.min(currentIndex, dimMobs.length - 1)];
  const encountered = progress?.has ? progress.has(`mob-${mob.slug}`) : false;
  const mobHasImageModel = isImageModel(mob.model);
  const mobImageModelSrc = mobHasImageModel ? mob.model || mob.imageUrl : null;

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + dimMobs.length) % dimMobs.length);
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % dimMobs.length);
  };

  const lootCount = mob.loot?.length ?? 0;
  const hasLoot = lootCount > 0;

  return (
    <section className="dimension-subsection" aria-labelledby="mobs-heading">
      <header className="dimension-section-header dimension-section-header--compact dimension-section-header--carousel">
        <div className="dimension-section-kicker">Bestiário</div>
        <h3 id="mobs-heading">Inimigos catalogados</h3>
        <p className="dimension-section-subtitle">
          Visão geral dos mobs principais desta dimensão.
        </p>
      </header>

      <div className="dimension-mobs-carousel">
        <article key={mob.slug} className="mob-card mob-card--carousel">
          {/* HERO */}
          <header className="mob-card-hero mob-card-hero--carousel">
            <div className="mob-card-hero-main">
              <div className="mob-card-orb">
                <div
                  className={`mob-model-orb mob-model-orb-lg ${
                    encountered ? "orb-confirmed" : ""
                  }`}
                >
                  {mobHasImageModel && mobImageModelSrc ? (
                    <img
                      src={mobImageModelSrc}
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

              <div className="mob-card-hero-text">
                <span className="dimension-pill">
                  {mob.dimensionName || dimension.name || "Dimensao desconhecida"}
                </span>
                <h3 className="mob-card-title">{mob.displayName}</h3>
              </div>
            </div>
          </header>

          {/* VIDA / STATUS PRINCIPAL */}
          <section
            className="mob-card-section mob-card-section--primary-stats"
            aria-label="Vida do inimigo"
          >
            <div className="mob-health">
              <div className="mob-health-head">
                <span>Vida</span>
                <strong>
                  {typeof mob.health === "number" ? `${mob.health} HP` : "--"}
                </strong>
              </div>
              <div className="mob-health-bar">
                <div style={{ width: `100%` }} />
              </div>
            </div>
          </section>

          {/* OUTRAS INFORMAÇÕES (GRUPOS / LOOT) */}
          <section
            className="mob-card-section mob-card-section--meta"
            aria-label="Informações de spawn e loot"
          >
            <ul className="mob-card-info mob-card-info--split">
              <li className="mob-card-info-item">
                <span className="mob-card-info-label">Grupos</span>
                <strong className="mob-card-info-value">
                  {formatSpawnRange(mob.min, mob.max)}
                </strong>
              </li>
              <li className="mob-card-info-item">
                <span className="mob-card-info-label">Loot catalogado</span>
                <strong className="mob-card-info-value">
                  {hasLoot ? `${lootCount} item${lootCount > 1 ? "s" : ""}` : "Sem dados"}
                </strong>
              </li>
            </ul>
          </section>

          {/* AÇÃO PRINCIPAL */}
          <footer className="mob-card-footer mob-card-footer--carousel">
            <Link className="btn-outline" href={`/inimigos/${mob.slug}`}>
              ver mais
            </Link>
          </footer>
        </article>

        {dimMobs.length > 1 && (
          <nav
            className="dimension-mobs-carousel-pagination"
            aria-label="Navegação entre inimigos catalogados"
          >
            <button
              type="button"
              className="dimension-mobs-carousel-btn dimension-mobs-carousel-btn--prev"
              onClick={goPrev}
            >
              <span aria-hidden="true">&larr;</span>
              <span className="dimension-mobs-carousel-btn-label">Anterior</span>
            </button>

            <div className="dimension-mobs-carousel-indicator">
              <span className="dimension-mobs-carousel-indicator-current">
                {currentIndex + 1}
              </span>
              <span className="dimension-mobs-carousel-indicator-separator">/</span>
              <span className="dimension-mobs-carousel-indicator-total">
                {dimMobs.length}
              </span>
            </div>

            <button
              type="button"
              className="dimension-mobs-carousel-btn dimension-mobs-carousel-btn--next"
              onClick={goNext}
            >
              <span className="dimension-mobs-carousel-btn-label">Proximo</span>
              <span aria-hidden="true">&rarr;</span>
            </button>
          </nav>
        )}
      </div>
    </section>
  );
};

/**
 * NPCs amigáveis / comerciantes da dimensão.
 */
const NpcsSection = ({ dimension, progress }) => {
  const dimId = dimension.id;

  const dimNpcs = useMemo(
    () => (dimId ? npcs.filter((n) => n.dimensionId === dimId) : []),
    [dimId],
  );

  const [currentIndex, setCurrentIndex] = useState(0);

  if (!dimNpcs.length) return null;

  const npc = dimNpcs[Math.min(currentIndex, dimNpcs.length - 1)];
  const encountered = progress?.has ? progress.has(`npc-${npc.slug}`) : false;
  const npcHasImageModel = isImageModel(npc.model);
  const npcImageModelSrc = npcHasImageModel ? npc.model || npc.imageUrl : null;

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + dimNpcs.length) % dimNpcs.length);
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % dimNpcs.length);
  };

  const tradesCount = npc.trades?.length ?? 0;

  const orbContent = (() => {
    if (npcHasImageModel && npcImageModelSrc) {
      return (
        <img
          src={npcImageModelSrc}
          alt={`Visual de ${npc.displayName}`}
          loading="lazy"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      );
    }
    if (npc.model) {
      return (
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
      );
    }
    if (npc.imageUrl) {
      return (
        <img
          src={npc.imageUrl}
          alt={npc.displayName}
          loading="lazy"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      );
    }
    return (
      <div className="mob-card-placeholder">
        Modelo
        <span>indisponivel</span>
      </div>
    );
  })();

  return (
    <section className="dimension-subsection" aria-labelledby="npcs-heading">
      <header className="dimension-section-header dimension-section-header--compact dimension-section-header--carousel">
        <div className="dimension-section-kicker">Aliados & comerciantes</div>
        <h3 id="npcs-heading">NPCs da dimensǜo</h3>
        <p className="dimension-section-subtitle">
          Girar para ver os NPCs desta dimensǜo com seus modelos.
        </p>
      </header>

      <div className="dimension-mobs-carousel">
        <article key={npc.slug} className="mob-card mob-card--carousel">
          <header className="mob-card-hero mob-card-hero--carousel">
            <div className="mob-card-hero-main">
              <div className="mob-card-orb">
                <div
                  className={`mob-model-orb mob-model-orb-lg ${
                    encountered ? "orb-confirmed" : ""
                  }`}
                >
                  {orbContent}
                </div>
              </div>

              <div className="mob-card-hero-text">
                <span className="dimension-pill">
                  {npc.dimensionName || dimension.name || "Dimensao desconhecida"}
                </span>
                <h3 className="mob-card-title">{npc.displayName}</h3>
              </div>
            </div>
          </header>

          <section
            className="mob-card-section mob-card-section--meta"
            aria-label="Informacoes do NPC"
          >
            <ul className="mob-card-info mob-card-info--split">
              <li className="mob-card-info-item">
                <span className="mob-card-info-label">Comercio</span>
                <strong className="mob-card-info-value">
                  {tradesCount ? `${tradesCount} ofertas` : "Sem trades"}
                </strong>
              </li>
              <li className="mob-card-info-item">
                <span className="mob-card-info-label">Ficha</span>
                <strong className="mob-card-info-value">
                  <Link className="btn-text" href={`/npcs/${npc.slug}`}>
                    ver completa
                  </Link>
                </strong>
              </li>
            </ul>
          </section>
        </article>

        {dimNpcs.length > 1 && (
          <nav
            className="dimension-mobs-carousel-pagination"
            aria-label="Navega��ǜo entre NPCs desta dimensǜo"
          >
            <button
              type="button"
              className="dimension-mobs-carousel-btn dimension-mobs-carousel-btn--prev"
              onClick={goPrev}
            >
              <span aria-hidden="true">&larr;</span>
              <span className="dimension-mobs-carousel-btn-label">Anterior</span>
            </button>

            <div className="dimension-mobs-carousel-indicator">
              <span className="dimension-mobs-carousel-indicator-current">
                {currentIndex + 1}
              </span>
              <span className="dimension-mobs-carousel-indicator-separator">/</span>
              <span className="dimension-mobs-carousel-indicator-total">
                {dimNpcs.length}
              </span>
            </div>

            <button
              type="button"
              className="dimension-mobs-carousel-btn dimension-mobs-carousel-btn--next"
              onClick={goNext}
            >
              <span className="dimension-mobs-carousel-btn-label">Proximo</span>
              <span aria-hidden="true">&rarr;</span>
            </button>
          </nav>
        )}
      </div>
    </section>
  );
};

/**
 * Chefes da dimensão (carrossel usando exatamente a estrutura de BossCard).
 */
const BossesSection = ({ dimension, progress }) => {
  const bosses = Array.isArray(dimension.bosses) ? dimension.bosses : [];
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!bosses.length) return null;

  const boss = bosses[Math.min(currentIndex, bosses.length - 1)];
  const entities = boss.entities || [];
  const spawnItems = boss.spawnItems || [];

  const hasEntities = entities.length > 0;
  const active = hasEntities ? entities[0] : null; // 1ª entidade, sem selector aqui
  const activeHasImageModel = isImageModel(active?.model);
  const activeImageModelSrc = activeHasImageModel
    ? active.model || active?.imageUrl || boss.imageUrl
    : null;

  const mainSpawnItem = spawnItems[0] || null;

  const bossIdSlug = (() => {
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

    const dimPart = slugify(dimension?.id || dimension?.name || "dim");
    const bossPart = slugify(boss?.name || `boss-${currentIndex}`);
    return `${dimPart}-${bossPart}`;
  })();

  const defeated = progress?.has ? progress.has(`boss-${bossIdSlug}`) : false;

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + bosses.length) % bosses.length);
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % bosses.length);
  };

  const activeName = (() => {
    const raw =
      (active?.displayName || active?.entity || boss.name || "Chefe").toString();
    return raw.replace(/([a-z])([A-Z])/g, "$1 $2").trim();
  })();

  const formatHealth = (value) => {
    if (value === undefined || value === null) return "Sem dados";
    if (typeof value === "number") {
      if (Number.isInteger(value)) return value.toString();
      return value.toLocaleString("pt-BR", { maximumFractionDigits: 1 });
    }
    return String(value);
  };

  return (
    <section className="dimension-subsection" aria-labelledby="bosses-heading">
      <header className="dimension-section-header dimension-section-header--compact dimension-section-header--carousel">
        <div className="dimension-section-kicker">Encontros de chefe</div>
        <h3 id="bosses-heading">Chefes desta dimensão</h3>
        <p className="dimension-section-subtitle">
          Resumo dos encontros mais importantes e perigosos deste mundo.
        </p>
      </header>

      <div className="dimension-mobs-carousel">
        {/* Card copiado de BossCard (src/app/chefes/page.jsx) com adaptações mínimas */}
        <article className="mob-card boss-card">
          <div className="mob-card-hero boss-card-hero">
            <div className="mob-card-orb boss-card-orb">
              <div
                className={`mob-model-orb boss-model-orb ${
                  defeated ? "orb-confirmed" : ""
                }`}
              >
                {active && activeHasImageModel && activeImageModelSrc ? (
                  <img
                    src={activeImageModelSrc}
                    alt={`Visual do ${active.displayName || boss.name || "Chefe"}`}
                    loading="lazy"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                ) : active && active.model ? (
                  <ModelViewer
                    url={active.model}
                    width="100%"
                    height="100%"
                    enableManualZoom={true}
                    enableManualRotation={true}
                    environmentPreset="sunset"
                    placeholderSrc={active.imageUrl || boss.imageUrl}
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

            <span className="dimension-pill">
              {dimension.name || "Dimensao desconhecida"}
            </span>
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
            <Link className="btn-outline" href={`/chefes/${bossIdSlug}`}>
              ver mais
            </Link>
          </div>
        </article>

        {bosses.length > 1 && (
          <nav
            className="dimension-mobs-carousel-pagination"
            aria-label="Navegação entre chefes desta dimensão"
          >
            <button
              type="button"
              className="dimension-mobs-carousel-btn dimension-mobs-carousel-btn--prev"
              onClick={goPrev}
            >
              <span aria-hidden="true">&larr;</span>
              <span className="dimension-mobs-carousel-btn-label">Anterior</span>
            </button>

            <div className="dimension-mobs-carousel-indicator">
              <span className="dimension-mobs-carousel-indicator-current">
                {currentIndex + 1}
              </span>
              <span className="dimension-mobs-carousel-indicator-separator">
                /
              </span>
              <span className="dimension-mobs-carousel-indicator-total">
                {bosses.length}
              </span>
            </div>

            <button
              type="button"
              className="dimension-mobs-carousel-btn dimension-mobs-carousel-btn--next"
              onClick={goNext}
            >
              <span className="dimension-mobs-carousel-btn-label">Proximo</span>
              <span aria-hidden="true">&rarr;</span>
            </button>
          </nav>
        )}
      </div>
    </section>
  );
};

/**
 * Página principal de detalhes de dimensão.
 */
const DimensionDetailPage = ({ params }) => {
  const resolvedParams = use(params);
  const dimensionId = resolvedParams?.dimensionId;
  const dimension = findDimensionById(dimensionId);
  const progress = useProgress();

  if (!dimension) {
    notFound();
  }
  const {
    name,
    tier,
    prerequisiteDimension,
    theme,
    shortDescription,
    imageUrl,
    wikiUrl,
    versionNotes,
    biomes,
    biomesConfig,
    resources,
    generatedOres,
    bosses,
    generatedStructures,
    structures,
  } = dimension;

  const biomeList = useMemo(() => {
    const src = biomes || biomesConfig || null;
    if (!src) return [];
    return Array.isArray(src) ? src : Object.values(src).filter(Boolean);
  }, [biomes, biomesConfig]);

  const { mineralLike, otherResources } = useMemo(() => {
    const mineral = [];
    const other = [];

    (resources || []).forEach((res, index) => {
      const type = (res.type || "").toLowerCase();
      const isOreLike =
        type.includes("minério") ||
        type.includes("mineral") ||
        type.includes("ore") ||
        type.includes("gem") ||
        type.includes("gema");

      const target = isOreLike ? mineral : other;
      target.push({ ...res, _key: `res-${index}` });
    });

    (generatedOres || []).forEach((ore, index) => {
      mineral.push({
        name: ore.displayName || ore.name || ore.field || `Ore ${index + 1}`,
        type: "Minério gerado",
        usage: ore.generation || ore.notes || "",
        imageUrl: ore.imageUrl,
        _key: `gen-${index}`,
      });
    });

    return { mineralLike: mineral, otherResources: other };
  }, [resources, generatedOres]);

  const dimMobs = useMemo(
    () => mobs.filter((m) => m.dimensionId === dimension.id),
    [dimension.id],
  );

  const bossList = Array.isArray(bosses) ? bosses : [];

  const dimNpcs = useMemo(
    () => npcs.filter((n) => n.dimensionId === dimension.id),
    [dimension.id],
  );

  const structuresList = useMemo(() => {
    const a = generatedStructures || [];
    const b = structures || [];
    return b.length ? b : a;
  }, [generatedStructures, structures]);

  const quickStats = {
    biomeCount: biomeList.length,
    mineralCount: mineralLike.length,
    otherResourceCount: otherResources.length,
    mobCount: dimMobs.length,
    bossCount: bossList.length,
    npcCount: dimNpcs.length,
    structureCount: structuresList.length,
  };

  const visited =
    progress?.has && progress.loading === false
      ? progress.has(`dimension-${dimension.id}`)
      : false;

  return (
    <section className="page dimension-detail-page">
      <header className="dimension-hero">
        <div className="dimension-hero-top">
          <nav
            className="dimension-breadcrumb"
            aria-label="Navegação de trilha"
          >
            <Link href="/dimensoes" className="dimension-breadcrumb-link">
              Dimensões
            </Link>
            <span className="dimension-breadcrumb-separator">/</span>
            <span className="dimension-breadcrumb-current">
              {name || "Dimensão sem nome"}
            </span>
          </nav>

          <div className="dimension-hero-main">
            <div className="dimension-hero-text">
              <p className="dimension-hero-kicker">Guia de exploração</p>
              <h1 className="dimension-hero-title">
                {name || "Dimensão sem nome"}
              </h1>

              <div className="dimension-hero-meta">
                {tier != null && (
                  <span className="dimension-pill dimension-pill-lg dimension-pill--tier">
                    Tier {tier}
                  </span>
                )}
                {prerequisiteDimension && (
                  <span className="dimension-meta-item">
                    <strong>Pré-requisito:</strong> {prerequisiteDimension}
                  </span>
                )}
                {theme && (
                  <span className="dimension-meta-item">
                    <strong>Tema:</strong> {theme}
                  </span>
                )}
                <EncounterToggle
                  id={`dimension-${dimension.id}`}
                  label="Visitei"
                  size="md"
                  className="dimension-visit-toggle"
                />
              </div>

              {shortDescription && (
                <p className="dimension-hero-subtitle">{shortDescription}</p>
              )}

              <div className="dimension-hero-actions">
                <Link className="btn-primary" href="/dimensoes">
                  Voltar para lista
                </Link>
                {wikiUrl && (
                  <a
                    className="btn-outline btn-outline--ghost"
                    href={wikiUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Abrir wiki oficial
                  </a>
                )}
              </div>
            </div>

            {imageUrl && (
              <div className="dimension-hero-art">
                <div
                  className={`dimension-hero-art-frame ${visited ? "frame-confirmed" : ""}`}
                >
                  <div className="dimension-hero-art-media">
                    <img src={imageUrl} alt={name} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="dimension-hero-stats" aria-label="Resumo da dimensão">
          <StatBadge label="Biomas" value={quickStats.biomeCount} />
          <StatBadge label="Minérios & gemas" value={quickStats.mineralCount} />
          <StatBadge
            label="Outros recursos"
            value={quickStats.otherResourceCount}
          />
          <StatBadge label="NPCs" value={quickStats.npcCount} />
          <StatBadge label="Inimigos" value={quickStats.mobCount} />
          <StatBadge label="Chefes" value={quickStats.bossCount} />
          <StatBadge label="Estruturas" value={quickStats.structureCount} />
        </div>
      </header>

      <main className="dimension-layout dimension-layout--with-sidebar">
        <div className="dimension-layout-main">
          <DimensionRealmstoneSection dimension={dimension} />
          <GoalsSection dimension={dimension} />

          <section
            className="dimension-section dimension-section--group"
            aria-labelledby="environment-heading"
          >
            <header className="dimension-section-header">
              <h2 id="environment-heading">Ambiente & recursos</h2>
              <p className="dimension-section-helper">
                Biomas, minérios, recursos e estruturas especiais encontrados
                nesta dimensão.
              </p>
            </header>

            <BiomesSection dimension={dimension} />
            <ResourcesSection dimension={dimension} />
            <StructuresSection dimension={dimension} />
          </section>

          <section
            className="dimension-section dimension-section--group"
            aria-labelledby="enemies-heading"
          >
            <header className="dimension-section-header">
              <h2 id="enemies-heading">Inimigos & chefes</h2>
              <p className="dimension-section-helper">
                Habitantes desta dimensão: comerciantes, aliados e inimigos
                notáveis.
              </p>
            </header>

            <NpcsSection dimension={dimension} progress={progress} />
            <MobsSection dimension={dimension} progress={progress} />
            <BossesSection dimension={dimension} progress={progress} />
          </section>

          {versionNotes && (
            <section
              className="dimension-section dimension-section--notes"
              aria-labelledby="version-notes-heading"
            >
              <header className="dimension-section-header">
                <h2 id="version-notes-heading">Notas de versão</h2>
                <p className="dimension-section-helper">
                  Mudanças relevantes desta dimensão entre versões do mod.
                </p>
              </header>
              <p>{versionNotes}</p>
            </section>
          )}
        </div>

        <aside className="dimension-layout-sidebar" aria-label="Resumo rápido">
          <section className="dimension-quick-card">
            <header className="dimension-quick-card-header">
              <h2>Resumo para o jogador</h2>
              <p>
                Use este painel como checklist rápido antes de entrar na
                dimensão.
              </p>
            </header>
            <ul className="dimension-quick-list">
              <li>
                <span className="dimension-quick-label">Tier</span>
                <span className="dimension-quick-value">
                  {tier != null ? `Tier ${tier}` : "N/D"}
                </span>
              </li>
              <li>
                <span className="dimension-quick-label">Pré-requisito</span>
                <span className="dimension-quick-value">
                  {prerequisiteDimension || "Nenhum registrado"}
                </span>
              </li>
              <li>
                <span className="dimension-quick-label">Tema</span>
                <span className="dimension-quick-value">{theme || "-"}</span>
              </li>
              <li className="dimension-quick-separator" aria-hidden="true" />
              <li>
                <span className="dimension-quick-label">Biomas</span>
                <span className="dimension-quick-value">
                  {quickStats.biomeCount}
                </span>
              </li>
              <li>
                <span className="dimension-quick-label">Minérios & gemas</span>
                <span className="dimension-quick-value">
                  {quickStats.mineralCount}
                </span>
              </li>
              <li>
                <span className="dimension-quick-label">Outros recursos</span>
                <span className="dimension-quick-value">
                  {quickStats.otherResourceCount}
                </span>
              </li>
              <li>
                <span className="dimension-quick-label">Inimigos</span>
                <span className="dimension-quick-value">
                  {quickStats.mobCount}
                </span>
              </li>
              <li>
                <span className="dimension-quick-label">Chefes</span>
                <span className="dimension-quick-value">
                  {quickStats.bossCount}
                </span>
              </li>
              <li>
                <span className="dimension-quick-label">Estruturas</span>
                <span className="dimension-quick-value">
                  {quickStats.structureCount}
                </span>
              </li>
            </ul>
          </section>
        </aside>
      </main>
    </section>
  );
};

export default DimensionDetailPage;
