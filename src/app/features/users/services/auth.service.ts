import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest } from 'src/entities/auth';
import { environment } from 'src/environments/environment';

const BASE = environment.BACKEND_BASE_URL;
const REGISTER = environment.BACKEND_REGISTER_URL;

export interface Data {
  userId: number,
  id: number,
  title: string,
  completed: false
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public signup(newUser: LoginRequest): Observable<any>{
    return this.http.post<any>(BASE + REGISTER, newUser);
  }

}
