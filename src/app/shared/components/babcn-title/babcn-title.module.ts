import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// MODULE: i18-translate.module.ts
//import { I18TranslateModule } from '../../translate/i18-translate.module';

// COMPONENT: BABCN-TITLE
import { BabcnTitleComponent } from './component/babcn-title.component';

import {TranslateModule} from '@ngx-translate/core';



@NgModule({
  declarations: [
    BabcnTitleComponent
  ],
  imports: [
    CommonModule,
    TranslateModule.forChild(),
    // i18-translate
   // I18TranslateModule
  ],
  exports: [
    BabcnTitleComponent,
    TranslateModule
  ]
})
export class BabcnTitleModule { }
