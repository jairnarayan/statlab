import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageShell, PageHero } from "@/components/PageShell";
import { AREAS } from "@/content";
import { ICONS } from "@/content/icons";

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
      {
        property: "og:description",
        content: "Convergent translational research at Duke University.",
      },
    ],
  }),
  component: ResearchPage,
});

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
          {AREAS.map((a, idx) => {
            const Icon = ICONS[a.icon];
            return (
              <article
                key={a.name}
                className="grid gap-10 border-t border-border/60 pt-16 lg:grid-cols-12"
              >
                <div className="lg:col-span-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-duke-gradient text-white ring-1 ring-inset ring-white/15">
                      <Icon size={20} strokeWidth={1.5} />
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
                          <ArrowRight
                            size={14}
                            className="mt-1 shrink-0 text-primary"
                          />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </Block>
                  <Block label="Clinical relevance">
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {a.relevance}
                    </p>
                  </Block>
                  <Block label="Future directions">
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {a.future}
                    </p>
                  </Block>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </PageShell>
  );
}

function Block({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
        {label}
      </div>
      <div className="mt-3">{children}</div>
    </div>
  );
}
