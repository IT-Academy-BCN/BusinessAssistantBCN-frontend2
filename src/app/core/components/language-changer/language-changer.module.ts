import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
//MATERIAL
import { MatButtonToggleModule } from '@angular/material/button-toggle';
// COMPONENT: LANGUAGE-CHANGER
import { LanguageChangerComponent } from './language-changer.component';


@NgModule({
  declarations: [
    LanguageChangerComponent
  ],
  imports: [
    CommonModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    //MATERIAL
    MatButtonToggleModule,
  ],
  exports: [
    LanguageChangerComponent,
    TranslateModule,
  ]
})
export class LanguageChangerModule {
  constructor( translate: TranslateService) {
    translate.addLangs(['en', 'es','ca']);
    translate.setDefaultLang('ca');
  }
 }

 // AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

