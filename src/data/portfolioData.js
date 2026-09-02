export const candidate = {
  name: "Kodurupaka Kumara Anurag",
  title: "AI/ML Engineer",
  subtitle: "AI/ML Engineer at Vangrove Tech | B.Tech CSE (AI & ML) | Machine Learning, GenAI, RAG, Python & SQL",
  bio: "Results-driven AI/ML Engineer with a B.Tech in Computer Science Engineering (AI & ML) and hands-on experience building production-ready machine learning models, Generative AI applications, and high-performance data pipelines. Proven track record at Vangrove Tech boosting inference throughput by 25%, slashing LLM hallucinations by 40% using RAG architectures, and optimizing SQL pipelines across 10,000+ records.",
  location: "Hyderabad, Telangana",
  phone: "+91 9502795929",
  email: "kodurupakakumaraanurag22@gmail.com",
  github: "https://github.com/kodurupakakumaraanurag-png",
  linkedin: "https://linkedin.com/in/kodurupaka-kumaraanurag-4b450b302",
  status: "AI/ML Engineer @ Vangrove Tech | Open for AI/ML Opportunities",
  education: {
    institution: "Malla Reddy Institute of Technology and Science",
    degree: "Bachelor of Technology in Computer Science Engineering (AI & ML)",
    location: "Hyderabad, India",
    period: "2022 – 2026"
  },
  stats: [
    { value: "June 2026-Present", label: "AI/ML Engineer" },
    { value: "+25%", label: "Inference Throughput Boost" },
    { value: "-40%", label: "Hallucination Reduction" },
    { value: "10,000+", label: "Records Processed" }
  ]
};

export const skills = [
  // Generative AI
  {
    name: "RAG Architectures",
    category: "Generative AI",
    level: 95,
    experienceYears: "Core",
    iconName: "Bot",
    description: "Retrieval-Augmented Generation, chunking strategies, hybrid search, context compression",
    highlight: true
  },
  {
    name: "LLMs & Vector Embeddings",
    category: "Generative AI",
    level: 93,
    experienceYears: "Core",
    iconName: "Cpu",
    description: "Dense vector embeddings, ChromaDB, FAISS, cosine similarity, semantic search",
    highlight: true
  },
  {
    name: "Prompt Engineering & Guardrails",
    category: "Generative AI",
    level: 94,
    experienceYears: "Core",
    iconName: "Zap",
    description: "Few-shot prompting, structured JSON schema outputs, defensive validation, hallucination checks",
    highlight: true
  },

  // Machine Learning
  {
    name: "Machine Learning & Scikit-Learn",
    category: "Machine Learning",
    level: 94,
    experienceYears: "Core",
    iconName: "Binary",
    description: "Supervised & unsupervised learning, classification, regression, clustering, model evaluation",
    highlight: true
  },
  {
    name: "Feature Engineering & EDA",
    category: "Machine Learning",
    level: 95,
    experienceYears: "Core",
    iconName: "Layers",
    description: "Pandas, NumPy, exploratory data analysis, outlier resolution, feature scaling, encoding",
    highlight: true
  },
  {
    name: "Model Evaluation & Hyperparameter Tuning",
    category: "Machine Learning",
    level: 91,
    experienceYears: "Core",
    iconName: "Workflow",
    description: "Cross-validation, ROC-AUC, Precision-Recall, confusion matrices, GridSearchCV",
    highlight: false
  },

  // Programming
  {
    name: "Python (OOP & Asynchronous)",
    category: "Programming",
    level: 96,
    experienceYears: "Core",
    iconName: "FileCode2",
    description: "Production scripting, object-oriented design, algorithmic optimization, typing",
    highlight: true
  },
  {
    name: "SQL & Query Optimization",
    category: "Programming",
    level: 92,
    experienceYears: "Core",
    iconName: "Database",
    description: "Complex joins, subqueries, aggregations, GROUP BY, execution plans, B-tree indexing",
    highlight: true
  },

  // Database & Backend
  {
    name: "MySQL & SQLite",
    category: "Database & Backend",
    level: 92,
    experienceYears: "Hands-on",
    iconName: "Database",
    description: "Relational database schema modeling, ACID transactions, ETL ingestion pipelines",
    highlight: false
  },
  {
    name: "REST APIs & Streamlit",
    category: "Database & Backend",
    level: 90,
    experienceYears: "Hands-on",
    iconName: "Network",
    description: "FastAPI / Flask microservices, rapid prototyping with Streamlit interactive UI",
    highlight: true
  },
  {
    name: "ETL Data Validation Pipelines",
    category: "Database & Backend",
    level: 93,
    experienceYears: "Core",
    iconName: "DatabaseZap",
    description: "Automated schema checks, deduplication, anomaly detection across 10,000+ records",
    highlight: false
  },

  // Tools
  {
    name: "Git, GitHub & VS Code",
    category: "Tools",
    level: 92,
    experienceYears: "Hands-on",
    iconName: "Workflow",
    description: "Version control, branching workflows, continuous integration, debugging environments",
    highlight: false
  },
  {
    name: "Linux & Virtual Environments",
    category: "Tools",
    level: 88,
    experienceYears: "Hands-on",
    iconName: "Server",
    description: "Bash scripting, virtualenv/conda isolation, CLI utilities, environment configs",
    highlight: false
  }
];

