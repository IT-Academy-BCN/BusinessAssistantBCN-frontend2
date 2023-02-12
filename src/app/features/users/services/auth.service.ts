import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest } from 'src/entities/auth';
import { environment } from 'src/environments/environment';
import { Signup } from 'src/app/shared/models/common/signup.model';
import { SignUpRequest } from 'src/entities/signUpRequest';



const BASE = environment.BACKEND_JSON_SERVER_BASE_URL;
const SIGNUP = environment.BACKEND_JSON_SERVER_REGISTER_URL;


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  user:Signup ={
    email:"",
    password:0, 
    id:0
  }
  loggedIn:boolean=false
  


  public login(login: LoginRequest): Observable<Signup[]>{
    return this.http.get<Signup[]>(BASE+ SIGNUP);
  }

  public signup(newUser: SignUpRequest): Observable<Signup>{
    return this.http.post<Signup>(BASE + SIGNUP, newUser);
  }

}
