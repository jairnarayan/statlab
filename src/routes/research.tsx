import { createFileRoute } from "@tanstack/react-router";
import {
  Brain,
  Atom,
  Dna,
  ActivitySquare,
  Cpu,
  BookOpen,
  ArrowRight,
} from "lucide-react";
import { PageShell, PageHero } from "@/components/PageShell";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "Research — STAT Lab" },
      {
        name: "description",
        content:
          "Six convergent research programs at STAT Lab: AI + clinical intelligence, biomaterials, regenerative signaling, trauma systems, device development, and knowledge products.",
      },
      { property: "og:title", content: "Research Programs — STAT Lab" },
      { property: "og:description", content: "Convergent translational research at Duke University." },
    ],
  }),
  component: ResearchPage,
});

// Research page content is stored here. Update the `name`, `overview`, `projects`, and `future`
// fields below as needed. The `id` value is used by the homepage pillar links.
const AREAS = [
  {
    id: "ai-clinical-intelligence",
    icon: Brain,
    name: "AI + Clinical Intelligence",
    overview:
      "We build clinical AI systems that integrate physiology, imaging, and context to support decision-making in trauma bays, ORs, and ICUs.",
    projects: [
      "Multimodal prediction of polytrauma deterioration",
      "Computer vision for intraoperative event detection",
      "Foundation models for surgical knowledge representation",
    ],
    relevance:
      "Earlier identification of patient decline, sharper resource allocation, and standardized expertise across institutions.",
    future:
      "Closed-loop decision support embedded in trauma resuscitation workflows.",
  },
  {
    id: "biomaterials-nanotechnology",
    icon: Atom,
    name: "Biomaterials + Nanotechnology",
    overview:
      "Engineering nanomaterials, hydrogels, and composite scaffolds that interact intelligently with biological systems after injury.",
    projects: [
      "Self-assembling nanofiber hemostats",
      "Bioactive composites for craniomaxillofacial reconstruction",
      "Drug-eluting nanoplatforms for surgical infection",
    ],
    relevance:
      "Solutions for hemorrhage, infection, and complex reconstruction in resource-limited and military environments.",
    future:
      "Programmable biomaterials that adapt their behavior to the local injury microenvironment.",
  },
  {
    id: "regenerative-signaling",
    icon: Dna,
    name: "Regenerative Signaling",
    overview:
      "Decoding the signaling pathways that orchestrate tissue regeneration after traumatic and surgical injury.",
    projects: [
      "Exosome-mediated vascular repair after I/R injury",
      "Mechanotransduction in bone healing",
      "Macrophage reprogramming for fibrosis control",
    ],
    relevance:
      "Restoring function — not just structure — in bone, soft tissue, and the vasculature.",
    future:
      "Cell-free regenerative therapeutics deliverable at the point of care.",
  },
  {
    id: "trauma-systems-innovation",
    icon: ActivitySquare,
    name: "Trauma Systems Innovation",
    overview:
      "Rethinking how trauma care is delivered — across geography, time, and the continuum from point-of-injury to recovery.",
    projects: [
      "Prehospital decision-support for rural trauma",
      "Outcomes science for geriatric polytrauma",
      "Workflow analytics for high-acuity environments",
    ],
    relevance:
      "Equitable, evidence-driven trauma systems that close care gaps.",
    future:
      "Networked trauma systems with real-time situational awareness.",
  },
  {
    id: "medical-device-development",
    icon: Cpu,
    name: "Medical Device Development",
    overview:
      "End-to-end engineering of devices — from human-centered concept to preclinical validation and regulatory strategy.",
    projects: [
      "Hemorrhage control platform for non-compressible injury",
      "Smart wound monitoring systems",
      "Surgical instrumentation for austere environments",
    ],
    relevance:
      "Devices designed by the surgeons who will use them.",
    future:
      "Validated, manufacturable platforms ready for first-in-human studies.",
  },
  {
    id: "knowledge-product-development",
    icon: BookOpen,
    name: "Knowledge Product Development",
    overview:
      "Building educational and clinical knowledge products that scale expertise and standardize best practice.",
    projects: [
      "Trauma surgical atlases and decision frameworks",
      "Simulation curricula for high-acuity skills",
      "Clinical guideline synthesis with structured AI",
    ],
    relevance:
      "Translating institutional expertise into reusable, distributable knowledge.",
    future:
      "Living knowledge products that learn from real-world outcomes.",
  },
] as const;

function ResearchPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Research"
        title="Six convergent programs at the frontier of trauma and surgery."
        subtitle="Each program is a translational engine — pairing rigorous science with engineering discipline to move concepts from mechanism to clinical impact."
      />
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="space-y-20">
          {AREAS.map((a, idx) => (
            <article
              key={a.name}
              className="grid gap-10 border-t border-border/60 pt-16 lg:grid-cols-12"
            >
              <div className="lg:col-span-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-duke-gradient text-white ring-1 ring-inset ring-white/15">
                    <a.icon size={20} strokeWidth={1.5} />
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">
                    0{idx + 1} / 0{AREAS.length}
                  </span>
                </div>
                <h2 className="mt-5 text-2xl font-semibold tracking-tight md:text-3xl">
                  {a.name}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {a.overview}
                </p>
              </div>
              <div className="grid gap-6 lg:col-span-8 md:grid-cols-3">
                <Block label="Current projects">
                  <ul className="space-y-2 text-sm leading-relaxed">
                    {a.projects.map((p) => (
                      <li key={p} className="flex gap-2">
                        <ArrowRight size={14} className="mt-1 shrink-0 text-primary" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </Block>
                <Block label="Clinical relevance">
                  <p className="text-sm leading-relaxed text-muted-foreground">{a.relevance}</p>
                </Block>
                <Block label="Future directions">
                  <p className="text-sm leading-relaxed text-muted-foreground">{a.future}</p>
                </Block>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
        {label}
      </div>
      <div className="mt-3">{children}</div>
    </div>
  );
}
