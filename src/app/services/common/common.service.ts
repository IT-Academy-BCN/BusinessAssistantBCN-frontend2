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
  //API_ENDPOINT:string = '../../assets/dummy/full/'
  results = new Subject<BasicBusinessModel[]>()
  //currentBusiness =  new BehaviorSubject<string>('');
  //businessModel:string=''

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

  getEconomicActivities(category:string): Observable<any> {
    
    
    const activityEndPoint=[
      {establishment :'common.button.mall', endPointActivity:environment.BACKEND_BIG_MALLS_ACTIVITIES_URL},
      {establishment :'common.button.gallery-market', endPointActivity:environment.BACKEND_COMMERCIAL_GALLERIES_ACTIVITIES_URL},
      {establishment :'common.button.big-stablish', endPointActivity:environment.BACKEND_LARGE_STABLISHMENTS_ACTIVITIES_URL}
    ]

    let endPoint=activityEndPoint.find(item=> item.establishment==category)
    if (endPoint==undefined) endPoint={establishment:'common.button.mall',endPointActivity:environment.BACKEND_BIG_MALLS_ACTIVITIES_URL}    
  

    return this.http.get(
      `${ environment.BACKEND_BASE_URL }${endPoint.endPointActivity}`,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      });
    
  }
}
