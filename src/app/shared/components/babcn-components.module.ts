
// ANGULAR CORE & COMMON
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// COMPONENT MODULES
import { BabcnAccordionModule } from './babcn-accordion/babcn-accordion.module';
import { BabcnButtonsContainerModule } from './babcn-buttons-container/babcn-buttons-container.module';
import { BabcnCheckboxListModule } from './babcn-checkbox-list/babcn-checkbox-list.module';
import { BabcnContainerModule } from './babcn-container/babcn-container.module';
import { BabcnListModule } from './babcn-list/babcn-list.module';
import { BabcnTitleModule } from './babcn-title/babcn-title.module';
import { BabcnTreeModule } from './babcn-tree/babcn-tree.module';
import { BabcnShowcaseModule } from './showcase/babcn-showcase.module';
;


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BabcnAccordionModule,
    BabcnButtonsContainerModule,
    BabcnCheckboxListModule,
    BabcnContainerModule,
    BabcnListModule,
    BabcnTitleModule,
    BabcnTreeModule,

    // SHOWCASE FOR DEVELOPERS
    BabcnShowcaseModule
  ]
})
export class BabcnComponentsModule { }
