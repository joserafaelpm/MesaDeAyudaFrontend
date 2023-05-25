import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminLayoutComponent } from '@app/layout/admin-layout/admin-layout.component';
import { ListComponent } from './pages/list/list.component';
import { DetailsComponent } from './pages/details/details.component';
import { RoleGuard } from '@app/core/guards/role.guard';
import { ROLE } from '@app/data/enums/role.enum';

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
        data: { roles: [ROLE.LEADER] }
      },
      {
        path: 'detail/:id',
        component: DetailsComponent,
        title: 'Editar Solicitud',
        canActivate: [RoleGuard],
        data: { roles: [ROLE.LEADER] }
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
export class LeaderRoutingModule { }
