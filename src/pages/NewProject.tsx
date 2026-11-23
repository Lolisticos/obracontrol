import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Link } from "react-router";
import { PageHeader } from "../components/UI";

export default function NewProject(){
 return <><Link className="back-link" to="/app/obras"><ArrowLeft/> Volver a obras</Link><PageHeader eyebrow="Nueva obra" title="Creá un nuevo proyecto" description="Completá la información inicial. Podrás editarla más adelante."/>
 <div className="form-stepper"><span className="active"><i>1</i>Información general</span><span><i>2</i>Ubicación y fechas</span><span><i>3</i>Equipo</span><span><i>4</i>Confirmación</span></div>
 <section className="panel project-form"><div><h2>Información general</h2><p>Datos que identifican la obra dentro de tu organización.</p></div><form><label className="full">Nombre de la obra<input placeholder="Ej. Ampliación Centro Logístico"/></label><label>Código<input defaultValue="OC-2406"/></label><label>Tipo de obra<select><option>Seleccionar tipo</option><option>Vivienda</option><option>Industrial</option><option>Infraestructura</option></select></label><label className="full">Descripción<textarea rows={4} placeholder="Describí el alcance general del proyecto..."/></label><label>Estado inicial<select><option>Planificada</option><option>En curso</option></select></label><label>Responsable<select><option>Seleccionar responsable</option><option>Marina López</option></select></label></form><div className="form-footer"><Link className="btn btn-secondary" to="/app/obras">Cancelar</Link><button className="btn btn-primary">Continuar <ArrowRight/></button></div></section></>;
}
