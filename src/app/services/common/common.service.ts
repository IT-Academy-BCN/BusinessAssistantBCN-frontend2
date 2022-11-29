import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { Observable , Subject} from "rxjs";
import { Zone } from "src/app/shared/models/common/zone.model";
import { EconomicActivity } from "src/app/shared/models/common/economic-activity.model";
import { environment } from "src/environments/environment";


@Injectable({
  providedIn: 'root'
})

export class CommonService {

  //zones:Zone[]=[];
  activities:EconomicActivity[]=[]
  //results = new Subject<BasicBusinessModel[]>()

  constructor(private http: HttpClient) {
  }

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
