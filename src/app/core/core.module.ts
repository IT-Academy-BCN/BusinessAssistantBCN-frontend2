// ANGULAR CORE & COMMON
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// COMPONENTS
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { LanguageChangerComponent } from './components/language-changer/language-changer.component';


@NgModule({
  declarations: [

    // COMPONENTS
    BreadcrumbComponent,
    FooterComponent,
    HeaderComponent,
    LanguageChangerComponent,
    MenuComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    
    // COMPONENTS
    BreadcrumbComponent,
    FooterComponent,
    HeaderComponent,
    LanguageChangerComponent,
    MenuComponent
  ]
})
export class CoreModule { }
