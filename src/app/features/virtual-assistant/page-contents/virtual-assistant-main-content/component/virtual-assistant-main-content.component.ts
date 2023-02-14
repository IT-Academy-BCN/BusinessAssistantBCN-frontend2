import { CcaeService } from './../../../services/ccae.service';
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
  newDataObj:any = {};

  // Data Shared with VirtualAssistantListComponent.
  dataShared: string[] = []

  // Not delete this empty constructor to make implementations easier to understand.
  constructor(
    public dialog: MatDialog,

    private responsive: BreakpointService,
    private ccae: CcaeService,
    public vaSelectionService: VirtualAssistantSelectionsService,
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

    this.responsive.breakpoint$.subscribe((res) => {
      VIRTUAL_ASSISTANT_MAT_GRID_LIST.forEach((value, key) => {
        if (key == res) {
          this.breakpoint = value[0];
          this.ratio = value[1];
        }
      });
    });

    this.convertSrcDataToTreeObj()
  // console.log(this.newDataObj)
    if(this.vaSelectionService.selections.content.length > 0) {
      this.vaSelectionService.selections.content.forEach(item => {
        this.dataShared.push(item.content);
      })
    }
  }

  //convert dataSourceCategory to a tree structure for Angular Material Tree
  convertSrcDataToTreeObj() {
    this.dataSourceCategory.forEach(item => {
      let subcategories:any ={};
      item.subcategory.forEach(subcategory => {
        let subcategoryItems: any = {};
  
        subcategory.items.forEach(finalItem => {
          subcategoryItems[finalItem.item] = null;
        })
        subcategories[subcategory.title] = subcategoryItems
      })
      this.newDataObj[item.title] = subcategories
      });
  }

  //

  // USER, wait for login implementation to verify the correct status.
  user : boolean = false;


  /**
   * Get the output data from accordion-component.
   * @param accordionData The obtained data is shared by the component in the input of VirtualAssistantList.
   */

  getDataFromAccordion(accordionData: any[]) {  // TODO improve typing any[]
    this.dataShared = [...accordionData];

    let currentSelections = this.getCurrentSelections();

    if (this.vaSelectionService.selections.content.length>0) {

      this.vaSelectionService.selections.content.forEach(item => {
        currentSelections.push(item.content);
      })
     }

    


    if(this.dataShared.includes("pages.business-assistant.section1.s1-item1")) {
      let SeccionObject:any = {};
      let DivisionObject:any = {};
      let GrupObject:any = {};
      let ClasseObject:any = {};
//"Divisió" "Grup" "Classe"
      this.ccae.getCcaeJSON().subscribe((data:{offset:number, limit: number, count: number, results: any[] }) => {
       
    
        SeccionObject = this.createObjFromCcae(data.results, "Secció");
        DivisionObject = this.createObjFromCcae(data.results, "Divisió");
        GrupObject = this.createObjFromCcae(data.results, "Grup");
        ClasseObject = this.createObjFromCcae(data.results, "Classe");

        //MODIFY THIS SINGLE SECTION
      
        this.newDataObj = {}

      this.newDataObj["pages.business-assistant.section1.s1-item1"] =  
      {Secció: SeccionObject,
      Divisió: DivisionObject,
      Grupo: GrupObject,
      Classe: ClasseObject
    }
      })
    }

         //end of get existing selections
         this.dataShared = [...accordionData].concat(currentSelections);

         //merge existing selection with saved selections from VA selection service
        let mergedData = [...new Set([...accordionData,...currentSelections])];
        this.dataShared = mergedData;
        this.vaSelectionService.setSelections(mergedData);
  }

  createObjFromCcae(array: any[], filter: string) {
    let resultObj: any = {};
    const result = array.filter(item => item.type === filter);
    result.forEach((item,idx) => {
       return resultObj[idx + 1 + ": " + item.code.description] = null;
     })
     return resultObj;
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

