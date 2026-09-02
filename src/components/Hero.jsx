import React, { useState, useEffect } from 'react';
import { MapPin, ArrowRight, Mail, FileText, Terminal, Copy, Check } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { candidate } from '../data/portfolioData';

export const Hero = ({ onOpenContact, onOpenResume, onShowToast }) => {
  const roles = [
    'AI/ML Engineer',
    'Generative AI & RAG Specialist',
    'Machine Learning Engineer',
    'Python & LLM Pipeline Architect',
    'Predictive Systems Engineer'
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [copied, setCopied] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timer = setTimeout(() => {
      if (!isDeleting && typedText.length < currentRole.length) {
        setTypedText(currentRole.substring(0, typedText.length + 1));
      } else if (!isDeleting && typedText.length === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && typedText.length > 0) {
        setTypedText(currentRole.substring(0, typedText.length - 1));
      } else if (isDeleting && typedText.length === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, isDeleting ? 40 : 80);

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, roleIndex]);

  const jsonSnippet = `{
  "candidate": "${candidate.name}",
  "role": "${candidate.title}",
  "company": "Vangrove Tech Private Limited",
  "core_competencies": ["Python", "Machine Learning", "Generative AI", "RAG", "SQL", "Pandas", "Scikit-Learn"],
  "focus": "Machine Learning, RAG Pipelines, Vector Search & High-Throughput Inference",
  "status": "AI/ML Engineer @ Vangrove Tech | Open for Opportunities",
  "key_metrics": {
    "inference_throughput": "+25%",
    "hallucination_reduction": "-40%",
    "records_processed": "10,000+",
    "query_execution_speed": "+35%"
  }
}`;

  const handleCopyJson = () => {
    navigator.clipboard.writeText(jsonSnippet);
    setCopied(true);
    onShowToast?.("Candidate JSON profile copied to clipboard!");
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="hero" className="hero-section section">
      <div className="ambient-glow glow-cyan" />
      <div className="ambient-glow glow-purple" />

      <div className="container hero-container">
        {/* Left Column: Hero Content */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-ping" />
            <MapPin size={14} className="text-cyan" />
            <span>{candidate.location}</span>
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="hero-name-gradient">{candidate.name}</span>
            <br />
            <span className="hero-typing-container">
              <span className="hero-typing-text">{typedText}</span>
              <span className="typing-cursor">|</span>
            </span>
          </h1>

          <p className="hero-description">
            {candidate.bio}
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              <span>Explore Projects</span>
              <ArrowRight size={18} />
            </a>

            <button onClick={onOpenContact} className="btn btn-secondary">
              <Mail size={18} />
              <span>Get in Touch</span>
            </button>

            <button onClick={onOpenResume} className="btn btn-secondary">
              <FileText size={18} />
              <span>View Resume</span>
            </button>
          </div>

          <div className="hero-socials">
            <span className="social-label">Connect:</span>
            <a
              href={candidate.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
              title="GitHub Profile"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={candidate.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
              title="LinkedIn Profile"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href={`mailto:${candidate.email}`}
              className="social-btn"
              title="Send Direct Email"
            >
              <Mail size={18} />
            </a>
          </div>

          <div className="hero-stats-grid">
            {candidate.stats.map((stat, idx) => (
              <div key={idx} className="stat-card">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Interactive Code Card */}
        <div className="hero-visual">
          <div className="code-card glass-card">
            <div className="code-card-header">
              <div className="window-dots">
                <span className="dot dot-red" />
                <span className="dot dot-yellow" />
                <span className="dot dot-green" />
              </div>
              <div className="window-title">
                <Terminal size={14} />
                <span>anurag_profile.json</span>
              </div>
              <button
                onClick={handleCopyJson}
                className="btn-icon-only btn-xs"
                title="Copy JSON snippet"
              >
                {copied ? <Check size={14} className="text-emerald" /> : <Copy size={14} />}
              </button>
            </div>

            <div className="code-card-body">
              <pre className="code-pre">
                <code>
                  {"{\n"}
                  {"  "}<span className="json-key">"candidate"</span>: <span className="json-string">"{candidate.name}"</span>,{"\n"}
                  {"  "}<span className="json-key">"role"</span>: <span className="json-string">"{candidate.title}"</span>,{"\n"}
                  {"  "}<span className="json-key">"company"</span>: <span className="json-string">"Vangrove Tech Private Limited"</span>,{"\n"}
                  {"  "}<span className="json-key">"core_competencies"</span>: [
                  {"\n    "}<span className="json-string">"Python"</span>, <span className="json-string">"Machine Learning"</span>, <span className="json-string">"Generative AI"</span>,
                  {"\n    "}<span className="json-string">"RAG"</span>, <span className="json-string">"SQL"</span>, <span className="json-string">"Pandas"</span>, <span className="json-string">"Scikit-Learn"</span>
                  {"\n  ]"},
                  {"\n  "}<span className="json-key">"impact"</span>: {"{\n"}
                  {"    "}<span className="json-key">"inference_throughput"</span>: <span className="json-number">"+25%"</span>,{"\n"}
                  {"    "}<span className="json-key">"hallucination_rate"</span>: <span className="json-number">"-40%"</span>,{"\n"}
                  {"    "}<span className="json-key">"data_quality"</span>: <span className="json-number">"+20%"</span>,{"\n"}
                  {"    "}<span className="json-key">"query_speed"</span>: <span className="json-number">"+35%"</span>{"\n"}
                  {"  }"}{"\n"}
                  {"}"}
                </code>
              </pre>
            </div>

            <div className="code-card-footer">
              <div className="status-item">
                <span className="pulse-dot" />
                <span>AI Pipeline Engine: <strong>ACTIVE</strong></span>
              </div>
              <span className="latency-tag">AI/ML Engineer</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
