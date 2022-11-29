import { Location } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Router, Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { MyEnvironmentService } from '../../services/my-environment.service';
import { MyEnvironmentResultComponent } from '../my-environment-result/my-environment-result.component';

import { MyEnvironmentSearchComponent } from './my-environment-search.component';
import { MyEnvironmentSearch, SearchType } from '../../../../shared/models/my-environment-search/my-environment-search.model';

const routes: Routes = [
  {path: 'my-environment-result', component: MyEnvironmentResultComponent}
]

describe('MyEnvironmentSearchComponent', () => {

  let component: MyEnvironmentSearchComponent;
  let fixture: ComponentFixture<MyEnvironmentSearchComponent>;
  let myEnvSrv: MyEnvironmentService
  let businessModelSearch:MyEnvironmentSearch

  let router: Router
  let location: Location

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      
      declarations: [ MyEnvironmentSearchComponent ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes(routes),
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useClass: TranslateFakeLoader,
          },
        })
      ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        MyEnvironmentService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    router = TestBed.inject(Router)
    location = TestBed.inject(Location)
    myEnvSrv = TestBed.inject(MyEnvironmentService)
    fixture = TestBed.createComponent(MyEnvironmentSearchComponent);
    component = fixture.componentInstance;
    
    
    router.initialNavigation()
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Variables', ()=>{
    it('title should be declared',()=>{
      expect(component.title).toBe('')
    })
  })

  // describe('Methods', ()=>{
  //   it('#ngOnInit should change title variable',()=>{
  //     let newTitle = myEnvSrv.title
  //     component.ngOnInit()
  //     expect(component.title).toBe(newTitle)
  //   })
  //   it('#goToResult should navigate to my-environment-result', fakeAsync(()=>{
  //     component.goToResult(businessModelSearch)
  //     router.navigate(['my-environment-result'])
  //     tick()
  //     expect(location.path()).toBe('/my-environment-result')
  //   }))
  // })
});
