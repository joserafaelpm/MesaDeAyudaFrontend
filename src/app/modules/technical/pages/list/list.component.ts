import { Component, OnInit } from '@angular/core';
import { ActivityService } from '@app/core/services/activity.service';
import { ApplicantService } from '@app/core/services/applicant.service';
import { StateService } from '@app/core/services/state.service';
import { IApplication, IActivity, IState, ITechnical } from '@app/data/interfaces/http';
import { TechnicalService } from '../../services/technical.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  solicitudes!: IApplication[];
  activities!: IActivity[];
  estados!: IState[];
  tecnicos!:ITechnical[];
  solicitudesCopy!: IApplication[];

  constructor(
    private _activityService: ActivityService,
    private _applicantService: ApplicantService,
    private _stateService: StateService,
    private _technicalService: TechnicalService
  ) { }

  ngOnInit(): void {
    this.getApplicant();
    this.getActivity();
    this.getStates();
    // this.getTechnical();
  }

  getApplicant(): void{
    this._applicantService.getApplicant()
      .subscribe(res => {
        this.solicitudes = res;
      })
  }

  getActivity(): void{
    this._activityService.gectActivity()
      .subscribe(res => {
        this.activities = res;
      })
  }

  getStates(): void{
    this._stateService.getStates()
      .subscribe(res => {
        this.estados = res;
      })
  }

  // getTechnical():void{
  //   this._technicalService.getTechnical()
  //     .subscribe(res => {
  //       this.tecnicos = res;
  //     })
  // }

  filterState(idState: number) {
    this.solicitudesCopy = this.estados.filter(x => x.id == idState);
  }

  changeState(event: Event) {
    const idState = (event.target as HTMLSelectElement).value;
    this.filterActivities(+idState);
  }

  filterActivities(idActivity: number) {
    this.solicitudesCopy = this.activities.filter(x => x.id == idActivity);
  }

}
