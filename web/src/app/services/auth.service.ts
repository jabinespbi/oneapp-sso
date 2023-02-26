import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthenticationResponse} from "../models/authentication-response";

const baseURL = 'http://localhost:8080/backend-1.0-SNAPSHOT/oneapp/authenticate';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) {
  }

  authenticate(username: string,
               password: string): Observable<HttpResponse<AuthenticationResponse>> {
    const postBody = {
      username: username,
      password: password
    }

    return this.httpClient.post<AuthenticationResponse>(baseURL, postBody, {observe: 'response'});
  }

  isAuthenticated() {
    return !!this.getSessionUserUuid();
  }

  getSessionUserUuid(): string {
    const uuid = sessionStorage.getItem('uuid');
    return !!uuid ? uuid : '';
  }

  removeSessionUserUuid() {
    sessionStorage.removeItem('uuid');
  }
}
