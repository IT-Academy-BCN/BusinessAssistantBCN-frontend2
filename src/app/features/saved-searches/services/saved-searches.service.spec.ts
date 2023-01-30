import { TestBed } from '@angular/core/testing';
import { SavedSearchesService } from './saved-searches.service';

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
      const url = '../../assets/dummy/saved-search-large-establishments_dummy.json';
      service.getSavedSearches();
      expect(httpClientMock.get).toHaveBeenCalledWith(url);
    });
  });

});
