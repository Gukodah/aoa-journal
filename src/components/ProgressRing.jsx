
"use client";

import React from "react";

const ProgressRing = ({ size = 72, strokeWidth = 6, progress = 0 }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const clamped = Math.max(0, Math.min(100, progress || 0));
  const offset = circumference - (clamped / 100) * circumference;

  return (
    <svg width={size} height={size} className="progress-ring">
      <defs>
        <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ff9a3c" />
          <stop offset="100%" stopColor="#4fd4ff" />
        </linearGradient>
      </defs>
      <circle
        className="progress-ring-bg"
        strokeWidth={strokeWidth}
        fill="none"
        r={radius}
        cx={size / 2}
        cy={size / 2}
      />
      <circle
        className="progress-ring-value"
        strokeWidth={strokeWidth}
        fill="none"
        r={radius}
        cx={size / 2}
        cy={size / 2}
        strokeLinecap="round"
        style={{ strokeDasharray: circumference, strokeDashoffset: offset }}
      />
      <text
        x="50%"
        y="50%"
        dominantBaseline="central"
        textAnchor="middle"
        className="progress-ring-text"
      >
        {Math.round(clamped)}%
      </text>
    </svg>
  );
};

export default ProgressRing;
