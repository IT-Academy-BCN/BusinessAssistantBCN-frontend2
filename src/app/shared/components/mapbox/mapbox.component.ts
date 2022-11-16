import { Component, AfterViewInit, ViewChild, ElementRef, Input } from "@angular/core";
import * as Mapboxgl from "mapbox-gl"; 
import { LngLatBounds, NavigationControl, GeolocateControl, Map, Popup, Marker } from "mapbox-gl";
import { environment } from "src/environments/environment";
/* import { LargeStablishmentModel } from '../../models/large-stablishment.model';
import {BasicBusinessModel} from "../../models/common/basic-business.model"; */

@Component({
  selector: "app-mapbox",
  templateUrl: "./mapbox.component.html",
  styleUrls: ["./mapbox.component.css"],
})
export class MapboxComponent implements AfterViewInit {
  @ViewChild("mapDiv")
  mapDivElement!: ElementRef;
  @Input() filteredResultsToPrintOnMap!: any[];
  private map!: Map;
  private currentMarkers: Marker[] = [];

  private MAPBOX_INIT_LOCATION: any = {
    name: "IT Academy",
    web: "bcn.cat/barcelonactiva",
    email: "itacademy@barcelonactiva.cat",
    phone: '932917610',
    activities: [],
    addresses: [
      {
        street_name: "Roc Boronat",
        street_number: "117-127",
        zip_code: "08018",
        district_id: "04",
        town: "BARCELONA",
        location: {
          x: 2.194060007737955,
          y: 41.40389733660671,
        },
      },
    ],
  }

  constructor() { }

  ngAfterViewInit(): void {
    // Generate map with basic config
    this.generateMap();
    // Depending on if the user accepts to share their location, center the map into the user, or into the default location (IT Academy)
    this.getUsersLocation();
  }

  ngOnChanges() {

   (this.filteredResultsToPrintOnMap || []).forEach((result) => {

      // Create a marker for each result and add it to the map

       if(this.coordinatesAreValid(result)) this.createANewMarker("orange", result);
    });
  }

  ngOnDestroy() {
    this.currentMarkers.forEach(marker => marker.remove());
  }

  generateMap() {
    /* (Mapboxgl.accessToken as any) = environment.MAPBOX_TOKEN; */
    this.map = new Mapboxgl.Map({
      container: this.mapDivElement.nativeElement,
      style: environment.MAPBOX_STYLE,
      center: [this.MAPBOX_INIT_LOCATION.addresses[0].location.x, this.MAPBOX_INIT_LOCATION.addresses[0].location.y], // starting center so it doesn't start from Germany
      zoom: environment.MAPBOX_ZOOM, 
      maxZoom: 18,
      accessToken:environment.MAPBOX_TOKEN
    });

    this.map.addControl(new NavigationControl({showZoom:true}));

    // Add geolocate control to the map.
    this.map.addControl(
      new GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
      })
    );
  }

  // Function to create a single marker (with the marker's colour and the business (or user's coords) as parameters)
  createANewMarker(markerColor: string, business?: any, coord?: GeolocationCoordinates): void {
 
    // Create a popup with the business's basic information
    const popup = new Popup().setHTML(
      `<b>${business?.name}</b> </br> ${business?.addresses[0].street_name} , ${business?.addresses[0].street_number}`
    );

    if (coord) { // If user has accepted to share their location
      const newIndividualMarker = new Marker({ color: markerColor })
        .setLngLat([coord.longitude, coord.latitude])
        .addTo(this.map);
      this.currentMarkers.push(newIndividualMarker);
    } else { // If user hasn't accepted to share their location OR when iterating through the filteredResultsToPrintOnMap array.

   
        const newIndividualMarker = new Marker({ color: markerColor })
        .setLngLat([business!.addresses[0].location.x, business!.addresses[0].location.y])
        .setPopup(popup)
        .addTo(this.map);
        this.currentMarkers.push(newIndividualMarker);
    
      
    }

    // MAP LÍMITS
    // Initial point 0
    const bounds = new LngLatBounds();

    // Add all the markers to the map's bounds.
    this.currentMarkers.forEach(marker =>
      bounds.extend(marker.getLngLat()));

    // Adjust the zoom to see all the existing markers
    this.map.fitBounds(bounds, {
      padding: 75
    })
  }

  getUsersLocation(): void {
    navigator.geolocation.getCurrentPosition(
      // Success callback function (if user has accepted to share their location)
      (pos) => {
        // this.map.flyTo({ center: [pos.coords.longitude, pos.coords.latitude], zoom: 11 })
        this.createANewMarker("green", undefined, pos.coords);
        
      },
      // Error callback function (if user hasn't accepted to share their location)
      () => {
        // this.map.flyTo(
        //   { center: [environment.MAPBOX_ITAcademy_OBJECT.addresses[0].location.x, environment.MAPBOX_ITAcademy_OBJECT.addresses[0].location.y], zoom: 11 })
        this.createANewMarker("red", this.MAPBOX_INIT_LOCATION);
      }
    );
  }

  coordinatesAreValid(business:any){

    const location = business!.addresses[0].location, format = environment.MAPBOX_COORDINATES_FORMAT;

    let valid = false;

    switch (format) {

      case 'GCS':{ valid = [location.x, location.y].every(c=>Math.abs(c)<=90);  break; }        
    
    }

    if(!valid) console.log('ERROR - incorrect coordinates format - ' + business.name + '');    

    return valid
  }
}
