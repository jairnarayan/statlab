import { IconKey } from "./icons";

export type TeamMember = {
  name: string;
  role: string;
  focus: string;
};

export type TeamLead = {
  name: string;
  role: string;
  bio: string;
  interests: string[];
};

export const PI: TeamLead = {
  name: "Joseph Fernandez-Moure, MD, MSCE, FACS",
  role: "Principal Investigator · Associate Professor of Surgery",
  bio: "Trauma and acute care surgeon, scientist, and innovator focused on the convergence of biomaterials, nanotechnology, AI, and regenerative medicine for the care of injured patients. Dr. Fernandez-Moure directs the STAT Lab at Duke University and serves as a translational bridge between the operating room and the bench.",
  interests: [
    "Hemorrhage control nanotechnology",
    "Regenerative signaling",
    "AI for clinical decision-making",
    "Trauma systems",
  ],
};

export const MEMBERS: TeamMember[] = [
  { name: "Senior Scientist", role: "Biomaterials & Nanotechnology", focus: "Nanofiber hemostats" },
  { name: "Postdoctoral Fellow", role: "Regenerative Signaling", focus: "Exosome biology" },
  { name: "Clinical AI Lead", role: "AI + Clinical Intelligence", focus: "Multimodal models" },
  { name: "Senior Engineer", role: "Medical Device Development", focus: "Prototype to validation" },
  { name: "Research Associate", role: "Trauma Systems Innovation", focus: "Outcomes science" },
  { name: "Program Manager", role: "Translational Operations", focus: "Portfolio & partnerships" },
  { name: "Graduate Student", role: "Biomaterials", focus: "Bioactive composites" },
  { name: "Graduate Student", role: "Regenerative Medicine", focus: "Mechanotransduction" },
];
