/**
 * CENTRALIZED SITE CONFIG
 * Edit these values to update links across the entire site.
 * Leave empty strings to hide the corresponding buttons/links.
 */
export const SITE = {
  name: "Mohammed Salman Fawaz",
  shortName: "SALMAN",
  title: "AI & ML Engineering Student",
  degree: "B.Tech in Computer Science and Engineering (AI & ML)",
  college: "Vaagdevi College of Engineering",
  educationPeriod: "2024 — 2028",
  currentYear: "3rd Year",
  cgpa: "8.0",
  location: "Raipura, Hanamkonda, India",

  // CONTACT
  EMAIL: "mohammedsalmanfawaz@gmail.com",
  PHONE: "9063407469",
  GITHUB_URL: "https://github.com/salmanfawaz07",
  LINKEDIN_URL: "https://www.linkedin.com/in/mohammed-salman-fawaz-32348232b/",
  INSTAGRAM_URL: "https://www.instagram.com/salmannn__73/",
  RESUME_URL: "",
} as const;

export type SiteConfig = typeof SITE;
