import { IUser } from "./user.interface";

export interface ICategory {
    id?: number;
    descripcion?: string;
    user?: number | IUser;
}