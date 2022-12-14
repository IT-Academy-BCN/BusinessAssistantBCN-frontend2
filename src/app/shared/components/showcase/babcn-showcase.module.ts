// ANGULAR CORE & COMMON
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// MATERIAL
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatLegacySnackBarModule as MatSnackBarModule } from '@angular/material/legacy-snack-bar';
import { MatLegacyTabsModule as MatTabsModule } from '@angular/material/legacy-tabs';

// CDK
import { ClipboardModule } from '@angular/cdk/clipboard';
import { LayoutModule } from '@angular/cdk/layout';

// BABCN-COMPONENT MODULES
import { BabcnAccordionModule } from '../babcn-accordion/babcn-accordion.module';
import { BabcnButtonsContainerModule } from '../babcn-buttons-container/babcn-buttons-container.module';
import { BabcnContainerModule } from '../babcn-container/babcn-container.module';
import { BabcnListModule } from '../babcn-list/babcn-list.module';
import { BabcnTreeModule } from '../babcn-tree/babcn-tree.module';

// TABS COMPONENT
import { TabBabcnAccordionComponent } from './component/tabs/tab-babcn-accordion.component';
import { TabBabcnButtonsContainerComponent } from './component/tabs/tab-babcn-buttons-container.component';
import { TabBabcnContainerComponent } from './component/tabs/tab-babcn-container.component';
import { TabBabcnListComponent } from './component/tabs/tab-babcn-list.component';
import { TabBabcnTreeComponent } from './component/tabs/tab-babcn-tree.component';
import { TabShowcaseComponent } from './component/tabs/tab-showcase.component';
import { TabSandboxComponent } from './component/tabs/tab-sandbox.component';
import { CodeCopyContainerComponent } from './component/tabs/microcomponent/code-copy-container.component';
import { CaseTitleComponent } from './component/tabs/microcomponent/case-title.component';

// COMPONENT: SHOWCASE
import { BabcnShowcaseComponent } from './component/babcn-showcase.component';

@NgModule({
  declarations: [
    BabcnShowcaseComponent,
    TabBabcnAccordionComponent,
    TabBabcnButtonsContainerComponent,
    TabBabcnContainerComponent,
    TabBabcnListComponent,
    TabBabcnTreeComponent,
    TabShowcaseComponent,
    TabSandboxComponent,
    CodeCopyContainerComponent,
    CaseTitleComponent
  ],
  imports: [
    CommonModule,

    // MATERIAL
    MatButtonModule,
    MatButtonToggleModule,
    MatGridListModule,
    MatSnackBarModule,
    MatTabsModule,

    // CDK
    ClipboardModule,
    LayoutModule,

    // MODULES BABCN-COMPONENTS
    BabcnAccordionModule,
    BabcnButtonsContainerModule,
    BabcnContainerModule,
    BabcnListModule,
    BabcnTreeModule
  ],
  exports: [
    BabcnShowcaseComponent
  ]
})
export class BabcnShowcaseModule { }
