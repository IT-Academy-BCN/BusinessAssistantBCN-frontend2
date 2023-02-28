import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable} from "rxjs";
import { environment } from "src/environments/environment";
import { Zones } from "src/app/shared/models/common/zones.model";


@Injectable({
  providedIn: 'root'
})

export class CommonService {

  constructor(private http: HttpClient) {}

  getZones(): Observable<Zones> {

    const headers = new HttpHeaders({
      'Content-Type' : 'application/json'
    })

    return this.http.get<Zones>(
      `${ environment.BACKEND_BASE_URL }${ environment.BACKEND_ZONES_URL }`,
      {
        headers
      });
  }

}
