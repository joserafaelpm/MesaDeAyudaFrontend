import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TECHNICAL_ROUTES } from '@app/data/constants/routes/http-api.const';
import { ITechnical } from '@app/data/interfaces/http';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TechnicalService {

  private readonly url = `${environment.baseUrlActividades}`;

  constructor(
    private http: HttpClient
  ) { }

  getTechnical(): Observable<ITechnical[]> {
    return this.http.get<ITechnical[]>(`${this.url}/${TECHNICAL_ROUTES.technical_List}/`)
  }

  getTechnicalById(idTechnical: number): Observable<ITechnical> {
    return this.http.get<ITechnical>(`${this.url}/${TECHNICAL_ROUTES.technical_Get}/${idTechnical}`);
  }

}
