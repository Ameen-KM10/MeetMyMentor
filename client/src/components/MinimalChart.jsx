import React, { useRef, useEffect, useState } from "react";

const MinimalChart = ({ className = "" }) => {
  const svgRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [played, setPlayed] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !played) {
          setInView(true);
          setPlayed(true);
        }
      },
      { threshold: 0.2 }
    );
    if (svgRef.current) observer.observe(svgRef.current);
    return () => observer.disconnect();
  }, [played]);

  return (
    <svg
      ref={svgRef}
      className={`opacity-50 lg:opacity-100 ${className}`}
      viewBox="0 0 240 140"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Animated chart"
    >
      <defs>
        <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FF7A18" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#FF7A18" stopOpacity="0" />
        </linearGradient>
        <style>{`
          .chart-line {
            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
            ${inView ? "animation: drawLine 6.5s ease forwards;" : ""}
          }
          @keyframes drawLine {
            to { stroke-dashoffset: 0; }
          }
          .chart-fill {
            opacity: 0;
            ${inView ? "animation: fadeFill 0.8s ease forwards; animation-delay: 1.0s;" : ""}
          }
          @keyframes fadeFill {
            to { opacity: 1; }
          }
        `}</style>
      </defs>
      {/* Gradient area under the curve */}
      <path
        className="chart-fill"
        d="M10,120 
           C50,80 80,80 100,95
           S140,95 160,80
           S200,60 230,20
           L230,120 L10,120 Z"
        fill="url(#lineGradient)"
      />
      {/* Chart line */}
      <path
        className="chart-line"
        d="M10,120 
           C50,80 80,80 100,95
           S140,95 160,80
           S200,60 230,20"
        fill="none"
        stroke="#FF7A18"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default MinimalChart;
