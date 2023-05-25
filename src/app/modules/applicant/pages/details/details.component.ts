import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApplicantService } from '@app/core/services/applicant.service';

import { IActivity, IApplication, IState } from '@app/data/interfaces/http';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  applicant!: IApplication;
  idApplication!: number;

  constructor(
    private route: ActivatedRoute,
    private _applicantService: ApplicantService,
  ) { }

  ngOnInit(): void {
    this.idApplication = +this.route.snapshot.params['id'];
    this.getApplicationById(this.idApplication);
  }

  getApplicationById(id: number): void {
    this._applicantService.getApplicantById(id)
      .subscribe(res => {
        this.applicant = res;
      })
  }

  getActivity(activity: number | IActivity): string {
    if(typeof activity === 'number') {
      return activity.toString();
    }
    return activity.descripcion!;
  }

  getState(state: number | IState): string {
    if(typeof state === 'number') {
      return state.toString();
    }
    return state.nombre!;
  }

}
