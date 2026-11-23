import { Link } from "react-router";

export function Brand({ compact = false, light = false }: { compact?: boolean; light?: boolean }) {
  return (
    <Link className={`brand ${light ? "brand-light" : ""}`} to="/" aria-label="ObraControl, inicio">
      <span className="brand-mark" aria-hidden="true">
        <span />
        <span />
        <span />
      </span>
      {!compact && <span className="brand-name">OBRA<span>CONTROL</span></span>}
    </Link>
  );
}
