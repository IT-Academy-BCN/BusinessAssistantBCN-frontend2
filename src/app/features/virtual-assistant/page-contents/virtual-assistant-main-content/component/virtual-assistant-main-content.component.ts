// ANGULAR CORE
import { Component, Input, OnInit } from '@angular/core';

// MATERIAL
import { MatDialog } from '@angular/material/dialog';
import { BreakpointService } from 'src/app/services/shared/breakpoint/breakpoint.service';


// VIRTUAL-ASSISTANT MODELS - BUSINESS ASISSTANT CATEGORY
import { Category } from '../../../models/business-assistant.model';

// RESUME-DIALOG-COMPONENT
import { ResumeDialogComponent } from '../dialogs/resume-dialog/resume-dialog.component';

import { VIRTUAL_ASSISTANT_MAT_GRID_LIST } from 'src/app/shared/components/component-constants';

// LOGIN MODAL COMPONENT 
import { LoginModalComponent } from 'src/app/features/users/components/login-modal/login-modal.component';
import { CommonService } from '../../../../../services/common/common.service';


@Component({
  selector: 'virtual-assistant-page-main-content',
  templateUrl: './virtual-assistant-main-content.component.html',
  styleUrls: ['./virtual-assistant-main-content.component.scss']
})
export class VirtualAssistantMainContentComponent implements OnInit {

  // Responsive Breakpoint
  breakpoint: number | string | "Unknown";
  ratio: string | number;

  // Data Source to share with Mat-Accordion from VirtualAssistantAccordionComponent.
  @Input('inputDataMain') dataSourceCategory: Category[] = [];

  // Data Shared with VirtualAssistantListComponent.
  dataShared: any[] = [] // TODO improve typing any[]

  // Data Zones from common service
  zonesData: any[] = [];

  // Data Zones selected from 

  zonesSelected: string[] = [];

  // Show Zones List on right panel if user click on Zones button (accordion left)
  zonesList: boolean = false;

  // USER, wait for login implementation to verify the correct status.
  user: boolean = false;


  // Not delete this empty constructor to make implementations easier to understand.
  constructor(
    public dialog: MatDialog,
    private responsive: BreakpointService,
    private zones: CommonService
  ) {
    const value = VIRTUAL_ASSISTANT_MAT_GRID_LIST.get(this.responsive.getCurrentScreenSize());
    if (value != undefined) {
      this.breakpoint = value[0];
      this.ratio = value[1];
    } else {
      this.breakpoint = 0;
      this.ratio = "150px";
    }
  }

  ngOnInit(): void {
    this.responsive.breakpoint$.subscribe((res) => {
      VIRTUAL_ASSISTANT_MAT_GRID_LIST.forEach((value, key) => {
        if (key == res) {
          this.breakpoint = value[0];
          this.ratio = value[1];
        }
      });
    });
    // Get all Zones from common service
    this.zones.getZones().subscribe((res) => {
      this.zonesData = res.elements;
    })
  }




  /**
   * Get the output data from accordion-component.
   * @param accordionData The obtained data is shared by the component in the input of VirtualAssistantList.
   */
  getDataFromAccordion(accordionData: any[]) {  // TODO improve typing any[]
    this.dataShared = accordionData
    this.showData(this.dataShared)
  }

  // Get data form accordion and show it in rigth side
  showData(data: any[]) {
    const isDataIncluded = data.indexOf('pages.business-assistant.section1.s1-item2');
    this.zonesList = isDataIncluded == -1 ? this.zonesList : !this.zonesList;
    console.log(this.zonesList);
  }

  /**
   * Click on the resume button.
   * It needs to be a callback function (it will be used as a parameter).
   */
  onClickResumeButton = (): void => {
    
    this.dialog.open(ResumeDialogComponent, {
      // width: '500px', // sample use
      // height: '500px', // sample use
      data: this.dataShared.concat(this.zonesSelected),

    });
  }

  /**
   * Click on the save button.
   * It needs to be a callback function (it will be used as a parameter).
   */
  onClickSaveButton = (): void => {
    this.dialog.open(LoginModalComponent, {})
    // TODO implement onClickSaveButton
  }


  // Zones tree, get the selected zones and push them to the datashared array (resume)

  checkZones(zoneSelected: any, event: any) {    
    if (event) {
      //Adds the selected zone to the array zones in the common service to use it there as parameter
     this.zonesSelected.push(zoneSelected.zoneName);
    } else {
      //removes the zone if it is already in the common service array
      this.zonesSelected.splice(this.dataShared.indexOf(zoneSelected), 1);
    }
  }



}

