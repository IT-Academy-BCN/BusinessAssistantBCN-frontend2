// ANGULAR CORE & COMMON
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// MATERIAL
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyCheckboxModule as MatCheckboxModule } from '@angular/material/legacy-checkbox';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatTreeModule } from '@angular/material/tree';

// MODULE: i18-translate.module.ts
import { I18TranslateModule } from '../../translate/i18-translate.module';

// COMPONENT: BABCN-TREE
import { BabcnTreeComponent } from './component/babcn-tree.component';


@NgModule({
  declarations: [
    BabcnTreeComponent
  ],
  imports: [
    CommonModule,

    // MATERIAL
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatTreeModule,

    // i18-translate
    I18TranslateModule
  ],
  exports: [
    BabcnTreeComponent
  ]
})
export class BabcnTreeModule { }
