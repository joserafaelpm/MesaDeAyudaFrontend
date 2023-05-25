import { User } from "./User.model";

export class Category {
  constructor(
    public id: number,
    public descripcion: string,
    public user: number | User
  ) { }
}
