import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ApplicantRoutingModule } from './applicant-routing.module';
import { ListComponent } from './pages/list/list.component';
import { DetailsComponent } from './pages/details/details.component';
import { AddComponent } from './pages/add/add.component';


@NgModule({
  declarations: [
    ListComponent,
    DetailsComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    ApplicantRoutingModule,
    FormsModule
  ]
})
export class ApplicantModule { }
