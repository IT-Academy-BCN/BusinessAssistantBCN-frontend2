import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest } from 'src/entities/auth';
import { environment } from 'src/environments/environment';
import { Login } from 'src/app/shared/models/common/login.model';
import { Signup } from '../../../shared/models/common/signup.model';

const BASE = environment.BACKEND_JSON_SERVER_BASE_URL;
const SIGNUP = environment.BACKEND_JSON_SERVER_REGISTER_URL;
const LOGIN = environment.BACKEND_LOGIN_URL;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }



  public login(login: LoginRequest): Observable<Signup[]>{
    return this.http.get<Signup[]>(BASE+ SIGNUP);
  }

  public signup(newUser: LoginRequest): Observable<Signup>{
    return this.http.post<Signup>(BASE + SIGNUP, newUser);
  }

}
