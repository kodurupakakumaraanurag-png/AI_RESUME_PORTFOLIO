import React from 'react';
import { MapPin, Calendar, CheckCircle2, Building2 } from 'lucide-react';
import { experience } from '../data/portfolioData';

export const ExperienceCV = () => {
  return (
    <section id="experience" className="section-spacing" style={{
      borderBottom: '1px solid var(--border-subtle)',
      backgroundColor: 'var(--bg-subtle)'
    }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: '3rem' }}>
          <div className="section-tag">
            <span>02 / PROFESSIONAL EXPERIENCE</span>
          </div>
          <h2 className="section-title">
            Engineering & Industry History
          </h2>
          <p className="section-desc">
            Clean CV timeline outlining roles, technical responsibilities, and quantified business results.
          </p>
        </div>

        {/* Editorial Experience List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {experience.map((item) => (
            <div
              key={item.id}
              style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-lg)',
                padding: '2rem',
                position: 'relative'
              }}
            >
              {/* Header Info */}
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem',
                marginBottom: '1.25rem',
                paddingBottom: '1.25rem',
                borderBottom: '1px solid var(--border-subtle)'
              }}>
                <div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    marginBottom: '0.25rem'
                  }}>
                    <Building2 size={18} style={{ color: 'var(--accent-primary)' }} />
                    <h3 style={{
                      fontSize: '1.375rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      letterSpacing: '-0.01em'
                    }}>
                      {item.company}
                    </h3>
                  </div>

                  <div style={{
                    fontSize: '1.0625rem',
                    fontWeight: 600,
                    color: 'var(--accent-primary)',
                    marginBottom: '0.35rem'
                  }}>
                    {item.role}
                  </div>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.25rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: 'var(--text-muted)'
                  }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <MapPin size={13} />
                      {item.location}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <Calendar size={13} />
                      {item.period}
                    </span>
                  </div>
                </div>

                {/* Status Chip */}
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: '#10B981',
                  backgroundColor: 'rgba(16, 185, 129, 0.08)',
                  border: '1px solid rgba(16, 185, 129, 0.25)',
                  padding: '0.25rem 0.65rem',
                  borderRadius: 'var(--radius-sm)'
                }}>
                  <span style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: '#10B981'
                  }} />
                  <span>{item.status}</span>
                </div>
              </div>

              {/* Accomplishments Bullet Points */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {item.achievements.map((ach, aIdx) => (
                  <div
                    key={aIdx}
                    className="cv-achievement-row"
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.75rem',
                      fontSize: '0.9375rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6,
                      padding: '0.4rem 0.6rem',
                      borderRadius: 'var(--radius-sm)',
                      transition: 'all 0.18s ease'
                    }}
                  >
                    <div style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--accent-primary)',
                      marginTop: '0.65rem',
                      flexShrink: 0,
                      transition: 'transform 0.18s ease'
                    }} className="cv-dot" />
                    <div style={{ flex: 1 }}>
                      {ach.text}
                    </div>
                    {ach.metric && (
                      <span className="metric-pill" style={{ flexShrink: 0 }}>
                        {ach.metric}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .cv-achievement-row:hover {
          background-color: var(--bg-surface-hover);
          color: var(--text-primary) !important;
        }
        .cv-achievement-row:hover .cv-dot {
          transform: scale(1.6);
        }
      `}</style>
    </section>
  );
};
