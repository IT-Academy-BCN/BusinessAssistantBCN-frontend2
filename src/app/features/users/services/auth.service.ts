import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest } from 'src/entities/auth';
import { environment } from 'src/environments/environment';
import { Login } from 'src/app/shared/models/common/login.model';
import { Signup } from '../../../shared/models/common/signup.model';

const BASE = environment.BACKEND_BASE_URL;
const SIGNUP = environment.BACKEND_REGISTER_URL;
const LOGIN = environment.BACKEND_LOGIN_URL;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isUserLogged: boolean = false;

  constructor(private http: HttpClient) { }

  public setIsUserLogged(status: boolean){
    this._isUserLogged = status;
  }

  public getIsUserLogged(): boolean{
    return this._isUserLogged;
  }

  public login(login: LoginRequest): Observable<Login>{
    return this.http.post<Login>(BASE + LOGIN, login);
  }

  public signup(newUser: LoginRequest): Observable<Signup>{
    return this.http.post<Signup>(BASE + SIGNUP, newUser);
  }

}
