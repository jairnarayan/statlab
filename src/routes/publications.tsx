import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, FileText, ExternalLink } from "lucide-react";
import { PageShell, PageHero } from "@/components/PageShell";

export const Route = createFileRoute("/publications")({
  head: () => ({
    meta: [
      { title: "Publications — STAT Lab" },
      {
        name: "description",
        content:
          "Searchable publication database of the STAT Lab at Duke University.",
      },
      { property: "og:title", content: "Publications — STAT Lab" },
      { property: "og:description", content: "Peer-reviewed science from STAT Lab." },
    ],
  }),
  component: PublicationsPage,
});

type Pub = {
  year: number;
  venue: string;
  title: string;
  topic:
    | "AI"
    | "Biomaterials"
    | "Regenerative"
    | "Trauma Systems"
    | "Device"
    | "Knowledge";
  type: "Original" | "Review" | "Editorial";
  url?: string;
};

// Publications are stored here as structured data. Add or edit the `url` field
// for each record to make the View button open the publication or DOI link.
const PUBS: Pub[] = [
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

const TOPICS = ["All", "AI", "Biomaterials", "Regenerative", "Trauma Systems", "Device", "Knowledge"] as const;
const TYPES = ["All", "Original", "Review", "Editorial"] as const;
const YEARS = ["All", "2024", "2023", "2022", "2021"] as const;

function PublicationsPage() {
  const [q, setQ] = useState("");
  const [topic, setTopic] = useState<(typeof TOPICS)[number]>("All");
  const [type, setType] = useState<(typeof TYPES)[number]>("All");
  const [year, setYear] = useState<(typeof YEARS)[number]>("All");

  const filtered = useMemo(() => {
    return PUBS.filter((p) => {
      if (topic !== "All" && p.topic !== topic) return false;
      if (type !== "All" && p.type !== type) return false;
      if (year !== "All" && String(p.year) !== year) return false;
      if (q && !p.title.toLowerCase().includes(q.toLowerCase()) && !p.venue.toLowerCase().includes(q.toLowerCase()))
        return false;
      return true;
    });
  }, [q, topic, type, year]);

  return (
    <PageShell>
      <PageHero
        eyebrow="Publications"
        title="Peer-reviewed science, openly catalogued."
        subtitle="Search and filter our publications by topic, type, and year."
      />

      <section className="border-b border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative min-w-[260px] flex-1">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search title or venue…"
                className="w-full rounded-md border border-border bg-background py-2.5 pl-9 pr-3 text-sm outline-none ring-ring focus:ring-2"
              />
            </div>
            <Select label="Topic" value={topic} onChange={(v) => setTopic(v as typeof topic)} options={TOPICS} />
            <Select label="Type" value={type} onChange={(v) => setType(v as typeof type)} options={TYPES} />
            <Select label="Year" value={year} onChange={(v) => setYear(v as typeof year)} options={YEARS} />
          </div>
          <div className="mt-3 text-xs text-muted-foreground">
            Showing <span className="font-mono text-foreground">{filtered.length}</span> of {PUBS.length} publications
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <ul className="divide-y divide-border/70 border-y border-border/70">
          {filtered.map((p) => (
            <li key={p.title} className="group flex items-start gap-4 py-6">
              <FileText size={18} className="mt-1 shrink-0 text-muted-foreground" />
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                  <span className="font-mono">{p.year}</span>
                  <span>·</span>
                  <span>{p.venue}</span>
                  <span>·</span>
                  <span className="rounded-full bg-secondary px-2 py-0.5 font-medium text-secondary-foreground">
                    {p.topic}
                  </span>
                  <span className="rounded-full border border-border px-2 py-0.5">{p.type}</span>
                </div>
                <div className="mt-2 text-[15px] font-medium leading-snug text-foreground group-hover:text-primary">
                  {p.title}
                </div>
              </div>
              <a
                href={p.url ?? "#"}
                target={p.url ? "_blank" : undefined}
                rel={p.url ? "noreferrer" : undefined}
                className="mt-1 inline-flex shrink-0 items-center gap-1 text-xs text-primary hover:underline"
              >
                View <ExternalLink size={12} />
              </a>
            </li>
          ))}
          {filtered.length === 0 && (
            <li className="py-12 text-center text-sm text-muted-foreground">No publications match these filters.</li>
          )}
        </ul>
      </section>
    </PageShell>
  );
}

function Select<T extends string>({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: T;
  onChange: (v: T) => void;
  options: readonly T[];
}) {
  return (
    <label className="flex items-center gap-2 text-xs text-muted-foreground">
      <span className="font-medium uppercase tracking-widest">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as T)}
        className="rounded-md border border-border bg-background px-2.5 py-2 text-sm text-foreground outline-none ring-ring focus:ring-2"
      >
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}
