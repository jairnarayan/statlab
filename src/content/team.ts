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
  name: "Joseph Fernandez-Moure, MD, MS",
  role: "Principal Investigator · Associate Professor of Surgery",
  bio: "I am an academic surgeon with a practice in trauma, critical care and acute care surgery with an active research program focused on the development and translation of therapeutic strategies to improve the healing of acute traumatic injuries. My motivation for this works lies in the lack of available therapeutics for acute traumatic wounds which are often left to heal without intervention. Rib fractures exemplify this problem. I want to provide treatment solutions to the trauma patient where none exist. As the principle investigator of the Duke STAT lab my work is focused on enhancing the innate capacity of the body to heal broken bones and acute traumatic wounds through the use of engineered scaffolds, nanomaterials, and drug delivery systems. We are applying biomedical engineering principles to common traumatic injuries and in particular, rib fractures. We lack minimally invasive approaches to rib fracture repair and I have focused my lab on developing therapeutic solutions to this common injury. Using biologically derived materials we have studied the innate immune response to wound healing. As the Medical Director of the Duke Thoracic Injury Program, I have been actively involved in the development of instruments and devices to improve the safety and reduce the invasiveness of surgical approach to thoracic injuries.",
  interests: [
    "Interest 1",
    "Interest 2",
    "Interest 3",
    "Interest 4",
  ],
  image: "/jfm.jpg",
};

export const MEMBERS: TeamMember[] = [
  { name: "Name", role: "Role", focus: "Focus", image: ""},
  { name: "Name", role: "Role", focus: "Focus", image: ""},
  { name: "Name", role: "Role", focus: "Focus", image: ""},
  { name: "Name", role: "Role", focus: "Focus", image: ""},
  { name: "Name", role: "Role", focus: "Focus", image: ""},
  { name: "Name", role: "Role", focus: "Focus", image: ""},
  { name: "Name", role: "Role", focus: "Focus", image: ""},
  { name: "Name", role: "Role", focus: "Focus", image: ""},
];
