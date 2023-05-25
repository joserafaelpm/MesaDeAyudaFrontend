import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApplicantService } from '@app/core/services/applicant.service';
import { IApplicationCreate, IApplicationList } from '@app/data/interfaces/http';

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
    private router: Router,
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
    this.applicantCreate.fecha_inicio = new Date().toISOString();
    this.applicantCreate.fecha_entrega = new Date().toISOString();
    this.applicantCreate.estado;
    this.applicantCreate.usuario_tecnico;
    this.applicantCreate.observacion;
    if(Object.keys(this.applicantCreate).length >= 5) {
      this._applicantService
      .updateApplicant(id, this.applicantCreate)
      .subscribe();
      window.alert("Solicitud actualizada y tramitada exitosamente");
      this.router.navigate(['/leader/list']);
    }
  }

}
