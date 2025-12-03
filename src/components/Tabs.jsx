'use client';

// src/components/Tabs.jsx
import React, { useState } from "react";

const Tabs = ({ tabs, initialValue, className = "" }) => {
  const safeInitial =
    initialValue ?? (tabs && tabs.length ? tabs[0].value : null);

  const [active, setActive] = useState(safeInitial);

  const activeTab = tabs.find((tab) => tab.value === active) || tabs[0] || null;

  return (
    <section className={`mob-detail-tabs ${className}`}>
      <div className="tabs-nav">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            type="button"
            className={`tabs-nav-item ${
              tab.value === active ? "is-active" : ""
            }`}
            onClick={() => setActive(tab.value)}
          >
            <span className="tabs-nav-label">{tab.label}</span>
            {tab.badge != null && (
              <span className="tabs-nav-item-badge">{tab.badge}</span>
            )}
          </button>
        ))}
      </div>
      <div className="tabs-panels">
        {activeTab && <div className="tabs-panel">{activeTab.content}</div>}
      </div>
    </section>
  );
};

export { Tabs };
