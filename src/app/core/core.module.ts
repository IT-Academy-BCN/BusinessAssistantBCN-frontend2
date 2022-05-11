// ANGULAR CORE & COMMON
import {NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//COMPONENTS MODULES
import { LanguageChangerModule } from './components/language-changer/language-changer.module';

// COMPONENTS
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';

import { LanguageChangerComponent } from './components/language-changer/language-changer.component';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [

    // COMPONENTS
    BreadcrumbComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    // LanguageChangerComponent 
  ],
  imports: [
    CommonModule,
    LanguageChangerModule,
    MatIconModule,
    AppRoutingModule
  ],
  exports: [
    
    // COMPONENTS
    BreadcrumbComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent
  ]
})
export class CoreModule { }
