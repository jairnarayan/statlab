import { IconKey } from "./icons";

export type ContactTopic = {
  icon: IconKey;
  label: string;
};

export const TOPICS: ContactTopic[] = [
  { icon: "Handshake", label: "Collaboration" },
  { icon: "GraduationCap", label: "Trainee inquiry" },
  { icon: "Newspaper", label: "Press / media" },
  { icon: "Building2", label: "Industry partnership" },
];

export const CONTACT_INFO = {
  title: "Start a conversation.",
  subtitle: "Reach out to discuss collaborations, partnerships, or opportunities to join the lab.",
  location: [
    "Department of Surgery",
    "Duke University",
    "Durham, NC 27710",
  ],
  affiliation: ["Duke University", "Duke University School of Medicine"],
  email: "joseph.fernandezmoure@duke.edu",
  cityLabel: "Durham, North Carolina",
};
