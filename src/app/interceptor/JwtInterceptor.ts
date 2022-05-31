import { Injectable } from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
// import {environment} from "../../environments/environment";
import { environment } from 'src/environments/environment';
import {catchError, tap} from "rxjs/operators";
import {Router} from "@angular/router";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private router:Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const isApiUrl = request.url.startsWith(environment.BACKEND_BASE_URL);

    if ((isApiUrl) && (localStorage.getItem('token'))){
      request = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      });
    }

    return next.handle(request).pipe( //redireccionar si alguna petición arroja 401 - Forbidden
      catchError( (error) => {
        if (error.status === 401) {
          this.router.navigateByUrl('/login');
        }
        return throwError(error.message);
      }));

  }
}
