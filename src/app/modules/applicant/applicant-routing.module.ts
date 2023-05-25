import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminLayoutComponent } from '@app/layout/admin-layout/admin-layout.component';
import { ListComponent } from './pages/list/list.component';
import { DetailsComponent } from './pages/details/details.component';
import { AddComponent } from './pages/add/add.component';
import { RoleGuard } from '@app/core/guards/role.guard';
import { ROLE } from '@data/enums/role.enum';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'list',
        component: ListComponent,
        title: 'Lista de Solicitudes',
        canActivate: [RoleGuard],
        data: { roles: [ROLE.APPLICANT] }
      },
      {
        path: 'add',
        component: AddComponent,
        title: 'Agregar de Solicitud',
        canActivate: [RoleGuard],
        data: { roles: [ROLE.APPLICANT, ROLE.LEADER] }
      },
      {
        path: 'detail/:id',
        component: DetailsComponent,
        title: 'Editar de Solicitud',
        canActivate: [RoleGuard],
        data: { roles: [ROLE.APPLICANT] }
      },
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: '**', redirectTo: 'list' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicantRoutingModule { }
