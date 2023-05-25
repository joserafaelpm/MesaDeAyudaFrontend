import { IActivityList } from "../activity/activity-list.interface";
import { IState } from "../state.interface";
import { IUser } from "../user.interface";

export interface IApplicationList {
    id: number;
    fecha: string;
    descripcion: string;
    fecha_inicio?: string;
    fecha_entrega?: string;
    fecha_cierre?: string;
    observacion?: string;
    actividad: IActivityList;
    estado: IState;
    usuario_solicitante: IUser;
    usuario_tecnico?: IUser;
}