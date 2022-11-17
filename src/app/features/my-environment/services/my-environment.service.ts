import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {environment} from "../../../../environments/environment";
import { Observable } from 'rxjs';
import { MyEnvironmentSearch, SearchType } from '../../../shared/models/my-environment-search/my-environment-search.model';
import { Zone } from 'src/app/shared/models/common/zone.model';


@Injectable({
  providedIn: 'root'
})
export class MyEnvironmentService {

  title: string = '';

  constructor(private http: HttpClient) { }


 

  getEconomicActivities(businessModel:SearchType): Observable<any> {
    const activityEndPoint=[
      {establishment :0, endPointActivity:environment.BACKEND_BIG_MALLS_ACTIVITIES_URL},
      {establishment :1, endPointActivity:environment.BACKEND_COMMERCIAL_GALLERIES_ACTIVITIES_URL},
      {establishment :2, endPointActivity:environment.BACKEND_LARGE_STABLISHMENTS_ACTIVITIES_URL}
    ]

    let endPoint=activityEndPoint.find(item=> item.establishment==businessModel)
    if (endPoint==undefined) endPoint={establishment:0,endPointActivity:environment.BACKEND_BIG_MALLS_ACTIVITIES_URL}
    return this.http.get(
        `${ environment.BACKEND_BASE_URL }${endPoint.endPointActivity}`,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        });
  }

  getResults(businessModelSearch: MyEnvironmentSearch){
    let params = new HttpParams();
    /*    params = params.append('zones', JSON.stringify(this.selectedZones))
        params = params.append('activities', JSON.stringify(this.selectedActivities));   */
//TODO
    switch (businessModelSearch.searchType){
      case 0:
        return this.http.get(`${environment.BACKEND_BIG_MALLS_FAKE_FILTERED_RESULTS}`,{params})
      case 1:
        return this.http.get(`${environment.BACKEND_COMMERCIAL_GALLERIES_FAKE_FILTERED_RESULTS}`,{params})
      case 2:
        return this.http.get(`${environment.BACKEND_LARGE_ESTABLISHMENTS_FAKE_FILTERED_RESULTS}`,{params})
      case 3:
        return this.http.get(`${environment.BACKEND_MARKET_FAIRS_FAKE_FILTERED_RESULTS}`,{params})
      case 4:
        return this.http.get(`${environment.BACKEND_MUNICIPAL_MARKETS_FAKE_FILTERED_RESULTS}`,{params})
      default:
        return this.http.get(`${environment.BACKEND_LARGE_ESTABLISHMENTS_FAKE_FILTERED_RESULTS}`,{params})
    }
  }


  




}
