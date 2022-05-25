// ANGULAR CORE & COMMON
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// VIRTUAL-ASSISTANT-PAGE [ROUTING]
import { VirtualAssistantPageComponent } from './page-routing/virtual-assistant-page.component';

// MODULE CONTENTS PAGE: VIRTUAL-ASSISTANT-PAGE-CONTENTS-MODULE
import { VirtualAssistantPageContentsModule } from './page-contents/virtual-assistant-page-contents.module';

// SERVICE: VIRTUAL-ASSISTANT-CATEGORIES-SERVICE
import { VirtualAssisstantCategoriesService } from './services/virtual-assistant-categories.service';
import { CoreModule } from '../../core/core.module';

// ARRAY with VIRTUAL-ASSISTANT APPLICATION PAGES
const VirtualAssistantPages = [
  VirtualAssistantPageComponent
];

@NgModule({
  declarations: [
    [...VirtualAssistantPages]
  ],
  imports: [
    CommonModule,

    CoreModule,

    // VIRTUAL-ASSISTANT-CONTENTS-MODULE
    VirtualAssistantPageContentsModule
  ],
  exports: [
    [...VirtualAssistantPages]
  ],
  providers: [
    VirtualAssisstantCategoriesService
  ]
})
export class VirtualAssistantModule { }
