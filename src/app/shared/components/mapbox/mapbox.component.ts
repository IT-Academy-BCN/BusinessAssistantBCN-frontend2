import { Component, AfterViewInit, ViewChild, ElementRef, Input, SimpleChanges } from "@angular/core";
import Mapboxgl, { LngLatBounds, NavigationControl, GeolocateControl, Map, Popup, Marker } from "mapbox-gl";
import { environment } from "src/environments/environment";
import { SearchItemResult } from "../../models/my-environment-search/search-item-result.model";
import { MapboxMarkersService } from "src/app/features/my-environment/services/mapbox-markers.service";
import { LngLatLike } from "mapbox-gl";

@Component({
  selector: "app-mapbox",
  templateUrl: "./mapbox.component.html",
  styleUrls: ["./mapbox.component.css"],
})
export class MapboxComponent implements AfterViewInit {
  @ViewChild("mapDiv")
  mapDivElement!: ElementRef;
  @Input() filteredResultsToPrintOnMap!: SearchItemResult[];
  @Input() selectedResultsToChangeColor!: SearchItemResult[];
  public map!: Map;

  public currentMarker: Marker[] = [];

  public currentMarkers: Marker[] = [];

  public selectedMarkers: Marker[] = [];

  private MAPBOX_INIT_LOCATION: SearchItemResult = {
    name: "IT Academy",
    web: "bcn.cat/barcelonactiva",
    email: "itacademy@barcelonactiva.cat",
    phone: '932917610',
   // activities: [],
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

  constructor(private markersService: MapboxMarkersService) {

  }

  ngOnInit() {
    this.markersService.currentMarkerSubject.subscribe((markerIndex) => {
      this.changeMarkerColor(this.filteredResultsToPrintOnMap[markerIndex])

     })
  }

  ngAfterViewInit(): void {
    // Generate map with basic config
  this.generateMap();
    // Depending on if the user accepts to share their location, center the map into the user, or into the default location (IT Academy)
  this.getUsersLocation();

  }

  ngOnDestroy() {
    this.currentMarkers.forEach(marker => marker.remove());
    this.selectedMarkers.forEach(marker => marker.remove());
  }

  generateMap() {
    /* (Mapboxgl.accessToken as any) = environment.MAPBOX_TOKEN; */
    this.map = new Mapboxgl.Map({
      container: this.mapDivElement.nativeElement,
      style: environment.MAPBOX_STYLE,
      center: [this.MAPBOX_INIT_LOCATION.addresses![0].location!.x, this.MAPBOX_INIT_LOCATION.addresses![0].location!.y], // starting center so it doesn't start from Germany
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

    if(this.filteredResultsToPrintOnMap) {
      this.filteredResultsToPrintOnMap.forEach((result) => {
        // Create a marker for each result and add it to the map
        this.createANewMarker("orange", result);
      });
    }
  
  }

  //Create Marker with Popup For Results
  createMarkerwithPopup(markerColor: string, business?: SearchItemResult) {

        // Create a popup with the business's basic information
        const popup = new Popup().setHTML(
          `<b>${business?.name}</b> </br> ${business?.addresses![0].street_name} , ${business?.addresses![0].street_number}`
        );
    return new Marker({color: markerColor})
    .setLngLat([business!.addresses![0].location!.x, business!.addresses![0].location!.y])
    .setPopup(popup)
    .addTo(this.map)
  }
  

  // Function to create a single marker (with the marker's colour and the business (or user's coords) as parameters)
  createANewMarker(markerColor: string, business?: SearchItemResult, coord?: GeolocationCoordinates): void {


    if (coord) { // If user has accepted to share their location
      const newIndividualMarker = new Marker({ color: markerColor })
        .setLngLat([coord.longitude, coord.latitude])
        .addTo(this.map);
      this.currentMarkers.push(newIndividualMarker);

    
    } else { // If user hasn't accepted to share their location OR when iterating through the filteredResultsToPrintOnMap array.

        const newIndividualMarker = this.createMarkerwithPopup(markerColor, business);
        this.currentMarkers.push(newIndividualMarker);

        newIndividualMarker.getElement().addEventListener('click', () => {

          const newSelectedMarker = this.createMarkerwithPopup('red', business);
          this.selectedMarkers.push(newSelectedMarker);

          newSelectedMarker.getElement().addEventListener('click', () => {
            newSelectedMarker.remove();
            let index = this.selectedMarkers.indexOf(newSelectedMarker);
            if (index !== -1) {this.selectedMarkers.splice(index, 1)};
          })

        })
    
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

  flyTo( coords: LngLatLike) {

    this.map?.flyTo({
      zoom: 16,
      center: coords
    })
  }

  changeMarkerColor(business: SearchItemResult):void {
   let currentMarker = this.currentMarker
   currentMarker.forEach(marker => marker.remove() )
   if(currentMarker.length>0) {this.currentMarker.shift();}
    currentMarker[0] = this.createMarkerwithPopup('black', business);

    this.flyTo(currentMarker[0].getLngLat())
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
        this.createANewMarker("red", this.MAPBOX_INIT_LOCATION);
      }
    );
  }

  resetCurrentMarkers() {
    this.currentMarkers.forEach( marker => marker.remove());
  }

  coordinatesAreValid(business:SearchItemResult){

    const location = business.addresses![0].location, format = environment.MAPBOX_COORDINATES_FORMAT;

    let valid = false;

    switch (format) {

      case 'GCS':{ valid = [location!.x, location!.y].every(c=>Math.abs(c)<=90);  break; }        
    
    }

    if(!valid) console.error('ERROR - incorrect coordinates format - ' + business.name + '');    

    return valid
  }

  
}
