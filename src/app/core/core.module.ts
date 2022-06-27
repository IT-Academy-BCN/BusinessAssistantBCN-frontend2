import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FooterModule} from "./layout/footer/footer.module";
import {HeaderModule} from "./layout/header/header.module";

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FooterModule,
    HeaderModule
  ],
  exports: [
    FooterModule,
    HeaderModule
  ]
})
export class CoreModule { }
