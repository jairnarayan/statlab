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
    body: "Defining unmet needs, understanding mechanisms, and identifying opportunities for intervention.",
    artifacts: ["Mechanism", "Hypothesis", "Unmet-need analysis"],
  },
  {
    icon: "Wrench",
    label: "Prototype",
    body: "Designing and refining technologies through iterative development and testing.",
    artifacts: ["Bench prototype", "Design history", "Bench validation"],
  },
  {
    icon: "ShieldCheck",
    label: "Validation",
    body: "Generating preclinical evidence to evaluate safety and performance.",
    artifacts: ["GLP-compatible studies", "Biocompatibility", "Performance data"],
  },
  {
    icon: "Rocket",
    label: "Translation",
    body: "Advancing technologies through regulatory, manufacturing, and commercialization pathways.",
    artifacts: ["IP portfolio", "Regulatory pathway", "Commercial partner"],
  },
  {
    icon: "HeartPulse",
    label: "Clinical Impact",
    body: "Implementation in clinical practice and evaluation of real-world outcomes.",
    artifacts: ["Outcomes evidence", "Adoption", "Continuous improvement"],
  },
];

export const PROJECTS: ProjectStatus[] = [
  { name: "Project 1", stage: 3 },
  { name: "Project 2", stage: 2 },
  { name: "Project 3", stage: 2 },
  { name: "Project 4", stage: 1 },
  { name: "Project 5", stage: 4 },
  { name: "Project 6", stage: 0 },
];
