import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  static navigationPath: string = 'login';

  authGroup: FormGroup;

  submitDisabled: boolean = true;

  isHidden: boolean = true;

  errorMessage: string;

  constructor(private authService: AuthService,
              private formBuilder: FormBuilder,
              private router: Router) {
    this.authGroup = formBuilder.group({
      username: [''],
      password: ['']
    });

    this.errorMessage = '';
  }

  ngOnInit(): void {
  }

  onChange(): void {
    this.submitDisabled = this.getControlFromAuthGroup('username')?.value == ''
      || this.getControlFromAuthGroup('password')?.value == '';
  }

  onSubmit(): void {
    let username = this.getValueFromAuthGroup('username');
    let password = this.getValueFromAuthGroup('password');
    this.authService.authenticate(username, password).subscribe({
      next: (response) => {
        if (!response.body) {
          this.errorMessage = 'An internal error occurred! Please email for support: jabinespbi@gmail.com';
          this.isHidden = false;
          throw new Error('Undefined response body!');
        }

        sessionStorage.setItem('uuid', response.body.uuid);
        // this.router.navigate(['/' + DashboardComponent.navigationPath]);
      },
      error: (error) => {
        this.errorMessage = 'The username and/or password you entered is incorrect. Please check and try again.';
        this.isHidden = false;
      }
    });
  }

  getValueFromAuthGroup(key: string) {
    let control = this.getControlFromAuthGroup(key);
    if (!!control) {
      return control.value;
    }

    return '';
  }

  getControlFromAuthGroup(key: string) {
    return this.authGroup.get(key);
  }
}
