import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { ICONS } from "@/content/icons";
import { METRICS, CATEGORIES, FUNDING_MIX } from "@/content";

export const Route = createFileRoute("/impact")({
  head: () => ({
    meta: [
      { title: "Impact — STAT Lab" },
      {
        name: "description",
        content:
          "Patents, devices, clinical implementations, industry partnerships, educational products, and grants from the STAT Lab.",
      },
      { property: "og:title", content: "Impact — STAT Lab" },
      { property: "og:description", content: "Translational outcomes from STAT Lab at Duke." },
    ],
  }),
  component: ImpactPage,
});

function ImpactPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Impact"
        title="Translational outcomes — measured in technologies, partnerships, and patients."
        subtitle="What the STAT Lab has built, deployed, and made accessible to the field."
      />

      <section className="border-b border-border/60">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden border-x border-border bg-border md:grid-cols-3 lg:grid-cols-6">
          {METRICS.map((m) => (
            <div key={m.label} className="bg-background px-6 py-8">
              <div className="text-3xl font-semibold tracking-tight">{m.value}</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-b border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((c) => {
              const Icon = ICONS[c.icon];
              return (
                <div key={c.title} className="bg-background p-7">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-duke-gradient text-white ring-1 ring-inset ring-white/15">
                    <Icon size={20} strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold tracking-tight">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
                  <ul className="mt-5 space-y-1.5 text-sm">
                    {c.items.map((it) => (
                      <li key={it} className="text-muted-foreground">
                        — {it}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
              Funding mix
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Diversified funding for ambitious translational work.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Our portfolio combines federal, foundation, industry, and institutional support —
              giving programs the runway to move from discovery to clinical impact.
            </p>
          </div>
          <div className="lg:col-span-7">
            <div className="flex h-4 overflow-hidden rounded-full ring-1 ring-inset ring-border">
              {FUNDING_MIX.map((f) => (
                <div
                  key={f.name}
                  className={`${f.color}`}
                  style={{ width: `${f.share}%` }}
                  title={`${f.name} ${f.share}%`}
                />
              ))}
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {FUNDING_MIX.map((f) => (
                <div key={f.name} className="flex items-center gap-3 rounded-lg border border-border bg-card p-4">
                  <span className={`h-3 w-3 rounded-full ${f.color}`} />
                  <div className="flex-1">
                    <div className="text-sm font-medium">{f.name}</div>
                    <div className="text-xs text-muted-foreground">{f.share}% of portfolio</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
