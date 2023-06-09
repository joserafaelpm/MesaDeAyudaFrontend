import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IApplicationCreate, IApplicationList } from '@app/data/interfaces/http';
import { ApplicantService } from '@app/core/services/applicant.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  applicantCreate!: IApplicationCreate;
  applicantList!: IApplicationList;
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
      .subscribe((res:IApplicationList) => {
        this.applicantList = res;
      })
  }

  updateApplicant(id: number) {
    this.applicantCreate.fecha = new Date().toISOString();
    this.applicantCreate.fecha_inicio = new Date().toISOString();
    this.applicantCreate.fecha_entrega = new Date().toISOString();
    this.applicantCreate.estado = 2;
    if(Object.keys(this.applicantCreate).length > 5) {
      this._applicantService
      .updateApplicant(id, this.applicantCreate)
      .subscribe();
      window.alert("Solicitud actualizada y tramitada exitosamente");
    }
  }


}
