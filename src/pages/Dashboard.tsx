import { ArrowUpRight, Building2, CircleDollarSign, MoreHorizontal, ShieldAlert, TrendingUp, WalletCards } from "lucide-react";
import { Link } from "react-router";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Badge, Metric, PageHeader, Progress } from "../components/UI";
import { activeProjects, costDistribution, evolution, money, projects, totalBudget, totalCost, weightedProgress } from "../data/mock";

const statusTone = (status: string) => status === "En curso" ? "success" : status === "En alerta" ? "danger" : status === "Planificada" ? "blue" : "neutral";

export default function Dashboard() {
  return (
    <>
      <PageHeader eyebrow="Lunes, 23 de noviembre" title="Buen día, Marina." description="Este es el estado de tus obras al día de hoy." action={<Link className="btn btn-primary" to="/app/obras/nueva">+ Nueva obra</Link>} />
      <section className="metrics-grid">
        <Metric label="Obras activas" value={String(activeProjects.length)} detail="1 requiere atención" />
        <Metric label="Presupuesto vigente" value={money(totalBudget, true)} detail="Total de obras activas" />
        <Metric label="Costos acumulados" value={money(totalCost, true)} detail={`${Math.round(totalCost / totalBudget * 100)}% del presupuesto`} />
        <Metric label="Avance general" value={`${weightedProgress}%`} detail="Promedio ponderado" accent />
      </section>
      <section className="dashboard-grid">
        <article className="panel chart-panel wide">
          <div className="panel-heading"><div><span>Evolución económica</span><small>Presupuesto planificado frente a costos acumulados</small></div><select aria-label="Período"><option>Últimos 6 meses</option></select></div>
          <div className="chart-legend"><span className="blue-dot">Presupuesto</span><span className="orange-dot">Costo real</span></div>
          <ResponsiveContainer width="100%" height={270}><AreaChart data={evolution} margin={{left:-15,right:10}}><defs><linearGradient id="budget" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#1e3448" stopOpacity={.18}/><stop offset="1" stopColor="#1e3448" stopOpacity={0}/></linearGradient><linearGradient id="cost" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#ff7a30" stopOpacity={.2}/><stop offset="1" stopColor="#ff7a30" stopOpacity={0}/></linearGradient></defs><CartesianGrid stroke="#edf0f2" vertical={false}/><XAxis dataKey="month" axisLine={false} tickLine={false}/><YAxis axisLine={false} tickLine={false} tickFormatter={(v)=>`$${v}M`}/><Tooltip formatter={(v)=>`$ ${v} M`}/><Area type="monotone" dataKey="presupuesto" stroke="#1e3448" strokeWidth={2.5} fill="url(#budget)"/><Area type="monotone" dataKey="costo" stroke="#ff7a30" strokeWidth={2.5} fill="url(#cost)"/></AreaChart></ResponsiveContainer>
        </article>
        <article className="panel cost-panel">
          <div className="panel-heading"><div><span>Distribución de costos</span><small>Por categoría</small></div><button className="icon-btn"><MoreHorizontal/></button></div>
          <div className="donut"><ResponsiveContainer width="100%" height={190}><PieChart><Pie data={costDistribution} dataKey="value" innerRadius={58} outerRadius={78} paddingAngle={3}>{costDistribution.map((entry)=><Cell key={entry.name} fill={entry.color}/>)}</Pie><Tooltip/></PieChart></ResponsiveContainer><div><b>{money(totalCost, true)}</b><small>Total</small></div></div>
          <div className="cost-legend">{costDistribution.map(item=><div key={item.name}><i style={{background:item.color}}/><span>{item.name}</span><b>{item.value}%</b></div>)}</div>
        </article>
        <article className="panel progress-panel">
          <div className="panel-heading"><div><span>Avance por obra</span><small>Progreso físico informado</small></div><Link to="/app/obras">Ver todas</Link></div>
          {activeProjects.map(project=><div className="project-progress" key={project.code}><div><span>{project.name}</span><small>{project.code}</small></div><Progress value={project.progress}/></div>)}
        </article>
        <article className="panel alerts-panel">
          <div className="panel-heading"><div><span>Requieren atención</span><small>Alertas operativas recientes</small></div><Badge tone="danger">3 nuevas</Badge></div>
          {[["Galpón Industrial Norte","Consumo económico superior al avance físico","Crítica"],["Escuela Técnica N° 12","Medición de avance pendiente hace 8 días","Media"],["Viviendas Los Aromos","Contrato de proveedor próximo a vencer","Baja"]].map(([title,text,level],i)=><div className="alert-row" key={title}><span className={`alert-dot level-${i}`}><ShieldAlert size={17}/></span><div><b>{title}</b><p>{text}</p></div><small>{level}</small></div>)}
          <Link className="panel-link" to="/app/alertas">Ver centro de alertas <ArrowUpRight size={15}/></Link>
        </article>
      </section>
      <section className="panel projects-table-panel">
        <div className="panel-heading"><div><span>Obras recientes</span><small>Seguimiento consolidado de proyectos</small></div><Link to="/app/obras">Ver todas las obras <ArrowUpRight size={15}/></Link></div>
        <div className="table-scroll"><table><thead><tr><th>Código</th><th>Obra</th><th>Estado</th><th>Presupuesto</th><th>Costo acumulado</th><th>Avance</th><th></th></tr></thead><tbody>{projects.slice(0,4).map(p=><tr key={p.code}><td><code>{p.code}</code></td><td><Link to={`/app/obras/${p.code}`}><b>{p.name}</b><small>{p.location}</small></Link></td><td><Badge tone={statusTone(p.status)}>{p.status}</Badge></td><td>{money(p.budget)}</td><td>{money(p.cost)}</td><td><div className="table-progress"><span><i style={{width:`${p.progress}%`}}/></span><b>{p.progress}%</b></div></td><td><button className="icon-btn"><MoreHorizontal/></button></td></tr>)}</tbody></table></div>
      </section>
    </>
  );
}
