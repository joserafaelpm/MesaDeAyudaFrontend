import { Component, OnInit } from '@angular/core';

import { User } from '@data/models/User.model';
import { AuthService } from '@core/auth/auth.service';
import { RolesService } from '@core/auth/roles.service';
import { IRole } from '@app/data/interfaces/http/role.interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: User;

  constructor(
    private _authService: AuthService
  ) {
    this.user = this._authService.getCurrentUserSubject();
  }

  ngOnInit(): void {}

}
