import React, { useState } from 'react';
import {
  Layers, Star, ExternalLink, ArrowRight, X, Cpu, CheckCircle2,
  CodeXml, Eye, Play
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { projects } from '../data/portfolioData';

// Sub-component: Project Modal
const ProjectModal = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');

  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container glass-card" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            <h2 className="modal-title">{project.title}</h2>
            <span className="project-category-badge">{project.category}</span>
          </div>
          <button onClick={onClose} className="btn-icon-only modal-close-btn" aria-label="Close Dialog">
            <X size={20} />
          </button>
        </div>

        {/* Tabs */}
        <div className="modal-tabs">
          <button
            onClick={() => setActiveTab('overview')}
            className={`modal-tab ${activeTab === 'overview' ? 'active' : ''}`}
          >
            Overview & Metrics
          </button>
          <button
            onClick={() => setActiveTab('architecture')}
            className={`modal-tab ${activeTab === 'architecture' ? 'active' : ''}`}
          >
            System Architecture
          </button>
          <button
            onClick={() => setActiveTab('demo')}
            className={`modal-tab ${activeTab === 'demo' ? 'active' : ''}`}
          >
            Interactive Mock Preview
          </button>
        </div>

        {/* Body */}
        <div className="modal-body">
          {activeTab === 'overview' && (
            <div className="tab-content overview-tab">
              <div className="project-modal-image-wrapper">
                <img src={project.image} alt={project.title} className="project-modal-image" />
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <p className="project-tagline" style={{ fontSize: '0.95rem', marginBottom: '0.5rem' }}>
                  {project.tagline}
                </p>
                <p className="project-full-desc">{project.fullDescription}</p>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <h4 className="sub-heading">Key Achievements & SLA Metrics</h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem' }}>
                  {project.metrics.map((m, idx) => (
                    <div key={idx} className="metric-chip" style={{ padding: '0.6rem 0.8rem', fontSize: '0.85rem' }}>
                      {m}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="sub-heading">Tech Stack & Tools</h4>
                <div className="tech-badge-list">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tech-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'architecture' && (
            <div className="tab-content architecture-tab">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
                <Cpu size={20} className="text-cyan" />
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>Engineering & System Design Highlights</h3>
              </div>

              <div className="arch-steps">
                {project.architecture.map((step, idx) => (
                  <div key={idx} className="arch-step-card glass-card">
                    <div className="step-number">{idx + 1}</div>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                      <CheckCircle2 size={16} className="text-emerald" style={{ marginTop: '3px', flexShrink: 0 }} />
                      <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{step}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="arch-note-box glass-card" style={{ marginTop: '1.5rem' }}>
                <Cpu size={18} className="text-purple" style={{ flexShrink: 0 }} />
                <p style={{ fontSize: '0.85rem' }}>
                  Built following modern software engineering principles with modular Python packages, defensive exception handling, vector database caching, and benchmarked inference latency.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'demo' && (
            <div className="tab-content demo-tab">
              <div className="mock-demo-window glass-card">
                <div className="mock-demo-bar">
                  <div className="window-dots">
                    <span className="dot dot-red" />
                    <span className="dot dot-yellow" />
                    <span className="dot dot-green" />
                  </div>
                  <div className="url-bar">
                    <ExternalLink size={12} className="text-cyan" />
                    <span>{project.liveUrl}</span>
                  </div>
                </div>

                <div className="mock-demo-viewport">
                  <img src={project.image} alt="Live Demo Screen" className="mock-screen-img" />
                  <div className="mock-overlay-banner">
                    <h4 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Interactive AI Application Sandbox</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                      Explore the live application interface or inspect the GitHub code repository.
                    </p>
                    <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-sm"
                      >
                        <ExternalLink size={15} />
                        <span>Open Live Demo</span>
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary btn-sm"
                      >
                        <GithubIcon size={15} />
                        <span>Source Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="modal-footer">
          <div className="footer-links">
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm">
              <GithubIcon size={15} />
              <span>View Source</span>
            </a>
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
              <ExternalLink size={15} />
              <span>Live Application</span>
            </a>
          </div>
          <button onClick={onClose} className="btn btn-secondary btn-sm">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = ['All', 'Generative AI', 'Machine Learning'];

  const filteredProjects = projects.filter(
    (p) => selectedCategory === 'All' || p.category === selectedCategory
  );

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Layers size={14} />
            <span>Engineering Case Studies</span>
          </div>
          <h2 className="section-title">Featured AI & Machine Learning Systems</h2>
          <p className="section-subtitle">
            Practical, production-grade applications built with RAG pipelines, Abstract Syntax Tree code analysis, and predictive demand modeling.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="projects-filter-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`project-tab ${selectedCategory === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card glass-card">
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-card-image" />
                <div className="project-image-overlay">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="btn btn-primary btn-sm"
                  >
                    <span>Inspect System</span>
                    <Eye size={15} />
                  </button>
                </div>
                {project.featured && (
                  <div className="featured-badge">
                    <Star size={12} fill="currentColor" />
                    <span>Featured System</span>
                  </div>
                )}
              </div>

              <div className="project-card-body">
                <div className="project-header-row">
                  <span className="project-category">{project.category}</span>
                  <div className="project-actions-quick">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-icon-only btn-xs"
                      title="GitHub Profile"
                    >
                      <GithubIcon size={14} />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-icon-only btn-xs"
                      title="Live Demo"
                    >
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>

                <h3 className="project-title" onClick={() => setActiveModalProject(project)}>
                  {project.title}
                </h3>
                <p className="project-tagline">{project.tagline}</p>
                <p className="project-short-desc">{project.description}</p>

                <div className="project-metrics-row">
                  {project.metrics.slice(0, 2).map((m, idx) => (
                    <span key={idx} className="metric-chip">{m}</span>
                  ))}
                </div>

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag-chip">{tag}</span>
                  ))}
                </div>
              </div>

              <div className="project-card-footer">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="btn-view-details"
                >
                  <span>View Details & Architecture</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Deep Project Inspector Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
