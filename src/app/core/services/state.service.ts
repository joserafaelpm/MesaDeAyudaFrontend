import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IState } from '@app/data/interfaces/http';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';
import { STATE_ROUTES } from '@app/data/constants/routes/http-api.const';


@Injectable({
  providedIn: 'root'
})
export class StateService {

  private readonly url = `${environment.baseUrlActividades}`;

  constructor(
    private http: HttpClient
  ) { }

  getStates(): Observable<IState[]> {
    return this.http.get<IState[]>(`${this.url}/${STATE_ROUTES.state_List}/`)
  }

  getStatesById(idState: number): Observable<IState> {
    return this.http.get<IState>(`${this.url}/${STATE_ROUTES.state_Get}/${idState}`);
  }

}
