// ANGULAR CORE & COMMON
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// CONTENT MODULE: VIRTUAL-ASSISTANT-MAIN-CONTENT-MODULE
import { VirtualAssistantMainContentModule } from './virtual-assistant-main-content/virtual-assistant-main-content.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
    
  ],
  exports: [
    VirtualAssistantMainContentModule
  ]
})
export class VirtualAssistantPageContentsModule { }
