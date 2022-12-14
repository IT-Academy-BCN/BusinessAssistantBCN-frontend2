// ANGULAR CORE & COMMON
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { I18TranslateModule } from 'src/app/shared/translate/i18-translate.module';

// MATERIAL
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { MatGridListModule } from '@angular/material/grid-list';

import { VirtualAssistantMainContentComponent } from './component/virtual-assistant-main-content.component';
import { ResumeDialogComponent } from './dialogs/resume-dialog/resume-dialog.component';
import { SaveDialogComponent } from './dialogs/save-dialog/save-dialog.component';
import { BabcnComponentsModule } from 'src/app/shared/components/babcn-components.module';



@NgModule({
  declarations: [
    VirtualAssistantMainContentComponent,
    ResumeDialogComponent,
    SaveDialogComponent
  ],
  imports: [
    CommonModule,

    // MATERIAL
    MatButtonModule,
    MatDialogModule,
    MatGridListModule,

    I18TranslateModule,
    
    // BABCN COMPONENTS
    BabcnComponentsModule
  ],
  exports: [
    VirtualAssistantMainContentComponent
  ]
})
export class VirtualAssistantMainContentModule { }
