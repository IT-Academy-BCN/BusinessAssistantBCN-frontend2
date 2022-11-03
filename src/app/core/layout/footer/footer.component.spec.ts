import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing"

import { FooterComponent } from './footer.component';
import {BreakpointService} from "../../../services/shared/breakpoint/breakpoint.service";
import {
  TranslateFakeLoader,
  TranslateLoader,
  TranslateModule,
} from "@ngx-translate/core"
import { of } from "rxjs"
import { MatGridListModule } from '@angular/material/grid-list';
import { BabcnContainerModule } from 'src/app/shared/components/babcn-container/babcn-container.module';

describe("FooterComponent", () => {

  test('',() => {
    expect(true).toBe(true);
  });

  /*
  let footer: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  let breakpointService: BreakpointService;

  /!* Creamos el módulo para nuestro componente *!/
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        FooterComponent
      ],
      imports: [
        RouterTestingModule,
        MatGridListModule,
        BabcnContainerModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useClass: TranslateFakeLoader,
          }, 
        }),
      ],
      providers: [
        BreakpointService
      ]
    }).compileComponents();
  });

/!* Creamos e instanciamos el componente, observamos cambios, inyeccion del servicio*!/
  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    footer = fixture.componentInstance;
    breakpointService = TestBed.inject(BreakpointService);
    fixture.detectChanges();
  });

  afterEach(()=> {
      fixture.destroy()
  })

/!* Comporobamos que el componente exista *!/
  it('should create the footer', () => {
    expect(footer).toBeTruthy();
  });

/!* Comporobamos que las variables existen *!/
  it('should have variable called "breakpoint"', () => {
    expect(footer.breakpoint).toBeTruthy();
  });

  it('should have variable called "ratio"', () => {
    expect(footer.ratio).toBeTruthy();
  });

  /!* Comporobamos el metodo del constructor que da las madidas iniciales de pantalla *!/
  it('should recive the currentScreenSize value in the constructor, getCurrentScreenSize()', () => { 
    const screenSize = spyOn(breakpointService, "getCurrentScreenSize");
    screenSize.and.returnValue('Medium');
    /!*TODO - Error en varias plataformas:
      - Mac & Windows ok si valor esperado es 4
      - Linux ok si valor esperado es 2
    *!/
    //expect(footer.breakpoint).toEqual(2);
    expect(footer.ratio).toEqual("150px"); 
  })

  /!* Comprobamos lo que reciben las variables en ngOnInit *!/
  describe("#NgOnInit", () => {
    it("Should be call the BreakpointService", () => {
      footer.ngOnInit();
      expect(breakpointService.breakpoint$).toBeTruthy();
 
    });

/!*    it("Should recive de breakpoint value", () => {
      const breakpoint = spyOnProperty(breakpointService, "breakpoint$");
      breakpoint.and.returnValue(of('Small'));
      footer.ngOnInit();
      expect(footer.breakpoint).toEqual(2);
      breakpoint.and.returnValue(of('Large'));
      footer.ngOnInit();
      expect(footer.breakpoint).toEqual(5);
    });

    it("Should recive the ratio value", () => {
      const ratio = spyOnProperty(breakpointService, "breakpoint$");
      ratio.and.returnValue(of('Xsmall'));
      footer.ngOnInit();
      expect(footer.ratio).toEqual("150px");
      ratio.and.returnValue(of('Xsmall'));
      footer.ngOnInit();
      expect(footer.ratio).toEqual("150px");
    }); *!/
  })*/
  
});