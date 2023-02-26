import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {LoginComponent} from "../login/login.component";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.less']
})
export class LogoutComponent implements OnInit {
  static navigationPath: string = 'logout';

  constructor(private router: Router,
              private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.removeSessionUserUuid();
    this.router.navigate(['/' + LoginComponent.navigationPath]);
  }

}
