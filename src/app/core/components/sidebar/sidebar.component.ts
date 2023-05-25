import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';

import { AuthService } from '@core/auth/auth.service';
import { ISidebar } from '@data/interfaces/ui/sidebar.interface';
import { ROLE } from '@data/enums/role.enum';
import { User } from '@data/models/User.model';
import { IRole } from '@app/data/interfaces/http/role.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  @Input() menuItems: ISidebar[];
  user: User;

  constructor(private _authService: AuthService) {
    this.menuItems = [];
    this.user = this._authService.getCurrentUserSubject();
  }

  ngOnInit(): void {}

  public hasRole(roles: ROLE[]): boolean {
    if (!roles) return true;
    return this._authService.hasRole(roles);
  }

  public logOut(): void {
    this._authService.logOut();
  }

}
