// ANGULAR CORE & COMMON
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// MATERIAL
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';

// MODULE: i18-translate.module.ts
import { I18TranslateModule } from '../../translate/i18-translate.module';

// COMPONENT: BABCN-BUTTONS-CONTAINER
import { BabcnButtonsContainerComponent } from './component/babcn-buttons-container.component';


@NgModule({
  declarations: [
    BabcnButtonsContainerComponent
  ],
  imports: [
    CommonModule, 

    // MATERIAL
    MatButtonModule,

    // i18-translate
    I18TranslateModule
  ],
  exports: [
    BabcnButtonsContainerComponent
  ]
})
export class BabcnButtonsContainerModule { }
