"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  useRef,
} from "react";
import { useUser } from "@clerk/nextjs";

const ProgressContext = createContext({
  has: () => false,
  toggle: () => {},
  setState: () => {},
  loading: false,
});

const storageKeyForUser = (userId) =>
  userId ? `aoa_progress_${userId}` : "aoa_progress_anon";

export const ProgressProvider = ({ children, initialProgress }) => {
  const { isLoaded, isSignedIn, user } = useUser();
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState(() => new Set(initialProgress || []));
  const lastUserKeyRef = useRef(null);
  const syncingRef = useRef(false);

  // Load from localStorage when the user context is ready
  useEffect(() => {
    if (!isLoaded) return;
    const key = storageKeyForUser(isSignedIn ? user?.id : null);

    if (lastUserKeyRef.current === key) {
      setLoading(false);
      return;
    }

    try {
      const raw = localStorage.getItem(key);
      const stored = raw ? JSON.parse(raw) : [];
      // Server data is the source of truth; local storage acts as cache/fallback.
      const next =
        Array.isArray(initialProgress) && initialProgress.length > 0
          ? new Set(initialProgress)
          : new Set(stored || []);
      setItems(next);
    } catch {
      // ignore storage errors; keep initial state
    } finally {
      setLoading(false);
      lastUserKeyRef.current = key;
    }
  }, [isLoaded, isSignedIn, user?.id, initialProgress]);

  // Persist on change
  useEffect(() => {
    if (!isLoaded) return;
    const key = storageKeyForUser(isSignedIn ? user.id : null);
    try {
      localStorage.setItem(key, JSON.stringify(Array.from(items)));
    } catch {
      // ignore storage errors
    }
  }, [items, isLoaded, isSignedIn, user?.id]);

  const has = useCallback((id) => items.has(id), [items]);

  const setState = useCallback((id, state) => {
    if (!id) return;
    setItems((prev) => {
      const next = new Set(prev);
      if (state) next.add(id);
      else next.delete(id);
      return next;
    });
  }, []);

  const toggle = useCallback((id) => {
    if (!id) return;
    setItems((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const syncToServer = useCallback(
    async (id, state) => {
      if (!isSignedIn || !user?.id) return;
      if (!id) return;
      // Prevent overlapping requests for the same toggle burst
      if (syncingRef.current) return;
      syncingRef.current = true;
      try {
        await fetch("/api/progress", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ itemId: id, state }),
        });
      } catch {
        // ignore errors; UI already updated optimistically
      } finally {
        syncingRef.current = false;
      }
    },
    [isSignedIn, user?.id],
  );

  const setStateWithSync = useCallback(
    (id, state) => {
      setState(id, state);
      syncToServer(id, state);
    },
    [setState, syncToServer],
  );

  const value = useMemo(
    () => ({
      has,
      toggle,
      setState,
      setStateWithSync,
      loading,
      all: items,
    }),
    [has, toggle, setState, setStateWithSync, loading, items],
  );

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => useContext(ProgressContext);
