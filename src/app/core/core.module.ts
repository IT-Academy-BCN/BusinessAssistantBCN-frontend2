
// ANGULAR CORE & COMMON
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//COMPONENT MODULOS
import { FooterModule } from '././components/footer/footer.module';
import { LanguageChangerModule } from './components/language-changer/language-changer.module';

// COMPONENTS
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [

    // COMPONENTS
    BreadcrumbComponent,
    HeaderComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    FooterModule,
    LanguageChangerModule
  ],
  exports: [
    
    // COMPONENTS
    BreadcrumbComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
  ]
})
export class CoreModule { }
