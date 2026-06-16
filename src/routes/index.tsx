import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Brain,
  Atom,
  Dna,
  ActivitySquare,
  Cpu,
  BookOpen,
  Microscope,
  HeartPulse,
  Sparkles,
  FileText,
  Newspaper,
} from "lucide-react";
import { NetworkCanvas } from "@/components/NetworkCanvas";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "STAT Lab — Engineering the Future of Trauma Care | Duke University" },
      {
        name: "description",
        content:
          "STAT Lab develops transformative technologies at the intersection of surgery, AI, biomaterials, and regenerative medicine for patients facing traumatic injury.",
      },
      { property: "og:title", content: "STAT Lab — Engineering the Future of Trauma Care" },
      {
        property: "og:description",
        content:
          "Translational research at Duke University led by Dr. Joseph Fernandez-Moure.",
      },
    ],
  }),
  component: HomePage,
});

// Research pillar cards are defined here. Update the title, body, and id fields below
// to change the homepage buttons and target sections on the Research page.
const PILLARS = [
  {
    id: "ai-clinical-intelligence",
    icon: Brain,
    title: "AI + Clinical Intelligence",
    body: "Predictive models, decision-support, and computer vision for high-acuity trauma and critical care environments.",
  },
  {
    id: "biomaterials-nanotechnology",
    icon: Atom,
    title: "Biomaterials + Nanotechnology",
    body: "Engineered nanomaterials and bioactive scaffolds that accelerate tissue repair after traumatic injury.",
  },
  {
    id: "regenerative-signaling",
    icon: Dna,
    title: "Regenerative Signaling",
    body: "Decoding biological pathways to restore function in bone, soft tissue, and vascular networks.",
  },
  {
    id: "trauma-systems-innovation",
    icon: ActivitySquare,
    title: "Trauma Systems Innovation",
    body: "Rethinking the systems-level architecture of trauma care, from point-of-injury to recovery.",
  },
  {
    id: "medical-device-development",
    icon: Cpu,
    title: "Medical Device Development",
    body: "Designing, prototyping, and validating devices that translate science into the operating room.",
  },
  {
    id: "knowledge-product-development",
    icon: BookOpen,
    title: "Knowledge Product Development",
    body: "Educational platforms and clinical knowledge products that scale expertise across institutions.",
  },
] as const;

const INNOVATIONS = [
  {
    tag: "Nanomaterial Hemostat",
    title: "Self-assembling nanofiber matrix for catastrophic hemorrhage",
    summary:
      "A next-generation hemostatic platform engineered to control non-compressible bleeding at the point of injury.",
  },
  {
    tag: "AI Triage Engine",
    title: "Real-time risk stratification for polytrauma",
    summary:
      "Multimodal model integrating physiologic, imaging, and contextual data to predict deterioration hours earlier.",
  },
  {
    tag: "Regenerative Scaffold",
    title: "Bioactive scaffolds for complex soft-tissue reconstruction",
    summary:
      "Programmable biomaterials that orchestrate the regenerative cascade after blast and penetrating injury.",
  },
] as const;

const PIPELINE = [
  { label: "Discovery", body: "Hypothesis & mechanism" },
  { label: "Prototype", body: "Engineering & iteration" },
  { label: "Validation", body: "Preclinical evidence" },
  { label: "Translation", body: "Regulatory & manufacturing" },
  { label: "Clinical Impact", body: "Bedside outcomes" },
] as const;

const PUBLICATIONS = [
  {
    year: "2024",
    venue: "Nature Biomedical Engineering",
    title:
      "Self-propagating nanofiber networks for hemorrhage control in non-compressible torso injury",
  },
  {
    year: "2024",
    venue: "Annals of Surgery",
    title:
      "Multimodal prediction of secondary injury following severe polytrauma",
  },
  {
    year: "2023",
    venue: "Science Translational Medicine",
    title:
      "Engineered exosome signaling restores vascular function after ischemia–reperfusion",
  },
] as const;

const NEWS = [
  {
    date: "April 2026",
    kicker: "Grant",
    title: "STAT Lab awarded DoD CDMRP grant to accelerate hemostatic nanotechnology",
  },
  {
    date: "March 2026",
    kicker: "Partnership",
    title: "New translational alliance with Duke Engineering on regenerative biomaterials",
  },
  {
    date: "February 2026",
    kicker: "Publication",
    title: "Lab paper on AI-guided trauma triage featured in Nature Biomedical Engineering",
  },
] as const;

