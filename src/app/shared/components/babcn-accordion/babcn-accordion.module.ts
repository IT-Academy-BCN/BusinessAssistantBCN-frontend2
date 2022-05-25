// ANGULAR CORE & COMMON
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// MATERIAL
import { MatExpansionModule } from '@angular/material/expansion';

// COMPONENT: BABCN-ACCORDION
import { BabcnAccordionComponent } from './component/babcn-accordion.component';


@NgModule({
  declarations: [
    BabcnAccordionComponent
  ],
  imports: [
    CommonModule,

    // MATERIAL
    MatExpansionModule
  ],
  exports: [
    BabcnAccordionComponent
  ]
})
export class BabcnAccordionModule { }
