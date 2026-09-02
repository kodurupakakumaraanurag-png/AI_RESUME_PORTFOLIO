import React, { useState } from 'react';
import { Database, Cpu, Layers, Zap, CheckCircle2, ArrowRight } from 'lucide-react';

const pipelineNodes = [
  {
    id: 'data',
    title: 'Data Ingestion',
    label: '01. RAW DATA',
    icon: Database,
    tech: 'Pandas · SQL · JSON',
    details: 'ETL pipelines processing 10,000+ structured & unstructured records with automated cleaning.',
    metric: '20% Data Quality Improvement'
  },
  {
    id: 'prep',
    title: 'Embeddings & Indexing',
    label: '02. EMBEDDINGS',
    icon: Layers,
    tech: 'OpenAI Embeddings · Chunking',
    details: 'Recursive text chunking & dense vector generation stored in high-performance similarity index.',
    metric: 'Cosine Similarity Lookup'
  },
  {
    id: 'rag',
    title: 'RAG & Vector Store',
    label: '03. SEMANTIC RETRIEVAL',
    icon: Zap,
    tech: 'Vector DB · Dense Retrieval',
    details: 'Top-k semantic context retrieval matching incoming user query against domain knowledge index.',
    metric: '35% Higher Accuracy'
  },
  {
    id: 'llm',
    title: 'LLM Inference',
    label: '04. GROUNDED LLM',
    icon: Cpu,
    tech: 'Python · Prompt Guardrails',
    details: 'Context-injected prompt synthesis enforcing strict guardrails to eliminate response hallucinations.',
    metric: '40% Reduction in Hallucinations'
  }
];

export const ArchitectureDiagram = () => {
  const [activeStep, setActiveStep] = useState(2); // default RAG step active
  const [isPaused, setIsPaused] = useState(false);

  // Subtle auto-advance every 3.8 seconds if not hovered
  React.useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % pipelineNodes.length);
    }, 3800);
    return () => clearInterval(timer);
  }, [isPaused]);

  const activeNode = pipelineNodes[activeStep];

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      style={{
        backgroundColor: 'var(--bg-surface)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-lg)',
        padding: '1.5rem',
        position: 'relative',
        transition: 'border-color 0.2s ease'
      }}
    >
      {/* Visual Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '1.25rem',
        paddingBottom: '0.75rem',
        borderBottom: '1px solid var(--border-subtle)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: '#10B981'
          }} />
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            fontWeight: 600,
            letterSpacing: '0.05em',
            color: 'var(--text-secondary)',
            textTransform: 'uppercase'
          }}>
            SYSTEM ARCHITECTURE PIPELINE
          </span>
        </div>
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.75rem',
          color: 'var(--text-muted)'
        }}>
          INTERACTIVE SPEC
        </span>
      </div>

      {/* Nodes Flow Pipeline */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '0.5rem',
        marginBottom: '1.25rem'
      }}>
        {pipelineNodes.map((node, index) => {
          const IconComponent = node.icon;
          const isActive = index === activeStep;
          return (
            <button
              key={node.id}
              onClick={() => setActiveStep(index)}
              onMouseEnter={() => setActiveStep(index)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                padding: '0.75rem 0.5rem',
                borderRadius: 'var(--radius-md)',
                backgroundColor: isActive ? 'var(--accent-light)' : 'var(--bg-subtle)',
                border: `1px solid ${isActive ? 'var(--accent-primary)' : 'var(--border-subtle)'}`,
                transition: 'all 0.2s ease',
                cursor: 'pointer'
              }}
            >
              <div style={{
                color: isActive ? 'var(--accent-primary)' : 'var(--text-muted)',
                marginBottom: '0.35rem'
              }}>
                <IconComponent size={18} />
              </div>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.6875rem',
                fontWeight: 600,
                color: isActive ? 'var(--accent-primary)' : 'var(--text-secondary)',
                marginBottom: '0.15rem',
                lineHeight: 1.2
              }}>
                {node.label}
              </span>
              <span
                className="node-full-title"
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  color: isActive ? 'var(--text-primary)' : 'var(--text-muted)'
                }}
              >
                {node.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Node Specification Box with Slide Transition */}
      <div
        key={activeStep}
        className="animate-word-slide"
        style={{
          backgroundColor: 'var(--bg-main)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-md)',
          padding: '1rem',
          fontSize: '0.875rem'
        }}
      >
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '0.5rem'
        }}>
          <span style={{
            fontWeight: 600,
            color: 'var(--text-primary)',
            fontSize: '0.9375rem'
          }}>
            {activeNode.title}
          </span>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: 'var(--accent-primary)',
            backgroundColor: 'var(--accent-light)',
            padding: '0.15rem 0.5rem',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--accent-border)'
          }}>
            {activeNode.tech}
          </span>
        </div>

        <p style={{
          color: 'var(--text-secondary)',
          fontSize: '0.8125rem',
          lineHeight: '1.5',
          marginBottom: '0.75rem'
        }}>
          {activeNode.details}
        </p>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.75rem',
          color: '#10B981',
          fontWeight: 600
        }}>
          <CheckCircle2 size={14} />
          <span>Metric Impact: {activeNode.metric}</span>
        </div>
      </div>

      <style>{`
        .node-full-title {
          display: block;
        }
        @media (max-width: 640px) {
          .node-full-title {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};
