import { ComponentFixture, fakeAsync, TestBed, tick } from "@angular/core/testing"
import { RouterTestingModule } from "@angular/router/testing"

import { HeaderComponent } from "./header.component"
import { LoginComponent } from "src/app/features/users/components/login/login.component"

import {
  BreakpointObserver,
  BreakpointState,
} from "@angular/cdk/layout"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import {
  TranslateFakeLoader,
  TranslateLoader,
  TranslateModule,
} from "@ngx-translate/core"
import { Observable, of } from "rxjs"
import { Router, Routes } from "@angular/router"
import { Location } from "@angular/common"


class MockBreakpointObserver extends BreakpointObserver {
  override observe(): Observable<BreakpointState> {
    return of({
      matches: true,
      breakpoints: {
        "(max-width: 599.98px)": false,
        "(min-width: 600px) and (max-width: 959.98px)": true,
      }

    })
  }
  override ngOnDestroy(): void {}
}

const routes: Routes = [
  {path: 'login', component: LoginComponent},
];


describe("HeaderComponent", () => {
  let fixture: ComponentFixture<HeaderComponent>
  let app: HeaderComponent
  let router: Router
  let location: Location
  //spies
  let responsive: BreakpointObserver

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [
        RouterTestingModule,
        BrowserAnimationsModule,
        RouterTestingModule.withRoutes(routes),
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useClass: TranslateFakeLoader,
          },
        }),
      ],
      providers: [
        { provide: BreakpointObserver, useClass: MockBreakpointObserver },
      ],
    }).compileComponents()
  })

  beforeEach(() => {
    router = TestBed.inject(Router)
    location = TestBed.inject(Location)
    
    fixture = TestBed.createComponent(HeaderComponent)
    app = fixture.componentInstance
    responsive = TestBed.inject(BreakpointObserver)
    router.initialNavigation()
  })

  afterEach(()=> {
      fixture.destroy()
  })

  it("Should be created", () => {
    expect(app).toBeTruthy()
  })

  describe("Variables", () => {
    it("Buttons Should be declared", () => {
      expect(app.buttons.navigate.length).toBe(5)
    })

    it("Title should be declared", () => {
      expect(app.title).toEqual("inactive")
    })
    it("Menu should be declared", () => {
      expect(app.menu).toBe(false)
    })
  })

  describe("#NgOnInit", () => {
    it("Should be call the BreakpointObserver", () => {
      spyOn(responsive, "observe").and.callThrough()
      app.ngOnInit()
      expect(responsive.observe).toHaveBeenCalled()
 
    })

    it("Should change the menu variable to true", () => {
      spyOn(responsive, "observe").and.callThrough()
      app.ngOnInit()
      expect(app.menu).toBeTrue()
    })

    it("Should change the menu variable to false", () => {
        const mockResponse = {
            matches: false,
            breakpoints: {
              "(max-width: 599.98px)": false,
              "(min-width: 600px) and (max-width: 959.98px)": false,
            }
          }
      spyOn(responsive, "observe").and.returnValue(of(mockResponse))
      app.ngOnInit()
      expect(app.menu).toBeFalse()
    })   
  })

  describe('#ngOnDestroy', () => {
    it('Should reset the responsive breakpoint', () => {
        app.ngOnDestroy()
        expect(responsive.ngOnDestroy()).toBeUndefined()
    })
  })

  describe('#toggleTitle', () => {
    it('Should toggle title variable', () => {
        app.toggleTitle()
        expect(app.title).toEqual('active')
        app.toggleTitle()
        expect(app.title).toEqual('inactive')
    })
  })

  describe('#goToLink', () => {
    it('Should go to login page', fakeAsync(() => {
      app.goToLink(4)
      router.navigate(['login'])
      tick()
      expect(location.path()).toBe('/login')
    }))
  })



})
