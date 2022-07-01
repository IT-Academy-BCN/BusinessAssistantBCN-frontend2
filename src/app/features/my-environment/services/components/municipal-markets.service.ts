import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import { map, Observable } from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";

import { MunicipalMarketModel } from "src/app/shared/models/municipal-market.model";
import { ZoneModel } from "src/app/shared/models/common/zone.interface";
import { environment } from "src/environments/environment";


@Injectable({
  providedIn: 'root'
})
export class MunicipalMarketsService {

  //Options checked
  private _bcnZonesSelected: number[] = [];

  //Municipal Markets
  private _municipalMarkets: MunicipalMarketModel[]=[];

  get bcnZonesSelected(): number[] {
    return [...this._bcnZonesSelected];
  }

  get municipalMarkets():MunicipalMarketModel[]{
    return [...this._municipalMarkets];
  }

    constructor(private router: Router,
                private http: HttpClient) {
  }

  addZonesSelected(zoneSelected: ZoneModel) {
    this._bcnZonesSelected.push(zoneSelected.idZone)
  }

  deleteZoneSelected(zoneSelected: ZoneModel) {
    this._bcnZonesSelected.map((zone, index) => {
      if (zone === zoneSelected.idZone) {
        this._bcnZonesSelected.splice(index, 1);
      }
    });
  }

  initializeSelected() {
    this._bcnZonesSelected = [];
  }

  // pass data to backend
  sendSelectedData() {
    let params = new HttpParams();

    params = params.append('zones', JSON.stringify(this.bcnZonesSelected));

    console.log(params)
    // Fake-filtered to check that it works. Will have to be substituted for actual backend response.
    return this.http.get(`${environment.BACKEND_BASE_URL}${environment.BACKEND_MUNICIPAL_MARKETS}`, { params: params },
    )
  }

  addMunicipalMarkets(element: MunicipalMarketModel) {
    this._municipalMarkets.push(element);
  }
}
