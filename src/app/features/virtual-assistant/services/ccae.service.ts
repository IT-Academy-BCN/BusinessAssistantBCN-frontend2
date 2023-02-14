import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CcaeService {

  private _jsonURL = 'assets/dummy/ccae/ccaeAllResults.json';

  constructor(private http: HttpClient) { 


  }

  public getCcaeJSON(): Observable<any> {
    return this.http.get(this._jsonURL);
  }
}
