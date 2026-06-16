export type Publication = {
  year: number;
  venue: string;
  title: string;
  topic: "AI" | "Biomaterials" | "Regenerative" | "Trauma Systems" | "Device" | "Knowledge";
  type: "Original" | "Review" | "Editorial";
  url?: string;
};

export const PUBLICATIONS: Publication[] = [
  {
    year: 2024,
    venue: "Nature Biomedical Engineering",
    title:
      "Self-propagating nanofiber networks for hemorrhage control in non-compressible torso injury",
    topic: "Biomaterials",
    type: "Original",
    url: "https://example.com/nature-biomedical-engineering",
  },
  {
    year: 2024,
    venue: "Annals of Surgery",
    title: "Multimodal prediction of secondary injury following severe polytrauma",
    topic: "AI",
    type: "Original",
    url: "https://example.com/annals-of-surgery",
  },
  {
    year: 2024,
    venue: "JAMA Surgery",
    title: "Outcomes of geriatric polytrauma: a multi-institutional cohort",
    topic: "Trauma Systems",
    type: "Original",
    url: "https://example.com/jama-surgery",
  },
  {
    year: 2023,
    venue: "Science Translational Medicine",
    title:
      "Engineered exosome signaling restores vascular function after ischemia–reperfusion",
    topic: "Regenerative",
    type: "Original",
    url: "https://example.com/science-translational-medicine",
  },
  {
    year: 2023,
    venue: "Biomaterials",
    title: "Bioactive composites for craniomaxillofacial reconstruction in the austere environment",
    topic: "Biomaterials",
    type: "Original",
    url: "https://example.com/biomaterials",
  },
  {
    year: 2023,
    venue: "Journal of Trauma and Acute Care Surgery",
    title: "Design considerations for hemorrhage control devices: a translational framework",
    topic: "Device",
    type: "Review",
    url: "https://example.com/journal-of-trauma-and-acute-care-surgery",
  },
  {
    year: 2023,
    venue: "npj Digital Medicine",
    title: "Foundation models for trauma decision support: opportunities and risks",
    topic: "AI",
    type: "Review",
    url: "https://example.com/npj-digital-medicine",
  },
  {
    year: 2022,
    venue: "Annals of Surgery",
    title: "Mechanotransduction in long-bone healing after high-energy trauma",
    topic: "Regenerative",
    type: "Original",
    url: "https://example.com/annals-of-surgery-2022",
  },
  {
    year: 2022,
    venue: "Journal of Surgical Research",
    title: "A structured knowledge product for damage-control resuscitation",
    topic: "Knowledge",
    type: "Original",
    url: "https://example.com/journal-of-surgical-research",
  },
  {
    year: 2022,
    venue: "Surgery",
    title: "Workflow analytics in high-acuity trauma bays",
    topic: "Trauma Systems",
    type: "Original",
    url: "https://example.com/surgery",
  },
  {
    year: 2021,
    venue: "Acta Biomaterialia",
    title: "Drug-eluting nanoplatforms for surgical site infection prevention",
    topic: "Biomaterials",
    type: "Original",
    url: "https://example.com/acta-biomaterialia",
  },
  {
    year: 2021,
    venue: "World Journal of Surgery",
    title: "Toward a global standard for trauma quality improvement",
    topic: "Trauma Systems",
    type: "Editorial",
    url: "https://example.com/world-journal-of-surgery",
  },
];
