import { Popup } from 'mapbox-gl';
import Mapboxgl, { Marker } from 'mapbox-gl';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapboxComponent } from './mapbox.component';

declare var global:any;

jest.mock('mapbox-gl/dist/mapbox-gl', () => ({

    GeolocateControl: jest.fn(),
    Marker: jest.fn(()=> ({
      getLngLat: jest.fn().mockReturnValue({}),
      setLngLat: jest.fn().mockReturnValue({
        setPopup: jest.fn().mockReturnValue({
          addTo: jest.fn().mockReturnValue({
            getElement:jest.fn().mockReturnValue({
              addEventListener: jest.fn().mockReturnValue({
                getLngLat: jest.fn().mockReturnValue({
                  remove: jest.fn().mockReturnValue({})
                })
              })
            })
          })
        })
      })
    })),
    Popup: jest.fn().mockReturnValue({
      setHTML: jest.fn().mockReturnValue({ on: jest.fn() })
    }),
    Map: jest.fn(() => ({
      addControl: jest.fn(),
      on: jest.fn(),
      remove: jest.fn(),
    })),
    NavigationControl: jest.fn(),
    LngLatBounds: jest.fn()
    
}));

describe('MapboxComponent', () => {

    let component: MapboxComponent, fixture: ComponentFixture<MapboxComponent>;

    const mockGeolocation = { getCurrentPosition: jest.fn(), watchPosition: jest.fn() };
      
    global.navigator.geolocation = mockGeolocation;

  const sampleBusiness = {
      name: 'Compañia Roca Sanitario For Real',
      web: 'https://www.roca.es',
      email: "infosan@roca.net",
      phone: null,
     // activities: [],
      addresses: [{
        street_name: 'Av Diagonal',
        street_number: "513",
        zip_code: "08029",
        district_id: "04",
        town: "BARCELONA",
        location: {
          x: 2.140835,
          y: 41.391424
        },
      },
    ],
    }

    const incorrectBusiness = {
      name: 'Business with wrong coordinates',
      web: 'https://www.roca.es',
      email: "infosan@roca.net",
      phone: null,
     // activities: [],
      addresses: [{
        street_name: 'Av Diagonal',
        street_number: "513",
        zip_code: "08029",
        district_id: "04",
        town: "BARCELONA",
        location: {
          x: 23432,
          y: 1232
        },
      },
    ],
    }
    
    beforeEach(async () => {

        await TestBed.configureTestingModule({
          imports: [ ],
          declarations: [ MapboxComponent  ],
          schemas: [NO_ERRORS_SCHEMA]    
        })
        .compileComponents();

      });
    
      beforeEach(() => {

        fixture = TestBed.createComponent(MapboxComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

      });
    
      it('should create', () => { 

        expect(component).toBeTruthy();

      });
      

      it('current markers should be removed upon calling reset current Markers function', () => { 

        component.resetCurrentMarkers();

        expect(component.currentMarkers.length).toEqual(0);

      });

       
      it('new Popup should be called upon createMarkerwithPopup', () => { 
         component.ngAfterViewInit();
       
         component.createMarkerwithPopup('orange', sampleBusiness );

         expect(new Popup().setHTML).toHaveBeenCalled();
       });

       it('On Destroy markers should be removed from current Markers', () => { 
        component.createMarkerwithPopup('orange', sampleBusiness );
        console.log(component.currentMarkers, "testing Current Markers")
        component.ngOnDestroy();

        expect(component.currentMarkers.length).toEqual(0);
      });


      it('Get user location should have been called after view init', () => { 
        jest.spyOn(component, 'getUsersLocation');
        const getLocation = component.getUsersLocation
        component.ngAfterViewInit();

        expect(getLocation).toHaveBeenCalled();
      });

      
      it('createANewMarker should be called when component gets User location', () => { 
        jest.spyOn(component, 'createANewMarker');
        
        const createANewMarker = component.createANewMarker
        component.getUsersLocation();

        expect(navigator.geolocation.getCurrentPosition).toHaveBeenCalled();
      });

      it('currentMarkers should be increased when component executes createANewMarker', () => { 
        
        component.createANewMarker('orange', sampleBusiness );

        expect(component.currentMarkers.length).toEqual(1);
      });

      it('Coordinates Are Valid should return true if business coordinates are valid', () => { 
        
        const testValid = component.coordinatesAreValid(sampleBusiness );

        expect(testValid).toEqual(true);
      });

      it('Coordinates Are Valid should return false if business coordinates are valid', () => { 
        
        const testValid = component.coordinatesAreValid(incorrectBusiness );

        expect(testValid).toEqual(false);
      });

      
      it('createNewMarker should call fitbounds', () => { 
        
        component.createANewMarker('color', sampleBusiness);

        expect(component.map.fitBounds).toEqual(false);
      });
});


