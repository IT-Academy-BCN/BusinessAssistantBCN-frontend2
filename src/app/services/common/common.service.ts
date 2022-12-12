import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
<<<<<<< HEAD
import { Observable } from "rxjs";
=======
import { Observable} from "rxjs";
>>>>>>> develop
import { environment } from "src/environments/environment";


@Injectable({
  providedIn: 'root'
})

export class CommonService {

<<<<<<< HEAD
  constructor(private http: HttpClient) {}
=======

  constructor(private http: HttpClient) {
  }
>>>>>>> develop

  getZones(): Observable<any> {
    return this.http.get(
      `${ environment.BACKEND_BASE_URL }${ environment.BACKEND_ZONES_URL }`,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      });
  }

}
