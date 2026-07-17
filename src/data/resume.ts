// ─── Types ────────────────────────────────────────────────────────────────────

export type SkillDomain =
  | "research-nlp"
  | "data-ml"
  | "agentic-ai"
  | "engineering"
  | "infra";

export interface ResearchInterest {
  id: string;
  title: string;
  description: string;
}

export interface Publication {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: number;
  type: "journal" | "conference" | "preprint" | "thesis";
  url?: string;
}

export interface EducationEntry {
  id: string;
  degree: string;
  field: string;
  university: string;
  location: string;
  period: string;
  thesis?: string;
  coursework?: string[];
  lab?: string;
}

export interface ExperienceEntry {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  highlights: string[];
  type: "research" | "industry";
}

export interface ResearchProject {
  id: string;
  title: string;
  description: string;
  tools: string[];
  domains: SkillDomain[];
  relatedSkillIds: string[];
  outcome?: string;
  status: "research" | "published" | "production";
  featured?: boolean;
  githubUrl?: string;
  paperUrl?: string;
}

export interface Skill {
  id: string;
  name: string;
  domain: SkillDomain;
  level: 1 | 2 | 3;
  relatedProjectIds: string[];
}

export const SKILL_DOMAIN_META: Record<
  SkillDomain,
  { label: string; short: string; primary: boolean }
> = {
  "research-nlp": {
    label: "Research & NLP",
    short: "NLP",
    primary: true,
  },
  "data-ml": {
    label: "Data Science & ML",
    short: "Data / ML",
    primary: true,
  },
  "agentic-ai": {
    label: "Agentic AI & LLMs",
    short: "Agents",
    primary: true,
  },
  engineering: {
    label: "Software Engineering",
    short: "Engineering",
    primary: false,
  },
  infra: {
    label: "Infrastructure & Tools",
    short: "Infra",
    primary: false,
  },
};

export const DOMAIN_ORDER: SkillDomain[] = [
  "research-nlp",
  "data-ml",
  "agentic-ai",
  "engineering",
  "infra",
];

// ─── Site Config ──────────────────────────────────────────────────────────────

export const siteConfig = {
  name: "Santosh Gaire Sharma",
  title: "AI Engineer & NLP Researcher",
  tagline:
    "Bridging Academic Research & Production-Ready AI | Agentic AI, LLMs, Healthcare NLP",
  location: "Osaka, Japan",
  collaborationNote:
    "Based in Osaka and open to research collaborations across Japan.",
  photo: "/santoshimage.png",
  cvUrl: "/cv.pdf",
  hasCv: false,
  siteUrl: "https://ersantoshgairesharma.com.np",
  email: "gairesantosh509@gmail.com",
  linkedinUrl: "https://www.linkedin.com/in/santoshgairesharma/",
  githubUrl: "https://github.com/Santey624",
  googleScholarUrl: "",
  orcidUrl: "",
  researchStatement:
    "I am an AI Engineer and NLP Researcher at Doshisha University, currently living in Osaka, Japan, and working in the Co-Creation Informatics Laboratory (CCILAB) under Prof. Shirahama. My research centers on NLP, low-resource languages, multilingual models, medical AI, and AI safety — from Japanese–Nepali clinical summarization and diffusion-based sensing to LLM-as-a-Judge evaluation for reliable agents. With industry experience building production multi-agent systems, I combine research rigor with real-world scalability. I am actively seeking PhD opportunities and research collaborations in Japan across AI/ML, NLP, and data science at the intersection of healthcare and intelligent systems.",
} as const;

// ─── Research Interests ──────────────────────────────────────────────────────

export const researchInterests: ResearchInterest[] = [
  {
    id: "nlp",
    title: "Natural Language Processing",
    description:
      "Core NLP research spanning text generation, classification, and representation learning — with emphasis on clinical and multilingual settings across Japanese, Nepali, and English.",
  },
  {
    id: "low-resource",
    title: "Low-Resource Languages",
    description:
      "Building NLP systems for under-resourced language pairs such as Japanese–Nepali, including corpus cleaning, synthetic data, and evaluation for clinical and general domains.",
  },
  {
    id: "multilingual",
    title: "Multilingual Models",
    description:
      "Fine-tuning and adapting multilingual transformers (e.g. mT5) for cross-lingual generation, summarization, and transfer across Japanese, Nepali, and English.",
  },
  {
    id: "medical-ai",
    title: "Medical AI",
    description:
      "Clinical NLP and healthcare sensing — medical text generation, cross-lingual clinical summarization, and diffusion models for robust multimodal health-related activity recognition.",
  },
  {
    id: "ai-safety",
    title: "AI Safety",
    description:
      "Reliability and safety of AI systems: LLM-as-a-Judge evaluation pipelines, agent benchmarking, and detection of AI-generated text for integrity and information security.",
  },
  {
    id: "agentic-ai",
    title: "Agentic AI & LLMs",
    description:
      "Multi-agent orchestration, MCP-based tool use, RAG pipelines, and reasoning systems that move research ideas into production-grade applications.",
  },
];

