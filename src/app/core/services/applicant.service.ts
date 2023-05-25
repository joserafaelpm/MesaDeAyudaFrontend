import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@env/environment';
import { IApplicationCreate, IApplicationList } from '@data/interfaces/http';
import { APPLICANT_ROUTES } from '@app/data/constants/routes/http-api.const';

@Injectable({
  providedIn: 'root'
})
export class ApplicantService {

  private readonly url = `${environment.baseUrlSolicitudes}`;

  constructor(private http: HttpClient) { }

  
  getApplicantById(idApplicant: number): Observable<IApplicationList> {
    return this.http.get<IApplicationList>(`${this.url}/${APPLICANT_ROUTES.applicant_Get}/${idApplicant}`);
  }

  getApplicant(): Observable<IApplicationList[]>{
    return this.http.get<IApplicationList[]>(`${this.url}/${APPLICANT_ROUTES.applicant_List}/`);
  }

  creatApplicant(applicant:IApplicationCreate): Observable<IApplicationList>{
    return this.http.post<IApplicationList>(`${this.url}/${APPLICANT_ROUTES.applicant_Create}/`, JSON.stringify(applicant));
  }

  updateApplicant(idApplicant: number, applicant:IApplicationCreate): Observable<IApplicationList>{
    return this.http.put<IApplicationList>(`${this.url}/${APPLICANT_ROUTES.applicant_Update}/${idApplicant}`, JSON.stringify(applicant));
  }



}
