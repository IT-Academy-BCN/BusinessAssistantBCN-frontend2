import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapboxComponent } from './mapbox.component';

declare var global:any;

jest.mock('mapbox-gl/dist/mapbox-gl', () => ({

    GeolocateControl: jest.fn(),
    Map: jest.fn(() => ({
      addControl: jest.fn(),
      on: jest.fn(),
      remove: jest.fn(),
    })),
    NavigationControl: jest.fn()
    
}));

describe('MapboxComponent', () => {

    let component: MapboxComponent, fixture: ComponentFixture<MapboxComponent>;

    const mockGeolocation = { getCurrentPosition: jest.fn(), watchPosition: jest.fn() };
      
    global.navigator.geolocation = mockGeolocation;
    
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
});