// ─── Publications ────────────────────────────────────────────────────────────

export const publications: Publication[] = [
  {
    id: "pub-1",
    title: "Refinetograph: A Machine Learning Approach Toward Image Enhancement",
    authors: "S. Gaire Sharma, R. Pujara, P. Aryal, S. Shrestha",
    venue:
      "International Journal of Information Communication Technology and Digital Convergence, Vol. 9, No. 1, pp. 49–60",
    year: 2024,
    type: "journal",
    url: "https://www.earticle.net/Article/A455516",
  },
];

// ─── Education ───────────────────────────────────────────────────────────────

export const education: EducationEntry[] = [
  {
    id: "edu-masters",
    degree: "Master's Program",
    field: "Information and Computer Science",
    university: "Doshisha University",
    location: "Kyoto, Japan",
    period: "Sep 2025 – Sep 2027",
    lab: "Co-Creation Informatics Laboratory (CCILAB), Prof. Shirahama",
    thesis:
      "Human activity recognition via diffusion-based missing modality imputation; Cross-lingual Japanese–Nepali medical text summarization",
    coursework: [
      "Statistical Machine Learning",
      "Pattern Recognition",
      "Research and Ethics",
      "Non-linear Physics",
      "Neuroscience",
      "Nature-Inspired Computing",
      "Presentation and Documentation Preparation",
      "Research and Development",
    ],
  },
  {
    id: "edu-bachelors",
    degree: "Bachelor of Engineering",
    field: "Computer Engineering",
    university: "Tribhuvan University",
    location: "Nepal",
    period: "Apr 2019 – Apr 2024",
    thesis: "Refinetograph: A Machine Learning Approach Toward Image Enhancement",
    coursework: [
      "Artificial Intelligence",
      "Database Systems",
      "Software Engineering",
      "Computer Networks",
    ],
  },
];

// ─── Experience ──────────────────────────────────────────────────────────────

export const experience: ExperienceEntry[] = [
  {
    id: "exp-1",
    role: "Research Assistant",
    organization: "Doshisha University",
    location: "Kyoto, Japan",
    period: "May 2026 – Present",
    highlights: [
      "Researching human activity recognition by imputing missing modalities with a diffusion model",
      "Developing cross-lingual summarization systems for Japanese–Nepali medical text generation",
    ],
    type: "research",
  },
  {
    id: "exp-2",
    role: "Student Tutor",
    organization: "Doshisha University",
    location: "Kyotanabe, Japan",
    period: "Apr 2026 – Present",
    highlights: [
      "Mentoring students in specialized AI and computer science fields",
      "Guiding development of proprietary research systems and assisting in technical paper composition",
    ],
    type: "research",
  },
  {
    id: "exp-3",
    role: "AI Engineer",
    organization: "SoranoAI",
    location: "San Francisco, CA",
    period: "Sep 2025 – Apr 2026",
    highlights: [
      'Architected framework-agnostic "LLM-as-a-Judge" evaluation pipelines to benchmark reliability and safety of AI agents',
      "Designed and deployed multi-agent workflows and LLM-based reasoning systems for predictive product features",
      "Bridged AI research with commercial productization — robust frontend, backend routing, and Stripe payment integration",
      "Drove 20%+ paid conversion rate within three weeks of beta launch",
    ],
    type: "industry",
  },
  {
    id: "exp-4",
    role: "Software Engineer",
    organization: "TeamOne Technologies",
    location: "Mahalaxmi, Nepal",
    period: "May 2024 – Dec 2024",
    highlights: [
      "Engineered scalable, high-performance web applications with Next.js and Node.js",
      "Deployed interactive, low-latency live mapping systems using Leaflet.js and React-Leaflet",
      "Collaborated across cross-functional teams to optimize code performance and deliver production-grade software",
    ],
    type: "industry",
  },
];

// ─── Research Projects ───────────────────────────────────────────────────────

