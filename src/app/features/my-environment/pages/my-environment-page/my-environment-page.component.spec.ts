import { Location } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Router, Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { MyEnvironmentService } from '../../services/my-environment.service';
import { MyEnvironmentSearchComponent } from '../my-environment-search/my-environment-search.component';

import { MyEnvironmentPageComponent } from './my-environment-page.component';

const routes: Routes = [
  {path: 'my-environment-search', component: MyEnvironmentSearchComponent},
];


describe('MyEnvironmentPageComponent', () => {

 /*  test('',() => {
    expect(true).toBe(true);
  });
 */
  const { scroll } = window;

  beforeAll(() => {

    window.scroll = jest.fn();
  });

  afterAll(() => {
    window.scroll = scroll;
  });


  let component: MyEnvironmentPageComponent;
  let fixture: ComponentFixture<MyEnvironmentPageComponent>;
  
  let myEnvSrv: MyEnvironmentService
  
  let router: Router
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        MyEnvironmentPageComponent,
      ],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [
        RouterTestingModule.withRoutes(routes),
        HttpClientTestingModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useClass: TranslateFakeLoader,
          },
        }),
      ],
      providers: [
        MyEnvironmentService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {

  
    router = TestBed.inject(Router)
    location = TestBed.inject(Location)
    fixture = TestBed.createComponent(MyEnvironmentPageComponent);
    myEnvSrv = TestBed.inject(MyEnvironmentService)
    component = fixture.componentInstance;
    fixture.detectChanges()
    router.initialNavigation()
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  describe('Variables', ()=>{
    it('buttons shoul be declared', ()=>{
      expect(component.buttons.length).toBe(5)
    })
  })

  describe('Methods', ()=>{
    it('#goToSearch shoul navigate to "my-environment-search"', fakeAsync(()=>{
      component.goToSearch(0)
      router.navigate(['my-environment-search'])
      tick()
      expect(location.path()).toBe('/my-environment-search')
    }))

    it('#goToSearch shoul change title of MyEnvironmentService', ()=>{
      component.goToSearch(0)
      expect(myEnvSrv.title).toBe('common.button.mall')
      component.goToSearch(1)
      expect(myEnvSrv.title).toBe('common.button.gallery-market')
      component.goToSearch(2)
      expect(myEnvSrv.title).toBe('common.button.big-stablish')
      component.goToSearch(3)
      expect(myEnvSrv.title).toBe('common.button.market-fair')
      component.goToSearch(4)
      expect(myEnvSrv.title).toBe('common.button.public-market')
    })
  })

  

});
