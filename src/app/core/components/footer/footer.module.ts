
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './component/footer.component';

// CDK
import { LayoutModule } from '@angular/cdk/layout';

//MATERIAL
import { MatGridListModule } from '@angular/material/grid-list';

// BABCN-COMPONENT MODULES
import { BabcnContainerModule } from '../../../shared/components/babcn-container/babcn-container.module';

@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,

    // CDK
    LayoutModule,

    //MATERIAL

    MatGridListModule,

    // MODULES BABCN-COMPONENTS
    
    BabcnContainerModule
  ],
  exports: [
    FooterComponent
  ]
})
export class FooterModule { }
