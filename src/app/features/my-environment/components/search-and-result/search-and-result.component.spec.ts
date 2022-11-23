import { CommonService } from 'src/app/services/common/common.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyEnvironmentService } from '../../services/my-environment.service';
import { SearchAndResultComponent } from './search-and-result.component';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { of } from 'rxjs';


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
      declarations: [ SearchAndResultComponent ],
      providers: [
        MyEnvironmentService
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchAndResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    myEnvSrv = TestBed.inject(MyEnvironmentService);
    commonSrv = TestBed.inject(CommonService)
    fixture = TestBed.createComponent(SearchAndResultComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Variables', ()=>{
    it('title should be declared',()=>{
      expect(component.title).toBe('')
    })
  })

  describe('Methods', ()=>{
    it('#ngOnInit if user selects Big Malls, the search Type should be Big Malls Search',()=>{
      component.title = 'common.button.mall'
      component.ngOnInit()
      expect(component.bussinesModelSearch.searchType).toBe(0)
    })

    it('#ngOnInit Zones should be loaded', (() => {
      const response: any = [];
      const spy = jest.spyOn(commonSrv, 'getZones');
      fixture.detectChanges();
      expect(spy).toHaveBeenCalledTimes(1);
      //expect(component.zones.length).toBeGreaterThan(0);
    })
    );
  })
});
