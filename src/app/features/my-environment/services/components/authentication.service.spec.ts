import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginRequest } from 'src/entities/auth';



@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  auth_api: any = environment.BACKEND_BASE_URL;
  endpoint: string = environment.BACKEND_LOGIN_URL;
  endpoint_register: string = environment.BACKEND_REGISTER_URL;

  private _userLogged: boolean = false; // To be replace when user login works

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  constructor(private http: HttpClient) { }


  public login(body: LoginRequest): Observable<any> {
    console.log(body);
    return this.http.post(this.auth_api + this.endpoint, { body },
      this.httpOptions)
      .pipe(catchError((err) => {
        console.log('error caught in service')
        console.error(err);

        return throwError(err);    //Rethrow it back to component
      })
      );
  }

  // To be replaced when user login works
  get userLogged(): boolean {
    return this._userLogged
  }
  setUserLogged( logged: boolean ){
    this._userLogged = logged
  }

  register(body: LoginRequest): Observable<any> {
    console.log(body);
    return this.http.post(this.auth_api + this.endpoint_register, { body },
      this.httpOptions)
      .pipe(catchError((err) => {
        console.log('error caught in service')
        console.error(err);

        return throwError(err);    //Rethrow it back to component
      })
      );
  }

}

