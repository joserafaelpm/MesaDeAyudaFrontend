import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@env/environment';
import { IRole } from '@data/interfaces/http/role.interface';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  private readonly url = `${environment.baseUrlUsers}`;

  constructor(
    private http: HttpClient,
  ) { }

  getRoles(): Observable<IRole[]> {
    return this.http.get<IRole[]>(`${this.url}/roles`)
  }

  getRoleById(idUser: number): Observable<IRole> {
    return this.http.get<IRole>(`${this.url}/rol/${idUser}`);
  }

}
