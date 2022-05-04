// ANGULAR CORE & COMMON
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// MATERIAL
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

// COMPONENT: BABCN-LIST
import { BabcnListComponent } from './component/babcn-list.component';


@NgModule({
  declarations: [
    BabcnListComponent
  ],
  imports: [
    CommonModule,

    // MATERIAL
    MatDividerModule,
    MatListModule
  ],
  exports: [
    BabcnListComponent
  ]
})
export class BabcnListModule { }
