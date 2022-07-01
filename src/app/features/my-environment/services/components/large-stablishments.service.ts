
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient, HttpParams } from "@angular/common/http";

import { LargeStablishmentModel } from "src/app/shared/models/large-establishment.model";
import { ZoneModel } from "src/app/shared/models/common/zone.interface";
import { EconomicActivityModel } from "src/app/shared/models/common/economic-activity.interface";
import { environment } from "src/environments/environment";


@Injectable({
  providedIn: "root",
})
export class LargeStablishmentsService {
  //Options checked
  private _bcnZonesSelected: number[] = [];
  private _activitiesSelected: number[] = [];

  // Large Stablishments
  private _largeStablishments: LargeStablishmentModel[] = [];

  get bcnZonesSelected(): number[] {
    return [...this._bcnZonesSelected];
  }

  get activitiesSelected(): number[] {
    return [...this._activitiesSelected];
  }

  get largeStablishments(): LargeStablishmentModel[] {
    return [...this._largeStablishments];
  }

  constructor(private router: Router, private http: HttpClient) {}


  addZonesSelected(zoneSelected: ZoneModel) {
    this._bcnZonesSelected.push(zoneSelected.idZone);
  }

  deleteZoneSelected(zoneSelected: ZoneModel) {
    this._bcnZonesSelected.map((zone, index) => {
      if (zone === zoneSelected.idZone) {
        this._bcnZonesSelected.splice(index, 1);
      }
    });
  }

  addActivitiesSelected(activitySelected: EconomicActivityModel) {
    this._activitiesSelected.push(activitySelected.idActivity);
    console.log(JSON.stringify([...this._activitiesSelected]));
  }

  deleteActivitySelected(activitySelected: EconomicActivityModel) {
    this._activitiesSelected.map((activity, index) => {
      activity === activitySelected.idActivity
      ? this._activitiesSelected.splice(index, 1)
      : null;
    });
  }

  initializeSelected() {
    this._bcnZonesSelected = [];
    this._activitiesSelected = [];
    this._largeStablishments = [];
  }

  // la funcion de pasar data a backend, para conseguir que funciona
  sendSelectedData() {
    let params = new HttpParams();

    params = params.append('zones', JSON.stringify(this.bcnZonesSelected))

    params = params.append('activities', JSON.stringify(this.activitiesSelected));

    console.log(params)
    // Fake-filtered to check that it works. Will have to be substituted for actual backend response.
    return this.http.get(`${environment.BACKEND_BASE_URL}${environment.BACKEND_LARGE_ESTABLISHMENTS_FAKE_FILTERED_RESULTS}`, { params: params },
    )
  }

  addLargeStablishment(element: LargeStablishmentModel) {
    this._largeStablishments.push(element);
  }
}





