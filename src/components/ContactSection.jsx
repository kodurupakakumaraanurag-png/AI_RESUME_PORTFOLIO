import React, { useState } from 'react';
import { Mail, MapPin, Clock, Copy, Check, Send, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { candidate } from '../data/portfolioData';

export const ContactSection = ({ onShowToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'AI/ML Engineer Role Opportunity',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(candidate.email);
    setCopied(true);
    onShowToast?.(`Copied ${candidate.email} to clipboard!`);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      onShowToast?.('Please fill out all required fields.');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${candidate.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _subject: `Portfolio Inquiry: ${formData.subject} (${formData.name})`
        })
      });

      if (res.ok) {
        onShowToast?.('Thank you! Your message has been sent to my inbox.');
        setFormData({
          name: '',
          email: '',
          subject: 'AI/ML Engineer Role Opportunity',
          message: ''
        });
      } else {
        throw new Error('Endpoint response error');
      }
    } catch (err) {
      console.warn('Form direct submit failed, opening mailto:', err);
      const mailtoUrl = `mailto:${candidate.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
      onShowToast?.('Opening your email client to send message...');
      window.location.href = mailtoUrl;
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Mail size={14} />
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title">Let's Connect & Collaborate</h2>
          <p className="section-subtitle">
            Open for AI/ML Engineer opportunities, Generative AI & RAG initiatives, and high-impact machine learning projects.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="contact-grid">
          {/* Left Column */}
          <div className="contact-info-column">
            <div className="info-card glass-card">
              <h3 className="info-title">Contact Channels</h3>
              <p className="info-desc">
                Feel free to send a direct message, reach out on LinkedIn, or copy my email address below.
              </p>

              <div className="contact-methods-list">
                {/* Email */}
                <div className="contact-method-item">
                  <div className="method-icon-box">
                    <Mail size={18} className="text-cyan" />
                  </div>
                  <div className="method-details">
                    <span className="method-label">Direct Email</span>
                    <a href={`mailto:${candidate.email}`} className="method-value">
                      {candidate.email}
                    </a>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="btn-icon-only btn-xs"
                    title="Copy email to clipboard"
                  >
                    {copied ? <Check size={14} className="text-emerald" /> : <Copy size={14} />}
                  </button>
                </div>

                {/* Location */}
                <div className="contact-method-item">
                  <div className="method-icon-box">
                    <MapPin size={18} className="text-purple" />
                  </div>
                  <div className="method-details">
                    <span className="method-label">Primary Location</span>
                    <span className="method-value">{candidate.location}</span>
                  </div>
                </div>

                {/* Response Time SLA */}
                <div className="contact-method-item">
                  <div className="method-icon-box">
                    <Clock size={18} className="text-amber" />
                  </div>
                  <div className="method-details">
                    <span className="method-label">Average Response Time</span>
                    <span className="method-value">&lt; 12 hours SLA</span>
                  </div>
                </div>
              </div>

              {/* Socials */}
              <div className="social-links-block">
                <span className="sub-heading">Find Me Online</span>
                <div className="social-buttons-row">
                  <a
                    href={candidate.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                  >
                    <GithubIcon size={16} />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={candidate.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                  >
                    <LinkedinIcon size={16} />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form-column">
            <form onSubmit={handleSubmit} className="contact-form glass-card">
              <div className="form-header">
                <MessageSquare size={20} className="text-cyan" />
                <h3>Send a Message</h3>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name *</label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="e.g. sarah@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Topic / Subject</label>
                <select
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="form-select"
                >
                  <option value="AI/ML Engineer Role Opportunity">
                    AI/ML Engineer Role Opportunity
                  </option>
                  <option value="Generative AI / RAG Project Consultation">
                    Generative AI / RAG Project Consultation
                  </option>
                  <option value="Machine Learning System Development">
                    Machine Learning System Development
                  </option>
                  <option value="General Inquiry">
                    General Inquiry
                  </option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  placeholder="Tell me about your AI/ML initiatives, engineering role opportunities, or project scope..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="form-textarea"
                />
              </div>

              <button type="submit" disabled={loading} className="btn btn-primary w-full">
                {loading ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <Send size={16} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
