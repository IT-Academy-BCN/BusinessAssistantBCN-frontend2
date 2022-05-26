import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing"

import { FooterComponent } from './footer.component';
import {
  BreakpointObserver,
  BreakpointState,
} from "@angular/cdk/layout"
import {
  TranslateFakeLoader,
  TranslateLoader,
  TranslateModule,
} from "@ngx-translate/core"
import { Observable, of } from "rxjs"
import { MatGridListModule } from '@angular/material/grid-list';
import { Injectable } from '@angular/core';
import { BabcnContainerModule } from 'src/app/shared/components/babcn-container/babcn-container.module';


@Injectable() class MockBreakpointObserver extends BreakpointObserver {
  
  override observe(): Observable<BreakpointState> {
    return of({
      matches: true,
      breakpoints: {
        "XSmall": false,
        "Small": true,
      }
    })
  }
  //override ngOnDestroy(): void {}
}

describe("FooterComponent", () => {
  let app: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  let responsive: BreakpointObserver;

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
        { provide: BreakpointObserver, useClass: MockBreakpointObserver },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();
    responsive = TestBed.inject(BreakpointObserver);
    
  });

  it('should create the footer', () => {
    expect(app).toBeTruthy();
  });

  describe('#ngOnInit', () => {
    it('Should be call the BreakPointObserver', () => {
      spyOn(responsive, "observe").and.callThrough();
      app.ngOnInit();
      expect(responsive.observe).toHaveBeenCalled();
    });
  });

  describe('#breakpoint', () => {
    it('Should get cols', () => {
      expect(app.breakpoint).toEqual(0);
    });
  });

  describe('#ratio', () => {
    it('Should get col_height', () => {
      expect(app.ratio).toEqual("70px");
    });
  });

  describe('#ngOnDestroy', () => {
    it('Should reset the resposive breakpoint', () => {
      app.ngOnDestroy();
      expect(responsive.ngOnDestroy()).toBeUndefined();
    })
  });
});