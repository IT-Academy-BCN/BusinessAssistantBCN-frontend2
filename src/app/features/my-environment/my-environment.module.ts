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
import {MatListModule} from '@angular/material/list';
import { MapboxComponent } from 'src/app/shared/components/mapbox/mapbox.component';
import { SearchAndResultComponent } from './components/search-and-result/search-and-result.component';
import { CardContentComponent } from './components/card-content/card-content.component';



@NgModule({
  declarations: [
    MyEnvironmentPageComponent,
    MyEnvironmentSearchComponent,
    MyEnvironmentResultComponent,
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
