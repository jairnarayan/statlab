import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, Linkedin, GraduationCap, BookOpen } from "lucide-react";
import { PageShell, PageHero } from "@/components/PageShell";
import { PI, MEMBERS } from "@/content";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — STAT Lab" },
      {
        name: "description",
        content:
          "Meet the scientists, surgeons, and engineers of the STAT Lab at Duke University.",
      },
      { property: "og:title", content: "Team — STAT Lab" },
      { property: "og:description", content: "Scientists, surgeons, and engineers at Duke." },
    ],
  }),
  component: TeamPage,
});

function TeamPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Team"
        title="A multidisciplinary team operating at the edge of surgery and technology."
        subtitle="Surgeons, scientists, and engineers united by a single mission: build technologies that change outcomes for injured patients."
        imageSrc="/team-hero.jpg"
        imageAlt="STAT Lab team"
      />

      {/* PI */}
      <section className="border-b border-border/60">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-duke-gradient ring-1 ring-inset ring-white/15">
  {PI.image ? (
    <img src={PI.image} alt={PI.name} className="h-full w-full object-cover" />
  ) : (
    <div className="absolute inset-0 bg-grid-faint opacity-[0.08]" />
  )}
              <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white backdrop-blur-md">
                <div className="text-xs font-medium uppercase tracking-widest text-blue-900">
                  Principal Investigator
                </div>
                <div className="mt-1 text-sm font-semibold">Joseph Fernandez-Moure, MD, MS</div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-8">
            <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
              Principal Investigator
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              {PI.name}
            </h2>
            <div className="mt-2 text-sm text-muted-foreground">{PI.role}</div>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
              {PI.bio}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {PI.interests.map((i) => (
                <span
                  key={i}
                  className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium"
                >
                  {i}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
  <a
    className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-3 py-2 text-sm font-medium hover:bg-secondary"
    href="https://scholars.duke.edu/person/Joseph.Fernandez-Moure/research"
    target="_blank"
    rel="noreferrer"
  >
    <GraduationCap size={14} /> Duke profile <ExternalLink size={12} />
  </a>

  <a
    className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-3 py-2 text-sm font-medium hover:bg-secondary"
    href="https://scholar.google.com/citations?user=g3Odq1sAAAAJ&hl=en"
    target="_blank"
    rel="noreferrer"
  >
    <BookOpen size={14} /> Publications <ExternalLink size={12} />
  </a>

  <a
    className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-3 py-2 text-sm font-medium hover:bg-secondary"
    href="https://www.linkedin.com/in/fernandez-moure-joseph-1a045739/"
    target="_blank"
    rel="noreferrer"
  >
    <Linkedin size={14} /> LinkedIn <ExternalLink size={12} />
  </a>
</div>
          </div>
        </div>
      </section>

      {/* Members */}
      <section className="bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
            Lab members
          </div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">The team behind the work.</h2>
          <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {MEMBERS.map((m, idx) => (
              <div key={idx} className="group relative bg-background p-6 transition-colors hover:bg-card">
                <div className="aspect-square overflow-hidden rounded-lg bg-duke-gradient ring-1 ring-inset ring-white/10">
  {m.image ? (
    <img src={m.image} alt={m.name} className="h-full w-full object-cover" />
  ) : (
    <div className="h-full w-full bg-grid-faint opacity-20" />
  )}
</div>
                <div className="mt-4 text-sm font-semibold tracking-tight">{m.name}</div>
                <div className="mt-1 text-xs text-muted-foreground">{m.role}</div>
                <div className="mt-3 text-xs text-primary">{m.focus}</div>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-xl border border-dashed border-border bg-background p-6 text-sm text-muted-foreground">
            We're actively recruiting individuals at the intersection of
            engineering, AI, and surgical science.{" "}
            <a href="/contact" className="font-medium text-primary hover:underline">
              Get in touch →
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
