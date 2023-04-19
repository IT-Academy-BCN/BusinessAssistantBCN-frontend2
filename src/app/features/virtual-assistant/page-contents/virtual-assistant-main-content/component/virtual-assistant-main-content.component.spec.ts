import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { BreakpointService } from 'src/app/shared/services/breakpoint/breakpoint.service';
import { of } from 'rxjs';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VirtualAssistantMainContentComponent } from './virtual-assistant-main-content.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CommonService } from '../../../../../shared/services/common.service';
import { Zones } from '../../../../../shared/models/common/zones.model';
import { VirtualAssistantSelectionsService } from '../../../services/virtual-assistant-selections.service';



describe('VirtualAssistantMainContentComponent', () => {
  
  let component: VirtualAssistantMainContentComponent;
  let fixture: ComponentFixture<VirtualAssistantMainContentComponent>;
  
  const listZones: Zones = {
    count: 3,
    elements: [
      { idZone: 1, zoneName: "Zone 1" },
      { idZone: 2, zoneName: "Zone 2" },
      { idZone: 3, zoneName: "Zone 3" },]
  }
  const ZonesServiceMock = {
    getZones: () => of(listZones)
  }

  const fakeBreakpointSrvMock = {
    breakpoint$: of({} as any),
    getCurrentScreenSize: jest.fn()
  }

  const fakeDialogMock = {
    open: jest.fn()
  }

  const fakeVaSelectionServiceMock = {
    setSelections: jest.fn(),
    selections  : {
      userID: 0,
      content: [{'test':'test'},{'test':'test'},{'test':'test'}]
    },
    items : [{'test':'test'},{'test':'test'},{'test':'test'}]
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatDialogModule,
        HttpClientTestingModule
      ],
      providers: [
        { provide: BreakpointService, useValue: fakeBreakpointSrvMock },
        { provide: MatDialog, useValue: fakeDialogMock },
        { provide: CommonService, useValue: ZonesServiceMock },
        { provide: VirtualAssistantSelectionsService, useValue: fakeVaSelectionServiceMock }



      ],
      schemas: [NO_ERRORS_SCHEMA],
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


  it('should set dataShared info', () => {
    component.ngOnInit()
    // ServiceMock data content is 6 elements
    expect(component.dataShared.length).toBe(6)
  })

  it('should set zonesData info', () => {
    const commonService = fixture.debugElement.injector.get(CommonService);
    const spy1 = jest.spyOn(commonService, 'getZones').mockReturnValue(of(listZones));
    component.ngOnInit()
    expect(spy1).toHaveBeenCalledTimes(1);
    expect(component.zonesData.length).toBe(3)
  })


  it('getDataFromAccordion should update vaSelectionService', () => {
    const dataAcc = ["sampleData", "sampleData2"];

    component.showInfoRightPanel = jest.fn();
    component.getDataFromAccordion(dataAcc);
    expect(component.showInfoRightPanel).toHaveBeenCalledWith(dataAcc)

  });

  it('getCurrentSelections should return an empty array', () => {
    component.getCurrentSelections()
    expect(component.getCurrentSelections()).toEqual([])
  })


  it('getDataFromCheckboxes should update vaSelectionService', () => {
    const vaSelectionService = fixture.debugElement.injector.get(VirtualAssistantSelectionsService);
    const spy = jest.spyOn(vaSelectionService, 'setSelections');
    component.getDataFromCheckboxes(["sampleData"]);
    expect(spy).toHaveBeenCalledWith(["sampleData"]);
  });


  it('showInfoRightPanel should show accordion data and title on the right panel if the data array contains more than one title', () => {
    const data = ["test1", "test"];
    const item = data[data.length - 1];
    component.showInfoRightPanel(data);
    expect(component.dataTitles).toEqual(["test"])
    expect(component.showContent).toEqual(item)
  })


  it('Dialog should open upon clicking ResumeButton', () => {

    component.onClickResumeButton();
    const spy = jest.spyOn(fakeDialogMock, 'open');
    expect(spy).toHaveBeenCalled();
  })

  it('Dialog should open upon clicking SaveButton', () => {

    component.onClickSaveButton();
    const spy = jest.spyOn(fakeDialogMock, 'open');
    expect(spy).toHaveBeenCalled();
  })




});