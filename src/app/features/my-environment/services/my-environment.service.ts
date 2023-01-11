import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from "../../../../environments/environment";
import { Observable } from 'rxjs';
import { MyEnvironmentSearch, SearchType } from '../../../shared/models/my-environment-search/my-environment-search.model';

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

  activityIDs: number[] = [];
  zoneIDs: number[] = [];
  businessModel: number = 0; 

  constructor(private http: HttpClient) { 
    this.activityIDs = [];
    this.zoneIDs = [];
  }

  getEconomicActivities(businessModel: SearchType): Observable<any> {
    
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.businessModel = businessModel;
    
    if (this.businessModel === 0) {
      return this.http.get(`${BASE_URL}${BIG_MALLS_ACT}`, { headers });
    } else if (this.businessModel === 1) {
      return this.http.get(`${BASE_URL}${COMM_GALLE_ACT}`, { headers });
    } else {
      return this.http.get(`${BASE_URL}${LARGE_EST_ACT}`, { headers });
    }
  }

  getResults(businessModelSearch: MyEnvironmentSearch): Observable<any> {
    this.activityIDs = [];
    this.zoneIDs = [];
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = new HttpParams();

    if(businessModelSearch.zones.length == 0){
      this.zoneIDs.push(0);
    }else {
      businessModelSearch.zones.forEach(zone => { this.zoneIDs.push(zone.idZone); });
    }

    this.zoneIDs.forEach(id => {
      params = params.append('zones', id);
    });
    
    if(businessModelSearch.activities.length == 0){
      this.activityIDs.push(0);
    }else {
      businessModelSearch.activities.forEach(activity => { this.activityIDs.push(activity.activityId); })
    }

    this.activityIDs.forEach(id => {
      params = params.append('activities', id);
    });
    
    switch (businessModelSearch.searchType) {
      case SearchType.BIG_MALLS:   
        return this.http.get(`${BASE_URL}${BIG_MALLS_SEARCH}`, { headers, params });
      case SearchType.COMMERCIAL_GALLERIES:
        return this.http.get(`${BASE_URL}${COMM_GALLE_SEARCH}`, { headers, params });
      case SearchType.LARGE_ESTABLISHMENTS:
        return this.http.get(`${BASE_URL}${LARGE_EST_SEARCH}`, { headers, params });
      case SearchType.MARKETS_AND_FAIRS:
        return this.http.get(`${BASE_URL}${MARKET_FAIRS_SEARCH}`, { headers, params });
      case SearchType.MUNICIPAL_MARKETS:
        return this.http.get(`${BASE_URL}${MUN_MARKET_SEARCH}`, { headers, params });
    }
  }
}



