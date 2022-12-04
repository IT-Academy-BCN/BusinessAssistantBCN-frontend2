import { Zone } from './../../../shared/models/common/zone.model';
import { MyEnvironmentSearch, LargeEstablishmentsSearch, CommercialGalleriesSearch, BigMallsSearch, MunicipalMarketsSearch, MarketsAndFairsSearch, SearchType } from 'src/app/shared/models/my-environment-search/my-environment-search.model';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { MyEnvironmentService } from './my-environment.service';
import { EconomicActivity } from 'src/app/shared/models/common/economic-activity.model';

describe('MyEnvironmentService', () => {

  let service:MyEnvironmentService

  beforeEach(() => {
    
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers:[ MyEnvironmentService]
    }).compileComponents();

     service = TestBed.inject(MyEnvironmentService);
     
  });


  it('should be created', () => {
    
    expect(service).toBeTruthy();
    
  });

  describe('Methods', () => {

    test('getEconomicActivities should select the correct option depending on which Business Model has been selected', () => {
      let businessModel = SearchType.BIG_MALLS;
      service.getEconomicActivities(businessModel);
      expect(service.businessModel).toBe(0);

      businessModel = SearchType.COMMERCIAL_GALLERIES;
      service.getEconomicActivities(businessModel);
      expect(service.businessModel).toBe(1);

      businessModel = SearchType.LARGE_ESTABLISHMENTS;
      service.getEconomicActivities(businessModel);
      expect(service.businessModel).toBe(2);
      
    })

    test('getResults should assign value 0 in both arrays if length is equal to 0', () => {
      const businessModel: MyEnvironmentSearch = new LargeEstablishmentsSearch();
      businessModel.activities = [];
      businessModel.zones = [];
      service.getResults(businessModel);
      expect(service.activityIDs[0]).toBe(0);
      expect(service.zoneIDs[0]).toBe(0);
    });
  
    test('getResults should assign a value in both arrays if length is greater than 0', () => {
      const businessModel: MyEnvironmentSearch = new LargeEstablishmentsSearch();
      businessModel.activities = [new EconomicActivity()];
      businessModel.zones = [new Zone()];
      service.getResults(businessModel);
      expect(service.activityIDs.length).toBe(1);
      expect(service.zoneIDs.length).toBe(1);
    });
  
    test('getResults should select the correct option depending on which Business Model has been selected', () => {
      let businessModel: MyEnvironmentSearch = new LargeEstablishmentsSearch();
      businessModel.activities = [];
      businessModel.zones = [];
      service.getResults(businessModel);
      expect(service.activityIDs[0]).toBe(0);
      expect(service.zoneIDs[0]).toBe(0);
     
      businessModel = new BigMallsSearch();
      businessModel.activities = [];
      businessModel.zones = [];
      service.getResults(businessModel);
      expect(service.activityIDs[0]).toBe(0);
      expect(service.zoneIDs[0]).toBe(0);
     
      businessModel = new CommercialGalleriesSearch();
      businessModel.activities = [];
      businessModel.zones = [];
      service.getResults(businessModel);
      expect(service.activityIDs[0]).toBe(0);
      expect(service.zoneIDs[0]).toBe(0);
      
      businessModel = new MunicipalMarketsSearch();
      businessModel.activities = [];
      businessModel.zones = [];
      service.getResults(businessModel);
      expect(service.activityIDs[0]).toBe(0);
      expect(service.zoneIDs[0]).toBe(0);
  
      businessModel = new MarketsAndFairsSearch();
      businessModel.activities = [];
      businessModel.zones = [];
      service.getResults(businessModel);
      expect(service.activityIDs[0]).toBe(0);
      expect(service.zoneIDs[0]).toBe(0);
    });

  }); 
});
