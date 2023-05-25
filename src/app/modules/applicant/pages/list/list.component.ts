import { Component, OnInit } from '@angular/core';

import { IActivity, IApplication, IState } from '@app/data/interfaces/http';
import { ApplicantService } from '@core/services/applicant.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  solicitudes: IApplication[] = [];

  constructor(
    private _applicantService: ApplicantService,
  ) { }

  ngOnInit(): void {
    this.getApplicant();
  }

  getApplicant(): void {
    this._applicantService.getApplicant()
      .subscribe((res: IApplication[]) => {
        this.solicitudes = res;
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
