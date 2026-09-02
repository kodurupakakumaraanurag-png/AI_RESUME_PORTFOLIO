import React from 'react';
import { skillsCategories } from '../data/portfolioData';

export const SkillsGrid = () => {
  return (
    <section id="skills" className="section-spacing" style={{
      borderBottom: '1px solid var(--border-subtle)'
    }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: '3rem' }}>
          <div className="section-tag">
            <span>03 / TECHNICAL COMPETENCIES</span>
          </div>
          <h2 className="section-title">
            Skills & Technology Matrix
          </h2>
          <p className="section-desc">
            Structured view of machine learning, Generative AI frameworks, backend databases, and engineering tooling.
          </p>
        </div>

        {/* Clean Categorized Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.5rem'
        }} className="skills-grid">
          {skillsCategories.map((cat, idx) => (
            <div
              key={idx}
              className="card-clean"
              style={{
                padding: '1.5rem',
                backgroundColor: 'var(--bg-card)',
                borderRadius: 'var(--radius-lg)',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              {/* Category Header */}
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                fontWeight: 700,
                color: 'var(--accent-primary)',
                letterSpacing: '0.05em',
                marginBottom: '1rem',
                paddingBottom: '0.5rem',
                borderBottom: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <span>{cat.category}</span>
                <span style={{ color: 'var(--text-muted)' }}>0{idx + 1}</span>
              </div>

              {/* Skills Items */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {cat.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.15rem'
                    }}
                  >
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}>
                      <span style={{
                        fontSize: '0.875rem',
                        fontWeight: 600,
                        color: 'var(--text-primary)'
                      }}>
                        {skill.name}
                      </span>
                      <span style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.6875rem',
                        color: 'var(--text-muted)'
                      }}>
                        {skill.level}
                      </span>
                    </div>

                    <span style={{
                      fontSize: '0.75rem',
                      color: 'var(--text-secondary)'
                    }}>
                      {skill.detail}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .skills-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 576px) {
          .skills-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
