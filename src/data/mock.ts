export type ProjectStatus = "En curso" | "En alerta" | "Planificada" | "Finalizada";

export interface Project {
  code: string;
  name: string;
  location: string;
  manager: string;
  status: ProjectStatus;
  budget: number;
  cost: number;
  progress: number;
  type: string;
}

export const projects: Project[] = [
  { code: "OC-2401", name: "Viviendas Los Aromos", location: "Córdoba Capital", manager: "Marina López", status: "En curso", budget: 124500000, cost: 72210000, progress: 64, type: "Vivienda" },
  { code: "OC-2402", name: "Galpón Industrial Norte", location: "Pilar, Buenos Aires", manager: "Ramiro Acosta", status: "En alerta", budget: 89300000, cost: 68340000, progress: 58, type: "Industrial" },
  { code: "OC-2403", name: "Escuela Técnica N° 12", location: "Rosario, Santa Fe", manager: "Lucía Fernández", status: "En curso", budget: 158700000, cost: 63520000, progress: 43, type: "Infraestructura" },
  { code: "OC-2404", name: "Pavimentación Barrio Sur", location: "Mendoza Capital", manager: "Tomás Silva", status: "Planificada", budget: 46750000, cost: 4200000, progress: 8, type: "Infraestructura" },
  { code: "OC-2311", name: "Edificio Rivadavia", location: "CABA", manager: "Sofía Méndez", status: "Finalizada", budget: 97300000, cost: 95260000, progress: 100, type: "Remodelación" },
];

export const money = (value: number, compact = false) =>
  compact
    ? new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS", notation: "compact", maximumFractionDigits: 1 }).format(value)
    : new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS", minimumFractionDigits: 2 }).format(value);

export const activeProjects = projects.filter((project) => project.status !== "Finalizada");
export const totalBudget = activeProjects.reduce((sum, project) => sum + project.budget, 0);
export const totalCost = activeProjects.reduce((sum, project) => sum + project.cost, 0);
export const weightedProgress = Math.round(activeProjects.reduce((sum, project) => sum + project.progress * project.budget, 0) / totalBudget);

export const evolution = [
  { month: "Ene", presupuesto: 42, costo: 30 },
  { month: "Feb", presupuesto: 78, costo: 58 },
  { month: "Mar", presupuesto: 126, costo: 91 },
  { month: "Abr", presupuesto: 174, costo: 127 },
  { month: "May", presupuesto: 235, costo: 170 },
  { month: "Jun", presupuesto: 312, costo: 208 },
];

export const costDistribution = [
  { name: "Materiales", value: 43, color: "#1e3448" },
  { name: "Mano de obra", value: 31, color: "#ff7a30" },
  { name: "Equipos", value: 16, color: "#159a74" },
  { name: "Otros", value: 10, color: "#9aa5b1" },
];

export const budgetRows = [
  { code: "01", title: "Trabajos preliminares", unit: "", quantity: 0, price: 0, total: 8700000, chapter: true },
  { code: "01.01", title: "Limpieza y preparación de terreno", unit: "m²", quantity: 850, price: 4800, total: 4080000 },
  { code: "01.02", title: "Obrador y cerramiento perimetral", unit: "gl", quantity: 1, price: 4620000, total: 4620000 },
  { code: "02", title: "Estructura resistente", unit: "", quantity: 0, price: 0, total: 38750000, chapter: true },
  { code: "02.01", title: "Hormigón elaborado H30", unit: "m³", quantity: 280, price: 78500, total: 21980000 },
  { code: "02.02", title: "Acero ADN 420", unit: "kg", quantity: 23800, price: 620, total: 14756000 },
  { code: "02.03", title: "Encofrados", unit: "m²", quantity: 620, price: 3248.39, total: 2014000 },
  { code: "03", title: "Mampostería y aislaciones", unit: "", quantity: 0, price: 0, total: 24800000, chapter: true },
];
