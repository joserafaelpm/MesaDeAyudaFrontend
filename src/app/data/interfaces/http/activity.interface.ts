import { ICategory } from "./category.interface";

export interface IActivity {
    id?: number;
    descripcion?: string;
    categoria?: number | ICategory;
}