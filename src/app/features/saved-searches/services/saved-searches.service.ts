import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SavedSearchesModel } from 'src/app/shared/models/saved-search.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SavedSearchesService {

  constructor(private http: HttpClient) { }

  getSavedSearches(user_uuid: any): Observable<any> {
    return this.http.get<any>(environment.BACKEND_SAFE_SEARCHES_URL + user_uuid);
  }

  saveSearch(savedSearches: SavedSearchesModel): Observable<any>{
    const user_uuid = savedSearches.user_uuid;
    return this.http.post<any>(environment.BACKEND_SAFE_SEARCHES_URL + user_uuid , savedSearches);
  }
  
}
