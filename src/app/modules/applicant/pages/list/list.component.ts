import { Component, OnInit } from '@angular/core';

import { IActivity, IApplicationList, IState } from '@app/data/interfaces/http';
import { ApplicantService } from '@core/services/applicant.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  solicitudes: IApplicationList[] = [];

  constructor(
    private _applicantService: ApplicantService,
  ) { }

  ngOnInit(): void {
    this.getApplicant();
  }

  getApplicant(): void {
    this._applicantService.getApplicant()
      .subscribe((res: IApplicationList[]) => {
        this.solicitudes = res;
      })
  }

}
