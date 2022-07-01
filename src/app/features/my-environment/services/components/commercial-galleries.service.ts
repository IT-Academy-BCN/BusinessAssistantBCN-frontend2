import { Injectable } from '@angular/core';
import {HttpClient , HttpParams} from "@angular/common/http";
import {Router} from "@angular/router";
import { EconomicActivityModel } from 'src/app/shared/models/common/economic-activity.interface';
import { CommercialGalleryModel } from 'src/app/shared/models/commercial-gallery.model';
import { ZoneModel } from 'src/app/shared/models/common/zone.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommercialGalleriesService {
  //Options checked
  private _bcnZonesSelected: number[] = [];
  private _activitiesSelected:EconomicActivityModel[]=[]

  private _commercialGalleries: CommercialGalleryModel[]=[];

  get bcnZonesSelected(): number[] {
    return [...this._bcnZonesSelected];
  }
  get activitiesSelected(){
    return [...this._activitiesSelected]
  }

  get commercialGalleries():CommercialGalleryModel[]{
    return [...this._commercialGalleries];
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
    this._bcnZonesSelected = [];
    this._activitiesSelected=[]
  }

  // pass data to backend
  sendSelectedData() {
    let params = new HttpParams();

    params = params.append('zones', JSON.stringify(this.bcnZonesSelected));

    console.log(params)
    // Fake-filtered to check that it works. Will have to be substituted for actual backend response.
    return this.http.get(`${environment.BACKEND_BASE_URL}${environment.BACKEND_COMMERCIAL_GALLERIES}`, { params: params },
    )
  }

  addCommercialGalleries(element: CommercialGalleryModel) {
    this._commercialGalleries.push(element);
  }
}