export const researchProjects: ResearchProject[] = [
  {
    id: "proj-nepmedjp",
    title: "NepMedJP",
    description:
      "Cross-lingual summarization system for generating Nepali medical text from Japanese clinical documents, targeting low-resource language pairs in healthcare. Active research with cleaned multilingual corpora and mT5 fine-tuning.",
    tools: ["Python", "mT5", "Hugging Face", "Transformers", "NLP"],
    domains: ["research-nlp", "data-ml"],
    relatedSkillIds: [
      "python",
      "mt5",
      "huggingface",
      "transformers",
      "nlp",
      "cross-lingual",
      "low-resource",
      "multilingual",
      "medical-nlp",
      "medical-ai",
      "mecab",
      "sentencepiece",
      "pytorch",
      "pandas",
    ],
    outcome: "Targeting COLING 2027",
    status: "research",
    featured: true,
    githubUrl: "https://github.com/Santey624/NepMedJP",
  },
  {
    id: "proj-har",
    title: "Cross-Diffusion Model for HAR",
    description:
      "Research on reconstructing missing sensor modalities in human activity recognition using cross-sensor diffusion techniques for robust multimodal sensing in health-related contexts.",
    tools: ["Python", "PyTorch", "Diffusion Models", "HAR"],
    domains: ["data-ml"],
    relatedSkillIds: [
      "python",
      "pytorch",
      "diffusion",
      "medical-ai",
      "numpy",
      "pandas",
      "stats",
      "matplotlib",
    ],
    outcome: "Publication planned",
    status: "research",
    featured: true,
    githubUrl: "https://github.com/Santey624/Cross-Diffusion-model-for-HAR",
  },
  {
    id: "proj-refinetograph",
    title: "Refinetograph",
    description:
      "Integrated web application combining SRGAN for super-resolution, Convolutional Autoencoder for denoising, and Zero-Reference Deep Curve Estimation for low-light image enhancement.",
    tools: ["Python", "PyTorch", "SRGAN", "ZeroDCE", "Flask"],
    domains: ["data-ml", "engineering"],
    relatedSkillIds: [
      "python",
      "pytorch",
      "computer-vision",
      "flask",
      "numpy",
      "matplotlib",
    ],
    outcome: "Published · IJICTDC 2024",
    status: "published",
    featured: true,
    githubUrl: "https://github.com/Santey624/Refinetograph",
    paperUrl: "https://www.earticle.net/Article/A455516",
  },
  {
    id: "proj-ai-text",
    title: "Human vs AI Text Classification",
    description:
      "CNN-based non-linear classifier distinguishing human-written text from AI-generated content for academic integrity and information security applications.",
    tools: ["Python", "CNN", "Jupyter", "NLP"],
    domains: ["research-nlp", "data-ml", "agentic-ai"],
    relatedSkillIds: [
      "python",
      "nlp",
      "ai-safety",
      "tensorflow",
      "sklearn",
      "jupyter",
      "numpy",
    ],
    outcome: "Research prototype",
    status: "research",
    featured: true,
    githubUrl:
      "https://github.com/Santey624/Binary-Classification-of-Human-vs.-AI-Generated-Text-using-Convolutional-Neural-Networks",
  },
  {
    id: "proj-llm-judge",
    title: "LLM-as-a-Judge Evaluation Pipeline",
    description:
      "Framework-agnostic evaluation system to benchmark reliability and safety of production AI agents using automated LLM judging, built during industry work at SoranoAI.",
    tools: ["Python", "LLMs", "Evaluation", "API Design"],
    domains: ["agentic-ai", "engineering"],
    relatedSkillIds: [
      "python",
      "llms",
      "ai-safety",
      "llm-eval",
      "agents",
      "rag",
      "openai-api",
      "fastapi",
      "mcp",
    ],
    outcome: "Production deployment",
    status: "production",
    featured: true,
  },
  {
    id: "proj-mcp",
    title: "MCP Agent Workflows",
    description:
      "Hands-on exploration of the Model Context Protocol for connecting AI agents to external tools, data, and services in structured, extensible workflows.",
    tools: ["MCP", "Python", "Agents", "Jupyter"],
    domains: ["agentic-ai", "engineering"],
    relatedSkillIds: ["mcp", "llms", "agents", "openai-api", "python", "jupyter"],
    outcome: "Agent tooling study",
    status: "research",
    githubUrl:
      "https://github.com/Santey624/IntroductiontoMCP-Model-Context-Protocol-",
  },
  {
    id: "proj-logo",
    title: "Doshisha Logo Detection",
    description:
      "R-CNN-based logo detector using Selective Search and fine-tuned ResNet-18 for identifying the Doshisha University logo in images.",
    tools: ["Python", "R-CNN", "ResNet-18", "Jupyter"],
    domains: ["data-ml", "engineering"],
    relatedSkillIds: [
      "python",
      "pytorch",
      "computer-vision",
      "tensorflow",
      "jupyter",
    ],
    outcome: "Computer vision study",
    status: "research",
    githubUrl: "https://github.com/Santey624/Doshisha_logo_detection",
  },
];

