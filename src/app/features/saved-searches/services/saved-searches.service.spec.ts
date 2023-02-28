import { SearchItemResult } from './../../../shared/models/my-environment-search/search-item-result.model';
import { SavedSearchesModel } from './../../../shared/models/saved-search.model';
import { environment } from './../../../../environments/environment';
import { SavedSearchesService } from './saved-searches.service';

const results: SearchItemResult[] = []
const savedSearches: SavedSearchesModel = new SavedSearchesModel(123456, "Search name", "Search detail", new Date(), results);

describe('SavedSearchesService', () => {
  let service: SavedSearchesService;
  let httpClientMock: any;
 
  beforeEach(() => {
    httpClientMock = {
      get: jest.fn(),
      post: jest.fn()
    };
    service = new SavedSearchesService(httpClientMock);
  });

  describe('Method', () => {
    
    test('getSavedSearches should be created', () => {
      expect(service.getSavedSearches).toBeTruthy();
    });


    //TODO - Pending implementation
/*    test('getSavedSearches should use HttpClient', () => {
      service.getSavedSearches();
      expect(httpClientMock.get).toBeCalledTimes(0);//TODO
    });

    test('getSavedSearches should use expected params when send request', () => {
      const url = environment.BACKEND_SAVED_SEARCHES_URL + savedSearches.user_uuid;
      expect(service.getSavedSearches()).toHaveBeenCalledWith(savedSearches.user_uuid);
    });*/

    test('saveSearch should be created', () => {
      expect(service.saveSearch).toBeTruthy();
    });

    test('saveSearch should use HttpClient', () => {   
      service.saveSearch(savedSearches);
      expect(httpClientMock.post).toBeCalledTimes(1);
    });
  });

});
