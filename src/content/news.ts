export type NewsStory = {
  kicker: string;
  date: string;
  title: string;
  excerpt: string;
};

export const FEATURE: NewsStory = {
  kicker: "Feature story",
  date: "June 2026",
  title: "Title 1",
  excerpt:
    "Description 1",
};

export const STORIES: NewsStory[] = [
  {
    kicker: "Grant",
    date: "Month ####",
    title: "Title 1",
    excerpt:
      "Description 1",
  },
  {
    kicker: "Partnership",
    date: "Month ####",
    title: "Title 2",
    excerpt: "Description 2",
  },
  {
    kicker: "Publication",
    date: "Month ####",
    title: "Title 3",
    excerpt:
      "Description 3",
  },
  {
    kicker: "Media",
    date: "Month ####",
    title: "Title 4",
    excerpt:
      "Description 4",
  },
  {
    kicker: "Announcement",
    date: "Month ####",
    title: "Title 5",
    excerpt:
      "Description 5",
  },
];
