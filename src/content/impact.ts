import { IconKey } from "./icons";

export type ImpactCategory = {
  icon: IconKey;
  title: string;
  body: string;
  items: string[];
};

export const METRICS = [
  { value: "$14M", label: "Active research funding" },
  { value: "6", label: "Issued & pending patents" },
  { value: "12", label: "Translational programs" },
  { value: "80+", label: "Peer-reviewed papers" },
  { value: "4", label: "Industry partners" },
  { value: "3", label: "Clinical implementations" },
] as const;

export const CATEGORIES: ImpactCategory[] = [
  {
    icon: "Award",
    title: "Patents",
    body: "Issued and pending intellectual property across nanomaterial platforms, devices, and clinical AI.",
    items: ["Self-assembling nanofiber hemostat", "Multimodal trauma triage system", "Bioactive scaffold composition"],
  },
  {
    icon: "Cpu",
    title: "Devices",
    body: "Prototypes and validated devices engineered for high-acuity surgical environments.",
    items: ["Hemorrhage control platform", "Smart wound monitor", "Austere-environment instrumentation"],
  },
  {
    icon: "HeartPulse",
    title: "Clinical implementations",
    body: "Tools and protocols adopted in Duke and partner trauma systems.",
    items: ["Polytrauma risk dashboard", "Damage-control resuscitation pathway", "Quality improvement registry"],
  },
  {
    icon: "Handshake",
    title: "Industry partnerships",
    body: "Collaborations that move science into manufacturable, scalable products.",
    items: ["Medical device manufacturers", "Defense health programs", "Digital health platforms"],
  },
  {
    icon: "GraduationCap",
    title: "Educational products",
    body: "Knowledge products that scale surgical expertise across institutions.",
    items: ["Surgical atlas series", "Simulation curricula", "Structured clinical guidelines"],
  },
  {
    icon: "BadgeDollarSign",
    title: "Grants",
    body: "Federal, foundation, and industry funding powering the lab's translational work.",
    items: ["NIH NIBIB", "DoD CDMRP", "Coulter Foundation", "Industry sponsored research"],
  },
];

export const FUNDING_MIX = [
  { name: "Federal", share: 58, color: "bg-duke" },
  { name: "Foundation", share: 18, color: "bg-duke-light" },
  { name: "Industry", share: 16, color: "bg-cyan-electric" },
  { name: "Institutional", share: 8, color: "bg-teal-surgical" },
] as const;
