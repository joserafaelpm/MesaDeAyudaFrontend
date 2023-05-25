import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '@core/auth/auth.service';
import { ActivityService } from '@core/services/activity.service';
import { ApplicantService } from '@core/services/applicant.service';
import { CategoryService } from '@core/services/category.service';
import { IActivityList, ICategory, IApplicationCreate } from '@data/interfaces/http/index';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  categories!: ICategory[];
  activities!: IActivityList[];
  activitiesCopy!: IActivityList[];
  applicant = {} as IApplicationCreate;

  constructor(
    private router: Router,
    private _authService: AuthService,
    private _categoryService: CategoryService,
    private _activityService: ActivityService,
    private _applicantService: ApplicantService,
  ) { }

  ngOnInit(): void {
    this.getCategory();
    this.getActivity();
  }

  getCategory() {
    this._categoryService.getCategoris()
      .subscribe(res => {
        this.categories = res;
      })
  }

  getActivity() {
    this._activityService.gectActivity()
      .subscribe(res => {
        this.activities = res;
        this.activitiesCopy = res;
      })
  }

  filterActivities(idCategory: number) {
    this.activitiesCopy = this.activities.filter(x => x.categoria.id == idCategory);
  }

  changeCategory(event: Event) {
    const idCategory = (event.target as HTMLSelectElement).value;
    this.filterActivities(+idCategory);
  }

  changeActivity(event: Event) {
    const idActivity = (event.target as HTMLSelectElement).value;
    this.applicant.actividad = +idActivity;
  }

  createApplicant() {
    this.applicant.fecha = new Date().toISOString();
    this.applicant.estado = 1;
    this.applicant.usuario_solicitante = this._authService.getUser().id;
    if(Object.keys(this.applicant).length > 3) {
      this._applicantService
      .creatApplicant(this.applicant)
      .subscribe();
      window.alert("Solicitud creada exitosamente");
      this.router.navigate(['/applicant/list']);
    }
  }

}
