// ANGULAR CORE & COMMON
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { I18TranslateModule } from 'src/app/shared/translate/i18-translate.module';

// MATERIAL
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
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
    MatCheckboxModule,
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
