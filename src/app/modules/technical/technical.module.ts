import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechnicalRoutingModule } from './technical-routing.module';
import { DetailsComponent } from './pages/details/details.component';
import { ListComponent } from './pages/list/list.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DetailsComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    TechnicalRoutingModule,
    FormsModule
  ]
})
export class TechnicalModule { }
