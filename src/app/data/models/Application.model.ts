import { Category } from "./Category.model";

export class Application {
  constructor(
    public id: number,
    public descripcion: string,
    public categoria: number | Category
  ) { }
}
