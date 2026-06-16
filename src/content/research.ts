import { IconKey } from "./icons";

export type ResearchArea = {
  id: string;
  icon: IconKey;
  name: string;
  overview: string;
  projects: string[];
  relevance: string;
  future: string;
};

export const AREAS: ResearchArea[] = [
  {
    id: "ai-clinical-intelligence",
    icon: "Brain",
    name: "AI + Clinical Intelligence",
    overview:
      "We build clinical AI systems that integrate physiology, imaging, and context to support decision-making in trauma bays, ORs, and ICUs.",
    projects: [
      "Multimodal prediction of polytrauma deterioration",
      "Computer vision for intraoperative event detection",
      "Foundation models for surgical knowledge representation",
    ],
    relevance:
      "Earlier identification of patient decline, sharper resource allocation, and standardized expertise across institutions.",
    future: "Closed-loop decision support embedded in trauma resuscitation workflows.",
  },
  {
    id: "biomaterials-nanotechnology",
    icon: "Atom",
    name: "Biomaterials + Nanotechnology",
    overview:
      "Engineering nanomaterials, hydrogels, and composite scaffolds that interact intelligently with biological systems after injury.",
    projects: [
      "Self-assembling nanofiber hemostats",
      "Bioactive composites for craniomaxillofacial reconstruction",
      "Drug-eluting nanoplatforms for surgical infection",
    ],
    relevance:
      "Solutions for hemorrhage, infection, and complex reconstruction in resource-limited and military environments.",
    future: "Programmable biomaterials that adapt their behavior to the local injury microenvironment.",
  },
  {
    id: "regenerative-signaling",
    icon: "Dna",
    name: "Regenerative Signaling",
    overview:
      "Decoding the signaling pathways that orchestrate tissue regeneration after traumatic and surgical injury.",
    projects: [
      "Exosome-mediated vascular repair after I/R injury",
      "Mechanotransduction in bone healing",
      "Macrophage reprogramming for fibrosis control",
    ],
    relevance:
      "Restoring function — not just structure — in bone, soft tissue, and the vasculature.",
    future: "Cell-free regenerative therapeutics deliverable at the point of care.",
  },
  {
    id: "trauma-systems-innovation",
    icon: "ActivitySquare",
    name: "Trauma Systems Innovation",
    overview:
      "Rethinking how trauma care is delivered — across geography, time, and the continuum from point-of-injury to recovery.",
    projects: [
      "Prehospital decision-support for rural trauma",
      "Outcomes science for geriatric polytrauma",
      "Workflow analytics for high-acuity environments",
    ],
    relevance:
      "Equitable, evidence-driven trauma systems that close care gaps.",
    future: "Networked trauma systems with real-time situational awareness.",
  },
  {
    id: "medical-device-development",
    icon: "Cpu",
    name: "Medical Device Development",
    overview:
      "End-to-end engineering of devices — from human-centered concept to preclinical validation and regulatory strategy.",
    projects: [
      "Hemorrhage control platform for non-compressible injury",
      "Smart wound monitoring systems",
      "Surgical instrumentation for austere environments",
    ],
    relevance: "Devices designed by the surgeons who will use them.",
    future: "Validated, manufacturable platforms ready for first-in-human studies.",
  },
  {
    id: "knowledge-product-development",
    icon: "BookOpen",
    name: "Knowledge Product Development",
    overview:
      "Building educational and clinical knowledge products that scale expertise and standardize best practice.",
    projects: [
      "Trauma surgical atlases and decision frameworks",
      "Simulation curricula for high-acuity skills",
      "Clinical guideline synthesis with structured AI",
    ],
    relevance:
      "Translating institutional expertise into reusable, distributable knowledge.",
    future: "Living knowledge products that learn from real-world outcomes.",
  },
];
