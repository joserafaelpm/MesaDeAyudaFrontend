import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

import { CookieService } from 'ngx-cookie-service';
import { environment } from '@env/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
import { IAccessTokenDto } from '@data/interfaces/http/dto/access-token-dto.interface';
import { IUserDto } from '@data/interfaces/http/dto/user-dto.interface';
import { IToken } from '@data/interfaces/http/token.interface';
import { LocalStorageService } from '../storage/local-storage.service';
import { ROLE } from '@data/enums/role.enum';
import { User } from '@data/models/User.model';
import { RolesService } from './roles.service';
import { UserService } from './users.service';
import { OAUTH_ROUTES } from '@data/constants/routes/http-api.const';
import { IRole } from '@data/interfaces/http/role.interface';
import { IUser } from '@app/data/interfaces/http/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly url = `${environment.baseUrlAuth}`;
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  private jwtHelper: JwtHelperService;
  private token: IAccessTokenDto;

  constructor(
    private http: HttpClient,
    private _cookieService: CookieService,
    private _localStorageService: LocalStorageService,
    private _userService: UserService,
    private _roleService: RolesService,
    private router: Router,
  ) {
    this.currentUserSubject = new BehaviorSubject<User>(((this.getUser()) ? this.getUser() : '{}') as User);
    this.currentUser = this.currentUserSubject.asObservable();
    this.jwtHelper = new JwtHelperService();
    this.token = {} as IAccessTokenDto;
  }

  setUser(user: User): void {
    this._localStorageService.setItem('currentUser', user);
  }

  getUser(): User {
    return (this._localStorageService.getItem<User>('currentUser')!);
  }

  public getCurrentUserSubject(): User {
    return this.currentUserSubject.getValue();
  }

  public getCurrentUser(): Observable<User> {
    return this.currentUser;
  }

  public set currentUserValue(user: User) {
    this.currentUserSubject.next(user);
  }

  public isLoggedIn(): boolean {
    return this._cookieService.check('access');
  }

  get accessToken() {
    return this._cookieService.get('access');
  }

  get refreshToken() {
    return this._cookieService.get('refresh');
  }

  public signIn(data: IUserDto): Observable<IToken> {
    return this.http.post<IToken>(`${this.url}/${OAUTH_ROUTES.oauth_Token}`, JSON.stringify(data))
      .pipe(
        tap((res: IToken) => {
          this.token = this.jwtHelper.decodeToken(res.access)!;
          this._cookieService.set('access', res.access, new Date(this.token.exp * 1000), '/');
          this._cookieService.set('refresh', res.refresh, new Date(this.token.exp * 1000), '/');
          this.setUser((this.token.user as User));
          this.currentUserSubject.next((this.token.user as User));
          this.router.navigate(['/account/profile']);
        }),
        catchError(this.handleError)
      );
  }

  public loginWithRefreshToken(): Observable<IToken> {
    const data = { refresh: this.refreshToken };
    return this.http.post<IToken>(`${this.url}/${OAUTH_ROUTES.oauth_Refresh_Token}/`, JSON.stringify(data));
  }

  public logOut(): void {
    this._localStorageService.clear();
    this._cookieService.delete('access', '/');
    this._cookieService.delete('refresh', '/');
    this.currentUserSubject = new BehaviorSubject<User>({} as User);
    this.currentUser = this.currentUserSubject.asObservable();
    this.router.navigate(['/auth']);
  }

  public hasRole(roles: ROLE[]): boolean {
    return roles.some((role: ROLE) => this.currentUserSubject.getValue().rol.descripcion === role);
  }

  public hasRoles(roles: string[]): boolean {
    return roles.some((role: string) => this.currentUserSubject.getValue().rol.descripcion === role);
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    return throwError(() => error);
  }

}
