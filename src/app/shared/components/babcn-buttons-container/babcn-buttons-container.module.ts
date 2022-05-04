// ANGULAR CORE & COMMON
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// MATERIAL
import { MatButtonModule } from '@angular/material/button';

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
  ],
  exports: [
    BabcnButtonsContainerComponent
  ]
})
export class BabcnButtonsContainerModule { }
