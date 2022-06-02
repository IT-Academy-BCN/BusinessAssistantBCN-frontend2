
// ANGULAR CORE & COMMON
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//COMPONENT MODULOS
import { FooterModule } from './layout/footer/footer.module';
import { HeaderModule } from './layout/header/header.module';

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
