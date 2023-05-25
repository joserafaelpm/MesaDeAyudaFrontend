import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@env/environment';
import { ICategory } from '@data/interfaces/http/category.interface';
import { CATEGORY_ROUTES } from '@app/data/constants/routes/http-api.const';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private readonly url = `${environment.baseUrlActividades}`;

  constructor(
    private http: HttpClient
  ) { }

  getCategoris(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(`${this.url}/${CATEGORY_ROUTES.category_List}/`)
  }

  getCategoryById(idCategory: number): Observable<ICategory> {
    return this.http.get<ICategory>(`${this.url}/${CATEGORY_ROUTES.category_Get}/${idCategory}`);
  }

}
