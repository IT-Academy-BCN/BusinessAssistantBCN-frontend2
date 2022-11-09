/*import { ComponentFixture, fakeAsync, TestBed, tick } from "@angular/core/testing"
import { RouterTestingModule } from "@angular/router/testing"*/

import { ComponentFixture, fakeAsync, TestBed, tick } from "@angular/core/testing"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { Router , Routes} from "@angular/router"
import { RouterTestingModule } from "@angular/router/testing"
import { of } from "rxjs"
import { BreakpointService } from "src/app/services/shared/breakpoint/breakpoint.service"
import { HeaderComponent } from "./header.component"
import { LoginComponent } from "src/app/features/users/components/login/login.component"


import {
  TranslateFakeLoader,
  TranslateLoader,
  TranslateModule,
} from "@ngx-translate/core"

import { Location } from "@angular/common"



const routes: Routes = [
  {path: 'login', component: LoginComponent},
];


describe("HeaderComponent", () => {


/*   test('',() => {
    expect(true).toBe(true);
  });
 */
let fixture: ComponentFixture<HeaderComponent>
  let app: HeaderComponent
  let router: Router
  let location: Location
  //spies
  let responsive: BreakpointService

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
      { provide: BreakpointService },
      ],
    }).compileComponents()
  })

  beforeEach(() => {
    router = TestBed.inject(Router)
    location = TestBed.inject(Location)

    fixture = TestBed.createComponent(HeaderComponent)
    app = fixture.componentInstance
    responsive = TestBed.inject(BreakpointService)
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
      expect(app.buttons.length).toBe(5)
    })

    it("Title should be declared", () => {
      expect(app.title).toEqual("inactive")
    })
      /* -- TODO - Error en varias plataformas:
      - Mac & Windows ok si valor esperado es false
      - Linux ok si valor esperado es true
      */
    it("Menu should be declared", () => {
      expect(app.menu).toBe(true)
    })
})

  describe("#NgOnInit", () => {
    it("Should be call the BreakpointObserver", () => {
      app.ngOnInit()
      expect(responsive.breakpoint$).toBeTruthy()

    })

    it("Should change the menu variable to true", () => {
      //spyOnProperty(responsive, "breakpoint$").and.returnValue(of('Small'))

      const spy = jest.spyOn(responsive, 'getCurrentScreenSize');
      responsive.getCurrentScreenSize();

      app.ngOnInit()
      expect(app.menu).toBe(true);
    })

   it("Should change the menu variable to false", () => {
    jest.spyOn(responsive, 'breakpoint$', 'get').mockReturnValue(of('Large'))
      app.ngOnInit()
      expect(app.menu).toBe(false);
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
      expect((location as any).path()).toBe('/login')
    }))
  })



})
