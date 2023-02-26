import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {AuthService} from "./auth.service";
import {Observable} from "rxjs";

/**
 * Allow not authenticated users only to access pages such as login page.
 */
@Injectable({
  providedIn: 'root'
})
export class AllowNotAuthenticatedUsersOnlyService implements CanActivate {

  constructor(private authService: AuthService,
              private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const isAuthenticated = this.authService.isAuthenticated();
    if (isAuthenticated) {
      // this.router.navigate(['/' + DashboardComponent.navigationPath]);
    }

    return !isAuthenticated;
  }
}
