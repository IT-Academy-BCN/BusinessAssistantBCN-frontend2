// ANGULAR CORE & COMMON
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// MATERIAL
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTreeModule } from '@angular/material/tree';

// COMPONENT: BABCN-TREE
import { BabcnTreeComponent } from './component/babcn-tree.component';


@NgModule({
  declarations: [
    BabcnTreeComponent
  ],
  imports: [
    CommonModule,

    // MATERIAL
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatTreeModule
  ],
  exports: [
    BabcnTreeComponent
  ]
})
export class BabcnTreeModule { }
