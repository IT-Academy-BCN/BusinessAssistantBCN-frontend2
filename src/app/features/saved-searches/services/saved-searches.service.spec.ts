import { TestBed } from '@angular/core/testing';

import { SavedSearchesService } from './saved-searches.service';

describe('SavedSearchesService', () => {
  let service: SavedSearchesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SavedSearchesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