export const projects = [
  {
    id: "rag-ai-assistant",
    title: "RAG-Based AI Knowledge Assistant",
    tagline: "Python — LLMs — Embeddings — Vector Search — Streamlit",
    description: "Enterprise-grade semantic document retrieval system that answers domain queries with verified citations, cutting hallucinations by 40%.",
    fullDescription: "Built an enterprise-oriented semantic question-answering assistant over dense technical documents. Implemented an end-to-end RAG pipeline using Python, embedding models, vector search, and a responsive Streamlit interface. Designed dynamic context compression and prompt guardrails, achieving a 35% higher answer accuracy and reducing hallucination rates by 40%.",
    category: "Generative AI",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    tags: ["Python", "Generative AI", "RAG", "LLMs", "Vector Embeddings", "Streamlit", "Semantic Search"],
    metrics: ["40% Reduction in Hallucinations", "35% Higher Answer Accuracy", "25% Lower Retrieval Latency"],
    githubUrl: "https://github.com/kodurupakakumaraanurag-png",
    liveUrl: "https://linkedin.com/in/kodurupaka-kumaraanurag-4b450b302",
    featured: true,
    architecture: [
      "Document Ingestion & Chunking: Ingests heterogeneous PDF/TXT corpora and parses into semantic chunks with token-aware sliding windows.",
      "Vector Indexing & Similarity: Computes dense vector embeddings and indexes them using vector similarity for sub-50ms cosine retrieval.",
      "Context Assembly & Guardrails: Filters relevant context, injects system guardrails, and prompts LLMs to synthesize answers strictly with citations."
    ]
  },
  {
    id: "codeguardian-ai",
    title: "CodeGuardian AI — Static Analysis & Vulnerability Auditor",
    tagline: "Python — AST Parsing — LLM Security Prompting — REST API",
    description: "Automated static code auditing engine that detects security vulnerabilities and architectural smells with high recall.",
    fullDescription: "Engineered an intelligent code analysis tool combining Python Abstract Syntax Trees (AST) with tailored LLM reasoning. Automatically inspects codebases for security vulnerabilities, SQL injection risks, and performance bottlenecks, reducing manual code review turnaround by 60% with 92% detection precision.",
    category: "Generative AI",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    tags: ["Python", "AST Parsing", "LLMs", "Static Analysis", "Code Security", "Prompt Engineering"],
    metrics: ["92% Detection Precision", "60% Faster Review Turnaround", "Zero-Day Pattern Catching"],
    githubUrl: "https://github.com/kodurupakakumaraanurag-png",
    liveUrl: "https://linkedin.com/in/kodurupaka-kumaraanurag-4b450b302",
    featured: true,
    architecture: [
      "AST Syntax Parsing: Traverses source code syntax trees to extract call graphs, data flow paths, and tainted variables.",
      "Vulnerability Heuristics: Matches security anti-patterns against known CWE rule catalogs and flag candidates.",
      "LLM Security Remediation: Formulates targeted context prompts to explain vulnerabilities and generate drop-in patch suggestions."
    ]
  },
  {
    id: "ai-dynamic-pricing",
    title: "Dynamic Pricing & Demand Forecasting Engine",
    tagline: "Python — Scikit-Learn — XGBoost — Pandas — NumPy",
    description: "Predictive machine learning pipeline modeling price elasticity and seasonal demand trends across 10,000+ transactional records.",
    fullDescription: "Developed an end-to-end predictive forecasting model analyzing historical demand elasticity, seasonal buying behaviors, and inventory fluctuations. Engineered automated data cleaning and feature transformation pipelines that improved feature accuracy by 20% and boosted forecasted revenue margins by 15%.",
    category: "Machine Learning",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    tags: ["Python", "Scikit-Learn", "XGBoost", "Pandas", "NumPy", "Time Series", "EDA"],
    metrics: ["15% Revenue Margin Uplift", "20% Predictive Feature Accuracy", "10,000+ Transactions Analyzed"],
    githubUrl: "https://github.com/kodurupakakumaraanurag-png",
    liveUrl: "https://linkedin.com/in/kodurupaka-kumaraanurag-4b450b302",
    featured: true,
    architecture: [
      "ETL Data Cleaning: Sanitizes 10,000+ transaction rows, handling missing attributes and normalizing skew.",
      "Feature Engineering: Extracts temporal lag features, promotional elasticity, rolling moving averages, and cross-feature interactions.",
      "Ensemble Regression: Trains XGBoost and Scikit-learn regressors with cross-validation for optimal price elasticity recommendation."
    ]
  }
];

export const experience = [
  {
    id: "exp-vangrove",
    role: "AI/ML Engineer",
    company: "Vangrove Tech Private Limited",
    period: "June 2026 – Present",
    location: "Hyderabad, Telangana",
    type: "Full-time",
    description: "Leading the development of production-grade machine learning pipelines, RAG-powered Generative AI systems, and automated high-throughput data processing workflows.",
    achievements: [
      "Built predictive machine learning models and automated data pipelines, achieving a 25% improvement in inference throughput across high-frequency pipelines.",
      "Implemented RAG-based Generative AI workflows with structured vector indexing, reducing model hallucination rates by 40%.",
      "Processed and validated over 10,000+ structured and unstructured records using Pandas and NumPy, boosting data quality by 20%.",
      "Optimized SQL schemas, multi-table joins, and indexing strategies, reducing reporting turnaround by 30% and query execution time by 35%.",
      "Collaborated with cross-functional product teams to design, evaluate, and deploy scalable ML models with robust telemetry and monitoring."
    ],
    skillsUsed: [
      "Python",
      "Machine Learning",
      "Generative AI",
      "RAG",
      "LLMs",
      "Vector Search",
      "SQL Optimization",
      "Pandas",
      "NumPy",
      "Scikit-Learn",
      "ETL Pipelines"
    ]
  }
];

export const certifications = [
  {
    id: "cert-1",
    title: "Bachelor of Technology in Computer Science Engineering (AI & ML)",
    issuer: "Malla Reddy Institute of Technology and Science",
    date: "2022 – 2026",
    credentialId: "Hyderabad, India",
    badgeColor: "#00f2fe"
  }
];
