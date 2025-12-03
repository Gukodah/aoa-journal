"use client";

import { useEffect, useRef, useState } from "react";
import { useProgress } from "../context/ProgressProvider.jsx";

const STORAGE_KEY = "aoa_encountered";

const readStore = () => {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
};

const writeStore = (next) => {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    // ignore persistence errors
  }
};

export const EncounterToggle = ({
  id,
  label = "Encontrei",
  size = "sm",
  className = "",
  onInit,
  onToggle,
}) => {
  const progress = useProgress();
  const [checked, setChecked] = useState(false);
  const didInit = useRef(false);
   const onInitRef = useRef(onInit);

  useEffect(() => {
    onInitRef.current = onInit;
  }, [onInit]);

  useEffect(() => {
    if (!id || progress?.loading) return;

    // Prefer provider state if available; fallback to localStorage
    const fromContext =
      progress?.has && progress.loading === false
        ? progress.has(id)
        : undefined;
    const store = readStore();
    const next = typeof fromContext === "boolean" ? fromContext : !!store[id];

    if (!didInit.current || next !== checked) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setChecked(next);
      if (!didInit.current && onInitRef.current) {
        didInit.current = true;
        onInitRef.current(next);
      } else {
        didInit.current = true;
      }
    }
  }, [id, progress, progress?.has, progress?.loading, checked]);

  const toggle = () => {
    if (!id) return;
    const store = readStore();
    const nextValue = !checked;
    const nextStore = { ...store, [id]: nextValue };
    writeStore(nextStore);
    setChecked(nextValue);
    if (progress?.setStateWithSync) {
      progress.setStateWithSync(id, nextValue);
    } else if (progress?.setState) {
      progress.setState(id, nextValue);
    }
    if (onToggle) onToggle(nextValue);
  };

  return (
    <button
      type="button"
      className={`encounter-toggle encounter-toggle-${size} ${
        checked ? "checked" : ""
      } ${className}`}
      onClick={toggle}
      aria-pressed={checked}
      aria-label={`${checked ? "Desmarcar" : "Marcar"} ${label}`}
    >
      <span className="encounter-toggle-box" aria-hidden="true">
        {checked && (
          <svg
            viewBox="0 0 24 24"
            role="presentation"
            className="encounter-toggle-icon"
          >
            <path
              fill="currentColor"
              d="M9.5 15.5 6 12l1.4-1.4 2.1 2.1 6-6L17 8l-7.5 7.5Z"
            />
          </svg>
        )}
      </span>
      <span className="encounter-toggle-label">{label}</span>
    </button>
  );
};
