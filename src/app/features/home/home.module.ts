// ANGULAR CORE & COMMON
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { I18TranslateModule } from 'src/app/shared/translate/i18-translate.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './page/home.component';
import { HeaderComponent } from './components/header/header.component';
import { InfoComponent } from './components/info/info.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import {MatLegacyCardModule as MatCardModule} from '@angular/material/legacy-card';
import { BabcnContainerModule } from 'src/app/shared/components/babcn-container/babcn-container.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { BabcnShowcaseModule } from '../../shared/components/showcase/babcn-showcase.module';
import { BabcnComponentsModule } from '../../shared/components/babcn-components.module';



@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    InfoComponent,
    PresentationComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    I18TranslateModule,
    // BabcnContainerModule,
    BabcnComponentsModule,
    BabcnShowcaseModule
  ]
})
export class HomeModule { }
