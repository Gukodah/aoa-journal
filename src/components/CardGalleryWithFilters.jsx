"use client";

import React, { useMemo, useState } from "react";
import { Select } from "./Select.jsx";

/**
 * Generic, reusable gallery with:
 * - Search bar
 * - Dimension (or any group) filter using themed Select
 * - Pagination
 *
 * Props:
 * - items: array<T>
 * - renderItem: (item: T) => ReactNode
 * - getSearchText: (item: T) => string   // used for text search
 * - getDimension: (item: T) => string    // used to group/filter items
 * - pageSize?: number                     // default: 9
 * - searchPlaceholder?: string
 * - dimensionPlaceholder?: string
 * - dimensionLabel?: string
 */
const CardGalleryWithFilters = ({
  items,
  renderItem,
  getSearchText,
  getDimension,
  pageSize = 12,
  searchPlaceholder = "Buscar...",
  dimensionPlaceholder = "Filtrar por dimensão",
  dimensionLabel = "Dimensão",
}) => {
  const [search, setSearch] = useState("");
  // dimension is a react-select option: { value, label } | null
  const [dimension, setDimension] = useState(null);
  const [currentPage, setPage] = useState(1);

  const dimensionOptions = useMemo(() => {
    const groups = new Map();
    items.forEach((item) => {
      const dim = getDimension(item);
      if (!dim) return;
      if (!groups.has(dim)) {
        groups.set(dim, { value: dim, label: dim });
      }
    });
    return Array.from(groups.values()).sort((a, b) =>
      a.label.localeCompare(b.label, "pt-BR"),
    );
  }, [items, getDimension]);

  const filteredItems = useMemo(() => {
    const term = search.trim().toLowerCase();
    return items.filter((item) => {
      const matchesSearch = term
        ? getSearchText(item).toLowerCase().includes(term)
        : true;

      const dim = getDimension(item);
      const matchesDimension = dimension ? dim === dimension.value : true;

      return matchesSearch && matchesDimension;
    });
  }, [items, search, dimension, getSearchText, getDimension]);

  const pageItems = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredItems.slice(start, start + pageSize);
  }, [filteredItems, currentPage, pageSize]);

  const totalPages = Math.max(1, Math.ceil(filteredItems.length / pageSize));
  const hasActiveFilters = !!search.trim() || !!dimension;

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setPage(1);
  };

  const handleDimensionChange = (option) => {
    // option is either { value, label } or null
    setDimension(option);
    setPage(1);
  };

  const handleClearDimension = () => {
    setDimension(null);
    setPage(1);
  };

  const goToPage = (newPage) => {
    const clamped = Math.min(Math.max(1, newPage), totalPages);
    setPage(clamped);
  };

  const pages = useMemo(() => {
    const arr = [];
    const maxButtons = 5;
    if (totalPages <= maxButtons) {
      for (let i = 1; i <= totalPages; i += 1) arr.push(i);
      return arr;
    }

    arr.push(1);
    let start = Math.max(2, currentPage - 1);
    let end = Math.min(totalPages - 1, currentPage + 1);

    if (start > 2) arr.push("...");
    for (let p = start; p <= end; p += 1) arr.push(p);
    if (end < totalPages - 1) arr.push("...");
    arr.push(totalPages);

    return arr;
  }, [currentPage, totalPages]);

  return (
    <section className="mob-gallery-shell">
      <div className="mob-gallery-toolbar">
        <div className="mob-gallery-search">
          <input
            type="text"
            value={search}
            onChange={handleSearchChange}
            placeholder={searchPlaceholder}
          />
        </div>

        {dimensionOptions.length > 0 && (
          <div className="mob-gallery-filter">
            <span className="mob-gallery-filter-label">{dimensionLabel}</span>
            <Select
              // Themed via classNamePrefix="dimension-select" inside Select.jsx
              isClearable
              placeholder={dimensionPlaceholder}
              options={dimensionOptions}
              defaultValue={dimension}
              onChange={handleDimensionChange}
              onClear={handleClearDimension}
            />
          </div>
        )}
      </div>

      <div className="mob-gallery">
        {pageItems.map((item) => renderItem(item))}
      </div>

      <footer className="mob-gallery-footer">
        <div className="mob-gallery-meta">
          <span>
            {filteredItems.length} resultado
            {filteredItems.length !== 1 && "s"}
            {hasActiveFilters && " filtrado(s)"}
          </span>
        </div>

        <nav className="pagination" aria-label="Paginação">
          <button
            type="button"
            className="pagination-arrow"
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            ◀
          </button>

          {pages.map((p, idx) =>
            p === "..." ? (
              <span key={`ellipsis-${idx}`} className="pagination-ellipsis">
                ...
              </span>
            ) : (
              <button
                key={p}
                type="button"
                className={`pagination-page ${
                  p === currentPage ? "is-active" : ""
                }`}
                onClick={() => goToPage(p)}
              >
                {p}
              </button>
            ),
          )}
          <button
            type="button"
            className="pagination-arrow"
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            ▶
          </button>
        </nav>
      </footer>
    </section>
  );
};

export default CardGalleryWithFilters;
