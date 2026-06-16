import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-secondary/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-duke-gradient">
              <span className="text-[11px] font-semibold text-white">ST</span>
            </span>
            <div className="leading-tight">
              <div className="text-sm font-semibold">Surgical Technology &amp; Advanced Trauma Lab</div>
              <div className="text-xs text-muted-foreground">Duke University School of Medicine</div>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm text-muted-foreground">
            STAT Lab develops transformative technologies at the intersection of surgery,
            artificial intelligence, biomaterials, and regenerative medicine.
          </p>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-foreground">
            Explore
          </div>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/research" className="hover:text-foreground">Research</Link></li>
            <li><Link to="/pipeline" className="hover:text-foreground">Technology Pipeline</Link></li>
            <li><Link to="/team" className="hover:text-foreground">Team</Link></li>
            <li><Link to="/publications" className="hover:text-foreground">Publications</Link></li>
            <li><Link to="/impact" className="hover:text-foreground">Impact</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-foreground">
            Contact
          </div>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>Department of Surgery</li>
            <li>Duke University Medical Center</li>
            <li>Durham, NC 27710</li>
            <li><Link to="/contact" className="hover:text-foreground">Collaboration inquiries →</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-2 px-6 py-5 text-xs text-muted-foreground md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} STAT Lab · Duke University. All rights reserved.</div>
          <div>Principal Investigator: Joseph Fernandez-Moure, MD, MSCE, FACS</div>
        </div>
      </div>
    </footer>
  );
}
