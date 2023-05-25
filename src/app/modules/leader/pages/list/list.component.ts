import { Component, OnInit } from '@angular/core';

import { ApplicantService } from '@app/core/services/applicant.service';
import { IApplicationList } from '@app/data/interfaces/http';
import { RoleDirective } from '@shared/directives/role.directive';

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
      .subscribe((res: IApplicationList[]) => {
        this.solicitudes = res;
      })
  }

}
