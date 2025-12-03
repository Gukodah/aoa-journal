'use client';

import React from "react";

const ModelLoadingIndicator = ({ label = "Carregando modelo", size = "md" }) => {
  return (
    <div className="model-loader" data-size={size} aria-live="polite">
      <div className="model-loader-spinner" aria-hidden="true">
        <div className="model-loader-dot" />
      </div>
      {label ? <div className="model-loader-label">{label}</div> : null}
    </div>
  );
};

export { ModelLoadingIndicator };
