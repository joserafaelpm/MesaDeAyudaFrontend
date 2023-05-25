import { IRole } from "./role.interface";

export interface IUser {
    id?: number;
    username?: string;
    first_name?: string;
    last_name?: string;
    documento?: string;
    email?: string;
    rol?: number | IRole;
}
