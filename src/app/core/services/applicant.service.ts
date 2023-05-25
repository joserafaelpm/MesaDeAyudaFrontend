import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@env/environment';
import { IApplication } from '@data/interfaces/http/application.interface';
import { APPLICANT_ROUTES } from '@app/data/constants/routes/http-api.const';

@Injectable({
  providedIn: 'root'
})
export class ApplicantService {

  private readonly url = `${environment.baseUrlSolicitudes}`;

  constructor(private http: HttpClient) { }

  
  getApplicantById(idApplicant: number): Observable<IApplication> {
    return this.http.get<IApplication>(`${this.url}/${APPLICANT_ROUTES.applicant_Get}/${idApplicant}`);
  }

  getApplicant(): Observable<IApplication[]>{
    return this.http.get<IApplication[]>(`${this.url}/${APPLICANT_ROUTES.applicant_List}/`);
  }

  creatApplicant(applicant:IApplication): Observable<IApplication>{
    return this.http.post<IApplication>(`${this.url}/${APPLICANT_ROUTES.applicant_Create}/`, JSON.stringify(applicant));
  }

  updateApplicant(idApplicant: number, applicant:IApplication): Observable<IApplication>{
    return this.http.put<IApplication>(`${this.url}/${APPLICANT_ROUTES.applicant_Update}/${idApplicant}`, JSON.stringify(applicant));
  }



}
