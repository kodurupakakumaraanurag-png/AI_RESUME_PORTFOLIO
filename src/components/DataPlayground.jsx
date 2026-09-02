import React, { useState } from 'react';
import { Zap, Play, RefreshCw, Copy, Check, Cpu, Code2 } from 'lucide-react';
import { candidate, skills } from '../data/portfolioData';

export const DataPlayground = ({ onShowToast }) => {
  const [activeEndpoint, setActiveEndpoint] = useState('rag');
  const [loading, setLoading] = useState(false);
  const [latency, setLatency] = useState(14);
  const [copied, setCopied] = useState(false);

  // Custom payload states for candidate-match
  const [targetRole, setTargetRole] = useState('AI/ML Engineer');
  const [targetStack, setTargetStack] = useState('Python, Machine Learning, Generative AI, RAG, SQL');

  const generateResponse = (endpoint) => {
    switch (endpoint) {
      case 'rag':
        return {
          status: 200,
          pipeline: "Enterprise-RAG-Retrieval-Pipeline-v2",
          timestamp: new Date().toISOString(),
          query: "How does the system ensure zero hallucinations in technical QA?",
          retrieval_metrics: {
            vector_db: "ChromaDB / FAISS",
            top_k_chunks: 5,
            cosine_similarity: 0.942,
            retrieval_latency_ms: 18.4,
            context_compression: "Activated (Sliding Token Window)"
          },
          guardrails: {
            citation_enforcement: "STRICT",
            hallucination_filter: "PASSED (Confidence 98.6%)",
            hallucination_reduction_rate: "40%"
          },
          generated_answer: "The RAG assistant enforces source ground truth by grounding all generated tokens strictly in retrieved vector chunks with verifiable page-level citations."
        };

      case 'inference':
        return {
          status: 200,
          model_engine: "Predictive Demand & Elasticity Regressor (XGBoost + Scikit-learn)",
          benchmark_suite: {
            batch_size: 128,
            inference_throughput_gain: "+25%",
            p99_latency_ms: 12.8,
            feature_importance_top_3: ["historical_demand_lag_7d", "price_elasticity_index", "promotional_discount_rate"],
            model_accuracy_f1: 0.938
          },
          status_code: "HEALTHY_OPTIMIZED"
        };

      case 'pipeline':
        return {
          status: 200,
          service: "Automated-ETL-Validation-Node",
          records_processed: 10000,
          schema_integrity: "100% VALIDATED",
          telemetry: {
            data_quality_improvement: "+20%",
            missing_values_resolved: 412,
            duplicate_records_purged: 89,
            query_execution_speedup: "+35%",
            report_turnaround_reduction: "-30%"
          },
          environment: {
            runtime: "Python 3.11",
            database: "MySQL / SQLite",
            status: "ACTIVE"
          }
        };

      case 'match':
        return {
          status: 200,
          ai_evaluator: "AI-Talent-Matchmaker-v3.0",
          evaluated_candidate: candidate.name,
          evaluated_role: targetRole || "AI/ML Engineer",
          required_stack: targetStack || "Python, Machine Learning, Generative AI, RAG",
          overall_match_score: "99.4%",
          fit_analysis: [
            "Proven production experience at Vangrove Tech delivering a 25% boost in ML throughput.",
            "Architected end-to-end RAG workflows slashing LLM hallucinations by 40%.",
            "Validated and processed 10,000+ records with Pandas, NumPy, and optimized SQL.",
            "Strong academic background with a B.Tech in CSE (AI & ML) from Malla Reddy Institute of Technology and Science."
          ],
          recommendation: "EXCEPTIONAL CANDIDATE — STRONG HIRE"
        };

      default:
        return { status: 200, message: "OK" };
    }
  };

  const [currentResponse, setCurrentResponse] = useState(generateResponse('rag'));

  const handleExecute = (endpointKey = activeEndpoint) => {
    setLoading(true);
    const start = performance.now();
    setTimeout(() => {
      setCurrentResponse(generateResponse(endpointKey));
      const end = performance.now();
      setLatency(Math.round(end - start + Math.random() * 8));
      setLoading(false);
    }, 280);
  };

  const handleEndpointSelect = (ep) => {
    setActiveEndpoint(ep);
    handleExecute(ep);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(currentResponse, null, 2));
    setCopied(true);
    onShowToast?.("Endpoint JSON response copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="playground" className="section playground-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Zap size={14} />
            <span>Interactive AI Sandbox</span>
          </div>
          <h2 className="section-title">Live AI & Machine Learning Console</h2>
          <p className="section-subtitle">
            Simulate live API endpoints testing RAG semantic retrieval, model inference throughput, ETL data validation, and candidate role matching.
          </p>
        </div>

        {/* Console Window */}
        <div className="playground-console glass-card">
          {/* Header */}
          <div className="console-header">
            <div className="window-dots">
              <span className="dot dot-red" />
              <span className="dot dot-yellow" />
              <span className="dot dot-green" />
            </div>

            <div className="endpoint-selector">
              <button
                onClick={() => handleEndpointSelect('rag')}
                className={`endpoint-btn ${activeEndpoint === 'rag' ? 'active' : ''}`}
              >
                <span className="http-method post">POST</span>
                <span>/api/v1/rag-retrieval</span>
              </button>

              <button
                onClick={() => handleEndpointSelect('inference')}
                className={`endpoint-btn ${activeEndpoint === 'inference' ? 'active' : ''}`}
              >
                <span className="http-method post">POST</span>
                <span>/api/v1/model-inference</span>
              </button>

              <button
                onClick={() => handleEndpointSelect('pipeline')}
                className={`endpoint-btn ${activeEndpoint === 'pipeline' ? 'active' : ''}`}
              >
                <span className="http-method get">GET</span>
                <span>/api/v1/data-pipeline</span>
              </button>

              <button
                onClick={() => handleEndpointSelect('match')}
                className={`endpoint-btn ${activeEndpoint === 'match' ? 'active' : ''}`}
              >
                <span className="http-method post">POST</span>
                <span>/api/v1/candidate-match</span>
              </button>
            </div>

            <button
              onClick={() => handleExecute()}
              disabled={loading}
              className="btn btn-primary btn-sm console-run-btn"
            >
              {loading ? (
                <RefreshCw size={14} className="animate-spin-slow" />
              ) : (
                <Play size={14} />
              )}
              <span>Execute Request</span>
            </button>
          </div>

          {/* AI Matcher Custom Payload Bar */}
          {activeEndpoint === 'match' && (
            <div className="console-payload-bar">
              <div className="payload-field">
                <label>Target Role:</label>
                <input
                  type="text"
                  value={targetRole}
                  onChange={(e) => setTargetRole(e.target.value)}
                  placeholder="e.g. AI/ML Engineer"
                  className="payload-input"
                />
              </div>
              <div className="payload-field">
                <label>Tech Requirements:</label>
                <input
                  type="text"
                  value={targetStack}
                  onChange={(e) => setTargetStack(e.target.value)}
                  placeholder="e.g. Python, Machine Learning, RAG, SQL"
                  className="payload-input"
                />
              </div>
            </div>
          )}

          {/* Body */}
          <div className="console-body">
            <div className="console-body-header">
              <div className="console-meta">
                <span className="status-code">HTTP 200 OK</span>
                {latency !== null && (
                  <span className="latency-badge">
                    <Zap size={12} />
                    <span>{latency} ms response time</span>
                  </span>
                )}
              </div>

              <button
                onClick={handleCopy}
                className="btn-icon-only btn-xs"
                title="Copy Response JSON"
              >
                {copied ? <Check size={14} className="text-emerald" /> : <Copy size={14} />}
              </button>
            </div>

            <pre className="console-code">
              <code>{JSON.stringify(currentResponse, null, 2)}</code>
            </pre>
          </div>

          {/* Footer */}
          <div className="console-footer">
            <div className="console-status-left">
              <Cpu size={14} className="text-cyan" />
              <span>Engineered with Python, RAG Vector Search, Scikit-Learn & High-Throughput Inference Workflows</span>
            </div>
            <div className="console-status-right">
              <Code2 size={14} />
              <span>JSON Response</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
