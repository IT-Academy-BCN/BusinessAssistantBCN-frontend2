import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SavedSearchesModel } from 'src/app/shared/models/saved-search.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SavedSearchesService {

  constructor(private http: HttpClient) { }

  getSavedSearches() {
    return this.http.get<SavedSearchesModel>(`${environment.BACKEND_BASE_URL}${environment.BACKEND_SAVED_SEARCHES_URL}`
    )

  }
}
