// ANGULAR CORE & COMMON
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { I18TranslateModule } from 'src/app/shared/translate/i18-translate.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './page/home.component';
import { HeaderComponent } from './components/header/header.component';
import { InfoComponent } from './components/info/info.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import {MatCardModule} from '@angular/material/card';
import { BabcnContainerModule } from 'src/app/shared/components/babcn-container/babcn-container.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { BabcnShowcaseModule } from '../../shared/components/showcase/babcn-showcase.module';



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
    I18TranslateModule,
    BabcnContainerModule,
    MatGridListModule,
    BabcnShowcaseModule
  ]
})
export class HomeModule { }
