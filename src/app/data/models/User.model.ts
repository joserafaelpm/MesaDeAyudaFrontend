import { IUser, IRole } from "@data/interfaces/http";

export class User implements IUser {
    constructor(
        public id: number,
        public username: string,
        public first_name: string,
        public last_name: string,
        public documento: string,
        public email: string,
        public rol: IRole
    ) { }
}
