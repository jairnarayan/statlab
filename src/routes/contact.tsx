import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Mail, Building2 } from "lucide-react";
import { PageShell, PageHero } from "@/components/PageShell";
import { ICONS } from "@/content/icons";
import { TOPICS, CONTACT_INFO } from "@/content";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — STAT Lab" },
      {
        name: "description",
        content:
          "Get in touch with the STAT Lab at Duke University — for collaboration, press, or trainee inquiries.",
      },
      { property: "og:title", content: "Contact — STAT Lab" },
      { property: "og:description", content: "Reach out to STAT Lab at Duke." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [topic, setTopic] = useState<string>(TOPICS[0].label);

  return (
    <PageShell>
      <PageHero
        eyebrow="Contact"
        title={CONTACT_INFO.title}
        subtitle={CONTACT_INFO.subtitle}
      />

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
            Lab location
          </div>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight">Duke University Medical Center</h2>

          <div className="mt-8 space-y-5 text-sm">
            <Info icon={MapPin} title="Address" lines={CONTACT_INFO.location} />
            <Info icon={Building2} title="Affiliation" lines={CONTACT_INFO.affiliation} />
            <Info icon={Mail} title="Email" lines={[CONTACT_INFO.email]} />
          </div>

          <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-duke-gradient ring-1 ring-inset ring-white/10">
            <div className="relative h-56 w-full">
              <div className="absolute inset-0 bg-grid-faint opacity-10" />
              <div className="absolute inset-0 flex items-center justify-center text-xs uppercase tracking-widest text-white/70">
                Durham, North Carolina
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="rounded-2xl border border-border bg-card p-8 shadow-elevated">
            <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
              Get in touch
            </div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight">Send the lab a message</h2>

            <div className="mt-6 flex flex-wrap gap-2">
              {TOPICS.map((t) => {
                const TopicIcon = ICONS[t.icon];
                return (
                  <button
                    key={t.label}
                    type="button"
                    onClick={() => setTopic(t.label)}
                    className={
                      "inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors " +
                      (topic === t.label
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-background text-muted-foreground hover:text-foreground")
                    }
                  >
                    <TopicIcon size={12} /> {t.label}
                  </button>
                );
              })}
            </div>

            <form
              className="mt-6 grid gap-5"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="Name" name="name" />
                <Field label="Organization" name="org" />
              </div>
              <Field label="Email" name="email" type="email" />
              <div>
                <label className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  How can we help?
                </label>
                <textarea
                  rows={5}
                  className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm outline-none ring-ring focus:ring-2"
                  placeholder={`Topic: ${topic}\n\nTell us about your project, question, or interest…`}
                />
              </div>
              <div className="flex items-center justify-between gap-4 pt-2">
                <div className="text-xs text-muted-foreground">
                  We typically respond within 2–3 business days.
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function Info({
  icon: Icon,
  title,
  lines,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  lines: string[];
}) {
  return (
    <div className="flex gap-3">
      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-secondary text-primary">
        <Icon size={16} />
      </span>
      <div>
        <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          {title}
        </div>
        <div className="mt-1 space-y-0.5 text-sm">
          {lines.map((l) => (
            <div key={l}>{l}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <label className="block">
      <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
      <input
        name={name}
        type={type}
        className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm outline-none ring-ring focus:ring-2"
      />
    </label>
  );
}
