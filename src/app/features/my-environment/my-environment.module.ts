import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyEnvironmentPageComponent } from './pages/my-environment-page/my-environment-page.component';
import { MyEnvironmentSearchComponent } from './pages/my-environment-search/my-environment-search.component';
import { MyEnvironmentResultComponent } from './pages/my-environment-result/my-environment-result.component';
import { MatButtonModule } from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { I18TranslateModule } from 'src/app/shared/translate/i18-translate.module';
import { BabcnComponentsModule } from 'src/app/shared/components/babcn-components.module';
import { MatGridListModule } from '@angular/material/grid-list';



@NgModule({
  declarations: [
    MyEnvironmentPageComponent,
    MyEnvironmentSearchComponent,
    MyEnvironmentResultComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatGridListModule,
    I18TranslateModule,

    // BABCN COMPONENTS
    BabcnComponentsModule,
    MatCheckboxModule
  ],
  exports: [
    
  ]
})
export class MyEnvironmentModule { }
