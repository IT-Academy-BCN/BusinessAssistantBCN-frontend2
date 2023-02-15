import { VirtualAssistantSelectionsService } from './../../../services/virtual-assistant-selections.service';
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
import { Zones } from '../../../../../shared/models/common/zones.model';
import { Zone } from 'src/app/shared/models/common/zone.model';


@Component({
  selector: 'virtual-assistant-page-main-content',
  templateUrl: './virtual-assistant-main-content.component.html',
  styleUrls: ['./virtual-assistant-main-content.component.scss']
})
export class VirtualAssistantMainContentComponent implements OnInit {

  // Responsive Breakpoint
  breakpoint: number | string | "Unknown";
  ratio: string | number;
  value: (string | number)[] | undefined= [];

  // Data Source to share with Mat-Accordion from VirtualAssistantAccordionComponent.
  @Input('inputDataMain') dataSourceCategory: Category[] = [];

  // Data Shared with VirtualAssistantListComponent.
  dataShared: string[] = []

  // Data Zones from common service
  zonesData: Zone[] = [];

  // Not delete this empty constructor to make implementations easier to understand.
  constructor(
    public  dialog: MatDialog,
    public  vaSelectionService: VirtualAssistantSelectionsService,
    private responsive: BreakpointService,
    private zones : CommonService

  ) {
    this.value = VIRTUAL_ASSISTANT_MAT_GRID_LIST.get(this.responsive.getCurrentScreenSize());
    if (this.value != undefined) {
      this.breakpoint = this.value[0];
      this.ratio = this.value[1];
    } else {
      this.breakpoint = 0;
      this.ratio = "150px";
    }
  }

  ngOnInit(): void {

     // Get all Zones from common service
     this.zones.getZones().subscribe((res : Zones) => {
      this.zonesData = res.elements;
    })


    this.responsive.breakpoint$.subscribe((res) => {
      VIRTUAL_ASSISTANT_MAT_GRID_LIST.forEach((value, key) => {
        if (key == res) {
          this.breakpoint = value[0];
          this.ratio = value[1];
        }
      });
    });

    if(this.vaSelectionService.selections.content.length > 0) {
      this.vaSelectionService.selections.content.forEach(item => {
        this.dataShared.push(item.content);
      })
    }
  }


  // USER, wait for login implementation to verify the correct status.
  user : boolean = false;


  /**
   * Get the output data from accordion-component.
   * @param accordionData The obtained data is shared by the component in the input of VirtualAssistantList.
   */
  getDataFromAccordion(accordionData: string[]) {

    
    //Getting existing selections from service 
    let currentSelections = this.getCurrentSelections();

    if (this.vaSelectionService.selections.content.length>0) {

      this.vaSelectionService.selections.content.forEach(item => {
        currentSelections.push(item.content);
      })
     }
      //end of get existing selections
    this.dataShared = [...accordionData].concat(currentSelections);

     //merge existing selection with saved selections from VA selection service
    let mergedData = [...new Set([...accordionData,...currentSelections])];
    this.dataShared = mergedData;
    this.vaSelectionService.setSelections(mergedData);
  }

  getDataFromCheckboxes(checkboxData: string[]) {
    this.vaSelectionService.setSelections(checkboxData);
  }

  getCurrentSelections() {
    let currentSelections:string[] = [];
    return currentSelections
  }

  /**
   * Click on the resume button.
   * It needs to be a callback function (it will be used as a parameter).
   */
  onClickResumeButton = (): void => {
    this.dialog.open(ResumeDialogComponent, {
      // width: '500px', // sample use
      // height: '500px', // sample use
      data: this.dataShared
    });
  }

  /**
   * Click on the save button.
   * It needs to be a callback function (it will be used as a parameter).
   */
  onClickSaveButton = (): void => {
    this.dialog.open(LoginModalComponent,{})
    // TODO implement onClickSaveButton
  }




}

