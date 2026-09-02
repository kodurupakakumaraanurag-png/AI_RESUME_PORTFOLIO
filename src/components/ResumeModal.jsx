import React from 'react';
import { Printer, Download, X } from 'lucide-react';
import { candidate, experience, projects } from '../data/portfolioData';

// Utility to strip any unicode emojis or sticker symbols
const stripEmojis = (str) => {
  if (typeof str !== 'string') return str;
  return str.replace(/[\u{1F300}-\u{1F9FF}\u{2600}-\u{27BF}\u{2300}-\u{23FF}\u{2B50}\u{1F1E0}-\u{1F1FF}\u{FE00}-\u{FE0F}\u{1F000}-\u{1F02F}\u{1F0A0}-\u{1F0FF}]/gu, '').trim();
};

export const ResumeModal = ({ isOpen, onClose, onShowToast }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    onShowToast?.(`Downloading ${candidate.name.replace(/\s+/g, '_')}_Resume.pdf`);
    window.print();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="resume-modal-container glass-card" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <h2 className="modal-title">Curriculum Vitae</h2>
            <span className="project-category-badge">Verified PDF Resume</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <button onClick={handlePrint} className="btn btn-secondary btn-sm">
              <Printer size={15} />
              <span>Print</span>
            </button>
            <button onClick={handleDownload} className="btn btn-primary btn-sm">
              <Download size={15} />
              <span>Download PDF</span>
            </button>
            <button onClick={onClose} className="btn-icon-only modal-close-btn" aria-label="Close Resume">
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Printable Resume Paper */}
        <div className="resume-paper" id="printable-resume">
          {/* Header */}
          <div className="resume-header text-center">
            <h1 className="resume-name">{candidate.name}</h1>
            <div className="resume-contact-bar justify-center">
              <span>{candidate.location}</span>
              <span className="divider">|</span>
              <span>{candidate.phone}</span>
              <span className="divider">|</span>
              <span>{candidate.email}</span>
            </div>

            <div className="resume-links-bar justify-center">
              <a href={candidate.linkedin} target="_blank" rel="noopener noreferrer">
                <span>LinkedIn</span>
              </a>
              <span className="divider">|</span>
              <a href={candidate.github} target="_blank" rel="noopener noreferrer">
                <span>GitHub</span>
              </a>
              <span className="divider">|</span>
              <a href="#hero" onClick={onClose}>
                <span>Portfolio</span>
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="resume-section">
            <h3 className="resume-section-title">PROFESSIONAL SUMMARY</h3>
            <p className="resume-text">{stripEmojis(candidate.bio)}</p>
          </div>

          {/* Technical Skills */}
          <div className="resume-section">
            <h3 className="resume-section-title">TECHNICAL SKILLS</h3>
            <div className="resume-skills-block">
              <p>
                <strong>Generative AI & LLMs:</strong> RAG Architectures, Vector Embeddings, ChromaDB, FAISS, Semantic Search, Prompt Engineering, Guardrails
              </p>
              <p>
                <strong>Machine Learning:</strong> Scikit-learn, XGBoost, Supervised & Unsupervised Learning, Feature Engineering, Model Evaluation, Hyperparameter Tuning
              </p>
              <p>
                <strong>Programming & Scripting:</strong> Python (OOP, Typing, Async), SQL (MySQL, SQLite)
              </p>
              <p>
                <strong>Data Processing & Libraries:</strong> Pandas, NumPy, Exploratory Data Analysis (EDA), Data Cleaning, Schema Validation
              </p>
              <p>
                <strong>Database & Backend:</strong> REST APIs (FastAPI), Streamlit, ETL Pipelines, Query Optimization, B-tree Indexing
              </p>
              <p>
                <strong>Developer Tools & Platforms:</strong> Git, GitHub, VS Code, Linux Environments
              </p>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="resume-section">
            <h3 className="resume-section-title">PROFESSIONAL EXPERIENCE</h3>
            {experience.map((exp) => (
              <div key={exp.id} className="resume-exp-item">
                <div className="exp-item-header">
                  <strong>{exp.company}</strong>
                  <span className="exp-item-location">{exp.location}</span>
                </div>
                <div className="exp-item-subheader">
                  <em>{exp.role}</em>
                  <span className="exp-item-date">{exp.period}</span>
                </div>
                <ul className="resume-bullets">
                  {exp.achievements.map((ach, idx) => (
                    <li key={idx}>{stripEmojis(ach)}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Academic Projects */}
          <div className="resume-section">
            <h3 className="resume-section-title">PROJECTS</h3>
            {projects.map((proj) => (
              <div key={proj.id} className="resume-exp-item">
                <div className="exp-item-header">
                  <strong>{stripEmojis(proj.title)}</strong>
                  <span> | <em>{proj.tags.slice(0, 4).join(', ')}</em></span>
                </div>
                <ul className="resume-bullets">
                  <li>{stripEmojis(proj.fullDescription)}</li>
                  <li>{proj.metrics.map(stripEmojis).join(' • ')}</li>
                </ul>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="resume-section">
            <h3 className="resume-section-title">EDUCATION</h3>
            <div className="resume-exp-item">
              <div className="exp-item-header">
                <strong>{candidate.education.institution}</strong>
                <span className="exp-item-location">{candidate.education.location}</span>
              </div>
              <div className="exp-item-subheader">
                <em>{candidate.education.degree}</em>
                <span className="exp-item-date">{candidate.education.period}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="modal-footer">
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            AI/ML Engineer @ Vangrove Tech | Open for AI/ML Opportunities
          </span>
          <button onClick={onClose} className="btn btn-secondary btn-sm">
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};
