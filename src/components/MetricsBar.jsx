import React from 'react';
import { keyMetrics } from '../data/portfolioData';

export const MetricsBar = () => {
  return (
    <section style={{
      backgroundColor: 'var(--bg-subtle)',
      borderBottom: '1px solid var(--border-subtle)',
      padding: '1.75rem 0'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 1fr)',
          gap: '1rem',
          alignItems: 'center'
        }} className="metrics-grid">
          {keyMetrics.map((item, idx) => (
            <div
              key={idx}
              className="metric-item-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '0.65rem 0.85rem',
                borderLeft: idx > 0 ? '1px solid var(--border-subtle)' : 'none',
                borderRadius: 'var(--radius-sm)',
                transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                cursor: 'default'
              }}
            >
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '1.25rem',
                fontWeight: 700,
                color: 'var(--accent-primary)',
                letterSpacing: '-0.02em',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem'
              }}>
                <span>{item.value}</span>
              </div>
              <div style={{
                fontSize: '0.75rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
                lineHeight: 1.25,
                marginTop: '0.15rem'
              }}>
                {item.label}
              </div>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.6875rem',
                color: 'var(--text-muted)',
                marginTop: '0.2rem'
              }}>
                {item.context}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .metric-item-card:hover {
          background-color: var(--bg-surface-hover);
          transform: translateY(-2px);
        }
        @media (max-width: 992px) {
          .metrics-grid {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 1.25rem !important;
          }
          .metric-item-card {
            border-left: none !important;
          }
        }
        @media (max-width: 576px) {
          .metrics-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
};
