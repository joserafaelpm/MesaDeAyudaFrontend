import { Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

import { AuthService } from '@core/auth/auth.service';
import { User } from '@data/models/User.model';

@Directive({
  selector: '[appRole]'
})
export class RoleDirective implements OnInit, OnDestroy {

  private currentUser!: User;
  private roles: string[] = [];
  private unsubscribe$ = new Subject<void>();

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.authService.currentUser
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((user: User) => {
        this.currentUser = user;
        this.updateView();
      });
  }

  @Input()
  set appRoles(roles: string[]) {
    this.roles = roles;
    console.log(this.roles);
    this.updateView();
  }

  private updateView(): void {
    if (this.currentUser && this.hasRoles()) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

  private hasRoles(): boolean {
    const isLoggedIn = this.authService.isLoggedIn();
    const hasRole = this.authService.hasRoles(this.roles);
    return isLoggedIn && hasRole;
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
