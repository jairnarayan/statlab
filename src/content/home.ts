import { IconKey } from "./icons";

export const HERO = {
  eyebrow: "Duke University · Department of Surgery",
  title: "Engineering the future of",
  highlight: "trauma care.",
  description:
    "The Surgical Technology and Advanced Trauma (STAT) Lab at Duke University, led by Dr. Joseph Fernandez-Moure, develops biomaterials, regenerative therapies, medical devices, and intelligent systems to address unmet challenges in trauma, surgery, and critical care.",
  primaryCta: { label: "Explore the research", href: "/research" },
  secondaryCta: { label: "Collaborate with us", href: "/contact" },
};

export const MISSION = {
  eyebrow: "Mission",
  title: "Building what trauma care still lacks.",
  description: [
    "STAT Lab identifies unmet needs in trauma surgery and develops technologies to address them."
  ],
  tags: [
    "Clinical Problem Solving",
    "Surgical Innovation",
    "Technology Translation",
  ],
};

export const CTA = {
  eyebrow: "Collaborate",
  title: "Interested in working with us?",
  description:
    "We welcome collaborations across surgery, engineering, industry, and translational research.",
  ctaLabel: "Get in Touch",
  ctaHref: "/contact",
};

export const STATS = [
  ["##", "Peer-reviewed papers"],
  ["##", "Active translational projects"],
  ["$##", "In active research funding"],
  ["##", "Issued & pending patents"],
] as const;

export const PILLARS = [
  {
    id: "ai-clinical-intelligence",
    icon: "Brain" as IconKey,
    title: "AI + Clinical Intelligence",
    body: "Machine learning and computer vision tools for trauma and critical care.",
  },
  {
    id: "biomaterials-nanotechnology",
    icon: "Atom" as IconKey,
    title: "Biomaterials + Nanotechnology",
    body: "Biomaterials, nanomaterials, and drug delivery systems for tissue repair.",
  },
  {
    id: "regenerative-signaling",
    icon: "Dna" as IconKey,
    title: "Regenerative Medicine",
    body: "Studying biological pathways that drive healing after injury.",
  },
  {
    id: "trauma-systems-innovation",
    icon: "ActivitySquare" as IconKey,
    title: "Trauma Systems",
    body: "Improving the delivery and organization of trauma care.",
  },
  {
    id: "medical-device-development",
    icon: "Cpu" as IconKey,
    title: "Medical Devices",
    body: "Developing devices that address unmet clinical needs.",
  },
  {
    id: "knowledge-product-development",
    icon: "BookOpen" as IconKey,
    title: "Education + Knowledge Translation",
    body: "Creating tools that improve education and clinical decision-making.",
  },
] as const;

export const INNOVATIONS = [
  {
    tag: "Innovation 1",
    title: "Title 1",
    summary:
      "Summary 1",
  },
  {
    tag: "Innovation 2",
    title: "Title 2",
    summary:
      "Summary 2",
  },
  {
    tag: "Innovation 3",
    title: "Title 3",
    summary:
      "Summary 3",
  },
] as const;

export const PIPELINE = [
  { label: "Discovery", body: "Hypothesis & mechanism" },
  { label: "Prototype", body: "Engineering & iteration" },
  { label: "Validation", body: "Preclinical evidence" },
  { label: "Translation", body: "Regulatory & manufacturing" },
  { label: "Clinical Impact", body: "Bedside outcomes" },
] as const;

export const HOME_PUBLICATIONS = [
  {
    year: "####",
    venue: "Journal 1",
    title:
      "Title 1",
  },
  {
    year: "####",
    venue: "Journal 2",
    title: "Title 2",
  },
  {
    year: "####",
    venue: "Journal 3",
    title:
      "Title 3",
  },
] as const;

export const NEWS = [
  {
    date: "Month ####",
    kicker: "Grant",
    title: "Title 1",
  },
  {
    date: "Month ####",
    kicker: "Partnership",
    title: "Title 2",
  },
  {
    date: "Month ####",
    kicker: "Publication",
    title: "Title 3",
  },
] as const;

export const COLLABORATORS = [
  "Duke University",
  "Duke University School of Medicine",
] as const;
