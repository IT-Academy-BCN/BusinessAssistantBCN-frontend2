import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// MODULE: i18-translate.module.ts
import { I18TranslateModule } from '../../translate/i18-translate.module';

// COMPONENT: BABCN-TITLE
import { BabcnTitleComponent } from './component/babcn-title.component';



@NgModule({
  declarations: [
    BabcnTitleComponent
  ],
  imports: [
    CommonModule,

    // i18-translate
    I18TranslateModule
  ],
  exports: [
    BabcnTitleComponent
  ]
})
export class BabcnTitleModule { }
