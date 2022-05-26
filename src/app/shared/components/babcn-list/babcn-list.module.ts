// ANGULAR CORE & COMMON
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// MATERIAL
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

// MODULE: i18-translate.module.ts
import { I18TranslateModule } from '../../translate/i18-translate.module';

// COMPONENT: BABCN-LIST
import { BabcnListComponent } from './component/babcn-list.component';


@NgModule({
  declarations: [
    BabcnListComponent
  ],
  imports: [
    CommonModule,

    // MATERIAL
    MatDividerModule,
    MatListModule,

    // i18-translate
    I18TranslateModule
  ],
  exports: [
    BabcnListComponent
  ]
})
export class BabcnListModule { }
