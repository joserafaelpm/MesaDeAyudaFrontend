import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class ApplicationsService {

  private readonly url = `${environment.baseUrlSolicitudes}`;

  constructor(
    private http: HttpClient
  ) { }

  public getApplications(): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}/solicitudes`);
  }

}
