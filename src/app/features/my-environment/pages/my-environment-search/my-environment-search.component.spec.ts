import { Location } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { MatGridListModule, MatGridTile } from '@angular/material/grid-list';
import { Router, Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { BabcnContainerModule } from 'src/app/shared/components/babcn-container/babcn-container.module';
import { BabcnTitleModule } from 'src/app/shared/components/babcn-title/babcn-title.module';
import { BabcnTreeModule } from 'src/app/shared/components/babcn-tree/babcn-tree.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MyEnvironmentService } from '../../services/my-environment.service';
import { MyEnvironmentResultComponent } from '../my-environment-result/my-environment-result.component';

import { MyEnvironmentSearchComponent } from './my-environment-search.component';
import { MyEnvironmentSearch, SearchType } from '../../../../shared/models/my-environment-search/my-environment-search.model';
import { EventListenerFocusTrapInertStrategy } from '@angular/cdk/a11y';

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

  describe('Methods', ()=>{
    it('#ngOnInit should change title variable',()=>{
      let newTitle = myEnvSrv.title
      component.ngOnInit()
      expect(component.title).toBe(newTitle)
    })
    it('#goToResult should navigate to my-environment-result', fakeAsync(()=>{
      component.goToResult(businessModelSearch)
      router.navigate(['my-environment-result'])
      tick()
      expect(location.path()).toBe('/my-environment-result')
    }))
  })
});
