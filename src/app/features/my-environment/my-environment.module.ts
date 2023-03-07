import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { I18TranslateModule } from 'src/app/shared/translate/i18-translate.module';
import { BabcnComponentsModule } from 'src/app/shared/components/babcn-components.module';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import { MapboxComponent } from 'src/app/shared/components/mapbox/mapbox.component';
import { CardContentComponent } from './components/card-content/card-content.component';
import { SearchAndResultComponent } from './components/search-and-result/search-and-result.component';
import { MyEnvironmentPageComponent } from './components/my-environment-page/my-environment-page.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    MyEnvironmentPageComponent,
    MapboxComponent,
    SearchAndResultComponent,
    CardContentComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatGridListModule,
    I18TranslateModule,
    MatListModule,
    MatSnackBarModule,
    
    // BABCN COMPONENTS
    BabcnComponentsModule,
    MatCheckboxModule
  ],
  exports: [
    
  ]
})
export class MyEnvironmentModule { }
