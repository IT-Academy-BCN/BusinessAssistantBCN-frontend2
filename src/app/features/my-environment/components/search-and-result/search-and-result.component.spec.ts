import { MunicipalMarketsSearch } from './../../../../shared/models/my-environment-search/my-environment-search.model';
import { MarketsAndFairsSearch } from 'src/app/shared/models/my-environment-search/my-environment-search.model';
import { CommonService } from 'src/app/services/common/common.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyEnvironmentService } from '../../services/my-environment.service';
import { SearchAndResultComponent } from './search-and-result.component';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { CommonTestingService } from 'src/test/common.service.testing';
import { MyEnvironmentTestingService } from 'src/test/my-environment.service.testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';

describe('SearchAndResultComponent', () => {
  let component: SearchAndResultComponent;
  let fixture: ComponentFixture<SearchAndResultComponent>;
  let httpMock: HttpTestingController;
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
    fixture = TestBed.createComponent(SearchAndResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    myEnvSrv = TestBed.inject(MyEnvironmentService);
    commonSrv = TestBed.inject(CommonService);
    // httpMock = TestBed.inject(HttpTestingController);
    fixture = TestBed.createComponent(SearchAndResultComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Variables', () => {
    it('title should be declared', () => {
      expect(component.title).toBe('')
    })
  })

  describe('Methods', () => {
    it('#ngOnInit if user selects Big Malls, the search Type should be Big Malls Search', () => {
      component.title = 'common.button.mall'
      component.ngOnInit()
      expect(component.businessModelSearch.searchType).toBe(0)
    })

    it('#ngOnInit Zones should be loaded', (() => {
      const response: any = [];
      const spy = jest.spyOn(commonSrv, 'getZones');
      fixture.detectChanges();
      expect(spy).toHaveBeenCalledTimes(1);
    })
    );

    it('getZones should return an array of 10 elements', () => {
      // jest.spyOn(commonSrv, 'getZones').mockReturnValue(of());
      jest.spyOn(commonSrv, 'getZones');
      component.getAllZones();
      expect(component.zones.length).toBe(10);
    });

    it('getAllActivities should return an array of 3 elements if businessModel is 1', () => {
      jest.spyOn(myEnvSrv, 'getEconomicActivities');
      component.businessModel = 1;
      component.getAllActivities();
      expect(component.activities.length).toBe(3);
    });

    it('getAllActivities should return an array of 100 elements if businessModel is 2', () => {
      jest.spyOn(myEnvSrv, 'getEconomicActivities');
      component.businessModel = 2;
      component.getAllActivities();
      expect(component.activities.length).toBe(100);
    });

    it('goToResult should return an array of 1 element if business model is Markets and Fairs', () => {
      jest.spyOn(myEnvSrv, 'getResults');
      component.businessModelSearch = new MarketsAndFairsSearch();
      component.goToResult();
      expect(component.searchResults.length).toBe(1);
    });

    it('goToResult should return an array of 1 element if business model is Municipal Markets', () => {
      jest.spyOn(myEnvSrv, 'getResults');
      component.businessModelSearch = new MunicipalMarketsSearch();
      component.goToResult();
      expect(component.searchResults.length).toBe(1);
    });

    it('goToResult should return the name of the second element', () => {
      jest.spyOn(myEnvSrv, 'getResults').mockReturnValue(of({
        results: [
          {name: 'Mercat de La Concepció'}, 
          {name: 'Mercat del Ninot'}
        ]
      }));
      component.businessModelSearch = new MunicipalMarketsSearch();
      component.goToResult();
      expect(component.searchResults[1].name).toBe("Mercat del Ninot");
    });
  });
});
