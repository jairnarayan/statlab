import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { ICONS } from "@/content/icons";
import { STAGES, PROJECTS } from "@/content";

export const Route = createFileRoute("/pipeline")({
  head: () => ({
    meta: [
      { title: "Technology Pipeline — STAT Lab" },
      {
        name: "description",
        content:
          "STAT Lab's clinical translation pipeline: from discovery and prototype through validation, translation, and clinical impact.",
      },
      { property: "og:title", content: "Technology Pipeline — STAT Lab" },
      { property: "og:description", content: "Discovery to clinical impact at STAT Lab." },
    ],
  }),
  component: PipelinePage,
});

function PipelinePage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Technology pipeline"
        title="From mechanism to bedside — engineered with intent."
        subtitle="A disciplined translational architecture that turns convergent science into validated technologies and clinical outcomes."
      />

      <section className="border-b border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-border to-transparent md:left-1/2 md:-translate-x-px" />
            <ol className="space-y-12">
              {STAGES.map((s, idx) => {
                const Icon = ICONS[s.icon];
                return (
                  <li key={s.label} className="relative md:grid md:grid-cols-2 md:gap-12">
                    <div
                      className={
                        idx % 2 === 0
                          ? "md:pr-12 md:text-right"
                          : "md:order-2 md:pl-12"
                      }
                    >
                      <div
                        className={`inline-flex items-center gap-3 ${
                          idx % 2 === 0 ? "md:flex-row-reverse" : ""
                        }`}
                      >
                        <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-duke-gradient text-white ring-1 ring-inset ring-white/15">
                          <Icon size={20} strokeWidth={1.5} />
                        </span>
                        <span className="font-mono text-xs text-muted-foreground">
                          Stage 0{idx + 1}
                        </span>
                      </div>
                      <h3 className="mt-4 text-2xl font-semibold tracking-tight">{s.label}</h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        {s.body}
                      </p>
                      <div
                        className={`mt-5 flex flex-wrap gap-2 ${
                          idx % 2 === 0 ? "md:justify-end" : ""
                        }`}
                      >
                        {s.artifacts.map((a) => (
                          <span
                            key={a}
                            className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-foreground"
                          >
                            {a}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="hidden md:block" />
                    <span className="absolute left-6 top-2 h-3 w-3 -translate-x-1/2 rounded-full bg-primary ring-4 ring-background md:left-1/2" />
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </section>

      {/* Project portfolio */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
          Active portfolio
        </div>
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight">
          Where our translational programs sit today.
        </h2>
        <div className="mt-10 overflow-hidden rounded-xl border border-border">
          <div className="grid grid-cols-7 border-b border-border bg-secondary px-5 py-3 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
            <div className="col-span-2">Program</div>
            {STAGES.map((s) => (
              <div key={s.label} className="text-center">{s.label}</div>
            ))}
          </div>
          <div className="divide-y divide-border">
            {PROJECTS.map((p) => (
              <div key={p.name} className="grid grid-cols-7 items-center px-5 py-4">
                <div className="col-span-2 text-sm font-medium">{p.name}</div>
                {STAGES.map((_, i) => (
                  <div key={i} className="flex justify-center">
                    <span
                      className={
                        i <= p.stage
                          ? "h-2.5 w-10 rounded-full bg-duke-gradient"
                          : "h-2.5 w-10 rounded-full bg-border"
                      }
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
