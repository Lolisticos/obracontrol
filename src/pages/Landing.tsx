import { useState } from "react";
import { Link } from "react-router";
import { ArrowRight, BarChart3, Building2, Check, ChevronRight, CircleDollarSign, ClipboardCheck, HardHat, Layers3, Menu, ShieldCheck, Sparkles, TrendingUp, X } from "lucide-react";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Brand } from "../components/Brand";
import { SectionTitle } from "../components/UI";
import { evolution, money, projects } from "../data/mock";

const showcase = ["Dashboard", "Obras", "Presupuesto", "Costos", "Avances", "Reportes"];
const faqs = [
  ["¿ObraControl ya está disponible?", "ObraControl se presenta actualmente como una experiencia de producto en evolución. Podés explorar la plataforma y conocer sus flujos principales."],
  ["¿Sirve para administrar varias obras?", "Sí. La experiencia está diseñada para centralizar múltiples proyectos, responsables, presupuestos, costos y avances en una misma organización."],
  ["¿Reemplaza mis planillas actuales?", "La propuesta es reunir la información que suele estar dispersa en planillas y documentos, manteniendo trazabilidad y una visión integral."],
  ["¿Funciona desde el celular?", "Sí. Las consultas, alertas y registros rápidos están adaptados para teléfonos, mientras que las tareas intensivas aprovechan pantallas amplias."],
];

