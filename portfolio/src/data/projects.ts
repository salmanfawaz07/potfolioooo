export type ProjectStatus = "IN DEVELOPMENT" | "WORKING PROTOTYPE" | "CONCEPT" | "PROJECT" | "DEPLOYED";

export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  status: ProjectStatus;
  shortDescription: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  problem?: string;
  approach?: string;
  architecture?: string;
  evidence?: string[];
  learned?: string;
  year?: string;
}

export const projects: Project[] = [
  {
    id: "vibecheck",
    number: "01",
    title: "VibeCheck",
    category: "AGENTIC AI",
    status: "PROJECT",
    shortDescription: "An agentic AI location intelligence platform that researches real-world conditions and tells creators where and when to shoot.",
    description: "VibeCheck is an agentic AI-powered location intelligence platform built for filmmakers, photographers, YouTubers, and creative teams. It helps creators determine whether a location is suitable for shooting a particular scene before they arrive.",
    technologies: ["React", "TypeScript", "Vite", "Node.js", "Google Gemini", "Parallel API"],
    githubUrl: "https://github.com/salmanfawaz07/VibeCheck",
    problem: "Creators often waste time and resources arriving at locations that turn out unsuitable due to weather, crowds, events, or lighting conditions.",
    approach: "A multi-agent workflow: Scene Scout Agent researches real-world activity, events, and weather via Parallel Search API, then hands structured research to a Director Agent powered by Gemini that produces a final GO / CHANGE TIME / AVOID recommendation.",
    architecture: "Creator Input (Location → Date → Time → Scene Type)\n↓\nScene Scout Agent\n↓\nResearch Handoff (structured notes + sources)\n↓\nDirector Agent (Gemini)\n↓\nDirector's Call (GO / CHANGE THE TIME / AVOID)",
    evidence: ["Multi-agent architecture", "Source-backed research", "Workflow tests for provider order and handoffs"],
  },
  {
    id: "nextmatter",
    number: "02",
    title: "NEXTMATTER",
    category: "AI + SUSTAINABILITY",
    status: "PROJECT",
    shortDescription: "An AI material intelligence platform that transforms surplus materials into opportunities for reuse, matching, and measurable impact.",
    description: "NEXTMATTER is an AI-powered material intelligence platform built around the philosophy “EVERY MATERIAL HAS A NEXT.” It helps understand, transform, match, exchange, and track surplus materials through their second life.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Gemini", "Zod", "Node.js"],
    githubUrl: "https://github.com/salmanfawaz07/NEXTMATTER",
    problem: "Usable materials frequently become waste because there is no intelligent system to understand what a material is and what it could become next.",
    approach: "Users upload material images → Gemini generates structured Material Intelligence → Next Life Engine suggests applications → Deterministic weighted matching engine scores potential matches with explanations → Material Passport tracks lifecycle and impact.",
    architecture: "SURPLUS → INTELLIGENCE → SECOND LIFE → MATCH → REUSE → IMPACT",
    evidence: ["Multimodal material analysis", "Explainable matching engine", "Material Passport concept"],
  },
  {
    id: "urbanheat-doctor-ai",
    number: "03",
    title: "UrbanHeat Doctor AI",
    category: "GEOSPATIAL AI",
    status: "PROJECT",
    shortDescription: "A physics-informed geospatial AI system that detects urban heat hotspots and simulates data-driven cooling interventions.",
    description: "UrbanHeat Doctor AI is a geospatial AI system designed to help cities understand, predict, and mitigate urban heat stress. Developed for the ISRO Bharatiya Antariksh Hackathon 2026 with Hyderabad as the primary study area.",
    technologies: ["Python", "Google Earth Engine", "Landsat 8", "XGBoost", "Scikit-learn", "Streamlit", "Remote Sensing"],
    githubUrl: "https://github.com/salmanfawaz07/UrbanheatAI",
    problem: "Urban heat islands create severe stress, yet many ML models ignore known physical relationships between built-up intensity, vegetation, and surface temperature.",
    approach: "Physics-informed XGBoost with monotonic constraints ensuring higher built-up → higher temperature and higher vegetation → lower temperature. Pipeline: Landsat 8 → LST + NDVI + NDBI → feature engineering → hotspot detection → mitigation simulation (greening, cool roofs).",
    architecture: "Satellite Data (Landsat 8)\n↓\nLST + NDVI + NDBI\n↓\nFeature Engineering\n↓\nPhysics-Informed XGBoost\n↓\nHeat Hotspot Detection + Mitigation Simulation",
    evidence: ["MAE ≈ 1.62°C", "Physics-informed constraints", "Intervention scenario simulation"],
  },
  {
    id: "nexus-hepta-ai",
    number: "04",
    title: "Nexus Hepta AI",
    category: "EDTECH + AI",
    status: "PROJECT",
    shortDescription: "An AI accreditation copilot that automates institutional documentation, evidence analysis, and accreditation workflows.",
    description: "Nexus Hepta AI is an AI-powered documentation and accreditation copilot designed for educational institutions. It unifies seven intelligent capabilities into one platform to reduce administrative workload around reports, meeting records, evidence, and compliance.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "FastAPI", "Python", "SQLite", "Google Gemini"],
    githubUrl: "https://github.com/salmanfawaz07/NexusHeptaAI",
    problem: "Educational institutions handle massive volumes of documentation and accreditation requirements with fragmented tools and high manual effort.",
    approach: "Seven connected modules: AI Report Generation, Meeting Minutes, Missing Evidence Detection, Annual Report Preparation, Accreditation Gap Prediction, Intelligent Recommendations, and Document Classification.",
    architecture: "Institutional Data → Document Intelligence → Evidence Analysis → Gap Detection → Recommendations → Accreditation Readiness",
    evidence: ["Seven intelligence modules", "FastAPI + Next.js architecture", "Gemini-powered processing"],
  },
  {
    id: "unistack",
    number: "05",
    title: "UniStack / BunkMate",
    category: "EDTECH / SAAS",
    status: "PROJECT",
    shortDescription: "A full-stack student productivity platform that combines academic calculators, student utilities, and administrative tools in one ecosystem.",
    description: "BunkMate (part of the UniStack vision) is a student productivity platform built around “Smart Tools for Backbenchers.” It helps students track attendance, calculate marks, calculate GPA, and understand academic flexibility, backed by a real full-stack architecture.",
    technologies: ["Next.js", "React", "JavaScript", "Tailwind CSS", "Node.js", "Express", "PostgreSQL"],
    githubUrl: "https://github.com/salmanfawaz07/BunkmateV1",
    problem: "Students need reliable, connected tools for attendance, marks, and GPA instead of scattered calculators and spreadsheets.",
    approach: "Full-stack application with dedicated calculators for attendance, marks, and GPA, plus an admin dashboard for tool and announcement management. Backend APIs + PostgreSQL for persistence.",
    architecture: "Next.js Frontend → Node.js + Express API → PostgreSQL → Academic Data",
    evidence: ["Full-stack architecture", "Attendance / Marks / GPA calculators", "Admin dashboard", "Setup scripts for Windows & Mac/Linux"],
  },
  {
    id: "peercare",
    number: "06",
    title: "PeerCare",
    category: "STUDENT COMMUNITY",
    status: "PROJECT",
    shortDescription: "A peer-support platform that connects students with fellow students for guidance, support, and community.",
    description: "PeerCare is a student-focused platform designed around peer-to-peer support and student connection. It aims to create a digital environment where students can connect with peers, share experiences, seek guidance, and support one another through college challenges.",
    technologies: ["React", "Web", "Community Platform"],
    githubUrl: "https://github.com/salmanfawaz07/Peercare",
    problem: "Students face academic, social, and college-life challenges but often do not know who to approach for relevant peer support.",
    approach: "Build a structured bridge from “I need help” to “Someone like me can help” through peer connections, support requests, and community interaction.",
    architecture: "STUDENT → PEER CONNECTION → SUPPORT → COMMUNITY",
    evidence: ["Peer connection concept", "Student support flows"],
  },
];

export const getProjectById = (id: string) => projects.find((p) => p.id === id);
