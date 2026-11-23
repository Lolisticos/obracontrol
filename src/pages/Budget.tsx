import { useState } from "react";
import { ChevronDown, ChevronRight, GripVertical, MoreHorizontal, Plus, Search } from "lucide-react";
import { Badge, PageHeader } from "../components/UI";
import { budgetRows, money } from "../data/mock";

export default function Budget(){
 const [collapsed,setCollapsed]=useState<string[]>([]);
 const visible=budgetRows.filter((r,i)=>r.chapter||!collapsed.some(c=>r.code.startsWith(`${c}.`)));
 const total=budgetRows.filter(r=>r.chapter).reduce((s,r)=>s+r.total,0);
 return <><PageHeader eyebrow="Control económico" title="Presupuesto de obra" description="Viviendas Los Aromos · Versión 3" action={<div className="header-actions"><button className="btn btn-secondary">Guardar borrador</button><button className="btn btn-primary">Enviar a revisión</button></div>}/>
 <div className="budget-status"><div><Badge tone="warning">Borrador</Badge><span>Última edición hoy, 11:24 por Marina López</span></div><div><span>Presupuesto vigente</span><strong>{money(total)}</strong></div></div>
 <div className="budget-toolbar"><label><Search/><input placeholder="Buscar partida..."/></label><button className="btn btn-secondary"><Plus/> Agregar capítulo</button><button className="btn btn-primary"><Plus/> Agregar partida</button></div>
 <div className="panel budget-editor"><div className="table-scroll"><table><thead><tr><th></th><th>Código</th><th>Descripción</th><th>Unidad</th><th>Cantidad</th><th>Precio unitario</th><th>Importe</th><th></th></tr></thead><tbody>{visible.map(row=><tr className={row.chapter?"chapter-row":""} key={row.code}><td>{row.chapter?<button onClick={()=>setCollapsed(v=>v.includes(row.code)?v.filter(c=>c!==row.code):[...v,row.code])}>{collapsed.includes(row.code)?<ChevronRight/>:<ChevronDown/>}</button>:<GripVertical/>}</td><td><code>{row.code}</code></td><td><b>{row.title}</b></td><td>{row.unit}</td><td>{row.chapter?"":row.quantity.toLocaleString("es-AR")}</td><td>{row.chapter?"":money(row.price)}</td><td><strong>{money(row.total)}</strong></td><td><MoreHorizontal/></td></tr>)}</tbody><tfoot><tr><td colSpan={6}>TOTAL DEL PRESUPUESTO</td><td>{money(total)}</td><td/></tr></tfoot></table></div></div>
 <aside className="budget-summary"><div><span>Resumen económico</span><Badge tone="neutral">ARS</Badge></div><p><span>Costo directo</span><b>{money(total)}</b></p><p><span>Gastos generales (8%)</span><b>{money(total*.08)}</b></p><p><span>Beneficio (10%)</span><b>{money(total*.1)}</b></p><hr/><p className="summary-total"><span>Total</span><b>{money(total*1.18)}</b></p><small>Los importes corresponden a datos de demostración y no incluyen reglas impositivas.</small></aside>
 </>;
}
