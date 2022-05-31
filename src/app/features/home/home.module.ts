// ANGULAR CORE & COMMON
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home.component';
import { MatButtonModule } from '@angular/material/button';
import { I18TranslateModule } from 'src/app/shared/translate/i18-translate.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    I18TranslateModule
  ]
})
export class HomeModule { }
