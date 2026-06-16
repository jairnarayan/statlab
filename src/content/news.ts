export type NewsStory = {
  kicker: string;
  date: string;
  title: string;
  excerpt: string;
};

export const FEATURE: NewsStory = {
  kicker: "Feature story",
  date: "April 2026",
  title: "Inside the lab building the next generation of trauma hemostats",
  excerpt:
    "How a team of surgeons, materials scientists, and engineers at Duke is engineering nanomaterials that stop bleeding where conventional tools cannot.",
};

export const STORIES: NewsStory[] = [
  {
    kicker: "Grant",
    date: "April 2026",
    title: "STAT Lab awarded DoD CDMRP grant to accelerate hemostatic nanotechnology",
    excerpt:
      "Multi-year funding will support preclinical validation of the lab's nanofiber platform for non-compressible hemorrhage.",
  },
  {
    kicker: "Partnership",
    date: "March 2026",
    title: "New translational alliance with Duke Engineering on regenerative biomaterials",
    excerpt: "Joint program merges materials science and clinical translation expertise.",
  },
  {
    kicker: "Publication",
    date: "February 2026",
    title: "Lab paper on AI-guided trauma triage featured in Nature Biomedical Engineering",
    excerpt:
      "Multimodal model improves early detection of patient deterioration in polytrauma.",
  },
  {
    kicker: "Media",
    date: "January 2026",
    title: "Dr. Fernandez-Moure interviewed on the future of trauma technology",
    excerpt:
      "A wide-ranging conversation on AI, biomaterials, and the path from bench to bedside.",
  },
  {
    kicker: "Announcement",
    date: "December 2025",
    title: "STAT Lab welcomes new postdoctoral fellows across three programs",
    excerpt:
      "Expanding capacity across regenerative signaling, clinical AI, and device development.",
  },
];
