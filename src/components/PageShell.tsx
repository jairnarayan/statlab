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
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border/60 bg-mesh-duke text-white">
      <div className="absolute inset-0 bg-grid-faint opacity-[0.07]" />
      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
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
    </section>
  );
}
