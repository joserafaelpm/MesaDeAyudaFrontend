import { IActivity } from "./activity.interface";
import { IState } from "./state.interface";
import { IUser } from "./user.interface";

export interface IApplication {
    id?: number;
    fecha?: string;
    descripcion?: string;
    fecha_inicio?: string;
    fecha_entrega?: string;
    fecha_cierre?: string;
    observacion?: string;
    actividad?: number | IActivity;
    estado?: number | IState;
    usuario_solicitante?: number | IUser;
    usuario_tecnico?: number | IUser;
}