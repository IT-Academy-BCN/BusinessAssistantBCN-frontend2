import { Injectable } from '@angular/core';

import { LngLatLike, Map } from 'mapbox-gl';


@Injectable({
  providedIn: 'root'
})
export class MapboxService {

  map!: Map;
  
  // Instance of mapbox map is passed from mapbox component
  setMap(map: Map) {
    this.map = map;
  }

  // Method to fly to a specific location 
  flyTo(coords: any) {
    const lengLat = [coords[0].location.y, coords[0].location.x] as LngLatLike;
    this.map.flyTo({
      zoom: 20,
      center: lengLat,
    })
  }

}
