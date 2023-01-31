import { TestBed } from '@angular/core/testing';

import { MapboxMarkersService } from './mapbox-markers.service';

describe('MapboxMarkersService', () => {
  let service: MapboxMarkersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapboxMarkersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
