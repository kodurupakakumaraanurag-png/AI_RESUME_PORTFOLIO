import React, { useState, useEffect } from 'react';
import { Code2, Clock, ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { candidate } from '../data/portfolioData';

export const Footer = () => {
  const [istTime, setIstTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const timeStr = new Date().toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour12: true,
        hour: '2-digit',
        minute: '2-digit'
      });
      setIstTime(timeStr);
    };

    updateTime();
    const interval = setInterval(updateTime, 10000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      <div className="container footer-container">
        {/* Top Row */}
        <div className="footer-top-row">
          {/* Col 1: Brand & Tagline */}
          <div className="footer-brand">
            <a href="#hero" className="footer-logo">
              <Code2 size={24} className="text-cyan" />
              <span>{candidate.name}</span>
            </a>
            <p className="footer-tagline">
              AI/ML Engineer & B.Tech CSE (AI & ML) Graduate building practical intelligent systems with Machine Learning and Generative AI.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="footer-nav-col">
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-links">
              <li><a href="#hero">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#playground">AI Sandbox</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Col 3: Live Status & IST Clock */}
          <div className="footer-status-col">
            <h4 className="footer-heading">Live Status</h4>
            <div className="footer-time-badge glass-card">
              <Clock size={15} className="text-cyan" />
              <span>Hyderabad: <strong>{istTime || '12:00 PM'} IST</strong></span>
            </div>
            <div className="footer-status-pill">
              <span className="status-dot" />
              <span>Seeking AI/ML Engineer Roles</span>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="footer-bottom-row">
          <p className="footer-copy">
            © {new Date().getFullYear()} {candidate.name}. Built with React & Vanilla CSS.
          </p>

          <div className="footer-actions">
            <div className="footer-socials">
              <a
                href={candidate.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon-only btn-xs"
                title="GitHub"
              >
                <GithubIcon size={15} />
              </a>
              <a
                href={candidate.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon-only btn-xs"
                title="LinkedIn"
              >
                <LinkedinIcon size={15} />
              </a>
              <a
                href={`mailto:${candidate.email}`}
                className="btn-icon-only btn-xs"
                title="Email"
              >
                <Mail size={15} />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="btn-icon-only back-to-top"
              title="Back to Top"
              aria-label="Back to Top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
