import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, Award } from 'lucide-react';
import { experience, certifications } from '../data/portfolioData';

export const ExperienceSection = () => {
  const [selectedExpId, setSelectedExpId] = useState(experience[0].id);

  const activeExp = experience.find((e) => e.id === selectedExpId) || experience[0];

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Briefcase size={14} />
            <span>Career & Accomplishments</span>
          </div>
          <h2 className="section-title">Professional Work Experience</h2>
          <p className="section-subtitle">
            Demonstrated history of deploying production machine learning models, architecting RAG pipelines, and optimizing high-throughput data workflows.
          </p>
        </div>

        {/* Experience Layout */}
        <div className="experience-layout">
          {/* Left Timeline Nav */}
          <div className="experience-timeline-nav">
            {experience.map((exp) => (
              <button
                key={exp.id}
                onClick={() => setSelectedExpId(exp.id)}
                className={`timeline-tab-btn glass-card ${selectedExpId === exp.id ? 'active' : ''}`}
              >
                <div className="tab-role-info">
                  <h4 className="tab-role">{exp.role}</h4>
                  <span className="tab-company">{exp.company}</span>
                </div>
                <div className="tab-meta">
                  <span className="tab-period">{exp.period}</span>
                  <ChevronRight size={16} className="tab-chevron" />
                </div>
              </button>
            ))}
          </div>

          {/* Right Details Content */}
          <div className="experience-details-content glass-card">
            <div className="exp-header">
              <div className="exp-title-block">
                <span className="exp-type-badge">{activeExp.type}</span>
                <h3 className="exp-role">{activeExp.role}</h3>
                <h4 className="exp-company">{activeExp.company}</h4>
              </div>
              <div className="exp-meta-block">
                <div className="meta-item">
                  <Calendar size={15} className="text-cyan" />
                  <span>{activeExp.period}</span>
                </div>
                <div className="meta-item">
                  <MapPin size={15} className="text-purple" />
                  <span>{activeExp.location}</span>
                </div>
              </div>
            </div>

            <p className="exp-description">{activeExp.description}</p>

            <div className="achievements-section">
              <h4 className="sub-heading">Key Achievements & Quantified Impact</h4>
              <div className="achievements-list">
                {activeExp.achievements.map((item, idx) => (
                  <div key={idx} className="achievement-item">
                    <CheckCircle2 size={18} className="achievement-icon text-emerald" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="exp-skills-section">
              <h4 className="sub-heading">Tech & Tools Employed</h4>
              <div className="tech-badge-list">
                {activeExp.skillsUsed.map((skill) => (
                  <span key={skill} className="tech-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Verified Academic Credentials & Certifications Block */}
        <div className="certifications-block">
          <div className="cert-header">
            <Award size={20} className="text-amber" />
            <h3 className="cert-title">Verified Academic Credentials & Certifications</h3>
          </div>

          <div className="certifications-grid">
            {certifications.map((cert) => (
              <div key={cert.id} className="cert-card glass-card">
                <div className="cert-badge-icon" style={{ borderColor: cert.badgeColor }}>
                  <Award size={22} style={{ color: cert.badgeColor }} />
                </div>
                <div className="cert-info">
                  <h4 className="cert-name">{cert.title}</h4>
                  <span className="cert-issuer">{cert.issuer}</span>
                  <div className="cert-meta">
                    <span className="cert-date">Graduation: {cert.date}</span>
                    <span className="cert-id">{cert.credentialId}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
