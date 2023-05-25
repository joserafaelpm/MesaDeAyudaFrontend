import { Component, OnInit } from '@angular/core';

import { ApplicantService } from '@app/core/services/applicant.service';
import { IApplication } from '@app/data/interfaces/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  solicitudes!: any[];

  constructor(
    private _applicantService: ApplicantService
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

}
