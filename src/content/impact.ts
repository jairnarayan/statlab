import { IconKey } from "./icons";

export type ImpactCategory = {
  icon: IconKey;
  title: string;
  body: string;
  items: string[];
};

export const METRICS = [
  { value: "$##M", label: "Active research funding" },
  { value: "##", label: "Issued & pending patents" },
  { value: "##", label: "Translational programs" },
  { value: "##+", label: "Peer-reviewed papers" },
  { value: "##", label: "Industry partners" },
  { value: "##", label: "Clinical implementations" },
] as const;

export const CATEGORIES: ImpactCategory[] = [
  {
    icon: "Award",
    title: "Patents",
    body: "Issued and pending patents in relation to trauma surgery.",
    items: ["Patent 1", "Patent 2", "Patent 3"],
  },
  {
    icon: "Cpu",
    title: "Devices",
    body: "Prototypes and validated devices engineered for surgical environments.",
    items: ["Device 1", "Device 2", "Device 3"],
  },
  {
    icon: "HeartPulse",
    title: "Clinical implementations",
    body: "Tools and protocols adopted in Duke and partner trauma systems.",
    items: ["Tool 1", "Tool 2", "Tool 3"],
  },
  {
    icon: "Handshake",
    title: "Industry partnerships",
    body: "Collaborations with academic, clinical, and industry partners.",
    items: ["Collab 1", "Collab 2", "Collab 3"],
  },
  {
    icon: "GraduationCap",
    title: "Educational products",
    body: "Educational tools and resources for trainees and clinicians.",
    items: ["Education 1", "Education 2", "Education 3"],
  },
  {
    icon: "BadgeDollarSign",
    title: "Grants",
    body: "Federal, foundation, and industry funding.",
    items: ["Grant 1", "Grant 2", "Grant 3"],
  },
];

export const FUNDING_MIX = [
  { name: "Federal", share: 25, color: "bg-duke" },
  { name: "Foundation", share: 25, color: "bg-duke-light" },
  { name: "Industry", share: 25, color: "bg-cyan-electric" },
  { name: "Institutional", share: 25, color: "bg-teal-surgical" },
] as const;
