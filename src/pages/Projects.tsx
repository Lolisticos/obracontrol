import { useMemo, useState } from "react";
import { Building2, Grid2X2, List, MapPin, MoreHorizontal, Search, SlidersHorizontal } from "lucide-react";
import { Link } from "react-router";
import { Badge, PageHeader, Progress } from "../components/UI";
import { money, projects } from "../data/mock";

export default function Projects() {
  const [view, setView] = useState<"table" | "cards">("table");
  const [query, setQuery] = useState("");
  const filtered = useMemo(()=>projects.filter(p=>`${p.name} ${p.code} ${p.location}`.toLowerCase().includes(query.toLowerCase())),[query]);
  return <>
    <PageHeader eyebrow="Gestión de proyectos" title="Obras" description="Administrá y controlá todos tus proyectos desde un único lugar." action={<Link className="btn btn-primary" to="/app/obras/nueva">+ Nueva obra</Link>}/>
    <div className="toolbar"><label><Search size={17}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Buscar por nombre, código o ubicación..."/></label><button className="btn btn-secondary"><SlidersHorizontal size={17}/> Filtros <span>2</span></button><div className="view-toggle"><button className={view==="table"?"active":""} onClick={()=>setView("table")} aria-label="Vista tabla"><List/></button><button className={view==="cards"?"active":""} onClick={()=>setView("cards")} aria-label="Vista tarjetas"><Grid2X2/></button></div></div>
    <div className="results-meta"><span>{filtered.length} obras</span><small>Ordenado por actividad reciente</small></div>
    {view === "table" ? <div className="panel projects-table-panel"><div className="table-scroll"><table><thead><tr><th>Obra</th><th>Responsable</th><th>Estado</th><th>Presupuesto</th><th>Costo</th><th>Avance</th><th></th></tr></thead><tbody>{filtered.map(p=><tr key={p.code}><td><Link to={`/app/obras/${p.code}`}><div className="project-cell-icon"><Building2/></div><div><code>{p.code}</code><b>{p.name}</b><small><MapPin size={12}/>{p.location}</small></div></Link></td><td>{p.manager}</td><td><Badge tone={p.status==="En alerta"?"danger":p.status==="En curso"?"success":"blue"}>{p.status}</Badge></td><td>{money(p.budget)}</td><td>{money(p.cost)}</td><td><div className="table-progress"><span><i style={{width:`${p.progress}%`}}/></span><b>{p.progress}%</b></div></td><td><MoreHorizontal/></td></tr>)}</tbody></table></div></div>
    : <div className="project-cards">{filtered.map(p=><Link to={`/app/obras/${p.code}`} className="project-card" key={p.code}><div className="project-image"><Building2/><Badge tone={p.status==="En alerta"?"danger":p.status==="En curso"?"success":"blue"}>{p.status}</Badge></div><code>{p.code}</code><h3>{p.name}</h3><p><MapPin size={14}/>{p.location}</p><div className="card-finance"><span><small>Presupuesto</small><b>{money(p.budget,true)}</b></span><span><small>Costo</small><b>{money(p.cost,true)}</b></span></div><Progress value={p.progress} label="Avance físico"/></Link>)}</div>}
  </>;
}