export default function Landing() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeShowcase, setActiveShowcase] = useState("Dashboard");
  return (
    <div className="landing">
      <header className="public-header">
        <Brand light />
        <nav className={menuOpen ? "open" : ""} aria-label="Navegación principal">
          <a href="#producto">Producto</a><a href="#funcionalidades">Funcionalidades</a><a href="#soluciones">Soluciones</a><a href="#como-funciona">Cómo funciona</a><a href="#preguntas">Preguntas frecuentes</a>
          <Link to="/login" className="nav-login">Iniciar sesión</Link><Link to="/app" className="btn btn-primary">Comenzar <ArrowRight size={16} /></Link>
        </nav>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Abrir menú">{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-photo" />
          <div className="blueprint-grid" />
          <div className="hero-content">
            <div className="hero-copy">
              <span className="hero-kicker"><span /> Plataforma ConstructionTech</span>
              <h1>Cada obra<br /><em>bajo control.</em></h1>
              <p>Planificá, administrá y controlá tus obras desde un solo lugar. Presupuestos, costos, avances y decisiones con información clara.</p>
              <div className="hero-actions"><Link className="btn btn-primary btn-lg" to="/app">Explorar la plataforma <ArrowRight size={18} /></Link><a className="btn btn-ghost btn-lg" href="#funcionalidades">Conocer funcionalidades</a></div>
              <div className="hero-proof"><span><Check size={15} /> Información centralizada</span><span><Check size={15} /> Control económico</span><span><Check size={15} /> Seguimiento real</span></div>
            </div>
            <div className="hero-product">
              <div className="browser-bar"><i /><i /><i /><span>app.obracontrol.ar / dashboard</span></div>
              <div className="mini-app">
                <aside><Brand compact light /><span className="active" /><span /><span /><span /><span /></aside>
                <div className="mini-main">
                  <div className="mini-head"><div><small>Vista general</small><b>Panel de control</b></div><span>ML</span></div>
                  <div className="mini-metrics"><div><small>Presupuesto vigente</small><b>$ 419,2 M</b><i>4 obras activas</i></div><div><small>Costos ejecutados</small><b>$ 208,3 M</b><i className="good">49,7% consumido</i></div><div><small>Avance físico</small><b>48%</b><i>Promedio ponderado</i></div></div>
                  <div className="mini-chart"><span>Evolución económica</span><ResponsiveContainer width="100%" height={130}><AreaChart data={evolution}><defs><linearGradient id="heroFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#ff7a30" stopOpacity={.35}/><stop offset="1" stopColor="#ff7a30" stopOpacity={0}/></linearGradient></defs><Area type="monotone" dataKey="costo" stroke="#ff7a30" strokeWidth={2} fill="url(#heroFill)" /></AreaChart></ResponsiveContainer></div>
                </div>
              </div>
              <div className="floating-alert"><AlertTriangleIcon /><div><small>Alerta de desvío</small><b>Galpón Industrial Norte</b><span>Costos por encima del avance físico</span></div></div>
            </div>
          </div>
          <div className="hero-index">01 <span>—</span> CONTROL OPERATIVO</div>
        </section>

        <section className="problem section">
          <SectionTitle kicker="El problema" title="La obra avanza. La información queda atrás." body="Cuando los datos viven en planillas, mensajes y carpetas distintas, los desvíos aparecen cuando ya es tarde." />
          <div className="problem-grid">
            {["Presupuestos dispersos", "Gastos sin trazabilidad", "Avances desactualizados", "Documentación fragmentada"].map((item, index) => <div className="problem-item" key={item}><span>0{index + 1}</span><h3>{item}</h3><div className="broken-line" /></div>)}
          </div>
          <div className="solution-line"><span>ObraControl conecta cada dato</span><ArrowRight /><strong>Una sola fuente de verdad para decidir mejor.</strong></div>
        </section>

        <section className="pillars section" id="funcionalidades">
          <SectionTitle kicker="Una plataforma. Toda tu obra." title="Del primer presupuesto al último avance." body="Cuatro pilares conectados para que cada decisión tenga contexto." />
          <div className="pillar-grid">
            {[
              [Layers3, "Planificación", "Presupuestos, partidas, recursos y objetivos ordenados desde el inicio."],
              [HardHat, "Ejecución", "Avances, materiales y actividad diaria vinculados a cada obra."],
              [ShieldCheck, "Control", "Costos reales, consumos y desvíos explicados con claridad."],
              [TrendingUp, "Análisis", "Indicadores y comparaciones para anticipar escenarios."],
            ].map(([Icon, title, text], index) => <article className="pillar-card" key={title as string}><div className="card-number">0{index + 1}</div><Icon size={26} /><h3>{title as string}</h3><p>{text as string}</p><span>Explorar <ChevronRight size={15} /></span></article>)}
          </div>
        </section>

        <section className="showcase section-dark" id="producto">
          <SectionTitle dark kicker="Producto en acción" title="La complejidad de una obra, presentada con claridad." body="Explorá una interfaz creada para trabajar todos los días, no solamente para mirar indicadores." />
          <div className="showcase-tabs" role="tablist">{showcase.map((tab) => <button role="tab" aria-selected={activeShowcase === tab} className={activeShowcase === tab ? "active" : ""} onClick={() => setActiveShowcase(tab)} key={tab}>{tab}</button>)}</div>
          <div className="showcase-frame">
            <div className="showcase-sidebar"><Brand compact light />{[BarChart3, Building2, ClipboardCheck, CircleDollarSign, TrendingUp].map((Icon, i) => <span className={i === Math.min(showcase.indexOf(activeShowcase), 4) ? "active" : ""} key={i}><Icon size={18} /></span>)}</div>
            <div className="showcase-content">
              <div className="showcase-head"><div><small>ObraControl / {activeShowcase}</small><h3>{activeShowcase === "Dashboard" ? "Vista general de la organización" : activeShowcase}</h3></div><button className="btn btn-primary">+ Nuevo registro</button></div>
              <div className="showcase-kpis"><div><small>Presupuesto activo</small><b>{money(419200000, true)}</b></div><div><small>Costo acumulado</small><b>{money(208270000, true)}</b></div><div><small>Avance general</small><b>48%</b></div><div><small>Requieren atención</small><b className="orange">2 obras</b></div></div>
              <div className="showcase-lower">
                <div className="showcase-chart"><span>Presupuesto vs. costo real</span><ResponsiveContainer width="100%" height={220}><AreaChart data={evolution}><CartesianGrid stroke="#e7eaed" vertical={false}/><XAxis dataKey="month" axisLine={false} tickLine={false}/><YAxis hide/><Tooltip/><Area type="monotone" dataKey="presupuesto" stroke="#1e3448" fill="#1e344815"/><Area type="monotone" dataKey="costo" stroke="#ff7a30" fill="#ff7a3015"/></AreaChart></ResponsiveContainer></div>
                <div className="showcase-list"><span>Obras recientes</span>{projects.slice(0, 3).map(p => <div key={p.code}><i>{p.code}</i><p><b>{p.name}</b><small>{p.location}</small></p><strong>{p.progress}%</strong></div>)}</div>
              </div>
            </div>
          </div>
        </section>

        <section className="deviation section">
          <div className="deviation-copy"><span className="eyebrow">Control de desvíos</span><h2>Detectá los problemas antes de que impacten en tu obra.</h2><p>Presupuesto, costo y avance físico se leen juntos. Así podés reconocer señales de atención sin perder contexto.</p><ul><li><Check /> Compará consumo económico y avance real.</li><li><Check /> Identificá partidas que requieren revisión.</li><li><Check /> Proyectá escenarios con datos disponibles.</li></ul></div>
          <div className="deviation-panel">
            <div className="panel-top"><div><small>OBRA OC-2402</small><h3>Galpón Industrial Norte</h3></div><span className="badge-alert">Requiere atención</span></div>
            <div className="comparison"><div><span>Presupuesto vigente</span><b>$ 89,3 M</b><i style={{ width: "100%" }} /></div><div><span>Costo acumulado</span><b>$ 68,3 M</b><i className="orangebar" style={{ width: "76%" }} /></div><div><span>Avance físico</span><b>58%</b><i className="greenbar" style={{ width: "58%" }} /></div></div>
            <div className="insight"><Sparkles size={20} /><p><b>Señal para revisar</b>El consumo del presupuesto supera el avance físico informado. Verificá las partidas de estructura y alquiler de equipos.</p></div>
          </div>
        </section>

        <section className="solutions section" id="soluciones">
          <SectionTitle kicker="Soluciones" title="Una herramienta que se adapta a tu forma de construir." />
          <div className="solution-cards">{[
            ["Constructoras y contratistas", "Controlá varias obras, equipos y presupuestos desde una vista consolidada."],
            ["Profesionales independientes", "Ordená proyectos, costos y documentación sin sumar complejidad."],
            ["Cooperativas", "Centralizá recursos, avances y rendiciones con mayor trazabilidad."],
            ["Infraestructura", "Seguí hitos, contratos y ejecución económica en proyectos complejos."],
          ].map(([title, text], i) => <article key={title}><span>0{i+1}</span><h3>{title}</h3><p>{text}</p><a href="#como-funciona">Ver solución <ArrowRight size={15}/></a></article>)}</div>
        </section>

        <section className="steps section" id="como-funciona">
          <SectionTitle kicker="Cómo funciona" title="De cero a control en cuatro pasos." />
          <div className="steps-line">{["Creá tu obra", "Definí el presupuesto", "Registrá gastos y avances", "Controlá los resultados"].map((step, i) => <div key={step}><span>{i+1}</span><h3>{step}</h3><p>{["Cargá los datos principales, responsables y fechas.", "Organizá capítulos, partidas, cantidades y precios.", "Centralizá cada movimiento con su respaldo.", "Compará indicadores y detectá puntos de atención."][i]}</p></div>)}</div>
        </section>

        <section className="faq section" id="preguntas">
          <SectionTitle kicker="Preguntas frecuentes" title="Respuestas claras, desde el inicio." />
          <div className="faq-list">{faqs.map(([q,a], i) => <details key={q} open={i === 0}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div>
        </section>

        <section className="final-cta"><div className="blueprint-grid" /><span>El próximo paso empieza acá</span><h2>Tus obras merecen algo más que una planilla.</h2><p>Organizá tu información, controlá los costos y gestioná cada proyecto con mayor claridad.</p><Link className="btn btn-primary btn-lg" to="/app">Conocer ObraControl <ArrowRight /></Link></section>
      </main>
      <footer><Brand light /><p>Cada obra bajo control. Cada decisión con información.</p><div><a href="#producto">Producto</a><a href="#funcionalidades">Funcionalidades</a><a href="#preguntas">Preguntas frecuentes</a><Link to="/login">Ingresar</Link></div><small>© 2026 ObraControl. Producto en desarrollo.</small></footer>
    </div>
  );
}

function AlertTriangleIcon() { return <span className="alert-icon">!</span>; }