// ─── Skills ──────────────────────────────────────────────────────────────────

export const skills: Skill[] = [
  // Research & NLP
  {
    id: "nlp",
    name: "NLP",
    domain: "research-nlp",
    level: 3,
    relatedProjectIds: ["proj-nepmedjp", "proj-ai-text"],
  },
  {
    id: "low-resource",
    name: "Low-Resource NLP",
    domain: "research-nlp",
    level: 3,
    relatedProjectIds: ["proj-nepmedjp"],
  },
  {
    id: "multilingual",
    name: "Multilingual Models",
    domain: "research-nlp",
    level: 3,
    relatedProjectIds: ["proj-nepmedjp"],
  },
  {
    id: "cross-lingual",
    name: "Cross-lingual NLP",
    domain: "research-nlp",
    level: 3,
    relatedProjectIds: ["proj-nepmedjp"],
  },
  {
    id: "medical-nlp",
    name: "Medical NLP",
    domain: "research-nlp",
    level: 3,
    relatedProjectIds: ["proj-nepmedjp"],
  },
  {
    id: "mt5",
    name: "mT5",
    domain: "research-nlp",
    level: 3,
    relatedProjectIds: ["proj-nepmedjp"],
  },
  {
    id: "transformers",
    name: "Transformers",
    domain: "research-nlp",
    level: 3,
    relatedProjectIds: ["proj-nepmedjp"],
  },
  {
    id: "huggingface",
    name: "Hugging Face",
    domain: "research-nlp",
    level: 3,
    relatedProjectIds: ["proj-nepmedjp"],
  },
  {
    id: "mecab",
    name: "MeCab / fugashi",
    domain: "research-nlp",
    level: 2,
    relatedProjectIds: ["proj-nepmedjp"],
  },
  {
    id: "sentencepiece",
    name: "SentencePiece",
    domain: "research-nlp",
    level: 2,
    relatedProjectIds: ["proj-nepmedjp"],
  },
  // Data / ML
  {
    id: "python",
    name: "Python",
    domain: "data-ml",
    level: 3,
    relatedProjectIds: [
      "proj-nepmedjp",
      "proj-har",
      "proj-refinetograph",
      "proj-ai-text",
      "proj-llm-judge",
      "proj-mcp",
      "proj-logo",
    ],
  },
  {
    id: "pytorch",
    name: "PyTorch",
    domain: "data-ml",
    level: 3,
    relatedProjectIds: [
      "proj-har",
      "proj-refinetograph",
      "proj-logo",
      "proj-nepmedjp",
    ],
  },
  {
    id: "diffusion",
    name: "Diffusion Models",
    domain: "data-ml",
    level: 3,
    relatedProjectIds: ["proj-har"],
  },
  {
    id: "medical-ai",
    name: "Medical AI",
    domain: "data-ml",
    level: 3,
    relatedProjectIds: ["proj-har", "proj-nepmedjp"],
  },
  {
    id: "computer-vision",
    name: "Computer Vision",
    domain: "data-ml",
    level: 2,
    relatedProjectIds: ["proj-refinetograph", "proj-logo"],
  },
  {
    id: "tensorflow",
    name: "TensorFlow",
    domain: "data-ml",
    level: 2,
    relatedProjectIds: ["proj-ai-text", "proj-logo"],
  },
  {
    id: "sklearn",
    name: "scikit-learn",
    domain: "data-ml",
    level: 2,
    relatedProjectIds: ["proj-ai-text"],
  },
  {
    id: "pandas",
    name: "Pandas",
    domain: "data-ml",
    level: 3,
    relatedProjectIds: ["proj-har", "proj-nepmedjp"],
  },
  {
    id: "numpy",
    name: "NumPy",
    domain: "data-ml",
    level: 3,
    relatedProjectIds: ["proj-har", "proj-refinetograph", "proj-ai-text"],
  },
  {
    id: "matplotlib",
    name: "Matplotlib",
    domain: "data-ml",
    level: 2,
    relatedProjectIds: ["proj-har", "proj-refinetograph"],
  },
  {
    id: "jupyter",
    name: "Jupyter",
    domain: "data-ml",
    level: 2,
    relatedProjectIds: ["proj-ai-text", "proj-mcp", "proj-logo"],
  },
  {
    id: "stats",
    name: "Statistical Modeling",
    domain: "data-ml",
    level: 2,
    relatedProjectIds: ["proj-har"],
  },
  // Agentic AI
  {
    id: "llms",
    name: "LLMs",
    domain: "agentic-ai",
    level: 3,
    relatedProjectIds: ["proj-llm-judge", "proj-mcp"],
  },
  {
    id: "ai-safety",
    name: "AI Safety",
    domain: "agentic-ai",
    level: 3,
    relatedProjectIds: ["proj-llm-judge", "proj-ai-text"],
  },
  {
    id: "llm-eval",
    name: "LLM Evaluation",
    domain: "agentic-ai",
    level: 3,
    relatedProjectIds: ["proj-llm-judge"],
  },
  {
    id: "agents",
    name: "Multi-agent Systems",
    domain: "agentic-ai",
    level: 3,
    relatedProjectIds: ["proj-llm-judge", "proj-mcp"],
  },
  {
    id: "mcp",
    name: "MCP",
    domain: "agentic-ai",
    level: 2,
    relatedProjectIds: ["proj-mcp", "proj-llm-judge"],
  },
  {
    id: "rag",
    name: "RAG",
    domain: "agentic-ai",
    level: 2,
    relatedProjectIds: ["proj-llm-judge"],
  },
  {
    id: "openai-api",
    name: "OpenAI API",
    domain: "agentic-ai",
    level: 2,
    relatedProjectIds: ["proj-llm-judge", "proj-mcp"],
  },
  // Engineering
  {
    id: "typescript",
    name: "TypeScript",
    domain: "engineering",
    level: 2,
    relatedProjectIds: [],
  },
  {
    id: "nextjs",
    name: "Next.js",
    domain: "engineering",
    level: 2,
    relatedProjectIds: [],
  },
  {
    id: "react",
    name: "React",
    domain: "engineering",
    level: 2,
    relatedProjectIds: [],
  },
  {
    id: "nodejs",
    name: "Node.js",
    domain: "engineering",
    level: 2,
    relatedProjectIds: [],
  },
  {
    id: "fastapi",
    name: "FastAPI",
    domain: "engineering",
    level: 2,
    relatedProjectIds: ["proj-llm-judge"],
  },
  {
    id: "flask",
    name: "Flask",
    domain: "engineering",
    level: 1,
    relatedProjectIds: ["proj-refinetograph"],
  },
  {
    id: "sql",
    name: "SQL",
    domain: "engineering",
    level: 2,
    relatedProjectIds: [],
  },
  {
    id: "leaflet",
    name: "Leaflet.js / GIS",
    domain: "engineering",
    level: 1,
    relatedProjectIds: [],
  },
  // Infra
  {
    id: "git",
    name: "Git",
    domain: "infra",
    level: 2,
    relatedProjectIds: [],
  },
  {
    id: "docker",
    name: "Docker",
    domain: "infra",
    level: 2,
    relatedProjectIds: [],
  },
  {
    id: "postgres",
    name: "PostgreSQL",
    domain: "infra",
    level: 2,
    relatedProjectIds: [],
  },
  {
    id: "linux",
    name: "Linux",
    domain: "infra",
    level: 2,
    relatedProjectIds: [],
  },
  {
    id: "latex",
    name: "LaTeX",
    domain: "infra",
    level: 2,
    relatedProjectIds: ["proj-refinetograph", "proj-nepmedjp"],
  },
  {
    id: "gcp",
    name: "GCP",
    domain: "infra",
    level: 1,
    relatedProjectIds: [],
  },
  {
    id: "vercel",
    name: "Vercel",
    domain: "infra",
    level: 1,
    relatedProjectIds: [],
  },
];

// ─── Precomputed indexes (O(n) once at module load) ───────────────────────────

export const skillById = new Map(skills.map((s) => [s.id, s]));
export const projectById = new Map(researchProjects.map((p) => [p.id, p]));

export const projectIdsBySkillId = new Map<string, Set<string>>(
  skills.map((s) => [s.id, new Set(s.relatedProjectIds)])
);

export const skillIdsByProjectId = new Map<string, Set<string>>(
  researchProjects.map((p) => [p.id, new Set(p.relatedSkillIds)])
);

export const skillsByDomain = new Map<SkillDomain, Skill[]>(
  DOMAIN_ORDER.map((domain) => [
    domain,
    skills.filter((s) => s.domain === domain),
  ])
);
