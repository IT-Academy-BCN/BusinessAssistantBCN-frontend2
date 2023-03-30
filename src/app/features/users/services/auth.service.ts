import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest } from 'src/app/shared/models/common/auth';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/shared/models/common/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public login(login: LoginRequest): Observable<User>{
    return this.http.post<User>(environment.BACKEND_BASE_URL + environment.BACKEND_LOGIN_URL, login);
  }

  public signup(newUser: LoginRequest): Observable<User>{
    return this.http.post<User>(environment.BACKEND_BASE_URL + environment.BACKEND_REGISTER_URL, newUser);
  }

}
