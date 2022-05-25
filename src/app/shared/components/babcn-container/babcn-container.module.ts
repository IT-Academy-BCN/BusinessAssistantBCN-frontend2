// ANGULAR CORE & COMMON
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// COMPONENT: BABCN-CONTAINER
import { BabcnContainerComponent } from './component/babcn-container.component';


@NgModule({
  declarations: [
    BabcnContainerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BabcnContainerComponent
  ]
})
export class BabcnContainerModule { }
