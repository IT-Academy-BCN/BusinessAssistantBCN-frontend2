import { EconomicActivity } from 'src/app/shared/models/common/economic-activity.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from "../../../../environments/environment";
import { Observable } from 'rxjs';
import { BigMallsSearch, MyEnvironmentSearch, SearchType, CommercialGalleriesSearch, LargeEstablishmentsSearch } from '../../../shared/models/my-environment-search/my-environment-search.model';

const BASE_URL = environment.BACKEND_BASE_URL;
const BIG_MALLS_ACT = environment.BACKEND_BIG_MALLS_ACTIVITIES_URL;
const LARGE_EST_ACT = environment.BACKEND_LARGE_STABLISHMENTS_ACTIVITIES_URL;
const COMM_GALLE_ACT = environment.BACKEND_COMMERCIAL_GALLERIES_ACTIVITIES_URL;
const BIG_MALLS_SEARCH = environment.BACKEND_BIG_MALLS_SEARCH_URL;
const COMM_GALLE_SEARCH = environment.BACKEND_COMMERCIAL_GALLERIES_SEARCH_URL;
const LARGE_EST_SEARCH = environment.BACKEND_LARGE_STABLISHMENTS_SEARCH_URL;
const MARKET_FAIRS_SEARCH = environment.BACKEND_MARKET_FAIRS_SEARCH_URL;
const MUN_MARKET_SEARCH = environment.BACKEND_MUNICIPAL_MARKETS_SEARCH_URL;

@Injectable({
  providedIn: 'root'
})
export class MyEnvironmentService {

  title: string = ''; // This atribute should be remove once refactor other components is done

  constructor(private http: HttpClient) { }

  getEconomicActivities(businessModel: SearchType): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    if (businessModel === 0) {
      return this.http.get(`${BASE_URL}${BIG_MALLS_ACT}`, { headers });
    } else if (businessModel === 1) {
      return this.http.get(`${BASE_URL}${COMM_GALLE_ACT}`, { headers });
    } else {
      return this.http.get(`${BASE_URL}${LARGE_EST_ACT}`, { headers });
    }
  }

  getResults(businessModelSearch: MyEnvironmentSearch): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const activityIDs: number[] = [];
    const zoneIDs: number[] = [];

    if (businessModelSearch.zones.length > 0 && businessModelSearch.activities.length > 0) {
      if (businessModelSearch.searchType <= 2) {
        businessModelSearch.activities.forEach(activity => { activityIDs.push(activity.activityId); })
      }
      businessModelSearch.zones.forEach(zone => { zoneIDs.push(zone.idZone); });
    } else {
      zoneIDs.push(0);
      activityIDs.push(0);
    }

    switch (businessModelSearch.searchType) {
      case SearchType.BIG_MALLS:
        return this.http.get(`${BASE_URL}${BIG_MALLS_SEARCH}/${zoneIDs}/${activityIDs}`, { headers });
      case SearchType.COMMERCIAL_GALLERIES:
        return this.http.get(`${BASE_URL}${COMM_GALLE_SEARCH}/${zoneIDs}/${activityIDs}`, { headers });
      case SearchType.LARGE_ESTABLISHMENTS:
        return this.http.get(`${BASE_URL}${LARGE_EST_SEARCH}/${zoneIDs}/${activityIDs}`, { headers });
      case SearchType.MARKETS_AND_FAIRS:
        return this.http.get(`${BASE_URL}${MARKET_FAIRS_SEARCH}/${zoneIDs}`, { headers });
      case SearchType.MUNICIPAL_MARKETS:
        return this.http.get(`${BASE_URL}${MUN_MARKET_SEARCH}/${zoneIDs}`, { headers });
    }
  }
}
