import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FooterModule} from "./layout/footer/footer.module";
import {HeaderModule} from "./layout/header/header.module";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FooterModule,
    HeaderModule
  ],
  providers: [HttpClientModule],
  exports: [
    FooterModule,
    HeaderModule
  ]
})
export class CoreModule { }
