import { TestBed } from '@angular/core/testing';
import { SavedSearchesService } from './saved-searches.service';
import { environment } from '../../../../environments/environment';

describe('SavedSearchesService', () => {
  let service: SavedSearchesService;
  let httpClientMock: any;

  beforeEach(() => {
    httpClientMock = {
      get: jest.fn()
    };
    service = new SavedSearchesService(httpClientMock);
  });

  describe('Method', () => {
    
    test('getSavedSearches should be created', () => {
      expect(service.getSavedSearches).toBeTruthy();
    });

    test('getSavedSearches should use HttpClient', () => {
      service.getSavedSearches();
      expect(httpClientMock.get).toBeCalledTimes(1);
    });

    test('getSavedSearches should use expected params when send request', () => {
      const url = environment.BACKEND_BASE_URL+environment.BACKEND_SAVED_SEARCHES_URL;
      service.getSavedSearches();
      expect(httpClientMock.get).toHaveBeenCalledWith(url);
    });
  });

});
