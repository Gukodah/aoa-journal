"use client";

import { useMemo } from "react";
import ProgressRing from "../../components/ProgressRing";
import { useProgress } from "../../context/ProgressProvider.jsx";
import { Dimensions } from "../../data/Dimensions.jsx";

const clampPct = (value) => Math.max(0, Math.min(100, value || 0));
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

const HomePage = () => {
  const progress = useProgress();

  const { visitedCount, visitedTotal, visitedPct } = useMemo(() => {
    const allDimensions = Array.isArray(Dimensions) ? Dimensions : [];
    const total = allDimensions.length;

    // progress.all is a Set<string> provided by ProgressProvider
    const visitedSet = progress?.all || new Set();
    const visited = allDimensions.reduce((acc, dim, idx) => {
      const key = `dimension-${dim.id || dim.name || `dimension-${idx}`}`;
      return visitedSet.has(key) ? acc + 1 : acc;
    }, 0);

    const pct = total > 0 ? (visited / total) * 100 : 0;

    return {
      visitedCount: visited,
      visitedTotal: total,
      visitedPct: clampPct(pct),
    };
  }, [progress?.all]);

  const { bossesCount, bossesTotal, bossesPct } = useMemo(() => {
    const bossEntries = [];

    Dimensions.forEach((dim) => {
      if (!Array.isArray(dim?.bosses)) return;
      dim.bosses.forEach((boss, index) => {
        const dimPart = slugify(dim?.id || dim?.name || "dim");
        const bossPart = slugify(boss?.name || `boss-${index}`);
        const slug = `${dimPart}-${bossPart}`;
        bossEntries.push(slug);
      });
    });

    const total = bossEntries.length;
    const visitedSet = progress?.all || new Set();
    const defeated = bossEntries.reduce(
      (acc, slug) => (visitedSet.has(`boss-${slug}`) ? acc + 1 : acc),
      0,
    );

    const pct = total > 0 ? (defeated / total) * 100 : 0;

    return {
      bossesCount: defeated,
      bossesTotal: total,
      bossesPct: clampPct(pct),
    };
  }, [progress?.all]);

  const { mobsCount, mobsTotal, mobsPct } = useMemo(() => {
    // Mobs use the "mob-<slug>" ids.
    const { mobs: mobData = [] } = require("../../data/mobs.js");
    const total = mobData.length;
    const visitedSet = progress?.all || new Set();
    const defeated = mobData.reduce(
      (acc, mob) => (visitedSet.has(`mob-${mob.slug}`) ? acc + 1 : acc),
      0,
    );
    const pct = total > 0 ? (defeated / total) * 100 : 0;
    return {
      mobsCount: defeated,
      mobsTotal: total,
      mobsPct: clampPct(pct),
    };
  }, [progress?.all]);

  const { oresCount, oresTotal, oresPct } = useMemo(() => {
    // Ores use the "ore-<id>" ids where id comes from the collector in minerios/page.
    // Rebuild the same keys used there to keep consistency.
    const { dimensions } = require("../../data/dimensions.js");
    const oreKeys = [];

    const normaliseOreName = (rawName = "") => {
      const trimmed = rawName.trim();
      if (!trimmed) return "";
      let base = trimmed.toLowerCase();
      base = base
        .replace(/^ore\s+/i, "")
        .replace(/^min[eǸ]rio\s+de\s+/i, "")
        .replace(/^min[eǸ]rio\s+/i, "")
        .replace(/^mineral\s+de\s+/i, "")
        .replace(/^mineral\s+/i, "");
      base = base
        .replace(/\s+ore$/i, "")
        .replace(/\s+min[eǸ]rio$/i, "")
        .replace(/\s+mineral$/i, "");
      return base.trim();
    };

    dimensions.forEach((dim) => {
      const dimId = dim.id || dim.name || "dim";
      const pushKey = (rawName, imageUrl, index, prefix) => {
        const name = rawName || `entry-${index}`;
        const norm = normaliseOreName(name);
        const img = (imageUrl || "").toLowerCase();
        if (norm) {
          oreKeys.push(`ore-${dimId}-name-${norm}`);
        } else if (img) {
          oreKeys.push(`ore-${dimId}-img-${img}`);
        } else {
          oreKeys.push(`ore-${dimId}-${prefix}-${index}`);
        }
      };

      (dim.resources || []).forEach((res, idx) => {
        const type = (res.type || "").toLowerCase();
        const isOreLike =
          type.includes("minério") ||
          type.includes("mineral") ||
          type.includes("ore") ||
          type.includes("gem") ||
          type.includes("gema");
        if (!isOreLike) return;
        pushKey(res.name || res.displayName || res.field, res.imageUrl, idx, "res");
      });

      (dim.generatedOres || []).forEach((ore, idx) => {
        pushKey(ore.displayName || ore.name || ore.field, ore.imageUrl, idx, "gen");
      });
    });

    const visitedSet = progress?.all || new Set();
    const uniqueKeys = Array.from(new Set(oreKeys));
    const mined = uniqueKeys.reduce(
      (acc, key) => (visitedSet.has(`ore-${key.split("ore-")[1]}`) ? acc + 1 : acc),
      0,
    );

    const total = uniqueKeys.length;
    const pct = total > 0 ? (mined / total) * 100 : 0;

    return {
      oresCount: mined,
      oresTotal: total,
      oresPct: clampPct(pct),
    };
  }, [progress?.all]);

  return (
    <section className="page">
      <h2 className="page-title">Visão geral do mundo</h2>
      <p className="page-subtitle">
        Esse painel resume o progresso do seu mundo com o mod Advent of
        Ascension (Nevermine 2 - Tslat 1.1.3). Os dados de progresso estao
        mockados por enquanto - depois voce podera sincronizar com o servidor
        Forge/Java.
      </p>

      <div className="grid grid-4">
        <div className="card card-progress">
          <h3>Dimensões visitadas</h3>
          <ProgressRing progress={visitedPct} />
          <p className="metric">
            {visitedCount} / {visitedTotal}
          </p>
        </div>
        <div className="card card-progress">
          <h3>Chefes derrotados</h3>
          <ProgressRing progress={bossesPct} />
          <p className="metric">
            {bossesCount} / {bossesTotal}
          </p>
        </div>
        <div className="card card-progress">
          <h3>Inimigos catalogados</h3>
          <ProgressRing progress={mobsPct} />
          <p className="metric">
            {mobsCount} / {mobsTotal}
          </p>
        </div>
        <div className="card card-progress">
          <h3>Minerios minerados</h3>
          <ProgressRing progress={oresPct} />
          <p className="metric">
            {oresCount} / {oresTotal}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
