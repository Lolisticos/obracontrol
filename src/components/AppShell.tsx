import { useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router";
import { Bell, BookOpen, Boxes, Building2, ChevronDown, ChevronLeft, ChevronRight, CircleDollarSign, FileBarChart, FileText, Gauge, HardHat, Menu, PackageOpen, Search, Settings, ShieldAlert, Store, TrendingUp, Users, X } from "lucide-react";
import { Brand } from "./Brand";

const mainNav = [
  ["/app", "Dashboard", Gauge],
  ["/app/obras", "Obras", Building2],
  ["/app/presupuestos", "Presupuestos", BookOpen],
  ["/app/costos", "Costos", CircleDollarSign],
  ["/app/avances", "Avances", TrendingUp],
  ["/app/materiales", "Materiales", Boxes],
  ["/app/proveedores", "Proveedores", Store],
  ["/app/documentos", "Documentos", FileText],
  ["/app/reportes", "Reportes", FileBarChart],
  ["/app/alertas", "Alertas", ShieldAlert],
];
const futureNav = [["/app/certificaciones", "Certificaciones"], ["/app/contratos", "Contratos"], ["/app/rendiciones", "Rendiciones"], ["/app/equipos", "Personal y equipos"]];

export default function AppShell() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const current = [...mainNav, ...futureNav.map(([a,b]) => [a,b,PackageOpen])].find(([path]) => location.pathname === path)?.[1] ?? "Detalle";
  return (
    <div className={`app-shell ${collapsed ? "sidebar-collapsed" : ""}`}>
      <aside className={`app-sidebar ${mobileOpen ? "mobile-open" : ""}`}>
        <div className="sidebar-brand"><Brand compact={collapsed} light/><button onClick={() => setMobileOpen(false)} className="mobile-close" aria-label="Cerrar menú"><X /></button></div>
        <div className="org-switch"><span>BR</span>{!collapsed && <div><small>Organización</small><b>Brava Construcciones</b></div>}{!collapsed && <ChevronDown size={15}/>}</div>
        <nav aria-label="Módulos de gestión">
          <small className="nav-label">{collapsed ? "•••" : "GESTIÓN"}</small>
          {mainNav.map(([path,label,Icon]) => <NavLink key={path as string} end={path === "/app"} to={path as string} onClick={() => setMobileOpen(false)}><Icon size={19}/>{!collapsed && <span>{label as string}</span>}{label === "Alertas" && <i>3</i>}</NavLink>)}
          {!collapsed && <small className="nav-label nav-future">MÓDULOS ESPECIALIZADOS</small>}
          {futureNav.map(([path,label]) => <NavLink key={path} to={path} onClick={() => setMobileOpen(false)}><PackageOpen size={19}/>{!collapsed && <span>{label}</span>}</NavLink>)}
        </nav>
        <div className="sidebar-bottom"><NavLink to="/app/configuracion"><Settings size={19}/>{!collapsed && <span>Configuración</span>}</NavLink><button onClick={() => setCollapsed(!collapsed)}>{collapsed ? <ChevronRight/> : <><ChevronLeft/><span>Contraer menú</span></>}</button></div>
      </aside>
      <div className="app-area">
        <header className="topbar">
          <button className="mobile-trigger" onClick={() => setMobileOpen(true)} aria-label="Abrir navegación"><Menu/></button>
          <div className="breadcrumbs"><span>ObraControl</span><ChevronRight size={14}/><strong>{current as string}</strong></div>
          <div className="top-actions"><label className="global-search"><Search size={17}/><input aria-label="Buscar en ObraControl" placeholder="Buscar obras, gastos, documentos..."/><kbd>⌘ K</kbd></label><button className="icon-btn" aria-label="Notificaciones"><Bell size={19}/><i/></button><button className="user-menu"><span>ML</span><div><b>Marina López</b><small>Administradora</small></div><ChevronDown size={15}/></button></div>
        </header>
        <main className="app-content"><Outlet/></main>
      </div>
      {mobileOpen && <button className="sidebar-scrim" onClick={() => setMobileOpen(false)} aria-label="Cerrar navegación"/>}
    </div>
  );
}
