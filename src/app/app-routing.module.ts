import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '@core/guards/auth.guard';
import { NoAuthGuard } from '@core/guards/no-auth.guard';

const APP_ROUTES: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('@modules/auth/auth.module').then((m) => m.AuthModule),
    canActivate: [NoAuthGuard]
  },
  {
    path: 'applicant',
    loadChildren: () => import('@modules/applicant/applicant.module').then((m) => m.ApplicantModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'leader',
    loadChildren: () => import('@modules/leader/leader.module').then((m) => m.LeaderModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'technical',
    loadChildren: () => import('@modules/technical/technical.module').then((m) => m.TechnicalModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'account',
    loadChildren: () => import('@modules/account/account.module').then((m) => m.AccountModule),
    canActivate: [AuthGuard]
  },
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: '**', redirectTo: 'auth' }
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
