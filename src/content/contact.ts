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
  title: "Let's build the future of trauma care together.",
  subtitle: "Reach out to discuss collaborations, partnerships, or opportunities to join the lab.",
  location: [
    "Department of Surgery",
    "Duke University Medical Center",
    "Durham, NC 27710",
  ],
  affiliation: ["Duke University School of Medicine", "Duke MEDx · Duke AI Health"],
  email: "statlab@duke.edu",
  cityLabel: "Durham, North Carolina",
};
