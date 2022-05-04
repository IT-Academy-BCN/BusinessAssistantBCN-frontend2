// ANGULAR CORE & COMMON
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// MATERIAL
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

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
    
    // BABCN COMPONENTS
    BabcnComponentsModule
  ],
  exports: [
    VirtualAssistantMainContentComponent
  ]
})
export class VirtualAssistantMainContentModule { }
