import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  imageSrc,
  imageAlt,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  imageSrc?: string;
  imageAlt?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border/60 bg-mesh-duke text-white">
      <div className="absolute inset-0 bg-grid-faint opacity-[0.07]" />
      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_560px]">
          <div>
            <div className="text-[11px] font-medium uppercase tracking-[0.22em] text-cyan-electric/90">
              {eyebrow}
            </div>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-6 max-w-2xl text-base text-white/70 md:text-lg">{subtitle}</p>
            )}
          </div>

          {imageSrc ? (
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/10 shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
              <div className="aspect-[16/9] bg-slate-950" />
              <img
                src={imageSrc}
                alt={imageAlt ?? "Hero image"}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
