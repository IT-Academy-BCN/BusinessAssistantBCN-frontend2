import { BreakpointService } from 'src/app/services/shared/breakpoint/breakpoint.service';
import { BigMallsSearch } from 'src/app/shared/models/my-environment-search/my-environment-search.model';
import { CommonService } from '../../../../services/common/common.service';
import { of} from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyEnvironmentService } from '../../services/my-environment.service';
import { SearchAndResultComponent } from './search-and-result.component';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';




describe('SearchAndResultComponent', () => {
  let component: SearchAndResultComponent;
  let fixture: ComponentFixture<SearchAndResultComponent>;
  let expCommonResponse: any;
  let expMyEnvResponse: any;
  let expGetResultsResponse: any;
  let expBreakpointResponse: string;

  
  const fakeCommonSrvMock = {
    getZones: jest.fn()
  }

  const fakeEnvSrvMock = {
      getEconomicActivities: jest.fn(),
      getResults: jest.fn()
  }

  const fakeBreakpointSrvMock = {
        getCurrentScreenSize: jest.fn(),
        breakpoint$: jest.fn()
  }

  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useClass: TranslateFakeLoader,
        },
      }),],
      declarations: [SearchAndResultComponent],
      providers: [
        {provide: CommonService, useValue: fakeCommonSrvMock},
        {provide: MyEnvironmentService, useValue: fakeEnvSrvMock},
      //  {provide: BreakpointService, useValue: fakeBreakpointSrvMock}
      ]
     })
     .compileComponents();
  
     fixture = TestBed.createComponent(SearchAndResultComponent);
     component = fixture.componentInstance;
     expCommonResponse = {
      count: 10,
      limit: 0,
      offset: 0,
      elements: [{idZone:1, zoneName: 'Cuitat Vella'}]
    };

    expMyEnvResponse = {
      count: 52,
      limit: 0,
      offset: 0,
      results: [{idActivity: 105001, activityName: 'Accessible per a persones amb discapacitat física'}]
    }

    expGetResultsResponse = {
      count: 27,
      limit: 0,
      offset: 0,
      results: [{activities: [],
         addresses: [],
         email: "",
         phone: null,
         web: "https://www.google.com/"

      }]
    }

    expBreakpointResponse = 'Medium'

   
     jest.spyOn(fakeCommonSrvMock, 'getZones').mockReturnValue(of(expCommonResponse));
     jest.spyOn(fakeEnvSrvMock, 'getEconomicActivities').mockReturnValue(of(expMyEnvResponse));
     jest.spyOn(fakeEnvSrvMock, 'getResults').mockReturnValue(of(expGetResultsResponse));
     //TO TEST
     jest.spyOn(fakeBreakpointSrvMock, 'getCurrentScreenSize').mockReturnValue(of(expBreakpointResponse));
     jest.spyOn(fakeBreakpointSrvMock, 'breakpoint$').mockReturnValue(of(""))
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Init: If user selects Big Malls, the search Type should be Big Malls Search',()=>{
    component.title = 'common.button.mall'
    component.ngOnInit()
    expect(component.bussinesModelSearch.searchType).toBe(0)
  })

  it('Init: If user selects Commercial Galleries, the search Type should be Commercial Galleries Search',()=>{
    component.title = 'common.button.gallery-market'
    component.ngOnInit()
    expect(component.bussinesModelSearch.searchType).toBe(1)
  })

  it('Init: If user selects Big Establishment, the search Type should be Big Establishment Search',()=>{
    component.title = 'common.button.big-stablish'
    component.ngOnInit()
    expect(component.bussinesModelSearch.searchType).toBe(2)
  })

  it('Init: If user selects Market Fair, the search Type should be Market Fair Search',()=>{
    component.title = 'common.button.market-fair'
    component.ngOnInit()
    expect(component.bussinesModelSearch.searchType).toBe(3)
  })

  it('Init: If user selects Public Market, the search Type should be Municipial Market Search',()=>{
    component.title = 'common.button.public-market'
    component.ngOnInit()
    expect(component.bussinesModelSearch.searchType).toBe(4)
  })

  it('Init: should load the zones',() => {
   
    component.ngOnInit();
    expect(component.zones.indexOf(expCommonResponse.elements[0])).toBeGreaterThanOrEqual(0);
  })

  it('Init: should load the activities',() => {
 
    component.ngOnInit();
    expect(component.activities.indexOf(expMyEnvResponse.results[0])).toBeGreaterThanOrEqual(0);
  })

  it('When user selects a zone this selected zone should be added to selectedZones Array ',() => {
    
    const addedZone = {idZone:2, zoneName: 'Eixample'}
    component.checkZones(addedZone, true);
    expect(component.selectedZones.indexOf( addedZone)).toBeGreaterThanOrEqual(0);
  })

  it('If a user selects a zone already in the selectedZones array, then this zone should be removed from selectedZones',() => {
    
    const addedZone = {idZone:2, zoneName: 'Eixample'}
    component.checkZones(addedZone, true);
    component.checkZones(addedZone, false);
    expect(component.selectedZones.indexOf( addedZone)).toBeLessThan(0);
  })

  it('When user selects an activity this selected activity should be added to selectedActivities Array ',() => {
    
    const addedActivity = {idActivity: 105001, activityName: 'Accessible per a persones amb discapacitat física'};
    component.checkActivities(addedActivity, true);
    expect(component.selectedActivities.indexOf( addedActivity)).toBeGreaterThanOrEqual(0);
  });

  it('When user selects an activity already in the selected activities Array, this activity should be removed from the selectedActivities Array ',() => {
    
    const addedActivity = {idActivity: 105001, activityName: 'Accessible per a persones amb discapacitat física'};
    component.checkActivities(addedActivity, true);
    component.checkActivities(addedActivity, false);
    expect(component.selectedActivities.indexOf( addedActivity)).toBeLessThan(0);
  });

  it('If a user clicks "Search" button, showResults should become true',() => {

    const businessModelSearch = new BigMallsSearch;
    component.goToResult(businessModelSearch);
    expect(component.showResults).toBeTruthy();
  })

  // it('If screen size is medium, the ratio should be 420px ',() => {

  //   expect(component.ratio).toContain('420px');
  // })

});
