export interface JourneyItem {
  id: string;
  label: string;
  description: string;
  isGoal?: boolean;
}

export const journey: JourneyItem[] = [
  {
    id: "2024",
    label: "2024",
    description: "Began B.Tech journey",
  },
  {
    id: "ai-ml",
    label: "AI & ML",
    description: "Exploring intelligent systems",
  },
  {
    id: "projects",
    label: "PROJECTS",
    description: "Building practical applications",
  },
  {
    id: "current",
    label: "CURRENT",
    description: "Third-year engineering student",
  },
  {
    id: "next",
    label: "NEXT OBJECTIVE",
    description: "AI engineering / advanced study",
    isGoal: true,
  },
];

export const futureObjectives = [
  "Become a strong AI engineer",
  "Build production-ready intelligent systems",
  "Develop deeper technical expertise",
  "Explore entrepreneurship",
  "Pursue advanced study",
];
