import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {LogoutComponent} from "./components/logout/logout.component";
import {AllowNotAuthenticatedUsersOnlyService} from "./services/allow-not-authenticated-users-only.service";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";

const routes: Routes = [
  {path: LoginComponent.navigationPath, component: LoginComponent, canActivate: [AllowNotAuthenticatedUsersOnlyService]},
  {path: LogoutComponent.navigationPath, component: LogoutComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
