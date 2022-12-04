import { MyEnvironmentSearch, LargeEstablishmentsSearch } from 'src/app/shared/models/my-environment-search/my-environment-search.model';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { MyEnvironmentService } from './my-environment.service';
import { EconomicActivity } from 'src/app/shared/models/common/economic-activity.model';
import { Zone } from 'src/app/shared/models/common/zone.model';


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

  test('Method getResults', () => {
    // jest.setTimeout(60000000);
    let businessModelSearch: MyEnvironmentSearch;
    businessModelSearch = new LargeEstablishmentsSearch();
    businessModelSearch.searchType = 3;
    // const ea = new EconomicActivity();
    // ea.activityId = 1;
    // ea.activityName = 'Name';
    // const ea2 = new EconomicActivity();
    // ea2.activityId = 2;
    // ea2.activityName = 'Name 2';
    const activities: EconomicActivity[] = [];
    // activities.push(ea);
    // activities.push(ea2);
    const zones: Zone[] = [];
    
    businessModelSearch.zones = zones;
    businessModelSearch.activities = activities;
    
    service.getResults(businessModelSearch).subscribe( data => {
      
      
    });
  
    
  })

  
});
