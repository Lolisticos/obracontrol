import { Link } from "react-router";
import { ArrowLeft, HardHat } from "lucide-react";
import { Brand } from "../components/Brand";

export default function NotFound(){return <main className="not-found"><Brand/><div><HardHat/><span>ERROR 404</span><h1>Esta zona todavía no está en obra.</h1><p>No encontramos la página que buscás. Puede haberse movido o ya no estar disponible.</p><Link className="btn btn-primary" to="/"><ArrowLeft/> Volver al inicio</Link></div></main>}
