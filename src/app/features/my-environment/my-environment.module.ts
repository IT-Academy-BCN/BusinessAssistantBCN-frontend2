import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';

import { MapboxComponent } from 'src/app/shared/components/mapbox/mapbox.component';
import { SearchAndResultComponent } from './components/search-and-result/search-and-result.component';
import { MyEnvironmentPageComponent } from './components/my-environment-page/my-environment-page.component';
import { I18TranslateModule } from 'src/app/shared/translate/i18-translate.module';
import { BabcnComponentsModule } from 'src/app/shared/components/babcn-components.module';
import { MyEnvironmentRoutingModule } from './my-environment-routing.module';



@NgModule({
  declarations: [
    MyEnvironmentPageComponent,
    MapboxComponent,
    SearchAndResultComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatGridListModule,
    I18TranslateModule,
    MatListModule,
    MyEnvironmentRoutingModule,
    
    // BABCN COMPONENTS
    BabcnComponentsModule,
    MatCheckboxModule,
    MatDialogModule
  ],
  exports: [
    
  ]
})
export class MyEnvironmentModule { }