import React, { useState, useEffect } from 'react';
import { Code2, Sun, Moon, FileText, Menu, X, Sparkles } from 'lucide-react';
import { candidate } from '../data/portfolioData';

export const Navbar = ({ theme, toggleTheme, onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['hero', 'skills', 'projects', 'playground', 'experience', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#hero', id: 'hero' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'AI Sandbox', href: '#playground', id: 'playground', badge: 'Live' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className={`navbar-header ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand */}
        <a href="#hero" className="navbar-brand">
          <div className="brand-icon">
            <Code2 size={22} className="text-cyan" />
          </div>
          <div className="brand-text">
            <span className="brand-name">{candidate.name}</span>
            <span className="brand-role">AI/ML Engineer</span>
          </div>
        </a>

        {/* Status Badge */}
        <div className="navbar-status-badge">
          <span className="status-dot" />
          <span>Available for hire</span>
        </div>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
            >
              {item.name}
              {item.badge && <span className="nav-item-badge">{item.badge}</span>}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="navbar-actions">
          <button
            onClick={toggleTheme}
            className="btn-icon-only"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={19} /> : <Moon size={19} />}
          </button>

          <button onClick={onOpenResume} className="btn btn-secondary btn-sm navbar-resume-btn">
            <FileText size={16} />
            <span>Resume</span>
          </button>

          <button
            className="mobile-toggle btn-icon-only"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Mobile Navigation"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="mobile-drawer glass-card">
          <div className="mobile-drawer-links">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`mobile-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => setMobileOpen(false)}
              >
                <span>{item.name}</span>
                {item.badge && <span className="nav-item-badge">{item.badge}</span>}
              </a>
            ))}
          </div>
          <div className="mobile-drawer-footer">
            <button
              onClick={() => {
                setMobileOpen(false);
                onOpenResume();
              }}
              className="btn btn-primary w-full"
            >
              <Sparkles size={16} />
              <span>View Full Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
