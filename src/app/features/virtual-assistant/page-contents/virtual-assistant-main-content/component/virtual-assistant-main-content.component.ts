// ANGULAR CORE
import { Component, Input } from '@angular/core';

// MATERIAL
import { MatDialog } from '@angular/material/dialog';

// VIRTUAL-ASSISTANT MODELS - BUSINESS ASISSTANT CATEGORY
import { Category } from '../../../models/business-assistant.model';

// RESUME-DIALOG-COMPONENT
import { ResumeDialogComponent } from '../dialogs/resume-dialog/resume-dialog.component';


@Component({
  selector: 'virtual-assistant-page-main-content',
  templateUrl: './virtual-assistant-main-content.component.html'
})
export class VirtualAssistantMainContentComponent {

  // Material Breakpoint
  @Input('breakpoint') breakpoint: string = "small";

  // Data Source to share with Mat-Accordion from VirtualAssistantAccordionComponent.
  @Input('inputDataMain') dataSourceCategory: Category[] = [];

  // Data Shared with VirtualAssistantListComponent.
  dataShared: any[] = [] // TODO improve typing any[]

  // Not delete this empty constructor to make implementations easier to understand.
  constructor(public dialog: MatDialog) { }

  /**
   * Get the output data from accordion-component.
   * @param accordionData The obtained data is shared by the component in the input of VirtualAssistantList.
   */
  getDataFromAccordion(accordionData: any[]) {  // TODO improve typing any[]
    this.dataShared = [...accordionData];
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
    // TODO implement onClickSaveButton
  }

}

