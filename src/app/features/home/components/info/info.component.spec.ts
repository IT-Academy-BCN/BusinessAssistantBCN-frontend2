import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';
import { BreakpointService } from 'src/app/services/shared/breakpoint/breakpoint.service';

import { InfoComponent } from './info.component';

describe('InfoComponent', () => {

  let component: InfoComponent;
  let fixture: ComponentFixture<InfoComponent>;
  let breakpoint: BreakpointService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useClass: TranslateFakeLoader,
          },
        })
      ],
      
      providers: [BreakpointService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    breakpoint = TestBed.inject(BreakpointService)
    fixture = TestBed.createComponent(InfoComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Variables', ()=>{
    it('infoCard should be declared',()=>{
      expect(component.infoCard.length).toBe(3)
    })
    it('break should be declared',()=>{
      expect(component.break).toBe(3)
    })
    it('ratio should be declared',()=>{
      expect(component.ratio).toBe('350px')
    })
  })

  describe('Methods', ()=>{
    it('#ngOnInit call breakpointService',()=>{
      component.ngOnInit()
      expect(breakpoint.breakpoint$).toBeTruthy()
    })
    it('#ngOnInit should change the break variable',()=>{
      jest.spyOn(breakpoint, 'breakpoint$', 'get').mockReturnValue(of('XSmall','Small'))
      component.ngOnInit()
      expect(component.break).toBe(1)
    })
    it('#ngOnInit should reset the break anb ratio variable',()=>{
      jest.spyOn(breakpoint, 'breakpoint$' , 'get').mockReturnValue(of('Large', 'Medium', 'XLarge'))
      component.ngOnInit()
      expect(component.break).toBe(3)
      expect(component.ratio).toBe('350px')
    })
    
  })
});
