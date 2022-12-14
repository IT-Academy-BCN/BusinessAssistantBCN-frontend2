import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import {MatLegacyCheckboxModule as MatCheckboxModule} from '@angular/material/legacy-checkbox';
import { I18TranslateModule } from 'src/app/shared/translate/i18-translate.module';
import { BabcnComponentsModule } from 'src/app/shared/components/babcn-components.module';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatLegacyListModule as MatListModule} from '@angular/material/legacy-list';
import { MapboxComponent } from 'src/app/shared/components/mapbox/mapbox.component';
import { CardContentComponent } from './components/card-content/card-content.component';
import { SearchAndResultComponent } from './components/search-and-result/search-and-result.component';
import { MyEnvironmentPageComponent } from './components/my-environment-page/my-environment-page.component';





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

    // BABCN COMPONENTS
    BabcnComponentsModule,
    MatCheckboxModule
  ],
  exports: [
    
  ]
})
export class MyEnvironmentModule { }
