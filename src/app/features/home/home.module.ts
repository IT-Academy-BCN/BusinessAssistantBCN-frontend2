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
    MatGridListModule
  ]
})
export class HomeModule { }






// =============================================================================
// // ANGULAR CORE & COMMON
// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterModule } from '@angular/router';

// import { HomeComponent } from './page/home.component';
// import { HeaderComponent } from './components/header/header.component';
// import { InfoComponent } from './components/info/info.component';
// import { PresentationComponent } from './components/presentation/presentation.component';
// import {MatCardModule} from '@angular/material/card';
// import { I18TranslateModule } from 'src/app/shared/translate/i18-translate.module';

// //Material
// import { MatButtonModule } from '@angular/material/button';
// import { MatGridListModule } from '@angular/material/grid-list';
// import { BabcnContainerModule } from 'src/app/shared/components/babcn-container/babcn-container.module';
// import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
// import { HttpClient } from '@angular/common/http';
// import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// // CDK
// import { LayoutModule } from '@angular/cdk/layout';



// @NgModule({
//   declarations: [
//     HomeComponent,
//     HeaderComponent,
//     InfoComponent,
//     PresentationComponent,
//   ],
//   imports: [
//     CommonModule,
//     RouterModule,
//     MatButtonModule,
//     I18TranslateModule,
//     MatGridListModule,
//     LayoutModule,
//     BabcnContainerModule,
//     TranslateModule.forRoot({
//       loader: {
//         provide: TranslateLoader,
//         useFactory: HttpLoaderFactory,
//         deps: [HttpClient]
//       }
//     }),
    
//   ]
// })
// export class HomeModule { }
// export function HttpLoaderFactory(http: HttpClient) {
//   return new TranslateHttpLoader(http);
// }

// =============================================================================
