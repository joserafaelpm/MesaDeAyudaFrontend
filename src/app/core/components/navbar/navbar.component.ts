import { Component, OnInit } from '@angular/core';

import { AuthService } from '@core/auth/auth.service';
import { RolesService } from '@app/core/auth/roles.service';
import { User } from '@data/models/User.model';
import { IRole } from '@app/data/interfaces/http/role.interface';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  user: User;

  constructor(private _authService: AuthService) {
    this.user = this._authService.getCurrentUserSubject();
  }

  ngOnInit(): void { }

  public logOut(): void {
    this._authService.logOut();
  }

}
