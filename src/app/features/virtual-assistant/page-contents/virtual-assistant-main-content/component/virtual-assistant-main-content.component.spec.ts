import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { BreakpointService } from 'src/app/services/shared/breakpoint/breakpoint.service';
import { of } from 'rxjs';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VirtualAssistantMainContentComponent } from './virtual-assistant-main-content.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('VirtualAssistantMainContentComponent', () => {

    let component: VirtualAssistantMainContentComponent;
    let fixture: ComponentFixture<VirtualAssistantMainContentComponent>;


    const fakeBreakpointSrvMock = {
        breakpoint$: of({} as any),
        getCurrentScreenSize: jest.fn()
      }
    
    const fakeDialogMock = {
      open: jest.fn()
    }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatDialogModule
      ],
      providers: [
          {provide: BreakpointService, useValue: fakeBreakpointSrvMock},
          {provide: MatDialog, useValue: fakeDialogMock}
      ],
      schemas: [ NO_ERRORS_SCHEMA],
      declarations: [
        VirtualAssistantMainContentComponent,
   
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(VirtualAssistantMainContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create the app', () => {

    expect(component).toBeTruthy();
  });

  it('getDataFromAccordian should update dataShared',() => {
   
    component.getDataFromAccordion(["sampleData"]);
 
    expect(component.dataShared).toEqual(['sampleData']);
  })

  it('getDataFromAccordian should modify currentSelections',() => {
   
    component.getDataFromAccordion(["sampleData"]);
 
    expect(component.dataShared).toEqual(['sampleData']);
  })

  it('Dialog should open upon clicking ResumeButton',() => {
   
    component.onClickResumeButton();

    const spy = jest.spyOn(fakeDialogMock, 'open');
    expect(spy).toHaveBeenCalled();
  })

  it('Dialog should open upon clicking SaveButton',() => {
   
    component.onClickSaveButton();

    const spy = jest.spyOn(fakeDialogMock, 'open');
    expect(spy).toHaveBeenCalled();
  })

});