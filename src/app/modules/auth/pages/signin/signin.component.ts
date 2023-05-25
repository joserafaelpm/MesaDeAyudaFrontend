import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '@core/auth/auth.service';
import { IUser } from '@app/data/interfaces/http/user.interface';
import { IUserDto } from '@data/interfaces/http/dto/user-dto.interface';
import { IToken } from '@app/data/interfaces/http/token.interface';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  user: IUserDto;

  constructor(
    private _authService: AuthService,
    private router: Router
  ) {
    this.user = {
      username: '',
      password: ''
    };
  }

  ngOnInit(): void { }

  iniciarSession(): void {
    this._authService.signIn(this.user).subscribe();
  }

  cerrarSession(): void {
    this._authService.logOut();
  }

}
