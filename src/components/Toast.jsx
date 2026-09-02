import React from 'react';
import { Sparkles, X } from 'lucide-react';

export const Toast = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className="toast-banner glass-card">
      <Sparkles size={18} className="text-cyan" />
      <span className="toast-message">{message}</span>
      <button onClick={onClose} className="toast-close-btn" aria-label="Dismiss message">
        <X size={14} />
      </button>
    </div>
  );
};
