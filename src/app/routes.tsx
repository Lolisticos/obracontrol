import { createBrowserRouter } from "react-router";
import AppShell from "../components/AppShell";
import Auth from "../pages/Auth";
import Budget from "../pages/Budget";
import Dashboard from "../pages/Dashboard";
import Landing from "../pages/Landing";
import ModulePage from "../pages/ModulePage";
import NewProject from "../pages/NewProject";
import NotFound from "../pages/NotFound";
import ProjectDetail from "../pages/ProjectDetail";
import Projects from "../pages/Projects";
import Settings from "../pages/Settings";

export const router = createBrowserRouter([
  { path: "/", Component: Landing },
  { path: "/login", element: <Auth mode="login" /> },
  { path: "/registro", element: <Auth mode="register" /> },
  { path: "/recuperar", element: <Auth mode="recover" /> },
  {
    path: "/app",
    Component: AppShell,
    children: [
      { index: true, Component: Dashboard },
      { path: "obras", Component: Projects },
      { path: "obras/nueva", Component: NewProject },
      { path: "obras/:code", Component: ProjectDetail },
      { path: "presupuestos", Component: Budget },
      ...["costos","avances","materiales","proveedores","documentos","reportes","alertas","certificaciones","contratos","rendiciones","equipos"].map((path)=>({path, element:<ModulePage type={path}/>})),
      { path: "configuracion", Component: Settings },
    ],
  },
  { path: "*", Component: NotFound },
]);
