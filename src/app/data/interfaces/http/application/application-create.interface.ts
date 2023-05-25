export interface IApplicationCreate {
    id?: number;
    fecha?: string;
    descripcion?: string;
    fecha_inicio?: string;
    fecha_entrega?: string;
    fecha_cierre?: string;
    observacion?: string;
    actividad?: number;
    estado?: number;
    usuario_solicitante?: number;
    usuario_tecnico?: number;
}