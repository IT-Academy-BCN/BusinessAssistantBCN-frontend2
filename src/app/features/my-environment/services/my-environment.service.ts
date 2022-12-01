import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from "../../../../environments/environment";
import { Observable } from 'rxjs';
import { BigMallsSearch, MyEnvironmentSearch, SearchType, CommercialGalleriesSearch, LargeEstablishmentsSearch } from '../../../shared/models/my-environment-search/my-environment-search.model';



@Injectable({
  providedIn: 'root'
})
export class MyEnvironmentService {

  title: string = ''; // This atribute should be remove once refactor other components is done

  constructor(private http: HttpClient) { }



  getEconomicActivities(businessModel: SearchType): Observable<any> {
    console.log('BUSINESS MODEL: ', businessModel);
    
    const activityEndPoint = [
      {
        establishment: SearchType.BIG_MALLS,
        endPointActivity: environment.BACKEND_BIG_MALLS_ACTIVITIES_URL
      },
      {
        establishment: SearchType.COMMERCIAL_GALLERIES,
        endPointActivity: environment.BACKEND_COMMERCIAL_GALLERIES_ACTIVITIES_URL
      },
      {
        establishment: SearchType.LARGE_ESTABLISHMENTS,
        endPointActivity: environment.BACKEND_LARGE_STABLISHMENTS_ACTIVITIES_URL
      }
    ]

    let endPoint = activityEndPoint.find(item => item.establishment == businessModel)
    if (endPoint == undefined) endPoint = { establishment: 0, endPointActivity: environment.BACKEND_BIG_MALLS_ACTIVITIES_URL }
    
    console.log('URL ACTIVITIES: ', `${environment.BACKEND_BASE_URL}${endPoint.endPointActivity}`);
    
    return this.http.get(
      `${environment.BACKEND_BASE_URL}${endPoint.endPointActivity}`,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      });
  }

  // getResults(businessModelSearch: MyEnvironmentSearch) {
  //   let params = new HttpParams();

  //   switch (businessModelSearch.searchType) {
  //     case SearchType.BIG_MALLS:
  //       params = params.append('zones', JSON.stringify((businessModelSearch.zone)))
  //       params = params.append('activities', JSON.stringify((businessModelSearch as BigMallsSearch).activities))
  //       return this.http.get(`${environment.BACKEND_BIG_MALLS_URL}`, { params })
  //     case SearchType.COMMERCIAL_GALLERIES:
  //       params = params.append('zones', JSON.stringify((businessModelSearch.zone)))
  //       params = params.append('activities', JSON.stringify((businessModelSearch as CommercialGalleriesSearch).activities))
  //       return this.http.get(`${environment.BACKEND_COMMERCIAL_GALLERIES_ACTIVITIES_URL}`, { params })
  //     case SearchType.LARGE_ESTABLISHMENTS:
  //       params = params.append('zones', JSON.stringify((businessModelSearch.zone)))
  //       params = params.append('activities', JSON.stringify((businessModelSearch as LargeEstablishmentsSearch).activities))
  //       return this.http.get(`${environment.BACKEND_LARGE_STABLISHMENTS_SEARCH_URL}`, { params })
  //     case SearchType.MARKETS_AND_FAIRS: //This endpoint is missing therefore a repeated one is used
  //       params = params.append('zones', JSON.stringify((businessModelSearch.zone)))
  //       return this.http.get(`${environment.BACKEND_BIG_MALLS_URL}`, { params })
  //     case SearchType.MUNICIPAL_MARKETS:
  //       params = params.append('zones', JSON.stringify((businessModelSearch.zone)))
  //       return this.http.get(`${environment.BACKEND_MUNICIPAL_MARKETS}`, { params })
  //     default:
  //       return this.http.get(`${environment.BACKEND_LARGE_STABLISHMENTS_SEARCH_URL}`, { params })
  //   }
  // }
  // The zone atribute up,  should be an Array of Zones 

  getResults(businessModelSearch: MyEnvironmentSearch) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json')
    console.log('SEARCH OBJECT: ', businessModelSearch);
    const activities: number[] = [];
    const zones: number[] = [];
    businessModelSearch.zones.forEach(z => {
      zones.push(z.idZone);
    })
    businessModelSearch.activities.forEach(a => {
      activities.push(a.activityId);
    })
    switch (businessModelSearch.searchType) {
      case SearchType.BIG_MALLS:
        return this.http.get(`${environment.BACKEND_BASE_URL}${environment.BACKEND_BIG_MALLS_SEARCH_URL}/${zones}/${activities}`, { headers });
      case SearchType.COMMERCIAL_GALLERIES:
        return this.http.get(`${environment.BACKEND_BASE_URL}${environment.BACKEND_COMMERCIAL_GALLERIES_SEARCH_URL}/${zones}/${activities}`, { headers });
      case SearchType.LARGE_ESTABLISHMENTS:
        return this.http.get(`${environment.BACKEND_BASE_URL}${environment.BACKEND_LARGE_STABLISHMENTS_SEARCH_URL}/${zones}/${activities}`, { headers });
      case SearchType.MARKETS_AND_FAIRS: 
      return this.http.get(`${environment.BACKEND_BASE_URL}${environment.BACKEND_MARKET_FAIRS_SEARCH_URL}/${zones}`, { headers });
      case SearchType.MUNICIPAL_MARKETS:
        return this.http.get(`${environment.BACKEND_BASE_URL}${environment.BACKEND_MUNICIPAL_MARKETS_SEARCH_URL}/${zones}`, { headers });
      default:
        return this.http.get(`${environment.BACKEND_LARGE_STABLISHMENTS_SEARCH_URL}`);
    }
  }
}
