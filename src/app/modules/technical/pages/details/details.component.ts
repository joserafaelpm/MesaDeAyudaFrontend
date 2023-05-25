import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApplicantService } from '@app/core/services/applicant.service';
import { IApplication } from '@app/data/interfaces/http';

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

  updateApplicant(id: number) {
    this.applicant.fecha_cierre = new Date().toISOString();
    this.applicant.estado = 5;
    if(Object.keys(this.applicant).length > 3) {
      this._applicantService
      .updateApplicant(id,this.applicant)
      .subscribe();
      window.alert("Solicitud actualizada y tramitada exitosamente");
    }
  }

}
