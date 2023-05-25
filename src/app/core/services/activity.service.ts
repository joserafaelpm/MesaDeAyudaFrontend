import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@env/environment';
import { IActivity } from '@data/interfaces/http/activity.interface';
import { ACTIVITY_ROUTES , CATEGORY_ROUTES } from '@app/data/constants/routes/http-api.const';


@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  private readonly url = `${environment.baseUrlActividades}`;

  constructor(
    private http: HttpClient
    ) {}

    getActivityById(idActivity: number): Observable<IActivity> {
      return this.http.get<IActivity>(`${this.url}/${ACTIVITY_ROUTES.activity_Get}/${idActivity}`);
    }

    gectActivity(): Observable<IActivity[]>{
      return this.http.get<IActivity[]>(`${this.url}/${ACTIVITY_ROUTES.activity_List}/`);
    }

    
}
