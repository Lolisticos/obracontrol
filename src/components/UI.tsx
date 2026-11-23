import type { ReactNode } from "react";
import { AlertTriangle, ArrowUpRight, ChevronRight } from "lucide-react";

export function Badge({ children, tone = "neutral" }: { children: ReactNode; tone?: "neutral" | "success" | "warning" | "danger" | "blue" }) {
  return <span className={`badge badge-${tone}`}>{children}</span>;
}

export function Progress({ value, label }: { value: number; label?: string }) {
  return (
    <div className="progress-wrap" aria-label={label ?? `${value}% completado`}>
      <div className="progress-meta"><span>{label}</span><strong>{value}%</strong></div>
      <div className="progress-track"><span style={{ width: `${value}%` }} /></div>
    </div>
  );
}

export function PageHeader({ eyebrow, title, description, action }: { eyebrow?: string; title: string; description?: string; action?: ReactNode }) {
  return (
    <header className="page-header">
      <div>{eyebrow && <div className="eyebrow">{eyebrow}</div>}<h1>{title}</h1>{description && <p>{description}</p>}</div>
      {action}
    </header>
  );
}

export function EmptyState({ title, body }: { title: string; body: string }) {
  return <div className="empty-state"><span><AlertTriangle size={22} /></span><h3>{title}</h3><p>{body}</p><button className="btn btn-secondary">Volver a intentar</button></div>;
}

export function SectionTitle({ kicker, title, body, dark = false }: { kicker: string; title: string; body?: string; dark?: boolean }) {
  return <div className={`section-title ${dark ? "on-dark" : ""}`}><span>{kicker}</span><h2>{title}</h2>{body && <p>{body}</p>}</div>;
}

export function Metric({ label, value, detail, accent }: { label: string; value: string; detail: string; accent?: boolean }) {
  return <div className={`metric ${accent ? "metric-accent" : ""}`}><div className="metric-top"><span>{label}</span><ArrowUpRight size={17} /></div><strong>{value}</strong><small>{detail}</small></div>;
}

export function InlineLink({ children }: { children: ReactNode }) {
  return <span className="inline-link">{children}<ChevronRight size={15} /></span>;
}
