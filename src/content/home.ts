import { IconKey } from "./icons";

export const HERO = {
  eyebrow: "Duke University · Department of Surgery",
  title: "Engineering the future of",
  highlight: "trauma care.",
  description:
    "STAT Lab develops transformative biomaterials, drug delivery systems, and regenerative therapies to enhance the body’s innate healing response and improve outcomes following traumatic injury.",
  primaryCta: { label: "Explore the research", href: "/research" },
  secondaryCta: { label: "Collaborate with us", href: "/contact" },
};

export const MISSION = {
  eyebrow: "Mission",
  title: "Beyond publications — toward platforms, devices, and clinical impact at scale.",
  description: [
    "The Surgical Technology and Advanced Trauma (STAT) Lab is a translational research and technology development laboratory at Duke University led by Dr. Joseph Fernandez-Moure. We work at the convergence of advanced biomaterials, AI, regenerative biology, and human-centered engineering to address the most consequential unmet needs in trauma, surgery, and critical care.",
    "We measure success not in citations alone, but in the technologies, platforms, devices, and knowledge products that move from concept to clinical reality — and the lives improved along the way.",
  ],
  tags: [
    "Translational surgery",
    "Human-centered innovation",
    "Clinical impact at scale",
  ],
};

export const CTA = {
  eyebrow: "Collaborate",
  title: "Have a hard problem in trauma, surgery, or critical care?",
  description:
    "We partner with clinicians, scientists, engineers, and industry to translate ideas into devices, platforms, and clinical outcomes.",
  ctaLabel: "Start a conversation",
  ctaHref: "/contact",
};

export const STATS = [
  ["80+", "Peer-reviewed papers"],
  ["12", "Active translational projects"],
  ["$14M", "In active research funding"],
  ["6", "Issued & pending patents"],
] as const;

export const PILLARS = [
  {
    id: "ai-clinical-intelligence",
    icon: "Brain" as IconKey,
    title: "AI + Clinical Intelligence",
    body: "Predictive models, decision-support, and computer vision for high-acuity trauma and critical care environments.",
  },
  {
    id: "biomaterials-nanotechnology",
    icon: "Atom" as IconKey,
    title: "Biomaterials + Nanotechnology",
    body: "Engineered nanomaterials and bioactive scaffolds that accelerate tissue repair after traumatic injury.",
  },
  {
    id: "regenerative-signaling",
    icon: "Dna" as IconKey,
    title: "Regenerative Signaling",
    body: "Decoding biological pathways to restore function in bone, soft tissue, and vascular networks.",
  },
  {
    id: "trauma-systems-innovation",
    icon: "ActivitySquare" as IconKey,
    title: "Trauma Systems Innovation",
    body: "Rethinking the systems-level architecture of trauma care, from point-of-injury to recovery.",
  },
  {
    id: "medical-device-development",
    icon: "Cpu" as IconKey,
    title: "Medical Device Development",
    body: "Designing, prototyping, and validating devices that translate science into the operating room.",
  },
  {
    id: "knowledge-product-development",
    icon: "BookOpen" as IconKey,
    title: "Knowledge Product Development",
    body: "Educational platforms and clinical knowledge products that scale expertise across institutions.",
  },
] as const;

export const INNOVATIONS = [
  {
    tag: "Nanomaterial Hemostat",
    title: "Self-assembling nanofiber matrix for catastrophic hemorrhage",
    summary:
      "A next-generation hemostatic platform engineered to control non-compressible bleeding at the point of injury.",
  },
  {
    tag: "AI Triage Engine",
    title: "Real-time risk stratification for polytrauma",
    summary:
      "Multimodal model integrating physiologic, imaging, and contextual data to predict deterioration hours earlier.",
  },
  {
    tag: "Regenerative Scaffold",
    title: "Bioactive scaffolds for complex soft-tissue reconstruction",
    summary:
      "Programmable biomaterials that orchestrate the regenerative cascade after blast and penetrating injury.",
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
    year: "2024",
    venue: "Nature Biomedical Engineering",
    title:
      "Self-propagating nanofiber networks for hemorrhage control in non-compressible torso injury",
  },
  {
    year: "2024",
    venue: "Annals of Surgery",
    title: "Multimodal prediction of secondary injury following severe polytrauma",
  },
  {
    year: "2023",
    venue: "Science Translational Medicine",
    title:
      "Engineered exosome signaling restores vascular function after ischemia–reperfusion",
  },
] as const;

export const NEWS = [
  {
    date: "April 2026",
    kicker: "Grant",
    title: "STAT Lab awarded DoD CDMRP grant to accelerate hemostatic nanotechnology",
  },
  {
    date: "March 2026",
    kicker: "Partnership",
    title: "New translational alliance with Duke Engineering on regenerative biomaterials",
  },
  {
    date: "February 2026",
    kicker: "Publication",
    title: "Lab paper on AI-guided trauma triage featured in Nature Biomedical Engineering",
  },
] as const;

export const COLLABORATORS = [
  "Duke University School of Medicine",
  "Pratt School of Engineering",
  "Duke MEDx",
  "Duke AI Health",
  "US Department of Defense",
  "NIH NIBIB",
  "Duke Innovation & Entrepreneurship",
  "Coulter Foundation",
] as const;
