// ANGULAR CORE & COMMON
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// MATERIAL
import { MatButtonToggleModule } from '@angular/material/button-toggle';

// COMPONENT: LANGUAGE-CHANGER
import { LanguageChangerComponent } from './language-changer.component';

// MODULE: i18-translate.module.ts
import { I18TranslateModule } from '../../../shared/translate/i18-tranlsate.module';


@NgModule({
  declarations: [
    LanguageChangerComponent
  ],
  imports: [
    CommonModule,

    // MATERIAL
    MatButtonToggleModule,

    // i18-translate
    I18TranslateModule
  ],
  exports: [
    LanguageChangerComponent,
  ]
})
export class LanguageChangerModule { }

