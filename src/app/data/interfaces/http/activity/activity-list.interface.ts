import { ICategory } from "../category.interface";

export interface IActivityList {
    id?: number;
    descripcion: string;
    categoria: ICategory;
}