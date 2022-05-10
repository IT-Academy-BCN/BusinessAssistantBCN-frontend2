// ANGULAR CORE & COMMON
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//COMPONENTS MODULES
import { LanguageChangerModule } from './components/language-changer/language-changer.module';

// COMPONENTS
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';



@NgModule({
  declarations: [

    // COMPONENTS
    BreadcrumbComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    LanguageChangerModule
  ],
  exports: [
    
    // COMPONENTS
    BreadcrumbComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,

    //MODULES
    // LanguageChangerModule
  ]
})
export class CoreModule { }
