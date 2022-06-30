import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EconomicActivityModel } from 'src/app/shared/models/common/economic-activity.interface';
import { ZoneModel } from 'src/app/shared/models/common/zone.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BigMallsService {

  constructor( private http: HttpClient ) { }

  private _zonesSelected: number[] = [];
  private _activitiesSelected: EconomicActivityModel[] = [];

  get zoneSelected() {
    return [...this._zonesSelected]
  }

  get activitiesSelected(){
    return [...this._activitiesSelected]
  }

  addZonesSelected(zoneSelected: ZoneModel) {
    this._zonesSelected.push(zoneSelected.idZone)
  }

  deleteZoneSelected(zoneSelected: ZoneModel) {
    this._zonesSelected.map((zone, index) => {
      if (zone === zoneSelected.idZone) {
        this._zonesSelected.splice(index, 1);
      }
    });
  }

  addActivitySelected( activitySelected: EconomicActivityModel ){
    this._activitiesSelected.push( activitySelected );
  }

  deleteActivitySelected( activitySelected: EconomicActivityModel ){
    this._activitiesSelected.map((activity, index) => {
      if (activity === activitySelected ) {
        this._activitiesSelected.splice(index, 1);
      }
    });
  }

  initializeSelected() {
    this._zonesSelected = [];
    this._activitiesSelected = []
  }

  // pass data to backend
  sendSelectedData() {
    let params = new HttpParams();

    params = params.append('zones', JSON.stringify(this.zoneSelected));

    console.log(params)
    // Fake-filtered to check that it works. Will have to be substituted for actual backend response.
    return this.http.get(`${environment.BACKEND_BASE_URL}${environment.BACKEND_BIG_MALLS_FAKE_FILTERED_RESULTS}`, { params: params },
    )
  }

}
