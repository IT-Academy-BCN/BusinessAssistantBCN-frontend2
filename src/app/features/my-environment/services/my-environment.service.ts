import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {environment} from "../../../../environments/environment";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyEnvironmentService {

  title: string = '';

  constructor(private http: HttpClient) { }

  getResults(businessModel: string){
    let params = new HttpParams();
    /*    params = params.append('zones', JSON.stringify(this.selectedZones))
        params = params.append('activities', JSON.stringify(this.selectedActivities));   */
//TODO
    // switch (businessModel){
    //   case 'common.button.mall':
    //     return this.http.get(`${environment.BACKEND_LARGE_ESTABLISHMENTS_FAKE_FILTERED_RESULTS}`,{params})
    //   case 'common.button.gallery-market':
    //     return this.http.get(`${environment.BACKEND_COMMERCIAL_GALLERIES_FAKE_FILTERED_RESULTS}`,{params})
    //   case 'common.button.big-stablish':
    //     return this.http.get(`${environment.BACKEND_BIG_MALLS_FAKE_FILTERED_RESULTS}`,{params})
    //   case 'common.button.market-fair':
    //     return this.http.get(`${environment.BACKEND_MARKET_FAIRS_FAKE_FILTERED_RESULTS}`,{params})
    //   case 'common.button.public-market':
    //     return this.http.get(`${environment.BACKEND_MUNICIPAL_MARKETS_FAKE_FILTERED_RESULTS}`,{params})
    //   default:
    //     return this.http.get(`${environment.BACKEND_LARGE_ESTABLISHMENTS_FAKE_FILTERED_RESULTS}`,{params})
    // }
  
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

  test(){ // Temporal function for testing endpoints. To delete
       
    [ 
      {url:'BACKEND_ZONES_URL'},
      {url:'BACKEND_LARGE_STABLISHMENTS_ACTIVITIES_URL',},
      {url:'BACKEND_LARGE_STABLISHMENTS_SEARCH_URL', config:{"zones": JSON.stringify([2]),"activities": JSON.stringify([1008031,34296307,63006067])}}, 
      {url:'BACKEND_COMMERCIAL_GALLERIES_ACTIVITIES_URL'}, 
      {url:'BACKEND_BIG_MALLS_URL'}, 
      {url:'BACKEND_SAVED_SEARCHES_URL', params:'/99832-12345-12345-12345-12345?offset=0&limit=5'},
      {url:'BACKEND_BIG_MALLS_ACTIVITIES_URL'},
      {url:'BACKEND_MUNICIPAL_MARKETS'}

    ].forEach((endPoint:any)=>{

      let params = new HttpParams(), config = endPoint.config||{};

      Object.keys(config).forEach(key=>params.append(key, config[key]))

      this.http.get( `${ environment.BACKEND_BASE_URL }${(environment as any)[endPoint.url]}${endPoint.params||''}`,
      {
        params:params
      }).subscribe(success=>console.log(endPoint, 'SUCCESS ----->', success), error=>console.log(endPoint, 'ERROR  ----->', error)) 
    }) 
  
}


}
