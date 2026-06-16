import { IconKey } from "./icons";

export type PipelineStage = {
  icon: IconKey;
  label: string;
  body: string;
  artifacts: string[];
};

export type ProjectStatus = {
  name: string;
  stage: number;
};

export const STAGES: PipelineStage[] = [
  {
    icon: "Microscope",
    label: "Discovery",
    body: "Mechanistic insight, unmet need definition, and feasibility — grounded in clinical reality.",
    artifacts: ["Mechanism", "Hypothesis", "Unmet-need analysis"],
  },
  {
    icon: "Wrench",
    label: "Prototype",
    body: "Rapid engineering iteration with clinicians, scientists, and engineers in the loop.",
    artifacts: ["Bench prototype", "Design history", "Bench validation"],
  },
  {
    icon: "ShieldCheck",
    label: "Validation",
    body: "Preclinical evidence generation aligned with regulatory expectations.",
    artifacts: ["GLP-compatible studies", "Biocompatibility", "Performance data"],
  },
  {
    icon: "Rocket",
    label: "Translation",
    body: "Regulatory strategy, IP, manufacturing, and partnerships to enable first-in-human.",
    artifacts: ["IP portfolio", "Regulatory pathway", "Commercial partner"],
  },
  {
    icon: "HeartPulse",
    label: "Clinical Impact",
    body: "Real-world deployment, outcomes evidence, and iteration based on clinical learning.",
    artifacts: ["Outcomes evidence", "Adoption", "Continuous improvement"],
  },
];

export const PROJECTS: ProjectStatus[] = [
  { name: "Nanofiber hemostat platform", stage: 3 },
  { name: "AI polytrauma triage engine", stage: 2 },
  { name: "Bioactive regenerative scaffold", stage: 2 },
  { name: "Smart wound monitoring system", stage: 1 },
  { name: "Surgical knowledge product suite", stage: 4 },
  { name: "Exosome-based vascular therapy", stage: 0 },
];
