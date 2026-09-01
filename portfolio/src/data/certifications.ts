export interface Certification {
  id: string;
  title: string;
  issuer: string;
  focus: string;
  status: "VERIFIED";
}

export const certifications: Certification[] = [
  {
    id: "cs50p",
    title: "CS50P",
    issuer: "Harvard / CS50",
    focus: "Python",
    status: "VERIFIED",
  },
  {
    id: "oracle-ai-foundations",
    title: "Oracle Cloud Infrastructure AI Foundations",
    issuer: "Oracle",
    focus: "AI Foundations",
    status: "VERIFIED",
  },
];
