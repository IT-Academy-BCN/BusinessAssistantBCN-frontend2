import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// MATERIAL
import { MatCheckboxModule } from '@angular/material/checkbox';

// MODULE: i18-translate.module.ts
import { I18TranslateModule } from '../../translate/i18-translate.module';

// COMPONENT: BABCN-CHECKBOX-LIST
import { BabcnCheckboxListComponent } from './component/babcn-checkbox-list.component';


@NgModule({
  declarations: [
    BabcnCheckboxListComponent
  ],
  imports: [
    CommonModule,

    // MATERIAL
    MatCheckboxModule,

    // i18-translate
    I18TranslateModule
  ],
  exports: [
    BabcnCheckboxListComponent
  ]
})
export class BabcnCheckboxListModule { }
