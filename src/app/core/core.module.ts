// ANGULAR CORE & COMMON
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//COMPONENTS MODULES
import { HeaderModule } from './components/header/header.module';

// COMPONENTS
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';


@NgModule({
  declarations: [

    // COMPONENTS
    BreadcrumbComponent,
    FooterComponent,
    MenuComponent,
  ],
  imports: [
    CommonModule,
    HeaderModule,
  ],
  exports: [
    // COMPONENTS
    BreadcrumbComponent,
    FooterComponent,
    MenuComponent,

    //MODULES
    HeaderModule,
  ]
})
export class CoreModule { }
