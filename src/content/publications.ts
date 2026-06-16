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
    venue: "Publisher 1",
    title:
      "Title 1",
    topic: "Biomaterials",
    type: "Original",
    url: "",
  },
  {
    year: 2024,
    venue: "Publisher 2",
    title: "Title 2",
    topic: "AI",
    type: "Original",
    url: "",
  },
  {
    year: 2024,
    venue: "Publisher 3",
    title: "Title 3",
    topic: "Trauma Systems",
    type: "Original",
    url: "",
  },
  {
    year: 2023,
    venue: "Publisher 4",
    title:
      "Title 4",
    topic: "Regenerative",
    type: "Original",
    url: "",
  },
  {
    year: 2023,
    venue: "Publisher 5",
    title: "Title 5",
    topic: "Biomaterials",
    type: "Original",
    url: "",
  },
  {
    year: 2023,
    venue: "Publisher 6",
    title: "Title 6",
    topic: "Device",
    type: "Review",
    url: "",
  },
  {
    year: 2023,
    venue: "Publisher 7",
    title: "Title 7",
    topic: "AI",
    type: "Review",
    url: "",
  },
  {
    year: 2022,
    venue: "Publisher 8",
    title: "Title 8",
    topic: "Regenerative",
    type: "Original",
    url: "",
  },
  {
    year: 2022,
    venue: "Publisher 9",
    title: "Title 9",
    topic: "Knowledge",
    type: "Original",
    url: "",
  },
  {
    year: 2022,
    venue: "Publisher 10",
    title: "Title 10",
    topic: "Trauma Systems",
    type: "Original",
    url: "",
  },
  {
    year: 2021,
    venue: "Publisher 11",
    title: "Title 11",
    topic: "Biomaterials",
    type: "Original",
    url: "",
  },
  {
    year: 2021,
    venue: "Publisher 12",
    title: "Title 12",
    topic: "Trauma Systems",
    type: "Editorial",
    url: "",
  },
];
