export type SkillLevel = "WORKING" | "FAMILIAR" | "FOUNDATIONAL";

export interface Skill {
  name: string;
  level: SkillLevel;
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "programming",
    title: "PROGRAMMING",
    skills: [
      { name: "Python", level: "WORKING" },
      { name: "Java", level: "FAMILIAR" },
      { name: "JavaScript", level: "WORKING" },
      { name: "TypeScript", level: "FAMILIAR" },
    ],
  },
  {
    id: "ai-ml",
    title: "AI / ML",
    skills: [
      { name: "Machine Learning", level: "WORKING" },
      { name: "Generative AI", level: "FAMILIAR" },
      { name: "LLM Applications", level: "FAMILIAR" },
      { name: "Data Analysis", level: "WORKING" },
      { name: "Scikit-learn", level: "WORKING" },
      { name: "XGBoost", level: "FAMILIAR" },
    ],
  },
  {
    id: "web",
    title: "WEB / SOFTWARE",
    skills: [
      { name: "React", level: "WORKING" },
      { name: "Next.js", level: "FAMILIAR" },
      { name: "Tailwind CSS", level: "WORKING" },
      { name: "FastAPI", level: "FAMILIAR" },
    ],
  },
  {
    id: "data",
    title: "DATA / BACKEND",
    skills: [
      { name: "SQL", level: "WORKING" },
      { name: "PostgreSQL", level: "FAMILIAR" },
      { name: "Supabase", level: "FAMILIAR" },
      { name: "REST APIs", level: "WORKING" },
    ],
  },
  {
    id: "tools",
    title: "TOOLS",
    skills: [
      { name: "Git", level: "WORKING" },
      { name: "GitHub", level: "WORKING" },
      { name: "Vercel", level: "FAMILIAR" },
    ],
  },
];

export const services = [
  {
    number: "01",
    title: "AI / ML APPLICATIONS",
    description: "Building practical applications using machine learning, generative AI, and intelligent systems.",
  },
  {
    number: "02",
    title: "SOFTWARE DEVELOPMENT",
    description: "Building functional software and web applications with modern development technologies.",
  },
  {
    number: "03",
    title: "WEB DEVELOPMENT",
    description: "Creating clean, responsive interfaces and full-stack web experiences.",
  },
  {
    number: "04",
    title: "DATA & APIs",
    description: "Working with databases, APIs, backend systems, and data-driven applications.",
  },
  {
    number: "05",
    title: "3D / CREATIVE TECHNOLOGY",
    description: "Experimenting with 3D interfaces, interactive visualizations, motion, and creative frontend experiences.",
  },
];
