// ANGULAR CORE & COMMON
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// MATERIAL
import { MatExpansionModule } from '@angular/material/expansion';

// MODULE: i18-translate.module.ts
import { I18TranslateModule } from '../../translate/i18-translate.module';

// COMPONENT: BABCN-ACCORDION
import { BabcnAccordionComponent } from './component/babcn-accordion.component';


@NgModule({
  declarations: [
    BabcnAccordionComponent
  ],
  imports: [
    CommonModule,

    // MATERIAL
    MatExpansionModule,

    // i18-translate
    I18TranslateModule
  ],
  exports: [
    BabcnAccordionComponent
  ]
})
export class BabcnAccordionModule { }
