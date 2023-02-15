import { SearchItemResult } from './../../../shared/models/my-environment-search/search-item-result.model';
import { SavedSearchesModel } from './../../../shared/models/saved-search.model';
import { SavedSearchesModule } from './../saved-searches.module';
import { environment } from './../../../../environments/environment';
import { SavedSearchesService } from './saved-searches.service';

const user_uuid = environment.USER_UUID;
const results: SearchItemResult[] = []
const savedSearches: SavedSearchesModel = new SavedSearchesModel(user_uuid, "Search name", "Search detail", new Date(), results);

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

    test('getSavedSearches should use HttpClient', () => {   
      service.getSavedSearches(user_uuid);
      expect(httpClientMock.get).toBeCalledTimes(1);
    });

    test('getSavedSearches should use expected params when send request', () => {
      const url = environment.BACKEND_SAVED_SEARCHES_URL + user_uuid;
      service.getSavedSearches(user_uuid);
      expect(httpClientMock.get).toHaveBeenCalledWith(url);
    });

    test('saveSearch should be created', () => {
      expect(service.saveSearch).toBeTruthy();
    });

    test('saveSearch should use HttpClient', () => {   
      service.saveSearch(savedSearches);
      expect(httpClientMock.post).toBeCalledTimes(1);
    });
  });

});
