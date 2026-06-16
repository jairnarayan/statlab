import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News — STAT Lab" },
      {
        name: "description",
        content:
          "Announcements, feature stories, and media coverage from the STAT Lab at Duke.",
      },
      { property: "og:title", content: "News — STAT Lab" },
      { property: "og:description", content: "Stories from the lab." },
    ],
  }),
  component: NewsPage,
});

const FEATURE = {
  kicker: "Feature story",
  date: "April 2026",
  title: "Inside the lab building the next generation of trauma hemostats",
  excerpt:
    "How a team of surgeons, materials scientists, and engineers at Duke is engineering nanomaterials that stop bleeding where conventional tools cannot.",
};

const STORIES = [
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
    excerpt: "Multimodal model improves early detection of patient deterioration in polytrauma.",
  },
  {
    kicker: "Media",
    date: "January 2026",
    title: "Dr. Fernandez-Moure interviewed on the future of trauma technology",
    excerpt: "A wide-ranging conversation on AI, biomaterials, and the path from bench to bedside.",
  },
  {
    kicker: "Announcement",
    date: "December 2025",
    title: "STAT Lab welcomes new postdoctoral fellows across three programs",
    excerpt: "Expanding capacity across regenerative signaling, clinical AI, and device development.",
  },
] as const;

function NewsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="News"
        title="From the lab — stories, announcements, and media."
        subtitle="What's happening inside STAT Lab and across the field of surgical innovation."
      />

      <section className="border-b border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <article className="group grid gap-10 overflow-hidden rounded-2xl border border-border bg-card lg:grid-cols-12">
            <div className="relative min-h-[280px] bg-duke-gradient lg:col-span-5">
              <div className="absolute inset-0 bg-grid-faint opacity-10" />
              <div className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white backdrop-blur">
                {FEATURE.kicker}
              </div>
            </div>
            <div className="p-8 lg:col-span-7 lg:p-12">
              <div className="text-xs text-muted-foreground">{FEATURE.date}</div>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
                {FEATURE.title}
              </h2>
              <p className="mt-4 text-muted-foreground">{FEATURE.excerpt}</p>
              <a
                href="#"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary"
              >
                Read the story <ArrowRight size={14} />
              </a>
            </div>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {STORIES.map((s) => (
            <article
              key={s.title}
              className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <div className="flex items-center gap-2 text-xs">
                <span className="rounded-full bg-secondary px-2 py-0.5 font-medium text-secondary-foreground">
                  {s.kicker}
                </span>
                <span className="text-muted-foreground">{s.date}</span>
              </div>
              <h3 className="mt-4 text-base font-semibold leading-snug tracking-tight group-hover:text-primary">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.excerpt}</p>
              <a href="#" className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                Read more <ArrowRight size={14} />
              </a>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
