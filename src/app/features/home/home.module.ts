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
<<<<<<< HEAD
=======
import {MatCardModule} from '@angular/material/card';
import { BabcnContainerModule } from 'src/app/shared/components/babcn-container/babcn-container.module';
>>>>>>> develop
import { MatGridListModule } from '@angular/material/grid-list';



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
<<<<<<< HEAD
    I18TranslateModule,
=======
    MatCardModule,
    I18TranslateModule,
    BabcnContainerModule,
>>>>>>> develop
    MatGridListModule
  ]
})
export class HomeModule { }
