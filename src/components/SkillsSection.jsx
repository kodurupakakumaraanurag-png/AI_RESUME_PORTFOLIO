import React, { useState } from 'react';
import {
  Sparkles, Search, FileCode2, Database, Zap, Binary,
  Palette, Layers, Bot, Workflow, Cpu, Server, Network
} from 'lucide-react';
import { skills } from '../data/portfolioData';

export const SkillsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'All',
    'Generative AI',
    'Machine Learning',
    'Programming',
    'Database & Backend',
    'Tools'
  ];

  const renderSkillIcon = (iconName) => {
    const props = { size: 22, className: 'skill-icon' };
    switch (iconName) {
      case 'Bot': return <Bot {...props} />;
      case 'Cpu': return <Cpu {...props} />;
      case 'Zap': return <Zap {...props} />;
      case 'Binary': return <Binary {...props} />;
      case 'Layers': return <Layers {...props} />;
      case 'Workflow': return <Workflow {...props} />;
      case 'FileCode2': return <FileCode2 {...props} />;
      case 'Database': return <Database {...props} />;
      case 'DatabaseZap': return <Database {...props} />;
      case 'Network': return <Network {...props} />;
      case 'Server': return <Server {...props} />;
      default: return <FileCode2 {...props} />;
    }
  };

  const filteredSkills = skills.filter((item) => {
    const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesQuery = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <section id="skills" className="section tech-stack-section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} />
            <span>Technical Skills</span>
          </div>
          <h2 className="section-title">Technical Skills & AI Stack</h2>
          <p className="section-subtitle">
            Hands-on expertise across Generative AI & RAG architectures, Machine Learning (Scikit-learn, XGBoost), Python OOP, SQL query optimization, and automated ETL pipelines.
          </p>
        </div>

        {/* Filters & Search */}
        <div className="skills-filter-wrapper">
          <div className="category-tabs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`category-tab ${selectedCategory === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="skills-search-box">
            <Search size={16} className="search-icon" />
            <input
              type="text"
              placeholder="Search skill (e.g. RAG, Python, LLMs, SQL)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="skills-search-input"
            />
          </div>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className={`skill-card glass-card ${skill.highlight ? 'skill-highlight' : ''}`}
            >
              <div className="skill-card-top">
                <div className="skill-icon-wrapper">
                  {renderSkillIcon(skill.iconName)}
                </div>
                <div className="skill-badges">
                  {skill.highlight && (
                    <span className="highlight-badge">Core Expert</span>
                  )}
                  <span className="exp-badge">{skill.experienceYears}</span>
                </div>
              </div>

              <div className="skill-info">
                <h3 className="skill-name">{skill.name}</h3>
                <p className="skill-desc">{skill.description}</p>
              </div>

              <div className="skill-mastery">
                <div className="mastery-header">
                  <span className="mastery-label">Proficiency</span>
                  <span className="mastery-value">{skill.level}%</span>
                </div>
                <div className="mastery-track">
                  <div className="mastery-fill" style={{ width: `${skill.level}%` }} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Fallback */}
        {filteredSkills.length === 0 && (
          <div className="no-results glass-card">
            <p>No technologies found matching "{searchQuery}" in category "{selectedCategory}".</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="btn btn-secondary btn-sm"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
