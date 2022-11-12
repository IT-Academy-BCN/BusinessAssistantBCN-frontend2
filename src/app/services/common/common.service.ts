import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { Observable , Subject} from "rxjs";
import { ZoneModel } from "src/app/shared/models/common/zone.interface";
import { EconomicActivityModel } from "src/app/shared/models/common/economic-activity.interface";
import { BasicBusinessModel } from "src/app/shared/models/common/basic-business.interface";
import { environment } from "src/environments/environment";


@Injectable({
  providedIn: 'root'
})

export class CommonService {

  zones:ZoneModel[]=[];
  activities:EconomicActivityModel[]=[]
  results = new Subject<BasicBusinessModel[]>()

  constructor(private http: HttpClient) {
  }

  getZones(): Observable<any>{
    return this.http.get(
      `${ environment.BACKEND_BASE_URL }${ environment.BACKEND_ZONES_URL }`,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      });
  }

}
