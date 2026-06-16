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
    name: "Artificial Intelligence",
    overview:
      "Applying machine learning and computer vision to challenges in trauma surgery and critical care.",
    projects: [
      "Prediction models for trauma deterioration",
      "Computer vision for surgical and critical care environments",
      "AI tools for clinical knowledge organization",
    ],
    relevance: "Supporting clinical decision-making in high-acuity environments.",
    future: "Integrating AI into clinical workflows.",
  },
  {
    id: "biomaterials-nanotechnology",
    icon: "Atom",
    name: "Biomaterials + Nanotechnology",
    overview:
      "Developing biomaterials, nanomaterials, and drug delivery systems for traumatic injury.",
    projects: [
      "Bioactive scaffolds for bone repair",
      "Nanomaterial-based drug delivery",
      "Biomaterials for wound healing",
    ],
    relevance:
      "New approaches to tissue repair, infection control, and reconstruction.",
    future: "Materials that actively guide healing and regeneration.",
  },
  {
    id: "regenerative-signaling",
    icon: "Dna",
    name: "Regenerative Medicine",
    overview:
      "Studying the biological mechanisms that drive tissue repair and regeneration.",
    projects: [
      "Immune signaling in wound healing",
      "Mechanisms of bone repair",
      "Cell-free approaches to tissue regeneration",
    ],
    relevance: "Improving recovery after bone and soft tissue injury.",
    future: "Cell-free therapies for tissue repair.",
  },
  {
    id: "trauma-systems-innovation",
    icon: "ActivitySquare",
    name: "Trauma Systems",
    overview:
      "Improving the delivery, coordination, and outcomes of trauma care.",
    projects: [
      "Prehospital and rural trauma decision support",
      "Outcomes research in traumatic injury",
      "Workflow analysis in high-acuity environments",
    ],
    relevance: "Reducing variation in care and improving patient outcomes.",
    future: "Data-driven trauma systems with real-time decision support.",
  },
  {
    id: "medical-device-development",
    icon: "Cpu",
    name: "Medical Devices",
    overview:
      "Designing and evaluating devices that address unmet clinical needs.",
    projects: [
      "Devices for rib fracture repair",
      "Wound monitoring technologies",
      "Surgical tools for trauma care",
    ],
    relevance: "Practical solutions to common challenges in trauma surgery.",
    future: "Technologies ready for clinical evaluation and adoption.",
  },
  {
    id: "knowledge-product-development",
    icon: "BookOpen",
    name: "Education + Knowledge Translation",
    overview:
      "Creating educational resources and decision-support tools for clinicians and trainees.",
    projects: [
      "Trauma surgery education resources",
      "Simulation tools for high-acuity skills",
      "Clinical decision frameworks",
    ],
    relevance: "Expanding access to surgical knowledge and training.",
    future: "Adaptive educational tools informed by clinical data.",
  },
];