const COLLABORATORS = [
  "Duke University School of Medicine",
  "Pratt School of Engineering",
  "Duke MEDx",
  "Duke AI Health",
  "US Department of Defense",
  "NIH NIBIB",
  "Duke Innovation & Entrepreneurship",
  "Coulter Foundation",
] as const;

function HomePage() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-mesh-duke text-white">
        <NetworkCanvas
          className="absolute inset-0 h-full w-full"
          nodeColor="rgba(140, 220, 255, 0.85)"
          lineColor="rgba(140, 220, 255, 0.18)"
          density={70}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[oklch(0.12_0.03_264)]" />
        <div className="relative mx-auto max-w-7xl px-6 pb-28 pt-28 md:pb-40 md:pt-40">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-cyan-electric/90 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-electric animate-pulse-node" />
            Duke University · Department of Surgery
          </div>
          <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl">
            Engineering the future of{" "}
            <span className="bg-gradient-to-r from-white via-[oklch(0.92_0.06_220)] to-[oklch(0.82_0.16_210)] bg-clip-text text-transparent">
              trauma care.
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-base text-white/75 md:text-lg">
            STAT Lab develops transformative technologies at the intersection of surgery,
            artificial intelligence, biomaterials, and regenerative medicine to improve
            outcomes for patients facing traumatic injury.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/research"
              className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-medium text-[oklch(0.16_0.04_264)] transition-transform hover:-translate-y-0.5"
            >
              Explore the research <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur transition-colors hover:bg-white/10"
            >
              Collaborate with us
            </Link>
          </div>

          {/* Stat strip */}
          <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur md:grid-cols-4">
            {[
              ["80+", "Peer-reviewed papers"],
              ["12", "Active translational projects"],
              ["$14M", "In active research funding"],
              ["6", "Issued & pending patents"],
            ].map(([k, v]) => (
              <div key={v} className="bg-[oklch(0.16_0.04_264)]/40 px-6 py-6">
                <div className="text-3xl font-semibold tracking-tight text-white">{k}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-white/60">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="relative border-b border-border/60">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
              Mission
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Beyond publications — toward platforms, devices, and clinical impact at scale.
            </h2>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-muted-foreground lg:col-span-7">
            <p>
              The Surgical Technology and Advanced Trauma (STAT) Lab is a translational
              research and technology development laboratory at Duke University led by
              Dr. Joseph Fernandez-Moure. We work at the convergence of advanced
              biomaterials, AI, regenerative biology, and human-centered engineering to
              address the most consequential unmet needs in trauma, surgery, and critical
              care.
            </p>
            <p>
              We measure success not in citations alone, but in the technologies,
              platforms, devices, and knowledge products that move from concept to
              clinical reality — and the lives improved along the way.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              {[
                "Translational surgery",
                "Human-centered innovation",
                "Clinical impact at scale",
              ].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RESEARCH PILLARS */}
      <section className="border-b border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
                Research pillars
              </div>
              <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
                Six convergent programs powering the next generation of trauma care.
              </h2>
            </div>
            <Link
              to="/research"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              See all research <ArrowRight size={14} />
            </Link>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {PILLARS.map((p) => (
              <Link
                key={p.title}
                to="/research"
                className="group relative block bg-background p-7 transition-colors hover:bg-card"
                aria-label={`Learn more about ${p.title} on the Research page`}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-duke-gradient text-white ring-1 ring-inset ring-white/15">
                  <p.icon size={20} strokeWidth={1.5} />
                </div>
                <h3 className="mt-5 text-lg font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                <div className="mt-6 inline-flex items-center gap-1.5 text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  Learn more <ArrowRight size={12} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED INNOVATIONS */}
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
            Featured innovations
          </div>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight md:text-4xl">
            Technologies engineered for the most consequential moments in surgery.
          </h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {INNOVATIONS.map((i, idx) => (
              <article
                key={i.title}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-elevated transition-transform hover:-translate-y-1"
              >
                <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-duke-gradient opacity-[0.08] blur-2xl transition-opacity group-hover:opacity-[0.16]" />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-semibold uppercase tracking-widest text-primary">
                      {i.tag}
                    </span>
                    <span className="font-mono text-[11px] text-muted-foreground">
                      0{idx + 1} / 03
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold leading-snug tracking-tight">
                    {i.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {i.summary}
                  </p>
                  <div className="mt-8 flex items-center gap-2 text-sm font-medium text-primary">
                    <Sparkles size={14} /> Translational program
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PIPELINE */}
      <section className="relative overflow-hidden border-b border-border/60 bg-mesh-duke text-white">
        <div className="absolute inset-0 bg-grid-faint opacity-[0.07]" />
        <div className="relative mx-auto max-w-7xl px-6 py-24">
          <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-electric/90">
            Clinical translation pipeline
          </div>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight md:text-4xl">
            From mechanism to bedside — a disciplined journey toward clinical impact.
          </h2>

          <div className="relative mt-16">
            <div className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-cyan-electric/60 to-transparent md:block" />
            <ol className="grid gap-8 md:grid-cols-5">
              {PIPELINE.map((s, idx) => (
                <li key={s.label} className="relative">
                  <div className="flex items-center gap-3">
                    <span className="relative flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-[oklch(0.16_0.04_264)] font-mono text-sm">
                      <span className="absolute inset-0 rounded-full bg-cyan-electric/15 animate-pulse-node" />
                      <span className="relative">0{idx + 1}</span>
                    </span>
                  </div>
                  <div className="mt-4 text-sm font-semibold tracking-tight">{s.label}</div>
                  <div className="mt-1 text-xs text-white/60">{s.body}</div>
                </li>
              ))}
            </ol>
          </div>
          <div className="mt-12">
            <Link
              to="/pipeline"
              className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/5 px-4 py-2.5 text-sm font-medium text-white backdrop-blur transition-colors hover:bg-white/10"
            >
              Explore the full pipeline <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* PUBLICATIONS + NEWS */}
      <section className="border-b border-border/60">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-2">
          <div>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
                  Latest publications
                </div>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
                  Peer-reviewed science.
                </h2>
              </div>
              <Link to="/publications" className="text-sm font-medium text-primary hover:underline">
                All →
              </Link>
            </div>
            <ul className="mt-8 divide-y divide-border/70 border-y border-border/70">
              {PUBLICATIONS.map((p) => (
                <li key={p.title} className="group flex gap-4 py-5">
                  <FileText size={16} className="mt-1 shrink-0 text-muted-foreground" />
                  <div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="font-mono">{p.year}</span>
                      <span>·</span>
                      <span>{p.venue}</span>
                    </div>
                    <div className="mt-1 text-[15px] font-medium leading-snug text-foreground group-hover:text-primary">
                      {p.title}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
                  News &amp; updates
                </div>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
                  From the lab.
                </h2>
              </div>
              <Link to="/news" className="text-sm font-medium text-primary hover:underline">
                All →
              </Link>
            </div>
            <ul className="mt-8 space-y-4">
              {NEWS.map((n) => (
                <li
                  key={n.title}
                  className="group rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
                >
                  <div className="flex items-center gap-2 text-xs">
                    <span className="rounded-full bg-secondary px-2 py-0.5 font-medium text-secondary-foreground">
                      {n.kicker}
                    </span>
                    <span className="text-muted-foreground">{n.date}</span>
                  </div>
                  <div className="mt-3 text-[15px] font-medium leading-snug group-hover:text-primary">
                    {n.title}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* COLLABORATORS */}
      <section className="border-b border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
            Collaborators
          </div>
          <h2 className="mt-3 max-w-3xl text-2xl font-semibold tracking-tight md:text-3xl">
            We build with leaders across medicine, engineering, and defense.
          </h2>
          <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 md:grid-cols-4">
            {COLLABORATORS.map((c) => (
              <div
                key={c}
                className="flex items-center justify-center bg-background px-4 py-6 text-center text-sm font-medium text-muted-foreground"
              >
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-duke-gradient" />
        <div className="absolute inset-0 bg-grid-faint opacity-[0.08]" />
        <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-20 text-white md:flex-row md:items-center">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-electric/90">
              Collaborate
            </div>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
              Have a hard problem in trauma, surgery, or critical care?
            </h2>
            <p className="mt-3 max-w-2xl text-white/75">
              We partner with clinicians, scientists, engineers, and industry to
              translate ideas into devices, platforms, and clinical outcomes.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-medium text-[oklch(0.16_0.04_264)] transition-transform hover:-translate-y-0.5"
          >
            Start a conversation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
