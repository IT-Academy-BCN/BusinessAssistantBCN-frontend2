import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest } from 'src/entities/auth';
import { environment } from 'src/environments/environment';

const BASE = environment.BACKEND_BASE_URL;
const SIGNUP = environment.BACKEND_REGISTER_URL;
const LOGIN = environment.BACKEND_LOGIN_URL;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public login(login: LoginRequest): Observable<any>{
    return this.http.post<any>(BASE + LOGIN, login);
  }

  public signup(newUser: LoginRequest): Observable<any>{
    return this.http.post<any>(BASE + SIGNUP, newUser);
  }

}
