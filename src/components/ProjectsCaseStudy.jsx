import React, { useState } from 'react';
import { ExternalLink, ArrowRight, CheckCircle2, Terminal, Code2, Cpu } from 'lucide-react';
import { GithubIcon } from './Icons';
import { caseStudies } from '../data/portfolioData';

export const ProjectsCaseStudy = () => {
  const [selectedProject, setSelectedProject] = useState(caseStudies[0].id);

  return (
    <section id="projects" className="section-spacing" style={{
      borderBottom: '1px solid var(--border-subtle)'
    }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div className="section-tag">
            <span>01 / ENGINEERING CASE STUDIES</span>
          </div>
          <h2 className="section-title">
            Featured AI & ML Technical Implementations
          </h2>
          <p className="section-desc">
            Detailed technical breakdowns of production machine learning architectures, Generative AI models, and data pipelines built for real-world impact.
          </p>
        </div>

        {/* Case Study List Container */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {caseStudies.map((project, idx) => (
            <article
              key={project.id}
              className="card-clean"
              style={{
                padding: '2rem',
                backgroundColor: 'var(--bg-card)',
                borderRadius: 'var(--radius-lg)'
              }}
            >
              {/* Top Meta Bar */}
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem',
                marginBottom: '1.25rem',
                paddingBottom: '1rem',
                borderBottom: '1px solid var(--border-subtle)'
              }}>
                <div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    marginBottom: '0.35rem'
                  }}>
                    <span style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: 'var(--accent-primary)',
                      backgroundColor: 'var(--accent-light)',
                      border: '1px solid var(--accent-border)',
                      padding: '0.15rem 0.5rem',
                      borderRadius: 'var(--radius-sm)'
                    }}>
                      CASE STUDY 0{idx + 1}
                    </span>
                    <h3 style={{
                      fontSize: '1.5rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      letterSpacing: '-0.015em'
                    }}>
                      {project.title}
                    </h3>
                  </div>
                  <p style={{
                    fontSize: '0.9375rem',
                    color: 'var(--text-secondary)'
                  }}>
                    {project.subtitle}
                  </p>
                </div>

                {/* Tech Badges */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.4rem',
                  maxWidth: '450px'
                }}>
                  {project.techStack.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Architecture Steps Flow Visualizer */}
              <div style={{
                backgroundColor: 'var(--bg-main)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: '1.25rem',
                marginBottom: '1.75rem'
              }}>
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <Cpu size={14} style={{ color: 'var(--accent-primary)' }} />
                  <span>SYSTEM ARCHITECTURE & PIPELINE FLOW</span>
                </div>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: `repeat(${project.architectureSteps.length}, 1fr)`,
                  gap: '0.75rem'
                }} className="arch-flow-grid">
                  {project.architectureSteps.map((step, sIdx) => (
                    <div
                      key={sIdx}
                      className="arch-step-box"
                      style={{
                        backgroundColor: 'var(--bg-surface)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: 'var(--radius-sm)',
                        padding: '0.75rem',
                        position: 'relative',
                        transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                        cursor: 'default'
                      }}
                    >
                      <div style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.6875rem',
                        fontWeight: 600,
                        color: 'var(--accent-primary)',
                        marginBottom: '0.2rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                      }}>
                        <span>STEP 0{sIdx + 1}</span>
                        <span style={{ fontSize: '0.625rem', color: 'var(--text-muted)' }}>→</span>
                      </div>
                      <div style={{
                        fontSize: '0.8125rem',
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                        marginBottom: '0.25rem'
                      }}>
                        {step.name}
                      </div>
                      <div style={{
                        fontSize: '0.75rem',
                        color: 'var(--text-muted)',
                        lineHeight: 1.3
                      }}>
                        {step.detail}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Main Case Content (Problem vs Approach vs Metrics) */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 280px',
                gap: '1.5rem',
                marginBottom: '1.5rem'
              }} className="case-content-grid">
                
                {/* Problem Statement */}
                <div style={{
                  backgroundColor: 'var(--bg-subtle)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.25rem'
                }}>
                  <h4 style={{
                    fontSize: '0.875rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-mono)',
                    marginBottom: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem'
                  }}>
                    <span style={{ color: '#EF4444' }}>●</span> PROBLEM STATEMENT
                  </h4>
                  <p style={{
                    fontSize: '0.875rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.55
                  }}>
                    {project.problem}
                  </p>
                </div>

                {/* Technical Approach */}
                <div style={{
                  backgroundColor: 'var(--bg-subtle)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.25rem'
                }}>
                  <h4 style={{
                    fontSize: '0.875rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-mono)',
                    marginBottom: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem'
                  }}>
                    <span style={{ color: 'var(--accent-primary)' }}>●</span> TECHNICAL APPROACH
                  </h4>
                  <p style={{
                    fontSize: '0.875rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.55
                  }}>
                    {project.approach}
                  </p>
                </div>

                {/* Quantitative Impact / Results Callout Box */}
                <div style={{
                  backgroundColor: 'var(--accent-light)',
                  border: '1px solid var(--accent-border)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}>
                  <div>
                    <h4 style={{
                      fontSize: '0.875rem',
                      fontWeight: 700,
                      color: 'var(--accent-primary)',
                      fontFamily: 'var(--font-mono)',
                      marginBottom: '0.75rem'
                    }}>
                      QUANTIFIABLE IMPACT
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                      {project.metrics.map((m, mIdx) => (
                        <div key={mIdx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{m.label}</span>
                          <span style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.875rem',
                            fontWeight: 700,
                            color: 'var(--metric-text)'
                          }}>{m.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Links Footer */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    marginTop: '1rem',
                    paddingTop: '0.75rem',
                    borderTop: '1px solid var(--accent-border)'
                  }}>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-secondary"
                        style={{ padding: '0.35rem 0.65rem', fontSize: '0.75rem' }}
                      >
                        <GithubIcon size={13} />
                        <span>Source Code</span>
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-primary"
                        style={{ padding: '0.35rem 0.65rem', fontSize: '0.75rem' }}
                      >
                        <ExternalLink size={13} />
                        <span>Live Spec</span>
                      </a>
                    )}
                  </div>
                </div>

              </div>

              {/* Detailed Bullet Points */}
              <div style={{
                paddingTop: '1rem',
                borderTop: '1px solid var(--border-subtle)'
              }}>
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: 'var(--text-muted)',
                  marginBottom: '0.5rem'
                }}>
                  ENGINEERING DELIVERABLES & OUTCOMES:
                </div>
                <ul style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '0.5rem 1.5rem'
                }} className="deliverables-grid">
                  {project.results.map((res, rIdx) => (
                    <li key={rIdx} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.4rem',
                      fontSize: '0.8125rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.45
                    }}>
                      <CheckCircle2 size={14} style={{ color: '#10B981', flexShrink: 0, marginTop: '2px' }} />
                      <span>{res}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </article>
          ))}
        </div>
      </div>

      <style>{`
        .arch-step-box:hover {
          border-color: var(--accent-primary) !important;
          transform: translateY(-2px);
          background-color: var(--bg-surface-hover) !important;
        }
        @media (max-width: 900px) {
          .case-content-grid {
            grid-template-columns: 1fr !important;
          }
          .arch-flow-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .deliverables-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 500px) {
          .arch-flow-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
