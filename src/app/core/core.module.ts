
// ANGULAR CORE & COMMON
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//COMPONENT MODULOS
import { FooterModule } from './components/footer/footer.module';
import { HeaderModule } from './components/header/header.module';

// COMPONENTS
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { MenuComponent } from './components/menu/menu.component';


@NgModule({
  declarations: [

    // COMPONENTS
    BreadcrumbComponent,
    MenuComponent,

  ],
  imports: [
    CommonModule,
    FooterModule,
    HeaderModule
  ], 
  exports: [
    // COMPONENTS
    BreadcrumbComponent,
    FooterModule,
    MenuComponent,

    //MODULES
    HeaderModule,
  ]
})
export class CoreModule { }
