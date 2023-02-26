import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {AuthService} from "./auth.service";
import {LoginComponent} from "../components/login/login.component";

/**
 * Allow authenticated users only to access pages such as user profile.
 */
@Injectable({
  providedIn: 'root'
})
export class AllowAuthenticatedUsersOnlyService implements CanActivate {

  constructor(private authService: AuthService,
              private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const isAuthenticated = this.authService.isAuthenticated();
    if (!isAuthenticated) {
      this.router.navigate(['/' + LoginComponent.navigationPath]);
    }

    return isAuthenticated;
  }
}
