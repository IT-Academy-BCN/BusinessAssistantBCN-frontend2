import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyEnvironmentPageComponent } from './pages/my-environment-page/my-environment-page.component';
import { MyEnvironmentSearchComponent } from './pages/my-environment-search/my-environment-search.component';
import { MyEnvironmentResultComponent } from './pages/my-environment-result/my-environment-result.component';
import { MatButtonModule } from '@angular/material/button';
import { I18TranslateModule } from 'src/app/shared/translate/i18-translate.module';



@NgModule({
  declarations: [
    MyEnvironmentPageComponent,
    MyEnvironmentSearchComponent,
    MyEnvironmentResultComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    I18TranslateModule
  ]
})
export class MyEnvironmentModule { }
