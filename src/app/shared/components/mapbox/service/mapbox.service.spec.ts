import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { LngLatLike, Map } from 'mapbox-gl';
import { MapboxService } from './mapbox.service';





describe('MapboxService', () => {
  let service: MapboxService;
  let mockMap: Map;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    });
    service = TestBed.inject(MapboxService);
    mockMap = {} as Map;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set map', () => {
    service.setMap(mockMap);
    expect(service.map).toEqual(mockMap);
  });

  it('should fly to a specific location', () => {
    const mockCoords = [{ location: { x: 10, y: 20 } }];
    const mockLngLat: LngLatLike = [mockCoords[0].location.y, mockCoords[0].location.x];
    mockMap.flyTo = jest.fn();

    service.setMap(mockMap);
    service.flyTo(mockCoords);

    expect(mockMap.flyTo).toHaveBeenCalledWith({
      zoom: 20,
      center: mockLngLat,
    });
  });

});
