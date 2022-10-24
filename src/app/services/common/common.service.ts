import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {HttpClient , HttpParams} from "@angular/common/http";
import {BehaviorSubject , Observable , Subject} from "rxjs";
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
  API_ENDPOINT:string = '../../assets/dummy/full/'
  results = new Subject<BasicBusinessModel[]>()
  currentBusiness =  new BehaviorSubject<string>('');
  businessModel:string=''

  constructor(private router:Router,
              private http: HttpClient) {
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

  getEconomicActivities(): Observable<any> {
    return this.http.get(
      `${ environment.BACKEND_BASE_URL }${ environment.BACKEND_LARGE_STABLISHMENTS_ACTIVITIES_URL }`,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      });
  }

  getEnvironments(){
    let params = new HttpParams();

    params = params.append('zones', JSON.stringify(this.zones))

    params = params.append('activities', JSON.stringify(this.activities));
    //return this.http.get<T>(`${this.API_ENDPOINT}${businessModel}_dummy.json`,{params:params});


    switch (this.businessModel){
      case 'large-establishments':
        return this.http.get(`${environment.BACKEND_LARGE_ESTABLISHMENTS_FAKE_FILTERED_RESULTS}`,{params})
      case 'commercial-galleries':
        return this.http.get(`${environment.BACKEND_COMMERCIAL_GALLERIES}`,{params})
      case 'big-malls':
        return this.http.get(`${environment.BACKEND_BIG_MALLS_FAKE_FILTERED_RESULTS}`,{params})
      case 'municipal-markets':
        return this.http.get(`${environment.BACKEND_MUNICIPAL_MARKETS_FAKE_FILTERED_RESULTS}`,{params})
      case 'market-fairs':
        return this.http.get(`${environment.BACKEND_MARKET_FAIRS_FAKE_FILTERED_RESULTS}`,{params})
      default:
        return this.http.get(`${environment.BACKEND_LARGE_ESTABLISHMENTS_FAKE_FILTERED_RESULTS}`,{params})
    }

  }

}
