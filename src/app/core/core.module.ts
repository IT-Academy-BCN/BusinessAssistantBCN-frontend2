// ANGULAR CORE & COMMON
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//COMPONENT MODULOS
import { FooterModule } from '././components/footer/footer.module';

// COMPONENTS
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { LanguageChangerComponent } from './components/language-changer/language-changer.component';


@NgModule({
  declarations: [

    // COMPONENTS
    BreadcrumbComponent,
    HeaderComponent,
    LanguageChangerComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    FooterModule
  ],
  exports: [
    
    // COMPONENTS
    BreadcrumbComponent,
    FooterModule,
    HeaderComponent,
    LanguageChangerComponent,
    MenuComponent
  ]
})
export class CoreModule { }
