import { EconomicActivity } from 'src/app/shared/models/common/economic-activity.model';
import { BigMallsSearch, CommercialGalleriesSearch, LargeEstablishmentsSearch, MunicipalMarketsSearch } from './../../../../shared/models/my-environment-search/my-environment-search.model';
import { MarketsAndFairsSearch } from 'src/app/shared/models/my-environment-search/my-environment-search.model';
import { CommonService } from 'src/app/services/common/common.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyEnvironmentService } from '../../services/my-environment.service';
import { SearchAndResultComponent } from './search-and-result.component';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { CommonTestingService } from 'src/test/common.service.testing';
import { MyEnvironmentTestingService } from 'src/test/my-environment.service.testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';
import { Zone } from 'src/app/shared/models/common/zone.model';

describe('SearchAndResultComponent', () => {
  let component: SearchAndResultComponent;
  let fixture: ComponentFixture<SearchAndResultComponent>;
  let myEnvSrv: MyEnvironmentService;
  let commonSrv: CommonService;
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
        { provide: CommonService, useClass: CommonTestingService },
        { provide: MyEnvironmentService, useClass: MyEnvironmentTestingService }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    myEnvSrv = TestBed.inject(MyEnvironmentService);
    commonSrv = TestBed.inject(CommonService);
    fixture = TestBed.createComponent(SearchAndResultComponent);
    component = fixture.componentInstance;
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Variables', () => {
    test('title should be declared', () => {
      expect(component.title).toBe('')
    })
  })

  describe('Methods', () => {
    test('#ngOnInit if user selects Big Malls, the search Type should be Big Malls Search', () => {
      component.title = 'common.button.mall'
      component.ngOnInit()
      expect(component.businessModelSearch.searchType).toBe(0)
    })

    test('#ngOnInit Zones should be loaded', (() => {
      const spy = jest.spyOn(commonSrv, 'getZones');
      fixture.detectChanges();
      expect(spy).toHaveBeenCalledTimes(1);
    })
    );

    test('#ngOnInit should not call getAllActivities method if Business Model is greater than 2', (() => {
      component.businessModel = 3;
      const spy = jest.spyOn(myEnvSrv, 'getEconomicActivities');
      fixture.detectChanges();
      expect(spy).toHaveBeenCalledTimes(0);
    })
    );

    test('#ngOnInit should call getAllActivities method if Business Model is less than or equal to 2', (() => {
      component.businessModel = 2;
      const spy = jest.spyOn(component, 'getAllActivities');
      fixture.detectChanges();
      expect(spy).toHaveBeenCalledTimes(1);
    })
    );

    test('defineSearchType should create an instance depending on the option selected', () => {
      let option = 'common.button.mall'
      component.defineSearchType(option);
      expect(component.businessModelSearch).toBeInstanceOf(BigMallsSearch);
      option = 'common.button.gallery-market'
      component.defineSearchType(option);
      expect(component.businessModelSearch).toBeInstanceOf(CommercialGalleriesSearch);
      option = 'common.button.big-stablish'
      component.defineSearchType(option);
      expect(component.businessModelSearch).toBeInstanceOf(LargeEstablishmentsSearch);
      option = 'common.button.market-fair'
      component.defineSearchType(option);
      expect(component.businessModelSearch).toBeInstanceOf(MarketsAndFairsSearch);
      option = 'common.button.public-market'
      component.defineSearchType(option);
      expect(component.businessModelSearch).toBeInstanceOf(MunicipalMarketsSearch);
    });

    test('getZones should return an array of 10 elements', () => {
      jest.spyOn(commonSrv, 'getZones');
      component.getAllZones();
      expect(component.zones.length).toBe(10);
    });

    test('getZones should return the data of the 9th element in the list', () => {
      jest.spyOn(commonSrv, 'getZones');
      component.getAllZones();
      expect(component.zones[8].idZone).toBe(9);
      expect(component.zones[8].zoneName).toBe('Sant Andreu');
    });

    test('getAllActivities should return the exact number of results depending on the Business Model selected ', () => {
      jest.spyOn(myEnvSrv, 'getEconomicActivities');
      component.businessModel = 0;
      component.getAllActivities();
      expect(component.activities.length).toBe(49);

      component.businessModel = 1;
      component.getAllActivities();
      expect(component.activities.length).toBe(3);

      component.businessModel = 2;
      component.getAllActivities();
      expect(component.activities.length).toBe(100);
    });

    test('getAllActivities should return the data of the 72th element in the list', () => {
      jest.spyOn(myEnvSrv, 'getEconomicActivities');
      component.businessModel = 2;
      component.getAllActivities();
      expect(component.activities[72].activityId).toBe(104799);
      expect(component.activities[72].activityName).toBe('Ordinadors');
    });

    test('goToResult should return an array of 1 element if business model is Markets and Fairs', () => {
      jest.spyOn(myEnvSrv, 'getResults');
      component.businessModelSearch = new MarketsAndFairsSearch();
      component.goToResult();
      expect(component.searchResults.length).toBe(1);
    });

    test('goToResult should return an array of 1 element if business model is Municipal Markets', () => {
      jest.spyOn(myEnvSrv, 'getResults');
      component.businessModelSearch = new MunicipalMarketsSearch();
      component.goToResult();
      expect(component.searchResults.length).toBe(1);
    });

    test('goToResult should return the data of the 1st element in the Municipal Markets list', () => {
      jest.spyOn(myEnvSrv, 'getResults');
      component.businessModelSearch = new MunicipalMarketsSearch();
      component.goToResult();
      expect(component.searchResults[0].name).toBe('Mercat de Les Corts');
      expect(component.searchResults[0].email).toBe('mercatlescorts@bcn.cat');
      expect(component.searchResults[0].phone).toBe('667570336,934132318');
    });

    test('goToResult should return the data of the second element in the Large Establishments list', () => {
      jest.spyOn(myEnvSrv, 'getResults');
      component.businessModelSearch = new LargeEstablishmentsSearch();
      component.goToResult();
      expect(component.searchResults[1].name).toBe('Pompadour Ibérica S.A.');
      expect(component.searchResults[1].web).toBe('https://www.pompadour.es');
      expect(component.searchResults[1].email).toBe(null);
      expect(component.searchResults[1].phone).toBe(null);
    });

    test('goToResult should return the name of the second element in the list', () => {
      jest.spyOn(myEnvSrv, 'getResults').mockReturnValue(of({
        results: [
          { name: 'Mercat de La Concepció' },
          { name: 'Mercat del Ninot' }
        ]
      }));
      component.businessModelSearch = new MunicipalMarketsSearch();
      component.goToResult();
      expect(component.searchResults[1].name).toBe("Mercat del Ninot");
    });

    test('checkZones should add element if event is true', () => {
      let event = false;
      component.checkZones(new Zone(), event);
      expect(component.selectedZones.length).toBe(0);

      event = true;
      component.checkZones(new Zone(), event);
      expect(component.selectedZones.length).toBe(1);
    });

    test('checkActivities should add element if event is true', () => {
      let event = false;
      component.checkActivities(new EconomicActivity(), event);
      expect(component.selectedActivities.length).toBe(0);

      event = true;
      component.checkActivities(new EconomicActivity(), event);
      expect(component.selectedActivities.length).toBe(1);
    });
  });
});
