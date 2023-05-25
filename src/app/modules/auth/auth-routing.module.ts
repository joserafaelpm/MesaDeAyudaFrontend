import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SigninComponent } from './pages/signin/signin.component';
import { SingupComponent } from './pages/singup/singup.component';

const AUTH_ROUTES: Routes = [
  {
    path: '',
    children: [
      { path: 'sing-in', component: SigninComponent, title: 'Sing In' },
      { path: 'sing-up', component: SingupComponent, title: 'Sing Up' },
      { path: '**', redirectTo: 'sing-in', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(AUTH_ROUTES)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
