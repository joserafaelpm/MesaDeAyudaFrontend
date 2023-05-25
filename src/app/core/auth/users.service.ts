import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@env/environment';
import { User } from '@data/models/User.model';
import { USERS_ROUTES } from '@app/data/constants/routes/http-api.const';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private readonly url = `${environment.baseUrlUsers}`;

    constructor(
        private http: HttpClient,
    ) { }

    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(`${this.url}/${USERS_ROUTES.user_List}/`)
    }

    getUserById(idUser: number): Observable<User> {
        return this.http.get<User>(`${this.url}/${USERS_ROUTES.user_Get}/${idUser}`);
    }

}
